# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T19:08:17.704Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T19:08:06.299Z] ========================================
[2026-01-05T19:08:06.301Z] Discord Bot Execution Log
[2026-01-05T19:08:06.301Z] Environment: GitHub Actions
[2026-01-05T19:08:06.301Z] Node Version: v20.19.6
[2026-01-05T19:08:06.301Z] ========================================
[2026-01-05T19:08:06.301Z] Environment Variables Check:
[2026-01-05T19:08:06.301Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T19:08:06.301Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.301Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T19:08:06.302Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T19:08:06.302Z] 
Multi-Channel Configuration:
[2026-01-05T19:08:06.302Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T19:08:06.302Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T19:08:06.302Z] 
Data Files Check:
[2026-01-05T19:08:06.303Z] .github/data/new_jobs.json: ✅ Exists (2 items, 26490 bytes)
[2026-01-05T19:08:06.308Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 667755 bytes)
[2026-01-05T19:08:06.308Z] 
========================================
[2026-01-05T19:08:06.308Z] Starting Enhanced Discord Bot...
[2026-01-05T19:08:06.308Z] ========================================
[2026-01-05T19:08:06.820Z] [BOT] ✅ Loaded V2 database: 1311 jobs
[2026-01-05T19:08:07.553Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T19:08:07.553Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T19:08:07.553Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T19:08:07.556Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-05T19:08:07.556Z] [BOT] [BOT] 📬 Found 2 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Sales Account Executive,  State at verkada
[2026-01-05T19:08:07.558Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-05T19:08:07.558Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-05T19:08:07.558Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-05T19:08:07.559Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T19:08:07.559Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-05T19:08:07.559Z] [BOT] - Enterprise Sales Account Executive,  State @ verkada: seattle, wa united states, indianapolis, in united states; minneapolis, mn united states
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T19:08:07.561Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T19:08:07.562Z] [BOT] 📍 [ROUTING] "Enterprise Sales Account Executive,  State" @ verkada
[2026-01-05T19:08:07.562Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T19:08:07.566Z] [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T19:08:08.003Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Account Executive,  State @ verkada in #💲・sales-jobs
[2026-01-05T19:08:08.003Z] [BOT] ✅ Industry: Enterprise Sales Account Executive,  State @ verkada
[2026-01-05T19:08:09.913Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Account Executive,  State @ verkada in #🌧️・seattle
[2026-01-05T19:08:09.913Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-05T19:08:11.413Z] [BOT] 💾 Marked as posted: Enterprise Sales Account Executive,  State @ verkada (instance #1)
[2026-01-05T19:08:11.413Z] [BOT] 💾 BEFORE ARCHIVING: 1312 jobs in database
[2026-01-05T19:08:11.414Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-05T19:08:11.420Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (2 total in archive)
[2026-01-05T19:08:11.420Z] [BOT] ✅ Archiving complete: 2 archived, 1310 active
[2026-01-05T19:08:11.428Z] [BOT] 💾 Saved posted_jobs.json: 1310 active jobs
[2026-01-05T19:08:11.429Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T19:08:11.429Z] [BOT] 💾 Marked as posted: Enterprise Sales Account Executive,  State @ verkada (instance #1)
[2026-01-05T19:08:11.429Z] [BOT] 💾 BEFORE ARCHIVING: 1311 jobs in database
[2026-01-05T19:08:11.430Z] [BOT] ✅ No jobs to archive (all 1311 jobs within 7-day window)
[2026-01-05T19:08:11.438Z] [BOT] 💾 Saved posted_jobs.json: 1311 active jobs
[2026-01-05T19:08:11.438Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T19:08:14.439Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T19:08:14.440Z] [BOT] ⏭️  Skipping duplicate: JID_e54c34e3 (posted within 7 days)
[2026-01-05T19:08:14.440Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-05T19:08:14.441Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2026-01-05T19:08:14.441Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T19:08:14.493Z] [BOT] 📂 Loaded 2221 existing routing entries
[2026-01-05T19:08:14.550Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-05T19:08:14.550Z] [BOT] Total entries: 2222
   Timestamp: 2026-01-05T19:08:14.537Z
[2026-01-05T19:08:14.551Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T19:08:14.551Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-05T19:08:14.551Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-05T19:08:14.551Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
[2026-01-05T19:08:14.551Z] [BOT] 2. #🌧️・seattle: 1 posts
[2026-01-05T19:08:14.551Z] [BOT] [STATS] Channel stats saved
[2026-01-05T19:08:16.562Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2378) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*