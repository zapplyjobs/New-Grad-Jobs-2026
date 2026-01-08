# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T00:46:32.256Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 7
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T00:45:41.194Z] ========================================
[2026-01-08T00:45:41.196Z] Discord Bot Execution Log
[2026-01-08T00:45:41.196Z] Environment: GitHub Actions
[2026-01-08T00:45:41.196Z] Node Version: v20.19.6
[2026-01-08T00:45:41.196Z] ========================================
[2026-01-08T00:45:41.196Z] Environment Variables Check:
[2026-01-08T00:45:41.197Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T00:45:41.197Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.197Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T00:45:41.197Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T00:45:41.197Z] 
Multi-Channel Configuration:
[2026-01-08T00:45:41.197Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.197Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.197Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.197Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.197Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.197Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.198Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.198Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.198Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T00:45:41.198Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T00:45:41.198Z] 
Data Files Check:
[2026-01-08T00:45:41.198Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57391 bytes)
[2026-01-08T00:45:41.204Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 741449 bytes)
[2026-01-08T00:45:41.204Z] 
========================================
[2026-01-08T00:45:41.204Z] Starting Enhanced Discord Bot...
[2026-01-08T00:45:41.204Z] ========================================
[2026-01-08T00:45:41.741Z] [BOT] ✅ Loaded V2 database: 1443 jobs
[2026-01-08T00:45:42.428Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T00:45:42.428Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T00:45:42.428Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T00:45:42.436Z] [BOT] ✅ Loaded pending queue: 134 total (114 pending, 20 enriched, 0 posted)
[2026-01-08T00:45:42.436Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Analyst at CharterUP
[2026-01-08T00:45:42.438Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-08T00:45:42.438Z] [BOT] ⏭️ Skipping already posted: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-08T00:45:42.439Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8484 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b1357d at EXL
[2026-01-08T00:45:42.439Z] [BOT] ⏭️  Skipping duplicate: JID_ca3703ca (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
[2026-01-08T00:45:42.439Z] [BOT] ⏭️  Skipping duplicate: JID_e8ab3cec-i_jr-85444 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Ticketmaster
[2026-01-08T00:45:42.439Z] [BOT] ⏭️  Skipping duplicate: JID_15ed4184-_jr2505608-1 (posted within 7 days)
⏭️ Skipping already posted: Early Career - Gen AI - Data Science Analyst at AIG
⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210695999 (posted within 7 days)
⏭️ Skipping already posted: Mydata Reporting Analytics Solutions - Associate at JP Morgan Chase
⏭️  Skipping duplicate: JID_7d5ce5e4 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer in Test Prisma Access - AI Automation Engineer at Palo Alto Networks
[2026-01-08T00:45:42.439Z] [BOT] 📬 Found 13 new jobs (7 already posted)...
[2026-01-08T00:45:42.439Z] [BOT] 📋 After blacklist filter: 13 jobs (0 blacklisted)
[2026-01-08T00:45:42.440Z] [BOT] 📋 After data quality filter: 13 jobs (0 invalid)
[2026-01-08T00:45:42.440Z] [BOT] 📋 After multi-location grouping: 13 unique jobs to post
[2026-01-08T00:45:42.441Z] [BOT] ⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T00:45:42.445Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-08T00:45:42.445Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_360a4ee5
[2026-01-08T00:45:42.446Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-08T00:45:42.450Z] [BOT ERROR] (node:3457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T00:45:42.621Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_360a4ee5 in #📈・JID_fb739488
[2026-01-08T00:45:42.622Z] [BOT] ✅ Industry: Data Analyst @ ORG_360a4ee5
[2026-01-08T00:45:44.453Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_360a4ee5 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T00:45:45.955Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_360a4ee5 (instance #1)
[2026-01-08T00:45:45.955Z] [BOT] 💾 BEFORE ARCHIVING: 1444 jobs in database
[2026-01-08T00:45:45.956Z] [BOT] ✅ No jobs to archive (all 1444 jobs within 7-day window)
[2026-01-08T00:45:45.970Z] [BOT] 💾 Saved posted_jobs.json: 1444 active jobs
[2026-01-08T00:45:45.970Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:45:48.971Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-08T00:45:48.971Z] [BOT] 📍 [ROUTING] "Principal Engineer" @ ORG_cdfeb1f5
[2026-01-08T00:45:48.972Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:45:49.178Z] [BOT] ✅ Created forum post: 🏢 Principal Engineer @ ORG_cdfeb1f5 in #💻・tech-jobs
[2026-01-08T00:45:49.179Z] [BOT] ✅ Industry: Principal Engineer @ ORG_cdfeb1f5
[2026-01-08T00:45:50.866Z] [BOT] ✅ Created forum post: 🏢 Principal Engineer @ ORG_cdfeb1f5 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-08T00:45:52.367Z] [BOT] 💾 Marked as posted: Principal Engineer @ ORG_cdfeb1f5 (instance #1)
[2026-01-08T00:45:52.367Z] [BOT] 💾 BEFORE ARCHIVING: 1445 jobs in database
[2026-01-08T00:45:52.368Z] [BOT] ✅ No jobs to archive (all 1445 jobs within 7-day window)
[2026-01-08T00:45:52.378Z] [BOT] 💾 Saved posted_jobs.json: 1445 active jobs
[2026-01-08T00:45:52.378Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:45:52.379Z] [BOT] 📍 [ROUTING] "C++ Software Engineer" @ ORG_316d43c0 Design Systems
[2026-01-08T00:45:52.379Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:45:52.524Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems in #💻・tech-jobs
  ✅ Industry: C++ Software Engineer @ ORG_316d43c0 Design Systems
[2026-01-08T00:45:54.283Z] [BOT] ✅ Created forum post: 🏢 C++ Software Engineer @ ORG_316d43c0 Design Systems in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-08T00:45:55.783Z] [BOT] 💾 Marked as posted: C++ Software Engineer @ ORG_316d43c0 Design Systems (instance #1)
[2026-01-08T00:45:55.783Z] [BOT] 💾 BEFORE ARCHIVING: 1446 jobs in database
[2026-01-08T00:45:55.784Z] [BOT] ✅ No jobs to archive (all 1446 jobs within 7-day window)
[2026-01-08T00:45:55.794Z] [BOT] 💾 Saved posted_jobs.json: 1446 active jobs
[2026-01-08T00:45:55.794Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:45:55.794Z] [BOT] 📍 [ROUTING] "Quality Engineer - Principal Quality Engineer" @ ORG_f3f2248d Grumman
[2026-01-08T00:45:55.794Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:45:56.228Z] [BOT] ✅ Created forum post: 🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman
[2026-01-08T00:45:57.865Z] [BOT] ✅ Created forum post: 🏢 Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T00:45:59.366Z] [BOT] 💾 Marked as posted: Quality Engineer - Principal Quality Engineer @ ORG_f3f2248d Grumman (instance #1)
[2026-01-08T00:45:59.366Z] [BOT] 💾 BEFORE ARCHIVING: 1447 jobs in database
[2026-01-08T00:45:59.367Z] [BOT] ✅ No jobs to archive (all 1447 jobs within 7-day window)
[2026-01-08T00:45:59.377Z] [BOT] 💾 Saved posted_jobs.json: 1447 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:45:59.378Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Builder Frameworks" @ ORG_a731a58c
   Category: TECH (matched: "software")
[2026-01-08T00:45:59.378Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:45:59.618Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Builder Frameworks @ ORG_a731a58c in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Builder Frameworks @ ORG_a731a58c
[2026-01-08T00:46:01.389Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Builder Frameworks @ ORG_a731a58c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-08T00:46:02.890Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Builder Frameworks @ ORG_a731a58c (instance #1)
[2026-01-08T00:46:02.891Z] [BOT] 💾 BEFORE ARCHIVING: 1448 jobs in database
[2026-01-08T00:46:02.892Z] [BOT] ✅ No jobs to archive (all 1448 jobs within 7-day window)
[2026-01-08T00:46:02.901Z] [BOT] 💾 Saved posted_jobs.json: 1448 active jobs
[2026-01-08T00:46:02.901Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:46:02.902Z] [BOT] 📍 [ROUTING] "Associate Software Engineer 1" @ ORG_b39ff83a
[2026-01-08T00:46:02.902Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:46:03.038Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer 1 @ ORG_b39ff83a in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer 1 @ ORG_b39ff83a
[2026-01-08T00:46:04.971Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer 1 @ ORG_b39ff83a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T00:46:06.472Z] [BOT] 💾 Marked as posted: Associate Software Engineer 1 @ ORG_b39ff83a (instance #1)
[2026-01-08T00:46:06.472Z] [BOT] 💾 BEFORE ARCHIVING: 1449 jobs in database
[2026-01-08T00:46:06.473Z] [BOT] ✅ No jobs to archive (all 1449 jobs within 7-day window)
[2026-01-08T00:46:06.482Z] [BOT] 💾 Saved posted_jobs.json: 1449 active jobs
[2026-01-08T00:46:06.482Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:46:06.483Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_3073424b
[2026-01-08T00:46:06.483Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T00:46:06.942Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_3073424b in #💻・tech-jobs
[2026-01-08T00:46:06.942Z] [BOT] ✅ Industry: Software Engineer @ ORG_3073424b
[2026-01-08T00:46:08.691Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_3073424b in #🗽・new-york
[2026-01-08T00:46:08.691Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-08T00:46:10.191Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_3073424b (instance #1)
[2026-01-08T00:46:10.191Z] [BOT] 💾 BEFORE ARCHIVING: 1450 jobs in database
[2026-01-08T00:46:10.192Z] [BOT] ✅ No jobs to archive (all 1450 jobs within 7-day window)
[2026-01-08T00:46:10.202Z] [BOT] 💾 Saved posted_jobs.json: 1450 active jobs
[2026-01-08T00:46:10.203Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T00:46:13.202Z] [BOT] 📌 Posting 2 jobs to #🩺・healthcare-jobs
[2026-01-08T00:46:13.203Z] [BOT] 📍 [ROUTING] "SAP Analyst" @ ORG_6cd9e83c
[2026-01-08T00:46:13.203Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-08T00:46:13.457Z] [BOT] ✅ Created forum post: 🏢 SAP Analyst @ ORG_6cd9e83c in #🩺・healthcare-jobs
[2026-01-08T00:46:13.457Z] [BOT] ✅ Industry: SAP Analyst @ ORG_6cd9e83c
[2026-01-08T00:46:15.202Z] [BOT] ✅ Created forum post: 🏢 SAP Analyst @ ORG_6cd9e83c in #🗽・new-york
[2026-01-08T00:46:15.203Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-08T00:46:16.703Z] [BOT] 💾 Marked as posted: SAP Analyst @ ORG_6cd9e83c (instance #1)
[2026-01-08T00:46:16.703Z] [BOT] 💾 BEFORE ARCHIVING: 1451 jobs in database
[2026-01-08T00:46:16.704Z] [BOT] ✅ No jobs to archive (all 1451 jobs within 7-day window)
[2026-01-08T00:46:16.715Z] [BOT] 💾 Saved posted_jobs.json: 1451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:46:16.715Z] [BOT] 📍 [ROUTING] "Geospatial Analyst" @ ORG_eae683eb
   Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-08T00:46:16.884Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst @ ORG_eae683eb in #🩺・healthcare-jobs
  ✅ Industry: Geospatial Analyst @ ORG_eae683eb
[2026-01-08T00:46:18.511Z] [BOT] ✅ Created forum post: 🏢 Geospatial Analyst @ ORG_eae683eb in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T00:46:20.012Z] [BOT] 💾 Marked as posted: Geospatial Analyst @ ORG_eae683eb (instance #1)
[2026-01-08T00:46:20.012Z] [BOT] 💾 BEFORE ARCHIVING: 1452 jobs in database
[2026-01-08T00:46:20.013Z] [BOT] ✅ No jobs to archive (all 1452 jobs within 7-day window)
[2026-01-08T00:46:20.023Z] [BOT] 💾 Saved posted_jobs.json: 1452 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:46:23.024Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T00:46:23.024Z] [BOT] 📍 [ROUTING] "Software Engineer - Artificial Intelligence" @ ORG_b344d80e Boeing Company
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T00:46:23.024Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-08T00:46:23.272Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company
[2026-01-08T00:46:24.965Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-08T00:46:26.466Z] [BOT] 💾 Marked as posted: Software Engineer - Artificial Intelligence @ ORG_b344d80e Boeing Company (instance #1)
[2026-01-08T00:46:26.466Z] [BOT] 💾 BEFORE ARCHIVING: 1453 jobs in database
[2026-01-08T00:46:26.467Z] [BOT] ✅ No jobs to archive (all 1453 jobs within 7-day window)
[2026-01-08T00:46:26.477Z] [BOT] 💾 Saved posted_jobs.json: 1453 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T00:46:29.477Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-08T00:46:29.477Z] [BOT] ⏭️  Skipping duplicate: JID_49021814 (posted within 7 days)
[2026-01-08T00:46:29.477Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
[2026-01-08T00:46:29.478Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
[2026-01-08T00:46:29.478Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
[2026-01-08T00:46:29.478Z] [BOT] ⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
[2026-01-08T00:46:29.478Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
[2026-01-08T00:46:29.478Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
[2026-01-08T00:46:29.478Z] [BOT] ⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
[2026-01-08T00:46:29.479Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ed66d9b6-intelligence_jr2025489368 (posted within 7 days)
⏭️  Skipping duplicate: JID_6730b1ec (posted within 7 days)
[2026-01-08T00:46:29.486Z] [BOT] ✅ Loaded pending queue: 134 total (114 pending, 20 enriched, 0 posted)
[2026-01-08T00:46:29.495Z] [BOT] ✅ Saved pending queue: 134 total (114 pending, 10 enriched, 10 posted)
[2026-01-08T00:46:29.495Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T00:46:29.546Z] [BOT] 📂 Loaded 2384 existing routing entries
[2026-01-08T00:46:29.602Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2394
   Timestamp: 2026-01-08T00:46:29.591Z
[2026-01-08T00:46:29.602Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T00:46:29.602Z] [BOT] Total attempts: 27
[2026-01-08T00:46:29.603Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 7
[2026-01-08T00:46:29.603Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-08T00:46:29.603Z] [BOT] Total posts: 20
   Channels used: 10
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🗽・new-york: 3 posts
     3. #💻・remote-usa: 3 posts
     4. #🩺・healthcare-jobs: 2 posts
[2026-01-08T00:46:29.603Z] [BOT] 5. #📈・JID_fb739488: 1 posts
[2026-01-08T00:46:29.603Z] [BOT] [STATS] Channel stats saved
[2026-01-08T00:46:31.615Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*