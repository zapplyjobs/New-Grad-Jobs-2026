# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T16:21:19.832Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T16:20:36.712Z] ========================================
[2026-01-22T16:20:36.714Z] Discord Bot Execution Log
[2026-01-22T16:20:36.714Z] Environment: GitHub Actions
[2026-01-22T16:20:36.714Z] Node Version: v20.19.6
[2026-01-22T16:20:36.714Z] ========================================
[2026-01-22T16:20:36.714Z] Environment Variables Check:
[2026-01-22T16:20:36.714Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T16:20:36.714Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.714Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T16:20:36.714Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T16:20:36.714Z] 
Multi-Channel Configuration:
[2026-01-22T16:20:36.714Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T16:20:36.715Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T16:20:36.715Z] 
Data Files Check:
[2026-01-22T16:20:36.716Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T16:20:36.730Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2003249 bytes)
[2026-01-22T16:20:36.730Z] 
========================================
[2026-01-22T16:20:36.730Z] Starting Enhanced Discord Bot...
[2026-01-22T16:20:36.730Z] ========================================
[2026-01-22T16:20:37.277Z] [BOT] ✅ Loaded V2 database: 3442 jobs
[2026-01-22T16:20:38.102Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T16:20:38.102Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T16:20:38.103Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T16:20:38.221Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T16:20:38.224Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T16:20:38.225Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T16:20:38.225Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T16:20:38.226Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T16:20:38.226Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T16:20:38.229Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T16:20:38.230Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T16:20:38.230Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:20:38.247Z] [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T16:20:38.548Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T16:20:38.548Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T16:20:38.549Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T16:20:38.549Z] [BOT] 💾 BEFORE ARCHIVING: 3442 jobs in database
[2026-01-22T16:20:38.552Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T16:20:38.558Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-22T16:20:38.558Z] [BOT] ✅ Archiving complete: 3 archived, 3439 active
[2026-01-22T16:20:38.588Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
[2026-01-22T16:20:38.588Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:40.090Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T16:20:40.090Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:20:40.446Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T16:20:40.447Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T16:20:40.447Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T16:20:40.447Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:40.450Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:40.470Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:42.181Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T16:20:42.181Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T16:20:42.182Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T16:20:42.182Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:42.185Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:42.209Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:43.710Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:20:43.988Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T16:20:43.989Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T16:20:43.989Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:43.992Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:44.014Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:45.755Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T16:20:45.755Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T16:20:45.755Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:45.757Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:45.778Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:47.280Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T16:20:47.280Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:20:47.661Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T16:20:47.662Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T16:20:47.662Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:47.664Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:47.690Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:49.192Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T16:20:49.193Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T16:20:49.441Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T16:20:49.442Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T16:20:49.442Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:49.445Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:49.468Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:51.377Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T16:20:51.377Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T16:20:51.378Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T16:20:51.378Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:51.380Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:51.402Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:55.903Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T16:20:55.905Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:20:56.342Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T16:20:56.343Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T16:20:56.343Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:56.345Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:56.366Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:20:57.869Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:20:58.260Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T16:20:58.260Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T16:20:58.260Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T16:20:58.260Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:20:58.262Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:20:58.284Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:21:00.021Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T16:21:00.022Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T16:21:00.022Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:21:00.024Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:21:00.045Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:21:01.545Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T16:21:01.546Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T16:21:01.862Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T16:21:01.862Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T16:21:01.862Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T16:21:01.862Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:21:01.864Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:21:01.885Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:21:03.386Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T16:21:03.386Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T16:21:03.599Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T16:21:03.599Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T16:21:03.599Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T16:21:03.599Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:21:03.601Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:21:03.622Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:21:05.348Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T16:21:05.348Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T16:21:05.349Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:21:05.351Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:21:05.372Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:21:09.873Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T16:21:09.873Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T16:21:09.874Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T16:21:12.188Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T16:21:12.188Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T16:21:12.189Z] [BOT] 💾 BEFORE ARCHIVING: 3439 jobs in database
[2026-01-22T16:21:12.191Z] [BOT] ✅ No jobs to archive (all 3439 jobs within 7-day window)
[2026-01-22T16:21:12.212Z] [BOT] 💾 Saved posted_jobs.json: 3439 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T16:21:16.714Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T16:21:16.715Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T16:21:16.800Z] [BOT] 📂 Loaded 6651 existing routing entries
[2026-01-22T16:21:16.896Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6661
[2026-01-22T16:21:16.896Z] [BOT] Timestamp: 2026-01-22T16:21:16.864Z
[2026-01-22T16:21:16.897Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T16:21:16.897Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-22T16:21:16.897Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-22T16:21:16.897Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T16:21:16.897Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T16:21:16.897Z] [BOT] [STATS] Channel stats saved
[2026-01-22T16:21:18.916Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*