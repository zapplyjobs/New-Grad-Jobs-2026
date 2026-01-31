# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T20:13:13.556Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T20:12:38.827Z] ========================================
[2026-01-31T20:12:38.829Z] Discord Bot Execution Log
[2026-01-31T20:12:38.829Z] Environment: GitHub Actions
[2026-01-31T20:12:38.829Z] Node Version: v20.20.0
[2026-01-31T20:12:38.829Z] ========================================
[2026-01-31T20:12:38.829Z] Environment Variables Check:
[2026-01-31T20:12:38.829Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T20:12:38.829Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T20:12:38.830Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T20:12:38.830Z] 
Multi-Channel Configuration:
[2026-01-31T20:12:38.830Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T20:12:38.830Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T20:12:38.831Z] 
Data Files Check:
[2026-01-31T20:12:38.832Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T20:12:38.874Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8285226 bytes)
[2026-01-31T20:12:38.875Z] 
========================================
[2026-01-31T20:12:38.875Z] Starting Enhanced Discord Bot...
[2026-01-31T20:12:38.875Z] ========================================
[2026-01-31T20:12:39.444Z] [BOT] ✅ Loaded V2 database: 1397 jobs
[2026-01-31T20:12:39.789Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T20:12:39.789Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T20:12:39.790Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T20:12:39.906Z] [BOT] ✅ Loaded pending queue: 2944 total (1517 pending, 50 enriched, 1377 posted)
[2026-01-31T20:12:39.906Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:12:39.908Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T20:12:39.908Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:12:39.908Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T20:12:39.908Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T20:12:39.909Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T20:12:39.909Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T20:12:39.909Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T20:12:39.909Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T20:12:39.910Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T20:12:39.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T20:12:39.910Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T20:12:39.910Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T20:12:39.910Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T20:12:39.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T20:12:39.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T20:12:39.911Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T20:12:39.911Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T20:12:39.911Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T20:12:39.911Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T20:12:39.912Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T20:12:39.912Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T20:12:39.912Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T20:12:39.912Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-01-31T20:12:39.913Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T20:12:39.913Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T20:12:39.913Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T20:12:39.922Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T20:12:39.923Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T20:12:39.923Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T20:12:39.924Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T20:12:39.924Z] [BOT] (4 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
[2026-01-31T20:12:39.924Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T20:12:39.927Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T20:12:39.928Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI" @ ORG_08c9a13c
[2026-01-31T20:12:39.928Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:12:39.945Z] [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T20:12:40.138Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T20:12:40.139Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c
[2026-01-31T20:12:40.140Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:12:40.140Z] [BOT] 💾 BEFORE MERGE: 1398 jobs in memory (cached)
[2026-01-31T20:12:40.171Z] [BOT] ✅ Loaded V2 database: 1397 jobs
💾 DISK STATE: 1397 jobs on disk
[2026-01-31T20:12:40.171Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1398
[2026-01-31T20:12:40.175Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:12:40.175Z] [BOT] 💾 AFTER MERGE: 1398 jobs (merged disk + memory)
[2026-01-31T20:12:40.176Z] [BOT] ✅ No jobs to archive (all 1398 jobs within 7-day window)
[2026-01-31T20:12:40.264Z] [BOT] 💾 Saved posted_jobs.json: 1398 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:12:41.767Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
[2026-01-31T20:12:41.767Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:12:43.397Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T20:12:43.397Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c
[2026-01-31T20:12:43.398Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:12:43.398Z] [BOT] 💾 BEFORE MERGE: 1399 jobs in memory (cached)
[2026-01-31T20:12:43.422Z] [BOT] ✅ Loaded V2 database: 1398 jobs
💾 DISK STATE: 1398 jobs on disk
[2026-01-31T20:12:43.422Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1399
[2026-01-31T20:12:43.425Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:12:43.427Z] [BOT] 💾 AFTER MERGE: 1399 jobs (merged disk + memory)
[2026-01-31T20:12:43.428Z] [BOT] ✅ No jobs to archive (all 1399 jobs within 7-day window)
[2026-01-31T20:12:43.519Z] [BOT] 💾 Saved posted_jobs.json: 1399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:12:45.020Z] [BOT] 📍 [ROUTING] "University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
[2026-01-31T20:12:45.021Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:12:45.143Z] [BOT] ✅ Posted message: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
  ✅ Industry: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-31T20:12:45.144Z] [BOT] 💾 Added channel posting: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T20:12:45.144Z] [BOT] 💾 BEFORE MERGE: 1400 jobs in memory (cached)
[2026-01-31T20:12:45.168Z] [BOT] ✅ Loaded V2 database: 1399 jobs
💾 DISK STATE: 1399 jobs on disk
[2026-01-31T20:12:45.169Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1400
[2026-01-31T20:12:45.174Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:12:45.174Z] [BOT] 💾 AFTER MERGE: 1400 jobs (merged disk + memory)
[2026-01-31T20:12:45.175Z] [BOT] ✅ No jobs to archive (all 1400 jobs within 7-day window)
[2026-01-31T20:12:45.262Z] [BOT] 💾 Saved posted_jobs.json: 1400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:12:46.763Z] [BOT] 📍 [ROUTING] "Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start" @ ORG_08c9a13c
[2026-01-31T20:12:46.764Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:12:47.071Z] [BOT] ✅ Posted message: Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c
[2026-01-31T20:12:47.071Z] [BOT] 💾 Added channel posting: Research Scientist in Generative AI for Science - Bytedance Seed - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:12:47.072Z] [BOT] 💾 BEFORE MERGE: 1401 jobs in memory (cached)
[2026-01-31T20:12:47.096Z] [BOT] ✅ Loaded V2 database: 1400 jobs
💾 DISK STATE: 1400 jobs on disk
[2026-01-31T20:12:47.096Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1401
[2026-01-31T20:12:47.099Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:12:47.101Z] [BOT] 💾 AFTER MERGE: 1401 jobs (merged disk + memory)
[2026-01-31T20:12:47.102Z] [BOT] ✅ No jobs to archive (all 1401 jobs within 7-day window)
[2026-01-31T20:12:47.189Z] [BOT] 💾 Saved posted_jobs.json: 1401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:12:48.691Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T20:12:48.691Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:12:48.846Z] [BOT] ✅ Posted message: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2026-01-31T20:12:48.847Z] [BOT] 💾 Added channel posting: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:12:48.847Z] [BOT] 💾 BEFORE MERGE: 1402 jobs in memory (cached)
[2026-01-31T20:12:48.871Z] [BOT] ✅ Loaded V2 database: 1401 jobs
💾 DISK STATE: 1401 jobs on disk
[2026-01-31T20:12:48.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1402
[2026-01-31T20:12:48.874Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1402 jobs (merged disk + memory)
[2026-01-31T20:12:48.877Z] [BOT] ✅ No jobs to archive (all 1402 jobs within 7-day window)
[2026-01-31T20:12:48.963Z] [BOT] 💾 Saved posted_jobs.json: 1402 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:12:53.465Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T20:12:53.466Z] [BOT] 📍 [ROUTING] "Data Scientist - TikTok Ads" @ ORG_1bb6fcfb
[2026-01-31T20:12:53.466Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T20:12:53.786Z] [BOT] ✅ Posted message: Data Scientist - TikTok Ads @ ORG_1bb6fcfb in #📊・JID_fb739488
[2026-01-31T20:12:53.786Z] [BOT] ✅ Industry: Data Scientist - TikTok Ads @ ORG_1bb6fcfb
[2026-01-31T20:12:53.787Z] [BOT] 💾 Added channel posting: Data Scientist - TikTok Ads @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:12:53.787Z] [BOT] 💾 BEFORE MERGE: 1403 jobs in memory (cached)
[2026-01-31T20:12:53.811Z] [BOT] ✅ Loaded V2 database: 1402 jobs
💾 DISK STATE: 1402 jobs on disk
[2026-01-31T20:12:53.811Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1403
[2026-01-31T20:12:53.816Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1403 jobs (merged disk + memory)
[2026-01-31T20:12:53.817Z] [BOT] ✅ No jobs to archive (all 1403 jobs within 7-day window)
[2026-01-31T20:12:53.895Z] [BOT] 💾 Saved posted_jobs.json: 1403 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:12:58.397Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T20:12:58.398Z] [BOT] 📍 [ROUTING] "3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd" @ ORG_08c9a13c
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:13:00.203Z] [BOT] ✅ Posted message: 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T20:13:00.204Z] [BOT] ✅ Industry: 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c
[2026-01-31T20:13:00.204Z] [BOT] 💾 Added channel posting: 3D Vision Algorithm Engineer Graduate - Hand Tracking - Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:13:00.204Z] [BOT] 💾 BEFORE MERGE: 1404 jobs in memory (cached)
[2026-01-31T20:13:00.228Z] [BOT] ✅ Loaded V2 database: 1403 jobs
💾 DISK STATE: 1403 jobs on disk
[2026-01-31T20:13:00.229Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1404
[2026-01-31T20:13:00.233Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:13:00.233Z] [BOT] 💾 AFTER MERGE: 1404 jobs (merged disk + memory)
[2026-01-31T20:13:00.234Z] [BOT] ✅ No jobs to archive (all 1404 jobs within 7-day window)
[2026-01-31T20:13:00.337Z] [BOT] 💾 Saved posted_jobs.json: 1404 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:13:01.836Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T20:13:01.836Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:13:01.990Z] [BOT] ✅ Posted message: Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:13:01.990Z] [BOT] ✅ Industry: Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb
[2026-01-31T20:13:01.991Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Capital Platform - 2026 Start','BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:13:01.991Z] [BOT] 💾 BEFORE MERGE: 1405 jobs in memory (cached)
[2026-01-31T20:13:02.015Z] [BOT] ✅ Loaded V2 database: 1404 jobs
💾 DISK STATE: 1404 jobs on disk
[2026-01-31T20:13:02.015Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1405
[2026-01-31T20:13:02.022Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:13:02.022Z] [BOT] 💾 AFTER MERGE: 1405 jobs (merged disk + memory)
[2026-01-31T20:13:02.023Z] [BOT] ✅ No jobs to archive (all 1405 jobs within 7-day window)
[2026-01-31T20:13:02.119Z] [BOT] 💾 Saved posted_jobs.json: 1405 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:13:03.618Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Algorithm Engineering" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T20:13:03.619Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:13:03.773Z] [BOT] ✅ Posted message: Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb
[2026-01-31T20:13:03.774Z] [BOT] 💾 Added channel posting: Graduate Engineer - Algorithm Engineering @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:13:03.774Z] [BOT] 💾 BEFORE MERGE: 1406 jobs in memory (cached)
[2026-01-31T20:13:03.798Z] [BOT] ✅ Loaded V2 database: 1405 jobs
💾 DISK STATE: 1405 jobs on disk
[2026-01-31T20:13:03.799Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1406
[2026-01-31T20:13:03.803Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:13:03.803Z] [BOT] 💾 AFTER MERGE: 1406 jobs (merged disk + memory)
[2026-01-31T20:13:03.805Z] [BOT] ✅ No jobs to archive (all 1406 jobs within 7-day window)
[2026-01-31T20:13:03.887Z] [BOT] 💾 Saved posted_jobs.json: 1406 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:13:05.389Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - 3D Avatar" @ ORG_08c9a13c
[2026-01-31T20:13:05.389Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:13:05.511Z] [BOT] ✅ Posted message: Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T20:13:05.511Z] [BOT] ✅ Industry: Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c
[2026-01-31T20:13:05.512Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - 3D Avatar @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1407 jobs in memory (cached)
[2026-01-31T20:13:05.536Z] [BOT] ✅ Loaded V2 database: 1406 jobs
💾 DISK STATE: 1406 jobs on disk
[2026-01-31T20:13:05.537Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1407
[2026-01-31T20:13:05.541Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:13:05.541Z] [BOT] 💾 AFTER MERGE: 1407 jobs (merged disk + memory)
[2026-01-31T20:13:05.542Z] [BOT] ✅ No jobs to archive (all 1407 jobs within 7-day window)
[2026-01-31T20:13:05.621Z] [BOT] 💾 Saved posted_jobs.json: 1407 active jobs
[2026-01-31T20:13:05.622Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T20:13:10.123Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T20:13:10.125Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5ad55cb..." not found, but found as SHA256 "d2cc742948b053ab"
[2026-01-31T20:13:10.125Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_885d24fb-detail (posted within 7 days)
[2026-01-31T20:13:10.125Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_537e9cf8..." not found, but found as SHA256 "0b83025d35bfb7d9"
[2026-01-31T20:13:10.125Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7a8774a4 (posted within 7 days)
[2026-01-31T20:13:10.126Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1294e754..." not found, but found as SHA256 "14db66899649033e"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_5729a83b-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c078d52b..." not found, but found as SHA256 "072bded0e5ab8278"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_510ed91e-detail (posted within 7 days)
[2026-01-31T20:13:10.126Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c6ec696d..." not found, but found as SHA256 "0c1b996952f88bdd"
⏭️  Skipping duplicate: JID_6796d1d6-CH_7939bf4b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "85d8859497a99f88"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r160690 (posted within 7 days)
[2026-01-31T20:13:10.126Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_63daec2e..." not found, but found as SHA256 "6fb658c5a618d08e"
[2026-01-31T20:13:10.127Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_2ea2e67a (posted within 7 days)
[2026-01-31T20:13:10.127Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10a1b330..." not found, but found as SHA256 "ac1d8a8ce8734cb7"
[2026-01-31T20:13:10.127Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a0f2fa61-detail (posted within 7 days)
[2026-01-31T20:13:10.127Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_517216a8..." not found, but found as SHA256 "3fa28b38df3686d8"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_0f14ea99-detail (posted within 7 days)
[2026-01-31T20:13:10.127Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7ea6cf1b..." not found, but found as SHA256 "1acba06d4ca4b2e2"
[2026-01-31T20:13:10.127Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5d75fef3-detail (posted within 7 days)
[2026-01-31T20:13:10.238Z] [BOT] ✅ Loaded pending queue: 2944 total (1517 pending, 50 enriched, 1377 posted)
[2026-01-31T20:13:10.431Z] [BOT] ✅ Saved pending queue: 2944 total (1517 pending, 40 enriched, 1387 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T20:13:10.431Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T20:13:10.518Z] [BOT] 📂 Loaded 11468 existing routing entries
[2026-01-31T20:13:10.661Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T20:13:10.661Z] [BOT] New entries: 10
   Total entries: 11478
   Timestamp: 2026-01-31T20:13:10.615Z
[2026-01-31T20:13:10.661Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T20:13:10.662Z] [BOT] Total attempts: 24
   Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T20:13:10.662Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T20:13:10.662Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #📊・JID_fb739488: 1 posts
[2026-01-31T20:13:10.662Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T20:13:10.662Z] [BOT] 💾 BEFORE MERGE: 1407 jobs in memory (cached)
[2026-01-31T20:13:10.690Z] [BOT] ✅ Loaded V2 database: 1407 jobs
💾 DISK STATE: 1407 jobs on disk
[2026-01-31T20:13:10.691Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1407
[2026-01-31T20:13:10.693Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:13:10.693Z] [BOT] 💾 AFTER MERGE: 1407 jobs (merged disk + memory)
[2026-01-31T20:13:10.696Z] [BOT] ✅ No jobs to archive (all 1407 jobs within 7-day window)
[2026-01-31T20:13:10.772Z] [BOT] 💾 Saved posted_jobs.json: 1407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:13:10.772Z] [BOT] ✅ Database saved successfully
[2026-01-31T20:13:12.801Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*