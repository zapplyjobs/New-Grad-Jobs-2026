# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T18:14:07.150Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T18:13:32.705Z] ========================================
[2026-01-24T18:13:32.707Z] Discord Bot Execution Log
[2026-01-24T18:13:32.707Z] Environment: GitHub Actions
[2026-01-24T18:13:32.707Z] Node Version: v20.20.0
[2026-01-24T18:13:32.707Z] ========================================
[2026-01-24T18:13:32.707Z] Environment Variables Check:
[2026-01-24T18:13:32.707Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T18:13:32.707Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T18:13:32.708Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T18:13:32.708Z] 
Multi-Channel Configuration:
[2026-01-24T18:13:32.708Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T18:13:32.708Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T18:13:32.709Z] 
Data Files Check:
[2026-01-24T18:13:32.709Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T18:13:32.714Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 661383 bytes)
[2026-01-24T18:13:32.714Z] 
========================================
[2026-01-24T18:13:32.715Z] Starting Enhanced Discord Bot...
[2026-01-24T18:13:32.715Z] ========================================
[2026-01-24T18:13:33.250Z] [BOT] ✅ Loaded V2 database: 1165 jobs
[2026-01-24T18:13:33.618Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T18:13:33.619Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T18:13:33.619Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T18:13:33.741Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T18:13:33.743Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T18:13:33.743Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T18:13:33.743Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T18:13:33.745Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T18:13:33.745Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T18:13:33.747Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T18:13:33.748Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T18:13:33.748Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:13:33.765Z] [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T18:13:34.358Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T18:13:34.358Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T18:13:34.359Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T18:13:34.359Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:34.360Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:34.375Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:35.877Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T18:13:35.877Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:13:36.093Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T18:13:36.093Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T18:13:36.094Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:36.094Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:36.104Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T18:13:36.104Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:37.604Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:13:37.811Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T18:13:37.811Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T18:13:37.811Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:37.813Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:37.821Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T18:13:37.821Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:39.495Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T18:13:39.495Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T18:13:39.496Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T18:13:39.496Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:39.497Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:39.505Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:41.007Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T18:13:41.007Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:13:41.253Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T18:13:41.253Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T18:13:41.254Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T18:13:41.254Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:41.255Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:41.263Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T18:13:41.263Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:42.765Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T18:13:43.071Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T18:13:43.071Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T18:13:43.071Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:43.072Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:43.082Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:44.871Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T18:13:44.871Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:44.872Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:44.882Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:49.384Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T18:13:49.386Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T18:13:49.690Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T18:13:49.691Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T18:13:49.691Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:49.691Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:49.700Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:51.203Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T18:13:51.564Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T18:13:51.564Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T18:13:51.564Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:51.565Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:51.576Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:53.077Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T18:13:53.077Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T18:13:53.239Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T18:13:53.239Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T18:13:53.239Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T18:13:53.239Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:53.240Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:53.250Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:54.752Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T18:13:54.753Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T18:13:54.946Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T18:13:54.946Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T18:13:54.946Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T18:13:54.946Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:54.947Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:54.956Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T18:13:59.459Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T18:13:59.460Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T18:13:59.460Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T18:13:59.786Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T18:13:59.787Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T18:13:59.787Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T18:13:59.788Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T18:13:59.799Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T18:13:59.799Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T18:14:04.301Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T18:14:04.303Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T18:14:04.391Z] [BOT] 📂 Loaded 8161 existing routing entries
[2026-01-24T18:14:04.505Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T18:14:04.506Z] [BOT] Total entries: 8171
   Timestamp: 2026-01-24T18:14:04.468Z
[2026-01-24T18:14:04.506Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T18:14:04.506Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T18:14:04.506Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T18:14:04.507Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
[2026-01-24T18:14:04.507Z] [BOT] 2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T18:14:04.507Z] [BOT] [STATS] Channel stats saved
[2026-01-24T18:14:06.526Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2526) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*