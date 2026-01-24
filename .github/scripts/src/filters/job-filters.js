#!/usr/bin/env node

/**
 * Job Filtering Utilities
 *
 * Extracted from enhanced-discord-bot.js (lines 466-550)
 * Handles blacklist filtering, deduplication, and data quality checks
 */

const { generateJobId } = require('../../job-fetcher/utils');

/**
 * Job blacklist - manually curated list of jobs to skip
 * Format: { title: 'substring', company: 'substring' }
 */
const JOB_BLACKLIST = [
  // Non-entry level roles disguised as entry level
  { title: 'principal', company: '' },
  { title: 'senior', company: '' },
  { title: 'lead', company: '' },
  { title: 'manager', company: '' },
  { title: 'director', company: '' },
  { title: 'staff', company: '' }, // Staff engineer = mid/senior level

  // Academic/research roles (not new grad)
  { title: 'postdoc', company: '' },
  { title: 'postdoctoral', company: '' },
  { title: 'post-doctoral', company: '' },
  { title: 'phd required', company: '' },
  { title: 'doctoral degree required', company: '' },

  // Specific problematic postings
  { title: 'agentic ai teacher', company: 'amazon' } // All variations including "- Agi Ds"
];

/**
 * Check if job matches blacklist
 * @param {Object} job - Job object
 * @returns {boolean} - True if job is blacklisted
 */
function isBlacklisted(job) {
  const titleLower = (job.job_title || job.title || '').toLowerCase();
  const companyLower = (job.employer_name || job.company || '').toLowerCase();

  return JOB_BLACKLIST.some(blacklisted => {
    // Match if both conditions are true (or company is empty = any company)
    const titleMatch = titleLower.includes(blacklisted.title);
    const companyMatch = !blacklisted.company || companyLower.includes(blacklisted.company);
    return titleMatch && companyMatch;
  });
}

/**
 * Filter jobs by blacklist
 * @param {Array} jobs - Array of job objects
 * @param {Function} onBlacklisted - Optional callback for blacklisted jobs
 * @returns {Object} - { filtered, blacklisted }
 */
function filterBlacklisted(jobs, onBlacklisted = null) {
  const filtered = [];
  const blacklisted = [];

  for (const job of jobs) {
    if (isBlacklisted(job)) {
      blacklisted.push(job);
      if (onBlacklisted) {
        onBlacklisted(job);
      }
    } else {
      filtered.push(job);
    }
  }

  return { filtered, blacklisted };
}

/**
 * Filter jobs by data quality (required fields)
 * @param {Array} jobs - Array of job objects
 * @param {Array} requiredFields - Required field names
 * @returns {Object} - { valid, invalid }
 */
function filterByDataQuality(jobs, requiredFields = ['job_title', 'employer_name', 'url']) {
  const valid = [];
  const invalid = [];

  for (const job of jobs) {
    const missingFields = requiredFields.filter(field => {
      const value = job[field];
      return !value || (typeof value === 'string' && value.trim() === '');
    });

    if (missingFields.length > 0) {
      invalid.push({ job, missingFields });
    } else {
      valid.push(job);
    }
  }

  return { valid, invalid };
}

/**
 * Filter for enriched jobs in queue
 * @param {Array} queue - Pending queue array
 * @returns {Array} - Jobs with enrichment_status: 'enriched'
 */
function filterEnriched(queue) {
  return queue
    .filter(item => item.enrichment_status === 'enriched')
    .map(item => item.job);
}

/**
 * Filter for jobs not yet posted
 * @param {Array} jobs - Job objects
 * @param {Object} postedJobsManager - PostedJobsManager instance
 * @returns {Array} - Jobs not in posted_jobs.json
 */
function filterUnposted(jobs, postedJobsManager) {
  return jobs.filter(job => {
    const jobId = generateJobId(job);
    return !postedJobsManager.hasJob(jobId);
  });
}

/**
 * Detect content duplicates (same title + company, different URLs)
 * @param {Array} jobs - Array of job objects
 * @returns {Object} - { unique, duplicateGroups }
 */
function detectContentDuplicates(jobs) {
  const seen = new Map(); // key: "title|company", value: [job1, job2, ...]
  const duplicateGroups = [];

  for (const job of jobs) {
    const title = (job.job_title || job.title || '').trim().toLowerCase();
    const company = (job.employer_name || job.company || '').trim().toLowerCase();
    const key = `${title}|${company}`;

    if (!seen.has(key)) {
      seen.set(key, [job]);
    } else {
      seen.get(key).push(job);
    }
  }

  // Extract duplicate groups (groups with >1 job)
  for (const [key, group] of seen.entries()) {
    if (group.length > 1) {
      duplicateGroups.push({
        title: group[0].job_title || group[0].title,
        company: group[0].employer_name || group[0].company,
        count: group.length,
        jobs: group
      });
    }
  }

  // Unique jobs: keep first occurrence of each group
  const unique = Array.from(seen.values()).map(group => group[0]);

  return {
    unique,
    duplicateGroups,
    duplicateCount: jobs.length - unique.length
  };
}

/**
 * Remove duplicates, keeping first occurrence
 * @param {Array} jobs - Array of job objects
 * @param {Function} keyFn - Function to generate unique key (default: generateJobId)
 * @returns {Array} - Deduplicated jobs
 */
function removeDuplicates(jobs, keyFn = null) {
  const seen = new Set();
  const unique = [];

  const getKey = keyFn || ((job) => generateJobId(job));

  for (const job of jobs) {
    const key = getKey(job);
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(job);
    }
  }

  return unique;
}

module.exports = {
  JOB_BLACKLIST,
  isBlacklisted,
  filterBlacklisted,
  filterByDataQuality,
  filterEnriched,
  filterUnposted,
  detectContentDuplicates,
  removeDuplicates
};
