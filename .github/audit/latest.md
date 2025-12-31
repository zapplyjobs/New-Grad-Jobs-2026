# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T23:04:05.434Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-31T23:04:03.243Z] ========================================
[2025-12-31T23:04:03.244Z] Discord Bot Execution Log
[2025-12-31T23:04:03.245Z] Environment: GitHub Actions
[2025-12-31T23:04:03.245Z] Node Version: v20.19.6
[2025-12-31T23:04:03.245Z] ========================================
[2025-12-31T23:04:03.245Z] Environment Variables Check:
[2025-12-31T23:04:03.245Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T23:04:03.245Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.245Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T23:04:03.245Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T23:04:03.245Z] 
Multi-Channel Configuration:
[2025-12-31T23:04:03.245Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.245Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.245Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.245Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.246Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.246Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.246Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.246Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.246Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T23:04:03.246Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T23:04:03.246Z] 
Data Files Check:
[2025-12-31T23:04:03.246Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-31T23:04:03.247Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31522 bytes)
[2025-12-31T23:04:03.247Z] 
========================================
[2025-12-31T23:04:03.247Z] Starting Enhanced Discord Bot...
[2025-12-31T23:04:03.247Z] ========================================
[2025-12-31T23:04:03.774Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2025-12-31T23:04:04.804Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T23:04:04.804Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T23:04:04.804Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T23:04:04.804Z] [BOT] ℹ️ No new jobs to post
[2025-12-31T23:04:04.815Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*