# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T15:24:17.543Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T15:24:14.869Z] ========================================
[2025-12-04T15:24:14.871Z] Discord Bot Execution Log
[2025-12-04T15:24:14.871Z] Environment: GitHub Actions
[2025-12-04T15:24:14.871Z] Node Version: v20.19.6
[2025-12-04T15:24:14.871Z] ========================================
[2025-12-04T15:24:14.871Z] Environment Variables Check:
[2025-12-04T15:24:14.871Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T15:24:14.871Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.871Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T15:24:14.871Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T15:24:14.871Z] 
Multi-Channel Configuration:
[2025-12-04T15:24:14.871Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T15:24:14.872Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T15:24:14.872Z] 
Data Files Check:
[2025-12-04T15:24:14.875Z] .github/data/new_jobs.json: ✅ Exists (50 items, 299998 bytes)
[2025-12-04T15:24:14.876Z] .github/data/posted_jobs.json: ✅ Exists (3563 items, 239948 bytes)
[2025-12-04T15:24:14.876Z] 
========================================
[2025-12-04T15:24:14.876Z] Starting Enhanced Discord Bot...
[2025-12-04T15:24:14.876Z] ========================================
[2025-12-04T15:24:16.507Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T15:24:16.507Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T15:24:16.508Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T15:24:16.511Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-04T15:24:16.599Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-04T15:24:16.600Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.600Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.600Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.600Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.600Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.601Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.601Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.601Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.601Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.602Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.603Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.604Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.605Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.605Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.605Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T15:24:16.605Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T15:24:16.605Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T15:24:16.605Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T15:24:16.617Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*