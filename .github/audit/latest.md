# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T04:25:50.072Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-30T04:25:48.517Z] ========================================
[2025-11-30T04:25:48.519Z] Discord Bot Execution Log
[2025-11-30T04:25:48.519Z] Environment: GitHub Actions
[2025-11-30T04:25:48.519Z] Node Version: v20.19.5
[2025-11-30T04:25:48.519Z] ========================================
[2025-11-30T04:25:48.519Z] Environment Variables Check:
[2025-11-30T04:25:48.519Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T04:25:48.519Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.519Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T04:25:48.520Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T04:25:48.520Z] 
Multi-Channel Configuration:
[2025-11-30T04:25:48.520Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T04:25:48.520Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T04:25:48.520Z] 
Data Files Check:
[2025-11-30T04:25:48.521Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-30T04:25:48.522Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330696 bytes)
[2025-11-30T04:25:48.522Z] 
========================================
[2025-11-30T04:25:48.522Z] Starting Enhanced Discord Bot...
[2025-11-30T04:25:48.522Z] ========================================
[2025-11-30T04:25:49.404Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T04:25:49.405Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-11-30T04:25:49.405Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T04:25:49.412Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*