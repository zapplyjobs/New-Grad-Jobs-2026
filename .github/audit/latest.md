# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T04:54:26.097Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 12
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T04:54:12.128Z] ========================================
[2025-12-03T04:54:12.130Z] Discord Bot Execution Log
[2025-12-03T04:54:12.130Z] Environment: GitHub Actions
[2025-12-03T04:54:12.130Z] Node Version: v20.19.5
[2025-12-03T04:54:12.130Z] ========================================
[2025-12-03T04:54:12.130Z] Environment Variables Check:
[2025-12-03T04:54:12.130Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T04:54:12.130Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.130Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T04:54:12.130Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T04:54:12.130Z] 
Multi-Channel Configuration:
[2025-12-03T04:54:12.130Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T04:54:12.131Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T04:54:12.131Z] 
Data Files Check:
[2025-12-03T04:54:12.132Z] .github/data/new_jobs.json: ✅ Exists (14 items, 77125 bytes)
[2025-12-03T04:54:12.134Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333720 bytes)
[2025-12-03T04:54:12.134Z] 
========================================
[2025-12-03T04:54:12.134Z] Starting Enhanced Discord Bot...
[2025-12-03T04:54:12.134Z] ========================================
[2025-12-03T04:54:13.253Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T04:54:13.254Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T04:54:13.254Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T04:54:13.256Z] [BOT] 📦 Exporting 14 jobs to encrypted JSON...
[2025-12-03T04:54:13.337Z] [BOT] ✅ Export complete: Added 0, Skipped 14, Total 14
[2025-12-03T04:54:13.337Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T04:54:13.337Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T04:54:13.338Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T04:54:13.338Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T04:54:13.338Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T04:54:13.338Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T04:54:13.338Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T04:54:13.339Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T04:54:13.339Z] [BOT] 📬 Found 2 new jobs (12 already posted)...
[2025-12-03T04:54:13.339Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T04:54:13.339Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
[2025-12-03T04:54:13.339Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T04:54:13.340Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-03T04:54:13.340Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-03T04:54:13.340Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:54:13.345Z] [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T04:54:13.488Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-03T04:54:13.488Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T04:54:15.238Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-03T04:54:15.239Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T04:54:16.739Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:54:16.739Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:54:16.745Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T04:54:16.745Z] [BOT] 📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:54:16.969Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
[2025-12-03T04:54:16.969Z] [BOT] ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T04:54:18.771Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T04:54:20.271Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:54:20.272Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:54:20.276Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T04:54:20.277Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T04:54:23.277Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T04:54:23.278Z] [BOT] ✅ Loaded pending queue: 14 total (0 pending, 14 enriched, 0 posted)
[2025-12-03T04:54:23.279Z] [BOT] ✅ Saved pending queue: 14 total (0 pending, 12 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T04:54:23.319Z] [BOT] 📂 Loaded 680 existing routing entries
[2025-12-03T04:54:23.359Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 682
   Timestamp: 2025-12-03T04:54:23.357Z
[2025-12-03T04:54:25.369Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*