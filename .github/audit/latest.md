# Discord Bot Execution Audit
**Timestamp:** 2025-12-07T04:14:34.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 45
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-07T04:08:05.329Z] ========================================
[2025-12-07T04:08:05.331Z] Discord Bot Execution Log
[2025-12-07T04:08:05.331Z] Environment: GitHub Actions
[2025-12-07T04:08:05.331Z] Node Version: v20.19.6
[2025-12-07T04:08:05.331Z] ========================================
[2025-12-07T04:08:05.331Z] Environment Variables Check:
[2025-12-07T04:08:05.331Z] DISCORD_TOKEN: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-07T04:08:05.332Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-07T04:08:05.332Z] 
Multi-Channel Configuration:
[2025-12-07T04:08:05.332Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.332Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-07T04:08:05.333Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-07T04:08:05.333Z] 
Data Files Check:
[2025-12-07T04:08:05.338Z] .github/data/new_jobs.json: ✅ Exists (47 items, 664291 bytes)
[2025-12-07T04:08:05.338Z] .github/data/posted_jobs.json: ✅ Exists (0 items, 2 bytes)
[2025-12-07T04:08:05.338Z] 
========================================
[2025-12-07T04:08:05.338Z] Starting Enhanced Discord Bot...
[2025-12-07T04:08:05.338Z] ========================================
[2025-12-07T04:08:06.637Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-07T04:08:06.638Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-07T04:08:06.638Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-07T04:08:06.643Z] [BOT] 📦 Exporting 47 jobs to encrypted JSON...
[2025-12-07T04:08:06.794Z] [BOT] ✅ Export complete: Added 0, Skipped 47, Total 332
[2025-12-07T04:08:06.797Z] [BOT] 📬 Found 47 new jobs (0 already posted)...
[2025-12-07T04:08:06.798Z] [BOT] 📋 After blacklist filter: 47 jobs (0 blacklisted)
[2025-12-07T04:08:06.798Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
[2025-12-07T04:08:06.798Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
[2025-12-07T04:08:06.798Z] [BOT] 📋 After title+company+location dedup: 45 unique jobs to post
[2025-12-07T04:08:06.799Z] [BOT] (2 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 2 deferred for next run
📤 Posting 45 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-07T04:08:06.806Z] [BOT] 📌 Posting 21 jobs to #💻・tech-jobs
[2025-12-07T04:08:06.807Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_b344d80e Walt Disney Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:06.811Z] [BOT ERROR] (node:5229) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-07T04:08:07.070Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b344d80e Walt Disney Company in #💻・tech-jobs
[2025-12-07T04:08:07.070Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_b344d80e Walt Disney Company
[2025-12-07T04:08:08.806Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_b344d80e Walt Disney Company in #🌉・san-francisco
[2025-12-07T04:08:08.806Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-07T04:08:10.307Z] [BOT] 💾 BEFORE SAVE: Database has 1 jobs
[2025-12-07T04:08:10.313Z] [BOT] 💾 Saved 1 posted jobs to database
[2025-12-07T04:08:10.313Z] [BOT] ✅ Verified: Database file contains 1 jobs
📍 [ROUTING] "Software Engineer - Robotics" @ ORG_3db79629 Robotics
   Category: TECH (matched: "software")
[2025-12-07T04:08:10.313Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:10.655Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #💻・tech-jobs
[2025-12-07T04:08:10.655Z] [BOT] ✅ Industry: Software Engineer - Robotics @ ORG_3db79629 Robotics
[2025-12-07T04:08:12.383Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Robotics @ ORG_3db79629 Robotics in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T04:08:13.884Z] [BOT] 💾 BEFORE SAVE: Database has 2 jobs
[2025-12-07T04:08:13.885Z] [BOT] 💾 Saved 2 posted jobs to database
[2025-12-07T04:08:13.886Z] [BOT] ✅ Verified: Database file contains 2 jobs
📍 [ROUTING] "Software Engineer" @ ORG_a11413b0
   Category: TECH (matched: "software")
[2025-12-07T04:08:13.886Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:14.058Z] [BOT] ✅ Created forum post: 🔧 Software Engineer @ ORG_a11413b0 in #💻・tech-jobs
[2025-12-07T04:08:14.058Z] [BOT] ✅ Industry: Software Engineer @ ORG_a11413b0
[2025-12-07T04:08:15.745Z] [BOT] ✅ Created forum post: 🔧 Software Engineer @ ORG_a11413b0 in #🌉・san-francisco
[2025-12-07T04:08:15.745Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-07T04:08:17.246Z] [BOT] 💾 BEFORE SAVE: Database has 3 jobs
[2025-12-07T04:08:17.247Z] [BOT] 💾 Saved 3 posted jobs to database
[2025-12-07T04:08:17.247Z] [BOT] ✅ Verified: Database file contains 3 jobs
[2025-12-07T04:08:17.248Z] [BOT] 📍 [ROUTING] "Automation Software Engineer" @ ORG_0c79a9c2 Materials
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:17.490Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #💻・tech-jobs
[2025-12-07T04:08:17.490Z] [BOT] ✅ Industry: Automation Software Engineer @ ORG_0c79a9c2 Materials
[2025-12-07T04:08:19.305Z] [BOT] ✅ Created forum post: 🏢 Automation Software Engineer @ ORG_0c79a9c2 Materials in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-07T04:08:20.806Z] [BOT] 💾 BEFORE SAVE: Database has 4 jobs
[2025-12-07T04:08:20.807Z] [BOT] 💾 Saved 4 posted jobs to database
[2025-12-07T04:08:20.807Z] [BOT] ✅ Verified: Database file contains 4 jobs
📍 [ROUTING] "Analyst 1" @ ORG_742553d6 Entertainment
   Category: TECH (default)
[2025-12-07T04:08:20.807Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:21.016Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 @ ORG_742553d6 Entertainment in #💻・tech-jobs
  ✅ Industry: Analyst 1 @ ORG_742553d6 Entertainment
[2025-12-07T04:08:22.913Z] [BOT] ✅ Created forum post: 🏢 Analyst 1 @ ORG_742553d6 Entertainment in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:08:24.414Z] [BOT] 💾 BEFORE SAVE: Database has 5 jobs
[2025-12-07T04:08:24.415Z] [BOT] 💾 Saved 5 posted jobs to database
[2025-12-07T04:08:24.415Z] [BOT] ✅ Verified: Database file contains 5 jobs
📍 [ROUTING] "Entry Level Graphics Software Developer" @ ORG_d51736fa
[2025-12-07T04:08:24.415Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:24.626Z] [BOT] ✅ Created forum post: 🏢 Entry Level Graphics Software Developer @ ORG_d51736fa in #💻・tech-jobs
[2025-12-07T04:08:24.627Z] [BOT] ✅ Industry: Entry Level Graphics Software Developer @ ORG_d51736fa
[2025-12-07T04:08:26.321Z] [BOT] ✅ Created forum post: 🏢 Entry Level Graphics Software Developer @ ORG_d51736fa in #💻・remote-usa
[2025-12-07T04:08:26.322Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:08:27.822Z] [BOT] 💾 BEFORE SAVE: Database has 6 jobs
[2025-12-07T04:08:27.823Z] [BOT] 💾 Saved 6 posted jobs to database
✅ Verified: Database file contains 6 jobs
[2025-12-07T04:08:27.823Z] [BOT] 📍 [ROUTING] "Associate Full Stack Developer" @ ORG_8e152e21
   Category: TECH (matched: "software")
[2025-12-07T04:08:27.823Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:28.328Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Developer @ ORG_8e152e21 in #💻・tech-jobs
  ✅ Industry: Associate Full Stack Developer @ ORG_8e152e21
[2025-12-07T04:08:30.089Z] [BOT] ✅ Created forum post: 🏢 Associate Full Stack Developer @ ORG_8e152e21 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:08:31.590Z] [BOT] 💾 BEFORE SAVE: Database has 7 jobs
[2025-12-07T04:08:31.591Z] [BOT] 💾 Saved 7 posted jobs to database
[2025-12-07T04:08:31.591Z] [BOT] ✅ Verified: Database file contains 7 jobs
📍 [ROUTING] "AI Security Context Engineer" @ ORG_5d14f470
   Category: TECH (matched: "machine learning")
[2025-12-07T04:08:31.591Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:31.864Z] [BOT] ✅ Created forum post: 🏢 AI Security Context Engineer @ ORG_5d14f470 in #💻・tech-jobs
  ✅ Industry: AI Security Context Engineer @ ORG_5d14f470
[2025-12-07T04:08:33.365Z] [BOT] 💾 BEFORE SAVE: Database has 8 jobs
[2025-12-07T04:08:33.366Z] [BOT] 💾 Saved 8 posted jobs to database
[2025-12-07T04:08:33.366Z] [BOT] ✅ Verified: Database file contains 8 jobs
📍 [ROUTING] "Data Research Specialist" @ ORG_c47d21c6 Friends
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:33.607Z] [BOT] ✅ Created forum post: 🏢 Data Research Specialist @ ORG_c47d21c6 Friends in #💻・tech-jobs
  ✅ Industry: Data Research Specialist @ ORG_c47d21c6 Friends
[2025-12-07T04:08:35.324Z] [BOT] ✅ Created forum post: 🏢 Data Research Specialist @ ORG_c47d21c6 Friends in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:08:36.826Z] [BOT] 💾 BEFORE SAVE: Database has 9 jobs
[2025-12-07T04:08:36.827Z] [BOT] 💾 Saved 9 posted jobs to database
[2025-12-07T04:08:36.827Z] [BOT] ✅ Verified: Database file contains 9 jobs
📍 [ROUTING] "Provider Data Management Analyst 1" @ ORG_441f2234
   Category: TECH (matched: "data")
[2025-12-07T04:08:36.827Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:37.065Z] [BOT] ✅ Created forum post: 🏢 Provider Data Management Analyst 1 @ ORG_441f2234 in #💻・tech-jobs
  ✅ Industry: Provider Data Management Analyst 1 @ ORG_441f2234
[2025-12-07T04:08:38.745Z] [BOT] ✅ Created forum post: 🏢 Provider Data Management Analyst 1 @ ORG_441f2234 in #💻・remote-usa
[2025-12-07T04:08:38.745Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:08:40.246Z] [BOT] 💾 BEFORE SAVE: Database has 10 jobs
[2025-12-07T04:08:40.248Z] [BOT] 💾 Saved 10 posted jobs to database
[2025-12-07T04:08:40.248Z] [BOT] ✅ Verified: Database file contains 10 jobs
📍 [ROUTING] "Software Engineer - Performance and Observability" @ ORG_cc7e1d22
[2025-12-07T04:08:40.248Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:40.457Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Performance and Observability @ ORG_cc7e1d22 in #💻・tech-jobs
[2025-12-07T04:08:40.457Z] [BOT] ✅ Industry: Software Engineer - Performance and Observability @ ORG_cc7e1d22
[2025-12-07T04:08:44.098Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Performance and Observability @ ORG_cc7e1d22 in #🌉・san-francisco
[2025-12-07T04:08:44.098Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-07T04:08:45.599Z] [BOT] 💾 BEFORE SAVE: Database has 11 jobs
[2025-12-07T04:08:45.600Z] [BOT] 💾 Saved 11 posted jobs to database
[2025-12-07T04:08:45.600Z] [BOT] ✅ Verified: Database file contains 11 jobs
📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2025-12-07T04:08:45.600Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:45.821Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2025-12-07T04:08:47.650Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T04:08:49.151Z] [BOT] 💾 BEFORE SAVE: Database has 12 jobs
[2025-12-07T04:08:49.152Z] [BOT] 💾 Saved 12 posted jobs to database
✅ Verified: Database file contains 12 jobs
[2025-12-07T04:08:49.153Z] [BOT] 📍 [ROUTING] "Condition Monitoring Engineer" @ ORG_1640be31 Insight
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:49.314Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・tech-jobs
  ✅ Industry: Condition Monitoring Engineer @ ORG_1640be31 Insight
[2025-12-07T04:08:51.014Z] [BOT] ✅ Created forum post: 🏢 Condition Monitoring Engineer @ ORG_1640be31 Insight in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:08:52.515Z] [BOT] 💾 BEFORE SAVE: Database has 13 jobs
[2025-12-07T04:08:52.517Z] [BOT] 💾 Saved 13 posted jobs to database
[2025-12-07T04:08:52.517Z] [BOT] ✅ Verified: Database file contains 13 jobs
📍 [ROUTING] "Associate Software Developer" @ ORG_7dcce8d0ine
   Category: TECH (matched: "software")
[2025-12-07T04:08:52.517Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:52.702Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_7dcce8d0ine
[2025-12-07T04:08:54.476Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-07T04:08:55.976Z] [BOT] 💾 BEFORE SAVE: Database has 14 jobs
[2025-12-07T04:08:55.979Z] [BOT] 💾 Saved 14 posted jobs to database
✅ Verified: Database file contains 14 jobs
[2025-12-07T04:08:55.979Z] [BOT] 📍 [ROUTING] "Research Engineer" @ ORG_f3e93c9b Automation
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:56.228Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・tech-jobs
  ✅ Industry: Research Engineer @ ORG_f3e93c9b Automation
[2025-12-07T04:08:57.915Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:08:59.416Z] [BOT] 💾 BEFORE SAVE: Database has 15 jobs
[2025-12-07T04:08:59.417Z] [BOT] 💾 Saved 15 posted jobs to database
✅ Verified: Database file contains 15 jobs
[2025-12-07T04:08:59.417Z] [BOT] 📍 [ROUTING] "Audio Visual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
[2025-12-07T04:08:59.417Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:08:59.603Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2025-12-07T04:08:59.603Z] [BOT] ✅ Industry: Audio Visual Programmer @ ORG_b344d80e Boeing Company
[2025-12-07T04:09:01.605Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2025-12-07T04:09:01.605Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:09:03.106Z] [BOT] 💾 BEFORE SAVE: Database has 16 jobs
[2025-12-07T04:09:03.107Z] [BOT] 💾 Saved 16 posted jobs to database
[2025-12-07T04:09:03.107Z] [BOT] ✅ Verified: Database file contains 16 jobs
📍 [ROUTING] "Audiovisual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:09:03.323Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2025-12-07T04:09:03.323Z] [BOT] ✅ Industry: Audiovisual Programmer @ ORG_b344d80e Boeing Company
[2025-12-07T04:09:05.014Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2025-12-07T04:09:05.014Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:09:06.515Z] [BOT] 💾 BEFORE SAVE: Database has 17 jobs
[2025-12-07T04:09:06.516Z] [BOT] 💾 Saved 17 posted jobs to database
[2025-12-07T04:09:06.516Z] [BOT] ✅ Verified: Database file contains 17 jobs
[2025-12-07T04:09:06.516Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Apps" @ ORG_d01167bb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:09:06.715Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 - Apps @ ORG_d01167bb
[2025-12-07T04:09:08.416Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T04:09:09.917Z] [BOT] 💾 BEFORE SAVE: Database has 18 jobs
[2025-12-07T04:09:09.919Z] [BOT] 💾 Saved 18 posted jobs to database
[2025-12-07T04:09:09.919Z] [BOT] ✅ Verified: Database file contains 18 jobs
📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:09:10.098Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_afd623b1
[2025-12-07T04:09:11.759Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-07T04:09:13.259Z] [BOT] 💾 BEFORE SAVE: Database has 19 jobs
[2025-12-07T04:09:13.260Z] [BOT] 💾 Saved 19 posted jobs to database
[2025-12-07T04:09:13.260Z] [BOT] ✅ Verified: Database file contains 19 jobs
📍 [ROUTING] "Product and Service Development Engineer 1 - Entertainment" @ ORG_2f758176 Royce
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:09:13.529Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・tech-jobs
[2025-12-07T04:09:13.529Z] [BOT] ✅ Industry: Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce
[2025-12-07T04:09:15.355Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・remote-usa
[2025-12-07T04:09:15.356Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:09:16.857Z] [BOT] 💾 BEFORE SAVE: Database has 20 jobs
[2025-12-07T04:09:16.858Z] [BOT] 💾 Saved 20 posted jobs to database
[2025-12-07T04:09:16.858Z] [BOT] ✅ Verified: Database file contains 20 jobs
📍 [ROUTING] "Data Collections Specialist" @ ORG_0aa5052d State University (LSU)
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:09:17.077Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
  ✅ Industry: Data Collections Specialist @ ORG_0aa5052d State University (LSU)
[2025-12-07T04:09:18.907Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
[2025-12-07T04:09:18.907Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:09:20.408Z] [BOT] 💾 BEFORE SAVE: Database has 21 jobs
[2025-12-07T04:09:20.410Z] [BOT] 💾 Saved 21 posted jobs to database
✅ Verified: Database file contains 21 jobs
[2025-12-07T04:09:23.411Z] [BOT] 📌 Posting 11 jobs to #ai-jobs
[2025-12-07T04:09:23.411Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:09:23.679Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-07T04:09:25.356Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-07T04:09:26.857Z] [BOT] 💾 BEFORE SAVE: Database has 22 jobs
[2025-12-07T04:09:26.858Z] [BOT] 💾 Saved 22 posted jobs to database
[2025-12-07T04:09:26.858Z] [BOT] ✅ Verified: Database file contains 22 jobs
📍 [ROUTING] "Data Scientist - New College Grad" @ ORG_0c79a9c2 Materials
[2025-12-07T04:09:26.858Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:09:27.026Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #ai-jobs
  ✅ Industry: Data Scientist - New College Grad @ ORG_0c79a9c2 Materials
[2025-12-07T04:09:28.736Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - New College Grad @ ORG_0c79a9c2 Materials in #🌉・san-francisco
[2025-12-07T04:09:28.736Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-07T04:09:30.237Z] [BOT] 💾 BEFORE SAVE: Database has 23 jobs
[2025-12-07T04:09:30.238Z] [BOT] 💾 Saved 23 posted jobs to database
[2025-12-07T04:09:30.238Z] [BOT] ✅ Verified: Database file contains 23 jobs
📍 [ROUTING] "Senior – Data Scientist" @ ORG_3eab285c
   Category: AI (matched: "machine learning")
[2025-12-07T04:09:30.238Z] [BOT] Channel: ai-jobs (1446...1106)
[2025-12-07T04:09:30.437Z] [BOT] ✅ Created forum post: 🏢 Senior – Data Scientist @ ORG_3eab285c in #ai-jobs
[2025-12-07T04:09:30.437Z] [BOT] ✅ Industry: Senior – Data Scientist @ ORG_3eab285c
[2025-12-07T04:09:32.124Z] [BOT] ✅ Created forum post: 🏢 Senior – Data Scientist @ ORG_3eab285c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:09:33.625Z] [BOT] 💾 BEFORE SAVE: Database has 24 jobs
[2025-12-07T04:09:33.626Z] [BOT] 💾 Saved 24 posted jobs to database
[2025-12-07T04:09:33.626Z] [BOT] ✅ Verified: Database file contains 24 jobs
📍 [ROUTING] "Product Line Management Data Science" @ ORG_0c79a9c2 Materials
   Category: AI (matched: "machine learning")
[2025-12-07T04:09:33.626Z] [BOT] Channel: ai-jobs (1446...1106)
[2025-12-07T04:09:33.868Z] [BOT] ✅ Created forum post: 🏢 Product Line Management Data Science @ ORG_0c79a9c2 Materials in #ai-jobs
  ✅ Industry: Product Line Management Data Science @ ORG_0c79a9c2 Materials
[2025-12-07T04:09:35.554Z] [BOT] ✅ Created forum post: 🏢 Product Line Management Data Science @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T04:09:37.055Z] [BOT] 💾 BEFORE SAVE: Database has 25 jobs
[2025-12-07T04:09:37.057Z] [BOT] 💾 Saved 25 posted jobs to database
[2025-12-07T04:09:37.057Z] [BOT] ✅ Verified: Database file contains 25 jobs
📍 [ROUTING] "Technology Development Program - Data Scientist" @ Dick's Sporting Goods
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:09:37.516Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program - Data Scientist @ Dick's Sporting Goods in #ai-jobs
  ✅ Industry: Technology Development Program - Data Scientist @ Dick's Sporting Goods
[2025-12-07T04:13:07.378Z] [BOT] ✅ Created forum post: 🏢 Technology Development Program - Data Scientist @ Dick's Sporting Goods in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:13:08.879Z] [BOT] 💾 BEFORE SAVE: Database has 26 jobs
[2025-12-07T04:13:08.880Z] [BOT] 💾 Saved 26 posted jobs to database
[2025-12-07T04:13:08.880Z] [BOT] ✅ Verified: Database file contains 26 jobs
📍 [ROUTING] "Turkish Language Specialist" @ ORG_188e5bb8
   Category: AI (matched: "artificial intelligence")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:13:09.026Z] [BOT] ✅ Created forum post: 🏢 Turkish Language Specialist @ ORG_188e5bb8 in #ai-jobs
[2025-12-07T04:13:09.026Z] [BOT] ✅ Industry: Turkish Language Specialist @ ORG_188e5bb8
[2025-12-07T04:13:10.526Z] [BOT] 💾 BEFORE SAVE: Database has 27 jobs
[2025-12-07T04:13:10.527Z] [BOT] 💾 Saved 27 posted jobs to database
[2025-12-07T04:13:10.528Z] [BOT] ✅ Verified: Database file contains 27 jobs
📍 [ROUTING] "Mission Integration Engineer - Applied Computing - Starshield" @ ORG_afd623b1
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:13:10.709Z] [BOT] ✅ Created forum post: 🚀 Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #ai-jobs
[2025-12-07T04:13:10.709Z] [BOT] ✅ Industry: Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1
[2025-12-07T04:13:12.425Z] [BOT] ✅ Created forum post: 🚀 Mission Integration Engineer - Applied Computing - Starshield @ ORG_afd623b1 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T04:13:13.926Z] [BOT] 💾 BEFORE SAVE: Database has 28 jobs
[2025-12-07T04:13:13.927Z] [BOT] 💾 Saved 28 posted jobs to database
✅ Verified: Database file contains 28 jobs
[2025-12-07T04:13:13.927Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:13:14.115Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #ai-jobs
[2025-12-07T04:13:14.115Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-12-07T04:13:15.853Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
[2025-12-07T04:13:15.853Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-07T04:13:17.353Z] [BOT] 💾 BEFORE SAVE: Database has 29 jobs
[2025-12-07T04:13:17.354Z] [BOT] 💾 Saved 29 posted jobs to database
✅ Verified: Database file contains 29 jobs
[2025-12-07T04:13:17.354Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - 2026" @ ORG_f09f149f
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:13:17.639Z] [BOT] ✅ Created forum post: 🎬 New Grad Software Engineer - 2026 @ ORG_f09f149f in #ai-jobs
  ✅ Industry: New Grad Software Engineer - 2026 @ ORG_f09f149f
[2025-12-07T04:13:19.399Z] [BOT] ✅ Created forum post: 🎬 New Grad Software Engineer - 2026 @ ORG_f09f149f in #🌉・san-francisco
[2025-12-07T04:13:19.400Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-07T04:13:20.899Z] [BOT] 💾 BEFORE SAVE: Database has 30 jobs
[2025-12-07T04:13:20.901Z] [BOT] 💾 Saved 30 posted jobs to database
✅ Verified: Database file contains 30 jobs
[2025-12-07T04:13:20.901Z] [BOT] 📍 [ROUTING] "Data Science Leadership Development Program - Dsldp - Associate Data Scientist" @ ORG_b344d80e Travelers Companies
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:13:21.194Z] [BOT] ✅ Created forum post: 🏢 Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Co in #ai-jobs
[2025-12-07T04:13:21.194Z] [BOT] ✅ Industry: Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Companies
[2025-12-07T04:13:23.037Z] [BOT] ✅ Created forum post: 🏢 Data Science Leadership Development Program - Dsldp - Associate Data Scientist @ ORG_b344d80e Travelers Co in #💻・remote-usa
[2025-12-07T04:13:23.038Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:13:24.537Z] [BOT] 💾 BEFORE SAVE: Database has 31 jobs
[2025-12-07T04:13:24.539Z] [BOT] 💾 Saved 31 posted jobs to database
✅ Verified: Database file contains 31 jobs
[2025-12-07T04:13:24.539Z] [BOT] 📍 [ROUTING] "Verification Application Engineer" @ ORG_316d43c0 Design Systems
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1446...1106)
[2025-12-07T04:13:24.735Z] [BOT] ✅ Created forum post: 🏢 Verification Application Engineer @ ORG_316d43c0 Design Systems in #ai-jobs
  ✅ Industry: Verification Application Engineer @ ORG_316d43c0 Design Systems
[2025-12-07T04:13:26.480Z] [BOT] ✅ Created forum post: 🏢 Verification Application Engineer @ ORG_316d43c0 Design Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:13:27.981Z] [BOT] 💾 BEFORE SAVE: Database has 32 jobs
[2025-12-07T04:13:27.983Z] [BOT] 💾 Saved 32 posted jobs to database
[2025-12-07T04:13:27.983Z] [BOT] ✅ Verified: Database file contains 32 jobs
[2025-12-07T04:13:30.983Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2025-12-07T04:13:30.983Z] [BOT] 📍 [ROUTING] "Full-Time" @ ORG_75f04b84
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-07T04:13:31.217Z] [BOT] ✅ Created forum post: 🏢 Full-Time @ ORG_75f04b84 in #🩺・healthcare-jobs
[2025-12-07T04:13:31.217Z] [BOT] ✅ Industry: Full-Time @ ORG_75f04b84
[2025-12-07T04:13:32.938Z] [BOT] ✅ Created forum post: 🏢 Full-Time @ ORG_75f04b84 in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-07T04:13:34.439Z] [BOT] 💾 BEFORE SAVE: Database has 33 jobs
[2025-12-07T04:13:34.440Z] [BOT] 💾 Saved 33 posted jobs to database
✅ Verified: Database file contains 33 jobs
[2025-12-07T04:13:34.440Z] [BOT] 📍 [ROUTING] "Atmospheric Scientist – Associate or Mid-Level" @ ORG_b344d80e Boeing Company
[2025-12-07T04:13:34.440Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-07T04:13:34.829Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #🩺・healthcare-jobs
[2025-12-07T04:13:34.830Z] [BOT] ✅ Industry: Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company
[2025-12-07T04:13:36.633Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2025-12-07T04:13:36.633Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:13:38.134Z] [BOT] 💾 BEFORE SAVE: Database has 34 jobs
[2025-12-07T04:13:38.135Z] [BOT] 💾 Saved 34 posted jobs to database
[2025-12-07T04:13:38.135Z] [BOT] ✅ Verified: Database file contains 34 jobs
[2025-12-07T04:13:41.136Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-07T04:13:41.136Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - Molten Salt Technology" @ ORG_a867f63f National Laboratory
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-07T04:13:41.466Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Molten Salt Technology @ ORG_a867f63f National Laboratory in #📁・JID_e938df7b
[2025-12-07T04:13:41.466Z] [BOT] ✅ Industry: Postdoctoral Appointee - Molten Salt Technology @ ORG_a867f63f National Laboratory
[2025-12-07T04:13:43.295Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - Molten Salt Technology @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-12-07T04:13:43.295Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-07T04:13:44.796Z] [BOT] 💾 BEFORE SAVE: Database has 35 jobs
[2025-12-07T04:13:44.797Z] [BOT] 💾 Saved 35 posted jobs to database
[2025-12-07T04:13:44.797Z] [BOT] ✅ Verified: Database file contains 35 jobs
📍 [ROUTING] "Part-Time Research Support" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-07T04:13:45.008Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Part-Time Research Support @ ORG_478e100e University
[2025-12-07T04:13:46.838Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #💻・remote-usa
[2025-12-07T04:13:46.838Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-07T04:13:48.339Z] [BOT] 💾 BEFORE SAVE: Database has 36 jobs
[2025-12-07T04:13:48.340Z] [BOT] 💾 Saved 36 posted jobs to database
[2025-12-07T04:13:48.340Z] [BOT] ✅ Verified: Database file contains 36 jobs
[2025-12-07T04:13:51.340Z] [BOT] 📌 Posting 7 jobs to #JID_fb739488
[2025-12-07T04:13:51.340Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_2be898eb Dickinson
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:13:51.596Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_2be898eb Dickinson in #JID_fb739488
  ✅ Industry: Data Analyst 1 @ ORG_2be898eb Dickinson
[2025-12-07T04:13:53.287Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_2be898eb Dickinson in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T04:13:54.787Z] [BOT] 💾 BEFORE SAVE: Database has 37 jobs
[2025-12-07T04:13:54.788Z] [BOT] 💾 Saved 37 posted jobs to database
✅ Verified: Database file contains 37 jobs
[2025-12-07T04:13:54.789Z] [BOT] 📍 [ROUTING] "Data Scientist 1 - Real World Data Science" @ ORG_24068d9f
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:13:55.008Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 - Real World Data Science @ ORG_24068d9f in #JID_fb739488
  ✅ Industry: Data Scientist 1 - Real World Data Science @ ORG_24068d9f
[2025-12-07T04:13:56.716Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 - Real World Data Science @ ORG_24068d9f in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-07T04:13:58.216Z] [BOT] 💾 BEFORE SAVE: Database has 38 jobs
[2025-12-07T04:13:58.217Z] [BOT] 💾 Saved 38 posted jobs to database
[2025-12-07T04:13:58.218Z] [BOT] ✅ Verified: Database file contains 38 jobs
📍 [ROUTING] "Linux System Administrator" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:13:58.463Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_b344d80e Boeing Company in #JID_fb739488
[2025-12-07T04:13:58.463Z] [BOT] ✅ Industry: Linux System Administrator @ ORG_b344d80e Boeing Company
[2025-12-07T04:14:00.199Z] [BOT] ✅ Created forum post: 🏢 Linux System Administrator @ ORG_b344d80e Boeing Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-07T04:14:01.699Z] [BOT] 💾 BEFORE SAVE: Database has 39 jobs
[2025-12-07T04:14:01.700Z] [BOT] 💾 Saved 39 posted jobs to database
[2025-12-07T04:14:01.700Z] [BOT] ✅ Verified: Database file contains 39 jobs
📍 [ROUTING] "Enablement Operations Data Analyst - NYC" @ ORG_8bd7b9fd
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:14:01.913Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #JID_fb739488
[2025-12-07T04:14:01.914Z] [BOT] ✅ Industry: Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd
[2025-12-07T04:14:03.595Z] [BOT] ✅ Created forum post: 🏢 Enablement Operations Data Analyst - NYC @ ORG_8bd7b9fd in #🗽・new-york
[2025-12-07T04:14:03.595Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-07T04:14:05.096Z] [BOT] 💾 BEFORE SAVE: Database has 40 jobs
[2025-12-07T04:14:05.097Z] [BOT] 💾 Saved 40 posted jobs to database
[2025-12-07T04:14:05.097Z] [BOT] ✅ Verified: Database file contains 40 jobs
📍 [ROUTING] "IT Data Analyst - Power BI" @ ORG_7dcce8d0ine
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-07T04:14:05.097Z] [BOT] Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:14:05.389Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #JID_fb739488
[2025-12-07T04:14:05.389Z] [BOT] ✅ Industry: IT Data Analyst - Power BI @ ORG_7dcce8d0ine
[2025-12-07T04:14:07.174Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #🌆・chicago
[2025-12-07T04:14:07.175Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-07T04:14:08.675Z] [BOT] 💾 BEFORE SAVE: Database has 41 jobs
[2025-12-07T04:14:08.677Z] [BOT] 💾 Saved 41 posted jobs to database
✅ Verified: Database file contains 41 jobs
[2025-12-07T04:14:08.677Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer - Secure Networks & Protocols" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:14:08.838Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #JID_fb739488
[2025-12-07T04:14:08.838Z] [BOT] ✅ Industry: Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company
[2025-12-07T04:14:10.552Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:14:12.052Z] [BOT] 💾 BEFORE SAVE: Database has 42 jobs
[2025-12-07T04:14:12.053Z] [BOT] 💾 Saved 42 posted jobs to database
✅ Verified: Database file contains 42 jobs
[2025-12-07T04:14:12.053Z] [BOT] 📍 [ROUTING] "Analytics/Dashboarding Analyst - Ada" @ ORG_434be781
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:14:12.428Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #JID_fb739488
  ✅ Industry: Analytics/Dashboarding Analyst - Ada @ ORG_434be781
[2025-12-07T04:14:14.217Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:14:15.717Z] [BOT] 💾 BEFORE SAVE: Database has 43 jobs
[2025-12-07T04:14:15.718Z] [BOT] 💾 Saved 43 posted jobs to database
✅ Verified: Database file contains 43 jobs
[2025-12-07T04:14:18.717Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-07T04:14:18.718Z] [BOT] 📍 [ROUTING] "Mining Application Specialist" @ ORG_85937e82 Inc.
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-07T04:14:18.984Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #📣・marketing-jobs
  ✅ Industry: Mining Application Specialist @ ORG_85937e82 Inc.
[2025-12-07T04:14:20.484Z] [BOT] 💾 BEFORE SAVE: Database has 44 jobs
[2025-12-07T04:14:20.485Z] [BOT] 💾 Saved 44 posted jobs to database
[2025-12-07T04:14:20.486Z] [BOT] ✅ Verified: Database file contains 44 jobs
[2025-12-07T04:14:23.487Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-07T04:14:23.487Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_f6a2986e
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-07T04:14:23.760Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💲・sales-jobs
  ✅ Industry: Systems Analyst @ ORG_f6a2986e
[2025-12-07T04:14:26.690Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-07T04:14:28.191Z] [BOT] 💾 BEFORE SAVE: Database has 45 jobs
[2025-12-07T04:14:28.192Z] [BOT] 💾 Saved 45 posted jobs to database
✅ Verified: Database file contains 45 jobs
[2025-12-07T04:14:31.192Z] [BOT] 🎉 Posting complete! Successfully posted: 45, Failed: 0
[2025-12-07T04:14:31.197Z] [BOT] ✅ Loaded pending queue: 47 total (0 pending, 47 enriched, 0 posted)
[2025-12-07T04:14:31.204Z] [BOT] ✅ Saved pending queue: 47 total (0 pending, 2 enriched, 45 posted)
[2025-12-07T04:14:31.204Z] [BOT] 📋 Updated queue: marked 45 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-07T04:14:31.240Z] [BOT] 📂 Loaded 189 existing routing entries
[2025-12-07T04:14:31.277Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 45
   Total entries: 234
   Timestamp: 2025-12-07T04:14:31.276Z
[2025-12-07T04:14:33.288Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:5229) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*