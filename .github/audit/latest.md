# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T11:35:09.791Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T11:34:58.977Z] ========================================
[2026-01-01T11:34:58.979Z] Discord Bot Execution Log
[2026-01-01T11:34:58.979Z] Environment: GitHub Actions
[2026-01-01T11:34:58.979Z] Node Version: v20.19.6
[2026-01-01T11:34:58.979Z] ========================================
[2026-01-01T11:34:58.979Z] Environment Variables Check:
[2026-01-01T11:34:58.979Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T11:34:58.979Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.979Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T11:34:58.980Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T11:34:58.980Z] 
Multi-Channel Configuration:
[2026-01-01T11:34:58.980Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T11:34:58.980Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T11:34:58.981Z] 
Data Files Check:
[2026-01-01T11:34:58.981Z] .github/data/new_jobs.json: ✅ Exists (1 items, 7414 bytes)
[2026-01-01T11:34:58.981Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 32227 bytes)
[2026-01-01T11:34:58.981Z] 
========================================
[2026-01-01T11:34:58.981Z] Starting Enhanced Discord Bot...
[2026-01-01T11:34:58.981Z] ========================================
[2026-01-01T11:34:59.493Z] [BOT] ✅ Loaded V2 database: 55 jobs
[2026-01-01T11:35:00.191Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T11:35:00.191Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T11:35:00.191Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T11:35:00.192Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-01T11:35:00.232Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-01T11:35:00.276Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 33
[2026-01-01T11:35:00.277Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-01T11:35:00.277Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-01T11:35:00.277Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-01T11:35:00.278Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-01T11:35:00.278Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T11:35:00.280Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T11:35:00.282Z] [BOT] 📍 [ROUTING] "Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center" @ ORG_f5f75c9b U
[2026-01-01T11:35:00.282Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T11:35:00.289Z] [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T11:35:00.545Z] [BOT] ✅ Created forum post: 🏢 Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U in #💻・tech-jobs
[2026-01-01T11:35:00.545Z] [BOT] ✅ Industry: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U
[2026-01-01T11:35:02.211Z] [BOT] ✅ Created forum post: 🏢 Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U in #💻・remote-usa
[2026-01-01T11:35:02.211Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-01T11:35:03.712Z] [BOT] 💾 Marked as posted: Neuroimaging Engineer - Radiology - Neuroimaging Labs Research Center @ ORG_f5f75c9b U (instance #1)
[2026-01-01T11:35:03.712Z] [BOT] 💾 BEFORE ARCHIVING: 56 jobs in database
[2026-01-01T11:35:03.713Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-01T11:35:03.717Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-01T11:35:03.717Z] [BOT] ✅ Archiving complete: 1 archived, 55 active
[2026-01-01T11:35:03.718Z] [BOT] 💾 Saved posted_jobs.json: 55 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T11:35:06.719Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-01T11:35:06.720Z] [BOT] ⏭️  Skipping duplicate: JID_22c9c844-center_jr89315-1 (posted within 7 days)
[2026-01-01T11:35:06.720Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-01T11:35:06.721Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T11:35:06.762Z] [BOT] 📂 Loaded 1128 existing routing entries
[2026-01-01T11:35:06.806Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1129
   Timestamp: 2026-01-01T11:35:06.801Z
[2026-01-01T11:35:06.806Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T11:35:06.807Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-01T11:35:06.807Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-01T11:35:06.807Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-01T11:35:06.807Z] [BOT] [STATS] Channel stats saved
[2026-01-01T11:35:08.816Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2405) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*