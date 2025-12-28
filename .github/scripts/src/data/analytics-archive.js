/**
 * Analytics Archive Manager
 *
 * Maintains a rolling archive of job data for analytics purposes.
 * Separate from posted_jobs.json (7-day TTL) - this keeps ALL jobs for trend analysis.
 *
 * Storage: .github/data/analytics/jobs_YYYY_MM.json (monthly files)
 *
 * Data retained per job:
 * - title, company, location, category
 * - date_posted, date_seen (when we first saw it)
 * - routing_channel (where it was routed)
 */

const fs = require('fs');
const path = require('path');

const analyticsDir = path.join(process.cwd(), '.github', 'data', 'analytics');

/**
 * Ensure analytics directory exists
 */
function ensureAnalyticsDir() {
  if (!fs.existsSync(analyticsDir)) {
    fs.mkdirSync(analyticsDir, { recursive: true });
    console.log('📁 Created analytics directory');
  }
}

/**
 * Get current month's archive filename
 * @returns {string} Filename like "jobs_2025_12.json"
 */
function getCurrentArchiveFile() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `jobs_${year}_${month}.json`;
}

/**
 * Load current month's archive
 * @returns {Object} Archive data with jobs array and metadata
 */
function loadCurrentArchive() {
  ensureAnalyticsDir();
  const filePath = path.join(analyticsDir, getCurrentArchiveFile());

  if (fs.existsSync(filePath)) {
    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      return data;
    } catch (error) {
      console.error('⚠️ Error loading analytics archive:', error.message);
    }
  }

  // Return empty archive structure
  return {
    version: 1,
    month: getCurrentArchiveFile().replace('jobs_', '').replace('.json', ''),
    created: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    jobCount: 0,
    jobs: []
  };
}

/**
 * Save archive to disk
 * @param {Object} archive - Archive data to save
 */
function saveArchive(archive) {
  ensureAnalyticsDir();
  const filePath = path.join(analyticsDir, getCurrentArchiveFile());

  archive.lastUpdated = new Date().toISOString();
  archive.jobCount = archive.jobs.length;

  fs.writeFileSync(filePath, JSON.stringify(archive, null, 2));
  console.log(`💾 Analytics archive saved: ${archive.jobCount} jobs in ${getCurrentArchiveFile()}`);
}

/**
 * Archive a batch of jobs for analytics
 * @param {Array} jobs - Array of job objects (raw format from fetcher)
 * @param {Object} routingResults - Map of jobId -> channelCategory
 */
function archiveJobs(jobs, routingResults = {}) {
  if (!jobs || jobs.length === 0) return;

  const archive = loadCurrentArchive();
  const existingIds = new Set(archive.jobs.map(j => j.id));
  const now = new Date().toISOString();

  let added = 0;

  for (const job of jobs) {
    // Generate consistent ID
    const id = generateAnalyticsId(job);

    // Skip if already archived
    if (existingIds.has(id)) continue;

    // Extract analytics-relevant fields
    const analyticsJob = {
      id,
      title: job.job_title || job.title || '',
      company: job.employer_name || job.company_name || '',
      location: extractLocation(job),
      category: job.category || 'unknown',
      datePosted: job.job_posted_at_datetime_utc || job.date_posted || null,
      dateSeen: now,
      routedTo: routingResults[id] || null,
      url: job.job_apply_link || job.url || ''
    };

    archive.jobs.push(analyticsJob);
    existingIds.add(id);
    added++;
  }

  if (added > 0) {
    saveArchive(archive);
    console.log(`📊 Archived ${added} new jobs for analytics`);
  }

  return added;
}

/**
 * Generate consistent job ID for analytics
 */
function generateAnalyticsId(job) {
  const title = (job.job_title || job.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const company = (job.employer_name || job.company_name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
  return `${company}-${title}`.substring(0, 100);
}

/**
 * Extract location string from job
 */
function extractLocation(job) {
  // Try various location field formats
  if (job.job_city && job.job_state) {
    return `${job.job_city}, ${job.job_state}`;
  }
  if (job.locations && job.locations.length > 0) {
    return job.locations[0];
  }
  if (job.location) {
    return job.location;
  }
  return 'Unknown';
}

/**
 * Get analytics summary for a date range
 * @param {number} daysBack - Number of days to include (default: 30)
 * @returns {Object} Summary statistics
 */
function getAnalyticsSummary(daysBack = 30) {
  ensureAnalyticsDir();

  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysBack);

  const allJobs = [];

  // Load all archive files
  const files = fs.readdirSync(analyticsDir).filter(f => f.startsWith('jobs_') && f.endsWith('.json'));

  for (const file of files) {
    try {
      const data = JSON.parse(fs.readFileSync(path.join(analyticsDir, file), 'utf8'));
      allJobs.push(...(data.jobs || []));
    } catch (error) {
      console.error(`⚠️ Error loading ${file}:`, error.message);
    }
  }

  // Filter to date range
  const recentJobs = allJobs.filter(job => {
    const seen = new Date(job.dateSeen);
    return seen >= cutoffDate;
  });

  // Calculate statistics
  const titleKeywords = {};
  const locations = {};
  const companies = {};
  const channels = {};

  for (const job of recentJobs) {
    // Count title keywords
    const words = job.title.toLowerCase().split(/[\s\-/&|,()]+/);
    for (const word of words) {
      if (word.length > 2) {
        titleKeywords[word] = (titleKeywords[word] || 0) + 1;
      }
    }

    // Count locations
    const loc = job.location.toLowerCase();
    locations[loc] = (locations[loc] || 0) + 1;

    // Count companies
    const comp = job.company.toLowerCase();
    companies[comp] = (companies[comp] || 0) + 1;

    // Count routing channels
    if (job.routedTo) {
      channels[job.routedTo] = (channels[job.routedTo] || 0) + 1;
    }
  }

  return {
    totalJobs: recentJobs.length,
    dateRange: {
      from: cutoffDate.toISOString(),
      to: new Date().toISOString()
    },
    titleKeywords: sortByCount(titleKeywords, 30),
    locations: sortByCount(locations, 20),
    companies: sortByCount(companies, 20),
    channels: sortByCount(channels, 15)
  };
}

/**
 * Sort object by count and return top N
 */
function sortByCount(obj, limit = 20) {
  return Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([key, count]) => ({ key, count }));
}

module.exports = {
  archiveJobs,
  loadCurrentArchive,
  getAnalyticsSummary,
  ensureAnalyticsDir
};
