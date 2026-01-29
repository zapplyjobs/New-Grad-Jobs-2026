# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T18:36:27.942Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T18:35:52.192Z] ========================================
[2026-01-29T18:35:52.194Z] Discord Bot Execution Log
[2026-01-29T18:35:52.194Z] Environment: GitHub Actions
[2026-01-29T18:35:52.194Z] Node Version: v20.20.0
[2026-01-29T18:35:52.194Z] ========================================
[2026-01-29T18:35:52.194Z] Environment Variables Check:
[2026-01-29T18:35:52.194Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T18:35:52.194Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.194Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T18:35:52.194Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T18:35:52.194Z] 
Multi-Channel Configuration:
[2026-01-29T18:35:52.194Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.194Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T18:35:52.195Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T18:35:52.195Z] 
Data Files Check:
[2026-01-29T18:35:52.196Z] .github/data/new_jobs.json: ✅ Exists (10 items, 100334 bytes)
[2026-01-29T18:35:52.197Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 152941 bytes)
[2026-01-29T18:35:52.197Z] 
========================================
[2026-01-29T18:35:52.198Z] Starting Enhanced Discord Bot...
[2026-01-29T18:35:52.198Z] ========================================
[2026-01-29T18:35:52.654Z] [BOT] ✅ Loaded V2 database: 39 jobs
[2026-01-29T18:35:53.331Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T18:35:53.332Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T18:35:53.332Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T18:35:53.489Z] [BOT] ✅ Loaded pending queue: 2879 total (2819 pending, 50 enriched, 10 posted)
[2026-01-29T18:35:53.490Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-01-29T18:35:53.490Z] [BOT] [BOT] 🔍 Sample enriched job: Capco Associate Talent Program at Capco
[2026-01-29T18:35:53.493Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T18:35:53.493Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
[2026-01-29T18:35:53.493Z] [BOT] 🚫 Skipping blacklisted job: Sales Account Manager I at brex
🚫 Skipping blacklisted job: Transaction Manager at anthropic
🚫 Skipping blacklisted job: Staff Software Engineer,  Infrastructure  at gusto
[2026-01-29T18:35:53.494Z] [BOT] 🚫 Skipping blacklisted job: Engineering Manager, AI — Brex Assistant at brex
🚫 Skipping blacklisted job: Director, Safety Policy at discord
[2026-01-29T18:35:53.638Z] [BOT] ✅ Loaded pending queue: 2879 total (2819 pending, 50 enriched, 10 posted)
[2026-01-29T18:35:53.800Z] [BOT] ✅ Saved pending queue: 2873 total (2819 pending, 44 enriched, 10 posted)
🗑️ Removed 6 blacklisted jobs from pending queue
📋 After blacklist filter: 44 jobs (6 blacklisted)
[2026-01-29T18:35:53.800Z] [BOT] 📋 After data quality filter: 44 jobs (0 invalid)
[2026-01-29T18:35:53.801Z] [BOT] 📋 After multi-location grouping: 41 unique jobs to post
[2026-01-29T18:35:53.801Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Startups Ambassador @ brex: new york, new york, united states, san francisco, california, united states
   - Sales Recruiter (12-month contract) @ brex: new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T18:35:53.805Z] [BOT] 📌 Posting 5 jobs to #🤖・ai-jobs
[2026-01-29T18:35:53.806Z] [BOT] 📍 [ROUTING] "Capco Associate Talent Program" @ ORG_da05efaa
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:35:53.824Z] [BOT ERROR] (node:3026) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T18:35:54.086Z] [BOT] ✅ Posted message: Capco Associate Talent Program @ ORG_da05efaa in #🤖・ai-jobs
[2026-01-29T18:35:54.086Z] [BOT] ✅ Industry: Capco Associate Talent Program @ ORG_da05efaa
[2026-01-29T18:35:54.087Z] [BOT] 💾 Added channel posting: Capco Associate Talent Program @ ORG_da05efaa → category channel (1 total channels)
[2026-01-29T18:35:54.087Z] [BOT] 💾 BEFORE MERGE: 40 jobs in memory (cached)
[2026-01-29T18:35:54.089Z] [BOT] ✅ Loaded V2 database: 39 jobs
💾 DISK STATE: 39 jobs on disk
[2026-01-29T18:35:54.089Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=40
[2026-01-29T18:35:54.089Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:35:54.089Z] [BOT] 💾 AFTER MERGE: 40 jobs (merged disk + memory)
[2026-01-29T18:35:54.089Z] [BOT] ✅ No jobs to archive (all 40 jobs within 7-day window)
[2026-01-29T18:35:54.095Z] [BOT] 💾 Saved posted_jobs.json: 40 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:35:55.598Z] [BOT] 📍 [ROUTING] "Data Analyst - Rdp" @ ORG_3d434656
   Category: AI (matched: "machine learning")
[2026-01-29T18:35:55.598Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T18:35:55.804Z] [BOT] ✅ Posted message: Data Analyst - Rdp @ ORG_3d434656 in #🤖・ai-jobs
[2026-01-29T18:35:55.804Z] [BOT] ✅ Industry: Data Analyst - Rdp @ ORG_3d434656
💾 Added channel posting: Data Analyst - Rdp @ ORG_3d434656 → category channel (1 total channels)
💾 BEFORE MERGE: 41 jobs in memory (cached)
[2026-01-29T18:35:55.805Z] [BOT] ✅ Loaded V2 database: 40 jobs
💾 DISK STATE: 40 jobs on disk
[2026-01-29T18:35:55.805Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=41
[2026-01-29T18:35:55.805Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:35:55.805Z] [BOT] 💾 AFTER MERGE: 41 jobs (merged disk + memory)
✅ No jobs to archive (all 41 jobs within 7-day window)
[2026-01-29T18:35:55.808Z] [BOT] 💾 Saved posted_jobs.json: 41 active jobs
[2026-01-29T18:35:55.808Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:35:57.309Z] [BOT] 📍 [ROUTING] "Graduate PhD Scientist 2 - Operations Research or Machine Learning - Mobility and Delivery Tech" @ ORG_3cfbdbc3
   Category: AI (matched: "machine learning")
[2026-01-29T18:35:57.309Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T18:35:57.510Z] [BOT] ✅ Posted message: Graduate PhD Scientist 2 - Operations Research or Machine Learning - Mobility and Delivery Tech @ ORG_3cfbdbc3 in #🤖・ai-jobs
[2026-01-29T18:35:57.510Z] [BOT] ✅ Industry: Graduate PhD Scientist 2 - Operations Research or Machine Learning - Mobility and Delivery Tech @ ORG_3cfbdbc3
💾 Added channel posting: Graduate PhD Scientist 2 - Operations Research or Machine Learning - Mobility and Delivery Tech @ ORG_3cfbdbc3 → category channel (1 total channels)
💾 BEFORE MERGE: 42 jobs in memory (cached)
[2026-01-29T18:35:57.511Z] [BOT] ✅ Loaded V2 database: 41 jobs
[2026-01-29T18:35:57.511Z] [BOT] 💾 DISK STATE: 41 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=42
[2026-01-29T18:35:57.511Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 42 jobs (merged disk + memory)
[2026-01-29T18:35:57.511Z] [BOT] ✅ No jobs to archive (all 42 jobs within 7-day window)
[2026-01-29T18:35:57.514Z] [BOT] 💾 Saved posted_jobs.json: 42 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:35:59.015Z] [BOT] 📍 [ROUTING] "Graduate PhD Scientist 2 - Operations Research or ML - Mobility and Delivery Tech" @ ORG_3cfbdbc3
   Category: AI (matched: "machine learning")
[2026-01-29T18:35:59.016Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-29T18:35:59.213Z] [BOT] ✅ Posted message: Graduate PhD Scientist 2 - Operations Research or ML - Mobility and Delivery Tech @ ORG_3cfbdbc3 in #🤖・ai-jobs
  ✅ Industry: Graduate PhD Scientist 2 - Operations Research or ML - Mobility and Delivery Tech @ ORG_3cfbdbc3
[2026-01-29T18:35:59.213Z] [BOT] 💾 Added channel posting: Graduate PhD Scientist 2 - Operations Research or ML - Mobility and Delivery Tech @ ORG_3cfbdbc3 → category channel (1 total channels)
💾 BEFORE MERGE: 43 jobs in memory (cached)
[2026-01-29T18:35:59.215Z] [BOT] ✅ Loaded V2 database: 42 jobs
💾 DISK STATE: 42 jobs on disk
[2026-01-29T18:35:59.215Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=43
[2026-01-29T18:35:59.215Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 43 jobs (merged disk + memory)
✅ No jobs to archive (all 43 jobs within 7-day window)
[2026-01-29T18:35:59.218Z] [BOT] 💾 Saved posted_jobs.json: 43 active jobs
[2026-01-29T18:35:59.218Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:00.720Z] [BOT] 📍 [ROUTING] "Applied AI Engineer (Digital Natives Business) " @ anthropic
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T18:36:00.720Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T18:36:00.951Z] [BOT] ✅ Posted message: Applied AI Engineer (Digital Natives Business)  @ anthropic in #🤖・ai-jobs
[2026-01-29T18:36:00.951Z] [BOT] ✅ Industry: Applied AI Engineer (Digital Natives Business)  @ anthropic
💾 Added channel posting: Applied AI Engineer (Digital Natives Business)  @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 44 jobs in memory (cached)
[2026-01-29T18:36:00.952Z] [BOT] ✅ Loaded V2 database: 43 jobs
[2026-01-29T18:36:00.952Z] [BOT] 💾 DISK STATE: 43 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=44
[2026-01-29T18:36:00.953Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 44 jobs (merged disk + memory)
[2026-01-29T18:36:00.953Z] [BOT] ✅ No jobs to archive (all 44 jobs within 7-day window)
[2026-01-29T18:36:00.956Z] [BOT] 💾 Saved posted_jobs.json: 44 active jobs
[2026-01-29T18:36:00.956Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:05.458Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-29T18:36:05.458Z] [BOT] 📍 [ROUTING] "D&a Rotational Development Program Associate" @ ORG_3d434656
   Category: TECH (default)
[2026-01-29T18:36:05.458Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:36:05.905Z] [BOT] ✅ Posted message: D&a Rotational Development Program Associate @ ORG_3d434656 in #💻・tech-jobs
  ✅ Industry: D&a Rotational Development Program Associate @ ORG_3d434656
[2026-01-29T18:36:05.905Z] [BOT] 💾 Added channel posting: D&a Rotational Development Program Associate @ ORG_3d434656 → category channel (1 total channels)
💾 BEFORE MERGE: 45 jobs in memory (cached)
[2026-01-29T18:36:05.906Z] [BOT] ✅ Loaded V2 database: 44 jobs
[2026-01-29T18:36:05.906Z] [BOT] 💾 DISK STATE: 44 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=45
[2026-01-29T18:36:05.906Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:36:05.906Z] [BOT] 💾 AFTER MERGE: 45 jobs (merged disk + memory)
✅ No jobs to archive (all 45 jobs within 7-day window)
[2026-01-29T18:36:05.911Z] [BOT] 💾 Saved posted_jobs.json: 45 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:07.413Z] [BOT] 📍 [ROUTING] "Microsoft GTM Partnership, Enterprise" @ anthropic
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T18:36:07.850Z] [BOT] ✅ Posted message: Microsoft GTM Partnership, Enterprise @ anthropic in #💻・tech-jobs
  ✅ Industry: Microsoft GTM Partnership, Enterprise @ anthropic
[2026-01-29T18:36:07.850Z] [BOT] 💾 Added channel posting: Microsoft GTM Partnership, Enterprise @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 46 jobs in memory (cached)
[2026-01-29T18:36:07.851Z] [BOT] ✅ Loaded V2 database: 45 jobs
💾 DISK STATE: 45 jobs on disk
[2026-01-29T18:36:07.852Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=46
[2026-01-29T18:36:07.852Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 46 jobs (merged disk + memory)
[2026-01-29T18:36:07.852Z] [BOT] ✅ No jobs to archive (all 46 jobs within 7-day window)
[2026-01-29T18:36:07.856Z] [BOT] 💾 Saved posted_jobs.json: 46 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:12.358Z] [BOT] 📌 Posting 3 jobs to #💰・finance-jobs
[2026-01-29T18:36:12.358Z] [BOT] 📍 [ROUTING] "Technical Revenue Accounting" @ anthropic
   Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T18:36:12.658Z] [BOT] ✅ Posted message: Technical Revenue Accounting @ anthropic in #💰・finance-jobs
  ✅ Industry: Technical Revenue Accounting @ anthropic
[2026-01-29T18:36:12.659Z] [BOT] 💾 Added channel posting: Technical Revenue Accounting @ anthropic → category channel (1 total channels)
💾 BEFORE MERGE: 47 jobs in memory (cached)
[2026-01-29T18:36:12.660Z] [BOT] ✅ Loaded V2 database: 46 jobs
[2026-01-29T18:36:12.660Z] [BOT] 💾 DISK STATE: 46 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=47
[2026-01-29T18:36:12.660Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 47 jobs (merged disk + memory)
[2026-01-29T18:36:12.660Z] [BOT] ✅ No jobs to archive (all 47 jobs within 7-day window)
[2026-01-29T18:36:12.664Z] [BOT] 💾 Saved posted_jobs.json: 47 active jobs
[2026-01-29T18:36:12.664Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:14.166Z] [BOT] 📍 [ROUTING] "Startups Ambassador" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-29T18:36:14.166Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T18:36:14.391Z] [BOT] ✅ Posted message: Startups Ambassador @ brex in #💰・finance-jobs
[2026-01-29T18:36:14.391Z] [BOT] ✅ Industry: Startups Ambassador @ brex
[2026-01-29T18:36:14.391Z] [BOT] 💾 Added channel posting: Startups Ambassador @ brex → category channel (1 total channels)
💾 BEFORE MERGE: 48 jobs in memory (cached)
[2026-01-29T18:36:14.392Z] [BOT] ✅ Loaded V2 database: 47 jobs
💾 DISK STATE: 47 jobs on disk
[2026-01-29T18:36:14.392Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=48
[2026-01-29T18:36:14.393Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:36:14.393Z] [BOT] 💾 AFTER MERGE: 48 jobs (merged disk + memory)
✅ No jobs to archive (all 48 jobs within 7-day window)
[2026-01-29T18:36:14.397Z] [BOT] 💾 Saved posted_jobs.json: 48 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:16.279Z] [BOT] ✅ Posted message: Startups Ambassador @ brex in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T18:36:16.279Z] [BOT] 💾 Added channel posting: Startups Ambassador @ brex → location channel (2 total channels)
💾 BEFORE MERGE: 48 jobs in memory (cached)
[2026-01-29T18:36:16.280Z] [BOT] ✅ Loaded V2 database: 48 jobs
[2026-01-29T18:36:16.280Z] [BOT] 💾 DISK STATE: 48 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=48
[2026-01-29T18:36:16.281Z] [BOT] 🔀 Deep merged: Startups Ambassador @ brex (disk: 1 channels → merged: 2 channels)
[2026-01-29T18:36:16.281Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 48 jobs (merged disk + memory)
✅ No jobs to archive (all 48 jobs within 7-day window)
[2026-01-29T18:36:16.285Z] [BOT] 💾 Saved posted_jobs.json: 48 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:17.787Z] [BOT] 📍 [ROUTING] "Tradeshow Associate" @ verkada
   Category: FINANCE (matched: "tax")
[2026-01-29T18:36:17.787Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T18:36:18.045Z] [BOT] ✅ Posted message: Tradeshow Associate @ verkada in #💰・finance-jobs
[2026-01-29T18:36:18.045Z] [BOT] ✅ Industry: Tradeshow Associate @ verkada
💾 Added channel posting: Tradeshow Associate @ verkada → category channel (1 total channels)
[2026-01-29T18:36:18.045Z] [BOT] 💾 BEFORE MERGE: 49 jobs in memory (cached)
[2026-01-29T18:36:18.046Z] [BOT] ✅ Loaded V2 database: 48 jobs
💾 DISK STATE: 48 jobs on disk
[2026-01-29T18:36:18.046Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=49
[2026-01-29T18:36:18.047Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T18:36:18.047Z] [BOT] 💾 AFTER MERGE: 49 jobs (merged disk + memory)
✅ No jobs to archive (all 49 jobs within 7-day window)
[2026-01-29T18:36:18.051Z] [BOT] 💾 Saved posted_jobs.json: 49 active jobs
[2026-01-29T18:36:18.051Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:19.704Z] [BOT] ✅ Posted message: Tradeshow Associate @ verkada in #🗽・JID_98d4f0de
[2026-01-29T18:36:19.705Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
💾 Added channel posting: Tradeshow Associate @ verkada → location channel (2 total channels)
💾 BEFORE MERGE: 49 jobs in memory (cached)
[2026-01-29T18:36:19.706Z] [BOT] ✅ Loaded V2 database: 49 jobs
💾 DISK STATE: 49 jobs on disk
[2026-01-29T18:36:19.706Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=49
[2026-01-29T18:36:19.706Z] [BOT] 🔀 Deep merged: Tradeshow Associate @ verkada (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 49 jobs (merged disk + memory)
[2026-01-29T18:36:19.706Z] [BOT] ✅ No jobs to archive (all 49 jobs within 7-day window)
[2026-01-29T18:36:19.710Z] [BOT] 💾 Saved posted_jobs.json: 49 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:24.211Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T18:36:24.211Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e22c0880..." not found, but found as SHA256 "0db6f2cd989caf2f"
[2026-01-29T18:36:24.211Z] [BOT] ⏭️  Skipping duplicate: JID_176b42f2 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_4c89753d-ur_externa..." not found, but found as SHA256 "176420f182aa7c72"
[2026-01-29T18:36:24.212Z] [BOT] ⏭️  Skipping duplicate: JID_4c89753d-ur_external-JID_6227fa77-rdp_j00173044 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_4c89753d-ur_externa..." not found, but found as SHA256 "9cedb05ba6910a6e"
⏭️  Skipping duplicate: JID_4c89753d-ur_external-JID_7c19c630-associate_j00171083 (posted within 7 days)
[2026-01-29T18:36:24.212Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_06abc9f0..." not found, but found as SHA256 "aebb97c22e881b44"
⏭️  Skipping duplicate: JID_011120f7 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_d721be08..." not found, but found as SHA256 "d72e69283f58baf4"
⏭️  Skipping duplicate: JID_72b320d6 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "070dd6fd23f55776"
[2026-01-29T18:36:24.212Z] [BOT] ⏭️  Skipping duplicate: JID_d41e3b92 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "8a2ad56d66c70a51"
⏭️  Skipping duplicate: JID_55a5b826 (posted within 7 days)
[2026-01-29T18:36:24.212Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4d36c8c9..." not found, but found as SHA256 "643915d8cf345741"
⏭️  Skipping duplicate: JID_4d36c8c9 (posted within 7 days)
[2026-01-29T18:36:24.212Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6394bff5..." not found, but found as SHA256 "9aa61c7ccf9e3db1"
⏭️  Skipping duplicate: JID_297ef683 (posted within 7 days)
[2026-01-29T18:36:24.212Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "a0a216e9a267660a"
⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-29T18:36:24.384Z] [BOT] ✅ Loaded pending queue: 2873 total (2819 pending, 44 enriched, 10 posted)
[2026-01-29T18:36:24.542Z] [BOT] ✅ Saved pending queue: 2873 total (2819 pending, 34 enriched, 20 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-29T18:36:24.542Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-29T18:36:24.632Z] [BOT] 📂 Loaded 10101 existing routing entries
[2026-01-29T18:36:24.731Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 10111
[2026-01-29T18:36:24.732Z] [BOT] Timestamp: 2026-01-29T18:36:24.692Z
[2026-01-29T18:36:24.732Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
   Total attempts: 18
[2026-01-29T18:36:24.732Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 6
[2026-01-29T18:36:24.732Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
[2026-01-29T18:36:24.732Z] [BOT] Top channels:
     1. #🤖・ai-jobs: 5 posts
     2. #💰・finance-jobs: 3 posts
     3. #💻・tech-jobs: 2 posts
     4. #🗽・JID_98d4f0de: 2 posts
[2026-01-29T18:36:24.733Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-01-29T18:36:24.733Z] [BOT] 💾 BEFORE MERGE: 49 jobs in memory (cached)
[2026-01-29T18:36:24.734Z] [BOT] ✅ Loaded V2 database: 49 jobs
💾 DISK STATE: 49 jobs on disk
[2026-01-29T18:36:24.734Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=49
[2026-01-29T18:36:24.734Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 49 jobs (merged disk + memory)
✅ No jobs to archive (all 49 jobs within 7-day window)
[2026-01-29T18:36:24.739Z] [BOT] 💾 Saved posted_jobs.json: 49 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T18:36:24.739Z] [BOT] ✅ Database saved successfully
[2026-01-29T18:36:26.759Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3026) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*