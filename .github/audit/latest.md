# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T19:06:20.573Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T19:05:28.383Z] ========================================
[2025-12-18T19:05:28.385Z] Discord Bot Execution Log
[2025-12-18T19:05:28.385Z] Environment: GitHub Actions
[2025-12-18T19:05:28.385Z] Node Version: v20.19.6
[2025-12-18T19:05:28.385Z] ========================================
[2025-12-18T19:05:28.385Z] Environment Variables Check:
[2025-12-18T19:05:28.385Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T19:05:28.385Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.385Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T19:05:28.385Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T19:05:28.385Z] 
Multi-Channel Configuration:
[2025-12-18T19:05:28.386Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T19:05:28.386Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T19:05:28.386Z] 
Data Files Check:
[2025-12-18T19:05:28.387Z] .github/data/new_jobs.json: ✅ Exists (10 items, 31330 bytes)
[2025-12-18T19:05:28.389Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 280478 bytes)
[2025-12-18T19:05:28.389Z] 
========================================
[2025-12-18T19:05:28.389Z] Starting Enhanced Discord Bot...
[2025-12-18T19:05:28.389Z] ========================================
[2025-12-18T19:05:28.907Z] [BOT] ✅ Loaded V2 database: 455 jobs
[2025-12-18T19:05:29.956Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T19:05:29.956Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T19:05:29.957Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T19:05:29.957Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T19:05:30.007Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T19:05:30.058Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 106
[2025-12-18T19:05:30.060Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T19:05:30.061Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T19:05:30.061Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T19:05:30.061Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T19:05:30.062Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T19:05:30.066Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2025-12-18T19:05:30.067Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
[2025-12-18T19:05:30.067Z] [BOT] Category: FINANCE (matched: "tax")
   Channel: 💰・finance-jobs (1391...2941)
[2025-12-18T19:05:30.085Z] [BOT ERROR] (node:2691) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T19:05:30.508Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #💰・finance-jobs
  ✅ Industry: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2025-12-18T19:05:32.160Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2025-12-18T19:05:32.161Z] [BOT] ✅ Location: 🤠・austin
[2025-12-18T19:05:33.661Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2025-12-18T19:05:33.661Z] [BOT] 💾 BEFORE ARCHIVING: 456 jobs in database
[2025-12-18T19:05:33.662Z] [BOT] ✅ No jobs to archive (all 456 jobs within 7-day window)
[2025-12-18T19:05:33.671Z] [BOT] 💾 Saved posted_jobs.json: 456 active jobs
[2025-12-18T19:05:33.671Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:05:36.672Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-18T19:05:36.672Z] [BOT] 📍 [ROUTING] "Data Analyst" @ ORG_ed6b3747 University
[2025-12-18T19:05:36.672Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T19:05:36.937Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_ed6b3747 University in #📈・JID_fb739488
[2025-12-18T19:05:36.937Z] [BOT] ✅ Industry: Data Analyst @ ORG_ed6b3747 University
[2025-12-18T19:05:38.645Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_ed6b3747 University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:05:40.147Z] [BOT] 💾 Marked as posted: Data Analyst @ ORG_ed6b3747 University (instance #1)
[2025-12-18T19:05:40.147Z] [BOT] 💾 BEFORE ARCHIVING: 457 jobs in database
[2025-12-18T19:05:40.147Z] [BOT] ✅ No jobs to archive (all 457 jobs within 7-day window)
[2025-12-18T19:05:40.152Z] [BOT] 💾 Saved posted_jobs.json: 457 active jobs
[2025-12-18T19:05:40.152Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:05:43.154Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-12-18T19:05:43.155Z] [BOT] 📍 [ROUTING] "Associate Software Engineer in Test" @ ORG_d0ca1d93 Systems
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:05:43.567Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems
[2025-12-18T19:05:45.393Z] [BOT] ✅ Created forum post: 🏢 Associate Software Engineer in Test @ ORG_d0ca1d93 Systems in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-18T19:05:46.894Z] [BOT] 💾 Marked as posted: Associate Software Engineer in Test @ ORG_d0ca1d93 Systems (instance #1)
[2025-12-18T19:05:46.894Z] [BOT] 💾 BEFORE ARCHIVING: 458 jobs in database
[2025-12-18T19:05:46.895Z] [BOT] ✅ No jobs to archive (all 458 jobs within 7-day window)
[2025-12-18T19:05:46.899Z] [BOT] 💾 Saved posted_jobs.json: 458 active jobs
[2025-12-18T19:05:46.900Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:05:46.900Z] [BOT] 📍 [ROUTING] "Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS" @ ORG_1bb6fcfb
[2025-12-18T19:05:46.900Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:05:47.081Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #💻・tech-jobs
[2025-12-18T19:05:47.081Z] [BOT] ✅ Industry: Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb
[2025-12-18T19:05:48.927Z] [BOT] ✅ Created forum post: 🏢 Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-12-18T19:05:48.927Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T19:05:50.428Z] [BOT] 💾 Marked as posted: Fullstack Software Engineer Graduate - Ads Interface and Platform - BS/MS @ ORG_1bb6fcfb (instance #1)
[2025-12-18T19:05:50.429Z] [BOT] 💾 BEFORE ARCHIVING: 459 jobs in database
[2025-12-18T19:05:50.429Z] [BOT] ✅ No jobs to archive (all 459 jobs within 7-day window)
[2025-12-18T19:05:50.434Z] [BOT] 💾 Saved posted_jobs.json: 459 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:05:50.435Z] [BOT] 📍 [ROUTING] "Digital Technology Engineer" @ ORG_0ee6cb3e Data
[2025-12-18T19:05:50.435Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:05:50.843Z] [BOT] ✅ Created forum post: 🏢 Digital Technology Engineer @ ORG_0ee6cb3e Data in #💻・tech-jobs
[2025-12-18T19:05:50.843Z] [BOT] ✅ Industry: Digital Technology Engineer @ ORG_0ee6cb3e Data
[2025-12-18T19:05:52.617Z] [BOT] ✅ Created forum post: 🏢 Digital Technology Engineer @ ORG_0ee6cb3e Data in #💻・remote-usa
[2025-12-18T19:05:52.617Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T19:05:54.118Z] [BOT] 💾 Marked as posted: Digital Technology Engineer @ ORG_0ee6cb3e Data (instance #1)
[2025-12-18T19:05:54.119Z] [BOT] 💾 BEFORE ARCHIVING: 460 jobs in database
[2025-12-18T19:05:54.119Z] [BOT] ✅ No jobs to archive (all 460 jobs within 7-day window)
[2025-12-18T19:05:54.124Z] [BOT] 💾 Saved posted_jobs.json: 460 active jobs
[2025-12-18T19:05:54.124Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:05:54.124Z] [BOT] 📍 [ROUTING] "Post Doctoral Research Associate - Atmospheric Science" @ ORG_9d38443e of Wyoming
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T19:05:54.283Z] [BOT] ✅ Created forum post: 🏢 Post Doctoral Research Associate - Atmospheric Science @ ORG_9d38443e of Wyoming in #💻・tech-jobs
  ✅ Industry: Post Doctoral Research Associate - Atmospheric Science @ ORG_9d38443e of Wyoming
[2025-12-18T19:05:55.970Z] [BOT] ✅ Created forum post: 🏢 Post Doctoral Research Associate - Atmospheric Science @ ORG_9d38443e of Wyoming in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:05:57.471Z] [BOT] 💾 Marked as posted: Post Doctoral Research Associate - Atmospheric Science @ ORG_9d38443e of Wyoming (instance #1)
[2025-12-18T19:05:57.471Z] [BOT] 💾 BEFORE ARCHIVING: 461 jobs in database
[2025-12-18T19:05:57.472Z] [BOT] ✅ No jobs to archive (all 461 jobs within 7-day window)
[2025-12-18T19:05:57.477Z] [BOT] 💾 Saved posted_jobs.json: 461 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:06:00.477Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-18T19:06:00.477Z] [BOT] 📍 [ROUTING] "Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science" @ ORG_1bb6fcfb
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T19:06:00.688Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ in #🤖・ai-jobs
  ✅ Industry: Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ ORG_1bb6fcfb
[2025-12-18T19:06:02.449Z] [BOT] ✅ Created forum post: 🏢 Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ in #🌉・san-francisco
[2025-12-18T19:06:02.449Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-18T19:06:03.951Z] [BOT] 💾 Marked as posted: Graduate Machine Learning Engineer - App Ads and Gaming - Bachelor of Science/Master of Science @ ORG_1bb6fcfb (instance #1)
[2025-12-18T19:06:03.952Z] [BOT] 💾 BEFORE ARCHIVING: 462 jobs in database
[2025-12-18T19:06:03.952Z] [BOT] ✅ No jobs to archive (all 462 jobs within 7-day window)
[2025-12-18T19:06:03.958Z] [BOT] 💾 Saved posted_jobs.json: 462 active jobs
[2025-12-18T19:06:03.958Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Data Scientist 1" @ ORG_10cc9416
   Category: AI (matched: "machine learning")
[2025-12-18T19:06:03.958Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-18T19:06:04.210Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_10cc9416 in #🤖・ai-jobs
  ✅ Industry: Data Scientist 1 @ ORG_10cc9416
[2025-12-18T19:06:06.129Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_10cc9416 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T19:06:07.629Z] [BOT] 💾 Marked as posted: Data Scientist 1 @ ORG_10cc9416 (instance #1)
[2025-12-18T19:06:07.629Z] [BOT] 💾 BEFORE ARCHIVING: 463 jobs in database
[2025-12-18T19:06:07.630Z] [BOT] ✅ No jobs to archive (all 463 jobs within 7-day window)
[2025-12-18T19:06:07.635Z] [BOT] 💾 Saved posted_jobs.json: 463 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T19:06:07.635Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP" @ ORG_1bb6fcfb
[2025-12-18T19:06:07.635Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T19:06:07.798Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb
[2025-12-18T19:06:09.705Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T19:06:11.205Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Knowledge Graph - CV/Multimodal/NLP @ ORG_1bb6fcfb (instance #1)
[2025-12-18T19:06:11.205Z] [BOT] 💾 BEFORE ARCHIVING: 464 jobs in database
[2025-12-18T19:06:11.206Z] [BOT] ✅ No jobs to archive (all 464 jobs within 7-day window)
[2025-12-18T19:06:11.211Z] [BOT] 💾 Saved posted_jobs.json: 464 active jobs
[2025-12-18T19:06:11.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:06:11.211Z] [BOT] 📍 [ROUTING] "Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd" @ ORG_08c9a13c
[2025-12-18T19:06:11.211Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T19:06:11.404Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🤖・ai-jobs
  ✅ Industry: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c
[2025-12-18T19:06:13.332Z] [BOT] ✅ Created forum post: 🏢 Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T19:06:14.833Z] [BOT] 💾 Marked as posted: Machine Learning Engineer Graduate - E-Commerce Recommendation/Search Alliance - 2026 Start','Phd @ ORG_08c9a13c (instance #1)
[2025-12-18T19:06:14.833Z] [BOT] 💾 BEFORE ARCHIVING: 465 jobs in database
[2025-12-18T19:06:14.833Z] [BOT] ✅ No jobs to archive (all 465 jobs within 7-day window)
[2025-12-18T19:06:14.839Z] [BOT] 💾 Saved posted_jobs.json: 465 active jobs
[2025-12-18T19:06:14.839Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T19:06:17.840Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T19:06:17.840Z] [BOT] ⏭️  Skipping duplicate: JID_9473c763-fellow_r_00029113 (posted within 7 days)
[2025-12-18T19:06:17.840Z] [BOT] ⏭️  Skipping duplicate: JID_bf74280f (posted within 7 days)
⏭️  Skipping duplicate: JID_17efcd6d (posted within 7 days)
[2025-12-18T19:06:17.840Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_e987b3a6 (posted within 7 days)
[2025-12-18T19:06:17.840Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9a92ffb0 (posted within 7 days)
[2025-12-18T19:06:17.840Z] [BOT] ⏭️  Skipping duplicate: JID_0022a53a (posted within 7 days)
⏭️  Skipping duplicate: JID_6796d1d6-CH_33d3e19a (posted within 7 days)
[2025-12-18T19:06:17.840Z] [BOT] ⏭️  Skipping duplicate: JID_e5d347af (posted within 7 days)
[2025-12-18T19:06:17.840Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_3a8a0647-detail (posted within 7 days)
[2025-12-18T19:06:17.841Z] [BOT] ⏭️  Skipping duplicate: JID_41d051a8-cx_1-job-252811 (posted within 7 days)
[2025-12-18T19:06:17.844Z] [BOT] ✅ Loaded pending queue: 516 total (496 pending, 20 enriched, 0 posted)
[2025-12-18T19:06:17.852Z] [BOT] ✅ Saved pending queue: 516 total (496 pending, 10 enriched, 10 posted)
[2025-12-18T19:06:17.852Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-18T19:06:17.892Z] [BOT] 📂 Loaded 440 existing routing entries
[2025-12-18T19:06:17.932Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 450
   Timestamp: 2025-12-18T19:06:17.930Z
[2025-12-18T19:06:17.933Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T19:06:17.933Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T19:06:17.933Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2025-12-18T19:06:17.933Z] [BOT] 1. #💻・remote-usa: 4 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 4 posts
     4. #🌉・san-francisco: 2 posts
[2025-12-18T19:06:17.934Z] [BOT] 5. #🌧️・seattle: 2 posts
[2025-12-18T19:06:17.934Z] [BOT] [STATS] Channel stats saved
[2025-12-18T19:06:19.945Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2691) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*