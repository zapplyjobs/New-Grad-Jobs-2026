# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T17:13:09.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T17:12:20.110Z] ========================================
[2026-02-01T17:12:20.112Z] Discord Bot Execution Log
[2026-02-01T17:12:20.112Z] Environment: GitHub Actions
[2026-02-01T17:12:20.113Z] Node Version: v20.20.0
[2026-02-01T17:12:20.113Z] ========================================
[2026-02-01T17:12:20.113Z] Environment Variables Check:
[2026-02-01T17:12:20.113Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T17:12:20.113Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T17:12:20.113Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T17:12:20.113Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T17:12:20.113Z] 
Multi-Channel Configuration:
[2026-02-01T17:12:20.113Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T17:12:20.113Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:12:20.113Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:12:20.114Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T17:12:20.114Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:12:20.114Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:12:20.114Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:12:20.114Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:12:20.114Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:12:20.114Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T17:12:20.114Z] 
Data Files Check:
[2026-02-01T17:12:20.115Z] .github/data/new_jobs.json: ✅ Exists (10 items, 60600 bytes)
[2026-02-01T17:12:20.168Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10242053 bytes)
[2026-02-01T17:12:20.168Z] 
========================================
[2026-02-01T17:12:20.168Z] Starting Enhanced Discord Bot...
[2026-02-01T17:12:20.168Z] ========================================
[2026-02-01T17:12:20.740Z] [BOT] ✅ Loaded V2 database: 2047 jobs
[2026-02-01T17:12:21.180Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T17:12:21.181Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T17:12:21.181Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T17:12:21.293Z] [BOT] ✅ Loaded pending queue: 2949 total (862 pending, 50 enriched, 2037 posted)
[2026-02-01T17:12:21.293Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T17:12:21.294Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:12:21.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T17:12:21.295Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T17:12:21.295Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:12:21.295Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T17:12:21.296Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T17:12:21.296Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T17:12:21.296Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T17:12:21.297Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T17:12:21.297Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T17:12:21.297Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T17:12:21.297Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T17:12:21.298Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T17:12:21.298Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T17:12:21.313Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T17:12:21.313Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T17:12:21.313Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T17:12:21.314Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-02-01T17:12:21.314Z] [BOT] (11 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-02-01T17:12:21.314Z] [BOT] - Junior Software Engineer @ mthree: salt lake, united states
   - Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ByteDance: seattle, san jose
   - Software Engineer – New Grad - Infrastructure @ Palantir: new york, seattle, washington, palo alto, denver
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T17:12:21.317Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-01T17:12:21.318Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_15516c0c
[2026-02-01T17:12:21.318Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:12:21.336Z] [BOT ERROR] (node:3093) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T17:12:21.701Z] [BOT] ✅ Posted message: Software Engineer @ ORG_15516c0c in #💻・tech-jobs
[2026-02-01T17:12:21.701Z] [BOT] ✅ Industry: Software Engineer @ ORG_15516c0c
[2026-02-01T17:12:21.702Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_15516c0c → category channel (1 total channels)
[2026-02-01T17:12:21.703Z] [BOT] 💾 BEFORE MERGE: 2048 jobs in memory (cached)
[2026-02-01T17:12:21.744Z] [BOT] ✅ Loaded V2 database: 2047 jobs
💾 DISK STATE: 2047 jobs on disk
[2026-02-01T17:12:21.744Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2048
[2026-02-01T17:12:21.749Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:21.749Z] [BOT] 💾 AFTER MERGE: 2048 jobs (merged disk + memory)
[2026-02-01T17:12:21.751Z] [BOT] ✅ No jobs to archive (all 2048 jobs within 7-day window)
[2026-02-01T17:12:21.889Z] [BOT] 💾 Saved posted_jobs.json: 2048 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:23.736Z] [BOT] ✅ Posted message: Software Engineer @ ORG_15516c0c in #🌉・JID_739bbc0b
[2026-02-01T17:12:23.736Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:12:23.737Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_15516c0c → location channel (2 total channels)
[2026-02-01T17:12:23.737Z] [BOT] 💾 BEFORE MERGE: 2048 jobs in memory (cached)
[2026-02-01T17:12:23.774Z] [BOT] ✅ Loaded V2 database: 2048 jobs
[2026-02-01T17:12:23.774Z] [BOT] 💾 DISK STATE: 2048 jobs on disk
[2026-02-01T17:12:23.774Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2048
[2026-02-01T17:12:23.778Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_15516c0c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:12:23.779Z] [BOT] 💾 AFTER MERGE: 2048 jobs (merged disk + memory)
[2026-02-01T17:12:23.780Z] [BOT] ✅ No jobs to archive (all 2048 jobs within 7-day window)
[2026-02-01T17:12:23.887Z] [BOT] 💾 Saved posted_jobs.json: 2048 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:25.387Z] [BOT] 📍 [ROUTING] "Platform Engineer: Kubernetes" @ supabase
   Category: TECH (matched: "data engineer")
[2026-02-01T17:12:25.387Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:12:25.534Z] [BOT] ✅ Posted message: Platform Engineer: Kubernetes @ supabase in #💻・tech-jobs
  ✅ Industry: Platform Engineer: Kubernetes @ supabase
[2026-02-01T17:12:25.535Z] [BOT] 💾 Added channel posting: Platform Engineer: Kubernetes @ supabase → category channel (1 total channels)
[2026-02-01T17:12:25.535Z] [BOT] 💾 BEFORE MERGE: 2049 jobs in memory (cached)
[2026-02-01T17:12:25.569Z] [BOT] ✅ Loaded V2 database: 2048 jobs
💾 DISK STATE: 2048 jobs on disk
[2026-02-01T17:12:25.569Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2049
[2026-02-01T17:12:25.574Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:25.574Z] [BOT] 💾 AFTER MERGE: 2049 jobs (merged disk + memory)
[2026-02-01T17:12:25.575Z] [BOT] ✅ No jobs to archive (all 2049 jobs within 7-day window)
[2026-02-01T17:12:25.677Z] [BOT] 💾 Saved posted_jobs.json: 2049 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:27.557Z] [BOT] ✅ Posted message: Platform Engineer: Kubernetes @ supabase in #🏠・JID_ead674af
[2026-02-01T17:12:27.557Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T17:12:27.557Z] [BOT] 💾 Added channel posting: Platform Engineer: Kubernetes @ supabase → location channel (2 total channels)
[2026-02-01T17:12:27.558Z] [BOT] 💾 BEFORE MERGE: 2049 jobs in memory (cached)
[2026-02-01T17:12:27.593Z] [BOT] ✅ Loaded V2 database: 2049 jobs
💾 DISK STATE: 2049 jobs on disk
[2026-02-01T17:12:27.594Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2049
[2026-02-01T17:12:27.598Z] [BOT] 🔀 Deep merged: Platform Engineer: Kubernetes @ supabase (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:12:27.598Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2049 jobs (merged disk + memory)
[2026-02-01T17:12:27.599Z] [BOT] ✅ No jobs to archive (all 2049 jobs within 7-day window)
[2026-02-01T17:12:27.698Z] [BOT] 💾 Saved posted_jobs.json: 2049 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:29.200Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:12:29.362Z] [BOT] ✅ Posted message: Junior Software Engineer @ mthree in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ mthree
[2026-02-01T17:12:29.363Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ mthree → category channel (1 total channels)
[2026-02-01T17:12:29.363Z] [BOT] 💾 BEFORE MERGE: 2050 jobs in memory (cached)
[2026-02-01T17:12:29.407Z] [BOT] ✅ Loaded V2 database: 2049 jobs
💾 DISK STATE: 2049 jobs on disk
[2026-02-01T17:12:29.408Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2050
[2026-02-01T17:12:29.412Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:29.412Z] [BOT] 💾 AFTER MERGE: 2050 jobs (merged disk + memory)
[2026-02-01T17:12:29.418Z] [BOT] ✅ No jobs to archive (all 2050 jobs within 7-day window)
[2026-02-01T17:12:29.524Z] [BOT] 💾 Saved posted_jobs.json: 2050 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:31.269Z] [BOT] ✅ Posted message: Junior Software Engineer @ mthree in #🗽・JID_98d4f0de
[2026-02-01T17:12:31.269Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T17:12:31.269Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ mthree → location channel (2 total channels)
[2026-02-01T17:12:31.269Z] [BOT] 💾 BEFORE MERGE: 2050 jobs in memory (cached)
[2026-02-01T17:12:31.303Z] [BOT] ✅ Loaded V2 database: 2050 jobs
💾 DISK STATE: 2050 jobs on disk
[2026-02-01T17:12:31.303Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2050
[2026-02-01T17:12:31.307Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ mthree (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:12:31.307Z] [BOT] 💾 AFTER MERGE: 2050 jobs (merged disk + memory)
[2026-02-01T17:12:31.309Z] [BOT] ✅ No jobs to archive (all 2050 jobs within 7-day window)
[2026-02-01T17:12:31.409Z] [BOT] 💾 Saved posted_jobs.json: 2050 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:32.911Z] [BOT] 📍 [ROUTING] "Support Engineer (EMEA - Weekends)" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:12:33.092Z] [BOT] ✅ Posted message: Support Engineer (EMEA - Weekends) @ supabase in #💻・tech-jobs
[2026-02-01T17:12:33.092Z] [BOT] ✅ Industry: Support Engineer (EMEA - Weekends) @ supabase
[2026-02-01T17:12:33.093Z] [BOT] 💾 Added channel posting: Support Engineer (EMEA - Weekends) @ supabase → category channel (1 total channels)
[2026-02-01T17:12:33.094Z] [BOT] 💾 BEFORE MERGE: 2051 jobs in memory (cached)
[2026-02-01T17:12:33.128Z] [BOT] ✅ Loaded V2 database: 2050 jobs
💾 DISK STATE: 2050 jobs on disk
[2026-02-01T17:12:33.129Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2051
[2026-02-01T17:12:33.133Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:33.133Z] [BOT] 💾 AFTER MERGE: 2051 jobs (merged disk + memory)
[2026-02-01T17:12:33.134Z] [BOT] ✅ No jobs to archive (all 2051 jobs within 7-day window)
[2026-02-01T17:12:33.256Z] [BOT] 💾 Saved posted_jobs.json: 2051 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:34.991Z] [BOT] ✅ Posted message: Support Engineer (EMEA - Weekends) @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T17:12:34.992Z] [BOT] 💾 Added channel posting: Support Engineer (EMEA - Weekends) @ supabase → location channel (2 total channels)
[2026-02-01T17:12:34.992Z] [BOT] 💾 BEFORE MERGE: 2051 jobs in memory (cached)
[2026-02-01T17:12:35.025Z] [BOT] ✅ Loaded V2 database: 2051 jobs
💾 DISK STATE: 2051 jobs on disk
[2026-02-01T17:12:35.025Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2051
[2026-02-01T17:12:35.029Z] [BOT] 🔀 Deep merged: Support Engineer (EMEA - Weekends) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:12:35.029Z] [BOT] 💾 AFTER MERGE: 2051 jobs (merged disk + memory)
[2026-02-01T17:12:35.030Z] [BOT] ✅ No jobs to archive (all 2051 jobs within 7-day window)
[2026-02-01T17:12:35.128Z] [BOT] 💾 Saved posted_jobs.json: 2051 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:36.630Z] [BOT] 📍 [ROUTING] "Support Engineer (AMER - Weekends)" @ supabase
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:12:36.826Z] [BOT] ✅ Posted message: Support Engineer (AMER - Weekends) @ supabase in #💻・tech-jobs
  ✅ Industry: Support Engineer (AMER - Weekends) @ supabase
[2026-02-01T17:12:36.827Z] [BOT] 💾 Added channel posting: Support Engineer (AMER - Weekends) @ supabase → category channel (1 total channels)
[2026-02-01T17:12:36.827Z] [BOT] 💾 BEFORE MERGE: 2052 jobs in memory (cached)
[2026-02-01T17:12:36.863Z] [BOT] ✅ Loaded V2 database: 2051 jobs
[2026-02-01T17:12:36.863Z] [BOT] 💾 DISK STATE: 2051 jobs on disk
[2026-02-01T17:12:36.864Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2052
[2026-02-01T17:12:36.867Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:36.867Z] [BOT] 💾 AFTER MERGE: 2052 jobs (merged disk + memory)
[2026-02-01T17:12:36.868Z] [BOT] ✅ No jobs to archive (all 2052 jobs within 7-day window)
[2026-02-01T17:12:36.984Z] [BOT] 💾 Saved posted_jobs.json: 2052 active jobs
[2026-02-01T17:12:36.984Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:38.726Z] [BOT] ✅ Posted message: Support Engineer (AMER - Weekends) @ supabase in #🏠・JID_ead674af
[2026-02-01T17:12:38.726Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-01T17:12:38.726Z] [BOT] 💾 Added channel posting: Support Engineer (AMER - Weekends) @ supabase → location channel (2 total channels)
[2026-02-01T17:12:38.726Z] [BOT] 💾 BEFORE MERGE: 2052 jobs in memory (cached)
[2026-02-01T17:12:38.760Z] [BOT] ✅ Loaded V2 database: 2052 jobs
[2026-02-01T17:12:38.760Z] [BOT] 💾 DISK STATE: 2052 jobs on disk
[2026-02-01T17:12:38.760Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2052
[2026-02-01T17:12:38.764Z] [BOT] 🔀 Deep merged: Support Engineer (AMER - Weekends) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:12:38.764Z] [BOT] 💾 AFTER MERGE: 2052 jobs (merged disk + memory)
[2026-02-01T17:12:38.765Z] [BOT] ✅ No jobs to archive (all 2052 jobs within 7-day window)
[2026-02-01T17:12:38.867Z] [BOT] 💾 Saved posted_jobs.json: 2052 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:43.369Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-02-01T17:12:43.370Z] [BOT] 📍 [ROUTING] "AI Research Engineer" @ ORG_412b5241 Lab 
   Category: AI (matched: "machine learning")
[2026-02-01T17:12:43.370Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:12:43.802Z] [BOT] ✅ Posted message: AI Research Engineer @ ORG_412b5241 Lab  in #🤖・ai-jobs
  ✅ Industry: AI Research Engineer @ ORG_412b5241 Lab
[2026-02-01T17:12:43.803Z] [BOT] 💾 Added channel posting: AI Research Engineer @ ORG_412b5241 Lab  → category channel (1 total channels)
[2026-02-01T17:12:43.803Z] [BOT] 💾 BEFORE MERGE: 2053 jobs in memory (cached)
[2026-02-01T17:12:43.838Z] [BOT] ✅ Loaded V2 database: 2052 jobs
💾 DISK STATE: 2052 jobs on disk
[2026-02-01T17:12:43.838Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2053
[2026-02-01T17:12:43.842Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:43.842Z] [BOT] 💾 AFTER MERGE: 2053 jobs (merged disk + memory)
[2026-02-01T17:12:43.843Z] [BOT] ✅ No jobs to archive (all 2053 jobs within 7-day window)
[2026-02-01T17:12:43.953Z] [BOT] 💾 Saved posted_jobs.json: 2053 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:45.600Z] [BOT] ✅ Posted message: AI Research Engineer @ ORG_412b5241 Lab  in #🌉・JID_739bbc0b
[2026-02-01T17:12:45.600Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:12:45.601Z] [BOT] 💾 Added channel posting: AI Research Engineer @ ORG_412b5241 Lab  → location channel (2 total channels)
[2026-02-01T17:12:45.601Z] [BOT] 💾 BEFORE MERGE: 2053 jobs in memory (cached)
[2026-02-01T17:12:45.635Z] [BOT] ✅ Loaded V2 database: 2053 jobs
💾 DISK STATE: 2053 jobs on disk
[2026-02-01T17:12:45.636Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2053
[2026-02-01T17:12:45.639Z] [BOT] 🔀 Deep merged: AI Research Engineer @ ORG_412b5241 Lab  (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:12:45.640Z] [BOT] 💾 AFTER MERGE: 2053 jobs (merged disk + memory)
[2026-02-01T17:12:45.641Z] [BOT] ✅ No jobs to archive (all 2053 jobs within 7-day window)
[2026-02-01T17:12:45.741Z] [BOT] 💾 Saved posted_jobs.json: 2053 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:47.242Z] [BOT] 📍 [ROUTING] "Software Engineer - IVR" @ ORG_ba13c5a3 Systems
[2026-02-01T17:12:47.243Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:12:47.514Z] [BOT] ✅ Posted message: Software Engineer - IVR @ ORG_ba13c5a3 Systems in #🤖・ai-jobs
[2026-02-01T17:12:47.514Z] [BOT] ✅ Industry: Software Engineer - IVR @ ORG_ba13c5a3 Systems
[2026-02-01T17:12:47.515Z] [BOT] 💾 Added channel posting: Software Engineer - IVR @ ORG_ba13c5a3 Systems → category channel (1 total channels)
💾 BEFORE MERGE: 2054 jobs in memory (cached)
[2026-02-01T17:12:47.549Z] [BOT] ✅ Loaded V2 database: 2053 jobs
💾 DISK STATE: 2053 jobs on disk
[2026-02-01T17:12:47.549Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2054
[2026-02-01T17:12:47.553Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:47.553Z] [BOT] 💾 AFTER MERGE: 2054 jobs (merged disk + memory)
[2026-02-01T17:12:47.554Z] [BOT] ✅ No jobs to archive (all 2054 jobs within 7-day window)
[2026-02-01T17:12:47.651Z] [BOT] 💾 Saved posted_jobs.json: 2054 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:49.430Z] [BOT] ✅ Posted message: Software Engineer - IVR @ ORG_ba13c5a3 Systems in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:12:49.431Z] [BOT] 💾 Added channel posting: Software Engineer - IVR @ ORG_ba13c5a3 Systems → location channel (2 total channels)
[2026-02-01T17:12:49.431Z] [BOT] 💾 BEFORE MERGE: 2054 jobs in memory (cached)
[2026-02-01T17:12:49.467Z] [BOT] ✅ Loaded V2 database: 2054 jobs
💾 DISK STATE: 2054 jobs on disk
[2026-02-01T17:12:49.468Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2054
[2026-02-01T17:12:49.471Z] [BOT] 🔀 Deep merged: Software Engineer - IVR @ ORG_ba13c5a3 Systems (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:12:49.471Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2054 jobs (merged disk + memory)
[2026-02-01T17:12:49.476Z] [BOT] ✅ No jobs to archive (all 2054 jobs within 7-day window)
[2026-02-01T17:12:49.580Z] [BOT] 💾 Saved posted_jobs.json: 2054 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:51.083Z] [BOT] 📍 [ROUTING] "Software Engineer - Full-Stack" @ ORG_e09a2b12
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:12:51.083Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:12:51.220Z] [BOT] ✅ Posted message: Software Engineer - Full-Stack @ ORG_e09a2b12 in #🤖・ai-jobs
[2026-02-01T17:12:51.220Z] [BOT] ✅ Industry: Software Engineer - Full-Stack @ ORG_e09a2b12
[2026-02-01T17:12:51.221Z] [BOT] 💾 Added channel posting: Software Engineer - Full-Stack @ ORG_e09a2b12 → category channel (1 total channels)
[2026-02-01T17:12:51.221Z] [BOT] 💾 BEFORE MERGE: 2055 jobs in memory (cached)
[2026-02-01T17:12:51.257Z] [BOT] ✅ Loaded V2 database: 2054 jobs
💾 DISK STATE: 2054 jobs on disk
[2026-02-01T17:12:51.257Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2055
[2026-02-01T17:12:51.261Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:51.261Z] [BOT] 💾 AFTER MERGE: 2055 jobs (merged disk + memory)
[2026-02-01T17:12:51.262Z] [BOT] ✅ No jobs to archive (all 2055 jobs within 7-day window)
[2026-02-01T17:12:51.368Z] [BOT] 💾 Saved posted_jobs.json: 2055 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:53.082Z] [BOT] ✅ Posted message: Software Engineer - Full-Stack @ ORG_e09a2b12 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T17:12:53.083Z] [BOT] 💾 Added channel posting: Software Engineer - Full-Stack @ ORG_e09a2b12 → location channel (2 total channels)
[2026-02-01T17:12:53.083Z] [BOT] 💾 BEFORE MERGE: 2055 jobs in memory (cached)
[2026-02-01T17:12:53.117Z] [BOT] ✅ Loaded V2 database: 2055 jobs
💾 DISK STATE: 2055 jobs on disk
[2026-02-01T17:12:53.117Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2055
[2026-02-01T17:12:53.121Z] [BOT] 🔀 Deep merged: Software Engineer - Full-Stack @ ORG_e09a2b12 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:12:53.121Z] [BOT] 💾 AFTER MERGE: 2055 jobs (merged disk + memory)
[2026-02-01T17:12:53.122Z] [BOT] ✅ No jobs to archive (all 2055 jobs within 7-day window)
[2026-02-01T17:12:53.216Z] [BOT] 💾 Saved posted_jobs.json: 2055 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:54.719Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Governance - PhD" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T17:12:54.719Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:12:54.867Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T17:12:54.868Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c
[2026-02-01T17:12:54.868Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T17:12:54.868Z] [BOT] 💾 BEFORE MERGE: 2056 jobs in memory (cached)
[2026-02-01T17:12:54.903Z] [BOT] ✅ Loaded V2 database: 2055 jobs
💾 DISK STATE: 2055 jobs on disk
[2026-02-01T17:12:54.904Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2056
[2026-02-01T17:12:54.912Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:54.912Z] [BOT] 💾 AFTER MERGE: 2056 jobs (merged disk + memory)
[2026-02-01T17:12:54.913Z] [BOT] ✅ No jobs to archive (all 2056 jobs within 7-day window)
[2026-02-01T17:12:55.012Z] [BOT] 💾 Saved posted_jobs.json: 2056 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:56.978Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T17:12:56.978Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T17:12:56.978Z] [BOT] 💾 BEFORE MERGE: 2056 jobs in memory (cached)
[2026-02-01T17:12:57.012Z] [BOT] ✅ Loaded V2 database: 2056 jobs
💾 DISK STATE: 2056 jobs on disk
[2026-02-01T17:12:57.012Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2056
[2026-02-01T17:12:57.015Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:12:57.016Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2056 jobs (merged disk + memory)
[2026-02-01T17:12:57.017Z] [BOT] ✅ No jobs to archive (all 2056 jobs within 7-day window)
[2026-02-01T17:12:57.112Z] [BOT] 💾 Saved posted_jobs.json: 2056 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:12:58.613Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:12:58.613Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:12:58.779Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T17:12:58.780Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c
[2026-02-01T17:12:58.780Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T17:12:58.780Z] [BOT] 💾 BEFORE MERGE: 2057 jobs in memory (cached)
[2026-02-01T17:12:58.815Z] [BOT] ✅ Loaded V2 database: 2056 jobs
💾 DISK STATE: 2056 jobs on disk
[2026-02-01T17:12:58.815Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2057
[2026-02-01T17:12:58.823Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:12:58.823Z] [BOT] 💾 AFTER MERGE: 2057 jobs (merged disk + memory)
[2026-02-01T17:12:58.824Z] [BOT] ✅ No jobs to archive (all 2057 jobs within 7-day window)
[2026-02-01T17:12:58.931Z] [BOT] 💾 Saved posted_jobs.json: 2057 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:13:00.635Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:13:00.636Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T17:13:00.636Z] [BOT] 💾 BEFORE MERGE: 2057 jobs in memory (cached)
[2026-02-01T17:13:00.670Z] [BOT] ✅ Loaded V2 database: 2057 jobs
💾 DISK STATE: 2057 jobs on disk
[2026-02-01T17:13:00.671Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2057
[2026-02-01T17:13:00.674Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - E-Commerce Governance-CV/NLP/Multimodal/LLM @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:13:00.674Z] [BOT] 💾 AFTER MERGE: 2057 jobs (merged disk + memory)
[2026-02-01T17:13:00.675Z] [BOT] ✅ No jobs to archive (all 2057 jobs within 7-day window)
[2026-02-01T17:13:00.768Z] [BOT] 💾 Saved posted_jobs.json: 2057 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:13:05.270Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T17:13:05.271Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_758e865e..." not found, but found as SHA256 "b43dca29417e268e"
[2026-02-01T17:13:05.271Z] [BOT] ⏭️  Skipping duplicate: JID_6142e812 (posted within 7 days)
[2026-02-01T17:13:05.272Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_25437f48-..." not found, but found as SHA256 "df6caef68168fc22"
[2026-02-01T17:13:05.272Z] [BOT] ⏭️  Skipping duplicate: JID_bfc8f924 (posted within 7 days)
[2026-02-01T17:13:05.272Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eece2015..." not found, but found as SHA256 "0832a5f24fe61acb"
[2026-02-01T17:13:05.272Z] [BOT] ⏭️  Skipping duplicate: JID_c1e97cac (posted within 7 days)
[2026-02-01T17:13:05.273Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_167f9911..." not found, but found as SHA256 "1c52bdb3709a614f"
⏭️  Skipping duplicate: JID_9885820d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b0d7f431-..." not found, but found as SHA256 "bee5a40596b63b2e"
⏭️  Skipping duplicate: JID_a0a2a3d6 (posted within 7 days)
[2026-02-01T17:13:05.274Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "57a4b83e82ce7e94"
⏭️  Skipping duplicate: JID_53fe0c83 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_634493dd..." not found, but found as SHA256 "e18fde55141e6f18"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_00f38d20-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_4575dbed..." not found, but found as SHA256 "e635b710c8ba3006"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_9d605b95-detail (posted within 7 days)
[2026-02-01T17:13:05.274Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cb875ecb-..." not found, but found as SHA256 "19cbd1b572ed0d39"
⏭️  Skipping duplicate: JID_5073f585 (posted within 7 days)
[2026-02-01T17:13:05.274Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2bf9ad91-..." not found, but found as SHA256 "1dbccb98008c1bef"
[2026-02-01T17:13:05.274Z] [BOT] ⏭️  Skipping duplicate: JID_42a372db (posted within 7 days)
[2026-02-01T17:13:05.391Z] [BOT] ✅ Loaded pending queue: 2949 total (862 pending, 50 enriched, 2037 posted)
[2026-02-01T17:13:05.583Z] [BOT] ✅ Saved pending queue: 2949 total (862 pending, 40 enriched, 2047 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T17:13:05.583Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T17:13:05.672Z] [BOT] 📂 Loaded 12128 existing routing entries
[2026-02-01T17:13:05.805Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T17:13:05.806Z] [BOT] Total entries: 12138
   Timestamp: 2026-02-01T17:13:05.756Z
[2026-02-01T17:13:05.806Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
[2026-02-01T17:13:05.806Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 5 posts
     3. #🏠・JID_ead674af: 4 posts
     4. #🌉・JID_739bbc0b: 3 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T17:13:05.807Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2057 jobs in memory (cached)
[2026-02-01T17:13:05.861Z] [BOT] ✅ Loaded V2 database: 2057 jobs
💾 DISK STATE: 2057 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2057
[2026-02-01T17:13:05.866Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:13:05.866Z] [BOT] 💾 AFTER MERGE: 2057 jobs (merged disk + memory)
[2026-02-01T17:13:05.868Z] [BOT] ✅ No jobs to archive (all 2057 jobs within 7-day window)
[2026-02-01T17:13:05.966Z] [BOT] 💾 Saved posted_jobs.json: 2057 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:13:05.966Z] [BOT] ✅ Database saved successfully
[2026-02-01T17:13:08.000Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3093) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*