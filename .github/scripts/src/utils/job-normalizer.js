/**
 * Job Normalization Utility
 *
 * Handles multiple data formats from different job sources
 * Converts to standardized legacy format used throughout the system
 *
 * Primary format:
 * - title, company_name, url, locations[] (array)
 *
 * Legacy format:
 * - job_title, employer_name, job_apply_link, job_city, job_state
 */

/**
 * Normalize job object to handle multiple data formats
 * @param {Object} job - Raw job object from source
 * @returns {Object} Normalized job in legacy format
 */
function normalizeJob(job) {
  // If already in legacy format, return as-is
  if (job.job_title && job.employer_name) {
    return job;
  }

  // Convert primary format to legacy format
  const normalized = { ...job };

  // Title
  if (!normalized.job_title && job.title) {
    normalized.job_title = job.title;
  }

  // Company
  if (!normalized.employer_name && job.company_name) {
    normalized.employer_name = job.company_name;
  }

  // URL
  if (!normalized.job_apply_link && job.url) {
    normalized.job_apply_link = job.url;
  }

  // Location - parse locations[] array into job_city and job_state
  if (job.locations && Array.isArray(job.locations) && job.locations.length > 0) {
    const location = job.locations[0]; // Use first location

    // Parse "City, State" or "State" format
    if (location.includes(',')) {
      const parts = location.split(',').map(p => p.trim());
      normalized.job_city = parts[0];
      normalized.job_state = parts[1];
    } else {
      // Single value - could be city or state
      if (location.toLowerCase().includes('remote')) {
        normalized.job_city = 'Remote';
        normalized.job_state = 'Remote';
      } else {
        normalized.job_city = location;
        normalized.job_state = '';
      }
    }
  }

  return normalized;
}

module.exports = { normalizeJob };
