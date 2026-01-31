# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T19:06:56.287Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T19:06:21.428Z] ========================================
[2026-01-31T19:06:21.430Z] Discord Bot Execution Log
[2026-01-31T19:06:21.430Z] Environment: GitHub Actions
[2026-01-31T19:06:21.430Z] Node Version: v20.20.0
[2026-01-31T19:06:21.430Z] ========================================
[2026-01-31T19:06:21.430Z] Environment Variables Check:
[2026-01-31T19:06:21.430Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T19:06:21.431Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T19:06:21.431Z] 
Multi-Channel Configuration:
[2026-01-31T19:06:21.431Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.431Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.432Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T19:06:21.432Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T19:06:21.432Z] 
Data Files Check:
[2026-01-31T19:06:21.433Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T19:06:21.475Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8168622 bytes)
[2026-01-31T19:06:21.475Z] 
========================================
[2026-01-31T19:06:21.475Z] Starting Enhanced Discord Bot...
[2026-01-31T19:06:21.475Z] ========================================
[2026-01-31T19:06:22.024Z] [BOT] ✅ Loaded V2 database: 1347 jobs
[2026-01-31T19:06:22.764Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T19:06:22.765Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T19:06:22.765Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T19:06:22.884Z] [BOT] ✅ Loaded pending queue: 2945 total (1568 pending, 50 enriched, 1327 posted)
[2026-01-31T19:06:22.885Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T19:06:22.885Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:06:22.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T19:06:22.886Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T19:06:22.886Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:06:22.886Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T19:06:22.887Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T19:06:22.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T19:06:22.887Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T19:06:22.887Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T19:06:22.887Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T19:06:22.888Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T19:06:22.888Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T19:06:22.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T19:06:22.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T19:06:22.889Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T19:06:22.890Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T19:06:22.890Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T19:06:22.891Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T19:06:22.900Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T19:06:22.900Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T19:06:22.900Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T19:06:22.901Z] [BOT] 📋 After multi-location grouping: 35 unique jobs to post
[2026-01-31T19:06:22.901Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T19:06:22.901Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T19:06:22.905Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T19:06:22.906Z] [BOT] 📍 [ROUTING] "AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling" @ ORG_a5257743 Packard (HP)
[2026-01-31T19:06:22.906Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T19:06:22.923Z] [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T19:06:23.208Z] [BOT] ✅ Posted message: AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling @ ORG_a5257743 Packard (HP) in #🤖・ai-jobs
[2026-01-31T19:06:23.209Z] [BOT] ✅ Industry: AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling @ ORG_a5257743 Packard (HP)
[2026-01-31T19:06:23.209Z] [BOT] 💾 Added channel posting: AI Lab – Junior Machine Learning Engineer - AI Lab - GenAI Modelling @ ORG_a5257743 Packard (HP) → category channel (1 total channels)
[2026-01-31T19:06:23.210Z] [BOT] 💾 BEFORE MERGE: 1348 jobs in memory (cached)
[2026-01-31T19:06:23.238Z] [BOT] ✅ Loaded V2 database: 1347 jobs
💾 DISK STATE: 1347 jobs on disk
[2026-01-31T19:06:23.239Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1348
[2026-01-31T19:06:23.246Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:23.247Z] [BOT] 💾 AFTER MERGE: 1348 jobs (merged disk + memory)
[2026-01-31T19:06:23.248Z] [BOT] ✅ No jobs to archive (all 1348 jobs within 7-day window)
[2026-01-31T19:06:23.338Z] [BOT] 💾 Saved posted_jobs.json: 1348 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:24.841Z] [BOT] 📍 [ROUTING] "Part-Time Research Assistant/Programmer - Yanxi Liu" @ ORG_478e100e University
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T19:06:24.842Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:06:25.693Z] [BOT] ✅ Posted message: Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University in #🤖・ai-jobs
[2026-01-31T19:06:25.693Z] [BOT] ✅ Industry: Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University
[2026-01-31T19:06:25.694Z] [BOT] 💾 Added channel posting: Part-Time Research Assistant/Programmer - Yanxi Liu @ ORG_478e100e University → category channel (1 total channels)
[2026-01-31T19:06:25.694Z] [BOT] 💾 BEFORE MERGE: 1349 jobs in memory (cached)
[2026-01-31T19:06:25.717Z] [BOT] ✅ Loaded V2 database: 1348 jobs
💾 DISK STATE: 1348 jobs on disk
[2026-01-31T19:06:25.717Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1349
[2026-01-31T19:06:25.720Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:25.720Z] [BOT] 💾 AFTER MERGE: 1349 jobs (merged disk + memory)
[2026-01-31T19:06:25.723Z] [BOT] ✅ No jobs to archive (all 1349 jobs within 7-day window)
[2026-01-31T19:06:25.809Z] [BOT] 💾 Saved posted_jobs.json: 1349 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:27.311Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_58b7c913 & Gamble (P&G)
   Category: AI (matched: "machine learning")
[2026-01-31T19:06:27.311Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T19:06:27.581Z] [BOT] ✅ Posted message: Data Scientist @ ORG_58b7c913 & Gamble (P&G) in #🤖・ai-jobs
[2026-01-31T19:06:27.581Z] [BOT] ✅ Industry: Data Scientist @ ORG_58b7c913 & Gamble (P&G)
[2026-01-31T19:06:27.582Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_58b7c913 & Gamble (P&G) → category channel (1 total channels)
[2026-01-31T19:06:27.582Z] [BOT] 💾 BEFORE MERGE: 1350 jobs in memory (cached)
[2026-01-31T19:06:27.605Z] [BOT] ✅ Loaded V2 database: 1349 jobs
💾 DISK STATE: 1349 jobs on disk
[2026-01-31T19:06:27.606Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1350
[2026-01-31T19:06:27.608Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:27.608Z] [BOT] 💾 AFTER MERGE: 1350 jobs (merged disk + memory)
[2026-01-31T19:06:27.611Z] [BOT] ✅ No jobs to archive (all 1350 jobs within 7-day window)
[2026-01-31T19:06:27.696Z] [BOT] 💾 Saved posted_jobs.json: 1350 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:32.197Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T19:06:32.198Z] [BOT] 📍 [ROUTING] "Software Engineering Graduate" @ ORG_a5257743 Packard Enterprise
   Category: TECH (matched: "software")
[2026-01-31T19:06:32.198Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:06:32.496Z] [BOT] ✅ Posted message: Software Engineering Graduate @ ORG_a5257743 Packard Enterprise in #💻・tech-jobs
[2026-01-31T19:06:32.496Z] [BOT] ✅ Industry: Software Engineering Graduate @ ORG_a5257743 Packard Enterprise
[2026-01-31T19:06:32.497Z] [BOT] 💾 Added channel posting: Software Engineering Graduate @ ORG_a5257743 Packard Enterprise → category channel (1 total channels)
💾 BEFORE MERGE: 1351 jobs in memory (cached)
[2026-01-31T19:06:32.520Z] [BOT] ✅ Loaded V2 database: 1350 jobs
💾 DISK STATE: 1350 jobs on disk
[2026-01-31T19:06:32.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1351
[2026-01-31T19:06:32.523Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:32.524Z] [BOT] 💾 AFTER MERGE: 1351 jobs (merged disk + memory)
[2026-01-31T19:06:32.526Z] [BOT] ✅ No jobs to archive (all 1351 jobs within 7-day window)
[2026-01-31T19:06:32.612Z] [BOT] 💾 Saved posted_jobs.json: 1351 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:34.115Z] [BOT] 📍 [ROUTING] "Engineer 2 - Product" @ ORG_230fe79b Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:06:34.287Z] [BOT] ✅ Posted message: Engineer 2 - Product @ ORG_230fe79b Technology in #💻・tech-jobs
  ✅ Industry: Engineer 2 - Product @ ORG_230fe79b Technology
[2026-01-31T19:06:34.288Z] [BOT] 💾 Added channel posting: Engineer 2 - Product @ ORG_230fe79b Technology → category channel (1 total channels)
[2026-01-31T19:06:34.288Z] [BOT] 💾 BEFORE MERGE: 1352 jobs in memory (cached)
[2026-01-31T19:06:34.320Z] [BOT] ✅ Loaded V2 database: 1351 jobs
💾 DISK STATE: 1351 jobs on disk
[2026-01-31T19:06:34.320Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1352
[2026-01-31T19:06:34.323Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1352 jobs (merged disk + memory)
[2026-01-31T19:06:34.326Z] [BOT] ✅ No jobs to archive (all 1352 jobs within 7-day window)
[2026-01-31T19:06:34.425Z] [BOT] 💾 Saved posted_jobs.json: 1352 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:35.925Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_1954b120
[2026-01-31T19:06:35.925Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:06:36.086Z] [BOT] ✅ Posted message: Software Engineer @ ORG_1954b120 in #💻・tech-jobs
[2026-01-31T19:06:36.086Z] [BOT] ✅ Industry: Software Engineer @ ORG_1954b120
[2026-01-31T19:06:36.087Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_1954b120 → category channel (1 total channels)
[2026-01-31T19:06:36.087Z] [BOT] 💾 BEFORE MERGE: 1353 jobs in memory (cached)
[2026-01-31T19:06:36.110Z] [BOT] ✅ Loaded V2 database: 1352 jobs
💾 DISK STATE: 1352 jobs on disk
[2026-01-31T19:06:36.110Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1353
[2026-01-31T19:06:36.113Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:36.115Z] [BOT] 💾 AFTER MERGE: 1353 jobs (merged disk + memory)
[2026-01-31T19:06:36.116Z] [BOT] ✅ No jobs to archive (all 1353 jobs within 7-day window)
[2026-01-31T19:06:36.190Z] [BOT] 💾 Saved posted_jobs.json: 1353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:37.693Z] [BOT] 📍 [ROUTING] "IT Applications Specialist" @ ORG_478e100e University
[2026-01-31T19:06:37.693Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:06:37.823Z] [BOT] ✅ Posted message: IT Applications Specialist @ ORG_478e100e University in #💻・tech-jobs
[2026-01-31T19:06:37.824Z] [BOT] ✅ Industry: IT Applications Specialist @ ORG_478e100e University
[2026-01-31T19:06:37.824Z] [BOT] 💾 Added channel posting: IT Applications Specialist @ ORG_478e100e University → category channel (1 total channels)
[2026-01-31T19:06:37.824Z] [BOT] 💾 BEFORE MERGE: 1354 jobs in memory (cached)
[2026-01-31T19:06:37.848Z] [BOT] ✅ Loaded V2 database: 1353 jobs
💾 DISK STATE: 1353 jobs on disk
[2026-01-31T19:06:37.848Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1354
[2026-01-31T19:06:37.853Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:37.853Z] [BOT] 💾 AFTER MERGE: 1354 jobs (merged disk + memory)
[2026-01-31T19:06:37.854Z] [BOT] ✅ No jobs to archive (all 1354 jobs within 7-day window)
[2026-01-31T19:06:37.931Z] [BOT] 💾 Saved posted_jobs.json: 1354 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:39.433Z] [BOT] 📍 [ROUTING] "GNC Simulation Engineer 1" @ ORG_68339b13 Space
[2026-01-31T19:06:39.434Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:06:39.841Z] [BOT] ✅ Posted message: GNC Simulation Engineer 1 @ ORG_68339b13 Space in #💻・tech-jobs
[2026-01-31T19:06:39.841Z] [BOT] ✅ Industry: GNC Simulation Engineer 1 @ ORG_68339b13 Space
[2026-01-31T19:06:39.841Z] [BOT] 💾 Added channel posting: GNC Simulation Engineer 1 @ ORG_68339b13 Space → category channel (1 total channels)
[2026-01-31T19:06:39.841Z] [BOT] 💾 BEFORE MERGE: 1355 jobs in memory (cached)
[2026-01-31T19:06:39.865Z] [BOT] ✅ Loaded V2 database: 1354 jobs
💾 DISK STATE: 1354 jobs on disk
[2026-01-31T19:06:39.865Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1355
[2026-01-31T19:06:39.869Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:39.869Z] [BOT] 💾 AFTER MERGE: 1355 jobs (merged disk + memory)
[2026-01-31T19:06:39.870Z] [BOT] ✅ No jobs to archive (all 1355 jobs within 7-day window)
[2026-01-31T19:06:39.954Z] [BOT] 💾 Saved posted_jobs.json: 1355 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:44.455Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T19:06:44.457Z] [BOT] 📍 [ROUTING] "Associate Data Scientist" @ ORG_ab8a4f6b
[2026-01-31T19:06:44.457Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T19:06:44.643Z] [BOT] ✅ Posted message: Associate Data Scientist @ ORG_ab8a4f6b in #📊・JID_fb739488
[2026-01-31T19:06:44.643Z] [BOT] ✅ Industry: Associate Data Scientist @ ORG_ab8a4f6b
[2026-01-31T19:06:44.644Z] [BOT] 💾 Added channel posting: Associate Data Scientist @ ORG_ab8a4f6b → category channel (1 total channels)
[2026-01-31T19:06:44.644Z] [BOT] 💾 BEFORE MERGE: 1356 jobs in memory (cached)
[2026-01-31T19:06:44.667Z] [BOT] ✅ Loaded V2 database: 1355 jobs
💾 DISK STATE: 1355 jobs on disk
[2026-01-31T19:06:44.667Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1356
[2026-01-31T19:06:44.671Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:44.672Z] [BOT] 💾 AFTER MERGE: 1356 jobs (merged disk + memory)
[2026-01-31T19:06:44.673Z] [BOT] ✅ No jobs to archive (all 1356 jobs within 7-day window)
[2026-01-31T19:06:44.769Z] [BOT] 💾 Saved posted_jobs.json: 1356 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:46.269Z] [BOT] 📍 [ROUTING] "2026 BNY Analyst Program-Engineering - Data Science" @ ORG_b344d80e Bank of New York Mellon
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T19:06:46.269Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T19:06:46.470Z] [BOT] ✅ Posted message: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon in #📊・JID_fb739488
  ✅ Industry: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon
[2026-01-31T19:06:46.470Z] [BOT] 💾 Added channel posting: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon → category channel (1 total channels)
[2026-01-31T19:06:46.470Z] [BOT] 💾 BEFORE MERGE: 1357 jobs in memory (cached)
[2026-01-31T19:06:46.494Z] [BOT] ✅ Loaded V2 database: 1356 jobs
💾 DISK STATE: 1356 jobs on disk
[2026-01-31T19:06:46.494Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1357
[2026-01-31T19:06:46.501Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:46.501Z] [BOT] 💾 AFTER MERGE: 1357 jobs (merged disk + memory)
[2026-01-31T19:06:46.502Z] [BOT] ✅ No jobs to archive (all 1357 jobs within 7-day window)
[2026-01-31T19:06:46.595Z] [BOT] 💾 Saved posted_jobs.json: 1357 active jobs
[2026-01-31T19:06:46.595Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:48.244Z] [BOT] ✅ Posted message: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon in #🗽・JID_98d4f0de
[2026-01-31T19:06:48.244Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T19:06:48.244Z] [BOT] 💾 Added channel posting: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon → location channel (2 total channels)
[2026-01-31T19:06:48.245Z] [BOT] 💾 BEFORE MERGE: 1357 jobs in memory (cached)
[2026-01-31T19:06:48.268Z] [BOT] ✅ Loaded V2 database: 1357 jobs
💾 DISK STATE: 1357 jobs on disk
[2026-01-31T19:06:48.268Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1357
[2026-01-31T19:06:48.273Z] [BOT] 🔀 Deep merged: 2026 BNY Analyst Program-Engineering - Data Science @ ORG_b344d80e Bank of New York Mellon (disk: 1 channels → merged: 2 channels)
[2026-01-31T19:06:48.273Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1357 jobs (merged disk + memory)
[2026-01-31T19:06:48.274Z] [BOT] ✅ No jobs to archive (all 1357 jobs within 7-day window)
[2026-01-31T19:06:48.351Z] [BOT] 💾 Saved posted_jobs.json: 1357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:52.853Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T19:06:52.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_136a8411..." not found, but found as SHA256 "849b380d686f213e"
⏭️  Skipping duplicate: JID_b5dc7f29-engineer_3151000-2 (posted within 7 days)
[2026-01-31T19:06:52.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_87337af0-..." not found, but found as SHA256 "d8f26ff632fe548e"
[2026-01-31T19:06:52.854Z] [BOT] ⏭️  Skipping duplicate: JID_705febb2-graduate_1192959-1 (posted within 7 days)
[2026-01-31T19:06:52.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9fc11bf..." not found, but found as SHA256 "921b2ae5a6ccadcc"
⏭️  Skipping duplicate: JID_4a793790-product_r1840-25 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f88fd0c9-..." not found, but found as SHA256 "f93f64e4e736ccd1"
⏭️  Skipping duplicate: JID_a77af31a-engineer_315814-2 (posted within 7 days)
[2026-01-31T19:06:52.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28954219-psu_staff-job-..." not found, but found as SHA256 "c5298eddd5508c07"
⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_7dee146b-time_req_0000067530-1 (posted within 7 days)
[2026-01-31T19:06:52.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28954219-psu_staff-job-..." not found, but found as SHA256 "993dc5403fe046d6"
[2026-01-31T19:06:52.856Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_751a31a1-liu_req_0000069003-1 (posted within 7 days)
[2026-01-31T19:06:52.856Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da6b211e..." not found, but found as SHA256 "a5530b0b07d33e93"
⏭️  Skipping duplicate: JID_d501f265-_r000135859-1 (posted within 7 days)
[2026-01-31T19:06:52.856Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa4bf989..." not found, but found as SHA256 "614192fbb88bf172"
⏭️  Skipping duplicate: JID_9861af75 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_547d8dba-..." not found, but found as SHA256 "1e2d32cd4f5bc00e"
⏭️  Skipping duplicate: JID_caa9f031-scientist_r0132263-1 (posted within 7 days)
[2026-01-31T19:06:52.856Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0d273670..." not found, but found as SHA256 "18e32312bb4bebcd"
[2026-01-31T19:06:52.856Z] [BOT] ⏭️  Skipping duplicate: JID_38e07217 (posted within 7 days)
[2026-01-31T19:06:52.970Z] [BOT] ✅ Loaded pending queue: 2945 total (1568 pending, 50 enriched, 1327 posted)
[2026-01-31T19:06:53.167Z] [BOT] ✅ Saved pending queue: 2945 total (1568 pending, 40 enriched, 1337 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T19:06:53.253Z] [BOT] 📂 Loaded 11418 existing routing entries
[2026-01-31T19:06:53.396Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T19:06:53.396Z] [BOT] New entries: 10
   Total entries: 11428
   Timestamp: 2026-01-31T19:06:53.349Z
[2026-01-31T19:06:53.396Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T19:06:53.397Z] [BOT] Total attempts: 25
   Successful: 11
   Failed: 0
   Skipped: 14
[2026-01-31T19:06:53.397Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T19:06:53.397Z] [BOT] Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-31T19:06:53.397Z] [BOT] [STATS] Channel stats saved
[2026-01-31T19:06:53.397Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1357 jobs in memory (cached)
[2026-01-31T19:06:53.423Z] [BOT] ✅ Loaded V2 database: 1357 jobs
💾 DISK STATE: 1357 jobs on disk
[2026-01-31T19:06:53.424Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1357
[2026-01-31T19:06:53.426Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:06:53.427Z] [BOT] 💾 AFTER MERGE: 1357 jobs (merged disk + memory)
[2026-01-31T19:06:53.429Z] [BOT] ✅ No jobs to archive (all 1357 jobs within 7-day window)
[2026-01-31T19:06:53.503Z] [BOT] 💾 Saved posted_jobs.json: 1357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:06:53.503Z] [BOT] ✅ Database saved successfully
[2026-01-31T19:06:55.529Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*