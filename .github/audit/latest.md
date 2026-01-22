# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T05:23:19.575Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T05:22:40.741Z] ========================================
[2026-01-22T05:22:40.743Z] Discord Bot Execution Log
[2026-01-22T05:22:40.743Z] Environment: GitHub Actions
[2026-01-22T05:22:40.743Z] Node Version: v20.19.6
[2026-01-22T05:22:40.743Z] ========================================
[2026-01-22T05:22:40.743Z] Environment Variables Check:
[2026-01-22T05:22:40.743Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T05:22:40.743Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.743Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T05:22:40.743Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T05:22:40.743Z] 
Multi-Channel Configuration:
[2026-01-22T05:22:40.744Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T05:22:40.744Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T05:22:40.744Z] 
Data Files Check:
[2026-01-22T05:22:40.745Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T05:22:40.760Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2102734 bytes)
[2026-01-22T05:22:40.760Z] 
========================================
[2026-01-22T05:22:40.760Z] Starting Enhanced Discord Bot...
[2026-01-22T05:22:40.760Z] ========================================
[2026-01-22T05:22:41.338Z] [BOT] ✅ Loaded V2 database: 3615 jobs
[2026-01-22T05:22:41.850Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T05:22:41.850Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T05:22:41.851Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T05:22:41.967Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T05:22:41.971Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T05:22:41.972Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T05:22:41.972Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T05:22:41.973Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T05:22:41.974Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T05:22:41.976Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T05:22:41.977Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T05:22:41.977Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:22:41.994Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T05:22:42.124Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T05:22:42.124Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T05:22:42.125Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T05:22:42.125Z] [BOT] 💾 BEFORE ARCHIVING: 3615 jobs in database
[2026-01-22T05:22:42.128Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T05:22:42.133Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T05:22:42.133Z] [BOT] ✅ Archiving complete: 10 archived, 3605 active
[2026-01-22T05:22:42.164Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
[2026-01-22T05:22:42.164Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:43.666Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:22:43.859Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T05:22:43.860Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T05:22:43.860Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:43.863Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:43.883Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:45.517Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T05:22:45.518Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T05:22:45.518Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:45.520Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:45.545Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:47.046Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T05:22:47.047Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:22:47.234Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T05:22:47.235Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T05:22:47.235Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:47.237Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:47.260Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:49.020Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T05:22:49.021Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T05:22:49.021Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T05:22:49.021Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:49.023Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:49.044Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:50.545Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T05:22:50.546Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:22:50.739Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T05:22:50.739Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T05:22:50.740Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T05:22:50.740Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:50.743Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:50.768Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:52.271Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T05:22:52.417Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T05:22:52.417Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T05:22:52.417Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T05:22:52.417Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:52.420Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:52.445Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:54.175Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T05:22:54.175Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T05:22:54.176Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:54.178Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:54.200Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:22:58.702Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T05:22:58.703Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:22:58.970Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T05:22:58.971Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T05:22:58.971Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:22:58.973Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:22:58.994Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:23:00.497Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:23:00.677Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T05:23:00.677Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T05:23:00.677Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:23:00.679Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:23:00.700Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:23:02.369Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T05:23:02.370Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T05:23:02.370Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:23:02.372Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:23:02.394Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:23:03.896Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T05:23:03.896Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T05:23:04.027Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T05:23:04.027Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T05:23:04.027Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T05:23:04.027Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:23:04.029Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:23:04.050Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:23:05.551Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T05:23:05.737Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T05:23:05.737Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T05:23:05.737Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:23:05.739Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:23:05.760Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:23:07.411Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T05:23:07.411Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T05:23:07.411Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T05:23:07.412Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:23:07.414Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:23:07.434Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:23:11.936Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T05:23:11.936Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T05:23:11.936Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T05:23:12.251Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T05:23:12.251Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T05:23:12.251Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T05:23:12.251Z] [BOT] 💾 BEFORE ARCHIVING: 3605 jobs in database
[2026-01-22T05:23:12.253Z] [BOT] ✅ No jobs to archive (all 3605 jobs within 7-day window)
[2026-01-22T05:23:12.274Z] [BOT] 💾 Saved posted_jobs.json: 3605 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T05:23:16.776Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T05:23:16.777Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T05:23:16.857Z] [BOT] 📂 Loaded 6311 existing routing entries
[2026-01-22T05:23:16.949Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T05:23:16.949Z] [BOT] Total entries: 6321
   Timestamp: 2026-01-22T05:23:16.919Z
[2026-01-22T05:23:16.949Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T05:23:16.950Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T05:23:16.950Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-22T05:23:16.950Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T05:23:16.950Z] [BOT] 4. #JID_98d4f0de: 2 posts
[2026-01-22T05:23:16.950Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T05:23:16.950Z] [BOT] [STATS] Channel stats saved
[2026-01-22T05:23:18.968Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*