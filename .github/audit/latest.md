# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T04:16:33.970Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T04:16:01.847Z] ========================================
[2025-12-03T04:16:01.849Z] Discord Bot Execution Log
[2025-12-03T04:16:01.849Z] Environment: GitHub Actions
[2025-12-03T04:16:01.849Z] Node Version: v20.19.5
[2025-12-03T04:16:01.849Z] ========================================
[2025-12-03T04:16:01.849Z] Environment Variables Check:
[2025-12-03T04:16:01.849Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T04:16:01.850Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T04:16:01.850Z] 
Multi-Channel Configuration:
[2025-12-03T04:16:01.850Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.850Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.851Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T04:16:01.851Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T04:16:01.851Z] 
Data Files Check:
[2025-12-03T04:16:01.852Z] .github/data/new_jobs.json: ✅ Exists (10 items, 61528 bytes)
[2025-12-03T04:16:01.854Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333829 bytes)
[2025-12-03T04:16:01.854Z] 
========================================
[2025-12-03T04:16:01.854Z] Starting Enhanced Discord Bot...
[2025-12-03T04:16:01.854Z] ========================================
[2025-12-03T04:16:03.036Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T04:16:03.036Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 10 jobs to encrypted JSON...
[2025-12-03T04:16:03.037Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T04:16:03.112Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 10
[2025-12-03T04:16:03.113Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T04:16:03.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T04:16:03.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T04:16:03.114Z] [BOT] 📬 Found 6 new jobs (4 already posted)...
[2025-12-03T04:16:03.114Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2025-12-03T04:16:03.115Z] [BOT] 📋 After title+company+location dedup: 6 unique jobs to post
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T04:16:03.118Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-03T04:16:03.118Z] [BOT] 📍 [ROUTING] "Associate – Investment Analytics and Data - Portfolio Analytics" @ ORG_c9e92d4e Fund Advisors
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:16:03.125Z] [BOT ERROR] (node:2864) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T04:16:03.388Z] [BOT] ✅ Created forum post: 🏢 Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #💻・tech-jobs
  ✅ Industry: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors
[2025-12-03T04:16:05.101Z] [BOT] ✅ Created forum post: 🏢 Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T04:16:06.602Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:16:06.602Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:16:06.607Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T04:16:06.607Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "System Engineering Analytics Engineer 1" @ ORG_f23bb052 Truck
[2025-12-03T04:16:06.607Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:16:06.825Z] [BOT] ✅ Created forum post: 🏢 System Engineering Analytics Engineer 1 @ ORG_f23bb052 Truck in #💻・tech-jobs
[2025-12-03T04:16:06.825Z] [BOT] ✅ Industry: System Engineering Analytics Engineer 1 @ ORG_f23bb052 Truck
[2025-12-03T04:16:08.707Z] [BOT] ✅ Created forum post: 🏢 System Engineering Analytics Engineer 1 @ ORG_f23bb052 Truck in #💻・remote-usa
[2025-12-03T04:16:08.707Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T04:16:10.207Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:16:10.208Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:16:10.211Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T04:16:10.211Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Associate Data Analyst" @ ORG_36786280 Health Solutions
   Category: TECH (matched: "data")
[2025-12-03T04:16:10.211Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:16:10.525Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_36786280 Health Solutions in #💻・tech-jobs
[2025-12-03T04:16:10.525Z] [BOT] ✅ Industry: Associate Data Analyst @ ORG_36786280 Health Solutions
[2025-12-03T04:16:12.412Z] [BOT] ✅ Created forum post: 🏢 Associate Data Analyst @ ORG_36786280 Health Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T04:16:13.912Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:16:13.913Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:16:13.917Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T04:16:13.917Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "AI Scientist 1 - Healthcare" @ ORG_9f59c5cf Health Solutions
   Category: TECH (matched: "machine learning")
[2025-12-03T04:16:13.917Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:16:14.403Z] [BOT] ✅ Created forum post: 🏢 AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions in #💻・tech-jobs
[2025-12-03T04:16:14.403Z] [BOT] ✅ Industry: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions
[2025-12-03T04:16:16.104Z] [BOT] ✅ Created forum post: 🏢 AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T04:16:17.604Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:16:17.604Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:16:17.607Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T04:16:17.608Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:16:17.854Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
  ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T04:16:19.566Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
[2025-12-03T04:16:19.566Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T04:16:21.068Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:16:21.068Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:16:21.071Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T04:16:21.072Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T04:16:24.072Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T04:16:24.072Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T04:16:24.355Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2025-12-03T04:16:24.355Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T04:16:26.109Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
[2025-12-03T04:16:26.110Z] [BOT] ✅ Location: 🤠・austin
[2025-12-03T04:16:27.610Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:16:27.611Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:16:27.614Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T04:16:27.614Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T04:16:30.616Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-03T04:16:30.616Z] [BOT] ✅ Loaded pending queue: 10 total (0 pending, 10 enriched, 0 posted)
[2025-12-03T04:16:30.617Z] [BOT] ✅ Saved pending queue: 10 total (0 pending, 4 enriched, 6 posted)
[2025-12-03T04:16:30.617Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T04:16:30.657Z] [BOT] 📂 Loaded 670 existing routing entries
[2025-12-03T04:16:30.696Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-03T04:16:30.696Z] [BOT] New entries: 6
   Total entries: 676
   Timestamp: 2025-12-03T04:16:30.694Z
[2025-12-03T04:16:32.704Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2864) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*