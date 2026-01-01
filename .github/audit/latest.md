# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T13:43:56.943Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T13:43:39.770Z] ========================================
[2026-01-01T13:43:39.772Z] Discord Bot Execution Log
[2026-01-01T13:43:39.772Z] Environment: GitHub Actions
[2026-01-01T13:43:39.772Z] Node Version: v20.19.6
[2026-01-01T13:43:39.772Z] ========================================
[2026-01-01T13:43:39.772Z] Environment Variables Check:
[2026-01-01T13:43:39.772Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T13:43:39.773Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T13:43:39.773Z] 
Multi-Channel Configuration:
[2026-01-01T13:43:39.773Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.773Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.774Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.774Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T13:43:39.774Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T13:43:39.774Z] 
Data Files Check:
[2026-01-01T13:43:39.774Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10719 bytes)
[2026-01-01T13:43:39.775Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 37218 bytes)
[2026-01-01T13:43:39.775Z] 
========================================
[2026-01-01T13:43:39.775Z] Starting Enhanced Discord Bot...
[2026-01-01T13:43:39.775Z] ========================================
[2026-01-01T13:43:40.301Z] [BOT] ✅ Loaded V2 database: 62 jobs
[2026-01-01T13:43:40.704Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T13:43:40.704Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T13:43:40.705Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T13:43:40.705Z] [BOT] 📦 Exporting 2 jobs to encrypted JSON...
[2026-01-01T13:43:40.748Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2026-01-01T13:43:40.792Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 34
[2026-01-01T13:43:40.794Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2026-01-01T13:43:40.794Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-01T13:43:40.794Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-01T13:43:40.795Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-01T13:43:40.795Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T13:43:40.798Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T13:43:40.799Z] [BOT] 📍 [ROUTING] "PV Performance Engineer 1 - Utility Scale Solar" @ ORG_23a49b7b Technologies
[2026-01-01T13:43:40.799Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T13:43:40.803Z] [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T13:43:41.099Z] [BOT] ✅ Created forum post: 🏢 PV Performance Engineer 1 - Utility Scale Solar @ ORG_23a49b7b Technologies in #💻・tech-jobs
[2026-01-01T13:43:41.099Z] [BOT] ✅ Industry: PV Performance Engineer 1 - Utility Scale Solar @ ORG_23a49b7b Technologies
[2026-01-01T13:43:42.826Z] [BOT] ✅ Created forum post: 🏢 PV Performance Engineer 1 - Utility Scale Solar @ ORG_23a49b7b Technologies in #💻・remote-usa
[2026-01-01T13:43:42.827Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-01T13:43:44.327Z] [BOT] 💾 Marked as posted: PV Performance Engineer 1 - Utility Scale Solar @ ORG_23a49b7b Technologies (instance #1)
[2026-01-01T13:43:44.327Z] [BOT] 💾 BEFORE ARCHIVING: 63 jobs in database
[2026-01-01T13:43:44.328Z] [BOT] ✅ No jobs to archive (all 63 jobs within 7-day window)
[2026-01-01T13:43:44.333Z] [BOT] 💾 Saved posted_jobs.json: 63 active jobs
[2026-01-01T13:43:44.333Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T13:43:47.334Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-01T13:43:47.335Z] [BOT] 📍 [ROUTING] "Technology Platform Associate" @ ORG_4b95ce62 Capital Bank
[2026-01-01T13:43:47.335Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-01T13:43:47.916Z] [BOT] ✅ Created forum post: 🏢 Technology Platform Associate @ ORG_4b95ce62 Capital Bank in #💲・sales-jobs
  ✅ Industry: Technology Platform Associate @ ORG_4b95ce62 Capital Bank
[2026-01-01T13:43:49.603Z] [BOT] ✅ Created forum post: 🏢 Technology Platform Associate @ ORG_4b95ce62 Capital Bank in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-01T13:43:51.104Z] [BOT] 💾 Marked as posted: Technology Platform Associate @ ORG_4b95ce62 Capital Bank (instance #1)
[2026-01-01T13:43:51.104Z] [BOT] 💾 BEFORE ARCHIVING: 64 jobs in database
✅ No jobs to archive (all 64 jobs within 7-day window)
[2026-01-01T13:43:51.106Z] [BOT] 💾 Saved posted_jobs.json: 64 active jobs
[2026-01-01T13:43:51.106Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T13:43:54.107Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-01T13:43:54.107Z] [BOT] ⏭️  Skipping duplicate: JID_5485da56-array_careers-JID_0ae2d624-i_r-100571 (posted within 7 days)
⏭️  Skipping duplicate: JID_9bbbba94-associate_jr104228 (posted within 7 days)
[2026-01-01T13:43:54.108Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2026-01-01T13:43:54.108Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2026-01-01T13:43:54.108Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-01T13:43:54.152Z] [BOT] 📂 Loaded 1136 existing routing entries
[2026-01-01T13:43:54.217Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-01T13:43:54.217Z] [BOT] Total entries: 1138
   Timestamp: 2026-01-01T13:43:54.193Z
[2026-01-01T13:43:54.218Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
   Total attempts: 4
   Successful: 4
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
     3. #💲・sales-jobs: 1 posts
     4. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2026-01-01T13:43:56.230Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2503) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*