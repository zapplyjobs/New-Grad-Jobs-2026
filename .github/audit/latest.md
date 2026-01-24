# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T17:11:50.300Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T17:11:16.757Z] ========================================
[2026-01-24T17:11:16.758Z] Discord Bot Execution Log
[2026-01-24T17:11:16.759Z] Environment: GitHub Actions
[2026-01-24T17:11:16.759Z] Node Version: v20.20.0
[2026-01-24T17:11:16.759Z] ========================================
[2026-01-24T17:11:16.759Z] Environment Variables Check:
[2026-01-24T17:11:16.759Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T17:11:16.759Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.759Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T17:11:16.759Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T17:11:16.759Z] 
Multi-Channel Configuration:
[2026-01-24T17:11:16.759Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T17:11:16.760Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T17:11:16.760Z] 
Data Files Check:
[2026-01-24T17:11:16.761Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T17:11:16.766Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661383 bytes)
[2026-01-24T17:11:16.766Z] 
========================================
[2026-01-24T17:11:16.766Z] Starting Enhanced Discord Bot...
[2026-01-24T17:11:16.766Z] ========================================
[2026-01-24T17:11:17.288Z] [BOT] ✅ Loaded V2 database: 1165 jobs
[2026-01-24T17:11:17.610Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T17:11:17.610Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T17:11:17.610Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T17:11:17.728Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T17:11:17.732Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T17:11:17.732Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T17:11:17.732Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T17:11:17.733Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T17:11:17.733Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T17:11:17.735Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T17:11:17.736Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T17:11:17.736Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:11:17.753Z] [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T17:11:18.161Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T17:11:18.161Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T17:11:18.161Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T17:11:18.162Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:18.163Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:18.178Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:19.679Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:11:19.818Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T17:11:19.819Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T17:11:19.819Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:19.820Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:19.829Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:19.830Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:21.332Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:11:21.469Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T17:11:21.470Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:21.471Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:21.479Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:23.287Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T17:11:23.288Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T17:11:23.288Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T17:11:23.288Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:23.289Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:23.297Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:23.297Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:24.798Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T17:11:24.799Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:11:24.970Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T17:11:24.970Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T17:11:24.970Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T17:11:24.971Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:24.972Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:24.981Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:24.981Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:26.483Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T17:11:26.483Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:11:26.749Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T17:11:26.749Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T17:11:26.750Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T17:11:26.750Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:26.751Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:26.760Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:26.760Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:28.493Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T17:11:28.494Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T17:11:28.494Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T17:11:28.494Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:28.495Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:28.505Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:33.006Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T17:11:33.007Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:11:33.166Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T17:11:33.167Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T17:11:33.167Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:33.168Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:33.176Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:34.679Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:11:34.823Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T17:11:34.824Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T17:11:34.824Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:34.825Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:34.835Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:34.835Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:36.337Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:11:36.337Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T17:11:36.462Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T17:11:36.463Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T17:11:36.463Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T17:11:36.463Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:36.464Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:36.473Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:36.473Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:37.975Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T17:11:37.975Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:11:38.133Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T17:11:38.133Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T17:11:38.133Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T17:11:38.133Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:38.134Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:38.143Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:38.143Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:42.645Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T17:11:42.646Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T17:11:42.646Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T17:11:42.808Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T17:11:42.809Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:11:42.810Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:11:42.820Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:11:42.820Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:11:47.321Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T17:11:47.323Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T17:11:47.413Z] [BOT] 📂 Loaded 8121 existing routing entries
[2026-01-24T17:11:47.531Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8131
[2026-01-24T17:11:47.531Z] [BOT] Timestamp: 2026-01-24T17:11:47.493Z
[2026-01-24T17:11:47.532Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T17:11:47.532Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
[2026-01-24T17:11:47.532Z] [BOT] Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-01-24T17:11:47.532Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[2026-01-24T17:11:47.532Z] [BOT] [STATS] Channel stats saved
[2026-01-24T17:11:49.551Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2541) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*