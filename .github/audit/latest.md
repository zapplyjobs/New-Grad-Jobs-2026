# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T18:15:14.240Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T18:14:35.051Z] ========================================
[2026-01-31T18:14:35.053Z] Discord Bot Execution Log
[2026-01-31T18:14:35.053Z] Environment: GitHub Actions
[2026-01-31T18:14:35.053Z] Node Version: v20.20.0
[2026-01-31T18:14:35.053Z] ========================================
[2026-01-31T18:14:35.053Z] Environment Variables Check:
[2026-01-31T18:14:35.054Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T18:14:35.054Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.054Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T18:14:35.054Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T18:14:35.054Z] 
Multi-Channel Configuration:
[2026-01-31T18:14:35.054Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.054Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.054Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.054Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.054Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.055Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.055Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.055Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.055Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T18:14:35.055Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T18:14:35.055Z] 
Data Files Check:
[2026-01-31T18:14:35.056Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T18:14:35.094Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8024245 bytes)
[2026-01-31T18:14:35.094Z] 
========================================
[2026-01-31T18:14:35.094Z] Starting Enhanced Discord Bot...
[2026-01-31T18:14:35.094Z] ========================================
[2026-01-31T18:14:35.672Z] [BOT] ✅ Loaded V2 database: 1317 jobs
[2026-01-31T18:14:36.132Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T18:14:36.133Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T18:14:36.133Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T18:14:36.246Z] [BOT] ✅ Loaded pending queue: 2945 total (1598 pending, 50 enriched, 1297 posted)
[2026-01-31T18:14:36.247Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T18:14:36.247Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T18:14:36.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T18:14:36.248Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T18:14:36.248Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T18:14:36.248Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T18:14:36.249Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T18:14:36.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T18:14:36.249Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T18:14:36.249Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T18:14:36.250Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T18:14:36.250Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T18:14:36.250Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T18:14:36.250Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-31T18:14:36.250Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T18:14:36.250Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T18:14:36.250Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T18:14:36.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T18:14:36.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T18:14:36.251Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T18:14:36.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T18:14:36.252Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T18:14:36.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T18:14:36.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T18:14:36.252Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T18:14:36.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T18:14:36.252Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T18:14:36.262Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T18:14:36.262Z] [BOT] 🚫 Skipping blacklisted job: Post-Doctoral Fellow at Worcester Polytechnic Institute
[2026-01-31T18:14:36.262Z] [BOT] 🚫 Skipping blacklisted job: Software Engineer/Principal Software Engineer - Aht at Northrop Grumman
[2026-01-31T18:14:36.378Z] [BOT] ✅ Loaded pending queue: 2945 total (1598 pending, 50 enriched, 1297 posted)
[2026-01-31T18:14:36.578Z] [BOT] ✅ Saved pending queue: 2943 total (1598 pending, 48 enriched, 1297 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T18:14:36.579Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T18:14:36.579Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-31T18:14:36.580Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T18:14:36.583Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T18:14:36.584Z] [BOT] 📍 [ROUTING] "Analyst Advanced Analytics" @ ORG_ae835968 media
[2026-01-31T18:14:36.584Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:14:36.601Z] [BOT ERROR] (node:3375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T18:14:37.429Z] [BOT] ✅ Posted message: Analyst Advanced Analytics @ ORG_ae835968 media in #💻・tech-jobs
[2026-01-31T18:14:37.429Z] [BOT] ✅ Industry: Analyst Advanced Analytics @ ORG_ae835968 media
[2026-01-31T18:14:37.430Z] [BOT] 💾 Added channel posting: Analyst Advanced Analytics @ ORG_ae835968 media → category channel (1 total channels)
[2026-01-31T18:14:37.431Z] [BOT] 💾 BEFORE MERGE: 1318 jobs in memory (cached)
[2026-01-31T18:14:37.453Z] [BOT] ✅ Loaded V2 database: 1317 jobs
💾 DISK STATE: 1317 jobs on disk
[2026-01-31T18:14:37.454Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1318
[2026-01-31T18:14:37.457Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1318 jobs (merged disk + memory)
[2026-01-31T18:14:37.458Z] [BOT] ✅ No jobs to archive (all 1318 jobs within 7-day window)
[2026-01-31T18:14:37.563Z] [BOT] 💾 Saved posted_jobs.json: 1318 active jobs
[2026-01-31T18:14:37.563Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:39.318Z] [BOT] ✅ Posted message: Analyst Advanced Analytics @ ORG_ae835968 media in #🗽・JID_98d4f0de
[2026-01-31T18:14:39.318Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T18:14:39.318Z] [BOT] 💾 Added channel posting: Analyst Advanced Analytics @ ORG_ae835968 media → location channel (2 total channels)
[2026-01-31T18:14:39.318Z] [BOT] 💾 BEFORE MERGE: 1318 jobs in memory (cached)
[2026-01-31T18:14:39.342Z] [BOT] ✅ Loaded V2 database: 1318 jobs
💾 DISK STATE: 1318 jobs on disk
[2026-01-31T18:14:39.342Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1318
[2026-01-31T18:14:39.345Z] [BOT] 🔀 Deep merged: Analyst Advanced Analytics @ ORG_ae835968 media (disk: 1 channels → merged: 2 channels)
[2026-01-31T18:14:39.345Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1318 jobs (merged disk + memory)
[2026-01-31T18:14:39.346Z] [BOT] ✅ No jobs to archive (all 1318 jobs within 7-day window)
[2026-01-31T18:14:39.429Z] [BOT] 💾 Saved posted_jobs.json: 1318 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:40.931Z] [BOT] 📍 [ROUTING] "Software Engineer - Infrastructure" @ nominal
[2026-01-31T18:14:40.931Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:14:41.189Z] [BOT] ✅ Posted message: Software Engineer - Infrastructure @ nominal in #💻・tech-jobs
[2026-01-31T18:14:41.190Z] [BOT] ✅ Industry: Software Engineer - Infrastructure @ nominal
[2026-01-31T18:14:41.190Z] [BOT] 💾 Added channel posting: Software Engineer - Infrastructure @ nominal → category channel (1 total channels)
[2026-01-31T18:14:41.190Z] [BOT] 💾 BEFORE MERGE: 1319 jobs in memory (cached)
[2026-01-31T18:14:41.214Z] [BOT] ✅ Loaded V2 database: 1318 jobs
💾 DISK STATE: 1318 jobs on disk
[2026-01-31T18:14:41.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1319
[2026-01-31T18:14:41.217Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:14:41.217Z] [BOT] 💾 AFTER MERGE: 1319 jobs (merged disk + memory)
[2026-01-31T18:14:41.218Z] [BOT] ✅ No jobs to archive (all 1319 jobs within 7-day window)
[2026-01-31T18:14:41.302Z] [BOT] 💾 Saved posted_jobs.json: 1319 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:43.142Z] [BOT] ✅ Posted message: Software Engineer - Infrastructure @ nominal in #🗽・JID_98d4f0de
[2026-01-31T18:14:43.142Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T18:14:43.142Z] [BOT] 💾 Added channel posting: Software Engineer - Infrastructure @ nominal → location channel (2 total channels)
[2026-01-31T18:14:43.142Z] [BOT] 💾 BEFORE MERGE: 1319 jobs in memory (cached)
[2026-01-31T18:14:43.165Z] [BOT] ✅ Loaded V2 database: 1319 jobs
💾 DISK STATE: 1319 jobs on disk
[2026-01-31T18:14:43.166Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1319
[2026-01-31T18:14:43.168Z] [BOT] 🔀 Deep merged: Software Engineer - Infrastructure @ nominal (disk: 1 channels → merged: 2 channels)
[2026-01-31T18:14:43.169Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1319 jobs (merged disk + memory)
[2026-01-31T18:14:43.169Z] [BOT] ✅ No jobs to archive (all 1319 jobs within 7-day window)
[2026-01-31T18:14:43.255Z] [BOT] 💾 Saved posted_jobs.json: 1319 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:44.759Z] [BOT] 📍 [ROUTING] "Application Engineer - IT Racks and Cabinets" @ ORG_9b9b6e44
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T18:14:44.759Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:14:44.927Z] [BOT] ✅ Posted message: Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 in #💻・tech-jobs
  ✅ Industry: Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44
[2026-01-31T18:14:44.928Z] [BOT] 💾 Added channel posting: Application Engineer - IT Racks and Cabinets @ ORG_9b9b6e44 → category channel (1 total channels)
[2026-01-31T18:14:44.928Z] [BOT] 💾 BEFORE MERGE: 1320 jobs in memory (cached)
[2026-01-31T18:14:44.965Z] [BOT] ✅ Loaded V2 database: 1319 jobs
💾 DISK STATE: 1319 jobs on disk
[2026-01-31T18:14:44.965Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1320
[2026-01-31T18:14:44.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:14:44.968Z] [BOT] 💾 AFTER MERGE: 1320 jobs (merged disk + memory)
[2026-01-31T18:14:44.969Z] [BOT] ✅ No jobs to archive (all 1320 jobs within 7-day window)
[2026-01-31T18:14:45.066Z] [BOT] 💾 Saved posted_jobs.json: 1320 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:46.564Z] [BOT] 📍 [ROUTING] "Investments Operational Support Analyst - Document/Data Management" @ ORG_fa3fca02 Life
[2026-01-31T18:14:46.564Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:14:46.833Z] [BOT] ✅ Posted message: Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life in #💻・tech-jobs
  ✅ Industry: Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life
[2026-01-31T18:14:46.833Z] [BOT] 💾 Added channel posting: Investments Operational Support Analyst - Document/Data Management @ ORG_fa3fca02 Life → category channel (1 total channels)
[2026-01-31T18:14:46.834Z] [BOT] 💾 BEFORE MERGE: 1321 jobs in memory (cached)
[2026-01-31T18:14:46.857Z] [BOT] ✅ Loaded V2 database: 1320 jobs
💾 DISK STATE: 1320 jobs on disk
[2026-01-31T18:14:46.858Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1321
[2026-01-31T18:14:46.861Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:14:46.861Z] [BOT] 💾 AFTER MERGE: 1321 jobs (merged disk + memory)
[2026-01-31T18:14:46.862Z] [BOT] ✅ No jobs to archive (all 1321 jobs within 7-day window)
[2026-01-31T18:14:46.947Z] [BOT] 💾 Saved posted_jobs.json: 1321 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:48.450Z] [BOT] 📍 [ROUTING] "Software Engineer - Inference AI/ML" @ ORG_ba7c5cf0
[2026-01-31T18:14:48.450Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:14:48.618Z] [BOT] ✅ Posted message: Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 in #💻・tech-jobs
[2026-01-31T18:14:48.619Z] [BOT] ✅ Industry: Software Engineer - Inference AI/ML @ ORG_ba7c5cf0
[2026-01-31T18:14:48.619Z] [BOT] 💾 Added channel posting: Software Engineer - Inference AI/ML @ ORG_ba7c5cf0 → category channel (1 total channels)
💾 BEFORE MERGE: 1322 jobs in memory (cached)
[2026-01-31T18:14:48.642Z] [BOT] ✅ Loaded V2 database: 1321 jobs
💾 DISK STATE: 1321 jobs on disk
[2026-01-31T18:14:48.642Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1322
[2026-01-31T18:14:48.645Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:14:48.645Z] [BOT] 💾 AFTER MERGE: 1322 jobs (merged disk + memory)
[2026-01-31T18:14:48.646Z] [BOT] ✅ No jobs to archive (all 1322 jobs within 7-day window)
[2026-01-31T18:14:48.743Z] [BOT] 💾 Saved posted_jobs.json: 1322 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:53.241Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T18:14:53.243Z] [BOT] 📍 [ROUTING] "Operations Analyst" @ ORG_ad6fabcb
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T18:14:53.459Z] [BOT] ✅ Posted message: Operations Analyst @ ORG_ad6fabcb in #💰・finance-jobs
[2026-01-31T18:14:53.460Z] [BOT] ✅ Industry: Operations Analyst @ ORG_ad6fabcb
[2026-01-31T18:14:53.460Z] [BOT] 💾 Added channel posting: Operations Analyst @ ORG_ad6fabcb → category channel (1 total channels)
[2026-01-31T18:14:53.460Z] [BOT] 💾 BEFORE MERGE: 1323 jobs in memory (cached)
[2026-01-31T18:14:53.484Z] [BOT] ✅ Loaded V2 database: 1322 jobs
💾 DISK STATE: 1322 jobs on disk
[2026-01-31T18:14:53.484Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1323
[2026-01-31T18:14:53.487Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:14:53.487Z] [BOT] 💾 AFTER MERGE: 1323 jobs (merged disk + memory)
[2026-01-31T18:14:53.490Z] [BOT] ✅ No jobs to archive (all 1323 jobs within 7-day window)
[2026-01-31T18:14:53.562Z] [BOT] 💾 Saved posted_jobs.json: 1323 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:58.064Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T18:14:58.066Z] [BOT] 📍 [ROUTING] "University Graduate - Applied Science" @ ORG_72fd3ae0
[2026-01-31T18:14:58.066Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T18:14:58.364Z] [BOT] ✅ Posted message: University Graduate - Applied Science @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-31T18:14:58.365Z] [BOT] ✅ Industry: University Graduate - Applied Science @ ORG_72fd3ae0
[2026-01-31T18:14:58.365Z] [BOT] 💾 Added channel posting: University Graduate - Applied Science @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T18:14:58.365Z] [BOT] 💾 BEFORE MERGE: 1324 jobs in memory (cached)
[2026-01-31T18:14:58.388Z] [BOT] ✅ Loaded V2 database: 1323 jobs
💾 DISK STATE: 1323 jobs on disk
[2026-01-31T18:14:58.389Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1324
[2026-01-31T18:14:58.391Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:14:58.391Z] [BOT] 💾 AFTER MERGE: 1324 jobs (merged disk + memory)
[2026-01-31T18:14:58.394Z] [BOT] ✅ No jobs to archive (all 1324 jobs within 7-day window)
[2026-01-31T18:14:58.478Z] [BOT] 💾 Saved posted_jobs.json: 1324 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:14:59.980Z] [BOT] 📍 [ROUTING] "Artificial Intelligence" @ ORG_9d38443e of Miami
[2026-01-31T18:14:59.981Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T18:15:00.450Z] [BOT] ✅ Posted message: Artificial Intelligence @ ORG_9d38443e of Miami in #🤖・ai-jobs
  ✅ Industry: Artificial Intelligence @ ORG_9d38443e of Miami
[2026-01-31T18:15:00.450Z] [BOT] 💾 Added channel posting: Artificial Intelligence @ ORG_9d38443e of Miami → category channel (1 total channels)
[2026-01-31T18:15:00.450Z] [BOT] 💾 BEFORE MERGE: 1325 jobs in memory (cached)
[2026-01-31T18:15:00.473Z] [BOT] ✅ Loaded V2 database: 1324 jobs
💾 DISK STATE: 1324 jobs on disk
[2026-01-31T18:15:00.474Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1325
[2026-01-31T18:15:00.476Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1325 jobs (merged disk + memory)
[2026-01-31T18:15:00.477Z] [BOT] ✅ No jobs to archive (all 1325 jobs within 7-day window)
[2026-01-31T18:15:00.557Z] [BOT] 💾 Saved posted_jobs.json: 1325 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:15:02.060Z] [BOT] 📍 [ROUTING] "Assistant Professor - Data Science" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-31T18:15:02.060Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T18:15:02.337Z] [BOT] ✅ Posted message: Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-31T18:15:02.337Z] [BOT] 💾 Added channel posting: Assistant Professor - Data Science @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-31T18:15:02.338Z] [BOT] 💾 BEFORE MERGE: 1326 jobs in memory (cached)
[2026-01-31T18:15:02.361Z] [BOT] ✅ Loaded V2 database: 1325 jobs
💾 DISK STATE: 1325 jobs on disk
[2026-01-31T18:15:02.361Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1326
[2026-01-31T18:15:02.363Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1326 jobs (merged disk + memory)
[2026-01-31T18:15:02.366Z] [BOT] ✅ No jobs to archive (all 1326 jobs within 7-day window)
[2026-01-31T18:15:02.448Z] [BOT] 💾 Saved posted_jobs.json: 1326 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:15:03.950Z] [BOT] 📍 [ROUTING] "Data Scientist – Early Career - Research - PhD" @ ORG_ce770667
[2026-01-31T18:15:03.950Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T18:15:04.223Z] [BOT] ✅ Posted message: Data Scientist – Early Career - Research - PhD @ ORG_ce770667 in #🤖・ai-jobs
[2026-01-31T18:15:04.223Z] [BOT] ✅ Industry: Data Scientist – Early Career - Research - PhD @ ORG_ce770667
[2026-01-31T18:15:04.224Z] [BOT] 💾 Added channel posting: Data Scientist – Early Career - Research - PhD @ ORG_ce770667 → category channel (1 total channels)
💾 BEFORE MERGE: 1327 jobs in memory (cached)
[2026-01-31T18:15:04.249Z] [BOT] ✅ Loaded V2 database: 1326 jobs
💾 DISK STATE: 1326 jobs on disk
[2026-01-31T18:15:04.249Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1327
[2026-01-31T18:15:04.251Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:15:04.251Z] [BOT] 💾 AFTER MERGE: 1327 jobs (merged disk + memory)
[2026-01-31T18:15:04.254Z] [BOT] ✅ No jobs to archive (all 1327 jobs within 7-day window)
[2026-01-31T18:15:04.334Z] [BOT] 💾 Saved posted_jobs.json: 1327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:15:06.060Z] [BOT] ✅ Posted message: Data Scientist – Early Career - Research - PhD @ ORG_ce770667 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T18:15:06.061Z] [BOT] 💾 Added channel posting: Data Scientist – Early Career - Research - PhD @ ORG_ce770667 → location channel (2 total channels)
[2026-01-31T18:15:06.061Z] [BOT] 💾 BEFORE MERGE: 1327 jobs in memory (cached)
[2026-01-31T18:15:06.085Z] [BOT] ✅ Loaded V2 database: 1327 jobs
💾 DISK STATE: 1327 jobs on disk
[2026-01-31T18:15:06.085Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1327
[2026-01-31T18:15:06.088Z] [BOT] 🔀 Deep merged: Data Scientist – Early Career - Research - PhD @ ORG_ce770667 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1327 jobs (merged disk + memory)
[2026-01-31T18:15:06.089Z] [BOT] ✅ No jobs to archive (all 1327 jobs within 7-day window)
[2026-01-31T18:15:06.171Z] [BOT] 💾 Saved posted_jobs.json: 1327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:15:10.674Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T18:15:10.675Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bca2a390..." not found, but found as SHA256 "d970c8e4bb430b59"
[2026-01-31T18:15:10.675Z] [BOT] ⏭️  Skipping duplicate: JID_3dd82faa-analytics_r0016043 (posted within 7 days)
[2026-01-31T18:15:10.676Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77b847b9..." not found, but found as SHA256 "2868812ea2a40132"
[2026-01-31T18:15:10.676Z] [BOT] ⏭️  Skipping duplicate: JID_59941b58-cx_2001-job-8088 (posted within 7 days)
[2026-01-31T18:15:10.676Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "ffffe1d133a9c5c2"
[2026-01-31T18:15:10.676Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ae2d465b-science_r160136 (posted within 7 days)
[2026-01-31T18:15:10.676Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f8160d8a..." not found, but found as SHA256 "82bb5d3c54c1eab1"
⏭️  Skipping duplicate: JID_23094729 (posted within 7 days)
[2026-01-31T18:15:10.677Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af7c2683..." not found, but found as SHA256 "39049c0ee47d97bc"
[2026-01-31T18:15:10.677Z] [BOT] ⏭️  Skipping duplicate: JID_b99e2b7b (posted within 7 days)
[2026-01-31T18:15:10.677Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3883bcc3..." not found, but found as SHA256 "e3203c589c4f5b0b"
⏭️  Skipping duplicate: JID_12e13baa-_r100092114 (posted within 7 days)
[2026-01-31T18:15:10.677Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "4f7ddf5669f5fbbd"
⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_95243951-science_r-088833-1 (posted within 7 days)
[2026-01-31T18:15:10.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ca92c961-..." not found, but found as SHA256 "04b33d6153ff08d9"
⏭️  Skipping duplicate: JID_d93d97a0-management_r15681-1 (posted within 7 days)
[2026-01-31T18:15:10.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba1fb909..." not found, but found as SHA256 "c5f61b22ef63839d"
⏭️  Skipping duplicate: JID_6bb08f4f-CH_81c7aa05 (posted within 7 days)
[2026-01-31T18:15:10.678Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b4bb08df..." not found, but found as SHA256 "4bdb50fe476e6f40"
⏭️  Skipping duplicate: JID_b4bb08df (posted within 7 days)
[2026-01-31T18:15:10.787Z] [BOT] ✅ Loaded pending queue: 2943 total (1598 pending, 48 enriched, 1297 posted)
[2026-01-31T18:15:10.973Z] [BOT] ✅ Saved pending queue: 2943 total (1598 pending, 38 enriched, 1307 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T18:15:10.973Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T18:15:11.060Z] [BOT] 📂 Loaded 11388 existing routing entries
[2026-01-31T18:15:11.207Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T18:15:11.207Z] [BOT] New entries: 10
   Total entries: 11398
   Timestamp: 2026-01-31T18:15:11.161Z
[2026-01-31T18:15:11.208Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 29
[2026-01-31T18:15:11.209Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 16
[2026-01-31T18:15:11.209Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-31T18:15:11.209Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #💰・finance-jobs: 1 posts
[2026-01-31T18:15:11.209Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1327 jobs in memory (cached)
[2026-01-31T18:15:11.235Z] [BOT] ✅ Loaded V2 database: 1327 jobs
💾 DISK STATE: 1327 jobs on disk
[2026-01-31T18:15:11.236Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1327
[2026-01-31T18:15:11.238Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:15:11.238Z] [BOT] 💾 AFTER MERGE: 1327 jobs (merged disk + memory)
[2026-01-31T18:15:11.239Z] [BOT] ✅ No jobs to archive (all 1327 jobs within 7-day window)
[2026-01-31T18:15:11.316Z] [BOT] 💾 Saved posted_jobs.json: 1327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:15:11.316Z] [BOT] ✅ Database saved successfully
[2026-01-31T18:15:13.348Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3375) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*