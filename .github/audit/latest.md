# Discord Bot Execution Audit
**Timestamp:** 2025-11-23T17:01:23.354Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-23T17:01:21.086Z] ========================================
[2025-11-23T17:01:21.087Z] Discord Bot Execution Log
[2025-11-23T17:01:21.087Z] Environment: GitHub Actions
[2025-11-23T17:01:21.087Z] Node Version: v20.19.5
[2025-11-23T17:01:21.087Z] ========================================
[2025-11-23T17:01:21.087Z] Environment Variables Check:
[2025-11-23T17:01:21.087Z] DISCORD_TOKEN: ✅ Set
[2025-11-23T17:01:21.087Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.087Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-23T17:01:21.087Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-23T17:01:21.087Z] 
Multi-Channel Configuration:
[2025-11-23T17:01:21.087Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-23T17:01:21.088Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-23T17:01:21.088Z] 
Data Files Check:
[2025-11-23T17:01:21.088Z] .github/data/new_jobs.json: ✅ Exists (1 items, 3122 bytes)
[2025-11-23T17:01:21.089Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327450 bytes)
[2025-11-23T17:01:21.089Z] 
========================================
[2025-11-23T17:01:21.090Z] Starting Enhanced Discord Bot...
[2025-11-23T17:01:21.090Z] ========================================
[2025-11-23T17:01:22.092Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-23T17:01:22.093Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-23T17:01:22.093Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-23T17:01:22.130Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-23T17:01:22.131Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
[2025-11-23T17:01:22.131Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-23T17:01:22.139Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*