# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T22:14:39.660Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T22:14:28.158Z] ========================================
[2026-02-05T22:14:28.160Z] Discord Bot Execution Log
[2026-02-05T22:14:28.160Z] Environment: GitHub Actions
[2026-02-05T22:14:28.160Z] Node Version: v20.20.0
[2026-02-05T22:14:28.160Z] ========================================
[2026-02-05T22:14:28.160Z] Environment Variables Check:
[2026-02-05T22:14:28.160Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T22:14:28.160Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T22:14:28.160Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T22:14:28.161Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T22:14:28.161Z] 
Multi-Channel Configuration:
[2026-02-05T22:14:28.161Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T22:14:28.161Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:14:28.161Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:14:28.161Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T22:14:28.161Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:14:28.161Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:14:28.161Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:14:28.161Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:14:28.161Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T22:14:28.161Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T22:14:28.161Z] 
Data Files Check:
[2026-02-05T22:14:28.162Z] .github/data/new_jobs.json: ✅ Exists (5 items, 79028 bytes)
[2026-02-05T22:14:28.237Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11477148 bytes)
[2026-02-05T22:14:28.237Z] 
========================================
[2026-02-05T22:14:28.237Z] Starting Enhanced Discord Bot...
[2026-02-05T22:14:28.237Z] ========================================
[2026-02-05T22:14:28.784Z] [BOT] ✅ Loaded V2 database: 2268 jobs
[2026-02-05T22:14:29.232Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T22:14:29.233Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T22:14:29.233Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T22:14:29.234Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T22:14:29.234Z] [BOT] [BOT] 📬 Found 5 enriched jobs ready to post from pending queue
[2026-02-05T22:14:29.234Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T22:14:29.235Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T22:14:29.235Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T22:14:29.236Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T22:14:29.236Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T22:14:29.236Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T22:14:29.237Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T22:14:29.237Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T22:14:29.237Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T22:14:29.237Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T22:14:29.238Z] [BOT] 📬 Found 1 new jobs (4 already posted)...
[2026-02-05T22:14:29.238Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-02-05T22:14:29.239Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T22:14:29.239Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-05T22:14:29.239Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T22:14:29.241Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T22:14:29.243Z] [BOT] 📍 [ROUTING] "Industrial Engineer (Entry or Associate)" @ ORG_6181447bing
   Category: TECH (default)
[2026-02-05T22:14:29.243Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T22:14:29.261Z] [BOT ERROR] (node:2668) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T22:14:29.678Z] [BOT] ✅ Posted message: Industrial Engineer (Entry or Associate) @ ORG_6181447bing in #💻・tech-jobs
[2026-02-05T22:14:29.678Z] [BOT] ✅ Industry: Industrial Engineer (Entry or Associate) @ ORG_6181447bing
[2026-02-05T22:14:29.679Z] [BOT] 💾 Added channel posting: Industrial Engineer (Entry or Associate) @ ORG_6181447bing → category channel (1 total channels)
[2026-02-05T22:14:29.680Z] [BOT] 💾 BEFORE MERGE: 2269 jobs in memory (cached)
[2026-02-05T22:14:29.745Z] [BOT] ✅ Loaded V2 database: 2268 jobs
💾 DISK STATE: 2268 jobs on disk
[2026-02-05T22:14:29.746Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2269
[2026-02-05T22:14:29.751Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:14:29.751Z] [BOT] 💾 AFTER MERGE: 2269 jobs (merged disk + memory)
[2026-02-05T22:14:29.753Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-05T22:14:29.759Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 2259 active
[2026-02-05T22:14:29.899Z] [BOT] 💾 Saved posted_jobs.json: 2259 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:14:31.598Z] [BOT] ✅ Posted message: Industrial Engineer (Entry or Associate) @ ORG_6181447bing in #🌲・JID_efdf5921
[2026-02-05T22:14:31.598Z] [BOT] ✅ Location: 🌲・JID_efdf5921
[2026-02-05T22:14:31.599Z] [BOT] 💾 Added channel posting: Industrial Engineer (Entry or Associate) @ ORG_6181447bing → location channel (2 total channels)
[2026-02-05T22:14:31.599Z] [BOT] 💾 BEFORE MERGE: 2259 jobs in memory (cached)
[2026-02-05T22:14:31.653Z] [BOT] ✅ Loaded V2 database: 2259 jobs
💾 DISK STATE: 2259 jobs on disk
[2026-02-05T22:14:31.654Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2259
[2026-02-05T22:14:31.659Z] [BOT] 🔀 Deep merged: Industrial Engineer (Entry or Associate) @ ORG_6181447bing (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T22:14:31.659Z] [BOT] 💾 AFTER MERGE: 2259 jobs (merged disk + memory)
[2026-02-05T22:14:31.660Z] [BOT] ✅ No jobs to archive (all 2259 jobs within 7-day window)
[2026-02-05T22:14:31.805Z] [BOT] 💾 Saved posted_jobs.json: 2259 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T22:14:36.303Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T22:14:36.305Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_03f6df15..." not found, but found as SHA256 "6a3369d201d00380"
[2026-02-05T22:14:36.305Z] [BOT] ⏭️  Skipping duplicate: JID_9f6331ab (posted within 7 days)
[2026-02-05T22:14:36.305Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T22:14:36.306Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-05T22:14:36.306Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T22:14:36.411Z] [BOT] 📂 Loaded 12459 existing routing entries
[2026-02-05T22:14:36.538Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12460
   Timestamp: 2026-02-05T22:14:36.492Z
[2026-02-05T22:14:36.538Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 6
[2026-02-05T22:14:36.538Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 4
[2026-02-05T22:14:36.539Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-05T22:14:36.539Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #🌲・JID_efdf5921: 1 posts
[2026-02-05T22:14:36.539Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2259 jobs in memory (cached)
[2026-02-05T22:14:36.615Z] [BOT] ✅ Loaded V2 database: 2259 jobs
💾 DISK STATE: 2259 jobs on disk
💾 DEBUG: Iterating cached memory jobs - length=2259
[2026-02-05T22:14:36.622Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T22:14:36.622Z] [BOT] 💾 AFTER MERGE: 2259 jobs (merged disk + memory)
[2026-02-05T22:14:36.623Z] [BOT] ✅ No jobs to archive (all 2259 jobs within 7-day window)
[2026-02-05T22:14:36.767Z] [BOT] 💾 Saved posted_jobs.json: 2259 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T22:14:38.781Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2668) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*