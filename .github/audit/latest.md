# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T07:38:11.799Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T07:38:02.075Z] ========================================
[2026-01-03T07:38:02.076Z] Discord Bot Execution Log
[2026-01-03T07:38:02.077Z] Environment: GitHub Actions
[2026-01-03T07:38:02.077Z] Node Version: v20.19.6
[2026-01-03T07:38:02.077Z] ========================================
[2026-01-03T07:38:02.077Z] Environment Variables Check:
[2026-01-03T07:38:02.077Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T07:38:02.077Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.077Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T07:38:02.077Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T07:38:02.077Z] 
Multi-Channel Configuration:
[2026-01-03T07:38:02.077Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.077Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T07:38:02.078Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T07:38:02.078Z] 
Data Files Check:
[2026-01-03T07:38:02.079Z] .github/data/new_jobs.json: ✅ Exists (10 items, 190062 bytes)
[2026-01-03T07:38:02.081Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 148025 bytes)
[2026-01-03T07:38:02.081Z] 
========================================
[2026-01-03T07:38:02.081Z] Starting Enhanced Discord Bot...
[2026-01-03T07:38:02.081Z] ========================================
[2026-01-03T07:38:02.606Z] [BOT] ✅ Loaded V2 database: 265 jobs
[2026-01-03T07:38:03.289Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T07:38:03.289Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T07:38:03.289Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T07:38:03.291Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T07:38:03.439Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 181
[2026-01-03T07:38:03.441Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T07:38:03.441Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T07:38:03.442Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T07:38:03.442Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-03T07:38:03.442Z] [BOT] (9 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-03T07:38:03.443Z] [BOT] - Select Major Account Executive EST/CST - Jacksonville, FL @ samsara: jacksonville, miami, nashville, orlando, philadelphia, providence, raleigh, richmond, san antonio
⏸️ Limiting to 10 jobs this run, 9 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T07:38:03.445Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T07:38:03.445Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST - Jacksonville, FL" @ samsara
[2026-01-03T07:38:03.446Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T07:38:03.450Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T07:38:03.750Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive EST/CST - Jacksonville, FL @ samsara in #💲・sales-jobs
  ✅ Industry: Select Major Account Executive EST/CST - Jacksonville, FL @ samsara
[2026-01-03T07:38:05.252Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Jacksonville, FL @ samsara (instance #1)
[2026-01-03T07:38:05.253Z] [BOT] 💾 BEFORE ARCHIVING: 266 jobs in database
[2026-01-03T07:38:05.253Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-03T07:38:05.259Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-03T07:38:05.259Z] [BOT] ✅ Archiving complete: 1 archived, 265 active
[2026-01-03T07:38:05.264Z] [BOT] 💾 Saved posted_jobs.json: 265 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:38:05.264Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Miami, FL @ samsara (instance #1)
💾 BEFORE ARCHIVING: 266 jobs in database
[2026-01-03T07:38:05.264Z] [BOT] ✅ No jobs to archive (all 266 jobs within 7-day window)
[2026-01-03T07:38:05.267Z] [BOT] 💾 Saved posted_jobs.json: 266 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:38:05.267Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Miami, FL @ samsara (instance #1)
💾 BEFORE ARCHIVING: 267 jobs in database
[2026-01-03T07:38:05.268Z] [BOT] ✅ No jobs to archive (all 267 jobs within 7-day window)
[2026-01-03T07:38:05.271Z] [BOT] 💾 Saved posted_jobs.json: 267 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:38:05.271Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Nashville, TN @ samsara (instance #1)
💾 BEFORE ARCHIVING: 268 jobs in database
[2026-01-03T07:38:05.271Z] [BOT] ✅ No jobs to archive (all 268 jobs within 7-day window)
[2026-01-03T07:38:05.274Z] [BOT] 💾 Saved posted_jobs.json: 268 active jobs
[2026-01-03T07:38:05.274Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Orlando, FL @ samsara (instance #1)
[2026-01-03T07:38:05.274Z] [BOT] 💾 BEFORE ARCHIVING: 269 jobs in database
[2026-01-03T07:38:05.274Z] [BOT] ✅ No jobs to archive (all 269 jobs within 7-day window)
[2026-01-03T07:38:05.277Z] [BOT] 💾 Saved posted_jobs.json: 269 active jobs
[2026-01-03T07:38:05.277Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Philadelphia, PA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 270 jobs in database
[2026-01-03T07:38:05.278Z] [BOT] ✅ No jobs to archive (all 270 jobs within 7-day window)
[2026-01-03T07:38:05.280Z] [BOT] 💾 Saved posted_jobs.json: 270 active jobs
[2026-01-03T07:38:05.280Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Providence, RI @ samsara (instance #1)
💾 BEFORE ARCHIVING: 271 jobs in database
[2026-01-03T07:38:05.281Z] [BOT] ✅ No jobs to archive (all 271 jobs within 7-day window)
[2026-01-03T07:38:05.284Z] [BOT] 💾 Saved posted_jobs.json: 271 active jobs
[2026-01-03T07:38:05.284Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Raleigh, NC @ samsara (instance #1)
[2026-01-03T07:38:05.284Z] [BOT] 💾 BEFORE ARCHIVING: 272 jobs in database
[2026-01-03T07:38:05.284Z] [BOT] ✅ No jobs to archive (all 272 jobs within 7-day window)
[2026-01-03T07:38:05.287Z] [BOT] 💾 Saved posted_jobs.json: 272 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:38:05.287Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Richmond, VA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 273 jobs in database
[2026-01-03T07:38:05.287Z] [BOT] ✅ No jobs to archive (all 273 jobs within 7-day window)
[2026-01-03T07:38:05.290Z] [BOT] 💾 Saved posted_jobs.json: 273 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:38:05.290Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - San Antonio, TX @ samsara (instance #1)
[2026-01-03T07:38:05.290Z] [BOT] 💾 BEFORE ARCHIVING: 274 jobs in database
[2026-01-03T07:38:05.291Z] [BOT] ✅ No jobs to archive (all 274 jobs within 7-day window)
[2026-01-03T07:38:05.293Z] [BOT] 💾 Saved posted_jobs.json: 274 active jobs
[2026-01-03T07:38:05.293Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:38:08.295Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-03T07:38:08.295Z] [BOT] ⏭️  Skipping duplicate: JID_02659f87 (posted within 7 days)
[2026-01-03T07:38:08.370Z] [BOT] ✅ Loaded pending queue: 1025 total (1005 pending, 20 enriched, 0 posted)
[2026-01-03T07:38:08.479Z] [BOT] ✅ Saved pending queue: 1025 total (1005 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-03T07:38:08.479Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T07:38:08.521Z] [BOT] 📂 Loaded 1291 existing routing entries
[2026-01-03T07:38:08.566Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 1292
   Timestamp: 2026-01-03T07:38:08.560Z
[2026-01-03T07:38:08.567Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 1
   Successful: 1
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T07:38:08.567Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
     1. #💲・sales-jobs: 1 posts
[2026-01-03T07:38:08.567Z] [BOT] [STATS] Channel stats saved
[2026-01-03T07:38:10.587Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*