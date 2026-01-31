# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T04:26:41.691Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T04:26:00.208Z] ========================================
[2026-01-31T04:26:00.210Z] Discord Bot Execution Log
[2026-01-31T04:26:00.210Z] Environment: GitHub Actions
[2026-01-31T04:26:00.210Z] Node Version: v20.20.0
[2026-01-31T04:26:00.210Z] ========================================
[2026-01-31T04:26:00.210Z] Environment Variables Check:
[2026-01-31T04:26:00.210Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T04:26:00.210Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.210Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T04:26:00.210Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T04:26:00.210Z] 
Multi-Channel Configuration:
[2026-01-31T04:26:00.210Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T04:26:00.211Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T04:26:00.211Z] 
Data Files Check:
[2026-01-31T04:26:00.212Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T04:26:00.241Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 5550024 bytes)
[2026-01-31T04:26:00.241Z] 
========================================
[2026-01-31T04:26:00.241Z] Starting Enhanced Discord Bot...
[2026-01-31T04:26:00.241Z] ========================================
[2026-01-31T04:26:00.791Z] [BOT] ✅ Loaded V2 database: 848 jobs
[2026-01-31T04:26:01.348Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T04:26:01.348Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T04:26:01.348Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T04:26:01.463Z] [BOT] ✅ Loaded pending queue: 2961 total (2092 pending, 50 enriched, 819 posted)
[2026-01-31T04:26:01.463Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T04:26:01.464Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T04:26:01.464Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T04:26:01.464Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T04:26:01.465Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T04:26:01.465Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T04:26:01.465Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T04:26:01.465Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T04:26:01.465Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T04:26:01.466Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T04:26:01.466Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T04:26:01.467Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T04:26:01.467Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T04:26:01.467Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T04:26:01.467Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T04:26:01.467Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T04:26:01.468Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T04:26:01.468Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T04:26:01.468Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T04:26:01.474Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T04:26:01.474Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Marketing  at figma
[2026-01-31T04:26:01.584Z] [BOT] ✅ Loaded pending queue: 2961 total (2092 pending, 50 enriched, 819 posted)
[2026-01-31T04:26:01.774Z] [BOT] ✅ Saved pending queue: 2960 total (2092 pending, 49 enriched, 819 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-31T04:26:01.775Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T04:26:01.775Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T04:26:01.776Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-31T04:26:01.776Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-31T04:26:01.776Z] [BOT] - Litigation and Risk Counsel @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T04:26:01.780Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T04:26:01.781Z] [BOT] 📍 [ROUTING] "Litigation and Risk Counsel" @ brex
[2026-01-31T04:26:01.781Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T04:26:01.799Z] [BOT ERROR] (node:3304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T04:26:02.253Z] [BOT] ✅ Posted message: Litigation and Risk Counsel @ brex in #💰・finance-jobs
[2026-01-31T04:26:02.253Z] [BOT] ✅ Industry: Litigation and Risk Counsel @ brex
[2026-01-31T04:26:02.254Z] [BOT] 💾 Added channel posting: Litigation and Risk Counsel @ brex → category channel (1 total channels)
[2026-01-31T04:26:02.254Z] [BOT] 💾 BEFORE MERGE: 849 jobs in memory (cached)
[2026-01-31T04:26:02.274Z] [BOT] ✅ Loaded V2 database: 848 jobs
💾 DISK STATE: 848 jobs on disk
[2026-01-31T04:26:02.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=849
[2026-01-31T04:26:02.277Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:02.277Z] [BOT] 💾 AFTER MERGE: 849 jobs (merged disk + memory)
[2026-01-31T04:26:02.277Z] [BOT] ✅ No jobs to archive (all 849 jobs within 7-day window)
[2026-01-31T04:26:02.349Z] [BOT] 💾 Saved posted_jobs.json: 849 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:04.027Z] [BOT] ✅ Posted message: Litigation and Risk Counsel @ brex in #🗽・JID_98d4f0de
[2026-01-31T04:26:04.027Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T04:26:04.027Z] [BOT] 💾 Added channel posting: Litigation and Risk Counsel @ brex → location channel (2 total channels)
[2026-01-31T04:26:04.027Z] [BOT] 💾 BEFORE MERGE: 849 jobs in memory (cached)
[2026-01-31T04:26:04.045Z] [BOT] ✅ Loaded V2 database: 849 jobs
💾 DISK STATE: 849 jobs on disk
[2026-01-31T04:26:04.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=849
[2026-01-31T04:26:04.047Z] [BOT] 🔀 Deep merged: Litigation and Risk Counsel @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T04:26:04.047Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 849 jobs (merged disk + memory)
[2026-01-31T04:26:04.048Z] [BOT] ✅ No jobs to archive (all 849 jobs within 7-day window)
[2026-01-31T04:26:04.103Z] [BOT] 💾 Saved posted_jobs.json: 849 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:08.604Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T04:26:08.604Z] [BOT] 📍 [ROUTING] "BI Developer" @ ORG_c7953dfe
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T04:26:08.849Z] [BOT] ✅ Posted message: BI Developer @ ORG_c7953dfe in #💻・tech-jobs
[2026-01-31T04:26:08.849Z] [BOT] ✅ Industry: BI Developer @ ORG_c7953dfe
[2026-01-31T04:26:08.850Z] [BOT] 💾 Added channel posting: BI Developer @ ORG_c7953dfe → category channel (1 total channels)
[2026-01-31T04:26:08.850Z] [BOT] 💾 BEFORE MERGE: 850 jobs in memory (cached)
[2026-01-31T04:26:08.867Z] [BOT] ✅ Loaded V2 database: 849 jobs
💾 DISK STATE: 849 jobs on disk
[2026-01-31T04:26:08.868Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=850
[2026-01-31T04:26:08.870Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:08.870Z] [BOT] 💾 AFTER MERGE: 850 jobs (merged disk + memory)
[2026-01-31T04:26:08.870Z] [BOT] ✅ No jobs to archive (all 850 jobs within 7-day window)
[2026-01-31T04:26:08.928Z] [BOT] 💾 Saved posted_jobs.json: 850 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:10.430Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
[2026-01-31T04:26:10.430Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T04:26:10.581Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-31T04:26:10.581Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-31T04:26:10.581Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_f7a2cae4 → category channel (1 total channels)
[2026-01-31T04:26:10.581Z] [BOT] 💾 BEFORE MERGE: 851 jobs in memory (cached)
[2026-01-31T04:26:10.600Z] [BOT] ✅ Loaded V2 database: 850 jobs
💾 DISK STATE: 850 jobs on disk
[2026-01-31T04:26:10.600Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=851
[2026-01-31T04:26:10.602Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:10.602Z] [BOT] 💾 AFTER MERGE: 851 jobs (merged disk + memory)
[2026-01-31T04:26:10.603Z] [BOT] ✅ No jobs to archive (all 851 jobs within 7-day window)
[2026-01-31T04:26:10.663Z] [BOT] 💾 Saved posted_jobs.json: 851 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:12.164Z] [BOT] 📍 [ROUTING] "Full-Stack Software Engineer – New Grad" @ ORG_c7607813
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T04:26:12.354Z] [BOT] ✅ Posted message: Full-Stack Software Engineer – New Grad @ ORG_c7607813 in #💻・tech-jobs
  ✅ Industry: Full-Stack Software Engineer – New Grad @ ORG_c7607813
[2026-01-31T04:26:12.355Z] [BOT] 💾 Added channel posting: Full-Stack Software Engineer – New Grad @ ORG_c7607813 → category channel (1 total channels)
[2026-01-31T04:26:12.355Z] [BOT] 💾 BEFORE MERGE: 852 jobs in memory (cached)
[2026-01-31T04:26:12.371Z] [BOT] ✅ Loaded V2 database: 851 jobs
💾 DISK STATE: 851 jobs on disk
[2026-01-31T04:26:12.372Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=852
[2026-01-31T04:26:12.374Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 852 jobs (merged disk + memory)
[2026-01-31T04:26:12.374Z] [BOT] ✅ No jobs to archive (all 852 jobs within 7-day window)
[2026-01-31T04:26:12.427Z] [BOT] 💾 Saved posted_jobs.json: 852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:14.139Z] [BOT] ✅ Posted message: Full-Stack Software Engineer – New Grad @ ORG_c7607813 in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T04:26:14.139Z] [BOT] 💾 Added channel posting: Full-Stack Software Engineer – New Grad @ ORG_c7607813 → location channel (2 total channels)
[2026-01-31T04:26:14.140Z] [BOT] 💾 BEFORE MERGE: 852 jobs in memory (cached)
[2026-01-31T04:26:14.156Z] [BOT] ✅ Loaded V2 database: 852 jobs
💾 DISK STATE: 852 jobs on disk
[2026-01-31T04:26:14.157Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=852
[2026-01-31T04:26:14.158Z] [BOT] 🔀 Deep merged: Full-Stack Software Engineer – New Grad @ ORG_c7607813 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 852 jobs (merged disk + memory)
[2026-01-31T04:26:14.159Z] [BOT] ✅ No jobs to archive (all 852 jobs within 7-day window)
[2026-01-31T04:26:14.212Z] [BOT] 💾 Saved posted_jobs.json: 852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:15.715Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
   Category: TECH (matched: "software")
[2026-01-31T04:26:15.715Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T04:26:15.970Z] [BOT] ✅ Posted message: Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-31T04:26:15.971Z] [BOT] ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2026-01-31T04:26:15.971Z] [BOT] 💾 Added channel posting: Software Developer 1 @ ORG_dc7620eb → category channel (1 total channels)
💾 BEFORE MERGE: 853 jobs in memory (cached)
[2026-01-31T04:26:15.989Z] [BOT] ✅ Loaded V2 database: 852 jobs
💾 DISK STATE: 852 jobs on disk
[2026-01-31T04:26:15.989Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=853
[2026-01-31T04:26:15.991Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:15.991Z] [BOT] 💾 AFTER MERGE: 853 jobs (merged disk + memory)
[2026-01-31T04:26:15.992Z] [BOT] ✅ No jobs to archive (all 853 jobs within 7-day window)
[2026-01-31T04:26:16.053Z] [BOT] 💾 Saved posted_jobs.json: 853 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:17.552Z] [BOT] 📍 [ROUTING] "Software Engineer II, Frontend Platform " @ brex
   Category: TECH (matched: "software")
[2026-01-31T04:26:17.553Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T04:26:17.736Z] [BOT] ✅ Posted message: Software Engineer II, Frontend Platform  @ brex in #💻・tech-jobs
  ✅ Industry: Software Engineer II, Frontend Platform  @ brex
[2026-01-31T04:26:17.736Z] [BOT] 💾 Added channel posting: Software Engineer II, Frontend Platform  @ brex → category channel (1 total channels)
[2026-01-31T04:26:17.737Z] [BOT] 💾 BEFORE MERGE: 854 jobs in memory (cached)
[2026-01-31T04:26:17.753Z] [BOT] ✅ Loaded V2 database: 853 jobs
💾 DISK STATE: 853 jobs on disk
[2026-01-31T04:26:17.754Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=854
[2026-01-31T04:26:17.756Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 854 jobs (merged disk + memory)
[2026-01-31T04:26:17.756Z] [BOT] ✅ No jobs to archive (all 854 jobs within 7-day window)
[2026-01-31T04:26:17.808Z] [BOT] 💾 Saved posted_jobs.json: 854 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:19.486Z] [BOT] ✅ Posted message: Software Engineer II, Frontend Platform  @ brex in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T04:26:19.486Z] [BOT] 💾 Added channel posting: Software Engineer II, Frontend Platform  @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 854 jobs in memory (cached)
[2026-01-31T04:26:19.504Z] [BOT] ✅ Loaded V2 database: 854 jobs
💾 DISK STATE: 854 jobs on disk
[2026-01-31T04:26:19.505Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=854
[2026-01-31T04:26:19.507Z] [BOT] 🔀 Deep merged: Software Engineer II, Frontend Platform  @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-31T04:26:19.507Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 854 jobs (merged disk + memory)
[2026-01-31T04:26:19.507Z] [BOT] ✅ No jobs to archive (all 854 jobs within 7-day window)
[2026-01-31T04:26:19.578Z] [BOT] 💾 Saved posted_jobs.json: 854 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:21.077Z] [BOT] 📍 [ROUTING] "Medical Simulation Technician" @ ORG_438a7d59 State University
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T04:26:21.577Z] [BOT] ✅ Posted message: Medical Simulation Technician @ ORG_438a7d59 State University in #💻・tech-jobs
[2026-01-31T04:26:21.578Z] [BOT] ✅ Industry: Medical Simulation Technician @ ORG_438a7d59 State University
[2026-01-31T04:26:21.578Z] [BOT] 💾 Added channel posting: Medical Simulation Technician @ ORG_438a7d59 State University → category channel (1 total channels)
💾 BEFORE MERGE: 855 jobs in memory (cached)
[2026-01-31T04:26:21.595Z] [BOT] ✅ Loaded V2 database: 854 jobs
💾 DISK STATE: 854 jobs on disk
[2026-01-31T04:26:21.595Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=855
[2026-01-31T04:26:21.597Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 855 jobs (merged disk + memory)
[2026-01-31T04:26:21.598Z] [BOT] ✅ No jobs to archive (all 855 jobs within 7-day window)
[2026-01-31T04:26:21.652Z] [BOT] 💾 Saved posted_jobs.json: 855 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:23.155Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_a731a58c
[2026-01-31T04:26:23.155Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T04:26:23.603Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_a731a58c in #💻・tech-jobs
[2026-01-31T04:26:23.603Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_a731a58c
[2026-01-31T04:26:23.604Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_a731a58c → category channel (1 total channels)
[2026-01-31T04:26:23.604Z] [BOT] 💾 BEFORE MERGE: 856 jobs in memory (cached)
[2026-01-31T04:26:23.620Z] [BOT] ✅ Loaded V2 database: 855 jobs
💾 DISK STATE: 855 jobs on disk
[2026-01-31T04:26:23.620Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=856
[2026-01-31T04:26:23.622Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:23.622Z] [BOT] 💾 AFTER MERGE: 856 jobs (merged disk + memory)
[2026-01-31T04:26:23.623Z] [BOT] ✅ No jobs to archive (all 856 jobs within 7-day window)
[2026-01-31T04:26:23.675Z] [BOT] 💾 Saved posted_jobs.json: 856 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:28.176Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-31T04:26:28.177Z] [BOT] 📍 [ROUTING] "Knowledge Engineer/Scientist - PhD" @ ORG_58b7c913 & Gamble (P&G)
[2026-01-31T04:26:28.177Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T04:26:28.503Z] [BOT] ✅ Posted message: Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G) in #🤖・ai-jobs
  ✅ Industry: Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G)
[2026-01-31T04:26:28.503Z] [BOT] 💾 Added channel posting: Knowledge Engineer/Scientist - PhD @ ORG_58b7c913 & Gamble (P&G) → category channel (1 total channels)
[2026-01-31T04:26:28.504Z] [BOT] 💾 BEFORE MERGE: 857 jobs in memory (cached)
[2026-01-31T04:26:28.520Z] [BOT] ✅ Loaded V2 database: 856 jobs
💾 DISK STATE: 856 jobs on disk
[2026-01-31T04:26:28.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=857
[2026-01-31T04:26:28.522Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:28.522Z] [BOT] 💾 AFTER MERGE: 857 jobs (merged disk + memory)
[2026-01-31T04:26:28.523Z] [BOT] ✅ No jobs to archive (all 857 jobs within 7-day window)
[2026-01-31T04:26:28.583Z] [BOT] 💾 Saved posted_jobs.json: 857 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:33.084Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T04:26:33.085Z] [BOT] 📍 [ROUTING] "Web Content Strategist" @ figma
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-31T04:26:33.085Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T04:26:33.311Z] [BOT] ✅ Posted message: Web Content Strategist @ figma in #📊・JID_fb739488
  ✅ Industry: Web Content Strategist @ figma
[2026-01-31T04:26:33.311Z] [BOT] 💾 Added channel posting: Web Content Strategist @ figma → category channel (1 total channels)
[2026-01-31T04:26:33.311Z] [BOT] 💾 BEFORE MERGE: 858 jobs in memory (cached)
[2026-01-31T04:26:33.328Z] [BOT] ✅ Loaded V2 database: 857 jobs
💾 DISK STATE: 857 jobs on disk
[2026-01-31T04:26:33.329Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=858
[2026-01-31T04:26:33.331Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:33.331Z] [BOT] 💾 AFTER MERGE: 858 jobs (merged disk + memory)
[2026-01-31T04:26:33.331Z] [BOT] ✅ No jobs to archive (all 858 jobs within 7-day window)
[2026-01-31T04:26:33.395Z] [BOT] 💾 Saved posted_jobs.json: 858 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:37.894Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T04:26:37.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8c1d0e94..." not found, but found as SHA256 "8252f547fa83505d"
[2026-01-31T04:26:37.896Z] [BOT] ⏭️  Skipping duplicate: JID_8c1d0e94 (posted within 7 days)
[2026-01-31T04:26:37.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_17d3945c..." not found, but found as SHA256 "6c9a93c732c33c70"
[2026-01-31T04:26:37.896Z] [BOT] ⏭️  Skipping duplicate: JID_17d3945c (posted within 7 days)
[2026-01-31T04:26:37.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8147c65c-amentum_..." not found, but found as SHA256 "83e464a4f78115e8"
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-engineer_r0151272 (posted within 7 days)
[2026-01-31T04:26:37.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eda18061-..." not found, but found as SHA256 "2a418ec47bcaa128"
[2026-01-31T04:26:37.896Z] [BOT] ⏭️  Skipping duplicate: JID_e13e4952-phd_r000143097 (posted within 7 days)
[2026-01-31T04:26:37.897Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ade042fd..." not found, but found as SHA256 "e5040725a1a333a4"
[2026-01-31T04:26:37.897Z] [BOT] ⏭️  Skipping duplicate: JID_5343cd50 (posted within 7 days)
[2026-01-31T04:26:37.897Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "7314afe563133f7e"
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-319271 (posted within 7 days)
[2026-01-31T04:26:37.897Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3f9ff301..." not found, but found as SHA256 "93a9ac54665ad7f2"
[2026-01-31T04:26:37.897Z] [BOT] ⏭️  Skipping duplicate: JID_3f9ff301 (posted within 7 days)
[2026-01-31T04:26:37.897Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dbc4c577..." not found, but found as SHA256 "279976a6caf6482b"
⏭️  Skipping duplicate: JID_f7d9cbb1 (posted within 7 days)
[2026-01-31T04:26:37.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ca74aa64..." not found, but found as SHA256 "6ec6bd926c7efafa"
⏭️  Skipping duplicate: JID_6962ce4b-specialist_r142572 (posted within 7 days)
[2026-01-31T04:26:37.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea70fec5..." not found, but found as SHA256 "4b08083eb14a40dc"
[2026-01-31T04:26:37.898Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-31T04:26:38.014Z] [BOT] ✅ Loaded pending queue: 2960 total (2092 pending, 49 enriched, 819 posted)
[2026-01-31T04:26:38.203Z] [BOT] ✅ Saved pending queue: 2960 total (2092 pending, 39 enriched, 829 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T04:26:38.203Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T04:26:38.290Z] [BOT] 📂 Loaded 10910 existing routing entries
[2026-01-31T04:26:38.419Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10920
[2026-01-31T04:26:38.419Z] [BOT] Timestamp: 2026-01-31T04:26:38.374Z
[2026-01-31T04:26:38.420Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T04:26:38.420Z] [BOT] Total attempts: 28
   Successful: 13
   Failed: 0
   Skipped: 15
[2026-01-31T04:26:38.420Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T04:26:38.420Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🗽・JID_98d4f0de: 2 posts
     3. #💰・finance-jobs: 1 posts
     4. #🏠・JID_ead674af: 1 posts
     5. #🤖・ai-jobs: 1 posts
[2026-01-31T04:26:38.421Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 858 jobs in memory (cached)
[2026-01-31T04:26:38.458Z] [BOT] ✅ Loaded V2 database: 858 jobs
💾 DISK STATE: 858 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=858
[2026-01-31T04:26:38.458Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T04:26:38.459Z] [BOT] 💾 AFTER MERGE: 858 jobs (merged disk + memory)
[2026-01-31T04:26:38.459Z] [BOT] ✅ No jobs to archive (all 858 jobs within 7-day window)
[2026-01-31T04:26:38.513Z] [BOT] 💾 Saved posted_jobs.json: 858 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T04:26:38.513Z] [BOT] ✅ Database saved successfully
[2026-01-31T04:26:40.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*