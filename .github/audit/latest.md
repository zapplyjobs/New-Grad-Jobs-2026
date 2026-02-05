# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T07:18:57.482Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T07:18:07.455Z] ========================================
[2026-02-05T07:18:07.457Z] Discord Bot Execution Log
[2026-02-05T07:18:07.457Z] Environment: GitHub Actions
[2026-02-05T07:18:07.457Z] Node Version: v20.20.0
[2026-02-05T07:18:07.457Z] ========================================
[2026-02-05T07:18:07.457Z] Environment Variables Check:
[2026-02-05T07:18:07.457Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T07:18:07.458Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T07:18:07.458Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T07:18:07.458Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T07:18:07.458Z] 
Multi-Channel Configuration:
[2026-02-05T07:18:07.458Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T07:18:07.458Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:18:07.458Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:18:07.458Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T07:18:07.458Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:18:07.458Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:18:07.458Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:18:07.459Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:18:07.459Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T07:18:07.459Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T07:18:07.459Z] 
Data Files Check:
[2026-02-05T07:18:07.460Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94519 bytes)
[2026-02-05T07:18:07.520Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11564285 bytes)
[2026-02-05T07:18:07.520Z] 
========================================
[2026-02-05T07:18:07.520Z] Starting Enhanced Discord Bot...
[2026-02-05T07:18:07.520Z] ========================================
[2026-02-05T07:18:08.120Z] [BOT] ✅ Loaded V2 database: 2274 jobs
[2026-02-05T07:18:08.654Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T07:18:08.655Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T07:18:08.655Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T07:18:08.657Z] [BOT] ✅ Loaded pending queue: 75 total (25 pending, 50 enriched, 0 posted)
[2026-02-05T07:18:08.658Z] [BOT] [BOT] 📬 Found 50 enriched jobs ready to post from pending queue
[2026-02-05T07:18:08.658Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T07:18:08.659Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T07:18:08.659Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T07:18:08.659Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T07:18:08.660Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T07:18:08.660Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T07:18:08.660Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T07:18:08.661Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T07:18:08.661Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T07:18:08.661Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T07:18:08.679Z] [BOT] 📬 Found 46 new jobs (4 already posted)...
[2026-02-05T07:18:08.679Z] [BOT] 📋 After blacklist filter: 46 jobs (0 blacklisted)
[2026-02-05T07:18:08.680Z] [BOT] 📋 After data quality filter: 46 jobs (0 invalid)
[2026-02-05T07:18:08.680Z] [BOT] 📋 After multi-location grouping: 43 unique jobs to post
[2026-02-05T07:18:08.681Z] [BOT] (3 grouped as same job with different locations)
📍 2 jobs with multiple locations:
[2026-02-05T07:18:08.681Z] [BOT] - Software Engineer III @ Walmart: milpitas, elkins
   - (USA) Software Engineer III @ Walmart: lowell, goshen, gravette
⏸️ Limiting to 10 jobs this run, 36 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T07:18:08.684Z] [BOT] 📌 Posting 9 jobs to #💻・tech-jobs
[2026-02-05T07:18:08.684Z] [BOT] 📍 [ROUTING] "Software Engineer, Flight + Plan" @ ORG_1897ba46indar
[2026-02-05T07:18:08.685Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:08.702Z] [BOT ERROR] (node:2649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T07:18:08.945Z] [BOT] ✅ Posted message: Software Engineer, Flight + Plan @ ORG_1897ba46indar in #💻・tech-jobs
[2026-02-05T07:18:08.945Z] [BOT] ✅ Industry: Software Engineer, Flight + Plan @ ORG_1897ba46indar
[2026-02-05T07:18:08.946Z] [BOT] 💾 Added channel posting: Software Engineer, Flight + Plan @ ORG_1897ba46indar → category channel (1 total channels)
[2026-02-05T07:18:08.946Z] [BOT] 💾 BEFORE MERGE: 2275 jobs in memory (cached)
[2026-02-05T07:18:08.995Z] [BOT] ✅ Loaded V2 database: 2274 jobs
💾 DISK STATE: 2274 jobs on disk
[2026-02-05T07:18:08.996Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2275
[2026-02-05T07:18:09.001Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:09.001Z] [BOT] 💾 AFTER MERGE: 2275 jobs (merged disk + memory)
[2026-02-05T07:18:09.002Z] [BOT] ✅ No jobs to archive (all 2275 jobs within 7-day window)
[2026-02-05T07:18:09.135Z] [BOT] 💾 Saved posted_jobs.json: 2275 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:10.879Z] [BOT] ✅ Posted message: Software Engineer, Flight + Plan @ ORG_1897ba46indar in #📍・JID_6daed763
[2026-02-05T07:18:10.879Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T07:18:10.880Z] [BOT] 💾 Added channel posting: Software Engineer, Flight + Plan @ ORG_1897ba46indar → location channel (2 total channels)
[2026-02-05T07:18:10.880Z] [BOT] 💾 BEFORE MERGE: 2275 jobs in memory (cached)
[2026-02-05T07:18:10.930Z] [BOT] ✅ Loaded V2 database: 2275 jobs
💾 DISK STATE: 2275 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2275
[2026-02-05T07:18:10.934Z] [BOT] 🔀 Deep merged: Software Engineer, Flight + Plan @ ORG_1897ba46indar (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:18:10.935Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2275 jobs (merged disk + memory)
[2026-02-05T07:18:10.936Z] [BOT] ✅ No jobs to archive (all 2275 jobs within 7-day window)
[2026-02-05T07:18:11.053Z] [BOT] 💾 Saved posted_jobs.json: 2275 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:12.555Z] [BOT] 📍 [ROUTING] "Junior Software Engineer / Developer" @ ORG_a3d85d84
[2026-02-05T07:18:12.555Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:12.743Z] [BOT] ✅ Posted message: Junior Software Engineer / Developer @ ORG_a3d85d84 in #💻・tech-jobs
[2026-02-05T07:18:12.743Z] [BOT] ✅ Industry: Junior Software Engineer / Developer @ ORG_a3d85d84
[2026-02-05T07:18:12.744Z] [BOT] 💾 Added channel posting: Junior Software Engineer / Developer @ ORG_a3d85d84 → category channel (1 total channels)
[2026-02-05T07:18:12.744Z] [BOT] 💾 BEFORE MERGE: 2276 jobs in memory (cached)
[2026-02-05T07:18:12.784Z] [BOT] ✅ Loaded V2 database: 2275 jobs
💾 DISK STATE: 2275 jobs on disk
[2026-02-05T07:18:12.784Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2276
[2026-02-05T07:18:12.789Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:12.789Z] [BOT] 💾 AFTER MERGE: 2276 jobs (merged disk + memory)
[2026-02-05T07:18:12.790Z] [BOT] ✅ No jobs to archive (all 2276 jobs within 7-day window)
[2026-02-05T07:18:12.904Z] [BOT] 💾 Saved posted_jobs.json: 2276 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:14.648Z] [BOT] ✅ Posted message: Junior Software Engineer / Developer @ ORG_a3d85d84 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T07:18:14.649Z] [BOT] 💾 Added channel posting: Junior Software Engineer / Developer @ ORG_a3d85d84 → location channel (2 total channels)
[2026-02-05T07:18:14.649Z] [BOT] 💾 BEFORE MERGE: 2276 jobs in memory (cached)
[2026-02-05T07:18:14.691Z] [BOT] ✅ Loaded V2 database: 2276 jobs
💾 DISK STATE: 2276 jobs on disk
[2026-02-05T07:18:14.692Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2276
[2026-02-05T07:18:14.696Z] [BOT] 🔀 Deep merged: Junior Software Engineer / Developer @ ORG_a3d85d84 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:18:14.697Z] [BOT] 💾 AFTER MERGE: 2276 jobs (merged disk + memory)
[2026-02-05T07:18:14.698Z] [BOT] ✅ No jobs to archive (all 2276 jobs within 7-day window)
[2026-02-05T07:18:14.817Z] [BOT] 💾 Saved posted_jobs.json: 2276 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:16.319Z] [BOT] 📍 [ROUTING] "Junior Software Engineer (3964)" @ ORG_c7953dfe
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:16.549Z] [BOT] ✅ Posted message: Junior Software Engineer (3964) @ ORG_c7953dfe in #💻・tech-jobs
  ✅ Industry: Junior Software Engineer (3964) @ ORG_c7953dfe
[2026-02-05T07:18:16.550Z] [BOT] 💾 Added channel posting: Junior Software Engineer (3964) @ ORG_c7953dfe → category channel (1 total channels)
[2026-02-05T07:18:16.550Z] [BOT] 💾 BEFORE MERGE: 2277 jobs in memory (cached)
[2026-02-05T07:18:16.595Z] [BOT] ✅ Loaded V2 database: 2276 jobs
💾 DISK STATE: 2276 jobs on disk
[2026-02-05T07:18:16.595Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2277
[2026-02-05T07:18:16.600Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:16.600Z] [BOT] 💾 AFTER MERGE: 2277 jobs (merged disk + memory)
[2026-02-05T07:18:16.602Z] [BOT] ✅ No jobs to archive (all 2277 jobs within 7-day window)
[2026-02-05T07:18:16.707Z] [BOT] 💾 Saved posted_jobs.json: 2277 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:18.427Z] [BOT] ✅ Posted message: Junior Software Engineer (3964) @ ORG_c7953dfe in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T07:18:18.428Z] [BOT] 💾 Added channel posting: Junior Software Engineer (3964) @ ORG_c7953dfe → location channel (2 total channels)
💾 BEFORE MERGE: 2277 jobs in memory (cached)
[2026-02-05T07:18:18.470Z] [BOT] ✅ Loaded V2 database: 2277 jobs
💾 DISK STATE: 2277 jobs on disk
[2026-02-05T07:18:18.471Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2277
[2026-02-05T07:18:18.475Z] [BOT] 🔀 Deep merged: Junior Software Engineer (3964) @ ORG_c7953dfe (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:18:18.475Z] [BOT] 💾 AFTER MERGE: 2277 jobs (merged disk + memory)
[2026-02-05T07:18:18.476Z] [BOT] ✅ No jobs to archive (all 2277 jobs within 7-day window)
[2026-02-05T07:18:18.597Z] [BOT] 💾 Saved posted_jobs.json: 2277 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:20.100Z] [BOT] 📍 [ROUTING] "Junior Solutions Engineer" @ ORG_645a0b3ein
[2026-02-05T07:18:20.100Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:20.358Z] [BOT] ✅ Posted message: Junior Solutions Engineer @ ORG_645a0b3ein in #💻・tech-jobs
[2026-02-05T07:18:20.358Z] [BOT] ✅ Industry: Junior Solutions Engineer @ ORG_645a0b3ein
[2026-02-05T07:18:20.359Z] [BOT] 💾 Added channel posting: Junior Solutions Engineer @ ORG_645a0b3ein → category channel (1 total channels)
[2026-02-05T07:18:20.359Z] [BOT] 💾 BEFORE MERGE: 2278 jobs in memory (cached)
[2026-02-05T07:18:20.396Z] [BOT] ✅ Loaded V2 database: 2277 jobs
💾 DISK STATE: 2277 jobs on disk
[2026-02-05T07:18:20.397Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2278
[2026-02-05T07:18:20.401Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:20.402Z] [BOT] 💾 AFTER MERGE: 2278 jobs (merged disk + memory)
[2026-02-05T07:18:20.403Z] [BOT] ✅ No jobs to archive (all 2278 jobs within 7-day window)
[2026-02-05T07:18:20.510Z] [BOT] 💾 Saved posted_jobs.json: 2278 active jobs
[2026-02-05T07:18:20.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:22.639Z] [BOT] ✅ Posted message: Junior Solutions Engineer @ ORG_645a0b3ein in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T07:18:22.640Z] [BOT] 💾 Added channel posting: Junior Solutions Engineer @ ORG_645a0b3ein → location channel (2 total channels)
[2026-02-05T07:18:22.640Z] [BOT] 💾 BEFORE MERGE: 2278 jobs in memory (cached)
[2026-02-05T07:18:22.682Z] [BOT] ✅ Loaded V2 database: 2278 jobs
💾 DISK STATE: 2278 jobs on disk
[2026-02-05T07:18:22.683Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2278
[2026-02-05T07:18:22.688Z] [BOT] 🔀 Deep merged: Junior Solutions Engineer @ ORG_645a0b3ein (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:18:22.688Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2278 jobs (merged disk + memory)
[2026-02-05T07:18:22.689Z] [BOT] ✅ No jobs to archive (all 2278 jobs within 7-day window)
[2026-02-05T07:18:22.811Z] [BOT] 💾 Saved posted_jobs.json: 2278 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:24.313Z] [BOT] 📍 [ROUTING] "Software Developer - TS/SCI Full Scope Poly" @ ORG_1c7ad016 Companies
[2026-02-05T07:18:24.313Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:24.711Z] [BOT] ✅ Posted message: Software Developer - TS/SCI Full Scope Poly @ ORG_1c7ad016 Companies in #💻・tech-jobs
[2026-02-05T07:18:24.711Z] [BOT] ✅ Industry: Software Developer - TS/SCI Full Scope Poly @ ORG_1c7ad016 Companies
[2026-02-05T07:18:24.712Z] [BOT] 💾 Added channel posting: Software Developer - TS/SCI Full Scope Poly @ ORG_1c7ad016 Companies → category channel (1 total channels)
[2026-02-05T07:18:24.712Z] [BOT] 💾 BEFORE MERGE: 2279 jobs in memory (cached)
[2026-02-05T07:18:24.750Z] [BOT] ✅ Loaded V2 database: 2278 jobs
💾 DISK STATE: 2278 jobs on disk
[2026-02-05T07:18:24.751Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2279
[2026-02-05T07:18:24.755Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:24.756Z] [BOT] 💾 AFTER MERGE: 2279 jobs (merged disk + memory)
[2026-02-05T07:18:24.757Z] [BOT] ✅ No jobs to archive (all 2279 jobs within 7-day window)
[2026-02-05T07:18:24.865Z] [BOT] 💾 Saved posted_jobs.json: 2279 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:26.643Z] [BOT] ✅ Posted message: Software Developer - TS/SCI Full Scope Poly @ ORG_1c7ad016 Companies in #📍・JID_6daed763
[2026-02-05T07:18:26.643Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T07:18:26.644Z] [BOT] 💾 Added channel posting: Software Developer - TS/SCI Full Scope Poly @ ORG_1c7ad016 Companies → location channel (2 total channels)
[2026-02-05T07:18:26.644Z] [BOT] 💾 BEFORE MERGE: 2279 jobs in memory (cached)
[2026-02-05T07:18:26.687Z] [BOT] ✅ Loaded V2 database: 2279 jobs
💾 DISK STATE: 2279 jobs on disk
[2026-02-05T07:18:26.687Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2279
[2026-02-05T07:18:26.692Z] [BOT] 🔀 Deep merged: Software Developer - TS/SCI Full Scope Poly @ ORG_1c7ad016 Companies (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:18:26.692Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2279 jobs (merged disk + memory)
[2026-02-05T07:18:26.694Z] [BOT] ✅ No jobs to archive (all 2279 jobs within 7-day window)
[2026-02-05T07:18:26.817Z] [BOT] 💾 Saved posted_jobs.json: 2279 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:28.317Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer" @ ORG_a48be88b
   Category: TECH (matched: "software")
[2026-02-05T07:18:28.318Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:28.508Z] [BOT] ✅ Posted message: Fullstack Software Engineer @ ORG_a48be88b in #💻・tech-jobs
[2026-02-05T07:18:28.508Z] [BOT] ✅ Industry: Fullstack Software Engineer @ ORG_a48be88b
[2026-02-05T07:18:28.509Z] [BOT] 💾 Added channel posting: Fullstack Software Engineer @ ORG_a48be88b → category channel (1 total channels)
[2026-02-05T07:18:28.509Z] [BOT] 💾 BEFORE MERGE: 2280 jobs in memory (cached)
[2026-02-05T07:18:28.547Z] [BOT] ✅ Loaded V2 database: 2279 jobs
💾 DISK STATE: 2279 jobs on disk
[2026-02-05T07:18:28.548Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2280
[2026-02-05T07:18:28.552Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:28.552Z] [BOT] 💾 AFTER MERGE: 2280 jobs (merged disk + memory)
[2026-02-05T07:18:28.553Z] [BOT] ✅ No jobs to archive (all 2280 jobs within 7-day window)
[2026-02-05T07:18:28.660Z] [BOT] 💾 Saved posted_jobs.json: 2280 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:30.351Z] [BOT] ✅ Posted message: Fullstack Software Engineer @ ORG_a48be88b in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T07:18:30.351Z] [BOT] 💾 Added channel posting: Fullstack Software Engineer @ ORG_a48be88b → location channel (2 total channels)
[2026-02-05T07:18:30.352Z] [BOT] 💾 BEFORE MERGE: 2280 jobs in memory (cached)
[2026-02-05T07:18:30.394Z] [BOT] ✅ Loaded V2 database: 2280 jobs
💾 DISK STATE: 2280 jobs on disk
[2026-02-05T07:18:30.394Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2280
[2026-02-05T07:18:30.399Z] [BOT] 🔀 Deep merged: Fullstack Software Engineer @ ORG_a48be88b (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:18:30.399Z] [BOT] 💾 AFTER MERGE: 2280 jobs (merged disk + memory)
[2026-02-05T07:18:30.400Z] [BOT] ✅ No jobs to archive (all 2280 jobs within 7-day window)
[2026-02-05T07:18:30.521Z] [BOT] 💾 Saved posted_jobs.json: 2280 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:32.023Z] [BOT] 📍 [ROUTING] "Software Engineer - Mobility - S&P Global" @ ORG_2f17a0f8 via eFinancialCareers
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:32.325Z] [BOT] ✅ Posted message: Software Engineer - Mobility - S&P Global @ ORG_2f17a0f8 via eFinancialCareers in #💻・tech-jobs
  ✅ Industry: Software Engineer - Mobility - S&P Global @ ORG_2f17a0f8 via eFinancialCareers
[2026-02-05T07:18:32.326Z] [BOT] 💾 Added channel posting: Software Engineer - Mobility - S&P Global @ ORG_2f17a0f8 via eFinancialCareers → category channel (1 total channels)
[2026-02-05T07:18:32.326Z] [BOT] 💾 BEFORE MERGE: 2281 jobs in memory (cached)
[2026-02-05T07:18:32.365Z] [BOT] ✅ Loaded V2 database: 2280 jobs
💾 DISK STATE: 2280 jobs on disk
[2026-02-05T07:18:32.365Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2281
[2026-02-05T07:18:32.370Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:32.370Z] [BOT] 💾 AFTER MERGE: 2281 jobs (merged disk + memory)
[2026-02-05T07:18:32.372Z] [BOT] ✅ No jobs to archive (all 2281 jobs within 7-day window)
[2026-02-05T07:18:32.478Z] [BOT] 💾 Saved posted_jobs.json: 2281 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:34.284Z] [BOT] ✅ Posted message: Software Engineer - Mobility - S&P Global @ ORG_2f17a0f8 via eFinancialCareers in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T07:18:34.285Z] [BOT] 💾 Added channel posting: Software Engineer - Mobility - S&P Global @ ORG_2f17a0f8 via eFinancialCareers → location channel (2 total channels)
[2026-02-05T07:18:34.285Z] [BOT] 💾 BEFORE MERGE: 2281 jobs in memory (cached)
[2026-02-05T07:18:34.328Z] [BOT] ✅ Loaded V2 database: 2281 jobs
💾 DISK STATE: 2281 jobs on disk
[2026-02-05T07:18:34.328Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2281
[2026-02-05T07:18:34.333Z] [BOT] 🔀 Deep merged: Software Engineer - Mobility - S&P Global @ ORG_2f17a0f8 via eFinancialCareers (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:18:34.333Z] [BOT] 💾 AFTER MERGE: 2281 jobs (merged disk + memory)
[2026-02-05T07:18:34.335Z] [BOT] ✅ No jobs to archive (all 2281 jobs within 7-day window)
[2026-02-05T07:18:34.453Z] [BOT] 💾 Saved posted_jobs.json: 2281 active jobs
[2026-02-05T07:18:34.454Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:35.956Z] [BOT] 📍 [ROUTING] "F-22 Associate Software Engineering Technical Specialist" @ ORG_6181447bing
[2026-02-05T07:18:35.956Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:36.182Z] [BOT] ✅ Posted message: F-22 Associate Software Engineering Technical Specialist @ ORG_6181447bing in #💻・tech-jobs
  ✅ Industry: F-22 Associate Software Engineering Technical Specialist @ ORG_6181447bing
[2026-02-05T07:18:36.183Z] [BOT] 💾 Added channel posting: F-22 Associate Software Engineering Technical Specialist @ ORG_6181447bing → category channel (1 total channels)
[2026-02-05T07:18:36.183Z] [BOT] 💾 BEFORE MERGE: 2282 jobs in memory (cached)
[2026-02-05T07:18:36.221Z] [BOT] ✅ Loaded V2 database: 2281 jobs
💾 DISK STATE: 2281 jobs on disk
[2026-02-05T07:18:36.221Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2282
[2026-02-05T07:18:36.225Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:36.226Z] [BOT] 💾 AFTER MERGE: 2282 jobs (merged disk + memory)
[2026-02-05T07:18:36.227Z] [BOT] ✅ No jobs to archive (all 2282 jobs within 7-day window)
[2026-02-05T07:18:36.333Z] [BOT] 💾 Saved posted_jobs.json: 2282 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:38.161Z] [BOT] ✅ Posted message: F-22 Associate Software Engineering Technical Specialist @ ORG_6181447bing in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T07:18:38.161Z] [BOT] 💾 Added channel posting: F-22 Associate Software Engineering Technical Specialist @ ORG_6181447bing → location channel (2 total channels)
[2026-02-05T07:18:38.161Z] [BOT] 💾 BEFORE MERGE: 2282 jobs in memory (cached)
[2026-02-05T07:18:38.203Z] [BOT] ✅ Loaded V2 database: 2282 jobs
💾 DISK STATE: 2282 jobs on disk
[2026-02-05T07:18:38.204Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2282
[2026-02-05T07:18:38.208Z] [BOT] 🔀 Deep merged: F-22 Associate Software Engineering Technical Specialist @ ORG_6181447bing (disk: 1 channels → merged: 2 channels)
[2026-02-05T07:18:38.208Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2282 jobs (merged disk + memory)
[2026-02-05T07:18:38.209Z] [BOT] ✅ No jobs to archive (all 2282 jobs within 7-day window)
[2026-02-05T07:18:38.322Z] [BOT] 💾 Saved posted_jobs.json: 2282 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:39.823Z] [BOT] 📍 [ROUTING] "Junior Software Engineer" @ ORG_ff0a4227 Technologies
   Category: TECH (matched: "software")
[2026-02-05T07:18:39.823Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T07:18:40.226Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_ff0a4227 Technologies in #💻・tech-jobs
[2026-02-05T07:18:40.226Z] [BOT] ✅ Industry: Junior Software Engineer @ ORG_ff0a4227 Technologies
[2026-02-05T07:18:40.227Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_ff0a4227 Technologies → category channel (1 total channels)
[2026-02-05T07:18:40.227Z] [BOT] 💾 BEFORE MERGE: 2283 jobs in memory (cached)
[2026-02-05T07:18:40.277Z] [BOT] ✅ Loaded V2 database: 2282 jobs
💾 DISK STATE: 2282 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2283
[2026-02-05T07:18:40.282Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:40.282Z] [BOT] 💾 AFTER MERGE: 2283 jobs (merged disk + memory)
[2026-02-05T07:18:40.283Z] [BOT] ✅ No jobs to archive (all 2283 jobs within 7-day window)
[2026-02-05T07:18:40.411Z] [BOT] 💾 Saved posted_jobs.json: 2283 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:42.109Z] [BOT] ✅ Posted message: Junior Software Engineer @ ORG_ff0a4227 Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T07:18:42.109Z] [BOT] 💾 Added channel posting: Junior Software Engineer @ ORG_ff0a4227 Technologies → location channel (2 total channels)
[2026-02-05T07:18:42.110Z] [BOT] 💾 BEFORE MERGE: 2283 jobs in memory (cached)
[2026-02-05T07:18:42.149Z] [BOT] ✅ Loaded V2 database: 2283 jobs
💾 DISK STATE: 2283 jobs on disk
[2026-02-05T07:18:42.149Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2283
[2026-02-05T07:18:42.153Z] [BOT] 🔀 Deep merged: Junior Software Engineer @ ORG_ff0a4227 Technologies (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:18:42.154Z] [BOT] 💾 AFTER MERGE: 2283 jobs (merged disk + memory)
[2026-02-05T07:18:42.155Z] [BOT] ✅ No jobs to archive (all 2283 jobs within 7-day window)
[2026-02-05T07:18:42.268Z] [BOT] 💾 Saved posted_jobs.json: 2283 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:46.769Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T07:18:46.770Z] [BOT] 📍 [ROUTING] "Software Engineer, Full Stack, Level 4" @ ORG_98df9a59 Inc.
[2026-02-05T07:18:46.771Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T07:18:47.130Z] [BOT] ✅ Posted message: Software Engineer, Full Stack, Level 4 @ ORG_98df9a59 Inc. in #🤖・ai-jobs
  ✅ Industry: Software Engineer, Full Stack, Level 4 @ ORG_98df9a59 Inc.
[2026-02-05T07:18:47.131Z] [BOT] 💾 Added channel posting: Software Engineer, Full Stack, Level 4 @ ORG_98df9a59 Inc. → category channel (1 total channels)
[2026-02-05T07:18:47.131Z] [BOT] 💾 BEFORE MERGE: 2284 jobs in memory (cached)
[2026-02-05T07:18:47.173Z] [BOT] ✅ Loaded V2 database: 2283 jobs
💾 DISK STATE: 2283 jobs on disk
[2026-02-05T07:18:47.173Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2284
[2026-02-05T07:18:47.177Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:47.178Z] [BOT] 💾 AFTER MERGE: 2284 jobs (merged disk + memory)
[2026-02-05T07:18:47.179Z] [BOT] ✅ No jobs to archive (all 2284 jobs within 7-day window)
[2026-02-05T07:18:47.308Z] [BOT] 💾 Saved posted_jobs.json: 2284 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:49.035Z] [BOT] ✅ Posted message: Software Engineer, Full Stack, Level 4 @ ORG_98df9a59 Inc. in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T07:18:49.035Z] [BOT] 💾 Added channel posting: Software Engineer, Full Stack, Level 4 @ ORG_98df9a59 Inc. → location channel (2 total channels)
[2026-02-05T07:18:49.036Z] [BOT] 💾 BEFORE MERGE: 2284 jobs in memory (cached)
[2026-02-05T07:18:49.074Z] [BOT] ✅ Loaded V2 database: 2284 jobs
💾 DISK STATE: 2284 jobs on disk
[2026-02-05T07:18:49.074Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2284
[2026-02-05T07:18:49.078Z] [BOT] 🔀 Deep merged: Software Engineer, Full Stack, Level 4 @ ORG_98df9a59 Inc. (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T07:18:49.078Z] [BOT] 💾 AFTER MERGE: 2284 jobs (merged disk + memory)
[2026-02-05T07:18:49.080Z] [BOT] ✅ No jobs to archive (all 2284 jobs within 7-day window)
[2026-02-05T07:18:49.200Z] [BOT] 💾 Saved posted_jobs.json: 2284 active jobs
[2026-02-05T07:18:49.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:53.702Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T07:18:53.703Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "6e5c180ebeead92c"
[2026-02-05T07:18:53.703Z] [BOT] ⏭️  Skipping duplicate: JID_4c7c77c6 (posted within 7 days)
[2026-02-05T07:18:53.704Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e54bc5a3..." not found, but found as SHA256 "3b735c1963bae659"
⏭️  Skipping duplicate: JID_e54bc5a3 (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "c82f67e6beb40107"
⏭️  Skipping duplicate: JID_ec104073 (posted within 7 days)
[2026-02-05T07:18:53.705Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "6ab12453b5478164"
[2026-02-05T07:18:53.705Z] [BOT] ⏭️  Skipping duplicate: JID_66ec0c6d (posted within 7 days)
[2026-02-05T07:18:53.705Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_46572dc4..." not found, but found as SHA256 "5281020b8ea66c6b"
⏭️  Skipping duplicate: JID_e1da3776 (posted within 7 days)
[2026-02-05T07:18:53.705Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa4f08b4..." not found, but found as SHA256 "7a99b5ad63df0b42"
⏭️  Skipping duplicate: JID_252da882 (posted within 7 days)
[2026-02-05T07:18:53.706Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_31a541a7..." not found, but found as SHA256 "3aba4bbabfa2a5e8"
⏭️  Skipping duplicate: JID_b7122018 (posted within 7 days)
[2026-02-05T07:18:53.706Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "8664ace0d41e03aa"
⏭️  Skipping duplicate: JID_60f5b251 (posted within 7 days)
[2026-02-05T07:18:53.706Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_729d81c6..." not found, but found as SHA256 "d776ed98eaa276a1"
[2026-02-05T07:18:53.706Z] [BOT] ⏭️  Skipping duplicate: JID_00baae73 (posted within 7 days)
[2026-02-05T07:18:53.707Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6fd29c27-..." not found, but found as SHA256 "2731f669030b1dcc"
[2026-02-05T07:18:53.707Z] [BOT] ⏭️  Skipping duplicate: JID_740d8811 (posted within 7 days)
[2026-02-05T07:18:53.709Z] [BOT] ✅ Loaded pending queue: 75 total (25 pending, 50 enriched, 0 posted)
[2026-02-05T07:18:53.713Z] [BOT] ✅ Saved pending queue: 75 total (25 pending, 40 enriched, 10 posted)
[2026-02-05T07:18:53.713Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T07:18:53.807Z] [BOT] 📂 Loaded 12365 existing routing entries
[2026-02-05T07:18:53.947Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-05T07:18:53.947Z] [BOT] Total entries: 12375
   Timestamp: 2026-02-05T07:18:53.894Z
[2026-02-05T07:18:53.948Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 24
[2026-02-05T07:18:53.948Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 4
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #💻・tech-jobs: 9 posts
[2026-02-05T07:18:53.948Z] [BOT] 2. #📍・JID_6daed763: 5 posts
     3. #🗽・JID_98d4f0de: 3 posts
     4. #🌉・JID_739bbc0b: 2 posts
     5. #🤖・ai-jobs: 1 posts
[2026-02-05T07:18:53.948Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T07:18:53.948Z] [BOT] 💾 BEFORE MERGE: 2284 jobs in memory (cached)
[2026-02-05T07:18:54.001Z] [BOT] ✅ Loaded V2 database: 2284 jobs
💾 DISK STATE: 2284 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2284
[2026-02-05T07:18:54.010Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T07:18:54.010Z] [BOT] 💾 AFTER MERGE: 2284 jobs (merged disk + memory)
[2026-02-05T07:18:54.011Z] [BOT] ✅ No jobs to archive (all 2284 jobs within 7-day window)
[2026-02-05T07:18:54.125Z] [BOT] 💾 Saved posted_jobs.json: 2284 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T07:18:54.125Z] [BOT] ✅ Database saved successfully
[2026-02-05T07:18:56.149Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2649) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*