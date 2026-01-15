# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T05:03:11.536Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T05:02:23.075Z] ========================================
[2026-01-15T05:02:23.077Z] Discord Bot Execution Log
[2026-01-15T05:02:23.077Z] Environment: GitHub Actions
[2026-01-15T05:02:23.077Z] Node Version: v20.19.6
[2026-01-15T05:02:23.077Z] ========================================
[2026-01-15T05:02:23.077Z] Environment Variables Check:
[2026-01-15T05:02:23.077Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T05:02:23.078Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T05:02:23.078Z] 
Multi-Channel Configuration:
[2026-01-15T05:02:23.078Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T05:02:23.078Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T05:02:23.078Z] 
Data Files Check:
[2026-01-15T05:02:23.079Z] .github/data/new_jobs.json: ✅ Exists (10 items, 47150 bytes)
[2026-01-15T05:02:23.085Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 841676 bytes)
[2026-01-15T05:02:23.085Z] 
========================================
[2026-01-15T05:02:23.085Z] Starting Enhanced Discord Bot...
[2026-01-15T05:02:23.085Z] ========================================
[2026-01-15T05:02:23.609Z] [BOT] ✅ Loaded V2 database: 1586 jobs
[2026-01-15T05:02:24.276Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T05:02:24.276Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T05:02:24.276Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T05:02:24.390Z] [BOT] ✅ Loaded pending queue: 2721 total (2701 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Bio-Techne
[2026-01-15T05:02:24.392Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T05:02:24.393Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T05:02:24.393Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T05:02:24.394Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T05:02:24.394Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-15T05:02:24.394Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T05:02:24.399Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T05:02:24.399Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Bio-Techne
[2026-01-15T05:02:24.399Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T05:02:24.416Z] [BOT ERROR] (node:2568) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T05:02:24.649Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Bio-Techne in #🤖・ai-jobs
[2026-01-15T05:02:24.649Z] [BOT] ✅ Industry: Software Engineer @ Bio-Techne
[2026-01-15T05:02:26.294Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Bio-Techne in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:02:27.796Z] [BOT] 💾 Marked as posted: Software Engineer @ Bio-Techne (instance #1)
[2026-01-15T05:02:27.796Z] [BOT] 💾 BEFORE ARCHIVING: 1587 jobs in database
[2026-01-15T05:02:27.797Z] [BOT] ✅ No jobs to archive (all 1587 jobs within 7-day window)
[2026-01-15T05:02:27.812Z] [BOT] 💾 Saved posted_jobs.json: 1587 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:27.812Z] [BOT] 📍 [ROUTING] "Software Engineer - Full-Stack" @ nominal
[2026-01-15T05:02:27.812Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T05:02:28.289Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full-Stack @ nominal in #🤖・ai-jobs
[2026-01-15T05:02:28.289Z] [BOT] ✅ Industry: Software Engineer - Full-Stack @ nominal
[2026-01-15T05:02:30.080Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Full-Stack @ nominal in #🗽・new-york
[2026-01-15T05:02:30.080Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-15T05:02:31.582Z] [BOT] 💾 Marked as posted: Software Engineer - Full-Stack @ nominal (instance #1)
💾 BEFORE ARCHIVING: 1588 jobs in database
[2026-01-15T05:02:31.583Z] [BOT] ✅ No jobs to archive (all 1588 jobs within 7-day window)
[2026-01-15T05:02:31.592Z] [BOT] 💾 Saved posted_jobs.json: 1588 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:31.593Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_3495e757 Cap Supply Holdings
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T05:02:31.593Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T05:02:31.772Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_3495e757 Cap Supply Holdings in #🤖・ai-jobs
  ✅ Industry: Data Scientist @ ORG_3495e757 Cap Supply Holdings
[2026-01-15T05:02:33.406Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_3495e757 Cap Supply Holdings in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:02:34.908Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_3495e757 Cap Supply Holdings (instance #1)
[2026-01-15T05:02:34.908Z] [BOT] 💾 BEFORE ARCHIVING: 1589 jobs in database
[2026-01-15T05:02:34.909Z] [BOT] ✅ No jobs to archive (all 1589 jobs within 7-day window)
[2026-01-15T05:02:34.921Z] [BOT] 💾 Saved posted_jobs.json: 1589 active jobs
[2026-01-15T05:02:34.921Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:37.922Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-15T05:02:37.923Z] [BOT] 📍 [ROUTING] "Robotic Data Collection Operator - Tele-Op Systems" @ ORG_62fa5a5b Robotics
[2026-01-15T05:02:37.923Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:02:38.556Z] [BOT] ✅ Created forum post: 🏢 Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics in #💻・tech-jobs
[2026-01-15T05:02:38.556Z] [BOT] ✅ Industry: Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics
[2026-01-15T05:02:40.424Z] [BOT] ✅ Created forum post: 🏢 Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics in #💻・remote-usa
[2026-01-15T05:02:40.424Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T05:02:41.925Z] [BOT] 💾 Marked as posted: Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics (instance #1)
[2026-01-15T05:02:41.926Z] [BOT] 💾 BEFORE ARCHIVING: 1590 jobs in database
[2026-01-15T05:02:41.927Z] [BOT] ✅ No jobs to archive (all 1590 jobs within 7-day window)
[2026-01-15T05:02:41.938Z] [BOT] 💾 Saved posted_jobs.json: 1590 active jobs
[2026-01-15T05:02:41.939Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:41.939Z] [BOT] 📍 [ROUTING] "Software Engineer New Grad" @ ORG_c4edd50eing
[2026-01-15T05:02:41.939Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:02:42.074Z] [BOT] ✅ Created forum post: 🏢 Software Engineer New Grad @ ORG_c4edd50eing in #💻・tech-jobs
[2026-01-15T05:02:42.074Z] [BOT] ✅ Industry: Software Engineer New Grad @ ORG_c4edd50eing
[2026-01-15T05:02:43.765Z] [BOT] ✅ Created forum post: 🏢 Software Engineer New Grad @ ORG_c4edd50eing in #🌉・san-francisco
[2026-01-15T05:02:43.765Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-15T05:02:45.265Z] [BOT] 💾 Marked as posted: Software Engineer New Grad @ ORG_c4edd50eing (instance #1)
[2026-01-15T05:02:45.265Z] [BOT] 💾 BEFORE ARCHIVING: 1591 jobs in database
[2026-01-15T05:02:45.267Z] [BOT] ✅ No jobs to archive (all 1591 jobs within 7-day window)
[2026-01-15T05:02:45.278Z] [BOT] 💾 Saved posted_jobs.json: 1591 active jobs
[2026-01-15T05:02:45.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:45.278Z] [BOT] 📍 [ROUTING] "Data Migration Engineer/Programmer" @ ORG_23325912 Global
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:02:45.442Z] [BOT] ✅ Created forum post: 🏢 Data Migration Engineer/Programmer @ ORG_23325912 Global in #💻・tech-jobs
[2026-01-15T05:02:45.442Z] [BOT] ✅ Industry: Data Migration Engineer/Programmer @ ORG_23325912 Global
[2026-01-15T05:02:47.271Z] [BOT] ✅ Created forum post: 🏢 Data Migration Engineer/Programmer @ ORG_23325912 Global in #💻・remote-usa
[2026-01-15T05:02:47.271Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T05:02:48.772Z] [BOT] 💾 Marked as posted: Data Migration Engineer/Programmer @ ORG_23325912 Global (instance #1)
[2026-01-15T05:02:48.772Z] [BOT] 💾 BEFORE ARCHIVING: 1592 jobs in database
[2026-01-15T05:02:48.773Z] [BOT] ✅ No jobs to archive (all 1592 jobs within 7-day window)
[2026-01-15T05:02:48.783Z] [BOT] 💾 Saved posted_jobs.json: 1592 active jobs
[2026-01-15T05:02:48.783Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:48.783Z] [BOT] 📍 [ROUTING] "GIS Specialist/Traffic Noise Analyst" @ ORG_8a446a93 Intertec 
   Category: TECH (default)
[2026-01-15T05:02:48.783Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:02:49.050Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec  in #💻・tech-jobs
  ✅ Industry: GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec
[2026-01-15T05:02:50.700Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec  in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:02:52.201Z] [BOT] 💾 Marked as posted: GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec  (instance #1)
[2026-01-15T05:02:52.201Z] [BOT] 💾 BEFORE ARCHIVING: 1593 jobs in database
[2026-01-15T05:02:52.203Z] [BOT] ✅ No jobs to archive (all 1593 jobs within 7-day window)
[2026-01-15T05:02:52.213Z] [BOT] 💾 Saved posted_jobs.json: 1593 active jobs
[2026-01-15T05:02:52.213Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:52.213Z] [BOT] 📍 [ROUTING] "Manufacturing Engineering Technician" @ ORG_9b9b6e44
[2026-01-15T05:02:52.213Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:02:52.336Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Engineering Technician @ ORG_9b9b6e44 in #💻・tech-jobs
  ✅ Industry: Manufacturing Engineering Technician @ ORG_9b9b6e44
[2026-01-15T05:02:53.978Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Engineering Technician @ ORG_9b9b6e44 in #💻・remote-usa
[2026-01-15T05:02:53.978Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T05:02:55.479Z] [BOT] 💾 Marked as posted: Manufacturing Engineering Technician @ ORG_9b9b6e44 (instance #1)
[2026-01-15T05:02:55.479Z] [BOT] 💾 BEFORE ARCHIVING: 1594 jobs in database
[2026-01-15T05:02:55.480Z] [BOT] ✅ No jobs to archive (all 1594 jobs within 7-day window)
[2026-01-15T05:02:55.490Z] [BOT] 💾 Saved posted_jobs.json: 1594 active jobs
[2026-01-15T05:02:55.490Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:02:55.491Z] [BOT] 📍 [ROUTING] "Hybrid – Research Data Management Librarian - Downtown Library" @ ORG_41a6741e Virginia University
[2026-01-15T05:02:55.491Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T05:02:55.637Z] [BOT] ✅ Created forum post: 🏢 Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University in #💻・tech-jobs
  ✅ Industry: Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University
[2026-01-15T05:02:57.431Z] [BOT] ✅ Created forum post: 🏢 Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T05:02:58.932Z] [BOT] 💾 Marked as posted: Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University (instance #1)
[2026-01-15T05:02:58.933Z] [BOT] 💾 BEFORE ARCHIVING: 1595 jobs in database
[2026-01-15T05:02:58.934Z] [BOT] ✅ No jobs to archive (all 1595 jobs within 7-day window)
[2026-01-15T05:02:58.944Z] [BOT] 💾 Saved posted_jobs.json: 1595 active jobs
[2026-01-15T05:02:58.944Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:03:01.945Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T05:03:01.945Z] [BOT] 📍 [ROUTING] "Director, Account Management" @ discord
[2026-01-15T05:03:01.945Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T05:03:02.239Z] [BOT] ✅ Created forum post: 🏢 Director, Account Management @ discord in #💲・sales-jobs
  ✅ Industry: Director, Account Management @ discord
[2026-01-15T05:03:03.947Z] [BOT] ✅ Created forum post: 🏢 Director, Account Management @ discord in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T05:03:05.448Z] [BOT] 💾 Marked as posted: Director, Account Management @ discord (instance #1)
[2026-01-15T05:03:05.448Z] [BOT] 💾 BEFORE ARCHIVING: 1596 jobs in database
[2026-01-15T05:03:05.449Z] [BOT] ✅ No jobs to archive (all 1596 jobs within 7-day window)
[2026-01-15T05:03:05.462Z] [BOT] 💾 Saved posted_jobs.json: 1596 active jobs
[2026-01-15T05:03:05.462Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T05:03:08.463Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T05:03:08.463Z] [BOT] ⏭️  Skipping duplicate: JID_d105988b-engineer_jr101306 (posted within 7 days)
[2026-01-15T05:03:08.463Z] [BOT] ⏭️  Skipping duplicate: JID_c1fba773 (posted within 7 days)
[2026-01-15T05:03:08.463Z] [BOT] ⏭️  Skipping duplicate: JID_56c13a3c (posted within 7 days)
[2026-01-15T05:03:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_8e6f3c72 (posted within 7 days)
[2026-01-15T05:03:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_bf5d5c49 (posted within 7 days)
[2026-01-15T05:03:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_640730e3 (posted within 7 days)
[2026-01-15T05:03:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_e401dedd-analyst_r4468 (posted within 7 days)
[2026-01-15T05:03:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_7a994d2d (posted within 7 days)
[2026-01-15T05:03:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_ec17fa96-atlanta_30360-data-scientist_wcjr-028517 (posted within 7 days)
[2026-01-15T05:03:08.464Z] [BOT] ⏭️  Skipping duplicate: JID_8f44508d (posted within 7 days)
[2026-01-15T05:03:08.582Z] [BOT] ✅ Loaded pending queue: 2721 total (2701 pending, 20 enriched, 0 posted)
[2026-01-15T05:03:08.746Z] [BOT] ✅ Saved pending queue: 2721 total (2701 pending, 10 enriched, 10 posted)
[2026-01-15T05:03:08.747Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T05:03:08.801Z] [BOT] 📂 Loaded 3765 existing routing entries
[2026-01-15T05:03:08.863Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T05:03:08.863Z] [BOT] Total entries: 3775
   Timestamp: 2026-01-15T05:03:08.847Z
[2026-01-15T05:03:08.864Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T05:03:08.864Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T05:03:08.864Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-15T05:03:08.864Z] [BOT] Total posts: 20
   Channels used: 6
   Top channels:
[2026-01-15T05:03:08.864Z] [BOT] 1. #💻・remote-usa: 7 posts
     2. #💻・tech-jobs: 6 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #🗽・new-york: 1 posts
[2026-01-15T05:03:08.864Z] [BOT] [STATS] Channel stats saved
[2026-01-15T05:03:10.890Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2568) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*