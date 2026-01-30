# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T17:21:45.790Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T17:21:00.461Z] ========================================
[2026-01-30T17:21:00.463Z] Discord Bot Execution Log
[2026-01-30T17:21:00.463Z] Environment: GitHub Actions
[2026-01-30T17:21:00.463Z] Node Version: v20.20.0
[2026-01-30T17:21:00.463Z] ========================================
[2026-01-30T17:21:00.463Z] Environment Variables Check:
[2026-01-30T17:21:00.463Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T17:21:00.463Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.463Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T17:21:00.463Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T17:21:00.463Z] 
Multi-Channel Configuration:
[2026-01-30T17:21:00.463Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T17:21:00.464Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T17:21:00.464Z] 
Data Files Check:
[2026-01-30T17:21:00.465Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T17:21:00.487Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3585780 bytes)
[2026-01-30T17:21:00.487Z] 
========================================
[2026-01-30T17:21:00.487Z] Starting Enhanced Discord Bot...
[2026-01-30T17:21:00.487Z] ========================================
[2026-01-30T17:21:00.960Z] [BOT] ✅ Loaded V2 database: 557 jobs
[2026-01-30T17:21:01.640Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T17:21:01.640Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T17:21:01.641Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T17:21:01.791Z] [BOT] ✅ Loaded pending queue: 2923 total (2345 pending, 50 enriched, 528 posted)
[2026-01-30T17:21:01.792Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T17:21:01.792Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T17:21:01.793Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T17:21:01.793Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T17:21:01.793Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T17:21:01.793Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T17:21:01.793Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T17:21:01.794Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T17:21:01.794Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T17:21:01.794Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T17:21:01.794Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T17:21:01.794Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T17:21:01.794Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T17:21:01.794Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T17:21:01.795Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T17:21:01.795Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T17:21:01.795Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T17:21:01.796Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T17:21:01.800Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T17:21:01.800Z] [BOT] 🚫 Skipping blacklisted job: Customer Enablement Manager - Figma Weave (New York, United States) at figma
[2026-01-30T17:21:01.800Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager - Spotify for Artists, Campaign Kit at spotify
[2026-01-30T17:21:01.944Z] [BOT] ✅ Loaded pending queue: 2923 total (2345 pending, 50 enriched, 528 posted)
[2026-01-30T17:21:02.118Z] [BOT] ✅ Saved pending queue: 2921 total (2345 pending, 48 enriched, 528 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-30T17:21:02.118Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T17:21:02.119Z] [BOT] 📋 After multi-location grouping: 31 unique jobs to post
   (3 grouped as same job with different locations)
[2026-01-30T17:21:02.119Z] [BOT] 📍 1 jobs with multiple locations:
   - Account Executive, E-Commerce  @ brex: salt lake city, utah, united states, seattle, washington, united states, san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T17:21:02.123Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-30T17:21:02.124Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), New York City " @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-30T17:21:02.124Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T17:21:02.140Z] [BOT ERROR] (node:3239) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T17:21:02.488Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), New York City  @ verkada in #💰・finance-jobs
  ✅ Industry: Sales Development Representative (AAE), New York City  @ verkada
[2026-01-30T17:21:02.489Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), New York City  @ verkada → category channel (1 total channels)
[2026-01-30T17:21:02.490Z] [BOT] 💾 BEFORE MERGE: 558 jobs in memory (cached)
[2026-01-30T17:21:02.510Z] [BOT] ✅ Loaded V2 database: 557 jobs
💾 DISK STATE: 557 jobs on disk
[2026-01-30T17:21:02.510Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=558
[2026-01-30T17:21:02.512Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:21:02.512Z] [BOT] 💾 AFTER MERGE: 558 jobs (merged disk + memory)
[2026-01-30T17:21:02.512Z] [BOT] ✅ No jobs to archive (all 558 jobs within 7-day window)
[2026-01-30T17:21:02.554Z] [BOT] 💾 Saved posted_jobs.json: 558 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:04.239Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), New York City  @ verkada in #🗽・JID_98d4f0de
[2026-01-30T17:21:04.239Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T17:21:04.240Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), New York City  @ verkada → location channel (2 total channels)
[2026-01-30T17:21:04.240Z] [BOT] 💾 BEFORE MERGE: 558 jobs in memory (cached)
[2026-01-30T17:21:04.255Z] [BOT] ✅ Loaded V2 database: 558 jobs
💾 DISK STATE: 558 jobs on disk
[2026-01-30T17:21:04.255Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=558
[2026-01-30T17:21:04.257Z] [BOT] 🔀 Deep merged: Sales Development Representative (AAE), New York City  @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T17:21:04.257Z] [BOT] 💾 AFTER MERGE: 558 jobs (merged disk + memory)
[2026-01-30T17:21:04.257Z] [BOT] ✅ No jobs to archive (all 558 jobs within 7-day window)
[2026-01-30T17:21:04.294Z] [BOT] 💾 Saved posted_jobs.json: 558 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:05.796Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Phoenix" @ verkada
[2026-01-30T17:21:05.796Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T17:21:06.034Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), Phoenix @ verkada in #💰・finance-jobs
[2026-01-30T17:21:06.034Z] [BOT] ✅ Industry: Sales Development Representative (AAE), Phoenix @ verkada
[2026-01-30T17:21:06.034Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), Phoenix @ verkada → category channel (1 total channels)
[2026-01-30T17:21:06.034Z] [BOT] 💾 BEFORE MERGE: 559 jobs in memory (cached)
[2026-01-30T17:21:06.050Z] [BOT] ✅ Loaded V2 database: 558 jobs
💾 DISK STATE: 558 jobs on disk
[2026-01-30T17:21:06.050Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=559
[2026-01-30T17:21:06.052Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:21:06.052Z] [BOT] 💾 AFTER MERGE: 559 jobs (merged disk + memory)
[2026-01-30T17:21:06.052Z] [BOT] ✅ No jobs to archive (all 559 jobs within 7-day window)
[2026-01-30T17:21:06.089Z] [BOT] 💾 Saved posted_jobs.json: 559 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:07.592Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (Corp)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T17:21:07.888Z] [BOT] ✅ Posted message: Strategic Account Executive (Corp) @ verkada in #💰・finance-jobs
  ✅ Industry: Strategic Account Executive (Corp) @ verkada
[2026-01-30T17:21:07.889Z] [BOT] 💾 Added channel posting: Strategic Account Executive (Corp) @ verkada → category channel (1 total channels)
[2026-01-30T17:21:07.889Z] [BOT] 💾 BEFORE MERGE: 560 jobs in memory (cached)
[2026-01-30T17:21:07.904Z] [BOT] ✅ Loaded V2 database: 559 jobs
💾 DISK STATE: 559 jobs on disk
[2026-01-30T17:21:07.904Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=560
[2026-01-30T17:21:07.905Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:21:07.906Z] [BOT] 💾 AFTER MERGE: 560 jobs (merged disk + memory)
[2026-01-30T17:21:07.906Z] [BOT] ✅ No jobs to archive (all 560 jobs within 7-day window)
[2026-01-30T17:21:07.942Z] [BOT] 💾 Saved posted_jobs.json: 560 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:12.443Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T17:21:12.444Z] [BOT] 📍 [ROUTING] "Solutions Engineer" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T17:21:12.444Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T17:21:12.693Z] [BOT] ✅ Posted message: Solutions Engineer @ verkada in #💻・tech-jobs
  ✅ Industry: Solutions Engineer @ verkada
[2026-01-30T17:21:12.693Z] [BOT] 💾 Added channel posting: Solutions Engineer @ verkada → category channel (1 total channels)
[2026-01-30T17:21:12.693Z] [BOT] 💾 BEFORE MERGE: 561 jobs in memory (cached)
[2026-01-30T17:21:12.716Z] [BOT] ✅ Loaded V2 database: 560 jobs
💾 DISK STATE: 560 jobs on disk
[2026-01-30T17:21:12.716Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=561
[2026-01-30T17:21:12.717Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:21:12.717Z] [BOT] 💾 AFTER MERGE: 561 jobs (merged disk + memory)
[2026-01-30T17:21:12.718Z] [BOT] ✅ No jobs to archive (all 561 jobs within 7-day window)
[2026-01-30T17:21:12.767Z] [BOT] 💾 Saved posted_jobs.json: 561 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:14.270Z] [BOT] 📍 [ROUTING] "Associate Professional Application Programmer" @ ORG_5cdab806 Technology
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T17:21:14.534Z] [BOT] ✅ Posted message: Associate Professional Application Programmer @ ORG_5cdab806 Technology in #💻・tech-jobs
  ✅ Industry: Associate Professional Application Programmer @ ORG_5cdab806 Technology
[2026-01-30T17:21:14.534Z] [BOT] 💾 Added channel posting: Associate Professional Application Programmer @ ORG_5cdab806 Technology → category channel (1 total channels)
[2026-01-30T17:21:14.534Z] [BOT] 💾 BEFORE MERGE: 562 jobs in memory (cached)
[2026-01-30T17:21:14.550Z] [BOT] ✅ Loaded V2 database: 561 jobs
💾 DISK STATE: 561 jobs on disk
[2026-01-30T17:21:14.550Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=562
[2026-01-30T17:21:14.551Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 562 jobs (merged disk + memory)
[2026-01-30T17:21:14.552Z] [BOT] ✅ No jobs to archive (all 562 jobs within 7-day window)
[2026-01-30T17:21:14.591Z] [BOT] 💾 Saved posted_jobs.json: 562 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:16.567Z] [BOT] ✅ Posted message: Associate Professional Application Programmer @ ORG_5cdab806 Technology in #🗽・JID_98d4f0de
[2026-01-30T17:21:16.567Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T17:21:16.567Z] [BOT] 💾 Added channel posting: Associate Professional Application Programmer @ ORG_5cdab806 Technology → location channel (2 total channels)
[2026-01-30T17:21:16.568Z] [BOT] 💾 BEFORE MERGE: 562 jobs in memory (cached)
[2026-01-30T17:21:16.584Z] [BOT] ✅ Loaded V2 database: 562 jobs
💾 DISK STATE: 562 jobs on disk
[2026-01-30T17:21:16.584Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=562
[2026-01-30T17:21:16.585Z] [BOT] 🔀 Deep merged: Associate Professional Application Programmer @ ORG_5cdab806 Technology (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T17:21:16.585Z] [BOT] 💾 AFTER MERGE: 562 jobs (merged disk + memory)
[2026-01-30T17:21:16.585Z] [BOT] ✅ No jobs to archive (all 562 jobs within 7-day window)
[2026-01-30T17:21:16.621Z] [BOT] 💾 Saved posted_jobs.json: 562 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:21.122Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-30T17:21:21.123Z] [BOT] 📍 [ROUTING] "Finance, Biz Ops, and Strategy" @ gusto
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T17:21:21.123Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T17:21:21.378Z] [BOT] ✅ Posted message: Finance, Biz Ops, and Strategy @ gusto in #📊・JID_fb739488
[2026-01-30T17:21:21.379Z] [BOT] ✅ Industry: Finance, Biz Ops, and Strategy @ gusto
[2026-01-30T17:21:21.379Z] [BOT] 💾 Added channel posting: Finance, Biz Ops, and Strategy @ gusto → category channel (1 total channels)
[2026-01-30T17:21:21.379Z] [BOT] 💾 BEFORE MERGE: 563 jobs in memory (cached)
[2026-01-30T17:21:21.395Z] [BOT] ✅ Loaded V2 database: 562 jobs
[2026-01-30T17:21:21.395Z] [BOT] 💾 DISK STATE: 562 jobs on disk
[2026-01-30T17:21:21.395Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=563
[2026-01-30T17:21:21.396Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 563 jobs (merged disk + memory)
[2026-01-30T17:21:21.397Z] [BOT] ✅ No jobs to archive (all 563 jobs within 7-day window)
[2026-01-30T17:21:21.434Z] [BOT] 💾 Saved posted_jobs.json: 563 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:22.936Z] [BOT] 📍 [ROUTING] "Power BI Analyst" @ ORG_9d38443e of Texas - Austin
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-01-30T17:21:22.936Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T17:21:23.160Z] [BOT] ✅ Posted message: Power BI Analyst @ ORG_9d38443e of Texas - Austin in #📊・JID_fb739488
  ✅ Industry: Power BI Analyst @ ORG_9d38443e of Texas - Austin
[2026-01-30T17:21:23.161Z] [BOT] 💾 Added channel posting: Power BI Analyst @ ORG_9d38443e of Texas - Austin → category channel (1 total channels)
[2026-01-30T17:21:23.161Z] [BOT] 💾 BEFORE MERGE: 564 jobs in memory (cached)
[2026-01-30T17:21:23.176Z] [BOT] ✅ Loaded V2 database: 563 jobs
[2026-01-30T17:21:23.176Z] [BOT] 💾 DISK STATE: 563 jobs on disk
[2026-01-30T17:21:23.177Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=564
[2026-01-30T17:21:23.178Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 564 jobs (merged disk + memory)
[2026-01-30T17:21:23.178Z] [BOT] ✅ No jobs to archive (all 564 jobs within 7-day window)
[2026-01-30T17:21:23.215Z] [BOT] 💾 Saved posted_jobs.json: 564 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:27.717Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T17:21:27.718Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Finance (New York City)" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-30T17:21:27.718Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T17:21:27.976Z] [BOT] ✅ Posted message: 2026 Summer Internship, Finance (New York City) @ spotify in #🤖・ai-jobs
[2026-01-30T17:21:27.976Z] [BOT] ✅ Industry: 2026 Summer Internship, Finance (New York City) @ spotify
[2026-01-30T17:21:27.977Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Finance (New York City) @ spotify → category channel (1 total channels)
[2026-01-30T17:21:27.977Z] [BOT] 💾 BEFORE MERGE: 565 jobs in memory (cached)
[2026-01-30T17:21:27.992Z] [BOT] ✅ Loaded V2 database: 564 jobs
💾 DISK STATE: 564 jobs on disk
[2026-01-30T17:21:27.993Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=565
[2026-01-30T17:21:27.994Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 565 jobs (merged disk + memory)
[2026-01-30T17:21:27.995Z] [BOT] ✅ No jobs to archive (all 565 jobs within 7-day window)
[2026-01-30T17:21:28.032Z] [BOT] 💾 Saved posted_jobs.json: 565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:29.890Z] [BOT] ✅ Posted message: 2026 Summer Internship, Finance (New York City) @ spotify in #🗽・JID_98d4f0de
[2026-01-30T17:21:29.890Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T17:21:29.890Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Finance (New York City) @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 565 jobs in memory (cached)
[2026-01-30T17:21:29.906Z] [BOT] ✅ Loaded V2 database: 565 jobs
💾 DISK STATE: 565 jobs on disk
[2026-01-30T17:21:29.906Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=565
[2026-01-30T17:21:29.908Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Finance (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-30T17:21:29.908Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 565 jobs (merged disk + memory)
[2026-01-30T17:21:29.908Z] [BOT] ✅ No jobs to archive (all 565 jobs within 7-day window)
[2026-01-30T17:21:29.945Z] [BOT] 💾 Saved posted_jobs.json: 565 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:31.446Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Machine Learning Engineering (New York City)" @ spotify
[2026-01-30T17:21:31.446Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T17:21:31.853Z] [BOT] ✅ Posted message: 2026 Summer Internship, Machine Learning Engineering (New York City) @ spotify in #🤖・ai-jobs
  ✅ Industry: 2026 Summer Internship, Machine Learning Engineering (New York City) @ spotify
[2026-01-30T17:21:31.854Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Machine Learning Engineering (New York City) @ spotify → category channel (1 total channels)
[2026-01-30T17:21:31.854Z] [BOT] 💾 BEFORE MERGE: 566 jobs in memory (cached)
[2026-01-30T17:21:31.870Z] [BOT] ✅ Loaded V2 database: 565 jobs
💾 DISK STATE: 565 jobs on disk
[2026-01-30T17:21:31.870Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=566
[2026-01-30T17:21:31.871Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 566 jobs (merged disk + memory)
[2026-01-30T17:21:31.872Z] [BOT] ✅ No jobs to archive (all 566 jobs within 7-day window)
[2026-01-30T17:21:31.909Z] [BOT] 💾 Saved posted_jobs.json: 566 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:33.712Z] [BOT] ✅ Posted message: 2026 Summer Internship, Machine Learning Engineering (New York City) @ spotify in #🗽・JID_98d4f0de
[2026-01-30T17:21:33.712Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: 2026 Summer Internship, Machine Learning Engineering (New York City) @ spotify → location channel (2 total channels)
[2026-01-30T17:21:33.712Z] [BOT] 💾 BEFORE MERGE: 566 jobs in memory (cached)
[2026-01-30T17:21:33.728Z] [BOT] ✅ Loaded V2 database: 566 jobs
[2026-01-30T17:21:33.728Z] [BOT] 💾 DISK STATE: 566 jobs on disk
[2026-01-30T17:21:33.728Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=566
[2026-01-30T17:21:33.729Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Machine Learning Engineering (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-30T17:21:33.729Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 566 jobs (merged disk + memory)
[2026-01-30T17:21:33.730Z] [BOT] ✅ No jobs to archive (all 566 jobs within 7-day window)
[2026-01-30T17:21:33.770Z] [BOT] 💾 Saved posted_jobs.json: 566 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:35.269Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Machine Learning Engineering - PhD (New York City)" @ spotify
[2026-01-30T17:21:35.270Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T17:21:35.462Z] [BOT] ✅ Posted message: 2026 Summer Internship, Machine Learning Engineering - PhD (New York City) @ spotify in #🤖・ai-jobs
[2026-01-30T17:21:35.463Z] [BOT] ✅ Industry: 2026 Summer Internship, Machine Learning Engineering - PhD (New York City) @ spotify
[2026-01-30T17:21:35.463Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Machine Learning Engineering - PhD (New York City) @ spotify → category channel (1 total channels)
💾 BEFORE MERGE: 567 jobs in memory (cached)
[2026-01-30T17:21:35.479Z] [BOT] ✅ Loaded V2 database: 566 jobs
💾 DISK STATE: 566 jobs on disk
[2026-01-30T17:21:35.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=567
[2026-01-30T17:21:35.480Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:21:35.480Z] [BOT] 💾 AFTER MERGE: 567 jobs (merged disk + memory)
[2026-01-30T17:21:35.481Z] [BOT] ✅ No jobs to archive (all 567 jobs within 7-day window)
[2026-01-30T17:21:35.518Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:37.372Z] [BOT] ✅ Posted message: 2026 Summer Internship, Machine Learning Engineering - PhD (New York City) @ spotify in #🗽・JID_98d4f0de
[2026-01-30T17:21:37.372Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T17:21:37.372Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Machine Learning Engineering - PhD (New York City) @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 567 jobs in memory (cached)
[2026-01-30T17:21:37.388Z] [BOT] ✅ Loaded V2 database: 567 jobs
💾 DISK STATE: 567 jobs on disk
[2026-01-30T17:21:37.388Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=567
[2026-01-30T17:21:37.390Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Machine Learning Engineering - PhD (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T17:21:37.390Z] [BOT] 💾 AFTER MERGE: 567 jobs (merged disk + memory)
[2026-01-30T17:21:37.390Z] [BOT] ✅ No jobs to archive (all 567 jobs within 7-day window)
[2026-01-30T17:21:37.428Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:41.928Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T17:21:41.930Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cdca6ad9..." not found, but found as SHA256 "c0e6517a4dcc8305"
[2026-01-30T17:21:41.930Z] [BOT] ⏭️  Skipping duplicate: JID_aa58a0bd (posted within 7 days)
[2026-01-30T17:21:41.930Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "c658bd2d6af65c70"
⏭️  Skipping duplicate: JID_f905c4bf (posted within 7 days)
[2026-01-30T17:21:41.930Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "911d9bdffc96172b"
⏭️  Skipping duplicate: JID_a1c0a588 (posted within 7 days)
[2026-01-30T17:21:41.930Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2d7052a3..." not found, but found as SHA256 "7ec4629cd7373577"
[2026-01-30T17:21:41.930Z] [BOT] ⏭️  Skipping duplicate: JID_dce564fc (posted within 7 days)
[2026-01-30T17:21:41.930Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_950538f6..." not found, but found as SHA256 "3ab2e73effb653e4"
[2026-01-30T17:21:41.930Z] [BOT] ⏭️  Skipping duplicate: JID_e6731423 (posted within 7 days)
[2026-01-30T17:21:41.930Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6327d9f5..." not found, but found as SHA256 "894667c0f4616ab0"
[2026-01-30T17:21:41.930Z] [BOT] ⏭️  Skipping duplicate: JID_be367fb9 (posted within 7 days)
[2026-01-30T17:21:41.931Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_20791d03..." not found, but found as SHA256 "eecba62fdee82b1e"
⏭️  Skipping duplicate: JID_ae4004a7-programmer_51569293 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_3878102c..." not found, but found as SHA256 "cd6578737e46de2e"
⏭️  Skipping duplicate: JID_8a0ebdcc-analyst_r_00044081-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d172e048..." not found, but found as SHA256 "07033cd71c246065"
⏭️  Skipping duplicate: JID_2825ff7d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_652ea60c..." not found, but found as SHA256 "28fc5e79e2c1b642"
⏭️  Skipping duplicate: JID_cfd8e551 (posted within 7 days)
[2026-01-30T17:21:42.075Z] [BOT] ✅ Loaded pending queue: 2921 total (2345 pending, 48 enriched, 528 posted)
[2026-01-30T17:21:42.257Z] [BOT] ✅ Saved pending queue: 2921 total (2345 pending, 38 enriched, 538 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T17:21:42.257Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T17:21:42.350Z] [BOT] 📂 Loaded 10619 existing routing entries
[2026-01-30T17:21:42.483Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T17:21:42.484Z] [BOT] Total entries: 10629
   Timestamp: 2026-01-30T17:21:42.446Z
[2026-01-30T17:21:42.484Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T17:21:42.484Z] [BOT] Total attempts: 31
   Successful: 15
   Failed: 0
   Skipped: 16
[2026-01-30T17:21:42.484Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T17:21:42.484Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #🗽・JID_98d4f0de: 5 posts
     2. #💰・finance-jobs: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💻・tech-jobs: 2 posts
     5. #📊・JID_fb739488: 2 posts
[2026-01-30T17:21:42.485Z] [BOT] [STATS] Channel stats saved
[2026-01-30T17:21:42.486Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 567 jobs in memory (cached)
[2026-01-30T17:21:42.503Z] [BOT] ✅ Loaded V2 database: 567 jobs
[2026-01-30T17:21:42.503Z] [BOT] 💾 DISK STATE: 567 jobs on disk
[2026-01-30T17:21:42.503Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=567
[2026-01-30T17:21:42.504Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T17:21:42.505Z] [BOT] 💾 AFTER MERGE: 567 jobs (merged disk + memory)
[2026-01-30T17:21:42.505Z] [BOT] ✅ No jobs to archive (all 567 jobs within 7-day window)
[2026-01-30T17:21:42.542Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T17:21:42.542Z] [BOT] ✅ Database saved successfully
[2026-01-30T17:21:44.562Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3239) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*