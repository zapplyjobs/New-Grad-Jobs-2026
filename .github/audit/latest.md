# Discord Bot Execution Audit
**Timestamp:** 2025-12-14T20:02:47.277Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-14T20:02:45.528Z] ========================================
[2025-12-14T20:02:45.530Z] Discord Bot Execution Log
[2025-12-14T20:02:45.530Z] Environment: GitHub Actions
[2025-12-14T20:02:45.530Z] Node Version: v20.19.6
[2025-12-14T20:02:45.530Z] ========================================
[2025-12-14T20:02:45.530Z] Environment Variables Check:
[2025-12-14T20:02:45.530Z] DISCORD_TOKEN: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-14T20:02:45.531Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-14T20:02:45.531Z] 
Multi-Channel Configuration:
[2025-12-14T20:02:45.531Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.531Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.532Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.532Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-14T20:02:45.532Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-14T20:02:45.532Z] 
Data Files Check:
[2025-12-14T20:02:45.532Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-14T20:02:45.533Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 85687 bytes)
[2025-12-14T20:02:45.533Z] 
========================================
[2025-12-14T20:02:45.533Z] Starting Enhanced Discord Bot...
[2025-12-14T20:02:45.533Z] ========================================
[2025-12-14T20:02:46.088Z] [BOT] ✅ Loaded V2 database: 134 jobs
[2025-12-14T20:02:46.560Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-14T20:02:46.560Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-14T20:02:46.561Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-14T20:02:46.573Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*