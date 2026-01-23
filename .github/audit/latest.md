# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T06:00:07.272Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T05:59:33.523Z] ========================================
[2026-01-23T05:59:33.525Z] Discord Bot Execution Log
[2026-01-23T05:59:33.525Z] Environment: GitHub Actions
[2026-01-23T05:59:33.525Z] Node Version: v20.20.0
[2026-01-23T05:59:33.525Z] ========================================
[2026-01-23T05:59:33.526Z] Environment Variables Check:
[2026-01-23T05:59:33.526Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T05:59:33.526Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.526Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T05:59:33.526Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T05:59:33.526Z] 
Multi-Channel Configuration:
[2026-01-23T05:59:33.526Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.526Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.526Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.526Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.527Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.527Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.527Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.527Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.527Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T05:59:33.527Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T05:59:33.527Z] 
Data Files Check:
[2026-01-23T05:59:33.528Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T05:59:33.540Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1858140 bytes)
[2026-01-23T05:59:33.540Z] 
========================================
[2026-01-23T05:59:33.540Z] Starting Enhanced Discord Bot...
[2026-01-23T05:59:33.540Z] ========================================
[2026-01-23T05:59:34.076Z] [BOT] ✅ Loaded V2 database: 3186 jobs
[2026-01-23T05:59:34.529Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T05:59:34.529Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T05:59:34.529Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T05:59:34.645Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T05:59:34.648Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T05:59:34.648Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T05:59:34.648Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T05:59:34.649Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T05:59:34.649Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T05:59:34.652Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T05:59:34.652Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T05:59:34.652Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:59:34.669Z] [BOT ERROR] (node:2452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T05:59:34.814Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T05:59:34.814Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T05:59:34.815Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T05:59:34.815Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:34.817Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:34.843Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:36.345Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T05:59:36.346Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T05:59:36.461Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T05:59:36.461Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T05:59:36.461Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T05:59:36.462Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:36.464Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:36.483Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:37.983Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:59:38.229Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T05:59:38.230Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T05:59:38.230Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:38.232Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:38.254Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:39.894Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T05:59:39.894Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T05:59:39.895Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T05:59:39.895Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:39.897Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:39.918Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:41.420Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:59:41.654Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T05:59:41.654Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T05:59:41.654Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T05:59:41.654Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:41.657Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:41.677Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:43.179Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T05:59:43.179Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T05:59:43.343Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T05:59:43.344Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T05:59:43.344Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:43.346Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:43.369Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:45.068Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T05:59:45.068Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T05:59:45.069Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T05:59:45.069Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:45.071Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:45.094Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:49.596Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T05:59:49.598Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T05:59:49.918Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T05:59:49.918Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T05:59:49.918Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:49.921Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:49.941Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:51.444Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T05:59:51.765Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T05:59:51.765Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T05:59:51.765Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:51.767Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:51.788Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:53.290Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T05:59:53.290Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T05:59:53.512Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T05:59:53.512Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T05:59:53.512Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:53.514Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:53.535Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:55.036Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T05:59:55.255Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T05:59:55.256Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T05:59:55.256Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:55.258Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:55.277Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
[2026-01-23T05:59:55.278Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T05:59:59.779Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T05:59:59.779Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T05:59:59.779Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T05:59:59.918Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T05:59:59.918Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T05:59:59.918Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:59:59.920Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:59:59.940Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T06:00:04.441Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T06:00:04.443Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T06:00:04.526Z] [BOT] 📂 Loaded 7021 existing routing entries
[2026-01-23T06:00:04.619Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T06:00:04.620Z] [BOT] Total entries: 7031
   Timestamp: 2026-01-23T06:00:04.588Z
📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T06:00:04.620Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
[2026-01-23T06:00:04.621Z] [BOT] Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T06:00:04.621Z] [BOT] [STATS] Channel stats saved
[2026-01-23T06:00:06.639Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*