# Discord Bot Execution Audit
**Timestamp:** 2026-02-05T20:32:11.669Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-02-05T20:32:07.261Z] ========================================
[2026-02-05T20:32:07.262Z] Discord Bot Execution Log
[2026-02-05T20:32:07.263Z] Environment: GitHub Actions
[2026-02-05T20:32:07.263Z] Node Version: v20.20.0
[2026-02-05T20:32:07.263Z] ========================================
[2026-02-05T20:32:07.263Z] Environment Variables Check:
[2026-02-05T20:32:07.263Z] DISCORD_TOKEN: ✅ Set
[2026-02-05T20:32:07.263Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-02-05T20:32:07.263Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-02-05T20:32:07.263Z] DISCORD_GUILD_ID: ❌ Not set
[2026-02-05T20:32:07.263Z] 
Multi-Channel Configuration:
[2026-02-05T20:32:07.263Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-02-05T20:32:07.263Z] DISCORD_SALES_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:32:07.264Z] DISCORD_MARKETING_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:32:07.264Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-02-05T20:32:07.264Z] DISCORD_HEALTHCARE_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:32:07.264Z] DISCORD_PRODUCT_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:32:07.264Z] DISCORD_SUPPLY_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:32:07.264Z] DISCORD_PM_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:32:07.264Z] DISCORD_HR_CHANNEL_ID: ⭕ Not set
[2026-02-05T20:32:07.264Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-02-05T20:32:07.264Z] 
Data Files Check:
[2026-02-05T20:32:07.265Z] .github/data/new_jobs.json: ✅ Exists (5 items, 79547 bytes)
[2026-02-05T20:32:07.319Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 11600404 bytes)
[2026-02-05T20:32:07.319Z] 
========================================
[2026-02-05T20:32:07.319Z] Starting Enhanced Discord Bot...
[2026-02-05T20:32:07.319Z] ========================================
[2026-02-05T20:32:07.972Z] [BOT] ✅ Loaded V2 database: 2287 jobs
[2026-02-05T20:32:08.669Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-02-05T20:32:08.669Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-02-05T20:32:08.669Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-02-05T20:32:08.670Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T20:32:08.670Z] [BOT] [BOT] 📬 Found 5 enriched jobs ready to post from pending queue
[2026-02-05T20:32:08.670Z] [BOT] [BOT] 🔍 Sample enriched job: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T20:32:08.671Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "811cbe0f189dac94"
[2026-02-05T20:32:08.671Z] [BOT] ⏭️  Skipping duplicate: JID_5b0ef192 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer/Research Scientist, Audio at anthropic
[2026-02-05T20:32:08.672Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c9b660b0..." not found, but found as SHA256 "1752149f9c33ab78"
⏭️  Skipping duplicate: JID_c9b660b0 (posted within 7 days)
[2026-02-05T20:32:08.672Z] [BOT] ⏭️ Skipping already posted: ROLE_b8aca988 at datadog
[2026-02-05T20:32:08.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "860b70f12c622b3e"
[2026-02-05T20:32:08.673Z] [BOT] ⏭️  Skipping duplicate: JID_7e4d456f (posted within 7 days)
⏭️ Skipping already posted: Enterprise Account Executive, State & Local Sales at anthropic
[2026-02-05T20:32:08.673Z] [BOT] 🔧 ID mismatch detected: URL-based "JID_c1be21d2-..." not found, but found as SHA256 "5d10ea8dbeb07322"
⏭️  Skipping duplicate: JID_f7992b83 (posted within 7 days)
⏭️ Skipping already posted: ROLE_8670491d at anthropic
[2026-02-05T20:32:08.674Z] [BOT] 📬 Found 1 new jobs (4 already posted)...
[2026-02-05T20:32:08.675Z] [BOT] 🚫 Skipping blacklisted job: Software Engineer Director, Compute Infrastructure at LinkedIn
[2026-02-05T20:32:08.675Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2026-02-05T20:32:08.676Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2026-02-05T20:32:08.677Z] [BOT] 🗑️ Removed 1 blacklisted jobs from pending queue
📋 After blacklist filter: 0 jobs (1 blacklisted)
[2026-02-05T20:32:08.677Z] [BOT] 📋 After data quality filter: 0 jobs (0 invalid)
📋 After multi-location grouping: 0 unique jobs to post
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 0 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
🎉 Posting complete! Successfully posted: 0, Failed: 0
[2026-02-05T20:32:08.677Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-02-05T20:32:08.677Z] [BOT] ℹ️ No routing entries to save
[2026-02-05T20:32:08.678Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bc953dba.jsonl
[2026-02-05T20:32:08.678Z] [BOT] Total attempts: 5
   Successful: 0
   Failed: 0
   Skipped: 5
[2026-02-05T20:32:08.678Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-02-05T20:32:08.678Z] [BOT] Last cleanup: Never
   Total posts: 0
   Channels used: 0
[2026-02-05T20:32:08.679Z] [BOT] [STATS] Channel stats saved
[2026-02-05T20:32:08.679Z] [BOT] 💾 Saving posted jobs database...
[2026-02-05T20:32:08.679Z] [BOT] 💾 BEFORE MERGE: 2287 jobs in memory (cached)
[2026-02-05T20:32:08.729Z] [BOT] ✅ Loaded V2 database: 2287 jobs
💾 DISK STATE: 2287 jobs on disk
[2026-02-05T20:32:08.730Z] [BOT] 💾 DEBUG: Iterating cached memory jobs - length=2287
[2026-02-05T20:32:08.735Z] [BOT] 💾 MERGE STATS: 0 new, 0 updated, 0 deep-merged, 0 skipped
[2026-02-05T20:32:08.735Z] [BOT] 💾 AFTER MERGE: 2287 jobs (merged disk + memory)
[2026-02-05T20:32:08.736Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-02-05T20:32:08.741Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-02-05T20:32:08.741Z] [BOT] ✅ Archiving complete: 2 archived, 2285 active
[2026-02-05T20:32:08.860Z] [BOT] 💾 Saved posted_jobs.json: 2285 active jobs
✅ Verified: Database file matches in-memory state
[2026-02-05T20:32:08.860Z] [BOT] ✅ Database saved successfully
[2026-02-05T20:32:08.861Z] [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-02-05T20:32:10.882Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2492) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*