# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T09:37:22.622Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 7
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T09:36:48.410Z] ========================================
[2026-01-30T09:36:48.412Z] Discord Bot Execution Log
[2026-01-30T09:36:48.412Z] Environment: GitHub Actions
[2026-01-30T09:36:48.412Z] Node Version: v20.20.0
[2026-01-30T09:36:48.412Z] ========================================
[2026-01-30T09:36:48.412Z] Environment Variables Check:
[2026-01-30T09:36:48.412Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T09:36:48.412Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.412Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T09:36:48.413Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T09:36:48.413Z] 
Multi-Channel Configuration:
[2026-01-30T09:36:48.413Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T09:36:48.413Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T09:36:48.413Z] 
Data Files Check:
[2026-01-30T09:36:48.414Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111791 bytes)
[2026-01-30T09:36:48.431Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2366498 bytes)
[2026-01-30T09:36:48.431Z] 
========================================
[2026-01-30T09:36:48.431Z] Starting Enhanced Discord Bot...
[2026-01-30T09:36:48.431Z] ========================================
[2026-01-30T09:36:48.891Z] [BOT] ✅ Loaded V2 database: 359 jobs
[2026-01-30T09:36:49.642Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T09:36:49.642Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T09:36:49.642Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T09:36:49.803Z] [BOT] ✅ Loaded pending queue: 2922 total (2542 pending, 50 enriched, 330 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T09:36:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T09:36:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T09:36:49.803Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
[2026-01-30T09:36:49.804Z] [BOT] ⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T09:36:49.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
[2026-01-30T09:36:49.805Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T09:36:49.808Z] [BOT] 📬 Found 43 new jobs (7 already posted)...
[2026-01-30T09:36:49.809Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, National Technology Partners  at brex
[2026-01-30T09:36:49.809Z] [BOT] 🚫 Skipping blacklisted job: Senior Product Manager - Notebooks at datadog
🚫 Skipping blacklisted job: Director of Engineering, Developer Ecosystem at discord
🚫 Skipping blacklisted job: Manager I, Engineering - Applied AI - Natural Language & Conversational Interfaces at datadog
[2026-01-30T09:36:49.809Z] [BOT] 🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
🚫 Skipping blacklisted job: Director, Enterprise Sales at brex
[2026-01-30T09:36:49.949Z] [BOT] ✅ Loaded pending queue: 2922 total (2542 pending, 50 enriched, 330 posted)
[2026-01-30T09:36:50.117Z] [BOT] ✅ Saved pending queue: 2914 total (2542 pending, 42 enriched, 330 posted)
🗑️ Removed 8 blacklisted jobs from pending queue
📋 After blacklist filter: 35 jobs (8 blacklisted)
[2026-01-30T09:36:50.117Z] [BOT] 📋 After data quality filter: 35 jobs (0 invalid)
[2026-01-30T09:36:50.118Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
[2026-01-30T09:36:50.118Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: new york city, ny united states, salt lake city, ut united states
   - Account Executive, Embedded Finance @ brex: san francisco, california, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 33 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T09:36:50.121Z] [BOT] 📌 Posting 6 jobs to #🤖・ai-jobs
[2026-01-30T09:36:50.122Z] [BOT] 📍 [ROUTING] "Research Technician" @ ORG_10a0c5f8 General Brigham
[2026-01-30T09:36:50.122Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T09:36:50.139Z] [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T09:36:50.412Z] [BOT] ✅ Posted message: Research Technician @ ORG_10a0c5f8 General Brigham in #🤖・ai-jobs
  ✅ Industry: Research Technician @ ORG_10a0c5f8 General Brigham
[2026-01-30T09:36:50.413Z] [BOT] 💾 Added channel posting: Research Technician @ ORG_10a0c5f8 General Brigham → category channel (1 total channels)
[2026-01-30T09:36:50.413Z] [BOT] 💾 BEFORE MERGE: 360 jobs in memory (cached)
[2026-01-30T09:36:50.426Z] [BOT] ✅ Loaded V2 database: 359 jobs
💾 DISK STATE: 359 jobs on disk
[2026-01-30T09:36:50.426Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=360
[2026-01-30T09:36:50.428Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 360 jobs (merged disk + memory)
[2026-01-30T09:36:50.428Z] [BOT] ✅ No jobs to archive (all 360 jobs within 7-day window)
[2026-01-30T09:36:50.458Z] [BOT] 💾 Saved posted_jobs.json: 360 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:36:51.961Z] [BOT] 📍 [ROUTING] "Applied Machine Learning Engineer – New College Grad 2026 - Circuit Design" @ ORG_0890f456
[2026-01-30T09:36:51.961Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T09:36:52.164Z] [BOT] ✅ Posted message: Applied Machine Learning Engineer – New College Grad 2026 - Circuit Design @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Applied Machine Learning Engineer – New College Grad 2026 - Circuit Design @ ORG_0890f456
[2026-01-30T09:36:52.164Z] [BOT] 💾 Added channel posting: Applied Machine Learning Engineer – New College Grad 2026 - Circuit Design @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 361 jobs in memory (cached)
[2026-01-30T09:36:52.175Z] [BOT] ✅ Loaded V2 database: 360 jobs
💾 DISK STATE: 360 jobs on disk
[2026-01-30T09:36:52.175Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=361
[2026-01-30T09:36:52.176Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:36:52.176Z] [BOT] 💾 AFTER MERGE: 361 jobs (merged disk + memory)
[2026-01-30T09:36:52.176Z] [BOT] ✅ No jobs to archive (all 361 jobs within 7-day window)
[2026-01-30T09:36:52.203Z] [BOT] 💾 Saved posted_jobs.json: 361 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:36:53.704Z] [BOT] 📍 [ROUTING] "Deep Learning Kernel Software Performance Architect – New College Grad 2026" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-30T09:36:53.704Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T09:36:53.919Z] [BOT] ✅ Posted message: Deep Learning Kernel Software Performance Architect – New College Grad 2026 @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-30T09:36:53.919Z] [BOT] ✅ Industry: Deep Learning Kernel Software Performance Architect – New College Grad 2026 @ ORG_0890f456
[2026-01-30T09:36:53.919Z] [BOT] 💾 Added channel posting: Deep Learning Kernel Software Performance Architect – New College Grad 2026 @ ORG_0890f456 → category channel (1 total channels)
[2026-01-30T09:36:53.919Z] [BOT] 💾 BEFORE MERGE: 362 jobs in memory (cached)
[2026-01-30T09:36:53.930Z] [BOT] ✅ Loaded V2 database: 361 jobs
💾 DISK STATE: 361 jobs on disk
[2026-01-30T09:36:53.930Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=362
[2026-01-30T09:36:53.931Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 362 jobs (merged disk + memory)
[2026-01-30T09:36:53.931Z] [BOT] ✅ No jobs to archive (all 362 jobs within 7-day window)
[2026-01-30T09:36:53.959Z] [BOT] 💾 Saved posted_jobs.json: 362 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:36:55.460Z] [BOT] 📍 [ROUTING] "Software Engineer – New College Grad 2026 - DL Libraries Infrastructure" @ ORG_0890f456
[2026-01-30T09:36:55.460Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T09:36:55.641Z] [BOT] ✅ Posted message: Software Engineer – New College Grad 2026 - DL Libraries Infrastructure @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-30T09:36:55.641Z] [BOT] ✅ Industry: Software Engineer – New College Grad 2026 - DL Libraries Infrastructure @ ORG_0890f456
[2026-01-30T09:36:55.642Z] [BOT] 💾 Added channel posting: Software Engineer – New College Grad 2026 - DL Libraries Infrastructure @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE MERGE: 363 jobs in memory (cached)
[2026-01-30T09:36:55.652Z] [BOT] ✅ Loaded V2 database: 362 jobs
💾 DISK STATE: 362 jobs on disk
[2026-01-30T09:36:55.653Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=363
[2026-01-30T09:36:55.653Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 363 jobs (merged disk + memory)
[2026-01-30T09:36:55.654Z] [BOT] ✅ No jobs to archive (all 363 jobs within 7-day window)
[2026-01-30T09:36:55.677Z] [BOT] 💾 Saved posted_jobs.json: 363 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:36:57.178Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Databricks - Aws" @ ORG_b344d80e Travelers Companies
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-30T09:36:57.178Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T09:36:57.502Z] [BOT] ✅ Posted message: Data Engineer 1 - Databricks - Aws @ ORG_b344d80e Travelers Companies in #🤖・ai-jobs
  ✅ Industry: Data Engineer 1 - Databricks - Aws @ ORG_b344d80e Travelers Companies
[2026-01-30T09:36:57.502Z] [BOT] 💾 Added channel posting: Data Engineer 1 - Databricks - Aws @ ORG_b344d80e Travelers Companies → category channel (1 total channels)
[2026-01-30T09:36:57.502Z] [BOT] 💾 BEFORE MERGE: 364 jobs in memory (cached)
[2026-01-30T09:36:57.513Z] [BOT] ✅ Loaded V2 database: 363 jobs
💾 DISK STATE: 363 jobs on disk
[2026-01-30T09:36:57.513Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=364
[2026-01-30T09:36:57.514Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 364 jobs (merged disk + memory)
[2026-01-30T09:36:57.515Z] [BOT] ✅ No jobs to archive (all 364 jobs within 7-day window)
[2026-01-30T09:36:57.543Z] [BOT] 💾 Saved posted_jobs.json: 364 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:36:59.046Z] [BOT] 📍 [ROUTING] "Innovation Engineer - Smai" @ ORG_23f4e0fc Technology
   Category: AI (matched: "machine learning")
[2026-01-30T09:36:59.046Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-30T09:37:00.887Z] [BOT] ✅ Posted message: Innovation Engineer - Smai @ ORG_23f4e0fc Technology in #🤖・ai-jobs
[2026-01-30T09:37:00.888Z] [BOT] ✅ Industry: Innovation Engineer - Smai @ ORG_23f4e0fc Technology
[2026-01-30T09:37:00.888Z] [BOT] 💾 Added channel posting: Innovation Engineer - Smai @ ORG_23f4e0fc Technology → category channel (1 total channels)
💾 BEFORE MERGE: 365 jobs in memory (cached)
[2026-01-30T09:37:00.902Z] [BOT] ✅ Loaded V2 database: 364 jobs
💾 DISK STATE: 364 jobs on disk
[2026-01-30T09:37:00.902Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=365
[2026-01-30T09:37:00.905Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:37:00.905Z] [BOT] 💾 AFTER MERGE: 365 jobs (merged disk + memory)
[2026-01-30T09:37:00.905Z] [BOT] ✅ No jobs to archive (all 365 jobs within 7-day window)
[2026-01-30T09:37:00.939Z] [BOT] 💾 Saved posted_jobs.json: 365 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:37:05.440Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-01-30T09:37:05.441Z] [BOT] 📍 [ROUTING] "Columbia Threadneedle Sales - Marketing" @ ORG_a2f917d4 Financial
[2026-01-30T09:37:05.441Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-30T09:37:05.733Z] [BOT] ✅ Posted message: Columbia Threadneedle Sales - Marketing @ ORG_a2f917d4 Financial in #📊・JID_fb739488
[2026-01-30T09:37:05.733Z] [BOT] ✅ Industry: Columbia Threadneedle Sales - Marketing @ ORG_a2f917d4 Financial
[2026-01-30T09:37:05.733Z] [BOT] 💾 Added channel posting: Columbia Threadneedle Sales - Marketing @ ORG_a2f917d4 Financial → category channel (1 total channels)
💾 BEFORE MERGE: 366 jobs in memory (cached)
[2026-01-30T09:37:05.744Z] [BOT] ✅ Loaded V2 database: 365 jobs
💾 DISK STATE: 365 jobs on disk
[2026-01-30T09:37:05.744Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=366
[2026-01-30T09:37:05.745Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:37:05.745Z] [BOT] 💾 AFTER MERGE: 366 jobs (merged disk + memory)
[2026-01-30T09:37:05.746Z] [BOT] ✅ No jobs to archive (all 366 jobs within 7-day window)
[2026-01-30T09:37:05.772Z] [BOT] 💾 Saved posted_jobs.json: 366 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:37:07.275Z] [BOT] 📍 [ROUTING] "Data Analyst Research Neurology kl" @ ORG_10a0c5f8 General Brigham
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-30T09:37:07.775Z] [BOT] ✅ Posted message: Data Analyst Research Neurology kl @ ORG_10a0c5f8 General Brigham in #📊・JID_fb739488
[2026-01-30T09:37:07.775Z] [BOT] ✅ Industry: Data Analyst Research Neurology kl @ ORG_10a0c5f8 General Brigham
[2026-01-30T09:37:07.775Z] [BOT] 💾 Added channel posting: Data Analyst Research Neurology kl @ ORG_10a0c5f8 General Brigham → category channel (1 total channels)
💾 BEFORE MERGE: 367 jobs in memory (cached)
[2026-01-30T09:37:07.788Z] [BOT] ✅ Loaded V2 database: 366 jobs
💾 DISK STATE: 366 jobs on disk
[2026-01-30T09:37:07.788Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=367
[2026-01-30T09:37:07.789Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T09:37:07.789Z] [BOT] 💾 AFTER MERGE: 367 jobs (merged disk + memory)
[2026-01-30T09:37:07.789Z] [BOT] ✅ No jobs to archive (all 367 jobs within 7-day window)
[2026-01-30T09:37:07.818Z] [BOT] 💾 Saved posted_jobs.json: 367 active jobs
[2026-01-30T09:37:07.818Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-30T09:37:12.321Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-30T09:37:12.322Z] [BOT] 📍 [ROUTING] "Commercial Energy Auditor" @ ORG_eb1af5dc
   Category: TECH (default)
[2026-01-30T09:37:12.323Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:37:12.544Z] [BOT] ✅ Posted message: Commercial Energy Auditor @ ORG_eb1af5dc in #💻・tech-jobs
[2026-01-30T09:37:12.545Z] [BOT] ✅ Industry: Commercial Energy Auditor @ ORG_eb1af5dc
[2026-01-30T09:37:12.545Z] [BOT] 💾 Added channel posting: Commercial Energy Auditor @ ORG_eb1af5dc → category channel (1 total channels)
[2026-01-30T09:37:12.545Z] [BOT] 💾 BEFORE MERGE: 368 jobs in memory (cached)
[2026-01-30T09:37:12.556Z] [BOT] ✅ Loaded V2 database: 367 jobs
💾 DISK STATE: 367 jobs on disk
[2026-01-30T09:37:12.556Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=368
[2026-01-30T09:37:12.557Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 368 jobs (merged disk + memory)
[2026-01-30T09:37:12.557Z] [BOT] ✅ No jobs to archive (all 368 jobs within 7-day window)
[2026-01-30T09:37:12.581Z] [BOT] 💾 Saved posted_jobs.json: 368 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:37:14.083Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7854eeec
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T09:37:14.266Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_7854eeec in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_7854eeec
[2026-01-30T09:37:14.266Z] [BOT] 💾 Added channel posting: Software Engineer 1 @ ORG_7854eeec → category channel (1 total channels)
[2026-01-30T09:37:14.266Z] [BOT] 💾 BEFORE MERGE: 369 jobs in memory (cached)
[2026-01-30T09:37:14.277Z] [BOT] ✅ Loaded V2 database: 368 jobs
💾 DISK STATE: 368 jobs on disk
[2026-01-30T09:37:14.278Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=369
[2026-01-30T09:37:14.278Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 369 jobs (merged disk + memory)
[2026-01-30T09:37:14.279Z] [BOT] ✅ No jobs to archive (all 369 jobs within 7-day window)
[2026-01-30T09:37:14.305Z] [BOT] 💾 Saved posted_jobs.json: 369 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T09:37:18.807Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T09:37:18.808Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_052d497a..." not found, but found as SHA256 "26a891ab33e35201"
[2026-01-30T09:37:18.808Z] [BOT] ⏭️  Skipping duplicate: JID_e1a091ab-technician_rq4041919 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5cbea66e..." not found, but found as SHA256 "9e61cc5fb3a1ec34"
⏭️  Skipping duplicate: JID_57220f0e-associate_r25_0000002822 (posted within 7 days)
[2026-01-30T09:37:18.808Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "9f7ef423c962754a"
⏭️  Skipping duplicate: JID_66f3ed1f-2026_jr2011517 (posted within 7 days)
[2026-01-30T09:37:18.808Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "bcc4c2493d8bebaa"
⏭️  Skipping duplicate: JID_50d0ccf4-2026_jr2011814 (posted within 7 days)
[2026-01-30T09:37:18.808Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "5996741ebeb67a6d"
⏭️  Skipping duplicate: JID_63eaeabf-2026_jr2011998-1 (posted within 7 days)
[2026-01-30T09:37:18.808Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_77f74e98..." not found, but found as SHA256 "da28a727fc5d8b88"
⏭️  Skipping duplicate: JID_0f62880e-_r-48550 (posted within 7 days)
[2026-01-30T09:37:18.809Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_052d497a..." not found, but found as SHA256 "9305de8d703c1463"
⏭️  Skipping duplicate: JID_22695b96-kl_rq4049564 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6338dc57..." not found, but found as SHA256 "cd8fe9e0af373d6b"
⏭️  Skipping duplicate: JID_eb93ce67-clearesult_external_careers-JID_760346ea-auditor_r0016610 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b025f902..." not found, but found as SHA256 "87ea0e2125f12e3b"
⏭️  Skipping duplicate: JID_6bf5a92f-smai_jr89061 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_5318a84e..." not found, but found as SHA256 "d5ab566f2d5b6faf"
⏭️  Skipping duplicate: JID_3af55416-i_r0114829 (posted within 7 days)
[2026-01-30T09:37:18.955Z] [BOT] ✅ Loaded pending queue: 2914 total (2542 pending, 42 enriched, 330 posted)
[2026-01-30T09:37:19.138Z] [BOT] ✅ Saved pending queue: 2914 total (2542 pending, 32 enriched, 340 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T09:37:19.138Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T09:37:19.231Z] [BOT] 📂 Loaded 10421 existing routing entries
[2026-01-30T09:37:19.362Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T09:37:19.363Z] [BOT] Total entries: 10431
   Timestamp: 2026-01-30T09:37:19.325Z
[2026-01-30T09:37:19.363Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T09:37:19.363Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-30T09:37:19.363Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-30T09:37:19.363Z] [BOT] Last cleanup: Never
   Total posts: 10
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 6 posts
[2026-01-30T09:37:19.363Z] [BOT] 2. #📊・JID_fb739488: 2 posts
     3. #💻・tech-jobs: 2 posts
[2026-01-30T09:37:19.363Z] [BOT] [STATS] Channel stats saved
[2026-01-30T09:37:19.363Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 369 jobs in memory (cached)
[2026-01-30T09:37:19.374Z] [BOT] ✅ Loaded V2 database: 369 jobs
💾 DISK STATE: 369 jobs on disk
[2026-01-30T09:37:19.375Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=369
[2026-01-30T09:37:19.375Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 369 jobs (merged disk + memory)
[2026-01-30T09:37:19.376Z] [BOT] ✅ No jobs to archive (all 369 jobs within 7-day window)
[2026-01-30T09:37:19.402Z] [BOT] 💾 Saved posted_jobs.json: 369 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-01-30T09:37:21.424Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*