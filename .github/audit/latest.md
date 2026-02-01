# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T15:04:52.518Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T15:03:59.607Z] ========================================
[2026-02-01T15:03:59.609Z] Discord Bot Execution Log
[2026-02-01T15:03:59.609Z] Environment: GitHub Actions
[2026-02-01T15:03:59.609Z] Node Version: v20.20.0
[2026-02-01T15:03:59.609Z] ========================================
[2026-02-01T15:03:59.609Z] Environment Variables Check:
[2026-02-01T15:03:59.609Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T15:03:59.609Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T15:03:59.609Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T15:03:59.609Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T15:03:59.609Z] 
Multi-Channel Configuration:
[2026-02-01T15:03:59.609Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T15:03:59.610Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:03:59.610Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:03:59.610Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T15:03:59.610Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:03:59.610Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:03:59.610Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:03:59.610Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:03:59.610Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:03:59.610Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T15:03:59.610Z] 
Data Files Check:
[2026-02-01T15:03:59.611Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59422 bytes)
[2026-02-01T15:03:59.662Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10050960 bytes)
[2026-02-01T15:03:59.663Z] 
========================================
[2026-02-01T15:03:59.663Z] Starting Enhanced Discord Bot...
[2026-02-01T15:03:59.663Z] ========================================
[2026-02-01T15:04:00.240Z] [BOT] ✅ Loaded V2 database: 1937 jobs
[2026-02-01T15:04:00.934Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T15:04:00.934Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T15:04:00.934Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T15:04:01.047Z] [BOT] ✅ Loaded pending queue: 2948 total (971 pending, 50 enriched, 1927 posted)
[2026-02-01T15:04:01.047Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T15:04:01.047Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:04:01.048Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T15:04:01.048Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:04:01.049Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T15:04:01.049Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T15:04:01.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T15:04:01.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T15:04:01.050Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T15:04:01.051Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T15:04:01.051Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T15:04:01.051Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T15:04:01.051Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T15:04:01.052Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T15:04:01.052Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T15:04:01.067Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T15:04:01.067Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T15:04:01.067Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T15:04:01.068Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-02-01T15:04:01.068Z] [BOT] (11 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-02-01T15:04:01.068Z] [BOT] - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: casa grande, san francisco, dallas, san jose, san diego, flower mound, new york
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T15:04:01.072Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T15:04:01.073Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:01.073Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:04:01.091Z] [BOT ERROR] (node:3416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T15:04:01.301Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T15:04:01.301Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:01.303Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:04:01.303Z] [BOT] 💾 BEFORE MERGE: 1938 jobs in memory (cached)
[2026-02-01T15:04:01.345Z] [BOT] ✅ Loaded V2 database: 1937 jobs
💾 DISK STATE: 1937 jobs on disk
[2026-02-01T15:04:01.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1938
[2026-02-01T15:04:01.350Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:01.350Z] [BOT] 💾 AFTER MERGE: 1938 jobs (merged disk + memory)
[2026-02-01T15:04:01.351Z] [BOT] ✅ No jobs to archive (all 1938 jobs within 7-day window)
[2026-02-01T15:04:01.483Z] [BOT] 💾 Saved posted_jobs.json: 1938 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:03.542Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
[2026-02-01T15:04:03.542Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:03.542Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:04:03.543Z] [BOT] 💾 BEFORE MERGE: 1938 jobs in memory (cached)
[2026-02-01T15:04:03.581Z] [BOT] ✅ Loaded V2 database: 1938 jobs
[2026-02-01T15:04:03.581Z] [BOT] 💾 DISK STATE: 1938 jobs on disk
[2026-02-01T15:04:03.581Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1938
[2026-02-01T15:04:03.585Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:04:03.585Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1938 jobs (merged disk + memory)
[2026-02-01T15:04:03.587Z] [BOT] ✅ No jobs to archive (all 1938 jobs within 7-day window)
[2026-02-01T15:04:03.687Z] [BOT] 💾 Saved posted_jobs.json: 1938 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:05.190Z] [BOT] 📍 [ROUTING] "Programmer Analyst-.Net Programmer - US Citizen" @ 360 IT Professionals
[2026-02-01T15:04:05.190Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:04:05.456Z] [BOT] ✅ Posted message: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals in #💻・tech-jobs
[2026-02-01T15:04:05.457Z] [BOT] ✅ Industry: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals
[2026-02-01T15:04:05.457Z] [BOT] 💾 Added channel posting: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals → category channel (1 total channels)
[2026-02-01T15:04:05.458Z] [BOT] 💾 BEFORE MERGE: 1939 jobs in memory (cached)
[2026-02-01T15:04:05.492Z] [BOT] ✅ Loaded V2 database: 1938 jobs
💾 DISK STATE: 1938 jobs on disk
[2026-02-01T15:04:05.493Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1939
[2026-02-01T15:04:05.497Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:05.497Z] [BOT] 💾 AFTER MERGE: 1939 jobs (merged disk + memory)
[2026-02-01T15:04:05.498Z] [BOT] ✅ No jobs to archive (all 1939 jobs within 7-day window)
[2026-02-01T15:04:05.618Z] [BOT] 💾 Saved posted_jobs.json: 1939 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:07.272Z] [BOT] ✅ Posted message: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:04:07.273Z] [BOT] 💾 Added channel posting: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals → location channel (2 total channels)
💾 BEFORE MERGE: 1939 jobs in memory (cached)
[2026-02-01T15:04:07.309Z] [BOT] ✅ Loaded V2 database: 1939 jobs
💾 DISK STATE: 1939 jobs on disk
[2026-02-01T15:04:07.309Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1939
[2026-02-01T15:04:07.314Z] [BOT] 🔀 Deep merged: Programmer Analyst-.Net Programmer - US Citizen @ 360 IT Professionals (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:04:07.314Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1939 jobs (merged disk + memory)
[2026-02-01T15:04:07.315Z] [BOT] ✅ No jobs to archive (all 1939 jobs within 7-day window)
[2026-02-01T15:04:07.414Z] [BOT] 💾 Saved posted_jobs.json: 1939 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:08.917Z] [BOT] 📍 [ROUTING] "Hiring Recent graduated students for full time jobs" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:04:09.081Z] [BOT] ✅ Posted message: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:09.082Z] [BOT] 💾 Added channel posting: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:04:09.082Z] [BOT] 💾 BEFORE MERGE: 1940 jobs in memory (cached)
[2026-02-01T15:04:09.120Z] [BOT] ✅ Loaded V2 database: 1939 jobs
💾 DISK STATE: 1939 jobs on disk
[2026-02-01T15:04:09.120Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1940
[2026-02-01T15:04:09.125Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1940 jobs (merged disk + memory)
[2026-02-01T15:04:09.126Z] [BOT] ✅ No jobs to archive (all 1940 jobs within 7-day window)
[2026-02-01T15:04:09.243Z] [BOT] 💾 Saved posted_jobs.json: 1940 active jobs
[2026-02-01T15:04:09.244Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:10.908Z] [BOT] ✅ Posted message: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:10.909Z] [BOT] 💾 Added channel posting: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:04:10.909Z] [BOT] 💾 BEFORE MERGE: 1940 jobs in memory (cached)
[2026-02-01T15:04:10.943Z] [BOT] ✅ Loaded V2 database: 1940 jobs
💾 DISK STATE: 1940 jobs on disk
[2026-02-01T15:04:10.943Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1940
[2026-02-01T15:04:10.947Z] [BOT] 🔀 Deep merged: Hiring Recent graduated students for full time jobs @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:04:10.947Z] [BOT] 💾 AFTER MERGE: 1940 jobs (merged disk + memory)
[2026-02-01T15:04:10.949Z] [BOT] ✅ No jobs to archive (all 1940 jobs within 7-day window)
[2026-02-01T15:04:11.049Z] [BOT] 💾 Saved posted_jobs.json: 1940 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:12.551Z] [BOT] 📍 [ROUTING] "Salesforce OBIEE ETL Training and Placement" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
[2026-02-01T15:04:12.551Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:04:12.757Z] [BOT] ✅ Posted message: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:12.758Z] [BOT] 💾 Added channel posting: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:04:12.758Z] [BOT] 💾 BEFORE MERGE: 1941 jobs in memory (cached)
[2026-02-01T15:04:12.795Z] [BOT] ✅ Loaded V2 database: 1940 jobs
💾 DISK STATE: 1940 jobs on disk
[2026-02-01T15:04:12.795Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1941
[2026-02-01T15:04:12.799Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:12.799Z] [BOT] 💾 AFTER MERGE: 1941 jobs (merged disk + memory)
[2026-02-01T15:04:12.800Z] [BOT] ✅ No jobs to archive (all 1941 jobs within 7-day window)
[2026-02-01T15:04:12.901Z] [BOT] 💾 Saved posted_jobs.json: 1941 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:14.619Z] [BOT] ✅ Posted message: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:14.620Z] [BOT] 💾 Added channel posting: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:04:14.620Z] [BOT] 💾 BEFORE MERGE: 1941 jobs in memory (cached)
[2026-02-01T15:04:14.655Z] [BOT] ✅ Loaded V2 database: 1941 jobs
💾 DISK STATE: 1941 jobs on disk
[2026-02-01T15:04:14.656Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1941
[2026-02-01T15:04:14.659Z] [BOT] 🔀 Deep merged: Salesforce OBIEE ETL Training and Placement @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:04:14.659Z] [BOT] 💾 AFTER MERGE: 1941 jobs (merged disk + memory)
[2026-02-01T15:04:14.665Z] [BOT] ✅ No jobs to archive (all 1941 jobs within 7-day window)
[2026-02-01T15:04:14.765Z] [BOT] 💾 Saved posted_jobs.json: 1941 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:16.268Z] [BOT] 📍 [ROUTING] "Hiring Software Engineer" @ ORG_9af9eef3 Technologies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:04:16.489Z] [BOT] ✅ Posted message: Hiring Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T15:04:16.489Z] [BOT] ✅ Industry: Hiring Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:16.490Z] [BOT] 💾 Added channel posting: Hiring Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:04:16.490Z] [BOT] 💾 BEFORE MERGE: 1942 jobs in memory (cached)
[2026-02-01T15:04:16.524Z] [BOT] ✅ Loaded V2 database: 1941 jobs
💾 DISK STATE: 1941 jobs on disk
[2026-02-01T15:04:16.525Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1942
[2026-02-01T15:04:16.528Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:16.528Z] [BOT] 💾 AFTER MERGE: 1942 jobs (merged disk + memory)
[2026-02-01T15:04:16.530Z] [BOT] ✅ No jobs to archive (all 1942 jobs within 7-day window)
[2026-02-01T15:04:16.635Z] [BOT] 💾 Saved posted_jobs.json: 1942 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:18.446Z] [BOT] ✅ Posted message: Hiring Software Engineer @ ORG_9af9eef3 Technologies in #🗽・JID_98d4f0de
[2026-02-01T15:04:18.447Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T15:04:18.447Z] [BOT] 💾 Added channel posting: Hiring Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:04:18.447Z] [BOT] 💾 BEFORE MERGE: 1942 jobs in memory (cached)
[2026-02-01T15:04:18.483Z] [BOT] ✅ Loaded V2 database: 1942 jobs
💾 DISK STATE: 1942 jobs on disk
[2026-02-01T15:04:18.483Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1942
[2026-02-01T15:04:18.487Z] [BOT] 🔀 Deep merged: Hiring Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:04:18.487Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1942 jobs (merged disk + memory)
[2026-02-01T15:04:18.488Z] [BOT] ✅ No jobs to archive (all 1942 jobs within 7-day window)
[2026-02-01T15:04:18.605Z] [BOT] 💾 Saved posted_jobs.json: 1942 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:20.105Z] [BOT] 📍 [ROUTING] "Training & Placement on Informatica/ Microstrategy" @ ORG_9af9eef3 Technologies
   Category: TECH (default)
[2026-02-01T15:04:20.106Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:04:20.272Z] [BOT] ✅ Posted message: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:20.273Z] [BOT] 💾 Added channel posting: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:04:20.273Z] [BOT] 💾 BEFORE MERGE: 1943 jobs in memory (cached)
[2026-02-01T15:04:20.307Z] [BOT] ✅ Loaded V2 database: 1942 jobs
💾 DISK STATE: 1942 jobs on disk
[2026-02-01T15:04:20.307Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1943
[2026-02-01T15:04:20.311Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:20.311Z] [BOT] 💾 AFTER MERGE: 1943 jobs (merged disk + memory)
[2026-02-01T15:04:20.312Z] [BOT] ✅ No jobs to archive (all 1943 jobs within 7-day window)
[2026-02-01T15:04:20.419Z] [BOT] 💾 Saved posted_jobs.json: 1943 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:22.087Z] [BOT] ✅ Posted message: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:22.087Z] [BOT] 💾 Added channel posting: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:04:22.087Z] [BOT] 💾 BEFORE MERGE: 1943 jobs in memory (cached)
[2026-02-01T15:04:22.122Z] [BOT] ✅ Loaded V2 database: 1943 jobs
💾 DISK STATE: 1943 jobs on disk
[2026-02-01T15:04:22.122Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1943
[2026-02-01T15:04:22.125Z] [BOT] 🔀 Deep merged: Training & Placement on Informatica/ Microstrategy @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:04:22.125Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1943 jobs (merged disk + memory)
[2026-02-01T15:04:22.126Z] [BOT] ✅ No jobs to archive (all 1943 jobs within 7-day window)
[2026-02-01T15:04:22.224Z] [BOT] 💾 Saved posted_jobs.json: 1943 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:23.726Z] [BOT] 📍 [ROUTING] "Software Engineer Position" @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:23.726Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:04:23.916Z] [BOT] ✅ Posted message: Software Engineer Position @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Software Engineer Position @ ORG_9af9eef3 Technologies
[2026-02-01T15:04:23.916Z] [BOT] 💾 Added channel posting: Software Engineer Position @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:04:23.917Z] [BOT] 💾 BEFORE MERGE: 1944 jobs in memory (cached)
[2026-02-01T15:04:23.951Z] [BOT] ✅ Loaded V2 database: 1943 jobs
💾 DISK STATE: 1943 jobs on disk
[2026-02-01T15:04:23.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1944
[2026-02-01T15:04:23.955Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:23.955Z] [BOT] 💾 AFTER MERGE: 1944 jobs (merged disk + memory)
[2026-02-01T15:04:23.956Z] [BOT] ✅ No jobs to archive (all 1944 jobs within 7-day window)
[2026-02-01T15:04:24.053Z] [BOT] 💾 Saved posted_jobs.json: 1944 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:25.813Z] [BOT] ✅ Posted message: Software Engineer Position @ ORG_9af9eef3 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:25.814Z] [BOT] 💾 Added channel posting: Software Engineer Position @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:04:25.814Z] [BOT] 💾 BEFORE MERGE: 1944 jobs in memory (cached)
[2026-02-01T15:04:25.849Z] [BOT] ✅ Loaded V2 database: 1944 jobs
💾 DISK STATE: 1944 jobs on disk
[2026-02-01T15:04:25.849Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1944
[2026-02-01T15:04:25.853Z] [BOT] 🔀 Deep merged: Software Engineer Position @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:04:25.853Z] [BOT] 💾 AFTER MERGE: 1944 jobs (merged disk + memory)
[2026-02-01T15:04:25.854Z] [BOT] ✅ No jobs to archive (all 1944 jobs within 7-day window)
[2026-02-01T15:04:25.972Z] [BOT] 💾 Saved posted_jobs.json: 1944 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:30.472Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-02-01T15:04:30.473Z] [BOT] 📍 [ROUTING] "Geospatial Analyst 1" @ ORG_52575429 Consulting
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-01T15:04:30.782Z] [BOT] ✅ Posted message: Geospatial Analyst 1 @ ORG_52575429 Consulting in #💰・finance-jobs
  ✅ Industry: Geospatial Analyst 1 @ ORG_52575429 Consulting
[2026-02-01T15:04:30.783Z] [BOT] 💾 Added channel posting: Geospatial Analyst 1 @ ORG_52575429 Consulting → category channel (1 total channels)
[2026-02-01T15:04:30.783Z] [BOT] 💾 BEFORE MERGE: 1945 jobs in memory (cached)
[2026-02-01T15:04:30.816Z] [BOT] ✅ Loaded V2 database: 1944 jobs
💾 DISK STATE: 1944 jobs on disk
[2026-02-01T15:04:30.817Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1945
[2026-02-01T15:04:30.820Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1945 jobs (merged disk + memory)
[2026-02-01T15:04:30.822Z] [BOT] ✅ No jobs to archive (all 1945 jobs within 7-day window)
[2026-02-01T15:04:30.937Z] [BOT] 💾 Saved posted_jobs.json: 1945 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:33.272Z] [BOT] ✅ Posted message: Geospatial Analyst 1 @ ORG_52575429 Consulting in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:33.273Z] [BOT] 💾 Added channel posting: Geospatial Analyst 1 @ ORG_52575429 Consulting → location channel (2 total channels)
[2026-02-01T15:04:33.273Z] [BOT] 💾 BEFORE MERGE: 1945 jobs in memory (cached)
[2026-02-01T15:04:33.311Z] [BOT] ✅ Loaded V2 database: 1945 jobs
[2026-02-01T15:04:33.311Z] [BOT] 💾 DISK STATE: 1945 jobs on disk
[2026-02-01T15:04:33.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1945
[2026-02-01T15:04:33.325Z] [BOT] 🔀 Deep merged: Geospatial Analyst 1 @ ORG_52575429 Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1945 jobs (merged disk + memory)
[2026-02-01T15:04:33.326Z] [BOT] ✅ No jobs to archive (all 1945 jobs within 7-day window)
[2026-02-01T15:04:33.429Z] [BOT] 💾 Saved posted_jobs.json: 1945 active jobs
[2026-02-01T15:04:33.430Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:37.933Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-01T15:04:37.934Z] [BOT] 📍 [ROUTING] "Software Engineer, Connected Warfare" @ ORG_fa549ffc Industries
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T15:04:37.934Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:04:38.214Z] [BOT] ✅ Posted message: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries
[2026-02-01T15:04:38.215Z] [BOT] 💾 Added channel posting: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries → category channel (1 total channels)
[2026-02-01T15:04:38.216Z] [BOT] 💾 BEFORE MERGE: 1946 jobs in memory (cached)
[2026-02-01T15:04:38.251Z] [BOT] ✅ Loaded V2 database: 1945 jobs
💾 DISK STATE: 1945 jobs on disk
[2026-02-01T15:04:38.251Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1946
[2026-02-01T15:04:38.254Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:38.255Z] [BOT] 💾 AFTER MERGE: 1946 jobs (merged disk + memory)
[2026-02-01T15:04:38.256Z] [BOT] ✅ No jobs to archive (all 1946 jobs within 7-day window)
[2026-02-01T15:04:38.351Z] [BOT] 💾 Saved posted_jobs.json: 1946 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:40.156Z] [BOT] ✅ Posted message: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:40.156Z] [BOT] 💾 Added channel posting: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries → location channel (2 total channels)
[2026-02-01T15:04:40.157Z] [BOT] 💾 BEFORE MERGE: 1946 jobs in memory (cached)
[2026-02-01T15:04:40.191Z] [BOT] ✅ Loaded V2 database: 1946 jobs
💾 DISK STATE: 1946 jobs on disk
[2026-02-01T15:04:40.192Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1946
[2026-02-01T15:04:40.195Z] [BOT] 🔀 Deep merged: Software Engineer, Connected Warfare @ ORG_fa549ffc Industries (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:04:40.195Z] [BOT] 💾 AFTER MERGE: 1946 jobs (merged disk + memory)
[2026-02-01T15:04:40.196Z] [BOT] ✅ No jobs to archive (all 1946 jobs within 7-day window)
[2026-02-01T15:04:40.306Z] [BOT] 💾 Saved posted_jobs.json: 1946 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:41.808Z] [BOT] 📍 [ROUTING] "Air Dominance & Strike - Flight Software Engineer, Embedded C/C++" @ ORG_fa549ffc Industries
   Category: AI (matched: "AI specialization")
[2026-02-01T15:04:41.808Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:04:42.006Z] [BOT] ✅ Posted message: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries in #🤖・ai-jobs
  ✅ Industry: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries
[2026-02-01T15:04:42.007Z] [BOT] 💾 Added channel posting: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries → category channel (1 total channels)
[2026-02-01T15:04:42.007Z] [BOT] 💾 BEFORE MERGE: 1947 jobs in memory (cached)
[2026-02-01T15:04:42.043Z] [BOT] ✅ Loaded V2 database: 1946 jobs
💾 DISK STATE: 1946 jobs on disk
[2026-02-01T15:04:42.044Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1947
[2026-02-01T15:04:42.047Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:42.047Z] [BOT] 💾 AFTER MERGE: 1947 jobs (merged disk + memory)
[2026-02-01T15:04:42.048Z] [BOT] ✅ No jobs to archive (all 1947 jobs within 7-day window)
[2026-02-01T15:04:42.141Z] [BOT] 💾 Saved posted_jobs.json: 1947 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:43.913Z] [BOT] ✅ Posted message: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T15:04:43.913Z] [BOT] 💾 Added channel posting: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries → location channel (2 total channels)
[2026-02-01T15:04:43.914Z] [BOT] 💾 BEFORE MERGE: 1947 jobs in memory (cached)
[2026-02-01T15:04:43.948Z] [BOT] ✅ Loaded V2 database: 1947 jobs
💾 DISK STATE: 1947 jobs on disk
[2026-02-01T15:04:43.949Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1947
[2026-02-01T15:04:43.952Z] [BOT] 🔀 Deep merged: Air Dominance & Strike - Flight Software Engineer, Embedded C/C++ @ ORG_fa549ffc Industries (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:04:43.952Z] [BOT] 💾 AFTER MERGE: 1947 jobs (merged disk + memory)
[2026-02-01T15:04:43.953Z] [BOT] ✅ No jobs to archive (all 1947 jobs within 7-day window)
[2026-02-01T15:04:44.064Z] [BOT] 💾 Saved posted_jobs.json: 1947 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:04:48.565Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T15:04:48.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "cb0a7bf16287f79c"
[2026-02-01T15:04:48.567Z] [BOT] ⏭️  Skipping duplicate: JID_ac39afe5 (posted within 7 days)
[2026-02-01T15:04:48.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3205a93..." not found, but found as SHA256 "5f89f14e97ca818a"
[2026-02-01T15:04:48.567Z] [BOT] ⏭️  Skipping duplicate: JID_95cdf82d (posted within 7 days)
[2026-02-01T15:04:48.568Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da7ee503..." not found, but found as SHA256 "7d251fbc36cfff78"
[2026-02-01T15:04:48.568Z] [BOT] ⏭️  Skipping duplicate: JID_6aa44917 (posted within 7 days)
[2026-02-01T15:04:48.568Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "9853e4391ec1aeb3"
⏭️  Skipping duplicate: JID_170fea5c (posted within 7 days)
[2026-02-01T15:04:48.568Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "af1cedc9feca62a7"
[2026-02-01T15:04:48.568Z] [BOT] ⏭️  Skipping duplicate: JID_2aaae98d (posted within 7 days)
[2026-02-01T15:04:48.569Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "6d080e6c98664d6a"
⏭️  Skipping duplicate: JID_a9519b8c (posted within 7 days)
[2026-02-01T15:04:48.569Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6031e186..." not found, but found as SHA256 "bc64c6d4d51ef5c0"
[2026-02-01T15:04:48.569Z] [BOT] ⏭️  Skipping duplicate: JID_0692174e (posted within 7 days)
[2026-02-01T15:04:48.569Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6031e186..." not found, but found as SHA256 "2235122b18edc0ff"
⏭️  Skipping duplicate: JID_c539d32f (posted within 7 days)
[2026-02-01T15:04:48.569Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "f4e65c42f2d8f250"
[2026-02-01T15:04:48.570Z] [BOT] ⏭️  Skipping duplicate: JID_dd5696c2 (posted within 7 days)
[2026-02-01T15:04:48.570Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "f7bc268bdad7b7c8"
[2026-02-01T15:04:48.570Z] [BOT] ⏭️  Skipping duplicate: JID_90b218d5 (posted within 7 days)
[2026-02-01T15:04:48.669Z] [BOT] ✅ Loaded pending queue: 2948 total (971 pending, 50 enriched, 1927 posted)
[2026-02-01T15:04:48.875Z] [BOT] ✅ Saved pending queue: 2948 total (971 pending, 40 enriched, 1937 posted)
[2026-02-01T15:04:48.875Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T15:04:48.966Z] [BOT] 📂 Loaded 12018 existing routing entries
[2026-02-01T15:04:49.104Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T15:04:49.104Z] [BOT] Total entries: 12028
   Timestamp: 2026-02-01T15:04:49.055Z
[2026-02-01T15:04:49.105Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T15:04:49.105Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
     1. #📍・JID_6daed763: 8 posts
     2. #💻・tech-jobs: 7 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌉・JID_739bbc0b: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
[2026-02-01T15:04:49.106Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1947 jobs in memory (cached)
[2026-02-01T15:04:49.147Z] [BOT] ✅ Loaded V2 database: 1947 jobs
💾 DISK STATE: 1947 jobs on disk
[2026-02-01T15:04:49.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1947
[2026-02-01T15:04:49.152Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:04:49.152Z] [BOT] 💾 AFTER MERGE: 1947 jobs (merged disk + memory)
[2026-02-01T15:04:49.153Z] [BOT] ✅ No jobs to archive (all 1947 jobs within 7-day window)
[2026-02-01T15:04:49.274Z] [BOT] 💾 Saved posted_jobs.json: 1947 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-01T15:04:51.307Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*