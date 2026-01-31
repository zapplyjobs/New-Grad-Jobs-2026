# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T11:58:00.460Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T11:57:22.462Z] ========================================
[2026-01-31T11:57:22.464Z] Discord Bot Execution Log
[2026-01-31T11:57:22.464Z] Environment: GitHub Actions
[2026-01-31T11:57:22.464Z] Node Version: v20.20.0
[2026-01-31T11:57:22.464Z] ========================================
[2026-01-31T11:57:22.464Z] Environment Variables Check:
[2026-01-31T11:57:22.464Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T11:57:22.465Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T11:57:22.465Z] 
Multi-Channel Configuration:
[2026-01-31T11:57:22.465Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.465Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.466Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.466Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T11:57:22.466Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T11:57:22.466Z] 
Data Files Check:
[2026-01-31T11:57:22.467Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T11:57:22.500Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6925293 bytes)
[2026-01-31T11:57:22.500Z] 
========================================
[2026-01-31T11:57:22.500Z] Starting Enhanced Discord Bot...
[2026-01-31T11:57:22.500Z] ========================================
[2026-01-31T11:57:23.048Z] [BOT] ✅ Loaded V2 database: 1106 jobs
[2026-01-31T11:57:23.484Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-31T11:57:23.485Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T11:57:23.485Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T11:57:23.605Z] [BOT] ✅ Loaded pending queue: 2953 total (1826 pending, 50 enriched, 1077 posted)
[2026-01-31T11:57:23.605Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:57:23.606Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T11:57:23.606Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-31T11:57:23.606Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T11:57:23.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T11:57:23.607Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-31T11:57:23.607Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T11:57:23.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T11:57:23.607Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T11:57:23.607Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T11:57:23.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T11:57:23.608Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T11:57:23.608Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T11:57:23.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T11:57:23.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-31T11:57:23.609Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T11:57:23.609Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-31T11:57:23.609Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T11:57:23.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T11:57:23.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-31T11:57:23.610Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T11:57:23.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T11:57:23.610Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T11:57:23.617Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T11:57:23.618Z] [BOT] 🚫 Skipping blacklisted job: Manager, Sales Operations – Commissions at spotify
[2026-01-31T11:57:23.618Z] [BOT] 🚫 Skipping blacklisted job: Senior CES Operations Manager at figma
🚫 Skipping blacklisted job: Postdoctoral Researcher at National Renewable Energy Laboratory
[2026-01-31T11:57:23.618Z] [BOT] 🚫 Skipping blacklisted job: Software Engineer / Principal Software Engineer - Aht at Northrop Grumman
🚫 Skipping blacklisted job: Marketing Strategy Manager at figma
[2026-01-31T11:57:23.723Z] [BOT] ✅ Loaded pending queue: 2953 total (1826 pending, 50 enriched, 1077 posted)
[2026-01-31T11:57:23.902Z] [BOT] ✅ Saved pending queue: 2948 total (1826 pending, 45 enriched, 1077 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
[2026-01-31T11:57:23.903Z] [BOT] 📋 After blacklist filter: 31 jobs (5 blacklisted)
[2026-01-31T11:57:23.903Z] [BOT] 📋 After data quality filter: 31 jobs (0 invalid)
[2026-01-31T11:57:23.904Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
[2026-01-31T11:57:23.904Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T11:57:23.907Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-31T11:57:23.909Z] [BOT] 📍 [ROUTING] "Analyst – Customer Insights" @ ORG_85aef4c3
[2026-01-31T11:57:23.909Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:57:23.926Z] [BOT ERROR] (node:2979) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T11:57:24.413Z] [BOT] ✅ Posted message: Analyst – Customer Insights @ ORG_85aef4c3 in #💻・tech-jobs
[2026-01-31T11:57:24.414Z] [BOT] ✅ Industry: Analyst – Customer Insights @ ORG_85aef4c3
[2026-01-31T11:57:24.414Z] [BOT] 💾 Added channel posting: Analyst – Customer Insights @ ORG_85aef4c3 → category channel (1 total channels)
[2026-01-31T11:57:24.415Z] [BOT] 💾 BEFORE MERGE: 1107 jobs in memory (cached)
[2026-01-31T11:57:24.439Z] [BOT] ✅ Loaded V2 database: 1106 jobs
💾 DISK STATE: 1106 jobs on disk
[2026-01-31T11:57:24.440Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1107
[2026-01-31T11:57:24.442Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:57:24.443Z] [BOT] 💾 AFTER MERGE: 1107 jobs (merged disk + memory)
[2026-01-31T11:57:24.443Z] [BOT] ✅ No jobs to archive (all 1107 jobs within 7-day window)
[2026-01-31T11:57:24.526Z] [BOT] 💾 Saved posted_jobs.json: 1107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:26.210Z] [BOT] ✅ Posted message: Analyst – Customer Insights @ ORG_85aef4c3 in #🗽・JID_98d4f0de
[2026-01-31T11:57:26.210Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:57:26.210Z] [BOT] 💾 Added channel posting: Analyst – Customer Insights @ ORG_85aef4c3 → location channel (2 total channels)
💾 BEFORE MERGE: 1107 jobs in memory (cached)
[2026-01-31T11:57:26.232Z] [BOT] ✅ Loaded V2 database: 1107 jobs
💾 DISK STATE: 1107 jobs on disk
[2026-01-31T11:57:26.232Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1107
[2026-01-31T11:57:26.234Z] [BOT] 🔀 Deep merged: Analyst – Customer Insights @ ORG_85aef4c3 (disk: 1 channels → merged: 2 channels)
[2026-01-31T11:57:26.235Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1107 jobs (merged disk + memory)
[2026-01-31T11:57:26.236Z] [BOT] ✅ No jobs to archive (all 1107 jobs within 7-day window)
[2026-01-31T11:57:26.300Z] [BOT] 💾 Saved posted_jobs.json: 1107 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:27.801Z] [BOT] 📍 [ROUTING] "Software Developer 1" @ ORG_dc7620eb
[2026-01-31T11:57:27.801Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:57:28.030Z] [BOT] ✅ Posted message: Software Developer 1 @ ORG_dc7620eb in #💻・tech-jobs
[2026-01-31T11:57:28.031Z] [BOT] ✅ Industry: Software Developer 1 @ ORG_dc7620eb
[2026-01-31T11:57:28.031Z] [BOT] 💾 Added channel posting: Software Developer 1 @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T11:57:28.031Z] [BOT] 💾 BEFORE MERGE: 1108 jobs in memory (cached)
[2026-01-31T11:57:28.052Z] [BOT] ✅ Loaded V2 database: 1107 jobs
💾 DISK STATE: 1107 jobs on disk
[2026-01-31T11:57:28.052Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1108
[2026-01-31T11:57:28.055Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:57:28.055Z] [BOT] 💾 AFTER MERGE: 1108 jobs (merged disk + memory)
[2026-01-31T11:57:28.056Z] [BOT] ✅ No jobs to archive (all 1108 jobs within 7-day window)
[2026-01-31T11:57:28.122Z] [BOT] 💾 Saved posted_jobs.json: 1108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:29.624Z] [BOT] 📍 [ROUTING] "Metering Specialist 1" @ ORG_b4d76491
[2026-01-31T11:57:29.624Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:57:29.779Z] [BOT] ✅ Posted message: Metering Specialist 1 @ ORG_b4d76491 in #💻・tech-jobs
[2026-01-31T11:57:29.780Z] [BOT] ✅ Industry: Metering Specialist 1 @ ORG_b4d76491
[2026-01-31T11:57:29.780Z] [BOT] 💾 Added channel posting: Metering Specialist 1 @ ORG_b4d76491 → category channel (1 total channels)
[2026-01-31T11:57:29.780Z] [BOT] 💾 BEFORE MERGE: 1109 jobs in memory (cached)
[2026-01-31T11:57:29.801Z] [BOT] ✅ Loaded V2 database: 1108 jobs
💾 DISK STATE: 1108 jobs on disk
[2026-01-31T11:57:29.802Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1109
[2026-01-31T11:57:29.804Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1109 jobs (merged disk + memory)
[2026-01-31T11:57:29.805Z] [BOT] ✅ No jobs to archive (all 1109 jobs within 7-day window)
[2026-01-31T11:57:29.870Z] [BOT] 💾 Saved posted_jobs.json: 1109 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:31.372Z] [BOT] 📍 [ROUTING] "Business Data Steward - Consumer and Small Business Banking" @ ORG_b93825c5 Bank
[2026-01-31T11:57:31.372Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:57:31.627Z] [BOT] ✅ Posted message: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank in #💻・tech-jobs
  ✅ Industry: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank
[2026-01-31T11:57:31.628Z] [BOT] 💾 Added channel posting: Business Data Steward - Consumer and Small Business Banking @ ORG_b93825c5 Bank → category channel (1 total channels)
[2026-01-31T11:57:31.628Z] [BOT] 💾 BEFORE MERGE: 1110 jobs in memory (cached)
[2026-01-31T11:57:31.648Z] [BOT] ✅ Loaded V2 database: 1109 jobs
💾 DISK STATE: 1109 jobs on disk
[2026-01-31T11:57:31.648Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1110
[2026-01-31T11:57:31.651Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1110 jobs (merged disk + memory)
[2026-01-31T11:57:31.652Z] [BOT] ✅ No jobs to archive (all 1110 jobs within 7-day window)
[2026-01-31T11:57:31.714Z] [BOT] 💾 Saved posted_jobs.json: 1110 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:33.216Z] [BOT] 📍 [ROUTING] "Lederman Fellow" @ ORG_af10f363
[2026-01-31T11:57:33.216Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T11:57:33.434Z] [BOT] ✅ Posted message: Lederman Fellow @ ORG_af10f363 in #💻・tech-jobs
[2026-01-31T11:57:33.434Z] [BOT] ✅ Industry: Lederman Fellow @ ORG_af10f363
[2026-01-31T11:57:33.435Z] [BOT] 💾 Added channel posting: Lederman Fellow @ ORG_af10f363 → category channel (1 total channels)
[2026-01-31T11:57:33.435Z] [BOT] 💾 BEFORE MERGE: 1111 jobs in memory (cached)
[2026-01-31T11:57:33.456Z] [BOT] ✅ Loaded V2 database: 1110 jobs
💾 DISK STATE: 1110 jobs on disk
[2026-01-31T11:57:33.456Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1111
[2026-01-31T11:57:33.459Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1111 jobs (merged disk + memory)
[2026-01-31T11:57:33.459Z] [BOT] ✅ No jobs to archive (all 1111 jobs within 7-day window)
[2026-01-31T11:57:33.532Z] [BOT] 💾 Saved posted_jobs.json: 1111 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:38.034Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-31T11:57:38.035Z] [BOT] 📍 [ROUTING] "Meter Data Analyst 1" @ ORG_48c95877 Energy
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-31T11:57:38.036Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-31T11:57:38.220Z] [BOT] ✅ Posted message: Meter Data Analyst 1 @ ORG_48c95877 Energy in #📊・JID_fb739488
  ✅ Industry: Meter Data Analyst 1 @ ORG_48c95877 Energy
[2026-01-31T11:57:38.221Z] [BOT] 💾 Added channel posting: Meter Data Analyst 1 @ ORG_48c95877 Energy → category channel (1 total channels)
💾 BEFORE MERGE: 1112 jobs in memory (cached)
[2026-01-31T11:57:38.242Z] [BOT] ✅ Loaded V2 database: 1111 jobs
💾 DISK STATE: 1111 jobs on disk
[2026-01-31T11:57:38.242Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1112
[2026-01-31T11:57:38.244Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:57:38.244Z] [BOT] 💾 AFTER MERGE: 1112 jobs (merged disk + memory)
[2026-01-31T11:57:38.245Z] [BOT] ✅ No jobs to archive (all 1112 jobs within 7-day window)
[2026-01-31T11:57:38.308Z] [BOT] 💾 Saved posted_jobs.json: 1112 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:42.810Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-31T11:57:42.811Z] [BOT] 📍 [ROUTING] "Enterprise Support Engineer, AMER" @ retool
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T11:57:42.811Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T11:57:43.059Z] [BOT] ✅ Posted message: Enterprise Support Engineer, AMER @ retool in #🤖・ai-jobs
[2026-01-31T11:57:43.059Z] [BOT] ✅ Industry: Enterprise Support Engineer, AMER @ retool
[2026-01-31T11:57:43.059Z] [BOT] 💾 Added channel posting: Enterprise Support Engineer, AMER @ retool → category channel (1 total channels)
[2026-01-31T11:57:43.059Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory (cached)
[2026-01-31T11:57:43.081Z] [BOT] ✅ Loaded V2 database: 1112 jobs
💾 DISK STATE: 1112 jobs on disk
[2026-01-31T11:57:43.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1113
[2026-01-31T11:57:43.083Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:57:43.083Z] [BOT] 💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-31T11:57:43.084Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-31T11:57:43.155Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:44.915Z] [BOT] ✅ Posted message: Enterprise Support Engineer, AMER @ retool in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:57:44.916Z] [BOT] 💾 Added channel posting: Enterprise Support Engineer, AMER @ retool → location channel (2 total channels)
[2026-01-31T11:57:44.916Z] [BOT] 💾 BEFORE MERGE: 1113 jobs in memory (cached)
[2026-01-31T11:57:44.937Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-31T11:57:44.937Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1113
[2026-01-31T11:57:44.939Z] [BOT] 🔀 Deep merged: Enterprise Support Engineer, AMER @ retool (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1113 jobs (merged disk + memory)
[2026-01-31T11:57:44.940Z] [BOT] ✅ No jobs to archive (all 1113 jobs within 7-day window)
[2026-01-31T11:57:45.003Z] [BOT] 💾 Saved posted_jobs.json: 1113 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:46.505Z] [BOT] 📍 [ROUTING] "UX Researcher" @ retool
[2026-01-31T11:57:46.505Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-31T11:57:46.948Z] [BOT] ✅ Posted message: UX Researcher @ retool in #🤖・ai-jobs
[2026-01-31T11:57:46.948Z] [BOT] ✅ Industry: UX Researcher @ retool
[2026-01-31T11:57:46.949Z] [BOT] 💾 Added channel posting: UX Researcher @ retool → category channel (1 total channels)
[2026-01-31T11:57:46.949Z] [BOT] 💾 BEFORE MERGE: 1114 jobs in memory (cached)
[2026-01-31T11:57:46.969Z] [BOT] ✅ Loaded V2 database: 1113 jobs
💾 DISK STATE: 1113 jobs on disk
[2026-01-31T11:57:46.969Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1114
[2026-01-31T11:57:46.971Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1114 jobs (merged disk + memory)
[2026-01-31T11:57:46.972Z] [BOT] ✅ No jobs to archive (all 1114 jobs within 7-day window)
[2026-01-31T11:57:47.035Z] [BOT] 💾 Saved posted_jobs.json: 1114 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:48.538Z] [BOT] 📍 [ROUTING] "Mixed Methods Researcher - Music Mission" @ spotify
[2026-01-31T11:57:48.538Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-31T11:57:48.724Z] [BOT] ✅ Posted message: Mixed Methods Researcher - Music Mission @ spotify in #🤖・ai-jobs
[2026-01-31T11:57:48.724Z] [BOT] ✅ Industry: Mixed Methods Researcher - Music Mission @ spotify
[2026-01-31T11:57:48.725Z] [BOT] 💾 Added channel posting: Mixed Methods Researcher - Music Mission @ spotify → category channel (1 total channels)
[2026-01-31T11:57:48.725Z] [BOT] 💾 BEFORE MERGE: 1115 jobs in memory (cached)
[2026-01-31T11:57:48.745Z] [BOT] ✅ Loaded V2 database: 1114 jobs
💾 DISK STATE: 1114 jobs on disk
[2026-01-31T11:57:48.746Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1115
[2026-01-31T11:57:48.748Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:57:48.748Z] [BOT] 💾 AFTER MERGE: 1115 jobs (merged disk + memory)
[2026-01-31T11:57:48.748Z] [BOT] ✅ No jobs to archive (all 1115 jobs within 7-day window)
[2026-01-31T11:57:48.813Z] [BOT] 💾 Saved posted_jobs.json: 1115 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:50.479Z] [BOT] ✅ Posted message: Mixed Methods Researcher - Music Mission @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T11:57:50.479Z] [BOT] 💾 Added channel posting: Mixed Methods Researcher - Music Mission @ spotify → location channel (2 total channels)
[2026-01-31T11:57:50.479Z] [BOT] 💾 BEFORE MERGE: 1115 jobs in memory (cached)
[2026-01-31T11:57:50.500Z] [BOT] ✅ Loaded V2 database: 1115 jobs
💾 DISK STATE: 1115 jobs on disk
[2026-01-31T11:57:50.501Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1115
[2026-01-31T11:57:50.503Z] [BOT] 🔀 Deep merged: Mixed Methods Researcher - Music Mission @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T11:57:50.503Z] [BOT] 💾 AFTER MERGE: 1115 jobs (merged disk + memory)
[2026-01-31T11:57:50.504Z] [BOT] ✅ No jobs to archive (all 1115 jobs within 7-day window)
[2026-01-31T11:57:50.576Z] [BOT] 💾 Saved posted_jobs.json: 1115 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:52.077Z] [BOT] 📍 [ROUTING] "Software Engineer - Simulators" @ ORG_cdec6f53
[2026-01-31T11:57:52.077Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T11:57:52.308Z] [BOT] ✅ Posted message: Software Engineer - Simulators @ ORG_cdec6f53 in #🤖・ai-jobs
[2026-01-31T11:57:52.308Z] [BOT] ✅ Industry: Software Engineer - Simulators @ ORG_cdec6f53
[2026-01-31T11:57:52.309Z] [BOT] 💾 Added channel posting: Software Engineer - Simulators @ ORG_cdec6f53 → category channel (1 total channels)
💾 BEFORE MERGE: 1116 jobs in memory (cached)
[2026-01-31T11:57:52.329Z] [BOT] ✅ Loaded V2 database: 1115 jobs
💾 DISK STATE: 1115 jobs on disk
[2026-01-31T11:57:52.329Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1116
[2026-01-31T11:57:52.331Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1116 jobs (merged disk + memory)
[2026-01-31T11:57:52.332Z] [BOT] ✅ No jobs to archive (all 1116 jobs within 7-day window)
[2026-01-31T11:57:52.397Z] [BOT] 💾 Saved posted_jobs.json: 1116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:56.897Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T11:57:56.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6e5d6b65-us_c..." not found, but found as SHA256 "9955b7635a89ed98"
[2026-01-31T11:57:56.899Z] [BOT] ⏭️  Skipping duplicate: JID_6e5d6b65-us_corporate_jobs-JID_c1613c68-insights_r-2019782 (posted within 7 days)
[2026-01-31T11:57:56.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "ed7a34cc543214c6"
[2026-01-31T11:57:56.899Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-315615 (posted within 7 days)
[2026-01-31T11:57:56.899Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ceaa4ecd..." not found, but found as SHA256 "654fdeba61896a16"
⏭️  Skipping duplicate: JID_dbb558cc-i_jr-9238 (posted within 7 days)
[2026-01-31T11:57:56.900Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4936a540..." not found, but found as SHA256 "f9640f69ea678634"
⏭️  Skipping duplicate: JID_4936a540 (posted within 7 days)
[2026-01-31T11:57:56.900Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d917a06..." not found, but found as SHA256 "29c3eec16f38ab3a"
⏭️  Skipping duplicate: JID_46f18007 (posted within 7 days)
[2026-01-31T11:57:56.900Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3086a989..." not found, but found as SHA256 "a4ccc2a05f920102"
[2026-01-31T11:57:56.900Z] [BOT] ⏭️  Skipping duplicate: JID_34a0370d (posted within 7 days)
[2026-01-31T11:57:56.900Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a3e55e56..." not found, but found as SHA256 "9b6665d651a96307"
⏭️  Skipping duplicate: JID_f1f199e4 (posted within 7 days)
[2026-01-31T11:57:56.900Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c7a80b..." not found, but found as SHA256 "5f5b6a2b162e17b7"
[2026-01-31T11:57:56.901Z] [BOT] ⏭️  Skipping duplicate: JID_3b882cd7-banking_r0107465 (posted within 7 days)
[2026-01-31T11:57:56.901Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d5930b6c..." not found, but found as SHA256 "57ff654270539c69"
⏭️  Skipping duplicate: JID_cd33f33b-fellow_r_008876 (posted within 7 days)
[2026-01-31T11:57:56.901Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6b2e0cdd..." not found, but found as SHA256 "568ae2adf35eed48"
⏭️  Skipping duplicate: JID_a7af662d (posted within 7 days)
[2026-01-31T11:57:57.017Z] [BOT] ✅ Loaded pending queue: 2948 total (1826 pending, 45 enriched, 1077 posted)
[2026-01-31T11:57:57.205Z] [BOT] ✅ Saved pending queue: 2948 total (1826 pending, 35 enriched, 1087 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T11:57:57.205Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T11:57:57.291Z] [BOT] 📂 Loaded 11168 existing routing entries
[2026-01-31T11:57:57.433Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-31T11:57:57.433Z] [BOT] New entries: 10
   Total entries: 11178
   Timestamp: 2026-01-31T11:57:57.388Z
[2026-01-31T11:57:57.434Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
[2026-01-31T11:57:57.434Z] [BOT] Total attempts: 32
   Successful: 13
   Failed: 0
   Skipped: 19
[2026-01-31T11:57:57.435Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 1116 jobs in memory (cached)
[2026-01-31T11:57:57.457Z] [BOT] ✅ Loaded V2 database: 1116 jobs
💾 DISK STATE: 1116 jobs on disk
[2026-01-31T11:57:57.457Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1116
[2026-01-31T11:57:57.460Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T11:57:57.460Z] [BOT] 💾 AFTER MERGE: 1116 jobs (merged disk + memory)
[2026-01-31T11:57:57.461Z] [BOT] ✅ No jobs to archive (all 1116 jobs within 7-day window)
[2026-01-31T11:57:57.524Z] [BOT] 💾 Saved posted_jobs.json: 1116 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T11:57:57.525Z] [BOT] ✅ Database saved successfully
[2026-01-31T11:57:59.556Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2979) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*