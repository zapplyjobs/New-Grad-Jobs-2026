# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T17:44:13.280Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T17:43:32.343Z] ========================================
[2026-01-07T17:43:32.345Z] Discord Bot Execution Log
[2026-01-07T17:43:32.345Z] Environment: GitHub Actions
[2026-01-07T17:43:32.345Z] Node Version: v20.19.6
[2026-01-07T17:43:32.345Z] ========================================
[2026-01-07T17:43:32.345Z] Environment Variables Check:
[2026-01-07T17:43:32.345Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T17:43:32.345Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.345Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T17:43:32.345Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T17:43:32.345Z] 
Multi-Channel Configuration:
[2026-01-07T17:43:32.346Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T17:43:32.346Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T17:43:32.346Z] 
Data Files Check:
[2026-01-07T17:43:32.347Z] .github/data/new_jobs.json: ✅ Exists (10 items, 55398 bytes)
[2026-01-07T17:43:32.352Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 728977 bytes)
[2026-01-07T17:43:32.353Z] 
========================================
[2026-01-07T17:43:32.353Z] Starting Enhanced Discord Bot...
[2026-01-07T17:43:32.353Z] ========================================
[2026-01-07T17:43:32.878Z] [BOT] ✅ Loaded V2 database: 1421 jobs
[2026-01-07T17:43:34.132Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T17:43:34.132Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T17:43:34.132Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T17:43:34.139Z] [BOT] ✅ Loaded pending queue: 102 total (82 pending, 20 enriched, 0 posted)
[2026-01-07T17:43:34.139Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Environmental Programs Specialist at Oklahoma State Government
[2026-01-07T17:43:34.141Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
[2026-01-07T17:43:34.141Z] [BOT] ⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T17:43:34.141Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
[2026-01-07T17:43:34.142Z] [BOT] ⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
[2026-01-07T17:43:34.142Z] [BOT] ⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
[2026-01-07T17:43:34.142Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T17:43:34.142Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T17:43:34.142Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T17:43:34.142Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
[2026-01-07T17:43:34.143Z] [BOT] ⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T17:43:34.143Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T17:43:34.143Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
[2026-01-07T17:43:34.143Z] [BOT] ⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T17:43:34.143Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
[2026-01-07T17:43:34.144Z] [BOT] ⏭️  Skipping duplicate: JID_7c528e3c (posted within 7 days)
⏭️ Skipping already posted: Product Designer, Enterprise  at anthropic
📬 Found 6 new jobs (14 already posted)...
📋 After blacklist filter: 6 jobs (0 blacklisted)
📋 After data quality filter: 6 jobs (0 invalid)
[2026-01-07T17:43:34.144Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-07T17:43:34.144Z] [BOT] 📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T17:43:34.148Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-07T17:43:34.148Z] [BOT] 📍 [ROUTING] "Environmental Programs Specialist" @ ORG_c9c7c514 State Government
[2026-01-07T17:43:34.149Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-07T17:43:34.153Z] [BOT ERROR] (node:3274) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T17:43:34.464Z] [BOT] ✅ Created forum post: 🏢 Environmental Programs Specialist @ ORG_c9c7c514 State Government in #🩺・healthcare-jobs
[2026-01-07T17:43:34.464Z] [BOT] ✅ Industry: Environmental Programs Specialist @ ORG_c9c7c514 State Government
[2026-01-07T17:43:36.393Z] [BOT] ✅ Created forum post: 🏢 Environmental Programs Specialist @ ORG_c9c7c514 State Government in #💻・remote-usa
[2026-01-07T17:43:36.393Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-07T17:43:37.895Z] [BOT] 💾 Marked as posted: Environmental Programs Specialist @ ORG_c9c7c514 State Government (instance #1)
[2026-01-07T17:43:37.895Z] [BOT] 💾 BEFORE ARCHIVING: 1422 jobs in database
[2026-01-07T17:43:37.896Z] [BOT] ✅ No jobs to archive (all 1422 jobs within 7-day window)
[2026-01-07T17:43:37.909Z] [BOT] 💾 Saved posted_jobs.json: 1422 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:43:40.910Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-07T17:43:40.911Z] [BOT] 📍 [ROUTING] "Research Assistant in Geomorphology-GEOSCI" @ ORG_478e100e University
[2026-01-07T17:43:40.911Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-07T17:43:41.197Z] [BOT] ✅ Created forum post: 🏢 Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University in #📁・JID_e938df7b
[2026-01-07T17:43:41.198Z] [BOT] ✅ Industry: Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University
[2026-01-07T17:43:44.034Z] [BOT] ✅ Created forum post: 🏢 Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T17:43:45.535Z] [BOT] 💾 Marked as posted: Research Assistant in Geomorphology-GEOSCI @ ORG_478e100e University (instance #1)
[2026-01-07T17:43:45.535Z] [BOT] 💾 BEFORE ARCHIVING: 1423 jobs in database
[2026-01-07T17:43:45.536Z] [BOT] ✅ No jobs to archive (all 1423 jobs within 7-day window)
[2026-01-07T17:43:45.546Z] [BOT] 💾 Saved posted_jobs.json: 1423 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:43:48.547Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-07T17:43:48.549Z] [BOT] 📍 [ROUTING] "Postbaccalaureate Appointee" @ ORG_a867f63f National Laboratory
[2026-01-07T17:43:48.549Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-07T17:43:48.942Z] [BOT] ✅ Created forum post: 🏢 Postbaccalaureate Appointee @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
  ✅ Industry: Postbaccalaureate Appointee @ ORG_a867f63f National Laboratory
[2026-01-07T17:43:50.863Z] [BOT] ✅ Created forum post: 🏢 Postbaccalaureate Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
[2026-01-07T17:43:50.864Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-07T17:43:52.364Z] [BOT] 💾 Marked as posted: Postbaccalaureate Appointee @ ORG_a867f63f National Laboratory (instance #1)
[2026-01-07T17:43:52.365Z] [BOT] 💾 BEFORE ARCHIVING: 1424 jobs in database
[2026-01-07T17:43:52.366Z] [BOT] ✅ No jobs to archive (all 1424 jobs within 7-day window)
[2026-01-07T17:43:52.376Z] [BOT] 💾 Saved posted_jobs.json: 1424 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:43:52.377Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_bdc26476
[2026-01-07T17:43:52.377Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-07T17:43:52.674Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_bdc26476 in #🤖・ai-jobs
  ✅ Industry: GIS Analyst 1 @ ORG_bdc26476
[2026-01-07T17:43:54.528Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_bdc26476 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T17:43:56.030Z] [BOT] 💾 Marked as posted: GIS Analyst 1 @ ORG_bdc26476 (instance #1)
[2026-01-07T17:43:56.030Z] [BOT] 💾 BEFORE ARCHIVING: 1425 jobs in database
[2026-01-07T17:43:56.031Z] [BOT] ✅ No jobs to archive (all 1425 jobs within 7-day window)
[2026-01-07T17:43:56.041Z] [BOT] 💾 Saved posted_jobs.json: 1425 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:43:56.041Z] [BOT] 📍 [ROUTING] "BPO Application Support Health" @ ORG_0ee6cb3e Data
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-07T17:43:56.286Z] [BOT] ✅ Created forum post: 🏢 BPO Application Support Health @ ORG_0ee6cb3e Data in #🤖・ai-jobs
  ✅ Industry: BPO Application Support Health @ ORG_0ee6cb3e Data
[2026-01-07T17:43:58.399Z] [BOT] ✅ Created forum post: 🏢 BPO Application Support Health @ ORG_0ee6cb3e Data in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-07T17:43:59.901Z] [BOT] 💾 Marked as posted: BPO Application Support Health @ ORG_0ee6cb3e Data (instance #1)
[2026-01-07T17:43:59.901Z] [BOT] 💾 BEFORE ARCHIVING: 1426 jobs in database
[2026-01-07T17:43:59.902Z] [BOT] ✅ No jobs to archive (all 1426 jobs within 7-day window)
[2026-01-07T17:43:59.911Z] [BOT] 💾 Saved posted_jobs.json: 1426 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:44:02.912Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-07T17:44:02.913Z] [BOT] 📍 [ROUTING] "Entry-Level Data Analyst" @ ORG_30165398ing World
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-07T17:44:02.913Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-07T17:44:03.275Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Data Analyst @ ORG_30165398ing World in #📈・JID_fb739488
  ✅ Industry: Entry-Level Data Analyst @ ORG_30165398ing World
[2026-01-07T17:44:05.312Z] [BOT] ✅ Created forum post: 🏢 Entry-Level Data Analyst @ ORG_30165398ing World in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-07T17:44:06.813Z] [BOT] 💾 Marked as posted: Entry-Level Data Analyst @ ORG_30165398ing World (instance #1)
[2026-01-07T17:44:06.813Z] [BOT] 💾 BEFORE ARCHIVING: 1427 jobs in database
[2026-01-07T17:44:06.814Z] [BOT] ✅ No jobs to archive (all 1427 jobs within 7-day window)
[2026-01-07T17:44:06.830Z] [BOT] 💾 Saved posted_jobs.json: 1427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T17:44:09.829Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-07T17:44:09.830Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
[2026-01-07T17:44:09.830Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
[2026-01-07T17:44:09.830Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
[2026-01-07T17:44:09.835Z] [BOT] ✅ Loaded pending queue: 102 total (82 pending, 20 enriched, 0 posted)
[2026-01-07T17:44:09.845Z] [BOT] ✅ Saved pending queue: 102 total (82 pending, 14 enriched, 6 posted)
[2026-01-07T17:44:09.845Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T17:44:09.913Z] [BOT] 📂 Loaded 2357 existing routing entries
[2026-01-07T17:44:09.970Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2026-01-07T17:44:09.970Z] [BOT] Total entries: 2363
   Timestamp: 2026-01-07T17:44:09.959Z
[2026-01-07T17:44:09.971Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T17:44:09.971Z] [BOT] Total attempts: 26
   Successful: 12
   Failed: 0
   Skipped: 14
[2026-01-07T17:44:09.971Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-07T17:44:09.971Z] [BOT] Total posts: 12
   Channels used: 6
   Top channels:
     1. #💻・remote-usa: 4 posts
[2026-01-07T17:44:09.971Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #🌆・chicago: 2 posts
     4. #🩺・healthcare-jobs: 1 posts
     5. #📁・JID_e938df7b: 1 posts
[2026-01-07T17:44:09.972Z] [BOT] [STATS] Channel stats saved
[2026-01-07T17:44:11.984Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3274) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*