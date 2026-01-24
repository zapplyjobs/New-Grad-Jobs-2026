# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T11:12:37.966Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T11:12:03.788Z] ========================================
[2026-01-24T11:12:03.790Z] Discord Bot Execution Log
[2026-01-24T11:12:03.790Z] Environment: GitHub Actions
[2026-01-24T11:12:03.790Z] Node Version: v20.20.0
[2026-01-24T11:12:03.790Z] ========================================
[2026-01-24T11:12:03.790Z] Environment Variables Check:
[2026-01-24T11:12:03.790Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T11:12:03.790Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T11:12:03.791Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T11:12:03.791Z] 
Multi-Channel Configuration:
[2026-01-24T11:12:03.791Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.791Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T11:12:03.792Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T11:12:03.792Z] 
Data Files Check:
[2026-01-24T11:12:03.792Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T11:12:03.803Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T11:12:03.803Z] 
========================================
[2026-01-24T11:12:03.803Z] Starting Enhanced Discord Bot...
[2026-01-24T11:12:03.803Z] ========================================
[2026-01-24T11:12:04.343Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T11:12:04.810Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T11:12:04.810Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T11:12:04.811Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T11:12:04.929Z] [BOT] ✅ Loaded pending queue: 2753 total (2733 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T11:12:04.933Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T11:12:04.934Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T11:12:04.934Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T11:12:04.934Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T11:12:04.935Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T11:12:04.935Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T11:12:04.937Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T11:12:04.937Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T11:12:04.937Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:12:04.956Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T11:12:05.220Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T11:12:05.220Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T11:12:05.221Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T11:12:05.221Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:05.223Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:05.247Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:06.749Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T11:12:06.749Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:12:06.911Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T11:12:06.912Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T11:12:06.912Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:06.914Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:06.932Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:08.434Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:12:08.732Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T11:12:08.734Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T11:12:08.734Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:08.736Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:08.756Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:10.518Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T11:12:10.518Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T11:12:10.519Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T11:12:10.519Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:10.520Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:10.541Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:12.042Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T11:12:12.043Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:12:12.195Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T11:12:12.196Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T11:12:12.196Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:12.198Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:12.218Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:13.719Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T11:12:13.720Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T11:12:13.929Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T11:12:13.930Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T11:12:13.931Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:13.933Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:13.954Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:15.686Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T11:12:15.686Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T11:12:15.687Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T11:12:15.687Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:15.688Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:15.711Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:20.213Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T11:12:20.215Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T11:12:20.215Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:12:20.430Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T11:12:20.431Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T11:12:20.431Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T11:12:20.431Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:20.433Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:20.455Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:21.957Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T11:12:21.958Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:12:22.214Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T11:12:22.214Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T11:12:22.215Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T11:12:22.215Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:22.217Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:22.236Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:23.739Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:12:23.739Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T11:12:23.902Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T11:12:23.903Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:23.905Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:23.924Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:25.425Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T11:12:25.671Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T11:12:25.671Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T11:12:25.672Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T11:12:25.672Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:25.674Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:25.692Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:30.194Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T11:12:30.194Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T11:12:30.452Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T11:12:30.453Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T11:12:30.453Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T11:12:30.455Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T11:12:30.474Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T11:12:34.976Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T11:12:34.979Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T11:12:35.070Z] [BOT] 📂 Loaded 7901 existing routing entries
[2026-01-24T11:12:35.182Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T11:12:35.183Z] [BOT] Total entries: 7911
   Timestamp: 2026-01-24T11:12:35.143Z
[2026-01-24T11:12:35.183Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T11:12:35.183Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T11:12:35.184Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-24T11:12:37.201Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*