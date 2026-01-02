# Discord Bot Execution Audit
**Timestamp:** 2026-01-02T15:04:36.093Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-02T15:04:19.216Z] ========================================
[2026-01-02T15:04:19.218Z] Discord Bot Execution Log
[2026-01-02T15:04:19.218Z] Environment: GitHub Actions
[2026-01-02T15:04:19.218Z] Node Version: v20.19.6
[2026-01-02T15:04:19.218Z] ========================================
[2026-01-02T15:04:19.218Z] Environment Variables Check:
[2026-01-02T15:04:19.218Z] DISCORD_TOKEN: ✅ Set
[2026-01-02T15:04:19.218Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.218Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-02T15:04:19.219Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-02T15:04:19.219Z] 
Multi-Channel Configuration:
[2026-01-02T15:04:19.219Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-02T15:04:19.219Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-02T15:04:19.220Z] 
Data Files Check:
[2026-01-02T15:04:19.220Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10916 bytes)
[2026-01-02T15:04:19.220Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 72600 bytes)
[2026-01-02T15:04:19.221Z] 
========================================
[2026-01-02T15:04:19.221Z] Starting Enhanced Discord Bot...
[2026-01-02T15:04:19.221Z] ========================================
[2026-01-02T15:04:19.728Z] [BOT] ✅ Loaded V2 database: 120 jobs
[2026-01-02T15:04:20.087Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-02T15:04:20.088Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-02T15:04:20.088Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-02T15:04:20.088Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-02T15:04:20.131Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-02T15:04:20.177Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 50
[2026-01-02T15:04:20.178Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-02T15:04:20.179Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-02T15:04:20.179Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-02T15:04:20.180Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-02T15:04:20.183Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-02T15:04:20.186Z] [BOT] 📍 [ROUTING] "Design and Technical Graduate" @ ORG_9e04a5f8 Group
[2026-01-02T15:04:20.186Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-02T15:04:20.204Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-02T15:04:20.378Z] [BOT] ✅ Created forum post: 🏢 Design and Technical Graduate @ ORG_9e04a5f8 Group in #📣・marketing-jobs
  ✅ Industry: Design and Technical Graduate @ ORG_9e04a5f8 Group
[2026-01-02T15:04:22.260Z] [BOT] ✅ Created forum post: 🏢 Design and Technical Graduate @ ORG_9e04a5f8 Group in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T15:04:23.762Z] [BOT] 💾 Marked as posted: Design and Technical Graduate @ ORG_9e04a5f8 Group (instance #1)
[2026-01-02T15:04:23.762Z] [BOT] 💾 BEFORE ARCHIVING: 121 jobs in database
[2026-01-02T15:04:23.763Z] [BOT] ✅ No jobs to archive (all 121 jobs within 7-day window)
[2026-01-02T15:04:23.772Z] [BOT] 💾 Saved posted_jobs.json: 121 active jobs
[2026-01-02T15:04:23.772Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-02T15:04:26.773Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2026-01-02T15:04:26.773Z] [BOT] 📍 [ROUTING] "IT Applications Specialist" @ ORG_478e100e University
[2026-01-02T15:04:26.774Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2026-01-02T15:04:27.213Z] [BOT] ✅ Created forum post: 🏢 IT Applications Specialist @ ORG_478e100e University in #📁・JID_e938df7b
[2026-01-02T15:04:27.214Z] [BOT] ✅ Industry: IT Applications Specialist @ ORG_478e100e University
[2026-01-02T15:04:28.911Z] [BOT] ✅ Created forum post: 🏢 IT Applications Specialist @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-02T15:04:30.413Z] [BOT] 💾 Marked as posted: IT Applications Specialist @ ORG_478e100e University (instance #1)
[2026-01-02T15:04:30.413Z] [BOT] 💾 BEFORE ARCHIVING: 122 jobs in database
✅ No jobs to archive (all 122 jobs within 7-day window)
[2026-01-02T15:04:30.415Z] [BOT] 💾 Saved posted_jobs.json: 122 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-02T15:04:33.416Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-02T15:04:33.417Z] [BOT] ⏭️  Skipping duplicate: JID_e17da0b3 (posted within 7 days)
[2026-01-02T15:04:33.417Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_7dee146b-time_req_0000067530-1 (posted within 7 days)
[2026-01-02T15:04:33.417Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-02T15:04:33.418Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-02T15:04:33.418Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-02T15:04:33.462Z] [BOT] 📂 Loaded 1194 existing routing entries
[2026-01-02T15:04:33.510Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-02T15:04:33.511Z] [BOT] Total entries: 1196
   Timestamp: 2026-01-02T15:04:33.504Z
[2026-01-02T15:04:33.511Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_424eaede.jsonl
   Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
[2026-01-02T15:04:33.511Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-02T15:04:33.511Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #💻・remote-usa: 2 posts
     2. #📣・marketing-jobs: 1 posts
[2026-01-02T15:04:33.511Z] [BOT] 3. #📁・JID_e938df7b: 1 posts
[2026-01-02T15:04:33.511Z] [BOT] [STATS] Channel stats saved
[2026-01-02T15:04:35.524Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*