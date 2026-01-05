# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T21:05:27.485Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T21:05:19.041Z] ========================================
[2026-01-05T21:05:19.043Z] Discord Bot Execution Log
[2026-01-05T21:05:19.043Z] Environment: GitHub Actions
[2026-01-05T21:05:19.044Z] Node Version: v20.19.6
[2026-01-05T21:05:19.044Z] ========================================
[2026-01-05T21:05:19.044Z] Environment Variables Check:
[2026-01-05T21:05:19.044Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T21:05:19.044Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.044Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T21:05:19.044Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T21:05:19.044Z] 
Multi-Channel Configuration:
[2026-01-05T21:05:19.044Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.044Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T21:05:19.045Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T21:05:19.045Z] 
Data Files Check:
[2026-01-05T21:05:19.046Z] .github/data/new_jobs.json: ✅ Exists (1 items, 9958 bytes)
[2026-01-05T21:05:19.050Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 669383 bytes)
[2026-01-05T21:05:19.050Z] 
========================================
[2026-01-05T21:05:19.050Z] Starting Enhanced Discord Bot...
[2026-01-05T21:05:19.050Z] ========================================
[2026-01-05T21:05:19.566Z] [BOT] ✅ Loaded V2 database: 1315 jobs
[2026-01-05T21:05:20.031Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T21:05:20.031Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T21:05:20.031Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T21:05:20.032Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[BOT] 📬 Found 1 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Director, Marketing Communications at gohighlevel
[2026-01-05T21:05:20.033Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-05T21:05:20.033Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-05T21:05:20.033Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T21:05:20.034Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T21:05:20.034Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T21:05:20.034Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-05T21:05:20.036Z] [BOT] 📍 [ROUTING] "Senior Director, Marketing Communications" @ gohighlevel
[2026-01-05T21:05:20.036Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-05T21:05:20.041Z] [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T21:05:20.202Z] [BOT] ✅ Created forum post: 🏢 Senior Director, Marketing Communications @ gohighlevel in #🤖・ai-jobs
[2026-01-05T21:05:20.202Z] [BOT] ✅ Industry: Senior Director, Marketing Communications @ gohighlevel
[2026-01-05T21:05:21.704Z] [BOT] 💾 Marked as posted: Senior Director, Marketing Communications @ gohighlevel (instance #1)
[2026-01-05T21:05:21.705Z] [BOT] 💾 BEFORE ARCHIVING: 1316 jobs in database
[2026-01-05T21:05:21.706Z] [BOT] ✅ No jobs to archive (all 1316 jobs within 7-day window)
[2026-01-05T21:05:21.719Z] [BOT] 💾 Saved posted_jobs.json: 1316 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T21:05:24.720Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T21:05:24.720Z] [BOT] ⏭️  Skipping duplicate: JID_2e15f3a3 (posted within 7 days)
[2026-01-05T21:05:24.721Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T21:05:24.721Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-05T21:05:24.721Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-05T21:05:24.774Z] [BOT] 📂 Loaded 2226 existing routing entries
[2026-01-05T21:05:24.829Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-05T21:05:24.829Z] [BOT] New entries: 1
   Total entries: 2227
   Timestamp: 2026-01-05T21:05:24.818Z
[2026-01-05T21:05:24.830Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T21:05:24.830Z] [BOT] Total attempts: 1
   Successful: 1
   Failed: 0
   Skipped: 0
[2026-01-05T21:05:24.830Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-05T21:05:24.830Z] [BOT] 1. #🤖・ai-jobs: 1 posts
[2026-01-05T21:05:24.830Z] [BOT] [STATS] Channel stats saved
[2026-01-05T21:05:26.845Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2493) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*