#!/usr/bin/env node

/**
 * Metrics Collector
 *
 * Collects and stores time-series metrics in JSONL format.
 *
 * Metrics Categories:
 * - Pipeline: fetch success rate, new job rate, deduplication efficiency
 * - Discord: posting success rate, API latency, rate limit hits
 * - Channels: posts per channel, thread utilization
 * - Queue: queue size, pending age, duplicate ratio
 *
 * Storage: .github/data/metrics/{category}-YYYY-MM.jsonl
 * Retention: 90 days (auto-archival)
 */

const fs = require('fs');
const path = require('path');

/**
 * Metrics storage directory
 */
const METRICS_DIR = path.join(process.cwd(), '.github', 'data', 'metrics');

/**
 * Ensure metrics directory exists
 */
function ensureMetricsDir() {
  if (!fs.existsSync(METRICS_DIR)) {
    fs.mkdirSync(METRICS_DIR, { recursive: true });
  }
}

/**
 * Get metrics file path for category and date
 *
 * @param {string} category - Metric category (pipeline, discord, channels, queue)
 * @param {Date} date - Date for metrics
 * @returns {string} - File path
 */
function getMetricsFilePath(category, date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const filename = `${category}-${year}-${month}.jsonl`;
  return path.join(METRICS_DIR, filename);
}

/**
 * Append metric to JSONL file
 *
 * @param {string} category - Metric category
 * @param {Object} metric - Metric data
 */
function appendMetric(category, metric) {
  ensureMetricsDir();

  const timestamp = new Date().toISOString();
  const metricWithTimestamp = {
    timestamp,
    ...metric
  };

  const filePath = getMetricsFilePath(category);
  const line = JSON.stringify(metricWithTimestamp) + '\n';

  try {
    fs.appendFileSync(filePath, line);
  } catch (error) {
    console.error(`❌ Failed to append metric to ${filePath}:`, error.message);
  }
}

/**
 * Read metrics from JSONL file
 *
 * @param {string} category - Metric category
 * @param {Date} startDate - Start date (optional)
 * @param {Date} endDate - End date (optional)
 * @returns {Array<Object>} - Array of metrics
 */
function readMetrics(category, startDate = null, endDate = null) {
  const filePath = getMetricsFilePath(category);

  if (!fs.existsSync(filePath)) {
    return [];
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.trim().split('\n').filter(line => line);
    let metrics = lines.map(line => JSON.parse(line));

    // Filter by date range if provided
    if (startDate) {
      const startTime = startDate.getTime();
      metrics = metrics.filter(m => new Date(m.timestamp).getTime() >= startTime);
    }

    if (endDate) {
      const endTime = endDate.getTime();
      metrics = metrics.filter(m => new Date(m.timestamp).getTime() <= endTime);
    }

    return metrics;
  } catch (error) {
    console.error(`❌ Failed to read metrics from ${filePath}:`, error.message);
    return [];
  }
}

/**
 * Collect pipeline metrics
 *
 * @param {Object} fetchSummary - Fetch summary from job-fetcher
 */
function collectPipelineMetrics(fetchSummary) {
  const metric = {
    type: 'pipeline',
    fetch_count: fetchSummary.current_jobs || 0,
    new_jobs: fetchSummary.fresh_jobs || 0,
    duplicate_jobs: fetchSummary.duplicate_jobs || 0,
    new_job_rate: fetchSummary.fresh_jobs && fetchSummary.current_jobs
      ? (fetchSummary.fresh_jobs / fetchSummary.current_jobs).toFixed(3)
      : 0,
    dedup_efficiency: fetchSummary.duplicate_jobs && fetchSummary.current_jobs
      ? (fetchSummary.duplicate_jobs / fetchSummary.current_jobs).toFixed(3)
      : 0
  };

  appendMetric('pipeline', metric);
  return metric;
}

/**
 * Collect Discord bot metrics
 *
 * @param {Object} postingSummary - Posting summary from discord bot
 */
function collectDiscordMetrics(postingSummary) {
  const metric = {
    type: 'discord',
    total_posted: postingSummary.total_posted || 0,
    total_failed: postingSummary.total_failed || 0,
    success_rate: postingSummary.total_posted && (postingSummary.total_posted + postingSummary.total_failed)
      ? (postingSummary.total_posted / (postingSummary.total_posted + postingSummary.total_failed)).toFixed(3)
      : 0,
    avg_latency_ms: postingSummary.avg_latency_ms || 0,
    rate_limit_hits: postingSummary.rate_limit_hits || 0
  };

  appendMetric('discord', metric);
  return metric;
}

/**
 * Collect channel metrics
 *
 * @param {Object} channelStats - Channel statistics
 */
function collectChannelMetrics(channelStats) {
  const metric = {
    type: 'channels',
    channel_id: channelStats.channel_id,
    channel_name: channelStats.channel_name,
    posts_count: channelStats.posts_count || 0,
    thread_count: channelStats.thread_count || 0,
    utilization: channelStats.utilization || 0 // threads / max_threads
  };

  appendMetric('channels', metric);
  return metric;
}

/**
 * Collect queue health metrics
 *
 * @param {Object} queueHealth - Queue health data
 */
function collectQueueMetrics(queueHealth) {
  const metric = {
    type: 'queue',
    queue_size: queueHealth.queue_size || 0,
    pending_count: queueHealth.pending_count || 0,
    enriched_count: queueHealth.enriched_count || 0,
    posted_count: queueHealth.posted_count || 0,
    duplicate_count: queueHealth.duplicate_count || 0,
    stale_pending_count: queueHealth.stale_pending_count || 0,
    duplicate_ratio: queueHealth.duplicate_ratio || 0
  };

  appendMetric('queue', metric);
  return metric;
}

/**
 * Archive old metrics (>90 days)
 *
 * @param {string} category - Metric category
 * @returns {Object} - Archive results
 */
function archiveOldMetrics(category) {
  const now = new Date();
  const cutoffDate = new Date(now.getTime() - (90 * 24 * 60 * 60 * 1000)); // 90 days ago

  const archiveDir = path.join(METRICS_DIR, 'archive');
  if (!fs.existsSync(archiveDir)) {
    fs.mkdirSync(archiveDir, { recursive: true });
  }

  // Find all metric files for this category
  const files = fs.readdirSync(METRICS_DIR)
    .filter(f => f.startsWith(`${category}-`) && f.endsWith('.jsonl'));

  let archivedCount = 0;
  let deletedCount = 0;

  for (const file of files) {
    const filePath = path.join(METRICS_DIR, file);
    const stats = fs.statSync(filePath);
    const fileDate = new Date(stats.mtime);

    if (fileDate < cutoffDate) {
      // Move to archive
      const archivePath = path.join(archiveDir, file);
      fs.renameSync(filePath, archivePath);
      archivedCount++;
      console.log(`📦 Archived old metrics: ${file}`);
    }
  }

  return {
    archived: archivedCount,
    deleted: deletedCount
  };
}

/**
 * Get metrics summary for last N hours
 *
 * @param {string} category - Metric category
 * @param {number} hours - Number of hours to look back
 * @returns {Object} - Metrics summary
 */
function getMetricsSummary(category, hours = 24) {
  const endDate = new Date();
  const startDate = new Date(endDate.getTime() - (hours * 60 * 60 * 1000));

  const metrics = readMetrics(category, startDate, endDate);

  if (metrics.length === 0) {
    return {
      category,
      hours,
      count: 0,
      summary: 'No data'
    };
  }

  // Calculate summary based on category
  if (category === 'pipeline') {
    const totalFetch = metrics.reduce((sum, m) => sum + (m.fetch_count || 0), 0);
    const totalNew = metrics.reduce((sum, m) => sum + (m.new_jobs || 0), 0);
    const avgNewRate = totalFetch > 0 ? (totalNew / totalFetch).toFixed(3) : 0;

    return {
      category,
      hours,
      count: metrics.length,
      total_fetched: totalFetch,
      total_new: totalNew,
      avg_new_rate: parseFloat(avgNewRate)
    };
  } else if (category === 'discord') {
    const totalPosted = metrics.reduce((sum, m) => sum + (m.total_posted || 0), 0);
    const totalFailed = metrics.reduce((sum, m) => sum + (m.total_failed || 0), 0);
    const avgSuccessRate = totalPosted + totalFailed > 0
      ? (totalPosted / (totalPosted + totalFailed)).toFixed(3)
      : 0;

    return {
      category,
      hours,
      count: metrics.length,
      total_posted: totalPosted,
      total_failed: totalFailed,
      avg_success_rate: parseFloat(avgSuccessRate)
    };
  } else if (category === 'queue') {
    const latestMetric = metrics[metrics.length - 1];

    return {
      category,
      hours,
      count: metrics.length,
      current_queue_size: latestMetric.queue_size,
      current_pending: latestMetric.pending_count,
      current_duplicate_ratio: latestMetric.duplicate_ratio
    };
  }

  return {
    category,
    hours,
    count: metrics.length,
    summary: `${metrics.length} metrics collected`
  };
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'test') {
    // Test metric collection
    console.log('📊 Testing metrics collection...\n');

    const testPipeline = {
      current_jobs: 100,
      fresh_jobs: 15,
      duplicate_jobs: 5
    };
    collectPipelineMetrics(testPipeline);
    console.log('✅ Pipeline metric collected');

    const testDiscord = {
      total_posted: 10,
      total_failed: 1,
      avg_latency_ms: 250,
      rate_limit_hits: 0
    };
    collectDiscordMetrics(testDiscord);
    console.log('✅ Discord metric collected');

    const testQueue = {
      queue_size: 50,
      pending_count: 45,
      enriched_count: 5,
      duplicate_count: 2,
      duplicate_ratio: 0.04
    };
    collectQueueMetrics(testQueue);
    console.log('✅ Queue metric collected');

    console.log('\n📁 Metrics saved to:', METRICS_DIR);
  } else if (command === 'summary') {
    const category = args[1] || 'pipeline';
    const hours = parseInt(args[2]) || 24;

    const summary = getMetricsSummary(category, hours);
    console.log(JSON.stringify(summary, null, 2));
  } else if (command === 'archive') {
    const category = args[1] || 'pipeline';
    const results = archiveOldMetrics(category);
    console.log(`📦 Archived ${results.archived} files`);
  } else {
    console.log(`
Metrics Collector - Collect and store time-series metrics

Usage:
  node metrics-collector.js test                         Test metric collection
  node metrics-collector.js summary [category] [hours]   Get metrics summary
  node metrics-collector.js archive [category]           Archive old metrics (>90 days)

Categories: pipeline, discord, channels, queue

Examples:
  node metrics-collector.js summary pipeline 24    Last 24 hours of pipeline metrics
  node metrics-collector.js summary discord 168    Last 7 days of Discord metrics
  node metrics-collector.js archive pipeline       Archive old pipeline metrics
    `);
  }
}

module.exports = {
  appendMetric,
  readMetrics,
  collectPipelineMetrics,
  collectDiscordMetrics,
  collectChannelMetrics,
  collectQueueMetrics,
  archiveOldMetrics,
  getMetricsSummary
};
