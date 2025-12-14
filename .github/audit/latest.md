# Discord Bot Execution Audit
**Timestamp:** 2025-12-14T23:02:50.457Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-14T23:02:47.748Z] ========================================
[2025-12-14T23:02:47.750Z] Discord Bot Execution Log
[2025-12-14T23:02:47.750Z] Environment: GitHub Actions
[2025-12-14T23:02:47.750Z] Node Version: v20.19.6
[2025-12-14T23:02:47.751Z] ========================================
[2025-12-14T23:02:47.751Z] Environment Variables Check:
[2025-12-14T23:02:47.751Z] DISCORD_TOKEN: ✅ Set
[2025-12-14T23:02:47.751Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.751Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-14T23:02:47.751Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-14T23:02:47.751Z] 
Multi-Channel Configuration:
[2025-12-14T23:02:47.751Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.751Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.751Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.751Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.752Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.752Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.752Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.752Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.752Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-14T23:02:47.752Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-14T23:02:47.752Z] 
Data Files Check:
[2025-12-14T23:02:47.752Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-14T23:02:47.753Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 85687 bytes)
[2025-12-14T23:02:47.753Z] 
========================================
[2025-12-14T23:02:47.753Z] Starting Enhanced Discord Bot...
[2025-12-14T23:02:47.753Z] ========================================
[2025-12-14T23:02:48.345Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2025-12-14T23:02:49.226Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-14T23:02:49.226Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-14T23:02:49.226Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-14T23:02:49.239Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*