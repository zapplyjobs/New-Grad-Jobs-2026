# Discord Bot Execution Audit
**Timestamp:** 2025-12-18T20:50:50.090Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-18T20:50:05.349Z] ========================================
[2025-12-18T20:50:05.351Z] Discord Bot Execution Log
[2025-12-18T20:50:05.351Z] Environment: GitHub Actions
[2025-12-18T20:50:05.351Z] Node Version: v20.19.6
[2025-12-18T20:50:05.351Z] ========================================
[2025-12-18T20:50:05.351Z] Environment Variables Check:
[2025-12-18T20:50:05.351Z] DISCORD_TOKEN: ✅ Set
[2025-12-18T20:50:05.351Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.351Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-18T20:50:05.352Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-18T20:50:05.352Z] 
Multi-Channel Configuration:
[2025-12-18T20:50:05.352Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-18T20:50:05.352Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-18T20:50:05.353Z] 
Data Files Check:
[2025-12-18T20:50:05.353Z] .github/data/new_jobs.json: ✅ Exists (10 items, 22341 bytes)
[2025-12-18T20:50:05.355Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 326115 bytes)
[2025-12-18T20:50:05.355Z] 
========================================
[2025-12-18T20:50:05.355Z] Starting Enhanced Discord Bot...
[2025-12-18T20:50:05.355Z] ========================================
[2025-12-18T20:50:05.916Z] [BOT] ✅ Loaded V2 database: 535 jobs
[2025-12-18T20:50:06.800Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-18T20:50:06.801Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-18T20:50:06.801Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-18T20:50:06.801Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-18T20:50:06.850Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-18T20:50:06.902Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 100
[2025-12-18T20:50:06.904Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-18T20:50:06.904Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-18T20:50:06.904Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-18T20:50:06.905Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-18T20:50:06.905Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-18T20:50:06.910Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-18T20:50:06.911Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career Opportunities - Aidp Reliability Engineering - IS&T" @ ORG_f223faa9
[2025-12-18T20:50:06.911Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:50:06.928Z] [BOT ERROR] (node:2800) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-18T20:50:07.222Z] [BOT] ✅ Created forum post: 🍎 Software Engineer – Early Career Opportunities - Aidp Reliability Engineering - IS&T @ ORG_f223faa9 in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career Opportunities - Aidp Reliability Engineering - IS&T @ ORG_f223faa9
[2025-12-18T20:50:08.924Z] [BOT] ✅ Created forum post: 🍎 Software Engineer – Early Career Opportunities - Aidp Reliability Engineering - IS&T @ ORG_f223faa9 in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T20:50:10.425Z] [BOT] 💾 Marked as posted: Software Engineer – Early Career Opportunities - Aidp Reliability Engineering - IS&T @ ORG_f223faa9 (instance #1)
[2025-12-18T20:50:10.425Z] [BOT] 💾 BEFORE ARCHIVING: 536 jobs in database
[2025-12-18T20:50:10.426Z] [BOT] ✅ No jobs to archive (all 536 jobs within 7-day window)
[2025-12-18T20:50:10.437Z] [BOT] 💾 Saved posted_jobs.json: 536 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:10.437Z] [BOT] 📍 [ROUTING] "Hebrew Translator - AI Trainer" @ ORG_4ee447c5 Technologies
   Category: TECH (matched: "machine learning")
[2025-12-18T20:50:10.437Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:50:10.682Z] [BOT] ✅ Created forum post: 🏢 Hebrew Translator - AI Trainer @ ORG_4ee447c5 Technologies in #💻・tech-jobs
[2025-12-18T20:50:10.682Z] [BOT] ✅ Industry: Hebrew Translator - AI Trainer @ ORG_4ee447c5 Technologies
[2025-12-18T20:50:12.581Z] [BOT] ✅ Created forum post: 🏢 Hebrew Translator - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:50:14.081Z] [BOT] 💾 Marked as posted: Hebrew Translator - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2025-12-18T20:50:14.081Z] [BOT] 💾 BEFORE ARCHIVING: 537 jobs in database
[2025-12-18T20:50:14.082Z] [BOT] ✅ No jobs to archive (all 537 jobs within 7-day window)
[2025-12-18T20:50:14.087Z] [BOT] 💾 Saved posted_jobs.json: 537 active jobs
[2025-12-18T20:50:14.087Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:14.089Z] [BOT] 📍 [ROUTING] "Automation Analyst" @ ORG_12594cce
[2025-12-18T20:50:14.089Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:50:14.290Z] [BOT] ✅ Created forum post: 🏢 Automation Analyst @ ORG_12594cce in #💻・tech-jobs
  ✅ Industry: Automation Analyst @ ORG_12594cce
[2025-12-18T20:50:16.022Z] [BOT] ✅ Created forum post: 🏢 Automation Analyst @ ORG_12594cce in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T20:50:17.524Z] [BOT] 💾 Marked as posted: Automation Analyst @ ORG_12594cce (instance #1)
[2025-12-18T20:50:17.524Z] [BOT] 💾 BEFORE ARCHIVING: 538 jobs in database
[2025-12-18T20:50:17.524Z] [BOT] ✅ No jobs to archive (all 538 jobs within 7-day window)
[2025-12-18T20:50:17.531Z] [BOT] 💾 Saved posted_jobs.json: 538 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:17.533Z] [BOT] 📍 [ROUTING] "GIS Analyst 1 Public Works" @ ORG_4eb1b68d County
[2025-12-18T20:50:17.533Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:50:17.667Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 Public Works @ ORG_4eb1b68d County in #💻・tech-jobs
  ✅ Industry: GIS Analyst 1 Public Works @ ORG_4eb1b68d County
[2025-12-18T20:50:19.343Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 Public Works @ ORG_4eb1b68d County in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-18T20:50:20.844Z] [BOT] 💾 Marked as posted: GIS Analyst 1 Public Works @ ORG_4eb1b68d County (instance #1)
[2025-12-18T20:50:20.844Z] [BOT] 💾 BEFORE ARCHIVING: 539 jobs in database
[2025-12-18T20:50:20.845Z] [BOT] ✅ No jobs to archive (all 539 jobs within 7-day window)
[2025-12-18T20:50:20.851Z] [BOT] 💾 Saved posted_jobs.json: 539 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:20.851Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_86bc4e7d Major
[2025-12-18T20:50:20.852Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-18T20:50:21.050Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_86bc4e7d Major in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_86bc4e7d Major
[2025-12-18T20:50:22.902Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_86bc4e7d Major in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-18T20:50:24.404Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_86bc4e7d Major (instance #1)
[2025-12-18T20:50:24.404Z] [BOT] 💾 BEFORE ARCHIVING: 540 jobs in database
[2025-12-18T20:50:24.405Z] [BOT] ✅ No jobs to archive (all 540 jobs within 7-day window)
[2025-12-18T20:50:24.412Z] [BOT] 💾 Saved posted_jobs.json: 540 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:27.413Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2025-12-18T20:50:27.413Z] [BOT] 📍 [ROUTING] "Anti-Fraud Data Analyst Graduate" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T20:50:27.725Z] [BOT] ✅ Created forum post: 🏢 Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb
[2025-12-18T20:50:29.445Z] [BOT] ✅ Created forum post: 🏢 Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb in #🌧️・seattle
[2025-12-18T20:50:29.446Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-18T20:50:30.947Z] [BOT] 💾 Marked as posted: Anti-Fraud Data Analyst Graduate @ ORG_1bb6fcfb (instance #1)
[2025-12-18T20:50:30.947Z] [BOT] 💾 BEFORE ARCHIVING: 541 jobs in database
[2025-12-18T20:50:30.948Z] [BOT] ✅ No jobs to archive (all 541 jobs within 7-day window)
[2025-12-18T20:50:30.955Z] [BOT] 💾 Saved posted_jobs.json: 541 active jobs
[2025-12-18T20:50:30.955Z] [BOT] ✅ Verified: Database file matches in-memory state
📍 [ROUTING] "Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start" @ ORG_1bb6fcfb
[2025-12-18T20:50:30.955Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2025-12-18T20:50:31.193Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb in #📈・JID_fb739488
  ✅ Industry: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb
[2025-12-18T20:50:32.849Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-18T20:50:34.351Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb (instance #1)
[2025-12-18T20:50:34.351Z] [BOT] 💾 BEFORE ARCHIVING: 542 jobs in database
[2025-12-18T20:50:34.351Z] [BOT] ✅ No jobs to archive (all 542 jobs within 7-day window)
[2025-12-18T20:50:34.358Z] [BOT] 💾 Saved posted_jobs.json: 542 active jobs
[2025-12-18T20:50:34.358Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:34.359Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Tiktok Shop Business Product DS - 2026 Start @ ORG_1bb6fcfb (instance #1)
💾 BEFORE ARCHIVING: 543 jobs in database
[2025-12-18T20:50:34.359Z] [BOT] ✅ No jobs to archive (all 543 jobs within 7-day window)
[2025-12-18T20:50:34.365Z] [BOT] 💾 Saved posted_jobs.json: 543 active jobs
[2025-12-18T20:50:34.365Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:37.366Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2025-12-18T20:50:37.366Z] [BOT] 📍 [ROUTING] "Computer Vision Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
   Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T20:50:37.619Z] [BOT] ✅ Created forum post: 🏢 Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🤖・ai-jobs
[2025-12-18T20:50:37.619Z] [BOT] ✅ Industry: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2025-12-18T20:50:39.378Z] [BOT] ✅ Created forum post: 🏢 Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
[2025-12-18T20:50:39.379Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T20:50:40.880Z] [BOT] 💾 Marked as posted: Computer Vision Specialist - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2025-12-18T20:50:40.880Z] [BOT] 💾 BEFORE ARCHIVING: 544 jobs in database
[2025-12-18T20:50:40.880Z] [BOT] ✅ No jobs to archive (all 544 jobs within 7-day window)
[2025-12-18T20:50:40.887Z] [BOT] 💾 Saved posted_jobs.json: 544 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:40.888Z] [BOT] 📍 [ROUTING] "Homography Specialist - AI Trainer" @ ORG_4ee447c5 Technologies
[2025-12-18T20:50:40.888Z] [BOT] Category: AI (matched: "AI specialization")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-18T20:50:41.103Z] [BOT] ✅ Created forum post: 🏢 Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #🤖・ai-jobs
  ✅ Industry: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies
[2025-12-18T20:50:42.778Z] [BOT] ✅ Created forum post: 🏢 Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies in #💻・remote-usa
[2025-12-18T20:50:42.778Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-18T20:50:44.279Z] [BOT] 💾 Marked as posted: Homography Specialist - AI Trainer @ ORG_4ee447c5 Technologies (instance #1)
[2025-12-18T20:50:44.280Z] [BOT] 💾 BEFORE ARCHIVING: 545 jobs in database
[2025-12-18T20:50:44.280Z] [BOT] ✅ No jobs to archive (all 545 jobs within 7-day window)
[2025-12-18T20:50:44.287Z] [BOT] 💾 Saved posted_jobs.json: 545 active jobs
[2025-12-18T20:50:44.287Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-18T20:50:47.288Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-18T20:50:47.288Z] [BOT] ⏭️  Skipping duplicate: JID_fd3b66f1 (posted within 7 days)
[2025-12-18T20:50:47.288Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_28505151 (posted within 7 days)
[2025-12-18T20:50:47.288Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_b142e3fa (posted within 7 days)
[2025-12-18T20:50:47.288Z] [BOT] ⏭️  Skipping duplicate: JID_3cc3f066 (posted within 7 days)
[2025-12-18T20:50:47.288Z] [BOT] ⏭️  Skipping duplicate: JID_c50aea90 (posted within 7 days)
[2025-12-18T20:50:47.289Z] [BOT] ⏭️  Skipping duplicate: JID_8671b952 (posted within 7 days)
[2025-12-18T20:50:47.289Z] [BOT] ⏭️  Skipping duplicate: JID_68606f1a-vistra_careers-JID_ff6edc4f-analyst_40014031-2 (posted within 7 days)
[2025-12-18T20:50:47.289Z] [BOT] ⏭️  Skipping duplicate: JID_8374ef38-cx_1001-job-25001637 (posted within 7 days)
⏭️  Skipping duplicate: JID_7814593a (posted within 7 days)
[2025-12-18T20:50:47.293Z] [BOT] ✅ Loaded pending queue: 437 total (417 pending, 20 enriched, 0 posted)
[2025-12-18T20:50:47.300Z] [BOT] ✅ Saved pending queue: 437 total (417 pending, 11 enriched, 9 posted)
📋 Updated queue: marked 9 jobs as posted
[2025-12-18T20:50:47.300Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-18T20:50:47.342Z] [BOT] 📂 Loaded 519 existing routing entries
[2025-12-18T20:50:47.385Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 528
   Timestamp: 2025-12-18T20:50:47.382Z
[2025-12-18T20:50:47.385Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_6b1de7e9.jsonl
   Total attempts: 18
[2025-12-18T20:50:47.386Z] [BOT] Successful: 18
   Failed: 0
   Skipped: 0
[2025-12-18T20:50:47.386Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
[2025-12-18T20:50:47.386Z] [BOT] Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #💻・remote-usa: 4 posts
     3. #🤠・austin: 3 posts
     4. #📈・JID_fb739488: 2 posts
[2025-12-18T20:50:47.386Z] [BOT] 5. #🌧️・seattle: 2 posts
[2025-12-18T20:50:47.386Z] [BOT] [STATS] Channel stats saved
[2025-12-18T20:50:49.400Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2800) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*