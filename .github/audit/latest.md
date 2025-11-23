# Discord Bot Execution Audit
**Timestamp:** 2025-11-23T07:01:23.347Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-23T07:01:21.746Z] ========================================
[2025-11-23T07:01:21.747Z] Discord Bot Execution Log
[2025-11-23T07:01:21.747Z] Environment: GitHub Actions
[2025-11-23T07:01:21.747Z] Node Version: v20.19.5
[2025-11-23T07:01:21.747Z] ========================================
[2025-11-23T07:01:21.747Z] Environment Variables Check:
[2025-11-23T07:01:21.747Z] DISCORD_TOKEN: ✅ Set
[2025-11-23T07:01:21.747Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.747Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-23T07:01:21.747Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-23T07:01:21.748Z] 
Multi-Channel Configuration:
[2025-11-23T07:01:21.748Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-23T07:01:21.748Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-23T07:01:21.748Z] 
Data Files Check:
[2025-11-23T07:01:21.748Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6206 bytes)
[2025-11-23T07:01:21.749Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327572 bytes)
[2025-11-23T07:01:21.750Z] 
========================================
[2025-11-23T07:01:21.750Z] Starting Enhanced Discord Bot...
[2025-11-23T07:01:21.750Z] ========================================
[2025-11-23T07:01:22.708Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-23T07:01:22.709Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-23T07:01:22.709Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-23T07:01:22.746Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-23T07:01:22.747Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-23T07:01:22.747Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-23T07:01:22.755Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*