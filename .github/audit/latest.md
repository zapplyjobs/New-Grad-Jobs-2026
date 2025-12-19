# Discord Bot Execution Audit
**Timestamp:** 2025-12-19T19:34:27.862Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-19T19:33:41.807Z] ========================================
[2025-12-19T19:33:41.809Z] Discord Bot Execution Log
[2025-12-19T19:33:41.809Z] Environment: GitHub Actions
[2025-12-19T19:33:41.809Z] Node Version: v20.19.6
[2025-12-19T19:33:41.809Z] ========================================
[2025-12-19T19:33:41.809Z] Environment Variables Check:
[2025-12-19T19:33:41.809Z] DISCORD_TOKEN: ✅ Set
[2025-12-19T19:33:41.809Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.809Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-19T19:33:41.810Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-19T19:33:41.810Z] 
Multi-Channel Configuration:
[2025-12-19T19:33:41.810Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-19T19:33:41.810Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-19T19:33:41.810Z] 
Data Files Check:
[2025-12-19T19:33:41.811Z] .github/data/new_jobs.json: ✅ Exists (10 items, 49079 bytes)
[2025-12-19T19:33:41.814Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 318075 bytes)
[2025-12-19T19:33:41.814Z] 
========================================
[2025-12-19T19:33:41.814Z] Starting Enhanced Discord Bot...
[2025-12-19T19:33:41.814Z] ========================================
[2025-12-19T19:33:42.337Z] [BOT] ✅ Loaded V2 database: 534 jobs
[2025-12-19T19:33:43.159Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-19T19:33:43.159Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-19T19:33:43.159Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-19T19:33:43.160Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-19T19:33:43.204Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-19T19:33:43.252Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 68
[2025-12-19T19:33:43.254Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-19T19:33:43.254Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-19T19:33:43.254Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-19T19:33:43.255Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-19T19:33:43.255Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank: nyc, morrisville
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-19T19:33:43.258Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-19T19:33:43.259Z] [BOT] 📍 [ROUTING] "Product Applications Engineer" @ ORG_8f6fe0d8 Devices
[2025-12-19T19:33:43.259Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:33:43.277Z] [BOT ERROR] (node:2686) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-19T19:33:43.470Z] [BOT] ✅ Created forum post: 🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices in #💻・tech-jobs
  ✅ Industry: Product Applications Engineer @ ORG_8f6fe0d8 Devices
[2025-12-19T19:33:45.220Z] [BOT] ✅ Created forum post: 🏢 Product Applications Engineer @ ORG_8f6fe0d8 Devices in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T19:33:46.720Z] [BOT] 💾 Marked as posted: Product Applications Engineer @ ORG_8f6fe0d8 Devices (instance #1)
[2025-12-19T19:33:46.721Z] [BOT] 💾 BEFORE ARCHIVING: 535 jobs in database
[2025-12-19T19:33:46.721Z] [BOT] ✅ No jobs to archive (all 535 jobs within 7-day window)
[2025-12-19T19:33:46.730Z] [BOT] 💾 Saved posted_jobs.json: 535 active jobs
[2025-12-19T19:33:46.730Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:33:46.731Z] [BOT] 📍 [ROUTING] "Software Engineer Graduate - AI Applications" @ ORG_08c9a13c
[2025-12-19T19:33:46.731Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:33:46.992Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Applications @ ORG_08c9a13c in #💻・tech-jobs
[2025-12-19T19:33:46.993Z] [BOT] ✅ Industry: Software Engineer Graduate - AI Applications @ ORG_08c9a13c
[2025-12-19T19:33:48.718Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Graduate - AI Applications @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T19:33:50.220Z] [BOT] 💾 Marked as posted: Software Engineer Graduate - AI Applications @ ORG_08c9a13c (instance #1)
[2025-12-19T19:33:50.220Z] [BOT] 💾 BEFORE ARCHIVING: 536 jobs in database
[2025-12-19T19:33:50.220Z] [BOT] ✅ No jobs to archive (all 536 jobs within 7-day window)
[2025-12-19T19:33:50.225Z] [BOT] 💾 Saved posted_jobs.json: 536 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T19:33:50.225Z] [BOT] 📍 [ROUTING] "Deutsche Bank Graduate Programme - Technology - Data and Innovation" @ ORG_3d114b3a Bank
[2025-12-19T19:33:50.226Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:33:50.432Z] [BOT] ✅ Created forum post: 🏢 Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #💻・tech-jobs
  ✅ Industry: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank
[2025-12-19T19:33:52.277Z] [BOT] ✅ Created forum post: 🏢 Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank in #🗽・new-york
[2025-12-19T19:33:52.278Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-19T19:33:53.778Z] [BOT] 💾 Marked as posted: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank (instance #1)
[2025-12-19T19:33:53.778Z] [BOT] 💾 BEFORE ARCHIVING: 537 jobs in database
[2025-12-19T19:33:53.779Z] [BOT] ✅ No jobs to archive (all 537 jobs within 7-day window)
[2025-12-19T19:33:53.784Z] [BOT] 💾 Saved posted_jobs.json: 537 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T19:33:53.784Z] [BOT] 💾 Marked as posted: Deutsche Bank Graduate Programme - Technology - Data and Innovation @ ORG_3d114b3a Bank (instance #1)
[2025-12-19T19:33:53.785Z] [BOT] 💾 BEFORE ARCHIVING: 538 jobs in database
[2025-12-19T19:33:53.785Z] [BOT] ✅ No jobs to archive (all 538 jobs within 7-day window)
[2025-12-19T19:33:53.789Z] [BOT] 💾 Saved posted_jobs.json: 538 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-19T19:33:53.791Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering" @ ORG_9d38443e of Texas - Austin
[2025-12-19T19:33:53.791Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-19T19:33:53.983Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_d32a5041 in #💻・tech-jobs
  ✅ Industry: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_9d38443e of Texas - Austin
[2025-12-19T19:33:55.737Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_d32a5041 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-19T19:33:57.238Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar - Petroleum and Geosystems Engineering - Cockrell School of Engineering @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-19T19:33:57.238Z] [BOT] 💾 BEFORE ARCHIVING: 539 jobs in database
[2025-12-19T19:33:57.239Z] [BOT] ✅ No jobs to archive (all 539 jobs within 7-day window)
[2025-12-19T19:33:57.244Z] [BOT] 💾 Saved posted_jobs.json: 539 active jobs
[2025-12-19T19:33:57.244Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:34:00.245Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-19T19:34:00.246Z] [BOT] 📍 [ROUTING] "Support Engineer" @ ORG_c67ce9a6
   Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:34:00.246Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:34:00.659Z] [BOT] ✅ Created forum post: 🏢 Support Engineer @ ORG_c67ce9a6 in #🤖・ai-jobs
  ✅ Industry: Support Engineer @ ORG_c67ce9a6
[2025-12-19T19:34:02.435Z] [BOT] ✅ Created forum post: 🏢 Support Engineer @ ORG_c67ce9a6 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-19T19:34:03.937Z] [BOT] 💾 Marked as posted: Support Engineer @ ORG_c67ce9a6 (instance #1)
[2025-12-19T19:34:03.937Z] [BOT] 💾 BEFORE ARCHIVING: 540 jobs in database
[2025-12-19T19:34:03.937Z] [BOT] ✅ No jobs to archive (all 540 jobs within 7-day window)
[2025-12-19T19:34:03.943Z] [BOT] 💾 Saved posted_jobs.json: 540 active jobs
[2025-12-19T19:34:03.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:34:03.943Z] [BOT] 📍 [ROUTING] "Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development" @ ORG_8f6fe0d8 Devices
[2025-12-19T19:34:03.944Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:34:04.254Z] [BOT] ✅ Created forum post: 🏢 Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Mode in #🤖・ai-jobs
  ✅ Industry: Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development @ ORG_8f6fe0d8 Devices
[2025-12-19T19:34:05.984Z] [BOT] ✅ Created forum post: 🏢 Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Mode in #🚌・boston
  ✅ Location: 🚌・boston
[2025-12-19T19:34:07.485Z] [BOT] 💾 Marked as posted: Electronic Design Automation Research and Development Engineer with Emphasis on Simulation - Modeling - Software Development @ ORG_8f6fe0d8 Devices (instance #1)
[2025-12-19T19:34:07.485Z] [BOT] 💾 BEFORE ARCHIVING: 541 jobs in database
[2025-12-19T19:34:07.486Z] [BOT] ✅ No jobs to archive (all 541 jobs within 7-day window)
[2025-12-19T19:34:07.492Z] [BOT] 💾 Saved posted_jobs.json: 541 active jobs
[2025-12-19T19:34:07.492Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:34:07.492Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career - PhD - Infrastructure" @ ORG_ce770667
   Category: AI (matched: "machine learning")
[2025-12-19T19:34:07.492Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:34:07.699Z] [BOT] ✅ Created forum post: 🟢 Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 in #🤖・ai-jobs
  ✅ Industry: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667
[2025-12-19T19:34:09.581Z] [BOT] ✅ Created forum post: 🟢 Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-19T19:34:11.082Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career - PhD - Infrastructure @ ORG_ce770667 (instance #1)
[2025-12-19T19:34:11.082Z] [BOT] 💾 BEFORE ARCHIVING: 542 jobs in database
[2025-12-19T19:34:11.082Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2025-12-19T19:34:11.088Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2025-12-19T19:34:11.088Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:34:11.088Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-19T19:34:11.088Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-19T19:34:11.408Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb in #🤖・ai-jobs
[2025-12-19T19:34:11.408Z] [BOT] ✅ Industry: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb
[2025-12-19T19:34:13.341Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-19T19:34:13.341Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T19:34:14.842Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - Tiktok Recommendation-Live - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-19T19:34:14.843Z] [BOT] 💾 BEFORE ARCHIVING: 543 jobs in database
[2025-12-19T19:34:14.843Z] [BOT] ✅ No jobs to archive (all 543 jobs within 7-day window)
[2025-12-19T19:34:14.849Z] [BOT] 💾 Saved posted_jobs.json: 543 active jobs
[2025-12-19T19:34:14.849Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:34:17.850Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-19T19:34:17.850Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered)" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-19T19:34:17.850Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-19T19:34:18.109Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb
[2025-12-19T19:34:19.905Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-19T19:34:19.905Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-19T19:34:21.406Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok UG-Mid Platform - 2026 Start (to be filtered) @ ORG_1bb6fcfb (instance #1)
[2025-12-19T19:34:21.406Z] [BOT] 💾 BEFORE ARCHIVING: 544 jobs in database
[2025-12-19T19:34:21.406Z] [BOT] ✅ No jobs to archive (all 544 jobs within 7-day window)
[2025-12-19T19:34:21.412Z] [BOT] 💾 Saved posted_jobs.json: 544 active jobs
[2025-12-19T19:34:21.413Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-19T19:34:24.413Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-19T19:34:24.414Z] [BOT] ⏭️  Skipping duplicate: JID_784cf8b0-engineering_r255206-1 (posted within 7 days)
[2025-12-19T19:34:24.414Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_2e04d983-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_c9a15e92 (posted within 7 days)
[2025-12-19T19:34:24.414Z] [BOT] ⏭️  Skipping duplicate: JID_cfdf7d7c-development_r254720 (posted within 7 days)
[2025-12-19T19:34:24.414Z] [BOT] ⏭️  Skipping duplicate: JID_1fc27256 (posted within 7 days)
[2025-12-19T19:34:24.414Z] [BOT] ⏭️  Skipping duplicate: JID_ff4b39dc (posted within 7 days)
[2025-12-19T19:34:24.414Z] [BOT] ⏭️  Skipping duplicate: JID_f2005ce5-engineering_r_00018034 (posted within 7 days)
[2025-12-19T19:34:24.414Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_0946fb2d (posted within 7 days)
[2025-12-19T19:34:24.415Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_991f3f20 (posted within 7 days)
[2025-12-19T19:34:24.417Z] [BOT] ✅ Loaded pending queue: 378 total (358 pending, 20 enriched, 0 posted)
[2025-12-19T19:34:24.423Z] [BOT] ✅ Saved pending queue: 378 total (358 pending, 11 enriched, 9 posted)
[2025-12-19T19:34:24.423Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-19T19:34:24.464Z] [BOT] 📂 Loaded 615 existing routing entries
[2025-12-19T19:34:24.509Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 624
   Timestamp: 2025-12-19T19:34:24.504Z
📝 Discord posting log saved: .github/logs/JID_79afb8c1.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 8
   Top channels:
     1. #🌉・san-francisco: 5 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 4 posts
     4. #🗽・new-york: 1 posts
     5. #🤠・austin: 1 posts
[STATS] Channel stats saved
[2025-12-19T19:34:26.518Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2686) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*