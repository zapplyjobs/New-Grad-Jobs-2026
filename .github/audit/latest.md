# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T20:47:48.206Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T20:47:15.798Z] ========================================
[2026-01-31T20:47:15.800Z] Discord Bot Execution Log
[2026-01-31T20:47:15.800Z] Environment: GitHub Actions
[2026-01-31T20:47:15.800Z] Node Version: v20.20.0
[2026-01-31T20:47:15.800Z] ========================================
[2026-01-31T20:47:15.800Z] Environment Variables Check:
[2026-01-31T20:47:15.800Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T20:47:15.800Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.800Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T20:47:15.800Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T20:47:15.800Z] 
Multi-Channel Configuration:
[2026-01-31T20:47:15.800Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.800Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.800Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.800Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.800Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.801Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.801Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.801Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.801Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T20:47:15.801Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T20:47:15.801Z] 
Data Files Check:
[2026-01-31T20:47:15.802Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T20:47:15.855Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8307511 bytes)
[2026-01-31T20:47:15.855Z] 
========================================
[2026-01-31T20:47:15.855Z] Starting Enhanced Discord Bot...
[2026-01-31T20:47:15.855Z] ========================================
[2026-01-31T20:47:16.364Z] [BOT] ✅ Loaded V2 database: 1417 jobs
[2026-01-31T20:47:17.076Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T20:47:17.077Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T20:47:17.077Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T20:47:17.241Z] [BOT] ✅ Loaded pending queue: 2944 total (1497 pending, 50 enriched, 1397 posted)
[2026-01-31T20:47:17.242Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:47:17.243Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T20:47:17.243Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T20:47:17.243Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:47:17.243Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T20:47:17.243Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T20:47:17.244Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T20:47:17.244Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T20:47:17.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T20:47:17.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T20:47:17.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T20:47:17.245Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T20:47:17.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T20:47:17.245Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T20:47:17.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T20:47:17.245Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T20:47:17.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T20:47:17.246Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T20:47:17.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T20:47:17.246Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T20:47:17.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T20:47:17.246Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T20:47:17.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T20:47:17.247Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T20:47:17.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T20:47:17.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T20:47:17.247Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T20:47:17.256Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T20:47:17.256Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T20:47:17.257Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T20:47:17.257Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-31T20:47:17.258Z] [BOT] 📍 1 jobs with multiple locations:
   - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
[2026-01-31T20:47:17.258Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T20:47:17.260Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T20:47:17.261Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_9b9b6e44
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T20:47:17.261Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T20:47:17.277Z] [BOT ERROR] (node:2706) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T20:47:17.682Z] [BOT] ✅ Posted message: Data Scientist @ ORG_9b9b6e44 in #📊・JID_fb739488
[2026-01-31T20:47:17.683Z] [BOT] ✅ Industry: Data Scientist @ ORG_9b9b6e44
[2026-01-31T20:47:17.683Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_9b9b6e44 → category channel (1 total channels)
[2026-01-31T20:47:17.684Z] [BOT] 💾 BEFORE MERGE: 1418 jobs in memory (cached)
[2026-01-31T20:47:17.729Z] [BOT] ✅ Loaded V2 database: 1417 jobs
💾 DISK STATE: 1417 jobs on disk
[2026-01-31T20:47:17.730Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1418
[2026-01-31T20:47:17.733Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:17.733Z] [BOT] 💾 AFTER MERGE: 1418 jobs (merged disk + memory)
[2026-01-31T20:47:17.734Z] [BOT] ✅ No jobs to archive (all 1418 jobs within 7-day window)
[2026-01-31T20:47:17.835Z] [BOT] 💾 Saved posted_jobs.json: 1418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:22.338Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-31T20:47:22.339Z] [BOT] 📍 [ROUTING] "Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science" @ ORG_1bb6fcfb
[2026-01-31T20:47:22.339Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:22.732Z] [BOT] ✅ Posted message: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:47:22.732Z] [BOT] ✅ Industry: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science @ ORG_1bb6fcfb
[2026-01-31T20:47:22.732Z] [BOT] 💾 Added channel posting: Graduate Algorithm Engineer - Intelligent Multimedia Streaming Strategy - Bachelor of Science/Master of Science @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:47:22.733Z] [BOT] 💾 BEFORE MERGE: 1419 jobs in memory (cached)
[2026-01-31T20:47:22.768Z] [BOT] ✅ Loaded V2 database: 1418 jobs
💾 DISK STATE: 1418 jobs on disk
[2026-01-31T20:47:22.768Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1419
[2026-01-31T20:47:22.774Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1419 jobs (merged disk + memory)
[2026-01-31T20:47:22.775Z] [BOT] ✅ No jobs to archive (all 1419 jobs within 7-day window)
[2026-01-31T20:47:22.874Z] [BOT] 💾 Saved posted_jobs.json: 1419 active jobs
[2026-01-31T20:47:22.875Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:24.376Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - 2026 Start" @ ORG_1bb6fcfb
[2026-01-31T20:47:24.376Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:24.618Z] [BOT] ✅ Posted message: Software Engineer Graduate - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - 2026 Start @ ORG_1bb6fcfb
[2026-01-31T20:47:24.619Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:47:24.619Z] [BOT] 💾 BEFORE MERGE: 1420 jobs in memory (cached)
[2026-01-31T20:47:24.654Z] [BOT] ✅ Loaded V2 database: 1419 jobs
💾 DISK STATE: 1419 jobs on disk
[2026-01-31T20:47:24.655Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1420
[2026-01-31T20:47:24.661Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:24.661Z] [BOT] 💾 AFTER MERGE: 1420 jobs (merged disk + memory)
[2026-01-31T20:47:24.662Z] [BOT] ✅ No jobs to archive (all 1420 jobs within 7-day window)
[2026-01-31T20:47:24.755Z] [BOT] 💾 Saved posted_jobs.json: 1420 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:26.257Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Data Arch - AI/ML Infrastructure" @ ORG_1bb6fcfb
[2026-01-31T20:47:26.257Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:26.746Z] [BOT] ✅ Posted message: Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:47:26.746Z] [BOT] ✅ Industry: Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ ORG_1bb6fcfb
[2026-01-31T20:47:26.747Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Data Arch - AI/ML Infrastructure @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:47:26.748Z] [BOT] 💾 BEFORE MERGE: 1421 jobs in memory (cached)
[2026-01-31T20:47:26.784Z] [BOT] ✅ Loaded V2 database: 1420 jobs
💾 DISK STATE: 1420 jobs on disk
[2026-01-31T20:47:26.785Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1421
[2026-01-31T20:47:26.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:26.790Z] [BOT] 💾 AFTER MERGE: 1421 jobs (merged disk + memory)
[2026-01-31T20:47:26.791Z] [BOT] ✅ No jobs to archive (all 1421 jobs within 7-day window)
[2026-01-31T20:47:26.885Z] [BOT] 💾 Saved posted_jobs.json: 1421 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:28.387Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Data Arch - Shorttext Rec" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T20:47:28.387Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:28.647Z] [BOT] ✅ Posted message: Graduate Software Engineer - Data Arch - Shorttext Rec @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:47:28.647Z] [BOT] ✅ Industry: Graduate Software Engineer - Data Arch - Shorttext Rec @ ORG_1bb6fcfb
[2026-01-31T20:47:28.648Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Data Arch - Shorttext Rec @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:47:28.648Z] [BOT] 💾 BEFORE MERGE: 1422 jobs in memory (cached)
[2026-01-31T20:47:28.683Z] [BOT] ✅ Loaded V2 database: 1421 jobs
💾 DISK STATE: 1421 jobs on disk
[2026-01-31T20:47:28.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1422
[2026-01-31T20:47:28.686Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:28.688Z] [BOT] 💾 AFTER MERGE: 1422 jobs (merged disk + memory)
[2026-01-31T20:47:28.689Z] [BOT] ✅ No jobs to archive (all 1422 jobs within 7-day window)
[2026-01-31T20:47:28.799Z] [BOT] 💾 Saved posted_jobs.json: 1422 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:30.299Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global CRM - 2026 Start','BS/MS" @ ORG_1bb6fcfb
[2026-01-31T20:47:30.299Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:32.052Z] [BOT] ✅ Posted message: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:47:32.052Z] [BOT] ✅ Industry: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb
[2026-01-31T20:47:32.053Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Global CRM - 2026 Start','BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:47:32.054Z] [BOT] 💾 BEFORE MERGE: 1423 jobs in memory (cached)
[2026-01-31T20:47:32.090Z] [BOT] ✅ Loaded V2 database: 1422 jobs
💾 DISK STATE: 1422 jobs on disk
[2026-01-31T20:47:32.091Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1423
[2026-01-31T20:47:32.097Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:32.097Z] [BOT] 💾 AFTER MERGE: 1423 jobs (merged disk + memory)
[2026-01-31T20:47:32.099Z] [BOT] ✅ No jobs to archive (all 1423 jobs within 7-day window)
[2026-01-31T20:47:32.189Z] [BOT] 💾 Saved posted_jobs.json: 1423 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:33.692Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Experimentation and Evaluation" @ ORG_1bb6fcfb
[2026-01-31T20:47:33.692Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:33.888Z] [BOT] ✅ Posted message: Graduate Software Engineer - Experimentation and Evaluation @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - Experimentation and Evaluation @ ORG_1bb6fcfb
[2026-01-31T20:47:33.889Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Experimentation and Evaluation @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1424 jobs in memory (cached)
[2026-01-31T20:47:33.924Z] [BOT] ✅ Loaded V2 database: 1423 jobs
💾 DISK STATE: 1423 jobs on disk
[2026-01-31T20:47:33.925Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1424
[2026-01-31T20:47:33.930Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1424 jobs (merged disk + memory)
[2026-01-31T20:47:33.931Z] [BOT] ✅ No jobs to archive (all 1424 jobs within 7-day window)
[2026-01-31T20:47:34.038Z] [BOT] 💾 Saved posted_jobs.json: 1424 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:35.536Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T20:47:35.536Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:35.750Z] [BOT] ✅ Posted message: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb
[2026-01-31T20:47:35.750Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Ads Infrastructure-MLDP - BS/MS @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:47:35.751Z] [BOT] 💾 BEFORE MERGE: 1425 jobs in memory (cached)
[2026-01-31T20:47:35.789Z] [BOT] ✅ Loaded V2 database: 1424 jobs
💾 DISK STATE: 1424 jobs on disk
[2026-01-31T20:47:35.790Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1425
[2026-01-31T20:47:35.798Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:35.798Z] [BOT] 💾 AFTER MERGE: 1425 jobs (merged disk + memory)
[2026-01-31T20:47:35.799Z] [BOT] ✅ No jobs to archive (all 1425 jobs within 7-day window)
[2026-01-31T20:47:35.898Z] [BOT] 💾 Saved posted_jobs.json: 1425 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:37.400Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate Online Architecture-2026 Start - PhD" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T20:47:37.400Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:37.745Z] [BOT] ✅ Posted message: Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:47:37.745Z] [BOT] ✅ Industry: Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb
[2026-01-31T20:47:37.745Z] [BOT] 💾 Added channel posting: Research Engineer Graduate Online Architecture-2026 Start - PhD @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:47:37.746Z] [BOT] 💾 BEFORE MERGE: 1426 jobs in memory (cached)
[2026-01-31T20:47:37.781Z] [BOT] ✅ Loaded V2 database: 1425 jobs
💾 DISK STATE: 1425 jobs on disk
[2026-01-31T20:47:37.782Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1426
[2026-01-31T20:47:37.787Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1426 jobs (merged disk + memory)
[2026-01-31T20:47:37.788Z] [BOT] ✅ No jobs to archive (all 1426 jobs within 7-day window)
[2026-01-31T20:47:37.878Z] [BOT] 💾 Saved posted_jobs.json: 1426 active jobs
[2026-01-31T20:47:37.879Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:39.381Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization" @ ORG_1bb6fcfb
[2026-01-31T20:47:39.381Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:47:39.611Z] [BOT] ✅ Posted message: Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:47:39.611Z] [BOT] ✅ Industry: Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb
[2026-01-31T20:47:39.612Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Monetization Technology - Tiktok Ads Creator Monetization @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1427 jobs in memory (cached)
[2026-01-31T20:47:39.648Z] [BOT] ✅ Loaded V2 database: 1426 jobs
💾 DISK STATE: 1426 jobs on disk
[2026-01-31T20:47:39.648Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1427
[2026-01-31T20:47:39.654Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:39.654Z] [BOT] 💾 AFTER MERGE: 1427 jobs (merged disk + memory)
[2026-01-31T20:47:39.655Z] [BOT] ✅ No jobs to archive (all 1427 jobs within 7-day window)
[2026-01-31T20:47:39.751Z] [BOT] 💾 Saved posted_jobs.json: 1427 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:47:44.253Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T20:47:44.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af7c2683..." not found, but found as SHA256 "b90f0409e2400997"
[2026-01-31T20:47:44.254Z] [BOT] ⏭️  Skipping duplicate: JID_1dc6c858 (posted within 7 days)
[2026-01-31T20:47:44.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ab76b22b..." not found, but found as SHA256 "e43906bae5e8568c"
[2026-01-31T20:47:44.255Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_93ff76fa (posted within 7 days)
[2026-01-31T20:47:44.255Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a1b37e7c..." not found, but found as SHA256 "ddc2504ffb2d44bf"
⏭️  Skipping duplicate: JID_6796d1d6-CH_5412b59d (posted within 7 days)
[2026-01-31T20:47:44.255Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6ad04682..." not found, but found as SHA256 "566c0337eb2805cc"
⏭️  Skipping duplicate: JID_6796d1d6-CH_01ce3a84 (posted within 7 days)
[2026-01-31T20:47:44.256Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f904b39..." not found, but found as SHA256 "54b717fe6bb2db58"
⏭️  Skipping duplicate: JID_6796d1d6-CH_be2a530f (posted within 7 days)
[2026-01-31T20:47:44.256Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9063a8a4..." not found, but found as SHA256 "e622144a5ef78547"
⏭️  Skipping duplicate: JID_6796d1d6-CH_1ed64dba (posted within 7 days)
[2026-01-31T20:47:44.256Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ed7d1b51..." not found, but found as SHA256 "c3d483599e942d74"
⏭️  Skipping duplicate: JID_6796d1d6-CH_07fefc70 (posted within 7 days)
[2026-01-31T20:47:44.256Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8f8c1552..." not found, but found as SHA256 "f2b7f383d5452b39"
[2026-01-31T20:47:44.256Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_088e76f1 (posted within 7 days)
[2026-01-31T20:47:44.256Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f42e4779..." not found, but found as SHA256 "fbfb7958c0f13ea0"
⏭️  Skipping duplicate: JID_6796d1d6-CH_75a24adf (posted within 7 days)
[2026-01-31T20:47:44.257Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a475d51c..." not found, but found as SHA256 "222490dedd48c12e"
[2026-01-31T20:47:44.257Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6a40454b (posted within 7 days)
[2026-01-31T20:47:44.408Z] [BOT] ✅ Loaded pending queue: 2944 total (1497 pending, 50 enriched, 1397 posted)
[2026-01-31T20:47:44.609Z] [BOT] ✅ Saved pending queue: 2944 total (1497 pending, 40 enriched, 1407 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T20:47:44.710Z] [BOT] 📂 Loaded 11488 existing routing entries
[2026-01-31T20:47:44.829Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11498
[2026-01-31T20:47:44.830Z] [BOT] Timestamp: 2026-01-31T20:47:44.789Z
[2026-01-31T20:47:44.830Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 24
[2026-01-31T20:47:44.830Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 14
[2026-01-31T20:47:44.830Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 2
[2026-01-31T20:47:44.830Z] [BOT] Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #📊・JID_fb739488: 1 posts
[2026-01-31T20:47:44.831Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T20:47:44.831Z] [BOT] 💾 BEFORE MERGE: 1427 jobs in memory (cached)
[2026-01-31T20:47:44.868Z] [BOT] ✅ Loaded V2 database: 1427 jobs
💾 DISK STATE: 1427 jobs on disk
[2026-01-31T20:47:44.868Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1427
[2026-01-31T20:47:44.871Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:47:44.871Z] [BOT] 💾 AFTER MERGE: 1427 jobs (merged disk + memory)
[2026-01-31T20:47:44.874Z] [BOT] ✅ No jobs to archive (all 1427 jobs within 7-day window)
[2026-01-31T20:47:44.976Z] [BOT] 💾 Saved posted_jobs.json: 1427 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T20:47:46.999Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2706) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*