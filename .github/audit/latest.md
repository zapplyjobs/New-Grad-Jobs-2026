# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T15:09:28.300Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T15:08:48.697Z] ========================================
[2026-01-30T15:08:48.698Z] Discord Bot Execution Log
[2026-01-30T15:08:48.698Z] Environment: GitHub Actions
[2026-01-30T15:08:48.699Z] Node Version: v20.20.0
[2026-01-30T15:08:48.699Z] ========================================
[2026-01-30T15:08:48.699Z] Environment Variables Check:
[2026-01-30T15:08:48.699Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T15:08:48.699Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.699Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T15:08:48.699Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T15:08:48.699Z] 
Multi-Channel Configuration:
[2026-01-30T15:08:48.699Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.699Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T15:08:48.700Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T15:08:48.700Z] 
Data Files Check:
[2026-01-30T15:08:48.701Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T15:08:48.717Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3138076 bytes)
[2026-01-30T15:08:48.717Z] 
========================================
[2026-01-30T15:08:48.717Z] Starting Enhanced Discord Bot...
[2026-01-30T15:08:48.718Z] ========================================
[2026-01-30T15:08:49.249Z] [BOT] ✅ Loaded V2 database: 487 jobs
[2026-01-30T15:08:49.693Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T15:08:49.694Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T15:08:49.694Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T15:08:49.800Z] [BOT] ✅ Loaded pending queue: 2913 total (2405 pending, 50 enriched, 458 posted)
[2026-01-30T15:08:49.801Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T15:08:49.801Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T15:08:49.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T15:08:49.802Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T15:08:49.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T15:08:49.802Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T15:08:49.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T15:08:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T15:08:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T15:08:49.803Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T15:08:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-30T15:08:49.803Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T15:08:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T15:08:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T15:08:49.803Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T15:08:49.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T15:08:49.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-30T15:08:49.804Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-30T15:08:49.804Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-30T15:08:49.804Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T15:08:49.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T15:08:49.810Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T15:08:49.810Z] [BOT] 🚫 Skipping blacklisted job: Field Marketing Manager (LATAM South) at datadog
[2026-01-30T15:08:49.810Z] [BOT] 🚫 Skipping blacklisted job: Global Safety & Security Senior Manager - NYC at datadog
🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - AMER Commercial & Mid Market at datadog
🚫 Skipping blacklisted job: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
🚫 Skipping blacklisted job: Leadership Training Manager at datadog
[2026-01-30T15:08:49.810Z] [BOT] 🚫 Skipping blacklisted job: Lead UX Designer - New York at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Account Management - Denver at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Account Management - New York at datadog
🚫 Skipping blacklisted job: Manager 1, Technical Escalations Engineering - US-East at datadog
🚫 Skipping blacklisted job: Manager 2, Premier Support Engineering -  Boston at datadog
🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - East) at datadog
[2026-01-30T15:08:49.914Z] [BOT] ✅ Loaded pending queue: 2913 total (2405 pending, 50 enriched, 458 posted)
[2026-01-30T15:08:50.077Z] [BOT] ✅ Saved pending queue: 2902 total (2405 pending, 39 enriched, 458 posted)
🗑️ Removed 11 blacklisted jobs from pending queue
[2026-01-30T15:08:50.077Z] [BOT] 📋 After blacklist filter: 25 jobs (11 blacklisted)
[2026-01-30T15:08:50.077Z] [BOT] 📋 After data quality filter: 25 jobs (0 invalid)
[2026-01-30T15:08:50.078Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-30T15:08:50.078Z] [BOT] (8 grouped as same job with different locations)
📍 5 jobs with multiple locations:
[2026-01-30T15:08:50.078Z] [BOT] - Strategic Account Executive @ datadog: remote, chicago, illinois, usa
   - Deal Desk Analyst @ datadog: boston, massachusetts, usa; new york, new york, usa, denver, colorado, usa
   - Enterprise Sales Executive @ datadog: remote, washington, district of columbia, usa
   - Enterprise Sales Executive (FED) @ datadog: washington, district of columbia, usa, remote
   - Enterprise Security Sales Specialist @ datadog: remote, chicago, illinois, usa; san francisco, california, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T15:08:50.082Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-01-30T15:08:50.083Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
[2026-01-30T15:08:50.083Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:08:50.100Z] [BOT ERROR] (node:2490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T15:08:50.327Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T15:08:50.327Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T15:08:50.327Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:08:50.327Z] [BOT] 💾 BEFORE MERGE: 488 jobs in memory (cached)
[2026-01-30T15:08:50.338Z] [BOT] ✅ Loaded V2 database: 487 jobs
💾 DISK STATE: 487 jobs on disk
[2026-01-30T15:08:50.339Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=488
[2026-01-30T15:08:50.340Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:08:50.340Z] [BOT] 💾 AFTER MERGE: 488 jobs (merged disk + memory)
[2026-01-30T15:08:50.340Z] [BOT] ✅ No jobs to archive (all 488 jobs within 7-day window)
[2026-01-30T15:08:50.378Z] [BOT] 💾 Saved posted_jobs.json: 488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:08:52.237Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #🏠・JID_ead674af
[2026-01-30T15:08:52.237Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
[2026-01-30T15:08:52.238Z] [BOT] 💾 BEFORE MERGE: 488 jobs in memory (cached)
[2026-01-30T15:08:52.256Z] [BOT] ✅ Loaded V2 database: 488 jobs
[2026-01-30T15:08:52.257Z] [BOT] 💾 DISK STATE: 488 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=488
[2026-01-30T15:08:52.258Z] [BOT] 🔀 Deep merged: Strategic Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:08:52.258Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 488 jobs (merged disk + memory)
[2026-01-30T15:08:52.258Z] [BOT] ✅ No jobs to archive (all 488 jobs within 7-day window)
[2026-01-30T15:08:52.289Z] [BOT] 💾 Saved posted_jobs.json: 488 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:08:53.789Z] [BOT] 📍 [ROUTING] "Commercial Account Executive - LATAM (Portuguese Speaking)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:08:54.094Z] [BOT] ✅ Posted message: Commercial Account Executive - LATAM (Portuguese Speaking) @ datadog in #💻・tech-jobs
  ✅ Industry: Commercial Account Executive - LATAM (Portuguese Speaking) @ datadog
[2026-01-30T15:08:54.094Z] [BOT] 💾 Added channel posting: Commercial Account Executive - LATAM (Portuguese Speaking) @ datadog → category channel (1 total channels)
[2026-01-30T15:08:54.094Z] [BOT] 💾 BEFORE MERGE: 489 jobs in memory (cached)
[2026-01-30T15:08:54.104Z] [BOT] ✅ Loaded V2 database: 488 jobs
💾 DISK STATE: 488 jobs on disk
[2026-01-30T15:08:54.104Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=489
[2026-01-30T15:08:54.105Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:08:54.105Z] [BOT] 💾 AFTER MERGE: 489 jobs (merged disk + memory)
[2026-01-30T15:08:54.105Z] [BOT] ✅ No jobs to archive (all 489 jobs within 7-day window)
[2026-01-30T15:08:54.138Z] [BOT] 💾 Saved posted_jobs.json: 489 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:08:55.639Z] [BOT] 📍 [ROUTING] "Employee Relation Specialist - Workplace Investigations" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:08:55.814Z] [BOT] ✅ Posted message: Employee Relation Specialist - Workplace Investigations @ datadog in #💻・tech-jobs
[2026-01-30T15:08:55.814Z] [BOT] ✅ Industry: Employee Relation Specialist - Workplace Investigations @ datadog
[2026-01-30T15:08:55.815Z] [BOT] 💾 Added channel posting: Employee Relation Specialist - Workplace Investigations @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 490 jobs in memory (cached)
[2026-01-30T15:08:55.824Z] [BOT] ✅ Loaded V2 database: 489 jobs
💾 DISK STATE: 489 jobs on disk
[2026-01-30T15:08:55.824Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=490
[2026-01-30T15:08:55.825Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:08:55.825Z] [BOT] 💾 AFTER MERGE: 490 jobs (merged disk + memory)
[2026-01-30T15:08:55.825Z] [BOT] ✅ No jobs to archive (all 490 jobs within 7-day window)
[2026-01-30T15:08:55.856Z] [BOT] 💾 Saved posted_jobs.json: 490 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:08:57.558Z] [BOT] ✅ Posted message: Employee Relation Specialist - Workplace Investigations @ datadog in #🗽・JID_98d4f0de
[2026-01-30T15:08:57.558Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Employee Relation Specialist - Workplace Investigations @ datadog → location channel (2 total channels)
[2026-01-30T15:08:57.558Z] [BOT] 💾 BEFORE MERGE: 490 jobs in memory (cached)
[2026-01-30T15:08:57.568Z] [BOT] ✅ Loaded V2 database: 490 jobs
💾 DISK STATE: 490 jobs on disk
[2026-01-30T15:08:57.568Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=490
[2026-01-30T15:08:57.569Z] [BOT] 🔀 Deep merged: Employee Relation Specialist - Workplace Investigations @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:08:57.569Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 490 jobs (merged disk + memory)
[2026-01-30T15:08:57.570Z] [BOT] ✅ No jobs to archive (all 490 jobs within 7-day window)
[2026-01-30T15:08:57.601Z] [BOT] 💾 Saved posted_jobs.json: 490 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:08:59.103Z] [BOT] 📍 [ROUTING] "Enterprise Sales Engineer - South Africa" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:08:59.259Z] [BOT] ✅ Posted message: Enterprise Sales Engineer - South Africa @ datadog in #💻・tech-jobs
  ✅ Industry: Enterprise Sales Engineer - South Africa @ datadog
[2026-01-30T15:08:59.260Z] [BOT] 💾 Added channel posting: Enterprise Sales Engineer - South Africa @ datadog → category channel (1 total channels)
[2026-01-30T15:08:59.260Z] [BOT] 💾 BEFORE MERGE: 491 jobs in memory (cached)
[2026-01-30T15:08:59.275Z] [BOT] ✅ Loaded V2 database: 490 jobs
💾 DISK STATE: 490 jobs on disk
[2026-01-30T15:08:59.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=491
[2026-01-30T15:08:59.279Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:08:59.279Z] [BOT] 💾 AFTER MERGE: 491 jobs (merged disk + memory)
[2026-01-30T15:08:59.279Z] [BOT] ✅ No jobs to archive (all 491 jobs within 7-day window)
[2026-01-30T15:08:59.318Z] [BOT] 💾 Saved posted_jobs.json: 491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:00.819Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
   Category: TECH (default)
[2026-01-30T15:09:00.819Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:09:01.005Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #💻・tech-jobs
[2026-01-30T15:09:01.005Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-30T15:09:01.006Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:09:01.006Z] [BOT] 💾 BEFORE MERGE: 492 jobs in memory (cached)
[2026-01-30T15:09:01.015Z] [BOT] ✅ Loaded V2 database: 491 jobs
[2026-01-30T15:09:01.016Z] [BOT] 💾 DISK STATE: 491 jobs on disk
[2026-01-30T15:09:01.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=492
[2026-01-30T15:09:01.017Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:09:01.017Z] [BOT] 💾 AFTER MERGE: 492 jobs (merged disk + memory)
[2026-01-30T15:09:01.017Z] [BOT] ✅ No jobs to archive (all 492 jobs within 7-day window)
[2026-01-30T15:09:01.050Z] [BOT] 💾 Saved posted_jobs.json: 492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:02.809Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #🏠・JID_ead674af
[2026-01-30T15:09:02.809Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Enterprise Sales Executive @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 492 jobs in memory (cached)
[2026-01-30T15:09:02.823Z] [BOT] ✅ Loaded V2 database: 492 jobs
💾 DISK STATE: 492 jobs on disk
[2026-01-30T15:09:02.823Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=492
[2026-01-30T15:09:02.824Z] [BOT] 🔀 Deep merged: Enterprise Sales Executive @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:09:02.824Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 492 jobs (merged disk + memory)
[2026-01-30T15:09:02.824Z] [BOT] ✅ No jobs to archive (all 492 jobs within 7-day window)
[2026-01-30T15:09:02.854Z] [BOT] 💾 Saved posted_jobs.json: 492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:04.354Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive (FED)" @ datadog
[2026-01-30T15:09:04.355Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:09:04.603Z] [BOT] ✅ Posted message: Enterprise Sales Executive (FED) @ datadog in #💻・tech-jobs
[2026-01-30T15:09:04.603Z] [BOT] ✅ Industry: Enterprise Sales Executive (FED) @ datadog
[2026-01-30T15:09:04.603Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive (FED) @ datadog → category channel (1 total channels)
[2026-01-30T15:09:04.603Z] [BOT] 💾 BEFORE MERGE: 493 jobs in memory (cached)
[2026-01-30T15:09:04.612Z] [BOT] ✅ Loaded V2 database: 492 jobs
💾 DISK STATE: 492 jobs on disk
[2026-01-30T15:09:04.613Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=493
[2026-01-30T15:09:04.614Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 493 jobs (merged disk + memory)
[2026-01-30T15:09:04.614Z] [BOT] ✅ No jobs to archive (all 493 jobs within 7-day window)
[2026-01-30T15:09:04.642Z] [BOT] 💾 Saved posted_jobs.json: 493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:06.143Z] [BOT] 📍 [ROUTING] "Enterprise Security Sales Specialist" @ datadog
   Category: TECH (matched: "security")
[2026-01-30T15:09:06.143Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:09:06.454Z] [BOT] ✅ Posted message: Enterprise Security Sales Specialist @ datadog in #💻・tech-jobs
[2026-01-30T15:09:06.454Z] [BOT] ✅ Industry: Enterprise Security Sales Specialist @ datadog
[2026-01-30T15:09:06.454Z] [BOT] 💾 Added channel posting: Enterprise Security Sales Specialist @ datadog → category channel (1 total channels)
[2026-01-30T15:09:06.455Z] [BOT] 💾 BEFORE MERGE: 494 jobs in memory (cached)
[2026-01-30T15:09:06.467Z] [BOT] ✅ Loaded V2 database: 493 jobs
💾 DISK STATE: 493 jobs on disk
[2026-01-30T15:09:06.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=494
[2026-01-30T15:09:06.468Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:09:06.468Z] [BOT] 💾 AFTER MERGE: 494 jobs (merged disk + memory)
[2026-01-30T15:09:06.468Z] [BOT] ✅ No jobs to archive (all 494 jobs within 7-day window)
[2026-01-30T15:09:06.498Z] [BOT] 💾 Saved posted_jobs.json: 494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:08.158Z] [BOT] ✅ Posted message: Enterprise Security Sales Specialist @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T15:09:08.158Z] [BOT] 💾 Added channel posting: Enterprise Security Sales Specialist @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 494 jobs in memory (cached)
[2026-01-30T15:09:08.167Z] [BOT] ✅ Loaded V2 database: 494 jobs
💾 DISK STATE: 494 jobs on disk
[2026-01-30T15:09:08.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=494
[2026-01-30T15:09:08.169Z] [BOT] 🔀 Deep merged: Enterprise Security Sales Specialist @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T15:09:08.169Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 494 jobs (merged disk + memory)
[2026-01-30T15:09:08.169Z] [BOT] ✅ No jobs to archive (all 494 jobs within 7-day window)
[2026-01-30T15:09:08.197Z] [BOT] 💾 Saved posted_jobs.json: 494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:09.697Z] [BOT] 📍 [ROUTING] "Executive Assistant II - San Francisco" @ datadog
[2026-01-30T15:09:09.698Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:09:09.870Z] [BOT] ✅ Posted message: Executive Assistant II - San Francisco @ datadog in #💻・tech-jobs
[2026-01-30T15:09:09.870Z] [BOT] ✅ Industry: Executive Assistant II - San Francisco @ datadog
[2026-01-30T15:09:09.870Z] [BOT] 💾 Added channel posting: Executive Assistant II - San Francisco @ datadog → category channel (1 total channels)
[2026-01-30T15:09:09.870Z] [BOT] 💾 BEFORE MERGE: 495 jobs in memory (cached)
[2026-01-30T15:09:09.882Z] [BOT] ✅ Loaded V2 database: 494 jobs
💾 DISK STATE: 494 jobs on disk
[2026-01-30T15:09:09.882Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=495
[2026-01-30T15:09:09.883Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:09:09.883Z] [BOT] 💾 AFTER MERGE: 495 jobs (merged disk + memory)
[2026-01-30T15:09:09.883Z] [BOT] ✅ No jobs to archive (all 495 jobs within 7-day window)
[2026-01-30T15:09:09.912Z] [BOT] 💾 Saved posted_jobs.json: 495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:11.413Z] [BOT] 📍 [ROUTING] "Executive Assistant I - NYC" @ datadog
[2026-01-30T15:09:11.414Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:09:11.622Z] [BOT] ✅ Posted message: Executive Assistant I - NYC @ datadog in #💻・tech-jobs
[2026-01-30T15:09:11.622Z] [BOT] ✅ Industry: Executive Assistant I - NYC @ datadog
[2026-01-30T15:09:11.622Z] [BOT] 💾 Added channel posting: Executive Assistant I - NYC @ datadog → category channel (1 total channels)
[2026-01-30T15:09:11.622Z] [BOT] 💾 BEFORE MERGE: 496 jobs in memory (cached)
[2026-01-30T15:09:11.631Z] [BOT] ✅ Loaded V2 database: 495 jobs
💾 DISK STATE: 495 jobs on disk
[2026-01-30T15:09:11.631Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=496
[2026-01-30T15:09:11.632Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:09:11.632Z] [BOT] 💾 AFTER MERGE: 496 jobs (merged disk + memory)
[2026-01-30T15:09:11.633Z] [BOT] ✅ No jobs to archive (all 496 jobs within 7-day window)
[2026-01-30T15:09:11.661Z] [BOT] 💾 Saved posted_jobs.json: 496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:13.514Z] [BOT] ✅ Posted message: Executive Assistant I - NYC @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:09:13.514Z] [BOT] 💾 Added channel posting: Executive Assistant I - NYC @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 496 jobs in memory (cached)
[2026-01-30T15:09:13.526Z] [BOT] ✅ Loaded V2 database: 496 jobs
💾 DISK STATE: 496 jobs on disk
[2026-01-30T15:09:13.526Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=496
[2026-01-30T15:09:13.527Z] [BOT] 🔀 Deep merged: Executive Assistant I - NYC @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:09:13.527Z] [BOT] 💾 AFTER MERGE: 496 jobs (merged disk + memory)
[2026-01-30T15:09:13.528Z] [BOT] ✅ No jobs to archive (all 496 jobs within 7-day window)
[2026-01-30T15:09:13.557Z] [BOT] 💾 Saved posted_jobs.json: 496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:18.060Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T15:09:18.060Z] [BOT] 📍 [ROUTING] "Deal Desk Analyst" @ datadog
[2026-01-30T15:09:18.060Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T15:09:18.449Z] [BOT] ✅ Posted message: Deal Desk Analyst @ datadog in #💰・finance-jobs
[2026-01-30T15:09:18.450Z] [BOT] ✅ Industry: Deal Desk Analyst @ datadog
[2026-01-30T15:09:18.450Z] [BOT] 💾 Added channel posting: Deal Desk Analyst @ datadog → category channel (1 total channels)
[2026-01-30T15:09:18.450Z] [BOT] 💾 BEFORE MERGE: 497 jobs in memory (cached)
[2026-01-30T15:09:18.468Z] [BOT] ✅ Loaded V2 database: 496 jobs
💾 DISK STATE: 496 jobs on disk
[2026-01-30T15:09:18.469Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=497
[2026-01-30T15:09:18.470Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:09:18.470Z] [BOT] 💾 AFTER MERGE: 497 jobs (merged disk + memory)
[2026-01-30T15:09:18.470Z] [BOT] ✅ No jobs to archive (all 497 jobs within 7-day window)
[2026-01-30T15:09:18.504Z] [BOT] 💾 Saved posted_jobs.json: 497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:20.334Z] [BOT] ✅ Posted message: Deal Desk Analyst @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:09:20.334Z] [BOT] 💾 Added channel posting: Deal Desk Analyst @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 497 jobs in memory (cached)
[2026-01-30T15:09:20.346Z] [BOT] ✅ Loaded V2 database: 497 jobs
💾 DISK STATE: 497 jobs on disk
[2026-01-30T15:09:20.347Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=497
[2026-01-30T15:09:20.348Z] [BOT] 🔀 Deep merged: Deal Desk Analyst @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:09:20.348Z] [BOT] 💾 AFTER MERGE: 497 jobs (merged disk + memory)
[2026-01-30T15:09:20.348Z] [BOT] ✅ No jobs to archive (all 497 jobs within 7-day window)
[2026-01-30T15:09:20.378Z] [BOT] 💾 Saved posted_jobs.json: 497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:24.880Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T15:09:24.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb003348..." not found, but found as SHA256 "aa33b713c4fd0ca3"
⏭️  Skipping duplicate: JID_fb003348 (posted within 7 days)
[2026-01-30T15:09:24.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba1266b8..." not found, but found as SHA256 "1b46f9330d5c4f03"
⏭️  Skipping duplicate: JID_ba1266b8 (posted within 7 days)
[2026-01-30T15:09:24.881Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f2f0401..." not found, but found as SHA256 "a0f6b95bcc774933"
[2026-01-30T15:09:24.881Z] [BOT] ⏭️  Skipping duplicate: JID_2f2f0401 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5c406f64..." not found, but found as SHA256 "77ec81e16184d5ce"
⏭️  Skipping duplicate: JID_5c406f64 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2755fcd3..." not found, but found as SHA256 "3e11e20a09ea3ac3"
⏭️  Skipping duplicate: JID_2755fcd3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d5931258..." not found, but found as SHA256 "b5ec497e15672006"
⏭️  Skipping duplicate: JID_d5931258 (posted within 7 days)
[2026-01-30T15:09:24.882Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f16f7e01..." not found, but found as SHA256 "9809cfd6780d1b76"
[2026-01-30T15:09:24.882Z] [BOT] ⏭️  Skipping duplicate: JID_f16f7e01 (posted within 7 days)
[2026-01-30T15:09:24.882Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bffaf944..." not found, but found as SHA256 "8fc538ea165a51d4"
⏭️  Skipping duplicate: JID_bffaf944 (posted within 7 days)
[2026-01-30T15:09:24.882Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84d2607c..." not found, but found as SHA256 "4c63844a7f907c01"
⏭️  Skipping duplicate: JID_84d2607c (posted within 7 days)
[2026-01-30T15:09:24.882Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_03d6c806..." not found, but found as SHA256 "7943cad093f2b869"
⏭️  Skipping duplicate: JID_03d6c806 (posted within 7 days)
[2026-01-30T15:09:24.980Z] [BOT] ✅ Loaded pending queue: 2902 total (2405 pending, 39 enriched, 458 posted)
[2026-01-30T15:09:25.153Z] [BOT] ✅ Saved pending queue: 2902 total (2405 pending, 29 enriched, 468 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T15:09:25.153Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T15:09:25.235Z] [BOT] 📂 Loaded 10549 existing routing entries
[2026-01-30T15:09:25.365Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T15:09:25.365Z] [BOT] New entries: 10
   Total entries: 10559
   Timestamp: 2026-01-30T15:09:25.323Z
[2026-01-30T15:09:25.365Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T15:09:25.365Z] [BOT] Total attempts: 41
   Successful: 16
   Failed: 0
   Skipped: 25
[2026-01-30T15:09:25.366Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T15:09:25.366Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #🏠・JID_ead674af: 3 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-30T15:09:25.366Z] [BOT] [STATS] Channel stats saved
[2026-01-30T15:09:25.366Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 497 jobs in memory (cached)
[2026-01-30T15:09:25.377Z] [BOT] ✅ Loaded V2 database: 497 jobs
[2026-01-30T15:09:25.377Z] [BOT] 💾 DISK STATE: 497 jobs on disk
[2026-01-30T15:09:25.378Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=497
[2026-01-30T15:09:25.379Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:09:25.379Z] [BOT] 💾 AFTER MERGE: 497 jobs (merged disk + memory)
[2026-01-30T15:09:25.379Z] [BOT] ✅ No jobs to archive (all 497 jobs within 7-day window)
[2026-01-30T15:09:25.409Z] [BOT] 💾 Saved posted_jobs.json: 497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:09:25.409Z] [BOT] ✅ Database saved successfully
[2026-01-30T15:09:27.439Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*