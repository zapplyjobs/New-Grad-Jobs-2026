# Discord Bot Execution Audit
**Timestamp:** 2025-12-28T19:33:25.209Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-28T19:33:23.722Z] ========================================
[2025-12-28T19:33:23.724Z] Discord Bot Execution Log
[2025-12-28T19:33:23.724Z] Environment: GitHub Actions
[2025-12-28T19:33:23.724Z] Node Version: v20.19.6
[2025-12-28T19:33:23.724Z] ========================================
[2025-12-28T19:33:23.724Z] Environment Variables Check:
[2025-12-28T19:33:23.724Z] DISCORD_TOKEN: ✅ Set
[2025-12-28T19:33:23.724Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.724Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-28T19:33:23.724Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-28T19:33:23.724Z] 
Multi-Channel Configuration:
[2025-12-28T19:33:23.724Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.724Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-28T19:33:23.725Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-28T19:33:23.725Z] 
Data Files Check:
[2025-12-28T19:33:23.725Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-28T19:33:23.726Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 125641 bytes)
[2025-12-28T19:33:23.726Z] 
========================================
[2025-12-28T19:33:23.726Z] Starting Enhanced Discord Bot...
[2025-12-28T19:33:23.726Z] ========================================
[2025-12-28T19:33:24.249Z] [BOT] ✅ Loaded V2 database: 206 jobs
[2025-12-28T19:33:24.603Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-28T19:33:24.604Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-28T19:33:24.604Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-28T19:33:24.617Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*