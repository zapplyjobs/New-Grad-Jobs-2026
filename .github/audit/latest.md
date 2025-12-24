# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T17:04:23.183Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T17:04:11.482Z] ========================================
[2025-12-24T17:04:11.484Z] Discord Bot Execution Log
[2025-12-24T17:04:11.484Z] Environment: GitHub Actions
[2025-12-24T17:04:11.484Z] Node Version: v20.19.6
[2025-12-24T17:04:11.484Z] ========================================
[2025-12-24T17:04:11.484Z] Environment Variables Check:
[2025-12-24T17:04:11.484Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T17:04:11.484Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T17:04:11.485Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T17:04:11.485Z] 
Multi-Channel Configuration:
[2025-12-24T17:04:11.485Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.485Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T17:04:11.486Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T17:04:11.486Z] 
Data Files Check:
[2025-12-24T17:04:11.486Z] .github/data/new_jobs.json: ✅ Exists (2 items, 8783 bytes)
[2025-12-24T17:04:11.488Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 390080 bytes)
[2025-12-24T17:04:11.488Z] 
========================================
[2025-12-24T17:04:11.488Z] Starting Enhanced Discord Bot...
[2025-12-24T17:04:11.488Z] ========================================
[2025-12-24T17:04:12.020Z] [BOT] ✅ Loaded V2 database: 672 jobs
[2025-12-24T17:04:12.680Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T17:04:12.680Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T17:04:12.680Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T17:04:12.681Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T17:04:12.736Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T17:04:12.794Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 152
[2025-12-24T17:04:12.795Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T17:04:12.795Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T17:04:12.796Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-24T17:04:12.796Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T17:04:12.796Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T17:04:12.796Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-24T17:04:12.796Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T17:04:12.797Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-24T17:04:12.798Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9d38443e of Chicago
[2025-12-24T17:04:12.799Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-24T17:04:12.803Z] [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T17:04:13.315Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #🤖・ai-jobs
  ✅ Industry: Data Analyst @ ORG_9d38443e of Chicago
[2025-12-24T17:04:15.411Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-24T17:04:16.913Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_9d38443e of Chicago (instance #1)
[2025-12-24T17:04:16.913Z] [BOT] 💾 BEFORE ARCHIVING: 673 jobs in database
[2025-12-24T17:04:16.914Z] [BOT] ✅ No jobs to archive (all 673 jobs within 7-day window)
[2025-12-24T17:04:16.923Z] [BOT] 💾 Saved posted_jobs.json: 673 active jobs
[2025-12-24T17:04:16.923Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T17:04:19.924Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T17:04:19.925Z] [BOT] ⏭️  Skipping duplicate: JID_e938e280-analyst_jr32386 (posted within 7 days)
[2025-12-24T17:04:19.925Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T17:04:19.926Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-24T17:04:19.968Z] [BOT] 📂 Loaded 1065 existing routing entries
[2025-12-24T17:04:20.011Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1066
   Timestamp: 2025-12-24T17:04:20.007Z
[2025-12-24T17:04:20.012Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T17:04:20.012Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-24T17:04:20.012Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2025-12-24T17:04:20.012Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌆・chicago: 1 posts
[2025-12-24T17:04:20.013Z] [BOT] [STATS] Channel stats saved
[2025-12-24T17:04:22.023Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*