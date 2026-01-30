# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T12:55:57.553Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T12:55:21.943Z] ========================================
[2026-01-30T12:55:21.945Z] Discord Bot Execution Log
[2026-01-30T12:55:21.945Z] Environment: GitHub Actions
[2026-01-30T12:55:21.945Z] Node Version: v20.20.0
[2026-01-30T12:55:21.945Z] ========================================
[2026-01-30T12:55:21.945Z] Environment Variables Check:
[2026-01-30T12:55:21.945Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T12:55:21.945Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.945Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T12:55:21.946Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T12:55:21.946Z] 
Multi-Channel Configuration:
[2026-01-30T12:55:21.946Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T12:55:21.946Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T12:55:21.946Z] 
Data Files Check:
[2026-01-30T12:55:21.947Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T12:55:21.963Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2963527 bytes)
[2026-01-30T12:55:21.963Z] 
========================================
[2026-01-30T12:55:21.963Z] Starting Enhanced Discord Bot...
[2026-01-30T12:55:21.963Z] ========================================
[2026-01-30T12:55:22.506Z] [BOT] ✅ Loaded V2 database: 459 jobs
[2026-01-30T12:55:22.881Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T12:55:22.882Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T12:55:22.882Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T12:55:22.997Z] [BOT] ✅ Loaded pending queue: 2920 total (2440 pending, 50 enriched, 430 posted)
[2026-01-30T12:55:22.997Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:55:22.998Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T12:55:22.998Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T12:55:22.998Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T12:55:22.998Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T12:55:22.999Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T12:55:22.999Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T12:55:22.999Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T12:55:22.999Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T12:55:23.000Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T12:55:23.000Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T12:55:23.000Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T12:55:23.000Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T12:55:23.000Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
[2026-01-30T12:55:23.000Z] [BOT] ⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T12:55:23.000Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T12:55:23.001Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T12:55:23.001Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T12:55:23.007Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T12:55:23.007Z] [BOT] 🚫 Skipping blacklisted job: Senior Director, Internal Audit at discord
[2026-01-30T12:55:23.007Z] [BOT] 🚫 Skipping blacklisted job: Senior Financial Analyst at discord
🚫 Skipping blacklisted job: Senior Financial Reporting and Technical Accountant at discord
🚫 Skipping blacklisted job: Senior Manager, Commercial Policy at discord
[2026-01-30T12:55:23.007Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Stock Administration at discord
🚫 Skipping blacklisted job: Senior Privacy Counsel at discord
🚫 Skipping blacklisted job: Senior Product Design Manager, Player & Developer Experience at discord
🚫 Skipping blacklisted job: Senior Product Manager, Commerce at discord
🚫 Skipping blacklisted job: Senior Product Marketing Manager, Nitro at discord
🚫 Skipping blacklisted job: Senior Program Manager, Product & Platform Compliance at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Ads at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Machine Learning (Safety) at discord
🚫 Skipping blacklisted job: Senior Software Engineer, Mobile Architecture at discord
[2026-01-30T12:55:23.008Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer - Notifications at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Platform Infrastructure at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Experience at discord
🚫 Skipping blacklisted job: Senior Software Engineer - Safety Processing at discord
🚫 Skipping blacklisted job: Senior Software Engineer - SEO at discord
🚫 Skipping blacklisted job: Senior Technical Program Manager, Safety at discord
[2026-01-30T12:55:23.008Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter (Temporary) at discord
[2026-01-30T12:55:23.114Z] [BOT] ✅ Loaded pending queue: 2920 total (2440 pending, 50 enriched, 430 posted)
[2026-01-30T12:55:23.289Z] [BOT] ✅ Saved pending queue: 2899 total (2440 pending, 29 enriched, 430 posted)
🗑️ Removed 21 blacklisted jobs from pending queue
📋 After blacklist filter: 15 jobs (21 blacklisted)
[2026-01-30T12:55:23.289Z] [BOT] 📋 After data quality filter: 15 jobs (0 invalid)
[2026-01-30T12:55:23.290Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-30T12:55:23.290Z] [BOT] (7 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Strategic Account Executive @ datadog: remote, new york, new york, usa, boston, massachusetts, usa, chicago, illinois, usa
   - Enterprise Sales Executive  @ datadog: new york, new york, usa, remote, boston, massachusetts, usa
⏸️ Limiting to 10 jobs this run, 28 deferred for next run
[2026-01-30T12:55:23.290Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T12:55:23.294Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T12:55:23.294Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
[2026-01-30T12:55:23.294Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:55:23.312Z] [BOT ERROR] (node:3087) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T12:55:23.437Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T12:55:23.437Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T12:55:23.438Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T12:55:23.438Z] [BOT] 💾 BEFORE MERGE: 460 jobs in memory (cached)
[2026-01-30T12:55:23.449Z] [BOT] ✅ Loaded V2 database: 459 jobs
💾 DISK STATE: 459 jobs on disk
[2026-01-30T12:55:23.449Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=460
[2026-01-30T12:55:23.451Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:55:23.451Z] [BOT] 💾 AFTER MERGE: 460 jobs (merged disk + memory)
[2026-01-30T12:55:23.451Z] [BOT] ✅ No jobs to archive (all 460 jobs within 7-day window)
[2026-01-30T12:55:23.484Z] [BOT] 💾 Saved posted_jobs.json: 460 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:25.205Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #🏠・JID_ead674af
[2026-01-30T12:55:25.206Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:55:25.206Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 460 jobs in memory (cached)
[2026-01-30T12:55:25.218Z] [BOT] ✅ Loaded V2 database: 460 jobs
[2026-01-30T12:55:25.218Z] [BOT] 💾 DISK STATE: 460 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=460
[2026-01-30T12:55:25.219Z] [BOT] 🔀 Deep merged: Strategic Account Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T12:55:25.219Z] [BOT] 💾 AFTER MERGE: 460 jobs (merged disk + memory)
[2026-01-30T12:55:25.220Z] [BOT] ✅ No jobs to archive (all 460 jobs within 7-day window)
[2026-01-30T12:55:25.250Z] [BOT] 💾 Saved posted_jobs.json: 460 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:26.750Z] [BOT] 📍 [ROUTING] "Key Accounts Executive" @ datadog
[2026-01-30T12:55:26.750Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:55:27.226Z] [BOT] ✅ Posted message: Key Accounts Executive @ datadog in #💻・tech-jobs
[2026-01-30T12:55:27.226Z] [BOT] ✅ Industry: Key Accounts Executive @ datadog
[2026-01-30T12:55:27.226Z] [BOT] 💾 Added channel posting: Key Accounts Executive @ datadog → category channel (1 total channels)
[2026-01-30T12:55:27.227Z] [BOT] 💾 BEFORE MERGE: 461 jobs in memory (cached)
[2026-01-30T12:55:27.236Z] [BOT] ✅ Loaded V2 database: 460 jobs
[2026-01-30T12:55:27.236Z] [BOT] 💾 DISK STATE: 460 jobs on disk
[2026-01-30T12:55:27.236Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=461
[2026-01-30T12:55:27.237Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:55:27.237Z] [BOT] 💾 AFTER MERGE: 461 jobs (merged disk + memory)
[2026-01-30T12:55:27.237Z] [BOT] ✅ No jobs to archive (all 461 jobs within 7-day window)
[2026-01-30T12:55:27.268Z] [BOT] 💾 Saved posted_jobs.json: 461 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:29.071Z] [BOT] ✅ Posted message: Key Accounts Executive @ datadog in #🗽・JID_98d4f0de
[2026-01-30T12:55:29.072Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T12:55:29.072Z] [BOT] 💾 Added channel posting: Key Accounts Executive @ datadog → location channel (2 total channels)
[2026-01-30T12:55:29.072Z] [BOT] 💾 BEFORE MERGE: 461 jobs in memory (cached)
[2026-01-30T12:55:29.081Z] [BOT] ✅ Loaded V2 database: 461 jobs
💾 DISK STATE: 461 jobs on disk
[2026-01-30T12:55:29.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=461
[2026-01-30T12:55:29.082Z] [BOT] 🔀 Deep merged: Key Accounts Executive @ datadog (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T12:55:29.082Z] [BOT] 💾 AFTER MERGE: 461 jobs (merged disk + memory)
[2026-01-30T12:55:29.083Z] [BOT] ✅ No jobs to archive (all 461 jobs within 7-day window)
[2026-01-30T12:55:29.114Z] [BOT] 💾 Saved posted_jobs.json: 461 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:30.616Z] [BOT] 📍 [ROUTING] " Enterprise Sales Executive (SLED)" @ datadog
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:55:30.788Z] [BOT] ✅ Posted message:  Enterprise Sales Executive (SLED) @ datadog in #💻・tech-jobs
  ✅ Industry:  Enterprise Sales Executive (SLED) @ datadog
[2026-01-30T12:55:30.789Z] [BOT] 💾 Added channel posting:  Enterprise Sales Executive (SLED) @ datadog → category channel (1 total channels)
[2026-01-30T12:55:30.789Z] [BOT] 💾 BEFORE MERGE: 462 jobs in memory (cached)
[2026-01-30T12:55:30.798Z] [BOT] ✅ Loaded V2 database: 461 jobs
💾 DISK STATE: 461 jobs on disk
[2026-01-30T12:55:30.798Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=462
[2026-01-30T12:55:30.799Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 462 jobs (merged disk + memory)
[2026-01-30T12:55:30.800Z] [BOT] ✅ No jobs to archive (all 462 jobs within 7-day window)
[2026-01-30T12:55:30.831Z] [BOT] 💾 Saved posted_jobs.json: 462 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:32.646Z] [BOT] ✅ Posted message:  Enterprise Sales Executive (SLED) @ datadog in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:55:32.646Z] [BOT] 💾 Added channel posting:  Enterprise Sales Executive (SLED) @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 462 jobs in memory (cached)
[2026-01-30T12:55:32.661Z] [BOT] ✅ Loaded V2 database: 462 jobs
💾 DISK STATE: 462 jobs on disk
[2026-01-30T12:55:32.661Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=462
[2026-01-30T12:55:32.662Z] [BOT] 🔀 Deep merged:  Enterprise Sales Executive (SLED) @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T12:55:32.662Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 462 jobs (merged disk + memory)
[2026-01-30T12:55:32.665Z] [BOT] ✅ No jobs to archive (all 462 jobs within 7-day window)
[2026-01-30T12:55:32.700Z] [BOT] 💾 Saved posted_jobs.json: 462 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:34.203Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive " @ datadog
[2026-01-30T12:55:34.203Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:55:34.485Z] [BOT] ✅ Posted message: Enterprise Sales Executive  @ datadog in #💻・tech-jobs
[2026-01-30T12:55:34.485Z] [BOT] ✅ Industry: Enterprise Sales Executive  @ datadog
[2026-01-30T12:55:34.486Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive  @ datadog → category channel (1 total channels)
💾 BEFORE MERGE: 463 jobs in memory (cached)
[2026-01-30T12:55:34.495Z] [BOT] ✅ Loaded V2 database: 462 jobs
[2026-01-30T12:55:34.495Z] [BOT] 💾 DISK STATE: 462 jobs on disk
[2026-01-30T12:55:34.496Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=463
[2026-01-30T12:55:34.497Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:55:34.497Z] [BOT] 💾 AFTER MERGE: 463 jobs (merged disk + memory)
[2026-01-30T12:55:34.497Z] [BOT] ✅ No jobs to archive (all 463 jobs within 7-day window)
[2026-01-30T12:55:34.531Z] [BOT] 💾 Saved posted_jobs.json: 463 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:36.257Z] [BOT] ✅ Posted message: Enterprise Sales Executive  @ datadog in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T12:55:36.257Z] [BOT] 💾 Added channel posting: Enterprise Sales Executive  @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 463 jobs in memory (cached)
[2026-01-30T12:55:36.270Z] [BOT] ✅ Loaded V2 database: 463 jobs
💾 DISK STATE: 463 jobs on disk
[2026-01-30T12:55:36.270Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=463
[2026-01-30T12:55:36.271Z] [BOT] 🔀 Deep merged: Enterprise Sales Executive  @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T12:55:36.271Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 463 jobs (merged disk + memory)
[2026-01-30T12:55:36.272Z] [BOT] ✅ No jobs to archive (all 463 jobs within 7-day window)
[2026-01-30T12:55:36.302Z] [BOT] 💾 Saved posted_jobs.json: 463 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:37.804Z] [BOT] 📍 [ROUTING] "Content Technologist (Temporary)" @ discord
   Category: TECH (default)
[2026-01-30T12:55:37.804Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T12:55:39.456Z] [BOT] ✅ Posted message: Content Technologist (Temporary) @ discord in #💻・tech-jobs
[2026-01-30T12:55:39.456Z] [BOT] ✅ Industry: Content Technologist (Temporary) @ discord
[2026-01-30T12:55:39.456Z] [BOT] 💾 Added channel posting: Content Technologist (Temporary) @ discord → category channel (1 total channels)
[2026-01-30T12:55:39.456Z] [BOT] 💾 BEFORE MERGE: 464 jobs in memory (cached)
[2026-01-30T12:55:39.466Z] [BOT] ✅ Loaded V2 database: 463 jobs
💾 DISK STATE: 463 jobs on disk
[2026-01-30T12:55:39.466Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=464
[2026-01-30T12:55:39.467Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 464 jobs (merged disk + memory)
[2026-01-30T12:55:39.468Z] [BOT] ✅ No jobs to archive (all 464 jobs within 7-day window)
[2026-01-30T12:55:39.496Z] [BOT] 💾 Saved posted_jobs.json: 464 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:41.232Z] [BOT] ✅ Posted message: Content Technologist (Temporary) @ discord in #🏠・JID_ead674af
[2026-01-30T12:55:41.232Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T12:55:41.232Z] [BOT] 💾 Added channel posting: Content Technologist (Temporary) @ discord → location channel (2 total channels)
💾 BEFORE MERGE: 464 jobs in memory (cached)
[2026-01-30T12:55:41.244Z] [BOT] ✅ Loaded V2 database: 464 jobs
💾 DISK STATE: 464 jobs on disk
[2026-01-30T12:55:41.245Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=464
[2026-01-30T12:55:41.246Z] [BOT] 🔀 Deep merged: Content Technologist (Temporary) @ discord (disk: 1 channels → merged: 2 channels)
[2026-01-30T12:55:41.246Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 464 jobs (merged disk + memory)
[2026-01-30T12:55:41.246Z] [BOT] ✅ No jobs to archive (all 464 jobs within 7-day window)
[2026-01-30T12:55:41.279Z] [BOT] 💾 Saved posted_jobs.json: 464 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:45.782Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-30T12:55:45.782Z] [BOT] 📍 [ROUTING] "Account Executive - Media & Entertainment" @ discord
[2026-01-30T12:55:45.783Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T12:55:46.074Z] [BOT] ✅ Posted message: Account Executive - Media & Entertainment @ discord in #📊・JID_fb739488
  ✅ Industry: Account Executive - Media & Entertainment @ discord
[2026-01-30T12:55:46.075Z] [BOT] 💾 Added channel posting: Account Executive - Media & Entertainment @ discord → category channel (1 total channels)
[2026-01-30T12:55:46.075Z] [BOT] 💾 BEFORE MERGE: 465 jobs in memory (cached)
[2026-01-30T12:55:46.084Z] [BOT] ✅ Loaded V2 database: 464 jobs
💾 DISK STATE: 464 jobs on disk
[2026-01-30T12:55:46.084Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=465
[2026-01-30T12:55:46.085Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 465 jobs (merged disk + memory)
[2026-01-30T12:55:46.086Z] [BOT] ✅ No jobs to archive (all 465 jobs within 7-day window)
[2026-01-30T12:55:46.115Z] [BOT] 💾 Saved posted_jobs.json: 465 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:47.617Z] [BOT] 📍 [ROUTING] "Developer Operations Analyst" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T12:55:47.617Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T12:55:47.784Z] [BOT] ✅ Posted message: Developer Operations Analyst @ discord in #📊・JID_fb739488
  ✅ Industry: Developer Operations Analyst @ discord
[2026-01-30T12:55:47.785Z] [BOT] 💾 Added channel posting: Developer Operations Analyst @ discord → category channel (1 total channels)
💾 BEFORE MERGE: 466 jobs in memory (cached)
[2026-01-30T12:55:47.797Z] [BOT] ✅ Loaded V2 database: 465 jobs
💾 DISK STATE: 465 jobs on disk
[2026-01-30T12:55:47.797Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=466
[2026-01-30T12:55:47.798Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:55:47.798Z] [BOT] 💾 AFTER MERGE: 466 jobs (merged disk + memory)
[2026-01-30T12:55:47.798Z] [BOT] ✅ No jobs to archive (all 466 jobs within 7-day window)
[2026-01-30T12:55:47.828Z] [BOT] 💾 Saved posted_jobs.json: 466 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:49.330Z] [BOT] 📍 [ROUTING] "Product Designer, Notifications" @ discord
[2026-01-30T12:55:49.330Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T12:55:49.660Z] [BOT] ✅ Posted message: Product Designer, Notifications @ discord in #📊・JID_fb739488
  ✅ Industry: Product Designer, Notifications @ discord
[2026-01-30T12:55:49.661Z] [BOT] 💾 Added channel posting: Product Designer, Notifications @ discord → category channel (1 total channels)
[2026-01-30T12:55:49.661Z] [BOT] 💾 BEFORE MERGE: 467 jobs in memory (cached)
[2026-01-30T12:55:49.670Z] [BOT] ✅ Loaded V2 database: 466 jobs
💾 DISK STATE: 466 jobs on disk
[2026-01-30T12:55:49.670Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=467
[2026-01-30T12:55:49.672Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:55:49.672Z] [BOT] 💾 AFTER MERGE: 467 jobs (merged disk + memory)
[2026-01-30T12:55:49.672Z] [BOT] ✅ No jobs to archive (all 467 jobs within 7-day window)
[2026-01-30T12:55:49.701Z] [BOT] 💾 Saved posted_jobs.json: 467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:54.202Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-30T12:55:54.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e03342c6..." not found, but found as SHA256 "aeb8cd8b79aed6ad"
⏭️  Skipping duplicate: JID_e03342c6 (posted within 7 days)
[2026-01-30T12:55:54.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_122347b6..." not found, but found as SHA256 "a92cb05f18187a8b"
⏭️  Skipping duplicate: JID_122347b6 (posted within 7 days)
[2026-01-30T12:55:54.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a4dca01..." not found, but found as SHA256 "16b9f4c45672c103"
⏭️  Skipping duplicate: JID_0a4dca01 (posted within 7 days)
[2026-01-30T12:55:54.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_38408935..." not found, but found as SHA256 "134e9971c4990337"
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-30T12:55:54.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "5a338c47eabdb7c2"
⏭️  Skipping duplicate: JID_570efb88 (posted within 7 days)
[2026-01-30T12:55:54.204Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "624574085400e708"
⏭️  Skipping duplicate: JID_faed522a (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "dfee747217079d23"
⏭️  Skipping duplicate: JID_a093879d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_aa358f05..." not found, but found as SHA256 "c0d91c4a9c5c742d"
⏭️  Skipping duplicate: JID_074cb95b (posted within 7 days)
[2026-01-30T12:55:54.309Z] [BOT] ✅ Loaded pending queue: 2899 total (2440 pending, 29 enriched, 430 posted)
[2026-01-30T12:55:54.486Z] [BOT] ✅ Saved pending queue: 2899 total (2440 pending, 21 enriched, 438 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-30T12:55:54.486Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T12:55:54.588Z] [BOT] 📂 Loaded 10521 existing routing entries
[2026-01-30T12:55:54.705Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
   Total entries: 10529
[2026-01-30T12:55:54.705Z] [BOT] Timestamp: 2026-01-30T12:55:54.661Z
[2026-01-30T12:55:54.706Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T12:55:54.706Z] [BOT] Total attempts: 48
   Successful: 13
   Failed: 0
   Skipped: 35
[2026-01-30T12:55:54.706Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T12:55:54.706Z] [BOT] Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-30T12:55:54.706Z] [BOT] 2. #🏠・JID_ead674af: 3 posts
     3. #📊・JID_fb739488: 3 posts
     4. #🗽・JID_98d4f0de: 2 posts
[2026-01-30T12:55:54.706Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-30T12:55:54.707Z] [BOT] 💾 BEFORE MERGE: 467 jobs in memory (cached)
[2026-01-30T12:55:54.717Z] [BOT] ✅ Loaded V2 database: 467 jobs
💾 DISK STATE: 467 jobs on disk
[2026-01-30T12:55:54.717Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=467
[2026-01-30T12:55:54.719Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T12:55:54.719Z] [BOT] 💾 AFTER MERGE: 467 jobs (merged disk + memory)
[2026-01-30T12:55:54.719Z] [BOT] ✅ No jobs to archive (all 467 jobs within 7-day window)
[2026-01-30T12:55:54.749Z] [BOT] 💾 Saved posted_jobs.json: 467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T12:55:54.749Z] [BOT] ✅ Database saved successfully
[2026-01-30T12:55:56.778Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3087) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*