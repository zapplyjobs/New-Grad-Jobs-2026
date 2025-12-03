# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T05:49:23.454Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 28
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T05:49:08.305Z] ========================================
[2025-12-03T05:49:08.307Z] Discord Bot Execution Log
[2025-12-03T05:49:08.307Z] Environment: GitHub Actions
[2025-12-03T05:49:08.307Z] Node Version: v20.19.5
[2025-12-03T05:49:08.307Z] ========================================
[2025-12-03T05:49:08.307Z] Environment Variables Check:
[2025-12-03T05:49:08.307Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T05:49:08.307Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.307Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T05:49:08.308Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T05:49:08.308Z] 
Multi-Channel Configuration:
[2025-12-03T05:49:08.308Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T05:49:08.308Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T05:49:08.308Z] 
Data Files Check:
[2025-12-03T05:49:08.310Z] .github/data/new_jobs.json: ✅ Exists (30 items, 170865 bytes)
[2025-12-03T05:49:08.312Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333720 bytes)
[2025-12-03T05:49:08.312Z] 
========================================
[2025-12-03T05:49:08.312Z] Starting Enhanced Discord Bot...
[2025-12-03T05:49:08.312Z] ========================================
[2025-12-03T05:49:09.728Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T05:49:09.728Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T05:49:09.729Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T05:49:09.731Z] [BOT] 📦 Exporting 30 jobs to encrypted JSON...
[2025-12-03T05:49:09.820Z] [BOT] ✅ Export complete: Added 0, Skipped 30, Total 30
[2025-12-03T05:49:09.821Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:49:09.821Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:49:09.821Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:49:09.821Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:49:09.821Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:49:09.822Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:49:09.822Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:49:09.822Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:49:09.822Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:49:09.822Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:49:09.823Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:49:09.823Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:49:09.823Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:49:09.823Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:49:09.823Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:49:09.823Z] [BOT] 📬 Found 2 new jobs (28 already posted)...
[2025-12-03T05:49:09.823Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T05:49:09.824Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T05:49:09.824Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-03T05:49:09.825Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T05:49:09.829Z] [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T05:49:10.412Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-03T05:49:10.412Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T05:49:12.183Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-03T05:49:12.183Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T05:49:13.684Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:49:13.685Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:49:13.691Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T05:49:13.691Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
[2025-12-03T05:49:13.691Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T05:49:13.876Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
  ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T05:49:15.607Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T05:49:17.108Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:49:17.108Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:49:17.112Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T05:49:17.112Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T05:49:20.114Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T05:49:20.115Z] [BOT] ✅ Loaded pending queue: 30 total (0 pending, 30 enriched, 0 posted)
[2025-12-03T05:49:20.117Z] [BOT] ✅ Saved pending queue: 30 total (0 pending, 28 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T05:49:20.156Z] [BOT] 📂 Loaded 688 existing routing entries
[2025-12-03T05:49:20.197Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 690
   Timestamp: 2025-12-03T05:49:20.194Z
[2025-12-03T05:49:22.208Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*