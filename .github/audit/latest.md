# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T23:04:54.970Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-05T23:04:53.023Z] ========================================
[2025-12-05T23:04:53.024Z] Discord Bot Execution Log
[2025-12-05T23:04:53.024Z] Environment: GitHub Actions
[2025-12-05T23:04:53.025Z] Node Version: v20.19.6
[2025-12-05T23:04:53.025Z] ========================================
[2025-12-05T23:04:53.025Z] Environment Variables Check:
[2025-12-05T23:04:53.025Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T23:04:53.025Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T23:04:53.025Z] 
Multi-Channel Configuration:
[2025-12-05T23:04:53.025Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.025Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.026Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.026Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T23:04:53.026Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T23:04:53.026Z] 
Data Files Check:
[2025-12-05T23:04:53.026Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-05T23:04:53.026Z] .github/data/posted_jobs.json: ✅ Exists (54 items, 5320 bytes)
[2025-12-05T23:04:53.026Z] 
========================================
[2025-12-05T23:04:53.026Z] Starting Enhanced Discord Bot...
[2025-12-05T23:04:53.026Z] ========================================
[2025-12-05T23:04:54.342Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T23:04:54.342Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-05T23:04:54.343Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T23:04:54.354Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*