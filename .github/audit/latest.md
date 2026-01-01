# Discord Bot Execution Audit
**Timestamp:** 2026-01-01T12:46:30.459Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-01T12:46:07.363Z] ========================================
[2026-01-01T12:46:07.364Z] Discord Bot Execution Log
[2026-01-01T12:46:07.364Z] Environment: GitHub Actions
[2026-01-01T12:46:07.364Z] Node Version: v20.19.6
[2026-01-01T12:46:07.364Z] ========================================
[2026-01-01T12:46:07.364Z] Environment Variables Check:
[2026-01-01T12:46:07.365Z] DISCORD_TOKEN: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-01T12:46:07.365Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-01T12:46:07.365Z] 
Multi-Channel Configuration:
[2026-01-01T12:46:07.365Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-01T12:46:07.365Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-01T12:46:07.366Z] 
Data Files Check:
[2026-01-01T12:46:07.366Z] .github/data/new_jobs.json: ✅ Exists (3 items, 10620 bytes)
[2026-01-01T12:46:07.366Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 33988 bytes)
[2026-01-01T12:46:07.366Z] 
========================================
[2026-01-01T12:46:07.366Z] Starting Enhanced Discord Bot...
[2026-01-01T12:46:07.366Z] ========================================
[2026-01-01T12:46:07.813Z] [BOT] ✅ Loaded V2 database: 57 jobs
[2026-01-01T12:46:08.200Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-01T12:46:08.200Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-01T12:46:08.201Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-01T12:46:08.202Z] [BOT] 📦 Exporting 3 jobs to encrypted JSON...
[2026-01-01T12:46:08.243Z] [BOT] 🧹 Cleaned up 3 jobs older than 7 days
[2026-01-01T12:46:08.284Z] [BOT] ✅ Export complete: Added 3, Skipped 0, Total 35
[2026-01-01T12:46:08.286Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2026-01-01T12:46:08.286Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-01T12:46:08.286Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-01T12:46:08.286Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-01T12:46:08.287Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-01T12:46:08.290Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-01T12:46:08.291Z] [BOT] 📍 [ROUTING] "Operations Analyst" @ ORG_ad6fabcb
[2026-01-01T12:46:08.291Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-01T12:46:08.307Z] [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-01T12:46:08.539Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #💲・sales-jobs
[2026-01-01T12:46:08.539Z] [BOT] ✅ Industry: Operations Analyst @ ORG_ad6fabcb
[2026-01-01T12:46:10.269Z] [BOT] ✅ Created forum post: 🏢 Operations Analyst @ ORG_ad6fabcb in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-01T12:46:11.771Z] [BOT] 💾 Marked as posted: Operations Analyst @ ORG_ad6fabcb (instance #1)
[2026-01-01T12:46:11.771Z] [BOT] 💾 BEFORE ARCHIVING: 58 jobs in database
[2026-01-01T12:46:11.771Z] [BOT] ✅ No jobs to archive (all 58 jobs within 7-day window)
[2026-01-01T12:46:11.776Z] [BOT] 💾 Saved posted_jobs.json: 58 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T12:46:14.777Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-01T12:46:14.777Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2026-01-01T12:46:14.777Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-01T12:46:15.008Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
[2026-01-01T12:46:15.008Z] [BOT] ✅ Industry: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2026-01-01T12:46:16.708Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-01T12:46:16.708Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T12:46:18.209Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-01T12:46:18.209Z] [BOT] 💾 BEFORE ARCHIVING: 59 jobs in database
✅ No jobs to archive (all 59 jobs within 7-day window)
[2026-01-01T12:46:18.211Z] [BOT] 💾 Saved posted_jobs.json: 59 active jobs
[2026-01-01T12:46:18.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-01T12:46:21.213Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-01T12:46:21.215Z] [BOT] 📍 [ROUTING] "FinOps Analyst" @ ORG_21db5199 International
[2026-01-01T12:46:21.215Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-01T12:46:21.441Z] [BOT] ✅ Created forum post: 🏢 FinOps Analyst @ ORG_21db5199 International  in #📣・marketing-jobs
[2026-01-01T12:46:21.442Z] [BOT] ✅ Industry: FinOps Analyst @ ORG_21db5199 International
[2026-01-01T12:46:23.203Z] [BOT] ✅ Created forum post: 🏢 FinOps Analyst @ ORG_21db5199 International  in #🤠・austin
[2026-01-01T12:46:23.203Z] [BOT] ✅ Location: 🤠・austin
[2026-01-01T12:46:24.703Z] [BOT] 💾 Marked as posted: FinOps Analyst @ ORG_21db5199 International  (instance #1)
[2026-01-01T12:46:24.703Z] [BOT] 💾 BEFORE ARCHIVING: 60 jobs in database
✅ No jobs to archive (all 60 jobs within 7-day window)
[2026-01-01T12:46:24.705Z] [BOT] 💾 Saved posted_jobs.json: 60 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-01T12:46:27.706Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-01T12:46:27.706Z] [BOT] ⏭️  Skipping duplicate: JID_59941b58-cx_2001-job-8330 (posted within 7 days)
⏭️  Skipping duplicate: JID_f063c34f-fellow_r_00030888 (posted within 7 days)
[2026-01-01T12:46:27.706Z] [BOT] ⏭️  Skipping duplicate: JID_2cd9f2c0-analyst_jr2047-1 (posted within 7 days)
[2026-01-01T12:46:27.706Z] [BOT] ✅ Loaded pending queue: 3 total (0 pending, 3 enriched, 0 posted)
[2026-01-01T12:46:27.707Z] [BOT] ✅ Saved pending queue: 3 total (0 pending, 0 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
[2026-01-01T12:46:27.707Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-01T12:46:27.752Z] [BOT] 📂 Loaded 1131 existing routing entries
[2026-01-01T12:46:27.795Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 1134
   Timestamp: 2026-01-01T12:46:27.791Z
[2026-01-01T12:46:27.796Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2c2fff94.jsonl
[2026-01-01T12:46:27.796Z] [BOT] Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2026-01-01T12:46:27.796Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-01T12:46:27.796Z] [BOT] Total posts: 6
   Channels used: 4
   Top channels:
     1. #🤠・austin: 3 posts
     2. #💲・sales-jobs: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #📣・marketing-jobs: 1 posts
[2026-01-01T12:46:27.797Z] [BOT] [STATS] Channel stats saved
[2026-01-01T12:46:29.807Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2516) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*