# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T22:12:52.566Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T22:12:14.915Z] ========================================
[2026-01-30T22:12:14.917Z] Discord Bot Execution Log
[2026-01-30T22:12:14.917Z] Environment: GitHub Actions
[2026-01-30T22:12:14.917Z] Node Version: v20.20.0
[2026-01-30T22:12:14.917Z] ========================================
[2026-01-30T22:12:14.917Z] Environment Variables Check:
[2026-01-30T22:12:14.917Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T22:12:14.917Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T22:12:14.918Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T22:12:14.918Z] 
Multi-Channel Configuration:
[2026-01-30T22:12:14.918Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.918Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T22:12:14.919Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T22:12:14.919Z] 
Data Files Check:
[2026-01-30T22:12:14.920Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T22:12:14.948Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4772221 bytes)
[2026-01-30T22:12:14.948Z] 
========================================
[2026-01-30T22:12:14.948Z] Starting Enhanced Discord Bot...
[2026-01-30T22:12:14.948Z] ========================================
[2026-01-30T22:12:15.498Z] [BOT] ✅ Loaded V2 database: 718 jobs
[2026-01-30T22:12:15.861Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T22:12:15.862Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T22:12:15.862Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T22:12:15.980Z] [BOT] ✅ Loaded pending queue: 2937 total (2198 pending, 50 enriched, 689 posted)
[2026-01-30T22:12:15.981Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T22:12:15.981Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T22:12:15.982Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T22:12:15.982Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T22:12:15.982Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T22:12:15.982Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T22:12:15.983Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T22:12:15.983Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T22:12:15.983Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T22:12:15.983Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T22:12:15.983Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T22:12:15.984Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T22:12:15.984Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T22:12:15.984Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T22:12:15.984Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-30T22:12:15.984Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T22:12:15.984Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T22:12:15.985Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T22:12:15.985Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T22:12:15.985Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T22:12:15.985Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T22:12:15.986Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T22:12:15.991Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T22:12:15.991Z] [BOT] 🚫 Skipping blacklisted job: Product Manager - Accounts at vercel
[2026-01-30T22:12:15.992Z] [BOT] 🚫 Skipping blacklisted job: Senior Accountant at vercel
🚫 Skipping blacklisted job: Senior Manager, FP&A Systems at vercel
🚫 Skipping blacklisted job: Senior Partner Marketing Manager at vercel
🚫 Skipping blacklisted job: Staff Product Marketing Manager, v0 at vercel
🚫 Skipping blacklisted job: Strategic Finance Manager, GTM at vercel
🚫 Skipping blacklisted job: Senior Offline Media Manager at gusto
[2026-01-30T22:12:16.117Z] [BOT] ✅ Loaded pending queue: 2937 total (2198 pending, 50 enriched, 689 posted)
[2026-01-30T22:12:16.313Z] [BOT] ✅ Saved pending queue: 2930 total (2198 pending, 43 enriched, 689 posted)
🗑️ Removed 7 blacklisted jobs from pending queue
[2026-01-30T22:12:16.313Z] [BOT] 📋 After blacklist filter: 29 jobs (7 blacklisted)
[2026-01-30T22:12:16.313Z] [BOT] 📋 After data quality filter: 29 jobs (0 invalid)
[2026-01-30T22:12:16.314Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-01-30T22:12:16.314Z] [BOT] (4 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-30T22:12:16.314Z] [BOT] - Select Major Account Executive EST/CST - Orlando, FL @ samsara: orlando, raleigh, san antonio, tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T22:12:16.318Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T22:12:16.319Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Orlando, FL" @ samsara
   Category: FINANCE (matched: "finance")
[2026-01-30T22:12:16.319Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T22:12:16.337Z] [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T22:12:16.516Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Orlando, FL @ samsara in #💰・finance-jobs
[2026-01-30T22:12:16.517Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Orlando, FL @ samsara
[2026-01-30T22:12:16.517Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Orlando, FL @ samsara → category channel (1 total channels)
[2026-01-30T22:12:16.518Z] [BOT] 💾 BEFORE MERGE: 719 jobs in memory (cached)
[2026-01-30T22:12:16.534Z] [BOT] ✅ Loaded V2 database: 718 jobs
💾 DISK STATE: 718 jobs on disk
[2026-01-30T22:12:16.534Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=719
[2026-01-30T22:12:16.536Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:16.536Z] [BOT] 💾 AFTER MERGE: 719 jobs (merged disk + memory)
[2026-01-30T22:12:16.537Z] [BOT] ✅ No jobs to archive (all 719 jobs within 7-day window)
[2026-01-30T22:12:16.593Z] [BOT] 💾 Saved posted_jobs.json: 719 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:18.097Z] [BOT] 📍 [ROUTING] "Consultant - Digital Transformation and Reporting" @ ORG_b344d80e Hartford 
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T22:12:18.513Z] [BOT] ✅ Posted message: Consultant - Digital Transformation and Reporting @ ORG_b344d80e Hartford  in #💰・finance-jobs
[2026-01-30T22:12:18.513Z] [BOT] ✅ Industry: Consultant - Digital Transformation and Reporting @ ORG_b344d80e Hartford
[2026-01-30T22:12:18.514Z] [BOT] 💾 Added channel posting: Consultant - Digital Transformation and Reporting @ ORG_b344d80e Hartford  → category channel (1 total channels)
[2026-01-30T22:12:18.514Z] [BOT] 💾 BEFORE MERGE: 720 jobs in memory (cached)
[2026-01-30T22:12:18.529Z] [BOT] ✅ Loaded V2 database: 719 jobs
💾 DISK STATE: 719 jobs on disk
[2026-01-30T22:12:18.530Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=720
[2026-01-30T22:12:18.531Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:18.531Z] [BOT] 💾 AFTER MERGE: 720 jobs (merged disk + memory)
[2026-01-30T22:12:18.532Z] [BOT] ✅ No jobs to archive (all 720 jobs within 7-day window)
[2026-01-30T22:12:18.579Z] [BOT] 💾 Saved posted_jobs.json: 720 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:23.080Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T22:12:23.081Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Active TS/SCI with Poly Required" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
[2026-01-30T22:12:23.081Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:12:23.230Z] [BOT] ✅ Posted message: Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Technology
[2026-01-30T22:12:23.230Z] [BOT] 💾 Added channel posting: Junior Software Developer - Active TS/SCI with Poly Required @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-01-30T22:12:23.230Z] [BOT] 💾 BEFORE MERGE: 721 jobs in memory (cached)
[2026-01-30T22:12:23.246Z] [BOT] ✅ Loaded V2 database: 720 jobs
💾 DISK STATE: 720 jobs on disk
[2026-01-30T22:12:23.246Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=721
[2026-01-30T22:12:23.248Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:23.248Z] [BOT] 💾 AFTER MERGE: 721 jobs (merged disk + memory)
[2026-01-30T22:12:23.249Z] [BOT] ✅ No jobs to archive (all 721 jobs within 7-day window)
[2026-01-30T22:12:23.299Z] [BOT] 💾 Saved posted_jobs.json: 721 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:24.801Z] [BOT] 📍 [ROUTING] "Junior Java Developer" @ mthree
   Category: TECH (matched: "software")
[2026-01-30T22:12:24.801Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:12:25.082Z] [BOT] ✅ Posted message: Junior Java Developer @ mthree in #💻・tech-jobs
[2026-01-30T22:12:25.082Z] [BOT] ✅ Industry: Junior Java Developer @ mthree
[2026-01-30T22:12:25.082Z] [BOT] 💾 Added channel posting: Junior Java Developer @ mthree → category channel (1 total channels)
[2026-01-30T22:12:25.082Z] [BOT] 💾 BEFORE MERGE: 722 jobs in memory (cached)
[2026-01-30T22:12:25.112Z] [BOT] ✅ Loaded V2 database: 721 jobs
💾 DISK STATE: 721 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=722
[2026-01-30T22:12:25.113Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:25.113Z] [BOT] 💾 AFTER MERGE: 722 jobs (merged disk + memory)
[2026-01-30T22:12:25.114Z] [BOT] ✅ No jobs to archive (all 722 jobs within 7-day window)
[2026-01-30T22:12:25.173Z] [BOT] 💾 Saved posted_jobs.json: 722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:26.890Z] [BOT] ✅ Posted message: Junior Java Developer @ mthree in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T22:12:26.891Z] [BOT] 💾 Added channel posting: Junior Java Developer @ mthree → location channel (2 total channels)
[2026-01-30T22:12:26.891Z] [BOT] 💾 BEFORE MERGE: 722 jobs in memory (cached)
[2026-01-30T22:12:26.905Z] [BOT] ✅ Loaded V2 database: 722 jobs
💾 DISK STATE: 722 jobs on disk
[2026-01-30T22:12:26.906Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=722
[2026-01-30T22:12:26.908Z] [BOT] 🔀 Deep merged: Junior Java Developer @ mthree (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T22:12:26.908Z] [BOT] 💾 AFTER MERGE: 722 jobs (merged disk + memory)
[2026-01-30T22:12:26.908Z] [BOT] ✅ No jobs to archive (all 722 jobs within 7-day window)
[2026-01-30T22:12:26.965Z] [BOT] 💾 Saved posted_jobs.json: 722 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:28.467Z] [BOT] 📍 [ROUTING] "2026 Technology Early Career Development Program-Full Stack Development" @ ORG_d637ebfb
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:12:29.362Z] [BOT] ✅ Posted message: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb in #💻・tech-jobs
  ✅ Industry: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb
[2026-01-30T22:12:29.362Z] [BOT] 💾 Added channel posting: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb → category channel (1 total channels)
[2026-01-30T22:12:29.362Z] [BOT] 💾 BEFORE MERGE: 723 jobs in memory (cached)
[2026-01-30T22:12:29.378Z] [BOT] ✅ Loaded V2 database: 722 jobs
💾 DISK STATE: 722 jobs on disk
[2026-01-30T22:12:29.378Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=723
[2026-01-30T22:12:29.380Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:29.380Z] [BOT] 💾 AFTER MERGE: 723 jobs (merged disk + memory)
[2026-01-30T22:12:29.380Z] [BOT] ✅ No jobs to archive (all 723 jobs within 7-day window)
[2026-01-30T22:12:29.434Z] [BOT] 💾 Saved posted_jobs.json: 723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:31.075Z] [BOT] ✅ Posted message: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb in #🗽・JID_98d4f0de
[2026-01-30T22:12:31.075Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T22:12:31.076Z] [BOT] 💾 Added channel posting: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb → location channel (2 total channels)
💾 BEFORE MERGE: 723 jobs in memory (cached)
[2026-01-30T22:12:31.089Z] [BOT] ✅ Loaded V2 database: 723 jobs
💾 DISK STATE: 723 jobs on disk
[2026-01-30T22:12:31.090Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=723
[2026-01-30T22:12:31.091Z] [BOT] 🔀 Deep merged: 2026 Technology Early Career Development Program-Full Stack Development @ ORG_d637ebfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 723 jobs (merged disk + memory)
[2026-01-30T22:12:31.092Z] [BOT] ✅ No jobs to archive (all 723 jobs within 7-day window)
[2026-01-30T22:12:31.141Z] [BOT] 💾 Saved posted_jobs.json: 723 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:32.642Z] [BOT] 📍 [ROUTING] "Master Data Coordinator" @ ORG_16178f90 Primitive
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:12:32.831Z] [BOT] ✅ Posted message: Master Data Coordinator @ ORG_16178f90 Primitive in #💻・tech-jobs
[2026-01-30T22:12:32.831Z] [BOT] ✅ Industry: Master Data Coordinator @ ORG_16178f90 Primitive
[2026-01-30T22:12:32.831Z] [BOT] 💾 Added channel posting: Master Data Coordinator @ ORG_16178f90 Primitive → category channel (1 total channels)
[2026-01-30T22:12:32.831Z] [BOT] 💾 BEFORE MERGE: 724 jobs in memory (cached)
[2026-01-30T22:12:32.846Z] [BOT] ✅ Loaded V2 database: 723 jobs
💾 DISK STATE: 723 jobs on disk
[2026-01-30T22:12:32.846Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=724
[2026-01-30T22:12:32.848Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 724 jobs (merged disk + memory)
[2026-01-30T22:12:32.848Z] [BOT] ✅ No jobs to archive (all 724 jobs within 7-day window)
[2026-01-30T22:12:32.898Z] [BOT] 💾 Saved posted_jobs.json: 724 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:34.399Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_c7bac469
[2026-01-30T22:12:34.399Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:12:34.621Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-30T22:12:34.622Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_c7bac469
[2026-01-30T22:12:34.622Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_c7bac469 → category channel (1 total channels)
💾 BEFORE MERGE: 725 jobs in memory (cached)
[2026-01-30T22:12:34.637Z] [BOT] ✅ Loaded V2 database: 724 jobs
💾 DISK STATE: 724 jobs on disk
[2026-01-30T22:12:34.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=725
[2026-01-30T22:12:34.639Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 725 jobs (merged disk + memory)
[2026-01-30T22:12:34.639Z] [BOT] ✅ No jobs to archive (all 725 jobs within 7-day window)
[2026-01-30T22:12:34.689Z] [BOT] 💾 Saved posted_jobs.json: 725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:36.191Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial Install Base " @ vercel
   Category: TECH (default)
[2026-01-30T22:12:36.191Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:12:36.374Z] [BOT] ✅ Posted message: Account Executive, Commercial Install Base  @ vercel in #💻・tech-jobs
  ✅ Industry: Account Executive, Commercial Install Base  @ vercel
[2026-01-30T22:12:36.375Z] [BOT] 💾 Added channel posting: Account Executive, Commercial Install Base  @ vercel → category channel (1 total channels)
[2026-01-30T22:12:36.375Z] [BOT] 💾 BEFORE MERGE: 726 jobs in memory (cached)
[2026-01-30T22:12:36.391Z] [BOT] ✅ Loaded V2 database: 725 jobs
💾 DISK STATE: 725 jobs on disk
[2026-01-30T22:12:36.391Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=726
[2026-01-30T22:12:36.393Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:36.393Z] [BOT] 💾 AFTER MERGE: 726 jobs (merged disk + memory)
[2026-01-30T22:12:36.394Z] [BOT] ✅ No jobs to archive (all 726 jobs within 7-day window)
[2026-01-30T22:12:36.450Z] [BOT] 💾 Saved posted_jobs.json: 726 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:40.953Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T22:12:40.953Z] [BOT] 📍 [ROUTING] "University - Software Engineer" @ ORG_39417f32 Allen
   Category: AI (matched: "machine learning")
[2026-01-30T22:12:40.953Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T22:12:41.137Z] [BOT] ✅ Posted message: University - Software Engineer @ ORG_39417f32 Allen in #🤖・ai-jobs
[2026-01-30T22:12:41.137Z] [BOT] ✅ Industry: University - Software Engineer @ ORG_39417f32 Allen
[2026-01-30T22:12:41.138Z] [BOT] 💾 Added channel posting: University - Software Engineer @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-30T22:12:41.138Z] [BOT] 💾 BEFORE MERGE: 727 jobs in memory (cached)
[2026-01-30T22:12:41.152Z] [BOT] ✅ Loaded V2 database: 726 jobs
💾 DISK STATE: 726 jobs on disk
[2026-01-30T22:12:41.153Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=727
[2026-01-30T22:12:41.154Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:41.155Z] [BOT] 💾 AFTER MERGE: 727 jobs (merged disk + memory)
[2026-01-30T22:12:41.155Z] [BOT] ✅ No jobs to archive (all 727 jobs within 7-day window)
[2026-01-30T22:12:41.204Z] [BOT] 💾 Saved posted_jobs.json: 727 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:42.704Z] [BOT] 📍 [ROUTING] "Data Science Analyst 2 - Full Time - United States" @ ORG_aa669b28
[2026-01-30T22:12:42.705Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T22:12:42.882Z] [BOT] ✅ Posted message: Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-30T22:12:42.882Z] [BOT] ✅ Industry: Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28
[2026-01-30T22:12:42.882Z] [BOT] 💾 Added channel posting: Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28 → category channel (1 total channels)
[2026-01-30T22:12:42.882Z] [BOT] 💾 BEFORE MERGE: 728 jobs in memory (cached)
[2026-01-30T22:12:42.897Z] [BOT] ✅ Loaded V2 database: 727 jobs
💾 DISK STATE: 727 jobs on disk
[2026-01-30T22:12:42.897Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=728
[2026-01-30T22:12:42.899Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:42.899Z] [BOT] 💾 AFTER MERGE: 728 jobs (merged disk + memory)
[2026-01-30T22:12:42.899Z] [BOT] ✅ No jobs to archive (all 728 jobs within 7-day window)
[2026-01-30T22:12:42.948Z] [BOT] 💾 Saved posted_jobs.json: 728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:44.675Z] [BOT] ✅ Posted message: Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28 in #🗽・JID_98d4f0de
[2026-01-30T22:12:44.675Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T22:12:44.675Z] [BOT] 💾 Added channel posting: Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28 → location channel (2 total channels)
[2026-01-30T22:12:44.675Z] [BOT] 💾 BEFORE MERGE: 728 jobs in memory (cached)
[2026-01-30T22:12:44.690Z] [BOT] ✅ Loaded V2 database: 728 jobs
💾 DISK STATE: 728 jobs on disk
[2026-01-30T22:12:44.690Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=728
[2026-01-30T22:12:44.691Z] [BOT] 🔀 Deep merged: Data Science Analyst 2 - Full Time - United States @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
[2026-01-30T22:12:44.692Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 728 jobs (merged disk + memory)
[2026-01-30T22:12:44.692Z] [BOT] ✅ No jobs to archive (all 728 jobs within 7-day window)
[2026-01-30T22:12:44.742Z] [BOT] 💾 Saved posted_jobs.json: 728 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:12:49.245Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T22:12:49.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "cc6a74aa82207315"
⏭️  Skipping duplicate: JID_4ca84255 (posted within 7 days)
[2026-01-30T22:12:49.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e873d38-external_care..." not found, but found as SHA256 "031528952f23c6e3"
[2026-01-30T22:12:49.246Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_5c876df6-_rq212931 (posted within 7 days)
[2026-01-30T22:12:49.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "83d76fe2a38fbadf"
⏭️  Skipping duplicate: JID_8ae35ea4 (posted within 7 days)
[2026-01-30T22:12:49.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c0f6641..." not found, but found as SHA256 "26f03a24c8ea36cb"
[2026-01-30T22:12:49.247Z] [BOT] ⏭️  Skipping duplicate: JID_802c8302-development_r021433 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c24c40c4..." not found, but found as SHA256 "b25802d146b76802"
⏭️  Skipping duplicate: JID_51af957b-careers_external-JID_5c946e6c-reporting_r2623644 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_99bc2d93..." not found, but found as SHA256 "10e4395e6a99e8eb"
⏭️  Skipping duplicate: JID_8271da8e (posted within 7 days)
[2026-01-30T22:12:49.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-w..." not found, but found as SHA256 "2881cf8500ddbb59"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_7e186723-engineer_r0231316 (posted within 7 days)
[2026-01-30T22:12:49.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8482e2ad..." not found, but found as SHA256 "788968c350953047"
⏭️  Skipping duplicate: JID_8482e2ad (posted within 7 days)
[2026-01-30T22:12:49.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfdafb45-..." not found, but found as SHA256 "8affbe0c47925608"
⏭️  Skipping duplicate: JID_32956f50 (posted within 7 days)
[2026-01-30T22:12:49.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_16309a8d..." not found, but found as SHA256 "b4bde7f26f18e607"
⏭️  Skipping duplicate: JID_32dda557 (posted within 7 days)
[2026-01-30T22:12:49.357Z] [BOT] ✅ Loaded pending queue: 2930 total (2198 pending, 43 enriched, 689 posted)
[2026-01-30T22:12:49.539Z] [BOT] ✅ Saved pending queue: 2930 total (2198 pending, 33 enriched, 699 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T22:12:49.539Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T22:12:49.627Z] [BOT] 📂 Loaded 10780 existing routing entries
[2026-01-30T22:12:49.755Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10790
   Timestamp: 2026-01-30T22:12:49.710Z
[2026-01-30T22:12:49.756Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 34
[2026-01-30T22:12:49.756Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 21
[2026-01-30T22:12:49.756Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
[2026-01-30T22:12:49.756Z] [BOT] Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🗽・JID_98d4f0de: 3 posts
     3. #💰・finance-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-30T22:12:49.756Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 728 jobs in memory (cached)
[2026-01-30T22:12:49.773Z] [BOT] ✅ Loaded V2 database: 728 jobs
[2026-01-30T22:12:49.774Z] [BOT] 💾 DISK STATE: 728 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=728
[2026-01-30T22:12:49.775Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:12:49.775Z] [BOT] 💾 AFTER MERGE: 728 jobs (merged disk + memory)
[2026-01-30T22:12:49.776Z] [BOT] ✅ No jobs to archive (all 728 jobs within 7-day window)
[2026-01-30T22:12:49.841Z] [BOT] 💾 Saved posted_jobs.json: 728 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T22:12:51.874Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*