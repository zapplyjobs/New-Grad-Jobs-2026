# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T17:22:50.306Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T17:22:03.044Z] ========================================
[2026-02-01T17:22:03.046Z] Discord Bot Execution Log
[2026-02-01T17:22:03.046Z] Environment: GitHub Actions
[2026-02-01T17:22:03.046Z] Node Version: v20.20.0
[2026-02-01T17:22:03.046Z] ========================================
[2026-02-01T17:22:03.046Z] Environment Variables Check:
[2026-02-01T17:22:03.046Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T17:22:03.046Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T17:22:03.046Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T17:22:03.046Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T17:22:03.046Z] 
Multi-Channel Configuration:
[2026-02-01T17:22:03.046Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T17:22:03.046Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:22:03.046Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:22:03.046Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T17:22:03.046Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:22:03.046Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:22:03.047Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:22:03.047Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:22:03.047Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:22:03.047Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T17:22:03.047Z] 
Data Files Check:
[2026-02-01T17:22:03.047Z] .github/data/new_jobs.json: ✅ Exists (10 items, 67867 bytes)
[2026-02-01T17:22:03.113Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10284216 bytes)
[2026-02-01T17:22:03.113Z] 
========================================
[2026-02-01T17:22:03.113Z] Starting Enhanced Discord Bot...
[2026-02-01T17:22:03.113Z] ========================================
[2026-02-01T17:22:03.644Z] [BOT] ✅ Loaded V2 database: 2057 jobs
[2026-02-01T17:22:04.549Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T17:22:04.549Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T17:22:04.550Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T17:22:04.707Z] [BOT] ✅ Loaded pending queue: 2949 total (852 pending, 50 enriched, 2047 posted)
[2026-02-01T17:22:04.707Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:22:04.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T17:22:04.709Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T17:22:04.709Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:22:04.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T17:22:04.709Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T17:22:04.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T17:22:04.710Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T17:22:04.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-02-01T17:22:04.711Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T17:22:04.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T17:22:04.711Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T17:22:04.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T17:22:04.711Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T17:22:04.712Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T17:22:04.712Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T17:22:04.712Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T17:22:04.712Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T17:22:04.724Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T17:22:04.724Z] [BOT] 🚫 Skipping blacklisted job: Accounting Manager at nominal
[2026-02-01T17:22:04.895Z] [BOT] ✅ Loaded pending queue: 2949 total (852 pending, 50 enriched, 2047 posted)
[2026-02-01T17:22:05.100Z] [BOT] ✅ Saved pending queue: 2948 total (852 pending, 49 enriched, 2047 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 41 jobs (1 blacklisted)
[2026-02-01T17:22:05.100Z] [BOT] 📋 After data quality filter: 41 jobs (0 invalid)
[2026-02-01T17:22:05.102Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-02-01T17:22:05.102Z] [BOT] (12 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad - Infrastructure @ Palantir: new york, seattle, washington, palo alto, denver
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T17:22:05.105Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-01T17:22:05.106Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
   Category: TECH (matched: "software")
[2026-02-01T17:22:05.106Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:22:05.124Z] [BOT ERROR] (node:2601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T17:22:05.385Z] [BOT] ✅ Posted message: Junior Software Engineer @ mthree in #💻・tech-jobs
[2026-02-01T17:22:05.385Z] [BOT] ✅ Industry: Junior Software Engineer @ mthree
[2026-02-01T17:22:05.386Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ mthree → category channel (1 total channels)
[2026-02-01T17:22:05.386Z] [BOT] 💾 BEFORE MERGE: 2058 jobs in memory (cached)
[2026-02-01T17:22:05.447Z] [BOT] ✅ Loaded V2 database: 2057 jobs
💾 DISK STATE: 2057 jobs on disk
[2026-02-01T17:22:05.447Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2058
[2026-02-01T17:22:05.452Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:05.452Z] [BOT] 💾 AFTER MERGE: 2058 jobs (merged disk + memory)
[2026-02-01T17:22:05.454Z] [BOT] ✅ No jobs to archive (all 2058 jobs within 7-day window)
[2026-02-01T17:22:05.586Z] [BOT] 💾 Saved posted_jobs.json: 2058 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:07.088Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_c6cfe6e4 Canyon Consulting
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:22:07.292Z] [BOT] ✅ Posted message: Software Developer @ ORG_c6cfe6e4 Canyon Consulting in #💻・tech-jobs
[2026-02-01T17:22:07.292Z] [BOT] ✅ Industry: Software Developer @ ORG_c6cfe6e4 Canyon Consulting
[2026-02-01T17:22:07.293Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_c6cfe6e4 Canyon Consulting → category channel (1 total channels)
[2026-02-01T17:22:07.293Z] [BOT] 💾 BEFORE MERGE: 2059 jobs in memory (cached)
[2026-02-01T17:22:07.343Z] [BOT] ✅ Loaded V2 database: 2058 jobs
💾 DISK STATE: 2058 jobs on disk
[2026-02-01T17:22:07.344Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2059
[2026-02-01T17:22:07.352Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:07.353Z] [BOT] 💾 AFTER MERGE: 2059 jobs (merged disk + memory)
[2026-02-01T17:22:07.354Z] [BOT] ✅ No jobs to archive (all 2059 jobs within 7-day window)
[2026-02-01T17:22:07.469Z] [BOT] 💾 Saved posted_jobs.json: 2059 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:09.241Z] [BOT] ✅ Posted message: Software Developer @ ORG_c6cfe6e4 Canyon Consulting in #📍・JID_6daed763
[2026-02-01T17:22:09.241Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T17:22:09.241Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_c6cfe6e4 Canyon Consulting → location channel (2 total channels)
[2026-02-01T17:22:09.242Z] [BOT] 💾 BEFORE MERGE: 2059 jobs in memory (cached)
[2026-02-01T17:22:09.292Z] [BOT] ✅ Loaded V2 database: 2059 jobs
💾 DISK STATE: 2059 jobs on disk
[2026-02-01T17:22:09.292Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2059
[2026-02-01T17:22:09.297Z] [BOT] 🔀 Deep merged: Software Developer @ ORG_c6cfe6e4 Canyon Consulting (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:22:09.297Z] [BOT] 💾 AFTER MERGE: 2059 jobs (merged disk + memory)
[2026-02-01T17:22:09.298Z] [BOT] ✅ No jobs to archive (all 2059 jobs within 7-day window)
[2026-02-01T17:22:09.417Z] [BOT] 💾 Saved posted_jobs.json: 2059 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:10.919Z] [BOT] 📍 [ROUTING] "Linux Engineer" @ ORG_4f23798d Street
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:22:11.097Z] [BOT] ✅ Posted message: Linux Engineer @ ORG_4f23798d Street in #💻・tech-jobs
  ✅ Industry: Linux Engineer @ ORG_4f23798d Street
[2026-02-01T17:22:11.098Z] [BOT] 💾 Added channel posting: Linux Engineer @ ORG_4f23798d Street → category channel (1 total channels)
[2026-02-01T17:22:11.099Z] [BOT] 💾 BEFORE MERGE: 2060 jobs in memory (cached)
[2026-02-01T17:22:11.149Z] [BOT] ✅ Loaded V2 database: 2059 jobs
💾 DISK STATE: 2059 jobs on disk
[2026-02-01T17:22:11.150Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2060
[2026-02-01T17:22:11.154Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2060 jobs (merged disk + memory)
[2026-02-01T17:22:11.155Z] [BOT] ✅ No jobs to archive (all 2060 jobs within 7-day window)
[2026-02-01T17:22:11.275Z] [BOT] 💾 Saved posted_jobs.json: 2060 active jobs
[2026-02-01T17:22:11.275Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:13.004Z] [BOT] ✅ Posted message: Linux Engineer @ ORG_4f23798d Street in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T17:22:13.005Z] [BOT] 💾 Added channel posting: Linux Engineer @ ORG_4f23798d Street → location channel (2 total channels)
[2026-02-01T17:22:13.005Z] [BOT] 💾 BEFORE MERGE: 2060 jobs in memory (cached)
[2026-02-01T17:22:13.056Z] [BOT] ✅ Loaded V2 database: 2060 jobs
💾 DISK STATE: 2060 jobs on disk
[2026-02-01T17:22:13.056Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2060
[2026-02-01T17:22:13.060Z] [BOT] 🔀 Deep merged: Linux Engineer @ ORG_4f23798d Street (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:22:13.060Z] [BOT] 💾 AFTER MERGE: 2060 jobs (merged disk + memory)
[2026-02-01T17:22:13.061Z] [BOT] ✅ No jobs to archive (all 2060 jobs within 7-day window)
[2026-02-01T17:22:13.199Z] [BOT] 💾 Saved posted_jobs.json: 2060 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:14.701Z] [BOT] 📍 [ROUTING] "Forward-Deployed Test Engineer" @ ORG_e6cd637f
[2026-02-01T17:22:14.702Z] [BOT] Category: TECH (matched: "QA engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:22:15.071Z] [BOT] ✅ Posted message: Forward-Deployed Test Engineer @ ORG_e6cd637f in #💻・tech-jobs
[2026-02-01T17:22:15.071Z] [BOT] ✅ Industry: Forward-Deployed Test Engineer @ ORG_e6cd637f
[2026-02-01T17:22:15.072Z] [BOT] 💾 Added channel posting: Forward-Deployed Test Engineer @ ORG_e6cd637f → category channel (1 total channels)
[2026-02-01T17:22:15.072Z] [BOT] 💾 BEFORE MERGE: 2061 jobs in memory (cached)
[2026-02-01T17:22:15.122Z] [BOT] ✅ Loaded V2 database: 2060 jobs
💾 DISK STATE: 2060 jobs on disk
[2026-02-01T17:22:15.123Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2061
[2026-02-01T17:22:15.126Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:15.126Z] [BOT] 💾 AFTER MERGE: 2061 jobs (merged disk + memory)
[2026-02-01T17:22:15.128Z] [BOT] ✅ No jobs to archive (all 2061 jobs within 7-day window)
[2026-02-01T17:22:15.242Z] [BOT] 💾 Saved posted_jobs.json: 2061 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:17.028Z] [BOT] ✅ Posted message: Forward-Deployed Test Engineer @ ORG_e6cd637f in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:22:17.028Z] [BOT] 💾 Added channel posting: Forward-Deployed Test Engineer @ ORG_e6cd637f → location channel (2 total channels)
[2026-02-01T17:22:17.028Z] [BOT] 💾 BEFORE MERGE: 2061 jobs in memory (cached)
[2026-02-01T17:22:17.079Z] [BOT] ✅ Loaded V2 database: 2061 jobs
💾 DISK STATE: 2061 jobs on disk
[2026-02-01T17:22:17.080Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2061
[2026-02-01T17:22:17.084Z] [BOT] 🔀 Deep merged: Forward-Deployed Test Engineer @ ORG_e6cd637f (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:22:17.084Z] [BOT] 💾 AFTER MERGE: 2061 jobs (merged disk + memory)
[2026-02-01T17:22:17.085Z] [BOT] ✅ No jobs to archive (all 2061 jobs within 7-day window)
[2026-02-01T17:22:17.224Z] [BOT] 💾 Saved posted_jobs.json: 2061 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:18.726Z] [BOT] 📍 [ROUTING] "Partner Solutions Architect" @ supabase
   Category: TECH (default)
[2026-02-01T17:22:18.726Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:22:19.064Z] [BOT] ✅ Posted message: Partner Solutions Architect @ supabase in #💻・tech-jobs
  ✅ Industry: Partner Solutions Architect @ supabase
[2026-02-01T17:22:19.065Z] [BOT] 💾 Added channel posting: Partner Solutions Architect @ supabase → category channel (1 total channels)
[2026-02-01T17:22:19.065Z] [BOT] 💾 BEFORE MERGE: 2062 jobs in memory (cached)
[2026-02-01T17:22:19.116Z] [BOT] ✅ Loaded V2 database: 2061 jobs
💾 DISK STATE: 2061 jobs on disk
[2026-02-01T17:22:19.116Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2062
[2026-02-01T17:22:19.120Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:19.120Z] [BOT] 💾 AFTER MERGE: 2062 jobs (merged disk + memory)
[2026-02-01T17:22:19.121Z] [BOT] ✅ No jobs to archive (all 2062 jobs within 7-day window)
[2026-02-01T17:22:19.233Z] [BOT] 💾 Saved posted_jobs.json: 2062 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:20.916Z] [BOT] ✅ Posted message: Partner Solutions Architect @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T17:22:20.916Z] [BOT] 💾 Added channel posting: Partner Solutions Architect @ supabase → location channel (2 total channels)
[2026-02-01T17:22:20.917Z] [BOT] 💾 BEFORE MERGE: 2062 jobs in memory (cached)
[2026-02-01T17:22:20.970Z] [BOT] ✅ Loaded V2 database: 2062 jobs
💾 DISK STATE: 2062 jobs on disk
[2026-02-01T17:22:20.971Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2062
[2026-02-01T17:22:20.975Z] [BOT] 🔀 Deep merged: Partner Solutions Architect @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:22:20.975Z] [BOT] 💾 AFTER MERGE: 2062 jobs (merged disk + memory)
[2026-02-01T17:22:20.976Z] [BOT] ✅ No jobs to archive (all 2062 jobs within 7-day window)
[2026-02-01T17:22:21.092Z] [BOT] 💾 Saved posted_jobs.json: 2062 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:22.595Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_313e7c50
   Category: TECH (matched: "software")
[2026-02-01T17:22:22.595Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:22:22.851Z] [BOT] ✅ Posted message: Software Developer @ ORG_313e7c50 in #💻・tech-jobs
[2026-02-01T17:22:22.852Z] [BOT] ✅ Industry: Software Developer @ ORG_313e7c50
[2026-02-01T17:22:22.852Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_313e7c50 → category channel (1 total channels)
[2026-02-01T17:22:22.853Z] [BOT] 💾 BEFORE MERGE: 2063 jobs in memory (cached)
[2026-02-01T17:22:22.902Z] [BOT] ✅ Loaded V2 database: 2062 jobs
💾 DISK STATE: 2062 jobs on disk
[2026-02-01T17:22:22.903Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2063
[2026-02-01T17:22:22.911Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:22.911Z] [BOT] 💾 AFTER MERGE: 2063 jobs (merged disk + memory)
[2026-02-01T17:22:22.912Z] [BOT] ✅ No jobs to archive (all 2063 jobs within 7-day window)
[2026-02-01T17:22:23.032Z] [BOT] 💾 Saved posted_jobs.json: 2063 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:24.892Z] [BOT] ✅ Posted message: Software Developer @ ORG_313e7c50 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:22:24.893Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_313e7c50 → location channel (2 total channels)
[2026-02-01T17:22:24.893Z] [BOT] 💾 BEFORE MERGE: 2063 jobs in memory (cached)
[2026-02-01T17:22:24.944Z] [BOT] ✅ Loaded V2 database: 2063 jobs
💾 DISK STATE: 2063 jobs on disk
[2026-02-01T17:22:24.944Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2063
[2026-02-01T17:22:24.948Z] [BOT] 🔀 Deep merged: Software Developer @ ORG_313e7c50 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:22:24.948Z] [BOT] 💾 AFTER MERGE: 2063 jobs (merged disk + memory)
[2026-02-01T17:22:24.949Z] [BOT] ✅ No jobs to archive (all 2063 jobs within 7-day window)
[2026-02-01T17:22:25.092Z] [BOT] 💾 Saved posted_jobs.json: 2063 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:26.590Z] [BOT] 📍 [ROUTING] "Software Engineer - Fullstack" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-02-01T17:22:26.590Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:22:26.827Z] [BOT] ✅ Posted message: Software Engineer - Fullstack @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Fullstack @ ORG_c7bac469
[2026-02-01T17:22:26.828Z] [BOT] 💾 Added channel posting: Software Engineer - Fullstack @ ORG_c7bac469 → category channel (1 total channels)
[2026-02-01T17:22:26.828Z] [BOT] 💾 BEFORE MERGE: 2064 jobs in memory (cached)
[2026-02-01T17:22:26.878Z] [BOT] ✅ Loaded V2 database: 2063 jobs
💾 DISK STATE: 2063 jobs on disk
[2026-02-01T17:22:26.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2064
[2026-02-01T17:22:26.883Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:26.883Z] [BOT] 💾 AFTER MERGE: 2064 jobs (merged disk + memory)
[2026-02-01T17:22:26.884Z] [BOT] ✅ No jobs to archive (all 2064 jobs within 7-day window)
[2026-02-01T17:22:26.990Z] [BOT] 💾 Saved posted_jobs.json: 2064 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:28.828Z] [BOT] ✅ Posted message: Software Engineer - Fullstack @ ORG_c7bac469 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T17:22:28.829Z] [BOT] 💾 Added channel posting: Software Engineer - Fullstack @ ORG_c7bac469 → location channel (2 total channels)
[2026-02-01T17:22:28.829Z] [BOT] 💾 BEFORE MERGE: 2064 jobs in memory (cached)
[2026-02-01T17:22:28.879Z] [BOT] ✅ Loaded V2 database: 2064 jobs
💾 DISK STATE: 2064 jobs on disk
[2026-02-01T17:22:28.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2064
[2026-02-01T17:22:28.885Z] [BOT] 🔀 Deep merged: Software Engineer - Fullstack @ ORG_c7bac469 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:22:28.885Z] [BOT] 💾 AFTER MERGE: 2064 jobs (merged disk + memory)
[2026-02-01T17:22:28.886Z] [BOT] ✅ No jobs to archive (all 2064 jobs within 7-day window)
[2026-02-01T17:22:28.997Z] [BOT] 💾 Saved posted_jobs.json: 2064 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:33.499Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-01T17:22:33.500Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - E-Commerce Governance - PhD" @ ORG_08c9a13c
[2026-02-01T17:22:33.500Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:22:33.873Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🤖・ai-jobs
[2026-02-01T17:22:33.873Z] [BOT] ✅ Industry: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c
[2026-02-01T17:22:33.874Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T17:22:33.874Z] [BOT] 💾 BEFORE MERGE: 2065 jobs in memory (cached)
[2026-02-01T17:22:33.925Z] [BOT] ✅ Loaded V2 database: 2064 jobs
💾 DISK STATE: 2064 jobs on disk
[2026-02-01T17:22:33.926Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2065
[2026-02-01T17:22:33.929Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:33.929Z] [BOT] 💾 AFTER MERGE: 2065 jobs (merged disk + memory)
[2026-02-01T17:22:33.930Z] [BOT] ✅ No jobs to archive (all 2065 jobs within 7-day window)
[2026-02-01T17:22:34.052Z] [BOT] 💾 Saved posted_jobs.json: 2065 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:35.784Z] [BOT] ✅ Posted message: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T17:22:35.784Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:22:35.784Z] [BOT] 💾 Added channel posting: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T17:22:35.784Z] [BOT] 💾 BEFORE MERGE: 2065 jobs in memory (cached)
[2026-02-01T17:22:35.834Z] [BOT] ✅ Loaded V2 database: 2065 jobs
💾 DISK STATE: 2065 jobs on disk
[2026-02-01T17:22:35.835Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2065
[2026-02-01T17:22:35.838Z] [BOT] 🔀 Deep merged: Graduate Machine Learning Engineer - E-Commerce Governance - PhD @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:22:35.839Z] [BOT] 💾 AFTER MERGE: 2065 jobs (merged disk + memory)
[2026-02-01T17:22:35.840Z] [BOT] ✅ No jobs to archive (all 2065 jobs within 7-day window)
[2026-02-01T17:22:35.986Z] [BOT] 💾 Saved posted_jobs.json: 2065 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:37.489Z] [BOT] 📍 [ROUTING] "Software Engineer – University Graduate" @ ORG_e5deb41a Securities
   Category: AI (matched: "machine learning")
[2026-02-01T17:22:37.489Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:22:37.705Z] [BOT] ✅ Posted message: Software Engineer – University Graduate @ ORG_e5deb41a Securities in #🤖・ai-jobs
  ✅ Industry: Software Engineer – University Graduate @ ORG_e5deb41a Securities
[2026-02-01T17:22:37.706Z] [BOT] 💾 Added channel posting: Software Engineer – University Graduate @ ORG_e5deb41a Securities → category channel (1 total channels)
[2026-02-01T17:22:37.706Z] [BOT] 💾 BEFORE MERGE: 2066 jobs in memory (cached)
[2026-02-01T17:22:37.758Z] [BOT] ✅ Loaded V2 database: 2065 jobs
💾 DISK STATE: 2065 jobs on disk
[2026-02-01T17:22:37.758Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2066
[2026-02-01T17:22:37.762Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:37.762Z] [BOT] 💾 AFTER MERGE: 2066 jobs (merged disk + memory)
[2026-02-01T17:22:37.763Z] [BOT] ✅ No jobs to archive (all 2066 jobs within 7-day window)
[2026-02-01T17:22:37.877Z] [BOT] 💾 Saved posted_jobs.json: 2066 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:39.556Z] [BOT] ✅ Posted message: Software Engineer – University Graduate @ ORG_e5deb41a Securities in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T17:22:39.557Z] [BOT] 💾 Added channel posting: Software Engineer – University Graduate @ ORG_e5deb41a Securities → location channel (2 total channels)
[2026-02-01T17:22:39.557Z] [BOT] 💾 BEFORE MERGE: 2066 jobs in memory (cached)
[2026-02-01T17:22:39.611Z] [BOT] ✅ Loaded V2 database: 2066 jobs
💾 DISK STATE: 2066 jobs on disk
[2026-02-01T17:22:39.612Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2066
[2026-02-01T17:22:39.616Z] [BOT] 🔀 Deep merged: Software Engineer – University Graduate @ ORG_e5deb41a Securities (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2066 jobs (merged disk + memory)
[2026-02-01T17:22:39.617Z] [BOT] ✅ No jobs to archive (all 2066 jobs within 7-day window)
[2026-02-01T17:22:39.776Z] [BOT] 💾 Saved posted_jobs.json: 2066 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:41.278Z] [BOT] 📍 [ROUTING] "Assistant Professor of Computing and Information Science - Machine Learning" @ ORG_9d38443e of Maine System
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:22:41.278Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:22:41.540Z] [BOT] ✅ Posted message: Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine System in #🤖・ai-jobs
  ✅ Industry: Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine System
[2026-02-01T17:22:41.541Z] [BOT] 💾 Added channel posting: Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine System → category channel (1 total channels)
[2026-02-01T17:22:41.541Z] [BOT] 💾 BEFORE MERGE: 2067 jobs in memory (cached)
[2026-02-01T17:22:41.595Z] [BOT] ✅ Loaded V2 database: 2066 jobs
💾 DISK STATE: 2066 jobs on disk
[2026-02-01T17:22:41.595Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2067
[2026-02-01T17:22:41.599Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:22:41.599Z] [BOT] 💾 AFTER MERGE: 2067 jobs (merged disk + memory)
[2026-02-01T17:22:41.600Z] [BOT] ✅ No jobs to archive (all 2067 jobs within 7-day window)
[2026-02-01T17:22:41.716Z] [BOT] 💾 Saved posted_jobs.json: 2067 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:46.219Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T17:22:46.220Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "1a0a9fcc82bb1171"
[2026-02-01T17:22:46.220Z] [BOT] ⏭️  Skipping duplicate: JID_fca1b275 (posted within 7 days)
[2026-02-01T17:22:46.221Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dc4fcd4f..." not found, but found as SHA256 "abf1e94cac666552"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_18a4cd5e-detail (posted within 7 days)
[2026-02-01T17:22:46.222Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e1c0f242..." not found, but found as SHA256 "de1c092f749def40"
⏭️  Skipping duplicate: JID_2c61fe83 (posted within 7 days)
[2026-02-01T17:22:46.222Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98f8205d..." not found, but found as SHA256 "bde960d7fbf78213"
[2026-02-01T17:22:46.222Z] [BOT] ⏭️  Skipping duplicate: JID_5ffdbaca (posted within 7 days)
[2026-02-01T17:22:46.222Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0db96e71..." not found, but found as SHA256 "3e1a3124b162f6bd"
[2026-02-01T17:22:46.222Z] [BOT] ⏭️  Skipping duplicate: JID_71787af8 (posted within 7 days)
[2026-02-01T17:22:46.223Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9abdfcc0-..." not found, but found as SHA256 "6798e466be96f46e"
[2026-02-01T17:22:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_465f1a25 (posted within 7 days)
[2026-02-01T17:22:46.223Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c603d1d9-..." not found, but found as SHA256 "d671c31c68981173"
[2026-02-01T17:22:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_6bdc77c1 (posted within 7 days)
[2026-02-01T17:22:46.223Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f9b11f57..." not found, but found as SHA256 "af1f6bd39d45e7d9"
[2026-02-01T17:22:46.223Z] [BOT] ⏭️  Skipping duplicate: JID_ec15ff8a (posted within 7 days)
[2026-02-01T17:22:46.224Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c1ed441..." not found, but found as SHA256 "495b3110b62ac617"
[2026-02-01T17:22:46.224Z] [BOT] ⏭️  Skipping duplicate: JID_0d126207 (posted within 7 days)
[2026-02-01T17:22:46.224Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e247f0d0..." not found, but found as SHA256 "a9faf729bf550c31"
[2026-02-01T17:22:46.224Z] [BOT] ⏭️  Skipping duplicate: JID_7beef9bb-cx_1-job-725 (posted within 7 days)
[2026-02-01T17:22:46.385Z] [BOT] ✅ Loaded pending queue: 2948 total (852 pending, 49 enriched, 2047 posted)
[2026-02-01T17:22:46.580Z] [BOT] ✅ Saved pending queue: 2948 total (852 pending, 39 enriched, 2057 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T17:22:46.684Z] [BOT] 📂 Loaded 12138 existing routing entries
[2026-02-01T17:22:46.818Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12148
   Timestamp: 2026-02-01T17:22:46.775Z
[2026-02-01T17:22:46.822Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
   Total attempts: 27
   Successful: 18
   Failed: 0
   Skipped: 9
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📍・JID_6daed763: 2 posts
     4. #🗽・JID_98d4f0de: 2 posts
     5. #🌉・JID_739bbc0b: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2067 jobs in memory (cached)
[2026-02-01T17:22:46.892Z] [BOT] ✅ Loaded V2 database: 2067 jobs
[2026-02-01T17:22:46.893Z] [BOT] 💾 DISK STATE: 2067 jobs on disk
[2026-02-01T17:22:46.895Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2067
[2026-02-01T17:22:46.900Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2067 jobs (merged disk + memory)
[2026-02-01T17:22:46.902Z] [BOT] ✅ No jobs to archive (all 2067 jobs within 7-day window)
[2026-02-01T17:22:47.026Z] [BOT] 💾 Saved posted_jobs.json: 2067 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:22:47.026Z] [BOT] ✅ Database saved successfully
[2026-02-01T17:22:49.055Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*