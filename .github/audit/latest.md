# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T10:53:41.164Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T10:53:20.578Z] ========================================
[2026-02-05T10:53:20.580Z] Discord Bot Execution Log
[2026-02-05T10:53:20.580Z] Environment: GitHub Actions
[2026-02-05T10:53:20.580Z] Node Version: v20.20.0
[2026-02-05T10:53:20.580Z] ========================================
[2026-02-05T10:53:20.580Z] Environment Variables Check:
[2026-02-05T10:53:20.580Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T10:53:20.580Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T10:53:20.581Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T10:53:20.581Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T10:53:20.581Z] 
Multi-Channel Configuration:
[2026-02-05T10:53:20.581Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T10:53:20.581Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:53:20.581Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:53:20.581Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T10:53:20.581Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:53:20.581Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:53:20.581Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:53:20.581Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:53:20.581Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T10:53:20.582Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T10:53:20.582Z] 
Data Files Check:
[2026-02-05T10:53:20.583Z] .github/data/new_jobs.json: ✅ Exists (7 items, 92170 bytes)
[2026-02-05T10:53:20.643Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12039329 bytes)
[2026-02-05T10:53:20.643Z] 
========================================
[2026-02-05T10:53:20.643Z] Starting Enhanced Discord Bot...
[2026-02-05T10:53:20.644Z] ========================================
[2026-02-05T10:53:21.212Z] [BOT] ✅ Loaded V2 database: 2354 jobs
[2026-02-05T10:53:21.806Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T10:53:21.806Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T10:53:21.806Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T10:53:21.807Z] [BOT] ✅ Loaded pending queue: 7 total (0 pending, 7 enriched, 0 posted)
[2026-02-05T10:53:21.807Z] [BOT] [BOT] 📬 Found 7 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T10:53:21.808Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T10:53:21.809Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T10:53:21.809Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T10:53:21.809Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T10:53:21.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T10:53:21.810Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T10:53:21.810Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T10:53:21.813Z] [BOT] 📬 Found 3 new jobs (4 already posted)...
[2026-02-05T10:53:21.813Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-02-05T10:53:21.813Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-02-05T10:53:21.814Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-02-05T10:53:21.814Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T10:53:21.815Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T10:53:21.816Z] [BOT] 📍 [ROUTING] "Software Engineer III" @ ORG_3eab285c
[2026-02-05T10:53:21.816Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T10:53:21.833Z] [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T10:53:22.048Z] [BOT] ✅ Posted message: Software Engineer III @ ORG_3eab285c in #🤖・ai-jobs
[2026-02-05T10:53:22.048Z] [BOT] ✅ Industry: Software Engineer III @ ORG_3eab285c
[2026-02-05T10:53:22.049Z] [BOT] 💾 Added channel posting: Software Engineer III @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T10:53:22.050Z] [BOT] 💾 BEFORE MERGE: 2355 jobs in memory (cached)
[2026-02-05T10:53:22.098Z] [BOT] ✅ Loaded V2 database: 2354 jobs
💾 DISK STATE: 2354 jobs on disk
[2026-02-05T10:53:22.099Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2355
[2026-02-05T10:53:22.104Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:53:22.104Z] [BOT] 💾 AFTER MERGE: 2355 jobs (merged disk + memory)
[2026-02-05T10:53:22.105Z] [BOT] ✅ No jobs to archive (all 2355 jobs within 7-day window)
[2026-02-05T10:53:22.319Z] [BOT] 💾 Saved posted_jobs.json: 2355 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:53:26.821Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-02-05T10:53:26.822Z] [BOT] 📍 [ROUTING] "Junior Software Developer JavaScript 🏆" @ ORG_babafd7e Technologies
[2026-02-05T10:53:26.822Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T10:53:27.080Z] [BOT] ✅ Posted message: Junior Software Developer JavaScript 🏆 @ ORG_babafd7e Technologies in #💻・tech-jobs
[2026-02-05T10:53:27.080Z] [BOT] ✅ Industry: Junior Software Developer JavaScript 🏆 @ ORG_babafd7e Technologies
[2026-02-05T10:53:27.081Z] [BOT] 💾 Added channel posting: Junior Software Developer JavaScript 🏆 @ ORG_babafd7e Technologies → category channel (1 total channels)
[2026-02-05T10:53:27.081Z] [BOT] 💾 BEFORE MERGE: 2356 jobs in memory (cached)
[2026-02-05T10:53:27.132Z] [BOT] ✅ Loaded V2 database: 2355 jobs
💾 DISK STATE: 2355 jobs on disk
[2026-02-05T10:53:27.133Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2356
[2026-02-05T10:53:27.138Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:53:27.138Z] [BOT] 💾 AFTER MERGE: 2356 jobs (merged disk + memory)
[2026-02-05T10:53:27.139Z] [BOT] ✅ No jobs to archive (all 2356 jobs within 7-day window)
[2026-02-05T10:53:27.256Z] [BOT] 💾 Saved posted_jobs.json: 2356 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:53:29.055Z] [BOT] ✅ Posted message: Junior Software Developer JavaScript 🏆 @ ORG_babafd7e Technologies in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T10:53:29.056Z] [BOT] 💾 Added channel posting: Junior Software Developer JavaScript 🏆 @ ORG_babafd7e Technologies → location channel (2 total channels)
[2026-02-05T10:53:29.056Z] [BOT] 💾 BEFORE MERGE: 2356 jobs in memory (cached)
[2026-02-05T10:53:29.096Z] [BOT] ✅ Loaded V2 database: 2356 jobs
💾 DISK STATE: 2356 jobs on disk
[2026-02-05T10:53:29.096Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2356
[2026-02-05T10:53:29.101Z] [BOT] 🔀 Deep merged: Junior Software Developer JavaScript 🏆 @ ORG_babafd7e Technologies (disk: 1 channels → merged: 2 channels)
[2026-02-05T10:53:29.101Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2356 jobs (merged disk + memory)
[2026-02-05T10:53:29.103Z] [BOT] ✅ No jobs to archive (all 2356 jobs within 7-day window)
[2026-02-05T10:53:29.228Z] [BOT] 💾 Saved posted_jobs.json: 2356 active jobs
[2026-02-05T10:53:29.228Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T10:53:30.732Z] [BOT] 📍 [ROUTING] "Full stack Software Engineer" @ ORG_3eab285c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T10:53:30.949Z] [BOT] ✅ Posted message: Full stack Software Engineer @ ORG_3eab285c in #💻・tech-jobs
[2026-02-05T10:53:30.949Z] [BOT] ✅ Industry: Full stack Software Engineer @ ORG_3eab285c
[2026-02-05T10:53:30.950Z] [BOT] 💾 Added channel posting: Full stack Software Engineer @ ORG_3eab285c → category channel (1 total channels)
💾 BEFORE MERGE: 2357 jobs in memory (cached)
[2026-02-05T10:53:30.993Z] [BOT] ✅ Loaded V2 database: 2356 jobs
💾 DISK STATE: 2356 jobs on disk
[2026-02-05T10:53:30.993Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2357
[2026-02-05T10:53:30.998Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2357 jobs (merged disk + memory)
[2026-02-05T10:53:31.000Z] [BOT] ✅ No jobs to archive (all 2357 jobs within 7-day window)
[2026-02-05T10:53:31.116Z] [BOT] 💾 Saved posted_jobs.json: 2357 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:53:32.882Z] [BOT] ✅ Posted message: Full stack Software Engineer @ ORG_3eab285c in #🏠・JID_ead674af
  ✅ Location: 🏠・JID_ead674af
[2026-02-05T10:53:32.883Z] [BOT] 💾 Added channel posting: Full stack Software Engineer @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T10:53:32.883Z] [BOT] 💾 BEFORE MERGE: 2357 jobs in memory (cached)
[2026-02-05T10:53:32.926Z] [BOT] ✅ Loaded V2 database: 2357 jobs
💾 DISK STATE: 2357 jobs on disk
[2026-02-05T10:53:32.926Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2357
[2026-02-05T10:53:32.931Z] [BOT] 🔀 Deep merged: Full stack Software Engineer @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
[2026-02-05T10:53:32.931Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2357 jobs (merged disk + memory)
[2026-02-05T10:53:32.932Z] [BOT] ✅ No jobs to archive (all 2357 jobs within 7-day window)
[2026-02-05T10:53:33.065Z] [BOT] 💾 Saved posted_jobs.json: 2357 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:53:37.565Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-02-05T10:53:37.566Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "7d46ff143b97c424"
⏭️  Skipping duplicate: JID_1180a0b6 (posted within 7 days)
[2026-02-05T10:53:37.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_2717a7c2..." not found, but found as SHA256 "dae0be79767481dd"
⏭️  Skipping duplicate: JID_c2543374 (posted within 7 days)
[2026-02-05T10:53:37.567Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_419bf646-..." not found, but found as SHA256 "720671e713902a87"
[2026-02-05T10:53:37.568Z] [BOT] ⏭️  Skipping duplicate: JID_474751d6 (posted within 7 days)
[2026-02-05T10:53:37.568Z] [BOT] ✅ Loaded pending queue: 7 total (0 pending, 7 enriched, 0 posted)
[2026-02-05T10:53:37.570Z] [BOT] ✅ Saved pending queue: 7 total (0 pending, 4 enriched, 3 posted)
[2026-02-05T10:53:37.570Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T10:53:37.660Z] [BOT] 📂 Loaded 12445 existing routing entries
[2026-02-05T10:53:37.793Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 12448
   Timestamp: 2026-02-05T10:53:37.741Z
[2026-02-05T10:53:37.793Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 9
[2026-02-05T10:53:37.793Z] [BOT] Successful: 5
   Failed: 0
   Skipped: 4
[2026-02-05T10:53:37.794Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-02-05T10:53:37.794Z] [BOT] Total posts: 5
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 2 posts
     2. #🤖・ai-jobs: 1 posts
     3. #📍・JID_6daed763: 1 posts
     4. #🏠・JID_ead674af: 1 posts
[2026-02-05T10:53:37.794Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2357 jobs in memory (cached)
[2026-02-05T10:53:37.849Z] [BOT] ✅ Loaded V2 database: 2357 jobs
💾 DISK STATE: 2357 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2357
[2026-02-05T10:53:37.852Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T10:53:37.852Z] [BOT] 💾 AFTER MERGE: 2357 jobs (merged disk + memory)
[2026-02-05T10:53:37.854Z] [BOT] ✅ No jobs to archive (all 2357 jobs within 7-day window)
[2026-02-05T10:53:37.968Z] [BOT] 💾 Saved posted_jobs.json: 2357 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T10:53:37.968Z] [BOT] ✅ Database saved successfully
[2026-02-05T10:53:39.990Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*