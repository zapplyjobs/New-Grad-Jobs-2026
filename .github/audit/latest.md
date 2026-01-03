# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T09:05:22.594Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T09:04:41.080Z] ========================================
[2026-01-03T09:04:41.082Z] Discord Bot Execution Log
[2026-01-03T09:04:41.082Z] Environment: GitHub Actions
[2026-01-03T09:04:41.082Z] Node Version: v20.19.6
[2026-01-03T09:04:41.082Z] ========================================
[2026-01-03T09:04:41.082Z] Environment Variables Check:
[2026-01-03T09:04:41.082Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T09:04:41.082Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.082Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T09:04:41.082Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T09:04:41.082Z] 
Multi-Channel Configuration:
[2026-01-03T09:04:41.082Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T09:04:41.083Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T09:04:41.083Z] 
Data Files Check:
[2026-01-03T09:04:41.084Z] .github/data/new_jobs.json: ✅ Exists (10 items, 172455 bytes)
[2026-01-03T09:04:41.086Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 177168 bytes)
[2026-01-03T09:04:41.086Z] 
========================================
[2026-01-03T09:04:41.086Z] Starting Enhanced Discord Bot...
[2026-01-03T09:04:41.086Z] ========================================
[2026-01-03T09:04:41.617Z] [BOT] ✅ Loaded V2 database: 324 jobs
[2026-01-03T09:04:42.520Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T09:04:42.521Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T09:04:42.521Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T09:04:42.523Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T09:04:42.596Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T09:04:42.691Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T09:04:42.693Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T09:04:42.694Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T09:04:42.694Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T09:04:42.694Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2026-01-03T09:04:42.695Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T09:04:42.699Z] [BOT] 📌 Posting 6 jobs to #💲・sales-jobs
[2026-01-03T09:04:42.700Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Phoenix - Corporate)" @ verkada
[2026-01-03T09:04:42.700Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:04:42.705Z] [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T09:04:42.916Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Phoenix - Corporate) @ verkada in #💲・sales-jobs
[2026-01-03T09:04:42.917Z] [BOT] ✅ Industry: Enterprise Account Executive (Phoenix - Corporate) @ verkada
[2026-01-03T09:04:44.419Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Phoenix - Corporate) @ verkada (instance #1)
[2026-01-03T09:04:44.420Z] [BOT] 💾 BEFORE ARCHIVING: 325 jobs in database
[2026-01-03T09:04:44.420Z] [BOT] ✅ No jobs to archive (all 325 jobs within 7-day window)
[2026-01-03T09:04:44.427Z] [BOT] 💾 Saved posted_jobs.json: 325 active jobs
[2026-01-03T09:04:44.427Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:04:44.427Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (SoCal - Corporate)" @ verkada
[2026-01-03T09:04:44.428Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:04:44.630Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (SoCal - Corporate) @ verkada in #💲・sales-jobs
[2026-01-03T09:04:44.630Z] [BOT] ✅ Industry: Enterprise Account Executive (SoCal - Corporate) @ verkada
[2026-01-03T09:04:46.379Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (SoCal - Corporate) @ verkada in #🦢・los-angeles
[2026-01-03T09:04:46.379Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-03T09:04:47.881Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (SoCal - Corporate) @ verkada (instance #1)
[2026-01-03T09:04:47.881Z] [BOT] 💾 BEFORE ARCHIVING: 326 jobs in database
[2026-01-03T09:04:47.881Z] [BOT] ✅ No jobs to archive (all 326 jobs within 7-day window)
[2026-01-03T09:04:47.885Z] [BOT] 💾 Saved posted_jobs.json: 326 active jobs
[2026-01-03T09:04:47.885Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:04:47.885Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (Southern California - Local, Higher Education)" @ verkada
[2026-01-03T09:04:47.886Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:04:48.260Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada in #💲・sales-jobs
[2026-01-03T09:04:48.260Z] [BOT] ✅ Industry: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada
[2026-01-03T09:04:49.971Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-03T09:04:51.471Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (Southern California - Local, Higher Education) @ verkada (instance #1)
[2026-01-03T09:04:51.471Z] [BOT] 💾 BEFORE ARCHIVING: 327 jobs in database
[2026-01-03T09:04:51.471Z] [BOT] ✅ No jobs to archive (all 327 jobs within 7-day window)
[2026-01-03T09:04:51.474Z] [BOT] 💾 Saved posted_jobs.json: 327 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:04:51.475Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (US West - Federal Veterans Affairs)" @ verkada
[2026-01-03T09:04:51.475Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:04:51.862Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada
[2026-01-03T09:04:53.600Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-03T09:04:55.101Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada (instance #1)
[2026-01-03T09:04:55.101Z] [BOT] 💾 BEFORE ARCHIVING: 328 jobs in database
[2026-01-03T09:04:55.101Z] [BOT] ✅ No jobs to archive (all 328 jobs within 7-day window)
[2026-01-03T09:04:55.105Z] [BOT] 💾 Saved posted_jobs.json: 328 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:04:55.106Z] [BOT] 📍 [ROUTING] "Enterprise Development Manager" @ verkada
[2026-01-03T09:04:55.106Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:04:55.333Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Manager @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Development Manager @ verkada
[2026-01-03T09:04:57.042Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Manager @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-03T09:04:58.543Z] [BOT] 💾 Marked as posted: Enterprise Development Manager @ verkada (instance #1)
[2026-01-03T09:04:58.543Z] [BOT] 💾 BEFORE ARCHIVING: 329 jobs in database
[2026-01-03T09:04:58.544Z] [BOT] ✅ No jobs to archive (all 329 jobs within 7-day window)
[2026-01-03T09:04:58.547Z] [BOT] 💾 Saved posted_jobs.json: 329 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:04:58.548Z] [BOT] 📍 [ROUTING] "Enterprise Development Representative" @ verkada
[2026-01-03T09:04:58.548Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T09:04:58.812Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Representative @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Development Representative @ verkada
[2026-01-03T09:05:00.558Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Representative @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-03T09:05:02.059Z] [BOT] 💾 Marked as posted: Enterprise Development Representative @ verkada (instance #1)
[2026-01-03T09:05:02.059Z] [BOT] 💾 BEFORE ARCHIVING: 330 jobs in database
[2026-01-03T09:05:02.060Z] [BOT] ✅ No jobs to archive (all 330 jobs within 7-day window)
[2026-01-03T09:05:02.063Z] [BOT] 💾 Saved posted_jobs.json: 330 active jobs
[2026-01-03T09:05:02.063Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:05:05.064Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-03T09:05:05.065Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Carolinas " @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T09:05:05.065Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:05:05.336Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Carolinas  @ verkada in #💻・tech-jobs
[2026-01-03T09:05:05.336Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Carolinas  @ verkada
[2026-01-03T09:05:06.838Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Carolinas  @ verkada (instance #1)
[2026-01-03T09:05:06.838Z] [BOT] 💾 BEFORE ARCHIVING: 331 jobs in database
[2026-01-03T09:05:06.838Z] [BOT] ✅ No jobs to archive (all 331 jobs within 7-day window)
[2026-01-03T09:05:06.841Z] [BOT] 💾 Saved posted_jobs.json: 331 active jobs
[2026-01-03T09:05:06.841Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:05:06.842Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Greater Atlanta Area" @ verkada
[2026-01-03T09:05:06.842Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:05:07.103Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Greater Atlanta Area @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada
[2026-01-03T09:05:08.604Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada (instance #1)
[2026-01-03T09:05:08.605Z] [BOT] 💾 BEFORE ARCHIVING: 332 jobs in database
[2026-01-03T09:05:08.605Z] [BOT] ✅ No jobs to archive (all 332 jobs within 7-day window)
[2026-01-03T09:05:08.608Z] [BOT] 💾 Saved posted_jobs.json: 332 active jobs
[2026-01-03T09:05:08.608Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:05:08.608Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Mid-West, SLED" @ verkada
   Category: TECH (matched: "engineer/engineering")
[2026-01-03T09:05:08.608Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:05:09.033Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Mid-West, SLED @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Mid-West, SLED @ verkada
[2026-01-03T09:05:10.990Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Mid-West, SLED @ verkada in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-03T09:05:12.492Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Mid-West, SLED @ verkada (instance #1)
[2026-01-03T09:05:12.492Z] [BOT] 💾 BEFORE ARCHIVING: 333 jobs in database
[2026-01-03T09:05:12.492Z] [BOT] ✅ No jobs to archive (all 333 jobs within 7-day window)
[2026-01-03T09:05:12.496Z] [BOT] 💾 Saved posted_jobs.json: 333 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T09:05:12.497Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Northeast" @ verkada
[2026-01-03T09:05:12.497Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T09:05:12.781Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Northeast @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Northeast @ verkada
[2026-01-03T09:05:14.525Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Northeast @ verkada in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T09:05:16.028Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Northeast @ verkada (instance #1)
[2026-01-03T09:05:16.028Z] [BOT] 💾 BEFORE ARCHIVING: 334 jobs in database
[2026-01-03T09:05:16.028Z] [BOT] ✅ No jobs to archive (all 334 jobs within 7-day window)
[2026-01-03T09:05:16.032Z] [BOT] 💾 Saved posted_jobs.json: 334 active jobs
[2026-01-03T09:05:16.032Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T09:05:19.033Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-03T09:05:19.033Z] [BOT] ⏭️  Skipping duplicate: JID_1fba0dfd (posted within 7 days)
[2026-01-03T09:05:19.033Z] [BOT] ⏭️  Skipping duplicate: JID_a3d19ba5 (posted within 7 days)
⏭️  Skipping duplicate: JID_2de00e78 (posted within 7 days)
[2026-01-03T09:05:19.033Z] [BOT] ⏭️  Skipping duplicate: JID_81c0b62d (posted within 7 days)
⏭️  Skipping duplicate: JID_bf0d2987 (posted within 7 days)
⏭️  Skipping duplicate: JID_ce87da78 (posted within 7 days)
[2026-01-03T09:05:19.033Z] [BOT] ⏭️  Skipping duplicate: JID_97e7cb0f (posted within 7 days)
⏭️  Skipping duplicate: JID_93d9360f (posted within 7 days)
[2026-01-03T09:05:19.033Z] [BOT] ⏭️  Skipping duplicate: JID_152141f5 (posted within 7 days)
[2026-01-03T09:05:19.034Z] [BOT] ⏭️  Skipping duplicate: JID_2c363f0d (posted within 7 days)
[2026-01-03T09:05:19.113Z] [BOT] ✅ Loaded pending queue: 965 total (945 pending, 20 enriched, 0 posted)
[2026-01-03T09:05:19.230Z] [BOT] ✅ Saved pending queue: 965 total (945 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-03T09:05:19.230Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T09:05:19.274Z] [BOT] 📂 Loaded 1333 existing routing entries
[2026-01-03T09:05:19.320Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 1343
   Timestamp: 2026-01-03T09:05:19.315Z
[2026-01-03T09:05:19.321Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 17
   Successful: 17
[2026-01-03T09:05:19.321Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-03T09:05:19.321Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T09:05:19.322Z] [BOT] Total posts: 17
   Channels used: 7
   Top channels:
     1. #💲・sales-jobs: 6 posts
     2. #💻・tech-jobs: 4 posts
     3. #🦢・los-angeles: 2 posts
[2026-01-03T09:05:19.322Z] [BOT] 4. #🤠・austin: 2 posts
     5. #🌧️・seattle: 1 posts
[2026-01-03T09:05:19.322Z] [BOT] [STATS] Channel stats saved
[2026-01-03T09:05:21.339Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2348) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*