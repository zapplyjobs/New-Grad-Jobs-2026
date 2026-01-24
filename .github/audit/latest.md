# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T10:56:34.491Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T10:55:59.560Z] ========================================
[2026-01-24T10:55:59.562Z] Discord Bot Execution Log
[2026-01-24T10:55:59.562Z] Environment: GitHub Actions
[2026-01-24T10:55:59.562Z] Node Version: v20.20.0
[2026-01-24T10:55:59.562Z] ========================================
[2026-01-24T10:55:59.562Z] Environment Variables Check:
[2026-01-24T10:55:59.562Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T10:55:59.563Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T10:55:59.563Z] 
Multi-Channel Configuration:
[2026-01-24T10:55:59.563Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.563Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.564Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T10:55:59.564Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T10:55:59.564Z] 
Data Files Check:
[2026-01-24T10:55:59.564Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T10:55:59.576Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T10:55:59.576Z] 
========================================
[2026-01-24T10:55:59.576Z] Starting Enhanced Discord Bot...
[2026-01-24T10:55:59.576Z] ========================================
[2026-01-24T10:56:00.116Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T10:56:00.683Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T10:56:00.683Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T10:56:00.683Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T10:56:00.795Z] [BOT] ✅ Loaded pending queue: 2752 total (2732 pending, 20 enriched, 0 posted)
[2026-01-24T10:56:00.795Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T10:56:00.799Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T10:56:00.800Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T10:56:00.800Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T10:56:00.801Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T10:56:00.801Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T10:56:00.803Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T10:56:00.804Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T10:56:00.804Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:56:00.822Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T10:56:01.166Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T10:56:01.166Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T10:56:01.168Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T10:56:01.168Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:01.170Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:01.191Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:02.694Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T10:56:02.694Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:56:02.922Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T10:56:02.922Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T10:56:02.923Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:02.925Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:02.943Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:56:02.943Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:04.444Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T10:56:04.444Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:56:04.670Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T10:56:04.670Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T10:56:04.671Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T10:56:04.671Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:04.674Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:04.696Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T10:56:04.696Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:06.425Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T10:56:06.425Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T10:56:06.425Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:06.427Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:06.448Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:07.950Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T10:56:07.950Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:56:08.139Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T10:56:08.139Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T10:56:08.140Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T10:56:08.140Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:08.142Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:08.159Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:09.661Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T10:56:09.661Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:56:09.984Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T10:56:09.985Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T10:56:09.985Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T10:56:09.985Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:09.987Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:10.008Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:11.970Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T10:56:11.970Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T10:56:11.970Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T10:56:11.970Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:11.972Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:11.989Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:16.491Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T10:56:16.492Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T10:56:16.492Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:56:16.727Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T10:56:16.727Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T10:56:16.728Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T10:56:16.728Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:16.729Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:16.748Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:18.251Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T10:56:18.251Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:56:18.472Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T10:56:18.472Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T10:56:18.473Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T10:56:18.473Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:18.475Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:18.495Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:19.996Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T10:56:19.996Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T10:56:20.166Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T10:56:20.166Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T10:56:20.167Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T10:56:20.167Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:20.169Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:20.188Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:21.690Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:56:21.863Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T10:56:21.863Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T10:56:21.863Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:21.865Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:21.882Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:26.383Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T10:56:26.383Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T10:56:26.383Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T10:56:26.597Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T10:56:26.597Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T10:56:26.597Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:56:26.599Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:56:26.616Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:56:31.117Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T10:56:31.120Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T10:56:31.217Z] [BOT] 📂 Loaded 7891 existing routing entries
[2026-01-24T10:56:31.317Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T10:56:31.317Z] [BOT] Total entries: 7901
   Timestamp: 2026-01-24T10:56:31.284Z
[2026-01-24T10:56:31.318Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T10:56:31.318Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T10:56:31.318Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T10:56:31.318Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
[2026-01-24T10:56:31.318Z] [BOT] Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-24T10:56:31.318Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T10:56:31.319Z] [BOT] [STATS] Channel stats saved
[2026-01-24T10:56:33.337Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*