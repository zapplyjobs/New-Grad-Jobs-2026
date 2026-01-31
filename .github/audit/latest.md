# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T16:52:06.569Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T16:51:29.970Z] ========================================
[2026-01-31T16:51:29.972Z] Discord Bot Execution Log
[2026-01-31T16:51:29.972Z] Environment: GitHub Actions
[2026-01-31T16:51:29.972Z] Node Version: v20.20.0
[2026-01-31T16:51:29.972Z] ========================================
[2026-01-31T16:51:29.972Z] Environment Variables Check:
[2026-01-31T16:51:29.972Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T16:51:29.972Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.972Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T16:51:29.973Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T16:51:29.973Z] 
Multi-Channel Configuration:
[2026-01-31T16:51:29.973Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T16:51:29.973Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T16:51:29.973Z] 
Data Files Check:
[2026-01-31T16:51:29.974Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T16:51:30.011Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7803511 bytes)
[2026-01-31T16:51:30.011Z] 
========================================
[2026-01-31T16:51:30.011Z] Starting Enhanced Discord Bot...
[2026-01-31T16:51:30.011Z] ========================================
[2026-01-31T16:51:30.566Z] [BOT] ✅ Loaded V2 database: 1257 jobs
[2026-01-31T16:51:31.105Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T16:51:31.106Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T16:51:31.106Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T16:51:31.225Z] [BOT] ✅ Loaded pending queue: 2945 total (1658 pending, 50 enriched, 1237 posted)
[2026-01-31T16:51:31.225Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T16:51:31.226Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T16:51:31.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T16:51:31.227Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T16:51:31.227Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T16:51:31.227Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T16:51:31.227Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T16:51:31.228Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T16:51:31.228Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T16:51:31.228Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T16:51:31.229Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T16:51:31.229Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T16:51:31.229Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T16:51:31.229Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T16:51:31.229Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T16:51:31.229Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T16:51:31.230Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T16:51:31.230Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T16:51:31.230Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T16:51:31.230Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T16:51:31.231Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T16:51:31.231Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T16:51:31.240Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T16:51:31.241Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Researcher at National Renewable Energy Laboratory
[2026-01-31T16:51:31.241Z] [BOT] 🚫 Skipping blacklisted job: Senior Lidar Specialist at Parkhill
[2026-01-31T16:51:31.347Z] [BOT] ✅ Loaded pending queue: 2945 total (1658 pending, 50 enriched, 1237 posted)
[2026-01-31T16:51:31.531Z] [BOT] ✅ Saved pending queue: 2943 total (1658 pending, 48 enriched, 1237 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T16:51:31.531Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T16:51:31.531Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T16:51:31.532Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T16:51:31.532Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
[2026-01-31T16:51:31.532Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T16:51:31.535Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T16:51:31.536Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2026-01-31T16:51:31.536Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:51:31.554Z] [BOT ERROR] (node:3127) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T16:51:31.773Z] [BOT] ✅ Posted message: Software Engineer @ Q2 in #💻・tech-jobs
[2026-01-31T16:51:31.773Z] [BOT] ✅ Industry: Software Engineer @ Q2
[2026-01-31T16:51:31.774Z] [BOT] 💾 Added channel posting: Software Engineer @ Q2 → category channel (1 total channels)
[2026-01-31T16:51:31.774Z] [BOT] 💾 BEFORE MERGE: 1258 jobs in memory (cached)
[2026-01-31T16:51:31.801Z] [BOT] ✅ Loaded V2 database: 1257 jobs
💾 DISK STATE: 1257 jobs on disk
[2026-01-31T16:51:31.801Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1258
[2026-01-31T16:51:31.804Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:51:31.804Z] [BOT] 💾 AFTER MERGE: 1258 jobs (merged disk + memory)
[2026-01-31T16:51:31.805Z] [BOT] ✅ No jobs to archive (all 1258 jobs within 7-day window)
[2026-01-31T16:51:31.895Z] [BOT] 💾 Saved posted_jobs.json: 1258 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:33.399Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_a58a6490 Health
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:51:33.626Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_a58a6490 Health in #💻・tech-jobs
[2026-01-31T16:51:33.626Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_a58a6490 Health
[2026-01-31T16:51:33.627Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_a58a6490 Health → category channel (1 total channels)
[2026-01-31T16:51:33.627Z] [BOT] 💾 BEFORE MERGE: 1259 jobs in memory (cached)
[2026-01-31T16:51:33.649Z] [BOT] ✅ Loaded V2 database: 1258 jobs
[2026-01-31T16:51:33.649Z] [BOT] 💾 DISK STATE: 1258 jobs on disk
[2026-01-31T16:51:33.649Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1259
[2026-01-31T16:51:33.652Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:51:33.652Z] [BOT] 💾 AFTER MERGE: 1259 jobs (merged disk + memory)
[2026-01-31T16:51:33.653Z] [BOT] ✅ No jobs to archive (all 1259 jobs within 7-day window)
[2026-01-31T16:51:33.728Z] [BOT] 💾 Saved posted_jobs.json: 1259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:35.562Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_a58a6490 Health in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T16:51:35.563Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_a58a6490 Health → location channel (2 total channels)
[2026-01-31T16:51:35.563Z] [BOT] 💾 BEFORE MERGE: 1259 jobs in memory (cached)
[2026-01-31T16:51:35.585Z] [BOT] ✅ Loaded V2 database: 1259 jobs
💾 DISK STATE: 1259 jobs on disk
[2026-01-31T16:51:35.585Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1259
[2026-01-31T16:51:35.588Z] [BOT] 🔀 Deep merged: Associate Software Engineer @ ORG_a58a6490 Health (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1259 jobs (merged disk + memory)
[2026-01-31T16:51:35.589Z] [BOT] ✅ No jobs to archive (all 1259 jobs within 7-day window)
[2026-01-31T16:51:35.664Z] [BOT] 💾 Saved posted_jobs.json: 1259 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:37.166Z] [BOT] 📍 [ROUTING] "Software Development Engineer I" @ ORG_6c43c70a
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:51:38.807Z] [BOT] ✅ Posted message: Software Development Engineer I @ ORG_6c43c70a in #💻・tech-jobs
  ✅ Industry: Software Development Engineer I @ ORG_6c43c70a
[2026-01-31T16:51:38.807Z] [BOT] 💾 Added channel posting: Software Development Engineer I @ ORG_6c43c70a → category channel (1 total channels)
[2026-01-31T16:51:38.807Z] [BOT] 💾 BEFORE MERGE: 1260 jobs in memory (cached)
[2026-01-31T16:51:38.830Z] [BOT] ✅ Loaded V2 database: 1259 jobs
💾 DISK STATE: 1259 jobs on disk
[2026-01-31T16:51:38.830Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1260
[2026-01-31T16:51:38.832Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1260 jobs (merged disk + memory)
[2026-01-31T16:51:38.833Z] [BOT] ✅ No jobs to archive (all 1260 jobs within 7-day window)
[2026-01-31T16:51:38.923Z] [BOT] 💾 Saved posted_jobs.json: 1260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:40.759Z] [BOT] ✅ Posted message: Software Development Engineer I @ ORG_6c43c70a in #🗽・JID_98d4f0de
[2026-01-31T16:51:40.759Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T16:51:40.760Z] [BOT] 💾 Added channel posting: Software Development Engineer I @ ORG_6c43c70a → location channel (2 total channels)
[2026-01-31T16:51:40.760Z] [BOT] 💾 BEFORE MERGE: 1260 jobs in memory (cached)
[2026-01-31T16:51:40.782Z] [BOT] ✅ Loaded V2 database: 1260 jobs
💾 DISK STATE: 1260 jobs on disk
[2026-01-31T16:51:40.782Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1260
[2026-01-31T16:51:40.785Z] [BOT] 🔀 Deep merged: Software Development Engineer I @ ORG_6c43c70a (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1260 jobs (merged disk + memory)
[2026-01-31T16:51:40.786Z] [BOT] ✅ No jobs to archive (all 1260 jobs within 7-day window)
[2026-01-31T16:51:40.856Z] [BOT] 💾 Saved posted_jobs.json: 1260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:42.358Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_fa9f863b
[2026-01-31T16:51:42.359Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:51:42.515Z] [BOT] ✅ Posted message: Entry Level Software Developer @ ORG_fa9f863b in #💻・tech-jobs
[2026-01-31T16:51:42.515Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_fa9f863b
[2026-01-31T16:51:42.515Z] [BOT] 💾 Added channel posting: Entry Level Software Developer @ ORG_fa9f863b → category channel (1 total channels)
[2026-01-31T16:51:42.515Z] [BOT] 💾 BEFORE MERGE: 1261 jobs in memory (cached)
[2026-01-31T16:51:42.537Z] [BOT] ✅ Loaded V2 database: 1260 jobs
💾 DISK STATE: 1260 jobs on disk
[2026-01-31T16:51:42.538Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1261
[2026-01-31T16:51:42.540Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1261 jobs (merged disk + memory)
[2026-01-31T16:51:42.541Z] [BOT] ✅ No jobs to archive (all 1261 jobs within 7-day window)
[2026-01-31T16:51:42.628Z] [BOT] 💾 Saved posted_jobs.json: 1261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:44.129Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_f7a2cae4
[2026-01-31T16:51:44.129Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:51:44.318Z] [BOT] ✅ Posted message: Entry Level Software Developer @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-31T16:51:44.318Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_f7a2cae4
[2026-01-31T16:51:44.319Z] [BOT] 💾 Added channel posting: Entry Level Software Developer @ ORG_f7a2cae4 → category channel (1 total channels)
💾 BEFORE MERGE: 1262 jobs in memory (cached)
[2026-01-31T16:51:44.341Z] [BOT] ✅ Loaded V2 database: 1261 jobs
💾 DISK STATE: 1261 jobs on disk
[2026-01-31T16:51:44.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1262
[2026-01-31T16:51:44.344Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:51:44.344Z] [BOT] 💾 AFTER MERGE: 1262 jobs (merged disk + memory)
[2026-01-31T16:51:44.345Z] [BOT] ✅ No jobs to archive (all 1262 jobs within 7-day window)
[2026-01-31T16:51:44.417Z] [BOT] 💾 Saved posted_jobs.json: 1262 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:45.920Z] [BOT] 📍 [ROUTING] "Integration Engineer" @ ORG_f223faa9
[2026-01-31T16:51:45.920Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T16:51:46.059Z] [BOT] ✅ Posted message: Integration Engineer @ ORG_f223faa9 in #💻・tech-jobs
[2026-01-31T16:51:46.059Z] [BOT] ✅ Industry: Integration Engineer @ ORG_f223faa9
[2026-01-31T16:51:46.060Z] [BOT] 💾 Added channel posting: Integration Engineer @ ORG_f223faa9 → category channel (1 total channels)
[2026-01-31T16:51:46.060Z] [BOT] 💾 BEFORE MERGE: 1263 jobs in memory (cached)
[2026-01-31T16:51:46.082Z] [BOT] ✅ Loaded V2 database: 1262 jobs
💾 DISK STATE: 1262 jobs on disk
[2026-01-31T16:51:46.082Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1263
[2026-01-31T16:51:46.084Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1263 jobs (merged disk + memory)
[2026-01-31T16:51:46.085Z] [BOT] ✅ No jobs to archive (all 1263 jobs within 7-day window)
[2026-01-31T16:51:46.158Z] [BOT] 💾 Saved posted_jobs.json: 1263 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:50.660Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T16:51:50.661Z] [BOT] 📍 [ROUTING] "Software Engineer, Early Career" @ ORG_9505081b
[2026-01-31T16:51:50.661Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T16:51:51.068Z] [BOT] ✅ Posted message: Software Engineer, Early Career @ ORG_9505081b in #🤖・ai-jobs
[2026-01-31T16:51:51.069Z] [BOT] ✅ Industry: Software Engineer, Early Career @ ORG_9505081b
[2026-01-31T16:51:51.069Z] [BOT] 💾 Added channel posting: Software Engineer, Early Career @ ORG_9505081b → category channel (1 total channels)
[2026-01-31T16:51:51.069Z] [BOT] 💾 BEFORE MERGE: 1264 jobs in memory (cached)
[2026-01-31T16:51:51.092Z] [BOT] ✅ Loaded V2 database: 1263 jobs
💾 DISK STATE: 1263 jobs on disk
[2026-01-31T16:51:51.092Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1264
[2026-01-31T16:51:51.094Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:51:51.095Z] [BOT] 💾 AFTER MERGE: 1264 jobs (merged disk + memory)
[2026-01-31T16:51:51.095Z] [BOT] ✅ No jobs to archive (all 1264 jobs within 7-day window)
[2026-01-31T16:51:51.169Z] [BOT] 💾 Saved posted_jobs.json: 1264 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:52.672Z] [BOT] 📍 [ROUTING] "Backend Engineer, New Grad" @ ORG_9f566c74in
[2026-01-31T16:51:52.672Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T16:51:52.867Z] [BOT] ✅ Posted message: Backend Engineer, New Grad @ ORG_9f566c74in in #🤖・ai-jobs
  ✅ Industry: Backend Engineer, New Grad @ ORG_9f566c74in
[2026-01-31T16:51:52.868Z] [BOT] 💾 Added channel posting: Backend Engineer, New Grad @ ORG_9f566c74in → category channel (1 total channels)
[2026-01-31T16:51:52.868Z] [BOT] 💾 BEFORE MERGE: 1265 jobs in memory (cached)
[2026-01-31T16:51:52.890Z] [BOT] ✅ Loaded V2 database: 1264 jobs
💾 DISK STATE: 1264 jobs on disk
[2026-01-31T16:51:52.890Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1265
[2026-01-31T16:51:52.892Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:51:52.893Z] [BOT] 💾 AFTER MERGE: 1265 jobs (merged disk + memory)
[2026-01-31T16:51:52.894Z] [BOT] ✅ No jobs to archive (all 1265 jobs within 7-day window)
[2026-01-31T16:51:52.978Z] [BOT] 💾 Saved posted_jobs.json: 1265 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:54.479Z] [BOT] 📍 [ROUTING] "Software Engineer Data/AI/Intelligent Systems I (Full Time)" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
[2026-01-31T16:51:54.480Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T16:51:54.727Z] [BOT] ✅ Posted message: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 in #🤖・ai-jobs
  ✅ Industry: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28
[2026-01-31T16:51:54.728Z] [BOT] 💾 Added channel posting: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 → category channel (1 total channels)
💾 BEFORE MERGE: 1266 jobs in memory (cached)
[2026-01-31T16:51:54.750Z] [BOT] ✅ Loaded V2 database: 1265 jobs
💾 DISK STATE: 1265 jobs on disk
[2026-01-31T16:51:54.751Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1266
[2026-01-31T16:51:54.753Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:51:54.753Z] [BOT] 💾 AFTER MERGE: 1266 jobs (merged disk + memory)
[2026-01-31T16:51:54.754Z] [BOT] ✅ No jobs to archive (all 1266 jobs within 7-day window)
[2026-01-31T16:51:54.827Z] [BOT] 💾 Saved posted_jobs.json: 1266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:56.569Z] [BOT] ✅ Posted message: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 in #🗽・JID_98d4f0de
[2026-01-31T16:51:56.570Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T16:51:56.570Z] [BOT] 💾 Added channel posting: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 → location channel (2 total channels)
[2026-01-31T16:51:56.570Z] [BOT] 💾 BEFORE MERGE: 1266 jobs in memory (cached)
[2026-01-31T16:51:56.593Z] [BOT] ✅ Loaded V2 database: 1266 jobs
💾 DISK STATE: 1266 jobs on disk
[2026-01-31T16:51:56.593Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1266
[2026-01-31T16:51:56.595Z] [BOT] 🔀 Deep merged: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1266 jobs (merged disk + memory)
[2026-01-31T16:51:56.596Z] [BOT] ✅ No jobs to archive (all 1266 jobs within 7-day window)
[2026-01-31T16:51:56.667Z] [BOT] 💾 Saved posted_jobs.json: 1266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:51:58.169Z] [BOT] 📍 [ROUTING] "Physical Design Engineer - Machine Learning" @ ORG_f223faa9
[2026-01-31T16:51:58.170Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T16:51:58.332Z] [BOT] ✅ Posted message: Physical Design Engineer - Machine Learning @ ORG_f223faa9 in #🤖・ai-jobs
[2026-01-31T16:51:58.332Z] [BOT] ✅ Industry: Physical Design Engineer - Machine Learning @ ORG_f223faa9
[2026-01-31T16:51:58.332Z] [BOT] 💾 Added channel posting: Physical Design Engineer - Machine Learning @ ORG_f223faa9 → category channel (1 total channels)
[2026-01-31T16:51:58.333Z] [BOT] 💾 BEFORE MERGE: 1267 jobs in memory (cached)
[2026-01-31T16:51:58.355Z] [BOT] ✅ Loaded V2 database: 1266 jobs
💾 DISK STATE: 1266 jobs on disk
[2026-01-31T16:51:58.356Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1267
[2026-01-31T16:51:58.358Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1267 jobs (merged disk + memory)
[2026-01-31T16:51:58.359Z] [BOT] ✅ No jobs to archive (all 1267 jobs within 7-day window)
[2026-01-31T16:51:58.431Z] [BOT] 💾 Saved posted_jobs.json: 1267 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:52:02.934Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T16:52:02.935Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64a28ffa-..." not found, but found as SHA256 "b8ac9481317e09ad"
⏭️  Skipping duplicate: JID_8ed651fb-engineer_req-11821 (posted within 7 days)
[2026-01-31T16:52:02.935Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d4f97e09..." not found, but found as SHA256 "f02fcfe2a47ebf88"
[2026-01-31T16:52:02.935Z] [BOT] ⏭️  Skipping duplicate: JID_537c09ad (posted within 7 days)
[2026-01-31T16:52:02.936Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e3879a05..." not found, but found as SHA256 "17031c01473d3433"
⏭️  Skipping duplicate: JID_8bd45b92 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6e724f84-..." not found, but found as SHA256 "e2beacc5485809c9"
⏭️  Skipping duplicate: JID_febee74a (posted within 7 days)
[2026-01-31T16:52:02.936Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a7ab022b..." not found, but found as SHA256 "cc3e7607b8298d02"
⏭️  Skipping duplicate: JID_cd2f24bd (posted within 7 days)
[2026-01-31T16:52:02.936Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5a8e2a0f..." not found, but found as SHA256 "12cd9efbe7593c91"
⏭️  Skipping duplicate: JID_bb052574 (posted within 7 days)
[2026-01-31T16:52:02.937Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_33df5a48-..." not found, but found as SHA256 "b978771af65b9872"
⏭️  Skipping duplicate: JID_96e20372 (posted within 7 days)
[2026-01-31T16:52:02.937Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_20ea994e..." not found, but found as SHA256 "f789a82456a1a4fa"
⏭️  Skipping duplicate: JID_20ea994e (posted within 7 days)
[2026-01-31T16:52:02.937Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8147c65c-amentum_..." not found, but found as SHA256 "cf22995a3de73284"
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-developer_r0149243 (posted within 7 days)
[2026-01-31T16:52:02.937Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ff26c509..." not found, but found as SHA256 "f1211e78754c6a70"
[2026-01-31T16:52:02.937Z] [BOT] ⏭️  Skipping duplicate: JID_ff26c509 (posted within 7 days)
[2026-01-31T16:52:03.046Z] [BOT] ✅ Loaded pending queue: 2943 total (1658 pending, 48 enriched, 1237 posted)
[2026-01-31T16:52:03.235Z] [BOT] ✅ Saved pending queue: 2943 total (1658 pending, 38 enriched, 1247 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T16:52:03.235Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T16:52:03.325Z] [BOT] 📂 Loaded 11328 existing routing entries
[2026-01-31T16:52:03.471Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T16:52:03.471Z] [BOT] New entries: 10
   Total entries: 11338
   Timestamp: 2026-01-31T16:52:03.409Z
[2026-01-31T16:52:03.472Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T16:52:03.472Z] [BOT] Total attempts: 29
   Successful: 13
   Failed: 0
   Skipped: 16
[2026-01-31T16:52:03.472Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T16:52:03.472Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-31T16:52:03.472Z] [BOT] 3. #🗽・JID_98d4f0de: 3 posts
[2026-01-31T16:52:03.472Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1267 jobs in memory (cached)
[2026-01-31T16:52:03.496Z] [BOT] ✅ Loaded V2 database: 1267 jobs
💾 DISK STATE: 1267 jobs on disk
[2026-01-31T16:52:03.496Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1267
[2026-01-31T16:52:03.498Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T16:52:03.498Z] [BOT] 💾 AFTER MERGE: 1267 jobs (merged disk + memory)
[2026-01-31T16:52:03.499Z] [BOT] ✅ No jobs to archive (all 1267 jobs within 7-day window)
[2026-01-31T16:52:03.575Z] [BOT] 💾 Saved posted_jobs.json: 1267 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T16:52:03.575Z] [BOT] ✅ Database saved successfully
[2026-01-31T16:52:05.606Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3127) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*