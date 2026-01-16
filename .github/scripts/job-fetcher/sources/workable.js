/**
 * Workable ATS Job Fetcher
 *
 * Fetches jobs from Workable's public job board API.
 * Endpoint: GET https://apply.workable.com/api/v1/widget/accounts/{company}
 *
 * Legal: Public API, widely used by commercial job boards (Fantastic.jobs, GetKnit, etc.)
 * TOS: "Harvest candidates for improper purposes" clause targets spam/fraud, not job aggregation
 *
 * Sources:
 * - https://www.jobboardly.com/blog/job-board-scraping-complete-guide-2025
 * - https://fantastic.jobs/ats/workable
 * - https://help.workable.com/hc/en-us/articles/115013356548-Workable-API-Documentation
 */

const https = require('https');

/**
 * Fetch jobs from a single Workable company
 * @param {string} companySlug - Company identifier (e.g., "zapply")
 * @returns {Promise<Object>} Response with jobs array
 */
function fetchWorkableJobs(companySlug) {
    return new Promise((resolve, reject) => {
        const url = `https://apply.workable.com/api/v1/widget/accounts/${companySlug}`;

        https.get(url, (res) => {
            let data = '';

            res.on('data', chunk => data += chunk);
            res.on('end', () => {
                if (res.statusCode === 200) {
                    try {
                        const parsed = JSON.parse(data);
                        resolve(parsed);
                    } catch (e) {
                        reject(new Error(`Failed to parse JSON for ${companySlug}: ${e.message}`));
                    }
                } else if (res.statusCode === 404) {
                    resolve({ jobs: [] }); // Company exists but no jobs
                } else {
                    reject(new Error(`HTTP ${res.statusCode} for ${companySlug}`));
                }
            });
        }).on('error', reject);
    });
}

/**
 * Normalize Workable job to our standard format
 */
function normalizeWorkableJob(job, companyName) {
    return {
        id: job.id || `workable-${job.shortcode}`,
        title: job.title,
        company: companyName,
        location: job.location?.city || job.location?.country || 'Remote',
        description: job.description || '',
        url: job.url,
        posted: job.created_at ? new Date(job.created_at).toISOString() : new Date().toISOString(),
        source: 'workable',
        source_url: job.url,
        experience_level: inferExperienceLevel(job.title),
        department: job.department || null,
        employment_type: job.employment_type || 'Full-time'
    };
}

/**
 * Infer experience level from job title
 */
function inferExperienceLevel(title) {
    const titleLower = title.toLowerCase();

    if (titleLower.includes('intern') || titleLower.includes('internship')) {
        return 'Internship';
    }
    if (titleLower.includes('new grad') || titleLower.includes('entry') || titleLower.includes('junior')) {
        return 'Entry Level';
    }
    if (titleLower.includes('senior') || titleLower.includes('staff') || titleLower.includes('principal')) {
        return 'Senior';
    }

    return 'Mid Level';
}

/**
 * Fetch jobs from multiple Workable companies
 * @param {Array} companies - Array of {slug: string, name: string}
 * @param {Object} options - Configuration options
 * @returns {Promise<Array>} Array of normalized jobs
 */
async function fetchAllWorkableJobs(companies, options = {}) {
    const { delayMs = 500 } = options;

    console.log(`\n📡 Fetching from ${companies.length} Workable companies...`);

    const allJobs = [];
    let successCount = 0;
    let errorCount = 0;

    for (const company of companies) {
        try {
            const response = await fetchWorkableJobs(company.slug);
            const jobs = response.jobs || [];

            if (jobs.length > 0) {
                const normalized = jobs.map(job => normalizeWorkableJob(job, company.name));
                allJobs.push(...normalized);
                successCount++;
                console.log(`   ✅ ${company.name}: ${jobs.length} jobs`);
            } else {
                console.log(`   ⊘  ${company.name}: No jobs`);
            }

            // Rate limiting (10 req/10s = one every 1000ms)
            if (delayMs > 0) {
                await new Promise(resolve => setTimeout(resolve, delayMs));
            }

        } catch (error) {
            errorCount++;
            console.error(`   ❌ ${company.name}: ${error.message}`);
        }
    }

    console.log(`\n📊 Workable Summary: ${allJobs.length} jobs from ${successCount}/${companies.length} companies (${errorCount} errors)`);

    return allJobs;
}

module.exports = {
    fetchWorkableJobs,
    fetchAllWorkableJobs,
    normalizeWorkableJob
};
