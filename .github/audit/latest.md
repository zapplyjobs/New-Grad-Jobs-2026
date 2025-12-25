# Discord Bot Execution Audit
**Timestamp:** 2025-12-25T20:23:58.256Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-25T20:23:54.587Z] ========================================
[2025-12-25T20:23:54.589Z] Discord Bot Execution Log
[2025-12-25T20:23:54.589Z] Environment: GitHub Actions
[2025-12-25T20:23:54.589Z] Node Version: v20.19.6
[2025-12-25T20:23:54.589Z] ========================================
[2025-12-25T20:23:54.589Z] Environment Variables Check:
[2025-12-25T20:23:54.589Z] DISCORD_TOKEN: ✅ Set
[2025-12-25T20:23:54.589Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.589Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-25T20:23:54.589Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-25T20:23:54.589Z] 
Multi-Channel Configuration:
[2025-12-25T20:23:54.590Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-25T20:23:54.590Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-25T20:23:54.590Z] 
Data Files Check:
[2025-12-25T20:23:54.591Z] .github/data/new_jobs.json: ✅ Exists (1 items, 756 bytes)
[2025-12-25T20:23:54.593Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 395544 bytes)
[2025-12-25T20:23:54.593Z] 
========================================
[2025-12-25T20:23:54.593Z] Starting Enhanced Discord Bot...
[2025-12-25T20:23:54.593Z] ========================================
[2025-12-25T20:23:55.108Z] [BOT] ✅ Loaded V2 database: 681 jobs
[2025-12-25T20:23:55.593Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-25T20:23:55.593Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-25T20:23:55.594Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-25T20:23:55.594Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-25T20:23:55.644Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-25T20:23:55.702Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 121
[2025-12-25T20:23:55.703Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-25T20:23:55.704Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-25T20:23:55.704Z] [BOT] 📋 After blacklist filter: 0 jobs (1 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
[2025-12-25T20:23:55.704Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-25T20:23:55.704Z] [BOT] ℹ️ No routing entries to save
[2025-12-25T20:23:55.705Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9a8c61a9.jsonl
[2025-12-25T20:23:55.705Z] [BOT] Total attempts: 1
   Successful: 0
   Failed: 0
   Skipped: 1
[2025-12-25T20:23:55.705Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-25T20:23:55.705Z] [BOT] Total posts: 0
   Channels used: 0
[2025-12-25T20:23:55.705Z] [BOT] [STATS] Channel stats saved
[2025-12-25T20:23:55.706Z] [BOT ERROR] (node:2310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-25T20:23:57.718Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*