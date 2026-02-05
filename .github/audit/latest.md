# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T10:24:06.832Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T10:23:15.285Z] ========================================
[2026-02-05T10:23:15.286Z] Discord Bot Execution Log
[2026-02-05T10:23:15.286Z] Environment: GitHub Actions
[2026-02-05T10:23:15.286Z] Node Version: v20.20.0
[2026-02-05T10:23:15.287Z] ========================================
[2026-02-05T10:23:15.287Z] Environment Variables Check:
[2026-02-05T10:23:15.287Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T10:23:15.287Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T10:23:15.287Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T10:23:15.287Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T10:23:15.287Z] 
Multi-Channel Configuration:
[2026-02-05T10:23:15.287Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T10:23:15.287Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:23:15.287Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:23:15.287Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T10:23:15.287Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:23:15.287Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:23:15.287Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:23:15.287Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:23:15.288Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:23:15.288Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T10:23:15.288Z] 
Data Files Check:
[2026-02-05T10:23:15.289Z] .github/data/new_jobs.json: ✅ Exists (10 items, 123111 bytes)
[2026-02-05T10:23:15.363Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11953222 bytes)
[2026-02-05T10:23:15.363Z] 
========================================
[2026-02-05T10:23:15.363Z] Starting Enhanced Discord Bot...
[2026-02-05T10:23:15.363Z] ========================================
[2026-02-05T10:23:15.874Z] [BOT] ✅ Loaded V2 database: 2344 jobs
[2026-02-05T10:23:16.293Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T10:23:16.294Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T10:23:16.294Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T10:23:16.295Z] [BOT] ✅ Loaded pending queue: 17 total (0 pending, 17 enriched, 0 posted)
[2026-02-05T10:23:16.295Z] [BOT] [BOT] 📬 Found 17 enriched jobs ready to post from pending queue
[2026-02-05T10:23:16.296Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T10:23:16.297Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T10:23:16.297Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T10:23:16.298Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T10:23:16.298Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T10:23:16.299Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T10:23:16.299Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T10:23:16.304Z] [BOT] 📬 Found 13 new jobs (4 already posted)...
[2026-02-05T10:23:16.304Z] [BOT] 📋 After blacklist filter: 13 jobs (0 blacklisted)
[2026-02-05T10:23:16.304Z] [BOT] 📋 After data quality filter: 13 jobs (0 invalid)
[2026-02-05T10:23:16.305Z] [BOT] 📋 After multi-location grouping: 12 unique jobs to post
   (1 grouped as same job with different locations)
[2026-02-05T10:23:16.305Z] [BOT] 📍 1 jobs with multiple locations:
   - Software Engineer III - Fullstack @ Walmart: fayetteville, elm springs
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T10:23:16.307Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-05T10:23:16.308Z] [BOT] 📍 [ROUTING] "Software Engineer III - Fullstack" @ ORG_3eab285c
   Category: AI (matched: "AI/ML")
[2026-02-05T10:23:16.308Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-02-05T10:23:16.309Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T10:23:16.325Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T10:23:16.562Z] [BOT] ✅ Posted message: Software Engineer III - Fullstack @ ORG_3eab285c in #🤖・ai-jobs
[2026-02-05T10:23:16.562Z] [BOT] ✅ Industry: Software Engineer III - Fullstack @ ORG_3eab285c
[2026-02-05T10:23:16.563Z] [BOT] 💾 Added channel posting: Software Engineer III - Fullstack @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T10:23:16.563Z] [BOT] 💾 BEFORE MERGE: 2345 jobs in memory (cached)
[2026-02-05T10:23:16.631Z] [BOT] ✅ Loaded V2 database: 2344 jobs
💾 DISK STATE: 2344 jobs on disk
[2026-02-05T10:23:16.632Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2345
[2026-02-05T10:23:16.637Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:16.637Z] [BOT] 💾 AFTER MERGE: 2345 jobs (merged disk + memory)
[2026-02-05T10:23:16.639Z] [BOT] ✅ No jobs to archive (all 2345 jobs within 7-day window)
[2026-02-05T10:23:16.776Z] [BOT] 💾 Saved posted_jobs.json: 2345 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:18.858Z] [BOT] ✅ Posted message: Software Engineer III - Fullstack @ ORG_3eab285c in #🌉・JID_739bbc0b
[2026-02-05T10:23:18.858Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T10:23:18.859Z] [BOT] 💾 Added channel posting: Software Engineer III - Fullstack @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T10:23:18.859Z] [BOT] 💾 BEFORE MERGE: 2345 jobs in memory (cached)
[2026-02-05T10:23:18.927Z] [BOT] ✅ Loaded V2 database: 2345 jobs
💾 DISK STATE: 2345 jobs on disk
[2026-02-05T10:23:18.928Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2345
[2026-02-05T10:23:18.933Z] [BOT] 🔀 Deep merged: Software Engineer III - Fullstack @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T10:23:18.934Z] [BOT] 💾 AFTER MERGE: 2345 jobs (merged disk + memory)
[2026-02-05T10:23:18.935Z] [BOT] ✅ No jobs to archive (all 2345 jobs within 7-day window)
[2026-02-05T10:23:19.069Z] [BOT] 💾 Saved posted_jobs.json: 2345 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:20.571Z] [BOT] 📍 [ROUTING] "Junior Software Developer" @ ORG_8a194a36
   Category: AI (matched: "machine learning")
[2026-02-05T10:23:20.571Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T10:23:20.828Z] [BOT] ✅ Posted message: Junior Software Developer @ ORG_8a194a36 in #🤖・ai-jobs
[2026-02-05T10:23:20.828Z] [BOT] ✅ Industry: Junior Software Developer @ ORG_8a194a36
[2026-02-05T10:23:20.829Z] [BOT] 💾 Added channel posting: Junior Software Developer @ ORG_8a194a36 → category channel (1 total channels)
[2026-02-05T10:23:20.829Z] [BOT] 💾 BEFORE MERGE: 2346 jobs in memory (cached)
[2026-02-05T10:23:20.887Z] [BOT] ✅ Loaded V2 database: 2345 jobs
💾 DISK STATE: 2345 jobs on disk
[2026-02-05T10:23:20.888Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2346
[2026-02-05T10:23:20.893Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:20.893Z] [BOT] 💾 AFTER MERGE: 2346 jobs (merged disk + memory)
[2026-02-05T10:23:20.894Z] [BOT] ✅ No jobs to archive (all 2346 jobs within 7-day window)
[2026-02-05T10:23:21.027Z] [BOT] 💾 Saved posted_jobs.json: 2346 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:24.356Z] [BOT] ✅ Posted message: Junior Software Developer @ ORG_8a194a36 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T10:23:24.357Z] [BOT] 💾 Added channel posting: Junior Software Developer @ ORG_8a194a36 → location channel (2 total channels)
[2026-02-05T10:23:24.357Z] [BOT] 💾 BEFORE MERGE: 2346 jobs in memory (cached)
[2026-02-05T10:23:24.416Z] [BOT] ✅ Loaded V2 database: 2346 jobs
💾 DISK STATE: 2346 jobs on disk
[2026-02-05T10:23:24.416Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2346
[2026-02-05T10:23:24.421Z] [BOT] 🔀 Deep merged: Junior Software Developer @ ORG_8a194a36 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T10:23:24.421Z] [BOT] 💾 AFTER MERGE: 2346 jobs (merged disk + memory)
[2026-02-05T10:23:24.423Z] [BOT] ✅ No jobs to archive (all 2346 jobs within 7-day window)
[2026-02-05T10:23:24.573Z] [BOT] 💾 Saved posted_jobs.json: 2346 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:26.074Z] [BOT] 📍 [ROUTING] "Software Engineer - C++" @ ORG_3507fe20
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-02-05T10:23:26.074Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T10:23:26.432Z] [BOT] ✅ Posted message: Software Engineer - C++ @ ORG_3507fe20 in #🤖・ai-jobs
[2026-02-05T10:23:26.432Z] [BOT] ✅ Industry: Software Engineer - C++ @ ORG_3507fe20
[2026-02-05T10:23:26.434Z] [BOT] 💾 Added channel posting: Software Engineer - C++ @ ORG_3507fe20 → category channel (1 total channels)
[2026-02-05T10:23:26.434Z] [BOT] 💾 BEFORE MERGE: 2347 jobs in memory (cached)
[2026-02-05T10:23:26.490Z] [BOT] ✅ Loaded V2 database: 2346 jobs
💾 DISK STATE: 2346 jobs on disk
[2026-02-05T10:23:26.491Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2347
[2026-02-05T10:23:26.496Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:26.496Z] [BOT] 💾 AFTER MERGE: 2347 jobs (merged disk + memory)
[2026-02-05T10:23:26.497Z] [BOT] ✅ No jobs to archive (all 2347 jobs within 7-day window)
[2026-02-05T10:23:26.623Z] [BOT] 💾 Saved posted_jobs.json: 2347 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:28.376Z] [BOT] ✅ Posted message: Software Engineer - C++ @ ORG_3507fe20 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T10:23:28.377Z] [BOT] 💾 Added channel posting: Software Engineer - C++ @ ORG_3507fe20 → location channel (2 total channels)
[2026-02-05T10:23:28.377Z] [BOT] 💾 BEFORE MERGE: 2347 jobs in memory (cached)
[2026-02-05T10:23:28.437Z] [BOT] ✅ Loaded V2 database: 2347 jobs
💾 DISK STATE: 2347 jobs on disk
[2026-02-05T10:23:28.437Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2347
[2026-02-05T10:23:28.441Z] [BOT] 🔀 Deep merged: Software Engineer - C++ @ ORG_3507fe20 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T10:23:28.441Z] [BOT] 💾 AFTER MERGE: 2347 jobs (merged disk + memory)
[2026-02-05T10:23:28.443Z] [BOT] ✅ No jobs to archive (all 2347 jobs within 7-day window)
[2026-02-05T10:23:28.580Z] [BOT] 💾 Saved posted_jobs.json: 2347 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:33.082Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-02-05T10:23:33.084Z] [BOT] 📍 [ROUTING] "Software Engineer III, Operations Technology" @ ORG_ec7d56a0 Origin
   Category: TECH (matched: "software")
[2026-02-05T10:23:33.084Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T10:23:33.337Z] [BOT] ✅ Posted message: Software Engineer III, Operations Technology @ ORG_ec7d56a0 Origin in #💻・tech-jobs
[2026-02-05T10:23:33.337Z] [BOT] ✅ Industry: Software Engineer III, Operations Technology @ ORG_ec7d56a0 Origin
[2026-02-05T10:23:33.338Z] [BOT] 💾 Added channel posting: Software Engineer III, Operations Technology @ ORG_ec7d56a0 Origin → category channel (1 total channels)
[2026-02-05T10:23:33.338Z] [BOT] 💾 BEFORE MERGE: 2348 jobs in memory (cached)
[2026-02-05T10:23:33.396Z] [BOT] ✅ Loaded V2 database: 2347 jobs
💾 DISK STATE: 2347 jobs on disk
[2026-02-05T10:23:33.397Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2348
[2026-02-05T10:23:33.401Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:33.401Z] [BOT] 💾 AFTER MERGE: 2348 jobs (merged disk + memory)
[2026-02-05T10:23:33.403Z] [BOT] ✅ No jobs to archive (all 2348 jobs within 7-day window)
[2026-02-05T10:23:33.539Z] [BOT] 💾 Saved posted_jobs.json: 2348 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:35.041Z] [BOT] 📍 [ROUTING] "Software Engineer Java" @ ORG_1aa4f3d6 Motor Company
   Category: TECH (matched: "software")
[2026-02-05T10:23:35.041Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T10:23:35.276Z] [BOT] ✅ Posted message: Software Engineer Java @ ORG_1aa4f3d6 Motor Company in #💻・tech-jobs
  ✅ Industry: Software Engineer Java @ ORG_1aa4f3d6 Motor Company
[2026-02-05T10:23:35.277Z] [BOT] 💾 Added channel posting: Software Engineer Java @ ORG_1aa4f3d6 Motor Company → category channel (1 total channels)
[2026-02-05T10:23:35.278Z] [BOT] 💾 BEFORE MERGE: 2349 jobs in memory (cached)
[2026-02-05T10:23:35.334Z] [BOT] ✅ Loaded V2 database: 2348 jobs
💾 DISK STATE: 2348 jobs on disk
[2026-02-05T10:23:35.334Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2349
[2026-02-05T10:23:35.339Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:35.339Z] [BOT] 💾 AFTER MERGE: 2349 jobs (merged disk + memory)
[2026-02-05T10:23:35.340Z] [BOT] ✅ No jobs to archive (all 2349 jobs within 7-day window)
[2026-02-05T10:23:35.468Z] [BOT] 💾 Saved posted_jobs.json: 2349 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:37.223Z] [BOT] ✅ Posted message: Software Engineer Java @ ORG_1aa4f3d6 Motor Company in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T10:23:37.223Z] [BOT] 💾 Added channel posting: Software Engineer Java @ ORG_1aa4f3d6 Motor Company → location channel (2 total channels)
[2026-02-05T10:23:37.223Z] [BOT] 💾 BEFORE MERGE: 2349 jobs in memory (cached)
[2026-02-05T10:23:37.281Z] [BOT] ✅ Loaded V2 database: 2349 jobs
💾 DISK STATE: 2349 jobs on disk
[2026-02-05T10:23:37.282Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2349
[2026-02-05T10:23:37.286Z] [BOT] 🔀 Deep merged: Software Engineer Java @ ORG_1aa4f3d6 Motor Company (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T10:23:37.286Z] [BOT] 💾 AFTER MERGE: 2349 jobs (merged disk + memory)
[2026-02-05T10:23:37.287Z] [BOT] ✅ No jobs to archive (all 2349 jobs within 7-day window)
[2026-02-05T10:23:37.419Z] [BOT] 💾 Saved posted_jobs.json: 2349 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:38.922Z] [BOT] 📍 [ROUTING] "Backend Java, Spring, Springboot, Hibernate, Rest/Soap Engineer" @ ORG_3eab285c
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T10:23:39.285Z] [BOT] ✅ Posted message: Backend Java, Spring, Springboot, Hibernate, Rest/Soap Engineer @ ORG_3eab285c in #💻・tech-jobs
[2026-02-05T10:23:39.285Z] [BOT] ✅ Industry: Backend Java, Spring, Springboot, Hibernate, Rest/Soap Engineer @ ORG_3eab285c
[2026-02-05T10:23:39.286Z] [BOT] 💾 Added channel posting: Backend Java, Spring, Springboot, Hibernate, Rest/Soap Engineer @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T10:23:39.286Z] [BOT] 💾 BEFORE MERGE: 2350 jobs in memory (cached)
[2026-02-05T10:23:39.345Z] [BOT] ✅ Loaded V2 database: 2349 jobs
💾 DISK STATE: 2349 jobs on disk
[2026-02-05T10:23:39.346Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2350
[2026-02-05T10:23:39.350Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:39.350Z] [BOT] 💾 AFTER MERGE: 2350 jobs (merged disk + memory)
[2026-02-05T10:23:39.351Z] [BOT] ✅ No jobs to archive (all 2350 jobs within 7-day window)
[2026-02-05T10:23:39.495Z] [BOT] 💾 Saved posted_jobs.json: 2350 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:40.996Z] [BOT] 📍 [ROUTING] "(USA) Software Engineer III (Full Stack)" @ ORG_3eab285c
[2026-02-05T10:23:40.997Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T10:23:41.272Z] [BOT] ✅ Posted message: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c in #💻・tech-jobs
[2026-02-05T10:23:41.273Z] [BOT] ✅ Industry: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c
[2026-02-05T10:23:41.273Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T10:23:41.274Z] [BOT] 💾 BEFORE MERGE: 2351 jobs in memory (cached)
[2026-02-05T10:23:41.330Z] [BOT] ✅ Loaded V2 database: 2350 jobs
💾 DISK STATE: 2350 jobs on disk
[2026-02-05T10:23:41.330Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2351
[2026-02-05T10:23:41.334Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:41.335Z] [BOT] 💾 AFTER MERGE: 2351 jobs (merged disk + memory)
[2026-02-05T10:23:41.336Z] [BOT] ✅ No jobs to archive (all 2351 jobs within 7-day window)
[2026-02-05T10:23:41.461Z] [BOT] 💾 Saved posted_jobs.json: 2351 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:44.191Z] [BOT] ✅ Posted message: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c in #🌉・JID_739bbc0b
[2026-02-05T10:23:44.191Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T10:23:44.192Z] [BOT] 💾 Added channel posting: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T10:23:44.192Z] [BOT] 💾 BEFORE MERGE: 2351 jobs in memory (cached)
[2026-02-05T10:23:44.252Z] [BOT] ✅ Loaded V2 database: 2351 jobs
💾 DISK STATE: 2351 jobs on disk
[2026-02-05T10:23:44.253Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2351
[2026-02-05T10:23:44.257Z] [BOT] 🔀 Deep merged: (USA) Software Engineer III (Full Stack) @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T10:23:44.257Z] [BOT] 💾 AFTER MERGE: 2351 jobs (merged disk + memory)
[2026-02-05T10:23:44.258Z] [BOT] ✅ No jobs to archive (all 2351 jobs within 7-day window)
[2026-02-05T10:23:44.388Z] [BOT] 💾 Saved posted_jobs.json: 2351 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:45.889Z] [BOT] 📍 [ROUTING] "AEGIS MISSILE SOFTWARE ENGINEER" @ ORG_1c075f99
[2026-02-05T10:23:45.889Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T10:23:46.073Z] [BOT] ✅ Posted message: AEGIS MISSILE SOFTWARE ENGINEER @ ORG_1c075f99 in #💻・tech-jobs
[2026-02-05T10:23:46.073Z] [BOT] ✅ Industry: AEGIS MISSILE SOFTWARE ENGINEER @ ORG_1c075f99
[2026-02-05T10:23:46.074Z] [BOT] 💾 Added channel posting: AEGIS MISSILE SOFTWARE ENGINEER @ ORG_1c075f99 → category channel (1 total channels)
💾 BEFORE MERGE: 2352 jobs in memory (cached)
[2026-02-05T10:23:46.148Z] [BOT] ✅ Loaded V2 database: 2351 jobs
💾 DISK STATE: 2351 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2352
[2026-02-05T10:23:46.154Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:46.155Z] [BOT] 💾 AFTER MERGE: 2352 jobs (merged disk + memory)
[2026-02-05T10:23:46.156Z] [BOT] ✅ No jobs to archive (all 2352 jobs within 7-day window)
[2026-02-05T10:23:46.283Z] [BOT] 💾 Saved posted_jobs.json: 2352 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:48.007Z] [BOT] ✅ Posted message: AEGIS MISSILE SOFTWARE ENGINEER @ ORG_1c075f99 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T10:23:48.007Z] [BOT] 💾 Added channel posting: AEGIS MISSILE SOFTWARE ENGINEER @ ORG_1c075f99 → location channel (2 total channels)
[2026-02-05T10:23:48.007Z] [BOT] 💾 BEFORE MERGE: 2352 jobs in memory (cached)
[2026-02-05T10:23:48.067Z] [BOT] ✅ Loaded V2 database: 2352 jobs
💾 DISK STATE: 2352 jobs on disk
[2026-02-05T10:23:48.068Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2352
[2026-02-05T10:23:48.072Z] [BOT] 🔀 Deep merged: AEGIS MISSILE SOFTWARE ENGINEER @ ORG_1c075f99 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T10:23:48.072Z] [BOT] 💾 AFTER MERGE: 2352 jobs (merged disk + memory)
[2026-02-05T10:23:48.073Z] [BOT] ✅ No jobs to archive (all 2352 jobs within 7-day window)
[2026-02-05T10:23:48.205Z] [BOT] 💾 Saved posted_jobs.json: 2352 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:52.706Z] [BOT] 📌 Posting 2 jobs to #📊・JID_fb739488
[2026-02-05T10:23:52.708Z] [BOT] 📍 [ROUTING] "Java, Javascript, Python, NodeJS Software Engineer" @ ORG_3eab285c
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-05T10:23:52.708Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T10:23:52.995Z] [BOT] ✅ Posted message: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c in #📊・JID_fb739488
[2026-02-05T10:23:52.996Z] [BOT] ✅ Industry: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c
[2026-02-05T10:23:52.996Z] [BOT] 💾 Added channel posting: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T10:23:52.997Z] [BOT] 💾 BEFORE MERGE: 2353 jobs in memory (cached)
[2026-02-05T10:23:53.056Z] [BOT] ✅ Loaded V2 database: 2352 jobs
💾 DISK STATE: 2352 jobs on disk
[2026-02-05T10:23:53.057Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2353
[2026-02-05T10:23:53.061Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:53.062Z] [BOT] 💾 AFTER MERGE: 2353 jobs (merged disk + memory)
[2026-02-05T10:23:53.063Z] [BOT] ✅ No jobs to archive (all 2353 jobs within 7-day window)
[2026-02-05T10:23:53.196Z] [BOT] 💾 Saved posted_jobs.json: 2353 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:54.902Z] [BOT] ✅ Posted message: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T10:23:54.903Z] [BOT] 💾 Added channel posting: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T10:23:54.903Z] [BOT] 💾 BEFORE MERGE: 2353 jobs in memory (cached)
[2026-02-05T10:23:54.964Z] [BOT] ✅ Loaded V2 database: 2353 jobs
💾 DISK STATE: 2353 jobs on disk
[2026-02-05T10:23:54.965Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2353
[2026-02-05T10:23:54.969Z] [BOT] 🔀 Deep merged: Java, Javascript, Python, NodeJS Software Engineer @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
[2026-02-05T10:23:54.969Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2353 jobs (merged disk + memory)
[2026-02-05T10:23:54.970Z] [BOT] ✅ No jobs to archive (all 2353 jobs within 7-day window)
[2026-02-05T10:23:55.115Z] [BOT] 💾 Saved posted_jobs.json: 2353 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:56.616Z] [BOT] 📍 [ROUTING] "Software Engineer - Android" @ ORG_3eab285c
[2026-02-05T10:23:56.616Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T10:23:56.775Z] [BOT] ✅ Posted message: Software Engineer - Android @ ORG_3eab285c in #📊・JID_fb739488
  ✅ Industry: Software Engineer - Android @ ORG_3eab285c
[2026-02-05T10:23:56.776Z] [BOT] 💾 Added channel posting: Software Engineer - Android @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T10:23:56.776Z] [BOT] 💾 BEFORE MERGE: 2354 jobs in memory (cached)
[2026-02-05T10:23:56.834Z] [BOT] ✅ Loaded V2 database: 2353 jobs
💾 DISK STATE: 2353 jobs on disk
[2026-02-05T10:23:56.834Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2354
[2026-02-05T10:23:56.838Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:23:56.838Z] [BOT] 💾 AFTER MERGE: 2354 jobs (merged disk + memory)
[2026-02-05T10:23:56.840Z] [BOT] ✅ No jobs to archive (all 2354 jobs within 7-day window)
[2026-02-05T10:23:56.968Z] [BOT] 💾 Saved posted_jobs.json: 2354 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:23:58.732Z] [BOT] ✅ Posted message: Software Engineer - Android @ ORG_3eab285c in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T10:23:58.733Z] [BOT] 💾 Added channel posting: Software Engineer - Android @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T10:23:58.733Z] [BOT] 💾 BEFORE MERGE: 2354 jobs in memory (cached)
[2026-02-05T10:23:58.793Z] [BOT] ✅ Loaded V2 database: 2354 jobs
💾 DISK STATE: 2354 jobs on disk
[2026-02-05T10:23:58.793Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2354
[2026-02-05T10:23:58.797Z] [BOT] 🔀 Deep merged: Software Engineer - Android @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T10:23:58.797Z] [BOT] 💾 AFTER MERGE: 2354 jobs (merged disk + memory)
[2026-02-05T10:23:58.799Z] [BOT] ✅ No jobs to archive (all 2354 jobs within 7-day window)
[2026-02-05T10:23:58.944Z] [BOT] 💾 Saved posted_jobs.json: 2354 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:24:03.443Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T10:24:03.444Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "9739217eb7812aba"
[2026-02-05T10:24:03.444Z] [BOT] ⏭️  Skipping duplicate: JID_e37f42b0 (posted within 7 days)
[2026-02-05T10:24:03.445Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "770484038e5d5460"
⏭️  Skipping duplicate: JID_516ee0a7 (posted within 7 days)
[2026-02-05T10:24:03.445Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_41a2ed3b..." not found, but found as SHA256 "520dfc64dd8dcedc"
[2026-02-05T10:24:03.445Z] [BOT] ⏭️  Skipping duplicate: JID_b7cdee6f (posted within 7 days)
[2026-02-05T10:24:03.446Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_300d6d06..." not found, but found as SHA256 "e2db3db1d0095fcd"
[2026-02-05T10:24:03.446Z] [BOT] ⏭️  Skipping duplicate: JID_9795c953 (posted within 7 days)
[2026-02-05T10:24:03.446Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3002f179..." not found, but found as SHA256 "0bc8435347a81976"
[2026-02-05T10:24:03.446Z] [BOT] ⏭️  Skipping duplicate: JID_86e05799 (posted within 7 days)
[2026-02-05T10:24:03.446Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_48a05a6b..." not found, but found as SHA256 "bb18e666f6c94546"
[2026-02-05T10:24:03.446Z] [BOT] ⏭️  Skipping duplicate: JID_ed661735 (posted within 7 days)
[2026-02-05T10:24:03.447Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_64408f60..." not found, but found as SHA256 "fa0012a9a448a002"
[2026-02-05T10:24:03.447Z] [BOT] ⏭️  Skipping duplicate: JID_221a8493 (posted within 7 days)
[2026-02-05T10:24:03.447Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_53829ea4..." not found, but found as SHA256 "9d1436584709fa34"
[2026-02-05T10:24:03.447Z] [BOT] ⏭️  Skipping duplicate: JID_ce09e507 (posted within 7 days)
[2026-02-05T10:24:03.447Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_7d526783-..." not found, but found as SHA256 "30219f4c038625e0"
[2026-02-05T10:24:03.447Z] [BOT] ⏭️  Skipping duplicate: JID_71a6ecfd (posted within 7 days)
[2026-02-05T10:24:03.448Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "f41f7350593c18bb"
[2026-02-05T10:24:03.448Z] [BOT] ⏭️  Skipping duplicate: JID_f159979c (posted within 7 days)
[2026-02-05T10:24:03.449Z] [BOT] ✅ Loaded pending queue: 17 total (0 pending, 17 enriched, 0 posted)
[2026-02-05T10:24:03.451Z] [BOT] ✅ Saved pending queue: 17 total (0 pending, 7 enriched, 10 posted)
[2026-02-05T10:24:03.451Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T10:24:03.555Z] [BOT] 📂 Loaded 12435 existing routing entries
[2026-02-05T10:24:03.679Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 12445
   Timestamp: 2026-02-05T10:24:03.634Z
[2026-02-05T10:24:03.680Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T10:24:03.680Z] [BOT] Total attempts: 22
   Successful: 18
   Failed: 0
   Skipped: 4
[2026-02-05T10:24:03.680Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
[2026-02-05T10:24:03.680Z] [BOT] Top channels:
     1. #📍・JID_6daed763: 5 posts
     2. #💻・tech-jobs: 5 posts
     3. #🤖・ai-jobs: 3 posts
[2026-02-05T10:24:03.680Z] [BOT] 4. #🌉・JID_739bbc0b: 2 posts
     5. #📊・JID_fb739488: 2 posts
[2026-02-05T10:24:03.680Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
[2026-02-05T10:24:03.680Z] [BOT] 💾 BEFORE MERGE: 2354 jobs in memory (cached)
[2026-02-05T10:24:03.741Z] [BOT] ✅ Loaded V2 database: 2354 jobs
💾 DISK STATE: 2354 jobs on disk
[2026-02-05T10:24:03.741Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2354
[2026-02-05T10:24:03.745Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:24:03.745Z] [BOT] 💾 AFTER MERGE: 2354 jobs (merged disk + memory)
[2026-02-05T10:24:03.747Z] [BOT] ✅ No jobs to archive (all 2354 jobs within 7-day window)
[2026-02-05T10:24:03.889Z] [BOT] 💾 Saved posted_jobs.json: 2354 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T10:24:05.902Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*