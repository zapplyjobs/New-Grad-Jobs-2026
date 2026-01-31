# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T08:13:56.719Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T08:13:12.426Z] ========================================
[2026-01-31T08:13:12.428Z] Discord Bot Execution Log
[2026-01-31T08:13:12.428Z] Environment: GitHub Actions
[2026-01-31T08:13:12.428Z] Node Version: v20.20.0
[2026-01-31T08:13:12.428Z] ========================================
[2026-01-31T08:13:12.428Z] Environment Variables Check:
[2026-01-31T08:13:12.428Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T08:13:12.429Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T08:13:12.429Z] 
Multi-Channel Configuration:
[2026-01-31T08:13:12.429Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.429Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.430Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T08:13:12.430Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T08:13:12.430Z] 
Data Files Check:
[2026-01-31T08:13:12.431Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T08:13:12.461Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6115554 bytes)
[2026-01-31T08:13:12.461Z] 
========================================
[2026-01-31T08:13:12.461Z] Starting Enhanced Discord Bot...
[2026-01-31T08:13:12.461Z] ========================================
[2026-01-31T08:13:13.006Z] [BOT] ✅ Loaded V2 database: 958 jobs
[2026-01-31T08:13:13.548Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T08:13:13.548Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T08:13:13.549Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T08:13:13.659Z] [BOT] ✅ Loaded pending queue: 2959 total (1980 pending, 50 enriched, 929 posted)
[2026-01-31T08:13:13.660Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T08:13:13.660Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:13:13.661Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T08:13:13.661Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:13:13.661Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T08:13:13.661Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T08:13:13.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T08:13:13.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T08:13:13.662Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T08:13:13.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T08:13:13.663Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T08:13:13.663Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T08:13:13.663Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T08:13:13.663Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T08:13:13.663Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T08:13:13.664Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T08:13:13.664Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T08:13:13.664Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T08:13:13.664Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T08:13:13.664Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T08:13:13.672Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T08:13:13.673Z] [BOT] 🚫 Skipping blacklisted job: Strategic Program Manager at figma
[2026-01-31T08:13:13.673Z] [BOT] 🚫 Skipping blacklisted job: Manager, Figma for Education  at figma
🚫 Skipping blacklisted job: Staff Economist at brex
[2026-01-31T08:13:13.778Z] [BOT] ✅ Loaded pending queue: 2959 total (1980 pending, 50 enriched, 929 posted)
[2026-01-31T08:13:13.961Z] [BOT] ✅ Saved pending queue: 2956 total (1980 pending, 47 enriched, 929 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
[2026-01-31T08:13:13.961Z] [BOT] 📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-31T08:13:13.961Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-31T08:13:13.962Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T08:13:13.962Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T08:13:13.967Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T08:13:13.967Z] [BOT] 📍 [ROUTING] "Algorithm and Analysis Software Engineer Scientist Associate" @ ORG_9d38443e of Texas - Austin
[2026-01-31T08:13:13.967Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:13.985Z] [BOT ERROR] (node:3081) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T08:13:14.288Z] [BOT] ✅ Posted message: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
  ✅ Industry: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin
[2026-01-31T08:13:14.289Z] [BOT] 💾 Added channel posting: Algorithm and Analysis Software Engineer Scientist Associate @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-01-31T08:13:14.289Z] [BOT] 💾 BEFORE MERGE: 959 jobs in memory (cached)
[2026-01-31T08:13:14.312Z] [BOT] ✅ Loaded V2 database: 958 jobs
💾 DISK STATE: 958 jobs on disk
[2026-01-31T08:13:14.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=959
[2026-01-31T08:13:14.314Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:13:14.314Z] [BOT] 💾 AFTER MERGE: 959 jobs (merged disk + memory)
[2026-01-31T08:13:14.315Z] [BOT] ✅ No jobs to archive (all 959 jobs within 7-day window)
[2026-01-31T08:13:14.383Z] [BOT] 💾 Saved posted_jobs.json: 959 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:15.884Z] [BOT] 📍 [ROUTING] "Community Support Specialist" @ figma
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:16.060Z] [BOT] ✅ Posted message: Community Support Specialist @ figma in #💻・tech-jobs
  ✅ Industry: Community Support Specialist @ figma
[2026-01-31T08:13:16.061Z] [BOT] 💾 Added channel posting: Community Support Specialist @ figma → category channel (1 total channels)
[2026-01-31T08:13:16.061Z] [BOT] 💾 BEFORE MERGE: 960 jobs in memory (cached)
[2026-01-31T08:13:16.080Z] [BOT] ✅ Loaded V2 database: 959 jobs
💾 DISK STATE: 959 jobs on disk
[2026-01-31T08:13:16.080Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=960
[2026-01-31T08:13:16.082Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:13:16.083Z] [BOT] 💾 AFTER MERGE: 960 jobs (merged disk + memory)
[2026-01-31T08:13:16.083Z] [BOT] ✅ No jobs to archive (all 960 jobs within 7-day window)
[2026-01-31T08:13:16.145Z] [BOT] 💾 Saved posted_jobs.json: 960 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:17.646Z] [BOT] 📍 [ROUTING] "Therapist - Child & Adolescent" @ ORG_6a97f77a Behavioral Health
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:17.897Z] [BOT] ✅ Posted message: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #💻・tech-jobs
  ✅ Industry: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health
[2026-01-31T08:13:17.898Z] [BOT] 💾 Added channel posting: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health → category channel (1 total channels)
[2026-01-31T08:13:17.898Z] [BOT] 💾 BEFORE MERGE: 961 jobs in memory (cached)
[2026-01-31T08:13:17.918Z] [BOT] ✅ Loaded V2 database: 960 jobs
💾 DISK STATE: 960 jobs on disk
[2026-01-31T08:13:17.918Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=961
[2026-01-31T08:13:17.920Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 961 jobs (merged disk + memory)
[2026-01-31T08:13:17.921Z] [BOT] ✅ No jobs to archive (all 961 jobs within 7-day window)
[2026-01-31T08:13:17.982Z] [BOT] 💾 Saved posted_jobs.json: 961 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:19.787Z] [BOT] ✅ Posted message: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health in #🗽・JID_98d4f0de
[2026-01-31T08:13:19.788Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:13:19.789Z] [BOT] 💾 Added channel posting: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health → location channel (2 total channels)
💾 BEFORE MERGE: 961 jobs in memory (cached)
[2026-01-31T08:13:19.807Z] [BOT] ✅ Loaded V2 database: 961 jobs
[2026-01-31T08:13:19.807Z] [BOT] 💾 DISK STATE: 961 jobs on disk
[2026-01-31T08:13:19.807Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=961
[2026-01-31T08:13:19.809Z] [BOT] 🔀 Deep merged: Therapist - Child & Adolescent @ ORG_6a97f77a Behavioral Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:13:19.809Z] [BOT] 💾 AFTER MERGE: 961 jobs (merged disk + memory)
[2026-01-31T08:13:19.810Z] [BOT] ✅ No jobs to archive (all 961 jobs within 7-day window)
[2026-01-31T08:13:19.887Z] [BOT] 💾 Saved posted_jobs.json: 961 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:21.387Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_1954b120
   Category: TECH (matched: "software")
[2026-01-31T08:13:21.388Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:21.760Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_1954b120
[2026-01-31T08:13:21.760Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_1954b120 → category channel (1 total channels)
[2026-01-31T08:13:21.760Z] [BOT] 💾 BEFORE MERGE: 962 jobs in memory (cached)
[2026-01-31T08:13:21.786Z] [BOT] ✅ Loaded V2 database: 961 jobs
💾 DISK STATE: 961 jobs on disk
[2026-01-31T08:13:21.786Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=962
[2026-01-31T08:13:21.788Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 962 jobs (merged disk + memory)
[2026-01-31T08:13:21.789Z] [BOT] ✅ No jobs to archive (all 962 jobs within 7-day window)
[2026-01-31T08:13:21.847Z] [BOT] 💾 Saved posted_jobs.json: 962 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:23.586Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_1954b120 in #🗽・JID_98d4f0de
[2026-01-31T08:13:23.586Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:13:23.587Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_1954b120 → location channel (2 total channels)
[2026-01-31T08:13:23.587Z] [BOT] 💾 BEFORE MERGE: 962 jobs in memory (cached)
[2026-01-31T08:13:23.606Z] [BOT] ✅ Loaded V2 database: 962 jobs
💾 DISK STATE: 962 jobs on disk
[2026-01-31T08:13:23.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=962
[2026-01-31T08:13:23.608Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ ORG_1954b120 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:13:23.609Z] [BOT] 💾 AFTER MERGE: 962 jobs (merged disk + memory)
[2026-01-31T08:13:23.609Z] [BOT] ✅ No jobs to archive (all 962 jobs within 7-day window)
[2026-01-31T08:13:23.666Z] [BOT] 💾 Saved posted_jobs.json: 962 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:25.168Z] [BOT] 📍 [ROUTING] "Launch Strategy & Operations - Marketing & Comms" @ figma
   Category: TECH (matched: "product marketing")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:25.408Z] [BOT] ✅ Posted message: Launch Strategy & Operations - Marketing & Comms @ figma in #💻・tech-jobs
  ✅ Industry: Launch Strategy & Operations - Marketing & Comms @ figma
[2026-01-31T08:13:25.409Z] [BOT] 💾 Added channel posting: Launch Strategy & Operations - Marketing & Comms @ figma → category channel (1 total channels)
[2026-01-31T08:13:25.409Z] [BOT] 💾 BEFORE MERGE: 963 jobs in memory (cached)
[2026-01-31T08:13:25.429Z] [BOT] ✅ Loaded V2 database: 962 jobs
💾 DISK STATE: 962 jobs on disk
[2026-01-31T08:13:25.429Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=963
[2026-01-31T08:13:25.431Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 963 jobs (merged disk + memory)
[2026-01-31T08:13:25.432Z] [BOT] ✅ No jobs to archive (all 963 jobs within 7-day window)
[2026-01-31T08:13:25.491Z] [BOT] 💾 Saved posted_jobs.json: 963 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:26.992Z] [BOT] 📍 [ROUTING] "NASCAR Cup Track Support Engineer – Entry Level" @ ORG_cdb83ff1
[2026-01-31T08:13:26.993Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:27.255Z] [BOT] ✅ Posted message: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #💻・tech-jobs
[2026-01-31T08:13:27.255Z] [BOT] ✅ Industry: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1
[2026-01-31T08:13:27.255Z] [BOT] 💾 Added channel posting: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 → category channel (1 total channels)
[2026-01-31T08:13:27.255Z] [BOT] 💾 BEFORE MERGE: 964 jobs in memory (cached)
[2026-01-31T08:13:27.274Z] [BOT] ✅ Loaded V2 database: 963 jobs
💾 DISK STATE: 963 jobs on disk
[2026-01-31T08:13:27.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=964
[2026-01-31T08:13:27.277Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:13:27.277Z] [BOT] 💾 AFTER MERGE: 964 jobs (merged disk + memory)
[2026-01-31T08:13:27.278Z] [BOT] ✅ No jobs to archive (all 964 jobs within 7-day window)
[2026-01-31T08:13:27.339Z] [BOT] 💾 Saved posted_jobs.json: 964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:29.216Z] [BOT] ✅ Posted message: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:13:29.216Z] [BOT] 💾 Added channel posting: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 → location channel (2 total channels)
[2026-01-31T08:13:29.216Z] [BOT] 💾 BEFORE MERGE: 964 jobs in memory (cached)
[2026-01-31T08:13:29.235Z] [BOT] ✅ Loaded V2 database: 964 jobs
💾 DISK STATE: 964 jobs on disk
[2026-01-31T08:13:29.235Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=964
[2026-01-31T08:13:29.237Z] [BOT] 🔀 Deep merged: NASCAR Cup Track Support Engineer – Entry Level @ ORG_cdb83ff1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:13:29.238Z] [BOT] 💾 AFTER MERGE: 964 jobs (merged disk + memory)
[2026-01-31T08:13:29.238Z] [BOT] ✅ No jobs to archive (all 964 jobs within 7-day window)
[2026-01-31T08:13:29.306Z] [BOT] 💾 Saved posted_jobs.json: 964 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:30.807Z] [BOT] 📍 [ROUTING] "Math Major Software Developer" @ Auto-Owners Insurance
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:31.034Z] [BOT] ✅ Posted message: Math Major Software Developer @ Auto-Owners Insurance in #💻・tech-jobs
  ✅ Industry: Math Major Software Developer @ Auto-Owners Insurance
[2026-01-31T08:13:31.035Z] [BOT] 💾 Added channel posting: Math Major Software Developer @ Auto-Owners Insurance → category channel (1 total channels)
[2026-01-31T08:13:31.035Z] [BOT] 💾 BEFORE MERGE: 965 jobs in memory (cached)
[2026-01-31T08:13:31.053Z] [BOT] ✅ Loaded V2 database: 964 jobs
💾 DISK STATE: 964 jobs on disk
[2026-01-31T08:13:31.053Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=965
[2026-01-31T08:13:31.056Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 965 jobs (merged disk + memory)
[2026-01-31T08:13:31.056Z] [BOT] ✅ No jobs to archive (all 965 jobs within 7-day window)
[2026-01-31T08:13:31.115Z] [BOT] 💾 Saved posted_jobs.json: 965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:32.857Z] [BOT] ✅ Posted message: Math Major Software Developer @ Auto-Owners Insurance in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:13:32.857Z] [BOT] 💾 Added channel posting: Math Major Software Developer @ Auto-Owners Insurance → location channel (2 total channels)
[2026-01-31T08:13:32.857Z] [BOT] 💾 BEFORE MERGE: 965 jobs in memory (cached)
[2026-01-31T08:13:32.876Z] [BOT] ✅ Loaded V2 database: 965 jobs
💾 DISK STATE: 965 jobs on disk
[2026-01-31T08:13:32.877Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=965
[2026-01-31T08:13:32.879Z] [BOT] 🔀 Deep merged: Math Major Software Developer @ Auto-Owners Insurance (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:13:32.879Z] [BOT] 💾 AFTER MERGE: 965 jobs (merged disk + memory)
[2026-01-31T08:13:32.880Z] [BOT] ✅ No jobs to archive (all 965 jobs within 7-day window)
[2026-01-31T08:13:32.938Z] [BOT] 💾 Saved posted_jobs.json: 965 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:34.440Z] [BOT] 📍 [ROUTING] "Vie – Research Associate - m/f/d" @ ORG_29dc8914
[2026-01-31T08:13:34.440Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:13:34.678Z] [BOT] ✅ Posted message: Vie – Research Associate - m/f/d @ ORG_29dc8914 in #💻・tech-jobs
  ✅ Industry: Vie – Research Associate - m/f/d @ ORG_29dc8914
[2026-01-31T08:13:34.678Z] [BOT] 💾 Added channel posting: Vie – Research Associate - m/f/d @ ORG_29dc8914 → category channel (1 total channels)
[2026-01-31T08:13:34.679Z] [BOT] 💾 BEFORE MERGE: 966 jobs in memory (cached)
[2026-01-31T08:13:34.696Z] [BOT] ✅ Loaded V2 database: 965 jobs
💾 DISK STATE: 965 jobs on disk
[2026-01-31T08:13:34.697Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=966
[2026-01-31T08:13:34.699Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:13:34.699Z] [BOT] 💾 AFTER MERGE: 966 jobs (merged disk + memory)
[2026-01-31T08:13:34.700Z] [BOT] ✅ No jobs to archive (all 966 jobs within 7-day window)
[2026-01-31T08:13:34.756Z] [BOT] 💾 Saved posted_jobs.json: 966 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:36.452Z] [BOT] ✅ Posted message: Vie – Research Associate - m/f/d @ ORG_29dc8914 in #🗽・JID_98d4f0de
[2026-01-31T08:13:36.452Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:13:36.452Z] [BOT] 💾 Added channel posting: Vie – Research Associate - m/f/d @ ORG_29dc8914 → location channel (2 total channels)
[2026-01-31T08:13:36.452Z] [BOT] 💾 BEFORE MERGE: 966 jobs in memory (cached)
[2026-01-31T08:13:36.471Z] [BOT] ✅ Loaded V2 database: 966 jobs
💾 DISK STATE: 966 jobs on disk
[2026-01-31T08:13:36.472Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=966
[2026-01-31T08:13:36.474Z] [BOT] 🔀 Deep merged: Vie – Research Associate - m/f/d @ ORG_29dc8914 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:13:36.474Z] [BOT] 💾 AFTER MERGE: 966 jobs (merged disk + memory)
[2026-01-31T08:13:36.475Z] [BOT] ✅ No jobs to archive (all 966 jobs within 7-day window)
[2026-01-31T08:13:36.549Z] [BOT] 💾 Saved posted_jobs.json: 966 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:41.046Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T08:13:41.047Z] [BOT] 📍 [ROUTING] "Data Scientist  - Business Analytics" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T08:13:41.047Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T08:13:41.257Z] [BOT] ✅ Posted message: Data Scientist  - Business Analytics @ spotify in #🤖・ai-jobs
  ✅ Industry: Data Scientist  - Business Analytics @ spotify
[2026-01-31T08:13:41.258Z] [BOT] 💾 Added channel posting: Data Scientist  - Business Analytics @ spotify → category channel (1 total channels)
[2026-01-31T08:13:41.258Z] [BOT] 💾 BEFORE MERGE: 967 jobs in memory (cached)
[2026-01-31T08:13:41.276Z] [BOT] ✅ Loaded V2 database: 966 jobs
💾 DISK STATE: 966 jobs on disk
[2026-01-31T08:13:41.276Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=967
[2026-01-31T08:13:41.278Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-31T08:13:41.279Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-31T08:13:41.348Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:43.126Z] [BOT] ✅ Posted message: Data Scientist  - Business Analytics @ spotify in #🗽・JID_98d4f0de
[2026-01-31T08:13:43.127Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Data Scientist  - Business Analytics @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 967 jobs in memory (cached)
[2026-01-31T08:13:43.145Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-31T08:13:43.145Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=967
[2026-01-31T08:13:43.147Z] [BOT] 🔀 Deep merged: Data Scientist  - Business Analytics @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 967 jobs (merged disk + memory)
[2026-01-31T08:13:43.148Z] [BOT] ✅ No jobs to archive (all 967 jobs within 7-day window)
[2026-01-31T08:13:43.214Z] [BOT] 💾 Saved posted_jobs.json: 967 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:47.712Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T08:13:47.713Z] [BOT] 📍 [ROUTING] "Data Scientist, Social - PhD Early Career" @ ORG_0acab0cf
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T08:13:47.713Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T08:13:48.065Z] [BOT] ✅ Posted message: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf in #📊・JID_fb739488
  ✅ Industry: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf
[2026-01-31T08:13:48.065Z] [BOT] 💾 Added channel posting: Data Scientist, Social - PhD Early Career @ ORG_0acab0cf → category channel (1 total channels)
[2026-01-31T08:13:48.065Z] [BOT] 💾 BEFORE MERGE: 968 jobs in memory (cached)
[2026-01-31T08:13:48.090Z] [BOT] ✅ Loaded V2 database: 967 jobs
💾 DISK STATE: 967 jobs on disk
[2026-01-31T08:13:48.090Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=968
[2026-01-31T08:13:48.092Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:13:48.092Z] [BOT] 💾 AFTER MERGE: 968 jobs (merged disk + memory)
[2026-01-31T08:13:48.093Z] [BOT] ✅ No jobs to archive (all 968 jobs within 7-day window)
[2026-01-31T08:13:48.156Z] [BOT] 💾 Saved posted_jobs.json: 968 active jobs
[2026-01-31T08:13:48.160Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:52.659Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T08:13:52.660Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3878102c..." not found, but found as SHA256 "fc82e302a8985267"
⏭️  Skipping duplicate: JID_ec4e396f-associate_r_00043737 (posted within 7 days)
[2026-01-31T08:13:52.660Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_429311a8..." not found, but found as SHA256 "08ddb222c02dbd17"
[2026-01-31T08:13:52.661Z] [BOT] ⏭️  Skipping duplicate: JID_342592d0 (posted within 7 days)
[2026-01-31T08:13:52.661Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9ca40a82..." not found, but found as SHA256 "a5439bc6d2386f1c"
[2026-01-31T08:13:52.661Z] [BOT] ⏭️  Skipping duplicate: JID_48163599 (posted within 7 days)
[2026-01-31T08:13:52.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_49ddc7b1..." not found, but found as SHA256 "5d3f31eefe5de282"
⏭️  Skipping duplicate: JID_7cb5a7fa-iop_r5758 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_dc8c6a6c..." not found, but found as SHA256 "0bd6cadc5e5342bb"
⏭️  Skipping duplicate: JID_dc8c6a6c (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f88fd0c9-..." not found, but found as SHA256 "f3255cb790bc2991"
⏭️  Skipping duplicate: JID_b75ac13d-engineer_320514 (posted within 7 days)
[2026-01-31T08:13:52.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_680e5f6d..." not found, but found as SHA256 "7efc05dee83535c2"
⏭️  Skipping duplicate: JID_d6dd207d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f75fe39e..." not found, but found as SHA256 "3b8623d7ae5e706c"
⏭️  Skipping duplicate: JID_dbde4e7f-level_r43333 (posted within 7 days)
[2026-01-31T08:13:52.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a036a739..." not found, but found as SHA256 "784fce6433dbf5d8"
[2026-01-31T08:13:52.662Z] [BOT] ⏭️  Skipping duplicate: JID_e8b796c3-developer_r_1008 (posted within 7 days)
[2026-01-31T08:13:52.662Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4c92fe96..." not found, but found as SHA256 "0e8da9dbad3bc5fa"
⏭️  Skipping duplicate: JID_0c1f72ff-_r10082121 (posted within 7 days)
[2026-01-31T08:13:52.775Z] [BOT] ✅ Loaded pending queue: 2956 total (1980 pending, 47 enriched, 929 posted)
[2026-01-31T08:13:52.964Z] [BOT] ✅ Saved pending queue: 2956 total (1980 pending, 37 enriched, 939 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T08:13:52.964Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T08:13:53.050Z] [BOT] 📂 Loaded 11020 existing routing entries
[2026-01-31T08:13:53.194Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T08:13:53.194Z] [BOT] New entries: 10
   Total entries: 11030
   Timestamp: 2026-01-31T08:13:53.131Z
[2026-01-31T08:13:53.194Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T08:13:53.195Z] [BOT] Total attempts: 33
   Successful: 16
   Failed: 0
   Skipped: 17
[2026-01-31T08:13:53.195Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T08:13:53.195Z] [BOT] Last cleanup: Never
   Total posts: 16
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 8 posts
[2026-01-31T08:13:53.195Z] [BOT] 2. #🗽・JID_98d4f0de: 6 posts
     3. #🤖・ai-jobs: 1 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-31T08:13:53.195Z] [BOT] [STATS] Channel stats saved
[2026-01-31T08:13:53.195Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 968 jobs in memory (cached)
[2026-01-31T08:13:53.214Z] [BOT] ✅ Loaded V2 database: 968 jobs
💾 DISK STATE: 968 jobs on disk
[2026-01-31T08:13:53.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=968
[2026-01-31T08:13:53.216Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:13:53.216Z] [BOT] 💾 AFTER MERGE: 968 jobs (merged disk + memory)
[2026-01-31T08:13:53.217Z] [BOT] ✅ No jobs to archive (all 968 jobs within 7-day window)
[2026-01-31T08:13:53.279Z] [BOT] 💾 Saved posted_jobs.json: 968 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:13:53.279Z] [BOT] ✅ Database saved successfully
[2026-01-31T08:13:55.310Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3081) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*