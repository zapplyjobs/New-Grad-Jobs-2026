# Discord Bot Execution Audit
**Timestamp:** 2025-12-30T00:43:18.098Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-30T00:42:47.616Z] ========================================
[2025-12-30T00:42:47.618Z] Discord Bot Execution Log
[2025-12-30T00:42:47.618Z] Environment: GitHub Actions
[2025-12-30T00:42:47.618Z] Node Version: v20.19.6
[2025-12-30T00:42:47.618Z] ========================================
[2025-12-30T00:42:47.618Z] Environment Variables Check:
[2025-12-30T00:42:47.618Z] DISCORD_TOKEN: ✅ Set
[2025-12-30T00:42:47.618Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.618Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-30T00:42:47.618Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-30T00:42:47.618Z] 
Multi-Channel Configuration:
[2025-12-30T00:42:47.619Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-30T00:42:47.619Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-30T00:42:47.619Z] 
Data Files Check:
[2025-12-30T00:42:47.620Z] .github/data/new_jobs.json: ✅ Exists (5 items, 27615 bytes)
[2025-12-30T00:42:47.620Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 52681 bytes)
[2025-12-30T00:42:47.620Z] 
========================================
[2025-12-30T00:42:47.620Z] Starting Enhanced Discord Bot...
[2025-12-30T00:42:47.620Z] ========================================
[2025-12-30T00:42:48.130Z] [BOT] ✅ Loaded V2 database: 84 jobs
[2025-12-30T00:42:48.697Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-30T00:42:48.697Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2025-12-30T00:42:48.698Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-30T00:42:48.698Z] [BOT] 📦 Exporting 5 jobs to encrypted JSON...
[2025-12-30T00:42:48.743Z] [BOT] 🧹 Cleaned up 2 jobs older than 7 days
[2025-12-30T00:42:48.793Z] [BOT] ✅ Export complete: Added 2, Skipped 3, Total 59
[2025-12-30T00:42:48.794Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2025-12-30T00:42:48.795Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-30T00:42:48.795Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2025-12-30T00:42:48.795Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2025-12-30T00:42:48.796Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-30T00:42:48.797Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-30T00:42:48.798Z] [BOT] 📍 [ROUTING] "Software Engineer - Distributed Systems - Platform Software" @ ORG_8f1bec75
[2025-12-30T00:42:48.799Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T00:42:48.802Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-30T00:42:49.125Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 in #💻・tech-jobs
[2025-12-30T00:42:49.125Z] [BOT] ✅ Industry: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75
[2025-12-30T00:42:50.776Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 in #🌉・san-francisco
[2025-12-30T00:42:50.777Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-30T00:42:52.277Z] [BOT] 💾 Marked as posted: Software Engineer - Distributed Systems - Platform Software @ ORG_8f1bec75 (instance #1)
[2025-12-30T00:42:52.277Z] [BOT] 💾 BEFORE ARCHIVING: 85 jobs in database
[2025-12-30T00:42:52.277Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2025-12-30T00:42:52.282Z] [BOT] 📦 Archived 10 jobs to 2025-12.json (10 total in archive)
[2025-12-30T00:42:52.282Z] [BOT] ✅ Archiving complete: 10 archived, 75 active
[2025-12-30T00:42:52.284Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
[2025-12-30T00:42:52.284Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T00:42:52.285Z] [BOT] 📍 [ROUTING] "Environmental Health & Safety Data Management Specialist" @ ORG_f5f75c9b U
[2025-12-30T00:42:52.285Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-30T00:42:52.522Z] [BOT] ✅ Created forum post: 🏢 Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U in #💻・tech-jobs
[2025-12-30T00:42:52.522Z] [BOT] ✅ Industry: Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U
[2025-12-30T00:42:54.295Z] [BOT] ✅ Created forum post: 🏢 Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-30T00:42:55.795Z] [BOT] 💾 Marked as posted: Environmental Health & Safety Data Management Specialist @ ORG_f5f75c9b U (instance #1)
[2025-12-30T00:42:55.796Z] [BOT] 💾 BEFORE ARCHIVING: 76 jobs in database
✅ No jobs to archive (all 76 jobs within 7-day window)
[2025-12-30T00:42:55.846Z] [BOT] 💾 Saved posted_jobs.json: 76 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-30T00:42:58.847Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-30T00:42:58.848Z] [BOT] 📍 [ROUTING] "Software Engineer - Entry" @ ORG_7b717950
   Category: AI (matched: "machine learning")
[2025-12-30T00:42:58.848Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-30T00:42:59.053Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Entry @ ORG_7b717950
[2025-12-30T00:43:00.755Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Entry @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-30T00:43:02.256Z] [BOT] 💾 Marked as posted: Software Engineer - Entry @ ORG_7b717950 (instance #1)
[2025-12-30T00:43:02.256Z] [BOT] 💾 BEFORE ARCHIVING: 77 jobs in database
[2025-12-30T00:43:02.257Z] [BOT] 📦 Archived 2 jobs to 2025-12.json (12 total in archive)
✅ Archiving complete: 2 archived, 75 active
[2025-12-30T00:43:02.260Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
[2025-12-30T00:43:02.260Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T00:43:05.261Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-30T00:43:05.262Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_10a0c5f8 General Brigham
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-30T00:43:05.262Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-30T00:43:05.550Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_10a0c5f8 General Brigham in #📈・JID_fb739488
  ✅ Industry: Data Analyst @ ORG_10a0c5f8 General Brigham
[2025-12-30T00:43:07.251Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_10a0c5f8 General Brigham in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-30T00:43:08.751Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_10a0c5f8 General Brigham (instance #1)
[2025-12-30T00:43:08.751Z] [BOT] 💾 BEFORE ARCHIVING: 76 jobs in database
[2025-12-30T00:43:08.752Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (13 total in archive)
✅ Archiving complete: 1 archived, 75 active
[2025-12-30T00:43:08.754Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
[2025-12-30T00:43:08.754Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T00:43:08.755Z] [BOT] 📍 [ROUTING] "Enterprise Performance Analytics Engineer" @ ORG_4262074d Access
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-30T00:43:08.755Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-30T00:43:09.073Z] [BOT] ✅ Created forum post: 🏢 Enterprise Performance Analytics Engineer @ ORG_4262074d Access in #📈・JID_fb739488
  ✅ Industry: Enterprise Performance Analytics Engineer @ ORG_4262074d Access
[2025-12-30T00:43:10.741Z] [BOT] ✅ Created forum post: 🏢 Enterprise Performance Analytics Engineer @ ORG_4262074d Access in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-30T00:43:12.242Z] [BOT] 💾 Marked as posted: Enterprise Performance Analytics Engineer @ ORG_4262074d Access (instance #1)
[2025-12-30T00:43:12.242Z] [BOT] 💾 BEFORE ARCHIVING: 76 jobs in database
[2025-12-30T00:43:12.243Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (14 total in archive)
[2025-12-30T00:43:12.243Z] [BOT] ✅ Archiving complete: 1 archived, 75 active
[2025-12-30T00:43:12.245Z] [BOT] 💾 Saved posted_jobs.json: 75 active jobs
[2025-12-30T00:43:12.245Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-30T00:43:15.246Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2025-12-30T00:43:15.246Z] [BOT] ⏭️  Skipping duplicate: JID_ade9d0d9 (posted within 7 days)
[2025-12-30T00:43:15.246Z] [BOT] ⏭️  Skipping duplicate: JID_f16b2bee-_jr91800 (posted within 7 days)
⏭️  Skipping duplicate: JID_25bf03e6 (posted within 7 days)
[2025-12-30T00:43:15.246Z] [BOT] ⏭️  Skipping duplicate: JID_234948fd-analyst_rq4045231 (posted within 7 days)
⏭️  Skipping duplicate: JID_e460bc9c (posted within 7 days)
[2025-12-30T00:43:15.247Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2025-12-30T00:43:15.248Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 0 enriched, 5 posted)
[2025-12-30T00:43:15.248Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-30T00:43:15.290Z] [BOT] 📂 Loaded 1096 existing routing entries
[2025-12-30T00:43:15.337Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2025-12-30T00:43:15.337Z] [BOT] Total entries: 1101
   Timestamp: 2025-12-30T00:43:15.331Z
[2025-12-30T00:43:15.337Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c55b425b.jsonl
[2025-12-30T00:43:15.337Z] [BOT] Total attempts: 10
   Successful: 10
   Failed: 0
   Skipped: 0
[2025-12-30T00:43:15.338Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 6
   Top channels:
[2025-12-30T00:43:15.338Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #🌉・san-francisco: 2 posts
     3. #💻・remote-usa: 2 posts
     4. #📈・JID_fb739488: 2 posts
     5. #🤖・ai-jobs: 1 posts
[2025-12-30T00:43:15.338Z] [BOT] [STATS] Channel stats saved
[2025-12-30T00:43:17.350Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*