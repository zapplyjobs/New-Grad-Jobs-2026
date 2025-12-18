# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T21:35:08.176Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T21:34:13.909Z] ========================================
[2025-12-18T21:34:13.911Z] Discord Bot Execution Log
[2025-12-18T21:34:13.911Z] Environment: GitHub Actions
[2025-12-18T21:34:13.911Z] Node Version: v20.19.6
[2025-12-18T21:34:13.911Z] ========================================
[2025-12-18T21:34:13.911Z] Environment Variables Check:
[2025-12-18T21:34:13.911Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T21:34:13.911Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.911Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T21:34:13.911Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T21:34:13.911Z] 
Multi-Channel Configuration:
[2025-12-18T21:34:13.911Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.911Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.911Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.911Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.912Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.912Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.912Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.912Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.912Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T21:34:13.912Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T21:34:13.912Z] 
Data Files Check:
[2025-12-18T21:34:13.912Z] .github/data/new_jobs.json: ✅ Exists (10 items, 28534 bytes)
[2025-12-18T21:34:13.915Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 342423 bytes)
[2025-12-18T21:34:13.915Z] 
========================================
[2025-12-18T21:34:13.915Z] Starting Enhanced Discord Bot...
[2025-12-18T21:34:13.915Z] ========================================
[2025-12-18T21:34:14.374Z] [BOT] ✅ Loaded V2 database: 565 jobs
[2025-12-18T21:34:14.982Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T21:34:14.982Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T21:34:14.982Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T21:34:14.982Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T21:34:15.036Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T21:34:15.087Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T21:34:15.089Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T21:34:15.089Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T21:34:15.090Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T21:34:15.090Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-18T21:34:15.091Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T21:34:15.096Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-18T21:34:15.097Z] [BOT] 📍 [ROUTING] "Campus Graduate - Software Engineer II - Technology" @ ORG_0baaf6f2 Express
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:34:15.113Z] [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T21:34:16.573Z] [BOT] ✅ Created forum post: 🏢 Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2025-12-18T21:34:16.574Z] [BOT] ✅ Industry: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express
[2025-12-18T21:34:18.287Z] [BOT] ✅ Created forum post: 🏢 Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express in #🗽・new-york
[2025-12-18T21:34:18.287Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-18T21:34:19.789Z] [BOT] 💾 Marked as posted: Campus Graduate - Software Engineer II - Technology @ ORG_0baaf6f2 Express (instance #1)
[2025-12-18T21:34:19.789Z] [BOT] 💾 BEFORE ARCHIVING: 566 jobs in database
[2025-12-18T21:34:19.789Z] [BOT] ✅ No jobs to archive (all 566 jobs within 7-day window)
[2025-12-18T21:34:20.143Z] [BOT] 💾 Saved posted_jobs.json: 566 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:20.144Z] [BOT] 📍 [ROUTING] "Software Engineer - Guidewire Integration" @ ORG_b344d80e Travelers Companies
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:34:20.631Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Guidewire Integration @ ORG_b344d80e Travelers Companies in #💻・tech-jobs
[2025-12-18T21:34:20.631Z] [BOT] ✅ Industry: Software Engineer - Guidewire Integration @ ORG_b344d80e Travelers Companies
[2025-12-18T21:34:22.360Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Guidewire Integration @ ORG_b344d80e Travelers Companies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:34:23.862Z] [BOT] 💾 Marked as posted: Software Engineer - Guidewire Integration @ ORG_b344d80e Travelers Companies (instance #1)
[2025-12-18T21:34:23.862Z] [BOT] 💾 BEFORE ARCHIVING: 567 jobs in database
[2025-12-18T21:34:23.862Z] [BOT] ✅ No jobs to archive (all 567 jobs within 7-day window)
[2025-12-18T21:34:23.868Z] [BOT] 💾 Saved posted_jobs.json: 567 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:23.869Z] [BOT] 📍 [ROUTING] "General Hire – Research Scientist Graduate" @ ORG_1bb6fcfb
[2025-12-18T21:34:23.870Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:34:24.403Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb
[2025-12-18T21:34:26.161Z] [BOT] ✅ Created forum post: 🏢 General Hire – Research Scientist Graduate @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T21:34:27.662Z] [BOT] 💾 Marked as posted: General Hire – Research Scientist Graduate @ ORG_1bb6fcfb (instance #1)
[2025-12-18T21:34:27.662Z] [BOT] 💾 BEFORE ARCHIVING: 568 jobs in database
[2025-12-18T21:34:27.662Z] [BOT] ✅ No jobs to archive (all 568 jobs within 7-day window)
[2025-12-18T21:34:27.669Z] [BOT] 💾 Saved posted_jobs.json: 568 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:27.670Z] [BOT] 📍 [ROUTING] "Financial Systems Analyst 1" @ ORG_c625ca57 Brisbois
[2025-12-18T21:34:27.670Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:34:27.869Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・tech-jobs
  ✅ Industry: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois
[2025-12-18T21:34:29.662Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:34:31.162Z] [BOT] 💾 Marked as posted: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois (instance #1)
[2025-12-18T21:34:31.163Z] [BOT] 💾 BEFORE ARCHIVING: 569 jobs in database
[2025-12-18T21:34:31.163Z] [BOT] ✅ No jobs to archive (all 569 jobs within 7-day window)
[2025-12-18T21:34:31.169Z] [BOT] 💾 Saved posted_jobs.json: 569 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:31.169Z] [BOT] 📍 [ROUTING] "Full Stack Engineer" @ ORG_69f01140 Financial
[2025-12-18T21:34:31.169Z] [BOT] Category: TECH (matched: "web engineer")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T21:34:31.369Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_69f01140 Financial in #💻・tech-jobs
  ✅ Industry: Full Stack Engineer @ ORG_69f01140 Financial
[2025-12-18T21:34:33.046Z] [BOT] ✅ Created forum post: 🏢 Full Stack Engineer @ ORG_69f01140 Financial in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:34:34.546Z] [BOT] 💾 Marked as posted: Full Stack Engineer @ ORG_69f01140 Financial (instance #1)
[2025-12-18T21:34:34.547Z] [BOT] 💾 BEFORE ARCHIVING: 570 jobs in database
[2025-12-18T21:34:34.547Z] [BOT] ✅ No jobs to archive (all 570 jobs within 7-day window)
[2025-12-18T21:34:34.554Z] [BOT] 💾 Saved posted_jobs.json: 570 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:37.555Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2025-12-18T21:34:37.555Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar" @ ORG_478e100e University
[2025-12-18T21:34:37.555Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T21:34:37.842Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Scholar @ ORG_478e100e University
[2025-12-18T21:34:39.573Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Scholar @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:34:41.073Z] [BOT] 💾 Marked as posted: Postdoctoral Scholar @ ORG_478e100e University (instance #1)
[2025-12-18T21:34:41.073Z] [BOT] 💾 BEFORE ARCHIVING: 571 jobs in database
[2025-12-18T21:34:41.073Z] [BOT] ✅ No jobs to archive (all 571 jobs within 7-day window)
[2025-12-18T21:34:41.079Z] [BOT] 💾 Saved posted_jobs.json: 571 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:41.079Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher" @ ORG_2380d607 View A&M University
[2025-12-18T21:34:41.079Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-18T21:34:41.306Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_2380d607 View A&M University in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Researcher @ ORG_2380d607 View A&M University
[2025-12-18T21:34:43.386Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher @ ORG_2380d607 View A&M University in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T21:34:44.885Z] [BOT] 💾 Marked as posted: Postdoctoral Researcher @ ORG_2380d607 View A&M University (instance #1)
💾 BEFORE ARCHIVING: 572 jobs in database
[2025-12-18T21:34:44.885Z] [BOT] ✅ No jobs to archive (all 572 jobs within 7-day window)
[2025-12-18T21:34:44.891Z] [BOT] 💾 Saved posted_jobs.json: 572 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:44.891Z] [BOT] 📍 [ROUTING] "General Hire – Machine Learning Engineer Graduate - TikTok Recommendation" @ ORG_1bb6fcfb
[2025-12-18T21:34:44.891Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T21:34:45.080Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb in #🤖・ai-jobs
  ✅ Industry: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb
[2025-12-18T21:34:46.880Z] [BOT] ✅ Created forum post: 🏢 General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-18T21:34:48.381Z] [BOT] 💾 Marked as posted: General Hire – Machine Learning Engineer Graduate - TikTok Recommendation @ ORG_1bb6fcfb (instance #1)
[2025-12-18T21:34:48.381Z] [BOT] 💾 BEFORE ARCHIVING: 573 jobs in database
[2025-12-18T21:34:48.382Z] [BOT] ✅ No jobs to archive (all 573 jobs within 7-day window)
[2025-12-18T21:34:48.388Z] [BOT] 💾 Saved posted_jobs.json: 573 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:51.389Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-18T21:34:51.389Z] [BOT] 📍 [ROUTING] "Data Developer" @ ORG_a258b30f Lending Services
[2025-12-18T21:34:51.389Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T21:34:51.954Z] [BOT] ✅ Created forum post: 🏢 Data Developer @ ORG_a258b30f Lending Services in #📈・JID_fb739488
  ✅ Industry: Data Developer @ ORG_a258b30f Lending Services
[2025-12-18T21:34:53.867Z] [BOT] ✅ Created forum post: 🏢 Data Developer @ ORG_a258b30f Lending Services in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:34:55.367Z] [BOT] 💾 Marked as posted: Data Developer @ ORG_a258b30f Lending Services (instance #1)
[2025-12-18T21:34:55.368Z] [BOT] 💾 BEFORE ARCHIVING: 574 jobs in database
[2025-12-18T21:34:55.368Z] [BOT] ✅ No jobs to archive (all 574 jobs within 7-day window)
[2025-12-18T21:34:55.374Z] [BOT] 💾 Saved posted_jobs.json: 574 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:34:58.375Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-18T21:34:58.375Z] [BOT] 📍 [ROUTING] "Manufacturing Technician" @ ORG_1d467f78 Motors
[2025-12-18T21:34:58.375Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-18T21:34:58.687Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Technician @ ORG_1d467f78 Motors in #🩺・healthcare-jobs
  ✅ Industry: Manufacturing Technician @ ORG_1d467f78 Motors
[2025-12-18T21:35:00.485Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Technician @ ORG_1d467f78 Motors in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T21:35:01.985Z] [BOT] 💾 Marked as posted: Manufacturing Technician @ ORG_1d467f78 Motors (instance #1)
[2025-12-18T21:35:01.986Z] [BOT] 💾 BEFORE ARCHIVING: 575 jobs in database
[2025-12-18T21:35:01.986Z] [BOT] ✅ No jobs to archive (all 575 jobs within 7-day window)
[2025-12-18T21:35:01.992Z] [BOT] 💾 Saved posted_jobs.json: 575 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T21:35:04.993Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_f4c93aa9 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_40a990de-scholar_req_0000072094-1 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_28d73c5b-integration_r-47036 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_84f0bad6-pvamu_external-JID_de907147-_r-079402 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_9eb8de67 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_583d1412 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_fed6e94a (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_0a01ff65 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_326b4a56 (posted within 7 days)
[2025-12-18T21:35:04.994Z] [BOT] ⏭️  Skipping duplicate: JID_e768898f (posted within 7 days)
[2025-12-18T21:35:04.997Z] [BOT] ✅ Loaded pending queue: 407 total (387 pending, 20 enriched, 0 posted)
[2025-12-18T21:35:05.003Z] [BOT] ✅ Saved pending queue: 407 total (387 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2025-12-18T21:35:05.004Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-18T21:35:05.046Z] [BOT] 📂 Loaded 547 existing routing entries
[2025-12-18T21:35:05.088Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 557
   Timestamp: 2025-12-18T21:35:05.086Z
[2025-12-18T21:35:05.089Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
[2025-12-18T21:35:05.089Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2025-12-18T21:35:05.089Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2025-12-18T21:35:05.089Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 8
   Top channels:
     1. #💻・remote-usa: 6 posts
     2. #💻・tech-jobs: 5 posts
     3. #🤖・ai-jobs: 3 posts
[2025-12-18T21:35:05.089Z] [BOT] 4. #🌉・san-francisco: 2 posts
     5. #🗽・new-york: 1 posts
[2025-12-18T21:35:05.089Z] [BOT] [STATS] Channel stats saved
[2025-12-18T21:35:07.100Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2424) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*