# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T19:34:47.933Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-04T19:34:43.318Z] ========================================
[2026-01-04T19:34:43.319Z] Discord Bot Execution Log
[2026-01-04T19:34:43.320Z] Environment: GitHub Actions
[2026-01-04T19:34:43.320Z] Node Version: v20.19.6
[2026-01-04T19:34:43.320Z] ========================================
[2026-01-04T19:34:43.320Z] Environment Variables Check:
[2026-01-04T19:34:43.320Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T19:34:43.320Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T19:34:43.320Z] 
Multi-Channel Configuration:
[2026-01-04T19:34:43.320Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.320Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.321Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T19:34:43.321Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T19:34:43.321Z] 
Data Files Check:
[2026-01-04T19:34:43.321Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8039 bytes)
[2026-01-04T19:34:43.326Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 649304 bytes)
[2026-01-04T19:34:43.326Z] 
========================================
[2026-01-04T19:34:43.326Z] Starting Enhanced Discord Bot...
[2026-01-04T19:34:43.326Z] ========================================
[2026-01-04T19:34:43.774Z] [BOT] ✅ Loaded V2 database: 1276 jobs
[2026-01-04T19:34:44.680Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T19:34:44.680Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T19:34:44.680Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T19:34:44.681Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T19:34:44.755Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-04T19:34:44.837Z] [BOT] ✅ Export complete: Added 2, Skipped 8, Total 209
[2026-01-04T19:34:44.839Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T19:34:44.839Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T19:34:44.840Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2026-01-04T19:34:44.840Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T19:34:44.840Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T19:34:44.841Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-04T19:34:44.842Z] [BOT] ✅ Saved pending queue: 40 total (30 pending, 10 enriched, 0 posted)
[2026-01-04T19:34:44.843Z] [BOT] 🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (10 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2026-01-04T19:34:44.843Z] [BOT] ℹ️ No routing entries to save
[2026-01-04T19:34:44.843Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
   Total attempts: 10
[2026-01-04T19:34:44.843Z] [BOT] Successful: 0
   Failed: 0
   Skipped: 10
[2026-01-04T19:34:44.843Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-01-04T19:34:44.844Z] [BOT] [STATS] Channel stats saved
[2026-01-04T19:34:44.844Z] [BOT ERROR] (node:2890) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T19:34:46.857Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2890) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*