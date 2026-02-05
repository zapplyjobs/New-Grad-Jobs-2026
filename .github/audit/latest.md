# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T08:31:29.283Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T08:30:46.729Z] ========================================
[2026-02-05T08:30:46.731Z] Discord Bot Execution Log
[2026-02-05T08:30:46.731Z] Environment: GitHub Actions
[2026-02-05T08:30:46.731Z] Node Version: v20.20.0
[2026-02-05T08:30:46.731Z] ========================================
[2026-02-05T08:30:46.731Z] Environment Variables Check:
[2026-02-05T08:30:46.731Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T08:30:46.731Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T08:30:46.732Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T08:30:46.732Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T08:30:46.732Z] 
Multi-Channel Configuration:
[2026-02-05T08:30:46.732Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T08:30:46.732Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:30:46.732Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:30:46.732Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T08:30:46.732Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:30:46.732Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:30:46.732Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:30:46.732Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:30:46.732Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T08:30:46.732Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T08:30:46.733Z] 
Data Files Check:
[2026-02-05T08:30:46.734Z] .github/data/new_jobs.json: ✅ Exists (10 items, 111332 bytes)
[2026-02-05T08:30:46.795Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11739709 bytes)
[2026-02-05T08:30:46.795Z] 
========================================
[2026-02-05T08:30:46.795Z] Starting Enhanced Discord Bot...
[2026-02-05T08:30:46.795Z] ========================================
[2026-02-05T08:30:47.393Z] [BOT] ✅ Loaded V2 database: 2304 jobs
[2026-02-05T08:30:47.727Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-05T08:30:47.728Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T08:30:47.728Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T08:30:47.730Z] [BOT] ✅ Loaded pending queue: 51 total (1 pending, 50 enriched, 0 posted)
[2026-02-05T08:30:47.730Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T08:30:47.731Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T08:30:47.732Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T08:30:47.732Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T08:30:47.732Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T08:30:47.733Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T08:30:47.733Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T08:30:47.733Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T08:30:47.734Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T08:30:47.752Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T08:30:47.752Z] [BOT] 📋 After blacklist filter: 46 jobs (0 blacklisted)
[2026-02-05T08:30:47.753Z] [BOT] 📋 After data quality filter: 46 jobs (0 invalid)
[2026-02-05T08:30:47.754Z] [BOT] 📋 After multi-location grouping: 45 unique jobs to post
[2026-02-05T08:30:47.754Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - (USA) Software Engineer III @ Walmart: goshen, gravette
[2026-02-05T08:30:47.754Z] [BOT] ⏸️ Limiting to 10 jobs this run, 36 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T08:30:47.757Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-05T08:30:47.758Z] [BOT] 📍 [ROUTING] "(USA) Software Engineer III" @ ORG_3eab285c
[2026-02-05T08:30:47.758Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:30:47.776Z] [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T08:30:48.101Z] [BOT] ✅ Posted message: (USA) Software Engineer III @ ORG_3eab285c in #💻・tech-jobs
[2026-02-05T08:30:48.101Z] [BOT] ✅ Industry: (USA) Software Engineer III @ ORG_3eab285c
[2026-02-05T08:30:48.102Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T08:30:48.102Z] [BOT] 💾 BEFORE MERGE: 2305 jobs in memory (cached)
[2026-02-05T08:30:48.152Z] [BOT] ✅ Loaded V2 database: 2304 jobs
💾 DISK STATE: 2304 jobs on disk
[2026-02-05T08:30:48.153Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2305
[2026-02-05T08:30:48.158Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:30:48.158Z] [BOT] 💾 AFTER MERGE: 2305 jobs (merged disk + memory)
[2026-02-05T08:30:48.160Z] [BOT] ✅ No jobs to archive (all 2305 jobs within 7-day window)
[2026-02-05T08:30:48.290Z] [BOT] 💾 Saved posted_jobs.json: 2305 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:30:49.794Z] [BOT] 📍 [ROUTING] "Advanced Software Engineer, Gameplay" @ ORG_dc008d0e Bros. Discovery
[2026-02-05T08:30:49.795Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:30:50.023Z] [BOT] ✅ Posted message: Advanced Software Engineer, Gameplay @ ORG_dc008d0e Bros. Discovery in #💻・tech-jobs
  ✅ Industry: Advanced Software Engineer, Gameplay @ ORG_dc008d0e Bros. Discovery
[2026-02-05T08:30:50.024Z] [BOT] 💾 Added channel posting: Advanced Software Engineer, Gameplay @ ORG_dc008d0e Bros. Discovery → category channel (1 total channels)
[2026-02-05T08:30:50.024Z] [BOT] 💾 BEFORE MERGE: 2306 jobs in memory (cached)
[2026-02-05T08:30:50.074Z] [BOT] ✅ Loaded V2 database: 2305 jobs
💾 DISK STATE: 2305 jobs on disk
[2026-02-05T08:30:50.075Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2306
[2026-02-05T08:30:50.080Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:30:50.080Z] [BOT] 💾 AFTER MERGE: 2306 jobs (merged disk + memory)
[2026-02-05T08:30:50.081Z] [BOT] ✅ No jobs to archive (all 2306 jobs within 7-day window)
[2026-02-05T08:30:50.200Z] [BOT] 💾 Saved posted_jobs.json: 2306 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:30:51.701Z] [BOT] 📍 [ROUTING] "Junior Software Engineer / Devops at Vigilant Cyber Systems, Inc Raleigh, NC" @ ORG_21a88051 Cyber Systems, Inc
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:30:51.987Z] [BOT] ✅ Posted message: Junior Software Engineer / Devops at Vigilant Cyber Systems, Inc Raleigh, NC @ ORG_21a88051 Cyber Systems, Inc in #💻・tech-jobs
[2026-02-05T08:30:51.987Z] [BOT] ✅ Industry: Junior Software Engineer / Devops at Vigilant Cyber Systems, Inc Raleigh, NC @ ORG_21a88051 Cyber Systems, Inc
[2026-02-05T08:30:51.988Z] [BOT] 💾 Added channel posting: Junior Software Engineer / Devops at Vigilant Cyber Systems, Inc Raleigh, NC @ ORG_21a88051 Cyber Systems, Inc → category channel (1 total channels)
[2026-02-05T08:30:51.988Z] [BOT] 💾 BEFORE MERGE: 2307 jobs in memory (cached)
[2026-02-05T08:30:52.028Z] [BOT] ✅ Loaded V2 database: 2306 jobs
💾 DISK STATE: 2306 jobs on disk
[2026-02-05T08:30:52.028Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2307
[2026-02-05T08:30:52.033Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:30:52.033Z] [BOT] 💾 AFTER MERGE: 2307 jobs (merged disk + memory)
[2026-02-05T08:30:52.034Z] [BOT] ✅ No jobs to archive (all 2307 jobs within 7-day window)
[2026-02-05T08:30:52.149Z] [BOT] 💾 Saved posted_jobs.json: 2307 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:30:53.779Z] [BOT] ✅ Posted message: Junior Software Engineer / Devops at Vigilant Cyber Systems, Inc Raleigh, NC @ ORG_21a88051 Cyber Systems, Inc in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T08:30:53.780Z] [BOT] 💾 Added channel posting: Junior Software Engineer / Devops at Vigilant Cyber Systems, Inc Raleigh, NC @ ORG_21a88051 Cyber Systems, Inc → location channel (2 total channels)
[2026-02-05T08:30:53.780Z] [BOT] 💾 BEFORE MERGE: 2307 jobs in memory (cached)
[2026-02-05T08:30:53.828Z] [BOT] ✅ Loaded V2 database: 2307 jobs
💾 DISK STATE: 2307 jobs on disk
[2026-02-05T08:30:53.828Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2307
[2026-02-05T08:30:53.835Z] [BOT] 🔀 Deep merged: Junior Software Engineer / Devops at Vigilant Cyber Systems, Inc Raleigh, NC @ ORG_21a88051 Cyber Systems, Inc (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:30:53.835Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2307 jobs (merged disk + memory)
[2026-02-05T08:30:53.837Z] [BOT] ✅ No jobs to archive (all 2307 jobs within 7-day window)
[2026-02-05T08:30:53.969Z] [BOT] 💾 Saved posted_jobs.json: 2307 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:30:55.469Z] [BOT] 📍 [ROUTING] "Developer IV (test automation)" @ ORG_f299f553 Talent Group (HTG)
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:30:55.696Z] [BOT] ✅ Posted message: Developer IV (test automation) @ ORG_f299f553 Talent Group (HTG) in #💻・tech-jobs
  ✅ Industry: Developer IV (test automation) @ ORG_f299f553 Talent Group (HTG)
[2026-02-05T08:30:55.698Z] [BOT] 💾 Added channel posting: Developer IV (test automation) @ ORG_f299f553 Talent Group (HTG) → category channel (1 total channels)
[2026-02-05T08:30:55.698Z] [BOT] 💾 BEFORE MERGE: 2308 jobs in memory (cached)
[2026-02-05T08:30:55.735Z] [BOT] ✅ Loaded V2 database: 2307 jobs
💾 DISK STATE: 2307 jobs on disk
[2026-02-05T08:30:55.735Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2308
[2026-02-05T08:30:55.740Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:30:55.740Z] [BOT] 💾 AFTER MERGE: 2308 jobs (merged disk + memory)
[2026-02-05T08:30:55.741Z] [BOT] ✅ No jobs to archive (all 2308 jobs within 7-day window)
[2026-02-05T08:30:55.849Z] [BOT] 💾 Saved posted_jobs.json: 2308 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:30:57.517Z] [BOT] ✅ Posted message: Developer IV (test automation) @ ORG_f299f553 Talent Group (HTG) in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T08:30:57.517Z] [BOT] 💾 Added channel posting: Developer IV (test automation) @ ORG_f299f553 Talent Group (HTG) → location channel (2 total channels)
[2026-02-05T08:30:57.517Z] [BOT] 💾 BEFORE MERGE: 2308 jobs in memory (cached)
[2026-02-05T08:30:57.560Z] [BOT] ✅ Loaded V2 database: 2308 jobs
💾 DISK STATE: 2308 jobs on disk
[2026-02-05T08:30:57.560Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2308
[2026-02-05T08:30:57.565Z] [BOT] 🔀 Deep merged: Developer IV (test automation) @ ORG_f299f553 Talent Group (HTG) (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:30:57.565Z] [BOT] 💾 AFTER MERGE: 2308 jobs (merged disk + memory)
[2026-02-05T08:30:57.566Z] [BOT] ✅ No jobs to archive (all 2308 jobs within 7-day window)
[2026-02-05T08:30:57.680Z] [BOT] 💾 Saved posted_jobs.json: 2308 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:30:59.183Z] [BOT] 📍 [ROUTING] "Software Engineer II, Tax Product Development" @ ORG_489cae25 USA
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:30:59.396Z] [BOT] ✅ Posted message: Software Engineer II, Tax Product Development @ ORG_489cae25 USA in #💻・tech-jobs
  ✅ Industry: Software Engineer II, Tax Product Development @ ORG_489cae25 USA
[2026-02-05T08:30:59.397Z] [BOT] 💾 Added channel posting: Software Engineer II, Tax Product Development @ ORG_489cae25 USA → category channel (1 total channels)
[2026-02-05T08:30:59.397Z] [BOT] 💾 BEFORE MERGE: 2309 jobs in memory (cached)
[2026-02-05T08:30:59.439Z] [BOT] ✅ Loaded V2 database: 2308 jobs
💾 DISK STATE: 2308 jobs on disk
[2026-02-05T08:30:59.439Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2309
[2026-02-05T08:30:59.444Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:30:59.444Z] [BOT] 💾 AFTER MERGE: 2309 jobs (merged disk + memory)
[2026-02-05T08:30:59.446Z] [BOT] ✅ No jobs to archive (all 2309 jobs within 7-day window)
[2026-02-05T08:30:59.562Z] [BOT] 💾 Saved posted_jobs.json: 2309 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:01.222Z] [BOT] ✅ Posted message: Software Engineer II, Tax Product Development @ ORG_489cae25 USA in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T08:31:01.223Z] [BOT] 💾 Added channel posting: Software Engineer II, Tax Product Development @ ORG_489cae25 USA → location channel (2 total channels)
[2026-02-05T08:31:01.223Z] [BOT] 💾 BEFORE MERGE: 2309 jobs in memory (cached)
[2026-02-05T08:31:01.261Z] [BOT] ✅ Loaded V2 database: 2309 jobs
💾 DISK STATE: 2309 jobs on disk
[2026-02-05T08:31:01.261Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2309
[2026-02-05T08:31:01.265Z] [BOT] 🔀 Deep merged: Software Engineer II, Tax Product Development @ ORG_489cae25 USA (disk: 1 channels → merged: 2 channels)
[2026-02-05T08:31:01.265Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2309 jobs (merged disk + memory)
[2026-02-05T08:31:01.267Z] [BOT] ✅ No jobs to archive (all 2309 jobs within 7-day window)
[2026-02-05T08:31:01.379Z] [BOT] 💾 Saved posted_jobs.json: 2309 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:02.882Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_336a7f11 Medical
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:31:03.188Z] [BOT] ✅ Posted message: Associate Software Engineer @ ORG_336a7f11 Medical in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_336a7f11 Medical
[2026-02-05T08:31:03.189Z] [BOT] 💾 Added channel posting: Associate Software Engineer @ ORG_336a7f11 Medical → category channel (1 total channels)
[2026-02-05T08:31:03.189Z] [BOT] 💾 BEFORE MERGE: 2310 jobs in memory (cached)
[2026-02-05T08:31:03.231Z] [BOT] ✅ Loaded V2 database: 2309 jobs
💾 DISK STATE: 2309 jobs on disk
[2026-02-05T08:31:03.231Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2310
[2026-02-05T08:31:03.235Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:31:03.236Z] [BOT] 💾 AFTER MERGE: 2310 jobs (merged disk + memory)
[2026-02-05T08:31:03.237Z] [BOT] ✅ No jobs to archive (all 2310 jobs within 7-day window)
[2026-02-05T08:31:03.368Z] [BOT] 💾 Saved posted_jobs.json: 2310 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:04.870Z] [BOT] 📍 [ROUTING] "Software Engineering Assoicate" @ ORG_b76e15c3 Health Analytics
[2026-02-05T08:31:04.870Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:31:05.064Z] [BOT] ✅ Posted message: Software Engineering Assoicate @ ORG_b76e15c3 Health Analytics in #💻・tech-jobs
[2026-02-05T08:31:05.064Z] [BOT] ✅ Industry: Software Engineering Assoicate @ ORG_b76e15c3 Health Analytics
[2026-02-05T08:31:05.065Z] [BOT] 💾 Added channel posting: Software Engineering Assoicate @ ORG_b76e15c3 Health Analytics → category channel (1 total channels)
[2026-02-05T08:31:05.065Z] [BOT] 💾 BEFORE MERGE: 2311 jobs in memory (cached)
[2026-02-05T08:31:05.104Z] [BOT] ✅ Loaded V2 database: 2310 jobs
💾 DISK STATE: 2310 jobs on disk
[2026-02-05T08:31:05.104Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2311
[2026-02-05T08:31:05.108Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:31:05.108Z] [BOT] 💾 AFTER MERGE: 2311 jobs (merged disk + memory)
[2026-02-05T08:31:05.110Z] [BOT] ✅ No jobs to archive (all 2311 jobs within 7-day window)
[2026-02-05T08:31:05.216Z] [BOT] 💾 Saved posted_jobs.json: 2311 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:06.839Z] [BOT] ✅ Posted message: Software Engineering Assoicate @ ORG_b76e15c3 Health Analytics in #📍・JID_6daed763
[2026-02-05T08:31:06.839Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:31:06.840Z] [BOT] 💾 Added channel posting: Software Engineering Assoicate @ ORG_b76e15c3 Health Analytics → location channel (2 total channels)
[2026-02-05T08:31:06.840Z] [BOT] 💾 BEFORE MERGE: 2311 jobs in memory (cached)
[2026-02-05T08:31:06.883Z] [BOT] ✅ Loaded V2 database: 2311 jobs
💾 DISK STATE: 2311 jobs on disk
[2026-02-05T08:31:06.883Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2311
[2026-02-05T08:31:06.887Z] [BOT] 🔀 Deep merged: Software Engineering Assoicate @ ORG_b76e15c3 Health Analytics (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:31:06.887Z] [BOT] 💾 AFTER MERGE: 2311 jobs (merged disk + memory)
[2026-02-05T08:31:06.888Z] [BOT] ✅ No jobs to archive (all 2311 jobs within 7-day window)
[2026-02-05T08:31:07.005Z] [BOT] 💾 Saved posted_jobs.json: 2311 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:08.507Z] [BOT] 📍 [ROUTING] "Associate SW Tools Engineer /SDET/ /Hybrid - Acton/ MA/" @ ORG_7a38ef37 Corporation
[2026-02-05T08:31:08.508Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:31:08.769Z] [BOT] ✅ Posted message: Associate SW Tools Engineer /SDET/ /Hybrid - Acton/ MA/ @ ORG_7a38ef37 Corporation in #💻・tech-jobs
[2026-02-05T08:31:08.769Z] [BOT] ✅ Industry: Associate SW Tools Engineer /SDET/ /Hybrid - Acton/ MA/ @ ORG_7a38ef37 Corporation
[2026-02-05T08:31:08.770Z] [BOT] 💾 Added channel posting: Associate SW Tools Engineer /SDET/ /Hybrid - Acton/ MA/ @ ORG_7a38ef37 Corporation → category channel (1 total channels)
[2026-02-05T08:31:08.770Z] [BOT] 💾 BEFORE MERGE: 2312 jobs in memory (cached)
[2026-02-05T08:31:08.825Z] [BOT] ✅ Loaded V2 database: 2311 jobs
💾 DISK STATE: 2311 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2312
[2026-02-05T08:31:08.828Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:31:08.829Z] [BOT] 💾 AFTER MERGE: 2312 jobs (merged disk + memory)
[2026-02-05T08:31:08.830Z] [BOT] ✅ No jobs to archive (all 2312 jobs within 7-day window)
[2026-02-05T08:31:08.937Z] [BOT] 💾 Saved posted_jobs.json: 2312 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:10.767Z] [BOT] ✅ Posted message: Associate SW Tools Engineer /SDET/ /Hybrid - Acton/ MA/ @ ORG_7a38ef37 Corporation in #📍・JID_6daed763
[2026-02-05T08:31:10.767Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:31:10.768Z] [BOT] 💾 Added channel posting: Associate SW Tools Engineer /SDET/ /Hybrid - Acton/ MA/ @ ORG_7a38ef37 Corporation → location channel (2 total channels)
[2026-02-05T08:31:10.768Z] [BOT] 💾 BEFORE MERGE: 2312 jobs in memory (cached)
[2026-02-05T08:31:10.809Z] [BOT] ✅ Loaded V2 database: 2312 jobs
💾 DISK STATE: 2312 jobs on disk
[2026-02-05T08:31:10.810Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2312
[2026-02-05T08:31:10.814Z] [BOT] 🔀 Deep merged: Associate SW Tools Engineer /SDET/ /Hybrid - Acton/ MA/ @ ORG_7a38ef37 Corporation (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:31:10.814Z] [BOT] 💾 AFTER MERGE: 2312 jobs (merged disk + memory)
[2026-02-05T08:31:10.815Z] [BOT] ✅ No jobs to archive (all 2312 jobs within 7-day window)
[2026-02-05T08:31:10.931Z] [BOT] 💾 Saved posted_jobs.json: 2312 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:12.433Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_c8f48a68 Pierce and Associates
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T08:31:12.694Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_c8f48a68 Pierce and Associates in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer @ ORG_c8f48a68 Pierce and Associates
[2026-02-05T08:31:12.695Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_c8f48a68 Pierce and Associates → category channel (1 total channels)
[2026-02-05T08:31:12.695Z] [BOT] 💾 BEFORE MERGE: 2313 jobs in memory (cached)
[2026-02-05T08:31:12.737Z] [BOT] ✅ Loaded V2 database: 2312 jobs
💾 DISK STATE: 2312 jobs on disk
[2026-02-05T08:31:12.738Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2313
[2026-02-05T08:31:12.741Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:31:12.741Z] [BOT] 💾 AFTER MERGE: 2313 jobs (merged disk + memory)
[2026-02-05T08:31:12.743Z] [BOT] ✅ No jobs to archive (all 2313 jobs within 7-day window)
[2026-02-05T08:31:12.858Z] [BOT] 💾 Saved posted_jobs.json: 2313 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:14.599Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_c8f48a68 Pierce and Associates in #📍・JID_6daed763
[2026-02-05T08:31:14.599Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T08:31:14.599Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_c8f48a68 Pierce and Associates → location channel (2 total channels)
[2026-02-05T08:31:14.599Z] [BOT] 💾 BEFORE MERGE: 2313 jobs in memory (cached)
[2026-02-05T08:31:14.641Z] [BOT] ✅ Loaded V2 database: 2313 jobs
💾 DISK STATE: 2313 jobs on disk
[2026-02-05T08:31:14.641Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2313
[2026-02-05T08:31:14.645Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ ORG_c8f48a68 Pierce and Associates (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:31:14.646Z] [BOT] 💾 AFTER MERGE: 2313 jobs (merged disk + memory)
[2026-02-05T08:31:14.647Z] [BOT] ✅ No jobs to archive (all 2313 jobs within 7-day window)
[2026-02-05T08:31:14.768Z] [BOT] 💾 Saved posted_jobs.json: 2313 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:19.270Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T08:31:19.272Z] [BOT] 📍 [ROUTING] "Research Engineer, Universes" @ ORG_744205e4
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-05T08:31:19.272Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T08:31:19.465Z] [BOT] ✅ Posted message: Research Engineer, Universes @ ORG_744205e4 in #🤖・ai-jobs
  ✅ Industry: Research Engineer, Universes @ ORG_744205e4
[2026-02-05T08:31:19.466Z] [BOT] 💾 Added channel posting: Research Engineer, Universes @ ORG_744205e4 → category channel (1 total channels)
[2026-02-05T08:31:19.466Z] [BOT] 💾 BEFORE MERGE: 2314 jobs in memory (cached)
[2026-02-05T08:31:19.504Z] [BOT] ✅ Loaded V2 database: 2313 jobs
💾 DISK STATE: 2313 jobs on disk
[2026-02-05T08:31:19.505Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2314
[2026-02-05T08:31:19.509Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:31:19.509Z] [BOT] 💾 AFTER MERGE: 2314 jobs (merged disk + memory)
[2026-02-05T08:31:19.510Z] [BOT] ✅ No jobs to archive (all 2314 jobs within 7-day window)
[2026-02-05T08:31:19.626Z] [BOT] 💾 Saved posted_jobs.json: 2314 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:21.399Z] [BOT] ✅ Posted message: Research Engineer, Universes @ ORG_744205e4 in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T08:31:21.400Z] [BOT] 💾 Added channel posting: Research Engineer, Universes @ ORG_744205e4 → location channel (2 total channels)
[2026-02-05T08:31:21.400Z] [BOT] 💾 BEFORE MERGE: 2314 jobs in memory (cached)
[2026-02-05T08:31:21.438Z] [BOT] ✅ Loaded V2 database: 2314 jobs
💾 DISK STATE: 2314 jobs on disk
[2026-02-05T08:31:21.438Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2314
[2026-02-05T08:31:21.442Z] [BOT] 🔀 Deep merged: Research Engineer, Universes @ ORG_744205e4 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T08:31:21.442Z] [BOT] 💾 AFTER MERGE: 2314 jobs (merged disk + memory)
[2026-02-05T08:31:21.443Z] [BOT] ✅ No jobs to archive (all 2314 jobs within 7-day window)
[2026-02-05T08:31:21.562Z] [BOT] 💾 Saved posted_jobs.json: 2314 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:26.063Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T08:31:26.065Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_48a05a6b..." not found, but found as SHA256 "5f5fc845b65ad0b7"
[2026-02-05T08:31:26.065Z] [BOT] ⏭️  Skipping duplicate: JID_55319c2c (posted within 7 days)
[2026-02-05T08:31:26.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8ff20cd6..." not found, but found as SHA256 "e637465af6a5ae72"
⏭️  Skipping duplicate: JID_705463f4 (posted within 7 days)
[2026-02-05T08:31:26.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "c2a5369b3e352b4c"
⏭️  Skipping duplicate: JID_65efe4df (posted within 7 days)
[2026-02-05T08:31:26.066Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_78c2d0cd..." not found, but found as SHA256 "905753fc1da5e6a9"
⏭️  Skipping duplicate: JID_385ff53f (posted within 7 days)
[2026-02-05T08:31:26.067Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2da6536c-..." not found, but found as SHA256 "a994963bfdb0bd2f"
⏭️  Skipping duplicate: JID_c0d9e3ef (posted within 7 days)
[2026-02-05T08:31:26.067Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "bfabc650ed4e0125"
⏭️  Skipping duplicate: JID_6486439f (posted within 7 days)
[2026-02-05T08:31:26.067Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_d7fbd0af..." not found, but found as SHA256 "9f46fb237b6e0727"
[2026-02-05T08:31:26.068Z] [BOT] ⏭️  Skipping duplicate: JID_0e69bfb2 (posted within 7 days)
[2026-02-05T08:31:26.068Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_444097ae..." not found, but found as SHA256 "f3032188b1c27ed1"
[2026-02-05T08:31:26.068Z] [BOT] ⏭️  Skipping duplicate: JID_d23e4834 (posted within 7 days)
[2026-02-05T08:31:26.068Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_bf1534a9..." not found, but found as SHA256 "846f8baa5886cb23"
[2026-02-05T08:31:26.068Z] [BOT] ⏭️  Skipping duplicate: JID_ae3bb7fd (posted within 7 days)
[2026-02-05T08:31:26.068Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fd9ca4fc-CH_9fb78a0c..." not found, but found as SHA256 "2d04a5d9193f32c5"
[2026-02-05T08:31:26.069Z] [BOT] ⏭️  Skipping duplicate: JID_fd9ca4fc-CH_9fb78a0c (posted within 7 days)
[2026-02-05T08:31:26.070Z] [BOT] ✅ Loaded pending queue: 51 total (1 pending, 50 enriched, 0 posted)
[2026-02-05T08:31:26.073Z] [BOT] ✅ Saved pending queue: 51 total (1 pending, 40 enriched, 10 posted)
[2026-02-05T08:31:26.073Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T08:31:26.164Z] [BOT] 📂 Loaded 12395 existing routing entries
[2026-02-05T08:31:26.295Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-05T08:31:26.296Z] [BOT] Total entries: 12405
   Timestamp: 2026-02-05T08:31:26.244Z
[2026-02-05T08:31:26.296Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T08:31:26.297Z] [BOT] Total attempts: 21
   Successful: 17
   Failed: 0
   Skipped: 4
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 17
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 9 posts
     2. #📍・JID_6daed763: 6 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🌉・JID_739bbc0b: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2314 jobs in memory (cached)
[2026-02-05T08:31:26.357Z] [BOT] ✅ Loaded V2 database: 2314 jobs
💾 DISK STATE: 2314 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2314
[2026-02-05T08:31:26.361Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T08:31:26.362Z] [BOT] 💾 AFTER MERGE: 2314 jobs (merged disk + memory)
[2026-02-05T08:31:26.363Z] [BOT] ✅ No jobs to archive (all 2314 jobs within 7-day window)
[2026-02-05T08:31:26.476Z] [BOT] 💾 Saved posted_jobs.json: 2314 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T08:31:26.476Z] [BOT] ✅ Database saved successfully
[2026-02-05T08:31:28.498Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2511) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*