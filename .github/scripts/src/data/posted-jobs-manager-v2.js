/**
 * Posted Jobs Database Manager V2
 *
 * Manages job deduplication with instance tracking and automatic archiving:
 * - Active database (posted_jobs.json): Jobs posted in last 7 days
 * - Monthly archives: Older jobs preserved forever for historical analysis
 * - Reopening detection: Same job reposted months later with fresh source date
 * - Instance tracking: Full history of each job's posting timeline
 *
 * Key Features:
 * - 7-day TTL auto-archiving (matches Discord cleanup window)
 * - Tracks posting instances (1st, 2nd, 3rd time job appeared)
 * - Source date freshness detection (identifies true reopenings)
 * - Backwards compatible with V1 simple array format
 */

const fs = require('fs');
const path = require('path');

// Data paths
const dataDir = path.join(process.cwd(), '.github', 'data');
const postedJobsPath = path.join(dataDir, 'posted_jobs.json');

class PostedJobsManagerV2 {
  constructor() {
    this.data = this.loadPostedJobs();
    this.archiveDir = path.join(dataDir, 'archive');
    this.activeWindowDays = parseInt(process.env.ACTIVE_WINDOW_DAYS) || 7;
    this.reopeningWindowDays = parseInt(process.env.REOPENING_WINDOW_DAYS) || 7;
    // Track counters during this session to prevent duplicates in same batch
    this.sessionChannelCounters = {};
    // Cache archive channel counts to avoid re-reading files (performance fix)
    this.archiveChannelCounts = this.loadArchiveChannelCounts();
  }

  /**
   * Load posted_jobs.json with backwards compatibility
   * Supports both V1 (simple array) and V2 (structured object) formats
   */
  loadPostedJobs() {
    try {
      if (!fs.existsSync(postedJobsPath)) {
        console.log('📝 No existing posted_jobs.json, starting fresh');
        return this.createEmptyDatabase();
      }

      const rawData = JSON.parse(fs.readFileSync(postedJobsPath, 'utf8'));

      // V1 format: Simple array of job IDs
      if (Array.isArray(rawData)) {
        console.log('🔄 Migrating V1 format to V2...');
        return this.migrateFromV1(rawData);
      }

      // V2 format: Structured object
      if (rawData.version === 2) {
        console.log(`✅ Loaded V2 database: ${rawData.jobs.length} jobs`);
        return rawData;
      }

      // Unknown format
      console.error('⚠️  Unknown database format, starting fresh');
      return this.createEmptyDatabase();

    } catch (error) {
      console.error('❌ Error loading posted jobs:', error.message);
      console.error('   Starting with empty database');
      return this.createEmptyDatabase();
    }
  }

  /**
   * Create empty V2 database structure
   */
  createEmptyDatabase() {
    return {
      version: 2,
      lastUpdated: new Date().toISOString(),
      jobs: [],
      metadata: {
        totalJobs: 0,
        activeWindowDays: this.activeWindowDays,
        channelJobNumbers: {} // Persist highest job number per channel (fixes non-sequential counter bug)
      }
    };
  }

  /**
   * Migrate V1 simple array to V2 structured format
   * Assigns current timestamp to all existing jobs (treated as archived)
   */
  migrateFromV1(jobIdsArray) {
    const now = new Date().toISOString();
    const eightDaysAgo = new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString();

    const jobs = jobIdsArray.map((jobId, index) => ({
      id: `${jobId}-migrated-${index}`,
      jobId: jobId,
      company: 'Unknown (migrated)',
      title: 'Unknown (migrated)',
      postedToDiscord: eightDaysAgo, // 8 days ago (will be archived on next save)
      sourceDate: null,
      sourceUrl: null,
      discordThreadId: null,
      instanceNumber: 1
    }));

    console.log(`✅ Migrated ${jobs.length} V1 jobs to V2 format`);
    console.log('   All migrated jobs will be archived on next save (>7 days old)');

    return {
      version: 2,
      lastUpdated: now,
      jobs: jobs,
      metadata: {
        totalJobs: jobs.length,
        activeWindowDays: this.activeWindowDays,
        channelJobNumbers: {}, // Will be initialized on first use
        migratedFromV1: true,
        migrationDate: now
      }
    };
  }

  /**
   * Check if job has been posted before (with reopening detection)
   *
   * EMERGENCY FIX 2026-01-29: Hybrid ID check to handle ID mismatch bug
   * - Checks both URL-based IDs (from job fetcher) and SHA256 IDs (from database)
   * - Prevents jobs from being stuck in pending queue indefinitely
   * - See: BUG_REPORT_ID_MISMATCH.md for full details
   *
   * @param {string} jobId - Unique job identifier (URL-based from utils.js)
   * @param {object} jobData - Full job data from API (includes sourceDate)
   * @returns {boolean} - true if already posted (skip), false if new/reopening (post it)
   */
  hasBeenPosted(jobId, jobData = null) {
    // Find all instances of this job (using URL-based ID)
    let instances = this.data.jobs.filter(job => job.jobId === jobId);

    // EMERGENCY FIX: Also check with SHA256 ID (database format)
    // This handles the ID mismatch bug where job fetcher uses URL-based IDs
    // but database uses SHA256 hash IDs
    if (instances.length === 0 && jobData) {
      const sha256Id = this.generateJobId(jobData);
      instances = this.data.jobs.filter(job => job.jobId === sha256Id);
      if (instances.length > 0) {
        console.log(`🔧 ID mismatch detected: URL-based "${jobId.substring(0, 40)}..." not found, but found as SHA256 "${sha256Id}"`);
      }
    }

    if (instances.length === 0) {
      // Never posted before
      return false;
    }

    // Check if any instance is still active (posted within last 7 days)
    const cutoffDate = new Date(Date.now() - this.activeWindowDays * 24 * 60 * 60 * 1000);
    const hasActiveInstance = instances.some(inst =>
      new Date(inst.postedToDiscord) > cutoffDate
    );

    if (hasActiveInstance) {
      // Already posted recently - duplicate
      console.log(`⏭️  Skipping duplicate: ${jobId} (posted within ${this.activeWindowDays} days)`);
      return true;
    }

    // All instances are archived (>7 days old)
    // Check if job was posted before - use archived sourceDate for age checking
    const existingInstances = instances.sort((a, b) =>
      new Date(a.sourceDate || a.postedToDiscord) - new Date(b.sourceDate || b.postedToDiscord)
    );

    if (existingInstances.length > 0) {
      const originalInstance = existingInstances[0];
      const originalDate = new Date(originalInstance.sourceDate || originalInstance.postedToDiscord);
      const daysSinceOriginalPost = (Date.now() - originalDate.getTime()) / (1000 * 60 * 60 * 24);

      // Reject jobs that are too old from their ORIGINAL posting, regardless of "refreshes"
      if (daysSinceOriginalPost > 7) {
        console.log(`⏭️  Skipping old job: ${jobId} (original posting ${Math.floor(daysSinceOriginalPost)} days ago, max is 7)`);
        return true;
      }
    }

    // Check if this is a reopening (fresh source date from API)
    if (jobData && jobData.job_posted_at_datetime_utc) {
      const sourceDate = new Date(jobData.job_posted_at_datetime_utc);
      const daysSinceSourcePost = (Date.now() - sourceDate.getTime()) / (1000 * 60 * 60 * 24);

      if (daysSinceSourcePost <= this.reopeningWindowDays) {
        // Fresh source date = reopening!
        const instanceCount = instances.length + 1;
        console.log(`♻️  Reopening detected: ${jobData.job_title} @ ${jobData.employer_name}`);
        console.log(`   Previous instances: ${instances.length}, This will be instance #${instanceCount}`);
        console.log(`   Source date: ${sourceDate.toISOString().split('T')[0]} (${Math.floor(daysSinceSourcePost)} days ago)`);
        return false; // Allow reposting
      } else {
        // Old source date = stale API data
        console.log(`⏭️  Skipping stale data: ${jobId} (source date ${Math.floor(daysSinceSourcePost)} days old)`);
        return true;
      }
    }

    // No source date available - check archive age
    const oldestInstance = instances.sort((a, b) =>
      new Date(a.postedToDiscord) - new Date(b.postedToDiscord)
    )[0];
    const monthsSinceOldest = (Date.now() - new Date(oldestInstance.postedToDiscord).getTime()) / (1000 * 60 * 60 * 24 * 30);

    if (monthsSinceOldest >= 3) {
      // Very old (>3 months), assume reopening
      console.log(`♻️  Assuming reopening: ${jobId} (oldest instance ${Math.floor(monthsSinceOldest)} months ago)`);
      return false;
    }

    // Default: skip (already posted, not a reopening)
    return true;
  }

  /**
   * Mark job as posted to Discord
   *
   * @param {string} jobId - Unique job identifier
   * @param {object} jobData - Full job data from API
   * @param {string} discordThreadId - Discord thread ID for cross-reference
   */
  markAsPosted(jobId, jobData, discordThreadId = null) {
    const now = new Date().toISOString();

    // Calculate instance number
    const existingInstances = this.data.jobs.filter(job => job.jobId === jobId);
    const instanceNumber = existingInstances.length + 1;

    // Create unique ID for this posting instance
    const instanceId = `${jobId}-${now.split('T')[0]}-${instanceNumber}`;

    const newJob = {
      id: instanceId,
      jobId: jobId,
      company: jobData.employer_name || 'Unknown',
      title: jobData.job_title || 'Unknown',
      postedToDiscord: now,
      sourceDate: jobData.job_posted_at_datetime_utc || null,
      sourceUrl: jobData.job_apply_link || null,
      discordThreadId: discordThreadId,
      instanceNumber: instanceNumber,
      // NEW: Multi-channel tracking
      discordPosts: {}, // Will be populated by markAsPostedToChannel()
      // Location fields for routing (Bug #3 fix - 2026-01-26)
      job_city: jobData.job_city || null,
      job_state: jobData.job_state || null,
      job_description: jobData.job_description || null
    };

    this.data.jobs.push(newJob);
    this.data.lastUpdated = now;
    this.data.metadata.totalJobs = this.data.jobs.length;

    console.log(`💾 Marked as posted: ${jobData.job_title} @ ${jobData.employer_name} (instance #${instanceNumber})`);

    this.savePostedJobs();
  }

  /**
   * Mark job as posted to a specific Discord channel (NEW for multi-channel tracking)
   *
   * @param {object} jobData - Full job data from API
   * @param {string} messageId - Discord message ID
   * @param {string} channelId - Discord channel ID
   * @param {string} channelType - Channel type ('category' or 'location')
   * @param {number} channelJobNumber - Optional: Pre-calculated job number for this channel
   * @returns {boolean} - Success status
   */
  markAsPostedToChannel(jobData, messageId, channelId, channelType, channelJobNumber = null) {
    const now = new Date().toISOString();
    const jobId = this.generateJobId(jobData);
    const today = now.split('T')[0];

    // Find existing job record (from current active window)
    let jobRecord = this.data.jobs.find(job =>
      job.jobId === jobId &&
      new Date(job.postedToDiscord) > new Date(Date.now() - this.activeWindowDays * 24 * 60 * 60 * 1000)
    );

    if (!jobRecord) {
      // Check if this job was already posted TODAY (prevent same-day duplicates)
      const alreadyPostedToday = this.data.jobs.some(job =>
        job.jobId === jobId &&
        job.postedToDiscord.startsWith(today)
      );

      if (alreadyPostedToday) {
        console.log(`⏭️  Skipping duplicate posted today: ${jobData.job_title} @ ${jobData.employer_name}`);
        return false;
      }

      // First posting of this job - create new record
      const existingInstances = this.data.jobs.filter(job => job.jobId === jobId);
      const instanceNumber = existingInstances.length + 1;
      const instanceId = `${jobId}-${today}-${instanceNumber}`;

      jobRecord = {
        id: instanceId,
        jobId: jobId,
        company: jobData.employer_name || 'Unknown',
        title: jobData.job_title || 'Unknown',
        postedToDiscord: now,
        sourceDate: jobData.job_posted_at_datetime_utc || null,
        sourceUrl: jobData.job_apply_link || null,
        discordPosts: {},
        instanceNumber: instanceNumber,
        // Location fields for routing (Bug #3 fix - 2026-01-26)
        job_city: jobData.job_city || null,
        job_state: jobData.job_state || null,
        job_description: jobData.job_description || null
      };

      this.data.jobs.push(jobRecord);
      this.data.metadata.totalJobs = this.data.jobs.length;
    }

    // Add this channel's posting to the record
    if (!jobRecord.discordPosts) {
      jobRecord.discordPosts = {};
    }

    // Use provided counter or calculate new one (prevents duplicate counters in same batch)
    const finalChannelJobNumber = channelJobNumber !== null
      ? channelJobNumber
      : this.getChannelJobNumber(channelId);

    jobRecord.discordPosts[channelId] = {
      messageId: messageId,
      channelType: channelType,
      postedAt: now,
      channelJobNumber: finalChannelJobNumber
    };

    this.data.lastUpdated = now;

    const channelCount = Object.keys(jobRecord.discordPosts).length;
    console.log(`💾 Added channel posting: ${jobData.job_title} @ ${jobData.employer_name} → ${channelType} channel (${channelCount} total channels)`);

    this.savePostedJobs();
    return true;
  }

  /**
   * Check if job has been posted to a specific channel (NEW for multi-channel tracking)
   *
   * EMERGENCY FIX 2026-01-29: Hybrid ID check to handle ID mismatch bug
   * - Checks both URL-based IDs (from job.id field) and SHA256 IDs (from database)
   * - Prevents jobs from being incorrectly marked as "already posted to channel"
   * - See: BUG_REPORT_ID_MISMATCH.md for full details
   *
   * @param {object} jobData - Full job data from API (may include job.id with URL-based ID)
   * @param {string} channelId - Discord channel ID to check
   * @returns {boolean} - true if already posted to this channel
   */
  hasBeenPostedToChannel(jobData, channelId) {
    const sha256Id = this.generateJobId(jobData);
    const cutoffDate = new Date(Date.now() - this.activeWindowDays * 24 * 60 * 60 * 1000);

    // First try: Find by SHA256 ID (database format)
    let jobRecord = this.data.jobs.find(job =>
      job.jobId === sha256Id &&
      new Date(job.postedToDiscord) > cutoffDate
    );

    // Second try: Find by URL-based ID (job fetcher format)
    if (!jobRecord && jobData.id) {
      jobRecord = this.data.jobs.find(job =>
        job.jobId === jobData.id &&
        new Date(job.postedToDiscord) > cutoffDate
      );
    }

    if (!jobRecord) {
      return false;
    }

    // Check if posted to this specific channel
    return !!(jobRecord.discordPosts && jobRecord.discordPosts[channelId]);
  }

  /**
   * Get the next job number for a specific channel (FIXED: sequential across sessions)
   *
   * Uses persisted highest job number from metadata instead of recalculating from active jobs.
   * This prevents counter jumps when jobs expire and are removed from active database.
   *
   * @param {string} channelId - Discord channel ID
   * @returns {number} - Next job number for this channel
   */
  getChannelJobNumber(channelId) {
    // Initialize metadata structure if needed
    if (!this.data.metadata.channelJobNumbers) {
      this.data.metadata.channelJobNumbers = {};
    }

    // Check if we need to initialize this channel's counter
    if (this.sessionChannelCounters[channelId] === undefined) {
      // Load persisted highest job number from metadata
      let persistedCount = this.data.metadata.channelJobNumbers[channelId] || 0;

      // If no persisted value, calculate initial count from existing data
      if (persistedCount === 0) {
        let activeCount = 0;
        for (const job of this.data.jobs) {
          if (job.discordPosts && job.discordPosts[channelId]) {
            activeCount++;
          }
        }
        const archiveCount = this.archiveChannelCounts[channelId] || 0;
        persistedCount = activeCount + archiveCount;

        console.log(`🔢 Initialized channel ${channelId} counter at ${persistedCount} (active: ${activeCount}, archive: ${archiveCount})`);
      } else {
        console.log(`🔢 Loaded persisted counter for channel ${channelId}: ${persistedCount}`);
      }

      // Initialize session counter with persisted value
      this.sessionChannelCounters[channelId] = persistedCount;
    }

    // Increment and return the next job number for this channel
    this.sessionChannelCounters[channelId]++;

    // Persist the new highest value to metadata
    this.data.metadata.channelJobNumbers[channelId] = this.sessionChannelCounters[channelId];

    return this.sessionChannelCounters[channelId];
  }

  /**
   * Load archive channel counts once at startup (performance optimization)
   * Prevents O(n*m) complexity when counting channel posts across archives
   *
   * @returns {object} - Map of channelId -> count
   */
  loadArchiveChannelCounts() {
    const counts = {};

    if (!fs.existsSync(this.archiveDir)) {
      return counts;
    }

    const archiveFiles = fs.readdirSync(this.archiveDir);
    for (const file of archiveFiles) {
      if (!file.endsWith('.json')) continue;

      try {
        const archivePath = path.join(this.archiveDir, file);
        const archiveJobs = JSON.parse(fs.readFileSync(archivePath, 'utf8'));

        if (!Array.isArray(archiveJobs)) continue;

        // Count posts per channel in this archive file
        for (const job of archiveJobs) {
          if (job.discordPosts) {
            for (const channelId of Object.keys(job.discordPosts)) {
              counts[channelId] = (counts[channelId] || 0) + 1;
            }
          }
        }
      } catch (error) {
        console.error(`⚠️  Error reading archive ${file}:`, error.message);
      }
    }

    const totalChannels = Object.keys(counts).length;
    const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
    console.log(`✅ Loaded archive channel counts: ${totalCount} posts across ${totalChannels} channels`);

    return counts;
  }

  /**
   * Generate unique job ID from job data (hash of company + title + URL)
   *
   * @param {object} jobData - Full job data from API
   * @returns {string} - Unique job identifier
   */
  generateJobId(jobData) {
    const crypto = require('crypto');
    const key = `${jobData.employer_name}|${jobData.job_title}|${jobData.job_apply_link}`;
    return crypto.createHash('sha256').update(key).digest('hex').substring(0, 16);
  }

  /**
   * Archive jobs older than active window (7 days) to monthly files
   *
   * @returns {object} - Statistics about archiving operation
   */
  archiveOldJobs() {
    const cutoffDate = new Date(Date.now() - this.activeWindowDays * 24 * 60 * 60 * 1000);

    // Separate active vs. to-be-archived jobs
    const activeJobs = [];
    const jobsToArchive = [];

    this.data.jobs.forEach(job => {
      if (new Date(job.postedToDiscord) > cutoffDate) {
        activeJobs.push(job);
      } else {
        jobsToArchive.push(job);
      }
    });

    if (jobsToArchive.length === 0) {
      console.log(`✅ No jobs to archive (all ${activeJobs.length} jobs within ${this.activeWindowDays}-day window)`);
      return { archived: 0, active: activeJobs.length };
    }

    // Create archive directory if needed
    if (!fs.existsSync(this.archiveDir)) {
      fs.mkdirSync(this.archiveDir, { recursive: true });
      console.log(`📁 Created archive directory: ${this.archiveDir}`);
    }

    // Group jobs by month for archiving
    const jobsByMonth = {};
    jobsToArchive.forEach(job => {
      const month = job.postedToDiscord.slice(0, 7); // "YYYY-MM"
      if (!jobsByMonth[month]) {
        jobsByMonth[month] = [];
      }
      jobsByMonth[month].push(job);
    });

    // Archive each month's jobs
    let totalArchived = 0;
    Object.entries(jobsByMonth).forEach(([month, jobs]) => {
      const archivePath = path.join(this.archiveDir, `${month}.json`);

      // Load existing archive or create new
      let existingArchive = [];
      if (fs.existsSync(archivePath)) {
        try {
          existingArchive = JSON.parse(fs.readFileSync(archivePath, 'utf8'));
          if (!Array.isArray(existingArchive)) existingArchive = [];
        } catch (error) {
          console.error(`⚠️  Corrupted archive ${month}, creating new:`, error.message);
          existingArchive = [];
        }
      }

      // Merge and deduplicate (by unique instance ID)
      const existingIds = new Set(existingArchive.map(j => j.id));
      const newJobs = jobs.filter(j => !existingIds.has(j.id));
      const mergedArchive = [...existingArchive, ...newJobs].sort((a, b) =>
        new Date(a.postedToDiscord) - new Date(b.postedToDiscord)
      );

      // Atomic write with verification
      const tempPath = archivePath + '.tmp';
      const jsonData = JSON.stringify(mergedArchive, null, 2);

      const fd = fs.openSync(tempPath, 'w');
      fs.writeSync(fd, jsonData);
      fs.fsyncSync(fd);
      fs.closeSync(fd);

      fs.renameSync(tempPath, archivePath);

      console.log(`📦 Archived ${newJobs.length} jobs to ${month}.json (${mergedArchive.length} total in archive)`);
      totalArchived += newJobs.length;
    });

    // Update active database
    this.data.jobs = activeJobs;
    this.data.metadata.totalJobs = activeJobs.length;

    console.log(`✅ Archiving complete: ${totalArchived} archived, ${activeJobs.length} active`);

    return {
      archived: totalArchived,
      active: activeJobs.length,
      months: Object.keys(jobsByMonth).length
    };
  }

  /**
   * Save posted_jobs.json with automatic archiving
   * CRITICAL: Reloads database before saving to prevent race conditions from concurrent workflow runs
   */
  savePostedJobs() {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      const now = new Date().toISOString();

      // CRITICAL: Cache memory state BEFORE reload (Bug fix 2026-01-26)
      // Line 497 overwrites this.data, destroying in-memory changes!
      const memoryJobsSnapshot = this.data.jobs.slice(); // Shallow copy is OK (objects are references)
      console.log(`💾 BEFORE MERGE: ${memoryJobsSnapshot.length} jobs in memory (cached)`);

      // Reload database to merge concurrent changes
      // Without this, concurrent workflow runs overwrite each other's updates
      const diskData = this.loadPostedJobs();
      console.log(`💾 DISK STATE: ${diskData.jobs.length} jobs on disk`);

      // Merge strategy: Combine jobs from both disk and memory, preferring newer data
      const mergedJobs = new Map();

      // Add all disk jobs first
      diskData.jobs.forEach(job => {
        mergedJobs.set(job.id, job);
      });

      // Add/update with memory jobs (newer or more complete data wins)
      let mergeStats = {newJobs: 0, newerJobs: 0, deepMerged: 0, skipped: 0};

      // Use CACHED memory jobs, not this.data.jobs (which was overwritten by reload)
      console.log(`💾 DEBUG: Iterating cached memory jobs - length=${memoryJobsSnapshot.length}`);

      const memoryJobs = memoryJobsSnapshot; // Use cached snapshot
      for (let i = 0; i < memoryJobs.length; i++) {
        const job = memoryJobs[i];
        if (!job || !job.id) {
          console.warn(`  ⚠️  Skipping invalid job at index ${i}`);
          continue;
        }

        const existing = mergedJobs.get(job.id);
        if (!existing) {
          // New job only in memory
          mergedJobs.set(job.id, job);
          mergeStats.newJobs++;
        } else if (new Date(job.postedToDiscord) > new Date(existing.postedToDiscord)) {
          // Memory version is newer - use it
          mergedJobs.set(job.id, job);
          mergeStats.newerJobs++;
        } else if (new Date(job.postedToDiscord).getTime() === new Date(existing.postedToDiscord).getTime()) {
          // Same timestamp - merge discordPosts directly into existing object
          const memoryChannels = job.discordPosts ? Object.keys(job.discordPosts).length : 0;
          const diskChannels = existing.discordPosts ? Object.keys(existing.discordPosts).length : 0;

          if (job.discordPosts && memoryChannels > 0) {
            // Modify existing object in place (already in mergedJobs)
            existing.discordPosts = {...(existing.discordPosts || {}), ...job.discordPosts};
            const mergedChannels = Object.keys(existing.discordPosts).length;
            if (mergedChannels !== diskChannels) {
              mergeStats.deepMerged++;
              console.log(`  🔀 Deep merged: ${job.title} @ ${job.company} (disk: ${diskChannels} channels → merged: ${mergedChannels} channels)`);
            }
          }
          // No need to set - existing is already in mergedJobs
        } else {
          mergeStats.skipped++;
        }
        // else: disk version is newer, keep it (already in map)
      }

      console.log(`💾 MERGE STATS: ${mergeStats.newJobs} new, ${mergeStats.newerJobs} updated, ${mergeStats.deepMerged} deep-merged, ${mergeStats.skipped} skipped`);

      // Update in-memory state with merged data
      this.data.jobs = Array.from(mergedJobs.values());
      console.log(`💾 AFTER MERGE: ${this.data.jobs.length} jobs (merged disk + memory)`);

      // Archive old jobs before saving
      const archiveStats = this.archiveOldJobs();

      // Update metadata
      this.data.lastUpdated = now;
      this.data.metadata.lastArchive = {
        date: now,
        archived: archiveStats.archived,
        monthsAffected: archiveStats.months
      };

      // Atomic write with verification
      const tempPath = postedJobsPath + '.tmp';
      const jsonData = JSON.stringify(this.data, null, 2);

      const fd = fs.openSync(tempPath, 'w');
      fs.writeSync(fd, jsonData);
      fs.fsyncSync(fd); // Force disk flush
      fs.closeSync(fd);

      fs.renameSync(tempPath, postedJobsPath);

      // Verification
      const verifyData = JSON.parse(fs.readFileSync(postedJobsPath, 'utf8'));
      if (verifyData.jobs.length !== this.data.jobs.length) {
        throw new Error(`Write verification failed: Expected ${this.data.jobs.length} jobs, got ${verifyData.jobs.length}`);
      }

      console.log(`💾 Saved posted_jobs.json: ${this.data.jobs.length} active jobs`);
      console.log(`✅ Verified: Database file matches in-memory state`);

    } catch (error) {
      console.error('❌❌❌ CRITICAL ERROR SAVING POSTED JOBS ❌❌❌');
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('Database path:', postedJobsPath);
      console.error('Attempted to save:', this.data.jobs.length, 'jobs');
      process.exit(1);
    }
  }

  /**
   * Get statistics about the database
   */
  getStats() {
    const cutoffDate = new Date(Date.now() - this.activeWindowDays * 24 * 60 * 60 * 1000);
    const activeCount = this.data.jobs.filter(j => new Date(j.postedToDiscord) > cutoffDate).length;
    const toArchiveCount = this.data.jobs.length - activeCount;

    // Count unique jobs (by jobId)
    const uniqueJobIds = new Set(this.data.jobs.map(j => j.jobId));

    // Count instances per job
    const instanceCounts = {};
    this.data.jobs.forEach(job => {
      instanceCounts[job.jobId] = (instanceCounts[job.jobId] || 0) + 1;
    });
    const maxInstances = Math.max(...Object.values(instanceCounts), 0);

    return {
      version: this.data.version,
      totalRecords: this.data.jobs.length,
      uniqueJobs: uniqueJobIds.size,
      activeJobs: activeCount,
      toBeArchived: toArchiveCount,
      maxInstances: maxInstances,
      activeWindowDays: this.activeWindowDays,
      lastUpdated: this.data.lastUpdated
    };
  }
}

module.exports = PostedJobsManagerV2;
