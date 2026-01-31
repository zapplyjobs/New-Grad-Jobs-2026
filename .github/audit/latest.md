# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T22:13:24.621Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T22:12:44.558Z] ========================================
[2026-01-31T22:12:44.560Z] Discord Bot Execution Log
[2026-01-31T22:12:44.560Z] Environment: GitHub Actions
[2026-01-31T22:12:44.560Z] Node Version: v20.20.0
[2026-01-31T22:12:44.560Z] ========================================
[2026-01-31T22:12:44.560Z] Environment Variables Check:
[2026-01-31T22:12:44.560Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T22:12:44.560Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.560Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T22:12:44.560Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T22:12:44.560Z] 
Multi-Channel Configuration:
[2026-01-31T22:12:44.560Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T22:12:44.561Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T22:12:44.561Z] 
Data Files Check:
[2026-01-31T22:12:44.562Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T22:12:44.608Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8428230 bytes)
[2026-01-31T22:12:44.608Z] 
========================================
[2026-01-31T22:12:44.608Z] Starting Enhanced Discord Bot...
[2026-01-31T22:12:44.608Z] ========================================
[2026-01-31T22:12:45.182Z] [BOT] ✅ Loaded V2 database: 1477 jobs
[2026-01-31T22:12:45.695Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T22:12:45.696Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T22:12:45.696Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T22:12:45.814Z] [BOT] ✅ Loaded pending queue: 2951 total (1444 pending, 50 enriched, 1457 posted)
[2026-01-31T22:12:45.814Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T22:12:45.815Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T22:12:45.815Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T22:12:45.815Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T22:12:45.816Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T22:12:45.816Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T22:12:45.816Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T22:12:45.817Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T22:12:45.817Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T22:12:45.817Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T22:12:45.818Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T22:12:45.818Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T22:12:45.818Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T22:12:45.818Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T22:12:45.818Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T22:12:45.818Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T22:12:45.818Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T22:12:45.819Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T22:12:45.819Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T22:12:45.819Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T22:12:45.819Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T22:12:45.819Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T22:12:45.819Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T22:12:45.820Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T22:12:45.820Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T22:12:45.829Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T22:12:45.830Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist at Oracle
[2026-01-31T22:12:45.830Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Back End at Archer
[2026-01-31T22:12:45.959Z] [BOT] ✅ Loaded pending queue: 2951 total (1444 pending, 50 enriched, 1457 posted)
[2026-01-31T22:12:46.151Z] [BOT] ✅ Saved pending queue: 2949 total (1444 pending, 48 enriched, 1457 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-31T22:12:46.151Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T22:12:46.152Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-31T22:12:46.153Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T22:12:46.156Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T22:12:46.157Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_29bc579d
[2026-01-31T22:12:46.157Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:12:46.174Z] [BOT ERROR] (node:2951) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T22:12:46.413Z] [BOT] ✅ Posted message: Software Engineer @ ORG_29bc579d in #🤖・ai-jobs
  ✅ Industry: Software Engineer @ ORG_29bc579d
[2026-01-31T22:12:46.414Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_29bc579d → category channel (1 total channels)
[2026-01-31T22:12:46.415Z] [BOT] 💾 BEFORE MERGE: 1478 jobs in memory (cached)
[2026-01-31T22:12:46.439Z] [BOT] ✅ Loaded V2 database: 1477 jobs
💾 DISK STATE: 1477 jobs on disk
[2026-01-31T22:12:46.439Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1478
[2026-01-31T22:12:46.445Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:12:46.445Z] [BOT] 💾 AFTER MERGE: 1478 jobs (merged disk + memory)
[2026-01-31T22:12:46.451Z] [BOT] ✅ No jobs to archive (all 1478 jobs within 7-day window)
[2026-01-31T22:12:46.540Z] [BOT] 💾 Saved posted_jobs.json: 1478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:12:48.043Z] [BOT] 📍 [ROUTING] "R&D Software Engineer" @ ORG_64dba1b4
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T22:12:48.043Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T22:12:48.259Z] [BOT] ✅ Posted message: R&D Software Engineer @ ORG_64dba1b4 in #🤖・ai-jobs
  ✅ Industry: R&D Software Engineer @ ORG_64dba1b4
[2026-01-31T22:12:48.260Z] [BOT] 💾 Added channel posting: R&D Software Engineer @ ORG_64dba1b4 → category channel (1 total channels)
[2026-01-31T22:12:48.260Z] [BOT] 💾 BEFORE MERGE: 1479 jobs in memory (cached)
[2026-01-31T22:12:48.285Z] [BOT] ✅ Loaded V2 database: 1478 jobs
💾 DISK STATE: 1478 jobs on disk
[2026-01-31T22:12:48.285Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1479
[2026-01-31T22:12:48.291Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:12:48.291Z] [BOT] 💾 AFTER MERGE: 1479 jobs (merged disk + memory)
[2026-01-31T22:12:48.296Z] [BOT] ✅ No jobs to archive (all 1479 jobs within 7-day window)
[2026-01-31T22:12:48.380Z] [BOT] 💾 Saved posted_jobs.json: 1479 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:12:49.882Z] [BOT] 📍 [ROUTING] "Data Science Graduate" @ ORG_a5257743 Packard Enterprise
   Category: AI (matched: "machine learning")
[2026-01-31T22:12:49.883Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T22:12:50.118Z] [BOT] ✅ Posted message: Data Science Graduate @ ORG_a5257743 Packard Enterprise in #🤖・ai-jobs
[2026-01-31T22:12:50.118Z] [BOT] ✅ Industry: Data Science Graduate @ ORG_a5257743 Packard Enterprise
[2026-01-31T22:12:50.119Z] [BOT] 💾 Added channel posting: Data Science Graduate @ ORG_a5257743 Packard Enterprise → category channel (1 total channels)
[2026-01-31T22:12:50.119Z] [BOT] 💾 BEFORE MERGE: 1480 jobs in memory (cached)
[2026-01-31T22:12:50.144Z] [BOT] ✅ Loaded V2 database: 1479 jobs
💾 DISK STATE: 1479 jobs on disk
[2026-01-31T22:12:50.144Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1480
[2026-01-31T22:12:50.150Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:12:50.150Z] [BOT] 💾 AFTER MERGE: 1480 jobs (merged disk + memory)
[2026-01-31T22:12:50.155Z] [BOT] ✅ No jobs to archive (all 1480 jobs within 7-day window)
[2026-01-31T22:12:50.242Z] [BOT] 💾 Saved posted_jobs.json: 1480 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:12:54.745Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T22:12:54.747Z] [BOT] 📍 [ROUTING] "Associate Image Processing Engineer" @ L3Harris Technologies
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:12:55.175Z] [BOT] ✅ Posted message: Associate Image Processing Engineer @ L3Harris Technologies in #💻・tech-jobs
  ✅ Industry: Associate Image Processing Engineer @ L3Harris Technologies
[2026-01-31T22:12:55.176Z] [BOT] 💾 Added channel posting: Associate Image Processing Engineer @ L3Harris Technologies → category channel (1 total channels)
💾 BEFORE MERGE: 1481 jobs in memory (cached)
[2026-01-31T22:12:55.201Z] [BOT] ✅ Loaded V2 database: 1480 jobs
💾 DISK STATE: 1480 jobs on disk
[2026-01-31T22:12:55.201Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1481
[2026-01-31T22:12:55.208Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1481 jobs (merged disk + memory)
[2026-01-31T22:12:55.209Z] [BOT] ✅ No jobs to archive (all 1481 jobs within 7-day window)
[2026-01-31T22:12:55.290Z] [BOT] 💾 Saved posted_jobs.json: 1481 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:12:56.793Z] [BOT] 📍 [ROUTING] "Entry Level Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
[2026-01-31T22:12:56.793Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:12:57.093Z] [BOT] ✅ Posted message: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・tech-jobs
[2026-01-31T22:12:57.093Z] [BOT] ✅ Industry: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2026-01-31T22:12:57.094Z] [BOT] 💾 Added channel posting: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies → category channel (1 total channels)
[2026-01-31T22:12:57.094Z] [BOT] 💾 BEFORE MERGE: 1482 jobs in memory (cached)
[2026-01-31T22:12:57.118Z] [BOT] ✅ Loaded V2 database: 1481 jobs
💾 DISK STATE: 1481 jobs on disk
[2026-01-31T22:12:57.119Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1482
[2026-01-31T22:12:57.127Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:12:57.128Z] [BOT] 💾 AFTER MERGE: 1482 jobs (merged disk + memory)
[2026-01-31T22:12:57.128Z] [BOT] ✅ No jobs to archive (all 1482 jobs within 7-day window)
[2026-01-31T22:12:57.215Z] [BOT] 💾 Saved posted_jobs.json: 1482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:12:59.047Z] [BOT] ✅ Posted message: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🏠・JID_ead674af
[2026-01-31T22:12:59.047Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T22:12:59.047Z] [BOT] 💾 Added channel posting: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies → location channel (2 total channels)
[2026-01-31T22:12:59.048Z] [BOT] 💾 BEFORE MERGE: 1482 jobs in memory (cached)
[2026-01-31T22:12:59.073Z] [BOT] ✅ Loaded V2 database: 1482 jobs
💾 DISK STATE: 1482 jobs on disk
[2026-01-31T22:12:59.073Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1482
[2026-01-31T22:12:59.080Z] [BOT] 🔀 Deep merged: Entry Level Specialist - AI Trainer @ ORG_4ee447c5 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T22:12:59.080Z] [BOT] 💾 AFTER MERGE: 1482 jobs (merged disk + memory)
[2026-01-31T22:12:59.082Z] [BOT] ✅ No jobs to archive (all 1482 jobs within 7-day window)
[2026-01-31T22:12:59.164Z] [BOT] 💾 Saved posted_jobs.json: 1482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:00.667Z] [BOT] 📍 [ROUTING] "Software Engineer - 2026 start dates - In person" @ ORG_b6cb1069
[2026-01-31T22:13:00.667Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:13:01.055Z] [BOT] ✅ Posted message: Software Engineer - 2026 start dates - In person @ ORG_b6cb1069 in #💻・tech-jobs
[2026-01-31T22:13:01.055Z] [BOT] ✅ Industry: Software Engineer - 2026 start dates - In person @ ORG_b6cb1069
[2026-01-31T22:13:01.055Z] [BOT] 💾 Added channel posting: Software Engineer - 2026 start dates - In person @ ORG_b6cb1069 → category channel (1 total channels)
[2026-01-31T22:13:01.056Z] [BOT] 💾 BEFORE MERGE: 1483 jobs in memory (cached)
[2026-01-31T22:13:01.081Z] [BOT] ✅ Loaded V2 database: 1482 jobs
💾 DISK STATE: 1482 jobs on disk
[2026-01-31T22:13:01.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1483
[2026-01-31T22:13:01.091Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:13:01.091Z] [BOT] 💾 AFTER MERGE: 1483 jobs (merged disk + memory)
[2026-01-31T22:13:01.092Z] [BOT] ✅ No jobs to archive (all 1483 jobs within 7-day window)
[2026-01-31T22:13:01.175Z] [BOT] 💾 Saved posted_jobs.json: 1483 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:02.678Z] [BOT] 📍 [ROUTING] "Android Engineer 1 - Growth" @ ORG_3acb0a4a
[2026-01-31T22:13:02.678Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:13:02.945Z] [BOT] ✅ Posted message: Android Engineer 1 - Growth @ ORG_3acb0a4a in #💻・tech-jobs
  ✅ Industry: Android Engineer 1 - Growth @ ORG_3acb0a4a
[2026-01-31T22:13:02.946Z] [BOT] 💾 Added channel posting: Android Engineer 1 - Growth @ ORG_3acb0a4a → category channel (1 total channels)
[2026-01-31T22:13:02.946Z] [BOT] 💾 BEFORE MERGE: 1484 jobs in memory (cached)
[2026-01-31T22:13:02.971Z] [BOT] ✅ Loaded V2 database: 1483 jobs
💾 DISK STATE: 1483 jobs on disk
[2026-01-31T22:13:02.971Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1484
[2026-01-31T22:13:02.978Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1484 jobs (merged disk + memory)
[2026-01-31T22:13:02.979Z] [BOT] ✅ No jobs to archive (all 1484 jobs within 7-day window)
[2026-01-31T22:13:03.064Z] [BOT] 💾 Saved posted_jobs.json: 1484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:04.566Z] [BOT] 📍 [ROUTING] "Field Service Tech - Farmington" @ ORG_3aa5abc7 Games
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T22:13:04.796Z] [BOT] ✅ Posted message: Field Service Tech - Farmington @ ORG_3aa5abc7 Games in #💻・tech-jobs
  ✅ Industry: Field Service Tech - Farmington @ ORG_3aa5abc7 Games
[2026-01-31T22:13:04.796Z] [BOT] 💾 Added channel posting: Field Service Tech - Farmington @ ORG_3aa5abc7 Games → category channel (1 total channels)
[2026-01-31T22:13:04.797Z] [BOT] 💾 BEFORE MERGE: 1485 jobs in memory (cached)
[2026-01-31T22:13:04.821Z] [BOT] ✅ Loaded V2 database: 1484 jobs
💾 DISK STATE: 1484 jobs on disk
[2026-01-31T22:13:04.822Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1485
[2026-01-31T22:13:04.832Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:13:04.832Z] [BOT] 💾 AFTER MERGE: 1485 jobs (merged disk + memory)
[2026-01-31T22:13:04.833Z] [BOT] ✅ No jobs to archive (all 1485 jobs within 7-day window)
[2026-01-31T22:13:04.934Z] [BOT] 💾 Saved posted_jobs.json: 1485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:09.431Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T22:13:09.432Z] [BOT] 📍 [ROUTING] "Healthcare Analyst" @ ORG_a212407d Health Care
[2026-01-31T22:13:09.432Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T22:13:09.846Z] [BOT] ✅ Posted message: Healthcare Analyst @ ORG_a212407d Health Care in #📊・JID_fb739488
[2026-01-31T22:13:09.847Z] [BOT] ✅ Industry: Healthcare Analyst @ ORG_a212407d Health Care
[2026-01-31T22:13:09.847Z] [BOT] 💾 Added channel posting: Healthcare Analyst @ ORG_a212407d Health Care → category channel (1 total channels)
[2026-01-31T22:13:09.847Z] [BOT] 💾 BEFORE MERGE: 1486 jobs in memory (cached)
[2026-01-31T22:13:09.871Z] [BOT] ✅ Loaded V2 database: 1485 jobs
💾 DISK STATE: 1485 jobs on disk
[2026-01-31T22:13:09.875Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1486
[2026-01-31T22:13:09.880Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:13:09.880Z] [BOT] 💾 AFTER MERGE: 1486 jobs (merged disk + memory)
[2026-01-31T22:13:09.881Z] [BOT] ✅ No jobs to archive (all 1486 jobs within 7-day window)
[2026-01-31T22:13:09.966Z] [BOT] 💾 Saved posted_jobs.json: 1486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:11.656Z] [BOT] ✅ Posted message: Healthcare Analyst @ ORG_a212407d Health Care in #🗽・JID_98d4f0de
[2026-01-31T22:13:11.657Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T22:13:11.657Z] [BOT] 💾 Added channel posting: Healthcare Analyst @ ORG_a212407d Health Care → location channel (2 total channels)
[2026-01-31T22:13:11.657Z] [BOT] 💾 BEFORE MERGE: 1486 jobs in memory (cached)
[2026-01-31T22:13:11.682Z] [BOT] ✅ Loaded V2 database: 1486 jobs
💾 DISK STATE: 1486 jobs on disk
[2026-01-31T22:13:11.682Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1486
[2026-01-31T22:13:11.689Z] [BOT] 🔀 Deep merged: Healthcare Analyst @ ORG_a212407d Health Care (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T22:13:11.689Z] [BOT] 💾 AFTER MERGE: 1486 jobs (merged disk + memory)
[2026-01-31T22:13:11.691Z] [BOT] ✅ No jobs to archive (all 1486 jobs within 7-day window)
[2026-01-31T22:13:11.771Z] [BOT] 💾 Saved posted_jobs.json: 1486 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:13.272Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_8af17c2e
[2026-01-31T22:13:13.272Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T22:13:13.432Z] [BOT] ✅ Posted message: Data Scientist @ ORG_8af17c2e in #📊・JID_fb739488
[2026-01-31T22:13:13.432Z] [BOT] ✅ Industry: Data Scientist @ ORG_8af17c2e
[2026-01-31T22:13:13.433Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_8af17c2e → category channel (1 total channels)
[2026-01-31T22:13:13.433Z] [BOT] 💾 BEFORE MERGE: 1487 jobs in memory (cached)
[2026-01-31T22:13:13.457Z] [BOT] ✅ Loaded V2 database: 1486 jobs
💾 DISK STATE: 1486 jobs on disk
[2026-01-31T22:13:13.458Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1487
[2026-01-31T22:13:13.464Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:13:13.464Z] [BOT] 💾 AFTER MERGE: 1487 jobs (merged disk + memory)
[2026-01-31T22:13:13.465Z] [BOT] ✅ No jobs to archive (all 1487 jobs within 7-day window)
[2026-01-31T22:13:13.549Z] [BOT] 💾 Saved posted_jobs.json: 1487 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:16.327Z] [BOT] ✅ Posted message: Data Scientist @ ORG_8af17c2e in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T22:13:16.327Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_8af17c2e → location channel (2 total channels)
💾 BEFORE MERGE: 1487 jobs in memory (cached)
[2026-01-31T22:13:16.353Z] [BOT] ✅ Loaded V2 database: 1487 jobs
💾 DISK STATE: 1487 jobs on disk
[2026-01-31T22:13:16.353Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1487
[2026-01-31T22:13:16.361Z] [BOT] 🔀 Deep merged: Data Scientist @ ORG_8af17c2e (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T22:13:16.361Z] [BOT] 💾 AFTER MERGE: 1487 jobs (merged disk + memory)
[2026-01-31T22:13:16.362Z] [BOT] ✅ No jobs to archive (all 1487 jobs within 7-day window)
[2026-01-31T22:13:16.447Z] [BOT] 💾 Saved posted_jobs.json: 1487 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T22:13:20.948Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T22:13:20.949Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_006bb8bf..." not found, but found as SHA256 "ff2b362004ef056b"
⏭️  Skipping duplicate: JID_16c06c08 (posted within 7 days)
[2026-01-31T22:13:20.950Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4c4f6ce0..." not found, but found as SHA256 "2f9f8c9142cc535b"
⏭️  Skipping duplicate: JID_fd5bc9ee (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f24309e2..." not found, but found as SHA256 "19592b7a2a72c048"
⏭️  Skipping duplicate: JID_6e3a4ccc-engineer_r123231 (posted within 7 days)
[2026-01-31T22:13:20.950Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c7891044..." not found, but found as SHA256 "608dacae2c5255ee"
⏭️  Skipping duplicate: JID_c7891044 (posted within 7 days)
[2026-01-31T22:13:20.950Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec81da3-..." not found, but found as SHA256 "9b788ab167c83be9"
⏭️  Skipping duplicate: JID_c50ff87e (posted within 7 days)
[2026-01-31T22:13:20.951Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9dfeb9ac..." not found, but found as SHA256 "2c5311404958b042"
⏭️  Skipping duplicate: JID_c641a1c5 (posted within 7 days)
[2026-01-31T22:13:20.951Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_614cec6b..." not found, but found as SHA256 "fa5de1b48a896633"
⏭️  Skipping duplicate: JID_614cec6b (posted within 7 days)
[2026-01-31T22:13:20.951Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_87337af0-..." not found, but found as SHA256 "f3ac5dd91bfc2c06"
[2026-01-31T22:13:20.951Z] [BOT] ⏭️  Skipping duplicate: JID_7535ea64-graduate_1192963-1 (posted within 7 days)
[2026-01-31T22:13:20.951Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0b4af33b..." not found, but found as SHA256 "62c1d143e3a71eb5"
⏭️  Skipping duplicate: JID_94c60ba9 (posted within 7 days)
[2026-01-31T22:13:20.951Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a1bc3daa..." not found, but found as SHA256 "8d14f97222c054e0"
[2026-01-31T22:13:20.952Z] [BOT] ⏭️  Skipping duplicate: JID_29d7e240-farmington_r503552 (posted within 7 days)
[2026-01-31T22:13:21.054Z] [BOT] ✅ Loaded pending queue: 2949 total (1444 pending, 48 enriched, 1457 posted)
[2026-01-31T22:13:21.248Z] [BOT] ✅ Saved pending queue: 2949 total (1444 pending, 38 enriched, 1467 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T22:13:21.248Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T22:13:21.337Z] [BOT] 📂 Loaded 11548 existing routing entries
[2026-01-31T22:13:21.469Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11558
[2026-01-31T22:13:21.469Z] [BOT] Timestamp: 2026-01-31T22:13:21.422Z
[2026-01-31T22:13:21.470Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T22:13:21.470Z] [BOT] Total attempts: 29
   Successful: 13
   Failed: 0
   Skipped: 16
[2026-01-31T22:13:21.470Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T22:13:21.470Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
[2026-01-31T22:13:21.470Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 2 posts
     4. #🗽・JID_98d4f0de: 2 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-31T22:13:21.471Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1487 jobs in memory (cached)
[2026-01-31T22:13:21.499Z] [BOT] ✅ Loaded V2 database: 1487 jobs
💾 DISK STATE: 1487 jobs on disk
[2026-01-31T22:13:21.500Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1487
[2026-01-31T22:13:21.505Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T22:13:21.505Z] [BOT] 💾 AFTER MERGE: 1487 jobs (merged disk + memory)
[2026-01-31T22:13:21.506Z] [BOT] ✅ No jobs to archive (all 1487 jobs within 7-day window)
[2026-01-31T22:13:21.611Z] [BOT] 💾 Saved posted_jobs.json: 1487 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T22:13:23.645Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2951) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*