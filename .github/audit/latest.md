# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T07:36:14.960Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-04T07:36:12.622Z] ========================================
[2025-12-04T07:36:12.623Z] Discord Bot Execution Log
[2025-12-04T07:36:12.623Z] Environment: GitHub Actions
[2025-12-04T07:36:12.623Z] Node Version: v20.19.6
[2025-12-04T07:36:12.623Z] ========================================
[2025-12-04T07:36:12.623Z] Environment Variables Check:
[2025-12-04T07:36:12.623Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T07:36:12.624Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T07:36:12.624Z] 
Multi-Channel Configuration:
[2025-12-04T07:36:12.624Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T07:36:12.624Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T07:36:12.625Z] 
Data Files Check:
[2025-12-04T07:36:12.627Z] .github/data/new_jobs.json: ✅ Exists (50 items, 299998 bytes)
[2025-12-04T07:36:12.629Z] .github/data/posted_jobs.json: ✅ Exists (3563 items, 239948 bytes)
[2025-12-04T07:36:12.629Z] 
========================================
[2025-12-04T07:36:12.629Z] Starting Enhanced Discord Bot...
[2025-12-04T07:36:12.629Z] ========================================
[2025-12-04T07:36:13.834Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T07:36:13.834Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T07:36:13.835Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T07:36:13.839Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-04T07:36:13.926Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-04T07:36:13.927Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.927Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T07:36:13.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T07:36:13.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.929Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T07:36:13.929Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.929Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T07:36:13.929Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.929Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T07:36:13.929Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T07:36:13.930Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T07:36:13.930Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.930Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T07:36:13.930Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T07:36:13.930Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.930Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.930Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T07:36:13.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T07:36:13.931Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-04T07:36:13.940Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*