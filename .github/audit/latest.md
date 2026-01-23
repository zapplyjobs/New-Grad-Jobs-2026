# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T20:31:27.907Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T20:30:53.275Z] ========================================
[2026-01-23T20:30:53.277Z] Discord Bot Execution Log
[2026-01-23T20:30:53.277Z] Environment: GitHub Actions
[2026-01-23T20:30:53.277Z] Node Version: v20.20.0
[2026-01-23T20:30:53.277Z] ========================================
[2026-01-23T20:30:53.277Z] Environment Variables Check:
[2026-01-23T20:30:53.277Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T20:30:53.277Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.277Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T20:30:53.277Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T20:30:53.278Z] 
Multi-Channel Configuration:
[2026-01-23T20:30:53.278Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T20:30:53.278Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T20:30:53.278Z] 
Data Files Check:
[2026-01-23T20:30:53.279Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T20:30:53.292Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1756434 bytes)
[2026-01-23T20:30:53.292Z] 
========================================
[2026-01-23T20:30:53.292Z] Starting Enhanced Discord Bot...
[2026-01-23T20:30:53.292Z] ========================================
[2026-01-23T20:30:53.842Z] [BOT] ✅ Loaded V2 database: 3010 jobs
[2026-01-23T20:30:54.370Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T20:30:54.370Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T20:30:54.370Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T20:30:54.502Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T20:30:54.506Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T20:30:54.506Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T20:30:54.506Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T20:30:54.507Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T20:30:54.507Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T20:30:54.507Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T20:30:54.509Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T20:30:54.510Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T20:30:54.510Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:30:54.528Z] [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T20:30:55.104Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T20:30:55.104Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T20:30:55.105Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T20:30:55.105Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:30:55.108Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:30:55.136Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:30:56.638Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:30:56.876Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T20:30:56.876Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T20:30:56.877Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T20:30:56.877Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:30:56.879Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:30:56.899Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:30:58.400Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:30:58.618Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T20:30:58.618Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T20:30:58.618Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T20:30:58.618Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:30:58.620Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:30:58.642Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:00.315Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T20:31:00.316Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T20:31:00.316Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:00.318Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:00.341Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:01.842Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:31:02.152Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T20:31:02.153Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T20:31:02.153Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:02.155Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:02.176Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:03.677Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T20:31:03.678Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T20:31:03.861Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T20:31:03.861Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T20:31:03.861Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:03.864Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:03.887Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:05.563Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T20:31:05.563Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T20:31:05.564Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:05.566Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:05.587Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:10.090Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T20:31:10.091Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T20:31:10.091Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T20:31:10.272Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T20:31:10.273Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T20:31:10.273Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:10.274Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:10.295Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:11.796Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T20:31:11.796Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T20:31:12.150Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T20:31:12.150Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T20:31:12.151Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:12.153Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:12.171Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:13.674Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T20:31:13.674Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T20:31:13.820Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T20:31:13.821Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T20:31:13.821Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T20:31:13.821Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:13.823Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:13.843Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:15.344Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T20:31:15.669Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T20:31:15.669Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T20:31:15.670Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:15.672Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:15.691Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:20.193Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T20:31:20.193Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T20:31:20.193Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T20:31:20.526Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T20:31:20.526Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T20:31:20.526Z] [BOT] 💾 BEFORE ARCHIVING: 3010 jobs in database
[2026-01-23T20:31:20.528Z] [BOT] ✅ No jobs to archive (all 3010 jobs within 7-day window)
[2026-01-23T20:31:20.550Z] [BOT] 💾 Saved posted_jobs.json: 3010 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T20:31:25.051Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T20:31:25.054Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T20:31:25.132Z] [BOT] 📂 Loaded 7471 existing routing entries
[2026-01-23T20:31:25.237Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7481
[2026-01-23T20:31:25.237Z] [BOT] Timestamp: 2026-01-23T20:31:25.196Z
[2026-01-23T20:31:25.238Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T20:31:25.238Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T20:31:25.238Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T20:31:25.238Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-23T20:31:25.238Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T20:31:25.238Z] [BOT] [STATS] Channel stats saved
[2026-01-23T20:31:27.259Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*