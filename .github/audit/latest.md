# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T14:03:27.974Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T14:02:43.681Z] ========================================
[2026-01-30T14:02:43.683Z] Discord Bot Execution Log
[2026-01-30T14:02:43.683Z] Environment: GitHub Actions
[2026-01-30T14:02:43.683Z] Node Version: v20.20.0
[2026-01-30T14:02:43.683Z] ========================================
[2026-01-30T14:02:43.683Z] Environment Variables Check:
[2026-01-30T14:02:43.683Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T14:02:43.683Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.683Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T14:02:43.683Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T14:02:43.683Z] 
Multi-Channel Configuration:
[2026-01-30T14:02:43.684Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T14:02:43.684Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T14:02:43.684Z] 
Data Files Check:
[2026-01-30T14:02:43.685Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T14:02:43.702Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3014324 bytes)
[2026-01-30T14:02:43.702Z] 
========================================
[2026-01-30T14:02:43.702Z] Starting Enhanced Discord Bot...
[2026-01-30T14:02:43.702Z] ========================================
[2026-01-30T14:02:44.243Z] [BOT] ✅ Loaded V2 database: 467 jobs
[2026-01-30T14:02:45.037Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T14:02:45.038Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T14:02:45.038Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T14:02:45.152Z] [BOT] ✅ Loaded pending queue: 2912 total (2424 pending, 50 enriched, 438 posted)
[2026-01-30T14:02:45.152Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T14:02:45.152Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T14:02:45.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T14:02:45.153Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T14:02:45.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T14:02:45.154Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T14:02:45.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-30T14:02:45.154Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T14:02:45.154Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T14:02:45.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T14:02:45.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T14:02:45.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T14:02:45.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T14:02:45.155Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T14:02:45.155Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T14:02:45.155Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
[2026-01-30T14:02:45.155Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T14:02:45.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T14:02:45.156Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T14:02:45.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
[2026-01-30T14:02:45.156Z] [BOT] ⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T14:02:45.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T14:02:45.156Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T14:02:45.156Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T14:02:45.160Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T14:02:45.161Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Growth & SEO at discord
[2026-01-30T14:02:45.161Z] [BOT] 🚫 Skipping blacklisted job: Staff Product Manager, Payments at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Design Systems at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Machine Learning (Safety) at discord
[2026-01-30T14:02:45.161Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Mobile Architecture at discord
🚫 Skipping blacklisted job: Staff Software Engineer, New Gaming Features at discord
[2026-01-30T14:02:45.161Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Player Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Quest Experiences at discord
[2026-01-30T14:02:45.161Z] [BOT] 🚫 Skipping blacklisted job: Staff Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Staff Software Engineer, Safety Processing at discord
🚫 Skipping blacklisted job: Customer Success Manager - Denver at datadog
🚫 Skipping blacklisted job: Senior Client Partner, Mid-Market (B2B Services)  at reddit
🚫 Skipping blacklisted job: Product Marketing Lead, PEO at gusto
🚫 Skipping blacklisted job: Manager II, Engineering - Runtime at datadog
[2026-01-30T14:02:45.161Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager (Serverless Monitoring) at datadog
🚫 Skipping blacklisted job: Director of Engineering, v0 at vercel
🚫 Skipping blacklisted job: Senior Product Manager - Flex Logs at datadog
[2026-01-30T14:02:45.162Z] [BOT] 🚫 Skipping blacklisted job: Business Value Manager - Enterprise East at datadog
[2026-01-30T14:02:45.271Z] [BOT] ✅ Loaded pending queue: 2912 total (2424 pending, 50 enriched, 438 posted)
[2026-01-30T14:02:45.454Z] [BOT] ✅ Saved pending queue: 2893 total (2424 pending, 31 enriched, 438 posted)
🗑️ Removed 19 blacklisted jobs from pending queue
📋 After blacklist filter: 17 jobs (19 blacklisted)
[2026-01-30T14:02:45.454Z] [BOT] 📋 After data quality filter: 17 jobs (0 invalid)
[2026-01-30T14:02:45.455Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
[2026-01-30T14:02:45.455Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Strategic Account Executive @ datadog: new york, new york, usa, boston, massachusetts, usa, remote, chicago, illinois, usa
[2026-01-30T14:02:45.455Z] [BOT] - Enterprise Sales Executive @ datadog: remote, boston, massachusetts, usa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T14:02:45.460Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-30T14:02:45.460Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
[2026-01-30T14:02:45.461Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:02:45.480Z] [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T14:02:45.781Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T14:02:45.781Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T14:02:45.782Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T14:02:45.782Z] [BOT] 💾 BEFORE MERGE: 468 jobs in memory (cached)
[2026-01-30T14:02:45.793Z] [BOT] ✅ Loaded V2 database: 467 jobs
💾 DISK STATE: 467 jobs on disk
[2026-01-30T14:02:45.793Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=468
[2026-01-30T14:02:45.795Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:02:45.795Z] [BOT] 💾 AFTER MERGE: 468 jobs (merged disk + memory)
[2026-01-30T14:02:45.795Z] [BOT] ✅ No jobs to archive (all 468 jobs within 7-day window)
[2026-01-30T14:02:45.831Z] [BOT] 💾 Saved posted_jobs.json: 468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:02:47.625Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T14:02:47.625Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
[2026-01-30T14:02:47.626Z] [BOT] 💾 BEFORE MERGE: 468 jobs in memory (cached)
[2026-01-30T14:02:47.639Z] [BOT] ✅ Loaded V2 database: 468 jobs
[2026-01-30T14:02:47.639Z] [BOT] 💾 DISK STATE: 468 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=468
[2026-01-30T14:02:47.640Z] [BOT] 🔀 Deep merged: Strategic Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T14:02:47.640Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 468 jobs (merged disk + memory)
[2026-01-30T14:02:47.641Z] [BOT] ✅ No jobs to archive (all 468 jobs within 7-day window)
[2026-01-30T14:02:47.672Z] [BOT] 💾 Saved posted_jobs.json: 468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:02:49.173Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
   Category: TECH (default)
[2026-01-30T14:02:49.173Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:02:49.489Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #💻・tech-jobs
[2026-01-30T14:02:49.489Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-30T14:02:49.489Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 469 jobs in memory (cached)
[2026-01-30T14:02:49.499Z] [BOT] ✅ Loaded V2 database: 468 jobs
💾 DISK STATE: 468 jobs on disk
[2026-01-30T14:02:49.499Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=469
[2026-01-30T14:02:49.500Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 469 jobs (merged disk + memory)
[2026-01-30T14:02:49.500Z] [BOT] ✅ No jobs to archive (all 469 jobs within 7-day window)
[2026-01-30T14:02:49.531Z] [BOT] 💾 Saved posted_jobs.json: 469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:02:51.469Z] [BOT] ✅ Posted message: Enterprise Sales Executive @ datadog in #🏠・JID_ead674af
[2026-01-30T14:02:51.469Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T14:02:51.469Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive @ datadog → location channel (2 total channels)
[2026-01-30T14:02:51.470Z] [BOT] 💾 BEFORE MERGE: 469 jobs in memory (cached)
[2026-01-30T14:02:51.479Z] [BOT] ✅ Loaded V2 database: 469 jobs
💾 DISK STATE: 469 jobs on disk
[2026-01-30T14:02:51.479Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=469
[2026-01-30T14:02:51.480Z] [BOT] 🔀 Deep merged: Enterprise Sales Executive @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T14:02:51.480Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 469 jobs (merged disk + memory)
[2026-01-30T14:02:51.481Z] [BOT] ✅ No jobs to archive (all 469 jobs within 7-day window)
[2026-01-30T14:02:51.513Z] [BOT] 💾 Saved posted_jobs.json: 469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:02:53.014Z] [BOT] 📍 [ROUTING] "Software Engineer, Mobile" @ discord
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:02:53.282Z] [BOT] ✅ Posted message: Software Engineer, Mobile @ discord in #💻・tech-jobs
[2026-01-30T14:02:53.282Z] [BOT] ✅ Industry: Software Engineer, Mobile @ discord
[2026-01-30T14:02:53.283Z] [BOT] 💾 Added channel posting: Software Engineer, Mobile @ discord → category channel (1 total channels)
[2026-01-30T14:02:53.283Z] [BOT] 💾 BEFORE MERGE: 470 jobs in memory (cached)
[2026-01-30T14:02:53.297Z] [BOT] ✅ Loaded V2 database: 469 jobs
💾 DISK STATE: 469 jobs on disk
[2026-01-30T14:02:53.297Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=470
[2026-01-30T14:02:53.301Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:02:53.301Z] [BOT] 💾 AFTER MERGE: 470 jobs (merged disk + memory)
[2026-01-30T14:02:53.302Z] [BOT] ✅ No jobs to archive (all 470 jobs within 7-day window)
[2026-01-30T14:02:53.332Z] [BOT] 💾 Saved posted_jobs.json: 470 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:02:54.834Z] [BOT] 📍 [ROUTING] "Software Engineer - Realtime Infrastructure" @ discord
[2026-01-30T14:02:54.834Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:02:55.089Z] [BOT] ✅ Posted message: Software Engineer - Realtime Infrastructure @ discord in #💻・tech-jobs
[2026-01-30T14:02:55.089Z] [BOT] ✅ Industry: Software Engineer - Realtime Infrastructure @ discord
[2026-01-30T14:02:55.090Z] [BOT] 💾 Added channel posting: Software Engineer - Realtime Infrastructure @ discord → category channel (1 total channels)
💾 BEFORE MERGE: 471 jobs in memory (cached)
[2026-01-30T14:02:55.099Z] [BOT] ✅ Loaded V2 database: 470 jobs
💾 DISK STATE: 470 jobs on disk
[2026-01-30T14:02:55.100Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=471
[2026-01-30T14:02:55.101Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:02:55.101Z] [BOT] 💾 AFTER MERGE: 471 jobs (merged disk + memory)
[2026-01-30T14:02:55.101Z] [BOT] ✅ No jobs to archive (all 471 jobs within 7-day window)
[2026-01-30T14:02:55.133Z] [BOT] 💾 Saved posted_jobs.json: 471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:02:56.636Z] [BOT] 📍 [ROUTING] "Builder Evangelist " @ airtable
[2026-01-30T14:02:56.636Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:02:56.952Z] [BOT] ✅ Posted message: Builder Evangelist  @ airtable in #💻・tech-jobs
[2026-01-30T14:02:56.952Z] [BOT] ✅ Industry: Builder Evangelist  @ airtable
[2026-01-30T14:02:56.952Z] [BOT] 💾 Added channel posting: Builder Evangelist  @ airtable → category channel (1 total channels)
[2026-01-30T14:02:56.952Z] [BOT] 💾 BEFORE MERGE: 472 jobs in memory (cached)
[2026-01-30T14:02:56.967Z] [BOT] ✅ Loaded V2 database: 471 jobs
[2026-01-30T14:02:56.967Z] [BOT] 💾 DISK STATE: 471 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=472
[2026-01-30T14:02:56.968Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:02:56.968Z] [BOT] 💾 AFTER MERGE: 472 jobs (merged disk + memory)
[2026-01-30T14:02:56.969Z] [BOT] ✅ No jobs to archive (all 472 jobs within 7-day window)
[2026-01-30T14:02:57.002Z] [BOT] 💾 Saved posted_jobs.json: 472 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:02:58.503Z] [BOT] 📍 [ROUTING] "Recruiter II - Technical Solutions" @ datadog
[2026-01-30T14:02:58.504Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:02:58.748Z] [BOT] ✅ Posted message: Recruiter II - Technical Solutions @ datadog in #💻・tech-jobs
[2026-01-30T14:02:58.749Z] [BOT] ✅ Industry: Recruiter II - Technical Solutions @ datadog
[2026-01-30T14:02:58.749Z] [BOT] 💾 Added channel posting: Recruiter II - Technical Solutions @ datadog → category channel (1 total channels)
[2026-01-30T14:02:58.749Z] [BOT] 💾 BEFORE MERGE: 473 jobs in memory (cached)
[2026-01-30T14:02:58.758Z] [BOT] ✅ Loaded V2 database: 472 jobs
💾 DISK STATE: 472 jobs on disk
[2026-01-30T14:02:58.758Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=473
[2026-01-30T14:02:58.760Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:02:58.760Z] [BOT] 💾 AFTER MERGE: 473 jobs (merged disk + memory)
[2026-01-30T14:02:58.760Z] [BOT] ✅ No jobs to archive (all 473 jobs within 7-day window)
[2026-01-30T14:02:58.789Z] [BOT] 💾 Saved posted_jobs.json: 473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:00.671Z] [BOT] ✅ Posted message: Recruiter II - Technical Solutions @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T14:03:00.671Z] [BOT] 💾 Added channel posting: Recruiter II - Technical Solutions @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 473 jobs in memory (cached)
[2026-01-30T14:03:00.682Z] [BOT] ✅ Loaded V2 database: 473 jobs
[2026-01-30T14:03:00.682Z] [BOT] 💾 DISK STATE: 473 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=473
[2026-01-30T14:03:00.683Z] [BOT] 🔀 Deep merged: Recruiter II - Technical Solutions @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T14:03:00.684Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 473 jobs (merged disk + memory)
[2026-01-30T14:03:00.684Z] [BOT] ✅ No jobs to archive (all 473 jobs within 7-day window)
[2026-01-30T14:03:00.713Z] [BOT] 💾 Saved posted_jobs.json: 473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:02.215Z] [BOT] 📍 [ROUTING] "Area Vice President, Enterprise Sales - Public Sector" @ datadog
[2026-01-30T14:03:02.216Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T14:03:02.499Z] [BOT] ✅ Posted message: Area Vice President, Enterprise Sales - Public Sector @ datadog in #💻・tech-jobs
  ✅ Industry: Area Vice President, Enterprise Sales - Public Sector @ datadog
[2026-01-30T14:03:02.499Z] [BOT] 💾 Added channel posting: Area Vice President, Enterprise Sales - Public Sector @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 474 jobs in memory (cached)
[2026-01-30T14:03:02.509Z] [BOT] ✅ Loaded V2 database: 473 jobs
💾 DISK STATE: 473 jobs on disk
[2026-01-30T14:03:02.509Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=474
[2026-01-30T14:03:02.511Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 474 jobs (merged disk + memory)
[2026-01-30T14:03:02.511Z] [BOT] ✅ No jobs to archive (all 474 jobs within 7-day window)
[2026-01-30T14:03:02.540Z] [BOT] 💾 Saved posted_jobs.json: 474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:04.523Z] [BOT] ✅ Posted message: Area Vice President, Enterprise Sales - Public Sector @ datadog in #🏠・JID_ead674af
[2026-01-30T14:03:04.524Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T14:03:04.524Z] [BOT] 💾 Added channel posting: Area Vice President, Enterprise Sales - Public Sector @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 474 jobs in memory (cached)
[2026-01-30T14:03:04.535Z] [BOT] ✅ Loaded V2 database: 474 jobs
💾 DISK STATE: 474 jobs on disk
[2026-01-30T14:03:04.535Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=474
[2026-01-30T14:03:04.536Z] [BOT] 🔀 Deep merged: Area Vice President, Enterprise Sales - Public Sector @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T14:03:04.536Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 474 jobs (merged disk + memory)
[2026-01-30T14:03:04.537Z] [BOT] ✅ No jobs to archive (all 474 jobs within 7-day window)
[2026-01-30T14:03:04.566Z] [BOT] 💾 Saved posted_jobs.json: 474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:09.069Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T14:03:09.069Z] [BOT] 📍 [ROUTING] "Software Engineer, Payments" @ discord
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-30T14:03:09.069Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T14:03:09.376Z] [BOT] ✅ Posted message: Software Engineer, Payments @ discord in #📊・JID_fb739488
  ✅ Industry: Software Engineer, Payments @ discord
[2026-01-30T14:03:09.376Z] [BOT] 💾 Added channel posting: Software Engineer, Payments @ discord → category channel (1 total channels)
[2026-01-30T14:03:09.376Z] [BOT] 💾 BEFORE MERGE: 475 jobs in memory (cached)
[2026-01-30T14:03:09.386Z] [BOT] ✅ Loaded V2 database: 474 jobs
💾 DISK STATE: 474 jobs on disk
[2026-01-30T14:03:09.386Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=475
[2026-01-30T14:03:09.387Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 475 jobs (merged disk + memory)
[2026-01-30T14:03:09.388Z] [BOT] ✅ No jobs to archive (all 475 jobs within 7-day window)
[2026-01-30T14:03:09.417Z] [BOT] 💾 Saved posted_jobs.json: 475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:13.920Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T14:03:13.921Z] [BOT] 📍 [ROUTING] "AI Research Engineer – Datadog AI Research (DAIR)" @ datadog
   Category: AI (matched: "AI/ML")
[2026-01-30T14:03:13.921Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T14:03:14.200Z] [BOT] ✅ Posted message: AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #🤖・ai-jobs
  ✅ Industry: AI Research Engineer – Datadog AI Research (DAIR) @ datadog
[2026-01-30T14:03:14.200Z] [BOT] 💾 Added channel posting: AI Research Engineer – Datadog AI Research (DAIR) @ datadog → category channel (1 total channels)
[2026-01-30T14:03:14.201Z] [BOT] 💾 BEFORE MERGE: 476 jobs in memory (cached)
[2026-01-30T14:03:14.216Z] [BOT] ✅ Loaded V2 database: 475 jobs
💾 DISK STATE: 475 jobs on disk
[2026-01-30T14:03:14.216Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=476
[2026-01-30T14:03:14.219Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:03:14.220Z] [BOT] 💾 AFTER MERGE: 476 jobs (merged disk + memory)
[2026-01-30T14:03:14.220Z] [BOT] ✅ No jobs to archive (all 476 jobs within 7-day window)
[2026-01-30T14:03:14.258Z] [BOT] 💾 Saved posted_jobs.json: 476 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:15.910Z] [BOT] ✅ Posted message: AI Research Engineer – Datadog AI Research (DAIR) @ datadog in #🗽・JID_98d4f0de
[2026-01-30T14:03:15.910Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T14:03:15.910Z] [BOT] 💾 Added channel posting: AI Research Engineer – Datadog AI Research (DAIR) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 476 jobs in memory (cached)
[2026-01-30T14:03:15.919Z] [BOT] ✅ Loaded V2 database: 476 jobs
💾 DISK STATE: 476 jobs on disk
[2026-01-30T14:03:15.920Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=476
[2026-01-30T14:03:15.921Z] [BOT] 🔀 Deep merged: AI Research Engineer – Datadog AI Research (DAIR) @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 476 jobs (merged disk + memory)
[2026-01-30T14:03:15.922Z] [BOT] ✅ No jobs to archive (all 476 jobs within 7-day window)
[2026-01-30T14:03:15.955Z] [BOT] 💾 Saved posted_jobs.json: 476 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:17.457Z] [BOT] 📍 [ROUTING] "AI Research Scientist – Datadog AI Research (DAIR)" @ datadog
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T14:03:17.457Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T14:03:17.689Z] [BOT] ✅ Posted message: AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #🤖・ai-jobs
  ✅ Industry: AI Research Scientist – Datadog AI Research (DAIR) @ datadog
[2026-01-30T14:03:17.690Z] [BOT] 💾 Added channel posting: AI Research Scientist – Datadog AI Research (DAIR) @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 477 jobs in memory (cached)
[2026-01-30T14:03:17.703Z] [BOT] ✅ Loaded V2 database: 476 jobs
[2026-01-30T14:03:17.703Z] [BOT] 💾 DISK STATE: 476 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=477
[2026-01-30T14:03:17.705Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:03:17.705Z] [BOT] 💾 AFTER MERGE: 477 jobs (merged disk + memory)
[2026-01-30T14:03:17.705Z] [BOT] ✅ No jobs to archive (all 477 jobs within 7-day window)
[2026-01-30T14:03:17.743Z] [BOT] 💾 Saved posted_jobs.json: 477 active jobs
[2026-01-30T14:03:17.745Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:19.707Z] [BOT] ✅ Posted message: AI Research Scientist – Datadog AI Research (DAIR) @ datadog in #🗽・JID_98d4f0de
[2026-01-30T14:03:19.707Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T14:03:19.707Z] [BOT] 💾 Added channel posting: AI Research Scientist – Datadog AI Research (DAIR) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 477 jobs in memory (cached)
[2026-01-30T14:03:19.717Z] [BOT] ✅ Loaded V2 database: 477 jobs
[2026-01-30T14:03:19.717Z] [BOT] 💾 DISK STATE: 477 jobs on disk
[2026-01-30T14:03:19.717Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=477
[2026-01-30T14:03:19.718Z] [BOT] 🔀 Deep merged: AI Research Scientist – Datadog AI Research (DAIR) @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T14:03:19.718Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 477 jobs (merged disk + memory)
[2026-01-30T14:03:19.719Z] [BOT] ✅ No jobs to archive (all 477 jobs within 7-day window)
[2026-01-30T14:03:19.748Z] [BOT] 💾 Saved posted_jobs.json: 477 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T14:03:24.250Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T14:03:24.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64f241d9..." not found, but found as SHA256 "972bc286a9bcc289"
[2026-01-30T14:03:24.251Z] [BOT] ⏭️  Skipping duplicate: JID_64f241d9 (posted within 7 days)
[2026-01-30T14:03:24.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3c3c2864..." not found, but found as SHA256 "f1e7beb0eb4365f6"
⏭️  Skipping duplicate: JID_3c3c2864 (posted within 7 days)
[2026-01-30T14:03:24.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d68ea353..." not found, but found as SHA256 "878b22e664a5233c"
⏭️  Skipping duplicate: JID_041d5ff5 (posted within 7 days)
[2026-01-30T14:03:24.251Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "26f1a7e718d687dd"
[2026-01-30T14:03:24.252Z] [BOT] ⏭️  Skipping duplicate: JID_b454904b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "34fe655b32ee3e93"
⏭️  Skipping duplicate: JID_9f9fd338 (posted within 7 days)
[2026-01-30T14:03:24.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "473518b6b79e6733"
⏭️  Skipping duplicate: JID_85cc823a (posted within 7 days)
[2026-01-30T14:03:24.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_73ce1b3c..." not found, but found as SHA256 "9ca76292a8c8ef53"
⏭️  Skipping duplicate: JID_73ce1b3c (posted within 7 days)
[2026-01-30T14:03:24.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dcc2a209..." not found, but found as SHA256 "dfccfffd8fb036d7"
⏭️  Skipping duplicate: JID_dcc2a209 (posted within 7 days)
[2026-01-30T14:03:24.252Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3f5157b7..." not found, but found as SHA256 "b3ec48193dcd8dd6"
[2026-01-30T14:03:24.252Z] [BOT] ⏭️  Skipping duplicate: JID_3f5157b7 (posted within 7 days)
[2026-01-30T14:03:24.253Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_adb6fafc..." not found, but found as SHA256 "f3317430189edbed"
⏭️  Skipping duplicate: JID_adb6fafc (posted within 7 days)
[2026-01-30T14:03:24.359Z] [BOT] ✅ Loaded pending queue: 2893 total (2424 pending, 31 enriched, 438 posted)
[2026-01-30T14:03:24.536Z] [BOT] ✅ Saved pending queue: 2893 total (2424 pending, 21 enriched, 448 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T14:03:24.536Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T14:03:24.619Z] [BOT] 📂 Loaded 10529 existing routing entries
[2026-01-30T14:03:24.759Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-30T14:03:24.760Z] [BOT] New entries: 10
   Total entries: 10539
   Timestamp: 2026-01-30T14:03:24.716Z
[2026-01-30T14:03:24.760Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T14:03:24.761Z] [BOT] Total attempts: 49
   Successful: 16
   Failed: 0
   Skipped: 33
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 16
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🗽・JID_98d4f0de: 4 posts
     3. #🏠・JID_ead674af: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 477 jobs in memory (cached)
[2026-01-30T14:03:24.772Z] [BOT] ✅ Loaded V2 database: 477 jobs
[2026-01-30T14:03:24.772Z] [BOT] 💾 DISK STATE: 477 jobs on disk
[2026-01-30T14:03:24.772Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=477
[2026-01-30T14:03:24.773Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T14:03:24.773Z] [BOT] 💾 AFTER MERGE: 477 jobs (merged disk + memory)
[2026-01-30T14:03:24.773Z] [BOT] ✅ No jobs to archive (all 477 jobs within 7-day window)
[2026-01-30T14:03:24.802Z] [BOT] 💾 Saved posted_jobs.json: 477 active jobs
[2026-01-30T14:03:24.803Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T14:03:26.834Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2551) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*