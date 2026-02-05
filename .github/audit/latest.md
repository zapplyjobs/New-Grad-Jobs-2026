# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T09:25:24.842Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T09:24:36.180Z] ========================================
[2026-02-05T09:24:36.182Z] Discord Bot Execution Log
[2026-02-05T09:24:36.182Z] Environment: GitHub Actions
[2026-02-05T09:24:36.182Z] Node Version: v20.20.0
[2026-02-05T09:24:36.182Z] ========================================
[2026-02-05T09:24:36.182Z] Environment Variables Check:
[2026-02-05T09:24:36.182Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T09:24:36.182Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T09:24:36.183Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T09:24:36.183Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T09:24:36.183Z] 
Multi-Channel Configuration:
[2026-02-05T09:24:36.183Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T09:24:36.183Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:24:36.183Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:24:36.183Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T09:24:36.183Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:24:36.183Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:24:36.183Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:24:36.183Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:24:36.184Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T09:24:36.184Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T09:24:36.184Z] 
Data Files Check:
[2026-02-05T09:24:36.185Z] .github/data/new_jobs.json: ✅ Exists (10 items, 98734 bytes)
[2026-02-05T09:24:36.254Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11856386 bytes)
[2026-02-05T09:24:36.254Z] 
========================================
[2026-02-05T09:24:36.254Z] Starting Enhanced Discord Bot...
[2026-02-05T09:24:36.254Z] ========================================
[2026-02-05T09:24:36.870Z] [BOT] ✅ Loaded V2 database: 2324 jobs
[2026-02-05T09:24:37.383Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T09:24:37.384Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T09:24:37.384Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T09:24:37.385Z] [BOT] ✅ Loaded pending queue: 32 total (0 pending, 32 enriched, 0 posted)
[2026-02-05T09:24:37.385Z] [BOT] [BOT] 📬 Found 32 enriched jobs ready to post from pending queue
[2026-02-05T09:24:37.386Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T09:24:37.387Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T09:24:37.387Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T09:24:37.388Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T09:24:37.388Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T09:24:37.388Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T09:24:37.389Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T09:24:37.389Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T09:24:37.400Z] [BOT] 📬 Found 28 new jobs (4 already posted)...
[2026-02-05T09:24:37.401Z] [BOT] 📋 After blacklist filter: 28 jobs (0 blacklisted)
[2026-02-05T09:24:37.401Z] [BOT] 📋 After data quality filter: 28 jobs (0 invalid)
[2026-02-05T09:24:37.402Z] [BOT] 📋 After multi-location grouping: 27 unique jobs to post
[2026-02-05T09:24:37.402Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer III - Fullstack @ Walmart: fayetteville, elm springs
[2026-02-05T09:24:37.402Z] [BOT] ⏸️ Limiting to 10 jobs this run, 18 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T09:24:37.404Z] [BOT] 📌 Posting 6 jobs to #💻・tech-jobs
[2026-02-05T09:24:37.405Z] [BOT] 📍 [ROUTING] "Dev10 Entry Level Software Developer - Nationwide at Genesis10 Pasco, WA" @ Genesis10
[2026-02-05T09:24:37.406Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:24:37.424Z] [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T09:24:37.663Z] [BOT] ✅ Posted message: Dev10 Entry Level Software Developer - Nationwide at Genesis10 Pasco, WA @ Genesis10 in #💻・tech-jobs
[2026-02-05T09:24:37.663Z] [BOT] ✅ Industry: Dev10 Entry Level Software Developer - Nationwide at Genesis10 Pasco, WA @ Genesis10
[2026-02-05T09:24:37.664Z] [BOT] 💾 Added channel posting: Dev10 Entry Level Software Developer - Nationwide at Genesis10 Pasco, WA @ Genesis10 → category channel (1 total channels)
[2026-02-05T09:24:37.665Z] [BOT] 💾 BEFORE MERGE: 2325 jobs in memory (cached)
[2026-02-05T09:24:37.720Z] [BOT] ✅ Loaded V2 database: 2324 jobs
💾 DISK STATE: 2324 jobs on disk
[2026-02-05T09:24:37.721Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2325
[2026-02-05T09:24:37.727Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:24:37.727Z] [BOT] 💾 AFTER MERGE: 2325 jobs (merged disk + memory)
[2026-02-05T09:24:37.728Z] [BOT] ✅ No jobs to archive (all 2325 jobs within 7-day window)
[2026-02-05T09:24:37.892Z] [BOT] 💾 Saved posted_jobs.json: 2325 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:39.584Z] [BOT] ✅ Posted message: Dev10 Entry Level Software Developer - Nationwide at Genesis10 Pasco, WA @ Genesis10 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-05T09:24:39.584Z] [BOT] 💾 Added channel posting: Dev10 Entry Level Software Developer - Nationwide at Genesis10 Pasco, WA @ Genesis10 → location channel (2 total channels)
[2026-02-05T09:24:39.585Z] [BOT] 💾 BEFORE MERGE: 2325 jobs in memory (cached)
[2026-02-05T09:24:39.644Z] [BOT] ✅ Loaded V2 database: 2325 jobs
💾 DISK STATE: 2325 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2325
[2026-02-05T09:24:39.649Z] [BOT] 🔀 Deep merged: Dev10 Entry Level Software Developer - Nationwide at Genesis10 Pasco, WA @ Genesis10 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:24:39.650Z] [BOT] 💾 AFTER MERGE: 2325 jobs (merged disk + memory)
[2026-02-05T09:24:39.651Z] [BOT] ✅ No jobs to archive (all 2325 jobs within 7-day window)
[2026-02-05T09:24:39.791Z] [BOT] 💾 Saved posted_jobs.json: 2325 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:41.293Z] [BOT] 📍 [ROUTING] "Fulltime Engineer - University Recruiting" @ ORG_79f6d073 City National Security Campus
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:24:41.484Z] [BOT] ✅ Posted message: Fulltime Engineer - University Recruiting @ ORG_79f6d073 City National Security Campus in #💻・tech-jobs
  ✅ Industry: Fulltime Engineer - University Recruiting @ ORG_79f6d073 City National Security Campus
[2026-02-05T09:24:41.486Z] [BOT] 💾 Added channel posting: Fulltime Engineer - University Recruiting @ ORG_79f6d073 City National Security Campus → category channel (1 total channels)
[2026-02-05T09:24:41.486Z] [BOT] 💾 BEFORE MERGE: 2326 jobs in memory (cached)
[2026-02-05T09:24:41.536Z] [BOT] ✅ Loaded V2 database: 2325 jobs
💾 DISK STATE: 2325 jobs on disk
[2026-02-05T09:24:41.536Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2326
[2026-02-05T09:24:41.542Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:24:41.543Z] [BOT] 💾 AFTER MERGE: 2326 jobs (merged disk + memory)
[2026-02-05T09:24:41.544Z] [BOT] ✅ No jobs to archive (all 2326 jobs within 7-day window)
[2026-02-05T09:24:41.680Z] [BOT] 💾 Saved posted_jobs.json: 2326 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:43.412Z] [BOT] ✅ Posted message: Fulltime Engineer - University Recruiting @ ORG_79f6d073 City National Security Campus in #📍・JID_6daed763
[2026-02-05T09:24:43.413Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T09:24:43.413Z] [BOT] 💾 Added channel posting: Fulltime Engineer - University Recruiting @ ORG_79f6d073 City National Security Campus → location channel (2 total channels)
[2026-02-05T09:24:43.413Z] [BOT] 💾 BEFORE MERGE: 2326 jobs in memory (cached)
[2026-02-05T09:24:43.464Z] [BOT] ✅ Loaded V2 database: 2326 jobs
💾 DISK STATE: 2326 jobs on disk
[2026-02-05T09:24:43.464Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2326
[2026-02-05T09:24:43.469Z] [BOT] 🔀 Deep merged: Fulltime Engineer - University Recruiting @ ORG_79f6d073 City National Security Campus (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:24:43.469Z] [BOT] 💾 AFTER MERGE: 2326 jobs (merged disk + memory)
[2026-02-05T09:24:43.471Z] [BOT] ✅ No jobs to archive (all 2326 jobs within 7-day window)
[2026-02-05T09:24:43.627Z] [BOT] 💾 Saved posted_jobs.json: 2326 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:45.127Z] [BOT] 📍 [ROUTING] "Entry Level Software Engineer" @ ORG_6181447bing
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:24:45.357Z] [BOT] ✅ Posted message: Entry Level Software Engineer @ ORG_6181447bing in #💻・tech-jobs
  ✅ Industry: Entry Level Software Engineer @ ORG_6181447bing
[2026-02-05T09:24:45.358Z] [BOT] 💾 Added channel posting: Entry Level Software Engineer @ ORG_6181447bing → category channel (1 total channels)
[2026-02-05T09:24:45.358Z] [BOT] 💾 BEFORE MERGE: 2327 jobs in memory (cached)
[2026-02-05T09:24:45.412Z] [BOT] ✅ Loaded V2 database: 2326 jobs
💾 DISK STATE: 2326 jobs on disk
[2026-02-05T09:24:45.413Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2327
[2026-02-05T09:24:45.419Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:24:45.420Z] [BOT] 💾 AFTER MERGE: 2327 jobs (merged disk + memory)
[2026-02-05T09:24:45.421Z] [BOT] ✅ No jobs to archive (all 2327 jobs within 7-day window)
[2026-02-05T09:24:45.552Z] [BOT] 💾 Saved posted_jobs.json: 2327 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:47.055Z] [BOT] 📍 [ROUTING] "2026 Full-time - Software Engineer I - Integration & Test - Onsite (MA)" @ ORG_75f04b84
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:24:47.212Z] [BOT] ✅ Posted message: 2026 Full-time - Software Engineer I - Integration & Test - Onsite (MA) @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: 2026 Full-time - Software Engineer I - Integration & Test - Onsite (MA) @ ORG_75f04b84
[2026-02-05T09:24:47.213Z] [BOT] 💾 Added channel posting: 2026 Full-time - Software Engineer I - Integration & Test - Onsite (MA) @ ORG_75f04b84 → category channel (1 total channels)
💾 BEFORE MERGE: 2328 jobs in memory (cached)
[2026-02-05T09:24:47.263Z] [BOT] ✅ Loaded V2 database: 2327 jobs
💾 DISK STATE: 2327 jobs on disk
[2026-02-05T09:24:47.263Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2328
[2026-02-05T09:24:47.268Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:24:47.268Z] [BOT] 💾 AFTER MERGE: 2328 jobs (merged disk + memory)
[2026-02-05T09:24:47.269Z] [BOT] ✅ No jobs to archive (all 2328 jobs within 7-day window)
[2026-02-05T09:24:47.400Z] [BOT] 💾 Saved posted_jobs.json: 2328 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:49.145Z] [BOT] ✅ Posted message: 2026 Full-time - Software Engineer I - Integration & Test - Onsite (MA) @ ORG_75f04b84 in #📍・JID_6daed763
[2026-02-05T09:24:49.145Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T09:24:49.145Z] [BOT] 💾 Added channel posting: 2026 Full-time - Software Engineer I - Integration & Test - Onsite (MA) @ ORG_75f04b84 → location channel (2 total channels)
[2026-02-05T09:24:49.146Z] [BOT] 💾 BEFORE MERGE: 2328 jobs in memory (cached)
[2026-02-05T09:24:49.198Z] [BOT] ✅ Loaded V2 database: 2328 jobs
💾 DISK STATE: 2328 jobs on disk
[2026-02-05T09:24:49.198Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2328
[2026-02-05T09:24:49.204Z] [BOT] 🔀 Deep merged: 2026 Full-time - Software Engineer I - Integration & Test - Onsite (MA) @ ORG_75f04b84 (disk: 1 channels → merged: 2 channels)
[2026-02-05T09:24:49.204Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2328 jobs (merged disk + memory)
[2026-02-05T09:24:49.205Z] [BOT] ✅ No jobs to archive (all 2328 jobs within 7-day window)
[2026-02-05T09:24:49.341Z] [BOT] 💾 Saved posted_jobs.json: 2328 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:50.844Z] [BOT] 📍 [ROUTING] "Software Engineer II,III,IV" @ ORG_c0988a3f
   Category: TECH (matched: "software")
[2026-02-05T09:24:50.844Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:24:51.479Z] [BOT] ✅ Posted message: Software Engineer II,III,IV @ ORG_c0988a3f in #💻・tech-jobs
[2026-02-05T09:24:51.479Z] [BOT] ✅ Industry: Software Engineer II,III,IV @ ORG_c0988a3f
[2026-02-05T09:24:51.480Z] [BOT] 💾 Added channel posting: Software Engineer II,III,IV @ ORG_c0988a3f → category channel (1 total channels)
[2026-02-05T09:24:51.480Z] [BOT] 💾 BEFORE MERGE: 2329 jobs in memory (cached)
[2026-02-05T09:24:51.533Z] [BOT] ✅ Loaded V2 database: 2328 jobs
💾 DISK STATE: 2328 jobs on disk
[2026-02-05T09:24:51.533Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2329
[2026-02-05T09:24:51.538Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:24:51.539Z] [BOT] 💾 AFTER MERGE: 2329 jobs (merged disk + memory)
[2026-02-05T09:24:51.540Z] [BOT] ✅ No jobs to archive (all 2329 jobs within 7-day window)
[2026-02-05T09:24:51.694Z] [BOT] 💾 Saved posted_jobs.json: 2329 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:53.336Z] [BOT] ✅ Posted message: Software Engineer II,III,IV @ ORG_c0988a3f in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-02-05T09:24:53.337Z] [BOT] 💾 Added channel posting: Software Engineer II,III,IV @ ORG_c0988a3f → location channel (2 total channels)
[2026-02-05T09:24:53.338Z] [BOT] 💾 BEFORE MERGE: 2329 jobs in memory (cached)
[2026-02-05T09:24:53.384Z] [BOT] ✅ Loaded V2 database: 2329 jobs
💾 DISK STATE: 2329 jobs on disk
[2026-02-05T09:24:53.385Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2329
[2026-02-05T09:24:53.389Z] [BOT] 🔀 Deep merged: Software Engineer II,III,IV @ ORG_c0988a3f (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:24:53.389Z] [BOT] 💾 AFTER MERGE: 2329 jobs (merged disk + memory)
[2026-02-05T09:24:53.391Z] [BOT] ✅ No jobs to archive (all 2329 jobs within 7-day window)
[2026-02-05T09:24:53.519Z] [BOT] 💾 Saved posted_jobs.json: 2329 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:55.022Z] [BOT] 📍 [ROUTING] "2026 Entry Level Software Engineer" @ ORG_b1b059ca Systems
   Category: TECH (matched: "software")
[2026-02-05T09:24:55.022Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T09:24:55.199Z] [BOT] ✅ Posted message: 2026 Entry Level Software Engineer @ ORG_b1b059ca Systems in #💻・tech-jobs
  ✅ Industry: 2026 Entry Level Software Engineer @ ORG_b1b059ca Systems
[2026-02-05T09:24:55.200Z] [BOT] 💾 Added channel posting: 2026 Entry Level Software Engineer @ ORG_b1b059ca Systems → category channel (1 total channels)
[2026-02-05T09:24:55.200Z] [BOT] 💾 BEFORE MERGE: 2330 jobs in memory (cached)
[2026-02-05T09:24:55.251Z] [BOT] ✅ Loaded V2 database: 2329 jobs
💾 DISK STATE: 2329 jobs on disk
[2026-02-05T09:24:55.251Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2330
[2026-02-05T09:24:55.256Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:24:55.256Z] [BOT] 💾 AFTER MERGE: 2330 jobs (merged disk + memory)
[2026-02-05T09:24:55.258Z] [BOT] ✅ No jobs to archive (all 2330 jobs within 7-day window)
[2026-02-05T09:24:55.412Z] [BOT] 💾 Saved posted_jobs.json: 2330 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:24:59.913Z] [BOT] 📌 Posting 3 jobs to #📊・JID_fb739488
[2026-02-05T09:24:59.916Z] [BOT] 📍 [ROUTING] "Boeing is hiring: Entry-Level F-22 Simulation Software Engineer in Berkeley" @ ORG_6181447bing
   Category: DATA-SCIENCE (matched: "data science")
[2026-02-05T09:24:59.916Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T09:24:59.916Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T09:25:00.314Z] [BOT] ✅ Posted message: Boeing is hiring: Entry-Level F-22 Simulation Software Engineer in Berkeley @ ORG_6181447bing in #📊・JID_fb739488
  ✅ Industry: Boeing is hiring: Entry-Level F-22 Simulation Software Engineer in Berkeley @ ORG_6181447bing
[2026-02-05T09:25:00.315Z] [BOT] 💾 Added channel posting: Boeing is hiring: Entry-Level F-22 Simulation Software Engineer in Berkeley @ ORG_6181447bing → category channel (1 total channels)
[2026-02-05T09:25:00.316Z] [BOT] 💾 BEFORE MERGE: 2331 jobs in memory (cached)
[2026-02-05T09:25:00.364Z] [BOT] ✅ Loaded V2 database: 2330 jobs
💾 DISK STATE: 2330 jobs on disk
[2026-02-05T09:25:00.365Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2331
[2026-02-05T09:25:00.369Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:25:00.369Z] [BOT] 💾 AFTER MERGE: 2331 jobs (merged disk + memory)
[2026-02-05T09:25:00.371Z] [BOT] ✅ No jobs to archive (all 2331 jobs within 7-day window)
[2026-02-05T09:25:00.523Z] [BOT] 💾 Saved posted_jobs.json: 2331 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:02.467Z] [BOT] ✅ Posted message: Boeing is hiring: Entry-Level F-22 Simulation Software Engineer in Berkeley @ ORG_6181447bing in #🌉・JID_739bbc0b
  ✅ Location: 🌉・JID_739bbc0b
[2026-02-05T09:25:02.468Z] [BOT] 💾 Added channel posting: Boeing is hiring: Entry-Level F-22 Simulation Software Engineer in Berkeley @ ORG_6181447bing → location channel (2 total channels)
[2026-02-05T09:25:02.468Z] [BOT] 💾 BEFORE MERGE: 2331 jobs in memory (cached)
[2026-02-05T09:25:02.515Z] [BOT] ✅ Loaded V2 database: 2331 jobs
💾 DISK STATE: 2331 jobs on disk
[2026-02-05T09:25:02.516Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2331
[2026-02-05T09:25:02.521Z] [BOT] 🔀 Deep merged: Boeing is hiring: Entry-Level F-22 Simulation Software Engineer in Berkeley @ ORG_6181447bing (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:25:02.521Z] [BOT] 💾 AFTER MERGE: 2331 jobs (merged disk + memory)
[2026-02-05T09:25:02.522Z] [BOT] ✅ No jobs to archive (all 2331 jobs within 7-day window)
[2026-02-05T09:25:02.660Z] [BOT] 💾 Saved posted_jobs.json: 2331 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:04.163Z] [BOT] 📍 [ROUTING] "Data Engineer - Entry Level" @ ORG_07b3e62e
[2026-02-05T09:25:04.164Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T09:25:04.459Z] [BOT] ✅ Posted message: Data Engineer - Entry Level @ ORG_07b3e62e in #📊・JID_fb739488
[2026-02-05T09:25:04.460Z] [BOT] ✅ Industry: Data Engineer - Entry Level @ ORG_07b3e62e
[2026-02-05T09:25:04.461Z] [BOT] 💾 Added channel posting: Data Engineer - Entry Level @ ORG_07b3e62e → category channel (1 total channels)
[2026-02-05T09:25:04.461Z] [BOT] 💾 BEFORE MERGE: 2332 jobs in memory (cached)
[2026-02-05T09:25:04.508Z] [BOT] ✅ Loaded V2 database: 2331 jobs
💾 DISK STATE: 2331 jobs on disk
[2026-02-05T09:25:04.508Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2332
[2026-02-05T09:25:04.513Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:25:04.513Z] [BOT] 💾 AFTER MERGE: 2332 jobs (merged disk + memory)
[2026-02-05T09:25:04.514Z] [BOT] ✅ No jobs to archive (all 2332 jobs within 7-day window)
[2026-02-05T09:25:04.650Z] [BOT] 💾 Saved posted_jobs.json: 2332 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:06.407Z] [BOT] ✅ Posted message: Data Engineer - Entry Level @ ORG_07b3e62e in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T09:25:06.408Z] [BOT] 💾 Added channel posting: Data Engineer - Entry Level @ ORG_07b3e62e → location channel (2 total channels)
[2026-02-05T09:25:06.408Z] [BOT] 💾 BEFORE MERGE: 2332 jobs in memory (cached)
[2026-02-05T09:25:06.460Z] [BOT] ✅ Loaded V2 database: 2332 jobs
💾 DISK STATE: 2332 jobs on disk
[2026-02-05T09:25:06.460Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2332
[2026-02-05T09:25:06.465Z] [BOT] 🔀 Deep merged: Data Engineer - Entry Level @ ORG_07b3e62e (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:25:06.465Z] [BOT] 💾 AFTER MERGE: 2332 jobs (merged disk + memory)
[2026-02-05T09:25:06.466Z] [BOT] ✅ No jobs to archive (all 2332 jobs within 7-day window)
[2026-02-05T09:25:06.620Z] [BOT] 💾 Saved posted_jobs.json: 2332 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:08.120Z] [BOT] 📍 [ROUTING] "Software Developer - Entry Level at CGI Technologies and Solutions, Inc. Knoxville, TN" @ ORG_e4029b42 Technologies and Solutions, Inc.
   Category: DATA-SCIENCE (matched: "data analytics")
[2026-02-05T09:25:08.120Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T09:25:08.246Z] [BOT] ✅ Posted message: Software Developer - Entry Level at CGI Technologies and Solutions, Inc. Knoxville, TN @ ORG_e4029b42 Technologies and Solutions, Inc. in #📊・JID_fb739488
  ✅ Industry: Software Developer - Entry Level at CGI Technologies and Solutions, Inc. Knoxville, TN @ ORG_e4029b42 Technologies and Solutions, Inc.
[2026-02-05T09:25:08.247Z] [BOT] 💾 Added channel posting: Software Developer - Entry Level at CGI Technologies and Solutions, Inc. Knoxville, TN @ ORG_e4029b42 Technologies and Solutions, Inc. → category channel (1 total channels)
[2026-02-05T09:25:08.247Z] [BOT] 💾 BEFORE MERGE: 2333 jobs in memory (cached)
[2026-02-05T09:25:08.294Z] [BOT] ✅ Loaded V2 database: 2332 jobs
💾 DISK STATE: 2332 jobs on disk
[2026-02-05T09:25:08.295Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2333
[2026-02-05T09:25:08.299Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:25:08.299Z] [BOT] 💾 AFTER MERGE: 2333 jobs (merged disk + memory)
[2026-02-05T09:25:08.301Z] [BOT] ✅ No jobs to archive (all 2333 jobs within 7-day window)
[2026-02-05T09:25:08.430Z] [BOT] 💾 Saved posted_jobs.json: 2333 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:10.086Z] [BOT] ✅ Posted message: Software Developer - Entry Level at CGI Technologies and Solutions, Inc. Knoxville, TN @ ORG_e4029b42 Technologies and Solutions, Inc. in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T09:25:10.087Z] [BOT] 💾 Added channel posting: Software Developer - Entry Level at CGI Technologies and Solutions, Inc. Knoxville, TN @ ORG_e4029b42 Technologies and Solutions, Inc. → location channel (2 total channels)
[2026-02-05T09:25:10.087Z] [BOT] 💾 BEFORE MERGE: 2333 jobs in memory (cached)
[2026-02-05T09:25:10.139Z] [BOT] ✅ Loaded V2 database: 2333 jobs
💾 DISK STATE: 2333 jobs on disk
[2026-02-05T09:25:10.139Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2333
[2026-02-05T09:25:10.144Z] [BOT] 🔀 Deep merged: Software Developer - Entry Level at CGI Technologies and Solutions, Inc. Knoxville, TN @ ORG_e4029b42 Technologies and Solutions, Inc. (disk: 1 channels → merged: 2 channels)
[2026-02-05T09:25:10.144Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2333 jobs (merged disk + memory)
[2026-02-05T09:25:10.145Z] [BOT] ✅ No jobs to archive (all 2333 jobs within 7-day window)
[2026-02-05T09:25:10.285Z] [BOT] 💾 Saved posted_jobs.json: 2333 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:14.787Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T09:25:14.788Z] [BOT] 📍 [ROUTING] "Junior/Entry Level Software Developer" @ ORG_8a194a36
[2026-02-05T09:25:14.788Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T09:25:14.989Z] [BOT] ✅ Posted message: Junior/Entry Level Software Developer @ ORG_8a194a36 in #🤖・ai-jobs
[2026-02-05T09:25:14.989Z] [BOT] ✅ Industry: Junior/Entry Level Software Developer @ ORG_8a194a36
[2026-02-05T09:25:14.990Z] [BOT] 💾 Added channel posting: Junior/Entry Level Software Developer @ ORG_8a194a36 → category channel (1 total channels)
[2026-02-05T09:25:14.990Z] [BOT] 💾 BEFORE MERGE: 2334 jobs in memory (cached)
[2026-02-05T09:25:15.053Z] [BOT] ✅ Loaded V2 database: 2333 jobs
[2026-02-05T09:25:15.055Z] [BOT] 💾 DISK STATE: 2333 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2334
[2026-02-05T09:25:15.065Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:25:15.065Z] [BOT] 💾 AFTER MERGE: 2334 jobs (merged disk + memory)
[2026-02-05T09:25:15.067Z] [BOT] ✅ No jobs to archive (all 2334 jobs within 7-day window)
[2026-02-05T09:25:15.196Z] [BOT] 💾 Saved posted_jobs.json: 2334 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:16.879Z] [BOT] ✅ Posted message: Junior/Entry Level Software Developer @ ORG_8a194a36 in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T09:25:16.880Z] [BOT] 💾 Added channel posting: Junior/Entry Level Software Developer @ ORG_8a194a36 → location channel (2 total channels)
[2026-02-05T09:25:16.880Z] [BOT] 💾 BEFORE MERGE: 2334 jobs in memory (cached)
[2026-02-05T09:25:16.932Z] [BOT] ✅ Loaded V2 database: 2334 jobs
💾 DISK STATE: 2334 jobs on disk
[2026-02-05T09:25:16.932Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2334
[2026-02-05T09:25:16.937Z] [BOT] 🔀 Deep merged: Junior/Entry Level Software Developer @ ORG_8a194a36 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T09:25:16.937Z] [BOT] 💾 AFTER MERGE: 2334 jobs (merged disk + memory)
[2026-02-05T09:25:16.938Z] [BOT] ✅ No jobs to archive (all 2334 jobs within 7-day window)
[2026-02-05T09:25:17.071Z] [BOT] 💾 Saved posted_jobs.json: 2334 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T09:25:21.573Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-02-05T09:25:21.575Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "066dc6fef70d4cb2"
[2026-02-05T09:25:21.575Z] [BOT] ⏭️  Skipping duplicate: JID_5960696b (posted within 7 days)
[2026-02-05T09:25:21.577Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_8cd053c7..." not found, but found as SHA256 "dd13e1251ebab8e4"
⏭️  Skipping duplicate: JID_7b1d455d (posted within 7 days)
🔧 ID mismatch detected: URL-based "JID_69aa21f9..." not found, but found as SHA256 "386ee88b02f1499d"
⏭️  Skipping duplicate: JID_903c5c45-jv_ic1136989_ko0-25_ke26-36-htm (posted within 7 days)
[2026-02-05T09:25:21.577Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_6fdcc98c..." not found, but found as SHA256 "bd535999aaa550c5"
[2026-02-05T09:25:21.577Z] [BOT] ⏭️  Skipping duplicate: JID_95cd7009 (posted within 7 days)
[2026-02-05T09:25:21.578Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "c8f3f573d7c1c7a9"
[2026-02-05T09:25:21.578Z] [BOT] ⏭️  Skipping duplicate: JID_4de1c9cd (posted within 7 days)
[2026-02-05T09:25:21.578Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e702a172..." not found, but found as SHA256 "8ee727fdb356049c"
[2026-02-05T09:25:21.578Z] [BOT] ⏭️  Skipping duplicate: JID_e702a172 (posted within 7 days)
[2026-02-05T09:25:21.578Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_fa35043a..." not found, but found as SHA256 "fabe6cf5d4d2bf29"
[2026-02-05T09:25:21.578Z] [BOT] ⏭️  Skipping duplicate: JID_fa35043a (posted within 7 days)
[2026-02-05T09:25:21.579Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9621a5d6..." not found, but found as SHA256 "073ddf24f0a7e14c"
[2026-02-05T09:25:21.579Z] [BOT] ⏭️  Skipping duplicate: JID_96df3860 (posted within 7 days)
[2026-02-05T09:25:21.579Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_90d17a49..." not found, but found as SHA256 "49da3539687e0008"
[2026-02-05T09:25:21.579Z] [BOT] ⏭️  Skipping duplicate: JID_1d033679 (posted within 7 days)
[2026-02-05T09:25:21.579Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_4c0e5da6..." not found, but found as SHA256 "35fc7588365d2cec"
[2026-02-05T09:25:21.579Z] [BOT] ⏭️  Skipping duplicate: JID_c4a67823 (posted within 7 days)
[2026-02-05T09:25:21.581Z] [BOT] ✅ Loaded pending queue: 32 total (0 pending, 32 enriched, 0 posted)
[2026-02-05T09:25:21.583Z] [BOT] ✅ Saved pending queue: 32 total (0 pending, 22 enriched, 10 posted)
[2026-02-05T09:25:21.584Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T09:25:21.685Z] [BOT] 📂 Loaded 12415 existing routing entries
[2026-02-05T09:25:21.845Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-02-05T09:25:21.846Z] [BOT] Total entries: 12425
   Timestamp: 2026-02-05T09:25:21.783Z
[2026-02-05T09:25:21.846Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T09:25:21.846Z] [BOT] Total attempts: 22
   Successful: 18
   Failed: 0
   Skipped: 4
[2026-02-05T09:25:21.847Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 6 posts
     2. #📍・JID_6daed763: 5 posts
     3. #📊・JID_fb739488: 3 posts
     4. #🌲・JID_efdf5921: 1 posts
     5. #🗽・JID_98d4f0de: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2334 jobs in memory (cached)
[2026-02-05T09:25:21.919Z] [BOT] ✅ Loaded V2 database: 2334 jobs
💾 DISK STATE: 2334 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2334
[2026-02-05T09:25:21.925Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T09:25:21.925Z] [BOT] 💾 AFTER MERGE: 2334 jobs (merged disk + memory)
[2026-02-05T09:25:21.927Z] [BOT] ✅ No jobs to archive (all 2334 jobs within 7-day window)
[2026-02-05T09:25:22.081Z] [BOT] 💾 Saved posted_jobs.json: 2334 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T09:25:24.103Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*