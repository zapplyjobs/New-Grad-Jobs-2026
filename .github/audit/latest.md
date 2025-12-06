# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T15:34:28.349Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-06T15:34:25.780Z] ========================================
[2025-12-06T15:34:25.782Z] Discord Bot Execution Log
[2025-12-06T15:34:25.782Z] Environment: GitHub Actions
[2025-12-06T15:34:25.782Z] Node Version: v20.19.6
[2025-12-06T15:34:25.782Z] ========================================
[2025-12-06T15:34:25.782Z] Environment Variables Check:
[2025-12-06T15:34:25.782Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T15:34:25.783Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T15:34:25.783Z] 
Multi-Channel Configuration:
[2025-12-06T15:34:25.783Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T15:34:25.783Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T15:34:25.784Z] 
Data Files Check:
[2025-12-06T15:34:25.784Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-06T15:34:25.784Z] .github/data/posted_jobs.json: ✅ Exists (77 items, 7542 bytes)
[2025-12-06T15:34:25.784Z] 
========================================
[2025-12-06T15:34:25.784Z] Starting Enhanced Discord Bot...
[2025-12-06T15:34:25.784Z] ========================================
[2025-12-06T15:34:27.216Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T15:34:27.217Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-06T15:34:27.217Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T15:34:27.227Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*