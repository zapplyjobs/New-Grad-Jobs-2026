# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T12:41:10.873Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T12:40:52.071Z] ========================================
[2026-02-05T12:40:52.073Z] Discord Bot Execution Log
[2026-02-05T12:40:52.073Z] Environment: GitHub Actions
[2026-02-05T12:40:52.073Z] Node Version: v20.20.0
[2026-02-05T12:40:52.073Z] ========================================
[2026-02-05T12:40:52.073Z] Environment Variables Check:
[2026-02-05T12:40:52.073Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T12:40:52.073Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T12:40:52.073Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T12:40:52.073Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T12:40:52.073Z] 
Multi-Channel Configuration:
[2026-02-05T12:40:52.074Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T12:40:52.074Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:40:52.074Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:40:52.074Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T12:40:52.074Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:40:52.074Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:40:52.074Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:40:52.074Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:40:52.074Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T12:40:52.074Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T12:40:52.074Z] 
Data Files Check:
[2026-02-05T12:40:52.075Z] .github/data/new_jobs.json: ✅ Exists (6 items, 87567 bytes)
[2026-02-05T12:40:52.135Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12061271 bytes)
[2026-02-05T12:40:52.135Z] 
========================================
[2026-02-05T12:40:52.135Z] Starting Enhanced Discord Bot...
[2026-02-05T12:40:52.135Z] ========================================
[2026-02-05T12:40:52.713Z] [BOT] ✅ Loaded V2 database: 2357 jobs
[2026-02-05T12:40:53.338Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T12:40:53.338Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T12:40:53.339Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T12:40:53.339Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2026-02-05T12:40:53.339Z] [BOT] [BOT] 📬 Found 6 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T12:40:53.341Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T12:40:53.341Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T12:40:53.341Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T12:40:53.341Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T12:40:53.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T12:40:53.342Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T12:40:53.342Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T12:40:53.344Z] [BOT] 📬 Found 2 new jobs (4 already posted)...
[2026-02-05T12:40:53.344Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-02-05T12:40:53.345Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-02-05T12:40:53.345Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-02-05T12:40:53.345Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T12:40:53.346Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-02-05T12:40:53.347Z] [BOT] 📍 [ROUTING] "Software Engineer - Android" @ ORG_3eab285c
[2026-02-05T12:40:53.347Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-02-05T12:40:53.348Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-02-05T12:40:53.365Z] [BOT ERROR] (node:2557) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T12:40:53.569Z] [BOT] ✅ Posted message: Software Engineer - Android @ ORG_3eab285c in #📊・JID_fb739488
[2026-02-05T12:40:53.569Z] [BOT] ✅ Industry: Software Engineer - Android @ ORG_3eab285c
[2026-02-05T12:40:53.570Z] [BOT] 💾 Added channel posting: Software Engineer - Android @ ORG_3eab285c → category channel (1 total channels)
[2026-02-05T12:40:53.571Z] [BOT] 💾 BEFORE MERGE: 2358 jobs in memory (cached)
[2026-02-05T12:40:53.621Z] [BOT] ✅ Loaded V2 database: 2357 jobs
💾 DISK STATE: 2357 jobs on disk
[2026-02-05T12:40:53.622Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2358
[2026-02-05T12:40:53.627Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T12:40:53.627Z] [BOT] 💾 AFTER MERGE: 2358 jobs (merged disk + memory)
[2026-02-05T12:40:53.629Z] [BOT] ✅ No jobs to archive (all 2358 jobs within 7-day window)
[2026-02-05T12:40:53.750Z] [BOT] 💾 Saved posted_jobs.json: 2358 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T12:40:55.579Z] [BOT] ✅ Posted message: Software Engineer - Android @ ORG_3eab285c in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T12:40:55.579Z] [BOT] 💾 Added channel posting: Software Engineer - Android @ ORG_3eab285c → location channel (2 total channels)
[2026-02-05T12:40:55.580Z] [BOT] 💾 BEFORE MERGE: 2358 jobs in memory (cached)
[2026-02-05T12:40:55.628Z] [BOT] ✅ Loaded V2 database: 2358 jobs
💾 DISK STATE: 2358 jobs on disk
[2026-02-05T12:40:55.630Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2358
[2026-02-05T12:40:55.634Z] [BOT] 🔀 Deep merged: Software Engineer - Android @ ORG_3eab285c (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T12:40:55.635Z] [BOT] 💾 AFTER MERGE: 2358 jobs (merged disk + memory)
[2026-02-05T12:40:55.636Z] [BOT] ✅ No jobs to archive (all 2358 jobs within 7-day window)
[2026-02-05T12:40:55.756Z] [BOT] 💾 Saved posted_jobs.json: 2358 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T12:41:00.257Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T12:41:00.259Z] [BOT] 📍 [ROUTING] "Software Engineer, Applied AI (Seattle)" @ ORG_097e7361
[2026-02-05T12:41:00.259Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-02-05T12:41:00.633Z] [BOT] ✅ Posted message: Software Engineer, Applied AI (Seattle) @ ORG_097e7361 in #🤖・ai-jobs
[2026-02-05T12:41:00.633Z] [BOT] ✅ Industry: Software Engineer, Applied AI (Seattle) @ ORG_097e7361
[2026-02-05T12:41:00.634Z] [BOT] 💾 Added channel posting: Software Engineer, Applied AI (Seattle) @ ORG_097e7361 → category channel (1 total channels)
[2026-02-05T12:41:00.634Z] [BOT] 💾 BEFORE MERGE: 2359 jobs in memory (cached)
[2026-02-05T12:41:00.676Z] [BOT] ✅ Loaded V2 database: 2358 jobs
💾 DISK STATE: 2358 jobs on disk
[2026-02-05T12:41:00.677Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2359
[2026-02-05T12:41:00.682Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
💾 AFTER MERGE: 2359 jobs (merged disk + memory)
[2026-02-05T12:41:00.683Z] [BOT] ✅ No jobs to archive (all 2359 jobs within 7-day window)
[2026-02-05T12:41:00.814Z] [BOT] 💾 Saved posted_jobs.json: 2359 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T12:41:02.634Z] [BOT] ✅ Posted message: Software Engineer, Applied AI (Seattle) @ ORG_097e7361 in #🌲・JID_efdf5921
  ✅ Location: 🌲・JID_efdf5921
[2026-02-05T12:41:02.634Z] [BOT] 💾 Added channel posting: Software Engineer, Applied AI (Seattle) @ ORG_097e7361 → location channel (2 total channels)
[2026-02-05T12:41:02.635Z] [BOT] 💾 BEFORE MERGE: 2359 jobs in memory (cached)
[2026-02-05T12:41:02.673Z] [BOT] ✅ Loaded V2 database: 2359 jobs
💾 DISK STATE: 2359 jobs on disk
[2026-02-05T12:41:02.673Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2359
[2026-02-05T12:41:02.678Z] [BOT] 🔀 Deep merged: Software Engineer, Applied AI (Seattle) @ ORG_097e7361 (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T12:41:02.678Z] [BOT] 💾 AFTER MERGE: 2359 jobs (merged disk + memory)
[2026-02-05T12:41:02.680Z] [BOT] ✅ No jobs to archive (all 2359 jobs within 7-day window)
[2026-02-05T12:41:02.803Z] [BOT] 💾 Saved posted_jobs.json: 2359 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T12:41:07.303Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-02-05T12:41:07.304Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_5dacedaa..." not found, but found as SHA256 "4144ddafc5709012"
[2026-02-05T12:41:07.305Z] [BOT] ⏭️  Skipping duplicate: JID_c811d2fb (posted within 7 days)
[2026-02-05T12:41:07.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_366ac621..." not found, but found as SHA256 "3f5785457da02a0c"
⏭️  Skipping duplicate: JID_da653b39 (posted within 7 days)
[2026-02-05T12:41:07.306Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2026-02-05T12:41:07.307Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 4 enriched, 2 posted)
[2026-02-05T12:41:07.307Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T12:41:07.398Z] [BOT] 📂 Loaded 12448 existing routing entries
[2026-02-05T12:41:07.535Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-02-05T12:41:07.535Z] [BOT] Total entries: 12450
   Timestamp: 2026-02-05T12:41:07.480Z
[2026-02-05T12:41:07.535Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T12:41:07.535Z] [BOT] Total attempts: 8
   Successful: 4
   Failed: 0
   Skipped: 4
[2026-02-05T12:41:07.536Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T12:41:07.536Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #📊・JID_fb739488: 1 posts
     2. #📍・JID_6daed763: 1 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🌲・JID_efdf5921: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2359 jobs in memory (cached)
[2026-02-05T12:41:07.591Z] [BOT] ✅ Loaded V2 database: 2359 jobs
💾 DISK STATE: 2359 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2359
[2026-02-05T12:41:07.596Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T12:41:07.596Z] [BOT] 💾 AFTER MERGE: 2359 jobs (merged disk + memory)
[2026-02-05T12:41:07.597Z] [BOT] ✅ No jobs to archive (all 2359 jobs within 7-day window)
[2026-02-05T12:41:07.726Z] [BOT] 💾 Saved posted_jobs.json: 2359 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T12:41:09.745Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2557) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*