# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T19:15:19.866Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T19:14:45.209Z] ========================================
[2026-01-23T19:14:45.211Z] Discord Bot Execution Log
[2026-01-23T19:14:45.211Z] Environment: GitHub Actions
[2026-01-23T19:14:45.211Z] Node Version: v20.20.0
[2026-01-23T19:14:45.211Z] ========================================
[2026-01-23T19:14:45.211Z] Environment Variables Check:
[2026-01-23T19:14:45.211Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T19:14:45.211Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.211Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T19:14:45.211Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T19:14:45.211Z] 
Multi-Channel Configuration:
[2026-01-23T19:14:45.212Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T19:14:45.212Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T19:14:45.212Z] 
Data Files Check:
[2026-01-23T19:14:45.213Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T19:14:45.225Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1785108 bytes)
[2026-01-23T19:14:45.225Z] 
========================================
[2026-01-23T19:14:45.225Z] Starting Enhanced Discord Bot...
[2026-01-23T19:14:45.225Z] ========================================
[2026-01-23T19:14:45.753Z] [BOT] ✅ Loaded V2 database: 3058 jobs
[2026-01-23T19:14:46.418Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T19:14:46.418Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T19:14:46.419Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T19:14:46.546Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[2026-01-23T19:14:46.546Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T19:14:46.554Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T19:14:46.555Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T19:14:46.555Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T19:14:46.556Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T19:14:46.556Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T19:14:46.558Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T19:14:46.559Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T19:14:46.559Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:14:46.583Z] [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T19:14:46.902Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T19:14:46.903Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T19:14:46.903Z] [BOT] 💾 BEFORE ARCHIVING: 3058 jobs in database
[2026-01-23T19:14:46.905Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T19:14:46.911Z] [BOT] 📦 Archived 7 jobs to 2026-01.json (7 total in archive)
[2026-01-23T19:14:46.911Z] [BOT] ✅ Archiving complete: 7 archived, 3051 active
[2026-01-23T19:14:46.937Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
[2026-01-23T19:14:46.937Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T19:14:48.439Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T19:14:48.439Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T19:14:48.669Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T19:14:48.669Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T19:14:48.669Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T19:14:48.669Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:14:48.671Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:14:48.690Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:14:50.192Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:14:50.369Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T19:14:50.369Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T19:14:50.370Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T19:14:50.370Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:14:50.372Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:14:50.393Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:14:52.287Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T19:14:52.287Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T19:14:52.288Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T19:14:52.288Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:14:52.290Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:14:52.310Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:14:53.812Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:14:53.986Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T19:14:53.986Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T19:14:53.986Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:14:53.988Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:14:54.009Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
[2026-01-23T19:14:54.009Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T19:14:55.510Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T19:14:55.510Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:14:55.864Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T19:14:55.864Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T19:14:55.864Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:14:55.867Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:14:55.888Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:14:57.541Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T19:14:57.542Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T19:14:57.542Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:14:57.544Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:14:57.566Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:15:02.067Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T19:15:02.068Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T19:15:02.069Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T19:15:02.349Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T19:15:02.349Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T19:15:02.349Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T19:15:02.349Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:15:02.351Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:15:02.372Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:15:03.875Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T19:15:04.030Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T19:15:04.031Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T19:15:04.031Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:15:04.033Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:15:04.051Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:15:05.553Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T19:15:05.553Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T19:15:05.735Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T19:15:05.735Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T19:15:05.735Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T19:15:05.736Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:15:05.737Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:15:05.758Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:15:07.259Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T19:15:07.260Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T19:15:07.439Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T19:15:07.439Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T19:15:07.439Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:15:07.441Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:15:07.459Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:15:11.961Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T19:15:11.962Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T19:15:11.962Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T19:15:12.328Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T19:15:12.328Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T19:15:12.328Z] [BOT] 💾 BEFORE ARCHIVING: 3051 jobs in database
[2026-01-23T19:15:12.330Z] [BOT] ✅ No jobs to archive (all 3051 jobs within 7-day window)
[2026-01-23T19:15:12.350Z] [BOT] 💾 Saved posted_jobs.json: 3051 active jobs
[2026-01-23T19:15:12.350Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T19:15:16.853Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T19:15:16.855Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T19:15:16.928Z] [BOT] 📂 Loaded 7421 existing routing entries
[2026-01-23T19:15:17.031Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T19:15:17.031Z] [BOT] New entries: 10
   Total entries: 7431
   Timestamp: 2026-01-23T19:15:16.984Z
[2026-01-23T19:15:17.032Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T19:15:17.032Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T19:15:17.032Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T19:15:17.032Z] [BOT] [STATS] Channel stats saved
[2026-01-23T19:15:19.052Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2549) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*