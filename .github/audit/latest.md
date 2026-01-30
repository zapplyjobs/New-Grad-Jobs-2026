# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T18:18:30.375Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T18:17:52.243Z] ========================================
[2026-01-30T18:17:52.245Z] Discord Bot Execution Log
[2026-01-30T18:17:52.245Z] Environment: GitHub Actions
[2026-01-30T18:17:52.245Z] Node Version: v20.20.0
[2026-01-30T18:17:52.245Z] ========================================
[2026-01-30T18:17:52.245Z] Environment Variables Check:
[2026-01-30T18:17:52.245Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T18:17:52.245Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.245Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T18:17:52.245Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T18:17:52.245Z] 
Multi-Channel Configuration:
[2026-01-30T18:17:52.245Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T18:17:52.246Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T18:17:52.246Z] 
Data Files Check:
[2026-01-30T18:17:52.247Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T18:17:52.270Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 3770055 bytes)
[2026-01-30T18:17:52.270Z] 
========================================
[2026-01-30T18:17:52.270Z] Starting Enhanced Discord Bot...
[2026-01-30T18:17:52.270Z] ========================================
[2026-01-30T18:17:52.805Z] [BOT] ✅ Loaded V2 database: 587 jobs
[2026-01-30T18:17:53.371Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T18:17:53.372Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T18:17:53.372Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T18:17:53.487Z] [BOT] ✅ Loaded pending queue: 2927 total (2319 pending, 50 enriched, 558 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T18:17:53.487Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T18:17:53.488Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T18:17:53.488Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T18:17:53.488Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T18:17:53.488Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T18:17:53.489Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T18:17:53.489Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T18:17:53.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T18:17:53.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T18:17:53.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T18:17:53.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T18:17:53.490Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T18:17:53.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T18:17:53.490Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T18:17:53.491Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T18:17:53.495Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T18:17:53.495Z] [BOT] 🚫 Skipping blacklisted job: Manager Account Development - Atlanta at samsara
[2026-01-30T18:17:53.495Z] [BOT] 🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
🚫 Skipping blacklisted job: Manager Account Development, Relocation to Atlanta at samsara
[2026-01-30T18:17:53.495Z] [BOT] 🚫 Skipping blacklisted job: Manager I, Customer Success at samsara
🚫 Skipping blacklisted job: Manager II, Shipping and Receiving Logistics at samsara
[2026-01-30T18:17:53.667Z] [BOT] ✅ Loaded pending queue: 2927 total (2319 pending, 50 enriched, 558 posted)
[2026-01-30T18:17:53.843Z] [BOT] ✅ Saved pending queue: 2919 total (2319 pending, 42 enriched, 558 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
[2026-01-30T18:17:53.844Z] [BOT] 📋 After blacklist filter: 28 jobs (8 blacklisted)
📋 After data quality filter: 28 jobs (0 invalid)
[2026-01-30T18:17:53.845Z] [BOT] 📋 After multi-location grouping: 14 unique jobs to post
[2026-01-30T18:17:53.845Z] [BOT] (14 grouped as same job with different locations)
📍 4 jobs with multiple locations:
   - Account Executive, E-Commerce  @ brex: san francisco, california, united states, new york, new york, united states
[2026-01-30T18:17:53.845Z] [BOT] - Account Development Representative (New Grad) @ samsara: atlanta, phoenix, arizona
   - Account Executive, Commercial @ samsara: atlanta, columbus, seattle, san diego, salt lake, los angeles, denver, boston, phoenix, arizona, portland
   - Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara: austin, chicago, dallas, houston, texas
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T18:17:53.850Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T18:17:53.851Z] [BOT] 📍 [ROUTING] "Account Executive, E-Commerce " @ brex
[2026-01-30T18:17:53.851Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T18:17:53.868Z] [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T18:17:54.170Z] [BOT] ✅ Posted message: Account Executive, E-Commerce  @ brex in #💰・finance-jobs
[2026-01-30T18:17:54.170Z] [BOT] ✅ Industry: Account Executive, E-Commerce  @ brex
[2026-01-30T18:17:54.171Z] [BOT] 💾 Added channel posting: Account Executive, E-Commerce  @ brex → category channel (1 total channels)
[2026-01-30T18:17:54.171Z] [BOT] 💾 BEFORE MERGE: 588 jobs in memory (cached)
[2026-01-30T18:17:54.184Z] [BOT] ✅ Loaded V2 database: 587 jobs
💾 DISK STATE: 587 jobs on disk
[2026-01-30T18:17:54.184Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=588
[2026-01-30T18:17:54.186Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:17:54.186Z] [BOT] 💾 AFTER MERGE: 588 jobs (merged disk + memory)
[2026-01-30T18:17:54.186Z] [BOT] ✅ No jobs to archive (all 588 jobs within 7-day window)
[2026-01-30T18:17:54.226Z] [BOT] 💾 Saved posted_jobs.json: 588 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:17:58.728Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T18:17:58.729Z] [BOT] 📍 [ROUTING] "USA – Tax - Indirect Tax" @ ORG_b54c9975 & Young
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T18:17:58.975Z] [BOT] ✅ Posted message: USA – Tax - Indirect Tax @ ORG_b54c9975 & Young in #🤖・ai-jobs
[2026-01-30T18:17:58.975Z] [BOT] ✅ Industry: USA – Tax - Indirect Tax @ ORG_b54c9975 & Young
[2026-01-30T18:17:58.975Z] [BOT] 💾 Added channel posting: USA – Tax - Indirect Tax @ ORG_b54c9975 & Young → category channel (1 total channels)
[2026-01-30T18:17:58.975Z] [BOT] 💾 BEFORE MERGE: 589 jobs in memory (cached)
[2026-01-30T18:17:58.987Z] [BOT] ✅ Loaded V2 database: 588 jobs
💾 DISK STATE: 588 jobs on disk
[2026-01-30T18:17:58.987Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=589
[2026-01-30T18:17:58.988Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 589 jobs (merged disk + memory)
[2026-01-30T18:17:58.989Z] [BOT] ✅ No jobs to archive (all 589 jobs within 7-day window)
[2026-01-30T18:17:59.028Z] [BOT] 💾 Saved posted_jobs.json: 589 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:00.530Z] [BOT] 📍 [ROUTING] "Software Engineer Intern" @ coinbase
   Category: AI (matched: "machine learning")
[2026-01-30T18:18:00.530Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T18:18:00.684Z] [BOT] ✅ Posted message: Software Engineer Intern @ coinbase in #🤖・ai-jobs
[2026-01-30T18:18:00.684Z] [BOT] ✅ Industry: Software Engineer Intern @ coinbase
[2026-01-30T18:18:00.685Z] [BOT] 💾 Added channel posting: Software Engineer Intern @ coinbase → category channel (1 total channels)
💾 BEFORE MERGE: 590 jobs in memory (cached)
[2026-01-30T18:18:00.696Z] [BOT] ✅ Loaded V2 database: 589 jobs
💾 DISK STATE: 589 jobs on disk
[2026-01-30T18:18:00.696Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=590
[2026-01-30T18:18:00.697Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 590 jobs (merged disk + memory)
[2026-01-30T18:18:00.698Z] [BOT] ✅ No jobs to archive (all 590 jobs within 7-day window)
[2026-01-30T18:18:00.735Z] [BOT] 💾 Saved posted_jobs.json: 590 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:05.236Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T18:18:05.237Z] [BOT] 📍 [ROUTING] "2026 Summer Internship, Marketing, Customer Success/Sales & Editorial  (New York City)" @ spotify
[2026-01-30T18:18:05.237Z] [BOT] Category: TECH (matched: "pm")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:18:05.402Z] [BOT] ✅ Posted message: 2026 Summer Internship, Marketing, Customer Success/Sales & Editorial  (New York City) @ spotify in #💻・tech-jobs
[2026-01-30T18:18:05.402Z] [BOT] ✅ Industry: 2026 Summer Internship, Marketing, Customer Success/Sales & Editorial  (New York City) @ spotify
[2026-01-30T18:18:05.402Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Marketing, Customer Success/Sales & Editorial  (New York City) @ spotify → category channel (1 total channels)
[2026-01-30T18:18:05.403Z] [BOT] 💾 BEFORE MERGE: 591 jobs in memory (cached)
[2026-01-30T18:18:05.414Z] [BOT] ✅ Loaded V2 database: 590 jobs
💾 DISK STATE: 590 jobs on disk
[2026-01-30T18:18:05.415Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=591
[2026-01-30T18:18:05.416Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:18:05.416Z] [BOT] 💾 AFTER MERGE: 591 jobs (merged disk + memory)
[2026-01-30T18:18:05.416Z] [BOT] ✅ No jobs to archive (all 591 jobs within 7-day window)
[2026-01-30T18:18:05.451Z] [BOT] 💾 Saved posted_jobs.json: 591 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:07.213Z] [BOT] ✅ Posted message: 2026 Summer Internship, Marketing, Customer Success/Sales & Editorial  (New York City) @ spotify in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T18:18:07.213Z] [BOT] 💾 Added channel posting: 2026 Summer Internship, Marketing, Customer Success/Sales & Editorial  (New York City) @ spotify → location channel (2 total channels)
💾 BEFORE MERGE: 591 jobs in memory (cached)
[2026-01-30T18:18:07.224Z] [BOT] ✅ Loaded V2 database: 591 jobs
💾 DISK STATE: 591 jobs on disk
[2026-01-30T18:18:07.224Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=591
[2026-01-30T18:18:07.226Z] [BOT] 🔀 Deep merged: 2026 Summer Internship, Marketing, Customer Success/Sales & Editorial  (New York City) @ spotify (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 591 jobs (merged disk + memory)
[2026-01-30T18:18:07.226Z] [BOT] ✅ No jobs to archive (all 591 jobs within 7-day window)
[2026-01-30T18:18:07.264Z] [BOT] 💾 Saved posted_jobs.json: 591 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:08.765Z] [BOT] 📍 [ROUTING] "Executive Assistant, Go to Market" @ samsara
   Category: TECH (default)
[2026-01-30T18:18:08.765Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:18:09.073Z] [BOT] ✅ Posted message: Executive Assistant, Go to Market @ samsara in #💻・tech-jobs
  ✅ Industry: Executive Assistant, Go to Market @ samsara
[2026-01-30T18:18:09.073Z] [BOT] 💾 Added channel posting: Executive Assistant, Go to Market @ samsara → category channel (1 total channels)
[2026-01-30T18:18:09.073Z] [BOT] 💾 BEFORE MERGE: 592 jobs in memory (cached)
[2026-01-30T18:18:09.087Z] [BOT] ✅ Loaded V2 database: 591 jobs
[2026-01-30T18:18:09.087Z] [BOT] 💾 DISK STATE: 591 jobs on disk
[2026-01-30T18:18:09.087Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=592
[2026-01-30T18:18:09.089Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:18:09.089Z] [BOT] 💾 AFTER MERGE: 592 jobs (merged disk + memory)
[2026-01-30T18:18:09.089Z] [BOT] ✅ No jobs to archive (all 592 jobs within 7-day window)
[2026-01-30T18:18:09.124Z] [BOT] 💾 Saved posted_jobs.json: 592 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:10.626Z] [BOT] 📍 [ROUTING] "Sales Associate" @ gusto
[2026-01-30T18:18:10.626Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:18:10.878Z] [BOT] ✅ Posted message: Sales Associate @ gusto in #💻・tech-jobs
[2026-01-30T18:18:10.878Z] [BOT] ✅ Industry: Sales Associate @ gusto
[2026-01-30T18:18:10.879Z] [BOT] 💾 Added channel posting: Sales Associate @ gusto → category channel (1 total channels)
[2026-01-30T18:18:10.879Z] [BOT] 💾 BEFORE MERGE: 593 jobs in memory (cached)
[2026-01-30T18:18:10.890Z] [BOT] ✅ Loaded V2 database: 592 jobs
[2026-01-30T18:18:10.890Z] [BOT] 💾 DISK STATE: 592 jobs on disk
[2026-01-30T18:18:10.890Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=593
[2026-01-30T18:18:10.891Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:18:10.892Z] [BOT] 💾 AFTER MERGE: 593 jobs (merged disk + memory)
[2026-01-30T18:18:10.892Z] [BOT] ✅ No jobs to archive (all 593 jobs within 7-day window)
[2026-01-30T18:18:10.929Z] [BOT] 💾 Saved posted_jobs.json: 593 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:12.430Z] [BOT] 📍 [ROUTING] "Account Development Representative (New Grad)" @ samsara
[2026-01-30T18:18:12.430Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:18:12.587Z] [BOT] ✅ Posted message: Account Development Representative (New Grad) @ samsara in #💻・tech-jobs
[2026-01-30T18:18:12.587Z] [BOT] ✅ Industry: Account Development Representative (New Grad) @ samsara
[2026-01-30T18:18:12.587Z] [BOT] 💾 Added channel posting: Account Development Representative (New Grad) @ samsara → category channel (1 total channels)
[2026-01-30T18:18:12.587Z] [BOT] 💾 BEFORE MERGE: 594 jobs in memory (cached)
[2026-01-30T18:18:12.599Z] [BOT] ✅ Loaded V2 database: 593 jobs
💾 DISK STATE: 593 jobs on disk
[2026-01-30T18:18:12.599Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=594
[2026-01-30T18:18:12.600Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:18:12.600Z] [BOT] 💾 AFTER MERGE: 594 jobs (merged disk + memory)
[2026-01-30T18:18:12.600Z] [BOT] ✅ No jobs to archive (all 594 jobs within 7-day window)
[2026-01-30T18:18:12.635Z] [BOT] 💾 Saved posted_jobs.json: 594 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:14.137Z] [BOT] 📍 [ROUTING] "Account Executive, Commercial" @ samsara
[2026-01-30T18:18:14.138Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:18:14.302Z] [BOT] ✅ Posted message: Account Executive, Commercial @ samsara in #💻・tech-jobs
[2026-01-30T18:18:14.302Z] [BOT] ✅ Industry: Account Executive, Commercial @ samsara
[2026-01-30T18:18:14.303Z] [BOT] 💾 Added channel posting: Account Executive, Commercial @ samsara → category channel (1 total channels)
[2026-01-30T18:18:14.303Z] [BOT] 💾 BEFORE MERGE: 595 jobs in memory (cached)
[2026-01-30T18:18:14.315Z] [BOT] ✅ Loaded V2 database: 594 jobs
💾 DISK STATE: 594 jobs on disk
[2026-01-30T18:18:14.315Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=595
[2026-01-30T18:18:14.316Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:18:14.316Z] [BOT] 💾 AFTER MERGE: 595 jobs (merged disk + memory)
[2026-01-30T18:18:14.317Z] [BOT] ✅ No jobs to archive (all 595 jobs within 7-day window)
[2026-01-30T18:18:14.353Z] [BOT] 💾 Saved posted_jobs.json: 595 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:15.855Z] [BOT] 📍 [ROUTING] "Customer Success Associate" @ samsara
[2026-01-30T18:18:15.855Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T18:18:16.012Z] [BOT] ✅ Posted message: Customer Success Associate @ samsara in #💻・tech-jobs
[2026-01-30T18:18:16.012Z] [BOT] ✅ Industry: Customer Success Associate @ samsara
[2026-01-30T18:18:16.012Z] [BOT] 💾 Added channel posting: Customer Success Associate @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 596 jobs in memory (cached)
[2026-01-30T18:18:16.025Z] [BOT] ✅ Loaded V2 database: 595 jobs
💾 DISK STATE: 595 jobs on disk
[2026-01-30T18:18:16.025Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=596
[2026-01-30T18:18:16.026Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:18:16.026Z] [BOT] 💾 AFTER MERGE: 596 jobs (merged disk + memory)
[2026-01-30T18:18:16.027Z] [BOT] ✅ No jobs to archive (all 596 jobs within 7-day window)
[2026-01-30T18:18:16.063Z] [BOT] 💾 Saved posted_jobs.json: 596 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:17.720Z] [BOT] ✅ Posted message: Customer Success Associate @ samsara in #🏠・JID_ead674af
[2026-01-30T18:18:17.720Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Customer Success Associate @ samsara → location channel (2 total channels)
[2026-01-30T18:18:17.720Z] [BOT] 💾 BEFORE MERGE: 596 jobs in memory (cached)
[2026-01-30T18:18:17.731Z] [BOT] ✅ Loaded V2 database: 596 jobs
💾 DISK STATE: 596 jobs on disk
[2026-01-30T18:18:17.731Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=596
[2026-01-30T18:18:17.733Z] [BOT] 🔀 Deep merged: Customer Success Associate @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T18:18:17.733Z] [BOT] 💾 AFTER MERGE: 596 jobs (merged disk + memory)
[2026-01-30T18:18:17.733Z] [BOT] ✅ No jobs to archive (all 596 jobs within 7-day window)
[2026-01-30T18:18:17.770Z] [BOT] 💾 Saved posted_jobs.json: 596 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:22.272Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-30T18:18:22.273Z] [BOT] 📍 [ROUTING] "Core Enterprise Account Executive EST/CST - Remote - Austin, TX" @ samsara
   Category: DATA-SCIENCE (matched: "analytics")
[2026-01-30T18:18:22.273Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T18:18:22.530Z] [BOT] ✅ Posted message: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara in #📊・JID_fb739488
  ✅ Industry: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara
[2026-01-30T18:18:22.531Z] [BOT] 💾 Added channel posting: Core Enterprise Account Executive EST/CST - Remote - Austin, TX @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 597 jobs in memory (cached)
[2026-01-30T18:18:22.543Z] [BOT] ✅ Loaded V2 database: 596 jobs
💾 DISK STATE: 596 jobs on disk
[2026-01-30T18:18:22.543Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=597
[2026-01-30T18:18:22.545Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 597 jobs (merged disk + memory)
[2026-01-30T18:18:22.545Z] [BOT] ✅ No jobs to archive (all 597 jobs within 7-day window)
[2026-01-30T18:18:22.581Z] [BOT] 💾 Saved posted_jobs.json: 597 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:27.083Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T18:18:27.084Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ae15cad7..." not found, but found as SHA256 "e407e9ec4382ff63"
⏭️  Skipping duplicate: JID_ae15cad7 (posted within 7 days)
[2026-01-30T18:18:27.084Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3950cabc..." not found, but found as SHA256 "82f53cbc42b6da9a"
[2026-01-30T18:18:27.084Z] [BOT] ⏭️  Skipping duplicate: JID_a3cb960f (posted within 7 days)
[2026-01-30T18:18:27.084Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f4aebf04..." not found, but found as SHA256 "6ec219befa28977b"
⏭️  Skipping duplicate: JID_a45c2b21 (posted within 7 days)
[2026-01-30T18:18:27.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_14102c95..." not found, but found as SHA256 "0b2c46ce888f4614"
⏭️  Skipping duplicate: JID_38acf24f (posted within 7 days)
[2026-01-30T18:18:27.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "94085e935a4eb4bb"
⏭️  Skipping duplicate: JID_26334b8f (posted within 7 days)
[2026-01-30T18:18:27.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b18e2b2a..." not found, but found as SHA256 "b5c5bb2cc490652d"
[2026-01-30T18:18:27.085Z] [BOT] ⏭️  Skipping duplicate: JID_8c91a537 (posted within 7 days)
[2026-01-30T18:18:27.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f493e09c..." not found, but found as SHA256 "5553c029b03b5dde"
[2026-01-30T18:18:27.085Z] [BOT] ⏭️  Skipping duplicate: JID_1b0a9383 (posted within 7 days)
[2026-01-30T18:18:27.085Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "4464cf93ed35747a"
⏭️  Skipping duplicate: JID_80c27426 (posted within 7 days)
[2026-01-30T18:18:27.086Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7a3180e8..." not found, but found as SHA256 "569bb0a46c9356cb"
⏭️  Skipping duplicate: JID_e437aa26 (posted within 7 days)
[2026-01-30T18:18:27.086Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3a2fbe3e..." not found, but found as SHA256 "a22ff0985e68a4da"
[2026-01-30T18:18:27.086Z] [BOT] ⏭️  Skipping duplicate: JID_49fc1d4b (posted within 7 days)
[2026-01-30T18:18:27.189Z] [BOT] ✅ Loaded pending queue: 2919 total (2319 pending, 42 enriched, 558 posted)
[2026-01-30T18:18:27.383Z] [BOT] ✅ Saved pending queue: 2919 total (2319 pending, 32 enriched, 568 posted)
[2026-01-30T18:18:27.383Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T18:18:27.466Z] [BOT] 📂 Loaded 10649 existing routing entries
[2026-01-30T18:18:27.586Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10659
[2026-01-30T18:18:27.586Z] [BOT] Timestamp: 2026-01-30T18:18:27.543Z
[2026-01-30T18:18:27.587Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T18:18:27.587Z] [BOT] Total attempts: 34
   Successful: 12
   Failed: 0
   Skipped: 22
[2026-01-30T18:18:27.587Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T18:18:27.587Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 6
   Top channels:
[2026-01-30T18:18:27.587Z] [BOT] 1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 2 posts
     3. #💰・finance-jobs: 1 posts
     4. #🗽・JID_98d4f0de: 1 posts
     5. #🏠・JID_ead674af: 1 posts
[2026-01-30T18:18:27.587Z] [BOT] [STATS] Channel stats saved
[2026-01-30T18:18:27.588Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 597 jobs in memory (cached)
[2026-01-30T18:18:27.600Z] [BOT] ✅ Loaded V2 database: 597 jobs
[2026-01-30T18:18:27.600Z] [BOT] 💾 DISK STATE: 597 jobs on disk
[2026-01-30T18:18:27.600Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=597
[2026-01-30T18:18:27.602Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T18:18:27.602Z] [BOT] 💾 AFTER MERGE: 597 jobs (merged disk + memory)
[2026-01-30T18:18:27.602Z] [BOT] ✅ No jobs to archive (all 597 jobs within 7-day window)
[2026-01-30T18:18:27.642Z] [BOT] 💾 Saved posted_jobs.json: 597 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T18:18:27.642Z] [BOT] ✅ Database saved successfully
[2026-01-30T18:18:29.675Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*