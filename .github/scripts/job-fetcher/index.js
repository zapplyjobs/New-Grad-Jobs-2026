#!/usr/bin/env node

/**
 * Main entry point for the job fetcher system
 *
 * This module orchestrates the entire job fetching and processing pipeline:
 * 1. Fetches jobs from multiple sources (APIs + career pages)
 * 2. Filters and processes jobs for US positions
 * 3. Generates enhanced README with job listings
 * 4. Handles deduplication and archiving
 */

const { logger, tryCatch } = require('../shared');
const { processJobs } = require('./job-processor');
const { updateReadme } = require('./readme-generator');
const { fetchInternshipData, companies } = require('./utils');

// Main execution function
async function main() {
    try {
        logger.start('Job fetching system', {
            timestamp: new Date().toISOString()
        });

        // Process all jobs (fetch, filter, deduplicate)
        const { currentJobs, archivedJobs, freshJobs, stats } = await processJobs();

        // Fetch internship data
        const internshipData = await fetchInternshipData();

        // Update README with current job state
        await updateReadme(currentJobs, archivedJobs, internshipData, stats);

        // Calculate FAANG+ jobs count
        const faangJobCount = currentJobs.filter(job =>
            companies.faang_plus.some(c => c.name === job.employer_name)
        ).length;

        // Log final summary
        logger.complete('Job fetching completed successfully', {
            current_jobs: currentJobs.length,
            fresh_jobs: freshJobs.length,
            archived_jobs: archivedJobs.length,
            companies: Object.keys(stats.totalByCompany).length,
            faang_plus_jobs: faangJobCount
        });

        if (freshJobs.length > 0) {
            logger.info('New jobs prepared for Discord posting', { count: freshJobs.length });
        } else {
            logger.info('No new jobs found - all positions already processed');
        }

    } catch (error) {
        logger.fatal('Fatal error in job fetching system', {
            error: error.message,
            stack: error.stack
        });
        process.exit(1);
    }
}

// Execute if run directly
if (require.main === module) {
    main();
}

module.exports = { main };