# Discord Bot Execution Audit
**Timestamp:** 2026-01-29T22:15:30.927Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-29T22:14:54.129Z] ========================================
[2026-01-29T22:14:54.131Z] Discord Bot Execution Log
[2026-01-29T22:14:54.131Z] Environment: GitHub Actions
[2026-01-29T22:14:54.132Z] Node Version: v20.20.0
[2026-01-29T22:14:54.132Z] ========================================
[2026-01-29T22:14:54.132Z] Environment Variables Check:
[2026-01-29T22:14:54.132Z] DISCORD_TOKEN: ✅ Set
[2026-01-29T22:14:54.132Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.132Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-29T22:14:54.132Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-29T22:14:54.132Z] 
Multi-Channel Configuration:
[2026-01-29T22:14:54.132Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.132Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-29T22:14:54.133Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-29T22:14:54.133Z] 
Data Files Check:
[2026-01-29T22:14:54.134Z] .github/data/new_jobs.json: ✅ Exists (10 items, 101663 bytes)
[2026-01-29T22:14:54.140Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 761979 bytes)
[2026-01-29T22:14:54.140Z] 
========================================
[2026-01-29T22:14:54.140Z] Starting Enhanced Discord Bot...
[2026-01-29T22:14:54.140Z] ========================================
[2026-01-29T22:14:54.685Z] [BOT] ✅ Loaded V2 database: 139 jobs
[2026-01-29T22:14:55.094Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-29T22:14:55.095Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-29T22:14:55.095Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-29T22:14:55.219Z] [BOT] ✅ Loaded pending queue: 2883 total (2723 pending, 50 enriched, 110 posted)
[BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Westinghouse Electric Company
[2026-01-29T22:14:55.223Z] [BOT] 📬 Found 50 new jobs (0 already posted)...
[2026-01-29T22:14:55.224Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-01-29T22:14:55.224Z] [BOT] 🚫 Skipping blacklisted job: Partner Enablement Manager at brex
[2026-01-29T22:14:55.224Z] [BOT] 🚫 Skipping blacklisted job: Data Center Hardware Operations Lead at anthropic
🚫 Skipping blacklisted job: Research Product Manager, Model Behaviors at anthropic
[2026-01-29T22:14:55.224Z] [BOT] 🚫 Skipping blacklisted job: Manager, Corporate Development at coinbase
[2026-01-29T22:14:55.333Z] [BOT] ✅ Loaded pending queue: 2883 total (2723 pending, 50 enriched, 110 posted)
[2026-01-29T22:14:55.508Z] [BOT] ✅ Saved pending queue: 2878 total (2723 pending, 45 enriched, 110 posted)
🗑️ Removed 5 blacklisted jobs from pending queue
[2026-01-29T22:14:55.509Z] [BOT] 📋 After blacklist filter: 45 jobs (5 blacklisted)
📋 After data quality filter: 45 jobs (0 invalid)
[2026-01-29T22:14:55.510Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-01-29T22:14:55.510Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Expansion Account Executive, Enterprise @ brex: san francisco, california, united states, salt lake city, utah, united states, seattle, washington, united states
⏸️ Limiting to 10 jobs this run, 40 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-29T22:14:55.513Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-29T22:14:55.514Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_41a6741einghouse Electric Company
[2026-01-29T22:14:55.514Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:14:55.532Z] [BOT ERROR] (node:3406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-29T22:14:55.734Z] [BOT] ✅ Posted message: Software Engineer @ ORG_41a6741einghouse Electric Company in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_41a6741einghouse Electric Company
[2026-01-29T22:14:55.735Z] [BOT] 💾 Added channel posting: Software Engineer @ ORG_41a6741einghouse Electric Company → category channel (1 total channels)
[2026-01-29T22:14:55.735Z] [BOT] 💾 BEFORE MERGE: 140 jobs in memory (cached)
[2026-01-29T22:14:55.740Z] [BOT] ✅ Loaded V2 database: 139 jobs
[2026-01-29T22:14:55.740Z] [BOT] 💾 DISK STATE: 139 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=140
[2026-01-29T22:14:55.740Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:14:55.740Z] [BOT] 💾 AFTER MERGE: 140 jobs (merged disk + memory)
[2026-01-29T22:14:55.741Z] [BOT] ✅ No jobs to archive (all 140 jobs within 7-day window)
[2026-01-29T22:14:55.754Z] [BOT] 💾 Saved posted_jobs.json: 140 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:14:57.256Z] [BOT] 📍 [ROUTING] "Electric Distribution Planner 1" @ ORG_8fc44164 Consulting
   Category: TECH (default)
[2026-01-29T22:14:57.256Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:14:57.488Z] [BOT] ✅ Posted message: Electric Distribution Planner 1 @ ORG_8fc44164 Consulting in #💻・tech-jobs
[2026-01-29T22:14:57.488Z] [BOT] ✅ Industry: Electric Distribution Planner 1 @ ORG_8fc44164 Consulting
💾 Added channel posting: Electric Distribution Planner 1 @ ORG_8fc44164 Consulting → category channel (1 total channels)
[2026-01-29T22:14:57.488Z] [BOT] 💾 BEFORE MERGE: 141 jobs in memory (cached)
[2026-01-29T22:14:57.491Z] [BOT] ✅ Loaded V2 database: 140 jobs
[2026-01-29T22:14:57.491Z] [BOT] 💾 DISK STATE: 140 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=141
[2026-01-29T22:14:57.492Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:14:57.492Z] [BOT] 💾 AFTER MERGE: 141 jobs (merged disk + memory)
[2026-01-29T22:14:57.492Z] [BOT] ✅ No jobs to archive (all 141 jobs within 7-day window)
[2026-01-29T22:14:57.500Z] [BOT] 💾 Saved posted_jobs.json: 141 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:14:59.001Z] [BOT] 📍 [ROUTING] "Application Developer 1" @ ORG_d2fc2532
[2026-01-29T22:14:59.001Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:14:59.140Z] [BOT] ✅ Posted message: Application Developer 1 @ ORG_d2fc2532 in #💻・tech-jobs
  ✅ Industry: Application Developer 1 @ ORG_d2fc2532
[2026-01-29T22:14:59.140Z] [BOT] 💾 Added channel posting: Application Developer 1 @ ORG_d2fc2532 → category channel (1 total channels)
💾 BEFORE MERGE: 142 jobs in memory (cached)
[2026-01-29T22:14:59.144Z] [BOT] ✅ Loaded V2 database: 141 jobs
💾 DISK STATE: 141 jobs on disk
[2026-01-29T22:14:59.144Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=142
[2026-01-29T22:14:59.144Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 142 jobs (merged disk + memory)
[2026-01-29T22:14:59.144Z] [BOT] ✅ No jobs to archive (all 142 jobs within 7-day window)
[2026-01-29T22:14:59.153Z] [BOT] 💾 Saved posted_jobs.json: 142 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:00.655Z] [BOT] 📍 [ROUTING] "Training Content and Systems Architect" @ anthropic
[2026-01-29T22:15:00.655Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-29T22:15:00.858Z] [BOT] ✅ Posted message: Training Content and Systems Architect @ anthropic in #💻・tech-jobs
[2026-01-29T22:15:00.858Z] [BOT] ✅ Industry: Training Content and Systems Architect @ anthropic
💾 Added channel posting: Training Content and Systems Architect @ anthropic → category channel (1 total channels)
[2026-01-29T22:15:00.858Z] [BOT] 💾 BEFORE MERGE: 143 jobs in memory (cached)
[2026-01-29T22:15:00.861Z] [BOT] ✅ Loaded V2 database: 142 jobs
[2026-01-29T22:15:00.862Z] [BOT] 💾 DISK STATE: 142 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=143
[2026-01-29T22:15:00.862Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:15:00.862Z] [BOT] 💾 AFTER MERGE: 143 jobs (merged disk + memory)
[2026-01-29T22:15:00.862Z] [BOT] ✅ No jobs to archive (all 143 jobs within 7-day window)
[2026-01-29T22:15:00.871Z] [BOT] 💾 Saved posted_jobs.json: 143 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:05.374Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-29T22:15:05.374Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ qode.world
   Category: DATA-SCIENCE (matched: "data engineering")
[2026-01-29T22:15:05.374Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-29T22:15:05.686Z] [BOT] ✅ Posted message: Associate Data Engineer @ qode.world in #📊・JID_fb739488
  ✅ Industry: Associate Data Engineer @ qode.world
[2026-01-29T22:15:05.687Z] [BOT] 💾 Added channel posting: Associate Data Engineer @ qode.world → category channel (1 total channels)
💾 BEFORE MERGE: 144 jobs in memory (cached)
[2026-01-29T22:15:05.692Z] [BOT] ✅ Loaded V2 database: 143 jobs
[2026-01-29T22:15:05.692Z] [BOT] 💾 DISK STATE: 143 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=144
[2026-01-29T22:15:05.692Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:15:05.692Z] [BOT] 💾 AFTER MERGE: 144 jobs (merged disk + memory)
[2026-01-29T22:15:05.692Z] [BOT] ✅ No jobs to archive (all 144 jobs within 7-day window)
[2026-01-29T22:15:05.703Z] [BOT] 💾 Saved posted_jobs.json: 144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:07.412Z] [BOT] ✅ Posted message: Associate Data Engineer @ qode.world in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-29T22:15:07.412Z] [BOT] 💾 Added channel posting: Associate Data Engineer @ qode.world → location channel (2 total channels)
💾 BEFORE MERGE: 144 jobs in memory (cached)
[2026-01-29T22:15:07.415Z] [BOT] ✅ Loaded V2 database: 144 jobs
💾 DISK STATE: 144 jobs on disk
[2026-01-29T22:15:07.415Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=144
[2026-01-29T22:15:07.416Z] [BOT] 🔀 Deep merged: Associate Data Engineer @ qode.world (disk: 1 channels → merged: 2 channels)
[2026-01-29T22:15:07.416Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 144 jobs (merged disk + memory)
[2026-01-29T22:15:07.416Z] [BOT] ✅ No jobs to archive (all 144 jobs within 7-day window)
[2026-01-29T22:15:07.426Z] [BOT] 💾 Saved posted_jobs.json: 144 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:11.928Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-29T22:15:11.928Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_81f16575ington Ingalls Industries
   Category: AI (matched: "machine learning")
[2026-01-29T22:15:11.928Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:15:12.430Z] [BOT] ✅ Posted message: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries in #🤖・ai-jobs
[2026-01-29T22:15:12.430Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries
💾 Added channel posting: Software Engineer 1 @ ORG_81f16575ington Ingalls Industries → category channel (1 total channels)
[2026-01-29T22:15:12.431Z] [BOT] 💾 BEFORE MERGE: 145 jobs in memory (cached)
[2026-01-29T22:15:12.435Z] [BOT] ✅ Loaded V2 database: 144 jobs
💾 DISK STATE: 144 jobs on disk
[2026-01-29T22:15:12.435Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=145
[2026-01-29T22:15:12.436Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 145 jobs (merged disk + memory)
[2026-01-29T22:15:12.436Z] [BOT] ✅ No jobs to archive (all 145 jobs within 7-day window)
[2026-01-29T22:15:12.446Z] [BOT] 💾 Saved posted_jobs.json: 145 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:13.949Z] [BOT] 📍 [ROUTING] "Research Engineer / Scientist, Societal Impacts" @ anthropic
[2026-01-29T22:15:13.949Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-29T22:15:14.492Z] [BOT] ✅ Posted message: Research Engineer / Scientist, Societal Impacts @ anthropic in #🤖・ai-jobs
[2026-01-29T22:15:14.492Z] [BOT] ✅ Industry: Research Engineer / Scientist, Societal Impacts @ anthropic
💾 Added channel posting: Research Engineer / Scientist, Societal Impacts @ anthropic → category channel (1 total channels)
[2026-01-29T22:15:14.492Z] [BOT] 💾 BEFORE MERGE: 146 jobs in memory (cached)
[2026-01-29T22:15:14.495Z] [BOT] ✅ Loaded V2 database: 145 jobs
[2026-01-29T22:15:14.496Z] [BOT] 💾 DISK STATE: 145 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=146
[2026-01-29T22:15:14.496Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:15:14.496Z] [BOT] 💾 AFTER MERGE: 146 jobs (merged disk + memory)
[2026-01-29T22:15:14.496Z] [BOT] ✅ No jobs to archive (all 146 jobs within 7-day window)
[2026-01-29T22:15:14.506Z] [BOT] 💾 Saved posted_jobs.json: 146 active jobs
[2026-01-29T22:15:14.506Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:16.007Z] [BOT] 📍 [ROUTING] "Research Economist, Economic Research" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-29T22:15:16.427Z] [BOT] ✅ Posted message: Research Economist, Economic Research @ anthropic in #🤖・ai-jobs
  ✅ Industry: Research Economist, Economic Research @ anthropic
[2026-01-29T22:15:16.427Z] [BOT] 💾 Added channel posting: Research Economist, Economic Research @ anthropic → category channel (1 total channels)
[2026-01-29T22:15:16.427Z] [BOT] 💾 BEFORE MERGE: 147 jobs in memory (cached)
[2026-01-29T22:15:16.431Z] [BOT] ✅ Loaded V2 database: 146 jobs
[2026-01-29T22:15:16.431Z] [BOT] 💾 DISK STATE: 146 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=147
[2026-01-29T22:15:16.432Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:15:16.432Z] [BOT] 💾 AFTER MERGE: 147 jobs (merged disk + memory)
[2026-01-29T22:15:16.432Z] [BOT] ✅ No jobs to archive (all 147 jobs within 7-day window)
[2026-01-29T22:15:16.443Z] [BOT] 💾 Saved posted_jobs.json: 147 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:20.946Z] [BOT] 📌 Posting 2 jobs to #💰・finance-jobs
[2026-01-29T22:15:20.946Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Houston - SLED)" @ verkada
[2026-01-29T22:15:20.946Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T22:15:21.142Z] [BOT] ✅ Posted message: Enterprise Account Executive (Houston - SLED) @ verkada in #💰・finance-jobs
  ✅ Industry: Enterprise Account Executive (Houston - SLED) @ verkada
[2026-01-29T22:15:21.142Z] [BOT] 💾 Added channel posting: Enterprise Account Executive (Houston - SLED) @ verkada → category channel (1 total channels)
[2026-01-29T22:15:21.142Z] [BOT] 💾 BEFORE MERGE: 148 jobs in memory (cached)
[2026-01-29T22:15:21.148Z] [BOT] ✅ Loaded V2 database: 147 jobs
💾 DISK STATE: 147 jobs on disk
[2026-01-29T22:15:21.148Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=148
[2026-01-29T22:15:21.148Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:15:21.148Z] [BOT] 💾 AFTER MERGE: 148 jobs (merged disk + memory)
[2026-01-29T22:15:21.148Z] [BOT] ✅ No jobs to archive (all 148 jobs within 7-day window)
[2026-01-29T22:15:21.158Z] [BOT] 💾 Saved posted_jobs.json: 148 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:22.660Z] [BOT] 📍 [ROUTING] "Expansion Account Executive, Enterprise" @ brex
   Category: FINANCE (matched: "finance")
[2026-01-29T22:15:22.660Z] [BOT] Channel: 💰・finance-jobs (1462...4023)
[2026-01-29T22:15:22.864Z] [BOT] ✅ Posted message: Expansion Account Executive, Enterprise @ brex in #💰・finance-jobs
[2026-01-29T22:15:22.864Z] [BOT] ✅ Industry: Expansion Account Executive, Enterprise @ brex
💾 Added channel posting: Expansion Account Executive, Enterprise @ brex → category channel (1 total channels)
[2026-01-29T22:15:22.865Z] [BOT] 💾 BEFORE MERGE: 149 jobs in memory (cached)
[2026-01-29T22:15:22.868Z] [BOT] ✅ Loaded V2 database: 148 jobs
[2026-01-29T22:15:22.868Z] [BOT] 💾 DISK STATE: 148 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=149
[2026-01-29T22:15:22.868Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:15:22.868Z] [BOT] 💾 AFTER MERGE: 149 jobs (merged disk + memory)
[2026-01-29T22:15:22.869Z] [BOT] ✅ No jobs to archive (all 149 jobs within 7-day window)
[2026-01-29T22:15:22.881Z] [BOT] 💾 Saved posted_jobs.json: 149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:27.384Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-29T22:15:27.385Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_55980a77..." not found, but found as SHA256 "97c3a5d12bd4fd67"
[2026-01-29T22:15:27.385Z] [BOT] ⏭️  Skipping duplicate: JID_5c327d9d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_35820723..." not found, but found as SHA256 "a33e297c64c76235"
⏭️  Skipping duplicate: JID_35820723 (posted within 7 days)
[2026-01-29T22:15:27.385Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d4c2d538..." not found, but found as SHA256 "5503ae8bdd12f36c"
⏭️  Skipping duplicate: JID_9b16b87e (posted within 7 days)
[2026-01-29T22:15:27.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6206126a..." not found, but found as SHA256 "224d2f0156a18034"
⏭️  Skipping duplicate: JID_7907abb5 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_95ccb76b..." not found, but found as SHA256 "4ba57595c8b5fdcf"
⏭️  Skipping duplicate: JID_e09f7611 (posted within 7 days)
[2026-01-29T22:15:27.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f0a6e8f9..." not found, but found as SHA256 "e836feec5171b132"
⏭️  Skipping duplicate: JID_22381731 (posted within 7 days)
[2026-01-29T22:15:27.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_f3a63235..." not found, but found as SHA256 "8f5ff5a0012d9118"
⏭️  Skipping duplicate: JID_f3a63235 (posted within 7 days)
[2026-01-29T22:15:27.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "3ee28697ea6d7443"
⏭️  Skipping duplicate: JID_167cbc72 (posted within 7 days)
[2026-01-29T22:15:27.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "814e352a948616d6"
⏭️  Skipping duplicate: JID_cfb441ff (posted within 7 days)
[2026-01-29T22:15:27.386Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "c3f7f5ebf83a7e2d"
⏭️  Skipping duplicate: JID_b54bb71f (posted within 7 days)
[2026-01-29T22:15:27.510Z] [BOT] ✅ Loaded pending queue: 2878 total (2723 pending, 45 enriched, 110 posted)
[2026-01-29T22:15:27.694Z] [BOT] ✅ Saved pending queue: 2878 total (2723 pending, 35 enriched, 120 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-29T22:15:27.778Z] [BOT] 📂 Loaded 10201 existing routing entries
[2026-01-29T22:15:27.907Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-29T22:15:27.907Z] [BOT] New entries: 10
   Total entries: 10211
   Timestamp: 2026-01-29T22:15:27.843Z
[2026-01-29T22:15:27.908Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_21fe67ed.jsonl
[2026-01-29T22:15:27.908Z] [BOT] Total attempts: 16
   Successful: 11
   Failed: 0
   Skipped: 5
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 11
[2026-01-29T22:15:27.908Z] [BOT] Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #🤖・ai-jobs: 3 posts
     3. #💰・finance-jobs: 2 posts
[2026-01-29T22:15:27.909Z] [BOT] 4. #📊・JID_fb739488: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-01-29T22:15:27.909Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 149 jobs in memory (cached)
[2026-01-29T22:15:27.912Z] [BOT] ✅ Loaded V2 database: 149 jobs
[2026-01-29T22:15:27.912Z] [BOT] 💾 DISK STATE: 149 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=149
[2026-01-29T22:15:27.913Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-01-29T22:15:27.913Z] [BOT] 💾 AFTER MERGE: 149 jobs (merged disk + memory)
[2026-01-29T22:15:27.913Z] [BOT] ✅ No jobs to archive (all 149 jobs within 7-day window)
[2026-01-29T22:15:27.923Z] [BOT] 💾 Saved posted_jobs.json: 149 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-29T22:15:27.923Z] [BOT] ✅ Database saved successfully
[2026-01-29T22:15:29.953Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*