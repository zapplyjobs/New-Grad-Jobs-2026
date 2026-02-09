# Template Testing Guide

**Created:** 2026-02-08
**Purpose:** Comprehensive testing procedures for template verification
**Estimated Time:** 30-45 minutes for full test suite

---

## Overview

This guide provides comprehensive testing procedures for verifying that a job board repository created from this template is functioning correctly. Tests cover syntax validation, linting, unit testing, integration testing, and CI/CD testing.

---

## Test Environment Setup

### Prerequisites

- Node.js 18+ installed locally
- npm or yarn package manager
- Git repository cloned locally
- Discord bot token and guild ID (for integration tests)

### Install Dependencies

```bash
cd /path/to/your-repo
npm install
```

### Environment Setup

Create `.env` file for local testing:

```bash
# Required
DISCORD_TOKEN=your_bot_token_here
DISCORD_GUILD_ID=your_guild_id_here
DISCORD_CLIENT_ID=your_client_id_here

# Board type specific (adjust for your board type)
DISCORD_AI_CHANNEL_ID=your_channel_id
DISCORD_DATA_SCIENCE_CHANNEL_ID=your_channel_id
DISCORD_TECH_CHANNEL_ID=your_channel_id
DISCORD_NON_TECH_CHANNEL_ID=your_channel_id
DISCORD_BAY_AREA_CHANNEL_ID=your_channel_id
DISCORD_NEW_YORK_CHANNEL_ID=your_channel_id
DISCORD_PACIFIC_NORTHWEST_CHANNEL_ID=your_channel_id
DISCORD_REMOTE_USA_CHANNEL_ID=your_channel_id
DISCORD_OTHER_USA_CHANNEL_ID=your_channel_id
```

---

## Syntax Testing

### Purpose

Verify that all JavaScript files have valid syntax and can be parsed by Node.js.

### Automated Syntax Check

```bash
npm run syntax-check
```

This command runs:
```bash
find .github/scripts -name '*.js' -type f -exec node -c {} \;
```

**Expected Output:** No output (silent success)

**Error Output Example:**
```
.github/scripts/some-file.js:42
SyntaxError: Unexpected token
```

### Manual Syntax Check (Individual Files)

```bash
# Check specific file
node -c .github/scripts/enhanced-discord-bot.js

# Check module
node -c .github/scripts/src/discord/poster.js
```

### Syntax Testing Checklist

- [ ] All files in `.github/scripts/` pass syntax check
- [ ] All files in `.github/scripts/src/` pass syntax check
- [ ] All files in `.github/scripts/job-fetcher/` pass syntax check
- [ ] Configuration files load without errors
- [ ] No syntax errors in any workflow files

---

## Linting Procedures

### Purpose

Enforce code style consistency and catch potential errors before runtime.

### Run Linter

```bash
npm run lint
```

This runs ESLint on all scripts:
```bash
eslint .github/scripts --max-warnings 0
```

**Expected Output:** No output (clean pass)

**Warning Output Example:**
```
.github/scripts/some-file.js
  42:5  warning  'unusedVar' is assigned a value but never used  no-unused-vars
```

**Error Output Example:**
```
.github/scripts/some-file.js
  42:5  error  Unexpected console.log statement  no-console
```

### Lint Configuration

The repository uses `.eslintrc.json`:

```json
{
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": "eslint:recommended",
  "rules": {
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-undef": "error"
  }
}
```

### Auto-fix Linting Issues

```bash
# Auto-fix fixable issues
npx eslint .github/scripts --fix

# Verify fixes
npm run lint
```

### Linting Testing Checklist

- [ ] All scripts pass ESLint with 0 warnings
- [ ] No console.error statements in production code
- [ ] All variables are used or marked with underscore prefix
- [ ] No undefined variables or functions
- [ ] Code follows consistent style

---

## Unit Testing

### Purpose

Test individual functions and modules in isolation.

### Run Unit Tests

```bash
npm test
```

### Test Coverage

```bash
npm run test:coverage
```

**Expected Coverage:** >70% for core modules

### Watch Mode (Development)

```bash
npm run test:watch
```

### Unit Test Structure

Create test files alongside source files:

```javascript
// .github/scripts/src/utils/__tests__/file-io.test.js
const { loadJSON, saveJSON } = require('../file-io');
const fs = require('fs');
const path = require('path');

describe('file-io', () => {
  const testFile = path.join(__dirname, 'test-data.json');

  afterEach(() => {
    if (fs.existsSync(testFile)) {
      fs.unlinkSync(testFile);
    }
  });

  test('loadJSON loads valid JSON file', () => {
    fs.writeFileSync(testFile, JSON.stringify({ test: 'data' }));
    const result = loadJSON(testFile);
    expect(result).toEqual({ test: 'data' });
  });

  test('saveJSON writes valid JSON file', () => {
    saveJSON(testFile, { test: 'data' });
    const content = fs.readFileSync(testFile, 'utf8');
    expect(JSON.parse(content)).toEqual({ test: 'data' });
  });
});
```

### Board Types Unit Tests

```javascript
// .github/scripts/src/__tests__/board-types.test.js
const { BOARD_TYPES, generateLegacyConfig, getRequiredEnvVars } = require('../board-types');

describe('board-types', () => {
  test('generates config for NEW_GRAD board type', () => {
    const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.NEW_GRAD);
    expect(Object.keys(CHANNEL_CONFIG).length).toBe(4);
    expect(Object.keys(LOCATION_CHANNEL_CONFIG).length).toBe(5);
  });

  test('lists required environment variables', () => {
    const envVars = getRequiredEnvVars(BOARD_TYPES.NEW_GRAD);
    expect(envVars.length).toBeGreaterThan(0);
    expect(envVars[0]).toHaveProperty('envVar');
    expect(envVars[0]).toHaveProperty('description');
  });
});
```

### Unit Testing Checklist

- [ ] All utility functions have unit tests
- [ ] Board types configuration tested
- [ ] Job filtering logic tested
- [ ] Routing logic tested
- [ ] Data aggregation functions tested
- [ ] Test coverage >70%

---

## Integration Testing

### Purpose

Test that multiple components work together correctly.

### Run Integration Tests

```bash
npm run test:integration
```

### Board Types Integration Test

```bash
# Test that config loads correctly
node -e "
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG, CATEGORY_CHANNEL_CONFIG } = require('./.github/scripts/src/discord/config');
console.log('✅ Config loaded successfully');
console.log('Industry channels:', Object.keys(CHANNEL_CONFIG).length);
console.log('Location channels:', Object.keys(LOCATION_CHANNEL_CONFIG).length);
console.log('Category channels:', Object.keys(CATEGORY_CHANNEL_CONFIG).length);
"
```

**Expected Output:**
```
✅ Config loaded successfully
Industry channels: 4
Location channels: 5
Category channels: 0
```

### Job Fetcher Integration Test

```bash
cd .github/scripts/job-fetcher
node index.js --test --limit 5
```

**Expected Output:**
```
Fetching jobs (test mode, limit: 5)...
✅ Fetched 5 jobs from greenhouse
✅ Fetched 3 jobs from lever
✅ Deduplicated: 7 unique jobs
✅ Added to pending_posts.json
```

### Discord Bot Integration Test

```bash
# Test bot startup
DISCORD_TOKEN=xxx DISCORD_GUILD_ID=xxx node .github/scripts/enhanced-discord-bot.js --dry-run
```

**Expected Output:**
```
✅ Discord bot initialized
✅ Loaded 0 jobs from pending_posts.json
✅ Dry run complete (no posts made)
```

### Routing Integration Test

```bash
npm run health:routing
```

This runs `.github/scripts/test-routing.js`:

**Expected Output:**
```
Testing routing logic...
✅ AI role routed to ai channel
✅ Data Science role routed to data-science channel
✅ Tech role routed to tech channel
✅ Non-tech role routed to non-tech channel
✅ Location routing working
```

### Integration Testing Checklist

- [ ] Board types configuration loads correctly
- [ ] Job fetcher retrieves jobs from enabled sources
- [ ] Deduplication prevents duplicate jobs
- [ ] Discord bot initializes without errors
- [ ] Routing logic assigns correct channels
- [ ] Filters apply correctly (blacklist, data quality)

---

## Manual Testing Checklist

### Purpose

Human verification of functionality that cannot be automated easily.

### Pre-Deployment Checklist

#### Configuration Verification

- [ ] Repository name in package.json matches actual repo
- [ ] Repository URL is correct
- [ ] Board type selected matches target audience
- [ ] All required GitHub Secrets configured
- [ ] Discord bot invited to guild with permissions
- [ ] Discord channels created and IDs configured

#### Discord Bot Testing

- [ ] Bot starts without errors
- [ ] Bot connects to Discord successfully
- [ ] Bot has permission to post in all channels
- [ ] Bot posts jobs with correct formatting
- [ ] Bot assigns correct tags to posts
- [ ] Bot handles errors gracefully

#### Job Fetching Testing

- [ ] Jobs are fetched from enabled sources
- [ ] Jobs are enriched with metadata
- [ ] Jobs are deduplicated correctly
- [ ] Jobs are added to pending_posts.json
- [ ] Fetch metrics are collected

#### Job Posting Testing

- [ ] Jobs are posted to correct industry channels
- [ ] Jobs are posted to correct location channels
- [ ] Posted jobs are tracked in posted_jobs.json
- [ ] Duplicate posts are prevented
- [ ] Blacklisted jobs are filtered out

#### Health Monitoring Testing

- [ ] Health checks run successfully
- [ ] Metrics are collected correctly
- [ ] Alerts are sent when thresholds breached
- [ ] Auto-remediation runs when needed
- [ ] Health reports are generated

#### Documentation Testing

- [ ] README.md displays correctly
- [ ] All documentation links work
- [ ] Migration guide is clear
- [ ] Testing guide is comprehensive
- [ ] Troubleshooting section covers issues

### GitHub Actions Testing

#### Workflow Execution

- [ ] Workflows trigger on schedule
- [ ] Workflows can be triggered manually
- [ ] Workflows complete successfully
- [ ] Workflows log output is clear

#### Workflow Logs

- [ ] No errors in workflow logs
- [ ] Warnings are reviewed and addressed
- [ ] Metrics are logged correctly
- [ ] Artifacts are generated

---

## CI/CD Testing

### Purpose

Verify that GitHub Actions workflows work correctly in the CI/CD environment.

### Test Workflow Locally

Use `act` to test workflows locally:

```bash
# Install act
brew install act  # macOS
# or
choco install act  # Windows

# Run workflow
act -j test
```

### Test Workflow in GitHub

1. Push changes to feature branch
2. Navigate to Actions tab
3. Verify workflow runs successfully
4. Review logs for errors

### Validate JSON Workflow

```bash
npm run template:verify
```

### CI/CD Testing Checklist

- [ ] Syntax validation workflow passes
- [ ] Linting workflow passes
- [ ] Test workflow passes
- [ ] Job fetching workflow completes successfully
- [ ] Discord posting workflow completes successfully
- [ ] Health monitoring workflow completes successfully
- [ ] All workflows complete within time limits
- [ ] No memory or timeout errors

---

## Performance Testing

### Purpose

Ensure system performs adequately under load.

### Memory Usage Test

```bash
# Monitor memory usage during job fetch
node --inspect .github/scripts/job-fetcher/index.js
```

Review memory usage in Chrome DevTools (Memory profiler).

### Response Time Test

```bash
# Test job fetch response time
time node .github/scripts/job-fetcher/index.js --test
```

**Expected:** <5 minutes for full fetch

### API Rate Limit Test

```bash
# Test rate limiting
for i in {1..10}; do
  node .github/scripts/job-fetcher/index.js --test
done
```

Verify no rate limit errors occur.

### Performance Testing Checklist

- [ ] Memory usage <1GB for job fetch
- [ ] Job fetch completes in <5 minutes
- [ ] Discord bot posts 100 jobs in <5 minutes
- [ ] Health checks complete in <1 minute
- [ ] No memory leaks detected

---

## Security Testing

### Purpose

Ensure secrets and sensitive data are protected.

### Secrets Scan

```bash
# Scan for leaked secrets
npx git-secrets --scan
```

### Environment Variable Validation

```bash
# Verify .env in .gitignore
cat .gitignore | grep .env
```

### Secrets in Logs Test

```bash
# Check workflow logs for secrets
grep -r "DISCORD_TOKEN" .github/logs/
```

**Expected:** No matches (secrets not logged)

### Security Testing Checklist

- [ ] No secrets in repository
- [ ] .env in .gitignore
- [ ] Secrets only in GitHub Secrets
- [ ] No secrets in workflow logs
- [ ] Dependencies are up to date
- [ ] No known vulnerabilities in dependencies

---

## Troubleshooting Tests

### Test Failures: Syntax Errors

**Symptom:** Syntax check fails

**Solutions:**
1. Review error message for specific file and line
2. Check for missing brackets, parentheses, quotes
3. Verify variable declarations
4. Use `node -c file.js` to debug specific file

### Test Failures: Linting Errors

**Symptom:** ESLint reports errors

**Solutions:**
1. Run `npx eslint .github/scripts --fix` for auto-fix
2. Review ESLint rules in `.eslintrc.json`
3. Address warnings before they become errors
4. Use `// eslint-disable-next-line` sparingly with justification

### Test Failures: Unit Tests

**Symptom:** Unit tests fail

**Solutions:**
1. Run tests in verbose mode: `npm test -- --verbose`
2. Check test logs for specific failure
3. Verify test data is correct
4. Mock external dependencies

### Test Failures: Integration Tests

**Symptom:** Integration tests fail

**Solutions:**
1. Verify environment variables are set
2. Check Discord bot permissions
3. Verify network connectivity
4. Review logs for specific errors

### Test Failures: CI/CD

**Symptom:** GitHub Actions fail

**Solutions:**
1. Verify GitHub Secrets are set
2. Check workflow YAML syntax
3. Review Actions logs for errors
4. Test workflows locally with `act`

---

## Rollback Testing

### Purpose

Ensure you can quickly rollback if tests fail or issues arise.

### Test Configuration Rollback

```bash
# Backup current config
cp .github/scripts/src/discord/config.js config.js.backup

# Make test changes
# ...

# Rollback if needed
cp config.js.backup .github/scripts/src/discord/config.js
```

### Test Workflow Rollback

```bash
# Disable problematic workflow
mv .github/workflows/update-jobs.yml .github/workflows/update-jobs.yml.disabled

# Commit and push
git add .github/workflows/update-jobs.yml.disabled
git commit -m "test: disable workflow during testing"
git push
```

### Test Full Repository Rollback

```bash
# Create rollback point
git tag -a pre-test -m "Pre-testing checkpoint"

# Make test changes
# ...

# Rollback if needed
git reset --hard pre-test
```

---

## Continuous Testing

### Pre-Commit Testing

Configure git hooks with Husky:

```bash
# .husky/pre-commit
npm run lint && npm run syntax-check
```

### Pre-Push Testing

Configure git hooks:

```bash
# .husky/pre-push
npm test
```

### Scheduled Testing

Add workflow for daily tests:

```yaml
# .github/workflows/daily-test.yml
name: Daily Tests
on:
  schedule:
    - cron: '0 0 * * *'  # Daily at midnight

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm install
      - name: Run tests
        run: npm test
```

---

## Test Results Documentation

### Record Test Results

Create `.github/logs/test-results-YYYY-MM-DD.json`:

```json
{
  "date": "2026-02-08",
  "syntax": {
    "status": "pass",
    "filesChecked": 50,
    "errors": 0
  },
  "linting": {
    "status": "pass",
    "warnings": 0,
    "errors": 0
  },
  "unitTests": {
    "status": "pass",
    "coverage": "78%",
    "failures": 0
  },
  "integrationTests": {
    "status": "pass",
    "discordBot": "pass",
    "jobFetcher": "pass",
    "routing": "pass"
  }
}
```

---

## Resources

- **Migration Guide:** `.github/scripts/MIGRATION.md`
- **Template Guide:** `.github/scripts/TEMPLATE_GUIDE.md`
- **Board Types Guide:** `.github/scripts/BOARD_TYPES_MIGRATION_GUIDE.md`
- **System Overview:** `.github/scripts/SYSTEM_OVERVIEW.md`

---

## Support

For testing issues:

1. Review troubleshooting section above
2. Check existing GitHub Issues
3. Create new issue with test logs
4. Include error messages and configuration

---

**Last Updated:** 2026-02-08
**Template Version:** 2.0.0
