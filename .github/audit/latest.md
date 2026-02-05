# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T09:55:01.681Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T09:54:14.843Z] ========================================
[2026-02-05T09:54:14.845Z] Discord Bot Execution Log
[2026-02-05T09:54:14.845Z] Environment: GitHub Actions
[2026-02-05T09:54:14.845Z] Node Version: v20.20.0
[2026-02-05T09:54:14.845Z] ========================================
[2026-02-05T09:54:14.845Z] Environment Variables Check:
[2026-02-05T09:54:14.845Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T09:54:14.846Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T09:54:14.846Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T09:54:14.846Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T09:54:14.846Z] 
Multi-Channel Configuration:
[2026-02-05T09:54:14.846Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T09:54:14.846Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:54:14.846Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:54:14.846Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T09:54:14.846Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:54:14.846Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:54:14.846Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:54:14.846Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:54:14.847Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:54:14.847Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T09:54:14.847Z] 
Data Files Check:
[2026-02-05T09:54:14.848Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94461 bytes)
[2026-02-05T09:54:14.908Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11915971 bytes)
[2026-02-05T09:54:14.908Z] 
========================================
[2026-02-05T09:54:14.908Z] Starting Enhanced Discord Bot...
[2026-02-05T09:54:14.908Z] ========================================
[2026-02-05T09:54:15.506Z] [BOT] ✅ Loaded V2 database: 2334 jobs
[2026-02-05T09:54:16.090Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T09:54:16.091Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T09:54:16.091Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T09:54:16.092Z] [BOT] ✅ Loaded pending queue: 27 total (0 pending, 27 enriched, 0 posted)
[2026-02-05T09:54:16.092Z] [BOT] [BOT] 📬 Found 27 enriched jobs ready to post from pending queue
[2026-02-05T09:54:16.093Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T09:54:16.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T09:54:16.094Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T09:54:16.094Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T09:54:16.095Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T09:54:16.095Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T09:54:16.096Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T09:54:16.106Z] [BOT] 📬 Found 23 new jobs (4 already posted)...
[2026-02-05T09:54:16.106Z] [BOT] 📋 After blacklist filter: 23 jobs (0 blacklisted)
[2026-02-05T09:54:16.106Z] [BOT] 📋 After data quality filter: 23 jobs (0 invalid)
[2026-02-05T09:54:16.107Z] [BOT] 📋 After multi-location grouping: 22 unique jobs to post
[2026-02-05T09:54:16.107Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer III - Fullstack @ Walmart: fayetteville, elm springs
⏸️ Limiting to 10 jobs this run, 13 deferred for next run
[2026-02-05T09:54:16.107Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T09:54:16.110Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-02-05T09:54:16.111Z] [BOT] 📍 [ROUTING] "Junior Software Engineer (Recent Grads) - Enterprise AI Model Company" @ ORG_0abb2dbb
[2026-02-05T09:54:16.111Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:54:16.128Z] [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T09:54:16.596Z] [BOT] ✅ Posted message: Junior Software Engineer (Recent Grads) - Enterprise AI Model Company @ ORG_0abb2dbb in #💻・tech-jobs
[2026-02-05T09:54:16.596Z] [BOT] ✅ Industry: Junior Software Engineer (Recent Grads) - Enterprise AI Model Company @ ORG_0abb2dbb
[2026-02-05T09:54:16.597Z] [BOT] 💾 Added channel posting: Junior Software Engineer (Recent Grads) - Enterprise AI Model Company @ ORG_0abb2dbb → category channel (1 total channels)
[2026-02-05T09:54:16.598Z] [BOT] 💾 BEFORE MERGE: 2335 jobs in memory (cached)
[2026-02-05T09:54:16.649Z] [BOT] ✅ Loaded V2 database: 2334 jobs
💾 DISK STATE: 2334 jobs on disk
[2026-02-05T09:54:16.650Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2335
[2026-02-05T09:54:16.655Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:16.655Z] [BOT] 💾 AFTER MERGE: 2335 jobs (merged disk + memory)
[2026-02-05T09:54:16.657Z] [BOT] ✅ No jobs to archive (all 2335 jobs within 7-day window)
[2026-02-05T09:54:16.940Z] [BOT] 💾 Saved posted_jobs.json: 2335 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:18.679Z] [BOT] ✅ Posted message: Junior Software Engineer (Recent Grads) - Enterprise AI Model Company @ ORG_0abb2dbb in #🌉・JID_739bbc0b
[2026-02-05T09:54:18.679Z] [BOT] ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T09:54:18.679Z] [BOT] 💾 Added channel posting: Junior Software Engineer (Recent Grads) - Enterprise AI Model Company @ ORG_0abb2dbb → location channel (2 total channels)
[2026-02-05T09:54:18.679Z] [BOT] 💾 BEFORE MERGE: 2335 jobs in memory (cached)
[2026-02-05T09:54:18.729Z] [BOT] ✅ Loaded V2 database: 2335 jobs
💾 DISK STATE: 2335 jobs on disk
[2026-02-05T09:54:18.730Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2335
[2026-02-05T09:54:18.735Z] [BOT] 🔀 Deep merged: Junior Software Engineer (Recent Grads) - Enterprise AI Model Company @ ORG_0abb2dbb (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:54:18.735Z] [BOT] 💾 AFTER MERGE: 2335 jobs (merged disk + memory)
[2026-02-05T09:54:18.737Z] [BOT] ✅ No jobs to archive (all 2335 jobs within 7-day window)
[2026-02-05T09:54:18.854Z] [BOT] 💾 Saved posted_jobs.json: 2335 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:20.355Z] [BOT] 📍 [ROUTING] "Software Engineer (Entry-Level) Recent Grad" @ ORG_1cfcce6f
[2026-02-05T09:54:20.356Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:54:20.654Z] [BOT] ✅ Posted message: Software Engineer (Entry-Level) Recent Grad @ ORG_1cfcce6f in #💻・tech-jobs
[2026-02-05T09:54:20.654Z] [BOT] ✅ Industry: Software Engineer (Entry-Level) Recent Grad @ ORG_1cfcce6f
[2026-02-05T09:54:20.655Z] [BOT] 💾 Added channel posting: Software Engineer (Entry-Level) Recent Grad @ ORG_1cfcce6f → category channel (1 total channels)
[2026-02-05T09:54:20.655Z] [BOT] 💾 BEFORE MERGE: 2336 jobs in memory (cached)
[2026-02-05T09:54:20.696Z] [BOT] ✅ Loaded V2 database: 2335 jobs
💾 DISK STATE: 2335 jobs on disk
[2026-02-05T09:54:20.697Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2336
[2026-02-05T09:54:20.702Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:20.702Z] [BOT] 💾 AFTER MERGE: 2336 jobs (merged disk + memory)
[2026-02-05T09:54:20.703Z] [BOT] ✅ No jobs to archive (all 2336 jobs within 7-day window)
[2026-02-05T09:54:20.822Z] [BOT] 💾 Saved posted_jobs.json: 2336 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:22.659Z] [BOT] ✅ Posted message: Software Engineer (Entry-Level) Recent Grad @ ORG_1cfcce6f in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T09:54:22.659Z] [BOT] 💾 Added channel posting: Software Engineer (Entry-Level) Recent Grad @ ORG_1cfcce6f → location channel (2 total channels)
[2026-02-05T09:54:22.660Z] [BOT] 💾 BEFORE MERGE: 2336 jobs in memory (cached)
[2026-02-05T09:54:22.702Z] [BOT] ✅ Loaded V2 database: 2336 jobs
💾 DISK STATE: 2336 jobs on disk
[2026-02-05T09:54:22.703Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2336
[2026-02-05T09:54:22.708Z] [BOT] 🔀 Deep merged: Software Engineer (Entry-Level) Recent Grad @ ORG_1cfcce6f (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:54:22.708Z] [BOT] 💾 AFTER MERGE: 2336 jobs (merged disk + memory)
[2026-02-05T09:54:22.709Z] [BOT] ✅ No jobs to archive (all 2336 jobs within 7-day window)
[2026-02-05T09:54:22.836Z] [BOT] 💾 Saved posted_jobs.json: 2336 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:24.339Z] [BOT] 📍 [ROUTING] "2026 New-Grad Entry Level Engineer Rotation Program (California/CCTP)" @ ORG_53659002
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:54:24.537Z] [BOT] ✅ Posted message: 2026 New-Grad Entry Level Engineer Rotation Program (California/CCTP) @ ORG_53659002 in #💻・tech-jobs
  ✅ Industry: 2026 New-Grad Entry Level Engineer Rotation Program (California/CCTP) @ ORG_53659002
[2026-02-05T09:54:24.538Z] [BOT] 💾 Added channel posting: 2026 New-Grad Entry Level Engineer Rotation Program (California/CCTP) @ ORG_53659002 → category channel (1 total channels)
[2026-02-05T09:54:24.538Z] [BOT] 💾 BEFORE MERGE: 2337 jobs in memory (cached)
[2026-02-05T09:54:24.577Z] [BOT] ✅ Loaded V2 database: 2336 jobs
💾 DISK STATE: 2336 jobs on disk
[2026-02-05T09:54:24.578Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2337
[2026-02-05T09:54:24.585Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:24.585Z] [BOT] 💾 AFTER MERGE: 2337 jobs (merged disk + memory)
[2026-02-05T09:54:24.587Z] [BOT] ✅ No jobs to archive (all 2337 jobs within 7-day window)
[2026-02-05T09:54:24.699Z] [BOT] 💾 Saved posted_jobs.json: 2337 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:26.379Z] [BOT] ✅ Posted message: 2026 New-Grad Entry Level Engineer Rotation Program (California/CCTP) @ ORG_53659002 in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T09:54:26.380Z] [BOT] 💾 Added channel posting: 2026 New-Grad Entry Level Engineer Rotation Program (California/CCTP) @ ORG_53659002 → location channel (2 total channels)
[2026-02-05T09:54:26.380Z] [BOT] 💾 BEFORE MERGE: 2337 jobs in memory (cached)
[2026-02-05T09:54:26.424Z] [BOT] ✅ Loaded V2 database: 2337 jobs
💾 DISK STATE: 2337 jobs on disk
[2026-02-05T09:54:26.424Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2337
[2026-02-05T09:54:26.428Z] [BOT] 🔀 Deep merged: 2026 New-Grad Entry Level Engineer Rotation Program (California/CCTP) @ ORG_53659002 (disk: 1 channels → merged: 2 channels)
[2026-02-05T09:54:26.428Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2337 jobs (merged disk + memory)
[2026-02-05T09:54:26.430Z] [BOT] ✅ No jobs to archive (all 2337 jobs within 7-day window)
[2026-02-05T09:54:26.560Z] [BOT] 💾 Saved posted_jobs.json: 2337 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:28.059Z] [BOT] 📍 [ROUTING] "Network Savy CNO-Developer" @ ORG_20cae92a Technologies
   Category: TECH (matched: "software")
[2026-02-05T09:54:28.059Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:54:28.621Z] [BOT] ✅ Posted message: Network Savy CNO-Developer @ ORG_20cae92a Technologies in #💻・tech-jobs
[2026-02-05T09:54:28.621Z] [BOT] ✅ Industry: Network Savy CNO-Developer @ ORG_20cae92a Technologies
[2026-02-05T09:54:28.622Z] [BOT] 💾 Added channel posting: Network Savy CNO-Developer @ ORG_20cae92a Technologies → category channel (1 total channels)
[2026-02-05T09:54:28.622Z] [BOT] 💾 BEFORE MERGE: 2338 jobs in memory (cached)
[2026-02-05T09:54:28.661Z] [BOT] ✅ Loaded V2 database: 2337 jobs
💾 DISK STATE: 2337 jobs on disk
[2026-02-05T09:54:28.661Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2338
[2026-02-05T09:54:28.666Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:28.666Z] [BOT] 💾 AFTER MERGE: 2338 jobs (merged disk + memory)
[2026-02-05T09:54:28.668Z] [BOT] ✅ No jobs to archive (all 2338 jobs within 7-day window)
[2026-02-05T09:54:28.793Z] [BOT] 💾 Saved posted_jobs.json: 2338 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:30.516Z] [BOT] ✅ Posted message: Network Savy CNO-Developer @ ORG_20cae92a Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T09:54:30.517Z] [BOT] 💾 Added channel posting: Network Savy CNO-Developer @ ORG_20cae92a Technologies → location channel (2 total channels)
[2026-02-05T09:54:30.517Z] [BOT] 💾 BEFORE MERGE: 2338 jobs in memory (cached)
[2026-02-05T09:54:30.558Z] [BOT] ✅ Loaded V2 database: 2338 jobs
💾 DISK STATE: 2338 jobs on disk
[2026-02-05T09:54:30.559Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2338
[2026-02-05T09:54:30.563Z] [BOT] 🔀 Deep merged: Network Savy CNO-Developer @ ORG_20cae92a Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-05T09:54:30.563Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2338 jobs (merged disk + memory)
[2026-02-05T09:54:30.565Z] [BOT] ✅ No jobs to archive (all 2338 jobs within 7-day window)
[2026-02-05T09:54:30.698Z] [BOT] 💾 Saved posted_jobs.json: 2338 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:32.197Z] [BOT] 📍 [ROUTING] "Software Engineer- Technology Services - 8 Hours" @ ORG_68d3d1d0 Unified School District
   Category: TECH (matched: "software")
[2026-02-05T09:54:32.197Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:54:32.562Z] [BOT] ✅ Posted message: Software Engineer- Technology Services - 8 Hours @ ORG_68d3d1d0 Unified School District in #💻・tech-jobs
  ✅ Industry: Software Engineer- Technology Services - 8 Hours @ ORG_68d3d1d0 Unified School District
[2026-02-05T09:54:32.563Z] [BOT] 💾 Added channel posting: Software Engineer- Technology Services - 8 Hours @ ORG_68d3d1d0 Unified School District → category channel (1 total channels)
[2026-02-05T09:54:32.563Z] [BOT] 💾 BEFORE MERGE: 2339 jobs in memory (cached)
[2026-02-05T09:54:32.602Z] [BOT] ✅ Loaded V2 database: 2338 jobs
💾 DISK STATE: 2338 jobs on disk
[2026-02-05T09:54:32.603Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2339
[2026-02-05T09:54:32.608Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:32.608Z] [BOT] 💾 AFTER MERGE: 2339 jobs (merged disk + memory)
[2026-02-05T09:54:32.610Z] [BOT] ✅ No jobs to archive (all 2339 jobs within 7-day window)
[2026-02-05T09:54:32.741Z] [BOT] 💾 Saved posted_jobs.json: 2339 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:34.241Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Remote" @ ORG_292e10a5 Direct
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:54:34.483Z] [BOT] ✅ Posted message: Junior Software Developer - Remote @ ORG_292e10a5 Direct in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Remote @ ORG_292e10a5 Direct
[2026-02-05T09:54:34.484Z] [BOT] 💾 Added channel posting: Junior Software Developer - Remote @ ORG_292e10a5 Direct → category channel (1 total channels)
[2026-02-05T09:54:34.484Z] [BOT] 💾 BEFORE MERGE: 2340 jobs in memory (cached)
[2026-02-05T09:54:34.523Z] [BOT] ✅ Loaded V2 database: 2339 jobs
💾 DISK STATE: 2339 jobs on disk
[2026-02-05T09:54:34.523Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2340
[2026-02-05T09:54:34.527Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:34.527Z] [BOT] 💾 AFTER MERGE: 2340 jobs (merged disk + memory)
[2026-02-05T09:54:34.529Z] [BOT] ✅ No jobs to archive (all 2340 jobs within 7-day window)
[2026-02-05T09:54:34.657Z] [BOT] 💾 Saved posted_jobs.json: 2340 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:36.341Z] [BOT] ✅ Posted message: Junior Software Developer - Remote @ ORG_292e10a5 Direct in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-05T09:54:36.341Z] [BOT] 💾 Added channel posting: Junior Software Developer - Remote @ ORG_292e10a5 Direct → location channel (2 total channels)
[2026-02-05T09:54:36.342Z] [BOT] 💾 BEFORE MERGE: 2340 jobs in memory (cached)
[2026-02-05T09:54:36.394Z] [BOT] ✅ Loaded V2 database: 2340 jobs
💾 DISK STATE: 2340 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2340
[2026-02-05T09:54:36.398Z] [BOT] 🔀 Deep merged: Junior Software Developer - Remote @ ORG_292e10a5 Direct (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:54:36.398Z] [BOT] 💾 AFTER MERGE: 2340 jobs (merged disk + memory)
[2026-02-05T09:54:36.400Z] [BOT] ✅ No jobs to archive (all 2340 jobs within 7-day window)
[2026-02-05T09:54:36.517Z] [BOT] 💾 Saved posted_jobs.json: 2340 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:38.019Z] [BOT] 📍 [ROUTING] "Kafka Engineer" @ ORG_87a10fd1 Tech
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:54:38.217Z] [BOT] ✅ Posted message: Kafka Engineer @ ORG_87a10fd1 Tech in #💻・tech-jobs
  ✅ Industry: Kafka Engineer @ ORG_87a10fd1 Tech
[2026-02-05T09:54:38.218Z] [BOT] 💾 Added channel posting: Kafka Engineer @ ORG_87a10fd1 Tech → category channel (1 total channels)
💾 BEFORE MERGE: 2341 jobs in memory (cached)
[2026-02-05T09:54:38.277Z] [BOT] ✅ Loaded V2 database: 2340 jobs
💾 DISK STATE: 2340 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2341
[2026-02-05T09:54:38.279Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:38.279Z] [BOT] 💾 AFTER MERGE: 2341 jobs (merged disk + memory)
[2026-02-05T09:54:38.281Z] [BOT] ✅ No jobs to archive (all 2341 jobs within 7-day window)
[2026-02-05T09:54:38.388Z] [BOT] 💾 Saved posted_jobs.json: 2341 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:40.054Z] [BOT] ✅ Posted message: Kafka Engineer @ ORG_87a10fd1 Tech in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T09:54:40.055Z] [BOT] 💾 Added channel posting: Kafka Engineer @ ORG_87a10fd1 Tech → location channel (2 total channels)
[2026-02-05T09:54:40.055Z] [BOT] 💾 BEFORE MERGE: 2341 jobs in memory (cached)
[2026-02-05T09:54:40.098Z] [BOT] ✅ Loaded V2 database: 2341 jobs
💾 DISK STATE: 2341 jobs on disk
[2026-02-05T09:54:40.098Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2341
[2026-02-05T09:54:40.102Z] [BOT] 🔀 Deep merged: Kafka Engineer @ ORG_87a10fd1 Tech (disk: 1 channels → merged: 2 channels)
[2026-02-05T09:54:40.102Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2341 jobs (merged disk + memory)
[2026-02-05T09:54:40.104Z] [BOT] ✅ No jobs to archive (all 2341 jobs within 7-day window)
[2026-02-05T09:54:40.219Z] [BOT] 💾 Saved posted_jobs.json: 2341 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:44.721Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-02-05T09:54:44.723Z] [BOT] 📍 [ROUTING] "Software Engineer I - Open Distribution (New Grad)" @ ORG_a10ae009
   Category: AI (matched: "AI/ML")
[2026-02-05T09:54:44.723Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T09:54:45.106Z] [BOT] ✅ Posted message: Software Engineer I - Open Distribution (New Grad) @ ORG_a10ae009 in #🤖・ai-jobs
[2026-02-05T09:54:45.106Z] [BOT] ✅ Industry: Software Engineer I - Open Distribution (New Grad) @ ORG_a10ae009
[2026-02-05T09:54:45.107Z] [BOT] 💾 Added channel posting: Software Engineer I - Open Distribution (New Grad) @ ORG_a10ae009 → category channel (1 total channels)
[2026-02-05T09:54:45.107Z] [BOT] 💾 BEFORE MERGE: 2342 jobs in memory (cached)
[2026-02-05T09:54:45.146Z] [BOT] ✅ Loaded V2 database: 2341 jobs
💾 DISK STATE: 2341 jobs on disk
[2026-02-05T09:54:45.147Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2342
[2026-02-05T09:54:45.151Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:45.151Z] [BOT] 💾 AFTER MERGE: 2342 jobs (merged disk + memory)
[2026-02-05T09:54:45.152Z] [BOT] ✅ No jobs to archive (all 2342 jobs within 7-day window)
[2026-02-05T09:54:45.274Z] [BOT] 💾 Saved posted_jobs.json: 2342 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:46.774Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer (Remote)" @ ORG_8a194a36
[2026-02-05T09:54:46.774Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T09:54:46.996Z] [BOT] ✅ Posted message: Entry Level Software Developer (Remote) @ ORG_8a194a36 in #🤖・ai-jobs
  ✅ Industry: Entry Level Software Developer (Remote) @ ORG_8a194a36
[2026-02-05T09:54:46.997Z] [BOT] 💾 Added channel posting: Entry Level Software Developer (Remote) @ ORG_8a194a36 → category channel (1 total channels)
[2026-02-05T09:54:46.997Z] [BOT] 💾 BEFORE MERGE: 2343 jobs in memory (cached)
[2026-02-05T09:54:47.040Z] [BOT] ✅ Loaded V2 database: 2342 jobs
💾 DISK STATE: 2342 jobs on disk
[2026-02-05T09:54:47.040Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2343
[2026-02-05T09:54:47.044Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:47.044Z] [BOT] 💾 AFTER MERGE: 2343 jobs (merged disk + memory)
[2026-02-05T09:54:47.046Z] [BOT] ✅ No jobs to archive (all 2343 jobs within 7-day window)
[2026-02-05T09:54:47.167Z] [BOT] 💾 Saved posted_jobs.json: 2343 active jobs
[2026-02-05T09:54:47.167Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:49.199Z] [BOT] ✅ Posted message: Entry Level Software Developer (Remote) @ ORG_8a194a36 in #📍・JID_6daed763
[2026-02-05T09:54:49.199Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T09:54:49.200Z] [BOT] 💾 Added channel posting: Entry Level Software Developer (Remote) @ ORG_8a194a36 → location channel (2 total channels)
[2026-02-05T09:54:49.200Z] [BOT] 💾 BEFORE MERGE: 2343 jobs in memory (cached)
[2026-02-05T09:54:49.258Z] [BOT] ✅ Loaded V2 database: 2343 jobs
💾 DISK STATE: 2343 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2343
[2026-02-05T09:54:49.262Z] [BOT] 🔀 Deep merged: Entry Level Software Developer (Remote) @ ORG_8a194a36 (disk: 1 channels → merged: 2 channels)
[2026-02-05T09:54:49.262Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2343 jobs (merged disk + memory)
[2026-02-05T09:54:49.264Z] [BOT] ✅ No jobs to archive (all 2343 jobs within 7-day window)
[2026-02-05T09:54:49.373Z] [BOT] 💾 Saved posted_jobs.json: 2343 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:50.875Z] [BOT] 📍 [ROUTING] "Field Engineering Specialist" @ ORG_42caa9c3
[2026-02-05T09:54:50.875Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T09:54:51.140Z] [BOT] ✅ Posted message: Field Engineering Specialist @ ORG_42caa9c3 in #🤖・ai-jobs
[2026-02-05T09:54:51.140Z] [BOT] ✅ Industry: Field Engineering Specialist @ ORG_42caa9c3
[2026-02-05T09:54:51.141Z] [BOT] 💾 Added channel posting: Field Engineering Specialist @ ORG_42caa9c3 → category channel (1 total channels)
[2026-02-05T09:54:51.141Z] [BOT] 💾 BEFORE MERGE: 2344 jobs in memory (cached)
[2026-02-05T09:54:51.185Z] [BOT] ✅ Loaded V2 database: 2343 jobs
💾 DISK STATE: 2343 jobs on disk
[2026-02-05T09:54:51.185Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2344
[2026-02-05T09:54:51.189Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:51.189Z] [BOT] 💾 AFTER MERGE: 2344 jobs (merged disk + memory)
[2026-02-05T09:54:51.190Z] [BOT] ✅ No jobs to archive (all 2344 jobs within 7-day window)
[2026-02-05T09:54:51.309Z] [BOT] 💾 Saved posted_jobs.json: 2344 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:53.049Z] [BOT] ✅ Posted message: Field Engineering Specialist @ ORG_42caa9c3 in #📍・JID_6daed763
[2026-02-05T09:54:53.049Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T09:54:53.050Z] [BOT] 💾 Added channel posting: Field Engineering Specialist @ ORG_42caa9c3 → location channel (2 total channels)
[2026-02-05T09:54:53.050Z] [BOT] 💾 BEFORE MERGE: 2344 jobs in memory (cached)
[2026-02-05T09:54:53.094Z] [BOT] ✅ Loaded V2 database: 2344 jobs
💾 DISK STATE: 2344 jobs on disk
[2026-02-05T09:54:53.095Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2344
[2026-02-05T09:54:53.099Z] [BOT] 🔀 Deep merged: Field Engineering Specialist @ ORG_42caa9c3 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:54:53.099Z] [BOT] 💾 AFTER MERGE: 2344 jobs (merged disk + memory)
[2026-02-05T09:54:53.100Z] [BOT] ✅ No jobs to archive (all 2344 jobs within 7-day window)
[2026-02-05T09:54:53.232Z] [BOT] 💾 Saved posted_jobs.json: 2344 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:54:57.734Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T09:54:57.736Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_584f94fb..." not found, but found as SHA256 "a3651871808e42db"
[2026-02-05T09:54:57.736Z] [BOT] ⏭️  Skipping duplicate: JID_927f4756 (posted within 7 days)
[2026-02-05T09:54:57.737Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_ce23a270-..." not found, but found as SHA256 "47b5f87947a336c0"
⏭️  Skipping duplicate: JID_ba1735f0 (posted within 7 days)
[2026-02-05T09:54:57.737Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_436a34e3..." not found, but found as SHA256 "c66b7ba91fb8e35a"
[2026-02-05T09:54:57.737Z] [BOT] ⏭️  Skipping duplicate: JID_73552669 (posted within 7 days)
[2026-02-05T09:54:57.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e3aa7cf8..." not found, but found as SHA256 "739c0c46ef31a4d6"
[2026-02-05T09:54:57.738Z] [BOT] ⏭️  Skipping duplicate: JID_283676a9 (posted within 7 days)
[2026-02-05T09:54:57.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_0a25185a-..." not found, but found as SHA256 "43e82953ecfa04ee"
[2026-02-05T09:54:57.738Z] [BOT] ⏭️  Skipping duplicate: JID_4fa427a7 (posted within 7 days)
[2026-02-05T09:54:57.738Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "6b63404dcc402dfa"
[2026-02-05T09:54:57.738Z] [BOT] ⏭️  Skipping duplicate: JID_a4aca1d6 (posted within 7 days)
[2026-02-05T09:54:57.739Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "4552546c5e2bc5fe"
[2026-02-05T09:54:57.739Z] [BOT] ⏭️  Skipping duplicate: JID_3f148a3a (posted within 7 days)
[2026-02-05T09:54:57.739Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_422a0689..." not found, but found as SHA256 "7d87075d89d0f0a6"
[2026-02-05T09:54:57.739Z] [BOT] ⏭️  Skipping duplicate: JID_422a0689 (posted within 7 days)
[2026-02-05T09:54:57.739Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8ff60619..." not found, but found as SHA256 "edb80f7a2bce481d"
[2026-02-05T09:54:57.740Z] [BOT] ⏭️  Skipping duplicate: JID_1ce9f6ad (posted within 7 days)
[2026-02-05T09:54:57.740Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5e0a162c..." not found, but found as SHA256 "4c4de0f6abbff7f9"
[2026-02-05T09:54:57.740Z] [BOT] ⏭️  Skipping duplicate: JID_8149f7a1 (posted within 7 days)
[2026-02-05T09:54:57.741Z] [BOT] ✅ Loaded pending queue: 27 total (0 pending, 27 enriched, 0 posted)
[2026-02-05T09:54:57.743Z] [BOT] ✅ Saved pending queue: 27 total (0 pending, 17 enriched, 10 posted)
[2026-02-05T09:54:57.743Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T09:54:57.836Z] [BOT] 📂 Loaded 12425 existing routing entries
[2026-02-05T09:54:57.973Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-05T09:54:57.973Z] [BOT] Total entries: 12435
   Timestamp: 2026-02-05T09:54:57.917Z
[2026-02-05T09:54:57.974Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 22
   Successful: 18
   Failed: 0
   Skipped: 4
[2026-02-05T09:54:57.974Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T09:54:57.974Z] [BOT] Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
[2026-02-05T09:54:57.974Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #📍・JID_6daed763: 5 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🌉・JID_739bbc0b: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[2026-02-05T09:54:57.975Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2344 jobs in memory (cached)
[2026-02-05T09:54:58.029Z] [BOT] ✅ Loaded V2 database: 2344 jobs
💾 DISK STATE: 2344 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2344
[2026-02-05T09:54:58.032Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:54:58.033Z] [BOT] 💾 AFTER MERGE: 2344 jobs (merged disk + memory)
[2026-02-05T09:54:58.034Z] [BOT] ✅ No jobs to archive (all 2344 jobs within 7-day window)
[2026-02-05T09:54:58.163Z] [BOT] 💾 Saved posted_jobs.json: 2344 active jobs
[2026-02-05T09:54:58.166Z] [BOT] ✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T09:55:00.186Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2513) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*