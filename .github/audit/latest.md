# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T17:48:35.111Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T17:47:45.495Z] ========================================
[2026-02-01T17:47:45.497Z] Discord Bot Execution Log
[2026-02-01T17:47:45.497Z] Environment: GitHub Actions
[2026-02-01T17:47:45.497Z] Node Version: v20.20.0
[2026-02-01T17:47:45.497Z] ========================================
[2026-02-01T17:47:45.497Z] Environment Variables Check:
[2026-02-01T17:47:45.497Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T17:47:45.497Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T17:47:45.497Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T17:47:45.497Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T17:47:45.497Z] 
Multi-Channel Configuration:
[2026-02-01T17:47:45.497Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T17:47:45.498Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:47:45.498Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:47:45.498Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T17:47:45.498Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:47:45.498Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:47:45.498Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:47:45.498Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:47:45.498Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:47:45.498Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T17:47:45.498Z] 
Data Files Check:
[2026-02-01T17:47:45.499Z] .github/data/new_jobs.json: ✅ Exists (10 items, 76311 bytes)
[2026-02-01T17:47:45.550Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10356653 bytes)
[2026-02-01T17:47:45.550Z] 
========================================
[2026-02-01T17:47:45.550Z] Starting Enhanced Discord Bot...
[2026-02-01T17:47:45.550Z] ========================================
[2026-02-01T17:47:46.127Z] [BOT] ✅ Loaded V2 database: 2077 jobs
[2026-02-01T17:47:46.760Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-01T17:47:46.760Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T17:47:46.760Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T17:47:46.871Z] [BOT] ✅ Loaded pending queue: 2948 total (831 pending, 50 enriched, 2067 posted)
[2026-02-01T17:47:46.871Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:47:46.872Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T17:47:46.873Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T17:47:46.873Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:47:46.873Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T17:47:46.873Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T17:47:46.874Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-02-01T17:47:46.874Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T17:47:46.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T17:47:46.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-02-01T17:47:46.875Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T17:47:46.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T17:47:46.875Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-02-01T17:47:46.876Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T17:47:46.890Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T17:47:46.890Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T17:47:46.891Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T17:47:46.892Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-02-01T17:47:46.892Z] [BOT] (11 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad - Production Infrastructure @ Palantir: new york, seattle, washington, palo alto, denver
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
[2026-02-01T17:47:46.892Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T17:47:46.894Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-02-01T17:47:46.896Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Production Infrastructure" @ ORG_f56b7436
[2026-02-01T17:47:46.896Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:47:46.913Z] [BOT ERROR] (node:3072) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T17:47:47.135Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
[2026-02-01T17:47:47.136Z] [BOT] ✅ Industry: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436
[2026-02-01T17:47:47.137Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T17:47:47.137Z] [BOT] 💾 BEFORE MERGE: 2078 jobs in memory (cached)
[2026-02-01T17:47:47.180Z] [BOT] ✅ Loaded V2 database: 2077 jobs
💾 DISK STATE: 2077 jobs on disk
[2026-02-01T17:47:47.181Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2078
[2026-02-01T17:47:47.185Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2078 jobs (merged disk + memory)
[2026-02-01T17:47:47.187Z] [BOT] ✅ No jobs to archive (all 2078 jobs within 7-day window)
[2026-02-01T17:47:47.323Z] [BOT] 💾 Saved posted_jobs.json: 2078 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:47:49.035Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 in #🗽・JID_98d4f0de
[2026-02-01T17:47:49.035Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T17:47:49.036Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 → location channel (2 total channels)
💾 BEFORE MERGE: 2078 jobs in memory (cached)
[2026-02-01T17:47:49.074Z] [BOT] ✅ Loaded V2 database: 2078 jobs
[2026-02-01T17:47:49.074Z] [BOT] 💾 DISK STATE: 2078 jobs on disk
[2026-02-01T17:47:49.075Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2078
[2026-02-01T17:47:49.079Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Production Infrastructure @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:47:49.079Z] [BOT] 💾 AFTER MERGE: 2078 jobs (merged disk + memory)
[2026-02-01T17:47:49.081Z] [BOT] ✅ No jobs to archive (all 2078 jobs within 7-day window)
[2026-02-01T17:47:49.183Z] [BOT] 💾 Saved posted_jobs.json: 2078 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:47:50.685Z] [BOT] 📍 [ROUTING] "Application Engineer - Mandarin" @ ORG_655c6ec2
[2026-02-01T17:47:50.685Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:47:50.901Z] [BOT] ✅ Posted message: Application Engineer - Mandarin @ ORG_655c6ec2 in #💻・tech-jobs
[2026-02-01T17:47:50.901Z] [BOT] ✅ Industry: Application Engineer - Mandarin @ ORG_655c6ec2
[2026-02-01T17:47:50.902Z] [BOT] 💾 Added channel posting: Application Engineer - Mandarin @ ORG_655c6ec2 → category channel (1 total channels)
[2026-02-01T17:47:50.902Z] [BOT] 💾 BEFORE MERGE: 2079 jobs in memory (cached)
[2026-02-01T17:47:50.938Z] [BOT] ✅ Loaded V2 database: 2078 jobs
💾 DISK STATE: 2078 jobs on disk
[2026-02-01T17:47:50.938Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2079
[2026-02-01T17:47:50.946Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:47:50.947Z] [BOT] 💾 AFTER MERGE: 2079 jobs (merged disk + memory)
[2026-02-01T17:47:50.948Z] [BOT] ✅ No jobs to archive (all 2079 jobs within 7-day window)
[2026-02-01T17:47:51.050Z] [BOT] 💾 Saved posted_jobs.json: 2079 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:47:52.713Z] [BOT] ✅ Posted message: Application Engineer - Mandarin @ ORG_655c6ec2 in #📍・JID_6daed763
[2026-02-01T17:47:52.713Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-01T17:47:52.714Z] [BOT] 💾 Added channel posting: Application Engineer - Mandarin @ ORG_655c6ec2 → location channel (2 total channels)
[2026-02-01T17:47:52.714Z] [BOT] 💾 BEFORE MERGE: 2079 jobs in memory (cached)
[2026-02-01T17:47:52.749Z] [BOT] ✅ Loaded V2 database: 2079 jobs
💾 DISK STATE: 2079 jobs on disk
[2026-02-01T17:47:52.749Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2079
[2026-02-01T17:47:52.758Z] [BOT] 🔀 Deep merged: Application Engineer - Mandarin @ ORG_655c6ec2 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:47:52.758Z] [BOT] 💾 AFTER MERGE: 2079 jobs (merged disk + memory)
[2026-02-01T17:47:52.759Z] [BOT] ✅ No jobs to archive (all 2079 jobs within 7-day window)
[2026-02-01T17:47:52.863Z] [BOT] 💾 Saved posted_jobs.json: 2079 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:47:54.365Z] [BOT] 📍 [ROUTING] "Forward Deployed Engineer" @ ORG_213985e1
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T17:47:54.366Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:47:54.565Z] [BOT] ✅ Posted message: Forward Deployed Engineer @ ORG_213985e1 in #💻・tech-jobs
  ✅ Industry: Forward Deployed Engineer @ ORG_213985e1
[2026-02-01T17:47:54.566Z] [BOT] 💾 Added channel posting: Forward Deployed Engineer @ ORG_213985e1 → category channel (1 total channels)
[2026-02-01T17:47:54.566Z] [BOT] 💾 BEFORE MERGE: 2080 jobs in memory (cached)
[2026-02-01T17:47:54.607Z] [BOT] ✅ Loaded V2 database: 2079 jobs
💾 DISK STATE: 2079 jobs on disk
[2026-02-01T17:47:54.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2080
[2026-02-01T17:47:54.612Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:47:54.612Z] [BOT] 💾 AFTER MERGE: 2080 jobs (merged disk + memory)
[2026-02-01T17:47:54.613Z] [BOT] ✅ No jobs to archive (all 2080 jobs within 7-day window)
[2026-02-01T17:47:54.713Z] [BOT] 💾 Saved posted_jobs.json: 2080 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:47:56.387Z] [BOT] ✅ Posted message: Forward Deployed Engineer @ ORG_213985e1 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:47:56.387Z] [BOT] 💾 Added channel posting: Forward Deployed Engineer @ ORG_213985e1 → location channel (2 total channels)
[2026-02-01T17:47:56.387Z] [BOT] 💾 BEFORE MERGE: 2080 jobs in memory (cached)
[2026-02-01T17:47:56.422Z] [BOT] ✅ Loaded V2 database: 2080 jobs
💾 DISK STATE: 2080 jobs on disk
[2026-02-01T17:47:56.423Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2080
[2026-02-01T17:47:56.431Z] [BOT] 🔀 Deep merged: Forward Deployed Engineer @ ORG_213985e1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:47:56.431Z] [BOT] 💾 AFTER MERGE: 2080 jobs (merged disk + memory)
[2026-02-01T17:47:56.432Z] [BOT] ✅ No jobs to archive (all 2080 jobs within 7-day window)
[2026-02-01T17:47:56.550Z] [BOT] 💾 Saved posted_jobs.json: 2080 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:47:58.049Z] [BOT] 📍 [ROUTING] "Software Engineer (Backend Rust)" @ N1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:47:58.359Z] [BOT] ✅ Posted message: Software Engineer (Backend Rust) @ N1 in #💻・tech-jobs
[2026-02-01T17:47:58.359Z] [BOT] ✅ Industry: Software Engineer (Backend Rust) @ N1
[2026-02-01T17:47:58.360Z] [BOT] 💾 Added channel posting: Software Engineer (Backend Rust) @ N1 → category channel (1 total channels)
[2026-02-01T17:47:58.360Z] [BOT] 💾 BEFORE MERGE: 2081 jobs in memory (cached)
[2026-02-01T17:47:58.394Z] [BOT] ✅ Loaded V2 database: 2080 jobs
💾 DISK STATE: 2080 jobs on disk
[2026-02-01T17:47:58.395Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2081
[2026-02-01T17:47:58.399Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:47:58.399Z] [BOT] 💾 AFTER MERGE: 2081 jobs (merged disk + memory)
[2026-02-01T17:47:58.401Z] [BOT] ✅ No jobs to archive (all 2081 jobs within 7-day window)
[2026-02-01T17:47:58.494Z] [BOT] 💾 Saved posted_jobs.json: 2081 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:00.251Z] [BOT] ✅ Posted message: Software Engineer (Backend Rust) @ N1 in #🗽・JID_98d4f0de
[2026-02-01T17:48:00.251Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T17:48:00.251Z] [BOT] 💾 Added channel posting: Software Engineer (Backend Rust) @ N1 → location channel (2 total channels)
[2026-02-01T17:48:00.251Z] [BOT] 💾 BEFORE MERGE: 2081 jobs in memory (cached)
[2026-02-01T17:48:00.286Z] [BOT] ✅ Loaded V2 database: 2081 jobs
💾 DISK STATE: 2081 jobs on disk
[2026-02-01T17:48:00.287Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2081
[2026-02-01T17:48:00.295Z] [BOT] 🔀 Deep merged: Software Engineer (Backend Rust) @ N1 (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:48:00.295Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2081 jobs (merged disk + memory)
[2026-02-01T17:48:00.296Z] [BOT] ✅ No jobs to archive (all 2081 jobs within 7-day window)
[2026-02-01T17:48:00.396Z] [BOT] 💾 Saved posted_jobs.json: 2081 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:04.899Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-02-01T17:48:04.901Z] [BOT] 📍 [ROUTING] "Scout Search Quality Rater" @ ORG_066855bc
[2026-02-01T17:48:04.901Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:48:05.337Z] [BOT] ✅ Posted message: Scout Search Quality Rater @ ORG_066855bc in #🤖・ai-jobs
[2026-02-01T17:48:05.337Z] [BOT] ✅ Industry: Scout Search Quality Rater @ ORG_066855bc
[2026-02-01T17:48:05.338Z] [BOT] 💾 Added channel posting: Scout Search Quality Rater @ ORG_066855bc → category channel (1 total channels)
[2026-02-01T17:48:05.338Z] [BOT] 💾 BEFORE MERGE: 2082 jobs in memory (cached)
[2026-02-01T17:48:05.373Z] [BOT] ✅ Loaded V2 database: 2081 jobs
💾 DISK STATE: 2081 jobs on disk
[2026-02-01T17:48:05.374Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2082
[2026-02-01T17:48:05.382Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:48:05.382Z] [BOT] 💾 AFTER MERGE: 2082 jobs (merged disk + memory)
[2026-02-01T17:48:05.383Z] [BOT] ✅ No jobs to archive (all 2082 jobs within 7-day window)
[2026-02-01T17:48:05.500Z] [BOT] 💾 Saved posted_jobs.json: 2082 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:07.658Z] [BOT] ✅ Posted message: Scout Search Quality Rater @ ORG_066855bc in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T17:48:07.659Z] [BOT] 💾 Added channel posting: Scout Search Quality Rater @ ORG_066855bc → location channel (2 total channels)
[2026-02-01T17:48:07.659Z] [BOT] 💾 BEFORE MERGE: 2082 jobs in memory (cached)
[2026-02-01T17:48:07.693Z] [BOT] ✅ Loaded V2 database: 2082 jobs
💾 DISK STATE: 2082 jobs on disk
[2026-02-01T17:48:07.694Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2082
[2026-02-01T17:48:07.698Z] [BOT] 🔀 Deep merged: Scout Search Quality Rater @ ORG_066855bc (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:48:07.698Z] [BOT] 💾 AFTER MERGE: 2082 jobs (merged disk + memory)
[2026-02-01T17:48:07.700Z] [BOT] ✅ No jobs to archive (all 2082 jobs within 7-day window)
[2026-02-01T17:48:07.811Z] [BOT] 💾 Saved posted_jobs.json: 2082 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:09.311Z] [BOT] 📍 [ROUTING] "Scout Search Quality Rater - Spanish - USA" @ ORG_066855bc
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:48:09.582Z] [BOT] ✅ Posted message: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc in #🤖・ai-jobs
  ✅ Industry: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc
[2026-02-01T17:48:09.583Z] [BOT] 💾 Added channel posting: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc → category channel (1 total channels)
[2026-02-01T17:48:09.583Z] [BOT] 💾 BEFORE MERGE: 2083 jobs in memory (cached)
[2026-02-01T17:48:09.619Z] [BOT] ✅ Loaded V2 database: 2082 jobs
💾 DISK STATE: 2082 jobs on disk
[2026-02-01T17:48:09.619Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2083
[2026-02-01T17:48:09.623Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:48:09.623Z] [BOT] 💾 AFTER MERGE: 2083 jobs (merged disk + memory)
[2026-02-01T17:48:09.624Z] [BOT] ✅ No jobs to archive (all 2083 jobs within 7-day window)
[2026-02-01T17:48:09.724Z] [BOT] 💾 Saved posted_jobs.json: 2083 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:11.521Z] [BOT] ✅ Posted message: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T17:48:11.522Z] [BOT] 💾 Added channel posting: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc → location channel (2 total channels)
[2026-02-01T17:48:11.522Z] [BOT] 💾 BEFORE MERGE: 2083 jobs in memory (cached)
[2026-02-01T17:48:11.557Z] [BOT] ✅ Loaded V2 database: 2083 jobs
💾 DISK STATE: 2083 jobs on disk
[2026-02-01T17:48:11.557Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2083
[2026-02-01T17:48:11.566Z] [BOT] 🔀 Deep merged: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:48:11.566Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2083 jobs (merged disk + memory)
[2026-02-01T17:48:11.567Z] [BOT] ✅ No jobs to archive (all 2083 jobs within 7-day window)
[2026-02-01T17:48:11.666Z] [BOT] 💾 Saved posted_jobs.json: 2083 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:13.168Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:48:13.169Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:48:13.425Z] [BOT] ✅ Posted message: Machine Learning Graduate @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Graduate @ ORG_08c9a13c
[2026-02-01T17:48:13.426Z] [BOT] 💾 Added channel posting: Machine Learning Graduate @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T17:48:13.426Z] [BOT] 💾 BEFORE MERGE: 2084 jobs in memory (cached)
[2026-02-01T17:48:13.461Z] [BOT] ✅ Loaded V2 database: 2083 jobs
💾 DISK STATE: 2083 jobs on disk
[2026-02-01T17:48:13.462Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2084
[2026-02-01T17:48:13.470Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:48:13.470Z] [BOT] 💾 AFTER MERGE: 2084 jobs (merged disk + memory)
[2026-02-01T17:48:13.471Z] [BOT] ✅ No jobs to archive (all 2084 jobs within 7-day window)
[2026-02-01T17:48:13.573Z] [BOT] 💾 Saved posted_jobs.json: 2084 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:15.358Z] [BOT] ✅ Posted message: Machine Learning Graduate @ ORG_08c9a13c in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-01T17:48:15.359Z] [BOT] 💾 Added channel posting: Machine Learning Graduate @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T17:48:15.359Z] [BOT] 💾 BEFORE MERGE: 2084 jobs in memory (cached)
[2026-02-01T17:48:15.395Z] [BOT] ✅ Loaded V2 database: 2084 jobs
💾 DISK STATE: 2084 jobs on disk
[2026-02-01T17:48:15.395Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2084
[2026-02-01T17:48:15.399Z] [BOT] 🔀 Deep merged: Machine Learning Graduate @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:48:15.399Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2084 jobs (merged disk + memory)
[2026-02-01T17:48:15.408Z] [BOT] ✅ No jobs to archive (all 2084 jobs within 7-day window)
[2026-02-01T17:48:15.524Z] [BOT] 💾 Saved posted_jobs.json: 2084 active jobs
[2026-02-01T17:48:15.524Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:17.027Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Applied Machine Learning - Orchestration" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-02-01T17:48:17.027Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:48:17.351Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c
[2026-02-01T17:48:17.352Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c → category channel (1 total channels)
[2026-02-01T17:48:17.353Z] [BOT] 💾 BEFORE MERGE: 2085 jobs in memory (cached)
[2026-02-01T17:48:17.387Z] [BOT] ✅ Loaded V2 database: 2084 jobs
💾 DISK STATE: 2084 jobs on disk
[2026-02-01T17:48:17.387Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2085
[2026-02-01T17:48:17.391Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:48:17.391Z] [BOT] 💾 AFTER MERGE: 2085 jobs (merged disk + memory)
[2026-02-01T17:48:17.392Z] [BOT] ✅ No jobs to archive (all 2085 jobs within 7-day window)
[2026-02-01T17:48:17.489Z] [BOT] 💾 Saved posted_jobs.json: 2085 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:19.274Z] [BOT] ✅ Posted message: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T17:48:19.275Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:48:19.275Z] [BOT] 💾 Added channel posting: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T17:48:19.275Z] [BOT] 💾 BEFORE MERGE: 2085 jobs in memory (cached)
[2026-02-01T17:48:19.326Z] [BOT] ✅ Loaded V2 database: 2085 jobs
💾 DISK STATE: 2085 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2085
[2026-02-01T17:48:19.330Z] [BOT] 🔀 Deep merged: Software Engineer Graduate - Applied Machine Learning - Orchestration @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:48:19.330Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2085 jobs (merged disk + memory)
[2026-02-01T17:48:19.331Z] [BOT] ✅ No jobs to archive (all 2085 jobs within 7-day window)
[2026-02-01T17:48:19.430Z] [BOT] 💾 Saved posted_jobs.json: 2085 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:20.933Z] [BOT] 📍 [ROUTING] "Builder – New Grad - Software Engineer" @ ORG_eb020b7a
[2026-02-01T17:48:20.933Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:48:20.933Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:48:21.092Z] [BOT] ✅ Posted message: Builder – New Grad - Software Engineer @ ORG_eb020b7a in #🤖・ai-jobs
[2026-02-01T17:48:21.092Z] [BOT] ✅ Industry: Builder – New Grad - Software Engineer @ ORG_eb020b7a
[2026-02-01T17:48:21.093Z] [BOT] 💾 Added channel posting: Builder – New Grad - Software Engineer @ ORG_eb020b7a → category channel (1 total channels)
[2026-02-01T17:48:21.093Z] [BOT] 💾 BEFORE MERGE: 2086 jobs in memory (cached)
[2026-02-01T17:48:21.129Z] [BOT] ✅ Loaded V2 database: 2085 jobs
💾 DISK STATE: 2085 jobs on disk
[2026-02-01T17:48:21.129Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2086
[2026-02-01T17:48:21.133Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:48:21.133Z] [BOT] 💾 AFTER MERGE: 2086 jobs (merged disk + memory)
[2026-02-01T17:48:21.134Z] [BOT] ✅ No jobs to archive (all 2086 jobs within 7-day window)
[2026-02-01T17:48:21.233Z] [BOT] 💾 Saved posted_jobs.json: 2086 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:23.008Z] [BOT] ✅ Posted message: Builder – New Grad - Software Engineer @ ORG_eb020b7a in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:48:23.008Z] [BOT] 💾 Added channel posting: Builder – New Grad - Software Engineer @ ORG_eb020b7a → location channel (2 total channels)
[2026-02-01T17:48:23.008Z] [BOT] 💾 BEFORE MERGE: 2086 jobs in memory (cached)
[2026-02-01T17:48:23.045Z] [BOT] ✅ Loaded V2 database: 2086 jobs
💾 DISK STATE: 2086 jobs on disk
[2026-02-01T17:48:23.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2086
[2026-02-01T17:48:23.049Z] [BOT] 🔀 Deep merged: Builder – New Grad - Software Engineer @ ORG_eb020b7a (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:48:23.049Z] [BOT] 💾 AFTER MERGE: 2086 jobs (merged disk + memory)
[2026-02-01T17:48:23.050Z] [BOT] ✅ No jobs to archive (all 2086 jobs within 7-day window)
[2026-02-01T17:48:23.149Z] [BOT] 💾 Saved posted_jobs.json: 2086 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:24.652Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd" @ ORG_08c9a13c
[2026-02-01T17:48:24.652Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-01T17:48:24.839Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c
[2026-02-01T17:48:24.841Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c → category channel (1 total channels)
💾 BEFORE MERGE: 2087 jobs in memory (cached)
[2026-02-01T17:48:24.876Z] [BOT] ✅ Loaded V2 database: 2086 jobs
💾 DISK STATE: 2086 jobs on disk
[2026-02-01T17:48:24.876Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2087
[2026-02-01T17:48:24.888Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:48:24.892Z] [BOT] 💾 AFTER MERGE: 2087 jobs (merged disk + memory)
✅ No jobs to archive (all 2087 jobs within 7-day window)
[2026-02-01T17:48:24.999Z] [BOT] 💾 Saved posted_jobs.json: 2087 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:26.725Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c in #🌉・JID_739bbc0b
[2026-02-01T17:48:26.725Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:48:26.725Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c → location channel (2 total channels)
[2026-02-01T17:48:26.726Z] [BOT] 💾 BEFORE MERGE: 2087 jobs in memory (cached)
[2026-02-01T17:48:26.760Z] [BOT] ✅ Loaded V2 database: 2087 jobs
💾 DISK STATE: 2087 jobs on disk
[2026-02-01T17:48:26.760Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2087
[2026-02-01T17:48:26.764Z] [BOT] 🔀 Deep merged: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:48:26.764Z] [BOT] 💾 AFTER MERGE: 2087 jobs (merged disk + memory)
[2026-02-01T17:48:26.765Z] [BOT] ✅ No jobs to archive (all 2087 jobs within 7-day window)
[2026-02-01T17:48:26.879Z] [BOT] 💾 Saved posted_jobs.json: 2087 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:31.378Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T17:48:31.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b7eb8d01..." not found, but found as SHA256 "a54acb0f7f8cb6ec"
[2026-02-01T17:48:31.379Z] [BOT] ⏭️  Skipping duplicate: JID_7b715dd0 (posted within 7 days)
[2026-02-01T17:48:31.380Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_55402c73..." not found, but found as SHA256 "54a2fa3885cdc64a"
⏭️  Skipping duplicate: JID_68c161a9 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c774c4b9..." not found, but found as SHA256 "39fdf644f3be16e6"
⏭️  Skipping duplicate: JID_e23c41f3 (posted within 7 days)
[2026-02-01T17:48:31.380Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b5b9be21..." not found, but found as SHA256 "b95d95c2d86775a8"
[2026-02-01T17:48:31.380Z] [BOT] ⏭️  Skipping duplicate: JID_3e4eb060 (posted within 7 days)
[2026-02-01T17:48:31.381Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_52e03016..." not found, but found as SHA256 "ca9325902f37847c"
[2026-02-01T17:48:31.381Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_953d2072-detail (posted within 7 days)
[2026-02-01T17:48:31.381Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d7fd322b..." not found, but found as SHA256 "aba3bbc998c7a86c"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_db521b2b-detail (posted within 7 days)
[2026-02-01T17:48:31.381Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bbca4b94..." not found, but found as SHA256 "0efcf0372b4a5b02"
⏭️  Skipping duplicate: JID_5ae4949c (posted within 7 days)
[2026-02-01T17:48:31.381Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3c1003fe..." not found, but found as SHA256 "a3da18503826a08f"
⏭️  Skipping duplicate: JID_95ce1ea3-CH_d95b5556-detail (posted within 7 days)
[2026-02-01T17:48:31.382Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0ba3b571..." not found, but found as SHA256 "49befa57f818418d"
[2026-02-01T17:48:31.382Z] [BOT] ⏭️  Skipping duplicate: JID_1cc9c6cb (posted within 7 days)
[2026-02-01T17:48:31.382Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_32d8c8e3..." not found, but found as SHA256 "5ce013a40ec69b00"
[2026-02-01T17:48:31.382Z] [BOT] ⏭️  Skipping duplicate: JID_947f4192 (posted within 7 days)
[2026-02-01T17:48:31.494Z] [BOT] ✅ Loaded pending queue: 2948 total (831 pending, 50 enriched, 2067 posted)
[2026-02-01T17:48:31.690Z] [BOT] ✅ Saved pending queue: 2948 total (831 pending, 40 enriched, 2077 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-02-01T17:48:31.690Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-01T17:48:31.780Z] [BOT] 📂 Loaded 12158 existing routing entries
[2026-02-01T17:48:31.936Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-01T17:48:31.936Z] [BOT] New entries: 10
   Total entries: 12168
   Timestamp: 2026-02-01T17:48:31.887Z
[2026-02-01T17:48:31.937Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T17:48:31.937Z] [BOT] Total attempts: 28
   Successful: 20
   Failed: 0
   Skipped: 8
[2026-02-01T17:48:31.937Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T17:48:31.937Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 6
   Top channels:
[2026-02-01T17:48:31.937Z] [BOT] 1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 4 posts
     3. #🌉・JID_739bbc0b: 4 posts
[2026-02-01T17:48:31.937Z] [BOT] 4. #🌲・JID_efdf5921: 3 posts
     5. #🗽・JID_98d4f0de: 2 posts
[2026-02-01T17:48:31.937Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-01T17:48:31.938Z] [BOT] 💾 BEFORE MERGE: 2087 jobs in memory (cached)
[2026-02-01T17:48:31.978Z] [BOT] ✅ Loaded V2 database: 2087 jobs
💾 DISK STATE: 2087 jobs on disk
[2026-02-01T17:48:31.978Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2087
[2026-02-01T17:48:31.982Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:48:31.982Z] [BOT] 💾 AFTER MERGE: 2087 jobs (merged disk + memory)
[2026-02-01T17:48:31.984Z] [BOT] ✅ No jobs to archive (all 2087 jobs within 7-day window)
[2026-02-01T17:48:32.086Z] [BOT] 💾 Saved posted_jobs.json: 2087 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:48:32.086Z] [BOT] ✅ Database saved successfully
[2026-02-01T17:48:34.117Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3072) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*