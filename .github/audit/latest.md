# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T09:13:29.477Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-05T09:13:25.716Z] ========================================
[2026-01-05T09:13:25.718Z] Discord Bot Execution Log
[2026-01-05T09:13:25.718Z] Environment: GitHub Actions
[2026-01-05T09:13:25.718Z] Node Version: v20.19.6
[2026-01-05T09:13:25.718Z] ========================================
[2026-01-05T09:13:25.718Z] Environment Variables Check:
[2026-01-05T09:13:25.718Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T09:13:25.718Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.718Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T09:13:25.719Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T09:13:25.719Z] 
Multi-Channel Configuration:
[2026-01-05T09:13:25.719Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T09:13:25.719Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T09:13:25.719Z] 
Data Files Check:
[2026-01-05T09:13:25.720Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8039 bytes)
[2026-01-05T09:13:25.725Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 653524 bytes)
[2026-01-05T09:13:25.725Z] 
========================================
[2026-01-05T09:13:25.725Z] Starting Enhanced Discord Bot...
[2026-01-05T09:13:25.725Z] ========================================
[2026-01-05T09:13:26.247Z] [BOT] ✅ Loaded V2 database: 1284 jobs
[2026-01-05T09:13:26.702Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T09:13:26.703Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T09:13:26.703Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T09:13:26.703Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-05T09:13:26.781Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-05T09:13:26.867Z] [BOT] ✅ Export complete: Added 2, Skipped 8, Total 214
[2026-01-05T09:13:26.870Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-05T09:13:26.870Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T09:13:26.870Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2026-01-05T09:13:26.870Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-05T09:13:26.871Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T09:13:26.872Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T09:13:26.873Z] [BOT] ✅ Saved pending queue: 40 total (30 pending, 10 enriched, 0 posted)
[2026-01-05T09:13:26.873Z] [BOT] 🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (10 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2026-01-05T09:13:26.873Z] [BOT] ℹ️ No routing entries to save
[2026-01-05T09:13:26.874Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T09:13:26.874Z] [BOT] Total attempts: 10
   Successful: 0
   Failed: 0
   Skipped: 10
[2026-01-05T09:13:26.874Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-01-05T09:13:26.874Z] [BOT] [STATS] Channel stats saved
[2026-01-05T09:13:26.875Z] [BOT ERROR] (node:2931) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T09:13:28.890Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2931) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*