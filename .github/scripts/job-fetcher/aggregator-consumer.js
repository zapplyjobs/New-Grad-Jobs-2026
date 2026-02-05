#!/usr/bin/env node

/**
 * Aggregator Consumer - Fetch entry-level/new-grad jobs from jobs-data-2026 tagged feed
 *
 * This module fetches jobs from the centralized aggregator and filters
 * for entry-level positions across all domains.
 *
 * Feature flag: USE_AGGREGATOR=true (in workflow or environment)
 */

const https = require('https');

// Aggregator URLs
const AGGREGATOR_URL = 'https://raw.githubusercontent.com/zapplyjobs/jobs-data-2026/main/.github/data/jobs-shared.json';
const METADATA_URL = 'https://raw.githubusercontent.com/zapplyjobs/jobs-data-2026/main/.github/data/jobs-metadata.json';

/**
 * Fetch JSONL file from aggregator
 * @returns {Promise<Array>} - Array of job objects
 */
async function fetchJobsFromAggregator() {
  return new Promise((resolve, reject) => {
    https.get(AGGREGATOR_URL, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }

      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          // Parse JSONL (one JSON per line)
          const lines = data.trim().split('\n').filter(line => line);
          const jobs = lines.map(line => {
            try {
              return JSON.parse(line);
            } catch (error) {
              console.warn('⚠️ Failed to parse line:', line.substring(0, 50));
              return null;
            }
          }).filter(job => job !== null);

          resolve(jobs);
        } catch (error) {
          reject(new Error(`Failed to parse jobs: ${error.message}`));
        }
      });
    }).on('error', reject);
  });
}

/**
 * Filter jobs for entry-level/new-grad positions across all domains
 * @param {Array} jobs - Array of tagged jobs from aggregator
 * @returns {Array} - Filtered entry-level jobs
 */
function filterNewGradJobs(jobs) {
  if (!Array.isArray(jobs)) {
    console.warn('filterNewGradJobs: jobs is not an array');
    return [];
  }

  return jobs.filter(job => {
    // Skip jobs without tags
    if (!job.tags) {
      return false;
    }

    // Accept BOTH internships AND entry_level jobs (NOT senior/mid-level)
    const validEmployment = ['internship', 'entry_level', 'no_experience', '3_plus_years'];
    if (!job.tags.employment || !validEmployment.includes(job.tags.employment)) {
      return false;
    }

    // Must have at least one domain tag
    if (!job.tags.domains || !Array.isArray(job.tags.domains) || job.tags.domains.length === 0) {
      return false;
    }

    return true;
  });
}

/**
 * Convert aggregator job format to New-Grad-Jobs-2026 format
 * @param {Object} aggregatorJob - Job from aggregator
 * @returns {Object} - Job in New-Grad-Jobs-2026 format
 */
function convertJobFormat(aggregatorJob) {
  // Map aggregator fields to existing format
  return {
    // Core fields (existing format)
    job_id: aggregatorJob.id,
    job_title: aggregatorJob.title,
    employer_name: aggregatorJob.company,
    job_city: aggregatorJob.location?.split(', ')[0] || '',
    job_state: aggregatorJob.location?.split(', ')[1] || '',
    job_country: aggregatorJob.tags?.locations?.includes('us') ? 'United States' : 'Unknown',
    job_is_remote: aggregatorJob.is_remote || false,
    job_apply_link: aggregatorJob.url,
    job_posted_at_datetime_utc: aggregatorJob.posted_at,
    job_description: aggregatorJob.description || null,
    job_employment_type: aggregatorJob.employment_types?.join(',') || 'INTERN',

    // Tags from aggregator (for reference)
    _tags: aggregatorJob.tags,

    // Source info
    _source: 'aggregator',
    _original_source: aggregatorJob.source || 'jsearch'
  };
}

/**
 * Fetch jobs from aggregator for New-Grad-Jobs-2026
 * @returns {Promise<Array>} - Array of entry-level/new-grad jobs
 */
async function fetchAllJobs() {
  const startTime = Date.now();

  console.log('🚀 Starting aggregator fetch for New-Grad-Jobs-2026...');
  console.log('━'.repeat(60));

  try {
    // Fetch from aggregator
    console.log('\n📡 Fetching from jobs-data-2026 aggregator...');
    const allJobs = await fetchJobsFromAggregator();

    console.log(`✅ Aggregator returned: ${allJobs.length} total jobs`);
    console.log(`   Source: ${AGGREGATOR_URL}`);

    // Filter for entry-level/new-grad
    console.log('\n🏷️  Filtering for entry-level/new-grad positions...');
    const newGradJobs = filterNewGradJobs(allJobs);

    console.log(`✅ Entry-level filter: ${newGradJobs.length} jobs`);

    // Print domain breakdown
    const domainCounts = {};
    for (const job of newGradJobs) {
      if (job.tags?.domains) {
        for (const domain of job.tags.domains) {
          domainCounts[domain] = (domainCounts[domain] || 0) + 1;
        }
      }
    }

    console.log('\n📊 Domain breakdown:');
    for (const [domain, count] of Object.entries(domainCounts)) {
      console.log(`   ${domain}: ${count}`);
    }

    // Convert to New-Grad-Jobs-2026 format
    console.log('\n🔄 Converting to New-Grad-Jobs-2026 format...');
    const convertedJobs = newGradJobs.map(convertJobFormat);

    // Remove duplicates (by job_id)
    console.log('\n🔄 Removing duplicates...');
    const uniqueJobs = [];
    const seenIds = new Set();

    for (const job of convertedJobs) {
      if (!seenIds.has(job.job_id)) {
        seenIds.add(job.job_id);
        uniqueJobs.push(job);
      }
    }

    const duplicatesRemoved = convertedJobs.length - uniqueJobs.length;
    console.log(`   Duplicates removed: ${duplicatesRemoved}`);

    // Sort by posting date
    uniqueJobs.sort((a, b) => {
      const dateA = new Date(a.job_posted_at_datetime_utc || 0);
      const dateB = new Date(b.job_posted_at_datetime_utc || 0);
      return dateB - dateA; // Latest first
    });

    // Final summary
    const duration = Date.now() - startTime;
    console.log('\n' + '━'.repeat(60));
    console.log('✅ Aggregator fetch complete!');
    console.log(`📊 Final count: ${uniqueJobs.length} unique entry-level jobs`);
    console.log(`⏱️  Duration: ${(duration / 1000).toFixed(1)}s`);
    console.log('━'.repeat(60) + '\n');

    return uniqueJobs;

  } catch (error) {
    console.error('\n❌ Error fetching from aggregator:', error.message);

    // If aggregator fails, fall back to empty array (don't crash)
    // The workflow will show 0 jobs and alert the team
    console.log('\n⚠️  Returning empty job array');
    console.log('⚠️  Check aggregator status: https://github.com/zapplyjobs/jobs-data-2026');

    return [];
  }
}

/**
 * Check if aggregator consumer is enabled
 * @returns {boolean} - True if USE_AGGREGATOR env var is 'true' or '1'
 */
function isAggregatorEnabled() {
  const flag = process.env.USE_AGGREGATOR;
  return flag === 'true' || flag === '1';
}

module.exports = {
  fetchAllJobs,
  fetchJobsFromAggregator,
  filterNewGradJobs,
  convertJobFormat,
  isAggregatorEnabled,
  AGGREGATOR_URL
};

// Allow running directly for testing
if (require.main === module) {
  fetchAllJobs()
    .then(jobs => {
      console.log('\n📊 Test Results:');
      console.log(`Fetched: ${jobs.length} jobs`);
      console.log('\nFirst 3 jobs:');
      jobs.slice(0, 3).forEach(job => {
        console.log(`  - ${job.job_title} at ${job.employer_name}`);
        console.log(`    Tags:`, job._tags);
      });
      process.exit(0);
    })
    .catch(error => {
      console.error('Error:', error);
      process.exit(1);
    });
}
