#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Deduplication Decision Logger
 * Tracks every duplicate check with decision (SKIP or POST)
 */
class DeduplicationLogger {
  constructor() {
    this.checks = [];
  }

  /**
   * Log a duplicate check decision
   * @param {Object} job - Job object being checked
   * @param {string} jobId - Generated job ID
   * @param {boolean} isDuplicate - Whether job is a duplicate
   * @param {string} firstSeen - When job was first seen (if duplicate)
   * @param {string} reason - Reason for duplicate (posted_jobs, seen_jobs, queue)
   */
  logCheck(job, jobId, isDuplicate, firstSeen = null, reason = null) {
    const entry = {
      timestamp: new Date().toISOString(),
      jobId: jobId,
      company: job.employer_name || job.company,
      title: job.job_title || job.title,
      isDuplicate: isDuplicate,
      decision: isDuplicate ? 'SKIP' : 'POST',
      reason: reason,
      firstSeen: firstSeen
    };

    this.checks.push(entry);

    // Log to console for immediate visibility
    if (isDuplicate) {
      console.log(`⏭️  [DEDUP SKIP] ${entry.company} - ${entry.title} (${reason})`);
    }
  }

  /**
   * Save logs to JSONL file (one entry per line)
   * @param {string} logDir - Directory to save logs
   */
  save(logDir = '.github/logs') {
    if (this.checks.length === 0) {
      return;
    }

    try {
      // Ensure log directory exists
      fs.mkdirSync(logDir, { recursive: true });

      // Use current date for log file name
      const date = new Date().toISOString().split('T')[0];
      const logPath = path.join(logDir, `dedup-checks-${date}.jsonl`);

      // Append each entry as a single line (JSONL format)
      const logLines = this.checks.map(entry => JSON.stringify(entry)).join('\n') + '\n';

      // Append to existing file if it exists
      fs.appendFileSync(logPath, logLines, 'utf8');

      console.log(`\n📝 Deduplication log saved: ${logPath}`);
      console.log(`   Total checks: ${this.checks.length}`);
      console.log(`   Duplicates: ${this.checks.filter(c => c.isDuplicate).length}`);
      console.log(`   New jobs: ${this.checks.filter(c => !c.isDuplicate).length}`);

    } catch (error) {
      console.error('❌ Error saving deduplication log:', error.message);
    }
  }

  /**
   * Get summary statistics
   */
  getSummary() {
    const duplicates = this.checks.filter(c => c.isDuplicate).length;
    const newJobs = this.checks.filter(c => !c.isDuplicate).length;

    return {
      total: this.checks.length,
      duplicates: duplicates,
      newJobs: newJobs,
      duplicateRate: this.checks.length > 0 ? (duplicates / this.checks.length * 100).toFixed(1) : 0
    };
  }
}

module.exports = DeduplicationLogger;
