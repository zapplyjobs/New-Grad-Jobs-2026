# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T10:23:50.754Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-01T10:23:49.055Z] ========================================
[2025-12-01T10:23:49.057Z] Discord Bot Execution Log
[2025-12-01T10:23:49.057Z] Environment: GitHub Actions
[2025-12-01T10:23:49.057Z] Node Version: v20.19.5
[2025-12-01T10:23:49.058Z] ========================================
[2025-12-01T10:23:49.058Z] Environment Variables Check:
[2025-12-01T10:23:49.058Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T10:23:49.058Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T10:23:49.058Z] 
Multi-Channel Configuration:
[2025-12-01T10:23:49.058Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.058Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.059Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.059Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T10:23:49.059Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T10:23:49.059Z] 
Data Files Check:
[2025-12-01T10:23:49.059Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-01T10:23:49.060Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331515 bytes)
[2025-12-01T10:23:49.060Z] 
========================================
[2025-12-01T10:23:49.060Z] Starting Enhanced Discord Bot...
[2025-12-01T10:23:49.061Z] ========================================
[2025-12-01T10:23:49.975Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T10:23:49.976Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-01T10:23:49.976Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T10:23:49.984Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*