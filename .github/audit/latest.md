# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T14:37:04.960Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T14:36:13.024Z] ========================================
[2026-02-01T14:36:13.026Z] Discord Bot Execution Log
[2026-02-01T14:36:13.026Z] Environment: GitHub Actions
[2026-02-01T14:36:13.026Z] Node Version: v20.20.0
[2026-02-01T14:36:13.026Z] ========================================
[2026-02-01T14:36:13.026Z] Environment Variables Check:
[2026-02-01T14:36:13.026Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T14:36:13.026Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T14:36:13.026Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T14:36:13.027Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T14:36:13.027Z] 
Multi-Channel Configuration:
[2026-02-01T14:36:13.027Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T14:36:13.027Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:36:13.027Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:36:13.027Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T14:36:13.027Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:36:13.027Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:36:13.027Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:36:13.027Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:36:13.027Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T14:36:13.027Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T14:36:13.027Z] 
Data Files Check:
[2026-02-01T14:36:13.028Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59412 bytes)
[2026-02-01T14:36:13.078Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 9972530 bytes)
[2026-02-01T14:36:13.078Z] 
========================================
[2026-02-01T14:36:13.078Z] Starting Enhanced Discord Bot...
[2026-02-01T14:36:13.078Z] ========================================
[2026-02-01T14:36:13.652Z] [BOT] ✅ Loaded V2 database: 1917 jobs
[2026-02-01T14:36:14.116Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T14:36:14.117Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T14:36:14.117Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T14:36:14.229Z] [BOT] ✅ Loaded pending queue: 2948 total (991 pending, 50 enriched, 1907 posted)
[2026-02-01T14:36:14.229Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T14:36:14.229Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:36:14.230Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T14:36:14.230Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T14:36:14.231Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T14:36:14.231Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T14:36:14.231Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T14:36:14.232Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T14:36:14.232Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T14:36:14.232Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T14:36:14.233Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T14:36:14.233Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T14:36:14.233Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T14:36:14.233Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T14:36:14.233Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T14:36:14.234Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T14:36:14.248Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T14:36:14.248Z] [BOT] 🚫 Skipping blacklisted job: Global Sr. Manager, Experiential & Content Production at spotify
[2026-02-01T14:36:14.371Z] [BOT] ✅ Loaded pending queue: 2948 total (991 pending, 50 enriched, 1907 posted)
[2026-02-01T14:36:14.575Z] [BOT] ✅ Saved pending queue: 2947 total (991 pending, 49 enriched, 1907 posted)
[2026-02-01T14:36:14.575Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 41 jobs (1 blacklisted)
[2026-02-01T14:36:14.575Z] [BOT] 📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T14:36:14.576Z] [BOT] 📋 After multi-location grouping: 28 unique jobs to post
[2026-02-01T14:36:14.576Z] [BOT] (13 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-01T14:36:14.576Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: new york, dallas, casa grande, san francisco, san jose, san diego, flower mound
   - PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting: washington, boulder
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T14:36:14.579Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T14:36:14.581Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:14.581Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:14.599Z] [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T14:36:14.889Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:14.890Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:36:14.890Z] [BOT] 💾 BEFORE MERGE: 1918 jobs in memory (cached)
[2026-02-01T14:36:14.932Z] [BOT] ✅ Loaded V2 database: 1917 jobs
💾 DISK STATE: 1917 jobs on disk
[2026-02-01T14:36:14.932Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1918
[2026-02-01T14:36:14.937Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:14.937Z] [BOT] 💾 AFTER MERGE: 1918 jobs (merged disk + memory)
[2026-02-01T14:36:14.938Z] [BOT] ✅ No jobs to archive (all 1918 jobs within 7-day window)
[2026-02-01T14:36:15.043Z] [BOT] 💾 Saved posted_jobs.json: 1918 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:16.729Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🗽・JID_98d4f0de
[2026-02-01T14:36:16.729Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T14:36:16.729Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:36:16.729Z] [BOT] 💾 BEFORE MERGE: 1918 jobs in memory (cached)
[2026-02-01T14:36:16.764Z] [BOT] ✅ Loaded V2 database: 1918 jobs
[2026-02-01T14:36:16.764Z] [BOT] 💾 DISK STATE: 1918 jobs on disk
[2026-02-01T14:36:16.764Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1918
[2026-02-01T14:36:16.768Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:36:16.769Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1918 jobs (merged disk + memory)
[2026-02-01T14:36:16.770Z] [BOT] ✅ No jobs to archive (all 1918 jobs within 7-day window)
[2026-02-01T14:36:16.874Z] [BOT] 💾 Saved posted_jobs.json: 1918 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:18.376Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:18.376Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:18.587Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T14:36:18.588Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:18.588Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:36:18.588Z] [BOT] 💾 BEFORE MERGE: 1919 jobs in memory (cached)
[2026-02-01T14:36:18.624Z] [BOT] ✅ Loaded V2 database: 1918 jobs
💾 DISK STATE: 1918 jobs on disk
[2026-02-01T14:36:18.624Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1919
[2026-02-01T14:36:18.628Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:18.628Z] [BOT] 💾 AFTER MERGE: 1919 jobs (merged disk + memory)
[2026-02-01T14:36:18.629Z] [BOT] ✅ No jobs to archive (all 1919 jobs within 7-day window)
[2026-02-01T14:36:18.733Z] [BOT] 💾 Saved posted_jobs.json: 1919 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:21.622Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:36:21.623Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:36:21.623Z] [BOT] 💾 BEFORE MERGE: 1919 jobs in memory (cached)
[2026-02-01T14:36:21.658Z] [BOT] ✅ Loaded V2 database: 1919 jobs
💾 DISK STATE: 1919 jobs on disk
[2026-02-01T14:36:21.658Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1919
[2026-02-01T14:36:21.662Z] [BOT] 🔀 Deep merged: Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:36:21.663Z] [BOT] 💾 AFTER MERGE: 1919 jobs (merged disk + memory)
[2026-02-01T14:36:21.664Z] [BOT] ✅ No jobs to archive (all 1919 jobs within 7-day window)
[2026-02-01T14:36:21.770Z] [BOT] 💾 Saved posted_jobs.json: 1919 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:23.272Z] [BOT] 📍 [ROUTING] "Test Analyst - Java - Selenium" @ ORG_a3a09e18 Consulting
   Category: TECH (matched: "programming")
[2026-02-01T14:36:23.272Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:23.675Z] [BOT] ✅ Posted message: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting in #💻・tech-jobs
[2026-02-01T14:36:23.675Z] [BOT] ✅ Industry: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting
[2026-02-01T14:36:23.676Z] [BOT] 💾 Added channel posting: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting → category channel (1 total channels)
[2026-02-01T14:36:23.676Z] [BOT] 💾 BEFORE MERGE: 1920 jobs in memory (cached)
[2026-02-01T14:36:23.711Z] [BOT] ✅ Loaded V2 database: 1919 jobs
[2026-02-01T14:36:23.711Z] [BOT] 💾 DISK STATE: 1919 jobs on disk
[2026-02-01T14:36:23.711Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1920
[2026-02-01T14:36:23.715Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1920 jobs (merged disk + memory)
[2026-02-01T14:36:23.716Z] [BOT] ✅ No jobs to archive (all 1920 jobs within 7-day window)
[2026-02-01T14:36:23.828Z] [BOT] 💾 Saved posted_jobs.json: 1920 active jobs
[2026-02-01T14:36:23.828Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:25.982Z] [BOT] ✅ Posted message: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting in #🌲・JID_efdf5921
[2026-02-01T14:36:25.982Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T14:36:25.982Z] [BOT] 💾 Added channel posting: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting → location channel (2 total channels)
[2026-02-01T14:36:25.982Z] [BOT] 💾 BEFORE MERGE: 1920 jobs in memory (cached)
[2026-02-01T14:36:26.015Z] [BOT] ✅ Loaded V2 database: 1920 jobs
💾 DISK STATE: 1920 jobs on disk
[2026-02-01T14:36:26.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1920
[2026-02-01T14:36:26.019Z] [BOT] 🔀 Deep merged: Test Analyst - Java - Selenium @ ORG_a3a09e18 Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:36:26.019Z] [BOT] 💾 AFTER MERGE: 1920 jobs (merged disk + memory)
[2026-02-01T14:36:26.020Z] [BOT] ✅ No jobs to archive (all 1920 jobs within 7-day window)
[2026-02-01T14:36:26.135Z] [BOT] 💾 Saved posted_jobs.json: 1920 active jobs
[2026-02-01T14:36:26.135Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:27.638Z] [BOT] 📍 [ROUTING] "Entry Level Informatica Developer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:28.352Z] [BOT] ✅ Posted message: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:28.353Z] [BOT] 💾 Added channel posting: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
💾 BEFORE MERGE: 1921 jobs in memory (cached)
[2026-02-01T14:36:28.387Z] [BOT] ✅ Loaded V2 database: 1920 jobs
💾 DISK STATE: 1920 jobs on disk
[2026-02-01T14:36:28.387Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1921
[2026-02-01T14:36:28.391Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:28.391Z] [BOT] 💾 AFTER MERGE: 1921 jobs (merged disk + memory)
[2026-02-01T14:36:28.392Z] [BOT] ✅ No jobs to archive (all 1921 jobs within 7-day window)
[2026-02-01T14:36:28.494Z] [BOT] 💾 Saved posted_jobs.json: 1921 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:30.273Z] [BOT] ✅ Posted message: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T14:36:30.273Z] [BOT] 💾 Added channel posting: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:36:30.273Z] [BOT] 💾 BEFORE MERGE: 1921 jobs in memory (cached)
[2026-02-01T14:36:30.309Z] [BOT] ✅ Loaded V2 database: 1921 jobs
💾 DISK STATE: 1921 jobs on disk
[2026-02-01T14:36:30.309Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1921
[2026-02-01T14:36:30.313Z] [BOT] 🔀 Deep merged: Entry Level Informatica Developer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:36:30.313Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1921 jobs (merged disk + memory)
[2026-02-01T14:36:30.314Z] [BOT] ✅ No jobs to archive (all 1921 jobs within 7-day window)
[2026-02-01T14:36:30.418Z] [BOT] 💾 Saved posted_jobs.json: 1921 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:31.920Z] [BOT] 📍 [ROUTING] "Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:32.136Z] [BOT] ✅ Posted message: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:32.137Z] [BOT] 💾 Added channel posting: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:36:32.137Z] [BOT] 💾 BEFORE MERGE: 1922 jobs in memory (cached)
[2026-02-01T14:36:32.173Z] [BOT] ✅ Loaded V2 database: 1921 jobs
💾 DISK STATE: 1921 jobs on disk
[2026-02-01T14:36:32.173Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1922
[2026-02-01T14:36:32.177Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:32.177Z] [BOT] 💾 AFTER MERGE: 1922 jobs (merged disk + memory)
[2026-02-01T14:36:32.178Z] [BOT] ✅ No jobs to archive (all 1922 jobs within 7-day window)
[2026-02-01T14:36:32.283Z] [BOT] 💾 Saved posted_jobs.json: 1922 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:34.043Z] [BOT] ✅ Posted message: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:36:34.044Z] [BOT] 💾 Added channel posting: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:36:34.044Z] [BOT] 💾 BEFORE MERGE: 1922 jobs in memory (cached)
[2026-02-01T14:36:34.079Z] [BOT] ✅ Loaded V2 database: 1922 jobs
💾 DISK STATE: 1922 jobs on disk
[2026-02-01T14:36:34.079Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1922
[2026-02-01T14:36:34.082Z] [BOT] 🔀 Deep merged: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:36:34.083Z] [BOT] 💾 AFTER MERGE: 1922 jobs (merged disk + memory)
[2026-02-01T14:36:34.084Z] [BOT] ✅ No jobs to archive (all 1922 jobs within 7-day window)
[2026-02-01T14:36:34.190Z] [BOT] 💾 Saved posted_jobs.json: 1922 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:35.692Z] [BOT] 📍 [ROUTING] "Frontend Developer - Angular" @ 360 IT Professionals
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:36.018Z] [BOT] ✅ Posted message: Frontend Developer - Angular @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: Frontend Developer - Angular @ 360 IT Professionals
[2026-02-01T14:36:36.019Z] [BOT] 💾 Added channel posting: Frontend Developer - Angular @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T14:36:36.019Z] [BOT] 💾 BEFORE MERGE: 1923 jobs in memory (cached)
[2026-02-01T14:36:36.054Z] [BOT] ✅ Loaded V2 database: 1922 jobs
💾 DISK STATE: 1922 jobs on disk
[2026-02-01T14:36:36.054Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1923
[2026-02-01T14:36:36.058Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:36.058Z] [BOT] 💾 AFTER MERGE: 1923 jobs (merged disk + memory)
[2026-02-01T14:36:36.059Z] [BOT] ✅ No jobs to archive (all 1923 jobs within 7-day window)
[2026-02-01T14:36:36.168Z] [BOT] 💾 Saved posted_jobs.json: 1923 active jobs
[2026-02-01T14:36:36.169Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:37.844Z] [BOT] ✅ Posted message: Frontend Developer - Angular @ 360 IT Professionals in #🗽・JID_98d4f0de
[2026-02-01T14:36:37.844Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T14:36:37.845Z] [BOT] 💾 Added channel posting: Frontend Developer - Angular @ 360 IT Professionals → location channel (2 total channels)
[2026-02-01T14:36:37.845Z] [BOT] 💾 BEFORE MERGE: 1923 jobs in memory (cached)
[2026-02-01T14:36:37.878Z] [BOT] ✅ Loaded V2 database: 1923 jobs
💾 DISK STATE: 1923 jobs on disk
[2026-02-01T14:36:37.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1923
[2026-02-01T14:36:37.882Z] [BOT] 🔀 Deep merged: Frontend Developer - Angular @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:36:37.882Z] [BOT] 💾 AFTER MERGE: 1923 jobs (merged disk + memory)
[2026-02-01T14:36:37.883Z] [BOT] ✅ No jobs to archive (all 1923 jobs within 7-day window)
[2026-02-01T14:36:37.973Z] [BOT] 💾 Saved posted_jobs.json: 1923 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:39.476Z] [BOT] 📍 [ROUTING] "Software Engineer - Software Development - Backend" @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:39.476Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:39.748Z] [BOT] ✅ Posted message: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies
[2026-02-01T14:36:39.749Z] [BOT] 💾 Added channel posting: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T14:36:39.749Z] [BOT] 💾 BEFORE MERGE: 1924 jobs in memory (cached)
[2026-02-01T14:36:39.783Z] [BOT] ✅ Loaded V2 database: 1923 jobs
💾 DISK STATE: 1923 jobs on disk
[2026-02-01T14:36:39.783Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1924
[2026-02-01T14:36:39.786Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:39.786Z] [BOT] 💾 AFTER MERGE: 1924 jobs (merged disk + memory)
[2026-02-01T14:36:39.787Z] [BOT] ✅ No jobs to archive (all 1924 jobs within 7-day window)
[2026-02-01T14:36:39.892Z] [BOT] 💾 Saved posted_jobs.json: 1924 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:41.631Z] [BOT] ✅ Posted message: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T14:36:41.631Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:36:41.631Z] [BOT] 💾 Added channel posting: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T14:36:41.631Z] [BOT] 💾 BEFORE MERGE: 1924 jobs in memory (cached)
[2026-02-01T14:36:41.667Z] [BOT] ✅ Loaded V2 database: 1924 jobs
💾 DISK STATE: 1924 jobs on disk
[2026-02-01T14:36:41.667Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1924
[2026-02-01T14:36:41.670Z] [BOT] 🔀 Deep merged: Software Engineer - Software Development - Backend @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:36:41.671Z] [BOT] 💾 AFTER MERGE: 1924 jobs (merged disk + memory)
[2026-02-01T14:36:41.671Z] [BOT] ✅ No jobs to archive (all 1924 jobs within 7-day window)
[2026-02-01T14:36:41.776Z] [BOT] 💾 Saved posted_jobs.json: 1924 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:43.278Z] [BOT] 📍 [ROUTING] "Software Engineer - New Grad" @ ORG_0c79a9c2 Intuition
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:43.459Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition in #💻・tech-jobs
[2026-02-01T14:36:43.459Z] [BOT] ✅ Industry: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition
[2026-02-01T14:36:43.459Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition → category channel (1 total channels)
[2026-02-01T14:36:43.460Z] [BOT] 💾 BEFORE MERGE: 1925 jobs in memory (cached)
[2026-02-01T14:36:43.494Z] [BOT] ✅ Loaded V2 database: 1924 jobs
💾 DISK STATE: 1924 jobs on disk
[2026-02-01T14:36:43.495Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1925
[2026-02-01T14:36:43.498Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:43.498Z] [BOT] 💾 AFTER MERGE: 1925 jobs (merged disk + memory)
[2026-02-01T14:36:43.499Z] [BOT] ✅ No jobs to archive (all 1925 jobs within 7-day window)
[2026-02-01T14:36:43.603Z] [BOT] 💾 Saved posted_jobs.json: 1925 active jobs
[2026-02-01T14:36:43.603Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:45.329Z] [BOT] ✅ Posted message: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition in #🌉・JID_739bbc0b
[2026-02-01T14:36:45.330Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:36:45.330Z] [BOT] 💾 Added channel posting: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition → location channel (2 total channels)
[2026-02-01T14:36:45.330Z] [BOT] 💾 BEFORE MERGE: 1925 jobs in memory (cached)
[2026-02-01T14:36:45.369Z] [BOT] ✅ Loaded V2 database: 1925 jobs
[2026-02-01T14:36:45.372Z] [BOT] 💾 DISK STATE: 1925 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1925
[2026-02-01T14:36:45.386Z] [BOT] 🔀 Deep merged: Software Engineer - New Grad @ ORG_0c79a9c2 Intuition (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:36:45.389Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1925 jobs (merged disk + memory)
✅ No jobs to archive (all 1925 jobs within 7-day window)
[2026-02-01T14:36:45.485Z] [BOT] 💾 Saved posted_jobs.json: 1925 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:46.987Z] [BOT] 📍 [ROUTING] "Graduate 2025 Software Engineer I, US" @ ORG_3cfbdbc3
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T14:36:47.367Z] [BOT] ✅ Posted message: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 in #💻・tech-jobs
  ✅ Industry: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3
[2026-02-01T14:36:47.369Z] [BOT] 💾 Added channel posting: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 → category channel (1 total channels)
💾 BEFORE MERGE: 1926 jobs in memory (cached)
[2026-02-01T14:36:47.401Z] [BOT] ✅ Loaded V2 database: 1925 jobs
💾 DISK STATE: 1925 jobs on disk
[2026-02-01T14:36:47.402Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1926
[2026-02-01T14:36:47.405Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:47.405Z] [BOT] 💾 AFTER MERGE: 1926 jobs (merged disk + memory)
[2026-02-01T14:36:47.406Z] [BOT] ✅ No jobs to archive (all 1926 jobs within 7-day window)
[2026-02-01T14:36:47.510Z] [BOT] 💾 Saved posted_jobs.json: 1926 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:49.301Z] [BOT] ✅ Posted message: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T14:36:49.302Z] [BOT] 💾 Added channel posting: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 → location channel (2 total channels)
💾 BEFORE MERGE: 1926 jobs in memory (cached)
[2026-02-01T14:36:49.336Z] [BOT] ✅ Loaded V2 database: 1926 jobs
💾 DISK STATE: 1926 jobs on disk
[2026-02-01T14:36:49.336Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1926
[2026-02-01T14:36:49.339Z] [BOT] 🔀 Deep merged: Graduate 2025 Software Engineer I, US @ ORG_3cfbdbc3 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T14:36:49.339Z] [BOT] 💾 AFTER MERGE: 1926 jobs (merged disk + memory)
[2026-02-01T14:36:49.340Z] [BOT] ✅ No jobs to archive (all 1926 jobs within 7-day window)
[2026-02-01T14:36:49.444Z] [BOT] 💾 Saved posted_jobs.json: 1926 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:53.946Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T14:36:53.948Z] [BOT] 📍 [ROUTING] "PPM Data Scientist/Statistician 1" @ ORG_52575429 Consulting
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-01T14:36:53.948Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T14:36:54.326Z] [BOT] ✅ Posted message: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #📊・JID_fb739488
  ✅ Industry: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting
[2026-02-01T14:36:54.327Z] [BOT] 💾 Added channel posting: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting → category channel (1 total channels)
[2026-02-01T14:36:54.327Z] [BOT] 💾 BEFORE MERGE: 1927 jobs in memory (cached)
[2026-02-01T14:36:54.363Z] [BOT] ✅ Loaded V2 database: 1926 jobs
💾 DISK STATE: 1926 jobs on disk
[2026-02-01T14:36:54.363Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1927
[2026-02-01T14:36:54.367Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:36:54.367Z] [BOT] 💾 AFTER MERGE: 1927 jobs (merged disk + memory)
[2026-02-01T14:36:54.368Z] [BOT] ✅ No jobs to archive (all 1927 jobs within 7-day window)
[2026-02-01T14:36:54.474Z] [BOT] 💾 Saved posted_jobs.json: 1927 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:36:56.162Z] [BOT] ✅ Posted message: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting in #📍・JID_6daed763
[2026-02-01T14:36:56.162Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T14:36:56.163Z] [BOT] 💾 Added channel posting: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting → location channel (2 total channels)
[2026-02-01T14:36:56.163Z] [BOT] 💾 BEFORE MERGE: 1927 jobs in memory (cached)
[2026-02-01T14:36:56.198Z] [BOT] ✅ Loaded V2 database: 1927 jobs
💾 DISK STATE: 1927 jobs on disk
[2026-02-01T14:36:56.198Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1927
[2026-02-01T14:36:56.201Z] [BOT] 🔀 Deep merged: PPM Data Scientist/Statistician 1 @ ORG_52575429 Consulting (disk: 1 channels → merged: 2 channels)
[2026-02-01T14:36:56.201Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1927 jobs (merged disk + memory)
[2026-02-01T14:36:56.202Z] [BOT] ✅ No jobs to archive (all 1927 jobs within 7-day window)
[2026-02-01T14:36:56.306Z] [BOT] 💾 Saved posted_jobs.json: 1927 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:37:00.808Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T14:37:00.809Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "6531afed4c5e7819"
[2026-02-01T14:37:00.809Z] [BOT] ⏭️  Skipping duplicate: JID_df29b1f5 (posted within 7 days)
[2026-02-01T14:37:00.809Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "66a53c382e106d77"
[2026-02-01T14:37:00.810Z] [BOT] ⏭️  Skipping duplicate: JID_e240571a (posted within 7 days)
[2026-02-01T14:37:00.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8f73bad9..." not found, but found as SHA256 "8d89cbf963dc1516"
⏭️  Skipping duplicate: JID_ae9fc2b3 (posted within 7 days)
[2026-02-01T14:37:00.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "3a7f043b61022109"
⏭️  Skipping duplicate: JID_e0f592ba (posted within 7 days)
[2026-02-01T14:37:00.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "468292ae274d5e37"
[2026-02-01T14:37:00.811Z] [BOT] ⏭️  Skipping duplicate: JID_56c9c811 (posted within 7 days)
[2026-02-01T14:37:00.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "6ab81e0f19a712e5"
[2026-02-01T14:37:00.811Z] [BOT] ⏭️  Skipping duplicate: JID_d27506fc (posted within 7 days)
[2026-02-01T14:37:00.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "b41b7cecad193b2f"
[2026-02-01T14:37:00.811Z] [BOT] ⏭️  Skipping duplicate: JID_6ff36b69 (posted within 7 days)
[2026-02-01T14:37:00.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10b0e829..." not found, but found as SHA256 "6827463e1174676d"
[2026-02-01T14:37:00.812Z] [BOT] ⏭️  Skipping duplicate: JID_3232bae0 (posted within 7 days)
[2026-02-01T14:37:00.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8d051516..." not found, but found as SHA256 "dae3378a7392f9c8"
[2026-02-01T14:37:00.812Z] [BOT] ⏭️  Skipping duplicate: JID_845d938d (posted within 7 days)
[2026-02-01T14:37:00.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da7ee503..." not found, but found as SHA256 "0119bde4a2c2ff92"
[2026-02-01T14:37:00.812Z] [BOT] ⏭️  Skipping duplicate: JID_43d67a94 (posted within 7 days)
[2026-02-01T14:37:00.919Z] [BOT] ✅ Loaded pending queue: 2947 total (991 pending, 49 enriched, 1907 posted)
[2026-02-01T14:37:01.120Z] [BOT] ✅ Saved pending queue: 2947 total (991 pending, 39 enriched, 1917 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T14:37:01.120Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T14:37:01.210Z] [BOT] 📂 Loaded 11998 existing routing entries
[2026-02-01T14:37:01.340Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12008
[2026-02-01T14:37:01.340Z] [BOT] Timestamp: 2026-02-01T14:37:01.291Z
[2026-02-01T14:37:01.340Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T14:37:01.341Z] [BOT] Total attempts: 29
[2026-02-01T14:37:01.341Z] [BOT] Successful: 20
[2026-02-01T14:37:01.341Z] [BOT] Failed: 0
[2026-02-01T14:37:01.341Z] [BOT] Skipped: 9
[2026-02-01T14:37:01.341Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T14:37:01.341Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-02-01T14:37:01.342Z] [BOT] 1. #💻・tech-jobs: 9 posts
     2. #📍・JID_6daed763: 4 posts
     3. #🌉・JID_739bbc0b: 3 posts
     4. #🗽・JID_98d4f0de: 2 posts
     5. #🌲・JID_efdf5921: 1 posts
[2026-02-01T14:37:01.342Z] [BOT] [STATS] Channel stats saved
[2026-02-01T14:37:01.342Z] [BOT] 💾 Saving posted jobs database...
[2026-02-01T14:37:01.342Z] [BOT] 💾 BEFORE MERGE: 1927 jobs in memory (cached)
[2026-02-01T14:37:01.381Z] [BOT] ✅ Loaded V2 database: 1927 jobs
💾 DISK STATE: 1927 jobs on disk
[2026-02-01T14:37:01.381Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1927
[2026-02-01T14:37:01.384Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T14:37:01.384Z] [BOT] 💾 AFTER MERGE: 1927 jobs (merged disk + memory)
[2026-02-01T14:37:01.386Z] [BOT] ✅ No jobs to archive (all 1927 jobs within 7-day window)
[2026-02-01T14:37:01.478Z] [BOT] 💾 Saved posted_jobs.json: 1927 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T14:37:01.478Z] [BOT] ✅ Database saved successfully
[2026-02-01T14:37:03.520Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*