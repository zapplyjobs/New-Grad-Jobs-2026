# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T11:15:34.457Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T11:14:55.436Z] ========================================
[2026-01-31T11:14:55.438Z] Discord Bot Execution Log
[2026-01-31T11:14:55.438Z] Environment: GitHub Actions
[2026-01-31T11:14:55.438Z] Node Version: v20.20.0
[2026-01-31T11:14:55.438Z] ========================================
[2026-01-31T11:14:55.438Z] Environment Variables Check:
[2026-01-31T11:14:55.438Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T11:14:55.439Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T11:14:55.439Z] 
Multi-Channel Configuration:
[2026-01-31T11:14:55.439Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.439Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.440Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.440Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T11:14:55.440Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T11:14:55.440Z] 
Data Files Check:
[2026-01-31T11:14:55.441Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T11:14:55.473Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6733332 bytes)
[2026-01-31T11:14:55.473Z] 
========================================
[2026-01-31T11:14:55.473Z] Starting Enhanced Discord Bot...
[2026-01-31T11:14:55.474Z] ========================================
[2026-01-31T11:14:56.031Z] [BOT] ✅ Loaded V2 database: 1076 jobs
[2026-01-31T11:14:56.738Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T11:14:56.738Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T11:14:56.739Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T11:14:56.854Z] [BOT] ✅ Loaded pending queue: 2950 total (1853 pending, 50 enriched, 1047 posted)
[2026-01-31T11:14:56.855Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:14:56.856Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T11:14:56.856Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:14:56.856Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T11:14:56.857Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T11:14:56.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T11:14:56.857Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T11:14:56.857Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T11:14:56.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T11:14:56.858Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T11:14:56.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T11:14:56.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T11:14:56.859Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T11:14:56.859Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-31T11:14:56.859Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T11:14:56.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T11:14:56.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T11:14:56.860Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T11:14:56.860Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T11:14:56.867Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T11:14:56.867Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at brex
[2026-01-31T11:14:56.867Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Designer at brex
🚫 Skipping blacklisted job: Staff Engineer I, Software Process Engineering at Samsung
🚫 Skipping blacklisted job: Staff Analytics Engineer at gohighlevel
[2026-01-31T11:14:56.868Z] [BOT] 🚫 Skipping blacklisted job: Senior Systems Engineer - Corporate Systems at Marriott International
[2026-01-31T11:14:56.978Z] [BOT] ✅ Loaded pending queue: 2950 total (1853 pending, 50 enriched, 1047 posted)
[2026-01-31T11:14:57.185Z] [BOT] ✅ Saved pending queue: 2945 total (1853 pending, 45 enriched, 1047 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
📋 After blacklist filter: 31 jobs (5 blacklisted)
[2026-01-31T11:14:57.185Z] [BOT] 📋 After data quality filter: 31 jobs (0 invalid)
[2026-01-31T11:14:57.186Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-01-31T11:14:57.186Z] [BOT] (6 grouped as same job with different locations)
📍 6 jobs with multiple locations:
[2026-01-31T11:14:57.186Z] [BOT] - Commercial Account Executive @ brex: seattle, washington, united states, new york, new york, united states
   - Enterprise Implementation Consultant, Financial Saas @ brex: san francisco, california, united states, seattle, washington, united states
   - Implementation Consultant II @ brex: new york, new york, united states, san francisco, california, united states
   - Product and Regulatory Counsel @ brex: san francisco, california, united states, salt lake city, utah, united states
   - Software Engineer II, Product  @ brex: new york, new york, united states, seattle, washington, united states
   - Startups Account Executive @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T11:14:57.191Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2026-01-31T11:14:57.192Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ brex
[2026-01-31T11:14:57.192Z] [BOT] Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:14:57.210Z] [BOT ERROR] (node:4234) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T11:14:57.415Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #💰・finance-jobs
[2026-01-31T11:14:57.416Z] [BOT] ✅ Industry: Commercial Account Executive @ brex
[2026-01-31T11:14:57.416Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → category channel (1 total channels)
[2026-01-31T11:14:57.417Z] [BOT] 💾 BEFORE MERGE: 1077 jobs in memory (cached)
[2026-01-31T11:14:57.439Z] [BOT] ✅ Loaded V2 database: 1076 jobs
💾 DISK STATE: 1076 jobs on disk
[2026-01-31T11:14:57.440Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1077
[2026-01-31T11:14:57.443Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:14:57.443Z] [BOT] 💾 AFTER MERGE: 1077 jobs (merged disk + memory)
[2026-01-31T11:14:57.443Z] [BOT] ✅ No jobs to archive (all 1077 jobs within 7-day window)
[2026-01-31T11:14:57.528Z] [BOT] 💾 Saved posted_jobs.json: 1077 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:14:59.030Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:14:59.286Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #💰・finance-jobs
[2026-01-31T11:14:59.286Z] [BOT] ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-31T11:14:59.286Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → category channel (1 total channels)
[2026-01-31T11:14:59.286Z] [BOT] 💾 BEFORE MERGE: 1078 jobs in memory (cached)
[2026-01-31T11:14:59.308Z] [BOT] ✅ Loaded V2 database: 1077 jobs
💾 DISK STATE: 1077 jobs on disk
[2026-01-31T11:14:59.308Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1078
[2026-01-31T11:14:59.310Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:14:59.310Z] [BOT] 💾 AFTER MERGE: 1078 jobs (merged disk + memory)
[2026-01-31T11:14:59.311Z] [BOT] ✅ No jobs to archive (all 1078 jobs within 7-day window)
[2026-01-31T11:14:59.376Z] [BOT] 💾 Saved posted_jobs.json: 1078 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:00.877Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:15:01.148Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #💰・finance-jobs
  ✅ Industry: Implementation Consultant II @ brex
[2026-01-31T11:15:01.149Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → category channel (1 total channels)
[2026-01-31T11:15:01.149Z] [BOT] 💾 BEFORE MERGE: 1079 jobs in memory (cached)
[2026-01-31T11:15:01.170Z] [BOT] ✅ Loaded V2 database: 1078 jobs
💾 DISK STATE: 1078 jobs on disk
[2026-01-31T11:15:01.171Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1079
[2026-01-31T11:15:01.173Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:15:01.173Z] [BOT] 💾 AFTER MERGE: 1079 jobs (merged disk + memory)
[2026-01-31T11:15:01.174Z] [BOT] ✅ No jobs to archive (all 1079 jobs within 7-day window)
[2026-01-31T11:15:01.241Z] [BOT] 💾 Saved posted_jobs.json: 1079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:02.923Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #🗽・JID_98d4f0de
[2026-01-31T11:15:02.923Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:15:02.924Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → location channel (2 total channels)
[2026-01-31T11:15:02.925Z] [BOT] 💾 BEFORE MERGE: 1079 jobs in memory (cached)
[2026-01-31T11:15:02.946Z] [BOT] ✅ Loaded V2 database: 1079 jobs
💾 DISK STATE: 1079 jobs on disk
[2026-01-31T11:15:02.946Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1079
[2026-01-31T11:15:02.948Z] [BOT] 🔀 Deep merged: Implementation Consultant II @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T11:15:02.948Z] [BOT] 💾 AFTER MERGE: 1079 jobs (merged disk + memory)
[2026-01-31T11:15:02.949Z] [BOT] ✅ No jobs to archive (all 1079 jobs within 7-day window)
[2026-01-31T11:15:03.030Z] [BOT] 💾 Saved posted_jobs.json: 1079 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:04.528Z] [BOT] 📍 [ROUTING] "Startups Account Executive" @ brex
[2026-01-31T11:15:04.529Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T11:15:04.792Z] [BOT] ✅ Posted message: Startups Account Executive @ brex in #💰・finance-jobs
[2026-01-31T11:15:04.792Z] [BOT] ✅ Industry: Startups Account Executive @ brex
[2026-01-31T11:15:04.793Z] [BOT] 💾 Added channel posting: Startups Account Executive @ brex → category channel (1 total channels)
[2026-01-31T11:15:04.793Z] [BOT] 💾 BEFORE MERGE: 1080 jobs in memory (cached)
[2026-01-31T11:15:04.813Z] [BOT] ✅ Loaded V2 database: 1079 jobs
💾 DISK STATE: 1079 jobs on disk
[2026-01-31T11:15:04.814Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1080
[2026-01-31T11:15:04.816Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:15:04.817Z] [BOT] 💾 AFTER MERGE: 1080 jobs (merged disk + memory)
[2026-01-31T11:15:04.817Z] [BOT] ✅ No jobs to archive (all 1080 jobs within 7-day window)
[2026-01-31T11:15:04.880Z] [BOT] 💾 Saved posted_jobs.json: 1080 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:09.383Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T11:15:09.384Z] [BOT] 📍 [ROUTING] "Outbound Sales Development Representative" @ brex
[2026-01-31T11:15:09.384Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:15:09.642Z] [BOT] ✅ Posted message: Outbound Sales Development Representative @ brex in #💻・tech-jobs
[2026-01-31T11:15:09.642Z] [BOT] ✅ Industry: Outbound Sales Development Representative @ brex
[2026-01-31T11:15:09.643Z] [BOT] 💾 Added channel posting: Outbound Sales Development Representative @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 1081 jobs in memory (cached)
[2026-01-31T11:15:09.664Z] [BOT] ✅ Loaded V2 database: 1080 jobs
💾 DISK STATE: 1080 jobs on disk
[2026-01-31T11:15:09.664Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1081
[2026-01-31T11:15:09.666Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:15:09.667Z] [BOT] 💾 AFTER MERGE: 1081 jobs (merged disk + memory)
[2026-01-31T11:15:09.667Z] [BOT] ✅ No jobs to archive (all 1081 jobs within 7-day window)
[2026-01-31T11:15:09.730Z] [BOT] 💾 Saved posted_jobs.json: 1081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:11.232Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:15:11.515Z] [BOT] ✅ Posted message: Product and Regulatory Counsel @ brex in #💻・tech-jobs
  ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-31T11:15:11.516Z] [BOT] 💾 Added channel posting: Product and Regulatory Counsel @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 1082 jobs in memory (cached)
[2026-01-31T11:15:11.537Z] [BOT] ✅ Loaded V2 database: 1081 jobs
💾 DISK STATE: 1081 jobs on disk
[2026-01-31T11:15:11.537Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1082
[2026-01-31T11:15:11.539Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:15:11.539Z] [BOT] 💾 AFTER MERGE: 1082 jobs (merged disk + memory)
[2026-01-31T11:15:11.540Z] [BOT] ✅ No jobs to archive (all 1082 jobs within 7-day window)
[2026-01-31T11:15:11.619Z] [BOT] 💾 Saved posted_jobs.json: 1082 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:13.118Z] [BOT] 📍 [ROUTING] "Software Engineer II, Product " @ brex
   Category: TECH (matched: "software")
[2026-01-31T11:15:13.118Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:15:13.357Z] [BOT] ✅ Posted message: Software Engineer II, Product  @ brex in #💻・tech-jobs
[2026-01-31T11:15:13.357Z] [BOT] ✅ Industry: Software Engineer II, Product  @ brex
[2026-01-31T11:15:13.357Z] [BOT] 💾 Added channel posting: Software Engineer II, Product  @ brex → category channel (1 total channels)
[2026-01-31T11:15:13.358Z] [BOT] 💾 BEFORE MERGE: 1083 jobs in memory (cached)
[2026-01-31T11:15:13.378Z] [BOT] ✅ Loaded V2 database: 1082 jobs
💾 DISK STATE: 1082 jobs on disk
[2026-01-31T11:15:13.378Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1083
[2026-01-31T11:15:13.380Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:15:13.381Z] [BOT] 💾 AFTER MERGE: 1083 jobs (merged disk + memory)
[2026-01-31T11:15:13.381Z] [BOT] ✅ No jobs to archive (all 1083 jobs within 7-day window)
[2026-01-31T11:15:13.444Z] [BOT] 💾 Saved posted_jobs.json: 1083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:15.204Z] [BOT] ✅ Posted message: Software Engineer II, Product  @ brex in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:15:15.204Z] [BOT] 💾 Added channel posting: Software Engineer II, Product  @ brex → location channel (2 total channels)
[2026-01-31T11:15:15.204Z] [BOT] 💾 BEFORE MERGE: 1083 jobs in memory (cached)
[2026-01-31T11:15:15.226Z] [BOT] ✅ Loaded V2 database: 1083 jobs
💾 DISK STATE: 1083 jobs on disk
[2026-01-31T11:15:15.226Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1083
[2026-01-31T11:15:15.229Z] [BOT] 🔀 Deep merged: Software Engineer II, Product  @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T11:15:15.229Z] [BOT] 💾 AFTER MERGE: 1083 jobs (merged disk + memory)
[2026-01-31T11:15:15.229Z] [BOT] ✅ No jobs to archive (all 1083 jobs within 7-day window)
[2026-01-31T11:15:15.293Z] [BOT] 💾 Saved posted_jobs.json: 1083 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:16.794Z] [BOT] 📍 [ROUTING] "Support Specialist I (Remote)" @ brex
[2026-01-31T11:15:16.794Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:15:16.992Z] [BOT] ✅ Posted message: Support Specialist I (Remote) @ brex in #💻・tech-jobs
  ✅ Industry: Support Specialist I (Remote) @ brex
[2026-01-31T11:15:16.992Z] [BOT] 💾 Added channel posting: Support Specialist I (Remote) @ brex → category channel (1 total channels)
[2026-01-31T11:15:16.993Z] [BOT] 💾 BEFORE MERGE: 1084 jobs in memory (cached)
[2026-01-31T11:15:17.013Z] [BOT] ✅ Loaded V2 database: 1083 jobs
💾 DISK STATE: 1083 jobs on disk
[2026-01-31T11:15:17.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1084
💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1084 jobs (merged disk + memory)
✅ No jobs to archive (all 1084 jobs within 7-day window)
[2026-01-31T11:15:17.079Z] [BOT] 💾 Saved posted_jobs.json: 1084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:19.089Z] [BOT] ✅ Posted message: Support Specialist I (Remote) @ brex in #🏠・JID_ead674af
[2026-01-31T11:15:19.090Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T11:15:19.090Z] [BOT] 💾 Added channel posting: Support Specialist I (Remote) @ brex → location channel (2 total channels)
[2026-01-31T11:15:19.090Z] [BOT] 💾 BEFORE MERGE: 1084 jobs in memory (cached)
[2026-01-31T11:15:19.112Z] [BOT] ✅ Loaded V2 database: 1084 jobs
💾 DISK STATE: 1084 jobs on disk
[2026-01-31T11:15:19.112Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1084
[2026-01-31T11:15:19.114Z] [BOT] 🔀 Deep merged: Support Specialist I (Remote) @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T11:15:19.114Z] [BOT] 💾 AFTER MERGE: 1084 jobs (merged disk + memory)
[2026-01-31T11:15:19.115Z] [BOT] ✅ No jobs to archive (all 1084 jobs within 7-day window)
[2026-01-31T11:15:19.193Z] [BOT] 💾 Saved posted_jobs.json: 1084 active jobs
[2026-01-31T11:15:19.195Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:20.694Z] [BOT] 📍 [ROUTING] "Vibe Marketer" @ ORG_f102986b AI
[2026-01-31T11:15:20.695Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:15:20.971Z] [BOT] ✅ Posted message: Vibe Marketer @ ORG_f102986b AI in #💻・tech-jobs
[2026-01-31T11:15:20.972Z] [BOT] ✅ Industry: Vibe Marketer @ ORG_f102986b AI
[2026-01-31T11:15:20.972Z] [BOT] 💾 Added channel posting: Vibe Marketer @ ORG_f102986b AI → category channel (1 total channels)
[2026-01-31T11:15:20.972Z] [BOT] 💾 BEFORE MERGE: 1085 jobs in memory (cached)
[2026-01-31T11:15:20.993Z] [BOT] ✅ Loaded V2 database: 1084 jobs
💾 DISK STATE: 1084 jobs on disk
[2026-01-31T11:15:20.993Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1085
[2026-01-31T11:15:20.995Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1085 jobs (merged disk + memory)
[2026-01-31T11:15:20.995Z] [BOT] ✅ No jobs to archive (all 1085 jobs within 7-day window)
[2026-01-31T11:15:21.058Z] [BOT] 💾 Saved posted_jobs.json: 1085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:25.561Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T11:15:25.561Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_f931030b
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T11:15:25.562Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T11:15:25.749Z] [BOT] ✅ Posted message: Business Intelligence Analyst @ ORG_f931030b in #📊・JID_fb739488
  ✅ Industry: Business Intelligence Analyst @ ORG_f931030b
[2026-01-31T11:15:25.749Z] [BOT] 💾 Added channel posting: Business Intelligence Analyst @ ORG_f931030b → category channel (1 total channels)
[2026-01-31T11:15:25.749Z] [BOT] 💾 BEFORE MERGE: 1086 jobs in memory (cached)
[2026-01-31T11:15:25.770Z] [BOT] ✅ Loaded V2 database: 1085 jobs
💾 DISK STATE: 1085 jobs on disk
[2026-01-31T11:15:25.771Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1086
[2026-01-31T11:15:25.773Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:15:25.773Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-31T11:15:25.774Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-31T11:15:25.839Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:30.341Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T11:15:30.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3db1d404..." not found, but found as SHA256 "241b25d3a7957168"
[2026-01-31T11:15:30.343Z] [BOT] ⏭️  Skipping duplicate: JID_3db1d404 (posted within 7 days)
[2026-01-31T11:15:30.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d057ef79..." not found, but found as SHA256 "ba883e5c9f97c450"
[2026-01-31T11:15:30.343Z] [BOT] ⏭️  Skipping duplicate: JID_d057ef79 (posted within 7 days)
[2026-01-31T11:15:30.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8944fe73..." not found, but found as SHA256 "e68106b4d8110f96"
⏭️  Skipping duplicate: JID_8944fe73 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_e5738f10..." not found, but found as SHA256 "7cb995015e596854"
⏭️  Skipping duplicate: JID_e5738f10 (posted within 7 days)
[2026-01-31T11:15:30.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_78807b1b..." not found, but found as SHA256 "89c1a343f1bef874"
⏭️  Skipping duplicate: JID_78807b1b (posted within 7 days)
[2026-01-31T11:15:30.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c3d97667..." not found, but found as SHA256 "699ca6eb64b5ea3a"
⏭️  Skipping duplicate: JID_c3d97667 (posted within 7 days)
[2026-01-31T11:15:30.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2f67d2f3..." not found, but found as SHA256 "82da014da1b7507d"
⏭️  Skipping duplicate: JID_2f67d2f3 (posted within 7 days)
[2026-01-31T11:15:30.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_89b48b67..." not found, but found as SHA256 "7dee505e21b4c552"
⏭️  Skipping duplicate: JID_89b48b67 (posted within 7 days)
[2026-01-31T11:15:30.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7876aaf1..." not found, but found as SHA256 "b4bf7bb0350386ab"
[2026-01-31T11:15:30.344Z] [BOT] ⏭️  Skipping duplicate: JID_20575f82-analyst_r233902 (posted within 7 days)
[2026-01-31T11:15:30.345Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_60acc179..." not found, but found as SHA256 "0198bdaa0f2eb196"
[2026-01-31T11:15:30.345Z] [BOT] ⏭️  Skipping duplicate: JID_08c34893 (posted within 7 days)
[2026-01-31T11:15:30.456Z] [BOT] ✅ Loaded pending queue: 2945 total (1853 pending, 45 enriched, 1047 posted)
[2026-01-31T11:15:30.645Z] [BOT] ✅ Saved pending queue: 2945 total (1853 pending, 35 enriched, 1057 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T11:15:30.645Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T11:15:30.734Z] [BOT] 📂 Loaded 11138 existing routing entries
[2026-01-31T11:15:30.858Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11148
   Timestamp: 2026-01-31T11:15:30.813Z
[2026-01-31T11:15:30.862Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 32
   Successful: 13
   Failed: 0
   Skipped: 19
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💰・finance-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1086 jobs in memory (cached)
[2026-01-31T11:15:30.895Z] [BOT] ✅ Loaded V2 database: 1086 jobs
💾 DISK STATE: 1086 jobs on disk
[2026-01-31T11:15:30.895Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1086
[2026-01-31T11:15:30.898Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:15:30.898Z] [BOT] 💾 AFTER MERGE: 1086 jobs (merged disk + memory)
[2026-01-31T11:15:30.900Z] [BOT] ✅ No jobs to archive (all 1086 jobs within 7-day window)
[2026-01-31T11:15:30.959Z] [BOT] 💾 Saved posted_jobs.json: 1086 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:15:30.960Z] [BOT] ✅ Database saved successfully
[2026-01-31T11:15:32.991Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4234) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*