# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T19:04:12.491Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-28T19:04:10.015Z] ========================================
[2025-11-28T19:04:10.017Z] Discord Bot Execution Log
[2025-11-28T19:04:10.017Z] Environment: GitHub Actions
[2025-11-28T19:04:10.017Z] Node Version: v20.19.5
[2025-11-28T19:04:10.017Z] ========================================
[2025-11-28T19:04:10.017Z] Environment Variables Check:
[2025-11-28T19:04:10.017Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T19:04:10.017Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.017Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T19:04:10.017Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T19:04:10.018Z] 
Multi-Channel Configuration:
[2025-11-28T19:04:10.018Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T19:04:10.018Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T19:04:10.018Z] 
Data Files Check:
[2025-11-28T19:04:10.019Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6206 bytes)
[2025-11-28T19:04:10.021Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330085 bytes)
[2025-11-28T19:04:10.021Z] 
========================================
[2025-11-28T19:04:10.021Z] Starting Enhanced Discord Bot...
[2025-11-28T19:04:10.021Z] ========================================
[2025-11-28T19:04:11.169Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T19:04:11.170Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-28T19:04:11.170Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T19:04:11.247Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-28T19:04:11.248Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T19:04:11.248Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-28T19:04:11.257Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*