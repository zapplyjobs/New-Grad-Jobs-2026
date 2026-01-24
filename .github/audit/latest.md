# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T15:55:23.601Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T15:54:48.976Z] ========================================
[2026-01-24T15:54:48.978Z] Discord Bot Execution Log
[2026-01-24T15:54:48.978Z] Environment: GitHub Actions
[2026-01-24T15:54:48.978Z] Node Version: v20.20.0
[2026-01-24T15:54:48.978Z] ========================================
[2026-01-24T15:54:48.978Z] Environment Variables Check:
[2026-01-24T15:54:48.978Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T15:54:48.978Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.978Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T15:54:48.978Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T15:54:48.979Z] 
Multi-Channel Configuration:
[2026-01-24T15:54:48.979Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T15:54:48.979Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T15:54:48.979Z] 
Data Files Check:
[2026-01-24T15:54:48.980Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T15:54:48.985Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 655135 bytes)
[2026-01-24T15:54:48.985Z] 
========================================
[2026-01-24T15:54:48.985Z] Starting Enhanced Discord Bot...
[2026-01-24T15:54:48.985Z] ========================================
[2026-01-24T15:54:49.503Z] [BOT] ✅ Loaded V2 database: 1157 jobs
[2026-01-24T15:54:49.971Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T15:54:49.971Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T15:54:49.972Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T15:54:50.089Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T15:54:50.091Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T15:54:50.091Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T15:54:50.091Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T15:54:50.092Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T15:54:50.092Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T15:54:50.092Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T15:54:50.094Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T15:54:50.095Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T15:54:50.095Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:54:50.112Z] [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T15:54:50.363Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T15:54:50.363Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T15:54:50.364Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T15:54:50.364Z] [BOT] 💾 BEFORE ARCHIVING: 1158 jobs in database
[2026-01-24T15:54:50.365Z] [BOT] ✅ No jobs to archive (all 1158 jobs within 7-day window)
[2026-01-24T15:54:50.379Z] [BOT] 💾 Saved posted_jobs.json: 1158 active jobs
[2026-01-24T15:54:50.379Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:54:51.881Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:54:52.238Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T15:54:52.238Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T15:54:52.238Z] [BOT] 💾 BEFORE ARCHIVING: 1158 jobs in database
[2026-01-24T15:54:52.239Z] [BOT] ✅ No jobs to archive (all 1158 jobs within 7-day window)
[2026-01-24T15:54:52.248Z] [BOT] 💾 Saved posted_jobs.json: 1158 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:54:53.749Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:54:53.944Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T15:54:53.944Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T15:54:53.944Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (1 total channels)
[2026-01-24T15:54:53.945Z] [BOT] 💾 BEFORE ARCHIVING: 1159 jobs in database
[2026-01-24T15:54:53.945Z] [BOT] ✅ No jobs to archive (all 1159 jobs within 7-day window)
[2026-01-24T15:54:53.954Z] [BOT] 💾 Saved posted_jobs.json: 1159 active jobs
[2026-01-24T15:54:53.954Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:54:55.792Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T15:54:55.792Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T15:54:55.793Z] [BOT] 💾 BEFORE ARCHIVING: 1159 jobs in database
[2026-01-24T15:54:55.793Z] [BOT] ✅ No jobs to archive (all 1159 jobs within 7-day window)
[2026-01-24T15:54:55.801Z] [BOT] 💾 Saved posted_jobs.json: 1159 active jobs
[2026-01-24T15:54:55.801Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:54:57.303Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:54:57.497Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T15:54:57.497Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T15:54:57.497Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T15:54:57.497Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T15:54:57.498Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T15:54:57.506Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T15:54:57.506Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:54:59.008Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T15:54:59.008Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T15:54:59.688Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T15:54:59.689Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (1 total channels)
[2026-01-24T15:54:59.689Z] [BOT] 💾 BEFORE ARCHIVING: 1161 jobs in database
[2026-01-24T15:54:59.690Z] [BOT] ✅ No jobs to archive (all 1161 jobs within 7-day window)
[2026-01-24T15:54:59.699Z] [BOT] 💾 Saved posted_jobs.json: 1161 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:55:01.336Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T15:55:01.336Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T15:55:01.336Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1161 jobs in database
[2026-01-24T15:55:01.337Z] [BOT] ✅ No jobs to archive (all 1161 jobs within 7-day window)
[2026-01-24T15:55:01.347Z] [BOT] 💾 Saved posted_jobs.json: 1161 active jobs
[2026-01-24T15:55:01.347Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:55:05.849Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T15:55:05.850Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T15:55:05.850Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:55:06.059Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T15:55:06.059Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T15:55:06.059Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T15:55:06.059Z] [BOT] 💾 BEFORE ARCHIVING: 1162 jobs in database
[2026-01-24T15:55:06.060Z] [BOT] ✅ No jobs to archive (all 1162 jobs within 7-day window)
[2026-01-24T15:55:06.068Z] [BOT] 💾 Saved posted_jobs.json: 1162 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:55:07.571Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:55:07.801Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T15:55:07.801Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T15:55:07.801Z] [BOT] 💾 BEFORE ARCHIVING: 1163 jobs in database
[2026-01-24T15:55:07.802Z] [BOT] ✅ No jobs to archive (all 1163 jobs within 7-day window)
[2026-01-24T15:55:07.811Z] [BOT] 💾 Saved posted_jobs.json: 1163 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T15:55:09.314Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T15:55:09.314Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T15:55:09.482Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T15:55:09.482Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T15:55:09.483Z] [BOT] 💾 BEFORE ARCHIVING: 1164 jobs in database
[2026-01-24T15:55:09.483Z] [BOT] ✅ No jobs to archive (all 1164 jobs within 7-day window)
[2026-01-24T15:55:09.492Z] [BOT] 💾 Saved posted_jobs.json: 1164 active jobs
[2026-01-24T15:55:09.492Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:55:10.994Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T15:55:10.994Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T15:55:11.299Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T15:55:11.299Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T15:55:11.300Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T15:55:11.300Z] [BOT] 💾 BEFORE ARCHIVING: 1165 jobs in database
[2026-01-24T15:55:11.301Z] [BOT] ✅ No jobs to archive (all 1165 jobs within 7-day window)
[2026-01-24T15:55:11.309Z] [BOT] 💾 Saved posted_jobs.json: 1165 active jobs
[2026-01-24T15:55:11.309Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:55:15.811Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T15:55:15.812Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T15:55:15.812Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T15:55:16.222Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T15:55:16.222Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T15:55:16.223Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 1166 jobs in database
[2026-01-24T15:55:16.224Z] [BOT] ✅ No jobs to archive (all 1166 jobs within 7-day window)
[2026-01-24T15:55:16.233Z] [BOT] 💾 Saved posted_jobs.json: 1166 active jobs
[2026-01-24T15:55:16.234Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T15:55:20.736Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T15:55:20.738Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T15:55:20.825Z] [BOT] 📂 Loaded 8071 existing routing entries
[2026-01-24T15:55:20.937Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 8081
[2026-01-24T15:55:20.937Z] [BOT] Timestamp: 2026-01-24T15:55:20.900Z
[2026-01-24T15:55:20.937Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T15:55:20.938Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T15:55:20.938Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T15:55:20.939Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-24T15:55:22.956Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*