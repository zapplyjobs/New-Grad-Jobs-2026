# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T07:24:13.385Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T07:24:02.442Z] ========================================
[2026-01-03T07:24:02.444Z] Discord Bot Execution Log
[2026-01-03T07:24:02.444Z] Environment: GitHub Actions
[2026-01-03T07:24:02.444Z] Node Version: v20.19.6
[2026-01-03T07:24:02.444Z] ========================================
[2026-01-03T07:24:02.444Z] Environment Variables Check:
[2026-01-03T07:24:02.444Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T07:24:02.444Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.444Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T07:24:02.444Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T07:24:02.445Z] 
Multi-Channel Configuration:
[2026-01-03T07:24:02.445Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T07:24:02.445Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T07:24:02.445Z] 
Data Files Check:
[2026-01-03T07:24:02.447Z] .github/data/new_jobs.json: ✅ Exists (10 items, 189877 bytes)
[2026-01-03T07:24:02.448Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 143019 bytes)
[2026-01-03T07:24:02.448Z] 
========================================
[2026-01-03T07:24:02.448Z] Starting Enhanced Discord Bot...
[2026-01-03T07:24:02.448Z] ========================================
[2026-01-03T07:24:02.962Z] [BOT] ✅ Loaded V2 database: 255 jobs
[2026-01-03T07:24:03.498Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T07:24:03.499Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T07:24:03.499Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T07:24:03.500Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T07:24:03.650Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 171
[2026-01-03T07:24:03.651Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T07:24:03.652Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T07:24:03.652Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T07:24:03.652Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-03T07:24:03.653Z] [BOT] (9 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2026-01-03T07:24:03.653Z] [BOT] - Select Major Account Executive EST/CST @ samsara: chicago, atlanta, austin, baltimore, boston, charlotte, columbia, dallas, hartford, houston, texas
⏸️ Limiting to 10 jobs this run, 9 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T07:24:03.655Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T07:24:03.656Z] [BOT] 📍 [ROUTING] "Select Major Account Executive EST/CST" @ samsara
[2026-01-03T07:24:03.656Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T07:24:03.660Z] [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T07:24:03.985Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive EST/CST @ samsara in #💲・sales-jobs
[2026-01-03T07:24:03.985Z] [BOT] ✅ Industry: Select Major Account Executive EST/CST @ samsara
[2026-01-03T07:24:05.969Z] [BOT] ✅ Created forum post: 🏢 Select Major Account Executive EST/CST @ samsara in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T07:24:07.470Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST @ samsara (instance #1)
[2026-01-03T07:24:07.470Z] [BOT] 💾 BEFORE ARCHIVING: 256 jobs in database
[2026-01-03T07:24:07.471Z] [BOT] ✅ No jobs to archive (all 256 jobs within 7-day window)
[2026-01-03T07:24:07.474Z] [BOT] 💾 Saved posted_jobs.json: 256 active jobs
[2026-01-03T07:24:07.474Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:24:07.475Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Atlanta, GA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 257 jobs in database
[2026-01-03T07:24:07.475Z] [BOT] ✅ No jobs to archive (all 257 jobs within 7-day window)
[2026-01-03T07:24:07.477Z] [BOT] 💾 Saved posted_jobs.json: 257 active jobs
[2026-01-03T07:24:07.477Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Austin, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 258 jobs in database
[2026-01-03T07:24:07.478Z] [BOT] ✅ No jobs to archive (all 258 jobs within 7-day window)
[2026-01-03T07:24:07.480Z] [BOT] 💾 Saved posted_jobs.json: 258 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:24:07.480Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Baltimore, MD @ samsara (instance #1)
💾 BEFORE ARCHIVING: 259 jobs in database
[2026-01-03T07:24:07.480Z] [BOT] ✅ No jobs to archive (all 259 jobs within 7-day window)
[2026-01-03T07:24:07.483Z] [BOT] 💾 Saved posted_jobs.json: 259 active jobs
[2026-01-03T07:24:07.483Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Boston, MA @ samsara (instance #1)
💾 BEFORE ARCHIVING: 260 jobs in database
[2026-01-03T07:24:07.483Z] [BOT] ✅ No jobs to archive (all 260 jobs within 7-day window)
[2026-01-03T07:24:07.485Z] [BOT] 💾 Saved posted_jobs.json: 260 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:24:07.485Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Charlotte, NC @ samsara (instance #1)
💾 BEFORE ARCHIVING: 261 jobs in database
[2026-01-03T07:24:07.486Z] [BOT] ✅ No jobs to archive (all 261 jobs within 7-day window)
[2026-01-03T07:24:07.488Z] [BOT] 💾 Saved posted_jobs.json: 261 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:24:07.488Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Columbia, SC @ samsara (instance #1)
💾 BEFORE ARCHIVING: 262 jobs in database
[2026-01-03T07:24:07.489Z] [BOT] ✅ No jobs to archive (all 262 jobs within 7-day window)
[2026-01-03T07:24:07.491Z] [BOT] 💾 Saved posted_jobs.json: 262 active jobs
[2026-01-03T07:24:07.491Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Select Major Account Executive EST/CST - Dallas, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 263 jobs in database
[2026-01-03T07:24:07.491Z] [BOT] ✅ No jobs to archive (all 263 jobs within 7-day window)
[2026-01-03T07:24:07.494Z] [BOT] 💾 Saved posted_jobs.json: 263 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T07:24:07.494Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Hartford, CT @ samsara (instance #1)
💾 BEFORE ARCHIVING: 264 jobs in database
[2026-01-03T07:24:07.494Z] [BOT] ✅ No jobs to archive (all 264 jobs within 7-day window)
[2026-01-03T07:24:07.497Z] [BOT] 💾 Saved posted_jobs.json: 264 active jobs
[2026-01-03T07:24:07.498Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:24:07.498Z] [BOT] 💾 Marked as posted: Select Major Account Executive EST/CST - Houston, TX @ samsara (instance #1)
💾 BEFORE ARCHIVING: 265 jobs in database
[2026-01-03T07:24:07.498Z] [BOT] ✅ No jobs to archive (all 265 jobs within 7-day window)
[2026-01-03T07:24:07.500Z] [BOT] 💾 Saved posted_jobs.json: 265 active jobs
[2026-01-03T07:24:07.500Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T07:24:10.501Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-03T07:24:10.501Z] [BOT] ⏭️  Skipping duplicate: JID_d0c14d21 (posted within 7 days)
[2026-01-03T07:24:10.585Z] [BOT] ✅ Loaded pending queue: 1035 total (1015 pending, 20 enriched, 0 posted)
[2026-01-03T07:24:10.694Z] [BOT] ✅ Saved pending queue: 1035 total (1015 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-03T07:24:10.694Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T07:24:10.740Z] [BOT] 📂 Loaded 1290 existing routing entries
[2026-01-03T07:24:10.785Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-03T07:24:10.786Z] [BOT] Total entries: 1291
   Timestamp: 2026-01-03T07:24:10.780Z
[2026-01-03T07:24:10.786Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T07:24:10.786Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-03T07:24:10.786Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🌆・chicago: 1 posts
[2026-01-03T07:24:10.787Z] [BOT] [STATS] Channel stats saved
[2026-01-03T07:24:12.803Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2491) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*