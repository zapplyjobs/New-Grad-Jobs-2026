# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T10:04:10.985Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T10:04:00.408Z] ========================================
[2025-12-23T10:04:00.410Z] Discord Bot Execution Log
[2025-12-23T10:04:00.410Z] Environment: GitHub Actions
[2025-12-23T10:04:00.410Z] Node Version: v20.19.6
[2025-12-23T10:04:00.410Z] ========================================
[2025-12-23T10:04:00.410Z] Environment Variables Check:
[2025-12-23T10:04:00.410Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T10:04:00.410Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.410Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T10:04:00.410Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T10:04:00.411Z] 
Multi-Channel Configuration:
[2025-12-23T10:04:00.411Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T10:04:00.411Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T10:04:00.411Z] 
Data Files Check:
[2025-12-23T10:04:00.412Z] .github/data/new_jobs.json: ✅ Exists (2 items, 1447 bytes)
[2025-12-23T10:04:00.414Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 420698 bytes)
[2025-12-23T10:04:00.415Z] 
========================================
[2025-12-23T10:04:00.415Z] Starting Enhanced Discord Bot...
[2025-12-23T10:04:00.415Z] ========================================
[2025-12-23T10:04:00.967Z] [BOT] ✅ Loaded V2 database: 727 jobs
[2025-12-23T10:04:01.559Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T10:04:01.559Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T10:04:01.560Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T10:04:01.560Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-23T10:04:01.613Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-23T10:04:01.674Z] [BOT] ✅ Export complete: Added 1, Skipped 1, Total 165
[2025-12-23T10:04:01.676Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-23T10:04:01.676Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T10:04:01.676Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-23T10:04:01.677Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-23T10:04:01.677Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T10:04:01.678Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-23T10:04:01.679Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science" @ ORG_1bb6fcfb
[2025-12-23T10:04:01.680Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-23T10:04:01.697Z] [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T10:04:01.889Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb in #📈・JID_fb739488
[2025-12-23T10:04:01.890Z] [BOT] ✅ Industry: Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb
[2025-12-23T10:04:03.567Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-23T10:04:03.567Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-23T10:04:05.068Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Product Analytics - BS/MS -> Master of Science @ ORG_1bb6fcfb (instance #1)
[2025-12-23T10:04:05.068Z] [BOT] 💾 BEFORE ARCHIVING: 728 jobs in database
[2025-12-23T10:04:05.069Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-23T10:04:05.081Z] [BOT] 📦 Archived 86 jobs to 2025-12.json (86 total in archive)
[2025-12-23T10:04:05.081Z] [BOT] ✅ Archiving complete: 86 archived, 642 active
[2025-12-23T10:04:05.087Z] [BOT] 💾 Saved posted_jobs.json: 642 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T10:04:08.088Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-23T10:04:08.088Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a59e7fc5 (posted within 7 days)
[2025-12-23T10:04:08.088Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-23T10:04:08.089Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
[2025-12-23T10:04:08.089Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-23T10:04:08.132Z] [BOT] 📂 Loaded 1035 existing routing entries
[2025-12-23T10:04:08.176Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1036
[2025-12-23T10:04:08.176Z] [BOT] Timestamp: 2025-12-23T10:04:08.171Z
[2025-12-23T10:04:08.176Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
   Total attempts: 3
[2025-12-23T10:04:08.176Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-23T10:04:08.177Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2025-12-23T10:04:08.177Z] [BOT] 1. #📈・JID_fb739488: 1 posts
     2. #🌉・san-francisco: 1 posts
[2025-12-23T10:04:08.177Z] [BOT] [STATS] Channel stats saved
[2025-12-23T10:04:10.189Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2320) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*