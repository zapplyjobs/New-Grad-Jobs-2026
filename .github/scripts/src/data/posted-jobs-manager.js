/**
 * Posted Jobs Database Manager
 *
 * Manages job deduplication using:
 * - Active database (posted_jobs.json): Recent 5,000 jobs
 * - Monthly archives: Older jobs for long-term deduplication
 * - Reopening detection: Jobs reposted after >2 months
 */

const fs = require('fs');
const path = require('path');

// Data paths
const dataDir = path.join(process.cwd(), '.github', 'data');
const postedJobsPath = path.join(dataDir, 'posted_jobs.json');

class PostedJobsManager {
  constructor() {
    this.postedJobs = this.loadPostedJobs();
    this.archivesCache = {}; // Lazy-loaded archives for deduplication
    this.archiveDir = path.join(dataDir, 'archive');
  }

  loadPostedJobs() {
    try {
      if (fs.existsSync(postedJobsPath)) {
        const data = JSON.parse(fs.readFileSync(postedJobsPath, 'utf8'));
        return new Set(Array.isArray(data) ? data : []);
      }
    } catch (error) {
      console.error('⚠️  Error loading posted jobs:', error.message);
      console.error('   Starting with empty database');
    }
    return new Set();
  }

  // Load recent archives for deduplication checking (lazy-loaded)
  loadRecentArchives(monthsBack = 2) {
    const now = new Date();
    const archives = {};

    for (let i = 0; i < monthsBack; i++) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const month = date.toISOString().slice(0, 7); // "YYYY-MM"

      try {
        const archivePath = path.join(this.archiveDir, `posted_jobs_${month}.json`);

        if (fs.existsSync(archivePath)) {
          const data = JSON.parse(fs.readFileSync(archivePath, 'utf8'));
          archives[month] = new Set(Array.isArray(data) ? data : []);
          console.log(`📚 Loaded archive: ${month} (${archives[month].size} jobs)`);
        }
      } catch (error) {
        console.error(`⚠️  Corrupted archive ${month}, ignoring:`, error.message);
        archives[month] = new Set(); // Empty set, don't crash
      }
    }

    return archives;
  }

  // Find job in archives and return archive info
  findInArchives(jobId) {
    // Lazy-load archives only when needed
    if (Object.keys(this.archivesCache).length === 0) {
      this.archivesCache = this.loadRecentArchives(2);
    }

    for (const [month, archive] of Object.entries(this.archivesCache)) {
      if (archive.has(jobId)) {
        return { month, found: true };
      }
    }

    return null;
  }

  // Calculate months since archive month
  getMonthsSinceArchive(archiveMonth) {
    const now = new Date();
    const archive = new Date(archiveMonth + '-01');
    const months = (now.getFullYear() - archive.getFullYear()) * 12 +
                   (now.getMonth() - archive.getMonth());
    return months;
  }

  // Calculate days since job posting date
  getDaysSincePosted(datePosted) {
    if (!datePosted) return null;

    try {
      const posted = new Date(datePosted);
      if (isNaN(posted.getTime())) return null;

      const now = new Date();
      const diffMs = now - posted;
      return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    } catch (error) {
      return null;
    }
  }

  // Archive oldest N jobs to monthly archive file
  archiveOldestJobs(count) {
    try {
      // Create archive directory if needed
      if (!fs.existsSync(this.archiveDir)) {
        fs.mkdirSync(this.archiveDir, { recursive: true });
        console.log(`📁 Created archive directory: ${this.archiveDir}`);
      }

      const month = new Date().toISOString().slice(0, 7); // "YYYY-MM"
      const archivePath = path.join(this.archiveDir, `posted_jobs_${month}.json`);

      // Get oldest jobs (array is sorted, so first N are oldest)
      const sortedJobs = [...this.postedJobs].sort();
      const toArchive = sortedJobs.slice(0, count);

      console.log(`📦 Archiving ${count} oldest jobs to ${month} archive...`);

      // Load existing archive or create new
      let existingArchive = [];
      if (fs.existsSync(archivePath)) {
        try {
          existingArchive = JSON.parse(fs.readFileSync(archivePath, 'utf8'));
          if (!Array.isArray(existingArchive)) existingArchive = [];
        } catch (error) {
          console.error(`⚠️  Corrupted existing archive, creating new:`, error.message);
          existingArchive = [];
        }
      }

      // Merge and deduplicate
      const mergedArchive = [...new Set([...existingArchive, ...toArchive])].sort();

      // Atomic write with verification (same pattern as main database)
      const tempPath = archivePath + '.tmp';
      const jsonData = JSON.stringify(mergedArchive, null, 2);

      const fd = fs.openSync(tempPath, 'w');
      fs.writeSync(fd, jsonData);
      fs.fsyncSync(fd); // Force disk flush
      fs.closeSync(fd);

      fs.renameSync(tempPath, archivePath);

      // Verify write
      const verifyData = JSON.parse(fs.readFileSync(archivePath, 'utf8'));
      console.log(`✅ Archive verified: ${verifyData.length} total jobs in ${month}`);

      // Remove archived jobs from active database
      toArchive.forEach(jobId => this.postedJobs.delete(jobId));
      console.log(`💾 Active database now has ${this.postedJobs.size} jobs`);

      // Invalidate cache to reload on next check
      this.archivesCache = {};

    } catch (error) {
      console.error('❌ ERROR during archiving:', error.message);
      console.error('   Continuing without archiving (will retry next time)');
      // Don't crash - archiving failure shouldn't stop bot
    }
  }

  savePostedJobs() {
    try {
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }

      // Convert Set to array (preserves insertion order)
      let postedJobsArray = [...this.postedJobs];
      const maxEntries = 5000; // Keep active database at 5000 max
      const archiveThreshold = parseInt(process.env.ARCHIVE_THRESHOLD) || 4500;

      console.log(`💾 BEFORE SAVE: Database has ${postedJobsArray.length} jobs`);

      // Check if archiving needed (before trimming)
      if (postedJobsArray.length > archiveThreshold) {
        const isFirstArchive = !fs.existsSync(this.archiveDir) ||
                               fs.readdirSync(this.archiveDir).length === 0;

        if (isFirstArchive) {
          console.log(`📦 FIRST-TIME ARCHIVE: Bootstrapping with 1500 jobs`);
          this.archiveOldestJobs(1500);
        } else {
          console.log(`📦 CAPACITY REACHED: Archiving oldest 1000 jobs`);
          this.archiveOldestJobs(1000);
        }

        // Refresh array after archiving
        postedJobsArray = [...this.postedJobs];
      }

      // Fallback trimming if still over limit (shouldn't happen, but safety)
      if (postedJobsArray.length > maxEntries) {
        postedJobsArray = postedJobsArray.slice(-maxEntries);
        this.postedJobs = new Set(postedJobsArray);
        console.log(`⚠️  Emergency trim to ${maxEntries} jobs`);
      }

      // Sort for consistent file output
      postedJobsArray = postedJobsArray.sort();

      // Atomic write with explicit fsync to force disk flush
      const tempPath = postedJobsPath + '.tmp';
      const jsonData = JSON.stringify(postedJobsArray, null, 2);

      // Open file, write, force flush to disk, then close
      const fd = fs.openSync(tempPath, 'w');
      fs.writeSync(fd, jsonData);
      fs.fsyncSync(fd); // CRITICAL: Force kernel to write to disk immediately
      fs.closeSync(fd);

      // Atomic rename
      fs.renameSync(tempPath, postedJobsPath);

      // VERIFICATION: Read back and verify write succeeded
      const verifyData = JSON.parse(fs.readFileSync(postedJobsPath, 'utf8'));
      if (verifyData.length !== postedJobsArray.length) {
        throw new Error(`❌ WRITE VERIFICATION FAILED: Expected ${postedJobsArray.length} jobs, but file contains ${verifyData.length} jobs`);
      }

      console.log(`💾 Saved ${postedJobsArray.length} posted jobs to database`);
      console.log(`✅ Verified: Database file contains ${verifyData.length} jobs`);

    } catch (error) {
      // CRITICAL: Log full error details and exit with failure
      console.error('❌❌❌ CRITICAL ERROR SAVING POSTED JOBS ❌❌❌');
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
      console.error('Database path:', postedJobsPath);
      console.error('Attempted to save:', this.postedJobs.size, 'jobs');

      // Exit with error code to fail the workflow and alert us
      process.exit(1);
    }
  }

  hasBeenPosted(jobId, jobData = null) {
    // Check 1: Active database (fast)
    if (this.postedJobs.has(jobId)) {
      return true;
    }

    // Check 2: Recent archives (for jobs that were archived)
    const archiveInfo = this.findInArchives(jobId);

    if (!archiveInfo) {
      return false; // Not in database or archives = new job
    }

    // Job found in archive - check if it's a reopening
    const monthsOld = this.getMonthsSinceArchive(archiveInfo.month);

    // Rule 1: If archived <2 months ago, don't repost (prevent duplicates)
    if (monthsOld < 2) {
      return true;
    }

    // Rule 2: If archived >2 months ago, check for reopening
    if (jobData && jobData.date_posted) {
      const daysOld = this.getDaysSincePosted(jobData.date_posted);

      if (daysOld !== null && daysOld <= 30) {
        // Recent posting date = likely reopening
        console.log(`♻️  Job reopening detected: ${jobId}`);
        console.log(`   Archived: ${monthsOld} months ago, Source date: ${daysOld} days ago`);
        return false; // Allow reposting
      }
    }

    // Rule 3: No date available but very old (>3 months) - assume reopening
    if (monthsOld >= 3 && (!jobData || !jobData.date_posted)) {
      console.log(`⚠️  Old job without date: ${jobId} (${monthsOld} months) - assuming reopening`);
      return false; // Allow reposting
    }

    return true; // Job was posted before (don't repost)
  }

  markAsPosted(jobId) {
    this.postedJobs.add(jobId);
    this.savePostedJobs();
  }
}

module.exports = PostedJobsManager;
