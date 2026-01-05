# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T05:46:31.470Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-05T05:46:26.513Z] ========================================
[2026-01-05T05:46:26.515Z] Discord Bot Execution Log
[2026-01-05T05:46:26.515Z] Environment: GitHub Actions
[2026-01-05T05:46:26.515Z] Node Version: v20.19.6
[2026-01-05T05:46:26.515Z] ========================================
[2026-01-05T05:46:26.516Z] Environment Variables Check:
[2026-01-05T05:46:26.516Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T05:46:26.516Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.516Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T05:46:26.516Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T05:46:26.516Z] 
Multi-Channel Configuration:
[2026-01-05T05:46:26.516Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.516Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.516Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.516Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.517Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.517Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.517Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.517Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.517Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T05:46:26.517Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T05:46:26.517Z] 
Data Files Check:
[2026-01-05T05:46:26.517Z] .github/data/new_jobs.json: ✅ Exists (10 items, 8052 bytes)
[2026-01-05T05:46:26.522Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 650809 bytes)
[2026-01-05T05:46:26.522Z] 
========================================
[2026-01-05T05:46:26.522Z] Starting Enhanced Discord Bot...
[2026-01-05T05:46:26.522Z] ========================================
[2026-01-05T05:46:27.046Z] [BOT] ✅ Loaded V2 database: 1279 jobs
[2026-01-05T05:46:28.122Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T05:46:28.125Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-05T05:46:28.125Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T05:46:28.125Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T05:46:28.126Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-05T05:46:28.279Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 208
[2026-01-05T05:46:28.281Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-05T05:46:28.281Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T05:46:28.282Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T05:46:28.282Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T05:46:28.282Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T05:46:28.282Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-05T05:46:28.283Z] [BOT] ✅ Loaded pending queue: 50 total (30 pending, 20 enriched, 0 posted)
[2026-01-05T05:46:28.285Z] [BOT] ✅ Saved pending queue: 40 total (30 pending, 10 enriched, 0 posted)
[2026-01-05T05:46:28.285Z] [BOT] 🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (10 blacklisted)
📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-01-05T05:46:28.285Z] [BOT] ✅ All posting operations complete, cleaning up...
ℹ️ No routing entries to save
[2026-01-05T05:46:28.286Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T05:46:28.286Z] [BOT] Total attempts: 10
   Successful: 0
   Failed: 0
   Skipped: 10
[2026-01-05T05:46:28.286Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-05T05:46:28.286Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-01-05T05:46:28.286Z] [BOT] [STATS] Channel stats saved
[2026-01-05T05:46:28.287Z] [BOT ERROR] (node:3186) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T05:46:30.300Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3186) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*