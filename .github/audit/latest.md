# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T01:15:26.496Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 9
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T01:14:34.067Z] ========================================
[2026-01-06T01:14:34.069Z] Discord Bot Execution Log
[2026-01-06T01:14:34.069Z] Environment: GitHub Actions
[2026-01-06T01:14:34.069Z] Node Version: v20.19.6
[2026-01-06T01:14:34.069Z] ========================================
[2026-01-06T01:14:34.069Z] Environment Variables Check:
[2026-01-06T01:14:34.069Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T01:14:34.069Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.069Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T01:14:34.069Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T01:14:34.069Z] 
Multi-Channel Configuration:
[2026-01-06T01:14:34.069Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T01:14:34.070Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T01:14:34.070Z] 
Data Files Check:
[2026-01-06T01:14:34.071Z] .github/data/new_jobs.json: ✅ Exists (10 items, 67093 bytes)
[2026-01-06T01:14:34.075Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 683301 bytes)
[2026-01-06T01:14:34.075Z] 
========================================
[2026-01-06T01:14:34.075Z] Starting Enhanced Discord Bot...
[2026-01-06T01:14:34.075Z] ========================================
[2026-01-06T01:14:34.591Z] [BOT] ✅ Loaded V2 database: 1340 jobs
[2026-01-06T01:14:35.047Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T01:14:35.048Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T01:14:35.048Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T01:14:35.048Z] [BOT] ✅ Loaded pending queue: 24 total (4 pending, 20 enriched, 0 posted)
[2026-01-06T01:14:35.049Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T01:14:35.049Z] [BOT] [BOT] 🔍 Sample enriched job: Minor League Technology Operator at Major League Baseball
[2026-01-06T01:14:35.051Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
[2026-01-06T01:14:35.051Z] [BOT] ⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T01:14:35.051Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
[2026-01-06T01:14:35.051Z] [BOT] ⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T01:14:35.052Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
[2026-01-06T01:14:35.052Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
[2026-01-06T01:14:35.052Z] [BOT] ⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
[2026-01-06T01:14:35.052Z] [BOT] ⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
⏭️ Skipping already posted: Web Developer 1 - UI for Arcgis Enterprise at Esri
[2026-01-06T01:14:35.053Z] [BOT] ⏭️  Skipping duplicate: JID_847c9fea (posted within 7 days)
[2026-01-06T01:14:35.053Z] [BOT] ⏭️ Skipping already posted: ROLE_9c662417 at Ramboll
[2026-01-06T01:14:35.053Z] [BOT] 📬 Found 11 new jobs (9 already posted)...
[2026-01-06T01:14:35.053Z] [BOT] 📋 After blacklist filter: 11 jobs (0 blacklisted)
[2026-01-06T01:14:35.053Z] [BOT] 📋 After data quality filter: 11 jobs (0 invalid)
[2026-01-06T01:14:35.054Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-01-06T01:14:35.054Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T01:14:35.059Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-06T01:14:35.059Z] [BOT] 📍 [ROUTING] "Minor League Technology Operator" @ ORG_2bc58fcc League Baseball
[2026-01-06T01:14:35.059Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-06T01:14:35.064Z] [BOT ERROR] (node:3487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T01:14:35.241Z] [BOT] ✅ Created forum post: 🏢 Minor League Technology Operator @ ORG_2bc58fcc League Baseball in #🩺・healthcare-jobs
[2026-01-06T01:14:35.241Z] [BOT] ✅ Industry: Minor League Technology Operator @ ORG_2bc58fcc League Baseball
[2026-01-06T01:14:36.938Z] [BOT] ✅ Created forum post: 🏢 Minor League Technology Operator @ ORG_2bc58fcc League Baseball in #🚌・boston
[2026-01-06T01:14:36.938Z] [BOT] ✅ Location: 🚌・boston
[2026-01-06T01:14:38.438Z] [BOT] 💾 Marked as posted: Minor League Technology Operator @ ORG_2bc58fcc League Baseball (instance #1)
[2026-01-06T01:14:38.439Z] [BOT] 💾 BEFORE ARCHIVING: 1341 jobs in database
[2026-01-06T01:14:38.440Z] [BOT] ✅ No jobs to archive (all 1341 jobs within 7-day window)
[2026-01-06T01:14:38.453Z] [BOT] 💾 Saved posted_jobs.json: 1341 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T01:14:41.453Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-06T01:14:41.453Z] [BOT] 📍 [ROUTING] "Software Engineer - AI Automation - Internal Tools" @ ORG_e03f7067 Technologies
[2026-01-06T01:14:41.453Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T01:14:41.644Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies in #💻・tech-jobs
[2026-01-06T01:14:41.644Z] [BOT] ✅ Industry: Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies
[2026-01-06T01:14:43.323Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-06T01:14:44.824Z] [BOT] 💾 Marked as posted: Software Engineer - AI Automation - Internal Tools @ ORG_e03f7067 Technologies (instance #1)
[2026-01-06T01:14:44.824Z] [BOT] 💾 BEFORE ARCHIVING: 1342 jobs in database
[2026-01-06T01:14:44.825Z] [BOT] ✅ No jobs to archive (all 1342 jobs within 7-day window)
[2026-01-06T01:14:44.835Z] [BOT] 💾 Saved posted_jobs.json: 1342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T01:14:44.836Z] [BOT] 📍 [ROUTING] "3D Tomography Application Engineer" @ ORG_86554b90
[2026-01-06T01:14:44.836Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T01:14:44.996Z] [BOT] ✅ Created forum post: 🏢 3D Tomography Application Engineer @ ORG_86554b90 in #💻・tech-jobs
  ✅ Industry: 3D Tomography Application Engineer @ ORG_86554b90
[2026-01-06T01:14:46.748Z] [BOT] ✅ Created forum post: 🏢 3D Tomography Application Engineer @ ORG_86554b90 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T01:14:48.250Z] [BOT] 💾 Marked as posted: 3D Tomography Application Engineer @ ORG_86554b90 (instance #1)
[2026-01-06T01:14:48.250Z] [BOT] 💾 BEFORE ARCHIVING: 1343 jobs in database
[2026-01-06T01:14:48.251Z] [BOT] ✅ No jobs to archive (all 1343 jobs within 7-day window)
[2026-01-06T01:14:48.260Z] [BOT] 💾 Saved posted_jobs.json: 1343 active jobs
[2026-01-06T01:14:48.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:14:48.261Z] [BOT] 📍 [ROUTING] "Tax Software Analyst" @ ORG_8211df30 Kluwer
[2026-01-06T01:14:48.261Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T01:14:48.426Z] [BOT] ✅ Created forum post: 🏢 Tax Software Analyst @ ORG_8211df30 Kluwer in #💻・tech-jobs
  ✅ Industry: Tax Software Analyst @ ORG_8211df30 Kluwer
[2026-01-06T01:14:50.085Z] [BOT] ✅ Created forum post: 🏢 Tax Software Analyst @ ORG_8211df30 Kluwer in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T01:14:51.586Z] [BOT] 💾 Marked as posted: Tax Software Analyst @ ORG_8211df30 Kluwer (instance #1)
[2026-01-06T01:14:51.587Z] [BOT] 💾 BEFORE ARCHIVING: 1344 jobs in database
[2026-01-06T01:14:51.588Z] [BOT] ✅ No jobs to archive (all 1344 jobs within 7-day window)
[2026-01-06T01:14:51.596Z] [BOT] 💾 Saved posted_jobs.json: 1344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T01:14:51.596Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2026-01-06T01:14:51.596Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T01:14:51.915Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ Q2
[2026-01-06T01:14:53.606Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-06T01:14:55.106Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2026-01-06T01:14:55.106Z] [BOT] 💾 BEFORE ARCHIVING: 1345 jobs in database
[2026-01-06T01:14:55.107Z] [BOT] ✅ No jobs to archive (all 1345 jobs within 7-day window)
[2026-01-06T01:14:55.115Z] [BOT] 💾 Saved posted_jobs.json: 1345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T01:14:55.116Z] [BOT] 📍 [ROUTING] "Java Software Engineer 1" @ ORG_0fb6ee9c
   Category: TECH (matched: "software")
[2026-01-06T01:14:55.116Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T01:14:55.295Z] [BOT] ✅ Created forum post: 🏢 Java Software Engineer 1 @ ORG_0fb6ee9c in #💻・tech-jobs
[2026-01-06T01:14:55.295Z] [BOT] ✅ Industry: Java Software Engineer 1 @ ORG_0fb6ee9c
[2026-01-06T01:14:56.797Z] [BOT] 💾 Marked as posted: Java Software Engineer 1 @ ORG_0fb6ee9c (instance #1)
[2026-01-06T01:14:56.797Z] [BOT] 💾 BEFORE ARCHIVING: 1346 jobs in database
[2026-01-06T01:14:56.798Z] [BOT] ✅ No jobs to archive (all 1346 jobs within 7-day window)
[2026-01-06T01:14:56.807Z] [BOT] 💾 Saved posted_jobs.json: 1346 active jobs
[2026-01-06T01:14:56.808Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:14:56.808Z] [BOT] 📍 [ROUTING] "Developer 2 - Programming" @ ORG_d7d2f0ff Digital
[2026-01-06T01:14:56.808Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T01:14:57.184Z] [BOT] ✅ Created forum post: 🏢 Developer 2 - Programming @ ORG_d7d2f0ff Digital in #💻・tech-jobs
  ✅ Industry: Developer 2 - Programming @ ORG_d7d2f0ff Digital
[2026-01-06T01:14:59.210Z] [BOT] ✅ Created forum post: 🏢 Developer 2 - Programming @ ORG_d7d2f0ff Digital in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T01:15:00.712Z] [BOT] 💾 Marked as posted: Developer 2 - Programming @ ORG_d7d2f0ff Digital (instance #1)
[2026-01-06T01:15:00.712Z] [BOT] 💾 BEFORE ARCHIVING: 1347 jobs in database
[2026-01-06T01:15:00.713Z] [BOT] ✅ No jobs to archive (all 1347 jobs within 7-day window)
[2026-01-06T01:15:00.722Z] [BOT] 💾 Saved posted_jobs.json: 1347 active jobs
[2026-01-06T01:15:00.722Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:15:03.722Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-06T01:15:03.722Z] [BOT] 📍 [ROUTING] "Industrial Engineer / Principal Industrial Engineer" @ ORG_f3f2248d Grumman
[2026-01-06T01:15:03.722Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-06T01:15:03.932Z] [BOT] ✅ Created forum post: 🏢 Industrial Engineer / Principal Industrial Engineer @ ORG_f3f2248d Grumman in #📈・JID_fb739488
  ✅ Industry: Industrial Engineer / Principal Industrial Engineer @ ORG_f3f2248d Grumman
[2026-01-06T01:15:05.917Z] [BOT] ✅ Created forum post: 🏢 Industrial Engineer / Principal Industrial Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T01:15:07.419Z] [BOT] 💾 Marked as posted: Industrial Engineer / Principal Industrial Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-06T01:15:07.419Z] [BOT] 💾 BEFORE ARCHIVING: 1348 jobs in database
[2026-01-06T01:15:07.420Z] [BOT] ✅ No jobs to archive (all 1348 jobs within 7-day window)
[2026-01-06T01:15:07.430Z] [BOT] 💾 Saved posted_jobs.json: 1348 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T01:15:10.431Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-06T01:15:10.432Z] [BOT] 📍 [ROUTING] "ATS Technology Development Program" @ ORG_f5b4b427 Insurance Company
[2026-01-06T01:15:10.432Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-06T01:15:11.057Z] [BOT] ✅ Created forum post: 🏢 ATS Technology Development Program @ ORG_f5b4b427 Insurance Company in #📣・marketing-jobs
  ✅ Industry: ATS Technology Development Program @ ORG_f5b4b427 Insurance Company
[2026-01-06T01:15:12.755Z] [BOT] ✅ Created forum post: 🏢 ATS Technology Development Program @ ORG_f5b4b427 Insurance Company in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T01:15:14.255Z] [BOT] 💾 Marked as posted: ATS Technology Development Program @ ORG_f5b4b427 Insurance Company (instance #1)
[2026-01-06T01:15:14.256Z] [BOT] 💾 BEFORE ARCHIVING: 1349 jobs in database
[2026-01-06T01:15:14.256Z] [BOT] ✅ No jobs to archive (all 1349 jobs within 7-day window)
[2026-01-06T01:15:14.267Z] [BOT] 💾 Saved posted_jobs.json: 1349 active jobs
[2026-01-06T01:15:14.267Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:15:17.268Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-06T01:15:17.268Z] [BOT] 📍 [ROUTING] "Terminal Visual Charting Specialist" @ ORG_d51736fa
   Category: HR (matched: "compensation")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-06T01:15:17.515Z] [BOT] ✅ Created forum post: 🏢 Terminal Visual Charting Specialist @ ORG_d51736fa in #📁・JID_e938df7b
  ✅ Industry: Terminal Visual Charting Specialist @ ORG_d51736fa
[2026-01-06T01:15:19.287Z] [BOT] ✅ Created forum post: 🏢 Terminal Visual Charting Specialist @ ORG_d51736fa in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T01:15:20.787Z] [BOT] 💾 Marked as posted: Terminal Visual Charting Specialist @ ORG_d51736fa (instance #1)
[2026-01-06T01:15:20.787Z] [BOT] 💾 BEFORE ARCHIVING: 1350 jobs in database
[2026-01-06T01:15:20.788Z] [BOT] ✅ No jobs to archive (all 1350 jobs within 7-day window)
[2026-01-06T01:15:20.799Z] [BOT] 💾 Saved posted_jobs.json: 1350 active jobs
[2026-01-06T01:15:20.799Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:15:23.799Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-06T01:15:23.799Z] [BOT] ⏭️  Skipping duplicate: JID_07a45ae8 (posted within 7 days)
[2026-01-06T01:15:23.799Z] [BOT] ⏭️  Skipping duplicate: JID_db0316a6 (posted within 7 days)
[2026-01-06T01:15:23.800Z] [BOT] ⏭️  Skipping duplicate: JID_0487fbac-engineer_jr_1044312-1 (posted within 7 days)
[2026-01-06T01:15:23.800Z] [BOT] ⏭️  Skipping duplicate: JID_463b316f-analyst_r0050915 (posted within 7 days)
[2026-01-06T01:15:23.800Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
[2026-01-06T01:15:23.800Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
[2026-01-06T01:15:23.800Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
[2026-01-06T01:15:23.800Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
[2026-01-06T01:15:23.800Z] [BOT] ⏭️  Skipping duplicate: JID_ddd5ae0d (posted within 7 days)
[2026-01-06T01:15:23.801Z] [BOT] ⏭️  Skipping duplicate: JID_531fc6b5 (posted within 7 days)
[2026-01-06T01:15:23.802Z] [BOT] ✅ Loaded pending queue: 24 total (4 pending, 20 enriched, 0 posted)
[2026-01-06T01:15:23.803Z] [BOT] ✅ Saved pending queue: 24 total (4 pending, 10 enriched, 10 posted)
[2026-01-06T01:15:23.804Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T01:15:23.863Z] [BOT] 📂 Loaded 2261 existing routing entries
[2026-01-06T01:15:23.921Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-06T01:15:23.921Z] [BOT] Total entries: 2271
   Timestamp: 2026-01-06T01:15:23.910Z
[2026-01-06T01:15:23.922Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T01:15:23.922Z] [BOT] Total attempts: 28
[2026-01-06T01:15:23.922Z] [BOT] Successful: 19
   Failed: 0
   Skipped: 9
[2026-01-06T01:15:23.923Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T01:15:23.923Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 10
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💻・remote-usa: 4 posts
[2026-01-06T01:15:23.923Z] [BOT] 3. #🌉・san-francisco: 2 posts
     4. #🩺・healthcare-jobs: 1 posts
     5. #🚌・boston: 1 posts
[2026-01-06T01:15:23.923Z] [BOT] [STATS] Channel stats saved
[2026-01-06T01:15:25.935Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*