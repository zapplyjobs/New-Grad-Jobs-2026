# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T23:34:37.484Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-06T23:34:35.713Z] ========================================
[2025-12-06T23:34:35.715Z] Discord Bot Execution Log
[2025-12-06T23:34:35.715Z] Environment: GitHub Actions
[2025-12-06T23:34:35.715Z] Node Version: v20.19.6
[2025-12-06T23:34:35.715Z] ========================================
[2025-12-06T23:34:35.715Z] Environment Variables Check:
[2025-12-06T23:34:35.715Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T23:34:35.715Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.715Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T23:34:35.715Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T23:34:35.716Z] 
Multi-Channel Configuration:
[2025-12-06T23:34:35.716Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T23:34:35.716Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T23:34:35.716Z] 
Data Files Check:
[2025-12-06T23:34:35.717Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-06T23:34:35.717Z] .github/data/posted_jobs.json: ✅ Exists (78 items, 7667 bytes)
[2025-12-06T23:34:35.717Z] 
========================================
[2025-12-06T23:34:35.717Z] Starting Enhanced Discord Bot...
[2025-12-06T23:34:35.717Z] ========================================
[2025-12-06T23:34:36.762Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T23:34:36.762Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-06T23:34:36.763Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T23:34:36.771Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*