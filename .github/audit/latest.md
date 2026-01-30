# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T16:55:03.048Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T16:54:33.085Z] ========================================
[2026-01-30T16:54:33.087Z] Discord Bot Execution Log
[2026-01-30T16:54:33.087Z] Environment: GitHub Actions
[2026-01-30T16:54:33.088Z] Node Version: v20.20.0
[2026-01-30T16:54:33.088Z] ========================================
[2026-01-30T16:54:33.088Z] Environment Variables Check:
[2026-01-30T16:54:33.088Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T16:54:33.088Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.088Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T16:54:33.088Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T16:54:33.088Z] 
Multi-Channel Configuration:
[2026-01-30T16:54:33.088Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.088Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.088Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.088Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.088Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.088Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.089Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.089Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.089Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T16:54:33.089Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T16:54:33.089Z] 
Data Files Check:
[2026-01-30T16:54:33.090Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T16:54:33.108Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3508908 bytes)
[2026-01-30T16:54:33.108Z] 
========================================
[2026-01-30T16:54:33.108Z] Starting Enhanced Discord Bot...
[2026-01-30T16:54:33.108Z] ========================================
[2026-01-30T16:54:33.663Z] [BOT] ✅ Loaded V2 database: 547 jobs
[2026-01-30T16:54:34.058Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T16:54:34.058Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T16:54:34.059Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T16:54:34.173Z] [BOT] ✅ Loaded pending queue: 2921 total (2353 pending, 50 enriched, 518 posted)
[2026-01-30T16:54:34.174Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T16:54:34.174Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T16:54:34.175Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T16:54:34.175Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T16:54:34.175Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T16:54:34.175Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T16:54:34.176Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T16:54:34.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T16:54:34.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T16:54:34.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
[2026-01-30T16:54:34.176Z] [BOT] ⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T16:54:34.176Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T16:54:34.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T16:54:34.177Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T16:54:34.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T16:54:34.177Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T16:54:34.177Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T16:54:34.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T16:54:34.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-30T16:54:34.178Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T16:54:34.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T16:54:34.178Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T16:54:34.185Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T16:54:34.185Z] [BOT] 🚫 Skipping blacklisted job: Solutions Engineering Manager, Select & Territory at verkada
[2026-01-30T16:54:34.185Z] [BOT] 🚫 Skipping blacklisted job: Sr Channel Sales Manager, Midwest at verkada
🚫 Skipping blacklisted job: Technical Program Manager, AI Research at figma
[2026-01-30T16:54:34.185Z] [BOT] 🚫 Skipping blacklisted job: Manager, On-Site Executive IT Support (Residential Operations) at coinbase
🚫 Skipping blacklisted job: Senior Software Engineer, Full-Stack at brex
[2026-01-30T16:54:34.185Z] [BOT] 🚫 Skipping blacklisted job: Data Architect Senior at Intermountain Healthcare
[2026-01-30T16:54:34.185Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
[2026-01-30T16:54:34.185Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
[2026-01-30T16:54:34.185Z] [BOT] 🚫 Skipping blacklisted job: Senior Fullstack Engineer - Backstage Portal, Data Experience at spotify
[2026-01-30T16:54:34.292Z] [BOT] ✅ Loaded pending queue: 2921 total (2353 pending, 50 enriched, 518 posted)
[2026-01-30T16:54:34.483Z] [BOT] ✅ Saved pending queue: 2910 total (2353 pending, 39 enriched, 518 posted)
🗑️ Removed 11 blacklisted jobs from pending queue
[2026-01-30T16:54:34.483Z] [BOT] 📋 After blacklist filter: 25 jobs (11 blacklisted)
[2026-01-30T16:54:34.483Z] [BOT] 📋 After data quality filter: 25 jobs (0 invalid)
[2026-01-30T16:54:34.484Z] [BOT] 📋 After multi-location grouping: 25 unique jobs to post
[2026-01-30T16:54:34.484Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T16:54:34.488Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2026-01-30T16:54:34.489Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Chicago - SLED)" @ verkada
[2026-01-30T16:54:34.489Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:54:34.506Z] [BOT ERROR] (node:3632) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T16:54:34.646Z] [BOT] ✅ Posted message: Enterprise Account Executive (Chicago - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (Chicago - SLED) @ verkada
[2026-01-30T16:54:34.646Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Chicago - SLED) @ verkada → category channel (1 total channels)
[2026-01-30T16:54:34.647Z] [BOT] 💾 BEFORE MERGE: 548 jobs in memory (cached)
[2026-01-30T16:54:34.667Z] [BOT] ✅ Loaded V2 database: 547 jobs
💾 DISK STATE: 547 jobs on disk
[2026-01-30T16:54:34.668Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=548
[2026-01-30T16:54:34.669Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:54:34.669Z] [BOT] 💾 AFTER MERGE: 548 jobs (merged disk + memory)
[2026-01-30T16:54:34.670Z] [BOT] ✅ No jobs to archive (all 548 jobs within 7-day window)
[2026-01-30T16:54:34.714Z] [BOT] 💾 Saved posted_jobs.json: 548 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:36.218Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Colorado - SLED)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:54:36.447Z] [BOT] ✅ Posted message: Enterprise Account Executive (Colorado - SLED) @ verkada in #💰・finance-jobs
[2026-01-30T16:54:36.448Z] [BOT] ✅ Industry: Enterprise Account Executive (Colorado - SLED) @ verkada
[2026-01-30T16:54:36.448Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Colorado - SLED) @ verkada → category channel (1 total channels)
[2026-01-30T16:54:36.448Z] [BOT] 💾 BEFORE MERGE: 549 jobs in memory (cached)
[2026-01-30T16:54:36.459Z] [BOT] ✅ Loaded V2 database: 548 jobs
💾 DISK STATE: 548 jobs on disk
[2026-01-30T16:54:36.459Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=549
[2026-01-30T16:54:36.460Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:54:36.460Z] [BOT] 💾 AFTER MERGE: 549 jobs (merged disk + memory)
[2026-01-30T16:54:36.461Z] [BOT] ✅ No jobs to archive (all 549 jobs within 7-day window)
[2026-01-30T16:54:36.495Z] [BOT] 💾 Saved posted_jobs.json: 549 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:37.996Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Kansas - SLED)" @ verkada
[2026-01-30T16:54:37.996Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:54:38.139Z] [BOT] ✅ Posted message: Enterprise Account Executive (Kansas - SLED) @ verkada in #💰・finance-jobs
[2026-01-30T16:54:38.139Z] [BOT] ✅ Industry: Enterprise Account Executive (Kansas - SLED) @ verkada
[2026-01-30T16:54:38.140Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Kansas - SLED) @ verkada → category channel (1 total channels)
[2026-01-30T16:54:38.140Z] [BOT] 💾 BEFORE MERGE: 550 jobs in memory (cached)
[2026-01-30T16:54:38.150Z] [BOT] ✅ Loaded V2 database: 549 jobs
💾 DISK STATE: 549 jobs on disk
[2026-01-30T16:54:38.150Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=550
[2026-01-30T16:54:38.152Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:54:38.152Z] [BOT] 💾 AFTER MERGE: 550 jobs (merged disk + memory)
[2026-01-30T16:54:38.152Z] [BOT] ✅ No jobs to archive (all 550 jobs within 7-day window)
[2026-01-30T16:54:38.186Z] [BOT] 💾 Saved posted_jobs.json: 550 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:39.689Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (SoCal - Corporate)" @ verkada
[2026-01-30T16:54:39.689Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T16:54:39.981Z] [BOT] ✅ Posted message: Enterprise Account Executive (SoCal - Corporate) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (SoCal - Corporate) @ verkada
[2026-01-30T16:54:39.982Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (SoCal - Corporate) @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 551 jobs in memory (cached)
[2026-01-30T16:54:39.993Z] [BOT] ✅ Loaded V2 database: 550 jobs
💾 DISK STATE: 550 jobs on disk
[2026-01-30T16:54:39.993Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=551
[2026-01-30T16:54:39.994Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 551 jobs (merged disk + memory)
[2026-01-30T16:54:39.994Z] [BOT] ✅ No jobs to archive (all 551 jobs within 7-day window)
[2026-01-30T16:54:40.027Z] [BOT] 💾 Saved posted_jobs.json: 551 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:44.529Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T16:54:44.530Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Greater Atlanta Area" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:54:44.858Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada
[2026-01-30T16:54:44.858Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada → category channel (1 total channels)
[2026-01-30T16:54:44.858Z] [BOT] 💾 BEFORE MERGE: 552 jobs in memory (cached)
[2026-01-30T16:54:44.877Z] [BOT] ✅ Loaded V2 database: 551 jobs
💾 DISK STATE: 551 jobs on disk
[2026-01-30T16:54:44.877Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=552
[2026-01-30T16:54:44.878Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:54:44.878Z] [BOT] 💾 AFTER MERGE: 552 jobs (merged disk + memory)
[2026-01-30T16:54:44.879Z] [BOT] ✅ No jobs to archive (all 552 jobs within 7-day window)
[2026-01-30T16:54:44.925Z] [BOT] 💾 Saved posted_jobs.json: 552 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:46.427Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Northeast" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T16:54:46.427Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:54:46.645Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Northeast @ verkada in #💻・tech-jobs
[2026-01-30T16:54:46.645Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Northeast @ verkada
[2026-01-30T16:54:46.645Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Northeast @ verkada → category channel (1 total channels)
[2026-01-30T16:54:46.645Z] [BOT] 💾 BEFORE MERGE: 553 jobs in memory (cached)
[2026-01-30T16:54:46.656Z] [BOT] ✅ Loaded V2 database: 552 jobs
💾 DISK STATE: 552 jobs on disk
[2026-01-30T16:54:46.656Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=553
[2026-01-30T16:54:46.657Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:54:46.657Z] [BOT] 💾 AFTER MERGE: 553 jobs (merged disk + memory)
[2026-01-30T16:54:46.658Z] [BOT] ✅ No jobs to archive (all 553 jobs within 7-day window)
[2026-01-30T16:54:46.696Z] [BOT] 💾 Saved posted_jobs.json: 553 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:48.335Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Northeast @ verkada in #🗽・JID_98d4f0de
[2026-01-30T16:54:48.335Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T16:54:48.335Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Northeast @ verkada → location channel (2 total channels)
[2026-01-30T16:54:48.335Z] [BOT] 💾 BEFORE MERGE: 553 jobs in memory (cached)
[2026-01-30T16:54:48.346Z] [BOT] ✅ Loaded V2 database: 553 jobs
💾 DISK STATE: 553 jobs on disk
[2026-01-30T16:54:48.346Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=553
[2026-01-30T16:54:48.348Z] [BOT] 🔀 Deep merged: Enterprise Solutions Engineer, Northeast @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 553 jobs (merged disk + memory)
[2026-01-30T16:54:48.348Z] [BOT] ✅ No jobs to archive (all 553 jobs within 7-day window)
[2026-01-30T16:54:48.382Z] [BOT] 💾 Saved posted_jobs.json: 553 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:49.884Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Rocky Mountains" @ verkada
[2026-01-30T16:54:49.885Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2026-01-30T16:54:49.885Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:54:50.051Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Rocky Mountains @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Rocky Mountains @ verkada
[2026-01-30T16:54:50.051Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Rocky Mountains @ verkada → category channel (1 total channels)
[2026-01-30T16:54:50.052Z] [BOT] 💾 BEFORE MERGE: 554 jobs in memory (cached)
[2026-01-30T16:54:50.062Z] [BOT] ✅ Loaded V2 database: 553 jobs
💾 DISK STATE: 553 jobs on disk
[2026-01-30T16:54:50.062Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=554
[2026-01-30T16:54:50.064Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 554 jobs (merged disk + memory)
[2026-01-30T16:54:50.064Z] [BOT] ✅ No jobs to archive (all 554 jobs within 7-day window)
[2026-01-30T16:54:50.099Z] [BOT] 💾 Saved posted_jobs.json: 554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:51.602Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southeast" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:54:51.793Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Southeast @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Southeast @ verkada
[2026-01-30T16:54:51.793Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Southeast @ verkada → category channel (1 total channels)
[2026-01-30T16:54:51.793Z] [BOT] 💾 BEFORE MERGE: 555 jobs in memory (cached)
[2026-01-30T16:54:51.804Z] [BOT] ✅ Loaded V2 database: 554 jobs
💾 DISK STATE: 554 jobs on disk
[2026-01-30T16:54:51.804Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=555
[2026-01-30T16:54:51.805Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 555 jobs (merged disk + memory)
[2026-01-30T16:54:51.806Z] [BOT] ✅ No jobs to archive (all 555 jobs within 7-day window)
[2026-01-30T16:54:51.839Z] [BOT] 💾 Saved posted_jobs.json: 555 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:53.341Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southern California" @ verkada
[2026-01-30T16:54:53.341Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:54:53.516Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Southern California @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Southern California @ verkada
[2026-01-30T16:54:53.516Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Southern California @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 556 jobs in memory (cached)
[2026-01-30T16:54:53.527Z] [BOT] ✅ Loaded V2 database: 555 jobs
💾 DISK STATE: 555 jobs on disk
[2026-01-30T16:54:53.527Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=556
[2026-01-30T16:54:53.529Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 556 jobs (merged disk + memory)
[2026-01-30T16:54:53.529Z] [BOT] ✅ No jobs to archive (all 556 jobs within 7-day window)
[2026-01-30T16:54:53.563Z] [BOT] 💾 Saved posted_jobs.json: 556 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:55.066Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, West Coast" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T16:54:55.066Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T16:54:55.246Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, West Coast @ verkada in #💻・tech-jobs
[2026-01-30T16:54:55.247Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, West Coast @ verkada
[2026-01-30T16:54:55.247Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, West Coast @ verkada → category channel (1 total channels)
[2026-01-30T16:54:55.247Z] [BOT] 💾 BEFORE MERGE: 557 jobs in memory (cached)
[2026-01-30T16:54:55.257Z] [BOT] ✅ Loaded V2 database: 556 jobs
💾 DISK STATE: 556 jobs on disk
[2026-01-30T16:54:55.258Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=557
[2026-01-30T16:54:55.259Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T16:54:55.259Z] [BOT] 💾 AFTER MERGE: 557 jobs (merged disk + memory)
[2026-01-30T16:54:55.259Z] [BOT] ✅ No jobs to archive (all 557 jobs within 7-day window)
[2026-01-30T16:54:55.293Z] [BOT] 💾 Saved posted_jobs.json: 557 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:54:59.796Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T16:54:59.797Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "c17d919beddde79b"
[2026-01-30T16:54:59.797Z] [BOT] ⏭️  Skipping duplicate: JID_a73599fa (posted within 7 days)
[2026-01-30T16:54:59.797Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "4a95e5d061ef216e"
⏭️  Skipping duplicate: JID_639c4656 (posted within 7 days)
[2026-01-30T16:54:59.798Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "2118766a0e356edb"
⏭️  Skipping duplicate: JID_9b390ef8 (posted within 7 days)
[2026-01-30T16:54:59.798Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "b18dfcd28b33fa0b"
⏭️  Skipping duplicate: JID_a3d19ba5 (posted within 7 days)
[2026-01-30T16:54:59.798Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "e47a17bcc93d96f7"
⏭️  Skipping duplicate: JID_93d9360f (posted within 7 days)
[2026-01-30T16:54:59.798Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cdca6ad9..." not found, but found as SHA256 "1ced13a4df587678"
⏭️  Skipping duplicate: JID_2c363f0d (posted within 7 days)
[2026-01-30T16:54:59.798Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "77f7ec862a27eece"
⏭️  Skipping duplicate: JID_b75dc978 (posted within 7 days)
[2026-01-30T16:54:59.799Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_da41ab0c..." not found, but found as SHA256 "8347de206bea233c"
⏭️  Skipping duplicate: JID_64e076e0 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "b2d1955105ea9f1d"
⏭️  Skipping duplicate: JID_3fa8d492 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_da41ab0c..." not found, but found as SHA256 "310c63c636f32536"
⏭️  Skipping duplicate: JID_d5432eed (posted within 7 days)
[2026-01-30T16:54:59.903Z] [BOT] ✅ Loaded pending queue: 2910 total (2353 pending, 39 enriched, 518 posted)
[2026-01-30T16:55:00.081Z] [BOT] ✅ Saved pending queue: 2910 total (2353 pending, 29 enriched, 528 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T16:55:00.081Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T16:55:00.184Z] [BOT] 📂 Loaded 10609 existing routing entries
[2026-01-30T16:55:00.292Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T16:55:00.293Z] [BOT] Total entries: 10619
   Timestamp: 2026-01-30T16:55:00.248Z
[2026-01-30T16:55:00.293Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T16:55:00.293Z] [BOT] Total attempts: 36
   Successful: 11
   Failed: 0
   Skipped: 25
[2026-01-30T16:55:00.293Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T16:55:00.293Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
[2026-01-30T16:55:00.293Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #💰・finance-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T16:55:00.294Z] [BOT] [STATS] Channel stats saved
[2026-01-30T16:55:00.294Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 557 jobs in memory (cached)
[2026-01-30T16:55:00.306Z] [BOT] ✅ Loaded V2 database: 557 jobs
[2026-01-30T16:55:00.306Z] [BOT] 💾 DISK STATE: 557 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=557
[2026-01-30T16:55:00.308Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 557 jobs (merged disk + memory)
[2026-01-30T16:55:00.308Z] [BOT] ✅ No jobs to archive (all 557 jobs within 7-day window)
[2026-01-30T16:55:00.342Z] [BOT] 💾 Saved posted_jobs.json: 557 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T16:55:00.342Z] [BOT] ✅ Database saved successfully
[2026-01-30T16:55:02.371Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3632) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*