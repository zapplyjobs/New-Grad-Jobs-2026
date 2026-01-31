# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T09:08:26.214Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T09:07:51.024Z] ========================================
[2026-01-31T09:07:51.026Z] Discord Bot Execution Log
[2026-01-31T09:07:51.026Z] Environment: GitHub Actions
[2026-01-31T09:07:51.026Z] Node Version: v20.20.0
[2026-01-31T09:07:51.026Z] ========================================
[2026-01-31T09:07:51.026Z] Environment Variables Check:
[2026-01-31T09:07:51.026Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T09:07:51.026Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.026Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T09:07:51.026Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T09:07:51.027Z] 
Multi-Channel Configuration:
[2026-01-31T09:07:51.027Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T09:07:51.027Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T09:07:51.027Z] 
Data Files Check:
[2026-01-31T09:07:51.028Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T09:07:51.059Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6233747 bytes)
[2026-01-31T09:07:51.059Z] 
========================================
[2026-01-31T09:07:51.059Z] Starting Enhanced Discord Bot...
[2026-01-31T09:07:51.059Z] ========================================
[2026-01-31T09:07:51.608Z] [BOT] ✅ Loaded V2 database: 988 jobs
[2026-01-31T09:07:52.221Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T09:07:52.222Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T09:07:52.222Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T09:07:52.340Z] [BOT] ✅ Loaded pending queue: 2955 total (1946 pending, 50 enriched, 959 posted)
[2026-01-31T09:07:52.340Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-31T09:07:52.340Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:07:52.341Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T09:07:52.341Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T09:07:52.342Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T09:07:52.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T09:07:52.342Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T09:07:52.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-31T09:07:52.342Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T09:07:52.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T09:07:52.343Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T09:07:52.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T09:07:52.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T09:07:52.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-31T09:07:52.343Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T09:07:52.343Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-31T09:07:52.344Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T09:07:52.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T09:07:52.344Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T09:07:52.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T09:07:52.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T09:07:52.344Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-31T09:07:52.345Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T09:07:52.345Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T09:07:52.345Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T09:07:52.345Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T09:07:52.353Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T09:07:52.353Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Operations Engineer  at brex
[2026-01-31T09:07:52.353Z] [BOT] 🚫 Skipping blacklisted job: Senior Security Operations Engineer  at brex
🚫 Skipping blacklisted job: Senior Security Operations Engineer  at brex
[2026-01-31T09:07:52.465Z] [BOT] ✅ Loaded pending queue: 2955 total (1946 pending, 50 enriched, 959 posted)
[2026-01-31T09:07:52.659Z] [BOT] ✅ Saved pending queue: 2952 total (1946 pending, 47 enriched, 959 posted)
[2026-01-31T09:07:52.660Z] [BOT] 🗑️ Removed 3 blacklisted jobs from pending queue
📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-31T09:07:52.660Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-31T09:07:52.661Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T09:07:52.661Z] [BOT] (2 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T09:07:52.663Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T09:07:52.664Z] [BOT] 📍 [ROUTING] "Data Annotation - QC and Crawling - Thai" @ ORG_68dd70b6 Ai
   Category: AI (matched: "machine learning")
[2026-01-31T09:07:52.664Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T09:07:52.681Z] [BOT ERROR] (node:3349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T09:07:53.158Z] [BOT] ✅ Posted message: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai in #🤖・ai-jobs
[2026-01-31T09:07:53.159Z] [BOT] ✅ Industry: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai
[2026-01-31T09:07:53.159Z] [BOT] 💾 Added channel posting: Data Annotation - QC and Crawling - Thai @ ORG_68dd70b6 Ai → category channel (1 total channels)
[2026-01-31T09:07:53.160Z] [BOT] 💾 BEFORE MERGE: 989 jobs in memory (cached)
[2026-01-31T09:07:53.178Z] [BOT] ✅ Loaded V2 database: 988 jobs
💾 DISK STATE: 988 jobs on disk
[2026-01-31T09:07:53.178Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=989
[2026-01-31T09:07:53.181Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:07:53.181Z] [BOT] 💾 AFTER MERGE: 989 jobs (merged disk + memory)
[2026-01-31T09:07:53.182Z] [BOT] ✅ No jobs to archive (all 989 jobs within 7-day window)
[2026-01-31T09:07:53.268Z] [BOT] 💾 Saved posted_jobs.json: 989 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:07:54.771Z] [BOT] 📍 [ROUTING] "Data Annotation Specialist" @ ORG_1fbf7080
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T09:07:54.771Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T09:07:55.025Z] [BOT] ✅ Posted message: Data Annotation Specialist @ ORG_1fbf7080 in #🤖・ai-jobs
  ✅ Industry: Data Annotation Specialist @ ORG_1fbf7080
[2026-01-31T09:07:55.026Z] [BOT] 💾 Added channel posting: Data Annotation Specialist @ ORG_1fbf7080 → category channel (1 total channels)
[2026-01-31T09:07:55.026Z] [BOT] 💾 BEFORE MERGE: 990 jobs in memory (cached)
[2026-01-31T09:07:55.045Z] [BOT] ✅ Loaded V2 database: 989 jobs
💾 DISK STATE: 989 jobs on disk
[2026-01-31T09:07:55.045Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=990
[2026-01-31T09:07:55.048Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:07:55.048Z] [BOT] 💾 AFTER MERGE: 990 jobs (merged disk + memory)
[2026-01-31T09:07:55.048Z] [BOT] ✅ No jobs to archive (all 990 jobs within 7-day window)
[2026-01-31T09:07:55.109Z] [BOT] 💾 Saved posted_jobs.json: 990 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:07:59.613Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-31T09:07:59.614Z] [BOT] 📍 [ROUTING] "Sales & Pricing Analyst" @ ORG_3aec9bf8
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T09:07:59.913Z] [BOT] ✅ Posted message: Sales & Pricing Analyst @ ORG_3aec9bf8 in #📊・JID_fb739488
  ✅ Industry: Sales & Pricing Analyst @ ORG_3aec9bf8
[2026-01-31T09:07:59.913Z] [BOT] 💾 Added channel posting: Sales & Pricing Analyst @ ORG_3aec9bf8 → category channel (1 total channels)
[2026-01-31T09:07:59.913Z] [BOT] 💾 BEFORE MERGE: 991 jobs in memory (cached)
[2026-01-31T09:07:59.933Z] [BOT] ✅ Loaded V2 database: 990 jobs
💾 DISK STATE: 990 jobs on disk
[2026-01-31T09:07:59.933Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=991
[2026-01-31T09:07:59.935Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:07:59.936Z] [BOT] 💾 AFTER MERGE: 991 jobs (merged disk + memory)
[2026-01-31T09:07:59.936Z] [BOT] ✅ No jobs to archive (all 991 jobs within 7-day window)
[2026-01-31T09:07:59.997Z] [BOT] 💾 Saved posted_jobs.json: 991 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:01.500Z] [BOT] 📍 [ROUTING] "Regulatory Data Analyst 1" @ ORG_a151ceb1 Financial
[2026-01-31T09:08:01.500Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T09:08:01.801Z] [BOT] ✅ Posted message: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  in #📊・JID_fb739488
[2026-01-31T09:08:01.802Z] [BOT] ✅ Industry: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial
[2026-01-31T09:08:01.802Z] [BOT] 💾 Added channel posting: Regulatory Data Analyst 1 @ ORG_a151ceb1 Financial  → category channel (1 total channels)
💾 BEFORE MERGE: 992 jobs in memory (cached)
[2026-01-31T09:08:01.820Z] [BOT] ✅ Loaded V2 database: 991 jobs
💾 DISK STATE: 991 jobs on disk
[2026-01-31T09:08:01.820Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=992
[2026-01-31T09:08:01.823Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 992 jobs (merged disk + memory)
[2026-01-31T09:08:01.824Z] [BOT] ✅ No jobs to archive (all 992 jobs within 7-day window)
[2026-01-31T09:08:01.880Z] [BOT] 💾 Saved posted_jobs.json: 992 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:03.382Z] [BOT] 📍 [ROUTING] "Software Engineer-Developer - Development" @ ORG_b344d80e Boeing Company
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-31T09:08:03.383Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T09:08:03.630Z] [BOT] ✅ Posted message: Software Engineer-Developer - Development @ ORG_b344d80e Boeing Company in #📊・JID_fb739488
  ✅ Industry: Software Engineer-Developer - Development @ ORG_b344d80e Boeing Company
[2026-01-31T09:08:03.631Z] [BOT] 💾 Added channel posting: Software Engineer-Developer - Development @ ORG_b344d80e Boeing Company → category channel (1 total channels)
💾 BEFORE MERGE: 993 jobs in memory (cached)
[2026-01-31T09:08:03.649Z] [BOT] ✅ Loaded V2 database: 992 jobs
💾 DISK STATE: 992 jobs on disk
[2026-01-31T09:08:03.649Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=993
[2026-01-31T09:08:03.652Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:08:03.652Z] [BOT] 💾 AFTER MERGE: 993 jobs (merged disk + memory)
[2026-01-31T09:08:03.652Z] [BOT] ✅ No jobs to archive (all 993 jobs within 7-day window)
[2026-01-31T09:08:03.711Z] [BOT] 💾 Saved posted_jobs.json: 993 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:08.214Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T09:08:08.215Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_b1b059ca Systems
   Category: TECH (matched: "software")
[2026-01-31T09:08:08.215Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:08:08.518Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_b1b059ca Systems
[2026-01-31T09:08:08.519Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_b1b059ca Systems → category channel (1 total channels)
💾 BEFORE MERGE: 994 jobs in memory (cached)
[2026-01-31T09:08:08.537Z] [BOT] ✅ Loaded V2 database: 993 jobs
💾 DISK STATE: 993 jobs on disk
[2026-01-31T09:08:08.538Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=994
[2026-01-31T09:08:08.539Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:08:08.539Z] [BOT] 💾 AFTER MERGE: 994 jobs (merged disk + memory)
[2026-01-31T09:08:08.540Z] [BOT] ✅ No jobs to archive (all 994 jobs within 7-day window)
[2026-01-31T09:08:08.605Z] [BOT] 💾 Saved posted_jobs.json: 994 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:10.395Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_b1b059ca Systems in #🗽・JID_98d4f0de
[2026-01-31T09:08:10.395Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T09:08:10.395Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_b1b059ca Systems → location channel (2 total channels)
[2026-01-31T09:08:10.395Z] [BOT] 💾 BEFORE MERGE: 994 jobs in memory (cached)
[2026-01-31T09:08:10.413Z] [BOT] ✅ Loaded V2 database: 994 jobs
💾 DISK STATE: 994 jobs on disk
[2026-01-31T09:08:10.414Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=994
[2026-01-31T09:08:10.416Z] [BOT] 🔀 Deep merged: Entry Level Software Engineer @ ORG_b1b059ca Systems (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 994 jobs (merged disk + memory)
[2026-01-31T09:08:10.417Z] [BOT] ✅ No jobs to archive (all 994 jobs within 7-day window)
[2026-01-31T09:08:10.477Z] [BOT] 💾 Saved posted_jobs.json: 994 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:11.980Z] [BOT] 📍 [ROUTING] "DGX Cloud Performance Engineer" @ ORG_0890f456
[2026-01-31T09:08:11.980Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:08:12.211Z] [BOT] ✅ Posted message: DGX Cloud Performance Engineer @ ORG_0890f456 in #💻・tech-jobs
[2026-01-31T09:08:12.212Z] [BOT] ✅ Industry: DGX Cloud Performance Engineer @ ORG_0890f456
[2026-01-31T09:08:12.212Z] [BOT] 💾 Added channel posting: DGX Cloud Performance Engineer @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 995 jobs in memory (cached)
[2026-01-31T09:08:12.232Z] [BOT] ✅ Loaded V2 database: 994 jobs
💾 DISK STATE: 994 jobs on disk
[2026-01-31T09:08:12.232Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=995
[2026-01-31T09:08:12.235Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 995 jobs (merged disk + memory)
[2026-01-31T09:08:12.235Z] [BOT] ✅ No jobs to archive (all 995 jobs within 7-day window)
[2026-01-31T09:08:12.292Z] [BOT] 💾 Saved posted_jobs.json: 995 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:13.794Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_f7a2cae4
[2026-01-31T09:08:13.794Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:08:13.961Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-31T09:08:13.961Z] [BOT] ✅ Industry: Entry Level Software Engineer @ ORG_f7a2cae4
[2026-01-31T09:08:13.961Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_f7a2cae4 → category channel (1 total channels)
[2026-01-31T09:08:13.962Z] [BOT] 💾 BEFORE MERGE: 996 jobs in memory (cached)
[2026-01-31T09:08:13.980Z] [BOT] ✅ Loaded V2 database: 995 jobs
💾 DISK STATE: 995 jobs on disk
[2026-01-31T09:08:13.980Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=996
[2026-01-31T09:08:13.983Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:08:13.983Z] [BOT] 💾 AFTER MERGE: 996 jobs (merged disk + memory)
[2026-01-31T09:08:13.984Z] [BOT] ✅ No jobs to archive (all 996 jobs within 7-day window)
[2026-01-31T09:08:14.042Z] [BOT] 💾 Saved posted_jobs.json: 996 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:15.544Z] [BOT] 📍 [ROUTING] "Data Integration Analyst 1" @ ORG_1ce21df7 Solutions
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:08:15.811Z] [BOT] ✅ Posted message: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions in #💻・tech-jobs
[2026-01-31T09:08:15.812Z] [BOT] ✅ Industry: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions
[2026-01-31T09:08:15.812Z] [BOT] 💾 Added channel posting: Data Integration Analyst 1 @ ORG_1ce21df7 Solutions → category channel (1 total channels)
[2026-01-31T09:08:15.812Z] [BOT] 💾 BEFORE MERGE: 997 jobs in memory (cached)
[2026-01-31T09:08:15.832Z] [BOT] ✅ Loaded V2 database: 996 jobs
💾 DISK STATE: 996 jobs on disk
[2026-01-31T09:08:15.832Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=997
[2026-01-31T09:08:15.834Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 997 jobs (merged disk + memory)
[2026-01-31T09:08:15.834Z] [BOT] ✅ No jobs to archive (all 997 jobs within 7-day window)
[2026-01-31T09:08:15.900Z] [BOT] 💾 Saved posted_jobs.json: 997 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:17.403Z] [BOT] 📍 [ROUTING] "Research Scientist - AI-Mediated Reality and Interaction Research" @ ORG_0890f456
   Category: TECH (matched: "machine learning")
[2026-01-31T09:08:17.404Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T09:08:17.660Z] [BOT] ✅ Posted message: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 in #💻・tech-jobs
  ✅ Industry: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456
[2026-01-31T09:08:17.661Z] [BOT] 💾 Added channel posting: Research Scientist - AI-Mediated Reality and Interaction Research @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 998 jobs in memory (cached)
[2026-01-31T09:08:17.679Z] [BOT] ✅ Loaded V2 database: 997 jobs
💾 DISK STATE: 997 jobs on disk
[2026-01-31T09:08:17.679Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=998
[2026-01-31T09:08:17.681Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 998 jobs (merged disk + memory)
[2026-01-31T09:08:17.682Z] [BOT] ✅ No jobs to archive (all 998 jobs within 7-day window)
[2026-01-31T09:08:17.740Z] [BOT] 💾 Saved posted_jobs.json: 998 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:22.243Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T09:08:22.244Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bb066b0e..." not found, but found as SHA256 "5a2ba2280cc4be29"
[2026-01-31T09:08:22.244Z] [BOT] ⏭️  Skipping duplicate: JID_8b73a10f (posted within 7 days)
[2026-01-31T09:08:22.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c5b6f6d7..." not found, but found as SHA256 "082df0967a3f7c8e"
[2026-01-31T09:08:22.245Z] [BOT] ⏭️  Skipping duplicate: JID_2a81cca7-analyst_r0013020 (posted within 7 days)
[2026-01-31T09:08:22.245Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_42553b2f..." not found, but found as SHA256 "7c501100d0509dfc"
⏭️  Skipping duplicate: JID_b795c300 (posted within 7 days)
[2026-01-31T09:08:22.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "1ebc34089e9551ea"
⏭️  Skipping duplicate: JID_a4dd9e68-2026_jr2009610 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8147c65c-amentum_..." not found, but found as SHA256 "e6872ecef19a16b7"
⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_b6cdd7c1-engineer_r0150489 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_9ecd388f-..." not found, but found as SHA256 "5bdaee450a4e4deb"
⏭️  Skipping duplicate: JID_9ecd388f-allied_external-JID_c23c0330-_r-010442 (posted within 7 days)
[2026-01-31T09:08:22.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c837a289-..." not found, but found as SHA256 "a6e36d3f3f210a81"
⏭️  Skipping duplicate: JID_64f249be (posted within 7 days)
[2026-01-31T09:08:22.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64861b63-first_financi..." not found, but found as SHA256 "aa8dd9e68bd94801"
⏭️  Skipping duplicate: JID_64861b63-first_financial_bank-JID_96b813c1-i_jr102396 (posted within 7 days)
[2026-01-31T09:08:22.246Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "ee487a3bd4a30224"
[2026-01-31T09:08:22.246Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_bff3fdc8-_jr2025487408-1 (posted within 7 days)
[2026-01-31T09:08:22.247Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "7ede63eeb98777e9"
⏭️  Skipping duplicate: JID_23c6ec66-2026_jr2009485 (posted within 7 days)
[2026-01-31T09:08:22.356Z] [BOT] ✅ Loaded pending queue: 2952 total (1946 pending, 47 enriched, 959 posted)
[2026-01-31T09:08:22.546Z] [BOT] ✅ Saved pending queue: 2952 total (1946 pending, 37 enriched, 969 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T09:08:22.546Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T09:08:22.632Z] [BOT] 📂 Loaded 11050 existing routing entries
[2026-01-31T09:08:22.779Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T09:08:22.779Z] [BOT] New entries: 10
   Total entries: 11060
   Timestamp: 2026-01-31T09:08:22.717Z
[2026-01-31T09:08:22.780Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T09:08:22.780Z] [BOT] Total attempts: 28
   Successful: 11
   Failed: 0
   Skipped: 17
[2026-01-31T09:08:22.780Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-31T09:08:22.780Z] [BOT] 2. #📊・JID_fb739488: 3 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 998 jobs in memory (cached)
[2026-01-31T09:08:22.800Z] [BOT] ✅ Loaded V2 database: 998 jobs
💾 DISK STATE: 998 jobs on disk
[2026-01-31T09:08:22.800Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=998
[2026-01-31T09:08:22.803Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T09:08:22.803Z] [BOT] 💾 AFTER MERGE: 998 jobs (merged disk + memory)
[2026-01-31T09:08:22.803Z] [BOT] ✅ No jobs to archive (all 998 jobs within 7-day window)
[2026-01-31T09:08:22.865Z] [BOT] 💾 Saved posted_jobs.json: 998 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T09:08:22.865Z] [BOT] ✅ Database saved successfully
[2026-01-31T09:08:24.897Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3349) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*