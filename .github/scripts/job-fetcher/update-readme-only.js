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
const { logger } = require('../shared');
const { updateReadme } = require('./readme-generator');
const { companies, ALL_COMPANIES } = require('./utils');

async function main() {
    try {
        logger.start('README regeneration', { mode: 'existing data only' });

        // Paths to data files
        const newJobsPath = path.join(__dirname, '../../data/new_jobs.json');
        const postedJobsPath = path.join(__dirname, '../../data/posted_jobs.json');

        // Check if new_jobs.json exists
        if (!fs.existsSync(newJobsPath)) {
            logger.error('new_jobs.json not found', {
                expected: newJobsPath,
                hint: 'Run full job fetcher first'
            });
            logger.info('Creating empty data file as placeholder');
            fs.mkdirSync(path.dirname(newJobsPath), { recursive: true });
            fs.writeFileSync(newJobsPath, '[]', 'utf8');
        }

        // Read existing job data
        logger.info('Reading existing job data');
        const allJobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));

        logger.info('Jobs loaded', { count: allJobs.length });

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
        logger.info('Generating README.md');
        await updateReadme(allJobs, [], null, stats);

        logger.complete('README regenerated successfully', {
            jobs_processed: allJobs.length,
            companies: Object.keys(stats.totalByCompany).length
        });

    } catch (error) {
        logger.fatal('Error updating README', {
            error: error.message,
            stack: error.stack
        });
        process.exit(1);
    }
}

// Run the script
main();
