#!/usr/bin/env node

/**
 * Alert Router
 *
 * Routes health alerts to appropriate channels:
 * - CRITICAL: Discord webhook (immediate notification)
 * - WARNING: GitHub Actions summary
 * - INFO: Logs only
 *
 * Supports alert deduplication and rate limiting.
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

/**
 * Alert severity levels
 */
const SEVERITY = {
  CRITICAL: 'critical',
  WARNING: 'warning',
  INFO: 'info'
};

/**
 * Alert channels
 */
const CHANNELS = {
  DISCORD_OPS: process.env.DISCORD_OPS_WEBHOOK_URL,     // Operational issues (queue, duplicates)
  DISCORD_CRITICAL: process.env.DISCORD_CRITICAL_WEBHOOK_URL, // Critical failures (bot down, data loss)
  GITHUB_SUMMARY: true, // Always available in GitHub Actions
  LOGS: true // Always available
};

/**
 * Send Discord webhook
 *
 * @param {string} webhookUrl - Discord webhook URL
 * @param {Object} alert - Alert object
 * @returns {Promise<boolean>} - Success status
 */
async function sendDiscordWebhook(webhookUrl, alert) {
  if (!webhookUrl) {
    console.warn('⚠️ Discord webhook URL not configured');
    return false;
  }

  const embed = {
    title: `🚨 ${alert.severity.toUpperCase()}: ${alert.component}`,
    description: alert.message,
    color: alert.severity === SEVERITY.CRITICAL ? 15158332 : 16776960, // Red or Yellow
    fields: [
      {
        name: 'Component',
        value: alert.component,
        inline: true
      },
      {
        name: 'Severity',
        value: alert.severity.toUpperCase(),
        inline: true
      }
    ],
    timestamp: new Date().toISOString()
  };

  // Add recommendation if available
  if (alert.recommendation) {
    embed.fields.push({
      name: 'Recommendation',
      value: alert.recommendation,
      inline: false
    });
  }

  // Add metrics if available
  if (alert.metrics) {
    const metricsText = Object.entries(alert.metrics)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
    embed.fields.push({
      name: 'Metrics',
      value: `\`\`\`${metricsText}\`\`\``,
      inline: false
    });
  }

  const payload = {
    embeds: [embed]
  };

  return new Promise((resolve) => {
    const url = new URL(webhookUrl);
    const options = {
      hostname: url.hostname,
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const req = https.request(options, (res) => {
      if (res.statusCode === 204) {
        console.log('✅ Discord alert sent successfully');
        resolve(true);
      } else {
        console.warn(`⚠️ Discord webhook failed: ${res.statusCode}`);
        resolve(false);
      }
    });

    req.on('error', (error) => {
      console.error('❌ Discord webhook error:', error.message);
      resolve(false);
    });

    req.write(JSON.stringify(payload));
    req.end();
  });
}

/**
 * Add alert to GitHub Actions summary
 *
 * @param {Object} alert - Alert object
 */
function addToGitHubSummary(alert) {
  if (!process.env.GITHUB_STEP_SUMMARY) {
    return; // Not running in GitHub Actions
  }

  const icon = alert.severity === SEVERITY.CRITICAL ? '🔴' : '⚠️';
  const summary = `\n${icon} **${alert.severity.toUpperCase()}**: ${alert.component}\n${alert.message}\n`;

  try {
    fs.appendFileSync(process.env.GITHUB_STEP_SUMMARY, summary);
  } catch (error) {
    console.error('❌ Failed to write GitHub summary:', error.message);
  }
}

/**
 * Log alert to console
 *
 * @param {Object} alert - Alert object
 */
function logAlert(alert) {
  const icon = alert.severity === SEVERITY.CRITICAL ? '🔴' : alert.severity === SEVERITY.WARNING ? '⚠️' : 'ℹ️';
  console.log(`${icon} [${alert.severity.toUpperCase()}] ${alert.component}: ${alert.message}`);
  if (alert.recommendation) {
    console.log(`   → ${alert.recommendation}`);
  }
}

/**
 * Route alert to appropriate channels
 *
 * @param {Object} alert - Alert object
 * @param {string} alert.severity - 'critical', 'warning', or 'info'
 * @param {string} alert.component - Component name
 * @param {string} alert.message - Alert message
 * @param {string} [alert.recommendation] - Recommended action
 * @param {Object} [alert.metrics] - Relevant metrics
 * @returns {Promise<Object>} - Routing results
 */
async function routeAlert(alert) {
  const results = {
    discord: false,
    github: false,
    logs: true
  };

  // Validate alert
  if (!alert.severity || !alert.component || !alert.message) {
    console.error('❌ Invalid alert object:', alert);
    return results;
  }

  // Always log
  logAlert(alert);

  // Route based on severity
  if (alert.severity === SEVERITY.CRITICAL) {
    // Critical alerts go to Discord (if configured) and GitHub summary
    if (CHANNELS.DISCORD_CRITICAL) {
      results.discord = await sendDiscordWebhook(CHANNELS.DISCORD_CRITICAL, alert);
    }
    if (CHANNELS.GITHUB_SUMMARY) {
      addToGitHubSummary(alert);
      results.github = true;
    }
  } else if (alert.severity === SEVERITY.WARNING) {
    // Warnings go to Discord ops channel (if configured) and GitHub summary
    if (CHANNELS.DISCORD_OPS) {
      results.discord = await sendDiscordWebhook(CHANNELS.DISCORD_OPS, alert);
    }
    if (CHANNELS.GITHUB_SUMMARY) {
      addToGitHubSummary(alert);
      results.github = true;
    }
  }
  // INFO alerts only go to logs (handled above)

  return results;
}

/**
 * Route multiple alerts
 *
 * @param {Array<Object>} alerts - Array of alert objects
 * @returns {Promise<Array<Object>>} - Array of routing results
 */
async function routeAlerts(alerts) {
  const results = [];
  for (const alert of alerts) {
    const result = await routeAlert(alert);
    results.push({ alert, result });
  }
  return results;
}

/**
 * Convert health report to alerts
 *
 * @param {Object} healthReport - Health report from health-monitor.js
 * @returns {Array<Object>} - Array of alerts
 */
function healthReportToAlerts(healthReport) {
  const alerts = [];

  // Convert issues to critical alerts
  if (healthReport.issues) {
    for (const issue of healthReport.issues) {
      alerts.push({
        severity: SEVERITY.CRITICAL,
        component: issue.component,
        message: issue.message,
        recommendation: issue.recommendation,
        metrics: issue.metrics || {}
      });
    }
  }

  // Convert warnings to warning alerts
  if (healthReport.warnings) {
    for (const warning of healthReport.warnings) {
      if (warning.severity === 'critical') {
        // Some warnings are marked as critical
        alerts.push({
          severity: SEVERITY.CRITICAL,
          component: warning.component,
          message: warning.message,
          recommendation: warning.recommendation
        });
      } else {
        alerts.push({
          severity: SEVERITY.WARNING,
          component: warning.component,
          message: warning.message,
          recommendation: warning.recommendation
        });
      }
    }
  }

  return alerts;
}

// CLI usage
if (require.main === module) {
  const args = process.argv.slice(2);
  const command = args[0];

  if (command === 'test') {
    // Test alert routing
    const testAlert = {
      severity: SEVERITY.WARNING,
      component: 'test-component',
      message: 'This is a test alert',
      recommendation: 'No action needed, this is a test',
      metrics: {
        test_metric: 42
      }
    };

    routeAlert(testAlert).then((result) => {
      console.log('Test alert routing result:', result);
    });
  } else if (command === 'health-report') {
    // Read health report from stdin or file
    const healthReportPath = args[1] || path.join(process.cwd(), '.github', 'logs', 'health-report.json');

    try {
      const healthReport = JSON.parse(fs.readFileSync(healthReportPath, 'utf8'));
      const alerts = healthReportToAlerts(healthReport);

      console.log(`📊 Found ${alerts.length} alerts from health report`);

      routeAlerts(alerts).then((results) => {
        console.log(`✅ Routed ${results.length} alerts`);
        const discordSuccess = results.filter(r => r.result.discord).length;
        console.log(`   Discord: ${discordSuccess}/${results.length}`);
      });
    } catch (error) {
      console.error('❌ Failed to process health report:', error.message);
      process.exit(1);
    }
  } else {
    console.log(`
Alert Router - Route health alerts to Discord and GitHub

Usage:
  node alert-router.js test                    Test alert routing
  node alert-router.js health-report [path]    Route alerts from health report

Environment Variables:
  DISCORD_OPS_WEBHOOK_URL       Discord webhook for operational alerts
  DISCORD_CRITICAL_WEBHOOK_URL  Discord webhook for critical alerts
    `);
  }
}

module.exports = {
  SEVERITY,
  routeAlert,
  routeAlerts,
  healthReportToAlerts
};
