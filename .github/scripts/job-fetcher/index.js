#!/usr/bin/env node

/**
 * Main entry point for the job fetcher system - New-Grad-Jobs-2026
 *
 * Fetches all new-grad jobs from centralized aggregator and generates README.
 * Replaced JSearch direct fetch with aggregator consumer (2026-02-18).
 *
 * Pipeline:
 * 1. Fetch all jobs from aggregator (jobs-data-2026/all_jobs.json)
 * 2. Process and filter jobs
 * 3. Generate updated README
 * 4. Save new_jobs.json for write-current-jobs.js
 */

const fs = require('fs');
const path = require('path');
const { createAggregatorConsumer } = require('../shared/lib/aggregator-consumer');
const { updateReadme } = require('./readme-generator');

const dataDir = path.join(process.cwd(), '.github', 'data');

async function main() {
  try {
    console.log('🚀 Starting New Grad jobs fetching system...');
    console.log('═'.repeat(50));

    // Fetch all jobs from aggregator (no domain filter)
    const consumer = createAggregatorConsumer({
      filters: { locations: ['us'] },
      verbose: true
    });

    const jobs = await consumer.fetchJobs();

    if (jobs.length === 0) {
      console.log('⚠️  No jobs fetched from aggregator');
      console.log('   Check that all_jobs.json exists in jobs-data-2026');
    }

    console.log(`\n✅ Fetched ${jobs.length} jobs from aggregator`);

    // Normalize field name: aggregator uses job_posted_at_datetime_utc,
    // readme-generator expects job_posted_at
    const currentJobs = jobs.map(job => ({
      ...job,
      job_posted_at: job.job_posted_at_datetime_utc || job.job_posted_at || null
    }));

    // Build stats for README
    const stats = {
      totalByCompany: {}
    };
    currentJobs.forEach(job => {
      stats.totalByCompany[job.employer_name] =
        (stats.totalByCompany[job.employer_name] || 0) + 1;
    });

    // Save new_jobs.json (consumed by write-current-jobs.js)
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(
      path.join(dataDir, 'new_jobs.json'),
      JSON.stringify(currentJobs, null, 2),
      'utf8'
    );
    console.log(`💾 Saved ${currentJobs.length} jobs to new_jobs.json`);

    // Update README
    await updateReadme(currentJobs, [], null, stats);

    // Print summary
    console.log('\n🎉 Job fetching completed successfully!');
    console.log('═'.repeat(50));
    console.log(`📊 Final Stats:`);
    console.log(`   • Current jobs: ${currentJobs.length}`);
    console.log(`   • Companies: ${Object.keys(stats.totalByCompany).length}`);

  } catch (error) {
    console.error('\n❌ Fatal error:', error.message);
    console.error('Stack trace:', error.stack);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { main };
