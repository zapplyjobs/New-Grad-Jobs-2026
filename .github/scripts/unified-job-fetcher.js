#!/usr/bin/env node

/**
 * Unified Job Fetcher - New-Grad-Jobs-2026
 *
 * Wrapper around shared aggregator-consumer library.
 * Fetches ALL entry-level jobs from centralized aggregator.
 *
 * Architecture:
 * - Uses shared library: .github/scripts/shared/lib/aggregator-consumer.js
 * - No filters applied (accepts all entry-level jobs from aggregator)
 * - Aggregator already filtered out senior-level positions
 */

const { createAggregatorConsumer } = require('./shared/lib/aggregator-consumer');

/**
 * Fetch all entry-level jobs (from centralized aggregator)
 * @returns {Promise<Array>} Array of job objects
 */
async function fetchAllJobs() {
  // Create consumer with NO filters (accept all jobs from aggregator)
  const consumer = createAggregatorConsumer({
    filters: {}, // No filters - New-Grad accepts ALL entry-level jobs
    verbose: true
  });

  return await consumer.fetchJobs();
}

module.exports = { fetchAllJobs };

// Run the script if called directly (for testing)
if (require.main === module) {
  fetchAllJobs()
    .then(jobs => {
      console.log(`\n✅ Fetched ${jobs.length} jobs from aggregator`);
      console.log('\n📊 First 3 jobs:');
      jobs.slice(0, 3).forEach((job, i) => {
        console.log(`${i + 1}. ${job.job_title} @ ${job.employer_name}`);
      });
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Test failed:', error.message);
      process.exit(1);
    });
}
