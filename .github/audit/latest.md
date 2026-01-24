# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T16:46:37.038Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T16:46:01.819Z] ========================================
[2026-01-24T16:46:01.820Z] Discord Bot Execution Log
[2026-01-24T16:46:01.820Z] Environment: GitHub Actions
[2026-01-24T16:46:01.820Z] Node Version: v20.20.0
[2026-01-24T16:46:01.821Z] ========================================
[2026-01-24T16:46:01.821Z] Environment Variables Check:
[2026-01-24T16:46:01.821Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T16:46:01.821Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T16:46:01.821Z] 
Multi-Channel Configuration:
[2026-01-24T16:46:01.821Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.821Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T16:46:01.822Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T16:46:01.822Z] 
Data Files Check:
[2026-01-24T16:46:01.822Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T16:46:01.827Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661868 bytes)
[2026-01-24T16:46:01.827Z] 
========================================
[2026-01-24T16:46:01.827Z] Starting Enhanced Discord Bot...
[2026-01-24T16:46:01.827Z] ========================================
[2026-01-24T16:46:02.283Z] [BOT] ✅ Loaded V2 database: 1166 jobs
[2026-01-24T16:46:03.135Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T16:46:03.135Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T16:46:03.135Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T16:46:03.290Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T16:46:03.293Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T16:46:03.293Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T16:46:03.293Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T16:46:03.294Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T16:46:03.294Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T16:46:03.294Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T16:46:03.296Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T16:46:03.297Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T16:46:03.297Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:46:03.313Z] [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T16:46:03.652Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T16:46:03.652Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T16:46:03.652Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:03.653Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:03.666Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T16:46:03.666Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:05.168Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:46:05.750Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T16:46:05.751Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T16:46:05.751Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:05.752Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:05.762Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:07.262Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:46:07.449Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T16:46:07.449Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T16:46:07.449Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:07.450Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:07.458Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:09.242Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T16:46:09.242Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:46:09.243Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:09.243Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:09.251Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:10.752Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:46:11.033Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T16:46:11.033Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:11.034Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:11.042Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:12.545Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T16:46:12.807Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T16:46:12.807Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:12.807Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:12.817Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:14.501Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T16:46:14.501Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T16:46:14.501Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:14.503Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:14.512Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:19.014Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T16:46:19.016Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-24T16:46:19.016Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:46:19.235Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T16:46:19.236Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T16:46:19.236Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:19.237Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:19.245Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:20.748Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:46:20.995Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T16:46:20.996Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:46:20.996Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:20.997Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:21.006Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:22.508Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T16:46:22.697Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T16:46:22.697Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T16:46:22.697Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T16:46:22.697Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:22.698Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:22.707Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:24.209Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T16:46:24.457Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T16:46:24.458Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T16:46:24.458Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:24.459Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:24.466Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T16:46:24.467Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:28.967Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T16:46:28.967Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T16:46:28.967Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T16:46:29.189Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T16:46:29.189Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T16:46:29.190Z] [BOT] 💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T16:46:29.191Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T16:46:29.200Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T16:46:33.702Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T16:46:33.703Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T16:46:33.801Z] [BOT] 📂 Loaded 8101 existing routing entries
[2026-01-24T16:46:33.913Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8111
   Timestamp: 2026-01-24T16:46:33.880Z
[2026-01-24T16:46:33.913Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T16:46:33.913Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T16:46:33.913Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T16:46:33.914Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-01-24T16:46:33.914Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[2026-01-24T16:46:33.914Z] [BOT] [STATS] Channel stats saved
[2026-01-24T16:46:35.927Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2605) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*