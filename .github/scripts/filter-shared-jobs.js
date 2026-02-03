#!/usr/bin/env node

/**
 * Filter Shared Jobs for New-Grad-Jobs-2026
 *
 * Reads jobs from jobs-data-2026 shared data and filters for:
 * - New grad / entry level only (is_new_grad: true)
 * - Posted within last 7 days
 * - US-based only (is_us_only: true)
 *
 * Output: Written to .github/data/shared-jobs-filtered.jsonl
 */

const fs = require('fs');
const path = require('path');

// Paths
const SHARED_DATA_PATH = path.join(process.cwd(), '.github', 'shared-data', '.github', 'data', 'jobs-shared.json');
const OUTPUT_PATH = path.join(process.cwd(), '.github', 'data', 'shared-jobs-filtered.jsonl');

// Configuration
const MAX_AGE_DAYS = 7; // Only jobs posted within last 7 days

/**
 * Load jobs from shared data file
 * @returns {Array} - Array of job objects
 */
function loadSharedJobs() {
  try {
    if (!fs.existsSync(SHARED_DATA_PATH)) {
      console.warn(`⚠️ Shared data file not found: ${SHARED_DATA_PATH}`);
      return [];
    }

    const content = fs.readFileSync(SHARED_DATA_PATH, 'utf8');
    const lines = content.trim().split('\n').filter(line => line);

    const jobs = lines.map(line => {
      try {
        return JSON.parse(line);
      } catch (error) {
        console.warn(`⚠️ Failed to parse line: ${line.substring(0, 50)}...`);
        return null;
      }
    }).filter(job => job !== null);

    console.log(`📂 Loaded ${jobs.length} jobs from shared data`);
    return jobs;

  } catch (error) {
    console.error(`❌ Error loading shared jobs:`, error.message);
    return [];
  }
}

/**
 * Filter jobs for new grad / entry level
 * @param {Array} jobs - Array of job objects
 * @returns {Array} - Filtered job objects
 */
function filterNewGradJobs(jobs) {
  const now = new Date();
  const cutoffDate = new Date(now.getTime() - (MAX_AGE_DAYS * 24 * 60 * 60 * 1000));

  const filtered = jobs.filter(job => {
    // Must be new grad / entry level
    if (!job.is_new_grad) {
      return false;
    }

    // Must be US-only
    if (!job.is_us_only) {
      return false;
    }

    // Must be within age limit
    const postedDate = new Date(job.posted_at);
    if (postedDate < cutoffDate) {
      return false;
    }

    return true;
  });

  console.log(`🔍 Filtered ${filtered.length} new grad jobs (${jobs.length - filtered.length} excluded)`);
  return filtered;
}

/**
 * Write filtered jobs to output file
 * @param {Array} jobs - Filtered job objects
 */
function writeFilteredJobs(jobs) {
  try {
    const dir = path.dirname(OUTPUT_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    // Convert to JSONL
    const jsonlContent = jobs.map(job => JSON.stringify(job)).join('\n') + '\n';
    fs.writeFileSync(OUTPUT_PATH, jsonlContent, 'utf8');

    console.log(`✅ Wrote ${jobs.length} jobs to ${OUTPUT_PATH}`);
    return true;

  } catch (error) {
    console.error(`❌ Error writing filtered jobs:`, error.message);
    return false;
  }
}

/**
 * Main execution
 */
function main() {
  console.log('🔍 Filter Shared Jobs for New-Grad-Jobs-2026');
  console.log('═'.repeat(60));
  console.log(`Shared data: ${SHARED_DATA_PATH}`);
  console.log(`Output: ${OUTPUT_PATH}`);
  console.log(`Max age: ${MAX_AGE_DAYS} days`);
  console.log('');

  // Load shared jobs
  const sharedJobs = loadSharedJobs();

  if (sharedJobs.length === 0) {
    console.log('ℹ️ No shared jobs found - skipping filter');
    process.exit(0);
  }

  // Filter for new grad jobs
  const filteredJobs = filterNewGradJobs(sharedJobs);

  // Write output
  const success = writeFilteredJobs(filteredJobs);

  if (!success) {
    process.exit(1);
  }

  // Print summary
  console.log('');
  console.log('📊 Filter Summary:');
  console.log(`   Input: ${sharedJobs.length} jobs`);
  console.log(`   Output: ${filteredJobs.length} new grad jobs`);
  console.log(`   Filtered out: ${sharedJobs.length - filteredJobs.length} jobs`);

  // Count by job type
  const newGrad = filteredJobs.filter(j => j.is_new_grad).length;
  const remote = filteredJobs.filter(j => j.is_remote).length;

  console.log(`   New Grad: ${newGrad}`);
  console.log(`   Remote: ${remote}`);

  console.log('');
  console.log('✅ Filter complete!');
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { filterNewGradJobs, loadSharedJobs };
