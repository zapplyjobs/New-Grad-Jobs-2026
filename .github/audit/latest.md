# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T21:05:36.524Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T21:04:58.832Z] ========================================
[2026-01-30T21:04:58.834Z] Discord Bot Execution Log
[2026-01-30T21:04:58.834Z] Environment: GitHub Actions
[2026-01-30T21:04:58.834Z] Node Version: v20.20.0
[2026-01-30T21:04:58.834Z] ========================================
[2026-01-30T21:04:58.834Z] Environment Variables Check:
[2026-01-30T21:04:58.834Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T21:04:58.834Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.834Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T21:04:58.834Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T21:04:58.834Z] 
Multi-Channel Configuration:
[2026-01-30T21:04:58.834Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.834Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T21:04:58.835Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T21:04:58.835Z] 
Data Files Check:
[2026-01-30T21:04:58.836Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T21:04:58.867Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4421368 bytes)
[2026-01-30T21:04:58.867Z] 
========================================
[2026-01-30T21:04:58.867Z] Starting Enhanced Discord Bot...
[2026-01-30T21:04:58.867Z] ========================================
[2026-01-30T21:04:59.361Z] [BOT] ✅ Loaded V2 database: 668 jobs
[2026-01-30T21:04:59.902Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T21:04:59.903Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T21:04:59.903Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T21:05:00.063Z] [BOT] ✅ Loaded pending queue: 2932 total (2243 pending, 50 enriched, 639 posted)
[2026-01-30T21:05:00.063Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T21:05:00.064Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:05:00.064Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T21:05:00.064Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T21:05:00.065Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:05:00.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T21:05:00.065Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T21:05:00.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T21:05:00.065Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T21:05:00.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-30T21:05:00.066Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T21:05:00.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-30T21:05:00.066Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T21:05:00.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T21:05:00.066Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T21:05:00.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T21:05:00.067Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T21:05:00.067Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T21:05:00.067Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T21:05:00.068Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T21:05:00.068Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T21:05:00.068Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T21:05:00.072Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T21:05:00.072Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - Foundation Models with Federated Learning at Argonne National Laboratory
[2026-01-30T21:05:00.073Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Scholar - Multiple Teams at University of Nevada Reno
[2026-01-30T21:05:00.220Z] [BOT] ✅ Loaded pending queue: 2932 total (2243 pending, 50 enriched, 639 posted)
[2026-01-30T21:05:00.398Z] [BOT] ✅ Saved pending queue: 2930 total (2243 pending, 48 enriched, 639 posted)
🗑️ Removed 2 blacklisted jobs from pending queue
📋 After blacklist filter: 34 jobs (2 blacklisted)
[2026-01-30T21:05:00.399Z] [BOT] 📋 After data quality filter: 34 jobs (0 invalid)
[2026-01-30T21:05:00.400Z] [BOT] 📋 After multi-location grouping: 19 unique jobs to post
[2026-01-30T21:05:00.400Z] [BOT] (15 grouped as same job with different locations)
📍 4 jobs with multiple locations:
[2026-01-30T21:05:00.400Z] [BOT] - Mid-Market Account Executive - PubSec @ samsara: san antonio, louisville
   - Select Major Account Executive EST/CST - Houston, TX @ samsara: houston, texas, jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies: hartford, sparks
   - Account Executive, Mid Market @ brex: seattle, washington, united states, salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T21:05:00.403Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-30T21:05:00.404Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
[2026-01-30T21:05:00.404Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:05:00.421Z] [BOT ERROR] (node:4274) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T21:05:01.006Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
  ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T21:05:01.007Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
[2026-01-30T21:05:01.007Z] [BOT] 💾 BEFORE MERGE: 669 jobs in memory (cached)
[2026-01-30T21:05:01.027Z] [BOT] ✅ Loaded V2 database: 668 jobs
💾 DISK STATE: 668 jobs on disk
[2026-01-30T21:05:01.027Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=669
[2026-01-30T21:05:01.029Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:01.029Z] [BOT] 💾 AFTER MERGE: 669 jobs (merged disk + memory)
[2026-01-30T21:05:01.030Z] [BOT] ✅ No jobs to archive (all 669 jobs within 7-day window)
[2026-01-30T21:05:01.085Z] [BOT] 💾 Saved posted_jobs.json: 669 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:02.587Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:05:02.809Z] [BOT] ✅ Posted message: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies
[2026-01-30T21:05:02.809Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
[2026-01-30T21:05:02.810Z] [BOT] 💾 BEFORE MERGE: 670 jobs in memory (cached)
[2026-01-30T21:05:02.831Z] [BOT] ✅ Loaded V2 database: 669 jobs
[2026-01-30T21:05:02.831Z] [BOT] 💾 DISK STATE: 669 jobs on disk
[2026-01-30T21:05:02.831Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=670
[2026-01-30T21:05:02.833Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 670 jobs (merged disk + memory)
[2026-01-30T21:05:02.833Z] [BOT] ✅ No jobs to archive (all 670 jobs within 7-day window)
[2026-01-30T21:05:02.883Z] [BOT] 💾 Saved posted_jobs.json: 670 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:04.383Z] [BOT] 📍 [ROUTING] "Software Developer - Provisioning" @ ORG_865b30e2 Information Solutions Cooperative (NISC)
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:05:04.679Z] [BOT] ✅ Posted message: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・tech-jobs
[2026-01-30T21:05:04.679Z] [BOT] ✅ Industry: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-30T21:05:04.680Z] [BOT] 💾 Added channel posting: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) → category channel (1 total channels)
[2026-01-30T21:05:04.680Z] [BOT] 💾 BEFORE MERGE: 671 jobs in memory (cached)
[2026-01-30T21:05:04.701Z] [BOT] ✅ Loaded V2 database: 670 jobs
💾 DISK STATE: 670 jobs on disk
[2026-01-30T21:05:04.701Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=671
[2026-01-30T21:05:04.703Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:04.703Z] [BOT] 💾 AFTER MERGE: 671 jobs (merged disk + memory)
[2026-01-30T21:05:04.704Z] [BOT] ✅ No jobs to archive (all 671 jobs within 7-day window)
[2026-01-30T21:05:04.752Z] [BOT] 💾 Saved posted_jobs.json: 671 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:09.254Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T21:05:09.255Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Houston, TX" @ samsara
   Category: FINANCE (matched: "finance")
[2026-01-30T21:05:09.255Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:05:09.502Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Houston, TX @ samsara in #💰・finance-jobs
[2026-01-30T21:05:09.502Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Houston, TX @ samsara
[2026-01-30T21:05:09.502Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Houston, TX @ samsara → category channel (1 total channels)
[2026-01-30T21:05:09.502Z] [BOT] 💾 BEFORE MERGE: 672 jobs in memory (cached)
[2026-01-30T21:05:09.530Z] [BOT] ✅ Loaded V2 database: 671 jobs
💾 DISK STATE: 671 jobs on disk
[2026-01-30T21:05:09.530Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=672
[2026-01-30T21:05:09.532Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:09.532Z] [BOT] 💾 AFTER MERGE: 672 jobs (merged disk + memory)
[2026-01-30T21:05:09.532Z] [BOT] ✅ No jobs to archive (all 672 jobs within 7-day window)
[2026-01-30T21:05:09.591Z] [BOT] 💾 Saved posted_jobs.json: 672 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:14.094Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T21:05:14.095Z] [BOT] 📍 [ROUTING] "iOS Software Engineer, i18n: Grow Global and Local Communities" @ reddit
   Category: AI (matched: "artificial intelligence")
[2026-01-30T21:05:14.095Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:05:14.414Z] [BOT] ✅ Posted message: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit in #🤖・ai-jobs
  ✅ Industry: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit
[2026-01-30T21:05:14.414Z] [BOT] 💾 Added channel posting: iOS Software Engineer, i18n: Grow Global and Local Communities @ reddit → category channel (1 total channels)
[2026-01-30T21:05:14.414Z] [BOT] 💾 BEFORE MERGE: 673 jobs in memory (cached)
[2026-01-30T21:05:14.434Z] [BOT] ✅ Loaded V2 database: 672 jobs
💾 DISK STATE: 672 jobs on disk
[2026-01-30T21:05:14.435Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=673
[2026-01-30T21:05:14.437Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:14.437Z] [BOT] 💾 AFTER MERGE: 673 jobs (merged disk + memory)
[2026-01-30T21:05:14.437Z] [BOT] ✅ No jobs to archive (all 673 jobs within 7-day window)
[2026-01-30T21:05:14.494Z] [BOT] 💾 Saved posted_jobs.json: 673 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:15.997Z] [BOT] 📍 [ROUTING] "Database Conversion - ETL - Programmer" @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-30T21:05:15.997Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:05:16.178Z] [BOT] ✅ Posted message: Database Conversion - ETL - Programmer @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #🤖・ai-jobs
[2026-01-30T21:05:16.178Z] [BOT] ✅ Industry: Database Conversion - ETL - Programmer @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-30T21:05:16.178Z] [BOT] 💾 Added channel posting: Database Conversion - ETL - Programmer @ ORG_865b30e2 Information Solutions Cooperative (NISC) → category channel (1 total channels)
[2026-01-30T21:05:16.178Z] [BOT] 💾 BEFORE MERGE: 674 jobs in memory (cached)
[2026-01-30T21:05:16.198Z] [BOT] ✅ Loaded V2 database: 673 jobs
💾 DISK STATE: 673 jobs on disk
[2026-01-30T21:05:16.199Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=674
[2026-01-30T21:05:16.201Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 674 jobs (merged disk + memory)
[2026-01-30T21:05:16.201Z] [BOT] ✅ No jobs to archive (all 674 jobs within 7-day window)
[2026-01-30T21:05:16.252Z] [BOT] 💾 Saved posted_jobs.json: 674 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:17.753Z] [BOT] 📍 [ROUTING] "Software Engineer - AI & Full Stack Development" @ ORG_fb8c4aa0
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T21:05:17.753Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:05:17.944Z] [BOT] ✅ Posted message: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0
[2026-01-30T21:05:17.945Z] [BOT] 💾 Added channel posting: Software Engineer - AI & Full Stack Development @ ORG_fb8c4aa0 → category channel (1 total channels)
[2026-01-30T21:05:17.945Z] [BOT] 💾 BEFORE MERGE: 675 jobs in memory (cached)
[2026-01-30T21:05:17.964Z] [BOT] ✅ Loaded V2 database: 674 jobs
💾 DISK STATE: 674 jobs on disk
[2026-01-30T21:05:17.965Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=675
[2026-01-30T21:05:17.966Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:17.966Z] [BOT] 💾 AFTER MERGE: 675 jobs (merged disk + memory)
[2026-01-30T21:05:17.967Z] [BOT] ✅ No jobs to archive (all 675 jobs within 7-day window)
[2026-01-30T21:05:18.018Z] [BOT] 💾 Saved posted_jobs.json: 675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:22.520Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-01-30T21:05:22.521Z] [BOT] 📍 [ROUTING] "Database Analyst 1" @ ORG_66279f04 National Information Services
[2026-01-30T21:05:22.521Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T21:05:23.073Z] [BOT] ✅ Posted message: Database Analyst 1 @ ORG_66279f04 National Information Services in #📊・JID_fb739488
  ✅ Industry: Database Analyst 1 @ ORG_66279f04 National Information Services
[2026-01-30T21:05:23.073Z] [BOT] 💾 Added channel posting: Database Analyst 1 @ ORG_66279f04 National Information Services → category channel (1 total channels)
[2026-01-30T21:05:23.074Z] [BOT] 💾 BEFORE MERGE: 676 jobs in memory (cached)
[2026-01-30T21:05:23.094Z] [BOT] ✅ Loaded V2 database: 675 jobs
💾 DISK STATE: 675 jobs on disk
[2026-01-30T21:05:23.094Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=676
[2026-01-30T21:05:23.096Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 676 jobs (merged disk + memory)
[2026-01-30T21:05:23.096Z] [BOT] ✅ No jobs to archive (all 676 jobs within 7-day window)
[2026-01-30T21:05:23.148Z] [BOT] 💾 Saved posted_jobs.json: 676 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:24.648Z] [BOT] 📍 [ROUTING] "Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support" @ ORG_1954b120
[2026-01-30T21:05:24.648Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T21:05:24.648Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T21:05:24.815Z] [BOT] ✅ Posted message: Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support @ ORG_1954b120 in #📊・JID_fb739488
[2026-01-30T21:05:24.815Z] [BOT] ✅ Industry: Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support @ ORG_1954b120
[2026-01-30T21:05:24.816Z] [BOT] 💾 Added channel posting: Data Analyst - Systems Analysis - Electrical Engineer/Scientist Support @ ORG_1954b120 → category channel (1 total channels)
💾 BEFORE MERGE: 677 jobs in memory (cached)
[2026-01-30T21:05:24.835Z] [BOT] ✅ Loaded V2 database: 676 jobs
💾 DISK STATE: 676 jobs on disk
[2026-01-30T21:05:24.836Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=677
[2026-01-30T21:05:24.837Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:24.837Z] [BOT] 💾 AFTER MERGE: 677 jobs (merged disk + memory)
[2026-01-30T21:05:24.838Z] [BOT] ✅ No jobs to archive (all 677 jobs within 7-day window)
[2026-01-30T21:05:24.888Z] [BOT] 💾 Saved posted_jobs.json: 677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:26.389Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_df3160c8
[2026-01-30T21:05:26.389Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T21:05:26.559Z] [BOT] ✅ Posted message: Data Analyst @ ORG_df3160c8 in #📊・JID_fb739488
[2026-01-30T21:05:26.559Z] [BOT] ✅ Industry: Data Analyst @ ORG_df3160c8
[2026-01-30T21:05:26.559Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_df3160c8 → category channel (1 total channels)
[2026-01-30T21:05:26.559Z] [BOT] 💾 BEFORE MERGE: 678 jobs in memory (cached)
[2026-01-30T21:05:26.579Z] [BOT] ✅ Loaded V2 database: 677 jobs
💾 DISK STATE: 677 jobs on disk
[2026-01-30T21:05:26.579Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=678
[2026-01-30T21:05:26.581Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:26.581Z] [BOT] 💾 AFTER MERGE: 678 jobs (merged disk + memory)
[2026-01-30T21:05:26.581Z] [BOT] ✅ No jobs to archive (all 678 jobs within 7-day window)
[2026-01-30T21:05:26.631Z] [BOT] 💾 Saved posted_jobs.json: 678 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:28.420Z] [BOT] ✅ Posted message: Data Analyst @ ORG_df3160c8 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T21:05:28.420Z] [BOT] 💾 Added channel posting: Data Analyst @ ORG_df3160c8 → location channel (2 total channels)
💾 BEFORE MERGE: 678 jobs in memory (cached)
[2026-01-30T21:05:28.440Z] [BOT] ✅ Loaded V2 database: 678 jobs
💾 DISK STATE: 678 jobs on disk
[2026-01-30T21:05:28.440Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=678
[2026-01-30T21:05:28.442Z] [BOT] 🔀 Deep merged: Data Analyst @ ORG_df3160c8 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T21:05:28.442Z] [BOT] 💾 AFTER MERGE: 678 jobs (merged disk + memory)
[2026-01-30T21:05:28.442Z] [BOT] ✅ No jobs to archive (all 678 jobs within 7-day window)
[2026-01-30T21:05:28.493Z] [BOT] 💾 Saved posted_jobs.json: 678 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:32.995Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T21:05:32.996Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd557031..." not found, but found as SHA256 "e66d5af727d7566f"
[2026-01-30T21:05:32.996Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6aa68 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "c865c67642a25d26"
⏭️  Skipping duplicate: JID_bdcc2a60 (posted within 7 days)
[2026-01-30T21:05:32.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b905c074..." not found, but found as SHA256 "d63c9e1103633434"
[2026-01-30T21:05:32.997Z] [BOT] ⏭️  Skipping duplicate: JID_b0b374e1 (posted within 7 days)
[2026-01-30T21:05:32.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "04d2144fad2273f7"
[2026-01-30T21:05:32.997Z] [BOT] ⏭️  Skipping duplicate: JID_5a1885b9-i_r-48464 (posted within 7 days)
[2026-01-30T21:05:32.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_df4bfddb..." not found, but found as SHA256 "92afe75c6dc4f39d"
⏭️  Skipping duplicate: JID_b2667136-i_jr0303337 (posted within 7 days)
[2026-01-30T21:05:32.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_be670766..." not found, but found as SHA256 "a152bf1fb58f683b"
[2026-01-30T21:05:32.997Z] [BOT] ⏭️  Skipping duplicate: JID_06a768e3 (posted within 7 days)
[2026-01-30T21:05:32.997Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_39dc751f..." not found, but found as SHA256 "e2d66c2799d49036"
⏭️  Skipping duplicate: JID_6b0fee8f (posted within 7 days)
[2026-01-30T21:05:32.998Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f88fd0c9-..." not found, but found as SHA256 "e71922524ee96bcc"
⏭️  Skipping duplicate: JID_1edae76c-_321185 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8e08bc5d..." not found, but found as SHA256 "172edfe43629c310"
⏭️  Skipping duplicate: JID_72c29929-development_2531265-3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2f1c5d14..." not found, but found as SHA256 "ad11e3c9d2f11a69"
⏭️  Skipping duplicate: JID_4e7066d1 (posted within 7 days)
[2026-01-30T21:05:33.140Z] [BOT] ✅ Loaded pending queue: 2930 total (2243 pending, 48 enriched, 639 posted)
[2026-01-30T21:05:33.329Z] [BOT] ✅ Saved pending queue: 2930 total (2243 pending, 38 enriched, 649 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T21:05:33.429Z] [BOT] 📂 Loaded 10730 existing routing entries
[2026-01-30T21:05:33.546Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10740
[2026-01-30T21:05:33.546Z] [BOT] Timestamp: 2026-01-30T21:05:33.507Z
[2026-01-30T21:05:33.548Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 27
   Successful: 11
[2026-01-30T21:05:33.548Z] [BOT] Failed: 0
[2026-01-30T21:05:33.548Z] [BOT] Skipped: 16
[2026-01-30T21:05:33.551Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 3 posts
     2. #🤖・ai-jobs: 3 posts
     3. #📊・JID_fb739488: 3 posts
     4. #💰・finance-jobs: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 678 jobs in memory (cached)
[2026-01-30T21:05:33.580Z] [BOT] ✅ Loaded V2 database: 678 jobs
[2026-01-30T21:05:33.581Z] [BOT] 💾 DISK STATE: 678 jobs on disk
[2026-01-30T21:05:33.581Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=678
[2026-01-30T21:05:33.584Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:05:33.584Z] [BOT] 💾 AFTER MERGE: 678 jobs (merged disk + memory)
[2026-01-30T21:05:33.585Z] [BOT] ✅ No jobs to archive (all 678 jobs within 7-day window)
[2026-01-30T21:05:33.633Z] [BOT] 💾 Saved posted_jobs.json: 678 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:05:33.634Z] [BOT] ✅ Database saved successfully
[2026-01-30T21:05:35.655Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4274) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*