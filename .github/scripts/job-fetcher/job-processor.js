const fs = require('fs');
const path = require('path');
const { logger, tryCatch } = require('../shared');
const { fetchAllJobs } = require('../unified-job-fetcher');
const {
    companies,
    ALL_COMPANIES,
    COMPANY_BY_NAME,
    generateJobId,
    generateJobFingerprint,
    generateMinimalJobFingerprint,
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

// Pipeline tracing for debugging (zero overhead when disabled)
const { PipelineTracer } = require('../shared/lib/instrumentation');

const { convertDateToRelative } = require('../../../jobboard/src/backend/output/jobTransformer.js');

// Description fetcher service
const { fetchDescriptionsBatch } = require('../../../jobboard/src/backend/services/descriptionFetchers');

// Deduplication logger
const DeduplicationLogger = require('../deduplication-logger');

// Analytics archive for long-term data retention
const { archiveJobs } = require('../src/data/analytics-archive');

// Configuration - JSearch API (uses environment variable for security)
const JSEARCH_API_KEY = process.env.JSEARCH_API_KEY;
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
        logger.error('Error loading job_dates.json', { error: error.message });
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
        logger.error('Error saving job_dates.json', { error: error.message });
    }
}

/**
 * Load current jobs store - persists jobs < 14 days old across workflow runs
 * This ensures README shows all current jobs, not just jobs from current run
 */
function loadCurrentJobsStore() {
    const dataDir = path.join(process.cwd(), '.github', 'data');
    const currentJobsPath = path.join(dataDir, 'current_jobs.json');

    try {
        if (!fs.existsSync(currentJobsPath)) {
            logger.info('No existing current_jobs.json found - starting fresh');
            return [];
        }

        const fileContent = fs.readFileSync(currentJobsPath, 'utf8');
        if (!fileContent.trim()) {
            logger.warn('Empty current_jobs.json file - starting fresh');
            return [];
        }

        const jobs = JSON.parse(fileContent);
        logger.info('Loaded jobs from current_jobs.json', { count: jobs.length });
        return jobs;

    } catch (error) {
        logger.error('Error loading current_jobs.json', { error: error.message });
        return [];
    }
}

/**
 * Save current jobs store with atomic writes
 * Stores all jobs that should appear in README (< 14 days old)
 */
function saveCurrentJobsStore(jobs) {
    const dataDir = path.join(process.cwd(), '.github', 'data');

    try {
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        const currentJobsPath = path.join(dataDir, 'current_jobs.json');
        const tempPath = path.join(dataDir, 'current_jobs.tmp.json');

        // Write to temporary file
        fs.writeFileSync(tempPath, JSON.stringify(jobs, null, 2), 'utf8');

        // Atomic rename
        fs.renameSync(tempPath, currentJobsPath);

        logger.info('Saved jobs to current_jobs.json', { count: jobs.length });

    } catch (error) {
        logger.error('Error saving current_jobs.json', { error: error.message });
    }
}

/**
 * Merge persisted jobs with fresh jobs, removing duplicates
 * Keeps the most recent version of each job
 */
function mergeJobs(persistedJobs, freshJobs) {
    const jobMap = new Map();

    // Add persisted jobs first
    persistedJobs.forEach(job => {
        if (job.id) {
            jobMap.set(job.id, job);
        }
    });

    // Add/update with fresh jobs (overwrites older data)
    freshJobs.forEach(job => {
        if (job.id) {
            jobMap.set(job.id, job);
        }
    });

    const mergedJobs = Array.from(jobMap.values());
    const duplicatesRemoved = persistedJobs.length + freshJobs.length - mergedJobs.length;

    if (duplicatesRemoved > 0) {
        logger.info('Merged jobs with deduplication', {
            persisted: persistedJobs.length,
            fresh: freshJobs.length,
            unique: mergedJobs.length,
            duplicates_removed: duplicatesRemoved
        });
    }

    return mergedJobs;
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
            logger.error('API request failed', { query, status: response.status });
            return [];
        }

        const data = await response.json();
        const jobs = data.data || [];
        logger.debug('Query results', { query, count: jobs.length });
        return jobs;
    } catch (error) {
        logger.error('Error searching for jobs', { query, error: error.message });
        return [];
    }
}

/**
 * Filter out healthcare/nursing jobs from New-Grad board
 * New-Grad is for tech/business roles, not healthcare positions
 */
function filterHealthcareJobs(jobs) {
    const healthcareKeywords = [
        // Nursing roles
        'nurse', 'nursing', 'rn ', 'registered nurse', 'lpn', 'cna',
        'nurse practitioner', 'nurse anesthetist', 'nurse midwife',
        'nursing assistant', 'patient care technician', 'patient care associate',

        // Medical/healthcare roles
        'medical assistant', 'physician assistant', 'pa ', 'medical technologist',
        'radiologic technologist', 'sonographer', 'ultrasound', 'phlebotomist',
        'physical therapist', 'occupational therapist', 'speech therapist',
        'respiratory therapist', 'dialysis', 'pharmacist', 'clinical',

        // Healthcare support
        'healthcare', 'patient care', 'clinical', 'hospital', 'medical center',
        ' Rehab aide', 'nurse extern', 'nurse intern', 'nursing internship',

        // Medical specialties
        'cardiovascular', 'orthopedic', 'pediatric nurse', 'oncology',
        'labor and delivery', 'mother/baby', 'nicu', 'icu', 'emergency department',

        // Related medical terms
        'scrub', 'sterile processing', 'surgical tech', 'med-surg',
        'telemetry', 'med-surg', 'stepdown', 'acute care'
    ];

    return jobs.filter(job => {
        const title = (job.job_title || '').toLowerCase();
        const description = (job.job_description || '').toLowerCase();
        const combined = `${title} ${description}`;

        // Check if any healthcare keyword appears
        const hasHealthcareKeyword = healthcareKeywords.some(keyword =>
            combined.includes(keyword.toLowerCase())
        );

        // Allow if it's clearly a tech role (e.g., "Software Engineer at Hospital")
        const techKeywords = ['software', 'developer', 'engineer', 'data scientist',
                             'data analyst', 'product manager', 'devops', 'sre'];
        const isTechRole = techKeywords.some(kw => title.includes(kw));

        // Filter out if healthcare keyword found AND not a tech role
        return !(hasHealthcareKeyword && !isTechRole);
    });
}

// Enhanced filtering with better company matching
function filterTargetCompanyJobs(jobs) {
    logger.info('Filtering for target companies');

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

    logger.info('Filtered to target company jobs', {
        count: targetJobs.length,
        companies: [...new Set(targetJobs.map(j => j.employer_name))]
    });

    // Remove duplicates more intelligently
    const uniqueJobs = targetJobs.filter((job, index, self) => {
        return index === self.findIndex(j =>
            j.job_title === job.job_title &&
            j.employer_name === job.employer_name &&
            j.job_city === job.job_city
        );
    });

    logger.info('After deduplication', { unique_jobs: uniqueJobs.length });
    
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
    // Limit to 20 jobs per run to prevent channel overflow and timeouts
    // This matches the Discord bot's MAX_JOBS_PER_RUN limit
    const MAX_JOBS_PER_RUN = 20;
    const originalCount = jobs.length;
    const jobsToWrite = jobs.slice(0, MAX_JOBS_PER_RUN);
    const deferredCount = originalCount - jobsToWrite.length;

    if (deferredCount > 0) {
        logger.info('Limiting jobs this run', {
            max: MAX_JOBS_PER_RUN,
            deferred: deferredCount
        });
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

        logger.info('Wrote new jobs to file', { count: jobsToWrite.length, path: outPath });

    } catch (error) {
        logger.error('Error writing new_jobs.json', { error: error.message });

        // Clean up temp file if it exists
        const tempPath = path.join(dataDir, 'new_jobs.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                logger.warn('Could not clean up temp file', { error: cleanupError.message });
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
            logger.warn('Error loading existing seen_jobs.json', { error: loadError.message });
        }

        // Add new jobs with current timestamp AND fingerprint
        const now = new Date().toISOString();
        jobs.forEach(job => {
            seenWithTimestamps[job.id] = {
                timestamp: now,
                fingerprint: generateJobFingerprint(job)
            };
        });

        // Expire entries older than 7 days
        const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
        const validEntries = {};
        let expiredCount = 0;

        Object.entries(seenWithTimestamps).forEach(([id, data]) => {
            // Handle both old format (string timestamp) and new format (object with timestamp + fingerprint)
            const timestamp = typeof data === 'object' ? data.timestamp : data;
            const seenDate = new Date(timestamp).getTime();

            if (seenDate >= sevenDaysAgo) {
                validEntries[id] = data; // Keep original format (old or new)
            } else {
                expiredCount++;
            }
        });

        if (expiredCount > 0) {
            logger.debug('Removed expired entries from seen_jobs.json', { expired_count: expiredCount, days_old: 7 });
        }

        // Safety limit: keep only most recent 10,000 if we exceed
        let finalEntries = validEntries;
        if (Object.keys(validEntries).length > 10000) {
            logger.warn('Exceeded 10,000 entries, trimming to most recent 10,000', {
                current_count: Object.keys(validEntries).length,
                max_count: 10000
            });

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

        logger.info('Updated seen_jobs.json', {
            added: jobs.length,
            total_active: Object.keys(finalEntries).length
        });

    } catch (error) {
        logger.error('Error updating seen jobs store', { error: error.message });

        const tempPath = path.join(dataDir, 'seen_jobs.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                logger.warn('Could not clean up temp file', { error: cleanupError.message });
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
            logger.info('No existing pending_posts.json found - starting fresh');
            return [];
        }

        const fileContent = fs.readFileSync(queuePath, 'utf8');
        if (!fileContent.trim()) {
            logger.warn('Empty pending_posts.json file - starting fresh');
            return [];
        }

        const queue = JSON.parse(fileContent);
        if (!Array.isArray(queue)) {
            logger.warn('Invalid pending_posts.json format - expected array, starting fresh');
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
            logger.warn('Filtered invalid entries from pending_posts.json', {
                filtered: queue.length - validQueue.length
            });
        }

        const statusCounts = {
            pending: validQueue.filter(i => i.status === 'pending').length,
            enriched: validQueue.filter(i => i.status === 'enriched').length,
            posted: validQueue.filter(i => i.status === 'posted').length
        };

        logger.info('Loaded pending queue', {
            total: validQueue.length,
            ...statusCounts
        });

        return validQueue;

    } catch (error) {
        logger.error('Error loading pending queue', { error: error.message });
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

        logger.info('Saved pending queue', {
            total: queue.length,
            ...statusCounts
        });

    } catch (error) {
        logger.error('Error saving pending queue', { error: error.message });

        // Clean up temp file if it exists
        const tempPath = path.join(dataDir, 'pending_posts.tmp.json');
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                logger.warn('Could not clean up temp file', { error: cleanupError.message });
            }
        }

        throw error;
    }
}

/**
 * Enhanced cleanup: Remove posted jobs and deduplicate queue
 * @param {Array} queue - Pending posts queue
 * @param {Object} postedStore - { ids: Set<jobId>, fingerprints: Set<fingerprint> }
 * @returns {Array} Cleaned and deduplicated queue
 */
function cleanupPostedFromQueue(queue, postedStore) {
    const beforeCount = queue.length;

    // Step 1: Remove jobs already posted to Discord (check BOTH ID AND fingerprint)
    const notPosted = queue.filter(item => {
        const jobId = item.job.id;
        const fingerprint = generateMinimalJobFingerprint(item.job);

        // Skip if ID or fingerprint already posted
        if (postedStore.ids.has(jobId)) {
            return false;
        }
        if (postedStore.fingerprints.has(fingerprint)) {
            logger.debug('Fingerprint match - skipping posted job', {
                title: item.job.job_title,
                company: item.job.employer_name,
                fingerprint: fingerprint.substring(0, 50)
            });
            return false;
        }
        return true;
    });
    const removedPosted = beforeCount - notPosted.length;

    // Step 2: Deduplicate by job ID AND fingerprint (keep first occurrence, FIFO)
    const seenIds = new Set();
    const seenFingerprints = new Set();
    const deduplicated = notPosted.filter(item => {
        const id = item.job.id;
        const fingerprint = generateMinimalJobFingerprint(item.job);

        if (seenIds.has(id) || seenFingerprints.has(fingerprint)) {
            return false; // Duplicate, skip
        }
        seenIds.add(id);
        seenFingerprints.add(fingerprint);
        return true; // First occurrence, keep
    });

    const removedDuplicates = notPosted.length - deduplicated.length;
    const totalRemoved = beforeCount - deduplicated.length;

    if (totalRemoved > 0) {
        logger.info('Queue cleanup', {
            removed_posted: removedPosted,
            removed_duplicates: removedDuplicates,
            total_removed: totalRemoved,
            remaining: deduplicated.length
        });
    }

    return deduplicated;
}

// Load seen jobs for deduplication with error handling and validation
function loadSeenJobsStore() {
    const dataDir = path.join(process.cwd(), '.github', 'data');
    const seenPath = path.join(dataDir, 'seen_jobs.json');

    try {
        if (!fs.existsSync(seenPath)) {
            logger.info('No existing seen_jobs.json found - starting fresh');
            return { seenIds: new Set(), seenFingerprints: new Set() };
        }

        const fileContent = fs.readFileSync(seenPath, 'utf8');
        if (!fileContent.trim()) {
            logger.warn('Empty seen_jobs.json file - starting fresh');
            return { seenIds: new Set(), seenFingerprints: new Set() };
        }

        const seenData = JSON.parse(fileContent);

        // Handle both old format (array) and new format (object with timestamps)
        let seenJobs;
        if (Array.isArray(seenData)) {
            // Legacy format: convert to new format (assume all are current)
            logger.warn('Converting legacy seen_jobs.json format to timestamped format');
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
            logger.debug('Expired old entries from seen_jobs.json', { expired_count: expiredCount, days_old: 7 });
        }

        logger.info('Loaded recently seen jobs', { count: Object.keys(validSeenJobs).length });

        // Build fingerprint set from stored data (if available)
        const seenIds = new Set();
        const seenFingerprints = new Set();

        Object.entries(validSeenJobs).forEach(([id, data]) => {
            seenIds.add(id);

            // Handle both old format (string timestamp) and new format (object with fingerprint)
            if (typeof data === 'object' && data.fingerprint) {
                seenFingerprints.add(data.fingerprint);
            }
            // Old format (string timestamp) - fingerprint will be empty, that's okay
        });

        logger.debug('Loaded job IDs and fingerprints', {
            ids_count: seenIds.size,
            fingerprints_count: seenFingerprints.size
        });

        // Migration check: if all IDs are in old format, we need to regenerate them
        // Old format contains commas and multiple dashes, new format doesn't
        const jobIds = Array.from(seenIds);
        const hasOldFormatIds = jobIds.some(id => id.includes(',') || id.includes('---'));

        if (hasOldFormatIds && jobIds.length > 0) {
            logger.warn('Detected old job ID format - migrating to new standardized format');

            // Migrate old IDs to new format to minimize re-posting
            const migratedIds = new Set();
            jobIds.forEach(oldId => {
                const newId = (oldId.includes(',') || oldId.includes('---'))
                    ? migrateOldJobId(oldId)
                    : oldId;
                migratedIds.add(newId);
            });

            logger.info('Migrated old IDs to new format', {
                old_count: jobIds.length,
                new_count: migratedIds.size
            });

            return { seenIds: migratedIds, seenFingerprints };
        }

        // Return both Sets for deduplication
        return { seenIds, seenFingerprints };

    } catch (error) {
        logger.error('Error loading seen_jobs.json', { error: error.message });
        logger.info('Creating backup and starting fresh');

        // Create backup of corrupted file
        try {
            const backupPath = path.join(dataDir, `seen_jobs_backup_${Date.now()}.json`);
            fs.copyFileSync(seenPath, backupPath);
            logger.info('Backup created', { path: backupPath });
        } catch (backupError) {
            logger.warn('Could not create backup', { error: backupError.message });
        }

        return { seenIds: new Set(), seenFingerprints: new Set() };
    }
}

// Load posted jobs for accurate deduplication
function loadPostedJobsStore() {
    const dataDir = path.join(process.cwd(), '.github', 'data');
    const postedPath = path.join(dataDir, 'posted_jobs.json');

    try {
        if (!fs.existsSync(postedPath)) {
            logger.info('No existing posted_jobs.json found - starting fresh');
            return { ids: new Set(), fingerprints: new Set() };
        }

        const fileContent = fs.readFileSync(postedPath, 'utf8');
        if (!fileContent.trim()) {
            logger.warn('Empty posted_jobs.json file - starting fresh');
            return { ids: new Set(), fingerprints: new Set() };
        }

        const postedData = JSON.parse(fileContent);

        // Handle V2 format (current): {version: 2, jobs: [...], lastUpdated: "...", metadata: {}}
        if (postedData.version === 2 && Array.isArray(postedData.jobs)) {
            const ids = new Set();
            const fingerprints = new Set();

            postedData.jobs.forEach(job => {
                const jobId = job.jobId || job.id;
                if (typeof jobId === 'string' && jobId.trim().length > 0) {
                    ids.add(jobId);
                }

                // Generate fingerprint from stored job data for deduplication
                if (job.company && job.title) {
                    const fingerprint = generateMinimalJobFingerprint({
                        title: job.title,
                        company_name: job.company,
                        job_city: job.job_city || ''
                    });
                    fingerprints.add(fingerprint);
                }
            });

            logger.info('Loaded previously posted jobs for deduplication', {
                ids_count: ids.size,
                fingerprints_count: fingerprints.size,
                format: 'V2'
            });
            return { ids, fingerprints };
        }

        // Handle V1 format (backwards compatibility): [...]
        if (Array.isArray(postedData)) {
            const validPostedJobs = postedData.filter(id => typeof id === 'string' && id.trim().length > 0);

            if (validPostedJobs.length !== postedData.length) {
                logger.warn('Filtered invalid entries from posted_jobs.json', {
                    filtered: postedData.length - validPostedJobs.length
                });
            }

            logger.info('Loaded previously posted jobs for deduplication', {
                count: validPostedJobs.length,
                format: 'V1'
            });
            return { ids: new Set(validPostedJobs), fingerprints: new Set() };
        }

        logger.warn('Invalid posted_jobs.json format - starting fresh');
        return { ids: new Set(), fingerprints: new Set() };

    } catch (error) {
        logger.error('Error loading posted_jobs.json', { error: error.message });
        logger.info('Starting with empty posted jobs set');

        return { ids: new Set(), fingerprints: new Set() };
    }
}

// Main job processing function
async function processJobs() {
    logger.start('Job processing system');

    // Initialize pipeline tracer (only activates if DEBUG_MODE=true)
    const DEBUG_MODE = process.env.DEBUG_MODE === 'true';
    const tracer = new PipelineTracer(DEBUG_MODE);

    try {

        // Initialize deduplication logger
        const dedupLogger = new DeduplicationLogger();

        // Load posted jobs for accurate deduplication
        // Use posted_jobs.json (what we've successfully posted to Discord)
        // instead of seen_jobs.json (what we've fetched from APIs)
        const postedStore = loadPostedJobsStore(); // Returns { ids, fingerprints }
        const { seenIds, seenFingerprints } = loadSeenJobsStore(); // Returns {seenIds: Set, seenFingerprints: Set}

        // Load job dates store
        const jobDatesStore = loadJobDatesStore();

        // Fetch jobs from external data source
        const allJobs = await fetchAllJobs();
        tracer.checkpoint('01_fetch_all_jobs', allJobs, {
            target_companies: targetCompanies ? targetCompanies.length : 'all'
        });

        // Filter out healthcare/nursing jobs (New-Grad is for tech roles, not healthcare)
        const filteredJobs = filterHealthcareJobs(allJobs);
        logger.info('Filtered out healthcare jobs', {
            filtered: allJobs.length - filteredJobs.length
        });
        tracer.checkpoint('02_after_healthcare_filter', filteredJobs, {
            filtered_out: allJobs.length - filteredJobs.length
        });

        // Filter out Senior/Mid-Level jobs (New-Grad is for Entry-Level roles only)
        // EXCEPTION: Skip filter for JSearch jobs - they're already filtered by API (under_3_years_experience)
        const entryLevelJobs = filteredJobs.filter(job => {
            // JSearch jobs already filtered at API level - trust the source
            if (job.job_source === 'jsearch') {
                return true;
            }

            // For other sources, apply experience level filter
            const level = getExperienceLevel(job.job_title, job.job_description);
            return level === 'Entry-Level';
        });
        logger.info('Filtered out Senior/Mid-Level jobs', {
            before: filteredJobs.length,
            after: entryLevelJobs.length,
            filtered: filteredJobs.length - entryLevelJobs.length
        });
        tracer.checkpoint('03_after_experience_filter', entryLevelJobs, {
            filtered_out: filteredJobs.length - entryLevelJobs.length,
            jsearch_bypassed: filteredJobs.filter(j => j.job_source === 'jsearch').length
        });

        // Fill null dates and convert to relative format
        const jobsWithDates = fillJobDates(entryLevelJobs, jobDatesStore);
        tracer.checkpoint('04_after_fill_dates', jobsWithDates);

        // Add unique IDs for deduplication using standardized generation
        jobsWithDates.forEach(job => {
            job.id = generateJobId(job);
        });

        // **JOB PERSISTENCE: Load persisted jobs from previous runs**
        // This ensures README shows all jobs < 14 days old, not just jobs from current run
        const persistedJobs = loadCurrentJobsStore();
        logger.info('Loaded persisted jobs from previous runs', { count: persistedJobs.length });

        // Merge persisted jobs with fresh jobs (fresh jobs overwrite older data)
        const mergedJobs = mergeJobs(persistedJobs, jobsWithDates);
        logger.info('After merge', { total_unique_jobs: mergedJobs.length });
        tracer.checkpoint('05_after_merge_persisted', mergedJobs, {
            persisted_count: persistedJobs.length,
            fresh_count: jobsWithDates.length
        });

        // **CRITICAL FIX: Sort ALL jobs by date before any filtering**
        // Use mergedJobs (persisted + fresh) not just jobsWithDates
        const sortedJobs = mergedJobs.sort((a, b) => {
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
        
        // Filter current jobs (not older than 14 days)
        // Use job_posted_at_datetime_utc (ISO date) instead of job_posted_at (relative format)
        // job_posted_at is static from when job was first fetched, but job_posted_at_datetime_utc is the actual posting date
        const currentJobs = sortedJobs.filter(j => !isJobOlderThanWeek(j.job_posted_at_datetime_utc));
        tracer.checkpoint('06_after_ttl_filter', currentJobs, {
            ttl_days: 14,
            filtered_out: sortedJobs.length - currentJobs.length
        });

        // **JOB PERSISTENCE: Save current jobs for next run**
        // This ensures jobs persist across workflow runs even if aggregator stops returning them
        saveCurrentJobsStore(currentJobs);

        // STEP 1: Load pending queue and clean up posted jobs (MOVED UP)
        // Load queue BEFORE filtering to check for duplicates already in queue
        let queue = loadPendingQueue();
        queue = cleanupPostedFromQueue(queue, postedStore);

        // Create sets of job IDs and fingerprints already in queue to prevent duplicate additions
        const queueIds = new Set(queue.map(item => item.job.id));
        const queueFingerprints = new Set(queue.map(item => generateMinimalJobFingerprint(item.job)));

        // STEP 2: Filter for truly NEW jobs (deduplication against posted jobs, seen_jobs.json, AND queue)
        // This ensures we don't add the same job to queue multiple times
        // Log EVERY deduplication check for debugging
        const freshJobs = currentJobs.filter(job => {
            const jobId = job.id;
            const fingerprint = generateMinimalJobFingerprint(job);

            // Check against already-posted jobs (by ID or fingerprint)
            const isPostedId = postedStore.ids.has(jobId);
            const isPostedFingerprint = postedStore.fingerprints.has(fingerprint);

            // Check against seen jobs (fetched from APIs before)
            const isInSeen = seenIds.has(jobId);

            // Check against pending queue
            const isInQueue = queueIds.has(jobId);
            const isInQueueByFingerprint = queueFingerprints.has(fingerprint);

            // Job is duplicate if ANY check matches
            const isDuplicate = isPostedId || isPostedFingerprint || isInSeen || isInQueue || isInQueueByFingerprint;

            // Log this check
            let reason = null;
            if (isPostedFingerprint) reason = 'posted_fingerprint';
            else if (isPostedId) reason = 'posted_id';
            else if (isInSeen) reason = 'seen_jobs';
            else if (isInQueueByFingerprint) reason = 'queue_fingerprint';
            else if (isInQueue) reason = 'pending_queue';

            if (isDuplicate && isPostedFingerprint) {
                logger.debug('Fingerprint blocked fresh job', {
                    title: job.job_title,
                    company: job.employer_name,
                    fingerprint: fingerprint.substring(0, 50)
                });
            }

            dedupLogger.logCheck(job, jobId, isDuplicate, fingerprint, reason);

            return !isDuplicate;
        });
        tracer.checkpoint('07_after_deduplication', freshJobs, {
            dedup_stores: ['posted_jobs', 'seen_jobs', 'pending_queue'],
            duplicates_removed: currentJobs.length - freshJobs.length
        });

        logger.info('Processing summary', {
            merged_jobs: mergedJobs.length,
            current_jobs: currentJobs.length,
            fresh_jobs: freshJobs.length
        });

        // Archive ALL current jobs for analytics (separate from deduplication)
        try {
            archiveJobs(currentJobs);
        } catch (archiveError) {
            logger.warn('Analytics archive failed (non-critical)', { error: archiveError.message });
        }

        // STEP 3: Mark ALL new jobs as seen immediately (fixes Edge Case 1)
        // This prevents re-fetching them in next run, even if we don't process them all this run
        if (freshJobs.length > 0) {
            freshJobs.forEach(job => seenIds.add(job.id));
            updateSeenJobsStore(freshJobs, seenIds);
            logger.info('Marked new jobs as seen', { count: freshJobs.length });
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
            logger.info('Added new jobs to pending queue', { count: freshJobs.length });
        }

        // STEP 5: Select batch from queue (FIFO - oldest first)
        const BATCH_SIZE = 50; // Process max 50 jobs per run (increased from 20 to handle higher throughput)
        const pendingItems = queue.filter(item => item.status === 'pending' || item.status === 'enriched');
        const batch = pendingItems.slice(0, BATCH_SIZE);

        if (batch.length === 0) {
            logger.info('No jobs in queue to process');
            writeNewJobsJson([]);
        } else {
            logger.info('Processing batch', {
                batch_size: batch.length,
                pending_total: queue.filter(i => i.status === 'pending').length
            });

            // STEP 6: Enrich descriptions for jobs with "pending" status only
            const needEnrichment = batch.filter(item => item.status === 'pending');

            if (needEnrichment.length > 0) {
                logger.info('Fetching job descriptions', { count: needEnrichment.length });

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

                // Breakdown by platform
                const platformStats = {};
                enrichedJobs.forEach(j => {
                    const platform = j.description_platform || 'unknown';
                    platformStats[platform] = (platformStats[platform] || 0) + 1;
                });

                logger.info('Description fetching complete', {
                    success: successCount,
                    total: enrichedJobs.length,
                    success_rate: `${successRate}%`,
                    failed: failCount,
                    platforms: platformStats
                });

                // Update queue items with enriched data and status
                needEnrichment.forEach((item, i) => {
                    item.job = enrichedJobs[i];
                    item.status = 'enriched';
                    item.enrichedAt = new Date().toISOString();
                });
            } else {
                logger.info('All jobs in batch already enriched', { count: batch.length });
            }

            // STEP 7: Write batch to new_jobs.json for Discord bot
            const batchJobs = batch.map(item => item.job);
            writeNewJobsJson(batchJobs);

            // STEP 8: Save queue (don't remove items yet - Discord bot will mark as "posted")
            savePendingQueue(queue);

            logger.info('Batch ready for Discord bot', {
                batch_jobs: batchJobs.length,
                pending: queue.filter(i => i.status === 'pending').length,
                enriched: queue.filter(i => i.status === 'enriched').length
            });
        }

        // Calculate archived jobs
        // Use job_posted_at_datetime_utc (ISO date) instead of job_posted_at (relative format)
        const archivedJobs = sortedJobs.filter(j => isJobOlderThanWeek(j.job_posted_at_datetime_utc));

        logger.complete('Job processing complete', {
            current: currentJobs.length,
            archived: archivedJobs.length
        });

        // Save deduplication logs
        dedupLogger.printSummary();
        dedupLogger.save();

        // Save structured job fetch summary
        try {
            const logsDir = path.join(process.cwd(), '.github', 'logs');
            fs.mkdirSync(logsDir, { recursive: true });

            const summaryPath = path.join(logsDir, `job-fetch-summary-${new Date().toISOString().split('T')[0]}.json`);
            const summary = {
                timestamp: new Date().toISOString(),
                total_fetched: allJobs.length,
                persisted_jobs: persistedJobs.length,
                merged_jobs: mergedJobs.length,
                current_jobs: currentJobs.length,
                archived_jobs: archivedJobs.length,
                fresh_jobs: freshJobs.length,
                duplicates_filtered: mergedJobs.length - freshJobs.length,
                queue_status: {
                    total: queue.length,
                    pending: queue.filter(i => i.status === 'pending').length,
                    enriched: queue.filter(i => i.status === 'enriched').length,
                    posted: queue.filter(i => i.status === 'posted').length
                }
            };

            fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2), 'utf8');
            logger.info('Job fetch summary saved', { path: summaryPath });

            // Collect pipeline metrics
            const { collectPipelineMetrics } = require('../src/monitoring/metrics-collector');
            collectPipelineMetrics({
                current_jobs: summary.current_jobs,
                fresh_jobs: summary.fresh_jobs,
                duplicate_jobs: summary.duplicates_filtered
            });
        } catch (error) {
            logger.warn('Error saving job fetch summary', { error: error.message });
        }

        // Final checkpoint: Before returning
        tracer.checkpoint('08_final_output', currentJobs, {
            fresh_jobs_added: freshJobs.length,
            total_current: currentJobs.length
        });

        // Save trace file (zero-cost if disabled)
        tracer.save();

        return {
            currentJobs,
            archivedJobs,
            freshJobs,
            stats: generateCompanyStats(currentJobs)
        };

    } catch (error) {
        // Save trace even on error (helps debug failures)
        if (tracer) {
            tracer.save();
        }

        logger.fatal('Error in job processing', {
            error: error.message,
            stack: error.stack
        });
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
    processJobs,
    // Job persistence functions
    loadCurrentJobsStore,
    saveCurrentJobsStore,
    mergeJobs
};