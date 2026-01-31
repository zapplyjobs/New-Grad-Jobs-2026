# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T08:33:24.896Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T08:32:51.695Z] ========================================
[2026-01-31T08:32:51.697Z] Discord Bot Execution Log
[2026-01-31T08:32:51.697Z] Environment: GitHub Actions
[2026-01-31T08:32:51.697Z] Node Version: v20.20.0
[2026-01-31T08:32:51.697Z] ========================================
[2026-01-31T08:32:51.697Z] Environment Variables Check:
[2026-01-31T08:32:51.697Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T08:32:51.697Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.697Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T08:32:51.698Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T08:32:51.698Z] 
Multi-Channel Configuration:
[2026-01-31T08:32:51.698Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T08:32:51.698Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T08:32:51.699Z] 
Data Files Check:
[2026-01-31T08:32:51.700Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T08:32:51.730Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6155538 bytes)
[2026-01-31T08:32:51.730Z] 
========================================
[2026-01-31T08:32:51.730Z] Starting Enhanced Discord Bot...
[2026-01-31T08:32:51.730Z] ========================================
[2026-01-31T08:32:52.290Z] [BOT] ✅ Loaded V2 database: 968 jobs
[2026-01-31T08:32:52.771Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T08:32:52.771Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T08:32:52.772Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T08:32:52.893Z] [BOT] ✅ Loaded pending queue: 2959 total (1970 pending, 50 enriched, 939 posted)
[2026-01-31T08:32:52.894Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:32:52.895Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T08:32:52.895Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T08:32:52.895Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T08:32:52.895Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T08:32:52.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T08:32:52.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T08:32:52.896Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-31T08:32:52.896Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T08:32:52.897Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T08:32:52.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T08:32:52.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T08:32:52.898Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T08:32:52.898Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T08:32:52.899Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T08:32:52.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T08:32:52.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T08:32:52.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T08:32:52.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T08:32:52.905Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T08:32:52.906Z] [BOT] 🚫 Skipping blacklisted job: Compliance Manager, Customer Trust & Third Party Risk at figma
[2026-01-31T08:32:52.906Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Revenue Transformation at figma
🚫 Skipping blacklisted job: Senior Growth Marketing Manager at brex
🚫 Skipping blacklisted job: Senior Growth Marketing Manager at brex
[2026-01-31T08:32:53.012Z] [BOT] ✅ Loaded pending queue: 2959 total (1970 pending, 50 enriched, 939 posted)
[2026-01-31T08:32:53.197Z] [BOT] ✅ Saved pending queue: 2955 total (1970 pending, 46 enriched, 939 posted)
🗑️ Removed 4 blacklisted jobs from pending queue
[2026-01-31T08:32:53.197Z] [BOT] 📋 After blacklist filter: 32 jobs (4 blacklisted)
[2026-01-31T08:32:53.197Z] [BOT] 📋 After data quality filter: 32 jobs (0 invalid)
[2026-01-31T08:32:53.198Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T08:32:53.198Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T08:32:53.201Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-31T08:32:53.202Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f5ed86b6
[2026-01-31T08:32:53.202Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:32:53.220Z] [BOT ERROR] (node:3567) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T08:32:53.563Z] [BOT] ✅ Posted message: Software Engineer @ ORG_f5ed86b6 in #💻・tech-jobs
[2026-01-31T08:32:53.563Z] [BOT] ✅ Industry: Software Engineer @ ORG_f5ed86b6
[2026-01-31T08:32:53.564Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_f5ed86b6 → category channel (1 total channels)
[2026-01-31T08:32:53.564Z] [BOT] 💾 BEFORE MERGE: 969 jobs in memory (cached)
[2026-01-31T08:32:53.585Z] [BOT] ✅ Loaded V2 database: 968 jobs
💾 DISK STATE: 968 jobs on disk
[2026-01-31T08:32:53.585Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=969
[2026-01-31T08:32:53.588Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:32:53.588Z] [BOT] 💾 AFTER MERGE: 969 jobs (merged disk + memory)
[2026-01-31T08:32:53.589Z] [BOT] ✅ No jobs to archive (all 969 jobs within 7-day window)
[2026-01-31T08:32:53.654Z] [BOT] 💾 Saved posted_jobs.json: 969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:32:55.156Z] [BOT] 📍 [ROUTING] "Data Operator" @ ORG_2bc58fcc League Baseball
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:32:55.396Z] [BOT] ✅ Posted message: Data Operator @ ORG_2bc58fcc League Baseball in #💻・tech-jobs
[2026-01-31T08:32:55.396Z] [BOT] ✅ Industry: Data Operator @ ORG_2bc58fcc League Baseball
[2026-01-31T08:32:55.397Z] [BOT] 💾 Added channel posting: Data Operator @ ORG_2bc58fcc League Baseball → category channel (1 total channels)
[2026-01-31T08:32:55.397Z] [BOT] 💾 BEFORE MERGE: 970 jobs in memory (cached)
[2026-01-31T08:32:55.416Z] [BOT] ✅ Loaded V2 database: 969 jobs
💾 DISK STATE: 969 jobs on disk
[2026-01-31T08:32:55.416Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=970
[2026-01-31T08:32:55.419Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:32:55.419Z] [BOT] 💾 AFTER MERGE: 970 jobs (merged disk + memory)
[2026-01-31T08:32:55.420Z] [BOT] ✅ No jobs to archive (all 970 jobs within 7-day window)
[2026-01-31T08:32:55.480Z] [BOT] 💾 Saved posted_jobs.json: 970 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:32:56.983Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Scm" @ ORG_864269d2 Health System
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:32:57.177Z] [BOT] ✅ Posted message: Software Engineer 1 - Scm @ ORG_864269d2 Health System in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Scm @ ORG_864269d2 Health System
[2026-01-31T08:32:57.177Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Scm @ ORG_864269d2 Health System → category channel (1 total channels)
[2026-01-31T08:32:57.177Z] [BOT] 💾 BEFORE MERGE: 971 jobs in memory (cached)
[2026-01-31T08:32:57.197Z] [BOT] ✅ Loaded V2 database: 970 jobs
💾 DISK STATE: 970 jobs on disk
[2026-01-31T08:32:57.197Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=971
[2026-01-31T08:32:57.199Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:32:57.199Z] [BOT] 💾 AFTER MERGE: 971 jobs (merged disk + memory)
[2026-01-31T08:32:57.200Z] [BOT] ✅ No jobs to archive (all 971 jobs within 7-day window)
[2026-01-31T08:32:57.261Z] [BOT] 💾 Saved posted_jobs.json: 971 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:32:58.763Z] [BOT] 📍 [ROUTING] "Advanced Degree Software Engineer - Database Technologies" @ ORG_dc7620eb
[2026-01-31T08:32:58.764Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:32:59.006Z] [BOT] ✅ Posted message: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-31T08:32:59.006Z] [BOT] ✅ Industry: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb
[2026-01-31T08:32:59.007Z] [BOT] 💾 Added channel posting: Advanced Degree Software Engineer - Database Technologies @ ORG_dc7620eb → category channel (1 total channels)
💾 BEFORE MERGE: 972 jobs in memory (cached)
[2026-01-31T08:32:59.026Z] [BOT] ✅ Loaded V2 database: 971 jobs
💾 DISK STATE: 971 jobs on disk
[2026-01-31T08:32:59.026Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=972
[2026-01-31T08:32:59.029Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:32:59.029Z] [BOT] 💾 AFTER MERGE: 972 jobs (merged disk + memory)
[2026-01-31T08:32:59.029Z] [BOT] ✅ No jobs to archive (all 972 jobs within 7-day window)
[2026-01-31T08:32:59.099Z] [BOT] 💾 Saved posted_jobs.json: 972 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:00.598Z] [BOT] 📍 [ROUTING] "Database Support Engineer (APAC)" @ supabase
[2026-01-31T08:33:00.599Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:33:00.941Z] [BOT] ✅ Posted message: Database Support Engineer (APAC) @ supabase in #💻・tech-jobs
[2026-01-31T08:33:00.941Z] [BOT] ✅ Industry: Database Support Engineer (APAC) @ supabase
[2026-01-31T08:33:00.941Z] [BOT] 💾 Added channel posting: Database Support Engineer (APAC) @ supabase → category channel (1 total channels)
[2026-01-31T08:33:00.942Z] [BOT] 💾 BEFORE MERGE: 973 jobs in memory (cached)
[2026-01-31T08:33:00.967Z] [BOT] ✅ Loaded V2 database: 972 jobs
💾 DISK STATE: 972 jobs on disk
[2026-01-31T08:33:00.967Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=973
[2026-01-31T08:33:00.969Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:33:00.969Z] [BOT] 💾 AFTER MERGE: 973 jobs (merged disk + memory)
[2026-01-31T08:33:00.970Z] [BOT] ✅ No jobs to archive (all 973 jobs within 7-day window)
[2026-01-31T08:33:01.028Z] [BOT] 💾 Saved posted_jobs.json: 973 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:02.531Z] [BOT] 📍 [ROUTING] "Database Support Engineer (EMEA)" @ supabase
   Category: TECH (matched: "data")
[2026-01-31T08:33:02.531Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:33:02.858Z] [BOT] ✅ Posted message: Database Support Engineer (EMEA) @ supabase in #💻・tech-jobs
[2026-01-31T08:33:02.859Z] [BOT] ✅ Industry: Database Support Engineer (EMEA) @ supabase
[2026-01-31T08:33:02.859Z] [BOT] 💾 Added channel posting: Database Support Engineer (EMEA) @ supabase → category channel (1 total channels)
[2026-01-31T08:33:02.859Z] [BOT] 💾 BEFORE MERGE: 974 jobs in memory (cached)
[2026-01-31T08:33:02.878Z] [BOT] ✅ Loaded V2 database: 973 jobs
💾 DISK STATE: 973 jobs on disk
[2026-01-31T08:33:02.879Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=974
[2026-01-31T08:33:02.880Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:33:02.880Z] [BOT] 💾 AFTER MERGE: 974 jobs (merged disk + memory)
[2026-01-31T08:33:02.881Z] [BOT] ✅ No jobs to archive (all 974 jobs within 7-day window)
[2026-01-31T08:33:02.941Z] [BOT] 💾 Saved posted_jobs.json: 974 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:04.443Z] [BOT] 📍 [ROUTING] "Database Support Engineer (AMER)" @ supabase
[2026-01-31T08:33:04.443Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T08:33:04.668Z] [BOT] ✅ Posted message: Database Support Engineer (AMER) @ supabase in #💻・tech-jobs
  ✅ Industry: Database Support Engineer (AMER) @ supabase
[2026-01-31T08:33:04.669Z] [BOT] 💾 Added channel posting: Database Support Engineer (AMER) @ supabase → category channel (1 total channels)
[2026-01-31T08:33:04.669Z] [BOT] 💾 BEFORE MERGE: 975 jobs in memory (cached)
[2026-01-31T08:33:04.688Z] [BOT] ✅ Loaded V2 database: 974 jobs
💾 DISK STATE: 974 jobs on disk
[2026-01-31T08:33:04.688Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=975
[2026-01-31T08:33:04.690Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 975 jobs (merged disk + memory)
[2026-01-31T08:33:04.691Z] [BOT] ✅ No jobs to archive (all 975 jobs within 7-day window)
[2026-01-31T08:33:04.750Z] [BOT] 💾 Saved posted_jobs.json: 975 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:09.252Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T08:33:09.252Z] [BOT] 📍 [ROUTING] "Mercury Ignite: Data Engineering Graduate Development Program" @ ORG_6a7367ef Insurance
[2026-01-31T08:33:09.252Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-31T08:33:09.447Z] [BOT] ✅ Posted message: Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance in #🤖・ai-jobs
[2026-01-31T08:33:09.447Z] [BOT] ✅ Industry: Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance
[2026-01-31T08:33:09.447Z] [BOT] 💾 Added channel posting: Mercury Ignite: Data Engineering Graduate Development Program @ ORG_6a7367ef Insurance → category channel (1 total channels)
[2026-01-31T08:33:09.448Z] [BOT] 💾 BEFORE MERGE: 976 jobs in memory (cached)
[2026-01-31T08:33:09.467Z] [BOT] ✅ Loaded V2 database: 975 jobs
💾 DISK STATE: 975 jobs on disk
[2026-01-31T08:33:09.467Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=976
[2026-01-31T08:33:09.469Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:33:09.470Z] [BOT] 💾 AFTER MERGE: 976 jobs (merged disk + memory)
[2026-01-31T08:33:09.471Z] [BOT] ✅ No jobs to archive (all 976 jobs within 7-day window)
[2026-01-31T08:33:09.538Z] [BOT] 💾 Saved posted_jobs.json: 976 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:11.042Z] [BOT] 📍 [ROUTING] "AI Applied Scientist" @ figma
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T08:33:11.042Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T08:33:11.302Z] [BOT] ✅ Posted message: AI Applied Scientist @ figma in #🤖・ai-jobs
  ✅ Industry: AI Applied Scientist @ figma
[2026-01-31T08:33:11.302Z] [BOT] 💾 Added channel posting: AI Applied Scientist @ figma → category channel (1 total channels)
[2026-01-31T08:33:11.302Z] [BOT] 💾 BEFORE MERGE: 977 jobs in memory (cached)
[2026-01-31T08:33:11.320Z] [BOT] ✅ Loaded V2 database: 976 jobs
💾 DISK STATE: 976 jobs on disk
[2026-01-31T08:33:11.321Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=977
[2026-01-31T08:33:11.323Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 977 jobs (merged disk + memory)
[2026-01-31T08:33:11.323Z] [BOT] ✅ No jobs to archive (all 977 jobs within 7-day window)
[2026-01-31T08:33:11.390Z] [BOT] 💾 Saved posted_jobs.json: 977 active jobs
[2026-01-31T08:33:11.393Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:15.893Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-31T08:33:15.894Z] [BOT] 📍 [ROUTING] "People Analyst" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-31T08:33:15.894Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-31T08:33:16.227Z] [BOT] ✅ Posted message: People Analyst @ figma in #💰・finance-jobs
  ✅ Industry: People Analyst @ figma
[2026-01-31T08:33:16.227Z] [BOT] 💾 Added channel posting: People Analyst @ figma → category channel (1 total channels)
[2026-01-31T08:33:16.227Z] [BOT] 💾 BEFORE MERGE: 978 jobs in memory (cached)
[2026-01-31T08:33:16.245Z] [BOT] ✅ Loaded V2 database: 977 jobs
💾 DISK STATE: 977 jobs on disk
[2026-01-31T08:33:16.246Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=978
[2026-01-31T08:33:16.248Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 978 jobs (merged disk + memory)
[2026-01-31T08:33:16.248Z] [BOT] ✅ No jobs to archive (all 978 jobs within 7-day window)
[2026-01-31T08:33:16.317Z] [BOT] 💾 Saved posted_jobs.json: 978 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:20.820Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T08:33:20.821Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b5327024..." not found, but found as SHA256 "be673d4a3114fa07"
⏭️  Skipping duplicate: JID_9c83c8f4 (posted within 7 days)
[2026-01-31T08:33:20.821Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10b80c8d..." not found, but found as SHA256 "56f731e01d023435"
[2026-01-31T08:33:20.821Z] [BOT] ⏭️  Skipping duplicate: JID_99edcb1e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_97474184..." not found, but found as SHA256 "ec1663b7979009da"
⏭️  Skipping duplicate: JID_3c900ad2-scm_jr65804 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ca59dcb5-..." not found, but found as SHA256 "8b1d991bc4cdce6a"
⏭️  Skipping duplicate: JID_de128b37 (posted within 7 days)
[2026-01-31T08:33:20.822Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "a39a71944b3bb029"
⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-320582 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5a73f7c0-..." not found, but found as SHA256 "52ccbee3dc8c4c4a"
⏭️  Skipping duplicate: JID_010025e8 (posted within 7 days)
[2026-01-31T08:33:20.822Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_63028051-..." not found, but found as SHA256 "b05100d190cfe141"
⏭️  Skipping duplicate: JID_2c984041 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_ba997315-..." not found, but found as SHA256 "1801deec1db0bf4d"
⏭️  Skipping duplicate: JID_eba04086 (posted within 7 days)
[2026-01-31T08:33:20.822Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_213ad670..." not found, but found as SHA256 "2d65aa043e90ce8c"
⏭️  Skipping duplicate: JID_8634f5d2 (posted within 7 days)
[2026-01-31T08:33:20.823Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0070cd9f..." not found, but found as SHA256 "360f79e6dd5dc1a5"
[2026-01-31T08:33:20.823Z] [BOT] ⏭️  Skipping duplicate: JID_21ef7452 (posted within 7 days)
[2026-01-31T08:33:20.937Z] [BOT] ✅ Loaded pending queue: 2955 total (1970 pending, 46 enriched, 939 posted)
[2026-01-31T08:33:21.125Z] [BOT] ✅ Saved pending queue: 2955 total (1970 pending, 36 enriched, 949 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T08:33:21.125Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T08:33:21.212Z] [BOT] 📂 Loaded 11030 existing routing entries
[2026-01-31T08:33:21.358Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T08:33:21.358Z] [BOT] New entries: 10
   Total entries: 11040
   Timestamp: 2026-01-31T08:33:21.295Z
[2026-01-31T08:33:21.358Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T08:33:21.359Z] [BOT] Total attempts: 28
   Successful: 10
   Failed: 0
   Skipped: 18
[2026-01-31T08:33:21.359Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-31T08:33:21.359Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 7 posts
[2026-01-31T08:33:21.359Z] [BOT] 2. #🤖・ai-jobs: 2 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-31T08:33:21.359Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T08:33:21.359Z] [BOT] 💾 BEFORE MERGE: 978 jobs in memory (cached)
[2026-01-31T08:33:21.378Z] [BOT] ✅ Loaded V2 database: 978 jobs
💾 DISK STATE: 978 jobs on disk
[2026-01-31T08:33:21.378Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=978
[2026-01-31T08:33:21.380Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T08:33:21.380Z] [BOT] 💾 AFTER MERGE: 978 jobs (merged disk + memory)
[2026-01-31T08:33:21.381Z] [BOT] ✅ No jobs to archive (all 978 jobs within 7-day window)
[2026-01-31T08:33:21.441Z] [BOT] 💾 Saved posted_jobs.json: 978 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T08:33:21.441Z] [BOT] ✅ Database saved successfully
[2026-01-31T08:33:23.474Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3567) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*