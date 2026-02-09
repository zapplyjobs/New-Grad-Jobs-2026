# Template Migration Guide

**Created:** 2026-02-08
**Purpose:** Guide for creating new job board repositories from this template
**Estimated Time:** 45-60 minutes

---

## Overview

This repository serves as a template for automated job boards with GitHub Actions workflows, job fetching from multiple ATS systems, and Discord integration. This guide walks you through creating a new job board repository from this template.

### What Gets Migrated

- GitHub Actions workflows (automated job fetching, posting, health monitoring)
- Job fetcher system (Greenhouse, Lever, Ashby, Workday, etc.)
- Discord bot integration (multi-channel routing, forum posting)
- Board types configuration (portable channel templates)
- Monitoring and observability (health checks, metrics, alerts)
- Documentation and testing infrastructure

---

## Prerequisites

### Before You Start

- GitHub account with repository creation permissions
- Discord bot token and guild ID (for Discord integration)
- Node.js 18+ installed locally (for testing)
- Familiarity with GitHub Actions and environment variables
- Understanding of your target job board type (NEW_GRAD, INTERNSHIPS, REMOTE)

### Required Discord Setup

1. Create a Discord application at https://discord.com/developers/applications
2. Create a bot user and get the token
3. Invite bot to your guild with required permissions
4. Create channels (see board types documentation)
5. Get channel IDs for configuration

---

## Step 1: Create Repository from Template

### Option A: GitHub Template (Recommended)

1. Navigate to https://github.com/zapplyjobs/New-Grad-Jobs-2026
2. Click "Use this template" > "Create a new repository"
3. Name your repository (e.g., `Internships-2026`, `Remote-Jobs-2026`)
4. Choose visibility (Public recommended)
5. Click "Create repository"

### Option B: Manual Clone

```bash
# Clone the template
git clone https://github.com/zapplyjobs/New-Grad-Jobs-2026.git your-repo-name
cd your-repo-name

# Remove git history
rm -rf .git
git init

# Update origin
git remote add origin https://github.com/your-username/your-repo-name.git
```

---

## Step 2: Customize Repository Configuration

### Update package.json

Edit `package.json` with your repository details:

```json
{
  "name": "@your-org/your-repo-name",
  "version": "2.0.0",
  "description": "Brief description of your job board",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/your-username/your-repo-name.git"
  },
  "bugs": {
    "url": "https://github.com/your-username/your-repo-name/issues"
  },
  "homepage": "https://github.com/your-username/your-repo-name#readme"
}
```

### Update README.md

Edit `README.md` to reflect your job board:

```markdown
# Your Job Board Name 2026

![Total Jobs](https://img.shields.io/badge/Total_Jobs-0-brightgreen)
![Companies](https://img.shields.io/badge/Companies-0-blue)

Updated job openings for [your target audience] | 2026

## Description

[Brief description of your job board and target audience]

## Website & Resources

[Link to relevant resources, website, or extension]

## Categories

[List your job categories]
```

---

## Step 3: Configure Board Type

### Choose Your Board Type

The template supports three board types via `src/board-types.js`:

| Board Type | Target Audience | Channels | Mode |
|-----------|----------------|----------|------|
| NEW_GRAD | Entry-level positions | 4 industry + 5 location | Environment variables |
| INTERNSHIPS | Student internships | 11 industry + 15 location + 1 category | Environment variables |
| REMOTE | Remote-only jobs | 11 industry + 12 location | Auto-discovery |

### Update config.js

Edit `.github/scripts/src/discord/config.js`:

```javascript
/**
 * Discord Channel Configuration
 *
 * Choose your board type: NEW_GRAD, INTERNSHIPS, or REMOTE
 */

const { BOARD_TYPES, generateLegacyConfig } = require('../board-types');

// CHANGE THIS: Select your board type
const BOARD_TYPE = BOARD_TYPES.NEW_GRAD;  // or INTERNSHIPS or REMOTE

// Generate configuration from board type
const {
  CHANNEL_CONFIG,
  LOCATION_CHANNEL_CONFIG,
  CATEGORY_CHANNEL_CONFIG
} = generateLegacyConfig(BOARD_TYPE);

// Mode detection
const MULTI_CHANNEL_MODE = Object.values(CHANNEL_CONFIG).some(id => id && id.trim() !== '');
const LOCATION_MODE_ENABLED = Object.values(LOCATION_CHANNEL_CONFIG).some(id => id && id.trim() !== '');

module.exports = {
  CHANNEL_CONFIG,
  LOCATION_CHANNEL_CONFIG,
  CATEGORY_CHANNEL_CONFIG,
  MULTI_CHANNEL_MODE,
  LOCATION_MODE_ENABLED
};
```

---

## Step 4: Configure Environment Variables

### GitHub Secrets

Navigate to: Settings > Secrets and variables > Actions > New repository secret

Add the following secrets:

#### Required Secrets

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `DISCORD_TOKEN` | Bot authentication token | `MTIzNDU2Nzg5MA...` |
| `DISCORD_GUILD_ID` | Discord server ID | `123456789012345678` |
| `DISCORD_CLIENT_ID` | OAuth client ID | `123456789012345678` |

#### Board Type Specific Secrets

Run this command to see required secrets for your board type:

```bash
node -e "
const { BOARD_TYPES, getRequiredEnvVars } = require('./.github/scripts/src/board-types');
const envVars = getRequiredEnvVars(BOARD_TYPES.NEW_GRAD);  // Change to your board type
console.log('Required environment variables:');
envVars.forEach(v => console.log(\`  \${v.envVar}: \${v.description}\`));
"
```

For NEW_GRAD board type, you'll need:

```bash
# Industry Channels
DISCORD_AI_CHANNEL_ID=123456789012345678
DISCORD_DATA_SCIENCE_CHANNEL_ID=123456789012345678
DISCORD_TECH_CHANNEL_ID=123456789012345678
DISCORD_NON_TECH_CHANNEL_ID=123456789012345678

# Location Channels
DISCORD_BAY_AREA_CHANNEL_ID=123456789012345678
DISCORD_NEW_YORK_CHANNEL_ID=123456789012345678
DISCORD_PACIFIC_NORTHWEST_CHANNEL_ID=123456789012345678
DISCORD_REMOTE_USA_CHANNEL_ID=123456789012345678
DISCORD_OTHER_USA_CHANNEL_ID=123456789012345678
```

#### Optional Secrets (Monitoring)

| Secret Name | Description |
|-------------|-------------|
| `DISCORD_OPS_WEBHOOK_URL` | Operational alerts webhook |
| `DISCORD_CRITICAL_WEBHOOK_URL` | Critical alerts webhook |

---

## Step 5: Customize Job Sources

### Edit ATS Sources

Edit `.github/scripts/job-fetcher/sources/index.js` to customize which job sources to fetch from:

```javascript
const SOURCES = [
  {
    name: 'greenhouse',
    enabled: true,
    companies: ['meta', 'google', 'amazon']  // Add your target companies
  },
  {
    name: 'lever',
    enabled: true,
    companies: ['spotify', 'airbnb']  // Add your target companies
  },
  {
    name: 'ashby',
    enabled: false  // Enable/disable sources
  }
];
```

### Custom Filtering

Edit `.github/scripts/src/filters/job-filters.js` to customize job filtering:

```javascript
// Blacklist keywords
const JOB_BLACKLIST = [
  'senior', 'principal', 'manager', 'director',
  '5+ years', '10+ years'  // Customize for your audience
];

// Experience level filters
const EXPERIENCE_LEVELS = {
  ENTRY: ['entry level', 'new grad', 'junior', 'associate'],
  MID: ['mid-level', '3+ years', '4+ years'],
  SENIOR: ['senior', '5+ years', '6+ years']
};
```

---

## Step 6: Configure GitHub Actions Workflows

### Update Workflow Triggers

Edit workflow files in `.github/workflows/` to customize triggers:

```yaml
# .github/workflows/update-jobs.yml
name: Update Jobs
on:
  schedule:
    # Every 30 minutes (customize frequency)
    - cron: '*/30 * * * *'
  workflow_dispatch:  # Allow manual trigger
```

### Customize Fetch Frequency

- `update-jobs.yml`: Job fetching (default: every 30 minutes)
- `post-jobs.yml`: Discord posting (default: every 30 minutes)
- `daily-health-report.yml`: Health monitoring (default: every 6 hours)
- `archive-old-metrics.yml`: Metrics archiving (default: weekly)

---

## Step 7: Test Locally (Optional)

### Install Dependencies

```bash
npm install
```

### Test Configuration

```bash
# Test board types configuration
node -e "
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = require('./.github/scripts/src/discord/config');
console.log('Industry channels:', Object.keys(CHANNEL_CONFIG).length);
console.log('Location channels:', Object.keys(LOCATION_CHANNEL_CONFIG).length);
"

# Test syntax
npm run syntax-check

# Test linting
npm run lint
```

### Test Job Fetching

```bash
cd .github/scripts/job-fetcher
node index.js
```

---

## Step 8: Deploy to GitHub

### Commit Changes

```bash
git add .
git commit -m "feat: initial setup from template

- Customize repository configuration
- Configure board type: NEW_GRAD
- Set up environment variables
- Customize job sources
"
```

### Push to GitHub

```bash
git push -u origin main
```

### Enable GitHub Actions

1. Navigate to Actions tab in GitHub
2. Click "I understand my workflows, go ahead and enable them"
3. Verify workflows are running

---

## Step 9: Verify Deployment

### Check Workflow Runs

1. Go to Actions tab
2. Verify workflows are running successfully
3. Check for any errors in logs

### Verify Discord Integration

1. Check that bot is posting to Discord channels
2. Verify jobs are being fetched from configured sources
3. Check health monitoring reports

### Monitor Metrics

```bash
# View health report
cat .github/logs/health-report.json

# View fetch summary
cat .github/logs/fetch-summary.json
```

---

## Post-Migration Checklist

Use this checklist to verify your migration is complete:

- [ ] Repository created from template
- [ ] package.json updated with repository details
- [ ] README.md customized for your job board
- [ ] Board type selected in config.js
- [ ] All required environment variables set as GitHub Secrets
- [ ] Job sources customized in sources/index.js
- [ ] Job filters customized for your audience
- [ ] GitHub Actions workflows enabled
- [ ] Test workflow runs successful
- [ ] Discord bot posting to channels
- [ ] Jobs being fetched from configured sources
- [ ] Health monitoring working

---

## Troubleshooting

### Issue: GitHub Actions Failing

**Symptoms:** Workflows fail with "Module not found" or permission errors

**Solutions:**
1. Verify all GitHub Secrets are set correctly
2. Check that repository has Actions enabled
3. Verify workflow YAML syntax is correct
4. Check Actions logs for specific error messages

### Issue: Discord Bot Not Posting

**Symptoms:** Bot doesn't post to Discord channels

**Solutions:**
1. Verify `DISCORD_TOKEN` is correct
2. Check bot has permission to post in channels
3. Verify channel IDs are correct (right-click channel > Copy ID)
4. Check bot is invited to guild with proper permissions
5. Review Discord posting logs in Actions

### Issue: No Jobs Being Fetched

**Symptoms:** Fetch workflow runs but no jobs in queue

**Solutions:**
1. Check if job sources are enabled in `sources/index.js`
2. Verify ATS APIs are accessible
3. Check if companies list is correct
4. Review fetch logs for errors
5. Verify filters aren't too restrictive

### Issue: Wrong Channel Routing

**Symptoms:** Jobs posting to wrong channels

**Solutions:**
1. Verify board type matches your intended setup
2. Check environment variables for channel IDs
3. Review routing logic in `src/routing/router.js`
4. Test routing with `npm run health:routing`

### Issue: High Memory Usage in Workflows

**Symptoms:** Workflows exceed GitHub memory limits

**Solutions:**
1. Reduce number of job sources enabled
2. Implement pagination in fetchers
3. Add memory monitoring to workflows
4. Use GitHub Actions caching for dependencies

---

## Rollback Procedures

If migration fails or causes issues:

### Rollback GitHub Actions

```bash
# Disable problematic workflows
cd .github/workflows
mv update-jobs.yml update-jobs.yml.disabled
mv post-jobs.yml post-jobs.yml.disabled

git add .
git commit -m "chore: disable workflows due to issues"
git push
```

### Rollback Configuration

```bash
# Revert to previous config
git checkout HEAD~1 .github/scripts/src/discord/config.js
git add .github/scripts/src/discord/config.js
git commit -m "revert: restore previous config"
git push
```

### Rollback Entire Migration

```bash
# Reset to template baseline
git log --oneline  # Find commit after template clone
git reset --hard <commit-hash>
git push --force  # Use with caution
```

---

## Advanced Customization

### Add Custom ATS Sources

Create new fetcher in `.github/scripts/job-fetcher/sources/`:

```javascript
// sources/my-ats.js
const axios = require('axios');

async function fetchJobs(company) {
  const response = await axios.get(`https://api.my-ats.com/${company}/jobs`);
  return response.data.jobs.map(job => ({
    id: job.id,
    title: job.title,
    company: company,
    location: job.location,
    // ... more fields
  }));
}

module.exports = { fetchJobs };
```

### Add Custom Workflows

Create new workflow in `.github/workflows/`:

```yaml
name: Custom Workflow
on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight
  workflow_dispatch:

jobs:
  custom-job:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run custom script
        run: node .github/scripts/custom-script.js
```

### Custom Metrics Collection

```javascript
// .github/scripts/src/monitoring/custom-metrics.js
const { appendJSONL } = require('../utils/file-io');

async function collectCustomMetrics() {
  const metrics = {
    timestamp: new Date().toISOString(),
    customMetric: 'value'
  };

  await appendJSONL('.github/data/metrics/custom-2026-02.jsonl', metrics);
}

module.exports = { collectCustomMetrics };
```

---

## Maintenance

### Regular Maintenance Tasks

- **Weekly:** Review workflow logs for errors
- **Monthly:** Review and update job sources list
- **Quarterly:** Review and update job filters
- **Annually:** Update dependencies and Node.js version

### Update Dependencies

```bash
npm update
npm audit fix
git add package.json package-lock.json
git commit -m "chore: update dependencies"
git push
```

### Update Template

When template repository updates:

```bash
# Fetch upstream changes
git remote add upstream https://github.com/zapplyjobs/New-Grad-Jobs-2026.git
git fetch upstream
git merge upstream/main

# Resolve conflicts
# Test changes
# Commit and push
```

---

## Resources

- **Board Types Guide:** `.github/scripts/BOARD_TYPES_MIGRATION_GUIDE.md`
- **Testing Guide:** `.github/scripts/TESTING.md`
- **System Overview:** `.github/scripts/SYSTEM_OVERVIEW.md`
- **Index:** `.github/scripts/INDEX.md`

---

## Support

For issues or questions:

1. Check existing GitHub Issues
2. Review troubleshooting section above
3. Create new issue with detailed description
4. Include error logs and configuration

---

**Last Updated:** 2026-02-08
**Template Version:** 2.0.0
