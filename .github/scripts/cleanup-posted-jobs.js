#!/usr/bin/env node

/**
 * Posted Jobs Database Cleanup Script
 *
 * ⚠️ WARNING: This script's matching logic is currently too broad and may not work as intended.
 * ⚠️ It is provided as a starting point but requires refinement before production use.
 * ⚠️ The bot already auto-maintains the 5000 entry limit, so manual cleanup is rarely needed.
 *
 * Purpose: Free up space in the posted_jobs.json database by removing old entries
 *
 * Strategy:
 * 1. Keep jobs that are currently in README (active jobs)
 * 2. Remove jobs not in README that are using legacy ID format
 * 3. This frees space for new URL-based IDs while preventing re-posting of active jobs
 *
 * Safety:
 * - Creates backup before making changes
 * - Dry-run mode available
 * - Shows detailed preview before commit
 *
 * Note: Bot automatically removes oldest entries when saving new jobs (maintains 5000 max).
 * Manual cleanup only needed for: database corruption, duplicate removal, or intentional reset.
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const force = args.includes('--force');

console.log('╔═══════════════════════════════════════════════════════════════╗');
console.log('║          POSTED JOBS DATABASE CLEANUP UTILITY                 ║');
console.log('╚═══════════════════════════════════════════════════════════════╝\n');

if (isDryRun) {
  console.log('🔍 DRY RUN MODE - No changes will be made\n');
}

// ============================================================================
// 1. LOAD DATA
// ============================================================================
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('1. LOADING DATA');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

const dataDir = path.join(process.cwd(), '.github', 'data');
const postedJobsPath = path.join(dataDir, 'posted_jobs.json');

// Load posted jobs
const posted = JSON.parse(fs.readFileSync(postedJobsPath, 'utf8'));
console.log(`   ✅ Loaded posted_jobs.json: ${posted.length} entries\n`);

// Load utils for ID generation
const { generateJobId, generateEnhancedId } = require('./job-fetcher/utils');

// Parse README to get active job IDs
console.log('   📄 Parsing README to identify active jobs...');
const readme = fs.readFileSync('README.md', 'utf8');
const jobLines = readme.split('\n').filter(line => line.match(/^\|[^|]+\|[^|]+\|[^|]+\|/));

// Extract job details from README
const activeJobs = [];
jobLines.slice(1).forEach(line => {
  const cols = line.split('|').map(c => c.trim()).filter(c => c);

  if (cols.length >= 3) {
    // Extract company (remove emoji and asterisks)
    const company = cols[0].replace(/[🟢🔵🟦📦🍎🎬⚡🎮💳🏢✨]/g, '').replace(/\*\*/g, '').trim();

    // Extract title
    const title = cols[1];

    // Extract location (before the "ago" timestamp)
    let location = cols[2];
    if (cols[2].includes('|')) {
      location = cols[2].split('|')[0].trim();
    }

    // Extract URL from Apply link
    const urlMatch = line.match(/\[Apply\]\((https?:\/\/[^\)]+)\)/);
    const url = urlMatch ? urlMatch[1] : '';

    activeJobs.push({
      company,
      title,
      location,
      url,
      // Generate possible ID variations
      legacyId: null // Will be calculated if needed
    });
  }
});

console.log(`   ✅ Found ${activeJobs.length} active jobs in README\n`);

// ============================================================================
// 2. ANALYZE DATABASE
// ============================================================================
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('2. ANALYZING DATABASE');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

// Generate legacy IDs for active jobs
const activeJobIds = new Set();
activeJobs.forEach(job => {
  // Generate legacy ID format: company-title-city
  const company = job.company.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const title = job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');

  // Try to extract city from location
  let city = job.location.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  if (city.includes('remote')) city = 'remote';

  const legacyId = `${company}-${title}-${city}`.replace(/--+/g, '-').replace(/^-|-$/g, '');
  activeJobIds.add(legacyId);

  // Also add URL-based ID if we have the URL
  if (job.url) {
    try {
      const urlObj = new URL(job.url);
      const urlId = (urlObj.hostname + urlObj.pathname)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/--+/g, '-')
        .replace(/^-|-$/g, '');
      activeJobIds.add(urlId);
    } catch (e) {
      // Invalid URL, skip
    }
  }
});

console.log(`   Generated ${activeJobIds.size} unique ID variations for active jobs\n`);

// Categorize posted jobs
const toKeep = [];
const toRemove = [];

posted.forEach(id => {
  // Check if this ID matches any active job
  let isActive = false;

  // Direct match
  if (activeJobIds.has(id)) {
    isActive = true;
  } else {
    // Partial match check (for slight variations)
    for (const activeId of activeJobIds) {
      if (id.includes(activeId) || activeId.includes(id)) {
        isActive = true;
        break;
      }
    }
  }

  if (isActive) {
    toKeep.push(id);
  } else {
    toRemove.push(id);
  }
});

console.log(`   📊 Analysis Results:`);
console.log(`   ├─ To keep:   ${toKeep.length} (active in README)`);
console.log(`   ├─ To remove: ${toRemove.length} (not in README)`);
console.log(`   └─ Space freed: ${((toRemove.length / 5000) * 100).toFixed(1)}%\n`);

// ============================================================================
// 3. SHOW PREVIEW
// ============================================================================
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('3. CLEANUP PREVIEW');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (toRemove.length > 0) {
  console.log(`   Sample of jobs to be removed (first 20):\n`);
  toRemove.slice(0, 20).forEach((id, index) => {
    console.log(`   ${(index + 1).toString().padStart(2)}. ${id}`);
  });

  if (toRemove.length > 20) {
    console.log(`   ... and ${toRemove.length - 20} more\n`);
  }
} else {
  console.log(`   ✅ No jobs to remove - database is clean!\n`);
}

// ============================================================================
// 4. EXECUTE CLEANUP
// ============================================================================
if (toRemove.length > 0 && !isDryRun) {
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('4. EXECUTING CLEANUP');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

  if (!force) {
    console.log('   ⚠️  This will permanently remove ' + toRemove.length + ' entries from the database.');
    console.log('   ⚠️  Run with --dry-run first to preview changes.');
    console.log('   ⚠️  Use --force to proceed with cleanup.\n');
    process.exit(0);
  }

  // Create backup
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupPath = path.join(dataDir, `posted_jobs.backup-${timestamp}.json`);

  console.log(`   💾 Creating backup: ${path.basename(backupPath)}`);
  fs.writeFileSync(backupPath, JSON.stringify(posted, null, 2));
  console.log(`   ✅ Backup created\n`);

  // Write cleaned database
  console.log(`   🔧 Writing cleaned database...`);
  const cleanedDb = toKeep.sort();
  fs.writeFileSync(postedJobsPath, JSON.stringify(cleanedDb, null, 2));
  console.log(`   ✅ Database updated\n`);

  // Show results
  const originalSize = fs.statSync(backupPath).size;
  const newSize = fs.statSync(postedJobsPath).size;

  console.log(`   📊 Cleanup Results:`);
  console.log(`   ├─ Removed:      ${toRemove.length} entries`);
  console.log(`   ├─ Remaining:    ${cleanedDb.length} entries`);
  console.log(`   ├─ Capacity:     ${((cleanedDb.length / 5000) * 100).toFixed(1)}% (was 100.0%)`);
  console.log(`   ├─ Space freed:  ${((originalSize - newSize) / 1024).toFixed(1)} KB`);
  console.log(`   └─ Backup saved: ${path.basename(backupPath)}\n`);
}

// ============================================================================
// SUMMARY
// ============================================================================
console.log('╔═══════════════════════════════════════════════════════════════╗');
console.log('║                      CLEANUP COMPLETE                         ║');
console.log('╚═══════════════════════════════════════════════════════════════╝\n');

if (isDryRun) {
  console.log('📋 Next Steps:');
  console.log('   1. Review the preview above');
  console.log('   2. Run without --dry-run and with --force to execute cleanup:');
  console.log('      node .github/scripts/cleanup-posted-jobs.js --force');
  console.log('   3. Monitor next workflow run to ensure jobs post correctly\n');
} else if (!force) {
  console.log('📋 To proceed with cleanup:');
  console.log('   node .github/scripts/cleanup-posted-jobs.js --force\n');
} else {
  console.log('✅ Database cleanup complete!');
  console.log('📋 Next steps:');
  console.log('   1. Commit the changes: git add .github/data/posted_jobs.json');
  console.log('   2. Push to trigger workflow');
  console.log('   3. Monitor Discord channels for new job postings\n');
}
