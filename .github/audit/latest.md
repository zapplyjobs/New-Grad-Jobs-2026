# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T22:44:07.014Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T22:43:13.592Z] ========================================
[2026-01-14T22:43:13.594Z] Discord Bot Execution Log
[2026-01-14T22:43:13.594Z] Environment: GitHub Actions
[2026-01-14T22:43:13.594Z] Node Version: v20.19.6
[2026-01-14T22:43:13.594Z] ========================================
[2026-01-14T22:43:13.594Z] Environment Variables Check:
[2026-01-14T22:43:13.594Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T22:43:13.594Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.594Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T22:43:13.594Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T22:43:13.594Z] 
Multi-Channel Configuration:
[2026-01-14T22:43:13.595Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T22:43:13.595Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T22:43:13.595Z] 
Data Files Check:
[2026-01-14T22:43:13.596Z] .github/data/new_jobs.json: ✅ Exists (10 items, 92051 bytes)
[2026-01-14T22:43:13.602Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 787083 bytes)
[2026-01-14T22:43:13.602Z] 
========================================
[2026-01-14T22:43:13.602Z] Starting Enhanced Discord Bot...
[2026-01-14T22:43:13.602Z] ========================================
[2026-01-14T22:43:14.123Z] [BOT] ✅ Loaded V2 database: 1476 jobs
[2026-01-14T22:43:14.973Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T22:43:14.974Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T22:43:14.974Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T22:43:15.089Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer Data/AI/Intelligent Systems 1 at Cisco
[2026-01-14T22:43:15.091Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T22:43:15.091Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T22:43:15.091Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T22:43:15.092Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T22:43:15.092Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T22:43:15.096Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T22:43:15.097Z] [BOT] 📍 [ROUTING] "Software Engineer Data/AI/Intelligent Systems 1" @ ORG_aa669b28
[2026-01-14T22:43:15.097Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T22:43:15.115Z] [BOT ERROR] (node:2935) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T22:43:15.344Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-14T22:43:15.345Z] [BOT] ✅ Industry: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28
[2026-01-14T22:43:17.090Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-14T22:43:18.591Z] [BOT] 💾 Marked as posted: Software Engineer Data/AI/Intelligent Systems 1 @ ORG_aa669b28 (instance #1)
[2026-01-14T22:43:18.591Z] [BOT] 💾 BEFORE ARCHIVING: 1477 jobs in database
[2026-01-14T22:43:18.593Z] [BOT] ✅ No jobs to archive (all 1477 jobs within 7-day window)
[2026-01-14T22:43:18.605Z] [BOT] 💾 Saved posted_jobs.json: 1477 active jobs
[2026-01-14T22:43:18.606Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:18.606Z] [BOT] 📍 [ROUTING] "AI Product Engineer – New Grad" @ ORG_a528a4d5
[2026-01-14T22:43:18.607Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T22:43:18.854Z] [BOT] ✅ Created forum post: 🏢 AI Product Engineer – New Grad @ ORG_a528a4d5 in #🤖・ai-jobs
  ✅ Industry: AI Product Engineer – New Grad @ ORG_a528a4d5
[2026-01-14T22:43:20.624Z] [BOT] ✅ Created forum post: 🏢 AI Product Engineer – New Grad @ ORG_a528a4d5 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:43:22.124Z] [BOT] 💾 Marked as posted: AI Product Engineer – New Grad @ ORG_a528a4d5 (instance #1)
💾 BEFORE ARCHIVING: 1478 jobs in database
[2026-01-14T22:43:22.125Z] [BOT] ✅ No jobs to archive (all 1478 jobs within 7-day window)
[2026-01-14T22:43:22.134Z] [BOT] 💾 Saved posted_jobs.json: 1478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:22.135Z] [BOT] 📍 [ROUTING] "Software Engineer Security & Automation 1" @ ORG_aa669b28
[2026-01-14T22:43:22.135Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T22:43:22.135Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T22:43:22.380Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Security & Automation 1 @ ORG_aa669b28 in #🤖・ai-jobs
  ✅ Industry: Software Engineer Security & Automation 1 @ ORG_aa669b28
[2026-01-14T22:43:24.098Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Security & Automation 1 @ ORG_aa669b28 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:43:25.599Z] [BOT] 💾 Marked as posted: Software Engineer Security & Automation 1 @ ORG_aa669b28 (instance #1)
[2026-01-14T22:43:25.600Z] [BOT] 💾 BEFORE ARCHIVING: 1479 jobs in database
[2026-01-14T22:43:25.601Z] [BOT] ✅ No jobs to archive (all 1479 jobs within 7-day window)
[2026-01-14T22:43:25.611Z] [BOT] 💾 Saved posted_jobs.json: 1479 active jobs
[2026-01-14T22:43:25.611Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:28.612Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-14T22:43:28.613Z] [BOT] 📍 [ROUTING] "Game Developer" @ ORG_d75f5e50
[2026-01-14T22:43:28.614Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:43:28.833Z] [BOT] ✅ Created forum post: 🏢 Game Developer @ ORG_d75f5e50 in #💻・tech-jobs
[2026-01-14T22:43:28.833Z] [BOT] ✅ Industry: Game Developer @ ORG_d75f5e50
[2026-01-14T22:43:30.585Z] [BOT] ✅ Created forum post: 🏢 Game Developer @ ORG_d75f5e50 in #💻・remote-usa
[2026-01-14T22:43:30.585Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T22:43:32.086Z] [BOT] 💾 Marked as posted: Game Developer @ ORG_d75f5e50 (instance #1)
[2026-01-14T22:43:32.087Z] [BOT] 💾 BEFORE ARCHIVING: 1480 jobs in database
[2026-01-14T22:43:32.088Z] [BOT] ✅ No jobs to archive (all 1480 jobs within 7-day window)
[2026-01-14T22:43:32.099Z] [BOT] 💾 Saved posted_jobs.json: 1480 active jobs
[2026-01-14T22:43:32.099Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:32.100Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer" @ ORG_6bda74c9 Health
[2026-01-14T22:43:32.100Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:43:32.499Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
[2026-01-14T22:43:32.499Z] [BOT] ✅ Industry: Associate Software Development Engineer @ ORG_6bda74c9 Health
[2026-01-14T22:43:34.398Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer @ ORG_6bda74c9 Health in #🤠・austin
[2026-01-14T22:43:34.398Z] [BOT] ✅ Location: 🤠・austin
[2026-01-14T22:43:35.899Z] [BOT] 💾 Marked as posted: Associate Software Development Engineer @ ORG_6bda74c9 Health (instance #1)
[2026-01-14T22:43:35.899Z] [BOT] 💾 BEFORE ARCHIVING: 1481 jobs in database
[2026-01-14T22:43:35.900Z] [BOT] ✅ No jobs to archive (all 1481 jobs within 7-day window)
[2026-01-14T22:43:35.911Z] [BOT] 💾 Saved posted_jobs.json: 1481 active jobs
[2026-01-14T22:43:35.911Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:35.911Z] [BOT] 📍 [ROUTING] "Software Engineer, Distributed Systems" @ figma
[2026-01-14T22:43:35.911Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:43:36.198Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Distributed Systems @ figma in #💻・tech-jobs
  ✅ Industry: Software Engineer, Distributed Systems @ figma
[2026-01-14T22:43:37.994Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Distributed Systems @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:43:39.496Z] [BOT] 💾 Marked as posted: Software Engineer, Distributed Systems @ figma (instance #1)
[2026-01-14T22:43:39.496Z] [BOT] 💾 BEFORE ARCHIVING: 1482 jobs in database
[2026-01-14T22:43:39.497Z] [BOT] ✅ No jobs to archive (all 1482 jobs within 7-day window)
[2026-01-14T22:43:39.506Z] [BOT] 💾 Saved posted_jobs.json: 1482 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:39.506Z] [BOT] 📍 [ROUTING] "Configuration and Data Management Specialist - Configuration and Data Management Specialist" @ ORG_bf9a1fe7
[2026-01-14T22:43:39.507Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:43:39.894Z] [BOT] ✅ Created forum post: 🏢 Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_95d64cac in #💻・tech-jobs
  ✅ Industry: Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_bf9a1fe7
[2026-01-14T22:43:41.709Z] [BOT] ✅ Created forum post: 🏢 Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_95d64cac in #🤠・austin
[2026-01-14T22:43:41.709Z] [BOT] ✅ Location: 🤠・austin
[2026-01-14T22:43:43.210Z] [BOT] 💾 Marked as posted: Configuration and Data Management Specialist - Configuration and Data Management Specialist @ ORG_bf9a1fe7 (instance #1)
[2026-01-14T22:43:43.210Z] [BOT] 💾 BEFORE ARCHIVING: 1483 jobs in database
[2026-01-14T22:43:43.211Z] [BOT] ✅ No jobs to archive (all 1483 jobs within 7-day window)
[2026-01-14T22:43:43.221Z] [BOT] 💾 Saved posted_jobs.json: 1483 active jobs
[2026-01-14T22:43:43.221Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:43.221Z] [BOT] 📍 [ROUTING] "Full Stack Software Engineer - Constellation Tools - Starlink" @ ORG_afd623b1
[2026-01-14T22:43:43.221Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:43:43.502Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Constellation Tools - Starlink @ ORG_afd623b1 in #💻・tech-jobs
  ✅ Industry: Full Stack Software Engineer - Constellation Tools - Starlink @ ORG_afd623b1
[2026-01-14T22:43:45.238Z] [BOT] ✅ Created forum post: 🚀 Full Stack Software Engineer - Constellation Tools - Starlink @ ORG_afd623b1 in #🖥️・redmond
[2026-01-14T22:43:45.238Z] [BOT] ✅ Location: 🖥️・redmond
[2026-01-14T22:43:46.739Z] [BOT] 💾 Marked as posted: Full Stack Software Engineer - Constellation Tools - Starlink @ ORG_afd623b1 (instance #1)
[2026-01-14T22:43:46.740Z] [BOT] 💾 BEFORE ARCHIVING: 1484 jobs in database
[2026-01-14T22:43:46.741Z] [BOT] ✅ No jobs to archive (all 1484 jobs within 7-day window)
[2026-01-14T22:43:46.750Z] [BOT] 💾 Saved posted_jobs.json: 1484 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:49.751Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-14T22:43:49.752Z] [BOT] 📍 [ROUTING] "Manager, Field Marketing" @ figma
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T22:43:50.225Z] [BOT] ✅ Created forum post: 🏢 Manager, Field Marketing @ figma in #💲・sales-jobs
  ✅ Industry: Manager, Field Marketing @ figma
[2026-01-14T22:43:52.166Z] [BOT] ✅ Created forum post: 🏢 Manager, Field Marketing @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T22:43:53.668Z] [BOT] 💾 Marked as posted: Manager, Field Marketing @ figma (instance #1)
[2026-01-14T22:43:53.668Z] [BOT] 💾 BEFORE ARCHIVING: 1485 jobs in database
[2026-01-14T22:43:53.669Z] [BOT] ✅ No jobs to archive (all 1485 jobs within 7-day window)
[2026-01-14T22:43:53.681Z] [BOT] 💾 Saved posted_jobs.json: 1485 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:43:56.682Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T22:43:56.682Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_9a42d40a Innovation (i3)
[2026-01-14T22:43:56.683Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T22:43:56.966Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9a42d40a Innovation (i3) in #📈・JID_fb739488
[2026-01-14T22:43:56.966Z] [BOT] ✅ Industry: Data Analyst @ ORG_9a42d40a Innovation (i3)
[2026-01-14T22:43:58.725Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_9a42d40a Innovation (i3) in #💻・remote-usa
[2026-01-14T22:43:58.725Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T22:44:00.226Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_9a42d40a Innovation (i3) (instance #1)
[2026-01-14T22:44:00.227Z] [BOT] 💾 BEFORE ARCHIVING: 1486 jobs in database
[2026-01-14T22:44:00.227Z] [BOT] ✅ No jobs to archive (all 1486 jobs within 7-day window)
[2026-01-14T22:44:00.239Z] [BOT] 💾 Saved posted_jobs.json: 1486 active jobs
[2026-01-14T22:44:00.240Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:44:03.239Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T22:44:03.240Z] [BOT] ⏭️  Skipping duplicate: JID_33df5a48 (posted within 7 days)
⏭️  Skipping duplicate: JID_1cddb216 (posted within 7 days)
⏭️  Skipping duplicate: JID_bb403d2b (posted within 7 days)
[2026-01-14T22:44:03.240Z] [BOT] ⏭️  Skipping duplicate: JID_78990e76 (posted within 7 days)
[2026-01-14T22:44:03.240Z] [BOT] ⏭️  Skipping duplicate: JID_b2951129-cvs_health_careers-JID_2e1f2451-engineer_r0745817-1 (posted within 7 days)
[2026-01-14T22:44:03.241Z] [BOT] ⏭️  Skipping duplicate: JID_3a85e31d (posted within 7 days)
[2026-01-14T22:44:03.241Z] [BOT] ⏭️  Skipping duplicate: JID_44a4fe5f (posted within 7 days)
[2026-01-14T22:44:03.241Z] [BOT] ⏭️  Skipping duplicate: JID_76485c31 (posted within 7 days)
[2026-01-14T22:44:03.241Z] [BOT] ⏭️  Skipping duplicate: JID_f3a4d234 (posted within 7 days)
[2026-01-14T22:44:03.241Z] [BOT] ⏭️  Skipping duplicate: JID_8d68bc9b (posted within 7 days)
[2026-01-14T22:44:03.357Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[2026-01-14T22:44:03.537Z] [BOT] ✅ Saved pending queue: 2731 total (2711 pending, 10 enriched, 10 posted)
[2026-01-14T22:44:03.537Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T22:44:03.591Z] [BOT] 📂 Loaded 3615 existing routing entries
[2026-01-14T22:44:03.652Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3625
   Timestamp: 2026-01-14T22:44:03.636Z
[2026-01-14T22:44:03.652Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T22:44:03.653Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T22:44:03.653Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
[2026-01-14T22:44:03.653Z] [BOT] Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
     3. #🤖・ai-jobs: 3 posts
[2026-01-14T22:44:03.653Z] [BOT] 4. #💻・remote-usa: 2 posts
[2026-01-14T22:44:03.653Z] [BOT] 5. #🤠・austin: 2 posts
[2026-01-14T22:44:03.653Z] [BOT] [STATS] Channel stats saved
[2026-01-14T22:44:05.678Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2935) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*