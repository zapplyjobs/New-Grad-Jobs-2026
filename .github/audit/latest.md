# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T10:49:24.920Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T10:48:47.625Z] ========================================
[2026-01-31T10:48:47.627Z] Discord Bot Execution Log
[2026-01-31T10:48:47.627Z] Environment: GitHub Actions
[2026-01-31T10:48:47.627Z] Node Version: v20.20.0
[2026-01-31T10:48:47.627Z] ========================================
[2026-01-31T10:48:47.627Z] Environment Variables Check:
[2026-01-31T10:48:47.627Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T10:48:47.627Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.627Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T10:48:47.627Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T10:48:47.627Z] 
Multi-Channel Configuration:
[2026-01-31T10:48:47.628Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T10:48:47.628Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T10:48:47.628Z] 
Data Files Check:
[2026-01-31T10:48:47.629Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T10:48:47.668Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6592263 bytes)
[2026-01-31T10:48:47.668Z] 
========================================
[2026-01-31T10:48:47.668Z] Starting Enhanced Discord Bot...
[2026-01-31T10:48:47.668Z] ========================================
[2026-01-31T10:48:48.148Z] [BOT] ✅ Loaded V2 database: 1058 jobs
[2026-01-31T10:48:48.705Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T10:48:48.705Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T10:48:48.706Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T10:48:48.860Z] [BOT] ✅ Loaded pending queue: 2952 total (1873 pending, 50 enriched, 1029 posted)
[2026-01-31T10:48:48.860Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:48:48.861Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T10:48:48.861Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:48:48.862Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T10:48:48.862Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T10:48:48.862Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T10:48:48.862Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T10:48:48.863Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T10:48:48.863Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T10:48:48.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T10:48:48.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T10:48:48.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T10:48:48.864Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T10:48:48.864Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T10:48:48.865Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T10:48:48.865Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T10:48:48.865Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T10:48:48.865Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T10:48:48.865Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T10:48:48.865Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T10:48:48.871Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T10:48:48.871Z] [BOT] 🚫 Skipping blacklisted job: Sales Manager, Startups at brex
[2026-01-31T10:48:48.871Z] [BOT] 🚫 Skipping blacklisted job: Sales Manager, Startups at brex
🚫 Skipping blacklisted job: Senior Accountant at brex
🚫 Skipping blacklisted job: Senior Accountant at brex
🚫 Skipping blacklisted job: Senior Accountant at brex
🚫 Skipping blacklisted job: Senior Accountant at brex
[2026-01-31T10:48:48.871Z] [BOT] 🚫 Skipping blacklisted job: Senior Application Security Engineer at brex
🚫 Skipping blacklisted job: Senior Application Security Engineer at brex
🚫 Skipping blacklisted job: Senior Application Security Engineer at brex
🚫 Skipping blacklisted job: Senior Engineering Manager, Acquisition at brex
[2026-01-31T10:48:49.017Z] [BOT] ✅ Loaded pending queue: 2952 total (1873 pending, 50 enriched, 1029 posted)
[2026-01-31T10:48:49.209Z] [BOT] ✅ Saved pending queue: 2942 total (1873 pending, 40 enriched, 1029 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 26 jobs (10 blacklisted)
[2026-01-31T10:48:49.209Z] [BOT] 📋 After data quality filter: 26 jobs (0 invalid)
[2026-01-31T10:48:49.210Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
   (16 grouped as same job with different locations)
[2026-01-31T10:48:49.210Z] [BOT] 📍 7 jobs with multiple locations:
   - Banking Specialist @ brex: new york, new york, united states, san francisco, california, united states
   - Commercial Account Executive @ brex: salt lake city, utah, united states, san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Enterprise Account Executive @ brex: san francisco, california, united states, new york, new york, united states
   - Enterprise Implementation Consultant, Financial Saas @ brex: new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states, seattle, washington, united states
   - Implementation Consultant II @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
   - Outbound Sales Development Representative @ brex: san francisco, california, united states, salt lake city, utah, united states, seattle, washington, united states
   - Product and Regulatory Counsel @ brex: seattle, washington, united states, new york, new york, united states, san francisco, california, united states, salt lake city, utah, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T10:48:49.215Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-31T10:48:49.216Z] [BOT] 📍 [ROUTING] "Software Engineer I, Frontend" @ ORG_a731a58c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:48:49.233Z] [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T10:48:49.537Z] [BOT] ✅ Posted message: Software Engineer I, Frontend @ ORG_a731a58c in #💻・tech-jobs
[2026-01-31T10:48:49.537Z] [BOT] ✅ Industry: Software Engineer I, Frontend @ ORG_a731a58c
[2026-01-31T10:48:49.538Z] [BOT] 💾 Added channel posting: Software Engineer I, Frontend @ ORG_a731a58c → category channel (1 total channels)
[2026-01-31T10:48:49.538Z] [BOT] 💾 BEFORE MERGE: 1059 jobs in memory (cached)
[2026-01-31T10:48:49.570Z] [BOT] ✅ Loaded V2 database: 1058 jobs
💾 DISK STATE: 1058 jobs on disk
[2026-01-31T10:48:49.570Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1059
[2026-01-31T10:48:49.573Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:48:49.573Z] [BOT] 💾 AFTER MERGE: 1059 jobs (merged disk + memory)
[2026-01-31T10:48:49.574Z] [BOT] ✅ No jobs to archive (all 1059 jobs within 7-day window)
[2026-01-31T10:48:49.652Z] [BOT] 💾 Saved posted_jobs.json: 1059 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:48:51.155Z] [BOT] 📍 [ROUTING] "Outbound Sales Development Representative" @ brex
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:48:51.353Z] [BOT] ✅ Posted message: Outbound Sales Development Representative @ brex in #💻・tech-jobs
[2026-01-31T10:48:51.353Z] [BOT] ✅ Industry: Outbound Sales Development Representative @ brex
[2026-01-31T10:48:51.354Z] [BOT] 💾 Added channel posting: Outbound Sales Development Representative @ brex → category channel (1 total channels)
[2026-01-31T10:48:51.354Z] [BOT] 💾 BEFORE MERGE: 1060 jobs in memory (cached)
[2026-01-31T10:48:51.384Z] [BOT] ✅ Loaded V2 database: 1059 jobs
💾 DISK STATE: 1059 jobs on disk
[2026-01-31T10:48:51.384Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1060
[2026-01-31T10:48:51.386Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1060 jobs (merged disk + memory)
[2026-01-31T10:48:51.387Z] [BOT] ✅ No jobs to archive (all 1060 jobs within 7-day window)
[2026-01-31T10:48:51.459Z] [BOT] 💾 Saved posted_jobs.json: 1060 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:48:52.961Z] [BOT] 📍 [ROUTING] "Product and Regulatory Counsel" @ brex
   Category: TECH (default)
[2026-01-31T10:48:52.962Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:48:53.229Z] [BOT] ✅ Posted message: Product and Regulatory Counsel @ brex in #💻・tech-jobs
  ✅ Industry: Product and Regulatory Counsel @ brex
[2026-01-31T10:48:53.230Z] [BOT] 💾 Added channel posting: Product and Regulatory Counsel @ brex → category channel (1 total channels)
[2026-01-31T10:48:53.230Z] [BOT] 💾 BEFORE MERGE: 1061 jobs in memory (cached)
[2026-01-31T10:48:53.259Z] [BOT] ✅ Loaded V2 database: 1060 jobs
💾 DISK STATE: 1060 jobs on disk
[2026-01-31T10:48:53.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1061
[2026-01-31T10:48:53.262Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:48:53.262Z] [BOT] 💾 AFTER MERGE: 1061 jobs (merged disk + memory)
[2026-01-31T10:48:53.263Z] [BOT] ✅ No jobs to archive (all 1061 jobs within 7-day window)
[2026-01-31T10:48:53.335Z] [BOT] 💾 Saved posted_jobs.json: 1061 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:48:57.837Z] [BOT] 📌 Posting 7 jobs to #💰・finance-jobs
[2026-01-31T10:48:57.838Z] [BOT] 📍 [ROUTING] "Associate Technical Consultant" @ brex
   Category: FINANCE (matched: "accounting")
[2026-01-31T10:48:57.838Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T10:48:58.138Z] [BOT] ✅ Posted message: Associate Technical Consultant @ brex in #💰・finance-jobs
  ✅ Industry: Associate Technical Consultant @ brex
[2026-01-31T10:48:58.138Z] [BOT] 💾 Added channel posting: Associate Technical Consultant @ brex → category channel (1 total channels)
[2026-01-31T10:48:58.138Z] [BOT] 💾 BEFORE MERGE: 1062 jobs in memory (cached)
[2026-01-31T10:48:58.168Z] [BOT] ✅ Loaded V2 database: 1061 jobs
💾 DISK STATE: 1061 jobs on disk
[2026-01-31T10:48:58.169Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1062
[2026-01-31T10:48:58.171Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1062 jobs (merged disk + memory)
[2026-01-31T10:48:58.172Z] [BOT] ✅ No jobs to archive (all 1062 jobs within 7-day window)
[2026-01-31T10:48:58.260Z] [BOT] 💾 Saved posted_jobs.json: 1062 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:48:59.761Z] [BOT] 📍 [ROUTING] "Banking Specialist" @ brex
[2026-01-31T10:48:59.762Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T10:48:59.958Z] [BOT] ✅ Posted message: Banking Specialist @ brex in #💰・finance-jobs
  ✅ Industry: Banking Specialist @ brex
[2026-01-31T10:48:59.959Z] [BOT] 💾 Added channel posting: Banking Specialist @ brex → category channel (1 total channels)
[2026-01-31T10:48:59.959Z] [BOT] 💾 BEFORE MERGE: 1063 jobs in memory (cached)
[2026-01-31T10:48:59.988Z] [BOT] ✅ Loaded V2 database: 1062 jobs
💾 DISK STATE: 1062 jobs on disk
[2026-01-31T10:48:59.988Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1063
[2026-01-31T10:48:59.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:48:59.991Z] [BOT] 💾 AFTER MERGE: 1063 jobs (merged disk + memory)
[2026-01-31T10:48:59.992Z] [BOT] ✅ No jobs to archive (all 1063 jobs within 7-day window)
[2026-01-31T10:49:00.064Z] [BOT] 💾 Saved posted_jobs.json: 1063 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:01.747Z] [BOT] ✅ Posted message: Banking Specialist @ brex in #🗽・JID_98d4f0de
[2026-01-31T10:49:01.747Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:49:01.747Z] [BOT] 💾 Added channel posting: Banking Specialist @ brex → location channel (2 total channels)
[2026-01-31T10:49:01.747Z] [BOT] 💾 BEFORE MERGE: 1063 jobs in memory (cached)
[2026-01-31T10:49:01.777Z] [BOT] ✅ Loaded V2 database: 1063 jobs
💾 DISK STATE: 1063 jobs on disk
[2026-01-31T10:49:01.777Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1063
[2026-01-31T10:49:01.779Z] [BOT] 🔀 Deep merged: Banking Specialist @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T10:49:01.779Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1063 jobs (merged disk + memory)
[2026-01-31T10:49:01.780Z] [BOT] ✅ No jobs to archive (all 1063 jobs within 7-day window)
[2026-01-31T10:49:01.850Z] [BOT] 💾 Saved posted_jobs.json: 1063 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:03.352Z] [BOT] 📍 [ROUTING] "Commercial Account Executive" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T10:49:03.548Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #💰・finance-jobs
[2026-01-31T10:49:03.548Z] [BOT] ✅ Industry: Commercial Account Executive @ brex
[2026-01-31T10:49:03.549Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → category channel (1 total channels)
[2026-01-31T10:49:03.549Z] [BOT] 💾 BEFORE MERGE: 1064 jobs in memory (cached)
[2026-01-31T10:49:03.579Z] [BOT] ✅ Loaded V2 database: 1063 jobs
[2026-01-31T10:49:03.579Z] [BOT] 💾 DISK STATE: 1063 jobs on disk
[2026-01-31T10:49:03.579Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1064
[2026-01-31T10:49:03.582Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:49:03.582Z] [BOT] 💾 AFTER MERGE: 1064 jobs (merged disk + memory)
[2026-01-31T10:49:03.582Z] [BOT] ✅ No jobs to archive (all 1064 jobs within 7-day window)
[2026-01-31T10:49:03.666Z] [BOT] 💾 Saved posted_jobs.json: 1064 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:05.351Z] [BOT] ✅ Posted message: Commercial Account Executive @ brex in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T10:49:05.352Z] [BOT] 💾 Added channel posting: Commercial Account Executive @ brex → location channel (2 total channels)
[2026-01-31T10:49:05.352Z] [BOT] 💾 BEFORE MERGE: 1064 jobs in memory (cached)
[2026-01-31T10:49:05.382Z] [BOT] ✅ Loaded V2 database: 1064 jobs
💾 DISK STATE: 1064 jobs on disk
[2026-01-31T10:49:05.382Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1064
[2026-01-31T10:49:05.385Z] [BOT] 🔀 Deep merged: Commercial Account Executive @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T10:49:05.385Z] [BOT] 💾 AFTER MERGE: 1064 jobs (merged disk + memory)
[2026-01-31T10:49:05.385Z] [BOT] ✅ No jobs to archive (all 1064 jobs within 7-day window)
[2026-01-31T10:49:05.454Z] [BOT] 💾 Saved posted_jobs.json: 1064 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:06.956Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive" @ brex
   Category: FINANCE (matched: "accounting")
[2026-01-31T10:49:06.956Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T10:49:07.229Z] [BOT] ✅ Posted message: Enterprise Account Executive @ brex in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive @ brex
[2026-01-31T10:49:07.229Z] [BOT] 💾 Added channel posting: Enterprise Account Executive @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 1065 jobs in memory (cached)
[2026-01-31T10:49:07.259Z] [BOT] ✅ Loaded V2 database: 1064 jobs
💾 DISK STATE: 1064 jobs on disk
[2026-01-31T10:49:07.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1065
[2026-01-31T10:49:07.262Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:49:07.262Z] [BOT] 💾 AFTER MERGE: 1065 jobs (merged disk + memory)
[2026-01-31T10:49:07.263Z] [BOT] ✅ No jobs to archive (all 1065 jobs within 7-day window)
[2026-01-31T10:49:07.333Z] [BOT] 💾 Saved posted_jobs.json: 1065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:08.834Z] [BOT] 📍 [ROUTING] "Enterprise Implementation Consultant, Financial Saas" @ brex
   Category: FINANCE (matched: "accounting")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T10:49:09.165Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #💰・finance-jobs
[2026-01-31T10:49:09.165Z] [BOT] ✅ Industry: Enterprise Implementation Consultant, Financial Saas @ brex
[2026-01-31T10:49:09.165Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → category channel (1 total channels)
[2026-01-31T10:49:09.166Z] [BOT] 💾 BEFORE MERGE: 1066 jobs in memory (cached)
[2026-01-31T10:49:09.195Z] [BOT] ✅ Loaded V2 database: 1065 jobs
💾 DISK STATE: 1065 jobs on disk
[2026-01-31T10:49:09.196Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1066
[2026-01-31T10:49:09.198Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:49:09.198Z] [BOT] 💾 AFTER MERGE: 1066 jobs (merged disk + memory)
[2026-01-31T10:49:09.199Z] [BOT] ✅ No jobs to archive (all 1066 jobs within 7-day window)
[2026-01-31T10:49:09.269Z] [BOT] 💾 Saved posted_jobs.json: 1066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:11.006Z] [BOT] ✅ Posted message: Enterprise Implementation Consultant, Financial Saas @ brex in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:49:11.006Z] [BOT] 💾 Added channel posting: Enterprise Implementation Consultant, Financial Saas @ brex → location channel (2 total channels)
[2026-01-31T10:49:11.007Z] [BOT] 💾 BEFORE MERGE: 1066 jobs in memory (cached)
[2026-01-31T10:49:11.036Z] [BOT] ✅ Loaded V2 database: 1066 jobs
💾 DISK STATE: 1066 jobs on disk
[2026-01-31T10:49:11.037Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1066
[2026-01-31T10:49:11.039Z] [BOT] 🔀 Deep merged: Enterprise Implementation Consultant, Financial Saas @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T10:49:11.039Z] [BOT] 💾 AFTER MERGE: 1066 jobs (merged disk + memory)
[2026-01-31T10:49:11.040Z] [BOT] ✅ No jobs to archive (all 1066 jobs within 7-day window)
[2026-01-31T10:49:11.128Z] [BOT] 💾 Saved posted_jobs.json: 1066 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:12.626Z] [BOT] 📍 [ROUTING] "Head of Internal Communications" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-31T10:49:12.626Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T10:49:12.851Z] [BOT] ✅ Posted message: Head of Internal Communications @ brex in #💰・finance-jobs
  ✅ Industry: Head of Internal Communications @ brex
[2026-01-31T10:49:12.851Z] [BOT] 💾 Added channel posting: Head of Internal Communications @ brex → category channel (1 total channels)
[2026-01-31T10:49:12.852Z] [BOT] 💾 BEFORE MERGE: 1067 jobs in memory (cached)
[2026-01-31T10:49:12.880Z] [BOT] ✅ Loaded V2 database: 1066 jobs
💾 DISK STATE: 1066 jobs on disk
[2026-01-31T10:49:12.881Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1067
[2026-01-31T10:49:12.882Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:49:12.883Z] [BOT] 💾 AFTER MERGE: 1067 jobs (merged disk + memory)
[2026-01-31T10:49:12.883Z] [BOT] ✅ No jobs to archive (all 1067 jobs within 7-day window)
[2026-01-31T10:49:12.953Z] [BOT] 💾 Saved posted_jobs.json: 1067 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:14.455Z] [BOT] 📍 [ROUTING] "Implementation Consultant II" @ brex
   Category: FINANCE (matched: "accounting")
[2026-01-31T10:49:14.455Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T10:49:14.640Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #💰・finance-jobs
[2026-01-31T10:49:14.641Z] [BOT] ✅ Industry: Implementation Consultant II @ brex
[2026-01-31T10:49:14.641Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → category channel (1 total channels)
[2026-01-31T10:49:14.641Z] [BOT] 💾 BEFORE MERGE: 1068 jobs in memory (cached)
[2026-01-31T10:49:14.671Z] [BOT] ✅ Loaded V2 database: 1067 jobs
💾 DISK STATE: 1067 jobs on disk
[2026-01-31T10:49:14.672Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1068
[2026-01-31T10:49:14.674Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1068 jobs (merged disk + memory)
[2026-01-31T10:49:14.674Z] [BOT] ✅ No jobs to archive (all 1068 jobs within 7-day window)
[2026-01-31T10:49:14.742Z] [BOT] 💾 Saved posted_jobs.json: 1068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:16.462Z] [BOT] ✅ Posted message: Implementation Consultant II @ brex in #🏠・JID_ead674af
[2026-01-31T10:49:16.462Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-31T10:49:16.462Z] [BOT] 💾 Added channel posting: Implementation Consultant II @ brex → location channel (2 total channels)
[2026-01-31T10:49:16.462Z] [BOT] 💾 BEFORE MERGE: 1068 jobs in memory (cached)
[2026-01-31T10:49:16.492Z] [BOT] ✅ Loaded V2 database: 1068 jobs
💾 DISK STATE: 1068 jobs on disk
[2026-01-31T10:49:16.493Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1068
[2026-01-31T10:49:16.495Z] [BOT] 🔀 Deep merged: Implementation Consultant II @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T10:49:16.495Z] [BOT] 💾 AFTER MERGE: 1068 jobs (merged disk + memory)
[2026-01-31T10:49:16.495Z] [BOT] ✅ No jobs to archive (all 1068 jobs within 7-day window)
[2026-01-31T10:49:16.565Z] [BOT] 💾 Saved posted_jobs.json: 1068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:21.068Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T10:49:21.069Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c08c77b1..." not found, but found as SHA256 "fd46a24abc9ba1dc"
[2026-01-31T10:49:21.069Z] [BOT] ⏭️  Skipping duplicate: JID_3345e37e (posted within 7 days)
[2026-01-31T10:49:21.069Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_994d5763..." not found, but found as SHA256 "e606f443c74510fb"
⏭️  Skipping duplicate: JID_994d5763 (posted within 7 days)
[2026-01-31T10:49:21.069Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_82e482cb..." not found, but found as SHA256 "2af8d452f4373f76"
⏭️  Skipping duplicate: JID_82e482cb (posted within 7 days)
[2026-01-31T10:49:21.070Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_190f3d85..." not found, but found as SHA256 "4541b1a8ddce8579"
⏭️  Skipping duplicate: JID_190f3d85 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_1f9a3a07..." not found, but found as SHA256 "c8e68582831dc93b"
⏭️  Skipping duplicate: JID_1f9a3a07 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_7a0083e6..." not found, but found as SHA256 "2c8f4bd8d13a56ad"
⏭️  Skipping duplicate: JID_7a0083e6 (posted within 7 days)
[2026-01-31T10:49:21.070Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7f254d06..." not found, but found as SHA256 "0846c682aa0df5d3"
⏭️  Skipping duplicate: JID_7f254d06 (posted within 7 days)
[2026-01-31T10:49:21.070Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_73086167..." not found, but found as SHA256 "0b60c09fd85f7b07"
⏭️  Skipping duplicate: JID_73086167 (posted within 7 days)
[2026-01-31T10:49:21.070Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9dd15c79..." not found, but found as SHA256 "426656d939b09061"
[2026-01-31T10:49:21.070Z] [BOT] ⏭️  Skipping duplicate: JID_9dd15c79 (posted within 7 days)
[2026-01-31T10:49:21.071Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e75c82d9..." not found, but found as SHA256 "e18b6334ad67880d"
[2026-01-31T10:49:21.071Z] [BOT] ⏭️  Skipping duplicate: JID_e75c82d9 (posted within 7 days)
[2026-01-31T10:49:21.214Z] [BOT] ✅ Loaded pending queue: 2942 total (1873 pending, 40 enriched, 1029 posted)
[2026-01-31T10:49:21.393Z] [BOT] ✅ Saved pending queue: 2942 total (1873 pending, 30 enriched, 1039 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T10:49:21.491Z] [BOT] 📂 Loaded 11120 existing routing entries
[2026-01-31T10:49:21.609Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11130
   Timestamp: 2026-01-31T10:49:21.570Z
[2026-01-31T10:49:21.613Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 38
   Successful: 14
   Failed: 0
   Skipped: 24
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
     1. #💰・finance-jobs: 7 posts
     2. #💻・tech-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1068 jobs in memory (cached)
[2026-01-31T10:49:21.653Z] [BOT] ✅ Loaded V2 database: 1068 jobs
💾 DISK STATE: 1068 jobs on disk
[2026-01-31T10:49:21.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1068
[2026-01-31T10:49:21.656Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:49:21.656Z] [BOT] 💾 AFTER MERGE: 1068 jobs (merged disk + memory)
[2026-01-31T10:49:21.657Z] [BOT] ✅ No jobs to archive (all 1068 jobs within 7-day window)
[2026-01-31T10:49:21.727Z] [BOT] 💾 Saved posted_jobs.json: 1068 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:49:21.727Z] [BOT] ✅ Database saved successfully
[2026-01-31T10:49:23.751Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*