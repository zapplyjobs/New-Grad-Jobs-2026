# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T10:04:56.214Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T10:04:53.965Z] ========================================
[2025-12-04T10:04:53.967Z] Discord Bot Execution Log
[2025-12-04T10:04:53.967Z] Environment: GitHub Actions
[2025-12-04T10:04:53.967Z] Node Version: v20.19.6
[2025-12-04T10:04:53.967Z] ========================================
[2025-12-04T10:04:53.967Z] Environment Variables Check:
[2025-12-04T10:04:53.967Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T10:04:53.967Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.967Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T10:04:53.968Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T10:04:53.968Z] 
Multi-Channel Configuration:
[2025-12-04T10:04:53.968Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T10:04:53.968Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T10:04:53.969Z] 
Data Files Check:
[2025-12-04T10:04:53.971Z] .github/data/new_jobs.json: ✅ Exists (50 items, 299998 bytes)
[2025-12-04T10:04:53.972Z] .github/data/posted_jobs.json: ✅ Exists (3563 items, 239948 bytes)
[2025-12-04T10:04:53.972Z] 
========================================
[2025-12-04T10:04:53.972Z] Starting Enhanced Discord Bot...
[2025-12-04T10:04:53.972Z] ========================================
[2025-12-04T10:04:55.340Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T10:04:55.341Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T10:04:55.341Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T10:04:55.345Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-04T10:04:55.428Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-04T10:04:55.429Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.429Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.429Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.429Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.430Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.430Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.430Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.430Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.430Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.431Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.432Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.433Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T10:04:55.434Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T10:04:55.445Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*