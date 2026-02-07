# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T15:19:09.328Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T15:18:25.833Z] ========================================
[2026-02-07T15:18:25.835Z] Discord Bot Execution Log
[2026-02-07T15:18:25.835Z] Environment: GitHub Actions
[2026-02-07T15:18:25.835Z] Node Version: v20.20.0
[2026-02-07T15:18:25.835Z] ========================================
[2026-02-07T15:18:25.835Z] Environment Variables Check:
[2026-02-07T15:18:25.835Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T15:18:25.835Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T15:18:25.835Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T15:18:25.835Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T15:18:25.836Z] 
Multi-Channel Configuration:
[2026-02-07T15:18:25.836Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T15:18:25.836Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:18:25.836Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:18:25.836Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T15:18:25.836Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:18:25.836Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:18:25.836Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:18:25.836Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:18:25.836Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:18:25.836Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T15:18:25.836Z] 
Data Files Check:
[2026-02-07T15:18:25.838Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150376 bytes)
[2026-02-07T15:18:25.875Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6063421 bytes)
[2026-02-07T15:18:25.875Z] 
========================================
[2026-02-07T15:18:25.875Z] Starting Enhanced Discord Bot...
[2026-02-07T15:18:25.875Z] ========================================
[2026-02-07T15:18:26.459Z] [BOT] ✅ Loaded V2 database: 1373 jobs
[2026-02-07T15:18:27.067Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-07T15:18:27.068Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T15:18:27.068Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T15:18:27.097Z] [BOT] ✅ Loaded pending queue: 390 total (340 pending, 50 enriched, 0 posted)
[2026-02-07T15:18:27.097Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T15:18:27.098Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T15:18:27.098Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T15:18:27.098Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T15:18:27.099Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T15:18:27.109Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T15:18:27.109Z] [BOT] 🚫 Skipping blacklisted job: Growth Manager at verkada
🚫 Skipping blacklisted job: Growth Manager, Brand at verkada
🚫 Skipping blacklisted job: Hardware Engineering Program Manager at verkada
[2026-02-07T15:18:27.109Z] [BOT] 🚫 Skipping blacklisted job: Lead Embedded Engineer - Intercom at verkada
🚫 Skipping blacklisted job: Lead Product Designer at verkada
🚫 Skipping blacklisted job: Lead Product Manager, New Alarms Product at verkada
[2026-02-07T15:18:27.109Z] [BOT] 🚫 Skipping blacklisted job: Manager of Compensation at verkada
🚫 Skipping blacklisted job: Marketing Operations Manager at verkada
[2026-02-07T15:18:27.110Z] [BOT] 🚫 Skipping blacklisted job: Marketing Recruiting Manager at verkada
[2026-02-07T15:18:27.149Z] [BOT] ✅ Loaded pending queue: 390 total (340 pending, 50 enriched, 0 posted)
[2026-02-07T15:18:27.190Z] [BOT] ✅ Saved pending queue: 381 total (340 pending, 41 enriched, 0 posted)
🗑️ Removed 9 blacklisted jobs from pending queue
[2026-02-07T15:18:27.190Z] [BOT] 📋 After blacklist filter: 39 jobs (9 blacklisted)
📋 After data quality filter: 39 jobs (0 invalid)
[2026-02-07T15:18:27.191Z] [BOT] 📋 After multi-location grouping: 34 unique jobs to post
[2026-02-07T15:18:27.191Z] [BOT] (5 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T15:18:27.195Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-07T15:18:27.196Z] [BOT] 📍 [ROUTING] "Analytics Engineer" @ verkada
[2026-02-07T15:18:27.196Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-07T15:18:27.197Z] [BOT] 🔢 Initialized channel CH_575c634a counter at 114 (active: 114, archive: 0)
[2026-02-07T15:18:27.214Z] [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T15:18:27.551Z] [BOT] ✅ Posted message: Analytics Engineer @ verkada in #📊・JID_fb739488
  ✅ Industry: Analytics Engineer @ verkada
[2026-02-07T15:18:27.552Z] [BOT] 💾 Added channel posting: Analytics Engineer @ verkada → category channel (1 total channels)
[2026-02-07T15:18:27.552Z] [BOT] 💾 BEFORE MERGE: 1374 jobs in memory (cached)
[2026-02-07T15:18:27.575Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T15:18:27.576Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1374
[2026-02-07T15:18:27.580Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1374 jobs (merged disk + memory)
[2026-02-07T15:18:27.581Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T15:18:27.588Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T15:18:27.588Z] [BOT] ✅ Archiving complete: 10 archived, 1364 active
[2026-02-07T15:18:27.654Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:32.158Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-02-07T15:18:32.158Z] [BOT] 📍 [ROUTING] "Associate, Pricing & Commercial Operations" @ verkada
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:18:32.158Z] [BOT] 🔢 Loaded persisted counter for channel CH_bd916e08: 72
[2026-02-07T15:18:32.523Z] [BOT] ✅ Posted message: Associate, Pricing & Commercial Operations @ verkada in #💰・finance-jobs
[2026-02-07T15:18:32.523Z] [BOT] ✅ Industry: Associate, Pricing & Commercial Operations @ verkada
[2026-02-07T15:18:32.523Z] [BOT] 💾 Added channel posting: Associate, Pricing & Commercial Operations @ verkada → category channel (1 total channels)
[2026-02-07T15:18:32.524Z] [BOT] 💾 BEFORE MERGE: 1365 jobs in memory (cached)
[2026-02-07T15:18:32.544Z] [BOT] ✅ Loaded V2 database: 1364 jobs
💾 DISK STATE: 1364 jobs on disk
[2026-02-07T15:18:32.544Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1365
[2026-02-07T15:18:32.547Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:18:32.547Z] [BOT] 💾 AFTER MERGE: 1365 jobs (merged disk + memory)
[2026-02-07T15:18:32.548Z] [BOT] ✅ No jobs to archive (all 1365 jobs within 7-day window)
[2026-02-07T15:18:32.610Z] [BOT] 💾 Saved posted_jobs.json: 1365 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:34.112Z] [BOT] 📍 [ROUTING] "Associate Technical Recruiter" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:18:34.303Z] [BOT] ✅ Posted message: Associate Technical Recruiter @ verkada in #💰・finance-jobs
  ✅ Industry: Associate Technical Recruiter @ verkada
[2026-02-07T15:18:34.303Z] [BOT] 💾 Added channel posting: Associate Technical Recruiter @ verkada → category channel (1 total channels)
[2026-02-07T15:18:34.303Z] [BOT] 💾 BEFORE MERGE: 1366 jobs in memory (cached)
[2026-02-07T15:18:34.322Z] [BOT] ✅ Loaded V2 database: 1365 jobs
💾 DISK STATE: 1365 jobs on disk
[2026-02-07T15:18:34.323Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1366
[2026-02-07T15:18:34.326Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:18:34.326Z] [BOT] 💾 AFTER MERGE: 1366 jobs (merged disk + memory)
[2026-02-07T15:18:34.326Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-02-07T15:18:34.383Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:35.885Z] [BOT] 🔢 Initialized channel CH_d0df6b2e counter at 129 (active: 129, archive: 0)
[2026-02-07T15:18:36.140Z] [BOT] ✅ Posted message: Associate Technical Recruiter @ verkada in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-07T15:18:36.140Z] [BOT] 💾 Added channel posting: Associate Technical Recruiter @ verkada → location channel (2 total channels)
💾 BEFORE MERGE: 1366 jobs in memory (cached)
[2026-02-07T15:18:36.159Z] [BOT] ✅ Loaded V2 database: 1366 jobs
💾 DISK STATE: 1366 jobs on disk
[2026-02-07T15:18:36.160Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1366
[2026-02-07T15:18:36.163Z] [BOT] 🔀 Deep merged: Associate Technical Recruiter @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T15:18:36.163Z] [BOT] 💾 AFTER MERGE: 1366 jobs (merged disk + memory)
[2026-02-07T15:18:36.164Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-02-07T15:18:36.223Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:40.725Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-02-07T15:18:40.726Z] [BOT] 📍 [ROUTING] "Associate Solutions Engineer, San Mateo" @ verkada
[2026-02-07T15:18:40.726Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
🔢 Loaded persisted counter for channel CH_44b6ec5f: 835
[2026-02-07T15:18:41.040Z] [BOT] ✅ Posted message: Associate Solutions Engineer, San Mateo @ verkada in #💻・tech-jobs
  ✅ Industry: Associate Solutions Engineer, San Mateo @ verkada
[2026-02-07T15:18:41.041Z] [BOT] 💾 Added channel posting: Associate Solutions Engineer, San Mateo @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 1367 jobs in memory (cached)
[2026-02-07T15:18:41.060Z] [BOT] ✅ Loaded V2 database: 1366 jobs
💾 DISK STATE: 1366 jobs on disk
[2026-02-07T15:18:41.061Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1367
[2026-02-07T15:18:41.064Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1367 jobs (merged disk + memory)
[2026-02-07T15:18:41.064Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-02-07T15:18:41.128Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:42.630Z] [BOT] 📍 [ROUTING] "Backend Engineer - Access Control" @ verkada
[2026-02-07T15:18:42.630Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:18:42.995Z] [BOT] ✅ Posted message: Backend Engineer - Access Control @ verkada in #💻・tech-jobs
[2026-02-07T15:18:42.996Z] [BOT] ✅ Industry: Backend Engineer - Access Control @ verkada
[2026-02-07T15:18:42.996Z] [BOT] 💾 Added channel posting: Backend Engineer - Access Control @ verkada → category channel (1 total channels)
[2026-02-07T15:18:42.996Z] [BOT] 💾 BEFORE MERGE: 1368 jobs in memory (cached)
[2026-02-07T15:18:43.015Z] [BOT] ✅ Loaded V2 database: 1367 jobs
💾 DISK STATE: 1367 jobs on disk
[2026-02-07T15:18:43.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1368
[2026-02-07T15:18:43.019Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:18:43.019Z] [BOT] 💾 AFTER MERGE: 1368 jobs (merged disk + memory)
[2026-02-07T15:18:43.019Z] [BOT] ✅ No jobs to archive (all 1368 jobs within 7-day window)
[2026-02-07T15:18:43.085Z] [BOT] 💾 Saved posted_jobs.json: 1368 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:44.587Z] [BOT] 🔢 Initialized channel CH_0abe8da4 counter at 72 (active: 72, archive: 0)
[2026-02-07T15:18:44.813Z] [BOT] ✅ Posted message: Backend Engineer - Access Control @ verkada in #🏠・JID_ead674af
[2026-02-07T15:18:44.814Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-07T15:18:44.814Z] [BOT] 💾 Added channel posting: Backend Engineer - Access Control @ verkada → location channel (2 total channels)
[2026-02-07T15:18:44.814Z] [BOT] 💾 BEFORE MERGE: 1368 jobs in memory (cached)
[2026-02-07T15:18:44.833Z] [BOT] ✅ Loaded V2 database: 1368 jobs
💾 DISK STATE: 1368 jobs on disk
[2026-02-07T15:18:44.833Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1368
[2026-02-07T15:18:44.836Z] [BOT] 🔀 Deep merged: Backend Engineer - Access Control @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1368 jobs (merged disk + memory)
[2026-02-07T15:18:44.837Z] [BOT] ✅ No jobs to archive (all 1368 jobs within 7-day window)
[2026-02-07T15:18:44.902Z] [BOT] 💾 Saved posted_jobs.json: 1368 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:46.405Z] [BOT] 📍 [ROUTING] "Backend Engineer, Growth" @ verkada
   Category: TECH (matched: "web engineer")
[2026-02-07T15:18:46.405Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:18:46.716Z] [BOT] ✅ Posted message: Backend Engineer, Growth @ verkada in #💻・tech-jobs
  ✅ Industry: Backend Engineer, Growth @ verkada
[2026-02-07T15:18:46.717Z] [BOT] 💾 Added channel posting: Backend Engineer, Growth @ verkada → category channel (1 total channels)
[2026-02-07T15:18:46.717Z] [BOT] 💾 BEFORE MERGE: 1369 jobs in memory (cached)
[2026-02-07T15:18:46.736Z] [BOT] ✅ Loaded V2 database: 1368 jobs
💾 DISK STATE: 1368 jobs on disk
[2026-02-07T15:18:46.736Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1369
[2026-02-07T15:18:46.739Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1369 jobs (merged disk + memory)
[2026-02-07T15:18:46.740Z] [BOT] ✅ No jobs to archive (all 1369 jobs within 7-day window)
[2026-02-07T15:18:46.804Z] [BOT] 💾 Saved posted_jobs.json: 1369 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:48.306Z] [BOT] 📍 [ROUTING] "CAP Smokejumper" @ verkada
   Category: TECH (default)
[2026-02-07T15:18:48.306Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:18:48.656Z] [BOT] ✅ Posted message: CAP Smokejumper @ verkada in #💻・tech-jobs
[2026-02-07T15:18:48.656Z] [BOT] ✅ Industry: CAP Smokejumper @ verkada
[2026-02-07T15:18:48.656Z] [BOT] 💾 Added channel posting: CAP Smokejumper @ verkada → category channel (1 total channels)
[2026-02-07T15:18:48.656Z] [BOT] 💾 BEFORE MERGE: 1370 jobs in memory (cached)
[2026-02-07T15:18:48.675Z] [BOT] ✅ Loaded V2 database: 1369 jobs
💾 DISK STATE: 1369 jobs on disk
[2026-02-07T15:18:48.676Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1370
[2026-02-07T15:18:48.679Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:18:48.679Z] [BOT] 💾 AFTER MERGE: 1370 jobs (merged disk + memory)
[2026-02-07T15:18:48.679Z] [BOT] ✅ No jobs to archive (all 1370 jobs within 7-day window)
[2026-02-07T15:18:48.745Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:53.247Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-07T15:18:53.249Z] [BOT] 📍 [ROUTING] "Backend Software Engineering Intern 2026" @ verkada
[2026-02-07T15:18:53.249Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
🔢 Loaded persisted counter for channel CH_fff0e4bf: 372
[2026-02-07T15:18:53.469Z] [BOT] ✅ Posted message: Backend Software Engineering Intern 2026 @ verkada in #🤖・ai-jobs
  ✅ Industry: Backend Software Engineering Intern 2026 @ verkada
[2026-02-07T15:18:53.470Z] [BOT] 💾 Added channel posting: Backend Software Engineering Intern 2026 @ verkada → category channel (1 total channels)
[2026-02-07T15:18:53.470Z] [BOT] 💾 BEFORE MERGE: 1371 jobs in memory (cached)
[2026-02-07T15:18:53.489Z] [BOT] ✅ Loaded V2 database: 1370 jobs
💾 DISK STATE: 1370 jobs on disk
[2026-02-07T15:18:53.490Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1371
[2026-02-07T15:18:53.493Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1371 jobs (merged disk + memory)
[2026-02-07T15:18:53.494Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-02-07T15:18:53.556Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:55.330Z] [BOT] ✅ Posted message: Backend Software Engineering Intern 2026 @ verkada in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-07T15:18:55.331Z] [BOT] 💾 Added channel posting: Backend Software Engineering Intern 2026 @ verkada → location channel (2 total channels)
[2026-02-07T15:18:55.331Z] [BOT] 💾 BEFORE MERGE: 1371 jobs in memory (cached)
[2026-02-07T15:18:55.350Z] [BOT] ✅ Loaded V2 database: 1371 jobs
💾 DISK STATE: 1371 jobs on disk
[2026-02-07T15:18:55.351Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1371
[2026-02-07T15:18:55.354Z] [BOT] 🔀 Deep merged: Backend Software Engineering Intern 2026 @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T15:18:55.354Z] [BOT] 💾 AFTER MERGE: 1371 jobs (merged disk + memory)
[2026-02-07T15:18:55.355Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-02-07T15:18:55.418Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:56.918Z] [BOT] 📍 [ROUTING] "Backend Software Engineer - University Graduate 2026" @ verkada
   Category: AI (matched: "AI specialization")
[2026-02-07T15:18:56.918Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-07T15:18:57.235Z] [BOT] ✅ Posted message: Backend Software Engineer - University Graduate 2026 @ verkada in #🤖・ai-jobs
  ✅ Industry: Backend Software Engineer - University Graduate 2026 @ verkada
[2026-02-07T15:18:57.236Z] [BOT] 💾 Added channel posting: Backend Software Engineer - University Graduate 2026 @ verkada → category channel (1 total channels)
[2026-02-07T15:18:57.236Z] [BOT] 💾 BEFORE MERGE: 1372 jobs in memory (cached)
[2026-02-07T15:18:57.255Z] [BOT] ✅ Loaded V2 database: 1371 jobs
💾 DISK STATE: 1371 jobs on disk
[2026-02-07T15:18:57.255Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1372
[2026-02-07T15:18:57.258Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:18:57.258Z] [BOT] 💾 AFTER MERGE: 1372 jobs (merged disk + memory)
[2026-02-07T15:18:57.259Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-02-07T15:18:57.324Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:18:59.257Z] [BOT] ✅ Posted message: Backend Software Engineer - University Graduate 2026 @ verkada in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-07T15:18:59.258Z] [BOT] 💾 Added channel posting: Backend Software Engineer - University Graduate 2026 @ verkada → location channel (2 total channels)
[2026-02-07T15:18:59.258Z] [BOT] 💾 BEFORE MERGE: 1372 jobs in memory (cached)
[2026-02-07T15:18:59.277Z] [BOT] ✅ Loaded V2 database: 1372 jobs
💾 DISK STATE: 1372 jobs on disk
[2026-02-07T15:18:59.277Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1372
[2026-02-07T15:18:59.280Z] [BOT] 🔀 Deep merged: Backend Software Engineer - University Graduate 2026 @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1372 jobs (merged disk + memory)
[2026-02-07T15:18:59.281Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-02-07T15:18:59.345Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:19:00.846Z] [BOT] 📍 [ROUTING] "Computer Vision Software Engineer - University Graduate 2026" @ verkada
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-07T15:19:00.846Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-07T15:19:01.053Z] [BOT] ✅ Posted message: Computer Vision Software Engineer - University Graduate 2026 @ verkada in #🤖・ai-jobs
  ✅ Industry: Computer Vision Software Engineer - University Graduate 2026 @ verkada
[2026-02-07T15:19:01.054Z] [BOT] 💾 Added channel posting: Computer Vision Software Engineer - University Graduate 2026 @ verkada → category channel (1 total channels)
💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T15:19:01.073Z] [BOT] ✅ Loaded V2 database: 1372 jobs
💾 DISK STATE: 1372 jobs on disk
[2026-02-07T15:19:01.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T15:19:01.077Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:19:01.077Z] [BOT] 💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T15:19:01.078Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T15:19:01.141Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:19:05.643Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-07T15:19:05.644Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "ce783bd242d4276b"
[2026-02-07T15:19:05.644Z] [BOT] ⏭️  Skipping duplicate: JID_bd03555e (posted within 7 days)
[2026-02-07T15:19:05.645Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "a21b7ffc82a4e7b3"
[2026-02-07T15:19:05.645Z] [BOT] ⏭️  Skipping duplicate: JID_dac5c56e (posted within 7 days)
[2026-02-07T15:19:05.645Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "6c3571c3a93a19dd"
⏭️  Skipping duplicate: JID_096c023b (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "8813a3436ffd231d"
⏭️  Skipping duplicate: JID_1f7d54bb (posted within 7 days)
[2026-02-07T15:19:05.646Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "3a30743842c8634f"
⏭️  Skipping duplicate: JID_a3ab9b17 (posted within 7 days)
[2026-02-07T15:19:05.646Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cdca6ad9..." not found, but found as SHA256 "4c8bc7531b918713"
⏭️  Skipping duplicate: JID_bac5b7e6 (posted within 7 days)
[2026-02-07T15:19:05.646Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "0829ef25b9dc3d25"
[2026-02-07T15:19:05.646Z] [BOT] ⏭️  Skipping duplicate: JID_6f9626ce (posted within 7 days)
[2026-02-07T15:19:05.646Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "ca3d85d909df1382"
⏭️  Skipping duplicate: JID_47f128e5 (posted within 7 days)
[2026-02-07T15:19:05.646Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "2f4ed57be96eb7d9"
⏭️  Skipping duplicate: JID_ea27ca51 (posted within 7 days)
[2026-02-07T15:19:05.647Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "acee32dc6b2bb306"
[2026-02-07T15:19:05.647Z] [BOT] ⏭️  Skipping duplicate: JID_daa1d86d (posted within 7 days)
[2026-02-07T15:19:05.667Z] [BOT] ✅ Loaded pending queue: 381 total (340 pending, 41 enriched, 0 posted)
[2026-02-07T15:19:05.705Z] [BOT] ✅ Saved pending queue: 381 total (340 pending, 31 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T15:19:05.819Z] [BOT] 📂 Loaded 12641 existing routing entries
[2026-02-07T15:19:05.943Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-07T15:19:05.944Z] [BOT] Total entries: 12651
   Timestamp: 2026-02-07T15:19:05.890Z
[2026-02-07T15:19:05.944Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T15:19:05.944Z] [BOT] Total attempts: 25
   Successful: 14
   Failed: 0
   Skipped: 11
[2026-02-07T15:19:05.944Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-07T15:19:05.945Z] [BOT] Total posts: 14
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 4 posts
[2026-02-07T15:19:05.945Z] [BOT] 2. #🏠・JID_ead674af: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #💰・finance-jobs: 2 posts
     5. #📊・JID_fb739488: 1 posts
[2026-02-07T15:19:05.945Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T15:19:05.945Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T15:19:05.966Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T15:19:05.967Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T15:19:05.969Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:19:05.970Z] [BOT] 💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T15:19:05.970Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T15:19:06.044Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
[2026-02-07T15:19:06.044Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-07T15:19:08.064Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2608) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*