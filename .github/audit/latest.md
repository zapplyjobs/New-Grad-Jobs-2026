# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T09:34:18.956Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T09:33:37.656Z] ========================================
[2026-01-22T09:33:37.658Z] Discord Bot Execution Log
[2026-01-22T09:33:37.658Z] Environment: GitHub Actions
[2026-01-22T09:33:37.658Z] Node Version: v20.19.6
[2026-01-22T09:33:37.658Z] ========================================
[2026-01-22T09:33:37.658Z] Environment Variables Check:
[2026-01-22T09:33:37.658Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T09:33:37.659Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T09:33:37.659Z] 
Multi-Channel Configuration:
[2026-01-22T09:33:37.659Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.659Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.660Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.660Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T09:33:37.660Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T09:33:37.660Z] 
Data Files Check:
[2026-01-22T09:33:37.661Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T09:33:37.674Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009791 bytes)
[2026-01-22T09:33:37.674Z] 
========================================
[2026-01-22T09:33:37.674Z] Starting Enhanced Discord Bot...
[2026-01-22T09:33:37.674Z] ========================================
[2026-01-22T09:33:38.226Z] [BOT] ✅ Loaded V2 database: 3455 jobs
[2026-01-22T09:33:39.260Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T09:33:39.261Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T09:33:39.261Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T09:33:39.374Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[2026-01-22T09:33:39.376Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T09:33:39.381Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T09:33:39.381Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T09:33:39.381Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T09:33:39.382Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T09:33:39.382Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T09:33:39.385Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T09:33:39.386Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T09:33:39.386Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:33:39.403Z] [BOT ERROR] (node:2401) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T09:33:39.674Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T09:33:39.674Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T09:33:39.675Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T09:33:39.676Z] [BOT] 💾 BEFORE ARCHIVING: 3455 jobs in database
[2026-01-22T09:33:39.679Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T09:33:39.685Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-22T09:33:39.685Z] [BOT] ✅ Archiving complete: 1 archived, 3454 active
[2026-01-22T09:33:39.708Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:41.210Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T09:33:41.211Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:33:41.522Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T09:33:41.523Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T09:33:41.523Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:41.525Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:41.545Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:43.412Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T09:33:43.413Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T09:33:43.413Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:43.415Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:43.438Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T09:33:43.439Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:44.940Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T09:33:44.940Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:33:45.196Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T09:33:45.197Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T09:33:45.197Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:45.200Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:45.223Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:46.986Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T09:33:46.986Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T09:33:46.986Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:46.988Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:47.009Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:48.510Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T09:33:48.510Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:33:48.703Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T09:33:48.704Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T09:33:48.704Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:48.706Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:48.730Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:50.233Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T09:33:50.233Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T09:33:50.482Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T09:33:50.482Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T09:33:50.482Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T09:33:50.483Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:50.485Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:50.507Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:52.222Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T09:33:52.223Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T09:33:52.223Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:52.225Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:52.248Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:56.750Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T09:33:56.751Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:33:57.026Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T09:33:57.027Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T09:33:57.027Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:57.029Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:57.049Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:33:58.552Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T09:33:58.552Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:33:58.779Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T09:33:58.779Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T09:33:58.780Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T09:33:58.780Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:33:58.782Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:33:58.802Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:34:00.586Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T09:34:00.586Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T09:34:00.587Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T09:34:00.587Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:34:00.589Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:34:00.608Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:34:02.111Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T09:34:02.111Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T09:34:02.319Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T09:34:02.319Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T09:34:02.319Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T09:34:02.319Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:34:02.321Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:34:02.341Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:34:03.842Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T09:34:03.842Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T09:34:04.167Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T09:34:04.168Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T09:34:04.168Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T09:34:04.168Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:34:04.170Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:34:04.190Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:34:06.070Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T09:34:06.070Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T09:34:06.071Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T09:34:06.071Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:34:06.073Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:34:06.093Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T09:34:10.594Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T09:34:10.595Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T09:34:10.595Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T09:34:10.947Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T09:34:10.947Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T09:34:10.947Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T09:34:10.949Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T09:34:10.970Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T09:34:10.970Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T09:34:15.471Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T09:34:15.473Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T09:34:15.554Z] [BOT] 📂 Loaded 6441 existing routing entries
[2026-01-22T09:34:15.647Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T09:34:15.647Z] [BOT] Total entries: 6451
   Timestamp: 2026-01-22T09:34:15.616Z
[2026-01-22T09:34:15.648Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T09:34:15.648Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T09:34:15.648Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
[2026-01-22T09:34:15.648Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T09:34:15.648Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T09:34:15.648Z] [BOT] [STATS] Channel stats saved
[2026-01-22T09:34:17.665Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2401) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*