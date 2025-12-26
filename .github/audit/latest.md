# Discord Bot Execution Audit
**Timestamp:** 2025-12-26T21:34:55.177Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-26T21:34:50.918Z] ========================================
[2025-12-26T21:34:50.920Z] Discord Bot Execution Log
[2025-12-26T21:34:50.920Z] Environment: GitHub Actions
[2025-12-26T21:34:50.921Z] Node Version: v20.19.6
[2025-12-26T21:34:50.921Z] ========================================
[2025-12-26T21:34:50.921Z] Environment Variables Check:
[2025-12-26T21:34:50.921Z] DISCORD_TOKEN: ✅ Set
[2025-12-26T21:34:50.921Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.921Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-26T21:34:50.921Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-26T21:34:50.921Z] 
Multi-Channel Configuration:
[2025-12-26T21:34:50.921Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.921Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-26T21:34:50.922Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-26T21:34:50.922Z] 
Data Files Check:
[2025-12-26T21:34:50.922Z] .github/data/new_jobs.json: ✅ Exists (1 items, 756 bytes)
[2025-12-26T21:34:50.924Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 289756 bytes)
[2025-12-26T21:34:50.924Z] 
========================================
[2025-12-26T21:34:50.924Z] Starting Enhanced Discord Bot...
[2025-12-26T21:34:50.924Z] ========================================
[2025-12-26T21:34:51.454Z] [BOT] ✅ Loaded V2 database: 496 jobs
[2025-12-26T21:34:52.218Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-26T21:34:52.219Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-26T21:34:52.219Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-26T21:34:52.219Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-26T21:34:52.266Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-26T21:34:52.319Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 81
[2025-12-26T21:34:52.320Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-26T21:34:52.320Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-26T21:34:52.320Z] [BOT] 📋 After blacklist filter: 0 jobs (1 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
[2025-12-26T21:34:52.320Z] [BOT] 📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-26T21:34:52.321Z] [BOT] ℹ️ No routing entries to save
[2025-12-26T21:34:52.321Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bda0a545.jsonl
   Total attempts: 1
   Successful: 0
   Failed: 0
   Skipped: 1
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 0
[2025-12-26T21:34:52.322Z] [BOT] Channels used: 0
[STATS] Channel stats saved
[2025-12-26T21:34:52.322Z] [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-26T21:34:54.335Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2357) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*