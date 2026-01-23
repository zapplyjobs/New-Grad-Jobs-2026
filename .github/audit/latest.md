# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T04:53:26.848Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T04:52:51.496Z] ========================================
[2026-01-23T04:52:51.498Z] Discord Bot Execution Log
[2026-01-23T04:52:51.498Z] Environment: GitHub Actions
[2026-01-23T04:52:51.498Z] Node Version: v20.20.0
[2026-01-23T04:52:51.498Z] ========================================
[2026-01-23T04:52:51.498Z] Environment Variables Check:
[2026-01-23T04:52:51.498Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T04:52:51.498Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.498Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T04:52:51.498Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T04:52:51.499Z] 
Multi-Channel Configuration:
[2026-01-23T04:52:51.499Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T04:52:51.499Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T04:52:51.499Z] 
Data Files Check:
[2026-01-23T04:52:51.500Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T04:52:51.513Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1877142 bytes)
[2026-01-23T04:52:51.513Z] 
========================================
[2026-01-23T04:52:51.513Z] Starting Enhanced Discord Bot...
[2026-01-23T04:52:51.513Z] ========================================
[2026-01-23T04:52:51.978Z] [BOT] ✅ Loaded V2 database: 3218 jobs
[2026-01-23T04:52:52.677Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T04:52:52.677Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T04:52:52.677Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T04:52:52.828Z] [BOT] ✅ Loaded pending queue: 2777 total (2757 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T04:52:52.831Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T04:52:52.832Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T04:52:52.832Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T04:52:52.832Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T04:52:52.833Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T04:52:52.833Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T04:52:52.834Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T04:52:52.835Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T04:52:52.835Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:52:52.851Z] [BOT ERROR] (node:2588) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T04:52:53.377Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T04:52:53.378Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T04:52:53.378Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T04:52:53.379Z] [BOT] 💾 BEFORE ARCHIVING: 3218 jobs in database
[2026-01-23T04:52:53.381Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T04:52:53.385Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-23T04:52:53.385Z] [BOT] ✅ Archiving complete: 10 archived, 3208 active
[2026-01-23T04:52:53.406Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:52:54.909Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T04:52:54.909Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:52:55.149Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T04:52:55.149Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T04:52:55.150Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:52:55.152Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:52:55.171Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:52:56.672Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T04:52:56.673Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T04:52:57.037Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T04:52:57.038Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T04:52:57.038Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:52:57.040Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:52:57.062Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:52:58.810Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T04:52:58.811Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T04:52:58.811Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:52:58.813Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:52:58.834Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:00.334Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T04:53:00.334Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T04:53:00.593Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T04:53:00.593Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T04:53:00.594Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T04:53:00.594Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:00.596Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:00.617Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:02.119Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T04:53:02.119Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T04:53:02.359Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T04:53:02.360Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T04:53:02.360Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:02.362Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:02.385Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:04.065Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T04:53:04.065Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T04:53:04.066Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T04:53:04.066Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:04.067Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:04.089Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:08.591Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T04:53:08.592Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T04:53:08.592Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T04:53:08.801Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T04:53:08.801Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T04:53:08.802Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T04:53:08.802Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:08.804Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:08.825Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:10.326Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T04:53:10.326Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T04:53:10.500Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T04:53:10.500Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T04:53:10.500Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T04:53:10.500Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:10.502Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:10.522Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:12.024Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T04:53:12.024Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T04:53:12.222Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:12.224Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:12.246Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:13.747Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T04:53:13.748Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T04:53:14.050Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T04:53:14.050Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T04:53:14.051Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T04:53:14.051Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:14.053Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:14.074Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:18.577Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T04:53:18.578Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T04:53:18.578Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T04:53:19.038Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T04:53:19.038Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T04:53:19.039Z] [BOT] 💾 BEFORE ARCHIVING: 3208 jobs in database
[2026-01-23T04:53:19.040Z] [BOT] ✅ No jobs to archive (all 3208 jobs within 7-day window)
[2026-01-23T04:53:19.060Z] [BOT] 💾 Saved posted_jobs.json: 3208 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T04:53:23.562Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T04:53:23.564Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T04:53:23.652Z] [BOT] 📂 Loaded 6981 existing routing entries
[2026-01-23T04:53:23.741Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6991
[2026-01-23T04:53:23.741Z] [BOT] Timestamp: 2026-01-23T04:53:23.714Z
[2026-01-23T04:53:23.742Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T04:53:23.742Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T04:53:23.742Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T04:53:23.742Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T04:53:23.742Z] [BOT] [STATS] Channel stats saved
[2026-01-23T04:53:25.754Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2588) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*