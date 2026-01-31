# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T12:54:35.606Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T12:54:01.280Z] ========================================
[2026-01-31T12:54:01.282Z] Discord Bot Execution Log
[2026-01-31T12:54:01.282Z] Environment: GitHub Actions
[2026-01-31T12:54:01.282Z] Node Version: v20.20.0
[2026-01-31T12:54:01.282Z] ========================================
[2026-01-31T12:54:01.282Z] Environment Variables Check:
[2026-01-31T12:54:01.282Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T12:54:01.282Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.282Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T12:54:01.283Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T12:54:01.283Z] 
Multi-Channel Configuration:
[2026-01-31T12:54:01.283Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T12:54:01.283Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T12:54:01.284Z] 
Data Files Check:
[2026-01-31T12:54:01.284Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T12:54:01.318Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 7082546 bytes)
[2026-01-31T12:54:01.318Z] 
========================================
[2026-01-31T12:54:01.318Z] Starting Enhanced Discord Bot...
[2026-01-31T12:54:01.318Z] ========================================
[2026-01-31T12:54:01.871Z] [BOT] ✅ Loaded V2 database: 1136 jobs
[2026-01-31T12:54:02.519Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T12:54:02.520Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T12:54:02.520Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T12:54:02.635Z] [BOT] ✅ Loaded pending queue: 2951 total (1794 pending, 50 enriched, 1107 posted)
[2026-01-31T12:54:02.636Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T12:54:02.636Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T12:54:02.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T12:54:02.637Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T12:54:02.637Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T12:54:02.638Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T12:54:02.638Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T12:54:02.638Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T12:54:02.638Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T12:54:02.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T12:54:02.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T12:54:02.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T12:54:02.639Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T12:54:02.640Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T12:54:02.640Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T12:54:02.640Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T12:54:02.640Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T12:54:02.640Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T12:54:02.640Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T12:54:02.641Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T12:54:02.641Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T12:54:02.641Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T12:54:02.649Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9c6bf106..." not found, but found as SHA256 "2d7774b91bcf8821"
[2026-01-31T12:54:02.649Z] [BOT] ⏭️  Skipping duplicate: JID_233080b1 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Data Integration at Strata Decision Technology
[2026-01-31T12:54:02.650Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa2f4b44..." not found, but found as SHA256 "d9dcadbd1806b987"
⏭️  Skipping duplicate: JID_eba80728-2026_25920581 (posted within 7 days)
⏭️ Skipping already posted: Technology - Application Development at Citi
[2026-01-31T12:54:02.650Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "39b0f6bb80eda677"
[2026-01-31T12:54:02.650Z] [BOT] ⏭️  Skipping duplicate: JID_f6d7bbee-2026_jr2008990 (posted within 7 days)
⏭️ Skipping already posted: Developer Technology Engineer – New College Grad - Public Sector at NVIDIA
📬 Found 33 new jobs (17 already posted)...
[2026-01-31T12:54:02.650Z] [BOT] 🚫 Skipping blacklisted job: Software Developer - Leadership Development Program - Uniondale at ION Group
[2026-01-31T12:54:02.650Z] [BOT] 🚫 Skipping blacklisted job: Manager, Software Engineering - Billing at figma
🚫 Skipping blacklisted job: Postdoctoral Appointee at Argonne National Laboratory
[2026-01-31T12:54:02.755Z] [BOT] ✅ Loaded pending queue: 2951 total (1794 pending, 50 enriched, 1107 posted)
[2026-01-31T12:54:02.957Z] [BOT] ✅ Saved pending queue: 2948 total (1794 pending, 47 enriched, 1107 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 30 jobs (3 blacklisted)
[2026-01-31T12:54:02.957Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-31T12:54:02.958Z] [BOT] 📋 After multi-location grouping: 30 unique jobs to post
[2026-01-31T12:54:02.958Z] [BOT] ⏸️ Limiting to 10 jobs this run, 23 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T12:54:02.961Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-31T12:54:02.962Z] [BOT] 📍 [ROUTING] "Appian Application Developer" @ ORG_36b7cbc3
[2026-01-31T12:54:02.962Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:54:02.980Z] [BOT ERROR] (node:2956) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T12:54:03.224Z] [BOT] ✅ Posted message: Appian Application Developer @ ORG_36b7cbc3 in #💻・tech-jobs
[2026-01-31T12:54:03.224Z] [BOT] ✅ Industry: Appian Application Developer @ ORG_36b7cbc3
[2026-01-31T12:54:03.225Z] [BOT] 💾 Added channel posting: Appian Application Developer @ ORG_36b7cbc3 → category channel (1 total channels)
[2026-01-31T12:54:03.225Z] [BOT] 💾 BEFORE MERGE: 1137 jobs in memory (cached)
[2026-01-31T12:54:03.251Z] [BOT] ✅ Loaded V2 database: 1136 jobs
💾 DISK STATE: 1136 jobs on disk
[2026-01-31T12:54:03.251Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1137
[2026-01-31T12:54:03.254Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:03.255Z] [BOT] 💾 AFTER MERGE: 1137 jobs (merged disk + memory)
[2026-01-31T12:54:03.255Z] [BOT] ✅ No jobs to archive (all 1137 jobs within 7-day window)
[2026-01-31T12:54:03.328Z] [BOT] 💾 Saved posted_jobs.json: 1137 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:05.020Z] [BOT] ✅ Posted message: Appian Application Developer @ ORG_36b7cbc3 in #🗽・JID_98d4f0de
[2026-01-31T12:54:05.020Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T12:54:05.021Z] [BOT] 💾 Added channel posting: Appian Application Developer @ ORG_36b7cbc3 → location channel (2 total channels)
[2026-01-31T12:54:05.021Z] [BOT] 💾 BEFORE MERGE: 1137 jobs in memory (cached)
[2026-01-31T12:54:05.041Z] [BOT] ✅ Loaded V2 database: 1137 jobs
💾 DISK STATE: 1137 jobs on disk
[2026-01-31T12:54:05.041Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1137
[2026-01-31T12:54:05.044Z] [BOT] 🔀 Deep merged: Appian Application Developer @ ORG_36b7cbc3 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T12:54:05.044Z] [BOT] 💾 AFTER MERGE: 1137 jobs (merged disk + memory)
[2026-01-31T12:54:05.045Z] [BOT] ✅ No jobs to archive (all 1137 jobs within 7-day window)
[2026-01-31T12:54:05.111Z] [BOT] 💾 Saved posted_jobs.json: 1137 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:06.612Z] [BOT] 📍 [ROUTING] "Software Engineer - Engineering Productivity - Infotainment Platform" @ ORG_0555fb46
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:54:06.745Z] [BOT] ✅ Posted message: Software Engineer - Engineering Productivity - Infotainment Platform @ ORG_0555fb46 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Engineering Productivity - Infotainment Platform @ ORG_0555fb46
[2026-01-31T12:54:06.746Z] [BOT] 💾 Added channel posting: Software Engineer - Engineering Productivity - Infotainment Platform @ ORG_0555fb46 → category channel (1 total channels)
[2026-01-31T12:54:06.746Z] [BOT] 💾 BEFORE MERGE: 1138 jobs in memory (cached)
[2026-01-31T12:54:06.767Z] [BOT] ✅ Loaded V2 database: 1137 jobs
💾 DISK STATE: 1137 jobs on disk
[2026-01-31T12:54:06.767Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1138
[2026-01-31T12:54:06.770Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:06.770Z] [BOT] 💾 AFTER MERGE: 1138 jobs (merged disk + memory)
[2026-01-31T12:54:06.771Z] [BOT] ✅ No jobs to archive (all 1138 jobs within 7-day window)
[2026-01-31T12:54:06.839Z] [BOT] 💾 Saved posted_jobs.json: 1138 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:08.340Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-01-31T12:54:08.340Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:54:08.513Z] [BOT] ✅ Posted message: Software Engineer @ ORG_c7bac469 in #💻・tech-jobs
[2026-01-31T12:54:08.514Z] [BOT] ✅ Industry: Software Engineer @ ORG_c7bac469
[2026-01-31T12:54:08.514Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_c7bac469 → category channel (1 total channels)
[2026-01-31T12:54:08.514Z] [BOT] 💾 BEFORE MERGE: 1139 jobs in memory (cached)
[2026-01-31T12:54:08.535Z] [BOT] ✅ Loaded V2 database: 1138 jobs
💾 DISK STATE: 1138 jobs on disk
[2026-01-31T12:54:08.535Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1139
[2026-01-31T12:54:08.537Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:08.538Z] [BOT] 💾 AFTER MERGE: 1139 jobs (merged disk + memory)
[2026-01-31T12:54:08.538Z] [BOT] ✅ No jobs to archive (all 1139 jobs within 7-day window)
[2026-01-31T12:54:08.606Z] [BOT] 💾 Saved posted_jobs.json: 1139 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:10.108Z] [BOT] 📍 [ROUTING] "Research Associate - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
[2026-01-31T12:54:10.108Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T12:54:10.383Z] [BOT] ✅ Posted message: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・tech-jobs
[2026-01-31T12:54:10.383Z] [BOT] ✅ Industry: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2026-01-31T12:54:10.383Z] [BOT] 💾 Added channel posting: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University → category channel (1 total channels)
[2026-01-31T12:54:10.383Z] [BOT] 💾 BEFORE MERGE: 1140 jobs in memory (cached)
[2026-01-31T12:54:10.404Z] [BOT] ✅ Loaded V2 database: 1139 jobs
💾 DISK STATE: 1139 jobs on disk
[2026-01-31T12:54:10.404Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1140
[2026-01-31T12:54:10.407Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:10.407Z] [BOT] 💾 AFTER MERGE: 1140 jobs (merged disk + memory)
[2026-01-31T12:54:10.407Z] [BOT] ✅ No jobs to archive (all 1140 jobs within 7-day window)
[2026-01-31T12:54:10.470Z] [BOT] 💾 Saved posted_jobs.json: 1140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:14.973Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T12:54:14.974Z] [BOT] 📍 [ROUTING] "Enterprise Support Specialist, Spanish Speaking" @ figma
   Category: AI (matched: "machine learning")
[2026-01-31T12:54:14.974Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T12:54:15.133Z] [BOT] ✅ Posted message: Enterprise Support Specialist, Spanish Speaking @ figma in #🤖・ai-jobs
[2026-01-31T12:54:15.133Z] [BOT] ✅ Industry: Enterprise Support Specialist, Spanish Speaking @ figma
[2026-01-31T12:54:15.133Z] [BOT] 💾 Added channel posting: Enterprise Support Specialist, Spanish Speaking @ figma → category channel (1 total channels)
[2026-01-31T12:54:15.134Z] [BOT] 💾 BEFORE MERGE: 1141 jobs in memory (cached)
[2026-01-31T12:54:15.154Z] [BOT] ✅ Loaded V2 database: 1140 jobs
💾 DISK STATE: 1140 jobs on disk
[2026-01-31T12:54:15.155Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1141
[2026-01-31T12:54:15.157Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1141 jobs (merged disk + memory)
[2026-01-31T12:54:15.158Z] [BOT] ✅ No jobs to archive (all 1141 jobs within 7-day window)
[2026-01-31T12:54:15.236Z] [BOT] 💾 Saved posted_jobs.json: 1141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:16.737Z] [BOT] 📍 [ROUTING] "Associate – Investment Analytics and Data - Portfolio Analytics" @ ORG_c9e92d4e Fund Advisors
[2026-01-31T12:54:16.737Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T12:54:17.290Z] [BOT] ✅ Posted message: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors in #🤖・ai-jobs
[2026-01-31T12:54:17.290Z] [BOT] ✅ Industry: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors
[2026-01-31T12:54:17.291Z] [BOT] 💾 Added channel posting: Associate – Investment Analytics and Data - Portfolio Analytics @ ORG_c9e92d4e Fund Advisors → category channel (1 total channels)
💾 BEFORE MERGE: 1142 jobs in memory (cached)
[2026-01-31T12:54:17.312Z] [BOT] ✅ Loaded V2 database: 1141 jobs
💾 DISK STATE: 1141 jobs on disk
[2026-01-31T12:54:17.312Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1142
[2026-01-31T12:54:17.314Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1142 jobs (merged disk + memory)
[2026-01-31T12:54:17.315Z] [BOT] ✅ No jobs to archive (all 1142 jobs within 7-day window)
[2026-01-31T12:54:17.384Z] [BOT] 💾 Saved posted_jobs.json: 1142 active jobs
[2026-01-31T12:54:17.384Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:18.886Z] [BOT] 📍 [ROUTING] "AI Scientist 1 - Healthcare" @ ORG_9f59c5cf Health Solutions
   Category: AI (matched: "machine learning")
[2026-01-31T12:54:18.887Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T12:54:19.026Z] [BOT] ✅ Posted message: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions in #🤖・ai-jobs
  ✅ Industry: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions
[2026-01-31T12:54:19.026Z] [BOT] 💾 Added channel posting: AI Scientist 1 - Healthcare @ ORG_9f59c5cf Health Solutions → category channel (1 total channels)
[2026-01-31T12:54:19.026Z] [BOT] 💾 BEFORE MERGE: 1143 jobs in memory (cached)
[2026-01-31T12:54:19.047Z] [BOT] ✅ Loaded V2 database: 1142 jobs
💾 DISK STATE: 1142 jobs on disk
[2026-01-31T12:54:19.047Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1143
[2026-01-31T12:54:19.049Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:19.050Z] [BOT] 💾 AFTER MERGE: 1143 jobs (merged disk + memory)
[2026-01-31T12:54:19.050Z] [BOT] ✅ No jobs to archive (all 1143 jobs within 7-day window)
[2026-01-31T12:54:19.115Z] [BOT] 💾 Saved posted_jobs.json: 1143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:20.617Z] [BOT] 📍 [ROUTING] "ML Engineer 2" @ ORG_c3f8be8b
[2026-01-31T12:54:20.617Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T12:54:20.845Z] [BOT] ✅ Posted message: ML Engineer 2 @ ORG_c3f8be8b in #🤖・ai-jobs
[2026-01-31T12:54:20.846Z] [BOT] ✅ Industry: ML Engineer 2 @ ORG_c3f8be8b
[2026-01-31T12:54:20.846Z] [BOT] 💾 Added channel posting: ML Engineer 2 @ ORG_c3f8be8b → category channel (1 total channels)
[2026-01-31T12:54:20.846Z] [BOT] 💾 BEFORE MERGE: 1144 jobs in memory (cached)
[2026-01-31T12:54:20.867Z] [BOT] ✅ Loaded V2 database: 1143 jobs
💾 DISK STATE: 1143 jobs on disk
[2026-01-31T12:54:20.867Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1144
[2026-01-31T12:54:20.869Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:20.869Z] [BOT] 💾 AFTER MERGE: 1144 jobs (merged disk + memory)
[2026-01-31T12:54:20.870Z] [BOT] ✅ No jobs to archive (all 1144 jobs within 7-day window)
[2026-01-31T12:54:20.936Z] [BOT] 💾 Saved posted_jobs.json: 1144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:25.436Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-31T12:54:25.438Z] [BOT] 📍 [ROUTING] "Business Intelligence Developer" @ Auto-Owners Insurance
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-31T12:54:25.438Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T12:54:25.811Z] [BOT] ✅ Posted message: Business Intelligence Developer @ Auto-Owners Insurance in #📊・JID_fb739488
  ✅ Industry: Business Intelligence Developer @ Auto-Owners Insurance
[2026-01-31T12:54:25.811Z] [BOT] 💾 Added channel posting: Business Intelligence Developer @ Auto-Owners Insurance → category channel (1 total channels)
[2026-01-31T12:54:25.811Z] [BOT] 💾 BEFORE MERGE: 1145 jobs in memory (cached)
[2026-01-31T12:54:25.832Z] [BOT] ✅ Loaded V2 database: 1144 jobs
💾 DISK STATE: 1144 jobs on disk
[2026-01-31T12:54:25.833Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1145
[2026-01-31T12:54:25.835Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:25.835Z] [BOT] 💾 AFTER MERGE: 1145 jobs (merged disk + memory)
[2026-01-31T12:54:25.836Z] [BOT] ✅ No jobs to archive (all 1145 jobs within 7-day window)
[2026-01-31T12:54:25.901Z] [BOT] 💾 Saved posted_jobs.json: 1145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:27.404Z] [BOT] 📍 [ROUTING] "Human Performance Data Scientist 1" @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T12:54:27.404Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T12:54:27.666Z] [BOT] ✅ Posted message: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology in #📊・JID_fb739488
[2026-01-31T12:54:27.666Z] [BOT] ✅ Industry: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology
[2026-01-31T12:54:27.667Z] [BOT] 💾 Added channel posting: Human Performance Data Scientist 1 @ ORG_c910d474 Dynamics Information Technology → category channel (1 total channels)
[2026-01-31T12:54:27.667Z] [BOT] 💾 BEFORE MERGE: 1146 jobs in memory (cached)
[2026-01-31T12:54:27.688Z] [BOT] ✅ Loaded V2 database: 1145 jobs
💾 DISK STATE: 1145 jobs on disk
[2026-01-31T12:54:27.688Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1146
[2026-01-31T12:54:27.690Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T12:54:27.690Z] [BOT] 💾 AFTER MERGE: 1146 jobs (merged disk + memory)
[2026-01-31T12:54:27.691Z] [BOT] ✅ No jobs to archive (all 1146 jobs within 7-day window)
[2026-01-31T12:54:27.760Z] [BOT] 💾 Saved posted_jobs.json: 1146 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:32.260Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T12:54:32.261Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eb044bf3..." not found, but found as SHA256 "5921db34d8d80c8e"
⏭️  Skipping duplicate: JID_8f92590b-developer_r20060158 (posted within 7 days)
[2026-01-31T12:54:32.261Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c3704227..." not found, but found as SHA256 "1a9e94a2fe6c6589"
[2026-01-31T12:54:32.262Z] [BOT] ⏭️  Skipping duplicate: JID_e6ef062c (posted within 7 days)
[2026-01-31T12:54:32.262Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a036a739..." not found, but found as SHA256 "ed041b149e2d2ae9"
[2026-01-31T12:54:32.262Z] [BOT] ⏭️  Skipping duplicate: JID_3872c3b0-developer_r_12154 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_14eea817..." not found, but found as SHA256 "3da6eeba32a33895"
⏭️  Skipping duplicate: JID_14eea817 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_cfdafb45-..." not found, but found as SHA256 "7926e9ffdbf9954e"
⏭️  Skipping duplicate: JID_3b973b7c (posted within 7 days)
[2026-01-31T12:54:32.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_16bc128a-dfa_ca..." not found, but found as SHA256 "8a0d595d7973f9c8"
⏭️  Skipping duplicate: JID_16bc128a-dfa_careers-JID_51bbdaf5-_2025-8613 (posted within 7 days)
[2026-01-31T12:54:32.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e59dcab4..." not found, but found as SHA256 "c2297825b96aba3d"
[2026-01-31T12:54:32.263Z] [BOT] ⏭️  Skipping duplicate: JID_18a793b5-_r-5997 (posted within 7 days)
[2026-01-31T12:54:32.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e873d38-external_care..." not found, but found as SHA256 "2eb0510072bd9ebe"
[2026-01-31T12:54:32.263Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_bfd0c3d7-i_rq210954 (posted within 7 days)
[2026-01-31T12:54:32.263Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_65bc3a45..." not found, but found as SHA256 "6a6dab29159ed9b5"
[2026-01-31T12:54:32.263Z] [BOT] ⏭️  Skipping duplicate: JID_554da341-ii_r2882-1 (posted within 7 days)
[2026-01-31T12:54:32.264Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b1fef101..." not found, but found as SHA256 "b9c404cc80a6f62d"
[2026-01-31T12:54:32.264Z] [BOT] ⏭️  Skipping duplicate: JID_6a87daf6-engineering_2022193 (posted within 7 days)
[2026-01-31T12:54:32.377Z] [BOT] ✅ Loaded pending queue: 2948 total (1794 pending, 47 enriched, 1107 posted)
[2026-01-31T12:54:32.567Z] [BOT] ✅ Saved pending queue: 2948 total (1794 pending, 37 enriched, 1117 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-31T12:54:32.653Z] [BOT] 📂 Loaded 11198 existing routing entries
[2026-01-31T12:54:32.776Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-31T12:54:32.777Z] [BOT] Total entries: 11208
   Timestamp: 2026-01-31T12:54:32.732Z
[2026-01-31T12:54:32.780Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 31
   Successful: 11
   Failed: 0
   Skipped: 20
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 4 posts
     3. #📊・JID_fb739488: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1146 jobs in memory (cached)
[2026-01-31T12:54:32.813Z] [BOT] ✅ Loaded V2 database: 1146 jobs
💾 DISK STATE: 1146 jobs on disk
[2026-01-31T12:54:32.814Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1146
[2026-01-31T12:54:32.819Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1146 jobs (merged disk + memory)
✅ No jobs to archive (all 1146 jobs within 7-day window)
[2026-01-31T12:54:32.882Z] [BOT] 💾 Saved posted_jobs.json: 1146 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T12:54:32.882Z] [BOT] ✅ Database saved successfully
[2026-01-31T12:54:34.914Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2956) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*