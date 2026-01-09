# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T02:42:37.714Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 15
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T02:42:05.568Z] ========================================
[2026-01-09T02:42:05.570Z] Discord Bot Execution Log
[2026-01-09T02:42:05.570Z] Environment: GitHub Actions
[2026-01-09T02:42:05.570Z] Node Version: v20.19.6
[2026-01-09T02:42:05.570Z] ========================================
[2026-01-09T02:42:05.570Z] Environment Variables Check:
[2026-01-09T02:42:05.570Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T02:42:05.570Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.570Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T02:42:05.570Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T02:42:05.571Z] 
Multi-Channel Configuration:
[2026-01-09T02:42:05.571Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T02:42:05.571Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T02:42:05.571Z] 
Data Files Check:
[2026-01-09T02:42:05.572Z] .github/data/new_jobs.json: ✅ Exists (10 items, 91566 bytes)
[2026-01-09T02:42:05.578Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 765709 bytes)
[2026-01-09T02:42:05.578Z] 
========================================
[2026-01-09T02:42:05.578Z] Starting Enhanced Discord Bot...
[2026-01-09T02:42:05.578Z] ========================================
[2026-01-09T02:42:06.113Z] [BOT] ✅ Loaded V2 database: 1490 jobs
[2026-01-09T02:42:07.104Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T02:42:07.105Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T02:42:07.105Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T02:42:07.114Z] [BOT] ✅ Loaded pending queue: 204 total (184 pending, 20 enriched, 0 posted)
[2026-01-09T02:42:07.115Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Corporate Counsel, M&A at anthropic
[2026-01-09T02:42:07.117Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-09T02:42:07.117Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-09T02:42:07.117Z] [BOT] ⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T02:42:07.117Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-09T02:42:07.117Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
⏭️ Skipping already posted: Data Engineer 1 - Aws - Python at The Travelers Companies
⏭️  Skipping duplicate: JID_d37cac04-_r-48615 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Aws - Node at The Travelers Companies
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_016b7cfb-_r-48474 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - .Net - Node.js','React at The Travelers Companies
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_b3c53ec8 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Direct Issuance at StubHub
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_7cf3eb12 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer – New College Graduate at Vectra
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_29d15e1b-cx_1-job-78241 (posted within 7 days)
⏭️ Skipping already posted: Analyst 1 – Labor Analytics - Corporate - Las Vegas at Caesars Entertainment
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_72cf4298-2026_r0055622-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Empower
[2026-01-09T02:42:07.118Z] [BOT] ⏭️  Skipping duplicate: JID_ff0e5907 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at MCA Connect
[2026-01-09T02:42:07.119Z] [BOT] ⏭️  Skipping duplicate: JID_bf5593fa (posted within 7 days)
⏭️ Skipping already posted: ROLE_1f5f8642 at Jerry
📬 Found 5 new jobs (15 already posted)...
[2026-01-09T02:42:07.119Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2026-01-09T02:42:07.119Z] [BOT] 📋 After data quality filter: 5 jobs (0 invalid)
[2026-01-09T02:42:07.120Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-09T02:42:07.120Z] [BOT] 📤 Posting 5 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T02:42:07.121Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T02:42:07.124Z] [BOT] 📍 [ROUTING] "Corporate Counsel, M&A" @ anthropic
[2026-01-09T02:42:07.124Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-09T02:42:07.129Z] [BOT ERROR] (node:3664) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T02:42:07.383Z] [BOT] ✅ Created forum post: 🏢 Corporate Counsel, M&A @ anthropic in #🤖・ai-jobs
  ✅ Industry: Corporate Counsel, M&A @ anthropic
[2026-01-09T02:42:09.258Z] [BOT] ✅ Created forum post: 🏢 Corporate Counsel, M&A @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T02:42:10.759Z] [BOT] 💾 Marked as posted: Corporate Counsel, M&A @ anthropic (instance #1)
[2026-01-09T02:42:10.759Z] [BOT] 💾 BEFORE ARCHIVING: 1491 jobs in database
[2026-01-09T02:42:10.761Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T02:42:10.766Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T02:42:10.766Z] [BOT] ✅ Archiving complete: 1 archived, 1490 active
[2026-01-09T02:42:10.775Z] [BOT] 💾 Saved posted_jobs.json: 1490 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T02:42:13.776Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-09T02:42:13.777Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_810ace5b Health Care
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-09T02:42:13.777Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-09T02:42:14.014Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_810ace5b Health Care in #📈・JID_fb739488
[2026-01-09T02:42:14.014Z] [BOT] ✅ Industry: Data Analyst @ ORG_810ace5b Health Care
[2026-01-09T02:42:15.768Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_810ace5b Health Care in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-09T02:42:17.269Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_810ace5b Health Care (instance #1)
[2026-01-09T02:42:17.270Z] [BOT] 💾 BEFORE ARCHIVING: 1491 jobs in database
[2026-01-09T02:42:17.271Z] [BOT] ✅ No jobs to archive (all 1491 jobs within 7-day window)
[2026-01-09T02:42:17.282Z] [BOT] 💾 Saved posted_jobs.json: 1491 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T02:42:17.283Z] [BOT] 📍 [ROUTING] "Data Scientist" @ ORG_0c79a9c2 Materials
[2026-01-09T02:42:17.284Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-09T02:42:17.284Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-09T02:42:17.476Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_0c79a9c2 Materials in #📈・JID_fb739488
  ✅ Industry: Data Scientist @ ORG_0c79a9c2 Materials
[2026-01-09T02:42:19.292Z] [BOT] ✅ Created forum post: 🏢 Data Scientist @ ORG_0c79a9c2 Materials in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T02:42:20.794Z] [BOT] 💾 Marked as posted: Data Scientist @ ORG_0c79a9c2 Materials (instance #1)
[2026-01-09T02:42:20.794Z] [BOT] 💾 BEFORE ARCHIVING: 1492 jobs in database
[2026-01-09T02:42:20.795Z] [BOT] ✅ No jobs to archive (all 1492 jobs within 7-day window)
[2026-01-09T02:42:20.805Z] [BOT] 💾 Saved posted_jobs.json: 1492 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T02:42:23.806Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-09T02:42:23.807Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ ORG_3eab285c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T02:42:24.158Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #💻・tech-jobs
[2026-01-09T02:42:24.158Z] [BOT] ✅ Industry: Senior Software Engineer @ ORG_3eab285c
[2026-01-09T02:42:25.916Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ ORG_3eab285c in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-09T02:42:27.416Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ ORG_3eab285c (instance #1)
[2026-01-09T02:42:27.417Z] [BOT] 💾 BEFORE ARCHIVING: 1493 jobs in database
[2026-01-09T02:42:27.418Z] [BOT] ✅ No jobs to archive (all 1493 jobs within 7-day window)
[2026-01-09T02:42:27.428Z] [BOT] 💾 Saved posted_jobs.json: 1493 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T02:42:27.429Z] [BOT] 📍 [ROUTING] "Data Processing Specialist - Entry" @ ORG_3d434656
[2026-01-09T02:42:27.429Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T02:42:27.608Z] [BOT] ✅ Created forum post: 🏢 Data Processing Specialist - Entry @ ORG_3d434656 in #💻・tech-jobs
  ✅ Industry: Data Processing Specialist - Entry @ ORG_3d434656
[2026-01-09T02:42:29.934Z] [BOT] ✅ Created forum post: 🏢 Data Processing Specialist - Entry @ ORG_3d434656 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T02:42:31.434Z] [BOT] 💾 Marked as posted: Data Processing Specialist - Entry @ ORG_3d434656 (instance #1)
[2026-01-09T02:42:31.435Z] [BOT] 💾 BEFORE ARCHIVING: 1494 jobs in database
[2026-01-09T02:42:31.436Z] [BOT] ✅ No jobs to archive (all 1494 jobs within 7-day window)
[2026-01-09T02:42:31.447Z] [BOT] 💾 Saved posted_jobs.json: 1494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T02:42:34.447Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-09T02:42:34.448Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
[2026-01-09T02:42:34.448Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
[2026-01-09T02:42:34.448Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
[2026-01-09T02:42:34.448Z] [BOT] ⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
[2026-01-09T02:42:34.462Z] [BOT] ✅ Loaded pending queue: 204 total (184 pending, 20 enriched, 0 posted)
[2026-01-09T02:42:34.479Z] [BOT] ✅ Saved pending queue: 204 total (184 pending, 15 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-01-09T02:42:34.479Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T02:42:34.535Z] [BOT] 📂 Loaded 2470 existing routing entries
[2026-01-09T02:42:34.593Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
[2026-01-09T02:42:34.593Z] [BOT] Total entries: 2475
   Timestamp: 2026-01-09T02:42:34.581Z
[2026-01-09T02:42:34.593Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T02:42:34.594Z] [BOT] Total attempts: 25
   Successful: 10
   Failed: 0
   Skipped: 15
[2026-01-09T02:42:34.594Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 10
   Channels used: 7
   Top channels:
[2026-01-09T02:42:34.594Z] [BOT] 1. #🌉・san-francisco: 2 posts
     2. #📈・JID_fb739488: 2 posts
     3. #💻・tech-jobs: 2 posts
     4. #🤖・ai-jobs: 1 posts
[2026-01-09T02:42:34.594Z] [BOT] 5. #🌆・chicago: 1 posts
[2026-01-09T02:42:34.594Z] [BOT] [STATS] Channel stats saved
[2026-01-09T02:42:36.605Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3664) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*