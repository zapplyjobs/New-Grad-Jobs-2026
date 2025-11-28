# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T21:47:47.587Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-28T21:47:45.972Z] ========================================
[2025-11-28T21:47:45.974Z] Discord Bot Execution Log
[2025-11-28T21:47:45.974Z] Environment: GitHub Actions
[2025-11-28T21:47:45.974Z] Node Version: v20.19.5
[2025-11-28T21:47:45.974Z] ========================================
[2025-11-28T21:47:45.974Z] Environment Variables Check:
[2025-11-28T21:47:45.974Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T21:47:45.975Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T21:47:45.975Z] 
Multi-Channel Configuration:
[2025-11-28T21:47:45.975Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.975Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.976Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T21:47:45.976Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T21:47:45.976Z] 
Data Files Check:
[2025-11-28T21:47:45.976Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6206 bytes)
[2025-11-28T21:47:45.978Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330248 bytes)
[2025-11-28T21:47:45.978Z] 
========================================
[2025-11-28T21:47:45.978Z] Starting Enhanced Discord Bot...
[2025-11-28T21:47:45.978Z] ========================================
[2025-11-28T21:47:46.926Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T21:47:46.927Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-28T21:47:46.927Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T21:47:47.002Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-11-28T21:47:47.003Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T21:47:47.003Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-11-28T21:47:47.011Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*