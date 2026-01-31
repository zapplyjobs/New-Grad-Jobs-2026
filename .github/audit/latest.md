# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T23:15:10.227Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T23:14:37.143Z] ========================================
[2026-01-31T23:14:37.145Z] Discord Bot Execution Log
[2026-01-31T23:14:37.145Z] Environment: GitHub Actions
[2026-01-31T23:14:37.145Z] Node Version: v20.20.0
[2026-01-31T23:14:37.145Z] ========================================
[2026-01-31T23:14:37.145Z] Environment Variables Check:
[2026-01-31T23:14:37.145Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T23:14:37.145Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.145Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T23:14:37.145Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T23:14:37.146Z] 
Multi-Channel Configuration:
[2026-01-31T23:14:37.146Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T23:14:37.146Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T23:14:37.146Z] 
Data Files Check:
[2026-01-31T23:14:37.147Z] .github/data/new_jobs.json: ✅ Exists (10 items, 68769 bytes)
[2026-01-31T23:14:37.192Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8561130 bytes)
[2026-01-31T23:14:37.192Z] 
========================================
[2026-01-31T23:14:37.192Z] Starting Enhanced Discord Bot...
[2026-01-31T23:14:37.193Z] ========================================
[2026-01-31T23:14:37.764Z] [BOT] ✅ Loaded V2 database: 1507 jobs
[2026-01-31T23:14:38.275Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T23:14:38.275Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T23:14:38.275Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T23:14:38.396Z] [BOT] ✅ Loaded pending queue: 2947 total (1400 pending, 50 enriched, 1497 posted)
[2026-01-31T23:14:38.396Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T23:14:38.397Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T23:14:38.397Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
[2026-01-31T23:14:38.397Z] [BOT] ⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T23:14:38.398Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T23:14:38.398Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T23:14:38.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T23:14:38.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T23:14:38.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T23:14:38.399Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T23:14:38.399Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T23:14:38.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T23:14:38.400Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T23:14:38.400Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T23:14:38.400Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T23:14:38.413Z] [BOT] 📬 Found 42 new jobs (8 already posted)...
[2026-01-31T23:14:38.413Z] [BOT] 📋 After blacklist filter: 42 jobs (0 blacklisted)
[2026-01-31T23:14:38.413Z] [BOT] 📋 After data quality filter: 42 jobs (0 invalid)
[2026-01-31T23:14:38.414Z] [BOT] 📋 After multi-location grouping: 39 unique jobs to post
[2026-01-31T23:14:38.414Z] [BOT] (3 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Software Engineer – New Grad - Forward Deployed AI @ Promise: oakland, washington
[2026-01-31T23:14:38.414Z] [BOT] - Software Engineer – Forward Deployed AI (New Grad) @ Promise: oakland, washington
   - Associate Software Engineer – Seeking 2025 & 2026 Grads @ ORG_d0ca1d93 Systems: pleasanton, columbus
⏸️ Limiting to 10 jobs this run, 32 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T23:14:38.418Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-31T23:14:38.419Z] [BOT] 📍 [ROUTING] "Geotypical Production Analyst 1" @ ORG_397501d7 Technology
[2026-01-31T23:14:38.419Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T23:14:38.437Z] [BOT ERROR] (node:3934) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T23:14:38.685Z] [BOT] ✅ Posted message: Geotypical Production Analyst 1 @ ORG_397501d7 Technology in #🤖・ai-jobs
  ✅ Industry: Geotypical Production Analyst 1 @ ORG_397501d7 Technology
[2026-01-31T23:14:38.686Z] [BOT] 💾 Added channel posting: Geotypical Production Analyst 1 @ ORG_397501d7 Technology → category channel (1 total channels)
[2026-01-31T23:14:38.686Z] [BOT] 💾 BEFORE MERGE: 1508 jobs in memory (cached)
[2026-01-31T23:14:38.722Z] [BOT] ✅ Loaded V2 database: 1507 jobs
💾 DISK STATE: 1507 jobs on disk
[2026-01-31T23:14:38.723Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1508
[2026-01-31T23:14:38.726Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:14:38.726Z] [BOT] 💾 AFTER MERGE: 1508 jobs (merged disk + memory)
[2026-01-31T23:14:38.727Z] [BOT] ✅ No jobs to archive (all 1508 jobs within 7-day window)
[2026-01-31T23:14:38.818Z] [BOT] 💾 Saved posted_jobs.json: 1508 active jobs
[2026-01-31T23:14:38.818Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:40.320Z] [BOT] 📍 [ROUTING] "Agent Engineer" @ ORG_581c57aa Health
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T23:14:40.320Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:14:40.597Z] [BOT] ✅ Posted message: Agent Engineer @ ORG_581c57aa Health in #🤖・ai-jobs
  ✅ Industry: Agent Engineer @ ORG_581c57aa Health
[2026-01-31T23:14:40.597Z] [BOT] 💾 Added channel posting: Agent Engineer @ ORG_581c57aa Health → category channel (1 total channels)
[2026-01-31T23:14:40.598Z] [BOT] 💾 BEFORE MERGE: 1509 jobs in memory (cached)
[2026-01-31T23:14:40.623Z] [BOT] ✅ Loaded V2 database: 1508 jobs
💾 DISK STATE: 1508 jobs on disk
[2026-01-31T23:14:40.624Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1509
[2026-01-31T23:14:40.634Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1509 jobs (merged disk + memory)
[2026-01-31T23:14:40.635Z] [BOT] ✅ No jobs to archive (all 1509 jobs within 7-day window)
[2026-01-31T23:14:40.722Z] [BOT] 💾 Saved posted_jobs.json: 1509 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:42.222Z] [BOT] 📍 [ROUTING] "Data Conversion Specialist 1" @ ORG_2ec4b129
   Category: AI (matched: "machine learning")
[2026-01-31T23:14:42.223Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:14:42.423Z] [BOT] ✅ Posted message: Data Conversion Specialist 1 @ ORG_2ec4b129 in #🤖・ai-jobs
[2026-01-31T23:14:42.423Z] [BOT] ✅ Industry: Data Conversion Specialist 1 @ ORG_2ec4b129
[2026-01-31T23:14:42.424Z] [BOT] 💾 Added channel posting: Data Conversion Specialist 1 @ ORG_2ec4b129 → category channel (1 total channels)
[2026-01-31T23:14:42.424Z] [BOT] 💾 BEFORE MERGE: 1510 jobs in memory (cached)
[2026-01-31T23:14:42.448Z] [BOT] ✅ Loaded V2 database: 1509 jobs
💾 DISK STATE: 1509 jobs on disk
[2026-01-31T23:14:42.449Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1510
[2026-01-31T23:14:42.459Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1510 jobs (merged disk + memory)
[2026-01-31T23:14:42.460Z] [BOT] ✅ No jobs to archive (all 1510 jobs within 7-day window)
[2026-01-31T23:14:42.546Z] [BOT] 💾 Saved posted_jobs.json: 1510 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:44.047Z] [BOT] 📍 [ROUTING] "Application Support Engineer" @ ORG_c072f44b
[2026-01-31T23:14:44.047Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:14:44.259Z] [BOT] ✅ Posted message: Application Support Engineer @ ORG_c072f44b in #🤖・ai-jobs
  ✅ Industry: Application Support Engineer @ ORG_c072f44b
[2026-01-31T23:14:44.260Z] [BOT] 💾 Added channel posting: Application Support Engineer @ ORG_c072f44b → category channel (1 total channels)
💾 BEFORE MERGE: 1511 jobs in memory (cached)
[2026-01-31T23:14:44.286Z] [BOT] ✅ Loaded V2 database: 1510 jobs
💾 DISK STATE: 1510 jobs on disk
[2026-01-31T23:14:44.286Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1511
[2026-01-31T23:14:44.296Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:14:44.296Z] [BOT] 💾 AFTER MERGE: 1511 jobs (merged disk + memory)
[2026-01-31T23:14:44.297Z] [BOT] ✅ No jobs to archive (all 1511 jobs within 7-day window)
[2026-01-31T23:14:44.390Z] [BOT] 💾 Saved posted_jobs.json: 1511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:45.892Z] [BOT] 📍 [ROUTING] "Software Engineer 0" @ ORG_8b09cf05
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T23:14:45.892Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T23:14:46.092Z] [BOT] ✅ Posted message: Software Engineer 0 @ ORG_8b09cf05 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 0 @ ORG_8b09cf05
[2026-01-31T23:14:46.093Z] [BOT] 💾 Added channel posting: Software Engineer 0 @ ORG_8b09cf05 → category channel (1 total channels)
[2026-01-31T23:14:46.093Z] [BOT] 💾 BEFORE MERGE: 1512 jobs in memory (cached)
[2026-01-31T23:14:46.118Z] [BOT] ✅ Loaded V2 database: 1511 jobs
💾 DISK STATE: 1511 jobs on disk
[2026-01-31T23:14:46.118Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1512
[2026-01-31T23:14:46.128Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:14:46.128Z] [BOT] 💾 AFTER MERGE: 1512 jobs (merged disk + memory)
[2026-01-31T23:14:46.129Z] [BOT] ✅ No jobs to archive (all 1512 jobs within 7-day window)
[2026-01-31T23:14:46.217Z] [BOT] 💾 Saved posted_jobs.json: 1512 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:50.718Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T23:14:50.719Z] [BOT] 📍 [ROUTING] "B-Crew Dockman - 7" @ ORG_b23b6b4d
[2026-01-31T23:14:50.720Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:14:51.001Z] [BOT] ✅ Posted message: B-Crew Dockman - 7 @ ORG_b23b6b4d  in #💻・tech-jobs
[2026-01-31T23:14:51.001Z] [BOT] ✅ Industry: B-Crew Dockman - 7 @ ORG_b23b6b4d
[2026-01-31T23:14:51.002Z] [BOT] 💾 Added channel posting: B-Crew Dockman - 7 @ ORG_b23b6b4d  → category channel (1 total channels)
[2026-01-31T23:14:51.002Z] [BOT] 💾 BEFORE MERGE: 1513 jobs in memory (cached)
[2026-01-31T23:14:51.027Z] [BOT] ✅ Loaded V2 database: 1512 jobs
💾 DISK STATE: 1512 jobs on disk
[2026-01-31T23:14:51.029Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1513
[2026-01-31T23:14:51.034Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:14:51.034Z] [BOT] 💾 AFTER MERGE: 1513 jobs (merged disk + memory)
[2026-01-31T23:14:51.035Z] [BOT] ✅ No jobs to archive (all 1513 jobs within 7-day window)
[2026-01-31T23:14:51.119Z] [BOT] 💾 Saved posted_jobs.json: 1513 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:52.621Z] [BOT] 📍 [ROUTING] "Software Engineer - Starship Quality" @ ORG_afd623b1
[2026-01-31T23:14:52.621Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:14:53.012Z] [BOT] ✅ Posted message: Software Engineer - Starship Quality @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-31T23:14:53.012Z] [BOT] ✅ Industry: Software Engineer - Starship Quality @ ORG_afd623b1
[2026-01-31T23:14:53.013Z] [BOT] 💾 Added channel posting: Software Engineer - Starship Quality @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-31T23:14:53.013Z] [BOT] 💾 BEFORE MERGE: 1514 jobs in memory (cached)
[2026-01-31T23:14:53.039Z] [BOT] ✅ Loaded V2 database: 1513 jobs
💾 DISK STATE: 1513 jobs on disk
[2026-01-31T23:14:53.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1514
[2026-01-31T23:14:53.048Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:14:53.048Z] [BOT] 💾 AFTER MERGE: 1514 jobs (merged disk + memory)
[2026-01-31T23:14:53.049Z] [BOT] ✅ No jobs to archive (all 1514 jobs within 7-day window)
[2026-01-31T23:14:53.150Z] [BOT] 💾 Saved posted_jobs.json: 1514 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:54.648Z] [BOT] 📍 [ROUTING] "Material Handler I" @ ORG_7f2969dd & Minor
[2026-01-31T23:14:54.649Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:14:54.824Z] [BOT] ✅ Posted message: Material Handler I @ ORG_7f2969dd & Minor in #💻・tech-jobs
[2026-01-31T23:14:54.824Z] [BOT] ✅ Industry: Material Handler I @ ORG_7f2969dd & Minor
[2026-01-31T23:14:54.825Z] [BOT] 💾 Added channel posting: Material Handler I @ ORG_7f2969dd & Minor → category channel (1 total channels)
[2026-01-31T23:14:54.825Z] [BOT] 💾 BEFORE MERGE: 1515 jobs in memory (cached)
[2026-01-31T23:14:54.851Z] [BOT] ✅ Loaded V2 database: 1514 jobs
💾 DISK STATE: 1514 jobs on disk
[2026-01-31T23:14:54.856Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1515
[2026-01-31T23:14:54.861Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:14:54.861Z] [BOT] 💾 AFTER MERGE: 1515 jobs (merged disk + memory)
[2026-01-31T23:14:54.862Z] [BOT] ✅ No jobs to archive (all 1515 jobs within 7-day window)
[2026-01-31T23:14:54.954Z] [BOT] 💾 Saved posted_jobs.json: 1515 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:14:56.456Z] [BOT] 📍 [ROUTING] "Baseball Operations Associate Analyst" @ ORG_66123962 Giants
   Category: TECH (default)
[2026-01-31T23:14:56.456Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T23:14:56.653Z] [BOT] ✅ Posted message: Baseball Operations Associate Analyst @ ORG_66123962 Giants in #💻・tech-jobs
[2026-01-31T23:14:56.653Z] [BOT] ✅ Industry: Baseball Operations Associate Analyst @ ORG_66123962 Giants
[2026-01-31T23:14:56.654Z] [BOT] 💾 Added channel posting: Baseball Operations Associate Analyst @ ORG_66123962 Giants → category channel (1 total channels)
💾 BEFORE MERGE: 1516 jobs in memory (cached)
[2026-01-31T23:14:56.680Z] [BOT] ✅ Loaded V2 database: 1515 jobs
💾 DISK STATE: 1515 jobs on disk
[2026-01-31T23:14:56.682Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1516
[2026-01-31T23:14:56.686Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:14:56.686Z] [BOT] 💾 AFTER MERGE: 1516 jobs (merged disk + memory)
[2026-01-31T23:14:56.687Z] [BOT] ✅ No jobs to archive (all 1516 jobs within 7-day window)
[2026-01-31T23:14:56.776Z] [BOT] 💾 Saved posted_jobs.json: 1516 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:15:01.279Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T23:15:01.279Z] [BOT] 📍 [ROUTING] "Data Analytics Engineer 1 - Future Opening" @ ORG_e9a14aad
[2026-01-31T23:15:01.279Z] [BOT] Category: DATA-SCIENCE (matched: "analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T23:15:01.487Z] [BOT] ✅ Posted message: Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad in #📊・JID_fb739488
[2026-01-31T23:15:01.487Z] [BOT] ✅ Industry: Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad
[2026-01-31T23:15:01.488Z] [BOT] 💾 Added channel posting: Data Analytics Engineer 1 - Future Opening @ ORG_e9a14aad → category channel (1 total channels)
[2026-01-31T23:15:01.488Z] [BOT] 💾 BEFORE MERGE: 1517 jobs in memory (cached)
[2026-01-31T23:15:01.514Z] [BOT] ✅ Loaded V2 database: 1516 jobs
💾 DISK STATE: 1516 jobs on disk
[2026-01-31T23:15:01.518Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1517
[2026-01-31T23:15:01.521Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T23:15:01.521Z] [BOT] 💾 AFTER MERGE: 1517 jobs (merged disk + memory)
[2026-01-31T23:15:01.522Z] [BOT] ✅ No jobs to archive (all 1517 jobs within 7-day window)
[2026-01-31T23:15:01.625Z] [BOT] 💾 Saved posted_jobs.json: 1517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:15:06.126Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T23:15:06.128Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f69d56d1..." not found, but found as SHA256 "b8755610f092c964"
[2026-01-31T23:15:06.128Z] [BOT] ⏭️  Skipping duplicate: JID_2fb7f596 (posted within 7 days)
[2026-01-31T23:15:06.128Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_521982fc..." not found, but found as SHA256 "9ece6dc48fd14907"
[2026-01-31T23:15:06.128Z] [BOT] ⏭️  Skipping duplicate: JID_b270e1f6 (posted within 7 days)
[2026-01-31T23:15:06.128Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4a1023f2..." not found, but found as SHA256 "314e01fb647e8e88"
[2026-01-31T23:15:06.129Z] [BOT] ⏭️  Skipping duplicate: JID_4f0e26ca (posted within 7 days)
[2026-01-31T23:15:06.129Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64472e8b..." not found, but found as SHA256 "7eb7f7c3ce56063b"
[2026-01-31T23:15:06.129Z] [BOT] ⏭️  Skipping duplicate: JID_06b89b40-universal_logistics_holdings-JID_12c4bbf1-7_jr115349-1 (posted within 7 days)
[2026-01-31T23:15:06.129Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39c2a7ca..." not found, but found as SHA256 "aea86b44a3c3a9b4"
[2026-01-31T23:15:06.130Z] [BOT] ⏭️  Skipping duplicate: JID_89f6c23a (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a41ccd81..." not found, but found as SHA256 "bf021f5c0cdac234"
⏭️  Skipping duplicate: JID_c21b7855 (posted within 7 days)
[2026-01-31T23:15:06.130Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d7f996ec..." not found, but found as SHA256 "a4ab01d04422179b"
⏭️  Skipping duplicate: JID_e8d9c351 (posted within 7 days)
[2026-01-31T23:15:06.130Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d78632c6..." not found, but found as SHA256 "7c4da3e29666cafe"
⏭️  Skipping duplicate: JID_df378c87 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_40916985..." not found, but found as SHA256 "3e5b1afccba46432"
⏭️  Skipping duplicate: JID_b09bb8c9-i_req_24_19332 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e2a34448..." not found, but found as SHA256 "d3281af5e5fc0e1f"
⏭️  Skipping duplicate: JID_a3059077 (posted within 7 days)
[2026-01-31T23:15:06.257Z] [BOT] ✅ Loaded pending queue: 2947 total (1400 pending, 50 enriched, 1497 posted)
[2026-01-31T23:15:06.439Z] [BOT] ✅ Saved pending queue: 2947 total (1400 pending, 40 enriched, 1507 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T23:15:06.530Z] [BOT] 📂 Loaded 11588 existing routing entries
[2026-01-31T23:15:06.665Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11598
   Timestamp: 2026-01-31T23:15:06.618Z
[2026-01-31T23:15:06.668Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 18
   Successful: 10
   Failed: 0
   Skipped: 8
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
💾 BEFORE MERGE: 1517 jobs in memory (cached)
[2026-01-31T23:15:06.708Z] [BOT] ✅ Loaded V2 database: 1517 jobs
💾 DISK STATE: 1517 jobs on disk
[2026-01-31T23:15:06.709Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1517
[2026-01-31T23:15:06.713Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1517 jobs (merged disk + memory)
[2026-01-31T23:15:06.714Z] [BOT] ✅ No jobs to archive (all 1517 jobs within 7-day window)
[2026-01-31T23:15:06.801Z] [BOT] 💾 Saved posted_jobs.json: 1517 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T23:15:06.801Z] [BOT] ✅ Database saved successfully
[2026-01-31T23:15:08.831Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3934) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*