# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T06:45:11.730Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T06:45:00.545Z] ========================================
[2026-01-02T06:45:00.546Z] Discord Bot Execution Log
[2026-01-02T06:45:00.547Z] Environment: GitHub Actions
[2026-01-02T06:45:00.547Z] Node Version: v20.19.6
[2026-01-02T06:45:00.547Z] ========================================
[2026-01-02T06:45:00.547Z] Environment Variables Check:
[2026-01-02T06:45:00.547Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T06:45:00.547Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.547Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T06:45:00.547Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T06:45:00.547Z] 
Multi-Channel Configuration:
[2026-01-02T06:45:00.547Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.547Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.547Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.548Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.548Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.548Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.548Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.548Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.548Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T06:45:00.548Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T06:45:00.548Z] 
Data Files Check:
[2026-01-02T06:45:00.548Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6674 bytes)
[2026-01-02T06:45:00.549Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 64977 bytes)
[2026-01-02T06:45:00.549Z] 
========================================
[2026-01-02T06:45:00.549Z] Starting Enhanced Discord Bot...
[2026-01-02T06:45:00.549Z] ========================================
[2026-01-02T06:45:01.082Z] [BOT] ✅ Loaded V2 database: 108 jobs
[2026-01-02T06:45:01.653Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T06:45:01.654Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T06:45:01.654Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T06:45:01.654Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T06:45:01.700Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T06:45:01.752Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 39
[2026-01-02T06:45:01.753Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T06:45:01.753Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T06:45:01.753Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T06:45:01.754Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T06:45:01.754Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T06:45:01.757Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-02T06:45:01.758Z] [BOT] 📍 [ROUTING] "Research Specialist" @ ORG_9d38443e of Chicago
[2026-01-02T06:45:01.758Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-02T06:45:01.763Z] [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T06:45:02.100Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
[2026-01-02T06:45:02.100Z] [BOT] ✅ Industry: Research Specialist @ ORG_9d38443e of Chicago
[2026-01-02T06:45:03.933Z] [BOT] ✅ Created forum post: 🏢 Research Specialist @ ORG_9d38443e of Chicago in #🌆・chicago
[2026-01-02T06:45:03.933Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-02T06:45:05.434Z] [BOT] 💾 Marked as posted: Research Specialist @ ORG_9d38443e of Chicago (instance #1)
[2026-01-02T06:45:05.434Z] [BOT] 💾 BEFORE ARCHIVING: 109 jobs in database
[2026-01-02T06:45:05.435Z] [BOT] ✅ No jobs to archive (all 109 jobs within 7-day window)
[2026-01-02T06:45:05.440Z] [BOT] 💾 Saved posted_jobs.json: 109 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T06:45:08.441Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T06:45:08.442Z] [BOT] ⏭️  Skipping duplicate: JID_32cb8765-specialist_jr31936 (posted within 7 days)
[2026-01-02T06:45:08.442Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T06:45:08.443Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-02T06:45:08.443Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T06:45:08.486Z] [BOT] 📂 Loaded 1180 existing routing entries
[2026-01-02T06:45:08.531Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-02T06:45:08.531Z] [BOT] Total entries: 1181
   Timestamp: 2026-01-02T06:45:08.526Z
[2026-01-02T06:45:08.532Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T06:45:08.532Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T06:45:08.532Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-02T06:45:08.532Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #🌆・chicago: 1 posts
[2026-01-02T06:45:08.532Z] [BOT] [STATS] Channel stats saved
[2026-01-02T06:45:10.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*