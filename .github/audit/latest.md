# Discord Bot Execution Audit
**Timestamp:** 2025-12-31T15:37:28.529Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-31T15:37:17.235Z] ========================================
[2025-12-31T15:37:17.237Z] Discord Bot Execution Log
[2025-12-31T15:37:17.237Z] Environment: GitHub Actions
[2025-12-31T15:37:17.237Z] Node Version: v20.19.6
[2025-12-31T15:37:17.237Z] ========================================
[2025-12-31T15:37:17.237Z] Environment Variables Check:
[2025-12-31T15:37:17.237Z] DISCORD_TOKEN: ✅ Set
[2025-12-31T15:37:17.237Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.237Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-31T15:37:17.237Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-31T15:37:17.237Z] 
Multi-Channel Configuration:
[2025-12-31T15:37:17.237Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-31T15:37:17.238Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-31T15:37:17.238Z] 
Data Files Check:
[2025-12-31T15:37:17.238Z] .github/data/new_jobs.json: ✅ Exists (1 items, 2793 bytes)
[2025-12-31T15:37:17.239Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 31474 bytes)
[2025-12-31T15:37:17.239Z] 
========================================
[2025-12-31T15:37:17.239Z] Starting Enhanced Discord Bot...
[2025-12-31T15:37:17.239Z] ========================================
[2025-12-31T15:37:17.711Z] [BOT] ✅ Loaded V2 database: 53 jobs
[2025-12-31T15:37:18.630Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-31T15:37:18.631Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-31T15:37:18.631Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-31T15:37:18.675Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2025-12-31T15:37:18.720Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2025-12-31T15:37:18.721Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-31T15:37:18.721Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-31T15:37:18.721Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-31T15:37:18.722Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-31T15:37:18.722Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-31T15:37:18.725Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-31T15:37:18.725Z] [BOT] 📍 [ROUTING] "Associate Business Systems Analyst" @ ORG_7dcce8d0ine
   Category: FINANCE (matched: "audit")
[2025-12-31T15:37:18.726Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2025-12-31T15:37:18.729Z] [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-31T15:37:19.031Z] [BOT] ✅ Created forum post: 🏢 Associate Business Systems Analyst @ ORG_7dcce8d0ine in #💰・finance-jobs
[2025-12-31T15:37:19.031Z] [BOT] ✅ Industry: Associate Business Systems Analyst @ ORG_7dcce8d0ine
[2025-12-31T15:37:20.854Z] [BOT] ✅ Created forum post: 🏢 Associate Business Systems Analyst @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-31T15:37:22.353Z] [BOT] 💾 Marked as posted: Associate Business Systems Analyst @ ORG_7dcce8d0ine (instance #1)
[2025-12-31T15:37:22.354Z] [BOT] 💾 BEFORE ARCHIVING: 54 jobs in database
[2025-12-31T15:37:22.354Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-31T15:37:22.358Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
✅ Archiving complete: 1 archived, 53 active
[2025-12-31T15:37:22.359Z] [BOT] 💾 Saved posted_jobs.json: 53 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-31T15:37:25.359Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-31T15:37:25.359Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_eaf9184c-analyst_r259808-1 (posted within 7 days)
[2025-12-31T15:37:25.360Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-31T15:37:25.360Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-31T15:37:25.360Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-31T15:37:25.403Z] [BOT] 📂 Loaded 1117 existing routing entries
[2025-12-31T15:37:25.446Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1118
   Timestamp: 2025-12-31T15:37:25.442Z
[2025-12-31T15:37:25.446Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_28858bfe.jsonl
[2025-12-31T15:37:25.446Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2025-12-31T15:37:25.447Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💰・finance-jobs: 1 posts
     2. #🌆・chicago: 1 posts
[2025-12-31T15:37:25.447Z] [BOT] [STATS] Channel stats saved
[2025-12-31T15:37:27.455Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2418) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*