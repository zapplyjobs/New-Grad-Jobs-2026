const fs = require('fs');
const path = require('path');
const { fetchAllJobs } = require('../unified-job-fetcher');
const {
    companies,
    ALL_COMPANIES,
    COMPANY_BY_NAME,
    generateJobId,
    migrateOldJobId,
    normalizeCompanyName,
    getCompanyEmoji,
    getCompanyCareerUrl,
    formatTimeAgo,
    isJobOlderThanWeek,
    isUSOnlyJob,
    getExperienceLevel,
    getJobCategory,
    formatLocation,
    delay
} = require('./utils');

const { convertDateToRelative } = require('../../../jobboard/src/backend/output/jobTransformer.js');

// Description fetcher service
const { fetchDescriptionsBatch } = require('../../../jobboard/src/backend/services/descriptionFetchers');

// Deduplication logger
const DeduplicationLogger = require('../deduplication-logger');

// Analytics archive for long-term data retention
const { archiveJobs } = require('../src/data/analytics-archive');

// Configuration
const JSEARCH_API_KEY = process.env.JSEARCH_API_KEY || '315e3cea2bmshd51ab0ee7309328p18cecfjsna0f6b8e72f39';
const JSEARCH_BASE_URL = 'https://jsearch.p.rapidapi.com/search';

// Job search queries - much more comprehensive
const SEARCH_QUERIES = [
    // Core engineering roles
    'software engineer',
    'software developer', 
    'full stack developer',
    'frontend developer',
    'backend developer',
    'mobile developer',
    'ios developer',
    'android developer',
    
    // Specialized tech roles
    'machine learning engineer',
    'data scientist', 
    'data engineer',
    'devops engineer',
    'cloud engineer',
    'security engineer',
    'site reliability engineer',
    'platform engineer',
    
    // Product & Design
    'product manager',
    'product designer',
    'ux designer',
    'ui designer',
    
    // New grad specific
    'new grad software engineer',
    'entry level developer',
    'junior developer',
    'graduate software engineer',
    
    // High-value roles
    'staff engineer',
    'senior software engineer',
    'principal engineer',
    'engineering manager'
];

/**
 * Load job dates store - persists assigned dates for jobs without original dates
 */
function loadJobDatesStore() {
    const dataDir = path.join(process.cwd(), '.github', 'data');
    const datesPath = path.join(dataDir, 'job_dates.json');
    
    try {
        if (!fs.existsSync(datesPath)) {
            return {};
        }
        
        const fileContent = fs.readFileSync(datesPath, 'utf8');
        if (!fileContent.trim()) {
            return {};
        }
        
        return JSON.parse(fileContent);
        
    } catch (error) {
        console.error('Error loading job_dates.json:', error.message);
        return {};
    }
}

/**
 * Save job dates store with atomic writes
 */
function saveJobDatesStore(jobDates) {
    const dataDir = path.join(process.cwd(), '.github', 'data');
    
    try {
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Cleanup: Remove entries older than 60 days
        const now = new Date();
        const cleanedDates = {};
        
        Object.entries(jobDates).forEach(([jobId, dateInfo]) => {
            const assignedDate = new Date(dateInfo.assigned_date);
            const daysDiff = Math.floor((now - assignedDate) / (1000 * 60 * 60 * 24));
            
            if (daysDiff < 60) {
                cleanedDates[jobId] = dateInfo;
            }
        });

        const datesPath = path.join(dataDir, 'job_dates.json');
        const tempPath = path.join(dataDir, 'job_dates.tmp.json');
        
        fs.writeFileSync(tempPath, JSON.stringify(cleanedDates, null, 2), 'utf8');
        fs.renameSync(tempPath, datesPath);
        
    } catch (error) {
        console.error('Error saving job_dates.json:', error.message);
    }
}

/**
 * Fill null dates with stored or new ISO datetimes, then convert to relative format
 */
function fillJobDates(jobs, jobDatesStore) {
    const updatedDatesStore = { ...jobDatesStore };
    
    const processedJobs = jobs.map(job => {
        const hasNoDate = job.job_posted_at === null || 
                         job.job_posted_at === undefined || 
                         job.job_posted_at === '' ||
                         job.job_posted_at === 'null';
        
        if (!hasNoDate) {
            // Job has a date - convert to relative if it's ISO format
            const relativeDate = convertDateToRelative(job.job_posted_at);
            if (relativeDate) {
                job.job_posted_at = relativeDate;
            }
            return job;
        }
        
        // Job has null date - need to fill it
        const jobId = `${(job.company || job.employer_name || '').toLowerCase().replace(/\s+/g, '-')}-${(job.title || job.job_title || '').toLowerCase().replace(/\s+/g, '-')}-${(job.location || job.job_city || '').toLowerCase().replace(/\s+/g, '-')}`;
        
        let isoDatetime;
        
        if (updatedDatesStore[jobId]) {
            // Reuse stored date
            isoDatetime = updatedDatesStore[jobId].assigned_date;
        } else {
            // Assign new date and store it
            isoDatetime = new Date().toISOString();
            updatedDatesStore[jobId] = {
                assigned_date: isoDatetime,
                job_title: job.title || job.job_title,
                company: job.company || job.employer_name,
                first_seen: isoDatetime
            };
        }
        
        // Convert ISO to relative format
        const relativeDate = convertDateToRelative(isoDatetime);
        
        return {
            ...job,
            job_posted_at: relativeDate || isoDatetime
        };
    });
    
    // Save if we added any new dates
    if (Object.keys(updatedDatesStore).length > Object.keys(jobDatesStore).length) {
        saveJobDatesStore(updatedDatesStore);
    }
    
    return processedJobs;
}

// Enhanced API search with better error handling
async function searchJobs(query, location = '') {
    try {
        const url = new URL(JSEARCH_BASE_URL);
        url.searchParams.append('query', query);
        if (location) url.searchParams.append('location', location);
        url.searchParams.append('page', '1');
        url.searchParams.append('num_pages', '1');
        url.searchParams.append('date_posted', 'month');
        url.searchParams.append('employment_types', 'FULLTIME');
        url.searchParams.append('job_requirements', 'under_3_years_experience,more_than_3_years_experience,no_experience');
        
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': JSEARCH_API_KEY,
                'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
            }
        });
        
        if (!response.ok) {
            console.error(`API request failed for "${query}": ${response.status}`);
            return [];
        }
        
        const data = await response.json();
        const jobs = data.data || [];
        console.log(`Query "${query}" returned ${jobs.length} jobs`);
        return jobs;
    } catch (error) {
        console.error(`Error searching for "${query}":`, error.message);
        return [];
    }
}

// Enhanced filtering with better company matching
function filterTargetCompanyJobs(jobs) {
    console.log('🎯 Filtering for target companies...');
    
    const targetJobs = jobs.filter(job => {
        const companyName = (job.employer_name || '').toLowerCase();
        
        // Check against our comprehensive company list
        const isTargetCompany = COMPANY_BY_NAME[companyName] !== undefined;
        
        if (isTargetCompany) {
            // Normalize company name for consistency
            job.employer_name = normalizeCompanyName(job.employer_name);
            return true;
        }
        
        // Additional fuzzy matching for variations
        for (const company of ALL_COMPANIES) {
            for (const apiName of company.api_names) {
                if (companyName.includes(apiName.toLowerCase()) && apiName.length > 3) {
                    job.employer_name = company.name;
                    return true;
                }
            }
        }
        
        return false;
    });
    
    console.log(`✨ Filtered to ${targetJobs.length} target company jobs`);
    console.log('🏢 Companies found:', [...new Set(targetJobs.map(j => j.employer_name))]);
    
    // Remove duplicates more intelligently
    const uniqueJobs = targetJobs.filter((job, index, self) => {
        return index === self.findIndex(j => 
            j.job_title === job.job_title && 
            j.employer_name === job.employer_name &&
            j.job_city === job.job_city
        );
    });
    
    console.log(`🧹 After deduplication: ${uniqueJobs.length} unique jobs`);
    
    // Sort by company tier and recency
    uniqueJobs.sort((a, b) => {
        // Prioritize FAANG+ companies
        const aIsFAANG = companies.faang_plus.some(c => c.name === a.employer_name);
        const bIsFAANG = companies.faang_plus.some(c => c.name === b.employer_name);
        
        if (aIsFAANG && !bIsFAANG) return -1;
        if (!aIsFAANG && bIsFAANG) return 1;
        
        // Then by recency
        const aDate = new Date(a.job_posted_at_datetime_utc || 0);
        const bDate = new Date(b.job_posted_at_datetime_utc || 0);
        return bDate - aDate;
    });
    
    return uniqueJobs.slice(0, 50); // Top 50 jobs
}

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

    const dataDir = path.join(process.cwd(), '.github', 'data');

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
    const dataDir = path.join(process.cwd(), '.github', 'data');

    try {
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Load existing data with timestamps
        const seenPath = path.join(dataDir, 'seen_jobs.json');
        let seenWithTimestamps = {};

        try {
            if (fs.existsSync(seenPath)) {
                const existing = JSON.parse(fs.readFileSync(seenPath, 'utf8'));

                // Handle both formats
                if (Array.isArray(existing)) {
                    // Legacy: convert array to object
                    const now = new Date().toISOString();
                    existing.forEach(id => {
                        seenWithTimestamps[id] = now;
                    });
                } else {
                    seenWithTimestamps = existing;
                }
            }
        } catch (loadError) {
            console.error('⚠️ Error loading existing seen_jobs.json:', loadError.message);
        }

        // Add new jobs with current timestamp
        const now = new Date().toISOString();
        jobs.forEach(job => {
            seenWithTimestamps[job.id] = now;
        });

        // Expire entries older than 7 days
        const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        const validEntries = {};
        let expiredCount = 0;

        Object.entries(seenWithTimestamps).forEach(([id, timestamp]) => {
            const seenDate = new Date(timestamp).getTime();
            if (seenDate >= sevenDaysAgo) {
                validEntries[id] = timestamp;
            } else {
                expiredCount++;
            }
        });

        if (expiredCount > 0) {
            console.log(`🧹 Removed ${expiredCount} expired entries (>7 days old)`);
        }

        // Safety limit: keep only most recent 10,000 if we exceed
        let finalEntries = validEntries;
        if (Object.keys(validEntries).length > 10000) {
            console.log(`⚠️ Exceeded 10,000 entries (${Object.keys(validEntries).length}), trimming to most recent 10,000`);

            // Sort by timestamp (most recent first) and take top 10,000
            const sorted = Object.entries(validEntries)
                .sort((a, b) => new Date(b[1]) - new Date(a[1]))
                .slice(0, 10000);

            finalEntries = Object.fromEntries(sorted);
        }

        // Atomic write
        const tempPath = path.join(dataDir, 'seen_jobs.tmp.json');
        fs.writeFileSync(tempPath, JSON.stringify(finalEntries, null, 2), 'utf8');
        fs.renameSync(tempPath, seenPath);

        console.log(`✅ Updated seen_jobs.json: added ${jobs.length} new, ${Object.keys(finalEntries).length} total active`);

    } catch (error) {
        console.error('❌ Error updating seen jobs store:', error.message);

        const tempPath = path.join(dataDir, 'seen_jobs.tmp.json');
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
 * Load pending posts queue - jobs waiting to be enriched and posted
 * Queue structure: { job: {...}, status: "pending"|"enriched"|"posted", addedAt, enrichedAt, postedAt }
 */
function loadPendingQueue() {
    const dataDir = path.join(process.cwd(), '.github', 'data');
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
    const dataDir = path.join(process.cwd(), '.github', 'data');

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
 * Enhanced cleanup: Remove posted jobs and deduplicate queue
 * @param {Array} queue - Pending posts queue
 * @param {Set} postedIds - Set of job IDs already posted to Discord
 * @returns {Array} Cleaned and deduplicated queue
 */
function cleanupPostedFromQueue(queue, postedIds) {
    const beforeCount = queue.length;

    // Step 1: Remove jobs already posted to Discord
    const notPosted = queue.filter(item => !postedIds.has(item.job.id));
    const removedPosted = beforeCount - notPosted.length;

    // Step 2: Deduplicate by job ID (keep first occurrence, FIFO)
    const seen = new Set();
    const deduplicated = notPosted.filter(item => {
        const id = item.job.id;
        if (seen.has(id)) {
            return false; // Duplicate, skip
        }
        seen.add(id);
        return true; // First occurrence, keep
    });

    const removedDuplicates = notPosted.length - deduplicated.length;
    const totalRemoved = beforeCount - deduplicated.length;

    if (totalRemoved > 0) {
        console.log(`🧹 Queue cleanup: removed ${removedPosted} already posted, ${removedDuplicates} duplicates (${totalRemoved} total, ${deduplicated.length} remaining)`);
    }

    return deduplicated;
}

// Load seen jobs for deduplication with error handling and validation
function loadSeenJobsStore() {
    const dataDir = path.join(process.cwd(), '.github', 'data');
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

        const seenData = JSON.parse(fileContent);

        // Handle both old format (array) and new format (object with timestamps)
        let seenJobs;
        if (Array.isArray(seenData)) {
            // Legacy format: convert to new format (assume all are current)
            console.log('⚠️ Converting legacy seen_jobs.json format to timestamped format');
            seenJobs = {};
            const now = new Date().toISOString();
            seenData.forEach(id => {
                if (typeof id === 'string' && id.trim().length > 0) {
                    seenJobs[id] = now;
                }
            });
        } else {
            seenJobs = seenData;
        }

        // Expire entries older than 7 days
        const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        const validSeenJobs = {};
        let expiredCount = 0;

        Object.entries(seenJobs).forEach(([id, timestamp]) => {
            const seenDate = new Date(timestamp).getTime();
            if (seenDate >= sevenDaysAgo) {
                validSeenJobs[id] = timestamp;
            } else {
                expiredCount++;
            }
        });

        if (expiredCount > 0) {
            console.log(`🧹 Expired ${expiredCount} old entries from seen_jobs.json (>7 days)`);
        }

        console.log(`✅ Loaded ${Object.keys(validSeenJobs).length} recently seen jobs`);

        // Migration check: if all IDs are in old format, we need to regenerate them
        // Old format contains commas and multiple dashes, new format doesn't
        const jobIds = Object.keys(validSeenJobs);
        const hasOldFormatIds = jobIds.some(id => id.includes(',') || id.includes('---'));

        if (hasOldFormatIds && jobIds.length > 0) {
            console.log('⚠️ Detected old job ID format - migrating to new standardized format');

            // Migrate old IDs to new format to minimize re-posting
            const migratedJobs = {};
            jobIds.forEach(oldId => {
                const newId = (oldId.includes(',') || oldId.includes('---'))
                    ? migrateOldJobId(oldId)
                    : oldId;
                migratedJobs[newId] = validSeenJobs[oldId];
            });

            console.log(`📝 Migrated ${jobIds.length} old IDs to ${Object.keys(migratedJobs).length} new format IDs`);

            return new Set(Object.keys(migratedJobs));
        }

        // Return as Set of IDs for compatibility with existing code
        return new Set(Object.keys(validSeenJobs));

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
    const dataDir = path.join(process.cwd(), '.github', 'data');
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

        const postedData = JSON.parse(fileContent);

        // Handle V2 format (current): {version: 2, jobs: [...], lastUpdated: "...", metadata: {}}
        if (postedData.version === 2 && Array.isArray(postedData.jobs)) {
            const validPostedJobs = postedData.jobs
                .map(job => job.jobId || job.id)
                .filter(id => typeof id === 'string' && id.trim().length > 0);

            console.log(`✅ Loaded ${validPostedJobs.length} previously posted jobs for deduplication (V2 format)`);
            return new Set(validPostedJobs);
        }

        // Handle V1 format (backwards compatibility): [...]
        if (Array.isArray(postedData)) {
            const validPostedJobs = postedData.filter(id => typeof id === 'string' && id.trim().length > 0);

            if (validPostedJobs.length !== postedData.length) {
                console.log(`⚠️ Filtered ${postedData.length - validPostedJobs.length} invalid entries from posted_jobs.json`);
            }

            console.log(`✅ Loaded ${validPostedJobs.length} previously posted jobs for deduplication (V1 format)`);
            return new Set(validPostedJobs);
        }

        console.log('⚠️ Invalid posted_jobs.json format - starting fresh');
        return new Set();

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
        // Initialize deduplication logger
        const dedupLogger = new DeduplicationLogger();

        // Load posted jobs for accurate deduplication
        // Use posted_jobs.json (what we've successfully posted to Discord)
        // instead of seen_jobs.json (what we've fetched from APIs)
        const postedIds = loadPostedJobsStore();
        const seenIds = loadSeenJobsStore(); // Keep for backwards compatibility

        // Load job dates store
        const jobDatesStore = loadJobDatesStore();

        // Fetch jobs from external data source
        const allJobs = await fetchAllJobs();
        
        // Fill null dates and convert to relative format
        const jobsWithDates = fillJobDates(allJobs, jobDatesStore);
        
        // Add unique IDs for deduplication using standardized generation
        jobsWithDates.forEach(job => {
            job.id = generateJobId(job);
        });
        
        // **CRITICAL FIX: Sort ALL jobs by date before any filtering**
        const sortedJobs = jobsWithDates.sort((a, b) => {
            // Convert relative dates back to timestamps for proper sorting
            const getTimestamp = (dateStr) => {
                if (!dateStr) return 0;
                
                // Handle relative format (1d, 2w, 3mo, etc.)
                const match = String(dateStr).match(/^(\d+)([hdwmo])$/i);
                if (match) {
                    const value = parseInt(match[1]);
                    const unit = match[2].toLowerCase();
                    const now = new Date();
                    
                    switch (unit) {
                        case 'h': return now - (value * 60 * 60 * 1000);
                        case 'd': return now - (value * 24 * 60 * 60 * 1000);
                        case 'w': return now - (value * 7 * 24 * 60 * 60 * 1000);
                        case 'mo': return now - (value * 30 * 24 * 60 * 60 * 1000);
                        default: return now;
                    }
                }
                
                // Handle ISO date strings
                try {
                    return new Date(dateStr).getTime();
                } catch {
                    return 0;
                }
            };
            
            const aTime = getTimestamp(a.job_posted_at);
            const bTime = getTimestamp(b.job_posted_at);
            
            // Sort by most recent first (descending)
            return bTime - aTime;
        });
        
        // Filter current jobs (not older than a week)
        const currentJobs = sortedJobs.filter(j => !isJobOlderThanWeek(j.job_posted_at));

        // STEP 1: Load pending queue and clean up posted jobs (MOVED UP)
        // Load queue BEFORE filtering to check for duplicates already in queue
        let queue = loadPendingQueue();
        queue = cleanupPostedFromQueue(queue, postedIds);

        // Create set of job IDs already in queue to prevent duplicate additions
        const queueIds = new Set(queue.map(item => item.job.id));

        // STEP 2: Filter for truly NEW jobs (deduplication against BOTH seen_jobs.json AND queue)
        // This ensures we don't add the same job to queue multiple times
        // Log EVERY deduplication check for debugging
        const freshJobs = currentJobs.filter(job => {
            const isInSeen = seenIds.has(job.id);
            const isInQueue = queueIds.has(job.id);
            const isDuplicate = isInSeen || isInQueue;

            // Log this check
            const reason = isInSeen ? 'seen_jobs' : (isInQueue ? 'pending_queue' : null);
            dedupLogger.logCheck(job, job.id, isDuplicate, null, reason);

            return !isDuplicate;
        });

        console.log(`📊 Processing summary: ${allJobs.length} total jobs, ${currentJobs.length} current (< 1 week old), ${freshJobs.length} new (not seen AND not in queue)`);

        // Archive ALL current jobs for analytics (separate from deduplication)
        try {
            archiveJobs(currentJobs);
        } catch (archiveError) {
            console.error('⚠️ Analytics archive failed (non-critical):', archiveError.message);
        }

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
            writeNewJobsJson(batchJobs);

            // STEP 8: Save queue (don't remove items yet - Discord bot will mark as "posted")
            savePendingQueue(queue);

            console.log(`✅ Batch ready for Discord bot: ${batchJobs.length} jobs`);
            console.log(`📋 Queue status: ${queue.filter(i => i.status === 'pending').length} pending, ${queue.filter(i => i.status === 'enriched').length} enriched`);
        }
        
        // Calculate archived jobs
        const archivedJobs = sortedJobs.filter(j => isJobOlderThanWeek(j.job_posted_at));

        console.log(`✅ Job processing complete - ${currentJobs.length} current, ${archivedJobs.length} archived`);

        // Save deduplication logs
        dedupLogger.save();

        // Save structured job fetch summary
        try {
            const logsDir = path.join(process.cwd(), '.github', 'logs');
            fs.mkdirSync(logsDir, { recursive: true });

            const summaryPath = path.join(logsDir, `job-fetch-summary-${new Date().toISOString().split('T')[0]}.json`);
            const summary = {
                timestamp: new Date().toISOString(),
                total_fetched: allJobs.length,
                current_jobs: currentJobs.length,
                archived_jobs: archivedJobs.length,
                fresh_jobs: freshJobs.length,
                duplicates_filtered: allJobs.length - freshJobs.length,
                queue_status: {
                    total: queue.length,
                    pending: queue.filter(i => i.status === 'pending').length,
                    enriched: queue.filter(i => i.status === 'enriched').length,
                    posted: queue.filter(i => i.status === 'posted').length
                }
            };

            fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf8');
            console.log(`📊 Job fetch summary saved: ${summaryPath}`);
        } catch (error) {
            console.error('⚠️ Error saving job fetch summary:', error.message);
        }

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
    searchJobs,
    fetchAllJobs,
    filterTargetCompanyJobs,
    generateCompanyStats,
    writeNewJobsJson,
    updateSeenJobsStore,
    loadSeenJobsStore,
    loadPendingQueue,
    savePendingQueue,
    cleanupPostedFromQueue,
    processJobs
};