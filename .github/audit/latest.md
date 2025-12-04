# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T04:42:21.154Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 29
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T04:42:18.378Z] ========================================
[2025-12-04T04:42:18.380Z] Discord Bot Execution Log
[2025-12-04T04:42:18.380Z] Environment: GitHub Actions
[2025-12-04T04:42:18.380Z] Node Version: v20.19.6
[2025-12-04T04:42:18.380Z] ========================================
[2025-12-04T04:42:18.380Z] Environment Variables Check:
[2025-12-04T04:42:18.380Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T04:42:18.380Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.380Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T04:42:18.381Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T04:42:18.381Z] 
Multi-Channel Configuration:
[2025-12-04T04:42:18.381Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T04:42:18.381Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T04:42:18.382Z] 
Data Files Check:
[2025-12-04T04:42:18.383Z] .github/data/new_jobs.json: ✅ Exists (29 items, 176826 bytes)
[2025-12-04T04:42:18.384Z] .github/data/posted_jobs.json: ✅ Exists (3561 items, 239693 bytes)
[2025-12-04T04:42:18.384Z] 
========================================
[2025-12-04T04:42:18.384Z] Starting Enhanced Discord Bot...
[2025-12-04T04:42:18.384Z] ========================================
[2025-12-04T04:42:19.785Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T04:42:19.786Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T04:42:19.786Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T04:42:19.787Z] [BOT] 📦 Exporting 29 jobs to encrypted JSON...
[2025-12-04T04:42:19.878Z] [BOT] ✅ Export complete: Added 0, Skipped 29, Total 29
[2025-12-04T04:42:19.879Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.879Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:42:19.879Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.880Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:42:19.880Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.880Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.880Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.880Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:42:19.880Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:42:19.881Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:42:19.882Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:42:19.882Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:42:19.883Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T04:42:19.894Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*