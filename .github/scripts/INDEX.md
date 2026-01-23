# Scripts Directory Index

**Purpose:** Master index of all scripts and modules
**Last Updated:** 2026-01-22
**Total Lines:** ~4,600 (core) + 2,400 (infrastructure)

---

## Quick Navigation

| Need to... | Go to |
|------------|-------|
| Understand monitoring system | `src/monitoring/README.md` |
| **Migrate to another repo** | `BOARD_TYPES_MIGRATION_GUIDE.md` |
| **Configure board type** | `src/board-types.js` |
| Check bot health | `health-monitor.js` |
| Run auto-remediation | `src/monitoring/auto-remediation.js run` |
| Query metrics | `src/monitoring/metrics-collector.js summary` |
| Post jobs to Discord | `enhanced-discord-bot.js` |
| Fetch new jobs | `job-fetcher/index.js` |
| Find utility functions | See "Utilities" section below |

---

## Core Scripts (Main Entry Points)

### enhanced-discord-bot.js (982 lines)
**Purpose:** Posts jobs from queue to Discord channels

**What it does:**
- Loads enriched jobs from `pending_posts.json`
- Routes jobs to appropriate Discord channels (AI, DS, tech, non-tech)
- Posts to forum channels with tags
- Tracks posted jobs in `posted_jobs.json` (V2 schema)
- Collects metrics (discord, channels)

**How to run:**
```bash
DISCORD_TOKEN=xxx DISCORD_GUILD_ID=xxx node enhanced-discord-bot.js
```

**Key features:**
- Multi-channel routing (industry + location)
- Forum thread creation
- Blacklist filtering
- Duplicate detection
- V2 schema (multi-channel tracking)

**Modules used:**
- `src/filters/job-filters.js` - Filtering logic
- `src/discord/forum-poster.js` - Forum posting
- `src/monitoring/metrics-collector.js` - Metrics

---

### health-monitor.js (638 lines)
**Purpose:** Health checks and observability

**What it does:**
- Checks deduplication rate, queue health, posting success
- Detects queue corruption, stale jobs, file size issues
- Schema-aware monitoring (V1 vs V2)
- Runs auto-remediation runbooks
- Collects queue metrics
- Routes alerts to Discord/GitHub

**How to run:**
```bash
node health-monitor.js
# Outputs health report to .github/logs/health-report.json
```

**Modules used:**
- `schema-aware-health.js` - V1/V2 schema detection
- `src/monitoring/metrics-collector.js` - Queue metrics
- `src/monitoring/auto-remediation.js` - Self-healing
- `src/monitoring/alert-router.js` - Alert routing

---

### job-fetcher/index.js (89 lines)
**Purpose:** Orchestrates job fetching from all sources

**What it does:**
- Fetches jobs from ATS systems (Greenhouse, Lever, Ashby, etc.)
- Deduplicates against `seen_jobs.json`
- Adds to `pending_posts.json` queue
- Generates company stats
- Collects pipeline metrics

**How to run:**
```bash
cd job-fetcher && node index.js
```

**Modules used:**
- `job-processor.js` - Core processing logic
- `sources/index.js` - ATS fetchers
- `../src/monitoring/metrics-collector.js` - Pipeline metrics

---

### schema-aware-health.js (229 lines)
**Purpose:** Prevent false positive incidents (V1 vs V2 schema detection)

**What it does:**
- Categorizes jobs by schema (V2, V1_LEGACY, FAILURE)
- Calculates accurate success rate
- Detects true failures vs migration artifacts

**How to run:**
```bash
# Generate health report
node schema-aware-health.js report

# Check for V1 migration artifacts
node schema-aware-health.js check-v1
```

**Key insight:**
- Before: 26.5% success (only counted V2 posts)
- After: 88.89% success (counts V2 + V1 legacy posts)
- Prevents 55% false positive incident

---

## Configuration System

### Board Types (src/board-types.js)

**Purpose:** Portable configuration templates for different job board types

**What it does:**
- Defines board type templates (NEW_GRAD, INTERNSHIPS, REMOTE)
- Generates channel configurations from templates
- Documents required environment variables
- Makes system portable across repositories

**Board Types:**

| Board Type | Repos | Industry Channels | Location Channels | Mode |
|-----------|-------|-------------------|-------------------|------|
| **NEW_GRAD** | New-Grad-Jobs-2026 | 4 (consolidated) | 5 (consolidated) | env |
| **INTERNSHIPS** | Internships-2026 | 11 (full spread) | 15 (full spread) | env |
| **REMOTE** | Remote-Jobs-2026 | 11 (auto-discover) | 12 (auto-discover) | discovery |

**How to use:**
```javascript
const { BOARD_TYPES, generateLegacyConfig } = require('./src/board-types');

// Get config for your board type
const { CHANNEL_CONFIG, LOCATION_CHANNEL_CONFIG } = generateLegacyConfig(BOARD_TYPES.NEW_GRAD);

// Get required environment variables
const { getRequiredEnvVars } = require('./src/board-types');
const envVars = getRequiredEnvVars(BOARD_TYPES.NEW_GRAD);
console.log('Required:', envVars);
```

**Migration Guide:** See `BOARD_TYPES_MIGRATION_GUIDE.md`

---

## Module Categories

### Monitoring Infrastructure (src/monitoring/)

**Total:** 1,264 lines

| File | Lines | Purpose |
|------|-------|---------|
| `alert-router.js` | 331 | Routes alerts to Discord webhooks + GitHub |
| `metrics-collector.js` | 385 | Time-series metrics (JSONL storage) |
| `auto-remediation.js` | 548 | Self-healing runbooks (5 runbooks) |
| `README.md` | - | Full documentation for monitoring system |

**See:** `src/monitoring/README.md` for detailed documentation

---

### Filters & Validation (src/filters/)

**Total:** 194 lines

| File | Lines | Purpose |
|------|-------|---------|
| `job-filters.js` | 194 | Blacklist, data quality, deduplication |

**Key functions:**
- `filterBlacklisted()` - Remove blacklisted jobs
- `filterByDataQuality()` - Validate required fields
- `detectContentDuplicates()` - Find duplicate jobs
- `removeDuplicates()` - Deduplicate by job ID

**Blacklist:** `JOB_BLACKLIST` constant (senior, principal, manager, etc.)

---

### Discord Integration (src/discord/)

**Total:** 594 lines

| File | Lines | Purpose |
|------|-------|---------|
| `poster.js` | 413 | Main posting logic (embeds, tags, buttons) |
| `forum-poster.js` | 125 | Forum channel posting |
| `config.js` | 56 | Channel configuration |

**Key functions:**
- `postJobToChannel()` - Post to text/forum channel
- `postJobToForum()` - Forum-specific posting
- `buildJobEmbed()` - Create Discord embed
- `generateTags()` - Generate job tags

---

### Routing (src/routing/)

**Total:** 525 lines

| File | Lines | Purpose |
|------|-------|---------|
| `router.js` | 361 | Industry routing (AI, DS, tech, non-tech) |
| `location.js` | 164 | Geographic routing (Bay Area, PNW, other) |

**Key functions:**
- `getJobChannelDetails()` - Determine industry channel
- `getJobLocationChannel()` - Determine location channel
- `isAIRole()`, `isDataScienceRole()`, etc. - Pattern matching

---

### Utilities (src/utils/)

**Total:** 917 lines

| File | Lines | Purpose |
|------|-------|---------|
| `file-io.js` | 222 | File operations (load/save JSON/JSONL) |
| `data-aggregation.js` | 214 | Sorting, grouping, statistics |
| `logger.js` | 159 | Structured logging (routing, posting, etc.) |
| `error-handler.js` | 111 | Error handling utilities |
| `job-formatters.js` | 88 | Date/description formatting |
| `job-normalizer.js` | 67 | Job schema normalization |

**Common patterns:**
```javascript
// File I/O
const { loadJSON, saveJSON, appendJSONL } = require('./src/utils/file-io');

// Logging
const logger = new Logger('routing', { encrypted: true });
logger.log('event', data).save();

// Data aggregation
const { groupBy, sortAndLimit, topN } = require('./src/utils/data-aggregation');
```

---

### Data Management (src/data/)

**Total:** 1,130 lines

| File | Lines | Purpose |
|------|-------|---------|
| `posted-jobs-manager-v2.js` | 498 | V2 schema (multi-channel tracking) |
| `posted-jobs-manager.js` | 289 | V1 schema (legacy) |
| `subscription-manager.js` | 84 | User subscription management |
| `loader.js` | 64 | Data file loading |

**Key classes:**
- `PostedJobsManager` (V2) - Multi-channel tracking
- `SubscriptionManager` - Discord user subscriptions

---

## Job Fetcher Modules (job-fetcher/)

### Core

| File | Lines | Purpose |
|------|-------|---------|
| `job-processor.js` | 1,050 | Main processing logic |
| `utils.js` | 650 | Job ID generation, validation |
| `readme-generator.js` | 640 | README.md generation |

### Sources (ATS Systems)

| File | Purpose |
|------|---------|
| `sources/index.js` | ATS fetcher orchestration |
| `sources/greenhouse.js` | Greenhouse ATS |
| `sources/lever.js` | Lever ATS |
| `sources/ashby.js` | Ashby ATS |
| `sources/workable.js` | Workable ATS |
| `sources/bamboo.js` | BambooHR ATS |
| `sources/workday.js` | Workday ATS |
| `sources/icims.js` | iCIMS ATS |
| `sources/jobvite.js` | Jobvite ATS |
| `sources/yc-discovery.js` | Y Combinator company discovery |

---

## Data Files

### Job Data (.github/data/)

| File | Purpose | Schema |
|------|---------|--------|
| `jobs.json` | Current jobs | Array of job objects |
| `seen_jobs.json` | Deduplication tracking | `{ jobId: timestamp }` |
| `pending_posts.json` | Queue for posting | Array of `{ job, status, timestamp }` |
| `posted_jobs.json` | Posted jobs (V2) | `{ version: 2, jobs: [...] }` |

### Metrics (.github/data/metrics/)

| File | Purpose | Format |
|------|---------|--------|
| `pipeline-YYYY-MM.jsonl` | Fetch metrics | JSONL (one metric per line) |
| `discord-YYYY-MM.jsonl` | Posting metrics | JSONL |
| `queue-YYYY-MM.jsonl` | Queue metrics | JSONL |
| `channels-YYYY-MM.jsonl` | Per-channel metrics | JSONL |

### Logs (.github/logs/)

| File | Purpose |
|------|---------|
| `health-report.json` | Latest health check results |
| `fetch-summary.json` | Latest fetch summary |
| `routing-*.jsonl` | Routing decisions |
| `discord-posts-*.jsonl` | Posting logs |

---

## Configuration

### Environment Variables

**Required:**
- `DISCORD_TOKEN` - Bot authentication
- `DISCORD_GUILD_ID` - Server ID
- `DISCORD_CLIENT_ID` - OAuth client ID

**Optional (Monitoring):**
- `DISCORD_OPS_WEBHOOK_URL` - Operational alerts
- `DISCORD_CRITICAL_WEBHOOK_URL` - Critical alerts

### Channel Configuration

**File:** `src/discord/config.js`

**Channels:**
- AI & Machine Learning
- Data Science & Analytics
- Software Engineering
- Product & Design (non-tech)
- Location channels (Bay Area, Pacific Northwest, Other USA)

---

## Common Tasks

### Run Health Check
```bash
node health-monitor.js
# Outputs: .github/logs/health-report.json
```

### Query Metrics
```bash
# Queue metrics (last 24 hours)
node src/monitoring/metrics-collector.js summary queue 24

# Discord metrics (last 7 days)
node src/monitoring/metrics-collector.js summary discord 168
```

### Fix Queue Issues
```bash
# Run auto-remediation
node src/monitoring/auto-remediation.js run

# Or manual scripts
npm run health:queue
```

### Post Jobs to Discord
```bash
# In GitHub Actions (automatic)
# Runs every 30 minutes via .github/workflows/post-jobs.yml

# Manual test
DISCORD_TOKEN=xxx node enhanced-discord-bot.js
```

### Fetch New Jobs
```bash
cd job-fetcher
node index.js
# Or via workflow: .github/workflows/fetch-jobs.yml
```

---

## Architecture Overview

```
┌─────────────────┐
│  Job Sources    │ (ATS APIs: Greenhouse, Lever, etc.)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Job Fetcher    │ (job-fetcher/index.js)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Pending Queue   │ (pending_posts.json)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  Discord Bot    │ (enhanced-discord-bot.js)
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Posted Jobs DB  │ (posted_jobs.json - V2 schema)
└─────────────────┘

        │
        ▼
┌─────────────────┐
│ Health Monitor  │ (health-monitor.js)
└────────┬────────┘
         │
         ├─► Auto-Remediation (auto-remediation.js)
         ├─► Metrics Collection (metrics-collector.js)
         └─► Alert Routing (alert-router.js)
```

---

## Development Notes

**Complexity Budget:**
- Core logic: 4,600 lines (unlimited - this is the product)
- Infrastructure: 2,400 lines (over budget, but documented)

**Maintenance Burden:**
- Infrastructure: ~106 hours context loading in future sessions
- See `.GenAI_Work/.meta/DEVELOPMENT_METHODOLOGY.md` for YAGNI/KISS principles

**Review Schedule:**
- Quarterly review: Are we using monitoring features?
- Delete if unused: metrics, alerts, auto-remediation

---

## See Also

- `src/monitoring/README.md` - Monitoring system documentation
- `.GenAI_Work/.meta/DEVELOPMENT_METHODOLOGY.md` - Development principles
- `.GenAI_Work/.sessions/AUDIT_2026_01_22_OBSERVABILITY.md` - Complexity audit
- `../workflows/` - GitHub Actions workflows

---

**Last Updated:** 2026-01-22
**Maintainer:** Claude Code (with YAGNI/KISS methodology)
