# Discord Bot Execution Audit
**Timestamp:** 2026-01-15T00:47:02.676Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-15T00:46:17.117Z] ========================================
[2026-01-15T00:46:17.119Z] Discord Bot Execution Log
[2026-01-15T00:46:17.119Z] Environment: GitHub Actions
[2026-01-15T00:46:17.119Z] Node Version: v20.19.6
[2026-01-15T00:46:17.119Z] ========================================
[2026-01-15T00:46:17.119Z] Environment Variables Check:
[2026-01-15T00:46:17.119Z] DISCORD_TOKEN: ✅ Set
[2026-01-15T00:46:17.119Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.119Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-15T00:46:17.120Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-15T00:46:17.120Z] 
Multi-Channel Configuration:
[2026-01-15T00:46:17.120Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-15T00:46:17.120Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-15T00:46:17.121Z] 
Data Files Check:
[2026-01-15T00:46:17.121Z] .github/data/new_jobs.json: ✅ Exists (10 items, 42090 bytes)
[2026-01-15T00:46:17.128Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 815277 bytes)
[2026-01-15T00:46:17.128Z] 
========================================
[2026-01-15T00:46:17.128Z] Starting Enhanced Discord Bot...
[2026-01-15T00:46:17.128Z] ========================================
[2026-01-15T00:46:17.675Z] [BOT] ✅ Loaded V2 database: 1535 jobs
[2026-01-15T00:46:18.254Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-15T00:46:18.255Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-15T00:46:18.255Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-15T00:46:18.369Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Early Career Software Engineer at Citizen Health
[2026-01-15T00:46:18.371Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-15T00:46:18.372Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-15T00:46:18.372Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-15T00:46:18.373Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-15T00:46:18.373Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-15T00:46:18.375Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-15T00:46:18.376Z] [BOT] 📍 [ROUTING] "Early Career Software Engineer" @ ORG_2b147ca6 Health
[2026-01-15T00:46:18.376Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:46:18.393Z] [BOT ERROR] (node:3015) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-15T00:46:18.627Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #💻・tech-jobs
  ✅ Industry: Early Career Software Engineer @ ORG_2b147ca6 Health
[2026-01-15T00:46:20.496Z] [BOT] ✅ Created forum post: 🏢 Early Career Software Engineer @ ORG_2b147ca6 Health in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:46:21.997Z] [BOT] 💾 Marked as posted: Early Career Software Engineer @ ORG_2b147ca6 Health (instance #1)
[2026-01-15T00:46:21.997Z] [BOT] 💾 BEFORE ARCHIVING: 1536 jobs in database
[2026-01-15T00:46:21.999Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-15T00:46:22.000Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-15T00:46:22.000Z] [BOT] ✅ Archiving complete: 9 archived, 1527 active
[2026-01-15T00:46:22.010Z] [BOT] 💾 Saved posted_jobs.json: 1527 active jobs
[2026-01-15T00:46:22.010Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:22.010Z] [BOT] 📍 [ROUTING] "Software Engineer" @ Q2
[2026-01-15T00:46:22.010Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:46:22.220Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #💻・tech-jobs
[2026-01-15T00:46:22.220Z] [BOT] ✅ Industry: Software Engineer @ Q2
[2026-01-15T00:46:24.024Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ Q2 in #🤠・austin
[2026-01-15T00:46:24.025Z] [BOT] ✅ Location: 🤠・austin
[2026-01-15T00:46:25.525Z] [BOT] 💾 Marked as posted: Software Engineer @ Q2 (instance #1)
[2026-01-15T00:46:25.525Z] [BOT] 💾 BEFORE ARCHIVING: 1528 jobs in database
[2026-01-15T00:46:25.526Z] [BOT] ✅ No jobs to archive (all 1528 jobs within 7-day window)
[2026-01-15T00:46:25.536Z] [BOT] 💾 Saved posted_jobs.json: 1528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:25.536Z] [BOT] 📍 [ROUTING] "Associate Software Engineer" @ ORG_a58a6490 Health
[2026-01-15T00:46:25.536Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:46:26.213Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_a58a6490 Health in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer @ ORG_a58a6490 Health
[2026-01-15T00:46:27.855Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer @ ORG_a58a6490 Health in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T00:46:29.357Z] [BOT] 💾 Marked as posted: Associate Software Engineer @ ORG_a58a6490 Health (instance #1)
[2026-01-15T00:46:29.357Z] [BOT] 💾 BEFORE ARCHIVING: 1529 jobs in database
[2026-01-15T00:46:29.359Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (10 total in archive)
[2026-01-15T00:46:29.360Z] [BOT] ✅ Archiving complete: 1 archived, 1528 active
[2026-01-15T00:46:29.370Z] [BOT] 💾 Saved posted_jobs.json: 1528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:29.371Z] [BOT] 📍 [ROUTING] "Software Development Engineer I" @ ORG_6c43c70a
[2026-01-15T00:46:29.371Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:46:29.552Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer I @ ORG_6c43c70a in #💻・tech-jobs
  ✅ Industry: Software Development Engineer I @ ORG_6c43c70a
[2026-01-15T00:46:31.316Z] [BOT] ✅ Created forum post: 🏢 Software Development Engineer I @ ORG_6c43c70a in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-15T00:46:32.818Z] [BOT] 💾 Marked as posted: Software Development Engineer I @ ORG_6c43c70a (instance #1)
[2026-01-15T00:46:32.818Z] [BOT] 💾 BEFORE ARCHIVING: 1529 jobs in database
[2026-01-15T00:46:32.819Z] [BOT] ✅ No jobs to archive (all 1529 jobs within 7-day window)
[2026-01-15T00:46:32.830Z] [BOT] 💾 Saved posted_jobs.json: 1529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:32.831Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_fa9f863b
[2026-01-15T00:46:32.831Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:46:33.044Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_fa9f863b in #💻・tech-jobs
[2026-01-15T00:46:33.045Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_fa9f863b
[2026-01-15T00:46:34.672Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_fa9f863b in #🌆・chicago
[2026-01-15T00:46:34.672Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-15T00:46:36.174Z] [BOT] 💾 Marked as posted: Entry Level Software Developer @ ORG_fa9f863b (instance #1)
[2026-01-15T00:46:36.174Z] [BOT] 💾 BEFORE ARCHIVING: 1530 jobs in database
[2026-01-15T00:46:36.175Z] [BOT] ✅ No jobs to archive (all 1530 jobs within 7-day window)
[2026-01-15T00:46:36.186Z] [BOT] 💾 Saved posted_jobs.json: 1530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:36.186Z] [BOT] 📍 [ROUTING] "Software Engineer, Early Career" @ ORG_9505081b
[2026-01-15T00:46:36.186Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:46:36.382Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Early Career @ ORG_9505081b in #💻・tech-jobs
[2026-01-15T00:46:36.382Z] [BOT] ✅ Industry: Software Engineer, Early Career @ ORG_9505081b
[2026-01-15T00:46:38.143Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Early Career @ ORG_9505081b in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-15T00:46:39.643Z] [BOT] 💾 Marked as posted: Software Engineer, Early Career @ ORG_9505081b (instance #1)
[2026-01-15T00:46:39.643Z] [BOT] 💾 BEFORE ARCHIVING: 1531 jobs in database
[2026-01-15T00:46:39.644Z] [BOT] ✅ No jobs to archive (all 1531 jobs within 7-day window)
[2026-01-15T00:46:39.654Z] [BOT] 💾 Saved posted_jobs.json: 1531 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:39.655Z] [BOT] 📍 [ROUTING] "Entry Level Software Developer" @ ORG_f7a2cae4
[2026-01-15T00:46:39.655Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-15T00:46:39.824Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-15T00:46:39.825Z] [BOT] ✅ Industry: Entry Level Software Developer @ ORG_f7a2cae4
[2026-01-15T00:46:41.576Z] [BOT] ✅ Created forum post: 🏢 Entry Level Software Developer @ ORG_f7a2cae4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-15T00:46:43.078Z] [BOT] 💾 Marked as posted: Entry Level Software Developer @ ORG_f7a2cae4 (instance #1)
[2026-01-15T00:46:43.078Z] [BOT] 💾 BEFORE ARCHIVING: 1532 jobs in database
[2026-01-15T00:46:43.079Z] [BOT] ✅ No jobs to archive (all 1532 jobs within 7-day window)
[2026-01-15T00:46:43.089Z] [BOT] 💾 Saved posted_jobs.json: 1532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:46.090Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-15T00:46:46.091Z] [BOT] 📍 [ROUTING] "Backend Engineer, New Grad" @ ORG_9f566c74in
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-15T00:46:46.091Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T00:46:46.348Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer, New Grad @ ORG_9f566c74in in #🤖・ai-jobs
  ✅ Industry: Backend Engineer, New Grad @ ORG_9f566c74in
[2026-01-15T00:46:48.120Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer, New Grad @ ORG_9f566c74in in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-15T00:46:49.621Z] [BOT] 💾 Marked as posted: Backend Engineer, New Grad @ ORG_9f566c74in (instance #1)
[2026-01-15T00:46:49.621Z] [BOT] 💾 BEFORE ARCHIVING: 1533 jobs in database
[2026-01-15T00:46:49.622Z] [BOT] ✅ No jobs to archive (all 1533 jobs within 7-day window)
[2026-01-15T00:46:49.635Z] [BOT] 💾 Saved posted_jobs.json: 1533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:49.635Z] [BOT] 📍 [ROUTING] "Software Engineer Data/AI/Intelligent Systems I (Full Time)" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
[2026-01-15T00:46:49.635Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T00:46:49.800Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 in #🤖・ai-jobs
[2026-01-15T00:46:49.800Z] [BOT] ✅ Industry: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28
[2026-01-15T00:46:51.453Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 in #🤠・austin
[2026-01-15T00:46:51.453Z] [BOT] ✅ Location: 🤠・austin
[2026-01-15T00:46:52.955Z] [BOT] 💾 Marked as posted: Software Engineer Data/AI/Intelligent Systems I (Full Time) @ ORG_aa669b28 (instance #1)
[2026-01-15T00:46:52.955Z] [BOT] 💾 BEFORE ARCHIVING: 1534 jobs in database
[2026-01-15T00:46:52.956Z] [BOT] ✅ No jobs to archive (all 1534 jobs within 7-day window)
[2026-01-15T00:46:52.967Z] [BOT] 💾 Saved posted_jobs.json: 1534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:52.968Z] [BOT] 📍 [ROUTING] "Physical Design Engineer - Machine Learning" @ ORG_f223faa9
[2026-01-15T00:46:52.968Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-15T00:46:53.110Z] [BOT] ✅ Created forum post: 🍎 Physical Design Engineer - Machine Learning @ ORG_f223faa9 in #🤖・ai-jobs
  ✅ Industry: Physical Design Engineer - Machine Learning @ ORG_f223faa9
[2026-01-15T00:46:54.937Z] [BOT] ✅ Created forum post: 🍎 Physical Design Engineer - Machine Learning @ ORG_f223faa9 in #☀️・sunnyvale
  ✅ Location: ☀️・sunnyvale
[2026-01-15T00:46:56.438Z] [BOT] 💾 Marked as posted: Physical Design Engineer - Machine Learning @ ORG_f223faa9 (instance #1)
[2026-01-15T00:46:56.439Z] [BOT] 💾 BEFORE ARCHIVING: 1535 jobs in database
[2026-01-15T00:46:56.440Z] [BOT] ✅ No jobs to archive (all 1535 jobs within 7-day window)
[2026-01-15T00:46:56.451Z] [BOT] 💾 Saved posted_jobs.json: 1535 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-15T00:46:59.451Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_55969b96 (posted within 7 days)
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_8ed651fb-engineer_req-11821 (posted within 7 days)
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_537c09ad (posted within 7 days)
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_8bd45b92 (posted within 7 days)
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_febee74a (posted within 7 days)
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_cd2f24bd (posted within 7 days)
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_bb052574 (posted within 7 days)
[2026-01-15T00:46:59.452Z] [BOT] ⏭️  Skipping duplicate: JID_96e20372 (posted within 7 days)
⏭️  Skipping duplicate: JID_20ea994e (posted within 7 days)
[2026-01-15T00:46:59.453Z] [BOT] ⏭️  Skipping duplicate: JID_8147c65c-amentum_careers-JID_23b119ab-developer_r0149243 (posted within 7 days)
[2026-01-15T00:46:59.575Z] [BOT] ✅ Loaded pending queue: 2731 total (2711 pending, 20 enriched, 0 posted)
[2026-01-15T00:46:59.765Z] [BOT] ✅ Saved pending queue: 2731 total (2711 pending, 10 enriched, 10 posted)
[2026-01-15T00:46:59.766Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-15T00:46:59.822Z] [BOT] 📂 Loaded 3685 existing routing entries
[2026-01-15T00:46:59.901Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-15T00:46:59.901Z] [BOT] Total entries: 3695
   Timestamp: 2026-01-15T00:46:59.886Z
[2026-01-15T00:46:59.902Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e2db38e3.jsonl
[2026-01-15T00:46:59.902Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-15T00:46:59.902Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-15T00:46:59.902Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🤖・ai-jobs: 3 posts
     3. #🌉・san-francisco: 2 posts
[2026-01-15T00:46:59.902Z] [BOT] 4. #🤠・austin: 2 posts
[2026-01-15T00:46:59.903Z] [BOT] 5. #🗽・new-york: 2 posts
[2026-01-15T00:46:59.903Z] [BOT] [STATS] Channel stats saved
[2026-01-15T00:47:01.928Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3015) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*