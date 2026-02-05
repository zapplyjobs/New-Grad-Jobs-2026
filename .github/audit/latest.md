# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T20:23:46.606Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T20:23:18.120Z] ========================================
[2026-02-05T20:23:18.121Z] Discord Bot Execution Log
[2026-02-05T20:23:18.122Z] Environment: GitHub Actions
[2026-02-05T20:23:18.122Z] Node Version: v20.20.0
[2026-02-05T20:23:18.122Z] ========================================
[2026-02-05T20:23:18.122Z] Environment Variables Check:
[2026-02-05T20:23:18.122Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T20:23:18.122Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T20:23:18.122Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T20:23:18.122Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T20:23:18.122Z] 
Multi-Channel Configuration:
[2026-02-05T20:23:18.122Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T20:23:18.122Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:23:18.122Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:23:18.123Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T20:23:18.123Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:23:18.123Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:23:18.123Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:23:18.123Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:23:18.123Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:23:18.123Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T20:23:18.123Z] 
Data Files Check:
[2026-02-05T20:23:18.124Z] .github/data/new_jobs.json: ✅ Exists (9 items, 104010 bytes)
[2026-02-05T20:23:18.184Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12096367 bytes)
[2026-02-05T20:23:18.185Z] 
========================================
[2026-02-05T20:23:18.185Z] Starting Enhanced Discord Bot...
[2026-02-05T20:23:18.185Z] ========================================
[2026-02-05T20:23:18.774Z] [BOT] ✅ Loaded V2 database: 2363 jobs
[2026-02-05T20:23:19.278Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T20:23:19.279Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T20:23:19.279Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T20:23:19.279Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-02-05T20:23:19.280Z] [BOT] [BOT] 📬 Found 9 enriched jobs ready to post from pending queue
[2026-02-05T20:23:19.280Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T20:23:19.281Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T20:23:19.281Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T20:23:19.282Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T20:23:19.282Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T20:23:19.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T20:23:19.283Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T20:23:19.283Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T20:23:19.286Z] [BOT] 📬 Found 5 new jobs (4 already posted)...
[2026-02-05T20:23:19.286Z] [BOT] 🚫 Skipping blacklisted job: Software Engineer Director, Compute Infrastructure at LinkedIn
[2026-02-05T20:23:19.287Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2026-02-05T20:23:19.308Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2026-02-05T20:23:19.308Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 4 jobs (1 blacklisted)
[2026-02-05T20:23:19.308Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-02-05T20:23:19.309Z] [BOT] 📋 After multi-location grouping: 4 unique jobs to post
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T20:23:19.310Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-05T20:23:19.311Z] [BOT] 📍 [ROUTING] "Junior Software Engineer (Backend)" @ ORG_83874ba6in
[2026-02-05T20:23:19.312Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T20:23:19.329Z] [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T20:23:20.273Z] [BOT] ✅ Posted message: Junior Software Engineer (Backend) @ ORG_83874ba6in in #💻・tech-jobs
[2026-02-05T20:23:20.273Z] [BOT] ✅ Industry: Junior Software Engineer (Backend) @ ORG_83874ba6in
[2026-02-05T20:23:20.274Z] [BOT] 💾 Added channel posting: Junior Software Engineer (Backend) @ ORG_83874ba6in → category channel (1 total channels)
[2026-02-05T20:23:20.274Z] [BOT] 💾 BEFORE MERGE: 2364 jobs in memory (cached)
[2026-02-05T20:23:20.327Z] [BOT] ✅ Loaded V2 database: 2363 jobs
💾 DISK STATE: 2363 jobs on disk
[2026-02-05T20:23:20.328Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2364
[2026-02-05T20:23:20.333Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T20:23:20.333Z] [BOT] 💾 AFTER MERGE: 2364 jobs (merged disk + memory)
[2026-02-05T20:23:20.335Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-05T20:23:20.605Z] [BOT] 📦 Archived 80 jobs to 2026-01.json (80 total in archive)
✅ Archiving complete: 80 archived, 2284 active
[2026-02-05T20:23:21.193Z] [BOT] 💾 Saved posted_jobs.json: 2284 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:23:22.696Z] [BOT] 📍 [ROUTING] "Software Developer, Full Stack" @ ORG_9a897aa8inary, Inc.
[2026-02-05T20:23:22.697Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T20:23:22.979Z] [BOT] ✅ Posted message: Software Developer, Full Stack @ ORG_9a897aa8inary, Inc. in #💻・tech-jobs
[2026-02-05T20:23:22.979Z] [BOT] ✅ Industry: Software Developer, Full Stack @ ORG_9a897aa8inary, Inc.
[2026-02-05T20:23:22.980Z] [BOT] 💾 Added channel posting: Software Developer, Full Stack @ ORG_9a897aa8inary, Inc. → category channel (1 total channels)
[2026-02-05T20:23:22.981Z] [BOT] 💾 BEFORE MERGE: 2285 jobs in memory (cached)
[2026-02-05T20:23:23.020Z] [BOT] ✅ Loaded V2 database: 2284 jobs
💾 DISK STATE: 2284 jobs on disk
[2026-02-05T20:23:23.021Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2285
[2026-02-05T20:23:23.026Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T20:23:23.026Z] [BOT] 💾 AFTER MERGE: 2285 jobs (merged disk + memory)
[2026-02-05T20:23:23.028Z] [BOT] ✅ No jobs to archive (all 2285 jobs within 7-day window)
[2026-02-05T20:23:23.157Z] [BOT] 💾 Saved posted_jobs.json: 2285 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:23:24.869Z] [BOT] ✅ Posted message: Software Developer, Full Stack @ ORG_9a897aa8inary, Inc. in #🌉・JID_739bbc0b
[2026-02-05T20:23:24.870Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T20:23:24.870Z] [BOT] 💾 Added channel posting: Software Developer, Full Stack @ ORG_9a897aa8inary, Inc. → location channel (2 total channels)
[2026-02-05T20:23:24.870Z] [BOT] 💾 BEFORE MERGE: 2285 jobs in memory (cached)
[2026-02-05T20:23:24.908Z] [BOT] ✅ Loaded V2 database: 2285 jobs
💾 DISK STATE: 2285 jobs on disk
[2026-02-05T20:23:24.909Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2285
[2026-02-05T20:23:24.913Z] [BOT] 🔀 Deep merged: Software Developer, Full Stack @ ORG_9a897aa8inary, Inc. (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T20:23:24.914Z] [BOT] 💾 AFTER MERGE: 2285 jobs (merged disk + memory)
[2026-02-05T20:23:24.915Z] [BOT] ✅ No jobs to archive (all 2285 jobs within 7-day window)
[2026-02-05T20:23:25.043Z] [BOT] 💾 Saved posted_jobs.json: 2285 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:23:29.544Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-05T20:23:29.545Z] [BOT] 📍 [ROUTING] "Software Engineer - iOS" @ ORG_3eab285c
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T20:23:29.545Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T20:23:29.856Z] [BOT] ✅ Posted message: Software Engineer - iOS @ ORG_3eab285c in #📊・JID_fb739488
[2026-02-05T20:23:29.856Z] [BOT] ✅ Industry: Software Engineer - iOS @ ORG_3eab285c
[2026-02-05T20:23:29.857Z] [BOT] 💾 Added channel posting: Software Engineer - iOS @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T20:23:29.857Z] [BOT] 💾 BEFORE MERGE: 2286 jobs in memory (cached)
[2026-02-05T20:23:29.895Z] [BOT] ✅ Loaded V2 database: 2285 jobs
💾 DISK STATE: 2285 jobs on disk
[2026-02-05T20:23:29.895Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2286
[2026-02-05T20:23:29.900Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T20:23:29.900Z] [BOT] 💾 AFTER MERGE: 2286 jobs (merged disk + memory)
[2026-02-05T20:23:29.902Z] [BOT] ✅ No jobs to archive (all 2286 jobs within 7-day window)
[2026-02-05T20:23:30.029Z] [BOT] 💾 Saved posted_jobs.json: 2286 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:23:31.732Z] [BOT] ✅ Posted message: Software Engineer - iOS @ ORG_3eab285c in #🏠・JID_ead674af
[2026-02-05T20:23:31.732Z] [BOT] ✅ Location: 🏠・JID_ead674af
[2026-02-05T20:23:31.733Z] [BOT] 💾 Added channel posting: Software Engineer - iOS @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T20:23:31.733Z] [BOT] 💾 BEFORE MERGE: 2286 jobs in memory (cached)
[2026-02-05T20:23:31.771Z] [BOT] ✅ Loaded V2 database: 2286 jobs
💾 DISK STATE: 2286 jobs on disk
[2026-02-05T20:23:31.772Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2286
[2026-02-05T20:23:31.777Z] [BOT] 🔀 Deep merged: Software Engineer - iOS @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T20:23:31.777Z] [BOT] 💾 AFTER MERGE: 2286 jobs (merged disk + memory)
[2026-02-05T20:23:31.778Z] [BOT] ✅ No jobs to archive (all 2286 jobs within 7-day window)
[2026-02-05T20:23:31.906Z] [BOT] 💾 Saved posted_jobs.json: 2286 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:23:36.405Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T20:23:36.407Z] [BOT] 📍 [ROUTING] "(USA) Software Engineer III" @ Sam's Club
[2026-02-05T20:23:36.407Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T20:23:36.673Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ Sam's Club in #🤖・ai-jobs
[2026-02-05T20:23:36.673Z] [BOT] ✅ Industry: (USA) Software Engineer III @ Sam's Club
[2026-02-05T20:23:36.674Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ Sam's Club → category channel (1 total channels)
[2026-02-05T20:23:36.674Z] [BOT] 💾 BEFORE MERGE: 2287 jobs in memory (cached)
[2026-02-05T20:23:36.713Z] [BOT] ✅ Loaded V2 database: 2286 jobs
💾 DISK STATE: 2286 jobs on disk
[2026-02-05T20:23:36.713Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2287
[2026-02-05T20:23:36.718Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2287 jobs (merged disk + memory)
[2026-02-05T20:23:36.719Z] [BOT] ✅ No jobs to archive (all 2287 jobs within 7-day window)
[2026-02-05T20:23:36.840Z] [BOT] 💾 Saved posted_jobs.json: 2287 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:23:38.535Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ Sam's Club in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-05T20:23:38.535Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ Sam's Club → location channel (2 total channels)
[2026-02-05T20:23:38.535Z] [BOT] 💾 BEFORE MERGE: 2287 jobs in memory (cached)
[2026-02-05T20:23:38.585Z] [BOT] ✅ Loaded V2 database: 2287 jobs
💾 DISK STATE: 2287 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2287
[2026-02-05T20:23:38.589Z] [BOT] 🔀 Deep merged: (USA) Software Engineer III @ Sam's Club (disk: 1 channels → merged: 2 channels)
[2026-02-05T20:23:38.590Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2287 jobs (merged disk + memory)
[2026-02-05T20:23:38.591Z] [BOT] ✅ No jobs to archive (all 2287 jobs within 7-day window)
[2026-02-05T20:23:38.700Z] [BOT] 💾 Saved posted_jobs.json: 2287 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:23:43.201Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-02-05T20:23:43.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "9270ace916ee7af4"
[2026-02-05T20:23:43.203Z] [BOT] ⏭️  Skipping duplicate: JID_5ff24084 (posted within 7 days)
[2026-02-05T20:23:43.203Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "9010070b5ff01d75"
⏭️  Skipping duplicate: JID_27df197b (posted within 7 days)
[2026-02-05T20:23:43.204Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ed521550..." not found, but found as SHA256 "78b4813cd4233a56"
[2026-02-05T20:23:43.204Z] [BOT] ⏭️  Skipping duplicate: JID_b5998e3f (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_0e0b3640-..." not found, but found as SHA256 "84c46bb107da827c"
⏭️  Skipping duplicate: JID_dedd9430 (posted within 7 days)
[2026-02-05T20:23:43.205Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2026-02-05T20:23:43.206Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 4 enriched, 4 posted)
[2026-02-05T20:23:43.206Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T20:23:43.298Z] [BOT] 📂 Loaded 12454 existing routing entries
[2026-02-05T20:23:43.439Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-02-05T20:23:43.440Z] [BOT] New entries: 4
   Total entries: 12458
   Timestamp: 2026-02-05T20:23:43.387Z
[2026-02-05T20:23:43.440Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 12
[2026-02-05T20:23:43.440Z] [BOT] Successful: 7
   Failed: 0
   Skipped: 5
[2026-02-05T20:23:43.440Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 7
   Channels used: 5
[2026-02-05T20:23:43.440Z] [BOT] Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🏠・JID_ead674af: 2 posts
     3. #🌉・JID_739bbc0b: 1 posts
     4. #📊・JID_fb739488: 1 posts
[2026-02-05T20:23:43.441Z] [BOT] 5. #🤖・ai-jobs: 1 posts
[2026-02-05T20:23:43.441Z] [BOT] [STATS] Channel stats saved
[2026-02-05T20:23:43.441Z] [BOT] 💾 Saving posted jobs database...
💾 BEFORE MERGE: 2287 jobs in memory (cached)
[2026-02-05T20:23:43.497Z] [BOT] ✅ Loaded V2 database: 2287 jobs
[2026-02-05T20:23:43.499Z] [BOT] 💾 DISK STATE: 2287 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2287
[2026-02-05T20:23:43.503Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T20:23:43.503Z] [BOT] 💾 AFTER MERGE: 2287 jobs (merged disk + memory)
[2026-02-05T20:23:43.504Z] [BOT] ✅ No jobs to archive (all 2287 jobs within 7-day window)
[2026-02-05T20:23:43.624Z] [BOT] 💾 Saved posted_jobs.json: 2287 active jobs
[2026-02-05T20:23:43.626Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T20:23:45.647Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2515) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*