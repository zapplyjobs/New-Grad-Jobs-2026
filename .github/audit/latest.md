# Discord Bot Execution Audit
**Timestamp:** 2025-12-28T03:59:49.616Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-28T03:59:47.245Z] ========================================
[2025-12-28T03:59:47.247Z] Discord Bot Execution Log
[2025-12-28T03:59:47.247Z] Environment: GitHub Actions
[2025-12-28T03:59:47.248Z] Node Version: v20.19.6
[2025-12-28T03:59:47.248Z] ========================================
[2025-12-28T03:59:47.248Z] Environment Variables Check:
[2025-12-28T03:59:47.248Z] DISCORD_TOKEN: ✅ Set
[2025-12-28T03:59:47.248Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.248Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-28T03:59:47.248Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-28T03:59:47.248Z] 
Multi-Channel Configuration:
[2025-12-28T03:59:47.248Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.248Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-28T03:59:47.249Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-28T03:59:47.249Z] 
Data Files Check:
[2025-12-28T03:59:47.250Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-28T03:59:47.251Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 125641 bytes)
[2025-12-28T03:59:47.251Z] 
========================================
[2025-12-28T03:59:47.251Z] Starting Enhanced Discord Bot...
[2025-12-28T03:59:47.251Z] ========================================
[2025-12-28T03:59:47.799Z] [BOT] ✅ Loaded V2 database: 206 jobs
[2025-12-28T03:59:48.336Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-28T03:59:48.337Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-28T03:59:48.337Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-28T03:59:48.348Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*