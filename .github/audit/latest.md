# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T17:03:53.168Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T17:03:42.269Z] ========================================
[2026-01-02T17:03:42.271Z] Discord Bot Execution Log
[2026-01-02T17:03:42.271Z] Environment: GitHub Actions
[2026-01-02T17:03:42.271Z] Node Version: v20.19.6
[2026-01-02T17:03:42.271Z] ========================================
[2026-01-02T17:03:42.271Z] Environment Variables Check:
[2026-01-02T17:03:42.271Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T17:03:42.271Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.271Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T17:03:42.272Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T17:03:42.272Z] 
Multi-Channel Configuration:
[2026-01-02T17:03:42.272Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T17:03:42.272Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T17:03:42.273Z] 
Data Files Check:
[2026-01-02T17:03:42.273Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6661 bytes)
[2026-01-02T17:03:42.274Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 79063 bytes)
[2026-01-02T17:03:42.274Z] 
========================================
[2026-01-02T17:03:42.274Z] Starting Enhanced Discord Bot...
[2026-01-02T17:03:42.274Z] ========================================
[2026-01-02T17:03:42.809Z] [BOT] ✅ Loaded V2 database: 130 jobs
[2026-01-02T17:03:43.527Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T17:03:43.528Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T17:03:43.528Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T17:03:43.528Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T17:03:43.620Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 46
[2026-01-02T17:03:43.621Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T17:03:43.621Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-02T17:03:43.621Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-02T17:03:43.621Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-02T17:03:43.621Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T17:03:43.622Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-02T17:03:43.624Z] [BOT] 📍 [ROUTING] "Analyst 2" @ ORG_17ed0843 Mutual
[2026-01-02T17:03:43.624Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-02T17:03:43.629Z] [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T17:03:43.848Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 @ ORG_17ed0843 Mutual in #🤖・ai-jobs
[2026-01-02T17:03:43.848Z] [BOT] ✅ Industry: Analyst 2 @ ORG_17ed0843 Mutual
[2026-01-02T17:03:45.549Z] [BOT] ✅ Created forum post: 🏢 Analyst 2 @ ORG_17ed0843 Mutual in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-02T17:03:47.049Z] [BOT] 💾 Marked as posted: Analyst 2 @ ORG_17ed0843 Mutual (instance #1)
[2026-01-02T17:03:47.050Z] [BOT] 💾 BEFORE ARCHIVING: 131 jobs in database
[2026-01-02T17:03:47.050Z] [BOT] ✅ No jobs to archive (all 131 jobs within 7-day window)
[2026-01-02T17:03:47.062Z] [BOT] 💾 Saved posted_jobs.json: 131 active jobs
[2026-01-02T17:03:47.063Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T17:03:50.063Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T17:03:50.063Z] [BOT] ⏭️  Skipping duplicate: JID_7a782813 (posted within 7 days)
[2026-01-02T17:03:50.063Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T17:03:50.064Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T17:03:50.106Z] [BOT] 📂 Loaded 1205 existing routing entries
[2026-01-02T17:03:50.152Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1206
   Timestamp: 2026-01-02T17:03:50.146Z
[2026-01-02T17:03:50.153Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 2
[2026-01-02T17:03:50.153Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T17:03:50.153Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-02T17:03:50.153Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T17:03:50.153Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🚌・boston: 1 posts
[2026-01-02T17:03:50.153Z] [BOT] [STATS] Channel stats saved
[2026-01-02T17:03:52.162Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2377) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*