# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T02:36:12.147Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T02:35:28.883Z] ========================================
[2025-12-03T02:35:28.885Z] Discord Bot Execution Log
[2025-12-03T02:35:28.885Z] Environment: GitHub Actions
[2025-12-03T02:35:28.885Z] Node Version: v20.19.5
[2025-12-03T02:35:28.885Z] ========================================
[2025-12-03T02:35:28.885Z] Environment Variables Check:
[2025-12-03T02:35:28.885Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T02:35:28.885Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.885Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T02:35:28.886Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T02:35:28.886Z] 
Multi-Channel Configuration:
[2025-12-03T02:35:28.886Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T02:35:28.886Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T02:35:28.886Z] 
Data Files Check:
[2025-12-03T02:35:28.887Z] .github/data/new_jobs.json: ✅ Exists (12 items, 58217 bytes)
[2025-12-03T02:35:28.889Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333239 bytes)
[2025-12-03T02:35:28.889Z] 
========================================
[2025-12-03T02:35:28.889Z] Starting Enhanced Discord Bot...
[2025-12-03T02:35:28.889Z] ========================================
[2025-12-03T02:35:30.098Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T02:35:30.099Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T02:35:30.099Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T02:35:30.101Z] [BOT] 📦 Exporting 12 jobs to encrypted JSON...
[2025-12-03T02:35:30.184Z] [BOT] ✅ Export complete: Added 0, Skipped 12, Total 12
[2025-12-03T02:35:30.185Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T02:35:30.185Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T02:35:30.185Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T02:35:30.185Z] [BOT] 📬 Found 8 new jobs (4 already posted)...
[2025-12-03T02:35:30.186Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-03T02:35:30.186Z] [BOT] 📋 After title+company+location dedup: 8 unique jobs to post
📤 Posting 8 jobs...
[2025-12-03T02:35:30.186Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T02:35:30.190Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2025-12-03T02:35:30.190Z] [BOT] 📍 [ROUTING] "Software Engineer - C# - TypeScript" @ ORG_05d2f9ea Electric
[2025-12-03T02:35:30.190Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T02:35:30.194Z] [BOT ERROR] (node:2778) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T02:35:30.414Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - C# - TypeScript @ ORG_05d2f9ea Electric in #💻・tech-jobs
[2025-12-03T02:35:30.414Z] [BOT] ✅ Industry: Software Engineer - C# - TypeScript @ ORG_05d2f9ea Electric
[2025-12-03T02:35:32.133Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - C# - TypeScript @ ORG_05d2f9ea Electric in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T02:35:33.633Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:35:33.633Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:35:33.639Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T02:35:33.640Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Associate Software Engineer" @ ORG_8a40e6ae Architects
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T02:35:33.905Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_8a40e6ae Architects in #💻・tech-jobs
[2025-12-03T02:35:33.905Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_8a40e6ae Architects
[2025-12-03T02:35:35.989Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_8a40e6ae Architects in #🌧️・seattle
[2025-12-03T02:35:35.990Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-03T02:35:37.490Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:35:37.491Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:35:37.495Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T02:35:37.495Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer" @ ORG_8a40e6ae Architects
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T02:35:37.686Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_8a40e6ae Architects in #💻・tech-jobs
[2025-12-03T02:35:37.686Z] [BOT] ✅ Industry: Software Engineer @ ORG_8a40e6ae Architects
[2025-12-03T02:35:39.836Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_8a40e6ae Architects in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-03T02:35:41.337Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:35:41.338Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:35:41.342Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T02:35:41.342Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer – New Grad" @ ORG_bcf1e359
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T02:35:41.526Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_bcf1e359 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_bcf1e359
[2025-12-03T02:35:43.252Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New Grad @ ORG_bcf1e359 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T02:35:44.753Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:35:44.754Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:35:44.758Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T02:35:44.758Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Java Developer" @ mthree
   Category: TECH (matched: "software")
[2025-12-03T02:35:44.758Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T02:35:45.261Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ mthree in #💻・tech-jobs
  ✅ Industry: Java Developer @ mthree
[2025-12-03T02:35:47.254Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ mthree in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T02:35:48.755Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:35:48.756Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:35:48.760Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T02:35:48.760Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T02:35:48.956Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
  ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T02:35:50.711Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T02:35:52.212Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:35:52.213Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:35:52.216Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T02:35:52.217Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T02:35:55.218Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-03T02:35:55.218Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow - Geophysics" @ ORG_4ae62bf4 School of Mines
   Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-03T02:35:55.537Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Geophysics @ ORG_4ae62bf4 School of Mines in #💰・finance-jobs
  ✅ Industry: Postdoctoral Fellow - Geophysics @ ORG_4ae62bf4 School of Mines
[2025-12-03T02:35:57.498Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow - Geophysics @ ORG_4ae62bf4 School of Mines in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T02:35:58.999Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:35:58.999Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:35:59.003Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T02:35:59.003Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T02:36:02.004Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T02:36:02.004Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T02:36:02.363Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2025-12-03T02:36:02.364Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T02:36:04.268Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
[2025-12-03T02:36:04.268Z] [BOT] ✅ Location: 🤠・austin
[2025-12-03T02:36:05.769Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T02:36:05.769Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T02:36:05.777Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T02:36:05.777Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T02:36:08.778Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2025-12-03T02:36:08.779Z] [BOT] ✅ Loaded pending queue: 12 total (0 pending, 12 enriched, 0 posted)
[2025-12-03T02:36:08.781Z] [BOT] ✅ Saved pending queue: 12 total (0 pending, 4 enriched, 8 posted)
[2025-12-03T02:36:08.781Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T02:36:08.820Z] [BOT] 📂 Loaded 648 existing routing entries
[2025-12-03T02:36:08.860Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 656
[2025-12-03T02:36:08.860Z] [BOT] Timestamp: 2025-12-03T02:36:08.858Z
[2025-12-03T02:36:10.871Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2778) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*