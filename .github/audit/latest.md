# Discord Bot Execution Audit
**Timestamp:** 2025-11-29T02:32:47.731Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-29T02:32:46.016Z] ========================================
[2025-11-29T02:32:46.018Z] Discord Bot Execution Log
[2025-11-29T02:32:46.018Z] Environment: GitHub Actions
[2025-11-29T02:32:46.018Z] Node Version: v20.19.5
[2025-11-29T02:32:46.018Z] ========================================
[2025-11-29T02:32:46.018Z] Environment Variables Check:
[2025-11-29T02:32:46.018Z] DISCORD_TOKEN: ✅ Set
[2025-11-29T02:32:46.018Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.018Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-29T02:32:46.019Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-29T02:32:46.019Z] 
Multi-Channel Configuration:
[2025-11-29T02:32:46.019Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-29T02:32:46.019Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-29T02:32:46.020Z] 
Data Files Check:
[2025-11-29T02:32:46.020Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6206 bytes)
[2025-11-29T02:32:46.022Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330629 bytes)
[2025-11-29T02:32:46.022Z] 
========================================
[2025-11-29T02:32:46.022Z] Starting Enhanced Discord Bot...
[2025-11-29T02:32:46.022Z] ========================================
[2025-11-29T02:32:47.067Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-29T02:32:47.068Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-29T02:32:47.069Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-29T02:32:47.147Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-29T02:32:47.148Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-29T02:32:47.158Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*