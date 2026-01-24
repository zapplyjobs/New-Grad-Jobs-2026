# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T15:31:24.791Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T15:30:49.742Z] ========================================
[2026-01-24T15:30:49.744Z] Discord Bot Execution Log
[2026-01-24T15:30:49.744Z] Environment: GitHub Actions
[2026-01-24T15:30:49.744Z] Node Version: v20.20.0
[2026-01-24T15:30:49.744Z] ========================================
[2026-01-24T15:30:49.744Z] Environment Variables Check:
[2026-01-24T15:30:49.744Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T15:30:49.745Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T15:30:49.745Z] 
Multi-Channel Configuration:
[2026-01-24T15:30:49.745Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.745Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.746Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T15:30:49.746Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T15:30:49.746Z] 
Data Files Check:
[2026-01-24T15:30:49.746Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T15:30:49.757Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1562476 bytes)
[2026-01-24T15:30:49.757Z] 
========================================
[2026-01-24T15:30:49.757Z] Starting Enhanced Discord Bot...
[2026-01-24T15:30:49.757Z] ========================================
[2026-01-24T15:30:50.290Z] [BOT] ✅ Loaded V2 database: 2652 jobs
[2026-01-24T15:30:50.772Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T15:30:50.773Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T15:30:50.773Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T15:30:50.892Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T15:30:50.896Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T15:30:50.896Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T15:30:50.896Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T15:30:50.897Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T15:30:50.898Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T15:30:50.899Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T15:30:50.900Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T15:30:50.900Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:30:50.918Z] [BOT ERROR] (node:2489) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T15:30:51.350Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T15:30:51.351Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T15:30:51.352Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T15:30:51.352Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:30:51.354Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:30:51.381Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:30:52.883Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:30:53.462Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T15:30:53.462Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T15:30:53.463Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:30:53.465Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:30:53.481Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:30:54.982Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:30:55.179Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T15:30:55.179Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T15:30:55.180Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T15:30:55.180Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:30:55.183Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:30:55.204Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:30:56.955Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T15:30:56.955Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T15:30:56.956Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T15:30:56.956Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:30:56.958Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:30:56.976Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:30:58.475Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T15:30:58.476Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:30:58.716Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T15:30:58.717Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T15:30:58.717Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:30:58.719Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:30:58.737Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
[2026-01-24T15:30:58.737Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:00.240Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T15:31:00.240Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:31:00.400Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T15:31:00.401Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T15:31:00.401Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:31:00.403Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:31:00.424Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:02.188Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T15:31:02.189Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T15:31:02.189Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:31:02.191Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:31:02.208Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:06.711Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T15:31:06.712Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:31:07.414Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T15:31:07.415Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:31:07.417Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:31:07.437Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:08.940Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T15:31:08.940Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:31:09.165Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T15:31:09.166Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:31:09.168Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:31:09.185Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:10.687Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T15:31:10.687Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T15:31:10.852Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T15:31:10.853Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T15:31:10.853Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:31:10.855Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:31:10.872Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
[2026-01-24T15:31:10.873Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:12.373Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T15:31:12.374Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:31:12.579Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T15:31:12.580Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T15:31:12.580Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:31:12.581Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:31:12.600Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
[2026-01-24T15:31:12.600Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:17.102Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T15:31:17.102Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T15:31:17.103Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T15:31:17.326Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T15:31:17.326Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T15:31:17.327Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T15:31:17.327Z] [BOT] 💾 BEFORE ARCHIVING: 2652 jobs in database
[2026-01-24T15:31:17.328Z] [BOT] ✅ No jobs to archive (all 2652 jobs within 7-day window)
[2026-01-24T15:31:17.346Z] [BOT] 💾 Saved posted_jobs.json: 2652 active jobs
[2026-01-24T15:31:17.346Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:31:21.848Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T15:31:21.850Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T15:31:21.941Z] [BOT] 📂 Loaded 8051 existing routing entries
[2026-01-24T15:31:22.056Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T15:31:22.056Z] [BOT] Total entries: 8061
   Timestamp: 2026-01-24T15:31:22.018Z
[2026-01-24T15:31:22.057Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
[2026-01-24T15:31:22.057Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-24T15:31:22.057Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T15:31:22.057Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T15:31:22.057Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T15:31:22.058Z] [BOT] [STATS] Channel stats saved
[2026-01-24T15:31:24.075Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2489) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*