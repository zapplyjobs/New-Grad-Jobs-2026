# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T08:24:26.206Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-23T08:24:22.275Z] ========================================
[2025-12-23T08:24:22.277Z] Discord Bot Execution Log
[2025-12-23T08:24:22.277Z] Environment: GitHub Actions
[2025-12-23T08:24:22.277Z] Node Version: v20.19.6
[2025-12-23T08:24:22.277Z] ========================================
[2025-12-23T08:24:22.278Z] Environment Variables Check:
[2025-12-23T08:24:22.278Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T08:24:22.278Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.278Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T08:24:22.278Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T08:24:22.278Z] 
Multi-Channel Configuration:
[2025-12-23T08:24:22.278Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.278Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.278Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.278Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.278Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.279Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.279Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.279Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.279Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T08:24:22.279Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T08:24:22.279Z] 
Data Files Check:
[2025-12-23T08:24:22.279Z] .github/data/new_jobs.json: ✅ Exists (1 items, 756 bytes)
[2025-12-23T08:24:22.282Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 420698 bytes)
[2025-12-23T08:24:22.282Z] 
========================================
[2025-12-23T08:24:22.282Z] Starting Enhanced Discord Bot...
[2025-12-23T08:24:22.282Z] ========================================
[2025-12-23T08:24:22.799Z] [BOT] ✅ Loaded V2 database: 727 jobs
[2025-12-23T08:24:23.350Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T08:24:23.351Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T08:24:23.351Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T08:24:23.351Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-23T08:24:23.461Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 164
[2025-12-23T08:24:23.462Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-23T08:24:23.462Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T08:24:23.462Z] [BOT] 📋 After blacklist filter: 0 jobs (1 blacklisted)
[2025-12-23T08:24:23.462Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 0 jobs...
[2025-12-23T08:24:23.462Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-23T08:24:23.463Z] [BOT] ℹ️ No routing entries to save
[2025-12-23T08:24:23.463Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
[2025-12-23T08:24:23.463Z] [BOT] Total attempts: 1
   Successful: 0
   Failed: 0
   Skipped: 1
[2025-12-23T08:24:23.463Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-23T08:24:23.463Z] [BOT] Total posts: 0
   Channels used: 0
[2025-12-23T08:24:23.464Z] [BOT] [STATS] Channel stats saved
[2025-12-23T08:24:23.464Z] [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T08:24:25.478Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2300) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*