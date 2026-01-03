/**
 * Ashby Job Board API Client
 *
 * Fetches jobs from Ashby's public API.
 * No authentication required.
 *
 * API Docs: https://developers.ashbyhq.com/docs/public-job-posting-api
 * Endpoint: https://api.ashbyhq.com/posting-api/job-board/{jobBoardName}
 */

const https = require('https');

const BASE_URL = 'https://api.ashbyhq.com/posting-api/job-board';

/**
 * Fetch jobs from a single Ashby board
 * @param {string} companySlug - Company's job board name (e.g., 'linear')
 * @returns {Promise<Array>} Array of normalized job objects
 */
async function fetchAshbyJobs(companySlug) {
    const url = `${BASE_URL}/${companySlug}?includeCompensation=true`;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    if (res.statusCode === 404) {
                        console.log(`   ⚠️ Ashby board not found: ${companySlug}`);
                        resolve([]);
                        return;
                    }

                    if (res.statusCode !== 200) {
                        console.log(`   ⚠️ Ashby API error for ${companySlug}: ${res.statusCode}`);
                        resolve([]);
                        return;
                    }

                    const response = JSON.parse(data);

                    // Ashby returns { jobs: [...] }
                    const jobs = response.jobs || [];

                    // Normalize to common format
                    const normalizedJobs = jobs.map(job => normalizeAshbyJob(job, companySlug));
                    resolve(normalizedJobs);

                } catch (error) {
                    console.error(`   ❌ Error parsing Ashby response for ${companySlug}:`, error.message);
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
 * Normalize Ashby job to common format
 * @param {Object} job - Raw Ashby job object
 * @param {string} companySlug - Company slug for reference
 * @returns {Object} Normalized job object
 */
function normalizeAshbyJob(job, companySlug) {
    // Ashby location structure
    const location = job.location || 'Remote';

    // Extract department/team
    const department = job.department || null;
    const team = job.team || null;

    // Employment type
    const employmentType = job.employmentType || null;

    // Compensation (if available)
    const compensation = job.compensation ? {
        min: job.compensation.compensationTierSummary?.min,
        max: job.compensation.compensationTierSummary?.max,
        currency: job.compensation.compensationTierSummary?.currency,
        interval: job.compensation.compensationTierSummary?.interval
    } : null;

    // Workplace type
    const isRemote = job.isRemote || false;

    return {
        // Core fields
        id: `ashby-${companySlug}-${job.id}`,
        source: 'ashby',
        source_url: 'api.ashbyhq.com',
        source_id: job.id,

        // Job details
        title: job.title,
        company_name: job.organizationName || companySlug,
        company_slug: companySlug,

        // Location
        location: location,
        locations: job.secondaryLocations
            ? [location, ...job.secondaryLocations]
            : [location],
        is_remote: isRemote,

        // URL
        url: job.jobUrl || `https://jobs.ashbyhq.com/${companySlug}/${job.id}`,
        apply_url: job.applyUrl || null,

        // Metadata
        department: department,
        team: team,
        employment_type: employmentType,

        // Compensation
        salary: compensation,

        // Dates
        posted_at: job.publishedAt || new Date().toISOString(),
        fetched_at: new Date().toISOString(),

        // Description
        description: job.descriptionPlain || job.descriptionHtml || null,

        // Original data for debugging
        _raw: {
            source: 'ashby',
            original_id: job.id
        }
    };
}

/**
 * Fetch jobs from multiple Ashby companies
 * @param {Array<{slug: string, name: string}>} companies - List of companies to fetch
 * @param {Object} options - Options
 * @param {number} options.delayMs - Delay between requests (default: 500ms)
 * @returns {Promise<Array>} All jobs from all companies
 */
async function fetchAllAshbyJobs(companies, options = {}) {
    const { delayMs = 500 } = options;
    const allJobs = [];

    console.log(`\n🔷 Fetching from ${companies.length} Ashby boards...`);

    for (const company of companies) {
        const slug = typeof company === 'string' ? company : company.slug;
        const name = typeof company === 'string' ? company : company.name;

        try {
            const jobs = await fetchAshbyJobs(slug);

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

    console.log(`   📊 Ashby total: ${allJobs.length} jobs`);
    return allJobs;
}

module.exports = {
    fetchAshbyJobs,
    fetchAllAshbyJobs,
    normalizeAshbyJob
};
