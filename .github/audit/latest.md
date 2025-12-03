# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T14:39:24.672Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 50
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2025-12-03T14:39:22.676Z] ========================================
[2025-12-03T14:39:22.678Z] Discord Bot Execution Log
[2025-12-03T14:39:22.678Z] Environment: GitHub Actions
[2025-12-03T14:39:22.678Z] Node Version: v20.19.6
[2025-12-03T14:39:22.678Z] ========================================
[2025-12-03T14:39:22.678Z] Environment Variables Check:
[2025-12-03T14:39:22.678Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T14:39:22.679Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T14:39:22.679Z] 
Multi-Channel Configuration:
[2025-12-03T14:39:22.679Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.679Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.680Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.680Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T14:39:22.680Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T14:39:22.680Z] 
Data Files Check:
[2025-12-03T14:39:22.682Z] .github/data/new_jobs.json: ✅ Exists (50 items, 295772 bytes)
[2025-12-03T14:39:22.684Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333676 bytes)
[2025-12-03T14:39:22.684Z] 
========================================
[2025-12-03T14:39:22.684Z] Starting Enhanced Discord Bot...
[2025-12-03T14:39:22.684Z] ========================================
[2025-12-03T14:39:23.858Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T14:39:23.859Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T14:39:23.859Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T14:39:23.862Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-03T14:39:23.950Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 50
[2025-12-03T14:39:23.951Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:39:23.951Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:39:23.951Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:39:23.952Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:39:23.952Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:39:23.952Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:39:23.952Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:39:23.952Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:39:23.952Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:39:23.952Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:39:23.953Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T14:39:23.954Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T14:39:23.954Z] [BOT] ℹ️ No new jobs to post - all jobs have been posted already
[2025-12-03T14:39:23.965Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*