# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T10:33:14.322Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T10:32:35.436Z] ========================================
[2026-01-30T10:32:35.438Z] Discord Bot Execution Log
[2026-01-30T10:32:35.438Z] Environment: GitHub Actions
[2026-01-30T10:32:35.438Z] Node Version: v20.20.0
[2026-01-30T10:32:35.438Z] ========================================
[2026-01-30T10:32:35.438Z] Environment Variables Check:
[2026-01-30T10:32:35.438Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T10:32:35.438Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.438Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T10:32:35.438Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T10:32:35.438Z] 
Multi-Channel Configuration:
[2026-01-30T10:32:35.438Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.438Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.438Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.439Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.439Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.439Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.439Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.439Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.439Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T10:32:35.439Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T10:32:35.439Z] 
Data Files Check:
[2026-01-30T10:32:35.440Z] .github/data/new_jobs.json: ✅ Exists (10 items, 142334 bytes)
[2026-01-30T10:32:35.458Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2538832 bytes)
[2026-01-30T10:32:35.458Z] 
========================================
[2026-01-30T10:32:35.458Z] Starting Enhanced Discord Bot...
[2026-01-30T10:32:35.458Z] ========================================
[2026-01-30T10:32:35.943Z] [BOT] ✅ Loaded V2 database: 389 jobs
[2026-01-30T10:32:36.342Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T10:32:36.343Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T10:32:36.343Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T10:32:36.506Z] [BOT] ✅ Loaded pending queue: 2917 total (2507 pending, 50 enriched, 360 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-30T10:32:36.507Z] [BOT] [BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T10:32:36.507Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T10:32:36.507Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T10:32:36.508Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-30T10:32:36.508Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T10:32:36.508Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T10:32:36.508Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-30T10:32:36.508Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T10:32:36.508Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-30T10:32:36.508Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T10:32:36.512Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-30T10:32:36.512Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-30T10:32:36.512Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-30T10:32:36.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-30T10:32:36.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-30T10:32:36.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-30T10:32:36.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-30T10:32:36.513Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-30T10:32:36.515Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-30T10:32:36.515Z] [BOT] 🚫 Skipping blacklisted job: Creator & Affiliate Marketing Manager at figma
[2026-01-30T10:32:36.515Z] [BOT] 🚫 Skipping blacklisted job: Manager, Mid-Market Sales (Client Account Executives) at reddit
🚫 Skipping blacklisted job: Manager, Strategic Sales at figma
🚫 Skipping blacklisted job: Partner Manager - Alliances (Commercial) at datadog
[2026-01-30T10:32:36.515Z] [BOT] 🚫 Skipping blacklisted job: Senior Technical Recruiter at samsara
🚫 Skipping blacklisted job: Senior Sales Operations Analyst - Business Insurance at gusto
[2026-01-30T10:32:36.516Z] [BOT] 🚫 Skipping blacklisted job: Vendor Performance Manager, North America at reddit
[2026-01-30T10:32:36.516Z] [BOT] 🚫 Skipping blacklisted job: Manager, Trial Experience -  SaaS at gohighlevel
[2026-01-30T10:32:36.664Z] [BOT] ✅ Loaded pending queue: 2917 total (2507 pending, 50 enriched, 360 posted)
[2026-01-30T10:32:36.826Z] [BOT] ✅ Saved pending queue: 2909 total (2507 pending, 42 enriched, 360 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
📋 After blacklist filter: 28 jobs (8 blacklisted)
[2026-01-30T10:32:36.826Z] [BOT] 📋 After data quality filter: 28 jobs (0 invalid)
[2026-01-30T10:32:36.827Z] [BOT] 📋 After multi-location grouping: 26 unique jobs to post
[2026-01-30T10:32:36.827Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: salt lake city, ut united states, atlanta, ga united states, los angeles, ca united states
⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T10:32:36.831Z] [BOT] 📌 Posting 4 jobs to #💰・finance-jobs
[2026-01-30T10:32:36.832Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-30T10:32:36.832Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T10:32:36.849Z] [BOT ERROR] (node:2752) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T10:32:37.099Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-01-30T10:32:37.099Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-30T10:32:37.099Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-30T10:32:37.099Z] [BOT] 💾 BEFORE MERGE: 390 jobs in memory (cached)
[2026-01-30T10:32:37.112Z] [BOT] ✅ Loaded V2 database: 389 jobs
💾 DISK STATE: 389 jobs on disk
[2026-01-30T10:32:37.112Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=390
[2026-01-30T10:32:37.114Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 390 jobs (merged disk + memory)
[2026-01-30T10:32:37.114Z] [BOT] ✅ No jobs to archive (all 390 jobs within 7-day window)
[2026-01-30T10:32:37.148Z] [BOT] 💾 Saved posted_jobs.json: 390 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:38.650Z] [BOT] 📍 [ROUTING] "Account Executive, Embedded Finance" @ brex
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T10:32:38.831Z] [BOT] ✅ Posted message: Account Executive, Embedded Finance @ brex in #💰・finance-jobs
[2026-01-30T10:32:38.831Z] [BOT] ✅ Industry: Account Executive, Embedded Finance @ brex
[2026-01-30T10:32:38.831Z] [BOT] 💾 Added channel posting: Account Executive, Embedded Finance @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 391 jobs in memory (cached)
[2026-01-30T10:32:38.843Z] [BOT] ✅ Loaded V2 database: 390 jobs
💾 DISK STATE: 390 jobs on disk
[2026-01-30T10:32:38.843Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=391
[2026-01-30T10:32:38.844Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 391 jobs (merged disk + memory)
[2026-01-30T10:32:38.844Z] [BOT] ✅ No jobs to archive (all 391 jobs within 7-day window)
[2026-01-30T10:32:38.873Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:40.622Z] [BOT] ✅ Posted message: Account Executive, Embedded Finance @ brex in #🗽・JID_98d4f0de
[2026-01-30T10:32:40.622Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Account Executive, Embedded Finance @ brex → location channel (2 total channels)
[2026-01-30T10:32:40.622Z] [BOT] 💾 BEFORE MERGE: 391 jobs in memory (cached)
[2026-01-30T10:32:40.634Z] [BOT] ✅ Loaded V2 database: 391 jobs
💾 DISK STATE: 391 jobs on disk
[2026-01-30T10:32:40.634Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=391
[2026-01-30T10:32:40.635Z] [BOT] 🔀 Deep merged: Account Executive, Embedded Finance @ brex (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T10:32:40.635Z] [BOT] 💾 AFTER MERGE: 391 jobs (merged disk + memory)
[2026-01-30T10:32:40.635Z] [BOT] ✅ No jobs to archive (all 391 jobs within 7-day window)
[2026-01-30T10:32:40.664Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:42.165Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State (Virginia)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T10:32:42.307Z] [BOT] ✅ Posted message: Enterprise Sales Account Executive,  State (Virginia) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Sales Account Executive,  State (Virginia) @ verkada
[2026-01-30T10:32:42.307Z] [BOT] 💾 Added channel posting: Enterprise Sales Account Executive,  State (Virginia) @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 392 jobs in memory (cached)
[2026-01-30T10:32:42.319Z] [BOT] ✅ Loaded V2 database: 391 jobs
💾 DISK STATE: 391 jobs on disk
[2026-01-30T10:32:42.319Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=392
[2026-01-30T10:32:42.320Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:32:42.320Z] [BOT] 💾 AFTER MERGE: 392 jobs (merged disk + memory)
[2026-01-30T10:32:42.321Z] [BOT] ✅ No jobs to archive (all 392 jobs within 7-day window)
[2026-01-30T10:32:42.346Z] [BOT] 💾 Saved posted_jobs.json: 392 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:43.848Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T10:32:44.129Z] [BOT] ✅ Posted message: Enterprise Sales Account Executive,  State @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Sales Account Executive,  State @ verkada
[2026-01-30T10:32:44.130Z] [BOT] 💾 Added channel posting: Enterprise Sales Account Executive,  State @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 393 jobs in memory (cached)
[2026-01-30T10:32:44.142Z] [BOT] ✅ Loaded V2 database: 392 jobs
💾 DISK STATE: 392 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=393
[2026-01-30T10:32:44.143Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:32:44.143Z] [BOT] 💾 AFTER MERGE: 393 jobs (merged disk + memory)
[2026-01-30T10:32:44.143Z] [BOT] ✅ No jobs to archive (all 393 jobs within 7-day window)
[2026-01-30T10:32:44.173Z] [BOT] 💾 Saved posted_jobs.json: 393 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:48.675Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-30T10:32:48.675Z] [BOT] 📍 [ROUTING] "Inbound ADR I - PHX" @ samsara
[2026-01-30T10:32:48.675Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:32:48.908Z] [BOT] ✅ Posted message: Inbound ADR I - PHX @ samsara in #💻・tech-jobs
[2026-01-30T10:32:48.909Z] [BOT] ✅ Industry: Inbound ADR I - PHX @ samsara
[2026-01-30T10:32:48.909Z] [BOT] 💾 Added channel posting: Inbound ADR I - PHX @ samsara → category channel (1 total channels)
[2026-01-30T10:32:48.909Z] [BOT] 💾 BEFORE MERGE: 394 jobs in memory (cached)
[2026-01-30T10:32:48.925Z] [BOT] ✅ Loaded V2 database: 393 jobs
💾 DISK STATE: 393 jobs on disk
[2026-01-30T10:32:48.926Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=394
[2026-01-30T10:32:48.927Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:32:48.927Z] [BOT] 💾 AFTER MERGE: 394 jobs (merged disk + memory)
[2026-01-30T10:32:48.927Z] [BOT] ✅ No jobs to archive (all 394 jobs within 7-day window)
[2026-01-30T10:32:48.964Z] [BOT] 💾 Saved posted_jobs.json: 394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:50.631Z] [BOT] ✅ Posted message: Inbound ADR I - PHX @ samsara in #🏠・JID_ead674af
[2026-01-30T10:32:50.631Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-01-30T10:32:50.631Z] [BOT] 💾 Added channel posting: Inbound ADR I - PHX @ samsara → location channel (2 total channels)
[2026-01-30T10:32:50.631Z] [BOT] 💾 BEFORE MERGE: 394 jobs in memory (cached)
[2026-01-30T10:32:50.643Z] [BOT] ✅ Loaded V2 database: 394 jobs
💾 DISK STATE: 394 jobs on disk
[2026-01-30T10:32:50.643Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=394
[2026-01-30T10:32:50.644Z] [BOT] 🔀 Deep merged: Inbound ADR I - PHX @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T10:32:50.644Z] [BOT] 💾 AFTER MERGE: 394 jobs (merged disk + memory)
[2026-01-30T10:32:50.645Z] [BOT] ✅ No jobs to archive (all 394 jobs within 7-day window)
[2026-01-30T10:32:50.674Z] [BOT] 💾 Saved posted_jobs.json: 394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:52.176Z] [BOT] 📍 [ROUTING] "Inbound ADR - ATL" @ samsara
[2026-01-30T10:32:52.176Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:32:52.398Z] [BOT] ✅ Posted message: Inbound ADR - ATL @ samsara in #💻・tech-jobs
[2026-01-30T10:32:52.398Z] [BOT] ✅ Industry: Inbound ADR - ATL @ samsara
[2026-01-30T10:32:52.398Z] [BOT] 💾 Added channel posting: Inbound ADR - ATL @ samsara → category channel (1 total channels)
💾 BEFORE MERGE: 395 jobs in memory (cached)
[2026-01-30T10:32:52.412Z] [BOT] ✅ Loaded V2 database: 394 jobs
💾 DISK STATE: 394 jobs on disk
[2026-01-30T10:32:52.412Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=395
[2026-01-30T10:32:52.413Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 395 jobs (merged disk + memory)
[2026-01-30T10:32:52.413Z] [BOT] ✅ No jobs to archive (all 395 jobs within 7-day window)
[2026-01-30T10:32:52.444Z] [BOT] 💾 Saved posted_jobs.json: 395 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:54.179Z] [BOT] ✅ Posted message: Inbound ADR - ATL @ samsara in #🏠・JID_ead674af
[2026-01-30T10:32:54.179Z] [BOT] ✅ Location: 🏠・JID_ead674af
💾 Added channel posting: Inbound ADR - ATL @ samsara → location channel (2 total channels)
[2026-01-30T10:32:54.179Z] [BOT] 💾 BEFORE MERGE: 395 jobs in memory (cached)
[2026-01-30T10:32:54.191Z] [BOT] ✅ Loaded V2 database: 395 jobs
💾 DISK STATE: 395 jobs on disk
[2026-01-30T10:32:54.191Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=395
[2026-01-30T10:32:54.192Z] [BOT] 🔀 Deep merged: Inbound ADR - ATL @ samsara (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T10:32:54.193Z] [BOT] 💾 AFTER MERGE: 395 jobs (merged disk + memory)
[2026-01-30T10:32:54.193Z] [BOT] ✅ No jobs to archive (all 395 jobs within 7-day window)
[2026-01-30T10:32:54.220Z] [BOT] 💾 Saved posted_jobs.json: 395 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:55.722Z] [BOT] 📍 [ROUTING] "Head of Sales Onboarding and Implementation (GTM Operations) " @ gusto
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:32:55.887Z] [BOT] ✅ Posted message: Head of Sales Onboarding and Implementation (GTM Operations)  @ gusto in #💻・tech-jobs
[2026-01-30T10:32:55.887Z] [BOT] ✅ Industry: Head of Sales Onboarding and Implementation (GTM Operations)  @ gusto
[2026-01-30T10:32:55.887Z] [BOT] 💾 Added channel posting: Head of Sales Onboarding and Implementation (GTM Operations)  @ gusto → category channel (1 total channels)
💾 BEFORE MERGE: 396 jobs in memory (cached)
[2026-01-30T10:32:55.899Z] [BOT] ✅ Loaded V2 database: 395 jobs
💾 DISK STATE: 395 jobs on disk
[2026-01-30T10:32:55.899Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=396
[2026-01-30T10:32:55.900Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:32:55.900Z] [BOT] 💾 AFTER MERGE: 396 jobs (merged disk + memory)
[2026-01-30T10:32:55.901Z] [BOT] ✅ No jobs to archive (all 396 jobs within 7-day window)
[2026-01-30T10:32:55.929Z] [BOT] 💾 Saved posted_jobs.json: 396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:32:57.431Z] [BOT] 📍 [ROUTING] "Entry Level Full Stack Developer" @ ORG_31483b94 Media
   Category: TECH (matched: "software")
[2026-01-30T10:32:57.431Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T10:32:57.682Z] [BOT] ✅ Posted message: Entry Level Full Stack Developer @ ORG_31483b94 Media in #💻・tech-jobs
  ✅ Industry: Entry Level Full Stack Developer @ ORG_31483b94 Media
[2026-01-30T10:32:57.682Z] [BOT] 💾 Added channel posting: Entry Level Full Stack Developer @ ORG_31483b94 Media → category channel (1 total channels)
💾 BEFORE MERGE: 397 jobs in memory (cached)
[2026-01-30T10:32:57.694Z] [BOT] ✅ Loaded V2 database: 396 jobs
💾 DISK STATE: 396 jobs on disk
[2026-01-30T10:32:57.695Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=397
[2026-01-30T10:32:57.695Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:32:57.696Z] [BOT] 💾 AFTER MERGE: 397 jobs (merged disk + memory)
[2026-01-30T10:32:57.696Z] [BOT] ✅ No jobs to archive (all 397 jobs within 7-day window)
[2026-01-30T10:32:57.722Z] [BOT] 💾 Saved posted_jobs.json: 397 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:33:02.224Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-30T10:33:02.224Z] [BOT] 📍 [ROUTING] "Customer Success Specialist" @ coinbase
[2026-01-30T10:33:02.224Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T10:33:02.546Z] [BOT] ✅ Posted message: Customer Success Specialist @ coinbase in #🤖・ai-jobs
  ✅ Industry: Customer Success Specialist @ coinbase
[2026-01-30T10:33:02.546Z] [BOT] 💾 Added channel posting: Customer Success Specialist @ coinbase → category channel (1 total channels)
[2026-01-30T10:33:02.546Z] [BOT] 💾 BEFORE MERGE: 398 jobs in memory (cached)
[2026-01-30T10:33:02.558Z] [BOT] ✅ Loaded V2 database: 397 jobs
💾 DISK STATE: 397 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=398
[2026-01-30T10:33:02.559Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T10:33:02.559Z] [BOT] 💾 AFTER MERGE: 398 jobs (merged disk + memory)
[2026-01-30T10:33:02.560Z] [BOT] ✅ No jobs to archive (all 398 jobs within 7-day window)
[2026-01-30T10:33:02.589Z] [BOT] 💾 Saved posted_jobs.json: 398 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:33:04.092Z] [BOT] 📍 [ROUTING] "Associate Value Engineer - AI-Driven Data Science & Analytics" @ ORG_5c4c8ca4
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T10:33:04.309Z] [BOT] ✅ Posted message: Associate Value Engineer - AI-Driven Data Science & Analytics @ ORG_5c4c8ca4 in #🤖・ai-jobs
  ✅ Industry: Associate Value Engineer - AI-Driven Data Science & Analytics @ ORG_5c4c8ca4
[2026-01-30T10:33:04.310Z] [BOT] 💾 Added channel posting: Associate Value Engineer - AI-Driven Data Science & Analytics @ ORG_5c4c8ca4 → category channel (1 total channels)
[2026-01-30T10:33:04.310Z] [BOT] 💾 BEFORE MERGE: 399 jobs in memory (cached)
[2026-01-30T10:33:04.321Z] [BOT] ✅ Loaded V2 database: 398 jobs
💾 DISK STATE: 398 jobs on disk
[2026-01-30T10:33:04.322Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=399
[2026-01-30T10:33:04.323Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 399 jobs (merged disk + memory)
[2026-01-30T10:33:04.323Z] [BOT] ✅ No jobs to archive (all 399 jobs within 7-day window)
[2026-01-30T10:33:04.349Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:33:06.305Z] [BOT] ✅ Posted message: Associate Value Engineer - AI-Driven Data Science & Analytics @ ORG_5c4c8ca4 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-30T10:33:06.306Z] [BOT] 💾 Added channel posting: Associate Value Engineer - AI-Driven Data Science & Analytics @ ORG_5c4c8ca4 → location channel (2 total channels)
💾 BEFORE MERGE: 399 jobs in memory (cached)
[2026-01-30T10:33:06.317Z] [BOT] ✅ Loaded V2 database: 399 jobs
💾 DISK STATE: 399 jobs on disk
[2026-01-30T10:33:06.317Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=399
[2026-01-30T10:33:06.318Z] [BOT] 🔀 Deep merged: Associate Value Engineer - AI-Driven Data Science & Analytics @ ORG_5c4c8ca4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-30T10:33:06.318Z] [BOT] 💾 AFTER MERGE: 399 jobs (merged disk + memory)
[2026-01-30T10:33:06.319Z] [BOT] ✅ No jobs to archive (all 399 jobs within 7-day window)
[2026-01-30T10:33:06.350Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:33:10.852Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T10:33:10.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "d043a70eda2ac052"
[2026-01-30T10:33:10.853Z] [BOT] ⏭️  Skipping duplicate: JID_aa50da2e (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_fedccf21..." not found, but found as SHA256 "6ba47f01486955fe"
⏭️  Skipping duplicate: JID_fedccf21 (posted within 7 days)
[2026-01-30T10:33:10.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c297c1..." not found, but found as SHA256 "880fe0c0ebece7ae"
⏭️  Skipping duplicate: JID_538eb657 (posted within 7 days)
[2026-01-30T10:33:10.853Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f7c297c1..." not found, but found as SHA256 "6776d496047c5adc"
[2026-01-30T10:33:10.853Z] [BOT] ⏭️  Skipping duplicate: JID_ad1e3493 (posted within 7 days)
[2026-01-30T10:33:10.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_1fa0a835..." not found, but found as SHA256 "6231582dfbbae925"
⏭️  Skipping duplicate: JID_8e85f523 (posted within 7 days)
[2026-01-30T10:33:10.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_118d8dc5..." not found, but found as SHA256 "092abd31985d7052"
⏭️  Skipping duplicate: JID_a4919988 (posted within 7 days)
[2026-01-30T10:33:10.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_aab4ee6c..." not found, but found as SHA256 "7344d67c09eeefb3"
⏭️  Skipping duplicate: JID_846941ab (posted within 7 days)
[2026-01-30T10:33:10.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "4390f164f3590ca2"
⏭️  Skipping duplicate: JID_5ba604a3 (posted within 7 days)
[2026-01-30T10:33:10.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "fec4890377d06a1b"
⏭️  Skipping duplicate: JID_1b21d62b (posted within 7 days)
[2026-01-30T10:33:10.854Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dd610a6a..." not found, but found as SHA256 "287b88214844321f"
[2026-01-30T10:33:10.854Z] [BOT] ⏭️  Skipping duplicate: JID_b6b7e367-developer_r12688 (posted within 7 days)
[2026-01-30T10:33:11.001Z] [BOT] ✅ Loaded pending queue: 2909 total (2507 pending, 42 enriched, 360 posted)
[2026-01-30T10:33:11.185Z] [BOT] ✅ Saved pending queue: 2909 total (2507 pending, 32 enriched, 370 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-30T10:33:11.281Z] [BOT] 📂 Loaded 10451 existing routing entries
[2026-01-30T10:33:11.419Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T10:33:11.419Z] [BOT] Total entries: 10461
   Timestamp: 2026-01-30T10:33:11.382Z
[2026-01-30T10:33:11.420Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T10:33:11.420Z] [BOT] Total attempts: 36
   Successful: 14
   Failed: 0
   Skipped: 22
[2026-01-30T10:33:11.420Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-30T10:33:11.420Z] [BOT] Total posts: 14
   Channels used: 5
   Top channels:
     1. #💰・finance-jobs: 4 posts
     2. #💻・tech-jobs: 4 posts
[2026-01-30T10:33:11.420Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #🏠・JID_ead674af: 2 posts
     5. #🤖・ai-jobs: 2 posts
[2026-01-30T10:33:11.421Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 399 jobs in memory (cached)
[2026-01-30T10:33:11.434Z] [BOT] ✅ Loaded V2 database: 399 jobs
💾 DISK STATE: 399 jobs on disk
[2026-01-30T10:33:11.434Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=399
[2026-01-30T10:33:11.435Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 399 jobs (merged disk + memory)
[2026-01-30T10:33:11.436Z] [BOT] ✅ No jobs to archive (all 399 jobs within 7-day window)
[2026-01-30T10:33:11.463Z] [BOT] 💾 Saved posted_jobs.json: 399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T10:33:11.463Z] [BOT] ✅ Database saved successfully
[2026-01-30T10:33:13.486Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2752) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*