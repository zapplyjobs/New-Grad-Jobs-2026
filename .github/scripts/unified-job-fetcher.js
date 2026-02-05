/**
 * Unified Job Fetcher
 * Orchestrates job collection from all configured sources
 *
 * Sources (ALL used together):
 * 1. Aggregator (jobs-data-2026) - JSearch jobs via tagged feed
 * 2. ATS platforms (Greenhouse, Lever, Ashby, Workable) - Company career pages
 * 3. API-based companies (legacy - currently disabled)
 *
 * Feature Flag:
 *   - USE_AGGREGATOR=true: Include aggregator feed (JSearch jobs)
 *   - USE_AGGREGATOR=false: ATS only
 */

const { getCompanies } = require('../../jobboard/src/backend/config/companies.js');
const { fetchAPIJobs } = require('../../jobboard/src/backend/services/apiService.js');
const { generateJobId, isUSOnlyJob } = require('./job-fetcher/utils.js');
const { fetchAllATSJobs } = require('./job-fetcher/sources');
const { fetchAllJobs: fetchFromAggregator, isAggregatorEnabled } = require('./job-fetcher/aggregator-consumer');

/**
 * Delay helper for rate limiting
 * @param {number} ms - Milliseconds to delay
 * @returns {Promise} Promise that resolves after delay
 */
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Fetch jobs from all configured sources
 * @returns {Promise<Array>} Array of unique job objects
 */
async function fetchAllJobs() {
  console.log('🚀 Starting unified job collection...');
  console.log('━'.repeat(50));

  const allJobs = [];
  const sources = [];

  // === Source 1: Aggregator (JSearch jobs) ===
  const useAggregator = isAggregatorEnabled();
  console.log(`\n🔧 Feature Flag: USE_AGGREGATOR=${useAggregator ? 'true' : 'false'}`);

  if (useAggregator) {
    console.log('\n📡 Fetching from Aggregator (JSearch)...');
    console.log('   Source: jobs-data-2026');
    console.log('   Filter: employment=entry_level, domains=[all]');

    try {
      const aggregatorJobs = await fetchFromAggregator();
      allJobs.push(...aggregatorJobs);
      sources.push('Aggregator (JSearch)');
      console.log(`📊 Aggregator: ${aggregatorJobs.length} jobs`);
    } catch (error) {
      console.error(`❌ Aggregator failed:`, error.message);
    }
  }

  // === Source 2: ATS platforms (ALWAYS used) ===
  console.log('\n📡 Fetching from ATS platforms...');
  console.log('   Sources: Greenhouse, Lever, Ashby, Workable');

  try {
    const { jobs: atsJobs, stats: atsStats } = await fetchAllATSJobs({ delayMs: 500 });

    // Normalize ATS jobs to match expected format
    const normalizedATSJobs = atsJobs.map(job => ({
      // Map to legacy format expected by downstream processors
      job_title: job.title,
      employer_name: job.company_name,
      job_city: job.location,
      job_apply_link: job.url,
      job_posted_at_datetime_utc: job.posted_at,
      job_description: job.description,
      // Keep original fields for reference
      ...job
    }));

    allJobs.push(...normalizedATSJobs);
    sources.push('ATS platforms');
    console.log(`📊 ATS: ${normalizedATSJobs.length} jobs`);
  } catch (error) {
    console.error(`❌ ATS sources failed:`, error.message);
  }

  // === Source 3: API-based companies ===
  console.log('\n📡 Checking API-based companies...');

  const companies = getCompanies();
  const companyKeys = Object.keys(companies);

  if (companyKeys.length > 0) {
    for (const key of companyKeys) {
      const company = companies[key];

      try {
        const jobs = await fetchAPIJobs(company);

        if (jobs && jobs.length > 0) {
          allJobs.push(...jobs);
        }

        // Rate limiting: 2 second delay between API calls
        await delay(2000);

      } catch (error) {
        console.error(`❌ Error processing ${company.name}:`, error.message);
      }
    }
    console.log(`📊 API companies: ${companyKeys.length} companies configured`);
  } else {
    console.log(`   No API companies configured`);
  }

  // === Filter to US-only jobs ===
  console.log('\n🇺🇸 Filtering to US-only jobs...');

  const removedJobs = [];
  const usJobs = allJobs.filter(job => {
    const isUSJob = isUSOnlyJob(job);

    if (!isUSJob) {
      removedJobs.push(job);
      return false;
    }

    return true;
  });

  console.log(`   Kept: ${usJobs.length} US jobs`);
  console.log(`   Removed: ${removedJobs.length} non-US jobs`);

  // === Remove duplicates ===
  console.log('\n🔄 Removing duplicates...');

  const uniqueJobs = usJobs.filter((job, index, self) => {
    const jobId = generateJobId(job);
    return index === self.findIndex(j => generateJobId(j) === jobId);
  });

  const duplicatesRemoved = usJobs.length - uniqueJobs.length;
  console.log(`   Duplicates removed: ${duplicatesRemoved}`);

  // === Sort by posting date ===
  uniqueJobs.sort((a, b) => {
    const dateA = new Date(a.job_posted_at_datetime_utc || 0);
    const dateB = new Date(b.job_posted_at_datetime_utc || 0);
    return dateB - dateA; // Latest first
  });

  // === Final Summary ===
  console.log('\n' + '━'.repeat(50));
  console.log('✅ Job collection complete!');
  console.log(`📊 Final count: ${uniqueJobs.length} unique jobs`);
  console.log(`📡 Sources: ${sources.join(' + ') || 'ATS only'}`);
  console.log('━'.repeat(50) + '\n');

  return uniqueJobs;
}

module.exports = {
  fetchAllJobs,
  fetchFromAggregator,
  isAggregatorEnabled: isAggregatorEnabled
};
