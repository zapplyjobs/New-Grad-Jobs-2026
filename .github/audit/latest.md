# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T19:55:15.144Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T19:54:40.436Z] ========================================
[2026-01-23T19:54:40.438Z] Discord Bot Execution Log
[2026-01-23T19:54:40.438Z] Environment: GitHub Actions
[2026-01-23T19:54:40.438Z] Node Version: v20.20.0
[2026-01-23T19:54:40.438Z] ========================================
[2026-01-23T19:54:40.438Z] Environment Variables Check:
[2026-01-23T19:54:40.438Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T19:54:40.438Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.438Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T19:54:40.438Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T19:54:40.438Z] 
Multi-Channel Configuration:
[2026-01-23T19:54:40.438Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T19:54:40.439Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T19:54:40.439Z] 
Data Files Check:
[2026-01-23T19:54:40.440Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T19:54:40.451Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1769541 bytes)
[2026-01-23T19:54:40.451Z] 
========================================
[2026-01-23T19:54:40.451Z] Starting Enhanced Discord Bot...
[2026-01-23T19:54:40.451Z] ========================================
[2026-01-23T19:54:40.991Z] [BOT] ✅ Loaded V2 database: 3032 jobs
[2026-01-23T19:54:41.457Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T19:54:41.458Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T19:54:41.458Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T19:54:41.576Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T19:54:41.580Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T19:54:41.580Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T19:54:41.580Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T19:54:41.581Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T19:54:41.581Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T19:54:41.583Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T19:54:41.584Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T19:54:41.584Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:54:41.601Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T19:54:42.064Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T19:54:42.064Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T19:54:42.065Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T19:54:42.065Z] [BOT] 💾 BEFORE ARCHIVING: 3032 jobs in database
[2026-01-23T19:54:42.067Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T19:54:42.072Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T19:54:42.072Z] [BOT] ✅ Archiving complete: 11 archived, 3021 active
[2026-01-23T19:54:42.093Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:43.594Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T19:54:43.594Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T19:54:43.808Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T19:54:43.808Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T19:54:43.809Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T19:54:43.809Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:43.811Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:43.829Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:45.330Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T19:54:45.330Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T19:54:45.503Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T19:54:45.503Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T19:54:45.504Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:45.506Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:45.526Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:47.341Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T19:54:47.341Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T19:54:47.342Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T19:54:47.342Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:47.344Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:47.366Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:48.867Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T19:54:49.077Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T19:54:49.078Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T19:54:49.078Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:49.080Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:49.101Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:50.603Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T19:54:50.603Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T19:54:50.730Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T19:54:50.731Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T19:54:50.731Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:50.734Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:50.755Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:52.484Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T19:54:52.484Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T19:54:52.485Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T19:54:52.485Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:52.487Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:52.508Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:57.009Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T19:54:57.010Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T19:54:57.011Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T19:54:57.359Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T19:54:57.359Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T19:54:57.360Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T19:54:57.360Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:57.362Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:57.382Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:54:58.884Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T19:54:58.884Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T19:54:59.167Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T19:54:59.167Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T19:54:59.168Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T19:54:59.168Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:54:59.171Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:54:59.189Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:55:00.691Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T19:55:00.691Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T19:55:01.264Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T19:55:01.265Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T19:55:01.265Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:55:01.267Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:55:01.287Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:55:02.788Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T19:55:02.789Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T19:55:03.025Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T19:55:03.025Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T19:55:03.025Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T19:55:03.025Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:55:03.027Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:55:03.047Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:55:07.548Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T19:55:07.549Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T19:55:07.549Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T19:55:07.802Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T19:55:07.802Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T19:55:07.802Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T19:55:07.802Z] [BOT] 💾 BEFORE ARCHIVING: 3021 jobs in database
[2026-01-23T19:55:07.804Z] [BOT] ✅ No jobs to archive (all 3021 jobs within 7-day window)
[2026-01-23T19:55:07.824Z] [BOT] 💾 Saved posted_jobs.json: 3021 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T19:55:12.326Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T19:55:12.329Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T19:55:12.404Z] [BOT] 📂 Loaded 7451 existing routing entries
[2026-01-23T19:55:12.502Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T19:55:12.502Z] [BOT] Total entries: 7461
   Timestamp: 2026-01-23T19:55:12.463Z
[2026-01-23T19:55:12.503Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T19:55:12.503Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T19:55:12.503Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T19:55:12.503Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-23T19:55:12.503Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-23T19:55:12.503Z] [BOT] [STATS] Channel stats saved
[2026-01-23T19:55:14.523Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*