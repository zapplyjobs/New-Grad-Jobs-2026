# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T14:07:36.500Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 16
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T14:06:25.612Z] ========================================
[2025-12-05T14:06:25.614Z] Discord Bot Execution Log
[2025-12-05T14:06:25.614Z] Environment: GitHub Actions
[2025-12-05T14:06:25.614Z] Node Version: v20.19.6
[2025-12-05T14:06:25.614Z] ========================================
[2025-12-05T14:06:25.615Z] Environment Variables Check:
[2025-12-05T14:06:25.615Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T14:06:25.615Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.615Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T14:06:25.615Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T14:06:25.615Z] 
Multi-Channel Configuration:
[2025-12-05T14:06:25.615Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.615Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.615Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.615Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.615Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.616Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.616Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.616Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.616Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T14:06:25.616Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T14:06:25.616Z] 
Data Files Check:
[2025-12-05T14:06:25.621Z] .github/data/new_jobs.json: ✅ Exists (50 items, 677865 bytes)
[2025-12-05T14:06:25.621Z] .github/data/posted_jobs.json: ✅ Exists (18 items, 1383 bytes)
[2025-12-05T14:06:25.621Z] 
========================================
[2025-12-05T14:06:25.621Z] Starting Enhanced Discord Bot...
[2025-12-05T14:06:25.621Z] ========================================
[2025-12-05T14:06:26.898Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T14:06:26.898Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T14:06:26.899Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T14:06:26.901Z] [BOT] 📦 Exporting 50 jobs to encrypted JSON...
[2025-12-05T14:06:27.033Z] [BOT] ✅ Export complete: Added 0, Skipped 50, Total 250
[2025-12-05T14:06:27.036Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2025-12-05T14:06:27.037Z] [BOT] 📋 After blacklist filter: 50 jobs (0 blacklisted)
[2025-12-05T14:06:27.037Z] [BOT] ⏭️ Skipping duplicate title+company+location: Systems Analyst at CAI, Orlando (already posting one with this combination)
[2025-12-05T14:06:27.037Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 2 - Apps at AeroVironment, Moorpark (already posting one with this combination)
[2025-12-05T14:06:27.037Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer at SpaceX, McGregor (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Analytics/Dashboarding Analyst - Ada at Parsons, McLean (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Product and Service Development Engineer 1 - Entertainment at Rolls Royce, Paramus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Collections Specialist at Louisiana State University (LSU), Alexandria (already posting one with this combination)
[2025-12-05T14:06:27.037Z] [BOT] ⏭️ Skipping duplicate title+company+location: Associate Software Developer at Uline, Waukegan (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: IT Data Analyst - Power BI at Uline, Waukegan (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Research Engineer at Rockwell Automation, Mayfield Heights (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Audio Visual Programmer at The Boeing Company, Reston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry-Level Software Engineer - Secure Networks & Protocols at The Boeing Company, Oklahoma City (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: AI Engineer at Guidewire, San Mateo (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Audiovisual Programmer at The Boeing Company, Reston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Part-Time Research Support at PennState University, State College (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Systems Analyst at CAI, Orlando (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 2 - Apps at AeroVironment, Moorpark (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer at SpaceX, McGregor (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Analytics/Dashboarding Analyst - Ada at Parsons, McLean (already posting one with this combination)
[2025-12-05T14:06:27.038Z] [BOT] ⏭️ Skipping duplicate title+company+location: Product and Service Development Engineer 1 - Entertainment at Rolls Royce, Paramus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Collections Specialist at Louisiana State University (LSU), Alexandria (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Associate Software Developer at Uline, Waukegan (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: IT Data Analyst - Power BI at Uline, Waukegan (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Research Engineer at Rockwell Automation, Mayfield Heights (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Audio Visual Programmer at The Boeing Company, Reston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Entry-Level Software Engineer - Secure Networks & Protocols at The Boeing Company, Oklahoma City (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: AI Engineer at Guidewire, San Mateo (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Audiovisual Programmer at The Boeing Company, Reston (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Part-Time Research Support at PennState University, State College (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Systems Analyst at CAI, Orlando (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 2 - Apps at AeroVironment, Moorpark (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer at SpaceX, McGregor (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Analytics/Dashboarding Analyst - Ada at Parsons, McLean (already posting one with this combination)
[2025-12-05T14:06:27.038Z] [BOT] ⏭️ Skipping duplicate title+company+location: Product and Service Development Engineer 1 - Entertainment at Rolls Royce, Paramus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Data Collections Specialist at Louisiana State University (LSU), Alexandria (already posting one with this combination)
📋 After title+company+location dedup: 16 unique jobs to post
   (34 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 34 deferred for next run
📤 Posting 16 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T14:06:27.043Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-05T14:06:27.043Z] [BOT] 📍 [ROUTING] "Systems Analyst" @ ORG_f6a2986e
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-05T14:06:27.049Z] [BOT ERROR] (node:3553) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T14:06:27.307Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💲・sales-jobs
[2025-12-05T14:06:27.308Z] [BOT] ✅ Industry: Systems Analyst @ ORG_f6a2986e
[2025-12-05T14:06:29.112Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst @ ORG_f6a2986e in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:06:30.613Z] [BOT] 💾 BEFORE SAVE: Database has 19 jobs
[2025-12-05T14:06:30.617Z] [BOT] 💾 Saved 19 posted jobs to database
[2025-12-05T14:06:30.617Z] [BOT] ✅ Verified: Database file contains 19 jobs
[2025-12-05T14:06:33.618Z] [BOT] 📌 Posting 13 jobs to #💻・tech-jobs
[2025-12-05T14:06:33.618Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - Apps" @ ORG_d01167bb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:33.872Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 - Apps @ ORG_d01167bb
[2025-12-05T14:06:35.609Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 2 - Apps @ ORG_d01167bb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T14:06:37.109Z] [BOT] 💾 BEFORE SAVE: Database has 20 jobs
[2025-12-05T14:06:37.110Z] [BOT] 💾 Saved 20 posted jobs to database
[2025-12-05T14:06:37.110Z] [BOT] ✅ Verified: Database file contains 20 jobs
📍 [ROUTING] "Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2025-12-05T14:06:37.111Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:37.415Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_afd623b1
[2025-12-05T14:06:39.098Z] [BOT] ✅ Created forum post: 🚀 Software Engineer @ ORG_afd623b1 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-05T14:06:40.598Z] [BOT] 💾 BEFORE SAVE: Database has 21 jobs
[2025-12-05T14:06:40.599Z] [BOT] 💾 Saved 21 posted jobs to database
[2025-12-05T14:06:40.599Z] [BOT] ✅ Verified: Database file contains 21 jobs
📍 [ROUTING] "Analytics/Dashboarding Analyst - Ada" @ ORG_434be781
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:41.020Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #💻・tech-jobs
  ✅ Industry: Analytics/Dashboarding Analyst - Ada @ ORG_434be781
[2025-12-05T14:06:42.681Z] [BOT] ✅ Created forum post: 🏢 Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:06:44.182Z] [BOT] 💾 BEFORE SAVE: Database has 22 jobs
[2025-12-05T14:06:44.183Z] [BOT] 💾 Saved 22 posted jobs to database
[2025-12-05T14:06:44.183Z] [BOT] ✅ Verified: Database file contains 22 jobs
📍 [ROUTING] "Product and Service Development Engineer 1 - Entertainment" @ ORG_2f758176 Royce
[2025-12-05T14:06:44.184Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:44.607Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・tech-jobs
[2025-12-05T14:06:44.607Z] [BOT] ✅ Industry: Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce
[2025-12-05T14:06:46.309Z] [BOT] ✅ Created forum post: 🏢 Product and Service Development Engineer 1 - Entertainment @ ORG_2f758176 Royce in #💻・remote-usa
[2025-12-05T14:06:46.310Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T14:06:47.811Z] [BOT] 💾 BEFORE SAVE: Database has 23 jobs
[2025-12-05T14:06:47.812Z] [BOT] 💾 Saved 23 posted jobs to database
[2025-12-05T14:06:47.812Z] [BOT] ✅ Verified: Database file contains 23 jobs
📍 [ROUTING] "Data Collections Specialist" @ ORG_0aa5052d State University (LSU)
   Category: TECH (matched: "data")
[2025-12-05T14:06:47.812Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:48.007Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
  ✅ Industry: Data Collections Specialist @ ORG_0aa5052d State University (LSU)
[2025-12-05T14:06:49.773Z] [BOT] ✅ Created forum post: 🏢 Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・remote-usa
[2025-12-05T14:06:49.773Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T14:06:51.274Z] [BOT] 💾 BEFORE SAVE: Database has 24 jobs
[2025-12-05T14:06:51.275Z] [BOT] 💾 Saved 24 posted jobs to database
[2025-12-05T14:06:51.275Z] [BOT] ✅ Verified: Database file contains 24 jobs
📍 [ROUTING] "Associate Software Developer" @ ORG_7dcce8d0ine
   Category: TECH (matched: "software")
[2025-12-05T14:06:51.275Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:51.442Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_7dcce8d0ine
[2025-12-05T14:06:53.139Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T14:06:54.639Z] [BOT] 💾 BEFORE SAVE: Database has 25 jobs
[2025-12-05T14:06:54.640Z] [BOT] 💾 Saved 25 posted jobs to database
[2025-12-05T14:06:54.640Z] [BOT] ✅ Verified: Database file contains 25 jobs
📍 [ROUTING] "IT Data Analyst - Power BI" @ ORG_7dcce8d0ine
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:54.885Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #💻・tech-jobs
  ✅ Industry: IT Data Analyst - Power BI @ ORG_7dcce8d0ine
[2025-12-05T14:06:56.572Z] [BOT] ✅ Created forum post: 🏢 IT Data Analyst - Power BI @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-05T14:06:58.073Z] [BOT] 💾 BEFORE SAVE: Database has 26 jobs
[2025-12-05T14:06:58.075Z] [BOT] 💾 Saved 26 posted jobs to database
[2025-12-05T14:06:58.075Z] [BOT] ✅ Verified: Database file contains 26 jobs
📍 [ROUTING] "Research Engineer" @ ORG_f3e93c9b Automation
   Category: TECH (matched: "engineer/engineering")
[2025-12-05T14:06:58.075Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:06:58.330Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・tech-jobs
  ✅ Industry: Research Engineer @ ORG_f3e93c9b Automation
[2025-12-05T14:07:00.027Z] [BOT] ✅ Created forum post: 🏢 Research Engineer @ ORG_f3e93c9b Automation in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:07:01.529Z] [BOT] 💾 BEFORE SAVE: Database has 27 jobs
[2025-12-05T14:07:01.530Z] [BOT] 💾 Saved 27 posted jobs to database
✅ Verified: Database file contains 27 jobs
[2025-12-05T14:07:01.530Z] [BOT] 📍 [ROUTING] "Audio Visual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:07:01.724Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
[2025-12-05T14:07:01.724Z] [BOT] ✅ Industry: Audio Visual Programmer @ ORG_b344d80e Boeing Company
[2025-12-05T14:07:03.439Z] [BOT] ✅ Created forum post: 🏢 Audio Visual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:07:04.940Z] [BOT] 💾 BEFORE SAVE: Database has 28 jobs
[2025-12-05T14:07:04.941Z] [BOT] 💾 Saved 28 posted jobs to database
✅ Verified: Database file contains 28 jobs
[2025-12-05T14:07:04.941Z] [BOT] 📍 [ROUTING] "Entry-Level Software Engineer - Secure Networks & Protocols" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
[2025-12-05T14:07:04.941Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:07:05.214Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company
[2025-12-05T14:07:06.999Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Software Engineer - Secure Networks & Protocols @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:07:08.499Z] [BOT] 💾 BEFORE SAVE: Database has 29 jobs
[2025-12-05T14:07:08.500Z] [BOT] 💾 Saved 29 posted jobs to database
[2025-12-05T14:07:08.500Z] [BOT] ✅ Verified: Database file contains 29 jobs
[2025-12-05T14:07:08.500Z] [BOT] 📍 [ROUTING] "AI Engineer" @ ORG_b415d82b
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:07:08.884Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_b415d82b in #💻・tech-jobs
  ✅ Industry: AI Engineer @ ORG_b415d82b
[2025-12-05T14:07:10.579Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_b415d82b in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-05T14:07:12.081Z] [BOT] 💾 BEFORE SAVE: Database has 30 jobs
[2025-12-05T14:07:12.082Z] [BOT] 💾 Saved 30 posted jobs to database
✅ Verified: Database file contains 30 jobs
[2025-12-05T14:07:12.082Z] [BOT] 📍 [ROUTING] "Audiovisual Programmer" @ ORG_b344d80e Boeing Company
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:07:12.286Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・tech-jobs
  ✅ Industry: Audiovisual Programmer @ ORG_b344d80e Boeing Company
[2025-12-05T14:07:13.951Z] [BOT] ✅ Created forum post: 🏢 Audiovisual Programmer @ ORG_b344d80e Boeing Company in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:07:15.452Z] [BOT] 💾 BEFORE SAVE: Database has 31 jobs
[2025-12-05T14:07:15.454Z] [BOT] 💾 Saved 31 posted jobs to database
✅ Verified: Database file contains 31 jobs
[2025-12-05T14:07:15.454Z] [BOT] 📍 [ROUTING] "Verification Application Engineer" @ ORG_316d43c0 Design Systems
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-05T14:07:15.704Z] [BOT] ✅ Created forum post: 🏢 Verification Application Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
[2025-12-05T14:07:15.704Z] [BOT] ✅ Industry: Verification Application Engineer @ ORG_316d43c0 Design Systems
[2025-12-05T14:07:17.407Z] [BOT] ✅ Created forum post: 🏢 Verification Application Engineer @ ORG_316d43c0 Design Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:07:18.908Z] [BOT] 💾 BEFORE SAVE: Database has 32 jobs
[2025-12-05T14:07:18.909Z] [BOT] 💾 Saved 32 posted jobs to database
[2025-12-05T14:07:18.909Z] [BOT] ✅ Verified: Database file contains 32 jobs
[2025-12-05T14:07:21.910Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T14:07:21.911Z] [BOT] 📍 [ROUTING] "Part-Time Research Support" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T14:07:22.276Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #📁・JID_e938df7b
  ✅ Industry: Part-Time Research Support @ ORG_478e100e University
[2025-12-05T14:07:24.205Z] [BOT] ✅ Created forum post: 🏢 Part-Time Research Support @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T14:07:25.707Z] [BOT] 💾 BEFORE SAVE: Database has 33 jobs
[2025-12-05T14:07:25.708Z] [BOT] 💾 Saved 33 posted jobs to database
[2025-12-05T14:07:25.708Z] [BOT] ✅ Verified: Database file contains 33 jobs
[2025-12-05T14:07:28.709Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-05T14:07:28.709Z] [BOT] 📍 [ROUTING] "Mining Application Specialist" @ ORG_85937e82 Inc.
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-05T14:07:29.016Z] [BOT] ✅ Created forum post: 🏢 Mining Application Specialist @ ORG_85937e82 Inc. in #📣・marketing-jobs
  ✅ Industry: Mining Application Specialist @ ORG_85937e82 Inc.
[2025-12-05T14:07:30.518Z] [BOT] 💾 BEFORE SAVE: Database has 34 jobs
[2025-12-05T14:07:30.519Z] [BOT] 💾 Saved 34 posted jobs to database
✅ Verified: Database file contains 34 jobs
[2025-12-05T14:07:33.520Z] [BOT] 🎉 Posting complete! Successfully posted: 16, Failed: 0
[2025-12-05T14:07:33.527Z] [BOT] ✅ Loaded pending queue: 493 total (443 pending, 50 enriched, 0 posted)
[2025-12-05T14:07:33.539Z] [BOT] ✅ Saved pending queue: 493 total (139 pending, 0 enriched, 354 posted)
[2025-12-05T14:07:33.539Z] [BOT] 📋 Updated queue: marked 354 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T14:07:33.576Z] [BOT] 📂 Loaded 18 existing routing entries
[2025-12-05T14:07:33.612Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 16
[2025-12-05T14:07:33.612Z] [BOT] Total entries: 34
   Timestamp: 2025-12-05T14:07:33.611Z
[2025-12-05T14:07:35.623Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3553) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*