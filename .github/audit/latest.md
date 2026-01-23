# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T14:14:44.549Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T14:14:10.040Z] ========================================
[2026-01-23T14:14:10.042Z] Discord Bot Execution Log
[2026-01-23T14:14:10.042Z] Environment: GitHub Actions
[2026-01-23T14:14:10.042Z] Node Version: v20.20.0
[2026-01-23T14:14:10.042Z] ========================================
[2026-01-23T14:14:10.042Z] Environment Variables Check:
[2026-01-23T14:14:10.042Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T14:14:10.043Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T14:14:10.043Z] 
Multi-Channel Configuration:
[2026-01-23T14:14:10.043Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.043Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.044Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.044Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T14:14:10.044Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T14:14:10.044Z] 
Data Files Check:
[2026-01-23T14:14:10.045Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T14:14:10.056Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1802675 bytes)
[2026-01-23T14:14:10.056Z] 
========================================
[2026-01-23T14:14:10.056Z] Starting Enhanced Discord Bot...
[2026-01-23T14:14:10.056Z] ========================================
[2026-01-23T14:14:10.591Z] [BOT] ✅ Loaded V2 database: 3089 jobs
[2026-01-23T14:14:11.012Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T14:14:11.012Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T14:14:11.012Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T14:14:11.129Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T14:14:11.133Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T14:14:11.133Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T14:14:11.133Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T14:14:11.134Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T14:14:11.134Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T14:14:11.136Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T14:14:11.137Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T14:14:11.137Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:14:11.154Z] [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T14:14:11.549Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T14:14:11.549Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T14:14:11.550Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T14:14:11.550Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:11.552Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:11.576Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:13.078Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T14:14:13.078Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:14:13.296Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T14:14:13.296Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T14:14:13.297Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T14:14:13.297Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:13.299Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:13.320Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:14.821Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T14:14:14.821Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:14:15.082Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T14:14:15.083Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T14:14:15.083Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:15.085Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:15.108Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:16.891Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T14:14:16.891Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T14:14:16.891Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T14:14:16.892Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:16.894Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:16.915Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:18.417Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:14:18.789Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T14:14:18.789Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T14:14:18.790Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T14:14:18.790Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:18.792Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:18.814Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:20.316Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T14:14:20.316Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:14:20.477Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T14:14:20.478Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T14:14:20.478Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:20.480Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:20.503Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:22.389Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T14:14:22.390Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T14:14:22.390Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T14:14:22.390Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:22.392Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:22.414Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:26.916Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T14:14:26.918Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:14:27.091Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T14:14:27.091Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T14:14:27.091Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:27.093Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:27.114Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
[2026-01-23T14:14:27.114Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:28.617Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T14:14:28.617Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:14:28.778Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T14:14:28.778Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T14:14:28.779Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T14:14:28.779Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:28.781Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:28.800Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
[2026-01-23T14:14:28.800Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:30.301Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T14:14:30.302Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T14:14:30.503Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T14:14:30.503Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T14:14:30.503Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T14:14:30.503Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:30.505Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:30.525Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:32.026Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:14:32.171Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T14:14:32.172Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T14:14:32.172Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:32.174Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:32.194Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:36.695Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T14:14:36.696Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T14:14:36.696Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T14:14:37.168Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T14:14:37.168Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T14:14:37.168Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:14:37.170Z] [BOT] ✅ No jobs to archive (all 3089 jobs within 7-day window)
[2026-01-23T14:14:37.189Z] [BOT] 💾 Saved posted_jobs.json: 3089 active jobs
[2026-01-23T14:14:37.189Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T14:14:41.691Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T14:14:41.693Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T14:14:41.775Z] [BOT] 📂 Loaded 7241 existing routing entries
[2026-01-23T14:14:41.869Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T14:14:41.869Z] [BOT] Total entries: 7251
   Timestamp: 2026-01-23T14:14:41.837Z
[2026-01-23T14:14:41.870Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T14:14:41.870Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T14:14:41.870Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T14:14:41.870Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T14:14:41.871Z] [BOT] [STATS] Channel stats saved
[2026-01-23T14:14:43.888Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2530) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*