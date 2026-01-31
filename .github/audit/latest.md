# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T21:58:35.368Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T21:58:01.770Z] ========================================
[2026-01-31T21:58:01.771Z] Discord Bot Execution Log
[2026-01-31T21:58:01.771Z] Environment: GitHub Actions
[2026-01-31T21:58:01.771Z] Node Version: v20.20.0
[2026-01-31T21:58:01.772Z] ========================================
[2026-01-31T21:58:01.772Z] Environment Variables Check:
[2026-01-31T21:58:01.772Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T21:58:01.772Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T21:58:01.772Z] 
Multi-Channel Configuration:
[2026-01-31T21:58:01.772Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.772Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T21:58:01.773Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T21:58:01.773Z] 
Data Files Check:
[2026-01-31T21:58:01.774Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T21:58:01.830Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8393443 bytes)
[2026-01-31T21:58:01.830Z] 
========================================
[2026-01-31T21:58:01.830Z] Starting Enhanced Discord Bot...
[2026-01-31T21:58:01.830Z] ========================================
[2026-01-31T21:58:02.333Z] [BOT] ✅ Loaded V2 database: 1467 jobs
[2026-01-31T21:58:03.077Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T21:58:03.077Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T21:58:03.078Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T21:58:03.245Z] [BOT] ✅ Loaded pending queue: 2951 total (1454 pending, 50 enriched, 1447 posted)
[2026-01-31T21:58:03.245Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T21:58:03.245Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:58:03.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T21:58:03.246Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T21:58:03.247Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:58:03.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T21:58:03.247Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T21:58:03.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T21:58:03.248Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T21:58:03.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T21:58:03.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-31T21:58:03.249Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T21:58:03.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T21:58:03.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T21:58:03.249Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T21:58:03.250Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T21:58:03.250Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T21:58:03.250Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T21:58:03.250Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T21:58:03.250Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T21:58:03.251Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T21:58:03.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T21:58:03.251Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T21:58:03.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T21:58:03.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T21:58:03.251Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T21:58:03.259Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T21:58:03.259Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T21:58:03.259Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T21:58:03.260Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-31T21:58:03.260Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T21:58:03.264Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T21:58:03.264Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Search Ads Technology" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T21:58:03.264Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:58:03.281Z] [BOT ERROR] (node:2842) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T21:58:03.494Z] [BOT] ✅ Posted message: Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T21:58:03.494Z] [BOT] ✅ Industry: Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb
[2026-01-31T21:58:03.495Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Search Ads Technology @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T21:58:03.495Z] [BOT] 💾 BEFORE MERGE: 1468 jobs in memory (cached)
[2026-01-31T21:58:03.540Z] [BOT] ✅ Loaded V2 database: 1467 jobs
💾 DISK STATE: 1467 jobs on disk
[2026-01-31T21:58:03.541Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1468
[2026-01-31T21:58:03.549Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:58:03.549Z] [BOT] 💾 AFTER MERGE: 1468 jobs (merged disk + memory)
[2026-01-31T21:58:03.550Z] [BOT] ✅ No jobs to archive (all 1468 jobs within 7-day window)
[2026-01-31T21:58:03.653Z] [BOT] 💾 Saved posted_jobs.json: 1468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:05.156Z] [BOT] 📍 [ROUTING] "Research Scientist - Foundation Model - Vision and Language" @ ORG_08c9a13c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:58:05.367Z] [BOT] ✅ Posted message: Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T21:58:05.367Z] [BOT] ✅ Industry: Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c
[2026-01-31T21:58:05.367Z] [BOT] 💾 Added channel posting: Research Scientist - Foundation Model - Vision and Language @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:58:05.368Z] [BOT] 💾 BEFORE MERGE: 1469 jobs in memory (cached)
[2026-01-31T21:58:05.404Z] [BOT] ✅ Loaded V2 database: 1468 jobs
💾 DISK STATE: 1468 jobs on disk
[2026-01-31T21:58:05.405Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1469
[2026-01-31T21:58:05.410Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:58:05.410Z] [BOT] 💾 AFTER MERGE: 1469 jobs (merged disk + memory)
[2026-01-31T21:58:05.412Z] [BOT] ✅ No jobs to archive (all 1469 jobs within 7-day window)
[2026-01-31T21:58:05.509Z] [BOT] 💾 Saved posted_jobs.json: 1469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:07.010Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate" @ ORG_08c9a13c
[2026-01-31T21:58:07.010Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:58:07.262Z] [BOT] ✅ Posted message: Backend Software Engineer Graduate @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate @ ORG_08c9a13c
[2026-01-31T21:58:07.263Z] [BOT] 💾 Added channel posting: Backend Software Engineer Graduate @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:58:07.263Z] [BOT] 💾 BEFORE MERGE: 1470 jobs in memory (cached)
[2026-01-31T21:58:07.300Z] [BOT] ✅ Loaded V2 database: 1469 jobs
💾 DISK STATE: 1469 jobs on disk
[2026-01-31T21:58:07.300Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1470
[2026-01-31T21:58:07.307Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1470 jobs (merged disk + memory)
[2026-01-31T21:58:07.308Z] [BOT] ✅ No jobs to archive (all 1470 jobs within 7-day window)
[2026-01-31T21:58:07.407Z] [BOT] 💾 Saved posted_jobs.json: 1470 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:08.908Z] [BOT] 📍 [ROUTING] "Research Professional" @ ORG_9d38443e of Chicago
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:58:09.086Z] [BOT] ✅ Posted message: Research Professional @ ORG_9d38443e of Chicago in #💻・tech-jobs
  ✅ Industry: Research Professional @ ORG_9d38443e of Chicago
[2026-01-31T21:58:09.087Z] [BOT] 💾 Added channel posting: Research Professional @ ORG_9d38443e of Chicago → category channel (1 total channels)
[2026-01-31T21:58:09.087Z] [BOT] 💾 BEFORE MERGE: 1471 jobs in memory (cached)
[2026-01-31T21:58:09.124Z] [BOT] ✅ Loaded V2 database: 1470 jobs
💾 DISK STATE: 1470 jobs on disk
[2026-01-31T21:58:09.124Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1471
[2026-01-31T21:58:09.130Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1471 jobs (merged disk + memory)
[2026-01-31T21:58:09.131Z] [BOT] ✅ No jobs to archive (all 1471 jobs within 7-day window)
[2026-01-31T21:58:09.228Z] [BOT] 💾 Saved posted_jobs.json: 1471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:10.729Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2026-01-31T21:58:10.729Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:58:11.164Z] [BOT] ✅ Posted message: Software Engineer @ Q2 in #💻・tech-jobs
[2026-01-31T21:58:11.164Z] [BOT] ✅ Industry: Software Engineer @ Q2
[2026-01-31T21:58:11.165Z] [BOT] 💾 Added channel posting: Software Engineer @ Q2 → category channel (1 total channels)
[2026-01-31T21:58:11.165Z] [BOT] 💾 BEFORE MERGE: 1472 jobs in memory (cached)
[2026-01-31T21:58:11.201Z] [BOT] ✅ Loaded V2 database: 1471 jobs
💾 DISK STATE: 1471 jobs on disk
[2026-01-31T21:58:11.202Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1472
[2026-01-31T21:58:11.207Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:58:11.207Z] [BOT] 💾 AFTER MERGE: 1472 jobs (merged disk + memory)
[2026-01-31T21:58:11.213Z] [BOT] ✅ No jobs to archive (all 1472 jobs within 7-day window)
[2026-01-31T21:58:11.309Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:12.811Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_b08efd2b
   Category: TECH (matched: "software")
[2026-01-31T21:58:12.812Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:58:12.987Z] [BOT] ✅ Posted message: Software Engineer @ ORG_b08efd2b in #💻・tech-jobs
[2026-01-31T21:58:12.988Z] [BOT] ✅ Industry: Software Engineer @ ORG_b08efd2b
[2026-01-31T21:58:12.988Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_b08efd2b → category channel (1 total channels)
[2026-01-31T21:58:12.988Z] [BOT] 💾 BEFORE MERGE: 1473 jobs in memory (cached)
[2026-01-31T21:58:13.025Z] [BOT] ✅ Loaded V2 database: 1472 jobs
💾 DISK STATE: 1472 jobs on disk
[2026-01-31T21:58:13.025Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1473
[2026-01-31T21:58:13.032Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1473 jobs (merged disk + memory)
[2026-01-31T21:58:13.034Z] [BOT] ✅ No jobs to archive (all 1473 jobs within 7-day window)
[2026-01-31T21:58:13.121Z] [BOT] 💾 Saved posted_jobs.json: 1473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:17.624Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T21:58:17.625Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Applied Machine Learning - ML System" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T21:58:17.625Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:58:17.948Z] [BOT] ✅ Posted message: Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T21:58:17.948Z] [BOT] ✅ Industry: Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c
[2026-01-31T21:58:17.948Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Applied Machine Learning - ML System @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:58:17.948Z] [BOT] 💾 BEFORE MERGE: 1474 jobs in memory (cached)
[2026-01-31T21:58:17.985Z] [BOT] ✅ Loaded V2 database: 1473 jobs
💾 DISK STATE: 1473 jobs on disk
[2026-01-31T21:58:17.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1474
[2026-01-31T21:58:17.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1474 jobs (merged disk + memory)
[2026-01-31T21:58:17.996Z] [BOT] ✅ No jobs to archive (all 1474 jobs within 7-day window)
[2026-01-31T21:58:18.096Z] [BOT] 💾 Saved posted_jobs.json: 1474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:19.598Z] [BOT] 📍 [ROUTING] "Software Engineer - University Hire 2026" @ ORG_b344d80e Voleon Group
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T21:58:19.598Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:58:19.857Z] [BOT] ✅ Posted message: Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group in #🤖・ai-jobs
  ✅ Industry: Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group
[2026-01-31T21:58:19.858Z] [BOT] 💾 Added channel posting: Software Engineer - University Hire 2026 @ ORG_b344d80e Voleon Group → category channel (1 total channels)
[2026-01-31T21:58:19.859Z] [BOT] 💾 BEFORE MERGE: 1475 jobs in memory (cached)
[2026-01-31T21:58:19.895Z] [BOT] ✅ Loaded V2 database: 1474 jobs
💾 DISK STATE: 1474 jobs on disk
[2026-01-31T21:58:19.895Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1475
[2026-01-31T21:58:19.900Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:58:19.900Z] [BOT] 💾 AFTER MERGE: 1475 jobs (merged disk + memory)
[2026-01-31T21:58:19.904Z] [BOT] ✅ No jobs to archive (all 1475 jobs within 7-day window)
[2026-01-31T21:58:19.997Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:21.499Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Researcher" @ ORG_9505081b Trading
[2026-01-31T21:58:21.499Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:58:21.794Z] [BOT] ✅ Posted message: Graduate Machine Learning Researcher @ ORG_9505081b Trading in #🤖・ai-jobs
[2026-01-31T21:58:21.794Z] [BOT] ✅ Industry: Graduate Machine Learning Researcher @ ORG_9505081b Trading
[2026-01-31T21:58:21.795Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Researcher @ ORG_9505081b Trading → category channel (1 total channels)
[2026-01-31T21:58:21.795Z] [BOT] 💾 BEFORE MERGE: 1476 jobs in memory (cached)
[2026-01-31T21:58:21.832Z] [BOT] ✅ Loaded V2 database: 1475 jobs
💾 DISK STATE: 1475 jobs on disk
[2026-01-31T21:58:21.832Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1476
[2026-01-31T21:58:21.837Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1476 jobs (merged disk + memory)
[2026-01-31T21:58:21.843Z] [BOT] ✅ No jobs to archive (all 1476 jobs within 7-day window)
[2026-01-31T21:58:21.936Z] [BOT] 💾 Saved posted_jobs.json: 1476 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:26.438Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T21:58:26.439Z] [BOT] 📍 [ROUTING] "Asset and Wealth Management Analyst" @ ORG_d49bddaa Sachs
   Category: FINANCE (matched: "investment")
[2026-01-31T21:58:26.439Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T21:58:26.676Z] [BOT] ✅ Posted message: Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs in #💰・finance-jobs
  ✅ Industry: Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs
[2026-01-31T21:58:26.677Z] [BOT] 💾 Added channel posting: Asset and Wealth Management Analyst @ ORG_d49bddaa Sachs → category channel (1 total channels)
[2026-01-31T21:58:26.677Z] [BOT] 💾 BEFORE MERGE: 1477 jobs in memory (cached)
[2026-01-31T21:58:26.714Z] [BOT] ✅ Loaded V2 database: 1476 jobs
💾 DISK STATE: 1476 jobs on disk
[2026-01-31T21:58:26.715Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1477
[2026-01-31T21:58:26.724Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1477 jobs (merged disk + memory)
[2026-01-31T21:58:26.725Z] [BOT] ✅ No jobs to archive (all 1477 jobs within 7-day window)
[2026-01-31T21:58:26.830Z] [BOT] 💾 Saved posted_jobs.json: 1477 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:31.330Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T21:58:31.332Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3df7eca2..." not found, but found as SHA256 "efb32ba71b68a010"
[2026-01-31T21:58:31.332Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ca6a6c77 (posted within 7 days)
[2026-01-31T21:58:31.333Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_986103e5..." not found, but found as SHA256 "199575cdace0fbfa"
[2026-01-31T21:58:31.333Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_f968c32f-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e7c84601..." not found, but found as SHA256 "3ed2850591db1601"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_9cf09146-detail (posted within 7 days)
[2026-01-31T21:58:31.334Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_31222d1b..." not found, but found as SHA256 "2be269de7b9f1792"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_cb26526c-detail (posted within 7 days)
[2026-01-31T21:58:31.335Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "1c4655cba2ae8661"
⏭️  Skipping duplicate: JID_32cb8765-professional_jr31354 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_451d6e74..." not found, but found as SHA256 "6c1a9a2ee9cc322d"
⏭️  Skipping duplicate: JID_79063f25-engineer_req-11665 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5f308a6a..." not found, but found as SHA256 "a2a717a77617afe9"
⏭️  Skipping duplicate: JID_13f83d10 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8e90858f-..." not found, but found as SHA256 "ab067e2f1b19e0e5"
⏭️  Skipping duplicate: JID_1a44f75e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b285be64..." not found, but found as SHA256 "04f303de11b69983"
⏭️  Skipping duplicate: JID_b285be64 (posted within 7 days)
[2026-01-31T21:58:31.336Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_de8e97df..." not found, but found as SHA256 "96e79f31c3fecd51"
⏭️  Skipping duplicate: JID_bd69bf03 (posted within 7 days)
[2026-01-31T21:58:31.497Z] [BOT] ✅ Loaded pending queue: 2951 total (1454 pending, 50 enriched, 1447 posted)
[2026-01-31T21:58:31.672Z] [BOT] ✅ Saved pending queue: 2951 total (1454 pending, 40 enriched, 1457 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T21:58:31.771Z] [BOT] 📂 Loaded 11538 existing routing entries
[2026-01-31T21:58:31.898Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11548
   Timestamp: 2026-01-31T21:58:31.858Z
[2026-01-31T21:58:31.898Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T21:58:31.898Z] [BOT] Total attempts: 24
   Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T21:58:31.899Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-31T21:58:31.899Z] [BOT] [STATS] Channel stats saved
[2026-01-31T21:58:31.899Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1477 jobs in memory (cached)
[2026-01-31T21:58:31.962Z] [BOT] ✅ Loaded V2 database: 1477 jobs
💾 DISK STATE: 1477 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1477
[2026-01-31T21:58:31.962Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:58:31.962Z] [BOT] 💾 AFTER MERGE: 1477 jobs (merged disk + memory)
[2026-01-31T21:58:31.964Z] [BOT] ✅ No jobs to archive (all 1477 jobs within 7-day window)
[2026-01-31T21:58:32.062Z] [BOT] 💾 Saved posted_jobs.json: 1477 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:58:32.062Z] [BOT] ✅ Database saved successfully
[2026-01-31T21:58:34.083Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2842) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*