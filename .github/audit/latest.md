# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T12:54:12.336Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T12:53:37.525Z] ========================================
[2026-01-24T12:53:37.527Z] Discord Bot Execution Log
[2026-01-24T12:53:37.527Z] Environment: GitHub Actions
[2026-01-24T12:53:37.527Z] Node Version: v20.20.0
[2026-01-24T12:53:37.527Z] ========================================
[2026-01-24T12:53:37.527Z] Environment Variables Check:
[2026-01-24T12:53:37.527Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T12:53:37.527Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T12:53:37.528Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T12:53:37.528Z] 
Multi-Channel Configuration:
[2026-01-24T12:53:37.528Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T12:53:37.528Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T12:53:37.529Z] 
Data Files Check:
[2026-01-24T12:53:37.529Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T12:53:37.541Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1566596 bytes)
[2026-01-24T12:53:37.541Z] 
========================================
[2026-01-24T12:53:37.541Z] Starting Enhanced Discord Bot...
[2026-01-24T12:53:37.541Z] ========================================
[2026-01-24T12:53:38.074Z] [BOT] ✅ Loaded V2 database: 2660 jobs
[2026-01-24T12:53:38.603Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T12:53:38.604Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T12:53:38.604Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T12:53:38.721Z] [BOT] ✅ Loaded pending queue: 2757 total (2737 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T12:53:38.724Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T12:53:38.725Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T12:53:38.725Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T12:53:38.726Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T12:53:38.726Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T12:53:38.726Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T12:53:38.728Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T12:53:38.728Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T12:53:38.729Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:53:38.746Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T12:53:39.041Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T12:53:39.042Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T12:53:39.042Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:39.044Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:39.071Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:40.573Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:53:40.879Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T12:53:40.880Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T12:53:40.880Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:40.882Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:40.900Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:42.401Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:53:42.666Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T12:53:42.667Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T12:53:42.667Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:42.669Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:42.689Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:53:42.689Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:44.352Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T12:53:44.352Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T12:53:44.353Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T12:53:44.353Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:44.355Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:44.375Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:45.876Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T12:53:45.876Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:53:46.070Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T12:53:46.071Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T12:53:46.071Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T12:53:46.071Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:46.073Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:46.092Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:47.593Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T12:53:47.594Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T12:53:47.802Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T12:53:47.802Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T12:53:47.803Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T12:53:47.803Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:47.805Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:47.827Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:49.591Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T12:53:49.591Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T12:53:49.592Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T12:53:49.592Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:49.594Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:49.612Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:53:49.612Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:54.114Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T12:53:54.116Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T12:53:54.116Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:53:54.298Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T12:53:54.299Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:54.301Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:54.319Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T12:53:54.319Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:55.822Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:53:56.020Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T12:53:56.021Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:56.023Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:56.042Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:57.543Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T12:53:57.543Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T12:53:57.761Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T12:53:57.762Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T12:53:57.762Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:57.764Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:57.780Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:53:59.281Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T12:53:59.522Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T12:53:59.522Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T12:53:59.523Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:53:59.524Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:53:59.542Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:54:04.043Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T12:54:04.044Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T12:54:04.044Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T12:54:04.338Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T12:54:04.339Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T12:54:04.339Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T12:54:04.341Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T12:54:04.357Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T12:54:08.860Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T12:54:08.862Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T12:54:08.952Z] [BOT] 📂 Loaded 7961 existing routing entries
[2026-01-24T12:54:09.066Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T12:54:09.066Z] [BOT] Total entries: 7971
   Timestamp: 2026-01-24T12:54:09.029Z
[2026-01-24T12:54:09.067Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T12:54:09.067Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T12:54:09.067Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T12:54:09.067Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T12:54:09.067Z] [BOT] [STATS] Channel stats saved
[2026-01-24T12:54:11.085Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*