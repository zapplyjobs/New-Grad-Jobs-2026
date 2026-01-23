# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T21:56:05.732Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T21:55:30.325Z] ========================================
[2026-01-23T21:55:30.327Z] Discord Bot Execution Log
[2026-01-23T21:55:30.327Z] Environment: GitHub Actions
[2026-01-23T21:55:30.327Z] Node Version: v20.20.0
[2026-01-23T21:55:30.327Z] ========================================
[2026-01-23T21:55:30.327Z] Environment Variables Check:
[2026-01-23T21:55:30.327Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T21:55:30.327Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T21:55:30.328Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T21:55:30.328Z] 
Multi-Channel Configuration:
[2026-01-23T21:55:30.328Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T21:55:30.328Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T21:55:30.329Z] 
Data Files Check:
[2026-01-23T21:55:30.329Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T21:55:30.341Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1726773 bytes)
[2026-01-23T21:55:30.341Z] 
========================================
[2026-01-23T21:55:30.341Z] Starting Enhanced Discord Bot...
[2026-01-23T21:55:30.341Z] ========================================
[2026-01-23T21:55:30.877Z] [BOT] ✅ Loaded V2 database: 2958 jobs
[2026-01-23T21:55:31.707Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T21:55:31.708Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T21:55:31.708Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T21:55:31.826Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T21:55:31.830Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T21:55:31.830Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T21:55:31.830Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T21:55:31.831Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T21:55:31.831Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T21:55:31.833Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T21:55:31.834Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T21:55:31.834Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:55:31.850Z] [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T21:55:32.101Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T21:55:32.102Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T21:55:32.102Z] [BOT] 💾 BEFORE ARCHIVING: 2958 jobs in database
[2026-01-23T21:55:32.105Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T21:55:32.110Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-23T21:55:32.110Z] [BOT] ✅ Archiving complete: 5 archived, 2953 active
[2026-01-23T21:55:32.130Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:33.632Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T21:55:33.632Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:55:33.866Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T21:55:33.866Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T21:55:33.867Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T21:55:33.867Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:33.869Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:33.887Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:35.388Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T21:55:35.388Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T21:55:35.597Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T21:55:35.597Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T21:55:35.598Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T21:55:35.598Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:35.600Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:35.621Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:37.313Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T21:55:37.313Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T21:55:37.314Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T21:55:37.314Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:37.316Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:37.337Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:38.838Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:55:39.203Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T21:55:39.204Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T21:55:39.204Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:39.206Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:39.227Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:40.728Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T21:55:40.729Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:55:41.063Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T21:55:41.064Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T21:55:41.064Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T21:55:41.064Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:41.067Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:41.088Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:42.774Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T21:55:42.774Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T21:55:42.775Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T21:55:42.775Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:42.777Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:42.798Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:47.299Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T21:55:47.301Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:55:47.539Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T21:55:47.539Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T21:55:47.539Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:47.541Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:47.560Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:49.062Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T21:55:49.063Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:55:49.432Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T21:55:49.432Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:55:49.432Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:49.434Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:49.453Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:50.955Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:55:50.955Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T21:55:51.117Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T21:55:51.118Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T21:55:51.118Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:51.120Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:51.140Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:52.640Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T21:55:52.640Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:55:53.044Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T21:55:53.044Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:55:53.044Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:53.046Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:53.066Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:55:57.569Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T21:55:57.569Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T21:55:57.569Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T21:55:57.914Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T21:55:57.914Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T21:55:57.914Z] [BOT] 💾 BEFORE ARCHIVING: 2953 jobs in database
[2026-01-23T21:55:57.916Z] [BOT] ✅ No jobs to archive (all 2953 jobs within 7-day window)
[2026-01-23T21:55:57.936Z] [BOT] 💾 Saved posted_jobs.json: 2953 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:56:02.437Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T21:56:02.439Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T21:56:02.513Z] [BOT] 📂 Loaded 7521 existing routing entries
[2026-01-23T21:56:02.618Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T21:56:02.618Z] [BOT] New entries: 10
   Total entries: 7531
   Timestamp: 2026-01-23T21:56:02.571Z
[2026-01-23T21:56:02.619Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T21:56:02.619Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T21:56:02.619Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T21:56:02.619Z] [BOT] [STATS] Channel stats saved
[2026-01-23T21:56:04.638Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2507) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*