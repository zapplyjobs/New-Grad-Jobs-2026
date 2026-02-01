# Discord Bot Execution Audit
**Timestamp:** 2026-02-01T17:32:45.752Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-01T17:31:56.980Z] ========================================
[2026-02-01T17:31:56.982Z] Discord Bot Execution Log
[2026-02-01T17:31:56.982Z] Environment: GitHub Actions
[2026-02-01T17:31:56.982Z] Node Version: v20.20.0
[2026-02-01T17:31:56.982Z] ========================================
[2026-02-01T17:31:56.982Z] Environment Variables Check:
[2026-02-01T17:31:56.982Z] DISCORD_TOKEN: ✅ Set
[2026-02-01T17:31:56.982Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-01T17:31:56.982Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-01T17:31:56.982Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-01T17:31:56.982Z] 
Multi-Channel Configuration:
[2026-02-01T17:31:56.983Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-01T17:31:56.983Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:31:56.983Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:31:56.983Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-01T17:31:56.983Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:31:56.983Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:31:56.983Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:31:56.983Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:31:56.983Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-01T17:31:56.983Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-01T17:31:56.983Z] 
Data Files Check:
[2026-02-01T17:31:56.984Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64502 bytes)
[2026-02-01T17:31:57.036Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 10316565 bytes)
[2026-02-01T17:31:57.036Z] 
========================================
[2026-02-01T17:31:57.036Z] Starting Enhanced Discord Bot...
[2026-02-01T17:31:57.036Z] ========================================
[2026-02-01T17:31:57.623Z] [BOT] ✅ Loaded V2 database: 2067 jobs
[2026-02-01T17:31:58.139Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-01T17:31:58.139Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-01T17:31:58.139Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-01T17:31:58.249Z] [BOT] ✅ Loaded pending queue: 2948 total (841 pending, 50 enriched, 2057 posted)
[2026-02-01T17:31:58.250Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-01T17:31:58.250Z] [BOT] [BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:31:58.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-02-01T17:31:58.251Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-02-01T17:31:58.251Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-02-01T17:31:58.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-02-01T17:31:58.252Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-02-01T17:31:58.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-02-01T17:31:58.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-02-01T17:31:58.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-02-01T17:31:58.253Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-02-01T17:31:58.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-02-01T17:31:58.254Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-02-01T17:31:58.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-02-01T17:31:58.254Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-02-01T17:31:58.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-02-01T17:31:58.255Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-02-01T17:31:58.270Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-02-01T17:31:58.270Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-02-01T17:31:58.270Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-02-01T17:31:58.271Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-02-01T17:31:58.271Z] [BOT] (11 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer – New Grad - Infrastructure @ Palantir: new york, seattle, washington, palo alto, denver
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-01T17:31:58.275Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-01T17:31:58.276Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2026-02-01T17:31:58.276Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:31:58.294Z] [BOT ERROR] (node:3118) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-01T17:31:58.591Z] [BOT] ✅ Posted message: Junior Software Engineer @ mthree in #💻・tech-jobs
[2026-02-01T17:31:58.591Z] [BOT] ✅ Industry: Junior Software Engineer @ mthree
[2026-02-01T17:31:58.592Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ mthree → category channel (1 total channels)
[2026-02-01T17:31:58.592Z] [BOT] 💾 BEFORE MERGE: 2068 jobs in memory (cached)
[2026-02-01T17:31:58.636Z] [BOT] ✅ Loaded V2 database: 2067 jobs
💾 DISK STATE: 2067 jobs on disk
[2026-02-01T17:31:58.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2068
[2026-02-01T17:31:58.646Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:31:58.647Z] [BOT] 💾 AFTER MERGE: 2068 jobs (merged disk + memory)
[2026-02-01T17:31:58.648Z] [BOT] ✅ No jobs to archive (all 2068 jobs within 7-day window)
[2026-02-01T17:31:58.775Z] [BOT] 💾 Saved posted_jobs.json: 2068 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:00.278Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f4398599
   Category: TECH (matched: "software")
[2026-02-01T17:32:00.278Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:00.615Z] [BOT] ✅ Posted message: Software Engineer @ ORG_f4398599 in #💻・tech-jobs
[2026-02-01T17:32:00.616Z] [BOT] ✅ Industry: Software Engineer @ ORG_f4398599
[2026-02-01T17:32:00.616Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_f4398599 → category channel (1 total channels)
[2026-02-01T17:32:00.617Z] [BOT] 💾 BEFORE MERGE: 2069 jobs in memory (cached)
[2026-02-01T17:32:00.655Z] [BOT] ✅ Loaded V2 database: 2068 jobs
[2026-02-01T17:32:00.655Z] [BOT] 💾 DISK STATE: 2068 jobs on disk
[2026-02-01T17:32:00.655Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2069
[2026-02-01T17:32:00.660Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:00.660Z] [BOT] 💾 AFTER MERGE: 2069 jobs (merged disk + memory)
[2026-02-01T17:32:00.662Z] [BOT] ✅ No jobs to archive (all 2069 jobs within 7-day window)
[2026-02-01T17:32:00.763Z] [BOT] 💾 Saved posted_jobs.json: 2069 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:02.527Z] [BOT] ✅ Posted message: Software Engineer @ ORG_f4398599 in #🌲・JID_efdf5921
[2026-02-01T17:32:02.528Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-01T17:32:02.528Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_f4398599 → location channel (2 total channels)
[2026-02-01T17:32:02.528Z] [BOT] 💾 BEFORE MERGE: 2069 jobs in memory (cached)
[2026-02-01T17:32:02.563Z] [BOT] ✅ Loaded V2 database: 2069 jobs
💾 DISK STATE: 2069 jobs on disk
[2026-02-01T17:32:02.563Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2069
[2026-02-01T17:32:02.572Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_f4398599 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:32:02.572Z] [BOT] 💾 AFTER MERGE: 2069 jobs (merged disk + memory)
[2026-02-01T17:32:02.573Z] [BOT] ✅ No jobs to archive (all 2069 jobs within 7-day window)
[2026-02-01T17:32:02.676Z] [BOT] 💾 Saved posted_jobs.json: 2069 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:04.178Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_a3b50c47 Street
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:04.418Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_a3b50c47 Street in #💻・tech-jobs
  ✅ Industry: Software Engineer I @ ORG_a3b50c47 Street
[2026-02-01T17:32:04.419Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_a3b50c47 Street → category channel (1 total channels)
💾 BEFORE MERGE: 2070 jobs in memory (cached)
[2026-02-01T17:32:04.454Z] [BOT] ✅ Loaded V2 database: 2069 jobs
💾 DISK STATE: 2069 jobs on disk
[2026-02-01T17:32:04.455Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2070
[2026-02-01T17:32:04.460Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:04.461Z] [BOT] 💾 AFTER MERGE: 2070 jobs (merged disk + memory)
[2026-02-01T17:32:04.462Z] [BOT] ✅ No jobs to archive (all 2070 jobs within 7-day window)
[2026-02-01T17:32:04.571Z] [BOT] 💾 Saved posted_jobs.json: 2070 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:06.272Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_a3b50c47 Street in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:32:06.272Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_a3b50c47 Street → location channel (2 total channels)
[2026-02-01T17:32:06.272Z] [BOT] 💾 BEFORE MERGE: 2070 jobs in memory (cached)
[2026-02-01T17:32:06.308Z] [BOT] ✅ Loaded V2 database: 2070 jobs
💾 DISK STATE: 2070 jobs on disk
[2026-02-01T17:32:06.308Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2070
[2026-02-01T17:32:06.312Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_a3b50c47 Street (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:32:06.312Z] [BOT] 💾 AFTER MERGE: 2070 jobs (merged disk + memory)
[2026-02-01T17:32:06.313Z] [BOT] ✅ No jobs to archive (all 2070 jobs within 7-day window)
[2026-02-01T17:32:06.447Z] [BOT] 💾 Saved posted_jobs.json: 2070 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:07.950Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_86554b90
   Category: TECH (matched: "engineer/engineering")
[2026-02-01T17:32:07.950Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:08.155Z] [BOT] ✅ Posted message: Application Engineer @ ORG_86554b90 in #💻・tech-jobs
  ✅ Industry: Application Engineer @ ORG_86554b90
[2026-02-01T17:32:08.156Z] [BOT] 💾 Added channel posting: Application Engineer @ ORG_86554b90 → category channel (1 total channels)
[2026-02-01T17:32:08.156Z] [BOT] 💾 BEFORE MERGE: 2071 jobs in memory (cached)
[2026-02-01T17:32:08.190Z] [BOT] ✅ Loaded V2 database: 2070 jobs
💾 DISK STATE: 2070 jobs on disk
[2026-02-01T17:32:08.190Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2071
[2026-02-01T17:32:08.194Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:08.194Z] [BOT] 💾 AFTER MERGE: 2071 jobs (merged disk + memory)
[2026-02-01T17:32:08.196Z] [BOT] ✅ No jobs to archive (all 2071 jobs within 7-day window)
[2026-02-01T17:32:08.299Z] [BOT] 💾 Saved posted_jobs.json: 2071 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:10.077Z] [BOT] ✅ Posted message: Application Engineer @ ORG_86554b90 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:32:10.078Z] [BOT] 💾 Added channel posting: Application Engineer @ ORG_86554b90 → location channel (2 total channels)
[2026-02-01T17:32:10.078Z] [BOT] 💾 BEFORE MERGE: 2071 jobs in memory (cached)
[2026-02-01T17:32:10.114Z] [BOT] ✅ Loaded V2 database: 2071 jobs
💾 DISK STATE: 2071 jobs on disk
[2026-02-01T17:32:10.115Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2071
[2026-02-01T17:32:10.119Z] [BOT] 🔀 Deep merged: Application Engineer @ ORG_86554b90 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:32:10.119Z] [BOT] 💾 AFTER MERGE: 2071 jobs (merged disk + memory)
[2026-02-01T17:32:10.120Z] [BOT] ✅ No jobs to archive (all 2071 jobs within 7-day window)
[2026-02-01T17:32:10.220Z] [BOT] 💾 Saved posted_jobs.json: 2071 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:11.722Z] [BOT] 📍 [ROUTING] "Forward Deployed Software Engineer New Grad" @ ORG_c7ce2489 Health
   Category: TECH (matched: "software")
[2026-02-01T17:32:11.723Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:12.081Z] [BOT] ✅ Posted message: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health in #💻・tech-jobs
  ✅ Industry: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health
[2026-02-01T17:32:12.082Z] [BOT] 💾 Added channel posting: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health → category channel (1 total channels)
[2026-02-01T17:32:12.082Z] [BOT] 💾 BEFORE MERGE: 2072 jobs in memory (cached)
[2026-02-01T17:32:12.120Z] [BOT] ✅ Loaded V2 database: 2071 jobs
💾 DISK STATE: 2071 jobs on disk
[2026-02-01T17:32:12.120Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2072
[2026-02-01T17:32:12.124Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:12.124Z] [BOT] 💾 AFTER MERGE: 2072 jobs (merged disk + memory)
[2026-02-01T17:32:12.125Z] [BOT] ✅ No jobs to archive (all 2072 jobs within 7-day window)
[2026-02-01T17:32:12.228Z] [BOT] 💾 Saved posted_jobs.json: 2072 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:13.955Z] [BOT] ✅ Posted message: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health in #🌉・JID_739bbc0b
[2026-02-01T17:32:13.955Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-01T17:32:13.955Z] [BOT] 💾 Added channel posting: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health → location channel (2 total channels)
[2026-02-01T17:32:13.956Z] [BOT] 💾 BEFORE MERGE: 2072 jobs in memory (cached)
[2026-02-01T17:32:13.991Z] [BOT] ✅ Loaded V2 database: 2072 jobs
💾 DISK STATE: 2072 jobs on disk
[2026-02-01T17:32:13.991Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2072
[2026-02-01T17:32:13.999Z] [BOT] 🔀 Deep merged: Forward Deployed Software Engineer New Grad @ ORG_c7ce2489 Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:32:14.000Z] [BOT] 💾 AFTER MERGE: 2072 jobs (merged disk + memory)
[2026-02-01T17:32:14.001Z] [BOT] ✅ No jobs to archive (all 2072 jobs within 7-day window)
[2026-02-01T17:32:14.104Z] [BOT] 💾 Saved posted_jobs.json: 2072 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:15.607Z] [BOT] 📍 [ROUTING] "Software Engineer – New Grad - Infrastructure" @ ORG_f56b7436
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:16.335Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 in #💻・tech-jobs
  ✅ Industry: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436
[2026-02-01T17:32:16.336Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 → category channel (1 total channels)
[2026-02-01T17:32:16.336Z] [BOT] 💾 BEFORE MERGE: 2073 jobs in memory (cached)
[2026-02-01T17:32:16.379Z] [BOT] ✅ Loaded V2 database: 2072 jobs
💾 DISK STATE: 2072 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2073
[2026-02-01T17:32:16.390Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:16.390Z] [BOT] 💾 AFTER MERGE: 2073 jobs (merged disk + memory)
[2026-02-01T17:32:16.392Z] [BOT] ✅ No jobs to archive (all 2073 jobs within 7-day window)
[2026-02-01T17:32:16.489Z] [BOT] 💾 Saved posted_jobs.json: 2073 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:18.356Z] [BOT] ✅ Posted message: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 in #🗽・JID_98d4f0de
[2026-02-01T17:32:18.356Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-01T17:32:18.356Z] [BOT] 💾 Added channel posting: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 → location channel (2 total channels)
[2026-02-01T17:32:18.356Z] [BOT] 💾 BEFORE MERGE: 2073 jobs in memory (cached)
[2026-02-01T17:32:18.391Z] [BOT] ✅ Loaded V2 database: 2073 jobs
💾 DISK STATE: 2073 jobs on disk
[2026-02-01T17:32:18.391Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2073
[2026-02-01T17:32:18.395Z] [BOT] 🔀 Deep merged: Software Engineer – New Grad - Infrastructure @ ORG_f56b7436 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:32:18.395Z] [BOT] 💾 AFTER MERGE: 2073 jobs (merged disk + memory)
[2026-02-01T17:32:18.396Z] [BOT] ✅ No jobs to archive (all 2073 jobs within 7-day window)
[2026-02-01T17:32:18.500Z] [BOT] 💾 Saved posted_jobs.json: 2073 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:20.002Z] [BOT] 📍 [ROUTING] "Software Engineer, Applications and Customer Solutions" @ ORG_cb767a2d
[2026-02-01T17:32:20.003Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:20.203Z] [BOT] ✅ Posted message: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d in #💻・tech-jobs
  ✅ Industry: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d
[2026-02-01T17:32:20.204Z] [BOT] 💾 Added channel posting: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d → category channel (1 total channels)
[2026-02-01T17:32:20.204Z] [BOT] 💾 BEFORE MERGE: 2074 jobs in memory (cached)
[2026-02-01T17:32:20.240Z] [BOT] ✅ Loaded V2 database: 2073 jobs
💾 DISK STATE: 2073 jobs on disk
[2026-02-01T17:32:20.240Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2074
[2026-02-01T17:32:20.244Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:20.244Z] [BOT] 💾 AFTER MERGE: 2074 jobs (merged disk + memory)
[2026-02-01T17:32:20.245Z] [BOT] ✅ No jobs to archive (all 2074 jobs within 7-day window)
[2026-02-01T17:32:20.351Z] [BOT] 💾 Saved posted_jobs.json: 2074 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:22.034Z] [BOT] ✅ Posted message: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:32:22.034Z] [BOT] 💾 Added channel posting: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d → location channel (2 total channels)
[2026-02-01T17:32:22.034Z] [BOT] 💾 BEFORE MERGE: 2074 jobs in memory (cached)
[2026-02-01T17:32:22.070Z] [BOT] ✅ Loaded V2 database: 2074 jobs
💾 DISK STATE: 2074 jobs on disk
[2026-02-01T17:32:22.070Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2074
[2026-02-01T17:32:22.074Z] [BOT] 🔀 Deep merged: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:32:22.074Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2074 jobs (merged disk + memory)
[2026-02-01T17:32:22.075Z] [BOT] ✅ No jobs to archive (all 2074 jobs within 7-day window)
[2026-02-01T17:32:22.181Z] [BOT] 💾 Saved posted_jobs.json: 2074 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:23.683Z] [BOT] 📍 [ROUTING] "Software Engineer - Product" @ ORG_4f749de7
   Category: TECH (matched: "software")
[2026-02-01T17:32:23.683Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:23.933Z] [BOT] ✅ Posted message: Software Engineer - Product @ ORG_4f749de7 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Product @ ORG_4f749de7
[2026-02-01T17:32:23.934Z] [BOT] 💾 Added channel posting: Software Engineer - Product @ ORG_4f749de7 → category channel (1 total channels)
[2026-02-01T17:32:23.934Z] [BOT] 💾 BEFORE MERGE: 2075 jobs in memory (cached)
[2026-02-01T17:32:23.970Z] [BOT] ✅ Loaded V2 database: 2074 jobs
💾 DISK STATE: 2074 jobs on disk
[2026-02-01T17:32:23.970Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2075
[2026-02-01T17:32:23.974Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:23.974Z] [BOT] 💾 AFTER MERGE: 2075 jobs (merged disk + memory)
[2026-02-01T17:32:23.975Z] [BOT] ✅ No jobs to archive (all 2075 jobs within 7-day window)
[2026-02-01T17:32:24.083Z] [BOT] 💾 Saved posted_jobs.json: 2075 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:25.836Z] [BOT] ✅ Posted message: Software Engineer - Product @ ORG_4f749de7 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:32:25.837Z] [BOT] 💾 Added channel posting: Software Engineer - Product @ ORG_4f749de7 → location channel (2 total channels)
[2026-02-01T17:32:25.837Z] [BOT] 💾 BEFORE MERGE: 2075 jobs in memory (cached)
[2026-02-01T17:32:25.871Z] [BOT] ✅ Loaded V2 database: 2075 jobs
💾 DISK STATE: 2075 jobs on disk
[2026-02-01T17:32:25.871Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2075
[2026-02-01T17:32:25.875Z] [BOT] 🔀 Deep merged: Software Engineer - Product @ ORG_4f749de7 (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:32:25.875Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2075 jobs (merged disk + memory)
[2026-02-01T17:32:25.877Z] [BOT] ✅ No jobs to archive (all 2075 jobs within 7-day window)
[2026-02-01T17:32:25.973Z] [BOT] 💾 Saved posted_jobs.json: 2075 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:27.476Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (USA)" @ supabase
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-01T17:32:28.085Z] [BOT] ✅ Posted message: Enterprise Account Executive (USA) @ supabase in #💻・tech-jobs
  ✅ Industry: Enterprise Account Executive (USA) @ supabase
[2026-02-01T17:32:28.087Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (USA) @ supabase → category channel (1 total channels)
[2026-02-01T17:32:28.087Z] [BOT] 💾 BEFORE MERGE: 2076 jobs in memory (cached)
[2026-02-01T17:32:28.122Z] [BOT] ✅ Loaded V2 database: 2075 jobs
💾 DISK STATE: 2075 jobs on disk
[2026-02-01T17:32:28.123Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2076
[2026-02-01T17:32:28.130Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:28.131Z] [BOT] 💾 AFTER MERGE: 2076 jobs (merged disk + memory)
[2026-02-01T17:32:28.132Z] [BOT] ✅ No jobs to archive (all 2076 jobs within 7-day window)
[2026-02-01T17:32:28.234Z] [BOT] 💾 Saved posted_jobs.json: 2076 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:29.954Z] [BOT] ✅ Posted message: Enterprise Account Executive (USA) @ supabase in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-01T17:32:29.954Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (USA) @ supabase → location channel (2 total channels)
[2026-02-01T17:32:29.954Z] [BOT] 💾 BEFORE MERGE: 2076 jobs in memory (cached)
[2026-02-01T17:32:29.990Z] [BOT] ✅ Loaded V2 database: 2076 jobs
💾 DISK STATE: 2076 jobs on disk
[2026-02-01T17:32:29.990Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2076
[2026-02-01T17:32:29.998Z] [BOT] 🔀 Deep merged: Enterprise Account Executive (USA) @ supabase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-01T17:32:29.999Z] [BOT] 💾 AFTER MERGE: 2076 jobs (merged disk + memory)
[2026-02-01T17:32:30.000Z] [BOT] ✅ No jobs to archive (all 2076 jobs within 7-day window)
[2026-02-01T17:32:30.104Z] [BOT] 💾 Saved posted_jobs.json: 2076 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:34.606Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-01T17:32:34.607Z] [BOT] 📍 [ROUTING] "Robot Operator" @ ORG_830213f1 AI
   Category: AI (matched: "machine learning")
[2026-02-01T17:32:34.607Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-02-01T17:32:34.921Z] [BOT] ✅ Posted message: Robot Operator @ ORG_830213f1 AI in #🤖・ai-jobs
[2026-02-01T17:32:34.921Z] [BOT] ✅ Industry: Robot Operator @ ORG_830213f1 AI
[2026-02-01T17:32:34.922Z] [BOT] 💾 Added channel posting: Robot Operator @ ORG_830213f1 AI → category channel (1 total channels)
[2026-02-01T17:32:34.922Z] [BOT] 💾 BEFORE MERGE: 2077 jobs in memory (cached)
[2026-02-01T17:32:34.957Z] [BOT] ✅ Loaded V2 database: 2076 jobs
💾 DISK STATE: 2076 jobs on disk
[2026-02-01T17:32:34.958Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2077
[2026-02-01T17:32:34.961Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:34.961Z] [BOT] 💾 AFTER MERGE: 2077 jobs (merged disk + memory)
[2026-02-01T17:32:34.962Z] [BOT] ✅ No jobs to archive (all 2077 jobs within 7-day window)
[2026-02-01T17:32:35.086Z] [BOT] 💾 Saved posted_jobs.json: 2077 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:36.791Z] [BOT] ✅ Posted message: Robot Operator @ ORG_830213f1 AI in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-01T17:32:36.791Z] [BOT] 💾 Added channel posting: Robot Operator @ ORG_830213f1 AI → location channel (2 total channels)
[2026-02-01T17:32:36.791Z] [BOT] 💾 BEFORE MERGE: 2077 jobs in memory (cached)
[2026-02-01T17:32:36.826Z] [BOT] ✅ Loaded V2 database: 2077 jobs
💾 DISK STATE: 2077 jobs on disk
[2026-02-01T17:32:36.826Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2077
[2026-02-01T17:32:36.830Z] [BOT] 🔀 Deep merged: Robot Operator @ ORG_830213f1 AI (disk: 1 channels → merged: 2 channels)
[2026-02-01T17:32:36.830Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2077 jobs (merged disk + memory)
[2026-02-01T17:32:36.831Z] [BOT] ✅ No jobs to archive (all 2077 jobs within 7-day window)
[2026-02-01T17:32:36.925Z] [BOT] 💾 Saved posted_jobs.json: 2077 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:41.426Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-01T17:32:41.428Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "d6cc1fbe15ba39c1"
[2026-02-01T17:32:41.428Z] [BOT] ⏭️  Skipping duplicate: JID_10ea345f (posted within 7 days)
[2026-02-01T17:32:41.428Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d78b63b..." not found, but found as SHA256 "9779323fe5392932"
[2026-02-01T17:32:41.428Z] [BOT] ⏭️  Skipping duplicate: JID_90a61d75-cx_1-job-28752 (posted within 7 days)
[2026-02-01T17:32:41.429Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e9e8a670-..." not found, but found as SHA256 "31bcecf48c4e2058"
⏭️  Skipping duplicate: JID_d4c3ca28-i_r-774355-1 (posted within 7 days)
[2026-02-01T17:32:41.429Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_240dc80c..." not found, but found as SHA256 "c2b2c51e2b40b592"
⏭️  Skipping duplicate: JID_cb308957-engineer_jr_1042522 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d6458b87..." not found, but found as SHA256 "7d8673ea8dec9152"
⏭️  Skipping duplicate: JID_50485840 (posted within 7 days)
[2026-02-01T17:32:41.429Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7567aa2a..." not found, but found as SHA256 "c5247bd8e37ad65a"
[2026-02-01T17:32:41.430Z] [BOT] ⏭️  Skipping duplicate: JID_8241ed95 (posted within 7 days)
[2026-02-01T17:32:41.430Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_25844077..." not found, but found as SHA256 "68db1a97657d17d6"
⏭️  Skipping duplicate: JID_a175d828 (posted within 7 days)
[2026-02-01T17:32:41.430Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45e7aaf3..." not found, but found as SHA256 "9d9f9b05fdc380d9"
[2026-02-01T17:32:41.430Z] [BOT] ⏭️  Skipping duplicate: JID_7b6a3d64 (posted within 7 days)
[2026-02-01T17:32:41.430Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_71726d6d..." not found, but found as SHA256 "6e9336d43461ec1a"
[2026-02-01T17:32:41.430Z] [BOT] ⏭️  Skipping duplicate: JID_71726d6d (posted within 7 days)
[2026-02-01T17:32:41.431Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_38a35024-..." not found, but found as SHA256 "38d606b9e8d4942a"
[2026-02-01T17:32:41.431Z] [BOT] ⏭️  Skipping duplicate: JID_047d3e46 (posted within 7 days)
[2026-02-01T17:32:41.534Z] [BOT] ✅ Loaded pending queue: 2948 total (841 pending, 50 enriched, 2057 posted)
[2026-02-01T17:32:41.747Z] [BOT] ✅ Saved pending queue: 2948 total (841 pending, 40 enriched, 2067 posted)
[2026-02-01T17:32:41.747Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-01T17:32:41.838Z] [BOT] 📂 Loaded 12148 existing routing entries
[2026-02-01T17:32:41.977Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-01T17:32:41.978Z] [BOT] Total entries: 12158
   Timestamp: 2026-02-01T17:32:41.928Z
[2026-02-01T17:32:41.978Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_dc5dd3dc.jsonl
[2026-02-01T17:32:41.978Z] [BOT] Total attempts: 27
   Successful: 19
   Failed: 0
   Skipped: 8
[2026-02-01T17:32:41.978Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-01T17:32:41.979Z] [BOT] Last cleanup: Never
   Total posts: 19
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #📍・JID_6daed763: 5 posts
[2026-02-01T17:32:41.979Z] [BOT] 3. #🌲・JID_efdf5921: 1 posts
     4. #🌉・JID_739bbc0b: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-02-01T17:32:41.979Z] [BOT] [STATS] Channel stats saved
[2026-02-01T17:32:41.979Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2077 jobs in memory (cached)
[2026-02-01T17:32:42.022Z] [BOT] ✅ Loaded V2 database: 2077 jobs
💾 DISK STATE: 2077 jobs on disk
[2026-02-01T17:32:42.022Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2077
[2026-02-01T17:32:42.026Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-01T17:32:42.026Z] [BOT] 💾 AFTER MERGE: 2077 jobs (merged disk + memory)
[2026-02-01T17:32:42.027Z] [BOT] ✅ No jobs to archive (all 2077 jobs within 7-day window)
[2026-02-01T17:32:42.132Z] [BOT] 💾 Saved posted_jobs.json: 2077 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-01T17:32:42.133Z] [BOT] ✅ Database saved successfully
[2026-02-01T17:32:44.170Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3118) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*