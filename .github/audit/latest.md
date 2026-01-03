# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T07:05:43.442Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T07:05:30.239Z] ========================================
[2026-01-03T07:05:30.241Z] Discord Bot Execution Log
[2026-01-03T07:05:30.241Z] Environment: GitHub Actions
[2026-01-03T07:05:30.241Z] Node Version: v20.19.6
[2026-01-03T07:05:30.241Z] ========================================
[2026-01-03T07:05:30.241Z] Environment Variables Check:
[2026-01-03T07:05:30.241Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T07:05:30.242Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T07:05:30.242Z] 
Multi-Channel Configuration:
[2026-01-03T07:05:30.242Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.242Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.243Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T07:05:30.243Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T07:05:30.243Z] 
Data Files Check:
[2026-01-03T07:05:30.244Z] .github/data/new_jobs.json: ✅ Exists (10 items, 222413 bytes)
[2026-01-03T07:05:30.246Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 138089 bytes)
[2026-01-03T07:05:30.246Z] 
========================================
[2026-01-03T07:05:30.246Z] Starting Enhanced Discord Bot...
[2026-01-03T07:05:30.246Z] ========================================
[2026-01-03T07:05:30.754Z] [BOT] ✅ Loaded V2 database: 245 jobs
[2026-01-03T07:05:31.457Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T07:05:31.457Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T07:05:31.457Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T07:05:31.459Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T07:05:31.595Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 162
[2026-01-03T07:05:31.596Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T07:05:31.596Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T07:05:31.597Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T07:05:31.597Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-03T07:05:31.597Z] [BOT] (8 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-03T07:05:31.598Z] [BOT] - Sales Operations Manager - Revenue Systems @ samsara: boston, columbus, indianapolis, detroit, denver, atlanta, san diego, phoenix, seattle
⏸️ Limiting to 10 jobs this run, 8 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T07:05:31.601Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-03T07:05:31.602Z] [BOT] 📍 [ROUTING] "Sales Operations Manager - Revenue Systems" @ samsara
[2026-01-03T07:05:31.602Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T07:05:31.606Z] [BOT ERROR] (node:2355) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T07:05:31.827Z] [BOT] ✅ Created forum post: 🏢 Sales Operations Manager - Revenue Systems @ samsara in #💲・sales-jobs
[2026-01-03T07:05:31.827Z] [BOT] ✅ Industry: Sales Operations Manager - Revenue Systems @ samsara
[2026-01-03T07:05:33.729Z] [BOT] ✅ Created forum post: 🏢 Sales Operations Manager - Revenue Systems @ samsara in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-03T07:05:35.229Z] [BOT] 💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
[2026-01-03T07:05:35.229Z] [BOT] 💾 BEFORE ARCHIVING: 246 jobs in database
[2026-01-03T07:05:35.230Z] [BOT] ✅ No jobs to archive (all 246 jobs within 7-day window)
[2026-01-03T07:05:35.236Z] [BOT] 💾 Saved posted_jobs.json: 246 active jobs
[2026-01-03T07:05:35.237Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:05:35.237Z] [BOT] 💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 247 jobs in database
[2026-01-03T07:05:35.237Z] [BOT] ✅ No jobs to archive (all 247 jobs within 7-day window)
[2026-01-03T07:05:35.241Z] [BOT] 💾 Saved posted_jobs.json: 247 active jobs
[2026-01-03T07:05:35.241Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 248 jobs in database
[2026-01-03T07:05:35.241Z] [BOT] ✅ No jobs to archive (all 248 jobs within 7-day window)
[2026-01-03T07:05:35.244Z] [BOT] 💾 Saved posted_jobs.json: 248 active jobs
[2026-01-03T07:05:35.244Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 249 jobs in database
[2026-01-03T07:05:35.244Z] [BOT] ✅ No jobs to archive (all 249 jobs within 7-day window)
[2026-01-03T07:05:35.247Z] [BOT] 💾 Saved posted_jobs.json: 249 active jobs
[2026-01-03T07:05:35.247Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 250 jobs in database
[2026-01-03T07:05:35.247Z] [BOT] ✅ No jobs to archive (all 250 jobs within 7-day window)
[2026-01-03T07:05:35.249Z] [BOT] 💾 Saved posted_jobs.json: 250 active jobs
[2026-01-03T07:05:35.250Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 251 jobs in database
[2026-01-03T07:05:35.250Z] [BOT] ✅ No jobs to archive (all 251 jobs within 7-day window)
[2026-01-03T07:05:35.252Z] [BOT] 💾 Saved posted_jobs.json: 251 active jobs
[2026-01-03T07:05:35.253Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 252 jobs in database
[2026-01-03T07:05:35.253Z] [BOT] ✅ No jobs to archive (all 252 jobs within 7-day window)
[2026-01-03T07:05:35.255Z] [BOT] 💾 Saved posted_jobs.json: 252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:05:35.255Z] [BOT] 💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 253 jobs in database
[2026-01-03T07:05:35.255Z] [BOT] ✅ No jobs to archive (all 253 jobs within 7-day window)
[2026-01-03T07:05:35.258Z] [BOT] 💾 Saved posted_jobs.json: 253 active jobs
[2026-01-03T07:05:35.258Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Sales Operations Manager - Revenue Systems @ samsara (instance #1)
💾 BEFORE ARCHIVING: 254 jobs in database
[2026-01-03T07:05:35.258Z] [BOT] ✅ No jobs to archive (all 254 jobs within 7-day window)
[2026-01-03T07:05:35.261Z] [BOT] 💾 Saved posted_jobs.json: 254 active jobs
[2026-01-03T07:05:35.261Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:05:35.262Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST" @ samsara
[2026-01-03T07:05:35.263Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T07:05:35.441Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive EST/CST @ samsara in #💲・sales-jobs
[2026-01-03T07:05:35.441Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST @ samsara
[2026-01-03T07:05:36.942Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST @ samsara (instance #1)
[2026-01-03T07:05:36.943Z] [BOT] 💾 BEFORE ARCHIVING: 255 jobs in database
[2026-01-03T07:05:36.943Z] [BOT] ✅ No jobs to archive (all 255 jobs within 7-day window)
[2026-01-03T07:05:36.945Z] [BOT] 💾 Saved posted_jobs.json: 255 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:05:39.946Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-03T07:05:39.946Z] [BOT] ⏭️  Skipping duplicate: JID_64ea8742 (posted within 7 days)
[2026-01-03T07:05:39.947Z] [BOT] ⏭️  Skipping duplicate: JID_3e169f30 (posted within 7 days)
[2026-01-03T07:05:40.035Z] [BOT] ✅ Loaded pending queue: 1045 total (1025 pending, 20 enriched, 0 posted)
[2026-01-03T07:05:40.156Z] [BOT] ✅ Saved pending queue: 1045 total (1025 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T07:05:40.202Z] [BOT] 📂 Loaded 1288 existing routing entries
[2026-01-03T07:05:40.247Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-03T07:05:40.248Z] [BOT] Total entries: 1290
   Timestamp: 2026-01-03T07:05:40.242Z
[2026-01-03T07:05:40.248Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T07:05:40.248Z] [BOT] Total attempts: 3
   Successful: 3
   Failed: 0
   Skipped: 0
[2026-01-03T07:05:40.248Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T07:05:40.248Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 2 posts
[2026-01-03T07:05:40.248Z] [BOT] 2. #🚌・boston: 1 posts
[2026-01-03T07:05:40.249Z] [BOT] [STATS] Channel stats saved
[2026-01-03T07:05:42.268Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2355) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*