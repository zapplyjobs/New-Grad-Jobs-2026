# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T23:31:38.481Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T23:31:03.502Z] ========================================
[2026-01-22T23:31:03.504Z] Discord Bot Execution Log
[2026-01-22T23:31:03.504Z] Environment: GitHub Actions
[2026-01-22T23:31:03.504Z] Node Version: v20.20.0
[2026-01-22T23:31:03.504Z] ========================================
[2026-01-22T23:31:03.504Z] Environment Variables Check:
[2026-01-22T23:31:03.504Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T23:31:03.504Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.504Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T23:31:03.504Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T23:31:03.505Z] 
Multi-Channel Configuration:
[2026-01-22T23:31:03.505Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T23:31:03.505Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T23:31:03.505Z] 
Data Files Check:
[2026-01-22T23:31:03.506Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-22T23:31:03.518Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1919056 bytes)
[2026-01-22T23:31:03.518Z] 
========================================
[2026-01-22T23:31:03.518Z] Starting Enhanced Discord Bot...
[2026-01-22T23:31:03.518Z] ========================================
[2026-01-22T23:31:04.046Z] [BOT] ✅ Loaded V2 database: 3294 jobs
[2026-01-22T23:31:05.080Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T23:31:05.081Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T23:31:05.081Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T23:31:05.210Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T23:31:05.215Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T23:31:05.215Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T23:31:05.215Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T23:31:05.216Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T23:31:05.216Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T23:31:05.218Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T23:31:05.219Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T23:31:05.219Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:31:05.235Z] [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T23:31:05.537Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T23:31:05.537Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T23:31:05.537Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T23:31:05.538Z] [BOT] 💾 BEFORE ARCHIVING: 3294 jobs in database
[2026-01-22T23:31:05.540Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T23:31:05.542Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-22T23:31:05.543Z] [BOT] ✅ Archiving complete: 9 archived, 3285 active
[2026-01-22T23:31:05.562Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:07.064Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T23:31:07.064Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T23:31:07.322Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T23:31:07.322Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T23:31:07.323Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T23:31:07.323Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:07.325Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:07.345Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
[2026-01-22T23:31:07.345Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:08.846Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:31:09.035Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T23:31:09.036Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T23:31:09.036Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T23:31:09.036Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:09.039Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:09.061Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
[2026-01-22T23:31:09.061Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:10.732Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T23:31:10.733Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:31:10.733Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T23:31:10.733Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:10.735Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:10.757Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
[2026-01-22T23:31:10.757Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:12.257Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T23:31:12.258Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T23:31:12.484Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T23:31:12.484Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T23:31:12.485Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T23:31:12.485Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:12.487Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:12.508Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
[2026-01-22T23:31:12.508Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:14.009Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T23:31:14.009Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T23:31:14.225Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T23:31:14.226Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T23:31:14.226Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T23:31:14.226Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:14.228Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:14.252Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:16.056Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T23:31:16.056Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T23:31:16.057Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T23:31:16.057Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:16.059Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:16.080Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:20.582Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T23:31:20.584Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:31:20.844Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T23:31:20.844Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T23:31:20.845Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:20.847Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:20.869Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
[2026-01-22T23:31:20.869Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:22.371Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:31:22.527Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T23:31:22.528Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:31:22.528Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:22.530Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:22.549Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:24.050Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T23:31:24.050Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T23:31:24.248Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T23:31:24.249Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T23:31:24.249Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:24.251Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:24.271Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:25.772Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T23:31:25.772Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T23:31:25.946Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T23:31:25.946Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T23:31:25.946Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:25.948Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:25.968Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:30.470Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-22T23:31:30.470Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-22T23:31:30.703Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-22T23:31:30.704Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-22T23:31:30.704Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-22T23:31:30.704Z] [BOT] 💾 BEFORE ARCHIVING: 3285 jobs in database
[2026-01-22T23:31:30.706Z] [BOT] ✅ No jobs to archive (all 3285 jobs within 7-day window)
[2026-01-22T23:31:30.725Z] [BOT] 💾 Saved posted_jobs.json: 3285 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T23:31:35.227Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T23:31:35.229Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T23:31:35.309Z] [BOT] 📂 Loaded 6891 existing routing entries
[2026-01-22T23:31:35.402Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T23:31:35.402Z] [BOT] Total entries: 6901
   Timestamp: 2026-01-22T23:31:35.371Z
[2026-01-22T23:31:35.402Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-22T23:31:35.403Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-22T23:31:37.417Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2456) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*