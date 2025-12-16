#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Discord Posting Result Logger
 * Tracks success/failure/skip for every posting attempt
 */
class DiscordPostLogger {
  constructor() {
    this.posts = [];
  }

  /**
   * Log a successful post
   * @param {Object} job - Job object
   * @param {string} jobId - Generated job ID
   * @param {string} channelId - Discord channel ID
   * @param {string} channelName - Discord channel name
   * @param {string} messageId - Discord message ID (null for forum posts)
   * @param {string} threadId - Discord thread ID (for forum posts)
   * @param {number} duration - Time taken to post (ms)
   */
  logSuccess(job, jobId, channelId, channelName, messageId = null, threadId = null, duration = 0) {
    const entry = {
      timestamp: new Date().toISOString(),
      jobId: jobId,
      company: job.employer_name || job.company,
      title: job.job_title || job.title,
      channel_id: channelId,
      channel_name: channelName,
      status: 'SUCCESS',
      message_id: messageId,
      thread_id: threadId,
      duration_ms: duration
    };

    this.posts.push(entry);
  }

  /**
   * Log a failed post
   * @param {Object} job - Job object
   * @param {string} jobId - Generated job ID
   * @param {string} channelId - Discord channel ID
   * @param {string} channelName - Discord channel name
   * @param {Error} error - Error object
   */
  logFailure(job, jobId, channelId, channelName, error) {
    const entry = {
      timestamp: new Date().toISOString(),
      jobId: jobId,
      company: job.employer_name || job.company,
      title: job.job_title || job.title,
      channel_id: channelId,
      channel_name: channelName,
      status: 'FAILED',
      error_message: error.message,
      error_code: error.code || null,
      error_stack: error.stack ? error.stack.substring(0, 500) : null
    };

    this.posts.push(entry);
  }

  /**
   * Log a skipped post (already posted)
   * @param {Object} job - Job object
   * @param {string} jobId - Generated job ID
   * @param {string} reason - Reason for skipping
   */
  logSkip(job, jobId, reason) {
    const entry = {
      timestamp: new Date().toISOString(),
      jobId: jobId,
      company: job.employer_name || job.company,
      title: job.job_title || job.title,
      status: 'SKIPPED',
      reason: reason
    };

    this.posts.push(entry);
  }

  /**
   * Save logs to JSONL file
   * @param {string} logDir - Directory to save logs
   */
  save(logDir = '.github/logs') {
    if (this.posts.length === 0) {
      return;
    }

    try {
      // Ensure log directory exists
      fs.mkdirSync(logDir, { recursive: true });

      // Use current date for log file name
      const date = new Date().toISOString().split('T')[0];
      const logPath = path.join(logDir, `discord-posts-${date}.jsonl`);

      // Append each entry as a single line (JSONL format)
      const logLines = this.posts.map(entry => JSON.stringify(entry)).join('\n') + '\n';

      // Append to existing file if it exists
      fs.appendFileSync(logPath, logLines, 'utf8');

      const summary = this.getSummary();
      console.log(`\n📝 Discord posting log saved: ${logPath}`);
      console.log(`   Total attempts: ${summary.total}`);
      console.log(`   Successful: ${summary.successful}`);
      console.log(`   Failed: ${summary.failed}`);
      console.log(`   Skipped: ${summary.skipped}`);

    } catch (error) {
      console.error('❌ Error saving Discord posting log:', error.message);
    }
  }

  /**
   * Get summary statistics
   */
  getSummary() {
    return {
      total: this.posts.length,
      successful: this.posts.filter(p => p.status === 'SUCCESS').length,
      failed: this.posts.filter(p => p.status === 'FAILED').length,
      skipped: this.posts.filter(p => p.status === 'SKIPPED').length
    };
  }
}

module.exports = DiscordPostLogger;
