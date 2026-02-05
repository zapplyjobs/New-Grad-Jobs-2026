# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T07:44:08.438Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T07:43:23.991Z] ========================================
[2026-02-05T07:43:23.993Z] Discord Bot Execution Log
[2026-02-05T07:43:23.993Z] Environment: GitHub Actions
[2026-02-05T07:43:23.993Z] Node Version: v20.20.0
[2026-02-05T07:43:23.993Z] ========================================
[2026-02-05T07:43:23.993Z] Environment Variables Check:
[2026-02-05T07:43:23.993Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T07:43:23.994Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T07:43:23.994Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T07:43:23.994Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T07:43:23.994Z] 
Multi-Channel Configuration:
[2026-02-05T07:43:23.994Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T07:43:23.994Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:43:23.994Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:43:23.994Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T07:43:23.994Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:43:23.994Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:43:23.994Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:43:23.994Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:43:23.995Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:43:23.995Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T07:43:23.995Z] 
Data Files Check:
[2026-02-05T07:43:23.996Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111637 bytes)
[2026-02-05T07:43:24.060Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11618090 bytes)
[2026-02-05T07:43:24.060Z] 
========================================
[2026-02-05T07:43:24.060Z] Starting Enhanced Discord Bot...
[2026-02-05T07:43:24.060Z] ========================================
[2026-02-05T07:43:24.672Z] [BOT] ✅ Loaded V2 database: 2284 jobs
[2026-02-05T07:43:25.146Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-05T07:43:25.147Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T07:43:25.147Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T07:43:25.149Z] [BOT] ✅ Loaded pending queue: 71 total (21 pending, 50 enriched, 0 posted)
[2026-02-05T07:43:25.150Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T07:43:25.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T07:43:25.151Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T07:43:25.151Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T07:43:25.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T07:43:25.152Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T07:43:25.152Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T07:43:25.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T07:43:25.153Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T07:43:25.171Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T07:43:25.171Z] [BOT] 📋 After blacklist filter: 46 jobs (0 blacklisted)
[2026-02-05T07:43:25.172Z] [BOT] 📋 After data quality filter: 46 jobs (0 invalid)
[2026-02-05T07:43:25.173Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-02-05T07:43:25.173Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-05T07:43:25.173Z] [BOT] - Software Engineer III @ Walmart: milpitas, elkins
   - (USA) Software Engineer III @ Walmart: lowell, goshen, gravette
⏸️ Limiting to 10 jobs this run, 36 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T07:43:25.176Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-02-05T07:43:25.177Z] [BOT] 📍 [ROUTING] "Junior Java Software Engineer" @ ORG_329fd128 Technologies
[2026-02-05T07:43:25.177Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T07:43:25.195Z] [BOT ERROR] (node:2574) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T07:43:25.418Z] [BOT] ✅ Posted message: Junior Java Software Engineer @ ORG_329fd128 Technologies in #🤖・ai-jobs
[2026-02-05T07:43:25.418Z] [BOT] ✅ Industry: Junior Java Software Engineer @ ORG_329fd128 Technologies
[2026-02-05T07:43:25.420Z] [BOT] 💾 Added channel posting: Junior Java Software Engineer @ ORG_329fd128 Technologies → category channel (1 total channels)
[2026-02-05T07:43:25.420Z] [BOT] 💾 BEFORE MERGE: 2285 jobs in memory (cached)
[2026-02-05T07:43:25.469Z] [BOT] ✅ Loaded V2 database: 2284 jobs
💾 DISK STATE: 2284 jobs on disk
[2026-02-05T07:43:25.470Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2285
[2026-02-05T07:43:25.476Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:25.476Z] [BOT] 💾 AFTER MERGE: 2285 jobs (merged disk + memory)
[2026-02-05T07:43:25.478Z] [BOT] ✅ No jobs to archive (all 2285 jobs within 7-day window)
[2026-02-05T07:43:25.600Z] [BOT] 💾 Saved posted_jobs.json: 2285 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:27.251Z] [BOT] ✅ Posted message: Junior Java Software Engineer @ ORG_329fd128 Technologies in #📍・JID_6daed763
[2026-02-05T07:43:27.251Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T07:43:27.252Z] [BOT] 💾 Added channel posting: Junior Java Software Engineer @ ORG_329fd128 Technologies → location channel (2 total channels)
[2026-02-05T07:43:27.252Z] [BOT] 💾 BEFORE MERGE: 2285 jobs in memory (cached)
[2026-02-05T07:43:27.302Z] [BOT] ✅ Loaded V2 database: 2285 jobs
💾 DISK STATE: 2285 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2285
[2026-02-05T07:43:27.308Z] [BOT] 🔀 Deep merged: Junior Java Software Engineer @ ORG_329fd128 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:43:27.308Z] [BOT] 💾 AFTER MERGE: 2285 jobs (merged disk + memory)
[2026-02-05T07:43:27.310Z] [BOT] ✅ No jobs to archive (all 2285 jobs within 7-day window)
[2026-02-05T07:43:27.430Z] [BOT] 💾 Saved posted_jobs.json: 2285 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:28.932Z] [BOT] 📍 [ROUTING] "Remote Software Developer (Junior)" @ ORG_8a194a36
[2026-02-05T07:43:28.932Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T07:43:29.062Z] [BOT] ✅ Posted message: Remote Software Developer (Junior) @ ORG_8a194a36 in #🤖・ai-jobs
  ✅ Industry: Remote Software Developer (Junior) @ ORG_8a194a36
[2026-02-05T07:43:29.063Z] [BOT] 💾 Added channel posting: Remote Software Developer (Junior) @ ORG_8a194a36 → category channel (1 total channels)
[2026-02-05T07:43:29.064Z] [BOT] 💾 BEFORE MERGE: 2286 jobs in memory (cached)
[2026-02-05T07:43:29.105Z] [BOT] ✅ Loaded V2 database: 2285 jobs
💾 DISK STATE: 2285 jobs on disk
[2026-02-05T07:43:29.105Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2286
[2026-02-05T07:43:29.110Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:29.111Z] [BOT] 💾 AFTER MERGE: 2286 jobs (merged disk + memory)
[2026-02-05T07:43:29.112Z] [BOT] ✅ No jobs to archive (all 2286 jobs within 7-day window)
[2026-02-05T07:43:29.226Z] [BOT] 💾 Saved posted_jobs.json: 2286 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:30.947Z] [BOT] ✅ Posted message: Remote Software Developer (Junior) @ ORG_8a194a36 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T07:43:30.948Z] [BOT] 💾 Added channel posting: Remote Software Developer (Junior) @ ORG_8a194a36 → location channel (2 total channels)
💾 BEFORE MERGE: 2286 jobs in memory (cached)
[2026-02-05T07:43:30.991Z] [BOT] ✅ Loaded V2 database: 2286 jobs
💾 DISK STATE: 2286 jobs on disk
[2026-02-05T07:43:30.991Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2286
[2026-02-05T07:43:30.996Z] [BOT] 🔀 Deep merged: Remote Software Developer (Junior) @ ORG_8a194a36 (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:43:30.996Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2286 jobs (merged disk + memory)
[2026-02-05T07:43:30.998Z] [BOT] ✅ No jobs to archive (all 2286 jobs within 7-day window)
[2026-02-05T07:43:31.122Z] [BOT] 💾 Saved posted_jobs.json: 2286 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:32.623Z] [BOT] 📍 [ROUTING] "C++ Software Engineer- Global Market Maker" @ ORG_2f17a0f8 via eFinancialCareers
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-05T07:43:32.624Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T07:43:32.765Z] [BOT] ✅ Posted message: C++ Software Engineer- Global Market Maker @ ORG_2f17a0f8 via eFinancialCareers in #🤖・ai-jobs
[2026-02-05T07:43:32.765Z] [BOT] ✅ Industry: C++ Software Engineer- Global Market Maker @ ORG_2f17a0f8 via eFinancialCareers
[2026-02-05T07:43:32.766Z] [BOT] 💾 Added channel posting: C++ Software Engineer- Global Market Maker @ ORG_2f17a0f8 via eFinancialCareers → category channel (1 total channels)
[2026-02-05T07:43:32.766Z] [BOT] 💾 BEFORE MERGE: 2287 jobs in memory (cached)
[2026-02-05T07:43:32.807Z] [BOT] ✅ Loaded V2 database: 2286 jobs
💾 DISK STATE: 2286 jobs on disk
[2026-02-05T07:43:32.807Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2287
[2026-02-05T07:43:32.815Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:32.815Z] [BOT] 💾 AFTER MERGE: 2287 jobs (merged disk + memory)
[2026-02-05T07:43:32.817Z] [BOT] ✅ No jobs to archive (all 2287 jobs within 7-day window)
[2026-02-05T07:43:32.928Z] [BOT] 💾 Saved posted_jobs.json: 2287 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:34.562Z] [BOT] ✅ Posted message: C++ Software Engineer- Global Market Maker @ ORG_2f17a0f8 via eFinancialCareers in #🗽・JID_98d4f0de
[2026-02-05T07:43:34.562Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T07:43:34.563Z] [BOT] 💾 Added channel posting: C++ Software Engineer- Global Market Maker @ ORG_2f17a0f8 via eFinancialCareers → location channel (2 total channels)
[2026-02-05T07:43:34.563Z] [BOT] 💾 BEFORE MERGE: 2287 jobs in memory (cached)
[2026-02-05T07:43:34.607Z] [BOT] ✅ Loaded V2 database: 2287 jobs
💾 DISK STATE: 2287 jobs on disk
[2026-02-05T07:43:34.607Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2287
[2026-02-05T07:43:34.611Z] [BOT] 🔀 Deep merged: C++ Software Engineer- Global Market Maker @ ORG_2f17a0f8 via eFinancialCareers (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:43:34.612Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2287 jobs (merged disk + memory)
[2026-02-05T07:43:34.613Z] [BOT] ✅ No jobs to archive (all 2287 jobs within 7-day window)
[2026-02-05T07:43:34.732Z] [BOT] 💾 Saved posted_jobs.json: 2287 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:36.234Z] [BOT] 📍 [ROUTING] "Distinguished Engineer" @ ORG_1a1cf792 One
[2026-02-05T07:43:36.235Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T07:43:36.467Z] [BOT] ✅ Posted message: Distinguished Engineer @ ORG_1a1cf792 One in #🤖・ai-jobs
[2026-02-05T07:43:36.467Z] [BOT] ✅ Industry: Distinguished Engineer @ ORG_1a1cf792 One
[2026-02-05T07:43:36.468Z] [BOT] 💾 Added channel posting: Distinguished Engineer @ ORG_1a1cf792 One → category channel (1 total channels)
[2026-02-05T07:43:36.468Z] [BOT] 💾 BEFORE MERGE: 2288 jobs in memory (cached)
[2026-02-05T07:43:36.506Z] [BOT] ✅ Loaded V2 database: 2287 jobs
💾 DISK STATE: 2287 jobs on disk
[2026-02-05T07:43:36.507Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2288
[2026-02-05T07:43:36.512Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:36.512Z] [BOT] 💾 AFTER MERGE: 2288 jobs (merged disk + memory)
[2026-02-05T07:43:36.513Z] [BOT] ✅ No jobs to archive (all 2288 jobs within 7-day window)
[2026-02-05T07:43:36.624Z] [BOT] 💾 Saved posted_jobs.json: 2288 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:38.336Z] [BOT] ✅ Posted message: Distinguished Engineer @ ORG_1a1cf792 One in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T07:43:38.336Z] [BOT] 💾 Added channel posting: Distinguished Engineer @ ORG_1a1cf792 One → location channel (2 total channels)
[2026-02-05T07:43:38.336Z] [BOT] 💾 BEFORE MERGE: 2288 jobs in memory (cached)
[2026-02-05T07:43:38.378Z] [BOT] ✅ Loaded V2 database: 2288 jobs
💾 DISK STATE: 2288 jobs on disk
[2026-02-05T07:43:38.379Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2288
[2026-02-05T07:43:38.384Z] [BOT] 🔀 Deep merged: Distinguished Engineer @ ORG_1a1cf792 One (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:43:38.384Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2288 jobs (merged disk + memory)
[2026-02-05T07:43:38.386Z] [BOT] ✅ No jobs to archive (all 2288 jobs within 7-day window)
[2026-02-05T07:43:38.507Z] [BOT] 💾 Saved posted_jobs.json: 2288 active jobs
[2026-02-05T07:43:38.507Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:43.008Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-05T07:43:43.010Z] [BOT] 📍 [ROUTING] "(USA) Software Engineer III (Full Stack)" @ ORG_3eab285c
[2026-02-05T07:43:43.010Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:43:43.705Z] [BOT] ✅ Posted message: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c in #💻・tech-jobs
  ✅ Industry: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c
[2026-02-05T07:43:43.706Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T07:43:43.706Z] [BOT] 💾 BEFORE MERGE: 2289 jobs in memory (cached)
[2026-02-05T07:43:43.744Z] [BOT] ✅ Loaded V2 database: 2288 jobs
💾 DISK STATE: 2288 jobs on disk
[2026-02-05T07:43:43.744Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2289
[2026-02-05T07:43:43.749Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:43.749Z] [BOT] 💾 AFTER MERGE: 2289 jobs (merged disk + memory)
[2026-02-05T07:43:43.751Z] [BOT] ✅ No jobs to archive (all 2289 jobs within 7-day window)
[2026-02-05T07:43:43.875Z] [BOT] 💾 Saved posted_jobs.json: 2289 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:45.602Z] [BOT] ✅ Posted message: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T07:43:45.602Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T07:43:45.602Z] [BOT] 💾 BEFORE MERGE: 2289 jobs in memory (cached)
[2026-02-05T07:43:45.648Z] [BOT] ✅ Loaded V2 database: 2289 jobs
💾 DISK STATE: 2289 jobs on disk
[2026-02-05T07:43:45.649Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2289
[2026-02-05T07:43:45.654Z] [BOT] 🔀 Deep merged: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:43:45.654Z] [BOT] 💾 AFTER MERGE: 2289 jobs (merged disk + memory)
[2026-02-05T07:43:45.656Z] [BOT] ✅ No jobs to archive (all 2289 jobs within 7-day window)
[2026-02-05T07:43:45.784Z] [BOT] 💾 Saved posted_jobs.json: 2289 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:47.285Z] [BOT] 📍 [ROUTING] "Software Engineer III" @ ORG_3eab285c
[2026-02-05T07:43:47.285Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:43:47.436Z] [BOT] ✅ Posted message: Software Engineer III @ ORG_3eab285c in #💻・tech-jobs
[2026-02-05T07:43:47.436Z] [BOT] ✅ Industry: Software Engineer III @ ORG_3eab285c
[2026-02-05T07:43:47.437Z] [BOT] 💾 Added channel posting: Software Engineer III @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T07:43:47.437Z] [BOT] 💾 BEFORE MERGE: 2290 jobs in memory (cached)
[2026-02-05T07:43:47.476Z] [BOT] ✅ Loaded V2 database: 2289 jobs
💾 DISK STATE: 2289 jobs on disk
[2026-02-05T07:43:47.476Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2290
[2026-02-05T07:43:47.480Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:47.480Z] [BOT] 💾 AFTER MERGE: 2290 jobs (merged disk + memory)
[2026-02-05T07:43:47.482Z] [BOT] ✅ No jobs to archive (all 2290 jobs within 7-day window)
[2026-02-05T07:43:47.607Z] [BOT] 💾 Saved posted_jobs.json: 2290 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:49.295Z] [BOT] ✅ Posted message: Software Engineer III @ ORG_3eab285c in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T07:43:49.296Z] [BOT] 💾 Added channel posting: Software Engineer III @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T07:43:49.296Z] [BOT] 💾 BEFORE MERGE: 2290 jobs in memory (cached)
[2026-02-05T07:43:49.334Z] [BOT] ✅ Loaded V2 database: 2290 jobs
💾 DISK STATE: 2290 jobs on disk
[2026-02-05T07:43:49.335Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2290
[2026-02-05T07:43:49.340Z] [BOT] 🔀 Deep merged: Software Engineer III @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:43:49.340Z] [BOT] 💾 AFTER MERGE: 2290 jobs (merged disk + memory)
[2026-02-05T07:43:49.342Z] [BOT] ✅ No jobs to archive (all 2290 jobs within 7-day window)
[2026-02-05T07:43:49.465Z] [BOT] 💾 Saved posted_jobs.json: 2290 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:50.965Z] [BOT] 📍 [ROUTING] "Software Engineer with Boomi or Workato EXPERIENCE" @ ORG_a90d38dc
[2026-02-05T07:43:50.965Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:43:51.108Z] [BOT] ✅ Posted message: Software Engineer with Boomi or Workato EXPERIENCE @ ORG_a90d38dc in #💻・tech-jobs
  ✅ Industry: Software Engineer with Boomi or Workato EXPERIENCE @ ORG_a90d38dc
[2026-02-05T07:43:51.109Z] [BOT] 💾 Added channel posting: Software Engineer with Boomi or Workato EXPERIENCE @ ORG_a90d38dc → category channel (1 total channels)
[2026-02-05T07:43:51.109Z] [BOT] 💾 BEFORE MERGE: 2291 jobs in memory (cached)
[2026-02-05T07:43:51.149Z] [BOT] ✅ Loaded V2 database: 2290 jobs
💾 DISK STATE: 2290 jobs on disk
[2026-02-05T07:43:51.149Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2291
[2026-02-05T07:43:51.154Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:51.154Z] [BOT] 💾 AFTER MERGE: 2291 jobs (merged disk + memory)
[2026-02-05T07:43:51.156Z] [BOT] ✅ No jobs to archive (all 2291 jobs within 7-day window)
[2026-02-05T07:43:51.284Z] [BOT] 💾 Saved posted_jobs.json: 2291 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:52.784Z] [BOT] 📍 [ROUTING] "2026 Associate Software EngineerSoftware Engineer" @ ORG_f3f2248d Grumman
[2026-02-05T07:43:52.784Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:43:52.936Z] [BOT] ✅ Posted message: 2026 Associate Software EngineerSoftware Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-02-05T07:43:52.937Z] [BOT] ✅ Industry: 2026 Associate Software EngineerSoftware Engineer @ ORG_f3f2248d Grumman
[2026-02-05T07:43:52.938Z] [BOT] 💾 Added channel posting: 2026 Associate Software EngineerSoftware Engineer @ ORG_f3f2248d Grumman → category channel (1 total channels)
💾 BEFORE MERGE: 2292 jobs in memory (cached)
[2026-02-05T07:43:52.976Z] [BOT] ✅ Loaded V2 database: 2291 jobs
💾 DISK STATE: 2291 jobs on disk
[2026-02-05T07:43:52.977Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2292
[2026-02-05T07:43:52.982Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2292 jobs (merged disk + memory)
[2026-02-05T07:43:52.983Z] [BOT] ✅ No jobs to archive (all 2292 jobs within 7-day window)
[2026-02-05T07:43:53.107Z] [BOT] 💾 Saved posted_jobs.json: 2292 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:54.607Z] [BOT] 📍 [ROUTING] "AM Pierce and Associates is hiring: Junior Software Engineer in Lexington Park" @ ORG_c8f48a68 Pierce and Associates
   Category: TECH (matched: "software")
[2026-02-05T07:43:54.607Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:43:54.943Z] [BOT] ✅ Posted message: AM Pierce and Associates is hiring: Junior Software Engineer in Lexington Park @ ORG_c8f48a68 Pierce and Associates in #💻・tech-jobs
  ✅ Industry: AM Pierce and Associates is hiring: Junior Software Engineer in Lexington Park @ ORG_c8f48a68 Pierce and Associates
[2026-02-05T07:43:54.944Z] [BOT] 💾 Added channel posting: AM Pierce and Associates is hiring: Junior Software Engineer in Lexington Park @ ORG_c8f48a68 Pierce and Associates → category channel (1 total channels)
[2026-02-05T07:43:54.945Z] [BOT] 💾 BEFORE MERGE: 2293 jobs in memory (cached)
[2026-02-05T07:43:54.983Z] [BOT] ✅ Loaded V2 database: 2292 jobs
💾 DISK STATE: 2292 jobs on disk
[2026-02-05T07:43:54.984Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2293
[2026-02-05T07:43:54.989Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:54.989Z] [BOT] 💾 AFTER MERGE: 2293 jobs (merged disk + memory)
[2026-02-05T07:43:54.990Z] [BOT] ✅ No jobs to archive (all 2293 jobs within 7-day window)
[2026-02-05T07:43:55.119Z] [BOT] 💾 Saved posted_jobs.json: 2293 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:56.806Z] [BOT] ✅ Posted message: AM Pierce and Associates is hiring: Junior Software Engineer in Lexington Park @ ORG_c8f48a68 Pierce and Associates in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-05T07:43:56.806Z] [BOT] 💾 Added channel posting: AM Pierce and Associates is hiring: Junior Software Engineer in Lexington Park @ ORG_c8f48a68 Pierce and Associates → location channel (2 total channels)
[2026-02-05T07:43:56.806Z] [BOT] 💾 BEFORE MERGE: 2293 jobs in memory (cached)
[2026-02-05T07:43:56.858Z] [BOT] ✅ Loaded V2 database: 2293 jobs
💾 DISK STATE: 2293 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2293
[2026-02-05T07:43:56.861Z] [BOT] 🔀 Deep merged: AM Pierce and Associates is hiring: Junior Software Engineer in Lexington Park @ ORG_c8f48a68 Pierce and Associates (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:43:56.861Z] [BOT] 💾 AFTER MERGE: 2293 jobs (merged disk + memory)
[2026-02-05T07:43:56.863Z] [BOT] ✅ No jobs to archive (all 2293 jobs within 7-day window)
[2026-02-05T07:43:56.979Z] [BOT] 💾 Saved posted_jobs.json: 2293 active jobs
[2026-02-05T07:43:56.979Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T07:43:58.483Z] [BOT] 📍 [ROUTING] "Slack Enginner" @ ORG_85ef3c19
   Category: TECH (default)
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:43:58.633Z] [BOT] ✅ Posted message: Slack Enginner @ ORG_85ef3c19 in #💻・tech-jobs
  ✅ Industry: Slack Enginner @ ORG_85ef3c19
[2026-02-05T07:43:58.634Z] [BOT] 💾 Added channel posting: Slack Enginner @ ORG_85ef3c19 → category channel (1 total channels)
[2026-02-05T07:43:58.635Z] [BOT] 💾 BEFORE MERGE: 2294 jobs in memory (cached)
[2026-02-05T07:43:58.680Z] [BOT] ✅ Loaded V2 database: 2293 jobs
💾 DISK STATE: 2293 jobs on disk
[2026-02-05T07:43:58.681Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2294
[2026-02-05T07:43:58.685Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:43:58.686Z] [BOT] 💾 AFTER MERGE: 2294 jobs (merged disk + memory)
[2026-02-05T07:43:58.687Z] [BOT] ✅ No jobs to archive (all 2294 jobs within 7-day window)
[2026-02-05T07:43:58.810Z] [BOT] 💾 Saved posted_jobs.json: 2294 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:44:00.482Z] [BOT] ✅ Posted message: Slack Enginner @ ORG_85ef3c19 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T07:44:00.482Z] [BOT] 💾 Added channel posting: Slack Enginner @ ORG_85ef3c19 → location channel (2 total channels)
[2026-02-05T07:44:00.483Z] [BOT] 💾 BEFORE MERGE: 2294 jobs in memory (cached)
[2026-02-05T07:44:00.526Z] [BOT] ✅ Loaded V2 database: 2294 jobs
💾 DISK STATE: 2294 jobs on disk
[2026-02-05T07:44:00.526Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2294
[2026-02-05T07:44:00.530Z] [BOT] 🔀 Deep merged: Slack Enginner @ ORG_85ef3c19 (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:44:00.530Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2294 jobs (merged disk + memory)
[2026-02-05T07:44:00.532Z] [BOT] ✅ No jobs to archive (all 2294 jobs within 7-day window)
[2026-02-05T07:44:00.646Z] [BOT] 💾 Saved posted_jobs.json: 2294 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:44:05.147Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T07:44:05.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_dbd40f78..." not found, but found as SHA256 "806da8ac84527644"
[2026-02-05T07:44:05.149Z] [BOT] ⏭️  Skipping duplicate: JID_f9df55e4 (posted within 7 days)
[2026-02-05T07:44:05.149Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "454cbc1800f61c62"
⏭️  Skipping duplicate: JID_ad9b7864 (posted within 7 days)
[2026-02-05T07:44:05.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_48a05a6b..." not found, but found as SHA256 "7c97db683347f1bc"
[2026-02-05T07:44:05.150Z] [BOT] ⏭️  Skipping duplicate: JID_4badbe4b (posted within 7 days)
[2026-02-05T07:44:05.150Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "d5ea09b204899349"
[2026-02-05T07:44:05.150Z] [BOT] ⏭️  Skipping duplicate: JID_acd9ce02 (posted within 7 days)
[2026-02-05T07:44:05.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4e80681b..." not found, but found as SHA256 "34f4a978186081b6"
[2026-02-05T07:44:05.151Z] [BOT] ⏭️  Skipping duplicate: JID_bdcde705 (posted within 7 days)
[2026-02-05T07:44:05.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c4e44fdb..." not found, but found as SHA256 "a69c4c425ee40b40"
⏭️  Skipping duplicate: JID_e0b4b98a (posted within 7 days)
[2026-02-05T07:44:05.151Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "0bd7c236fa0c546b"
[2026-02-05T07:44:05.151Z] [BOT] ⏭️  Skipping duplicate: JID_73b40289 (posted within 7 days)
[2026-02-05T07:44:05.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_50a38d75..." not found, but found as SHA256 "77e2d805c225dfbb"
[2026-02-05T07:44:05.152Z] [BOT] ⏭️  Skipping duplicate: JID_50a38d75 (posted within 7 days)
[2026-02-05T07:44:05.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_212e7935..." not found, but found as SHA256 "0c01a2e40f8588dc"
[2026-02-05T07:44:05.152Z] [BOT] ⏭️  Skipping duplicate: JID_e4d8c6dc (posted within 7 days)
[2026-02-05T07:44:05.152Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9f514d88..." not found, but found as SHA256 "b9b85c6471d4bd49"
[2026-02-05T07:44:05.153Z] [BOT] ⏭️  Skipping duplicate: JID_a5f58190 (posted within 7 days)
[2026-02-05T07:44:05.155Z] [BOT] ✅ Loaded pending queue: 71 total (21 pending, 50 enriched, 0 posted)
[2026-02-05T07:44:05.158Z] [BOT] ✅ Saved pending queue: 71 total (21 pending, 40 enriched, 10 posted)
[2026-02-05T07:44:05.159Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T07:44:05.269Z] [BOT] 📂 Loaded 12375 existing routing entries
[2026-02-05T07:44:05.394Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-05T07:44:05.394Z] [BOT] New entries: 10
[2026-02-05T07:44:05.394Z] [BOT] Total entries: 12385
   Timestamp: 2026-02-05T07:44:05.342Z
[2026-02-05T07:44:05.395Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T07:44:05.395Z] [BOT] Total attempts: 22
   Successful: 18
   Failed: 0
   Skipped: 4
[2026-02-05T07:44:05.396Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🌉・JID_739bbc0b: 4 posts
     4. #📍・JID_6daed763: 2 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-02-05T07:44:05.396Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2294 jobs in memory (cached)
[2026-02-05T07:44:05.455Z] [BOT] ✅ Loaded V2 database: 2294 jobs
💾 DISK STATE: 2294 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2294
[2026-02-05T07:44:05.459Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:44:05.459Z] [BOT] 💾 AFTER MERGE: 2294 jobs (merged disk + memory)
[2026-02-05T07:44:05.461Z] [BOT] ✅ No jobs to archive (all 2294 jobs within 7-day window)
[2026-02-05T07:44:05.578Z] [BOT] 💾 Saved posted_jobs.json: 2294 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:44:05.578Z] [BOT] ✅ Database saved successfully
[2026-02-05T07:44:07.597Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2574) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*