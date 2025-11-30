# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T22:22:40.014Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-30T22:22:38.574Z] ========================================
[2025-11-30T22:22:38.576Z] Discord Bot Execution Log
[2025-11-30T22:22:38.576Z] Environment: GitHub Actions
[2025-11-30T22:22:38.576Z] Node Version: v20.19.5
[2025-11-30T22:22:38.576Z] ========================================
[2025-11-30T22:22:38.576Z] Environment Variables Check:
[2025-11-30T22:22:38.576Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T22:22:38.576Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.576Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T22:22:38.577Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T22:22:38.577Z] 
Multi-Channel Configuration:
[2025-11-30T22:22:38.577Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T22:22:38.577Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T22:22:38.577Z] 
Data Files Check:
[2025-11-30T22:22:38.578Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-30T22:22:38.579Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330993 bytes)
[2025-11-30T22:22:38.579Z] 
========================================
[2025-11-30T22:22:38.579Z] Starting Enhanced Discord Bot...
[2025-11-30T22:22:38.579Z] ========================================
[2025-11-30T22:22:39.434Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T22:22:39.435Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-11-30T22:22:39.435Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T22:22:39.443Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*