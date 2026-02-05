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

        // Paths to data files (go up two levels from job-fetcher/ to .github/)
        const newJobsPath = path.join(__dirname, '../../data/new_jobs.json');
        const postedJobsPath = path.join(__dirname, '../../data/posted_jobs.json');

        // Check if posted_jobs.json exists (primary data source - contains ALL stored jobs)
        if (!fs.existsSync(postedJobsPath)) {
            console.error('❌ Error: posted_jobs.json not found!');
            console.error(`   Expected location: ${postedJobsPath}`);
            console.error('   Please run the full job fetcher first to populate job data.');
            console.error('');
            console.error('💡 Creating empty data file as placeholder...');
            fs.mkdirSync(path.dirname(postedJobsPath), { recursive: true });
            fs.writeFileSync(postedJobsPath, JSON.stringify({ version: 2, lastUpdated: new Date().toISOString(), jobs: [] }, null, 2), 'utf8');
            console.log('   ✅ Created empty posted_jobs.json');
        }

        // Read existing job data from posted_jobs.json (contains ALL stored jobs)
        console.log('📂 Reading existing job data from posted_jobs.json...');
        const postedJobsData = JSON.parse(fs.readFileSync(postedJobsPath, 'utf8'));

        // Convert posted_jobs format to readme-generator format
        const allJobs = postedJobsData.jobs.map(job => ({
            job_title: job.title,
            employer_name: job.company,
            job_city: job.job_city,
            job_state: job.job_state,
            job_country: job.job_country,
            job_apply_link: job.sourceUrl,
            job_posted_at_datetime_utc: job.sourceDate,
            job_description: job.job_description || '',
            job_employment_type: job.job_employment_type || 'FULLTIME',
            job_id: job.jobId,
            id: job.id,
            job_source: job.job_source || 'unknown'
        }));

        console.log(`📊 Found ${allJobs.length} total jobs in posted_jobs.json`);

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
