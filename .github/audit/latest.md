# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T18:02:53.026Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T18:02:17.930Z] ========================================
[2026-01-23T18:02:17.931Z] Discord Bot Execution Log
[2026-01-23T18:02:17.932Z] Environment: GitHub Actions
[2026-01-23T18:02:17.932Z] Node Version: v20.20.0
[2026-01-23T18:02:17.932Z] ========================================
[2026-01-23T18:02:17.932Z] Environment Variables Check:
[2026-01-23T18:02:17.932Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T18:02:17.932Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.932Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T18:02:17.932Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T18:02:17.932Z] 
Multi-Channel Configuration:
[2026-01-23T18:02:17.932Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T18:02:17.933Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T18:02:17.933Z] 
Data Files Check:
[2026-01-23T18:02:17.934Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T18:02:17.946Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1792872 bytes)
[2026-01-23T18:02:17.946Z] 
========================================
[2026-01-23T18:02:17.946Z] Starting Enhanced Discord Bot...
[2026-01-23T18:02:17.946Z] ========================================
[2026-01-23T18:02:18.496Z] [BOT] ✅ Loaded V2 database: 3072 jobs
[2026-01-23T18:02:19.166Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T18:02:19.166Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T18:02:19.166Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T18:02:19.285Z] [BOT] ✅ Loaded pending queue: 2775 total (2755 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T18:02:19.291Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T18:02:19.291Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T18:02:19.291Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T18:02:19.292Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T18:02:19.292Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T18:02:19.294Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T18:02:19.295Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T18:02:19.295Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:02:19.312Z] [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T18:02:19.713Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T18:02:19.714Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T18:02:19.714Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:19.716Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:19.740Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
[2026-01-23T18:02:19.740Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:21.242Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T18:02:21.243Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T18:02:21.618Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T18:02:21.618Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T18:02:21.618Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T18:02:21.618Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:21.620Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:21.639Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:23.140Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T18:02:23.140Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T18:02:23.559Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T18:02:23.559Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T18:02:23.560Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T18:02:23.560Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:23.562Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:23.583Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:25.275Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T18:02:25.276Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T18:02:25.276Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:25.278Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:25.299Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:26.799Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T18:02:26.799Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T18:02:27.001Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T18:02:27.001Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T18:02:27.002Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:27.004Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:27.024Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:28.527Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T18:02:28.527Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:02:28.800Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T18:02:28.800Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T18:02:28.801Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T18:02:28.801Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:28.803Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:28.827Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:30.745Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T18:02:30.745Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T18:02:30.746Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T18:02:30.746Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:30.748Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:30.769Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:35.271Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T18:02:35.273Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:02:35.273Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:02:35.483Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T18:02:35.483Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:02:35.483Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T18:02:35.483Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:35.485Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:35.506Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:37.009Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T18:02:37.009Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:02:37.198Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T18:02:37.198Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T18:02:37.198Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:02:37.199Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:37.201Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:37.220Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:38.722Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T18:02:38.723Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T18:02:38.881Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T18:02:38.882Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T18:02:38.882Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T18:02:38.882Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:38.884Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:38.903Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:40.405Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:02:40.651Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T18:02:40.651Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T18:02:40.652Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:02:40.652Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:40.653Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:40.674Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:45.176Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T18:02:45.176Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T18:02:45.176Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T18:02:45.536Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T18:02:45.537Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T18:02:45.537Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:02:45.539Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:02:45.559Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:02:50.061Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T18:02:50.063Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T18:02:50.146Z] [BOT] 📂 Loaded 7371 existing routing entries
[2026-01-23T18:02:50.244Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T18:02:50.245Z] [BOT] New entries: 10
   Total entries: 7381
   Timestamp: 2026-01-23T18:02:50.211Z
[2026-01-23T18:02:50.245Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T18:02:50.245Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
[2026-01-23T18:02:50.245Z] [BOT] Channels used: 4
   Top channels:
[2026-01-23T18:02:50.245Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T18:02:50.246Z] [BOT] [STATS] Channel stats saved
[2026-01-23T18:02:52.264Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2468) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*