# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T15:23:06.609Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-30T15:23:04.278Z] ========================================
[2025-11-30T15:23:04.280Z] Discord Bot Execution Log
[2025-11-30T15:23:04.280Z] Environment: GitHub Actions
[2025-11-30T15:23:04.280Z] Node Version: v20.19.5
[2025-11-30T15:23:04.280Z] ========================================
[2025-11-30T15:23:04.280Z] Environment Variables Check:
[2025-11-30T15:23:04.280Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T15:23:04.281Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T15:23:04.281Z] 
Multi-Channel Configuration:
[2025-11-30T15:23:04.281Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.281Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.282Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T15:23:04.282Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T15:23:04.282Z] 
Data Files Check:
[2025-11-30T15:23:04.282Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-30T15:23:04.283Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330744 bytes)
[2025-11-30T15:23:04.283Z] 
========================================
[2025-11-30T15:23:04.283Z] Starting Enhanced Discord Bot...
[2025-11-30T15:23:04.283Z] ========================================
[2025-11-30T15:23:05.384Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T15:23:05.384Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-11-30T15:23:05.385Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T15:23:05.392Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*