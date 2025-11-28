# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T15:47:42.797Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-28T15:47:41.137Z] ========================================
[2025-11-28T15:47:41.139Z] Discord Bot Execution Log
[2025-11-28T15:47:41.139Z] Environment: GitHub Actions
[2025-11-28T15:47:41.139Z] Node Version: v20.19.5
[2025-11-28T15:47:41.139Z] ========================================
[2025-11-28T15:47:41.139Z] Environment Variables Check:
[2025-11-28T15:47:41.139Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T15:47:41.139Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.139Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T15:47:41.140Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T15:47:41.140Z] 
Multi-Channel Configuration:
[2025-11-28T15:47:41.140Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T15:47:41.140Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T15:47:41.140Z] 
Data Files Check:
[2025-11-28T15:47:41.141Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6206 bytes)
[2025-11-28T15:47:41.143Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330085 bytes)
[2025-11-28T15:47:41.143Z] 
========================================
[2025-11-28T15:47:41.143Z] Starting Enhanced Discord Bot...
[2025-11-28T15:47:41.143Z] ========================================
[2025-11-28T15:47:42.084Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T15:47:42.084Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-28T15:47:42.085Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T15:47:42.162Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-28T15:47:42.163Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T15:47:42.163Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-28T15:47:42.171Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*