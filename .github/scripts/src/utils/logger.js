#!/usr/bin/env node

/**
 * Unified Logger
 *
 * Replaces 3 separate logger classes (RoutingLogger, DiscordPostLogger, DeduplicationLogger)
 * with a single abstraction.
 *
 * Usage:
 *   const logger = new Logger('routing', { encrypted: true });
 *   logger.log('routing_decision', { job, category, channel });
 *   logger.save();
 */

const fs = require('fs');
const path = require('path');

class Logger {
  /**
   * Create a new logger
   * @param {string} logType - Type of log ('routing', 'posting', 'deduplication', 'stats')
   * @param {Object} options - Configuration options
   * @param {boolean} options.encrypted - Whether to encrypt log output
   * @param {string} options.outputPath - Custom output path (default: .github/audit/{logType}.json)
   * @param {boolean} options.consoleOutput - Enable console logging (default: true)
   */
  constructor(logType, options = {}) {
    this.logType = logType;
    this.entries = [];
    this.encrypted = options.encrypted || false;
    this.consoleOutput = options.consoleOutput !== false;

    // Default output path
    if (options.outputPath) {
      this.outputPath = options.outputPath;
    } else {
      const auditDir = path.join(process.cwd(), '.github', 'audit');
      this.outputPath = path.join(auditDir, `${logType}-log.json`);
    }
  }

  /**
   * Log an event
   * @param {string} eventType - Type of event being logged
   * @param {Object} data - Event data
   */
  log(eventType, data) {
    const entry = {
      timestamp: new Date().toISOString(),
      event_type: eventType,
      ...data
    };

    this.entries.push(entry);

    // Console output if enabled
    if (this.consoleOutput) {
      this._logToConsole(eventType, data);
    }
  }

  /**
   * Format console output based on event type
   * @private
   */
  _logToConsole(eventType, data) {
    if (eventType === 'routing_decision') {
      console.log(`📍 [ROUTING] "${data.job_title}" @ ${data.company}`);
      console.log(`   Category: ${data.category} ${data.matched_keyword ? `(matched: "${data.matched_keyword}")` : '(default)'}`);
      console.log(`   Channel: ${data.channel_name}`);
      if (data.location_channel_name) {
        console.log(`   Location: ${data.location_channel_name}`);
      }
    } else if (eventType === 'post_success') {
      console.log(`✅ [POST] Posted "${data.title}" to ${data.channel_name}`);
    } else if (eventType === 'post_failure') {
      console.log(`❌ [POST] Failed to post "${data.title}" to ${data.channel_name}: ${data.error_message}`);
    } else if (eventType === 'duplicate_detected') {
      console.log(`🔄 [DEDUP] Duplicate detected: "${data.title}" @ ${data.company}`);
    } else {
      console.log(`[${this.logType.toUpperCase()}] ${eventType}:`, data);
    }
  }

  /**
   * Save log to file
   * @param {string} password - Optional encryption password (if encrypted: true)
   */
  save(password = null) {
    if (this.entries.length === 0) {
      if (this.consoleOutput) {
        console.log(`ℹ️ No ${this.logType} entries to save`);
      }
      return;
    }

    // Ensure directory exists
    const dir = path.dirname(this.outputPath);
    fs.mkdirSync(dir, { recursive: true });

    let content;
    if (this.encrypted && password) {
      // Use encryption if enabled
      const { encryptLog } = require('../../encryption-utils');
      content = encryptLog(JSON.stringify(this.entries, null, 2), password);
    } else {
      content = JSON.stringify(this.entries, null, 2);
    }

    fs.writeFileSync(this.outputPath, content, 'utf8');

    if (this.consoleOutput) {
      console.log(`✅ Saved ${this.entries.length} ${this.logType} entries to ${this.outputPath}`);
    }
  }

  /**
   * Get summary statistics
   * @returns {Object} Summary stats
   */
  getSummary() {
    const summary = {
      log_type: this.logType,
      total_entries: this.entries.length,
      timestamp: new Date().toISOString()
    };

    // Type-specific summaries
    if (this.logType === 'posting') {
      const successes = this.entries.filter(e => e.status === 'SUCCESS').length;
      const failures = this.entries.filter(e => e.status === 'FAILED').length;
      const skipped = this.entries.filter(e => e.status === 'SKIPPED').length;

      summary.successes = successes;
      summary.failures = failures;
      summary.skipped = skipped;
      summary.success_rate = this.entries.length > 0
        ? ((successes / this.entries.length) * 100).toFixed(2) + '%'
        : '0%';
    } else if (this.logType === 'routing') {
      const categories = {};
      this.entries.forEach(e => {
        categories[e.category] = (categories[e.category] || 0) + 1;
      });
      summary.categories = categories;
    }

    return summary;
  }

  /**
   * Clear all entries
   */
  clear() {
    this.entries = [];
  }
}

module.exports = Logger;
