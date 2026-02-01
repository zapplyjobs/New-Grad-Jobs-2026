# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T17:03:11.250Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T17:02:21.150Z] ========================================
[2026-02-01T17:02:21.152Z] Discord Bot Execution Log
[2026-02-01T17:02:21.152Z] Environment: GitHub Actions
[2026-02-01T17:02:21.152Z] Node Version: v20.20.0
[2026-02-01T17:02:21.153Z] ========================================
[2026-02-01T17:02:21.153Z] Environment Variables Check:
[2026-02-01T17:02:21.153Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T17:02:21.153Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T17:02:21.153Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T17:02:21.153Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T17:02:21.153Z] 
Multi-Channel Configuration:
[2026-02-01T17:02:21.153Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T17:02:21.153Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:02:21.153Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:02:21.153Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T17:02:21.153Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:02:21.154Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:02:21.154Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:02:21.154Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:02:21.154Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:02:21.154Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T17:02:21.154Z] 
Data Files Check:
[2026-02-01T17:02:21.154Z] .github/data/new_jobs.json: ✅ Exists (10 items, 58845 bytes)
[2026-02-01T17:02:21.204Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10217171 bytes)
[2026-02-01T17:02:21.204Z] 
========================================
[2026-02-01T17:02:21.204Z] Starting Enhanced Discord Bot...
[2026-02-01T17:02:21.204Z] ========================================
[2026-02-01T17:02:21.783Z] [BOT] ✅ Loaded V2 database: 2037 jobs
[2026-02-01T17:02:22.255Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T17:02:22.255Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T17:02:22.256Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T17:02:22.367Z] [BOT] ✅ Loaded pending queue: 2949 total (872 pending, 50 enriched, 2027 posted)
[2026-02-01T17:02:22.367Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:02:22.368Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T17:02:22.368Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T17:02:22.369Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:02:22.369Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T17:02:22.369Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T17:02:22.370Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T17:02:22.370Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T17:02:22.370Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T17:02:22.371Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T17:02:22.371Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-02-01T17:02:22.371Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T17:02:22.371Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T17:02:22.371Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T17:02:22.371Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T17:02:22.372Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T17:02:22.386Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T17:02:22.387Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T17:02:22.387Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T17:02:22.388Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-02-01T17:02:22.388Z] [BOT] (9 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T17:02:22.388Z] [BOT] - Junior Software Engineer @ mthree: salt lake, united states
   - Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ByteDance: seattle, san jose
   - Software Engineer – New Grad - Infrastructure @ Palantir: new york, seattle, washington, palo alto
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T17:02:22.392Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T17:02:22.392Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T17:02:22.392Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:02:22.410Z] [BOT ERROR] (node:3756) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T17:02:22.829Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T17:02:22.830Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T17:02:22.830Z] [BOT] 💾 BEFORE MERGE: 2038 jobs in memory (cached)
[2026-02-01T17:02:22.871Z] [BOT] ✅ Loaded V2 database: 2037 jobs
💾 DISK STATE: 2037 jobs on disk
[2026-02-01T17:02:22.872Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2038
[2026-02-01T17:02:22.876Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:22.877Z] [BOT] 💾 AFTER MERGE: 2038 jobs (merged disk + memory)
[2026-02-01T17:02:22.878Z] [BOT] ✅ No jobs to archive (all 2038 jobs within 7-day window)
[2026-02-01T17:02:23.029Z] [BOT] 💾 Saved posted_jobs.json: 2038 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:24.759Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T17:02:24.759Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T17:02:24.759Z] [BOT] 💾 BEFORE MERGE: 2038 jobs in memory (cached)
[2026-02-01T17:02:24.796Z] [BOT] ✅ Loaded V2 database: 2038 jobs
[2026-02-01T17:02:24.796Z] [BOT] 💾 DISK STATE: 2038 jobs on disk
[2026-02-01T17:02:24.797Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2038
[2026-02-01T17:02:24.801Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:02:24.801Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2038 jobs (merged disk + memory)
[2026-02-01T17:02:24.802Z] [BOT] ✅ No jobs to archive (all 2038 jobs within 7-day window)
[2026-02-01T17:02:24.910Z] [BOT] 💾 Saved posted_jobs.json: 2038 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:26.410Z] [BOT] 📍 [ROUTING] "New Grad 2026: Software Engineer (Ads ML Infrastructure)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:02:26.649Z] [BOT] ✅ Posted message: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb
[2026-02-01T17:02:26.649Z] [BOT] 💾 Added channel posting: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T17:02:26.650Z] [BOT] 💾 BEFORE MERGE: 2039 jobs in memory (cached)
[2026-02-01T17:02:26.683Z] [BOT] ✅ Loaded V2 database: 2038 jobs
💾 DISK STATE: 2038 jobs on disk
[2026-02-01T17:02:26.684Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2039
[2026-02-01T17:02:26.688Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:26.688Z] [BOT] 💾 AFTER MERGE: 2039 jobs (merged disk + memory)
[2026-02-01T17:02:26.689Z] [BOT] ✅ No jobs to archive (all 2039 jobs within 7-day window)
[2026-02-01T17:02:26.791Z] [BOT] 💾 Saved posted_jobs.json: 2039 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:28.532Z] [BOT] ✅ Posted message: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:02:28.533Z] [BOT] 💾 Added channel posting: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T17:02:28.533Z] [BOT] 💾 BEFORE MERGE: 2039 jobs in memory (cached)
[2026-02-01T17:02:28.569Z] [BOT] ✅ Loaded V2 database: 2039 jobs
💾 DISK STATE: 2039 jobs on disk
[2026-02-01T17:02:28.570Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2039
[2026-02-01T17:02:28.574Z] [BOT] 🔀 Deep merged: New Grad 2026: Software Engineer (Ads ML Infrastructure) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:02:28.574Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2039 jobs (merged disk + memory)
[2026-02-01T17:02:28.575Z] [BOT] ✅ No jobs to archive (all 2039 jobs within 7-day window)
[2026-02-01T17:02:28.673Z] [BOT] 💾 Saved posted_jobs.json: 2039 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:30.176Z] [BOT] 📍 [ROUTING] "Multiple Roles - Web Development Student Support" @ edX
   Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:02:30.400Z] [BOT] ✅ Posted message: Multiple Roles - Web Development Student Support @ edX in #💻・tech-jobs
  ✅ Industry: Multiple Roles - Web Development Student Support @ edX
[2026-02-01T17:02:30.401Z] [BOT] 💾 Added channel posting: Multiple Roles - Web Development Student Support @ edX → category channel (1 total channels)
[2026-02-01T17:02:30.401Z] [BOT] 💾 BEFORE MERGE: 2040 jobs in memory (cached)
[2026-02-01T17:02:30.436Z] [BOT] ✅ Loaded V2 database: 2039 jobs
💾 DISK STATE: 2039 jobs on disk
[2026-02-01T17:02:30.436Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2040
[2026-02-01T17:02:30.440Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:30.440Z] [BOT] 💾 AFTER MERGE: 2040 jobs (merged disk + memory)
[2026-02-01T17:02:30.441Z] [BOT] ✅ No jobs to archive (all 2040 jobs within 7-day window)
[2026-02-01T17:02:30.560Z] [BOT] 💾 Saved posted_jobs.json: 2040 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:32.257Z] [BOT] ✅ Posted message: Multiple Roles - Web Development Student Support @ edX in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T17:02:32.257Z] [BOT] 💾 Added channel posting: Multiple Roles - Web Development Student Support @ edX → location channel (2 total channels)
[2026-02-01T17:02:32.257Z] [BOT] 💾 BEFORE MERGE: 2040 jobs in memory (cached)
[2026-02-01T17:02:32.291Z] [BOT] ✅ Loaded V2 database: 2040 jobs
💾 DISK STATE: 2040 jobs on disk
[2026-02-01T17:02:32.291Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2040
[2026-02-01T17:02:32.296Z] [BOT] 🔀 Deep merged: Multiple Roles - Web Development Student Support @ edX (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:02:32.296Z] [BOT] 💾 AFTER MERGE: 2040 jobs (merged disk + memory)
[2026-02-01T17:02:32.297Z] [BOT] ✅ No jobs to archive (all 2040 jobs within 7-day window)
[2026-02-01T17:02:32.395Z] [BOT] 💾 Saved posted_jobs.json: 2040 active jobs
[2026-02-01T17:02:32.398Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:33.898Z] [BOT] 📍 [ROUTING] "Production Programmer – Entry Level SQL Developer" @ ORG_9dc72f07 USA
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:02:34.158Z] [BOT] ✅ Posted message: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA in #💻・tech-jobs
[2026-02-01T17:02:34.158Z] [BOT] ✅ Industry: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA
[2026-02-01T17:02:34.159Z] [BOT] 💾 Added channel posting: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA → category channel (1 total channels)
[2026-02-01T17:02:34.159Z] [BOT] 💾 BEFORE MERGE: 2041 jobs in memory (cached)
[2026-02-01T17:02:34.193Z] [BOT] ✅ Loaded V2 database: 2040 jobs
💾 DISK STATE: 2040 jobs on disk
[2026-02-01T17:02:34.193Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2041
[2026-02-01T17:02:34.199Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:34.199Z] [BOT] 💾 AFTER MERGE: 2041 jobs (merged disk + memory)
[2026-02-01T17:02:34.201Z] [BOT] ✅ No jobs to archive (all 2041 jobs within 7-day window)
[2026-02-01T17:02:34.298Z] [BOT] 💾 Saved posted_jobs.json: 2041 active jobs
[2026-02-01T17:02:34.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:36.087Z] [BOT] ✅ Posted message: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:02:36.088Z] [BOT] 💾 Added channel posting: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA → location channel (2 total channels)
💾 BEFORE MERGE: 2041 jobs in memory (cached)
[2026-02-01T17:02:36.121Z] [BOT] ✅ Loaded V2 database: 2041 jobs
💾 DISK STATE: 2041 jobs on disk
[2026-02-01T17:02:36.121Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2041
[2026-02-01T17:02:36.125Z] [BOT] 🔀 Deep merged: Production Programmer – Entry Level SQL Developer @ ORG_9dc72f07 USA (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:02:36.125Z] [BOT] 💾 AFTER MERGE: 2041 jobs (merged disk + memory)
[2026-02-01T17:02:36.126Z] [BOT] ✅ No jobs to archive (all 2041 jobs within 7-day window)
[2026-02-01T17:02:36.223Z] [BOT] 💾 Saved posted_jobs.json: 2041 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:37.724Z] [BOT] 📍 [ROUTING] "Graduate C++ Software Engineer" @ ORG_2de802b0 Vinci
   Category: TECH (matched: "software")
[2026-02-01T17:02:37.724Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:02:37.908Z] [BOT] ✅ Posted message: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci in #💻・tech-jobs
  ✅ Industry: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci
[2026-02-01T17:02:37.908Z] [BOT] 💾 Added channel posting: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci → category channel (1 total channels)
[2026-02-01T17:02:37.909Z] [BOT] 💾 BEFORE MERGE: 2042 jobs in memory (cached)
[2026-02-01T17:02:37.950Z] [BOT] ✅ Loaded V2 database: 2041 jobs
💾 DISK STATE: 2041 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2042
[2026-02-01T17:02:37.955Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:37.955Z] [BOT] 💾 AFTER MERGE: 2042 jobs (merged disk + memory)
[2026-02-01T17:02:37.960Z] [BOT] ✅ No jobs to archive (all 2042 jobs within 7-day window)
[2026-02-01T17:02:38.065Z] [BOT] 💾 Saved posted_jobs.json: 2042 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:40.024Z] [BOT] ✅ Posted message: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:02:40.025Z] [BOT] 💾 Added channel posting: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci → location channel (2 total channels)
[2026-02-01T17:02:40.025Z] [BOT] 💾 BEFORE MERGE: 2042 jobs in memory (cached)
[2026-02-01T17:02:40.061Z] [BOT] ✅ Loaded V2 database: 2042 jobs
[2026-02-01T17:02:40.061Z] [BOT] 💾 DISK STATE: 2042 jobs on disk
[2026-02-01T17:02:40.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2042
[2026-02-01T17:02:40.065Z] [BOT] 🔀 Deep merged: Graduate C++ Software Engineer @ ORG_2de802b0 Vinci (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:02:40.066Z] [BOT] 💾 AFTER MERGE: 2042 jobs (merged disk + memory)
[2026-02-01T17:02:40.067Z] [BOT] ✅ No jobs to archive (all 2042 jobs within 7-day window)
[2026-02-01T17:02:40.164Z] [BOT] 💾 Saved posted_jobs.json: 2042 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:41.666Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:02:41.932Z] [BOT] ✅ Posted message: Full Stack Software Engineer - Starlink @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Full Stack Software Engineer - Starlink @ ORG_afd623b1
[2026-02-01T17:02:41.933Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer - Starlink @ ORG_afd623b1 → category channel (1 total channels)
[2026-02-01T17:02:41.933Z] [BOT] 💾 BEFORE MERGE: 2043 jobs in memory (cached)
[2026-02-01T17:02:41.971Z] [BOT] ✅ Loaded V2 database: 2042 jobs
💾 DISK STATE: 2042 jobs on disk
[2026-02-01T17:02:41.971Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2043
[2026-02-01T17:02:41.976Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:41.976Z] [BOT] 💾 AFTER MERGE: 2043 jobs (merged disk + memory)
[2026-02-01T17:02:41.977Z] [BOT] ✅ No jobs to archive (all 2043 jobs within 7-day window)
[2026-02-01T17:02:42.083Z] [BOT] 💾 Saved posted_jobs.json: 2043 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:43.819Z] [BOT] ✅ Posted message: Full Stack Software Engineer - Starlink @ ORG_afd623b1 in #📍・JID_6daed763
[2026-02-01T17:02:43.819Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T17:02:43.820Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer - Starlink @ ORG_afd623b1 → location channel (2 total channels)
[2026-02-01T17:02:43.820Z] [BOT] 💾 BEFORE MERGE: 2043 jobs in memory (cached)
[2026-02-01T17:02:43.854Z] [BOT] ✅ Loaded V2 database: 2043 jobs
💾 DISK STATE: 2043 jobs on disk
[2026-02-01T17:02:43.854Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2043
[2026-02-01T17:02:43.858Z] [BOT] 🔀 Deep merged: Full Stack Software Engineer - Starlink @ ORG_afd623b1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:02:43.858Z] [BOT] 💾 AFTER MERGE: 2043 jobs (merged disk + memory)
[2026-02-01T17:02:43.860Z] [BOT] ✅ No jobs to archive (all 2043 jobs within 7-day window)
[2026-02-01T17:02:43.952Z] [BOT] 💾 Saved posted_jobs.json: 2043 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:45.455Z] [BOT] 📍 [ROUTING] "Technician - Mapping I" @ ORG_6f8a62f0 Hathaway Energy
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:02:45.786Z] [BOT] ✅ Posted message: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy in #💻・tech-jobs
  ✅ Industry: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy
[2026-02-01T17:02:45.787Z] [BOT] 💾 Added channel posting: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy → category channel (1 total channels)
[2026-02-01T17:02:45.787Z] [BOT] 💾 BEFORE MERGE: 2044 jobs in memory (cached)
[2026-02-01T17:02:45.820Z] [BOT] ✅ Loaded V2 database: 2043 jobs
💾 DISK STATE: 2043 jobs on disk
[2026-02-01T17:02:45.821Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2044
[2026-02-01T17:02:45.824Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:45.824Z] [BOT] 💾 AFTER MERGE: 2044 jobs (merged disk + memory)
[2026-02-01T17:02:45.825Z] [BOT] ✅ No jobs to archive (all 2044 jobs within 7-day window)
[2026-02-01T17:02:45.943Z] [BOT] 💾 Saved posted_jobs.json: 2044 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:47.653Z] [BOT] ✅ Posted message: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:02:47.654Z] [BOT] 💾 Added channel posting: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy → location channel (2 total channels)
[2026-02-01T17:02:47.654Z] [BOT] 💾 BEFORE MERGE: 2044 jobs in memory (cached)
[2026-02-01T17:02:47.687Z] [BOT] ✅ Loaded V2 database: 2044 jobs
💾 DISK STATE: 2044 jobs on disk
[2026-02-01T17:02:47.688Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2044
[2026-02-01T17:02:47.692Z] [BOT] 🔀 Deep merged: Technician - Mapping I @ ORG_6f8a62f0 Hathaway Energy (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:02:47.692Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2044 jobs (merged disk + memory)
[2026-02-01T17:02:47.693Z] [BOT] ✅ No jobs to archive (all 2044 jobs within 7-day window)
[2026-02-01T17:02:47.791Z] [BOT] 💾 Saved posted_jobs.json: 2044 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:52.292Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T17:02:52.293Z] [BOT] 📍 [ROUTING] "New Grad 2026: Machine Learning Engineer (Commerce Ads)" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T17:02:52.293Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:02:52.526Z] [BOT] ✅ Posted message: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb
[2026-02-01T17:02:52.527Z] [BOT] 💾 Added channel posting: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T17:02:52.527Z] [BOT] 💾 BEFORE MERGE: 2045 jobs in memory (cached)
[2026-02-01T17:02:52.561Z] [BOT] ✅ Loaded V2 database: 2044 jobs
💾 DISK STATE: 2044 jobs on disk
[2026-02-01T17:02:52.561Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2045
[2026-02-01T17:02:52.566Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:52.566Z] [BOT] 💾 AFTER MERGE: 2045 jobs (merged disk + memory)
[2026-02-01T17:02:52.567Z] [BOT] ✅ No jobs to archive (all 2045 jobs within 7-day window)
[2026-02-01T17:02:52.682Z] [BOT] 💾 Saved posted_jobs.json: 2045 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:54.621Z] [BOT] ✅ Posted message: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:02:54.622Z] [BOT] 💾 Added channel posting: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T17:02:54.622Z] [BOT] 💾 BEFORE MERGE: 2045 jobs in memory (cached)
[2026-02-01T17:02:54.657Z] [BOT] ✅ Loaded V2 database: 2045 jobs
💾 DISK STATE: 2045 jobs on disk
[2026-02-01T17:02:54.658Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2045
[2026-02-01T17:02:54.662Z] [BOT] 🔀 Deep merged: New Grad 2026: Machine Learning Engineer (Commerce Ads) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:02:54.662Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2045 jobs (merged disk + memory)
[2026-02-01T17:02:54.663Z] [BOT] ✅ No jobs to archive (all 2045 jobs within 7-day window)
[2026-02-01T17:02:54.768Z] [BOT] 💾 Saved posted_jobs.json: 2045 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:56.270Z] [BOT] 📍 [ROUTING] "New Grad 2026: Machine Learning/Research Engineer (Ads Core Global)" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:02:56.270Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:02:56.903Z] [BOT] ✅ Posted message: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb
[2026-02-01T17:02:56.904Z] [BOT] 💾 Added channel posting: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T17:02:56.904Z] [BOT] 💾 BEFORE MERGE: 2046 jobs in memory (cached)
[2026-02-01T17:02:56.938Z] [BOT] ✅ Loaded V2 database: 2045 jobs
💾 DISK STATE: 2045 jobs on disk
[2026-02-01T17:02:56.938Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2046
[2026-02-01T17:02:56.942Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:02:56.942Z] [BOT] 💾 AFTER MERGE: 2046 jobs (merged disk + memory)
[2026-02-01T17:02:56.944Z] [BOT] ✅ No jobs to archive (all 2046 jobs within 7-day window)
[2026-02-01T17:02:57.036Z] [BOT] 💾 Saved posted_jobs.json: 2046 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:02:58.858Z] [BOT] ✅ Posted message: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:02:58.859Z] [BOT] 💾 Added channel posting: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T17:02:58.859Z] [BOT] 💾 BEFORE MERGE: 2046 jobs in memory (cached)
[2026-02-01T17:02:58.893Z] [BOT] ✅ Loaded V2 database: 2046 jobs
💾 DISK STATE: 2046 jobs on disk
[2026-02-01T17:02:58.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2046
[2026-02-01T17:02:58.897Z] [BOT] 🔀 Deep merged: New Grad 2026: Machine Learning/Research Engineer (Ads Core Global) @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:02:58.897Z] [BOT] 💾 AFTER MERGE: 2046 jobs (merged disk + memory)
[2026-02-01T17:02:58.898Z] [BOT] ✅ No jobs to archive (all 2046 jobs within 7-day window)
[2026-02-01T17:02:59.013Z] [BOT] 💾 Saved posted_jobs.json: 2046 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:03:00.514Z] [BOT] 📍 [ROUTING] "Software Engineer Large Model System Graduate - Machine Learning Systems" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:03:00.514Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:03:00.688Z] [BOT] ✅ Posted message: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T17:03:00.688Z] [BOT] ✅ Industry: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c
[2026-02-01T17:03:00.689Z] [BOT] 💾 Added channel posting: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T17:03:00.689Z] [BOT] 💾 BEFORE MERGE: 2047 jobs in memory (cached)
[2026-02-01T17:03:00.723Z] [BOT] ✅ Loaded V2 database: 2046 jobs
💾 DISK STATE: 2046 jobs on disk
[2026-02-01T17:03:00.724Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2047
[2026-02-01T17:03:00.728Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:03:00.728Z] [BOT] 💾 AFTER MERGE: 2047 jobs (merged disk + memory)
[2026-02-01T17:03:00.729Z] [BOT] ✅ No jobs to archive (all 2047 jobs within 7-day window)
[2026-02-01T17:03:00.822Z] [BOT] 💾 Saved posted_jobs.json: 2047 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:03:02.521Z] [BOT] ✅ Posted message: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T17:03:02.522Z] [BOT] 💾 Added channel posting: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T17:03:02.522Z] [BOT] 💾 BEFORE MERGE: 2047 jobs in memory (cached)
[2026-02-01T17:03:02.555Z] [BOT] ✅ Loaded V2 database: 2047 jobs
💾 DISK STATE: 2047 jobs on disk
[2026-02-01T17:03:02.556Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2047
[2026-02-01T17:03:02.559Z] [BOT] 🔀 Deep merged: Software Engineer Large Model System Graduate - Machine Learning Systems @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:03:02.559Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2047 jobs (merged disk + memory)
[2026-02-01T17:03:02.560Z] [BOT] ✅ No jobs to archive (all 2047 jobs within 7-day window)
[2026-02-01T17:03:02.665Z] [BOT] 💾 Saved posted_jobs.json: 2047 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:03:07.167Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T17:03:07.168Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "901a29eee1d35c8f"
[2026-02-01T17:03:07.168Z] [BOT] ⏭️  Skipping duplicate: JID_7bfc0bc3 (posted within 7 days)
[2026-02-01T17:03:07.169Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c21045cd..." not found, but found as SHA256 "07b48e556ef1ec48"
[2026-02-01T17:03:07.169Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_13c19059 (posted within 7 days)
[2026-02-01T17:03:07.169Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f9eea33b..." not found, but found as SHA256 "654084eb2529d9bc"
[2026-02-01T17:03:07.169Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e618d0d3 (posted within 7 days)
[2026-02-01T17:03:07.169Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_09ff7e74..." not found, but found as SHA256 "1928b34c04749ed6"
[2026-02-01T17:03:07.169Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_42df6b84 (posted within 7 days)
[2026-02-01T17:03:07.170Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_78eb80ca..." not found, but found as SHA256 "7c110f73dfd52789"
⏭️  Skipping duplicate: JID_ca942bfb (posted within 7 days)
[2026-02-01T17:03:07.170Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1a5ff3cc..." not found, but found as SHA256 "6d286a45f1f3b76a"
[2026-02-01T17:03:07.170Z] [BOT] ⏭️  Skipping duplicate: JID_0e76d18f (posted within 7 days)
[2026-02-01T17:03:07.170Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_379fb67d..." not found, but found as SHA256 "e362af1cb5e0a841"
[2026-02-01T17:03:07.170Z] [BOT] ⏭️  Skipping duplicate: JID_085b4a59 (posted within 7 days)
[2026-02-01T17:03:07.170Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f2b30348..." not found, but found as SHA256 "f3af6fc6713aedeb"
[2026-02-01T17:03:07.171Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2a1577a7-detail (posted within 7 days)
[2026-02-01T17:03:07.171Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8461b180..." not found, but found as SHA256 "c45c9e52a53b173e"
[2026-02-01T17:03:07.171Z] [BOT] ⏭️  Skipping duplicate: JID_12dc5c2f (posted within 7 days)
[2026-02-01T17:03:07.171Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_543485ee..." not found, but found as SHA256 "4cb6f00859ffb7d4"
[2026-02-01T17:03:07.171Z] [BOT] ⏭️  Skipping duplicate: JID_b54cc3d5-cx_1-job-10002986 (posted within 7 days)
[2026-02-01T17:03:07.288Z] [BOT] ✅ Loaded pending queue: 2949 total (872 pending, 50 enriched, 2027 posted)
[2026-02-01T17:03:07.473Z] [BOT] ✅ Saved pending queue: 2949 total (872 pending, 40 enriched, 2037 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T17:03:07.563Z] [BOT] 📂 Loaded 12118 existing routing entries
[2026-02-01T17:03:07.718Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T17:03:07.718Z] [BOT] Total entries: 12128
   Timestamp: 2026-02-01T17:03:07.653Z
[2026-02-01T17:03:07.718Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T17:03:07.718Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T17:03:07.719Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-01T17:03:07.719Z] [BOT] Total posts: 20
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #📍・JID_6daed763: 4 posts
[2026-02-01T17:03:07.719Z] [BOT] 3. #🌉・JID_739bbc0b: 3 posts
     4. #🤖・ai-jobs: 3 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T17:03:07.719Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T17:03:07.719Z] [BOT] 💾 BEFORE MERGE: 2047 jobs in memory (cached)
[2026-02-01T17:03:07.759Z] [BOT] ✅ Loaded V2 database: 2047 jobs
💾 DISK STATE: 2047 jobs on disk
[2026-02-01T17:03:07.759Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2047
[2026-02-01T17:03:07.763Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:03:07.763Z] [BOT] 💾 AFTER MERGE: 2047 jobs (merged disk + memory)
[2026-02-01T17:03:07.764Z] [BOT] ✅ No jobs to archive (all 2047 jobs within 7-day window)
[2026-02-01T17:03:07.859Z] [BOT] 💾 Saved posted_jobs.json: 2047 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T17:03:09.894Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3756) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*