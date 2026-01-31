# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T14:14:09.234Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 21
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T14:13:34.818Z] ========================================
[2026-01-31T14:13:34.820Z] Discord Bot Execution Log
[2026-01-31T14:13:34.820Z] Environment: GitHub Actions
[2026-01-31T14:13:34.820Z] Node Version: v20.20.0
[2026-01-31T14:13:34.820Z] ========================================
[2026-01-31T14:13:34.820Z] Environment Variables Check:
[2026-01-31T14:13:34.820Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T14:13:34.820Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.820Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T14:13:34.821Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T14:13:34.821Z] 
Multi-Channel Configuration:
[2026-01-31T14:13:34.821Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T14:13:34.821Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T14:13:34.821Z] 
Data Files Check:
[2026-01-31T14:13:34.822Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T14:13:34.865Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7243597 bytes)
[2026-01-31T14:13:34.865Z] 
========================================
[2026-01-31T14:13:34.865Z] Starting Enhanced Discord Bot...
[2026-01-31T14:13:34.865Z] ========================================
[2026-01-31T14:13:35.352Z] [BOT] ✅ Loaded V2 database: 1166 jobs
[2026-01-31T14:13:35.832Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T14:13:35.833Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T14:13:35.833Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T14:13:35.989Z] [BOT] ✅ Loaded pending queue: 2948 total (1761 pending, 50 enriched, 1137 posted)
[2026-01-31T14:13:35.990Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T14:13:35.990Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T14:13:35.991Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T14:13:35.991Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T14:13:35.991Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T14:13:35.991Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T14:13:35.991Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T14:13:35.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T14:13:35.992Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T14:13:35.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T14:13:35.992Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T14:13:35.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T14:13:35.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T14:13:35.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T14:13:35.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T14:13:35.994Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T14:13:35.994Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T14:13:35.994Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T14:13:35.994Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T14:13:35.994Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T14:13:35.994Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T14:13:35.995Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T14:13:35.995Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T14:13:35.995Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
[2026-01-31T14:13:35.995Z] [BOT] ⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
[2026-01-31T14:13:35.996Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bd4c5e0e..." not found, but found as SHA256 "baaa80f457de33f1"
[2026-01-31T14:13:35.996Z] [BOT] ⏭️  Skipping duplicate: JID_efd24cdc-2026_25920348 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development - Full Time Analyst at Citi
[2026-01-31T14:13:35.996Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec7f0df..." not found, but found as SHA256 "bc0a20b10663c94f"
[2026-01-31T14:13:35.996Z] [BOT] ⏭️  Skipping duplicate: JID_c113399f-cameras_r00193769 (posted within 7 days)
[2026-01-31T14:13:35.996Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Thermal Camera at Magna
[2026-01-31T14:13:35.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26edbe46..." not found, but found as SHA256 "c8357eb905fbf4c2"
[2026-01-31T14:13:35.997Z] [BOT] ⏭️  Skipping duplicate: JID_c934712a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – Early Career at Affirm
[2026-01-31T14:13:35.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_84f0bad6-tamucc_exter..." not found, but found as SHA256 "fb3aa13843322bcc"
[2026-01-31T14:13:35.997Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-tamucc_external-JID_a3b9cac0-associate_r-089245-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d732a1 at Texas A&M University - Corpus Christi
[2026-01-31T14:13:36.005Z] [BOT] 📬 Found 29 new jobs (21 already posted)...
[2026-01-31T14:13:36.005Z] [BOT] 📋 After blacklist filter: 29 jobs (0 blacklisted)
[2026-01-31T14:13:36.005Z] [BOT] 📋 After data quality filter: 29 jobs (0 invalid)
[2026-01-31T14:13:36.006Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-01-31T14:13:36.006Z] [BOT] ⏸️ Limiting to 10 jobs this run, 19 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T14:13:36.009Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T14:13:36.010Z] [BOT] 📍 [ROUTING] "Research Engineering/Scientist Associate 1" @ ORG_9d38443e of Texas - Austin
[2026-01-31T14:13:36.010Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T14:13:36.027Z] [BOT ERROR] (node:2826) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T14:13:36.243Z] [BOT] ✅ Posted message: Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin in #📊・JID_fb739488
[2026-01-31T14:13:36.243Z] [BOT] ✅ Industry: Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin
[2026-01-31T14:13:36.244Z] [BOT] 💾 Added channel posting: Research Engineering/Scientist Associate 1 @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-01-31T14:13:36.244Z] [BOT] 💾 BEFORE MERGE: 1167 jobs in memory (cached)
[2026-01-31T14:13:36.278Z] [BOT] ✅ Loaded V2 database: 1166 jobs
💾 DISK STATE: 1166 jobs on disk
[2026-01-31T14:13:36.279Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1167
[2026-01-31T14:13:36.282Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:13:36.282Z] [BOT] 💾 AFTER MERGE: 1167 jobs (merged disk + memory)
[2026-01-31T14:13:36.282Z] [BOT] ✅ No jobs to archive (all 1167 jobs within 7-day window)
[2026-01-31T14:13:36.368Z] [BOT] 💾 Saved posted_jobs.json: 1167 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:40.871Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T14:13:40.871Z] [BOT] 📍 [ROUTING] "Algorithm Engineer" @ ORG_fb8c4aa0
   Category: AI (matched: "machine learning")
[2026-01-31T14:13:40.871Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:13:41.186Z] [BOT] ✅ Posted message: Algorithm Engineer @ ORG_fb8c4aa0 in #🤖・ai-jobs
[2026-01-31T14:13:41.186Z] [BOT] ✅ Industry: Algorithm Engineer @ ORG_fb8c4aa0
[2026-01-31T14:13:41.186Z] [BOT] 💾 Added channel posting: Algorithm Engineer @ ORG_fb8c4aa0 → category channel (1 total channels)
[2026-01-31T14:13:41.187Z] [BOT] 💾 BEFORE MERGE: 1168 jobs in memory (cached)
[2026-01-31T14:13:41.217Z] [BOT] ✅ Loaded V2 database: 1167 jobs
💾 DISK STATE: 1167 jobs on disk
[2026-01-31T14:13:41.218Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1168
[2026-01-31T14:13:41.220Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1168 jobs (merged disk + memory)
[2026-01-31T14:13:41.221Z] [BOT] ✅ No jobs to archive (all 1168 jobs within 7-day window)
[2026-01-31T14:13:41.303Z] [BOT] 💾 Saved posted_jobs.json: 1168 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:42.805Z] [BOT] 📍 [ROUTING] "Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T14:13:42.968Z] [BOT] ✅ Posted message: Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb in #🤖・ai-jobs
[2026-01-31T14:13:42.968Z] [BOT] ✅ Industry: Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb
[2026-01-31T14:13:42.968Z] [BOT] 💾 Added channel posting: Graduate Engineer - Machine Learning Engineer - Data-Search-Recommendation Tiktok.US @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T14:13:42.968Z] [BOT] 💾 BEFORE MERGE: 1169 jobs in memory (cached)
[2026-01-31T14:13:42.999Z] [BOT] ✅ Loaded V2 database: 1168 jobs
💾 DISK STATE: 1168 jobs on disk
[2026-01-31T14:13:43.000Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1169
[2026-01-31T14:13:43.003Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:13:43.003Z] [BOT] 💾 AFTER MERGE: 1169 jobs (merged disk + memory)
[2026-01-31T14:13:43.004Z] [BOT] ✅ No jobs to archive (all 1169 jobs within 7-day window)
[2026-01-31T14:13:43.095Z] [BOT] 💾 Saved posted_jobs.json: 1169 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:47.596Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T14:13:47.597Z] [BOT] 📍 [ROUTING] "Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus" @ ORG_c0e17070
   Category: TECH (default)
[2026-01-31T14:13:47.597Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:13:47.856Z] [BOT] ✅ Posted message: Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus @ ORG_c0e17070 in #💻・tech-jobs
[2026-01-31T14:13:47.856Z] [BOT] ✅ Industry: Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus @ ORG_c0e17070
[2026-01-31T14:13:47.856Z] [BOT] 💾 Added channel posting: Entry Level Chemical Engineer/Environmental Engineer/Scientist - Permitting and Compliance Focus @ ORG_c0e17070 → category channel (1 total channels)
💾 BEFORE MERGE: 1170 jobs in memory (cached)
[2026-01-31T14:13:47.887Z] [BOT] ✅ Loaded V2 database: 1169 jobs
💾 DISK STATE: 1169 jobs on disk
[2026-01-31T14:13:47.888Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1170
[2026-01-31T14:13:47.890Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:13:47.890Z] [BOT] 💾 AFTER MERGE: 1170 jobs (merged disk + memory)
[2026-01-31T14:13:47.891Z] [BOT] ✅ No jobs to archive (all 1170 jobs within 7-day window)
[2026-01-31T14:13:47.980Z] [BOT] 💾 Saved posted_jobs.json: 1170 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:49.483Z] [BOT] 📍 [ROUTING] "Engineering Support Associate" @ ORG_e1de44d1ington County VA
[2026-01-31T14:13:49.483Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:13:49.669Z] [BOT] ✅ Posted message: Engineering Support Associate @ ORG_e1de44d1ington County VA in #💻・tech-jobs
[2026-01-31T14:13:49.669Z] [BOT] ✅ Industry: Engineering Support Associate @ ORG_e1de44d1ington County VA
[2026-01-31T14:13:49.670Z] [BOT] 💾 Added channel posting: Engineering Support Associate @ ORG_e1de44d1ington County VA → category channel (1 total channels)
[2026-01-31T14:13:49.670Z] [BOT] 💾 BEFORE MERGE: 1171 jobs in memory (cached)
[2026-01-31T14:13:49.701Z] [BOT] ✅ Loaded V2 database: 1170 jobs
💾 DISK STATE: 1170 jobs on disk
[2026-01-31T14:13:49.701Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1171
[2026-01-31T14:13:49.704Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:13:49.704Z] [BOT] 💾 AFTER MERGE: 1171 jobs (merged disk + memory)
[2026-01-31T14:13:49.705Z] [BOT] ✅ No jobs to archive (all 1171 jobs within 7-day window)
[2026-01-31T14:13:49.796Z] [BOT] 💾 Saved posted_jobs.json: 1171 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:51.296Z] [BOT] 📍 [ROUTING] "Software Developer" @ ORG_6468cf88
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:13:51.556Z] [BOT] ✅ Posted message: Software Developer @ ORG_6468cf88 in #💻・tech-jobs
[2026-01-31T14:13:51.556Z] [BOT] ✅ Industry: Software Developer @ ORG_6468cf88
[2026-01-31T14:13:51.557Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_6468cf88 → category channel (1 total channels)
[2026-01-31T14:13:51.557Z] [BOT] 💾 BEFORE MERGE: 1172 jobs in memory (cached)
[2026-01-31T14:13:51.588Z] [BOT] ✅ Loaded V2 database: 1171 jobs
💾 DISK STATE: 1171 jobs on disk
[2026-01-31T14:13:51.589Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1172
[2026-01-31T14:13:51.592Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:13:51.592Z] [BOT] 💾 AFTER MERGE: 1172 jobs (merged disk + memory)
[2026-01-31T14:13:51.593Z] [BOT] ✅ No jobs to archive (all 1172 jobs within 7-day window)
[2026-01-31T14:13:51.673Z] [BOT] 💾 Saved posted_jobs.json: 1172 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:53.402Z] [BOT] ✅ Posted message: Software Developer @ ORG_6468cf88 in #🏠・JID_ead674af
[2026-01-31T14:13:53.403Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T14:13:53.403Z] [BOT] 💾 Added channel posting: Software Developer @ ORG_6468cf88 → location channel (2 total channels)
[2026-01-31T14:13:53.403Z] [BOT] 💾 BEFORE MERGE: 1172 jobs in memory (cached)
[2026-01-31T14:13:53.434Z] [BOT] ✅ Loaded V2 database: 1172 jobs
💾 DISK STATE: 1172 jobs on disk
[2026-01-31T14:13:53.435Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1172
[2026-01-31T14:13:53.437Z] [BOT] 🔀 Deep merged: Software Developer @ ORG_6468cf88 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T14:13:53.437Z] [BOT] 💾 AFTER MERGE: 1172 jobs (merged disk + memory)
[2026-01-31T14:13:53.438Z] [BOT] ✅ No jobs to archive (all 1172 jobs within 7-day window)
[2026-01-31T14:13:53.511Z] [BOT] 💾 Saved posted_jobs.json: 1172 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:55.014Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Elixir" @ ORG_3cbc87c7 Anomaly
[2026-01-31T14:13:55.014Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:13:55.256Z] [BOT] ✅ Posted message: Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly in #💻・tech-jobs
[2026-01-31T14:13:55.256Z] [BOT] ✅ Industry: Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly
[2026-01-31T14:13:55.257Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Elixir @ ORG_3cbc87c7 Anomaly → category channel (1 total channels)
[2026-01-31T14:13:55.257Z] [BOT] 💾 BEFORE MERGE: 1173 jobs in memory (cached)
[2026-01-31T14:13:55.288Z] [BOT] ✅ Loaded V2 database: 1172 jobs
💾 DISK STATE: 1172 jobs on disk
[2026-01-31T14:13:55.288Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1173
[2026-01-31T14:13:55.291Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:13:55.291Z] [BOT] 💾 AFTER MERGE: 1173 jobs (merged disk + memory)
[2026-01-31T14:13:55.292Z] [BOT] ✅ No jobs to archive (all 1173 jobs within 7-day window)
[2026-01-31T14:13:55.367Z] [BOT] 💾 Saved posted_jobs.json: 1173 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:56.870Z] [BOT] 📍 [ROUTING] "Graduate Engineering Development Program" @ ORG_b99419d3
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T14:13:56.870Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:13:57.170Z] [BOT] ✅ Posted message: Graduate Engineering Development Program @ ORG_b99419d3 in #💻・tech-jobs
[2026-01-31T14:13:57.170Z] [BOT] ✅ Industry: Graduate Engineering Development Program @ ORG_b99419d3
[2026-01-31T14:13:57.170Z] [BOT] 💾 Added channel posting: Graduate Engineering Development Program @ ORG_b99419d3 → category channel (1 total channels)
[2026-01-31T14:13:57.170Z] [BOT] 💾 BEFORE MERGE: 1174 jobs in memory (cached)
[2026-01-31T14:13:57.201Z] [BOT] ✅ Loaded V2 database: 1173 jobs
💾 DISK STATE: 1173 jobs on disk
[2026-01-31T14:13:57.202Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1174
[2026-01-31T14:13:57.205Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1174 jobs (merged disk + memory)
[2026-01-31T14:13:57.206Z] [BOT] ✅ No jobs to archive (all 1174 jobs within 7-day window)
[2026-01-31T14:13:57.297Z] [BOT] 💾 Saved posted_jobs.json: 1174 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:13:58.797Z] [BOT] 📍 [ROUTING] "Research Engineer Graduate - Ads ML Infrastructure - PhD" @ ORG_1bb6fcfb
[2026-01-31T14:13:58.797Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:13:59.085Z] [BOT] ✅ Posted message: Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-31T14:13:59.085Z] [BOT] ✅ Industry: Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb
[2026-01-31T14:13:59.086Z] [BOT] 💾 Added channel posting: Research Engineer Graduate - Ads ML Infrastructure - PhD @ ORG_1bb6fcfb → category channel (1 total channels)
[2026-01-31T14:13:59.086Z] [BOT] 💾 BEFORE MERGE: 1175 jobs in memory (cached)
[2026-01-31T14:13:59.117Z] [BOT] ✅ Loaded V2 database: 1174 jobs
💾 DISK STATE: 1174 jobs on disk
[2026-01-31T14:13:59.118Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1175
[2026-01-31T14:13:59.120Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1175 jobs (merged disk + memory)
[2026-01-31T14:13:59.121Z] [BOT] ✅ No jobs to archive (all 1175 jobs within 7-day window)
[2026-01-31T14:13:59.197Z] [BOT] 💾 Saved posted_jobs.json: 1175 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:14:00.699Z] [BOT] 📍 [ROUTING] "PhD Applied Scientist - Oracle Health & Analytics" @ ORG_dc7620eb
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T14:14:01.049Z] [BOT] ✅ Posted message: PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb
[2026-01-31T14:14:01.049Z] [BOT] 💾 Added channel posting: PhD Applied Scientist - Oracle Health & Analytics @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T14:14:01.050Z] [BOT] 💾 BEFORE MERGE: 1176 jobs in memory (cached)
[2026-01-31T14:14:01.080Z] [BOT] ✅ Loaded V2 database: 1175 jobs
💾 DISK STATE: 1175 jobs on disk
[2026-01-31T14:14:01.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1176
[2026-01-31T14:14:01.083Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T14:14:01.083Z] [BOT] 💾 AFTER MERGE: 1176 jobs (merged disk + memory)
[2026-01-31T14:14:01.084Z] [BOT] ✅ No jobs to archive (all 1176 jobs within 7-day window)
[2026-01-31T14:14:01.168Z] [BOT] 💾 Saved posted_jobs.json: 1176 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T14:14:05.668Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T14:14:05.669Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3878102c..." not found, but found as SHA256 "789c3aaa47ceb5b9"
[2026-01-31T14:14:05.669Z] [BOT] ⏭️  Skipping duplicate: JID_251589cd-iii_r_00040412 (posted within 7 days)
[2026-01-31T14:14:05.669Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_320be629..." not found, but found as SHA256 "2c3eab1b95c5cb60"
[2026-01-31T14:14:05.669Z] [BOT] ⏭️  Skipping duplicate: JID_668a806e-engineer_2531425 (posted within 7 days)
[2026-01-31T14:14:05.669Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8f11a139..." not found, but found as SHA256 "c5fb224fe7c97bb4"
⏭️  Skipping duplicate: JID_ad7950f3-_r-101815 (posted within 7 days)
[2026-01-31T14:14:05.670Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4696a521..." not found, but found as SHA256 "b831afb2457ed6e6"
[2026-01-31T14:14:05.670Z] [BOT] ⏭️  Skipping duplicate: JID_ea4a3d17-cx_1-job-1167 (posted within 7 days)
[2026-01-31T14:14:05.670Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e4e9bec6..." not found, but found as SHA256 "0d19116ac069c302"
[2026-01-31T14:14:05.670Z] [BOT] ⏭️  Skipping duplicate: JID_679ebc85-developer_jr100117-1 (posted within 7 days)
[2026-01-31T14:14:05.670Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6758fb39-..." not found, but found as SHA256 "bdd3cfedff531404"
[2026-01-31T14:14:05.670Z] [BOT] ⏭️  Skipping duplicate: JID_498dbc85 (posted within 7 days)
[2026-01-31T14:14:05.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2a8d07ba-global_ca..." not found, but found as SHA256 "2b93c14c2bc3a122"
[2026-01-31T14:14:05.671Z] [BOT] ⏭️  Skipping duplicate: JID_2a8d07ba-global_career_site-JID_1f81cbdc-_r0068868 (posted within 7 days)
[2026-01-31T14:14:05.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_88b1e0c0..." not found, but found as SHA256 "9e3e5e19080f9310"
⏭️  Skipping duplicate: JID_6796d1d6-CH_eae81305 (posted within 7 days)
[2026-01-31T14:14:05.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f04a7f76..." not found, but found as SHA256 "37bf76b90586ee76"
[2026-01-31T14:14:05.671Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f89204d4 (posted within 7 days)
[2026-01-31T14:14:05.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "54a41f4367a9c3b1"
[2026-01-31T14:14:05.671Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-317554 (posted within 7 days)
[2026-01-31T14:14:05.818Z] [BOT] ✅ Loaded pending queue: 2948 total (1761 pending, 50 enriched, 1137 posted)
[2026-01-31T14:14:06.009Z] [BOT] ✅ Saved pending queue: 2948 total (1761 pending, 40 enriched, 1147 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T14:14:06.105Z] [BOT] 📂 Loaded 11228 existing routing entries
[2026-01-31T14:14:06.222Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11238
   Timestamp: 2026-01-31T14:14:06.183Z
[2026-01-31T14:14:06.223Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T14:14:06.223Z] [BOT] Total attempts: 32
   Successful: 11
   Failed: 0
   Skipped: 21
[2026-01-31T14:14:06.223Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
[2026-01-31T14:14:06.223Z] [BOT] Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 2 posts
     3. #📊・JID_fb739488: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-31T14:14:06.224Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1176 jobs in memory (cached)
[2026-01-31T14:14:06.258Z] [BOT] ✅ Loaded V2 database: 1176 jobs
💾 DISK STATE: 1176 jobs on disk
[2026-01-31T14:14:06.259Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1176
[2026-01-31T14:14:06.261Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1176 jobs (merged disk + memory)
[2026-01-31T14:14:06.262Z] [BOT] ✅ No jobs to archive (all 1176 jobs within 7-day window)
[2026-01-31T14:14:06.358Z] [BOT] 💾 Saved posted_jobs.json: 1176 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-31T14:14:08.373Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2826) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*