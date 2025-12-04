# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T05:37:50.581Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 41
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T05:37:48.660Z] ========================================
[2025-12-04T05:37:48.662Z] Discord Bot Execution Log
[2025-12-04T05:37:48.662Z] Environment: GitHub Actions
[2025-12-04T05:37:48.662Z] Node Version: v20.19.6
[2025-12-04T05:37:48.662Z] ========================================
[2025-12-04T05:37:48.662Z] Environment Variables Check:
[2025-12-04T05:37:48.662Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T05:37:48.662Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.662Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T05:37:48.663Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T05:37:48.663Z] 
Multi-Channel Configuration:
[2025-12-04T05:37:48.663Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T05:37:48.663Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T05:37:48.663Z] 
Data Files Check:
[2025-12-04T05:37:48.666Z] .github/data/new_jobs.json: ✅ Exists (41 items, 247210 bytes)
[2025-12-04T05:37:48.667Z] .github/data/posted_jobs.json: ✅ Exists (3563 items, 239948 bytes)
[2025-12-04T05:37:48.667Z] 
========================================
[2025-12-04T05:37:48.667Z] Starting Enhanced Discord Bot...
[2025-12-04T05:37:48.667Z] ========================================
[2025-12-04T05:37:49.714Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T05:37:49.715Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T05:37:49.715Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T05:37:49.716Z] [BOT] 📦 Exporting 41 jobs to encrypted JSON...
[2025-12-04T05:37:49.802Z] [BOT] ✅ Export complete: Added 0, Skipped 41, Total 41
[2025-12-04T05:37:49.803Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.803Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:37:49.804Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.804Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:37:49.804Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:37:49.804Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.804Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.805Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:37:49.805Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:37:49.805Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:37:49.806Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:37:49.807Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.807Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:37:49.807Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.807Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:37:49.807Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T05:37:49.818Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*