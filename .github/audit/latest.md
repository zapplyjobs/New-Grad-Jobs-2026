# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T07:33:23.175Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-30T07:33:20.821Z] ========================================
[2025-12-30T07:33:20.823Z] Discord Bot Execution Log
[2025-12-30T07:33:20.823Z] Environment: GitHub Actions
[2025-12-30T07:33:20.823Z] Node Version: v20.19.6
[2025-12-30T07:33:20.824Z] ========================================
[2025-12-30T07:33:20.824Z] Environment Variables Check:
[2025-12-30T07:33:20.824Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T07:33:20.824Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.824Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T07:33:20.824Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T07:33:20.824Z] 
Multi-Channel Configuration:
[2025-12-30T07:33:20.824Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.824Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.824Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.825Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.825Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.825Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.825Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.825Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.825Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T07:33:20.825Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T07:33:20.825Z] 
Data Files Check:
[2025-12-30T07:33:20.825Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-30T07:33:20.826Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 46378 bytes)
[2025-12-30T07:33:20.826Z] 
========================================
[2025-12-30T07:33:20.826Z] Starting Enhanced Discord Bot...
[2025-12-30T07:33:20.826Z] ========================================
[2025-12-30T07:33:21.338Z] [BOT] ✅ Loaded V2 database: 75 jobs
[2025-12-30T07:33:21.956Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T07:33:21.957Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-30T07:33:21.957Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T07:33:21.967Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*