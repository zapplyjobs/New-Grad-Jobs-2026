# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T20:31:55.245Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T20:31:24.760Z] ========================================
[2026-01-31T20:31:24.762Z] Discord Bot Execution Log
[2026-01-31T20:31:24.762Z] Environment: GitHub Actions
[2026-01-31T20:31:24.762Z] Node Version: v20.20.0
[2026-01-31T20:31:24.762Z] ========================================
[2026-01-31T20:31:24.762Z] Environment Variables Check:
[2026-01-31T20:31:24.762Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T20:31:24.762Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.762Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T20:31:24.762Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T20:31:24.762Z] 
Multi-Channel Configuration:
[2026-01-31T20:31:24.762Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T20:31:24.763Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T20:31:24.763Z] 
Data Files Check:
[2026-01-31T20:31:24.764Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T20:31:24.809Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8298594 bytes)
[2026-01-31T20:31:24.809Z] 
========================================
[2026-01-31T20:31:24.809Z] Starting Enhanced Discord Bot...
[2026-01-31T20:31:24.809Z] ========================================
[2026-01-31T20:31:25.361Z] [BOT] ✅ Loaded V2 database: 1407 jobs
[2026-01-31T20:31:26.183Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T20:31:26.183Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T20:31:26.184Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T20:31:26.302Z] [BOT] ✅ Loaded pending queue: 2944 total (1507 pending, 50 enriched, 1387 posted)
[2026-01-31T20:31:26.303Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T20:31:26.303Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:31:26.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T20:31:26.304Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T20:31:26.304Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:31:26.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T20:31:26.305Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T20:31:26.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T20:31:26.305Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T20:31:26.306Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T20:31:26.306Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T20:31:26.306Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T20:31:26.306Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T20:31:26.306Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T20:31:26.307Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T20:31:26.307Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T20:31:26.307Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T20:31:26.307Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T20:31:26.307Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T20:31:26.308Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T20:31:26.308Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T20:31:26.308Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T20:31:26.308Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T20:31:26.308Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T20:31:26.309Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T20:31:26.318Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T20:31:26.319Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T20:31:26.319Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T20:31:26.320Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T20:31:26.320Z] [BOT] (5 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
[2026-01-31T20:31:26.320Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T20:31:26.322Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-31T20:31:26.323Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd" @ ORG_08c9a13c
[2026-01-31T20:31:26.323Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:31:26.341Z] [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T20:31:26.612Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T20:31:26.612Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c
[2026-01-31T20:31:26.613Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Risk Control - Phd @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:31:26.613Z] [BOT] 💾 BEFORE MERGE: 1408 jobs in memory (cached)
[2026-01-31T20:31:26.645Z] [BOT] ✅ Loaded V2 database: 1407 jobs
💾 DISK STATE: 1407 jobs on disk
[2026-01-31T20:31:26.645Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1408
[2026-01-31T20:31:26.648Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:26.648Z] [BOT] 💾 AFTER MERGE: 1408 jobs (merged disk + memory)
[2026-01-31T20:31:26.649Z] [BOT] ✅ No jobs to archive (all 1408 jobs within 7-day window)
[2026-01-31T20:31:26.735Z] [BOT] 💾 Saved posted_jobs.json: 1408 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:28.237Z] [BOT] 📍 [ROUTING] "General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T20:31:28.238Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:31:28.685Z] [BOT] ✅ Posted message: General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T20:31:28.685Z] [BOT] ✅ Industry: General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb
[2026-01-31T20:31:28.686Z] [BOT] 💾 Added channel posting: General Hire: Machine Learning Engineer Graduate - Data and Eng - Usds @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:31:28.686Z] [BOT] 💾 BEFORE MERGE: 1409 jobs in memory (cached)
[2026-01-31T20:31:28.712Z] [BOT] ✅ Loaded V2 database: 1408 jobs
💾 DISK STATE: 1408 jobs on disk
[2026-01-31T20:31:28.713Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1409
[2026-01-31T20:31:28.716Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:28.718Z] [BOT] 💾 AFTER MERGE: 1409 jobs (merged disk + memory)
[2026-01-31T20:31:28.719Z] [BOT] ✅ No jobs to archive (all 1409 jobs within 7-day window)
[2026-01-31T20:31:28.808Z] [BOT] 💾 Saved posted_jobs.json: 1409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:30.310Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T20:31:30.310Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:31:30.670Z] [BOT] ✅ Posted message: Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb
[2026-01-31T20:31:30.671Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - CV/NLP/Multimodal LLM - Tiktok Trust and Safety @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:31:30.671Z] [BOT] 💾 BEFORE MERGE: 1410 jobs in memory (cached)
[2026-01-31T20:31:30.695Z] [BOT] ✅ Loaded V2 database: 1409 jobs
💾 DISK STATE: 1409 jobs on disk
[2026-01-31T20:31:30.695Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1410
[2026-01-31T20:31:30.700Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:30.701Z] [BOT] 💾 AFTER MERGE: 1410 jobs (merged disk + memory)
[2026-01-31T20:31:30.701Z] [BOT] ✅ No jobs to archive (all 1410 jobs within 7-day window)
[2026-01-31T20:31:30.788Z] [BOT] 💾 Saved posted_jobs.json: 1410 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:32.289Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - 2026 Start and BS/MS" @ ORG_1bb6fcfb
[2026-01-31T20:31:32.290Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:31:32.513Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - 2026 Start and BS/MS @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T20:31:32.513Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - 2026 Start and BS/MS @ ORG_1bb6fcfb
[2026-01-31T20:31:32.514Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - 2026 Start and BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:31:32.514Z] [BOT] 💾 BEFORE MERGE: 1411 jobs in memory (cached)
[2026-01-31T20:31:32.539Z] [BOT] ✅ Loaded V2 database: 1410 jobs
💾 DISK STATE: 1410 jobs on disk
[2026-01-31T20:31:32.539Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1411
[2026-01-31T20:31:32.543Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:32.544Z] [BOT] 💾 AFTER MERGE: 1411 jobs (merged disk + memory)
[2026-01-31T20:31:32.545Z] [BOT] ✅ No jobs to archive (all 1411 jobs within 7-day window)
[2026-01-31T20:31:32.631Z] [BOT] 💾 Saved posted_jobs.json: 1411 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:34.132Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Multiple Teams" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:31:34.380Z] [BOT] ✅ Posted message: Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c
[2026-01-31T20:31:34.381Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Multiple Teams @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:31:34.381Z] [BOT] 💾 BEFORE MERGE: 1412 jobs in memory (cached)
[2026-01-31T20:31:34.406Z] [BOT] ✅ Loaded V2 database: 1411 jobs
💾 DISK STATE: 1411 jobs on disk
[2026-01-31T20:31:34.406Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1412
[2026-01-31T20:31:34.411Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:34.411Z] [BOT] 💾 AFTER MERGE: 1412 jobs (merged disk + memory)
[2026-01-31T20:31:34.412Z] [BOT] ✅ No jobs to archive (all 1412 jobs within 7-day window)
[2026-01-31T20:31:34.499Z] [BOT] 💾 Saved posted_jobs.json: 1412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:36.000Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T20:31:36.000Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:31:36.252Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T20:31:36.253Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c
[2026-01-31T20:31:36.253Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Supply Chain & Logistics @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:31:36.253Z] [BOT] 💾 BEFORE MERGE: 1413 jobs in memory (cached)
[2026-01-31T20:31:36.277Z] [BOT] ✅ Loaded V2 database: 1412 jobs
💾 DISK STATE: 1412 jobs on disk
[2026-01-31T20:31:36.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1413
[2026-01-31T20:31:36.280Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:36.282Z] [BOT] 💾 AFTER MERGE: 1413 jobs (merged disk + memory)
[2026-01-31T20:31:36.283Z] [BOT] ✅ No jobs to archive (all 1413 jobs within 7-day window)
[2026-01-31T20:31:36.369Z] [BOT] 💾 Saved posted_jobs.json: 1413 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:40.871Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T20:31:40.872Z] [BOT] 📍 [ROUTING] "Partial Hospitalization Program - PHP - Therapist" @ ORG_64e21aeaint Health
[2026-01-31T20:31:40.872Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:31:41.142Z] [BOT] ✅ Posted message: Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health in #💻・tech-jobs
[2026-01-31T20:31:41.142Z] [BOT] ✅ Industry: Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health
[2026-01-31T20:31:41.143Z] [BOT] 💾 Added channel posting: Partial Hospitalization Program - PHP - Therapist @ ORG_64e21aeaint Health → category channel (1 total channels)
💾 BEFORE MERGE: 1414 jobs in memory (cached)
[2026-01-31T20:31:41.167Z] [BOT] ✅ Loaded V2 database: 1413 jobs
💾 DISK STATE: 1413 jobs on disk
[2026-01-31T20:31:41.167Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1414
[2026-01-31T20:31:41.171Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:41.171Z] [BOT] 💾 AFTER MERGE: 1414 jobs (merged disk + memory)
[2026-01-31T20:31:41.172Z] [BOT] ✅ No jobs to archive (all 1414 jobs within 7-day window)
[2026-01-31T20:31:41.261Z] [BOT] 💾 Saved posted_jobs.json: 1414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:42.760Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Arch - E-commerce" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T20:31:42.760Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:31:42.954Z] [BOT] ✅ Posted message: Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:31:42.954Z] [BOT] ✅ Industry: Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb
[2026-01-31T20:31:42.954Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Data Arch - E-commerce @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:31:42.954Z] [BOT] 💾 BEFORE MERGE: 1415 jobs in memory (cached)
[2026-01-31T20:31:42.979Z] [BOT] ✅ Loaded V2 database: 1414 jobs
💾 DISK STATE: 1414 jobs on disk
[2026-01-31T20:31:42.979Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1415
[2026-01-31T20:31:42.984Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:42.984Z] [BOT] 💾 AFTER MERGE: 1415 jobs (merged disk + memory)
[2026-01-31T20:31:42.985Z] [BOT] ✅ No jobs to archive (all 1415 jobs within 7-day window)
[2026-01-31T20:31:43.085Z] [BOT] 💾 Saved posted_jobs.json: 1415 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:44.584Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Monetization Technology - Brand Ads" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T20:31:44.585Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:31:44.883Z] [BOT] ✅ Posted message: Software Engineer Graduate - Monetization Technology - Brand Ads @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:31:44.883Z] [BOT] ✅ Industry: Software Engineer Graduate - Monetization Technology - Brand Ads @ ORG_1bb6fcfb
[2026-01-31T20:31:44.884Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Monetization Technology - Brand Ads @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:31:44.884Z] [BOT] 💾 BEFORE MERGE: 1416 jobs in memory (cached)
[2026-01-31T20:31:44.908Z] [BOT] ✅ Loaded V2 database: 1415 jobs
💾 DISK STATE: 1415 jobs on disk
[2026-01-31T20:31:44.908Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1416
[2026-01-31T20:31:44.914Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:44.914Z] [BOT] 💾 AFTER MERGE: 1416 jobs (merged disk + memory)
[2026-01-31T20:31:44.915Z] [BOT] ✅ No jobs to archive (all 1416 jobs within 7-day window)
[2026-01-31T20:31:44.993Z] [BOT] 💾 Saved posted_jobs.json: 1416 active jobs
[2026-01-31T20:31:44.994Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:46.496Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure" @ ORG_1bb6fcfb
[2026-01-31T20:31:46.496Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:31:46.674Z] [BOT] ✅ Posted message: Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:31:46.675Z] [BOT] ✅ Industry: Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb
[2026-01-31T20:31:46.675Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Ads Infrastructure @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:31:46.675Z] [BOT] 💾 BEFORE MERGE: 1417 jobs in memory (cached)
[2026-01-31T20:31:46.700Z] [BOT] ✅ Loaded V2 database: 1416 jobs
💾 DISK STATE: 1416 jobs on disk
[2026-01-31T20:31:46.700Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1417
[2026-01-31T20:31:46.705Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:46.705Z] [BOT] 💾 AFTER MERGE: 1417 jobs (merged disk + memory)
[2026-01-31T20:31:46.706Z] [BOT] ✅ No jobs to archive (all 1417 jobs within 7-day window)
[2026-01-31T20:31:46.787Z] [BOT] 💾 Saved posted_jobs.json: 1417 active jobs
[2026-01-31T20:31:46.787Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:51.289Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T20:31:51.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2b388af..." not found, but found as SHA256 "7236373a5929affe"
[2026-01-31T20:31:51.291Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_60bfff58-detail (posted within 7 days)
[2026-01-31T20:31:51.291Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_479a0231..." not found, but found as SHA256 "2f05a7dd512ff316"
⏭️  Skipping duplicate: JID_9f131a57-cx_1-job-309521 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b6fe273c..." not found, but found as SHA256 "8d0dbfdcb636a886"
⏭️  Skipping duplicate: JID_6796d1d6-CH_28a73263 (posted within 7 days)
[2026-01-31T20:31:51.292Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_12db4ace..." not found, but found as SHA256 "e51743d3cd28002f"
⏭️  Skipping duplicate: JID_6796d1d6-CH_db738cdb (posted within 7 days)
[2026-01-31T20:31:51.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7488cdbf..." not found, but found as SHA256 "4808989ece28cc9d"
⏭️  Skipping duplicate: JID_6796d1d6-CH_f3f3de34 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f5bb5253..." not found, but found as SHA256 "f10b255b43705044"
⏭️  Skipping duplicate: JID_6796d1d6-CH_0f9148c7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d7fd322b..." not found, but found as SHA256 "fbfd4087fefec724"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_e4fe2110-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0dc18c5c..." not found, but found as SHA256 "e79d2c5cf92880b5"
⏭️  Skipping duplicate: JID_6796d1d6-CH_5a914fb8 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b4af2615..." not found, but found as SHA256 "a96f58c69de562df"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_9f3fa3cd-detail (posted within 7 days)
[2026-01-31T20:31:51.293Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e5b418a4..." not found, but found as SHA256 "0afe97dcfb86d0da"
[2026-01-31T20:31:51.293Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_05de1f41 (posted within 7 days)
[2026-01-31T20:31:51.408Z] [BOT] ✅ Loaded pending queue: 2944 total (1507 pending, 50 enriched, 1387 posted)
[2026-01-31T20:31:51.602Z] [BOT] ✅ Saved pending queue: 2944 total (1507 pending, 40 enriched, 1397 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T20:31:51.602Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T20:31:51.690Z] [BOT] 📂 Loaded 11478 existing routing entries
[2026-01-31T20:31:51.833Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T20:31:51.833Z] [BOT] New entries: 10
   Total entries: 11488
   Timestamp: 2026-01-31T20:31:51.787Z
[2026-01-31T20:31:51.834Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T20:31:51.834Z] [BOT] Total attempts: 24
   Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T20:31:51.834Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
[2026-01-31T20:31:51.834Z] [BOT] 1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-31T20:31:51.834Z] [BOT] [STATS] Channel stats saved
[2026-01-31T20:31:51.835Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1417 jobs in memory (cached)
[2026-01-31T20:31:51.860Z] [BOT] ✅ Loaded V2 database: 1417 jobs
💾 DISK STATE: 1417 jobs on disk
[2026-01-31T20:31:51.860Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1417
[2026-01-31T20:31:51.863Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:31:51.863Z] [BOT] 💾 AFTER MERGE: 1417 jobs (merged disk + memory)
[2026-01-31T20:31:51.866Z] [BOT] ✅ No jobs to archive (all 1417 jobs within 7-day window)
[2026-01-31T20:31:51.943Z] [BOT] 💾 Saved posted_jobs.json: 1417 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:31:51.943Z] [BOT] ✅ Database saved successfully
[2026-01-31T20:31:53.972Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2524) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*