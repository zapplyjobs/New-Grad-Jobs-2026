# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T23:46:44.718Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T23:46:10.259Z] ========================================
[2026-01-31T23:46:10.261Z] Discord Bot Execution Log
[2026-01-31T23:46:10.261Z] Environment: GitHub Actions
[2026-01-31T23:46:10.261Z] Node Version: v20.20.0
[2026-01-31T23:46:10.261Z] ========================================
[2026-01-31T23:46:10.261Z] Environment Variables Check:
[2026-01-31T23:46:10.261Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T23:46:10.261Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.261Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T23:46:10.261Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T23:46:10.262Z] 
Multi-Channel Configuration:
[2026-01-31T23:46:10.262Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T23:46:10.262Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T23:46:10.262Z] 
Data Files Check:
[2026-01-31T23:46:10.263Z] .github/data/new_jobs.json: ✅ Exists (10 items, 69066 bytes)
[2026-01-31T23:46:10.309Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8654664 bytes)
[2026-01-31T23:46:10.309Z] 
========================================
[2026-01-31T23:46:10.309Z] Starting Enhanced Discord Bot...
[2026-01-31T23:46:10.309Z] ========================================
[2026-01-31T23:46:10.873Z] [BOT] ✅ Loaded V2 database: 1527 jobs
[2026-01-31T23:46:11.156Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T23:46:11.157Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T23:46:11.157Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T23:46:11.279Z] [BOT] ✅ Loaded pending queue: 2947 total (1380 pending, 50 enriched, 1517 posted)
[2026-01-31T23:46:11.279Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T23:46:11.279Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T23:46:11.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T23:46:11.281Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T23:46:11.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T23:46:11.281Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T23:46:11.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T23:46:11.282Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T23:46:11.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T23:46:11.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T23:46:11.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T23:46:11.283Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T23:46:11.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T23:46:11.283Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T23:46:11.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T23:46:11.296Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-01-31T23:46:11.296Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Growth at clerk
[2026-01-31T23:46:11.402Z] [BOT] ✅ Loaded pending queue: 2947 total (1380 pending, 50 enriched, 1517 posted)
[2026-01-31T23:46:11.603Z] [BOT] ✅ Saved pending queue: 2946 total (1380 pending, 49 enriched, 1517 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 41 jobs (1 blacklisted)
[2026-01-31T23:46:11.603Z] [BOT] 📋 After data quality filter: 41 jobs (0 invalid)
[2026-01-31T23:46:11.604Z] [BOT] 📋 After multi-location grouping: 39 unique jobs to post
[2026-01-31T23:46:11.604Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems: pleasanton, columbus
   - Software Engineer I - Remote Assist @ ORG_e9de098c Innovation: pittsburgh, mountain view
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T23:46:11.607Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T23:46:11.608Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Forward Deployed AI" @ ORG_1eec97a0
   Category: AI (matched: "AI/ML")
[2026-01-31T23:46:11.608Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:46:11.626Z] [BOT ERROR] (node:2745) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T23:46:11.823Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 in #🤖・ai-jobs
[2026-01-31T23:46:11.823Z] [BOT] ✅ Industry: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0
[2026-01-31T23:46:11.824Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Forward Deployed AI @ ORG_1eec97a0 → category channel (1 total channels)
[2026-01-31T23:46:11.824Z] [BOT] 💾 BEFORE MERGE: 1528 jobs in memory (cached)
[2026-01-31T23:46:11.854Z] [BOT] ✅ Loaded V2 database: 1527 jobs
💾 DISK STATE: 1527 jobs on disk
[2026-01-31T23:46:11.863Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1528
[2026-01-31T23:46:11.867Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:11.867Z] [BOT] 💾 AFTER MERGE: 1528 jobs (merged disk + memory)
[2026-01-31T23:46:11.868Z] [BOT] ✅ No jobs to archive (all 1528 jobs within 7-day window)
[2026-01-31T23:46:11.959Z] [BOT] 💾 Saved posted_jobs.json: 1528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:13.462Z] [BOT] 📍 [ROUTING] "Software Engineer – Forward Deployed AI (New Grad)" @ ORG_1eec97a0
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T23:46:13.462Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:46:13.686Z] [BOT] ✅ Posted message: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 in #🤖・ai-jobs
[2026-01-31T23:46:13.687Z] [BOT] ✅ Industry: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0
[2026-01-31T23:46:13.687Z] [BOT] 💾 Added channel posting: Software Engineer – Forward Deployed AI (New Grad) @ ORG_1eec97a0 → category channel (1 total channels)
[2026-01-31T23:46:13.687Z] [BOT] 💾 BEFORE MERGE: 1529 jobs in memory (cached)
[2026-01-31T23:46:13.713Z] [BOT] ✅ Loaded V2 database: 1528 jobs
💾 DISK STATE: 1528 jobs on disk
[2026-01-31T23:46:13.720Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1529
[2026-01-31T23:46:13.723Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:13.723Z] [BOT] 💾 AFTER MERGE: 1529 jobs (merged disk + memory)
[2026-01-31T23:46:13.724Z] [BOT] ✅ No jobs to archive (all 1529 jobs within 7-day window)
[2026-01-31T23:46:13.809Z] [BOT] 💾 Saved posted_jobs.json: 1529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:18.310Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T23:46:18.311Z] [BOT] 📍 [ROUTING] "Junior Full Stack Software Engineer" @ ORG_b891e1e7 Technologies
   Category: TECH (matched: "software")
[2026-01-31T23:46:18.311Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:46:18.538Z] [BOT] ✅ Posted message: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies in #💻・tech-jobs
[2026-01-31T23:46:18.538Z] [BOT] ✅ Industry: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies
[2026-01-31T23:46:18.538Z] [BOT] 💾 Added channel posting: Junior Full Stack Software Engineer @ ORG_b891e1e7 Technologies → category channel (1 total channels)
[2026-01-31T23:46:18.539Z] [BOT] 💾 BEFORE MERGE: 1530 jobs in memory (cached)
[2026-01-31T23:46:18.563Z] [BOT] ✅ Loaded V2 database: 1529 jobs
💾 DISK STATE: 1529 jobs on disk
[2026-01-31T23:46:18.570Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1530
[2026-01-31T23:46:18.574Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:18.574Z] [BOT] 💾 AFTER MERGE: 1530 jobs (merged disk + memory)
[2026-01-31T23:46:18.575Z] [BOT] ✅ No jobs to archive (all 1530 jobs within 7-day window)
[2026-01-31T23:46:18.659Z] [BOT] 💾 Saved posted_jobs.json: 1530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:20.161Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI)" @ ORG_dc7620eb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:46:20.363Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-31T23:46:20.363Z] [BOT] ✅ Industry: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb
[2026-01-31T23:46:20.363Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Oracle Cloud Infrastructure (OCI) @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T23:46:20.363Z] [BOT] 💾 BEFORE MERGE: 1531 jobs in memory (cached)
[2026-01-31T23:46:20.396Z] [BOT] ✅ Loaded V2 database: 1530 jobs
💾 DISK STATE: 1530 jobs on disk
[2026-01-31T23:46:20.396Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1531
[2026-01-31T23:46:20.406Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:20.407Z] [BOT] 💾 AFTER MERGE: 1531 jobs (merged disk + memory)
[2026-01-31T23:46:20.407Z] [BOT] ✅ No jobs to archive (all 1531 jobs within 7-day window)
[2026-01-31T23:46:20.498Z] [BOT] 💾 Saved posted_jobs.json: 1531 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:22.000Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2026-01-31T23:46:22.000Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:46:22.503Z] [BOT] ✅ Posted message: Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2026-01-31T23:46:22.503Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2026-01-31T23:46:22.503Z] [BOT] 💾 Added channel posting: Software Development Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T23:46:22.503Z] [BOT] 💾 BEFORE MERGE: 1532 jobs in memory (cached)
[2026-01-31T23:46:22.529Z] [BOT] ✅ Loaded V2 database: 1531 jobs
💾 DISK STATE: 1531 jobs on disk
[2026-01-31T23:46:22.532Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1532
[2026-01-31T23:46:22.535Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:22.535Z] [BOT] 💾 AFTER MERGE: 1532 jobs (merged disk + memory)
[2026-01-31T23:46:22.536Z] [BOT] ✅ No jobs to archive (all 1532 jobs within 7-day window)
[2026-01-31T23:46:22.612Z] [BOT] 💾 Saved posted_jobs.json: 1532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:24.114Z] [BOT] 📍 [ROUTING] "Growth Engineering - Mobile" @ ORG_91268016
[2026-01-31T23:46:24.114Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:46:24.370Z] [BOT] ✅ Posted message: Growth Engineering - Mobile @ ORG_91268016 in #💻・tech-jobs
[2026-01-31T23:46:24.371Z] [BOT] ✅ Industry: Growth Engineering - Mobile @ ORG_91268016
[2026-01-31T23:46:24.371Z] [BOT] 💾 Added channel posting: Growth Engineering - Mobile @ ORG_91268016 → category channel (1 total channels)
[2026-01-31T23:46:24.371Z] [BOT] 💾 BEFORE MERGE: 1533 jobs in memory (cached)
[2026-01-31T23:46:24.397Z] [BOT] ✅ Loaded V2 database: 1532 jobs
💾 DISK STATE: 1532 jobs on disk
[2026-01-31T23:46:24.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1533
[2026-01-31T23:46:24.406Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:24.406Z] [BOT] 💾 AFTER MERGE: 1533 jobs (merged disk + memory)
[2026-01-31T23:46:24.407Z] [BOT] ✅ No jobs to archive (all 1533 jobs within 7-day window)
[2026-01-31T23:46:24.498Z] [BOT] 💾 Saved posted_jobs.json: 1533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:25.999Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_7f34df62ings
[2026-01-31T23:46:26.000Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:46:26.187Z] [BOT] ✅ Posted message: Software Engineer @ ORG_7f34df62ings in #💻・tech-jobs
[2026-01-31T23:46:26.187Z] [BOT] ✅ Industry: Software Engineer @ ORG_7f34df62ings
[2026-01-31T23:46:26.187Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_7f34df62ings → category channel (1 total channels)
💾 BEFORE MERGE: 1534 jobs in memory (cached)
[2026-01-31T23:46:26.216Z] [BOT] ✅ Loaded V2 database: 1533 jobs
💾 DISK STATE: 1533 jobs on disk
[2026-01-31T23:46:26.217Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1534
[2026-01-31T23:46:26.219Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:26.219Z] [BOT] 💾 AFTER MERGE: 1534 jobs (merged disk + memory)
[2026-01-31T23:46:26.220Z] [BOT] ✅ No jobs to archive (all 1534 jobs within 7-day window)
[2026-01-31T23:46:26.303Z] [BOT] 💾 Saved posted_jobs.json: 1534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:28.089Z] [BOT] ✅ Posted message: Software Engineer @ ORG_7f34df62ings in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T23:46:28.089Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_7f34df62ings → location channel (2 total channels)
[2026-01-31T23:46:28.089Z] [BOT] 💾 BEFORE MERGE: 1534 jobs in memory (cached)
[2026-01-31T23:46:28.114Z] [BOT] ✅ Loaded V2 database: 1534 jobs
💾 DISK STATE: 1534 jobs on disk
[2026-01-31T23:46:28.121Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1534
[2026-01-31T23:46:28.123Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_7f34df62ings (disk: 1 channels → merged: 2 channels)
[2026-01-31T23:46:28.123Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1534 jobs (merged disk + memory)
[2026-01-31T23:46:28.124Z] [BOT] ✅ No jobs to archive (all 1534 jobs within 7-day window)
[2026-01-31T23:46:28.225Z] [BOT] 💾 Saved posted_jobs.json: 1534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:29.724Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
[2026-01-31T23:46:29.725Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:46:29.949Z] [BOT] ✅ Posted message: Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-31T23:46:29.949Z] [BOT] ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-31T23:46:29.950Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-31T23:46:29.950Z] [BOT] 💾 BEFORE MERGE: 1535 jobs in memory (cached)
[2026-01-31T23:46:29.980Z] [BOT] ✅ Loaded V2 database: 1534 jobs
[2026-01-31T23:46:29.980Z] [BOT] 💾 DISK STATE: 1534 jobs on disk
[2026-01-31T23:46:29.980Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1535
[2026-01-31T23:46:29.984Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:29.984Z] [BOT] 💾 AFTER MERGE: 1535 jobs (merged disk + memory)
[2026-01-31T23:46:29.985Z] [BOT] ✅ No jobs to archive (all 1535 jobs within 7-day window)
[2026-01-31T23:46:30.066Z] [BOT] 💾 Saved posted_jobs.json: 1535 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:31.569Z] [BOT] 📍 [ROUTING] "Associate Software Test Engineer" @ ORG_7a38ef37
[2026-01-31T23:46:31.569Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:46:31.802Z] [BOT] ✅ Posted message: Associate Software Test Engineer @ ORG_7a38ef37 in #💻・tech-jobs
  ✅ Industry: Associate Software Test Engineer @ ORG_7a38ef37
[2026-01-31T23:46:31.803Z] [BOT] 💾 Added channel posting: Associate Software Test Engineer @ ORG_7a38ef37 → category channel (1 total channels)
[2026-01-31T23:46:31.803Z] [BOT] 💾 BEFORE MERGE: 1536 jobs in memory (cached)
[2026-01-31T23:46:31.831Z] [BOT] ✅ Loaded V2 database: 1535 jobs
💾 DISK STATE: 1535 jobs on disk
[2026-01-31T23:46:31.832Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1536
[2026-01-31T23:46:31.835Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:31.835Z] [BOT] 💾 AFTER MERGE: 1536 jobs (merged disk + memory)
[2026-01-31T23:46:31.836Z] [BOT] ✅ No jobs to archive (all 1536 jobs within 7-day window)
[2026-01-31T23:46:31.912Z] [BOT] 💾 Saved posted_jobs.json: 1536 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:36.415Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T23:46:36.415Z] [BOT] 📍 [ROUTING] "Data Analyst I Bioinformatician Rheumatology" @ ORG_10a0c5f8 General Brigham
[2026-01-31T23:46:36.416Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T23:46:36.729Z] [BOT] ✅ Posted message: Data Analyst I Bioinformatician Rheumatology @ ORG_10a0c5f8 General Brigham in #📊・JID_fb739488
[2026-01-31T23:46:36.729Z] [BOT] ✅ Industry: Data Analyst I Bioinformatician Rheumatology @ ORG_10a0c5f8 General Brigham
[2026-01-31T23:46:36.730Z] [BOT] 💾 Added channel posting: Data Analyst I Bioinformatician Rheumatology @ ORG_10a0c5f8 General Brigham → category channel (1 total channels)
[2026-01-31T23:46:36.730Z] [BOT] 💾 BEFORE MERGE: 1537 jobs in memory (cached)
[2026-01-31T23:46:36.763Z] [BOT] ✅ Loaded V2 database: 1536 jobs
💾 DISK STATE: 1536 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1537
[2026-01-31T23:46:36.769Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:36.769Z] [BOT] 💾 AFTER MERGE: 1537 jobs (merged disk + memory)
[2026-01-31T23:46:36.771Z] [BOT] ✅ No jobs to archive (all 1537 jobs within 7-day window)
[2026-01-31T23:46:36.863Z] [BOT] 💾 Saved posted_jobs.json: 1537 active jobs
[2026-01-31T23:46:36.863Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:41.363Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T23:46:41.364Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_528075e0..." not found, but found as SHA256 "79563022c538321c"
⏭️  Skipping duplicate: JID_afb94111 (posted within 7 days)
[2026-01-31T23:46:41.364Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_528075e0..." not found, but found as SHA256 "974e735fac9ec20c"
[2026-01-31T23:46:41.364Z] [BOT] ⏭️  Skipping duplicate: JID_4c8baee9 (posted within 7 days)
[2026-01-31T23:46:41.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6931ff2c..." not found, but found as SHA256 "4c376c753b08621b"
[2026-01-31T23:46:41.365Z] [BOT] ⏭️  Skipping duplicate: JID_2910a3c9-radiance_external-JID_ebfdace6-engineer_hr101852 (posted within 7 days)
[2026-01-31T23:46:41.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_706371fa..." not found, but found as SHA256 "9b4a794c67a8a950"
[2026-01-31T23:46:41.365Z] [BOT] ⏭️  Skipping duplicate: JID_6fd8f3b4 (posted within 7 days)
[2026-01-31T23:46:41.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_052d497a..." not found, but found as SHA256 "fdc59f4d78d5fe94"
[2026-01-31T23:46:41.366Z] [BOT] ⏭️  Skipping duplicate: JID_5350139e-rheumatology_rq4038981 (posted within 7 days)
[2026-01-31T23:46:41.366Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba97ddb0..." not found, but found as SHA256 "61374c92437e3f45"
⏭️  Skipping duplicate: JID_d46d4f50 (posted within 7 days)
[2026-01-31T23:46:41.366Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6db1d13c..." not found, but found as SHA256 "106ae8ec259f2891"
⏭️  Skipping duplicate: JID_8961d017 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6e9ed1f3..." not found, but found as SHA256 "ca8213d91a563ba9"
⏭️  Skipping duplicate: JID_30015f1e-engineer_jr13105-3 (posted within 7 days)
[2026-01-31T23:46:41.366Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c1ed441..." not found, but found as SHA256 "ba70dd2ab3f682ae"
[2026-01-31T23:46:41.367Z] [BOT] ⏭️  Skipping duplicate: JID_3f8d080c (posted within 7 days)
[2026-01-31T23:46:41.367Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6b26a918..." not found, but found as SHA256 "b50701287e553c19"
⏭️  Skipping duplicate: JID_d273d401-_req-2025-13419 (posted within 7 days)
[2026-01-31T23:46:41.483Z] [BOT] ✅ Loaded pending queue: 2946 total (1380 pending, 49 enriched, 1517 posted)
[2026-01-31T23:46:41.656Z] [BOT] ✅ Saved pending queue: 2946 total (1380 pending, 39 enriched, 1527 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T23:46:41.656Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T23:46:41.743Z] [BOT] 📂 Loaded 11608 existing routing entries
[2026-01-31T23:46:41.890Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T23:46:41.891Z] [BOT] New entries: 10
   Total entries: 11618
   Timestamp: 2026-01-31T23:46:41.844Z
[2026-01-31T23:46:41.891Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 20
   Successful: 11
   Failed: 0
   Skipped: 9
[2026-01-31T23:46:41.891Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T23:46:41.891Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🏠・JID_ead674af: 1 posts
[2026-01-31T23:46:41.891Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[2026-01-31T23:46:41.892Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T23:46:41.892Z] [BOT] 💾 BEFORE MERGE: 1537 jobs in memory (cached)
[2026-01-31T23:46:41.921Z] [BOT] ✅ Loaded V2 database: 1537 jobs
💾 DISK STATE: 1537 jobs on disk
[2026-01-31T23:46:41.921Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1537
[2026-01-31T23:46:41.926Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:46:41.926Z] [BOT] 💾 AFTER MERGE: 1537 jobs (merged disk + memory)
[2026-01-31T23:46:41.927Z] [BOT] ✅ No jobs to archive (all 1537 jobs within 7-day window)
[2026-01-31T23:46:42.007Z] [BOT] 💾 Saved posted_jobs.json: 1537 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:46:42.007Z] [BOT] ✅ Database saved successfully
[2026-01-31T23:46:44.041Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2745) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*