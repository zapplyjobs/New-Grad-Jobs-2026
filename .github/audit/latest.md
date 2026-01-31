# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T08:53:19.956Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T08:52:36.591Z] ========================================
[2026-01-31T08:52:36.592Z] Discord Bot Execution Log
[2026-01-31T08:52:36.592Z] Environment: GitHub Actions
[2026-01-31T08:52:36.592Z] Node Version: v20.20.0
[2026-01-31T08:52:36.592Z] ========================================
[2026-01-31T08:52:36.592Z] Environment Variables Check:
[2026-01-31T08:52:36.592Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T08:52:36.593Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T08:52:36.593Z] 
Multi-Channel Configuration:
[2026-01-31T08:52:36.593Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T08:52:36.593Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T08:52:36.594Z] 
Data Files Check:
[2026-01-31T08:52:36.595Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T08:52:36.632Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6200114 bytes)
[2026-01-31T08:52:36.632Z] 
========================================
[2026-01-31T08:52:36.632Z] Starting Enhanced Discord Bot...
[2026-01-31T08:52:36.632Z] ========================================
[2026-01-31T08:52:37.109Z] [BOT] ✅ Loaded V2 database: 978 jobs
[2026-01-31T08:52:37.870Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T08:52:37.871Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T08:52:37.871Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T08:52:38.034Z] [BOT] ✅ Loaded pending queue: 2957 total (1958 pending, 50 enriched, 949 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:52:38.034Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:52:38.034Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T08:52:38.034Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T08:52:38.034Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T08:52:38.035Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T08:52:38.035Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T08:52:38.036Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-31T08:52:38.036Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T08:52:38.037Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T08:52:38.037Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T08:52:38.038Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T08:52:38.043Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T08:52:38.043Z] [BOT] 🚫 Skipping blacklisted job: Senior Growth Marketing Manager at brex
🚫 Skipping blacklisted job: Postdoctoral Fellow - AI Driven Precision Oncology at University of Texas - Austin
[2026-01-31T08:52:38.200Z] [BOT] ✅ Loaded pending queue: 2957 total (1958 pending, 50 enriched, 949 posted)
[2026-01-31T08:52:38.376Z] [BOT] ✅ Saved pending queue: 2955 total (1958 pending, 48 enriched, 949 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-31T08:52:38.377Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-31T08:52:38.378Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T08:52:38.378Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T08:52:38.381Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T08:52:38.382Z] [BOT] 📍 [ROUTING] "Data Engineer - People Analytics" @ ORG_f3f2248d Grumman
[2026-01-31T08:52:38.382Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T08:52:38.382Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T08:52:38.399Z] [BOT ERROR] (node:3702) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T08:52:38.757Z] [BOT] ✅ Posted message: Data Engineer - People Analytics @ ORG_f3f2248d Grumman in #📊・JID_fb739488
  ✅ Industry: Data Engineer - People Analytics @ ORG_f3f2248d Grumman
[2026-01-31T08:52:38.758Z] [BOT] 💾 Added channel posting: Data Engineer - People Analytics @ ORG_f3f2248d Grumman → category channel (1 total channels)
[2026-01-31T08:52:38.758Z] [BOT] 💾 BEFORE MERGE: 979 jobs in memory (cached)
[2026-01-31T08:52:38.787Z] [BOT] ✅ Loaded V2 database: 978 jobs
💾 DISK STATE: 978 jobs on disk
[2026-01-31T08:52:38.787Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=979
[2026-01-31T08:52:38.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:52:38.790Z] [BOT] 💾 AFTER MERGE: 979 jobs (merged disk + memory)
[2026-01-31T08:52:38.791Z] [BOT] ✅ No jobs to archive (all 979 jobs within 7-day window)
[2026-01-31T08:52:38.865Z] [BOT] 💾 Saved posted_jobs.json: 979 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:40.540Z] [BOT] ✅ Posted message: Data Engineer - People Analytics @ ORG_f3f2248d Grumman in #🗽・JID_98d4f0de
[2026-01-31T08:52:40.540Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:52:40.540Z] [BOT] 💾 Added channel posting: Data Engineer - People Analytics @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-31T08:52:40.540Z] [BOT] 💾 BEFORE MERGE: 979 jobs in memory (cached)
[2026-01-31T08:52:40.568Z] [BOT] ✅ Loaded V2 database: 979 jobs
💾 DISK STATE: 979 jobs on disk
[2026-01-31T08:52:40.568Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=979
[2026-01-31T08:52:40.570Z] [BOT] 🔀 Deep merged: Data Engineer - People Analytics @ ORG_f3f2248d Grumman (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:52:40.571Z] [BOT] 💾 AFTER MERGE: 979 jobs (merged disk + memory)
[2026-01-31T08:52:40.571Z] [BOT] ✅ No jobs to archive (all 979 jobs within 7-day window)
[2026-01-31T08:52:40.637Z] [BOT] 💾 Saved posted_jobs.json: 979 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:45.139Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T08:52:45.139Z] [BOT] 📍 [ROUTING] "Geospatial Technician - 3D Stereo Compilation" @ NV5 Global
   Category: TECH (default)
[2026-01-31T08:52:45.140Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:52:45.376Z] [BOT] ✅ Posted message: Geospatial Technician - 3D Stereo Compilation @ NV5 Global in #💻・tech-jobs
  ✅ Industry: Geospatial Technician - 3D Stereo Compilation @ NV5 Global
[2026-01-31T08:52:45.377Z] [BOT] 💾 Added channel posting: Geospatial Technician - 3D Stereo Compilation @ NV5 Global → category channel (1 total channels)
[2026-01-31T08:52:45.377Z] [BOT] 💾 BEFORE MERGE: 980 jobs in memory (cached)
[2026-01-31T08:52:45.406Z] [BOT] ✅ Loaded V2 database: 979 jobs
💾 DISK STATE: 979 jobs on disk
[2026-01-31T08:52:45.406Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=980
[2026-01-31T08:52:45.408Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:52:45.408Z] [BOT] 💾 AFTER MERGE: 980 jobs (merged disk + memory)
[2026-01-31T08:52:45.409Z] [BOT] ✅ No jobs to archive (all 980 jobs within 7-day window)
[2026-01-31T08:52:45.474Z] [BOT] 💾 Saved posted_jobs.json: 980 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:46.976Z] [BOT] 📍 [ROUTING] "Software Engineer I" @ ORG_ec7d56a0 Yonder
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:52:47.158Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_ec7d56a0 Yonder in #💻・tech-jobs
[2026-01-31T08:52:47.158Z] [BOT] ✅ Industry: Software Engineer I @ ORG_ec7d56a0 Yonder
[2026-01-31T08:52:47.159Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_ec7d56a0 Yonder → category channel (1 total channels)
[2026-01-31T08:52:47.159Z] [BOT] 💾 BEFORE MERGE: 981 jobs in memory (cached)
[2026-01-31T08:52:47.187Z] [BOT] ✅ Loaded V2 database: 980 jobs
💾 DISK STATE: 980 jobs on disk
[2026-01-31T08:52:47.187Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=981
[2026-01-31T08:52:47.190Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:52:47.190Z] [BOT] 💾 AFTER MERGE: 981 jobs (merged disk + memory)
[2026-01-31T08:52:47.190Z] [BOT] ✅ No jobs to archive (all 981 jobs within 7-day window)
[2026-01-31T08:52:47.265Z] [BOT] 💾 Saved posted_jobs.json: 981 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:48.945Z] [BOT] ✅ Posted message: Software Engineer I @ ORG_ec7d56a0 Yonder in #🗽・JID_98d4f0de
[2026-01-31T08:52:48.946Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:52:48.946Z] [BOT] 💾 Added channel posting: Software Engineer I @ ORG_ec7d56a0 Yonder → location channel (2 total channels)
[2026-01-31T08:52:48.946Z] [BOT] 💾 BEFORE MERGE: 981 jobs in memory (cached)
[2026-01-31T08:52:48.972Z] [BOT] ✅ Loaded V2 database: 981 jobs
💾 DISK STATE: 981 jobs on disk
[2026-01-31T08:52:48.972Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=981
[2026-01-31T08:52:48.975Z] [BOT] 🔀 Deep merged: Software Engineer I @ ORG_ec7d56a0 Yonder (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:52:48.975Z] [BOT] 💾 AFTER MERGE: 981 jobs (merged disk + memory)
[2026-01-31T08:52:48.976Z] [BOT] ✅ No jobs to archive (all 981 jobs within 7-day window)
[2026-01-31T08:52:49.040Z] [BOT] 💾 Saved posted_jobs.json: 981 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:50.541Z] [BOT] 📍 [ROUTING] "Research Scientist New College Grad - ML Systems" @ ORG_0890f456
[2026-01-31T08:52:50.541Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:52:52.062Z] [BOT] ✅ Posted message: Research Scientist New College Grad - ML Systems @ ORG_0890f456 in #💻・tech-jobs
[2026-01-31T08:52:52.062Z] [BOT] ✅ Industry: Research Scientist New College Grad - ML Systems @ ORG_0890f456
[2026-01-31T08:52:52.062Z] [BOT] 💾 Added channel posting: Research Scientist New College Grad - ML Systems @ ORG_0890f456 → category channel (1 total channels)
[2026-01-31T08:52:52.063Z] [BOT] 💾 BEFORE MERGE: 982 jobs in memory (cached)
[2026-01-31T08:52:52.089Z] [BOT] ✅ Loaded V2 database: 981 jobs
💾 DISK STATE: 981 jobs on disk
[2026-01-31T08:52:52.089Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=982
[2026-01-31T08:52:52.092Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:52:52.092Z] [BOT] 💾 AFTER MERGE: 982 jobs (merged disk + memory)
[2026-01-31T08:52:52.092Z] [BOT] ✅ No jobs to archive (all 982 jobs within 7-day window)
[2026-01-31T08:52:52.158Z] [BOT] 💾 Saved posted_jobs.json: 982 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:53.660Z] [BOT] 📍 [ROUTING] "Associate Operations Analyst" @ ORG_bac0256c
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:52:53.850Z] [BOT] ✅ Posted message: Associate Operations Analyst @ ORG_bac0256c in #💻・tech-jobs
[2026-01-31T08:52:53.851Z] [BOT] ✅ Industry: Associate Operations Analyst @ ORG_bac0256c
[2026-01-31T08:52:53.851Z] [BOT] 💾 Added channel posting: Associate Operations Analyst @ ORG_bac0256c → category channel (1 total channels)
[2026-01-31T08:52:53.851Z] [BOT] 💾 BEFORE MERGE: 983 jobs in memory (cached)
[2026-01-31T08:52:53.879Z] [BOT] ✅ Loaded V2 database: 982 jobs
💾 DISK STATE: 982 jobs on disk
[2026-01-31T08:52:53.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=983
[2026-01-31T08:52:53.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:52:53.881Z] [BOT] 💾 AFTER MERGE: 983 jobs (merged disk + memory)
[2026-01-31T08:52:53.882Z] [BOT] ✅ No jobs to archive (all 983 jobs within 7-day window)
[2026-01-31T08:52:53.956Z] [BOT] 💾 Saved posted_jobs.json: 983 active jobs
[2026-01-31T08:52:53.956Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:55.618Z] [BOT] ✅ Posted message: Associate Operations Analyst @ ORG_bac0256c in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:52:55.618Z] [BOT] 💾 Added channel posting: Associate Operations Analyst @ ORG_bac0256c → location channel (2 total channels)
[2026-01-31T08:52:55.618Z] [BOT] 💾 BEFORE MERGE: 983 jobs in memory (cached)
[2026-01-31T08:52:55.645Z] [BOT] ✅ Loaded V2 database: 983 jobs
💾 DISK STATE: 983 jobs on disk
[2026-01-31T08:52:55.645Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=983
[2026-01-31T08:52:55.647Z] [BOT] 🔀 Deep merged: Associate Operations Analyst @ ORG_bac0256c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:52:55.647Z] [BOT] 💾 AFTER MERGE: 983 jobs (merged disk + memory)
[2026-01-31T08:52:55.648Z] [BOT] ✅ No jobs to archive (all 983 jobs within 7-day window)
[2026-01-31T08:52:55.714Z] [BOT] 💾 Saved posted_jobs.json: 983 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:57.216Z] [BOT] 📍 [ROUTING] "Research Associate - Lti - School of Computer Science" @ ORG_15a5b314 Mellon University
[2026-01-31T08:52:57.216Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:52:57.414Z] [BOT] ✅ Posted message: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #💻・tech-jobs
  ✅ Industry: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University
[2026-01-31T08:52:57.414Z] [BOT] 💾 Added channel posting: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University → category channel (1 total channels)
[2026-01-31T08:52:57.414Z] [BOT] 💾 BEFORE MERGE: 984 jobs in memory (cached)
[2026-01-31T08:52:57.441Z] [BOT] ✅ Loaded V2 database: 983 jobs
💾 DISK STATE: 983 jobs on disk
[2026-01-31T08:52:57.441Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=984
[2026-01-31T08:52:57.444Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 984 jobs (merged disk + memory)
[2026-01-31T08:52:57.444Z] [BOT] ✅ No jobs to archive (all 984 jobs within 7-day window)
[2026-01-31T08:52:57.511Z] [BOT] 💾 Saved posted_jobs.json: 984 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:52:59.225Z] [BOT] ✅ Posted message: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University in #🗽・JID_98d4f0de
[2026-01-31T08:52:59.226Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:52:59.226Z] [BOT] 💾 Added channel posting: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University → location channel (2 total channels)
[2026-01-31T08:52:59.226Z] [BOT] 💾 BEFORE MERGE: 984 jobs in memory (cached)
[2026-01-31T08:52:59.254Z] [BOT] ✅ Loaded V2 database: 984 jobs
💾 DISK STATE: 984 jobs on disk
[2026-01-31T08:52:59.254Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=984
[2026-01-31T08:52:59.256Z] [BOT] 🔀 Deep merged: Research Associate - Lti - School of Computer Science @ ORG_15a5b314 Mellon University (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:52:59.256Z] [BOT] 💾 AFTER MERGE: 984 jobs (merged disk + memory)
[2026-01-31T08:52:59.257Z] [BOT] ✅ No jobs to archive (all 984 jobs within 7-day window)
[2026-01-31T08:52:59.330Z] [BOT] 💾 Saved posted_jobs.json: 984 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:53:00.832Z] [BOT] 📍 [ROUTING] "Field Geologist" @ ORG_3c8e259b
   Category: TECH (default)
[2026-01-31T08:53:00.833Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:53:01.051Z] [BOT] ✅ Posted message: Field Geologist @ ORG_3c8e259b in #💻・tech-jobs
  ✅ Industry: Field Geologist @ ORG_3c8e259b
[2026-01-31T08:53:01.051Z] [BOT] 💾 Added channel posting: Field Geologist @ ORG_3c8e259b → category channel (1 total channels)
[2026-01-31T08:53:01.051Z] [BOT] 💾 BEFORE MERGE: 985 jobs in memory (cached)
[2026-01-31T08:53:01.078Z] [BOT] ✅ Loaded V2 database: 984 jobs
💾 DISK STATE: 984 jobs on disk
[2026-01-31T08:53:01.078Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=985
[2026-01-31T08:53:01.081Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 985 jobs (merged disk + memory)
[2026-01-31T08:53:01.081Z] [BOT] ✅ No jobs to archive (all 985 jobs within 7-day window)
[2026-01-31T08:53:01.146Z] [BOT] 💾 Saved posted_jobs.json: 985 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:53:02.839Z] [BOT] ✅ Posted message: Field Geologist @ ORG_3c8e259b in #🗽・JID_98d4f0de
[2026-01-31T08:53:02.839Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T08:53:02.839Z] [BOT] 💾 Added channel posting: Field Geologist @ ORG_3c8e259b → location channel (2 total channels)
[2026-01-31T08:53:02.839Z] [BOT] 💾 BEFORE MERGE: 985 jobs in memory (cached)
[2026-01-31T08:53:02.866Z] [BOT] ✅ Loaded V2 database: 985 jobs
💾 DISK STATE: 985 jobs on disk
[2026-01-31T08:53:02.866Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=985
[2026-01-31T08:53:02.868Z] [BOT] 🔀 Deep merged: Field Geologist @ ORG_3c8e259b (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T08:53:02.868Z] [BOT] 💾 AFTER MERGE: 985 jobs (merged disk + memory)
[2026-01-31T08:53:02.869Z] [BOT] ✅ No jobs to archive (all 985 jobs within 7-day window)
[2026-01-31T08:53:02.934Z] [BOT] 💾 Saved posted_jobs.json: 985 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:53:04.436Z] [BOT] 📍 [ROUTING] "Software Development Engineer - Amazon Leo - US" @ ORG_49d2dc07
   Category: TECH (matched: "software")
[2026-01-31T08:53:04.436Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:53:04.803Z] [BOT] ✅ Posted message: Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07
[2026-01-31T08:53:04.803Z] [BOT] 💾 Added channel posting: Software Development Engineer - Amazon Leo - US @ ORG_49d2dc07 → category channel (1 total channels)
[2026-01-31T08:53:04.803Z] [BOT] 💾 BEFORE MERGE: 986 jobs in memory (cached)
[2026-01-31T08:53:04.831Z] [BOT] ✅ Loaded V2 database: 985 jobs
💾 DISK STATE: 985 jobs on disk
[2026-01-31T08:53:04.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=986
[2026-01-31T08:53:04.834Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:53:04.834Z] [BOT] 💾 AFTER MERGE: 986 jobs (merged disk + memory)
[2026-01-31T08:53:04.834Z] [BOT] ✅ No jobs to archive (all 986 jobs within 7-day window)
[2026-01-31T08:53:04.907Z] [BOT] 💾 Saved posted_jobs.json: 986 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:53:09.410Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T08:53:09.411Z] [BOT] 📍 [ROUTING] "AI/ML Engineer" @ ORG_e4e67255
   Category: AI (matched: "machine learning")
[2026-01-31T08:53:09.411Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T08:53:09.734Z] [BOT] ✅ Posted message: AI/ML Engineer @ ORG_e4e67255 in #🤖・ai-jobs
  ✅ Industry: AI/ML Engineer @ ORG_e4e67255
[2026-01-31T08:53:09.735Z] [BOT] 💾 Added channel posting: AI/ML Engineer @ ORG_e4e67255 → category channel (1 total channels)
[2026-01-31T08:53:09.735Z] [BOT] 💾 BEFORE MERGE: 987 jobs in memory (cached)
[2026-01-31T08:53:09.762Z] [BOT] ✅ Loaded V2 database: 986 jobs
💾 DISK STATE: 986 jobs on disk
[2026-01-31T08:53:09.763Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=987
[2026-01-31T08:53:09.765Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 987 jobs (merged disk + memory)
[2026-01-31T08:53:09.765Z] [BOT] ✅ No jobs to archive (all 987 jobs within 7-day window)
[2026-01-31T08:53:09.838Z] [BOT] 💾 Saved posted_jobs.json: 987 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:53:11.339Z] [BOT] 📍 [ROUTING] "Data Annotation - QC and Crawling - Spanish and Portuguese" @ ORG_68dd70b6 Ai
[2026-01-31T08:53:11.339Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T08:53:11.515Z] [BOT] ✅ Posted message: Data Annotation - QC and Crawling - Spanish and Portuguese @ ORG_68dd70b6 Ai in #🤖・ai-jobs
[2026-01-31T08:53:11.515Z] [BOT] ✅ Industry: Data Annotation - QC and Crawling - Spanish and Portuguese @ ORG_68dd70b6 Ai
[2026-01-31T08:53:11.515Z] [BOT] 💾 Added channel posting: Data Annotation - QC and Crawling - Spanish and Portuguese @ ORG_68dd70b6 Ai → category channel (1 total channels)
[2026-01-31T08:53:11.516Z] [BOT] 💾 BEFORE MERGE: 988 jobs in memory (cached)
[2026-01-31T08:53:11.542Z] [BOT] ✅ Loaded V2 database: 987 jobs
💾 DISK STATE: 987 jobs on disk
[2026-01-31T08:53:11.542Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=988
[2026-01-31T08:53:11.544Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 988 jobs (merged disk + memory)
[2026-01-31T08:53:11.545Z] [BOT] ✅ No jobs to archive (all 988 jobs within 7-day window)
[2026-01-31T08:53:11.619Z] [BOT] 💾 Saved posted_jobs.json: 988 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:53:16.121Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T08:53:16.122Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e3128470-northrop_grumm..." not found, but found as SHA256 "0d1aed8c45906366"
[2026-01-31T08:53:16.123Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_80e71729-analytics_r10217513 (posted within 7 days)
[2026-01-31T08:53:16.123Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_34ee3a7a..." not found, but found as SHA256 "480f199bcb829b6d"
⏭️  Skipping duplicate: JID_34ee3a7a (posted within 7 days)
[2026-01-31T08:53:16.123Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f15c7021..." not found, but found as SHA256 "dd710b5a130bf352"
[2026-01-31T08:53:16.123Z] [BOT] ⏭️  Skipping duplicate: JID_76a0c247-i_253496 (posted within 7 days)
[2026-01-31T08:53:16.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "3b0c11156387a6be"
⏭️  Skipping duplicate: JID_c78ce377-2026_jr2010161 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_83306ad4..." not found, but found as SHA256 "53db1ad06d52955f"
⏭️  Skipping duplicate: JID_abdacdd5-_jr1078475 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ce975d5d..." not found, but found as SHA256 "f377c4a95858231b"
⏭️  Skipping duplicate: JID_60fbf9d1-engineer_r10000621 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b1fef101..." not found, but found as SHA256 "75773b6274f4cf6a"
⏭️  Skipping duplicate: JID_26d26452-science_2023968 (posted within 7 days)
[2026-01-31T08:53:16.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f063956a..." not found, but found as SHA256 "79ad098617be1571"
⏭️  Skipping duplicate: JID_646bc27b-cx_1-job-36628 (posted within 7 days)
[2026-01-31T08:53:16.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f3e18c5f..." not found, but found as SHA256 "b5d7ca7be935a267"
[2026-01-31T08:53:16.124Z] [BOT] ⏭️  Skipping duplicate: JID_2e680245 (posted within 7 days)
[2026-01-31T08:53:16.124Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b3f2068b..." not found, but found as SHA256 "cb3509e2bf972269"
[2026-01-31T08:53:16.124Z] [BOT] ⏭️  Skipping duplicate: JID_daf51d5e (posted within 7 days)
[2026-01-31T08:53:16.279Z] [BOT] ✅ Loaded pending queue: 2955 total (1958 pending, 48 enriched, 949 posted)
[2026-01-31T08:53:16.458Z] [BOT] ✅ Saved pending queue: 2955 total (1958 pending, 38 enriched, 959 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T08:53:16.552Z] [BOT] 📂 Loaded 11040 existing routing entries
[2026-01-31T08:53:16.666Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11050
   Timestamp: 2026-01-31T08:53:16.628Z
[2026-01-31T08:53:16.667Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T08:53:16.667Z] [BOT] Total attempts: 31
   Successful: 15
   Failed: 0
   Skipped: 16
[2026-01-31T08:53:16.667Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T08:53:16.667Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🗽・JID_98d4f0de: 5 posts
[2026-01-31T08:53:16.668Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 988 jobs in memory (cached)
[2026-01-31T08:53:16.696Z] [BOT] ✅ Loaded V2 database: 988 jobs
💾 DISK STATE: 988 jobs on disk
[2026-01-31T08:53:16.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=988
[2026-01-31T08:53:16.698Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:53:16.698Z] [BOT] 💾 AFTER MERGE: 988 jobs (merged disk + memory)
[2026-01-31T08:53:16.699Z] [BOT] ✅ No jobs to archive (all 988 jobs within 7-day window)
[2026-01-31T08:53:16.774Z] [BOT] 💾 Saved posted_jobs.json: 988 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T08:53:18.795Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3702) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*