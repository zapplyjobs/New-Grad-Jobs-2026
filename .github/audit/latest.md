# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T09:20:55.175Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T09:20:20.536Z] ========================================
[2026-01-23T09:20:20.538Z] Discord Bot Execution Log
[2026-01-23T09:20:20.538Z] Environment: GitHub Actions
[2026-01-23T09:20:20.538Z] Node Version: v20.20.0
[2026-01-23T09:20:20.538Z] ========================================
[2026-01-23T09:20:20.538Z] Environment Variables Check:
[2026-01-23T09:20:20.538Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T09:20:20.539Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T09:20:20.539Z] 
Multi-Channel Configuration:
[2026-01-23T09:20:20.539Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.539Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.540Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T09:20:20.540Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T09:20:20.540Z] 
Data Files Check:
[2026-01-23T09:20:20.540Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T09:20:20.552Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1807462 bytes)
[2026-01-23T09:20:20.552Z] 
========================================
[2026-01-23T09:20:20.552Z] Starting Enhanced Discord Bot...
[2026-01-23T09:20:20.552Z] ========================================
[2026-01-23T09:20:21.095Z] [BOT] ✅ Loaded V2 database: 3097 jobs
[2026-01-23T09:20:21.681Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T09:20:21.681Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T09:20:21.681Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T09:20:21.795Z] [BOT] ✅ Loaded pending queue: 2760 total (2740 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T09:20:21.799Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T09:20:21.800Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T09:20:21.800Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T09:20:21.800Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T09:20:21.801Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T09:20:21.802Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T09:20:21.803Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T09:20:21.803Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:20:21.820Z] [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T09:20:22.165Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T09:20:22.165Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T09:20:22.166Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T09:20:22.166Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T09:20:22.169Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T09:20:22.174Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-23T09:20:22.174Z] [BOT] ✅ Archiving complete: 1 archived, 3096 active
[2026-01-23T09:20:22.200Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
[2026-01-23T09:20:22.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:23.702Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T09:20:23.702Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:20:23.897Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T09:20:23.898Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T09:20:23.898Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T09:20:23.898Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:23.900Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:23.919Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:25.420Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T09:20:25.421Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T09:20:25.662Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T09:20:25.662Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T09:20:25.663Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T09:20:25.663Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:25.665Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:25.687Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:27.467Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T09:20:27.467Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T09:20:27.468Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T09:20:27.468Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:27.470Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:27.492Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:28.994Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T09:20:28.994Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T09:20:29.278Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T09:20:29.278Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T09:20:29.278Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T09:20:29.278Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:29.280Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:29.301Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:30.803Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T09:20:30.803Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T09:20:31.012Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T09:20:31.013Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T09:20:31.013Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:31.015Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:31.041Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:32.912Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T09:20:32.913Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T09:20:32.913Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T09:20:32.913Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:32.916Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:32.937Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:37.438Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T09:20:37.439Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T09:20:37.439Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:20:37.788Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T09:20:37.788Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T09:20:37.788Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T09:20:37.788Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:37.790Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:37.811Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:39.314Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:20:39.479Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T09:20:39.480Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:20:39.480Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:39.482Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:39.501Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:41.003Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T09:20:41.004Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T09:20:41.201Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T09:20:41.202Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T09:20:41.202Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T09:20:41.202Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:41.204Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:41.223Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:42.723Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T09:20:42.724Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T09:20:42.894Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T09:20:42.895Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T09:20:42.895Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T09:20:42.895Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:42.897Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:42.916Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:47.419Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T09:20:47.420Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T09:20:47.420Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T09:20:47.629Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T09:20:47.629Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T09:20:47.629Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T09:20:47.629Z] [BOT] 💾 BEFORE ARCHIVING: 3096 jobs in database
[2026-01-23T09:20:47.631Z] [BOT] ✅ No jobs to archive (all 3096 jobs within 7-day window)
[2026-01-23T09:20:47.651Z] [BOT] 💾 Saved posted_jobs.json: 3096 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T09:20:52.154Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T09:20:52.156Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T09:20:52.238Z] [BOT] 📂 Loaded 7121 existing routing entries
[2026-01-23T09:20:52.331Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T09:20:52.331Z] [BOT] Total entries: 7131
   Timestamp: 2026-01-23T09:20:52.300Z
[2026-01-23T09:20:52.332Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T09:20:52.332Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T09:20:52.332Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T09:20:52.332Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-23T09:20:52.332Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T09:20:52.332Z] [BOT] [STATS] Channel stats saved
[2026-01-23T09:20:54.350Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2454) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*