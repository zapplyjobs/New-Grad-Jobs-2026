# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T12:25:52.147Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-30T12:25:49.546Z] ========================================
[2025-12-30T12:25:49.548Z] Discord Bot Execution Log
[2025-12-30T12:25:49.548Z] Environment: GitHub Actions
[2025-12-30T12:25:49.548Z] Node Version: v20.19.6
[2025-12-30T12:25:49.548Z] ========================================
[2025-12-30T12:25:49.548Z] Environment Variables Check:
[2025-12-30T12:25:49.548Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T12:25:49.549Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T12:25:49.549Z] 
Multi-Channel Configuration:
[2025-12-30T12:25:49.549Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.549Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.550Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T12:25:49.550Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T12:25:49.550Z] 
Data Files Check:
[2025-12-30T12:25:49.550Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-30T12:25:49.551Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 43702 bytes)
[2025-12-30T12:25:49.551Z] 
========================================
[2025-12-30T12:25:49.551Z] Starting Enhanced Discord Bot...
[2025-12-30T12:25:49.551Z] ========================================
[2025-12-30T12:25:50.083Z] [BOT] ✅ Loaded V2 database: 72 jobs
[2025-12-30T12:25:50.989Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T12:25:50.989Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-30T12:25:50.990Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T12:25:51.000Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*