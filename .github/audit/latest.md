# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T17:43:04.927Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T17:42:29.585Z] ========================================
[2026-01-24T17:42:29.587Z] Discord Bot Execution Log
[2026-01-24T17:42:29.587Z] Environment: GitHub Actions
[2026-01-24T17:42:29.587Z] Node Version: v20.20.0
[2026-01-24T17:42:29.588Z] ========================================
[2026-01-24T17:42:29.588Z] Environment Variables Check:
[2026-01-24T17:42:29.588Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T17:42:29.588Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.588Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T17:42:29.588Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T17:42:29.588Z] 
Multi-Channel Configuration:
[2026-01-24T17:42:29.588Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.588Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.588Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.588Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.589Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.589Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.589Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.589Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.589Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T17:42:29.589Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T17:42:29.589Z] 
Data Files Check:
[2026-01-24T17:42:29.590Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T17:42:29.594Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661383 bytes)
[2026-01-24T17:42:29.595Z] 
========================================
[2026-01-24T17:42:29.595Z] Starting Enhanced Discord Bot...
[2026-01-24T17:42:29.595Z] ========================================
[2026-01-24T17:42:30.115Z] [BOT] ✅ Loaded V2 database: 1165 jobs
[2026-01-24T17:42:30.722Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T17:42:30.722Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T17:42:30.722Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T17:42:30.843Z] [BOT] ✅ Loaded pending queue: 2799 total (2779 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T17:42:30.845Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T17:42:30.846Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T17:42:30.846Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T17:42:30.847Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T17:42:30.847Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T17:42:30.849Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T17:42:30.849Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T17:42:30.850Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:42:30.867Z] [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T17:42:31.084Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T17:42:31.084Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T17:42:31.085Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T17:42:31.085Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:31.086Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:31.101Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:32.603Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:42:32.814Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T17:42:32.815Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T17:42:32.815Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:32.816Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:32.824Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:42:32.824Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:34.325Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T17:42:34.325Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:42:34.528Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T17:42:34.528Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T17:42:34.529Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T17:42:34.529Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:34.530Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:34.538Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:36.213Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T17:42:36.213Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T17:42:36.214Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T17:42:36.214Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:36.215Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:36.222Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:37.723Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T17:42:37.723Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:42:38.029Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T17:42:38.029Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T17:42:38.030Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T17:42:38.030Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:38.031Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:38.041Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:42:38.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:39.544Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T17:42:39.544Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:42:39.905Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T17:42:39.906Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T17:42:39.906Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T17:42:39.906Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:39.907Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:39.917Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:41.942Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T17:42:41.943Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T17:42:41.943Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:41.944Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:41.953Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:46.455Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T17:42:46.457Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T17:42:46.457Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:42:46.824Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T17:42:46.825Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T17:42:46.825Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T17:42:46.825Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:46.826Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:46.834Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:48.337Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T17:42:48.337Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:42:48.553Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T17:42:48.553Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T17:42:48.553Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T17:42:48.553Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:48.554Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:48.564Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:42:48.564Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:50.066Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T17:42:50.066Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T17:42:50.726Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T17:42:50.726Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T17:42:50.727Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T17:42:50.727Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:50.728Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:50.737Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:52.238Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T17:42:52.238Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:42:52.530Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T17:42:52.530Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T17:42:52.531Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T17:42:52.531Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:52.532Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:52.540Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:42:52.540Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:42:57.044Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T17:42:57.044Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T17:42:57.044Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T17:42:57.319Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T17:42:57.320Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:42:57.321Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:42:57.331Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:42:57.331Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:43:01.833Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T17:43:01.835Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T17:43:01.922Z] [BOT] 📂 Loaded 8141 existing routing entries
[2026-01-24T17:43:02.037Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T17:43:02.037Z] [BOT] Total entries: 8151
   Timestamp: 2026-01-24T17:43:02.000Z
[2026-01-24T17:43:02.038Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T17:43:02.038Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T17:43:02.038Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T17:43:02.038Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T17:43:02.038Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T17:43:02.039Z] [BOT] [STATS] Channel stats saved
[2026-01-24T17:43:04.056Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2532) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*