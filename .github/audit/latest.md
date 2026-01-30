# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T22:32:07.287Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T22:31:33.065Z] ========================================
[2026-01-30T22:31:33.067Z] Discord Bot Execution Log
[2026-01-30T22:31:33.067Z] Environment: GitHub Actions
[2026-01-30T22:31:33.067Z] Node Version: v20.20.0
[2026-01-30T22:31:33.067Z] ========================================
[2026-01-30T22:31:33.067Z] Environment Variables Check:
[2026-01-30T22:31:33.067Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T22:31:33.067Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.067Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T22:31:33.068Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T22:31:33.068Z] 
Multi-Channel Configuration:
[2026-01-30T22:31:33.068Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T22:31:33.068Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T22:31:33.068Z] 
Data Files Check:
[2026-01-30T22:31:33.069Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-30T22:31:33.096Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 4829282 bytes)
[2026-01-30T22:31:33.096Z] 
========================================
[2026-01-30T22:31:33.096Z] Starting Enhanced Discord Bot...
[2026-01-30T22:31:33.096Z] ========================================
[2026-01-30T22:31:33.633Z] [BOT] ✅ Loaded V2 database: 728 jobs
[2026-01-30T22:31:34.208Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T22:31:34.209Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T22:31:34.209Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T22:31:34.330Z] [BOT] ✅ Loaded pending queue: 2938 total (2189 pending, 50 enriched, 699 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T22:31:34.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T22:31:34.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T22:31:34.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
[2026-01-30T22:31:34.331Z] [BOT] ⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T22:31:34.331Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-30T22:31:34.331Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T22:31:34.332Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T22:31:34.332Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T22:31:34.332Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T22:31:34.332Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
[2026-01-30T22:31:34.332Z] [BOT] ⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T22:31:34.333Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T22:31:34.333Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T22:31:34.333Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
[2026-01-30T22:31:34.333Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T22:31:34.334Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
[2026-01-30T22:31:34.334Z] [BOT] ⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T22:31:34.334Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T22:31:34.340Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T22:31:34.340Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, Product-Led Growth at brex
[2026-01-30T22:31:34.340Z] [BOT] 🚫 Skipping blacklisted job: Senior Marketing Operations Manager, B2B Sales at brex
🚫 Skipping blacklisted job: BizOps Lead, BD at brex
[2026-01-30T22:31:34.340Z] [BOT] 🚫 Skipping blacklisted job: BizOps Lead, BD at brex
🚫 Skipping blacklisted job:  BizOps Lead, BD at brex
🚫 Skipping blacklisted job: Manager, Global Yield Programs & Incentives at spotify
[2026-01-30T22:31:34.473Z] [BOT] ✅ Loaded pending queue: 2938 total (2189 pending, 50 enriched, 699 posted)
[2026-01-30T22:31:34.651Z] [BOT] ✅ Saved pending queue: 2932 total (2189 pending, 44 enriched, 699 posted)
[2026-01-30T22:31:34.651Z] [BOT] 🗑️ Removed 6 blacklisted jobs from pending queue
📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-30T22:31:34.652Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-30T22:31:34.653Z] [BOT] 📋 After multi-location grouping: 27 unique jobs to post
[2026-01-30T22:31:34.653Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-30T22:31:34.653Z] [BOT] - Select Major Account Executive EST/CST - Raleigh, NC @ samsara: raleigh, san antonio, tallahassee, tampa
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T22:31:34.657Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-30T22:31:34.658Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Raleigh, NC" @ samsara
[2026-01-30T22:31:34.658Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T22:31:34.675Z] [BOT ERROR] (node:2849) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T22:31:35.053Z] [BOT] ✅ Posted message: Select Major Account Executive EST/CST - Raleigh, NC @ samsara in #💰・finance-jobs
[2026-01-30T22:31:35.053Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST - Raleigh, NC @ samsara
[2026-01-30T22:31:35.054Z] [BOT] 💾 Added channel posting: Select Major Account Executive EST/CST - Raleigh, NC @ samsara → category channel (1 total channels)
[2026-01-30T22:31:35.054Z] [BOT] 💾 BEFORE MERGE: 729 jobs in memory (cached)
[2026-01-30T22:31:35.069Z] [BOT] ✅ Loaded V2 database: 728 jobs
💾 DISK STATE: 728 jobs on disk
[2026-01-30T22:31:35.069Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=729
[2026-01-30T22:31:35.071Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:31:35.071Z] [BOT] 💾 AFTER MERGE: 729 jobs (merged disk + memory)
[2026-01-30T22:31:35.072Z] [BOT] ✅ No jobs to archive (all 729 jobs within 7-day window)
[2026-01-30T22:31:35.126Z] [BOT] 💾 Saved posted_jobs.json: 729 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:39.627Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T22:31:39.628Z] [BOT] 📍 [ROUTING] "AI Engineer" @ vercel
[2026-01-30T22:31:39.628Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T22:31:39.628Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T22:31:40.005Z] [BOT] ✅ Posted message: AI Engineer @ vercel in #🤖・ai-jobs
[2026-01-30T22:31:40.005Z] [BOT] ✅ Industry: AI Engineer @ vercel
[2026-01-30T22:31:40.005Z] [BOT] 💾 Added channel posting: AI Engineer @ vercel → category channel (1 total channels)
[2026-01-30T22:31:40.005Z] [BOT] 💾 BEFORE MERGE: 730 jobs in memory (cached)
[2026-01-30T22:31:40.020Z] [BOT] ✅ Loaded V2 database: 729 jobs
💾 DISK STATE: 729 jobs on disk
[2026-01-30T22:31:40.020Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=730
[2026-01-30T22:31:40.022Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:31:40.022Z] [BOT] 💾 AFTER MERGE: 730 jobs (merged disk + memory)
[2026-01-30T22:31:40.022Z] [BOT] ✅ No jobs to archive (all 730 jobs within 7-day window)
[2026-01-30T22:31:40.071Z] [BOT] 💾 Saved posted_jobs.json: 730 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:41.572Z] [BOT] 📍 [ROUTING] " IT Infrastructure Engineer " @ vercel
   Category: AI (matched: "AI/ML")
[2026-01-30T22:31:41.572Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T22:31:41.831Z] [BOT] ✅ Posted message:  IT Infrastructure Engineer  @ vercel in #🤖・ai-jobs
[2026-01-30T22:31:41.831Z] [BOT] ✅ Industry:  IT Infrastructure Engineer  @ vercel
[2026-01-30T22:31:41.831Z] [BOT] 💾 Added channel posting:  IT Infrastructure Engineer  @ vercel → category channel (1 total channels)
[2026-01-30T22:31:41.831Z] [BOT] 💾 BEFORE MERGE: 731 jobs in memory (cached)
[2026-01-30T22:31:41.846Z] [BOT] ✅ Loaded V2 database: 730 jobs
💾 DISK STATE: 730 jobs on disk
[2026-01-30T22:31:41.846Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=731
[2026-01-30T22:31:41.848Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:31:41.848Z] [BOT] 💾 AFTER MERGE: 731 jobs (merged disk + memory)
[2026-01-30T22:31:41.848Z] [BOT] ✅ No jobs to archive (all 731 jobs within 7-day window)
[2026-01-30T22:31:41.897Z] [BOT] 💾 Saved posted_jobs.json: 731 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:43.400Z] [BOT] 📍 [ROUTING] "Product Engineer – v0" @ vercel
   Category: AI (matched: "AI/ML")
[2026-01-30T22:31:43.400Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T22:31:43.629Z] [BOT] ✅ Posted message: Product Engineer – v0 @ vercel in #🤖・ai-jobs
  ✅ Industry: Product Engineer – v0 @ vercel
[2026-01-30T22:31:43.629Z] [BOT] 💾 Added channel posting: Product Engineer – v0 @ vercel → category channel (1 total channels)
[2026-01-30T22:31:43.630Z] [BOT] 💾 BEFORE MERGE: 732 jobs in memory (cached)
[2026-01-30T22:31:43.660Z] [BOT] ✅ Loaded V2 database: 731 jobs
💾 DISK STATE: 731 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=732
[2026-01-30T22:31:43.662Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:31:43.662Z] [BOT] 💾 AFTER MERGE: 732 jobs (merged disk + memory)
[2026-01-30T22:31:43.663Z] [BOT] ✅ No jobs to archive (all 732 jobs within 7-day window)
[2026-01-30T22:31:43.723Z] [BOT] 💾 Saved posted_jobs.json: 732 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:48.223Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-01-30T22:31:48.224Z] [BOT] 📍 [ROUTING] "Commercial Account Executive, Greenfield " @ vercel
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:31:48.582Z] [BOT] ✅ Posted message: Commercial Account Executive, Greenfield  @ vercel in #💻・tech-jobs
  ✅ Industry: Commercial Account Executive, Greenfield  @ vercel
[2026-01-30T22:31:48.582Z] [BOT] 💾 Added channel posting: Commercial Account Executive, Greenfield  @ vercel → category channel (1 total channels)
[2026-01-30T22:31:48.583Z] [BOT] 💾 BEFORE MERGE: 733 jobs in memory (cached)
[2026-01-30T22:31:48.598Z] [BOT] ✅ Loaded V2 database: 732 jobs
💾 DISK STATE: 732 jobs on disk
[2026-01-30T22:31:48.598Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=733
[2026-01-30T22:31:48.600Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 733 jobs (merged disk + memory)
[2026-01-30T22:31:48.601Z] [BOT] ✅ No jobs to archive (all 733 jobs within 7-day window)
[2026-01-30T22:31:48.657Z] [BOT] 💾 Saved posted_jobs.json: 733 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:50.159Z] [BOT] 📍 [ROUTING] "Content Engineer" @ vercel
[2026-01-30T22:31:50.160Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:31:50.378Z] [BOT] ✅ Posted message: Content Engineer @ vercel in #💻・tech-jobs
  ✅ Industry: Content Engineer @ vercel
[2026-01-30T22:31:50.378Z] [BOT] 💾 Added channel posting: Content Engineer @ vercel → category channel (1 total channels)
[2026-01-30T22:31:50.378Z] [BOT] 💾 BEFORE MERGE: 734 jobs in memory (cached)
[2026-01-30T22:31:50.392Z] [BOT] ✅ Loaded V2 database: 733 jobs
💾 DISK STATE: 733 jobs on disk
[2026-01-30T22:31:50.392Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=734
[2026-01-30T22:31:50.394Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 734 jobs (merged disk + memory)
[2026-01-30T22:31:50.395Z] [BOT] ✅ No jobs to archive (all 734 jobs within 7-day window)
[2026-01-30T22:31:50.443Z] [BOT] 💾 Saved posted_jobs.json: 734 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:51.943Z] [BOT] 📍 [ROUTING] "Sales Engineer" @ vercel
[2026-01-30T22:31:51.944Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:31:52.238Z] [BOT] ✅ Posted message: Sales Engineer @ vercel in #💻・tech-jobs
  ✅ Industry: Sales Engineer @ vercel
[2026-01-30T22:31:52.238Z] [BOT] 💾 Added channel posting: Sales Engineer @ vercel → category channel (1 total channels)
[2026-01-30T22:31:52.238Z] [BOT] 💾 BEFORE MERGE: 735 jobs in memory (cached)
[2026-01-30T22:31:52.253Z] [BOT] ✅ Loaded V2 database: 734 jobs
💾 DISK STATE: 734 jobs on disk
[2026-01-30T22:31:52.254Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=735
[2026-01-30T22:31:52.255Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 735 jobs (merged disk + memory)
[2026-01-30T22:31:52.256Z] [BOT] ✅ No jobs to archive (all 735 jobs within 7-day window)
[2026-01-30T22:31:52.303Z] [BOT] 💾 Saved posted_jobs.json: 735 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:53.805Z] [BOT] 📍 [ROUTING] "Sales Engineer, Startups " @ vercel
   Category: TECH (default)
[2026-01-30T22:31:53.805Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:31:55.645Z] [BOT] ✅ Posted message: Sales Engineer, Startups  @ vercel in #💻・tech-jobs
  ✅ Industry: Sales Engineer, Startups  @ vercel
[2026-01-30T22:31:55.646Z] [BOT] 💾 Added channel posting: Sales Engineer, Startups  @ vercel → category channel (1 total channels)
💾 BEFORE MERGE: 736 jobs in memory (cached)
[2026-01-30T22:31:55.660Z] [BOT] ✅ Loaded V2 database: 735 jobs
[2026-01-30T22:31:55.660Z] [BOT] 💾 DISK STATE: 735 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=736
[2026-01-30T22:31:55.662Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:31:55.662Z] [BOT] 💾 AFTER MERGE: 736 jobs (merged disk + memory)
[2026-01-30T22:31:55.663Z] [BOT] ✅ No jobs to archive (all 736 jobs within 7-day window)
[2026-01-30T22:31:55.711Z] [BOT] 💾 Saved posted_jobs.json: 736 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:57.212Z] [BOT] 📍 [ROUTING] "Software Engineer, AI SDK" @ vercel
[2026-01-30T22:31:57.212Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:31:57.392Z] [BOT] ✅ Posted message: Software Engineer, AI SDK @ vercel in #💻・tech-jobs
[2026-01-30T22:31:57.392Z] [BOT] ✅ Industry: Software Engineer, AI SDK @ vercel
[2026-01-30T22:31:57.393Z] [BOT] 💾 Added channel posting: Software Engineer, AI SDK @ vercel → category channel (1 total channels)
[2026-01-30T22:31:57.393Z] [BOT] 💾 BEFORE MERGE: 737 jobs in memory (cached)
[2026-01-30T22:31:57.407Z] [BOT] ✅ Loaded V2 database: 736 jobs
💾 DISK STATE: 736 jobs on disk
[2026-01-30T22:31:57.408Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=737
[2026-01-30T22:31:57.410Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:31:57.410Z] [BOT] 💾 AFTER MERGE: 737 jobs (merged disk + memory)
[2026-01-30T22:31:57.410Z] [BOT] ✅ No jobs to archive (all 737 jobs within 7-day window)
[2026-01-30T22:31:57.458Z] [BOT] 💾 Saved posted_jobs.json: 737 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:31:58.958Z] [BOT] 📍 [ROUTING] "Software Engineer, CDN" @ vercel
[2026-01-30T22:31:58.958Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T22:31:59.242Z] [BOT] ✅ Posted message: Software Engineer, CDN @ vercel in #💻・tech-jobs
[2026-01-30T22:31:59.242Z] [BOT] ✅ Industry: Software Engineer, CDN @ vercel
[2026-01-30T22:31:59.242Z] [BOT] 💾 Added channel posting: Software Engineer, CDN @ vercel → category channel (1 total channels)
[2026-01-30T22:31:59.242Z] [BOT] 💾 BEFORE MERGE: 738 jobs in memory (cached)
[2026-01-30T22:31:59.257Z] [BOT] ✅ Loaded V2 database: 737 jobs
💾 DISK STATE: 737 jobs on disk
[2026-01-30T22:31:59.257Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=738
[2026-01-30T22:31:59.259Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 738 jobs (merged disk + memory)
[2026-01-30T22:31:59.259Z] [BOT] ✅ No jobs to archive (all 738 jobs within 7-day window)
[2026-01-30T22:31:59.307Z] [BOT] 💾 Saved posted_jobs.json: 738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:32:03.809Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T22:32:03.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_eafe9357..." not found, but found as SHA256 "c4a21957e2ad97a6"
⏭️  Skipping duplicate: JID_43733374 (posted within 7 days)
[2026-01-30T22:32:03.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_45297853..." not found, but found as SHA256 "c030c8d2bfcf5c5b"
[2026-01-30T22:32:03.810Z] [BOT] ⏭️  Skipping duplicate: JID_e8051f69 (posted within 7 days)
[2026-01-30T22:32:03.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_99a0338d..." not found, but found as SHA256 "5e6a74c3cbac6efb"
[2026-01-30T22:32:03.810Z] [BOT] ⏭️  Skipping duplicate: JID_a323b072 (posted within 7 days)
[2026-01-30T22:32:03.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e333090e..." not found, but found as SHA256 "a45f3c5eed279820"
⏭️  Skipping duplicate: JID_101c6abb (posted within 7 days)
[2026-01-30T22:32:03.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f61cab7b..." not found, but found as SHA256 "d15d9473837e6f0f"
⏭️  Skipping duplicate: JID_bc9cd7c4 (posted within 7 days)
[2026-01-30T22:32:03.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9a235f30..." not found, but found as SHA256 "32d09b180d624893"
[2026-01-30T22:32:03.811Z] [BOT] ⏭️  Skipping duplicate: JID_fe97901d (posted within 7 days)
[2026-01-30T22:32:03.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e0af1d42..." not found, but found as SHA256 "be9b6b1f52be5d09"
[2026-01-30T22:32:03.811Z] [BOT] ⏭️  Skipping duplicate: JID_247a9cce (posted within 7 days)
[2026-01-30T22:32:03.811Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6eee89cb..." not found, but found as SHA256 "c90de3a69255ff33"
⏭️  Skipping duplicate: JID_0fbdd3f0 (posted within 7 days)
[2026-01-30T22:32:03.812Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_09a714c8..." not found, but found as SHA256 "8dc4fe04306ebb19"
⏭️  Skipping duplicate: JID_acc905ae (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5720316f..." not found, but found as SHA256 "a8cf9dbaa64b8e10"
⏭️  Skipping duplicate: JID_fbb3116a (posted within 7 days)
[2026-01-30T22:32:03.918Z] [BOT] ✅ Loaded pending queue: 2932 total (2189 pending, 44 enriched, 699 posted)
[2026-01-30T22:32:04.098Z] [BOT] ✅ Saved pending queue: 2932 total (2189 pending, 34 enriched, 709 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T22:32:04.098Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T22:32:04.181Z] [BOT] 📂 Loaded 10790 existing routing entries
[2026-01-30T22:32:04.323Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T22:32:04.323Z] [BOT] Total entries: 10800
   Timestamp: 2026-01-30T22:32:04.278Z
[2026-01-30T22:32:04.323Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T22:32:04.324Z] [BOT] Total attempts: 30
   Successful: 10
   Failed: 0
   Skipped: 20
[2026-01-30T22:32:04.324Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T22:32:04.324Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-01-30T22:32:04.324Z] [BOT] 2. #🤖・ai-jobs: 3 posts
     3. #💰・finance-jobs: 1 posts
[2026-01-30T22:32:04.324Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 738 jobs in memory (cached)
[2026-01-30T22:32:04.342Z] [BOT] ✅ Loaded V2 database: 738 jobs
💾 DISK STATE: 738 jobs on disk
[2026-01-30T22:32:04.342Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=738
[2026-01-30T22:32:04.344Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T22:32:04.344Z] [BOT] 💾 AFTER MERGE: 738 jobs (merged disk + memory)
[2026-01-30T22:32:04.345Z] [BOT] ✅ No jobs to archive (all 738 jobs within 7-day window)
[2026-01-30T22:32:04.390Z] [BOT] 💾 Saved posted_jobs.json: 738 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T22:32:04.391Z] [BOT] ✅ Database saved successfully
[2026-01-30T22:32:06.420Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2849) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*