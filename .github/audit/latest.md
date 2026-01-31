# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T18:33:41.834Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T18:33:04.358Z] ========================================
[2026-01-31T18:33:04.360Z] Discord Bot Execution Log
[2026-01-31T18:33:04.360Z] Environment: GitHub Actions
[2026-01-31T18:33:04.360Z] Node Version: v20.20.0
[2026-01-31T18:33:04.360Z] ========================================
[2026-01-31T18:33:04.360Z] Environment Variables Check:
[2026-01-31T18:33:04.360Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T18:33:04.360Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.360Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T18:33:04.360Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T18:33:04.360Z] 
Multi-Channel Configuration:
[2026-01-31T18:33:04.361Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T18:33:04.361Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T18:33:04.361Z] 
Data Files Check:
[2026-01-31T18:33:04.362Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T18:33:04.409Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8062527 bytes)
[2026-01-31T18:33:04.409Z] 
========================================
[2026-01-31T18:33:04.409Z] Starting Enhanced Discord Bot...
[2026-01-31T18:33:04.409Z] ========================================
[2026-01-31T18:33:04.904Z] [BOT] ✅ Loaded V2 database: 1327 jobs
[2026-01-31T18:33:05.445Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T18:33:05.445Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T18:33:05.446Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T18:33:05.615Z] [BOT] ✅ Loaded pending queue: 2945 total (1588 pending, 50 enriched, 1307 posted)
[2026-01-31T18:33:05.615Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T18:33:05.616Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T18:33:05.617Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T18:33:05.617Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T18:33:05.618Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T18:33:05.618Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T18:33:05.618Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T18:33:05.619Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T18:33:05.619Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T18:33:05.619Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T18:33:05.619Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T18:33:05.620Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T18:33:05.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T18:33:05.620Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T18:33:05.620Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T18:33:05.620Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T18:33:05.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T18:33:05.621Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T18:33:05.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T18:33:05.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T18:33:05.621Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T18:33:05.621Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T18:33:05.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T18:33:05.622Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T18:33:05.629Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T18:33:05.629Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee at Argonne National Laboratory
[2026-01-31T18:33:05.629Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Medium Energy Physics at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials at Argonne National Laboratory
[2026-01-31T18:33:05.629Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - AI for Coherent X-ray Imaging at Argonne National Laboratory
🚫 Skipping blacklisted job: Postdoctoral Associate at University of Maryland - College Park
[2026-01-31T18:33:05.629Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer at Onto Innovation
[2026-01-31T18:33:05.629Z] [BOT] 🚫 Skipping blacklisted job: Senior Salesforce Marketing Cloud Developer at Wounded Warrior Project
🚫 Skipping blacklisted job: Postdoctoral Researcher at Louisiana State University (LSU)
[2026-01-31T18:33:05.629Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow in Future Runoff and Reservoir Evaporation Projections for Texas River Basins at University of Texas - Austin
[2026-01-31T18:33:05.777Z] [BOT] ✅ Loaded pending queue: 2945 total (1588 pending, 50 enriched, 1307 posted)
[2026-01-31T18:33:05.971Z] [BOT] ✅ Saved pending queue: 2936 total (1588 pending, 41 enriched, 1307 posted)
🗑️ Removed 9 blacklisted jobs from pending queue
📋 After blacklist filter: 27 jobs (9 blacklisted)
[2026-01-31T18:33:05.971Z] [BOT] 📋 After data quality filter: 27 jobs (0 invalid)
[2026-01-31T18:33:05.972Z] [BOT] 📋 After multi-location grouping: 27 unique jobs to post
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T18:33:05.975Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T18:33:05.976Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_3db7c958
[2026-01-31T18:33:05.976Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:05.993Z] [BOT ERROR] (node:3744) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T18:33:06.252Z] [BOT] ✅ Posted message: Software Engineer @ ORG_3db7c958 in #💻・tech-jobs
[2026-01-31T18:33:06.252Z] [BOT] ✅ Industry: Software Engineer @ ORG_3db7c958
[2026-01-31T18:33:06.253Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_3db7c958 → category channel (1 total channels)
[2026-01-31T18:33:06.253Z] [BOT] 💾 BEFORE MERGE: 1328 jobs in memory (cached)
[2026-01-31T18:33:06.290Z] [BOT] ✅ Loaded V2 database: 1327 jobs
💾 DISK STATE: 1327 jobs on disk
[2026-01-31T18:33:06.290Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1328
[2026-01-31T18:33:06.293Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:33:06.294Z] [BOT] 💾 AFTER MERGE: 1328 jobs (merged disk + memory)
[2026-01-31T18:33:06.295Z] [BOT] ✅ No jobs to archive (all 1328 jobs within 7-day window)
[2026-01-31T18:33:06.400Z] [BOT] 💾 Saved posted_jobs.json: 1328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:08.138Z] [BOT] ✅ Posted message: Software Engineer @ ORG_3db7c958 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T18:33:08.139Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_3db7c958 → location channel (2 total channels)
💾 BEFORE MERGE: 1328 jobs in memory (cached)
[2026-01-31T18:33:08.173Z] [BOT] ✅ Loaded V2 database: 1328 jobs
💾 DISK STATE: 1328 jobs on disk
[2026-01-31T18:33:08.174Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1328
[2026-01-31T18:33:08.177Z] [BOT] 🔀 Deep merged: Software Engineer @ ORG_3db7c958 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T18:33:08.177Z] [BOT] 💾 AFTER MERGE: 1328 jobs (merged disk + memory)
[2026-01-31T18:33:08.178Z] [BOT] ✅ No jobs to archive (all 1328 jobs within 7-day window)
[2026-01-31T18:33:08.274Z] [BOT] 💾 Saved posted_jobs.json: 1328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:09.775Z] [BOT] 📍 [ROUTING] "Cloud Platform Engineer I" @ ORG_e3124992
   Category: TECH (matched: "data engineer")
[2026-01-31T18:33:09.776Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:10.007Z] [BOT] ✅ Posted message: Cloud Platform Engineer I @ ORG_e3124992 in #💻・tech-jobs
[2026-01-31T18:33:10.008Z] [BOT] ✅ Industry: Cloud Platform Engineer I @ ORG_e3124992
[2026-01-31T18:33:10.008Z] [BOT] 💾 Added channel posting: Cloud Platform Engineer I @ ORG_e3124992 → category channel (1 total channels)
[2026-01-31T18:33:10.008Z] [BOT] 💾 BEFORE MERGE: 1329 jobs in memory (cached)
[2026-01-31T18:33:10.043Z] [BOT] ✅ Loaded V2 database: 1328 jobs
💾 DISK STATE: 1328 jobs on disk
[2026-01-31T18:33:10.043Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1329
[2026-01-31T18:33:10.046Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:33:10.046Z] [BOT] 💾 AFTER MERGE: 1329 jobs (merged disk + memory)
[2026-01-31T18:33:10.047Z] [BOT] ✅ No jobs to archive (all 1329 jobs within 7-day window)
[2026-01-31T18:33:10.145Z] [BOT] 💾 Saved posted_jobs.json: 1329 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:11.648Z] [BOT] 📍 [ROUTING] "2026] Software Engineer – Early Career - Security" @ ORG_0acab0cf
   Category: TECH (matched: "software")
[2026-01-31T18:33:11.648Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:11.840Z] [BOT] ✅ Posted message: 2026] Software Engineer – Early Career - Security @ ORG_0acab0cf in #💻・tech-jobs
  ✅ Industry: 2026] Software Engineer – Early Career - Security @ ORG_0acab0cf
[2026-01-31T18:33:11.841Z] [BOT] 💾 Added channel posting: 2026] Software Engineer – Early Career - Security @ ORG_0acab0cf → category channel (1 total channels)
[2026-01-31T18:33:11.841Z] [BOT] 💾 BEFORE MERGE: 1330 jobs in memory (cached)
[2026-01-31T18:33:11.875Z] [BOT] ✅ Loaded V2 database: 1329 jobs
💾 DISK STATE: 1329 jobs on disk
[2026-01-31T18:33:11.875Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1330
[2026-01-31T18:33:11.879Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:33:11.879Z] [BOT] 💾 AFTER MERGE: 1330 jobs (merged disk + memory)
[2026-01-31T18:33:11.879Z] [BOT] ✅ No jobs to archive (all 1330 jobs within 7-day window)
[2026-01-31T18:33:11.977Z] [BOT] 💾 Saved posted_jobs.json: 1330 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:13.478Z] [BOT] 📍 [ROUTING] "Software Engineer I C#" @ McDonald's
   Category: TECH (matched: "software")
[2026-01-31T18:33:13.478Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:13.932Z] [BOT] ✅ Posted message: Software Engineer I C# @ McDonald's in #💻・tech-jobs
[2026-01-31T18:33:13.932Z] [BOT] ✅ Industry: Software Engineer I C# @ McDonald's
[2026-01-31T18:33:13.933Z] [BOT] 💾 Added channel posting: Software Engineer I C# @ McDonald's → category channel (1 total channels)
[2026-01-31T18:33:13.933Z] [BOT] 💾 BEFORE MERGE: 1331 jobs in memory (cached)
[2026-01-31T18:33:13.967Z] [BOT] ✅ Loaded V2 database: 1330 jobs
💾 DISK STATE: 1330 jobs on disk
[2026-01-31T18:33:13.967Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1331
[2026-01-31T18:33:13.970Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:33:13.971Z] [BOT] 💾 AFTER MERGE: 1331 jobs (merged disk + memory)
[2026-01-31T18:33:13.974Z] [BOT] ✅ No jobs to archive (all 1331 jobs within 7-day window)
[2026-01-31T18:33:14.060Z] [BOT] 💾 Saved posted_jobs.json: 1331 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:15.562Z] [BOT] 📍 [ROUTING] "Data Governance Specialist" @ ORG_3442dbaa
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:15.751Z] [BOT] ✅ Posted message: Data Governance Specialist @ ORG_3442dbaa in #💻・tech-jobs
  ✅ Industry: Data Governance Specialist @ ORG_3442dbaa
[2026-01-31T18:33:15.752Z] [BOT] 💾 Added channel posting: Data Governance Specialist @ ORG_3442dbaa → category channel (1 total channels)
[2026-01-31T18:33:15.752Z] [BOT] 💾 BEFORE MERGE: 1332 jobs in memory (cached)
[2026-01-31T18:33:15.787Z] [BOT] ✅ Loaded V2 database: 1331 jobs
💾 DISK STATE: 1331 jobs on disk
[2026-01-31T18:33:15.787Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1332
[2026-01-31T18:33:15.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:33:15.790Z] [BOT] 💾 AFTER MERGE: 1332 jobs (merged disk + memory)
[2026-01-31T18:33:15.791Z] [BOT] ✅ No jobs to archive (all 1332 jobs within 7-day window)
[2026-01-31T18:33:15.887Z] [BOT] 💾 Saved posted_jobs.json: 1332 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:17.389Z] [BOT] 📍 [ROUTING] "Transportation Planner 1" @ ORG_f089eaef Baker International
[2026-01-31T18:33:17.389Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:17.676Z] [BOT] ✅ Posted message: Transportation Planner 1 @ ORG_f089eaef Baker International in #💻・tech-jobs
[2026-01-31T18:33:17.676Z] [BOT] ✅ Industry: Transportation Planner 1 @ ORG_f089eaef Baker International
[2026-01-31T18:33:17.677Z] [BOT] 💾 Added channel posting: Transportation Planner 1 @ ORG_f089eaef Baker International → category channel (1 total channels)
[2026-01-31T18:33:17.677Z] [BOT] 💾 BEFORE MERGE: 1333 jobs in memory (cached)
[2026-01-31T18:33:17.712Z] [BOT] ✅ Loaded V2 database: 1332 jobs
💾 DISK STATE: 1332 jobs on disk
[2026-01-31T18:33:17.712Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1333
[2026-01-31T18:33:17.715Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1333 jobs (merged disk + memory)
[2026-01-31T18:33:17.718Z] [BOT] ✅ No jobs to archive (all 1333 jobs within 7-day window)
[2026-01-31T18:33:17.807Z] [BOT] 💾 Saved posted_jobs.json: 1333 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:19.308Z] [BOT] 📍 [ROUTING] "Associate Firmware Engineer" @ ORG_9b9b6e44
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T18:33:19.309Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:19.615Z] [BOT] ✅ Posted message: Associate Firmware Engineer @ ORG_9b9b6e44 in #💻・tech-jobs
[2026-01-31T18:33:19.615Z] [BOT] ✅ Industry: Associate Firmware Engineer @ ORG_9b9b6e44
[2026-01-31T18:33:19.615Z] [BOT] 💾 Added channel posting: Associate Firmware Engineer @ ORG_9b9b6e44 → category channel (1 total channels)
[2026-01-31T18:33:19.616Z] [BOT] 💾 BEFORE MERGE: 1334 jobs in memory (cached)
[2026-01-31T18:33:19.650Z] [BOT] ✅ Loaded V2 database: 1333 jobs
💾 DISK STATE: 1333 jobs on disk
[2026-01-31T18:33:19.650Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1334
[2026-01-31T18:33:19.653Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1334 jobs (merged disk + memory)
[2026-01-31T18:33:19.654Z] [BOT] ✅ No jobs to archive (all 1334 jobs within 7-day window)
[2026-01-31T18:33:19.750Z] [BOT] 💾 Saved posted_jobs.json: 1334 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:21.251Z] [BOT] 📍 [ROUTING] "Entry Level Developer - Contract" @ ORG_97f70c9d
[2026-01-31T18:33:21.251Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T18:33:21.479Z] [BOT] ✅ Posted message: Entry Level Developer - Contract @ ORG_97f70c9d in #💻・tech-jobs
  ✅ Industry: Entry Level Developer - Contract @ ORG_97f70c9d
[2026-01-31T18:33:21.480Z] [BOT] 💾 Added channel posting: Entry Level Developer - Contract @ ORG_97f70c9d → category channel (1 total channels)
[2026-01-31T18:33:21.480Z] [BOT] 💾 BEFORE MERGE: 1335 jobs in memory (cached)
[2026-01-31T18:33:21.515Z] [BOT] ✅ Loaded V2 database: 1334 jobs
💾 DISK STATE: 1334 jobs on disk
[2026-01-31T18:33:21.515Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1335
[2026-01-31T18:33:21.518Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1335 jobs (merged disk + memory)
[2026-01-31T18:33:21.521Z] [BOT] ✅ No jobs to archive (all 1335 jobs within 7-day window)
[2026-01-31T18:33:21.606Z] [BOT] 💾 Saved posted_jobs.json: 1335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:23.523Z] [BOT] ✅ Posted message: Entry Level Developer - Contract @ ORG_97f70c9d in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T18:33:23.523Z] [BOT] 💾 Added channel posting: Entry Level Developer - Contract @ ORG_97f70c9d → location channel (2 total channels)
[2026-01-31T18:33:23.523Z] [BOT] 💾 BEFORE MERGE: 1335 jobs in memory (cached)
[2026-01-31T18:33:23.558Z] [BOT] ✅ Loaded V2 database: 1335 jobs
💾 DISK STATE: 1335 jobs on disk
[2026-01-31T18:33:23.558Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1335
[2026-01-31T18:33:23.561Z] [BOT] 🔀 Deep merged: Entry Level Developer - Contract @ ORG_97f70c9d (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T18:33:23.561Z] [BOT] 💾 AFTER MERGE: 1335 jobs (merged disk + memory)
[2026-01-31T18:33:23.562Z] [BOT] ✅ No jobs to archive (all 1335 jobs within 7-day window)
[2026-01-31T18:33:23.672Z] [BOT] 💾 Saved posted_jobs.json: 1335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:28.172Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T18:33:28.173Z] [BOT] 📍 [ROUTING] "Engineering Scientist Associate" @ ORG_9d38443e of Texas - Austin
   Category: AI (matched: "artificial intelligence")
[2026-01-31T18:33:28.174Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T18:33:28.423Z] [BOT] ✅ Posted message: Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin in #🤖・ai-jobs
  ✅ Industry: Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin
[2026-01-31T18:33:28.423Z] [BOT] 💾 Added channel posting: Engineering Scientist Associate @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-01-31T18:33:28.424Z] [BOT] 💾 BEFORE MERGE: 1336 jobs in memory (cached)
[2026-01-31T18:33:28.458Z] [BOT] ✅ Loaded V2 database: 1335 jobs
💾 DISK STATE: 1335 jobs on disk
[2026-01-31T18:33:28.458Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1336
[2026-01-31T18:33:28.461Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:33:28.464Z] [BOT] 💾 AFTER MERGE: 1336 jobs (merged disk + memory)
[2026-01-31T18:33:28.464Z] [BOT] ✅ No jobs to archive (all 1336 jobs within 7-day window)
[2026-01-31T18:33:28.553Z] [BOT] 💾 Saved posted_jobs.json: 1336 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:33.054Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T18:33:33.055Z] [BOT] 📍 [ROUTING] "Data Engineer Graduate - Data Platform - Global Live" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-01-31T18:33:33.055Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T18:33:33.319Z] [BOT] ✅ Posted message: Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb in #📊・JID_fb739488
  ✅ Industry: Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb
[2026-01-31T18:33:33.320Z] [BOT] 💾 Added channel posting: Data Engineer Graduate - Data Platform - Global Live @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T18:33:33.320Z] [BOT] 💾 BEFORE MERGE: 1337 jobs in memory (cached)
[2026-01-31T18:33:33.355Z] [BOT] ✅ Loaded V2 database: 1336 jobs
💾 DISK STATE: 1336 jobs on disk
[2026-01-31T18:33:33.355Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1337
[2026-01-31T18:33:33.358Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T18:33:33.358Z] [BOT] 💾 AFTER MERGE: 1337 jobs (merged disk + memory)
[2026-01-31T18:33:33.361Z] [BOT] ✅ No jobs to archive (all 1337 jobs within 7-day window)
[2026-01-31T18:33:33.450Z] [BOT] 💾 Saved posted_jobs.json: 1337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:37.953Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T18:33:37.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9e0a2fa3..." not found, but found as SHA256 "6cf6aa83e12b6dc9"
[2026-01-31T18:33:37.954Z] [BOT] ⏭️  Skipping duplicate: JID_8f10638f (posted within 7 days)
[2026-01-31T18:33:37.954Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98cd3881..." not found, but found as SHA256 "14cdb5e080ed500e"
⏭️  Skipping duplicate: JID_8f975526 (posted within 7 days)
[2026-01-31T18:33:37.955Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fe8f3af9..." not found, but found as SHA256 "ec81efb5b3dbc967"
[2026-01-31T18:33:37.955Z] [BOT] ⏭️  Skipping duplicate: JID_fe8f3af9 (posted within 7 days)
[2026-01-31T18:33:37.955Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a6b0eb7e-..." not found, but found as SHA256 "651acb5b0014c788"
⏭️  Skipping duplicate: JID_b6916539 (posted within 7 days)
[2026-01-31T18:33:37.955Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9b092523..." not found, but found as SHA256 "802145304bb83476"
[2026-01-31T18:33:37.955Z] [BOT] ⏭️  Skipping duplicate: JID_6e3dc935 (posted within 7 days)
[2026-01-31T18:33:37.955Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3878102c..." not found, but found as SHA256 "07db342d467cb238"
⏭️  Skipping duplicate: JID_eae6d47c-application_r_00042538 (posted within 7 days)
[2026-01-31T18:33:37.956Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f79a6e5c..." not found, but found as SHA256 "3ea758c2d024d1d4"
[2026-01-31T18:33:37.956Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_8454199c (posted within 7 days)
[2026-01-31T18:33:37.956Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8a5a21b7..." not found, but found as SHA256 "d97a14a496912895"
[2026-01-31T18:33:37.956Z] [BOT] ⏭️  Skipping duplicate: JID_5000e541-cx_2-job-308745 (posted within 7 days)
[2026-01-31T18:33:37.956Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_af7c2683..." not found, but found as SHA256 "454c483370523d70"
[2026-01-31T18:33:37.956Z] [BOT] ⏭️  Skipping duplicate: JID_ca639877 (posted within 7 days)
[2026-01-31T18:33:37.956Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_04609b79..." not found, but found as SHA256 "0e8436e4db7bd580"
[2026-01-31T18:33:37.956Z] [BOT] ⏭️  Skipping duplicate: JID_2f15b3ae-contract_jr-0774 (posted within 7 days)
[2026-01-31T18:33:38.116Z] [BOT] ✅ Loaded pending queue: 2936 total (1588 pending, 41 enriched, 1307 posted)
[2026-01-31T18:33:38.303Z] [BOT] ✅ Saved pending queue: 2936 total (1588 pending, 31 enriched, 1317 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T18:33:38.402Z] [BOT] 📂 Loaded 11398 existing routing entries
[2026-01-31T18:33:38.548Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T18:33:38.548Z] [BOT] Total entries: 11408
   Timestamp: 2026-01-31T18:33:38.487Z
[2026-01-31T18:33:38.549Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T18:33:38.549Z] [BOT] Total attempts: 35
   Successful: 12
   Failed: 0
   Skipped: 23
[2026-01-31T18:33:38.549Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T18:33:38.549Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-31T18:33:38.549Z] [BOT] 1. #💻・tech-jobs: 8 posts
     2. #🏠・JID_ead674af: 2 posts
     3. #🤖・ai-jobs: 1 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-31T18:33:38.549Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T18:33:38.549Z] [BOT] 💾 BEFORE MERGE: 1337 jobs in memory (cached)
[2026-01-31T18:33:38.585Z] [BOT] ✅ Loaded V2 database: 1337 jobs
💾 DISK STATE: 1337 jobs on disk
[2026-01-31T18:33:38.585Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1337
[2026-01-31T18:33:38.588Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1337 jobs (merged disk + memory)
[2026-01-31T18:33:38.589Z] [BOT] ✅ No jobs to archive (all 1337 jobs within 7-day window)
[2026-01-31T18:33:38.687Z] [BOT] 💾 Saved posted_jobs.json: 1337 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T18:33:38.687Z] [BOT] ✅ Database saved successfully
[2026-01-31T18:33:40.714Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3744) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*