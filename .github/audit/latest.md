# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T17:48:42.356Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T17:48:08.283Z] ========================================
[2026-01-31T17:48:08.285Z] Discord Bot Execution Log
[2026-01-31T17:48:08.285Z] Environment: GitHub Actions
[2026-01-31T17:48:08.285Z] Node Version: v20.20.0
[2026-01-31T17:48:08.285Z] ========================================
[2026-01-31T17:48:08.285Z] Environment Variables Check:
[2026-01-31T17:48:08.286Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T17:48:08.286Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.286Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T17:48:08.286Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T17:48:08.286Z] 
Multi-Channel Configuration:
[2026-01-31T17:48:08.286Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.286Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.286Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.286Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.286Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.286Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.287Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.287Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.287Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T17:48:08.287Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T17:48:08.287Z] 
Data Files Check:
[2026-01-31T17:48:08.288Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T17:48:08.325Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7943811 bytes)
[2026-01-31T17:48:08.325Z] 
========================================
[2026-01-31T17:48:08.325Z] Starting Enhanced Discord Bot...
[2026-01-31T17:48:08.325Z] ========================================
[2026-01-31T17:48:08.877Z] [BOT] ✅ Loaded V2 database: 1297 jobs
[2026-01-31T17:48:09.796Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T17:48:09.797Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T17:48:09.797Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T17:48:09.916Z] [BOT] ✅ Loaded pending queue: 2945 total (1618 pending, 50 enriched, 1277 posted)
[2026-01-31T17:48:09.916Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:48:09.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T17:48:09.917Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T17:48:09.917Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:48:09.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T17:48:09.918Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T17:48:09.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T17:48:09.918Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T17:48:09.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T17:48:09.919Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T17:48:09.919Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T17:48:09.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T17:48:09.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T17:48:09.920Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T17:48:09.920Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T17:48:09.920Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T17:48:09.921Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T17:48:09.921Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T17:48:09.921Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T17:48:09.921Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T17:48:09.921Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T17:48:09.922Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T17:48:09.922Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T17:48:09.922Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T17:48:09.931Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T17:48:09.931Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-31T17:48:09.932Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-31T17:48:09.933Z] [BOT] 📋 After multi-location grouping: 36 unique jobs to post
[2026-01-31T17:48:09.933Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T17:48:09.936Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T17:48:09.937Z] [BOT] 📍 [ROUTING] "Software Engineer New Grad" @ ORG_c4edd50eing
[2026-01-31T17:48:09.937Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:48:09.954Z] [BOT ERROR] (node:3267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T17:48:10.131Z] [BOT] ✅ Posted message: Software Engineer New Grad @ ORG_c4edd50eing in #💻・tech-jobs
[2026-01-31T17:48:10.131Z] [BOT] ✅ Industry: Software Engineer New Grad @ ORG_c4edd50eing
[2026-01-31T17:48:10.132Z] [BOT] 💾 Added channel posting: Software Engineer New Grad @ ORG_c4edd50eing → category channel (1 total channels)
[2026-01-31T17:48:10.132Z] [BOT] 💾 BEFORE MERGE: 1298 jobs in memory (cached)
[2026-01-31T17:48:10.165Z] [BOT] ✅ Loaded V2 database: 1297 jobs
💾 DISK STATE: 1297 jobs on disk
[2026-01-31T17:48:10.165Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1298
[2026-01-31T17:48:10.169Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:48:10.169Z] [BOT] 💾 AFTER MERGE: 1298 jobs (merged disk + memory)
[2026-01-31T17:48:10.170Z] [BOT] ✅ No jobs to archive (all 1298 jobs within 7-day window)
[2026-01-31T17:48:10.255Z] [BOT] 💾 Saved posted_jobs.json: 1298 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:11.757Z] [BOT] 📍 [ROUTING] "Software Engineer - Full-Stack" @ nominal
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:48:11.939Z] [BOT] ✅ Posted message: Software Engineer - Full-Stack @ nominal in #💻・tech-jobs
[2026-01-31T17:48:11.939Z] [BOT] ✅ Industry: Software Engineer - Full-Stack @ nominal
[2026-01-31T17:48:11.939Z] [BOT] 💾 Added channel posting: Software Engineer - Full-Stack @ nominal → category channel (1 total channels)
[2026-01-31T17:48:11.939Z] [BOT] 💾 BEFORE MERGE: 1299 jobs in memory (cached)
[2026-01-31T17:48:11.962Z] [BOT] ✅ Loaded V2 database: 1298 jobs
💾 DISK STATE: 1298 jobs on disk
[2026-01-31T17:48:11.962Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1299
[2026-01-31T17:48:11.965Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:48:11.965Z] [BOT] 💾 AFTER MERGE: 1299 jobs (merged disk + memory)
[2026-01-31T17:48:11.966Z] [BOT] ✅ No jobs to archive (all 1299 jobs within 7-day window)
[2026-01-31T17:48:12.040Z] [BOT] 💾 Saved posted_jobs.json: 1299 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:13.855Z] [BOT] ✅ Posted message: Software Engineer - Full-Stack @ nominal in #🗽・JID_98d4f0de
[2026-01-31T17:48:13.856Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T17:48:13.856Z] [BOT] 💾 Added channel posting: Software Engineer - Full-Stack @ nominal → location channel (2 total channels)
💾 BEFORE MERGE: 1299 jobs in memory (cached)
[2026-01-31T17:48:13.878Z] [BOT] ✅ Loaded V2 database: 1299 jobs
💾 DISK STATE: 1299 jobs on disk
[2026-01-31T17:48:13.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1299
[2026-01-31T17:48:13.881Z] [BOT] 🔀 Deep merged: Software Engineer - Full-Stack @ nominal (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1299 jobs (merged disk + memory)
[2026-01-31T17:48:13.883Z] [BOT] ✅ No jobs to archive (all 1299 jobs within 7-day window)
[2026-01-31T17:48:13.964Z] [BOT] 💾 Saved posted_jobs.json: 1299 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:15.466Z] [BOT] 📍 [ROUTING] "Manufacturing Engineering Technician" @ ORG_9b9b6e44
[2026-01-31T17:48:15.466Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:48:15.649Z] [BOT] ✅ Posted message: Manufacturing Engineering Technician @ ORG_9b9b6e44 in #💻・tech-jobs
  ✅ Industry: Manufacturing Engineering Technician @ ORG_9b9b6e44
[2026-01-31T17:48:15.649Z] [BOT] 💾 Added channel posting: Manufacturing Engineering Technician @ ORG_9b9b6e44 → category channel (1 total channels)
[2026-01-31T17:48:15.649Z] [BOT] 💾 BEFORE MERGE: 1300 jobs in memory (cached)
[2026-01-31T17:48:15.672Z] [BOT] ✅ Loaded V2 database: 1299 jobs
💾 DISK STATE: 1299 jobs on disk
[2026-01-31T17:48:15.672Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1300
[2026-01-31T17:48:15.675Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1300 jobs (merged disk + memory)
[2026-01-31T17:48:15.676Z] [BOT] ✅ No jobs to archive (all 1300 jobs within 7-day window)
[2026-01-31T17:48:15.750Z] [BOT] 💾 Saved posted_jobs.json: 1300 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:17.251Z] [BOT] 📍 [ROUTING] "Hybrid – Research Data Management Librarian - Downtown Library" @ ORG_41a6741e Virginia University
   Category: TECH (matched: "data")
[2026-01-31T17:48:17.251Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:48:17.502Z] [BOT] ✅ Posted message: Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University in #💻・tech-jobs
  ✅ Industry: Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University
[2026-01-31T17:48:17.503Z] [BOT] 💾 Added channel posting: Hybrid – Research Data Management Librarian - Downtown Library @ ORG_41a6741e Virginia University → category channel (1 total channels)
[2026-01-31T17:48:17.503Z] [BOT] 💾 BEFORE MERGE: 1301 jobs in memory (cached)
[2026-01-31T17:48:17.525Z] [BOT] ✅ Loaded V2 database: 1300 jobs
💾 DISK STATE: 1300 jobs on disk
[2026-01-31T17:48:17.526Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1301
[2026-01-31T17:48:17.528Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1301 jobs (merged disk + memory)
[2026-01-31T17:48:17.529Z] [BOT] ✅ No jobs to archive (all 1301 jobs within 7-day window)
[2026-01-31T17:48:17.607Z] [BOT] 💾 Saved posted_jobs.json: 1301 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:19.109Z] [BOT] 📍 [ROUTING] "Product Software Engineer" @ ORG_36b77757
   Category: TECH (matched: "software")
[2026-01-31T17:48:19.109Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:48:19.330Z] [BOT] ✅ Posted message: Product Software Engineer @ ORG_36b77757 in #💻・tech-jobs
[2026-01-31T17:48:19.330Z] [BOT] ✅ Industry: Product Software Engineer @ ORG_36b77757
[2026-01-31T17:48:19.331Z] [BOT] 💾 Added channel posting: Product Software Engineer @ ORG_36b77757 → category channel (1 total channels)
[2026-01-31T17:48:19.331Z] [BOT] 💾 BEFORE MERGE: 1302 jobs in memory (cached)
[2026-01-31T17:48:19.354Z] [BOT] ✅ Loaded V2 database: 1301 jobs
💾 DISK STATE: 1301 jobs on disk
[2026-01-31T17:48:19.354Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1302
[2026-01-31T17:48:19.357Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1302 jobs (merged disk + memory)
[2026-01-31T17:48:19.358Z] [BOT] ✅ No jobs to archive (all 1302 jobs within 7-day window)
[2026-01-31T17:48:19.432Z] [BOT] 💾 Saved posted_jobs.json: 1302 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:20.934Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Data Arch - Data Ecosystem)" @ ORG_1bb6fcfb
   Category: TECH (matched: "software")
[2026-01-31T17:48:20.934Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:48:21.190Z] [BOT] ✅ Posted message: Software Engineer Graduate (Data Arch - Data Ecosystem) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T17:48:21.190Z] [BOT] ✅ Industry: Software Engineer Graduate (Data Arch - Data Ecosystem) @ ORG_1bb6fcfb
[2026-01-31T17:48:21.190Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Data Arch - Data Ecosystem) @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1303 jobs in memory (cached)
[2026-01-31T17:48:21.213Z] [BOT] ✅ Loaded V2 database: 1302 jobs
💾 DISK STATE: 1302 jobs on disk
[2026-01-31T17:48:21.213Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1303
[2026-01-31T17:48:21.216Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:48:21.216Z] [BOT] 💾 AFTER MERGE: 1303 jobs (merged disk + memory)
[2026-01-31T17:48:21.217Z] [BOT] ✅ No jobs to archive (all 1303 jobs within 7-day window)
[2026-01-31T17:48:21.307Z] [BOT] 💾 Saved posted_jobs.json: 1303 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:22.807Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate (Data Platfrom TikTok BP)" @ ORG_1bb6fcfb
[2026-01-31T17:48:22.807Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:48:23.127Z] [BOT] ✅ Posted message: Software Engineer Graduate (Data Platfrom TikTok BP) @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T17:48:23.127Z] [BOT] ✅ Industry: Software Engineer Graduate (Data Platfrom TikTok BP) @ ORG_1bb6fcfb
[2026-01-31T17:48:23.128Z] [BOT] 💾 Added channel posting: Software Engineer Graduate (Data Platfrom TikTok BP) @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T17:48:23.128Z] [BOT] 💾 BEFORE MERGE: 1304 jobs in memory (cached)
[2026-01-31T17:48:23.150Z] [BOT] ✅ Loaded V2 database: 1303 jobs
💾 DISK STATE: 1303 jobs on disk
[2026-01-31T17:48:23.150Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1304
[2026-01-31T17:48:23.153Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1304 jobs (merged disk + memory)
[2026-01-31T17:48:23.154Z] [BOT] ✅ No jobs to archive (all 1304 jobs within 7-day window)
[2026-01-31T17:48:23.229Z] [BOT] 💾 Saved posted_jobs.json: 1304 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:27.731Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T17:48:27.731Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_3495e757 Cap Supply Holdings
[2026-01-31T17:48:27.732Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T17:48:28.076Z] [BOT] ✅ Posted message: Data Scientist @ ORG_3495e757 Cap Supply Holdings in #🤖・ai-jobs
  ✅ Industry: Data Scientist @ ORG_3495e757 Cap Supply Holdings
[2026-01-31T17:48:28.076Z] [BOT] 💾 Added channel posting: Data Scientist @ ORG_3495e757 Cap Supply Holdings → category channel (1 total channels)
[2026-01-31T17:48:28.076Z] [BOT] 💾 BEFORE MERGE: 1305 jobs in memory (cached)
[2026-01-31T17:48:28.099Z] [BOT] ✅ Loaded V2 database: 1304 jobs
💾 DISK STATE: 1304 jobs on disk
[2026-01-31T17:48:28.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1305
[2026-01-31T17:48:28.102Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1305 jobs (merged disk + memory)
[2026-01-31T17:48:28.103Z] [BOT] ✅ No jobs to archive (all 1305 jobs within 7-day window)
[2026-01-31T17:48:28.184Z] [BOT] 💾 Saved posted_jobs.json: 1305 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:29.687Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_002a9a91
[2026-01-31T17:48:29.688Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T17:48:29.883Z] [BOT] ✅ Posted message: Data Analyst @ ORG_002a9a91 in #🤖・ai-jobs
  ✅ Industry: Data Analyst @ ORG_002a9a91
[2026-01-31T17:48:29.883Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_002a9a91 → category channel (1 total channels)
[2026-01-31T17:48:29.884Z] [BOT] 💾 BEFORE MERGE: 1306 jobs in memory (cached)
[2026-01-31T17:48:29.907Z] [BOT] ✅ Loaded V2 database: 1305 jobs
💾 DISK STATE: 1305 jobs on disk
[2026-01-31T17:48:29.907Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1306
[2026-01-31T17:48:29.909Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:48:29.909Z] [BOT] 💾 AFTER MERGE: 1306 jobs (merged disk + memory)
[2026-01-31T17:48:29.910Z] [BOT] ✅ No jobs to archive (all 1306 jobs within 7-day window)
[2026-01-31T17:48:29.992Z] [BOT] 💾 Saved posted_jobs.json: 1306 active jobs
[2026-01-31T17:48:29.995Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:31.494Z] [BOT] 📍 [ROUTING] "Salesforce Engineer" @ spotify
[2026-01-31T17:48:31.495Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T17:48:31.666Z] [BOT] ✅ Posted message: Salesforce Engineer @ spotify in #🤖・ai-jobs
[2026-01-31T17:48:31.667Z] [BOT] ✅ Industry: Salesforce Engineer @ spotify
[2026-01-31T17:48:31.667Z] [BOT] 💾 Added channel posting: Salesforce Engineer @ spotify → category channel (1 total channels)
[2026-01-31T17:48:31.667Z] [BOT] 💾 BEFORE MERGE: 1307 jobs in memory (cached)
[2026-01-31T17:48:31.691Z] [BOT] ✅ Loaded V2 database: 1306 jobs
💾 DISK STATE: 1306 jobs on disk
[2026-01-31T17:48:31.691Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1307
[2026-01-31T17:48:31.693Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1307 jobs (merged disk + memory)
[2026-01-31T17:48:31.694Z] [BOT] ✅ No jobs to archive (all 1307 jobs within 7-day window)
[2026-01-31T17:48:31.776Z] [BOT] 💾 Saved posted_jobs.json: 1307 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:33.668Z] [BOT] ✅ Posted message: Salesforce Engineer @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T17:48:33.668Z] [BOT] 💾 Added channel posting: Salesforce Engineer @ spotify → location channel (2 total channels)
[2026-01-31T17:48:33.668Z] [BOT] 💾 BEFORE MERGE: 1307 jobs in memory (cached)
[2026-01-31T17:48:33.690Z] [BOT] ✅ Loaded V2 database: 1307 jobs
💾 DISK STATE: 1307 jobs on disk
[2026-01-31T17:48:33.691Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1307
[2026-01-31T17:48:33.693Z] [BOT] 🔀 Deep merged: Salesforce Engineer @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1307 jobs (merged disk + memory)
[2026-01-31T17:48:33.694Z] [BOT] ✅ No jobs to archive (all 1307 jobs within 7-day window)
[2026-01-31T17:48:33.777Z] [BOT] 💾 Saved posted_jobs.json: 1307 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:38.277Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T17:48:38.278Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f82306af..." not found, but found as SHA256 "6f812926b9862226"
[2026-01-31T17:48:38.278Z] [BOT] ⏭️  Skipping duplicate: JID_56c13a3c (posted within 7 days)
[2026-01-31T17:48:38.278Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_40d2948b..." not found, but found as SHA256 "12d4935f4d1175bb"
[2026-01-31T17:48:38.279Z] [BOT] ⏭️  Skipping duplicate: JID_8e6f3c72 (posted within 7 days)
[2026-01-31T17:48:38.279Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af7c2683..." not found, but found as SHA256 "c3deb4f09a91b0a1"
⏭️  Skipping duplicate: JID_7a994d2d (posted within 7 days)
[2026-01-31T17:48:38.279Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_db8fe9e5..." not found, but found as SHA256 "0a2cfab16ffd3466"
[2026-01-31T17:48:38.279Z] [BOT] ⏭️  Skipping duplicate: JID_ec17fa96-atlanta_30360-data-scientist_wcjr-028517 (posted within 7 days)
[2026-01-31T17:48:38.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_437b328c..." not found, but found as SHA256 "22fcc02cf57c29c5"
⏭️  Skipping duplicate: JID_8f44508d (posted within 7 days)
[2026-01-31T17:48:38.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_236ce05f..." not found, but found as SHA256 "d8bc3ded68b51533"
[2026-01-31T17:48:38.280Z] [BOT] ⏭️  Skipping duplicate: JID_3d9d80cb (posted within 7 days)
[2026-01-31T17:48:38.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5e6cf2b2..." not found, but found as SHA256 "26c0da51565aa809"
⏭️  Skipping duplicate: JID_8a2871be (posted within 7 days)
[2026-01-31T17:48:38.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b4c36a9e..." not found, but found as SHA256 "72f7c3054a94e991"
[2026-01-31T17:48:38.280Z] [BOT] ⏭️  Skipping duplicate: JID_db087c04 (posted within 7 days)
[2026-01-31T17:48:38.280Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a6adb94f..." not found, but found as SHA256 "3e116f06f4611b48"
⏭️  Skipping duplicate: JID_6796d1d6-CH_0b3935b8 (posted within 7 days)
[2026-01-31T17:48:38.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_27e4fb15..." not found, but found as SHA256 "d42be973c86c7e96"
[2026-01-31T17:48:38.281Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_7e21dfbd (posted within 7 days)
[2026-01-31T17:48:38.395Z] [BOT] ✅ Loaded pending queue: 2945 total (1618 pending, 50 enriched, 1277 posted)
[2026-01-31T17:48:38.590Z] [BOT] ✅ Saved pending queue: 2945 total (1618 pending, 40 enriched, 1287 posted)
[2026-01-31T17:48:38.590Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T17:48:38.676Z] [BOT] 📂 Loaded 11368 existing routing entries
[2026-01-31T17:48:38.803Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T17:48:38.804Z] [BOT] Total entries: 11378
   Timestamp: 2026-01-31T17:48:38.757Z
[2026-01-31T17:48:38.804Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T17:48:38.804Z] [BOT] Total attempts: 26
   Successful: 12
   Failed: 0
   Skipped: 14
[2026-01-31T17:48:38.804Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T17:48:38.804Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-31T17:48:38.804Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
[2026-01-31T17:48:38.805Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1307 jobs in memory (cached)
[2026-01-31T17:48:38.829Z] [BOT] ✅ Loaded V2 database: 1307 jobs
💾 DISK STATE: 1307 jobs on disk
[2026-01-31T17:48:38.829Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1307
[2026-01-31T17:48:38.832Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:48:38.832Z] [BOT] 💾 AFTER MERGE: 1307 jobs (merged disk + memory)
[2026-01-31T17:48:38.833Z] [BOT] ✅ No jobs to archive (all 1307 jobs within 7-day window)
[2026-01-31T17:48:38.910Z] [BOT] 💾 Saved posted_jobs.json: 1307 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:48:38.910Z] [BOT] ✅ Database saved successfully
[2026-01-31T17:48:40.941Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3267) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*