# Error Handling Standards

## Overview

This document defines the standardized error handling patterns for all scripts in the New-Grad-Jobs-2026 repository. Following these standards ensures consistent error reporting, easier debugging, and better observability.

## Core Error Handling Utilities

### Logger (`../lib/logger`)

The structured logger provides consistent log formatting with timestamps and log levels.

```javascript
const logger = require('../lib/logger');

// Log levels
logger.error(message, context);  // For errors that need attention
logger.warn(message, context);   // For warnings that don't stop execution
logger.info(message, context);   // For informational messages
logger.debug(message, context);  // For debugging information

// Specialized logging
logger.logError(operation, error, context);  // Log errors with operation name and context
logger.logApiRequest(endpoint, params, result);  // Log API requests
```

### Error Handler (`../src/utils/error-handler`)

The error handler provides retry logic and Discord API-specific error handling.

```javascript
const { retryWithBackoff, isRetryableError, discordApiCall, logError } = require('../src/utils/error-handler');

// Retry with exponential backoff
await retryWithBackoff(async () => {
    // Your async operation here
}, {
    maxRetries: 3,
    initialDelay: 1000,
    maxDelay: 10000,
    factor: 2,
    onRetry: (error, attempt, delay) => {
        logger.warn(`Retry attempt ${attempt}`, { error: error.message, delay });
    }
});

// Check if error is retryable
if (isRetryableError(error)) {
    // Retry the operation
}

// Discord API calls with built-in retry
await discordApiCall(async () => {
    return await discordChannel.send(...);
}, 'Send Discord message');

// Basic error logging (fallback)
logError(error, 'Operation description');
```

## Error Handling Patterns

### Pattern 1: File Operations with Atomic Writes

Always use atomic writes for file operations to prevent corruption if the process is killed mid-write.

```javascript
function saveData(data, filePath) {
    try {
        // Ensure directory exists
        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        // Atomic write: write to temp file then rename
        const tempPath = `${filePath}.tmp`;
        fs.writeFileSync(tempPath, JSON.stringify(data, null, 2), 'utf8');
        fs.renameSync(tempPath, filePath);

        logger.info(`Data saved successfully`, { filePath, itemCount: data.length });

    } catch (error) {
        logger.logError('saveData', error, { filePath, itemCount: data.length });

        // Clean up temp file if it exists
        if (fs.existsSync(tempPath)) {
            try {
                fs.unlinkSync(tempPath);
            } catch (cleanupError) {
                logger.warn('Could not clean up temp file', { error: cleanupError.message });
            }
        }

        throw error; // Re-throw to stop execution
    }
}
```

### Pattern 2: Data Loading with Graceful Degradation

When loading optional data, always provide sensible defaults if the file is missing or corrupted.

```javascript
function loadData(filePath) {
    try {
        if (!fs.existsSync(filePath)) {
            logger.info('No existing data file found - starting fresh', { filePath });
            return {}; // Return default value
        }

        const fileContent = fs.readFileSync(filePath, 'utf8');
        if (!fileContent.trim()) {
            logger.warn('Empty data file - starting fresh', { filePath });
            return {}; // Return default value
        }

        const data = JSON.parse(fileContent);
        logger.info('Data loaded successfully', { filePath, itemCount: data.length });
        return data;

    } catch (error) {
        logger.logError('loadData', error, { filePath });

        // Create backup of corrupted file
        try {
            const backupPath = `${filePath}.backup.${Date.now()}`;
            fs.copyFileSync(filePath, backupPath);
            logger.info('Backup created', { backupPath });
        } catch (backupError) {
            logger.warn('Could not create backup', { error: backupError.message });
        }

        return {}; // Return default value
    }
}
```

### Pattern 3: API Calls with Structured Error Context

Always include relevant context when logging API errors.

```javascript
async function fetchFromAPI(query, params) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        });

        if (!response.ok) {
            logger.error('API request failed', {
                status: response.status,
                statusText: response.statusText,
                query: query,
                params: params
            });
            return [];
        }

        const data = await response.json();
        logger.info('API request successful', {
            query: query,
            itemCount: data.length
        });

        return data;

    } catch (error) {
        logger.logError('fetchFromAPI', error, { query, params });
        return []; // Return empty array on error
    }
}
```

### Pattern 4: Job Processing Errors

When processing individual jobs, log errors but continue processing other jobs.

```javascript
const processedJobs = jobs.map(job => {
    try {
        return processJob(job);
    } catch (error) {
        logger.logError('processJob', error, {
            jobTitle: job.job_title,
            employer: job.employer_name,
            jobId: job.id
        });
        return null; // Skip this job
    }
}).filter(job => job !== null);
```

## Required Error Context Fields

When logging errors, always include relevant context fields:

### File Operations
- `filePath` - Path to the file being accessed
- `fileSize` - Size of the file (if applicable)
- `operation` - Type of operation (read/write/delete)

### API Calls
- `endpoint` - API endpoint being called
- `status` - HTTP status code
- `query` - Query parameters
- `params` - Request parameters
- `jobCount` - Number of jobs affected

### Job Processing
- `jobId` - Unique job identifier
- `jobTitle` - Job title
- `employer` - Company/employer name
- `operation` - Type of processing operation

### Data Operations
- `itemCount` - Number of items being processed
- `invalidCount` - Number of invalid items
- `duplicateCount` - Number of duplicates found

## When to Use handleError vs throw

### Use `logger.logError()` and Continue (Recoverable Errors)
- Missing or empty data files (return default value)
- Invalid individual job entries (filter them out)
- Non-critical API failures (return empty array)
- Description fetching failures (mark as failed but continue)

### Use `throw` (Critical Errors)
- Database connection failures
- Required configuration missing
- File system permissions errors
- Corrupted data that cannot be recovered

## Examples of Correct Usage

### Example 1: Loading Configuration
```javascript
function loadConfig() {
    try {
        if (!fs.existsSync(CONFIG_FILE)) {
            logger.warn('Config file not found, using defaults', { configFile: CONFIG_FILE });
            return DEFAULT_CONFIG;
        }

        const config = JSON.parse(fs.readFileSync(CONFIG_FILE, 'utf8'));
        logger.info('Configuration loaded', { configFile: CONFIG_FILE });
        return config;

    } catch (error) {
        logger.logError('loadConfig', error, { configFile: CONFIG_FILE });
        return DEFAULT_CONFIG; // Use defaults on error
    }
}
```

### Example 2: API Call with Retry
```javascript
async function fetchJobsWithRetry(query) {
    try {
        return await retryWithBackoff(async () => {
            const response = await fetch(buildUrl(query));
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            return await response.json();
        }, {
            maxRetries: 3,
            onRetry: (error, attempt, delay) => {
                logger.warn(`Retrying fetchJobs (attempt ${attempt})`, {
                    error: error.message,
                    delay,
                    query
                });
            }
        });
    } catch (error) {
        logger.logError('fetchJobsWithRetry', error, { query });
        return [];
    }
}
```

### Example 3: Processing Batch Jobs
```javascript
async function processJobBatch(jobs) {
    const results = {
        successful: 0,
        failed: 0,
        errors: []
    };

    for (const job of jobs) {
        try {
            await processJob(job);
            results.successful++;
        } catch (error) {
            results.failed++;
            logger.logError('processJobBatch:item', error, {
                jobTitle: job.job_title,
                employer: job.employer_name
            });
        }
    }

    logger.info('Batch processing complete', {
        total: jobs.length,
        successful: results.successful,
        failed: results.failed
    });

    return results;
}
```

## Anti-Patterns to Avoid

### Don't Use console.error Directly
```javascript
// BAD
console.error('Error:', error.message);

// GOOD
logger.logError('operationName', error, { context });
```

### Don't Swallow Errors Without Logging
```javascript
// BAD
try {
    await riskyOperation();
} catch (error) {
    // Silent failure
}

// GOOD
try {
    await riskyOperation();
} catch (error) {
    logger.logError('riskyOperation', error);
    throw error; // Re-throw if critical
}
```

### Don't Use Generic Error Messages
```javascript
// BAD
logger.error('An error occurred');

// GOOD
logger.error('Failed to save jobs to database', {
    jobCount: jobs.length,
    databasePath: dbPath,
    error: error.message
});
```

## Verification Checklist

Before committing code changes, verify:

- [ ] No `console.error()` calls in production code (use `logger.logError()`)
- [ ] No `console.log()` calls for error messages (use `logger.error()`)
- [ ] All errors include operation name and relevant context
- [ ] File operations use atomic writes (temp file + rename)
- [ ] API calls include structured error context (status, query, params)
- [ ] Missing/empty data files return sensible defaults
- [ ] Critical errors are re-thrown after logging
- [ ] Recoverable errors are logged but don't stop execution

## Related Documentation

- [Logger Documentation](../lib/logger.js)
- [Error Handler Documentation](../src/utils/error-handler.js)
- [Configuration Management](../config/domain-config.js)
