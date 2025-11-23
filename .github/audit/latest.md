# Discord Bot Execution Audit
**Timestamp:** 2025-11-23T20:35:25.285Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-23T20:35:22.754Z] ========================================
[2025-11-23T20:35:22.755Z] Discord Bot Execution Log
[2025-11-23T20:35:22.755Z] Environment: GitHub Actions
[2025-11-23T20:35:22.755Z] Node Version: v20.19.5
[2025-11-23T20:35:22.755Z] ========================================
[2025-11-23T20:35:22.755Z] Environment Variables Check:
[2025-11-23T20:35:22.756Z] DISCORD_TOKEN: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-23T20:35:22.756Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-23T20:35:22.756Z] 
Multi-Channel Configuration:
[2025-11-23T20:35:22.756Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-23T20:35:22.756Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-23T20:35:22.756Z] 
Data Files Check:
[2025-11-23T20:35:22.757Z] .github/data/new_jobs.json: ✅ Exists (1 items, 3122 bytes)
[2025-11-23T20:35:22.758Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327450 bytes)
[2025-11-23T20:35:22.758Z] 
========================================
[2025-11-23T20:35:22.758Z] Starting Enhanced Discord Bot...
[2025-11-23T20:35:22.758Z] ========================================
[2025-11-23T20:35:24.006Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-23T20:35:24.007Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-23T20:35:24.007Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-23T20:35:24.045Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-23T20:35:24.046Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_6389278a at Amentum
[2025-11-23T20:35:24.046Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-23T20:35:24.054Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*