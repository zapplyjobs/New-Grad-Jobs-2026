# Discord Bot Execution Audit
**Timestamp:** 2025-12-28T13:50:16.588Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-28T13:50:14.187Z] ========================================
[2025-12-28T13:50:14.189Z] Discord Bot Execution Log
[2025-12-28T13:50:14.189Z] Environment: GitHub Actions
[2025-12-28T13:50:14.189Z] Node Version: v20.19.6
[2025-12-28T13:50:14.189Z] ========================================
[2025-12-28T13:50:14.189Z] Environment Variables Check:
[2025-12-28T13:50:14.189Z] DISCORD_TOKEN: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-28T13:50:14.189Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-28T13:50:14.189Z] 
Multi-Channel Configuration:
[2025-12-28T13:50:14.189Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.189Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.190Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-28T13:50:14.190Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-28T13:50:14.190Z] 
Data Files Check:
[2025-12-28T13:50:14.190Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-28T13:50:14.191Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 125641 bytes)
[2025-12-28T13:50:14.191Z] 
========================================
[2025-12-28T13:50:14.191Z] Starting Enhanced Discord Bot...
[2025-12-28T13:50:14.191Z] ========================================
[2025-12-28T13:50:14.715Z] [BOT] ✅ Loaded V2 database: 206 jobs
[2025-12-28T13:50:15.483Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-28T13:50:15.484Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-28T13:50:15.484Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-28T13:50:15.494Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*