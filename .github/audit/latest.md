# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T13:12:42.752Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-28T13:12:41.065Z] ========================================
[2025-11-28T13:12:41.067Z] Discord Bot Execution Log
[2025-11-28T13:12:41.067Z] Environment: GitHub Actions
[2025-11-28T13:12:41.067Z] Node Version: v20.19.5
[2025-11-28T13:12:41.067Z] ========================================
[2025-11-28T13:12:41.068Z] Environment Variables Check:
[2025-11-28T13:12:41.068Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T13:12:41.068Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.068Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T13:12:41.068Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T13:12:41.068Z] 
Multi-Channel Configuration:
[2025-11-28T13:12:41.068Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.068Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.068Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.068Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.069Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.069Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.069Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.069Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.069Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T13:12:41.069Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T13:12:41.069Z] 
Data Files Check:
[2025-11-28T13:12:41.069Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6206 bytes)
[2025-11-28T13:12:41.071Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330085 bytes)
[2025-11-28T13:12:41.071Z] 
========================================
[2025-11-28T13:12:41.072Z] Starting Enhanced Discord Bot...
[2025-11-28T13:12:41.072Z] ========================================
[2025-11-28T13:12:41.933Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T13:12:41.934Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-28T13:12:41.934Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T13:12:42.013Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-28T13:12:42.014Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T13:12:42.014Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-28T13:12:42.024Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*