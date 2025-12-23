# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T23:35:24.489Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T23:35:13.859Z] ========================================
[2025-12-23T23:35:13.861Z] Discord Bot Execution Log
[2025-12-23T23:35:13.861Z] Environment: GitHub Actions
[2025-12-23T23:35:13.861Z] Node Version: v20.19.6
[2025-12-23T23:35:13.861Z] ========================================
[2025-12-23T23:35:13.861Z] Environment Variables Check:
[2025-12-23T23:35:13.861Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T23:35:13.862Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.862Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T23:35:13.862Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T23:35:13.862Z] 
Multi-Channel Configuration:
[2025-12-23T23:35:13.862Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.862Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.862Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.862Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.862Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.862Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.863Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.863Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.863Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T23:35:13.863Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T23:35:13.863Z] 
Data Files Check:
[2025-12-23T23:35:13.863Z] .github/data/new_jobs.json: ✅ Exists (2 items, 8468 bytes)
[2025-12-23T23:35:13.866Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 374567 bytes)
[2025-12-23T23:35:13.866Z] 
========================================
[2025-12-23T23:35:13.866Z] Starting Enhanced Discord Bot...
[2025-12-23T23:35:13.866Z] ========================================
[2025-12-23T23:35:14.383Z] [BOT] ✅ Loaded V2 database: 648 jobs
[2025-12-23T23:35:15.203Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T23:35:15.204Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T23:35:15.204Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T23:35:15.207Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-23T23:35:15.313Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 151
[2025-12-23T23:35:15.314Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-23T23:35:15.315Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T23:35:15.315Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-23T23:35:15.315Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-23T23:35:15.315Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-23T23:35:15.316Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T23:35:15.317Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-23T23:35:15.318Z] [BOT] 📍 [ROUTING] "Data & Business Insights Associate" @ ORG_0ee6cb3e Data
[2025-12-23T23:35:15.318Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-23T23:35:15.323Z] [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T23:35:15.612Z] [BOT] ✅ Created forum post: 🏢 Data & Business Insights Associate @ ORG_0ee6cb3e Data in #💻・tech-jobs
[2025-12-23T23:35:15.612Z] [BOT] ✅ Industry: Data & Business Insights Associate @ ORG_0ee6cb3e Data
[2025-12-23T23:35:17.259Z] [BOT] ✅ Created forum post: 🏢 Data & Business Insights Associate @ ORG_0ee6cb3e Data in #🤠・austin
[2025-12-23T23:35:17.259Z] [BOT] ✅ Location: 🤠・austin
[2025-12-23T23:35:18.758Z] [BOT] 💾 Marked as posted: Data & Business Insights Associate @ ORG_0ee6cb3e Data (instance #1)
[2025-12-23T23:35:18.759Z] [BOT] 💾 BEFORE ARCHIVING: 649 jobs in database
[2025-12-23T23:35:18.759Z] [BOT] ✅ No jobs to archive (all 649 jobs within 7-day window)
[2025-12-23T23:35:18.775Z] [BOT] 💾 Saved posted_jobs.json: 649 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T23:35:21.775Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-23T23:35:21.775Z] [BOT] ⏭️  Skipping duplicate: JID_db4fb92b (posted within 7 days)
[2025-12-23T23:35:21.776Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-23T23:35:21.776Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-23T23:35:21.776Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-23T23:35:21.818Z] [BOT] 📂 Loaded 1041 existing routing entries
[2025-12-23T23:35:21.861Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-23T23:35:21.861Z] [BOT] Total entries: 1042
   Timestamp: 2025-12-23T23:35:21.857Z
[2025-12-23T23:35:21.862Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
   Total attempts: 3
[2025-12-23T23:35:21.862Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-23T23:35:21.862Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-23T23:35:21.862Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🤠・austin: 1 posts
[2025-12-23T23:35:21.863Z] [BOT] [STATS] Channel stats saved
[2025-12-23T23:35:23.872Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*