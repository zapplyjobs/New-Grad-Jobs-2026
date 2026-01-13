# Discord Bot Execution Audit
**Timestamp:** 2026-01-13T06:07:13.632Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-13T06:06:33.966Z] ========================================
[2026-01-13T06:06:33.968Z] Discord Bot Execution Log
[2026-01-13T06:06:33.968Z] Environment: GitHub Actions
[2026-01-13T06:06:33.968Z] Node Version: v20.19.6
[2026-01-13T06:06:33.968Z] ========================================
[2026-01-13T06:06:33.968Z] Environment Variables Check:
[2026-01-13T06:06:33.968Z] DISCORD_TOKEN: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-13T06:06:33.969Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-13T06:06:33.969Z] 
Multi-Channel Configuration:
[2026-01-13T06:06:33.969Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.969Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.970Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-13T06:06:33.970Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-13T06:06:33.970Z] 
Data Files Check:
[2026-01-13T06:06:33.971Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152523 bytes)
[2026-01-13T06:06:33.974Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 411968 bytes)
[2026-01-13T06:06:33.974Z] 
========================================
[2026-01-13T06:06:33.974Z] Starting Enhanced Discord Bot...
[2026-01-13T06:06:33.974Z] ========================================
[2026-01-13T06:06:34.491Z] [BOT] ✅ Loaded V2 database: 783 jobs
[2026-01-13T06:06:35.236Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-13T06:06:35.237Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-13T06:06:35.237Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-13T06:06:35.342Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Account Executive (US West - Federal Veterans Affairs) at verkada
[2026-01-13T06:06:35.345Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-13T06:06:35.345Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-13T06:06:35.345Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-13T06:06:35.346Z] [BOT] 📋 After multi-location grouping: 17 unique jobs to post
[2026-01-13T06:06:35.346Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Project Engineer, Global Services @ verkada: austin, tx united states, austin, tx united states; new york city, ny united states; philadelphia, pa united states; tampa, fl united states, philadelphia, pa united states, tampa, fl united states
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-13T06:06:35.346Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-13T06:06:35.351Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-13T06:06:35.351Z] [BOT] 📍 [ROUTING] "Enterprise Account Executive (US West - Federal Veterans Affairs)" @ verkada
[2026-01-13T06:06:35.351Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:06:35.356Z] [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-13T06:06:35.587Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada in #💲・sales-jobs
[2026-01-13T06:06:35.587Z] [BOT] ✅ Industry: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada
[2026-01-13T06:06:37.537Z] [BOT] ✅ Created forum post: 🏢 Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada in #🌧️・seattle
[2026-01-13T06:06:37.537Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-13T06:06:39.037Z] [BOT] 💾 Marked as posted: Enterprise Account Executive (US West - Federal Veterans Affairs) @ verkada (instance #1)
[2026-01-13T06:06:39.038Z] [BOT] 💾 BEFORE ARCHIVING: 784 jobs in database
[2026-01-13T06:06:39.038Z] [BOT] ✅ No jobs to archive (all 784 jobs within 7-day window)
[2026-01-13T06:06:39.049Z] [BOT] 💾 Saved posted_jobs.json: 784 active jobs
[2026-01-13T06:06:39.049Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:06:39.049Z] [BOT] 📍 [ROUTING] "Enterprise Development Manager" @ verkada
   Category: SALES (matched: "sales")
[2026-01-13T06:06:39.049Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:06:39.258Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Manager @ verkada in #💲・sales-jobs
[2026-01-13T06:06:39.258Z] [BOT] ✅ Industry: Enterprise Development Manager @ verkada
[2026-01-13T06:06:41.151Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Manager @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T06:06:42.650Z] [BOT] 💾 Marked as posted: Enterprise Development Manager @ verkada (instance #1)
[2026-01-13T06:06:42.650Z] [BOT] 💾 BEFORE ARCHIVING: 785 jobs in database
[2026-01-13T06:06:42.651Z] [BOT] ✅ No jobs to archive (all 785 jobs within 7-day window)
[2026-01-13T06:06:42.657Z] [BOT] 💾 Saved posted_jobs.json: 785 active jobs
[2026-01-13T06:06:42.657Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:06:42.657Z] [BOT] 📍 [ROUTING] "Enterprise Development Representative" @ verkada
   Category: SALES (matched: "sales")
[2026-01-13T06:06:42.657Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-13T06:06:42.876Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Representative @ verkada in #💲・sales-jobs
  ✅ Industry: Enterprise Development Representative @ verkada
[2026-01-13T06:06:44.602Z] [BOT] ✅ Created forum post: 🏢 Enterprise Development Representative @ verkada in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-13T06:06:46.102Z] [BOT] 💾 Marked as posted: Enterprise Development Representative @ verkada (instance #1)
[2026-01-13T06:06:46.102Z] [BOT] 💾 BEFORE ARCHIVING: 786 jobs in database
[2026-01-13T06:06:46.103Z] [BOT] ✅ No jobs to archive (all 786 jobs within 7-day window)
[2026-01-13T06:06:46.109Z] [BOT] 💾 Saved posted_jobs.json: 786 active jobs
[2026-01-13T06:06:46.109Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:06:49.109Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-13T06:06:49.111Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Carolinas " @ verkada
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:06:49.412Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Carolinas  @ verkada in #💻・tech-jobs
[2026-01-13T06:06:49.412Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Carolinas  @ verkada
[2026-01-13T06:06:50.914Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Carolinas  @ verkada (instance #1)
[2026-01-13T06:06:50.914Z] [BOT] 💾 BEFORE ARCHIVING: 787 jobs in database
[2026-01-13T06:06:50.915Z] [BOT] ✅ No jobs to archive (all 787 jobs within 7-day window)
[2026-01-13T06:06:50.921Z] [BOT] 💾 Saved posted_jobs.json: 787 active jobs
[2026-01-13T06:06:50.921Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:06:50.921Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Greater Atlanta Area" @ verkada
[2026-01-13T06:06:50.922Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:06:51.149Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Greater Atlanta Area @ verkada in #💻・tech-jobs
[2026-01-13T06:06:51.149Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada
[2026-01-13T06:06:52.650Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Greater Atlanta Area @ verkada (instance #1)
[2026-01-13T06:06:52.650Z] [BOT] 💾 BEFORE ARCHIVING: 788 jobs in database
[2026-01-13T06:06:52.651Z] [BOT] ✅ No jobs to archive (all 788 jobs within 7-day window)
[2026-01-13T06:06:52.657Z] [BOT] 💾 Saved posted_jobs.json: 788 active jobs
[2026-01-13T06:06:52.657Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:06:52.657Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Mid-West, SLED" @ verkada
[2026-01-13T06:06:52.657Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:06:53.012Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Mid-West, SLED @ verkada in #💻・tech-jobs
[2026-01-13T06:06:53.012Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Mid-West, SLED @ verkada
[2026-01-13T06:06:54.755Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Mid-West, SLED @ verkada in #🌆・chicago
[2026-01-13T06:06:54.755Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-13T06:06:56.256Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Mid-West, SLED @ verkada (instance #1)
[2026-01-13T06:06:56.256Z] [BOT] 💾 BEFORE ARCHIVING: 789 jobs in database
[2026-01-13T06:06:56.257Z] [BOT] ✅ No jobs to archive (all 789 jobs within 7-day window)
[2026-01-13T06:06:56.263Z] [BOT] 💾 Saved posted_jobs.json: 789 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-13T06:06:56.263Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Northeast" @ verkada
[2026-01-13T06:06:56.263Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:06:56.466Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Northeast @ verkada in #💻・tech-jobs
[2026-01-13T06:06:56.466Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Northeast @ verkada
[2026-01-13T06:06:58.259Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Northeast @ verkada in #🗽・new-york
[2026-01-13T06:06:58.259Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-13T06:06:59.759Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Northeast @ verkada (instance #1)
[2026-01-13T06:06:59.759Z] [BOT] 💾 BEFORE ARCHIVING: 790 jobs in database
[2026-01-13T06:06:59.760Z] [BOT] ✅ No jobs to archive (all 790 jobs within 7-day window)
[2026-01-13T06:06:59.765Z] [BOT] 💾 Saved posted_jobs.json: 790 active jobs
[2026-01-13T06:06:59.765Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:06:59.765Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Rocky Mountains" @ verkada
[2026-01-13T06:06:59.766Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:07:00.143Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Rocky Mountains @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Rocky Mountains @ verkada
[2026-01-13T06:07:01.643Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Rocky Mountains @ verkada (instance #1)
[2026-01-13T06:07:01.643Z] [BOT] 💾 BEFORE ARCHIVING: 791 jobs in database
[2026-01-13T06:07:01.644Z] [BOT] ✅ No jobs to archive (all 791 jobs within 7-day window)
[2026-01-13T06:07:01.650Z] [BOT] 💾 Saved posted_jobs.json: 791 active jobs
[2026-01-13T06:07:01.650Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:07:01.650Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southeast" @ verkada
[2026-01-13T06:07:01.650Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:07:01.923Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Southeast @ verkada in #💻・tech-jobs
[2026-01-13T06:07:01.923Z] [BOT] ✅ Industry: Enterprise Solutions Engineer, Southeast @ verkada
[2026-01-13T06:07:03.424Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Southeast @ verkada (instance #1)
[2026-01-13T06:07:03.424Z] [BOT] 💾 BEFORE ARCHIVING: 792 jobs in database
[2026-01-13T06:07:03.425Z] [BOT] ✅ No jobs to archive (all 792 jobs within 7-day window)
[2026-01-13T06:07:03.430Z] [BOT] 💾 Saved posted_jobs.json: 792 active jobs
[2026-01-13T06:07:03.431Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:07:03.431Z] [BOT] 📍 [ROUTING] "Enterprise Solutions Engineer, Southern California" @ verkada
[2026-01-13T06:07:03.431Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-13T06:07:03.671Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Southern California @ verkada in #💻・tech-jobs
  ✅ Industry: Enterprise Solutions Engineer, Southern California @ verkada
[2026-01-13T06:07:05.435Z] [BOT] ✅ Created forum post: 🏢 Enterprise Solutions Engineer, Southern California @ verkada in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-13T06:07:06.936Z] [BOT] 💾 Marked as posted: Enterprise Solutions Engineer, Southern California @ verkada (instance #1)
[2026-01-13T06:07:06.936Z] [BOT] 💾 BEFORE ARCHIVING: 793 jobs in database
[2026-01-13T06:07:06.937Z] [BOT] ✅ No jobs to archive (all 793 jobs within 7-day window)
[2026-01-13T06:07:06.943Z] [BOT] 💾 Saved posted_jobs.json: 793 active jobs
[2026-01-13T06:07:06.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-13T06:07:09.944Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-13T06:07:09.944Z] [BOT] ⏭️  Skipping duplicate: JID_81c0b62d (posted within 7 days)
[2026-01-13T06:07:09.944Z] [BOT] ⏭️  Skipping duplicate: JID_bf0d2987 (posted within 7 days)
⏭️  Skipping duplicate: JID_ce87da78 (posted within 7 days)
[2026-01-13T06:07:09.944Z] [BOT] ⏭️  Skipping duplicate: JID_97e7cb0f (posted within 7 days)
[2026-01-13T06:07:09.945Z] [BOT] ⏭️  Skipping duplicate: JID_93d9360f (posted within 7 days)
⏭️  Skipping duplicate: JID_152141f5 (posted within 7 days)
⏭️  Skipping duplicate: JID_2c363f0d (posted within 7 days)
[2026-01-13T06:07:09.945Z] [BOT] ⏭️  Skipping duplicate: JID_b75dc978 (posted within 7 days)
[2026-01-13T06:07:09.945Z] [BOT] ⏭️  Skipping duplicate: JID_64e076e0 (posted within 7 days)
[2026-01-13T06:07:09.945Z] [BOT] ⏭️  Skipping duplicate: JID_3fa8d492 (posted within 7 days)
[2026-01-13T06:07:10.058Z] [BOT] ✅ Loaded pending queue: 2700 total (2680 pending, 20 enriched, 0 posted)
[2026-01-13T06:07:10.220Z] [BOT] ✅ Saved pending queue: 2700 total (2680 pending, 10 enriched, 10 posted)
[2026-01-13T06:07:10.220Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-13T06:07:10.270Z] [BOT] 📂 Loaded 2925 existing routing entries
[2026-01-13T06:07:10.327Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-13T06:07:10.327Z] [BOT] Total entries: 2935
   Timestamp: 2026-01-13T06:07:10.314Z
[2026-01-13T06:07:10.327Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_540e3454.jsonl
   Total attempts: 16
[2026-01-13T06:07:10.327Z] [BOT] Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-13T06:07:10.328Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-13T06:07:10.328Z] [BOT] Total posts: 16
   Channels used: 7
   Top channels:
[2026-01-13T06:07:10.328Z] [BOT] 1. #💻・tech-jobs: 7 posts
     2. #💲・sales-jobs: 3 posts
     3. #🤠・austin: 2 posts
     4. #🌧️・seattle: 1 posts
     5. #🌆・chicago: 1 posts
[2026-01-13T06:07:10.328Z] [BOT] [STATS] Channel stats saved
[2026-01-13T06:07:12.353Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*