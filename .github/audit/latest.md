# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T09:37:35.906Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-05T09:37:34.137Z] ========================================
[2025-12-05T09:37:34.138Z] Discord Bot Execution Log
[2025-12-05T09:37:34.139Z] Environment: GitHub Actions
[2025-12-05T09:37:34.139Z] Node Version: v20.19.6
[2025-12-05T09:37:34.139Z] ========================================
[2025-12-05T09:37:34.139Z] Environment Variables Check:
[2025-12-05T09:37:34.139Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T09:37:34.139Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.139Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T09:37:34.139Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T09:37:34.139Z] 
Multi-Channel Configuration:
[2025-12-05T09:37:34.139Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T09:37:34.140Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T09:37:34.140Z] 
Data Files Check:
[2025-12-05T09:37:34.145Z] .github/data/new_jobs.json: ✅ Exists (50 items, 691406 bytes)
[2025-12-05T09:37:34.146Z] .github/data/posted_jobs.json: ✅ Exists (3563 items, 239948 bytes)
[2025-12-05T09:37:34.146Z] 
========================================
[2025-12-05T09:37:34.146Z] Starting Enhanced Discord Bot...
[2025-12-05T09:37:34.146Z] ========================================
[2025-12-05T09:37:35.203Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T09:37:35.204Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T09:37:35.204Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T09:37:35.207Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T09:37:35.297Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-05T09:37:35.298Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.298Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.298Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.298Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.299Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.299Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.299Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.299Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.299Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-05T09:37:35.300Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.301Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-05T09:37:35.301Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.301Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.301Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-05T09:37:35.301Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.301Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.301Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.302Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.302Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-05T09:37:35.302Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.302Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.302Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.302Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.302Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.303Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.303Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.303Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.303Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-05T09:37:35.303Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-05T09:37:35.303Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-05T09:37:35.317Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*