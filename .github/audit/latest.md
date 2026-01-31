# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T17:15:33.044Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T17:15:00.961Z] ========================================
[2026-01-31T17:15:00.963Z] Discord Bot Execution Log
[2026-01-31T17:15:00.963Z] Environment: GitHub Actions
[2026-01-31T17:15:00.963Z] Node Version: v20.20.0
[2026-01-31T17:15:00.963Z] ========================================
[2026-01-31T17:15:00.963Z] Environment Variables Check:
[2026-01-31T17:15:00.963Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T17:15:00.963Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.963Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T17:15:00.963Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T17:15:00.964Z] 
Multi-Channel Configuration:
[2026-01-31T17:15:00.964Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T17:15:00.964Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T17:15:00.964Z] 
Data Files Check:
[2026-01-31T17:15:00.965Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T17:15:01.002Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7874864 bytes)
[2026-01-31T17:15:01.002Z] 
========================================
[2026-01-31T17:15:01.002Z] Starting Enhanced Discord Bot...
[2026-01-31T17:15:01.002Z] ========================================
[2026-01-31T17:15:01.561Z] [BOT] ✅ Loaded V2 database: 1277 jobs
[2026-01-31T17:15:02.318Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T17:15:02.318Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T17:15:02.319Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T17:15:02.434Z] [BOT] ✅ Loaded pending queue: 2946 total (1639 pending, 50 enriched, 1257 posted)
[2026-01-31T17:15:02.434Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:15:02.435Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T17:15:02.435Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:15:02.436Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T17:15:02.436Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T17:15:02.436Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T17:15:02.436Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T17:15:02.437Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T17:15:02.437Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T17:15:02.437Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T17:15:02.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T17:15:02.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T17:15:02.438Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T17:15:02.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T17:15:02.439Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T17:15:02.448Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T17:15:02.448Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T17:15:02.448Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T17:15:02.449Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-31T17:15:02.449Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T17:15:02.453Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T17:15:02.453Z] [BOT] 📍 [ROUTING] "Data Center Network Modeling Technician 4" @ ORG_8d0003a5
[2026-01-31T17:15:02.454Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:02.471Z] [BOT ERROR] (node:2773) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T17:15:02.847Z] [BOT] ✅ Posted message: Data Center Network Modeling Technician 4 @ ORG_8d0003a5 in #💻・tech-jobs
[2026-01-31T17:15:02.847Z] [BOT] ✅ Industry: Data Center Network Modeling Technician 4 @ ORG_8d0003a5
[2026-01-31T17:15:02.848Z] [BOT] 💾 Added channel posting: Data Center Network Modeling Technician 4 @ ORG_8d0003a5 → category channel (1 total channels)
[2026-01-31T17:15:02.849Z] [BOT] 💾 BEFORE MERGE: 1278 jobs in memory (cached)
[2026-01-31T17:15:02.881Z] [BOT] ✅ Loaded V2 database: 1277 jobs
💾 DISK STATE: 1277 jobs on disk
[2026-01-31T17:15:02.881Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1278
[2026-01-31T17:15:02.884Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:15:02.884Z] [BOT] 💾 AFTER MERGE: 1278 jobs (merged disk + memory)
[2026-01-31T17:15:02.885Z] [BOT] ✅ No jobs to archive (all 1278 jobs within 7-day window)
[2026-01-31T17:15:02.961Z] [BOT] 💾 Saved posted_jobs.json: 1278 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:04.463Z] [BOT] 📍 [ROUTING] "Technology, Production Support, Full-Time Analyst" @ ORG_e9591c52
   Category: TECH (default)
[2026-01-31T17:15:04.463Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:04.742Z] [BOT] ✅ Posted message: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 in #💻・tech-jobs
[2026-01-31T17:15:04.742Z] [BOT] ✅ Industry: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52
[2026-01-31T17:15:04.743Z] [BOT] 💾 Added channel posting: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
💾 BEFORE MERGE: 1279 jobs in memory (cached)
[2026-01-31T17:15:04.766Z] [BOT] ✅ Loaded V2 database: 1278 jobs
💾 DISK STATE: 1278 jobs on disk
[2026-01-31T17:15:04.766Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1279
[2026-01-31T17:15:04.769Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1279 jobs (merged disk + memory)
[2026-01-31T17:15:04.770Z] [BOT] ✅ No jobs to archive (all 1279 jobs within 7-day window)
[2026-01-31T17:15:04.846Z] [BOT] 💾 Saved posted_jobs.json: 1279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:06.630Z] [BOT] ✅ Posted message: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 in #🗽・JID_98d4f0de
[2026-01-31T17:15:06.631Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T17:15:06.631Z] [BOT] 💾 Added channel posting: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-31T17:15:06.631Z] [BOT] 💾 BEFORE MERGE: 1279 jobs in memory (cached)
[2026-01-31T17:15:06.653Z] [BOT] ✅ Loaded V2 database: 1279 jobs
💾 DISK STATE: 1279 jobs on disk
[2026-01-31T17:15:06.654Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1279
[2026-01-31T17:15:06.656Z] [BOT] 🔀 Deep merged: Technology, Production Support, Full-Time Analyst @ ORG_e9591c52 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T17:15:06.657Z] [BOT] 💾 AFTER MERGE: 1279 jobs (merged disk + memory)
[2026-01-31T17:15:06.657Z] [BOT] ✅ No jobs to archive (all 1279 jobs within 7-day window)
[2026-01-31T17:15:06.732Z] [BOT] 💾 Saved posted_jobs.json: 1279 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:08.234Z] [BOT] 📍 [ROUTING] "ServiceNow Junior Developer" @ ORG_82bce10b State University
   Category: TECH (matched: "software")
[2026-01-31T17:15:08.234Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:08.517Z] [BOT] ✅ Posted message: ServiceNow Junior Developer @ ORG_82bce10b State University in #💻・tech-jobs
[2026-01-31T17:15:08.517Z] [BOT] ✅ Industry: ServiceNow Junior Developer @ ORG_82bce10b State University
[2026-01-31T17:15:08.518Z] [BOT] 💾 Added channel posting: ServiceNow Junior Developer @ ORG_82bce10b State University → category channel (1 total channels)
[2026-01-31T17:15:08.518Z] [BOT] 💾 BEFORE MERGE: 1280 jobs in memory (cached)
[2026-01-31T17:15:08.540Z] [BOT] ✅ Loaded V2 database: 1279 jobs
💾 DISK STATE: 1279 jobs on disk
[2026-01-31T17:15:08.540Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1280
[2026-01-31T17:15:08.543Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:15:08.543Z] [BOT] 💾 AFTER MERGE: 1280 jobs (merged disk + memory)
[2026-01-31T17:15:08.543Z] [BOT] ✅ No jobs to archive (all 1280 jobs within 7-day window)
[2026-01-31T17:15:08.618Z] [BOT] 💾 Saved posted_jobs.json: 1280 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:10.119Z] [BOT] 📍 [ROUTING] "University Graduate" @ ORG_72fd3ae0
   Category: TECH (default)
[2026-01-31T17:15:10.119Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:10.335Z] [BOT] ✅ Posted message: University Graduate @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: University Graduate @ ORG_72fd3ae0
[2026-01-31T17:15:10.336Z] [BOT] 💾 Added channel posting: University Graduate @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T17:15:10.336Z] [BOT] 💾 BEFORE MERGE: 1281 jobs in memory (cached)
[2026-01-31T17:15:10.359Z] [BOT] ✅ Loaded V2 database: 1280 jobs
💾 DISK STATE: 1280 jobs on disk
[2026-01-31T17:15:10.359Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1281
[2026-01-31T17:15:10.362Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1281 jobs (merged disk + memory)
[2026-01-31T17:15:10.363Z] [BOT] ✅ No jobs to archive (all 1281 jobs within 7-day window)
[2026-01-31T17:15:10.437Z] [BOT] 💾 Saved posted_jobs.json: 1281 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:11.939Z] [BOT] 📍 [ROUTING] "Data Collection Operator 2" @ ORG_9ad28ad4 Technology
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:12.182Z] [BOT] ✅ Posted message: Data Collection Operator 2 @ ORG_9ad28ad4 Technology in #💻・tech-jobs
[2026-01-31T17:15:12.182Z] [BOT] ✅ Industry: Data Collection Operator 2 @ ORG_9ad28ad4 Technology
[2026-01-31T17:15:12.182Z] [BOT] 💾 Added channel posting: Data Collection Operator 2 @ ORG_9ad28ad4 Technology → category channel (1 total channels)
[2026-01-31T17:15:12.182Z] [BOT] 💾 BEFORE MERGE: 1282 jobs in memory (cached)
[2026-01-31T17:15:12.204Z] [BOT] ✅ Loaded V2 database: 1281 jobs
💾 DISK STATE: 1281 jobs on disk
[2026-01-31T17:15:12.205Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1282
[2026-01-31T17:15:12.207Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1282 jobs (merged disk + memory)
[2026-01-31T17:15:12.208Z] [BOT] ✅ No jobs to archive (all 1282 jobs within 7-day window)
[2026-01-31T17:15:12.282Z] [BOT] 💾 Saved posted_jobs.json: 1282 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:13.784Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_56d3dff7
[2026-01-31T17:15:13.785Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:14.098Z] [BOT] ✅ Posted message: Software Engineer @ ORG_56d3dff7 in #💻・tech-jobs
[2026-01-31T17:15:14.099Z] [BOT] ✅ Industry: Software Engineer @ ORG_56d3dff7
[2026-01-31T17:15:14.099Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_56d3dff7 → category channel (1 total channels)
[2026-01-31T17:15:14.099Z] [BOT] 💾 BEFORE MERGE: 1283 jobs in memory (cached)
[2026-01-31T17:15:14.121Z] [BOT] ✅ Loaded V2 database: 1282 jobs
💾 DISK STATE: 1282 jobs on disk
[2026-01-31T17:15:14.122Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1283
[2026-01-31T17:15:14.124Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:15:14.125Z] [BOT] 💾 AFTER MERGE: 1283 jobs (merged disk + memory)
[2026-01-31T17:15:14.125Z] [BOT] ✅ No jobs to archive (all 1283 jobs within 7-day window)
[2026-01-31T17:15:14.195Z] [BOT] 💾 Saved posted_jobs.json: 1283 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:15.697Z] [BOT] 📍 [ROUTING] "Entry Level - C Software Developer" @ mthree
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:15.926Z] [BOT] ✅ Posted message: Entry Level - C Software Developer @ mthree in #💻・tech-jobs
[2026-01-31T17:15:15.927Z] [BOT] ✅ Industry: Entry Level - C Software Developer @ mthree
[2026-01-31T17:15:15.927Z] [BOT] 💾 Added channel posting: Entry Level - C Software Developer @ mthree → category channel (1 total channels)
[2026-01-31T17:15:15.927Z] [BOT] 💾 BEFORE MERGE: 1284 jobs in memory (cached)
[2026-01-31T17:15:15.950Z] [BOT] ✅ Loaded V2 database: 1283 jobs
💾 DISK STATE: 1283 jobs on disk
[2026-01-31T17:15:15.950Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1284
[2026-01-31T17:15:15.952Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1284 jobs (merged disk + memory)
[2026-01-31T17:15:15.953Z] [BOT] ✅ No jobs to archive (all 1284 jobs within 7-day window)
[2026-01-31T17:15:16.026Z] [BOT] 💾 Saved posted_jobs.json: 1284 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:17.528Z] [BOT] 📍 [ROUTING] "Imaging Analyst" @ ORG_66279f04 National Financial
[2026-01-31T17:15:17.528Z] [BOT] Category: TECH (default)
[2026-01-31T17:15:17.528Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:15:17.872Z] [BOT] ✅ Posted message: Imaging Analyst @ ORG_66279f04 National Financial in #💻・tech-jobs
[2026-01-31T17:15:17.872Z] [BOT] ✅ Industry: Imaging Analyst @ ORG_66279f04 National Financial
[2026-01-31T17:15:17.872Z] [BOT] 💾 Added channel posting: Imaging Analyst @ ORG_66279f04 National Financial → category channel (1 total channels)
[2026-01-31T17:15:17.872Z] [BOT] 💾 BEFORE MERGE: 1285 jobs in memory (cached)
[2026-01-31T17:15:17.895Z] [BOT] ✅ Loaded V2 database: 1284 jobs
💾 DISK STATE: 1284 jobs on disk
[2026-01-31T17:15:17.895Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1285
[2026-01-31T17:15:17.898Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1285 jobs (merged disk + memory)
[2026-01-31T17:15:17.899Z] [BOT] ✅ No jobs to archive (all 1285 jobs within 7-day window)
[2026-01-31T17:15:17.969Z] [BOT] 💾 Saved posted_jobs.json: 1285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:22.471Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T17:15:22.471Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_3a8c1076
[2026-01-31T17:15:22.471Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T17:15:22.752Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_3a8c1076 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_3a8c1076
[2026-01-31T17:15:22.752Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_3a8c1076 → category channel (1 total channels)
[2026-01-31T17:15:22.752Z] [BOT] 💾 BEFORE MERGE: 1286 jobs in memory (cached)
[2026-01-31T17:15:22.775Z] [BOT] ✅ Loaded V2 database: 1285 jobs
💾 DISK STATE: 1285 jobs on disk
[2026-01-31T17:15:22.775Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1286
[2026-01-31T17:15:22.778Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1286 jobs (merged disk + memory)
[2026-01-31T17:15:22.778Z] [BOT] ✅ No jobs to archive (all 1286 jobs within 7-day window)
[2026-01-31T17:15:22.861Z] [BOT] 💾 Saved posted_jobs.json: 1286 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:24.363Z] [BOT] 📍 [ROUTING] "Data Scientist / Machine Learning Engineer" @ ORG_478e100e University
[2026-01-31T17:15:24.363Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T17:15:24.533Z] [BOT] ✅ Posted message: Data Scientist / Machine Learning Engineer @ ORG_478e100e University in #🤖・ai-jobs
  ✅ Industry: Data Scientist / Machine Learning Engineer @ ORG_478e100e University
[2026-01-31T17:15:24.534Z] [BOT] 💾 Added channel posting: Data Scientist / Machine Learning Engineer @ ORG_478e100e University → category channel (1 total channels)
[2026-01-31T17:15:24.534Z] [BOT] 💾 BEFORE MERGE: 1287 jobs in memory (cached)
[2026-01-31T17:15:24.557Z] [BOT] ✅ Loaded V2 database: 1286 jobs
💾 DISK STATE: 1286 jobs on disk
[2026-01-31T17:15:24.557Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1287
[2026-01-31T17:15:24.560Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:15:24.560Z] [BOT] 💾 AFTER MERGE: 1287 jobs (merged disk + memory)
[2026-01-31T17:15:24.561Z] [BOT] ✅ No jobs to archive (all 1287 jobs within 7-day window)
[2026-01-31T17:15:24.648Z] [BOT] 💾 Saved posted_jobs.json: 1287 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:29.147Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T17:15:29.148Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_32e11206..." not found, but found as SHA256 "fb2213cdefeca3d7"
⏭️  Skipping duplicate: JID_7628941b-iv_r0013744 (posted within 7 days)
[2026-01-31T17:15:29.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f769a57..." not found, but found as SHA256 "04b0a20bae56e7e8"
⏭️  Skipping duplicate: JID_fb11afb3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_bcdf9d12..." not found, but found as SHA256 "4c47e10541e91520"
⏭️  Skipping duplicate: JID_bcdf9d12 (posted within 7 days)
[2026-01-31T17:15:29.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "87a87ff710f97b28"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_6f2c2ecf-engineer_r161169 (posted within 7 days)
[2026-01-31T17:15:29.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b465b69d..." not found, but found as SHA256 "96672b12f64d3c6b"
⏭️  Skipping duplicate: JID_115de03e (posted within 7 days)
[2026-01-31T17:15:29.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e0d9b2be..." not found, but found as SHA256 "573b463be2d2a494"
[2026-01-31T17:15:29.150Z] [BOT] ⏭️  Skipping duplicate: JID_d80e1874 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_761f2d30..." not found, but found as SHA256 "3a9fb1777985220d"
⏭️  Skipping duplicate: JID_62eab69f-cx_1-job-2708 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2043beef..." not found, but found as SHA256 "25b89d9e39d7b1d5"
[2026-01-31T17:15:29.150Z] [BOT] ⏭️  Skipping duplicate: JID_2043beef (posted within 7 days)
[2026-01-31T17:15:29.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d39d7b94..." not found, but found as SHA256 "e0f552bb4c94af8b"
⏭️  Skipping duplicate: JID_d39d7b94 (posted within 7 days)
[2026-01-31T17:15:29.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28954219-psu_staff-job-..." not found, but found as SHA256 "736ab8bf18ccbd4b"
⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_43cf2c69-engineer_req_0000072889-2 (posted within 7 days)
[2026-01-31T17:15:29.264Z] [BOT] ✅ Loaded pending queue: 2946 total (1639 pending, 50 enriched, 1257 posted)
[2026-01-31T17:15:29.451Z] [BOT] ✅ Saved pending queue: 2946 total (1639 pending, 40 enriched, 1267 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T17:15:29.451Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T17:15:29.536Z] [BOT] 📂 Loaded 11348 existing routing entries
[2026-01-31T17:15:29.659Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11358
   Timestamp: 2026-01-31T17:15:29.613Z
[2026-01-31T17:15:29.662Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 25
   Successful: 11
   Failed: 0
   Skipped: 14
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🤖・ai-jobs: 2 posts
     3. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1287 jobs in memory (cached)
[2026-01-31T17:15:29.696Z] [BOT] ✅ Loaded V2 database: 1287 jobs
💾 DISK STATE: 1287 jobs on disk
[2026-01-31T17:15:29.697Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1287
[2026-01-31T17:15:29.701Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:15:29.701Z] [BOT] 💾 AFTER MERGE: 1287 jobs (merged disk + memory)
[2026-01-31T17:15:29.702Z] [BOT] ✅ No jobs to archive (all 1287 jobs within 7-day window)
[2026-01-31T17:15:29.780Z] [BOT] 💾 Saved posted_jobs.json: 1287 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:15:29.781Z] [BOT] ✅ Database saved successfully
[2026-01-31T17:15:31.806Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2773) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*