# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T11:33:06.985Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T11:32:34.499Z] ========================================
[2026-01-30T11:32:34.501Z] Discord Bot Execution Log
[2026-01-30T11:32:34.501Z] Environment: GitHub Actions
[2026-01-30T11:32:34.501Z] Node Version: v20.20.0
[2026-01-30T11:32:34.502Z] ========================================
[2026-01-30T11:32:34.502Z] Environment Variables Check:
[2026-01-30T11:32:34.502Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T11:32:34.502Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.502Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T11:32:34.502Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T11:32:34.502Z] 
Multi-Channel Configuration:
[2026-01-30T11:32:34.502Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.502Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.502Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.502Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.503Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.503Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.503Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.503Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.503Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T11:32:34.503Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T11:32:34.503Z] 
Data Files Check:
[2026-01-30T11:32:34.504Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T11:32:34.519Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2691175 bytes)
[2026-01-30T11:32:34.519Z] 
========================================
[2026-01-30T11:32:34.519Z] Starting Enhanced Discord Bot...
[2026-01-30T11:32:34.519Z] ========================================
[2026-01-30T11:32:35.074Z] [BOT] ✅ Loaded V2 database: 409 jobs
[2026-01-30T11:32:35.603Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T11:32:35.603Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T11:32:35.603Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T11:32:35.718Z] [BOT] ✅ Loaded pending queue: 2919 total (2489 pending, 50 enriched, 380 posted)
[2026-01-30T11:32:35.718Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T11:32:35.719Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T11:32:35.719Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T11:32:35.719Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T11:32:35.719Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T11:32:35.719Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T11:32:35.720Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T11:32:35.720Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T11:32:35.720Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-30T11:32:35.720Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T11:32:35.720Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T11:32:35.720Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T11:32:35.721Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-30T11:32:35.721Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T11:32:35.721Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T11:32:35.721Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T11:32:35.721Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T11:32:35.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T11:32:35.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T11:32:35.722Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-30T11:32:35.722Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T11:32:35.723Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T11:32:35.726Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T11:32:35.727Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-01-30T11:32:35.727Z] [BOT] 🚫 Skipping blacklisted job: Major Account Manager at datadog
[2026-01-30T11:32:35.834Z] [BOT] ✅ Loaded pending queue: 2919 total (2489 pending, 50 enriched, 380 posted)
[2026-01-30T11:32:36.005Z] [BOT] ✅ Saved pending queue: 2917 total (2489 pending, 48 enriched, 380 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-30T11:32:36.006Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T11:32:36.007Z] [BOT] 📋 After multi-location grouping: 26 unique jobs to post
[2026-01-30T11:32:36.007Z] [BOT] (8 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Strategic Account Executive (SLED) @ datadog: remote, boston, massachusetts, usa; new york, new york, usa
[2026-01-30T11:32:36.007Z] [BOT] - Strategic Account Executive @ datadog: remote, san francisco, california, usa, new york, new york, usa, boston, massachusetts, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T11:32:36.012Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T11:32:36.013Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-30T11:32:36.013Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T11:32:36.032Z] [BOT ERROR] (node:2752) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T11:32:36.253Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-01-30T11:32:36.253Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-30T11:32:36.254Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-30T11:32:36.254Z] [BOT] 💾 BEFORE MERGE: 410 jobs in memory (cached)
[2026-01-30T11:32:36.265Z] [BOT] ✅ Loaded V2 database: 409 jobs
[2026-01-30T11:32:36.265Z] [BOT] 💾 DISK STATE: 409 jobs on disk
[2026-01-30T11:32:36.265Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=410
[2026-01-30T11:32:36.266Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:32:36.266Z] [BOT] 💾 AFTER MERGE: 410 jobs (merged disk + memory)
[2026-01-30T11:32:36.267Z] [BOT] ✅ No jobs to archive (all 410 jobs within 7-day window)
[2026-01-30T11:32:36.298Z] [BOT] 💾 Saved posted_jobs.json: 410 active jobs
[2026-01-30T11:32:36.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:37.799Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State (Southeast)" @ verkada
[2026-01-30T11:32:37.800Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T11:32:38.077Z] [BOT] ✅ Posted message: Enterprise Sales Account Executive,  State (Southeast) @ verkada in #💰・finance-jobs
[2026-01-30T11:32:38.077Z] [BOT] ✅ Industry: Enterprise Sales Account Executive,  State (Southeast) @ verkada
[2026-01-30T11:32:38.077Z] [BOT] 💾 Added channel posting: Enterprise Sales Account Executive,  State (Southeast) @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 411 jobs in memory (cached)
[2026-01-30T11:32:38.086Z] [BOT] ✅ Loaded V2 database: 410 jobs
💾 DISK STATE: 410 jobs on disk
[2026-01-30T11:32:38.086Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=411
[2026-01-30T11:32:38.087Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:32:38.087Z] [BOT] 💾 AFTER MERGE: 411 jobs (merged disk + memory)
[2026-01-30T11:32:38.087Z] [BOT] ✅ No jobs to archive (all 411 jobs within 7-day window)
[2026-01-30T11:32:38.115Z] [BOT] 💾 Saved posted_jobs.json: 411 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:42.617Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T11:32:42.617Z] [BOT] 📍 [ROUTING] "Software Engineer, Ads" @ discord
[2026-01-30T11:32:42.618Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:32:42.961Z] [BOT] ✅ Posted message: Software Engineer, Ads @ discord in #💻・tech-jobs
  ✅ Industry: Software Engineer, Ads @ discord
[2026-01-30T11:32:42.962Z] [BOT] 💾 Added channel posting: Software Engineer, Ads @ discord → category channel (1 total channels)
💾 BEFORE MERGE: 412 jobs in memory (cached)
[2026-01-30T11:32:42.970Z] [BOT] ✅ Loaded V2 database: 411 jobs
💾 DISK STATE: 411 jobs on disk
[2026-01-30T11:32:42.970Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=412
[2026-01-30T11:32:42.971Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 412 jobs (merged disk + memory)
[2026-01-30T11:32:42.971Z] [BOT] ✅ No jobs to archive (all 412 jobs within 7-day window)
[2026-01-30T11:32:42.996Z] [BOT] 💾 Saved posted_jobs.json: 412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:44.496Z] [BOT] 📍 [ROUTING] "Forward-Deployed Engineer " @ vercel
[2026-01-30T11:32:44.497Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:32:44.760Z] [BOT] ✅ Posted message: Forward-Deployed Engineer  @ vercel in #💻・tech-jobs
  ✅ Industry: Forward-Deployed Engineer  @ vercel
[2026-01-30T11:32:44.760Z] [BOT] 💾 Added channel posting: Forward-Deployed Engineer  @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 413 jobs in memory (cached)
[2026-01-30T11:32:44.775Z] [BOT] ✅ Loaded V2 database: 412 jobs
[2026-01-30T11:32:44.775Z] [BOT] 💾 DISK STATE: 412 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=413
[2026-01-30T11:32:44.776Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:32:44.776Z] [BOT] 💾 AFTER MERGE: 413 jobs (merged disk + memory)
[2026-01-30T11:32:44.777Z] [BOT] ✅ No jobs to archive (all 413 jobs within 7-day window)
[2026-01-30T11:32:44.811Z] [BOT] 💾 Saved posted_jobs.json: 413 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:46.313Z] [BOT] 📍 [ROUTING] "Analyst - Merchant Data Platform" @ ORG_a725bda1
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:32:46.490Z] [BOT] ✅ Posted message: Analyst - Merchant Data Platform @ ORG_a725bda1 in #💻・tech-jobs
  ✅ Industry: Analyst - Merchant Data Platform @ ORG_a725bda1
[2026-01-30T11:32:46.490Z] [BOT] 💾 Added channel posting: Analyst - Merchant Data Platform @ ORG_a725bda1 → category channel (1 total channels)
[2026-01-30T11:32:46.491Z] [BOT] 💾 BEFORE MERGE: 414 jobs in memory (cached)
[2026-01-30T11:32:46.500Z] [BOT] ✅ Loaded V2 database: 413 jobs
💾 DISK STATE: 413 jobs on disk
[2026-01-30T11:32:46.500Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=414
[2026-01-30T11:32:46.501Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 414 jobs (merged disk + memory)
[2026-01-30T11:32:46.501Z] [BOT] ✅ No jobs to archive (all 414 jobs within 7-day window)
[2026-01-30T11:32:46.532Z] [BOT] 💾 Saved posted_jobs.json: 414 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:48.034Z] [BOT] 📍 [ROUTING] "Research Assistant - Retirement Security Project - Economic Studies" @ ORG_b344d80e Brookings Institution
   Category: TECH (matched: "security")
[2026-01-30T11:32:48.034Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:32:48.390Z] [BOT] ✅ Posted message: Research Assistant - Retirement Security Project - Economic Studies @ ORG_b344d80e Brookings Institution in #💻・tech-jobs
  ✅ Industry: Research Assistant - Retirement Security Project - Economic Studies @ ORG_b344d80e Brookings Institution
[2026-01-30T11:32:48.390Z] [BOT] 💾 Added channel posting: Research Assistant - Retirement Security Project - Economic Studies @ ORG_b344d80e Brookings Institution → category channel (1 total channels)
💾 BEFORE MERGE: 415 jobs in memory (cached)
[2026-01-30T11:32:48.401Z] [BOT] ✅ Loaded V2 database: 414 jobs
💾 DISK STATE: 414 jobs on disk
[2026-01-30T11:32:48.401Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=415
[2026-01-30T11:32:48.402Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:32:48.402Z] [BOT] 💾 AFTER MERGE: 415 jobs (merged disk + memory)
[2026-01-30T11:32:48.403Z] [BOT] ✅ No jobs to archive (all 415 jobs within 7-day window)
[2026-01-30T11:32:48.429Z] [BOT] 💾 Saved posted_jobs.json: 415 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:49.931Z] [BOT] 📍 [ROUTING] "Commercial Account Executive - LATAM (Spanish Speaking) - Boston" @ datadog
[2026-01-30T11:32:49.931Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:32:50.236Z] [BOT] ✅ Posted message: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog in #💻・tech-jobs
[2026-01-30T11:32:50.236Z] [BOT] ✅ Industry: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog
[2026-01-30T11:32:50.236Z] [BOT] 💾 Added channel posting: Commercial Account Executive - LATAM (Spanish Speaking) - Boston @ datadog → category channel (1 total channels)
[2026-01-30T11:32:50.236Z] [BOT] 💾 BEFORE MERGE: 416 jobs in memory (cached)
[2026-01-30T11:32:50.245Z] [BOT] ✅ Loaded V2 database: 415 jobs
💾 DISK STATE: 415 jobs on disk
[2026-01-30T11:32:50.245Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=416
[2026-01-30T11:32:50.246Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:32:50.246Z] [BOT] 💾 AFTER MERGE: 416 jobs (merged disk + memory)
[2026-01-30T11:32:50.246Z] [BOT] ✅ No jobs to archive (all 416 jobs within 7-day window)
[2026-01-30T11:32:50.273Z] [BOT] 💾 Saved posted_jobs.json: 416 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:51.775Z] [BOT] 📍 [ROUTING] "Data Verification/Acquisition Technician 1" @ ORG_f7a2cae4
[2026-01-30T11:32:51.776Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:32:52.115Z] [BOT] ✅ Posted message: Data Verification/Acquisition Technician 1 @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-30T11:32:52.115Z] [BOT] ✅ Industry: Data Verification/Acquisition Technician 1 @ ORG_f7a2cae4
[2026-01-30T11:32:52.115Z] [BOT] 💾 Added channel posting: Data Verification/Acquisition Technician 1 @ ORG_f7a2cae4 → category channel (1 total channels)
[2026-01-30T11:32:52.115Z] [BOT] 💾 BEFORE MERGE: 417 jobs in memory (cached)
[2026-01-30T11:32:52.124Z] [BOT] ✅ Loaded V2 database: 416 jobs
💾 DISK STATE: 416 jobs on disk
[2026-01-30T11:32:52.124Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=417
[2026-01-30T11:32:52.125Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:32:52.125Z] [BOT] 💾 AFTER MERGE: 417 jobs (merged disk + memory)
[2026-01-30T11:32:52.127Z] [BOT] ✅ No jobs to archive (all 417 jobs within 7-day window)
[2026-01-30T11:32:52.152Z] [BOT] 💾 Saved posted_jobs.json: 417 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:56.654Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T11:32:56.655Z] [BOT] 📍 [ROUTING] "GDELT Consultant" @ ORG_6c847a27 Power
   Category: AI (matched: "machine learning")
[2026-01-30T11:32:56.655Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T11:32:56.897Z] [BOT] ✅ Posted message: GDELT Consultant @ ORG_6c847a27 Power in #🤖・ai-jobs
  ✅ Industry: GDELT Consultant @ ORG_6c847a27 Power
[2026-01-30T11:32:56.898Z] [BOT] 💾 Added channel posting: GDELT Consultant @ ORG_6c847a27 Power → category channel (1 total channels)
[2026-01-30T11:32:56.898Z] [BOT] 💾 BEFORE MERGE: 418 jobs in memory (cached)
[2026-01-30T11:32:56.906Z] [BOT] ✅ Loaded V2 database: 417 jobs
💾 DISK STATE: 417 jobs on disk
[2026-01-30T11:32:56.906Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=418
[2026-01-30T11:32:56.908Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 418 jobs (merged disk + memory)
[2026-01-30T11:32:56.908Z] [BOT] ✅ No jobs to archive (all 418 jobs within 7-day window)
[2026-01-30T11:32:56.934Z] [BOT] 💾 Saved posted_jobs.json: 418 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:32:58.436Z] [BOT] 📍 [ROUTING] "Research Scientist – PhD New College Grad 2026 - Human‑AI Perception and Interaction Research" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T11:32:58.436Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T11:32:58.685Z] [BOT] ✅ Posted message: Research Scientist – PhD New College Grad 2026 - Human‑AI Perception and Interaction Research @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Research Scientist – PhD New College Grad 2026 - Human‑AI Perception and Interaction Research @ ORG_0890f456
[2026-01-30T11:32:58.685Z] [BOT] 💾 Added channel posting: Research Scientist – PhD New College Grad 2026 - Human‑AI Perception and Interaction Research @ ORG_0890f456 → category channel (1 total channels)
[2026-01-30T11:32:58.685Z] [BOT] 💾 BEFORE MERGE: 419 jobs in memory (cached)
[2026-01-30T11:32:58.694Z] [BOT] ✅ Loaded V2 database: 418 jobs
💾 DISK STATE: 418 jobs on disk
[2026-01-30T11:32:58.694Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=419
[2026-01-30T11:32:58.695Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:32:58.695Z] [BOT] 💾 AFTER MERGE: 419 jobs (merged disk + memory)
[2026-01-30T11:32:58.696Z] [BOT] ✅ No jobs to archive (all 419 jobs within 7-day window)
[2026-01-30T11:32:58.722Z] [BOT] 💾 Saved posted_jobs.json: 419 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:33:03.225Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T11:33:03.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "dddb14a43a41898f"
⏭️  Skipping duplicate: JID_38ddeff2 (posted within 7 days)
[2026-01-30T11:33:03.226Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "533135737930f35a"
⏭️  Skipping duplicate: JID_9a844d49 (posted within 7 days)
[2026-01-30T11:33:03.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_de2e5974..." not found, but found as SHA256 "22885ef3f8782a1f"
⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
[2026-01-30T11:33:03.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "59d7c169b091e9b0"
[2026-01-30T11:33:03.227Z] [BOT] ⏭️  Skipping duplicate: JID_7ecadf6f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0470a88f..." not found, but found as SHA256 "426eb9a75586781c"
⏭️  Skipping duplicate: JID_169a4967 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_69c3367d..." not found, but found as SHA256 "0c53ef0bd2b06a27"
⏭️  Skipping duplicate: JID_0b44b9f0 (posted within 7 days)
[2026-01-30T11:33:03.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aabfb282..." not found, but found as SHA256 "8b64c49f78aff0bb"
⏭️  Skipping duplicate: JID_aabfb282 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8147c65c-amentum_..." not found, but found as SHA256 "8dfb21f9bc618248"
[2026-01-30T11:33:03.227Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_8879313c-i_r0151710 (posted within 7 days)
[2026-01-30T11:33:03.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64df404c..." not found, but found as SHA256 "71c19e129dbc4047"
⏭️  Skipping duplicate: JID_cd689b34 (posted within 7 days)
[2026-01-30T11:33:03.228Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "f384f1247fb412d0"
⏭️  Skipping duplicate: JID_99afbec0-2026_jr2011804-1 (posted within 7 days)
[2026-01-30T11:33:03.333Z] [BOT] ✅ Loaded pending queue: 2917 total (2489 pending, 48 enriched, 380 posted)
[2026-01-30T11:33:03.517Z] [BOT] ✅ Saved pending queue: 2917 total (2489 pending, 38 enriched, 390 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T11:33:03.518Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T11:33:03.601Z] [BOT] 📂 Loaded 10471 existing routing entries
[2026-01-30T11:33:03.737Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T11:33:03.737Z] [BOT] Total entries: 10481
   Timestamp: 2026-01-30T11:33:03.694Z
[2026-01-30T11:33:03.738Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T11:33:03.738Z] [BOT] Total attempts: 26
   Successful: 10
   Failed: 0
   Skipped: 16
[2026-01-30T11:33:03.739Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T11:33:03.739Z] [BOT] Total posts: 10
   Channels used: 3
   Top channels:
[2026-01-30T11:33:03.739Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #💰・finance-jobs: 2 posts
     3. #🤖・ai-jobs: 2 posts
[2026-01-30T11:33:03.739Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 419 jobs in memory (cached)
[2026-01-30T11:33:03.749Z] [BOT] ✅ Loaded V2 database: 419 jobs
💾 DISK STATE: 419 jobs on disk
[2026-01-30T11:33:03.749Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=419
[2026-01-30T11:33:03.750Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:33:03.750Z] [BOT] 💾 AFTER MERGE: 419 jobs (merged disk + memory)
[2026-01-30T11:33:03.750Z] [BOT] ✅ No jobs to archive (all 419 jobs within 7-day window)
[2026-01-30T11:33:03.776Z] [BOT] 💾 Saved posted_jobs.json: 419 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:33:03.776Z] [BOT] ✅ Database saved successfully
[2026-01-30T11:33:05.805Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2752) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*