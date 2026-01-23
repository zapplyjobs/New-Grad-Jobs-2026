# Monitoring Infrastructure

**Purpose:** Observability and self-healing for GitHub Discord job posting system
**Created:** 2026-01-22
**Complexity:** 1,264 lines total
**Status:** Full observability stack (keep all, documented for future)

---

## Overview

Three-module observability system:

1. **alert-router.js** (331 lines) - Routes health alerts to Discord webhooks
2. **metrics-collector.js** (385 lines) - Collects time-series metrics in JSONL format
3. **auto-remediation.js** (548 lines) - Self-healing runbooks with confidence scoring

---

## Quick Reference

### Alert Routing

**File:** `alert-router.js`

**Purpose:** Send health alerts to Discord webhooks and GitHub Actions summaries

**Usage:**
```bash
# Test alert routing
node alert-router.js test

# Route alerts from health report
node alert-router.js health-report

# Automatic routing (integrated into health-monitor.js)
node ../health-monitor.js  # Alerts route automatically
```

**Environment Variables:**
- `DISCORD_OPS_WEBHOOK_URL` - Operational alerts (warnings)
- `DISCORD_CRITICAL_WEBHOOK_URL` - Critical alerts (failures)

**Severity Routing:**
- CRITICAL → Discord critical webhook + GitHub summary + logs
- WARNING → Discord ops webhook + GitHub summary + logs
- INFO → Logs only

**Integration:** Automatically called by `health-monitor.js` after health checks

---

### Metrics Collection

**File:** `metrics-collector.js`

**Purpose:** Collect and store time-series metrics for trend analysis

**Storage Format:**
- Location: `.github/data/metrics/{category}-YYYY-MM.jsonl`
- Format: One JSON object per line (append-only)
- Retention: 90 days (manual archival)

**Categories:**
1. **pipeline** - Job fetching metrics (fetch_count, new_jobs, duplicates)
2. **discord** - Bot posting metrics (total_posted, total_failed, success_rate)
3. **queue** - Queue health metrics (size, pending, duplicates, stale)
4. **channels** - Per-channel metrics (posts_count, thread_count)

**Usage:**
```bash
# Collect test metrics
node metrics-collector.js test

# Get summary (last N hours)
node metrics-collector.js summary pipeline 24    # Last 24 hours
node metrics-collector.js summary discord 168    # Last 7 days
node metrics-collector.js summary queue 720      # Last 30 days

# Archive old metrics (>90 days)
node metrics-collector.js archive pipeline
```

**Integration:**
- `health-monitor.js` - Collects queue metrics after health checks
- `enhanced-discord-bot.js` - Collects discord + channel metrics after posting
- `job-fetcher/job-processor.js` - Collects pipeline metrics after fetching

**Example Queries:**
```bash
# Show queue size trend
node metrics-collector.js summary queue 168
# Output: { current_queue_size: 2768, current_pending: 2752 }

# Show posting success rate
node metrics-collector.js summary discord 24
# Output: { total_posted: 150, total_failed: 5, avg_success_rate: 0.968 }
```

---

### Auto-Remediation

**File:** `auto-remediation.js`

**Purpose:** Self-healing system with 5 runbooks and confidence-based execution

**Runbooks:**

1. **Queue Duplicates Cleanup** (HIGH confidence)
   - Detects duplicate jobs in pending_posts.json
   - Auto-removes duplicates
   - Creates backup before modification

2. **Database Capacity Management** (MEDIUM/HIGH confidence)
   - Rotates seen_jobs.json when >9,500 entries
   - Keeps last 30 days, archives rest
   - Prevents 10MB file size issues

3. **V1→V2 Migration Detection** (LOW confidence)
   - Detects V1 legacy posts (62.3% of current posts)
   - Alert only, no auto-migration (too complex)

4. **Rate Limit Recovery** (Placeholder)
   - Framework ready for future implementation
   - Currently returns healthy

5. **Stale Jobs Cleanup** (MEDIUM confidence)
   - Removes jobs stuck in pending >48 hours
   - Won't auto-clean if >50% of queue (enrichment service issue)

**Confidence Levels:**
- **HIGH** (90%+) - Auto-execute without intervention
- **MEDIUM** (70-90%) - Auto-execute with logging
- **LOW** (<70%) - Alert only, don't execute

**Usage:**
```bash
# Run all runbooks
node auto-remediation.js run

# Test specific runbook
node auto-remediation.js test queue       # Queue duplicates
node auto-remediation.js test capacity    # DB capacity
node auto-remediation.js test migration   # V1→V2 detection
node auto-remediation.js test stale       # Stale jobs
```

**Integration:** Automatically runs after health checks in `health-monitor.js`

**Backups:** All remediation creates timestamped backups before modifications
- Format: `{file}.backup-{timestamp}.json`
- Location: Same directory as original file

---

## Integration Points

### health-monitor.js Integration

```javascript
// After health checks, runs:
1. collectQueueMetrics() - Store queue health metrics
2. runAllRunbooks() - Execute auto-remediation
3. routeAlerts() - Send alerts to Discord/GitHub
```

### enhanced-discord-bot.js Integration

```javascript
// After posting jobs, runs:
1. collectDiscordMetrics() - Store posting metrics
2. collectChannelMetrics() - Store per-channel metrics
```

### job-processor.js Integration

```javascript
// After processing jobs, runs:
1. collectPipelineMetrics() - Store fetch/dedup metrics
```

---

## File Locations

```
.github/scripts/
├── src/monitoring/
│   ├── alert-router.js         # Alert routing to Discord
│   ├── metrics-collector.js    # Time-series metrics storage
│   ├── auto-remediation.js     # Self-healing runbooks
│   └── README.md              # This file
├── health-monitor.js           # Health checks (uses all 3)
├── enhanced-discord-bot.js     # Bot (uses metrics-collector)
└── job-fetcher/
    └── job-processor.js        # Pipeline (uses metrics-collector)

.github/data/metrics/
├── pipeline-2026-01.jsonl      # Pipeline metrics
├── discord-2026-01.jsonl       # Discord metrics
├── queue-2026-01.jsonl         # Queue metrics
└── channels-2026-01.jsonl      # Channel metrics (if collected)
```

---

## Maintenance Notes

**Created:** 2026-01-22
**Complexity:** 1,264 lines total (over budget, but documented)
**Decision:** Keep all for now, review quarterly for deletion

**Maintenance Burden:**
- Alert routing: 331 lines × 5 min = 28 hours context
- Metrics collection: 385 lines × 5 min = 32 hours context
- Auto-remediation: 548 lines × 5 min = 46 hours context
- **Total:** 106 hours context loading in future sessions

**When to Review:**
- Quarterly: "Are we actually using these features?"
- If metrics never queried → Delete metrics-collector.js
- If alerts never checked → Delete alert-router.js
- If runbooks never triggered → Delete auto-remediation.js

**Simplification Options:**
- Delete auto-remediation.js, use manual scripts (saves 46 hours)
- Delete alert-router.js, use GitHub Actions (saves 28 hours)
- Simplify metrics-collector.js to queue-only (saves 20 hours)

---

## Development Methodology Notes

**From:** `.GenAI_Work/.meta/DEVELOPMENT_METHODOLOGY.md`

**YAGNI Assessment:**
- ⚠️ Over-engineered for current scale (cron job, not real-time system)
- ⚠️ Built for hypothetical future needs (metrics dashboard, auto-healing)
- ⚠️ 2.7x over complexity budget

**Cost/Benefit:**
- Auto-remediation: 46 hours cost for 5 min/month benefit (FAIL)
- Metrics collection: 32 hours cost for trend analysis (QUESTIONABLE)
- Alert routing: 28 hours cost for Discord alerts (QUESTIONABLE)

**Keep Decision:** User requested full observability, acknowledged complexity

**Future Action:** Review in 3 months, delete if unused

---

## See Also

- `.GenAI_Work/.meta/DEVELOPMENT_METHODOLOGY.md` - YAGNI/KISS principles
- `.GenAI_Work/.sessions/AUDIT_2026_01_22_OBSERVABILITY.md` - Full audit
- `../schema-aware-health.js` - Schema-aware monitoring (Phase 3.1)
- `../health-monitor.js` - Main health check system

---

**Last Updated:** 2026-01-22
