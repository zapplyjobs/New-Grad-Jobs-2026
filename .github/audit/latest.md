# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T14:15:16.788Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T14:15:04.203Z] ========================================
[2026-02-05T14:15:04.205Z] Discord Bot Execution Log
[2026-02-05T14:15:04.206Z] Environment: GitHub Actions
[2026-02-05T14:15:04.206Z] Node Version: v20.20.0
[2026-02-05T14:15:04.206Z] ========================================
[2026-02-05T14:15:04.206Z] Environment Variables Check:
[2026-02-05T14:15:04.206Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T14:15:04.206Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T14:15:04.206Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T14:15:04.206Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T14:15:04.206Z] 
Multi-Channel Configuration:
[2026-02-05T14:15:04.206Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T14:15:04.207Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T14:15:04.207Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T14:15:04.207Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T14:15:04.207Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T14:15:04.207Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T14:15:04.207Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T14:15:04.207Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T14:15:04.207Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T14:15:04.207Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T14:15:04.207Z] 
Data Files Check:
[2026-02-05T14:15:04.208Z] .github/data/new_jobs.json: ✅ Exists (5 items, 70977 bytes)
[2026-02-05T14:15:04.266Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12078880 bytes)
[2026-02-05T14:15:04.266Z] 
========================================
[2026-02-05T14:15:04.266Z] Starting Enhanced Discord Bot...
[2026-02-05T14:15:04.266Z] ========================================
[2026-02-05T14:15:04.957Z] [BOT] ✅ Loaded V2 database: 2359 jobs
[2026-02-05T14:15:05.706Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T14:15:05.707Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T14:15:05.707Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T14:15:05.708Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T14:15:05.708Z] [BOT] [BOT] 📬 Found 5 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T14:15:05.709Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T14:15:05.709Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
[2026-02-05T14:15:05.710Z] [BOT] ⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T14:15:05.710Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T14:15:05.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T14:15:05.711Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T14:15:05.711Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T14:15:05.711Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T14:15:05.712Z] [BOT] 📬 Found 1 new jobs (4 already posted)...
[2026-02-05T14:15:05.712Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-02-05T14:15:05.713Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T14:15:05.713Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-05T14:15:05.713Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T14:15:05.715Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T14:15:05.716Z] [BOT] 📍 [ROUTING] "Associate Project Engineer" @ ORG_35ade3d4
   Category: TECH (matched: "engineer/engineering")
[2026-02-05T14:15:05.716Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T14:15:05.734Z] [BOT ERROR] (node:2666) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T14:15:06.112Z] [BOT] ✅ Posted message: Associate Project Engineer @ ORG_35ade3d4 in #💻・tech-jobs
[2026-02-05T14:15:06.112Z] [BOT] ✅ Industry: Associate Project Engineer @ ORG_35ade3d4
[2026-02-05T14:15:06.113Z] [BOT] 💾 Added channel posting: Associate Project Engineer @ ORG_35ade3d4 → category channel (1 total channels)
[2026-02-05T14:15:06.113Z] [BOT] 💾 BEFORE MERGE: 2360 jobs in memory (cached)
[2026-02-05T14:15:06.165Z] [BOT] ✅ Loaded V2 database: 2359 jobs
💾 DISK STATE: 2359 jobs on disk
[2026-02-05T14:15:06.166Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2360
[2026-02-05T14:15:06.172Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T14:15:06.172Z] [BOT] 💾 AFTER MERGE: 2360 jobs (merged disk + memory)
[2026-02-05T14:15:06.174Z] [BOT] ✅ No jobs to archive (all 2360 jobs within 7-day window)
[2026-02-05T14:15:06.304Z] [BOT] 💾 Saved posted_jobs.json: 2360 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T14:15:08.223Z] [BOT] ✅ Posted message: Associate Project Engineer @ ORG_35ade3d4 in #📍・JID_6daed763
[2026-02-05T14:15:08.223Z] [BOT] ✅ Location: 📍・JID_6daed763
[2026-02-05T14:15:08.224Z] [BOT] 💾 Added channel posting: Associate Project Engineer @ ORG_35ade3d4 → location channel (2 total channels)
[2026-02-05T14:15:08.224Z] [BOT] 💾 BEFORE MERGE: 2360 jobs in memory (cached)
[2026-02-05T14:15:08.275Z] [BOT] ✅ Loaded V2 database: 2360 jobs
💾 DISK STATE: 2360 jobs on disk
[2026-02-05T14:15:08.276Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2360
[2026-02-05T14:15:08.281Z] [BOT] 🔀 Deep merged: Associate Project Engineer @ ORG_35ade3d4 (disk: 1 channels → merged: 2 channels)
[2026-02-05T14:15:08.281Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
💾 AFTER MERGE: 2360 jobs (merged disk + memory)
[2026-02-05T14:15:08.284Z] [BOT] ✅ No jobs to archive (all 2360 jobs within 7-day window)
[2026-02-05T14:15:08.404Z] [BOT] 💾 Saved posted_jobs.json: 2360 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T14:15:12.905Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T14:15:12.907Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_e54bc5a3..." not found, but found as SHA256 "be83e9af65e045fb"
[2026-02-05T14:15:12.907Z] [BOT] ⏭️  Skipping duplicate: JID_e54bc5a3 (posted within 7 days)
[2026-02-05T14:15:12.908Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T14:15:12.909Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 4 enriched, 1 posted)
[2026-02-05T14:15:12.909Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-02-05T14:15:13.002Z] [BOT] 📂 Loaded 12450 existing routing entries
[2026-02-05T14:15:13.144Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12451
   Timestamp: 2026-02-05T14:15:13.088Z
[2026-02-05T14:15:13.145Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T14:15:13.145Z] [BOT] Total attempts: 6
   Successful: 2
   Failed: 0
   Skipped: 4
[2026-02-05T14:15:13.146Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #📍・JID_6daed763: 1 posts
[STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2360 jobs in memory (cached)
[2026-02-05T14:15:13.194Z] [BOT] ✅ Loaded V2 database: 2360 jobs
💾 DISK STATE: 2360 jobs on disk
[2026-02-05T14:15:13.195Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2360
[2026-02-05T14:15:13.201Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T14:15:13.201Z] [BOT] 💾 AFTER MERGE: 2360 jobs (merged disk + memory)
[2026-02-05T14:15:13.203Z] [BOT] ✅ No jobs to archive (all 2360 jobs within 7-day window)
[2026-02-05T14:15:13.340Z] [BOT] 💾 Saved posted_jobs.json: 2360 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T14:15:15.363Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2666) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*