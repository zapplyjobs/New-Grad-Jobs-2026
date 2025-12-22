# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T18:55:23.214Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-22T18:55:19.356Z] ========================================
[2025-12-22T18:55:19.358Z] Discord Bot Execution Log
[2025-12-22T18:55:19.358Z] Environment: GitHub Actions
[2025-12-22T18:55:19.358Z] Node Version: v20.19.6
[2025-12-22T18:55:19.358Z] ========================================
[2025-12-22T18:55:19.358Z] Environment Variables Check:
[2025-12-22T18:55:19.358Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T18:55:19.358Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.358Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T18:55:19.359Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T18:55:19.359Z] 
Multi-Channel Configuration:
[2025-12-22T18:55:19.359Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T18:55:19.359Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T18:55:19.359Z] 
Data Files Check:
[2025-12-22T18:55:19.360Z] .github/data/new_jobs.json: ✅ Exists (1 items, 756 bytes)
[2025-12-22T18:55:19.364Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 541791 bytes)
[2025-12-22T18:55:19.364Z] 
========================================
[2025-12-22T18:55:19.364Z] Starting Enhanced Discord Bot...
[2025-12-22T18:55:19.364Z] ========================================
[2025-12-22T18:55:19.906Z] [BOT] ✅ Loaded V2 database: 925 jobs
[2025-12-22T18:55:20.376Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T18:55:20.376Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T18:55:20.376Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T18:55:20.377Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-22T18:55:20.487Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 170
[2025-12-22T18:55:20.488Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-22T18:55:20.489Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T18:55:20.489Z] [BOT] 📋 After blacklist filter: 0 jobs (1 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
[2025-12-22T18:55:20.489Z] [BOT] 📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 0 jobs...
[2025-12-22T18:55:20.489Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-22T18:55:20.489Z] [BOT] ℹ️ No routing entries to save
[2025-12-22T18:55:20.490Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
[2025-12-22T18:55:20.490Z] [BOT] Total attempts: 1
   Successful: 0
   Failed: 0
   Skipped: 1
[2025-12-22T18:55:20.490Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2025-12-22T18:55:20.490Z] [BOT] [STATS] Channel stats saved
[2025-12-22T18:55:20.491Z] [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T18:55:22.505Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*