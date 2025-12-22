# Discord Bot Execution Audit
**Timestamp:** 2025-12-22T00:09:15.641Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-22T00:09:02.638Z] ========================================
[2025-12-22T00:09:02.640Z] Discord Bot Execution Log
[2025-12-22T00:09:02.640Z] Environment: GitHub Actions
[2025-12-22T00:09:02.640Z] Node Version: v20.19.6
[2025-12-22T00:09:02.640Z] ========================================
[2025-12-22T00:09:02.640Z] Environment Variables Check:
[2025-12-22T00:09:02.640Z] DISCORD_TOKEN: ✅ Set
[2025-12-22T00:09:02.640Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.640Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-22T00:09:02.641Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-22T00:09:02.641Z] 
Multi-Channel Configuration:
[2025-12-22T00:09:02.641Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-22T00:09:02.641Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-22T00:09:02.641Z] 
Data Files Check:
[2025-12-22T00:09:02.642Z] .github/data/new_jobs.json: ✅ Exists (2 items, 5905 bytes)
[2025-12-22T00:09:02.646Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 534706 bytes)
[2025-12-22T00:09:02.646Z] 
========================================
[2025-12-22T00:09:02.646Z] Starting Enhanced Discord Bot...
[2025-12-22T00:09:02.646Z] ========================================
[2025-12-22T00:09:03.130Z] [BOT] ✅ Loaded V2 database: 913 jobs
[2025-12-22T00:09:04.312Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-22T00:09:04.313Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-22T00:09:04.313Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-22T00:09:04.313Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-22T00:09:04.438Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 173
[2025-12-22T00:09:04.440Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-22T00:09:04.440Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-22T00:09:04.440Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-22T00:09:04.440Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-22T00:09:04.441Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-22T00:09:04.441Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-22T00:09:04.442Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-22T00:09:04.443Z] [BOT] 📍 [ROUTING] "Junior Data Engineer" @ ORG_7a9c8205
[2025-12-22T00:09:04.443Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-22T00:09:04.448Z] [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-22T00:09:04.619Z] [BOT] ✅ Created forum post: 🏢 Junior Data Engineer @ ORG_7a9c8205 in #🤖・ai-jobs
  ✅ Industry: Junior Data Engineer @ ORG_7a9c8205
[2025-12-22T00:09:07.908Z] [BOT] ✅ Created forum post: 🏢 Junior Data Engineer @ ORG_7a9c8205 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-22T00:09:09.409Z] [BOT] 💾 Marked as posted: Junior Data Engineer @ ORG_7a9c8205 (instance #1)
[2025-12-22T00:09:09.409Z] [BOT] 💾 BEFORE ARCHIVING: 914 jobs in database
[2025-12-22T00:09:09.410Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-22T00:09:09.417Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2025-12-22T00:09:09.418Z] [BOT] ✅ Archiving complete: 1 archived, 913 active
[2025-12-22T00:09:09.426Z] [BOT] 💾 Saved posted_jobs.json: 913 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-22T00:09:12.426Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-22T00:09:12.427Z] [BOT] ⏭️  Skipping duplicate: JID_404c57a4 (posted within 7 days)
[2025-12-22T00:09:12.427Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-22T00:09:12.428Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-22T00:09:12.428Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-22T00:09:12.476Z] [BOT] 📂 Loaded 997 existing routing entries
[2025-12-22T00:09:12.522Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 998
   Timestamp: 2025-12-22T00:09:12.518Z
[2025-12-22T00:09:12.522Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_0b37efa6.jsonl
   Total attempts: 3
[2025-12-22T00:09:12.522Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-22T00:09:12.523Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2025-12-22T00:09:12.523Z] [BOT] 2. #💻・remote-usa: 1 posts
[2025-12-22T00:09:12.523Z] [BOT] [STATS] Channel stats saved
[2025-12-22T00:09:14.537Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2327) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*