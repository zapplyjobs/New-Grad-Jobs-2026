# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T19:29:48.451Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T19:29:14.137Z] ========================================
[2026-01-24T19:29:14.139Z] Discord Bot Execution Log
[2026-01-24T19:29:14.139Z] Environment: GitHub Actions
[2026-01-24T19:29:14.139Z] Node Version: v20.20.0
[2026-01-24T19:29:14.140Z] ========================================
[2026-01-24T19:29:14.140Z] Environment Variables Check:
[2026-01-24T19:29:14.140Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T19:29:14.140Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.140Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T19:29:14.140Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T19:29:14.140Z] 
Multi-Channel Configuration:
[2026-01-24T19:29:14.140Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.140Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.140Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.141Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.141Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.141Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.141Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.141Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.141Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T19:29:14.141Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T19:29:14.141Z] 
Data Files Check:
[2026-01-24T19:29:14.142Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T19:29:14.147Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 658933 bytes)
[2026-01-24T19:29:14.147Z] 
========================================
[2026-01-24T19:29:14.147Z] Starting Enhanced Discord Bot...
[2026-01-24T19:29:14.147Z] ========================================
[2026-01-24T19:29:14.678Z] [BOT] ✅ Loaded V2 database: 1160 jobs
[2026-01-24T19:29:15.243Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T19:29:15.244Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T19:29:15.244Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T19:29:15.365Z] [BOT] ✅ Loaded pending queue: 2797 total (2777 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T19:29:15.367Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T19:29:15.368Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T19:29:15.368Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T19:29:15.369Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T19:29:15.369Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T19:29:15.369Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T19:29:15.371Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T19:29:15.372Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T19:29:15.372Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:29:15.389Z] [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T19:29:15.668Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T19:29:15.668Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T19:29:15.669Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T19:29:15.669Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:15.670Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:15.682Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:17.185Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T19:29:17.185Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:29:17.376Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T19:29:17.376Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T19:29:17.377Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:17.378Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:17.387Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:18.888Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:29:19.048Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T19:29:19.048Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T19:29:19.048Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T19:29:19.048Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:19.050Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:19.058Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:20.833Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T19:29:20.833Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T19:29:20.833Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:20.834Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:20.842Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:22.344Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:29:22.552Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T19:29:22.552Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T19:29:22.553Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:22.553Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:22.562Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:24.064Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T19:29:24.064Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T19:29:24.407Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T19:29:24.407Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T19:29:24.408Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T19:29:24.408Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:24.409Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:24.418Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:26.078Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T19:29:26.078Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T19:29:26.078Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:26.079Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:26.089Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:29:26.089Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:30.593Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T19:29:30.594Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:29:30.935Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T19:29:30.936Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T19:29:30.936Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:30.937Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:30.946Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:32.448Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:29:32.668Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T19:29:32.669Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T19:29:32.669Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:32.670Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:32.680Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:29:32.680Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:34.182Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:29:34.182Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T19:29:34.483Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T19:29:34.483Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T19:29:34.484Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T19:29:34.484Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:34.485Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:34.495Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
[2026-01-24T19:29:34.495Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:35.996Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T19:29:35.997Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T19:29:36.205Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T19:29:36.205Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (1 total channels)
[2026-01-24T19:29:36.206Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:36.206Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:36.215Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:40.717Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T19:29:40.718Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T19:29:40.718Z] [BOT] Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T19:29:40.899Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T19:29:40.900Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T19:29:40.900Z] [BOT] 💾 BEFORE ARCHIVING: 1160 jobs in database
[2026-01-24T19:29:40.901Z] [BOT] ✅ No jobs to archive (all 1160 jobs within 7-day window)
[2026-01-24T19:29:40.911Z] [BOT] 💾 Saved posted_jobs.json: 1160 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T19:29:45.412Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T19:29:45.414Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T19:29:45.504Z] [BOT] 📂 Loaded 8211 existing routing entries
[2026-01-24T19:29:45.620Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T19:29:45.620Z] [BOT] Total entries: 8221
   Timestamp: 2026-01-24T19:29:45.581Z
[2026-01-24T19:29:45.620Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T19:29:45.621Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T19:29:45.621Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T19:29:45.621Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T19:29:45.621Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T19:29:45.621Z] [BOT] [STATS] Channel stats saved
[2026-01-24T19:29:47.639Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2480) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*