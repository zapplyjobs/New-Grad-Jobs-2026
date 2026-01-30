# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T11:23:42.175Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T11:23:08.261Z] ========================================
[2026-01-30T11:23:08.263Z] Discord Bot Execution Log
[2026-01-30T11:23:08.264Z] Environment: GitHub Actions
[2026-01-30T11:23:08.264Z] Node Version: v20.20.0
[2026-01-30T11:23:08.264Z] ========================================
[2026-01-30T11:23:08.264Z] Environment Variables Check:
[2026-01-30T11:23:08.264Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T11:23:08.264Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.264Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T11:23:08.264Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T11:23:08.264Z] 
Multi-Channel Configuration:
[2026-01-30T11:23:08.264Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.264Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.264Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.265Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.265Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.265Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.265Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.265Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.265Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T11:23:08.265Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T11:23:08.265Z] 
Data Files Check:
[2026-01-30T11:23:08.266Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140378 bytes)
[2026-01-30T11:23:08.282Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2619832 bytes)
[2026-01-30T11:23:08.282Z] 
========================================
[2026-01-30T11:23:08.282Z] Starting Enhanced Discord Bot...
[2026-01-30T11:23:08.282Z] ========================================
[2026-01-30T11:23:08.819Z] [BOT] ✅ Loaded V2 database: 399 jobs
[2026-01-30T11:23:09.244Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-30T11:23:09.245Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T11:23:09.245Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T11:23:09.359Z] [BOT] ✅ Loaded pending queue: 2918 total (2498 pending, 50 enriched, 370 posted)
[2026-01-30T11:23:09.359Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T11:23:09.360Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T11:23:09.360Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T11:23:09.360Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T11:23:09.361Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T11:23:09.361Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
[2026-01-30T11:23:09.361Z] [BOT] ⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T11:23:09.361Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T11:23:09.361Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T11:23:09.361Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T11:23:09.361Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T11:23:09.362Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-30T11:23:09.362Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T11:23:09.362Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
[2026-01-30T11:23:09.362Z] [BOT] ⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T11:23:09.364Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T11:23:09.364Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-30T11:23:09.364Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
[2026-01-30T11:23:09.364Z] [BOT] ⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T11:23:09.364Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T11:23:09.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T11:23:09.365Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-30T11:23:09.365Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T11:23:09.368Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T11:23:09.368Z] [BOT] 🚫 Skipping blacklisted job: Principal Software Engineer - Pay Group Engineering at gusto
[2026-01-30T11:23:09.368Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Platform Security at discord
🚫 Skipping blacklisted job: Senior Security Software Engineer, Detection and Response at discord
🚫 Skipping blacklisted job: Product Partnerships Deal Lead at gusto
[2026-01-30T11:23:09.368Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Builder Audience at figma
🚫 Skipping blacklisted job: Senior Software Engineer, Data Platform at discord
[2026-01-30T11:23:09.475Z] [BOT] ✅ Loaded pending queue: 2918 total (2498 pending, 50 enriched, 370 posted)
[2026-01-30T11:23:09.647Z] [BOT] ✅ Saved pending queue: 2912 total (2498 pending, 44 enriched, 370 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
[2026-01-30T11:23:09.647Z] [BOT] 📋 After blacklist filter: 30 jobs (6 blacklisted)
[2026-01-30T11:23:09.647Z] [BOT] 📋 After data quality filter: 30 jobs (0 invalid)
[2026-01-30T11:23:09.648Z] [BOT] 📋 After multi-location grouping: 29 unique jobs to post
[2026-01-30T11:23:09.648Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: atlanta, ga united states, los angeles, ca united states
[2026-01-30T11:23:09.649Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T11:23:09.653Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-30T11:23:09.654Z] [BOT] 📍 [ROUTING] "Security Sales Engineer - US East" @ datadog
[2026-01-30T11:23:09.654Z] [BOT] Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:09.671Z] [BOT ERROR] (node:2891) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T11:23:09.939Z] [BOT] ✅ Posted message: Security Sales Engineer - US East @ datadog in #💻・tech-jobs
[2026-01-30T11:23:09.939Z] [BOT] ✅ Industry: Security Sales Engineer - US East @ datadog
[2026-01-30T11:23:09.940Z] [BOT] 💾 Added channel posting: Security Sales Engineer - US East @ datadog → category channel (1 total channels)
[2026-01-30T11:23:09.940Z] [BOT] 💾 BEFORE MERGE: 400 jobs in memory (cached)
[2026-01-30T11:23:09.950Z] [BOT] ✅ Loaded V2 database: 399 jobs
💾 DISK STATE: 399 jobs on disk
[2026-01-30T11:23:09.950Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=400
[2026-01-30T11:23:09.951Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:23:09.951Z] [BOT] 💾 AFTER MERGE: 400 jobs (merged disk + memory)
[2026-01-30T11:23:09.952Z] [BOT] ✅ No jobs to archive (all 400 jobs within 7-day window)
[2026-01-30T11:23:09.982Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:11.707Z] [BOT] ✅ Posted message: Security Sales Engineer - US East @ datadog in #🗽・JID_98d4f0de
[2026-01-30T11:23:11.707Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T11:23:11.707Z] [BOT] 💾 Added channel posting: Security Sales Engineer - US East @ datadog → location channel (2 total channels)
💾 BEFORE MERGE: 400 jobs in memory (cached)
[2026-01-30T11:23:11.716Z] [BOT] ✅ Loaded V2 database: 400 jobs
[2026-01-30T11:23:11.716Z] [BOT] 💾 DISK STATE: 400 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=400
[2026-01-30T11:23:11.717Z] [BOT] 🔀 Deep merged: Security Sales Engineer - US East @ datadog (disk: 1 channels → merged: 2 channels)
[2026-01-30T11:23:11.717Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 400 jobs (merged disk + memory)
[2026-01-30T11:23:11.718Z] [BOT] ✅ No jobs to archive (all 400 jobs within 7-day window)
[2026-01-30T11:23:11.746Z] [BOT] 💾 Saved posted_jobs.json: 400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:13.247Z] [BOT] 📍 [ROUTING] "Sales Enablement Learning Partner - Expansion Sales" @ gusto
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:13.490Z] [BOT] ✅ Posted message: Sales Enablement Learning Partner - Expansion Sales @ gusto in #💻・tech-jobs
[2026-01-30T11:23:13.490Z] [BOT] ✅ Industry: Sales Enablement Learning Partner - Expansion Sales @ gusto
[2026-01-30T11:23:13.490Z] [BOT] 💾 Added channel posting: Sales Enablement Learning Partner - Expansion Sales @ gusto → category channel (1 total channels)
[2026-01-30T11:23:13.490Z] [BOT] 💾 BEFORE MERGE: 401 jobs in memory (cached)
[2026-01-30T11:23:13.499Z] [BOT] ✅ Loaded V2 database: 400 jobs
💾 DISK STATE: 400 jobs on disk
[2026-01-30T11:23:13.499Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=401
[2026-01-30T11:23:13.500Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:23:13.500Z] [BOT] 💾 AFTER MERGE: 401 jobs (merged disk + memory)
[2026-01-30T11:23:13.500Z] [BOT] ✅ No jobs to archive (all 401 jobs within 7-day window)
[2026-01-30T11:23:13.524Z] [BOT] 💾 Saved posted_jobs.json: 401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:15.025Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: TECH (default)
[2026-01-30T11:23:15.025Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:15.209Z] [BOT] ✅ Posted message: Strategic Account Executive @ datadog in #💻・tech-jobs
[2026-01-30T11:23:15.209Z] [BOT] ✅ Industry: Strategic Account Executive @ datadog
[2026-01-30T11:23:15.210Z] [BOT] 💾 Added channel posting: Strategic Account Executive @ datadog → category channel (1 total channels)
[2026-01-30T11:23:15.210Z] [BOT] 💾 BEFORE MERGE: 402 jobs in memory (cached)
[2026-01-30T11:23:15.218Z] [BOT] ✅ Loaded V2 database: 401 jobs
💾 DISK STATE: 401 jobs on disk
[2026-01-30T11:23:15.218Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=402
[2026-01-30T11:23:15.219Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:23:15.219Z] [BOT] 💾 AFTER MERGE: 402 jobs (merged disk + memory)
[2026-01-30T11:23:15.219Z] [BOT] ✅ No jobs to archive (all 402 jobs within 7-day window)
[2026-01-30T11:23:15.248Z] [BOT] 💾 Saved posted_jobs.json: 402 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:16.749Z] [BOT] 📍 [ROUTING] "Sr. Sales Enablement Specialist" @ samsara
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:16.994Z] [BOT] ✅ Posted message: Sr. Sales Enablement Specialist @ samsara in #💻・tech-jobs
  ✅ Industry: Sr. Sales Enablement Specialist @ samsara
💾 Added channel posting: Sr. Sales Enablement Specialist @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 403 jobs in memory (cached)
[2026-01-30T11:23:17.001Z] [BOT] ✅ Loaded V2 database: 402 jobs
💾 DISK STATE: 402 jobs on disk
[2026-01-30T11:23:17.002Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=403
[2026-01-30T11:23:17.003Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 403 jobs (merged disk + memory)
[2026-01-30T11:23:17.004Z] [BOT] ✅ No jobs to archive (all 403 jobs within 7-day window)
[2026-01-30T11:23:17.027Z] [BOT] 💾 Saved posted_jobs.json: 403 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:18.528Z] [BOT] 📍 [ROUTING] "Technical Recruiter, Product & Design" @ figma
[2026-01-30T11:23:18.528Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:18.697Z] [BOT] ✅ Posted message: Technical Recruiter, Product & Design @ figma in #💻・tech-jobs
  ✅ Industry: Technical Recruiter, Product & Design @ figma
[2026-01-30T11:23:18.698Z] [BOT] 💾 Added channel posting: Technical Recruiter, Product & Design @ figma → category channel (1 total channels)
💾 BEFORE MERGE: 404 jobs in memory (cached)
[2026-01-30T11:23:18.716Z] [BOT] ✅ Loaded V2 database: 403 jobs
💾 DISK STATE: 403 jobs on disk
[2026-01-30T11:23:18.716Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=404
[2026-01-30T11:23:18.717Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:23:18.717Z] [BOT] 💾 AFTER MERGE: 404 jobs (merged disk + memory)
[2026-01-30T11:23:18.718Z] [BOT] ✅ No jobs to archive (all 404 jobs within 7-day window)
[2026-01-30T11:23:18.767Z] [BOT] 💾 Saved posted_jobs.json: 404 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:20.266Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_ab061919
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:20.397Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_ab061919 in #💻・tech-jobs
[2026-01-30T11:23:20.398Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_ab061919
[2026-01-30T11:23:20.398Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_ab061919 → category channel (1 total channels)
💾 BEFORE MERGE: 405 jobs in memory (cached)
[2026-01-30T11:23:20.412Z] [BOT] ✅ Loaded V2 database: 404 jobs
💾 DISK STATE: 404 jobs on disk
[2026-01-30T11:23:20.412Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=405
[2026-01-30T11:23:20.413Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:23:20.413Z] [BOT] 💾 AFTER MERGE: 405 jobs (merged disk + memory)
[2026-01-30T11:23:20.413Z] [BOT] ✅ No jobs to archive (all 405 jobs within 7-day window)
[2026-01-30T11:23:20.447Z] [BOT] 💾 Saved posted_jobs.json: 405 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:22.231Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_ab061919 in #🏠・JID_ead674af
[2026-01-30T11:23:22.231Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T11:23:22.231Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_ab061919 → location channel (2 total channels)
💾 BEFORE MERGE: 405 jobs in memory (cached)
[2026-01-30T11:23:22.239Z] [BOT] ✅ Loaded V2 database: 405 jobs
[2026-01-30T11:23:22.239Z] [BOT] 💾 DISK STATE: 405 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=405
[2026-01-30T11:23:22.241Z] [BOT] 🔀 Deep merged: Software Engineer 1 @ ORG_ab061919 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T11:23:22.241Z] [BOT] 💾 AFTER MERGE: 405 jobs (merged disk + memory)
[2026-01-30T11:23:22.241Z] [BOT] ✅ No jobs to archive (all 405 jobs within 7-day window)
[2026-01-30T11:23:22.270Z] [BOT] 💾 Saved posted_jobs.json: 405 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:23.771Z] [BOT] 📍 [ROUTING] "Recruiter, Sales & GTM" @ airtable
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:24.071Z] [BOT] ✅ Posted message: Recruiter, Sales & GTM @ airtable in #💻・tech-jobs
[2026-01-30T11:23:24.071Z] [BOT] ✅ Industry: Recruiter, Sales & GTM @ airtable
[2026-01-30T11:23:24.071Z] [BOT] 💾 Added channel posting: Recruiter, Sales & GTM @ airtable → category channel (1 total channels)
💾 BEFORE MERGE: 406 jobs in memory (cached)
[2026-01-30T11:23:24.081Z] [BOT] ✅ Loaded V2 database: 405 jobs
💾 DISK STATE: 405 jobs on disk
[2026-01-30T11:23:24.081Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=406
[2026-01-30T11:23:24.083Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:23:24.083Z] [BOT] 💾 AFTER MERGE: 406 jobs (merged disk + memory)
[2026-01-30T11:23:24.083Z] [BOT] ✅ No jobs to archive (all 406 jobs within 7-day window)
[2026-01-30T11:23:24.111Z] [BOT] 💾 Saved posted_jobs.json: 406 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:25.612Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Mid-West, SLED" @ verkada
[2026-01-30T11:23:25.613Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T11:23:25.806Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Mid-West, SLED @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Mid-West, SLED @ verkada
[2026-01-30T11:23:25.807Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Mid-West, SLED @ verkada → category channel (1 total channels)
[2026-01-30T11:23:25.807Z] [BOT] 💾 BEFORE MERGE: 407 jobs in memory (cached)
[2026-01-30T11:23:25.815Z] [BOT] ✅ Loaded V2 database: 406 jobs
💾 DISK STATE: 406 jobs on disk
[2026-01-30T11:23:25.816Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=407
[2026-01-30T11:23:25.817Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T11:23:25.817Z] [BOT] 💾 AFTER MERGE: 407 jobs (merged disk + memory)
[2026-01-30T11:23:25.817Z] [BOT] ✅ No jobs to archive (all 407 jobs within 7-day window)
[2026-01-30T11:23:25.841Z] [BOT] 💾 Saved posted_jobs.json: 407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:30.344Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T11:23:30.344Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-30T11:23:30.344Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T11:23:30.650Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-01-30T11:23:30.650Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-30T11:23:30.651Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-30T11:23:30.651Z] [BOT] 💾 BEFORE MERGE: 408 jobs in memory (cached)
[2026-01-30T11:23:30.659Z] [BOT] ✅ Loaded V2 database: 407 jobs
💾 DISK STATE: 407 jobs on disk
[2026-01-30T11:23:30.659Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=408
[2026-01-30T11:23:30.660Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 408 jobs (merged disk + memory)
[2026-01-30T11:23:30.660Z] [BOT] ✅ No jobs to archive (all 408 jobs within 7-day window)
[2026-01-30T11:23:30.688Z] [BOT] 💾 Saved posted_jobs.json: 408 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:32.190Z] [BOT] 📍 [ROUTING] "Expansion Account Executive, Enterprise" @ brex
[2026-01-30T11:23:32.190Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T11:23:32.401Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #💰・finance-jobs
  ✅ Industry: Expansion Account Executive, Enterprise @ brex
[2026-01-30T11:23:32.401Z] [BOT] 💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → category channel (1 total channels)
[2026-01-30T11:23:32.401Z] [BOT] 💾 BEFORE MERGE: 409 jobs in memory (cached)
[2026-01-30T11:23:32.410Z] [BOT] ✅ Loaded V2 database: 408 jobs
💾 DISK STATE: 408 jobs on disk
[2026-01-30T11:23:32.410Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=409
[2026-01-30T11:23:32.411Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 409 jobs (merged disk + memory)
[2026-01-30T11:23:32.411Z] [BOT] ✅ No jobs to archive (all 409 jobs within 7-day window)
[2026-01-30T11:23:32.435Z] [BOT] 💾 Saved posted_jobs.json: 409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:34.376Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #🗽・JID_98d4f0de
[2026-01-30T11:23:34.377Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → location channel (2 total channels)
[2026-01-30T11:23:34.377Z] [BOT] 💾 BEFORE MERGE: 409 jobs in memory (cached)
[2026-01-30T11:23:34.385Z] [BOT] ✅ Loaded V2 database: 409 jobs
💾 DISK STATE: 409 jobs on disk
[2026-01-30T11:23:34.385Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=409
[2026-01-30T11:23:34.386Z] [BOT] 🔀 Deep merged: Expansion Account Executive, Enterprise @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-30T11:23:34.386Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 409 jobs (merged disk + memory)
[2026-01-30T11:23:34.386Z] [BOT] ✅ No jobs to archive (all 409 jobs within 7-day window)
[2026-01-30T11:23:34.413Z] [BOT] 💾 Saved posted_jobs.json: 409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:38.915Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T11:23:38.916Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b50cb915..." not found, but found as SHA256 "a9ad4c6cb459d9a0"
[2026-01-30T11:23:38.916Z] [BOT] ⏭️  Skipping duplicate: JID_b50cb915 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "5f2d302e9844b0ee"
⏭️  Skipping duplicate: JID_78cc93f1 (posted within 7 days)
[2026-01-30T11:23:38.916Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d3a2a1a..." not found, but found as SHA256 "1fe511f86cdb82a2"
[2026-01-30T11:23:38.917Z] [BOT] ⏭️  Skipping duplicate: JID_9d3a2a1a (posted within 7 days)
[2026-01-30T11:23:38.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c297c1..." not found, but found as SHA256 "de1848be88b26805"
⏭️  Skipping duplicate: JID_77f32f42 (posted within 7 days)
[2026-01-30T11:23:38.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2fe0e9b4..." not found, but found as SHA256 "504f7209e65a437a"
⏭️  Skipping duplicate: JID_2aab6a01 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5189e42d..." not found, but found as SHA256 "095d8ced98508da3"
⏭️  Skipping duplicate: JID_0ebf0950 (posted within 7 days)
[2026-01-30T11:23:38.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ea141cc8..." not found, but found as SHA256 "6881789b67149ad1"
⏭️  Skipping duplicate: JID_5643073d (posted within 7 days)
[2026-01-30T11:23:38.917Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "ec82164949ddd5be"
⏭️  Skipping duplicate: JID_ec27db39 (posted within 7 days)
[2026-01-30T11:23:38.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10ced862..." not found, but found as SHA256 "d4bf2e30754fe60c"
⏭️  Skipping duplicate: JID_152141f5 (posted within 7 days)
[2026-01-30T11:23:38.918Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_399b5b04..." not found, but found as SHA256 "37288ce8dee3c305"
⏭️  Skipping duplicate: JID_399b5b04 (posted within 7 days)
[2026-01-30T11:23:39.025Z] [BOT] ✅ Loaded pending queue: 2912 total (2498 pending, 44 enriched, 370 posted)
[2026-01-30T11:23:39.207Z] [BOT] ✅ Saved pending queue: 2912 total (2498 pending, 34 enriched, 380 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T11:23:39.207Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T11:23:39.312Z] [BOT] 📂 Loaded 10461 existing routing entries
[2026-01-30T11:23:39.419Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T11:23:39.419Z] [BOT] Total entries: 10471
   Timestamp: 2026-01-30T11:23:39.374Z
[2026-01-30T11:23:39.420Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
   Total attempts: 33
   Successful: 13
   Failed: 0
   Skipped: 20
[2026-01-30T11:23:39.420Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 13
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🗽・JID_98d4f0de: 2 posts
     3. #💰・finance-jobs: 2 posts
     4. #🏠・JID_ead674af: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 409 jobs in memory (cached)
[2026-01-30T11:23:39.430Z] [BOT] ✅ Loaded V2 database: 409 jobs
💾 DISK STATE: 409 jobs on disk
[2026-01-30T11:23:39.430Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=409
[2026-01-30T11:23:39.431Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 409 jobs (merged disk + memory)
[2026-01-30T11:23:39.431Z] [BOT] ✅ No jobs to archive (all 409 jobs within 7-day window)
[2026-01-30T11:23:39.455Z] [BOT] 💾 Saved posted_jobs.json: 409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T11:23:39.455Z] [BOT] ✅ Database saved successfully
[2026-01-30T11:23:41.485Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2891) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*