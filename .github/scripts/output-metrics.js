#!/usr/bin/env node

/**
 * Metrics Dashboard - Generates concise structured metrics for workflow runs
 *
 * Purpose: Replace 1,216-line verbose logs with structured JSON output
 * Expected savings: 12,000 tokens (12%) per debugging session
 *
 * Output: .github/data/workflow_metrics.json
 */

const fs = require('fs');
const path = require('path');

// Paths
const DATA_DIR = path.join(process.cwd(), '.github', 'data');
const CURRENT_JOBS_PATH = path.join(DATA_DIR, 'current_jobs.json');
const SEEN_JOBS_PATH = path.join(DATA_DIR, 'seen_jobs.json');
const NEW_JOBS_PATH = path.join(DATA_DIR, 'new_jobs.json');
const PENDING_QUEUE_PATH = path.join(DATA_DIR, 'pending_posts.json');
const JSEARCH_USAGE_PATH = path.join(DATA_DIR, 'jsearch_usage.json');
const METRICS_OUTPUT_PATH = path.join(DATA_DIR, 'workflow_metrics.json');

/**
 * Load JSON file safely
 */
function loadJson(filePath, defaultValue = {}) {
    try {
        if (!fs.existsSync(filePath)) {
            return defaultValue;
        }
        const content = fs.readFileSync(filePath, 'utf8');
        if (!content.trim()) {
            return defaultValue;
        }
        return JSON.parse(content);
    } catch (error) {
        console.error(`Error loading ${path.basename(filePath)}:`, error.message);
        return defaultValue;
    }
}

/**
 * Get file size in human-readable format
 */
function getFileSize(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            return '0 B';
        }
        const stats = fs.statSync(filePath);
        const bytes = stats.size;

        if (bytes === 0) return '0 B';
        const k = 1024;
        const sizes = ['B', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    } catch (error) {
        return 'unknown';
    }
}

/**
 * Count jobs by source from current_jobs.json
 */
function countJobsBySource(jobs) {
    const sources = {
        jsearch: 0,
        greenhouse: 0,
        lever: 0,
        ashby: 0,
        workday: 0,
        myworkdayjobs: 0,
        other: 0
    };

    jobs.forEach(job => {
        const url = job.job_apply_link || job.job_url || '';
        const urlLower = url.toLowerCase();

        if (job.source === 'jsearch' || urlLower.includes('jsearch')) {
            sources.jsearch++;
        } else if (urlLower.includes('greenhouse')) {
            sources.greenhouse++;
        } else if (urlLower.includes('lever')) {
            sources.lever++;
        } else if (urlLower.includes('ashby')) {
            sources.ashby++;
        } else if (urlLower.includes('myworkdayjobs.com')) {
            sources.myworkdayjobs++;
        } else if (urlLower.includes('workday')) {
            sources.workday++;
        } else {
            sources.other++;
        }
    });

    return sources;
}

/**
 * Get last git commit info
 */
function getLastCommitInfo() {
    try {
        const { execSync } = require('child_process');
        const timestamp = execSync('git log -1 --format=%ci', { encoding: 'utf8' }).trim();
        const message = execSync('git log -1 --format=%s', { encoding: 'utf8' }).trim();
        return { timestamp, message };
    } catch (error) {
        return { timestamp: 'unknown', message: 'unknown' };
    }
}

/**
 * Generate comprehensive metrics
 */
function generateMetrics() {
    console.log('📊 Generating workflow metrics...');

    // Load data files
    const currentJobs = loadJson(CURRENT_JOBS_PATH, []);
    const seenJobs = loadJson(SEEN_JOBS_PATH, {});
    const newJobs = loadJson(NEW_JOBS_PATH, []);
    const pendingQueue = loadJson(PENDING_QUEUE_PATH, []);
    const jsearchUsage = loadJson(JSEARCH_USAGE_PATH, {});

    // Count sources
    const sources = countJobsBySource(currentJobs);

    // Get last commit
    const lastCommit = getLastCommitInfo();

    // Build metrics object
    const metrics = {
        timestamp: new Date().toISOString(),
        workflow: {
            last_commit: lastCommit.timestamp,
            commit_message: lastCommit.message
        },
        sources: {
            jsearch: sources.jsearch,
            greenhouse: sources.greenhouse,
            lever: sources.lever,
            ashby: sources.ashby,
            workday: sources.workday,
            myworkdayjobs: sources.myworkdayjobs,
            other: sources.other,
            total: currentJobs.length
        },
        processing: {
            current_jobs: currentJobs.length,
            seen_jobs_total: Array.isArray(seenJobs) ? seenJobs.length : Object.keys(seenJobs).length,
            fresh_this_run: newJobs.length,
            pending_queue: pendingQueue.length
        },
        quota: {
            jsearch: jsearchUsage.requests
                ? `${jsearchUsage.requests}/${jsearchUsage.requests + (jsearchUsage.remaining || 0)}`
                : 'unknown',
            jsearch_remaining: jsearchUsage.remaining || 0
        },
        databases: {
            current_jobs_size: getFileSize(CURRENT_JOBS_PATH),
            seen_jobs_size: getFileSize(SEEN_JOBS_PATH),
            pending_queue_size: getFileSize(PENDING_QUEUE_PATH)
        },
        health: {
            current_jobs_exists: fs.existsSync(CURRENT_JOBS_PATH),
            seen_jobs_exists: fs.existsSync(SEEN_JOBS_PATH),
            jsearch_usage_exists: fs.existsSync(JSEARCH_USAGE_PATH),
            pending_queue_exists: fs.existsSync(PENDING_QUEUE_PATH)
        },
        warnings: [],
        errors: []
    };

    // Add warnings based on thresholds
    if (pendingQueue.length > 1000) {
        metrics.warnings.push(`Pending queue large: ${pendingQueue.length} jobs (consider increasing batch size)`);
    }

    if (getFileSize(PENDING_QUEUE_PATH).includes('MB')) {
        const size = parseFloat(getFileSize(PENDING_QUEUE_PATH));
        if (size > 5) {
            metrics.warnings.push(`Pending queue file size: ${getFileSize(PENDING_QUEUE_PATH)} (performance impact)`);
        }
    }

    if (jsearchUsage.remaining !== undefined && jsearchUsage.remaining < 10) {
        metrics.warnings.push(`JSearch quota low: ${jsearchUsage.remaining} requests remaining`);
    }

    if (newJobs.length === 0 && currentJobs.length > 0) {
        metrics.warnings.push('No fresh jobs this run (all duplicates or no new postings)');
    }

    // Check for errors
    if (!fs.existsSync(CURRENT_JOBS_PATH)) {
        metrics.errors.push('current_jobs.json not found');
    }

    if (currentJobs.length === 0) {
        metrics.errors.push('No current jobs (database empty)');
    }

    // Save metrics
    try {
        fs.writeFileSync(METRICS_OUTPUT_PATH, JSON.stringify(metrics, null, 2), 'utf8');
        console.log('✅ Metrics saved to:', METRICS_OUTPUT_PATH);
    } catch (error) {
        console.error('❌ Error saving metrics:', error.message);
        process.exit(1);
    }

    // Print summary to console (concise format)
    console.log('\n=== WORKFLOW METRICS SUMMARY ===');
    console.log(`Timestamp: ${metrics.timestamp}`);
    console.log('\nSources:');
    console.log(`  JSearch: ${sources.jsearch}`);
    console.log(`  Greenhouse: ${sources.greenhouse}`);
    console.log(`  Lever: ${sources.lever}`);
    console.log(`  Ashby: ${sources.ashby}`);
    console.log(`  Workday: ${sources.workday + sources.myworkdayjobs}`);
    console.log(`  Other: ${sources.other}`);
    console.log(`  Total: ${currentJobs.length}`);
    console.log('\nProcessing:');
    console.log(`  Current jobs: ${currentJobs.length}`);
    console.log(`  Seen jobs: ${metrics.processing.seen_jobs_total}`);
    console.log(`  Fresh this run: ${newJobs.length}`);
    console.log(`  Pending queue: ${pendingQueue.length}`);
    console.log('\nQuota:');
    console.log(`  JSearch: ${metrics.quota.jsearch}`);
    console.log('\nDatabase Sizes:');
    console.log(`  current_jobs.json: ${metrics.databases.current_jobs_size}`);
    console.log(`  seen_jobs.json: ${metrics.databases.seen_jobs_size}`);
    console.log(`  pending_posts.json: ${metrics.databases.pending_queue_size}`);

    if (metrics.warnings.length > 0) {
        console.log('\n⚠️  Warnings:');
        metrics.warnings.forEach(w => console.log(`  - ${w}`));
    }

    if (metrics.errors.length > 0) {
        console.log('\n❌ Errors:');
        metrics.errors.forEach(e => console.log(`  - ${e}`));
        process.exit(1);
    }

    console.log('\n================================\n');
}

// Run if called directly
if (require.main === module) {
    generateMetrics();
}

module.exports = { generateMetrics };
