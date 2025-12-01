# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T00:50:52.694Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-01T00:50:50.979Z] ========================================
[2025-12-01T00:50:50.981Z] Discord Bot Execution Log
[2025-12-01T00:50:50.981Z] Environment: GitHub Actions
[2025-12-01T00:50:50.981Z] Node Version: v20.19.5
[2025-12-01T00:50:50.981Z] ========================================
[2025-12-01T00:50:50.981Z] Environment Variables Check:
[2025-12-01T00:50:50.981Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T00:50:50.981Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.981Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T00:50:50.981Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T00:50:50.982Z] 
Multi-Channel Configuration:
[2025-12-01T00:50:50.982Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T00:50:50.982Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T00:50:50.982Z] 
Data Files Check:
[2025-12-01T00:50:50.983Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-01T00:50:50.984Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331142 bytes)
[2025-12-01T00:50:50.984Z] 
========================================
[2025-12-01T00:50:50.984Z] Starting Enhanced Discord Bot...
[2025-12-01T00:50:50.984Z] ========================================
[2025-12-01T00:50:51.920Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T00:50:51.920Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-12-01T00:50:51.921Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T00:50:51.928Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*