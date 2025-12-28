# Discord Bot Execution Audit
**Timestamp:** 2025-12-28T02:35:24.498Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-28T02:35:20.585Z] ========================================
[2025-12-28T02:35:20.587Z] Discord Bot Execution Log
[2025-12-28T02:35:20.587Z] Environment: GitHub Actions
[2025-12-28T02:35:20.587Z] Node Version: v20.19.6
[2025-12-28T02:35:20.587Z] ========================================
[2025-12-28T02:35:20.587Z] Environment Variables Check:
[2025-12-28T02:35:20.587Z] DISCORD_TOKEN: ✅ Set
[2025-12-28T02:35:20.587Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.587Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-28T02:35:20.588Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-28T02:35:20.588Z] 
Multi-Channel Configuration:
[2025-12-28T02:35:20.588Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-28T02:35:20.588Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-28T02:35:20.588Z] 
Data Files Check:
[2025-12-28T02:35:20.589Z] .github/data/new_jobs.json: ✅ Exists (1 items, 756 bytes)
[2025-12-28T02:35:20.590Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 231736 bytes)
[2025-12-28T02:35:20.590Z] 
========================================
[2025-12-28T02:35:20.590Z] Starting Enhanced Discord Bot...
[2025-12-28T02:35:20.590Z] ========================================
[2025-12-28T02:35:21.101Z] [BOT] ✅ Loaded V2 database: 394 jobs
[2025-12-28T02:35:21.785Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-28T02:35:21.785Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-28T02:35:21.785Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-28T02:35:21.786Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-28T02:35:21.832Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-28T02:35:21.883Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 73
[2025-12-28T02:35:21.884Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-28T02:35:21.885Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-28T02:35:21.885Z] [BOT] 📋 After blacklist filter: 0 jobs (1 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
[2025-12-28T02:35:21.885Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2025-12-28T02:35:21.885Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2025-12-28T02:35:21.886Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_a1bf548c.jsonl
[2025-12-28T02:35:21.886Z] [BOT] Total attempts: 1
   Successful: 0
   Failed: 0
   Skipped: 1
[2025-12-28T02:35:21.886Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2025-12-28T02:35:21.886Z] [BOT] [STATS] Channel stats saved
[2025-12-28T02:35:21.887Z] [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-28T02:35:23.899Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2343) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*