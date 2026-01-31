# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T11:31:38.007Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T11:30:58.711Z] ========================================
[2026-01-31T11:30:58.712Z] Discord Bot Execution Log
[2026-01-31T11:30:58.712Z] Environment: GitHub Actions
[2026-01-31T11:30:58.713Z] Node Version: v20.20.0
[2026-01-31T11:30:58.713Z] ========================================
[2026-01-31T11:30:58.713Z] Environment Variables Check:
[2026-01-31T11:30:58.713Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T11:30:58.713Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.713Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T11:30:58.713Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T11:30:58.713Z] 
Multi-Channel Configuration:
[2026-01-31T11:30:58.713Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.713Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T11:30:58.714Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T11:30:58.714Z] 
Data Files Check:
[2026-01-31T11:30:58.715Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T11:30:58.747Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6804615 bytes)
[2026-01-31T11:30:58.747Z] 
========================================
[2026-01-31T11:30:58.747Z] Starting Enhanced Discord Bot...
[2026-01-31T11:30:58.747Z] ========================================
[2026-01-31T11:30:59.332Z] [BOT] ✅ Loaded V2 database: 1086 jobs
[2026-01-31T11:30:59.994Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T11:30:59.995Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T11:30:59.995Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T11:31:00.114Z] [BOT] ✅ Loaded pending queue: 2949 total (1842 pending, 50 enriched, 1057 posted)
[2026-01-31T11:31:00.114Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:31:00.115Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T11:31:00.115Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T11:31:00.116Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:31:00.116Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T11:31:00.116Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T11:31:00.116Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T11:31:00.117Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T11:31:00.117Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T11:31:00.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T11:31:00.118Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T11:31:00.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T11:31:00.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T11:31:00.118Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T11:31:00.118Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T11:31:00.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T11:31:00.119Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T11:31:00.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
[2026-01-31T11:31:00.119Z] [BOT] ⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T11:31:00.119Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T11:31:00.127Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T11:31:00.127Z] [BOT] 🚫 Skipping blacklisted job: Principal Mission Assurance Engineer at Northrop Grumman
🚫 Skipping blacklisted job: Director of Sales, Emerging & Scaled (New Business) at spotify
[2026-01-31T11:31:00.127Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Energy Systems at Argonne National Laboratory
🚫 Skipping blacklisted job: Senior – Data Scientist at Walmart
[2026-01-31T11:31:00.231Z] [BOT] ✅ Loaded pending queue: 2949 total (1842 pending, 50 enriched, 1057 posted)
[2026-01-31T11:31:00.405Z] [BOT] ✅ Saved pending queue: 2945 total (1842 pending, 46 enriched, 1057 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
[2026-01-31T11:31:00.406Z] [BOT] 📋 After blacklist filter: 32 jobs (4 blacklisted)
[2026-01-31T11:31:00.406Z] [BOT] 📋 After data quality filter: 32 jobs (0 invalid)
[2026-01-31T11:31:00.407Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-01-31T11:31:00.407Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T11:31:00.410Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2026-01-31T11:31:00.412Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ brex
[2026-01-31T11:31:00.412Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:31:00.429Z] [BOT ERROR] (node:3434) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T11:31:00.819Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #💰・finance-jobs
[2026-01-31T11:31:00.819Z] [BOT] ✅ Industry: Commercial Account Executive @ brex
[2026-01-31T11:31:00.820Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → category channel (1 total channels)
[2026-01-31T11:31:00.820Z] [BOT] 💾 BEFORE MERGE: 1087 jobs in memory (cached)
[2026-01-31T11:31:00.842Z] [BOT] ✅ Loaded V2 database: 1086 jobs
💾 DISK STATE: 1086 jobs on disk
[2026-01-31T11:31:00.843Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1087
[2026-01-31T11:31:00.845Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:31:00.845Z] [BOT] 💾 AFTER MERGE: 1087 jobs (merged disk + memory)
[2026-01-31T11:31:00.846Z] [BOT] ✅ No jobs to archive (all 1087 jobs within 7-day window)
[2026-01-31T11:31:00.916Z] [BOT] 💾 Saved posted_jobs.json: 1087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:02.568Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #🗽・JID_98d4f0de
[2026-01-31T11:31:02.568Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:31:02.568Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → location channel (2 total channels)
[2026-01-31T11:31:02.569Z] [BOT] 💾 BEFORE MERGE: 1087 jobs in memory (cached)
[2026-01-31T11:31:02.590Z] [BOT] ✅ Loaded V2 database: 1087 jobs
💾 DISK STATE: 1087 jobs on disk
[2026-01-31T11:31:02.590Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1087
[2026-01-31T11:31:02.592Z] [BOT] 🔀 Deep merged: Commercial Account Executive @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T11:31:02.592Z] [BOT] 💾 AFTER MERGE: 1087 jobs (merged disk + memory)
[2026-01-31T11:31:02.593Z] [BOT] ✅ No jobs to archive (all 1087 jobs within 7-day window)
[2026-01-31T11:31:02.656Z] [BOT] 💾 Saved posted_jobs.json: 1087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:04.157Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:31:04.289Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #💰・finance-jobs
[2026-01-31T11:31:04.289Z] [BOT] ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-31T11:31:04.290Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → category channel (1 total channels)
[2026-01-31T11:31:04.290Z] [BOT] 💾 BEFORE MERGE: 1088 jobs in memory (cached)
[2026-01-31T11:31:04.311Z] [BOT] ✅ Loaded V2 database: 1087 jobs
💾 DISK STATE: 1087 jobs on disk
[2026-01-31T11:31:04.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1088
[2026-01-31T11:31:04.314Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:31:04.314Z] [BOT] 💾 AFTER MERGE: 1088 jobs (merged disk + memory)
[2026-01-31T11:31:04.314Z] [BOT] ✅ No jobs to archive (all 1088 jobs within 7-day window)
[2026-01-31T11:31:04.382Z] [BOT] 💾 Saved posted_jobs.json: 1088 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:05.884Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:31:06.136Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #💰・finance-jobs
  ✅ Industry: Implementation Consultant II @ brex
[2026-01-31T11:31:06.137Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → category channel (1 total channels)
[2026-01-31T11:31:06.137Z] [BOT] 💾 BEFORE MERGE: 1089 jobs in memory (cached)
[2026-01-31T11:31:06.158Z] [BOT] ✅ Loaded V2 database: 1088 jobs
💾 DISK STATE: 1088 jobs on disk
[2026-01-31T11:31:06.159Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1089
[2026-01-31T11:31:06.161Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:31:06.161Z] [BOT] 💾 AFTER MERGE: 1089 jobs (merged disk + memory)
[2026-01-31T11:31:06.161Z] [BOT] ✅ No jobs to archive (all 1089 jobs within 7-day window)
[2026-01-31T11:31:06.224Z] [BOT] 💾 Saved posted_jobs.json: 1089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:07.726Z] [BOT] 📍 [ROUTING] "Startups Account Executive" @ brex
[2026-01-31T11:31:07.726Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:31:07.968Z] [BOT] ✅ Posted message: Startups Account Executive @ brex in #💰・finance-jobs
  ✅ Industry: Startups Account Executive @ brex
[2026-01-31T11:31:07.969Z] [BOT] 💾 Added channel posting: Startups Account Executive @ brex → category channel (1 total channels)
[2026-01-31T11:31:07.969Z] [BOT] 💾 BEFORE MERGE: 1090 jobs in memory (cached)
[2026-01-31T11:31:07.988Z] [BOT] ✅ Loaded V2 database: 1089 jobs
💾 DISK STATE: 1089 jobs on disk
[2026-01-31T11:31:07.988Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1090
[2026-01-31T11:31:07.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1090 jobs (merged disk + memory)
[2026-01-31T11:31:07.991Z] [BOT] ✅ No jobs to archive (all 1090 jobs within 7-day window)
[2026-01-31T11:31:08.051Z] [BOT] 💾 Saved posted_jobs.json: 1090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:09.784Z] [BOT] ✅ Posted message: Startups Account Executive @ brex in #🗽・JID_98d4f0de
[2026-01-31T11:31:09.785Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:31:09.785Z] [BOT] 💾 Added channel posting: Startups Account Executive @ brex → location channel (2 total channels)
[2026-01-31T11:31:09.785Z] [BOT] 💾 BEFORE MERGE: 1090 jobs in memory (cached)
[2026-01-31T11:31:09.806Z] [BOT] ✅ Loaded V2 database: 1090 jobs
💾 DISK STATE: 1090 jobs on disk
[2026-01-31T11:31:09.806Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1090
[2026-01-31T11:31:09.808Z] [BOT] 🔀 Deep merged: Startups Account Executive @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T11:31:09.808Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1090 jobs (merged disk + memory)
[2026-01-31T11:31:09.809Z] [BOT] ✅ No jobs to archive (all 1090 jobs within 7-day window)
[2026-01-31T11:31:09.880Z] [BOT] 💾 Saved posted_jobs.json: 1090 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:14.381Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-31T11:31:14.382Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
[2026-01-31T11:31:14.382Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:31:14.630Z] [BOT] ✅ Posted message: Product and Regulatory Counsel @ brex in #💻・tech-jobs
  ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-31T11:31:14.631Z] [BOT] 💾 Added channel posting: Product and Regulatory Counsel @ brex → category channel (1 total channels)
[2026-01-31T11:31:14.631Z] [BOT] 💾 BEFORE MERGE: 1091 jobs in memory (cached)
[2026-01-31T11:31:14.651Z] [BOT] ✅ Loaded V2 database: 1090 jobs
💾 DISK STATE: 1090 jobs on disk
[2026-01-31T11:31:14.651Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1091
[2026-01-31T11:31:14.653Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1091 jobs (merged disk + memory)
[2026-01-31T11:31:14.654Z] [BOT] ✅ No jobs to archive (all 1091 jobs within 7-day window)
[2026-01-31T11:31:14.715Z] [BOT] 💾 Saved posted_jobs.json: 1091 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:16.217Z] [BOT] 📍 [ROUTING] "Software Engineer II, Product " @ brex
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:31:16.443Z] [BOT] ✅ Posted message: Software Engineer II, Product  @ brex in #💻・tech-jobs
  ✅ Industry: Software Engineer II, Product  @ brex
[2026-01-31T11:31:16.444Z] [BOT] 💾 Added channel posting: Software Engineer II, Product  @ brex → category channel (1 total channels)
[2026-01-31T11:31:16.444Z] [BOT] 💾 BEFORE MERGE: 1092 jobs in memory (cached)
[2026-01-31T11:31:16.465Z] [BOT] ✅ Loaded V2 database: 1091 jobs
💾 DISK STATE: 1091 jobs on disk
[2026-01-31T11:31:16.465Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1092
[2026-01-31T11:31:16.467Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:31:16.467Z] [BOT] 💾 AFTER MERGE: 1092 jobs (merged disk + memory)
[2026-01-31T11:31:16.468Z] [BOT] ✅ No jobs to archive (all 1092 jobs within 7-day window)
[2026-01-31T11:31:16.550Z] [BOT] 💾 Saved posted_jobs.json: 1092 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:21.050Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T11:31:21.051Z] [BOT] 📍 [ROUTING] "Data Analyst - Python/SQL + Finance knowledge" @ ORG_23325912 Global
[2026-01-31T11:31:21.051Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T11:31:21.388Z] [BOT] ✅ Posted message: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global in #📊・JID_fb739488
  ✅ Industry: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global
[2026-01-31T11:31:21.388Z] [BOT] 💾 Added channel posting: Data Analyst - Python/SQL + Finance knowledge @ ORG_23325912 Global → category channel (1 total channels)
💾 BEFORE MERGE: 1093 jobs in memory (cached)
[2026-01-31T11:31:21.408Z] [BOT] ✅ Loaded V2 database: 1092 jobs
💾 DISK STATE: 1092 jobs on disk
[2026-01-31T11:31:21.409Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1093
[2026-01-31T11:31:21.411Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1093 jobs (merged disk + memory)
[2026-01-31T11:31:21.411Z] [BOT] ✅ No jobs to archive (all 1093 jobs within 7-day window)
[2026-01-31T11:31:21.472Z] [BOT] 💾 Saved posted_jobs.json: 1093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:25.974Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T11:31:25.975Z] [BOT] 📍 [ROUTING] "Research Scientist – New College Grad 2026 - Embodied and Agentic AI" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-31T11:31:25.975Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T11:31:26.314Z] [BOT] ✅ Posted message: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-31T11:31:26.314Z] [BOT] ✅ Industry: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456
[2026-01-31T11:31:26.315Z] [BOT] 💾 Added channel posting: Research Scientist – New College Grad 2026 - Embodied and Agentic AI @ ORG_0890f456 → category channel (1 total channels)
[2026-01-31T11:31:26.315Z] [BOT] 💾 BEFORE MERGE: 1094 jobs in memory (cached)
[2026-01-31T11:31:26.336Z] [BOT] ✅ Loaded V2 database: 1093 jobs
💾 DISK STATE: 1093 jobs on disk
[2026-01-31T11:31:26.336Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1094
[2026-01-31T11:31:26.338Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:31:26.338Z] [BOT] 💾 AFTER MERGE: 1094 jobs (merged disk + memory)
[2026-01-31T11:31:26.339Z] [BOT] ✅ No jobs to archive (all 1094 jobs within 7-day window)
[2026-01-31T11:31:26.409Z] [BOT] 💾 Saved posted_jobs.json: 1094 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:27.912Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Portuguese Speaking" @ figma
[2026-01-31T11:31:27.912Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T11:31:28.086Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Portuguese Speaking @ figma in #🤖・ai-jobs
[2026-01-31T11:31:28.087Z] [BOT] ✅ Industry: Enterprise Support Specialist, Portuguese Speaking @ figma
[2026-01-31T11:31:28.087Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Portuguese Speaking @ figma → category channel (1 total channels)
[2026-01-31T11:31:28.087Z] [BOT] 💾 BEFORE MERGE: 1095 jobs in memory (cached)
[2026-01-31T11:31:28.107Z] [BOT] ✅ Loaded V2 database: 1094 jobs
💾 DISK STATE: 1094 jobs on disk
[2026-01-31T11:31:28.107Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1095
[2026-01-31T11:31:28.109Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1095 jobs (merged disk + memory)
[2026-01-31T11:31:28.110Z] [BOT] ✅ No jobs to archive (all 1095 jobs within 7-day window)
[2026-01-31T11:31:28.173Z] [BOT] 💾 Saved posted_jobs.json: 1095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:29.674Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Korean Speaking" @ figma
[2026-01-31T11:31:29.675Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T11:31:29.865Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Korean Speaking @ figma in #🤖・ai-jobs
[2026-01-31T11:31:29.865Z] [BOT] ✅ Industry: Enterprise Support Specialist, Korean Speaking @ figma
[2026-01-31T11:31:29.865Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Korean Speaking @ figma → category channel (1 total channels)
[2026-01-31T11:31:29.865Z] [BOT] 💾 BEFORE MERGE: 1096 jobs in memory (cached)
[2026-01-31T11:31:29.885Z] [BOT] ✅ Loaded V2 database: 1095 jobs
💾 DISK STATE: 1095 jobs on disk
[2026-01-31T11:31:29.885Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1096
[2026-01-31T11:31:29.887Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:31:29.887Z] [BOT] 💾 AFTER MERGE: 1096 jobs (merged disk + memory)
[2026-01-31T11:31:29.888Z] [BOT] ✅ No jobs to archive (all 1096 jobs within 7-day window)
[2026-01-31T11:31:29.953Z] [BOT] 💾 Saved posted_jobs.json: 1096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:34.455Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T11:31:34.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f3e59d4..." not found, but found as SHA256 "5bf2c8e03d19a57d"
⏭️  Skipping duplicate: JID_9f3e59d4 (posted within 7 days)
[2026-01-31T11:31:34.457Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10bdb21c..." not found, but found as SHA256 "e9084a1b8c1f9b17"
[2026-01-31T11:31:34.457Z] [BOT] ⏭️  Skipping duplicate: JID_10bdb21c (posted within 7 days)
[2026-01-31T11:31:34.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f4474f7a..." not found, but found as SHA256 "51e4bfb72f2884ec"
[2026-01-31T11:31:34.458Z] [BOT] ⏭️  Skipping duplicate: JID_f4474f7a (posted within 7 days)
[2026-01-31T11:31:34.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2d09099b..." not found, but found as SHA256 "32f74dd46518e485"
[2026-01-31T11:31:34.458Z] [BOT] ⏭️  Skipping duplicate: JID_2d09099b (posted within 7 days)
[2026-01-31T11:31:34.458Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_76cb04eb..." not found, but found as SHA256 "c5c4725c72d0dc83"
[2026-01-31T11:31:34.459Z] [BOT] ⏭️  Skipping duplicate: JID_76cb04eb (posted within 7 days)
[2026-01-31T11:31:34.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bb4f8bca..." not found, but found as SHA256 "0ff803622f80c0a7"
⏭️  Skipping duplicate: JID_bb4f8bca (posted within 7 days)
[2026-01-31T11:31:34.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_867a22df..." not found, but found as SHA256 "4060b473bd4870e6"
[2026-01-31T11:31:34.459Z] [BOT] ⏭️  Skipping duplicate: JID_a13b88d4 (posted within 7 days)
[2026-01-31T11:31:34.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "7ef8c2dd4a0e680f"
⏭️  Skipping duplicate: JID_a997bf5d-2026_jr2009464 (posted within 7 days)
[2026-01-31T11:31:34.459Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ff02a718..." not found, but found as SHA256 "9990038b87bab02f"
⏭️  Skipping duplicate: JID_a84fdeff (posted within 7 days)
[2026-01-31T11:31:34.460Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dbf87cfd..." not found, but found as SHA256 "d6b8fb9132a1a7ab"
[2026-01-31T11:31:34.460Z] [BOT] ⏭️  Skipping duplicate: JID_88d8e6a9 (posted within 7 days)
[2026-01-31T11:31:34.568Z] [BOT] ✅ Loaded pending queue: 2945 total (1842 pending, 46 enriched, 1057 posted)
[2026-01-31T11:31:34.753Z] [BOT] ✅ Saved pending queue: 2945 total (1842 pending, 36 enriched, 1067 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T11:31:34.753Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T11:31:34.839Z] [BOT] 📂 Loaded 11148 existing routing entries
[2026-01-31T11:31:34.961Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11158
   Timestamp: 2026-01-31T11:31:34.917Z
[2026-01-31T11:31:34.965Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 30
   Successful: 12
   Failed: 0
   Skipped: 18
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 5
   Top channels:
     1. #💰・finance-jobs: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #💻・tech-jobs: 2 posts
     5. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1096 jobs in memory (cached)
[2026-01-31T11:31:34.996Z] [BOT] ✅ Loaded V2 database: 1096 jobs
💾 DISK STATE: 1096 jobs on disk
[2026-01-31T11:31:34.996Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1096
[2026-01-31T11:31:34.999Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:31:34.999Z] [BOT] 💾 AFTER MERGE: 1096 jobs (merged disk + memory)
[2026-01-31T11:31:35.000Z] [BOT] ✅ No jobs to archive (all 1096 jobs within 7-day window)
[2026-01-31T11:31:35.061Z] [BOT] 💾 Saved posted_jobs.json: 1096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:31:35.061Z] [BOT] ✅ Database saved successfully
[2026-01-31T11:31:37.090Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3434) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*