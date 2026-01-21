# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T22:00:08.504Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T21:59:25.627Z] ========================================
[2026-01-21T21:59:25.629Z] Discord Bot Execution Log
[2026-01-21T21:59:25.629Z] Environment: GitHub Actions
[2026-01-21T21:59:25.629Z] Node Version: v20.19.6
[2026-01-21T21:59:25.629Z] ========================================
[2026-01-21T21:59:25.629Z] Environment Variables Check:
[2026-01-21T21:59:25.629Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T21:59:25.629Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.629Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T21:59:25.629Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T21:59:25.629Z] 
Multi-Channel Configuration:
[2026-01-21T21:59:25.629Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T21:59:25.630Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T21:59:25.630Z] 
Data Files Check:
[2026-01-21T21:59:25.631Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T21:59:25.645Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2204929 bytes)
[2026-01-21T21:59:25.645Z] 
========================================
[2026-01-21T21:59:25.645Z] Starting Enhanced Discord Bot...
[2026-01-21T21:59:25.645Z] ========================================
[2026-01-21T21:59:26.198Z] [BOT] ✅ Loaded V2 database: 3807 jobs
[2026-01-21T21:59:26.794Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T21:59:26.794Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T21:59:26.794Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T21:59:26.911Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T21:59:26.916Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T21:59:26.916Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T21:59:26.917Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T21:59:26.918Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T21:59:26.918Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T21:59:26.921Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T21:59:26.921Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T21:59:26.921Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:59:26.939Z] [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T21:59:27.099Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T21:59:27.099Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T21:59:27.100Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T21:59:27.100Z] [BOT] 💾 BEFORE ARCHIVING: 3807 jobs in database
[2026-01-21T21:59:27.103Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T21:59:27.108Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T21:59:27.108Z] [BOT] ✅ Archiving complete: 10 archived, 3797 active
[2026-01-21T21:59:27.138Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
[2026-01-21T21:59:27.139Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:28.640Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:59:30.313Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T21:59:30.313Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T21:59:30.314Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:30.316Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:30.340Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:32.100Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T21:59:32.101Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T21:59:32.101Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:32.104Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:32.129Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:33.630Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:59:33.847Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T21:59:33.848Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-21T21:59:33.848Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:33.850Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:33.876Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:35.687Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-21T21:59:35.688Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-21T21:59:35.688Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T21:59:35.688Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:35.691Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:35.717Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:37.218Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-21T21:59:37.218Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:59:37.461Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T21:59:37.462Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T21:59:37.462Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:37.465Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:37.489Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:38.991Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T21:59:39.439Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T21:59:39.440Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T21:59:39.441Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:39.444Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:39.472Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:41.136Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T21:59:41.137Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T21:59:41.137Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:41.140Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:41.163Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:45.665Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T21:59:45.666Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:59:45.917Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-21T21:59:45.917Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T21:59:45.918Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T21:59:45.918Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:45.920Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:45.945Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:47.447Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:59:47.937Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-21T21:59:47.937Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T21:59:47.938Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T21:59:47.938Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:47.941Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:47.972Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:49.790Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T21:59:49.791Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T21:59:49.791Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:49.793Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:49.818Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:51.319Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-21T21:59:51.319Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T21:59:52.089Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T21:59:52.090Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T21:59:52.090Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:52.092Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:52.116Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:53.618Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-21T21:59:53.618Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T21:59:53.938Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T21:59:53.939Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T21:59:53.939Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:53.941Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:53.963Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T21:59:55.964Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T21:59:55.964Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T21:59:55.965Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T21:59:55.965Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T21:59:55.968Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T21:59:55.991Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:00:00.493Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T22:00:00.493Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-21T22:00:00.493Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T22:00:00.882Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T22:00:00.883Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T22:00:00.883Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T22:00:00.885Z] [BOT] ✅ No jobs to archive (all 3797 jobs within 7-day window)
[2026-01-21T22:00:00.909Z] [BOT] 💾 Saved posted_jobs.json: 3797 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:00:05.412Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T22:00:05.414Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T22:00:05.482Z] [BOT] 📂 Loaded 6141 existing routing entries
[2026-01-21T22:00:05.566Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-21T22:00:05.567Z] [BOT] New entries: 10
   Total entries: 6151
   Timestamp: 2026-01-21T22:00:05.535Z
[2026-01-21T22:00:05.568Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-21T22:00:05.568Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-21T22:00:05.568Z] [BOT] [STATS] Channel stats saved
[2026-01-21T22:00:07.585Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2379) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*