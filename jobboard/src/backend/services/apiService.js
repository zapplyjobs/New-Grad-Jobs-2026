/**
 * API Service Layer
 * Handles HTTP requests to external job data sources
 */

const axios = require('axios');

/**
 * Fetch jobs from API-based companies
 * @param {Object} company - Company configuration object
 * @returns {Promise<Array>} Array of job objects
 */
async function fetchAPIJobs(company) {
  if (!company.apiMode) {
    return null; // Not an API company, skip
  }

  try {
    console.log(`📡 Fetching from ${company.name} API...`);

    const response = await axios.get(company.url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'JobAggregator/1.0'
      },
      timeout: 30000 // 30 second timeout
    });

    // Use company-specific parser if available
    if (company.parser && typeof company.parser === 'function') {
      const jobs = company.parser(response.data);
      console.log(`✅ ${company.name}: ${jobs.length} jobs`);
      return jobs;
    }

    console.log(`⚠️  ${company.name}: No parser function defined`);
    return [];

  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error(`⏱️  ${company.name}: Request timeout (>30s)`);
    } else if (error.response) {
      console.error(`❌ ${company.name}: HTTP ${error.response.status}`);
    } else {
      console.error(`❌ ${company.name}: ${error.message}`);
    }
    return [];
  }
}

/**
 * Fetch jobs from external aggregator service
 * @returns {Promise<Array>} Array of job objects
 */
async function fetchExternalJobsData() {
  const dataSourceUrl = process.env.PRIMARY_DATA_SOURCE_URL;

  if (!dataSourceUrl) {
    const errorMsg = '❌ CRITICAL: PRIMARY_DATA_SOURCE_URL environment variable is not set!\n' +
                     '   → Set GRAD_JOBS_PROCESSOR_URL secret in repository settings\n' +
                     '   → Workflow will fail without this secret';
    console.error(errorMsg);
    throw new Error('PRIMARY_DATA_SOURCE_URL is required but not configured');
  }

  try {
    console.log('📡 Fetching from primary data source...');

    const response = await axios.get(dataSourceUrl, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'JobAggregator/1.0'
      },
      timeout: 60000 // 60 second timeout for large dataset
    });

    // Transform external data to standard format
    // Handle different API response formats (some return direct array, others nest in object)
    let jobsData = response.data;

    // If response.data is not an array, try to extract array from nested properties
    if (!Array.isArray(jobsData)) {
      console.log('⚠️  API response is not a direct array, attempting to extract...');

      // Try common nested array properties
      if (Array.isArray(jobsData.jobs)) {
        jobsData = jobsData.jobs;
        console.log(`✅ Extracted ${jobsData.length} jobs from response.data.jobs`);
      } else if (Array.isArray(jobsData.data)) {
        jobsData = jobsData.data;
        console.log(`✅ Extracted ${jobsData.length} jobs from response.data.data`);
      } else if (Array.isArray(jobsData.results)) {
        jobsData = jobsData.results;
        console.log(`✅ Extracted ${jobsData.length} jobs from response.data.results`);
      } else {
        console.error('❌ Could not find job array in API response. Response keys:', Object.keys(jobsData));
        return [];
      }
    }

    // Filter by category (all software-related) - primary filter
    // Fallback to title keywords for entries without category field
    const jobs = jobsData
      .filter(job => {
        if (!job.active || !job.url) return false;

        // Primary filter: Use category if available
        if (job.category) {
          const softwareCategories = [
            'Software',
            'Software Engineering',
            'AI/ML/Data',
            'Data Science, AI & Machine Learning'
          ];
          return softwareCategories.includes(job.category);
        }

        // Fallback filter: Title keywords for older entries without category
        const title = job.title.toLowerCase();
        return title.includes('engineer') ||
               title.includes('developer') ||
               title.includes('software');
      })
      .map(job => ({
        job_title: job.title,
        employer_name: job.company_name,
        job_city: job.locations?.[0]?.split(', ')?.[0] || 'Multiple',
        job_state: job.locations?.[0]?.split(', ')?.[1] || 'Locations',
        job_description: `Join ${job.company_name} in this exciting opportunity.`,
        job_apply_link: job.url,
        job_posted_at_datetime_utc: safeISOString(job.date_posted * 1000),
        job_employment_type: 'FULLTIME',
        // Source tracking
        source: 'simplify',
        source_url: 'simplify.jobs'
      }));

    console.log(`✅ Primary data source: ${jobs.length} jobs`);
    return jobs;

  } catch (error) {
    if (error.code === 'ECONNABORTED') {
      console.error(`⏱️  Primary data source: Request timeout (>60s)`);
    } else if (error.response) {
      console.error(`❌ Primary data source: HTTP ${error.response.status}`);
    } else {
      console.error(`❌ Primary data source: ${error.message}`);
    }
    return [];
  }
}

/**
 * Helper function to safely convert dates to ISO string
 * @param {*} dateValue - Date value to convert (Unix timestamp in seconds or milliseconds)
 * @returns {string|null} ISO string or null
 */
function safeISOString(dateValue) {
  if (!dateValue) return null;

  try {
    // Convert to milliseconds if timestamp is in seconds (< 10 billion)
    const timestamp = dateValue < 10000000000 ? dateValue * 1000 : dateValue;

    // Validate: must be between Jan 1, 2023 and Dec 31, 2026 (reasonable range for new grad jobs)
    const MIN_TIMESTAMP = new Date('2023-01-01').getTime();
    const MAX_TIMESTAMP = new Date('2026-12-31').getTime();

    if (timestamp < MIN_TIMESTAMP || timestamp > MAX_TIMESTAMP) {
      console.log(`⚠️ Invalid timestamp ${dateValue} (${new Date(timestamp).toISOString()}) - outside valid range`);
      return null; // Invalid date range
    }

    const date = new Date(timestamp);
    return isNaN(date.getTime()) ? null : date.toISOString();
  } catch {
    return null;
  }
}

module.exports = {
  fetchAPIJobs,
  fetchExternalJobsData
};
