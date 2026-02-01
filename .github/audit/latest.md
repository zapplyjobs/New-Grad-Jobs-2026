# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T03:47:13.232Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T03:46:27.447Z] ========================================
[2026-02-01T03:46:27.449Z] Discord Bot Execution Log
[2026-02-01T03:46:27.449Z] Environment: GitHub Actions
[2026-02-01T03:46:27.449Z] Node Version: v20.20.0
[2026-02-01T03:46:27.449Z] ========================================
[2026-02-01T03:46:27.450Z] Environment Variables Check:
[2026-02-01T03:46:27.450Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T03:46:27.450Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.450Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T03:46:27.450Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T03:46:27.450Z] 
Multi-Channel Configuration:
[2026-02-01T03:46:27.450Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.450Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.450Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.450Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.450Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.451Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.451Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.451Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.451Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-02-01T03:46:27.451Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T03:46:27.451Z] 
Data Files Check:
[2026-02-01T03:46:27.452Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64667 bytes)
[2026-02-01T03:46:27.498Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8888787 bytes)
[2026-02-01T03:46:27.498Z] 
========================================
[2026-02-01T03:46:27.498Z] Starting Enhanced Discord Bot...
[2026-02-01T03:46:27.498Z] ========================================
[2026-02-01T03:46:28.078Z] [BOT] ✅ Loaded V2 database: 1587 jobs
[2026-02-01T03:46:28.617Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T03:46:28.617Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T03:46:28.617Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T03:46:28.725Z] [BOT] ✅ Loaded pending queue: 2942 total (1315 pending, 50 enriched, 1577 posted)
[2026-02-01T03:46:28.726Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T03:46:28.727Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T03:46:28.727Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T03:46:28.727Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T03:46:28.728Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T03:46:28.728Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T03:46:28.728Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T03:46:28.728Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T03:46:28.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T03:46:28.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T03:46:28.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T03:46:28.729Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T03:46:28.731Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T03:46:28.742Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T03:46:28.742Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at Prairie View A&M University
[2026-02-01T03:46:28.743Z] [BOT] 🚫 Skipping blacklisted job: Manager - BDR at gohighlevel
[2026-02-01T03:46:28.862Z] [BOT] ✅ Loaded pending queue: 2942 total (1315 pending, 50 enriched, 1577 posted)
[2026-02-01T03:46:29.060Z] [BOT] ✅ Saved pending queue: 2940 total (1315 pending, 48 enriched, 1577 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-02-01T03:46:29.061Z] [BOT] 📋 After blacklist filter: 40 jobs (2 blacklisted)
📋 After data quality filter: 40 jobs (0 invalid)
[2026-02-01T03:46:29.062Z] [BOT] 📋 After multi-location grouping: 39 unique jobs to post
[2026-02-01T03:46:29.062Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-01T03:46:29.062Z] [BOT] - Software Engineer Graduate - Inference Infrastructure - 2026 Start','Phd @ ByteDance: san jose, seattle
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T03:46:29.065Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-01T03:46:29.066Z] [BOT] 📍 [ROUTING] "Machine Learning Fellowship" @ 10a Labs
   Category: AI (matched: "machine learning")
[2026-02-01T03:46:29.066Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T03:46:29.084Z] [BOT ERROR] (node:2891) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T03:46:29.364Z] [BOT] ✅ Posted message: Machine Learning Fellowship @ 10a Labs in #🤖・ai-jobs
[2026-02-01T03:46:29.365Z] [BOT] ✅ Industry: Machine Learning Fellowship @ 10a Labs
[2026-02-01T03:46:29.366Z] [BOT] 💾 Added channel posting: Machine Learning Fellowship @ 10a Labs → category channel (1 total channels)
[2026-02-01T03:46:29.366Z] [BOT] 💾 BEFORE MERGE: 1588 jobs in memory (cached)
[2026-02-01T03:46:29.403Z] [BOT] ✅ Loaded V2 database: 1587 jobs
💾 DISK STATE: 1587 jobs on disk
[2026-02-01T03:46:29.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1588
[2026-02-01T03:46:29.408Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:29.408Z] [BOT] 💾 AFTER MERGE: 1588 jobs (merged disk + memory)
[2026-02-01T03:46:29.409Z] [BOT] ✅ No jobs to archive (all 1588 jobs within 7-day window)
[2026-02-01T03:46:29.507Z] [BOT] 💾 Saved posted_jobs.json: 1588 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:31.312Z] [BOT] ✅ Posted message: Machine Learning Fellowship @ 10a Labs in #🗽・JID_98d4f0de
[2026-02-01T03:46:31.312Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T03:46:31.312Z] [BOT] 💾 Added channel posting: Machine Learning Fellowship @ 10a Labs → location channel (2 total channels)
[2026-02-01T03:46:31.312Z] [BOT] 💾 BEFORE MERGE: 1588 jobs in memory (cached)
[2026-02-01T03:46:31.344Z] [BOT] ✅ Loaded V2 database: 1588 jobs
[2026-02-01T03:46:31.344Z] [BOT] 💾 DISK STATE: 1588 jobs on disk
[2026-02-01T03:46:31.344Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1588
[2026-02-01T03:46:31.348Z] [BOT] 🔀 Deep merged: Machine Learning Fellowship @ 10a Labs (disk: 1 channels → merged: 2 channels)
[2026-02-01T03:46:31.348Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1588 jobs (merged disk + memory)
[2026-02-01T03:46:31.349Z] [BOT] ✅ No jobs to archive (all 1588 jobs within 7-day window)
[2026-02-01T03:46:31.438Z] [BOT] 💾 Saved posted_jobs.json: 1588 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:32.940Z] [BOT] 📍 [ROUTING] "Entry Level Engineer" @ ORG_fdffd77e
[2026-02-01T03:46:32.940Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T03:46:33.346Z] [BOT] ✅ Posted message: Entry Level Engineer @ ORG_fdffd77e in #🤖・ai-jobs
[2026-02-01T03:46:33.346Z] [BOT] ✅ Industry: Entry Level Engineer @ ORG_fdffd77e
[2026-02-01T03:46:33.347Z] [BOT] 💾 Added channel posting: Entry Level Engineer @ ORG_fdffd77e → category channel (1 total channels)
[2026-02-01T03:46:33.347Z] [BOT] 💾 BEFORE MERGE: 1589 jobs in memory (cached)
[2026-02-01T03:46:33.378Z] [BOT] ✅ Loaded V2 database: 1588 jobs
💾 DISK STATE: 1588 jobs on disk
[2026-02-01T03:46:33.379Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1589
[2026-02-01T03:46:33.382Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:33.382Z] [BOT] 💾 AFTER MERGE: 1589 jobs (merged disk + memory)
[2026-02-01T03:46:33.383Z] [BOT] ✅ No jobs to archive (all 1589 jobs within 7-day window)
[2026-02-01T03:46:33.467Z] [BOT] 💾 Saved posted_jobs.json: 1589 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:35.247Z] [BOT] ✅ Posted message: Entry Level Engineer @ ORG_fdffd77e in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T03:46:35.247Z] [BOT] 💾 Added channel posting: Entry Level Engineer @ ORG_fdffd77e → location channel (2 total channels)
💾 BEFORE MERGE: 1589 jobs in memory (cached)
[2026-02-01T03:46:35.282Z] [BOT] ✅ Loaded V2 database: 1589 jobs
💾 DISK STATE: 1589 jobs on disk
[2026-02-01T03:46:35.283Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1589
[2026-02-01T03:46:35.286Z] [BOT] 🔀 Deep merged: Entry Level Engineer @ ORG_fdffd77e (disk: 1 channels → merged: 2 channels)
[2026-02-01T03:46:35.286Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1589 jobs (merged disk + memory)
[2026-02-01T03:46:35.287Z] [BOT] ✅ No jobs to archive (all 1589 jobs within 7-day window)
[2026-02-01T03:46:35.390Z] [BOT] 💾 Saved posted_jobs.json: 1589 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:36.891Z] [BOT] 📍 [ROUTING] "Assistant Professor" @ ORG_f19d0512 Polytechnic Institute
   Category: AI (matched: "machine learning")
[2026-02-01T03:46:36.892Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T03:46:37.085Z] [BOT] ✅ Posted message: Assistant Professor @ ORG_f19d0512 Polytechnic Institute in #🤖・ai-jobs
  ✅ Industry: Assistant Professor @ ORG_f19d0512 Polytechnic Institute
[2026-02-01T03:46:37.086Z] [BOT] 💾 Added channel posting: Assistant Professor @ ORG_f19d0512 Polytechnic Institute → category channel (1 total channels)
[2026-02-01T03:46:37.086Z] [BOT] 💾 BEFORE MERGE: 1590 jobs in memory (cached)
[2026-02-01T03:46:37.117Z] [BOT] ✅ Loaded V2 database: 1589 jobs
💾 DISK STATE: 1589 jobs on disk
[2026-02-01T03:46:37.117Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1590
[2026-02-01T03:46:37.120Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:37.120Z] [BOT] 💾 AFTER MERGE: 1590 jobs (merged disk + memory)
[2026-02-01T03:46:37.121Z] [BOT] ✅ No jobs to archive (all 1590 jobs within 7-day window)
[2026-02-01T03:46:37.226Z] [BOT] 💾 Saved posted_jobs.json: 1590 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:38.926Z] [BOT] ✅ Posted message: Assistant Professor @ ORG_f19d0512 Polytechnic Institute in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T03:46:38.927Z] [BOT] 💾 Added channel posting: Assistant Professor @ ORG_f19d0512 Polytechnic Institute → location channel (2 total channels)
[2026-02-01T03:46:38.927Z] [BOT] 💾 BEFORE MERGE: 1590 jobs in memory (cached)
[2026-02-01T03:46:38.957Z] [BOT] ✅ Loaded V2 database: 1590 jobs
💾 DISK STATE: 1590 jobs on disk
[2026-02-01T03:46:38.957Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1590
[2026-02-01T03:46:38.960Z] [BOT] 🔀 Deep merged: Assistant Professor @ ORG_f19d0512 Polytechnic Institute (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T03:46:38.960Z] [BOT] 💾 AFTER MERGE: 1590 jobs (merged disk + memory)
[2026-02-01T03:46:38.961Z] [BOT] ✅ No jobs to archive (all 1590 jobs within 7-day window)
[2026-02-01T03:46:39.043Z] [BOT] 💾 Saved posted_jobs.json: 1590 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:40.545Z] [BOT] 📍 [ROUTING] "Mercury Ignite Data Science Graduate Development Program" @ ORG_6a7367ef Insurance
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T03:46:40.545Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-01T03:46:40.812Z] [BOT] ✅ Posted message: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance in #🤖・ai-jobs
[2026-02-01T03:46:40.812Z] [BOT] ✅ Industry: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance
[2026-02-01T03:46:40.813Z] [BOT] 💾 Added channel posting: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance → category channel (1 total channels)
💾 BEFORE MERGE: 1591 jobs in memory (cached)
[2026-02-01T03:46:40.843Z] [BOT] ✅ Loaded V2 database: 1590 jobs
💾 DISK STATE: 1590 jobs on disk
[2026-02-01T03:46:40.843Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1591
[2026-02-01T03:46:40.846Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:40.846Z] [BOT] 💾 AFTER MERGE: 1591 jobs (merged disk + memory)
[2026-02-01T03:46:40.847Z] [BOT] ✅ No jobs to archive (all 1591 jobs within 7-day window)
[2026-02-01T03:46:40.929Z] [BOT] 💾 Saved posted_jobs.json: 1591 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:42.650Z] [BOT] ✅ Posted message: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T03:46:42.651Z] [BOT] 💾 Added channel posting: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance → location channel (2 total channels)
[2026-02-01T03:46:42.651Z] [BOT] 💾 BEFORE MERGE: 1591 jobs in memory (cached)
[2026-02-01T03:46:42.681Z] [BOT] ✅ Loaded V2 database: 1591 jobs
💾 DISK STATE: 1591 jobs on disk
[2026-02-01T03:46:42.681Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1591
[2026-02-01T03:46:42.684Z] [BOT] 🔀 Deep merged: Mercury Ignite Data Science Graduate Development Program @ ORG_6a7367ef Insurance (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T03:46:42.684Z] [BOT] 💾 AFTER MERGE: 1591 jobs (merged disk + memory)
[2026-02-01T03:46:42.685Z] [BOT] ✅ No jobs to archive (all 1591 jobs within 7-day window)
[2026-02-01T03:46:42.769Z] [BOT] 💾 Saved posted_jobs.json: 1591 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:47.270Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-01T03:46:47.271Z] [BOT] 📍 [ROUTING] "Executive Assistant" @ nominal
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:46:47.755Z] [BOT] ✅ Posted message: Executive Assistant @ nominal in #💻・tech-jobs
  ✅ Industry: Executive Assistant @ nominal
[2026-02-01T03:46:47.755Z] [BOT] 💾 Added channel posting: Executive Assistant @ nominal → category channel (1 total channels)
[2026-02-01T03:46:47.756Z] [BOT] 💾 BEFORE MERGE: 1592 jobs in memory (cached)
[2026-02-01T03:46:47.789Z] [BOT] ✅ Loaded V2 database: 1591 jobs
💾 DISK STATE: 1591 jobs on disk
[2026-02-01T03:46:47.789Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1592
[2026-02-01T03:46:47.792Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:47.792Z] [BOT] 💾 AFTER MERGE: 1592 jobs (merged disk + memory)
[2026-02-01T03:46:47.793Z] [BOT] ✅ No jobs to archive (all 1592 jobs within 7-day window)
[2026-02-01T03:46:47.888Z] [BOT] 💾 Saved posted_jobs.json: 1592 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:49.390Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_f8d13f3b Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:46:49.606Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_f8d13f3b Health in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_f8d13f3b Health
[2026-02-01T03:46:49.607Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_f8d13f3b Health → category channel (1 total channels)
[2026-02-01T03:46:49.607Z] [BOT] 💾 BEFORE MERGE: 1593 jobs in memory (cached)
[2026-02-01T03:46:49.637Z] [BOT] ✅ Loaded V2 database: 1592 jobs
💾 DISK STATE: 1592 jobs on disk
[2026-02-01T03:46:49.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1593
[2026-02-01T03:46:49.640Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1593 jobs (merged disk + memory)
[2026-02-01T03:46:49.641Z] [BOT] ✅ No jobs to archive (all 1593 jobs within 7-day window)
[2026-02-01T03:46:49.740Z] [BOT] 💾 Saved posted_jobs.json: 1593 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:51.525Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_f8d13f3b Health in #🗽・JID_98d4f0de
[2026-02-01T03:46:51.525Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T03:46:51.526Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_f8d13f3b Health → location channel (2 total channels)
[2026-02-01T03:46:51.526Z] [BOT] 💾 BEFORE MERGE: 1593 jobs in memory (cached)
[2026-02-01T03:46:51.556Z] [BOT] ✅ Loaded V2 database: 1593 jobs
💾 DISK STATE: 1593 jobs on disk
[2026-02-01T03:46:51.556Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1593
[2026-02-01T03:46:51.558Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_f8d13f3b Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T03:46:51.559Z] [BOT] 💾 AFTER MERGE: 1593 jobs (merged disk + memory)
[2026-02-01T03:46:51.560Z] [BOT] ✅ No jobs to archive (all 1593 jobs within 7-day window)
[2026-02-01T03:46:51.648Z] [BOT] 💾 Saved posted_jobs.json: 1593 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:53.149Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
[2026-02-01T03:46:53.150Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:46:53.352Z] [BOT] ✅ Posted message: Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-02-01T03:46:53.353Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-02-01T03:46:53.353Z] [BOT] 💾 BEFORE MERGE: 1594 jobs in memory (cached)
[2026-02-01T03:46:53.384Z] [BOT] ✅ Loaded V2 database: 1593 jobs
💾 DISK STATE: 1593 jobs on disk
[2026-02-01T03:46:53.384Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1594
[2026-02-01T03:46:53.387Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:53.387Z] [BOT] 💾 AFTER MERGE: 1594 jobs (merged disk + memory)
[2026-02-01T03:46:53.388Z] [BOT] ✅ No jobs to archive (all 1594 jobs within 7-day window)
[2026-02-01T03:46:53.476Z] [BOT] 💾 Saved posted_jobs.json: 1594 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:54.979Z] [BOT] 📍 [ROUTING] "Software Developer Associate - TS/SCI w/Poly" @ ORG_c910d474 Dynamics Information Technology
[2026-02-01T03:46:54.979Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:46:55.253Z] [BOT] ✅ Posted message: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2026-02-01T03:46:55.253Z] [BOT] ✅ Industry: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology
[2026-02-01T03:46:55.253Z] [BOT] 💾 Added channel posting: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-02-01T03:46:55.253Z] [BOT] 💾 BEFORE MERGE: 1595 jobs in memory (cached)
[2026-02-01T03:46:55.285Z] [BOT] ✅ Loaded V2 database: 1594 jobs
💾 DISK STATE: 1594 jobs on disk
[2026-02-01T03:46:55.285Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1595
[2026-02-01T03:46:55.288Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:55.288Z] [BOT] 💾 AFTER MERGE: 1595 jobs (merged disk + memory)
[2026-02-01T03:46:55.289Z] [BOT] ✅ No jobs to archive (all 1595 jobs within 7-day window)
[2026-02-01T03:46:55.372Z] [BOT] 💾 Saved posted_jobs.json: 1595 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:57.190Z] [BOT] ✅ Posted message: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T03:46:57.191Z] [BOT] 💾 Added channel posting: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology → location channel (2 total channels)
[2026-02-01T03:46:57.191Z] [BOT] 💾 BEFORE MERGE: 1595 jobs in memory (cached)
[2026-02-01T03:46:57.224Z] [BOT] ✅ Loaded V2 database: 1595 jobs
💾 DISK STATE: 1595 jobs on disk
[2026-02-01T03:46:57.224Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1595
[2026-02-01T03:46:57.227Z] [BOT] 🔀 Deep merged: Software Developer Associate - TS/SCI w/Poly @ ORG_c910d474 Dynamics Information Technology (disk: 1 channels → merged: 2 channels)
[2026-02-01T03:46:57.227Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1595 jobs (merged disk + memory)
[2026-02-01T03:46:57.228Z] [BOT] ✅ No jobs to archive (all 1595 jobs within 7-day window)
[2026-02-01T03:46:57.319Z] [BOT] 💾 Saved posted_jobs.json: 1595 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:46:58.821Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Multiple Teams" @ ORG_153091ce
   Category: TECH (matched: "software")
[2026-02-01T03:46:58.821Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:46:59.085Z] [BOT] ✅ Posted message: Software Engineer 1 - Multiple Teams @ ORG_153091ce in #💻・tech-jobs
[2026-02-01T03:46:59.085Z] [BOT] ✅ Industry: Software Engineer 1 - Multiple Teams @ ORG_153091ce
[2026-02-01T03:46:59.085Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Multiple Teams @ ORG_153091ce → category channel (1 total channels)
[2026-02-01T03:46:59.085Z] [BOT] 💾 BEFORE MERGE: 1596 jobs in memory (cached)
[2026-02-01T03:46:59.117Z] [BOT] ✅ Loaded V2 database: 1595 jobs
💾 DISK STATE: 1595 jobs on disk
[2026-02-01T03:46:59.117Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1596
[2026-02-01T03:46:59.120Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:46:59.120Z] [BOT] 💾 AFTER MERGE: 1596 jobs (merged disk + memory)
[2026-02-01T03:46:59.121Z] [BOT] ✅ No jobs to archive (all 1596 jobs within 7-day window)
[2026-02-01T03:46:59.224Z] [BOT] 💾 Saved posted_jobs.json: 1596 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:47:00.951Z] [BOT] ✅ Posted message: Software Engineer 1 - Multiple Teams @ ORG_153091ce in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T03:47:00.951Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Multiple Teams @ ORG_153091ce → location channel (2 total channels)
[2026-02-01T03:47:00.951Z] [BOT] 💾 BEFORE MERGE: 1596 jobs in memory (cached)
[2026-02-01T03:47:00.981Z] [BOT] ✅ Loaded V2 database: 1596 jobs
[2026-02-01T03:47:00.981Z] [BOT] 💾 DISK STATE: 1596 jobs on disk
[2026-02-01T03:47:00.981Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1596
[2026-02-01T03:47:00.984Z] [BOT] 🔀 Deep merged: Software Engineer 1 - Multiple Teams @ ORG_153091ce (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T03:47:00.984Z] [BOT] 💾 AFTER MERGE: 1596 jobs (merged disk + memory)
[2026-02-01T03:47:00.985Z] [BOT] ✅ No jobs to archive (all 1596 jobs within 7-day window)
[2026-02-01T03:47:01.073Z] [BOT] 💾 Saved posted_jobs.json: 1596 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:47:02.574Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T03:47:02.825Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2026-02-01T03:47:02.827Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
💾 BEFORE MERGE: 1597 jobs in memory (cached)
[2026-02-01T03:47:02.857Z] [BOT] ✅ Loaded V2 database: 1596 jobs
💾 DISK STATE: 1596 jobs on disk
[2026-02-01T03:47:02.857Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1597
[2026-02-01T03:47:02.860Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:47:02.860Z] [BOT] 💾 AFTER MERGE: 1597 jobs (merged disk + memory)
[2026-02-01T03:47:02.861Z] [BOT] ✅ No jobs to archive (all 1597 jobs within 7-day window)
[2026-02-01T03:47:02.949Z] [BOT] 💾 Saved posted_jobs.json: 1597 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:47:04.647Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T03:47:04.648Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems → location channel (2 total channels)
[2026-02-01T03:47:04.648Z] [BOT] 💾 BEFORE MERGE: 1597 jobs in memory (cached)
[2026-02-01T03:47:04.677Z] [BOT] ✅ Loaded V2 database: 1597 jobs
💾 DISK STATE: 1597 jobs on disk
[2026-02-01T03:47:04.678Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1597
[2026-02-01T03:47:04.681Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ ORG_c910d474 Dynamics Mission Systems (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1597 jobs (merged disk + memory)
[2026-02-01T03:47:04.682Z] [BOT] ✅ No jobs to archive (all 1597 jobs within 7-day window)
[2026-02-01T03:47:04.769Z] [BOT] 💾 Saved posted_jobs.json: 1597 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:47:09.270Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T03:47:09.272Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_188cfab3..." not found, but found as SHA256 "ef1e6c42d2797ce6"
[2026-02-01T03:47:09.272Z] [BOT] ⏭️  Skipping duplicate: JID_87398140 (posted within 7 days)
[2026-02-01T03:47:09.273Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e81f3cdc..." not found, but found as SHA256 "03e3b761caeb518f"
⏭️  Skipping duplicate: JID_4cecf120 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6405b3c8..." not found, but found as SHA256 "0dbca9683bf1be95"
⏭️  Skipping duplicate: JID_270ff750 (posted within 7 days)
[2026-02-01T03:47:09.273Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42556291..." not found, but found as SHA256 "31acd88fa78e38df"
[2026-02-01T03:47:09.273Z] [BOT] ⏭️  Skipping duplicate: JID_c7528939 (posted within 7 days)
[2026-02-01T03:47:09.273Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_681daa8d-wpi_external_c..." not found, but found as SHA256 "636f3ac7cff42b8c"
[2026-02-01T03:47:09.273Z] [BOT] ⏭️  Skipping duplicate: JID_681daa8d-wpi_external_career_site-JID_259259e9-professor_r0003284 (posted within 7 days)
[2026-02-01T03:47:09.273Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ca59dcb5-..." not found, but found as SHA256 "41c7dc245fadd1f1"
[2026-02-01T03:47:09.274Z] [BOT] ⏭️  Skipping duplicate: JID_2d34bf8f (posted within 7 days)
[2026-02-01T03:47:09.274Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c1ed441..." not found, but found as SHA256 "26fa78dd0a4c8a2c"
[2026-02-01T03:47:09.274Z] [BOT] ⏭️  Skipping duplicate: JID_8863b708 (posted within 7 days)
[2026-02-01T03:47:09.274Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e0632c88..." not found, but found as SHA256 "c4adcc72241bb15b"
[2026-02-01T03:47:09.274Z] [BOT] ⏭️  Skipping duplicate: JID_560c9b02-external_career_site-JID_2640b0db-poly_rq199001 (posted within 7 days)
[2026-02-01T03:47:09.274Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_11277ef0..." not found, but found as SHA256 "d8a4656d77603db6"
⏭️  Skipping duplicate: JID_26748913 (posted within 7 days)
[2026-02-01T03:47:09.275Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0b7a884b..." not found, but found as SHA256 "3d6feb7e3b5aa005"
[2026-02-01T03:47:09.275Z] [BOT] ⏭️  Skipping duplicate: JID_0b7a884b (posted within 7 days)
[2026-02-01T03:47:09.388Z] [BOT] ✅ Loaded pending queue: 2940 total (1315 pending, 48 enriched, 1577 posted)
[2026-02-01T03:47:09.574Z] [BOT] ✅ Saved pending queue: 2940 total (1315 pending, 38 enriched, 1587 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T03:47:09.663Z] [BOT] 📂 Loaded 11668 existing routing entries
[2026-02-01T03:47:09.819Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T03:47:09.819Z] [BOT] New entries: 10
   Total entries: 11678
   Timestamp: 2026-02-01T03:47:09.754Z
[2026-02-01T03:47:09.820Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T03:47:09.820Z] [BOT] Total attempts: 28
   Successful: 18
   Failed: 0
   Skipped: 10
[2026-02-01T03:47:09.820Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T03:47:09.820Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
[2026-02-01T03:47:09.820Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #📍・JID_6daed763: 3 posts
[2026-02-01T03:47:09.820Z] [BOT] 5. #🏠・JID_ead674af: 1 posts
[2026-02-01T03:47:09.820Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T03:47:09.820Z] [BOT] 💾 BEFORE MERGE: 1597 jobs in memory (cached)
[2026-02-01T03:47:09.854Z] [BOT] ✅ Loaded V2 database: 1597 jobs
💾 DISK STATE: 1597 jobs on disk
[2026-02-01T03:47:09.854Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1597
[2026-02-01T03:47:09.857Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T03:47:09.857Z] [BOT] 💾 AFTER MERGE: 1597 jobs (merged disk + memory)
[2026-02-01T03:47:09.858Z] [BOT] ✅ No jobs to archive (all 1597 jobs within 7-day window)
[2026-02-01T03:47:09.946Z] [BOT] 💾 Saved posted_jobs.json: 1597 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T03:47:09.947Z] [BOT] ✅ Database saved successfully
[2026-02-01T03:47:11.982Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2891) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*