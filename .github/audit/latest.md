# Discord Bot Execution Audit
**Timestamp:** 2025-12-24T11:35:16.264Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-24T11:35:05.601Z] ========================================
[2025-12-24T11:35:05.603Z] Discord Bot Execution Log
[2025-12-24T11:35:05.603Z] Environment: GitHub Actions
[2025-12-24T11:35:05.603Z] Node Version: v20.19.6
[2025-12-24T11:35:05.603Z] ========================================
[2025-12-24T11:35:05.603Z] Environment Variables Check:
[2025-12-24T11:35:05.603Z] DISCORD_TOKEN: ✅ Set
[2025-12-24T11:35:05.603Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.603Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-24T11:35:05.604Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-24T11:35:05.604Z] 
Multi-Channel Configuration:
[2025-12-24T11:35:05.604Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-24T11:35:05.604Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-24T11:35:05.604Z] 
Data Files Check:
[2025-12-24T11:35:05.605Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5906 bytes)
[2025-12-24T11:35:05.607Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 389414 bytes)
[2025-12-24T11:35:05.607Z] 
========================================
[2025-12-24T11:35:05.607Z] Starting Enhanced Discord Bot...
[2025-12-24T11:35:05.607Z] ========================================
[2025-12-24T11:35:06.159Z] [BOT] ✅ Loaded V2 database: 671 jobs
[2025-12-24T11:35:06.629Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-24T11:35:06.630Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-24T11:35:06.630Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-24T11:35:06.630Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-24T11:35:06.686Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-24T11:35:06.746Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 160
[2025-12-24T11:35:06.748Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-24T11:35:06.748Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-24T11:35:06.748Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-24T11:35:06.748Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-24T11:35:06.749Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-24T11:35:06.751Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-24T11:35:06.752Z] [BOT] 📍 [ROUTING] "Systems Analyst 1" @ ORG_ba93edf5 Corporation
[2025-12-24T11:35:06.752Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-24T11:35:06.757Z] [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-24T11:35:06.975Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst 1 @ ORG_ba93edf5 Corporation in #📣・marketing-jobs
[2025-12-24T11:35:06.976Z] [BOT] ✅ Industry: Systems Analyst 1 @ ORG_ba93edf5 Corporation
[2025-12-24T11:35:08.905Z] [BOT] ✅ Created forum post: 🏢 Systems Analyst 1 @ ORG_ba93edf5 Corporation in #🤠・austin
[2025-12-24T11:35:08.905Z] [BOT] ✅ Location: 🤠・austin
[2025-12-24T11:35:10.405Z] [BOT] 💾 Marked as posted: Systems Analyst 1 @ ORG_ba93edf5 Corporation (instance #1)
[2025-12-24T11:35:10.405Z] [BOT] 💾 BEFORE ARCHIVING: 672 jobs in database
[2025-12-24T11:35:10.406Z] [BOT] ✅ No jobs to archive (all 672 jobs within 7-day window)
[2025-12-24T11:35:10.415Z] [BOT] 💾 Saved posted_jobs.json: 672 active jobs
[2025-12-24T11:35:10.416Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-24T11:35:13.417Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-24T11:35:13.417Z] [BOT] ⏭️  Skipping duplicate: JID_b5e96c5b-lennar_jobs-JID_bdbf37f7-i_r25_0000005020 (posted within 7 days)
[2025-12-24T11:35:13.417Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-24T11:35:13.418Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-24T11:35:13.418Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-24T11:35:13.460Z] [BOT] 📂 Loaded 1064 existing routing entries
[2025-12-24T11:35:13.504Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1065
   Timestamp: 2025-12-24T11:35:13.500Z
[2025-12-24T11:35:13.505Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_1a414558.jsonl
[2025-12-24T11:35:13.505Z] [BOT] Total attempts: 3
   Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-24T11:35:13.505Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-24T11:35:13.505Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-24T11:35:13.505Z] [BOT] 1. #📣・marketing-jobs: 1 posts
     2. #🤠・austin: 1 posts
[2025-12-24T11:35:13.506Z] [BOT] [STATS] Channel stats saved
[2025-12-24T11:35:15.515Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2411) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*