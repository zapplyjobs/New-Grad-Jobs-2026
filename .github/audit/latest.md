# Discord Bot Execution Audit
**Timestamp:** 2025-12-27T01:53:07.255Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-27T01:52:56.750Z] ========================================
[2025-12-27T01:52:56.752Z] Discord Bot Execution Log
[2025-12-27T01:52:56.752Z] Environment: GitHub Actions
[2025-12-27T01:52:56.752Z] Node Version: v20.19.6
[2025-12-27T01:52:56.752Z] ========================================
[2025-12-27T01:52:56.752Z] Environment Variables Check:
[2025-12-27T01:52:56.752Z] DISCORD_TOKEN: ✅ Set
[2025-12-27T01:52:56.752Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.752Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-27T01:52:56.752Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-27T01:52:56.752Z] 
Multi-Channel Configuration:
[2025-12-27T01:52:56.752Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-27T01:52:56.753Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-27T01:52:56.753Z] 
Data Files Check:
[2025-12-27T01:52:56.754Z] .github/data/new_jobs.json: ✅ Exists (2 items, 9947 bytes)
[2025-12-27T01:52:56.755Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 229600 bytes)
[2025-12-27T01:52:56.755Z] 
========================================
[2025-12-27T01:52:56.755Z] Starting Enhanced Discord Bot...
[2025-12-27T01:52:56.755Z] ========================================
[2025-12-27T01:52:57.271Z] [BOT] ✅ Loaded V2 database: 390 jobs
[2025-12-27T01:52:57.895Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-27T01:52:57.895Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-27T01:52:57.896Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-27T01:52:57.896Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-27T01:52:57.943Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-27T01:52:57.994Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 72
[2025-12-27T01:52:57.996Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-27T01:52:57.996Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-27T01:52:57.996Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-27T01:52:57.996Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-27T01:52:57.997Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-27T01:52:57.997Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
[2025-12-27T01:52:57.997Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-27T01:52:57.998Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-27T01:52:58.000Z] [BOT] 📍 [ROUTING] "Computer Systems Analyst" @ ORG_eead3632
[2025-12-27T01:52:58.000Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2025-12-27T01:52:58.004Z] [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-27T01:52:58.343Z] [BOT] ✅ Created forum post: 🏢 Computer Systems Analyst @ ORG_eead3632 in #🤖・ai-jobs
[2025-12-27T01:52:58.343Z] [BOT] ✅ Industry: Computer Systems Analyst @ ORG_eead3632
[2025-12-27T01:53:00.034Z] [BOT] ✅ Created forum post: 🏢 Computer Systems Analyst @ ORG_eead3632 in #💻・remote-usa
[2025-12-27T01:53:00.034Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-27T01:53:01.535Z] [BOT] 💾 Marked as posted: Computer Systems Analyst @ ORG_eead3632 (instance #1)
[2025-12-27T01:53:01.535Z] [BOT] 💾 BEFORE ARCHIVING: 391 jobs in database
[2025-12-27T01:53:01.536Z] [BOT] ✅ No jobs to archive (all 391 jobs within 7-day window)
[2025-12-27T01:53:01.549Z] [BOT] 💾 Saved posted_jobs.json: 391 active jobs
[2025-12-27T01:53:01.550Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-27T01:53:04.551Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-27T01:53:04.551Z] [BOT] ⏭️  Skipping duplicate: JID_93dcc968 (posted within 7 days)
[2025-12-27T01:53:04.551Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-27T01:53:04.552Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-27T01:53:04.595Z] [BOT] 📂 Loaded 1081 existing routing entries
[2025-12-27T01:53:04.640Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1082
   Timestamp: 2025-12-27T01:53:04.635Z
[2025-12-27T01:53:04.640Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_22bd1254.jsonl
   Total attempts: 3
   Successful: 2
[2025-12-27T01:53:04.640Z] [BOT] Failed: 0
   Skipped: 1
[2025-12-27T01:53:04.641Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-27T01:53:04.641Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[STATS] Channel stats saved
[2025-12-27T01:53:06.650Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2341) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*