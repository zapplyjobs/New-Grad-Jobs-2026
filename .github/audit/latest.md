# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T17:36:52.578Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T17:36:08.011Z] ========================================
[2026-01-30T17:36:08.013Z] Discord Bot Execution Log
[2026-01-30T17:36:08.013Z] Environment: GitHub Actions
[2026-01-30T17:36:08.013Z] Node Version: v20.20.0
[2026-01-30T17:36:08.013Z] ========================================
[2026-01-30T17:36:08.013Z] Environment Variables Check:
[2026-01-30T17:36:08.013Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T17:36:08.014Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.014Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T17:36:08.014Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T17:36:08.014Z] 
Multi-Channel Configuration:
[2026-01-30T17:36:08.014Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.014Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.014Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.014Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.014Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.014Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.015Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.015Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.015Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T17:36:08.015Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T17:36:08.015Z] 
Data Files Check:
[2026-01-30T17:36:08.016Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T17:36:08.035Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3656828 bytes)
[2026-01-30T17:36:08.035Z] 
========================================
[2026-01-30T17:36:08.035Z] Starting Enhanced Discord Bot...
[2026-01-30T17:36:08.035Z] ========================================
[2026-01-30T17:36:08.582Z] [BOT] ✅ Loaded V2 database: 567 jobs
[2026-01-30T17:36:09.296Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T17:36:09.297Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T17:36:09.297Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T17:36:09.410Z] [BOT] ✅ Loaded pending queue: 2924 total (2336 pending, 50 enriched, 538 posted)
[2026-01-30T17:36:09.411Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T17:36:09.411Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T17:36:09.411Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T17:36:09.412Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T17:36:09.412Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T17:36:09.412Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T17:36:09.412Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T17:36:09.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T17:36:09.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T17:36:09.413Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T17:36:09.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T17:36:09.413Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T17:36:09.413Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T17:36:09.414Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T17:36:09.414Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T17:36:09.414Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-30T17:36:09.414Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T17:36:09.414Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T17:36:09.415Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T17:36:09.415Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T17:36:09.422Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T17:36:09.422Z] [BOT] 🚫 Skipping blacklisted job: Senior GRC Lead at brex
[2026-01-30T17:36:09.422Z] [BOT] 🚫 Skipping blacklisted job: Senior GRC Lead at brex
[2026-01-30T17:36:09.535Z] [BOT] ✅ Loaded pending queue: 2924 total (2336 pending, 50 enriched, 538 posted)
[2026-01-30T17:36:09.710Z] [BOT] ✅ Saved pending queue: 2922 total (2336 pending, 48 enriched, 538 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
[2026-01-30T17:36:09.710Z] [BOT] 📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-30T17:36:09.710Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T17:36:09.711Z] [BOT] 📋 After multi-location grouping: 26 unique jobs to post
[2026-01-30T17:36:09.711Z] [BOT] (8 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-30T17:36:09.712Z] [BOT] - Account Executive, E-Commerce  @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states, new york, new york, united states
   - Account Development Representative (New Grad) @ samsara: atlanta, phoenix, arizona
   - Account Executive, Commercial @ samsara: atlanta, columbus, seattle, san diego, salt lake
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T17:36:09.715Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T17:36:09.715Z] [BOT] 📍 [ROUTING] "Bus Systems Analysis Associate" @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-30T17:36:09.716Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T17:36:09.733Z] [BOT ERROR] (node:2667) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T17:36:10.004Z] [BOT] ✅ Posted message: Bus Systems Analysis Associate @ ORG_ca80fdf7 Parcel Service (UPS) in #💻・tech-jobs
[2026-01-30T17:36:10.005Z] [BOT] ✅ Industry: Bus Systems Analysis Associate @ ORG_ca80fdf7 Parcel Service (UPS)
[2026-01-30T17:36:10.005Z] [BOT] 💾 Added channel posting: Bus Systems Analysis Associate @ ORG_ca80fdf7 Parcel Service (UPS) → category channel (1 total channels)
[2026-01-30T17:36:10.006Z] [BOT] 💾 BEFORE MERGE: 568 jobs in memory (cached)
[2026-01-30T17:36:10.020Z] [BOT] ✅ Loaded V2 database: 567 jobs
💾 DISK STATE: 567 jobs on disk
[2026-01-30T17:36:10.020Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=568
[2026-01-30T17:36:10.022Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:10.022Z] [BOT] 💾 AFTER MERGE: 568 jobs (merged disk + memory)
[2026-01-30T17:36:10.022Z] [BOT] ✅ No jobs to archive (all 568 jobs within 7-day window)
[2026-01-30T17:36:10.066Z] [BOT] 💾 Saved posted_jobs.json: 568 active jobs
[2026-01-30T17:36:10.066Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:11.568Z] [BOT] 📍 [ROUTING] "AI Generalist - Entry-Level - Freelance AI Trainer Project" @ ORG_4ee447c5 Technologies AI
[2026-01-30T17:36:11.568Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T17:36:11.801Z] [BOT] ✅ Posted message: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI in #💻・tech-jobs
[2026-01-30T17:36:11.802Z] [BOT] ✅ Industry: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI
[2026-01-30T17:36:11.802Z] [BOT] 💾 Added channel posting: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI → category channel (1 total channels)
[2026-01-30T17:36:11.802Z] [BOT] 💾 BEFORE MERGE: 569 jobs in memory (cached)
[2026-01-30T17:36:11.813Z] [BOT] ✅ Loaded V2 database: 568 jobs
[2026-01-30T17:36:11.813Z] [BOT] 💾 DISK STATE: 568 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=569
[2026-01-30T17:36:11.815Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:11.815Z] [BOT] 💾 AFTER MERGE: 569 jobs (merged disk + memory)
[2026-01-30T17:36:11.815Z] [BOT] ✅ No jobs to archive (all 569 jobs within 7-day window)
[2026-01-30T17:36:11.849Z] [BOT] 💾 Saved posted_jobs.json: 569 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:13.622Z] [BOT] ✅ Posted message: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI in #🏠・JID_ead674af
[2026-01-30T17:36:13.622Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T17:36:13.622Z] [BOT] 💾 Added channel posting: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI → location channel (2 total channels)
[2026-01-30T17:36:13.622Z] [BOT] 💾 BEFORE MERGE: 569 jobs in memory (cached)
[2026-01-30T17:36:13.634Z] [BOT] ✅ Loaded V2 database: 569 jobs
💾 DISK STATE: 569 jobs on disk
[2026-01-30T17:36:13.634Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=569
[2026-01-30T17:36:13.635Z] [BOT] 🔀 Deep merged: AI Generalist - Entry-Level - Freelance AI Trainer Project @ ORG_4ee447c5 Technologies AI (disk: 1 channels → merged: 2 channels)
[2026-01-30T17:36:13.635Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 569 jobs (merged disk + memory)
[2026-01-30T17:36:13.636Z] [BOT] ✅ No jobs to archive (all 569 jobs within 7-day window)
[2026-01-30T17:36:13.668Z] [BOT] 💾 Saved posted_jobs.json: 569 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:15.169Z] [BOT] 📍 [ROUTING] "Mission Systems Software Engineer - Full Stack - Mission Operations" @ ORG_55bd43a0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T17:36:15.361Z] [BOT] ✅ Posted message: Mission Systems Software Engineer - Full Stack - Mission Operations @ ORG_55bd43a0 in #💻・tech-jobs
[2026-01-30T17:36:15.361Z] [BOT] ✅ Industry: Mission Systems Software Engineer - Full Stack - Mission Operations @ ORG_55bd43a0
[2026-01-30T17:36:15.362Z] [BOT] 💾 Added channel posting: Mission Systems Software Engineer - Full Stack - Mission Operations @ ORG_55bd43a0 → category channel (1 total channels)
💾 BEFORE MERGE: 570 jobs in memory (cached)
[2026-01-30T17:36:15.372Z] [BOT] ✅ Loaded V2 database: 569 jobs
💾 DISK STATE: 569 jobs on disk
[2026-01-30T17:36:15.372Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=570
[2026-01-30T17:36:15.374Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 570 jobs (merged disk + memory)
[2026-01-30T17:36:15.374Z] [BOT] ✅ No jobs to archive (all 570 jobs within 7-day window)
[2026-01-30T17:36:15.408Z] [BOT] 💾 Saved posted_jobs.json: 570 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:19.909Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-30T17:36:19.910Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_70014abc
[2026-01-30T17:36:19.910Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T17:36:20.362Z] [BOT] ✅ Posted message: Software Engineer @ ORG_70014abc in #🤖・ai-jobs
[2026-01-30T17:36:20.362Z] [BOT] ✅ Industry: Software Engineer @ ORG_70014abc
[2026-01-30T17:36:20.362Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_70014abc → category channel (1 total channels)
[2026-01-30T17:36:20.362Z] [BOT] 💾 BEFORE MERGE: 571 jobs in memory (cached)
[2026-01-30T17:36:20.381Z] [BOT] ✅ Loaded V2 database: 570 jobs
💾 DISK STATE: 570 jobs on disk
[2026-01-30T17:36:20.381Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=571
[2026-01-30T17:36:20.383Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:20.383Z] [BOT] 💾 AFTER MERGE: 571 jobs (merged disk + memory)
[2026-01-30T17:36:20.383Z] [BOT] ✅ No jobs to archive (all 571 jobs within 7-day window)
[2026-01-30T17:36:20.429Z] [BOT] 💾 Saved posted_jobs.json: 571 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:21.931Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Talent Acquisition (New York City)" @ spotify
[2026-01-30T17:36:21.932Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T17:36:22.116Z] [BOT] ✅ Posted message: 2026 Summer Internship, Talent Acquisition (New York City) @ spotify in #🤖・ai-jobs
[2026-01-30T17:36:22.116Z] [BOT] ✅ Industry: 2026 Summer Internship, Talent Acquisition (New York City) @ spotify
[2026-01-30T17:36:22.116Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Talent Acquisition (New York City) @ spotify → category channel (1 total channels)
[2026-01-30T17:36:22.116Z] [BOT] 💾 BEFORE MERGE: 572 jobs in memory (cached)
[2026-01-30T17:36:22.128Z] [BOT] ✅ Loaded V2 database: 571 jobs
💾 DISK STATE: 571 jobs on disk
[2026-01-30T17:36:22.128Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=572
[2026-01-30T17:36:22.130Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:22.130Z] [BOT] 💾 AFTER MERGE: 572 jobs (merged disk + memory)
[2026-01-30T17:36:22.130Z] [BOT] ✅ No jobs to archive (all 572 jobs within 7-day window)
[2026-01-30T17:36:22.168Z] [BOT] 💾 Saved posted_jobs.json: 572 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:23.872Z] [BOT] ✅ Posted message: 2026 Summer Internship, Talent Acquisition (New York City) @ spotify in #🗽・JID_98d4f0de
[2026-01-30T17:36:23.872Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: 2026 Summer Internship, Talent Acquisition (New York City) @ spotify → location channel (2 total channels)
[2026-01-30T17:36:23.872Z] [BOT] 💾 BEFORE MERGE: 572 jobs in memory (cached)
[2026-01-30T17:36:23.883Z] [BOT] ✅ Loaded V2 database: 572 jobs
[2026-01-30T17:36:23.883Z] [BOT] 💾 DISK STATE: 572 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=572
[2026-01-30T17:36:23.884Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Talent Acquisition (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-30T17:36:23.884Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 572 jobs (merged disk + memory)
[2026-01-30T17:36:23.885Z] [BOT] ✅ No jobs to archive (all 572 jobs within 7-day window)
[2026-01-30T17:36:23.918Z] [BOT] 💾 Saved posted_jobs.json: 572 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:25.421Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Business Strategy and Product Management - MBA (New York City)" @ spotify
[2026-01-30T17:36:25.421Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T17:36:25.677Z] [BOT] ✅ Posted message: 2026 Summer Internship, Business Strategy and Product Management - MBA (New York City) @ spotify in #🤖・ai-jobs
[2026-01-30T17:36:25.677Z] [BOT] ✅ Industry: 2026 Summer Internship, Business Strategy and Product Management - MBA (New York City) @ spotify
[2026-01-30T17:36:25.677Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Business Strategy and Product Management - MBA (New York City) @ spotify → category channel (1 total channels)
[2026-01-30T17:36:25.677Z] [BOT] 💾 BEFORE MERGE: 573 jobs in memory (cached)
[2026-01-30T17:36:25.688Z] [BOT] ✅ Loaded V2 database: 572 jobs
💾 DISK STATE: 572 jobs on disk
[2026-01-30T17:36:25.688Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=573
[2026-01-30T17:36:25.689Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:25.690Z] [BOT] 💾 AFTER MERGE: 573 jobs (merged disk + memory)
[2026-01-30T17:36:25.690Z] [BOT] ✅ No jobs to archive (all 573 jobs within 7-day window)
[2026-01-30T17:36:25.724Z] [BOT] 💾 Saved posted_jobs.json: 573 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:27.489Z] [BOT] ✅ Posted message: 2026 Summer Internship, Business Strategy and Product Management - MBA (New York City) @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T17:36:27.489Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Business Strategy and Product Management - MBA (New York City) @ spotify → location channel (2 total channels)
[2026-01-30T17:36:27.489Z] [BOT] 💾 BEFORE MERGE: 573 jobs in memory (cached)
[2026-01-30T17:36:27.500Z] [BOT] ✅ Loaded V2 database: 573 jobs
💾 DISK STATE: 573 jobs on disk
[2026-01-30T17:36:27.500Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=573
[2026-01-30T17:36:27.501Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Business Strategy and Product Management - MBA (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 573 jobs (merged disk + memory)
[2026-01-30T17:36:27.502Z] [BOT] ✅ No jobs to archive (all 573 jobs within 7-day window)
[2026-01-30T17:36:27.535Z] [BOT] 💾 Saved posted_jobs.json: 573 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:29.036Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Legal- J.D. (New York City)" @ spotify
[2026-01-30T17:36:29.036Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T17:36:29.288Z] [BOT] ✅ Posted message: 2026 Summer Internship, Legal- J.D. (New York City) @ spotify in #🤖・ai-jobs
  ✅ Industry: 2026 Summer Internship, Legal- J.D. (New York City) @ spotify
[2026-01-30T17:36:29.288Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Legal- J.D. (New York City) @ spotify → category channel (1 total channels)
[2026-01-30T17:36:29.288Z] [BOT] 💾 BEFORE MERGE: 574 jobs in memory (cached)
[2026-01-30T17:36:29.300Z] [BOT] ✅ Loaded V2 database: 573 jobs
💾 DISK STATE: 573 jobs on disk
[2026-01-30T17:36:29.300Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=574
[2026-01-30T17:36:29.301Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:29.301Z] [BOT] 💾 AFTER MERGE: 574 jobs (merged disk + memory)
[2026-01-30T17:36:29.302Z] [BOT] ✅ No jobs to archive (all 574 jobs within 7-day window)
[2026-01-30T17:36:29.335Z] [BOT] 💾 Saved posted_jobs.json: 574 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:31.009Z] [BOT] ✅ Posted message: 2026 Summer Internship, Legal- J.D. (New York City) @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T17:36:31.009Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Legal- J.D. (New York City) @ spotify → location channel (2 total channels)
[2026-01-30T17:36:31.009Z] [BOT] 💾 BEFORE MERGE: 574 jobs in memory (cached)
[2026-01-30T17:36:31.021Z] [BOT] ✅ Loaded V2 database: 574 jobs
💾 DISK STATE: 574 jobs on disk
[2026-01-30T17:36:31.021Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=574
[2026-01-30T17:36:31.022Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Legal- J.D. (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 574 jobs (merged disk + memory)
[2026-01-30T17:36:31.023Z] [BOT] ✅ No jobs to archive (all 574 jobs within 7-day window)
[2026-01-30T17:36:31.056Z] [BOT] 💾 Saved posted_jobs.json: 574 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:32.558Z] [BOT] 📍 [ROUTING] "Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming" @ ORG_fb8c4aa0 Corporation
[2026-01-30T17:36:32.558Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T17:36:32.756Z] [BOT] ✅ Posted message: Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming @ ORG_fb8c4aa0 Corporation in #🤖・ai-jobs
  ✅ Industry: Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming @ ORG_fb8c4aa0 Corporation
[2026-01-30T17:36:32.756Z] [BOT] 💾 Added channel posting: Software Engineer - C++ - Object-Oriented Design/Object-Oriented Programming @ ORG_fb8c4aa0 Corporation → category channel (1 total channels)
[2026-01-30T17:36:32.756Z] [BOT] 💾 BEFORE MERGE: 575 jobs in memory (cached)
[2026-01-30T17:36:32.767Z] [BOT] ✅ Loaded V2 database: 574 jobs
💾 DISK STATE: 574 jobs on disk
[2026-01-30T17:36:32.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=575
[2026-01-30T17:36:32.768Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 575 jobs (merged disk + memory)
[2026-01-30T17:36:32.769Z] [BOT] ✅ No jobs to archive (all 575 jobs within 7-day window)
[2026-01-30T17:36:32.802Z] [BOT] 💾 Saved posted_jobs.json: 575 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:37.304Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T17:36:37.305Z] [BOT] 📍 [ROUTING] "Head of Product, Core Experiences Platform" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T17:36:37.524Z] [BOT] ✅ Posted message: Head of Product, Core Experiences Platform @ gusto in #📊・JID_fb739488
  ✅ Industry: Head of Product, Core Experiences Platform @ gusto
[2026-01-30T17:36:37.524Z] [BOT] 💾 Added channel posting: Head of Product, Core Experiences Platform @ gusto → category channel (1 total channels)
[2026-01-30T17:36:37.524Z] [BOT] 💾 BEFORE MERGE: 576 jobs in memory (cached)
[2026-01-30T17:36:37.536Z] [BOT] ✅ Loaded V2 database: 575 jobs
💾 DISK STATE: 575 jobs on disk
[2026-01-30T17:36:37.536Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=576
[2026-01-30T17:36:37.537Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 576 jobs (merged disk + memory)
[2026-01-30T17:36:37.538Z] [BOT] ✅ No jobs to archive (all 576 jobs within 7-day window)
[2026-01-30T17:36:37.571Z] [BOT] 💾 Saved posted_jobs.json: 576 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:42.071Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T17:36:42.072Z] [BOT] 📍 [ROUTING] "Account Executive, E-Commerce " @ brex
   Category: FINANCE (matched: "finance")
[2026-01-30T17:36:42.072Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T17:36:42.471Z] [BOT] ✅ Posted message: Account Executive, E-Commerce  @ brex in #💰・finance-jobs
  ✅ Industry: Account Executive, E-Commerce  @ brex
[2026-01-30T17:36:42.472Z] [BOT] 💾 Added channel posting: Account Executive, E-Commerce  @ brex → category channel (1 total channels)
[2026-01-30T17:36:42.472Z] [BOT] 💾 BEFORE MERGE: 577 jobs in memory (cached)
[2026-01-30T17:36:42.483Z] [BOT] ✅ Loaded V2 database: 576 jobs
💾 DISK STATE: 576 jobs on disk
[2026-01-30T17:36:42.483Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=577
[2026-01-30T17:36:42.484Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:42.484Z] [BOT] 💾 AFTER MERGE: 577 jobs (merged disk + memory)
[2026-01-30T17:36:42.485Z] [BOT] ✅ No jobs to archive (all 577 jobs within 7-day window)
[2026-01-30T17:36:42.519Z] [BOT] 💾 Saved posted_jobs.json: 577 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:44.250Z] [BOT] ✅ Posted message: Account Executive, E-Commerce  @ brex in #🏠・JID_ead674af
[2026-01-30T17:36:44.251Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T17:36:44.251Z] [BOT] 💾 Added channel posting: Account Executive, E-Commerce  @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 577 jobs in memory (cached)
[2026-01-30T17:36:44.263Z] [BOT] ✅ Loaded V2 database: 577 jobs
💾 DISK STATE: 577 jobs on disk
[2026-01-30T17:36:44.263Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=577
[2026-01-30T17:36:44.264Z] [BOT] 🔀 Deep merged: Account Executive, E-Commerce  @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-30T17:36:44.264Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 577 jobs (merged disk + memory)
[2026-01-30T17:36:44.265Z] [BOT] ✅ No jobs to archive (all 577 jobs within 7-day window)
[2026-01-30T17:36:44.300Z] [BOT] 💾 Saved posted_jobs.json: 577 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:48.800Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T17:36:48.801Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e9ac2181..." not found, but found as SHA256 "dafd01262200dcfd"
[2026-01-30T17:36:48.801Z] [BOT] ⏭️  Skipping duplicate: JID_666357d8-associate_r25043013 (posted within 7 days)
[2026-01-30T17:36:48.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dec81da3-..." not found, but found as SHA256 "472e8fff31fc171b"
⏭️  Skipping duplicate: JID_508df824 (posted within 7 days)
[2026-01-30T17:36:48.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5f6a2f2d..." not found, but found as SHA256 "37b0908e611effa8"
⏭️  Skipping duplicate: JID_aac31520 (posted within 7 days)
[2026-01-30T17:36:48.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a70cc84a..." not found, but found as SHA256 "83c43f83d954c4f4"
⏭️  Skipping duplicate: JID_23ce7f18 (posted within 7 days)
[2026-01-30T17:36:48.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6c7ffebd..." not found, but found as SHA256 "6c5ae36ad940289b"
⏭️  Skipping duplicate: JID_a46ae529 (posted within 7 days)
[2026-01-30T17:36:48.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cbbb1d59..." not found, but found as SHA256 "b10ec06361f987e2"
[2026-01-30T17:36:48.802Z] [BOT] ⏭️  Skipping duplicate: JID_87314284 (posted within 7 days)
[2026-01-30T17:36:48.802Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_320be629..." not found, but found as SHA256 "4f6bf38a3c85ea44"
⏭️  Skipping duplicate: JID_cb497d96-_2633855 (posted within 7 days)
[2026-01-30T17:36:48.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bfe0e508..." not found, but found as SHA256 "fbcfcce4475bc6b8"
⏭️  Skipping duplicate: JID_1cb702e0 (posted within 7 days)
[2026-01-30T17:36:48.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b842b1fb..." not found, but found as SHA256 "0a31b9b8dc371231"
⏭️  Skipping duplicate: JID_e4bda645 (posted within 7 days)
[2026-01-30T17:36:48.804Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_08bb9387..." not found, but found as SHA256 "62483dde68f23ef4"
⏭️  Skipping duplicate: JID_08bb9387 (posted within 7 days)
[2026-01-30T17:36:48.909Z] [BOT] ✅ Loaded pending queue: 2922 total (2336 pending, 48 enriched, 538 posted)
[2026-01-30T17:36:49.093Z] [BOT] ✅ Saved pending queue: 2922 total (2336 pending, 38 enriched, 548 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T17:36:49.093Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T17:36:49.177Z] [BOT] 📂 Loaded 10629 existing routing entries
[2026-01-30T17:36:49.316Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T17:36:49.317Z] [BOT] New entries: 10
   Total entries: 10639
   Timestamp: 2026-01-30T17:36:49.273Z
[2026-01-30T17:36:49.317Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 31
[2026-01-30T17:36:49.317Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 16
[2026-01-30T17:36:49.317Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T17:36:49.318Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 6
   Top channels:
     1. #🤖・ai-jobs: 5 posts
[2026-01-30T17:36:49.318Z] [BOT] 2. #💻・tech-jobs: 3 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #🏠・JID_ead674af: 2 posts
     5. #📊・JID_fb739488: 1 posts
[2026-01-30T17:36:49.318Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 577 jobs in memory (cached)
[2026-01-30T17:36:49.330Z] [BOT] ✅ Loaded V2 database: 577 jobs
[2026-01-30T17:36:49.330Z] [BOT] 💾 DISK STATE: 577 jobs on disk
[2026-01-30T17:36:49.331Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=577
[2026-01-30T17:36:49.332Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:36:49.332Z] [BOT] 💾 AFTER MERGE: 577 jobs (merged disk + memory)
[2026-01-30T17:36:49.332Z] [BOT] ✅ No jobs to archive (all 577 jobs within 7-day window)
[2026-01-30T17:36:49.367Z] [BOT] 💾 Saved posted_jobs.json: 577 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:36:49.367Z] [BOT] ✅ Database saved successfully
[2026-01-30T17:36:51.395Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2667) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*