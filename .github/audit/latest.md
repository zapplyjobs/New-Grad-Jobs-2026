# Discord Bot Execution Audit
**Timestamp:** 2026-02-07T15:04:32.375Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-07T15:04:01.524Z] ========================================
[2026-02-07T15:04:01.526Z] Discord Bot Execution Log
[2026-02-07T15:04:01.526Z] Environment: GitHub Actions
[2026-02-07T15:04:01.527Z] Node Version: v20.20.0
[2026-02-07T15:04:01.527Z] ========================================
[2026-02-07T15:04:01.527Z] Environment Variables Check:
[2026-02-07T15:04:01.527Z] DISCORD_TOKEN: ✅ Set
[2026-02-07T15:04:01.527Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-07T15:04:01.527Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-07T15:04:01.527Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-07T15:04:01.527Z] 
Multi-Channel Configuration:
[2026-02-07T15:04:01.527Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-07T15:04:01.527Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:04:01.527Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:04:01.528Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-07T15:04:01.528Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:04:01.528Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:04:01.528Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:04:01.528Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:04:01.528Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-07T15:04:01.528Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-07T15:04:01.528Z] 
Data Files Check:
[2026-02-07T15:04:01.529Z] .github/data/new_jobs.json: ✅ Exists (10 items, 133457 bytes)
[2026-02-07T15:04:01.559Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 6048619 bytes)
[2026-02-07T15:04:01.560Z] 
========================================
[2026-02-07T15:04:01.560Z] Starting Enhanced Discord Bot...
[2026-02-07T15:04:01.560Z] ========================================
[2026-02-07T15:04:02.101Z] [BOT] ✅ Loaded V2 database: 1373 jobs
[2026-02-07T15:04:02.533Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-07T15:04:02.534Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-07T15:04:02.534Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-07T15:04:02.562Z] [BOT] ✅ Loaded pending queue: 400 total (350 pending, 50 enriched, 0 posted)
[2026-02-07T15:04:02.562Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T15:04:02.563Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-07T15:04:02.563Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
[2026-02-07T15:04:02.563Z] [BOT] ⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-07T15:04:02.564Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-07T15:04:02.564Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-07T15:04:02.575Z] [BOT] 📬 Found 48 new jobs (2 already posted)...
[2026-02-07T15:04:02.576Z] [BOT] 🚫 Skipping blacklisted job: Staff Technical Program Manager at duolingo
[2026-02-07T15:04:02.576Z] [BOT] 🚫 Skipping blacklisted job: Director of Learning Design, Language Learning at duolingo
🚫 Skipping blacklisted job: Director of Learning Design, Immersive Language Learning at duolingo
[2026-02-07T15:04:02.576Z] [BOT] 🚫 Skipping blacklisted job: Associate Solutions Engineering Program Manager at verkada
🚫 Skipping blacklisted job: Customer Advocacy Lead at verkada
🚫 Skipping blacklisted job: Demand Generation & Growth Marketing Manager, Channel Technical Programs at verkada
[2026-02-07T15:04:02.576Z] [BOT] 🚫 Skipping blacklisted job: Digital GTM Manager  at verkada
[2026-02-07T15:04:02.576Z] [BOT] 🚫 Skipping blacklisted job: Director of AMER Field Marketing at verkada
[2026-02-07T15:04:02.576Z] [BOT] 🚫 Skipping blacklisted job: Director of Product, Computer Vision and Artificial Intelligence at verkada
[2026-02-07T15:04:02.577Z] [BOT] 🚫 Skipping blacklisted job: Director of Technical Content & Delivery at verkada
[2026-02-07T15:04:02.577Z] [BOT] 🚫 Skipping blacklisted job: Embedded Engineering Lead - Streaming at verkada
🚫 Skipping blacklisted job: Embedded Engineering Manager - Alarms at verkada
[2026-02-07T15:04:02.577Z] [BOT] 🚫 Skipping blacklisted job: Enterprise Sales Enablement Manager at verkada
[2026-02-07T15:04:02.577Z] [BOT] 🚫 Skipping blacklisted job: Global Growth Manager at verkada
[2026-02-07T15:04:02.577Z] [BOT] 🚫 Skipping blacklisted job: GRCA Manager/Director at verkada
[2026-02-07T15:04:02.624Z] [BOT] ✅ Loaded pending queue: 400 total (350 pending, 50 enriched, 0 posted)
[2026-02-07T15:04:02.658Z] [BOT] ✅ Saved pending queue: 385 total (350 pending, 35 enriched, 0 posted)
🗑️ Removed 15 blacklisted jobs from pending queue
[2026-02-07T15:04:02.659Z] [BOT] 📋 After blacklist filter: 33 jobs (15 blacklisted)
[2026-02-07T15:04:02.659Z] [BOT] 📋 After data quality filter: 33 jobs (0 invalid)
[2026-02-07T15:04:02.660Z] [BOT] 📋 After multi-location grouping: 32 unique jobs to post
[2026-02-07T15:04:02.660Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 38 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-07T15:04:02.664Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-07T15:04:02.665Z] [BOT] 📍 [ROUTING] "Learning Scientist, Efficacy Research" @ duolingo
[2026-02-07T15:04:02.666Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:04:02.666Z] [BOT] 🔢 Loaded persisted counter for channel CH_44b6ec5f: 833
[2026-02-07T15:04:02.683Z] [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-07T15:04:02.990Z] [BOT] ✅ Posted message: Learning Scientist, Efficacy Research @ duolingo in #💻・tech-jobs
  ✅ Industry: Learning Scientist, Efficacy Research @ duolingo
[2026-02-07T15:04:02.991Z] [BOT] 💾 Added channel posting: Learning Scientist, Efficacy Research @ duolingo → category channel (1 total channels)
[2026-02-07T15:04:02.991Z] [BOT] 💾 BEFORE MERGE: 1374 jobs in memory (cached)
[2026-02-07T15:04:03.016Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T15:04:03.016Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1374
[2026-02-07T15:04:03.020Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:04:03.020Z] [BOT] 💾 AFTER MERGE: 1374 jobs (merged disk + memory)
[2026-02-07T15:04:03.021Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-07T15:04:03.029Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-02-07T15:04:03.029Z] [BOT] ✅ Archiving complete: 10 archived, 1364 active
[2026-02-07T15:04:03.093Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:04.596Z] [BOT] 🔢 Loaded persisted counter for channel CH_4b72af5c: 303
[2026-02-07T15:04:05.243Z] [BOT] ✅ Posted message: Learning Scientist, Efficacy Research @ duolingo in #📍・JID_6daed763
[2026-02-07T15:04:05.243Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-07T15:04:05.244Z] [BOT] 💾 Added channel posting: Learning Scientist, Efficacy Research @ duolingo → location channel (2 total channels)
💾 BEFORE MERGE: 1364 jobs in memory (cached)
[2026-02-07T15:04:05.264Z] [BOT] ✅ Loaded V2 database: 1364 jobs
💾 DISK STATE: 1364 jobs on disk
[2026-02-07T15:04:05.264Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1364
[2026-02-07T15:04:05.267Z] [BOT] 🔀 Deep merged: Learning Scientist, Efficacy Research @ duolingo (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-07T15:04:05.267Z] [BOT] 💾 AFTER MERGE: 1364 jobs (merged disk + memory)
[2026-02-07T15:04:05.268Z] [BOT] ✅ No jobs to archive (all 1364 jobs within 7-day window)
[2026-02-07T15:04:05.325Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:06.825Z] [BOT] 📍 [ROUTING] "Technical Support Engineer - University Graduate 2026" @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-07T15:04:07.082Z] [BOT] ✅ Posted message: Technical Support Engineer - University Graduate 2026 @ verkada in #💻・tech-jobs
[2026-02-07T15:04:07.082Z] [BOT] ✅ Industry: Technical Support Engineer - University Graduate 2026 @ verkada
[2026-02-07T15:04:07.083Z] [BOT] 💾 Added channel posting: Technical Support Engineer - University Graduate 2026 @ verkada → category channel (1 total channels)
[2026-02-07T15:04:07.083Z] [BOT] 💾 BEFORE MERGE: 1365 jobs in memory (cached)
[2026-02-07T15:04:07.103Z] [BOT] ✅ Loaded V2 database: 1364 jobs
💾 DISK STATE: 1364 jobs on disk
[2026-02-07T15:04:07.103Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1365
[2026-02-07T15:04:07.106Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:04:07.106Z] [BOT] 💾 AFTER MERGE: 1365 jobs (merged disk + memory)
[2026-02-07T15:04:07.107Z] [BOT] ✅ No jobs to archive (all 1365 jobs within 7-day window)
[2026-02-07T15:04:07.164Z] [BOT] 💾 Saved posted_jobs.json: 1365 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:11.666Z] [BOT] 📌 Posting 8 jobs to #💰・finance-jobs
[2026-02-07T15:04:11.667Z] [BOT] 📍 [ROUTING] " Account Executive, Select, San Mateo (Corp)" @ verkada
   Category: FINANCE (matched: "tax")
[2026-02-07T15:04:11.667Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
🔢 Loaded persisted counter for channel CH_bd916e08: 64
[2026-02-07T15:04:11.877Z] [BOT] ✅ Posted message:  Account Executive, Select, San Mateo (Corp) @ verkada in #💰・finance-jobs
  ✅ Industry:  Account Executive, Select, San Mateo (Corp) @ verkada
[2026-02-07T15:04:11.878Z] [BOT] 💾 Added channel posting:  Account Executive, Select, San Mateo (Corp) @ verkada → category channel (1 total channels)
[2026-02-07T15:04:11.878Z] [BOT] 💾 BEFORE MERGE: 1366 jobs in memory (cached)
[2026-02-07T15:04:11.897Z] [BOT] ✅ Loaded V2 database: 1365 jobs
💾 DISK STATE: 1365 jobs on disk
[2026-02-07T15:04:11.898Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1366
[2026-02-07T15:04:11.900Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:04:11.901Z] [BOT] 💾 AFTER MERGE: 1366 jobs (merged disk + memory)
[2026-02-07T15:04:11.902Z] [BOT] ✅ No jobs to archive (all 1366 jobs within 7-day window)
[2026-02-07T15:04:11.960Z] [BOT] 💾 Saved posted_jobs.json: 1366 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:13.462Z] [BOT] 📍 [ROUTING] " Account Executive, Select, San Mateo (SLED)" @ verkada
[2026-02-07T15:04:13.462Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:04:13.786Z] [BOT] ✅ Posted message:  Account Executive, Select, San Mateo (SLED) @ verkada in #💰・finance-jobs
[2026-02-07T15:04:13.787Z] [BOT] ✅ Industry:  Account Executive, Select, San Mateo (SLED) @ verkada
[2026-02-07T15:04:13.787Z] [BOT] 💾 Added channel posting:  Account Executive, Select, San Mateo (SLED) @ verkada → category channel (1 total channels)
[2026-02-07T15:04:13.787Z] [BOT] 💾 BEFORE MERGE: 1367 jobs in memory (cached)
[2026-02-07T15:04:13.807Z] [BOT] ✅ Loaded V2 database: 1366 jobs
💾 DISK STATE: 1366 jobs on disk
[2026-02-07T15:04:13.807Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1367
[2026-02-07T15:04:13.810Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1367 jobs (merged disk + memory)
[2026-02-07T15:04:13.811Z] [BOT] ✅ No jobs to archive (all 1367 jobs within 7-day window)
[2026-02-07T15:04:13.874Z] [BOT] 💾 Saved posted_jobs.json: 1367 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:15.376Z] [BOT] 📍 [ROUTING] "Account Executive, Territory, Canada" @ verkada
   Category: FINANCE (matched: "tax")
[2026-02-07T15:04:15.377Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:04:15.760Z] [BOT] ✅ Posted message: Account Executive, Territory, Canada @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory, Canada @ verkada
[2026-02-07T15:04:15.761Z] [BOT] 💾 Added channel posting: Account Executive, Territory, Canada @ verkada → category channel (1 total channels)
[2026-02-07T15:04:15.762Z] [BOT] 💾 BEFORE MERGE: 1368 jobs in memory (cached)
[2026-02-07T15:04:15.788Z] [BOT] ✅ Loaded V2 database: 1367 jobs
💾 DISK STATE: 1367 jobs on disk
[2026-02-07T15:04:15.788Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1368
[2026-02-07T15:04:15.791Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:04:15.791Z] [BOT] 💾 AFTER MERGE: 1368 jobs (merged disk + memory)
[2026-02-07T15:04:15.792Z] [BOT] ✅ No jobs to archive (all 1368 jobs within 7-day window)
[2026-02-07T15:04:15.857Z] [BOT] 💾 Saved posted_jobs.json: 1368 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:17.359Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market California Corp)" @ verkada
   Category: FINANCE (matched: "finance")
[2026-02-07T15:04:17.359Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:04:17.608Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market California Corp) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market California Corp) @ verkada
[2026-02-07T15:04:17.608Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market California Corp) @ verkada → category channel (1 total channels)
[2026-02-07T15:04:17.609Z] [BOT] 💾 BEFORE MERGE: 1369 jobs in memory (cached)
[2026-02-07T15:04:17.627Z] [BOT] ✅ Loaded V2 database: 1368 jobs
💾 DISK STATE: 1368 jobs on disk
[2026-02-07T15:04:17.628Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1369
[2026-02-07T15:04:17.630Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1369 jobs (merged disk + memory)
[2026-02-07T15:04:17.631Z] [BOT] ✅ No jobs to archive (all 1369 jobs within 7-day window)
[2026-02-07T15:04:17.693Z] [BOT] 💾 Saved posted_jobs.json: 1369 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:19.195Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market East Corp)" @ verkada
   Category: FINANCE (matched: "finance")
[2026-02-07T15:04:19.195Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:04:19.321Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market East Corp) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market East Corp) @ verkada
[2026-02-07T15:04:19.322Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market East Corp) @ verkada → category channel (1 total channels)
[2026-02-07T15:04:19.322Z] [BOT] 💾 BEFORE MERGE: 1370 jobs in memory (cached)
[2026-02-07T15:04:19.341Z] [BOT] ✅ Loaded V2 database: 1369 jobs
💾 DISK STATE: 1369 jobs on disk
[2026-02-07T15:04:19.341Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1370
[2026-02-07T15:04:19.344Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1370 jobs (merged disk + memory)
[2026-02-07T15:04:19.345Z] [BOT] ✅ No jobs to archive (all 1370 jobs within 7-day window)
[2026-02-07T15:04:19.410Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:20.912Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market East SLED)" @ verkada
[2026-02-07T15:04:20.912Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:04:21.190Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market East SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market East SLED) @ verkada
[2026-02-07T15:04:21.191Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market East SLED) @ verkada → category channel (1 total channels)
[2026-02-07T15:04:21.191Z] [BOT] 💾 BEFORE MERGE: 1371 jobs in memory (cached)
[2026-02-07T15:04:21.210Z] [BOT] ✅ Loaded V2 database: 1370 jobs
💾 DISK STATE: 1370 jobs on disk
[2026-02-07T15:04:21.210Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1371
[2026-02-07T15:04:21.213Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:04:21.213Z] [BOT] 💾 AFTER MERGE: 1371 jobs (merged disk + memory)
[2026-02-07T15:04:21.214Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-02-07T15:04:21.276Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:22.779Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market West Corp)" @ verkada
[2026-02-07T15:04:22.779Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:04:22.939Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market West Corp) @ verkada in #💰・finance-jobs
[2026-02-07T15:04:22.939Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market West Corp) @ verkada
[2026-02-07T15:04:22.940Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market West Corp) @ verkada → category channel (1 total channels)
[2026-02-07T15:04:22.940Z] [BOT] 💾 BEFORE MERGE: 1372 jobs in memory (cached)
[2026-02-07T15:04:22.959Z] [BOT] ✅ Loaded V2 database: 1371 jobs
💾 DISK STATE: 1371 jobs on disk
[2026-02-07T15:04:22.959Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1372
[2026-02-07T15:04:22.962Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1372 jobs (merged disk + memory)
[2026-02-07T15:04:22.963Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-02-07T15:04:23.025Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:24.526Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market West SLED)" @ verkada
[2026-02-07T15:04:24.527Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-02-07T15:04:24.735Z] [BOT] ✅ Posted message: Account Executive, Territory (Mid-Market West SLED) @ verkada in #💰・finance-jobs
[2026-02-07T15:04:24.735Z] [BOT] ✅ Industry: Account Executive, Territory (Mid-Market West SLED) @ verkada
[2026-02-07T15:04:24.736Z] [BOT] 💾 Added channel posting: Account Executive, Territory (Mid-Market West SLED) @ verkada → category channel (1 total channels)
[2026-02-07T15:04:24.736Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T15:04:24.755Z] [BOT] ✅ Loaded V2 database: 1372 jobs
💾 DISK STATE: 1372 jobs on disk
[2026-02-07T15:04:24.755Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T15:04:24.758Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T15:04:24.759Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T15:04:24.822Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:29.324Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-07T15:04:29.325Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8018b71a..." not found, but found as SHA256 "a143d0bfb61fb9b0"
[2026-02-07T15:04:29.325Z] [BOT] ⏭️  Skipping duplicate: JID_8018b71a (posted within 7 days)
[2026-02-07T15:04:29.325Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2d7052a3..." not found, but found as SHA256 "8312cdf75c47df16"
[2026-02-07T15:04:29.326Z] [BOT] ⏭️  Skipping duplicate: JID_4fca70ba (posted within 7 days)
[2026-02-07T15:04:29.326Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10ced862..." not found, but found as SHA256 "171c474a6e84c849"
[2026-02-07T15:04:29.326Z] [BOT] ⏭️  Skipping duplicate: JID_17af90aa (posted within 7 days)
[2026-02-07T15:04:29.326Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_10ced862..." not found, but found as SHA256 "8867e040002e86c6"
⏭️  Skipping duplicate: JID_a8d09f94 (posted within 7 days)
[2026-02-07T15:04:29.326Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ddd7bef8..." not found, but found as SHA256 "ccef8448eb87ce78"
⏭️  Skipping duplicate: JID_9a6f01ee (posted within 7 days)
[2026-02-07T15:04:29.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfc0755c..." not found, but found as SHA256 "a39c5a2329f3658a"
⏭️  Skipping duplicate: JID_c2e0ae53 (posted within 7 days)
[2026-02-07T15:04:29.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfc0755c..." not found, but found as SHA256 "c31d8c46598a407a"
⏭️  Skipping duplicate: JID_d2e83964 (posted within 7 days)
[2026-02-07T15:04:29.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfc0755c..." not found, but found as SHA256 "f0305cda8969c063"
[2026-02-07T15:04:29.327Z] [BOT] ⏭️  Skipping duplicate: JID_01d6b61b (posted within 7 days)
[2026-02-07T15:04:29.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfc0755c..." not found, but found as SHA256 "65ab410fae952f00"
⏭️  Skipping duplicate: JID_722efc56 (posted within 7 days)
[2026-02-07T15:04:29.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cfc0755c..." not found, but found as SHA256 "db7b5dba6a71f5b4"
[2026-02-07T15:04:29.328Z] [BOT] ⏭️  Skipping duplicate: JID_1f77fcb0 (posted within 7 days)
[2026-02-07T15:04:29.347Z] [BOT] ✅ Loaded pending queue: 385 total (350 pending, 35 enriched, 0 posted)
[2026-02-07T15:04:29.386Z] [BOT] ✅ Saved pending queue: 385 total (350 pending, 25 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-07T15:04:29.494Z] [BOT] 📂 Loaded 12631 existing routing entries
[2026-02-07T15:04:29.618Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12641
[2026-02-07T15:04:29.618Z] [BOT] Timestamp: 2026-02-07T15:04:29.565Z
[2026-02-07T15:04:29.619Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_303ba7bc.jsonl
[2026-02-07T15:04:29.619Z] [BOT] Total attempts: 28
   Successful: 11
   Failed: 0
   Skipped: 17
[2026-02-07T15:04:29.619Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-07T15:04:29.619Z] [BOT] Last cleanup: Never
   Total posts: 11
   Channels used: 3
   Top channels:
     1. #💰・finance-jobs: 8 posts
     2. #💻・tech-jobs: 2 posts
     3. #📍・JID_6daed763: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-07T15:04:29.619Z] [BOT] 💾 BEFORE MERGE: 1373 jobs in memory (cached)
[2026-02-07T15:04:29.640Z] [BOT] ✅ Loaded V2 database: 1373 jobs
💾 DISK STATE: 1373 jobs on disk
[2026-02-07T15:04:29.640Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=1373
[2026-02-07T15:04:29.643Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-07T15:04:29.643Z] [BOT] 💾 AFTER MERGE: 1373 jobs (merged disk + memory)
[2026-02-07T15:04:29.645Z] [BOT] ✅ No jobs to archive (all 1373 jobs within 7-day window)
[2026-02-07T15:04:29.716Z] [BOT] 💾 Saved posted_jobs.json: 1373 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-07T15:04:29.717Z] [BOT] ✅ Database saved successfully
[2026-02-07T15:04:31.737Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*