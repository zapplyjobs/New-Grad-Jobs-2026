# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T17:32:25.807Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T17:32:14.617Z] ========================================
[2026-01-02T17:32:14.619Z] Discord Bot Execution Log
[2026-01-02T17:32:14.619Z] Environment: GitHub Actions
[2026-01-02T17:32:14.619Z] Node Version: v20.19.6
[2026-01-02T17:32:14.619Z] ========================================
[2026-01-02T17:32:14.619Z] Environment Variables Check:
[2026-01-02T17:32:14.619Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T17:32:14.619Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.619Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T17:32:14.620Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T17:32:14.620Z] 
Multi-Channel Configuration:
[2026-01-02T17:32:14.620Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T17:32:14.620Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T17:32:14.620Z] 
Data Files Check:
[2026-01-02T17:32:14.621Z] .github/data/new_jobs.json: ✅ Exists (1 items, 9210 bytes)
[2026-01-02T17:32:14.621Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 79563 bytes)
[2026-01-02T17:32:14.621Z] 
========================================
[2026-01-02T17:32:14.621Z] Starting Enhanced Discord Bot...
[2026-01-02T17:32:14.622Z] ========================================
[2026-01-02T17:32:15.157Z] [BOT] ✅ Loaded V2 database: 131 jobs
[2026-01-02T17:32:15.846Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T17:32:15.846Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T17:32:15.847Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T17:32:15.847Z] [BOT] 📦 Exporting 1 jobs to encrypted JSON...
[2026-01-02T17:32:15.891Z] [BOT] 🧹 Cleaned up 1 jobs older than 7 days
[2026-01-02T17:32:15.939Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 47
[2026-01-02T17:32:15.940Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-02T17:32:15.941Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
📋 After multi-location grouping: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T17:32:15.944Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T17:32:15.945Z] [BOT] 📍 [ROUTING] "Assistant Professor - Renewable Energy and Chemical Transformations" @ ORG_9d38443e of Central Florida
[2026-01-02T17:32:15.945Z] [BOT] Category: MARKETING (matched: "campaign")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T17:32:15.963Z] [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T17:32:16.262Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Flori in #📣・marketing-jobs
[2026-01-02T17:32:16.263Z] [BOT] ✅ Industry: Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Florida
[2026-01-02T17:32:17.978Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Flori in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T17:32:19.477Z] [BOT] 💾 Marked as posted: Assistant Professor - Renewable Energy and Chemical Transformations @ ORG_9d38443e of Central Florida (instance #1)
[2026-01-02T17:32:19.478Z] [BOT] 💾 BEFORE ARCHIVING: 132 jobs in database
[2026-01-02T17:32:19.478Z] [BOT] ✅ No jobs to archive (all 132 jobs within 7-day window)
[2026-01-02T17:32:19.483Z] [BOT] 💾 Saved posted_jobs.json: 132 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T17:32:22.485Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-02T17:32:22.485Z] [BOT] ⏭️  Skipping duplicate: JID_c8c47f04-transformations_r111507 (posted within 7 days)
[2026-01-02T17:32:22.486Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-02T17:32:22.486Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T17:32:22.530Z] [BOT] 📂 Loaded 1206 existing routing entries
[2026-01-02T17:32:22.577Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1207
[2026-01-02T17:32:22.577Z] [BOT] Timestamp: 2026-01-02T17:32:22.571Z
[2026-01-02T17:32:22.578Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
[2026-01-02T17:32:22.578Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-02T17:32:22.578Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T17:32:22.578Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-02T17:32:22.578Z] [BOT] 1. #📣・marketing-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-02T17:32:22.578Z] [BOT] [STATS] Channel stats saved
[2026-01-02T17:32:24.589Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*