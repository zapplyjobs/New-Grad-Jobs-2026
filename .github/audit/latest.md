# Discord Bot Execution Audit
**Timestamp:** 2025-11-24T13:51:29.755Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-24T13:51:27.848Z] ========================================
[2025-11-24T13:51:27.850Z] Discord Bot Execution Log
[2025-11-24T13:51:27.850Z] Environment: GitHub Actions
[2025-11-24T13:51:27.850Z] Node Version: v20.19.5
[2025-11-24T13:51:27.850Z] ========================================
[2025-11-24T13:51:27.850Z] Environment Variables Check:
[2025-11-24T13:51:27.850Z] DISCORD_TOKEN: ✅ Set
[2025-11-24T13:51:27.850Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.850Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-24T13:51:27.850Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-24T13:51:27.850Z] 
Multi-Channel Configuration:
[2025-11-24T13:51:27.850Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.850Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.850Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.850Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.851Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.851Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.851Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.851Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.851Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-24T13:51:27.851Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-24T13:51:27.851Z] 
Data Files Check:
[2025-11-24T13:51:27.851Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-24T13:51:27.852Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327566 bytes)
[2025-11-24T13:51:27.852Z] 
========================================
[2025-11-24T13:51:27.852Z] Starting Enhanced Discord Bot...
[2025-11-24T13:51:27.852Z] ========================================
[2025-11-24T13:51:28.868Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-24T13:51:28.868Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-11-24T13:51:28.869Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-24T13:51:28.876Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*