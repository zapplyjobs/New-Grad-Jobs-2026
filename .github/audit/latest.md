# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T12:34:45.055Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T12:34:12.031Z] ========================================
[2026-01-31T12:34:12.033Z] Discord Bot Execution Log
[2026-01-31T12:34:12.033Z] Environment: GitHub Actions
[2026-01-31T12:34:12.033Z] Node Version: v20.20.0
[2026-01-31T12:34:12.033Z] ========================================
[2026-01-31T12:34:12.033Z] Environment Variables Check:
[2026-01-31T12:34:12.033Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T12:34:12.033Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.033Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T12:34:12.033Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T12:34:12.033Z] 
Multi-Channel Configuration:
[2026-01-31T12:34:12.033Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T12:34:12.034Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T12:34:12.034Z] 
Data Files Check:
[2026-01-31T12:34:12.035Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T12:34:12.069Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7035627 bytes)
[2026-01-31T12:34:12.069Z] 
========================================
[2026-01-31T12:34:12.069Z] Starting Enhanced Discord Bot...
[2026-01-31T12:34:12.069Z] ========================================
[2026-01-31T12:34:12.623Z] [BOT] ✅ Loaded V2 database: 1126 jobs
[2026-01-31T12:34:13.332Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T12:34:13.332Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T12:34:13.333Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T12:34:13.446Z] [BOT] ✅ Loaded pending queue: 2951 total (1804 pending, 50 enriched, 1097 posted)
[2026-01-31T12:34:13.447Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T12:34:13.448Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T12:34:13.448Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T12:34:13.448Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T12:34:13.448Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T12:34:13.448Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T12:34:13.449Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T12:34:13.449Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T12:34:13.449Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T12:34:13.449Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T12:34:13.449Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T12:34:13.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T12:34:13.450Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T12:34:13.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T12:34:13.450Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T12:34:13.450Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T12:34:13.450Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T12:34:13.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T12:34:13.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T12:34:13.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
[2026-01-31T12:34:13.451Z] [BOT] ⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T12:34:13.451Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T12:34:13.452Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T12:34:13.459Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T12:34:13.459Z] [BOT] 🚫 Skipping blacklisted job: Community Experiences Manager at figma
[2026-01-31T12:34:13.563Z] [BOT] ✅ Loaded pending queue: 2951 total (1804 pending, 50 enriched, 1097 posted)
[2026-01-31T12:34:13.754Z] [BOT] ✅ Saved pending queue: 2950 total (1804 pending, 49 enriched, 1097 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T12:34:13.754Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T12:34:13.754Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T12:34:13.755Z] [BOT] 📋 After multi-location grouping: 35 unique jobs to post
[2026-01-31T12:34:13.755Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T12:34:13.758Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T12:34:13.759Z] [BOT] 📍 [ROUTING] "Analytics/Dashboarding Analyst - Ada" @ ORG_434be781
[2026-01-31T12:34:13.759Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T12:34:13.776Z] [BOT ERROR] (node:3299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T12:34:14.014Z] [BOT] ✅ Posted message: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 in #📊・JID_fb739488
  ✅ Industry: Analytics/Dashboarding Analyst - Ada @ ORG_434be781
[2026-01-31T12:34:14.015Z] [BOT] 💾 Added channel posting: Analytics/Dashboarding Analyst - Ada @ ORG_434be781 → category channel (1 total channels)
[2026-01-31T12:34:14.016Z] [BOT] 💾 BEFORE MERGE: 1127 jobs in memory (cached)
[2026-01-31T12:34:14.043Z] [BOT] ✅ Loaded V2 database: 1126 jobs
💾 DISK STATE: 1126 jobs on disk
[2026-01-31T12:34:14.043Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1127
[2026-01-31T12:34:14.046Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:34:14.046Z] [BOT] 💾 AFTER MERGE: 1127 jobs (merged disk + memory)
[2026-01-31T12:34:14.047Z] [BOT] ✅ No jobs to archive (all 1127 jobs within 7-day window)
[2026-01-31T12:34:14.129Z] [BOT] 💾 Saved posted_jobs.json: 1127 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:18.632Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T12:34:18.633Z] [BOT] 📍 [ROUTING] "Data Collections Specialist" @ ORG_0aa5052d State University (LSU)
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:34:19.032Z] [BOT] ✅ Posted message: Data Collections Specialist @ ORG_0aa5052d State University (LSU) in #💻・tech-jobs
[2026-01-31T12:34:19.033Z] [BOT] ✅ Industry: Data Collections Specialist @ ORG_0aa5052d State University (LSU)
[2026-01-31T12:34:19.033Z] [BOT] 💾 Added channel posting: Data Collections Specialist @ ORG_0aa5052d State University (LSU) → category channel (1 total channels)
[2026-01-31T12:34:19.033Z] [BOT] 💾 BEFORE MERGE: 1128 jobs in memory (cached)
[2026-01-31T12:34:19.054Z] [BOT] ✅ Loaded V2 database: 1127 jobs
💾 DISK STATE: 1127 jobs on disk
[2026-01-31T12:34:19.054Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1128
[2026-01-31T12:34:19.056Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1128 jobs (merged disk + memory)
[2026-01-31T12:34:19.057Z] [BOT] ✅ No jobs to archive (all 1128 jobs within 7-day window)
[2026-01-31T12:34:19.126Z] [BOT] 💾 Saved posted_jobs.json: 1128 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:20.628Z] [BOT] 📍 [ROUTING] "Custom Application Engineer" @ ORG_cb844c98 Technologies
[2026-01-31T12:34:20.629Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:34:20.934Z] [BOT] ✅ Posted message: Custom Application Engineer @ ORG_cb844c98 Technologies in #💻・tech-jobs
[2026-01-31T12:34:20.934Z] [BOT] ✅ Industry: Custom Application Engineer @ ORG_cb844c98 Technologies
[2026-01-31T12:34:20.934Z] [BOT] 💾 Added channel posting: Custom Application Engineer @ ORG_cb844c98 Technologies → category channel (1 total channels)
[2026-01-31T12:34:20.934Z] [BOT] 💾 BEFORE MERGE: 1129 jobs in memory (cached)
[2026-01-31T12:34:20.954Z] [BOT] ✅ Loaded V2 database: 1128 jobs
💾 DISK STATE: 1128 jobs on disk
[2026-01-31T12:34:20.955Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1129
[2026-01-31T12:34:20.957Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:34:20.958Z] [BOT] 💾 AFTER MERGE: 1129 jobs (merged disk + memory)
[2026-01-31T12:34:20.959Z] [BOT] ✅ No jobs to archive (all 1129 jobs within 7-day window)
[2026-01-31T12:34:21.025Z] [BOT] 💾 Saved posted_jobs.json: 1129 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:22.527Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend - Platform" @ ORG_9ee5b96f
[2026-01-31T12:34:22.527Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:34:22.701Z] [BOT] ✅ Posted message: Software Engineer - Backend - Platform @ ORG_9ee5b96f in #💻・tech-jobs
[2026-01-31T12:34:22.701Z] [BOT] ✅ Industry: Software Engineer - Backend - Platform @ ORG_9ee5b96f
[2026-01-31T12:34:22.701Z] [BOT] 💾 Added channel posting: Software Engineer - Backend - Platform @ ORG_9ee5b96f → category channel (1 total channels)
[2026-01-31T12:34:22.701Z] [BOT] 💾 BEFORE MERGE: 1130 jobs in memory (cached)
[2026-01-31T12:34:22.723Z] [BOT] ✅ Loaded V2 database: 1129 jobs
💾 DISK STATE: 1129 jobs on disk
[2026-01-31T12:34:22.724Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1130
[2026-01-31T12:34:22.726Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:34:22.726Z] [BOT] 💾 AFTER MERGE: 1130 jobs (merged disk + memory)
[2026-01-31T12:34:22.727Z] [BOT] ✅ No jobs to archive (all 1130 jobs within 7-day window)
[2026-01-31T12:34:22.814Z] [BOT] 💾 Saved posted_jobs.json: 1130 active jobs
[2026-01-31T12:34:22.815Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:24.316Z] [BOT] 📍 [ROUTING] "Software Engineer - Perception Infrastructure" @ pony.ai
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:34:24.542Z] [BOT] ✅ Posted message: Software Engineer - Perception Infrastructure @ pony.ai in #💻・tech-jobs
  ✅ Industry: Software Engineer - Perception Infrastructure @ pony.ai
[2026-01-31T12:34:24.542Z] [BOT] 💾 Added channel posting: Software Engineer - Perception Infrastructure @ pony.ai → category channel (1 total channels)
[2026-01-31T12:34:24.543Z] [BOT] 💾 BEFORE MERGE: 1131 jobs in memory (cached)
[2026-01-31T12:34:24.563Z] [BOT] ✅ Loaded V2 database: 1130 jobs
💾 DISK STATE: 1130 jobs on disk
[2026-01-31T12:34:24.563Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1131
[2026-01-31T12:34:24.566Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:34:24.566Z] [BOT] 💾 AFTER MERGE: 1131 jobs (merged disk + memory)
[2026-01-31T12:34:24.567Z] [BOT] ✅ No jobs to archive (all 1131 jobs within 7-day window)
[2026-01-31T12:34:24.630Z] [BOT] 💾 Saved posted_jobs.json: 1131 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:29.132Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T12:34:29.133Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_2ea541c5
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T12:34:29.133Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T12:34:29.476Z] [BOT] ✅ Posted message: Data Analyst @ ORG_2ea541c5 in #🤖・ai-jobs
  ✅ Industry: Data Analyst @ ORG_2ea541c5
[2026-01-31T12:34:29.476Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_2ea541c5 → category channel (1 total channels)
[2026-01-31T12:34:29.476Z] [BOT] 💾 BEFORE MERGE: 1132 jobs in memory (cached)
[2026-01-31T12:34:29.498Z] [BOT] ✅ Loaded V2 database: 1131 jobs
💾 DISK STATE: 1131 jobs on disk
[2026-01-31T12:34:29.498Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1132
[2026-01-31T12:34:29.500Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:34:29.500Z] [BOT] 💾 AFTER MERGE: 1132 jobs (merged disk + memory)
[2026-01-31T12:34:29.501Z] [BOT] ✅ No jobs to archive (all 1132 jobs within 7-day window)
[2026-01-31T12:34:29.568Z] [BOT] 💾 Saved posted_jobs.json: 1132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:31.070Z] [BOT] 📍 [ROUTING] "Data Science Level 2 - Advanced AI - NLP" @ ORG_a6a32dbc
   Category: AI (matched: "machine learning")
[2026-01-31T12:34:31.070Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T12:34:31.288Z] [BOT] ✅ Posted message: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc in #🤖・ai-jobs
  ✅ Industry: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc
[2026-01-31T12:34:31.289Z] [BOT] 💾 Added channel posting: Data Science Level 2 - Advanced AI - NLP @ ORG_a6a32dbc → category channel (1 total channels)
💾 BEFORE MERGE: 1133 jobs in memory (cached)
[2026-01-31T12:34:31.309Z] [BOT] ✅ Loaded V2 database: 1132 jobs
💾 DISK STATE: 1132 jobs on disk
[2026-01-31T12:34:31.309Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1133
[2026-01-31T12:34:31.312Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1133 jobs (merged disk + memory)
[2026-01-31T12:34:31.312Z] [BOT] ✅ No jobs to archive (all 1133 jobs within 7-day window)
[2026-01-31T12:34:31.379Z] [BOT] 💾 Saved posted_jobs.json: 1133 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:32.881Z] [BOT] 📍 [ROUTING] "Cryptoanalyst Level 2 - CCA allowed" @ ORG_a6a32dbc
[2026-01-31T12:34:32.881Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-31T12:34:33.072Z] [BOT] ✅ Posted message: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc in #🤖・ai-jobs
[2026-01-31T12:34:33.073Z] [BOT] ✅ Industry: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc
[2026-01-31T12:34:33.073Z] [BOT] 💾 Added channel posting: Cryptoanalyst Level 2 - CCA allowed @ ORG_a6a32dbc → category channel (1 total channels)
💾 BEFORE MERGE: 1134 jobs in memory (cached)
[2026-01-31T12:34:33.093Z] [BOT] ✅ Loaded V2 database: 1133 jobs
💾 DISK STATE: 1133 jobs on disk
[2026-01-31T12:34:33.094Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1134
[2026-01-31T12:34:33.096Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1134 jobs (merged disk + memory)
[2026-01-31T12:34:33.097Z] [BOT] ✅ No jobs to archive (all 1134 jobs within 7-day window)
[2026-01-31T12:34:33.160Z] [BOT] 💾 Saved posted_jobs.json: 1134 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:34.662Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_655fad25
[2026-01-31T12:34:34.662Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T12:34:34.869Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_655fad25 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 1 @ ORG_655fad25
[2026-01-31T12:34:34.869Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_655fad25 → category channel (1 total channels)
[2026-01-31T12:34:34.870Z] [BOT] 💾 BEFORE MERGE: 1135 jobs in memory (cached)
[2026-01-31T12:34:34.891Z] [BOT] ✅ Loaded V2 database: 1134 jobs
💾 DISK STATE: 1134 jobs on disk
[2026-01-31T12:34:34.891Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1135
[2026-01-31T12:34:34.893Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1135 jobs (merged disk + memory)
[2026-01-31T12:34:34.894Z] [BOT] ✅ No jobs to archive (all 1135 jobs within 7-day window)
[2026-01-31T12:34:34.961Z] [BOT] 💾 Saved posted_jobs.json: 1135 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:36.463Z] [BOT] 📍 [ROUTING] "Research Scientist" @ ORG_72fd3ae0
   Category: AI (matched: "machine learning")
[2026-01-31T12:34:36.463Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T12:34:36.662Z] [BOT] ✅ Posted message: Research Scientist @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-31T12:34:36.662Z] [BOT] ✅ Industry: Research Scientist @ ORG_72fd3ae0
[2026-01-31T12:34:36.662Z] [BOT] 💾 Added channel posting: Research Scientist @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T12:34:36.662Z] [BOT] 💾 BEFORE MERGE: 1136 jobs in memory (cached)
[2026-01-31T12:34:36.683Z] [BOT] ✅ Loaded V2 database: 1135 jobs
💾 DISK STATE: 1135 jobs on disk
[2026-01-31T12:34:36.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1136
[2026-01-31T12:34:36.685Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1136 jobs (merged disk + memory)
[2026-01-31T12:34:36.686Z] [BOT] ✅ No jobs to archive (all 1136 jobs within 7-day window)
[2026-01-31T12:34:36.749Z] [BOT] 💾 Saved posted_jobs.json: 1136 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:41.251Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T12:34:41.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_67b6a3c8..." not found, but found as SHA256 "baaef47f3bdcb26f"
[2026-01-31T12:34:41.252Z] [BOT] ⏭️  Skipping duplicate: JID_a87be6c2-_r175222-1 (posted within 7 days)
[2026-01-31T12:34:41.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2a6327b9..." not found, but found as SHA256 "5bc3867d3ea22365"
⏭️  Skipping duplicate: JID_e6dfcdcd-specialist_r00111435-1 (posted within 7 days)
[2026-01-31T12:34:41.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f9723724-..." not found, but found as SHA256 "da73ee4699612c12"
⏭️  Skipping duplicate: JID_4d0b0565 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_23d998fc-..." not found, but found as SHA256 "f11ca14be03c9656"
⏭️  Skipping duplicate: JID_48554ca9 (posted within 7 days)
[2026-01-31T12:34:41.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_719b1e8c..." not found, but found as SHA256 "000af5dcc6818248"
⏭️  Skipping duplicate: JID_e093c9c0 (posted within 7 days)
[2026-01-31T12:34:41.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6cc8d596..." not found, but found as SHA256 "41f5e48273849e73"
⏭️  Skipping duplicate: JID_7efa0dae (posted within 7 days)
[2026-01-31T12:34:41.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aecb809f..." not found, but found as SHA256 "17c9dc3acb5eaa57"
⏭️  Skipping duplicate: JID_e9645df1 (posted within 7 days)
[2026-01-31T12:34:41.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eb63af55..." not found, but found as SHA256 "4fb51227a6e38440"
⏭️  Skipping duplicate: JID_57002500 (posted within 7 days)
[2026-01-31T12:34:41.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7bb99766..." not found, but found as SHA256 "0f55486b316afe4a"
⏭️  Skipping duplicate: JID_53e0b423 (posted within 7 days)
[2026-01-31T12:34:41.254Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "ce87dced85d0134f"
[2026-01-31T12:34:41.254Z] [BOT] ⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_ca9e8846-scientist_r163076 (posted within 7 days)
[2026-01-31T12:34:41.367Z] [BOT] ✅ Loaded pending queue: 2950 total (1804 pending, 49 enriched, 1097 posted)
[2026-01-31T12:34:41.553Z] [BOT] ✅ Saved pending queue: 2950 total (1804 pending, 39 enriched, 1107 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T12:34:41.553Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T12:34:41.638Z] [BOT] 📂 Loaded 11188 existing routing entries
[2026-01-31T12:34:41.759Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11198
   Timestamp: 2026-01-31T12:34:41.715Z
[2026-01-31T12:34:41.767Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1136 jobs in memory (cached)
[2026-01-31T12:34:41.796Z] [BOT] ✅ Loaded V2 database: 1136 jobs
[2026-01-31T12:34:41.796Z] [BOT] 💾 DISK STATE: 1136 jobs on disk
[2026-01-31T12:34:41.797Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1136
[2026-01-31T12:34:41.800Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:34:41.800Z] [BOT] 💾 AFTER MERGE: 1136 jobs (merged disk + memory)
[2026-01-31T12:34:41.801Z] [BOT] ✅ No jobs to archive (all 1136 jobs within 7-day window)
[2026-01-31T12:34:41.866Z] [BOT] 💾 Saved posted_jobs.json: 1136 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:34:41.866Z] [BOT] ✅ Database saved successfully
[2026-01-31T12:34:43.894Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*