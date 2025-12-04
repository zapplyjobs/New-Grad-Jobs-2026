# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T06:06:24.063Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 47
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T06:06:22.034Z] ========================================
[2025-12-04T06:06:22.036Z] Discord Bot Execution Log
[2025-12-04T06:06:22.036Z] Environment: GitHub Actions
[2025-12-04T06:06:22.036Z] Node Version: v20.19.6
[2025-12-04T06:06:22.036Z] ========================================
[2025-12-04T06:06:22.036Z] Environment Variables Check:
[2025-12-04T06:06:22.036Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T06:06:22.036Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T06:06:22.037Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T06:06:22.037Z] 
Multi-Channel Configuration:
[2025-12-04T06:06:22.037Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T06:06:22.037Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T06:06:22.038Z] 
Data Files Check:
[2025-12-04T06:06:22.040Z] .github/data/new_jobs.json: ✅ Exists (47 items, 282402 bytes)
[2025-12-04T06:06:22.042Z] .github/data/posted_jobs.json: ✅ Exists (3563 items, 239948 bytes)
[2025-12-04T06:06:22.042Z] 
========================================
[2025-12-04T06:06:22.042Z] Starting Enhanced Discord Bot...
[2025-12-04T06:06:22.042Z] ========================================
[2025-12-04T06:06:23.122Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T06:06:23.123Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T06:06:23.123Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T06:06:23.127Z] [BOT] 📦 Exporting 47 jobs to encrypted JSON...
[2025-12-04T06:06:23.214Z] [BOT] ✅ Export complete: Added 0, Skipped 47, Total 47
[2025-12-04T06:06:23.214Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.216Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.216Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.216Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.216Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.216Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.216Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.217Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T06:06:23.219Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T06:06:23.219Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T06:06:23.219Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T06:06:23.231Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*