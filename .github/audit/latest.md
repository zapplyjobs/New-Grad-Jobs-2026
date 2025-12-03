# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T16:55:59.762Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-03T16:55:58.043Z] ========================================
[2025-12-03T16:55:58.045Z] Discord Bot Execution Log
[2025-12-03T16:55:58.045Z] Environment: GitHub Actions
[2025-12-03T16:55:58.045Z] Node Version: v20.19.6
[2025-12-03T16:55:58.045Z] ========================================
[2025-12-03T16:55:58.045Z] Environment Variables Check:
[2025-12-03T16:55:58.045Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T16:55:58.045Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.045Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T16:55:58.045Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T16:55:58.046Z] 
Multi-Channel Configuration:
[2025-12-03T16:55:58.046Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T16:55:58.046Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T16:55:58.046Z] 
Data Files Check:
[2025-12-03T16:55:58.049Z] .github/data/new_jobs.json: ✅ Exists (50 items, 295772 bytes)
[2025-12-03T16:55:58.051Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333676 bytes)
[2025-12-03T16:55:58.051Z] 
========================================
[2025-12-03T16:55:58.051Z] Starting Enhanced Discord Bot...
[2025-12-03T16:55:58.051Z] ========================================
[2025-12-03T16:55:59.060Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T16:55:59.061Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T16:55:59.061Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T16:55:59.063Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-03T16:55:59.149Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-03T16:55:59.150Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T16:55:59.150Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T16:55:59.151Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.151Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T16:55:59.151Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T16:55:59.151Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.151Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T16:55:59.152Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T16:55:59.153Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T16:55:59.154Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T16:55:59.154Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-03T16:55:59.164Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*