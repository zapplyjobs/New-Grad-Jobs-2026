# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T23:48:32.315Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-06T23:48:30.176Z] ========================================
[2025-12-06T23:48:30.178Z] Discord Bot Execution Log
[2025-12-06T23:48:30.178Z] Environment: GitHub Actions
[2025-12-06T23:48:30.178Z] Node Version: v20.19.6
[2025-12-06T23:48:30.178Z] ========================================
[2025-12-06T23:48:30.178Z] Environment Variables Check:
[2025-12-06T23:48:30.178Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T23:48:30.178Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T23:48:30.179Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T23:48:30.179Z] 
Multi-Channel Configuration:
[2025-12-06T23:48:30.179Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.179Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T23:48:30.180Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T23:48:30.180Z] 
Data Files Check:
[2025-12-06T23:48:30.180Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-06T23:48:30.180Z] .github/data/posted_jobs.json: ✅ Exists (78 items, 7667 bytes)
[2025-12-06T23:48:30.180Z] 
========================================
[2025-12-06T23:48:30.180Z] Starting Enhanced Discord Bot...
[2025-12-06T23:48:30.180Z] ========================================
[2025-12-06T23:48:31.510Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T23:48:31.510Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-06T23:48:31.511Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T23:48:31.522Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*