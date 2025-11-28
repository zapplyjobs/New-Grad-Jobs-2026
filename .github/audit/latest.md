# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T06:43:55.826Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-28T06:43:52.232Z] ========================================
[2025-11-28T06:43:52.234Z] Discord Bot Execution Log
[2025-11-28T06:43:52.234Z] Environment: GitHub Actions
[2025-11-28T06:43:52.234Z] Node Version: v20.19.5
[2025-11-28T06:43:52.234Z] ========================================
[2025-11-28T06:43:52.234Z] Environment Variables Check:
[2025-11-28T06:43:52.234Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T06:43:52.234Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.234Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T06:43:52.234Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T06:43:52.234Z] 
Multi-Channel Configuration:
[2025-11-28T06:43:52.235Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T06:43:52.235Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T06:43:52.235Z] 
Data Files Check:
[2025-11-28T06:43:52.236Z] .github/data/new_jobs.json: ✅ Exists (12 items, 30530 bytes)
[2025-11-28T06:43:52.238Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330085 bytes)
[2025-11-28T06:43:52.238Z] 
========================================
[2025-11-28T06:43:52.238Z] Starting Enhanced Discord Bot...
[2025-11-28T06:43:52.238Z] ========================================
[2025-11-28T06:43:53.015Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T06:43:53.016Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 12 jobs to encrypted JSON...
[2025-11-28T06:43:53.016Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T06:43:53.094Z] [BOT] ✅ Export complete: Added 0, Skipped 12, Total 12
[2025-11-28T06:43:53.095Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T06:43:53.095Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-28T06:43:53.096Z] [BOT] 📬 Found 9 new jobs (3 already posted)...
[2025-11-28T06:43:53.096Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T06:43:53.096Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
[2025-11-28T06:43:53.096Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds at Amazon
📋 After blacklist filter: 0 jobs (9 blacklisted)
📋 After title+company+location dedup: 0 unique jobs to post
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
[2025-11-28T06:43:53.096Z] [BOT] 📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-28T06:43:53.096Z] [BOT] ℹ️ No routing entries to save
[2025-11-28T06:43:53.097Z] [BOT ERROR] (node:2223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T06:43:55.107Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2223) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*