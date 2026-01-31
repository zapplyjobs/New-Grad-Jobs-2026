# Discord Bot Execution Audit
**Timestamp:** 2026-01-31T21:31:57.340Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-31T21:31:18.653Z] ========================================
[2026-01-31T21:31:18.655Z] Discord Bot Execution Log
[2026-01-31T21:31:18.655Z] Environment: GitHub Actions
[2026-01-31T21:31:18.655Z] Node Version: v20.20.0
[2026-01-31T21:31:18.655Z] ========================================
[2026-01-31T21:31:18.655Z] Environment Variables Check:
[2026-01-31T21:31:18.656Z] DISCORD_TOKEN: ✅ Set
[2026-01-31T21:31:18.656Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.656Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-31T21:31:18.656Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-31T21:31:18.656Z] 
Multi-Channel Configuration:
[2026-01-31T21:31:18.656Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.656Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.656Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.656Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.656Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.656Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.657Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.657Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.657Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-31T21:31:18.657Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-31T21:31:18.657Z] 
Data Files Check:
[2026-01-31T21:31:18.658Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108855 bytes)
[2026-01-31T21:31:18.703Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 8335300 bytes)
[2026-01-31T21:31:18.703Z] 
========================================
[2026-01-31T21:31:18.703Z] Starting Enhanced Discord Bot...
[2026-01-31T21:31:18.703Z] ========================================
[2026-01-31T21:31:19.281Z] [BOT] ✅ Loaded V2 database: 1447 jobs
[2026-01-31T21:31:19.949Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-31T21:31:19.950Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-31T21:31:19.950Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-31T21:31:20.072Z] [BOT] ✅ Loaded pending queue: 2952 total (1475 pending, 50 enriched, 1427 posted)
[2026-01-31T21:31:20.073Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:31:20.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-31T21:31:20.074Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-31T21:31:20.074Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
[2026-01-31T21:31:20.075Z] [BOT] ⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-31T21:31:20.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-31T21:31:20.075Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-31T21:31:20.075Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
[2026-01-31T21:31:20.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
[2026-01-31T21:31:20.076Z] [BOT] ⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-31T21:31:20.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
[2026-01-31T21:31:20.076Z] [BOT] ⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
[2026-01-31T21:31:20.076Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-31T21:31:20.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0c7f0d43..." not found, but found as SHA256 "b24e59b476e85eb5"
[2026-01-31T21:31:20.077Z] [BOT] ⏭️  Skipping duplicate: JID_1791b707-activation_r50030922 (posted within 7 days)
⏭️ Skipping already posted: Analyst – Audience Activation at FOX
[2026-01-31T21:31:20.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f394cd34..." not found, but found as SHA256 "d6b0cc580d11b6e0"
[2026-01-31T21:31:20.077Z] [BOT] ⏭️  Skipping duplicate: JID_ebf8aeb1 (posted within 7 days)
⏭️ Skipping already posted: Meteorologist 1 at AccuWeather
[2026-01-31T21:31:20.077Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e2bf8ab8-dkc_externa..." not found, but found as SHA256 "97c3624d13169416"
⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_22319e29-analytics_r0437932 (posted within 7 days)
[2026-01-31T21:31:20.078Z] [BOT] ⏭️ Skipping already posted: Analyst – People Analytics at DaVita
[2026-01-31T21:31:20.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d7432ca..." not found, but found as SHA256 "06795d5f5f475ea5"
⏭️  Skipping duplicate: JID_fd3aa3ff-asurioncareers_us-JID_aed1d49f-analyst_asu0018284 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c4681636 at Asurion
[2026-01-31T21:31:20.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_98c6a169-erm_careers-jo..." not found, but found as SHA256 "cd5532b5c0e88185"
⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_1b0e2d50-_r00027643-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate – Entry Level - EHS Management Information Systems at ERM
[2026-01-31T21:31:20.078Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_832e1d5c-..." not found, but found as SHA256 "369c9eded44f059e"
⏭️  Skipping duplicate: JID_09c7a369 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New Grad Friendly - IOS at NewsBreak
[2026-01-31T21:31:20.079Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6312b0b9-bah_jobs-job-c..." not found, but found as SHA256 "f5f2b2f3979950ef"
[2026-01-31T21:31:20.079Z] [BOT] ⏭️  Skipping duplicate: JID_6312b0b9-bah_jobs-JID_f5bf3c35-developer_r0232566-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_c2d85098 at Booz Allen
[2026-01-31T21:31:20.088Z] [BOT] 📬 Found 36 new jobs (14 already posted)...
[2026-01-31T21:31:20.089Z] [BOT] 🚫 Skipping blacklisted job: Post-Doctoral Associate at University of Maryland - College Park
[2026-01-31T21:31:20.197Z] [BOT] ✅ Loaded pending queue: 2952 total (1475 pending, 50 enriched, 1427 posted)
[2026-01-31T21:31:20.413Z] [BOT] ✅ Saved pending queue: 2951 total (1475 pending, 49 enriched, 1427 posted)
🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 35 jobs (1 blacklisted)
[2026-01-31T21:31:20.413Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-31T21:31:20.414Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
   (2 grouped as same job with different locations)
[2026-01-31T21:31:20.415Z] [BOT] 📍 1 jobs with multiple locations:
   - Undergrad Software Engineer - Global Industries @ Oracle: united states, san carlos
[2026-01-31T21:31:20.415Z] [BOT] ⏸️ Limiting to 10 jobs this run, 26 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-31T21:31:20.419Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-31T21:31:20.420Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS" @ ORG_08c9a13c
   Category: AI (matched: "machine learning")
[2026-01-31T21:31:20.420Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:31:20.439Z] [BOT ERROR] (node:3023) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-31T21:31:20.713Z] [BOT] ✅ Posted message: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c
[2026-01-31T21:31:20.714Z] [BOT] 💾 Added channel posting: Machine Learning Engineer Graduate - E-Commerce Risk Control - BS/MS @ ORG_08c9a13c → category channel (1 total channels)
[2026-01-31T21:31:20.714Z] [BOT] 💾 BEFORE MERGE: 1448 jobs in memory (cached)
[2026-01-31T21:31:20.741Z] [BOT] ✅ Loaded V2 database: 1447 jobs
💾 DISK STATE: 1447 jobs on disk
[2026-01-31T21:31:20.742Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1448
[2026-01-31T21:31:20.747Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:20.747Z] [BOT] 💾 AFTER MERGE: 1448 jobs (merged disk + memory)
[2026-01-31T21:31:20.748Z] [BOT] ✅ No jobs to archive (all 1448 jobs within 7-day window)
[2026-01-31T21:31:20.859Z] [BOT] 💾 Saved posted_jobs.json: 1448 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:22.362Z] [BOT] 📍 [ROUTING] "University Graduate - Research Scientist/Engineer" @ ORG_72fd3ae0
[2026-01-31T21:31:22.362Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-31T21:31:22.668Z] [BOT] ✅ Posted message: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 in #🤖・ai-jobs
[2026-01-31T21:31:22.668Z] [BOT] ✅ Industry: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0
[2026-01-31T21:31:22.668Z] [BOT] 💾 Added channel posting: University Graduate - Research Scientist/Engineer @ ORG_72fd3ae0 → category channel (1 total channels)
[2026-01-31T21:31:22.669Z] [BOT] 💾 BEFORE MERGE: 1449 jobs in memory (cached)
[2026-01-31T21:31:22.693Z] [BOT] ✅ Loaded V2 database: 1448 jobs
💾 DISK STATE: 1448 jobs on disk
[2026-01-31T21:31:22.693Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1449
[2026-01-31T21:31:22.698Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:22.698Z] [BOT] 💾 AFTER MERGE: 1449 jobs (merged disk + memory)
[2026-01-31T21:31:22.700Z] [BOT] ✅ No jobs to archive (all 1449 jobs within 7-day window)
[2026-01-31T21:31:22.788Z] [BOT] 💾 Saved posted_jobs.json: 1449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:27.289Z] [BOT] 📌 Posting 8 jobs to #💻・tech-jobs
[2026-01-31T21:31:27.289Z] [BOT] 📍 [ROUTING] "Undergrad Software Engineer - Global Industries" @ ORG_dc7620eb
[2026-01-31T21:31:27.290Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:27.560Z] [BOT] ✅ Posted message: Undergrad Software Engineer - Global Industries @ ORG_dc7620eb in #💻・tech-jobs
  ✅ Industry: Undergrad Software Engineer - Global Industries @ ORG_dc7620eb
[2026-01-31T21:31:27.561Z] [BOT] 💾 Added channel posting: Undergrad Software Engineer - Global Industries @ ORG_dc7620eb → category channel (1 total channels)
[2026-01-31T21:31:27.561Z] [BOT] 💾 BEFORE MERGE: 1450 jobs in memory (cached)
[2026-01-31T21:31:27.585Z] [BOT] ✅ Loaded V2 database: 1449 jobs
💾 DISK STATE: 1449 jobs on disk
[2026-01-31T21:31:27.585Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1450
[2026-01-31T21:31:27.591Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:27.591Z] [BOT] 💾 AFTER MERGE: 1450 jobs (merged disk + memory)
[2026-01-31T21:31:27.592Z] [BOT] ✅ No jobs to archive (all 1450 jobs within 7-day window)
[2026-01-31T21:31:27.683Z] [BOT] 💾 Saved posted_jobs.json: 1450 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:29.187Z] [BOT] 📍 [ROUTING] "Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required" @ ORG_7a23266b
[2026-01-31T21:31:29.187Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:29.484Z] [BOT] ✅ Posted message: Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b in #💻・tech-jobs
[2026-01-31T21:31:29.484Z] [BOT] ✅ Industry: Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b
[2026-01-31T21:31:29.485Z] [BOT] 💾 Added channel posting: Software Engineer & Computer Science – Recent Grad/Full Time - US Person Required @ ORG_7a23266b → category channel (1 total channels)
💾 BEFORE MERGE: 1451 jobs in memory (cached)
[2026-01-31T21:31:29.515Z] [BOT] ✅ Loaded V2 database: 1450 jobs
💾 DISK STATE: 1450 jobs on disk
[2026-01-31T21:31:29.516Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1451
[2026-01-31T21:31:29.521Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:29.521Z] [BOT] 💾 AFTER MERGE: 1451 jobs (merged disk + memory)
[2026-01-31T21:31:29.522Z] [BOT] ✅ No jobs to archive (all 1451 jobs within 7-day window)
[2026-01-31T21:31:29.603Z] [BOT] 💾 Saved posted_jobs.json: 1451 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:31.106Z] [BOT] 📍 [ROUTING] "Full Stack Engineer" @ ORG_b26219beina
[2026-01-31T21:31:31.106Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:31.403Z] [BOT] ✅ Posted message: Full Stack Engineer @ ORG_b26219beina in #💻・tech-jobs
[2026-01-31T21:31:31.404Z] [BOT] ✅ Industry: Full Stack Engineer @ ORG_b26219beina
[2026-01-31T21:31:31.404Z] [BOT] 💾 Added channel posting: Full Stack Engineer @ ORG_b26219beina → category channel (1 total channels)
[2026-01-31T21:31:31.404Z] [BOT] 💾 BEFORE MERGE: 1452 jobs in memory (cached)
[2026-01-31T21:31:31.428Z] [BOT] ✅ Loaded V2 database: 1451 jobs
💾 DISK STATE: 1451 jobs on disk
[2026-01-31T21:31:31.428Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1452
[2026-01-31T21:31:31.433Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:31.433Z] [BOT] 💾 AFTER MERGE: 1452 jobs (merged disk + memory)
[2026-01-31T21:31:31.434Z] [BOT] ✅ No jobs to archive (all 1452 jobs within 7-day window)
[2026-01-31T21:31:31.523Z] [BOT] 💾 Saved posted_jobs.json: 1452 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:33.248Z] [BOT] ✅ Posted message: Full Stack Engineer @ ORG_b26219beina in #🗽・JID_98d4f0de
[2026-01-31T21:31:33.249Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T21:31:33.249Z] [BOT] 💾 Added channel posting: Full Stack Engineer @ ORG_b26219beina → location channel (2 total channels)
[2026-01-31T21:31:33.249Z] [BOT] 💾 BEFORE MERGE: 1452 jobs in memory (cached)
[2026-01-31T21:31:33.274Z] [BOT] ✅ Loaded V2 database: 1452 jobs
💾 DISK STATE: 1452 jobs on disk
[2026-01-31T21:31:33.274Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1452
[2026-01-31T21:31:33.279Z] [BOT] 🔀 Deep merged: Full Stack Engineer @ ORG_b26219beina (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T21:31:33.280Z] [BOT] 💾 AFTER MERGE: 1452 jobs (merged disk + memory)
[2026-01-31T21:31:33.280Z] [BOT] ✅ No jobs to archive (all 1452 jobs within 7-day window)
[2026-01-31T21:31:33.385Z] [BOT] 💾 Saved posted_jobs.json: 1452 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:34.884Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_c910d474 Dynamics Mission Systems
[2026-01-31T21:31:34.884Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:35.381Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems
[2026-01-31T21:31:35.382Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_c910d474 Dynamics Mission Systems → category channel (1 total channels)
[2026-01-31T21:31:35.382Z] [BOT] 💾 BEFORE MERGE: 1453 jobs in memory (cached)
[2026-01-31T21:31:35.406Z] [BOT] ✅ Loaded V2 database: 1452 jobs
💾 DISK STATE: 1452 jobs on disk
[2026-01-31T21:31:35.406Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1453
[2026-01-31T21:31:35.414Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:35.414Z] [BOT] 💾 AFTER MERGE: 1453 jobs (merged disk + memory)
[2026-01-31T21:31:35.415Z] [BOT] ✅ No jobs to archive (all 1453 jobs within 7-day window)
[2026-01-31T21:31:35.496Z] [BOT] 💾 Saved posted_jobs.json: 1453 active jobs
[2026-01-31T21:31:35.497Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:37.000Z] [BOT] 📍 [ROUTING] "GIS Technician" @ ORG_73114028
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:37.432Z] [BOT] ✅ Posted message: GIS Technician @ ORG_73114028 in #💻・tech-jobs
  ✅ Industry: GIS Technician @ ORG_73114028
[2026-01-31T21:31:37.432Z] [BOT] 💾 Added channel posting: GIS Technician @ ORG_73114028 → category channel (1 total channels)
[2026-01-31T21:31:37.433Z] [BOT] 💾 BEFORE MERGE: 1454 jobs in memory (cached)
[2026-01-31T21:31:37.457Z] [BOT] ✅ Loaded V2 database: 1453 jobs
💾 DISK STATE: 1453 jobs on disk
[2026-01-31T21:31:37.457Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1454
[2026-01-31T21:31:37.463Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:37.463Z] [BOT] 💾 AFTER MERGE: 1454 jobs (merged disk + memory)
[2026-01-31T21:31:37.464Z] [BOT] ✅ No jobs to archive (all 1454 jobs within 7-day window)
[2026-01-31T21:31:37.546Z] [BOT] 💾 Saved posted_jobs.json: 1454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:39.048Z] [BOT] 📍 [ROUTING] "New Grad Software Engineer - Full Stack" @ N1
   Category: TECH (matched: "software")
[2026-01-31T21:31:39.049Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:39.273Z] [BOT] ✅ Posted message: New Grad Software Engineer - Full Stack @ N1 in #💻・tech-jobs
  ✅ Industry: New Grad Software Engineer - Full Stack @ N1
[2026-01-31T21:31:39.274Z] [BOT] 💾 Added channel posting: New Grad Software Engineer - Full Stack @ N1 → category channel (1 total channels)
[2026-01-31T21:31:39.274Z] [BOT] 💾 BEFORE MERGE: 1455 jobs in memory (cached)
[2026-01-31T21:31:39.307Z] [BOT] ✅ Loaded V2 database: 1454 jobs
💾 DISK STATE: 1454 jobs on disk
[2026-01-31T21:31:39.307Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1455
[2026-01-31T21:31:39.312Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:39.312Z] [BOT] 💾 AFTER MERGE: 1455 jobs (merged disk + memory)
[2026-01-31T21:31:39.314Z] [BOT] ✅ No jobs to archive (all 1455 jobs within 7-day window)
[2026-01-31T21:31:39.400Z] [BOT] 💾 Saved posted_jobs.json: 1455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:41.127Z] [BOT] ✅ Posted message: New Grad Software Engineer - Full Stack @ N1 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T21:31:41.127Z] [BOT] 💾 Added channel posting: New Grad Software Engineer - Full Stack @ N1 → location channel (2 total channels)
[2026-01-31T21:31:41.127Z] [BOT] 💾 BEFORE MERGE: 1455 jobs in memory (cached)
[2026-01-31T21:31:41.152Z] [BOT] ✅ Loaded V2 database: 1455 jobs
💾 DISK STATE: 1455 jobs on disk
[2026-01-31T21:31:41.152Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1455
[2026-01-31T21:31:41.156Z] [BOT] 🔀 Deep merged: New Grad Software Engineer - Full Stack @ N1 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-01-31T21:31:41.157Z] [BOT] 💾 AFTER MERGE: 1455 jobs (merged disk + memory)
[2026-01-31T21:31:41.158Z] [BOT] ✅ No jobs to archive (all 1455 jobs within 7-day window)
[2026-01-31T21:31:41.244Z] [BOT] 💾 Saved posted_jobs.json: 1455 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:42.746Z] [BOT] 📍 [ROUTING] "Software Engineer – 2026 Grads - C++ or Python" @ ORG_ccdc7d45 River Trading
[2026-01-31T21:31:42.746Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:42.967Z] [BOT] ✅ Posted message: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading in #💻・tech-jobs
[2026-01-31T21:31:42.967Z] [BOT] ✅ Industry: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading
[2026-01-31T21:31:42.968Z] [BOT] 💾 Added channel posting: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading → category channel (1 total channels)
[2026-01-31T21:31:42.968Z] [BOT] 💾 BEFORE MERGE: 1456 jobs in memory (cached)
[2026-01-31T21:31:42.992Z] [BOT] ✅ Loaded V2 database: 1455 jobs
💾 DISK STATE: 1455 jobs on disk
[2026-01-31T21:31:42.992Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1456
[2026-01-31T21:31:42.998Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:42.998Z] [BOT] 💾 AFTER MERGE: 1456 jobs (merged disk + memory)
[2026-01-31T21:31:42.999Z] [BOT] ✅ No jobs to archive (all 1456 jobs within 7-day window)
[2026-01-31T21:31:43.082Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:44.888Z] [BOT] ✅ Posted message: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading in #🗽・JID_98d4f0de
[2026-01-31T21:31:44.888Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-31T21:31:44.888Z] [BOT] 💾 Added channel posting: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading → location channel (2 total channels)
[2026-01-31T21:31:44.889Z] [BOT] 💾 BEFORE MERGE: 1456 jobs in memory (cached)
[2026-01-31T21:31:44.913Z] [BOT] ✅ Loaded V2 database: 1456 jobs
💾 DISK STATE: 1456 jobs on disk
[2026-01-31T21:31:44.913Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1456
[2026-01-31T21:31:44.918Z] [BOT] 🔀 Deep merged: Software Engineer – 2026 Grads - C++ or Python @ ORG_ccdc7d45 River Trading (disk: 1 channels → merged: 2 channels)
[2026-01-31T21:31:44.918Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1456 jobs (merged disk + memory)
[2026-01-31T21:31:44.919Z] [BOT] ✅ No jobs to archive (all 1456 jobs within 7-day window)
[2026-01-31T21:31:45.019Z] [BOT] 💾 Saved posted_jobs.json: 1456 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:46.521Z] [BOT] 📍 [ROUTING] "Integrations Analyst 1/2" @ ORG_bb3d83ffinessolver
   Category: TECH (default)
[2026-01-31T21:31:46.522Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-31T21:31:46.895Z] [BOT] ✅ Posted message: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver in #💻・tech-jobs
[2026-01-31T21:31:46.895Z] [BOT] ✅ Industry: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver
[2026-01-31T21:31:46.896Z] [BOT] 💾 Added channel posting: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver → category channel (1 total channels)
[2026-01-31T21:31:46.896Z] [BOT] 💾 BEFORE MERGE: 1457 jobs in memory (cached)
[2026-01-31T21:31:46.920Z] [BOT] ✅ Loaded V2 database: 1456 jobs
💾 DISK STATE: 1456 jobs on disk
[2026-01-31T21:31:46.920Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1457
[2026-01-31T21:31:46.928Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:46.928Z] [BOT] 💾 AFTER MERGE: 1457 jobs (merged disk + memory)
[2026-01-31T21:31:46.929Z] [BOT] ✅ No jobs to archive (all 1457 jobs within 7-day window)
[2026-01-31T21:31:47.008Z] [BOT] 💾 Saved posted_jobs.json: 1457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:48.672Z] [BOT] ✅ Posted message: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-01-31T21:31:48.672Z] [BOT] 💾 Added channel posting: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver → location channel (2 total channels)
[2026-01-31T21:31:48.672Z] [BOT] 💾 BEFORE MERGE: 1457 jobs in memory (cached)
[2026-01-31T21:31:48.697Z] [BOT] ✅ Loaded V2 database: 1457 jobs
💾 DISK STATE: 1457 jobs on disk
[2026-01-31T21:31:48.697Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1457
[2026-01-31T21:31:48.703Z] [BOT] 🔀 Deep merged: Integrations Analyst 1/2 @ ORG_bb3d83ffinessolver (disk: 1 channels → merged: 2 channels)
[2026-01-31T21:31:48.703Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 1457 jobs (merged disk + memory)
[2026-01-31T21:31:48.704Z] [BOT] ✅ No jobs to archive (all 1457 jobs within 7-day window)
[2026-01-31T21:31:48.784Z] [BOT] 💾 Saved posted_jobs.json: 1457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:53.286Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-31T21:31:53.287Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_034873cc..." not found, but found as SHA256 "bcd72ae6f5e008bc"
[2026-01-31T21:31:53.287Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_5f5d5e36-detail (posted within 7 days)
[2026-01-31T21:31:53.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_703859f1..." not found, but found as SHA256 "c72972b159af7a91"
[2026-01-31T21:31:53.288Z] [BOT] ⏭️  Skipping duplicate: JID_9268737e-cx_45001-job-313437 (posted within 7 days)
[2026-01-31T21:31:53.288Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf889592..." not found, but found as SHA256 "a6b99147ac1747cd"
⏭️  Skipping duplicate: JID_2d3360d6 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_70c4903f-external_exp..." not found, but found as SHA256 "f23fade5d58d6de4"
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_cfac3294-engineer_r160689 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6b462590-..." not found, but found as SHA256 "ae4e3b255c1f7fc1"
⏭️  Skipping duplicate: JID_dd169aa0 (posted within 7 days)
[2026-01-31T21:31:53.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e61c32e9..." not found, but found as SHA256 "538e41a3fd7ba6a9"
⏭️  Skipping duplicate: JID_e61c32e9 (posted within 7 days)
[2026-01-31T21:31:53.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_925e687d..." not found, but found as SHA256 "54539ed8b07796d6"
⏭️  Skipping duplicate: JID_d92a548b-cx_1-job-19551 (posted within 7 days)
[2026-01-31T21:31:53.289Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_675af00c..." not found, but found as SHA256 "3f5f8d02228313a4"
[2026-01-31T21:31:53.289Z] [BOT] ⏭️  Skipping duplicate: JID_d652e561 (posted within 7 days)
[2026-01-31T21:31:53.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c92e24a8..." not found, but found as SHA256 "51ea68ed2e422c22"
⏭️  Skipping duplicate: JID_c92e24a8 (posted within 7 days)
[2026-01-31T21:31:53.290Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e175a8dd..." not found, but found as SHA256 "ad0dec2a7287f7c8"
⏭️  Skipping duplicate: JID_e175a8dd (posted within 7 days)
[2026-01-31T21:31:53.397Z] [BOT] ✅ Loaded pending queue: 2951 total (1475 pending, 49 enriched, 1427 posted)
[2026-01-31T21:31:53.598Z] [BOT] ✅ Saved pending queue: 2951 total (1475 pending, 39 enriched, 1437 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-31T21:31:53.598Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-31T21:31:53.686Z] [BOT] 📂 Loaded 11518 existing routing entries
[2026-01-31T21:31:53.814Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 11528
[2026-01-31T21:31:53.814Z] [BOT] Timestamp: 2026-01-31T21:31:53.767Z
[2026-01-31T21:31:53.815Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_78a41fec.jsonl
   Total attempts: 29
   Successful: 14
   Failed: 0
   Skipped: 15
[2026-01-31T21:31:53.815Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-31T21:31:53.815Z] [BOT] Total posts: 14
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 8 posts
     2. #🗽・JID_98d4f0de: 3 posts
     3. #🤖・ai-jobs: 2 posts
[2026-01-31T21:31:53.815Z] [BOT] 4. #🏠・JID_ead674af: 1 posts
[2026-01-31T21:31:53.815Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-31T21:31:53.815Z] [BOT] 💾 BEFORE MERGE: 1457 jobs in memory (cached)
[2026-01-31T21:31:53.859Z] [BOT] ✅ Loaded V2 database: 1457 jobs
💾 DISK STATE: 1457 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=1457
[2026-01-31T21:31:53.861Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-31T21:31:53.861Z] [BOT] 💾 AFTER MERGE: 1457 jobs (merged disk + memory)
[2026-01-31T21:31:53.863Z] [BOT] ✅ No jobs to archive (all 1457 jobs within 7-day window)
[2026-01-31T21:31:53.949Z] [BOT] 💾 Saved posted_jobs.json: 1457 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-31T21:31:53.949Z] [BOT] ✅ Database saved successfully
[2026-01-31T21:31:55.981Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3023) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*