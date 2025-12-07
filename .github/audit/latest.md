# Discord Bot Execution Audit
**Timestamp:** 2025-12-07T15:33:51.233Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-07T15:33:49.567Z] ========================================
[2025-12-07T15:33:49.569Z] Discord Bot Execution Log
[2025-12-07T15:33:49.569Z] Environment: GitHub Actions
[2025-12-07T15:33:49.569Z] Node Version: v20.19.6
[2025-12-07T15:33:49.569Z] ========================================
[2025-12-07T15:33:49.569Z] Environment Variables Check:
[2025-12-07T15:33:49.569Z] DISCORD_TOKEN: ✅ Set
[2025-12-07T15:33:49.569Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.569Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-07T15:33:49.569Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-07T15:33:49.569Z] 
Multi-Channel Configuration:
[2025-12-07T15:33:49.570Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-07T15:33:49.570Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-07T15:33:49.570Z] 
Data Files Check:
[2025-12-07T15:33:49.571Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-07T15:33:49.571Z] .github/data/posted_jobs.json: ✅ Exists (51 items, 5065 bytes)
[2025-12-07T15:33:49.571Z] 
========================================
[2025-12-07T15:33:49.571Z] Starting Enhanced Discord Bot...
[2025-12-07T15:33:49.571Z] ========================================
[2025-12-07T15:33:50.657Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-07T15:33:50.658Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-07T15:33:50.658Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-07T15:33:50.670Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*