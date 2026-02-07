#!/usr/bin/env node

/**
 * Write current_jobs.json for aggregator consumption
 *
 * Merges new_jobs.json (NEW jobs) with posted_jobs.json (ACTIVE jobs)
 * This file is consumed by the aggregator Discord poster
 *
 * Active window: 14 days (matches database retention)
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), '.github', 'data');
const newJobsPath = path.join(dataDir, 'new_jobs.json');
const postedJobsPath = path.join(dataDir, 'posted_jobs.json');
const outputPath = path.join(dataDir, 'current_jobs.json');

// Active window: 14 days (matches posted_jobs database retention)
const ACTIVE_WINDOW_DAYS = 14;
const ACTIVE_WINDOW_MS = ACTIVE_WINDOW_DAYS * 24 * 60 * 60 * 1000;

/**
 * Check if a job is within the active window
 */
function isJobActive(job) {
  const postedDate = new Date(job.postedAt || job.posted_to_discord || job.sourceDate || job.job_posted_at_datetime_utc);
  const now = new Date();
  const ageMs = now - postedDate;
  return ageMs < ACTIVE_WINDOW_MS;
}

/**
 * Generate URL-based fingerprint for deduplication
 */
function generateJobFingerprint(job) {
  const crypto = require('crypto');
  const url = job.url || job.job_apply_link || job.sourceUrl || '';
  const title = (job.title || job.job_title || '').toLowerCase().trim();
  const company = (job.company_name || job.company || job.employer_name || '').toLowerCase().trim();

  const fingerprintData = `${url}|${title}|${company}`;
  return crypto.createHash('sha256').update(fingerprintData).digest('hex');
}

/**
 * Convert posted_jobs format to new_jobs format
 */
function convertPostedJobToNewJobFormat(postedJob) {
  return {
    job_title: postedJob.title || postedJob.job_title,
    employer_name: postedJob.company || postedJob.employer_name,
    job_city: postedJob.job_city || '',
    job_state: postedJob.job_state || '',
    job_apply_link: postedJob.sourceUrl || postedJob.job_apply_link || postedJob.url,
    job_posted_at_datetime_utc: postedJob.sourceDate || postedJob.postedAt,
    job_description: postedJob.job_description || '',
    id: postedJob.jobId || postedJob.id,
    // Add metadata to track source
    _source: 'posted_jobs',
    _postedAt: postedJob.postedAt
  };
}

try {
  const allJobs = [];
  const fingerprints = new Set();

  // 1. Add new jobs (highest priority - freshest data)
  if (fs.existsSync(newJobsPath)) {
    const newJobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));
    console.log(`📥 Found ${newJobs.length} new jobs`);

    for (const job of newJobs) {
      const fingerprint = generateJobFingerprint(job);
      if (!fingerprints.has(fingerprint) && isJobActive(job)) {
        fingerprints.add(fingerprint);
        job._source = 'new_jobs';
        allJobs.push(job);
      }
    }
  } else {
    console.log('⚠️  No new_jobs.json found');
  }

  // 2. Add posted jobs (backfill for jobs not in new fetch)
  if (fs.existsSync(postedJobsPath)) {
    const postedJobsData = JSON.parse(fs.readFileSync(postedJobsPath, 'utf8'));
    const postedJobs = postedJobsData.jobs || [];
    console.log(`📋 Found ${postedJobs.length} posted jobs`);

    for (const postedJob of postedJobs) {
      const fingerprint = generateJobFingerprint(postedJob);

      // Skip if already in new jobs (avoid duplicates)
      if (fingerprints.has(fingerprint)) {
        continue;
      }

      // Convert format and check if active
      const convertedJob = convertPostedJobToNewJobFormat(postedJob);
      if (isJobActive(convertedJob)) {
        fingerprints.add(fingerprint);
        allJobs.push(convertedJob);
      }
    }
  } else {
    console.log('⚠️  No posted_jobs.json found');
  }

  // 3. Write merged output
  fs.writeFileSync(outputPath, JSON.stringify(allJobs, null, 2), 'utf8');

  console.log(`✅ Wrote ${allJobs.length} total jobs to current_jobs.json`);
  console.log(`   Location: ${outputPath}`);
  console.log(`   Active window: ${ACTIVE_WINDOW_DAYS} days`);

  // Print sample job
  if (allJobs.length > 0) {
    console.log(`   Sample: ${allJobs[0].job_title} @ ${allJobs[0].employer_name}`);
  }

  // Breakdown by source
  const bySource = allJobs.reduce((acc, job) => {
    acc[job._source] = (acc[job._source] || 0) + 1;
    return acc;
  }, {});
  console.log(`   Breakdown: ${JSON.stringify(bySource)}`);

} catch (error) {
  console.error('❌ Error writing current_jobs.json:', error.message);
  console.error('   Stack trace:', error.stack);
  process.exit(1);
}
