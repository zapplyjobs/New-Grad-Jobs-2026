# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T21:36:35.912Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T21:35:40.179Z] ========================================
[2025-12-19T21:35:40.181Z] Discord Bot Execution Log
[2025-12-19T21:35:40.181Z] Environment: GitHub Actions
[2025-12-19T21:35:40.181Z] Node Version: v20.19.6
[2025-12-19T21:35:40.181Z] ========================================
[2025-12-19T21:35:40.181Z] Environment Variables Check:
[2025-12-19T21:35:40.181Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T21:35:40.181Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.181Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T21:35:40.181Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T21:35:40.181Z] 
Multi-Channel Configuration:
[2025-12-19T21:35:40.181Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T21:35:40.182Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T21:35:40.182Z] 
Data Files Check:
[2025-12-19T21:35:40.183Z] .github/data/new_jobs.json: ✅ Exists (10 items, 38589 bytes)
[2025-12-19T21:35:40.186Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 354801 bytes)
[2025-12-19T21:35:40.186Z] 
========================================
[2025-12-19T21:35:40.186Z] Starting Enhanced Discord Bot...
[2025-12-19T21:35:40.186Z] ========================================
[2025-12-19T21:35:40.696Z] [BOT] ✅ Loaded V2 database: 598 jobs
[2025-12-19T21:35:41.623Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T21:35:41.624Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T21:35:41.624Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T21:35:41.624Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T21:35:41.668Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T21:35:41.715Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T21:35:41.717Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T21:35:41.717Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T21:35:41.717Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T21:35:41.718Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-19T21:35:41.718Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T21:35:41.723Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-19T21:35:41.723Z] [BOT] 📍 [ROUTING] "Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force" @ ORG_9af9eef3 Technologies
[2025-12-19T21:35:41.723Z] [BOT] Category: TECH (matched: "web/mobile dev")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:35:41.740Z] [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T21:35:41.942Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack -  in #💻・tech-jobs
[2025-12-19T21:35:41.942Z] [BOT] ✅ Industry: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies
[2025-12-19T21:35:43.705Z] [BOT] ✅ Created forum post: 🏢 Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack -  in #🗽・new-york
[2025-12-19T21:35:43.705Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-19T21:35:45.206Z] [BOT] 💾 Marked as posted: Training and Placement for OPT on Java Full Stack/ Web Logic and Sales Force - Java Full Stack - Web Logic and Sales Force @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:35:45.206Z] [BOT] 💾 BEFORE ARCHIVING: 599 jobs in database
[2025-12-19T21:35:45.207Z] [BOT] ✅ No jobs to archive (all 599 jobs within 7-day window)
[2025-12-19T21:35:45.216Z] [BOT] 💾 Saved posted_jobs.json: 599 active jobs
[2025-12-19T21:35:45.216Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:35:45.216Z] [BOT] 📍 [ROUTING] "Helix Data Creator" @ ORG_1f5be668
[2025-12-19T21:35:45.217Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:35:45.529Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #💻・tech-jobs
  ✅ Industry: Helix Data Creator @ ORG_1f5be668
[2025-12-19T21:35:47.434Z] [BOT] ✅ Created forum post: 🏢 Helix Data Creator @ ORG_1f5be668 in #🌉・san-francisco
[2025-12-19T21:35:47.434Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T21:35:48.935Z] [BOT] 💾 Marked as posted: Helix Data Creator @ ORG_1f5be668 (instance #1)
[2025-12-19T21:35:48.935Z] [BOT] 💾 BEFORE ARCHIVING: 600 jobs in database
[2025-12-19T21:35:48.936Z] [BOT] ✅ No jobs to archive (all 600 jobs within 7-day window)
[2025-12-19T21:35:48.942Z] [BOT] 💾 Saved posted_jobs.json: 600 active jobs
[2025-12-19T21:35:48.942Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:35:48.943Z] [BOT] 📍 [ROUTING] "Application Software Developer" @ ORG_a3a09e18 Consulting
[2025-12-19T21:35:48.943Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:35:49.150Z] [BOT] ✅ Created forum post: 🏢 Application Software Developer @ ORG_a3a09e18 Consulting in #💻・tech-jobs
[2025-12-19T21:35:49.150Z] [BOT] ✅ Industry: Application Software Developer @ ORG_a3a09e18 Consulting
[2025-12-19T21:35:50.858Z] [BOT] ✅ Created forum post: 🏢 Application Software Developer @ ORG_a3a09e18 Consulting in #💻・remote-usa
[2025-12-19T21:35:50.858Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-19T21:35:52.358Z] [BOT] 💾 Marked as posted: Application Software Developer @ ORG_a3a09e18 Consulting (instance #1)
[2025-12-19T21:35:52.358Z] [BOT] 💾 BEFORE ARCHIVING: 601 jobs in database
[2025-12-19T21:35:52.359Z] [BOT] ✅ No jobs to archive (all 601 jobs within 7-day window)
[2025-12-19T21:35:52.365Z] [BOT] 💾 Saved posted_jobs.json: 601 active jobs
[2025-12-19T21:35:52.365Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:35:52.366Z] [BOT] 📍 [ROUTING] "Java Informatica MicroStrategy Training" @ ORG_9af9eef3 Technologies
[2025-12-19T21:35:52.366Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:35:52.710Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies
[2025-12-19T21:35:54.440Z] [BOT] ✅ Created forum post: 🏢 Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T21:35:55.941Z] [BOT] 💾 Marked as posted: Java Informatica MicroStrategy Training @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:35:55.941Z] [BOT] 💾 BEFORE ARCHIVING: 602 jobs in database
[2025-12-19T21:35:55.941Z] [BOT] ✅ No jobs to archive (all 602 jobs within 7-day window)
[2025-12-19T21:35:55.947Z] [BOT] 💾 Saved posted_jobs.json: 602 active jobs
[2025-12-19T21:35:55.948Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:35:55.948Z] [BOT] 📍 [ROUTING] "Training and Placement on Java Informatica Microstrategy Tableau" @ ORG_9af9eef3 Technologies
[2025-12-19T21:35:55.948Z] [BOT] Category: TECH (matched: "programming")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T21:35:56.193Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies in #💻・tech-jobs
  ✅ Industry: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies
[2025-12-19T21:35:58.089Z] [BOT] ✅ Created forum post: 🏢 Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies in #🤠・austin
[2025-12-19T21:35:58.090Z] [BOT] ✅ Location: 🤠・austin
[2025-12-19T21:35:59.590Z] [BOT] 💾 Marked as posted: Training and Placement on Java Informatica Microstrategy Tableau @ ORG_9af9eef3 Technologies (instance #1)
[2025-12-19T21:35:59.590Z] [BOT] 💾 BEFORE ARCHIVING: 603 jobs in database
[2025-12-19T21:35:59.590Z] [BOT] ✅ No jobs to archive (all 603 jobs within 7-day window)
[2025-12-19T21:35:59.596Z] [BOT] 💾 Saved posted_jobs.json: 603 active jobs
[2025-12-19T21:35:59.596Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:36:02.596Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-19T21:36:02.596Z] [BOT] 📍 [ROUTING] "SAS Administrator" @ ORG_9b202ecb Tech Solutions
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-19T21:36:02.788Z] [BOT] ✅ Created forum post: 🏢 SAS Administrator @ ORG_9b202ecb Tech Solutions in #📣・marketing-jobs
  ✅ Industry: SAS Administrator @ ORG_9b202ecb Tech Solutions
[2025-12-19T21:36:04.477Z] [BOT] ✅ Created forum post: 🏢 SAS Administrator @ ORG_9b202ecb Tech Solutions in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T21:36:05.977Z] [BOT] 💾 Marked as posted: SAS Administrator @ ORG_9b202ecb Tech Solutions (instance #1)
[2025-12-19T21:36:05.977Z] [BOT] 💾 BEFORE ARCHIVING: 604 jobs in database
[2025-12-19T21:36:05.978Z] [BOT] ✅ No jobs to archive (all 604 jobs within 7-day window)
[2025-12-19T21:36:05.983Z] [BOT] 💾 Saved posted_jobs.json: 604 active jobs
[2025-12-19T21:36:05.983Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:36:08.984Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-19T21:36:08.985Z] [BOT] 📍 [ROUTING] "Technology Analyst - Cocoa" @ ORG_a3a09e18 Consulting
   Category: FINANCE (matched: "investment")
[2025-12-19T21:36:08.985Z] [BOT] Channel: 💰・finance-jobs (1391...2941)
[2025-12-19T21:36:09.245Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting in #💰・finance-jobs
[2025-12-19T21:36:09.245Z] [BOT] ✅ Industry: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting
[2025-12-19T21:36:10.950Z] [BOT] ✅ Created forum post: 🏢 Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2025-12-19T21:36:12.450Z] [BOT] 💾 Marked as posted: Technology Analyst - Cocoa @ ORG_a3a09e18 Consulting (instance #1)
[2025-12-19T21:36:12.451Z] [BOT] 💾 BEFORE ARCHIVING: 605 jobs in database
[2025-12-19T21:36:12.452Z] [BOT] ✅ No jobs to archive (all 605 jobs within 7-day window)
[2025-12-19T21:36:12.458Z] [BOT] 💾 Saved posted_jobs.json: 605 active jobs
[2025-12-19T21:36:12.458Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:36:15.458Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-19T21:36:15.459Z] [BOT] 📍 [ROUTING] "GIS Analyst - Environmental Consulting and Management Services" @ ORG_52575429 Consulting
   Category: SALES (matched: "business development")
[2025-12-19T21:36:15.459Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2025-12-19T21:36:15.662Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting in #💲・sales-jobs
  ✅ Industry: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting
[2025-12-19T21:36:17.414Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-19T21:36:18.914Z] [BOT] 💾 Marked as posted: GIS Analyst - Environmental Consulting and Management Services @ ORG_52575429 Consulting (instance #1)
[2025-12-19T21:36:18.914Z] [BOT] 💾 BEFORE ARCHIVING: 606 jobs in database
[2025-12-19T21:36:18.915Z] [BOT] ✅ No jobs to archive (all 606 jobs within 7-day window)
[2025-12-19T21:36:18.921Z] [BOT] 💾 Saved posted_jobs.json: 606 active jobs
[2025-12-19T21:36:18.921Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:36:21.921Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-19T21:36:21.921Z] [BOT] 📍 [ROUTING] "SQL data analyst" @ 360 IT Professionals
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-19T21:36:21.921Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T21:36:22.233Z] [BOT] ✅ Created forum post: 🏢 SQL data analyst @ 360 IT Professionals in #📈・JID_fb739488
  ✅ Industry: SQL data analyst @ 360 IT Professionals
[2025-12-19T21:36:24.162Z] [BOT] ✅ Created forum post: 🏢 SQL data analyst @ 360 IT Professionals in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T21:36:25.664Z] [BOT] 💾 Marked as posted: SQL data analyst @ 360 IT Professionals (instance #1)
[2025-12-19T21:36:25.664Z] [BOT] 💾 BEFORE ARCHIVING: 607 jobs in database
[2025-12-19T21:36:25.664Z] [BOT] ✅ No jobs to archive (all 607 jobs within 7-day window)
[2025-12-19T21:36:25.670Z] [BOT] 💾 Saved posted_jobs.json: 607 active jobs
[2025-12-19T21:36:25.670Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T21:36:25.670Z] [BOT] 📍 [ROUTING] "MDM Data Analyst 1" @ ORG_9b202ecb Tech Solutions
[2025-12-19T21:36:25.671Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T21:36:26.041Z] [BOT] ✅ Created forum post: 🏢 MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions in #📈・JID_fb739488
  ✅ Industry: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions
[2025-12-19T21:36:28.048Z] [BOT] ✅ Created forum post: 🏢 MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-19T21:36:29.548Z] [BOT] 💾 Marked as posted: MDM Data Analyst 1 @ ORG_9b202ecb Tech Solutions (instance #1)
[2025-12-19T21:36:29.548Z] [BOT] 💾 BEFORE ARCHIVING: 608 jobs in database
[2025-12-19T21:36:29.549Z] [BOT] ✅ No jobs to archive (all 608 jobs within 7-day window)
[2025-12-19T21:36:29.554Z] [BOT] 💾 Saved posted_jobs.json: 608 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T21:36:32.555Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_59cfe0ef (posted within 7 days)
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_c7f330d7 (posted within 7 days)
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_9514ccaa (posted within 7 days)
⏭️  Skipping duplicate: JID_09d84b0c (posted within 7 days)
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_a7166556 (posted within 7 days)
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_262654bb (posted within 7 days)
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_e3b6160c (posted within 7 days)
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_502a0023 (posted within 7 days)
[2025-12-19T21:36:32.556Z] [BOT] ⏭️  Skipping duplicate: JID_d9176382 (posted within 7 days)
[2025-12-19T21:36:32.557Z] [BOT] ⏭️  Skipping duplicate: JID_44a6fa11 (posted within 7 days)
[2025-12-19T21:36:32.559Z] [BOT] ✅ Loaded pending queue: 317 total (297 pending, 20 enriched, 0 posted)
[2025-12-19T21:36:32.564Z] [BOT] ✅ Saved pending queue: 317 total (297 pending, 10 enriched, 10 posted)
[2025-12-19T21:36:32.564Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T21:36:32.606Z] [BOT] 📂 Loaded 677 existing routing entries
[2025-12-19T21:36:32.652Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 687
   Timestamp: 2025-12-19T21:36:32.646Z
📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 11
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 4 posts
     3. #🌉・san-francisco: 2 posts
     4. #📈・JID_fb739488: 2 posts
     5. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2025-12-19T21:36:34.663Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2523) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*