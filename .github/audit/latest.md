# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T15:33:39.667Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T15:32:58.358Z] ========================================
[2026-02-07T15:32:58.360Z] Discord Bot Execution Log
[2026-02-07T15:32:58.360Z] Environment: GitHub Actions
[2026-02-07T15:32:58.360Z] Node Version: v20.20.0
[2026-02-07T15:32:58.360Z] ========================================
[2026-02-07T15:32:58.360Z] Environment Variables Check:
[2026-02-07T15:32:58.360Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T15:32:58.360Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T15:32:58.360Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T15:32:58.361Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T15:32:58.361Z] 
Multi-Channel Configuration:
[2026-02-07T15:32:58.361Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T15:32:58.361Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:32:58.361Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:32:58.361Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T15:32:58.361Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:32:58.361Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:32:58.361Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:32:58.361Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:32:58.361Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:32:58.361Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T15:32:58.362Z] 
Data Files Check:
[2026-02-07T15:32:58.363Z] .github/data/new_jobs.json: ✅ Exists (10 items, 164373 bytes)
[2026-02-07T15:32:58.393Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6085810 bytes)
[2026-02-07T15:32:58.393Z] 
========================================
[2026-02-07T15:32:58.393Z] Starting Enhanced Discord Bot...
[2026-02-07T15:32:58.393Z] ========================================
[2026-02-07T15:32:58.939Z] [BOT] ✅ Loaded V2 database: 1373 jobs
[2026-02-07T15:33:00.012Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T15:33:00.012Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T15:33:00.012Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T15:33:00.040Z] [BOT] ✅ Loaded pending queue: 381 total (331 pending, 50 enriched, 0 posted)
[2026-02-07T15:33:00.040Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T15:33:00.041Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T15:33:00.041Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T15:33:00.041Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T15:33:00.042Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T15:33:00.051Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T15:33:00.052Z] [BOT] 🚫 Skipping blacklisted job: Product Manager, Business Systems & Analytics - People Systems at verkada
🚫 Skipping blacklisted job: Product Marketing Manager, GovTech at verkada
[2026-02-07T15:33:00.052Z] [BOT] 🚫 Skipping blacklisted job: Product Marketing Manager, Solutions at verkada
🚫 Skipping blacklisted job: Regional Sales Manager, Mid-Market at verkada
🚫 Skipping blacklisted job: Sales Enablement, Onboarding Manager at verkada
[2026-02-07T15:33:00.052Z] [BOT] 🚫 Skipping blacklisted job: Sales Strategy and Operations Manager (Sr.) - Strategic Planning at verkada
🚫 Skipping blacklisted job: Senior Android Engineer - Alarms at verkada
🚫 Skipping blacklisted job: Senior Android Engineer - Streaming at verkada
[2026-02-07T15:33:00.052Z] [BOT] 🚫 Skipping blacklisted job: Senior Backend Engineer at verkada
🚫 Skipping blacklisted job: Senior Backend Engineer - Alarms at verkada
[2026-02-07T15:33:00.091Z] [BOT] ✅ Loaded pending queue: 381 total (331 pending, 50 enriched, 0 posted)
[2026-02-07T15:33:00.129Z] [BOT] ✅ Saved pending queue: 371 total (331 pending, 40 enriched, 0 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 38 jobs (10 blacklisted)
[2026-02-07T15:33:00.130Z] [BOT] 📋 After data quality filter: 38 jobs (0 invalid)
[2026-02-07T15:33:00.131Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-02-07T15:33:00.131Z] [BOT] (5 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T15:33:00.135Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-07T15:33:00.136Z] [BOT] 📍 [ROUTING] "Backend Engineer - Alerts and Operations" @ verkada
[2026-02-07T15:33:00.136Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1462...4987)
🔢 Loaded persisted counter for channel CH_44b6ec5f: 839
[2026-02-07T15:33:00.153Z] [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T15:33:00.355Z] [BOT] ✅ Posted message: Backend Engineer - Alerts and Operations @ verkada in #💻・tech-jobs
[2026-02-07T15:33:00.355Z] [BOT] ✅ Industry: Backend Engineer - Alerts and Operations @ verkada
[2026-02-07T15:33:00.356Z] [BOT] 💾 Added channel posting: Backend Engineer - Alerts and Operations @ verkada → category channel (1 total channels)
[2026-02-07T15:33:00.356Z] [BOT] 💾 BEFORE MERGE: 1374 jobs in memory (cached)
[2026-02-07T15:33:00.380Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T15:33:00.380Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1374
[2026-02-07T15:33:00.384Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:33:00.384Z] [BOT] 💾 AFTER MERGE: 1374 jobs (merged disk + memory)
[2026-02-07T15:33:00.385Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T15:33:00.392Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T15:33:00.392Z] [BOT] ✅ Archiving complete: 10 archived, 1364 active
[2026-02-07T15:33:00.467Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:01.970Z] [BOT] 📍 [ROUTING] "Critical Accounts Program, Engineer" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:33:02.500Z] [BOT] ✅ Posted message: Critical Accounts Program, Engineer @ verkada in #💻・tech-jobs
[2026-02-07T15:33:02.500Z] [BOT] ✅ Industry: Critical Accounts Program, Engineer @ verkada
[2026-02-07T15:33:02.500Z] [BOT] 💾 Added channel posting: Critical Accounts Program, Engineer @ verkada → category channel (1 total channels)
[2026-02-07T15:33:02.501Z] [BOT] 💾 BEFORE MERGE: 1365 jobs in memory (cached)
[2026-02-07T15:33:02.520Z] [BOT] ✅ Loaded V2 database: 1364 jobs
💾 DISK STATE: 1364 jobs on disk
[2026-02-07T15:33:02.520Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1365
[2026-02-07T15:33:02.523Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:33:02.523Z] [BOT] 💾 AFTER MERGE: 1365 jobs (merged disk + memory)
[2026-02-07T15:33:02.524Z] [BOT] ✅ No jobs to archive (all 1365 jobs within 7-day window)
[2026-02-07T15:33:02.582Z] [BOT] 💾 Saved posted_jobs.json: 1365 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:04.084Z] [BOT] 📍 [ROUTING] "Embedded Software Engineer - Access Control" @ verkada
   Category: TECH (matched: "software")
[2026-02-07T15:33:04.084Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:33:05.793Z] [BOT] ✅ Posted message: Embedded Software Engineer - Access Control @ verkada in #💻・tech-jobs
  ✅ Industry: Embedded Software Engineer - Access Control @ verkada
[2026-02-07T15:33:05.794Z] [BOT] 💾 Added channel posting: Embedded Software Engineer - Access Control @ verkada → category channel (1 total channels)
[2026-02-07T15:33:05.794Z] [BOT] 💾 BEFORE MERGE: 1366 jobs in memory (cached)
[2026-02-07T15:33:05.813Z] [BOT] ✅ Loaded V2 database: 1365 jobs
💾 DISK STATE: 1365 jobs on disk
[2026-02-07T15:33:05.814Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1366
[2026-02-07T15:33:05.817Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:33:05.817Z] [BOT] 💾 AFTER MERGE: 1366 jobs (merged disk + memory)
[2026-02-07T15:33:05.818Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-02-07T15:33:05.876Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:07.377Z] [BOT] 🔢 Loaded persisted counter for channel CH_0abe8da4: 75
[2026-02-07T15:33:07.562Z] [BOT] ✅ Posted message: Embedded Software Engineer - Access Control @ verkada in #🏠・JID_ead674af
[2026-02-07T15:33:07.562Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-07T15:33:07.563Z] [BOT] 💾 Added channel posting: Embedded Software Engineer - Access Control @ verkada → location channel (2 total channels)
💾 BEFORE MERGE: 1366 jobs in memory (cached)
[2026-02-07T15:33:07.583Z] [BOT] ✅ Loaded V2 database: 1366 jobs
💾 DISK STATE: 1366 jobs on disk
[2026-02-07T15:33:07.583Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1366
[2026-02-07T15:33:07.586Z] [BOT] 🔀 Deep merged: Embedded Software Engineer - Access Control @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T15:33:07.586Z] [BOT] 💾 AFTER MERGE: 1366 jobs (merged disk + memory)
[2026-02-07T15:33:07.587Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-02-07T15:33:07.646Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:09.149Z] [BOT] 📍 [ROUTING] "Embedded UI Engineer" @ verkada
[2026-02-07T15:33:09.149Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:33:09.343Z] [BOT] ✅ Posted message: Embedded UI Engineer @ verkada in #💻・tech-jobs
[2026-02-07T15:33:09.343Z] [BOT] ✅ Industry: Embedded UI Engineer @ verkada
[2026-02-07T15:33:09.344Z] [BOT] 💾 Added channel posting: Embedded UI Engineer @ verkada → category channel (1 total channels)
[2026-02-07T15:33:09.344Z] [BOT] 💾 BEFORE MERGE: 1367 jobs in memory (cached)
[2026-02-07T15:33:09.363Z] [BOT] ✅ Loaded V2 database: 1366 jobs
💾 DISK STATE: 1366 jobs on disk
[2026-02-07T15:33:09.364Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1367
[2026-02-07T15:33:09.367Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1367 jobs (merged disk + memory)
[2026-02-07T15:33:09.367Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-02-07T15:33:09.423Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:11.172Z] [BOT] ✅ Posted message: Embedded UI Engineer @ verkada in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-07T15:33:11.172Z] [BOT] 💾 Added channel posting: Embedded UI Engineer @ verkada → location channel (2 total channels)
[2026-02-07T15:33:11.173Z] [BOT] 💾 BEFORE MERGE: 1367 jobs in memory (cached)
[2026-02-07T15:33:11.191Z] [BOT] ✅ Loaded V2 database: 1367 jobs
💾 DISK STATE: 1367 jobs on disk
[2026-02-07T15:33:11.192Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1367
[2026-02-07T15:33:11.195Z] [BOT] 🔀 Deep merged: Embedded UI Engineer @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1367 jobs (merged disk + memory)
[2026-02-07T15:33:11.196Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-02-07T15:33:11.255Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:12.757Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Middle East" @ verkada
[2026-02-07T15:33:12.757Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:33:13.010Z] [BOT] ✅ Posted message: Enterprise Solutions Engineer, Middle East @ verkada in #💻・tech-jobs
[2026-02-07T15:33:13.010Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Middle East @ verkada
[2026-02-07T15:33:13.010Z] [BOT] 💾 Added channel posting: Enterprise Solutions Engineer, Middle East @ verkada → category channel (1 total channels)
[2026-02-07T15:33:13.011Z] [BOT] 💾 BEFORE MERGE: 1368 jobs in memory (cached)
[2026-02-07T15:33:13.030Z] [BOT] ✅ Loaded V2 database: 1367 jobs
💾 DISK STATE: 1367 jobs on disk
[2026-02-07T15:33:13.031Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1368
[2026-02-07T15:33:13.034Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:33:13.034Z] [BOT] 💾 AFTER MERGE: 1368 jobs (merged disk + memory)
[2026-02-07T15:33:13.035Z] [BOT] ✅ No jobs to archive (all 1368 jobs within 7-day window)
[2026-02-07T15:33:13.091Z] [BOT] 💾 Saved posted_jobs.json: 1368 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:14.593Z] [BOT] 📍 [ROUTING] "Frontend Software Engineering Intern 2026" @ verkada
[2026-02-07T15:33:14.594Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:33:14.787Z] [BOT] ✅ Posted message: Frontend Software Engineering Intern 2026 @ verkada in #💻・tech-jobs
[2026-02-07T15:33:14.787Z] [BOT] ✅ Industry: Frontend Software Engineering Intern 2026 @ verkada
[2026-02-07T15:33:14.788Z] [BOT] 💾 Added channel posting: Frontend Software Engineering Intern 2026 @ verkada → category channel (1 total channels)
[2026-02-07T15:33:14.788Z] [BOT] 💾 BEFORE MERGE: 1369 jobs in memory (cached)
[2026-02-07T15:33:14.808Z] [BOT] ✅ Loaded V2 database: 1368 jobs
💾 DISK STATE: 1368 jobs on disk
[2026-02-07T15:33:14.808Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1369
[2026-02-07T15:33:14.811Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1369 jobs (merged disk + memory)
[2026-02-07T15:33:14.812Z] [BOT] ✅ No jobs to archive (all 1369 jobs within 7-day window)
[2026-02-07T15:33:14.869Z] [BOT] 💾 Saved posted_jobs.json: 1369 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:19.372Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-02-07T15:33:19.374Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Texas - Corporate)" @ verkada
[2026-02-07T15:33:19.374Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
🔢 Loaded persisted counter for channel CH_bd916e08: 74
[2026-02-07T15:33:19.617Z] [BOT] ✅ Posted message: Enterprise Account Executive (Texas - Corporate) @ verkada in #💰・finance-jobs
[2026-02-07T15:33:19.617Z] [BOT] ✅ Industry: Enterprise Account Executive (Texas - Corporate) @ verkada
[2026-02-07T15:33:19.618Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Texas - Corporate) @ verkada → category channel (1 total channels)
[2026-02-07T15:33:19.618Z] [BOT] 💾 BEFORE MERGE: 1370 jobs in memory (cached)
[2026-02-07T15:33:19.637Z] [BOT] ✅ Loaded V2 database: 1369 jobs
💾 DISK STATE: 1369 jobs on disk
[2026-02-07T15:33:19.638Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1370
[2026-02-07T15:33:19.640Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1370 jobs (merged disk + memory)
[2026-02-07T15:33:19.641Z] [BOT] ✅ No jobs to archive (all 1370 jobs within 7-day window)
[2026-02-07T15:33:19.704Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:21.207Z] [BOT] 📍 [ROUTING] "Executive Assistant, Strategy & Operations" @ verkada
[2026-02-07T15:33:21.207Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:33:21.489Z] [BOT] ✅ Posted message: Executive Assistant, Strategy & Operations @ verkada in #💰・finance-jobs
[2026-02-07T15:33:21.489Z] [BOT] ✅ Industry: Executive Assistant, Strategy & Operations @ verkada
[2026-02-07T15:33:21.489Z] [BOT] 💾 Added channel posting: Executive Assistant, Strategy & Operations @ verkada → category channel (1 total channels)
[2026-02-07T15:33:21.489Z] [BOT] 💾 BEFORE MERGE: 1371 jobs in memory (cached)
[2026-02-07T15:33:21.508Z] [BOT] ✅ Loaded V2 database: 1370 jobs
💾 DISK STATE: 1370 jobs on disk
[2026-02-07T15:33:21.509Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1371
[2026-02-07T15:33:21.512Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1371 jobs (merged disk + memory)
[2026-02-07T15:33:21.512Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-02-07T15:33:21.578Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:23.240Z] [BOT] ✅ Posted message: Executive Assistant, Strategy & Operations @ verkada in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-07T15:33:23.240Z] [BOT] 💾 Added channel posting: Executive Assistant, Strategy & Operations @ verkada → location channel (2 total channels)
[2026-02-07T15:33:23.240Z] [BOT] 💾 BEFORE MERGE: 1371 jobs in memory (cached)
[2026-02-07T15:33:23.259Z] [BOT] ✅ Loaded V2 database: 1371 jobs
💾 DISK STATE: 1371 jobs on disk
[2026-02-07T15:33:23.260Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1371
[2026-02-07T15:33:23.262Z] [BOT] 🔀 Deep merged: Executive Assistant, Strategy & Operations @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T15:33:23.263Z] [BOT] 💾 AFTER MERGE: 1371 jobs (merged disk + memory)
[2026-02-07T15:33:23.264Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-02-07T15:33:23.327Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:27.829Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-02-07T15:33:27.830Z] [BOT] 📍 [ROUTING] "Field Chief Technology Officer" @ verkada
   Category: AI (matched: "machine learning")
[2026-02-07T15:33:27.830Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
🔢 Loaded persisted counter for channel CH_fff0e4bf: 375
[2026-02-07T15:33:28.144Z] [BOT] ✅ Posted message: Field Chief Technology Officer @ verkada in #🤖・ai-jobs
  ✅ Industry: Field Chief Technology Officer @ verkada
[2026-02-07T15:33:28.145Z] [BOT] 💾 Added channel posting: Field Chief Technology Officer @ verkada → category channel (1 total channels)
[2026-02-07T15:33:28.145Z] [BOT] 💾 BEFORE MERGE: 1372 jobs in memory (cached)
[2026-02-07T15:33:28.164Z] [BOT] ✅ Loaded V2 database: 1371 jobs
💾 DISK STATE: 1371 jobs on disk
[2026-02-07T15:33:28.164Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1372
[2026-02-07T15:33:28.167Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1372 jobs (merged disk + memory)
[2026-02-07T15:33:28.168Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-02-07T15:33:28.231Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:29.733Z] [BOT] 📍 [ROUTING] "Frontend Engineer - Search & Computer Vision" @ verkada
[2026-02-07T15:33:29.733Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-07T15:33:29.907Z] [BOT] ✅ Posted message: Frontend Engineer - Search & Computer Vision @ verkada in #🤖・ai-jobs
  ✅ Industry: Frontend Engineer - Search & Computer Vision @ verkada
[2026-02-07T15:33:29.908Z] [BOT] 💾 Added channel posting: Frontend Engineer - Search & Computer Vision @ verkada → category channel (1 total channels)
[2026-02-07T15:33:29.908Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T15:33:29.927Z] [BOT] ✅ Loaded V2 database: 1372 jobs
💾 DISK STATE: 1372 jobs on disk
[2026-02-07T15:33:29.928Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T15:33:29.930Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:33:29.931Z] [BOT] 💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T15:33:29.931Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T15:33:29.994Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:31.644Z] [BOT] ✅ Posted message: Frontend Engineer - Search & Computer Vision @ verkada in #🏠・JID_ead674af
[2026-02-07T15:33:31.644Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-07T15:33:31.645Z] [BOT] 💾 Added channel posting: Frontend Engineer - Search & Computer Vision @ verkada → location channel (2 total channels)
[2026-02-07T15:33:31.645Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T15:33:31.664Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T15:33:31.664Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T15:33:31.667Z] [BOT] 🔀 Deep merged: Frontend Engineer - Search & Computer Vision @ verkada (disk: 1 channels → merged: 2 channels)
[2026-02-07T15:33:31.668Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T15:33:31.668Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T15:33:31.731Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:33:36.233Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-07T15:33:36.234Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "e25645abda67284f"
[2026-02-07T15:33:36.234Z] [BOT] ⏭️  Skipping duplicate: JID_ced3796f (posted within 7 days)
[2026-02-07T15:33:36.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "692f675fa4c63972"
[2026-02-07T15:33:36.235Z] [BOT] ⏭️  Skipping duplicate: JID_34bfed6c (posted within 7 days)
[2026-02-07T15:33:36.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "fb6621a81c2b4294"
[2026-02-07T15:33:36.235Z] [BOT] ⏭️  Skipping duplicate: JID_d8f685ea (posted within 7 days)
[2026-02-07T15:33:36.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "9200833e2f53b885"
⏭️  Skipping duplicate: JID_c590de67 (posted within 7 days)
[2026-02-07T15:33:36.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "f6c9c9e4527cb9fd"
[2026-02-07T15:33:36.236Z] [BOT] ⏭️  Skipping duplicate: JID_0c140562 (posted within 7 days)
[2026-02-07T15:33:36.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "2ddbe667a62e61a6"
⏭️  Skipping duplicate: JID_297ade78 (posted within 7 days)
[2026-02-07T15:33:36.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "77b6a6c308b9008a"
⏭️  Skipping duplicate: JID_23056f64 (posted within 7 days)
[2026-02-07T15:33:36.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfc0755c..." not found, but found as SHA256 "dc7fab369ac1a7b0"
⏭️  Skipping duplicate: JID_a7e08e81 (posted within 7 days)
[2026-02-07T15:33:36.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "ec379b17ad1f36b3"
⏭️  Skipping duplicate: JID_867e0b3e (posted within 7 days)
[2026-02-07T15:33:36.237Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "1de168c02ac703a3"
⏭️  Skipping duplicate: JID_e6828cb8 (posted within 7 days)
[2026-02-07T15:33:36.257Z] [BOT] ✅ Loaded pending queue: 371 total (331 pending, 40 enriched, 0 posted)
[2026-02-07T15:33:36.294Z] [BOT] ✅ Saved pending queue: 371 total (331 pending, 30 enriched, 10 posted)
[2026-02-07T15:33:36.294Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T15:33:36.406Z] [BOT] 📂 Loaded 12651 existing routing entries
[2026-02-07T15:33:36.528Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-07T15:33:36.528Z] [BOT] Total entries: 12661
   Timestamp: 2026-02-07T15:33:36.475Z
[2026-02-07T15:33:36.529Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T15:33:36.529Z] [BOT] Total attempts: 26
   Successful: 14
   Failed: 0
   Skipped: 12
[2026-02-07T15:33:36.529Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T15:33:36.529Z] [BOT] Last cleanup: Never
   Total posts: 14
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 6 posts
[2026-02-07T15:33:36.529Z] [BOT] 2. #🏠・JID_ead674af: 4 posts
     3. #💰・finance-jobs: 2 posts
     4. #🤖・ai-jobs: 2 posts
[2026-02-07T15:33:36.529Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T15:33:36.529Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T15:33:36.549Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T15:33:36.550Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T15:33:36.553Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:33:36.553Z] [BOT] 💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T15:33:36.554Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T15:33:36.624Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
[2026-02-07T15:33:36.624Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-07T15:33:38.642Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*