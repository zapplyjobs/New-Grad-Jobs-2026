# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T10:12:22.127Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T10:11:46.748Z] ========================================
[2026-01-31T10:11:46.750Z] Discord Bot Execution Log
[2026-01-31T10:11:46.750Z] Environment: GitHub Actions
[2026-01-31T10:11:46.750Z] Node Version: v20.20.0
[2026-01-31T10:11:46.750Z] ========================================
[2026-01-31T10:11:46.750Z] Environment Variables Check:
[2026-01-31T10:11:46.750Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T10:11:46.750Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T10:11:46.751Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T10:11:46.751Z] 
Multi-Channel Configuration:
[2026-01-31T10:11:46.751Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T10:11:46.751Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T10:11:46.752Z] 
Data Files Check:
[2026-01-31T10:11:46.753Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T10:11:46.784Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6445135 bytes)
[2026-01-31T10:11:46.785Z] 
========================================
[2026-01-31T10:11:46.785Z] Starting Enhanced Discord Bot...
[2026-01-31T10:11:46.785Z] ========================================
[2026-01-31T10:11:47.329Z] [BOT] ✅ Loaded V2 database: 1038 jobs
[2026-01-31T10:11:47.709Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T10:11:47.710Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T10:11:47.710Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T10:11:47.824Z] [BOT] ✅ Loaded pending queue: 2954 total (1895 pending, 50 enriched, 1009 posted)
[2026-01-31T10:11:47.825Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:11:47.826Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T10:11:47.826Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:11:47.826Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T10:11:47.826Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T10:11:47.827Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T10:11:47.827Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T10:11:47.827Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T10:11:47.827Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T10:11:47.827Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T10:11:47.827Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-31T10:11:47.828Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T10:11:47.828Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T10:11:47.828Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T10:11:47.828Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T10:11:47.828Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T10:11:47.829Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T10:11:47.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T10:11:47.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T10:11:47.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T10:11:47.829Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T10:11:47.830Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T10:11:47.838Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T10:11:47.838Z] [BOT] 🚫 Skipping blacklisted job: Accounting Manager, Legal Entity Controllership at brex
[2026-01-31T10:11:47.838Z] [BOT] 🚫 Skipping blacklisted job: Compliance Manager (Card & Rewards) at brex
🚫 Skipping blacklisted job: Compliance Manager (Card & Rewards) at brex
[2026-01-31T10:11:47.839Z] [BOT] 🚫 Skipping blacklisted job: Compliance Manager (Card & Rewards) at brex
🚫 Skipping blacklisted job: Engineering Manager, Security Engineering  at brex
🚫 Skipping blacklisted job: Engineering Manager, Security Engineering  at brex
[2026-01-31T10:11:47.945Z] [BOT] ✅ Loaded pending queue: 2954 total (1895 pending, 50 enriched, 1009 posted)
[2026-01-31T10:11:48.116Z] [BOT] ✅ Saved pending queue: 2948 total (1895 pending, 44 enriched, 1009 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-31T10:11:48.116Z] [BOT] 📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-31T10:11:48.117Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-31T10:11:48.117Z] [BOT] 📋 After multi-location grouping: 24 unique jobs to post
[2026-01-31T10:11:48.118Z] [BOT] (6 grouped as same job with different locations)
📍 4 jobs with multiple locations:
[2026-01-31T10:11:48.118Z] [BOT] - Software Engineer I, Frontend @ Twitch: san francisco, irvine
   - Banking Specialist @ brex: new york, new york, united states, san francisco, california, united states
   - Commercial Account Executive @ brex: salt lake city, utah, united states, san francisco, california, united states, seattle, washington, united states, new york, new york, united states
   - Enterprise Account Executive @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T10:11:48.120Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-31T10:11:48.121Z] [BOT] 📍 [ROUTING] "Software Engineer 3 - Infrastructure - Google Cloud Platforms" @ ORG_ce770667
[2026-01-31T10:11:48.121Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T10:11:48.139Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T10:11:48.360Z] [BOT] ✅ Posted message: Software Engineer 3 - Infrastructure - Google Cloud Platforms @ ORG_ce770667 in #🤖・ai-jobs
  ✅ Industry: Software Engineer 3 - Infrastructure - Google Cloud Platforms @ ORG_ce770667
[2026-01-31T10:11:48.361Z] [BOT] 💾 Added channel posting: Software Engineer 3 - Infrastructure - Google Cloud Platforms @ ORG_ce770667 → category channel (1 total channels)
[2026-01-31T10:11:48.361Z] [BOT] 💾 BEFORE MERGE: 1039 jobs in memory (cached)
[2026-01-31T10:11:48.382Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-31T10:11:48.383Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1039
[2026-01-31T10:11:48.385Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:11:48.385Z] [BOT] 💾 AFTER MERGE: 1039 jobs (merged disk + memory)
[2026-01-31T10:11:48.386Z] [BOT] ✅ No jobs to archive (all 1039 jobs within 7-day window)
[2026-01-31T10:11:48.455Z] [BOT] 💾 Saved posted_jobs.json: 1039 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:11:49.958Z] [BOT] 📍 [ROUTING] "Concierge, Customer Success Team" @ coinbase
[2026-01-31T10:11:49.958Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:11:50.143Z] [BOT] ✅ Posted message: Concierge, Customer Success Team @ coinbase in #🤖・ai-jobs
[2026-01-31T10:11:50.143Z] [BOT] ✅ Industry: Concierge, Customer Success Team @ coinbase
[2026-01-31T10:11:50.144Z] [BOT] 💾 Added channel posting: Concierge, Customer Success Team @ coinbase → category channel (1 total channels)
[2026-01-31T10:11:50.144Z] [BOT] 💾 BEFORE MERGE: 1040 jobs in memory (cached)
[2026-01-31T10:11:50.163Z] [BOT] ✅ Loaded V2 database: 1039 jobs
💾 DISK STATE: 1039 jobs on disk
[2026-01-31T10:11:50.163Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1040
[2026-01-31T10:11:50.166Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:11:50.166Z] [BOT] 💾 AFTER MERGE: 1040 jobs (merged disk + memory)
[2026-01-31T10:11:50.166Z] [BOT] ✅ No jobs to archive (all 1040 jobs within 7-day window)
[2026-01-31T10:11:50.228Z] [BOT] 💾 Saved posted_jobs.json: 1040 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:11:51.730Z] [BOT] 📍 [ROUTING] "Employee & Workplace Experience Intern" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-31T10:11:51.731Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:11:51.927Z] [BOT] ✅ Posted message: Employee & Workplace Experience Intern @ coinbase in #🤖・ai-jobs
[2026-01-31T10:11:51.927Z] [BOT] ✅ Industry: Employee & Workplace Experience Intern @ coinbase
[2026-01-31T10:11:51.927Z] [BOT] 💾 Added channel posting: Employee & Workplace Experience Intern @ coinbase → category channel (1 total channels)
[2026-01-31T10:11:51.927Z] [BOT] 💾 BEFORE MERGE: 1041 jobs in memory (cached)
[2026-01-31T10:11:51.947Z] [BOT] ✅ Loaded V2 database: 1040 jobs
💾 DISK STATE: 1040 jobs on disk
[2026-01-31T10:11:51.947Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1041
[2026-01-31T10:11:51.950Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:11:51.950Z] [BOT] 💾 AFTER MERGE: 1041 jobs (merged disk + memory)
[2026-01-31T10:11:51.951Z] [BOT] ✅ No jobs to archive (all 1041 jobs within 7-day window)
[2026-01-31T10:11:52.014Z] [BOT] 💾 Saved posted_jobs.json: 1041 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:11:53.714Z] [BOT] ✅ Posted message: Employee & Workplace Experience Intern @ coinbase in #🗽・JID_98d4f0de
[2026-01-31T10:11:53.714Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:11:53.714Z] [BOT] 💾 Added channel posting: Employee & Workplace Experience Intern @ coinbase → location channel (2 total channels)
[2026-01-31T10:11:53.714Z] [BOT] 💾 BEFORE MERGE: 1041 jobs in memory (cached)
[2026-01-31T10:11:53.734Z] [BOT] ✅ Loaded V2 database: 1041 jobs
💾 DISK STATE: 1041 jobs on disk
[2026-01-31T10:11:53.735Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1041
[2026-01-31T10:11:53.737Z] [BOT] 🔀 Deep merged: Employee & Workplace Experience Intern @ coinbase (disk: 1 channels → merged: 2 channels)
[2026-01-31T10:11:53.737Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1041 jobs (merged disk + memory)
[2026-01-31T10:11:53.738Z] [BOT] ✅ No jobs to archive (all 1041 jobs within 7-day window)
[2026-01-31T10:11:53.800Z] [BOT] 💾 Saved posted_jobs.json: 1041 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:11:55.301Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Intern" @ coinbase
[2026-01-31T10:11:55.301Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T10:11:55.450Z] [BOT] ✅ Posted message: Machine Learning Engineer Intern @ coinbase in #🤖・ai-jobs
[2026-01-31T10:11:55.450Z] [BOT] ✅ Industry: Machine Learning Engineer Intern @ coinbase
[2026-01-31T10:11:55.450Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Intern @ coinbase → category channel (1 total channels)
[2026-01-31T10:11:55.451Z] [BOT] 💾 BEFORE MERGE: 1042 jobs in memory (cached)
[2026-01-31T10:11:55.471Z] [BOT] ✅ Loaded V2 database: 1041 jobs
💾 DISK STATE: 1041 jobs on disk
[2026-01-31T10:11:55.471Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1042
[2026-01-31T10:11:55.473Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:11:55.473Z] [BOT] 💾 AFTER MERGE: 1042 jobs (merged disk + memory)
[2026-01-31T10:11:55.474Z] [BOT] ✅ No jobs to archive (all 1042 jobs within 7-day window)
[2026-01-31T10:11:55.535Z] [BOT] 💾 Saved posted_jobs.json: 1042 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:11:57.037Z] [BOT] 📍 [ROUTING] "Product Design Intern" @ coinbase
[2026-01-31T10:11:57.037Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:11:57.291Z] [BOT] ✅ Posted message: Product Design Intern @ coinbase in #🤖・ai-jobs
[2026-01-31T10:11:57.292Z] [BOT] ✅ Industry: Product Design Intern @ coinbase
[2026-01-31T10:11:57.292Z] [BOT] 💾 Added channel posting: Product Design Intern @ coinbase → category channel (1 total channels)
[2026-01-31T10:11:57.292Z] [BOT] 💾 BEFORE MERGE: 1043 jobs in memory (cached)
[2026-01-31T10:11:57.312Z] [BOT] ✅ Loaded V2 database: 1042 jobs
💾 DISK STATE: 1042 jobs on disk
[2026-01-31T10:11:57.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1043
[2026-01-31T10:11:57.314Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:11:57.314Z] [BOT] 💾 AFTER MERGE: 1043 jobs (merged disk + memory)
[2026-01-31T10:11:57.314Z] [BOT] ✅ No jobs to archive (all 1043 jobs within 7-day window)
[2026-01-31T10:11:57.399Z] [BOT] 💾 Saved posted_jobs.json: 1043 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:11:58.900Z] [BOT] 📍 [ROUTING] "Tax Information Reporting Intern" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-31T10:11:58.900Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:11:59.143Z] [BOT] ✅ Posted message: Tax Information Reporting Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Tax Information Reporting Intern @ coinbase
[2026-01-31T10:11:59.144Z] [BOT] 💾 Added channel posting: Tax Information Reporting Intern @ coinbase → category channel (1 total channels)
💾 BEFORE MERGE: 1044 jobs in memory (cached)
[2026-01-31T10:11:59.163Z] [BOT] ✅ Loaded V2 database: 1043 jobs
💾 DISK STATE: 1043 jobs on disk
[2026-01-31T10:11:59.163Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1044
[2026-01-31T10:11:59.165Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:11:59.165Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-31T10:11:59.166Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-31T10:11:59.224Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
[2026-01-31T10:11:59.224Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T10:12:01.071Z] [BOT] ✅ Posted message: Tax Information Reporting Intern @ coinbase in #🗽・JID_98d4f0de
[2026-01-31T10:12:01.072Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:12:01.072Z] [BOT] 💾 Added channel posting: Tax Information Reporting Intern @ coinbase → location channel (2 total channels)
[2026-01-31T10:12:01.072Z] [BOT] 💾 BEFORE MERGE: 1044 jobs in memory (cached)
[2026-01-31T10:12:01.092Z] [BOT] ✅ Loaded V2 database: 1044 jobs
💾 DISK STATE: 1044 jobs on disk
[2026-01-31T10:12:01.092Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1044
[2026-01-31T10:12:01.094Z] [BOT] 🔀 Deep merged: Tax Information Reporting Intern @ coinbase (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T10:12:01.094Z] [BOT] 💾 AFTER MERGE: 1044 jobs (merged disk + memory)
[2026-01-31T10:12:01.095Z] [BOT] ✅ No jobs to archive (all 1044 jobs within 7-day window)
[2026-01-31T10:12:01.155Z] [BOT] 💾 Saved posted_jobs.json: 1044 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:12:05.657Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-31T10:12:05.658Z] [BOT] 📍 [ROUTING] "Probabilistic Risk Assessment Engineer 1" @ ORG_41a6741einghouse Electric Company
   Category: TECH (matched: "engineer/engineering")
[2026-01-31T10:12:05.659Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:12:05.897Z] [BOT] ✅ Posted message: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company
[2026-01-31T10:12:05.898Z] [BOT] 💾 Added channel posting: Probabilistic Risk Assessment Engineer 1 @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
💾 BEFORE MERGE: 1045 jobs in memory (cached)
[2026-01-31T10:12:05.916Z] [BOT] ✅ Loaded V2 database: 1044 jobs
💾 DISK STATE: 1044 jobs on disk
[2026-01-31T10:12:05.916Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1045
[2026-01-31T10:12:05.918Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1045 jobs (merged disk + memory)
[2026-01-31T10:12:05.919Z] [BOT] ✅ No jobs to archive (all 1045 jobs within 7-day window)
[2026-01-31T10:12:05.978Z] [BOT] 💾 Saved posted_jobs.json: 1045 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:12:07.481Z] [BOT] 📍 [ROUTING] "Nuclear Analysis Technician C / Engineering Technicians" @ ORG_41a6741einghouse Electric Company
[2026-01-31T10:12:07.481Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:12:07.617Z] [BOT] ✅ Posted message: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company
[2026-01-31T10:12:07.618Z] [BOT] 💾 Added channel posting: Nuclear Analysis Technician C / Engineering Technicians @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
💾 BEFORE MERGE: 1046 jobs in memory (cached)
[2026-01-31T10:12:07.637Z] [BOT] ✅ Loaded V2 database: 1045 jobs
💾 DISK STATE: 1045 jobs on disk
[2026-01-31T10:12:07.637Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1046
[2026-01-31T10:12:07.639Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1046 jobs (merged disk + memory)
[2026-01-31T10:12:07.640Z] [BOT] ✅ No jobs to archive (all 1046 jobs within 7-day window)
[2026-01-31T10:12:07.700Z] [BOT] 💾 Saved posted_jobs.json: 1046 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:12:12.202Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T10:12:12.203Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_dec6f66e Risk Solutions
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-31T10:12:12.203Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T10:12:12.204Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T10:12:12.424Z] [BOT] ✅ Posted message: Data Analyst @ ORG_dec6f66e Risk Solutions in #📊・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_dec6f66e Risk Solutions
[2026-01-31T10:12:12.425Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_dec6f66e Risk Solutions → category channel (1 total channels)
[2026-01-31T10:12:12.425Z] [BOT] 💾 BEFORE MERGE: 1047 jobs in memory (cached)
[2026-01-31T10:12:12.444Z] [BOT] ✅ Loaded V2 database: 1046 jobs
💾 DISK STATE: 1046 jobs on disk
[2026-01-31T10:12:12.445Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1047
[2026-01-31T10:12:12.446Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1047 jobs (merged disk + memory)
[2026-01-31T10:12:12.447Z] [BOT] ✅ No jobs to archive (all 1047 jobs within 7-day window)
[2026-01-31T10:12:12.508Z] [BOT] 💾 Saved posted_jobs.json: 1047 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:12:14.011Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend - Healthcare" @ ORG_3acb0a4a
[2026-01-31T10:12:14.011Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T10:12:14.165Z] [BOT] ✅ Posted message: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a in #📊・JID_fb739488
[2026-01-31T10:12:14.165Z] [BOT] ✅ Industry: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a
[2026-01-31T10:12:14.165Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Backend - Healthcare @ ORG_3acb0a4a → category channel (1 total channels)
💾 BEFORE MERGE: 1048 jobs in memory (cached)
[2026-01-31T10:12:14.185Z] [BOT] ✅ Loaded V2 database: 1047 jobs
💾 DISK STATE: 1047 jobs on disk
[2026-01-31T10:12:14.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1048
[2026-01-31T10:12:14.187Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1048 jobs (merged disk + memory)
[2026-01-31T10:12:14.187Z] [BOT] ✅ No jobs to archive (all 1048 jobs within 7-day window)
[2026-01-31T10:12:14.248Z] [BOT] 💾 Saved posted_jobs.json: 1048 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:12:18.750Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T10:12:18.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ba1fb909..." not found, but found as SHA256 "ad70adabb520d26e"
⏭️  Skipping duplicate: JID_50789727 (posted within 7 days)
[2026-01-31T10:12:18.752Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e971f097..." not found, but found as SHA256 "80d636216d47e1c6"
[2026-01-31T10:12:18.752Z] [BOT] ⏭️  Skipping duplicate: JID_292d0ae8 (posted within 7 days)
[2026-01-31T10:12:18.752Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1eff0376..." not found, but found as SHA256 "59b7f76e7b89a2b5"
⏭️  Skipping duplicate: JID_20f53a1e-analyst_r104140 (posted within 7 days)
[2026-01-31T10:12:18.752Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a93a4a10..." not found, but found as SHA256 "354548d1c5533b32"
[2026-01-31T10:12:18.752Z] [BOT] ⏭️  Skipping duplicate: JID_b003e995 (posted within 7 days)
[2026-01-31T10:12:18.752Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cbeb8692..." not found, but found as SHA256 "bc944db40d788f4c"
⏭️  Skipping duplicate: JID_35ed794f (posted within 7 days)
[2026-01-31T10:12:18.753Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8a2080cf..." not found, but found as SHA256 "6645c6eff10e9744"
[2026-01-31T10:12:18.753Z] [BOT] ⏭️  Skipping duplicate: JID_de687c4d (posted within 7 days)
[2026-01-31T10:12:18.753Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8561194f..." not found, but found as SHA256 "95ebb7c824547151"
⏭️  Skipping duplicate: JID_b885468f (posted within 7 days)
[2026-01-31T10:12:18.753Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_60e3caf6..." not found, but found as SHA256 "314049a8e23f1f63"
⏭️  Skipping duplicate: JID_07d75074 (posted within 7 days)
[2026-01-31T10:12:18.753Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_53ca5eac..." not found, but found as SHA256 "ef6ef455f1e50ab1"
⏭️  Skipping duplicate: JID_0cd4e9de (posted within 7 days)
[2026-01-31T10:12:18.753Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_152e0903..." not found, but found as SHA256 "92a33504b277922e"
[2026-01-31T10:12:18.754Z] [BOT] ⏭️  Skipping duplicate: JID_1ed2c5a5 (posted within 7 days)
[2026-01-31T10:12:18.864Z] [BOT] ✅ Loaded pending queue: 2948 total (1895 pending, 44 enriched, 1009 posted)
[2026-01-31T10:12:19.048Z] [BOT] ✅ Saved pending queue: 2948 total (1895 pending, 34 enriched, 1019 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T10:12:19.048Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T10:12:19.133Z] [BOT] 📂 Loaded 11100 existing routing entries
[2026-01-31T10:12:19.254Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11110
[2026-01-31T10:12:19.254Z] [BOT] Timestamp: 2026-01-31T10:12:19.210Z
[2026-01-31T10:12:19.258Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 32
   Successful: 12
   Failed: 0
   Skipped: 20
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #🤖・ai-jobs: 6 posts
     2. #🗽・JID_98d4f0de: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #📊・JID_fb739488: 2 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1048 jobs in memory (cached)
[2026-01-31T10:12:19.288Z] [BOT] ✅ Loaded V2 database: 1048 jobs
[2026-01-31T10:12:19.289Z] [BOT] 💾 DISK STATE: 1048 jobs on disk
[2026-01-31T10:12:19.289Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1048
[2026-01-31T10:12:19.292Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:12:19.292Z] [BOT] 💾 AFTER MERGE: 1048 jobs (merged disk + memory)
[2026-01-31T10:12:19.293Z] [BOT] ✅ No jobs to archive (all 1048 jobs within 7-day window)
[2026-01-31T10:12:19.351Z] [BOT] 💾 Saved posted_jobs.json: 1048 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:12:19.351Z] [BOT] ✅ Database saved successfully
[2026-01-31T10:12:21.380Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*