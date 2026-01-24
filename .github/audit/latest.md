# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T12:15:03.618Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T12:14:29.637Z] ========================================
[2026-01-24T12:14:29.639Z] Discord Bot Execution Log
[2026-01-24T12:14:29.639Z] Environment: GitHub Actions
[2026-01-24T12:14:29.639Z] Node Version: v20.20.0
[2026-01-24T12:14:29.639Z] ========================================
[2026-01-24T12:14:29.640Z] Environment Variables Check:
[2026-01-24T12:14:29.640Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T12:14:29.640Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.640Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T12:14:29.640Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T12:14:29.640Z] 
Multi-Channel Configuration:
[2026-01-24T12:14:29.640Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.640Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.640Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.640Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.641Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.641Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.641Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.641Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.641Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T12:14:29.641Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T12:14:29.641Z] 
Data Files Check:
[2026-01-24T12:14:29.642Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T12:14:29.652Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1566596 bytes)
[2026-01-24T12:14:29.652Z] 
========================================
[2026-01-24T12:14:29.652Z] Starting Enhanced Discord Bot...
[2026-01-24T12:14:29.652Z] ========================================
[2026-01-24T12:14:30.186Z] [BOT] ✅ Loaded V2 database: 2660 jobs
[2026-01-24T12:14:30.889Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T12:14:30.889Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T12:14:30.889Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T12:14:31.006Z] [BOT] ✅ Loaded pending queue: 2757 total (2737 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T12:14:31.010Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T12:14:31.010Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T12:14:31.010Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T12:14:31.011Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T12:14:31.011Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T12:14:31.013Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T12:14:31.014Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T12:14:31.014Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:14:31.032Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T12:14:31.180Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T12:14:31.180Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T12:14:31.181Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T12:14:31.181Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:31.183Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:31.205Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:32.706Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:14:32.870Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T12:14:32.870Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T12:14:32.871Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T12:14:32.871Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:32.873Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:32.891Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:14:32.891Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:34.391Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T12:14:34.391Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:14:34.566Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T12:14:34.566Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T12:14:34.567Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:34.568Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:34.589Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:14:34.589Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:36.263Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T12:14:36.264Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T12:14:36.264Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:36.265Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:36.284Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:14:36.284Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:37.785Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T12:14:37.785Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:14:38.035Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T12:14:38.036Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T12:14:38.036Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:38.038Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:38.055Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:39.557Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T12:14:39.558Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:14:39.822Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T12:14:39.823Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T12:14:39.823Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T12:14:39.823Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:39.825Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:39.848Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:41.522Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T12:14:41.523Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T12:14:41.523Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T12:14:41.523Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:41.525Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:41.544Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:46.046Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T12:14:46.047Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T12:14:46.048Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:14:46.251Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T12:14:46.251Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T12:14:46.251Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:46.253Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:46.271Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:14:46.271Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:47.773Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T12:14:47.774Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:14:48.115Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T12:14:48.116Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T12:14:48.116Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T12:14:48.116Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:48.118Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:48.136Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:49.639Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T12:14:49.639Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T12:14:49.784Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T12:14:49.784Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T12:14:49.785Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T12:14:49.785Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:49.786Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:49.805Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:51.306Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T12:14:51.306Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:14:51.466Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T12:14:51.467Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T12:14:51.467Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:51.468Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:51.486Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:14:51.486Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:14:55.989Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T12:14:55.989Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T12:14:55.989Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T12:14:56.235Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T12:14:56.236Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T12:14:56.236Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:14:56.239Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:14:56.257Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:15:00.760Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T12:15:00.762Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T12:15:00.851Z] [BOT] 📂 Loaded 7941 existing routing entries
[2026-01-24T12:15:00.964Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T12:15:00.964Z] [BOT] Total entries: 7951
   Timestamp: 2026-01-24T12:15:00.927Z
[2026-01-24T12:15:00.965Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T12:15:00.965Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T12:15:00.966Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-24T12:15:02.983Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*