#!/usr/bin/env node

/**
 * Write current_jobs.json for aggregator consumption
 *
 * Reads new_jobs.json and writes to current_jobs.json
 * This file is consumed by the aggregator Discord poster
 */

const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), '.github', 'data');
const newJobsPath = path.join(dataDir, 'new_jobs.json');
const outputPath = path.join(dataDir, 'current_jobs.json');

try {
  // Check if new_jobs.json exists
  if (!fs.existsSync(newJobsPath)) {
    console.log('⚠️ No new_jobs.json found, skipping');
    process.exit(0);
  }

  // Read new_jobs.json
  const jobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));

  // Write to current_jobs.json
  fs.writeFileSync(outputPath, JSON.stringify(jobs, null, 2), 'utf8');

  console.log(`✅ Wrote ${jobs.length} jobs to current_jobs.json`);
  console.log(`   Location: ${outputPath}`);

  // Print sample job
  if (jobs.length > 0) {
    console.log(`   Sample: ${jobs[0].job_title} @ ${jobs[0].employer_name}`);
  }

} catch (error) {
  console.error('❌ Error writing current_jobs.json:', error.message);
  console.error('   Stack trace:', error.stack);
  process.exit(1);
}
