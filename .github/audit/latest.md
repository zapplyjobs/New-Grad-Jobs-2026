# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T06:25:11.928Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 36
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T06:24:57.808Z] ========================================
[2025-12-03T06:24:57.810Z] Discord Bot Execution Log
[2025-12-03T06:24:57.810Z] Environment: GitHub Actions
[2025-12-03T06:24:57.810Z] Node Version: v20.19.5
[2025-12-03T06:24:57.810Z] ========================================
[2025-12-03T06:24:57.810Z] Environment Variables Check:
[2025-12-03T06:24:57.810Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T06:24:57.810Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T06:24:57.811Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T06:24:57.811Z] 
Multi-Channel Configuration:
[2025-12-03T06:24:57.811Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T06:24:57.811Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T06:24:57.812Z] 
Data Files Check:
[2025-12-03T06:24:57.813Z] .github/data/new_jobs.json: ✅ Exists (38 items, 217735 bytes)
[2025-12-03T06:24:57.815Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333720 bytes)
[2025-12-03T06:24:57.815Z] 
========================================
[2025-12-03T06:24:57.815Z] Starting Enhanced Discord Bot...
[2025-12-03T06:24:57.815Z] ========================================
[2025-12-03T06:24:58.833Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T06:24:58.834Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T06:24:58.834Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T06:24:58.837Z] [BOT] 📦 Exporting 38 jobs to encrypted JSON...
[2025-12-03T06:24:58.925Z] [BOT] ✅ Export complete: Added 0, Skipped 38, Total 38
[2025-12-03T06:24:58.926Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:24:58.926Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:24:58.926Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:24:58.926Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:24:58.926Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:24:58.927Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:24:58.927Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:24:58.927Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:24:58.927Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:24:58.927Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:24:58.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:24:58.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T06:24:58.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:24:58.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T06:24:58.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:24:58.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T06:24:58.928Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T06:24:58.928Z] [BOT] 📬 Found 2 new jobs (36 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T06:24:58.928Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-03T06:24:58.929Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T06:24:58.929Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-03T06:24:58.930Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-03T06:24:58.930Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T06:24:58.934Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T06:24:59.333Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T06:25:01.083Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T06:25:02.583Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:25:02.583Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:25:02.589Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T06:25:02.589Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
[2025-12-03T06:25:02.589Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T06:25:02.841Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
[2025-12-03T06:25:02.841Z] [BOT] ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T06:25:04.517Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T06:25:06.019Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T06:25:06.019Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T06:25:06.023Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T06:25:06.023Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T06:25:09.024Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T06:25:09.025Z] [BOT] ✅ Loaded pending queue: 38 total (0 pending, 38 enriched, 0 posted)
[2025-12-03T06:25:09.029Z] [BOT] ✅ Saved pending queue: 38 total (0 pending, 36 enriched, 2 posted)
[2025-12-03T06:25:09.029Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T06:25:09.068Z] [BOT] 📂 Loaded 692 existing routing entries
[2025-12-03T06:25:09.108Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-03T06:25:09.108Z] [BOT] Total entries: 694
   Timestamp: 2025-12-03T06:25:09.106Z
[2025-12-03T06:25:11.120Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*