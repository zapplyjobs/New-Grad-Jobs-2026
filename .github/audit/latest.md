# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T12:01:12.556Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T12:00:33.131Z] ========================================
[2026-01-30T12:00:33.133Z] Discord Bot Execution Log
[2026-01-30T12:00:33.133Z] Environment: GitHub Actions
[2026-01-30T12:00:33.133Z] Node Version: v20.20.0
[2026-01-30T12:00:33.133Z] ========================================
[2026-01-30T12:00:33.133Z] Environment Variables Check:
[2026-01-30T12:00:33.133Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T12:00:33.133Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.133Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T12:00:33.134Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T12:00:33.134Z] 
Multi-Channel Configuration:
[2026-01-30T12:00:33.134Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T12:00:33.134Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T12:00:33.135Z] 
Data Files Check:
[2026-01-30T12:00:33.135Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T12:00:33.152Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2804457 bytes)
[2026-01-30T12:00:33.153Z] 
========================================
[2026-01-30T12:00:33.153Z] Starting Enhanced Discord Bot...
[2026-01-30T12:00:33.153Z] ========================================
[2026-01-30T12:00:33.697Z] [BOT] ✅ Loaded V2 database: 429 jobs
[2026-01-30T12:00:34.252Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T12:00:34.253Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T12:00:34.253Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T12:00:34.377Z] [BOT] ✅ Loaded pending queue: 2920 total (2470 pending, 50 enriched, 400 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:00:34.378Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T12:00:34.378Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:00:34.378Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T12:00:34.378Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T12:00:34.379Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T12:00:34.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T12:00:34.379Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-30T12:00:34.379Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T12:00:34.380Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T12:00:34.380Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T12:00:34.380Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T12:00:34.381Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T12:00:34.381Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T12:00:34.385Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T12:00:34.385Z] [BOT] 🚫 Skipping blacklisted job: Sr Staff Software Engineer, Gusto Pro at gusto
[2026-01-30T12:00:34.385Z] [BOT] 🚫 Skipping blacklisted job: Product Lead, v0 at vercel
🚫 Skipping blacklisted job: Senior Accountant (Platform Accounting) at gusto
[2026-01-30T12:00:34.493Z] [BOT] ✅ Loaded pending queue: 2920 total (2470 pending, 50 enriched, 400 posted)
[2026-01-30T12:00:34.670Z] [BOT] ✅ Saved pending queue: 2917 total (2470 pending, 47 enriched, 400 posted)
🗑️ Removed 3 blacklisted jobs from pending queue
[2026-01-30T12:00:34.670Z] [BOT] 📋 After blacklist filter: 33 jobs (3 blacklisted)
[2026-01-30T12:00:34.670Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-30T12:00:34.671Z] [BOT] 📋 After multi-location grouping: 22 unique jobs to post
[2026-01-30T12:00:34.671Z] [BOT] (11 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Strategic Account Executive (SLED) @ datadog: remote, boston, massachusetts, usa; new york, new york, usa
   - Strategic Account Executive @ datadog: remote, san francisco, california, usa, new york, new york, usa, boston, massachusetts, usa, chicago, illinois, usa
   - Key Accounts Executive @ datadog: chicago, illinois, usa; dallas, texas, usa; san francisco, california, usa, boston, massachusetts, usa; new york, new york, usa
[2026-01-30T12:00:34.671Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T12:00:34.675Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T12:00:34.676Z] [BOT] 📍 [ROUTING] "Researcher, Core Product Strategy" @ figma
[2026-01-30T12:00:34.676Z] [BOT] Category: TECH (matched: "pm")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:00:34.693Z] [BOT ERROR] (node:2896) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T12:00:34.883Z] [BOT] ✅ Posted message: Researcher, Core Product Strategy @ figma in #💻・tech-jobs
[2026-01-30T12:00:34.883Z] [BOT] ✅ Industry: Researcher, Core Product Strategy @ figma
[2026-01-30T12:00:34.883Z] [BOT] 💾 Added channel posting: Researcher, Core Product Strategy @ figma → category channel (1 total channels)
[2026-01-30T12:00:34.884Z] [BOT] 💾 BEFORE MERGE: 430 jobs in memory (cached)
[2026-01-30T12:00:34.893Z] [BOT] ✅ Loaded V2 database: 429 jobs
💾 DISK STATE: 429 jobs on disk
[2026-01-30T12:00:34.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=430
[2026-01-30T12:00:34.894Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:00:34.895Z] [BOT] 💾 AFTER MERGE: 430 jobs (merged disk + memory)
[2026-01-30T12:00:34.895Z] [BOT] ✅ No jobs to archive (all 430 jobs within 7-day window)
[2026-01-30T12:00:34.929Z] [BOT] 💾 Saved posted_jobs.json: 430 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:36.431Z] [BOT] 📍 [ROUTING] "Strategic Account Executive (SLED)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:00:36.596Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #💻・tech-jobs
[2026-01-30T12:00:36.596Z] [BOT] ✅ Industry: Strategic Account Executive (SLED) @ datadog
[2026-01-30T12:00:36.597Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 431 jobs in memory (cached)
[2026-01-30T12:00:36.606Z] [BOT] ✅ Loaded V2 database: 430 jobs
💾 DISK STATE: 430 jobs on disk
[2026-01-30T12:00:36.609Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=431
[2026-01-30T12:00:36.610Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:00:36.610Z] [BOT] 💾 AFTER MERGE: 431 jobs (merged disk + memory)
[2026-01-30T12:00:36.611Z] [BOT] ✅ No jobs to archive (all 431 jobs within 7-day window)
[2026-01-30T12:00:36.641Z] [BOT] 💾 Saved posted_jobs.json: 431 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:38.333Z] [BOT] ✅ Posted message: Strategic Account Executive (SLED) @ datadog in #🏠・JID_ead674af
[2026-01-30T12:00:38.333Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:00:38.333Z] [BOT] 💾 Added channel posting: Strategic Account Executive (SLED) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 431 jobs in memory (cached)
[2026-01-30T12:00:38.343Z] [BOT] ✅ Loaded V2 database: 431 jobs
💾 DISK STATE: 431 jobs on disk
[2026-01-30T12:00:38.343Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=431
[2026-01-30T12:00:38.344Z] [BOT] 🔀 Deep merged: Strategic Account Executive (SLED) @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 431 jobs (merged disk + memory)
[2026-01-30T12:00:38.345Z] [BOT] ✅ No jobs to archive (all 431 jobs within 7-day window)
[2026-01-30T12:00:38.376Z] [BOT] 💾 Saved posted_jobs.json: 431 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:39.878Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
[2026-01-30T12:00:39.879Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:00:40.018Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T12:00:40.019Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T12:00:40.019Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 432 jobs in memory (cached)
[2026-01-30T12:00:40.029Z] [BOT] ✅ Loaded V2 database: 431 jobs
💾 DISK STATE: 431 jobs on disk
[2026-01-30T12:00:40.029Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=432
[2026-01-30T12:00:40.030Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 432 jobs (merged disk + memory)
[2026-01-30T12:00:40.031Z] [BOT] ✅ No jobs to archive (all 432 jobs within 7-day window)
[2026-01-30T12:00:40.062Z] [BOT] 💾 Saved posted_jobs.json: 432 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:41.750Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:00:41.750Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 432 jobs in memory (cached)
[2026-01-30T12:00:41.760Z] [BOT] ✅ Loaded V2 database: 432 jobs
💾 DISK STATE: 432 jobs on disk
[2026-01-30T12:00:41.761Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=432
[2026-01-30T12:00:41.762Z] [BOT] 🔀 Deep merged: Strategic Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 432 jobs (merged disk + memory)
[2026-01-30T12:00:41.762Z] [BOT] ✅ No jobs to archive (all 432 jobs within 7-day window)
[2026-01-30T12:00:41.792Z] [BOT] 💾 Saved posted_jobs.json: 432 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:43.294Z] [BOT] 📍 [ROUTING] "RPA Developer - Consultant" @ ORG_b7b9be5f Tilly
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:00:43.468Z] [BOT] ✅ Posted message: RPA Developer - Consultant @ ORG_b7b9be5f Tilly in #💻・tech-jobs
  ✅ Industry: RPA Developer - Consultant @ ORG_b7b9be5f Tilly
[2026-01-30T12:00:43.468Z] [BOT] 💾 Added channel posting: RPA Developer - Consultant @ ORG_b7b9be5f Tilly → category channel (1 total channels)
[2026-01-30T12:00:43.468Z] [BOT] 💾 BEFORE MERGE: 433 jobs in memory (cached)
[2026-01-30T12:00:43.485Z] [BOT] ✅ Loaded V2 database: 432 jobs
💾 DISK STATE: 432 jobs on disk
[2026-01-30T12:00:43.486Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=433
[2026-01-30T12:00:43.487Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:00:43.487Z] [BOT] 💾 AFTER MERGE: 433 jobs (merged disk + memory)
[2026-01-30T12:00:43.488Z] [BOT] ✅ No jobs to archive (all 433 jobs within 7-day window)
[2026-01-30T12:00:43.525Z] [BOT] 💾 Saved posted_jobs.json: 433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:45.028Z] [BOT] 📍 [ROUTING] "Software Engineer - Loans Origination" @ ORG_b21b93a4
   Category: TECH (matched: "software")
[2026-01-30T12:00:45.028Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:00:45.196Z] [BOT] ✅ Posted message: Software Engineer - Loans Origination @ ORG_b21b93a4 in #💻・tech-jobs
[2026-01-30T12:00:45.197Z] [BOT] ✅ Industry: Software Engineer - Loans Origination @ ORG_b21b93a4
[2026-01-30T12:00:45.197Z] [BOT] 💾 Added channel posting: Software Engineer - Loans Origination @ ORG_b21b93a4 → category channel (1 total channels)
[2026-01-30T12:00:45.197Z] [BOT] 💾 BEFORE MERGE: 434 jobs in memory (cached)
[2026-01-30T12:00:45.206Z] [BOT] ✅ Loaded V2 database: 433 jobs
💾 DISK STATE: 433 jobs on disk
[2026-01-30T12:00:45.207Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=434
[2026-01-30T12:00:45.208Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:00:45.208Z] [BOT] 💾 AFTER MERGE: 434 jobs (merged disk + memory)
[2026-01-30T12:00:45.208Z] [BOT] ✅ No jobs to archive (all 434 jobs within 7-day window)
[2026-01-30T12:00:45.241Z] [BOT] 💾 Saved posted_jobs.json: 434 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:46.743Z] [BOT] 📍 [ROUTING] "Engineer 1 - Software Engineering-"Fixed-Term Contract"" @ ORG_9a43c2ab International
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:00:46.929Z] [BOT] ✅ Posted message: Engineer 1 - Software Engineering-"Fixed-Term Contract" @ ORG_9a43c2ab International in #💻・tech-jobs
  ✅ Industry: Engineer 1 - Software Engineering-"Fixed-Term Contract" @ ORG_9a43c2ab International
[2026-01-30T12:00:46.929Z] [BOT] 💾 Added channel posting: Engineer 1 - Software Engineering-"Fixed-Term Contract" @ ORG_9a43c2ab International → category channel (1 total channels)
[2026-01-30T12:00:46.930Z] [BOT] 💾 BEFORE MERGE: 435 jobs in memory (cached)
[2026-01-30T12:00:46.940Z] [BOT] ✅ Loaded V2 database: 434 jobs
💾 DISK STATE: 434 jobs on disk
[2026-01-30T12:00:46.941Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=435
[2026-01-30T12:00:46.945Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:00:46.945Z] [BOT] 💾 AFTER MERGE: 435 jobs (merged disk + memory)
[2026-01-30T12:00:46.945Z] [BOT] ✅ No jobs to archive (all 435 jobs within 7-day window)
[2026-01-30T12:00:46.978Z] [BOT] 💾 Saved posted_jobs.json: 435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:51.481Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T12:00:51.481Z] [BOT] 📍 [ROUTING] "Indirect Channel Sales Analyst" @ gusto
[2026-01-30T12:00:51.481Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T12:00:51.676Z] [BOT] ✅ Posted message: Indirect Channel Sales Analyst @ gusto in #📊・JID_fb739488
  ✅ Industry: Indirect Channel Sales Analyst @ gusto
[2026-01-30T12:00:51.677Z] [BOT] 💾 Added channel posting: Indirect Channel Sales Analyst @ gusto → category channel (1 total channels)
[2026-01-30T12:00:51.677Z] [BOT] 💾 BEFORE MERGE: 436 jobs in memory (cached)
[2026-01-30T12:00:51.687Z] [BOT] ✅ Loaded V2 database: 435 jobs
💾 DISK STATE: 435 jobs on disk
[2026-01-30T12:00:51.687Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=436
[2026-01-30T12:00:51.688Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 436 jobs (merged disk + memory)
[2026-01-30T12:00:51.688Z] [BOT] ✅ No jobs to archive (all 436 jobs within 7-day window)
[2026-01-30T12:00:51.716Z] [BOT] 💾 Saved posted_jobs.json: 436 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:56.219Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T12:00:56.219Z] [BOT] 📍 [ROUTING] "Data Scientist - Machine Learning & Deep Learning" @ ORG_6bda74c9 Health
   Category: AI (matched: "machine learning")
[2026-01-30T12:00:56.219Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T12:00:56.489Z] [BOT] ✅ Posted message: Data Scientist - Machine Learning & Deep Learning @ ORG_6bda74c9 Health in #🤖・ai-jobs
[2026-01-30T12:00:56.489Z] [BOT] ✅ Industry: Data Scientist - Machine Learning & Deep Learning @ ORG_6bda74c9 Health
[2026-01-30T12:00:56.489Z] [BOT] 💾 Added channel posting: Data Scientist - Machine Learning & Deep Learning @ ORG_6bda74c9 Health → category channel (1 total channels)
[2026-01-30T12:00:56.489Z] [BOT] 💾 BEFORE MERGE: 437 jobs in memory (cached)
[2026-01-30T12:00:56.504Z] [BOT] ✅ Loaded V2 database: 436 jobs
💾 DISK STATE: 436 jobs on disk
[2026-01-30T12:00:56.504Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=437
[2026-01-30T12:00:56.505Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:00:56.505Z] [BOT] 💾 AFTER MERGE: 437 jobs (merged disk + memory)
[2026-01-30T12:00:56.506Z] [BOT] ✅ No jobs to archive (all 437 jobs within 7-day window)
[2026-01-30T12:00:56.537Z] [BOT] 💾 Saved posted_jobs.json: 437 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:00:58.040Z] [BOT] 📍 [ROUTING] "Research Fellow in Cardiovascular MRI Physics" @ ORG_efeccf10 Israel Lahey Health
[2026-01-30T12:00:58.040Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T12:00:58.186Z] [BOT] ✅ Posted message: Research Fellow in Cardiovascular MRI Physics @ ORG_efeccf10 Israel Lahey Health in #🤖・ai-jobs
[2026-01-30T12:00:58.186Z] [BOT] ✅ Industry: Research Fellow in Cardiovascular MRI Physics @ ORG_efeccf10 Israel Lahey Health
[2026-01-30T12:00:58.187Z] [BOT] 💾 Added channel posting: Research Fellow in Cardiovascular MRI Physics @ ORG_efeccf10 Israel Lahey Health → category channel (1 total channels)
[2026-01-30T12:00:58.187Z] [BOT] 💾 BEFORE MERGE: 438 jobs in memory (cached)
[2026-01-30T12:00:58.196Z] [BOT] ✅ Loaded V2 database: 437 jobs
💾 DISK STATE: 437 jobs on disk
[2026-01-30T12:00:58.196Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=438
[2026-01-30T12:00:58.198Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 438 jobs (merged disk + memory)
[2026-01-30T12:00:58.198Z] [BOT] ✅ No jobs to archive (all 438 jobs within 7-day window)
[2026-01-30T12:00:58.232Z] [BOT] 💾 Saved posted_jobs.json: 438 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:01:02.733Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T12:01:02.734Z] [BOT] 📍 [ROUTING] "Digital Analyst" @ ORG_7eb1e1f5
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T12:01:02.905Z] [BOT] ✅ Posted message: Digital Analyst @ ORG_7eb1e1f5 in #💰・finance-jobs
  ✅ Industry: Digital Analyst @ ORG_7eb1e1f5
[2026-01-30T12:01:02.905Z] [BOT] 💾 Added channel posting: Digital Analyst @ ORG_7eb1e1f5 → category channel (1 total channels)
[2026-01-30T12:01:02.905Z] [BOT] 💾 BEFORE MERGE: 439 jobs in memory (cached)
[2026-01-30T12:01:02.921Z] [BOT] ✅ Loaded V2 database: 438 jobs
💾 DISK STATE: 438 jobs on disk
[2026-01-30T12:01:02.921Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=439
[2026-01-30T12:01:02.922Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:01:02.922Z] [BOT] 💾 AFTER MERGE: 439 jobs (merged disk + memory)
[2026-01-30T12:01:02.923Z] [BOT] ✅ No jobs to archive (all 439 jobs within 7-day window)
[2026-01-30T12:01:02.962Z] [BOT] 💾 Saved posted_jobs.json: 439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:01:04.669Z] [BOT] ✅ Posted message: Digital Analyst @ ORG_7eb1e1f5 in #🗽・JID_98d4f0de
[2026-01-30T12:01:04.669Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T12:01:04.669Z] [BOT] 💾 Added channel posting: Digital Analyst @ ORG_7eb1e1f5 → location channel (2 total channels)
💾 BEFORE MERGE: 439 jobs in memory (cached)
[2026-01-30T12:01:04.678Z] [BOT] ✅ Loaded V2 database: 439 jobs
💾 DISK STATE: 439 jobs on disk
[2026-01-30T12:01:04.678Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=439
[2026-01-30T12:01:04.680Z] [BOT] 🔀 Deep merged: Digital Analyst @ ORG_7eb1e1f5 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T12:01:04.680Z] [BOT] 💾 AFTER MERGE: 439 jobs (merged disk + memory)
[2026-01-30T12:01:04.680Z] [BOT] ✅ No jobs to archive (all 439 jobs within 7-day window)
[2026-01-30T12:01:04.708Z] [BOT] 💾 Saved posted_jobs.json: 439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:01:09.210Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T12:01:09.211Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f418ae37..." not found, but found as SHA256 "9c55ec446dc6f2f9"
⏭️  Skipping duplicate: JID_5d3aa3af (posted within 7 days)
[2026-01-30T12:01:09.211Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9162e26c..." not found, but found as SHA256 "698db97d67e14658"
⏭️  Skipping duplicate: JID_63328820 (posted within 7 days)
[2026-01-30T12:01:09.211Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_26efe88c-cvs_heal..." not found, but found as SHA256 "4a39c7e085dcc152"
⏭️  Skipping duplicate: JID_26efe88c-cvs_health_careers-JID_3dbf9c29-learning_r0760932 (posted within 7 days)
[2026-01-30T12:01:09.211Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2261fdc2..." not found, but found as SHA256 "fb26f6d6d19da1f4"
⏭️  Skipping duplicate: JID_2261fdc2 (posted within 7 days)
[2026-01-30T12:01:09.211Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_57ac7656..." not found, but found as SHA256 "bf492d923312496f"
⏭️  Skipping duplicate: JID_57ac7656 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2acfee31-..." not found, but found as SHA256 "23b64dddb0359fc3"
⏭️  Skipping duplicate: JID_c24f2646-physics_jr89902 (posted within 7 days)
[2026-01-30T12:01:09.212Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_99c873f8..." not found, but found as SHA256 "7e21e31c57223ffd"
⏭️  Skipping duplicate: JID_d0ef142b-consultant_jr104976 (posted within 7 days)
[2026-01-30T12:01:09.212Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_22b48374..." not found, but found as SHA256 "c839d94b4229a3f5"
⏭️  Skipping duplicate: JID_08c64584-analyst_r019733 (posted within 7 days)
[2026-01-30T12:01:09.213Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7329d21b..." not found, but found as SHA256 "1433cc9c67a5b6e7"
⏭️  Skipping duplicate: JID_7329d21b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0efe0a8d..." not found, but found as SHA256 "657b1eb1357923b5"
⏭️  Skipping duplicate: JID_0efe0a8d (posted within 7 days)
[2026-01-30T12:01:09.325Z] [BOT] ✅ Loaded pending queue: 2917 total (2470 pending, 47 enriched, 400 posted)
[2026-01-30T12:01:09.514Z] [BOT] ✅ Saved pending queue: 2917 total (2470 pending, 37 enriched, 410 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T12:01:09.600Z] [BOT] 📂 Loaded 10491 existing routing entries
[2026-01-30T12:01:09.746Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T12:01:09.746Z] [BOT] Total entries: 10501
   Timestamp: 2026-01-30T12:01:09.702Z
[2026-01-30T12:01:09.746Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 30
[2026-01-30T12:01:09.746Z] [BOT] Successful: 13
   Failed: 0
   Skipped: 17
[2026-01-30T12:01:09.747Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T12:01:09.747Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🏠・JID_ead674af: 2 posts
[2026-01-30T12:01:09.747Z] [BOT] 3. #🤖・ai-jobs: 2 posts
     4. #📊・JID_fb739488: 1 posts
     5. #💰・finance-jobs: 1 posts
[2026-01-30T12:01:09.747Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 439 jobs in memory (cached)
[2026-01-30T12:01:09.758Z] [BOT] ✅ Loaded V2 database: 439 jobs
💾 DISK STATE: 439 jobs on disk
[2026-01-30T12:01:09.758Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=439
[2026-01-30T12:01:09.759Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:01:09.759Z] [BOT] 💾 AFTER MERGE: 439 jobs (merged disk + memory)
[2026-01-30T12:01:09.760Z] [BOT] ✅ No jobs to archive (all 439 jobs within 7-day window)
[2026-01-30T12:01:09.787Z] [BOT] 💾 Saved posted_jobs.json: 439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:01:09.788Z] [BOT] ✅ Database saved successfully
[2026-01-30T12:01:11.816Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2896) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*