# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T22:33:08.718Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T22:32:38.140Z] ========================================
[2026-01-31T22:32:38.142Z] Discord Bot Execution Log
[2026-01-31T22:32:38.142Z] Environment: GitHub Actions
[2026-01-31T22:32:38.142Z] Node Version: v20.20.0
[2026-01-31T22:32:38.142Z] ========================================
[2026-01-31T22:32:38.142Z] Environment Variables Check:
[2026-01-31T22:32:38.142Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T22:32:38.142Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.142Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T22:32:38.142Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T22:32:38.142Z] 
Multi-Channel Configuration:
[2026-01-31T22:32:38.143Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T22:32:38.143Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T22:32:38.143Z] 
Data Files Check:
[2026-01-31T22:32:38.144Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T22:32:38.189Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8474406 bytes)
[2026-01-31T22:32:38.189Z] 
========================================
[2026-01-31T22:32:38.189Z] Starting Enhanced Discord Bot...
[2026-01-31T22:32:38.189Z] ========================================
[2026-01-31T22:32:38.762Z] [BOT] ✅ Loaded V2 database: 1487 jobs
[2026-01-31T22:32:39.293Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T22:32:39.293Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T22:32:39.293Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T22:32:39.422Z] [BOT] ✅ Loaded pending queue: 2951 total (1434 pending, 50 enriched, 1467 posted)
[2026-01-31T22:32:39.423Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T22:32:39.423Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T22:32:39.424Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T22:32:39.424Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T22:32:39.424Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T22:32:39.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T22:32:39.425Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T22:32:39.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T22:32:39.425Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T22:32:39.426Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T22:32:39.426Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T22:32:39.426Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T22:32:39.427Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T22:32:39.427Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T22:32:39.427Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T22:32:39.427Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T22:32:39.427Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T22:32:39.427Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T22:32:39.428Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T22:32:39.428Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T22:32:39.428Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T22:32:39.428Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T22:32:39.428Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T22:32:39.428Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T22:32:39.429Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T22:32:39.429Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T22:32:39.441Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T22:32:39.441Z] [BOT] 🚫 Skipping blacklisted job: Events Partnerships Manager at gohighlevel
[2026-01-31T22:32:39.549Z] [BOT] ✅ Loaded pending queue: 2951 total (1434 pending, 50 enriched, 1467 posted)
[2026-01-31T22:32:39.740Z] [BOT] ✅ Saved pending queue: 2950 total (1434 pending, 49 enriched, 1467 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T22:32:39.741Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T22:32:39.742Z] [BOT] 📋 After multi-location grouping: 35 unique jobs to post
[2026-01-31T22:32:39.742Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T22:32:39.744Z] [BOT] 📌 Posting 7 jobs to #🤖・ai-jobs
[2026-01-31T22:32:39.745Z] [BOT] 📍 [ROUTING] "Associate Software Engineer in Test" @ ORG_d0ca1d93 Systems
[2026-01-31T22:32:39.745Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:32:39.763Z] [BOT ERROR] (node:3649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T22:32:40.005Z] [BOT] ✅ Posted message: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🤖・ai-jobs
[2026-01-31T22:32:40.005Z] [BOT] ✅ Industry: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems
[2026-01-31T22:32:40.006Z] [BOT] 💾 Added channel posting: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems → category channel (1 total channels)
[2026-01-31T22:32:40.006Z] [BOT] 💾 BEFORE MERGE: 1488 jobs in memory (cached)
[2026-01-31T22:32:40.036Z] [BOT] ✅ Loaded V2 database: 1487 jobs
💾 DISK STATE: 1487 jobs on disk
[2026-01-31T22:32:40.036Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1488
[2026-01-31T22:32:40.042Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:40.042Z] [BOT] 💾 AFTER MERGE: 1488 jobs (merged disk + memory)
[2026-01-31T22:32:40.048Z] [BOT] ✅ No jobs to archive (all 1488 jobs within 7-day window)
[2026-01-31T22:32:40.149Z] [BOT] 💾 Saved posted_jobs.json: 1488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:41.652Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T22:32:41.652Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:32:42.007Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T22:32:42.007Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ ORG_1bb6fcfb
[2026-01-31T22:32:42.008Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T22:32:42.008Z] [BOT] 💾 BEFORE MERGE: 1489 jobs in memory (cached)
[2026-01-31T22:32:42.033Z] [BOT] ✅ Loaded V2 database: 1488 jobs
💾 DISK STATE: 1488 jobs on disk
[2026-01-31T22:32:42.033Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1489
[2026-01-31T22:32:42.044Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:42.044Z] [BOT] 💾 AFTER MERGE: 1489 jobs (merged disk + memory)
[2026-01-31T22:32:42.045Z] [BOT] ✅ No jobs to archive (all 1489 jobs within 7-day window)
[2026-01-31T22:32:42.128Z] [BOT] 💾 Saved posted_jobs.json: 1489 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:43.630Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T22:32:43.630Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:32:43.818Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T22:32:43.818Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c
[2026-01-31T22:32:43.818Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T22:32:43.819Z] [BOT] 💾 BEFORE MERGE: 1490 jobs in memory (cached)
[2026-01-31T22:32:43.843Z] [BOT] ✅ Loaded V2 database: 1489 jobs
💾 DISK STATE: 1489 jobs on disk
[2026-01-31T22:32:43.844Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1490
[2026-01-31T22:32:43.854Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:43.854Z] [BOT] 💾 AFTER MERGE: 1490 jobs (merged disk + memory)
[2026-01-31T22:32:43.855Z] [BOT] ✅ No jobs to archive (all 1490 jobs within 7-day window)
[2026-01-31T22:32:43.943Z] [BOT] 💾 Saved posted_jobs.json: 1490 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:45.446Z] [BOT] 📍 [ROUTING] "Software Engineer - Core Product" @ ORG_4a67feda
[2026-01-31T22:32:45.446Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:32:45.721Z] [BOT] ✅ Posted message: Software Engineer - Core Product @ ORG_4a67feda in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Core Product @ ORG_4a67feda
[2026-01-31T22:32:45.723Z] [BOT] 💾 Added channel posting: Software Engineer - Core Product @ ORG_4a67feda → category channel (1 total channels)
💾 BEFORE MERGE: 1491 jobs in memory (cached)
[2026-01-31T22:32:45.747Z] [BOT] ✅ Loaded V2 database: 1490 jobs
💾 DISK STATE: 1490 jobs on disk
[2026-01-31T22:32:45.748Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1491
[2026-01-31T22:32:45.755Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:45.755Z] [BOT] 💾 AFTER MERGE: 1491 jobs (merged disk + memory)
[2026-01-31T22:32:45.756Z] [BOT] ✅ No jobs to archive (all 1491 jobs within 7-day window)
[2026-01-31T22:32:45.831Z] [BOT] 💾 Saved posted_jobs.json: 1491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:47.332Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Enterprise" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T22:32:47.332Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:32:47.773Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c
[2026-01-31T22:32:47.773Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Enterprise @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T22:32:47.773Z] [BOT] 💾 BEFORE MERGE: 1492 jobs in memory (cached)
[2026-01-31T22:32:47.798Z] [BOT] ✅ Loaded V2 database: 1491 jobs
💾 DISK STATE: 1491 jobs on disk
[2026-01-31T22:32:47.799Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1492
[2026-01-31T22:32:47.807Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:47.808Z] [BOT] 💾 AFTER MERGE: 1492 jobs (merged disk + memory)
[2026-01-31T22:32:47.808Z] [BOT] ✅ No jobs to archive (all 1492 jobs within 7-day window)
[2026-01-31T22:32:47.890Z] [BOT] 💾 Saved posted_jobs.json: 1492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:49.393Z] [BOT] 📍 [ROUTING] "Data Structuring Specialist" @ ORG_6a1ef406
   Category: AI (matched: "artificial intelligence")
[2026-01-31T22:32:49.393Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:32:49.616Z] [BOT] ✅ Posted message: Data Structuring Specialist @ ORG_6a1ef406 in #🤖・ai-jobs
  ✅ Industry: Data Structuring Specialist @ ORG_6a1ef406
[2026-01-31T22:32:49.617Z] [BOT] 💾 Added channel posting: Data Structuring Specialist @ ORG_6a1ef406 → category channel (1 total channels)
[2026-01-31T22:32:49.617Z] [BOT] 💾 BEFORE MERGE: 1493 jobs in memory (cached)
[2026-01-31T22:32:49.642Z] [BOT] ✅ Loaded V2 database: 1492 jobs
💾 DISK STATE: 1492 jobs on disk
[2026-01-31T22:32:49.642Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1493
[2026-01-31T22:32:49.649Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:49.650Z] [BOT] 💾 AFTER MERGE: 1493 jobs (merged disk + memory)
[2026-01-31T22:32:49.651Z] [BOT] ✅ No jobs to archive (all 1493 jobs within 7-day window)
[2026-01-31T22:32:49.733Z] [BOT] 💾 Saved posted_jobs.json: 1493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:51.235Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Monetization GenAI - BS/MS" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T22:32:51.235Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:32:51.442Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T22:32:51.442Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb
[2026-01-31T22:32:51.443Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Monetization GenAI - BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T22:32:51.443Z] [BOT] 💾 BEFORE MERGE: 1494 jobs in memory (cached)
[2026-01-31T22:32:51.468Z] [BOT] ✅ Loaded V2 database: 1493 jobs
💾 DISK STATE: 1493 jobs on disk
[2026-01-31T22:32:51.469Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1494
[2026-01-31T22:32:51.479Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:51.479Z] [BOT] 💾 AFTER MERGE: 1494 jobs (merged disk + memory)
[2026-01-31T22:32:51.479Z] [BOT] ✅ No jobs to archive (all 1494 jobs within 7-day window)
[2026-01-31T22:32:51.567Z] [BOT] 💾 Saved posted_jobs.json: 1494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:56.069Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-31T22:32:56.070Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS" @ ORG_1bb6fcfb
[2026-01-31T22:32:56.071Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:32:56.297Z] [BOT] ✅ Posted message: Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T22:32:56.297Z] [BOT] ✅ Industry: Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb
[2026-01-31T22:32:56.298Z] [BOT] 💾 Added channel posting: Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T22:32:56.298Z] [BOT] 💾 BEFORE MERGE: 1495 jobs in memory (cached)
[2026-01-31T22:32:56.323Z] [BOT] ✅ Loaded V2 database: 1494 jobs
💾 DISK STATE: 1494 jobs on disk
[2026-01-31T22:32:56.325Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1495
[2026-01-31T22:32:56.330Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:56.330Z] [BOT] 💾 AFTER MERGE: 1495 jobs (merged disk + memory)
[2026-01-31T22:32:56.331Z] [BOT] ✅ No jobs to archive (all 1495 jobs within 7-day window)
[2026-01-31T22:32:56.413Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:57.915Z] [BOT] 📍 [ROUTING] "Digital Technology Engineer" @ ORG_0ee6cb3e Data
[2026-01-31T22:32:57.916Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:32:58.160Z] [BOT] ✅ Posted message: Digital Technology Engineer @ ORG_0ee6cb3e Data in #💻・tech-jobs
[2026-01-31T22:32:58.160Z] [BOT] ✅ Industry: Digital Technology Engineer @ ORG_0ee6cb3e Data
[2026-01-31T22:32:58.161Z] [BOT] 💾 Added channel posting: Digital Technology Engineer @ ORG_0ee6cb3e Data → category channel (1 total channels)
[2026-01-31T22:32:58.161Z] [BOT] 💾 BEFORE MERGE: 1496 jobs in memory (cached)
[2026-01-31T22:32:58.186Z] [BOT] ✅ Loaded V2 database: 1495 jobs
💾 DISK STATE: 1495 jobs on disk
[2026-01-31T22:32:58.186Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1496
[2026-01-31T22:32:58.196Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:58.196Z] [BOT] 💾 AFTER MERGE: 1496 jobs (merged disk + memory)
[2026-01-31T22:32:58.197Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-31T22:32:58.283Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:32:59.784Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Platform - 2026 Start" @ ORG_08c9a13c
[2026-01-31T22:32:59.784Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:32:59.965Z] [BOT] ✅ Posted message: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T22:32:59.965Z] [BOT] ✅ Industry: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c
[2026-01-31T22:32:59.966Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - AI Platform - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T22:32:59.966Z] [BOT] 💾 BEFORE MERGE: 1497 jobs in memory (cached)
[2026-01-31T22:32:59.991Z] [BOT] ✅ Loaded V2 database: 1496 jobs
💾 DISK STATE: 1496 jobs on disk
[2026-01-31T22:32:59.991Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1497
[2026-01-31T22:32:59.998Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:32:59.998Z] [BOT] 💾 AFTER MERGE: 1497 jobs (merged disk + memory)
[2026-01-31T22:32:59.999Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-31T22:33:00.082Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:33:04.583Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T22:33:04.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f8d1eb29..." not found, but found as SHA256 "ccfb32db1ea75b6d"
[2026-01-31T22:33:04.584Z] [BOT] ⏭️  Skipping duplicate: JID_17efcd6d (posted within 7 days)
[2026-01-31T22:33:04.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa8e164e..." not found, but found as SHA256 "c5b992c9152aa586"
[2026-01-31T22:33:04.585Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e987b3a6 (posted within 7 days)
[2026-01-31T22:33:04.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_20c8b34a..." not found, but found as SHA256 "be7131071251c943"
[2026-01-31T22:33:04.585Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9a92ffb0 (posted within 7 days)
[2026-01-31T22:33:04.585Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b6943717..." not found, but found as SHA256 "e77e05909dc43cd1"
[2026-01-31T22:33:04.585Z] [BOT] ⏭️  Skipping duplicate: JID_e5d347af (posted within 7 days)
[2026-01-31T22:33:04.586Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90e21764..." not found, but found as SHA256 "e03f2ee0c9c7f015"
[2026-01-31T22:33:04.586Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3a8a0647-detail (posted within 7 days)
[2026-01-31T22:33:04.586Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5f5e87c8..." not found, but found as SHA256 "e4f3047638ea81fa"
⏭️  Skipping duplicate: JID_f4afa26b (posted within 7 days)
[2026-01-31T22:33:04.586Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a1a126e2..." not found, but found as SHA256 "60292f7ac3bf4b86"
[2026-01-31T22:33:04.586Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_80e093bc-detail (posted within 7 days)
[2026-01-31T22:33:04.586Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_82bfb3e1..." not found, but found as SHA256 "00702bff7ba39d73"
[2026-01-31T22:33:04.586Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_c2df5284-detail (posted within 7 days)
[2026-01-31T22:33:04.587Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f0e7526-..." not found, but found as SHA256 "8515a219cc2d3e69"
[2026-01-31T22:33:04.587Z] [BOT] ⏭️  Skipping duplicate: JID_a842c276 (posted within 7 days)
[2026-01-31T22:33:04.587Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c786e7c..." not found, but found as SHA256 "a0a2bd1758f888c9"
[2026-01-31T22:33:04.587Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f269e50a (posted within 7 days)
[2026-01-31T22:33:04.696Z] [BOT] ✅ Loaded pending queue: 2950 total (1434 pending, 49 enriched, 1467 posted)
[2026-01-31T22:33:04.886Z] [BOT] ✅ Saved pending queue: 2950 total (1434 pending, 39 enriched, 1477 posted)
[2026-01-31T22:33:04.886Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T22:33:04.973Z] [BOT] 📂 Loaded 11558 existing routing entries
[2026-01-31T22:33:05.102Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T22:33:05.102Z] [BOT] Total entries: 11568
   Timestamp: 2026-01-31T22:33:05.056Z
[2026-01-31T22:33:05.103Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T22:33:05.103Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-31T22:33:05.103Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-31T22:33:05.103Z] [BOT] Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 7 posts
     2. #💻・tech-jobs: 3 posts
[2026-01-31T22:33:05.104Z] [BOT] [STATS] Channel stats saved
[2026-01-31T22:33:05.104Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1497 jobs in memory (cached)
[2026-01-31T22:33:05.133Z] [BOT] ✅ Loaded V2 database: 1497 jobs
💾 DISK STATE: 1497 jobs on disk
[2026-01-31T22:33:05.134Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1497
[2026-01-31T22:33:05.139Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:33:05.139Z] [BOT] 💾 AFTER MERGE: 1497 jobs (merged disk + memory)
[2026-01-31T22:33:05.140Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-31T22:33:05.239Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
[2026-01-31T22:33:05.240Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T22:33:07.275Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*