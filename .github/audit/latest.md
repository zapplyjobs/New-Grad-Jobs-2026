# Discord Bot Execution Audit
**Timestamp:** 2025-12-27T03:44:29.335Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-27T03:44:25.291Z] ========================================
[2025-12-27T03:44:25.293Z] Discord Bot Execution Log
[2025-12-27T03:44:25.293Z] Environment: GitHub Actions
[2025-12-27T03:44:25.293Z] Node Version: v20.19.6
[2025-12-27T03:44:25.293Z] ========================================
[2025-12-27T03:44:25.293Z] Environment Variables Check:
[2025-12-27T03:44:25.293Z] DISCORD_TOKEN: ✅ Set
[2025-12-27T03:44:25.293Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.293Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-27T03:44:25.294Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-27T03:44:25.294Z] 
Multi-Channel Configuration:
[2025-12-27T03:44:25.294Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-27T03:44:25.294Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-27T03:44:25.295Z] 
Data Files Check:
[2025-12-27T03:44:25.295Z] .github/data/new_jobs.json: ✅ Exists (1 items, 756 bytes)
[2025-12-27T03:44:25.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 230593 bytes)
[2025-12-27T03:44:25.297Z] 
========================================
[2025-12-27T03:44:25.297Z] Starting Enhanced Discord Bot...
[2025-12-27T03:44:25.297Z] ========================================
[2025-12-27T03:44:25.856Z] [BOT] ✅ Loaded V2 database: 392 jobs
[2025-12-27T03:44:26.484Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-27T03:44:26.484Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-27T03:44:26.485Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-27T03:44:26.485Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-27T03:44:26.533Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-27T03:44:26.586Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 72
[2025-12-27T03:44:26.587Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-27T03:44:26.587Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-27T03:44:26.588Z] [BOT] 📋 After blacklist filter: 0 jobs (1 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
[2025-12-27T03:44:26.588Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-27T03:44:26.588Z] [BOT] 🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2025-12-27T03:44:26.589Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_22bd1254.jsonl
[2025-12-27T03:44:26.589Z] [BOT] Total attempts: 1
   Successful: 0
   Failed: 0
   Skipped: 1
[2025-12-27T03:44:26.589Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2025-12-27T03:44:26.589Z] [BOT] [STATS] Channel stats saved
[2025-12-27T03:44:26.590Z] [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-27T03:44:28.603Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*