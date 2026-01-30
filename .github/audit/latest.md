# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T18:02:59.525Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T18:02:19.742Z] ========================================
[2026-01-30T18:02:19.744Z] Discord Bot Execution Log
[2026-01-30T18:02:19.744Z] Environment: GitHub Actions
[2026-01-30T18:02:19.744Z] Node Version: v20.20.0
[2026-01-30T18:02:19.745Z] ========================================
[2026-01-30T18:02:19.745Z] Environment Variables Check:
[2026-01-30T18:02:19.745Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T18:02:19.745Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.745Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T18:02:19.745Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T18:02:19.745Z] 
Multi-Channel Configuration:
[2026-01-30T18:02:19.745Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.745Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.745Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.746Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.746Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.746Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.746Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.746Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.746Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T18:02:19.746Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T18:02:19.746Z] 
Data Files Check:
[2026-01-30T18:02:19.747Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T18:02:19.769Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3716483 bytes)
[2026-01-30T18:02:19.769Z] 
========================================
[2026-01-30T18:02:19.770Z] Starting Enhanced Discord Bot...
[2026-01-30T18:02:19.770Z] ========================================
[2026-01-30T18:02:20.309Z] [BOT] ✅ Loaded V2 database: 577 jobs
[2026-01-30T18:02:20.786Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T18:02:20.787Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T18:02:20.787Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T18:02:20.902Z] [BOT] ✅ Loaded pending queue: 2924 total (2326 pending, 50 enriched, 548 posted)
[2026-01-30T18:02:20.903Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T18:02:20.903Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T18:02:20.903Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T18:02:20.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T18:02:20.904Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T18:02:20.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T18:02:20.904Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T18:02:20.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T18:02:20.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T18:02:20.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T18:02:20.905Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T18:02:20.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T18:02:20.905Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T18:02:20.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T18:02:20.906Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T18:02:20.906Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T18:02:20.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T18:02:20.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T18:02:20.906Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T18:02:20.913Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T18:02:20.913Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
[2026-01-30T18:02:20.913Z] [BOT] 🚫 Skipping blacklisted job: Director, Sales Commissions at samsara
[2026-01-30T18:02:21.019Z] [BOT] ✅ Loaded pending queue: 2924 total (2326 pending, 50 enriched, 548 posted)
[2026-01-30T18:02:21.218Z] [BOT] ✅ Saved pending queue: 2922 total (2326 pending, 48 enriched, 548 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-30T18:02:21.218Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-30T18:02:21.218Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T18:02:21.219Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-30T18:02:21.219Z] [BOT] (15 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Account Executive, E-Commerce  @ brex: seattle, washington, united states, san francisco, california, united states, new york, new york, united states
[2026-01-30T18:02:21.219Z] [BOT] - Account Development Representative (New Grad) @ samsara: atlanta, phoenix, arizona
   - Account Executive, Commercial @ samsara: atlanta, columbus, seattle, san diego, salt lake, los angeles, denver, boston, phoenix, arizona, portland
   - Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara: austin, chicago, dallas, houston, texas
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T18:02:21.223Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T18:02:21.224Z] [BOT] 📍 [ROUTING] "Account Executive, E-Commerce " @ brex
[2026-01-30T18:02:21.224Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T18:02:21.242Z] [BOT ERROR] (node:2560) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T18:02:21.611Z] [BOT] ✅ Posted message: Account Executive, E-Commerce  @ brex in #💰・finance-jobs
[2026-01-30T18:02:21.611Z] [BOT] ✅ Industry: Account Executive, E-Commerce  @ brex
[2026-01-30T18:02:21.612Z] [BOT] 💾 Added channel posting: Account Executive, E-Commerce  @ brex → category channel (1 total channels)
[2026-01-30T18:02:21.612Z] [BOT] 💾 BEFORE MERGE: 578 jobs in memory (cached)
[2026-01-30T18:02:21.628Z] [BOT] ✅ Loaded V2 database: 577 jobs
💾 DISK STATE: 577 jobs on disk
[2026-01-30T18:02:21.628Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=578
[2026-01-30T18:02:21.630Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:21.630Z] [BOT] 💾 AFTER MERGE: 578 jobs (merged disk + memory)
[2026-01-30T18:02:21.630Z] [BOT] ✅ No jobs to archive (all 578 jobs within 7-day window)
[2026-01-30T18:02:21.671Z] [BOT] 💾 Saved posted_jobs.json: 578 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:23.174Z] [BOT] 📍 [ROUTING] "Digital Analyst" @ ORG_7eb1e1f5
[2026-01-30T18:02:23.174Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T18:02:23.437Z] [BOT] ✅ Posted message: Digital Analyst @ ORG_7eb1e1f5 in #💰・finance-jobs
[2026-01-30T18:02:23.437Z] [BOT] ✅ Industry: Digital Analyst @ ORG_7eb1e1f5
[2026-01-30T18:02:23.438Z] [BOT] 💾 Added channel posting: Digital Analyst @ ORG_7eb1e1f5 → category channel (1 total channels)
[2026-01-30T18:02:23.438Z] [BOT] 💾 BEFORE MERGE: 579 jobs in memory (cached)
[2026-01-30T18:02:23.449Z] [BOT] ✅ Loaded V2 database: 578 jobs
💾 DISK STATE: 578 jobs on disk
[2026-01-30T18:02:23.449Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=579
[2026-01-30T18:02:23.450Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:23.451Z] [BOT] 💾 AFTER MERGE: 579 jobs (merged disk + memory)
[2026-01-30T18:02:23.451Z] [BOT] ✅ No jobs to archive (all 579 jobs within 7-day window)
[2026-01-30T18:02:23.485Z] [BOT] 💾 Saved posted_jobs.json: 579 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:25.216Z] [BOT] ✅ Posted message: Digital Analyst @ ORG_7eb1e1f5 in #🗽・JID_98d4f0de
[2026-01-30T18:02:25.217Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T18:02:25.217Z] [BOT] 💾 Added channel posting: Digital Analyst @ ORG_7eb1e1f5 → location channel (2 total channels)
[2026-01-30T18:02:25.217Z] [BOT] 💾 BEFORE MERGE: 579 jobs in memory (cached)
[2026-01-30T18:02:25.229Z] [BOT] ✅ Loaded V2 database: 579 jobs
💾 DISK STATE: 579 jobs on disk
[2026-01-30T18:02:25.229Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=579
[2026-01-30T18:02:25.230Z] [BOT] 🔀 Deep merged: Digital Analyst @ ORG_7eb1e1f5 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T18:02:25.230Z] [BOT] 💾 AFTER MERGE: 579 jobs (merged disk + memory)
[2026-01-30T18:02:25.231Z] [BOT] ✅ No jobs to archive (all 579 jobs within 7-day window)
[2026-01-30T18:02:25.269Z] [BOT] 💾 Saved posted_jobs.json: 579 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:29.771Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-30T18:02:29.772Z] [BOT] 📍 [ROUTING] "Developer" @ ORG_eead3632
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T18:02:29.772Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T18:02:29.772Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T18:02:30.088Z] [BOT] ✅ Posted message: Developer @ ORG_eead3632 in #📊・JID_fb739488
[2026-01-30T18:02:30.089Z] [BOT] ✅ Industry: Developer @ ORG_eead3632
[2026-01-30T18:02:30.089Z] [BOT] 💾 Added channel posting: Developer @ ORG_eead3632 → category channel (1 total channels)
[2026-01-30T18:02:30.089Z] [BOT] 💾 BEFORE MERGE: 580 jobs in memory (cached)
[2026-01-30T18:02:30.109Z] [BOT] ✅ Loaded V2 database: 579 jobs
💾 DISK STATE: 579 jobs on disk
[2026-01-30T18:02:30.109Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=580
[2026-01-30T18:02:30.110Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:30.110Z] [BOT] 💾 AFTER MERGE: 580 jobs (merged disk + memory)
[2026-01-30T18:02:30.111Z] [BOT] ✅ No jobs to archive (all 580 jobs within 7-day window)
[2026-01-30T18:02:30.158Z] [BOT] 💾 Saved posted_jobs.json: 580 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:31.660Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_d87c9ca3 Group
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-30T18:02:31.660Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T18:02:31.871Z] [BOT] ✅ Posted message: Business Intelligence Analyst @ ORG_d87c9ca3 Group in #📊・JID_fb739488
  ✅ Industry: Business Intelligence Analyst @ ORG_d87c9ca3 Group
[2026-01-30T18:02:31.871Z] [BOT] 💾 Added channel posting: Business Intelligence Analyst @ ORG_d87c9ca3 Group → category channel (1 total channels)
[2026-01-30T18:02:31.871Z] [BOT] 💾 BEFORE MERGE: 581 jobs in memory (cached)
[2026-01-30T18:02:31.882Z] [BOT] ✅ Loaded V2 database: 580 jobs
💾 DISK STATE: 580 jobs on disk
[2026-01-30T18:02:31.883Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=581
[2026-01-30T18:02:31.884Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 581 jobs (merged disk + memory)
[2026-01-30T18:02:31.884Z] [BOT] ✅ No jobs to archive (all 581 jobs within 7-day window)
[2026-01-30T18:02:31.924Z] [BOT] 💾 Saved posted_jobs.json: 581 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:36.427Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T18:02:36.428Z] [BOT] 📍 [ROUTING] "Data Labeling Specialist - Imagery" @ ORG_6c847a27 Power
[2026-01-30T18:02:36.428Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T18:02:36.690Z] [BOT] ✅ Posted message: Data Labeling Specialist - Imagery @ ORG_6c847a27 Power in #🤖・ai-jobs
  ✅ Industry: Data Labeling Specialist - Imagery @ ORG_6c847a27 Power
[2026-01-30T18:02:36.691Z] [BOT] 💾 Added channel posting: Data Labeling Specialist - Imagery @ ORG_6c847a27 Power → category channel (1 total channels)
[2026-01-30T18:02:36.691Z] [BOT] 💾 BEFORE MERGE: 582 jobs in memory (cached)
[2026-01-30T18:02:36.702Z] [BOT] ✅ Loaded V2 database: 581 jobs
💾 DISK STATE: 581 jobs on disk
[2026-01-30T18:02:36.703Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=582
[2026-01-30T18:02:36.704Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:36.704Z] [BOT] 💾 AFTER MERGE: 582 jobs (merged disk + memory)
[2026-01-30T18:02:36.705Z] [BOT] ✅ No jobs to archive (all 582 jobs within 7-day window)
[2026-01-30T18:02:36.740Z] [BOT] 💾 Saved posted_jobs.json: 582 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:38.242Z] [BOT] 📍 [ROUTING] "Entry-Level AI Generalist" @ ORG_4ee447c5 Technologies AI
[2026-01-30T18:02:38.242Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T18:02:38.584Z] [BOT] ✅ Posted message: Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI in #🤖・ai-jobs
[2026-01-30T18:02:38.585Z] [BOT] ✅ Industry: Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI
[2026-01-30T18:02:38.585Z] [BOT] 💾 Added channel posting: Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI → category channel (1 total channels)
[2026-01-30T18:02:38.585Z] [BOT] 💾 BEFORE MERGE: 583 jobs in memory (cached)
[2026-01-30T18:02:38.596Z] [BOT] ✅ Loaded V2 database: 582 jobs
💾 DISK STATE: 582 jobs on disk
[2026-01-30T18:02:38.596Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=583
[2026-01-30T18:02:38.598Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:38.598Z] [BOT] 💾 AFTER MERGE: 583 jobs (merged disk + memory)
[2026-01-30T18:02:38.598Z] [BOT] ✅ No jobs to archive (all 583 jobs within 7-day window)
[2026-01-30T18:02:38.634Z] [BOT] 💾 Saved posted_jobs.json: 583 active jobs
[2026-01-30T18:02:38.634Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:40.680Z] [BOT] ✅ Posted message: Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI in #🏠・JID_ead674af
[2026-01-30T18:02:40.680Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T18:02:40.681Z] [BOT] 💾 Added channel posting: Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI → location channel (2 total channels)
💾 BEFORE MERGE: 583 jobs in memory (cached)
[2026-01-30T18:02:40.693Z] [BOT] ✅ Loaded V2 database: 583 jobs
💾 DISK STATE: 583 jobs on disk
[2026-01-30T18:02:40.693Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=583
[2026-01-30T18:02:40.694Z] [BOT] 🔀 Deep merged: Entry-Level AI Generalist @ ORG_4ee447c5 Technologies AI (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T18:02:40.694Z] [BOT] 💾 AFTER MERGE: 583 jobs (merged disk + memory)
[2026-01-30T18:02:40.695Z] [BOT] ✅ No jobs to archive (all 583 jobs within 7-day window)
[2026-01-30T18:02:40.730Z] [BOT] 💾 Saved posted_jobs.json: 583 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:42.233Z] [BOT] 📍 [ROUTING] "Associate Reverse Engineer" @ ORG_15a5b314 Mellon University
[2026-01-30T18:02:42.233Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T18:02:42.233Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T18:02:42.486Z] [BOT] ✅ Posted message: Associate Reverse Engineer @ ORG_15a5b314 Mellon University in #🤖・ai-jobs
[2026-01-30T18:02:42.487Z] [BOT] ✅ Industry: Associate Reverse Engineer @ ORG_15a5b314 Mellon University
[2026-01-30T18:02:42.487Z] [BOT] 💾 Added channel posting: Associate Reverse Engineer @ ORG_15a5b314 Mellon University → category channel (1 total channels)
[2026-01-30T18:02:42.487Z] [BOT] 💾 BEFORE MERGE: 584 jobs in memory (cached)
[2026-01-30T18:02:42.498Z] [BOT] ✅ Loaded V2 database: 583 jobs
💾 DISK STATE: 583 jobs on disk
[2026-01-30T18:02:42.498Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=584
[2026-01-30T18:02:42.500Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:42.500Z] [BOT] 💾 AFTER MERGE: 584 jobs (merged disk + memory)
[2026-01-30T18:02:42.500Z] [BOT] ✅ No jobs to archive (all 584 jobs within 7-day window)
[2026-01-30T18:02:42.535Z] [BOT] 💾 Saved posted_jobs.json: 584 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:47.037Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T18:02:47.038Z] [BOT] 📍 [ROUTING] "New Graduate Engineer - Software - Starlink" @ ORG_afd623b1
   Category: TECH (matched: "software")
[2026-01-30T18:02:47.038Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:02:47.289Z] [BOT] ✅ Posted message: New Graduate Engineer - Software - Starlink @ ORG_afd623b1 in #💻・tech-jobs
[2026-01-30T18:02:47.290Z] [BOT] ✅ Industry: New Graduate Engineer - Software - Starlink @ ORG_afd623b1
[2026-01-30T18:02:47.290Z] [BOT] 💾 Added channel posting: New Graduate Engineer - Software - Starlink @ ORG_afd623b1 → category channel (1 total channels)
💾 BEFORE MERGE: 585 jobs in memory (cached)
[2026-01-30T18:02:47.301Z] [BOT] ✅ Loaded V2 database: 584 jobs
💾 DISK STATE: 584 jobs on disk
[2026-01-30T18:02:47.301Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=585
[2026-01-30T18:02:47.303Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 585 jobs (merged disk + memory)
[2026-01-30T18:02:47.303Z] [BOT] ✅ No jobs to archive (all 585 jobs within 7-day window)
[2026-01-30T18:02:47.342Z] [BOT] 💾 Saved posted_jobs.json: 585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:48.844Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_336a7f11 Medical
[2026-01-30T18:02:48.844Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:02:49.075Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_336a7f11 Medical in #💻・tech-jobs
[2026-01-30T18:02:49.075Z] [BOT] ✅ Industry: Associate Software Engineer @ ORG_336a7f11 Medical
[2026-01-30T18:02:49.076Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_336a7f11 Medical → category channel (1 total channels)
💾 BEFORE MERGE: 586 jobs in memory (cached)
[2026-01-30T18:02:49.088Z] [BOT] ✅ Loaded V2 database: 585 jobs
💾 DISK STATE: 585 jobs on disk
[2026-01-30T18:02:49.088Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=586
[2026-01-30T18:02:49.089Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:49.089Z] [BOT] 💾 AFTER MERGE: 586 jobs (merged disk + memory)
[2026-01-30T18:02:49.090Z] [BOT] ✅ No jobs to archive (all 586 jobs within 7-day window)
[2026-01-30T18:02:49.127Z] [BOT] 💾 Saved posted_jobs.json: 586 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:50.627Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_d01167bb
   Category: TECH (matched: "software")
[2026-01-30T18:02:50.627Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:02:50.867Z] [BOT] ✅ Posted message: Software Engineer @ ORG_d01167bb in #💻・tech-jobs
[2026-01-30T18:02:50.867Z] [BOT] ✅ Industry: Software Engineer @ ORG_d01167bb
[2026-01-30T18:02:50.868Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_d01167bb → category channel (1 total channels)
💾 BEFORE MERGE: 587 jobs in memory (cached)
[2026-01-30T18:02:50.879Z] [BOT] ✅ Loaded V2 database: 586 jobs
💾 DISK STATE: 586 jobs on disk
[2026-01-30T18:02:50.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=587
[2026-01-30T18:02:50.881Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:50.881Z] [BOT] 💾 AFTER MERGE: 587 jobs (merged disk + memory)
[2026-01-30T18:02:50.882Z] [BOT] ✅ No jobs to archive (all 587 jobs within 7-day window)
[2026-01-30T18:02:50.922Z] [BOT] 💾 Saved posted_jobs.json: 587 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:55.423Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T18:02:55.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_01a421de..." not found, but found as SHA256 "b2e48071f546dc57"
⏭️  Skipping duplicate: JID_01a421de (posted within 7 days)
[2026-01-30T18:02:55.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_41456ddc..." not found, but found as SHA256 "007aa9ac19d0fda5"
⏭️  Skipping duplicate: JID_6baaa66c (posted within 7 days)
[2026-01-30T18:02:55.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64df404c..." not found, but found as SHA256 "1234a286a6b48112"
⏭️  Skipping duplicate: JID_96721792 (posted within 7 days)
[2026-01-30T18:02:55.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_28dc936b..." not found, but found as SHA256 "df71eaab8f7055ec"
⏭️  Skipping duplicate: JID_22be7687 (posted within 7 days)
[2026-01-30T18:02:55.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_22b48374..." not found, but found as SHA256 "401911d52f4e7746"
⏭️  Skipping duplicate: JID_08c64584-analyst_r019735-1 (posted within 7 days)
[2026-01-30T18:02:55.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5690b9e6..." not found, but found as SHA256 "254fd3d4bafe3a74"
⏭️  Skipping duplicate: JID_26d96cde-gmed_careers-JID_581af661-engineer_jr105520 (posted within 7 days)
[2026-01-30T18:02:55.425Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec81da3-..." not found, but found as SHA256 "a0c6c9c53dc21975"
[2026-01-30T18:02:55.426Z] [BOT] ⏭️  Skipping duplicate: JID_c83d8ba2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b1fef101..." not found, but found as SHA256 "44691aa5c77fbb00"
[2026-01-30T18:02:55.426Z] [BOT] ⏭️  Skipping duplicate: JID_231a0ab5-researcher_2024059-1 (posted within 7 days)
[2026-01-30T18:02:55.426Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_787cd3f3..." not found, but found as SHA256 "1c52002db945f534"
⏭️  Skipping duplicate: JID_32d7b062-engineer_6521-1 (posted within 7 days)
[2026-01-30T18:02:55.426Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa6e26b9..." not found, but found as SHA256 "e33b87c3e9521963"
⏭️  Skipping duplicate: JID_97440932 (posted within 7 days)
[2026-01-30T18:02:55.532Z] [BOT] ✅ Loaded pending queue: 2922 total (2326 pending, 48 enriched, 548 posted)
[2026-01-30T18:02:55.720Z] [BOT] ✅ Saved pending queue: 2922 total (2326 pending, 38 enriched, 558 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T18:02:55.720Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T18:02:55.806Z] [BOT] 📂 Loaded 10639 existing routing entries
[2026-01-30T18:02:55.945Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T18:02:55.945Z] [BOT] Total entries: 10649
   Timestamp: 2026-01-30T18:02:55.901Z
[2026-01-30T18:02:55.945Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T18:02:55.946Z] [BOT] Total attempts: 28
   Successful: 12
   Failed: 0
   Skipped: 16
[2026-01-30T18:02:55.946Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T18:02:55.946Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 3 posts
     2. #💻・tech-jobs: 3 posts
[2026-01-30T18:02:55.946Z] [BOT] 3. #💰・finance-jobs: 2 posts
     4. #📊・JID_fb739488: 2 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T18:02:55.947Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 587 jobs in memory (cached)
[2026-01-30T18:02:55.959Z] [BOT] ✅ Loaded V2 database: 587 jobs
💾 DISK STATE: 587 jobs on disk
[2026-01-30T18:02:55.959Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=587
[2026-01-30T18:02:55.961Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:02:55.961Z] [BOT] 💾 AFTER MERGE: 587 jobs (merged disk + memory)
[2026-01-30T18:02:55.961Z] [BOT] ✅ No jobs to archive (all 587 jobs within 7-day window)
[2026-01-30T18:02:55.996Z] [BOT] 💾 Saved posted_jobs.json: 587 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:02:55.996Z] [BOT] ✅ Database saved successfully
[2026-01-30T18:02:58.023Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2560) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*