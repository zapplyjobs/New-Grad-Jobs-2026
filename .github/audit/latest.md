# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T12:16:42.076Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T12:16:01.314Z] ========================================
[2026-01-22T12:16:01.316Z] Discord Bot Execution Log
[2026-01-22T12:16:01.317Z] Environment: GitHub Actions
[2026-01-22T12:16:01.317Z] Node Version: v20.19.6
[2026-01-22T12:16:01.317Z] ========================================
[2026-01-22T12:16:01.317Z] Environment Variables Check:
[2026-01-22T12:16:01.317Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T12:16:01.317Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.317Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T12:16:01.317Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T12:16:01.317Z] 
Multi-Channel Configuration:
[2026-01-22T12:16:01.317Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T12:16:01.318Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T12:16:01.318Z] 
Data Files Check:
[2026-01-22T12:16:01.319Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T12:16:01.332Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T12:16:01.332Z] 
========================================
[2026-01-22T12:16:01.332Z] Starting Enhanced Discord Bot...
[2026-01-22T12:16:01.333Z] ========================================
[2026-01-22T12:16:01.881Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T12:16:02.730Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T12:16:02.730Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T12:16:02.730Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T12:16:02.848Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T12:16:02.853Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T12:16:02.853Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T12:16:02.853Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T12:16:02.854Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T12:16:02.855Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T12:16:02.858Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T12:16:02.858Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T12:16:02.858Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:16:02.876Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T12:16:03.331Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T12:16:03.331Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T12:16:03.332Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T12:16:03.332Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:03.335Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:03.364Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:04.865Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T12:16:04.865Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:16:05.175Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T12:16:05.176Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T12:16:05.176Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:05.178Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:05.200Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:06.922Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T12:16:06.922Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T12:16:06.922Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T12:16:06.922Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:06.925Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:06.948Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:08.450Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T12:16:08.450Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T12:16:08.677Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T12:16:08.678Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T12:16:08.678Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:08.680Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:08.704Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:10.401Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T12:16:10.401Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T12:16:10.402Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:10.404Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:10.425Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:11.926Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T12:16:11.926Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:16:12.188Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T12:16:12.189Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T12:16:12.189Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:12.191Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:12.216Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:13.718Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T12:16:13.718Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T12:16:13.952Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T12:16:13.952Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T12:16:13.953Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T12:16:13.953Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:13.955Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:13.978Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:15.780Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T12:16:15.780Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:15.782Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:15.809Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:20.311Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T12:16:20.312Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:16:20.497Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T12:16:20.498Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T12:16:20.498Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:20.500Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:20.520Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:22.023Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:16:22.229Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T12:16:22.229Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T12:16:22.229Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:22.231Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:22.252Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:23.964Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T12:16:23.965Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T12:16:23.965Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:23.967Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:23.987Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:25.489Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:16:25.489Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T12:16:25.839Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T12:16:25.839Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T12:16:25.839Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:25.841Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:25.861Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:27.363Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:16:27.552Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T12:16:27.552Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T12:16:27.552Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:27.554Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:27.575Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:29.259Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T12:16:29.260Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T12:16:29.260Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:29.262Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:29.283Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:33.785Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T12:16:33.785Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T12:16:33.785Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T12:16:34.036Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T12:16:34.036Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T12:16:34.036Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:16:34.038Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:16:34.062Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:16:38.564Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T12:16:38.566Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T12:16:38.649Z] [BOT] 📂 Loaded 6541 existing routing entries
[2026-01-22T12:16:38.746Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T12:16:38.746Z] [BOT] Total entries: 6551
   Timestamp: 2026-01-22T12:16:38.714Z
[2026-01-22T12:16:38.747Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T12:16:38.747Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T12:16:38.747Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T12:16:38.748Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T12:16:38.748Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T12:16:38.748Z] [BOT] 4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T12:16:38.748Z] [BOT] [STATS] Channel stats saved
[2026-01-22T12:16:40.765Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*