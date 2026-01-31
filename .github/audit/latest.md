# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T19:44:19.116Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T19:43:49.069Z] ========================================
[2026-01-31T19:43:49.071Z] Discord Bot Execution Log
[2026-01-31T19:43:49.071Z] Environment: GitHub Actions
[2026-01-31T19:43:49.071Z] Node Version: v20.20.0
[2026-01-31T19:43:49.071Z] ========================================
[2026-01-31T19:43:49.071Z] Environment Variables Check:
[2026-01-31T19:43:49.071Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T19:43:49.071Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.071Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T19:43:49.071Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T19:43:49.071Z] 
Multi-Channel Configuration:
[2026-01-31T19:43:49.071Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T19:43:49.072Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T19:43:49.072Z] 
Data Files Check:
[2026-01-31T19:43:49.073Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T19:43:49.125Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8256289 bytes)
[2026-01-31T19:43:49.125Z] 
========================================
[2026-01-31T19:43:49.125Z] Starting Enhanced Discord Bot...
[2026-01-31T19:43:49.125Z] ========================================
[2026-01-31T19:43:49.630Z] [BOT] ✅ Loaded V2 database: 1377 jobs
[2026-01-31T19:43:50.316Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T19:43:50.316Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T19:43:50.316Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T19:43:50.482Z] [BOT] ✅ Loaded pending queue: 2944 total (1537 pending, 50 enriched, 1357 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:43:50.483Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T19:43:50.483Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:43:50.483Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T19:43:50.484Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T19:43:50.485Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T19:43:50.485Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T19:43:50.485Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T19:43:50.485Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T19:43:50.485Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T19:43:50.485Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T19:43:50.486Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T19:43:50.486Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T19:43:50.486Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T19:43:50.486Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T19:43:50.486Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T19:43:50.487Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T19:43:50.487Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T19:43:50.487Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T19:43:50.487Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T19:43:50.487Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T19:43:50.487Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T19:43:50.487Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T19:43:50.496Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T19:43:50.497Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T19:43:50.497Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T19:43:50.497Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T19:43:50.498Z] [BOT] (4 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Software Engineer Graduate - Ads Interface and Platform - BS/MS @ TikTok: seattle, san jose
[2026-01-31T19:43:50.498Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ByteDance: san jose, seattle
   - Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ByteDance: san jose, seattle
   - Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ByteDance: seattle, san jose
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T19:43:50.501Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T19:43:50.501Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Multimodal Large Language Model - Phd" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
[2026-01-31T19:43:50.502Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T19:43:50.518Z] [BOT ERROR] (node:2705) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T19:43:50.754Z] [BOT] ✅ Posted message: Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c
[2026-01-31T19:43:50.755Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Multimodal Large Language Model - Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:43:50.755Z] [BOT] 💾 BEFORE MERGE: 1378 jobs in memory (cached)
[2026-01-31T19:43:50.798Z] [BOT] ✅ Loaded V2 database: 1377 jobs
💾 DISK STATE: 1377 jobs on disk
[2026-01-31T19:43:50.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1378
[2026-01-31T19:43:50.806Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:43:50.806Z] [BOT] 💾 AFTER MERGE: 1378 jobs (merged disk + memory)
[2026-01-31T19:43:50.807Z] [BOT] ✅ No jobs to archive (all 1378 jobs within 7-day window)
[2026-01-31T19:43:50.902Z] [BOT] 💾 Saved posted_jobs.json: 1378 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:43:52.404Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:43:52.611Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c
[2026-01-31T19:43:52.611Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - Multiple Teams @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:43:52.612Z] [BOT] 💾 BEFORE MERGE: 1379 jobs in memory (cached)
[2026-01-31T19:43:52.647Z] [BOT] ✅ Loaded V2 database: 1378 jobs
💾 DISK STATE: 1378 jobs on disk
[2026-01-31T19:43:52.647Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1379
[2026-01-31T19:43:52.650Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:43:52.650Z] [BOT] 💾 AFTER MERGE: 1379 jobs (merged disk + memory)
[2026-01-31T19:43:52.654Z] [BOT] ✅ No jobs to archive (all 1379 jobs within 7-day window)
[2026-01-31T19:43:52.749Z] [BOT] 💾 Saved posted_jobs.json: 1379 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:43:54.249Z] [BOT] 📍 [ROUTING] "AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD" @ ORG_08c9a13c
[2026-01-31T19:43:54.250Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:43:54.401Z] [BOT] ✅ Posted message: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c
[2026-01-31T19:43:54.401Z] [BOT] 💾 Added channel posting: AI LLM Network Software Development Engineer Graduate - High Speed Network - 2026 Start PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:43:54.401Z] [BOT] 💾 BEFORE MERGE: 1380 jobs in memory (cached)
[2026-01-31T19:43:54.436Z] [BOT] ✅ Loaded V2 database: 1379 jobs
💾 DISK STATE: 1379 jobs on disk
[2026-01-31T19:43:54.437Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1380
[2026-01-31T19:43:54.440Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:43:54.440Z] [BOT] 💾 AFTER MERGE: 1380 jobs (merged disk + memory)
[2026-01-31T19:43:54.443Z] [BOT] ✅ No jobs to archive (all 1380 jobs within 7-day window)
[2026-01-31T19:43:54.538Z] [BOT] 💾 Saved posted_jobs.json: 1380 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:43:56.039Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_08c9a13c
[2026-01-31T19:43:56.039Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:43:56.312Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T19:43:56.312Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c
[2026-01-31T19:43:56.314Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1381 jobs in memory (cached)
[2026-01-31T19:43:56.349Z] [BOT] ✅ Loaded V2 database: 1380 jobs
💾 DISK STATE: 1380 jobs on disk
[2026-01-31T19:43:56.349Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1381
[2026-01-31T19:43:56.353Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:43:56.354Z] [BOT] 💾 AFTER MERGE: 1381 jobs (merged disk + memory)
[2026-01-31T19:43:56.357Z] [BOT] ✅ No jobs to archive (all 1381 jobs within 7-day window)
[2026-01-31T19:43:56.452Z] [BOT] 💾 Saved posted_jobs.json: 1381 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:44:00.954Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T19:44:00.954Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Interface and Platform - BS/MS" @ ORG_1bb6fcfb
[2026-01-31T19:44:00.955Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:44:01.476Z] [BOT] ✅ Posted message: Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb
[2026-01-31T19:44:01.476Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:44:01.476Z] [BOT] 💾 BEFORE MERGE: 1382 jobs in memory (cached)
[2026-01-31T19:44:01.511Z] [BOT] ✅ Loaded V2 database: 1381 jobs
💾 DISK STATE: 1381 jobs on disk
[2026-01-31T19:44:01.512Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1382
[2026-01-31T19:44:01.518Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:44:01.518Z] [BOT] 💾 AFTER MERGE: 1382 jobs (merged disk + memory)
[2026-01-31T19:44:01.519Z] [BOT] ✅ No jobs to archive (all 1382 jobs within 7-day window)
[2026-01-31T19:44:01.616Z] [BOT] 💾 Saved posted_jobs.json: 1382 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:44:03.119Z] [BOT] 📍 [ROUTING] "Apx – New Grad" @ ORG_d5eef8ad
   Category: TECH (default)
[2026-01-31T19:44:03.119Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:44:03.354Z] [BOT] ✅ Posted message: Apx – New Grad @ ORG_d5eef8ad in #💻・tech-jobs
[2026-01-31T19:44:03.354Z] [BOT] ✅ Industry: Apx – New Grad @ ORG_d5eef8ad
[2026-01-31T19:44:03.355Z] [BOT] 💾 Added channel posting: Apx – New Grad @ ORG_d5eef8ad → category channel (1 total channels)
[2026-01-31T19:44:03.355Z] [BOT] 💾 BEFORE MERGE: 1383 jobs in memory (cached)
[2026-01-31T19:44:03.389Z] [BOT] ✅ Loaded V2 database: 1382 jobs
💾 DISK STATE: 1382 jobs on disk
[2026-01-31T19:44:03.390Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1383
[2026-01-31T19:44:03.395Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1383 jobs (merged disk + memory)
[2026-01-31T19:44:03.396Z] [BOT] ✅ No jobs to archive (all 1383 jobs within 7-day window)
[2026-01-31T19:44:03.495Z] [BOT] 💾 Saved posted_jobs.json: 1383 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:44:04.995Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Architect - AI/ML Infrastructure" @ ORG_1bb6fcfb
[2026-01-31T19:44:04.995Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:44:05.181Z] [BOT] ✅ Posted message: Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T19:44:05.181Z] [BOT] ✅ Industry: Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb
[2026-01-31T19:44:05.182Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Data Architect - AI/ML Infrastructure @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:44:05.182Z] [BOT] 💾 BEFORE MERGE: 1384 jobs in memory (cached)
[2026-01-31T19:44:05.217Z] [BOT] ✅ Loaded V2 database: 1383 jobs
💾 DISK STATE: 1383 jobs on disk
[2026-01-31T19:44:05.217Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1384
[2026-01-31T19:44:05.222Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1384 jobs (merged disk + memory)
[2026-01-31T19:44:05.223Z] [BOT] ✅ No jobs to archive (all 1384 jobs within 7-day window)
[2026-01-31T19:44:05.319Z] [BOT] 💾 Saved posted_jobs.json: 1384 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:44:06.820Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer Graduate - Ads Interface and Platform" @ ORG_1bb6fcfb
[2026-01-31T19:44:06.820Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:44:06.984Z] [BOT] ✅ Posted message: Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T19:44:06.984Z] [BOT] ✅ Industry: Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb
[2026-01-31T19:44:06.984Z] [BOT] 💾 Added channel posting: Frontend Software Engineer Graduate - Ads Interface and Platform @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:44:06.985Z] [BOT] 💾 BEFORE MERGE: 1385 jobs in memory (cached)
[2026-01-31T19:44:07.019Z] [BOT] ✅ Loaded V2 database: 1384 jobs
💾 DISK STATE: 1384 jobs on disk
[2026-01-31T19:44:07.020Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1385
[2026-01-31T19:44:07.025Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1385 jobs (merged disk + memory)
[2026-01-31T19:44:07.026Z] [BOT] ✅ No jobs to archive (all 1385 jobs within 7-day window)
[2026-01-31T19:44:07.115Z] [BOT] 💾 Saved posted_jobs.json: 1385 active jobs
[2026-01-31T19:44:07.116Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T19:44:08.617Z] [BOT] 📍 [ROUTING] "Instrument Operator" @ ORG_8fc44164 Consulting
   Category: TECH (default)
[2026-01-31T19:44:08.617Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:44:08.788Z] [BOT] ✅ Posted message: Instrument Operator @ ORG_8fc44164 Consulting in #💻・tech-jobs
  ✅ Industry: Instrument Operator @ ORG_8fc44164 Consulting
[2026-01-31T19:44:08.788Z] [BOT] 💾 Added channel posting: Instrument Operator @ ORG_8fc44164 Consulting → category channel (1 total channels)
[2026-01-31T19:44:08.789Z] [BOT] 💾 BEFORE MERGE: 1386 jobs in memory (cached)
[2026-01-31T19:44:08.824Z] [BOT] ✅ Loaded V2 database: 1385 jobs
💾 DISK STATE: 1385 jobs on disk
[2026-01-31T19:44:08.824Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1386
[2026-01-31T19:44:08.829Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1386 jobs (merged disk + memory)
[2026-01-31T19:44:08.830Z] [BOT] ✅ No jobs to archive (all 1386 jobs within 7-day window)
[2026-01-31T19:44:08.927Z] [BOT] 💾 Saved posted_jobs.json: 1386 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:44:10.429Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training" @ ORG_08c9a13c
   Category: TECH (default)
[2026-01-31T19:44:10.430Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:44:10.597Z] [BOT] ✅ Posted message: Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T19:44:10.597Z] [BOT] ✅ Industry: Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training @ ORG_08c9a13c
[2026-01-31T19:44:10.598Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Multimodal Interaction and World Model - Pre-Training @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1387 jobs in memory (cached)
[2026-01-31T19:44:10.633Z] [BOT] ✅ Loaded V2 database: 1386 jobs
💾 DISK STATE: 1386 jobs on disk
[2026-01-31T19:44:10.633Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1387
[2026-01-31T19:44:10.638Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1387 jobs (merged disk + memory)
[2026-01-31T19:44:10.639Z] [BOT] ✅ No jobs to archive (all 1387 jobs within 7-day window)
[2026-01-31T19:44:10.731Z] [BOT] 💾 Saved posted_jobs.json: 1387 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:44:15.232Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T19:44:15.233Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f31e8a2c..." not found, but found as SHA256 "e869bcabdb5a40c8"
[2026-01-31T19:44:15.233Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_306ee084-detail (posted within 7 days)
[2026-01-31T19:44:15.234Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b4af2615..." not found, but found as SHA256 "dfc3aab46fa00cd3"
[2026-01-31T19:44:15.234Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3f3a2552-detail (posted within 7 days)
[2026-01-31T19:44:15.234Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9a6df7ab..." not found, but found as SHA256 "6f38186c17261677"
⏭️  Skipping duplicate: JID_6796d1d6-CH_51d5c405 (posted within 7 days)
[2026-01-31T19:44:15.234Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb994925..." not found, but found as SHA256 "14a7a51349d403f6"
[2026-01-31T19:44:15.235Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a72e555b-detail (posted within 7 days)
[2026-01-31T19:44:15.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5ad55cb..." not found, but found as SHA256 "302203266863d4ab"
[2026-01-31T19:44:15.235Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2fbe5c6f-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_133cb2c4..." not found, but found as SHA256 "de2f95b8c8a6f3e6"
[2026-01-31T19:44:15.235Z] [BOT] ⏭️  Skipping duplicate: JID_17d54577 (posted within 7 days)
[2026-01-31T19:44:15.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1bb926e1..." not found, but found as SHA256 "06ca1c86b5692429"
[2026-01-31T19:44:15.235Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_12ecb01d (posted within 7 days)
[2026-01-31T19:44:15.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cf53cbff..." not found, but found as SHA256 "e637e92ff6121f47"
[2026-01-31T19:44:15.235Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7f933fd7 (posted within 7 days)
[2026-01-31T19:44:15.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b1a09e33..." not found, but found as SHA256 "07fd98a7871a6e31"
[2026-01-31T19:44:15.236Z] [BOT] ⏭️  Skipping duplicate: JID_b1a09e33 (posted within 7 days)
[2026-01-31T19:44:15.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6ae14e64..." not found, but found as SHA256 "fbca7297be6c18c0"
[2026-01-31T19:44:15.236Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2e4d2e3e-detail (posted within 7 days)
[2026-01-31T19:44:15.385Z] [BOT] ✅ Loaded pending queue: 2944 total (1537 pending, 50 enriched, 1357 posted)
[2026-01-31T19:44:15.580Z] [BOT] ✅ Saved pending queue: 2944 total (1537 pending, 40 enriched, 1367 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T19:44:15.677Z] [BOT] 📂 Loaded 11448 existing routing entries
[2026-01-31T19:44:15.796Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11458
[2026-01-31T19:44:15.796Z] [BOT] Timestamp: 2026-01-31T19:44:15.756Z
[2026-01-31T19:44:15.797Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T19:44:15.797Z] [BOT] Total attempts: 24
   Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T19:44:15.797Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T19:44:15.797Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
[2026-01-31T19:44:15.797Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-31T19:44:15.797Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T19:44:15.797Z] [BOT] 💾 BEFORE MERGE: 1387 jobs in memory (cached)
[2026-01-31T19:44:15.835Z] [BOT] ✅ Loaded V2 database: 1387 jobs
💾 DISK STATE: 1387 jobs on disk
[2026-01-31T19:44:15.835Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1387
[2026-01-31T19:44:15.838Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:44:15.838Z] [BOT] 💾 AFTER MERGE: 1387 jobs (merged disk + memory)
[2026-01-31T19:44:15.842Z] [BOT] ✅ No jobs to archive (all 1387 jobs within 7-day window)
[2026-01-31T19:44:15.946Z] [BOT] 💾 Saved posted_jobs.json: 1387 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T19:44:17.966Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2705) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*