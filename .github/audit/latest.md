# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T21:17:31.936Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T21:17:19.007Z] ========================================
[2026-02-05T21:17:19.009Z] Discord Bot Execution Log
[2026-02-05T21:17:19.010Z] Environment: GitHub Actions
[2026-02-05T21:17:19.010Z] Node Version: v20.20.0
[2026-02-05T21:17:19.010Z] ========================================
[2026-02-05T21:17:19.010Z] Environment Variables Check:
[2026-02-05T21:17:19.010Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T21:17:19.010Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T21:17:19.010Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T21:17:19.010Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T21:17:19.010Z] 
Multi-Channel Configuration:
[2026-02-05T21:17:19.011Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T21:17:19.011Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T21:17:19.011Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T21:17:19.011Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T21:17:19.011Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T21:17:19.011Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T21:17:19.011Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T21:17:19.011Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T21:17:19.011Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T21:17:19.011Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T21:17:19.011Z] 
Data Files Check:
[2026-02-05T21:17:19.012Z] .github/data/new_jobs.json: ✅ Exists (5 items, 74950 bytes)
[2026-02-05T21:17:19.070Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11592199 bytes)
[2026-02-05T21:17:19.070Z] 
========================================
[2026-02-05T21:17:19.070Z] Starting Enhanced Discord Bot...
[2026-02-05T21:17:19.070Z] ========================================
[2026-02-05T21:17:19.653Z] [BOT] ✅ Loaded V2 database: 2285 jobs
[2026-02-05T21:17:20.323Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T21:17:20.324Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T21:17:20.324Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T21:17:20.324Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T21:17:20.325Z] [BOT] [BOT] 📬 Found 5 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T21:17:20.326Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T21:17:20.326Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T21:17:20.326Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T21:17:20.327Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T21:17:20.327Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T21:17:20.327Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T21:17:20.328Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T21:17:20.328Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
[2026-02-05T21:17:20.328Z] [BOT] ⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T21:17:20.329Z] [BOT] 📬 Found 1 new jobs (4 already posted)...
[2026-02-05T21:17:20.330Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-02-05T21:17:20.330Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T21:17:20.330Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-05T21:17:20.331Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T21:17:20.331Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-02-05T21:17:20.332Z] [BOT] 📍 [ROUTING] "Entry Level Data Engineer" @ ORG_2f17a0f8 via Dice
[2026-02-05T21:17:20.332Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-02-05T21:17:20.350Z] [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T21:17:21.038Z] [BOT] ✅ Posted message: Entry Level Data Engineer @ ORG_2f17a0f8 via Dice in #🤖・ai-jobs
[2026-02-05T21:17:21.038Z] [BOT] ✅ Industry: Entry Level Data Engineer @ ORG_2f17a0f8 via Dice
[2026-02-05T21:17:21.039Z] [BOT] 💾 Added channel posting: Entry Level Data Engineer @ ORG_2f17a0f8 via Dice → category channel (1 total channels)
[2026-02-05T21:17:21.040Z] [BOT] 💾 BEFORE MERGE: 2286 jobs in memory (cached)
[2026-02-05T21:17:21.087Z] [BOT] ✅ Loaded V2 database: 2285 jobs
💾 DISK STATE: 2285 jobs on disk
[2026-02-05T21:17:21.088Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2286
[2026-02-05T21:17:21.093Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T21:17:21.093Z] [BOT] 💾 AFTER MERGE: 2286 jobs (merged disk + memory)
[2026-02-05T21:17:21.095Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-05T21:17:21.401Z] [BOT] 📦 Archived 18 jobs to 2026-01.json (18 total in archive)
✅ Archiving complete: 18 archived, 2268 active
[2026-02-05T21:17:21.703Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T21:17:23.511Z] [BOT] ✅ Posted message: Entry Level Data Engineer @ ORG_2f17a0f8 via Dice in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T21:17:23.512Z] [BOT] 💾 Added channel posting: Entry Level Data Engineer @ ORG_2f17a0f8 via Dice → location channel (2 total channels)
[2026-02-05T21:17:23.512Z] [BOT] 💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-05T21:17:23.559Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-05T21:17:23.564Z] [BOT] 🔀 Deep merged: Entry Level Data Engineer @ ORG_2f17a0f8 via Dice (disk: 1 channels → merged: 2 channels)
[2026-02-05T21:17:23.564Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-05T21:17:23.566Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-05T21:17:23.684Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T21:17:28.186Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T21:17:28.188Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_3d79f118..." not found, but found as SHA256 "92333338245ff124"
[2026-02-05T21:17:28.188Z] [BOT] ⏭️  Skipping duplicate: JID_d1e59a05 (posted within 7 days)
[2026-02-05T21:17:28.188Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T21:17:28.189Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 4 enriched, 1 posted)
[2026-02-05T21:17:28.189Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T21:17:28.281Z] [BOT] 📂 Loaded 12458 existing routing entries
[2026-02-05T21:17:28.420Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-02-05T21:17:28.420Z] [BOT] Total entries: 12459
   Timestamp: 2026-02-05T21:17:28.363Z
[2026-02-05T21:17:28.420Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T21:17:28.420Z] [BOT] Total attempts: 6
   Successful: 2
   Failed: 0
   Skipped: 4
[2026-02-05T21:17:28.421Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T21:17:28.421Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-02-05T21:17:28.421Z] [BOT] 2. #📍・JID_6daed763: 1 posts
[2026-02-05T21:17:28.421Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2268 jobs in memory (cached)
[2026-02-05T21:17:28.477Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-05T21:17:28.478Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2268
[2026-02-05T21:17:28.483Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T21:17:28.483Z] [BOT] 💾 AFTER MERGE: 2268 jobs (merged disk + memory)
[2026-02-05T21:17:28.484Z] [BOT] ✅ No jobs to archive (all 2268 jobs within 7-day window)
[2026-02-05T21:17:28.632Z] [BOT] 💾 Saved posted_jobs.json: 2268 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T21:17:30.655Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2518) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*