# Template Usage Guide

**Created:** 2026-02-08
**Purpose:** Complete guide for using the New-Grad-Jobs-2026 template
**Version:** 2.0.0

---

## Overview

This repository is a fully-automated job board template that fetches jobs from multiple ATS systems, posts them to Discord channels, and monitors system health. This guide explains how to use and customize the template for your needs.

### What This Template Provides

- Automated job fetching from 9+ ATS systems (Greenhouse, Lever, Ashby, Workday, etc.)
- Multi-channel Discord integration with smart routing
- Board types system for easy configuration
- Health monitoring and auto-remediation
- Metrics collection and alerting
- Comprehensive testing infrastructure
- GitHub Actions workflows for CI/CD

### Target Use Cases

- New graduate job boards
- Internship job boards
- Remote job boards
- Industry-specific job boards
- Location-specific job boards

---

## Quick Start

### 1. Create Your Repository

Use this template to create a new repository:

1. Click "Use this template" button
2. Name your repository
3. Clone locally: `git clone https://github.com/your-username/your-repo.git`
4. Navigate: `cd your-repo`

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Board Type

Edit `.github/scripts/src/discord/config.js`:

```javascript
const { BOARD_TYPES, generateLegacyConfig } = require('../board-types');

// Choose: NEW_GRAD, INTERNSHIPS, or REMOTE
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.NEW_GRAD);

module.exports = {
  CHANNEL_CONFIG,
  LOCATION_CHANNEL_CONFIG
};
```

### 4. Set Environment Variables

Add secrets to GitHub (Settings > Secrets > Actions):

```bash
DISCORD_TOKEN=your_bot_token
DISCORD_GUILD_ID=your_guild_id
DISCORD_CLIENT_ID=your_client_id
```

Plus board-type specific secrets (run `getRequiredEnvVars()` to see requirements).

### 5. Enable GitHub Actions

1. Go to Actions tab
2. Enable workflows
3. Verify workflows run successfully

---

## Board Types System

### Overview

The board types system provides portable configuration templates for different job board types:

| Board Type | Use Case | Industry Channels | Location Channels | Mode |
|-----------|----------|-------------------|-------------------|------|
| NEW_GRAD | Entry-level positions | 4 (consolidated) | 5 (consolidated) | Environment variables |
| INTERNSHIPS | Student internships | 11 (full spread) | 15 (full spread) | Environment variables |
| REMOTE | Remote-only jobs | 11 (auto-discover) | 12 (auto-discover) | Discovery |

### Using Board Types

```javascript
const { BOARD_TYPES, generateLegacyConfig, getRequiredEnvVars, getBoardConfig } = require('./src/board-types');

// Get configuration for a board type
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.NEW_GRAD);

// Get required environment variables
const envVars = getRequiredEnvVars(BOARD_TYPES.NEW_GRAD);
console.log(envVars);
// Output: [
//   { envVar: 'DISCORD_AI_CHANNEL_ID', description: 'AI & ML roles' },
//   { envVar: 'DISCORD_DATA_SCIENCE_CHANNEL_ID', description: 'Data Science roles' },
//   ...
// ]

// Get board configuration details
const config = getBoardConfig(BOARD_TYPES.NEW_GRAD);
console.log(config.name);  // "New Grad Jobs 2026"
console.log(config.industryChannels.length);  // 4
```

### Creating Custom Board Types

To create a custom board type (e.g., for contract jobs):

1. Add to `src/board-types.js`:

```javascript
const BOARD_TYPES = {
  NEW_GRAD: 'new_grad',
  INTERNSHIPS: 'internships',
  REMOTE: 'remote',
  CONTRACTING: 'contracting'  // Add new type
};

const BOARD_CONFIGS = {
  // ... existing configs
  [BOARD_TYPES.CONTRACTING]: {
    name: 'Contract Jobs 2026',
    description: 'Contract and freelance positions',
    channelMode: 'env',
    channelType: 'text',
    envPrefix: 'DISCORD',

    industryChannels: [
      {
        key: 'tech',
        envVar: 'DISCORD_CONTRACT_TECH_CHANNEL_ID',
        description: 'Contract tech roles'
      },
      {
        key: 'design',
        envVar: 'DISCORD_CONTRACT_DESIGN_CHANNEL_ID',
        description: 'Contract design roles'
      }
      // ... more channels
    ],

    locationChannels: [
      {
        key: 'remote',
        envVar: 'DISCORD_CONTRACT_REMOTE_CHANNEL_ID',
        description: 'Remote contract roles'
      }
      // ... more locations
    ],

    categoryChannels: []
  }
};
```

2. Use in config.js:

```javascript
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.CONTRACTING);
```

---

## Customization Options

### Customizing Job Sources

Edit `.github/scripts/job-fetcher/sources/index.js`:

```javascript
const SOURCES = [
  {
    name: 'greenhouse',
    enabled: true,
    companies: ['meta', 'google', 'amazon', 'stripe']
  },
  {
    name: 'lever',
    enabled: true,
    companies: ['spotify', 'airbnb', 'netflix']
  },
  {
    name: 'ashby',
    enabled: false  // Disable if not needed
  }
];
```

### Customizing Job Filters

Edit `.github/scripts/src/filters/job-filters.js`:

```javascript
// Blacklist certain job types
const JOB_BLACKLIST = [
  'senior', 'principal', 'manager', 'director',
  '5+ years', '10+ years', '15+ years'
];

// Whitelist certain experience levels
const EXPERIENCE_WHITELIST = [
  'entry level', 'new grad', 'junior', 'associate',
  'intern', 'internship', 'co-op'
];
```

### Customizing Routing Logic

Edit `.github/scripts/src/routing/router.js`:

```javascript
// Add custom routing patterns
function isCustomRole(title) {
  const patterns = [
    /product\s*manager/i,
    /project\s*manager/i,
    /program\s*manager/i
  ];
  return patterns.some(pattern => pattern.test(title));
}
```

### Customizing Discord Embeds

Edit `.github/scripts/src/discord/poster.js`:

```javascript
function buildJobEmbed(job, channelName) {
  return {
    title: job.title,
    description: job.description,
    url: job.url,
    color: 0x00FF00,  // Custom color
    fields: [
      {
        name: 'Company',
        value: job.company,
        inline: true
      },
      {
        name: 'Location',
        value: job.location,
        inline: true
      }
      // Add custom fields
    ],
    footer: {
      text: 'Custom footer text'
    }
  };
}
```

---

## GitHub Actions Workflows

### Available Workflows

| Workflow | Purpose | Schedule |
|----------|---------|----------|
| update-jobs.yml | Fetch new jobs | Every 30 minutes |
| post-jobs.yml | Post jobs to Discord | Every 30 minutes |
| daily-health-report.yml | System health monitoring | Every 6 hours |
| archive-old-metrics.yml | Archive old metrics | Weekly (Sunday 2 AM) |
| validate-json.yml | Validate data files | On push |

### Customizing Workflow Triggers

Edit workflow YAML files:

```yaml
name: Custom Job Fetch
on:
  schedule:
    - cron: '0 */2 * * *'  # Every 2 hours
  workflow_dispatch:  # Allow manual trigger
    inputs:
      source:
        description: 'Job source to fetch'
        required: true
        default: 'greenhouse'
```

### Customizing Workflow Steps

```yaml
jobs:
  custom-job:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Run custom script
        env:
          DISCORD_TOKEN: ${{ secrets.DISCORD_TOKEN }}
          DISCORD_GUILD_ID: ${{ secrets.DISCORD_GUILD_ID }}
        run: node .github/scripts/custom-script.js
```

---

## Monitoring & Observability

### Health Checks

Run health check locally:

```bash
npm run health:check
```

Or via workflow:

```bash
# Trigger manually via GitHub Actions UI
# Or wait for scheduled run (every 6 hours)
```

### Viewing Metrics

```bash
# Query queue metrics (last 24 hours)
node .github/scripts/src/monitoring/metrics-collector.js summary queue 24

# Query Discord metrics (last 7 days)
node .github/scripts/src/monitoring/metrics-collector.js summary discord 168

# View health report
cat .github/logs/health-report.json
```

### Auto-Remediation

The system includes 5 auto-remediation runbooks:

1. **Queue Corruption:** Detects and fixes corrupted queue files
2. **Stale Jobs:** Removes jobs older than threshold
3. **File Size Issues:** Compresses large files
4. **Duplicate Detection:** Removes duplicate entries
5. **Schema Migration:** Handles V1 to V2 schema migration

Trigger auto-remediation:

```bash
node .github/scripts/src/monitoring/auto-remediation.js run
```

### Alerting

Configure alerts in `.github/scripts/src/monitoring/alert-router.js`:

```javascript
const ALERT_CONFIG = {
  critical: {
    enabled: true,
    channels: ['discord_webhook', 'github_issue'],
    thresholds: {
      success_rate: 0.5,  // Alert if success rate < 50%
      queue_age: 72  // Alert if jobs in queue > 72 hours
    }
  },
  warning: {
    enabled: true,
    channels: ['discord_webhook'],
    thresholds: {
      success_rate: 0.8,  // Warn if success rate < 80%
      queue_age: 48
    }
  }
};
```

---

## Testing

### Run All Tests

```bash
npm test
```

### Run Specific Test Suites

```bash
# Syntax check
npm run syntax-check

# Linting
npm run lint

# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# Coverage report
npm run test:coverage
```

### Manual Testing

```bash
# Test job fetching (dry run)
cd .github/scripts/job-fetcher
node index.js --dry-run

# Test Discord bot (dry run)
DISCORD_TOKEN=xxx DISCORD_GUILD_ID=xxx node .github/scripts/enhanced-discord-bot.js --dry-run

# Test routing
npm run health:routing
```

---

## Best Practices

### 1. Version Control

- Create feature branches for new features
- Use descriptive commit messages
- Tag releases for major milestones
- Keep main branch stable

### 2. Configuration Management

- Use board types system for consistency
- Store secrets in GitHub Secrets only
- Document custom configurations
- Use environment-specific configs when needed

### 3. Monitoring

- Review health reports regularly
- Set up alerts for critical issues
- Monitor metrics trends
- Address issues proactively

### 4. Testing

- Write tests for new features
- Maintain >70% test coverage
- Run tests before committing
- Test workflows after changes

### 5. Documentation

- Update docs when changing behavior
- Include examples in documentation
- Keep troubleshooting sections current
- Document custom integrations

---

## Common Issues and Solutions

### Issue: Jobs Not Posting to Discord

**Cause:** Bot permissions or configuration issues

**Solution:**
1. Verify bot has `Send Messages` and `Embed Links` permissions
2. Check channel IDs are correct
3. Verify environment variables are set
4. Check bot is invited to guild

### Issue: Duplicate Jobs in Queue

**Cause:** Deduplication not working

**Solution:**
1. Check `seen_jobs.json` exists and is writable
2. Verify job ID generation is consistent
3. Run health check: `npm run health:check`
4. Run auto-remediation if needed

### Issue: High Memory Usage

**Cause:** Large job batches or memory leaks

**Solution:**
1. Reduce batch size in job fetcher
2. Implement pagination for large datasets
3. Run memory profiling: `node --inspect script.js`
4. Add memory limits to workflows

### Issue: Workflow Timeouts

**Cause:** Jobs taking too long to fetch or post

**Solution:**
1. Reduce number of job sources
2. Implement caching for API calls
3. Optimize database queries
4. Increase workflow timeout in YAML

### Issue: Rate Limiting from ATS APIs

**Cause:** Too many API requests

**Solution:**
1. Implement rate limiting in fetchers
2. Add delays between requests
3. Use caching to reduce requests
4. Monitor rate limit headers

---

## Advanced Usage

### Adding Custom ATS Sources

Create new fetcher in `.github/scripts/job-fetcher/sources/`:

```javascript
// sources/custom-ats.js
const axios = require('axios');

async function fetchJobs(company) {
  try {
    const response = await axios.get(`https://api.custom-ats.com/${company}/jobs`, {
      headers: {
        'User-Agent': 'Zapply-Job-Board/2.0'
      }
    });

    return response.data.jobs.map(job => ({
      id: generateJobId(job),
      title: job.title,
      company: company,
      location: job.location,
      description: job.description,
      url: job.url,
      postedDate: job.posted_date
    }));
  } catch (error) {
    console.error(`Error fetching from ${company}:`, error.message);
    return [];
  }
}

function generateJobId(job) {
  return `${job.company}-${job.title}-${job.location}`.toLowerCase().replace(/\s+/g, '-');
}

module.exports = { fetchJobs };
```

Register in `sources/index.js`:

```javascript
const SOURCES = [
  // ... existing sources
  {
    name: 'custom-ats',
    enabled: true,
    companies: ['company1', 'company2'],
    fetcher: require('./custom-ats')
  }
];
```

### Custom Metrics Collection

Create custom metrics collector:

```javascript
// .github/scripts/src/monitoring/custom-metrics.js
const { appendJSONL } = require('../utils/file-io');

async function collectCustomMetrics() {
  const metrics = {
    timestamp: new Date().toISOString(),
    metric1: 'value1',
    metric2: 'value2',
    metric3: {
      submetric1: 'value3',
      submetric2: 'value4'
    }
  };

  const filename = `.github/data/metrics/custom-${new Date().toISOString().slice(0, 7)}.jsonl`;
  await appendJSONL(filename, metrics);
}

module.exports = { collectCustomMetrics };
```

### Custom Workflows

Create custom workflow in `.github/workflows/`:

```yaml
name: Custom Monthly Report
on:
  schedule:
    - cron: '0 0 1 * *'  # First day of month
  workflow_dispatch:

jobs:
  report:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Generate monthly report
        run: node .github/scripts/monthly-report.js

      - name: Upload report
        uses: actions/upload-artifact@v3
        with:
          name: monthly-report
          path: .github/logs/monthly-report.json
```

---

## Integration Examples

### Slack Integration

Add to `.github/scripts/src/monitoring/alert-router.js`:

```javascript
async function sendSlackAlert(message) {
  const webhookUrl = process.env.SLACK_WEBHOOK_URL;
  if (!webhookUrl) return;

  await axios.post(webhookUrl, {
    text: message,
    username: 'Job Board Bot',
    icon_emoji: ':robot_face:'
  });
}
```

### Email Notifications

```javascript
const nodemailer = require('nodemailer');

async function sendEmailAlert(subject, body) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.ADMIN_EMAIL,
    subject: subject,
    text: body
  });
}
```

### Discord Webhook Integration

```javascript
async function sendDiscordWebhook(content) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl) return;

  await axios.post(webhookUrl, {
    content: content,
    username: 'Job Board Alerts'
  });
}
```

---

## Performance Optimization

### Caching Strategy

```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 3600 });  // 1 hour cache

async function fetchWithCache(url) {
  const cached = cache.get(url);
  if (cached) return cached;

  const response = await axios.get(url);
  cache.set(url, response.data);
  return response.data;
}
```

### Batch Processing

```javascript
async function processInBatches(items, batchSize, processor) {
  const results = [];
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processor));
    results.push(...batchResults);
  }
  return results;
}
```

### Parallel Processing

```javascript
async function fetchAllSources(sources) {
  const results = await Promise.allSettled(
    sources.map(source => source.fetchJobs())
  );

  return results
    .filter(result => result.status === 'fulfilled')
    .map(result => result.value);
}
```

---

## Maintenance

### Regular Tasks

**Daily:**
- Review health reports
- Check workflow logs
- Monitor error rates

**Weekly:**
- Review metrics trends
- Update job sources if needed
- Check for dependency updates

**Monthly:**
- Review and update filters
- Archive old data
- Performance audit

**Quarterly:**
- Major dependency updates
- Architecture review
- Documentation updates

### Dependency Updates

```bash
# Check for updates
npm outdated

# Update dependencies
npm update

# Audit for vulnerabilities
npm audit fix

# Commit updates
git add package.json package-lock.json
git commit -m "chore: update dependencies"
git push
```

### Data Cleanup

```bash
# Archive old metrics (automated via workflow)
# Or manually:
mv .github/data/metrics/pipeline-2025-*.jsonl .github/data/metrics/archive/

# Clean old logs
find .github/logs -name "*.json" -mtime +30 -delete

# Clean old data
find .github/data -name "*.json" -mtime +90 -delete
```

---

## Resources

### Documentation

- **Migration Guide:** `.github/scripts/MIGRATION.md`
- **Testing Guide:** `.github/scripts/TESTING.md`
- **Board Types Guide:** `.github/scripts/BOARD_TYPES_MIGRATION_GUIDE.md`
- **System Overview:** `.github/scripts/SYSTEM_OVERVIEW.md`
- **Index:** `.github/scripts/INDEX.md`

### External Resources

- GitHub Actions Documentation: https://docs.github.com/en/actions
- Discord.js Documentation: https://discord.js.org/
- Node.js Documentation: https://nodejs.org/docs

### Community

- GitHub Issues: https://github.com/zapplyjobs/New-Grad-Jobs-2026/issues
- Discord Server: [Join our community]
- Website: https://zapply.jobs

---

## Support

### Getting Help

1. Check documentation above
2. Review troubleshooting sections
3. Search existing GitHub Issues
4. Create new issue with:
   - Detailed description
   - Error messages
   - Configuration details
   - Steps to reproduce

### Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create feature branch
3. Make your changes
4. Add tests if applicable
5. Submit pull request

---

**Last Updated:** 2026-02-08
**Template Version:** 2.0.0
**Maintainer:** Zapply Team
