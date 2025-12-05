# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T21:08:49.658Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 35
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T21:06:33.857Z] ========================================
[2025-12-05T21:06:33.859Z] Discord Bot Execution Log
[2025-12-05T21:06:33.859Z] Environment: GitHub Actions
[2025-12-05T21:06:33.860Z] Node Version: v20.19.6
[2025-12-05T21:06:33.860Z] ========================================
[2025-12-05T21:06:33.860Z] Environment Variables Check:
[2025-12-05T21:06:33.860Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T21:06:33.860Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.860Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T21:06:33.860Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T21:06:33.860Z] 
Multi-Channel Configuration:
[2025-12-05T21:06:33.860Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.860Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.860Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.860Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.861Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.861Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.861Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.861Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.861Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T21:06:33.861Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T21:06:33.861Z] 
Data Files Check:
[2025-12-05T21:06:33.866Z] .github/data/new_jobs.json: ✅ Exists (50 items, 651176 bytes)
[2025-12-05T21:06:33.866Z] .github/data/posted_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-05T21:06:33.866Z] 
========================================
[2025-12-05T21:06:33.866Z] Starting Enhanced Discord Bot...
[2025-12-05T21:06:33.866Z] ========================================
[2025-12-05T21:06:34.988Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T21:06:34.988Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T21:06:34.989Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T21:06:34.991Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T21:06:35.146Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 302
[2025-12-05T21:06:35.150Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T21:06:35.151Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T21:06:35.151Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:06:35.151Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:06:35.151Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:06:35.151Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:06:35.152Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 35 unique jobs to post
   (15 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 15 deferred for next run
[2025-12-05T21:06:35.152Z] [BOT] 📤 Posting 35 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T21:06:35.158Z] [BOT] 📌 Posting 3 jobs to #📁・JID_e938df7b
[2025-12-05T21:06:35.158Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst" @ ORG_81f16575ington Bancshares
[2025-12-05T21:06:35.158Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T21:06:35.163Z] [BOT ERROR] (node:4339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T21:06:35.323Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-05T21:06:35.323Z] [BOT] ✅ Industry: Technology Delivery Analyst @ ORG_81f16575ington Bancshares
[2025-12-05T21:06:36.997Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:06:38.498Z] [BOT] 💾 BEFORE SAVE: Database has 1 jobs
[2025-12-05T21:06:38.503Z] [BOT] 💾 Saved 1 posted jobs to database
✅ Verified: Database file contains 1 jobs
[2025-12-05T21:06:38.504Z] [BOT] 📍 [ROUTING] "Part-Time Research Support" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T21:06:38.680Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Part-Time Research Support @ ORG_478e100e University
[2025-12-05T21:06:40.433Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:06:41.934Z] [BOT] 💾 BEFORE SAVE: Database has 2 jobs
[2025-12-05T21:06:41.935Z] [BOT] 💾 Saved 2 posted jobs to database
[2025-12-05T21:06:41.935Z] [BOT] ✅ Verified: Database file contains 2 jobs
📍 [ROUTING] "Postdoc Research Associate-Computational Scientist" @ ORG_f7906b79 River National Laboratory
   Category: HR (matched: "benefits")
[2025-12-05T21:06:41.935Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T21:06:42.375Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory in #📁・JID_e938df7b
  ✅ Industry: Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory
[2025-12-05T21:06:44.041Z] [BOT] ✅ Created forum post: 🏢 Postdoc Research Associate-Computational Scientist @ ORG_f7906b79 River National Laboratory in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:06:45.541Z] [BOT] 💾 BEFORE SAVE: Database has 3 jobs
[2025-12-05T21:06:45.543Z] [BOT] 💾 Saved 3 posted jobs to database
✅ Verified: Database file contains 3 jobs
[2025-12-05T21:06:48.544Z] [BOT] 📌 Posting 29 jobs to #💻・tech-jobs
[2025-12-05T21:06:48.544Z] [BOT] 📍 [ROUTING] "Condition Monitoring Engineer" @ ORG_1640be31 Insight
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:06:48.823Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・tech-jobs
  ✅ Industry: Condition Monitoring Engineer @ ORG_1640be31 Insight
[2025-12-05T21:06:50.495Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:06:51.995Z] [BOT] 💾 BEFORE SAVE: Database has 4 jobs
[2025-12-05T21:06:51.996Z] [BOT] 💾 Saved 4 posted jobs to database
✅ Verified: Database file contains 4 jobs
[2025-12-05T21:06:51.996Z] [BOT] 📍 [ROUTING] "Enablement Operations Data Analyst - NYC" @ ORG_8bd7b9fd
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:06:52.210Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #💻・tech-jobs
  ✅ Industry: Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd
[2025-12-05T21:06:54.279Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T21:06:55.781Z] [BOT] 💾 BEFORE SAVE: Database has 5 jobs
[2025-12-05T21:06:55.782Z] [BOT] 💾 Saved 5 posted jobs to database
[2025-12-05T21:06:55.782Z] [BOT] ✅ Verified: Database file contains 5 jobs
[2025-12-05T21:06:55.782Z] [BOT] 📍 [ROUTING] "Data Science Leadership Development Program - Dsldp - Associate Data Scientist" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:06:56.030Z] [BOT] ✅ Created forum post: 🏢 Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Co in #💻・tech-jobs
  ✅ Industry: Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Companies
[2025-12-05T21:06:58.068Z] [BOT] ✅ Created forum post: 🏢 Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Co in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:06:59.569Z] [BOT] 💾 BEFORE SAVE: Database has 6 jobs
[2025-12-05T21:06:59.570Z] [BOT] 💾 Saved 6 posted jobs to database
✅ Verified: Database file contains 6 jobs
[2025-12-05T21:06:59.570Z] [BOT] 📍 [ROUTING] "New College Grad - Yield Analysis Engineer" @ ORG_23f4e0fc Technology
[2025-12-05T21:06:59.571Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:06:59.792Z] [BOT] ✅ Created forum post: 🏢 New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology in #💻・tech-jobs
  ✅ Industry: New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology
[2025-12-05T21:07:01.705Z] [BOT] ✅ Created forum post: 🏢 New College Grad - Yield Analysis Engineer @ ORG_23f4e0fc Technology in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:03.207Z] [BOT] 💾 BEFORE SAVE: Database has 7 jobs
[2025-12-05T21:07:03.208Z] [BOT] 💾 Saved 7 posted jobs to database
[2025-12-05T21:07:03.208Z] [BOT] ✅ Verified: Database file contains 7 jobs
[2025-12-05T21:07:03.208Z] [BOT] 📍 [ROUTING] "Verification Application Engineer" @ ORG_316d43c0 Design Systems
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:03.364Z] [BOT] ✅ Created forum post: 🏢 Verification Application Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
  ✅ Industry: Verification Application Engineer @ ORG_316d43c0 Design Systems
[2025-12-05T21:07:05.256Z] [BOT] ✅ Created forum post: 🏢 Verification Application Engineer @ ORG_316d43c0 Design Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:06.758Z] [BOT] 💾 BEFORE SAVE: Database has 8 jobs
[2025-12-05T21:07:06.759Z] [BOT] 💾 Saved 8 posted jobs to database
[2025-12-05T21:07:06.760Z] [BOT] ✅ Verified: Database file contains 8 jobs
📍 [ROUTING] "Associate Software Developer" @ ORG_7dcce8d0ine
[2025-12-05T21:07:06.760Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:06.939Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_7dcce8d0ine
[2025-12-05T21:07:08.991Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T21:07:10.493Z] [BOT] 💾 BEFORE SAVE: Database has 9 jobs
[2025-12-05T21:07:10.494Z] [BOT] 💾 Saved 9 posted jobs to database
[2025-12-05T21:07:10.494Z] [BOT] ✅ Verified: Database file contains 9 jobs
[2025-12-05T21:07:10.494Z] [BOT] 📍 [ROUTING] "IT Data Analyst - Power BI" @ ORG_7dcce8d0ine
   Category: TECH (matched: "data")
[2025-12-05T21:07:10.494Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:10.736Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #💻・tech-jobs
  ✅ Industry: IT Data Analyst - Power BI @ ORG_7dcce8d0ine
[2025-12-05T21:07:12.364Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T21:07:13.865Z] [BOT] 💾 BEFORE SAVE: Database has 10 jobs
[2025-12-05T21:07:13.867Z] [BOT] 💾 Saved 10 posted jobs to database
[2025-12-05T21:07:13.867Z] [BOT] ✅ Verified: Database file contains 10 jobs
📍 [ROUTING] "Research Engineer" @ ORG_f3e93c9b Automation
   Category: TECH (matched: "engineer/engineering")
[2025-12-05T21:07:13.867Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:14.071Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・tech-jobs
  ✅ Industry: Research Engineer @ ORG_f3e93c9b Automation
[2025-12-05T21:07:16.074Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:17.576Z] [BOT] 💾 BEFORE SAVE: Database has 11 jobs
[2025-12-05T21:07:17.577Z] [BOT] 💾 Saved 11 posted jobs to database
[2025-12-05T21:07:17.577Z] [BOT] ✅ Verified: Database file contains 11 jobs
[2025-12-05T21:07:17.577Z] [BOT] 📍 [ROUTING] "Audio Visual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
[2025-12-05T21:07:17.577Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:17.721Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Audio Visual Programmer @ ORG_b344d80e Boeing Company
[2025-12-05T21:07:19.528Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:21.029Z] [BOT] 💾 BEFORE SAVE: Database has 12 jobs
[2025-12-05T21:07:21.030Z] [BOT] 💾 Saved 12 posted jobs to database
[2025-12-05T21:07:21.031Z] [BOT] ✅ Verified: Database file contains 12 jobs
📍 [ROUTING] "Entry-Level Software Engineer - Secure Networks & Protocols" @ ORG_b344d80e Boeing Company
[2025-12-05T21:07:21.031Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:21.304Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company
[2025-12-05T21:07:22.970Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:24.471Z] [BOT] 💾 BEFORE SAVE: Database has 13 jobs
[2025-12-05T21:07:24.472Z] [BOT] 💾 Saved 13 posted jobs to database
[2025-12-05T21:07:24.472Z] [BOT] ✅ Verified: Database file contains 13 jobs
📍 [ROUTING] "AI Engineer" @ ORG_b415d82b
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:24.626Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_b415d82b in #💻・tech-jobs
  ✅ Industry: AI Engineer @ ORG_b415d82b
[2025-12-05T21:07:26.280Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_b415d82b in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T21:07:27.782Z] [BOT] 💾 BEFORE SAVE: Database has 14 jobs
[2025-12-05T21:07:27.783Z] [BOT] 💾 Saved 14 posted jobs to database
[2025-12-05T21:07:27.783Z] [BOT] ✅ Verified: Database file contains 14 jobs
📍 [ROUTING] "Audiovisual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
[2025-12-05T21:07:27.783Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:28.075Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Audiovisual Programmer @ ORG_b344d80e Boeing Company
[2025-12-05T21:07:29.737Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:31.239Z] [BOT] 💾 BEFORE SAVE: Database has 15 jobs
[2025-12-05T21:07:31.239Z] [BOT] 💾 Saved 15 posted jobs to database
[2025-12-05T21:07:31.240Z] [BOT] ✅ Verified: Database file contains 15 jobs
📍 [ROUTING] "Software Engineer 2 - Apps" @ ORG_d01167bb
[2025-12-05T21:07:31.240Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:31.478Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #💻・tech-jobs
[2025-12-05T21:07:31.478Z] [BOT] ✅ Industry: Software Engineer 2 - Apps @ ORG_d01167bb
[2025-12-05T21:07:33.109Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #🌉・san-francisco
[2025-12-05T21:07:33.109Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T21:07:34.609Z] [BOT] 💾 BEFORE SAVE: Database has 16 jobs
[2025-12-05T21:07:34.610Z] [BOT] 💾 Saved 16 posted jobs to database
[2025-12-05T21:07:34.610Z] [BOT] ✅ Verified: Database file contains 16 jobs
📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2025-12-05T21:07:34.610Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:35.108Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_afd623b1
[2025-12-05T21:07:36.989Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-05T21:07:38.490Z] [BOT] 💾 BEFORE SAVE: Database has 17 jobs
[2025-12-05T21:07:38.491Z] [BOT] 💾 Saved 17 posted jobs to database
[2025-12-05T21:07:38.491Z] [BOT] ✅ Verified: Database file contains 17 jobs
[2025-12-05T21:07:38.491Z] [BOT] 📍 [ROUTING] "Analytics/Dashboarding Analyst - Ada" @ ORG_434be781
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:38.916Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #💻・tech-jobs
  ✅ Industry: Analytics/Dashboarding Analyst - Ada @ ORG_434be781
[2025-12-05T21:07:40.588Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:42.090Z] [BOT] 💾 BEFORE SAVE: Database has 18 jobs
[2025-12-05T21:07:42.090Z] [BOT] 💾 Saved 18 posted jobs to database
✅ Verified: Database file contains 18 jobs
[2025-12-05T21:07:42.091Z] [BOT] 📍 [ROUTING] "Product and Service Development Engineer 1 - Entertainment" @ ORG_2f758176 Royce
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:42.254Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・tech-jobs
  ✅ Industry: Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce
[2025-12-05T21:07:43.903Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:45.404Z] [BOT] 💾 BEFORE SAVE: Database has 19 jobs
[2025-12-05T21:07:45.405Z] [BOT] 💾 Saved 19 posted jobs to database
[2025-12-05T21:07:45.405Z] [BOT] ✅ Verified: Database file contains 19 jobs
📍 [ROUTING] "Data Collections Specialist" @ ORG_0aa5052d State University (LSU)
[2025-12-05T21:07:45.406Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:45.632Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
[2025-12-05T21:07:45.632Z] [BOT] ✅ Industry: Data Collections Specialist @ ORG_0aa5052d State University (LSU)
[2025-12-05T21:07:47.326Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:07:48.825Z] [BOT] 💾 BEFORE SAVE: Database has 20 jobs
[2025-12-05T21:07:48.826Z] [BOT] 💾 Saved 20 posted jobs to database
[2025-12-05T21:07:48.826Z] [BOT] ✅ Verified: Database file contains 20 jobs
📍 [ROUTING] "Software Engineer 1" @ ORG_d6d2009d
   Category: TECH (matched: "software")
[2025-12-05T21:07:48.826Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:51.161Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_d6d2009d
[2025-12-05T21:07:52.932Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_d6d2009d in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T21:07:54.434Z] [BOT] 💾 BEFORE SAVE: Database has 21 jobs
[2025-12-05T21:07:54.435Z] [BOT] 💾 Saved 21 posted jobs to database
[2025-12-05T21:07:54.435Z] [BOT] ✅ Verified: Database file contains 21 jobs
📍 [ROUTING] "Data Science Analyst - Consumer Engagement" @ ORG_6bda74c9 Health
[2025-12-05T21:07:54.435Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:54.684Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health in #💻・tech-jobs
  ✅ Industry: Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health
[2025-12-05T21:07:56.361Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst - Consumer Engagement @ ORG_6bda74c9 Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-05T21:07:57.861Z] [BOT] 💾 BEFORE SAVE: Database has 22 jobs
[2025-12-05T21:07:57.863Z] [BOT] 💾 Saved 22 posted jobs to database
[2025-12-05T21:07:57.863Z] [BOT] ✅ Verified: Database file contains 22 jobs
📍 [ROUTING] "Business Data Analyst" @ ORG_05d2f9ea Electric
   Category: TECH (matched: "data")
[2025-12-05T21:07:57.863Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:58.035Z] [BOT] ✅ Created forum post: 🏢 Business Data Analyst @ ORG_05d2f9ea Electric in #💻・tech-jobs
  ✅ Industry: Business Data Analyst @ ORG_05d2f9ea Electric
[2025-12-05T21:07:59.536Z] [BOT] 💾 BEFORE SAVE: Database has 23 jobs
[2025-12-05T21:07:59.537Z] [BOT] 💾 Saved 23 posted jobs to database
✅ Verified: Database file contains 23 jobs
[2025-12-05T21:07:59.537Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_2ea541c5
   Category: TECH (matched: "data")
[2025-12-05T21:07:59.537Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:07:59.841Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #💻・tech-jobs
  ✅ Industry: Data Analyst @ ORG_2ea541c5
[2025-12-05T21:08:01.599Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_2ea541c5 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T21:08:03.101Z] [BOT] 💾 BEFORE SAVE: Database has 24 jobs
[2025-12-05T21:08:03.102Z] [BOT] 💾 Saved 24 posted jobs to database
[2025-12-05T21:08:03.102Z] [BOT] ✅ Verified: Database file contains 24 jobs
📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:03.364Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2025-12-05T21:08:05.012Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:08:06.513Z] [BOT] 💾 BEFORE SAVE: Database has 25 jobs
[2025-12-05T21:08:06.514Z] [BOT] 💾 Saved 25 posted jobs to database
[2025-12-05T21:08:06.514Z] [BOT] ✅ Verified: Database file contains 25 jobs
[2025-12-05T21:08:06.514Z] [BOT] 📍 [ROUTING] "Custom Application Engineer" @ ORG_cb844c98 Technologies
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:06.721Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・tech-jobs
  ✅ Industry: Custom Application Engineer @ ORG_cb844c98 Technologies
[2025-12-05T21:08:08.371Z] [BOT] ✅ Created forum post: 🏢 Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:08:09.872Z] [BOT] 💾 BEFORE SAVE: Database has 26 jobs
[2025-12-05T21:08:09.873Z] [BOT] 💾 Saved 26 posted jobs to database
✅ Verified: Database file contains 26 jobs
[2025-12-05T21:08:09.874Z] [BOT] 📍 [ROUTING] "Data Science Level 2 - Advanced AI - NLP" @ ORG_a6a32dbc
   Category: TECH (matched: "data")
[2025-12-05T21:08:09.874Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:10.025Z] [BOT] ✅ Created forum post: 🏢 Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #💻・tech-jobs
  ✅ Industry: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc
[2025-12-05T21:08:11.750Z] [BOT] ✅ Created forum post: 🏢 Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:08:13.251Z] [BOT] 💾 BEFORE SAVE: Database has 27 jobs
[2025-12-05T21:08:13.252Z] [BOT] 💾 Saved 27 posted jobs to database
[2025-12-05T21:08:13.252Z] [BOT] ✅ Verified: Database file contains 27 jobs
[2025-12-05T21:08:13.252Z] [BOT] 📍 [ROUTING] "Cryptoanalyst Level 2 - CCA allowed" @ ORG_a6a32dbc
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:13.684Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #💻・tech-jobs
  ✅ Industry: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc
[2025-12-05T21:08:15.790Z] [BOT] ✅ Created forum post: 🏢 Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:08:17.291Z] [BOT] 💾 BEFORE SAVE: Database has 28 jobs
[2025-12-05T21:08:17.293Z] [BOT] 💾 Saved 28 posted jobs to database
[2025-12-05T21:08:17.293Z] [BOT] ✅ Verified: Database file contains 28 jobs
📍 [ROUTING] "Revenue Integrity Data Analyst 1" @ ORG_9d38443e of Maryland Medical System
   Category: TECH (matched: "data")
[2025-12-05T21:08:17.293Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:17.438Z] [BOT] ✅ Created forum post: 🏢 Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System in #💻・tech-jobs
[2025-12-05T21:08:17.439Z] [BOT] ✅ Industry: Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System
[2025-12-05T21:08:19.109Z] [BOT] ✅ Created forum post: 🏢 Revenue Integrity Data Analyst 1 @ ORG_9d38443e of Maryland Medical System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:08:20.609Z] [BOT] 💾 BEFORE SAVE: Database has 29 jobs
[2025-12-05T21:08:20.610Z] [BOT] 💾 Saved 29 posted jobs to database
[2025-12-05T21:08:20.610Z] [BOT] ✅ Verified: Database file contains 29 jobs
📍 [ROUTING] "Software Engineer 1" @ ORG_655fad25
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:20.773Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_655fad25 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_655fad25
[2025-12-05T21:08:22.433Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_655fad25 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T21:08:23.934Z] [BOT] 💾 BEFORE SAVE: Database has 30 jobs
[2025-12-05T21:08:23.935Z] [BOT] 💾 Saved 30 posted jobs to database
[2025-12-05T21:08:23.935Z] [BOT] ✅ Verified: Database file contains 30 jobs
[2025-12-05T21:08:23.936Z] [BOT] 📍 [ROUTING] "Java Software Engineer 1" @ ORG_0fb6ee9c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:24.182Z] [BOT] ✅ Created forum post: 🏢 Java Software Engineer 1 @ ORG_0fb6ee9c in #💻・tech-jobs
  ✅ Industry: Java Software Engineer 1 @ ORG_0fb6ee9c
[2025-12-05T21:08:25.683Z] [BOT] 💾 BEFORE SAVE: Database has 31 jobs
[2025-12-05T21:08:25.684Z] [BOT] 💾 Saved 31 posted jobs to database
✅ Verified: Database file contains 31 jobs
[2025-12-05T21:08:25.685Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend - Platform" @ ORG_9ee5b96f
[2025-12-05T21:08:25.685Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T21:08:25.934Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #💻・tech-jobs
[2025-12-05T21:08:25.934Z] [BOT] ✅ Industry: Software Engineer - Backend - Platform @ ORG_9ee5b96f
[2025-12-05T21:08:27.633Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Backend - Platform @ ORG_9ee5b96f in #🌉・san-francisco
[2025-12-05T21:08:27.634Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-05T21:08:29.134Z] [BOT] 💾 BEFORE SAVE: Database has 32 jobs
[2025-12-05T21:08:29.135Z] [BOT] 💾 Saved 32 posted jobs to database
[2025-12-05T21:08:29.136Z] [BOT] ✅ Verified: Database file contains 32 jobs
[2025-12-05T21:08:32.136Z] [BOT] 📌 Posting 2 jobs to #📣・marketing-jobs
[2025-12-05T21:08:32.137Z] [BOT] 📍 [ROUTING] "Mining Application Specialist" @ ORG_85937e82 Inc.
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-05T21:08:32.418Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #📣・marketing-jobs
  ✅ Industry: Mining Application Specialist @ ORG_85937e82 Inc.
[2025-12-05T21:08:33.920Z] [BOT] 💾 BEFORE SAVE: Database has 33 jobs
[2025-12-05T21:08:33.921Z] [BOT] 💾 Saved 33 posted jobs to database
✅ Verified: Database file contains 33 jobs
[2025-12-05T21:08:33.922Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_865b30e2 Renewable Energy Laboratory
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-05T21:08:34.212Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #📣・marketing-jobs
[2025-12-05T21:08:34.212Z] [BOT] ✅ Industry: Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory
[2025-12-05T21:08:35.910Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_865b30e2 Renewable Energy Laboratory in #💻・remote-usa
[2025-12-05T21:08:35.910Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T21:08:37.411Z] [BOT] 💾 BEFORE SAVE: Database has 34 jobs
[2025-12-05T21:08:37.412Z] [BOT] 💾 Saved 34 posted jobs to database
[2025-12-05T21:08:37.412Z] [BOT] ✅ Verified: Database file contains 34 jobs
[2025-12-05T21:08:40.413Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-05T21:08:40.413Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_f6a2986e
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-05T21:08:40.634Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💲・sales-jobs
  ✅ Industry: Systems Analyst @ ORG_f6a2986e
[2025-12-05T21:08:42.359Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:08:43.860Z] [BOT] 💾 BEFORE SAVE: Database has 35 jobs
[2025-12-05T21:08:43.861Z] [BOT] 💾 Saved 35 posted jobs to database
[2025-12-05T21:08:43.861Z] [BOT] ✅ Verified: Database file contains 35 jobs
[2025-12-05T21:08:46.862Z] [BOT] 🎉 Posting complete! Successfully posted: 35, Failed: 0
[2025-12-05T21:08:46.869Z] [BOT] ✅ Loaded pending queue: 70 total (20 pending, 50 enriched, 0 posted)
[2025-12-05T21:08:46.876Z] [BOT] ✅ Saved pending queue: 70 total (19 pending, 8 enriched, 43 posted)
[2025-12-05T21:08:46.876Z] [BOT] 📋 Updated queue: marked 43 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T21:08:46.914Z] [BOT] 📂 Loaded 57 existing routing entries
[2025-12-05T21:08:46.951Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 35
   Total entries: 92
   Timestamp: 2025-12-05T21:08:46.950Z
[2025-12-05T21:08:48.965Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*