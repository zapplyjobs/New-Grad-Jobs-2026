# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T00:09:45.456Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T00:09:34.215Z] ========================================
[2025-12-31T00:09:34.217Z] Discord Bot Execution Log
[2025-12-31T00:09:34.217Z] Environment: GitHub Actions
[2025-12-31T00:09:34.217Z] Node Version: v20.19.6
[2025-12-31T00:09:34.217Z] ========================================
[2025-12-31T00:09:34.217Z] Environment Variables Check:
[2025-12-31T00:09:34.218Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T00:09:34.218Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.218Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T00:09:34.218Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T00:09:34.218Z] 
Multi-Channel Configuration:
[2025-12-31T00:09:34.218Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.218Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.218Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.218Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.218Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.218Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.219Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.219Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.219Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T00:09:34.219Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T00:09:34.219Z] 
Data Files Check:
[2025-12-31T00:09:34.219Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4022 bytes)
[2025-12-31T00:09:34.220Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 42241 bytes)
[2025-12-31T00:09:34.220Z] 
========================================
[2025-12-31T00:09:34.220Z] Starting Enhanced Discord Bot...
[2025-12-31T00:09:34.220Z] ========================================
[2025-12-31T00:09:34.723Z] [BOT] ✅ Loaded V2 database: 69 jobs
[2025-12-31T00:09:35.628Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2025-12-31T00:09:35.629Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-31T00:09:35.629Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T00:09:35.630Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-31T00:09:35.720Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 40
[2025-12-31T00:09:35.720Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-31T00:09:35.721Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-31T00:09:35.721Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-31T00:09:35.721Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-31T00:09:35.721Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T00:09:35.722Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-31T00:09:35.723Z] [BOT] 📍 [ROUTING] "Associate Software Support - Java" @ DuCharme, McMillen & Associates
[2025-12-31T00:09:35.724Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-31T00:09:35.728Z] [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T00:09:35.880Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support - Java @ DuCharme, McMillen & Associates in #💻・tech-jobs
[2025-12-31T00:09:35.880Z] [BOT] ✅ Industry: Associate Software Support - Java @ DuCharme, McMillen & Associates
[2025-12-31T00:09:37.849Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support - Java @ DuCharme, McMillen & Associates in #💻・remote-usa
[2025-12-31T00:09:37.849Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-31T00:09:39.349Z] [BOT] 💾 Marked as posted: Associate Software Support - Java @ DuCharme, McMillen & Associates (instance #1)
[2025-12-31T00:09:39.350Z] [BOT] 💾 BEFORE ARCHIVING: 70 jobs in database
[2025-12-31T00:09:39.350Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T00:09:39.355Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2025-12-31T00:09:39.355Z] [BOT] ✅ Archiving complete: 1 archived, 69 active
[2025-12-31T00:09:39.356Z] [BOT] 💾 Saved posted_jobs.json: 69 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-31T00:09:42.357Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-31T00:09:42.357Z] [BOT] ⏭️  Skipping duplicate: JID_7f95c4dc-_req293 (posted within 7 days)
[2025-12-31T00:09:42.357Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-31T00:09:42.358Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-31T00:09:42.358Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-31T00:09:42.399Z] [BOT] 📂 Loaded 1111 existing routing entries
[2025-12-31T00:09:42.444Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-31T00:09:42.444Z] [BOT] Total entries: 1112
   Timestamp: 2025-12-31T00:09:42.439Z
[2025-12-31T00:09:42.444Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
[2025-12-31T00:09:42.445Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2025-12-31T00:09:42.445Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-31T00:09:42.445Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-31T00:09:42.445Z] [BOT] [STATS] Channel stats saved
[2025-12-31T00:09:44.455Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*