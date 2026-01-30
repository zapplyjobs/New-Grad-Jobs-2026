# Discord Bot Execution Audit
**Timestamp:** 2026-01-30T08:56:26.839Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 7
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-30T08:55:53.599Z] ========================================
[2026-01-30T08:55:53.601Z] Discord Bot Execution Log
[2026-01-30T08:55:53.601Z] Environment: GitHub Actions
[2026-01-30T08:55:53.601Z] Node Version: v20.20.0
[2026-01-30T08:55:53.601Z] ========================================
[2026-01-30T08:55:53.601Z] Environment Variables Check:
[2026-01-30T08:55:53.601Z] DISCORD_TOKEN: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-30T08:55:53.602Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-30T08:55:53.602Z] 
Multi-Channel Configuration:
[2026-01-30T08:55:53.602Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.602Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.603Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-30T08:55:53.603Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-30T08:55:53.603Z] 
Data Files Check:
[2026-01-30T08:55:53.604Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149791 bytes)
[2026-01-30T08:55:53.619Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2270866 bytes)
[2026-01-30T08:55:53.619Z] 
========================================
[2026-01-30T08:55:53.619Z] Starting Enhanced Discord Bot...
[2026-01-30T08:55:53.619Z] ========================================
[2026-01-30T08:55:54.153Z] [BOT] ✅ Loaded V2 database: 339 jobs
[2026-01-30T08:55:54.534Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-30T08:55:54.534Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-30T08:55:54.534Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-30T08:55:54.653Z] [BOT] ✅ Loaded pending queue: 2923 total (2563 pending, 50 enriched, 310 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Developer Campaign Marketer, Claude Code at anthropic
[2026-01-30T08:55:54.654Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1350e279e5527b88"
[2026-01-30T08:55:54.654Z] [BOT] ⏭️  Skipping duplicate: JID_848dc8c3 (posted within 7 days)
[2026-01-30T08:55:54.655Z] [BOT] ⏭️ Skipping already posted: Developer Campaign Marketer, Claude Code at anthropic
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "1409992ce6f78208"
⏭️  Skipping duplicate: JID_424b6201 (posted within 7 days)
⏭️ Skipping already posted: ROLE_99999c05 at anthropic
[2026-01-30T08:55:54.655Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c8be1d6f7ea02d2a"
⏭️  Skipping duplicate: JID_3676a5c1 (posted within 7 days)
⏭️ Skipping already posted: Solutions Architect, Applied AI (National Security) at anthropic
[2026-01-30T08:55:54.658Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_a73a5f53..." not found, but found as SHA256 "064fd3e3e90f4bac"
[2026-01-30T08:55:54.659Z] [BOT] ⏭️  Skipping duplicate: JID_039c2721-2026_jr2011172 (posted within 7 days)
⏭️ Skipping already posted: AI ML Engineer - RTL Power Optimization at NVIDIA
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "e79f1ca4b39a8be8"
⏭️  Skipping duplicate: JID_44f5b1e5 (posted within 7 days)
[2026-01-30T08:55:54.659Z] [BOT] ⏭️ Skipping already posted: Graduate Software Engineer - AI at Loop
🔧 ID mismatch detected: URL-based "JID_9537b1d0..." not found, but found as SHA256 "259f25d1b8205753"
⏭️  Skipping duplicate: JID_bd982bf9 (posted within 7 days)
⏭️ Skipping already posted: 2026 New Grad - Software Engineer - Full-Stack at Loop
🔧 ID mismatch detected: URL-based "JID_3d822efb..." not found, but found as SHA256 "98dcd17f26272d45"
⏭️  Skipping duplicate: JID_5fee43a6 (posted within 7 days)
[2026-01-30T08:55:54.659Z] [BOT] ⏭️ Skipping already posted: AI / Automation & Governance Owner at gusto
[2026-01-30T08:55:54.661Z] [BOT] 📬 Found 43 new jobs (7 already posted)...
[2026-01-30T08:55:54.661Z] [BOT] 🚫 Skipping blacklisted job: Director, Product Counseling at vercel
[2026-01-30T08:55:54.661Z] [BOT] 🚫 Skipping blacklisted job: Graduate Leadership Engineer - Computer Engineering at Westinghouse Electric Company
🚫 Skipping blacklisted job: Senior Software Engineer- Database Infrastructure at discord
🚫 Skipping blacklisted job: Workforce Management Contact Routing Lead at gusto
[2026-01-30T08:55:54.662Z] [BOT] 🚫 Skipping blacklisted job: Senior Software Engineer, Consumer Revenue at discord
🚫 Skipping blacklisted job: Data Science Senior Manager at gusto
🚫 Skipping blacklisted job: Technology Leadership Development Program Associate at Ameriprise Financial
[2026-01-30T08:55:54.662Z] [BOT] 🚫 Skipping blacklisted job: Postdoctoral Appointee - MSD Experimental Condensed Matter Physics at Argonne National Laboratory
[2026-01-30T08:55:54.662Z] [BOT] 🚫 Skipping blacklisted job: Senior Manager, Business Development at brex
🚫 Skipping blacklisted job: Senior Manager, Business Development (Embedded Finance) at brex
[2026-01-30T08:55:54.768Z] [BOT] ✅ Loaded pending queue: 2923 total (2563 pending, 50 enriched, 310 posted)
[2026-01-30T08:55:54.950Z] [BOT] ✅ Saved pending queue: 2913 total (2563 pending, 40 enriched, 310 posted)
🗑️ Removed 10 blacklisted jobs from pending queue
📋 After blacklist filter: 33 jobs (10 blacklisted)
[2026-01-30T08:55:54.951Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-01-30T08:55:54.952Z] [BOT] 📋 After multi-location grouping: 33 unique jobs to post
⏸️ Limiting to 10 jobs this run, 33 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-30T08:55:54.956Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-30T08:55:54.957Z] [BOT] 📍 [ROUTING] "Threat Collections Engineer" @ anthropic
[2026-01-30T08:55:54.958Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T08:55:54.976Z] [BOT ERROR] (node:4573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-30T08:55:55.624Z] [BOT] ✅ Posted message: Threat Collections Engineer @ anthropic in #🤖・ai-jobs
[2026-01-30T08:55:55.624Z] [BOT] ✅ Industry: Threat Collections Engineer @ anthropic
[2026-01-30T08:55:55.624Z] [BOT] 💾 Added channel posting: Threat Collections Engineer @ anthropic → category channel (1 total channels)
[2026-01-30T08:55:55.625Z] [BOT] 💾 BEFORE MERGE: 340 jobs in memory (cached)
[2026-01-30T08:55:55.635Z] [BOT] ✅ Loaded V2 database: 339 jobs
💾 DISK STATE: 339 jobs on disk
[2026-01-30T08:55:55.635Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=340
[2026-01-30T08:55:55.636Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:55:55.636Z] [BOT] 💾 AFTER MERGE: 340 jobs (merged disk + memory)
[2026-01-30T08:55:55.637Z] [BOT] ✅ No jobs to archive (all 340 jobs within 7-day window)
[2026-01-30T08:55:55.668Z] [BOT] 💾 Saved posted_jobs.json: 340 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:55:57.171Z] [BOT] 📍 [ROUTING] "TPU Kernel Engineer" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-30T08:55:57.172Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T08:55:57.417Z] [BOT] ✅ Posted message: TPU Kernel Engineer @ anthropic in #🤖・ai-jobs
[2026-01-30T08:55:57.418Z] [BOT] ✅ Industry: TPU Kernel Engineer @ anthropic
[2026-01-30T08:55:57.418Z] [BOT] 💾 Added channel posting: TPU Kernel Engineer @ anthropic → category channel (1 total channels)
[2026-01-30T08:55:57.418Z] [BOT] 💾 BEFORE MERGE: 341 jobs in memory (cached)
[2026-01-30T08:55:57.426Z] [BOT] ✅ Loaded V2 database: 340 jobs
[2026-01-30T08:55:57.426Z] [BOT] 💾 DISK STATE: 340 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=341
[2026-01-30T08:55:57.427Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:55:57.427Z] [BOT] 💾 AFTER MERGE: 341 jobs (merged disk + memory)
[2026-01-30T08:55:57.427Z] [BOT] ✅ No jobs to archive (all 341 jobs within 7-day window)
[2026-01-30T08:55:57.453Z] [BOT] 💾 Saved posted_jobs.json: 341 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:55:58.954Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
   Category: AI (matched: "machine learning")
[2026-01-30T08:55:58.954Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-30T08:55:59.163Z] [BOT] ✅ Posted message: AI Data Specialist @ ORG_f3ae3598 in #🤖・ai-jobs
  ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2026-01-30T08:55:59.163Z] [BOT] 💾 Added channel posting: AI Data Specialist @ ORG_f3ae3598 → category channel (1 total channels)
[2026-01-30T08:55:59.164Z] [BOT] 💾 BEFORE MERGE: 342 jobs in memory (cached)
[2026-01-30T08:55:59.172Z] [BOT] ✅ Loaded V2 database: 341 jobs
💾 DISK STATE: 341 jobs on disk
[2026-01-30T08:55:59.172Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=342
[2026-01-30T08:55:59.173Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 342 jobs (merged disk + memory)
[2026-01-30T08:55:59.173Z] [BOT] ✅ No jobs to archive (all 342 jobs within 7-day window)
[2026-01-30T08:55:59.197Z] [BOT] 💾 Saved posted_jobs.json: 342 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:03.701Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-30T08:56:03.702Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
   Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T08:56:04.004Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market) @ verkada in #💰・finance-jobs
[2026-01-30T08:56:04.004Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-30T08:56:04.004Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market) @ verkada → category channel (1 total channels)
[2026-01-30T08:56:04.004Z] [BOT] 💾 BEFORE MERGE: 343 jobs in memory (cached)
[2026-01-30T08:56:04.016Z] [BOT] ✅ Loaded V2 database: 342 jobs
💾 DISK STATE: 342 jobs on disk
[2026-01-30T08:56:04.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=343
[2026-01-30T08:56:04.017Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:56:04.017Z] [BOT] 💾 AFTER MERGE: 343 jobs (merged disk + memory)
[2026-01-30T08:56:04.017Z] [BOT] ✅ No jobs to archive (all 343 jobs within 7-day window)
[2026-01-30T08:56:04.051Z] [BOT] 💾 Saved posted_jobs.json: 343 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:05.553Z] [BOT] 📍 [ROUTING] "Sales Development Representative (AAE), Salt Lake City" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-30T08:56:05.554Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-30T08:56:05.853Z] [BOT] ✅ Posted message: Sales Development Representative (AAE), Salt Lake City @ verkada in #💰・finance-jobs
  ✅ Industry: Sales Development Representative (AAE), Salt Lake City @ verkada
[2026-01-30T08:56:05.853Z] [BOT] 💾 Added channel posting: Sales Development Representative (AAE), Salt Lake City @ verkada → category channel (1 total channels)
[2026-01-30T08:56:05.853Z] [BOT] 💾 BEFORE MERGE: 344 jobs in memory (cached)
[2026-01-30T08:56:05.860Z] [BOT] ✅ Loaded V2 database: 343 jobs
💾 DISK STATE: 343 jobs on disk
[2026-01-30T08:56:05.861Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=344
[2026-01-30T08:56:05.862Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 344 jobs (merged disk + memory)
[2026-01-30T08:56:05.862Z] [BOT] ✅ No jobs to archive (all 344 jobs within 7-day window)
[2026-01-30T08:56:05.889Z] [BOT] 💾 Saved posted_jobs.json: 344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:10.390Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-30T08:56:10.391Z] [BOT] 📍 [ROUTING] "Design Operations Strategist" @ figma
[2026-01-30T08:56:10.391Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:56:11.779Z] [BOT] ✅ Posted message: Design Operations Strategist @ figma in #💻・tech-jobs
  ✅ Industry: Design Operations Strategist @ figma
[2026-01-30T08:56:11.780Z] [BOT] 💾 Added channel posting: Design Operations Strategist @ figma → category channel (1 total channels)
[2026-01-30T08:56:11.780Z] [BOT] 💾 BEFORE MERGE: 345 jobs in memory (cached)
[2026-01-30T08:56:11.790Z] [BOT] ✅ Loaded V2 database: 344 jobs
💾 DISK STATE: 344 jobs on disk
[2026-01-30T08:56:11.790Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=345
[2026-01-30T08:56:11.791Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 345 jobs (merged disk + memory)
[2026-01-30T08:56:11.791Z] [BOT] ✅ No jobs to archive (all 345 jobs within 7-day window)
[2026-01-30T08:56:11.817Z] [BOT] 💾 Saved posted_jobs.json: 345 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:13.318Z] [BOT] 📍 [ROUTING] "Research Assistant - S3D - School of Computer Science" @ ORG_15a5b314 Mellon University
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:56:13.576Z] [BOT] ✅ Posted message: Research Assistant - S3D - School of Computer Science @ ORG_15a5b314 Mellon University in #💻・tech-jobs
  ✅ Industry: Research Assistant - S3D - School of Computer Science @ ORG_15a5b314 Mellon University
[2026-01-30T08:56:13.576Z] [BOT] 💾 Added channel posting: Research Assistant - S3D - School of Computer Science @ ORG_15a5b314 Mellon University → category channel (1 total channels)
[2026-01-30T08:56:13.576Z] [BOT] 💾 BEFORE MERGE: 346 jobs in memory (cached)
[2026-01-30T08:56:13.585Z] [BOT] ✅ Loaded V2 database: 345 jobs
💾 DISK STATE: 345 jobs on disk
[2026-01-30T08:56:13.585Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=346
[2026-01-30T08:56:13.586Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:56:13.586Z] [BOT] 💾 AFTER MERGE: 346 jobs (merged disk + memory)
[2026-01-30T08:56:13.586Z] [BOT] ✅ No jobs to archive (all 346 jobs within 7-day window)
[2026-01-30T08:56:13.609Z] [BOT] 💾 Saved posted_jobs.json: 346 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:15.111Z] [BOT] 📍 [ROUTING] "Control Room Operator" @ ORG_0ed94d48
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:56:15.266Z] [BOT] ✅ Posted message: Control Room Operator @ ORG_0ed94d48 in #💻・tech-jobs
  ✅ Industry: Control Room Operator @ ORG_0ed94d48
[2026-01-30T08:56:15.266Z] [BOT] 💾 Added channel posting: Control Room Operator @ ORG_0ed94d48 → category channel (1 total channels)
[2026-01-30T08:56:15.266Z] [BOT] 💾 BEFORE MERGE: 347 jobs in memory (cached)
[2026-01-30T08:56:15.274Z] [BOT] ✅ Loaded V2 database: 346 jobs
💾 DISK STATE: 346 jobs on disk
[2026-01-30T08:56:15.275Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=347
[2026-01-30T08:56:15.275Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 347 jobs (merged disk + memory)
[2026-01-30T08:56:15.276Z] [BOT] ✅ No jobs to archive (all 347 jobs within 7-day window)
[2026-01-30T08:56:15.302Z] [BOT] 💾 Saved posted_jobs.json: 347 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:16.804Z] [BOT] 📍 [ROUTING] "Integrity Analyst 1" @ ORG_9f360a80
   Category: TECH (default)
[2026-01-30T08:56:16.804Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:56:16.955Z] [BOT] ✅ Posted message: Integrity Analyst 1 @ ORG_9f360a80 in #💻・tech-jobs
  ✅ Industry: Integrity Analyst 1 @ ORG_9f360a80
[2026-01-30T08:56:16.955Z] [BOT] 💾 Added channel posting: Integrity Analyst 1 @ ORG_9f360a80 → category channel (1 total channels)
[2026-01-30T08:56:16.956Z] [BOT] 💾 BEFORE MERGE: 348 jobs in memory (cached)
[2026-01-30T08:56:16.963Z] [BOT] ✅ Loaded V2 database: 347 jobs
💾 DISK STATE: 347 jobs on disk
[2026-01-30T08:56:16.963Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=348
[2026-01-30T08:56:16.964Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:56:16.965Z] [BOT] 💾 AFTER MERGE: 348 jobs (merged disk + memory)
[2026-01-30T08:56:16.965Z] [BOT] ✅ No jobs to archive (all 348 jobs within 7-day window)
[2026-01-30T08:56:16.987Z] [BOT] 💾 Saved posted_jobs.json: 348 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:18.490Z] [BOT] 📍 [ROUTING] "Engineering Associate - Auto Lending" @ ORG_332e04b7 Fargo
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-30T08:56:18.679Z] [BOT] ✅ Posted message: Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo in #💻・tech-jobs
  ✅ Industry: Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo
[2026-01-30T08:56:18.680Z] [BOT] 💾 Added channel posting: Engineering Associate - Auto Lending @ ORG_332e04b7 Fargo → category channel (1 total channels)
💾 BEFORE MERGE: 349 jobs in memory (cached)
[2026-01-30T08:56:18.688Z] [BOT] ✅ Loaded V2 database: 348 jobs
💾 DISK STATE: 348 jobs on disk
[2026-01-30T08:56:18.688Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=349
[2026-01-30T08:56:18.689Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:56:18.689Z] [BOT] 💾 AFTER MERGE: 349 jobs (merged disk + memory)
[2026-01-30T08:56:18.689Z] [BOT] ✅ No jobs to archive (all 349 jobs within 7-day window)
[2026-01-30T08:56:18.715Z] [BOT] 💾 Saved posted_jobs.json: 349 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:23.217Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-30T08:56:23.218Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "9ea29f84c577fc72"
[2026-01-30T08:56:23.218Z] [BOT] ⏭️  Skipping duplicate: JID_968372a6 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "3e132d627ec327b1"
[2026-01-30T08:56:23.218Z] [BOT] ⏭️  Skipping duplicate: JID_b2f8ad02 (posted within 7 days)
[2026-01-30T08:56:23.218Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fbd9d010..." not found, but found as SHA256 "b18b5e7af525a8df"
⏭️  Skipping duplicate: JID_4d42ce78 (posted within 7 days)
[2026-01-30T08:56:23.219Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7b6a7840..." not found, but found as SHA256 "6de0e820e860e0e7"
⏭️  Skipping duplicate: JID_f3eebe33 (posted within 7 days)
[2026-01-30T08:56:23.219Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_474f0197..." not found, but found as SHA256 "3969156426134822"
⏭️  Skipping duplicate: JID_337ee776 (posted within 7 days)
[2026-01-30T08:56:23.219Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_b1fef101..." not found, but found as SHA256 "76e8d639610e4300"
⏭️  Skipping duplicate: JID_42e6727d-science_2024087 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_6305b3ec..." not found, but found as SHA256 "f7523de18ff8196e"
⏭️  Skipping duplicate: JID_1b66d05f-operator_r10286-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_b0368fb3..." not found, but found as SHA256 "d15f0df5685b2f3a"
⏭️  Skipping duplicate: JID_2c68f537-i_r7456-1 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_07047103..." not found, but found as SHA256 "814a229f2d32d75b"
⏭️  Skipping duplicate: JID_a247f5ab-lending_r-517132 (posted within 7 days)
[2026-01-30T08:56:23.220Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_802c1732..." not found, but found as SHA256 "cfa445eeb1e760d7"
[2026-01-30T08:56:23.220Z] [BOT] ⏭️  Skipping duplicate: JID_dac86c99 (posted within 7 days)
[2026-01-30T08:56:23.327Z] [BOT] ✅ Loaded pending queue: 2913 total (2563 pending, 40 enriched, 310 posted)
[2026-01-30T08:56:23.514Z] [BOT] ✅ Saved pending queue: 2913 total (2563 pending, 30 enriched, 320 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-30T08:56:23.515Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-30T08:56:23.600Z] [BOT] 📂 Loaded 10401 existing routing entries
[2026-01-30T08:56:23.736Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-30T08:56:23.737Z] [BOT] Total entries: 10411
   Timestamp: 2026-01-30T08:56:23.694Z
[2026-01-30T08:56:23.737Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7339b971.jsonl
[2026-01-30T08:56:23.737Z] [BOT] Total attempts: 27
   Successful: 10
   Failed: 0
   Skipped: 17
[2026-01-30T08:56:23.738Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
[2026-01-30T08:56:23.738Z] [BOT] Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 3 posts
[2026-01-30T08:56:23.738Z] [BOT] 3. #💰・finance-jobs: 2 posts
[2026-01-30T08:56:23.738Z] [BOT] [STATS] Channel stats saved
[2026-01-30T08:56:23.739Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 349 jobs in memory (cached)
[2026-01-30T08:56:23.746Z] [BOT] ✅ Loaded V2 database: 349 jobs
💾 DISK STATE: 349 jobs on disk
[2026-01-30T08:56:23.746Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=349
[2026-01-30T08:56:23.747Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-30T08:56:23.747Z] [BOT] 💾 AFTER MERGE: 349 jobs (merged disk + memory)
[2026-01-30T08:56:23.747Z] [BOT] ✅ No jobs to archive (all 349 jobs within 7-day window)
[2026-01-30T08:56:23.771Z] [BOT] 💾 Saved posted_jobs.json: 349 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-30T08:56:23.772Z] [BOT] ✅ Database saved successfully
[2026-01-30T08:56:25.802Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:4573) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*