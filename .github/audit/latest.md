# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T17:51:38.656Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T17:51:02.648Z] ========================================
[2026-01-23T17:51:02.650Z] Discord Bot Execution Log
[2026-01-23T17:51:02.650Z] Environment: GitHub Actions
[2026-01-23T17:51:02.650Z] Node Version: v20.20.0
[2026-01-23T17:51:02.650Z] ========================================
[2026-01-23T17:51:02.651Z] Environment Variables Check:
[2026-01-23T17:51:02.651Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T17:51:02.651Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.651Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T17:51:02.651Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T17:51:02.651Z] 
Multi-Channel Configuration:
[2026-01-23T17:51:02.651Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.651Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.651Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.652Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.652Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.652Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.652Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.652Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.652Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T17:51:02.652Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T17:51:02.652Z] 
Data Files Check:
[2026-01-23T17:51:02.653Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T17:51:02.666Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1792872 bytes)
[2026-01-23T17:51:02.666Z] 
========================================
[2026-01-23T17:51:02.666Z] Starting Enhanced Discord Bot...
[2026-01-23T17:51:02.666Z] ========================================
[2026-01-23T17:51:03.210Z] [BOT] ✅ Loaded V2 database: 3072 jobs
[2026-01-23T17:51:03.735Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T17:51:03.735Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T17:51:03.736Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T17:51:03.856Z] [BOT] ✅ Loaded pending queue: 2774 total (2754 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T17:51:03.859Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T17:51:03.860Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T17:51:03.860Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T17:51:03.861Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T17:51:03.861Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T17:51:03.861Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T17:51:03.863Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T17:51:03.864Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T17:51:03.864Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:51:03.880Z] [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T17:51:04.043Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T17:51:04.043Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T17:51:04.044Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T17:51:04.044Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:04.046Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:04.070Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:05.572Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T17:51:05.572Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:51:05.820Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T17:51:05.821Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T17:51:05.821Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T17:51:05.821Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:05.823Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:05.842Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:07.344Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:51:07.576Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T17:51:07.577Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T17:51:07.577Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:07.579Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:07.601Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:09.348Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T17:51:09.348Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T17:51:09.349Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T17:51:09.349Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:09.351Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:09.373Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:10.874Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T17:51:10.874Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:51:11.024Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T17:51:11.025Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T17:51:11.025Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T17:51:11.025Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:11.027Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:11.048Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:12.551Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T17:51:12.551Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:51:12.801Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T17:51:12.801Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T17:51:12.802Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T17:51:12.802Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:12.804Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:12.826Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:14.584Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T17:51:14.585Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T17:51:14.585Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:14.587Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:14.607Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:19.109Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T17:51:19.111Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:51:19.280Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T17:51:19.281Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T17:51:19.281Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:19.283Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:19.304Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:20.806Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:51:22.205Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T17:51:22.205Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T17:51:22.205Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:22.207Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:22.227Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:23.728Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:51:23.728Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T17:51:23.930Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T17:51:23.931Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T17:51:23.931Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:23.933Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:23.951Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:25.452Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:51:25.732Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T17:51:25.732Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T17:51:25.732Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T17:51:25.732Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:25.734Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:25.752Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:30.254Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T17:51:30.254Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T17:51:30.254Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T17:51:31.207Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T17:51:31.208Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T17:51:31.208Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T17:51:31.210Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T17:51:31.230Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:51:35.732Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T17:51:35.734Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T17:51:35.818Z] [BOT] 📂 Loaded 7361 existing routing entries
[2026-01-23T17:51:35.914Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T17:51:35.914Z] [BOT] Total entries: 7371
   Timestamp: 2026-01-23T17:51:35.881Z
[2026-01-23T17:51:35.915Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T17:51:35.915Z] [BOT] [STATS] Channel stats saved
[2026-01-23T17:51:37.933Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*