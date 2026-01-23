# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T11:30:44.512Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T11:30:10.058Z] ========================================
[2026-01-23T11:30:10.060Z] Discord Bot Execution Log
[2026-01-23T11:30:10.060Z] Environment: GitHub Actions
[2026-01-23T11:30:10.060Z] Node Version: v20.20.0
[2026-01-23T11:30:10.060Z] ========================================
[2026-01-23T11:30:10.060Z] Environment Variables Check:
[2026-01-23T11:30:10.060Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T11:30:10.060Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.060Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T11:30:10.060Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T11:30:10.061Z] 
Multi-Channel Configuration:
[2026-01-23T11:30:10.061Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T11:30:10.061Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T11:30:10.061Z] 
Data Files Check:
[2026-01-23T11:30:10.062Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T11:30:10.075Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1806037 bytes)
[2026-01-23T11:30:10.075Z] 
========================================
[2026-01-23T11:30:10.075Z] Starting Enhanced Discord Bot...
[2026-01-23T11:30:10.075Z] ========================================
[2026-01-23T11:30:10.635Z] [BOT] ✅ Loaded V2 database: 3095 jobs
[2026-01-23T11:30:11.686Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T11:30:11.687Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T11:30:11.687Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T11:30:11.797Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[2026-01-23T11:30:11.798Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T11:30:11.802Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T11:30:11.802Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T11:30:11.802Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T11:30:11.803Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T11:30:11.803Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T11:30:11.804Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T11:30:11.805Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T11:30:11.806Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T11:30:11.806Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:30:11.823Z] [BOT ERROR] (node:2502) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T11:30:12.270Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T11:30:12.270Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T11:30:12.270Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T11:30:12.271Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:12.273Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:12.299Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:30:12.299Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:13.801Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T11:30:13.801Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:30:13.985Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T11:30:13.985Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T11:30:13.985Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T11:30:13.986Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:13.988Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:14.007Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:15.509Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T11:30:15.509Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:30:15.688Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T11:30:15.689Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T11:30:15.689Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T11:30:15.689Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:15.692Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:15.714Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:17.370Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T11:30:17.370Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T11:30:17.371Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T11:30:17.371Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:17.373Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:17.393Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:18.894Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T11:30:18.894Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:30:19.054Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T11:30:19.055Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T11:30:19.055Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T11:30:19.055Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:19.057Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:19.076Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:20.577Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T11:30:20.577Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T11:30:20.705Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T11:30:20.706Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T11:30:20.706Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:20.708Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:20.730Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:22.431Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T11:30:22.431Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T11:30:22.431Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T11:30:22.432Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:22.433Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:22.453Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:26.955Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T11:30:26.957Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T11:30:26.957Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T11:30:27.130Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T11:30:27.131Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T11:30:27.131Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:27.133Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:27.153Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:30:27.153Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:28.656Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T11:30:28.656Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T11:30:28.804Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T11:30:28.804Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T11:30:28.805Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T11:30:28.805Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:28.807Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:28.826Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:30.328Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T11:30:30.328Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T11:30:30.595Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T11:30:30.595Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T11:30:30.596Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:30.597Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:30.616Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:30:30.616Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:32.116Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T11:30:32.117Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T11:30:32.313Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T11:30:32.314Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T11:30:32.314Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T11:30:32.314Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:32.316Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:32.334Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:30:32.334Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:36.837Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T11:30:36.837Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T11:30:36.837Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T11:30:37.171Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T11:30:37.171Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T11:30:37.171Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T11:30:37.171Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:30:37.173Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:30:37.191Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:30:37.192Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:30:41.694Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T11:30:41.696Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T11:30:41.776Z] [BOT] 📂 Loaded 7181 existing routing entries
[2026-01-23T11:30:41.870Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T11:30:41.870Z] [BOT] Total entries: 7191
   Timestamp: 2026-01-23T11:30:41.839Z
[2026-01-23T11:30:41.871Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T11:30:41.871Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T11:30:41.871Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T11:30:41.872Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T11:30:43.889Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2502) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*