# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T17:04:37.260Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T17:03:59.506Z] ========================================
[2026-01-31T17:03:59.508Z] Discord Bot Execution Log
[2026-01-31T17:03:59.508Z] Environment: GitHub Actions
[2026-01-31T17:03:59.508Z] Node Version: v20.20.0
[2026-01-31T17:03:59.508Z] ========================================
[2026-01-31T17:03:59.508Z] Environment Variables Check:
[2026-01-31T17:03:59.508Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T17:03:59.508Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.508Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T17:03:59.509Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T17:03:59.509Z] 
Multi-Channel Configuration:
[2026-01-31T17:03:59.509Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T17:03:59.509Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T17:03:59.509Z] 
Data Files Check:
[2026-01-31T17:03:59.510Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T17:03:59.547Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7842050 bytes)
[2026-01-31T17:03:59.547Z] 
========================================
[2026-01-31T17:03:59.547Z] Starting Enhanced Discord Bot...
[2026-01-31T17:03:59.547Z] ========================================
[2026-01-31T17:04:00.102Z] [BOT] ✅ Loaded V2 database: 1267 jobs
[2026-01-31T17:04:00.488Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T17:04:00.488Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T17:04:00.489Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T17:04:00.603Z] [BOT] ✅ Loaded pending queue: 2946 total (1649 pending, 50 enriched, 1247 posted)
[2026-01-31T17:04:00.603Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:04:00.604Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T17:04:00.604Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T17:04:00.604Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T17:04:00.605Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T17:04:00.605Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T17:04:00.605Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T17:04:00.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T17:04:00.606Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T17:04:00.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T17:04:00.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T17:04:00.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-31T17:04:00.607Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T17:04:00.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T17:04:00.607Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T17:04:00.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T17:04:00.607Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T17:04:00.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T17:04:00.608Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T17:04:00.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T17:04:00.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T17:04:00.609Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T17:04:00.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T17:04:00.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T17:04:00.618Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T17:04:00.618Z] [BOT] 🚫 Skipping blacklisted job: Sr. Director, Integrated Marketing at gohighlevel
[2026-01-31T17:04:00.718Z] [BOT] ✅ Loaded pending queue: 2946 total (1649 pending, 50 enriched, 1247 posted)
[2026-01-31T17:04:00.918Z] [BOT] ✅ Saved pending queue: 2945 total (1649 pending, 49 enriched, 1247 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T17:04:00.918Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T17:04:00.918Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T17:04:00.919Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-01-31T17:04:00.919Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T17:04:00.922Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T17:04:00.923Z] [BOT] 📍 [ROUTING] "AIML Triage Engineer - Machine Learning Platform and Technologies" @ ORG_f223faa9
[2026-01-31T17:04:00.923Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T17:04:00.923Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T17:04:00.941Z] [BOT ERROR] (node:2945) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T17:04:01.367Z] [BOT] ✅ Posted message: AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9 in #🤖・ai-jobs
[2026-01-31T17:04:01.368Z] [BOT] ✅ Industry: AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9
[2026-01-31T17:04:01.369Z] [BOT] 💾 Added channel posting: AIML Triage Engineer - Machine Learning Platform and Technologies @ ORG_f223faa9 → category channel (1 total channels)
[2026-01-31T17:04:01.369Z] [BOT] 💾 BEFORE MERGE: 1268 jobs in memory (cached)
[2026-01-31T17:04:01.395Z] [BOT] ✅ Loaded V2 database: 1267 jobs
💾 DISK STATE: 1267 jobs on disk
[2026-01-31T17:04:01.396Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1268
[2026-01-31T17:04:01.399Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:04:01.399Z] [BOT] 💾 AFTER MERGE: 1268 jobs (merged disk + memory)
[2026-01-31T17:04:01.400Z] [BOT] ✅ No jobs to archive (all 1268 jobs within 7-day window)
[2026-01-31T17:04:01.480Z] [BOT] 💾 Saved posted_jobs.json: 1268 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:05.984Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T17:04:05.985Z] [BOT] 📍 [ROUTING] "Software Engineer - Swe1 or Swe2 - United States" @ ORG_a032fda9
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:06.333Z] [BOT] ✅ Posted message: Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9 in #💻・tech-jobs
[2026-01-31T17:04:06.333Z] [BOT] ✅ Industry: Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9
[2026-01-31T17:04:06.334Z] [BOT] 💾 Added channel posting: Software Engineer - Swe1 or Swe2 - United States @ ORG_a032fda9 → category channel (1 total channels)
[2026-01-31T17:04:06.334Z] [BOT] 💾 BEFORE MERGE: 1269 jobs in memory (cached)
[2026-01-31T17:04:06.356Z] [BOT] ✅ Loaded V2 database: 1268 jobs
💾 DISK STATE: 1268 jobs on disk
[2026-01-31T17:04:06.357Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1269
[2026-01-31T17:04:06.360Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1269 jobs (merged disk + memory)
[2026-01-31T17:04:06.360Z] [BOT] ✅ No jobs to archive (all 1269 jobs within 7-day window)
[2026-01-31T17:04:06.434Z] [BOT] 💾 Saved posted_jobs.json: 1269 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:07.936Z] [BOT] 📍 [ROUTING] "Software Development" @ ORG_509c517e
   Category: TECH (matched: "software")
[2026-01-31T17:04:07.936Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:08.143Z] [BOT] ✅ Posted message: Software Development @ ORG_509c517e in #💻・tech-jobs
[2026-01-31T17:04:08.144Z] [BOT] ✅ Industry: Software Development @ ORG_509c517e
[2026-01-31T17:04:08.144Z] [BOT] 💾 Added channel posting: Software Development @ ORG_509c517e → category channel (1 total channels)
[2026-01-31T17:04:08.144Z] [BOT] 💾 BEFORE MERGE: 1270 jobs in memory (cached)
[2026-01-31T17:04:08.167Z] [BOT] ✅ Loaded V2 database: 1269 jobs
💾 DISK STATE: 1269 jobs on disk
[2026-01-31T17:04:08.167Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1270
[2026-01-31T17:04:08.170Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:04:08.170Z] [BOT] 💾 AFTER MERGE: 1270 jobs (merged disk + memory)
[2026-01-31T17:04:08.171Z] [BOT] ✅ No jobs to archive (all 1270 jobs within 7-day window)
[2026-01-31T17:04:08.245Z] [BOT] 💾 Saved posted_jobs.json: 1270 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:09.910Z] [BOT] ✅ Posted message: Software Development @ ORG_509c517e in #🏠・JID_ead674af
[2026-01-31T17:04:09.910Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T17:04:09.911Z] [BOT] 💾 Added channel posting: Software Development @ ORG_509c517e → location channel (2 total channels)
💾 BEFORE MERGE: 1270 jobs in memory (cached)
[2026-01-31T17:04:09.933Z] [BOT] ✅ Loaded V2 database: 1270 jobs
💾 DISK STATE: 1270 jobs on disk
[2026-01-31T17:04:09.933Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1270
[2026-01-31T17:04:09.936Z] [BOT] 🔀 Deep merged: Software Development @ ORG_509c517e (disk: 1 channels → merged: 2 channels)
[2026-01-31T17:04:09.936Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1270 jobs (merged disk + memory)
[2026-01-31T17:04:09.937Z] [BOT] ✅ No jobs to archive (all 1270 jobs within 7-day window)
[2026-01-31T17:04:10.006Z] [BOT] 💾 Saved posted_jobs.json: 1270 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:11.508Z] [BOT] 📍 [ROUTING] "Associate Software Engineer - Data Engineering" @ ORG_2bc58fcc League Baseball
   Category: TECH (matched: "software")
[2026-01-31T17:04:11.508Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:11.681Z] [BOT] ✅ Posted message: Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball
[2026-01-31T17:04:11.682Z] [BOT] 💾 Added channel posting: Associate Software Engineer - Data Engineering @ ORG_2bc58fcc League Baseball → category channel (1 total channels)
💾 BEFORE MERGE: 1271 jobs in memory (cached)
[2026-01-31T17:04:11.705Z] [BOT] ✅ Loaded V2 database: 1270 jobs
💾 DISK STATE: 1270 jobs on disk
[2026-01-31T17:04:11.705Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1271
[2026-01-31T17:04:11.708Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1271 jobs (merged disk + memory)
[2026-01-31T17:04:11.709Z] [BOT] ✅ No jobs to archive (all 1271 jobs within 7-day window)
[2026-01-31T17:04:11.799Z] [BOT] 💾 Saved posted_jobs.json: 1271 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:13.297Z] [BOT] 📍 [ROUTING] "Data Labeler" @ ORG_1f5be668
[2026-01-31T17:04:13.297Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:13.476Z] [BOT] ✅ Posted message: Data Labeler @ ORG_1f5be668 in #💻・tech-jobs
[2026-01-31T17:04:13.476Z] [BOT] ✅ Industry: Data Labeler @ ORG_1f5be668
[2026-01-31T17:04:13.477Z] [BOT] 💾 Added channel posting: Data Labeler @ ORG_1f5be668 → category channel (1 total channels)
[2026-01-31T17:04:13.477Z] [BOT] 💾 BEFORE MERGE: 1272 jobs in memory (cached)
[2026-01-31T17:04:13.499Z] [BOT] ✅ Loaded V2 database: 1271 jobs
💾 DISK STATE: 1271 jobs on disk
[2026-01-31T17:04:13.499Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1272
[2026-01-31T17:04:13.502Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1272 jobs (merged disk + memory)
[2026-01-31T17:04:13.502Z] [BOT] ✅ No jobs to archive (all 1272 jobs within 7-day window)
[2026-01-31T17:04:13.576Z] [BOT] 💾 Saved posted_jobs.json: 1272 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:15.079Z] [BOT] 📍 [ROUTING] "Emerging Talent Software Engineers" @ ORG_569ec613 Morgan Chase
[2026-01-31T17:04:15.079Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:15.322Z] [BOT] ✅ Posted message: Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
[2026-01-31T17:04:15.322Z] [BOT] ✅ Industry: Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase
[2026-01-31T17:04:15.322Z] [BOT] 💾 Added channel posting: Emerging Talent Software Engineers @ ORG_569ec613 Morgan Chase → category channel (1 total channels)
[2026-01-31T17:04:15.322Z] [BOT] 💾 BEFORE MERGE: 1273 jobs in memory (cached)
[2026-01-31T17:04:15.344Z] [BOT] ✅ Loaded V2 database: 1272 jobs
💾 DISK STATE: 1272 jobs on disk
[2026-01-31T17:04:15.345Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1273
[2026-01-31T17:04:15.347Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1273 jobs (merged disk + memory)
[2026-01-31T17:04:15.348Z] [BOT] ✅ No jobs to archive (all 1273 jobs within 7-day window)
[2026-01-31T17:04:15.422Z] [BOT] 💾 Saved posted_jobs.json: 1273 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:16.923Z] [BOT] 📍 [ROUTING] "Graduate Software Engineer" @ ORG_cff1e0b2
[2026-01-31T17:04:16.923Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:17.145Z] [BOT] ✅ Posted message: Graduate Software Engineer @ ORG_cff1e0b2 in #💻・tech-jobs
[2026-01-31T17:04:17.145Z] [BOT] ✅ Industry: Graduate Software Engineer @ ORG_cff1e0b2
[2026-01-31T17:04:17.146Z] [BOT] 💾 Added channel posting: Graduate Software Engineer @ ORG_cff1e0b2 → category channel (1 total channels)
[2026-01-31T17:04:17.146Z] [BOT] 💾 BEFORE MERGE: 1274 jobs in memory (cached)
[2026-01-31T17:04:17.169Z] [BOT] ✅ Loaded V2 database: 1273 jobs
💾 DISK STATE: 1273 jobs on disk
[2026-01-31T17:04:17.169Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1274
[2026-01-31T17:04:17.171Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:04:17.171Z] [BOT] 💾 AFTER MERGE: 1274 jobs (merged disk + memory)
[2026-01-31T17:04:17.172Z] [BOT] ✅ No jobs to archive (all 1274 jobs within 7-day window)
[2026-01-31T17:04:17.247Z] [BOT] 💾 Saved posted_jobs.json: 1274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:20.784Z] [BOT] ✅ Posted message: Graduate Software Engineer @ ORG_cff1e0b2 in #🗽・JID_98d4f0de
[2026-01-31T17:04:20.784Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T17:04:20.784Z] [BOT] 💾 Added channel posting: Graduate Software Engineer @ ORG_cff1e0b2 → location channel (2 total channels)
[2026-01-31T17:04:20.784Z] [BOT] 💾 BEFORE MERGE: 1274 jobs in memory (cached)
[2026-01-31T17:04:20.807Z] [BOT] ✅ Loaded V2 database: 1274 jobs
💾 DISK STATE: 1274 jobs on disk
[2026-01-31T17:04:20.807Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1274
[2026-01-31T17:04:20.809Z] [BOT] 🔀 Deep merged: Graduate Software Engineer @ ORG_cff1e0b2 (disk: 1 channels → merged: 2 channels)
[2026-01-31T17:04:20.809Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1274 jobs (merged disk + memory)
[2026-01-31T17:04:20.810Z] [BOT] ✅ No jobs to archive (all 1274 jobs within 7-day window)
[2026-01-31T17:04:20.884Z] [BOT] 💾 Saved posted_jobs.json: 1274 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:22.386Z] [BOT] 📍 [ROUTING] "Data Center Network Modeling Technician 4" @ ORG_8d0003a5
[2026-01-31T17:04:22.386Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:22.555Z] [BOT] ✅ Posted message: Data Center Network Modeling Technician 4 @ ORG_8d0003a5 in #💻・tech-jobs
[2026-01-31T17:04:22.555Z] [BOT] ✅ Industry: Data Center Network Modeling Technician 4 @ ORG_8d0003a5
[2026-01-31T17:04:22.555Z] [BOT] 💾 Added channel posting: Data Center Network Modeling Technician 4 @ ORG_8d0003a5 → category channel (1 total channels)
[2026-01-31T17:04:22.555Z] [BOT] 💾 BEFORE MERGE: 1275 jobs in memory (cached)
[2026-01-31T17:04:22.577Z] [BOT] ✅ Loaded V2 database: 1274 jobs
💾 DISK STATE: 1274 jobs on disk
[2026-01-31T17:04:22.578Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1275
[2026-01-31T17:04:22.580Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:04:22.580Z] [BOT] 💾 AFTER MERGE: 1275 jobs (merged disk + memory)
[2026-01-31T17:04:22.581Z] [BOT] ✅ No jobs to archive (all 1275 jobs within 7-day window)
[2026-01-31T17:04:22.665Z] [BOT] 💾 Saved posted_jobs.json: 1275 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:24.166Z] [BOT] 📍 [ROUTING] "Application Support Engineer" @ ORG_6491c1f5
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T17:04:24.323Z] [BOT] ✅ Posted message: Application Support Engineer @ ORG_6491c1f5 in #💻・tech-jobs
  ✅ Industry: Application Support Engineer @ ORG_6491c1f5
[2026-01-31T17:04:24.323Z] [BOT] 💾 Added channel posting: Application Support Engineer @ ORG_6491c1f5 → category channel (1 total channels)
[2026-01-31T17:04:24.324Z] [BOT] 💾 BEFORE MERGE: 1276 jobs in memory (cached)
[2026-01-31T17:04:24.346Z] [BOT] ✅ Loaded V2 database: 1275 jobs
💾 DISK STATE: 1275 jobs on disk
[2026-01-31T17:04:24.347Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1276
[2026-01-31T17:04:24.349Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:04:24.349Z] [BOT] 💾 AFTER MERGE: 1276 jobs (merged disk + memory)
[2026-01-31T17:04:24.350Z] [BOT] ✅ No jobs to archive (all 1276 jobs within 7-day window)
[2026-01-31T17:04:24.423Z] [BOT] 💾 Saved posted_jobs.json: 1276 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:28.925Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T17:04:28.926Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ mthree
[2026-01-31T17:04:28.926Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T17:04:28.926Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T17:04:29.143Z] [BOT] ✅ Posted message: Junior Software Engineer @ mthree in #📊・JID_fb739488
  ✅ Industry: Junior Software Engineer @ mthree
[2026-01-31T17:04:29.144Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ mthree → category channel (1 total channels)
[2026-01-31T17:04:29.144Z] [BOT] 💾 BEFORE MERGE: 1277 jobs in memory (cached)
[2026-01-31T17:04:29.167Z] [BOT] ✅ Loaded V2 database: 1276 jobs
💾 DISK STATE: 1276 jobs on disk
[2026-01-31T17:04:29.167Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1277
[2026-01-31T17:04:29.170Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1277 jobs (merged disk + memory)
[2026-01-31T17:04:29.171Z] [BOT] ✅ No jobs to archive (all 1277 jobs within 7-day window)
[2026-01-31T17:04:29.255Z] [BOT] 💾 Saved posted_jobs.json: 1277 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:33.755Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T17:04:33.756Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77702840..." not found, but found as SHA256 "0153afa3bc758d79"
[2026-01-31T17:04:33.756Z] [BOT] ⏭️  Skipping duplicate: JID_77702840 (posted within 7 days)
[2026-01-31T17:04:33.756Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ead592db..." not found, but found as SHA256 "3b231e801ba52ad7"
[2026-01-31T17:04:33.757Z] [BOT] ⏭️  Skipping duplicate: JID_a33e4e1c (posted within 7 days)
[2026-01-31T17:04:33.757Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f822119f..." not found, but found as SHA256 "3421c935ea79855a"
⏭️  Skipping duplicate: JID_c4c8e2c6 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_1f52586d..." not found, but found as SHA256 "76744a212eeaff72"
⏭️  Skipping duplicate: JID_116264ce-development_r17786-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_10b80c8d..." not found, but found as SHA256 "1efed7dd2e824252"
⏭️  Skipping duplicate: JID_d6959801 (posted within 7 days)
[2026-01-31T17:04:33.758Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f3265b69..." not found, but found as SHA256 "9511113e18a69a7c"
[2026-01-31T17:04:33.758Z] [BOT] ⏭️  Skipping duplicate: JID_2364e74c (posted within 7 days)
[2026-01-31T17:04:33.758Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2896735f..." not found, but found as SHA256 "7bdace1c92a6f8e7"
⏭️  Skipping duplicate: JID_860e27d6-cx_1001-job-210683258 (posted within 7 days)
[2026-01-31T17:04:33.758Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_de8d10fa..." not found, but found as SHA256 "6cc1edc932b230ef"
[2026-01-31T17:04:33.758Z] [BOT] ⏭️  Skipping duplicate: JID_c168854e (posted within 7 days)
[2026-01-31T17:04:33.758Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_32e11206..." not found, but found as SHA256 "e40c1d7f3f1d4795"
[2026-01-31T17:04:33.758Z] [BOT] ⏭️  Skipping duplicate: JID_7628941b-iv_r0013743 (posted within 7 days)
[2026-01-31T17:04:33.759Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e40cd37a..." not found, but found as SHA256 "4346d0d8c82399de"
⏭️  Skipping duplicate: JID_75385a15 (posted within 7 days)
[2026-01-31T17:04:33.872Z] [BOT] ✅ Loaded pending queue: 2945 total (1649 pending, 49 enriched, 1247 posted)
[2026-01-31T17:04:34.062Z] [BOT] ✅ Saved pending queue: 2945 total (1649 pending, 39 enriched, 1257 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T17:04:34.062Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T17:04:34.148Z] [BOT] 📂 Loaded 11338 existing routing entries
[2026-01-31T17:04:34.271Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11348
   Timestamp: 2026-01-31T17:04:34.226Z
[2026-01-31T17:04:34.271Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 27
[2026-01-31T17:04:34.272Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 15
[2026-01-31T17:04:34.272Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T17:04:34.272Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 8 posts
[2026-01-31T17:04:34.272Z] [BOT] 2. #🤖・ai-jobs: 1 posts
     3. #🏠・JID_ead674af: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-31T17:04:34.272Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T17:04:34.272Z] [BOT] 💾 BEFORE MERGE: 1277 jobs in memory (cached)
[2026-01-31T17:04:34.313Z] [BOT] ✅ Loaded V2 database: 1277 jobs
💾 DISK STATE: 1277 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1277
[2026-01-31T17:04:34.314Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T17:04:34.315Z] [BOT] 💾 AFTER MERGE: 1277 jobs (merged disk + memory)
[2026-01-31T17:04:34.316Z] [BOT] ✅ No jobs to archive (all 1277 jobs within 7-day window)
[2026-01-31T17:04:34.393Z] [BOT] 💾 Saved posted_jobs.json: 1277 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T17:04:34.394Z] [BOT] ✅ Database saved successfully
[2026-01-31T17:04:36.426Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2945) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*