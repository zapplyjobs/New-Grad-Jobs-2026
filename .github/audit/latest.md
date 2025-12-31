# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T11:04:14.940Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T11:04:04.610Z] ========================================
[2025-12-31T11:04:04.611Z] Discord Bot Execution Log
[2025-12-31T11:04:04.612Z] Environment: GitHub Actions
[2025-12-31T11:04:04.612Z] Node Version: v20.19.6
[2025-12-31T11:04:04.612Z] ========================================
[2025-12-31T11:04:04.612Z] Environment Variables Check:
[2025-12-31T11:04:04.612Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T11:04:04.612Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.612Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T11:04:04.612Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T11:04:04.612Z] 
Multi-Channel Configuration:
[2025-12-31T11:04:04.612Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.612Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.612Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.612Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.613Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.613Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.613Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.613Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.613Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T11:04:04.613Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T11:04:04.613Z] 
Data Files Check:
[2025-12-31T11:04:04.613Z] .github/data/new_jobs.json: ✅ Exists (1 items, 4256 bytes)
[2025-12-31T11:04:04.614Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 32919 bytes)
[2025-12-31T11:04:04.614Z] 
========================================
[2025-12-31T11:04:04.614Z] Starting Enhanced Discord Bot...
[2025-12-31T11:04:04.614Z] ========================================
[2025-12-31T11:04:05.121Z] [BOT] ✅ Loaded V2 database: 55 jobs
[2025-12-31T11:04:05.636Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T11:04:05.637Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-31T11:04:05.637Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T11:04:05.679Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-31T11:04:05.722Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2025-12-31T11:04:05.723Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-31T11:04:05.723Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-31T11:04:05.723Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-31T11:04:05.724Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T11:04:05.727Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-31T11:04:05.727Z] [BOT] 📍 [ROUTING] "Direct Service Worker" @ ORG_55023686
[2025-12-31T11:04:05.728Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-31T11:04:05.745Z] [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T11:04:05.906Z] [BOT] ✅ Created forum post: 🏢 Direct Service Worker @ ORG_55023686 in #🩺・healthcare-jobs
[2025-12-31T11:04:05.906Z] [BOT] ✅ Industry: Direct Service Worker @ ORG_55023686
[2025-12-31T11:04:07.744Z] [BOT] ✅ Created forum post: 🏢 Direct Service Worker @ ORG_55023686 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-31T11:04:09.245Z] [BOT] 💾 Marked as posted: Direct Service Worker @ ORG_55023686 (instance #1)
[2025-12-31T11:04:09.245Z] [BOT] 💾 BEFORE ARCHIVING: 56 jobs in database
[2025-12-31T11:04:09.246Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T11:04:09.257Z] [BOT] 📦 Archived 3 jobs to 2025-12.json (3 total in archive)
[2025-12-31T11:04:09.257Z] [BOT] ✅ Archiving complete: 3 archived, 53 active
[2025-12-31T11:04:09.258Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
[2025-12-31T11:04:09.259Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-31T11:04:12.260Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-31T11:04:12.260Z] [BOT] ⏭️  Skipping duplicate: JID_fe595aef (posted within 7 days)
[2025-12-31T11:04:12.260Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-31T11:04:12.261Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-31T11:04:12.303Z] [BOT] 📂 Loaded 1115 existing routing entries
[2025-12-31T11:04:12.346Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1116
   Timestamp: 2025-12-31T11:04:12.342Z
[2025-12-31T11:04:12.347Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
   Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2025-12-31T11:04:12.347Z] [BOT] Channels used: 2
   Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-31T11:04:12.348Z] [BOT] [STATS] Channel stats saved
[2025-12-31T11:04:14.357Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*