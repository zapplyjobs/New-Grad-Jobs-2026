# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T15:23:45.587Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T15:23:27.314Z] ========================================
[2026-02-05T15:23:27.316Z] Discord Bot Execution Log
[2026-02-05T15:23:27.316Z] Environment: GitHub Actions
[2026-02-05T15:23:27.316Z] Node Version: v20.20.0
[2026-02-05T15:23:27.316Z] ========================================
[2026-02-05T15:23:27.316Z] Environment Variables Check:
[2026-02-05T15:23:27.316Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T15:23:27.316Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T15:23:27.316Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T15:23:27.316Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T15:23:27.316Z] 
Multi-Channel Configuration:
[2026-02-05T15:23:27.317Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T15:23:27.317Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:23:27.317Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:23:27.317Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T15:23:27.317Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:23:27.317Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:23:27.317Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:23:27.317Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:23:27.317Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:23:27.317Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T15:23:27.317Z] 
Data Files Check:
[2026-02-05T15:23:27.318Z] .github/data/new_jobs.json: ✅ Exists (6 items, 79778 bytes)
[2026-02-05T15:23:27.379Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12080021 bytes)
[2026-02-05T15:23:27.379Z] 
========================================
[2026-02-05T15:23:27.379Z] Starting Enhanced Discord Bot...
[2026-02-05T15:23:27.379Z] ========================================
[2026-02-05T15:23:28.009Z] [BOT] ✅ Loaded V2 database: 2360 jobs
[2026-02-05T15:23:28.495Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T15:23:28.496Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T15:23:28.496Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T15:23:28.496Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2026-02-05T15:23:28.497Z] [BOT] [BOT] 📬 Found 6 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T15:23:28.498Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T15:23:28.498Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T15:23:28.499Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T15:23:28.499Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T15:23:28.500Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T15:23:28.500Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T15:23:28.500Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T15:23:28.502Z] [BOT] 📬 Found 2 new jobs (4 already posted)...
[2026-02-05T15:23:28.502Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-02-05T15:23:28.502Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-05T15:23:28.503Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-05T15:23:28.503Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T15:23:28.504Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T15:23:28.505Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry Level" @ ORG_8a194a36
[2026-02-05T15:23:28.505Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T15:23:28.524Z] [BOT ERROR] (node:2514) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T15:23:28.860Z] [BOT] ✅ Posted message: Software Engineer - Entry Level @ ORG_8a194a36 in #🤖・ai-jobs
[2026-02-05T15:23:28.860Z] [BOT] ✅ Industry: Software Engineer - Entry Level @ ORG_8a194a36
[2026-02-05T15:23:28.861Z] [BOT] 💾 Added channel posting: Software Engineer - Entry Level @ ORG_8a194a36 → category channel (1 total channels)
[2026-02-05T15:23:28.861Z] [BOT] 💾 BEFORE MERGE: 2361 jobs in memory (cached)
[2026-02-05T15:23:28.911Z] [BOT] ✅ Loaded V2 database: 2360 jobs
💾 DISK STATE: 2360 jobs on disk
[2026-02-05T15:23:28.912Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2361
[2026-02-05T15:23:28.918Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T15:23:28.918Z] [BOT] 💾 AFTER MERGE: 2361 jobs (merged disk + memory)
[2026-02-05T15:23:28.920Z] [BOT] ✅ No jobs to archive (all 2361 jobs within 7-day window)
[2026-02-05T15:23:29.066Z] [BOT] 💾 Saved posted_jobs.json: 2361 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T15:23:30.847Z] [BOT] ✅ Posted message: Software Engineer - Entry Level @ ORG_8a194a36 in #📍・JID_6daed763
[2026-02-05T15:23:30.847Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T15:23:30.847Z] [BOT] 💾 Added channel posting: Software Engineer - Entry Level @ ORG_8a194a36 → location channel (2 total channels)
[2026-02-05T15:23:30.847Z] [BOT] 💾 BEFORE MERGE: 2361 jobs in memory (cached)
[2026-02-05T15:23:30.899Z] [BOT] ✅ Loaded V2 database: 2361 jobs
💾 DISK STATE: 2361 jobs on disk
[2026-02-05T15:23:30.900Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2361
[2026-02-05T15:23:30.906Z] [BOT] 🔀 Deep merged: Software Engineer - Entry Level @ ORG_8a194a36 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T15:23:30.906Z] [BOT] 💾 AFTER MERGE: 2361 jobs (merged disk + memory)
[2026-02-05T15:23:30.908Z] [BOT] ✅ No jobs to archive (all 2361 jobs within 7-day window)
[2026-02-05T15:23:31.031Z] [BOT] 💾 Saved posted_jobs.json: 2361 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T15:23:35.533Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T15:23:35.535Z] [BOT] 📍 [ROUTING] "Software Engineer, Level 1" @ ORG_6cbf0605 Software, Inc.
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T15:23:35.739Z] [BOT] ✅ Posted message: Software Engineer, Level 1 @ ORG_6cbf0605 Software, Inc. in #💻・tech-jobs
[2026-02-05T15:23:35.739Z] [BOT] ✅ Industry: Software Engineer, Level 1 @ ORG_6cbf0605 Software, Inc.
[2026-02-05T15:23:35.740Z] [BOT] 💾 Added channel posting: Software Engineer, Level 1 @ ORG_6cbf0605 Software, Inc. → category channel (1 total channels)
[2026-02-05T15:23:35.740Z] [BOT] 💾 BEFORE MERGE: 2362 jobs in memory (cached)
[2026-02-05T15:23:35.784Z] [BOT] ✅ Loaded V2 database: 2361 jobs
💾 DISK STATE: 2361 jobs on disk
[2026-02-05T15:23:35.784Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2362
[2026-02-05T15:23:35.790Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T15:23:35.790Z] [BOT] 💾 AFTER MERGE: 2362 jobs (merged disk + memory)
[2026-02-05T15:23:35.791Z] [BOT] ✅ No jobs to archive (all 2362 jobs within 7-day window)
[2026-02-05T15:23:35.929Z] [BOT] 💾 Saved posted_jobs.json: 2362 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T15:23:37.671Z] [BOT] ✅ Posted message: Software Engineer, Level 1 @ ORG_6cbf0605 Software, Inc. in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T15:23:37.671Z] [BOT] 💾 Added channel posting: Software Engineer, Level 1 @ ORG_6cbf0605 Software, Inc. → location channel (2 total channels)
[2026-02-05T15:23:37.671Z] [BOT] 💾 BEFORE MERGE: 2362 jobs in memory (cached)
[2026-02-05T15:23:37.712Z] [BOT] ✅ Loaded V2 database: 2362 jobs
💾 DISK STATE: 2362 jobs on disk
[2026-02-05T15:23:37.713Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2362
[2026-02-05T15:23:37.719Z] [BOT] 🔀 Deep merged: Software Engineer, Level 1 @ ORG_6cbf0605 Software, Inc. (disk: 1 channels → merged: 2 channels)
[2026-02-05T15:23:37.719Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2362 jobs (merged disk + memory)
[2026-02-05T15:23:37.721Z] [BOT] ✅ No jobs to archive (all 2362 jobs within 7-day window)
[2026-02-05T15:23:37.846Z] [BOT] 💾 Saved posted_jobs.json: 2362 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T15:23:42.348Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-05T15:23:42.349Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2565358c..." not found, but found as SHA256 "886c44f21282d690"
[2026-02-05T15:23:42.350Z] [BOT] ⏭️  Skipping duplicate: JID_67fbd918 (posted within 7 days)
[2026-02-05T15:23:42.350Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_9d4aee5d..." not found, but found as SHA256 "19d1af5c64abcc81"
[2026-02-05T15:23:42.350Z] [BOT] ⏭️  Skipping duplicate: JID_99ddef2d (posted within 7 days)
[2026-02-05T15:23:42.351Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2026-02-05T15:23:42.352Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 4 enriched, 2 posted)
[2026-02-05T15:23:42.352Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T15:23:42.461Z] [BOT] 📂 Loaded 12451 existing routing entries
[2026-02-05T15:23:42.585Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-05T15:23:42.585Z] [BOT] Total entries: 12453
   Timestamp: 2026-02-05T15:23:42.532Z
[2026-02-05T15:23:42.585Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T15:23:42.586Z] [BOT] Total attempts: 8
   Successful: 4
   Failed: 0
   Skipped: 4
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #📍・JID_6daed763: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2362 jobs in memory (cached)
[2026-02-05T15:23:42.628Z] [BOT] ✅ Loaded V2 database: 2362 jobs
💾 DISK STATE: 2362 jobs on disk
[2026-02-05T15:23:42.628Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2362
[2026-02-05T15:23:42.636Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T15:23:42.637Z] [BOT] 💾 AFTER MERGE: 2362 jobs (merged disk + memory)
[2026-02-05T15:23:42.639Z] [BOT] ✅ No jobs to archive (all 2362 jobs within 7-day window)
[2026-02-05T15:23:42.772Z] [BOT] 💾 Saved posted_jobs.json: 2362 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T15:23:44.791Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2514) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*