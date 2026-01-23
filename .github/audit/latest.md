# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T16:31:42.741Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T16:31:07.242Z] ========================================
[2026-01-23T16:31:07.244Z] Discord Bot Execution Log
[2026-01-23T16:31:07.244Z] Environment: GitHub Actions
[2026-01-23T16:31:07.244Z] Node Version: v20.20.0
[2026-01-23T16:31:07.244Z] ========================================
[2026-01-23T16:31:07.244Z] Environment Variables Check:
[2026-01-23T16:31:07.244Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T16:31:07.245Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T16:31:07.245Z] 
Multi-Channel Configuration:
[2026-01-23T16:31:07.245Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.245Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.246Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.246Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T16:31:07.246Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T16:31:07.246Z] 
Data Files Check:
[2026-01-23T16:31:07.247Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T16:31:07.258Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1800604 bytes)
[2026-01-23T16:31:07.258Z] 
========================================
[2026-01-23T16:31:07.259Z] Starting Enhanced Discord Bot...
[2026-01-23T16:31:07.259Z] ========================================
[2026-01-23T16:31:07.832Z] [BOT] ✅ Loaded V2 database: 3085 jobs
[2026-01-23T16:31:08.756Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T16:31:08.757Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T16:31:08.757Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T16:31:08.871Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[2026-01-23T16:31:08.871Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T16:31:08.876Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T16:31:08.876Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T16:31:08.876Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T16:31:08.877Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T16:31:08.877Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T16:31:08.877Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T16:31:08.879Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T16:31:08.880Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T16:31:08.880Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:31:08.897Z] [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T16:31:09.353Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T16:31:09.353Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T16:31:09.354Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T16:31:09.354Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T16:31:09.357Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T16:31:09.363Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-23T16:31:09.364Z] [BOT] ✅ Archiving complete: 1 archived, 3084 active
[2026-01-23T16:31:09.385Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:10.886Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T16:31:10.887Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:31:11.111Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T16:31:11.111Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T16:31:11.112Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T16:31:11.112Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:11.114Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:11.133Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:12.633Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:31:12.890Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T16:31:12.890Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T16:31:12.891Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T16:31:12.891Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:12.893Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:12.914Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:14.599Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T16:31:14.600Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T16:31:14.600Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:14.602Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:14.623Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:16.125Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:31:16.316Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T16:31:16.317Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:16.319Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:16.338Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:17.840Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T16:31:17.840Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T16:31:18.045Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T16:31:18.046Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T16:31:18.046Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:18.049Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:18.071Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:19.879Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T16:31:19.879Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T16:31:19.880Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T16:31:19.880Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:19.882Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:19.903Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:24.405Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T16:31:24.406Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T16:31:24.728Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T16:31:24.728Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T16:31:24.729Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:24.731Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:24.752Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:26.254Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T16:31:26.254Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T16:31:26.523Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T16:31:26.524Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T16:31:26.524Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T16:31:26.524Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:26.526Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:26.546Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:28.048Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T16:31:28.048Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T16:31:28.218Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T16:31:28.219Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T16:31:28.219Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T16:31:28.219Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:28.221Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:28.240Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:29.741Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T16:31:29.741Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T16:31:29.949Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T16:31:29.949Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T16:31:29.950Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T16:31:29.950Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:29.951Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:29.970Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:34.472Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T16:31:34.473Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T16:31:34.473Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T16:31:34.883Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T16:31:34.884Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T16:31:34.884Z] [BOT] 💾 BEFORE ARCHIVING: 3084 jobs in database
[2026-01-23T16:31:34.886Z] [BOT] ✅ No jobs to archive (all 3084 jobs within 7-day window)
[2026-01-23T16:31:34.906Z] [BOT] 💾 Saved posted_jobs.json: 3084 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T16:31:39.409Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T16:31:39.411Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T16:31:39.494Z] [BOT] 📂 Loaded 7311 existing routing entries
[2026-01-23T16:31:39.592Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7321
[2026-01-23T16:31:39.592Z] [BOT] Timestamp: 2026-01-23T16:31:39.558Z
[2026-01-23T16:31:39.592Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T16:31:39.593Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T16:31:39.593Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T16:31:39.593Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T16:31:39.593Z] [BOT] [STATS] Channel stats saved
[2026-01-23T16:31:41.611Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*