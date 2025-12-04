# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T04:53:44.631Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 32
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T04:53:42.625Z] ========================================
[2025-12-04T04:53:42.627Z] Discord Bot Execution Log
[2025-12-04T04:53:42.627Z] Environment: GitHub Actions
[2025-12-04T04:53:42.627Z] Node Version: v20.19.6
[2025-12-04T04:53:42.627Z] ========================================
[2025-12-04T04:53:42.628Z] Environment Variables Check:
[2025-12-04T04:53:42.628Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T04:53:42.628Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T04:53:42.628Z] 
Multi-Channel Configuration:
[2025-12-04T04:53:42.628Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T04:53:42.628Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T04:53:42.629Z] 
Data Files Check:
[2025-12-04T04:53:42.630Z] .github/data/new_jobs.json: ✅ Exists (32 items, 194422 bytes)
[2025-12-04T04:53:42.631Z] .github/data/posted_jobs.json: ✅ Exists (3561 items, 239693 bytes)
[2025-12-04T04:53:42.631Z] 
========================================
[2025-12-04T04:53:42.631Z] Starting Enhanced Discord Bot...
[2025-12-04T04:53:42.631Z] ========================================
[2025-12-04T04:53:43.936Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T04:53:43.937Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T04:53:43.937Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T04:53:43.938Z] [BOT] 📦 Exporting 32 jobs to encrypted JSON...
[2025-12-04T04:53:44.024Z] [BOT] ✅ Export complete: Added 0, Skipped 32, Total 32
[2025-12-04T04:53:44.025Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.025Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.026Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.026Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.026Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.026Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.026Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.026Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:53:44.027Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:53:44.028Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:53:44.028Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:53:44.028Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:53:44.029Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T04:53:44.040Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*