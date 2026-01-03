# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T08:42:27.586Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T08:41:55.875Z] ========================================
[2026-01-03T08:41:55.877Z] Discord Bot Execution Log
[2026-01-03T08:41:55.877Z] Environment: GitHub Actions
[2026-01-03T08:41:55.877Z] Node Version: v20.19.6
[2026-01-03T08:41:55.877Z] ========================================
[2026-01-03T08:41:55.878Z] Environment Variables Check:
[2026-01-03T08:41:55.878Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T08:41:55.878Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.878Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T08:41:55.878Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T08:41:55.878Z] 
Multi-Channel Configuration:
[2026-01-03T08:41:55.878Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.878Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.878Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.878Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.878Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.879Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.879Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.879Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.879Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T08:41:55.879Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T08:41:55.879Z] 
Data Files Check:
[2026-01-03T08:41:55.880Z] .github/data/new_jobs.json: ✅ Exists (10 items, 145966 bytes)
[2026-01-03T08:41:55.882Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 167215 bytes)
[2026-01-03T08:41:55.882Z] 
========================================
[2026-01-03T08:41:55.882Z] Starting Enhanced Discord Bot...
[2026-01-03T08:41:55.882Z] ========================================
[2026-01-03T08:41:56.420Z] [BOT] ✅ Loaded V2 database: 304 jobs
[2026-01-03T08:41:57.185Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T08:41:57.186Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T08:41:57.186Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T08:41:57.187Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T08:41:57.259Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T08:41:57.357Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T08:41:57.358Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T08:41:57.359Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T08:41:57.359Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T08:41:57.360Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-03T08:41:57.360Z] [BOT] (4 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Account Executive, Territory (Mid-Market) @ verkada: salt lake city, ut united states, tempe, az united states, philadelphia, pa united states, new york city, ny united states, austin, tx united states
⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
[2026-01-03T08:41:57.360Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T08:41:57.364Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T08:41:57.365Z] [BOT] 📍 [ROUTING] "National Channel Sales Manager, Convergint (East)" @ verkada
[2026-01-03T08:41:57.365Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-03T08:41:57.365Z] [BOT] ⚠️  Multiple matches: dsMatch, nonTechMatch (using data-science)
[2026-01-03T08:41:57.370Z] [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T08:41:59.249Z] [BOT] ✅ Created forum post: 🏢 National Channel Sales Manager, Convergint (East) @ verkada in #📈・JID_fb739488
[2026-01-03T08:41:59.250Z] [BOT] ✅ Industry: National Channel Sales Manager, Convergint (East) @ verkada
[2026-01-03T08:42:00.751Z] [BOT] 💾 Marked as posted: National Channel Sales Manager, Convergint (East) @ verkada (instance #1)
[2026-01-03T08:42:00.752Z] [BOT] 💾 BEFORE ARCHIVING: 305 jobs in database
[2026-01-03T08:42:00.752Z] [BOT] ✅ No jobs to archive (all 305 jobs within 7-day window)
[2026-01-03T08:42:00.761Z] [BOT] 💾 Saved posted_jobs.json: 305 active jobs
[2026-01-03T08:42:00.761Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:03.762Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T08:42:03.763Z] [BOT] 📍 [ROUTING] "Staff Product Designer, Visual Systems" @ datadog
   Category: MARKETING (matched: "growth")
[2026-01-03T08:42:03.763Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T08:42:04.074Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Visual Systems @ datadog in #📣・marketing-jobs
  ✅ Industry: Staff Product Designer, Visual Systems @ datadog
[2026-01-03T08:42:05.906Z] [BOT] ✅ Created forum post: 🏢 Staff Product Designer, Visual Systems @ datadog in #🗽・new-york
[2026-01-03T08:42:05.906Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T08:42:07.407Z] [BOT] 💾 Marked as posted: Staff Product Designer, Visual Systems @ datadog (instance #1)
[2026-01-03T08:42:07.408Z] [BOT] 💾 BEFORE ARCHIVING: 306 jobs in database
[2026-01-03T08:42:07.408Z] [BOT] ✅ No jobs to archive (all 306 jobs within 7-day window)
[2026-01-03T08:42:07.412Z] [BOT] 💾 Saved posted_jobs.json: 306 active jobs
[2026-01-03T08:42:07.413Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:10.413Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-03T08:42:10.414Z] [BOT] 📍 [ROUTING] "Sales Engineer, Startups " @ vercel
[2026-01-03T08:42:10.414Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:42:10.623Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer, Startups  @ vercel in #💲・sales-jobs
[2026-01-03T08:42:10.623Z] [BOT] ✅ Industry: Sales Engineer, Startups  @ vercel
[2026-01-03T08:42:12.330Z] [BOT] ✅ Created forum post: 🏢 Sales Engineer, Startups  @ vercel in #🌉・san-francisco
[2026-01-03T08:42:12.330Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T08:42:13.830Z] [BOT] 💾 Marked as posted: Sales Engineer, Startups  @ vercel (instance #1)
[2026-01-03T08:42:13.830Z] [BOT] 💾 BEFORE ARCHIVING: 307 jobs in database
[2026-01-03T08:42:13.831Z] [BOT] ✅ No jobs to archive (all 307 jobs within 7-day window)
[2026-01-03T08:42:13.834Z] [BOT] 💾 Saved posted_jobs.json: 307 active jobs
[2026-01-03T08:42:13.835Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:13.835Z] [BOT] 📍 [ROUTING] "Account Executive, Select, Austin" @ verkada
[2026-01-03T08:42:13.835Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:42:14.240Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Select, Austin @ verkada in #💲・sales-jobs
  ✅ Industry: Account Executive, Select, Austin @ verkada
[2026-01-03T08:42:15.999Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Select, Austin @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-03T08:42:17.500Z] [BOT] 💾 Marked as posted: Account Executive, Select, Austin @ verkada (instance #1)
[2026-01-03T08:42:17.501Z] [BOT] 💾 BEFORE ARCHIVING: 308 jobs in database
[2026-01-03T08:42:17.501Z] [BOT] ✅ No jobs to archive (all 308 jobs within 7-day window)
[2026-01-03T08:42:17.505Z] [BOT] 💾 Saved posted_jobs.json: 308 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:17.505Z] [BOT] 📍 [ROUTING] "Account Executive, Territory (Mid-Market)" @ verkada
[2026-01-03T08:42:17.505Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:42:17.757Z] [BOT] ✅ Created forum post: 🏢 Account Executive, Territory (Mid-Market) @ verkada in #💲・sales-jobs
  ✅ Industry: Account Executive, Territory (Mid-Market) @ verkada
[2026-01-03T08:42:19.258Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-03T08:42:19.258Z] [BOT] 💾 BEFORE ARCHIVING: 309 jobs in database
[2026-01-03T08:42:19.258Z] [BOT] ✅ No jobs to archive (all 309 jobs within 7-day window)
[2026-01-03T08:42:19.262Z] [BOT] 💾 Saved posted_jobs.json: 309 active jobs
[2026-01-03T08:42:19.262Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:19.263Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
💾 BEFORE ARCHIVING: 310 jobs in database
[2026-01-03T08:42:19.263Z] [BOT] ✅ No jobs to archive (all 310 jobs within 7-day window)
[2026-01-03T08:42:19.266Z] [BOT] 💾 Saved posted_jobs.json: 310 active jobs
[2026-01-03T08:42:19.266Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-03T08:42:19.267Z] [BOT] 💾 BEFORE ARCHIVING: 311 jobs in database
[2026-01-03T08:42:19.267Z] [BOT] ✅ No jobs to archive (all 311 jobs within 7-day window)
[2026-01-03T08:42:19.270Z] [BOT] 💾 Saved posted_jobs.json: 311 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:19.270Z] [BOT] 💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-03T08:42:19.270Z] [BOT] 💾 BEFORE ARCHIVING: 312 jobs in database
[2026-01-03T08:42:19.270Z] [BOT] ✅ No jobs to archive (all 312 jobs within 7-day window)
[2026-01-03T08:42:19.274Z] [BOT] 💾 Saved posted_jobs.json: 312 active jobs
[2026-01-03T08:42:19.274Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Account Executive, Territory (Mid-Market) @ verkada (instance #1)
[2026-01-03T08:42:19.274Z] [BOT] 💾 BEFORE ARCHIVING: 313 jobs in database
[2026-01-03T08:42:19.274Z] [BOT] ✅ No jobs to archive (all 313 jobs within 7-day window)
[2026-01-03T08:42:19.277Z] [BOT] 💾 Saved posted_jobs.json: 313 active jobs
[2026-01-03T08:42:19.277Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:19.278Z] [BOT] 📍 [ROUTING] "Channel Development Representative, South East (Tampa)" @ verkada
[2026-01-03T08:42:19.278Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T08:42:19.499Z] [BOT] ✅ Created forum post: 🏢 Channel Development Representative, South East (Tampa) @ verkada in #💲・sales-jobs
[2026-01-03T08:42:19.499Z] [BOT] ✅ Industry: Channel Development Representative, South East (Tampa) @ verkada
[2026-01-03T08:42:21.001Z] [BOT] 💾 Marked as posted: Channel Development Representative, South East (Tampa) @ verkada (instance #1)
[2026-01-03T08:42:21.001Z] [BOT] 💾 BEFORE ARCHIVING: 314 jobs in database
[2026-01-03T08:42:21.002Z] [BOT] ✅ No jobs to archive (all 314 jobs within 7-day window)
[2026-01-03T08:42:21.005Z] [BOT] 💾 Saved posted_jobs.json: 314 active jobs
[2026-01-03T08:42:21.006Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T08:42:24.006Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-03T08:42:24.006Z] [BOT] ⏭️  Skipping duplicate: JID_e5503d49 (posted within 7 days)
[2026-01-03T08:42:24.006Z] [BOT] ⏭️  Skipping duplicate: JID_17e140fc (posted within 7 days)
⏭️  Skipping duplicate: JID_0fbdd3f0 (posted within 7 days)
[2026-01-03T08:42:24.006Z] [BOT] ⏭️  Skipping duplicate: JID_9601d5e9 (posted within 7 days)
⏭️  Skipping duplicate: JID_aa50da2e (posted within 7 days)
[2026-01-03T08:42:24.006Z] [BOT] ⏭️  Skipping duplicate: JID_f59a87c2 (posted within 7 days)
[2026-01-03T08:42:24.086Z] [BOT] ✅ Loaded pending queue: 985 total (965 pending, 20 enriched, 0 posted)
[2026-01-03T08:42:24.204Z] [BOT] ✅ Saved pending queue: 985 total (965 pending, 14 enriched, 6 posted)
[2026-01-03T08:42:24.204Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T08:42:24.249Z] [BOT] 📂 Loaded 1317 existing routing entries
[2026-01-03T08:42:24.296Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2026-01-03T08:42:24.296Z] [BOT] Total entries: 1323
   Timestamp: 2026-01-03T08:42:24.290Z
[2026-01-03T08:42:24.296Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T08:42:24.297Z] [BOT] Total attempts: 9
   Successful: 9
   Failed: 0
   Skipped: 0
[2026-01-03T08:42:24.297Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 6
   Top channels:
[2026-01-03T08:42:24.297Z] [BOT] 1. #💲・sales-jobs: 4 posts
     2. #📈・JID_fb739488: 1 posts
     3. #📣・marketing-jobs: 1 posts
     4. #🗽・new-york: 1 posts
     5. #🌉・san-francisco: 1 posts
[2026-01-03T08:42:24.297Z] [BOT] [STATS] Channel stats saved
[2026-01-03T08:42:26.315Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2430) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*