# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T07:37:45.439Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T07:37:34.768Z] ========================================
[2025-12-30T07:37:34.769Z] Discord Bot Execution Log
[2025-12-30T07:37:34.770Z] Environment: GitHub Actions
[2025-12-30T07:37:34.770Z] Node Version: v20.19.6
[2025-12-30T07:37:34.770Z] ========================================
[2025-12-30T07:37:34.770Z] Environment Variables Check:
[2025-12-30T07:37:34.770Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T07:37:34.770Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.770Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T07:37:34.770Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T07:37:34.770Z] 
Multi-Channel Configuration:
[2025-12-30T07:37:34.770Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.770Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T07:37:34.771Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T07:37:34.771Z] 
Data Files Check:
[2025-12-30T07:37:34.771Z] .github/data/new_jobs.json: ✅ Exists (1 items, 700 bytes)
[2025-12-30T07:37:34.772Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 46378 bytes)
[2025-12-30T07:37:34.772Z] 
========================================
[2025-12-30T07:37:34.772Z] Starting Enhanced Discord Bot...
[2025-12-30T07:37:34.772Z] ========================================
[2025-12-30T07:37:35.283Z] [BOT] ✅ Loaded V2 database: 75 jobs
[2025-12-30T07:37:36.041Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2025-12-30T07:37:36.041Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T07:37:36.042Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T07:37:36.042Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2025-12-30T07:37:36.086Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-30T07:37:36.135Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 52
[2025-12-30T07:37:36.136Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-30T07:37:36.136Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-30T07:37:36.136Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-30T07:37:36.137Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-30T07:37:36.137Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T07:37:36.138Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-30T07:37:36.139Z] [BOT] 📍 [ROUTING] "Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start" @ ORG_1bb6fcfb
[2025-12-30T07:37:36.140Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T07:37:36.156Z] [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T07:37:36.422Z] [BOT] ✅ Created forum post: 🏢 Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb
[2025-12-30T07:37:38.128Z] [BOT] ✅ Created forum post: 🏢 Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-30T07:37:39.630Z] [BOT] 💾 Marked as posted: Mobile Software Engineer Graduate - Product Infrastructure - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-30T07:37:39.630Z] [BOT] 💾 BEFORE ARCHIVING: 76 jobs in database
[2025-12-30T07:37:39.630Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-30T07:37:39.637Z] [BOT] 📦 Archived 6 jobs to 2025-12.json (6 total in archive)
[2025-12-30T07:37:39.637Z] [BOT] ✅ Archiving complete: 6 archived, 70 active
[2025-12-30T07:37:39.638Z] [BOT] 💾 Saved posted_jobs.json: 70 active jobs
[2025-12-30T07:37:39.638Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T07:37:42.639Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-30T07:37:42.640Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_f5d2e34c (posted within 7 days)
[2025-12-30T07:37:42.640Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-30T07:37:42.640Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-30T07:37:42.641Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-30T07:37:42.683Z] [BOT] 📂 Loaded 1102 existing routing entries
[2025-12-30T07:37:42.727Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1103
   Timestamp: 2025-12-30T07:37:42.722Z
[2025-12-30T07:37:42.728Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
   Total attempts: 2
   Successful: 2
[2025-12-30T07:37:42.728Z] [BOT] Failed: 0
   Skipped: 0
[2025-12-30T07:37:42.728Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2025-12-30T07:37:42.728Z] [BOT] Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2025-12-30T07:37:42.728Z] [BOT] [STATS] Channel stats saved
[2025-12-30T07:37:44.738Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*