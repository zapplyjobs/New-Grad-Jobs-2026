# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T03:15:08.549Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T03:14:57.178Z] ========================================
[2026-01-03T03:14:57.180Z] Discord Bot Execution Log
[2026-01-03T03:14:57.180Z] Environment: GitHub Actions
[2026-01-03T03:14:57.180Z] Node Version: v20.19.6
[2026-01-03T03:14:57.180Z] ========================================
[2026-01-03T03:14:57.180Z] Environment Variables Check:
[2026-01-03T03:14:57.180Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T03:14:57.180Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.180Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T03:14:57.180Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T03:14:57.180Z] 
Multi-Channel Configuration:
[2026-01-03T03:14:57.181Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T03:14:57.181Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T03:14:57.181Z] 
Data Files Check:
[2026-01-03T03:14:57.182Z] .github/data/new_jobs.json: ✅ Exists (1 items, 740 bytes)
[2026-01-03T03:14:57.182Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 89483 bytes)
[2026-01-03T03:14:57.182Z] 
========================================
[2026-01-03T03:14:57.182Z] Starting Enhanced Discord Bot...
[2026-01-03T03:14:57.182Z] ========================================
[2026-01-03T03:14:57.692Z] [BOT] ✅ Loaded V2 database: 146 jobs
[2026-01-03T03:14:58.618Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T03:14:58.619Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2026-01-03T03:14:58.619Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T03:14:58.709Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 55
[2026-01-03T03:14:58.710Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-03T03:14:58.710Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-03T03:14:58.710Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-03T03:14:58.710Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-03T03:14:58.710Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T03:14:58.712Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T03:14:58.713Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Media Network Global Engineering - 2026 Start" @ ORG_08c9a13c
[2026-01-03T03:14:58.713Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T03:14:58.717Z] [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T03:14:58.926Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c
[2026-01-03T03:15:00.831Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c in #🌉・san-francisco
[2026-01-03T03:15:00.831Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T03:15:02.332Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Media Network Global Engineering - 2026 Start @ ORG_08c9a13c (instance #1)
[2026-01-03T03:15:02.332Z] [BOT] 💾 BEFORE ARCHIVING: 147 jobs in database
[2026-01-03T03:15:02.333Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-03T03:15:02.351Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-03T03:15:02.351Z] [BOT] ✅ Archiving complete: 1 archived, 146 active
[2026-01-03T03:15:02.353Z] [BOT] 💾 Saved posted_jobs.json: 146 active jobs
[2026-01-03T03:15:02.353Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T03:15:05.354Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-03T03:15:05.354Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_9c80e33d-detail (posted within 7 days)
[2026-01-03T03:15:05.355Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-03T03:15:05.355Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-03T03:15:05.355Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T03:15:05.397Z] [BOT] 📂 Loaded 1224 existing routing entries
[2026-01-03T03:15:05.442Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1225
   Timestamp: 2026-01-03T03:15:05.437Z
[2026-01-03T03:15:05.443Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 2
   Successful: 2
[2026-01-03T03:15:05.443Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-03T03:15:05.443Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-03T03:15:05.443Z] [BOT] Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-03T03:15:05.443Z] [BOT] [STATS] Channel stats saved
[2026-01-03T03:15:07.454Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2314) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*