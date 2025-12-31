# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T10:23:42.288Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-31T10:23:40.597Z] ========================================
[2025-12-31T10:23:40.599Z] Discord Bot Execution Log
[2025-12-31T10:23:40.599Z] Environment: GitHub Actions
[2025-12-31T10:23:40.599Z] Node Version: v20.19.6
[2025-12-31T10:23:40.599Z] ========================================
[2025-12-31T10:23:40.599Z] Environment Variables Check:
[2025-12-31T10:23:40.599Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T10:23:40.599Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.599Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T10:23:40.600Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T10:23:40.600Z] 
Multi-Channel Configuration:
[2025-12-31T10:23:40.600Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T10:23:40.600Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T10:23:40.600Z] 
Data Files Check:
[2025-12-31T10:23:40.601Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-31T10:23:40.601Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 32919 bytes)
[2025-12-31T10:23:40.601Z] 
========================================
[2025-12-31T10:23:40.601Z] Starting Enhanced Discord Bot...
[2025-12-31T10:23:40.601Z] ========================================
[2025-12-31T10:23:41.132Z] [BOT] ✅ Loaded V2 database: 55 jobs
[2025-12-31T10:23:41.528Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T10:23:41.528Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T10:23:41.528Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T10:23:41.529Z] [BOT] ℹ️ No new jobs to post
[2025-12-31T10:23:41.539Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*