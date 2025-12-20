# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T21:49:35.003Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T21:48:45.814Z] ========================================
[2025-12-20T21:48:45.817Z] Discord Bot Execution Log
[2025-12-20T21:48:45.817Z] Environment: GitHub Actions
[2025-12-20T21:48:45.818Z] Node Version: v20.19.6
[2025-12-20T21:48:45.818Z] ========================================
[2025-12-20T21:48:45.818Z] Environment Variables Check:
[2025-12-20T21:48:45.818Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T21:48:45.818Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.818Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T21:48:45.818Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T21:48:45.818Z] 
Multi-Channel Configuration:
[2025-12-20T21:48:45.818Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T21:48:45.819Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T21:48:45.819Z] 
Data Files Check:
[2025-12-20T21:48:45.820Z] .github/data/new_jobs.json: ✅ Exists (10 items, 29829 bytes)
[2025-12-20T21:48:45.824Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 434835 bytes)
[2025-12-20T21:48:45.824Z] 
========================================
[2025-12-20T21:48:45.824Z] Starting Enhanced Discord Bot...
[2025-12-20T21:48:45.824Z] ========================================
[2025-12-20T21:48:46.280Z] [BOT] ✅ Loaded V2 database: 747 jobs
[2025-12-20T21:48:47.121Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T21:48:47.121Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T21:48:47.121Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T21:48:47.122Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T21:48:47.168Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T21:48:47.213Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T21:48:47.215Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T21:48:47.215Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T21:48:47.216Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T21:48:47.216Z] [BOT] 📋 After multi-location grouping: 10 unique jobs to post
[2025-12-20T21:48:47.217Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T21:48:47.222Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2025-12-20T21:48:47.222Z] [BOT] 📍 [ROUTING] "RDMA Network Software Development Engineer - High Speed Network" @ ORG_08c9a13c
[2025-12-20T21:48:47.223Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:48:47.239Z] [BOT ERROR] (node:2835) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T21:48:47.601Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c
[2025-12-20T21:48:49.293Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T21:48:50.794Z] [BOT] 💾 Marked as posted: RDMA Network Software Development Engineer - High Speed Network @ ORG_08c9a13c (instance #1)
[2025-12-20T21:48:50.794Z] [BOT] 💾 BEFORE ARCHIVING: 748 jobs in database
[2025-12-20T21:48:50.795Z] [BOT] ✅ No jobs to archive (all 748 jobs within 7-day window)
[2025-12-20T21:48:50.801Z] [BOT] 💾 Saved posted_jobs.json: 748 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:48:50.802Z] [BOT] 📍 [ROUTING] "RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start" @ ORG_08c9a13c
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:48:50.984Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c in #💻・tech-jobs
  ✅ Industry: RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c
[2025-12-20T21:48:52.710Z] [BOT] ✅ Created forum post: 🏢 RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T21:48:54.212Z] [BOT] 💾 Marked as posted: RDMA Network Software Development Engineer Graduate - High Speed Network - 2026 Start @ ORG_08c9a13c (instance #1)
💾 BEFORE ARCHIVING: 749 jobs in database
[2025-12-20T21:48:54.212Z] [BOT] ✅ No jobs to archive (all 749 jobs within 7-day window)
[2025-12-20T21:48:54.218Z] [BOT] 💾 Saved posted_jobs.json: 749 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:48:54.218Z] [BOT] 📍 [ROUTING] "Global Financial Crimes - Issues Management - Reporting & Data Analysis" @ ORG_45e3580d UFG
[2025-12-20T21:48:54.218Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:48:54.683Z] [BOT] ✅ Created forum post: 🏢 Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG in #💻・tech-jobs
  ✅ Industry: Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG
[2025-12-20T21:48:56.437Z] [BOT] ✅ Created forum post: 🏢 Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T21:48:57.939Z] [BOT] 💾 Marked as posted: Global Financial Crimes - Issues Management - Reporting & Data Analysis @ ORG_45e3580d UFG (instance #1)
💾 BEFORE ARCHIVING: 750 jobs in database
[2025-12-20T21:48:57.939Z] [BOT] ✅ No jobs to archive (all 750 jobs within 7-day window)
[2025-12-20T21:48:57.946Z] [BOT] 💾 Saved posted_jobs.json: 750 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:48:57.946Z] [BOT] 📍 [ROUTING] "Technical Research Associate - AI" @ ORG_8bfdb93c Studios
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:48:58.352Z] [BOT] ✅ Created forum post: 🏢 Technical Research Associate - AI @ ORG_8bfdb93c Studios in #💻・tech-jobs
  ✅ Industry: Technical Research Associate - AI @ ORG_8bfdb93c Studios
[2025-12-20T21:49:00.056Z] [BOT] ✅ Created forum post: 🏢 Technical Research Associate - AI @ ORG_8bfdb93c Studios in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T21:49:01.557Z] [BOT] 💾 Marked as posted: Technical Research Associate - AI @ ORG_8bfdb93c Studios (instance #1)
[2025-12-20T21:49:01.558Z] [BOT] 💾 BEFORE ARCHIVING: 751 jobs in database
[2025-12-20T21:49:01.558Z] [BOT] ✅ No jobs to archive (all 751 jobs within 7-day window)
[2025-12-20T21:49:01.563Z] [BOT] 💾 Saved posted_jobs.json: 751 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:49:01.564Z] [BOT] 📍 [ROUTING] "Maintenance Planning Tech" @ ORG_5ef6ff2f Petroleum
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:49:01.839Z] [BOT] ✅ Created forum post: 🏢 Maintenance Planning Tech @ ORG_5ef6ff2f Petroleum in #💻・tech-jobs
  ✅ Industry: Maintenance Planning Tech @ ORG_5ef6ff2f Petroleum
[2025-12-20T21:49:03.510Z] [BOT] ✅ Created forum post: 🏢 Maintenance Planning Tech @ ORG_5ef6ff2f Petroleum in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T21:49:05.011Z] [BOT] 💾 Marked as posted: Maintenance Planning Tech @ ORG_5ef6ff2f Petroleum (instance #1)
💾 BEFORE ARCHIVING: 752 jobs in database
[2025-12-20T21:49:05.012Z] [BOT] ✅ No jobs to archive (all 752 jobs within 7-day window)
[2025-12-20T21:49:05.018Z] [BOT] 💾 Saved posted_jobs.json: 752 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:49:05.019Z] [BOT] 📍 [ROUTING] "Financial Software Engineer" @ ORG_05feacf4 Associates
[2025-12-20T21:49:05.019Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:49:05.234Z] [BOT] ✅ Created forum post: 🏢 Financial Software Engineer @ ORG_05feacf4 Associates in #💻・tech-jobs
  ✅ Industry: Financial Software Engineer @ ORG_05feacf4 Associates
[2025-12-20T21:49:07.053Z] [BOT] ✅ Created forum post: 🏢 Financial Software Engineer @ ORG_05feacf4 Associates in #🚌・boston
[2025-12-20T21:49:07.053Z] [BOT] ✅ Location: 🚌・boston
[2025-12-20T21:49:08.554Z] [BOT] 💾 Marked as posted: Financial Software Engineer @ ORG_05feacf4 Associates (instance #1)
💾 BEFORE ARCHIVING: 753 jobs in database
[2025-12-20T21:49:08.554Z] [BOT] ✅ No jobs to archive (all 753 jobs within 7-day window)
[2025-12-20T21:49:08.561Z] [BOT] 💾 Saved posted_jobs.json: 753 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:49:08.561Z] [BOT] 📍 [ROUTING] "Financial Systems Analyst 1" @ ORG_c625ca57 Brisbois
   Category: TECH (default)
[2025-12-20T21:49:08.561Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:49:08.755Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・tech-jobs
  ✅ Industry: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois
[2025-12-20T21:49:10.495Z] [BOT] ✅ Created forum post: 🏢 Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T21:49:11.995Z] [BOT] 💾 Marked as posted: Financial Systems Analyst 1 @ ORG_c625ca57 Brisbois (instance #1)
💾 BEFORE ARCHIVING: 754 jobs in database
[2025-12-20T21:49:11.996Z] [BOT] ✅ No jobs to archive (all 754 jobs within 7-day window)
[2025-12-20T21:49:12.001Z] [BOT] 💾 Saved posted_jobs.json: 754 active jobs
[2025-12-20T21:49:12.001Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:49:15.002Z] [BOT] 📌 Posting 2 jobs to #📁・JID_e938df7b
[2025-12-20T21:49:15.002Z] [BOT] 📍 [ROUTING] "Humanoid Robot Operator" @ ORG_1f5be668
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-20T21:49:15.295Z] [BOT] ✅ Created forum post: 🏢 Humanoid Robot Operator @ ORG_1f5be668 in #📁・JID_e938df7b
  ✅ Industry: Humanoid Robot Operator @ ORG_1f5be668
[2025-12-20T21:49:17.074Z] [BOT] ✅ Created forum post: 🏢 Humanoid Robot Operator @ ORG_1f5be668 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-20T21:49:18.576Z] [BOT] 💾 Marked as posted: Humanoid Robot Operator @ ORG_1f5be668 (instance #1)
[2025-12-20T21:49:18.576Z] [BOT] 💾 BEFORE ARCHIVING: 755 jobs in database
[2025-12-20T21:49:18.577Z] [BOT] ✅ No jobs to archive (all 755 jobs within 7-day window)
[2025-12-20T21:49:18.584Z] [BOT] 💾 Saved posted_jobs.json: 755 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:49:18.584Z] [BOT] 📍 [ROUTING] "Instrument Operator 1" @ ORG_bdc26476
[2025-12-20T21:49:18.584Z] [BOT] Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-20T21:49:18.856Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator 1 @ ORG_bdc26476 in #📁・JID_e938df7b
[2025-12-20T21:49:18.856Z] [BOT] ✅ Industry: Instrument Operator 1 @ ORG_bdc26476
[2025-12-20T21:49:20.918Z] [BOT] ✅ Created forum post: 🏢 Instrument Operator 1 @ ORG_bdc26476 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T21:49:22.420Z] [BOT] 💾 Marked as posted: Instrument Operator 1 @ ORG_bdc26476 (instance #1)
[2025-12-20T21:49:22.420Z] [BOT] 💾 BEFORE ARCHIVING: 756 jobs in database
[2025-12-20T21:49:22.420Z] [BOT] ✅ No jobs to archive (all 756 jobs within 7-day window)
[2025-12-20T21:49:22.428Z] [BOT] 💾 Saved posted_jobs.json: 756 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:49:25.428Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-20T21:49:25.428Z] [BOT] 📍 [ROUTING] "Utility Analyst 1" @ ORG_43fee717
[2025-12-20T21:49:25.428Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2025-12-20T21:49:25.728Z] [BOT] ✅ Created forum post: 🏢 Utility Analyst 1 @ ORG_43fee717 in #📣・marketing-jobs
  ✅ Industry: Utility Analyst 1 @ ORG_43fee717
[2025-12-20T21:49:27.400Z] [BOT] ✅ Created forum post: 🏢 Utility Analyst 1 @ ORG_43fee717 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T21:49:28.901Z] [BOT] 💾 Marked as posted: Utility Analyst 1 @ ORG_43fee717 (instance #1)
[2025-12-20T21:49:28.901Z] [BOT] 💾 BEFORE ARCHIVING: 757 jobs in database
[2025-12-20T21:49:28.902Z] [BOT] ✅ No jobs to archive (all 757 jobs within 7-day window)
[2025-12-20T21:49:28.908Z] [BOT] 💾 Saved posted_jobs.json: 757 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:49:31.910Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2025-12-20T21:49:31.910Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_74d17a9c-detail (posted within 7 days)
⏭️  Skipping duplicate: JID_95ce1ea3-CH_df998353-detail (posted within 7 days)
[2025-12-20T21:49:31.910Z] [BOT] ⏭️  Skipping duplicate: JID_d7670d15-analyst_10070365-wd (posted within 7 days)
[2025-12-20T21:49:31.910Z] [BOT] ⏭️  Skipping duplicate: JID_6940c6c8 (posted within 7 days)
[2025-12-20T21:49:31.910Z] [BOT] ⏭️  Skipping duplicate: JID_8eeaf014-tech_jr102869 (posted within 7 days)
[2025-12-20T21:49:31.910Z] [BOT] ⏭️  Skipping duplicate: JID_28bbf6ee (posted within 7 days)
[2025-12-20T21:49:31.910Z] [BOT] ⏭️  Skipping duplicate: JID_9f227841 (posted within 7 days)
⏭️  Skipping duplicate: JID_8d1f6c6b (posted within 7 days)
⏭️  Skipping duplicate: JID_dd9d4d40 (posted within 7 days)
[2025-12-20T21:49:31.910Z] [BOT] ⏭️  Skipping duplicate: JID_3cab66e1 (posted within 7 days)
[2025-12-20T21:49:31.912Z] [BOT] ✅ Loaded pending queue: 193 total (173 pending, 20 enriched, 0 posted)
[2025-12-20T21:49:31.915Z] [BOT] ✅ Saved pending queue: 193 total (173 pending, 10 enriched, 10 posted)
[2025-12-20T21:49:31.915Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T21:49:31.958Z] [BOT] 📂 Loaded 816 existing routing entries
[2025-12-20T21:49:32.006Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 826
   Timestamp: 2025-12-20T21:49:31.999Z
📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 20
   Channels used: 7
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #🌉・san-francisco: 4 posts
     3. #💻・remote-usa: 4 posts
     4. #📁・JID_e938df7b: 2 posts
     5. #🌧️・seattle: 1 posts
[STATS] Channel stats saved
[2025-12-20T21:49:34.015Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2835) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*