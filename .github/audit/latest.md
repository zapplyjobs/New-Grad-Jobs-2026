# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T14:51:33.101Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-03T14:51:31.315Z] ========================================
[2025-12-03T14:51:31.317Z] Discord Bot Execution Log
[2025-12-03T14:51:31.317Z] Environment: GitHub Actions
[2025-12-03T14:51:31.317Z] Node Version: v20.19.6
[2025-12-03T14:51:31.317Z] ========================================
[2025-12-03T14:51:31.317Z] Environment Variables Check:
[2025-12-03T14:51:31.317Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T14:51:31.317Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.317Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T14:51:31.318Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T14:51:31.318Z] 
Multi-Channel Configuration:
[2025-12-03T14:51:31.318Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T14:51:31.318Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T14:51:31.318Z] 
Data Files Check:
[2025-12-03T14:51:31.321Z] .github/data/new_jobs.json: ✅ Exists (50 items, 295772 bytes)
[2025-12-03T14:51:31.323Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333676 bytes)
[2025-12-03T14:51:31.323Z] 
========================================
[2025-12-03T14:51:31.323Z] Starting Enhanced Discord Bot...
[2025-12-03T14:51:31.323Z] ========================================
[2025-12-03T14:51:32.364Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T14:51:32.365Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T14:51:32.365Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T14:51:32.367Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-03T14:51:32.453Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-03T14:51:32.454Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:51:32.454Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:51:32.455Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:51:32.455Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:51:32.455Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:51:32.455Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:51:32.455Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:51:32.456Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:51:32.457Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:51:32.457Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:51:32.457Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:51:32.457Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-03T14:51:32.470Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*