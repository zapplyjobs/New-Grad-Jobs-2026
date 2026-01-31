# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T20:59:55.817Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T20:59:25.984Z] ========================================
[2026-01-31T20:59:25.986Z] Discord Bot Execution Log
[2026-01-31T20:59:25.986Z] Environment: GitHub Actions
[2026-01-31T20:59:25.987Z] Node Version: v20.20.0
[2026-01-31T20:59:25.987Z] ========================================
[2026-01-31T20:59:25.987Z] Environment Variables Check:
[2026-01-31T20:59:25.987Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T20:59:25.987Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.987Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T20:59:25.987Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T20:59:25.987Z] 
Multi-Channel Configuration:
[2026-01-31T20:59:25.987Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.987Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.987Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.988Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.988Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.988Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.988Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.988Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.988Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T20:59:25.988Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T20:59:25.988Z] 
Data Files Check:
[2026-01-31T20:59:25.989Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T20:59:26.033Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8317190 bytes)
[2026-01-31T20:59:26.033Z] 
========================================
[2026-01-31T20:59:26.033Z] Starting Enhanced Discord Bot...
[2026-01-31T20:59:26.033Z] ========================================
[2026-01-31T20:59:26.591Z] [BOT] ✅ Loaded V2 database: 1427 jobs
[2026-01-31T20:59:27.007Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T20:59:27.008Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T20:59:27.008Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T20:59:27.128Z] [BOT] ✅ Loaded pending queue: 2944 total (1487 pending, 50 enriched, 1407 posted)
[2026-01-31T20:59:27.128Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:59:27.129Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T20:59:27.129Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T20:59:27.129Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T20:59:27.130Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T20:59:27.130Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T20:59:27.130Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T20:59:27.131Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T20:59:27.131Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T20:59:27.131Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T20:59:27.131Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T20:59:27.131Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T20:59:27.132Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T20:59:27.132Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T20:59:27.132Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T20:59:27.132Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T20:59:27.132Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T20:59:27.132Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-31T20:59:27.133Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T20:59:27.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T20:59:27.133Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T20:59:27.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T20:59:27.133Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T20:59:27.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T20:59:27.133Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T20:59:27.134Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T20:59:27.143Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T20:59:27.149Z] [BOT] 🚫 Skipping blacklisted job: Senior Associate - Application Development - Greenville TX at L3Harris Technologies
[2026-01-31T20:59:27.279Z] [BOT] ✅ Loaded pending queue: 2944 total (1487 pending, 50 enriched, 1407 posted)
[2026-01-31T20:59:27.474Z] [BOT] ✅ Saved pending queue: 2943 total (1487 pending, 49 enriched, 1407 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T20:59:27.475Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T20:59:27.475Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T20:59:27.476Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-31T20:59:27.476Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T20:59:27.476Z] [BOT] - Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T20:59:27.479Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T20:59:27.480Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Quality and Efficiency Technology" @ ORG_1bb6fcfb
[2026-01-31T20:59:27.480Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:27.498Z] [BOT ERROR] (node:2626) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T20:59:27.703Z] [BOT] ✅ Posted message: Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:59:27.704Z] [BOT] ✅ Industry: Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb
[2026-01-31T20:59:27.704Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Quality and Efficiency Technology @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:59:27.705Z] [BOT] 💾 BEFORE MERGE: 1428 jobs in memory (cached)
[2026-01-31T20:59:27.732Z] [BOT] ✅ Loaded V2 database: 1427 jobs
💾 DISK STATE: 1427 jobs on disk
[2026-01-31T20:59:27.732Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1428
[2026-01-31T20:59:27.738Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:27.739Z] [BOT] 💾 AFTER MERGE: 1428 jobs (merged disk + memory)
[2026-01-31T20:59:27.740Z] [BOT] ✅ No jobs to archive (all 1428 jobs within 7-day window)
[2026-01-31T20:59:27.846Z] [BOT] 💾 Saved posted_jobs.json: 1428 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:29.348Z] [BOT] 📍 [ROUTING] "Frontend Software Engineer - Global CRM Platform" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:29.613Z] [BOT] ✅ Posted message: Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:59:29.613Z] [BOT] ✅ Industry: Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb
[2026-01-31T20:59:29.613Z] [BOT] 💾 Added channel posting: Frontend Software Engineer - Global CRM Platform @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:59:29.613Z] [BOT] 💾 BEFORE MERGE: 1429 jobs in memory (cached)
[2026-01-31T20:59:29.637Z] [BOT] ✅ Loaded V2 database: 1428 jobs
💾 DISK STATE: 1428 jobs on disk
[2026-01-31T20:59:29.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1429
[2026-01-31T20:59:29.643Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:29.643Z] [BOT] 💾 AFTER MERGE: 1429 jobs (merged disk + memory)
[2026-01-31T20:59:29.644Z] [BOT] ✅ No jobs to archive (all 1429 jobs within 7-day window)
[2026-01-31T20:59:29.732Z] [BOT] 💾 Saved posted_jobs.json: 1429 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:31.233Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer - Ads Infrastructure Ranking" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T20:59:31.233Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:31.541Z] [BOT] ✅ Posted message: Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T20:59:31.541Z] [BOT] ✅ Industry: Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb
[2026-01-31T20:59:31.542Z] [BOT] 💾 Added channel posting: Graduate Software Engineer - Ads Infrastructure Ranking @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:59:31.542Z] [BOT] 💾 BEFORE MERGE: 1430 jobs in memory (cached)
[2026-01-31T20:59:31.566Z] [BOT] ✅ Loaded V2 database: 1429 jobs
💾 DISK STATE: 1429 jobs on disk
[2026-01-31T20:59:31.566Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1430
[2026-01-31T20:59:31.571Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:31.571Z] [BOT] 💾 AFTER MERGE: 1430 jobs (merged disk + memory)
[2026-01-31T20:59:31.572Z] [BOT] ✅ No jobs to archive (all 1430 jobs within 7-day window)
[2026-01-31T20:59:31.661Z] [BOT] 💾 Saved posted_jobs.json: 1430 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:33.161Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Global SRE - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:33.330Z] [BOT] ✅ Posted message: Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb
[2026-01-31T20:59:33.331Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Global SRE - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1431 jobs in memory (cached)
[2026-01-31T20:59:33.362Z] [BOT] ✅ Loaded V2 database: 1430 jobs
💾 DISK STATE: 1430 jobs on disk
[2026-01-31T20:59:33.362Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1431
[2026-01-31T20:59:33.366Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:33.367Z] [BOT] 💾 AFTER MERGE: 1431 jobs (merged disk + memory)
[2026-01-31T20:59:33.368Z] [BOT] ✅ No jobs to archive (all 1431 jobs within 7-day window)
[2026-01-31T20:59:33.457Z] [BOT] 💾 Saved posted_jobs.json: 1431 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:34.957Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Foundation Model - Video Generation" @ ORG_08c9a13c
[2026-01-31T20:59:34.958Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:35.400Z] [BOT] ✅ Posted message: Graduate Research Scientist - Foundation Model - Video Generation @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - Foundation Model - Video Generation @ ORG_08c9a13c
[2026-01-31T20:59:35.400Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Foundation Model - Video Generation @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1432 jobs in memory (cached)
[2026-01-31T20:59:35.424Z] [BOT] ✅ Loaded V2 database: 1431 jobs
💾 DISK STATE: 1431 jobs on disk
[2026-01-31T20:59:35.425Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1432
[2026-01-31T20:59:35.429Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:35.429Z] [BOT] 💾 AFTER MERGE: 1432 jobs (merged disk + memory)
[2026-01-31T20:59:35.431Z] [BOT] ✅ No jobs to archive (all 1432 jobs within 7-day window)
[2026-01-31T20:59:35.506Z] [BOT] 💾 Saved posted_jobs.json: 1432 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:37.006Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science" @ ORG_08c9a13c
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:37.235Z] [BOT] ✅ Posted message: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_08c9a13c
[2026-01-31T20:59:37.235Z] [BOT] 💾 Added channel posting: Graduate Research Scientist - Biomolecular Structure Foundation Models - Seed AI-for-Science @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:59:37.236Z] [BOT] 💾 BEFORE MERGE: 1433 jobs in memory (cached)
[2026-01-31T20:59:37.259Z] [BOT] ✅ Loaded V2 database: 1432 jobs
💾 DISK STATE: 1432 jobs on disk
[2026-01-31T20:59:37.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1433
[2026-01-31T20:59:37.264Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:37.264Z] [BOT] 💾 AFTER MERGE: 1433 jobs (merged disk + memory)
[2026-01-31T20:59:37.265Z] [BOT] ✅ No jobs to archive (all 1433 jobs within 7-day window)
[2026-01-31T20:59:37.351Z] [BOT] 💾 Saved posted_jobs.json: 1433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:38.852Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD)" @ ORG_08c9a13c
[2026-01-31T20:59:38.852Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:39.066Z] [BOT] ✅ Posted message: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c in #💻・tech-jobs
[2026-01-31T20:59:39.066Z] [BOT] ✅ Industry: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c
[2026-01-31T20:59:39.067Z] [BOT] 💾 Added channel posting: Research Scientist Graduate - Foundation Model-Music - 2026 Start(PhD) @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:59:39.067Z] [BOT] 💾 BEFORE MERGE: 1434 jobs in memory (cached)
[2026-01-31T20:59:39.090Z] [BOT] ✅ Loaded V2 database: 1433 jobs
💾 DISK STATE: 1433 jobs on disk
[2026-01-31T20:59:39.091Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1434
[2026-01-31T20:59:39.095Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:39.095Z] [BOT] 💾 AFTER MERGE: 1434 jobs (merged disk + memory)
[2026-01-31T20:59:39.096Z] [BOT] ✅ No jobs to archive (all 1434 jobs within 7-day window)
[2026-01-31T20:59:39.175Z] [BOT] 💾 Saved posted_jobs.json: 1434 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:40.677Z] [BOT] 📍 [ROUTING] "Backend Software Engineer Graduate - Capcut - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T20:59:40.849Z] [BOT] ✅ Posted message: Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c
[2026-01-31T20:59:40.850Z] [BOT] 💾 Added channel posting: Backend Software Engineer Graduate - Capcut - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 1435 jobs in memory (cached)
[2026-01-31T20:59:40.874Z] [BOT] ✅ Loaded V2 database: 1434 jobs
💾 DISK STATE: 1434 jobs on disk
[2026-01-31T20:59:40.874Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1435
[2026-01-31T20:59:40.879Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:40.879Z] [BOT] 💾 AFTER MERGE: 1435 jobs (merged disk + memory)
[2026-01-31T20:59:40.879Z] [BOT] ✅ No jobs to archive (all 1435 jobs within 7-day window)
[2026-01-31T20:59:40.977Z] [BOT] 💾 Saved posted_jobs.json: 1435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:45.477Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T20:59:45.478Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist Generative AI - Intelligent Creation" @ ORG_1bb6fcfb
[2026-01-31T20:59:45.478Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:59:45.811Z] [BOT] ✅ Posted message: Graduate Research Scientist Generative AI - Intelligent Creation @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T20:59:45.811Z] [BOT] ✅ Industry: Graduate Research Scientist Generative AI - Intelligent Creation @ ORG_1bb6fcfb
[2026-01-31T20:59:45.812Z] [BOT] 💾 Added channel posting: Graduate Research Scientist Generative AI - Intelligent Creation @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T20:59:45.812Z] [BOT] 💾 BEFORE MERGE: 1436 jobs in memory (cached)
[2026-01-31T20:59:45.836Z] [BOT] ✅ Loaded V2 database: 1435 jobs
💾 DISK STATE: 1435 jobs on disk
[2026-01-31T20:59:45.836Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1436
[2026-01-31T20:59:45.841Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:45.841Z] [BOT] 💾 AFTER MERGE: 1436 jobs (merged disk + memory)
[2026-01-31T20:59:45.844Z] [BOT] ✅ No jobs to archive (all 1436 jobs within 7-day window)
[2026-01-31T20:59:45.921Z] [BOT] 💾 Saved posted_jobs.json: 1436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:47.423Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Conversational AI" @ ORG_08c9a13c
[2026-01-31T20:59:47.423Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T20:59:47.613Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T20:59:47.613Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c
[2026-01-31T20:59:47.614Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Conversational AI @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T20:59:47.614Z] [BOT] 💾 BEFORE MERGE: 1437 jobs in memory (cached)
[2026-01-31T20:59:47.638Z] [BOT] ✅ Loaded V2 database: 1436 jobs
💾 DISK STATE: 1436 jobs on disk
[2026-01-31T20:59:47.638Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1437
[2026-01-31T20:59:47.642Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:47.642Z] [BOT] 💾 AFTER MERGE: 1437 jobs (merged disk + memory)
[2026-01-31T20:59:47.643Z] [BOT] ✅ No jobs to archive (all 1437 jobs within 7-day window)
[2026-01-31T20:59:47.722Z] [BOT] 💾 Saved posted_jobs.json: 1437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:52.223Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T20:59:52.224Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cf3a49a4..." not found, but found as SHA256 "da35bb3ae5696b41"
[2026-01-31T20:59:52.224Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_6c68685a (posted within 7 days)
[2026-01-31T20:59:52.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c498cf9b..." not found, but found as SHA256 "6c572e71e756dbde"
[2026-01-31T20:59:52.225Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_11d3f9d6 (posted within 7 days)
[2026-01-31T20:59:52.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45f1660f..." not found, but found as SHA256 "8a548ad843f46fcd"
⏭️  Skipping duplicate: JID_6796d1d6-CH_7969274b (posted within 7 days)
[2026-01-31T20:59:52.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3ac492b0..." not found, but found as SHA256 "baaaaf36cda33c60"
[2026-01-31T20:59:52.225Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_2667a390 (posted within 7 days)
[2026-01-31T20:59:52.225Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da59a498..." not found, but found as SHA256 "a6218a6cc7846d2b"
[2026-01-31T20:59:52.226Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_b25229b4 (posted within 7 days)
[2026-01-31T20:59:52.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8d8bff5d..." not found, but found as SHA256 "a011e6129649f762"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_45d1edd7-detail (posted within 7 days)
[2026-01-31T20:59:52.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5fe823d6..." not found, but found as SHA256 "11f18e90c9d1b012"
[2026-01-31T20:59:52.226Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_b43fb50a-detail (posted within 7 days)
[2026-01-31T20:59:52.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cf80e42f..." not found, but found as SHA256 "63e94b761bdd340a"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_f529a541-detail (posted within 7 days)
[2026-01-31T20:59:52.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3f0247c9..." not found, but found as SHA256 "579344a61112dfb4"
[2026-01-31T20:59:52.227Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3fcb955b-detail (posted within 7 days)
[2026-01-31T20:59:52.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a8c1d32..." not found, but found as SHA256 "610cd0532ff5f484"
[2026-01-31T20:59:52.227Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_ed332800-detail (posted within 7 days)
[2026-01-31T20:59:52.337Z] [BOT] ✅ Loaded pending queue: 2943 total (1487 pending, 49 enriched, 1407 posted)
[2026-01-31T20:59:52.526Z] [BOT] ✅ Saved pending queue: 2943 total (1487 pending, 39 enriched, 1417 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T20:59:52.526Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T20:59:52.613Z] [BOT] 📂 Loaded 11498 existing routing entries
[2026-01-31T20:59:52.760Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T20:59:52.760Z] [BOT] Total entries: 11508
   Timestamp: 2026-01-31T20:59:52.714Z
[2026-01-31T20:59:52.761Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 25
[2026-01-31T20:59:52.761Z] [BOT] Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-31T20:59:52.761Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T20:59:52.761Z] [BOT] Total posts: 10
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🤖・ai-jobs: 2 posts
[2026-01-31T20:59:52.761Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1437 jobs in memory (cached)
[2026-01-31T20:59:52.787Z] [BOT] ✅ Loaded V2 database: 1437 jobs
💾 DISK STATE: 1437 jobs on disk
[2026-01-31T20:59:52.788Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1437
[2026-01-31T20:59:52.792Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T20:59:52.792Z] [BOT] 💾 AFTER MERGE: 1437 jobs (merged disk + memory)
[2026-01-31T20:59:52.793Z] [BOT] ✅ No jobs to archive (all 1437 jobs within 7-day window)
[2026-01-31T20:59:52.868Z] [BOT] 💾 Saved posted_jobs.json: 1437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T20:59:52.868Z] [BOT] ✅ Database saved successfully
[2026-01-31T20:59:54.901Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2626) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*