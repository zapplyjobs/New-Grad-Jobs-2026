# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T00:46:31.567Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 10
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T00:45:38.665Z] ========================================
[2026-01-09T00:45:38.667Z] Discord Bot Execution Log
[2026-01-09T00:45:38.667Z] Environment: GitHub Actions
[2026-01-09T00:45:38.667Z] Node Version: v20.19.6
[2026-01-09T00:45:38.667Z] ========================================
[2026-01-09T00:45:38.667Z] Environment Variables Check:
[2026-01-09T00:45:38.667Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T00:45:38.667Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.667Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T00:45:38.667Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T00:45:38.668Z] 
Multi-Channel Configuration:
[2026-01-09T00:45:38.668Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T00:45:38.668Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T00:45:38.668Z] 
Data Files Check:
[2026-01-09T00:45:38.669Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70810 bytes)
[2026-01-09T00:45:38.675Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 763547 bytes)
[2026-01-09T00:45:38.675Z] 
========================================
[2026-01-09T00:45:38.675Z] Starting Enhanced Discord Bot...
[2026-01-09T00:45:38.675Z] ========================================
[2026-01-09T00:45:39.194Z] [BOT] ✅ Loaded V2 database: 1486 jobs
[2026-01-09T00:45:39.973Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T00:45:39.974Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T00:45:39.974Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T00:45:39.984Z] [BOT] ✅ Loaded pending queue: 201 total (181 pending, 20 enriched, 0 posted)
[2026-01-09T00:45:39.984Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Advanced Practice Provider - Aprn or PA - Medical Informatics at Kettering Health
[2026-01-09T00:45:39.987Z] [BOT] ⏭️  Skipping duplicate: JID_7cf3eb12 (posted within 7 days)
[2026-01-09T00:45:39.987Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New College Graduate at Vectra
[2026-01-09T00:45:39.987Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78241 (posted within 7 days)
⏭️ Skipping already posted: Analyst 1 – Labor Analytics - Corporate - Las Vegas at Caesars Entertainment
[2026-01-09T00:45:39.987Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055622-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2026-01-09T00:45:39.987Z] [BOT] ⏭️  Skipping duplicate: JID_ff0e5907 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at MCA Connect
⏭️  Skipping duplicate: JID_bf5593fa (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Jerry
[2026-01-09T00:45:39.988Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_e58e6cb8-onsite_01815653 (posted within 7 days)
⏭️ Skipping already posted: 2026 Fulltime - Data Management Analyst I at RTX
⏭️  Skipping duplicate: JID_18900469 (posted within 7 days)
⏭️ Skipping already posted: Nuclear Analysis Technician - Engineering Techs - Physics Techs at Westinghouse Electric Company
[2026-01-09T00:45:39.988Z] [BOT] ⏭️  Skipping duplicate: JID_bdba1f64 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
⏭️  Skipping duplicate: JID_3653a38b (posted within 7 days)
[2026-01-09T00:45:39.988Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, Salesforce at brex
[2026-01-09T00:45:39.988Z] [BOT] ⏭️  Skipping duplicate: JID_19fd3815 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
📬 Found 10 new jobs (10 already posted)...
[2026-01-09T00:45:39.988Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-09T00:45:39.988Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-09T00:45:39.989Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-09T00:45:39.989Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T00:45:39.996Z] [BOT] 📌 Posting 3 jobs to #🩺・healthcare-jobs
[2026-01-09T00:45:39.996Z] [BOT] 📍 [ROUTING] "Advanced Practice Provider - Aprn or PA - Medical Informatics" @ ORG_0f4848d3ing Health
[2026-01-09T00:45:39.996Z] [BOT] Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-09T00:45:40.018Z] [BOT ERROR] (node:3346) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T00:45:40.231Z] [BOT] ✅ Created forum post: 🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health in #🩺・healthcare-jobs
[2026-01-09T00:45:40.232Z] [BOT] ✅ Industry: Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health
[2026-01-09T00:45:42.097Z] [BOT] ✅ Created forum post: 🏢 Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health in #💻・remote-usa
[2026-01-09T00:45:42.097Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T00:45:43.598Z] [BOT] 💾 Marked as posted: Advanced Practice Provider - Aprn or PA - Medical Informatics @ ORG_0f4848d3ing Health (instance #1)
[2026-01-09T00:45:43.598Z] [BOT] 💾 BEFORE ARCHIVING: 1487 jobs in database
[2026-01-09T00:45:43.600Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T00:45:43.604Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-09T00:45:43.604Z] [BOT] ✅ Archiving complete: 7 archived, 1480 active
[2026-01-09T00:45:43.616Z] [BOT] 💾 Saved posted_jobs.json: 1480 active jobs
[2026-01-09T00:45:43.616Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T00:45:43.616Z] [BOT] 📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
[2026-01-09T00:45:43.616Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-09T00:45:43.946Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst @ ORG_eae683eb in #🩺・healthcare-jobs
[2026-01-09T00:45:43.946Z] [BOT] ✅ Industry: Geospatial Analyst @ ORG_eae683eb
[2026-01-09T00:45:45.655Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst @ ORG_eae683eb in #💻・remote-usa
[2026-01-09T00:45:45.655Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T00:45:47.157Z] [BOT] 💾 Marked as posted: Geospatial Analyst @ ORG_eae683eb (instance #1)
[2026-01-09T00:45:47.157Z] [BOT] 💾 BEFORE ARCHIVING: 1481 jobs in database
[2026-01-09T00:45:47.158Z] [BOT] ✅ No jobs to archive (all 1481 jobs within 7-day window)
[2026-01-09T00:45:47.168Z] [BOT] 💾 Saved posted_jobs.json: 1481 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:45:47.168Z] [BOT] 📍 [ROUTING] "Atmospheric Scientist – Associate or Mid-Level" @ ORG_b344d80e Boeing Company
[2026-01-09T00:45:47.168Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-09T00:45:47.398Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #🩺・healthcare-jobs
[2026-01-09T00:45:47.398Z] [BOT] ✅ Industry: Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company
[2026-01-09T00:45:49.116Z] [BOT] ✅ Created forum post: 🏢 Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company in #💻・remote-usa
[2026-01-09T00:45:49.116Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T00:45:50.618Z] [BOT] 💾 Marked as posted: Atmospheric Scientist – Associate or Mid-Level @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-09T00:45:50.618Z] [BOT] 💾 BEFORE ARCHIVING: 1482 jobs in database
[2026-01-09T00:45:50.619Z] [BOT] ✅ No jobs to archive (all 1482 jobs within 7-day window)
[2026-01-09T00:45:50.629Z] [BOT] 💾 Saved posted_jobs.json: 1482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:45:53.630Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-09T00:45:53.631Z] [BOT] 📍 [ROUTING] "Manager, Account Executive - Enterprise Sales " @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T00:45:53.923Z] [BOT] ✅ Created forum post: 🏢 Manager, Account Executive - Enterprise Sales  @ anthropic in #💲・sales-jobs
[2026-01-09T00:45:53.923Z] [BOT] ✅ Industry: Manager, Account Executive - Enterprise Sales  @ anthropic
[2026-01-09T00:45:55.645Z] [BOT] ✅ Created forum post: 🏢 Manager, Account Executive - Enterprise Sales  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T00:45:57.146Z] [BOT] 💾 Marked as posted: Manager, Account Executive - Enterprise Sales  @ anthropic (instance #1)
[2026-01-09T00:45:57.146Z] [BOT] 💾 BEFORE ARCHIVING: 1483 jobs in database
[2026-01-09T00:45:57.148Z] [BOT] ✅ No jobs to archive (all 1483 jobs within 7-day window)
[2026-01-09T00:45:57.159Z] [BOT] 💾 Saved posted_jobs.json: 1483 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:46:00.160Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-09T00:46:00.160Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T00:46:00.469Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Java Developer @ ORG_c910d474 Dynamics Information Technology
[2026-01-09T00:46:02.268Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
[2026-01-09T00:46:02.268Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T00:46:03.770Z] [BOT] 💾 Marked as posted: Java Developer @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-09T00:46:03.770Z] [BOT] 💾 BEFORE ARCHIVING: 1484 jobs in database
[2026-01-09T00:46:03.771Z] [BOT] ✅ No jobs to archive (all 1484 jobs within 7-day window)
[2026-01-09T00:46:03.782Z] [BOT] 💾 Saved posted_jobs.json: 1484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:46:03.782Z] [BOT] 📍 [ROUTING] "Android Software Engineer" @ ORG_bfe7eb5a
[2026-01-09T00:46:03.782Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T00:46:03.994Z] [BOT] ✅ Created forum post: 🏢 Android Software Engineer @ ORG_bfe7eb5a in #💻・tech-jobs
  ✅ Industry: Android Software Engineer @ ORG_bfe7eb5a
[2026-01-09T00:46:05.830Z] [BOT] ✅ Created forum post: 🏢 Android Software Engineer @ ORG_bfe7eb5a in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T00:46:07.331Z] [BOT] 💾 Marked as posted: Android Software Engineer @ ORG_bfe7eb5a (instance #1)
[2026-01-09T00:46:07.332Z] [BOT] 💾 BEFORE ARCHIVING: 1485 jobs in database
[2026-01-09T00:46:07.333Z] [BOT] ✅ No jobs to archive (all 1485 jobs within 7-day window)
[2026-01-09T00:46:07.343Z] [BOT] 💾 Saved posted_jobs.json: 1485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:46:07.343Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws - Node" @ ORG_b344d80e Travelers Companies
[2026-01-09T00:46:07.343Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T00:46:07.836Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies
[2026-01-09T00:46:09.637Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T00:46:11.138Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Aws - Node @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-09T00:46:11.139Z] [BOT] 💾 BEFORE ARCHIVING: 1486 jobs in database
[2026-01-09T00:46:11.139Z] [BOT] ✅ No jobs to archive (all 1486 jobs within 7-day window)
[2026-01-09T00:46:11.149Z] [BOT] 💾 Saved posted_jobs.json: 1486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:46:11.149Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - .Net - Node.js','React" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
[2026-01-09T00:46:11.149Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T00:46:11.542Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies
[2026-01-09T00:46:13.333Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T00:46:14.834Z] [BOT] 💾 Marked as posted: Software Engineer 1 - .Net - Node.js','React @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-09T00:46:14.834Z] [BOT] 💾 BEFORE ARCHIVING: 1487 jobs in database
[2026-01-09T00:46:14.835Z] [BOT] ✅ No jobs to archive (all 1487 jobs within 7-day window)
[2026-01-09T00:46:14.844Z] [BOT] 💾 Saved posted_jobs.json: 1487 active jobs
[2026-01-09T00:46:14.844Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T00:46:17.845Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-09T00:46:17.845Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Aws - Python" @ ORG_b344d80e Travelers Companies
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-09T00:46:17.845Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-09T00:46:18.075Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies in #🤖・ai-jobs
[2026-01-09T00:46:18.076Z] [BOT] ✅ Industry: Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies
[2026-01-09T00:46:19.788Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies in #💻・remote-usa
[2026-01-09T00:46:19.789Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-09T00:46:21.290Z] [BOT] 💾 Marked as posted: Data Engineer 1 - Aws - Python @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-09T00:46:21.290Z] [BOT] 💾 BEFORE ARCHIVING: 1488 jobs in database
[2026-01-09T00:46:21.291Z] [BOT] ✅ No jobs to archive (all 1488 jobs within 7-day window)
[2026-01-09T00:46:21.302Z] [BOT] 💾 Saved posted_jobs.json: 1488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:46:21.303Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Direct Issuance" @ ORG_a10ae009
[2026-01-09T00:46:21.303Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-09T00:46:21.669Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🤖・ai-jobs
[2026-01-09T00:46:21.669Z] [BOT] ✅ Industry: Software Engineer 1 - Direct Issuance @ ORG_a10ae009
[2026-01-09T00:46:23.571Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Direct Issuance @ ORG_a10ae009 in #🦢・los-angeles
[2026-01-09T00:46:23.571Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-09T00:46:25.072Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Direct Issuance @ ORG_a10ae009 (instance #1)
[2026-01-09T00:46:25.072Z] [BOT] 💾 BEFORE ARCHIVING: 1489 jobs in database
[2026-01-09T00:46:25.074Z] [BOT] ✅ No jobs to archive (all 1489 jobs within 7-day window)
[2026-01-09T00:46:25.084Z] [BOT] 💾 Saved posted_jobs.json: 1489 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T00:46:28.085Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-09T00:46:28.085Z] [BOT] ⏭️  Skipping duplicate: JID_483d9ea9 (posted within 7 days)
[2026-01-09T00:46:28.085Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
[2026-01-09T00:46:28.086Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
[2026-01-09T00:46:28.086Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
[2026-01-09T00:46:28.086Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
[2026-01-09T00:46:28.086Z] [BOT] ⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
[2026-01-09T00:46:28.086Z] [BOT] ⏭️  Skipping duplicate: JID_d37cac04-_r-48615 (posted within 7 days)
[2026-01-09T00:46:28.086Z] [BOT] ⏭️  Skipping duplicate: JID_016b7cfb-_r-48474 (posted within 7 days)
[2026-01-09T00:46:28.086Z] [BOT] ⏭️  Skipping duplicate: JID_b3c53ec8 (posted within 7 days)
[2026-01-09T00:46:28.097Z] [BOT] ✅ Loaded pending queue: 201 total (181 pending, 20 enriched, 0 posted)
[2026-01-09T00:46:28.116Z] [BOT] ✅ Saved pending queue: 201 total (181 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-09T00:46:28.116Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T00:46:28.173Z] [BOT] 📂 Loaded 2458 existing routing entries
[2026-01-09T00:46:28.231Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-09T00:46:28.231Z] [BOT] Total entries: 2468
   Timestamp: 2026-01-09T00:46:28.219Z
[2026-01-09T00:46:28.232Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T00:46:28.232Z] [BOT] Total attempts: 30
   Successful: 20
   Failed: 0
   Skipped: 10
[2026-01-09T00:46:28.232Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
[2026-01-09T00:46:28.232Z] [BOT] 1. #💻・remote-usa: 7 posts
     2. #💻・tech-jobs: 4 posts
     3. #🩺・healthcare-jobs: 3 posts
     4. #🌉・san-francisco: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-09T00:46:28.232Z] [BOT] [STATS] Channel stats saved
[2026-01-09T00:46:30.246Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3346) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*