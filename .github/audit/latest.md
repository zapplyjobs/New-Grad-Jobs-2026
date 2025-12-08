# Discord Bot Execution Audit
**Timestamp:** 2025-12-08T08:06:31.678Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-08T08:06:29.021Z] ========================================
[2025-12-08T08:06:29.023Z] Discord Bot Execution Log
[2025-12-08T08:06:29.023Z] Environment: GitHub Actions
[2025-12-08T08:06:29.023Z] Node Version: v20.19.6
[2025-12-08T08:06:29.023Z] ========================================
[2025-12-08T08:06:29.023Z] Environment Variables Check:
[2025-12-08T08:06:29.023Z] DISCORD_TOKEN: ✅ Set
[2025-12-08T08:06:29.023Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.023Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-08T08:06:29.023Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-08T08:06:29.023Z] 
Multi-Channel Configuration:
[2025-12-08T08:06:29.024Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-08T08:06:29.024Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-08T08:06:29.024Z] 
Data Files Check:
[2025-12-08T08:06:29.024Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-08T08:06:29.024Z] .github/data/posted_jobs.json: ✅ Exists (51 items, 5065 bytes)
[2025-12-08T08:06:29.024Z] 
========================================
[2025-12-08T08:06:29.024Z] Starting Enhanced Discord Bot...
[2025-12-08T08:06:29.025Z] ========================================
[2025-12-08T08:06:30.534Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-08T08:06:30.534Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-08T08:06:30.535Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-08T08:06:30.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*