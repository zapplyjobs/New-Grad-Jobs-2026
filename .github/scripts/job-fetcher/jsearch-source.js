/**
 * JSearch API Integration for New-Grad-Jobs-2026
 *
 * Quota: 80 API requests/day (10,000 requests/month quota)
 * Configuration: 80 requests × 1 page × 10 jobs = 800 jobs/day
 *
 * Features:
 * - 27 new-grad-focused queries
 * - Query rotation (spreads requests across different search terms)
 * - Rate limiting (80 requests/day max)
 * - Graceful error handling
 * - Socket hang up retry with exponential backoff
 * - Structured logging
 */

const fs = require('fs');
const path = require('path');
const { logger, withRetry, tryCatch, config } = require('../shared');

// Configuration - JSearch API
const JSEARCH_API_KEY = process.env.JSEARCH_API_KEY;
const JSEARCH_BASE_URL = 'https://jsearch.p.rapidapi.com/search';
const MAX_REQUESTS_PER_DAY = 80;  // 80 API requests/day (10,000 requests/month quota for New-Grad-Jobs-2026)
const USAGE_FILE = path.join(process.cwd(), '.github', 'data', 'jsearch_usage.json');

// New-grad specific queries (comprehensive coverage)
const NEW_GRAD_QUERIES = [
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
 * Load or initialize usage tracking file
 */
async function loadUsageTracking() {
    return tryCatch(async () => {
        if (fs.existsSync(USAGE_FILE)) {
            const data = JSON.parse(fs.readFileSync(USAGE_FILE, 'utf8'));
            const today = new Date().toISOString().split('T')[0];

            // Reset counter if new day
            if (data.date !== today) {
                logger.info('New day detected - resetting JSearch usage tracking', {
                    old_date: data.date,
                    new_date: today
                });
                return {
                    date: today,
                    requests: 0,
                    remaining: MAX_REQUESTS_PER_DAY,
                    queries_executed: []
                };
            }
            return data;
        }
        return null;
    }, 'Load JSearch usage tracking').then(data => {
        if (!data) {
            logger.info('Initializing new JSearch usage tracking file');
            return {
                date: new Date().toISOString().split('T')[0],
                requests: 0,
                remaining: MAX_REQUESTS_PER_DAY,
                queries_executed: []
            };
        }
        return data;
    }).catch(error => {
        logger.error('Failed to load usage tracking - using defaults', { error: error.message });
        return {
            date: new Date().toISOString().split('T')[0],
            requests: 0,
            remaining: MAX_REQUESTS_PER_DAY,
            queries_executed: []
        };
    });
}

/**
 * Save usage tracking
 */
/**
 * Save usage tracking
 */
async function saveUsageTracking(data) {
    return tryCatch(async () => {
        const dir = path.dirname(USAGE_FILE);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(USAGE_FILE, JSON.stringify(data, null, 2), 'utf8');
        logger.debug('JSearch usage tracking saved', {
            requests: data.requests,
            remaining: data.remaining
        });
    }, 'Save JSearch usage tracking').catch(error => {
        logger.error('Failed to save usage tracking', { error: error.message });
    });
}

/**
 * Normalize company name from JSearch data
 * JSearch sometimes returns internal field names instead of actual company names
 */
function normalizeCompanyName(job) {
    const employerName = job.employer_name || '';

    // Internal field patterns that indicate bad data
    const internalPatterns = [
        /^Org_Subtype_/i,        // Dell: "Org_Subtype_BU023_Global_Services"
        /^BU\d+_/i,              // Various internal BU codes
        /^Department_/i,         // Department-based names
        /^Division_/i,           // Division-based names
    ];

    const needsNormalization = internalPatterns.some(pattern =>
        pattern.test(employerName)
    );

    if (!needsNormalization) {
        return employerName;
    }

    // Try to extract company from apply URL domain
    if (job.job_apply_link) {
        const urlMatch = job.job_apply_link.match(/https?:\/\/(?:www\.)?([^\/]+)/i);
        if (urlMatch) {
            const domain = urlMatch[1].toLowerCase();

            // Known domain to company mappings
            const domainMappings = {
                'jobs.dell.com': 'Dell',
                'dell.com': 'Dell',
                'jobs.apple.com': 'Apple',
                'careers.apple.com': 'Apple',
                'careers.google.com': 'Google',
                'google.com': 'Google',
                'jobs.netflix.com': 'Netflix',
                'careers.microsoft.com': 'Microsoft',
                'jobs.amazon.com': 'Amazon',
                'careers.meta.com': 'Meta',
                'jobs.fb.com': 'Meta',
            };

            // Check for exact domain match
            if (domainMappings[domain]) {
                return domainMappings[domain];
            }

            // Extract from second-level domain (e.g., "careers.company.com" -> "Company")
            const parts = domain.split('.');
            if (parts.length >= 2) {
                const secondLevel = parts[parts.length - 2];
                // Capitalize first letter of each word
                return secondLevel.split('-').map(word =>
                    word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                ).join(' ');
            }
        }
    }

    // Fallback to original employer name
    return employerName;
}

/**
 * Normalize JSearch job format to internal format
 * JSearch API returns nested format: data: {0: {job}, 1: {job}, ...}
 */
function normalizeJSearchJobs(response) {
    // Handle nested response format: data: {0: {job}, 1: {job}, ...}
    // NOT a simple array!
    let jobsArray;
    if (response.data && typeof response.data === 'object') {
        // Convert {0: {}, 1: {}, ...} to array
        jobsArray = Object.values(response.data);
    } else if (Array.isArray(response.data)) {
        jobsArray = response.data;
    } else {
        logger.error('Unexpected JSearch response format', {
            has_data: !!response.data,
            data_type: typeof response.data
        });
        return [];
    }

    return jobsArray.map(job => {
        try {
            // Normalize company name FIRST
            const normalizedEmployer = normalizeCompanyName(job);

            return {
                job_title: job.job_title || '',
                employer_name: normalizedEmployer,
                job_city: job.job_city || '',
                job_state: job.job_state || '',
                job_description: job.job_description || '',
                job_apply_link: job.job_apply_link || job.job_google_link || '',
                job_posted_at_datetime_utc: job.job_posted_at_datetime_utc || new Date().toISOString(),
                job_employment_type: job.job_employment_type || 'FULLTIME',
                // Additional metadata
                job_source: 'jsearch',
                job_publisher: job.job_publisher || 'JSearch API',
                // JSearch-specific fields
                job_is_remote: job.job_is_remote || false,
                job_location: job.job_location || ''
            };
        } catch (error) {
            logger.warn('Error normalizing JSearch job - skipping', {
                error: error.message,
                job_id: job.job_id,
                employer: job.employer_name
            });
            return null;
        }
    }).filter(job => job !== null);
}

/**
 * Search JSearch API for new grad jobs
 * Target: 90 jobs/day (10 requests × 9 pages)
 *
 * Features:
 * - Query rotation based on hour
 * - Rate limiting enforcement
 * - Exponential backoff retry for socket hang up errors
 * - Structured logging
 */
async function searchJSearchNewGrad() {
    // Check if API key is configured
    if (!JSEARCH_API_KEY) {
        logger.warn('JSEARCH_API_KEY not configured - skipping JSearch fetch', {
            hint: 'Add JSEARCH_API_KEY to repository secrets'
        });
        return [];
    }

    // Load usage tracking (now async)
    const usage = await loadUsageTracking();

    // Check rate limit
    if (usage.requests >= MAX_REQUESTS_PER_DAY) {
        logger.info('JSearch daily limit reached - skipping this run', {
            requests: usage.requests,
            max_requests: MAX_REQUESTS_PER_DAY,
            remaining: usage.remaining
        });
        return [];
    }

    // Log available quota for visibility
    logger.info('JSearch quota available', {
        remaining: usage.remaining,
        max_requests: MAX_REQUESTS_PER_DAY
    });

    // Rotate queries based on current hour (spreads requests across queries)
    const currentHour = new Date().getUTCHours();
    const queryIndex = currentHour % NEW_GRAD_QUERIES.length;
    const query = NEW_GRAD_QUERIES[queryIndex];

    logger.info('JSearch API request initiated', {
        query,
        request_number: usage.requests + 1,
        max_requests: MAX_REQUESTS_PER_DAY
    });

    try {
        // Build API request
        const url = new URL(JSEARCH_BASE_URL);
        url.searchParams.append('query', `${query} United States`);
        url.searchParams.append('page', '1');
        url.searchParams.append('num_pages', '1');  // 1 page = 10 jobs per request (80 requests/day = 800 jobs/day)
        url.searchParams.append('date_posted', 'month');
        url.searchParams.append('country', 'us');  // US only
        url.searchParams.append('employment_types', 'FULLTIME');  // Full-time roles
        url.searchParams.append('job_requirements', 'under_3_years_experience,more_than_3_years_experience,no_experience');

        // Fetch with retry logic for socket hang up errors (H7)
        const response = await withRetry(
            async () => {
                return fetch(url.toString(), {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': JSEARCH_API_KEY,
                        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
                    },
                    // Add timeout to prevent hanging connections
                    signal: AbortSignal.timeout(30000)  // 30 second timeout
                });
            },
            'JSearch API fetch',
            config.socketHangUp,  // Use centralized retry config
            { query, url: url.toString() }
        );

        if (!response.ok) {
            logger.error('JSearch API request failed', {
                status: response.status,
                statusText: response.statusText
            });
            return [];
        }

        const data = await response.json();
        const jobs = data.data || [];

        // Update usage tracking with detailed metrics
        usage.requests++;
        usage.remaining = MAX_REQUESTS_PER_DAY - usage.requests;
        usage.queries_executed.push(query);

        // Add performance metrics
        if (!usage.metrics) usage.metrics = {};
        if (!usage.metrics.jobs_per_query) usage.metrics.jobs_per_query = {};
        if (!usage.metrics.jobs_per_query[query]) usage.metrics.jobs_per_query[query] = [];
        usage.metrics.jobs_per_query[query].push(jobs.length);

        // Track total jobs fetched
        if (!usage.metrics.total_jobs) usage.metrics.total_jobs = 0;
        usage.metrics.total_jobs += jobs.length;

        // Calculate averages
        const avgJobsPerRequest = usage.metrics.total_jobs / usage.requests;

        await saveUsageTracking(usage);

        logger.info('JSearch fetch completed successfully', {
            jobs_returned: jobs.length,
            avg_jobs_per_request: avgJobsPerRequest.toFixed(1),
            usage_requests: usage.requests,
            usage_remaining: usage.remaining,
            total_jobs_today: usage.metrics.total_jobs
        });

        // Normalize jobs to internal format
        return normalizeJSearchJobs(data);

    } catch (error) {
        logger.error('JSearch API error', {
            error: error.message,
            code: error.code,
            query
        });
        return [];
    }
}

module.exports = {
    searchJSearchNewGrad,
    MAX_REQUESTS_PER_DAY,
    NEW_GRAD_QUERIES
};
