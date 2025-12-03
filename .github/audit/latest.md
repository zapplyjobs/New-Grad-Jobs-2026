# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T01:10:00.658Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T01:09:33.482Z] ========================================
[2025-12-03T01:09:33.484Z] Discord Bot Execution Log
[2025-12-03T01:09:33.484Z] Environment: GitHub Actions
[2025-12-03T01:09:33.484Z] Node Version: v20.19.6
[2025-12-03T01:09:33.484Z] ========================================
[2025-12-03T01:09:33.484Z] Environment Variables Check:
[2025-12-03T01:09:33.484Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T01:09:33.485Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T01:09:33.485Z] 
Multi-Channel Configuration:
[2025-12-03T01:09:33.485Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.485Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.486Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.486Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T01:09:33.486Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T01:09:33.486Z] 
Data Files Check:
[2025-12-03T01:09:33.487Z] .github/data/new_jobs.json: ✅ Exists (9 items, 41907 bytes)
[2025-12-03T01:09:33.489Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333275 bytes)
[2025-12-03T01:09:33.489Z] 
========================================
[2025-12-03T01:09:33.489Z] Starting Enhanced Discord Bot...
[2025-12-03T01:09:33.489Z] ========================================
[2025-12-03T01:09:34.568Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T01:09:34.569Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 9 jobs to encrypted JSON...
[2025-12-03T01:09:34.569Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T01:09:34.649Z] [BOT] ✅ Export complete: Added 0, Skipped 9, Total 9
[2025-12-03T01:09:34.649Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T01:09:34.650Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T01:09:34.650Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T01:09:34.650Z] [BOT] 📬 Found 5 new jobs (4 already posted)...
[2025-12-03T01:09:34.650Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-03T01:09:34.650Z] [BOT] 📋 After title+company+location dedup: 5 unique jobs to post
[2025-12-03T01:09:34.651Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T01:09:34.653Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-03T01:09:34.654Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_302d27b5
[2025-12-03T01:09:34.654Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T01:09:34.658Z] [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T01:09:34.900Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_302d27b5 in #💻・tech-jobs
[2025-12-03T01:09:34.900Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_302d27b5
[2025-12-03T01:09:36.577Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_302d27b5 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-03T01:09:38.077Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T01:09:38.078Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T01:09:38.083Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T01:09:38.083Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Machine Learning Engineer - Prediction" @ ORG_9eb7abc4
[2025-12-03T01:09:38.084Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T01:09:38.518Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Prediction @ ORG_9eb7abc4 in #💻・tech-jobs
  ✅ Industry: Machine Learning Engineer - Prediction @ ORG_9eb7abc4
[2025-12-03T01:09:40.196Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer - Prediction @ ORG_9eb7abc4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T01:09:41.696Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T01:09:41.696Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T01:09:41.699Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T01:09:41.699Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer" @ ORG_3073424b
   Category: TECH (matched: "software")
[2025-12-03T01:09:41.699Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T01:09:41.828Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_3073424b in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_3073424b
[2025-12-03T01:09:43.575Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_3073424b in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T01:09:45.075Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T01:09:45.076Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T01:09:45.080Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T01:09:45.080Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T01:09:45.308Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
  ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T01:09:46.968Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T01:09:48.470Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T01:09:48.470Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T01:09:48.474Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T01:09:48.475Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T01:09:51.475Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T01:09:51.475Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T01:09:51.705Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T01:09:53.349Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T01:09:54.851Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T01:09:54.851Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T01:09:54.856Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T01:09:54.856Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T01:09:57.856Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-03T01:09:57.857Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2025-12-03T01:09:57.858Z] [BOT] ✅ Saved pending queue: 9 total (0 pending, 4 enriched, 5 posted)
[2025-12-03T01:09:57.858Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T01:09:57.896Z] [BOT] 📂 Loaded 641 existing routing entries
[2025-12-03T01:09:57.936Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 646
   Timestamp: 2025-12-03T01:09:57.934Z
[2025-12-03T01:09:59.947Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2486) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*