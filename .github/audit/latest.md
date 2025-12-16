# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T04:07:37.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T04:06:44.332Z] ========================================
[2025-12-16T04:06:44.334Z] Discord Bot Execution Log
[2025-12-16T04:06:44.334Z] Environment: GitHub Actions
[2025-12-16T04:06:44.334Z] Node Version: v20.19.6
[2025-12-16T04:06:44.334Z] ========================================
[2025-12-16T04:06:44.334Z] Environment Variables Check:
[2025-12-16T04:06:44.335Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T04:06:44.335Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T04:06:44.335Z] 
Multi-Channel Configuration:
[2025-12-16T04:06:44.335Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.335Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.336Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.336Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T04:06:44.336Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T04:06:44.336Z] 
Data Files Check:
[2025-12-16T04:06:44.336Z] .github/data/new_jobs.json: ✅ Exists (10 items, 38924 bytes)
[2025-12-16T04:06:44.337Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 136212 bytes)
[2025-12-16T04:06:44.337Z] 
========================================
[2025-12-16T04:06:44.338Z] Starting Enhanced Discord Bot...
[2025-12-16T04:06:44.338Z] ========================================
[2025-12-16T04:06:44.888Z] [BOT] ✅ Loaded V2 database: 215 jobs
[2025-12-16T04:06:45.543Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T04:06:45.544Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T04:06:45.544Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T04:06:45.544Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T04:06:45.603Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T04:06:45.670Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T04:06:45.672Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T04:06:45.672Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T04:06:45.672Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T04:06:45.673Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-16T04:06:45.673Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T04:06:45.679Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-16T04:06:45.679Z] [BOT] 📍 [ROUTING] "Data Consultant 1" @ ORG_864269d2 Health System
   Category: TECH (matched: "data")
[2025-12-16T04:06:45.679Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:06:45.697Z] [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T04:06:46.005Z] [BOT] ✅ Created forum post: 🏢 Data Consultant 1 @ ORG_864269d2 Health System in #💻・tech-jobs
  ✅ Industry: Data Consultant 1 @ ORG_864269d2 Health System
[2025-12-16T04:06:47.757Z] [BOT] ✅ Created forum post: 🏢 Data Consultant 1 @ ORG_864269d2 Health System in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:06:49.258Z] [BOT] 💾 Marked as posted: Data Consultant 1 @ ORG_864269d2 Health System (instance #1)
[2025-12-16T04:06:49.258Z] [BOT] 💾 BEFORE ARCHIVING: 216 jobs in database
[2025-12-16T04:06:49.258Z] [BOT] ✅ No jobs to archive (all 216 jobs within 7-day window)
[2025-12-16T04:06:49.265Z] [BOT] 💾 Saved posted_jobs.json: 216 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:06:49.265Z] [BOT] 📍 [ROUTING] "Graduate Scientist" @ ORG_65eedb45
   Category: TECH (default)
[2025-12-16T04:06:49.265Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:06:49.617Z] [BOT] ✅ Created forum post: 🏢 Graduate Scientist @ ORG_65eedb45 in #💻・tech-jobs
[2025-12-16T04:06:49.617Z] [BOT] ✅ Industry: Graduate Scientist @ ORG_65eedb45
[2025-12-16T04:06:51.475Z] [BOT] ✅ Created forum post: 🏢 Graduate Scientist @ ORG_65eedb45 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:06:52.975Z] [BOT] 💾 Marked as posted: Graduate Scientist @ ORG_65eedb45 (instance #1)
[2025-12-16T04:06:52.975Z] [BOT] 💾 BEFORE ARCHIVING: 217 jobs in database
[2025-12-16T04:06:52.975Z] [BOT] ✅ No jobs to archive (all 217 jobs within 7-day window)
[2025-12-16T04:06:52.978Z] [BOT] 💾 Saved posted_jobs.json: 217 active jobs
[2025-12-16T04:06:52.978Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:06:52.978Z] [BOT] 📍 [ROUTING] "Robotic Data Collection Operator - Tele-Op Systems" @ ORG_62fa5a5b Robotics
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:06:53.214Z] [BOT] ✅ Created forum post: 🏢 Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics in #💻・tech-jobs
[2025-12-16T04:06:53.214Z] [BOT] ✅ Industry: Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics
[2025-12-16T04:06:55.111Z] [BOT] ✅ Created forum post: 🏢 Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:06:56.611Z] [BOT] 💾 Marked as posted: Robotic Data Collection Operator - Tele-Op Systems @ ORG_62fa5a5b Robotics (instance #1)
[2025-12-16T04:06:56.611Z] [BOT] 💾 BEFORE ARCHIVING: 218 jobs in database
[2025-12-16T04:06:56.611Z] [BOT] ✅ No jobs to archive (all 218 jobs within 7-day window)
[2025-12-16T04:06:56.615Z] [BOT] 💾 Saved posted_jobs.json: 218 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:06:56.615Z] [BOT] 📍 [ROUTING] "Analyst – Data Strategy & Analytics - Healthcare" @ ORG_43aee0d0 Group
[2025-12-16T04:06:56.615Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:06:57.293Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data Strategy & Analytics - Healthcare @ ORG_43aee0d0 Group in #💻・tech-jobs
  ✅ Industry: Analyst – Data Strategy & Analytics - Healthcare @ ORG_43aee0d0 Group
[2025-12-16T04:06:59.069Z] [BOT] ✅ Created forum post: 🏢 Analyst – Data Strategy & Analytics - Healthcare @ ORG_43aee0d0 Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:07:00.571Z] [BOT] 💾 Marked as posted: Analyst – Data Strategy & Analytics - Healthcare @ ORG_43aee0d0 Group (instance #1)
[2025-12-16T04:07:00.571Z] [BOT] 💾 BEFORE ARCHIVING: 219 jobs in database
✅ No jobs to archive (all 219 jobs within 7-day window)
[2025-12-16T04:07:00.574Z] [BOT] 💾 Saved posted_jobs.json: 219 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:07:00.574Z] [BOT] 📍 [ROUTING] "Data Migration Engineer/Programmer" @ ORG_23325912 Global
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:07:00.770Z] [BOT] ✅ Created forum post: 🏢 Data Migration Engineer/Programmer @ ORG_23325912 Global in #💻・tech-jobs
  ✅ Industry: Data Migration Engineer/Programmer @ ORG_23325912 Global
[2025-12-16T04:07:02.467Z] [BOT] ✅ Created forum post: 🏢 Data Migration Engineer/Programmer @ ORG_23325912 Global in #💻・remote-usa
[2025-12-16T04:07:02.467Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T04:07:03.967Z] [BOT] 💾 Marked as posted: Data Migration Engineer/Programmer @ ORG_23325912 Global (instance #1)
[2025-12-16T04:07:03.967Z] [BOT] 💾 BEFORE ARCHIVING: 220 jobs in database
[2025-12-16T04:07:03.967Z] [BOT] ✅ No jobs to archive (all 220 jobs within 7-day window)
[2025-12-16T04:07:03.971Z] [BOT] 💾 Saved posted_jobs.json: 220 active jobs
[2025-12-16T04:07:03.971Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:07:03.971Z] [BOT] 📍 [ROUTING] "GIS Specialist/Traffic Noise Analyst" @ ORG_8a446a93 Intertec 
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:07:04.221Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec  in #💻・tech-jobs
  ✅ Industry: GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec
[2025-12-16T04:07:05.910Z] [BOT] ✅ Created forum post: 🏢 GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec  in #💻・remote-usa
[2025-12-16T04:07:05.911Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T04:07:07.412Z] [BOT] 💾 Marked as posted: GIS Specialist/Traffic Noise Analyst @ ORG_8a446a93 Intertec  (instance #1)
[2025-12-16T04:07:07.412Z] [BOT] 💾 BEFORE ARCHIVING: 221 jobs in database
[2025-12-16T04:07:07.412Z] [BOT] ✅ No jobs to archive (all 221 jobs within 7-day window)
[2025-12-16T04:07:07.415Z] [BOT] 💾 Saved posted_jobs.json: 221 active jobs
[2025-12-16T04:07:07.415Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:07:07.416Z] [BOT] 📍 [ROUTING] "Manufacturing Engineering Technician" @ ORG_9b9b6e44
[2025-12-16T04:07:07.416Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T04:07:07.742Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Engineering Technician @ ORG_9b9b6e44 in #💻・tech-jobs
  ✅ Industry: Manufacturing Engineering Technician @ ORG_9b9b6e44
[2025-12-16T04:07:09.469Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Engineering Technician @ ORG_9b9b6e44 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:07:10.970Z] [BOT] 💾 Marked as posted: Manufacturing Engineering Technician @ ORG_9b9b6e44 (instance #1)
[2025-12-16T04:07:10.970Z] [BOT] 💾 BEFORE ARCHIVING: 222 jobs in database
[2025-12-16T04:07:10.970Z] [BOT] ✅ No jobs to archive (all 222 jobs within 7-day window)
[2025-12-16T04:07:10.974Z] [BOT] 💾 Saved posted_jobs.json: 222 active jobs
[2025-12-16T04:07:10.974Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T04:07:13.975Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-16T04:07:13.975Z] [BOT] 📍 [ROUTING] "Post-Doctoral Scientist - Gc/MS" @ ORG_8410dea2 Technologies
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-16T04:07:14.390Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies in #💲・sales-jobs
  ✅ Industry: Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies
[2025-12-16T04:07:16.290Z] [BOT] ✅ Created forum post: 🏢 Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies in #🌉・san-francisco
[2025-12-16T04:07:16.290Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-16T04:07:17.792Z] [BOT] 💾 Marked as posted: Post-Doctoral Scientist - Gc/MS @ ORG_8410dea2 Technologies (instance #1)
[2025-12-16T04:07:17.792Z] [BOT] 💾 BEFORE ARCHIVING: 223 jobs in database
[2025-12-16T04:07:17.792Z] [BOT] ✅ No jobs to archive (all 223 jobs within 7-day window)
[2025-12-16T04:07:17.794Z] [BOT] 💾 Saved posted_jobs.json: 223 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:07:20.795Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-16T04:07:20.796Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Bio-Techne
[2025-12-16T04:07:20.796Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T04:07:21.311Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Bio-Techne in #🤖・ai-jobs
[2025-12-16T04:07:21.311Z] [BOT] ✅ Industry: Software Engineer @ Bio-Techne
[2025-12-16T04:07:23.026Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Bio-Techne in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T04:07:24.527Z] [BOT] 💾 Marked as posted: Software Engineer @ Bio-Techne (instance #1)
[2025-12-16T04:07:24.528Z] [BOT] 💾 BEFORE ARCHIVING: 224 jobs in database
[2025-12-16T04:07:24.528Z] [BOT] ✅ No jobs to archive (all 224 jobs within 7-day window)
[2025-12-16T04:07:24.531Z] [BOT] 💾 Saved posted_jobs.json: 224 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:07:27.532Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T04:07:27.533Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_b18a8c08
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T04:07:27.533Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-16T04:07:27.817Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_b18a8c08 in #📈・JID_fb739488
[2025-12-16T04:07:27.818Z] [BOT] ✅ Industry: Data Analyst 1 @ ORG_b18a8c08
[2025-12-16T04:07:29.650Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_b18a8c08 in #💻・remote-usa
[2025-12-16T04:07:29.650Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-16T04:07:31.151Z] [BOT] 💾 Marked as posted: Data Analyst 1 @ ORG_b18a8c08 (instance #1)
[2025-12-16T04:07:31.151Z] [BOT] 💾 BEFORE ARCHIVING: 225 jobs in database
[2025-12-16T04:07:31.152Z] [BOT] ✅ No jobs to archive (all 225 jobs within 7-day window)
[2025-12-16T04:07:31.155Z] [BOT] 💾 Saved posted_jobs.json: 225 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T04:07:34.156Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-16T04:07:34.157Z] [BOT] ⏭️  Skipping duplicate: JID_ecaed09b-i_jr63714 (posted within 7 days)
⏭️  Skipping duplicate: JID_7ad1bb4d-agilent_student_careers-JID_659a3a2b-scientist_4028181 (posted within 7 days)
⏭️  Skipping duplicate: JID_d105988b-engineer_jr101306 (posted within 7 days)
⏭️  Skipping duplicate: JID_f3961a70 (posted within 7 days)
⏭️  Skipping duplicate: JID_c1fba773 (posted within 7 days)
⏭️  Skipping duplicate: JID_a07d257e (posted within 7 days)
⏭️  Skipping duplicate: JID_46fb8f73-cx_1-job-25106 (posted within 7 days)
⏭️  Skipping duplicate: JID_bf5d5c49 (posted within 7 days)
⏭️  Skipping duplicate: JID_e401dedd-analyst_r4468 (posted within 7 days)
⏭️  Skipping duplicate: JID_7a994d2d (posted within 7 days)
[2025-12-16T04:07:34.161Z] [BOT] ✅ Loaded pending queue: 663 total (643 pending, 20 enriched, 0 posted)
[2025-12-16T04:07:34.172Z] [BOT] ✅ Saved pending queue: 663 total (643 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2025-12-16T04:07:34.172Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-16T04:07:34.213Z] [BOT] 📂 Loaded 208 existing routing entries
[2025-12-16T04:07:34.251Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 218
   Timestamp: 2025-12-16T04:07:34.250Z
[2025-12-16T04:07:34.252Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T04:07:34.252Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-16T04:07:36.263Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2533) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*