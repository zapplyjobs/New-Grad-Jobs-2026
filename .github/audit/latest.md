# Discord Bot Execution Audit
**Timestamp:** 2026-01-16T23:27:27.436Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-16T23:26:32.671Z] ========================================
[2026-01-16T23:26:32.673Z] Discord Bot Execution Log
[2026-01-16T23:26:32.673Z] Environment: GitHub Actions
[2026-01-16T23:26:32.673Z] Node Version: v20.19.6
[2026-01-16T23:26:32.673Z] ========================================
[2026-01-16T23:26:32.673Z] Environment Variables Check:
[2026-01-16T23:26:32.673Z] DISCORD_TOKEN: ✅ Set
[2026-01-16T23:26:32.673Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.673Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-16T23:26:32.674Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-16T23:26:32.674Z] 
Multi-Channel Configuration:
[2026-01-16T23:26:32.674Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-16T23:26:32.674Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-16T23:26:32.674Z] 
Data Files Check:
[2026-01-16T23:26:32.675Z] .github/data/new_jobs.json: ✅ Exists (10 items, 36500 bytes)
[2026-01-16T23:26:32.684Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1195299 bytes)
[2026-01-16T23:26:32.684Z] 
========================================
[2026-01-16T23:26:32.684Z] Starting Enhanced Discord Bot...
[2026-01-16T23:26:32.684Z] ========================================
[2026-01-16T23:26:33.206Z] [BOT] ✅ Loaded V2 database: 2203 jobs
[2026-01-16T23:26:33.735Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-16T23:26:33.735Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-16T23:26:33.736Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-16T23:26:33.847Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Campus ML Engineer (Full-Time) at Jump Trading
[2026-01-16T23:26:33.850Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-16T23:26:33.850Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-16T23:26:33.850Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-16T23:26:33.851Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-16T23:26:33.851Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-16T23:26:33.851Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-16T23:26:33.856Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-16T23:26:33.856Z] [BOT] 📍 [ROUTING] "Campus ML Engineer (Full-Time)" @ ORG_9ee0ca3e Trading
[2026-01-16T23:26:33.856Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T23:26:33.873Z] [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-16T23:26:34.091Z] [BOT] ✅ Created forum post: 🏢 Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading in #🤖・ai-jobs
  ✅ Industry: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading
[2026-01-16T23:26:35.840Z] [BOT] ✅ Created forum post: 🏢 Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-16T23:26:37.342Z] [BOT] 💾 Marked as posted: Campus ML Engineer (Full-Time) @ ORG_9ee0ca3e Trading (instance #1)
[2026-01-16T23:26:37.343Z] [BOT] 💾 BEFORE ARCHIVING: 2204 jobs in database
[2026-01-16T23:26:37.344Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-16T23:26:37.349Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
✅ Archiving complete: 1 archived, 2203 active
[2026-01-16T23:26:37.364Z] [BOT] 💾 Saved posted_jobs.json: 2203 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:26:37.364Z] [BOT] 📍 [ROUTING] "Campus AI Researcher (Full-Time)" @ ORG_9ee0ca3e Trading
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-16T23:26:37.731Z] [BOT] ✅ Created forum post: 🏢 Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading in #🤖・ai-jobs
[2026-01-16T23:26:37.731Z] [BOT] ✅ Industry: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading
[2026-01-16T23:26:39.627Z] [BOT] ✅ Created forum post: 🏢 Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-16T23:26:41.127Z] [BOT] 💾 Marked as posted: Campus AI Researcher (Full-Time) @ ORG_9ee0ca3e Trading (instance #1)
[2026-01-16T23:26:41.128Z] [BOT] 💾 BEFORE ARCHIVING: 2204 jobs in database
[2026-01-16T23:26:41.129Z] [BOT] ✅ No jobs to archive (all 2204 jobs within 7-day window)
[2026-01-16T23:26:41.141Z] [BOT] 💾 Saved posted_jobs.json: 2204 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:26:44.141Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-16T23:26:44.142Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_4c57d8f0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:26:44.368Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_4c57d8f0 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_4c57d8f0
[2026-01-16T23:26:46.071Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_4c57d8f0 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-16T23:26:47.572Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_4c57d8f0 (instance #1)
[2026-01-16T23:26:47.573Z] [BOT] 💾 BEFORE ARCHIVING: 2205 jobs in database
[2026-01-16T23:26:47.575Z] [BOT] ✅ No jobs to archive (all 2205 jobs within 7-day window)
[2026-01-16T23:26:47.592Z] [BOT] 💾 Saved posted_jobs.json: 2205 active jobs
[2026-01-16T23:26:47.592Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:26:47.593Z] [BOT] 📍 [ROUTING] "Application Software Developer" @ ORG_a3a09e18 Consulting
[2026-01-16T23:26:47.593Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:26:47.723Z] [BOT] ✅ Created forum post: 🏢 Application Software Developer @ ORG_a3a09e18 Consulting in #💻・tech-jobs
  ✅ Industry: Application Software Developer @ ORG_a3a09e18 Consulting
[2026-01-16T23:26:49.716Z] [BOT] ✅ Created forum post: 🏢 Application Software Developer @ ORG_a3a09e18 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:26:51.218Z] [BOT] 💾 Marked as posted: Application Software Developer @ ORG_a3a09e18 Consulting (instance #1)
[2026-01-16T23:26:51.218Z] [BOT] 💾 BEFORE ARCHIVING: 2206 jobs in database
[2026-01-16T23:26:51.219Z] [BOT] ✅ No jobs to archive (all 2206 jobs within 7-day window)
[2026-01-16T23:26:51.234Z] [BOT] 💾 Saved posted_jobs.json: 2206 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:26:51.234Z] [BOT] 📍 [ROUTING] "Software Engineer I - Aldp" @ ORG_bdf03daa Fintech Solutions
[2026-01-16T23:26:51.235Z] [BOT] Category: TECH (matched: "software")
[2026-01-16T23:26:51.235Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:26:51.483Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions in #💻・tech-jobs
  ✅ Industry: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions
[2026-01-16T23:26:53.264Z] [BOT] ✅ Created forum post: 🏢 Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-16T23:26:54.766Z] [BOT] 💾 Marked as posted: Software Engineer I - Aldp @ ORG_bdf03daa Fintech Solutions (instance #1)
[2026-01-16T23:26:54.766Z] [BOT] 💾 BEFORE ARCHIVING: 2207 jobs in database
[2026-01-16T23:26:54.767Z] [BOT] ✅ No jobs to archive (all 2207 jobs within 7-day window)
[2026-01-16T23:26:54.781Z] [BOT] 💾 Saved posted_jobs.json: 2207 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:26:54.782Z] [BOT] 📍 [ROUTING] "SAP ERP Analyst" @ 360 IT Professionals
[2026-01-16T23:26:54.782Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:26:54.957Z] [BOT] ✅ Created forum post: 🏢 SAP ERP Analyst @ 360 IT Professionals in #💻・tech-jobs
  ✅ Industry: SAP ERP Analyst @ 360 IT Professionals
[2026-01-16T23:26:56.718Z] [BOT] ✅ Created forum post: 🏢 SAP ERP Analyst @ 360 IT Professionals in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:26:58.220Z] [BOT] 💾 Marked as posted: SAP ERP Analyst @ 360 IT Professionals (instance #1)
[2026-01-16T23:26:58.220Z] [BOT] 💾 BEFORE ARCHIVING: 2208 jobs in database
[2026-01-16T23:26:58.222Z] [BOT] ✅ No jobs to archive (all 2208 jobs within 7-day window)
[2026-01-16T23:26:58.235Z] [BOT] 💾 Saved posted_jobs.json: 2208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:26:58.235Z] [BOT] 📍 [ROUTING] "Java Informatica MicroStrategy Training" @ ORG_9af9eef3 Technologies
[2026-01-16T23:26:58.235Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-16T23:26:58.391Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies
[2026-01-16T23:27:00.270Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:27:01.771Z] [BOT] 💾 Marked as posted: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies (instance #1)
[2026-01-16T23:27:01.771Z] [BOT] 💾 BEFORE ARCHIVING: 2209 jobs in database
[2026-01-16T23:27:01.773Z] [BOT] ✅ No jobs to archive (all 2209 jobs within 7-day window)
[2026-01-16T23:27:01.785Z] [BOT] 💾 Saved posted_jobs.json: 2209 active jobs
[2026-01-16T23:27:01.785Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:27:04.786Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-16T23:27:04.786Z] [BOT] 📍 [ROUTING] "SAS Administrator" @ ORG_9b202ecb Tech Solutions
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-16T23:27:05.141Z] [BOT] ✅ Created forum post: 🏢 SAS Administrator @ ORG_9b202ecb Tech Solutions in #📣・marketing-jobs
[2026-01-16T23:27:05.141Z] [BOT] ✅ Industry: SAS Administrator @ ORG_9b202ecb Tech Solutions
[2026-01-16T23:27:06.826Z] [BOT] ✅ Created forum post: 🏢 SAS Administrator @ ORG_9b202ecb Tech Solutions in #💻・remote-usa
[2026-01-16T23:27:06.826Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-16T23:27:08.327Z] [BOT] 💾 Marked as posted: SAS Administrator @ ORG_9b202ecb Tech Solutions (instance #1)
[2026-01-16T23:27:08.328Z] [BOT] 💾 BEFORE ARCHIVING: 2210 jobs in database
[2026-01-16T23:27:08.329Z] [BOT] ✅ No jobs to archive (all 2210 jobs within 7-day window)
[2026-01-16T23:27:08.344Z] [BOT] 💾 Saved posted_jobs.json: 2210 active jobs
[2026-01-16T23:27:08.344Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:27:11.345Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-16T23:27:11.345Z] [BOT] 📍 [ROUTING] "Technology Analyst - Cocoa" @ ORG_a3a09e18 Consulting
   Category: FINANCE (matched: "investment")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-16T23:27:11.523Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting in #💰・finance-jobs
[2026-01-16T23:27:11.523Z] [BOT] ✅ Industry: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting
[2026-01-16T23:27:13.335Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting in #☀️・sunnyvale
[2026-01-16T23:27:13.336Z] [BOT] ✅ Location: ☀️・sunnyvale
[2026-01-16T23:27:14.837Z] [BOT] 💾 Marked as posted: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting (instance #1)
[2026-01-16T23:27:14.837Z] [BOT] 💾 BEFORE ARCHIVING: 2211 jobs in database
[2026-01-16T23:27:14.839Z] [BOT] ✅ No jobs to archive (all 2211 jobs within 7-day window)
[2026-01-16T23:27:14.856Z] [BOT] 💾 Saved posted_jobs.json: 2211 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-16T23:27:17.857Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-16T23:27:17.858Z] [BOT] 📍 [ROUTING] "GIS Analyst - Environmental Consulting and Management Services" @ ORG_52575429 Consulting
[2026-01-16T23:27:17.858Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-16T23:27:18.138Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting in #💲・sales-jobs
[2026-01-16T23:27:18.138Z] [BOT] ✅ Industry: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting
[2026-01-16T23:27:19.866Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-16T23:27:21.368Z] [BOT] 💾 Marked as posted: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting (instance #1)
[2026-01-16T23:27:21.368Z] [BOT] 💾 BEFORE ARCHIVING: 2212 jobs in database
[2026-01-16T23:27:21.370Z] [BOT] ✅ No jobs to archive (all 2212 jobs within 7-day window)
[2026-01-16T23:27:21.383Z] [BOT] 💾 Saved posted_jobs.json: 2212 active jobs
[2026-01-16T23:27:21.383Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-16T23:27:24.384Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-16T23:27:24.384Z] [BOT] ⏭️  Skipping duplicate: JID_88599b59 (posted within 7 days)
[2026-01-16T23:27:24.385Z] [BOT] ⏭️  Skipping duplicate: JID_5f75ebe3 (posted within 7 days)
⏭️  Skipping duplicate: JID_56e3f148 (posted within 7 days)
⏭️  Skipping duplicate: JID_9514ccaa (posted within 7 days)
[2026-01-16T23:27:24.385Z] [BOT] ⏭️  Skipping duplicate: JID_1006dc77-_jr103414-1 (posted within 7 days)
[2026-01-16T23:27:24.385Z] [BOT] ⏭️  Skipping duplicate: JID_09d84b0c (posted within 7 days)
[2026-01-16T23:27:24.385Z] [BOT] ⏭️  Skipping duplicate: JID_a7166556 (posted within 7 days)
[2026-01-16T23:27:24.385Z] [BOT] ⏭️  Skipping duplicate: JID_d257b577 (posted within 7 days)
[2026-01-16T23:27:24.385Z] [BOT] ⏭️  Skipping duplicate: JID_262654bb (posted within 7 days)
[2026-01-16T23:27:24.386Z] [BOT] ⏭️  Skipping duplicate: JID_e3b6160c (posted within 7 days)
[2026-01-16T23:27:24.493Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[2026-01-16T23:27:24.667Z] [BOT] ✅ Saved pending queue: 2777 total (2757 pending, 10 enriched, 10 posted)
[2026-01-16T23:27:24.667Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-16T23:27:24.725Z] [BOT] 📂 Loaded 4425 existing routing entries
[2026-01-16T23:27:24.795Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-16T23:27:24.796Z] [BOT] Total entries: 4435
   Timestamp: 2026-01-16T23:27:24.775Z
[2026-01-16T23:27:24.796Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_65aa6ac9.jsonl
[2026-01-16T23:27:24.796Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-16T23:27:24.797Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-16T23:27:24.797Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 10
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 5 posts
     3. #🤖・ai-jobs: 2 posts
     4. #🌆・chicago: 2 posts
[2026-01-16T23:27:24.797Z] [BOT] 5. #🚌・boston: 1 posts
[2026-01-16T23:27:24.797Z] [BOT] [STATS] Channel stats saved
[2026-01-16T23:27:26.822Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2399) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*