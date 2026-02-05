# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T08:08:22.248Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T08:07:34.643Z] ========================================
[2026-02-05T08:07:34.645Z] Discord Bot Execution Log
[2026-02-05T08:07:34.645Z] Environment: GitHub Actions
[2026-02-05T08:07:34.645Z] Node Version: v20.20.0
[2026-02-05T08:07:34.645Z] ========================================
[2026-02-05T08:07:34.646Z] Environment Variables Check:
[2026-02-05T08:07:34.646Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T08:07:34.646Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T08:07:34.646Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T08:07:34.646Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T08:07:34.646Z] 
Multi-Channel Configuration:
[2026-02-05T08:07:34.646Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T08:07:34.646Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:07:34.646Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:07:34.646Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T08:07:34.646Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:07:34.646Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:07:34.647Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:07:34.647Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:07:34.647Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:07:34.647Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T08:07:34.647Z] 
Data Files Check:
[2026-02-05T08:07:34.648Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108182 bytes)
[2026-02-05T08:07:34.707Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11681607 bytes)
[2026-02-05T08:07:34.707Z] 
========================================
[2026-02-05T08:07:34.707Z] Starting Enhanced Discord Bot...
[2026-02-05T08:07:34.707Z] ========================================
[2026-02-05T08:07:35.279Z] [BOT] ✅ Loaded V2 database: 2294 jobs
[2026-02-05T08:07:35.688Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-05T08:07:35.688Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T08:07:35.688Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T08:07:35.690Z] [BOT] ✅ Loaded pending queue: 61 total (11 pending, 50 enriched, 0 posted)
[2026-02-05T08:07:35.691Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T08:07:35.692Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T08:07:35.692Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T08:07:35.692Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T08:07:35.693Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T08:07:35.693Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T08:07:35.693Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T08:07:35.694Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T08:07:35.694Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T08:07:35.711Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T08:07:35.711Z] [BOT] 📋 After blacklist filter: 46 jobs (0 blacklisted)
[2026-02-05T08:07:35.711Z] [BOT] 📋 After data quality filter: 46 jobs (0 invalid)
[2026-02-05T08:07:35.712Z] [BOT] 📋 After multi-location grouping: 44 unique jobs to post
[2026-02-05T08:07:35.712Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - (USA) Software Engineer III @ Walmart: lowell, goshen, gravette
[2026-02-05T08:07:35.712Z] [BOT] ⏸️ Limiting to 10 jobs this run, 36 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T08:07:35.714Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-05T08:07:35.715Z] [BOT] 📍 [ROUTING] "Jr. Software Engineer" @ ORG_37940373 Research Corporation
[2026-02-05T08:07:35.715Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:07:35.733Z] [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T08:07:35.981Z] [BOT] ✅ Posted message: Jr. Software Engineer @ ORG_37940373 Research Corporation in #💻・tech-jobs
[2026-02-05T08:07:35.981Z] [BOT] ✅ Industry: Jr. Software Engineer @ ORG_37940373 Research Corporation
[2026-02-05T08:07:35.983Z] [BOT] 💾 Added channel posting: Jr. Software Engineer @ ORG_37940373 Research Corporation → category channel (1 total channels)
[2026-02-05T08:07:35.983Z] [BOT] 💾 BEFORE MERGE: 2295 jobs in memory (cached)
[2026-02-05T08:07:36.031Z] [BOT] ✅ Loaded V2 database: 2294 jobs
💾 DISK STATE: 2294 jobs on disk
[2026-02-05T08:07:36.032Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2295
[2026-02-05T08:07:36.037Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:07:36.037Z] [BOT] 💾 AFTER MERGE: 2295 jobs (merged disk + memory)
[2026-02-05T08:07:36.039Z] [BOT] ✅ No jobs to archive (all 2295 jobs within 7-day window)
[2026-02-05T08:07:36.171Z] [BOT] 💾 Saved posted_jobs.json: 2295 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:37.903Z] [BOT] ✅ Posted message: Jr. Software Engineer @ ORG_37940373 Research Corporation in #📍・JID_6daed763
[2026-02-05T08:07:37.903Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:07:37.903Z] [BOT] 💾 Added channel posting: Jr. Software Engineer @ ORG_37940373 Research Corporation → location channel (2 total channels)
[2026-02-05T08:07:37.903Z] [BOT] 💾 BEFORE MERGE: 2295 jobs in memory (cached)
[2026-02-05T08:07:37.953Z] [BOT] ✅ Loaded V2 database: 2295 jobs
💾 DISK STATE: 2295 jobs on disk
[2026-02-05T08:07:37.953Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2295
[2026-02-05T08:07:37.957Z] [BOT] 🔀 Deep merged: Jr. Software Engineer @ ORG_37940373 Research Corporation (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:07:37.958Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2295 jobs (merged disk + memory)
[2026-02-05T08:07:37.959Z] [BOT] ✅ No jobs to archive (all 2295 jobs within 7-day window)
[2026-02-05T08:07:38.102Z] [BOT] 💾 Saved posted_jobs.json: 2295 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:39.604Z] [BOT] 📍 [ROUTING] "Software Engineer 2 - CoreAI" @ ORG_c7bac469
   Category: TECH (matched: "software")
[2026-02-05T08:07:39.604Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:07:39.841Z] [BOT] ✅ Posted message: Software Engineer 2 - CoreAI @ ORG_c7bac469 in #💻・tech-jobs
  ✅ Industry: Software Engineer 2 - CoreAI @ ORG_c7bac469
[2026-02-05T08:07:39.842Z] [BOT] 💾 Added channel posting: Software Engineer 2 - CoreAI @ ORG_c7bac469 → category channel (1 total channels)
[2026-02-05T08:07:39.842Z] [BOT] 💾 BEFORE MERGE: 2296 jobs in memory (cached)
[2026-02-05T08:07:39.883Z] [BOT] ✅ Loaded V2 database: 2295 jobs
💾 DISK STATE: 2295 jobs on disk
[2026-02-05T08:07:39.884Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2296
[2026-02-05T08:07:39.889Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:07:39.889Z] [BOT] 💾 AFTER MERGE: 2296 jobs (merged disk + memory)
[2026-02-05T08:07:39.890Z] [BOT] ✅ No jobs to archive (all 2296 jobs within 7-day window)
[2026-02-05T08:07:40.005Z] [BOT] 💾 Saved posted_jobs.json: 2296 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:41.963Z] [BOT] ✅ Posted message: Software Engineer 2 - CoreAI @ ORG_c7bac469 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-05T08:07:41.964Z] [BOT] 💾 Added channel posting: Software Engineer 2 - CoreAI @ ORG_c7bac469 → location channel (2 total channels)
[2026-02-05T08:07:41.964Z] [BOT] 💾 BEFORE MERGE: 2296 jobs in memory (cached)
[2026-02-05T08:07:42.008Z] [BOT] ✅ Loaded V2 database: 2296 jobs
💾 DISK STATE: 2296 jobs on disk
[2026-02-05T08:07:42.009Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2296
[2026-02-05T08:07:42.013Z] [BOT] 🔀 Deep merged: Software Engineer 2 - CoreAI @ ORG_c7bac469 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:07:42.013Z] [BOT] 💾 AFTER MERGE: 2296 jobs (merged disk + memory)
[2026-02-05T08:07:42.015Z] [BOT] ✅ No jobs to archive (all 2296 jobs within 7-day window)
[2026-02-05T08:07:42.137Z] [BOT] 💾 Saved posted_jobs.json: 2296 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:43.638Z] [BOT] 📍 [ROUTING] "Associate, Software Engineer; Greenville, TX" @ ORG_56d3e805 Geospatial Solutions
   Category: TECH (matched: "software")
[2026-02-05T08:07:43.638Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:07:43.761Z] [BOT] ✅ Posted message: Associate, Software Engineer; Greenville, TX @ ORG_56d3e805 Geospatial Solutions in #💻・tech-jobs
[2026-02-05T08:07:43.761Z] [BOT] ✅ Industry: Associate, Software Engineer; Greenville, TX @ ORG_56d3e805 Geospatial Solutions
[2026-02-05T08:07:43.762Z] [BOT] 💾 Added channel posting: Associate, Software Engineer; Greenville, TX @ ORG_56d3e805 Geospatial Solutions → category channel (1 total channels)
[2026-02-05T08:07:43.762Z] [BOT] 💾 BEFORE MERGE: 2297 jobs in memory (cached)
[2026-02-05T08:07:43.809Z] [BOT] ✅ Loaded V2 database: 2296 jobs
💾 DISK STATE: 2296 jobs on disk
[2026-02-05T08:07:43.810Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2297
[2026-02-05T08:07:43.815Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:07:43.815Z] [BOT] 💾 AFTER MERGE: 2297 jobs (merged disk + memory)
[2026-02-05T08:07:43.817Z] [BOT] ✅ No jobs to archive (all 2297 jobs within 7-day window)
[2026-02-05T08:07:43.928Z] [BOT] 💾 Saved posted_jobs.json: 2297 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:45.549Z] [BOT] ✅ Posted message: Associate, Software Engineer; Greenville, TX @ ORG_56d3e805 Geospatial Solutions in #📍・JID_6daed763
[2026-02-05T08:07:45.549Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:07:45.550Z] [BOT] 💾 Added channel posting: Associate, Software Engineer; Greenville, TX @ ORG_56d3e805 Geospatial Solutions → location channel (2 total channels)
[2026-02-05T08:07:45.550Z] [BOT] 💾 BEFORE MERGE: 2297 jobs in memory (cached)
[2026-02-05T08:07:45.592Z] [BOT] ✅ Loaded V2 database: 2297 jobs
💾 DISK STATE: 2297 jobs on disk
[2026-02-05T08:07:45.593Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2297
[2026-02-05T08:07:45.597Z] [BOT] 🔀 Deep merged: Associate, Software Engineer; Greenville, TX @ ORG_56d3e805 Geospatial Solutions (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:07:45.597Z] [BOT] 💾 AFTER MERGE: 2297 jobs (merged disk + memory)
[2026-02-05T08:07:45.598Z] [BOT] ✅ No jobs to archive (all 2297 jobs within 7-day window)
[2026-02-05T08:07:45.720Z] [BOT] 💾 Saved posted_jobs.json: 2297 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:47.222Z] [BOT] 📍 [ROUTING] "Junior iOS Software Engineer" @ ORG_a400aa05
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:07:47.348Z] [BOT] ✅ Posted message: Junior iOS Software Engineer @ ORG_a400aa05 in #💻・tech-jobs
  ✅ Industry: Junior iOS Software Engineer @ ORG_a400aa05
[2026-02-05T08:07:47.350Z] [BOT] 💾 Added channel posting: Junior iOS Software Engineer @ ORG_a400aa05 → category channel (1 total channels)
[2026-02-05T08:07:47.350Z] [BOT] 💾 BEFORE MERGE: 2298 jobs in memory (cached)
[2026-02-05T08:07:47.388Z] [BOT] ✅ Loaded V2 database: 2297 jobs
💾 DISK STATE: 2297 jobs on disk
[2026-02-05T08:07:47.389Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2298
[2026-02-05T08:07:47.394Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:07:47.394Z] [BOT] 💾 AFTER MERGE: 2298 jobs (merged disk + memory)
[2026-02-05T08:07:47.395Z] [BOT] ✅ No jobs to archive (all 2298 jobs within 7-day window)
[2026-02-05T08:07:47.505Z] [BOT] 💾 Saved posted_jobs.json: 2298 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:49.240Z] [BOT] ✅ Posted message: Junior iOS Software Engineer @ ORG_a400aa05 in #🗽・JID_98d4f0de
[2026-02-05T08:07:49.240Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T08:07:49.240Z] [BOT] 💾 Added channel posting: Junior iOS Software Engineer @ ORG_a400aa05 → location channel (2 total channels)
[2026-02-05T08:07:49.240Z] [BOT] 💾 BEFORE MERGE: 2298 jobs in memory (cached)
[2026-02-05T08:07:49.283Z] [BOT] ✅ Loaded V2 database: 2298 jobs
💾 DISK STATE: 2298 jobs on disk
[2026-02-05T08:07:49.284Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2298
[2026-02-05T08:07:49.289Z] [BOT] 🔀 Deep merged: Junior iOS Software Engineer @ ORG_a400aa05 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:07:49.289Z] [BOT] 💾 AFTER MERGE: 2298 jobs (merged disk + memory)
[2026-02-05T08:07:49.290Z] [BOT] ✅ No jobs to archive (all 2298 jobs within 7-day window)
[2026-02-05T08:07:49.411Z] [BOT] 💾 Saved posted_jobs.json: 2298 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:50.912Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_20eac5aa Dynamics Laboratory
[2026-02-05T08:07:50.912Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:07:51.301Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_20eac5aa Dynamics Laboratory in #💻・tech-jobs
[2026-02-05T08:07:51.301Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_20eac5aa Dynamics Laboratory
[2026-02-05T08:07:51.302Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_20eac5aa Dynamics Laboratory → category channel (1 total channels)
[2026-02-05T08:07:51.302Z] [BOT] 💾 BEFORE MERGE: 2299 jobs in memory (cached)
[2026-02-05T08:07:51.340Z] [BOT] ✅ Loaded V2 database: 2298 jobs
💾 DISK STATE: 2298 jobs on disk
[2026-02-05T08:07:51.340Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2299
[2026-02-05T08:07:51.345Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:07:51.345Z] [BOT] 💾 AFTER MERGE: 2299 jobs (merged disk + memory)
[2026-02-05T08:07:51.347Z] [BOT] ✅ No jobs to archive (all 2299 jobs within 7-day window)
[2026-02-05T08:07:51.456Z] [BOT] 💾 Saved posted_jobs.json: 2299 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:53.354Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_20eac5aa Dynamics Laboratory in #📍・JID_6daed763
[2026-02-05T08:07:53.354Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:07:53.354Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_20eac5aa Dynamics Laboratory → location channel (2 total channels)
[2026-02-05T08:07:53.355Z] [BOT] 💾 BEFORE MERGE: 2299 jobs in memory (cached)
[2026-02-05T08:07:53.396Z] [BOT] ✅ Loaded V2 database: 2299 jobs
💾 DISK STATE: 2299 jobs on disk
[2026-02-05T08:07:53.397Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2299
[2026-02-05T08:07:53.404Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ ORG_20eac5aa Dynamics Laboratory (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:07:53.404Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2299 jobs (merged disk + memory)
[2026-02-05T08:07:53.405Z] [BOT] ✅ No jobs to archive (all 2299 jobs within 7-day window)
[2026-02-05T08:07:53.528Z] [BOT] 💾 Saved posted_jobs.json: 2299 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:55.030Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Top-Secret with SCI eligibility" @ ORG_d6d2009d
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:07:55.329Z] [BOT] ✅ Posted message: Full Stack Software Engineer - Top-Secret with SCI eligibility @ ORG_d6d2009d in #💻・tech-jobs
  ✅ Industry: Full Stack Software Engineer - Top-Secret with SCI eligibility @ ORG_d6d2009d
[2026-02-05T08:07:55.330Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer - Top-Secret with SCI eligibility @ ORG_d6d2009d → category channel (1 total channels)
[2026-02-05T08:07:55.331Z] [BOT] 💾 BEFORE MERGE: 2300 jobs in memory (cached)
[2026-02-05T08:07:55.369Z] [BOT] ✅ Loaded V2 database: 2299 jobs
💾 DISK STATE: 2299 jobs on disk
[2026-02-05T08:07:55.369Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2300
[2026-02-05T08:07:55.373Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:07:55.373Z] [BOT] 💾 AFTER MERGE: 2300 jobs (merged disk + memory)
[2026-02-05T08:07:55.375Z] [BOT] ✅ No jobs to archive (all 2300 jobs within 7-day window)
[2026-02-05T08:07:55.484Z] [BOT] 💾 Saved posted_jobs.json: 2300 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:07:57.215Z] [BOT] ✅ Posted message: Full Stack Software Engineer - Top-Secret with SCI eligibility @ ORG_d6d2009d in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T08:07:57.215Z] [BOT] 💾 Added channel posting: Full Stack Software Engineer - Top-Secret with SCI eligibility @ ORG_d6d2009d → location channel (2 total channels)
[2026-02-05T08:07:57.215Z] [BOT] 💾 BEFORE MERGE: 2300 jobs in memory (cached)
[2026-02-05T08:07:57.259Z] [BOT] ✅ Loaded V2 database: 2300 jobs
💾 DISK STATE: 2300 jobs on disk
[2026-02-05T08:07:57.259Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2300
[2026-02-05T08:07:57.264Z] [BOT] 🔀 Deep merged: Full Stack Software Engineer - Top-Secret with SCI eligibility @ ORG_d6d2009d (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:07:57.264Z] [BOT] 💾 AFTER MERGE: 2300 jobs (merged disk + memory)
[2026-02-05T08:07:57.265Z] [BOT] ✅ No jobs to archive (all 2300 jobs within 7-day window)
[2026-02-05T08:07:57.389Z] [BOT] 💾 Saved posted_jobs.json: 2300 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:01.892Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-05T08:08:01.893Z] [BOT] 📍 [ROUTING] "(USA) Software Engineer III" @ ORG_3eab285c
[2026-02-05T08:08:01.893Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T08:08:02.047Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ ORG_3eab285c in #🤖・ai-jobs
  ✅ Industry: (USA) Software Engineer III @ ORG_3eab285c
[2026-02-05T08:08:02.048Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T08:08:02.048Z] [BOT] 💾 BEFORE MERGE: 2301 jobs in memory (cached)
[2026-02-05T08:08:02.086Z] [BOT] ✅ Loaded V2 database: 2300 jobs
💾 DISK STATE: 2300 jobs on disk
[2026-02-05T08:08:02.087Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2301
[2026-02-05T08:08:02.092Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:08:02.092Z] [BOT] 💾 AFTER MERGE: 2301 jobs (merged disk + memory)
[2026-02-05T08:08:02.093Z] [BOT] ✅ No jobs to archive (all 2301 jobs within 7-day window)
[2026-02-05T08:08:02.210Z] [BOT] 💾 Saved posted_jobs.json: 2301 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:03.712Z] [BOT] 📍 [ROUTING] "Software Engineer III" @ ORG_3eab285c
   Category: AI (matched: "AI/ML")
[2026-02-05T08:08:03.712Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T08:08:03.909Z] [BOT] ✅ Posted message: Software Engineer III @ ORG_3eab285c in #🤖・ai-jobs
  ✅ Industry: Software Engineer III @ ORG_3eab285c
[2026-02-05T08:08:03.911Z] [BOT] 💾 Added channel posting: Software Engineer III @ ORG_3eab285c → category channel (1 total channels)
💾 BEFORE MERGE: 2302 jobs in memory (cached)
[2026-02-05T08:08:03.950Z] [BOT] ✅ Loaded V2 database: 2301 jobs
💾 DISK STATE: 2301 jobs on disk
[2026-02-05T08:08:03.951Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2302
[2026-02-05T08:08:03.957Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:08:03.957Z] [BOT] 💾 AFTER MERGE: 2302 jobs (merged disk + memory)
[2026-02-05T08:08:03.959Z] [BOT] ✅ No jobs to archive (all 2302 jobs within 7-day window)
[2026-02-05T08:08:04.089Z] [BOT] 💾 Saved posted_jobs.json: 2302 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:05.591Z] [BOT] 📍 [ROUTING] "Junior Software Developer" @ ORG_1954b120
[2026-02-05T08:08:05.591Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T08:08:05.741Z] [BOT] ✅ Posted message: Junior Software Developer @ ORG_1954b120 in #🤖・ai-jobs
[2026-02-05T08:08:05.742Z] [BOT] ✅ Industry: Junior Software Developer @ ORG_1954b120
[2026-02-05T08:08:05.743Z] [BOT] 💾 Added channel posting: Junior Software Developer @ ORG_1954b120 → category channel (1 total channels)
[2026-02-05T08:08:05.743Z] [BOT] 💾 BEFORE MERGE: 2303 jobs in memory (cached)
[2026-02-05T08:08:05.781Z] [BOT] ✅ Loaded V2 database: 2302 jobs
💾 DISK STATE: 2302 jobs on disk
[2026-02-05T08:08:05.782Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2303
[2026-02-05T08:08:05.786Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2303 jobs (merged disk + memory)
[2026-02-05T08:08:05.787Z] [BOT] ✅ No jobs to archive (all 2303 jobs within 7-day window)
[2026-02-05T08:08:05.902Z] [BOT] 💾 Saved posted_jobs.json: 2303 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:07.645Z] [BOT] ✅ Posted message: Junior Software Developer @ ORG_1954b120 in #📍・JID_6daed763
[2026-02-05T08:08:07.646Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:08:07.646Z] [BOT] 💾 Added channel posting: Junior Software Developer @ ORG_1954b120 → location channel (2 total channels)
[2026-02-05T08:08:07.646Z] [BOT] 💾 BEFORE MERGE: 2303 jobs in memory (cached)
[2026-02-05T08:08:07.689Z] [BOT] ✅ Loaded V2 database: 2303 jobs
💾 DISK STATE: 2303 jobs on disk
[2026-02-05T08:08:07.690Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2303
[2026-02-05T08:08:07.694Z] [BOT] 🔀 Deep merged: Junior Software Developer @ ORG_1954b120 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:08:07.694Z] [BOT] 💾 AFTER MERGE: 2303 jobs (merged disk + memory)
[2026-02-05T08:08:07.696Z] [BOT] ✅ No jobs to archive (all 2303 jobs within 7-day window)
[2026-02-05T08:08:07.815Z] [BOT] 💾 Saved posted_jobs.json: 2303 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:12.317Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-05T08:08:12.318Z] [BOT] 📍 [ROUTING] "Business Intelligence Software Engineer" @ ORG_ad74b60f Careers
[2026-02-05T08:08:12.318Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T08:08:12.457Z] [BOT] ✅ Posted message: Business Intelligence Software Engineer @ ORG_ad74b60f Careers in #📊・JID_fb739488
[2026-02-05T08:08:12.457Z] [BOT] ✅ Industry: Business Intelligence Software Engineer @ ORG_ad74b60f Careers
[2026-02-05T08:08:12.458Z] [BOT] 💾 Added channel posting: Business Intelligence Software Engineer @ ORG_ad74b60f Careers → category channel (1 total channels)
[2026-02-05T08:08:12.458Z] [BOT] 💾 BEFORE MERGE: 2304 jobs in memory (cached)
[2026-02-05T08:08:12.509Z] [BOT] ✅ Loaded V2 database: 2303 jobs
💾 DISK STATE: 2303 jobs on disk
[2026-02-05T08:08:12.510Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2304
[2026-02-05T08:08:12.515Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:08:12.515Z] [BOT] 💾 AFTER MERGE: 2304 jobs (merged disk + memory)
[2026-02-05T08:08:12.516Z] [BOT] ✅ No jobs to archive (all 2304 jobs within 7-day window)
[2026-02-05T08:08:12.645Z] [BOT] 💾 Saved posted_jobs.json: 2304 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:14.413Z] [BOT] ✅ Posted message: Business Intelligence Software Engineer @ ORG_ad74b60f Careers in #📍・JID_6daed763
[2026-02-05T08:08:14.414Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:08:14.414Z] [BOT] 💾 Added channel posting: Business Intelligence Software Engineer @ ORG_ad74b60f Careers → location channel (2 total channels)
[2026-02-05T08:08:14.414Z] [BOT] 💾 BEFORE MERGE: 2304 jobs in memory (cached)
[2026-02-05T08:08:14.472Z] [BOT] ✅ Loaded V2 database: 2304 jobs
💾 DISK STATE: 2304 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2304
[2026-02-05T08:08:14.476Z] [BOT] 🔀 Deep merged: Business Intelligence Software Engineer @ ORG_ad74b60f Careers (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:08:14.476Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2304 jobs (merged disk + memory)
[2026-02-05T08:08:14.478Z] [BOT] ✅ No jobs to archive (all 2304 jobs within 7-day window)
[2026-02-05T08:08:14.587Z] [BOT] 💾 Saved posted_jobs.json: 2304 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:19.088Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T08:08:19.090Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_32fcaf62..." not found, but found as SHA256 "507a44898f0ce790"
[2026-02-05T08:08:19.090Z] [BOT] ⏭️  Skipping duplicate: JID_f94920b9 (posted within 7 days)
[2026-02-05T08:08:19.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_48a05a6b..." not found, but found as SHA256 "8c8ead1f99a1017d"
⏭️  Skipping duplicate: JID_7f7bb39f (posted within 7 days)
[2026-02-05T08:08:19.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90c3f62a..." not found, but found as SHA256 "92c63d5df2cccb97"
⏭️  Skipping duplicate: JID_47f229a8 (posted within 7 days)
[2026-02-05T08:08:19.091Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_cf3a685c..." not found, but found as SHA256 "b15d4a9065a22927"
[2026-02-05T08:08:19.091Z] [BOT] ⏭️  Skipping duplicate: JID_8f3ef5c0 (posted within 7 days)
[2026-02-05T08:08:19.092Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "3588a41f56880b48"
[2026-02-05T08:08:19.092Z] [BOT] ⏭️  Skipping duplicate: JID_f38753e8 (posted within 7 days)
[2026-02-05T08:08:19.092Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e39417e6..." not found, but found as SHA256 "81ea6c828900d751"
[2026-02-05T08:08:19.092Z] [BOT] ⏭️  Skipping duplicate: JID_e39417e6-info_technology-4830247792-e (posted within 7 days)
[2026-02-05T08:08:19.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "7edf40b23f00a4a0"
[2026-02-05T08:08:19.093Z] [BOT] ⏭️  Skipping duplicate: JID_1b9ba35f (posted within 7 days)
[2026-02-05T08:08:19.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e1054120..." not found, but found as SHA256 "3924a8b81ffa39ef"
[2026-02-05T08:08:19.093Z] [BOT] ⏭️  Skipping duplicate: JID_291a241a (posted within 7 days)
[2026-02-05T08:08:19.093Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_71992804..." not found, but found as SHA256 "b6dccdf9c4bee42d"
[2026-02-05T08:08:19.093Z] [BOT] ⏭️  Skipping duplicate: JID_dc5fecb7 (posted within 7 days)
[2026-02-05T08:08:19.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4907bb5b-..." not found, but found as SHA256 "22049bd697e9259d"
[2026-02-05T08:08:19.094Z] [BOT] ⏭️  Skipping duplicate: JID_61921a01 (posted within 7 days)
[2026-02-05T08:08:19.096Z] [BOT] ✅ Loaded pending queue: 61 total (11 pending, 50 enriched, 0 posted)
[2026-02-05T08:08:19.099Z] [BOT] ✅ Saved pending queue: 61 total (11 pending, 40 enriched, 10 posted)
[2026-02-05T08:08:19.099Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T08:08:19.193Z] [BOT] 📂 Loaded 12385 existing routing entries
[2026-02-05T08:08:19.335Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12395
   Timestamp: 2026-02-05T08:08:19.283Z
[2026-02-05T08:08:19.336Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 22
[2026-02-05T08:08:19.336Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 4
[2026-02-05T08:08:19.336Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📍・JID_6daed763: 6 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌲・JID_efdf5921: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2304 jobs in memory (cached)
[2026-02-05T08:08:19.390Z] [BOT] ✅ Loaded V2 database: 2304 jobs
💾 DISK STATE: 2304 jobs on disk
[2026-02-05T08:08:19.390Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2304
[2026-02-05T08:08:19.400Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:08:19.400Z] [BOT] 💾 AFTER MERGE: 2304 jobs (merged disk + memory)
[2026-02-05T08:08:19.402Z] [BOT] ✅ No jobs to archive (all 2304 jobs within 7-day window)
[2026-02-05T08:08:19.515Z] [BOT] 💾 Saved posted_jobs.json: 2304 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:08:19.515Z] [BOT] ✅ Database saved successfully
[2026-02-05T08:08:21.537Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2450) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*