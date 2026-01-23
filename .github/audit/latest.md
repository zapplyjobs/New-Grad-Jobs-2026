# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T18:39:25.813Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T18:38:50.811Z] ========================================
[2026-01-23T18:38:50.814Z] Discord Bot Execution Log
[2026-01-23T18:38:50.814Z] Environment: GitHub Actions
[2026-01-23T18:38:50.814Z] Node Version: v20.20.0
[2026-01-23T18:38:50.814Z] ========================================
[2026-01-23T18:38:50.814Z] Environment Variables Check:
[2026-01-23T18:38:50.814Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T18:38:50.814Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.814Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T18:38:50.815Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T18:38:50.815Z] 
Multi-Channel Configuration:
[2026-01-23T18:38:50.815Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T18:38:50.815Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T18:38:50.815Z] 
Data Files Check:
[2026-01-23T18:38:50.816Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T18:38:50.833Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1789351 bytes)
[2026-01-23T18:38:50.833Z] 
========================================
[2026-01-23T18:38:50.833Z] Starting Enhanced Discord Bot...
[2026-01-23T18:38:50.833Z] ========================================
[2026-01-23T18:38:51.321Z] [BOT] ✅ Loaded V2 database: 3065 jobs
[2026-01-23T18:38:52.048Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T18:38:52.048Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T18:38:52.048Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T18:38:52.207Z] [BOT] ✅ Loaded pending queue: 2774 total (2754 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T18:38:52.210Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T18:38:52.211Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T18:38:52.211Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T18:38:52.211Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T18:38:52.212Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T18:38:52.213Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T18:38:52.214Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T18:38:52.214Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:38:52.230Z] [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T18:38:52.528Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T18:38:52.529Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T18:38:52.529Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T18:38:52.530Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:38:52.532Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:38:52.556Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:38:54.058Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T18:38:54.058Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T18:38:54.304Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T18:38:54.304Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T18:38:54.305Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T18:38:54.305Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:38:54.307Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:38:54.327Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:38:55.828Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:38:56.050Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T18:38:56.050Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T18:38:56.050Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T18:38:56.050Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:38:56.052Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:38:56.076Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:38:57.763Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T18:38:57.763Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T18:38:57.763Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T18:38:57.764Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:38:57.766Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:38:57.786Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:38:59.288Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:38:59.459Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T18:38:59.459Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T18:38:59.460Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:38:59.462Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:38:59.483Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:00.984Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T18:39:00.985Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:39:01.264Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T18:39:01.264Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T18:39:01.265Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:39:01.267Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:39:01.291Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:03.170Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T18:39:03.171Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T18:39:03.171Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:39:03.173Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:39:03.195Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:07.697Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T18:39:07.698Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T18:39:07.698Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T18:39:08.077Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:39:08.078Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T18:39:08.078Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:39:08.080Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:39:08.100Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:09.602Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T18:39:09.602Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T18:39:09.858Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T18:39:09.859Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T18:39:09.859Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:39:09.860Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:39:09.861Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:39:09.881Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:11.382Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T18:39:11.669Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T18:39:11.670Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T18:39:11.670Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:39:11.673Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:39:11.695Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:13.197Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:39:13.443Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T18:39:13.444Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:39:13.444Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:39:13.446Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:39:13.467Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:17.969Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T18:39:17.970Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T18:39:17.970Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T18:39:18.341Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T18:39:18.342Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T18:39:18.342Z] [BOT] 💾 BEFORE ARCHIVING: 3065 jobs in database
[2026-01-23T18:39:18.345Z] [BOT] ✅ No jobs to archive (all 3065 jobs within 7-day window)
[2026-01-23T18:39:18.365Z] [BOT] 💾 Saved posted_jobs.json: 3065 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:39:22.868Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T18:39:22.870Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T18:39:22.964Z] [BOT] 📂 Loaded 7401 existing routing entries
[2026-01-23T18:39:23.069Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7411
   Timestamp: 2026-01-23T18:39:23.039Z
[2026-01-23T18:39:23.070Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T18:39:23.070Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-23T18:39:23.070Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-23T18:39:23.070Z] [BOT] [STATS] Channel stats saved
[2026-01-23T18:39:25.085Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*