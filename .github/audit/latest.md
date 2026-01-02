# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T18:04:44.959Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T18:04:34.570Z] ========================================
[2026-01-02T18:04:34.572Z] Discord Bot Execution Log
[2026-01-02T18:04:34.572Z] Environment: GitHub Actions
[2026-01-02T18:04:34.572Z] Node Version: v20.19.6
[2026-01-02T18:04:34.572Z] ========================================
[2026-01-02T18:04:34.573Z] Environment Variables Check:
[2026-01-02T18:04:34.573Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T18:04:34.573Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.573Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T18:04:34.573Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T18:04:34.573Z] 
Multi-Channel Configuration:
[2026-01-02T18:04:34.573Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.573Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.573Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.573Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.573Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.574Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.574Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.574Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.574Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T18:04:34.574Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T18:04:34.574Z] 
Data Files Check:
[2026-01-02T18:04:34.574Z] .github/data/new_jobs.json: ✅ Exists (2 items, 14851 bytes)
[2026-01-02T18:04:34.575Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 80369 bytes)
[2026-01-02T18:04:34.575Z] 
========================================
[2026-01-02T18:04:34.575Z] Starting Enhanced Discord Bot...
[2026-01-02T18:04:34.575Z] ========================================
[2026-01-02T18:04:35.112Z] [BOT] ✅ Loaded V2 database: 132 jobs
[2026-01-02T18:04:35.601Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T18:04:35.602Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T18:04:35.602Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T18:04:35.602Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-02T18:04:35.648Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-02T18:04:35.698Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 48
[2026-01-02T18:04:35.699Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-02T18:04:35.699Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-02T18:04:35.699Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-02T18:04:35.700Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
   (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital: overland park, leawood
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T18:04:35.702Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-02T18:04:35.703Z] [BOT] 📍 [ROUTING] "Clinical Analyst 1" @ ORG_b344d80e University of Kansas Hospital
[2026-01-02T18:04:35.703Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T18:04:35.708Z] [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T18:04:35.958Z] [BOT] ✅ Created forum post: 🏢 Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital in #🩺・healthcare-jobs
[2026-01-02T18:04:35.958Z] [BOT] ✅ Industry: Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital
[2026-01-02T18:04:37.724Z] [BOT] ✅ Created forum post: 🏢 Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital in #💻・remote-usa
[2026-01-02T18:04:37.724Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-02T18:04:39.225Z] [BOT] 💾 Marked as posted: Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital (instance #1)
[2026-01-02T18:04:39.225Z] [BOT] 💾 BEFORE ARCHIVING: 133 jobs in database
[2026-01-02T18:04:39.226Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-02T18:04:39.230Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2026-01-02T18:04:39.231Z] [BOT] ✅ Archiving complete: 2 archived, 131 active
[2026-01-02T18:04:39.233Z] [BOT] 💾 Saved posted_jobs.json: 131 active jobs
[2026-01-02T18:04:39.233Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T18:04:39.233Z] [BOT] 💾 Marked as posted: Clinical Analyst 1 @ ORG_b344d80e University of Kansas Hospital (instance #1)
💾 BEFORE ARCHIVING: 132 jobs in database
[2026-01-02T18:04:39.233Z] [BOT] ✅ No jobs to archive (all 132 jobs within 7-day window)
[2026-01-02T18:04:39.235Z] [BOT] 💾 Saved posted_jobs.json: 132 active jobs
[2026-01-02T18:04:39.235Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T18:04:42.236Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T18:04:42.237Z] [BOT] ⏭️  Skipping duplicate: JID_6334e6c1-_r-48868-1 (posted within 7 days)
[2026-01-02T18:04:42.237Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-02T18:04:42.238Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-02T18:04:42.238Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-02T18:04:42.282Z] [BOT] 📂 Loaded 1207 existing routing entries
[2026-01-02T18:04:42.329Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1208
   Timestamp: 2026-01-02T18:04:42.323Z
[2026-01-02T18:04:42.329Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 2
   Successful: 2
[2026-01-02T18:04:42.329Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-02T18:04:42.330Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T18:04:42.330Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T18:04:42.330Z] [BOT] 1. #🩺・healthcare-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T18:04:42.330Z] [BOT] [STATS] Channel stats saved
[2026-01-02T18:04:44.340Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2545) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*