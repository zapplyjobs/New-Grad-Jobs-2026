/**
 * Unified Job Fetcher
 * Orchestrates job collection from all configured sources
 *
 * Sources:
 * 1. Aggregator (jobs-data-2026) - When USE_AGGREGATOR=true
 * 2. API-based companies (legacy - currently disabled)
 * 3. ATS platforms (Greenhouse, Lever, Ashby, Workable)
 * 4. USAJobs API (Federal Government Jobs)
 *
 * Feature Flag:
 *   - USE_AGGREGATOR=true: Fetch from tagged aggregator feed
 *   - USE_AGGREGATOR=false or unset: Fetch from ATS/USAJobs sources
 */

const { getCompanies } = require('../../jobboard/src/backend/config/companies.js');
const { fetchAPIJobs } = require('../../jobboard/src/backend/services/apiService.js');
const { generateJobId, isUSOnlyJob } = require('./job-fetcher/utils.js');
const { fetchAllATSJobs } = require('./job-fetcher/sources');
const { fetchUSAJobs } = require('./job-fetcher/sources/usajobs');
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

  // Check feature flag
  const useAggregator = isAggregatorEnabled();

  console.log(`\n🔧 Feature Flag: USE_AGGREGATOR=${useAggregator ? 'true' : 'false'}`);

  // Use aggregator if enabled
  if (useAggregator) {
    console.log('📡 Mode: Tagged Aggregator Feed');
    console.log('━'.repeat(50));
    console.log('   Source: jobs-data-2026');
    console.log('   Filter: employment=entry_level, domains=[all]');

    return await fetchFromAggregator();
  }

  console.log('📡 Mode: ATS + USAJobs (legacy)');

  const allJobs = [];

  // === Part 1: Fetch from API-based companies ===
  // NOTE: Individual company APIs disabled - all data now from aggregator
  // This section kept for potential future use if needed
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
    console.log(`\n📊 API companies total: ${allJobs.length} jobs`);
  } else {
    console.log(`   No API companies configured`);
  }

  // === Part 2: Fetch from ATS platforms (Greenhouse, Lever, Ashby) ===
  console.log('\n📡 Fetching from ATS platforms...');

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
    console.log(`📊 After ATS sources: ${allJobs.length} jobs total`);
  } catch (error) {
    console.error(`❌ ATS sources failed:`, error.message);
  }

  // === Part 3: Fetch from USAJobs API (Federal Government Jobs) ===
  console.log('\n📡 Fetching from USAJobs API...');

  try {
    const usaJobs = await fetchUSAJobs({ maxPages: 4, resultsPerPage: 250 });

    // Normalize USAJobs to match expected format
    const normalizedUSAJobs = usaJobs.map(job => ({
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

    allJobs.push(...normalizedUSAJobs);
    console.log(`📊 After USAJobs: ${allJobs.length} jobs total`);
  } catch (error) {
    console.error(`❌ USAJobs failed:`, error.message);
  }

  // === Part 4: Filter to US-only jobs ===
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

  // === Part 5: Remove duplicates ===
  console.log('\n🔄 Removing duplicates...');

  const uniqueJobs = usJobs.filter((job, index, self) => {
    const jobId = generateJobId(job);
    return index === self.findIndex(j => generateJobId(j) === jobId);
  });

  const duplicatesRemoved = usJobs.length - uniqueJobs.length;
  console.log(`   Duplicates removed: ${duplicatesRemoved}`);

  // === Part 6: Sort by posting date ===
  uniqueJobs.sort((a, b) => {
    const dateA = new Date(a.job_posted_at_datetime_utc || 0);
    const dateB = new Date(b.job_posted_at_datetime_utc || 0);
    return dateB - dateA; // Latest first
  });

  // === Final Summary ===
  console.log('\n' + '━'.repeat(50));
  console.log('✅ Job collection complete!');
  console.log(`📊 Final count: ${uniqueJobs.length} unique jobs`);
  console.log(`📡 Source: ${useAggregator ? 'Aggregator' : 'ATS + USAJobs'}`);
  console.log('━'.repeat(50) + '\n');

  return uniqueJobs;
}

module.exports = {
  fetchAllJobs,
  fetchFromAggregator,
  isAggregatorEnabled: isAggregatorEnabled
};
