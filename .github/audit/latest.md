# Discord Bot Execution Audit
**Timestamp:** 2025-12-20T21:23:35.253Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 9
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-20T21:22:51.013Z] ========================================
[2025-12-20T21:22:51.015Z] Discord Bot Execution Log
[2025-12-20T21:22:51.015Z] Environment: GitHub Actions
[2025-12-20T21:22:51.015Z] Node Version: v20.19.6
[2025-12-20T21:22:51.015Z] ========================================
[2025-12-20T21:22:51.015Z] Environment Variables Check:
[2025-12-20T21:22:51.015Z] DISCORD_TOKEN: ✅ Set
[2025-12-20T21:22:51.015Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.015Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-20T21:22:51.015Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-20T21:22:51.016Z] 
Multi-Channel Configuration:
[2025-12-20T21:22:51.016Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-20T21:22:51.016Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-20T21:22:51.016Z] 
Data Files Check:
[2025-12-20T21:22:51.017Z] .github/data/new_jobs.json: ✅ Exists (10 items, 24326 bytes)
[2025-12-20T21:22:51.020Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 423887 bytes)
[2025-12-20T21:22:51.020Z] 
========================================
[2025-12-20T21:22:51.020Z] Starting Enhanced Discord Bot...
[2025-12-20T21:22:51.020Z] ========================================
[2025-12-20T21:22:51.548Z] [BOT] ✅ Loaded V2 database: 727 jobs
[2025-12-20T21:22:52.162Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-20T21:22:52.162Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-20T21:22:52.163Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-20T21:22:52.163Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-20T21:22:52.209Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-20T21:22:52.254Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 47
[2025-12-20T21:22:52.256Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-20T21:22:52.256Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-20T21:22:52.256Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-20T21:22:52.257Z] [BOT] 📋 After multi-location grouping: 9 unique jobs to post
[2025-12-20T21:22:52.257Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Software Engineer - Product @ Meta: nyc, cambridge
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 9 jobs...
[2025-12-20T21:22:52.257Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-20T21:22:52.260Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-20T21:22:52.261Z] [BOT] 📍 [ROUTING] "Assistant Professor of Computing and Information Science - Machine Learning" @ ORG_9d38443e of Maine System
[2025-12-20T21:22:52.261Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T21:22:52.261Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-20T21:22:52.278Z] [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-20T21:22:52.428Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine in #🤖・ai-jobs
  ✅ Industry: Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine System
[2025-12-20T21:22:54.145Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine in #💻・remote-usa
[2025-12-20T21:22:54.146Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T21:22:55.647Z] [BOT] 💾 Marked as posted: Assistant Professor of Computing and Information Science - Machine Learning @ ORG_9d38443e of Maine System (instance #1)
[2025-12-20T21:22:55.648Z] [BOT] 💾 BEFORE ARCHIVING: 728 jobs in database
[2025-12-20T21:22:55.648Z] [BOT] ✅ No jobs to archive (all 728 jobs within 7-day window)
[2025-12-20T21:22:55.661Z] [BOT] 💾 Saved posted_jobs.json: 728 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:22:55.662Z] [BOT] 📍 [ROUTING] "Robot Operator" @ ORG_830213f1 AI
[2025-12-20T21:22:55.663Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T21:22:56.039Z] [BOT] ✅ Created forum post: 🏢 Robot Operator @ ORG_830213f1 AI in #🤖・ai-jobs
  ✅ Industry: Robot Operator @ ORG_830213f1 AI
[2025-12-20T21:22:59.324Z] [BOT] ✅ Created forum post: 🏢 Robot Operator @ ORG_830213f1 AI in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2025-12-20T21:23:00.826Z] [BOT] 💾 Marked as posted: Robot Operator @ ORG_830213f1 AI (instance #1)
[2025-12-20T21:23:00.826Z] [BOT] 💾 BEFORE ARCHIVING: 729 jobs in database
[2025-12-20T21:23:00.826Z] [BOT] ✅ No jobs to archive (all 729 jobs within 7-day window)
[2025-12-20T21:23:00.833Z] [BOT] 💾 Saved posted_jobs.json: 729 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:00.835Z] [BOT] 📍 [ROUTING] "Remote Internet Search Quality Rater - English - United States" @ ORG_066855bc
[2025-12-20T21:23:00.835Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T21:23:01.506Z] [BOT] ✅ Created forum post: 🏢 Remote Internet Search Quality Rater - English - United States @ ORG_066855bc in #🤖・ai-jobs
[2025-12-20T21:23:01.506Z] [BOT] ✅ Industry: Remote Internet Search Quality Rater - English - United States @ ORG_066855bc
[2025-12-20T21:23:03.167Z] [BOT] ✅ Created forum post: 🏢 Remote Internet Search Quality Rater - English - United States @ ORG_066855bc in #🌧️・seattle
[2025-12-20T21:23:03.167Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T21:23:04.668Z] [BOT] 💾 Marked as posted: Remote Internet Search Quality Rater - English - United States @ ORG_066855bc (instance #1)
[2025-12-20T21:23:04.668Z] [BOT] 💾 BEFORE ARCHIVING: 730 jobs in database
[2025-12-20T21:23:04.669Z] [BOT] ✅ No jobs to archive (all 730 jobs within 7-day window)
[2025-12-20T21:23:04.675Z] [BOT] 💾 Saved posted_jobs.json: 730 active jobs
[2025-12-20T21:23:04.675Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:04.676Z] [BOT] 📍 [ROUTING] "Scout Search Quality Rater - Spanish - USA" @ ORG_066855bc
[2025-12-20T21:23:04.676Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-20T21:23:04.819Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater - Spanish - USA @ ORG_066855bc in #🤖・ai-jobs
[2025-12-20T21:23:04.820Z] [BOT] ✅ Industry: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc
[2025-12-20T21:23:06.665Z] [BOT] ✅ Created forum post: 🏢 Scout Search Quality Rater - Spanish - USA @ ORG_066855bc in #🌧️・seattle
[2025-12-20T21:23:06.665Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-20T21:23:08.167Z] [BOT] 💾 Marked as posted: Scout Search Quality Rater - Spanish - USA @ ORG_066855bc (instance #1)
[2025-12-20T21:23:08.167Z] [BOT] 💾 BEFORE ARCHIVING: 731 jobs in database
[2025-12-20T21:23:08.168Z] [BOT] ✅ No jobs to archive (all 731 jobs within 7-day window)
[2025-12-20T21:23:08.175Z] [BOT] 💾 Saved posted_jobs.json: 731 active jobs
[2025-12-20T21:23:08.175Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:11.175Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2025-12-20T21:23:11.176Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_f4398599
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:23:11.345Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f4398599 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_f4398599
[2025-12-20T21:23:13.500Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_f4398599 in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2025-12-20T21:23:15.001Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_f4398599 (instance #1)
[2025-12-20T21:23:15.001Z] [BOT] 💾 BEFORE ARCHIVING: 732 jobs in database
[2025-12-20T21:23:15.001Z] [BOT] ✅ No jobs to archive (all 732 jobs within 7-day window)
[2025-12-20T21:23:15.008Z] [BOT] 💾 Saved posted_jobs.json: 732 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:15.009Z] [BOT] 📍 [ROUTING] "Application Engineer" @ ORG_86554b90
   Category: TECH (matched: "engineer/engineering")
[2025-12-20T21:23:15.009Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:23:15.158Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_86554b90 in #💻・tech-jobs
  ✅ Industry: Application Engineer @ ORG_86554b90
[2025-12-20T21:23:16.939Z] [BOT] ✅ Created forum post: 🏢 Application Engineer @ ORG_86554b90 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T21:23:18.440Z] [BOT] 💾 Marked as posted: Application Engineer @ ORG_86554b90 (instance #1)
[2025-12-20T21:23:18.440Z] [BOT] 💾 BEFORE ARCHIVING: 733 jobs in database
[2025-12-20T21:23:18.441Z] [BOT] ✅ No jobs to archive (all 733 jobs within 7-day window)
[2025-12-20T21:23:18.448Z] [BOT] 💾 Saved posted_jobs.json: 733 active jobs
[2025-12-20T21:23:18.448Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:18.448Z] [BOT] 📍 [ROUTING] "Software Engineer, Applications and Customer Solutions" @ ORG_cb767a2d
[2025-12-20T21:23:18.448Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:23:18.879Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d in #💻・tech-jobs
  ✅ Industry: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d
[2025-12-20T21:23:21.104Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-20T21:23:22.604Z] [BOT] 💾 Marked as posted: Software Engineer, Applications and Customer Solutions @ ORG_cb767a2d (instance #1)
[2025-12-20T21:23:22.604Z] [BOT] 💾 BEFORE ARCHIVING: 734 jobs in database
[2025-12-20T21:23:22.605Z] [BOT] ✅ No jobs to archive (all 734 jobs within 7-day window)
[2025-12-20T21:23:22.612Z] [BOT] 💾 Saved posted_jobs.json: 734 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:22.612Z] [BOT] 📍 [ROUTING] "Software Engineer - Product" @ ORG_4f749de7
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:23:22.786Z] [BOT] ✅ Created forum post: 🔵 Software Engineer - Product @ ORG_4f749de7 in #💻・tech-jobs
[2025-12-20T21:23:22.787Z] [BOT] ✅ Industry: Software Engineer - Product @ ORG_4f749de7
[2025-12-20T21:23:24.521Z] [BOT] ✅ Created forum post: 🔵 Software Engineer - Product @ ORG_4f749de7 in #🗽・new-york
[2025-12-20T21:23:24.521Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-20T21:23:26.023Z] [BOT] 💾 Marked as posted: Software Engineer - Product @ ORG_4f749de7 (instance #1)
[2025-12-20T21:23:26.023Z] [BOT] 💾 BEFORE ARCHIVING: 735 jobs in database
[2025-12-20T21:23:26.024Z] [BOT] ✅ No jobs to archive (all 735 jobs within 7-day window)
[2025-12-20T21:23:26.031Z] [BOT] 💾 Saved posted_jobs.json: 735 active jobs
[2025-12-20T21:23:26.031Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:26.031Z] [BOT] 💾 Marked as posted: Software Engineer - Product @ ORG_4f749de7 (instance #1)
[2025-12-20T21:23:26.031Z] [BOT] 💾 BEFORE ARCHIVING: 736 jobs in database
[2025-12-20T21:23:26.032Z] [BOT] ✅ No jobs to archive (all 736 jobs within 7-day window)
[2025-12-20T21:23:26.038Z] [BOT] 💾 Saved posted_jobs.json: 736 active jobs
[2025-12-20T21:23:26.039Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:26.039Z] [BOT] 📍 [ROUTING] "Application Engineer - Mandarin" @ ORG_655c6ec2
[2025-12-20T21:23:26.039Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-20T21:23:26.209Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Mandarin @ ORG_655c6ec2 in #💻・tech-jobs
[2025-12-20T21:23:26.209Z] [BOT] ✅ Industry: Application Engineer - Mandarin @ ORG_655c6ec2
[2025-12-20T21:23:27.962Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Mandarin @ ORG_655c6ec2 in #💻・remote-usa
[2025-12-20T21:23:27.962Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-20T21:23:29.464Z] [BOT] 💾 Marked as posted: Application Engineer - Mandarin @ ORG_655c6ec2 (instance #1)
[2025-12-20T21:23:29.464Z] [BOT] 💾 BEFORE ARCHIVING: 737 jobs in database
[2025-12-20T21:23:29.465Z] [BOT] ✅ No jobs to archive (all 737 jobs within 7-day window)
[2025-12-20T21:23:29.471Z] [BOT] 💾 Saved posted_jobs.json: 737 active jobs
[2025-12-20T21:23:29.471Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-20T21:23:32.471Z] [BOT] 🎉 Posting complete! Successfully posted: 9, Failed: 0
[2025-12-20T21:23:32.472Z] [BOT] ⏭️  Skipping duplicate: JID_7beef9bb-cx_1-job-725 (posted within 7 days)
[2025-12-20T21:23:32.472Z] [BOT] ⏭️  Skipping duplicate: JID_90a61d75-cx_1-job-28752 (posted within 7 days)
[2025-12-20T21:23:32.472Z] [BOT] ⏭️  Skipping duplicate: JID_cb308957-engineer_jr_1042522 (posted within 7 days)
[2025-12-20T21:23:32.472Z] [BOT] ⏭️  Skipping duplicate: JID_a175d828 (posted within 7 days)
[2025-12-20T21:23:32.472Z] [BOT] ⏭️  Skipping duplicate: JID_7b6a3d64 (posted within 7 days)
[2025-12-20T21:23:32.473Z] [BOT] ⏭️  Skipping duplicate: JID_13c47aaf (posted within 7 days)
⏭️  Skipping duplicate: JID_fda9478b (posted within 7 days)
⏭️  Skipping duplicate: JID_e23c41f3 (posted within 7 days)
⏭️  Skipping duplicate: JID_3e4eb060 (posted within 7 days)
[2025-12-20T21:23:32.475Z] [BOT] ✅ Loaded pending queue: 213 total (193 pending, 20 enriched, 0 posted)
[2025-12-20T21:23:32.478Z] [BOT] ✅ Saved pending queue: 213 total (193 pending, 11 enriched, 9 posted)
[2025-12-20T21:23:32.478Z] [BOT] 📋 Updated queue: marked 9 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-20T21:23:32.521Z] [BOT] 📂 Loaded 800 existing routing entries
[2025-12-20T21:23:32.569Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 9
   Total entries: 809
   Timestamp: 2025-12-20T21:23:32.563Z
📝 Discord posting log saved: .github/logs/JID_8d1a614e.jsonl
   Total attempts: 18
   Successful: 18
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 18
   Channels used: 6
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #💻・remote-usa: 4 posts
     4. #🌧️・seattle: 3 posts
     5. #🦢・los-angeles: 1 posts
[STATS] Channel stats saved
[2025-12-20T21:23:34.581Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2317) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*