# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T19:57:02.463Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T19:56:30.251Z] ========================================
[2026-01-31T19:56:30.253Z] Discord Bot Execution Log
[2026-01-31T19:56:30.253Z] Environment: GitHub Actions
[2026-01-31T19:56:30.253Z] Node Version: v20.20.0
[2026-01-31T19:56:30.253Z] ========================================
[2026-01-31T19:56:30.253Z] Environment Variables Check:
[2026-01-31T19:56:30.253Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T19:56:30.253Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.253Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T19:56:30.254Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T19:56:30.254Z] 
Multi-Channel Configuration:
[2026-01-31T19:56:30.254Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T19:56:30.254Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T19:56:30.255Z] 
Data Files Check:
[2026-01-31T19:56:30.256Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T19:56:30.307Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8275075 bytes)
[2026-01-31T19:56:30.307Z] 
========================================
[2026-01-31T19:56:30.307Z] Starting Enhanced Discord Bot...
[2026-01-31T19:56:30.307Z] ========================================
[2026-01-31T19:56:30.872Z] [BOT] ✅ Loaded V2 database: 1387 jobs
[2026-01-31T19:56:31.345Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T19:56:31.346Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T19:56:31.346Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T19:56:31.467Z] [BOT] ✅ Loaded pending queue: 2944 total (1527 pending, 50 enriched, 1367 posted)
[2026-01-31T19:56:31.469Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T19:56:31.469Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:56:31.469Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T19:56:31.470Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T19:56:31.470Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T19:56:31.471Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T19:56:31.471Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T19:56:31.471Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-31T19:56:31.471Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T19:56:31.471Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T19:56:31.472Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T19:56:31.472Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T19:56:31.472Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T19:56:31.472Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T19:56:31.472Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T19:56:31.472Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T19:56:31.473Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T19:56:31.473Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T19:56:31.473Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T19:56:31.473Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T19:56:31.482Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T19:56:31.483Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T19:56:31.483Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T19:56:31.484Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T19:56:31.484Z] [BOT] (4 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ByteDance: san jose, seattle
[2026-01-31T19:56:31.484Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T19:56:31.486Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T19:56:31.487Z] [BOT] 📍 [ROUTING] "Efficient ML Graduate - AI Platform - PhD" @ ORG_08c9a13c
[2026-01-31T19:56:31.487Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:56:31.504Z] [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T19:56:31.760Z] [BOT] ✅ Posted message: Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c
[2026-01-31T19:56:31.761Z] [BOT] 💾 Added channel posting: Efficient ML Graduate - AI Platform - PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:56:31.761Z] [BOT] 💾 BEFORE MERGE: 1388 jobs in memory (cached)
[2026-01-31T19:56:31.793Z] [BOT] ✅ Loaded V2 database: 1387 jobs
💾 DISK STATE: 1387 jobs on disk
[2026-01-31T19:56:31.794Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1388
[2026-01-31T19:56:31.801Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:31.801Z] [BOT] 💾 AFTER MERGE: 1388 jobs (merged disk + memory)
[2026-01-31T19:56:31.802Z] [BOT] ✅ No jobs to archive (all 1388 jobs within 7-day window)
[2026-01-31T19:56:31.895Z] [BOT] 💾 Saved posted_jobs.json: 1388 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:33.397Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - Data Ecosystem" @ ORG_1bb6fcfb
[2026-01-31T19:56:33.397Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:56:33.615Z] [BOT] ✅ Posted message: Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T19:56:33.615Z] [BOT] ✅ Industry: Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb
[2026-01-31T19:56:33.615Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Data Arch - Data Ecosystem @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:56:33.616Z] [BOT] 💾 BEFORE MERGE: 1389 jobs in memory (cached)
[2026-01-31T19:56:33.639Z] [BOT] ✅ Loaded V2 database: 1388 jobs
💾 DISK STATE: 1388 jobs on disk
[2026-01-31T19:56:33.639Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1389
[2026-01-31T19:56:33.643Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:33.643Z] [BOT] 💾 AFTER MERGE: 1389 jobs (merged disk + memory)
[2026-01-31T19:56:33.645Z] [BOT] ✅ No jobs to archive (all 1389 jobs within 7-day window)
[2026-01-31T19:56:33.733Z] [BOT] 💾 Saved posted_jobs.json: 1389 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:35.234Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Interface and Platform - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T19:56:35.235Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:56:35.536Z] [BOT] ✅ Posted message: Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb
[2026-01-31T19:56:35.536Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Ads Interface and Platform - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:56:35.536Z] [BOT] 💾 BEFORE MERGE: 1390 jobs in memory (cached)
[2026-01-31T19:56:35.561Z] [BOT] ✅ Loaded V2 database: 1389 jobs
💾 DISK STATE: 1389 jobs on disk
[2026-01-31T19:56:35.561Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1390
[2026-01-31T19:56:35.564Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1390 jobs (merged disk + memory)
[2026-01-31T19:56:35.567Z] [BOT] ✅ No jobs to archive (all 1390 jobs within 7-day window)
[2026-01-31T19:56:35.653Z] [BOT] 💾 Saved posted_jobs.json: 1390 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:37.155Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
[2026-01-31T19:56:37.155Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:56:37.435Z] [BOT] ✅ Posted message: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c
[2026-01-31T19:56:37.436Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Video Quality Analysis&Coding Strategy - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1391 jobs in memory (cached)
[2026-01-31T19:56:37.466Z] [BOT] ✅ Loaded V2 database: 1390 jobs
💾 DISK STATE: 1390 jobs on disk
[2026-01-31T19:56:37.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1391
[2026-01-31T19:56:37.470Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:37.470Z] [BOT] 💾 AFTER MERGE: 1391 jobs (merged disk + memory)
[2026-01-31T19:56:37.473Z] [BOT] ✅ No jobs to archive (all 1391 jobs within 7-day window)
[2026-01-31T19:56:37.558Z] [BOT] 💾 Saved posted_jobs.json: 1391 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:42.059Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T19:56:42.060Z] [BOT] 📍 [ROUTING] "Software Engineer – New grad" @ ORG_7729bbc1inue
   Category: AI (matched: "machine learning")
[2026-01-31T19:56:42.060Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:56:42.246Z] [BOT] ✅ Posted message: Software Engineer – New grad @ ORG_7729bbc1inue in #🤖・ai-jobs
[2026-01-31T19:56:42.246Z] [BOT] ✅ Industry: Software Engineer – New grad @ ORG_7729bbc1inue
[2026-01-31T19:56:42.247Z] [BOT] 💾 Added channel posting: Software Engineer – New grad @ ORG_7729bbc1inue → category channel (1 total channels)
[2026-01-31T19:56:42.247Z] [BOT] 💾 BEFORE MERGE: 1392 jobs in memory (cached)
[2026-01-31T19:56:42.271Z] [BOT] ✅ Loaded V2 database: 1391 jobs
💾 DISK STATE: 1391 jobs on disk
[2026-01-31T19:56:42.271Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1392
[2026-01-31T19:56:42.275Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:42.275Z] [BOT] 💾 AFTER MERGE: 1392 jobs (merged disk + memory)
[2026-01-31T19:56:42.276Z] [BOT] ✅ No jobs to archive (all 1392 jobs within 7-day window)
[2026-01-31T19:56:42.363Z] [BOT] 💾 Saved posted_jobs.json: 1392 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:43.864Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T19:56:43.864Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:56:43.999Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c
[2026-01-31T19:56:43.999Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:56:43.999Z] [BOT] 💾 BEFORE MERGE: 1393 jobs in memory (cached)
[2026-01-31T19:56:44.023Z] [BOT] ✅ Loaded V2 database: 1392 jobs
💾 DISK STATE: 1392 jobs on disk
[2026-01-31T19:56:44.023Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1393
[2026-01-31T19:56:44.028Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:44.028Z] [BOT] 💾 AFTER MERGE: 1393 jobs (merged disk + memory)
[2026-01-31T19:56:44.029Z] [BOT] ✅ No jobs to archive (all 1393 jobs within 7-day window)
[2026-01-31T19:56:44.127Z] [BOT] 💾 Saved posted_jobs.json: 1393 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:45.627Z] [BOT] 📍 [ROUTING] "Research Scientist - Seed Infra Machine Learning Systems" @ ORG_08c9a13c
[2026-01-31T19:56:45.627Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:56:45.791Z] [BOT] ✅ Posted message: Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T19:56:45.791Z] [BOT] ✅ Industry: Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c
[2026-01-31T19:56:45.792Z] [BOT] 💾 Added channel posting: Research Scientist - Seed Infra Machine Learning Systems @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:56:45.792Z] [BOT] 💾 BEFORE MERGE: 1394 jobs in memory (cached)
[2026-01-31T19:56:45.815Z] [BOT] ✅ Loaded V2 database: 1393 jobs
💾 DISK STATE: 1393 jobs on disk
[2026-01-31T19:56:45.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1394
[2026-01-31T19:56:45.821Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:45.821Z] [BOT] 💾 AFTER MERGE: 1394 jobs (merged disk + memory)
[2026-01-31T19:56:45.822Z] [BOT] ✅ No jobs to archive (all 1394 jobs within 7-day window)
[2026-01-31T19:56:45.900Z] [BOT] 💾 Saved posted_jobs.json: 1394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:47.401Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_08c9a13c
[2026-01-31T19:56:47.401Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:56:47.745Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T19:56:47.745Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c
[2026-01-31T19:56:47.746Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:56:47.746Z] [BOT] 💾 BEFORE MERGE: 1395 jobs in memory (cached)
[2026-01-31T19:56:47.770Z] [BOT] ✅ Loaded V2 database: 1394 jobs
💾 DISK STATE: 1394 jobs on disk
[2026-01-31T19:56:47.770Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1395
[2026-01-31T19:56:47.774Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:47.775Z] [BOT] 💾 AFTER MERGE: 1395 jobs (merged disk + memory)
[2026-01-31T19:56:47.775Z] [BOT] ✅ No jobs to archive (all 1395 jobs within 7-day window)
[2026-01-31T19:56:47.854Z] [BOT] 💾 Saved posted_jobs.json: 1395 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:49.356Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd" @ ORG_08c9a13c
[2026-01-31T19:56:49.357Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:56:49.641Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T19:56:49.642Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c
[2026-01-31T19:56:49.642Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:56:49.642Z] [BOT] 💾 BEFORE MERGE: 1396 jobs in memory (cached)
[2026-01-31T19:56:49.666Z] [BOT] ✅ Loaded V2 database: 1395 jobs
💾 DISK STATE: 1395 jobs on disk
[2026-01-31T19:56:49.666Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1396
[2026-01-31T19:56:49.670Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:49.670Z] [BOT] 💾 AFTER MERGE: 1396 jobs (merged disk + memory)
[2026-01-31T19:56:49.671Z] [BOT] ✅ No jobs to archive (all 1396 jobs within 7-day window)
[2026-01-31T19:56:49.754Z] [BOT] 💾 Saved posted_jobs.json: 1396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:54.255Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T19:56:54.257Z] [BOT] 📍 [ROUTING] "Data Analyst Graduate - 2026 Start”," @ ORG_1bb6fcfb
[2026-01-31T19:56:54.257Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T19:56:54.426Z] [BOT] ✅ Posted message: Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb in #📊・JID_fb739488
[2026-01-31T19:56:54.426Z] [BOT] ✅ Industry: Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb
[2026-01-31T19:56:54.427Z] [BOT] 💾 Added channel posting: Data Analyst Graduate - 2026 Start”, @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1397 jobs in memory (cached)
[2026-01-31T19:56:54.450Z] [BOT] ✅ Loaded V2 database: 1396 jobs
💾 DISK STATE: 1396 jobs on disk
[2026-01-31T19:56:54.451Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1397
[2026-01-31T19:56:54.455Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:54.455Z] [BOT] 💾 AFTER MERGE: 1397 jobs (merged disk + memory)
[2026-01-31T19:56:54.456Z] [BOT] ✅ No jobs to archive (all 1397 jobs within 7-day window)
[2026-01-31T19:56:54.550Z] [BOT] 💾 Saved posted_jobs.json: 1397 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:59.050Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T19:56:59.051Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_682c536e..." not found, but found as SHA256 "c9442c4564dd1489"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_07ad25af-detail (posted within 7 days)
[2026-01-31T19:56:59.052Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a0c64ef-..." not found, but found as SHA256 "8f77edbfa214cf33"
[2026-01-31T19:56:59.052Z] [BOT] ⏭️  Skipping duplicate: JID_1f4dccac (posted within 7 days)
[2026-01-31T19:56:59.052Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5cde2bcf..." not found, but found as SHA256 "b1d2a150c34922e6"
⏭️  Skipping duplicate: JID_6796d1d6-CH_8e21a019 (posted within 7 days)
[2026-01-31T19:56:59.052Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39503eb0..." not found, but found as SHA256 "d45eca65fb33101a"
⏭️  Skipping duplicate: JID_6796d1d6-CH_f3f673d1 (posted within 7 days)
[2026-01-31T19:56:59.053Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8e670c09..." not found, but found as SHA256 "29058bbb753f21a2"
[2026-01-31T19:56:59.053Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_3ac14728 (posted within 7 days)
[2026-01-31T19:56:59.053Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_23f910ec..." not found, but found as SHA256 "9e08c51ee8c6b875"
[2026-01-31T19:56:59.053Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_44577216-detail (posted within 7 days)
[2026-01-31T19:56:59.053Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5ad55cb..." not found, but found as SHA256 "1d8605ef4fc01e44"
[2026-01-31T19:56:59.053Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_f785b07f-detail (posted within 7 days)
[2026-01-31T19:56:59.054Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6bd4170d..." not found, but found as SHA256 "076793d98bd0a037"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_6f71abaf-detail (posted within 7 days)
[2026-01-31T19:56:59.054Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4575dbed..." not found, but found as SHA256 "a3ee1d34eabc3c65"
[2026-01-31T19:56:59.054Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2d5eb380-detail (posted within 7 days)
[2026-01-31T19:56:59.054Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1c0f49e9..." not found, but found as SHA256 "b74719d36fd05afe"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_852fbee9-detail (posted within 7 days)
[2026-01-31T19:56:59.171Z] [BOT] ✅ Loaded pending queue: 2944 total (1527 pending, 50 enriched, 1367 posted)
[2026-01-31T19:56:59.350Z] [BOT] ✅ Saved pending queue: 2944 total (1527 pending, 40 enriched, 1377 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T19:56:59.350Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T19:56:59.437Z] [BOT] 📂 Loaded 11458 existing routing entries
[2026-01-31T19:56:59.577Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T19:56:59.578Z] [BOT] New entries: 10
   Total entries: 11468
   Timestamp: 2026-01-31T19:56:59.531Z
[2026-01-31T19:56:59.578Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T19:56:59.578Z] [BOT] Total attempts: 24
   Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T19:56:59.578Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T19:56:59.578Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-31T19:56:59.578Z] [BOT] 1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-31T19:56:59.578Z] [BOT] 3. #📊・JID_fb739488: 1 posts
[2026-01-31T19:56:59.579Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1397 jobs in memory (cached)
[2026-01-31T19:56:59.605Z] [BOT] ✅ Loaded V2 database: 1397 jobs
💾 DISK STATE: 1397 jobs on disk
[2026-01-31T19:56:59.605Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1397
[2026-01-31T19:56:59.608Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:56:59.608Z] [BOT] 💾 AFTER MERGE: 1397 jobs (merged disk + memory)
[2026-01-31T19:56:59.610Z] [BOT] ✅ No jobs to archive (all 1397 jobs within 7-day window)
[2026-01-31T19:56:59.682Z] [BOT] 💾 Saved posted_jobs.json: 1397 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:56:59.682Z] [BOT] ✅ Database saved successfully
[2026-01-31T19:57:01.710Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2508) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*