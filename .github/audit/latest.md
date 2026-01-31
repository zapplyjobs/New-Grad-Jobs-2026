# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T19:31:40.394Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T19:31:10.252Z] ========================================
[2026-01-31T19:31:10.254Z] Discord Bot Execution Log
[2026-01-31T19:31:10.254Z] Environment: GitHub Actions
[2026-01-31T19:31:10.254Z] Node Version: v20.20.0
[2026-01-31T19:31:10.254Z] ========================================
[2026-01-31T19:31:10.254Z] Environment Variables Check:
[2026-01-31T19:31:10.254Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T19:31:10.254Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.254Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T19:31:10.254Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T19:31:10.254Z] 
Multi-Channel Configuration:
[2026-01-31T19:31:10.255Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T19:31:10.255Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T19:31:10.255Z] 
Data Files Check:
[2026-01-31T19:31:10.256Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T19:31:10.299Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8246261 bytes)
[2026-01-31T19:31:10.299Z] 
========================================
[2026-01-31T19:31:10.299Z] Starting Enhanced Discord Bot...
[2026-01-31T19:31:10.300Z] ========================================
[2026-01-31T19:31:10.871Z] [BOT] ✅ Loaded V2 database: 1367 jobs
[2026-01-31T19:31:11.429Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T19:31:11.429Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T19:31:11.430Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T19:31:11.546Z] [BOT] ✅ Loaded pending queue: 2945 total (1548 pending, 50 enriched, 1347 posted)
[2026-01-31T19:31:11.547Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:31:11.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T19:31:11.548Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T19:31:11.548Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T19:31:11.548Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T19:31:11.548Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T19:31:11.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T19:31:11.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T19:31:11.550Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T19:31:11.550Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-31T19:31:11.550Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T19:31:11.550Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T19:31:11.550Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T19:31:11.550Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T19:31:11.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T19:31:11.551Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T19:31:11.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T19:31:11.551Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T19:31:11.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T19:31:11.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T19:31:11.552Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-01-31T19:31:11.552Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T19:31:11.552Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T19:31:11.561Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T19:31:11.561Z] [BOT] 🚫 Skipping blacklisted job: Model Development Engineer - Global Future Leaders Program 2026 at Lenovo
[2026-01-31T19:31:11.667Z] [BOT] ✅ Loaded pending queue: 2945 total (1548 pending, 50 enriched, 1347 posted)
[2026-01-31T19:31:11.851Z] [BOT] ✅ Saved pending queue: 2944 total (1548 pending, 49 enriched, 1347 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T19:31:11.851Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T19:31:11.851Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T19:31:11.852Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T19:31:11.853Z] [BOT] (4 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-31T19:31:11.853Z] [BOT] - Software Engineer Graduate - Ads Interface and Platform - BS/MS @ TikTok: seattle, san jose
   - Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ByteDance: san jose, seattle
   - Graduate Machine Learning Engineer - TikTok E-Commerce - Conversational AI @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T19:31:11.856Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T19:31:11.857Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Computational Imaging-Pico - 2026 Start" @ ORG_08c9a13c
[2026-01-31T19:31:11.857Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:31:11.875Z] [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T19:31:12.062Z] [BOT] ✅ Posted message: Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c
[2026-01-31T19:31:12.063Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Computational Imaging-Pico - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:31:12.063Z] [BOT] 💾 BEFORE MERGE: 1368 jobs in memory (cached)
[2026-01-31T19:31:12.092Z] [BOT] ✅ Loaded V2 database: 1367 jobs
💾 DISK STATE: 1367 jobs on disk
[2026-01-31T19:31:12.092Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1368
[2026-01-31T19:31:12.095Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:12.096Z] [BOT] 💾 AFTER MERGE: 1368 jobs (merged disk + memory)
[2026-01-31T19:31:12.099Z] [BOT] ✅ No jobs to archive (all 1368 jobs within 7-day window)
[2026-01-31T19:31:12.191Z] [BOT] 💾 Saved posted_jobs.json: 1368 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:13.694Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - E-commerce" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:31:13.919Z] [BOT] ✅ Posted message: Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb
[2026-01-31T19:31:13.920Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Data Arch - E-commerce @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:31:13.920Z] [BOT] 💾 BEFORE MERGE: 1369 jobs in memory (cached)
[2026-01-31T19:31:13.943Z] [BOT] ✅ Loaded V2 database: 1368 jobs
💾 DISK STATE: 1368 jobs on disk
[2026-01-31T19:31:13.943Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1369
[2026-01-31T19:31:13.947Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1369 jobs (merged disk + memory)
[2026-01-31T19:31:13.950Z] [BOT] ✅ No jobs to archive (all 1369 jobs within 7-day window)
[2026-01-31T19:31:14.038Z] [BOT] 💾 Saved posted_jobs.json: 1369 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:15.540Z] [BOT] 📍 [ROUTING] "Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start" @ ORG_1bb6fcfb
[2026-01-31T19:31:15.540Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:31:15.706Z] [BOT] ✅ Posted message: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb
[2026-01-31T19:31:15.707Z] [BOT] 💾 Added channel posting: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:31:15.707Z] [BOT] 💾 BEFORE MERGE: 1370 jobs in memory (cached)
[2026-01-31T19:31:15.730Z] [BOT] ✅ Loaded V2 database: 1369 jobs
💾 DISK STATE: 1369 jobs on disk
[2026-01-31T19:31:15.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1370
[2026-01-31T19:31:15.734Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1370 jobs (merged disk + memory)
[2026-01-31T19:31:15.737Z] [BOT] ✅ No jobs to archive (all 1370 jobs within 7-day window)
[2026-01-31T19:31:15.828Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:17.331Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Ecommerce Recommendation - PhD" @ ORG_08c9a13c
[2026-01-31T19:31:17.332Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:31:17.528Z] [BOT] ✅ Posted message: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T19:31:17.528Z] [BOT] ✅ Industry: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c
[2026-01-31T19:31:17.529Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Ecommerce Recommendation - PhD @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1371 jobs in memory (cached)
[2026-01-31T19:31:17.552Z] [BOT] ✅ Loaded V2 database: 1370 jobs
💾 DISK STATE: 1370 jobs on disk
[2026-01-31T19:31:17.553Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1371
[2026-01-31T19:31:17.558Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:17.558Z] [BOT] 💾 AFTER MERGE: 1371 jobs (merged disk + memory)
[2026-01-31T19:31:17.559Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-01-31T19:31:17.634Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:19.135Z] [BOT] 📍 [ROUTING] "Cyber Security Specialist - Data Analysis" @ ORG_f4398599
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:31:19.364Z] [BOT] ✅ Posted message: Cyber Security Specialist - Data Analysis @ ORG_f4398599 in #💻・tech-jobs
  ✅ Industry: Cyber Security Specialist - Data Analysis @ ORG_f4398599
[2026-01-31T19:31:19.365Z] [BOT] 💾 Added channel posting: Cyber Security Specialist - Data Analysis @ ORG_f4398599 → category channel (1 total channels)
[2026-01-31T19:31:19.365Z] [BOT] 💾 BEFORE MERGE: 1372 jobs in memory (cached)
[2026-01-31T19:31:19.389Z] [BOT] ✅ Loaded V2 database: 1371 jobs
💾 DISK STATE: 1371 jobs on disk
[2026-01-31T19:31:19.389Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1372
[2026-01-31T19:31:19.392Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:19.393Z] [BOT] 💾 AFTER MERGE: 1372 jobs (merged disk + memory)
[2026-01-31T19:31:19.396Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-01-31T19:31:19.482Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:20.986Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Database Technologies" @ ORG_dc7620eb
[2026-01-31T19:31:20.986Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:31:21.235Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb
[2026-01-31T19:31:21.236Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Database Technologies @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T19:31:21.236Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-01-31T19:31:21.260Z] [BOT] ✅ Loaded V2 database: 1372 jobs
💾 DISK STATE: 1372 jobs on disk
[2026-01-31T19:31:21.261Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-01-31T19:31:21.265Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:21.265Z] [BOT] 💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-01-31T19:31:21.266Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-01-31T19:31:21.350Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:22.852Z] [BOT] 📍 [ROUTING] "Research Scientist - Reinforcement Learning" @ ORG_08c9a13c
[2026-01-31T19:31:22.852Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T19:31:23.122Z] [BOT] ✅ Posted message: Research Scientist - Reinforcement Learning @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T19:31:23.123Z] [BOT] ✅ Industry: Research Scientist - Reinforcement Learning @ ORG_08c9a13c
[2026-01-31T19:31:23.123Z] [BOT] 💾 Added channel posting: Research Scientist - Reinforcement Learning @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:31:23.123Z] [BOT] 💾 BEFORE MERGE: 1374 jobs in memory (cached)
[2026-01-31T19:31:23.147Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-01-31T19:31:23.147Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1374
[2026-01-31T19:31:23.150Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1374 jobs (merged disk + memory)
[2026-01-31T19:31:23.152Z] [BOT] ✅ No jobs to archive (all 1374 jobs within 7-day window)
[2026-01-31T19:31:23.238Z] [BOT] 💾 Saved posted_jobs.json: 1374 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:27.740Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T19:31:27.741Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T19:31:27.741Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:31:28.175Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c
[2026-01-31T19:31:28.176Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:31:28.176Z] [BOT] 💾 BEFORE MERGE: 1375 jobs in memory (cached)
[2026-01-31T19:31:28.199Z] [BOT] ✅ Loaded V2 database: 1374 jobs
💾 DISK STATE: 1374 jobs on disk
[2026-01-31T19:31:28.200Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1375
[2026-01-31T19:31:28.204Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:28.204Z] [BOT] 💾 AFTER MERGE: 1375 jobs (merged disk + memory)
[2026-01-31T19:31:28.205Z] [BOT] ✅ No jobs to archive (all 1375 jobs within 7-day window)
[2026-01-31T19:31:28.282Z] [BOT] 💾 Saved posted_jobs.json: 1375 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:29.783Z] [BOT] 📍 [ROUTING] "Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems" @ ORG_08c9a13c
[2026-01-31T19:31:29.784Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:31:29.987Z] [BOT] ✅ Posted message: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c
[2026-01-31T19:31:29.988Z] [BOT] 💾 Added channel posting: Software Engineer in ML Systems Graduate - Aml - Machine Learning Systems @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T19:31:29.988Z] [BOT] 💾 BEFORE MERGE: 1376 jobs in memory (cached)
[2026-01-31T19:31:30.012Z] [BOT] ✅ Loaded V2 database: 1375 jobs
💾 DISK STATE: 1375 jobs on disk
[2026-01-31T19:31:30.012Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1376
[2026-01-31T19:31:30.016Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:30.016Z] [BOT] 💾 AFTER MERGE: 1376 jobs (merged disk + memory)
[2026-01-31T19:31:30.017Z] [BOT] ✅ No jobs to archive (all 1376 jobs within 7-day window)
[2026-01-31T19:31:30.105Z] [BOT] 💾 Saved posted_jobs.json: 1376 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:31.606Z] [BOT] 📍 [ROUTING] "General Hire - Machine Learning Engineer - Data-Search" @ ORG_1bb6fcfb
[2026-01-31T19:31:31.607Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T19:31:31.824Z] [BOT] ✅ Posted message: General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T19:31:31.824Z] [BOT] ✅ Industry: General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb
[2026-01-31T19:31:31.825Z] [BOT] 💾 Added channel posting: General Hire - Machine Learning Engineer - Data-Search @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T19:31:31.825Z] [BOT] 💾 BEFORE MERGE: 1377 jobs in memory (cached)
[2026-01-31T19:31:31.849Z] [BOT] ✅ Loaded V2 database: 1376 jobs
💾 DISK STATE: 1376 jobs on disk
[2026-01-31T19:31:31.849Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1377
[2026-01-31T19:31:31.854Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:31.854Z] [BOT] 💾 AFTER MERGE: 1377 jobs (merged disk + memory)
[2026-01-31T19:31:31.854Z] [BOT] ✅ No jobs to archive (all 1377 jobs within 7-day window)
[2026-01-31T19:31:31.937Z] [BOT] 💾 Saved posted_jobs.json: 1377 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T19:31:36.440Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T19:31:36.441Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_24dbbd31..." not found, but found as SHA256 "7c503190dd656447"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_cd9c7613-detail (posted within 7 days)
[2026-01-31T19:31:36.442Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f2ed8a45..." not found, but found as SHA256 "1d51213ea629a89e"
⏭️  Skipping duplicate: JID_6796d1d6-CH_c16dfb5c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_80413731..." not found, but found as SHA256 "1b6a95311213cc61"
⏭️  Skipping duplicate: JID_6796d1d6-CH_f5d2e34c (posted within 7 days)
[2026-01-31T19:31:36.442Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_353b2f02..." not found, but found as SHA256 "9f10c42c59e36b8f"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_3f602652-detail (posted within 7 days)
[2026-01-31T19:31:36.442Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_75d24976..." not found, but found as SHA256 "6d2f835f82b10856"
[2026-01-31T19:31:36.442Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_858b23ef-detail (posted within 7 days)
[2026-01-31T19:31:36.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d78b63b..." not found, but found as SHA256 "b9dd7552d1a8e098"
⏭️  Skipping duplicate: JID_90a61d75-cx_1-job-29720 (posted within 7 days)
[2026-01-31T19:31:36.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f809a40..." not found, but found as SHA256 "4a181d9d5523bfcd"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_3e33cebe-detail (posted within 7 days)
[2026-01-31T19:31:36.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "f7323780f5f1826f"
[2026-01-31T19:31:36.443Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-305298 (posted within 7 days)
[2026-01-31T19:31:36.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e434482a..." not found, but found as SHA256 "a41690de85860b4b"
[2026-01-31T19:31:36.443Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_1295ec4f (posted within 7 days)
[2026-01-31T19:31:36.443Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cbc487b4..." not found, but found as SHA256 "c187a54aad99b99d"
[2026-01-31T19:31:36.443Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_e65b7bf9-detail (posted within 7 days)
[2026-01-31T19:31:36.552Z] [BOT] ✅ Loaded pending queue: 2944 total (1548 pending, 49 enriched, 1347 posted)
[2026-01-31T19:31:36.749Z] [BOT] ✅ Saved pending queue: 2944 total (1548 pending, 39 enriched, 1357 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T19:31:36.749Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T19:31:36.836Z] [BOT] 📂 Loaded 11438 existing routing entries
[2026-01-31T19:31:36.963Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T19:31:36.964Z] [BOT] Total entries: 11448
   Timestamp: 2026-01-31T19:31:36.916Z
[2026-01-31T19:31:36.964Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T19:31:36.964Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-31T19:31:36.964Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T19:31:36.965Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 2
   Top channels:
[2026-01-31T19:31:36.965Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-31T19:31:36.965Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T19:31:36.965Z] [BOT] 💾 BEFORE MERGE: 1377 jobs in memory (cached)
[2026-01-31T19:31:36.991Z] [BOT] ✅ Loaded V2 database: 1377 jobs
💾 DISK STATE: 1377 jobs on disk
[2026-01-31T19:31:36.992Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1377
[2026-01-31T19:31:36.994Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T19:31:36.994Z] [BOT] 💾 AFTER MERGE: 1377 jobs (merged disk + memory)
[2026-01-31T19:31:36.997Z] [BOT] ✅ No jobs to archive (all 1377 jobs within 7-day window)
[2026-01-31T19:31:37.089Z] [BOT] 💾 Saved posted_jobs.json: 1377 active jobs
[2026-01-31T19:31:37.089Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T19:31:39.126Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2481) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*