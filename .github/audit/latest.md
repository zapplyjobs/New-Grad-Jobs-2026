# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T10:03:24.602Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T10:02:47.638Z] ========================================
[2026-01-31T10:02:47.640Z] Discord Bot Execution Log
[2026-01-31T10:02:47.640Z] Environment: GitHub Actions
[2026-01-31T10:02:47.640Z] Node Version: v20.20.0
[2026-01-31T10:02:47.640Z] ========================================
[2026-01-31T10:02:47.640Z] Environment Variables Check:
[2026-01-31T10:02:47.640Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T10:02:47.640Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.640Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T10:02:47.641Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T10:02:47.641Z] 
Multi-Channel Configuration:
[2026-01-31T10:02:47.641Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T10:02:47.641Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T10:02:47.642Z] 
Data Files Check:
[2026-01-31T10:02:47.642Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T10:02:47.674Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6415015 bytes)
[2026-01-31T10:02:47.674Z] 
========================================
[2026-01-31T10:02:47.674Z] Starting Enhanced Discord Bot...
[2026-01-31T10:02:47.674Z] ========================================
[2026-01-31T10:02:48.234Z] [BOT] ✅ Loaded V2 database: 1028 jobs
[2026-01-31T10:02:48.734Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T10:02:48.734Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T10:02:48.734Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T10:02:48.849Z] [BOT] ✅ Loaded pending queue: 2954 total (1905 pending, 50 enriched, 999 posted)
[2026-01-31T10:02:48.849Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T10:02:48.850Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:02:48.850Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T10:02:48.851Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T10:02:48.851Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T10:02:48.851Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T10:02:48.851Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T10:02:48.851Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T10:02:48.852Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T10:02:48.852Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T10:02:48.852Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T10:02:48.852Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T10:02:48.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T10:02:48.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T10:02:48.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T10:02:48.853Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T10:02:48.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T10:02:48.854Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T10:02:48.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-31T10:02:48.854Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T10:02:48.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-31T10:02:48.854Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T10:02:48.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T10:02:48.854Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T10:02:48.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-31T10:02:48.855Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T10:02:48.855Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T10:02:48.855Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T10:02:48.862Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T10:02:48.862Z] [BOT] 🚫 Skipping blacklisted job: Senior AML Investigations Trainer at coinbase
[2026-01-31T10:02:48.862Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Research Associate - Physics at Wash U
[2026-01-31T10:02:48.862Z] [BOT] 🚫 Skipping blacklisted job:  Accounting Manager, Legal Entity Controllership at brex
🚫 Skipping blacklisted job: Accounting Manager, Legal Entity Controllership at brex
[2026-01-31T10:02:48.862Z] [BOT] 🚫 Skipping blacklisted job: Accounting Manager, Legal Entity Controllership at brex
[2026-01-31T10:02:48.971Z] [BOT] ✅ Loaded pending queue: 2954 total (1905 pending, 50 enriched, 999 posted)
[2026-01-31T10:02:49.159Z] [BOT] ✅ Saved pending queue: 2949 total (1905 pending, 45 enriched, 999 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
[2026-01-31T10:02:49.160Z] [BOT] 📋 After blacklist filter: 31 jobs (5 blacklisted)
[2026-01-31T10:02:49.160Z] [BOT] 📋 After data quality filter: 31 jobs (0 invalid)
[2026-01-31T10:02:49.161Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-31T10:02:49.161Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer I, Frontend @ Twitch: san francisco, irvine
[2026-01-31T10:02:49.161Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T10:02:49.163Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T10:02:49.164Z] [BOT] 📍 [ROUTING] "Graduate Data Scientist" @ ORG_742553d6 Entertainment
[2026-01-31T10:02:49.164Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T10:02:49.182Z] [BOT ERROR] (node:3672) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T10:02:49.483Z] [BOT] ✅ Posted message: Graduate Data Scientist @ ORG_742553d6 Entertainment in #📊・JID_fb739488
[2026-01-31T10:02:49.483Z] [BOT] ✅ Industry: Graduate Data Scientist @ ORG_742553d6 Entertainment
[2026-01-31T10:02:49.484Z] [BOT] 💾 Added channel posting: Graduate Data Scientist @ ORG_742553d6 Entertainment → category channel (1 total channels)
[2026-01-31T10:02:49.484Z] [BOT] 💾 BEFORE MERGE: 1029 jobs in memory (cached)
[2026-01-31T10:02:49.506Z] [BOT] ✅ Loaded V2 database: 1028 jobs
💾 DISK STATE: 1028 jobs on disk
[2026-01-31T10:02:49.506Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1029
[2026-01-31T10:02:49.509Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:02:49.509Z] [BOT] 💾 AFTER MERGE: 1029 jobs (merged disk + memory)
[2026-01-31T10:02:49.509Z] [BOT] ✅ No jobs to archive (all 1029 jobs within 7-day window)
[2026-01-31T10:02:49.576Z] [BOT] 💾 Saved posted_jobs.json: 1029 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:02:54.080Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-31T10:02:54.081Z] [BOT] 📍 [ROUTING] "AI/Machine Learning Engineer" @ ORG_f128ceac
   Category: AI (matched: "machine learning")
[2026-01-31T10:02:54.081Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T10:02:54.383Z] [BOT] ✅ Posted message: AI/Machine Learning Engineer @ ORG_f128ceac in #🤖・ai-jobs
[2026-01-31T10:02:54.383Z] [BOT] ✅ Industry: AI/Machine Learning Engineer @ ORG_f128ceac
[2026-01-31T10:02:54.383Z] [BOT] 💾 Added channel posting: AI/Machine Learning Engineer @ ORG_f128ceac → category channel (1 total channels)
[2026-01-31T10:02:54.383Z] [BOT] 💾 BEFORE MERGE: 1030 jobs in memory (cached)
[2026-01-31T10:02:54.404Z] [BOT] ✅ Loaded V2 database: 1029 jobs
💾 DISK STATE: 1029 jobs on disk
[2026-01-31T10:02:54.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1030
[2026-01-31T10:02:54.406Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:02:54.406Z] [BOT] 💾 AFTER MERGE: 1030 jobs (merged disk + memory)
[2026-01-31T10:02:54.407Z] [BOT] ✅ No jobs to archive (all 1030 jobs within 7-day window)
[2026-01-31T10:02:54.470Z] [BOT] 💾 Saved posted_jobs.json: 1030 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:02:55.973Z] [BOT] 📍 [ROUTING] "GM, AI Foundation" @ spotify
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:02:55.973Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T10:02:56.251Z] [BOT] ✅ Posted message: GM, AI Foundation @ spotify in #🤖・ai-jobs
[2026-01-31T10:02:56.251Z] [BOT] ✅ Industry: GM, AI Foundation @ spotify
[2026-01-31T10:02:56.251Z] [BOT] 💾 Added channel posting: GM, AI Foundation @ spotify → category channel (1 total channels)
[2026-01-31T10:02:56.251Z] [BOT] 💾 BEFORE MERGE: 1031 jobs in memory (cached)
[2026-01-31T10:02:56.272Z] [BOT] ✅ Loaded V2 database: 1030 jobs
💾 DISK STATE: 1030 jobs on disk
[2026-01-31T10:02:56.272Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1031
[2026-01-31T10:02:56.274Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:02:56.274Z] [BOT] 💾 AFTER MERGE: 1031 jobs (merged disk + memory)
[2026-01-31T10:02:56.275Z] [BOT] ✅ No jobs to archive (all 1031 jobs within 7-day window)
[2026-01-31T10:02:56.338Z] [BOT] 💾 Saved posted_jobs.json: 1031 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:02:58.106Z] [BOT] ✅ Posted message: GM, AI Foundation @ spotify in #🗽・JID_98d4f0de
[2026-01-31T10:02:58.106Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:02:58.106Z] [BOT] 💾 Added channel posting: GM, AI Foundation @ spotify → location channel (2 total channels)
[2026-01-31T10:02:58.106Z] [BOT] 💾 BEFORE MERGE: 1031 jobs in memory (cached)
[2026-01-31T10:02:58.125Z] [BOT] ✅ Loaded V2 database: 1031 jobs
💾 DISK STATE: 1031 jobs on disk
[2026-01-31T10:02:58.126Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1031
[2026-01-31T10:02:58.128Z] [BOT] 🔀 Deep merged: GM, AI Foundation @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-31T10:02:58.128Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1031 jobs (merged disk + memory)
[2026-01-31T10:02:58.129Z] [BOT] ✅ No jobs to archive (all 1031 jobs within 7-day window)
[2026-01-31T10:02:58.188Z] [BOT] 💾 Saved posted_jobs.json: 1031 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:02:59.690Z] [BOT] 📍 [ROUTING] "FP&A Analyst - Ads & Podcast" @ spotify
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T10:02:59.956Z] [BOT] ✅ Posted message: FP&A Analyst - Ads & Podcast @ spotify in #🤖・ai-jobs
[2026-01-31T10:02:59.956Z] [BOT] ✅ Industry: FP&A Analyst - Ads & Podcast @ spotify
[2026-01-31T10:02:59.957Z] [BOT] 💾 Added channel posting: FP&A Analyst - Ads & Podcast @ spotify → category channel (1 total channels)
[2026-01-31T10:02:59.957Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory (cached)
[2026-01-31T10:02:59.977Z] [BOT] ✅ Loaded V2 database: 1031 jobs
💾 DISK STATE: 1031 jobs on disk
[2026-01-31T10:02:59.977Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1032
[2026-01-31T10:02:59.980Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:02:59.980Z] [BOT] 💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-31T10:02:59.980Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-31T10:03:00.048Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:01.799Z] [BOT] ✅ Posted message: FP&A Analyst - Ads & Podcast @ spotify in #🗽・JID_98d4f0de
[2026-01-31T10:03:01.799Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T10:03:01.799Z] [BOT] 💾 Added channel posting: FP&A Analyst - Ads & Podcast @ spotify → location channel (2 total channels)
[2026-01-31T10:03:01.800Z] [BOT] 💾 BEFORE MERGE: 1032 jobs in memory (cached)
[2026-01-31T10:03:01.818Z] [BOT] ✅ Loaded V2 database: 1032 jobs
💾 DISK STATE: 1032 jobs on disk
[2026-01-31T10:03:01.819Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1032
[2026-01-31T10:03:01.821Z] [BOT] 🔀 Deep merged: FP&A Analyst - Ads & Podcast @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-31T10:03:01.821Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1032 jobs (merged disk + memory)
[2026-01-31T10:03:01.821Z] [BOT] ✅ No jobs to archive (all 1032 jobs within 7-day window)
[2026-01-31T10:03:01.881Z] [BOT] 💾 Saved posted_jobs.json: 1032 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:06.384Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-31T10:03:06.385Z] [BOT] 📍 [ROUTING] "Quantum Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-01-31T10:03:06.385Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:03:06.663Z] [BOT] ✅ Posted message: Quantum Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-31T10:03:06.663Z] [BOT] ✅ Industry: Quantum Software Engineer @ ORG_c7bac469
[2026-01-31T10:03:06.664Z] [BOT] 💾 Added channel posting: Quantum Software Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-31T10:03:06.664Z] [BOT] 💾 BEFORE MERGE: 1033 jobs in memory (cached)
[2026-01-31T10:03:06.685Z] [BOT] ✅ Loaded V2 database: 1032 jobs
💾 DISK STATE: 1032 jobs on disk
[2026-01-31T10:03:06.685Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1033
[2026-01-31T10:03:06.687Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1033 jobs (merged disk + memory)
[2026-01-31T10:03:06.687Z] [BOT] ✅ No jobs to archive (all 1033 jobs within 7-day window)
[2026-01-31T10:03:06.756Z] [BOT] 💾 Saved posted_jobs.json: 1033 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:08.257Z] [BOT] 📍 [ROUTING] "Junior Full Stack Developer" @ ORG_2b03a7ca
[2026-01-31T10:03:08.257Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:03:08.600Z] [BOT] ✅ Posted message: Junior Full Stack Developer @ ORG_2b03a7ca in #💻・tech-jobs
[2026-01-31T10:03:08.601Z] [BOT] ✅ Industry: Junior Full Stack Developer @ ORG_2b03a7ca
[2026-01-31T10:03:08.601Z] [BOT] 💾 Added channel posting: Junior Full Stack Developer @ ORG_2b03a7ca → category channel (1 total channels)
[2026-01-31T10:03:08.601Z] [BOT] 💾 BEFORE MERGE: 1034 jobs in memory (cached)
[2026-01-31T10:03:08.620Z] [BOT] ✅ Loaded V2 database: 1033 jobs
💾 DISK STATE: 1033 jobs on disk
[2026-01-31T10:03:08.621Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1034
[2026-01-31T10:03:08.623Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1034 jobs (merged disk + memory)
[2026-01-31T10:03:08.623Z] [BOT] ✅ No jobs to archive (all 1034 jobs within 7-day window)
[2026-01-31T10:03:08.684Z] [BOT] 💾 Saved posted_jobs.json: 1034 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:10.186Z] [BOT] 📍 [ROUTING] "Full-Stack Developer, Junior" @ ORG_39417f32 Allen
[2026-01-31T10:03:10.187Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:03:10.633Z] [BOT] ✅ Posted message: Full-Stack Developer, Junior @ ORG_39417f32 Allen in #💻・tech-jobs
  ✅ Industry: Full-Stack Developer, Junior @ ORG_39417f32 Allen
[2026-01-31T10:03:10.633Z] [BOT] 💾 Added channel posting: Full-Stack Developer, Junior @ ORG_39417f32 Allen → category channel (1 total channels)
[2026-01-31T10:03:10.633Z] [BOT] 💾 BEFORE MERGE: 1035 jobs in memory (cached)
[2026-01-31T10:03:10.653Z] [BOT] ✅ Loaded V2 database: 1034 jobs
💾 DISK STATE: 1034 jobs on disk
[2026-01-31T10:03:10.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1035
[2026-01-31T10:03:10.655Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:03:10.655Z] [BOT] 💾 AFTER MERGE: 1035 jobs (merged disk + memory)
[2026-01-31T10:03:10.655Z] [BOT] ✅ No jobs to archive (all 1035 jobs within 7-day window)
[2026-01-31T10:03:10.716Z] [BOT] 💾 Saved posted_jobs.json: 1035 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:12.218Z] [BOT] 📍 [ROUTING] "Korean Bilingual Software Test Engineer (Entry Level)" @ ORG_d5c1b124 Solutions
[2026-01-31T10:03:12.219Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:03:12.409Z] [BOT] ✅ Posted message: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions in #💻・tech-jobs
[2026-01-31T10:03:12.410Z] [BOT] ✅ Industry: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions
[2026-01-31T10:03:12.410Z] [BOT] 💾 Added channel posting: Korean Bilingual Software Test Engineer (Entry Level) @ ORG_d5c1b124 Solutions → category channel (1 total channels)
[2026-01-31T10:03:12.410Z] [BOT] 💾 BEFORE MERGE: 1036 jobs in memory (cached)
[2026-01-31T10:03:12.430Z] [BOT] ✅ Loaded V2 database: 1035 jobs
💾 DISK STATE: 1035 jobs on disk
[2026-01-31T10:03:12.430Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1036
[2026-01-31T10:03:12.432Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1036 jobs (merged disk + memory)
[2026-01-31T10:03:12.433Z] [BOT] ✅ No jobs to archive (all 1036 jobs within 7-day window)
[2026-01-31T10:03:12.493Z] [BOT] 💾 Saved posted_jobs.json: 1036 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:13.996Z] [BOT] 📍 [ROUTING] "Associate Software Quality Engineer I" @ ORG_df6ef51e
[2026-01-31T10:03:13.996Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:03:14.195Z] [BOT] ✅ Posted message: Associate Software Quality Engineer I @ ORG_df6ef51e in #💻・tech-jobs
  ✅ Industry: Associate Software Quality Engineer I @ ORG_df6ef51e
[2026-01-31T10:03:14.196Z] [BOT] 💾 Added channel posting: Associate Software Quality Engineer I @ ORG_df6ef51e → category channel (1 total channels)
[2026-01-31T10:03:14.196Z] [BOT] 💾 BEFORE MERGE: 1037 jobs in memory (cached)
[2026-01-31T10:03:14.214Z] [BOT] ✅ Loaded V2 database: 1036 jobs
💾 DISK STATE: 1036 jobs on disk
[2026-01-31T10:03:14.214Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1037
[2026-01-31T10:03:14.216Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:03:14.216Z] [BOT] 💾 AFTER MERGE: 1037 jobs (merged disk + memory)
[2026-01-31T10:03:14.217Z] [BOT] ✅ No jobs to archive (all 1037 jobs within 7-day window)
[2026-01-31T10:03:14.278Z] [BOT] 💾 Saved posted_jobs.json: 1037 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:15.780Z] [BOT] 📍 [ROUTING] "Associate Cloud Engineer" @ ORG_591935b1 Storage
[2026-01-31T10:03:15.780Z] [BOT] Category: TECH (matched: "DevOps/SRE")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T10:03:16.041Z] [BOT] ✅ Posted message: Associate Cloud Engineer @ ORG_591935b1 Storage in #💻・tech-jobs
  ✅ Industry: Associate Cloud Engineer @ ORG_591935b1 Storage
[2026-01-31T10:03:16.042Z] [BOT] 💾 Added channel posting: Associate Cloud Engineer @ ORG_591935b1 Storage → category channel (1 total channels)
[2026-01-31T10:03:16.042Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory (cached)
[2026-01-31T10:03:16.061Z] [BOT] ✅ Loaded V2 database: 1037 jobs
💾 DISK STATE: 1037 jobs on disk
[2026-01-31T10:03:16.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1038
[2026-01-31T10:03:16.063Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-31T10:03:16.064Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-31T10:03:16.124Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:20.626Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T10:03:20.627Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_104bd934..." not found, but found as SHA256 "49cf1367de7fbd98"
[2026-01-31T10:03:20.627Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-73987 (posted within 7 days)
[2026-01-31T10:03:20.628Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfb5978b..." not found, but found as SHA256 "675b45fe97aa1b31"
[2026-01-31T10:03:20.628Z] [BOT] ⏭️  Skipping duplicate: JID_5c643244 (posted within 7 days)
[2026-01-31T10:03:20.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfdafb45-..." not found, but found as SHA256 "f3d13eb74f5e0862"
⏭️  Skipping duplicate: JID_3cc30985 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_20fcb550..." not found, but found as SHA256 "8d9e64262f870c83"
⏭️  Skipping duplicate: JID_a9cdfa5a (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9a88bcc4..." not found, but found as SHA256 "5c60f6f6cfd77da3"
⏭️  Skipping duplicate: JID_66641ac6 (posted within 7 days)
[2026-01-31T10:03:20.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a244b89-bah_jobs..." not found, but found as SHA256 "e8df391c550019c8"
⏭️  Skipping duplicate: JID_3a244b89-bah_jobs-JID_eae44490-junior_r0230620 (posted within 7 days)
[2026-01-31T10:03:20.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_510eef57..." not found, but found as SHA256 "05b2925d22e0ff8d"
[2026-01-31T10:03:20.629Z] [BOT] ⏭️  Skipping duplicate: JID_9fba6108-ao7167525_jr101482 (posted within 7 days)
[2026-01-31T10:03:20.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b9a4dc2c..." not found, but found as SHA256 "dc3711f8fcf3d3fb"
⏭️  Skipping duplicate: JID_9573866e-i_r8298-1 (posted within 7 days)
[2026-01-31T10:03:20.629Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fb715f05..." not found, but found as SHA256 "fae2eca3f8b53ce1"
⏭️  Skipping duplicate: JID_a4d142a8 (posted within 7 days)
[2026-01-31T10:03:20.630Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26c87e56..." not found, but found as SHA256 "97baf100d2b83f01"
[2026-01-31T10:03:20.630Z] [BOT] ⏭️  Skipping duplicate: JID_bceba446 (posted within 7 days)
[2026-01-31T10:03:20.740Z] [BOT] ✅ Loaded pending queue: 2949 total (1905 pending, 45 enriched, 999 posted)
[2026-01-31T10:03:20.929Z] [BOT] ✅ Saved pending queue: 2949 total (1905 pending, 35 enriched, 1009 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T10:03:20.930Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T10:03:21.015Z] [BOT] 📂 Loaded 11090 existing routing entries
[2026-01-31T10:03:21.161Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T10:03:21.161Z] [BOT] New entries: 10
   Total entries: 11100
   Timestamp: 2026-01-31T10:03:21.099Z
[2026-01-31T10:03:21.162Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T10:03:21.162Z] [BOT] Total attempts: 31
   Successful: 12
   Failed: 0
   Skipped: 19
[2026-01-31T10:03:21.163Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-31T10:03:21.163Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-31T10:03:21.163Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T10:03:21.163Z] [BOT] 💾 BEFORE MERGE: 1038 jobs in memory (cached)
[2026-01-31T10:03:21.182Z] [BOT] ✅ Loaded V2 database: 1038 jobs
💾 DISK STATE: 1038 jobs on disk
[2026-01-31T10:03:21.182Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1038
[2026-01-31T10:03:21.184Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T10:03:21.184Z] [BOT] 💾 AFTER MERGE: 1038 jobs (merged disk + memory)
[2026-01-31T10:03:21.185Z] [BOT] ✅ No jobs to archive (all 1038 jobs within 7-day window)
[2026-01-31T10:03:21.248Z] [BOT] 💾 Saved posted_jobs.json: 1038 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T10:03:21.249Z] [BOT] ✅ Database saved successfully
[2026-01-31T10:03:23.280Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3672) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*