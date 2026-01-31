# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T07:19:04.809Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T07:18:25.443Z] ========================================
[2026-01-31T07:18:25.445Z] Discord Bot Execution Log
[2026-01-31T07:18:25.445Z] Environment: GitHub Actions
[2026-01-31T07:18:25.445Z] Node Version: v20.20.0
[2026-01-31T07:18:25.445Z] ========================================
[2026-01-31T07:18:25.445Z] Environment Variables Check:
[2026-01-31T07:18:25.445Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T07:18:25.445Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.445Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T07:18:25.446Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T07:18:25.446Z] 
Multi-Channel Configuration:
[2026-01-31T07:18:25.446Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T07:18:25.446Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T07:18:25.447Z] 
Data Files Check:
[2026-01-31T07:18:25.448Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T07:18:25.479Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5949351 bytes)
[2026-01-31T07:18:25.479Z] 
========================================
[2026-01-31T07:18:25.479Z] Starting Enhanced Discord Bot...
[2026-01-31T07:18:25.479Z] ========================================
[2026-01-31T07:18:26.046Z] [BOT] ✅ Loaded V2 database: 918 jobs
[2026-01-31T07:18:26.665Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T07:18:26.666Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T07:18:26.666Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T07:18:26.801Z] [BOT] ✅ Loaded pending queue: 2958 total (2019 pending, 50 enriched, 889 posted)
[2026-01-31T07:18:26.801Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T07:18:26.802Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T07:18:26.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T07:18:26.803Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T07:18:26.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T07:18:26.803Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T07:18:26.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T07:18:26.804Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T07:18:26.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T07:18:26.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T07:18:26.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T07:18:26.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T07:18:26.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T07:18:26.805Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T07:18:26.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T07:18:26.805Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T07:18:26.805Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T07:18:26.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T07:18:26.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T07:18:26.806Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T07:18:26.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T07:18:26.806Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T07:18:26.807Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T07:18:26.815Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T07:18:26.815Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer at Oracle
[2026-01-31T07:18:26.815Z] [BOT] 🚫 Skipping blacklisted job: People Analytics Lead at airtable
[2026-01-31T07:18:26.932Z] [BOT] ✅ Loaded pending queue: 2958 total (2019 pending, 50 enriched, 889 posted)
[2026-01-31T07:18:27.129Z] [BOT] ✅ Saved pending queue: 2956 total (2019 pending, 48 enriched, 889 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T07:18:27.129Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T07:18:27.130Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T07:18:27.131Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T07:18:27.131Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T07:18:27.131Z] [BOT] - Android Sales Expert @ 2020 Companies: sf, alameda
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T07:18:27.135Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-31T07:18:27.135Z] [BOT] 📍 [ROUTING] "Manufacturing Data Analyst" @ ORG_2fb6cbf5 Industries
[2026-01-31T07:18:27.136Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T07:18:27.154Z] [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T07:18:27.365Z] [BOT] ✅ Posted message: Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries in #📊・JID_fb739488
[2026-01-31T07:18:27.365Z] [BOT] ✅ Industry: Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries
[2026-01-31T07:18:27.366Z] [BOT] 💾 Added channel posting: Manufacturing Data Analyst @ ORG_2fb6cbf5 Industries → category channel (1 total channels)
[2026-01-31T07:18:27.366Z] [BOT] 💾 BEFORE MERGE: 919 jobs in memory (cached)
[2026-01-31T07:18:27.387Z] [BOT] ✅ Loaded V2 database: 918 jobs
💾 DISK STATE: 918 jobs on disk
[2026-01-31T07:18:27.387Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=919
[2026-01-31T07:18:27.390Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:27.390Z] [BOT] 💾 AFTER MERGE: 919 jobs (merged disk + memory)
[2026-01-31T07:18:27.391Z] [BOT] ✅ No jobs to archive (all 919 jobs within 7-day window)
[2026-01-31T07:18:27.457Z] [BOT] 💾 Saved posted_jobs.json: 919 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:28.960Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_1954b120
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T07:18:28.960Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T07:18:29.123Z] [BOT] ✅ Posted message: Data Scientist @ ORG_1954b120 in #📊・JID_fb739488
[2026-01-31T07:18:29.123Z] [BOT] ✅ Industry: Data Scientist @ ORG_1954b120
[2026-01-31T07:18:29.124Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_1954b120 → category channel (1 total channels)
[2026-01-31T07:18:29.124Z] [BOT] 💾 BEFORE MERGE: 920 jobs in memory (cached)
[2026-01-31T07:18:29.142Z] [BOT] ✅ Loaded V2 database: 919 jobs
💾 DISK STATE: 919 jobs on disk
[2026-01-31T07:18:29.143Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=920
[2026-01-31T07:18:29.145Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:29.145Z] [BOT] 💾 AFTER MERGE: 920 jobs (merged disk + memory)
[2026-01-31T07:18:29.145Z] [BOT] ✅ No jobs to archive (all 920 jobs within 7-day window)
[2026-01-31T07:18:29.207Z] [BOT] 💾 Saved posted_jobs.json: 920 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:30.708Z] [BOT] 📍 [ROUTING] "Data Scientist I - Hybrid" @ ORG_96324500
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T07:18:30.708Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T07:18:30.966Z] [BOT] ✅ Posted message: Data Scientist I - Hybrid @ ORG_96324500 in #📊・JID_fb739488
[2026-01-31T07:18:30.966Z] [BOT] ✅ Industry: Data Scientist I - Hybrid @ ORG_96324500
[2026-01-31T07:18:30.967Z] [BOT] 💾 Added channel posting: Data Scientist I - Hybrid @ ORG_96324500 → category channel (1 total channels)
[2026-01-31T07:18:30.967Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory (cached)
[2026-01-31T07:18:30.985Z] [BOT] ✅ Loaded V2 database: 920 jobs
💾 DISK STATE: 920 jobs on disk
[2026-01-31T07:18:30.986Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=921
[2026-01-31T07:18:30.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:30.988Z] [BOT] 💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-31T07:18:30.989Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-31T07:18:31.048Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:32.738Z] [BOT] ✅ Posted message: Data Scientist I - Hybrid @ ORG_96324500 in #🗽・JID_98d4f0de
[2026-01-31T07:18:32.738Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T07:18:32.738Z] [BOT] 💾 Added channel posting: Data Scientist I - Hybrid @ ORG_96324500 → location channel (2 total channels)
[2026-01-31T07:18:32.739Z] [BOT] 💾 BEFORE MERGE: 921 jobs in memory (cached)
[2026-01-31T07:18:32.757Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-31T07:18:32.758Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=921
[2026-01-31T07:18:32.760Z] [BOT] 🔀 Deep merged: Data Scientist I - Hybrid @ ORG_96324500 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T07:18:32.760Z] [BOT] 💾 AFTER MERGE: 921 jobs (merged disk + memory)
[2026-01-31T07:18:32.761Z] [BOT] ✅ No jobs to archive (all 921 jobs within 7-day window)
[2026-01-31T07:18:32.820Z] [BOT] 💾 Saved posted_jobs.json: 921 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:37.321Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T07:18:37.322Z] [BOT] 📍 [ROUTING] "Software Engineer - Full Stack Entry - Mid" @ ORG_fee50aac
[2026-01-31T07:18:37.322Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:18:37.483Z] [BOT] ✅ Posted message: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #💻・tech-jobs
[2026-01-31T07:18:37.483Z] [BOT] ✅ Industry: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac
[2026-01-31T07:18:37.484Z] [BOT] 💾 Added channel posting: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac → category channel (1 total channels)
[2026-01-31T07:18:37.484Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory (cached)
[2026-01-31T07:18:37.502Z] [BOT] ✅ Loaded V2 database: 921 jobs
💾 DISK STATE: 921 jobs on disk
[2026-01-31T07:18:37.502Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=922
[2026-01-31T07:18:37.505Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:37.506Z] [BOT] 💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-31T07:18:37.506Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-31T07:18:37.574Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:39.353Z] [BOT] ✅ Posted message: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T07:18:39.353Z] [BOT] 💾 Added channel posting: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac → location channel (2 total channels)
[2026-01-31T07:18:39.353Z] [BOT] 💾 BEFORE MERGE: 922 jobs in memory (cached)
[2026-01-31T07:18:39.370Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-31T07:18:39.371Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=922
[2026-01-31T07:18:39.373Z] [BOT] 🔀 Deep merged: Software Engineer - Full Stack Entry - Mid @ ORG_fee50aac (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 922 jobs (merged disk + memory)
[2026-01-31T07:18:39.374Z] [BOT] ✅ No jobs to archive (all 922 jobs within 7-day window)
[2026-01-31T07:18:39.430Z] [BOT] 💾 Saved posted_jobs.json: 922 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:40.933Z] [BOT] 📍 [ROUTING] "Android Sales Expert" @ 2020 Companies
[2026-01-31T07:18:40.933Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:18:41.150Z] [BOT] ✅ Posted message: Android Sales Expert @ 2020 Companies in #💻・tech-jobs
  ✅ Industry: Android Sales Expert @ 2020 Companies
[2026-01-31T07:18:41.151Z] [BOT] 💾 Added channel posting: Android Sales Expert @ 2020 Companies → category channel (1 total channels)
[2026-01-31T07:18:41.151Z] [BOT] 💾 BEFORE MERGE: 923 jobs in memory (cached)
[2026-01-31T07:18:41.169Z] [BOT] ✅ Loaded V2 database: 922 jobs
💾 DISK STATE: 922 jobs on disk
[2026-01-31T07:18:41.169Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=923
[2026-01-31T07:18:41.172Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 923 jobs (merged disk + memory)
[2026-01-31T07:18:41.173Z] [BOT] ✅ No jobs to archive (all 923 jobs within 7-day window)
[2026-01-31T07:18:41.230Z] [BOT] 💾 Saved posted_jobs.json: 923 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:42.731Z] [BOT] 📍 [ROUTING] "Appian Associate Technical Consultant" @ ORG_60d01372
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:18:42.935Z] [BOT] ✅ Posted message: Appian Associate Technical Consultant @ ORG_60d01372 in #💻・tech-jobs
  ✅ Industry: Appian Associate Technical Consultant @ ORG_60d01372
[2026-01-31T07:18:42.935Z] [BOT] 💾 Added channel posting: Appian Associate Technical Consultant @ ORG_60d01372 → category channel (1 total channels)
[2026-01-31T07:18:42.935Z] [BOT] 💾 BEFORE MERGE: 924 jobs in memory (cached)
[2026-01-31T07:18:42.954Z] [BOT] ✅ Loaded V2 database: 923 jobs
💾 DISK STATE: 923 jobs on disk
[2026-01-31T07:18:42.954Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=924
[2026-01-31T07:18:42.956Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 924 jobs (merged disk + memory)
[2026-01-31T07:18:42.957Z] [BOT] ✅ No jobs to archive (all 924 jobs within 7-day window)
[2026-01-31T07:18:43.015Z] [BOT] 💾 Saved posted_jobs.json: 924 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:44.517Z] [BOT] 📍 [ROUTING] "Associate – Application Engineer" @ ORG_86a62f4a
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:18:44.761Z] [BOT] ✅ Posted message: Associate – Application Engineer @ ORG_86a62f4a in #💻・tech-jobs
  ✅ Industry: Associate – Application Engineer @ ORG_86a62f4a
[2026-01-31T07:18:44.762Z] [BOT] 💾 Added channel posting: Associate – Application Engineer @ ORG_86a62f4a → category channel (1 total channels)
[2026-01-31T07:18:44.762Z] [BOT] 💾 BEFORE MERGE: 925 jobs in memory (cached)
[2026-01-31T07:18:44.781Z] [BOT] ✅ Loaded V2 database: 924 jobs
💾 DISK STATE: 924 jobs on disk
[2026-01-31T07:18:44.781Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=925
[2026-01-31T07:18:44.783Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:44.783Z] [BOT] 💾 AFTER MERGE: 925 jobs (merged disk + memory)
[2026-01-31T07:18:44.784Z] [BOT] ✅ No jobs to archive (all 925 jobs within 7-day window)
[2026-01-31T07:18:44.850Z] [BOT] 💾 Saved posted_jobs.json: 925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:46.494Z] [BOT] ✅ Posted message: Associate – Application Engineer @ ORG_86a62f4a in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T07:18:46.495Z] [BOT] 💾 Added channel posting: Associate – Application Engineer @ ORG_86a62f4a → location channel (2 total channels)
[2026-01-31T07:18:46.495Z] [BOT] 💾 BEFORE MERGE: 925 jobs in memory (cached)
[2026-01-31T07:18:46.512Z] [BOT] ✅ Loaded V2 database: 925 jobs
💾 DISK STATE: 925 jobs on disk
[2026-01-31T07:18:46.512Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=925
[2026-01-31T07:18:46.515Z] [BOT] 🔀 Deep merged: Associate – Application Engineer @ ORG_86a62f4a (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T07:18:46.515Z] [BOT] 💾 AFTER MERGE: 925 jobs (merged disk + memory)
[2026-01-31T07:18:46.516Z] [BOT] ✅ No jobs to archive (all 925 jobs within 7-day window)
[2026-01-31T07:18:46.573Z] [BOT] 💾 Saved posted_jobs.json: 925 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:48.075Z] [BOT] 📍 [ROUTING] "Associate Software Engineer (Temporary)" @ ORG_dc008d0e Bros.
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T07:18:48.283Z] [BOT] ✅ Posted message: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. in #💻・tech-jobs
[2026-01-31T07:18:48.284Z] [BOT] ✅ Industry: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros.
[2026-01-31T07:18:48.284Z] [BOT] 💾 Added channel posting: Associate Software Engineer (Temporary) @ ORG_dc008d0e Bros. → category channel (1 total channels)
💾 BEFORE MERGE: 926 jobs in memory (cached)
[2026-01-31T07:18:48.303Z] [BOT] ✅ Loaded V2 database: 925 jobs
💾 DISK STATE: 925 jobs on disk
[2026-01-31T07:18:48.303Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=926
[2026-01-31T07:18:48.305Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:48.306Z] [BOT] 💾 AFTER MERGE: 926 jobs (merged disk + memory)
[2026-01-31T07:18:48.306Z] [BOT] ✅ No jobs to archive (all 926 jobs within 7-day window)
[2026-01-31T07:18:48.364Z] [BOT] 💾 Saved posted_jobs.json: 926 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:52.864Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T07:18:52.865Z] [BOT] 📍 [ROUTING] "FP&A Analyst, Strategic Planning" @ spotify
[2026-01-31T07:18:52.865Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T07:18:53.039Z] [BOT] ✅ Posted message: FP&A Analyst, Strategic Planning @ spotify in #🤖・ai-jobs
[2026-01-31T07:18:53.040Z] [BOT] ✅ Industry: FP&A Analyst, Strategic Planning @ spotify
[2026-01-31T07:18:53.040Z] [BOT] 💾 Added channel posting: FP&A Analyst, Strategic Planning @ spotify → category channel (1 total channels)
[2026-01-31T07:18:53.040Z] [BOT] 💾 BEFORE MERGE: 927 jobs in memory (cached)
[2026-01-31T07:18:53.059Z] [BOT] ✅ Loaded V2 database: 926 jobs
💾 DISK STATE: 926 jobs on disk
[2026-01-31T07:18:53.059Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=927
[2026-01-31T07:18:53.061Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:53.061Z] [BOT] 💾 AFTER MERGE: 927 jobs (merged disk + memory)
[2026-01-31T07:18:53.062Z] [BOT] ✅ No jobs to archive (all 927 jobs within 7-day window)
[2026-01-31T07:18:53.128Z] [BOT] 💾 Saved posted_jobs.json: 927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:54.913Z] [BOT] ✅ Posted message: FP&A Analyst, Strategic Planning @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T07:18:54.914Z] [BOT] 💾 Added channel posting: FP&A Analyst, Strategic Planning @ spotify → location channel (2 total channels)
[2026-01-31T07:18:54.914Z] [BOT] 💾 BEFORE MERGE: 927 jobs in memory (cached)
[2026-01-31T07:18:54.931Z] [BOT] ✅ Loaded V2 database: 927 jobs
💾 DISK STATE: 927 jobs on disk
[2026-01-31T07:18:54.932Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=927
[2026-01-31T07:18:54.934Z] [BOT] 🔀 Deep merged: FP&A Analyst, Strategic Planning @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-31T07:18:54.934Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 927 jobs (merged disk + memory)
[2026-01-31T07:18:54.935Z] [BOT] ✅ No jobs to archive (all 927 jobs within 7-day window)
[2026-01-31T07:18:54.991Z] [BOT] 💾 Saved posted_jobs.json: 927 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:18:56.492Z] [BOT] 📍 [ROUTING] "AI Developer I- Call Center" @ ORG_a151ceb1 Financial Bank
   Category: AI (matched: "artificial intelligence")
[2026-01-31T07:18:56.492Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T07:18:56.703Z] [BOT] ✅ Posted message: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank in #🤖・ai-jobs
[2026-01-31T07:18:56.704Z] [BOT] ✅ Industry: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank
[2026-01-31T07:18:56.704Z] [BOT] 💾 Added channel posting: AI Developer I- Call Center @ ORG_a151ceb1 Financial Bank → category channel (1 total channels)
[2026-01-31T07:18:56.704Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory (cached)
[2026-01-31T07:18:56.723Z] [BOT] ✅ Loaded V2 database: 927 jobs
💾 DISK STATE: 927 jobs on disk
[2026-01-31T07:18:56.723Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=928
[2026-01-31T07:18:56.725Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:18:56.725Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-31T07:18:56.726Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-31T07:18:56.783Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:19:01.285Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T07:19:01.286Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa367e41-ppg_careers-jo..." not found, but found as SHA256 "e2fa5362fd609baf"
⏭️  Skipping duplicate: JID_aa367e41-ppg_careers-JID_e53563da-analyst_jr2518708 (posted within 7 days)
[2026-01-31T07:19:01.286Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3b6de877-kbr_careers-jo..." not found, but found as SHA256 "ea2e876ff152d6e9"
⏭️  Skipping duplicate: JID_3b6de877-kbr_careers-JID_8424b0e0-mid_r2116871 (posted within 7 days)
[2026-01-31T07:19:01.287Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_71e5b25e..." not found, but found as SHA256 "4170992ffd92f586"
⏭️  Skipping duplicate: JID_df191ca9-external_careers-JID_aabf8ae3-expert_req_096760 (posted within 7 days)
[2026-01-31T07:19:01.287Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_01008d1c..." not found, but found as SHA256 "25a1db86d32f5144"
⏭️  Skipping duplicate: JID_cbd01f26-cx_1-job-2025003734 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f88fd0c9-..." not found, but found as SHA256 "2c7054aba4012b1e"
⏭️  Skipping duplicate: JID_f5db701e-scientist_320662 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e6593b0e..." not found, but found as SHA256 "b16dd00ccbd75f6b"
[2026-01-31T07:19:01.287Z] [BOT] ⏭️  Skipping duplicate: JID_d761c3b9-blackrock_professional-JID_dd388114-engineer_r258341-1 (posted within 7 days)
[2026-01-31T07:19:01.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2d114e4f..." not found, but found as SHA256 "ef8e7a78787892c1"
[2026-01-31T07:19:01.288Z] [BOT] ⏭️  Skipping duplicate: JID_3e9d0ef2 (posted within 7 days)
[2026-01-31T07:19:01.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f39a151..." not found, but found as SHA256 "694389e60c237705"
⏭️  Skipping duplicate: JID_ad33ad88-radian_external_career_site-JID_af066355-hybrid_r20250160 (posted within 7 days)
[2026-01-31T07:19:01.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5468cf71-first_f..." not found, but found as SHA256 "78388b153e4387fd"
[2026-01-31T07:19:01.288Z] [BOT] ⏭️  Skipping duplicate: JID_5468cf71-first_financial_bank-JID_a7a52860-center_jr102406 (posted within 7 days)
[2026-01-31T07:19:01.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8671a124..." not found, but found as SHA256 "bde8c6c8b3ce43e7"
[2026-01-31T07:19:01.288Z] [BOT] ⏭️  Skipping duplicate: JID_ee7c7aa1-_r000101071 (posted within 7 days)
[2026-01-31T07:19:01.388Z] [BOT] ✅ Loaded pending queue: 2956 total (2019 pending, 48 enriched, 889 posted)
[2026-01-31T07:19:01.587Z] [BOT] ✅ Saved pending queue: 2956 total (2019 pending, 38 enriched, 899 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T07:19:01.680Z] [BOT] 📂 Loaded 10980 existing routing entries
[2026-01-31T07:19:01.804Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T07:19:01.804Z] [BOT] Total entries: 10990
   Timestamp: 2026-01-31T07:19:01.760Z
[2026-01-31T07:19:01.805Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 30
   Successful: 14
   Failed: 0
   Skipped: 16
[2026-01-31T07:19:01.805Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 5
   Top channels:
[2026-01-31T07:19:01.805Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #📊・JID_fb739488: 3 posts
     3. #🗽・JID_98d4f0de: 3 posts
[2026-01-31T07:19:01.805Z] [BOT] 4. #🤖・ai-jobs: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-31T07:19:01.806Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T07:19:01.806Z] [BOT] 💾 BEFORE MERGE: 928 jobs in memory (cached)
[2026-01-31T07:19:01.826Z] [BOT] ✅ Loaded V2 database: 928 jobs
💾 DISK STATE: 928 jobs on disk
[2026-01-31T07:19:01.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=928
[2026-01-31T07:19:01.828Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T07:19:01.828Z] [BOT] 💾 AFTER MERGE: 928 jobs (merged disk + memory)
[2026-01-31T07:19:01.829Z] [BOT] ✅ No jobs to archive (all 928 jobs within 7-day window)
[2026-01-31T07:19:01.890Z] [BOT] 💾 Saved posted_jobs.json: 928 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T07:19:01.890Z] [BOT] ✅ Database saved successfully
[2026-01-31T07:19:03.924Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2589) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*