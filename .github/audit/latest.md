# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T07:38:28.794Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-02T07:38:24.339Z] ========================================
[2026-01-02T07:38:24.341Z] Discord Bot Execution Log
[2026-01-02T07:38:24.341Z] Environment: GitHub Actions
[2026-01-02T07:38:24.341Z] Node Version: v20.19.6
[2026-01-02T07:38:24.341Z] ========================================
[2026-01-02T07:38:24.341Z] Environment Variables Check:
[2026-01-02T07:38:24.341Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T07:38:24.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.341Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T07:38:24.341Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T07:38:24.341Z] 
Multi-Channel Configuration:
[2026-01-02T07:38:24.341Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T07:38:24.342Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T07:38:24.342Z] 
Data Files Check:
[2026-01-02T07:38:24.343Z] .github/data/new_jobs.json: ✅ Exists (9 items, 6698 bytes)
[2026-01-02T07:38:24.343Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 66162 bytes)
[2026-01-02T07:38:24.343Z] 
========================================
[2026-01-02T07:38:24.343Z] Starting Enhanced Discord Bot...
[2026-01-02T07:38:24.343Z] ========================================
[2026-01-02T07:38:24.868Z] [BOT] ✅ Loaded V2 database: 110 jobs
[2026-01-02T07:38:25.458Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T07:38:25.458Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T07:38:25.458Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T07:38:25.459Z] [BOT] 📦 Exporting 9 jobs to encrypted JSON...
[2026-01-02T07:38:25.550Z] [BOT] ✅ Export complete: Added 0, Skipped 9, Total 47
[2026-01-02T07:38:25.551Z] [BOT] 📬 Found 9 new jobs (0 already posted)...
[2026-01-02T07:38:25.551Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T07:38:25.551Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T07:38:25.552Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T07:38:25.552Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T07:38:25.552Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-02T07:38:25.552Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-01-02T07:38:25.553Z] [BOT] ✅ Saved pending queue: 0 total (0 pending, 0 enriched, 0 posted)
[2026-01-02T07:38:25.553Z] [BOT] 🗑️ Removed 9 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (9 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 9 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2026-01-02T07:38:25.554Z] [BOT] ℹ️ No routing entries to save
📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 9
   Successful: 0
   Failed: 0
   Skipped: 9
[2026-01-02T07:38:25.554Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-01-02T07:38:25.554Z] [BOT] [STATS] Channel stats saved
[2026-01-02T07:38:25.555Z] [BOT ERROR] (node:2326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T07:38:27.569Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2326) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*