#!/usr/bin/env node

/**
 * Unified Job Fetcher - Centralized Aggregator Integration
 *
 * This module provides a unified interface for fetching jobs.
 * Post-aggregator migration (2026-02-15), it simply fetches from
 * the centralized jobs-aggregator-private repository.
 *
 * Previous approach (archived):
 * - Fetched from JSearch API + ATS sources directly
 * - Each repo had duplicate fetching logic
 *
 * New approach:
 * - Single centralized aggregator (jobs-aggregator-private)
 * - Repos consume from aggregator
 * - Aggregator handles JSearch + ATS + filtering + deduplication
 */

const { fetchAllJobs: fetchFromAggregator } = require('./job-fetcher/aggregator-consumer');
const { logger } = require('./shared');

/**
 * Fetch all jobs (from centralized aggregator)
 * @returns {Promise<Array>} Array of job objects
 */
async function fetchAllJobs() {
  logger.info('Fetching jobs from centralized aggregator');

  try {
    const jobs = await fetchFromAggregator();

    logger.info('Jobs fetched from aggregator', {
      count: jobs.length,
      source: 'jobs-aggregator-private'
    });

    return jobs;
  } catch (error) {
    logger.error('Failed to fetch from aggregator', {
      error: error.message,
      fallback: 'Returning empty array'
    });

    // Return empty array on failure (don't crash workflow)
    return [];
  }
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
