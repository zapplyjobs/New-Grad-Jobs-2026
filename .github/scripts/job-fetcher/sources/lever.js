/**
 * Lever Postings API Client
 *
 * Fetches jobs from Lever's public API.
 * No authentication required for GET requests.
 *
 * API Docs: https://github.com/lever/postings-api
 * Endpoint: https://api.lever.co/v0/postings/{company}
 */

const https = require('https');

const BASE_URL = 'https://api.lever.co/v0/postings';

/**
 * Fetch jobs from a single Lever board
 * @param {string} companySlug - Company's site name (e.g., 'netflix')
 * @returns {Promise<Array>} Array of normalized job objects
 */
async function fetchLeverJobs(companySlug) {
    const url = `${BASE_URL}/${companySlug}?mode=json`;

    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                try {
                    if (res.statusCode === 404) {
                        console.log(`   ⚠️ Lever board not found: ${companySlug}`);
                        resolve([]);
                        return;
                    }

                    if (res.statusCode !== 200) {
                        console.log(`   ⚠️ Lever API error for ${companySlug}: ${res.statusCode}`);
                        resolve([]);
                        return;
                    }

                    const jobs = JSON.parse(data);

                    // Lever returns array directly (not wrapped in object)
                    if (!Array.isArray(jobs)) {
                        console.log(`   ⚠️ Unexpected Lever response format for ${companySlug}`);
                        resolve([]);
                        return;
                    }

                    // Normalize to common format
                    const normalizedJobs = jobs.map(job => normalizeLeverJob(job, companySlug));
                    resolve(normalizedJobs);

                } catch (error) {
                    console.error(`   ❌ Error parsing Lever response for ${companySlug}:`, error.message);
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
 * Normalize Lever job to common format
 * @param {Object} job - Raw Lever job object
 * @param {string} companySlug - Company slug for reference
 * @returns {Object} Normalized job object
 */
function normalizeLeverJob(job, companySlug) {
    // Lever location structure
    const location = job.categories?.location || 'Remote';

    // Extract team/department
    const team = job.categories?.team || null;
    const department = job.categories?.department || null;

    // Workplace type (on-site, remote, hybrid)
    const workplaceType = job.workplaceType || 'unspecified';

    // Salary info (if available)
    const salary = job.salaryRange ? {
        min: job.salaryRange.min,
        max: job.salaryRange.max,
        currency: job.salaryRange.currency,
        interval: job.salaryRange.interval
    } : null;

    return {
        // Core fields
        id: `lever-${companySlug}-${job.id}`,
        source: 'lever',
        source_url: 'api.lever.co',
        source_id: job.id,

        // Job details
        title: job.text,
        company_name: job.categories?.company || companySlug,
        company_slug: companySlug,

        // Location
        location: location,
        locations: [location],
        workplace_type: workplaceType,

        // URL
        url: job.hostedUrl || job.applyUrl,
        apply_url: job.applyUrl,

        // Metadata
        team: team,
        department: department,
        commitment: job.categories?.commitment || null, // Full-time, Part-time, etc.

        // Compensation
        salary: salary,

        // Dates
        posted_at: new Date(job.createdAt).toISOString(),
        fetched_at: new Date().toISOString(),

        // Description
        description: job.descriptionPlain || job.description || null,

        // Original data for debugging
        _raw: {
            source: 'lever',
            original_id: job.id
        }
    };
}

/**
 * Fetch jobs from multiple Lever companies
 * @param {Array<{slug: string, name: string}>} companies - List of companies to fetch
 * @param {Object} options - Options
 * @param {number} options.delayMs - Delay between requests (default: 500ms)
 * @returns {Promise<Array>} All jobs from all companies
 */
async function fetchAllLeverJobs(companies, options = {}) {
    const { delayMs = 500 } = options;
    const allJobs = [];

    console.log(`\n🎯 Fetching from ${companies.length} Lever boards...`);

    for (const company of companies) {
        const slug = typeof company === 'string' ? company : company.slug;
        const name = typeof company === 'string' ? company : company.name;

        try {
            const jobs = await fetchLeverJobs(slug);

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

    console.log(`   📊 Lever total: ${allJobs.length} jobs`);
    return allJobs;
}

module.exports = {
    fetchLeverJobs,
    fetchAllLeverJobs,
    normalizeLeverJob
};
