# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T21:18:16.817Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T21:17:42.769Z] ========================================
[2026-01-30T21:17:42.771Z] Discord Bot Execution Log
[2026-01-30T21:17:42.771Z] Environment: GitHub Actions
[2026-01-30T21:17:42.771Z] Node Version: v20.20.0
[2026-01-30T21:17:42.771Z] ========================================
[2026-01-30T21:17:42.771Z] Environment Variables Check:
[2026-01-30T21:17:42.771Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T21:17:42.771Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T21:17:42.772Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T21:17:42.772Z] 
Multi-Channel Configuration:
[2026-01-30T21:17:42.772Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T21:17:42.772Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T21:17:42.772Z] 
Data Files Check:
[2026-01-30T21:17:42.773Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T21:17:42.800Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4485198 bytes)
[2026-01-30T21:17:42.800Z] 
========================================
[2026-01-30T21:17:42.800Z] Starting Enhanced Discord Bot...
[2026-01-30T21:17:42.800Z] ========================================
[2026-01-30T21:17:43.348Z] [BOT] ✅ Loaded V2 database: 678 jobs
[2026-01-30T21:17:43.868Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T21:17:43.868Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T21:17:43.868Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T21:17:43.990Z] [BOT] ✅ Loaded pending queue: 2934 total (2235 pending, 50 enriched, 649 posted)
[2026-01-30T21:17:43.991Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:17:43.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T21:17:43.992Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T21:17:43.992Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:17:43.992Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T21:17:43.992Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T21:17:43.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T21:17:43.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T21:17:43.993Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T21:17:43.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T21:17:43.993Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T21:17:43.994Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-30T21:17:43.994Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T21:17:43.994Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T21:17:43.995Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T21:17:43.995Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T21:17:43.995Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T21:17:43.995Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
[2026-01-30T21:17:43.995Z] [BOT] ⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T21:17:44.003Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T21:17:44.003Z] [BOT] 🚫 Skipping blacklisted job: Senior Data Scientist, Finance  at brex
[2026-01-30T21:17:44.107Z] [BOT] ✅ Loaded pending queue: 2934 total (2235 pending, 50 enriched, 649 posted)
[2026-01-30T21:17:44.288Z] [BOT] ✅ Saved pending queue: 2933 total (2235 pending, 49 enriched, 649 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
[2026-01-30T21:17:44.289Z] [BOT] 📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-30T21:17:44.289Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-30T21:17:44.290Z] [BOT] 📋 After multi-location grouping: 23 unique jobs to post
[2026-01-30T21:17:44.290Z] [BOT] (12 grouped as same job with different locations)
📍 3 jobs with multiple locations:
[2026-01-30T21:17:44.290Z] [BOT] - Select Major Account Executive EST/CST - Jacksonville, FL @ samsara: jacksonville, miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - Account Executive, Mid Market @ brex: seattle, washington, united states, salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states
   - Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies: sparks, hartford
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T21:17:44.294Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-30T21:17:44.295Z] [BOT] 📍 [ROUTING] "Mid-Market Account Executive - PubSec" @ samsara
[2026-01-30T21:17:44.295Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:17:44.313Z] [BOT ERROR] (node:2933) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T21:17:44.555Z] [BOT] ✅ Posted message: Mid-Market Account Executive - PubSec @ samsara in #💻・tech-jobs
[2026-01-30T21:17:44.555Z] [BOT] ✅ Industry: Mid-Market Account Executive - PubSec @ samsara
[2026-01-30T21:17:44.556Z] [BOT] 💾 Added channel posting: Mid-Market Account Executive - PubSec @ samsara → category channel (1 total channels)
[2026-01-30T21:17:44.556Z] [BOT] 💾 BEFORE MERGE: 679 jobs in memory (cached)
[2026-01-30T21:17:44.572Z] [BOT] ✅ Loaded V2 database: 678 jobs
💾 DISK STATE: 678 jobs on disk
[2026-01-30T21:17:44.572Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=679
[2026-01-30T21:17:44.574Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:17:44.574Z] [BOT] 💾 AFTER MERGE: 679 jobs (merged disk + memory)
[2026-01-30T21:17:44.575Z] [BOT] ✅ No jobs to archive (all 679 jobs within 7-day window)
[2026-01-30T21:17:44.634Z] [BOT] 💾 Saved posted_jobs.json: 679 active jobs
[2026-01-30T21:17:44.634Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T21:17:46.137Z] [BOT] 📍 [ROUTING] "Software Developer - Provisioning" @ ORG_865b30e2 Information Solutions Cooperative (NISC)
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:17:46.336Z] [BOT] ✅ Posted message: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) in #💻・tech-jobs
  ✅ Industry: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC)
[2026-01-30T21:17:46.336Z] [BOT] 💾 Added channel posting: Software Developer - Provisioning @ ORG_865b30e2 Information Solutions Cooperative (NISC) → category channel (1 total channels)
[2026-01-30T21:17:46.336Z] [BOT] 💾 BEFORE MERGE: 680 jobs in memory (cached)
[2026-01-30T21:17:46.351Z] [BOT] ✅ Loaded V2 database: 679 jobs
💾 DISK STATE: 679 jobs on disk
[2026-01-30T21:17:46.351Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=680
[2026-01-30T21:17:46.353Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:17:46.353Z] [BOT] 💾 AFTER MERGE: 680 jobs (merged disk + memory)
[2026-01-30T21:17:46.354Z] [BOT] ✅ No jobs to archive (all 680 jobs within 7-day window)
[2026-01-30T21:17:46.399Z] [BOT] 💾 Saved posted_jobs.json: 680 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:17:47.899Z] [BOT] 📍 [ROUTING] "IT Services Academy Program - Software Analyst" @ ORG_d5ef9966 Family
[2026-01-30T21:17:47.900Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:17:48.116Z] [BOT] ✅ Posted message: IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family in #💻・tech-jobs
[2026-01-30T21:17:48.117Z] [BOT] ✅ Industry: IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family
[2026-01-30T21:17:48.117Z] [BOT] 💾 Added channel posting: IT Services Academy Program - Software Analyst @ ORG_d5ef9966 Family → category channel (1 total channels)
[2026-01-30T21:17:48.117Z] [BOT] 💾 BEFORE MERGE: 681 jobs in memory (cached)
[2026-01-30T21:17:48.132Z] [BOT] ✅ Loaded V2 database: 680 jobs
💾 DISK STATE: 680 jobs on disk
[2026-01-30T21:17:48.132Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=681
[2026-01-30T21:17:48.134Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:17:48.134Z] [BOT] 💾 AFTER MERGE: 681 jobs (merged disk + memory)
[2026-01-30T21:17:48.134Z] [BOT] ✅ No jobs to archive (all 681 jobs within 7-day window)
[2026-01-30T21:17:48.180Z] [BOT] 💾 Saved posted_jobs.json: 681 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:17:49.681Z] [BOT] 📍 [ROUTING] "IT Services Academy Program-Software Analyst" @ ORG_d5ef9966 Family
[2026-01-30T21:17:49.681Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:17:49.889Z] [BOT] ✅ Posted message: IT Services Academy Program-Software Analyst @ ORG_d5ef9966 Family in #💻・tech-jobs
  ✅ Industry: IT Services Academy Program-Software Analyst @ ORG_d5ef9966 Family
[2026-01-30T21:17:49.890Z] [BOT] 💾 Added channel posting: IT Services Academy Program-Software Analyst @ ORG_d5ef9966 Family → category channel (1 total channels)
💾 BEFORE MERGE: 682 jobs in memory (cached)
[2026-01-30T21:17:49.905Z] [BOT] ✅ Loaded V2 database: 681 jobs
💾 DISK STATE: 681 jobs on disk
[2026-01-30T21:17:49.905Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=682
[2026-01-30T21:17:49.907Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:17:49.907Z] [BOT] 💾 AFTER MERGE: 682 jobs (merged disk + memory)
[2026-01-30T21:17:49.907Z] [BOT] ✅ No jobs to archive (all 682 jobs within 7-day window)
[2026-01-30T21:17:49.952Z] [BOT] 💾 Saved posted_jobs.json: 682 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:17:51.455Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Aws" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
[2026-01-30T21:17:51.455Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:17:51.675Z] [BOT] ✅ Posted message: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies
[2026-01-30T21:17:51.675Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Aws @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
[2026-01-30T21:17:51.676Z] [BOT] 💾 BEFORE MERGE: 683 jobs in memory (cached)
[2026-01-30T21:17:51.691Z] [BOT] ✅ Loaded V2 database: 682 jobs
💾 DISK STATE: 682 jobs on disk
[2026-01-30T21:17:51.691Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=683
[2026-01-30T21:17:51.693Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:17:51.693Z] [BOT] 💾 AFTER MERGE: 683 jobs (merged disk + memory)
[2026-01-30T21:17:51.693Z] [BOT] ✅ No jobs to archive (all 683 jobs within 7-day window)
[2026-01-30T21:17:51.739Z] [BOT] 💾 Saved posted_jobs.json: 683 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:17:53.241Z] [BOT] 📍 [ROUTING] "Product Designer" @ clerk
   Category: TECH (default)
[2026-01-30T21:17:53.241Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:17:53.627Z] [BOT] ✅ Posted message: Product Designer @ clerk in #💻・tech-jobs
  ✅ Industry: Product Designer @ clerk
[2026-01-30T21:17:53.628Z] [BOT] 💾 Added channel posting: Product Designer @ clerk → category channel (1 total channels)
[2026-01-30T21:17:53.628Z] [BOT] 💾 BEFORE MERGE: 684 jobs in memory (cached)
[2026-01-30T21:17:53.642Z] [BOT] ✅ Loaded V2 database: 683 jobs
💾 DISK STATE: 683 jobs on disk
[2026-01-30T21:17:53.642Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=684
[2026-01-30T21:17:53.644Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:17:53.644Z] [BOT] 💾 AFTER MERGE: 684 jobs (merged disk + memory)
[2026-01-30T21:17:53.644Z] [BOT] ✅ No jobs to archive (all 684 jobs within 7-day window)
[2026-01-30T21:17:53.688Z] [BOT] 💾 Saved posted_jobs.json: 684 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:17:55.190Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-30T21:17:55.190Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:17:55.403Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-30T21:17:55.403Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-30T21:17:55.404Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (1 total channels)
[2026-01-30T21:17:55.404Z] [BOT] 💾 BEFORE MERGE: 685 jobs in memory (cached)
[2026-01-30T21:17:55.418Z] [BOT] ✅ Loaded V2 database: 684 jobs
💾 DISK STATE: 684 jobs on disk
[2026-01-30T21:17:55.418Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=685
[2026-01-30T21:17:55.419Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:17:55.419Z] [BOT] 💾 AFTER MERGE: 685 jobs (merged disk + memory)
[2026-01-30T21:17:55.420Z] [BOT] ✅ No jobs to archive (all 685 jobs within 7-day window)
[2026-01-30T21:17:55.464Z] [BOT] 💾 Saved posted_jobs.json: 685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:17:59.966Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T21:17:59.967Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Jacksonville, FL" @ samsara
   Category: FINANCE (matched: "finance")
[2026-01-30T21:17:59.967Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:18:00.201Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Jacksonville, FL @ samsara in #💰・finance-jobs
[2026-01-30T21:18:00.201Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Jacksonville, FL @ samsara
[2026-01-30T21:18:00.201Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Jacksonville, FL @ samsara → category channel (1 total channels)
[2026-01-30T21:18:00.201Z] [BOT] 💾 BEFORE MERGE: 686 jobs in memory (cached)
[2026-01-30T21:18:00.216Z] [BOT] ✅ Loaded V2 database: 685 jobs
💾 DISK STATE: 685 jobs on disk
[2026-01-30T21:18:00.217Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=686
[2026-01-30T21:18:00.218Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 686 jobs (merged disk + memory)
[2026-01-30T21:18:00.221Z] [BOT] ✅ No jobs to archive (all 686 jobs within 7-day window)
[2026-01-30T21:18:00.264Z] [BOT] 💾 Saved posted_jobs.json: 686 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:18:01.765Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
[2026-01-30T21:18:01.766Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:18:02.005Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
[2026-01-30T21:18:02.005Z] [BOT] ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-30T21:18:02.005Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
[2026-01-30T21:18:02.005Z] [BOT] 💾 BEFORE MERGE: 687 jobs in memory (cached)
[2026-01-30T21:18:02.019Z] [BOT] ✅ Loaded V2 database: 686 jobs
💾 DISK STATE: 686 jobs on disk
[2026-01-30T21:18:02.020Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=687
[2026-01-30T21:18:02.021Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:18:02.021Z] [BOT] 💾 AFTER MERGE: 687 jobs (merged disk + memory)
[2026-01-30T21:18:02.022Z] [BOT] ✅ No jobs to archive (all 687 jobs within 7-day window)
[2026-01-30T21:18:02.066Z] [BOT] 💾 Saved posted_jobs.json: 687 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:18:06.567Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-30T21:18:06.568Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Engineering & Data Science (New York City)" @ spotify
[2026-01-30T21:18:06.568Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T21:18:06.938Z] [BOT] ✅ Posted message: 2026 Summer Internship, Engineering & Data Science (New York City) @ spotify in #🤖・ai-jobs
[2026-01-30T21:18:06.939Z] [BOT] ✅ Industry: 2026 Summer Internship, Engineering & Data Science (New York City) @ spotify
[2026-01-30T21:18:06.939Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Engineering & Data Science (New York City) @ spotify → category channel (1 total channels)
💾 BEFORE MERGE: 688 jobs in memory (cached)
[2026-01-30T21:18:06.953Z] [BOT] ✅ Loaded V2 database: 687 jobs
[2026-01-30T21:18:06.953Z] [BOT] 💾 DISK STATE: 687 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=688
[2026-01-30T21:18:06.955Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:18:06.955Z] [BOT] 💾 AFTER MERGE: 688 jobs (merged disk + memory)
[2026-01-30T21:18:06.956Z] [BOT] ✅ No jobs to archive (all 688 jobs within 7-day window)
[2026-01-30T21:18:07.002Z] [BOT] 💾 Saved posted_jobs.json: 688 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:18:08.751Z] [BOT] ✅ Posted message: 2026 Summer Internship, Engineering & Data Science (New York City) @ spotify in #🗽・JID_98d4f0de
[2026-01-30T21:18:08.751Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T21:18:08.752Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Engineering & Data Science (New York City) @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 688 jobs in memory (cached)
[2026-01-30T21:18:08.766Z] [BOT] ✅ Loaded V2 database: 688 jobs
💾 DISK STATE: 688 jobs on disk
[2026-01-30T21:18:08.766Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=688
[2026-01-30T21:18:08.768Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Engineering & Data Science (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
[2026-01-30T21:18:08.768Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 688 jobs (merged disk + memory)
[2026-01-30T21:18:08.768Z] [BOT] ✅ No jobs to archive (all 688 jobs within 7-day window)
[2026-01-30T21:18:08.812Z] [BOT] 💾 Saved posted_jobs.json: 688 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:18:13.315Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T21:18:13.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "57e0b82b1117de74"
[2026-01-30T21:18:13.317Z] [BOT] ⏭️  Skipping duplicate: JID_2d263b12 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0bcaf4cc..." not found, but found as SHA256 "c54d91e177b42e54"
⏭️  Skipping duplicate: JID_02659f87 (posted within 7 days)
[2026-01-30T21:18:13.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8636ed19..." not found, but found as SHA256 "2f0c0b8cc2958f32"
[2026-01-30T21:18:13.317Z] [BOT] ⏭️  Skipping duplicate: JID_8636ed19 (posted within 7 days)
[2026-01-30T21:18:13.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3daced31..." not found, but found as SHA256 "d73095432b39350c"
⏭️  Skipping duplicate: JID_628f6ddc (posted within 7 days)
[2026-01-30T21:18:13.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_38a8e568..." not found, but found as SHA256 "5732b7e1a43b9840"
[2026-01-30T21:18:13.317Z] [BOT] ⏭️  Skipping duplicate: JID_65a4c2d2 (posted within 7 days)
[2026-01-30T21:18:13.317Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0fa63293-jmfamily_..." not found, but found as SHA256 "712f13e8f53e23bc"
[2026-01-30T21:18:13.318Z] [BOT] ⏭️  Skipping duplicate: JID_0fa63293-jmfamily_external-JID_295ddac3-analyst_jr104494 (posted within 7 days)
[2026-01-30T21:18:13.318Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0fa63293-jmfamily_..." not found, but found as SHA256 "8ef06b714d4b05bf"
[2026-01-30T21:18:13.318Z] [BOT] ⏭️  Skipping duplicate: JID_0fa63293-jmfamily_external-JID_8b35bc7a-analyst_jr104504 (posted within 7 days)
[2026-01-30T21:18:13.318Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "30701c7f6a1c0e8f"
⏭️  Skipping duplicate: JID_1c4074ea-aws_r-48613 (posted within 7 days)
[2026-01-30T21:18:13.318Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_21240ad1..." not found, but found as SHA256 "c75c96606d3e8a26"
⏭️  Skipping duplicate: JID_277ab49f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_fa6ec9c4..." not found, but found as SHA256 "47dd6d2a0106b6b6"
⏭️  Skipping duplicate: JID_93a1fe81 (posted within 7 days)
[2026-01-30T21:18:13.424Z] [BOT] ✅ Loaded pending queue: 2933 total (2235 pending, 49 enriched, 649 posted)
[2026-01-30T21:18:13.615Z] [BOT] ✅ Saved pending queue: 2933 total (2235 pending, 39 enriched, 659 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T21:18:13.615Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T21:18:13.700Z] [BOT] 📂 Loaded 10740 existing routing entries
[2026-01-30T21:18:13.838Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T21:18:13.838Z] [BOT] Total entries: 10750
   Timestamp: 2026-01-30T21:18:13.793Z
[2026-01-30T21:18:13.839Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T21:18:13.839Z] [BOT] Total attempts: 26
   Successful: 11
   Failed: 0
   Skipped: 15
[2026-01-30T21:18:13.839Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T21:18:13.839Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 7 posts
[2026-01-30T21:18:13.839Z] [BOT] 2. #💰・finance-jobs: 2 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
[2026-01-30T21:18:13.839Z] [BOT] [STATS] Channel stats saved
[2026-01-30T21:18:13.839Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 688 jobs in memory (cached)
[2026-01-30T21:18:13.854Z] [BOT] ✅ Loaded V2 database: 688 jobs
💾 DISK STATE: 688 jobs on disk
[2026-01-30T21:18:13.855Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=688
[2026-01-30T21:18:13.860Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 688 jobs (merged disk + memory)
✅ No jobs to archive (all 688 jobs within 7-day window)
[2026-01-30T21:18:13.899Z] [BOT] 💾 Saved posted_jobs.json: 688 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:18:13.899Z] [BOT] ✅ Database saved successfully
[2026-01-30T21:18:15.929Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2933) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*