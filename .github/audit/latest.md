# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T21:59:21.193Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T21:58:37.716Z] ========================================
[2026-01-30T21:58:37.718Z] Discord Bot Execution Log
[2026-01-30T21:58:37.718Z] Environment: GitHub Actions
[2026-01-30T21:58:37.718Z] Node Version: v20.20.0
[2026-01-30T21:58:37.718Z] ========================================
[2026-01-30T21:58:37.718Z] Environment Variables Check:
[2026-01-30T21:58:37.718Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T21:58:37.718Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T21:58:37.719Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T21:58:37.719Z] 
Multi-Channel Configuration:
[2026-01-30T21:58:37.719Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T21:58:37.719Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T21:58:37.719Z] 
Data Files Check:
[2026-01-30T21:58:37.720Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T21:58:37.748Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4695465 bytes)
[2026-01-30T21:58:37.748Z] 
========================================
[2026-01-30T21:58:37.748Z] Starting Enhanced Discord Bot...
[2026-01-30T21:58:37.748Z] ========================================
[2026-01-30T21:58:38.301Z] [BOT] ✅ Loaded V2 database: 708 jobs
[2026-01-30T21:58:38.716Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T21:58:38.717Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T21:58:38.717Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T21:58:38.841Z] [BOT] ✅ Loaded pending queue: 2936 total (2207 pending, 50 enriched, 679 posted)
[2026-01-30T21:58:38.841Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T21:58:38.841Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:58:38.842Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T21:58:38.842Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:58:38.842Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T21:58:38.843Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T21:58:38.843Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T21:58:38.843Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T21:58:38.843Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T21:58:38.843Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T21:58:38.844Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T21:58:38.844Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T21:58:38.844Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T21:58:38.844Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T21:58:38.844Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T21:58:38.845Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-30T21:58:38.845Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T21:58:38.845Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T21:58:38.845Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T21:58:38.851Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T21:58:38.852Z] [BOT] 🚫 Skipping blacklisted job: Director of Partnerships, North America at vercel
[2026-01-30T21:58:38.852Z] [BOT] 🚫 Skipping blacklisted job: Director of Sales Engineering, AMER at vercel
🚫 Skipping blacklisted job: Director of Trust & Safety Engineering at vercel
🚫 Skipping blacklisted job: Engineering Manager, CDN at vercel
[2026-01-30T21:58:38.852Z] [BOT] 🚫 Skipping blacklisted job: Finance Manager at vercel
🚫 Skipping blacklisted job: FP&A Manager,  GTM at vercel
🚫 Skipping blacklisted job: GSI & Consultancies, Partner Lead at vercel
🚫 Skipping blacklisted job: Platform Abuse Operations Lead, Trust & Safety at vercel
[2026-01-30T21:58:38.967Z] [BOT] ✅ Loaded pending queue: 2936 total (2207 pending, 50 enriched, 679 posted)
[2026-01-30T21:58:39.138Z] [BOT] ✅ Saved pending queue: 2928 total (2207 pending, 42 enriched, 679 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
[2026-01-30T21:58:39.138Z] [BOT] 📋 After blacklist filter: 28 jobs (8 blacklisted)
[2026-01-30T21:58:39.138Z] [BOT] 📋 After data quality filter: 28 jobs (0 invalid)
[2026-01-30T21:58:39.139Z] [BOT] 📋 After multi-location grouping: 23 unique jobs to post
[2026-01-30T21:58:39.140Z] [BOT] (5 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Select Major Account Executive EST/CST - Nashville, TN @ samsara: nashville, orlando, raleigh, san antonio, tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T21:58:39.144Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T21:58:39.144Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Nashville, TN" @ samsara
   Category: FINANCE (matched: "finance")
[2026-01-30T21:58:39.145Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:58:39.163Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T21:58:39.505Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Nashville, TN @ samsara in #💰・finance-jobs
[2026-01-30T21:58:39.506Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Nashville, TN @ samsara
[2026-01-30T21:58:39.506Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Nashville, TN @ samsara → category channel (1 total channels)
[2026-01-30T21:58:39.507Z] [BOT] 💾 BEFORE MERGE: 709 jobs in memory (cached)
[2026-01-30T21:58:39.525Z] [BOT] ✅ Loaded V2 database: 708 jobs
💾 DISK STATE: 708 jobs on disk
[2026-01-30T21:58:39.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=709
[2026-01-30T21:58:39.527Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:58:39.527Z] [BOT] 💾 AFTER MERGE: 709 jobs (merged disk + memory)
[2026-01-30T21:58:39.528Z] [BOT] ✅ No jobs to archive (all 709 jobs within 7-day window)
[2026-01-30T21:58:39.579Z] [BOT] 💾 Saved posted_jobs.json: 709 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:58:41.082Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-30T21:58:41.082Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:58:41.234Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
[2026-01-30T21:58:41.234Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-30T21:58:41.235Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-01-30T21:58:41.235Z] [BOT] 💾 BEFORE MERGE: 710 jobs in memory (cached)
[2026-01-30T21:58:41.251Z] [BOT] ✅ Loaded V2 database: 709 jobs
💾 DISK STATE: 709 jobs on disk
[2026-01-30T21:58:41.251Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=710
[2026-01-30T21:58:41.253Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 710 jobs (merged disk + memory)
[2026-01-30T21:58:41.253Z] [BOT] ✅ No jobs to archive (all 710 jobs within 7-day window)
[2026-01-30T21:58:41.301Z] [BOT] 💾 Saved posted_jobs.json: 710 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:58:44.229Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T21:58:44.230Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → location channel (2 total channels)
[2026-01-30T21:58:44.230Z] [BOT] 💾 BEFORE MERGE: 710 jobs in memory (cached)
[2026-01-30T21:58:44.246Z] [BOT] ✅ Loaded V2 database: 710 jobs
💾 DISK STATE: 710 jobs on disk
[2026-01-30T21:58:44.246Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=710
[2026-01-30T21:58:44.248Z] [BOT] 🔀 Deep merged: Account Executive, Mid Market @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T21:58:44.248Z] [BOT] 💾 AFTER MERGE: 710 jobs (merged disk + memory)
[2026-01-30T21:58:44.248Z] [BOT] ✅ No jobs to archive (all 710 jobs within 7-day window)
[2026-01-30T21:58:44.294Z] [BOT] 💾 Saved posted_jobs.json: 710 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:58:48.796Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T21:58:48.797Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_f02f7547 
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-30T21:58:48.797Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T21:58:48.797Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T21:58:49.515Z] [BOT] ✅ Posted message: Data Analyst @ ORG_f02f7547  in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_f02f7547
[2026-01-30T21:58:49.515Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_f02f7547  → category channel (1 total channels)
💾 BEFORE MERGE: 711 jobs in memory (cached)
[2026-01-30T21:58:49.548Z] [BOT] ✅ Loaded V2 database: 710 jobs
💾 DISK STATE: 710 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=711
[2026-01-30T21:58:49.549Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:58:49.549Z] [BOT] 💾 AFTER MERGE: 711 jobs (merged disk + memory)
[2026-01-30T21:58:49.550Z] [BOT] ✅ No jobs to archive (all 711 jobs within 7-day window)
[2026-01-30T21:58:49.612Z] [BOT] 💾 Saved posted_jobs.json: 711 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:58:54.112Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T21:58:54.113Z] [BOT] 📍 [ROUTING] "Account Executive, SMB - Figma Weave (New York, United States)" @ figma
[2026-01-30T21:58:54.113Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:58:54.449Z] [BOT] ✅ Posted message: Account Executive, SMB - Figma Weave (New York, United States) @ figma in #💻・tech-jobs
  ✅ Industry: Account Executive, SMB - Figma Weave (New York, United States) @ figma
[2026-01-30T21:58:54.449Z] [BOT] 💾 Added channel posting: Account Executive, SMB - Figma Weave (New York, United States) @ figma → category channel (1 total channels)
[2026-01-30T21:58:54.450Z] [BOT] 💾 BEFORE MERGE: 712 jobs in memory (cached)
[2026-01-30T21:58:54.466Z] [BOT] ✅ Loaded V2 database: 711 jobs
💾 DISK STATE: 711 jobs on disk
[2026-01-30T21:58:54.466Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=712
[2026-01-30T21:58:54.468Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 712 jobs (merged disk + memory)
[2026-01-30T21:58:54.469Z] [BOT] ✅ No jobs to archive (all 712 jobs within 7-day window)
[2026-01-30T21:58:54.526Z] [BOT] 💾 Saved posted_jobs.json: 712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:58:56.265Z] [BOT] ✅ Posted message: Account Executive, SMB - Figma Weave (New York, United States) @ figma in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T21:58:56.265Z] [BOT] 💾 Added channel posting: Account Executive, SMB - Figma Weave (New York, United States) @ figma → location channel (2 total channels)
[2026-01-30T21:58:56.265Z] [BOT] 💾 BEFORE MERGE: 712 jobs in memory (cached)
[2026-01-30T21:58:56.280Z] [BOT] ✅ Loaded V2 database: 712 jobs
💾 DISK STATE: 712 jobs on disk
[2026-01-30T21:58:56.280Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=712
[2026-01-30T21:58:56.282Z] [BOT] 🔀 Deep merged: Account Executive, SMB - Figma Weave (New York, United States) @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T21:58:56.282Z] [BOT] 💾 AFTER MERGE: 712 jobs (merged disk + memory)
[2026-01-30T21:58:56.282Z] [BOT] ✅ No jobs to archive (all 712 jobs within 7-day window)
[2026-01-30T21:58:56.329Z] [BOT] 💾 Saved posted_jobs.json: 712 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:58:57.830Z] [BOT] 📍 [ROUTING] "Account Executive, Mid-Market - Figma Weave (New York, United States)" @ figma
   Category: TECH (default)
[2026-01-30T21:58:57.830Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:58:57.970Z] [BOT] ✅ Posted message: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma in #💻・tech-jobs
[2026-01-30T21:58:57.970Z] [BOT] ✅ Industry: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma
[2026-01-30T21:58:57.970Z] [BOT] 💾 Added channel posting: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma → category channel (1 total channels)
💾 BEFORE MERGE: 713 jobs in memory (cached)
[2026-01-30T21:58:57.986Z] [BOT] ✅ Loaded V2 database: 712 jobs
💾 DISK STATE: 712 jobs on disk
[2026-01-30T21:58:57.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=713
[2026-01-30T21:58:57.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:58:57.988Z] [BOT] 💾 AFTER MERGE: 713 jobs (merged disk + memory)
[2026-01-30T21:58:57.989Z] [BOT] ✅ No jobs to archive (all 713 jobs within 7-day window)
[2026-01-30T21:58:58.036Z] [BOT] 💾 Saved posted_jobs.json: 713 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:58:59.679Z] [BOT] ✅ Posted message: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma in #🗽・JID_98d4f0de
[2026-01-30T21:58:59.679Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T21:58:59.680Z] [BOT] 💾 Added channel posting: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma → location channel (2 total channels)
💾 BEFORE MERGE: 713 jobs in memory (cached)
[2026-01-30T21:58:59.696Z] [BOT] ✅ Loaded V2 database: 713 jobs
💾 DISK STATE: 713 jobs on disk
[2026-01-30T21:58:59.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=713
[2026-01-30T21:58:59.697Z] [BOT] 🔀 Deep merged: Account Executive, Mid-Market - Figma Weave (New York, United States) @ figma (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T21:58:59.698Z] [BOT] 💾 AFTER MERGE: 713 jobs (merged disk + memory)
[2026-01-30T21:58:59.698Z] [BOT] ✅ No jobs to archive (all 713 jobs within 7-day window)
[2026-01-30T21:58:59.745Z] [BOT] 💾 Saved posted_jobs.json: 713 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:59:01.248Z] [BOT] 📍 [ROUTING] "Application Engineer 1" @ ORG_f3574a02
[2026-01-30T21:59:01.249Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:59:01.615Z] [BOT] ✅ Posted message: Application Engineer 1 @ ORG_f3574a02 in #💻・tech-jobs
[2026-01-30T21:59:01.615Z] [BOT] ✅ Industry: Application Engineer 1 @ ORG_f3574a02
[2026-01-30T21:59:01.616Z] [BOT] 💾 Added channel posting: Application Engineer 1 @ ORG_f3574a02 → category channel (1 total channels)
[2026-01-30T21:59:01.616Z] [BOT] 💾 BEFORE MERGE: 714 jobs in memory (cached)
[2026-01-30T21:59:01.631Z] [BOT] ✅ Loaded V2 database: 713 jobs
💾 DISK STATE: 713 jobs on disk
[2026-01-30T21:59:01.631Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=714
[2026-01-30T21:59:01.633Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 714 jobs (merged disk + memory)
[2026-01-30T21:59:01.633Z] [BOT] ✅ No jobs to archive (all 714 jobs within 7-day window)
[2026-01-30T21:59:01.681Z] [BOT] 💾 Saved posted_jobs.json: 714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:59:03.183Z] [BOT] 📍 [ROUTING] "Software Engineer - Beam Planning - Starlink" @ ORG_afd623b1
[2026-01-30T21:59:03.184Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:59:03.487Z] [BOT] ✅ Posted message: Software Engineer - Beam Planning - Starlink @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-30T21:59:03.488Z] [BOT] ✅ Industry: Software Engineer - Beam Planning - Starlink @ ORG_afd623b1
[2026-01-30T21:59:03.488Z] [BOT] 💾 Added channel posting: Software Engineer - Beam Planning - Starlink @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-30T21:59:03.488Z] [BOT] 💾 BEFORE MERGE: 715 jobs in memory (cached)
[2026-01-30T21:59:03.503Z] [BOT] ✅ Loaded V2 database: 714 jobs
💾 DISK STATE: 714 jobs on disk
[2026-01-30T21:59:03.503Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=715
[2026-01-30T21:59:03.505Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 715 jobs (merged disk + memory)
[2026-01-30T21:59:03.506Z] [BOT] ✅ No jobs to archive (all 715 jobs within 7-day window)
[2026-01-30T21:59:03.554Z] [BOT] 💾 Saved posted_jobs.json: 715 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:59:05.055Z] [BOT] 📍 [ROUTING] "Associate Software Developer - Dev Support" @ ORG_daf72bde Software
[2026-01-30T21:59:05.055Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:59:06.617Z] [BOT] ✅ Posted message: Associate Software Developer - Dev Support @ ORG_daf72bde Software in #💻・tech-jobs
  ✅ Industry: Associate Software Developer - Dev Support @ ORG_daf72bde Software
[2026-01-30T21:59:06.617Z] [BOT] 💾 Added channel posting: Associate Software Developer - Dev Support @ ORG_daf72bde Software → category channel (1 total channels)
[2026-01-30T21:59:06.618Z] [BOT] 💾 BEFORE MERGE: 716 jobs in memory (cached)
[2026-01-30T21:59:06.633Z] [BOT] ✅ Loaded V2 database: 715 jobs
💾 DISK STATE: 715 jobs on disk
[2026-01-30T21:59:06.633Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=716
[2026-01-30T21:59:06.635Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 716 jobs (merged disk + memory)
[2026-01-30T21:59:06.635Z] [BOT] ✅ No jobs to archive (all 716 jobs within 7-day window)
[2026-01-30T21:59:06.684Z] [BOT] 💾 Saved posted_jobs.json: 716 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:59:11.187Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T21:59:11.188Z] [BOT] 📍 [ROUTING] "Associate Product Engineer" @ ORG_d5ad4495
   Category: AI (matched: "artificial intelligence")
[2026-01-30T21:59:11.188Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:59:11.464Z] [BOT] ✅ Posted message: Associate Product Engineer @ ORG_d5ad4495 in #🤖・ai-jobs
  ✅ Industry: Associate Product Engineer @ ORG_d5ad4495
[2026-01-30T21:59:11.465Z] [BOT] 💾 Added channel posting: Associate Product Engineer @ ORG_d5ad4495 → category channel (1 total channels)
💾 BEFORE MERGE: 717 jobs in memory (cached)
[2026-01-30T21:59:11.481Z] [BOT] ✅ Loaded V2 database: 716 jobs
💾 DISK STATE: 716 jobs on disk
[2026-01-30T21:59:11.482Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=717
[2026-01-30T21:59:11.483Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 717 jobs (merged disk + memory)
[2026-01-30T21:59:11.484Z] [BOT] ✅ No jobs to archive (all 717 jobs within 7-day window)
[2026-01-30T21:59:11.532Z] [BOT] 💾 Saved posted_jobs.json: 717 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:59:13.033Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_9d7ad979
[2026-01-30T21:59:13.033Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:59:13.282Z] [BOT] ✅ Posted message: Software Engineer @ ORG_9d7ad979 in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_9d7ad979
[2026-01-30T21:59:13.283Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_9d7ad979 → category channel (1 total channels)
[2026-01-30T21:59:13.283Z] [BOT] 💾 BEFORE MERGE: 718 jobs in memory (cached)
[2026-01-30T21:59:13.299Z] [BOT] ✅ Loaded V2 database: 717 jobs
💾 DISK STATE: 717 jobs on disk
[2026-01-30T21:59:13.299Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=718
[2026-01-30T21:59:13.301Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 718 jobs (merged disk + memory)
[2026-01-30T21:59:13.301Z] [BOT] ✅ No jobs to archive (all 718 jobs within 7-day window)
[2026-01-30T21:59:13.350Z] [BOT] 💾 Saved posted_jobs.json: 718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:59:17.852Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T21:59:17.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eafe9357..." not found, but found as SHA256 "53eb856a976ab56c"
[2026-01-30T21:59:17.854Z] [BOT] ⏭️  Skipping duplicate: JID_9f609250 (posted within 7 days)
[2026-01-30T21:59:17.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_529af91f..." not found, but found as SHA256 "21f4ee4aa0b3f0cb"
⏭️  Skipping duplicate: JID_529af91f (posted within 7 days)
[2026-01-30T21:59:17.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e173f9c7..." not found, but found as SHA256 "fc206c0dd88d3350"
⏭️  Skipping duplicate: JID_a6953ad8 (posted within 7 days)
[2026-01-30T21:59:17.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_330e9d05..." not found, but found as SHA256 "70e7659eca188c16"
⏭️  Skipping duplicate: JID_637321ae (posted within 7 days)
[2026-01-30T21:59:17.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b74346c4..." not found, but found as SHA256 "ec1ee1f3f31da87f"
⏭️  Skipping duplicate: JID_23252284 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ffb4189c..." not found, but found as SHA256 "3793779bdc670751"
⏭️  Skipping duplicate: JID_4d41a9b2-championx_external-JID_062c05d5-i_r00134579 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9a212d6b..." not found, but found as SHA256 "286734ec0afec55e"
⏭️  Skipping duplicate: JID_78106ab2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_fc4dbf23..." not found, but found as SHA256 "defe343ff4f87281"
⏭️  Skipping duplicate: JID_d00dcc67-engineer_jr100284 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e8887be7..." not found, but found as SHA256 "f400809723d7828d"
⏭️  Skipping duplicate: JID_e8887be7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e1178616..." not found, but found as SHA256 "590f8c838a4b205e"
⏭️  Skipping duplicate: JID_35fe4dcb (posted within 7 days)
[2026-01-30T21:59:17.973Z] [BOT] ✅ Loaded pending queue: 2928 total (2207 pending, 42 enriched, 679 posted)
[2026-01-30T21:59:18.153Z] [BOT] ✅ Saved pending queue: 2928 total (2207 pending, 32 enriched, 689 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T21:59:18.244Z] [BOT] 📂 Loaded 10770 existing routing entries
[2026-01-30T21:59:18.363Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10780
   Timestamp: 2026-01-30T21:59:18.330Z
[2026-01-30T21:59:18.365Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 35
   Successful: 13
   Failed: 0
   Skipped: 22
[2026-01-30T21:59:18.365Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T21:59:18.365Z] [BOT] Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🗽・JID_98d4f0de: 3 posts
     3. #💰・finance-jobs: 2 posts
[2026-01-30T21:59:18.365Z] [BOT] 4. #🤖・ai-jobs: 2 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-30T21:59:18.365Z] [BOT] [STATS] Channel stats saved
[2026-01-30T21:59:18.365Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 718 jobs in memory (cached)
[2026-01-30T21:59:18.398Z] [BOT] ✅ Loaded V2 database: 718 jobs
💾 DISK STATE: 718 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=718
💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 718 jobs (merged disk + memory)
✅ No jobs to archive (all 718 jobs within 7-day window)
[2026-01-30T21:59:18.443Z] [BOT] 💾 Saved posted_jobs.json: 718 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:59:18.443Z] [BOT] ✅ Database saved successfully
[2026-01-30T21:59:20.472Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*