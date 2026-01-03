/**
 * ATS Sources - Unified Interface
 *
 * Fetches jobs from all configured ATS platforms:
 * - Greenhouse
 * - Lever
 * - Ashby
 *
 * All APIs are public and require no authentication.
 */

const { fetchAllGreenhouseJobs } = require('./greenhouse');
const { fetchAllLeverJobs } = require('./lever');
const { fetchAllAshbyJobs } = require('./ashby');
const companyList = require('./company-list.json');

/**
 * Fetch jobs from all ATS platforms
 * @param {Object} options - Configuration options
 * @param {number} options.delayMs - Delay between API calls (default: 500ms)
 * @param {boolean} options.includeGreenhouse - Fetch from Greenhouse (default: true)
 * @param {boolean} options.includeLever - Fetch from Lever (default: true)
 * @param {boolean} options.includeAshby - Fetch from Ashby (default: true)
 * @returns {Promise<Object>} Object with jobs array and stats
 */
async function fetchAllATSJobs(options = {}) {
    const {
        delayMs = 500,
        includeGreenhouse = true,
        includeLever = true,
        includeAshby = true
    } = options;

    console.log('\n' + '═'.repeat(50));
    console.log('📡 ATS Job Fetcher - Starting collection');
    console.log('═'.repeat(50));

    const allJobs = [];
    const stats = {
        greenhouse: { companies: 0, jobs: 0 },
        lever: { companies: 0, jobs: 0 },
        ashby: { companies: 0, jobs: 0 },
        total: { companies: 0, jobs: 0 }
    };

    // Fetch from Greenhouse
    if (includeGreenhouse && companyList.greenhouse?.length > 0) {
        const greenhouseJobs = await fetchAllGreenhouseJobs(companyList.greenhouse, { delayMs });
        allJobs.push(...greenhouseJobs);
        stats.greenhouse.companies = companyList.greenhouse.length;
        stats.greenhouse.jobs = greenhouseJobs.length;
    }

    // Fetch from Lever
    if (includeLever && companyList.lever?.length > 0) {
        const leverJobs = await fetchAllLeverJobs(companyList.lever, { delayMs });
        allJobs.push(...leverJobs);
        stats.lever.companies = companyList.lever.length;
        stats.lever.jobs = leverJobs.length;
    }

    // Fetch from Ashby
    if (includeAshby && companyList.ashby?.length > 0) {
        const ashbyJobs = await fetchAllAshbyJobs(companyList.ashby, { delayMs });
        allJobs.push(...ashbyJobs);
        stats.ashby.companies = companyList.ashby.length;
        stats.ashby.jobs = ashbyJobs.length;
    }

    // Calculate totals
    stats.total.companies = stats.greenhouse.companies + stats.lever.companies + stats.ashby.companies;
    stats.total.jobs = allJobs.length;

    // Summary
    console.log('\n' + '─'.repeat(50));
    console.log('📊 ATS Fetcher Summary:');
    console.log(`   Greenhouse: ${stats.greenhouse.jobs} jobs from ${stats.greenhouse.companies} companies`);
    console.log(`   Lever: ${stats.lever.jobs} jobs from ${stats.lever.companies} companies`);
    console.log(`   Ashby: ${stats.ashby.jobs} jobs from ${stats.ashby.companies} companies`);
    console.log(`   ─────────────────────────`);
    console.log(`   TOTAL: ${stats.total.jobs} jobs from ${stats.total.companies} companies`);
    console.log('═'.repeat(50) + '\n');

    return {
        jobs: allJobs,
        stats
    };
}

/**
 * Get the company list for a specific platform
 * @param {string} platform - 'greenhouse', 'lever', or 'ashby'
 * @returns {Array} List of companies
 */
function getCompanyList(platform) {
    return companyList[platform] || [];
}

/**
 * Add a company to the list (in memory only - doesn't persist)
 * Use this for testing or dynamic additions
 * @param {string} platform - 'greenhouse', 'lever', or 'ashby'
 * @param {Object} company - { slug: string, name: string }
 */
function addCompany(platform, company) {
    if (companyList[platform]) {
        companyList[platform].push(company);
    }
}

module.exports = {
    fetchAllATSJobs,
    getCompanyList,
    addCompany,

    // Re-export individual fetchers for direct use
    fetchAllGreenhouseJobs,
    fetchAllLeverJobs,
    fetchAllAshbyJobs
};
