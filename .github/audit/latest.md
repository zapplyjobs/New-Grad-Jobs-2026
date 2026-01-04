# Discord Bot Execution Audit
**Timestamp:** 2026-01-04T16:52:49.380Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-04T16:52:19.258Z] ========================================
[2026-01-04T16:52:19.260Z] Discord Bot Execution Log
[2026-01-04T16:52:19.260Z] Environment: GitHub Actions
[2026-01-04T16:52:19.260Z] Node Version: v20.19.6
[2026-01-04T16:52:19.260Z] ========================================
[2026-01-04T16:52:19.260Z] Environment Variables Check:
[2026-01-04T16:52:19.260Z] DISCORD_TOKEN: ✅ Set
[2026-01-04T16:52:19.260Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-04T16:52:19.261Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-04T16:52:19.261Z] 
Multi-Channel Configuration:
[2026-01-04T16:52:19.261Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.261Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-04T16:52:19.262Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-04T16:52:19.262Z] 
Data Files Check:
[2026-01-04T16:52:19.262Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70450 bytes)
[2026-01-04T16:52:19.267Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 619536 bytes)
[2026-01-04T16:52:19.267Z] 
========================================
[2026-01-04T16:52:19.267Z] Starting Enhanced Discord Bot...
[2026-01-04T16:52:19.267Z] ========================================
[2026-01-04T16:52:19.790Z] [BOT] ✅ Loaded V2 database: 1230 jobs
[2026-01-04T16:52:20.564Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-04T16:52:20.564Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-04T16:52:20.564Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-04T16:52:20.568Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-04T16:52:20.636Z] [BOT] 🧹 Cleaned up 6 jobs older than 7 days
[2026-01-04T16:52:20.723Z] [BOT] ✅ Export complete: Added 6, Skipped 4, Total 212
[2026-01-04T16:52:20.726Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-04T16:52:20.726Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T16:52:20.726Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T16:52:20.727Z] [BOT] 🚫 Skipping blacklisted job: Agentic AI Teacher - Agi Ds - Agi Ds at Amazon
[2026-01-04T16:52:20.728Z] [BOT] ✅ Loaded pending queue: 60 total (40 pending, 20 enriched, 0 posted)
[2026-01-04T16:52:20.730Z] [BOT] ✅ Saved pending queue: 56 total (40 pending, 16 enriched, 0 posted)
[2026-01-04T16:52:20.730Z] [BOT] 🗑️ Removed 4 blacklisted jobs from pending queue
📋 After blacklist filter: 6 jobs (4 blacklisted)
[2026-01-04T16:52:20.730Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2026-01-04T16:52:20.731Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
[2026-01-04T16:52:20.731Z] [BOT] ⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-04T16:52:20.733Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-04T16:52:20.735Z] [BOT] 📍 [ROUTING] "Trial Experience Specialist - Sales" @ gohighlevel
[2026-01-04T16:52:20.735Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-04T16:52:20.752Z] [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-04T16:52:20.910Z] [BOT] ✅ Created forum post: 🏢 Trial Experience Specialist - Sales @ gohighlevel in #🤖・ai-jobs
[2026-01-04T16:52:20.910Z] [BOT] ✅ Industry: Trial Experience Specialist - Sales @ gohighlevel
[2026-01-04T16:52:22.413Z] [BOT] 💾 Marked as posted: Trial Experience Specialist - Sales @ gohighlevel (instance #1)
[2026-01-04T16:52:22.413Z] [BOT] 💾 BEFORE ARCHIVING: 1231 jobs in database
[2026-01-04T16:52:22.414Z] [BOT] ✅ No jobs to archive (all 1231 jobs within 7-day window)
[2026-01-04T16:52:22.426Z] [BOT] 💾 Saved posted_jobs.json: 1231 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:52:22.427Z] [BOT] 📍 [ROUTING] "Deployment Systems Engineer" @ nominal
[2026-01-04T16:52:22.427Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:52:22.688Z] [BOT] ✅ Created forum post: 🏢 Deployment Systems Engineer @ nominal in #🤖・ai-jobs
  ✅ Industry: Deployment Systems Engineer @ nominal
[2026-01-04T16:52:24.444Z] [BOT] ✅ Created forum post: 🏢 Deployment Systems Engineer @ nominal in #🤠・austin
[2026-01-04T16:52:24.444Z] [BOT] ✅ Location: 🤠・austin
[2026-01-04T16:52:25.945Z] [BOT] 💾 Marked as posted: Deployment Systems Engineer @ nominal (instance #1)
[2026-01-04T16:52:25.945Z] [BOT] 💾 BEFORE ARCHIVING: 1232 jobs in database
[2026-01-04T16:52:25.946Z] [BOT] ✅ No jobs to archive (all 1232 jobs within 7-day window)
[2026-01-04T16:52:25.954Z] [BOT] 💾 Saved posted_jobs.json: 1232 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:52:25.954Z] [BOT] 📍 [ROUTING] "Software Engineer - Frontend" @ nominal
[2026-01-04T16:52:25.954Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:52:26.132Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ nominal in #🤖・ai-jobs
[2026-01-04T16:52:26.133Z] [BOT] ✅ Industry: Software Engineer - Frontend @ nominal
[2026-01-04T16:52:28.220Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Frontend @ nominal in #🦢・los-angeles
[2026-01-04T16:52:28.221Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T16:52:29.722Z] [BOT] 💾 Marked as posted: Software Engineer - Frontend @ nominal (instance #1)
[2026-01-04T16:52:29.722Z] [BOT] 💾 BEFORE ARCHIVING: 1233 jobs in database
[2026-01-04T16:52:29.723Z] [BOT] ✅ No jobs to archive (all 1233 jobs within 7-day window)
[2026-01-04T16:52:29.731Z] [BOT] 💾 Saved posted_jobs.json: 1233 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:52:29.731Z] [BOT] 📍 [ROUTING] "Mission Operations Engineer" @ nominal
[2026-01-04T16:52:29.731Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-04T16:52:29.882Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer @ nominal in #🤖・ai-jobs
[2026-01-04T16:52:29.882Z] [BOT] ✅ Industry: Mission Operations Engineer @ nominal
[2026-01-04T16:52:31.567Z] [BOT] ✅ Created forum post: 🏢 Mission Operations Engineer @ nominal in #🦢・los-angeles
[2026-01-04T16:52:31.567Z] [BOT] ✅ Location: 🦢・los-angeles
[2026-01-04T16:52:33.068Z] [BOT] 💾 Marked as posted: Mission Operations Engineer @ nominal (instance #1)
[2026-01-04T16:52:33.069Z] [BOT] 💾 BEFORE ARCHIVING: 1234 jobs in database
[2026-01-04T16:52:33.069Z] [BOT] ✅ No jobs to archive (all 1234 jobs within 7-day window)
[2026-01-04T16:52:33.077Z] [BOT] 💾 Saved posted_jobs.json: 1234 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:52:36.077Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-04T16:52:36.079Z] [BOT] 📍 [ROUTING] "Infrastructure Engineer" @ railway
[2026-01-04T16:52:36.079Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:52:36.326Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer @ railway in #💻・tech-jobs
  ✅ Industry: Infrastructure Engineer @ railway
[2026-01-04T16:52:38.290Z] [BOT] ✅ Created forum post: 🏢 Infrastructure Engineer @ railway in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T16:52:39.792Z] [BOT] 💾 Marked as posted: Infrastructure Engineer @ railway (instance #1)
[2026-01-04T16:52:39.792Z] [BOT] 💾 BEFORE ARCHIVING: 1235 jobs in database
[2026-01-04T16:52:39.793Z] [BOT] ✅ No jobs to archive (all 1235 jobs within 7-day window)
[2026-01-04T16:52:39.803Z] [BOT] 💾 Saved posted_jobs.json: 1235 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:52:39.804Z] [BOT] 📍 [ROUTING] "Senior Full-Stack Engineer - Product" @ railway
[2026-01-04T16:52:39.804Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-04T16:52:40.014Z] [BOT] ✅ Created forum post: 🏢 Senior Full-Stack Engineer - Product @ railway in #💻・tech-jobs
  ✅ Industry: Senior Full-Stack Engineer - Product @ railway
[2026-01-04T16:52:41.901Z] [BOT] ✅ Created forum post: 🏢 Senior Full-Stack Engineer - Product @ railway in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-04T16:52:43.402Z] [BOT] 💾 Marked as posted: Senior Full-Stack Engineer - Product @ railway (instance #1)
[2026-01-04T16:52:43.402Z] [BOT] 💾 BEFORE ARCHIVING: 1236 jobs in database
[2026-01-04T16:52:43.403Z] [BOT] ✅ No jobs to archive (all 1236 jobs within 7-day window)
[2026-01-04T16:52:43.412Z] [BOT] 💾 Saved posted_jobs.json: 1236 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-04T16:52:46.412Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2026-01-04T16:52:46.413Z] [BOT] ⏭️  Skipping duplicate: JID_98418691 (posted within 7 days)
[2026-01-04T16:52:46.413Z] [BOT] ⏭️  Skipping duplicate: JID_8ce68f90 (posted within 7 days)
[2026-01-04T16:52:46.413Z] [BOT] ⏭️  Skipping duplicate: JID_57de7a40 (posted within 7 days)
[2026-01-04T16:52:46.413Z] [BOT] ⏭️  Skipping duplicate: JID_9396c1b0 (posted within 7 days)
[2026-01-04T16:52:46.413Z] [BOT] ⏭️  Skipping duplicate: JID_b07f940c (posted within 7 days)
[2026-01-04T16:52:46.413Z] [BOT] ⏭️  Skipping duplicate: JID_64b2376b (posted within 7 days)
[2026-01-04T16:52:46.414Z] [BOT] ✅ Loaded pending queue: 56 total (40 pending, 16 enriched, 0 posted)
[2026-01-04T16:52:46.416Z] [BOT] ✅ Saved pending queue: 56 total (40 pending, 10 enriched, 6 posted)
[2026-01-04T16:52:46.416Z] [BOT] 📋 Updated queue: marked 6 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-04T16:52:46.471Z] [BOT] 📂 Loaded 2145 existing routing entries
[2026-01-04T16:52:46.527Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
[2026-01-04T16:52:46.527Z] [BOT] Total entries: 2151
   Timestamp: 2026-01-04T16:52:46.516Z
[2026-01-04T16:52:46.528Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_91de8624.jsonl
[2026-01-04T16:52:46.528Z] [BOT] Total attempts: 15
   Successful: 11
   Failed: 0
   Skipped: 4
[2026-01-04T16:52:46.528Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-04T16:52:46.528Z] [BOT] Last cleanup: Never
[2026-01-04T16:52:46.528Z] [BOT] Total posts: 11
   Channels used: 5
   Top channels:
[2026-01-04T16:52:46.528Z] [BOT] 1. #🤖・ai-jobs: 4 posts
     2. #🦢・los-angeles: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #💻・remote-usa: 2 posts
     5. #🤠・austin: 1 posts
[2026-01-04T16:52:46.529Z] [BOT] [STATS] Channel stats saved
[2026-01-04T16:52:48.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*