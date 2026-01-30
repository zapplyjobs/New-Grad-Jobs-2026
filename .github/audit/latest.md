# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T14:20:34.329Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T14:19:59.491Z] ========================================
[2026-01-30T14:19:59.493Z] Discord Bot Execution Log
[2026-01-30T14:19:59.493Z] Environment: GitHub Actions
[2026-01-30T14:19:59.493Z] Node Version: v20.20.0
[2026-01-30T14:19:59.493Z] ========================================
[2026-01-30T14:19:59.493Z] Environment Variables Check:
[2026-01-30T14:19:59.493Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T14:19:59.493Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.493Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T14:19:59.493Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T14:19:59.493Z] 
Multi-Channel Configuration:
[2026-01-30T14:19:59.493Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T14:19:59.494Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T14:19:59.494Z] 
Data Files Check:
[2026-01-30T14:19:59.495Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T14:19:59.512Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3076159 bytes)
[2026-01-30T14:19:59.512Z] 
========================================
[2026-01-30T14:19:59.512Z] Starting Enhanced Discord Bot...
[2026-01-30T14:19:59.512Z] ========================================
[2026-01-30T14:20:00.035Z] [BOT] ✅ Loaded V2 database: 477 jobs
[2026-01-30T14:20:00.741Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T14:20:00.742Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T14:20:00.742Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T14:20:00.862Z] [BOT] ✅ Loaded pending queue: 2911 total (2413 pending, 50 enriched, 448 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T14:20:00.862Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T14:20:00.863Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T14:20:00.863Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T14:20:00.863Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T14:20:00.863Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T14:20:00.863Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T14:20:00.863Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T14:20:00.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T14:20:00.864Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T14:20:00.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T14:20:00.865Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T14:20:00.868Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T14:20:00.869Z] [BOT] 🚫 Skipping blacklisted job: Customer Success Manager - Boston (Portuguese-speaking) at datadog
[2026-01-30T14:20:00.869Z] [BOT] 🚫 Skipping blacklisted job: Datadog for Startups Engineering Lead at datadog
🚫 Skipping blacklisted job: Datadog for Startups Lead at datadog
🚫 Skipping blacklisted job: Director, Pricing and Monetization at datadog
🚫 Skipping blacklisted job: Director, Sales Field Enablement - NYC at datadog
🚫 Skipping blacklisted job: Director, Security Sales Engineering at datadog
🚫 Skipping blacklisted job: Director, Technical Product Partnerships at datadog
🚫 Skipping blacklisted job: Enablement Operations Senior Associate at datadog
[2026-01-30T14:20:00.869Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager I - Cyber Threat Intelligence at datadog
🚫 Skipping blacklisted job: Enterprise Customer Success Manager - Denver at datadog
[2026-01-30T14:20:00.971Z] [BOT] ✅ Loaded pending queue: 2911 total (2413 pending, 50 enriched, 448 posted)
[2026-01-30T14:20:01.162Z] [BOT] ✅ Saved pending queue: 2901 total (2413 pending, 40 enriched, 448 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 26 jobs (10 blacklisted)
[2026-01-30T14:20:01.162Z] [BOT] 📋 After data quality filter: 26 jobs (0 invalid)
[2026-01-30T14:20:01.163Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-30T14:20:01.163Z] [BOT] (11 grouped as same job with different locations)
📍 5 jobs with multiple locations:
   - Strategic Account Executive @ datadog: boston, massachusetts, usa, remote, chicago, illinois, usa
[2026-01-30T14:20:01.163Z] [BOT] - Enterprise Sales Executive @ datadog: boston, massachusetts, usa, remote, washington, district of columbia, usa
   - Deal Desk Analyst @ datadog: boston, massachusetts, usa; new york, new york, usa, denver, colorado, usa
   - Enterprise Sales Executive (FED) @ datadog: washington, district of columbia, usa, remote
   - Enterprise Security Sales Specialist @ datadog: remote, chicago, illinois, usa; san francisco, california, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T14:20:01.168Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-30T14:20:01.168Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
[2026-01-30T14:20:01.168Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:01.187Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T14:20:01.420Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T14:20:01.420Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T14:20:01.421Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T14:20:01.421Z] [BOT] 💾 BEFORE MERGE: 478 jobs in memory (cached)
[2026-01-30T14:20:01.431Z] [BOT] ✅ Loaded V2 database: 477 jobs
💾 DISK STATE: 477 jobs on disk
[2026-01-30T14:20:01.432Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=478
[2026-01-30T14:20:01.433Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:01.433Z] [BOT] 💾 AFTER MERGE: 478 jobs (merged disk + memory)
[2026-01-30T14:20:01.434Z] [BOT] ✅ No jobs to archive (all 478 jobs within 7-day window)
[2026-01-30T14:20:01.469Z] [BOT] 💾 Saved posted_jobs.json: 478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:02.972Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
[2026-01-30T14:20:02.972Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:03.213Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #💻・tech-jobs
[2026-01-30T14:20:03.213Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-30T14:20:03.214Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
[2026-01-30T14:20:03.214Z] [BOT] 💾 BEFORE MERGE: 479 jobs in memory (cached)
[2026-01-30T14:20:03.227Z] [BOT] ✅ Loaded V2 database: 478 jobs
[2026-01-30T14:20:03.227Z] [BOT] 💾 DISK STATE: 478 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=479
[2026-01-30T14:20:03.228Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:03.228Z] [BOT] 💾 AFTER MERGE: 479 jobs (merged disk + memory)
[2026-01-30T14:20:03.228Z] [BOT] ✅ No jobs to archive (all 479 jobs within 7-day window)
[2026-01-30T14:20:03.259Z] [BOT] 💾 Saved posted_jobs.json: 479 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:04.760Z] [BOT] 📍 [ROUTING] "Area Vice President, Enterprise Security Sales" @ datadog
[2026-01-30T14:20:04.760Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:04.985Z] [BOT] ✅ Posted message: Area Vice President, Enterprise Security Sales @ datadog in #💻・tech-jobs
[2026-01-30T14:20:04.985Z] [BOT] ✅ Industry: Area Vice President, Enterprise Security Sales @ datadog
[2026-01-30T14:20:04.985Z] [BOT] 💾 Added channel posting: Area Vice President, Enterprise Security Sales @ datadog → category channel (1 total channels)
[2026-01-30T14:20:04.985Z] [BOT] 💾 BEFORE MERGE: 480 jobs in memory (cached)
[2026-01-30T14:20:04.995Z] [BOT] ✅ Loaded V2 database: 479 jobs
💾 DISK STATE: 479 jobs on disk
[2026-01-30T14:20:04.995Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=480
[2026-01-30T14:20:04.996Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 480 jobs (merged disk + memory)
[2026-01-30T14:20:04.996Z] [BOT] ✅ No jobs to archive (all 480 jobs within 7-day window)
[2026-01-30T14:20:05.028Z] [BOT] 💾 Saved posted_jobs.json: 480 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:06.530Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ datadog
[2026-01-30T14:20:06.530Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:06.821Z] [BOT] ✅ Posted message: Commercial Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T14:20:06.822Z] [BOT] ✅ Industry: Commercial Account Executive @ datadog
[2026-01-30T14:20:06.822Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T14:20:06.822Z] [BOT] 💾 BEFORE MERGE: 481 jobs in memory (cached)
[2026-01-30T14:20:06.832Z] [BOT] ✅ Loaded V2 database: 480 jobs
💾 DISK STATE: 480 jobs on disk
[2026-01-30T14:20:06.832Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=481
[2026-01-30T14:20:06.833Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:06.833Z] [BOT] 💾 AFTER MERGE: 481 jobs (merged disk + memory)
[2026-01-30T14:20:06.834Z] [BOT] ✅ No jobs to archive (all 481 jobs within 7-day window)
[2026-01-30T14:20:06.866Z] [BOT] 💾 Saved posted_jobs.json: 481 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:08.367Z] [BOT] 📍 [ROUTING] "Commercial Account Executive (Boston)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:08.704Z] [BOT] ✅ Posted message: Commercial Account Executive (Boston) @ datadog in #💻・tech-jobs
  ✅ Industry: Commercial Account Executive (Boston) @ datadog
[2026-01-30T14:20:08.704Z] [BOT] 💾 Added channel posting: Commercial Account Executive (Boston) @ datadog → category channel (1 total channels)
[2026-01-30T14:20:08.704Z] [BOT] 💾 BEFORE MERGE: 482 jobs in memory (cached)
[2026-01-30T14:20:08.714Z] [BOT] ✅ Loaded V2 database: 481 jobs
💾 DISK STATE: 481 jobs on disk
[2026-01-30T14:20:08.714Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=482
[2026-01-30T14:20:08.715Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:08.715Z] [BOT] 💾 AFTER MERGE: 482 jobs (merged disk + memory)
[2026-01-30T14:20:08.716Z] [BOT] ✅ No jobs to archive (all 482 jobs within 7-day window)
[2026-01-30T14:20:08.750Z] [BOT] 💾 Saved posted_jobs.json: 482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:10.250Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer (East)" @ datadog
[2026-01-30T14:20:10.251Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:10.546Z] [BOT] ✅ Posted message: Commercial Sales Engineer (East) @ datadog in #💻・tech-jobs
[2026-01-30T14:20:10.547Z] [BOT] ✅ Industry: Commercial Sales Engineer (East) @ datadog
[2026-01-30T14:20:10.547Z] [BOT] 💾 Added channel posting: Commercial Sales Engineer (East) @ datadog → category channel (1 total channels)
[2026-01-30T14:20:10.547Z] [BOT] 💾 BEFORE MERGE: 483 jobs in memory (cached)
[2026-01-30T14:20:10.562Z] [BOT] ✅ Loaded V2 database: 482 jobs
💾 DISK STATE: 482 jobs on disk
[2026-01-30T14:20:10.562Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=483
[2026-01-30T14:20:10.566Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:10.566Z] [BOT] 💾 AFTER MERGE: 483 jobs (merged disk + memory)
[2026-01-30T14:20:10.566Z] [BOT] ✅ No jobs to archive (all 483 jobs within 7-day window)
[2026-01-30T14:20:10.605Z] [BOT] 💾 Saved posted_jobs.json: 483 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:12.107Z] [BOT] 📍 [ROUTING] "Commercial Sales Engineer - NYC" @ datadog
[2026-01-30T14:20:12.108Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:12.354Z] [BOT] ✅ Posted message: Commercial Sales Engineer - NYC @ datadog in #💻・tech-jobs
  ✅ Industry: Commercial Sales Engineer - NYC @ datadog
[2026-01-30T14:20:12.354Z] [BOT] 💾 Added channel posting: Commercial Sales Engineer - NYC @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 484 jobs in memory (cached)
[2026-01-30T14:20:12.364Z] [BOT] ✅ Loaded V2 database: 483 jobs
💾 DISK STATE: 483 jobs on disk
[2026-01-30T14:20:12.364Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=484
[2026-01-30T14:20:12.365Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:12.365Z] [BOT] 💾 AFTER MERGE: 484 jobs (merged disk + memory)
[2026-01-30T14:20:12.366Z] [BOT] ✅ No jobs to archive (all 484 jobs within 7-day window)
[2026-01-30T14:20:12.401Z] [BOT] 💾 Saved posted_jobs.json: 484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:14.186Z] [BOT] ✅ Posted message: Commercial Sales Engineer - NYC @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T14:20:14.186Z] [BOT] 💾 Added channel posting: Commercial Sales Engineer - NYC @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 484 jobs in memory (cached)
[2026-01-30T14:20:14.200Z] [BOT] ✅ Loaded V2 database: 484 jobs
💾 DISK STATE: 484 jobs on disk
[2026-01-30T14:20:14.200Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=484
[2026-01-30T14:20:14.201Z] [BOT] 🔀 Deep merged: Commercial Sales Engineer - NYC @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T14:20:14.201Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 484 jobs (merged disk + memory)
[2026-01-30T14:20:14.202Z] [BOT] ✅ No jobs to archive (all 484 jobs within 7-day window)
[2026-01-30T14:20:14.235Z] [BOT] 💾 Saved posted_jobs.json: 484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:15.737Z] [BOT] 📍 [ROUTING] "Coordinator, Business Recruiting - Contract" @ datadog
[2026-01-30T14:20:15.737Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:20:16.126Z] [BOT] ✅ Posted message: Coordinator, Business Recruiting - Contract @ datadog in #💻・tech-jobs
  ✅ Industry: Coordinator, Business Recruiting - Contract @ datadog
[2026-01-30T14:20:16.126Z] [BOT] 💾 Added channel posting: Coordinator, Business Recruiting - Contract @ datadog → category channel (1 total channels)
[2026-01-30T14:20:16.126Z] [BOT] 💾 BEFORE MERGE: 485 jobs in memory (cached)
[2026-01-30T14:20:16.136Z] [BOT] ✅ Loaded V2 database: 484 jobs
💾 DISK STATE: 484 jobs on disk
[2026-01-30T14:20:16.136Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=485
[2026-01-30T14:20:16.137Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 485 jobs (merged disk + memory)
[2026-01-30T14:20:16.138Z] [BOT] ✅ No jobs to archive (all 485 jobs within 7-day window)
[2026-01-30T14:20:16.168Z] [BOT] 💾 Saved posted_jobs.json: 485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:17.883Z] [BOT] ✅ Posted message: Coordinator, Business Recruiting - Contract @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T14:20:17.883Z] [BOT] 💾 Added channel posting: Coordinator, Business Recruiting - Contract @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 485 jobs in memory (cached)
[2026-01-30T14:20:17.896Z] [BOT] ✅ Loaded V2 database: 485 jobs
💾 DISK STATE: 485 jobs on disk
[2026-01-30T14:20:17.896Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=485
[2026-01-30T14:20:17.897Z] [BOT] 🔀 Deep merged: Coordinator, Business Recruiting - Contract @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T14:20:17.897Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 485 jobs (merged disk + memory)
[2026-01-30T14:20:17.898Z] [BOT] ✅ No jobs to archive (all 485 jobs within 7-day window)
[2026-01-30T14:20:17.929Z] [BOT] 💾 Saved posted_jobs.json: 485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:22.431Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T14:20:22.432Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston (Portuguese-speaking)" @ datadog
[2026-01-30T14:20:22.432Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T14:20:24.492Z] [BOT] ✅ Posted message: Customer Success Associate - Boston (Portuguese-speaking) @ datadog in #💰・finance-jobs
[2026-01-30T14:20:24.493Z] [BOT] ✅ Industry: Customer Success Associate - Boston (Portuguese-speaking) @ datadog
[2026-01-30T14:20:24.493Z] [BOT] 💾 Added channel posting: Customer Success Associate - Boston (Portuguese-speaking) @ datadog → category channel (1 total channels)
[2026-01-30T14:20:24.493Z] [BOT] 💾 BEFORE MERGE: 486 jobs in memory (cached)
[2026-01-30T14:20:24.502Z] [BOT] ✅ Loaded V2 database: 485 jobs
💾 DISK STATE: 485 jobs on disk
[2026-01-30T14:20:24.503Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=486
[2026-01-30T14:20:24.504Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:24.504Z] [BOT] 💾 AFTER MERGE: 486 jobs (merged disk + memory)
[2026-01-30T14:20:24.504Z] [BOT] ✅ No jobs to archive (all 486 jobs within 7-day window)
[2026-01-30T14:20:24.535Z] [BOT] 💾 Saved posted_jobs.json: 486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:26.037Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston (Spanish-speaking)" @ datadog
[2026-01-30T14:20:26.037Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T14:20:26.371Z] [BOT] ✅ Posted message: Customer Success Associate - Boston (Spanish-speaking) @ datadog in #💰・finance-jobs
[2026-01-30T14:20:26.371Z] [BOT] ✅ Industry: Customer Success Associate - Boston (Spanish-speaking) @ datadog
[2026-01-30T14:20:26.371Z] [BOT] 💾 Added channel posting: Customer Success Associate - Boston (Spanish-speaking) @ datadog → category channel (1 total channels)
[2026-01-30T14:20:26.371Z] [BOT] 💾 BEFORE MERGE: 487 jobs in memory (cached)
[2026-01-30T14:20:26.384Z] [BOT] ✅ Loaded V2 database: 486 jobs
💾 DISK STATE: 486 jobs on disk
[2026-01-30T14:20:26.384Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=487
[2026-01-30T14:20:26.385Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:26.385Z] [BOT] 💾 AFTER MERGE: 487 jobs (merged disk + memory)
[2026-01-30T14:20:26.386Z] [BOT] ✅ No jobs to archive (all 487 jobs within 7-day window)
[2026-01-30T14:20:26.415Z] [BOT] 💾 Saved posted_jobs.json: 487 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:30.918Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T14:20:30.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c891e8e4..." not found, but found as SHA256 "01863384d28e6fa6"
[2026-01-30T14:20:30.919Z] [BOT] ⏭️  Skipping duplicate: JID_c891e8e4 (posted within 7 days)
[2026-01-30T14:20:30.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4a5cf546..." not found, but found as SHA256 "6c6b25aaab6fabda"
⏭️  Skipping duplicate: JID_4a5cf546 (posted within 7 days)
[2026-01-30T14:20:30.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8df93fb6..." not found, but found as SHA256 "0d2e438c98f88d80"
⏭️  Skipping duplicate: JID_8df93fb6 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_05c70ebf..." not found, but found as SHA256 "e550c7a98f78d42d"
[2026-01-30T14:20:30.919Z] [BOT] ⏭️  Skipping duplicate: JID_05c70ebf (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_658f6006..." not found, but found as SHA256 "40f0e380fefb741a"
[2026-01-30T14:20:30.919Z] [BOT] ⏭️  Skipping duplicate: JID_658f6006 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2cfa1f86..." not found, but found as SHA256 "e1d729e3f37a87b4"
[2026-01-30T14:20:30.920Z] [BOT] ⏭️  Skipping duplicate: JID_2cfa1f86 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_50a40467..." not found, but found as SHA256 "13caab15a9bc0830"
[2026-01-30T14:20:30.920Z] [BOT] ⏭️  Skipping duplicate: JID_50a40467 (posted within 7 days)
[2026-01-30T14:20:30.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_304f6b44..." not found, but found as SHA256 "790a57ab96f8532a"
[2026-01-30T14:20:30.920Z] [BOT] ⏭️  Skipping duplicate: JID_304f6b44 (posted within 7 days)
[2026-01-30T14:20:30.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_61aeb04f..." not found, but found as SHA256 "2b9be70de8d5269b"
⏭️  Skipping duplicate: JID_61aeb04f (posted within 7 days)
[2026-01-30T14:20:30.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fdd2a894..." not found, but found as SHA256 "b902b7ff503a1d34"
⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-30T14:20:31.022Z] [BOT] ✅ Loaded pending queue: 2901 total (2413 pending, 40 enriched, 448 posted)
[2026-01-30T14:20:31.198Z] [BOT] ✅ Saved pending queue: 2901 total (2413 pending, 30 enriched, 458 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T14:20:31.280Z] [BOT] 📂 Loaded 10539 existing routing entries
[2026-01-30T14:20:31.416Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T14:20:31.416Z] [BOT] New entries: 10
   Total entries: 10549
   Timestamp: 2026-01-30T14:20:31.373Z
[2026-01-30T14:20:31.417Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T14:20:31.417Z] [BOT] Total attempts: 36
   Successful: 12
   Failed: 0
   Skipped: 24
[2026-01-30T14:20:31.417Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T14:20:31.417Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🗽・JID_98d4f0de: 2 posts
[2026-01-30T14:20:31.417Z] [BOT] 3. #💰・finance-jobs: 2 posts
[2026-01-30T14:20:31.418Z] [BOT] [STATS] Channel stats saved
[2026-01-30T14:20:31.418Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 487 jobs in memory (cached)
[2026-01-30T14:20:31.429Z] [BOT] ✅ Loaded V2 database: 487 jobs
[2026-01-30T14:20:31.429Z] [BOT] 💾 DISK STATE: 487 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=487
[2026-01-30T14:20:31.430Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:20:31.430Z] [BOT] 💾 AFTER MERGE: 487 jobs (merged disk + memory)
[2026-01-30T14:20:31.431Z] [BOT] ✅ No jobs to archive (all 487 jobs within 7-day window)
[2026-01-30T14:20:31.460Z] [BOT] 💾 Saved posted_jobs.json: 487 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:20:31.460Z] [BOT] ✅ Database saved successfully
[2026-01-30T14:20:33.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*