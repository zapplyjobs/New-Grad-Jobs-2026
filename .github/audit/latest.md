# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T10:04:34.152Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T10:04:22.627Z] ========================================
[2026-01-02T10:04:22.629Z] Discord Bot Execution Log
[2026-01-02T10:04:22.629Z] Environment: GitHub Actions
[2026-01-02T10:04:22.629Z] Node Version: v20.19.6
[2026-01-02T10:04:22.629Z] ========================================
[2026-01-02T10:04:22.629Z] Environment Variables Check:
[2026-01-02T10:04:22.629Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T10:04:22.629Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.629Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T10:04:22.630Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T10:04:22.630Z] 
Multi-Channel Configuration:
[2026-01-02T10:04:22.630Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T10:04:22.630Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T10:04:22.630Z] 
Data Files Check:
[2026-01-02T10:04:22.631Z] .github/data/new_jobs.json: ✅ Exists (4 items, 8563 bytes)
[2026-01-02T10:04:22.632Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 67323 bytes)
[2026-01-02T10:04:22.632Z] 
========================================
[2026-01-02T10:04:22.632Z] Starting Enhanced Discord Bot...
[2026-01-02T10:04:22.632Z] ========================================
[2026-01-02T10:04:23.159Z] [BOT] ✅ Loaded V2 database: 112 jobs
[2026-01-02T10:04:24.250Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T10:04:24.251Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T10:04:24.251Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T10:04:24.251Z] [BOT] 📦 Exporting 4 jobs to encrypted JSON...
[2026-01-02T10:04:24.342Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 48
[2026-01-02T10:04:24.343Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2026-01-02T10:04:24.343Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T10:04:24.344Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T10:04:24.344Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T10:04:24.344Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2026-01-02T10:04:24.345Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T10:04:24.345Z] [BOT] 🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (3 blacklisted)
[2026-01-02T10:04:24.345Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
📋 After multi-location grouping: 1 unique jobs to post
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T10:04:24.346Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-02T10:04:24.347Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_bbacffd9
[2026-01-02T10:04:24.348Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-02T10:04:24.352Z] [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T10:04:24.563Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・tech-jobs
[2026-01-02T10:04:24.564Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_bbacffd9
[2026-01-02T10:04:26.370Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_bbacffd9 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T10:04:27.871Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_bbacffd9 (instance #1)
[2026-01-02T10:04:27.871Z] [BOT] 💾 BEFORE ARCHIVING: 113 jobs in database
[2026-01-02T10:04:27.871Z] [BOT] ✅ No jobs to archive (all 113 jobs within 7-day window)
[2026-01-02T10:04:27.877Z] [BOT] 💾 Saved posted_jobs.json: 113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T10:04:30.878Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T10:04:30.878Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202570349 (posted within 7 days)
[2026-01-02T10:04:30.879Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T10:04:30.879Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T10:04:30.921Z] [BOT] 📂 Loaded 1184 existing routing entries
[2026-01-02T10:04:30.966Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1185
   Timestamp: 2026-01-02T10:04:30.960Z
[2026-01-02T10:04:30.966Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 5
[2026-01-02T10:04:30.966Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 3
[2026-01-02T10:04:30.967Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T10:04:30.967Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T10:04:30.967Z] [BOT] [STATS] Channel stats saved
[2026-01-02T10:04:32.976Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*