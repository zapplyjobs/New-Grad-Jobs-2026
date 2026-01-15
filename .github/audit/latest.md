# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T04:49:15.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T04:48:21.168Z] ========================================
[2026-01-15T04:48:21.170Z] Discord Bot Execution Log
[2026-01-15T04:48:21.170Z] Environment: GitHub Actions
[2026-01-15T04:48:21.170Z] Node Version: v20.19.6
[2026-01-15T04:48:21.170Z] ========================================
[2026-01-15T04:48:21.170Z] Environment Variables Check:
[2026-01-15T04:48:21.170Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T04:48:21.170Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.170Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T04:48:21.171Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T04:48:21.171Z] 
Multi-Channel Configuration:
[2026-01-15T04:48:21.171Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T04:48:21.171Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T04:48:21.172Z] 
Data Files Check:
[2026-01-15T04:48:21.172Z] .github/data/new_jobs.json: ✅ Exists (10 items, 50865 bytes)
[2026-01-15T04:48:21.179Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 835856 bytes)
[2026-01-15T04:48:21.179Z] 
========================================
[2026-01-15T04:48:21.179Z] Starting Enhanced Discord Bot...
[2026-01-15T04:48:21.179Z] ========================================
[2026-01-15T04:48:21.691Z] [BOT] ✅ Loaded V2 database: 1576 jobs
[2026-01-15T04:48:22.446Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T04:48:22.446Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T04:48:22.446Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T04:48:22.575Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer – Entry Level at General Dynamics Mission Systems
[2026-01-15T04:48:22.578Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T04:48:22.579Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T04:48:22.579Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T04:48:22.580Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T04:48:22.580Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T04:48:22.586Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-15T04:48:22.588Z] [BOT] 📍 [ROUTING] "Software Engineer – Entry Level" @ ORG_c910d474 Dynamics Mission Systems
[2026-01-15T04:48:22.588Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:48:22.606Z] [BOT ERROR] (node:2759) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T04:48:22.906Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
  ✅ Industry: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2026-01-15T04:48:24.585Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-15T04:48:26.086Z] [BOT] 💾 Marked as posted: Software Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems (instance #1)
[2026-01-15T04:48:26.086Z] [BOT] 💾 BEFORE ARCHIVING: 1577 jobs in database
[2026-01-15T04:48:26.087Z] [BOT] ✅ No jobs to archive (all 1577 jobs within 7-day window)
[2026-01-15T04:48:26.102Z] [BOT] 💾 Saved posted_jobs.json: 1577 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:26.102Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - Fullstack - Trust and Safety" @ ORG_1bb6fcfb
[2026-01-15T04:48:26.102Z] [BOT] Category: TECH (matched: "software")
[2026-01-15T04:48:26.102Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:48:26.279Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Fullstack - Trust and Safety @ ORG_1bb6fcfb in #💻・tech-jobs
[2026-01-15T04:48:26.279Z] [BOT] ✅ Industry: Software Engineer Graduate - Fullstack - Trust and Safety @ ORG_1bb6fcfb
[2026-01-15T04:48:27.967Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - Fullstack - Trust and Safety @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T04:48:29.469Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - Fullstack - Trust and Safety @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 1578 jobs in database
[2026-01-15T04:48:29.470Z] [BOT] ✅ No jobs to archive (all 1578 jobs within 7-day window)
[2026-01-15T04:48:29.479Z] [BOT] 💾 Saved posted_jobs.json: 1578 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:29.480Z] [BOT] 📍 [ROUTING] "AI/ML Software Engineer" @ iTradeNetwork
   Category: TECH (matched: "software")
[2026-01-15T04:48:29.480Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:48:29.948Z] [BOT] ✅ Created forum post: 🏢 AI/ML Software Engineer @ iTradeNetwork in #💻・tech-jobs
  ✅ Industry: AI/ML Software Engineer @ iTradeNetwork
[2026-01-15T04:48:31.449Z] [BOT] 💾 Marked as posted: AI/ML Software Engineer @ iTradeNetwork (instance #1)
[2026-01-15T04:48:31.449Z] [BOT] 💾 BEFORE ARCHIVING: 1579 jobs in database
[2026-01-15T04:48:31.450Z] [BOT] ✅ No jobs to archive (all 1579 jobs within 7-day window)
[2026-01-15T04:48:31.462Z] [BOT] 💾 Saved posted_jobs.json: 1579 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:31.463Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_80ce3f5a Mann
[2026-01-15T04:48:31.463Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T04:48:31.638Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_80ce3f5a Mann in #💻・tech-jobs
[2026-01-15T04:48:31.638Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_80ce3f5a Mann
[2026-01-15T04:48:33.328Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_80ce3f5a Mann in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T04:48:34.830Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_80ce3f5a Mann (instance #1)
[2026-01-15T04:48:34.830Z] [BOT] 💾 BEFORE ARCHIVING: 1580 jobs in database
[2026-01-15T04:48:34.832Z] [BOT] ✅ No jobs to archive (all 1580 jobs within 7-day window)
[2026-01-15T04:48:34.843Z] [BOT] 💾 Saved posted_jobs.json: 1580 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:37.843Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-15T04:48:37.844Z] [BOT] 📍 [ROUTING] "Sales Pricing Analyst" @ ORG_9b9b6e44
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-15T04:48:38.083Z] [BOT] ✅ Created forum post: 🏢 Sales Pricing Analyst @ ORG_9b9b6e44 in #💲・sales-jobs
[2026-01-15T04:48:38.083Z] [BOT] ✅ Industry: Sales Pricing Analyst @ ORG_9b9b6e44
[2026-01-15T04:48:39.941Z] [BOT] ✅ Created forum post: 🏢 Sales Pricing Analyst @ ORG_9b9b6e44 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T04:48:41.442Z] [BOT] 💾 Marked as posted: Sales Pricing Analyst @ ORG_9b9b6e44 (instance #1)
[2026-01-15T04:48:41.442Z] [BOT] 💾 BEFORE ARCHIVING: 1581 jobs in database
[2026-01-15T04:48:41.443Z] [BOT] ✅ No jobs to archive (all 1581 jobs within 7-day window)
[2026-01-15T04:48:41.456Z] [BOT] 💾 Saved posted_jobs.json: 1581 active jobs
[2026-01-15T04:48:41.456Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:44.457Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-15T04:48:44.457Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_04ace811
[2026-01-15T04:48:44.457Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T04:48:44.767Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_04ace811 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_04ace811
[2026-01-15T04:48:46.446Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_04ace811 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-15T04:48:47.947Z] [BOT] 💾 Marked as posted: Technology - Application Development - Full Time Analyst @ ORG_04ace811 (instance #1)
[2026-01-15T04:48:47.947Z] [BOT] 💾 BEFORE ARCHIVING: 1582 jobs in database
[2026-01-15T04:48:47.948Z] [BOT] ✅ No jobs to archive (all 1582 jobs within 7-day window)
[2026-01-15T04:48:47.963Z] [BOT] 💾 Saved posted_jobs.json: 1582 active jobs
[2026-01-15T04:48:47.963Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:47.963Z] [BOT] 📍 [ROUTING] "Data and AI Analyst" @ ORG_6cd9e83c
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-15T04:48:48.174Z] [BOT] ✅ Created forum post: 🏢 Data and AI Analyst @ ORG_6cd9e83c in #🤖・ai-jobs
  ✅ Industry: Data and AI Analyst @ ORG_6cd9e83c
[2026-01-15T04:48:49.953Z] [BOT] ✅ Created forum post: 🏢 Data and AI Analyst @ ORG_6cd9e83c in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T04:48:51.455Z] [BOT] 💾 Marked as posted: Data and AI Analyst @ ORG_6cd9e83c (instance #1)
[2026-01-15T04:48:51.455Z] [BOT] 💾 BEFORE ARCHIVING: 1583 jobs in database
[2026-01-15T04:48:51.456Z] [BOT] ✅ No jobs to archive (all 1583 jobs within 7-day window)
[2026-01-15T04:48:51.467Z] [BOT] 💾 Saved posted_jobs.json: 1583 active jobs
[2026-01-15T04:48:51.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:54.467Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-15T04:48:54.468Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_0a4b5d49 Holdings
[2026-01-15T04:48:54.468Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T04:48:54.826Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_0a4b5d49 Holdings in #📈・JID_fb739488
[2026-01-15T04:48:54.826Z] [BOT] ✅ Industry: Data Analyst @ ORG_0a4b5d49 Holdings
[2026-01-15T04:48:56.660Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_0a4b5d49 Holdings in #💻・remote-usa
[2026-01-15T04:48:56.660Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-15T04:48:58.161Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_0a4b5d49 Holdings (instance #1)
[2026-01-15T04:48:58.161Z] [BOT] 💾 BEFORE ARCHIVING: 1584 jobs in database
[2026-01-15T04:48:58.162Z] [BOT] ✅ No jobs to archive (all 1584 jobs within 7-day window)
[2026-01-15T04:48:58.176Z] [BOT] 💾 Saved posted_jobs.json: 1584 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:48:58.176Z] [BOT] 📍 [ROUTING] "Business Intelligence Analyst" @ ORG_3aa5abc7 Games
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-15T04:48:58.176Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-15T04:48:58.503Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_3aa5abc7 Games in #📈・JID_fb739488
  ✅ Industry: Business Intelligence Analyst @ ORG_3aa5abc7 Games
[2026-01-15T04:49:00.219Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Analyst @ ORG_3aa5abc7 Games in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T04:49:01.720Z] [BOT] 💾 Marked as posted: Business Intelligence Analyst @ ORG_3aa5abc7 Games (instance #1)
[2026-01-15T04:49:01.721Z] [BOT] 💾 BEFORE ARCHIVING: 1585 jobs in database
[2026-01-15T04:49:01.722Z] [BOT] ✅ No jobs to archive (all 1585 jobs within 7-day window)
[2026-01-15T04:49:01.733Z] [BOT] 💾 Saved posted_jobs.json: 1585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:49:04.734Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2026-01-15T04:49:04.734Z] [BOT] 📍 [ROUTING] "Programming Analyst" @ ORG_9d38443e of Chicago
[2026-01-15T04:49:04.734Z] [BOT] Category: HEALTHCARE (matched: "health")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2026-01-15T04:49:05.296Z] [BOT] ✅ Created forum post: 🏢 Programming Analyst @ ORG_9d38443e of Chicago in #🩺・healthcare-jobs
  ✅ Industry: Programming Analyst @ ORG_9d38443e of Chicago
[2026-01-15T04:49:07.128Z] [BOT] ✅ Created forum post: 🏢 Programming Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
[2026-01-15T04:49:07.128Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T04:49:08.629Z] [BOT] 💾 Marked as posted: Programming Analyst @ ORG_9d38443e of Chicago (instance #1)
[2026-01-15T04:49:08.629Z] [BOT] 💾 BEFORE ARCHIVING: 1586 jobs in database
[2026-01-15T04:49:08.630Z] [BOT] ✅ No jobs to archive (all 1586 jobs within 7-day window)
[2026-01-15T04:49:08.642Z] [BOT] 💾 Saved posted_jobs.json: 1586 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T04:49:11.643Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T04:49:11.643Z] [BOT] ⏭️  Skipping duplicate: JID_5194b526 (posted within 7 days)
[2026-01-15T04:49:11.643Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_14caafd9 (posted within 7 days)
[2026-01-15T04:49:11.643Z] [BOT] ⏭️  Skipping duplicate: JID_992ef08f (posted within 7 days)
[2026-01-15T04:49:11.643Z] [BOT] ⏭️  Skipping duplicate: JID_2903cb24 (posted within 7 days)
[2026-01-15T04:49:11.644Z] [BOT] ⏭️  Skipping duplicate: JID_a2676543-2026_25920347 (posted within 7 days)
[2026-01-15T04:49:11.644Z] [BOT] ⏭️  Skipping duplicate: JID_7ef31bfa-marmon_careers-JID_22178c5e-analyst_jr0000039156 (posted within 7 days)
[2026-01-15T04:49:11.644Z] [BOT] ⏭️  Skipping duplicate: JID_03f84d9c (posted within 7 days)
[2026-01-15T04:49:11.644Z] [BOT] ⏭️  Skipping duplicate: JID_8b2ace45-analyst_r504112 (posted within 7 days)
[2026-01-15T04:49:11.644Z] [BOT] ⏭️  Skipping duplicate: JID_89f10598-analyst_jr31969 (posted within 7 days)
[2026-01-15T04:49:11.644Z] [BOT] ⏭️  Skipping duplicate: JID_2b888434 (posted within 7 days)
[2026-01-15T04:49:11.764Z] [BOT] ✅ Loaded pending queue: 2723 total (2703 pending, 20 enriched, 0 posted)
[2026-01-15T04:49:11.942Z] [BOT] ✅ Saved pending queue: 2723 total (2703 pending, 10 enriched, 10 posted)
[2026-01-15T04:49:11.942Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T04:49:11.997Z] [BOT] 📂 Loaded 3755 existing routing entries
[2026-01-15T04:49:12.058Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T04:49:12.059Z] [BOT] Total entries: 3765
   Timestamp: 2026-01-15T04:49:12.043Z
[2026-01-15T04:49:12.059Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T04:49:12.060Z] [BOT] Total attempts: 19
   Successful: 19
   Failed: 0
   Skipped: 0
[2026-01-15T04:49:12.060Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 19
   Channels used: 11
   Top channels:
     1. #💻・tech-jobs: 4 posts
     2. #💻・remote-usa: 3 posts
     3. #🤠・austin: 2 posts
     4. #🤖・ai-jobs: 2 posts
     5. #📈・JID_fb739488: 2 posts
[2026-01-15T04:49:12.060Z] [BOT] [STATS] Channel stats saved
[2026-01-15T04:49:14.086Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2759) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*