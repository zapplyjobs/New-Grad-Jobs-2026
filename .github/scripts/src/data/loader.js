/**
 * Job Data Loading and Filtering Module
 * Handles reading job data from files and applying search filters
 */

const fs = require('fs');
const path = require('path');
const { normalizeJob } = require('@zapply/job-board-shared');
const { generateTags } = require('../discord/poster');

// Data paths
const dataDir = path.join(process.cwd(), '.github', 'data');

/**
 * Load and filter jobs based on search criteria
 * @param {Object} filters - Filter criteria
 * @param {string} [filters.tags] - Comma-separated tags to filter by
 * @param {string} [filters.company] - Company name to filter by
 * @param {string} [filters.location] - Location to filter by
 * @returns {Array<Object>} Filtered jobs (max 10)
 */
function loadAndFilterJobs(filters = {}) {
  try {
    const newJobsPath = path.join(dataDir, 'new_jobs.json');
    if (!fs.existsSync(newJobsPath)) {
      return [];
    }

    let jobs = JSON.parse(fs.readFileSync(newJobsPath, 'utf8'));
    // Normalize jobs to handle multiple data formats
    jobs = jobs.map(job => normalizeJob(job));

    // Apply filters
    if (filters.tags) {
      const filterTags = filters.tags.split(',').map(t => t.trim().toLowerCase());
      jobs = jobs.filter(job => {
        const jobTags = generateTags(job).map(t => t.toLowerCase());
        return filterTags.some(tag => jobTags.includes(tag));
      });
    }

    if (filters.company) {
      jobs = jobs.filter(job =>
        job.employer_name.toLowerCase().includes(filters.company.toLowerCase())
      );
    }

    if (filters.location) {
      jobs = jobs.filter(job =>
        (job.job_city && job.job_city.toLowerCase().includes(filters.location.toLowerCase())) ||
        (job.job_state && job.job_state.toLowerCase().includes(filters.location.toLowerCase()))
      );
    }

    return jobs.slice(0, 10); // Limit to 10 results
  } catch (error) {
    console.error('Error loading jobs:', error);
    return [];
  }
}

module.exports = {
  loadAndFilterJobs
};
