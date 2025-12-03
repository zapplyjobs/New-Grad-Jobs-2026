# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T05:23:30.021Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T05:23:15.699Z] ========================================
[2025-12-03T05:23:15.701Z] Discord Bot Execution Log
[2025-12-03T05:23:15.701Z] Environment: GitHub Actions
[2025-12-03T05:23:15.701Z] Node Version: v20.19.5
[2025-12-03T05:23:15.701Z] ========================================
[2025-12-03T05:23:15.701Z] Environment Variables Check:
[2025-12-03T05:23:15.701Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T05:23:15.701Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.701Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T05:23:15.701Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T05:23:15.701Z] 
Multi-Channel Configuration:
[2025-12-03T05:23:15.701Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.701Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T05:23:15.702Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T05:23:15.702Z] 
Data Files Check:
[2025-12-03T05:23:15.703Z] .github/data/new_jobs.json: ✅ Exists (22 items, 123995 bytes)
[2025-12-03T05:23:15.705Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333720 bytes)
[2025-12-03T05:23:15.705Z] 
========================================
[2025-12-03T05:23:15.705Z] Starting Enhanced Discord Bot...
[2025-12-03T05:23:15.705Z] ========================================
[2025-12-03T05:23:16.947Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T05:23:16.948Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T05:23:16.948Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T05:23:16.950Z] [BOT] 📦 Exporting 22 jobs to encrypted JSON...
[2025-12-03T05:23:17.033Z] [BOT] ✅ Export complete: Added 0, Skipped 22, Total 22
[2025-12-03T05:23:17.034Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:23:17.034Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:23:17.034Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:23:17.034Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:23:17.034Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:23:17.035Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:23:17.035Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:23:17.035Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:23:17.035Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:23:17.035Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:23:17.035Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:23:17.035Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:23:17.035Z] [BOT] 📬 Found 2 new jobs (20 already posted)...
[2025-12-03T05:23:17.035Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T05:23:17.036Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-03T05:23:17.036Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T05:23:17.036Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-03T05:23:17.037Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
[2025-12-03T05:23:17.037Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T05:23:17.046Z] [BOT ERROR] (node:2602) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T05:23:17.270Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T05:23:18.962Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T05:23:20.461Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:23:20.462Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:23:20.466Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T05:23:20.466Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T05:23:20.705Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
[2025-12-03T05:23:20.706Z] [BOT] ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T05:23:22.420Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T05:23:23.921Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:23:23.921Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:23:23.924Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T05:23:23.924Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T05:23:26.924Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T05:23:26.926Z] [BOT] ✅ Loaded pending queue: 22 total (0 pending, 22 enriched, 0 posted)
[2025-12-03T05:23:26.927Z] [BOT] ✅ Saved pending queue: 22 total (0 pending, 20 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2025-12-03T05:23:26.927Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-03T05:23:26.968Z] [BOT] 📂 Loaded 684 existing routing entries
[2025-12-03T05:23:27.008Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 686
   Timestamp: 2025-12-03T05:23:27.006Z
[2025-12-03T05:23:29.016Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2602) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*