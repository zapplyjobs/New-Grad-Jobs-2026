#!/usr/bin/env node

/**
 * File I/O Utilities
 *
 * Eliminates duplicate file loading patterns found in 5+ scripts:
 * - health-monitor.js (loadJSON)
 * - daily-stats.js (loadPreviousData, saveDailyData)
 * - weekly-summary.js (loadPreviousWeekData, saveWeeklyData)
 * - job-processor.js (loadPendingQueue, savePendingQueue)
 * - Multiple scripts with fs.readFileSync + JSON.parse pattern
 */

const fs = require('fs');
const path = require('path');

/**
 * Load JSON file with error handling
 * @param {string} filePath - Path to JSON file
 * @param {*} defaultValue - Value to return if file doesn't exist or is invalid (default: null)
 * @returns {*} - Parsed JSON or defaultValue
 */
function loadJSON(filePath, defaultValue = null) {
  try {
    if (!fs.existsSync(filePath)) {
      return defaultValue;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Handle empty files
    if (!content || content.trim() === '') {
      return defaultValue;
    }

    return JSON.parse(content);
  } catch (error) {
    console.error(`Failed to load ${filePath}: ${error.message}`);
    return defaultValue;
  }
}

/**
 * Save JSON file with atomic writes
 * @param {string} filePath - Path to save JSON file
 * @param {*} data - Data to save (will be JSON.stringify'd)
 * @param {boolean} atomic - Use atomic write (write to temp, then rename) - default: true
 */
function saveJSON(filePath, data, atomic = true) {
  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    const content = JSON.stringify(data, null, 2);

    if (atomic) {
      // Atomic write: write to temp file, then rename
      const tempPath = `${filePath}.tmp`;
      fs.writeFileSync(tempPath, content, 'utf8');
      fs.renameSync(tempPath, filePath);
    } else {
      // Direct write
      fs.writeFileSync(filePath, content, 'utf8');
    }

    return true;
  } catch (error) {
    console.error(`Failed to save ${filePath}: ${error.message}`);
    return false;
  }
}

/**
 * Load queue file (pending_posts.json or similar)
 * @param {string} queueType - Queue type ('pending', 'enriched', 'failed')
 * @param {string} customPath - Optional custom path (default: .github/data/{queueType}_posts.json)
 * @returns {Array} - Queue array or empty array
 */
function loadQueue(queueType = 'pending', customPath = null) {
  const queuePath = customPath || path.join(
    process.cwd(),
    '.github',
    'data',
    `${queueType}_posts.json`
  );

  return loadJSON(queuePath, []);
}

/**
 * Save queue file with atomic write
 * @param {string} queueType - Queue type ('pending', 'enriched', 'failed')
 * @param {Array} data - Queue data array
 * @param {string} customPath - Optional custom path
 */
function saveQueue(queueType, data, customPath = null) {
  const queuePath = customPath || path.join(
    process.cwd(),
    '.github',
    'data',
    `${queueType}_posts.json`
  );

  return saveJSON(queuePath, data, true); // Always atomic for queues
}

/**
 * Check if file exists
 * @param {string} filePath - Path to check
 * @returns {boolean}
 */
function fileExists(filePath) {
  return fs.existsSync(filePath);
}

/**
 * Get file size in bytes
 * @param {string} filePath - Path to file
 * @returns {number} - Size in bytes, or -1 if error
 */
function getFileSize(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return -1;
    }
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return -1;
  }
}

/**
 * Create backup of file
 * @param {string} filePath - File to backup
 * @param {string} backupSuffix - Suffix for backup (default: timestamp)
 * @returns {string|null} - Backup file path or null if failed
 */
function backupFile(filePath, backupSuffix = null) {
  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const suffix = backupSuffix || new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = `${filePath}.backup-${suffix}`;

    fs.copyFileSync(filePath, backupPath);
    return backupPath;
  } catch (error) {
    console.error(`Failed to backup ${filePath}: ${error.message}`);
    return null;
  }
}

/**
 * Append to JSONL (JSON Lines) file
 * Used for time-series metrics storage
 * @param {string} filePath - Path to JSONL file
 * @param {Object} entry - Entry to append
 */
function appendJSONL(filePath, entry) {
  try {
    // Ensure directory exists
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });

    const line = JSON.stringify(entry) + '\n';
    fs.appendFileSync(filePath, line, 'utf8');
    return true;
  } catch (error) {
    console.error(`Failed to append to ${filePath}: ${error.message}`);
    return false;
  }
}

/**
 * Read JSONL file and parse all entries
 * @param {string} filePath - Path to JSONL file
 * @param {number} limit - Max entries to return (default: all)
 * @returns {Array} - Array of parsed entries
 */
function readJSONL(filePath, limit = Infinity) {
  try {
    if (!fs.existsSync(filePath)) {
      return [];
    }

    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.trim().split('\n');

    const entries = [];
    for (let i = 0; i < Math.min(lines.length, limit); i++) {
      if (lines[i].trim()) {
        try {
          entries.push(JSON.parse(lines[i]));
        } catch (parseError) {
          console.error(`Failed to parse line ${i + 1} in ${filePath}`);
        }
      }
    }

    return entries;
  } catch (error) {
    console.error(`Failed to read ${filePath}: ${error.message}`);
    return [];
  }
}

module.exports = {
  loadJSON,
  saveJSON,
  loadQueue,
  saveQueue,
  fileExists,
  getFileSize,
  backupFile,
  appendJSONL,
  readJSONL
};
