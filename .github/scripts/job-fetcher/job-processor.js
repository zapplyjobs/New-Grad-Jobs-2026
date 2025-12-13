const fs = require('fs');
const path = require('path');
const { fetchAllJobs } = require('../unified-job-fetcher');
const {
    generateJobId,
    migrateOldJobId,
    isUSOnlyJob,
    getExperienceLevel,
    getJobCategory,
    formatLocation
} = require('./utils');

// Description fetcher service
const { fetchDescriptionsBatch } = require('../../../jobboard/src/backend/services/descriptionFetchers');

// Markdown converter for HTML-to-Markdown conversion
const { convertHtmlToMarkdown } = require('./utils/markdown-converter');

// Generate company statistics with categories
function generateCompanyStats(jobs) {
    const stats = {
        byCategory: {},
        byLevel: { 'Entry-Level': 0, 'Mid-Level': 0, 'Senior': 0 },
        byLocation: {},
        totalByCompany: {}
    };
    
    jobs.forEach(job => {
        // Category stats
        const category = getJobCategory(job.job_title, job.job_description);
        stats.byCategory[category] = (stats.byCategory[category] || 0) + 1;
        
        // Level stats
        const level = getExperienceLevel(job.job_title, job.job_description);
        stats.byLevel[level]++;
        
        // Location stats
        const location = formatLocation(job.job_city, job.job_state);
        stats.byLocation[location] = (stats.byLocation[location] || 0) + 1;
        
        // Company stats
        stats.totalByCompany[job.employer_name] = (stats.totalByCompany[job.employer_name] || 0) + 1;
    });
    
    return stats;
}

// Write the new jobs JSON for Discord with atomic writes
function writeNewJobsJson(jobs) {
    // Limit to 10 jobs per run to prevent channel overflow and timeouts
    // This matches the Discord bot's MAX_JOBS_PER_RUN limit
    const MAX_JOBS_PER_RUN = 10;
    const originalCount = jobs.length;
    const jobsToWrite = jobs.slice(0, MAX_JOBS_PER_RUN);
    const deferredCount = originalCount - jobsToWrite.length;

    if (deferredCount > 0) {
        console.log(`⏸️ Limiting to ${MAX_JOBS_PER_RUN} jobs this run, ${deferredCount} deferred (will be fetched in next run)`);
    }

    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');

    try {
        // Ensure data folder exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Atomic write: write to temp file then rename
        const outPath = path.join(dataDir, 'new_jobs.json');
        const tempPath = path.join(dataDir, 'new_jobs.tmp.json');

        // Write to temporary file
        fs.writeFileSync(tempPath, JSON.stringify(jobsToWrite, null, 2), 'utf8');

        // Atomic rename - this prevents corruption if process is killed mid-write
        fs.renameSync(tempPath, outPath);

        console.log(`✨ Wrote ${jobsToWrite.length} new jobs to ${outPath}`);

    } catch (error) {
        console.error('❌ Error writing new_jobs.json:', error.message);

        // Clean up temp file if it exists
        const tempPath = path.join(dataDir, 'new_jobs.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                console.error('⚠️ Could not clean up temp file:', cleanupError.message);
            }
        }

        throw error; // Re-throw to stop execution
    }
}

// Update seen jobs store with atomic writes to prevent corruption
function updateSeenJobsStore(jobs, seenIds) {
    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    
    try {
        // Ensure data folder exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }
        
        // Mark new jobs as seen
        jobs.forEach(job => seenIds.add(job.id));
        
        // Convert Set to sorted array for consistency
        let seenJobsArray = [...seenIds].sort();
        
        // Cleanup: Remove entries older than 30 days to prevent infinite growth
        // This is safe because we only track jobs from the last week anyway
        const maxEntries = 10000; // Reasonable upper limit
        if (seenJobsArray.length > maxEntries) {
            seenJobsArray = seenJobsArray.slice(-maxEntries); // Keep most recent entries
            console.log(`🧹 Trimmed seen_jobs.json to ${maxEntries} most recent entries`);
        }
        
        // Atomic write: write to temp file then rename
        const seenPath = path.join(dataDir, 'seen_jobs.json');
        const tempPath = path.join(dataDir, 'seen_jobs.tmp.json');
        
        // Write to temporary file
        fs.writeFileSync(tempPath, JSON.stringify(seenJobsArray, null, 2), 'utf8');
        
        // Atomic rename - this prevents corruption if process is killed mid-write
        fs.renameSync(tempPath, seenPath);
        
        console.log(`✅ Updated seen_jobs.json with ${jobs.length} new entries (total: ${seenJobsArray.length})`);
        
    } catch (error) {
        console.error('❌ Error updating seen jobs store:', error.message);
        
        // Clean up temp file if it exists
        const tempPath = path.join(dataDir, 'seen_jobs.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                console.error('⚠️ Could not clean up temp file:', cleanupError.message);
            }
        }
        
        throw error; // Re-throw to stop execution
    }
}

/**
 * Load pending posts queue - jobs waiting to be enriched and posted
 * Queue structure: { job: {...}, status: "pending"|"enriched"|"posted", addedAt, enrichedAt, postedAt }
 */
function loadPendingQueue() {
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    const queuePath = path.join(dataDir, 'pending_posts.json');

    try {
        if (!fs.existsSync(queuePath)) {
            console.log('ℹ️ No existing pending_posts.json found - starting fresh');
            return [];
        }

        const fileContent = fs.readFileSync(queuePath, 'utf8');
        if (!fileContent.trim()) {
            console.log('⚠️ Empty pending_posts.json file - starting fresh');
            return [];
        }

        const queue = JSON.parse(fileContent);
        if (!Array.isArray(queue)) {
            console.log('⚠️ Invalid pending_posts.json format - expected array, starting fresh');
            return [];
        }

        // Validate queue structure
        const validQueue = queue.filter(item =>
            item &&
            typeof item === 'object' &&
            item.job &&
            item.status &&
            ['pending', 'enriched', 'posted'].includes(item.status)
        );

        if (validQueue.length !== queue.length) {
            console.log(`⚠️ Filtered ${queue.length - validQueue.length} invalid entries from pending_posts.json`);
        }

        console.log(`✅ Loaded pending queue: ${validQueue.length} total (${validQueue.filter(i => i.status === 'pending').length} pending, ${validQueue.filter(i => i.status === 'enriched').length} enriched, ${validQueue.filter(i => i.status === 'posted').length} posted)`);

        return validQueue;

    } catch (error) {
        console.error('❌ Error loading pending queue:', error.message);
        return [];
    }
}

/**
 * Save pending posts queue with atomic writes
 */
function savePendingQueue(queue) {
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');

    try {
        // Ensure data folder exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Atomic write: write to temp file then rename
        const queuePath = path.join(dataDir, 'pending_posts.json');
        const tempPath = path.join(dataDir, 'pending_posts.tmp.json');

        // Write to temporary file
        fs.writeFileSync(tempPath, JSON.stringify(queue, null, 2), 'utf8');

        // Atomic rename - prevents corruption if process is killed mid-write
        fs.renameSync(tempPath, queuePath);

        const statusCounts = {
            pending: queue.filter(i => i.status === 'pending').length,
            enriched: queue.filter(i => i.status === 'enriched').length,
            posted: queue.filter(i => i.status === 'posted').length
        };

        console.log(`✅ Saved pending queue: ${queue.length} total (${statusCounts.pending} pending, ${statusCounts.enriched} enriched, ${statusCounts.posted} posted)`);

    } catch (error) {
        console.error('❌ Error saving pending queue:', error.message);

        // Clean up temp file if it exists
        const tempPath = path.join(dataDir, 'pending_posts.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                console.error('⚠️ Could not clean up temp file:', cleanupError.message);
            }
        }

        throw error;
    }
}

/**
 * Clean up posted jobs from queue
 */
function cleanupPostedFromQueue(queue) {
    const beforeCount = queue.length;
    const cleanedQueue = queue.filter(item => item.status !== 'posted');
    const removedCount = beforeCount - cleanedQueue.length;

    if (removedCount > 0) {
        console.log(`🧹 Removed ${removedCount} posted jobs from queue`);
    }

    return cleanedQueue;
}

// Load seen jobs for deduplication with error handling and validation
function loadSeenJobsStore() {
    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    const seenPath = path.join(dataDir, 'seen_jobs.json');
    
    try {
        if (!fs.existsSync(seenPath)) {
            console.log('ℹ️ No existing seen_jobs.json found - starting fresh');
            return new Set();
        }
        
        const fileContent = fs.readFileSync(seenPath, 'utf8');
        if (!fileContent.trim()) {
            console.log('⚠️ Empty seen_jobs.json file - starting fresh');
            return new Set();
        }
        
        const seenJobs = JSON.parse(fileContent);
        if (!Array.isArray(seenJobs)) {
            console.log('⚠️ Invalid seen_jobs.json format - expected array, starting fresh');
            return new Set();
        }
        
        // Filter out invalid entries (non-strings or empty strings)
        const validSeenJobs = seenJobs.filter(id => typeof id === 'string' && id.trim().length > 0);
        
        if (validSeenJobs.length !== seenJobs.length) {
            console.log(`⚠️ Filtered ${seenJobs.length - validSeenJobs.length} invalid entries from seen_jobs.json`);
        }
        
        console.log(`✅ Loaded ${validSeenJobs.length} previously seen jobs`);
        
        // Migration check: if all IDs are in old format, we need to regenerate them
        // Old format contains commas and multiple dashes, new format doesn't
        const hasOldFormatIds = validSeenJobs.some(id => id.includes(',') || id.includes('---'));
        
        if (hasOldFormatIds && validSeenJobs.length > 0) {
            console.log('⚠️ Detected old job ID format - migrating to new standardized format');
            
            // Migrate old IDs to new format to minimize re-posting
            const migratedIds = validSeenJobs.map(oldId => {
                if (oldId.includes(',') || oldId.includes('---')) {
                    return migrateOldJobId(oldId);
                }
                return oldId; // Already in new format
            });
            
            const uniqueMigratedIds = [...new Set(migratedIds)];
            console.log(`📝 Migrated ${validSeenJobs.length} old IDs to ${uniqueMigratedIds.length} new format IDs`);
            
            return new Set(uniqueMigratedIds);
        }
        
        return new Set(validSeenJobs);
        
    } catch (error) {
        console.error('❌ Error loading seen_jobs.json:', error.message);
        console.log('ℹ️ Creating backup and starting fresh');
        
        // Create backup of corrupted file
        try {
            const backupPath = path.join(dataDir, `seen_jobs_backup_${Date.now()}.json`);
            fs.copyFileSync(seenPath, backupPath);
            console.log(`📁 Backup created: ${backupPath}`);
        } catch (backupError) {
            console.error('⚠️ Could not create backup:', backupError.message);
        }
        
        return new Set();
    }
}

// Load posted jobs for accurate deduplication
function loadPostedJobsStore() {
    // Get repository root (3 levels up from .github/scripts/job-fetcher)
    const repoRoot = path.join(__dirname, '..', '..', '..');
    const dataDir = path.join(repoRoot, '.github', 'data');
    const postedPath = path.join(dataDir, 'posted_jobs.json');

    try {
        if (!fs.existsSync(postedPath)) {
            console.log('ℹ️ No existing posted_jobs.json found - starting fresh');
            return new Set();
        }

        const fileContent = fs.readFileSync(postedPath, 'utf8');
        if (!fileContent.trim()) {
            console.log('⚠️ Empty posted_jobs.json file - starting fresh');
            return new Set();
        }

        const postedJobs = JSON.parse(fileContent);
        if (!Array.isArray(postedJobs)) {
            console.log('⚠️ Invalid posted_jobs.json format - expected array, starting fresh');
            return new Set();
        }

        // Filter out invalid entries (non-strings or empty strings)
        const validPostedJobs = postedJobs.filter(id => typeof id === 'string' && id.trim().length > 0);

        if (validPostedJobs.length !== postedJobs.length) {
            console.log(`⚠️ Filtered ${postedJobs.length - validPostedJobs.length} invalid entries from posted_jobs.json`);
        }

        console.log(`✅ Loaded ${validPostedJobs.length} previously posted jobs for deduplication`);

        return new Set(validPostedJobs);

    } catch (error) {
        console.error('❌ Error loading posted_jobs.json:', error.message);
        console.log('ℹ️ Starting with empty posted jobs set');

        return new Set();
    }
}

// Main job processing function
async function processJobs() {
    console.log('🚀 Starting job processing...');
    
    try {
        // Load posted jobs for accurate deduplication
        // Use posted_jobs.json (what we've successfully posted to Discord)
        // instead of seen_jobs.json (what we've fetched from APIs)
        const postedIds = loadPostedJobsStore();
        const seenIds = loadSeenJobsStore(); // Keep for backwards compatibility

        // Fetch jobs from both API and real career pages
        const allJobs = await fetchAllJobs();
        const usJobs = allJobs.filter(isUSOnlyJob);

        // Filter for jobs posted within the last 48 hours (0-48h window)
        // Configurable via JOB_MAX_AGE_HOURS environment variable
        const MAX_AGE_HOURS = parseInt(process.env.JOB_MAX_AGE_HOURS || '48', 10);
        const MAX_AGE_THRESHOLD = Date.now() - (MAX_AGE_HOURS * 60 * 60 * 1000);

        const currentJobs = usJobs.filter(job => {
            const jobDate = new Date(job.date_posted || job.date_updated || job.job_posted_at_datetime_utc || 0);
            const isWithinWindow = jobDate.getTime() > MAX_AGE_THRESHOLD;

            if (!isWithinWindow) {
                console.log(`📅 Skipping stale job (posted ${Math.round((Date.now() - jobDate.getTime()) / (60 * 60 * 1000))}h ago): ${job.title || job.job_title} at ${job.company_name || job.employer_name}`);
            }

            return isWithinWindow;
        });

        console.log(`📅 Age filter: ${usJobs.length} total jobs → ${currentJobs.length} jobs (0-${MAX_AGE_HOURS}h window)`);

        currentJobs.forEach(job => {
            job.id = generateJobId(job);
        });

        // STEP 1: Load pending queue and clean up posted jobs (MOVED UP)
        // Load queue BEFORE filtering to check for duplicates already in queue
        let queue = loadPendingQueue();
        queue = cleanupPostedFromQueue(queue);

        // Create set of job IDs already in queue to prevent duplicate additions
        const queueIds = new Set(queue.map(item => item.job.id));

        // STEP 2: Filter for truly NEW jobs (deduplication against BOTH posted_jobs.json AND queue)
        // This ensures we don't add the same job to queue multiple times
        const freshJobs = currentJobs.filter(job =>
            !postedIds.has(job.id) && !queueIds.has(job.id)
        );

        console.log(`📊 Processing summary: ${usJobs.length} total jobs, ${currentJobs.length} current (0-${MAX_AGE_HOURS}h window), ${freshJobs.length} new (not posted AND not in queue)`);

        // STEP 3: Mark ALL new jobs as seen immediately (fixes Edge Case 1)
        // This prevents re-fetching them in next run, even if we don't process them all this run
        if (freshJobs.length > 0) {
            freshJobs.forEach(job => seenIds.add(job.id));
            updateSeenJobsStore(freshJobs, seenIds);
            console.log(`✅ Marked ${freshJobs.length} new jobs as seen`);
        }

        // STEP 4: Add ALL new jobs to queue with "pending" status
        const now = new Date().toISOString();
        freshJobs.forEach(job => {
            queue.push({
                job: job,
                status: 'pending',
                addedAt: now,
                enrichedAt: null,
                postedAt: null
            });
        });

        if (freshJobs.length > 0) {
            console.log(`📥 Added ${freshJobs.length} new jobs to pending queue`);
        }

        // STEP 5: Select batch from queue (FIFO - oldest first)
        const BATCH_SIZE = 20; // Process max 20 jobs per run (increased from 10 - queue bloat fixed)
        const pendingItems = queue.filter(item => item.status === 'pending' || item.status === 'enriched');
        const batch = pendingItems.slice(0, BATCH_SIZE);

        if (batch.length === 0) {
            console.log('ℹ️ No jobs in queue to process');
            writeNewJobsJson([]);
        } else {
            console.log(`\n🔄 Processing batch: ${batch.length} jobs (${queue.filter(i => i.status === 'pending').length} pending in queue total)`);

            // STEP 6: Enrich descriptions for jobs with "pending" status only
            const needEnrichment = batch.filter(item => item.status === 'pending');

            if (needEnrichment.length > 0) {
                console.log(`\n📝 Fetching job descriptions for ${needEnrichment.length} jobs...`);
                console.log('━'.repeat(60));

                const enrichedJobs = await fetchDescriptionsBatch(
                    needEnrichment.map(item => item.job),
                    {
                        batchSize: 10,              // Process 10 jobs at a time
                        delayBetweenRequests: 1000  // 1 second delay between requests
                    }
                );

                // Log description fetching stats
                const successCount = enrichedJobs.filter(j => j.description_success).length;
                const failCount = enrichedJobs.length - successCount;
                const successRate = enrichedJobs.length > 0 ? ((successCount / enrichedJobs.length) * 100).toFixed(1) : '0.0';

                console.log('━'.repeat(60));
                console.log(`✅ Description fetching complete:`);
                console.log(`   Success: ${successCount}/${enrichedJobs.length} (${successRate}%)`);
                console.log(`   Failed: ${failCount}`);

                // Breakdown by platform
                const platformStats = {};
                enrichedJobs.forEach(j => {
                    const platform = j.description_platform || 'unknown';
                    platformStats[platform] = (platformStats[platform] || 0) + 1;
                });
                console.log(`   Platforms: ${Object.entries(platformStats).map(([p, c]) => `${p}(${c})`).join(', ')}`);
                console.log('━'.repeat(60) + '\n');

                // Update queue items with enriched data and status
                needEnrichment.forEach((item, i) => {
                    item.job = enrichedJobs[i];
                    item.status = 'enriched';
                    item.enrichedAt = new Date().toISOString();
                });
            } else {
                console.log(`ℹ️ All ${batch.length} jobs in batch already enriched, skipping description fetch`);
            }

            // STEP 7: Write batch to new_jobs.json for Discord bot
            const batchJobs = batch.map(item => item.job);

            // MARKDOWN CONVERSION: Convert HTML descriptions to Markdown if enabled (runs on ALL jobs)
            if (process.env.ENABLE_MARKDOWN_CONVERSION === 'true') {
                console.log('\n🔄 Converting HTML descriptions to Markdown...');
                let conversionStats = { total: 0, successful: 0, failed: 0 };

                batchJobs.forEach(job => {
                    if (job.description || job.job_description) {
                        const description = job.description || job.job_description;
                        conversionStats.total++;
                        try {
                            const result = convertHtmlToMarkdown(description);
                            if (result.metadata.conversionSuccess) {
                                job.description = result.markdown;
                                job.job_description = result.markdown;
                                job.description_html = result.originalHtml;
                                job.description_format = 'markdown';
                                conversionStats.successful++;
                            } else {
                                job.description_html = description;
                                job.description_format = 'html';
                                conversionStats.failed++;
                            }
                        } catch (error) {
                            console.error(`❌ Conversion error for job ${job.id}:`, error.message);
                            job.description_html = description;
                            job.description_format = 'html';
                            conversionStats.failed++;
                        }
                    }
                });

                console.log(`✅ Markdown conversion complete: ${conversionStats.successful}/${conversionStats.total} successful, ${conversionStats.failed} failed`);
            }

            writeNewJobsJson(batchJobs);

            // STEP 8: Save queue (don't remove items yet - Discord bot will mark as "posted")
            savePendingQueue(queue);

            console.log(`✅ Batch ready for Discord bot: ${batchJobs.length} jobs`);
            console.log(`📋 Queue status: ${queue.filter(i => i.status === 'pending').length} pending, ${queue.filter(i => i.status === 'enriched').length} enriched`);
        }

        // No archived jobs (showing all jobs as current)
        const archivedJobs = [];

        console.log(`✅ Job processing complete - ${currentJobs.length} current jobs`);

        return {
            currentJobs,
            archivedJobs,
            freshJobs,
            stats: generateCompanyStats(currentJobs)
        };
        
    } catch (error) {
        console.error('❌ Error in job processing:', error);
        throw error;
    }
}

module.exports = {
    generateCompanyStats,
    writeNewJobsJson,
    updateSeenJobsStore,
    loadSeenJobsStore,
    loadPendingQueue,
    savePendingQueue,
    cleanupPostedFromQueue,
    processJobs
};