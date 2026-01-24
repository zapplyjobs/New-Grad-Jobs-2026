# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T17:30:02.742Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T17:29:27.201Z] ========================================
[2026-01-24T17:29:27.203Z] Discord Bot Execution Log
[2026-01-24T17:29:27.203Z] Environment: GitHub Actions
[2026-01-24T17:29:27.203Z] Node Version: v20.20.0
[2026-01-24T17:29:27.203Z] ========================================
[2026-01-24T17:29:27.203Z] Environment Variables Check:
[2026-01-24T17:29:27.203Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T17:29:27.203Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.203Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T17:29:27.204Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T17:29:27.204Z] 
Multi-Channel Configuration:
[2026-01-24T17:29:27.204Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T17:29:27.204Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T17:29:27.204Z] 
Data Files Check:
[2026-01-24T17:29:27.205Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T17:29:27.210Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661383 bytes)
[2026-01-24T17:29:27.210Z] 
========================================
[2026-01-24T17:29:27.210Z] Starting Enhanced Discord Bot...
[2026-01-24T17:29:27.210Z] ========================================
[2026-01-24T17:29:27.734Z] [BOT] ✅ Loaded V2 database: 1165 jobs
[2026-01-24T17:29:28.378Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T17:29:28.379Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T17:29:28.379Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T17:29:28.496Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T17:29:28.498Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T17:29:28.499Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T17:29:28.499Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T17:29:28.500Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T17:29:28.500Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T17:29:28.502Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T17:29:28.502Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T17:29:28.503Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:29:28.519Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T17:29:28.794Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T17:29:28.794Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T17:29:28.795Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T17:29:28.795Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:28.796Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:28.810Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:30.311Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T17:29:30.311Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:29:30.718Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T17:29:30.718Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T17:29:30.718Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T17:29:30.719Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:30.720Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:30.728Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:32.229Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:29:32.420Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T17:29:32.420Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T17:29:32.420Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T17:29:32.420Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:32.422Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:32.430Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:34.103Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T17:29:34.103Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T17:29:34.103Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:34.104Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:34.112Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:29:34.112Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:35.613Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T17:29:35.613Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:29:35.887Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T17:29:35.887Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T17:29:35.887Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T17:29:35.887Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:35.888Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:35.896Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:37.397Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T17:29:37.397Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T17:29:37.870Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T17:29:37.871Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T17:29:37.871Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T17:29:37.871Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:37.872Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:37.881Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:39.556Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T17:29:39.557Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T17:29:39.557Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:39.558Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:39.567Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:29:39.567Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:44.069Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T17:29:44.070Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:29:44.368Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T17:29:44.369Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T17:29:44.369Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:44.370Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:44.378Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:45.880Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:29:46.287Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T17:29:46.287Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T17:29:46.288Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:46.288Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:46.298Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:29:46.298Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:47.800Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:29:47.801Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T17:29:48.056Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T17:29:48.056Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T17:29:48.057Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:48.057Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:48.067Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:29:48.067Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:49.568Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T17:29:49.568Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T17:29:49.795Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T17:29:49.795Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T17:29:49.795Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:49.796Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:49.804Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:54.307Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T17:29:54.307Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T17:29:54.308Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T17:29:54.595Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T17:29:54.595Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T17:29:54.595Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T17:29:54.596Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T17:29:54.606Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T17:29:54.606Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T17:29:59.108Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T17:29:59.110Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T17:29:59.198Z] [BOT] 📂 Loaded 8131 existing routing entries
[2026-01-24T17:29:59.313Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T17:29:59.313Z] [BOT] New entries: 10
   Total entries: 8141
   Timestamp: 2026-01-24T17:29:59.275Z
[2026-01-24T17:29:59.313Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T17:29:59.313Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T17:29:59.314Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T17:29:59.314Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T17:29:59.314Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T17:29:59.314Z] [BOT] [STATS] Channel stats saved
[2026-01-24T17:30:01.333Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*