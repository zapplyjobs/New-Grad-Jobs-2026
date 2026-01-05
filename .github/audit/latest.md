# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T04:07:34.616Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T04:07:23.361Z] ========================================
[2026-01-05T04:07:23.363Z] Discord Bot Execution Log
[2026-01-05T04:07:23.363Z] Environment: GitHub Actions
[2026-01-05T04:07:23.363Z] Node Version: v20.19.6
[2026-01-05T04:07:23.363Z] ========================================
[2026-01-05T04:07:23.363Z] Environment Variables Check:
[2026-01-05T04:07:23.363Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T04:07:23.363Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.363Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T04:07:23.364Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T04:07:23.364Z] 
Multi-Channel Configuration:
[2026-01-05T04:07:23.364Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T04:07:23.364Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T04:07:23.365Z] 
Data Files Check:
[2026-01-05T04:07:23.365Z] .github/data/new_jobs.json: ✅ Exists (10 items, 13534 bytes)
[2026-01-05T04:07:23.370Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 650346 bytes)
[2026-01-05T04:07:23.370Z] 
========================================
[2026-01-05T04:07:23.370Z] Starting Enhanced Discord Bot...
[2026-01-05T04:07:23.370Z] ========================================
[2026-01-05T04:07:23.887Z] [BOT] ✅ Loaded V2 database: 1278 jobs
[2026-01-05T04:07:24.599Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T04:07:24.599Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T04:07:24.599Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T04:07:24.600Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-05T04:07:24.754Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 208
[2026-01-05T04:07:24.757Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-05T04:07:24.757Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T04:07:24.757Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T04:07:24.757Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T04:07:24.757Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T04:07:24.758Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T04:07:24.759Z] [BOT] ✅ Loaded pending queue: 51 total (31 pending, 20 enriched, 0 posted)
[2026-01-05T04:07:24.760Z] [BOT] ✅ Saved pending queue: 42 total (31 pending, 11 enriched, 0 posted)
[2026-01-05T04:07:24.761Z] [BOT] 🗑️ Removed 9 blacklisted jobs from pending queue
📋 After blacklist filter: 1 jobs (9 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T04:07:24.761Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T04:07:24.761Z] [BOT] ⏸️ Limiting to 10 jobs this run, 9 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T04:07:24.762Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-05T04:07:24.763Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_a725bda1
[2026-01-05T04:07:24.763Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-05T04:07:24.768Z] [BOT ERROR] (node:2967) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T04:07:25.003Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_a725bda1
[2026-01-05T04:07:26.748Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_a725bda1 in #🤠・austin
[2026-01-05T04:07:26.749Z] [BOT] ✅ Location: 🤠・austin
[2026-01-05T04:07:28.249Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_a725bda1 (instance #1)
[2026-01-05T04:07:28.250Z] [BOT] 💾 BEFORE ARCHIVING: 1279 jobs in database
[2026-01-05T04:07:28.251Z] [BOT] ✅ No jobs to archive (all 1279 jobs within 7-day window)
[2026-01-05T04:07:28.262Z] [BOT] 💾 Saved posted_jobs.json: 1279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T04:07:31.264Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T04:07:31.264Z] [BOT] ⏭️  Skipping duplicate: JID_1b756eed (posted within 7 days)
[2026-01-05T04:07:31.265Z] [BOT] ✅ Loaded pending queue: 42 total (31 pending, 11 enriched, 0 posted)
[2026-01-05T04:07:31.266Z] [BOT] ✅ Saved pending queue: 42 total (31 pending, 10 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T04:07:31.315Z] [BOT] 📂 Loaded 2188 existing routing entries
[2026-01-05T04:07:31.366Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2189
   Timestamp: 2026-01-05T04:07:31.356Z
[2026-01-05T04:07:31.366Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T04:07:31.366Z] [BOT] Total attempts: 11
   Successful: 2
   Failed: 0
   Skipped: 9
[2026-01-05T04:07:31.367Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2026-01-05T04:07:33.377Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2967) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*