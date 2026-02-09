# Logging Standards

**Version:** 1.0.0
**Last Updated:** 2026-02-08
**Repository:** New-Grad-Jobs-2026

## Overview

This document defines logging standards for the New-Grad-Jobs-2026 repository. All code MUST use the structured logger (`.github/scripts/lib/logger.js`) instead of console methods.

## Logger Location

```javascript
const logger = require('../lib/logger');
```

## Log Levels

### ERROR
**Use for:** Errors that prevent normal operation but don't crash the process

```javascript
logger.error('Message', { context: 'value' });
logger.logError('operationName', error, { additionalContext: 'value' });
```

**Examples:**
- API request failures
- File read/write errors
- Data parsing errors
- Configuration validation failures

### WARN
**Use for:** Issues that don't prevent operation but need attention

```javascript
logger.warn('Message', { context: 'value' });
```

**Examples:**
- Missing optional configuration
- Empty data files
- Fallback behaviors
- Deprecated features

### INFO
**Use for:** High-level operation progress and important state changes

```javascript
logger.info('Message', { context: 'value' });
```

**Examples:**
- Operation start/complete
- Job counts and statistics
- Queue operations
- Pipeline transitions
- Data persistence operations

### DEBUG
**Use for:** Detailed diagnostic information for troubleshooting

```javascript
logger.debug('Message', { context: 'value' });
```

**Examples:**
- Step-by-step processing details
- Data transformation before/after
- Category breakdowns
- Fingerprint matches
- Individual job processing

## Required Logging

### API Operations
ALL API calls must be logged with request/response data:

```javascript
logger.logApiRequest('endpoint-name', { query, page }, { jobCount, success });
```

### Data Transformations
ALL transformations must include before/after counts:

```javascript
logger.info('Filtered healthcare jobs', {
    filtered: filteredCount,
    remaining: remainingCount
});
```

### File Operations
ALL file operations must include paths and sizes:

```javascript
logger.info('Wrote jobs to file', {
    count: jobs.length,
    filePath: '/path/to/file.json'
});
```

### Queue Operations
ALL queue operations must include status breakdowns:

```javascript
logger.info('Queue operation completed', {
    total: queue.length,
    pending: pendingCount,
    enriched: enrichedCount,
    posted: postedCount
});
```

### Job Processing Metrics
Job processing must use the metrics helper:

```javascript
logger.logJobMetrics({
    totalFetched: 100,
    persistedJobs: 50,
    mergedJobs: 120,
    currentJobs: 80,
    freshJobs: 30,
    duplicatesFiltered: 20,
    queueSize: 15
});
```

## Error Handling

### Standard Error Logging
Use `logError` for caught exceptions:

```javascript
try {
    // operation
} catch (error) {
    logger.logError('operationName', error, {
        additionalContext: 'value',
        filePath: '/path/to/file'
    });
}
```

### What to Include in Error Context
- Operation name (function/process)
- File paths (for file operations)
- Job counts (for batch operations)
- API endpoints (for network operations)
- Configuration values (sanitized)

## Structured Context

### DO: Use Structured Data
```javascript
logger.info('Processing batch', {
    batchSize: batch.length,
    pendingInQueue: queue.filter(i => i.status === 'pending').length
});
```

### DON'T: Use String Concatenation
```javascript
// BAD
console.log(`Processing batch of ${batch.length} jobs with ${pendingCount} pending`);

// GOOD
logger.info('Processing batch', {
    batchSize: batch.length,
    pendingCount: pendingCount
});
```

## Specialized Logger Functions

### Request-Specific Logger
For operations with correlation IDs:

```javascript
const requestLogger = logger.createRequestLogger('req-123');
requestLogger.info('Processing request', { data: 'value' });
```

### Job Metrics Logger
For job processing summaries:

```javascript
logger.logJobMetrics({
    totalFetched: 100,
    persistedJobs: 50,
    mergedJobs: 120,
    currentJobs: 80,
    freshJobs: 30,
    duplicatesFiltered: 20,
    queueSize: 15
});
```

### API Request Logger
For external API calls:

```javascript
logger.logApiRequest('jsearch-search', {
    query: 'software engineer',
    page: 1
}, {
    jobCount: 50,
    success: true
});
```

## Migration from console.log

### Replace console.log
```javascript
// BEFORE
console.log('Processing job:', job.title);
console.log(`Found ${jobs.length} jobs`);

// AFTER
logger.info('Processing job', { title: job.title });
logger.info('Jobs found', { count: jobs.length });
```

### Replace console.error
```javascript
// BEFORE
console.error('Failed to fetch jobs:', error.message);
console.error('Stack:', error.stack);

// AFTER
logger.logError('fetchJobs', error);
```

### Replace console.warn
```javascript
// BEFORE
console.warn('No jobs found');

// AFTER
logger.warn('No jobs found');
```

## Environment Variables

### LOG_LEVEL
Controls verbosity. Defaults to `INFO`.

- `ERROR` - Only errors
- `WARN` - Warnings and errors
- `INFO` - Normal operation (default)
- `DEBUG` - Detailed diagnostics

**Usage in GitHub Actions:**
```yaml
env:
  LOG_LEVEL: DEBUG
```

**Usage locally:**
```bash
LOG_LEVEL=DEBUG npm run fetch
```

## Examples by Operation

### Job Fetching
```javascript
logger.info('Starting job fetching...');
logger.info('JSearch quota available', {
    remaining: usage.remaining,
    maxRequests: MAX_REQUESTS_PER_DAY
});
logger.info('JSearch fetch successful', {
    jobsReturned: jobs.length,
    avgJobsPerRequest: avgJobsPerRequest.toFixed(1)
});
```

### Job Processing
```javascript
logger.info('Processing summary', {
    mergedJobs: mergedJobs.length,
    currentJobs: currentJobs.length,
    freshJobs: freshJobs.length
});
logger.info('Marked new jobs as seen', { count: freshJobs.length });
```

### Queue Operations
```javascript
logger.info('Processing job batch', {
    batchSize: batch.length,
    pendingInQueue: queue.filter(i => i.status === 'pending').length
});
logger.info('Fetching job descriptions', { count: needEnrichment.length });
```

### File Operations
```javascript
logger.info('Saved jobs to current_jobs.json', { jobCount: jobs.length });
logger.info('README.md updated with current jobs', {
    jobCount: currentJobs.length,
    filePath: REPO_README_PATH
});
```

### README Generation
```javascript
logger.debug('Starting generateJobTable', { jobCount: jobs.length });
logger.debug('After filtering seniors', { jobCount: jobs.length });
logger.info('Generating README content...');
```

## Audit Checklist

Use this checklist to verify logging compliance:

- [ ] No `console.log` in core scripts (jsearch-source.js, job-processor.js, readme-generator.js)
- [ ] No `console.error` in core scripts
- [ ] All API calls logged with `logApiRequest`
- [ ] All data transformations logged with before/after counts
- [ ] All file operations logged with paths and sizes
- [ ] All queue operations logged with status breakdowns
- [ ] Critical operations use INFO level
- [ ] Debug details use DEBUG level
- [ ] Errors use `logError` helper
- [ ] Structured context objects instead of string formatting

## See Also

- Logger implementation: `.github/scripts/lib/logger.js`
- Configuration: `.github/scripts/config/domain-config.js`
- Error handling: `.github/scripts/src/utils/error-handler.js`
