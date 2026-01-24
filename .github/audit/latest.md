# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T07:16:14.951Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T07:15:41.601Z] ========================================
[2026-01-24T07:15:41.603Z] Discord Bot Execution Log
[2026-01-24T07:15:41.603Z] Environment: GitHub Actions
[2026-01-24T07:15:41.603Z] Node Version: v20.20.0
[2026-01-24T07:15:41.603Z] ========================================
[2026-01-24T07:15:41.603Z] Environment Variables Check:
[2026-01-24T07:15:41.603Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T07:15:41.603Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.603Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T07:15:41.603Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T07:15:41.603Z] 
Multi-Channel Configuration:
[2026-01-24T07:15:41.603Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T07:15:41.604Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T07:15:41.604Z] 
Data Files Check:
[2026-01-24T07:15:41.605Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T07:15:41.616Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1620211 bytes)
[2026-01-24T07:15:41.616Z] 
========================================
[2026-01-24T07:15:41.616Z] Starting Enhanced Discord Bot...
[2026-01-24T07:15:41.616Z] ========================================
[2026-01-24T07:15:42.194Z] [BOT] ✅ Loaded V2 database: 2760 jobs
[2026-01-24T07:15:42.557Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T07:15:42.558Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T07:15:42.558Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T07:15:42.677Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T07:15:42.681Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T07:15:42.681Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T07:15:42.682Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T07:15:42.682Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T07:15:42.682Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T07:15:42.683Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T07:15:42.684Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T07:15:42.685Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T07:15:42.685Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:15:42.703Z] [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T07:15:42.900Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T07:15:42.900Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T07:15:42.901Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T07:15:42.901Z] [BOT] 💾 BEFORE ARCHIVING: 2760 jobs in database
[2026-01-24T07:15:42.904Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T07:15:42.909Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-24T07:15:42.909Z] [BOT] ✅ Archiving complete: 10 archived, 2750 active
[2026-01-24T07:15:42.929Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:44.430Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T07:15:44.431Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T07:15:44.550Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T07:15:44.552Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:44.553Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:44.571Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:46.073Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T07:15:46.073Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:15:46.256Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T07:15:46.257Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:46.259Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:46.280Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:47.940Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T07:15:47.940Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T07:15:47.941Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T07:15:47.941Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:47.943Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:47.963Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:49.465Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T07:15:49.465Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:15:49.582Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-24T07:15:49.582Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T07:15:49.583Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T07:15:49.583Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:49.585Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:49.608Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:51.111Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T07:15:51.111Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:15:51.257Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T07:15:51.257Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T07:15:51.258Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T07:15:51.258Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:51.260Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:51.281Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:52.972Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T07:15:52.972Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T07:15:52.973Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T07:15:52.973Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:52.975Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:52.996Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:57.498Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T07:15:57.499Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T07:15:57.499Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:15:57.660Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-24T07:15:57.660Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T07:15:57.661Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T07:15:57.661Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:57.663Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:57.683Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:15:59.186Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T07:15:59.186Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:15:59.408Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-24T07:15:59.408Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T07:15:59.409Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T07:15:59.409Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:15:59.411Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:15:59.430Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:16:00.931Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T07:16:00.932Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T07:16:01.060Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-24T07:16:01.060Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T07:16:01.061Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T07:16:01.061Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:16:01.063Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:16:01.081Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:16:02.582Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T07:16:02.582Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:16:02.755Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T07:16:02.755Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T07:16:02.756Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T07:16:02.756Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:16:02.758Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:16:02.776Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:16:07.278Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T07:16:07.278Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T07:16:07.279Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T07:16:07.502Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T07:16:07.503Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T07:16:07.503Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:16:07.505Z] [BOT] ✅ No jobs to archive (all 2750 jobs within 7-day window)
[2026-01-24T07:16:07.524Z] [BOT] 💾 Saved posted_jobs.json: 2750 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:16:12.026Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T07:16:12.029Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T07:16:12.121Z] [BOT] 📂 Loaded 7751 existing routing entries
[2026-01-24T07:16:12.215Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T07:16:12.215Z] [BOT] Total entries: 7761
   Timestamp: 2026-01-24T07:16:12.177Z
[2026-01-24T07:16:12.215Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T07:16:12.216Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T07:16:12.216Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T07:16:12.216Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T07:16:12.216Z] [BOT] [STATS] Channel stats saved
[2026-01-24T07:16:14.234Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2527) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*