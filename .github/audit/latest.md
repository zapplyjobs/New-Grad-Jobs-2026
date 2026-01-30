# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T18:34:53.673Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T18:34:15.320Z] ========================================
[2026-01-30T18:34:15.322Z] Discord Bot Execution Log
[2026-01-30T18:34:15.322Z] Environment: GitHub Actions
[2026-01-30T18:34:15.322Z] Node Version: v20.20.0
[2026-01-30T18:34:15.322Z] ========================================
[2026-01-30T18:34:15.322Z] Environment Variables Check:
[2026-01-30T18:34:15.322Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T18:34:15.322Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.322Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T18:34:15.322Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T18:34:15.322Z] 
Multi-Channel Configuration:
[2026-01-30T18:34:15.323Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T18:34:15.323Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T18:34:15.323Z] 
Data Files Check:
[2026-01-30T18:34:15.324Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T18:34:15.348Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3855700 bytes)
[2026-01-30T18:34:15.348Z] 
========================================
[2026-01-30T18:34:15.348Z] Starting Enhanced Discord Bot...
[2026-01-30T18:34:15.348Z] ========================================
[2026-01-30T18:34:15.883Z] [BOT] ✅ Loaded V2 database: 597 jobs
[2026-01-30T18:34:16.329Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T18:34:16.330Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T18:34:16.330Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T18:34:16.449Z] [BOT] ✅ Loaded pending queue: 2927 total (2309 pending, 50 enriched, 568 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T18:34:16.449Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T18:34:16.449Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T18:34:16.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T18:34:16.450Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T18:34:16.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T18:34:16.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T18:34:16.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T18:34:16.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T18:34:16.451Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T18:34:16.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T18:34:16.452Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T18:34:16.452Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T18:34:16.456Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T18:34:16.457Z] [BOT] 🚫 Skipping blacklisted job: Manager of Account Development at samsara
[2026-01-30T18:34:16.558Z] [BOT] ✅ Loaded pending queue: 2927 total (2309 pending, 50 enriched, 568 posted)
[2026-01-30T18:34:16.724Z] [BOT] ✅ Saved pending queue: 2926 total (2309 pending, 49 enriched, 568 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-30T18:34:16.725Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-30T18:34:16.725Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-30T18:34:16.725Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-30T18:34:16.726Z] [BOT] (23 grouped as same job with different locations)
📍 5 jobs with multiple locations:
   - Account Executive, Commercial @ samsara: columbus, seattle, san diego, salt lake, los angeles, denver, boston, phoenix, arizona, portland
[2026-01-30T18:34:16.726Z] [BOT] - Core Enterprise Account Executive EST/CST - Remote - Chicago, IL @ samsara: chicago, dallas, houston, texas
   - Mid-Market Account Development Representative - Outbound @ samsara: phoenix, atlanta
   -  Mid-Market Account Executive - PubSec @ samsara: boston, charleston, salt lake, denver, baltimore, chicago, houston, texas, dallas, san antonio, louisville
   - Select Major Account Executive EST/CST @ samsara: chicago, milwaukee, atlanta
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T18:34:16.730Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T18:34:16.731Z] [BOT] 📍 [ROUTING] "Account Executive, E-Commerce " @ brex
[2026-01-30T18:34:16.731Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T18:34:16.749Z] [BOT ERROR] (node:3135) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T18:34:16.899Z] [BOT] ✅ Posted message: Account Executive, E-Commerce  @ brex in #💰・finance-jobs
[2026-01-30T18:34:16.899Z] [BOT] ✅ Industry: Account Executive, E-Commerce  @ brex
[2026-01-30T18:34:16.899Z] [BOT] 💾 Added channel posting: Account Executive, E-Commerce  @ brex → category channel (1 total channels)
[2026-01-30T18:34:16.900Z] [BOT] 💾 BEFORE MERGE: 598 jobs in memory (cached)
[2026-01-30T18:34:16.913Z] [BOT] ✅ Loaded V2 database: 597 jobs
💾 DISK STATE: 597 jobs on disk
[2026-01-30T18:34:16.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=598
[2026-01-30T18:34:16.915Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:34:16.915Z] [BOT] 💾 AFTER MERGE: 598 jobs (merged disk + memory)
[2026-01-30T18:34:16.916Z] [BOT] ✅ No jobs to archive (all 598 jobs within 7-day window)
[2026-01-30T18:34:16.968Z] [BOT] 💾 Saved posted_jobs.json: 598 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:18.795Z] [BOT] ✅ Posted message: Account Executive, E-Commerce  @ brex in #🗽・JID_98d4f0de
[2026-01-30T18:34:18.795Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T18:34:18.796Z] [BOT] 💾 Added channel posting: Account Executive, E-Commerce  @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 598 jobs in memory (cached)
[2026-01-30T18:34:18.807Z] [BOT] ✅ Loaded V2 database: 598 jobs
[2026-01-30T18:34:18.807Z] [BOT] 💾 DISK STATE: 598 jobs on disk
[2026-01-30T18:34:18.807Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=598
[2026-01-30T18:34:18.809Z] [BOT] 🔀 Deep merged: Account Executive, E-Commerce  @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T18:34:18.809Z] [BOT] 💾 AFTER MERGE: 598 jobs (merged disk + memory)
[2026-01-30T18:34:18.809Z] [BOT] ✅ No jobs to archive (all 598 jobs within 7-day window)
[2026-01-30T18:34:18.847Z] [BOT] 💾 Saved posted_jobs.json: 598 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:23.349Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-30T18:34:23.349Z] [BOT] 📍 [ROUTING] "Account Development Representative (New Grad) " @ samsara
[2026-01-30T18:34:23.349Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:23.513Z] [BOT] ✅ Posted message: Account Development Representative (New Grad)  @ samsara in #💻・tech-jobs
[2026-01-30T18:34:23.513Z] [BOT] ✅ Industry: Account Development Representative (New Grad)  @ samsara
[2026-01-30T18:34:23.513Z] [BOT] 💾 Added channel posting: Account Development Representative (New Grad)  @ samsara → category channel (1 total channels)
[2026-01-30T18:34:23.514Z] [BOT] 💾 BEFORE MERGE: 599 jobs in memory (cached)
[2026-01-30T18:34:23.525Z] [BOT] ✅ Loaded V2 database: 598 jobs
💾 DISK STATE: 598 jobs on disk
[2026-01-30T18:34:23.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=599
[2026-01-30T18:34:23.526Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:34:23.526Z] [BOT] 💾 AFTER MERGE: 599 jobs (merged disk + memory)
[2026-01-30T18:34:23.527Z] [BOT] ✅ No jobs to archive (all 599 jobs within 7-day window)
[2026-01-30T18:34:23.564Z] [BOT] 💾 Saved posted_jobs.json: 599 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:25.066Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-30T18:34:25.067Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:25.235Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
[2026-01-30T18:34:25.235Z] [BOT] ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T18:34:25.235Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 600 jobs in memory (cached)
[2026-01-30T18:34:25.255Z] [BOT] ✅ Loaded V2 database: 599 jobs
💾 DISK STATE: 599 jobs on disk
[2026-01-30T18:34:25.256Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=600
[2026-01-30T18:34:25.257Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:34:25.257Z] [BOT] 💾 AFTER MERGE: 600 jobs (merged disk + memory)
[2026-01-30T18:34:25.257Z] [BOT] ✅ No jobs to archive (all 600 jobs within 7-day window)
[2026-01-30T18:34:25.306Z] [BOT] 💾 Saved posted_jobs.json: 600 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:26.809Z] [BOT] 📍 [ROUTING] "Enterprise Account Development Representative - Outbound" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:27.022Z] [BOT] ✅ Posted message: Enterprise Account Development Representative - Outbound @ samsara in #💻・tech-jobs
  ✅ Industry: Enterprise Account Development Representative - Outbound @ samsara
[2026-01-30T18:34:27.023Z] [BOT] 💾 Added channel posting: Enterprise Account Development Representative - Outbound @ samsara → category channel (1 total channels)
[2026-01-30T18:34:27.023Z] [BOT] 💾 BEFORE MERGE: 601 jobs in memory (cached)
[2026-01-30T18:34:27.034Z] [BOT] ✅ Loaded V2 database: 600 jobs
💾 DISK STATE: 600 jobs on disk
[2026-01-30T18:34:27.035Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=601
[2026-01-30T18:34:27.036Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 601 jobs (merged disk + memory)
[2026-01-30T18:34:27.037Z] [BOT] ✅ No jobs to archive (all 601 jobs within 7-day window)
[2026-01-30T18:34:27.081Z] [BOT] 💾 Saved posted_jobs.json: 601 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:28.794Z] [BOT] ✅ Posted message: Enterprise Account Development Representative - Outbound @ samsara in #🏠・JID_ead674af
[2026-01-30T18:34:28.794Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T18:34:28.794Z] [BOT] 💾 Added channel posting: Enterprise Account Development Representative - Outbound @ samsara → location channel (2 total channels)
💾 BEFORE MERGE: 601 jobs in memory (cached)
[2026-01-30T18:34:28.806Z] [BOT] ✅ Loaded V2 database: 601 jobs
💾 DISK STATE: 601 jobs on disk
[2026-01-30T18:34:28.806Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=601
[2026-01-30T18:34:28.807Z] [BOT] 🔀 Deep merged: Enterprise Account Development Representative - Outbound @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 601 jobs (merged disk + memory)
[2026-01-30T18:34:28.808Z] [BOT] ✅ No jobs to archive (all 601 jobs within 7-day window)
[2026-01-30T18:34:28.844Z] [BOT] 💾 Saved posted_jobs.json: 601 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:30.345Z] [BOT] 📍 [ROUTING] "Enterprise Business Development Representative- Outbound" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:30.599Z] [BOT] ✅ Posted message: Enterprise Business Development Representative- Outbound @ samsara in #💻・tech-jobs
[2026-01-30T18:34:30.599Z] [BOT] ✅ Industry: Enterprise Business Development Representative- Outbound @ samsara
[2026-01-30T18:34:30.599Z] [BOT] 💾 Added channel posting: Enterprise Business Development Representative- Outbound @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 602 jobs in memory (cached)
[2026-01-30T18:34:30.611Z] [BOT] ✅ Loaded V2 database: 601 jobs
💾 DISK STATE: 601 jobs on disk
[2026-01-30T18:34:30.611Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=602
[2026-01-30T18:34:30.612Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 602 jobs (merged disk + memory)
[2026-01-30T18:34:30.613Z] [BOT] ✅ No jobs to archive (all 602 jobs within 7-day window)
[2026-01-30T18:34:30.656Z] [BOT] 💾 Saved posted_jobs.json: 602 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:32.336Z] [BOT] ✅ Posted message: Enterprise Business Development Representative- Outbound @ samsara in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T18:34:32.337Z] [BOT] 💾 Added channel posting: Enterprise Business Development Representative- Outbound @ samsara → location channel (2 total channels)
💾 BEFORE MERGE: 602 jobs in memory (cached)
[2026-01-30T18:34:32.348Z] [BOT] ✅ Loaded V2 database: 602 jobs
💾 DISK STATE: 602 jobs on disk
[2026-01-30T18:34:32.348Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=602
[2026-01-30T18:34:32.350Z] [BOT] 🔀 Deep merged: Enterprise Business Development Representative- Outbound @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T18:34:32.350Z] [BOT] 💾 AFTER MERGE: 602 jobs (merged disk + memory)
[2026-01-30T18:34:32.350Z] [BOT] ✅ No jobs to archive (all 602 jobs within 7-day window)
[2026-01-30T18:34:32.388Z] [BOT] 💾 Saved posted_jobs.json: 602 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:33.889Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:34.060Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant @ samsara in #💻・tech-jobs
  ✅ Industry: Enterprise Implementation Consultant @ samsara
[2026-01-30T18:34:34.060Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant @ samsara → category channel (1 total channels)
[2026-01-30T18:34:34.061Z] [BOT] 💾 BEFORE MERGE: 603 jobs in memory (cached)
[2026-01-30T18:34:34.073Z] [BOT] ✅ Loaded V2 database: 602 jobs
💾 DISK STATE: 602 jobs on disk
[2026-01-30T18:34:34.073Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=603
[2026-01-30T18:34:34.074Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:34:34.074Z] [BOT] 💾 AFTER MERGE: 603 jobs (merged disk + memory)
[2026-01-30T18:34:34.075Z] [BOT] ✅ No jobs to archive (all 603 jobs within 7-day window)
[2026-01-30T18:34:34.119Z] [BOT] 💾 Saved posted_jobs.json: 603 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:35.811Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant @ samsara in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T18:34:35.812Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant @ samsara → location channel (2 total channels)
💾 BEFORE MERGE: 603 jobs in memory (cached)
[2026-01-30T18:34:35.823Z] [BOT] ✅ Loaded V2 database: 603 jobs
💾 DISK STATE: 603 jobs on disk
[2026-01-30T18:34:35.823Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=603
[2026-01-30T18:34:35.825Z] [BOT] 🔀 Deep merged: Enterprise Implementation Consultant @ samsara (disk: 1 channels → merged: 2 channels)
[2026-01-30T18:34:35.825Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 603 jobs (merged disk + memory)
[2026-01-30T18:34:35.825Z] [BOT] ✅ No jobs to archive (all 603 jobs within 7-day window)
[2026-01-30T18:34:35.862Z] [BOT] 💾 Saved posted_jobs.json: 603 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:37.365Z] [BOT] 📍 [ROUTING] "Hardware Solutions Firmware Engineer" @ samsara
[2026-01-30T18:34:37.365Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:37.501Z] [BOT] ✅ Posted message: Hardware Solutions Firmware Engineer @ samsara in #💻・tech-jobs
  ✅ Industry: Hardware Solutions Firmware Engineer @ samsara
[2026-01-30T18:34:37.502Z] [BOT] 💾 Added channel posting: Hardware Solutions Firmware Engineer @ samsara → category channel (1 total channels)
[2026-01-30T18:34:37.502Z] [BOT] 💾 BEFORE MERGE: 604 jobs in memory (cached)
[2026-01-30T18:34:37.513Z] [BOT] ✅ Loaded V2 database: 603 jobs
💾 DISK STATE: 603 jobs on disk
[2026-01-30T18:34:37.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=604
[2026-01-30T18:34:37.515Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:34:37.515Z] [BOT] 💾 AFTER MERGE: 604 jobs (merged disk + memory)
[2026-01-30T18:34:37.515Z] [BOT] ✅ No jobs to archive (all 604 jobs within 7-day window)
[2026-01-30T18:34:37.553Z] [BOT] 💾 Saved posted_jobs.json: 604 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:39.054Z] [BOT] 📍 [ROUTING] "Mid-Market Account Development Representative - Outbound" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:39.235Z] [BOT] ✅ Posted message: Mid-Market Account Development Representative - Outbound @ samsara in #💻・tech-jobs
  ✅ Industry: Mid-Market Account Development Representative - Outbound @ samsara
[2026-01-30T18:34:39.235Z] [BOT] 💾 Added channel posting: Mid-Market Account Development Representative - Outbound @ samsara → category channel (1 total channels)
[2026-01-30T18:34:39.236Z] [BOT] 💾 BEFORE MERGE: 605 jobs in memory (cached)
[2026-01-30T18:34:39.248Z] [BOT] ✅ Loaded V2 database: 604 jobs
💾 DISK STATE: 604 jobs on disk
[2026-01-30T18:34:39.248Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=605
[2026-01-30T18:34:39.250Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 605 jobs (merged disk + memory)
[2026-01-30T18:34:39.250Z] [BOT] ✅ No jobs to archive (all 605 jobs within 7-day window)
[2026-01-30T18:34:39.295Z] [BOT] 💾 Saved posted_jobs.json: 605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:40.797Z] [BOT] 📍 [ROUTING] " Mid-Market Account Executive - PubSec" @ samsara
[2026-01-30T18:34:40.798Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:34:41.050Z] [BOT] ✅ Posted message:  Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T18:34:41.050Z] [BOT] ✅ Industry:  Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T18:34:41.050Z] [BOT] 💾 Added channel posting:  Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
[2026-01-30T18:34:41.050Z] [BOT] 💾 BEFORE MERGE: 606 jobs in memory (cached)
[2026-01-30T18:34:41.062Z] [BOT] ✅ Loaded V2 database: 605 jobs
💾 DISK STATE: 605 jobs on disk
[2026-01-30T18:34:41.062Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=606
[2026-01-30T18:34:41.063Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 606 jobs (merged disk + memory)
[2026-01-30T18:34:41.064Z] [BOT] ✅ No jobs to archive (all 606 jobs within 7-day window)
[2026-01-30T18:34:41.101Z] [BOT] 💾 Saved posted_jobs.json: 606 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:45.602Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T18:34:45.603Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Chicago, IL" @ samsara
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-30T18:34:45.603Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T18:34:45.783Z] [BOT] ✅ Posted message: Core Enterprise Account Executive EST/CST - Remote - Chicago, IL @ samsara in #📊・JID_fb739488
  ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Chicago, IL @ samsara
[2026-01-30T18:34:45.783Z] [BOT] 💾 Added channel posting: Core Enterprise Account Executive EST/CST - Remote - Chicago, IL @ samsara → category channel (1 total channels)
[2026-01-30T18:34:45.783Z] [BOT] 💾 BEFORE MERGE: 607 jobs in memory (cached)
[2026-01-30T18:34:45.795Z] [BOT] ✅ Loaded V2 database: 606 jobs
💾 DISK STATE: 606 jobs on disk
[2026-01-30T18:34:45.796Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=607
[2026-01-30T18:34:45.797Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:34:45.797Z] [BOT] 💾 AFTER MERGE: 607 jobs (merged disk + memory)
[2026-01-30T18:34:45.797Z] [BOT] ✅ No jobs to archive (all 607 jobs within 7-day window)
[2026-01-30T18:34:45.843Z] [BOT] 💾 Saved posted_jobs.json: 607 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:50.345Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T18:34:50.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5e359b3d..." not found, but found as SHA256 "a04800ab88196406"
⏭️  Skipping duplicate: JID_5e359b3d (posted within 7 days)
[2026-01-30T18:34:50.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f493e09c..." not found, but found as SHA256 "d553862543b3bb80"
⏭️  Skipping duplicate: JID_4b746533 (posted within 7 days)
[2026-01-30T18:34:50.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "7fe30fbe88d8b57c"
⏭️  Skipping duplicate: JID_70e975da (posted within 7 days)
[2026-01-30T18:34:50.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "a823607854aa69d6"
[2026-01-30T18:34:50.347Z] [BOT] ⏭️  Skipping duplicate: JID_e1a019ae (posted within 7 days)
[2026-01-30T18:34:50.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "0262778e71d3abb4"
[2026-01-30T18:34:50.347Z] [BOT] ⏭️  Skipping duplicate: JID_97f60550 (posted within 7 days)
[2026-01-30T18:34:50.347Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "843fdf1f9d9b7c7f"
⏭️  Skipping duplicate: JID_7f77c8d1 (posted within 7 days)
[2026-01-30T18:34:50.348Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "b3a5dd1b34e789c1"
⏭️  Skipping duplicate: JID_ff256bbe (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "1a72a69f9551ebea"
⏭️  Skipping duplicate: JID_b46f8a25 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "5396b9503a1ac0b3"
⏭️  Skipping duplicate: JID_79ed2142 (posted within 7 days)
[2026-01-30T18:34:50.348Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd557031..." not found, but found as SHA256 "0a646b9209512a00"
⏭️  Skipping duplicate: JID_efed3126 (posted within 7 days)
[2026-01-30T18:34:50.454Z] [BOT] ✅ Loaded pending queue: 2926 total (2309 pending, 49 enriched, 568 posted)
[2026-01-30T18:34:50.632Z] [BOT] ✅ Saved pending queue: 2926 total (2309 pending, 39 enriched, 578 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T18:34:50.716Z] [BOT] 📂 Loaded 10659 existing routing entries
[2026-01-30T18:34:50.852Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T18:34:50.852Z] [BOT] New entries: 10
   Total entries: 10669
   Timestamp: 2026-01-30T18:34:50.809Z
[2026-01-30T18:34:50.852Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T18:34:50.853Z] [BOT] Total attempts: 29
   Successful: 14
   Failed: 0
   Skipped: 15
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🏠・JID_ead674af: 3 posts
     3. #💰・finance-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-30T18:34:50.853Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 607 jobs in memory (cached)
[2026-01-30T18:34:50.867Z] [BOT] ✅ Loaded V2 database: 607 jobs
💾 DISK STATE: 607 jobs on disk
[2026-01-30T18:34:50.867Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=607
[2026-01-30T18:34:50.868Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:34:50.868Z] [BOT] 💾 AFTER MERGE: 607 jobs (merged disk + memory)
[2026-01-30T18:34:50.869Z] [BOT] ✅ No jobs to archive (all 607 jobs within 7-day window)
[2026-01-30T18:34:50.906Z] [BOT] 💾 Saved posted_jobs.json: 607 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:34:50.906Z] [BOT] ✅ Database saved successfully
[2026-01-30T18:34:52.939Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3135) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*