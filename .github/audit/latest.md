# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T15:18:38.327Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T15:18:00.770Z] ========================================
[2026-01-30T15:18:00.772Z] Discord Bot Execution Log
[2026-01-30T15:18:00.772Z] Environment: GitHub Actions
[2026-01-30T15:18:00.772Z] Node Version: v20.20.0
[2026-01-30T15:18:00.772Z] ========================================
[2026-01-30T15:18:00.772Z] Environment Variables Check:
[2026-01-30T15:18:00.772Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T15:18:00.772Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.772Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T15:18:00.772Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T15:18:00.772Z] 
Multi-Channel Configuration:
[2026-01-30T15:18:00.772Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T15:18:00.773Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T15:18:00.773Z] 
Data Files Check:
[2026-01-30T15:18:00.774Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T15:18:00.794Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3201595 bytes)
[2026-01-30T15:18:00.794Z] 
========================================
[2026-01-30T15:18:00.794Z] Starting Enhanced Discord Bot...
[2026-01-30T15:18:00.794Z] ========================================
[2026-01-30T15:18:01.278Z] [BOT] ✅ Loaded V2 database: 497 jobs
[2026-01-30T15:18:01.628Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T15:18:01.629Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T15:18:01.629Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T15:18:01.790Z] [BOT] ✅ Loaded pending queue: 2915 total (2397 pending, 50 enriched, 468 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T15:18:01.790Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T15:18:01.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T15:18:01.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T15:18:01.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-30T15:18:01.791Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-30T15:18:01.791Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T15:18:01.791Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T15:18:01.791Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T15:18:01.793Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T15:18:01.796Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T15:18:01.796Z] [BOT] 🚫 Skipping blacklisted job: Manager, Commercial Sales Engineering (AMER - West) at datadog
[2026-01-30T15:18:01.796Z] [BOT] 🚫 Skipping blacklisted job: Manager, Customer Success - Denver at datadog
🚫 Skipping blacklisted job: Manager, Customer Success - Denver at datadog
🚫 Skipping blacklisted job: Manager I, Developer Advocacy at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Cloud Security - Findings Prioritization at datadog
[2026-01-30T15:18:01.796Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Engineering - Infrastructure Remediation at datadog
🚫 Skipping blacklisted job: Manager I, Engineering - Language Platform at datadog
[2026-01-30T15:18:01.797Z] [BOT] 🚫 Skipping blacklisted job: Manager II, Engineering - Bits AI Security Analyst at datadog
🚫 Skipping blacklisted job: Manager, Networking at datadog
🚫 Skipping blacklisted job: Manager, People Analytics Data Platform at datadog
🚫 Skipping blacklisted job: Partner Marketing Manager (Public Sector) at datadog
🚫 Skipping blacklisted job: Principal Partner Manager - Cloud Alliances (AWS) at datadog
[2026-01-30T15:18:01.940Z] [BOT] ✅ Loaded pending queue: 2915 total (2397 pending, 50 enriched, 468 posted)
[2026-01-30T15:18:02.112Z] [BOT] ✅ Saved pending queue: 2903 total (2397 pending, 38 enriched, 468 posted)
🗑️ Removed 12 blacklisted jobs from pending queue
📋 After blacklist filter: 24 jobs (12 blacklisted)
[2026-01-30T15:18:02.112Z] [BOT] 📋 After data quality filter: 24 jobs (0 invalid)
[2026-01-30T15:18:02.113Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-30T15:18:02.114Z] [BOT] (5 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Strategic Account Executive @ datadog: remote, chicago, illinois, usa
   - Enterprise Sales Executive @ datadog: remote, washington, district of columbia, usa
   - Mid Market Account Executive @ datadog: denver, colorado, usa, new york, new york, usa
   - Premier Support Engineer 2 @ datadog: san francisco, california, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T15:18:02.118Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T15:18:02.119Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
[2026-01-30T15:18:02.119Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:18:02.136Z] [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T15:18:02.392Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T15:18:02.392Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T15:18:02.393Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:18:02.393Z] [BOT] 💾 BEFORE MERGE: 498 jobs in memory (cached)
[2026-01-30T15:18:02.409Z] [BOT] ✅ Loaded V2 database: 497 jobs
💾 DISK STATE: 497 jobs on disk
[2026-01-30T15:18:02.410Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=498
[2026-01-30T15:18:02.411Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:18:02.411Z] [BOT] 💾 AFTER MERGE: 498 jobs (merged disk + memory)
[2026-01-30T15:18:02.412Z] [BOT] ✅ No jobs to archive (all 498 jobs within 7-day window)
[2026-01-30T15:18:02.452Z] [BOT] 💾 Saved posted_jobs.json: 498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:04.197Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #🏠・JID_ead674af
[2026-01-30T15:18:04.197Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
[2026-01-30T15:18:04.197Z] [BOT] 💾 BEFORE MERGE: 498 jobs in memory (cached)
[2026-01-30T15:18:04.215Z] [BOT] ✅ Loaded V2 database: 498 jobs
💾 DISK STATE: 498 jobs on disk
[2026-01-30T15:18:04.215Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=498
[2026-01-30T15:18:04.217Z] [BOT] 🔀 Deep merged: Strategic Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:18:04.217Z] [BOT] 💾 AFTER MERGE: 498 jobs (merged disk + memory)
[2026-01-30T15:18:04.217Z] [BOT] ✅ No jobs to archive (all 498 jobs within 7-day window)
[2026-01-30T15:18:04.252Z] [BOT] 💾 Saved posted_jobs.json: 498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:05.753Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
   Category: TECH (default)
[2026-01-30T15:18:05.753Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:18:05.978Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #💻・tech-jobs
[2026-01-30T15:18:05.978Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-30T15:18:05.978Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
[2026-01-30T15:18:05.978Z] [BOT] 💾 BEFORE MERGE: 499 jobs in memory (cached)
[2026-01-30T15:18:05.993Z] [BOT] ✅ Loaded V2 database: 498 jobs
💾 DISK STATE: 498 jobs on disk
[2026-01-30T15:18:05.993Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=499
[2026-01-30T15:18:05.994Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 499 jobs (merged disk + memory)
[2026-01-30T15:18:05.994Z] [BOT] ✅ No jobs to archive (all 499 jobs within 7-day window)
[2026-01-30T15:18:06.030Z] [BOT] 💾 Saved posted_jobs.json: 499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:07.802Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T15:18:07.802Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 499 jobs in memory (cached)
[2026-01-30T15:18:07.816Z] [BOT] ✅ Loaded V2 database: 499 jobs
💾 DISK STATE: 499 jobs on disk
[2026-01-30T15:18:07.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=499
[2026-01-30T15:18:07.818Z] [BOT] 🔀 Deep merged: Enterprise Sales Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:18:07.818Z] [BOT] 💾 AFTER MERGE: 499 jobs (merged disk + memory)
[2026-01-30T15:18:07.818Z] [BOT] ✅ No jobs to archive (all 499 jobs within 7-day window)
[2026-01-30T15:18:07.855Z] [BOT] 💾 Saved posted_jobs.json: 499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:09.356Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive (FED)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:18:09.565Z] [BOT] ✅ Posted message: Enterprise Sales Executive (FED) @ datadog in #💻・tech-jobs
  ✅ Industry: Enterprise Sales Executive (FED) @ datadog
[2026-01-30T15:18:09.565Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive (FED) @ datadog → category channel (1 total channels)
[2026-01-30T15:18:09.565Z] [BOT] 💾 BEFORE MERGE: 500 jobs in memory (cached)
[2026-01-30T15:18:09.580Z] [BOT] ✅ Loaded V2 database: 499 jobs
💾 DISK STATE: 499 jobs on disk
[2026-01-30T15:18:09.580Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=500
[2026-01-30T15:18:09.581Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:18:09.581Z] [BOT] 💾 AFTER MERGE: 500 jobs (merged disk + memory)
[2026-01-30T15:18:09.582Z] [BOT] ✅ No jobs to archive (all 500 jobs within 7-day window)
[2026-01-30T15:18:09.619Z] [BOT] 💾 Saved posted_jobs.json: 500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:11.776Z] [BOT] ✅ Posted message: Enterprise Sales Executive (FED) @ datadog in #🏠・JID_ead674af
[2026-01-30T15:18:11.777Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T15:18:11.777Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive (FED) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 500 jobs in memory (cached)
[2026-01-30T15:18:11.799Z] [BOT] ✅ Loaded V2 database: 500 jobs
💾 DISK STATE: 500 jobs on disk
[2026-01-30T15:18:11.799Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=500
[2026-01-30T15:18:11.800Z] [BOT] 🔀 Deep merged: Enterprise Sales Executive (FED) @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:18:11.800Z] [BOT] 💾 AFTER MERGE: 500 jobs (merged disk + memory)
[2026-01-30T15:18:11.801Z] [BOT] ✅ No jobs to archive (all 500 jobs within 7-day window)
[2026-01-30T15:18:11.845Z] [BOT] 💾 Saved posted_jobs.json: 500 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:13.346Z] [BOT] 📍 [ROUTING] "Enterprise Security Sales Specialist" @ datadog
[2026-01-30T15:18:13.346Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:18:13.494Z] [BOT] ✅ Posted message: Enterprise Security Sales Specialist @ datadog in #💻・tech-jobs
  ✅ Industry: Enterprise Security Sales Specialist @ datadog
[2026-01-30T15:18:13.495Z] [BOT] 💾 Added channel posting: Enterprise Security Sales Specialist @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 501 jobs in memory (cached)
[2026-01-30T15:18:13.509Z] [BOT] ✅ Loaded V2 database: 500 jobs
💾 DISK STATE: 500 jobs on disk
[2026-01-30T15:18:13.509Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=501
[2026-01-30T15:18:13.511Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:18:13.511Z] [BOT] 💾 AFTER MERGE: 501 jobs (merged disk + memory)
[2026-01-30T15:18:13.511Z] [BOT] ✅ No jobs to archive (all 501 jobs within 7-day window)
[2026-01-30T15:18:13.549Z] [BOT] 💾 Saved posted_jobs.json: 501 active jobs
[2026-01-30T15:18:13.550Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:15.050Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 2 - Denver" @ datadog
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:18:15.261Z] [BOT] ✅ Posted message: Federal Support Engineer 2 - Denver @ datadog in #💻・tech-jobs
  ✅ Industry: Federal Support Engineer 2 - Denver @ datadog
[2026-01-30T15:18:15.261Z] [BOT] 💾 Added channel posting: Federal Support Engineer 2 - Denver @ datadog → category channel (1 total channels)
[2026-01-30T15:18:15.261Z] [BOT] 💾 BEFORE MERGE: 502 jobs in memory (cached)
[2026-01-30T15:18:15.280Z] [BOT] ✅ Loaded V2 database: 501 jobs
💾 DISK STATE: 501 jobs on disk
[2026-01-30T15:18:15.280Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=502
[2026-01-30T15:18:15.281Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:18:15.281Z] [BOT] 💾 AFTER MERGE: 502 jobs (merged disk + memory)
[2026-01-30T15:18:15.281Z] [BOT] ✅ No jobs to archive (all 502 jobs within 7-day window)
[2026-01-30T15:18:15.317Z] [BOT] 💾 Saved posted_jobs.json: 502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:16.818Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 3 - Denver" @ datadog
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T15:18:16.819Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T15:18:17.411Z] [BOT] ✅ Posted message: Federal Support Engineer 3 - Denver @ datadog in #💻・tech-jobs
  ✅ Industry: Federal Support Engineer 3 - Denver @ datadog
[2026-01-30T15:18:17.411Z] [BOT] 💾 Added channel posting: Federal Support Engineer 3 - Denver @ datadog → category channel (1 total channels)
[2026-01-30T15:18:17.412Z] [BOT] 💾 BEFORE MERGE: 503 jobs in memory (cached)
[2026-01-30T15:18:17.426Z] [BOT] ✅ Loaded V2 database: 502 jobs
💾 DISK STATE: 502 jobs on disk
[2026-01-30T15:18:17.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=503
[2026-01-30T15:18:17.427Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 503 jobs (merged disk + memory)
[2026-01-30T15:18:17.428Z] [BOT] ✅ No jobs to archive (all 503 jobs within 7-day window)
[2026-01-30T15:18:17.470Z] [BOT] 💾 Saved posted_jobs.json: 503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:21.972Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2026-01-30T15:18:21.973Z] [BOT] 📍 [ROUTING] "Deal Desk Analyst - Denver" @ datadog
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T15:18:22.237Z] [BOT] ✅ Posted message: Deal Desk Analyst - Denver @ datadog in #💰・finance-jobs
  ✅ Industry: Deal Desk Analyst - Denver @ datadog
[2026-01-30T15:18:22.237Z] [BOT] 💾 Added channel posting: Deal Desk Analyst - Denver @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 504 jobs in memory (cached)
[2026-01-30T15:18:22.252Z] [BOT] ✅ Loaded V2 database: 503 jobs
💾 DISK STATE: 503 jobs on disk
[2026-01-30T15:18:22.252Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=504
[2026-01-30T15:18:22.253Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 504 jobs (merged disk + memory)
[2026-01-30T15:18:22.254Z] [BOT] ✅ No jobs to archive (all 504 jobs within 7-day window)
[2026-01-30T15:18:22.288Z] [BOT] 💾 Saved posted_jobs.json: 504 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:23.789Z] [BOT] 📍 [ROUTING] "Field CISO" @ datadog
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T15:18:23.996Z] [BOT] ✅ Posted message: Field CISO @ datadog in #💰・finance-jobs
  ✅ Industry: Field CISO @ datadog
[2026-01-30T15:18:23.996Z] [BOT] 💾 Added channel posting: Field CISO @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 505 jobs in memory (cached)
[2026-01-30T15:18:24.014Z] [BOT] ✅ Loaded V2 database: 504 jobs
💾 DISK STATE: 504 jobs on disk
[2026-01-30T15:18:24.014Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=505
[2026-01-30T15:18:24.015Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:18:24.016Z] [BOT] 💾 AFTER MERGE: 505 jobs (merged disk + memory)
[2026-01-30T15:18:24.016Z] [BOT] ✅ No jobs to archive (all 505 jobs within 7-day window)
[2026-01-30T15:18:24.051Z] [BOT] 💾 Saved posted_jobs.json: 505 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:25.554Z] [BOT] 📍 [ROUTING] "Field CTO - Media & Entertainment" @ datadog
[2026-01-30T15:18:25.554Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T15:18:25.738Z] [BOT] ✅ Posted message: Field CTO - Media & Entertainment @ datadog in #💰・finance-jobs
[2026-01-30T15:18:25.738Z] [BOT] ✅ Industry: Field CTO - Media & Entertainment @ datadog
[2026-01-30T15:18:25.738Z] [BOT] 💾 Added channel posting: Field CTO - Media & Entertainment @ datadog → category channel (1 total channels)
[2026-01-30T15:18:25.739Z] [BOT] 💾 BEFORE MERGE: 506 jobs in memory (cached)
[2026-01-30T15:18:25.753Z] [BOT] ✅ Loaded V2 database: 505 jobs
💾 DISK STATE: 505 jobs on disk
[2026-01-30T15:18:25.753Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=506
[2026-01-30T15:18:25.754Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 506 jobs (merged disk + memory)
[2026-01-30T15:18:25.755Z] [BOT] ✅ No jobs to archive (all 506 jobs within 7-day window)
[2026-01-30T15:18:25.788Z] [BOT] 💾 Saved posted_jobs.json: 506 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:27.290Z] [BOT] 📍 [ROUTING] "GTM Strategy and Operations Analyst - Channels & Alliances" @ datadog
   Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T15:18:28.514Z] [BOT] ✅ Posted message: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #💰・finance-jobs
  ✅ Industry: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog
[2026-01-30T15:18:28.514Z] [BOT] 💾 Added channel posting: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 507 jobs in memory (cached)
[2026-01-30T15:18:28.532Z] [BOT] ✅ Loaded V2 database: 506 jobs
💾 DISK STATE: 506 jobs on disk
[2026-01-30T15:18:28.532Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=507
[2026-01-30T15:18:28.533Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T15:18:28.533Z] [BOT] 💾 AFTER MERGE: 507 jobs (merged disk + memory)
[2026-01-30T15:18:28.533Z] [BOT] ✅ No jobs to archive (all 507 jobs within 7-day window)
[2026-01-30T15:18:28.568Z] [BOT] 💾 Saved posted_jobs.json: 507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:30.233Z] [BOT] ✅ Posted message: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T15:18:30.234Z] [BOT] 💾 Added channel posting: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 507 jobs in memory (cached)
[2026-01-30T15:18:30.248Z] [BOT] ✅ Loaded V2 database: 507 jobs
💾 DISK STATE: 507 jobs on disk
[2026-01-30T15:18:30.248Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=507
[2026-01-30T15:18:30.250Z] [BOT] 🔀 Deep merged: GTM Strategy and Operations Analyst - Channels & Alliances @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T15:18:30.250Z] [BOT] 💾 AFTER MERGE: 507 jobs (merged disk + memory)
[2026-01-30T15:18:30.250Z] [BOT] ✅ No jobs to archive (all 507 jobs within 7-day window)
[2026-01-30T15:18:30.284Z] [BOT] 💾 Saved posted_jobs.json: 507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:34.787Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T15:18:34.788Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4270e24..." not found, but found as SHA256 "4aafab5d6e9bd3f4"
[2026-01-30T15:18:34.788Z] [BOT] ⏭️  Skipping duplicate: JID_e4270e24 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_037ab154..." not found, but found as SHA256 "d532aa4618edadb3"
[2026-01-30T15:18:34.788Z] [BOT] ⏭️  Skipping duplicate: JID_037ab154 (posted within 7 days)
[2026-01-30T15:18:34.788Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_85c16ac2..." not found, but found as SHA256 "6acbfa18a378e076"
⏭️  Skipping duplicate: JID_85c16ac2 (posted within 7 days)
[2026-01-30T15:18:34.788Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_14fd43f8..." not found, but found as SHA256 "833dc10821c66a54"
⏭️  Skipping duplicate: JID_14fd43f8 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_29b543dd..." not found, but found as SHA256 "aef0a0ec36c92b9e"
⏭️  Skipping duplicate: JID_29b543dd (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9271b02d..." not found, but found as SHA256 "3a75464e97e9f126"
[2026-01-30T15:18:34.788Z] [BOT] ⏭️  Skipping duplicate: JID_9271b02d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_991a0636..." not found, but found as SHA256 "eb5893ccabfbef8a"
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-30T15:18:34.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7de3b3fa..." not found, but found as SHA256 "eb11e4fa970e997f"
[2026-01-30T15:18:34.789Z] [BOT] ⏭️  Skipping duplicate: JID_7de3b3fa (posted within 7 days)
[2026-01-30T15:18:34.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_96b2c378..." not found, but found as SHA256 "50929f84f9515735"
⏭️  Skipping duplicate: JID_96b2c378 (posted within 7 days)
[2026-01-30T15:18:34.789Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d9e3e533..." not found, but found as SHA256 "0f0610bfbc86412f"
[2026-01-30T15:18:34.789Z] [BOT] ⏭️  Skipping duplicate: JID_d9e3e533 (posted within 7 days)
[2026-01-30T15:18:34.936Z] [BOT] ✅ Loaded pending queue: 2903 total (2397 pending, 38 enriched, 468 posted)
[2026-01-30T15:18:35.119Z] [BOT] ✅ Saved pending queue: 2903 total (2397 pending, 28 enriched, 478 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T15:18:35.217Z] [BOT] 📂 Loaded 10559 existing routing entries
[2026-01-30T15:18:35.354Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10569
   Timestamp: 2026-01-30T15:18:35.317Z
[2026-01-30T15:18:35.355Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T15:18:35.355Z] [BOT] Total attempts: 40
   Successful: 14
   Failed: 0
   Skipped: 26
[2026-01-30T15:18:35.355Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
[2026-01-30T15:18:35.355Z] [BOT] Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #💰・finance-jobs: 4 posts
     3. #🏠・JID_ead674af: 3 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T15:18:35.355Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 507 jobs in memory (cached)
[2026-01-30T15:18:35.371Z] [BOT] ✅ Loaded V2 database: 507 jobs
💾 DISK STATE: 507 jobs on disk
[2026-01-30T15:18:35.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=507
[2026-01-30T15:18:35.373Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 507 jobs (merged disk + memory)
[2026-01-30T15:18:35.373Z] [BOT] ✅ No jobs to archive (all 507 jobs within 7-day window)
[2026-01-30T15:18:35.408Z] [BOT] 💾 Saved posted_jobs.json: 507 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T15:18:35.408Z] [BOT] ✅ Database saved successfully
[2026-01-30T15:18:37.430Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*