# Discord Bot Execution Audit
**Timestamp:** 2025-12-28T12:25:08.451Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-28T12:25:06.749Z] ========================================
[2025-12-28T12:25:06.751Z] Discord Bot Execution Log
[2025-12-28T12:25:06.751Z] Environment: GitHub Actions
[2025-12-28T12:25:06.751Z] Node Version: v20.19.6
[2025-12-28T12:25:06.751Z] ========================================
[2025-12-28T12:25:06.751Z] Environment Variables Check:
[2025-12-28T12:25:06.751Z] DISCORD_TOKEN: ✅ Set
[2025-12-28T12:25:06.751Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.751Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-28T12:25:06.751Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-28T12:25:06.751Z] 
Multi-Channel Configuration:
[2025-12-28T12:25:06.751Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-28T12:25:06.752Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-28T12:25:06.752Z] 
Data Files Check:
[2025-12-28T12:25:06.753Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-28T12:25:06.754Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 125641 bytes)
[2025-12-28T12:25:06.754Z] 
========================================
[2025-12-28T12:25:06.754Z] Starting Enhanced Discord Bot...
[2025-12-28T12:25:06.754Z] ========================================
[2025-12-28T12:25:07.273Z] [BOT] ✅ Loaded V2 database: 206 jobs
[2025-12-28T12:25:07.736Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-28T12:25:07.736Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-28T12:25:07.737Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-28T12:25:07.747Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*