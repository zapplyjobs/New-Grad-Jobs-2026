# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T10:39:44.352Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-02T10:39:42.841Z] ========================================
[2025-12-02T10:39:42.843Z] Discord Bot Execution Log
[2025-12-02T10:39:42.843Z] Environment: GitHub Actions
[2025-12-02T10:39:42.843Z] Node Version: v20.19.5
[2025-12-02T10:39:42.844Z] ========================================
[2025-12-02T10:39:42.844Z] Environment Variables Check:
[2025-12-02T10:39:42.844Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T10:39:42.844Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.844Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T10:39:42.844Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T10:39:42.844Z] 
Multi-Channel Configuration:
[2025-12-02T10:39:42.844Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.844Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.844Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.844Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.845Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.845Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.845Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.845Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.845Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T10:39:42.845Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T10:39:42.845Z] 
Data Files Check:
[2025-12-02T10:39:42.845Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-02T10:39:42.847Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332453 bytes)
[2025-12-02T10:39:42.847Z] 
========================================
[2025-12-02T10:39:42.847Z] Starting Enhanced Discord Bot...
[2025-12-02T10:39:42.847Z] ========================================
[2025-12-02T10:39:43.675Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T10:39:43.676Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-02T10:39:43.676Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T10:39:43.684Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*