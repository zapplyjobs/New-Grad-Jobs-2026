# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T21:49:12.981Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T21:48:31.288Z] ========================================
[2025-12-18T21:48:31.290Z] Discord Bot Execution Log
[2025-12-18T21:48:31.290Z] Environment: GitHub Actions
[2025-12-18T21:48:31.290Z] Node Version: v20.19.6
[2025-12-18T21:48:31.290Z] ========================================
[2025-12-18T21:48:31.290Z] Environment Variables Check:
[2025-12-18T21:48:31.290Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T21:48:31.290Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.290Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T21:48:31.291Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T21:48:31.291Z] 
Multi-Channel Configuration:
[2025-12-18T21:48:31.291Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T21:48:31.291Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T21:48:31.291Z] 
Data Files Check:
[2025-12-18T21:48:31.292Z] .github/data/new_jobs.json: ✅ Exists (10 items, 41950 bytes)
[2025-12-18T21:48:31.295Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 347991 bytes)
[2025-12-18T21:48:31.295Z] 
========================================
[2025-12-18T21:48:31.295Z] Starting Enhanced Discord Bot...
[2025-12-18T21:48:31.295Z] ========================================
[2025-12-18T21:48:31.818Z] [BOT] ✅ Loaded V2 database: 575 jobs
[2025-12-18T21:48:32.374Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T21:48:32.375Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T21:48:32.375Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T21:48:32.375Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T21:48:32.426Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T21:48:32.478Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T21:48:32.480Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T21:48:32.480Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T21:48:32.481Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T21:48:32.481Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-18T21:48:32.482Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer - Backend @ OpenAI: sf, seattle
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T21:48:32.484Z] [BOT] 📌 Posting 5 jobs to #📈・JID_fb739488
[2025-12-18T21:48:32.485Z] [BOT] 📍 [ROUTING] "Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
[2025-12-18T21:48:32.485Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T21:48:32.485Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T21:48:32.502Z] [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T21:48:32.938Z] [BOT] ✅ Created forum post: 🏢 Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b in #📈・JID_fb739488
[2025-12-18T21:48:32.938Z] [BOT] ✅ Industry: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b
[2025-12-18T21:48:34.440Z] [BOT] 💾 Marked as posted: Information Systems – Recent Grad/Full Time - IT - Cyber Engineer & Data Science @ ORG_7a23266b (instance #1)
[2025-12-18T21:48:34.440Z] [BOT] 💾 BEFORE ARCHIVING: 576 jobs in database
[2025-12-18T21:48:34.441Z] [BOT] ✅ No jobs to archive (all 576 jobs within 7-day window)
[2025-12-18T21:48:34.450Z] [BOT] 💾 Saved posted_jobs.json: 576 active jobs
[2025-12-18T21:48:34.450Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:48:34.451Z] [BOT] 📍 [ROUTING] "Information Systems - IT - Cyber Engineer & Data Science" @ ORG_7a23266b
[2025-12-18T21:48:34.451Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T21:48:34.656Z] [BOT] ✅ Created forum post: 🏢 Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b in #📈・JID_fb739488
[2025-12-18T21:48:34.656Z] [BOT] ✅ Industry: Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b
[2025-12-18T21:48:36.155Z] [BOT] 💾 Marked as posted: Information Systems - IT - Cyber Engineer & Data Science @ ORG_7a23266b (instance #1)
[2025-12-18T21:48:36.156Z] [BOT] 💾 BEFORE ARCHIVING: 577 jobs in database
[2025-12-18T21:48:36.156Z] [BOT] ✅ No jobs to archive (all 577 jobs within 7-day window)
[2025-12-18T21:48:36.161Z] [BOT] 💾 Saved posted_jobs.json: 577 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:48:36.162Z] [BOT] 📍 [ROUTING] "Oliver Wyman-Vector-Data Analyst" @ ORG_9c342342
[2025-12-18T21:48:36.162Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T21:48:36.162Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T21:48:36.430Z] [BOT] ✅ Created forum post: 🏢 Oliver Wyman-Vector-Data Analyst @ ORG_9c342342 in #📈・JID_fb739488
[2025-12-18T21:48:36.431Z] [BOT] ✅ Industry: Oliver Wyman-Vector-Data Analyst @ ORG_9c342342
[2025-12-18T21:48:38.460Z] [BOT] ✅ Created forum post: 🏢 Oliver Wyman-Vector-Data Analyst @ ORG_9c342342 in #💻・remote-usa
[2025-12-18T21:48:38.460Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T21:48:39.962Z] [BOT] 💾 Marked as posted: Oliver Wyman-Vector-Data Analyst @ ORG_9c342342 (instance #1)
💾 BEFORE ARCHIVING: 578 jobs in database
✅ No jobs to archive (all 578 jobs within 7-day window)
[2025-12-18T21:48:39.967Z] [BOT] 💾 Saved posted_jobs.json: 578 active jobs
[2025-12-18T21:48:39.967Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:48:39.968Z] [BOT] 📍 [ROUTING] "Associate Business Applications Engineer" @ ORG_49005fd1
[2025-12-18T21:48:39.968Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T21:48:40.274Z] [BOT] ✅ Created forum post: 🏢 Associate Business Applications Engineer @ ORG_49005fd1 in #📈・JID_fb739488
  ✅ Industry: Associate Business Applications Engineer @ ORG_49005fd1
[2025-12-18T21:48:41.991Z] [BOT] ✅ Created forum post: 🏢 Associate Business Applications Engineer @ ORG_49005fd1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:48:43.493Z] [BOT] 💾 Marked as posted: Associate Business Applications Engineer @ ORG_49005fd1 (instance #1)
[2025-12-18T21:48:43.493Z] [BOT] 💾 BEFORE ARCHIVING: 579 jobs in database
[2025-12-18T21:48:43.493Z] [BOT] ✅ No jobs to archive (all 579 jobs within 7-day window)
[2025-12-18T21:48:43.499Z] [BOT] 💾 Saved posted_jobs.json: 579 active jobs
[2025-12-18T21:48:43.499Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:48:43.501Z] [BOT] 📍 [ROUTING] "Internal Technical Consultant" @ ORG_49005fd1
   Category: DATA-SCIENCE (matched: "data analytics")
[2025-12-18T21:48:43.501Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-18T21:48:43.748Z] [BOT] ✅ Created forum post: 🏢 Internal Technical Consultant @ ORG_49005fd1 in #📈・JID_fb739488
  ✅ Industry: Internal Technical Consultant @ ORG_49005fd1
[2025-12-18T21:48:45.934Z] [BOT] ✅ Created forum post: 🏢 Internal Technical Consultant @ ORG_49005fd1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:48:47.434Z] [BOT] 💾 Marked as posted: Internal Technical Consultant @ ORG_49005fd1 (instance #1)
[2025-12-18T21:48:47.435Z] [BOT] 💾 BEFORE ARCHIVING: 580 jobs in database
[2025-12-18T21:48:47.435Z] [BOT] ✅ No jobs to archive (all 580 jobs within 7-day window)
[2025-12-18T21:48:47.440Z] [BOT] 💾 Saved posted_jobs.json: 580 active jobs
[2025-12-18T21:48:47.440Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:48:50.441Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-18T21:48:50.442Z] [BOT] 📍 [ROUTING] "Software Engineer - Starshield" @ ORG_afd623b1
[2025-12-18T21:48:50.442Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:48:50.647Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starshield @ ORG_afd623b1 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Starshield @ ORG_afd623b1
[2025-12-18T21:48:52.446Z] [BOT] ✅ Created forum post: 🚀 Software Engineer - Starshield @ ORG_afd623b1 in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-18T21:48:53.947Z] [BOT] 💾 Marked as posted: Software Engineer - Starshield @ ORG_afd623b1 (instance #1)
[2025-12-18T21:48:53.947Z] [BOT] 💾 BEFORE ARCHIVING: 581 jobs in database
[2025-12-18T21:48:53.948Z] [BOT] ✅ No jobs to archive (all 581 jobs within 7-day window)
[2025-12-18T21:48:53.954Z] [BOT] 💾 Saved posted_jobs.json: 581 active jobs
[2025-12-18T21:48:53.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:48:53.954Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_989b47bc
[2025-12-18T21:48:53.954Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T21:48:54.253Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_989b47bc in #🤖・ai-jobs
  ✅ Industry: Data Scientist 1 @ ORG_989b47bc
[2025-12-18T21:48:56.016Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_989b47bc in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:48:57.517Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_989b47bc (instance #1)
[2025-12-18T21:48:57.517Z] [BOT] 💾 BEFORE ARCHIVING: 582 jobs in database
[2025-12-18T21:48:57.518Z] [BOT] ✅ No jobs to archive (all 582 jobs within 7-day window)
[2025-12-18T21:48:57.523Z] [BOT] 💾 Saved posted_jobs.json: 582 active jobs
[2025-12-18T21:48:57.524Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:48:57.524Z] [BOT] 📍 [ROUTING] "Software Engineer - Backend" @ ORG_8b7d1a31
   Category: AI (matched: "artificial intelligence")
[2025-12-18T21:48:57.524Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:48:58.425Z] [BOT] ✅ Created forum post: 🤖 Software Engineer - Backend @ ORG_8b7d1a31 in #🤖・ai-jobs
  ✅ Industry: Software Engineer - Backend @ ORG_8b7d1a31
[2025-12-18T21:49:00.301Z] [BOT] ✅ Created forum post: 🤖 Software Engineer - Backend @ ORG_8b7d1a31 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T21:49:01.802Z] [BOT] 💾 Marked as posted: Software Engineer - Backend @ ORG_8b7d1a31 (instance #1)
[2025-12-18T21:49:01.803Z] [BOT] 💾 BEFORE ARCHIVING: 583 jobs in database
[2025-12-18T21:49:01.803Z] [BOT] ✅ No jobs to archive (all 583 jobs within 7-day window)
[2025-12-18T21:49:01.809Z] [BOT] 💾 Saved posted_jobs.json: 583 active jobs
[2025-12-18T21:49:01.810Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:49:01.810Z] [BOT] 💾 Marked as posted: Software Engineer - Android @ ORG_8b7d1a31 (instance #1)
[2025-12-18T21:49:01.810Z] [BOT] 💾 BEFORE ARCHIVING: 584 jobs in database
[2025-12-18T21:49:01.810Z] [BOT] ✅ No jobs to archive (all 584 jobs within 7-day window)
[2025-12-18T21:49:01.816Z] [BOT] 💾 Saved posted_jobs.json: 584 active jobs
[2025-12-18T21:49:01.816Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:49:04.816Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-18T21:49:04.816Z] [BOT] 📍 [ROUTING] "Junior Software Developer - Java/Scala" @ mthree
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:49:05.589Z] [BOT] ✅ Created forum post: 🏢 Junior Software Developer - Java/Scala @ mthree in #💻・tech-jobs
  ✅ Industry: Junior Software Developer - Java/Scala @ mthree
[2025-12-18T21:49:07.091Z] [BOT] 💾 Marked as posted: Junior Software Developer - Java/Scala @ mthree (instance #1)
[2025-12-18T21:49:07.091Z] [BOT] 💾 BEFORE ARCHIVING: 585 jobs in database
[2025-12-18T21:49:07.091Z] [BOT] ✅ No jobs to archive (all 585 jobs within 7-day window)
[2025-12-18T21:49:07.097Z] [BOT] 💾 Saved posted_jobs.json: 585 active jobs
[2025-12-18T21:49:07.098Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T21:49:10.098Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-18T21:49:10.098Z] [BOT] ⏭️  Skipping duplicate: JID_b7bad0bf (posted within 7 days)
[2025-12-18T21:49:10.098Z] [BOT] ⏭️  Skipping duplicate: JID_8760cf7f (posted within 7 days)
[2025-12-18T21:49:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_1d5192c6 (posted within 7 days)
[2025-12-18T21:49:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_60a08039 (posted within 7 days)
[2025-12-18T21:49:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_ce28c345 (posted within 7 days)
⏭️  Skipping duplicate: JID_2b742579 (posted within 7 days)
[2025-12-18T21:49:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_f1e3e7c3-analyst_r_325198 (posted within 7 days)
[2025-12-18T21:49:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_597c6c7c (posted within 7 days)
[2025-12-18T21:49:10.099Z] [BOT] ⏭️  Skipping duplicate: JID_a31f7865 (posted within 7 days)
[2025-12-18T21:49:10.102Z] [BOT] ✅ Loaded pending queue: 397 total (377 pending, 20 enriched, 0 posted)
[2025-12-18T21:49:10.108Z] [BOT] ✅ Saved pending queue: 397 total (377 pending, 11 enriched, 9 posted)
[2025-12-18T21:49:10.108Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T21:49:10.148Z] [BOT] 📂 Loaded 557 existing routing entries
[2025-12-18T21:49:10.190Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 566
   Timestamp: 2025-12-18T21:49:10.187Z
[2025-12-18T21:49:10.191Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T21:49:10.191Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2025-12-18T21:49:10.191Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2025-12-18T21:49:10.191Z] [BOT] Total posts: 15
   Channels used: 6
   Top channels:
     1. #📈・JID_fb739488: 5 posts
[2025-12-18T21:49:10.192Z] [BOT] 2. #💻・remote-usa: 4 posts
     3. #🤖・ai-jobs: 3 posts
     4. #🦢・los-angeles: 1 posts
     5. #🌉・san-francisco: 1 posts
[2025-12-18T21:49:10.192Z] [BOT] [STATS] Channel stats saved
[2025-12-18T21:49:12.205Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*