# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T15:05:04.516Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-03T15:05:01.289Z] ========================================
[2025-12-03T15:05:01.291Z] Discord Bot Execution Log
[2025-12-03T15:05:01.291Z] Environment: GitHub Actions
[2025-12-03T15:05:01.291Z] Node Version: v20.19.5
[2025-12-03T15:05:01.291Z] ========================================
[2025-12-03T15:05:01.291Z] Environment Variables Check:
[2025-12-03T15:05:01.291Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T15:05:01.291Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.291Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T15:05:01.292Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T15:05:01.292Z] 
Multi-Channel Configuration:
[2025-12-03T15:05:01.292Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T15:05:01.292Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T15:05:01.292Z] 
Data Files Check:
[2025-12-03T15:05:01.295Z] .github/data/new_jobs.json: ✅ Exists (50 items, 295772 bytes)
[2025-12-03T15:05:01.297Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333676 bytes)
[2025-12-03T15:05:01.297Z] 
========================================
[2025-12-03T15:05:01.297Z] Starting Enhanced Discord Bot...
[2025-12-03T15:05:01.297Z] ========================================
[2025-12-03T15:05:02.604Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T15:05:02.605Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T15:05:02.605Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T15:05:02.608Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-03T15:05:02.700Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-03T15:05:02.701Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.701Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T15:05:02.701Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T15:05:02.701Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T15:05:02.701Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T15:05:02.702Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T15:05:02.703Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.704Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T15:05:02.704Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-03T15:05:02.716Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*