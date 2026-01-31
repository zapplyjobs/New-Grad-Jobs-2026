# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T21:45:53.154Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T21:45:20.695Z] ========================================
[2026-01-31T21:45:20.697Z] Discord Bot Execution Log
[2026-01-31T21:45:20.697Z] Environment: GitHub Actions
[2026-01-31T21:45:20.697Z] Node Version: v20.20.0
[2026-01-31T21:45:20.697Z] ========================================
[2026-01-31T21:45:20.697Z] Environment Variables Check:
[2026-01-31T21:45:20.697Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T21:45:20.697Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.697Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T21:45:20.697Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T21:45:20.698Z] 
Multi-Channel Configuration:
[2026-01-31T21:45:20.698Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T21:45:20.698Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T21:45:20.698Z] 
Data Files Check:
[2026-01-31T21:45:20.699Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T21:45:20.743Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8359600 bytes)
[2026-01-31T21:45:20.743Z] 
========================================
[2026-01-31T21:45:20.743Z] Starting Enhanced Discord Bot...
[2026-01-31T21:45:20.743Z] ========================================
[2026-01-31T21:45:21.308Z] [BOT] ✅ Loaded V2 database: 1457 jobs
[2026-01-31T21:45:21.733Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T21:45:21.734Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T21:45:21.734Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T21:45:21.853Z] [BOT] ✅ Loaded pending queue: 2952 total (1465 pending, 50 enriched, 1437 posted)
[2026-01-31T21:45:21.854Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T21:45:21.854Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:45:21.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T21:45:21.855Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:45:21.856Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T21:45:21.856Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T21:45:21.856Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T21:45:21.856Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T21:45:21.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T21:45:21.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T21:45:21.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T21:45:21.858Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T21:45:21.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T21:45:21.858Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T21:45:21.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T21:45:21.858Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T21:45:21.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T21:45:21.859Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T21:45:21.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T21:45:21.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T21:45:21.859Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T21:45:21.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T21:45:21.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T21:45:21.860Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T21:45:21.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T21:45:21.860Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T21:45:21.870Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T21:45:21.870Z] [BOT] 🚫 Skipping blacklisted job: Associate Data Science Product Manager at Red Ventures
[2026-01-31T21:45:21.870Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher - Survey Science/Time Domain Astronomy at PennState University
🚫 Skipping blacklisted job: Postdoctoral Fellow at University of Texas - Austin
[2026-01-31T21:45:21.984Z] [BOT] ✅ Loaded pending queue: 2952 total (1465 pending, 50 enriched, 1437 posted)
[2026-01-31T21:45:22.183Z] [BOT] ✅ Saved pending queue: 2949 total (1465 pending, 47 enriched, 1437 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
[2026-01-31T21:45:22.183Z] [BOT] 📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-31T21:45:22.184Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-31T21:45:22.184Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T21:45:22.185Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T21:45:22.187Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T21:45:22.188Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Software Engineering" @ ORG_ea9973d1 Point Solutions
[2026-01-31T21:45:22.188Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:45:22.206Z] [BOT ERROR] (node:3193) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T21:45:22.427Z] [BOT] ✅ Posted message: Software Engineer 1 - Software Engineering @ ORG_ea9973d1 Point Solutions in #💻・tech-jobs
[2026-01-31T21:45:22.427Z] [BOT] ✅ Industry: Software Engineer 1 - Software Engineering @ ORG_ea9973d1 Point Solutions
[2026-01-31T21:45:22.428Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Software Engineering @ ORG_ea9973d1 Point Solutions → category channel (1 total channels)
[2026-01-31T21:45:22.428Z] [BOT] 💾 BEFORE MERGE: 1458 jobs in memory (cached)
[2026-01-31T21:45:22.455Z] [BOT] ✅ Loaded V2 database: 1457 jobs
💾 DISK STATE: 1457 jobs on disk
[2026-01-31T21:45:22.456Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1458
[2026-01-31T21:45:22.461Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:22.461Z] [BOT] 💾 AFTER MERGE: 1458 jobs (merged disk + memory)
[2026-01-31T21:45:22.462Z] [BOT] ✅ No jobs to archive (all 1458 jobs within 7-day window)
[2026-01-31T21:45:22.555Z] [BOT] 💾 Saved posted_jobs.json: 1458 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:24.057Z] [BOT] 📍 [ROUTING] "DOPS Graduate Software Developer - Federal Work Study - Remote Optional" @ ORG_9d38443e of Virginia
[2026-01-31T21:45:24.057Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:45:24.315Z] [BOT] ✅ Posted message: DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia in #💻・tech-jobs
[2026-01-31T21:45:24.316Z] [BOT] ✅ Industry: DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia
[2026-01-31T21:45:24.316Z] [BOT] 💾 Added channel posting: DOPS Graduate Software Developer - Federal Work Study - Remote Optional @ ORG_9d38443e of Virginia → category channel (1 total channels)
[2026-01-31T21:45:24.316Z] [BOT] 💾 BEFORE MERGE: 1459 jobs in memory (cached)
[2026-01-31T21:45:24.340Z] [BOT] ✅ Loaded V2 database: 1458 jobs
💾 DISK STATE: 1458 jobs on disk
[2026-01-31T21:45:24.340Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1459
[2026-01-31T21:45:24.346Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:24.346Z] [BOT] 💾 AFTER MERGE: 1459 jobs (merged disk + memory)
[2026-01-31T21:45:24.347Z] [BOT] ✅ No jobs to archive (all 1459 jobs within 7-day window)
[2026-01-31T21:45:24.434Z] [BOT] 💾 Saved posted_jobs.json: 1459 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:25.936Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Fusion" @ ORG_dc7620eb
[2026-01-31T21:45:25.936Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:45:26.137Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Fusion @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Fusion @ ORG_dc7620eb
[2026-01-31T21:45:26.138Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Fusion @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T21:45:26.138Z] [BOT] 💾 BEFORE MERGE: 1460 jobs in memory (cached)
[2026-01-31T21:45:26.162Z] [BOT] ✅ Loaded V2 database: 1459 jobs
💾 DISK STATE: 1459 jobs on disk
[2026-01-31T21:45:26.162Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1460
[2026-01-31T21:45:26.167Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:26.167Z] [BOT] 💾 AFTER MERGE: 1460 jobs (merged disk + memory)
[2026-01-31T21:45:26.168Z] [BOT] ✅ No jobs to archive (all 1460 jobs within 7-day window)
[2026-01-31T21:45:26.255Z] [BOT] 💾 Saved posted_jobs.json: 1460 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:27.757Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad" @ ORG_931a39c9
   Category: TECH (matched: "software")
[2026-01-31T21:45:27.757Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:45:27.938Z] [BOT] ✅ Posted message: Software Engineer – New Grad @ ORG_931a39c9 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad @ ORG_931a39c9
[2026-01-31T21:45:27.939Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad @ ORG_931a39c9 → category channel (1 total channels)
💾 BEFORE MERGE: 1461 jobs in memory (cached)
[2026-01-31T21:45:27.971Z] [BOT] ✅ Loaded V2 database: 1460 jobs
💾 DISK STATE: 1460 jobs on disk
[2026-01-31T21:45:27.972Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1461
[2026-01-31T21:45:27.977Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:27.977Z] [BOT] 💾 AFTER MERGE: 1461 jobs (merged disk + memory)
[2026-01-31T21:45:27.978Z] [BOT] ✅ No jobs to archive (all 1461 jobs within 7-day window)
[2026-01-31T21:45:28.067Z] [BOT] 💾 Saved posted_jobs.json: 1461 active jobs
[2026-01-31T21:45:28.068Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:29.569Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Media Engine" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T21:45:29.569Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:45:29.768Z] [BOT] ✅ Posted message: Software Engineer Graduate - Media Engine @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Media Engine @ ORG_1bb6fcfb
[2026-01-31T21:45:29.769Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Media Engine @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T21:45:29.769Z] [BOT] 💾 BEFORE MERGE: 1462 jobs in memory (cached)
[2026-01-31T21:45:29.793Z] [BOT] ✅ Loaded V2 database: 1461 jobs
💾 DISK STATE: 1461 jobs on disk
[2026-01-31T21:45:29.793Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1462
[2026-01-31T21:45:29.798Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:29.798Z] [BOT] 💾 AFTER MERGE: 1462 jobs (merged disk + memory)
[2026-01-31T21:45:29.801Z] [BOT] ✅ No jobs to archive (all 1462 jobs within 7-day window)
[2026-01-31T21:45:29.876Z] [BOT] 💾 Saved posted_jobs.json: 1462 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:34.378Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T21:45:34.379Z] [BOT] 📍 [ROUTING] "Chemical Data Annotation Specialist" @ ORG_6a1ef406
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T21:45:34.379Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:45:34.725Z] [BOT] ✅ Posted message: Chemical Data Annotation Specialist @ ORG_6a1ef406 in #🤖・ai-jobs
  ✅ Industry: Chemical Data Annotation Specialist @ ORG_6a1ef406
[2026-01-31T21:45:34.726Z] [BOT] 💾 Added channel posting: Chemical Data Annotation Specialist @ ORG_6a1ef406 → category channel (1 total channels)
💾 BEFORE MERGE: 1463 jobs in memory (cached)
[2026-01-31T21:45:34.750Z] [BOT] ✅ Loaded V2 database: 1462 jobs
💾 DISK STATE: 1462 jobs on disk
[2026-01-31T21:45:34.750Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1463
[2026-01-31T21:45:34.755Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:34.755Z] [BOT] 💾 AFTER MERGE: 1463 jobs (merged disk + memory)
[2026-01-31T21:45:34.756Z] [BOT] ✅ No jobs to archive (all 1463 jobs within 7-day window)
[2026-01-31T21:45:34.844Z] [BOT] 💾 Saved posted_jobs.json: 1463 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:36.348Z] [BOT] 📍 [ROUTING] "Full-Stack Engineer" @ ORG_91268016
[2026-01-31T21:45:36.348Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:45:36.510Z] [BOT] ✅ Posted message: Full-Stack Engineer @ ORG_91268016 in #🤖・ai-jobs
[2026-01-31T21:45:36.510Z] [BOT] ✅ Industry: Full-Stack Engineer @ ORG_91268016
[2026-01-31T21:45:36.511Z] [BOT] 💾 Added channel posting: Full-Stack Engineer @ ORG_91268016 → category channel (1 total channels)
💾 BEFORE MERGE: 1464 jobs in memory (cached)
[2026-01-31T21:45:36.535Z] [BOT] ✅ Loaded V2 database: 1463 jobs
💾 DISK STATE: 1463 jobs on disk
[2026-01-31T21:45:36.535Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1464
[2026-01-31T21:45:36.540Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:36.540Z] [BOT] 💾 AFTER MERGE: 1464 jobs (merged disk + memory)
[2026-01-31T21:45:36.543Z] [BOT] ✅ No jobs to archive (all 1464 jobs within 7-day window)
[2026-01-31T21:45:36.623Z] [BOT] 💾 Saved posted_jobs.json: 1464 active jobs
[2026-01-31T21:45:36.624Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:38.127Z] [BOT] 📍 [ROUTING] "CAS-Chemistry-Computational" @ ORG_9d38443e of Miami
[2026-01-31T21:45:38.127Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T21:45:38.290Z] [BOT] ✅ Posted message: CAS-Chemistry-Computational @ ORG_9d38443e of Miami in #🤖・ai-jobs
[2026-01-31T21:45:38.290Z] [BOT] ✅ Industry: CAS-Chemistry-Computational @ ORG_9d38443e of Miami
[2026-01-31T21:45:38.291Z] [BOT] 💾 Added channel posting: CAS-Chemistry-Computational @ ORG_9d38443e of Miami → category channel (1 total channels)
[2026-01-31T21:45:38.291Z] [BOT] 💾 BEFORE MERGE: 1465 jobs in memory (cached)
[2026-01-31T21:45:38.315Z] [BOT] ✅ Loaded V2 database: 1464 jobs
💾 DISK STATE: 1464 jobs on disk
[2026-01-31T21:45:38.316Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1465
[2026-01-31T21:45:38.320Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:38.320Z] [BOT] 💾 AFTER MERGE: 1465 jobs (merged disk + memory)
[2026-01-31T21:45:38.325Z] [BOT] ✅ No jobs to archive (all 1465 jobs within 7-day window)
[2026-01-31T21:45:38.406Z] [BOT] 💾 Saved posted_jobs.json: 1465 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:42.907Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T21:45:42.909Z] [BOT] 📍 [ROUTING] "Engineering Students Seeking Full-Time Employment" @ ORG_6adce842
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T21:45:42.909Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T21:45:43.173Z] [BOT] ✅ Posted message: Engineering Students Seeking Full-Time Employment @ ORG_6adce842 in #📊・JID_fb739488
  ✅ Industry: Engineering Students Seeking Full-Time Employment @ ORG_6adce842
[2026-01-31T21:45:43.173Z] [BOT] 💾 Added channel posting: Engineering Students Seeking Full-Time Employment @ ORG_6adce842 → category channel (1 total channels)
[2026-01-31T21:45:43.173Z] [BOT] 💾 BEFORE MERGE: 1466 jobs in memory (cached)
[2026-01-31T21:45:43.198Z] [BOT] ✅ Loaded V2 database: 1465 jobs
💾 DISK STATE: 1465 jobs on disk
[2026-01-31T21:45:43.198Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1466
[2026-01-31T21:45:43.203Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:43.203Z] [BOT] 💾 AFTER MERGE: 1466 jobs (merged disk + memory)
[2026-01-31T21:45:43.208Z] [BOT] ✅ No jobs to archive (all 1466 jobs within 7-day window)
[2026-01-31T21:45:43.293Z] [BOT] 💾 Saved posted_jobs.json: 1466 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:44.795Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst 1" @ ORG_d7d2f0ff & Southern Financial Group
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T21:45:44.795Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T21:45:45.009Z] [BOT] ✅ Posted message: Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group in #📊・JID_fb739488
  ✅ Industry: Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group
[2026-01-31T21:45:45.010Z] [BOT] 💾 Added channel posting: Business Intelligence Analyst 1 @ ORG_d7d2f0ff & Southern Financial Group → category channel (1 total channels)
[2026-01-31T21:45:45.010Z] [BOT] 💾 BEFORE MERGE: 1467 jobs in memory (cached)
[2026-01-31T21:45:45.035Z] [BOT] ✅ Loaded V2 database: 1466 jobs
💾 DISK STATE: 1466 jobs on disk
[2026-01-31T21:45:45.035Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1467
[2026-01-31T21:45:45.040Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:45.040Z] [BOT] 💾 AFTER MERGE: 1467 jobs (merged disk + memory)
[2026-01-31T21:45:45.042Z] [BOT] ✅ No jobs to archive (all 1467 jobs within 7-day window)
[2026-01-31T21:45:45.123Z] [BOT] 💾 Saved posted_jobs.json: 1467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:45:49.626Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T21:45:49.627Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45ca2d41..." not found, but found as SHA256 "4b5b72575e9d5cb3"
[2026-01-31T21:45:49.627Z] [BOT] ⏭️  Skipping duplicate: JID_68b98c66 (posted within 7 days)
[2026-01-31T21:45:49.628Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_069179b9-..." not found, but found as SHA256 "6dcc8e071b8eaa86"
⏭️  Skipping duplicate: JID_e4cc550d (posted within 7 days)
[2026-01-31T21:45:49.628Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6b109869..." not found, but found as SHA256 "c29bc65df5649b8c"
⏭️  Skipping duplicate: JID_09ab46bb (posted within 7 days)
[2026-01-31T21:45:49.628Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ad4c3259..." not found, but found as SHA256 "0e1f6ed60ae7ae51"
[2026-01-31T21:45:49.628Z] [BOT] ⏭️  Skipping duplicate: JID_2bf7ebd0 (posted within 7 days)
[2026-01-31T21:45:49.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b8487a29..." not found, but found as SHA256 "670cc7d6ce9d1ada"
⏭️  Skipping duplicate: JID_b04c890f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a89e2209..." not found, but found as SHA256 "3a86a31edfeac327"
⏭️  Skipping duplicate: JID_dc564ec0-optional_r0076751 (posted within 7 days)
[2026-01-31T21:45:49.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "03aa01f58c5210df"
[2026-01-31T21:45:49.629Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-305904 (posted within 7 days)
[2026-01-31T21:45:49.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3883bcc3..." not found, but found as SHA256 "01cedcfe05c881da"
⏭️  Skipping duplicate: JID_b07dd2fa-professor_r100091730 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_4b97161e..." not found, but found as SHA256 "1939925a6f20cf3b"
⏭️  Skipping duplicate: JID_8352e833 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_55750473..." not found, but found as SHA256 "d1f102406b802050"
⏭️  Skipping duplicate: JID_6796d1d6-CH_d9fe0b4f (posted within 7 days)
[2026-01-31T21:45:49.736Z] [BOT] ✅ Loaded pending queue: 2949 total (1465 pending, 47 enriched, 1437 posted)
[2026-01-31T21:45:49.937Z] [BOT] ✅ Saved pending queue: 2949 total (1465 pending, 37 enriched, 1447 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T21:45:49.937Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T21:45:50.024Z] [BOT] 📂 Loaded 11528 existing routing entries
[2026-01-31T21:45:50.151Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11538
[2026-01-31T21:45:50.151Z] [BOT] Timestamp: 2026-01-31T21:45:50.105Z
[2026-01-31T21:45:50.152Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T21:45:50.152Z] [BOT] Total attempts: 27
   Successful: 10
   Failed: 0
   Skipped: 17
[2026-01-31T21:45:50.152Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T21:45:50.152Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 2 posts
[2026-01-31T21:45:50.152Z] [BOT] [STATS] Channel stats saved
[2026-01-31T21:45:50.152Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1467 jobs in memory (cached)
[2026-01-31T21:45:50.180Z] [BOT] ✅ Loaded V2 database: 1467 jobs
💾 DISK STATE: 1467 jobs on disk
[2026-01-31T21:45:50.180Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1467
[2026-01-31T21:45:50.185Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:45:50.185Z] [BOT] 💾 AFTER MERGE: 1467 jobs (merged disk + memory)
[2026-01-31T21:45:50.186Z] [BOT] ✅ No jobs to archive (all 1467 jobs within 7-day window)
[2026-01-31T21:45:50.284Z] [BOT] 💾 Saved posted_jobs.json: 1467 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T21:45:52.316Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3193) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*