# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T15:14:57.456Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T15:14:08.745Z] ========================================
[2026-02-01T15:14:08.746Z] Discord Bot Execution Log
[2026-02-01T15:14:08.746Z] Environment: GitHub Actions
[2026-02-01T15:14:08.746Z] Node Version: v20.20.0
[2026-02-01T15:14:08.746Z] ========================================
[2026-02-01T15:14:08.746Z] Environment Variables Check:
[2026-02-01T15:14:08.746Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T15:14:08.747Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T15:14:08.747Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T15:14:08.747Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T15:14:08.747Z] 
Multi-Channel Configuration:
[2026-02-01T15:14:08.747Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T15:14:08.747Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:14:08.747Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:14:08.747Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T15:14:08.747Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:14:08.747Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:14:08.747Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:14:08.747Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:14:08.747Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:14:08.747Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T15:14:08.747Z] 
Data Files Check:
[2026-02-01T15:14:08.748Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59405 bytes)
[2026-02-01T15:14:08.810Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10093033 bytes)
[2026-02-01T15:14:08.811Z] 
========================================
[2026-02-01T15:14:08.811Z] Starting Enhanced Discord Bot...
[2026-02-01T15:14:08.811Z] ========================================
[2026-02-01T15:14:09.317Z] [BOT] ✅ Loaded V2 database: 1947 jobs
[2026-02-01T15:14:09.793Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T15:14:09.794Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T15:14:09.794Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T15:14:09.951Z] [BOT] ✅ Loaded pending queue: 2948 total (961 pending, 50 enriched, 1937 posted)
[2026-02-01T15:14:09.951Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T15:14:09.951Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:14:09.952Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T15:14:09.952Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T15:14:09.953Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:14:09.953Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T15:14:09.953Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T15:14:09.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T15:14:09.954Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T15:14:09.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T15:14:09.954Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T15:14:09.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T15:14:09.955Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T15:14:09.955Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T15:14:09.955Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T15:14:09.955Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T15:14:09.955Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T15:14:09.956Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T15:14:09.956Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T15:14:09.966Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T15:14:09.966Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T15:14:09.966Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T15:14:09.967Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
   (11 grouped as same job with different locations)
[2026-02-01T15:14:09.967Z] [BOT] 📍 2 jobs with multiple locations:
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san francisco, dallas, san jose, san diego, flower mound, new york
   - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
[2026-02-01T15:14:09.967Z] [BOT] ⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T15:14:09.970Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-02-01T15:14:09.971Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
[2026-02-01T15:14:09.971Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:09.987Z] [BOT ERROR] (node:2621) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T15:14:10.175Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T15:14:10.175Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T15:14:10.176Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:14:10.177Z] [BOT] 💾 BEFORE MERGE: 1948 jobs in memory (cached)
[2026-02-01T15:14:10.228Z] [BOT] ✅ Loaded V2 database: 1947 jobs
💾 DISK STATE: 1947 jobs on disk
[2026-02-01T15:14:10.228Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1948
[2026-02-01T15:14:10.233Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:10.233Z] [BOT] 💾 AFTER MERGE: 1948 jobs (merged disk + memory)
[2026-02-01T15:14:10.235Z] [BOT] ✅ No jobs to archive (all 1948 jobs within 7-day window)
[2026-02-01T15:14:10.372Z] [BOT] 💾 Saved posted_jobs.json: 1948 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:12.127Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:14:12.128Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:14:12.128Z] [BOT] 💾 BEFORE MERGE: 1948 jobs in memory (cached)
[2026-02-01T15:14:12.180Z] [BOT] ✅ Loaded V2 database: 1948 jobs
[2026-02-01T15:14:12.180Z] [BOT] 💾 DISK STATE: 1948 jobs on disk
[2026-02-01T15:14:12.180Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1948
[2026-02-01T15:14:12.184Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:14:12.185Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1948 jobs (merged disk + memory)
[2026-02-01T15:14:12.186Z] [BOT] ✅ No jobs to archive (all 1948 jobs within 7-day window)
[2026-02-01T15:14:12.296Z] [BOT] 💾 Saved posted_jobs.json: 1948 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:13.797Z] [BOT] 📍 [ROUTING] "Software Engineering, Associate" @ ORG_d6d2009d
   Category: TECH (matched: "software")
[2026-02-01T15:14:13.798Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:14.030Z] [BOT] ✅ Posted message: Software Engineering, Associate @ ORG_d6d2009d in #💻・tech-jobs
[2026-02-01T15:14:14.030Z] [BOT] ✅ Industry: Software Engineering, Associate @ ORG_d6d2009d
[2026-02-01T15:14:14.031Z] [BOT] 💾 Added channel posting: Software Engineering, Associate @ ORG_d6d2009d → category channel (1 total channels)
[2026-02-01T15:14:14.031Z] [BOT] 💾 BEFORE MERGE: 1949 jobs in memory (cached)
[2026-02-01T15:14:14.080Z] [BOT] ✅ Loaded V2 database: 1948 jobs
💾 DISK STATE: 1948 jobs on disk
[2026-02-01T15:14:14.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1949
[2026-02-01T15:14:14.085Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:14.085Z] [BOT] 💾 AFTER MERGE: 1949 jobs (merged disk + memory)
[2026-02-01T15:14:14.086Z] [BOT] ✅ No jobs to archive (all 1949 jobs within 7-day window)
[2026-02-01T15:14:14.201Z] [BOT] 💾 Saved posted_jobs.json: 1949 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:15.892Z] [BOT] ✅ Posted message: Software Engineering, Associate @ ORG_d6d2009d in #📍・JID_6daed763
[2026-02-01T15:14:15.892Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T15:14:15.892Z] [BOT] 💾 Added channel posting: Software Engineering, Associate @ ORG_d6d2009d → location channel (2 total channels)
[2026-02-01T15:14:15.893Z] [BOT] 💾 BEFORE MERGE: 1949 jobs in memory (cached)
[2026-02-01T15:14:15.942Z] [BOT] ✅ Loaded V2 database: 1949 jobs
💾 DISK STATE: 1949 jobs on disk
[2026-02-01T15:14:15.943Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1949
[2026-02-01T15:14:15.947Z] [BOT] 🔀 Deep merged: Software Engineering, Associate @ ORG_d6d2009d (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:14:15.947Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1949 jobs (merged disk + memory)
[2026-02-01T15:14:15.948Z] [BOT] ✅ No jobs to archive (all 1949 jobs within 7-day window)
[2026-02-01T15:14:16.057Z] [BOT] 💾 Saved posted_jobs.json: 1949 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:17.558Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_0c2b26a5
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:17.801Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_0c2b26a5 in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_0c2b26a5
[2026-02-01T15:14:17.803Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_0c2b26a5 → category channel (1 total channels)
[2026-02-01T15:14:17.803Z] [BOT] 💾 BEFORE MERGE: 1950 jobs in memory (cached)
[2026-02-01T15:14:17.852Z] [BOT] ✅ Loaded V2 database: 1949 jobs
💾 DISK STATE: 1949 jobs on disk
[2026-02-01T15:14:17.853Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1950
[2026-02-01T15:14:17.857Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:17.857Z] [BOT] 💾 AFTER MERGE: 1950 jobs (merged disk + memory)
[2026-02-01T15:14:17.858Z] [BOT] ✅ No jobs to archive (all 1950 jobs within 7-day window)
[2026-02-01T15:14:17.989Z] [BOT] 💾 Saved posted_jobs.json: 1950 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:19.490Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_0ab76d65
[2026-02-01T15:14:19.490Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:19.986Z] [BOT] ✅ Posted message: Software Engineer @ ORG_0ab76d65 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_0ab76d65
[2026-02-01T15:14:19.987Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_0ab76d65 → category channel (1 total channels)
[2026-02-01T15:14:19.987Z] [BOT] 💾 BEFORE MERGE: 1951 jobs in memory (cached)
[2026-02-01T15:14:20.038Z] [BOT] ✅ Loaded V2 database: 1950 jobs
💾 DISK STATE: 1950 jobs on disk
[2026-02-01T15:14:20.038Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1951
[2026-02-01T15:14:20.042Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:20.042Z] [BOT] 💾 AFTER MERGE: 1951 jobs (merged disk + memory)
[2026-02-01T15:14:20.043Z] [BOT] ✅ No jobs to archive (all 1951 jobs within 7-day window)
[2026-02-01T15:14:20.154Z] [BOT] 💾 Saved posted_jobs.json: 1951 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:21.938Z] [BOT] ✅ Posted message: Software Engineer @ ORG_0ab76d65 in #📍・JID_6daed763
[2026-02-01T15:14:21.938Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T15:14:21.938Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_0ab76d65 → location channel (2 total channels)
[2026-02-01T15:14:21.938Z] [BOT] 💾 BEFORE MERGE: 1951 jobs in memory (cached)
[2026-02-01T15:14:21.988Z] [BOT] ✅ Loaded V2 database: 1951 jobs
💾 DISK STATE: 1951 jobs on disk
[2026-02-01T15:14:21.988Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1951
[2026-02-01T15:14:21.992Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_0ab76d65 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:14:21.992Z] [BOT] 💾 AFTER MERGE: 1951 jobs (merged disk + memory)
[2026-02-01T15:14:21.993Z] [BOT] ✅ No jobs to archive (all 1951 jobs within 7-day window)
[2026-02-01T15:14:22.127Z] [BOT] 💾 Saved posted_jobs.json: 1951 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:23.629Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate Social - 2026 Start" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:23.863Z] [BOT] ✅ Posted message: Software Engineer Graduate Social - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T15:14:23.864Z] [BOT] ✅ Industry: Software Engineer Graduate Social - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T15:14:23.864Z] [BOT] 💾 Added channel posting: Software Engineer Graduate Social - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:14:23.864Z] [BOT] 💾 BEFORE MERGE: 1952 jobs in memory (cached)
[2026-02-01T15:14:23.912Z] [BOT] ✅ Loaded V2 database: 1951 jobs
💾 DISK STATE: 1951 jobs on disk
[2026-02-01T15:14:23.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1952
[2026-02-01T15:14:23.916Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:23.916Z] [BOT] 💾 AFTER MERGE: 1952 jobs (merged disk + memory)
[2026-02-01T15:14:23.917Z] [BOT] ✅ No jobs to archive (all 1952 jobs within 7-day window)
[2026-02-01T15:14:24.033Z] [BOT] 💾 Saved posted_jobs.json: 1952 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:25.535Z] [BOT] 📍 [ROUTING] "Product Security Engineer - Security Assurance" @ ORG_1bb6fcfb
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T15:14:25.535Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:25.803Z] [BOT] ✅ Posted message: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb
[2026-02-01T15:14:25.804Z] [BOT] 💾 Added channel posting: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:14:25.804Z] [BOT] 💾 BEFORE MERGE: 1953 jobs in memory (cached)
[2026-02-01T15:14:25.853Z] [BOT] ✅ Loaded V2 database: 1952 jobs
💾 DISK STATE: 1952 jobs on disk
[2026-02-01T15:14:25.853Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1953
[2026-02-01T15:14:25.857Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:25.857Z] [BOT] 💾 AFTER MERGE: 1953 jobs (merged disk + memory)
[2026-02-01T15:14:25.858Z] [BOT] ✅ No jobs to archive (all 1953 jobs within 7-day window)
[2026-02-01T15:14:25.965Z] [BOT] 💾 Saved posted_jobs.json: 1953 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:27.625Z] [BOT] ✅ Posted message: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb in #🌲・JID_efdf5921
[2026-02-01T15:14:27.625Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:14:27.625Z] [BOT] 💾 Added channel posting: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:14:27.625Z] [BOT] 💾 BEFORE MERGE: 1953 jobs in memory (cached)
[2026-02-01T15:14:27.674Z] [BOT] ✅ Loaded V2 database: 1953 jobs
💾 DISK STATE: 1953 jobs on disk
[2026-02-01T15:14:27.675Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1953
[2026-02-01T15:14:27.678Z] [BOT] 🔀 Deep merged: Product Security Engineer - Security Assurance @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:14:27.678Z] [BOT] 💾 AFTER MERGE: 1953 jobs (merged disk + memory)
[2026-02-01T15:14:27.679Z] [BOT] ✅ No jobs to archive (all 1953 jobs within 7-day window)
[2026-02-01T15:14:27.810Z] [BOT] 💾 Saved posted_jobs.json: 1953 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:29.308Z] [BOT] 📍 [ROUTING] "SDET, Software Development Engineer in Test" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-02-01T15:14:29.308Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:29.503Z] [BOT] ✅ Posted message: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-02-01T15:14:29.504Z] [BOT] ✅ Industry: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb
[2026-02-01T15:14:29.504Z] [BOT] 💾 Added channel posting: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:14:29.504Z] [BOT] 💾 BEFORE MERGE: 1954 jobs in memory (cached)
[2026-02-01T15:14:29.553Z] [BOT] ✅ Loaded V2 database: 1953 jobs
💾 DISK STATE: 1953 jobs on disk
[2026-02-01T15:14:29.553Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1954
[2026-02-01T15:14:29.557Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1954 jobs (merged disk + memory)
[2026-02-01T15:14:29.558Z] [BOT] ✅ No jobs to archive (all 1954 jobs within 7-day window)
[2026-02-01T15:14:29.662Z] [BOT] 💾 Saved posted_jobs.json: 1954 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:31.325Z] [BOT] ✅ Posted message: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:14:31.325Z] [BOT] 💾 Added channel posting: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:14:31.325Z] [BOT] 💾 BEFORE MERGE: 1954 jobs in memory (cached)
[2026-02-01T15:14:31.374Z] [BOT] ✅ Loaded V2 database: 1954 jobs
💾 DISK STATE: 1954 jobs on disk
[2026-02-01T15:14:31.375Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1954
[2026-02-01T15:14:31.378Z] [BOT] 🔀 Deep merged: SDET, Software Development Engineer in Test @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:14:31.378Z] [BOT] 💾 AFTER MERGE: 1954 jobs (merged disk + memory)
[2026-02-01T15:14:31.379Z] [BOT] ✅ No jobs to archive (all 1954 jobs within 7-day window)
[2026-02-01T15:14:31.492Z] [BOT] 💾 Saved posted_jobs.json: 1954 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:32.995Z] [BOT] 📍 [ROUTING] "Research Scientist, Robotics Research" @ ORG_0890f456
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:14:33.209Z] [BOT] ✅ Posted message: Research Scientist, Robotics Research @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Research Scientist, Robotics Research @ ORG_0890f456
[2026-02-01T15:14:33.210Z] [BOT] 💾 Added channel posting: Research Scientist, Robotics Research @ ORG_0890f456 → category channel (1 total channels)
[2026-02-01T15:14:33.210Z] [BOT] 💾 BEFORE MERGE: 1955 jobs in memory (cached)
[2026-02-01T15:14:33.259Z] [BOT] ✅ Loaded V2 database: 1954 jobs
💾 DISK STATE: 1954 jobs on disk
[2026-02-01T15:14:33.259Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1955
[2026-02-01T15:14:33.263Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:33.263Z] [BOT] 💾 AFTER MERGE: 1955 jobs (merged disk + memory)
[2026-02-01T15:14:33.264Z] [BOT] ✅ No jobs to archive (all 1955 jobs within 7-day window)
[2026-02-01T15:14:33.395Z] [BOT] 💾 Saved posted_jobs.json: 1955 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:35.361Z] [BOT] ✅ Posted message: Research Scientist, Robotics Research @ ORG_0890f456 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:14:35.362Z] [BOT] 💾 Added channel posting: Research Scientist, Robotics Research @ ORG_0890f456 → location channel (2 total channels)
[2026-02-01T15:14:35.362Z] [BOT] 💾 BEFORE MERGE: 1955 jobs in memory (cached)
[2026-02-01T15:14:35.411Z] [BOT] ✅ Loaded V2 database: 1955 jobs
💾 DISK STATE: 1955 jobs on disk
[2026-02-01T15:14:35.411Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1955
[2026-02-01T15:14:35.415Z] [BOT] 🔀 Deep merged: Research Scientist, Robotics Research @ ORG_0890f456 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:14:35.415Z] [BOT] 💾 AFTER MERGE: 1955 jobs (merged disk + memory)
[2026-02-01T15:14:35.416Z] [BOT] ✅ No jobs to archive (all 1955 jobs within 7-day window)
[2026-02-01T15:14:35.521Z] [BOT] 💾 Saved posted_jobs.json: 1955 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:40.023Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T15:14:40.024Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer - Search E-Commerce" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T15:14:40.024Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:14:40.479Z] [BOT] ✅ Posted message: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T15:14:40.479Z] [BOT] ✅ Industry: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb
[2026-02-01T15:14:40.480Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:14:40.480Z] [BOT] 💾 BEFORE MERGE: 1956 jobs in memory (cached)
[2026-02-01T15:14:40.529Z] [BOT] ✅ Loaded V2 database: 1955 jobs
💾 DISK STATE: 1955 jobs on disk
[2026-02-01T15:14:40.529Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1956
[2026-02-01T15:14:40.532Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1956 jobs (merged disk + memory)
[2026-02-01T15:14:40.533Z] [BOT] ✅ No jobs to archive (all 1956 jobs within 7-day window)
[2026-02-01T15:14:40.665Z] [BOT] 💾 Saved posted_jobs.json: 1956 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:42.319Z] [BOT] ✅ Posted message: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:14:42.320Z] [BOT] 💾 Added channel posting: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:14:42.320Z] [BOT] 💾 BEFORE MERGE: 1956 jobs in memory (cached)
[2026-02-01T15:14:42.369Z] [BOT] ✅ Loaded V2 database: 1956 jobs
💾 DISK STATE: 1956 jobs on disk
[2026-02-01T15:14:42.369Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1956
[2026-02-01T15:14:42.373Z] [BOT] 🔀 Deep merged: Machine Learning Engineer - Search E-Commerce @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:14:42.373Z] [BOT] 💾 AFTER MERGE: 1956 jobs (merged disk + memory)
[2026-02-01T15:14:42.374Z] [BOT] ✅ No jobs to archive (all 1956 jobs within 7-day window)
[2026-02-01T15:14:42.497Z] [BOT] 💾 Saved posted_jobs.json: 1956 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:46.997Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-01T15:14:46.998Z] [BOT] 📍 [ROUTING] "Associate Value Engineer (AI-Driven Data Science & Analytics)" @ ORG_5c4c8ca4
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-01T15:14:46.998Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-01T15:14:47.184Z] [BOT] ✅ Posted message: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 in #📊・JID_fb739488
  ✅ Industry: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4
[2026-02-01T15:14:47.185Z] [BOT] 💾 Added channel posting: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 → category channel (1 total channels)
[2026-02-01T15:14:47.185Z] [BOT] 💾 BEFORE MERGE: 1957 jobs in memory (cached)
[2026-02-01T15:14:47.234Z] [BOT] ✅ Loaded V2 database: 1956 jobs
💾 DISK STATE: 1956 jobs on disk
[2026-02-01T15:14:47.235Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1957
[2026-02-01T15:14:47.238Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1957 jobs (merged disk + memory)
[2026-02-01T15:14:47.239Z] [BOT] ✅ No jobs to archive (all 1957 jobs within 7-day window)
[2026-02-01T15:14:47.348Z] [BOT] 💾 Saved posted_jobs.json: 1957 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:49.102Z] [BOT] ✅ Posted message: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T15:14:49.102Z] [BOT] 💾 Added channel posting: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 → location channel (2 total channels)
[2026-02-01T15:14:49.103Z] [BOT] 💾 BEFORE MERGE: 1957 jobs in memory (cached)
[2026-02-01T15:14:49.168Z] [BOT] ✅ Loaded V2 database: 1957 jobs
💾 DISK STATE: 1957 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1957
[2026-02-01T15:14:49.173Z] [BOT] 🔀 Deep merged: Associate Value Engineer (AI-Driven Data Science & Analytics) @ ORG_5c4c8ca4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:14:49.173Z] [BOT] 💾 AFTER MERGE: 1957 jobs (merged disk + memory)
[2026-02-01T15:14:49.175Z] [BOT] ✅ No jobs to archive (all 1957 jobs within 7-day window)
[2026-02-01T15:14:49.279Z] [BOT] 💾 Saved posted_jobs.json: 1957 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:53.781Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T15:14:53.782Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "b0ca0804d4bfd790"
[2026-02-01T15:14:53.782Z] [BOT] ⏭️  Skipping duplicate: JID_afdbc00b (posted within 7 days)
[2026-02-01T15:14:53.782Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_01b95931..." not found, but found as SHA256 "973feb7dd3f29c06"
[2026-02-01T15:14:53.783Z] [BOT] ⏭️  Skipping duplicate: JID_9dcb7870 (posted within 7 days)
[2026-02-01T15:14:53.783Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea2931f4-moog_ex..." not found, but found as SHA256 "7e6eb1c706953372"
[2026-02-01T15:14:53.783Z] [BOT] ⏭️  Skipping duplicate: JID_ea2931f4-moog_external_career_site-JID_8250d355-assc_r-25-13250 (posted within 7 days)
[2026-02-01T15:14:53.783Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_35371ed7..." not found, but found as SHA256 "6a9e396442a42da4"
[2026-02-01T15:14:53.783Z] [BOT] ⏭️  Skipping duplicate: JID_76b3d674-_r250019232 (posted within 7 days)
[2026-02-01T15:14:53.784Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6a9538c0..." not found, but found as SHA256 "11d1e08a77bd90fd"
[2026-02-01T15:14:53.784Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_5a5607df (posted within 7 days)
[2026-02-01T15:14:53.784Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2402eb2b..." not found, but found as SHA256 "652edd6dcc4fbf97"
⏭️  Skipping duplicate: JID_6796d1d6-CH_14b80afa (posted within 7 days)
[2026-02-01T15:14:53.784Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f050ed96..." not found, but found as SHA256 "1dacd65c454969a5"
[2026-02-01T15:14:53.784Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_40fb3fa9 (posted within 7 days)
[2026-02-01T15:14:53.784Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_47cf7941..." not found, but found as SHA256 "1bbca90dd21684f9"
[2026-02-01T15:14:53.784Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_59bb1083 (posted within 7 days)
[2026-02-01T15:14:53.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_908cb750..." not found, but found as SHA256 "77f31e66ffc873cb"
[2026-02-01T15:14:53.785Z] [BOT] ⏭️  Skipping duplicate: JID_86df3bb0-2025_jr2001017 (posted within 7 days)
[2026-02-01T15:14:53.785Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8941d0b5..." not found, but found as SHA256 "f69a06733e66b2c6"
[2026-02-01T15:14:53.785Z] [BOT] ⏭️  Skipping duplicate: JID_d874208c (posted within 7 days)
[2026-02-01T15:14:53.957Z] [BOT] ✅ Loaded pending queue: 2948 total (961 pending, 50 enriched, 1937 posted)
[2026-02-01T15:14:54.134Z] [BOT] ✅ Saved pending queue: 2948 total (961 pending, 40 enriched, 1947 posted)
[2026-02-01T15:14:54.135Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T15:14:54.235Z] [BOT] 📂 Loaded 12028 existing routing entries
[2026-02-01T15:14:54.361Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12038
   Timestamp: 2026-02-01T15:14:54.320Z
[2026-02-01T15:14:54.362Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 26
[2026-02-01T15:14:54.362Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 8
[2026-02-01T15:14:54.362Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
[2026-02-01T15:14:54.363Z] [BOT] Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🌲・JID_efdf5921: 3 posts
     3. #🌉・JID_739bbc0b: 2 posts
     4. #📍・JID_6daed763: 2 posts
     5. #🤖・ai-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1957 jobs in memory (cached)
[2026-02-01T15:14:54.419Z] [BOT] ✅ Loaded V2 database: 1957 jobs
💾 DISK STATE: 1957 jobs on disk
[2026-02-01T15:14:54.420Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1957
[2026-02-01T15:14:54.423Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:14:54.423Z] [BOT] 💾 AFTER MERGE: 1957 jobs (merged disk + memory)
[2026-02-01T15:14:54.424Z] [BOT] ✅ No jobs to archive (all 1957 jobs within 7-day window)
[2026-02-01T15:14:54.558Z] [BOT] 💾 Saved posted_jobs.json: 1957 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:14:54.559Z] [BOT] ✅ Database saved successfully
[2026-02-01T15:14:56.583Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2621) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*