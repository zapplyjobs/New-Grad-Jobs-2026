# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T21:32:39.835Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T21:32:03.610Z] ========================================
[2026-01-30T21:32:03.612Z] Discord Bot Execution Log
[2026-01-30T21:32:03.612Z] Environment: GitHub Actions
[2026-01-30T21:32:03.612Z] Node Version: v20.20.0
[2026-01-30T21:32:03.612Z] ========================================
[2026-01-30T21:32:03.612Z] Environment Variables Check:
[2026-01-30T21:32:03.612Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T21:32:03.612Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.612Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T21:32:03.612Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T21:32:03.612Z] 
Multi-Channel Configuration:
[2026-01-30T21:32:03.613Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T21:32:03.613Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T21:32:03.613Z] 
Data Files Check:
[2026-01-30T21:32:03.614Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T21:32:03.641Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4555405 bytes)
[2026-01-30T21:32:03.641Z] 
========================================
[2026-01-30T21:32:03.641Z] Starting Enhanced Discord Bot...
[2026-01-30T21:32:03.641Z] ========================================
[2026-01-30T21:32:04.181Z] [BOT] ✅ Loaded V2 database: 688 jobs
[2026-01-30T21:32:04.619Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T21:32:04.620Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T21:32:04.620Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T21:32:04.746Z] [BOT] ✅ Loaded pending queue: 2935 total (2226 pending, 50 enriched, 659 posted)
[2026-01-30T21:32:04.746Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T21:32:04.746Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:32:04.747Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T21:32:04.747Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T21:32:04.747Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T21:32:04.748Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T21:32:04.748Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T21:32:04.749Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-30T21:32:04.749Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T21:32:04.749Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T21:32:04.749Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T21:32:04.749Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-30T21:32:04.750Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T21:32:04.750Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T21:32:04.750Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T21:32:04.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T21:32:04.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T21:32:04.751Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T21:32:04.752Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T21:32:04.758Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T21:32:04.759Z] [BOT] 📋 After blacklist filter: 36 jobs (0 blacklisted)
[2026-01-30T21:32:04.759Z] [BOT] 📋 After data quality filter: 36 jobs (0 invalid)
[2026-01-30T21:32:04.760Z] [BOT] 📋 After multi-location grouping: 27 unique jobs to post
[2026-01-30T21:32:04.760Z] [BOT] (9 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Select Major Account Executive EST/CST - Miami, FL @ samsara: miami, nashville, orlando, raleigh, san antonio, tallahassee, tampa
   - Account Executive, Mid Market @ brex: salt lake city, utah, united states, san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T21:32:04.764Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T21:32:04.765Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Miami, FL" @ samsara
[2026-01-30T21:32:04.765Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:32:04.783Z] [BOT ERROR] (node:2904) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T21:32:04.989Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Miami, FL @ samsara in #💰・finance-jobs
[2026-01-30T21:32:04.990Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Miami, FL @ samsara
[2026-01-30T21:32:04.990Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Miami, FL @ samsara → category channel (1 total channels)
[2026-01-30T21:32:04.991Z] [BOT] 💾 BEFORE MERGE: 689 jobs in memory (cached)
[2026-01-30T21:32:05.005Z] [BOT] ✅ Loaded V2 database: 688 jobs
💾 DISK STATE: 688 jobs on disk
[2026-01-30T21:32:05.005Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=689
[2026-01-30T21:32:05.007Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:32:05.007Z] [BOT] 💾 AFTER MERGE: 689 jobs (merged disk + memory)
[2026-01-30T21:32:05.008Z] [BOT] ✅ No jobs to archive (all 689 jobs within 7-day window)
[2026-01-30T21:32:05.068Z] [BOT] 💾 Saved posted_jobs.json: 689 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:06.571Z] [BOT] 📍 [ROUTING] "Account Executive, Mid Market" @ brex
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T21:32:06.864Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #💰・finance-jobs
  ✅ Industry: Account Executive, Mid Market @ brex
[2026-01-30T21:32:06.865Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 690 jobs in memory (cached)
[2026-01-30T21:32:06.880Z] [BOT] ✅ Loaded V2 database: 689 jobs
💾 DISK STATE: 689 jobs on disk
[2026-01-30T21:32:06.880Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=690
[2026-01-30T21:32:06.882Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:32:06.882Z] [BOT] 💾 AFTER MERGE: 690 jobs (merged disk + memory)
[2026-01-30T21:32:06.882Z] [BOT] ✅ No jobs to archive (all 690 jobs within 7-day window)
[2026-01-30T21:32:06.926Z] [BOT] 💾 Saved posted_jobs.json: 690 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:08.571Z] [BOT] ✅ Posted message: Account Executive, Mid Market @ brex in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-30T21:32:08.572Z] [BOT] 💾 Added channel posting: Account Executive, Mid Market @ brex → location channel (2 total channels)
[2026-01-30T21:32:08.572Z] [BOT] 💾 BEFORE MERGE: 690 jobs in memory (cached)
[2026-01-30T21:32:08.587Z] [BOT] ✅ Loaded V2 database: 690 jobs
💾 DISK STATE: 690 jobs on disk
[2026-01-30T21:32:08.587Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=690
[2026-01-30T21:32:08.589Z] [BOT] 🔀 Deep merged: Account Executive, Mid Market @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T21:32:08.589Z] [BOT] 💾 AFTER MERGE: 690 jobs (merged disk + memory)
[2026-01-30T21:32:08.589Z] [BOT] ✅ No jobs to archive (all 690 jobs within 7-day window)
[2026-01-30T21:32:08.635Z] [BOT] 💾 Saved posted_jobs.json: 690 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:13.136Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T21:32:13.137Z] [BOT] 📍 [ROUTING] "Associate Engineer - Cloud Development" @ ORG_c339827b
[2026-01-30T21:32:13.137Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:32:13.316Z] [BOT] ✅ Posted message: Associate Engineer - Cloud Development @ ORG_c339827b in #💻・tech-jobs
  ✅ Industry: Associate Engineer - Cloud Development @ ORG_c339827b
[2026-01-30T21:32:13.317Z] [BOT] 💾 Added channel posting: Associate Engineer - Cloud Development @ ORG_c339827b → category channel (1 total channels)
[2026-01-30T21:32:13.317Z] [BOT] 💾 BEFORE MERGE: 691 jobs in memory (cached)
[2026-01-30T21:32:13.338Z] [BOT] ✅ Loaded V2 database: 690 jobs
💾 DISK STATE: 690 jobs on disk
[2026-01-30T21:32:13.338Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=691
[2026-01-30T21:32:13.340Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:32:13.340Z] [BOT] 💾 AFTER MERGE: 691 jobs (merged disk + memory)
[2026-01-30T21:32:13.341Z] [BOT] ✅ No jobs to archive (all 691 jobs within 7-day window)
[2026-01-30T21:32:13.395Z] [BOT] 💾 Saved posted_jobs.json: 691 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:14.898Z] [BOT] 📍 [ROUTING] "Engineer – Cloud Development" @ ORG_c339827b
   Category: TECH (matched: "engineer/engineering")
[2026-01-30T21:32:14.898Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:32:15.344Z] [BOT] ✅ Posted message: Engineer – Cloud Development @ ORG_c339827b in #💻・tech-jobs
[2026-01-30T21:32:15.344Z] [BOT] ✅ Industry: Engineer – Cloud Development @ ORG_c339827b
[2026-01-30T21:32:15.344Z] [BOT] 💾 Added channel posting: Engineer – Cloud Development @ ORG_c339827b → category channel (1 total channels)
[2026-01-30T21:32:15.345Z] [BOT] 💾 BEFORE MERGE: 692 jobs in memory (cached)
[2026-01-30T21:32:15.359Z] [BOT] ✅ Loaded V2 database: 691 jobs
💾 DISK STATE: 691 jobs on disk
[2026-01-30T21:32:15.359Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=692
[2026-01-30T21:32:15.361Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 692 jobs (merged disk + memory)
[2026-01-30T21:32:15.362Z] [BOT] ✅ No jobs to archive (all 692 jobs within 7-day window)
[2026-01-30T21:32:15.414Z] [BOT] 💾 Saved posted_jobs.json: 692 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:16.917Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Multiple Teams" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
[2026-01-30T21:32:16.917Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:32:17.055Z] [BOT] ✅ Posted message: Software Engineer 1 - Multiple Teams @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2026-01-30T21:32:17.055Z] [BOT] ✅ Industry: Software Engineer 1 - Multiple Teams @ ORG_b344d80e Travelers Companies
[2026-01-30T21:32:17.055Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Multiple Teams @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
[2026-01-30T21:32:17.055Z] [BOT] 💾 BEFORE MERGE: 693 jobs in memory (cached)
[2026-01-30T21:32:17.070Z] [BOT] ✅ Loaded V2 database: 692 jobs
💾 DISK STATE: 692 jobs on disk
[2026-01-30T21:32:17.070Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=693
[2026-01-30T21:32:17.072Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 693 jobs (merged disk + memory)
[2026-01-30T21:32:17.072Z] [BOT] ✅ No jobs to archive (all 693 jobs within 7-day window)
[2026-01-30T21:32:17.118Z] [BOT] 💾 Saved posted_jobs.json: 693 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:18.621Z] [BOT] 📍 [ROUTING] "Platform Enabling Software Engineer" @ ORG_9dbe1a97
[2026-01-30T21:32:18.621Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:32:18.799Z] [BOT] ✅ Posted message: Platform Enabling Software Engineer @ ORG_9dbe1a97 in #💻・tech-jobs
[2026-01-30T21:32:18.800Z] [BOT] ✅ Industry: Platform Enabling Software Engineer @ ORG_9dbe1a97
[2026-01-30T21:32:18.800Z] [BOT] 💾 Added channel posting: Platform Enabling Software Engineer @ ORG_9dbe1a97 → category channel (1 total channels)
[2026-01-30T21:32:18.800Z] [BOT] 💾 BEFORE MERGE: 694 jobs in memory (cached)
[2026-01-30T21:32:18.814Z] [BOT] ✅ Loaded V2 database: 693 jobs
💾 DISK STATE: 693 jobs on disk
[2026-01-30T21:32:18.814Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=694
[2026-01-30T21:32:18.816Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:32:18.816Z] [BOT] 💾 AFTER MERGE: 694 jobs (merged disk + memory)
[2026-01-30T21:32:18.816Z] [BOT] ✅ No jobs to archive (all 694 jobs within 7-day window)
[2026-01-30T21:32:18.863Z] [BOT] 💾 Saved posted_jobs.json: 694 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:20.365Z] [BOT] 📍 [ROUTING] "IT Warehouse System Developer" @ ORG_540647baing
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T21:32:20.573Z] [BOT] ✅ Posted message: IT Warehouse System Developer @ ORG_540647baing in #💻・tech-jobs
  ✅ Industry: IT Warehouse System Developer @ ORG_540647baing
[2026-01-30T21:32:20.574Z] [BOT] 💾 Added channel posting: IT Warehouse System Developer @ ORG_540647baing → category channel (1 total channels)
💾 BEFORE MERGE: 695 jobs in memory (cached)
[2026-01-30T21:32:20.588Z] [BOT] ✅ Loaded V2 database: 694 jobs
💾 DISK STATE: 694 jobs on disk
[2026-01-30T21:32:20.588Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=695
[2026-01-30T21:32:20.590Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:32:20.590Z] [BOT] 💾 AFTER MERGE: 695 jobs (merged disk + memory)
[2026-01-30T21:32:20.590Z] [BOT] ✅ No jobs to archive (all 695 jobs within 7-day window)
[2026-01-30T21:32:20.636Z] [BOT] 💾 Saved posted_jobs.json: 695 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:25.138Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T21:32:25.138Z] [BOT] 📍 [ROUTING] "Software Systems Engineer" @ ORG_b344d80e Boeing Company
[2026-01-30T21:32:25.139Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T21:32:25.397Z] [BOT] ✅ Posted message: Software Systems Engineer @ ORG_b344d80e Boeing Company in #📊・JID_fb739488
  ✅ Industry: Software Systems Engineer @ ORG_b344d80e Boeing Company
[2026-01-30T21:32:25.397Z] [BOT] 💾 Added channel posting: Software Systems Engineer @ ORG_b344d80e Boeing Company → category channel (1 total channels)
[2026-01-30T21:32:25.398Z] [BOT] 💾 BEFORE MERGE: 696 jobs in memory (cached)
[2026-01-30T21:32:25.411Z] [BOT] ✅ Loaded V2 database: 695 jobs
💾 DISK STATE: 695 jobs on disk
[2026-01-30T21:32:25.411Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=696
[2026-01-30T21:32:25.413Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:32:25.413Z] [BOT] 💾 AFTER MERGE: 696 jobs (merged disk + memory)
[2026-01-30T21:32:25.414Z] [BOT] ✅ No jobs to archive (all 696 jobs within 7-day window)
[2026-01-30T21:32:25.458Z] [BOT] 💾 Saved posted_jobs.json: 696 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:29.961Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T21:32:29.962Z] [BOT] 📍 [ROUTING] "Triage Associate 1" @ ORG_238a676d AI
[2026-01-30T21:32:29.962Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T21:32:30.106Z] [BOT] ✅ Posted message: Triage Associate 1 @ ORG_238a676d AI in #🤖・ai-jobs
[2026-01-30T21:32:30.106Z] [BOT] ✅ Industry: Triage Associate 1 @ ORG_238a676d AI
[2026-01-30T21:32:30.107Z] [BOT] 💾 Added channel posting: Triage Associate 1 @ ORG_238a676d AI → category channel (1 total channels)
💾 BEFORE MERGE: 697 jobs in memory (cached)
[2026-01-30T21:32:30.121Z] [BOT] ✅ Loaded V2 database: 696 jobs
💾 DISK STATE: 696 jobs on disk
[2026-01-30T21:32:30.121Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=697
[2026-01-30T21:32:30.123Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 697 jobs (merged disk + memory)
[2026-01-30T21:32:30.123Z] [BOT] ✅ No jobs to archive (all 697 jobs within 7-day window)
[2026-01-30T21:32:30.170Z] [BOT] 💾 Saved posted_jobs.json: 697 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:31.672Z] [BOT] 📍 [ROUTING] "Associate Software Engineer Graduate" @ ORG_6c906633
   Category: AI (matched: "machine learning")
[2026-01-30T21:32:31.672Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T21:32:31.944Z] [BOT] ✅ Posted message: Associate Software Engineer Graduate @ ORG_6c906633 in #🤖・ai-jobs
  ✅ Industry: Associate Software Engineer Graduate @ ORG_6c906633
[2026-01-30T21:32:31.945Z] [BOT] 💾 Added channel posting: Associate Software Engineer Graduate @ ORG_6c906633 → category channel (1 total channels)
[2026-01-30T21:32:31.945Z] [BOT] 💾 BEFORE MERGE: 698 jobs in memory (cached)
[2026-01-30T21:32:31.959Z] [BOT] ✅ Loaded V2 database: 697 jobs
💾 DISK STATE: 697 jobs on disk
[2026-01-30T21:32:31.959Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=698
[2026-01-30T21:32:31.961Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T21:32:31.961Z] [BOT] 💾 AFTER MERGE: 698 jobs (merged disk + memory)
[2026-01-30T21:32:31.961Z] [BOT] ✅ No jobs to archive (all 698 jobs within 7-day window)
[2026-01-30T21:32:32.007Z] [BOT] 💾 Saved posted_jobs.json: 698 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:36.508Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T21:32:36.509Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eafe9357..." not found, but found as SHA256 "84bf89e6525d7e29"
⏭️  Skipping duplicate: JID_6c1c66a1 (posted within 7 days)
[2026-01-30T21:32:36.510Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_026a52e5..." not found, but found as SHA256 "36cd2ae57056ab07"
[2026-01-30T21:32:36.510Z] [BOT] ⏭️  Skipping duplicate: JID_026a52e5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_90a901b7..." not found, but found as SHA256 "c08505241fe0ff59"
⏭️  Skipping duplicate: JID_3003029b-resmed_external_careers-JID_39d1f227-development_jr_047682-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_90a901b7..." not found, but found as SHA256 "ee9e730f9ee71d23"
[2026-01-30T21:32:36.510Z] [BOT] ⏭️  Skipping duplicate: JID_3003029b-resmed_external_careers-JID_27a2200d-development_jr_047681-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_a573c606-external_ca..." not found, but found as SHA256 "cb3609ee6a323c7c"
[2026-01-30T21:32:36.510Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_7f0b151f-engineer_jr2025489040-1 (posted within 7 days)
[2026-01-30T21:32:36.510Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_73a28aec..." not found, but found as SHA256 "5a6272125e279140"
⏭️  Skipping duplicate: JID_df78494e (posted within 7 days)
[2026-01-30T21:32:36.511Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "0f7747c082949ea5"
⏭️  Skipping duplicate: JID_5c247253-_r-48736 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c871a8e3..." not found, but found as SHA256 "a9191e50ebd88449"
⏭️  Skipping duplicate: JID_696f8276-engineer_jr0279546 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_8b9cf71c..." not found, but found as SHA256 "910d368d57d55a49"
⏭️  Skipping duplicate: JID_7edb110b (posted within 7 days)
[2026-01-30T21:32:36.511Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ee6d9049-..." not found, but found as SHA256 "67f4722b0dae0aac"
⏭️  Skipping duplicate: JID_57848c69 (posted within 7 days)
[2026-01-30T21:32:36.623Z] [BOT] ✅ Loaded pending queue: 2935 total (2226 pending, 50 enriched, 659 posted)
[2026-01-30T21:32:36.801Z] [BOT] ✅ Saved pending queue: 2935 total (2226 pending, 40 enriched, 669 posted)
[2026-01-30T21:32:36.801Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T21:32:36.888Z] [BOT] 📂 Loaded 10750 existing routing entries
[2026-01-30T21:32:37.010Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10760
   Timestamp: 2026-01-30T21:32:36.967Z
[2026-01-30T21:32:37.011Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T21:32:37.011Z] [BOT] Total attempts: 25
   Successful: 11
   Failed: 0
   Skipped: 14
[2026-01-30T21:32:37.011Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T21:32:37.012Z] [BOT] Total posts: 11
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💰・finance-jobs: 2 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-01-30T21:32:37.012Z] [BOT] 5. #📊・JID_fb739488: 1 posts
[2026-01-30T21:32:37.012Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 698 jobs in memory (cached)
[2026-01-30T21:32:37.035Z] [BOT] ✅ Loaded V2 database: 698 jobs
💾 DISK STATE: 698 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=698
[2026-01-30T21:32:37.047Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 698 jobs (merged disk + memory)
✅ No jobs to archive (all 698 jobs within 7-day window)
[2026-01-30T21:32:37.090Z] [BOT] 💾 Saved posted_jobs.json: 698 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T21:32:37.090Z] [BOT] ✅ Database saved successfully
[2026-01-30T21:32:39.116Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2904) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*