/**
 * Greenhouse Job Board API Client
 *
 * Fetches jobs from Greenhouse's public API.
 * No authentication required for GET requests.
 *
 * API Docs: https://developers.greenhouse.io/job-board.html
 * Endpoint: https://boards-api.greenhouse.io/v1/boards/{board_token}/jobs
 */

const https = require('https');

const BASE_URL = 'https://boards-api.greenhouse.io/v1/boards';

/**
 * Fetch jobs from a single Greenhouse board
 * @param {string} companySlug - Company's board token (e.g., 'anthropic')
 * @returns {Promise<Array>} Array of normalized job objects
 */
async function fetchGreenhouseJobs(companySlug) {
    const url = `${BASE_URL}/${companySlug}/jobs?content=true`;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    if (res.statusCode === 404) {
                        console.log(`   ⚠️ Greenhouse board not found: ${companySlug}`);
                        resolve([]);
                        return;
                    }

                    if (res.statusCode !== 200) {
                        console.log(`   ⚠️ Greenhouse API error for ${companySlug}: ${res.statusCode}`);
                        resolve([]);
                        return;
                    }

                    const response = JSON.parse(data);
                    const jobs = response.jobs || [];

                    // Normalize to common format
                    const normalizedJobs = jobs.map(job => normalizeGreenhouseJob(job, companySlug));
                    resolve(normalizedJobs);

                } catch (error) {
                    console.error(`   ❌ Error parsing Greenhouse response for ${companySlug}:`, error.message);
                    resolve([]);
                }
            });
        }).on('error', (error) => {
            console.error(`   ❌ Network error fetching ${companySlug}:`, error.message);
            resolve([]);
        });
    });
}

/**
 * Normalize Greenhouse job to common format
 * @param {Object} job - Raw Greenhouse job object
 * @param {string} companySlug - Company slug for reference
 * @returns {Object} Normalized job object
 */
function normalizeGreenhouseJob(job, companySlug) {
    // Extract location from Greenhouse format
    const location = job.location?.name || 'Remote';

    // Parse departments
    const departments = job.departments?.map(d => d.name) || [];

    return {
        // Core fields
        id: `greenhouse-${companySlug}-${job.id}`,
        source: 'greenhouse',
        source_url: 'boards-api.greenhouse.io',
        source_id: job.id.toString(),

        // Job details
        title: job.title,
        company_name: job.company?.name || companySlug,
        company_slug: companySlug,

        // Location
        location: location,
        locations: [location],

        // URL
        url: job.absolute_url,

        // Metadata
        departments: departments,
        employment_type: job.employment_type || null,

        // Dates
        posted_at: job.updated_at || job.created_at || new Date().toISOString(),
        fetched_at: new Date().toISOString(),

        // Description (if content=true was requested)
        description: job.content || null,

        // Original data for debugging
        _raw: {
            source: 'greenhouse',
            original_id: job.id
        }
    };
}

/**
 * Fetch jobs from multiple Greenhouse companies
 * @param {Array<{slug: string, name: string}>} companies - List of companies to fetch
 * @param {Object} options - Options
 * @param {number} options.delayMs - Delay between requests (default: 500ms)
 * @returns {Promise<Array>} All jobs from all companies
 */
async function fetchAllGreenhouseJobs(companies, options = {}) {
    const { delayMs = 500 } = options;
    const allJobs = [];

    console.log(`\n🌿 Fetching from ${companies.length} Greenhouse boards...`);

    for (const company of companies) {
        const slug = typeof company === 'string' ? company : company.slug;
        const name = typeof company === 'string' ? company : company.name;

        try {
            const jobs = await fetchGreenhouseJobs(slug);

            if (jobs.length > 0) {
                console.log(`   ✅ ${name}: ${jobs.length} jobs`);
                allJobs.push(...jobs);
            } else {
                console.log(`   ○ ${name}: 0 jobs`);
            }

            // Rate limiting
            if (delayMs > 0) {
                await new Promise(r => setTimeout(r, delayMs));
            }

        } catch (error) {
            console.error(`   ❌ ${name}: ${error.message}`);
        }
    }

    console.log(`   📊 Greenhouse total: ${allJobs.length} jobs`);
    return allJobs;
}

module.exports = {
    fetchGreenhouseJobs,
    fetchAllGreenhouseJobs,
    normalizeGreenhouseJob
};
