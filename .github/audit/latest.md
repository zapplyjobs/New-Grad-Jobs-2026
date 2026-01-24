# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T13:57:18.276Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T13:56:41.427Z] ========================================
[2026-01-24T13:56:41.429Z] Discord Bot Execution Log
[2026-01-24T13:56:41.429Z] Environment: GitHub Actions
[2026-01-24T13:56:41.429Z] Node Version: v20.20.0
[2026-01-24T13:56:41.430Z] ========================================
[2026-01-24T13:56:41.430Z] Environment Variables Check:
[2026-01-24T13:56:41.430Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T13:56:41.430Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.430Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T13:56:41.430Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T13:56:41.430Z] 
Multi-Channel Configuration:
[2026-01-24T13:56:41.430Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.430Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.430Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.431Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.431Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.431Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.431Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.431Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.431Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T13:56:41.431Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T13:56:41.431Z] 
Data Files Check:
[2026-01-24T13:56:41.432Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T13:56:41.443Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1566596 bytes)
[2026-01-24T13:56:41.443Z] 
========================================
[2026-01-24T13:56:41.443Z] Starting Enhanced Discord Bot...
[2026-01-24T13:56:41.443Z] ========================================
[2026-01-24T13:56:41.976Z] [BOT] ✅ Loaded V2 database: 2660 jobs
[2026-01-24T13:56:42.619Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T13:56:42.619Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T13:56:42.620Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T13:56:42.735Z] [BOT] ✅ Loaded pending queue: 2769 total (2749 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T13:56:42.739Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T13:56:42.739Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T13:56:42.739Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T13:56:42.740Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T13:56:42.740Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T13:56:42.740Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T13:56:42.742Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T13:56:42.743Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T13:56:42.743Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:56:42.760Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T13:56:43.071Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T13:56:43.071Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T13:56:43.072Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T13:56:43.072Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:56:43.075Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T13:56:43.080Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-24T13:56:43.080Z] [BOT] ✅ Archiving complete: 7 archived, 2653 active
[2026-01-24T13:56:43.103Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T13:56:43.103Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:44.605Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T13:56:44.605Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:56:44.824Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T13:56:44.825Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T13:56:44.825Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:56:44.827Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:56:44.844Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:46.343Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:56:46.591Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T13:56:46.591Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T13:56:46.591Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T13:56:46.591Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:56:46.593Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:56:46.611Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:48.375Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T13:56:48.375Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T13:56:48.376Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T13:56:48.376Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:56:48.378Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:56:48.400Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:49.901Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T13:56:49.901Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:56:50.157Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T13:56:50.157Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T13:56:50.157Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T13:56:50.157Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:56:50.159Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:56:50.177Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:51.678Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T13:56:51.679Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:56:51.867Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T13:56:51.867Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T13:56:51.868Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T13:56:51.868Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:56:51.870Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:56:51.890Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T13:56:51.891Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:53.552Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T13:56:53.552Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T13:56:53.553Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:56:53.554Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:56:53.574Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T13:56:53.574Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:58.076Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T13:56:58.077Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T13:56:58.078Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T13:56:58.384Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T13:56:58.384Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T13:56:58.384Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T13:56:58.384Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:56:58.386Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:56:58.403Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T13:56:58.404Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T13:56:59.906Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T13:56:59.906Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T13:57:00.082Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T13:57:00.082Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T13:57:00.083Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:57:00.084Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:57:00.102Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T13:57:00.102Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T13:57:01.604Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T13:57:01.604Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T13:57:01.891Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T13:57:01.892Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T13:57:01.892Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:57:01.894Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:57:01.912Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:57:03.413Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T13:57:06.009Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T13:57:06.009Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T13:57:06.009Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:57:06.011Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:57:06.028Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:57:10.530Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T13:57:10.530Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T13:57:10.531Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T13:57:10.806Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T13:57:10.806Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T13:57:10.806Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T13:57:10.808Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T13:57:10.826Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T13:57:10.826Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T13:57:15.328Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T13:57:15.330Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T13:57:15.416Z] [BOT] 📂 Loaded 7991 existing routing entries
[2026-01-24T13:57:15.523Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T13:57:15.523Z] [BOT] Total entries: 8001
   Timestamp: 2026-01-24T13:57:15.486Z
[2026-01-24T13:57:15.524Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T13:57:15.524Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T13:57:15.524Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T13:57:15.524Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T13:57:15.524Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T13:57:15.524Z] [BOT] [STATS] Channel stats saved
[2026-01-24T13:57:17.541Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*