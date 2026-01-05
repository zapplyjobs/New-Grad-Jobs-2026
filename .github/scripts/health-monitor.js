#!/usr/bin/env node

/**
 * Job Pipeline Health Monitor
 *
 * Detects issues in the job fetching/posting pipeline:
 * - Low new job acceptance rate (deduplication too aggressive)
 * - Queue corruption (duplicates, stale entries)
 * - seen_jobs.json size issues
 * - Discord bot posting failures
 * - Enrichment bottlenecks
 *
 * Runs after each workflow and reports anomalies.
 */

const fs = require('fs');
const path = require('path');

// Thresholds for health checks
const THRESHOLDS = {
    MIN_NEW_JOB_RATE: 0.05, // At least 5% of unique jobs should be new
    MAX_SEEN_JOBS_SIZE: 9500, // Warn if approaching 10K limit
    MAX_QUEUE_SIZE: 100, // Warn if queue exceeds this
    MAX_PENDING_AGE_HOURS: 6, // Warn if jobs pending >6 hours
    MIN_POSTED_PER_HOUR: 5, // At least 5 jobs posted per hour
    MAX_DUPLICATE_RATIO: 0.1, // Max 10% duplicates in queue
};

// Health check results
const healthReport = {
    timestamp: new Date().toISOString(),
    status: 'healthy',
    issues: [],
    warnings: [],
    metrics: {},
};

/**
 * Load and parse JSON file
 */
function loadJSON(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return null;
        }
        const content = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(content);
    } catch (error) {
        healthReport.issues.push({
            severity: 'error',
            component: 'file-loader',
            message: `Failed to load ${filePath}: ${error.message}`,
        });
        return null;
    }
}

/**
 * Check 1: Deduplication Rate
 * Ensure new job acceptance rate is reasonable
 */
function checkDeduplicationRate() {
    const logsDir = path.join(process.cwd(), '.github', 'logs');
    const summaryPath = path.join(logsDir, 'fetch-summary.json');

    const summary = loadJSON(summaryPath);
    if (!summary) {
        healthReport.warnings.push({
            severity: 'warning',
            component: 'deduplication',
            message: 'No fetch summary found - cannot check deduplication rate',
        });
        return;
    }

    const { current_jobs, fresh_jobs } = summary;
    if (!current_jobs || !fresh_jobs) {
        return;
    }

    const newJobRate = fresh_jobs / current_jobs;
    healthReport.metrics.new_job_rate = newJobRate.toFixed(3);
    healthReport.metrics.fresh_jobs = fresh_jobs;
    healthReport.metrics.current_jobs = current_jobs;

    if (newJobRate < THRESHOLDS.MIN_NEW_JOB_RATE) {
        healthReport.status = 'unhealthy';
        healthReport.issues.push({
            severity: 'critical',
            component: 'deduplication',
            message: `Low new job acceptance rate: ${(newJobRate * 100).toFixed(1)}% (${fresh_jobs}/${current_jobs})`,
            recommendation: 'Check seen_jobs.json for expiration issues. Expected >5% acceptance rate.',
            threshold: `${THRESHOLDS.MIN_NEW_JOB_RATE * 100}%`,
        });
    }
}

/**
 * Check 2: seen_jobs.json Size
 * Warn if approaching max capacity
 */
function checkSeenJobsSize() {
    const seenJobsPath = path.join(process.cwd(), '.github', 'data', 'seen_jobs.json');
    const seenJobs = loadJSON(seenJobsPath);

    if (!seenJobs) {
        healthReport.warnings.push({
            severity: 'warning',
            component: 'seen-jobs',
            message: 'seen_jobs.json not found or corrupt',
        });
        return;
    }

    let count;
    if (Array.isArray(seenJobs)) {
        count = seenJobs.length;
        healthReport.metrics.seen_jobs_format = 'array (legacy)';
    } else {
        count = Object.keys(seenJobs).length;
        healthReport.metrics.seen_jobs_format = 'object (timestamped)';
    }

    healthReport.metrics.seen_jobs_count = count;

    if (count > THRESHOLDS.MAX_SEEN_JOBS_SIZE) {
        healthReport.status = 'degraded';
        healthReport.warnings.push({
            severity: 'warning',
            component: 'seen-jobs',
            message: `seen_jobs.json approaching max capacity: ${count} entries`,
            recommendation: 'Consider clearing old entries or increasing limit',
            threshold: THRESHOLDS.MAX_SEEN_JOBS_SIZE,
        });
    }

    // Check if legacy format (array) - should migrate
    if (Array.isArray(seenJobs)) {
        healthReport.warnings.push({
            severity: 'info',
            component: 'seen-jobs',
            message: 'seen_jobs.json using legacy array format',
            recommendation: 'Will auto-migrate to timestamped format on next run',
        });
    }
}

/**
 * Check 3: Queue Health
 * Check for duplicates, stale entries, excessive size
 */
function checkQueueHealth() {
    const queuePath = path.join(process.cwd(), '.github', 'data', 'pending_posts.json');
    const queue = loadJSON(queuePath);

    if (!queue || !Array.isArray(queue)) {
        healthReport.warnings.push({
            severity: 'warning',
            component: 'queue',
            message: 'pending_posts.json not found or invalid format',
        });
        return;
    }

    // Count by status
    const statusCounts = {
        pending: 0,
        enriched: 0,
        posted: 0,
    };

    const jobIds = new Set();
    let duplicates = 0;
    let stalePending = 0;
    const sixHoursAgo = Date.now() - (6 * 60 * 60 * 1000);

    queue.forEach(item => {
        const status = item.status || 'unknown';
        statusCounts[status] = (statusCounts[status] || 0) + 1;

        // Check for duplicates
        const jobId = item.job?.id || 'unknown';
        if (jobIds.has(jobId)) {
            duplicates++;
        }
        jobIds.add(jobId);

        // Check for stale pending jobs
        if (status === 'pending' && item.addedAt) {
            const addedTime = new Date(item.addedAt).getTime();
            if (addedTime < sixHoursAgo) {
                stalePending++;
            }
        }
    });

    healthReport.metrics.queue_size = queue.length;
    healthReport.metrics.queue_pending = statusCounts.pending;
    healthReport.metrics.queue_enriched = statusCounts.enriched;
    healthReport.metrics.queue_posted = statusCounts.posted;
    healthReport.metrics.queue_duplicates = duplicates;
    healthReport.metrics.queue_stale_pending = stalePending;

    // Check queue size
    if (queue.length > THRESHOLDS.MAX_QUEUE_SIZE) {
        healthReport.status = 'degraded';
        healthReport.warnings.push({
            severity: 'warning',
            component: 'queue',
            message: `Queue size excessive: ${queue.length} items`,
            recommendation: 'Check for enrichment bottleneck or processing issues',
            threshold: THRESHOLDS.MAX_QUEUE_SIZE,
        });
    }

    // Check for duplicates
    if (duplicates > 0) {
        const dupRatio = duplicates / queue.length;
        if (dupRatio > THRESHOLDS.MAX_DUPLICATE_RATIO) {
            healthReport.status = 'unhealthy';
            healthReport.issues.push({
                severity: 'critical',
                component: 'queue',
                message: `Queue corruption detected: ${duplicates} duplicate job IDs (${(dupRatio * 100).toFixed(1)}%)`,
                recommendation: 'Run queue deduplication script or investigate duplicate insertion',
                threshold: `${THRESHOLDS.MAX_DUPLICATE_RATIO * 100}%`,
            });
        }
    }

    // Check for stale pending jobs
    if (stalePending > 10) {
        healthReport.status = 'degraded';
        healthReport.warnings.push({
            severity: 'warning',
            component: 'queue',
            message: `${stalePending} jobs pending >6 hours`,
            recommendation: 'Check enrichment service for failures or rate limits',
        });
    }
}

/**
 * Check 4: Posted Jobs Rate
 * Ensure jobs are actually being posted to Discord
 */
function checkPostedJobsRate() {
    const postedPath = path.join(process.cwd(), '.github', 'data', 'posted_jobs.json');
    const postedJobs = loadJSON(postedPath);

    if (!postedJobs || !Array.isArray(postedJobs)) {
        healthReport.warnings.push({
            severity: 'warning',
            component: 'discord-bot',
            message: 'posted_jobs.json not found or invalid',
        });
        return;
    }

    // Count posts in last hour
    const oneHourAgo = Date.now() - (60 * 60 * 1000);
    const recentPosts = postedJobs.filter(job => {
        const postedAt = new Date(job.posted_at || 0).getTime();
        return postedAt > oneHourAgo;
    });

    healthReport.metrics.posted_last_hour = recentPosts.length;
    healthReport.metrics.posted_total = postedJobs.length;

    if (recentPosts.length < THRESHOLDS.MIN_POSTED_PER_HOUR) {
        healthReport.status = 'degraded';
        healthReport.warnings.push({
            severity: 'warning',
            component: 'discord-bot',
            message: `Low posting rate: only ${recentPosts.length} jobs posted in last hour`,
            recommendation: 'Check Discord bot logs for errors or rate limits',
            threshold: `${THRESHOLDS.MIN_POSTED_PER_HOUR} per hour`,
        });
    }
}

/**
 * Check 5: Data File Sizes
 * Ensure files aren't growing unbounded
 */
function checkFileSizes() {
    const dataDir = path.join(process.cwd(), '.github', 'data');
    const files = [
        'seen_jobs.json',
        'pending_posts.json',
        'posted_jobs.json',
        'new_jobs.json',
    ];

    const fileSizes = {};
    files.forEach(file => {
        const filePath = path.join(dataDir, file);
        if (fs.existsSync(filePath)) {
            const stats = fs.statSync(filePath);
            const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
            fileSizes[file] = `${sizeMB} MB`;

            // Warn if >10MB
            if (stats.size > 10 * 1024 * 1024) {
                healthReport.warnings.push({
                    severity: 'warning',
                    component: 'storage',
                    message: `${file} is large: ${sizeMB} MB`,
                    recommendation: 'Consider archiving old data',
                });
            }
        }
    });

    healthReport.metrics.file_sizes = fileSizes;
}

/**
 * Generate human-readable report
 */
function generateReport() {
    console.log('\n========================================');
    console.log('📊 JOB PIPELINE HEALTH REPORT');
    console.log('========================================\n');

    // Status
    const statusEmoji = {
        healthy: '✅',
        degraded: '⚠️',
        unhealthy: '🔴',
    };
    console.log(`Status: ${statusEmoji[healthReport.status]} ${healthReport.status.toUpperCase()}\n`);

    // Critical Issues
    if (healthReport.issues.length > 0) {
        console.log('🔴 CRITICAL ISSUES:');
        healthReport.issues.forEach(issue => {
            console.log(`  [${issue.component}] ${issue.message}`);
            if (issue.recommendation) {
                console.log(`    → ${issue.recommendation}`);
            }
        });
        console.log('');
    }

    // Warnings
    if (healthReport.warnings.length > 0) {
        console.log('⚠️  WARNINGS:');
        healthReport.warnings.forEach(warning => {
            console.log(`  [${warning.component}] ${warning.message}`);
            if (warning.recommendation) {
                console.log(`    → ${warning.recommendation}`);
            }
        });
        console.log('');
    }

    // Metrics
    console.log('📈 METRICS:');
    Object.entries(healthReport.metrics).forEach(([key, value]) => {
        console.log(`  ${key}: ${value}`);
    });
    console.log('\n========================================\n');

    // Save report to file
    const reportsDir = path.join(process.cwd(), '.github', 'logs');
    if (!fs.existsSync(reportsDir)) {
        fs.mkdirSync(reportsDir, { recursive: true });
    }

    const reportPath = path.join(reportsDir, 'health-report.json');
    fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
    console.log(`📁 Full report saved to: ${reportPath}\n`);

    // Exit with appropriate code
    if (healthReport.status === 'unhealthy') {
        console.log('❌ Health check FAILED - pipeline requires attention\n');
        process.exit(1);
    } else if (healthReport.status === 'degraded') {
        console.log('⚠️  Health check WARNING - pipeline degraded but operational\n');
        process.exit(0); // Don't fail workflow, just warn
    } else {
        console.log('✅ Health check PASSED - pipeline operating normally\n');
        process.exit(0);
    }
}

/**
 * Run all health checks
 */
function runHealthChecks() {
    console.log('🏥 Running health checks...\n');

    checkDeduplicationRate();
    checkSeenJobsSize();
    checkQueueHealth();
    checkPostedJobsRate();
    checkFileSizes();

    generateReport();
}

// Run if called directly
if (require.main === module) {
    runHealthChecks();
}

module.exports = { runHealthChecks, healthReport };
