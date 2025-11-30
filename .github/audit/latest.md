# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T21:33:37.963Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-11-30T21:33:36.038Z] ========================================
[2025-11-30T21:33:36.040Z] Discord Bot Execution Log
[2025-11-30T21:33:36.040Z] Environment: GitHub Actions
[2025-11-30T21:33:36.040Z] Node Version: v20.19.5
[2025-11-30T21:33:36.040Z] ========================================
[2025-11-30T21:33:36.040Z] Environment Variables Check:
[2025-11-30T21:33:36.040Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T21:33:36.041Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T21:33:36.041Z] 
Multi-Channel Configuration:
[2025-11-30T21:33:36.041Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.041Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.042Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T21:33:36.042Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T21:33:36.042Z] 
Data Files Check:
[2025-11-30T21:33:36.042Z] .github/data/new_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-11-30T21:33:36.043Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330993 bytes)
[2025-11-30T21:33:36.043Z] 
========================================
[2025-11-30T21:33:36.043Z] Starting Enhanced Discord Bot...
[2025-11-30T21:33:36.043Z] ========================================
[2025-11-30T21:33:37.071Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T21:33:37.072Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
ℹ️ No new jobs to post
[2025-11-30T21:33:37.072Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T21:33:37.081Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*