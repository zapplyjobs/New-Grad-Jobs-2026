# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T15:33:54.138Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T15:33:42.198Z] ========================================
[2026-02-05T15:33:42.200Z] Discord Bot Execution Log
[2026-02-05T15:33:42.200Z] Environment: GitHub Actions
[2026-02-05T15:33:42.200Z] Node Version: v20.20.0
[2026-02-05T15:33:42.200Z] ========================================
[2026-02-05T15:33:42.200Z] Environment Variables Check:
[2026-02-05T15:33:42.200Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T15:33:42.200Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T15:33:42.200Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T15:33:42.200Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T15:33:42.200Z] 
Multi-Channel Configuration:
[2026-02-05T15:33:42.201Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T15:33:42.201Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:33:42.201Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:33:42.201Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T15:33:42.201Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:33:42.201Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:33:42.201Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:33:42.201Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:33:42.201Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T15:33:42.201Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T15:33:42.201Z] 
Data Files Check:
[2026-02-05T15:33:42.202Z] .github/data/new_jobs.json: ✅ Exists (5 items, 76401 bytes)
[2026-02-05T15:33:42.260Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 12089859 bytes)
[2026-02-05T15:33:42.260Z] 
========================================
[2026-02-05T15:33:42.260Z] Starting Enhanced Discord Bot...
[2026-02-05T15:33:42.260Z] ========================================
[2026-02-05T15:33:42.838Z] [BOT] ✅ Loaded V2 database: 2362 jobs
[2026-02-05T15:33:43.537Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-02-05T15:33:43.537Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T15:33:43.537Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T15:33:43.538Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T15:33:43.538Z] [BOT] [BOT] 📬 Found 5 enriched jobs ready to post from pending queue
[2026-02-05T15:33:43.538Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T15:33:43.540Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T15:33:43.540Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T15:33:43.540Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
[2026-02-05T15:33:43.541Z] [BOT] ⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T15:33:43.541Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T15:33:43.541Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T15:33:43.542Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
[2026-02-05T15:33:43.542Z] [BOT] ⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T15:33:43.543Z] [BOT] 📬 Found 1 new jobs (4 already posted)...
[2026-02-05T15:33:43.543Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-02-05T15:33:43.543Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-02-05T15:33:43.544Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-02-05T15:33:43.544Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-02-05T15:33:43.545Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-02-05T15:33:43.547Z] [BOT] 📍 [ROUTING] "Integration Engineer - CSAM" @ ORG_2f17a0f8 via Dice
[2026-02-05T15:33:43.547Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1462...4987)
[2026-02-05T15:33:43.564Z] [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T15:33:43.941Z] [BOT] ✅ Posted message: Integration Engineer - CSAM @ ORG_2f17a0f8 via Dice in #💻・tech-jobs
[2026-02-05T15:33:43.941Z] [BOT] ✅ Industry: Integration Engineer - CSAM @ ORG_2f17a0f8 via Dice
[2026-02-05T15:33:43.943Z] [BOT] 💾 Added channel posting: Integration Engineer - CSAM @ ORG_2f17a0f8 via Dice → category channel (1 total channels)
[2026-02-05T15:33:43.943Z] [BOT] 💾 BEFORE MERGE: 2363 jobs in memory (cached)
[2026-02-05T15:33:43.993Z] [BOT] ✅ Loaded V2 database: 2362 jobs
💾 DISK STATE: 2362 jobs on disk
[2026-02-05T15:33:43.994Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2363
[2026-02-05T15:33:43.999Z] [BOT] 💾 MERGE STATS: 1 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T15:33:43.999Z] [BOT] 💾 AFTER MERGE: 2363 jobs (merged disk + memory)
[2026-02-05T15:33:44.001Z] [BOT] ✅ No jobs to archive (all 2363 jobs within 7-day window)
[2026-02-05T15:33:44.139Z] [BOT] 💾 Saved posted_jobs.json: 2363 active jobs
[2026-02-05T15:33:44.140Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-02-05T15:33:45.933Z] [BOT] ✅ Posted message: Integration Engineer - CSAM @ ORG_2f17a0f8 via Dice in #📍・JID_6daed763
  ✅ Location: 📍・JID_6daed763
[2026-02-05T15:33:45.934Z] [BOT] 💾 Added channel posting: Integration Engineer - CSAM @ ORG_2f17a0f8 via Dice → location channel (2 total channels)
[2026-02-05T15:33:45.934Z] [BOT] 💾 BEFORE MERGE: 2363 jobs in memory (cached)
[2026-02-05T15:33:45.987Z] [BOT] ✅ Loaded V2 database: 2363 jobs
💾 DISK STATE: 2363 jobs on disk
[2026-02-05T15:33:45.988Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2363
[2026-02-05T15:33:45.993Z] [BOT] 🔀 Deep merged: Integration Engineer - CSAM @ ORG_2f17a0f8 via Dice (disk: 1 channels → merged: 2 channels)
💾 MERGE STATS: 0 new, 0 updated, 1 deep-merged, 0 skipped
[2026-02-05T15:33:45.993Z] [BOT] 💾 AFTER MERGE: 2363 jobs (merged disk + memory)
[2026-02-05T15:33:45.995Z] [BOT] ✅ No jobs to archive (all 2363 jobs within 7-day window)
[2026-02-05T15:33:46.117Z] [BOT] 💾 Saved posted_jobs.json: 2363 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T15:33:50.616Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-02-05T15:33:50.618Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_839a1952..." not found, but found as SHA256 "70973bbaea24452a"
⏭️  Skipping duplicate: JID_200f2bed (posted within 7 days)
[2026-02-05T15:33:50.618Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T15:33:50.620Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 4 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-02-05T15:33:50.620Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T15:33:50.711Z] [BOT] 📂 Loaded 12453 existing routing entries
[2026-02-05T15:33:50.846Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 12454
[2026-02-05T15:33:50.846Z] [BOT] Timestamp: 2026-02-05T15:33:50.793Z
[2026-02-05T15:33:50.846Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
   Total attempts: 6
[2026-02-05T15:33:50.847Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 4
[2026-02-05T15:33:50.847Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T15:33:50.847Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-02-05T15:33:50.847Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #📍・JID_6daed763: 1 posts
[2026-02-05T15:33:50.847Z] [BOT] [STATS] Channel stats saved
💾 Saving posted jobs database...
💾 BEFORE MERGE: 2363 jobs in memory (cached)
[2026-02-05T15:33:50.893Z] [BOT] ✅ Loaded V2 database: 2363 jobs
💾 DISK STATE: 2363 jobs on disk
[2026-02-05T15:33:50.893Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2363
[2026-02-05T15:33:50.898Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T15:33:50.898Z] [BOT] 💾 AFTER MERGE: 2363 jobs (merged disk + memory)
[2026-02-05T15:33:50.899Z] [BOT] ✅ No jobs to archive (all 2363 jobs within 7-day window)
[2026-02-05T15:33:51.034Z] [BOT] 💾 Saved posted_jobs.json: 2363 active jobs
✅ Verified: Database file matches in-memory state
✅ Database saved successfully
[2026-02-05T15:33:53.057Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2440) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*