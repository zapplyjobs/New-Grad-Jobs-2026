# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T11:01:26.033Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T11:00:52.654Z] ========================================
[2026-01-31T11:00:52.656Z] Discord Bot Execution Log
[2026-01-31T11:00:52.656Z] Environment: GitHub Actions
[2026-01-31T11:00:52.656Z] Node Version: v20.20.0
[2026-01-31T11:00:52.656Z] ========================================
[2026-01-31T11:00:52.656Z] Environment Variables Check:
[2026-01-31T11:00:52.656Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T11:00:52.656Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.656Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T11:00:52.656Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T11:00:52.656Z] 
Multi-Channel Configuration:
[2026-01-31T11:00:52.657Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T11:00:52.657Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T11:00:52.657Z] 
Data Files Check:
[2026-01-31T11:00:52.658Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T11:00:52.691Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6667597 bytes)
[2026-01-31T11:00:52.691Z] 
========================================
[2026-01-31T11:00:52.691Z] Starting Enhanced Discord Bot...
[2026-01-31T11:00:52.691Z] ========================================
[2026-01-31T11:00:53.243Z] [BOT] ✅ Loaded V2 database: 1068 jobs
[2026-01-31T11:00:53.942Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T11:00:53.942Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T11:00:53.943Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T11:00:54.088Z] [BOT] ✅ Loaded pending queue: 2950 total (1861 pending, 50 enriched, 1039 posted)
[2026-01-31T11:00:54.088Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:00:54.089Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T11:00:54.089Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:00:54.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T11:00:54.090Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T11:00:54.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T11:00:54.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T11:00:54.090Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T11:00:54.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T11:00:54.091Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T11:00:54.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T11:00:54.091Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T11:00:54.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T11:00:54.092Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T11:00:54.092Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T11:00:54.092Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T11:00:54.092Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T11:00:54.092Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T11:00:54.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T11:00:54.093Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T11:00:54.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T11:00:54.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T11:00:54.099Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T11:00:54.100Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Acquisition at brex
[2026-01-31T11:00:54.100Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Acquisition at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Activation at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Risk Management at brex
[2026-01-31T11:00:54.100Z] [BOT] 🚫 Skipping blacklisted job: Senior Engineering Manager, Risk Management  at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Risk Management  at brex
🚫 Skipping blacklisted job: Senior GTM Recruiter at brex
🚫 Skipping blacklisted job: Senior GTM Recruiter at brex
🚫 Skipping blacklisted job: Senior GTM Recruiter at brex
🚫 Skipping blacklisted job:  Senior Manager, Implementation at brex
[2026-01-31T11:00:54.100Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Implementation at brex
🚫 Skipping blacklisted job: Senior Manager, Implementation at brex
🚫 Skipping blacklisted job: Senior Manager, Implementation at brex
🚫 Skipping blacklisted job: Senior Software Engineer, Full-Stack at brex
[2026-01-31T11:00:54.100Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Product  at brex
🚫 Skipping blacklisted job: Staff Brand Designer, Interactive at brex
[2026-01-31T11:00:54.203Z] [BOT] ✅ Loaded pending queue: 2950 total (1861 pending, 50 enriched, 1039 posted)
[2026-01-31T11:00:54.379Z] [BOT] ✅ Saved pending queue: 2933 total (1861 pending, 33 enriched, 1039 posted)
🗑️ Removed 17 blacklisted jobs from pending queue
[2026-01-31T11:00:54.379Z] [BOT] 📋 After blacklist filter: 19 jobs (17 blacklisted)
📋 After data quality filter: 19 jobs (0 invalid)
[2026-01-31T11:00:54.380Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-31T11:00:54.380Z] [BOT] (11 grouped as same job with different locations)
📍 6 jobs with multiple locations:
   - Commercial Account Executive @ brex: san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Enterprise Implementation Consultant, Financial Saas @ brex: salt lake city, utah, united states, san francisco, california, united states, seattle, washington, united states
   - Implementation Consultant II @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Outbound Sales Development Representative @ brex: salt lake city, utah, united states, seattle, washington, united states
[2026-01-31T11:00:54.380Z] [BOT] - Product and Regulatory Counsel @ brex: new york, new york, united states, san francisco, california, united states, salt lake city, utah, united states
   - Software Engineer II, Product  @ brex: san francisco, california, united states, new york, new york, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 28 deferred for next run
📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T11:00:54.384Z] [BOT] 📌 Posting 5 jobs to #💰・finance-jobs
[2026-01-31T11:00:54.385Z] [BOT] 📍 [ROUTING] "Banking Specialist" @ brex
[2026-01-31T11:00:54.385Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:00:54.403Z] [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T11:00:54.715Z] [BOT] ✅ Posted message: Banking Specialist @ brex in #💰・finance-jobs
[2026-01-31T11:00:54.716Z] [BOT] ✅ Industry: Banking Specialist @ brex
[2026-01-31T11:00:54.716Z] [BOT] 💾 Added channel posting: Banking Specialist @ brex → category channel (1 total channels)
[2026-01-31T11:00:54.717Z] [BOT] 💾 BEFORE MERGE: 1069 jobs in memory (cached)
[2026-01-31T11:00:54.737Z] [BOT] ✅ Loaded V2 database: 1068 jobs
💾 DISK STATE: 1068 jobs on disk
[2026-01-31T11:00:54.737Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1069
[2026-01-31T11:00:54.740Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:00:54.740Z] [BOT] 💾 AFTER MERGE: 1069 jobs (merged disk + memory)
[2026-01-31T11:00:54.741Z] [BOT] ✅ No jobs to archive (all 1069 jobs within 7-day window)
[2026-01-31T11:00:54.821Z] [BOT] 💾 Saved posted_jobs.json: 1069 active jobs
[2026-01-31T11:00:54.821Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T11:00:56.323Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:00:56.532Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #💰・finance-jobs
[2026-01-31T11:00:56.532Z] [BOT] ✅ Industry: Commercial Account Executive @ brex
[2026-01-31T11:00:56.532Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → category channel (1 total channels)
[2026-01-31T11:00:56.532Z] [BOT] 💾 BEFORE MERGE: 1070 jobs in memory (cached)
[2026-01-31T11:00:56.553Z] [BOT] ✅ Loaded V2 database: 1069 jobs
[2026-01-31T11:00:56.553Z] [BOT] 💾 DISK STATE: 1069 jobs on disk
[2026-01-31T11:00:56.553Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1070
[2026-01-31T11:00:56.555Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:00:56.555Z] [BOT] 💾 AFTER MERGE: 1070 jobs (merged disk + memory)
[2026-01-31T11:00:56.556Z] [BOT] ✅ No jobs to archive (all 1070 jobs within 7-day window)
[2026-01-31T11:00:56.620Z] [BOT] 💾 Saved posted_jobs.json: 1070 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:00:58.123Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:00:58.325Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #💰・finance-jobs
[2026-01-31T11:00:58.325Z] [BOT] ✅ Industry: Enterprise Account Executive @ brex
[2026-01-31T11:00:58.325Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → category channel (1 total channels)
[2026-01-31T11:00:58.326Z] [BOT] 💾 BEFORE MERGE: 1071 jobs in memory (cached)
[2026-01-31T11:00:58.346Z] [BOT] ✅ Loaded V2 database: 1070 jobs
💾 DISK STATE: 1070 jobs on disk
[2026-01-31T11:00:58.346Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1071
[2026-01-31T11:00:58.349Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:00:58.349Z] [BOT] 💾 AFTER MERGE: 1071 jobs (merged disk + memory)
[2026-01-31T11:00:58.350Z] [BOT] ✅ No jobs to archive (all 1071 jobs within 7-day window)
[2026-01-31T11:00:58.413Z] [BOT] 💾 Saved posted_jobs.json: 1071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:00.146Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #🗽・JID_98d4f0de
[2026-01-31T11:01:00.146Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:01:00.147Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 1071 jobs in memory (cached)
[2026-01-31T11:01:00.168Z] [BOT] ✅ Loaded V2 database: 1071 jobs
💾 DISK STATE: 1071 jobs on disk
[2026-01-31T11:01:00.168Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1071
[2026-01-31T11:01:00.170Z] [BOT] 🔀 Deep merged: Enterprise Account Executive @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T11:01:00.170Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1071 jobs (merged disk + memory)
[2026-01-31T11:01:00.171Z] [BOT] ✅ No jobs to archive (all 1071 jobs within 7-day window)
[2026-01-31T11:01:00.232Z] [BOT] 💾 Saved posted_jobs.json: 1071 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:01.733Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:01:02.055Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #💰・finance-jobs
  ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-31T11:01:02.056Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → category channel (1 total channels)
[2026-01-31T11:01:02.056Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory (cached)
[2026-01-31T11:01:02.084Z] [BOT] ✅ Loaded V2 database: 1071 jobs
💾 DISK STATE: 1071 jobs on disk
[2026-01-31T11:01:02.084Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1072
[2026-01-31T11:01:02.087Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:01:02.087Z] [BOT] 💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-31T11:01:02.087Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-31T11:01:02.174Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
[2026-01-31T11:01:02.174Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:03.862Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T11:01:03.862Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → location channel (2 total channels)
[2026-01-31T11:01:03.862Z] [BOT] 💾 BEFORE MERGE: 1072 jobs in memory (cached)
[2026-01-31T11:01:03.882Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-31T11:01:03.882Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1072
[2026-01-31T11:01:03.884Z] [BOT] 🔀 Deep merged: Enterprise Implementation Consultant, Financial Saas @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1072 jobs (merged disk + memory)
[2026-01-31T11:01:03.885Z] [BOT] ✅ No jobs to archive (all 1072 jobs within 7-day window)
[2026-01-31T11:01:03.944Z] [BOT] 💾 Saved posted_jobs.json: 1072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:05.445Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
   Category: FINANCE (matched: "accounting")
[2026-01-31T11:01:05.445Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:01:05.663Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #💰・finance-jobs
  ✅ Industry: Implementation Consultant II @ brex
[2026-01-31T11:01:05.664Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 1073 jobs in memory (cached)
[2026-01-31T11:01:05.684Z] [BOT] ✅ Loaded V2 database: 1072 jobs
💾 DISK STATE: 1072 jobs on disk
[2026-01-31T11:01:05.684Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1073
[2026-01-31T11:01:05.686Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:01:05.686Z] [BOT] 💾 AFTER MERGE: 1073 jobs (merged disk + memory)
[2026-01-31T11:01:05.687Z] [BOT] ✅ No jobs to archive (all 1073 jobs within 7-day window)
[2026-01-31T11:01:05.748Z] [BOT] 💾 Saved posted_jobs.json: 1073 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:10.250Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-31T11:01:10.250Z] [BOT] 📍 [ROUTING] "Outbound Sales Development Representative" @ brex
[2026-01-31T11:01:10.250Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:01:10.625Z] [BOT] ✅ Posted message: Outbound Sales Development Representative @ brex in #💻・tech-jobs
[2026-01-31T11:01:10.625Z] [BOT] ✅ Industry: Outbound Sales Development Representative @ brex
[2026-01-31T11:01:10.625Z] [BOT] 💾 Added channel posting: Outbound Sales Development Representative @ brex → category channel (1 total channels)
[2026-01-31T11:01:10.625Z] [BOT] 💾 BEFORE MERGE: 1074 jobs in memory (cached)
[2026-01-31T11:01:10.645Z] [BOT] ✅ Loaded V2 database: 1073 jobs
💾 DISK STATE: 1073 jobs on disk
[2026-01-31T11:01:10.646Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1074
[2026-01-31T11:01:10.647Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:01:10.648Z] [BOT] 💾 AFTER MERGE: 1074 jobs (merged disk + memory)
[2026-01-31T11:01:10.648Z] [BOT] ✅ No jobs to archive (all 1074 jobs within 7-day window)
[2026-01-31T11:01:10.711Z] [BOT] 💾 Saved posted_jobs.json: 1074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:12.375Z] [BOT] ✅ Posted message: Outbound Sales Development Representative @ brex in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T11:01:12.375Z] [BOT] 💾 Added channel posting: Outbound Sales Development Representative @ brex → location channel (2 total channels)
[2026-01-31T11:01:12.375Z] [BOT] 💾 BEFORE MERGE: 1074 jobs in memory (cached)
[2026-01-31T11:01:12.396Z] [BOT] ✅ Loaded V2 database: 1074 jobs
💾 DISK STATE: 1074 jobs on disk
[2026-01-31T11:01:12.396Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1074
[2026-01-31T11:01:12.398Z] [BOT] 🔀 Deep merged: Outbound Sales Development Representative @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T11:01:12.398Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1074 jobs (merged disk + memory)
[2026-01-31T11:01:12.399Z] [BOT] ✅ No jobs to archive (all 1074 jobs within 7-day window)
[2026-01-31T11:01:12.461Z] [BOT] 💾 Saved posted_jobs.json: 1074 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:13.962Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
[2026-01-31T11:01:13.962Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:01:14.130Z] [BOT] ✅ Posted message: Product and Regulatory Counsel @ brex in #💻・tech-jobs
  ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-31T11:01:14.131Z] [BOT] 💾 Added channel posting: Product and Regulatory Counsel @ brex → category channel (1 total channels)
[2026-01-31T11:01:14.131Z] [BOT] 💾 BEFORE MERGE: 1075 jobs in memory (cached)
[2026-01-31T11:01:14.151Z] [BOT] ✅ Loaded V2 database: 1074 jobs
💾 DISK STATE: 1074 jobs on disk
[2026-01-31T11:01:14.151Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1075
[2026-01-31T11:01:14.153Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:01:14.153Z] [BOT] 💾 AFTER MERGE: 1075 jobs (merged disk + memory)
[2026-01-31T11:01:14.154Z] [BOT] ✅ No jobs to archive (all 1075 jobs within 7-day window)
[2026-01-31T11:01:14.214Z] [BOT] 💾 Saved posted_jobs.json: 1075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:15.968Z] [BOT] ✅ Posted message: Product and Regulatory Counsel @ brex in #🗽・JID_98d4f0de
[2026-01-31T11:01:15.968Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:01:15.968Z] [BOT] 💾 Added channel posting: Product and Regulatory Counsel @ brex → location channel (2 total channels)
[2026-01-31T11:01:15.968Z] [BOT] 💾 BEFORE MERGE: 1075 jobs in memory (cached)
[2026-01-31T11:01:15.989Z] [BOT] ✅ Loaded V2 database: 1075 jobs
💾 DISK STATE: 1075 jobs on disk
[2026-01-31T11:01:15.989Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1075
[2026-01-31T11:01:15.991Z] [BOT] 🔀 Deep merged: Product and Regulatory Counsel @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T11:01:15.991Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1075 jobs (merged disk + memory)
[2026-01-31T11:01:15.992Z] [BOT] ✅ No jobs to archive (all 1075 jobs within 7-day window)
[2026-01-31T11:01:16.058Z] [BOT] 💾 Saved posted_jobs.json: 1075 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:17.560Z] [BOT] 📍 [ROUTING] "Software Engineer II, Product " @ brex
[2026-01-31T11:01:17.560Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:01:17.733Z] [BOT] ✅ Posted message: Software Engineer II, Product  @ brex in #💻・tech-jobs
[2026-01-31T11:01:17.733Z] [BOT] ✅ Industry: Software Engineer II, Product  @ brex
[2026-01-31T11:01:17.734Z] [BOT] 💾 Added channel posting: Software Engineer II, Product  @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 1076 jobs in memory (cached)
[2026-01-31T11:01:17.754Z] [BOT] ✅ Loaded V2 database: 1075 jobs
💾 DISK STATE: 1075 jobs on disk
[2026-01-31T11:01:17.754Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1076
[2026-01-31T11:01:17.756Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:01:17.756Z] [BOT] 💾 AFTER MERGE: 1076 jobs (merged disk + memory)
[2026-01-31T11:01:17.757Z] [BOT] ✅ No jobs to archive (all 1076 jobs within 7-day window)
[2026-01-31T11:01:17.817Z] [BOT] 💾 Saved posted_jobs.json: 1076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:22.320Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-31T11:01:22.321Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2bca827b..." not found, but found as SHA256 "8fccc292d79b56db"
[2026-01-31T11:01:22.321Z] [BOT] ⏭️  Skipping duplicate: JID_2bca827b (posted within 7 days)
[2026-01-31T11:01:22.322Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_630a219c..." not found, but found as SHA256 "d121f11a2025fdf9"
⏭️  Skipping duplicate: JID_630a219c (posted within 7 days)
[2026-01-31T11:01:22.322Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_628e7251..." not found, but found as SHA256 "8eec4559ef5cb6bd"
⏭️  Skipping duplicate: JID_628e7251 (posted within 7 days)
[2026-01-31T11:01:22.322Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0d084920..." not found, but found as SHA256 "dc287352440c43d9"
[2026-01-31T11:01:22.322Z] [BOT] ⏭️  Skipping duplicate: JID_0d084920 (posted within 7 days)
[2026-01-31T11:01:22.322Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_37b4ae12..." not found, but found as SHA256 "20173b2982b7ce17"
⏭️  Skipping duplicate: JID_37b4ae12 (posted within 7 days)
[2026-01-31T11:01:22.323Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e717def7..." not found, but found as SHA256 "fdde4eb855c13abd"
⏭️  Skipping duplicate: JID_e717def7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6d46eb4d..." not found, but found as SHA256 "845d23c2ccf50166"
⏭️  Skipping duplicate: JID_6d46eb4d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e617f383..." not found, but found as SHA256 "d818ff3287365327"
⏭️  Skipping duplicate: JID_e617f383 (posted within 7 days)
[2026-01-31T11:01:22.433Z] [BOT] ✅ Loaded pending queue: 2933 total (1861 pending, 33 enriched, 1039 posted)
[2026-01-31T11:01:22.676Z] [BOT] ✅ Saved pending queue: 2933 total (1861 pending, 25 enriched, 1047 posted)
📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T11:01:22.762Z] [BOT] 📂 Loaded 11130 existing routing entries
[2026-01-31T11:01:22.900Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T11:01:22.900Z] [BOT] New entries: 8
   Total entries: 11138
   Timestamp: 2026-01-31T11:01:22.856Z
[2026-01-31T11:01:22.901Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T11:01:22.901Z] [BOT] Total attempts: 43
   Successful: 12
   Failed: 0
   Skipped: 31
[2026-01-31T11:01:22.901Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T11:01:22.901Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-31T11:01:22.902Z] [BOT] 1. #💰・finance-jobs: 5 posts
     2. #💻・tech-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 2 posts
[2026-01-31T11:01:22.902Z] [BOT] [STATS] Channel stats saved
[2026-01-31T11:01:22.902Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 1076 jobs in memory (cached)
[2026-01-31T11:01:22.924Z] [BOT] ✅ Loaded V2 database: 1076 jobs
💾 DISK STATE: 1076 jobs on disk
[2026-01-31T11:01:22.924Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1076
[2026-01-31T11:01:22.926Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:01:22.926Z] [BOT] 💾 AFTER MERGE: 1076 jobs (merged disk + memory)
[2026-01-31T11:01:22.927Z] [BOT] ✅ No jobs to archive (all 1076 jobs within 7-day window)
[2026-01-31T11:01:22.995Z] [BOT] 💾 Saved posted_jobs.json: 1076 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:01:22.995Z] [BOT] ✅ Database saved successfully
[2026-01-31T11:01:25.025Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2509) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*