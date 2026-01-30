# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T12:34:09.621Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T12:33:29.361Z] ========================================
[2026-01-30T12:33:29.363Z] Discord Bot Execution Log
[2026-01-30T12:33:29.363Z] Environment: GitHub Actions
[2026-01-30T12:33:29.363Z] Node Version: v20.20.0
[2026-01-30T12:33:29.363Z] ========================================
[2026-01-30T12:33:29.363Z] Environment Variables Check:
[2026-01-30T12:33:29.363Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T12:33:29.363Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.363Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T12:33:29.364Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T12:33:29.364Z] 
Multi-Channel Configuration:
[2026-01-30T12:33:29.364Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T12:33:29.364Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T12:33:29.365Z] 
Data Files Check:
[2026-01-30T12:33:29.366Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T12:33:29.382Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2905588 bytes)
[2026-01-30T12:33:29.382Z] 
========================================
[2026-01-30T12:33:29.382Z] Starting Enhanced Discord Bot...
[2026-01-30T12:33:29.382Z] ========================================
[2026-01-30T12:33:29.917Z] [BOT] ✅ Loaded V2 database: 449 jobs
[2026-01-30T12:33:30.431Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T12:33:30.432Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T12:33:30.432Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T12:33:30.548Z] [BOT] ✅ Loaded pending queue: 2920 total (2450 pending, 50 enriched, 420 posted)
[2026-01-30T12:33:30.548Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:33:30.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T12:33:30.549Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:33:30.549Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T12:33:30.550Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T12:33:30.550Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-30T12:33:30.550Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T12:33:30.550Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T12:33:30.550Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T12:33:30.550Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T12:33:30.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T12:33:30.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T12:33:30.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T12:33:30.551Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T12:33:30.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-30T12:33:30.551Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T12:33:30.551Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T12:33:30.552Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T12:33:30.552Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T12:33:30.552Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T12:33:30.558Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T12:33:30.558Z] [BOT] 🚫 Skipping blacklisted job: Director, Account Management at discord
[2026-01-30T12:33:30.558Z] [BOT] 🚫 Skipping blacklisted job: Director, People Business Partners at discord
🚫 Skipping blacklisted job: Engineering Manager, Ads Formats at discord
🚫 Skipping blacklisted job: Engineering Manager, Engagement at discord
🚫 Skipping blacklisted job: Finance Manager, Business Operations at discord
[2026-01-30T12:33:30.558Z] [BOT] 🚫 Skipping blacklisted job: Group Product Marketing Manager, Developer Commerce Solutions at discord
🚫 Skipping blacklisted job: Manager, Global Accounts Receivable at discord
[2026-01-30T12:33:30.558Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Core Product at discord
🚫 Skipping blacklisted job: Product Marketing Manager, Ads  at discord
[2026-01-30T12:33:30.558Z] [BOT] 🚫 Skipping blacklisted job: Rust/C++ Senior Software Engineer at discord
🚫 Skipping blacklisted job: Senior Director, Corporate Development at discord
[2026-01-30T12:33:30.663Z] [BOT] ✅ Loaded pending queue: 2920 total (2450 pending, 50 enriched, 420 posted)
[2026-01-30T12:33:30.843Z] [BOT] ✅ Saved pending queue: 2909 total (2450 pending, 39 enriched, 420 posted)
🗑️ Removed 11 blacklisted jobs from pending queue
[2026-01-30T12:33:30.843Z] [BOT] 📋 After blacklist filter: 25 jobs (11 blacklisted)
📋 After data quality filter: 25 jobs (0 invalid)
[2026-01-30T12:33:30.844Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-30T12:33:30.844Z] [BOT] (10 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Strategic Account Executive @ datadog: remote, new york, new york, usa, boston, massachusetts, usa, chicago, illinois, usa
   - Key Accounts Executive @ datadog: chicago, illinois, usa; dallas, texas, usa; san francisco, california, usa, boston, massachusetts, usa; new york, new york, usa
   - Enterprise Sales Executive (SLED) @ datadog: san francisco, california, usa, remote
[2026-01-30T12:33:30.844Z] [BOT] - Enterprise Sales Executive  @ datadog: new york, new york, usa, remote, boston, massachusetts, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T12:33:30.848Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-30T12:33:30.849Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
[2026-01-30T12:33:30.849Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:33:30.866Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T12:33:31.085Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #💻・tech-jobs
[2026-01-30T12:33:31.085Z] [BOT] ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-30T12:33:31.085Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → category channel (1 total channels)
[2026-01-30T12:33:31.086Z] [BOT] 💾 BEFORE MERGE: 450 jobs in memory (cached)
[2026-01-30T12:33:31.096Z] [BOT] ✅ Loaded V2 database: 449 jobs
[2026-01-30T12:33:31.096Z] [BOT] 💾 DISK STATE: 449 jobs on disk
[2026-01-30T12:33:31.096Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=450
[2026-01-30T12:33:31.097Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:31.098Z] [BOT] 💾 AFTER MERGE: 450 jobs (merged disk + memory)
[2026-01-30T12:33:31.098Z] [BOT] ✅ No jobs to archive (all 450 jobs within 7-day window)
[2026-01-30T12:33:31.130Z] [BOT] 💾 Saved posted_jobs.json: 450 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:32.830Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #🗽・JID_98d4f0de
[2026-01-30T12:33:32.830Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T12:33:32.830Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 450 jobs in memory (cached)
[2026-01-30T12:33:32.842Z] [BOT] ✅ Loaded V2 database: 450 jobs
[2026-01-30T12:33:32.842Z] [BOT] 💾 DISK STATE: 450 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=450
[2026-01-30T12:33:32.843Z] [BOT] 🔀 Deep merged: Strategic Account Executive (SLED) @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T12:33:32.843Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 450 jobs (merged disk + memory)
[2026-01-30T12:33:32.844Z] [BOT] ✅ No jobs to archive (all 450 jobs within 7-day window)
[2026-01-30T12:33:32.873Z] [BOT] 💾 Saved posted_jobs.json: 450 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:34.373Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:33:34.805Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
  ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T12:33:34.806Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 451 jobs in memory (cached)
[2026-01-30T12:33:34.814Z] [BOT] ✅ Loaded V2 database: 450 jobs
💾 DISK STATE: 450 jobs on disk
[2026-01-30T12:33:34.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=451
[2026-01-30T12:33:34.816Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:34.816Z] [BOT] 💾 AFTER MERGE: 451 jobs (merged disk + memory)
[2026-01-30T12:33:34.816Z] [BOT] ✅ No jobs to archive (all 451 jobs within 7-day window)
[2026-01-30T12:33:34.846Z] [BOT] 💾 Saved posted_jobs.json: 451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:36.685Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #🏠・JID_ead674af
[2026-01-30T12:33:36.685Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:33:36.686Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 451 jobs in memory (cached)
[2026-01-30T12:33:36.695Z] [BOT] ✅ Loaded V2 database: 451 jobs
[2026-01-30T12:33:36.695Z] [BOT] 💾 DISK STATE: 451 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=451
[2026-01-30T12:33:36.696Z] [BOT] 🔀 Deep merged: Strategic Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T12:33:36.696Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 451 jobs (merged disk + memory)
[2026-01-30T12:33:36.697Z] [BOT] ✅ No jobs to archive (all 451 jobs within 7-day window)
[2026-01-30T12:33:36.726Z] [BOT] 💾 Saved posted_jobs.json: 451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:38.227Z] [BOT] 📍 [ROUTING] "Software Engineer - Core Platform Test - Software Engineering" @ ORG_36b77757
   Category: TECH (matched: "software")
[2026-01-30T12:33:38.227Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:33:38.788Z] [BOT] ✅ Posted message: Software Engineer - Core Platform Test - Software Engineering @ ORG_36b77757 in #💻・tech-jobs
[2026-01-30T12:33:38.788Z] [BOT] ✅ Industry: Software Engineer - Core Platform Test - Software Engineering @ ORG_36b77757
[2026-01-30T12:33:38.788Z] [BOT] 💾 Added channel posting: Software Engineer - Core Platform Test - Software Engineering @ ORG_36b77757 → category channel (1 total channels)
💾 BEFORE MERGE: 452 jobs in memory (cached)
[2026-01-30T12:33:38.802Z] [BOT] ✅ Loaded V2 database: 451 jobs
💾 DISK STATE: 451 jobs on disk
[2026-01-30T12:33:38.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=452
[2026-01-30T12:33:38.803Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:38.803Z] [BOT] 💾 AFTER MERGE: 452 jobs (merged disk + memory)
[2026-01-30T12:33:38.804Z] [BOT] ✅ No jobs to archive (all 452 jobs within 7-day window)
[2026-01-30T12:33:38.834Z] [BOT] 💾 Saved posted_jobs.json: 452 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:40.336Z] [BOT] 📍 [ROUTING] "Survey Office Technician" @ NV5 Global
   Category: TECH (default)
[2026-01-30T12:33:40.336Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:33:40.485Z] [BOT] ✅ Posted message: Survey Office Technician @ NV5 Global in #💻・tech-jobs
  ✅ Industry: Survey Office Technician @ NV5 Global
[2026-01-30T12:33:40.485Z] [BOT] 💾 Added channel posting: Survey Office Technician @ NV5 Global → category channel (1 total channels)
[2026-01-30T12:33:40.485Z] [BOT] 💾 BEFORE MERGE: 453 jobs in memory (cached)
[2026-01-30T12:33:40.494Z] [BOT] ✅ Loaded V2 database: 452 jobs
💾 DISK STATE: 452 jobs on disk
[2026-01-30T12:33:40.495Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=453
[2026-01-30T12:33:40.496Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 453 jobs (merged disk + memory)
[2026-01-30T12:33:40.496Z] [BOT] ✅ No jobs to archive (all 453 jobs within 7-day window)
[2026-01-30T12:33:40.528Z] [BOT] 💾 Saved posted_jobs.json: 453 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:42.029Z] [BOT] 📍 [ROUTING] "Key Accounts Executive" @ datadog
[2026-01-30T12:33:42.029Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:33:42.220Z] [BOT] ✅ Posted message: Key Accounts Executive @ datadog in #💻・tech-jobs
[2026-01-30T12:33:42.220Z] [BOT] ✅ Industry: Key Accounts Executive @ datadog
[2026-01-30T12:33:42.220Z] [BOT] 💾 Added channel posting: Key Accounts Executive @ datadog → category channel (1 total channels)
[2026-01-30T12:33:42.220Z] [BOT] 💾 BEFORE MERGE: 454 jobs in memory (cached)
[2026-01-30T12:33:42.234Z] [BOT] ✅ Loaded V2 database: 453 jobs
💾 DISK STATE: 453 jobs on disk
[2026-01-30T12:33:42.234Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=454
[2026-01-30T12:33:42.235Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:42.235Z] [BOT] 💾 AFTER MERGE: 454 jobs (merged disk + memory)
[2026-01-30T12:33:42.236Z] [BOT] ✅ No jobs to archive (all 454 jobs within 7-day window)
[2026-01-30T12:33:42.266Z] [BOT] 💾 Saved posted_jobs.json: 454 active jobs
[2026-01-30T12:33:42.266Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:43.767Z] [BOT] 📍 [ROUTING] "GTM Engineer " @ vercel
[2026-01-30T12:33:43.767Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:33:43.916Z] [BOT] ✅ Posted message: GTM Engineer  @ vercel in #💻・tech-jobs
[2026-01-30T12:33:43.916Z] [BOT] ✅ Industry: GTM Engineer  @ vercel
[2026-01-30T12:33:43.916Z] [BOT] 💾 Added channel posting: GTM Engineer  @ vercel → category channel (1 total channels)
[2026-01-30T12:33:43.916Z] [BOT] 💾 BEFORE MERGE: 455 jobs in memory (cached)
[2026-01-30T12:33:43.925Z] [BOT] ✅ Loaded V2 database: 454 jobs
💾 DISK STATE: 454 jobs on disk
[2026-01-30T12:33:43.925Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=455
[2026-01-30T12:33:43.926Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:43.927Z] [BOT] 💾 AFTER MERGE: 455 jobs (merged disk + memory)
[2026-01-30T12:33:43.927Z] [BOT] ✅ No jobs to archive (all 455 jobs within 7-day window)
[2026-01-30T12:33:43.956Z] [BOT] 💾 Saved posted_jobs.json: 455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:45.457Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive (SLED)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:33:45.655Z] [BOT] ✅ Posted message: Enterprise Sales Executive (SLED) @ datadog in #💻・tech-jobs
  ✅ Industry: Enterprise Sales Executive (SLED) @ datadog
[2026-01-30T12:33:45.655Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive (SLED) @ datadog → category channel (1 total channels)
[2026-01-30T12:33:45.656Z] [BOT] 💾 BEFORE MERGE: 456 jobs in memory (cached)
[2026-01-30T12:33:45.666Z] [BOT] ✅ Loaded V2 database: 455 jobs
💾 DISK STATE: 455 jobs on disk
[2026-01-30T12:33:45.666Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=456
[2026-01-30T12:33:45.667Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:45.667Z] [BOT] 💾 AFTER MERGE: 456 jobs (merged disk + memory)
[2026-01-30T12:33:45.668Z] [BOT] ✅ No jobs to archive (all 456 jobs within 7-day window)
[2026-01-30T12:33:45.696Z] [BOT] 💾 Saved posted_jobs.json: 456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:50.198Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T12:33:50.198Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_0baaf6f2 Bureau of Shipping
[2026-01-30T12:33:50.198Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T12:33:50.527Z] [BOT] ✅ Posted message: Data Scientist @ ORG_0baaf6f2 Bureau of Shipping in #📊・JID_fb739488
[2026-01-30T12:33:50.527Z] [BOT] ✅ Industry: Data Scientist @ ORG_0baaf6f2 Bureau of Shipping
[2026-01-30T12:33:50.527Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_0baaf6f2 Bureau of Shipping → category channel (1 total channels)
[2026-01-30T12:33:50.527Z] [BOT] 💾 BEFORE MERGE: 457 jobs in memory (cached)
[2026-01-30T12:33:50.537Z] [BOT] ✅ Loaded V2 database: 456 jobs
💾 DISK STATE: 456 jobs on disk
[2026-01-30T12:33:50.537Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=457
[2026-01-30T12:33:50.538Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:50.538Z] [BOT] 💾 AFTER MERGE: 457 jobs (merged disk + memory)
[2026-01-30T12:33:50.539Z] [BOT] ✅ No jobs to archive (all 457 jobs within 7-day window)
[2026-01-30T12:33:50.566Z] [BOT] 💾 Saved posted_jobs.json: 457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:55.067Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T12:33:55.068Z] [BOT] 📍 [ROUTING] "Head of Sales and GTM Operations" @ gusto
[2026-01-30T12:33:55.068Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T12:33:55.410Z] [BOT] ✅ Posted message: Head of Sales and GTM Operations @ gusto in #💰・finance-jobs
  ✅ Industry: Head of Sales and GTM Operations @ gusto
[2026-01-30T12:33:55.411Z] [BOT] 💾 Added channel posting: Head of Sales and GTM Operations @ gusto → category channel (1 total channels)
[2026-01-30T12:33:55.411Z] [BOT] 💾 BEFORE MERGE: 458 jobs in memory (cached)
[2026-01-30T12:33:55.426Z] [BOT] ✅ Loaded V2 database: 457 jobs
[2026-01-30T12:33:55.426Z] [BOT] 💾 DISK STATE: 457 jobs on disk
[2026-01-30T12:33:55.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=458
[2026-01-30T12:33:55.427Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:33:55.427Z] [BOT] 💾 AFTER MERGE: 458 jobs (merged disk + memory)
[2026-01-30T12:33:55.430Z] [BOT] ✅ No jobs to archive (all 458 jobs within 7-day window)
[2026-01-30T12:33:55.468Z] [BOT] 💾 Saved posted_jobs.json: 458 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:33:59.969Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T12:33:59.969Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Trust & Safety (New York City)" @ spotify
[2026-01-30T12:33:59.969Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T12:34:00.149Z] [BOT] ✅ Posted message: 2026 Summer Internship, Trust & Safety (New York City) @ spotify in #🤖・ai-jobs
[2026-01-30T12:34:00.149Z] [BOT] ✅ Industry: 2026 Summer Internship, Trust & Safety (New York City) @ spotify
[2026-01-30T12:34:00.150Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Trust & Safety (New York City) @ spotify → category channel (1 total channels)
[2026-01-30T12:34:00.150Z] [BOT] 💾 BEFORE MERGE: 459 jobs in memory (cached)
[2026-01-30T12:34:00.159Z] [BOT] ✅ Loaded V2 database: 458 jobs
💾 DISK STATE: 458 jobs on disk
[2026-01-30T12:34:00.159Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=459
[2026-01-30T12:34:00.160Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:34:00.161Z] [BOT] 💾 AFTER MERGE: 459 jobs (merged disk + memory)
[2026-01-30T12:34:00.161Z] [BOT] ✅ No jobs to archive (all 459 jobs within 7-day window)
[2026-01-30T12:34:00.195Z] [BOT] 💾 Saved posted_jobs.json: 459 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:34:01.843Z] [BOT] ✅ Posted message: 2026 Summer Internship, Trust & Safety (New York City) @ spotify in #🗽・JID_98d4f0de
[2026-01-30T12:34:01.843Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: 2026 Summer Internship, Trust & Safety (New York City) @ spotify → location channel (2 total channels)
[2026-01-30T12:34:01.843Z] [BOT] 💾 BEFORE MERGE: 459 jobs in memory (cached)
[2026-01-30T12:34:01.856Z] [BOT] ✅ Loaded V2 database: 459 jobs
💾 DISK STATE: 459 jobs on disk
[2026-01-30T12:34:01.856Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=459
[2026-01-30T12:34:01.857Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Trust & Safety (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-30T12:34:01.857Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 459 jobs (merged disk + memory)
[2026-01-30T12:34:01.858Z] [BOT] ✅ No jobs to archive (all 459 jobs within 7-day window)
[2026-01-30T12:34:01.893Z] [BOT] 💾 Saved posted_jobs.json: 459 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:34:06.392Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T12:34:06.393Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7eaa560a..." not found, but found as SHA256 "7b88f972a9896407"
⏭️  Skipping duplicate: JID_7eaa560a (posted within 7 days)
[2026-01-30T12:34:06.393Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_83f0f0de..." not found, but found as SHA256 "7e0b4af39e321d1e"
⏭️  Skipping duplicate: JID_83f0f0de (posted within 7 days)
[2026-01-30T12:34:06.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b4c36a9e..." not found, but found as SHA256 "1938481f79ba3bb3"
⏭️  Skipping duplicate: JID_d50efa33 (posted within 7 days)
[2026-01-30T12:34:06.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b4794bf..." not found, but found as SHA256 "2d5bf3b5c7211397"
[2026-01-30T12:34:06.394Z] [BOT] ⏭️  Skipping duplicate: JID_7b4794bf (posted within 7 days)
[2026-01-30T12:34:06.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_613501ca..." not found, but found as SHA256 "877d8a86a0ae71ae"
[2026-01-30T12:34:06.394Z] [BOT] ⏭️  Skipping duplicate: JID_0cbe1638-cx_1-job-3935 (posted within 7 days)
[2026-01-30T12:34:06.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-01-30T12:34:06.394Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_49af5813..." not found, but found as SHA256 "0de7e2ce6469ce6f"
[2026-01-30T12:34:06.394Z] [BOT] ⏭️  Skipping duplicate: JID_39085692 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_1b927f2b..." not found, but found as SHA256 "21f964bba9908c45"
⏭️  Skipping duplicate: JID_784b43db (posted within 7 days)
[2026-01-30T12:34:06.395Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d68bea47..." not found, but found as SHA256 "3cfd5849ee1fb676"
⏭️  Skipping duplicate: JID_e4199780 (posted within 7 days)
[2026-01-30T12:34:06.395Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da25f3c9..." not found, but found as SHA256 "4295898c179fe0ac"
⏭️  Skipping duplicate: JID_da25f3c9 (posted within 7 days)
[2026-01-30T12:34:06.497Z] [BOT] ✅ Loaded pending queue: 2909 total (2450 pending, 39 enriched, 420 posted)
[2026-01-30T12:34:06.675Z] [BOT] ✅ Saved pending queue: 2909 total (2450 pending, 29 enriched, 430 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T12:34:06.676Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T12:34:06.759Z] [BOT] 📂 Loaded 10511 existing routing entries
[2026-01-30T12:34:06.894Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T12:34:06.894Z] [BOT] New entries: 10
   Total entries: 10521
   Timestamp: 2026-01-30T12:34:06.850Z
[2026-01-30T12:34:06.894Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 38
[2026-01-30T12:34:06.895Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 25
[2026-01-30T12:34:06.895Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T12:34:06.895Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
[2026-01-30T12:34:06.895Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #🗽・JID_98d4f0de: 2 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #📊・JID_fb739488: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-30T12:34:06.895Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T12:34:06.895Z] [BOT] 💾 BEFORE MERGE: 459 jobs in memory (cached)
[2026-01-30T12:34:06.905Z] [BOT] ✅ Loaded V2 database: 459 jobs
[2026-01-30T12:34:06.906Z] [BOT] 💾 DISK STATE: 459 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=459
[2026-01-30T12:34:06.907Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:34:06.907Z] [BOT] 💾 AFTER MERGE: 459 jobs (merged disk + memory)
[2026-01-30T12:34:06.907Z] [BOT] ✅ No jobs to archive (all 459 jobs within 7-day window)
[2026-01-30T12:34:06.935Z] [BOT] 💾 Saved posted_jobs.json: 459 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:34:06.935Z] [BOT] ✅ Database saved successfully
[2026-01-30T12:34:08.965Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*