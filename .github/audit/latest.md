# Discord Bot Execution Audit
**Timestamp:** 2025-12-23T19:05:01.300Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-23T19:04:50.522Z] ========================================
[2025-12-23T19:04:50.524Z] Discord Bot Execution Log
[2025-12-23T19:04:50.524Z] Environment: GitHub Actions
[2025-12-23T19:04:50.524Z] Node Version: v20.19.6
[2025-12-23T19:04:50.524Z] ========================================
[2025-12-23T19:04:50.524Z] Environment Variables Check:
[2025-12-23T19:04:50.524Z] DISCORD_TOKEN: ✅ Set
[2025-12-23T19:04:50.524Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.524Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-23T19:04:50.524Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-23T19:04:50.525Z] 
Multi-Channel Configuration:
[2025-12-23T19:04:50.525Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-23T19:04:50.525Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-23T19:04:50.525Z] 
Data Files Check:
[2025-12-23T19:04:50.526Z] .github/data/new_jobs.json: ✅ Exists (2 items, 4805 bytes)
[2025-12-23T19:04:50.528Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 373861 bytes)
[2025-12-23T19:04:50.528Z] 
========================================
[2025-12-23T19:04:50.528Z] Starting Enhanced Discord Bot...
[2025-12-23T19:04:50.528Z] ========================================
[2025-12-23T19:04:51.043Z] [BOT] ✅ Loaded V2 database: 647 jobs
[2025-12-23T19:04:51.786Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-23T19:04:51.787Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-23T19:04:51.787Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-23T19:04:51.787Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2025-12-23T19:04:51.897Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 161
[2025-12-23T19:04:51.898Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-23T19:04:51.899Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - AGI Data Services at Amazon
[2025-12-23T19:04:51.899Z] [BOT] 📋 After blacklist filter: 1 jobs (1 blacklisted)
[2025-12-23T19:04:51.899Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2025-12-23T19:04:51.899Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2025-12-23T19:04:51.900Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-23T19:04:51.902Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-23T19:04:51.903Z] [BOT] 📍 [ROUTING] "Part Time Research Support - Neurology" @ ORG_478e100e University
[2025-12-23T19:04:51.903Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-23T19:04:51.908Z] [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-23T19:04:52.118Z] [BOT] ✅ Created forum post: 🏢 Part Time Research Support - Neurology @ ORG_478e100e University in #🩺・healthcare-jobs
  ✅ Industry: Part Time Research Support - Neurology @ ORG_478e100e University
[2025-12-23T19:04:53.824Z] [BOT] ✅ Created forum post: 🏢 Part Time Research Support - Neurology @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-23T19:04:55.326Z] [BOT] 💾 Marked as posted: Part Time Research Support - Neurology @ ORG_478e100e University (instance #1)
[2025-12-23T19:04:55.326Z] [BOT] 💾 BEFORE ARCHIVING: 648 jobs in database
[2025-12-23T19:04:55.327Z] [BOT] ✅ No jobs to archive (all 648 jobs within 7-day window)
[2025-12-23T19:04:55.338Z] [BOT] 💾 Saved posted_jobs.json: 648 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-23T19:04:58.339Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-23T19:04:58.339Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_ea3a244d-neurology_req_0000074546-1 (posted within 7 days)
[2025-12-23T19:04:58.340Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-23T19:04:58.341Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 1 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2025-12-23T19:04:58.341Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-23T19:04:58.383Z] [BOT] 📂 Loaded 1040 existing routing entries
[2025-12-23T19:04:58.426Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1041
   Timestamp: 2025-12-23T19:04:58.422Z
[2025-12-23T19:04:58.427Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_805c58df.jsonl
   Total attempts: 3
[2025-12-23T19:04:58.427Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 1
[2025-12-23T19:04:58.427Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2025-12-23T19:04:58.427Z] [BOT] Top channels:
     1. #🩺・healthcare-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2025-12-23T19:04:58.427Z] [BOT] [STATS] Channel stats saved
[2025-12-23T19:05:00.435Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*