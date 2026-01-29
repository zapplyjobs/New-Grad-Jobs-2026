/**
 * Centralized Error Handling
 * Provides retry logic and graceful error handling for external API calls
 */

/**
 * Retry a function with exponential backoff
 * @param {Function} fn - Async function to retry
 * @param {Object} options - Retry options
 * @returns {Promise} Result of function
 */
async function retryWithBackoff(fn, options = {}) {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    maxDelay = 10000,
    factor = 2,
    onRetry = null
  } = options;

  let lastError;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;

      if (attempt === maxRetries) {
        break; // Last attempt failed, throw error
      }

      // Check for Discord rate limit with retry_after
      let delay;
      if (error.code === 429 && error.retry_after) {
        // Discord rate limit - use retry_after (in seconds, convert to ms)
        delay = Math.ceil(error.retry_after * 1000) + 100; // Add 100ms buffer
        console.log(`⏳ Discord rate limited, waiting ${delay}ms (retry_after: ${error.retry_after}s)`);
      } else {
        // Calculate delay with exponential backoff
        delay = Math.min(initialDelay * Math.pow(factor, attempt), maxDelay);
      }

      // Call retry callback if provided
      if (onRetry) {
        onRetry(error, attempt + 1, delay);
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }

  throw lastError;
}

/**
 * Check if error is retryable
 * @param {Error} error - Error to check
 * @returns {boolean} True if error is retryable
 */
function isRetryableError(error) {
  // Network errors
  if (error.code === 'ECONNRESET' || error.code === 'ETIMEDOUT' || error.code === 'ENOTFOUND') {
    return true;
  }

  // Discord rate limits (429) - check multiple possible locations
  if (error.code === 429 || error.status === 429 || error.httpStatus === 429) {
    return true;
  }

  // Server errors (500, 502, 503, 504)
  if (error.status >= 500 || error.httpStatus >= 500) {
    return true;
  }

  return false;
}

/**
 * Wrapper for Discord API calls with retry logic
 * @param {Function} apiCall - Discord API call function
 * @param {string} context - Description of the call for logging
 * @returns {Promise} Result of API call
 */
async function discordApiCall(apiCall, context = 'Discord API call') {
  return retryWithBackoff(apiCall, {
    maxRetries: 3,
    initialDelay: 1000,
    onRetry: (error, attempt, delay) => {
      console.warn(`⚠️ ${context} failed (attempt ${attempt}/3): ${error.message}`);
      console.warn(`   Retrying in ${delay}ms...`);
    }
  });
}

/**
 * Log error with context
 * @param {Error} error - Error to log
 * @param {string} context - Context information
 */
function logError(error, context = '') {
  console.error('='.repeat(60));
  console.error(`❌ ERROR: ${context}`);
  console.error('='.repeat(60));
  console.error('Message:', error.message);
  if (error.stack) {
    console.error('Stack:', error.stack);
  }
  console.error('='.repeat(60));
}

module.exports = {
  retryWithBackoff,
  isRetryableError,
  discordApiCall,
  logError
};
