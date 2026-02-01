# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T15:34:50.905Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T15:34:02.693Z] ========================================
[2026-02-01T15:34:02.695Z] Discord Bot Execution Log
[2026-02-01T15:34:02.695Z] Environment: GitHub Actions
[2026-02-01T15:34:02.695Z] Node Version: v20.20.0
[2026-02-01T15:34:02.695Z] ========================================
[2026-02-01T15:34:02.695Z] Environment Variables Check:
[2026-02-01T15:34:02.695Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T15:34:02.695Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T15:34:02.696Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T15:34:02.696Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T15:34:02.696Z] 
Multi-Channel Configuration:
[2026-02-01T15:34:02.696Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T15:34:02.696Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:34:02.696Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:34:02.696Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T15:34:02.696Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:34:02.696Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:34:02.696Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:34:02.696Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:34:02.696Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T15:34:02.696Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T15:34:02.696Z] 
Data Files Check:
[2026-02-01T15:34:02.697Z] .github/data/new_jobs.json: ✅ Exists (10 items, 59415 bytes)
[2026-02-01T15:34:02.748Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10117104 bytes)
[2026-02-01T15:34:02.748Z] 
========================================
[2026-02-01T15:34:02.748Z] Starting Enhanced Discord Bot...
[2026-02-01T15:34:02.748Z] ========================================
[2026-02-01T15:34:03.332Z] [BOT] ✅ Loaded V2 database: 1967 jobs
[2026-02-01T15:34:03.757Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T15:34:03.758Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T15:34:03.758Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T15:34:03.867Z] [BOT] ✅ Loaded pending queue: 2948 total (941 pending, 50 enriched, 1957 posted)
[2026-02-01T15:34:03.868Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:34:03.869Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T15:34:03.869Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T15:34:03.870Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T15:34:03.870Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T15:34:03.870Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T15:34:03.870Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T15:34:03.871Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T15:34:03.871Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T15:34:03.871Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T15:34:03.871Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T15:34:03.872Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T15:34:03.872Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T15:34:03.872Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T15:34:03.887Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T15:34:03.887Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T15:34:03.887Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T15:34:03.888Z] [BOT] 📋 After multi-location grouping: 26 unique jobs to post
[2026-02-01T15:34:03.888Z] [BOT] (16 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies: san jose, san diego, san francisco, flower mound, dallas, new york
   - Engineer Graduate: - Machine Learning Engineer - Local Services Search @ TikTok: seattle, san jose
   - Graduate Machine Learning Scientist - Global E-commerce Content Recommendation @ TikTok: seattle, san jose
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T15:34:03.890Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-01T15:34:03.891Z] [BOT] 📍 [ROUTING] "Hiring Entry Level Software Engineer" @ ORG_9af9eef3 Technologies
[2026-02-01T15:34:03.891Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T15:34:03.909Z] [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T15:34:04.354Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #💻・tech-jobs
[2026-02-01T15:34:04.354Z] [BOT] ✅ Industry: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies
[2026-02-01T15:34:04.355Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → category channel (1 total channels)
[2026-02-01T15:34:04.355Z] [BOT] 💾 BEFORE MERGE: 1968 jobs in memory (cached)
[2026-02-01T15:34:04.397Z] [BOT] ✅ Loaded V2 database: 1967 jobs
💾 DISK STATE: 1967 jobs on disk
[2026-02-01T15:34:04.397Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1968
[2026-02-01T15:34:04.402Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:04.402Z] [BOT] 💾 AFTER MERGE: 1968 jobs (merged disk + memory)
[2026-02-01T15:34:04.403Z] [BOT] ✅ No jobs to archive (all 1968 jobs within 7-day window)
[2026-02-01T15:34:04.523Z] [BOT] 💾 Saved posted_jobs.json: 1968 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:06.163Z] [BOT] ✅ Posted message: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:06.164Z] [BOT] 💾 Added channel posting: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies → location channel (2 total channels)
[2026-02-01T15:34:06.164Z] [BOT] 💾 BEFORE MERGE: 1968 jobs in memory (cached)
[2026-02-01T15:34:06.201Z] [BOT] ✅ Loaded V2 database: 1968 jobs
[2026-02-01T15:34:06.201Z] [BOT] 💾 DISK STATE: 1968 jobs on disk
[2026-02-01T15:34:06.201Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1968
[2026-02-01T15:34:06.205Z] [BOT] 🔀 Deep merged: Hiring Entry Level Software Engineer @ ORG_9af9eef3 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:34:06.206Z] [BOT] 💾 AFTER MERGE: 1968 jobs (merged disk + memory)
[2026-02-01T15:34:06.207Z] [BOT] ✅ No jobs to archive (all 1968 jobs within 7-day window)
[2026-02-01T15:34:06.307Z] [BOT] 💾 Saved posted_jobs.json: 1968 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:10.809Z] [BOT] 📌 Posting 9 jobs to #🤖・ai-jobs
[2026-02-01T15:34:10.811Z] [BOT] 📍 [ROUTING] "Graduate Researcher - Applied Machine Learning - Enterprise" @ ORG_08c9a13c
[2026-02-01T15:34:10.811Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:10.947Z] [BOT] ✅ Posted message: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T15:34:10.947Z] [BOT] ✅ Industry: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c
[2026-02-01T15:34:10.948Z] [BOT] 💾 Added channel posting: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T15:34:10.948Z] [BOT] 💾 BEFORE MERGE: 1969 jobs in memory (cached)
[2026-02-01T15:34:10.982Z] [BOT] ✅ Loaded V2 database: 1968 jobs
💾 DISK STATE: 1968 jobs on disk
[2026-02-01T15:34:10.983Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1969
[2026-02-01T15:34:10.987Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:10.987Z] [BOT] 💾 AFTER MERGE: 1969 jobs (merged disk + memory)
[2026-02-01T15:34:10.988Z] [BOT] ✅ No jobs to archive (all 1969 jobs within 7-day window)
[2026-02-01T15:34:11.101Z] [BOT] 💾 Saved posted_jobs.json: 1969 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:12.761Z] [BOT] ✅ Posted message: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:12.762Z] [BOT] 💾 Added channel posting: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T15:34:12.762Z] [BOT] 💾 BEFORE MERGE: 1969 jobs in memory (cached)
[2026-02-01T15:34:12.795Z] [BOT] ✅ Loaded V2 database: 1969 jobs
💾 DISK STATE: 1969 jobs on disk
[2026-02-01T15:34:12.796Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1969
[2026-02-01T15:34:12.800Z] [BOT] 🔀 Deep merged: Graduate Researcher - Applied Machine Learning - Enterprise @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:34:12.800Z] [BOT] 💾 AFTER MERGE: 1969 jobs (merged disk + memory)
[2026-02-01T15:34:12.801Z] [BOT] ✅ No jobs to archive (all 1969 jobs within 7-day window)
[2026-02-01T15:34:12.901Z] [BOT] 💾 Saved posted_jobs.json: 1969 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:14.404Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Orchestration" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T15:34:14.404Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:14.787Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c
[2026-02-01T15:34:14.788Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T15:34:14.788Z] [BOT] 💾 BEFORE MERGE: 1970 jobs in memory (cached)
[2026-02-01T15:34:14.823Z] [BOT] ✅ Loaded V2 database: 1969 jobs
💾 DISK STATE: 1969 jobs on disk
[2026-02-01T15:34:14.823Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1970
[2026-02-01T15:34:14.828Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:14.828Z] [BOT] 💾 AFTER MERGE: 1970 jobs (merged disk + memory)
[2026-02-01T15:34:14.829Z] [BOT] ✅ No jobs to archive (all 1970 jobs within 7-day window)
[2026-02-01T15:34:14.928Z] [BOT] 💾 Saved posted_jobs.json: 1970 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:16.706Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:16.706Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T15:34:16.706Z] [BOT] 💾 BEFORE MERGE: 1970 jobs in memory (cached)
[2026-02-01T15:34:16.741Z] [BOT] ✅ Loaded V2 database: 1970 jobs
💾 DISK STATE: 1970 jobs on disk
[2026-02-01T15:34:16.741Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1970
[2026-02-01T15:34:16.744Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:34:16.745Z] [BOT] 💾 AFTER MERGE: 1970 jobs (merged disk + memory)
[2026-02-01T15:34:16.746Z] [BOT] ✅ No jobs to archive (all 1970 jobs within 7-day window)
[2026-02-01T15:34:16.849Z] [BOT] 💾 Saved posted_jobs.json: 1970 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:18.351Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T15:34:18.351Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:18.498Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T15:34:18.498Z] [BOT] ✅ Industry: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c
[2026-02-01T15:34:18.499Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T15:34:18.499Z] [BOT] 💾 BEFORE MERGE: 1971 jobs in memory (cached)
[2026-02-01T15:34:18.534Z] [BOT] ✅ Loaded V2 database: 1970 jobs
💾 DISK STATE: 1970 jobs on disk
[2026-02-01T15:34:18.534Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1971
[2026-02-01T15:34:18.538Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:18.538Z] [BOT] 💾 AFTER MERGE: 1971 jobs (merged disk + memory)
[2026-02-01T15:34:18.539Z] [BOT] ✅ No jobs to archive (all 1971 jobs within 7-day window)
[2026-02-01T15:34:18.642Z] [BOT] 💾 Saved posted_jobs.json: 1971 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:20.316Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:20.316Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T15:34:20.316Z] [BOT] 💾 BEFORE MERGE: 1971 jobs in memory (cached)
[2026-02-01T15:34:20.351Z] [BOT] ✅ Loaded V2 database: 1971 jobs
💾 DISK STATE: 1971 jobs on disk
[2026-02-01T15:34:20.351Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1971
[2026-02-01T15:34:20.354Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Applied Machine Learning @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:34:20.355Z] [BOT] 💾 AFTER MERGE: 1971 jobs (merged disk + memory)
[2026-02-01T15:34:20.356Z] [BOT] ✅ No jobs to archive (all 1971 jobs within 7-day window)
[2026-02-01T15:34:20.471Z] [BOT] 💾 Saved posted_jobs.json: 1971 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:21.973Z] [BOT] 📍 [ROUTING] "Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start" @ ORG_1bb6fcfb
[2026-02-01T15:34:21.974Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:22.288Z] [BOT] ✅ Posted message: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T15:34:22.289Z] [BOT] 💾 Added channel posting: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:34:22.289Z] [BOT] 💾 BEFORE MERGE: 1972 jobs in memory (cached)
[2026-02-01T15:34:22.322Z] [BOT] ✅ Loaded V2 database: 1971 jobs
💾 DISK STATE: 1971 jobs on disk
[2026-02-01T15:34:22.323Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1972
[2026-02-01T15:34:22.327Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:22.327Z] [BOT] 💾 AFTER MERGE: 1972 jobs (merged disk + memory)
[2026-02-01T15:34:22.328Z] [BOT] ✅ No jobs to archive (all 1972 jobs within 7-day window)
[2026-02-01T15:34:22.418Z] [BOT] 💾 Saved posted_jobs.json: 1972 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:24.147Z] [BOT] ✅ Posted message: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T15:34:24.147Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:24.148Z] [BOT] 💾 Added channel posting: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:34:24.148Z] [BOT] 💾 BEFORE MERGE: 1972 jobs in memory (cached)
[2026-02-01T15:34:24.181Z] [BOT] ✅ Loaded V2 database: 1972 jobs
💾 DISK STATE: 1972 jobs on disk
[2026-02-01T15:34:24.182Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1972
[2026-02-01T15:34:24.186Z] [BOT] 🔀 Deep merged: Engineer Graduate - Machine Learning Engineer Graduate-Search E-Commerce - 2026 Start @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:34:24.186Z] [BOT] 💾 AFTER MERGE: 1972 jobs (merged disk + memory)
[2026-02-01T15:34:24.187Z] [BOT] ✅ No jobs to archive (all 1972 jobs within 7-day window)
[2026-02-01T15:34:24.290Z] [BOT] 💾 Saved posted_jobs.json: 1972 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:25.793Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T15:34:25.793Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:26.000Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T15:34:26.000Z] [BOT] ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb
[2026-02-01T15:34:26.001Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:34:26.001Z] [BOT] 💾 BEFORE MERGE: 1973 jobs in memory (cached)
[2026-02-01T15:34:26.035Z] [BOT] ✅ Loaded V2 database: 1972 jobs
💾 DISK STATE: 1972 jobs on disk
[2026-02-01T15:34:26.036Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1973
[2026-02-01T15:34:26.040Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:26.040Z] [BOT] 💾 AFTER MERGE: 1973 jobs (merged disk + memory)
[2026-02-01T15:34:26.041Z] [BOT] ✅ No jobs to archive (all 1973 jobs within 7-day window)
[2026-02-01T15:34:26.144Z] [BOT] 💾 Saved posted_jobs.json: 1973 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:27.946Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:27.946Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:34:27.946Z] [BOT] 💾 BEFORE MERGE: 1973 jobs in memory (cached)
[2026-02-01T15:34:27.981Z] [BOT] ✅ Loaded V2 database: 1973 jobs
💾 DISK STATE: 1973 jobs on disk
[2026-02-01T15:34:27.981Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1973
[2026-02-01T15:34:27.985Z] [BOT] 🔀 Deep merged: Graduate Engineer - Machine Learning Engineer - Data Search TikTok Recommendation @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:34:27.986Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1973 jobs (merged disk + memory)
[2026-02-01T15:34:27.987Z] [BOT] ✅ No jobs to archive (all 1973 jobs within 7-day window)
[2026-02-01T15:34:28.113Z] [BOT] 💾 Saved posted_jobs.json: 1973 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:29.612Z] [BOT] 📍 [ROUTING] "Engineer Graduate: - Machine Learning Engineer - Local Services Search" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-02-01T15:34:29.612Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:29.843Z] [BOT] ✅ Posted message: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb
[2026-02-01T15:34:29.844Z] [BOT] 💾 Added channel posting: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:34:29.844Z] [BOT] 💾 BEFORE MERGE: 1974 jobs in memory (cached)
[2026-02-01T15:34:29.877Z] [BOT] ✅ Loaded V2 database: 1973 jobs
💾 DISK STATE: 1973 jobs on disk
[2026-02-01T15:34:29.877Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1974
[2026-02-01T15:34:29.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1974 jobs (merged disk + memory)
[2026-02-01T15:34:29.882Z] [BOT] ✅ No jobs to archive (all 1974 jobs within 7-day window)
[2026-02-01T15:34:29.973Z] [BOT] 💾 Saved posted_jobs.json: 1974 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:31.705Z] [BOT] ✅ Posted message: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T15:34:31.706Z] [BOT] 💾 Added channel posting: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:34:31.706Z] [BOT] 💾 BEFORE MERGE: 1974 jobs in memory (cached)
[2026-02-01T15:34:31.739Z] [BOT] ✅ Loaded V2 database: 1974 jobs
💾 DISK STATE: 1974 jobs on disk
[2026-02-01T15:34:31.739Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1974
[2026-02-01T15:34:31.743Z] [BOT] 🔀 Deep merged: Engineer Graduate: - Machine Learning Engineer - Local Services Search @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:34:31.743Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1974 jobs (merged disk + memory)
[2026-02-01T15:34:31.744Z] [BOT] ✅ No jobs to archive (all 1974 jobs within 7-day window)
[2026-02-01T15:34:31.846Z] [BOT] 💾 Saved posted_jobs.json: 1974 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:33.349Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - PhD" @ ORG_1bb6fcfb
[2026-02-01T15:34:33.349Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:33.559Z] [BOT] ✅ Posted message: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-02-01T15:34:33.559Z] [BOT] ✅ Industry: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb
[2026-02-01T15:34:33.560Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:34:33.560Z] [BOT] 💾 BEFORE MERGE: 1975 jobs in memory (cached)
[2026-02-01T15:34:33.595Z] [BOT] ✅ Loaded V2 database: 1974 jobs
💾 DISK STATE: 1974 jobs on disk
[2026-02-01T15:34:33.595Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1975
[2026-02-01T15:34:33.599Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:33.599Z] [BOT] 💾 AFTER MERGE: 1975 jobs (merged disk + memory)
[2026-02-01T15:34:33.600Z] [BOT] ✅ No jobs to archive (all 1975 jobs within 7-day window)
[2026-02-01T15:34:33.703Z] [BOT] 💾 Saved posted_jobs.json: 1975 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:35.454Z] [BOT] ✅ Posted message: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:35.454Z] [BOT] 💾 Added channel posting: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:34:35.454Z] [BOT] 💾 BEFORE MERGE: 1975 jobs in memory (cached)
[2026-02-01T15:34:35.489Z] [BOT] ✅ Loaded V2 database: 1975 jobs
💾 DISK STATE: 1975 jobs on disk
[2026-02-01T15:34:35.489Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1975
[2026-02-01T15:34:35.493Z] [BOT] 🔀 Deep merged: General Hire – Machine Learning Engineer Graduate - PhD @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:34:35.493Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1975 jobs (merged disk + memory)
[2026-02-01T15:34:35.494Z] [BOT] ✅ No jobs to archive (all 1975 jobs within 7-day window)
[2026-02-01T15:34:35.598Z] [BOT] 💾 Saved posted_jobs.json: 1975 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:37.101Z] [BOT] 📍 [ROUTING] "Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start" @ ORG_1bb6fcfb
   Category: AI (matched: "AI specialization")
[2026-02-01T15:34:37.101Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:37.264Z] [BOT] ✅ Posted message: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb
[2026-02-01T15:34:37.265Z] [BOT] 💾 Added channel posting: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-02-01T15:34:37.265Z] [BOT] 💾 BEFORE MERGE: 1976 jobs in memory (cached)
[2026-02-01T15:34:37.300Z] [BOT] ✅ Loaded V2 database: 1975 jobs
💾 DISK STATE: 1975 jobs on disk
[2026-02-01T15:34:37.300Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1976
[2026-02-01T15:34:37.304Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:37.304Z] [BOT] 💾 AFTER MERGE: 1976 jobs (merged disk + memory)
[2026-02-01T15:34:37.305Z] [BOT] ✅ No jobs to archive (all 1976 jobs within 7-day window)
[2026-02-01T15:34:37.411Z] [BOT] 💾 Saved posted_jobs.json: 1976 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:39.149Z] [BOT] ✅ Posted message: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T15:34:39.150Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:39.150Z] [BOT] 💾 Added channel posting: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:34:39.150Z] [BOT] 💾 BEFORE MERGE: 1976 jobs in memory (cached)
[2026-02-01T15:34:39.185Z] [BOT] ✅ Loaded V2 database: 1976 jobs
💾 DISK STATE: 1976 jobs on disk
[2026-02-01T15:34:39.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1976
[2026-02-01T15:34:39.188Z] [BOT] 🔀 Deep merged: Research Scientist Graduate-CV/NLP/Multimodal LLM - Trust and Safety - 2026 Start @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
[2026-02-01T15:34:39.188Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1976 jobs (merged disk + memory)
[2026-02-01T15:34:39.189Z] [BOT] ✅ No jobs to archive (all 1976 jobs within 7-day window)
[2026-02-01T15:34:39.295Z] [BOT] 💾 Saved posted_jobs.json: 1976 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:40.798Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - Multiple Teams" @ ORG_1bb6fcfb
[2026-02-01T15:34:40.798Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T15:34:41.015Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb
[2026-02-01T15:34:41.016Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1977 jobs in memory (cached)
[2026-02-01T15:34:41.054Z] [BOT] ✅ Loaded V2 database: 1976 jobs
💾 DISK STATE: 1976 jobs on disk
[2026-02-01T15:34:41.054Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1977
[2026-02-01T15:34:41.058Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:41.058Z] [BOT] 💾 AFTER MERGE: 1977 jobs (merged disk + memory)
[2026-02-01T15:34:41.059Z] [BOT] ✅ No jobs to archive (all 1977 jobs within 7-day window)
[2026-02-01T15:34:41.156Z] [BOT] 💾 Saved posted_jobs.json: 1977 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:42.802Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb in #🌉・JID_739bbc0b
[2026-02-01T15:34:42.802Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T15:34:42.802Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb → location channel (2 total channels)
[2026-02-01T15:34:42.802Z] [BOT] 💾 BEFORE MERGE: 1977 jobs in memory (cached)
[2026-02-01T15:34:42.835Z] [BOT] ✅ Loaded V2 database: 1977 jobs
💾 DISK STATE: 1977 jobs on disk
[2026-02-01T15:34:42.835Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1977
[2026-02-01T15:34:42.839Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - Multiple Teams @ ORG_1bb6fcfb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T15:34:42.839Z] [BOT] 💾 AFTER MERGE: 1977 jobs (merged disk + memory)
[2026-02-01T15:34:42.840Z] [BOT] ✅ No jobs to archive (all 1977 jobs within 7-day window)
[2026-02-01T15:34:42.934Z] [BOT] 💾 Saved posted_jobs.json: 1977 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:47.435Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T15:34:47.437Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ae9a3d4..." not found, but found as SHA256 "324e4dfad4ee2160"
[2026-02-01T15:34:47.437Z] [BOT] ⏭️  Skipping duplicate: JID_f2ac704e (posted within 7 days)
[2026-02-01T15:34:47.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_57685263..." not found, but found as SHA256 "0eeb7e66768da69b"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_4b123aa8-detail (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_65714474..." not found, but found as SHA256 "2a9c9372493ee2f1"
[2026-02-01T15:34:47.438Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_4b4ef385-detail (posted within 7 days)
[2026-02-01T15:34:47.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ce8edef7..." not found, but found as SHA256 "8d43895990936cb0"
[2026-02-01T15:34:47.438Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_f0926b8f-detail (posted within 7 days)
[2026-02-01T15:34:47.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ededc5d4..." not found, but found as SHA256 "512759372d793bc6"
[2026-02-01T15:34:47.438Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_ba61db02 (posted within 7 days)
[2026-02-01T15:34:47.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_764dde29..." not found, but found as SHA256 "97af5183f2d2b87f"
⏭️  Skipping duplicate: JID_6796d1d6-CH_5551843e (posted within 7 days)
[2026-02-01T15:34:47.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ca8ff80f..." not found, but found as SHA256 "c6f4552b7ac1150f"
[2026-02-01T15:34:47.439Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_18a98c1f (posted within 7 days)
[2026-02-01T15:34:47.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2e0a5e41..." not found, but found as SHA256 "a5a17c9585ddd0ed"
⏭️  Skipping duplicate: JID_6796d1d6-CH_a2d30400 (posted within 7 days)
[2026-02-01T15:34:47.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_55c7ed4a..." not found, but found as SHA256 "70ad2585030e6f21"
[2026-02-01T15:34:47.439Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_eb27688f (posted within 7 days)
[2026-02-01T15:34:47.440Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d080762d..." not found, but found as SHA256 "0cf038c01cfd3ce0"
[2026-02-01T15:34:47.440Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a1cbb331 (posted within 7 days)
[2026-02-01T15:34:47.539Z] [BOT] ✅ Loaded pending queue: 2948 total (941 pending, 50 enriched, 1957 posted)
[2026-02-01T15:34:47.745Z] [BOT] ✅ Saved pending queue: 2948 total (941 pending, 40 enriched, 1967 posted)
[2026-02-01T15:34:47.745Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T15:34:47.835Z] [BOT] 📂 Loaded 12048 existing routing entries
[2026-02-01T15:34:47.965Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12058
[2026-02-01T15:34:47.965Z] [BOT] Timestamp: 2026-02-01T15:34:47.915Z
[2026-02-01T15:34:47.965Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T15:34:47.965Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T15:34:47.966Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 4
   Top channels:
     1. #🌉・JID_739bbc0b: 9 posts
     2. #🤖・ai-jobs: 9 posts
     3. #💻・tech-jobs: 1 posts
     4. #🌲・JID_efdf5921: 1 posts
[2026-02-01T15:34:47.966Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1977 jobs in memory (cached)
[2026-02-01T15:34:48.006Z] [BOT] ✅ Loaded V2 database: 1977 jobs
💾 DISK STATE: 1977 jobs on disk
[2026-02-01T15:34:48.007Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1977
[2026-02-01T15:34:48.010Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T15:34:48.010Z] [BOT] 💾 AFTER MERGE: 1977 jobs (merged disk + memory)
[2026-02-01T15:34:48.011Z] [BOT] ✅ No jobs to archive (all 1977 jobs within 7-day window)
[2026-02-01T15:34:48.113Z] [BOT] 💾 Saved posted_jobs.json: 1977 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T15:34:48.113Z] [BOT] ✅ Database saved successfully
[2026-02-01T15:34:50.146Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*