# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T05:04:24.577Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-30T05:04:22.641Z] ========================================
[2025-11-30T05:04:22.643Z] Discord Bot Execution Log
[2025-11-30T05:04:22.643Z] Environment: GitHub Actions
[2025-11-30T05:04:22.643Z] Node Version: v20.19.5
[2025-11-30T05:04:22.643Z] ========================================
[2025-11-30T05:04:22.643Z] Environment Variables Check:
[2025-11-30T05:04:22.644Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T05:04:22.644Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.644Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T05:04:22.644Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T05:04:22.644Z] 
Multi-Channel Configuration:
[2025-11-30T05:04:22.644Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.644Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.644Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.644Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.644Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.644Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.645Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.645Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.645Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T05:04:22.645Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T05:04:22.645Z] 
Data Files Check:
[2025-11-30T05:04:22.645Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-30T05:04:22.646Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330696 bytes)
[2025-11-30T05:04:22.646Z] 
========================================
[2025-11-30T05:04:22.647Z] Starting Enhanced Discord Bot...
[2025-11-30T05:04:22.647Z] ========================================
[2025-11-30T05:04:23.660Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T05:04:23.661Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-11-30T05:04:23.661Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T05:04:23.668Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*