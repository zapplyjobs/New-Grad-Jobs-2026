# Discord Bot Execution Audit
**Timestamp:** 2025-12-26T15:49:34.117Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-26T15:49:23.770Z] ========================================
[2025-12-26T15:49:23.771Z] Discord Bot Execution Log
[2025-12-26T15:49:23.772Z] Environment: GitHub Actions
[2025-12-26T15:49:23.772Z] Node Version: v20.19.6
[2025-12-26T15:49:23.772Z] ========================================
[2025-12-26T15:49:23.772Z] Environment Variables Check:
[2025-12-26T15:49:23.772Z] DISCORD_TOKEN: ✅ Set
[2025-12-26T15:49:23.772Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.772Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-26T15:49:23.772Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-26T15:49:23.772Z] 
Multi-Channel Configuration:
[2025-12-26T15:49:23.772Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.772Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-26T15:49:23.773Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-26T15:49:23.773Z] 
Data Files Check:
[2025-12-26T15:49:23.774Z] .github/data/new_jobs.json: ✅ Exists (2 items, 4092 bytes)
[2025-12-26T15:49:23.775Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 287873 bytes)
[2025-12-26T15:49:23.776Z] 
========================================
[2025-12-26T15:49:23.776Z] Starting Enhanced Discord Bot...
[2025-12-26T15:49:23.776Z] ========================================
[2025-12-26T15:49:24.295Z] [BOT] ✅ Loaded V2 database: 493 jobs
[2025-12-26T15:49:24.776Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-26T15:49:24.776Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-26T15:49:24.776Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-26T15:49:24.777Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-26T15:49:24.824Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-26T15:49:24.878Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 87
[2025-12-26T15:49:24.880Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-26T15:49:24.880Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-26T15:49:24.880Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-26T15:49:24.880Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-26T15:49:24.881Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-26T15:49:24.881Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-26T15:49:24.881Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-26T15:49:24.882Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-26T15:49:24.883Z] [BOT] 📍 [ROUTING] "Junior RUST Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
[2025-12-26T15:49:24.883Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-26T15:49:24.888Z] [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-26T15:49:25.071Z] [BOT] ✅ Created forum post: 🏢 Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2025-12-26T15:49:25.071Z] [BOT] ✅ Industry: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2025-12-26T15:49:26.908Z] [BOT] ✅ Created forum post: 🏢 Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-26T15:49:28.408Z] [BOT] 💾 Marked as posted: Junior RUST Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2025-12-26T15:49:28.408Z] [BOT] 💾 BEFORE ARCHIVING: 494 jobs in database
[2025-12-26T15:49:28.409Z] [BOT] ✅ No jobs to archive (all 494 jobs within 7-day window)
[2025-12-26T15:49:28.425Z] [BOT] 💾 Saved posted_jobs.json: 494 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-26T15:49:31.425Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-26T15:49:31.426Z] [BOT] ⏭️  Skipping duplicate: JID_0b329593 (posted within 7 days)
[2025-12-26T15:49:31.426Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-26T15:49:31.427Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-26T15:49:31.427Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-26T15:49:31.470Z] [BOT] 📂 Loaded 1076 existing routing entries
[2025-12-26T15:49:31.514Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1077
   Timestamp: 2025-12-26T15:49:31.509Z
[2025-12-26T15:49:31.515Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bda0a545.jsonl
[2025-12-26T15:49:31.515Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-26T15:49:31.515Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-26T15:49:31.515Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🚌・boston: 1 posts
[2025-12-26T15:49:31.515Z] [BOT] [STATS] Channel stats saved
[2025-12-26T15:49:33.526Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*