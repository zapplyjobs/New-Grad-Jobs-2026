# Discord Bot Execution Audit
**Timestamp:** 2025-12-14T18:29:27.024Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-14T18:28:36.552Z] ========================================
[2025-12-14T18:28:36.554Z] Discord Bot Execution Log
[2025-12-14T18:28:36.554Z] Environment: GitHub Actions
[2025-12-14T18:28:36.554Z] Node Version: v20.19.6
[2025-12-14T18:28:36.554Z] ========================================
[2025-12-14T18:28:36.554Z] Environment Variables Check:
[2025-12-14T18:28:36.554Z] DISCORD_TOKEN: ✅ Set
[2025-12-14T18:28:36.554Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.554Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-14T18:28:36.554Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-14T18:28:36.554Z] 
Multi-Channel Configuration:
[2025-12-14T18:28:36.555Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-14T18:28:36.555Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-14T18:28:36.555Z] 
Data Files Check:
[2025-12-14T18:28:36.556Z] .github/data/new_jobs.json: ✅ Exists (10 items, 129002 bytes)
[2025-12-14T18:28:36.557Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 68536 bytes)
[2025-12-14T18:28:36.557Z] 
========================================
[2025-12-14T18:28:36.557Z] Starting Enhanced Discord Bot...
[2025-12-14T18:28:36.557Z] ========================================
[2025-12-14T18:28:37.124Z] [BOT] ✅ Loaded V2 database: 106 jobs
[2025-12-14T18:28:38.053Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-14T18:28:38.054Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-14T18:28:38.054Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-14T18:28:38.055Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-14T18:28:38.156Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 116
[2025-12-14T18:28:38.157Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-14T18:28:38.157Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-14T18:28:38.158Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-14T18:28:38.158Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
[2025-12-14T18:28:38.158Z] [BOT] - Graduate Software Engineer - 2026 Start - Chicago @ Optiver: chicago, austin
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-14T18:28:38.162Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-14T18:28:38.163Z] [BOT] 📍 [ROUTING] "Software Dev Engineer 1" @ ORG_49d2dc07
   Category: TECH (matched: "software")
[2025-12-14T18:28:38.163Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:28:38.167Z] [BOT ERROR] (node:3592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-14T18:28:38.535Z] [BOT] ✅ Created forum post: 📦 Software Dev Engineer 1 @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Software Dev Engineer 1 @ ORG_49d2dc07
[2025-12-14T18:28:40.229Z] [BOT] ✅ Created forum post: 📦 Software Dev Engineer 1 @ ORG_49d2dc07 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2025-12-14T18:28:41.731Z] [BOT] 💾 Marked as posted: Software Dev Engineer 1 @ ORG_49d2dc07 (instance #1)
[2025-12-14T18:28:41.731Z] [BOT] 💾 BEFORE ARCHIVING: 107 jobs in database
[2025-12-14T18:28:41.731Z] [BOT] ✅ No jobs to archive (all 107 jobs within 7-day window)
[2025-12-14T18:28:41.740Z] [BOT] 💾 Saved posted_jobs.json: 107 active jobs
[2025-12-14T18:28:41.740Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Software Developer Engineer 1" @ ORG_db95f8b8
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:28:41.965Z] [BOT] ✅ Created forum post: 🏢 Software Developer Engineer 1 @ ORG_db95f8b8 in #💻・tech-jobs
[2025-12-14T18:28:41.966Z] [BOT] ✅ Industry: Software Developer Engineer 1 @ ORG_db95f8b8
[2025-12-14T18:28:43.467Z] [BOT] 💾 Marked as posted: Software Developer Engineer 1 @ ORG_db95f8b8 (instance #1)
[2025-12-14T18:28:43.467Z] [BOT] 💾 BEFORE ARCHIVING: 108 jobs in database
✅ No jobs to archive (all 108 jobs within 7-day window)
[2025-12-14T18:28:43.471Z] [BOT] 💾 Saved posted_jobs.json: 108 active jobs
[2025-12-14T18:28:43.471Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Graduate Software Engineer - 2026 Start - Chicago" @ ORG_3507fe20
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:28:43.725Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - 2026 Start - Chicago @ ORG_3507fe20 in #💻・tech-jobs
  ✅ Industry: Graduate Software Engineer - 2026 Start - Chicago @ ORG_3507fe20
[2025-12-14T18:28:45.548Z] [BOT] ✅ Created forum post: 🏢 Graduate Software Engineer - 2026 Start - Chicago @ ORG_3507fe20 in #🌆・chicago
[2025-12-14T18:28:45.548Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-14T18:28:47.049Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - 2026 Start - Chicago @ ORG_3507fe20 (instance #1)
[2025-12-14T18:28:47.049Z] [BOT] 💾 BEFORE ARCHIVING: 109 jobs in database
[2025-12-14T18:28:47.050Z] [BOT] ✅ No jobs to archive (all 109 jobs within 7-day window)
[2025-12-14T18:28:47.051Z] [BOT] 💾 Saved posted_jobs.json: 109 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:28:47.052Z] [BOT] 💾 Marked as posted: Graduate Software Engineer - 2026 Start - Austin @ ORG_3507fe20 (instance #1)
[2025-12-14T18:28:47.052Z] [BOT] 💾 BEFORE ARCHIVING: 110 jobs in database
[2025-12-14T18:28:47.052Z] [BOT] ✅ No jobs to archive (all 110 jobs within 7-day window)
[2025-12-14T18:28:47.054Z] [BOT] 💾 Saved posted_jobs.json: 110 active jobs
[2025-12-14T18:28:47.054Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Associate Software Developer" @ ORG_434be781
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-14T18:28:47.370Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_434be781 in #💻・tech-jobs
  ✅ Industry: Associate Software Developer @ ORG_434be781
[2025-12-14T18:28:49.451Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_434be781 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-14T18:28:50.952Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_434be781 (instance #1)
[2025-12-14T18:28:50.952Z] [BOT] 💾 BEFORE ARCHIVING: 111 jobs in database
✅ No jobs to archive (all 111 jobs within 7-day window)
[2025-12-14T18:28:50.954Z] [BOT] 💾 Saved posted_jobs.json: 111 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:28:53.955Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-14T18:28:53.955Z] [BOT] 📍 [ROUTING] "Data Engineer 1 - Seattle/WA" @ ORG_2d67c3be
   Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-14T18:28:54.171Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Seattle/WA @ ORG_2d67c3be in #📈・JID_fb739488
  ✅ Industry: Data Engineer 1 - Seattle/WA @ ORG_2d67c3be
[2025-12-14T18:28:55.958Z] [BOT] ✅ Created forum post: 🏢 Data Engineer 1 - Seattle/WA @ ORG_2d67c3be in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-14T18:28:57.459Z] [BOT] 💾 Marked as posted: Data Engineer 1 - Seattle/WA @ ORG_2d67c3be (instance #1)
[2025-12-14T18:28:57.459Z] [BOT] 💾 BEFORE ARCHIVING: 112 jobs in database
✅ No jobs to archive (all 112 jobs within 7-day window)
[2025-12-14T18:28:57.461Z] [BOT] 💾 Saved posted_jobs.json: 112 active jobs
[2025-12-14T18:28:57.461Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Data Analyst" @ ORG_692aa04a
[2025-12-14T18:28:57.461Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-14T18:28:57.687Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_692aa04a in #📈・JID_fb739488
[2025-12-14T18:28:57.687Z] [BOT] ✅ Industry: Data Analyst @ ORG_692aa04a
[2025-12-14T18:28:59.391Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_692aa04a in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-14T18:29:00.891Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_692aa04a (instance #1)
[2025-12-14T18:29:00.891Z] [BOT] 💾 BEFORE ARCHIVING: 113 jobs in database
✅ No jobs to archive (all 113 jobs within 7-day window)
[2025-12-14T18:29:00.893Z] [BOT] 💾 Saved posted_jobs.json: 113 active jobs
[2025-12-14T18:29:00.893Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-14T18:29:03.893Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2025-12-14T18:29:03.894Z] [BOT] 📍 [ROUTING] "Applications Programmer" @ ORG_5132f94c
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-14T18:29:04.256Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer @ ORG_5132f94c in #🤖・ai-jobs
[2025-12-14T18:29:04.256Z] [BOT] ✅ Industry: Applications Programmer @ ORG_5132f94c
[2025-12-14T18:29:05.994Z] [BOT] ✅ Created forum post: 🏢 Applications Programmer @ ORG_5132f94c in #🌆・chicago
[2025-12-14T18:29:05.994Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-14T18:29:07.495Z] [BOT] 💾 Marked as posted: Applications Programmer @ ORG_5132f94c (instance #1)
[2025-12-14T18:29:07.495Z] [BOT] 💾 BEFORE ARCHIVING: 114 jobs in database
[2025-12-14T18:29:07.495Z] [BOT] ✅ No jobs to archive (all 114 jobs within 7-day window)
[2025-12-14T18:29:07.497Z] [BOT] 💾 Saved posted_jobs.json: 114 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:29:10.498Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-12-14T18:29:10.498Z] [BOT] 📍 [ROUTING] "Associate Analyst - Systems - Rops" @ ORG_03419b97
   Category: SALES (matched: "revenue")
   Channel: 💲・sales-jobs (1391...3632)
[2025-12-14T18:29:10.959Z] [BOT] ✅ Created forum post: 🏢 Associate Analyst - Systems - Rops @ ORG_03419b97 in #💲・sales-jobs
[2025-12-14T18:29:10.959Z] [BOT] ✅ Industry: Associate Analyst - Systems - Rops @ ORG_03419b97
[2025-12-14T18:29:12.705Z] [BOT] ✅ Created forum post: 🏢 Associate Analyst - Systems - Rops @ ORG_03419b97 in #🌧️・seattle
[2025-12-14T18:29:12.705Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-14T18:29:14.206Z] [BOT] 💾 Marked as posted: Associate Analyst - Systems - Rops @ ORG_03419b97 (instance #1)
[2025-12-14T18:29:14.206Z] [BOT] 💾 BEFORE ARCHIVING: 115 jobs in database
✅ No jobs to archive (all 115 jobs within 7-day window)
[2025-12-14T18:29:14.209Z] [BOT] 💾 Saved posted_jobs.json: 115 active jobs
[2025-12-14T18:29:14.209Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-14T18:29:17.210Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-14T18:29:17.210Z] [BOT] 📍 [ROUTING] "Research Assistant" @ ORG_15a5b314 Mellon University
   Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-14T18:29:17.466Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_15a5b314 Mellon University in #📣・marketing-jobs
[2025-12-14T18:29:17.467Z] [BOT] ✅ Industry: Research Assistant @ ORG_15a5b314 Mellon University
[2025-12-14T18:29:19.211Z] [BOT] ✅ Created forum post: 🏢 Research Assistant @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-14T18:29:20.712Z] [BOT] 💾 Marked as posted: Research Assistant @ ORG_15a5b314 Mellon University (instance #1)
[2025-12-14T18:29:20.712Z] [BOT] 💾 BEFORE ARCHIVING: 116 jobs in database
✅ No jobs to archive (all 116 jobs within 7-day window)
[2025-12-14T18:29:20.714Z] [BOT] 💾 Saved posted_jobs.json: 116 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-14T18:29:23.715Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-14T18:29:23.715Z] [BOT] ⏭️  Skipping duplicate: JID_dc9bfaf4 (posted within 7 days)
[2025-12-14T18:29:23.715Z] [BOT] ⏭️  Skipping duplicate: JID_ae9a87e5-nordstrom_careers-JID_591622fc-_r-805047 (posted within 7 days)
⏭️  Skipping duplicate: JID_f18f7721-analyst_r105711 (posted within 7 days)
[2025-12-14T18:29:23.715Z] [BOT] ⏭️  Skipping duplicate: JID_b2ef42ea-programmer_r59946 (posted within 7 days)
⏭️  Skipping duplicate: JID_646395be-i_jr0026780-1 (posted within 7 days)
[2025-12-14T18:29:23.715Z] [BOT] ⏭️  Skipping duplicate: JID_e2bf8ab8-dkc_external-JID_4b543d34-_r0432559 (posted within 7 days)
⏭️  Skipping duplicate: JID_3899060e (posted within 7 days)
[2025-12-14T18:29:23.715Z] [BOT] ⏭️  Skipping duplicate: JID_8b8f85c4-engineering_2023983 (posted within 7 days)
[2025-12-14T18:29:23.715Z] [BOT] ⏭️  Skipping duplicate: JID_0d0abc1e-developer_r175450-1 (posted within 7 days)
[2025-12-14T18:29:23.718Z] [BOT] ✅ Loaded pending queue: 28 total (8 pending, 20 enriched, 0 posted)
[2025-12-14T18:29:23.721Z] [BOT] ✅ Saved pending queue: 28 total (8 pending, 11 enriched, 9 posted)
[2025-12-14T18:29:23.721Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-14T18:29:23.759Z] [BOT] 📂 Loaded 101 existing routing entries
[2025-12-14T18:29:23.796Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
[2025-12-14T18:29:23.796Z] [BOT] Total entries: 110
   Timestamp: 2025-12-14T18:29:23.795Z
[2025-12-14T18:29:25.807Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3592) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*