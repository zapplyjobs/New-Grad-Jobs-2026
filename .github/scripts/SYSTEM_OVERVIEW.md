# GitHub Discord System Architecture

**Last Updated:** 2026-01-22 (Phase 2 Complete)

---

## System Overview

```
┌─────────────────────────────────────────────────────────────────────┐
│                    JOB BOARD REPOSITORIES                           │
│  New-Grad-Jobs-2026 │ Internships-2026 │ Remote-Jobs-2026          │
└─────────────────────────────────────────────────────────────────────┘
                                 │
                                 ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    BOARD TYPES CONFIGURATION                        │
│                      (src/board-types.js)                           │
│                                                                     │
│  NEW_GRAD           INTERNSHIPS         REMOTE                      │
│  ├─ 4 industry      ├─ 11 industry     ├─ 11 industry              │
│  ├─ 5 location      ├─ 15 location     ├─ 12 location              │
│  └─ env mode        ├─ 1 category      └─ discovery mode           │
│                     └─ env mode                                     │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Data Flow Pipeline

```
     ┌──────────────┐
     │ ATS Sources  │  (Greenhouse, Lever, Ashby, etc.)
     │  - Meta      │
     │  - Google    │
     │  - Amazon    │
     └──────┬───────┘
            │
            ▼
     ┌──────────────┐
     │ Job Fetcher  │  (.github/scripts/job-fetcher/)
     │              │
     │ • Fetch jobs │  METRICS: pipeline-YYYY-MM.jsonl
     │ • Dedupe     │
     │ • Enrich     │
     └──────┬───────┘
            │
            ▼
     ┌──────────────┐
     │ Pending      │  (.github/data/pending_posts.json)
     │ Queue        │
     └──────┬───────┘
            │
            ▼
     ┌──────────────────────────────────────────┐
     │     Discord Bot (enhanced-discord-bot.js) │
     │                                           │
     │  ┌─────────────────────────────────────┐ │
     │  │  BOARD TYPE: NEW_GRAD               │ │
     │  │  (src/board-types.js)               │ │
     │  └─────────────────────────────────────┘ │
     │                 ↓                         │
     │  ┌─────────────────────────────────────┐ │
     │  │  Channel Router (src/routing/)      │ │
     │  │  • Industry routing (tech/ai/ds)    │ │
     │  │  • Location routing (bay area/ny)   │ │
     │  └─────────────────────────────────────┘ │
     │                 ↓                         │
     │  ┌─────────────────────────────────────┐ │
     │  │  Filters (src/filters/)             │ │
     │  │  • Blacklist check                  │ │
     │  │  • Data quality                     │ │
     │  │  • Duplicate detection              │ │
     │  └─────────────────────────────────────┘ │
     │                 ↓                         │
     │  ┌─────────────────────────────────────┐ │
     │  │  Discord Poster (src/discord/)      │ │
     │  │  • Build embed                      │ │
     │  │  • Post to channels                 │ │
     │  │  • Track posted jobs (V2 schema)    │ │
     │  └─────────────────────────────────────┘ │
     │                                           │
     │  METRICS: discord-YYYY-MM.jsonl           │
     │          channels-YYYY-MM.jsonl           │
     └───────────────────┬───────────────────────┘
                         │
                         ▼
              ┌──────────────────┐
              │ Discord Channels │  (4 industry + 5 location)
              │                  │
              │ • #tech-jobs     │
              │ • #ai-jobs       │
              │ • #data-science  │
              │ • #finance       │
              │                  │
              │ • #bay-area      │
              │ • #new-york      │
              │ • #pnw           │
              │ • #remote-usa    │
              │ • #other-usa     │
              └──────────────────┘
```

---

## Monitoring & Observability

```
                    ┌──────────────────────┐
                    │  health-monitor.js   │
                    │  (Runs every 6 hours)│
                    └──────────┬───────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
        ▼                      ▼                      ▼
┌───────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Schema-Aware  │    │ Metrics          │    │ Auto-Remediation │
│ Health        │    │ Collector        │    │ Engine           │
│               │    │                  │    │                  │
│ • V1 vs V2    │    │ • Queue metrics  │    │ • 5 runbooks     │
│ • 88.83%      │    │ • Discord stats  │    │ • Confidence-    │
│   success     │    │ • JSONL storage  │    │   based exec     │
└───────┬───────┘    └────────┬─────────┘    └────────┬─────────┘
        │                     │                       │
        └─────────────────────┼───────────────────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  Alert Router    │
                    │                  │
                    │ CRITICAL → Discord Webhook
                    │ WARNING  → GitHub Issue
                    │ INFO     → Summary only
                    └──────────┬───────┘
                               │
                    ┌──────────┼──────────┐
                    ▼                     ▼
            ┌──────────────┐      ┌─────────────┐
            │ Discord Ops  │      │ GitHub      │
            │ Webhook      │      │ Actions     │
            └──────────────┘      └─────────────┘
```

---

## Board Types System (Phase 2)

```
                  ┌────────────────────────┐
                  │  src/board-types.js    │
                  │  (Configuration Hub)   │
                  └───────────┬────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
         ▼                    ▼                    ▼
  ┌─────────────┐      ┌─────────────┐     ┌─────────────┐
  │ NEW_GRAD    │      │ INTERNSHIPS │     │   REMOTE    │
  │             │      │             │     │             │
  │ Mode: env   │      │ Mode: env   │     │ Mode: disc. │
  │ Type: text  │      │ Type: forum │     │ Type: text  │
  │             │      │             │     │             │
  │ Industry: 4 │      │ Industry: 11│     │ Industry: 11│
  │ Location: 5 │      │ Location: 15│     │ Location: 12│
  │ Category: 0 │      │ Category: 1 │     │ Category: 0 │
  └─────┬───────┘      └─────┬───────┘     └─────┬───────┘
        │                    │                    │
        ▼                    ▼                    ▼
  ┌─────────────┐      ┌─────────────┐     ┌─────────────┐
  │ New-Grad-   │      │ Internships-│     │ Remote-Jobs-│
  │ Jobs-2026   │      │ 2026        │     │ 2026        │
  │             │      │             │     │             │
  │ ✅ MIGRATED │      │ ⏸️ READY    │     │ ⏸️ READY    │
  └─────────────┘      └─────────────┘     └─────────────┘

  Deploy to new repo:
  1. Copy board-types.js
  2. Update config.js → generateLegacyConfig(BOARD_TYPES.INTERNSHIPS)
  3. Test (15-20 min)
```

---

## Metrics Archiver (Phase 2.2)

```
  ┌────────────────────────────────────────┐
  │  GitHub Actions Workflow               │
  │  (Runs weekly: Sundays 2 AM UTC)       │
  └────────────────┬───────────────────────┘
                   │
                   ▼
  ┌────────────────────────────────────────┐
  │  .github/data/metrics/                 │
  │                                        │
  │  pipeline-2025-12.jsonl  ◄──┐         │
  │  discord-2025-12.jsonl      │         │
  │  queue-2026-01.jsonl    (keep)        │
  │  channels-2026-01.jsonl     │         │
  │                             │         │
  │  pipeline-2023-10.jsonl  ◄──┤         │
  │  discord-2024-06.jsonl   (archive)    │
  │                             │         │
  └─────────────────────────────┼─────────┘
                                │
                   90-day cutoff
                                │
                                ▼
  ┌────────────────────────────────────────┐
  │  .github/data/metrics/archive/         │
  │                                        │
  │  pipeline-2023-10.jsonl                │
  │  discord-2024-06.jsonl                 │
  │  (older metrics preserved)             │
  └────────────────────────────────────────┘
```

---

## Module Structure

```
.github/scripts/
│
├── Core Entry Points (7,520 lines total)
│   ├── enhanced-discord-bot.js       (982)  ◄── Posts jobs to Discord
│   ├── health-monitor.js             (638)  ◄── System health checks
│   └── job-fetcher/index.js          (89)   ◄── Fetches from ATS APIs
│
├── Configuration (NEW: Phase 2)
│   ├── src/board-types.js            (520)  ◄── Board type templates
│   └── src/discord/config.js         (49)   ◄── Uses board types
│
├── Infrastructure (2,400 lines)
│   ├── src/monitoring/
│   │   ├── alert-router.js           (331)
│   │   ├── metrics-collector.js      (385)
│   │   └── auto-remediation.js       (548)
│   │
│   └── src/utils/
│       ├── logger.js                 (175)
│       ├── file-io.js                (222)
│       └── data-aggregation.js       (197)
│
├── Core Logic (4,600 lines)
│   ├── src/routing/
│   │   ├── router.js                 (361)  ◄── Industry routing
│   │   └── location.js               (164)  ◄── Location routing
│   │
│   ├── src/filters/
│   │   └── job-filters.js            (194)  ◄── Blacklist, dedup
│   │
│   ├── src/discord/
│   │   ├── poster.js                 (413)  ◄── Main posting logic
│   │   └── forum-poster.js           (129)  ◄── Forum channels
│   │
│   └── src/data/
│       └── posted-jobs-manager-v2.js (498)  ◄── V2 schema tracking
│
└── Documentation
    ├── INDEX.md                       ◄── Master navigation
    ├── BOARD_TYPES_MIGRATION_GUIDE.md ◄── Repo migration (NEW)
    └── src/monitoring/README.md       ◄── Monitoring guide
```

---

## Data Schema

```
posted_jobs.json (V2 Schema)
{
  "version": 2,
  "jobs": [
    {
      "id": "meta-software-engineer-menlo-park",
      "job": { /* full job object */ },
      "postedAt": "2026-01-22T10:30:00Z",
      "discordPosts": {                    ◄── Multi-channel tracking
        "tech": {
          "channelId": "1462988605306834987",
          "messageId": "1234567890",
          "threadId": null,
          "url": "https://discord.com/..."
        },
        "bay-area": {
          "channelId": "1462988811263934464",
          "messageId": "9876543210",
          "threadId": null,
          "url": "https://discord.com/..."
        }
      }
    }
  ]
}
```

---

## Workflow Triggers

```
GitHub Actions Workflows:

fetch-jobs.yml          →  Every 30 min   →  Fetch new jobs from ATS
post-jobs.yml           →  Every 30 min   →  Post jobs to Discord
daily-health-report.yml →  Every 6 hours  →  Run health checks
archive-old-metrics.yml →  Weekly Sun 2AM →  Archive old metrics (NEW)
```

---

## Key Metrics

**Success Rate:** 88.83% (schema-aware, counts V1+V2)
**Bot Size:** 982 lines (reduced 21% from 1,240)
**Total System:** 7,520 lines (4,600 core + 2,400 infrastructure + 520 board types)
**Repos:** 3 (New-Grad ✅, Internships ⏸️, Remote ⏸️)
**Channels:** 9 total (4 industry + 5 location)
**Board Types:** 3 templates (NEW_GRAD, INTERNSHIPS, REMOTE)

---

## Phase Completion Status

```
Phase 1: Bot Modularization        ✅ COMPLETE
  ├─ 1.1: Shared utilities          ✅
  ├─ 1.2: Bot modules                ✅
  └─ 1.3: Script organization        ✅

Phase 2: Board Templates            ✅ COMPLETE (This Session)
  ├─ 2.1: Board types system         ✅ NEW
  └─ 2.2: Metrics archiver           ✅ NEW

Phase 3: Observability              ✅ COMPLETE
  ├─ 3.1: Schema-aware monitoring    ✅
  ├─ 3.2: Metrics collection         ✅
  ├─ 3.3: Alert routing              ✅
  ├─ 3.4: Auto-remediation           ✅
  └─ 3.5: Bot instrumentation        ✅

Progress: 11/11 tasks (100%)
```

---

## Quick Commands

```bash
# Health check
node health-monitor.js

# Test board types
node -e "require('./src/discord/config')"

# Get required env vars
node -e "
const { BOARD_TYPES, getRequiredEnvVars } = require('./src/board-types');
console.log(getRequiredEnvVars(BOARD_TYPES.NEW_GRAD));
"

# Query metrics
node src/monitoring/metrics-collector.js summary queue 24

# Run auto-remediation
node src/monitoring/auto-remediation.js run

# Test archiver logic
bash test-metrics-archiver.sh
```
