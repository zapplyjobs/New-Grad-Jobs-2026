# Discord Bot Execution Audit
**Timestamp:** 2025-11-24T07:01:22.700Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-24T07:01:21.047Z] ========================================
[2025-11-24T07:01:21.048Z] Discord Bot Execution Log
[2025-11-24T07:01:21.048Z] Environment: GitHub Actions
[2025-11-24T07:01:21.048Z] Node Version: v20.19.5
[2025-11-24T07:01:21.048Z] ========================================
[2025-11-24T07:01:21.048Z] Environment Variables Check:
[2025-11-24T07:01:21.048Z] DISCORD_TOKEN: ✅ Set
[2025-11-24T07:01:21.048Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.048Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-24T07:01:21.048Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-24T07:01:21.048Z] 
Multi-Channel Configuration:
[2025-11-24T07:01:21.048Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-24T07:01:21.049Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-24T07:01:21.049Z] 
Data Files Check:
[2025-11-24T07:01:21.049Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-24T07:01:21.050Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327482 bytes)
[2025-11-24T07:01:21.050Z] 
========================================
[2025-11-24T07:01:21.050Z] Starting Enhanced Discord Bot...
[2025-11-24T07:01:21.050Z] ========================================
[2025-11-24T07:01:21.988Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-24T07:01:21.988Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-11-24T07:01:21.989Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-24T07:01:21.994Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*