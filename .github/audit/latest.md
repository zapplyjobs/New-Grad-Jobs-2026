# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T05:49:19.536Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 44
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T05:49:17.003Z] ========================================
[2025-12-04T05:49:17.005Z] Discord Bot Execution Log
[2025-12-04T05:49:17.005Z] Environment: GitHub Actions
[2025-12-04T05:49:17.005Z] Node Version: v20.19.6
[2025-12-04T05:49:17.005Z] ========================================
[2025-12-04T05:49:17.005Z] Environment Variables Check:
[2025-12-04T05:49:17.005Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T05:49:17.005Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.005Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T05:49:17.006Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T05:49:17.006Z] 
Multi-Channel Configuration:
[2025-12-04T05:49:17.006Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T05:49:17.006Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T05:49:17.006Z] 
Data Files Check:
[2025-12-04T05:49:17.009Z] .github/data/new_jobs.json: ✅ Exists (44 items, 264806 bytes)
[2025-12-04T05:49:17.010Z] .github/data/posted_jobs.json: ✅ Exists (3563 items, 239948 bytes)
[2025-12-04T05:49:17.010Z] 
========================================
[2025-12-04T05:49:17.010Z] Starting Enhanced Discord Bot...
[2025-12-04T05:49:17.010Z] ========================================
[2025-12-04T05:49:18.353Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T05:49:18.354Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T05:49:18.354Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T05:49:18.359Z] [BOT] 📦 Exporting 44 jobs to encrypted JSON...
[2025-12-04T05:49:18.449Z] [BOT] ✅ Export complete: Added 0, Skipped 44, Total 44
[2025-12-04T05:49:18.450Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.450Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.450Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.450Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.450Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.450Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.451Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.452Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T05:49:18.453Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T05:49:18.453Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T05:49:18.461Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*