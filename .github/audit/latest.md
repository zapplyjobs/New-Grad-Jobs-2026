# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T09:20:05.342Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T09:19:31.404Z] ========================================
[2026-01-31T09:19:31.406Z] Discord Bot Execution Log
[2026-01-31T09:19:31.406Z] Environment: GitHub Actions
[2026-01-31T09:19:31.406Z] Node Version: v20.20.0
[2026-01-31T09:19:31.406Z] ========================================
[2026-01-31T09:19:31.406Z] Environment Variables Check:
[2026-01-31T09:19:31.406Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T09:19:31.407Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T09:19:31.407Z] 
Multi-Channel Configuration:
[2026-01-31T09:19:31.407Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.407Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T09:19:31.408Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T09:19:31.408Z] 
Data Files Check:
[2026-01-31T09:19:31.409Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T09:19:31.440Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6273034 bytes)
[2026-01-31T09:19:31.440Z] 
========================================
[2026-01-31T09:19:31.440Z] Starting Enhanced Discord Bot...
[2026-01-31T09:19:31.440Z] ========================================
[2026-01-31T09:19:31.987Z] [BOT] ✅ Loaded V2 database: 998 jobs
[2026-01-31T09:19:32.463Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T09:19:32.464Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T09:19:32.464Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T09:19:32.579Z] [BOT] ✅ Loaded pending queue: 2955 total (1936 pending, 50 enriched, 969 posted)
[2026-01-31T09:19:32.579Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:19:32.580Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T09:19:32.580Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T09:19:32.580Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:19:32.580Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T09:19:32.581Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T09:19:32.581Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T09:19:32.581Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T09:19:32.581Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T09:19:32.582Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T09:19:32.582Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T09:19:32.582Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T09:19:32.582Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T09:19:32.583Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T09:19:32.583Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T09:19:32.583Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T09:19:32.583Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T09:19:32.583Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T09:19:32.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T09:19:32.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T09:19:32.584Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T09:19:32.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T09:19:32.584Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T09:19:32.584Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T09:19:32.590Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T09:19:32.591Z] [BOT] 🚫 Skipping blacklisted job: Associate Director, Programmatic Platform Operations at spotify
[2026-01-31T09:19:32.591Z] [BOT] 🚫 Skipping blacklisted job: Associate / Staff Mission Data Analyst at SciTec
[2026-01-31T09:19:32.697Z] [BOT] ✅ Loaded pending queue: 2955 total (1936 pending, 50 enriched, 969 posted)
[2026-01-31T09:19:32.888Z] [BOT] ✅ Saved pending queue: 2953 total (1936 pending, 48 enriched, 969 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T09:19:32.888Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T09:19:32.889Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T09:19:32.889Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T09:19:32.893Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T09:19:32.894Z] [BOT] 📍 [ROUTING] "Backend Engineer - AI" @ ORG_dec20a22ing
[2026-01-31T09:19:32.894Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:19:32.911Z] [BOT ERROR] (node:3263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T09:19:33.291Z] [BOT] ✅ Posted message: Backend Engineer - AI @ ORG_dec20a22ing in #💻・tech-jobs
  ✅ Industry: Backend Engineer - AI @ ORG_dec20a22ing
[2026-01-31T09:19:33.292Z] [BOT] 💾 Added channel posting: Backend Engineer - AI @ ORG_dec20a22ing → category channel (1 total channels)
[2026-01-31T09:19:33.292Z] [BOT] 💾 BEFORE MERGE: 999 jobs in memory (cached)
[2026-01-31T09:19:33.315Z] [BOT] ✅ Loaded V2 database: 998 jobs
💾 DISK STATE: 998 jobs on disk
[2026-01-31T09:19:33.315Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=999
[2026-01-31T09:19:33.317Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:19:33.317Z] [BOT] 💾 AFTER MERGE: 999 jobs (merged disk + memory)
[2026-01-31T09:19:33.318Z] [BOT] ✅ No jobs to archive (all 999 jobs within 7-day window)
[2026-01-31T09:19:33.388Z] [BOT] 💾 Saved posted_jobs.json: 999 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:34.891Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer in Test" @ ORG_7a38ef37 Corporation
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:19:35.206Z] [BOT] ✅ Posted message: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation in #💻・tech-jobs
  ✅ Industry: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation
[2026-01-31T09:19:35.206Z] [BOT] 💾 Added channel posting: Associate Software Development Engineer in Test @ ORG_7a38ef37 Corporation → category channel (1 total channels)
[2026-01-31T09:19:35.207Z] [BOT] 💾 BEFORE MERGE: 1000 jobs in memory (cached)
[2026-01-31T09:19:35.226Z] [BOT] ✅ Loaded V2 database: 999 jobs
[2026-01-31T09:19:35.226Z] [BOT] 💾 DISK STATE: 999 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1000
[2026-01-31T09:19:35.228Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:19:35.228Z] [BOT] 💾 AFTER MERGE: 1000 jobs (merged disk + memory)
[2026-01-31T09:19:35.229Z] [BOT] ✅ No jobs to archive (all 1000 jobs within 7-day window)
[2026-01-31T09:19:35.291Z] [BOT] 💾 Saved posted_jobs.json: 1000 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:36.792Z] [BOT] 📍 [ROUTING] "Junior Embedded Software Engineer (cleared)" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:19:37.193Z] [BOT] ✅ Posted message: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2026-01-31T09:19:37.193Z] [BOT] ✅ Industry: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems
[2026-01-31T09:19:37.193Z] [BOT] 💾 Added channel posting: Junior Embedded Software Engineer (cleared) @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-01-31T09:19:37.193Z] [BOT] 💾 BEFORE MERGE: 1001 jobs in memory (cached)
[2026-01-31T09:19:37.213Z] [BOT] ✅ Loaded V2 database: 1000 jobs
💾 DISK STATE: 1000 jobs on disk
[2026-01-31T09:19:37.213Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1001
[2026-01-31T09:19:37.215Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:19:37.215Z] [BOT] 💾 AFTER MERGE: 1001 jobs (merged disk + memory)
[2026-01-31T09:19:37.216Z] [BOT] ✅ No jobs to archive (all 1001 jobs within 7-day window)
[2026-01-31T09:19:37.278Z] [BOT] 💾 Saved posted_jobs.json: 1001 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:38.780Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_c4313919 Schwab
   Category: TECH (matched: "software")
[2026-01-31T09:19:38.780Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:19:38.966Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_c4313919 Schwab in #💻・tech-jobs
[2026-01-31T09:19:38.966Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_c4313919 Schwab
[2026-01-31T09:19:38.967Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_c4313919 Schwab → category channel (1 total channels)
💾 BEFORE MERGE: 1002 jobs in memory (cached)
[2026-01-31T09:19:38.986Z] [BOT] ✅ Loaded V2 database: 1001 jobs
💾 DISK STATE: 1001 jobs on disk
[2026-01-31T09:19:38.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1002
[2026-01-31T09:19:38.989Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:19:38.989Z] [BOT] 💾 AFTER MERGE: 1002 jobs (merged disk + memory)
[2026-01-31T09:19:38.989Z] [BOT] ✅ No jobs to archive (all 1002 jobs within 7-day window)
[2026-01-31T09:19:39.065Z] [BOT] 💾 Saved posted_jobs.json: 1002 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:40.564Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_2c6b11e0
[2026-01-31T09:19:40.564Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:19:40.771Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_2c6b11e0 in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_2c6b11e0
[2026-01-31T09:19:40.772Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_2c6b11e0 → category channel (1 total channels)
[2026-01-31T09:19:40.772Z] [BOT] 💾 BEFORE MERGE: 1003 jobs in memory (cached)
[2026-01-31T09:19:40.798Z] [BOT] ✅ Loaded V2 database: 1002 jobs
💾 DISK STATE: 1002 jobs on disk
[2026-01-31T09:19:40.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1003
[2026-01-31T09:19:40.801Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:19:40.801Z] [BOT] 💾 AFTER MERGE: 1003 jobs (merged disk + memory)
[2026-01-31T09:19:40.801Z] [BOT] ✅ No jobs to archive (all 1003 jobs within 7-day window)
[2026-01-31T09:19:40.859Z] [BOT] 💾 Saved posted_jobs.json: 1003 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:42.362Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_fa57efea
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:19:42.521Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_fa57efea in #💻・tech-jobs
  ✅ Industry: Software Engineer - New Grad @ ORG_fa57efea
[2026-01-31T09:19:42.522Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_fa57efea → category channel (1 total channels)
💾 BEFORE MERGE: 1004 jobs in memory (cached)
[2026-01-31T09:19:42.541Z] [BOT] ✅ Loaded V2 database: 1003 jobs
💾 DISK STATE: 1003 jobs on disk
[2026-01-31T09:19:42.542Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1004
[2026-01-31T09:19:42.543Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1004 jobs (merged disk + memory)
[2026-01-31T09:19:42.544Z] [BOT] ✅ No jobs to archive (all 1004 jobs within 7-day window)
[2026-01-31T09:19:42.601Z] [BOT] 💾 Saved posted_jobs.json: 1004 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:44.102Z] [BOT] 📍 [ROUTING] "Research Specialist" @ ORG_9d38443e of Chicago
   Category: TECH (default)
[2026-01-31T09:19:44.102Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:19:44.289Z] [BOT] ✅ Posted message: Research Specialist @ ORG_9d38443e of Chicago in #💻・tech-jobs
[2026-01-31T09:19:44.289Z] [BOT] ✅ Industry: Research Specialist @ ORG_9d38443e of Chicago
[2026-01-31T09:19:44.289Z] [BOT] 💾 Added channel posting: Research Specialist @ ORG_9d38443e of Chicago → category channel (1 total channels)
💾 BEFORE MERGE: 1005 jobs in memory (cached)
[2026-01-31T09:19:44.309Z] [BOT] ✅ Loaded V2 database: 1004 jobs
💾 DISK STATE: 1004 jobs on disk
[2026-01-31T09:19:44.309Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1005
[2026-01-31T09:19:44.311Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:19:44.311Z] [BOT] 💾 AFTER MERGE: 1005 jobs (merged disk + memory)
[2026-01-31T09:19:44.312Z] [BOT] ✅ No jobs to archive (all 1005 jobs within 7-day window)
[2026-01-31T09:19:44.373Z] [BOT] 💾 Saved posted_jobs.json: 1005 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:48.875Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T09:19:48.876Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer, Personalization" @ spotify
[2026-01-31T09:19:48.876Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T09:19:49.062Z] [BOT] ✅ Posted message: Machine Learning Engineer, Personalization @ spotify in #🤖・ai-jobs
[2026-01-31T09:19:49.062Z] [BOT] ✅ Industry: Machine Learning Engineer, Personalization @ spotify
[2026-01-31T09:19:49.062Z] [BOT] 💾 Added channel posting: Machine Learning Engineer, Personalization @ spotify → category channel (1 total channels)
[2026-01-31T09:19:49.063Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory (cached)
[2026-01-31T09:19:49.082Z] [BOT] ✅ Loaded V2 database: 1005 jobs
💾 DISK STATE: 1005 jobs on disk
[2026-01-31T09:19:49.083Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1006
[2026-01-31T09:19:49.084Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:19:49.085Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-31T09:19:49.085Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-31T09:19:49.146Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:50.971Z] [BOT] ✅ Posted message: Machine Learning Engineer, Personalization @ spotify in #🗽・JID_98d4f0de
[2026-01-31T09:19:50.971Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T09:19:50.972Z] [BOT] 💾 Added channel posting: Machine Learning Engineer, Personalization @ spotify → location channel (2 total channels)
[2026-01-31T09:19:50.972Z] [BOT] 💾 BEFORE MERGE: 1006 jobs in memory (cached)
[2026-01-31T09:19:50.992Z] [BOT] ✅ Loaded V2 database: 1006 jobs
💾 DISK STATE: 1006 jobs on disk
[2026-01-31T09:19:50.992Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1006
[2026-01-31T09:19:50.994Z] [BOT] 🔀 Deep merged: Machine Learning Engineer, Personalization @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T09:19:50.994Z] [BOT] 💾 AFTER MERGE: 1006 jobs (merged disk + memory)
[2026-01-31T09:19:50.995Z] [BOT] ✅ No jobs to archive (all 1006 jobs within 7-day window)
[2026-01-31T09:19:51.057Z] [BOT] 💾 Saved posted_jobs.json: 1006 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:52.559Z] [BOT] 📍 [ROUTING] "Software Quality Assurance Engineer I" @ ORG_1b91b475 Automation
[2026-01-31T09:19:52.560Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T09:19:52.708Z] [BOT] ✅ Posted message: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation in #🤖・ai-jobs
  ✅ Industry: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation
[2026-01-31T09:19:52.709Z] [BOT] 💾 Added channel posting: Software Quality Assurance Engineer I @ ORG_1b91b475 Automation → category channel (1 total channels)
[2026-01-31T09:19:52.709Z] [BOT] 💾 BEFORE MERGE: 1007 jobs in memory (cached)
[2026-01-31T09:19:52.728Z] [BOT] ✅ Loaded V2 database: 1006 jobs
💾 DISK STATE: 1006 jobs on disk
[2026-01-31T09:19:52.728Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1007
[2026-01-31T09:19:52.730Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1007 jobs (merged disk + memory)
[2026-01-31T09:19:52.731Z] [BOT] ✅ No jobs to archive (all 1007 jobs within 7-day window)
[2026-01-31T09:19:52.790Z] [BOT] 💾 Saved posted_jobs.json: 1007 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:19:57.292Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T09:19:57.293Z] [BOT] 📍 [ROUTING] "Data Engineer 1" @ ORG_441f2234
[2026-01-31T09:19:57.293Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T09:19:57.451Z] [BOT] ✅ Posted message: Data Engineer 1 @ ORG_441f2234 in #📊・JID_fb739488
  ✅ Industry: Data Engineer 1 @ ORG_441f2234
[2026-01-31T09:19:57.451Z] [BOT] 💾 Added channel posting: Data Engineer 1 @ ORG_441f2234 → category channel (1 total channels)
[2026-01-31T09:19:57.451Z] [BOT] 💾 BEFORE MERGE: 1008 jobs in memory (cached)
[2026-01-31T09:19:57.470Z] [BOT] ✅ Loaded V2 database: 1007 jobs
💾 DISK STATE: 1007 jobs on disk
[2026-01-31T09:19:57.470Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1008
[2026-01-31T09:19:57.473Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1008 jobs (merged disk + memory)
[2026-01-31T09:19:57.473Z] [BOT] ✅ No jobs to archive (all 1008 jobs within 7-day window)
[2026-01-31T09:19:57.548Z] [BOT] 💾 Saved posted_jobs.json: 1008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:20:02.047Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T09:20:02.049Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eb20428a-..." not found, but found as SHA256 "1edb208814eab5e3"
⏭️  Skipping duplicate: JID_35f7e58c (posted within 7 days)
[2026-01-31T09:20:02.049Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2b374e36..." not found, but found as SHA256 "dfe4d35f0b45a99c"
⏭️  Skipping duplicate: JID_f10069af (posted within 7 days)
[2026-01-31T09:20:02.049Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6b26a918..." not found, but found as SHA256 "a9486e4e595f15c1"
⏭️  Skipping duplicate: JID_27a18fcb-_req-2025-14278 (posted within 7 days)
[2026-01-31T09:20:02.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77394cf9..." not found, but found as SHA256 "286ee09b418e1ec0"
[2026-01-31T09:20:02.050Z] [BOT] ⏭️  Skipping duplicate: JID_35f672d1 (posted within 7 days)
[2026-01-31T09:20:02.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_44139bdc..." not found, but found as SHA256 "f850b73d4dffa960"
⏭️  Skipping duplicate: JID_da537281 (posted within 7 days)
[2026-01-31T09:20:02.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4a1c099..." not found, but found as SHA256 "908c3b844485d4ec"
[2026-01-31T09:20:02.050Z] [BOT] ⏭️  Skipping duplicate: JID_e4a1c099 (posted within 7 days)
[2026-01-31T09:20:02.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8226b705..." not found, but found as SHA256 "c5c4eb5933c70609"
⏭️  Skipping duplicate: JID_285e805e (posted within 7 days)
[2026-01-31T09:20:02.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7fbd498f..." not found, but found as SHA256 "dbdce4a7aec405d0"
[2026-01-31T09:20:02.051Z] [BOT] ⏭️  Skipping duplicate: JID_c2bcf3af (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6f58f2a4-centene_ex..." not found, but found as SHA256 "27297179aaabaa63"
[2026-01-31T09:20:02.051Z] [BOT] ⏭️  Skipping duplicate: JID_6f58f2a4-centene_external-JID_524db41a-i_1624077 (posted within 7 days)
[2026-01-31T09:20:02.051Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96a99c4b-..." not found, but found as SHA256 "3a4b84e3776e15c3"
[2026-01-31T09:20:02.051Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-specialist_jr31936 (posted within 7 days)
[2026-01-31T09:20:02.168Z] [BOT] ✅ Loaded pending queue: 2953 total (1936 pending, 48 enriched, 969 posted)
[2026-01-31T09:20:02.347Z] [BOT] ✅ Saved pending queue: 2953 total (1936 pending, 38 enriched, 979 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T09:20:02.348Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T09:20:02.433Z] [BOT] 📂 Loaded 11060 existing routing entries
[2026-01-31T09:20:02.556Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T09:20:02.556Z] [BOT] Total entries: 11070
   Timestamp: 2026-01-31T09:20:02.511Z
[2026-01-31T09:20:02.558Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 27
   Successful: 11
   Failed: 0
   Skipped: 16
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1008 jobs in memory (cached)
[2026-01-31T09:20:02.594Z] [BOT] ✅ Loaded V2 database: 1008 jobs
💾 DISK STATE: 1008 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1008
[2026-01-31T09:20:02.595Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:20:02.595Z] [BOT] 💾 AFTER MERGE: 1008 jobs (merged disk + memory)
[2026-01-31T09:20:02.596Z] [BOT] ✅ No jobs to archive (all 1008 jobs within 7-day window)
[2026-01-31T09:20:02.651Z] [BOT] 💾 Saved posted_jobs.json: 1008 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:20:02.651Z] [BOT] ✅ Database saved successfully
[2026-01-31T09:20:04.681Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3263) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*