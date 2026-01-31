# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T14:32:29.854Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T14:31:55.226Z] ========================================
[2026-01-31T14:31:55.228Z] Discord Bot Execution Log
[2026-01-31T14:31:55.228Z] Environment: GitHub Actions
[2026-01-31T14:31:55.228Z] Node Version: v20.20.0
[2026-01-31T14:31:55.228Z] ========================================
[2026-01-31T14:31:55.228Z] Environment Variables Check:
[2026-01-31T14:31:55.228Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T14:31:55.228Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.228Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T14:31:55.229Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T14:31:55.229Z] 
Multi-Channel Configuration:
[2026-01-31T14:31:55.229Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T14:31:55.229Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T14:31:55.229Z] 
Data Files Check:
[2026-01-31T14:31:55.230Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T14:31:55.273Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7284659 bytes)
[2026-01-31T14:31:55.273Z] 
========================================
[2026-01-31T14:31:55.273Z] Starting Enhanced Discord Bot...
[2026-01-31T14:31:55.273Z] ========================================
[2026-01-31T14:31:55.751Z] [BOT] ✅ Loaded V2 database: 1176 jobs
[2026-01-31T14:31:56.470Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T14:31:56.470Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T14:31:56.471Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T14:31:56.628Z] [BOT] ✅ Loaded pending queue: 2948 total (1751 pending, 50 enriched, 1147 posted)
[2026-01-31T14:31:56.628Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T14:31:56.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T14:31:56.629Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T14:31:56.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T14:31:56.630Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T14:31:56.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T14:31:56.630Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T14:31:56.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T14:31:56.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T14:31:56.631Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T14:31:56.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T14:31:56.631Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T14:31:56.632Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T14:31:56.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T14:31:56.632Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T14:31:56.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T14:31:56.632Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T14:31:56.632Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T14:31:56.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T14:31:56.633Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T14:31:56.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T14:31:56.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
[2026-01-31T14:31:56.634Z] [BOT] ⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
[2026-01-31T14:31:56.634Z] [BOT] ⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T14:31:56.634Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
[2026-01-31T14:31:56.634Z] [BOT] ⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
[2026-01-31T14:31:56.634Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T14:31:56.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
[2026-01-31T14:31:56.635Z] [BOT] ⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T14:31:56.635Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
[2026-01-31T14:31:56.635Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T14:31:56.644Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T14:31:56.644Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar at University of Miami
[2026-01-31T14:31:56.644Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Fellow at University of Texas - Austin
[2026-01-31T14:31:56.820Z] [BOT] ✅ Loaded pending queue: 2948 total (1751 pending, 50 enriched, 1147 posted)
[2026-01-31T14:31:57.005Z] [BOT] ✅ Saved pending queue: 2946 total (1751 pending, 48 enriched, 1147 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 27 jobs (2 blacklisted)
[2026-01-31T14:31:57.006Z] [BOT] 📋 After data quality filter: 27 jobs (0 invalid)
[2026-01-31T14:31:57.006Z] [BOT] 📋 After multi-location grouping: 26 unique jobs to post
[2026-01-31T14:31:57.006Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T14:31:57.009Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-31T14:31:57.010Z] [BOT] 📍 [ROUTING] "Machine Learning Graduate - 2026 Start" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T14:31:57.010Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:31:57.026Z] [BOT ERROR] (node:3565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T14:31:57.321Z] [BOT] ✅ Posted message: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c in #🤖・ai-jobs
[2026-01-31T14:31:57.321Z] [BOT] ✅ Industry: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c
[2026-01-31T14:31:57.322Z] [BOT] 💾 Added channel posting: Machine Learning Graduate - 2026 Start @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T14:31:57.322Z] [BOT] 💾 BEFORE MERGE: 1177 jobs in memory (cached)
[2026-01-31T14:31:57.354Z] [BOT] ✅ Loaded V2 database: 1176 jobs
💾 DISK STATE: 1176 jobs on disk
[2026-01-31T14:31:57.354Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1177
[2026-01-31T14:31:57.357Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:31:57.357Z] [BOT] 💾 AFTER MERGE: 1177 jobs (merged disk + memory)
[2026-01-31T14:31:57.358Z] [BOT] ✅ No jobs to archive (all 1177 jobs within 7-day window)
[2026-01-31T14:31:57.440Z] [BOT] 💾 Saved posted_jobs.json: 1177 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:31:58.943Z] [BOT] 📍 [ROUTING] "Builder – New Grad - AI Engineer" @ ORG_eb020b7a
[2026-01-31T14:31:58.943Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:31:59.169Z] [BOT] ✅ Posted message: Builder – New Grad - AI Engineer @ ORG_eb020b7a in #🤖・ai-jobs
[2026-01-31T14:31:59.169Z] [BOT] ✅ Industry: Builder – New Grad - AI Engineer @ ORG_eb020b7a
[2026-01-31T14:31:59.169Z] [BOT] 💾 Added channel posting: Builder – New Grad - AI Engineer @ ORG_eb020b7a → category channel (1 total channels)
[2026-01-31T14:31:59.169Z] [BOT] 💾 BEFORE MERGE: 1178 jobs in memory (cached)
[2026-01-31T14:31:59.200Z] [BOT] ✅ Loaded V2 database: 1177 jobs
💾 DISK STATE: 1177 jobs on disk
[2026-01-31T14:31:59.200Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1178
[2026-01-31T14:31:59.203Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1178 jobs (merged disk + memory)
[2026-01-31T14:31:59.204Z] [BOT] ✅ No jobs to archive (all 1178 jobs within 7-day window)
[2026-01-31T14:31:59.280Z] [BOT] 💾 Saved posted_jobs.json: 1178 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:00.782Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_101c5054
   Category: AI (matched: "machine learning")
[2026-01-31T14:32:00.783Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:32:00.992Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_101c5054 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_101c5054
[2026-01-31T14:32:00.993Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_101c5054 → category channel (1 total channels)
[2026-01-31T14:32:00.993Z] [BOT] 💾 BEFORE MERGE: 1179 jobs in memory (cached)
[2026-01-31T14:32:01.023Z] [BOT] ✅ Loaded V2 database: 1178 jobs
💾 DISK STATE: 1178 jobs on disk
[2026-01-31T14:32:01.024Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1179
[2026-01-31T14:32:01.026Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1179 jobs (merged disk + memory)
[2026-01-31T14:32:01.027Z] [BOT] ✅ No jobs to archive (all 1179 jobs within 7-day window)
[2026-01-31T14:32:01.102Z] [BOT] 💾 Saved posted_jobs.json: 1179 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:02.605Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Research Scientist - PhD (New York City)" @ spotify
[2026-01-31T14:32:02.605Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T14:32:02.879Z] [BOT] ✅ Posted message: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify in #🤖・ai-jobs
[2026-01-31T14:32:02.879Z] [BOT] ✅ Industry: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify
[2026-01-31T14:32:02.880Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify → category channel (1 total channels)
💾 BEFORE MERGE: 1180 jobs in memory (cached)
[2026-01-31T14:32:02.911Z] [BOT] ✅ Loaded V2 database: 1179 jobs
💾 DISK STATE: 1179 jobs on disk
[2026-01-31T14:32:02.911Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1180
[2026-01-31T14:32:02.913Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:32:02.914Z] [BOT] 💾 AFTER MERGE: 1180 jobs (merged disk + memory)
[2026-01-31T14:32:02.914Z] [BOT] ✅ No jobs to archive (all 1180 jobs within 7-day window)
[2026-01-31T14:32:03.007Z] [BOT] 💾 Saved posted_jobs.json: 1180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:04.789Z] [BOT] ✅ Posted message: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T14:32:04.790Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify → location channel (2 total channels)
[2026-01-31T14:32:04.790Z] [BOT] 💾 BEFORE MERGE: 1180 jobs in memory (cached)
[2026-01-31T14:32:04.820Z] [BOT] ✅ Loaded V2 database: 1180 jobs
💾 DISK STATE: 1180 jobs on disk
[2026-01-31T14:32:04.821Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1180
[2026-01-31T14:32:04.823Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Research Scientist - PhD (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T14:32:04.824Z] [BOT] 💾 AFTER MERGE: 1180 jobs (merged disk + memory)
[2026-01-31T14:32:04.824Z] [BOT] ✅ No jobs to archive (all 1180 jobs within 7-day window)
[2026-01-31T14:32:04.897Z] [BOT] 💾 Saved posted_jobs.json: 1180 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:06.400Z] [BOT] 📍 [ROUTING] "（General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
[2026-01-31T14:32:06.400Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:32:06.991Z] [BOT] ✅ Posted message: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T14:32:06.991Z] [BOT] ✅ Industry: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb
[2026-01-31T14:32:06.992Z] [BOT] 💾 Added channel posting: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb → category channel (1 total channels)
💾 BEFORE MERGE: 1181 jobs in memory (cached)
[2026-01-31T14:32:07.023Z] [BOT] ✅ Loaded V2 database: 1180 jobs
💾 DISK STATE: 1180 jobs on disk
[2026-01-31T14:32:07.023Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1181
[2026-01-31T14:32:07.026Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1181 jobs (merged disk + memory)
[2026-01-31T14:32:07.027Z] [BOT] ✅ No jobs to archive (all 1181 jobs within 7-day window)
[2026-01-31T14:32:07.101Z] [BOT] 💾 Saved posted_jobs.json: 1181 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:08.604Z] [BOT] 📍 [ROUTING] "Young Investigator - Flexolmo" @ ORG_b344d80e Allen Institute for AI
[2026-01-31T14:32:08.604Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T14:32:08.879Z] [BOT] ✅ Posted message: Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI in #🤖・ai-jobs
[2026-01-31T14:32:08.879Z] [BOT] ✅ Industry: Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI
[2026-01-31T14:32:08.879Z] [BOT] 💾 Added channel posting: Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI → category channel (1 total channels)
[2026-01-31T14:32:08.880Z] [BOT] 💾 BEFORE MERGE: 1182 jobs in memory (cached)
[2026-01-31T14:32:08.914Z] [BOT] ✅ Loaded V2 database: 1181 jobs
💾 DISK STATE: 1181 jobs on disk
[2026-01-31T14:32:08.914Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1182
[2026-01-31T14:32:08.917Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1182 jobs (merged disk + memory)
[2026-01-31T14:32:08.918Z] [BOT] ✅ No jobs to archive (all 1182 jobs within 7-day window)
[2026-01-31T14:32:08.993Z] [BOT] 💾 Saved posted_jobs.json: 1182 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:13.494Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T14:32:13.495Z] [BOT] 📍 [ROUTING] "Application Software Engineer" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-01-31T14:32:13.495Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:32:13.803Z] [BOT] ✅ Posted message: Application Software Engineer @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Application Software Engineer @ ORG_afd623b1
[2026-01-31T14:32:13.803Z] [BOT] 💾 Added channel posting: Application Software Engineer @ ORG_afd623b1 → category channel (1 total channels)
[2026-01-31T14:32:13.804Z] [BOT] 💾 BEFORE MERGE: 1183 jobs in memory (cached)
[2026-01-31T14:32:13.834Z] [BOT] ✅ Loaded V2 database: 1182 jobs
💾 DISK STATE: 1182 jobs on disk
[2026-01-31T14:32:13.835Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1183
[2026-01-31T14:32:13.837Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1183 jobs (merged disk + memory)
[2026-01-31T14:32:13.838Z] [BOT] ✅ No jobs to archive (all 1183 jobs within 7-day window)
[2026-01-31T14:32:13.930Z] [BOT] 💾 Saved posted_jobs.json: 1183 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:15.430Z] [BOT] 📍 [ROUTING] "Founding Engineer" @ ORG_83270310
[2026-01-31T14:32:15.431Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:32:15.704Z] [BOT] ✅ Posted message: Founding Engineer @ ORG_83270310 in #💻・tech-jobs
  ✅ Industry: Founding Engineer @ ORG_83270310
[2026-01-31T14:32:15.705Z] [BOT] 💾 Added channel posting: Founding Engineer @ ORG_83270310 → category channel (1 total channels)
[2026-01-31T14:32:15.705Z] [BOT] 💾 BEFORE MERGE: 1184 jobs in memory (cached)
[2026-01-31T14:32:15.737Z] [BOT] ✅ Loaded V2 database: 1183 jobs
💾 DISK STATE: 1183 jobs on disk
[2026-01-31T14:32:15.737Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1184
[2026-01-31T14:32:15.740Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:32:15.740Z] [BOT] 💾 AFTER MERGE: 1184 jobs (merged disk + memory)
[2026-01-31T14:32:15.741Z] [BOT] ✅ No jobs to archive (all 1184 jobs within 7-day window)
[2026-01-31T14:32:15.814Z] [BOT] 💾 Saved posted_jobs.json: 1184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:17.531Z] [BOT] ✅ Posted message: Founding Engineer @ ORG_83270310 in #🏠・JID_ead674af
[2026-01-31T14:32:17.531Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T14:32:17.531Z] [BOT] 💾 Added channel posting: Founding Engineer @ ORG_83270310 → location channel (2 total channels)
[2026-01-31T14:32:17.531Z] [BOT] 💾 BEFORE MERGE: 1184 jobs in memory (cached)
[2026-01-31T14:32:17.562Z] [BOT] ✅ Loaded V2 database: 1184 jobs
💾 DISK STATE: 1184 jobs on disk
[2026-01-31T14:32:17.563Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1184
[2026-01-31T14:32:17.565Z] [BOT] 🔀 Deep merged: Founding Engineer @ ORG_83270310 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T14:32:17.565Z] [BOT] 💾 AFTER MERGE: 1184 jobs (merged disk + memory)
[2026-01-31T14:32:17.566Z] [BOT] ✅ No jobs to archive (all 1184 jobs within 7-day window)
[2026-01-31T14:32:17.639Z] [BOT] 💾 Saved posted_jobs.json: 1184 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:19.141Z] [BOT] 📍 [ROUTING] "Software Systems Engineer" @ ORG_d51736fa
   Category: TECH (matched: "software")
[2026-01-31T14:32:19.142Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:32:19.511Z] [BOT] ✅ Posted message: Software Systems Engineer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Software Systems Engineer @ ORG_d51736fa
[2026-01-31T14:32:19.511Z] [BOT] 💾 Added channel posting: Software Systems Engineer @ ORG_d51736fa → category channel (1 total channels)
[2026-01-31T14:32:19.512Z] [BOT] 💾 BEFORE MERGE: 1185 jobs in memory (cached)
[2026-01-31T14:32:19.542Z] [BOT] ✅ Loaded V2 database: 1184 jobs
💾 DISK STATE: 1184 jobs on disk
[2026-01-31T14:32:19.543Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1185
[2026-01-31T14:32:19.545Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:32:19.545Z] [BOT] 💾 AFTER MERGE: 1185 jobs (merged disk + memory)
[2026-01-31T14:32:19.546Z] [BOT] ✅ No jobs to archive (all 1185 jobs within 7-day window)
[2026-01-31T14:32:19.640Z] [BOT] 💾 Saved posted_jobs.json: 1185 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:21.141Z] [BOT] 📍 [ROUTING] "Front End Software Engineer 1" @ ORG_3cbc87c7 Anomaly
[2026-01-31T14:32:21.141Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:32:21.359Z] [BOT] ✅ Posted message: Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly in #💻・tech-jobs
[2026-01-31T14:32:21.359Z] [BOT] ✅ Industry: Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly
[2026-01-31T14:32:21.359Z] [BOT] 💾 Added channel posting: Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly → category channel (1 total channels)
[2026-01-31T14:32:21.359Z] [BOT] 💾 BEFORE MERGE: 1186 jobs in memory (cached)
[2026-01-31T14:32:21.390Z] [BOT] ✅ Loaded V2 database: 1185 jobs
💾 DISK STATE: 1185 jobs on disk
[2026-01-31T14:32:21.390Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1186
[2026-01-31T14:32:21.393Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:32:21.393Z] [BOT] 💾 AFTER MERGE: 1186 jobs (merged disk + memory)
[2026-01-31T14:32:21.394Z] [BOT] ✅ No jobs to archive (all 1186 jobs within 7-day window)
[2026-01-31T14:32:21.470Z] [BOT] 💾 Saved posted_jobs.json: 1186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:25.971Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T14:32:25.973Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_50d670b1..." not found, but found as SHA256 "8faab159e2ac7a93"
[2026-01-31T14:32:25.973Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a5bcef8c-detail (posted within 7 days)
[2026-01-31T14:32:25.973Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf423fe8..." not found, but found as SHA256 "9f3d297bad8a0a59"
[2026-01-31T14:32:25.973Z] [BOT] ⏭️  Skipping duplicate: JID_65476f3f (posted within 7 days)
[2026-01-31T14:32:25.973Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_df6b44a4..." not found, but found as SHA256 "169dd4ad6315b752"
[2026-01-31T14:32:25.973Z] [BOT] ⏭️  Skipping duplicate: JID_88e70eae (posted within 7 days)
[2026-01-31T14:32:25.974Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aebf85a7..." not found, but found as SHA256 "b0aa701881cbcf57"
⏭️  Skipping duplicate: JID_32ee2752 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_1ef96fb9..." not found, but found as SHA256 "23bc032c21c7221b"
⏭️  Skipping duplicate: JID_00c1703f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_60a1d3bd..." not found, but found as SHA256 "525cdf9656221bb4"
⏭️  Skipping duplicate: JID_08c8e1a7 (posted within 7 days)
[2026-01-31T14:32:25.974Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f35747b5..." not found, but found as SHA256 "4c2a136f7ad591dc"
⏭️  Skipping duplicate: JID_5e072781-engineer_r-00171075 (posted within 7 days)
[2026-01-31T14:32:25.974Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6758fb39-..." not found, but found as SHA256 "b0e8dc7903807859"
[2026-01-31T14:32:25.974Z] [BOT] ⏭️  Skipping duplicate: JID_f86864d1 (posted within 7 days)
[2026-01-31T14:32:25.974Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2ca14539..." not found, but found as SHA256 "8837047594f588c7"
[2026-01-31T14:32:25.975Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_da383c83 (posted within 7 days)
[2026-01-31T14:32:25.975Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2a1dc770..." not found, but found as SHA256 "06e81ace2210aa2d"
[2026-01-31T14:32:25.975Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1d79e (posted within 7 days)
[2026-01-31T14:32:26.126Z] [BOT] ✅ Loaded pending queue: 2946 total (1751 pending, 48 enriched, 1147 posted)
[2026-01-31T14:32:26.301Z] [BOT] ✅ Saved pending queue: 2946 total (1751 pending, 38 enriched, 1157 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T14:32:26.394Z] [BOT] 📂 Loaded 11238 existing routing entries
[2026-01-31T14:32:26.513Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11248
   Timestamp: 2026-01-31T14:32:26.474Z
[2026-01-31T14:32:26.513Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 35
[2026-01-31T14:32:26.513Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 23
[2026-01-31T14:32:26.513Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T14:32:26.513Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-31T14:32:26.514Z] [BOT] 1. #🤖・ai-jobs: 6 posts
     2. #💻・tech-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-31T14:32:26.514Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T14:32:26.514Z] [BOT] 💾 BEFORE MERGE: 1186 jobs in memory (cached)
[2026-01-31T14:32:26.548Z] [BOT] ✅ Loaded V2 database: 1186 jobs
💾 DISK STATE: 1186 jobs on disk
[2026-01-31T14:32:26.548Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1186
[2026-01-31T14:32:26.551Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:32:26.551Z] [BOT] 💾 AFTER MERGE: 1186 jobs (merged disk + memory)
[2026-01-31T14:32:26.552Z] [BOT] ✅ No jobs to archive (all 1186 jobs within 7-day window)
[2026-01-31T14:32:26.653Z] [BOT] 💾 Saved posted_jobs.json: 1186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:32:26.654Z] [BOT] ✅ Database saved successfully
[2026-01-31T14:32:28.675Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3565) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*