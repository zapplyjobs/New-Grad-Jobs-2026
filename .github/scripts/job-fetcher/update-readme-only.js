#!/usr/bin/env node

/**
 * Update README from existing job data (without fetching new jobs)
 *
 * This script regenerates the README.md from existing job data files.
 * Use this when you want to:
 * - Update banners/images/links in the README template
 * - Test readme-generator.js changes
 * - Regenerate README without running the full job fetcher
 *
 * Usage: node .github/scripts/job-fetcher/update-readme-only.js
 */

const fs = require('fs');
const path = require('path');
const { updateReadme } = require('./readme-generator');
const { companies, ALL_COMPANIES } = require('./utils');

async function main() {
    try {
        console.log('🚀 Starting README regeneration...');
        console.log('⚠️ NOTE: Scraping disabled - using existing job data');
        console.log('═'.repeat(50));

        // Paths to data files
        const newJobsPath = path.join(__dirname, '../data/new_jobs.json');
        const postedJobsPath = path.join(__dirname, '../data/posted_jobs.json');

        // Check if new_jobs.json exists
        if (!fs.existsSync(newJobsPath)) {
            console.error('❌ Error: new_jobs.json not found!');
            console.error(`   Expected location: ${newJobsPath}`);
            console.error('   Please run the full job fetcher first to populate job data.');
            console.error('');
            console.error('💡 Creating empty data file as placeholder...');
            fs.mkdirSync(path.dirname(newJobsPath), { recursive: true });
            fs.writeFileSync(newJobsPath, '[]', 'utf8');
            console.log('   ✅ Created empty new_jobs.json');
        }

        // Read existing job data
        console.log('📂 Reading existing job data...');
        const allJobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));

        console.log(`📊 Found ${allJobs.length} jobs in new_jobs.json`);

        // Calculate stats
        const stats = {
            totalByCompany: {},
            byLevel: {},
            byLocation: {},
            byCategory: {}
        };

        allJobs.forEach(job => {
            const company = job.employer_name;
            stats.totalByCompany[company] = (stats.totalByCompany[company] || 0) + 1;
        });

        // Update README (without internship data - simplified version)
        console.log('📝 Generating README.md...');
        await updateReadme(allJobs, [], null, stats);

        console.log('\n✅ README regenerated successfully!');
        console.log('═'.repeat(50));
        console.log('📋 Summary:');
        console.log(`   • Jobs processed: ${allJobs.length}`);
        console.log(`   • Companies: ${Object.keys(stats.totalByCompany).length}`);
        console.log('\n💡 Tip: Commit and push the updated README.md to share changes');

    } catch (error) {
        console.error('\n❌ Error updating README:', error.message);
        console.error(error.stack);
        process.exit(1);
    }
}

// Run the script
main();
