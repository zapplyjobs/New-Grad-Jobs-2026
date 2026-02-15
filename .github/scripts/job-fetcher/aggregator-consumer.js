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
const { logger, withRetry } = require('../shared');

// Aggregator URLs (PRIVATE repo - requires authentication)
const AGGREGATOR_URL = 'https://raw.githubusercontent.com/zapplyjobs/jobs-aggregator-private/main/.github/data/all_jobs.json';
const METADATA_URL = 'https://raw.githubusercontent.com/zapplyjobs/jobs-aggregator-private/main/.github/data/jobs-metadata.json';

/**
 * Fetch JSONL file from aggregator
 * @returns {Promise<Array>} - Array of job objects
 */
async function fetchJobsFromAggregator() {
  return withRetry(
    () => new Promise((resolve, reject) => {
      // Get GitHub token for authentication (private repo access)
      const token = process.env.GITHUB_TOKEN || process.env.GH_PAT;

      const options = {
        headers: token ? { 'Authorization': `token ${token}` } : {}
      };

      https.get(AGGREGATOR_URL, options, (res) => {
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
                logger.warn('Failed to parse aggregator line - skipping', {
                  line_preview: line.substring(0, 50)
                });
                return null;
              }
            }).filter(job => job !== null);

            resolve(jobs);
          } catch (error) {
            reject(new Error(`Failed to parse aggregator JSONL: ${error.message}`));
          }
        });
      }).on('error', reject);
    }),
    'Fetch aggregator JSONL',
    { maxRetries: 3, initialDelayMs: 1000, backoffMultiplier: 2 }
  );
}

/**
 * Filter jobs for entry-level/new-grad positions across all domains
 * @param {Array} jobs - Array of tagged jobs from aggregator
 * @returns {Array} - Filtered entry-level jobs
 *
 * NOTE: According to centralized aggregator architecture (2026-02-15),
 * New-Grad-Jobs-2026 accepts ALL jobs from aggregator (multi-category hub).
 * The aggregator already filters out senior-level jobs, so we accept everything.
 */
function filterNewGradJobs(jobs) {
  if (!Array.isArray(jobs)) {
    logger.warn('filterNewGradJobs: jobs is not an array');
    return [];
  }

  // Accept ALL jobs from aggregator (it already filtered senior-level)
  // Keep basic validation to skip malformed jobs
  return jobs.filter(job => {
    // Must have basic required fields
    if (!job.id || !job.title || !job.company_name || !job.url) {
      logger.warn('Skipping job with missing required fields', {
        id: job.id,
        title: job.title,
        company: job.company_name
      });
      return false;
    }

    return true;
  });
}

/**
 * Convert aggregator job format to New-Grad-Jobs-2026 format
 */
function convertJobFormat(aggregatorJob) {
  // Extract location from aggregator's location object
  const location = aggregatorJob.location || {};
  const jobCity = location.city || aggregatorJob.job_city || '';
  const jobState = location.state || location.region || '';
  const jobCountry = location.country || 'US';

  return {
    job_id: aggregatorJob.id,
    job_title: aggregatorJob.title,
    employer_name: aggregatorJob.company_name,
    job_city: jobCity,
    job_state: jobState,
    job_country: jobCountry,
    job_description: aggregatorJob.description || '',
    job_apply_link: aggregatorJob.apply_url || aggregatorJob.url || '',
    job_posted_at_datetime_utc: aggregatorJob.posted_at || new Date().toISOString(),
    job_employment_type: aggregatorJob.employment_types?.[0] || 'FULLTIME',
    job_source: aggregatorJob.source || 'aggregator',
    fingerprint: aggregatorJob.fingerprint,
    tags: aggregatorJob.tags
  };
}

/**
 * Main execution function
 */
async function fetchAllJobs() {
  const startTime = Date.now();

  logger.start('Aggregator fetch for New-Grad-Jobs-2026');

  try {
    // Fetch from aggregator
    logger.info('Fetching from jobs-data-2026 aggregator', { url: AGGREGATOR_URL });
    const allJobs = await fetchJobsFromAggregator();

    logger.info('Aggregator response received', {
      total_jobs: allJobs.length,
      source: AGGREGATOR_URL
    });

    // Filter for entry-level/new-grad
    logger.info('Filtering for entry-level/new-grad positions');
    const newGradJobs = filterNewGradJobs(allJobs);

    logger.info('Entry-level filter complete', { filtered_count: newGradJobs.length });

    // Print domain breakdown
    const domainCounts = {};
    newGradJobs.forEach(job => {
      if (job.tags && job.tags.domains && Array.isArray(job.tags.domains)) {
        job.tags.domains.forEach(domain => {
          domainCounts[domain] = (domainCounts[domain] || 0) + 1;
        });
      }
    });

    if (Object.keys(domainCounts).length > 0) {
      logger.info('Domain breakdown', domainCounts);
    }

    // Convert to New-Grad-Jobs-2026 format
    logger.info('Converting to New-Grad-Jobs-2026 format');
    const convertedJobs = newGradJobs.map(convertJobFormat);

    // Remove duplicates (by job_id)
    logger.info('Removing duplicates by job_id');
    const uniqueJobs = [];
    const seenIds = new Set();

    convertedJobs.forEach(job => {
      if (job.job_id && !seenIds.has(job.job_id)) {
        seenIds.add(job.job_id);
        uniqueJobs.push(job);
      }
    });

    const duplicatesRemoved = convertedJobs.length - uniqueJobs.length;
    logger.info('Deduplication complete', {
      original: convertedJobs.length,
      unique: uniqueJobs.length,
      duplicates_removed: duplicatesRemoved
    });

    // Sort by posting date
    uniqueJobs.sort((a, b) => {
      const dateA = new Date(a.job_posted_at_datetime_utc);
      const dateB = new Date(b.job_posted_at_datetime_utc);
      return dateB - dateA;
    });

    // Final summary
    const duration = Date.now() - startTime;
    logger.complete('Aggregator fetch complete', {
      unique_jobs: uniqueJobs.length,
      duration_seconds: (duration / 1000).toFixed(1)
    });

    return uniqueJobs;

  } catch (error) {
    logger.error('Error fetching from aggregator', {
      error: error.message,
      url: AGGREGATOR_URL
    });

    // If aggregator fails, fall back to empty array (don't crash)
    // The workflow will show 0 jobs and alert the team
    logger.warn('Returning empty job array due to aggregator error', {
      fallback_url: 'https://github.com/zapplyjobs/jobs-data-2026'
    });

    return [];
  }
}

// Export main function
module.exports = { fetchAllJobs, fetchJobsFromAggregator };

// Run the script if called directly
if (require.main === module) {
  fetchAllJobs()
    .then(jobs => {
      logger.info('Test Results', { fetched: jobs.length });
      logger.info('First 3 jobs:', {
        jobs: jobs.slice(0, 3).map(j => ({
          title: j.job_title,
          company: j.employer_name
        }))
      });
      process.exit(0);
    })
    .catch(error => {
      logger.error('Aggregator test failed', { error: error.message });
      process.exit(1);
    });
}
