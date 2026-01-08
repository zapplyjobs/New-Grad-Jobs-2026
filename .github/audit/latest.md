# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T01:15:42.948Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 9
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T01:14:49.833Z] ========================================
[2026-01-08T01:14:49.835Z] Discord Bot Execution Log
[2026-01-08T01:14:49.835Z] Environment: GitHub Actions
[2026-01-08T01:14:49.835Z] Node Version: v20.19.6
[2026-01-08T01:14:49.835Z] ========================================
[2026-01-08T01:14:49.835Z] Environment Variables Check:
[2026-01-08T01:14:49.835Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T01:14:49.835Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.835Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T01:14:49.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T01:14:49.835Z] 
Multi-Channel Configuration:
[2026-01-08T01:14:49.836Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T01:14:49.836Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T01:14:49.836Z] 
Data Files Check:
[2026-01-08T01:14:49.837Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64540 bytes)
[2026-01-08T01:14:49.843Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 747601 bytes)
[2026-01-08T01:14:49.843Z] 
========================================
[2026-01-08T01:14:49.843Z] Starting Enhanced Discord Bot...
[2026-01-08T01:14:49.843Z] ========================================
[2026-01-08T01:14:50.373Z] [BOT] ✅ Loaded V2 database: 1453 jobs
[2026-01-08T01:14:51.049Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T01:14:51.049Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T01:14:51.049Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T01:14:51.057Z] [BOT] ✅ Loaded pending queue: 141 total (121 pending, 20 enriched, 0 posted)
[2026-01-08T01:14:51.057Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer 1 - Aws at The Travelers Companies
[2026-01-08T01:14:51.059Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
[2026-01-08T01:14:51.059Z] [BOT] ⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
[2026-01-08T01:14:51.059Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
[2026-01-08T01:14:51.059Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
[2026-01-08T01:14:51.059Z] [BOT] ⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
[2026-01-08T01:14:51.060Z] [BOT] ⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
[2026-01-08T01:14:51.060Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
[2026-01-08T01:14:51.060Z] [BOT] ⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
[2026-01-08T01:14:51.060Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ed66d9b6-intelligence_jr2025489368 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Artificial Intelligence at The Boeing Company
[2026-01-08T01:14:51.060Z] [BOT] ⏭️  Skipping duplicate: JID_6730b1ec (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Yext
[2026-01-08T01:14:51.060Z] [BOT] 📬 Found 11 new jobs (9 already posted)...
[2026-01-08T01:14:51.061Z] [BOT] 📋 After blacklist filter: 11 jobs (0 blacklisted)
[2026-01-08T01:14:51.061Z] [BOT] 📋 After data quality filter: 11 jobs (0 invalid)
[2026-01-08T01:14:51.062Z] [BOT] 📋 After multi-location grouping: 11 unique jobs to post
[2026-01-08T01:14:51.062Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T01:14:51.066Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-08T01:14:51.067Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
[2026-01-08T01:14:51.067Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T01:14:51.071Z] [BOT ERROR] (node:3437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T01:14:51.272Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies
[2026-01-08T01:14:53.119Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・remote-usa
[2026-01-08T01:14:53.119Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T01:14:54.620Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies (instance #1)
[2026-01-08T01:14:54.620Z] [BOT] 💾 BEFORE ARCHIVING: 1454 jobs in database
[2026-01-08T01:14:54.621Z] [BOT] ✅ No jobs to archive (all 1454 jobs within 7-day window)
[2026-01-08T01:14:54.635Z] [BOT] 💾 Saved posted_jobs.json: 1454 active jobs
[2026-01-08T01:14:54.635Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:14:54.636Z] [BOT] 📍 [ROUTING] "Corporate Bank Technology - Payments Initiation - Java Engineer" @ ORG_3d114b3a Bank
[2026-01-08T01:14:54.636Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T01:14:54.821Z] [BOT] ✅ Created forum post: 🏢 Corporate Bank Technology - Payments Initiation - Java Engineer @ ORG_3d114b3a Bank in #💻・tech-jobs
[2026-01-08T01:14:54.821Z] [BOT] ✅ Industry: Corporate Bank Technology - Payments Initiation - Java Engineer @ ORG_3d114b3a Bank
[2026-01-08T01:14:56.540Z] [BOT] ✅ Created forum post: 🏢 Corporate Bank Technology - Payments Initiation - Java Engineer @ ORG_3d114b3a Bank in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T01:14:58.040Z] [BOT] 💾 Marked as posted: Corporate Bank Technology - Payments Initiation - Java Engineer @ ORG_3d114b3a Bank (instance #1)
[2026-01-08T01:14:58.041Z] [BOT] 💾 BEFORE ARCHIVING: 1455 jobs in database
[2026-01-08T01:14:58.042Z] [BOT] ✅ No jobs to archive (all 1455 jobs within 7-day window)
[2026-01-08T01:14:58.051Z] [BOT] 💾 Saved posted_jobs.json: 1455 active jobs
[2026-01-08T01:14:58.051Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:14:58.052Z] [BOT] 📍 [ROUTING] "Software Engineer - Level - Space Systems" @ ORG_f3f2248d Grumman
[2026-01-08T01:14:58.052Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T01:14:59.813Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-08T01:14:59.813Z] [BOT] ✅ Industry: Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman
[2026-01-08T01:15:01.492Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman in #🦢・los-angeles
[2026-01-08T01:15:01.492Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-08T01:15:02.992Z] [BOT] 💾 Marked as posted: Software Engineer - Level - Space Systems @ ORG_f3f2248d Grumman (instance #1)
[2026-01-08T01:15:02.993Z] [BOT] 💾 BEFORE ARCHIVING: 1456 jobs in database
[2026-01-08T01:15:02.994Z] [BOT] ✅ No jobs to archive (all 1456 jobs within 7-day window)
[2026-01-08T01:15:03.004Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
[2026-01-08T01:15:03.004Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:03.005Z] [BOT] 📍 [ROUTING] "Software Engineer - Integrations" @ ORG_1243b6a5
[2026-01-08T01:15:03.005Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T01:15:03.283Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Integrations @ ORG_1243b6a5 in #💻・tech-jobs
[2026-01-08T01:15:03.283Z] [BOT] ✅ Industry: Software Engineer - Integrations @ ORG_1243b6a5
[2026-01-08T01:15:05.125Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Integrations @ ORG_1243b6a5 in #🗽・new-york
[2026-01-08T01:15:05.125Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-08T01:15:06.626Z] [BOT] 💾 Marked as posted: Software Engineer - Integrations @ ORG_1243b6a5 (instance #1)
[2026-01-08T01:15:06.626Z] [BOT] 💾 BEFORE ARCHIVING: 1457 jobs in database
[2026-01-08T01:15:06.627Z] [BOT] ✅ No jobs to archive (all 1457 jobs within 7-day window)
[2026-01-08T01:15:06.637Z] [BOT] 💾 Saved posted_jobs.json: 1457 active jobs
[2026-01-08T01:15:06.637Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:09.638Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-08T01:15:09.639Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Core Data" @ ORG_d9bc2c87
[2026-01-08T01:15:09.639Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T01:15:09.920Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Core Data @ ORG_d9bc2c87 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 - Core Data @ ORG_d9bc2c87
[2026-01-08T01:15:11.614Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Core Data @ ORG_d9bc2c87 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T01:15:13.115Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Core Data @ ORG_d9bc2c87 (instance #1)
[2026-01-08T01:15:13.115Z] [BOT] 💾 BEFORE ARCHIVING: 1458 jobs in database
[2026-01-08T01:15:13.116Z] [BOT] ✅ No jobs to archive (all 1458 jobs within 7-day window)
[2026-01-08T01:15:13.125Z] [BOT] 💾 Saved posted_jobs.json: 1458 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:13.125Z] [BOT] 📍 [ROUTING] "AI/ML Engineer" @ ORG_e4e67255
[2026-01-08T01:15:13.125Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T01:15:13.489Z] [BOT] ✅ Created forum post: 🏢 AI/ML Engineer @ ORG_e4e67255 in #🤖・ai-jobs
  ✅ Industry: AI/ML Engineer @ ORG_e4e67255
[2026-01-08T01:15:15.187Z] [BOT] ✅ Created forum post: 🏢 AI/ML Engineer @ ORG_e4e67255 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-08T01:15:16.689Z] [BOT] 💾 Marked as posted: AI/ML Engineer @ ORG_e4e67255 (instance #1)
[2026-01-08T01:15:16.689Z] [BOT] 💾 BEFORE ARCHIVING: 1459 jobs in database
[2026-01-08T01:15:16.690Z] [BOT] ✅ No jobs to archive (all 1459 jobs within 7-day window)
[2026-01-08T01:15:16.701Z] [BOT] 💾 Saved posted_jobs.json: 1459 active jobs
[2026-01-08T01:15:16.701Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:16.701Z] [BOT] 📍 [ROUTING] "Early Career Talent - Data Engineer" @ ORG_d7d2f0ff Digital
[2026-01-08T01:15:16.702Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-08T01:15:16.896Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital in #🤖・ai-jobs
[2026-01-08T01:15:16.896Z] [BOT] ✅ Industry: Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital
[2026-01-08T01:15:18.602Z] [BOT] ✅ Created forum post: 🏢 Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital in #🌉・san-francisco
[2026-01-08T01:15:18.602Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T01:15:20.103Z] [BOT] 💾 Marked as posted: Early Career Talent - Data Engineer @ ORG_d7d2f0ff Digital (instance #1)
[2026-01-08T01:15:20.103Z] [BOT] 💾 BEFORE ARCHIVING: 1460 jobs in database
[2026-01-08T01:15:20.104Z] [BOT] ✅ No jobs to archive (all 1460 jobs within 7-day window)
[2026-01-08T01:15:20.113Z] [BOT] 💾 Saved posted_jobs.json: 1460 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:23.115Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-08T01:15:23.116Z] [BOT] 📍 [ROUTING] "Associate Game Designer - Technical - Contingent" @ ORG_55030fed
[2026-01-08T01:15:23.116Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-08T01:15:23.333Z] [BOT] ✅ Created forum post: 🏢 Associate Game Designer - Technical - Contingent @ ORG_55030fed in #🩺・healthcare-jobs
[2026-01-08T01:15:23.333Z] [BOT] ✅ Industry: Associate Game Designer - Technical - Contingent @ ORG_55030fed
[2026-01-08T01:15:25.098Z] [BOT] ✅ Created forum post: 🏢 Associate Game Designer - Technical - Contingent @ ORG_55030fed in #🦢・los-angeles
[2026-01-08T01:15:25.098Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-08T01:15:26.600Z] [BOT] 💾 Marked as posted: Associate Game Designer - Technical - Contingent @ ORG_55030fed (instance #1)
[2026-01-08T01:15:26.600Z] [BOT] 💾 BEFORE ARCHIVING: 1461 jobs in database
[2026-01-08T01:15:26.601Z] [BOT] ✅ No jobs to archive (all 1461 jobs within 7-day window)
[2026-01-08T01:15:26.613Z] [BOT] 💾 Saved posted_jobs.json: 1461 active jobs
[2026-01-08T01:15:26.613Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:29.614Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-08T01:15:29.614Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ ORG_49005fd1
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-08T01:15:29.841Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ ORG_49005fd1 in #📈・JID_fb739488
  ✅ Industry: Associate Technical Consultant @ ORG_49005fd1
[2026-01-08T01:15:31.537Z] [BOT] ✅ Created forum post: 🏢 Associate Technical Consultant @ ORG_49005fd1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T01:15:33.038Z] [BOT] 💾 Marked as posted: Associate Technical Consultant @ ORG_49005fd1 (instance #1)
[2026-01-08T01:15:33.038Z] [BOT] 💾 BEFORE ARCHIVING: 1462 jobs in database
[2026-01-08T01:15:33.039Z] [BOT] ✅ No jobs to archive (all 1462 jobs within 7-day window)
[2026-01-08T01:15:33.051Z] [BOT] 💾 Saved posted_jobs.json: 1462 active jobs
[2026-01-08T01:15:33.051Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:33.051Z] [BOT] 📍 [ROUTING] "Marketing Science Associate Analyst" @ ORG_427dd296 Mass
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-08T01:15:33.051Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-08T01:15:33.302Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Associate Analyst @ ORG_427dd296 Mass in #📈・JID_fb739488
  ✅ Industry: Marketing Science Associate Analyst @ ORG_427dd296 Mass
[2026-01-08T01:15:35.138Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Associate Analyst @ ORG_427dd296 Mass in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-08T01:15:36.641Z] [BOT] 💾 Marked as posted: Marketing Science Associate Analyst @ ORG_427dd296 Mass (instance #1)
[2026-01-08T01:15:36.641Z] [BOT] 💾 BEFORE ARCHIVING: 1463 jobs in database
[2026-01-08T01:15:36.642Z] [BOT] ✅ No jobs to archive (all 1463 jobs within 7-day window)
[2026-01-08T01:15:36.651Z] [BOT] 💾 Saved posted_jobs.json: 1463 active jobs
[2026-01-08T01:15:36.652Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T01:15:39.652Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-08T01:15:39.653Z] [BOT] ⏭️  Skipping duplicate: JID_b1904fca-_r-48456 (posted within 7 days)
[2026-01-08T01:15:39.653Z] [BOT] ⏭️  Skipping duplicate: JID_744551aa-etsy_careers-JID_e1810102-data_jr5236 (posted within 7 days)
[2026-01-08T01:15:39.654Z] [BOT] ⏭️  Skipping duplicate: JID_dcc70510 (posted within 7 days)
⏭️  Skipping duplicate: JID_60fbf9d1-engineer_r10000621 (posted within 7 days)
⏭️  Skipping duplicate: JID_08425beb-associate_r0414615-3 (posted within 7 days)
⏭️  Skipping duplicate: JID_2d0e01cf (posted within 7 days)
[2026-01-08T01:15:39.654Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
[2026-01-08T01:15:39.654Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
[2026-01-08T01:15:39.659Z] [BOT] ✅ Loaded pending queue: 141 total (121 pending, 20 enriched, 0 posted)
[2026-01-08T01:15:39.672Z] [BOT] ✅ Saved pending queue: 141 total (121 pending, 10 enriched, 10 posted)
[2026-01-08T01:15:39.672Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T01:15:39.734Z] [BOT] 📂 Loaded 2394 existing routing entries
[2026-01-08T01:15:39.789Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-08T01:15:39.789Z] [BOT] New entries: 10
   Total entries: 2404
   Timestamp: 2026-01-08T01:15:39.777Z
[2026-01-08T01:15:39.789Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T01:15:39.790Z] [BOT] Total attempts: 29
   Successful: 20
   Failed: 0
   Skipped: 9
[2026-01-08T01:15:39.790Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
[2026-01-08T01:15:39.790Z] [BOT] Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
     3. #🦢・los-angeles: 3 posts
[2026-01-08T01:15:39.790Z] [BOT] 4. #🤖・ai-jobs: 3 posts
     5. #🗽・new-york: 2 posts
[2026-01-08T01:15:39.790Z] [BOT] [STATS] Channel stats saved
[2026-01-08T01:15:41.803Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*