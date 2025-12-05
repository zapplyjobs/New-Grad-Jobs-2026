# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T14:27:11.282Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 21
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T14:25:47.312Z] ========================================
[2025-12-05T14:25:47.314Z] Discord Bot Execution Log
[2025-12-05T14:25:47.314Z] Environment: GitHub Actions
[2025-12-05T14:25:47.314Z] Node Version: v20.19.6
[2025-12-05T14:25:47.314Z] ========================================
[2025-12-05T14:25:47.314Z] Environment Variables Check:
[2025-12-05T14:25:47.314Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T14:25:47.314Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.314Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T14:25:47.315Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T14:25:47.315Z] 
Multi-Channel Configuration:
[2025-12-05T14:25:47.315Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T14:25:47.315Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T14:25:47.315Z] 
Data Files Check:
[2025-12-05T14:25:47.320Z] .github/data/new_jobs.json: ✅ Exists (50 items, 708720 bytes)
[2025-12-05T14:25:47.320Z] .github/data/posted_jobs.json: ✅ Exists (34 items, 3126 bytes)
[2025-12-05T14:25:47.320Z] 
========================================
[2025-12-05T14:25:47.320Z] Starting Enhanced Discord Bot...
[2025-12-05T14:25:47.320Z] ========================================
[2025-12-05T14:25:48.341Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T14:25:48.342Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T14:25:48.342Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T14:25:48.345Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T14:25:48.489Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 300
[2025-12-05T14:25:48.493Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T14:25:48.493Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T14:25:48.493Z] [BOT] ⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
[2025-12-05T14:25:48.493Z] [BOT] ⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
[2025-12-05T14:25:48.493Z] [BOT] ⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
[2025-12-05T14:25:48.493Z] [BOT] ⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
[2025-12-05T14:25:48.494Z] [BOT] ⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:25:48.494Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Science Leadership Development Program - Dsldp - Associate Data Scientist at The Travelers Companies, Hartford (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: New College Grad - Yield Analysis Engineer at Micron Technology, Boise (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Associate Cloud Data Engineer at CVS Health, Irving (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: ATC Salesforce Analyst - Nashville at Accenture, Nashville (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms at NVIDIA, Santa Clara (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer at Leidos, Huntsville (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer - Perception Infrastructure at pony.ai, Fremont (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: 2026 – Americas - New York City Area - Engineering at Goldman Sachs, NYC (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:25:48.494Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 21 unique jobs to post
   (29 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 29 deferred for next run
📤 Posting 21 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T14:25:48.500Z] [BOT] 📌 Posting 17 jobs to #💻・tech-jobs
[2025-12-05T14:25:48.500Z] [BOT] 📍 [ROUTING] "New College Grad - Yield Analysis Engineer" @ ORG_23f4e0fc Technology
[2025-12-05T14:25:48.501Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-12-05T14:25:48.501Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:25:48.506Z] [BOT ERROR] (node:4421) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T14:25:48.681Z] [BOT] ✅ Created forum post: 🏢 New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology in #💻・tech-jobs
  ✅ Industry: New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology
[2025-12-05T14:25:50.595Z] [BOT] ✅ Created forum post: 🏢 New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:25:52.096Z] [BOT] 💾 BEFORE SAVE: Database has 35 jobs
[2025-12-05T14:25:52.101Z] [BOT] 💾 Saved 35 posted jobs to database
[2025-12-05T14:25:52.101Z] [BOT] ✅ Verified: Database file contains 35 jobs
📍 [ROUTING] "Data Science Leadership Development Program - Dsldp - Associate Data Scientist" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "data")
[2025-12-05T14:25:52.101Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:25:52.336Z] [BOT] ✅ Created forum post: 🏢 Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Co in #💻・tech-jobs
[2025-12-05T14:25:52.336Z] [BOT] ✅ Industry: Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Companies
[2025-12-05T14:25:53.963Z] [BOT] ✅ Created forum post: 🏢 Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Co in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:25:55.464Z] [BOT] 💾 BEFORE SAVE: Database has 36 jobs
[2025-12-05T14:25:55.465Z] [BOT] 💾 Saved 36 posted jobs to database
[2025-12-05T14:25:55.465Z] [BOT] ✅ Verified: Database file contains 36 jobs
📍 [ROUTING] "Associate Cloud Data Engineer" @ ORG_6bda74c9 Health
[2025-12-05T14:25:55.465Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:25:55.755Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
  ✅ Industry: Associate Cloud Data Engineer @ ORG_6bda74c9 Health
[2025-12-05T14:25:57.388Z] [BOT] ✅ Created forum post: 🏢 Associate Cloud Data Engineer @ ORG_6bda74c9 Health in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-05T14:25:58.888Z] [BOT] 💾 BEFORE SAVE: Database has 37 jobs
[2025-12-05T14:25:58.889Z] [BOT] 💾 Saved 37 posted jobs to database
[2025-12-05T14:25:58.890Z] [BOT] ✅ Verified: Database file contains 37 jobs
📍 [ROUTING] "Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms" @ ORG_0890f456
   Category: TECH (matched: "software")
[2025-12-05T14:25:58.890Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:25:59.035Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456
[2025-12-05T14:26:00.773Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – New College Grad 2025 - Tensorrt Specialized Platforms @ ORG_0890f456 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T14:26:02.275Z] [BOT] 💾 BEFORE SAVE: Database has 38 jobs
[2025-12-05T14:26:02.276Z] [BOT] 💾 Saved 38 posted jobs to database
[2025-12-05T14:26:02.276Z] [BOT] ✅ Verified: Database file contains 38 jobs
📍 [ROUTING] "Software Engineer" @ ORG_d51736fa
   Category: TECH (matched: "software")
[2025-12-05T14:26:02.276Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:02.452Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_d51736fa
[2025-12-05T14:26:04.290Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:26:05.791Z] [BOT] 💾 BEFORE SAVE: Database has 39 jobs
[2025-12-05T14:26:05.792Z] [BOT] 💾 Saved 39 posted jobs to database
[2025-12-05T14:26:05.792Z] [BOT] ✅ Verified: Database file contains 39 jobs
📍 [ROUTING] "Software Engineer - Perception Infrastructure" @ pony.ai
[2025-12-05T14:26:05.792Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:05.955Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #💻・tech-jobs
  ✅ Industry: Software Engineer - Perception Infrastructure @ pony.ai
[2025-12-05T14:26:07.673Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Perception Infrastructure @ pony.ai in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T14:26:09.174Z] [BOT] 💾 BEFORE SAVE: Database has 40 jobs
[2025-12-05T14:26:09.175Z] [BOT] 💾 Saved 40 posted jobs to database
✅ Verified: Database file contains 40 jobs
[2025-12-05T14:26:09.175Z] [BOT] 📍 [ROUTING] "2026 – Americas - New York City Area - Engineering" @ ORG_d49bddaa Sachs
   Category: TECH (matched: "engineer/engineering")
[2025-12-05T14:26:09.175Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:09.340Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #💻・tech-jobs
  ✅ Industry: 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs
[2025-12-05T14:26:11.124Z] [BOT] ✅ Created forum post: 🏢 2026 – Americas - New York City Area - Engineering @ ORG_d49bddaa Sachs in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T14:26:12.625Z] [BOT] 💾 BEFORE SAVE: Database has 41 jobs
[2025-12-05T14:26:12.626Z] [BOT] 💾 Saved 41 posted jobs to database
[2025-12-05T14:26:12.626Z] [BOT] ✅ Verified: Database file contains 41 jobs
📍 [ROUTING] "Software Development Engineer 1" @ ORG_ec2d1916 Electron
[2025-12-05T14:26:12.626Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:12.817Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・tech-jobs
[2025-12-05T14:26:12.817Z] [BOT] ✅ Industry: Software Development Engineer 1 @ ORG_ec2d1916 Electron
[2025-12-05T14:26:14.498Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer 1 @ ORG_ec2d1916 Electron in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:26:15.997Z] [BOT] 💾 BEFORE SAVE: Database has 42 jobs
[2025-12-05T14:26:15.998Z] [BOT] 💾 Saved 42 posted jobs to database
[2025-12-05T14:26:15.999Z] [BOT] ✅ Verified: Database file contains 42 jobs
📍 [ROUTING] "Analyst – Enterprise Business Intelligence & AI/ML Engineering" @ ORG_a35c6c02
[2025-12-05T14:26:15.999Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:16.157Z] [BOT] ✅ Created forum post: 🏢 Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02 in #💻・tech-jobs
[2025-12-05T14:26:16.158Z] [BOT] ✅ Industry: Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02
[2025-12-05T14:26:18.117Z] [BOT] ✅ Created forum post: 🏢 Analyst – Enterprise Business Intelligence & AI/ML Engineering @ ORG_a35c6c02 in #💻・remote-usa
[2025-12-05T14:26:18.117Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T14:26:19.618Z] [BOT] 💾 BEFORE SAVE: Database has 43 jobs
[2025-12-05T14:26:19.619Z] [BOT] 💾 Saved 43 posted jobs to database
✅ Verified: Database file contains 43 jobs
[2025-12-05T14:26:19.619Z] [BOT] 📍 [ROUTING] "Software Engineer / Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:19.805Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2025-12-05T14:26:21.530Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-05T14:26:23.031Z] [BOT] 💾 BEFORE SAVE: Database has 44 jobs
[2025-12-05T14:26:23.032Z] [BOT] 💾 Saved 44 posted jobs to database
[2025-12-05T14:26:23.032Z] [BOT] ✅ Verified: Database file contains 44 jobs
📍 [ROUTING] "Software Engineer - Level 1 or 2" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:23.215Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman
[2025-12-05T14:26:24.972Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:26:26.473Z] [BOT] 💾 BEFORE SAVE: Database has 45 jobs
[2025-12-05T14:26:26.474Z] [BOT] 💾 Saved 45 posted jobs to database
[2025-12-05T14:26:26.474Z] [BOT] ✅ Verified: Database file contains 45 jobs
[2025-12-05T14:26:26.474Z] [BOT] 📍 [ROUTING] "Appian Application Developer" @ ORG_36b7cbc3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:26.665Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #💻・tech-jobs
[2025-12-05T14:26:26.666Z] [BOT] ✅ Industry: Appian Application Developer @ ORG_36b7cbc3
[2025-12-05T14:26:28.369Z] [BOT] ✅ Created forum post: 🏢 Appian Application Developer @ ORG_36b7cbc3 in #💻・remote-usa
[2025-12-05T14:26:28.369Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T14:26:29.870Z] [BOT] 💾 BEFORE SAVE: Database has 46 jobs
[2025-12-05T14:26:29.871Z] [BOT] 💾 Saved 46 posted jobs to database
[2025-12-05T14:26:29.871Z] [BOT] ✅ Verified: Database file contains 46 jobs
📍 [ROUTING] "Associate Software Engineer" @ ORG_e34691a8 Health
   Category: TECH (matched: "software")
[2025-12-05T14:26:29.871Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:30.069Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_e34691a8 Health in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_e34691a8 Health
[2025-12-05T14:26:31.570Z] [BOT] 💾 BEFORE SAVE: Database has 47 jobs
[2025-12-05T14:26:31.571Z] [BOT] 💾 Saved 47 posted jobs to database
[2025-12-05T14:26:31.571Z] [BOT] ✅ Verified: Database file contains 47 jobs
📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:31.809Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-05T14:26:33.452Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
[2025-12-05T14:26:33.453Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T14:26:34.953Z] [BOT] 💾 BEFORE SAVE: Database has 48 jobs
[2025-12-05T14:26:34.954Z] [BOT] 💾 Saved 48 posted jobs to database
[2025-12-05T14:26:34.954Z] [BOT] ✅ Verified: Database file contains 48 jobs
📍 [ROUTING] "Data Management Support 2" @ ORG_03272755inceton University
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:35.184Z] [BOT] ✅ Created forum post: 🏢 Data Management Support 2 @ ORG_03272755inceton University in #💻・tech-jobs
  ✅ Industry: Data Management Support 2 @ ORG_03272755inceton University
[2025-12-05T14:26:37.761Z] [BOT] ✅ Created forum post: 🏢 Data Management Support 2 @ ORG_03272755inceton University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:26:39.261Z] [BOT] 💾 BEFORE SAVE: Database has 49 jobs
[2025-12-05T14:26:39.262Z] [BOT] 💾 Saved 49 posted jobs to database
✅ Verified: Database file contains 49 jobs
[2025-12-05T14:26:39.263Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer" @ Auto-Owners Insurance
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:39.460Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #💻・tech-jobs
  ✅ Industry: Business Intelligence Developer @ Auto-Owners Insurance
[2025-12-05T14:26:41.085Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer @ Auto-Owners Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:26:42.586Z] [BOT] 💾 BEFORE SAVE: Database has 50 jobs
[2025-12-05T14:26:42.588Z] [BOT] 💾 Saved 50 posted jobs to database
✅ Verified: Database file contains 50 jobs
[2025-12-05T14:26:42.588Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_b0c42a00
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:26:42.759Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_b0c42a00 in #💻・tech-jobs
[2025-12-05T14:26:42.759Z] [BOT] ✅ Industry: Data Scientist @ ORG_b0c42a00
[2025-12-05T14:26:44.422Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_b0c42a00 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T14:26:45.923Z] [BOT] 💾 BEFORE SAVE: Database has 51 jobs
[2025-12-05T14:26:45.924Z] [BOT] 💾 Saved 51 posted jobs to database
[2025-12-05T14:26:45.924Z] [BOT] ✅ Verified: Database file contains 51 jobs
[2025-12-05T14:26:48.925Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2025-12-05T14:26:48.925Z] [BOT] 📍 [ROUTING] "ATC Salesforce Analyst - Nashville" @ ORG_6cd9e83c
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-05T14:26:49.158Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🩺・healthcare-jobs
  ✅ Industry: ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c
[2025-12-05T14:26:50.857Z] [BOT] ✅ Created forum post: 🏢 ATC Salesforce Analyst - Nashville @ ORG_6cd9e83c in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T14:26:52.357Z] [BOT] 💾 BEFORE SAVE: Database has 52 jobs
[2025-12-05T14:26:52.358Z] [BOT] 💾 Saved 52 posted jobs to database
✅ Verified: Database file contains 52 jobs
[2025-12-05T14:26:52.359Z] [BOT] 📍 [ROUTING] "Post Doc LLM for Clinical Trials" @ ORG_3013b18f & Johnson
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-05T14:26:52.486Z] [BOT] ✅ Created forum post: 🏢 Post Doc LLM for Clinical Trials @ ORG_3013b18f & Johnson in #🩺・healthcare-jobs
[2025-12-05T14:26:52.486Z] [BOT] ✅ Industry: Post Doc LLM for Clinical Trials @ ORG_3013b18f & Johnson
[2025-12-05T14:26:54.158Z] [BOT] ✅ Created forum post: 🏢 Post Doc LLM for Clinical Trials @ ORG_3013b18f & Johnson in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:26:55.658Z] [BOT] 💾 BEFORE SAVE: Database has 53 jobs
[2025-12-05T14:26:55.659Z] [BOT] 💾 Saved 53 posted jobs to database
✅ Verified: Database file contains 53 jobs
[2025-12-05T14:26:58.660Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-05T14:26:58.660Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T14:26:58.818Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-05T14:26:58.818Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T14:27:00.628Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-05T14:27:00.628Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T14:27:02.128Z] [BOT] 💾 BEFORE SAVE: Database has 54 jobs
[2025-12-05T14:27:02.129Z] [BOT] 💾 Saved 54 posted jobs to database
[2025-12-05T14:27:02.129Z] [BOT] ✅ Verified: Database file contains 54 jobs
📍 [ROUTING] "Postdoctoral Researcher" @ ORG_478e100e University
[2025-12-05T14:27:02.129Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T14:27:02.305Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_478e100e University in #📁・JID_e938df7b
[2025-12-05T14:27:02.305Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_478e100e University
[2025-12-05T14:27:04.065Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:27:05.565Z] [BOT] 💾 BEFORE SAVE: Database has 55 jobs
[2025-12-05T14:27:05.567Z] [BOT] 💾 Saved 55 posted jobs to database
[2025-12-05T14:27:05.567Z] [BOT] ✅ Verified: Database file contains 55 jobs
[2025-12-05T14:27:08.568Z] [BOT] 🎉 Posting complete! Successfully posted: 21, Failed: 0
[2025-12-05T14:27:08.574Z] [BOT] ✅ Loaded pending queue: 164 total (114 pending, 50 enriched, 0 posted)
[2025-12-05T14:27:08.582Z] [BOT] ✅ Saved pending queue: 164 total (18 pending, 6 enriched, 140 posted)
[2025-12-05T14:27:08.583Z] [BOT] 📋 Updated queue: marked 140 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T14:27:08.619Z] [BOT] 📂 Loaded 34 existing routing entries
[2025-12-05T14:27:08.655Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 21
[2025-12-05T14:27:08.655Z] [BOT] Total entries: 55
   Timestamp: 2025-12-05T14:27:08.655Z
[2025-12-05T14:27:10.667Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4421) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*