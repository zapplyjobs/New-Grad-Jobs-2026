# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T01:11:27.633Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T01:11:16.133Z] ========================================
[2025-12-24T01:11:16.135Z] Discord Bot Execution Log
[2025-12-24T01:11:16.135Z] Environment: GitHub Actions
[2025-12-24T01:11:16.135Z] Node Version: v20.19.6
[2025-12-24T01:11:16.135Z] ========================================
[2025-12-24T01:11:16.135Z] Environment Variables Check:
[2025-12-24T01:11:16.135Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T01:11:16.135Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.135Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T01:11:16.136Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T01:11:16.136Z] 
Multi-Channel Configuration:
[2025-12-24T01:11:16.136Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T01:11:16.136Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T01:11:16.137Z] 
Data Files Check:
[2025-12-24T01:11:16.137Z] .github/data/new_jobs.json: ✅ Exists (2 items, 8989 bytes)
[2025-12-24T01:11:16.139Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 382125 bytes)
[2025-12-24T01:11:16.139Z] 
========================================
[2025-12-24T01:11:16.139Z] Starting Enhanced Discord Bot...
[2025-12-24T01:11:16.139Z] ========================================
[2025-12-24T01:11:16.646Z] [BOT] ✅ Loaded V2 database: 660 jobs
[2025-12-24T01:11:17.505Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T01:11:17.505Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T01:11:17.505Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T01:11:17.506Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T01:11:17.613Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 154
[2025-12-24T01:11:17.615Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T01:11:17.615Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T01:11:17.615Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-24T01:11:17.615Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T01:11:17.616Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T01:11:17.616Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T01:11:17.617Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-24T01:11:17.618Z] [BOT] 📍 [ROUTING] "Data Scientist - Associate" @ ORG_1cb0354c
[2025-12-24T01:11:17.618Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-24T01:11:17.623Z] [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T01:11:17.823Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Associate @ ORG_1cb0354c in #🤖・ai-jobs
[2025-12-24T01:11:17.823Z] [BOT] ✅ Industry: Data Scientist - Associate @ ORG_1cb0354c
[2025-12-24T01:11:19.809Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Associate @ ORG_1cb0354c in #🌆・chicago
[2025-12-24T01:11:19.810Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-24T01:11:21.311Z] [BOT] 💾 Marked as posted: Data Scientist - Associate @ ORG_1cb0354c (instance #1)
[2025-12-24T01:11:21.312Z] [BOT] 💾 BEFORE ARCHIVING: 661 jobs in database
[2025-12-24T01:11:21.312Z] [BOT] ✅ No jobs to archive (all 661 jobs within 7-day window)
[2025-12-24T01:11:21.321Z] [BOT] 💾 Saved posted_jobs.json: 661 active jobs
[2025-12-24T01:11:21.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T01:11:24.322Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T01:11:24.322Z] [BOT] ⏭️  Skipping duplicate: JID_bd7edbbe-_jr-0013624 (posted within 7 days)
[2025-12-24T01:11:24.323Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T01:11:24.323Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-24T01:11:24.323Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
[2025-12-24T01:11:24.323Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-24T01:11:24.367Z] [BOT] 📂 Loaded 1053 existing routing entries
[2025-12-24T01:11:24.410Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1054
[2025-12-24T01:11:24.411Z] [BOT] Timestamp: 2025-12-24T01:11:24.406Z
[2025-12-24T01:11:24.411Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T01:11:24.411Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-24T01:11:24.411Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-24T01:11:24.412Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🌆・chicago: 1 posts
[2025-12-24T01:11:24.412Z] [BOT] [STATS] Channel stats saved
[2025-12-24T01:11:26.421Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*