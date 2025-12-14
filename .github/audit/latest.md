# Discord Bot Execution Audit
**Timestamp:** 2025-12-14T20:36:29.298Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-14T20:36:26.909Z] ========================================
[2025-12-14T20:36:26.910Z] Discord Bot Execution Log
[2025-12-14T20:36:26.911Z] Environment: GitHub Actions
[2025-12-14T20:36:26.911Z] Node Version: v20.19.6
[2025-12-14T20:36:26.911Z] ========================================
[2025-12-14T20:36:26.911Z] Environment Variables Check:
[2025-12-14T20:36:26.911Z] DISCORD_TOKEN: ✅ Set
[2025-12-14T20:36:26.911Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.911Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-14T20:36:26.911Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-14T20:36:26.911Z] 
Multi-Channel Configuration:
[2025-12-14T20:36:26.911Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.911Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.911Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.912Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.912Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.912Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.912Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.912Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.912Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-14T20:36:26.912Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-14T20:36:26.912Z] 
Data Files Check:
[2025-12-14T20:36:26.912Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-14T20:36:26.913Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 85687 bytes)
[2025-12-14T20:36:26.913Z] 
========================================
[2025-12-14T20:36:26.913Z] Starting Enhanced Discord Bot...
[2025-12-14T20:36:26.913Z] ========================================
[2025-12-14T20:36:27.482Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2025-12-14T20:36:28.091Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-14T20:36:28.092Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-14T20:36:28.092Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-14T20:36:28.103Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*