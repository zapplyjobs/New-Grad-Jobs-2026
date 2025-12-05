# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T23:44:22.830Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 46
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T23:38:07.393Z] ========================================
[2025-12-05T23:38:07.396Z] Discord Bot Execution Log
[2025-12-05T23:38:07.396Z] Environment: GitHub Actions
[2025-12-05T23:38:07.396Z] Node Version: v20.19.6
[2025-12-05T23:38:07.396Z] ========================================
[2025-12-05T23:38:07.396Z] Environment Variables Check:
[2025-12-05T23:38:07.396Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T23:38:07.396Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.396Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T23:38:07.396Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T23:38:07.396Z] 
Multi-Channel Configuration:
[2025-12-05T23:38:07.396Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.396Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T23:38:07.397Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T23:38:07.397Z] 
Data Files Check:
[2025-12-05T23:38:07.402Z] .github/data/new_jobs.json: ✅ Exists (50 items, 632065 bytes)
[2025-12-05T23:38:07.402Z] .github/data/posted_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-05T23:38:07.402Z] 
========================================
[2025-12-05T23:38:07.402Z] Starting Enhanced Discord Bot...
[2025-12-05T23:38:07.402Z] ========================================
[2025-12-05T23:38:08.604Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T23:38:08.605Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T23:38:08.605Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T23:38:08.608Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T23:38:08.754Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 303
[2025-12-05T23:38:08.758Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T23:38:08.758Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T23:38:08.758Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T23:38:08.758Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T23:38:08.759Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 46 unique jobs to post
   (4 skipped as duplicate title+company+location combinations)
[2025-12-05T23:38:08.759Z] [BOT] ⏸️ Limiting to 50 jobs this run, 4 deferred for next run
📤 Posting 46 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T23:38:08.766Z] [BOT] 📌 Posting 21 jobs to #💻・tech-jobs
[2025-12-05T23:38:08.766Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
   Category: TECH (matched: "software")
[2025-12-05T23:38:08.766Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:08.770Z] [BOT ERROR] (node:5860) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T23:38:08.923Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
[2025-12-05T23:38:08.923Z] [BOT] ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-05T23:38:10.669Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T23:38:12.169Z] [BOT] 💾 BEFORE SAVE: Database has 1 jobs
[2025-12-05T23:38:12.174Z] [BOT] 💾 Saved 1 posted jobs to database
[2025-12-05T23:38:12.174Z] [BOT] ✅ Verified: Database file contains 1 jobs
📍 [ROUTING] "Condition Monitoring Engineer" @ ORG_1640be31 Insight
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:12.394Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・tech-jobs
[2025-12-05T23:38:12.395Z] [BOT] ✅ Industry: Condition Monitoring Engineer @ ORG_1640be31 Insight
[2025-12-05T23:38:14.069Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・remote-usa
[2025-12-05T23:38:14.069Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:38:15.570Z] [BOT] 💾 BEFORE SAVE: Database has 2 jobs
[2025-12-05T23:38:15.570Z] [BOT] 💾 Saved 2 posted jobs to database
✅ Verified: Database file contains 2 jobs
[2025-12-05T23:38:15.571Z] [BOT] 📍 [ROUTING] "New College Grad - Yield Analysis Engineer" @ ORG_23f4e0fc Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:15.831Z] [BOT] ✅ Created forum post: 🏢 New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology in #💻・tech-jobs
  ✅ Industry: New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology
[2025-12-05T23:38:17.541Z] [BOT] ✅ Created forum post: 🏢 New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:38:19.042Z] [BOT] 💾 BEFORE SAVE: Database has 3 jobs
[2025-12-05T23:38:19.043Z] [BOT] 💾 Saved 3 posted jobs to database
✅ Verified: Database file contains 3 jobs
[2025-12-05T23:38:19.043Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_7dcce8d0ine
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:19.224Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_7dcce8d0ine
[2025-12-05T23:38:20.890Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T23:38:22.390Z] [BOT] 💾 BEFORE SAVE: Database has 4 jobs
[2025-12-05T23:38:22.391Z] [BOT] 💾 Saved 4 posted jobs to database
[2025-12-05T23:38:22.391Z] [BOT] ✅ Verified: Database file contains 4 jobs
📍 [ROUTING] "Research Engineer" @ ORG_f3e93c9b Automation
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:22.745Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・tech-jobs
  ✅ Industry: Research Engineer @ ORG_f3e93c9b Automation
[2025-12-05T23:38:24.397Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:38:25.898Z] [BOT] 💾 BEFORE SAVE: Database has 5 jobs
[2025-12-05T23:38:25.899Z] [BOT] 💾 Saved 5 posted jobs to database
[2025-12-05T23:38:25.899Z] [BOT] ✅ Verified: Database file contains 5 jobs
📍 [ROUTING] "Audio Visual Programmer" @ ORG_b344d80e Boeing Company
[2025-12-05T23:38:25.899Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:26.090Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Audio Visual Programmer @ ORG_b344d80e Boeing Company
[2025-12-05T23:38:27.807Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:38:29.308Z] [BOT] 💾 BEFORE SAVE: Database has 6 jobs
[2025-12-05T23:38:29.309Z] [BOT] 💾 Saved 6 posted jobs to database
✅ Verified: Database file contains 6 jobs
[2025-12-05T23:38:29.309Z] [BOT] 📍 [ROUTING] "Audiovisual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:29.634Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Audiovisual Programmer @ ORG_b344d80e Boeing Company
[2025-12-05T23:38:31.570Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:38:33.070Z] [BOT] 💾 BEFORE SAVE: Database has 7 jobs
[2025-12-05T23:38:33.071Z] [BOT] 💾 Saved 7 posted jobs to database
[2025-12-05T23:38:33.071Z] [BOT] ✅ Verified: Database file contains 7 jobs
[2025-12-05T23:38:33.071Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Apps" @ ORG_d01167bb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:33.187Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #💻・tech-jobs
[2025-12-05T23:38:33.187Z] [BOT] ✅ Industry: Software Engineer 2 - Apps @ ORG_d01167bb
[2025-12-05T23:38:34.862Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #🌉・san-francisco
[2025-12-05T23:38:34.862Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T23:38:36.364Z] [BOT] 💾 BEFORE SAVE: Database has 8 jobs
[2025-12-05T23:38:36.365Z] [BOT] 💾 Saved 8 posted jobs to database
[2025-12-05T23:38:36.365Z] [BOT] ✅ Verified: Database file contains 8 jobs
📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2025-12-05T23:38:36.365Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:36.545Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
[2025-12-05T23:38:36.545Z] [BOT] ✅ Industry: Software Engineer @ ORG_afd623b1
[2025-12-05T23:38:38.287Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #🤠・austin
[2025-12-05T23:38:38.287Z] [BOT] ✅ Location: 🤠・austin
[2025-12-05T23:38:39.788Z] [BOT] 💾 BEFORE SAVE: Database has 9 jobs
[2025-12-05T23:38:39.789Z] [BOT] 💾 Saved 9 posted jobs to database
[2025-12-05T23:38:39.789Z] [BOT] ✅ Verified: Database file contains 9 jobs
📍 [ROUTING] "Product and Service Development Engineer 1 - Entertainment" @ ORG_2f758176 Royce
[2025-12-05T23:38:39.790Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:40.068Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・tech-jobs
[2025-12-05T23:38:40.068Z] [BOT] ✅ Industry: Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce
[2025-12-05T23:38:41.718Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・remote-usa
[2025-12-05T23:38:41.718Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:38:43.219Z] [BOT] 💾 BEFORE SAVE: Database has 10 jobs
[2025-12-05T23:38:43.220Z] [BOT] 💾 Saved 10 posted jobs to database
✅ Verified: Database file contains 10 jobs
[2025-12-05T23:38:43.220Z] [BOT] 📍 [ROUTING] "Data Collections Specialist" @ ORG_0aa5052d State University (LSU)
[2025-12-05T23:38:43.220Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:43.483Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
[2025-12-05T23:38:43.483Z] [BOT] ✅ Industry: Data Collections Specialist @ ORG_0aa5052d State University (LSU)
[2025-12-05T23:38:48.600Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
[2025-12-05T23:38:48.601Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:38:50.102Z] [BOT] 💾 BEFORE SAVE: Database has 11 jobs
[2025-12-05T23:38:50.103Z] [BOT] 💾 Saved 11 posted jobs to database
✅ Verified: Database file contains 11 jobs
[2025-12-05T23:38:50.103Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_d6d2009d
[2025-12-05T23:38:50.103Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:50.231Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_d6d2009d in #💻・tech-jobs
[2025-12-05T23:38:50.232Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_d6d2009d
[2025-12-05T23:38:51.891Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_d6d2009d in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T23:38:53.391Z] [BOT] 💾 BEFORE SAVE: Database has 12 jobs
[2025-12-05T23:38:53.392Z] [BOT] 💾 Saved 12 posted jobs to database
[2025-12-05T23:38:53.393Z] [BOT] ✅ Verified: Database file contains 12 jobs
📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
[2025-12-05T23:38:53.393Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:53.726Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2025-12-05T23:38:53.726Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2025-12-05T23:38:55.941Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:38:57.442Z] [BOT] 💾 BEFORE SAVE: Database has 13 jobs
[2025-12-05T23:38:57.443Z] [BOT] 💾 Saved 13 posted jobs to database
[2025-12-05T23:38:57.443Z] [BOT] ✅ Verified: Database file contains 13 jobs
📍 [ROUTING] "Custom Application Engineer" @ ORG_cb844c98 Technologies
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:38:57.646Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・tech-jobs
[2025-12-05T23:38:57.646Z] [BOT] ✅ Industry: Custom Application Engineer @ ORG_cb844c98 Technologies
[2025-12-05T23:38:59.307Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:39:00.808Z] [BOT] 💾 BEFORE SAVE: Database has 14 jobs
[2025-12-05T23:39:00.809Z] [BOT] 💾 Saved 14 posted jobs to database
[2025-12-05T23:39:00.809Z] [BOT] ✅ Verified: Database file contains 14 jobs
📍 [ROUTING] "Cryptoanalyst Level 2 - CCA allowed" @ ORG_a6a32dbc
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:39:00.989Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #💻・tech-jobs
[2025-12-05T23:39:00.989Z] [BOT] ✅ Industry: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc
[2025-12-05T23:39:02.659Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #💻・remote-usa
[2025-12-05T23:39:02.659Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:39:04.160Z] [BOT] 💾 BEFORE SAVE: Database has 15 jobs
[2025-12-05T23:39:04.161Z] [BOT] 💾 Saved 15 posted jobs to database
✅ Verified: Database file contains 15 jobs
[2025-12-05T23:39:04.161Z] [BOT] 📍 [ROUTING] "Java Software Engineer 1" @ ORG_0fb6ee9c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:39:04.303Z] [BOT] ✅ Created forum post: 🏢 Java Software Engineer 1 @ ORG_0fb6ee9c in #💻・tech-jobs
  ✅ Industry: Java Software Engineer 1 @ ORG_0fb6ee9c
[2025-12-05T23:39:05.804Z] [BOT] 💾 BEFORE SAVE: Database has 16 jobs
[2025-12-05T23:39:05.805Z] [BOT] 💾 Saved 16 posted jobs to database
[2025-12-05T23:39:05.805Z] [BOT] ✅ Verified: Database file contains 16 jobs
📍 [ROUTING] "Software Engineer - Backend - Platform" @ ORG_9ee5b96f
[2025-12-05T23:39:05.805Z] [BOT] Category: TECH (matched: "software")
[2025-12-05T23:39:05.805Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:39:06.060Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #💻・tech-jobs
  ✅ Industry: Software Engineer - Backend - Platform @ ORG_9ee5b96f
[2025-12-05T23:39:07.716Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T23:39:09.217Z] [BOT] 💾 BEFORE SAVE: Database has 17 jobs
[2025-12-05T23:39:09.218Z] [BOT] 💾 Saved 17 posted jobs to database
✅ Verified: Database file contains 17 jobs
[2025-12-05T23:39:09.218Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_d51736fa
   Category: TECH (matched: "software")
[2025-12-05T23:39:09.218Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:39:09.438Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・tech-jobs
[2025-12-05T23:39:09.438Z] [BOT] ✅ Industry: Software Engineer @ ORG_d51736fa
[2025-12-05T23:39:11.132Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・remote-usa
[2025-12-05T23:39:11.133Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:39:12.634Z] [BOT] 💾 BEFORE SAVE: Database has 18 jobs
[2025-12-05T23:39:12.635Z] [BOT] 💾 Saved 18 posted jobs to database
✅ Verified: Database file contains 18 jobs
[2025-12-05T23:39:12.635Z] [BOT] 📍 [ROUTING] "Software Engineer - Perception Infrastructure" @ pony.ai
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:39:13.033Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #💻・tech-jobs
[2025-12-05T23:39:13.033Z] [BOT] ✅ Industry: Software Engineer - Perception Infrastructure @ pony.ai
[2025-12-05T23:39:14.851Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T23:39:16.351Z] [BOT] 💾 BEFORE SAVE: Database has 19 jobs
[2025-12-05T23:39:16.352Z] [BOT] 💾 Saved 19 posted jobs to database
✅ Verified: Database file contains 19 jobs
[2025-12-05T23:39:16.353Z] [BOT] 📍 [ROUTING] "Software Development Engineer 1" @ ORG_ec2d1916 Electron
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:39:16.746Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・tech-jobs
  ✅ Industry: Software Development Engineer 1 @ ORG_ec2d1916 Electron
[2025-12-05T23:39:18.404Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:39:19.905Z] [BOT] 💾 BEFORE SAVE: Database has 20 jobs
[2025-12-05T23:39:19.906Z] [BOT] 💾 Saved 20 posted jobs to database
[2025-12-05T23:39:19.906Z] [BOT] ✅ Verified: Database file contains 20 jobs
📍 [ROUTING] "Software Engineer / Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T23:39:20.204Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2025-12-05T23:39:21.851Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-05T23:39:23.352Z] [BOT] 💾 BEFORE SAVE: Database has 21 jobs
[2025-12-05T23:39:23.353Z] [BOT] 💾 Saved 21 posted jobs to database
[2025-12-05T23:39:23.353Z] [BOT] ✅ Verified: Database file contains 21 jobs
[2025-12-05T23:39:26.353Z] [BOT] 📌 Posting 10 jobs to #ai-jobs
[2025-12-05T23:39:26.353Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - 2026" @ ORG_f09f149f
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:26.626Z] [BOT] ✅ Posted message: New Grad Software Engineer - 2026 at Netflix in #ai-jobs
  ✅ Industry: New Grad Software Engineer - 2026 @ ORG_f09f149f
[2025-12-05T23:39:28.392Z] [BOT] ✅ Created forum post: 🎬 New Grad Software Engineer - 2026 @ ORG_f09f149f in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T23:39:29.893Z] [BOT] 💾 BEFORE SAVE: Database has 22 jobs
[2025-12-05T23:39:29.894Z] [BOT] 💾 Saved 22 posted jobs to database
✅ Verified: Database file contains 22 jobs
[2025-12-05T23:39:29.894Z] [BOT] 📍 [ROUTING] "Data Science Leadership Development Program - Dsldp - Associate Data Scientist" @ ORG_b344d80e Travelers Companies
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:30.002Z] [BOT] ✅ Posted message: Data Science Leadership Development Program - Dsldp - Associate Data Scientist at The Travelers Companies in #ai-jobs
  ✅ Industry: Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Companies
[2025-12-05T23:39:31.686Z] [BOT] ✅ Created forum post: 🏢 Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Co in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:39:33.187Z] [BOT] 💾 BEFORE SAVE: Database has 23 jobs
[2025-12-05T23:39:33.188Z] [BOT] 💾 Saved 23 posted jobs to database
[2025-12-05T23:39:33.188Z] [BOT] ✅ Verified: Database file contains 23 jobs
📍 [ROUTING] "Verification Application Engineer" @ ORG_316d43c0 Design Systems
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:35.003Z] [BOT] ✅ Posted message: Verification Application Engineer at Cadence Design Systems in #ai-jobs
  ✅ Industry: Verification Application Engineer @ ORG_316d43c0 Design Systems
[2025-12-05T23:39:36.667Z] [BOT] ✅ Created forum post: 🏢 Verification Application Engineer @ ORG_316d43c0 Design Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:39:38.168Z] [BOT] 💾 BEFORE SAVE: Database has 24 jobs
[2025-12-05T23:39:38.169Z] [BOT] 💾 Saved 24 posted jobs to database
[2025-12-05T23:39:38.169Z] [BOT] ✅ Verified: Database file contains 24 jobs
📍 [ROUTING] "AI Engineer" @ ORG_b415d82b
[2025-12-05T23:39:38.169Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:38.408Z] [BOT] ✅ Posted message: AI Engineer at Guidewire in #ai-jobs
  ✅ Industry: AI Engineer @ ORG_b415d82b
[2025-12-05T23:39:40.048Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_b415d82b in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T23:39:41.549Z] [BOT] 💾 BEFORE SAVE: Database has 25 jobs
[2025-12-05T23:39:41.550Z] [BOT] 💾 Saved 25 posted jobs to database
[2025-12-05T23:39:41.550Z] [BOT] ✅ Verified: Database file contains 25 jobs
📍 [ROUTING] "Data Science Level 2 - Advanced AI - NLP" @ ORG_a6a32dbc
   Category: AI (matched: "AI specialization")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:41.683Z] [BOT] ✅ Posted message: Data Science Level 2 - Advanced AI - NLP at Link in #ai-jobs
  ✅ Industry: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc
[2025-12-05T23:39:43.390Z] [BOT] ✅ Created forum post: 🏢 Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:39:44.892Z] [BOT] 💾 BEFORE SAVE: Database has 26 jobs
[2025-12-05T23:39:44.893Z] [BOT] 💾 Saved 26 posted jobs to database
✅ Verified: Database file contains 26 jobs
[2025-12-05T23:39:44.893Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_655fad25
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:45.019Z] [BOT] ✅ Posted message: Software Engineer 1 at GumGum in #ai-jobs
[2025-12-05T23:39:45.019Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_655fad25
[2025-12-05T23:39:46.643Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_655fad25 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T23:39:48.143Z] [BOT] 💾 BEFORE SAVE: Database has 27 jobs
[2025-12-05T23:39:48.144Z] [BOT] 💾 Saved 27 posted jobs to database
[2025-12-05T23:39:48.144Z] [BOT] ✅ Verified: Database file contains 27 jobs
📍 [ROUTING] "Associate Cloud Data Engineer" @ ORG_6bda74c9 Health
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:48.268Z] [BOT] ✅ Posted message: Associate Cloud Data Engineer at CVS Health in #ai-jobs
  ✅ Industry: Associate Cloud Data Engineer @ ORG_6bda74c9 Health
[2025-12-05T23:39:50.075Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-05T23:39:51.575Z] [BOT] 💾 BEFORE SAVE: Database has 28 jobs
[2025-12-05T23:39:51.576Z] [BOT] 💾 Saved 28 posted jobs to database
[2025-12-05T23:39:51.576Z] [BOT] ✅ Verified: Database file contains 28 jobs
📍 [ROUTING] "Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2025-12-05T23:39:51.577Z] [BOT] Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:51.678Z] [BOT] ✅ Posted message: Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms at NVIDIA in #ai-jobs
  ✅ Industry: Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456
[2025-12-05T23:39:53.352Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T23:39:54.853Z] [BOT] 💾 BEFORE SAVE: Database has 29 jobs
[2025-12-05T23:39:54.854Z] [BOT] 💾 Saved 29 posted jobs to database
[2025-12-05T23:39:54.855Z] [BOT] ✅ Verified: Database file contains 29 jobs
📍 [ROUTING] "2026 – Americas - New York City Area - Engineering" @ ORG_d49bddaa Sachs
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:54.989Z] [BOT] ✅ Posted message: 2026 – Americas - New York City Area - Engineering at Goldman Sachs in #ai-jobs
[2025-12-05T23:39:54.989Z] [BOT] ✅ Industry: 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs
[2025-12-05T23:39:56.653Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T23:39:58.154Z] [BOT] 💾 BEFORE SAVE: Database has 30 jobs
[2025-12-05T23:39:58.155Z] [BOT] 💾 Saved 30 posted jobs to database
[2025-12-05T23:39:58.155Z] [BOT] ✅ Verified: Database file contains 30 jobs
📍 [ROUTING] "Analyst – Enterprise Business Intelligence & AI/ML Engineering" @ ORG_a35c6c02
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...3278)
[2025-12-05T23:39:58.279Z] [BOT] ✅ Posted message: Analyst – Enterprise Business Intelligence & AI/ML Engineering at Comcast in #ai-jobs
  ✅ Industry: Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02
[2025-12-05T23:43:09.100Z] [BOT] ✅ Created forum post: 🏢 Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:43:10.601Z] [BOT] 💾 BEFORE SAVE: Database has 31 jobs
[2025-12-05T23:43:10.602Z] [BOT] 💾 Saved 31 posted jobs to database
[2025-12-05T23:43:10.602Z] [BOT] ✅ Verified: Database file contains 31 jobs
[2025-12-05T23:43:13.603Z] [BOT] 📌 Posting 8 jobs to #JID_fb739488
[2025-12-05T23:43:13.603Z] [BOT] 📍 [ROUTING] "Enablement Operations Data Analyst - NYC" @ ORG_8bd7b9fd
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:13.772Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #JID_fb739488
[2025-12-05T23:43:13.773Z] [BOT] ✅ Industry: Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd
[2025-12-05T23:43:15.441Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T23:43:16.942Z] [BOT] 💾 BEFORE SAVE: Database has 32 jobs
[2025-12-05T23:43:16.943Z] [BOT] 💾 Saved 32 posted jobs to database
[2025-12-05T23:43:16.943Z] [BOT] ✅ Verified: Database file contains 32 jobs
[2025-12-05T23:43:16.943Z] [BOT] 📍 [ROUTING] "IT Data Analyst - Power BI" @ ORG_7dcce8d0ine
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:17.214Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #JID_fb739488
  ✅ Industry: IT Data Analyst - Power BI @ ORG_7dcce8d0ine
[2025-12-05T23:43:19.000Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T23:43:20.502Z] [BOT] 💾 BEFORE SAVE: Database has 33 jobs
[2025-12-05T23:43:20.503Z] [BOT] 💾 Saved 33 posted jobs to database
✅ Verified: Database file contains 33 jobs
[2025-12-05T23:43:20.504Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer - Secure Networks & Protocols" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:20.793Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #JID_fb739488
  ✅ Industry: Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company
[2025-12-05T23:43:22.475Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:43:23.976Z] [BOT] 💾 BEFORE SAVE: Database has 34 jobs
[2025-12-05T23:43:23.977Z] [BOT] 💾 Saved 34 posted jobs to database
[2025-12-05T23:43:23.977Z] [BOT] ✅ Verified: Database file contains 34 jobs
📍 [ROUTING] "Analytics/Dashboarding Analyst - Ada" @ ORG_434be781
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-05T23:43:23.977Z] [BOT] Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:24.203Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #JID_fb739488
[2025-12-05T23:43:24.203Z] [BOT] ✅ Industry: Analytics/Dashboarding Analyst - Ada @ ORG_434be781
[2025-12-05T23:43:26.010Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #💻・remote-usa
[2025-12-05T23:43:26.010Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:43:27.511Z] [BOT] 💾 BEFORE SAVE: Database has 35 jobs
[2025-12-05T23:43:27.512Z] [BOT] 💾 Saved 35 posted jobs to database
[2025-12-05T23:43:27.512Z] [BOT] ✅ Verified: Database file contains 35 jobs
📍 [ROUTING] "Data Science Analyst - Consumer Engagement" @ ORG_6bda74c9 Health
[2025-12-05T23:43:27.512Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:27.686Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health in #JID_fb739488
[2025-12-05T23:43:27.686Z] [BOT] ✅ Industry: Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health
[2025-12-05T23:43:29.638Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T23:43:31.139Z] [BOT] 💾 BEFORE SAVE: Database has 36 jobs
[2025-12-05T23:43:31.140Z] [BOT] 💾 Saved 36 posted jobs to database
✅ Verified: Database file contains 36 jobs
[2025-12-05T23:43:31.140Z] [BOT] 📍 [ROUTING] "Business Data Analyst" @ ORG_05d2f9ea Electric
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:31.636Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_05d2f9ea Electric in #JID_fb739488
  ✅ Industry: Business Data Analyst @ ORG_05d2f9ea Electric
[2025-12-05T23:43:33.138Z] [BOT] 💾 BEFORE SAVE: Database has 37 jobs
[2025-12-05T23:43:33.139Z] [BOT] 💾 Saved 37 posted jobs to database
[2025-12-05T23:43:33.139Z] [BOT] ✅ Verified: Database file contains 37 jobs
📍 [ROUTING] "Data Analyst" @ ORG_2ea541c5
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-05T23:43:33.139Z] [BOT] Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:33.283Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #JID_fb739488
[2025-12-05T23:43:33.283Z] [BOT] ✅ Industry: Data Analyst @ ORG_2ea541c5
[2025-12-05T23:43:35.032Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #🌉・san-francisco
[2025-12-05T23:43:35.033Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T23:43:36.533Z] [BOT] 💾 BEFORE SAVE: Database has 38 jobs
[2025-12-05T23:43:36.535Z] [BOT] 💾 Saved 38 posted jobs to database
✅ Verified: Database file contains 38 jobs
[2025-12-05T23:43:36.535Z] [BOT] 📍 [ROUTING] "Revenue Integrity Data Analyst 1" @ ORG_9d38443e of Maryland Medical System
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1446...2761)
[2025-12-05T23:43:36.840Z] [BOT] ✅ Created forum post: 🏢 Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System in #JID_fb739488
  ✅ Industry: Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System
[2025-12-05T23:43:38.543Z] [BOT] ✅ Created forum post: 🏢 Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System in #💻・remote-usa
[2025-12-05T23:43:38.543Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:43:40.044Z] [BOT] 💾 BEFORE SAVE: Database has 39 jobs
[2025-12-05T23:43:40.045Z] [BOT] 💾 Saved 39 posted jobs to database
✅ Verified: Database file contains 39 jobs
[2025-12-05T23:43:43.046Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2025-12-05T23:43:43.046Z] [BOT] 📍 [ROUTING] "Mining Application Specialist" @ ORG_85937e82 Inc.
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-05T23:43:43.398Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #📣・marketing-jobs
[2025-12-05T23:43:43.398Z] [BOT] ✅ Industry: Mining Application Specialist @ ORG_85937e82 Inc.
[2025-12-05T23:43:44.899Z] [BOT] 💾 BEFORE SAVE: Database has 40 jobs
[2025-12-05T23:43:44.900Z] [BOT] 💾 Saved 40 posted jobs to database
[2025-12-05T23:43:44.900Z] [BOT] ✅ Verified: Database file contains 40 jobs
📍 [ROUTING] "Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
   Category: MARKETING (matched: "growth")
[2025-12-05T23:43:44.900Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-05T23:43:45.076Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
[2025-12-05T23:43:45.076Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2025-12-05T23:43:46.868Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
[2025-12-05T23:43:46.868Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:43:48.369Z] [BOT] 💾 BEFORE SAVE: Database has 41 jobs
[2025-12-05T23:43:48.370Z] [BOT] 💾 Saved 41 posted jobs to database
[2025-12-05T23:43:48.370Z] [BOT] ✅ Verified: Database file contains 41 jobs
[2025-12-05T23:43:51.372Z] [BOT] 📌 Posting 3 jobs to #📁・JID_e938df7b
[2025-12-05T23:43:51.372Z] [BOT] 📍 [ROUTING] "Part-Time Research Support" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T23:43:51.580Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #📁・JID_e938df7b
[2025-12-05T23:43:51.580Z] [BOT] ✅ Industry: Part-Time Research Support @ ORG_478e100e University
[2025-12-05T23:43:53.271Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:43:54.772Z] [BOT] 💾 BEFORE SAVE: Database has 42 jobs
[2025-12-05T23:43:54.773Z] [BOT] 💾 Saved 42 posted jobs to database
[2025-12-05T23:43:54.773Z] [BOT] ✅ Verified: Database file contains 42 jobs
📍 [ROUTING] "Postdoc Research Associate-Computational Scientist" @ ORG_f7906b79 River National Laboratory
   Category: HR (matched: "benefits")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T23:43:54.987Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory in #📁・JID_e938df7b
  ✅ Industry: Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory
[2025-12-05T23:43:59.012Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:44:00.513Z] [BOT] 💾 BEFORE SAVE: Database has 43 jobs
[2025-12-05T23:44:00.514Z] [BOT] 💾 Saved 43 posted jobs to database
[2025-12-05T23:44:00.514Z] [BOT] ✅ Verified: Database file contains 43 jobs
📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T23:44:01.135Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T23:44:02.899Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-05T23:44:02.899Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T23:44:04.400Z] [BOT] 💾 BEFORE SAVE: Database has 44 jobs
[2025-12-05T23:44:04.401Z] [BOT] 💾 Saved 44 posted jobs to database
[2025-12-05T23:44:04.402Z] [BOT] ✅ Verified: Database file contains 44 jobs
[2025-12-05T23:44:07.402Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-05T23:44:07.403Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_f6a2986e
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-05T23:44:07.575Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💲・sales-jobs
[2025-12-05T23:44:07.575Z] [BOT] ✅ Industry: Systems Analyst @ ORG_f6a2986e
[2025-12-05T23:44:09.224Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T23:44:10.725Z] [BOT] 💾 BEFORE SAVE: Database has 45 jobs
[2025-12-05T23:44:10.726Z] [BOT] 💾 Saved 45 posted jobs to database
✅ Verified: Database file contains 45 jobs
[2025-12-05T23:44:13.726Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-05T23:44:13.726Z] [BOT] 📍 [ROUTING] "ATC Salesforce Analyst - Nashville" @ ORG_6cd9e83c
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-05T23:44:13.947Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🩺・healthcare-jobs
[2025-12-05T23:44:13.947Z] [BOT] ✅ Industry: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c
[2025-12-05T23:44:15.643Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🗽・new-york
[2025-12-05T23:44:15.643Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-05T23:44:17.144Z] [BOT] 💾 BEFORE SAVE: Database has 46 jobs
[2025-12-05T23:44:17.145Z] [BOT] 💾 Saved 46 posted jobs to database
[2025-12-05T23:44:17.145Z] [BOT] ✅ Verified: Database file contains 46 jobs
[2025-12-05T23:44:20.145Z] [BOT] 🎉 Posting complete! Successfully posted: 46, Failed: 0
[2025-12-05T23:44:20.151Z] [BOT] ✅ Loaded pending queue: 51 total (1 pending, 50 enriched, 0 posted)
[2025-12-05T23:44:20.157Z] [BOT] ✅ Saved pending queue: 51 total (1 pending, 4 enriched, 46 posted)
[2025-12-05T23:44:20.157Z] [BOT] 📋 Updated queue: marked 46 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T23:44:20.194Z] [BOT] 📂 Loaded 111 existing routing entries
[2025-12-05T23:44:20.230Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 46
   Total entries: 157
   Timestamp: 2025-12-05T23:44:20.230Z
[2025-12-05T23:44:22.242Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:5860) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*