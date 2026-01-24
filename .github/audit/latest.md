# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T09:55:27.683Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T09:54:52.743Z] ========================================
[2026-01-24T09:54:52.745Z] Discord Bot Execution Log
[2026-01-24T09:54:52.745Z] Environment: GitHub Actions
[2026-01-24T09:54:52.745Z] Node Version: v20.20.0
[2026-01-24T09:54:52.745Z] ========================================
[2026-01-24T09:54:52.745Z] Environment Variables Check:
[2026-01-24T09:54:52.745Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T09:54:52.746Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T09:54:52.746Z] 
Multi-Channel Configuration:
[2026-01-24T09:54:52.746Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.746Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.747Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T09:54:52.747Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T09:54:52.747Z] 
Data Files Check:
[2026-01-24T09:54:52.748Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T09:54:52.759Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T09:54:52.759Z] 
========================================
[2026-01-24T09:54:52.759Z] Starting Enhanced Discord Bot...
[2026-01-24T09:54:52.759Z] ========================================
[2026-01-24T09:54:53.354Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T09:54:54.146Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T09:54:54.147Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T09:54:54.147Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T09:54:54.262Z] [BOT] ✅ Loaded pending queue: 2751 total (2731 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T09:54:54.266Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T09:54:54.267Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T09:54:54.267Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T09:54:54.268Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T09:54:54.268Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T09:54:54.270Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T09:54:54.270Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T09:54:54.271Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:54:54.288Z] [BOT ERROR] (node:2449) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T09:54:54.531Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T09:54:54.532Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T09:54:54.532Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:54:54.534Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:54:54.556Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:54:56.058Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T09:54:56.058Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:54:56.210Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T09:54:56.210Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T09:54:56.211Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T09:54:56.211Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:54:56.213Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:54:56.230Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:54:57.732Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:54:57.938Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T09:54:57.938Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T09:54:57.939Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T09:54:57.940Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:54:57.942Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:54:57.962Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:54:59.735Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T09:54:59.736Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T09:54:59.736Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T09:54:59.736Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:54:59.738Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:54:59.757Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:01.258Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:55:01.501Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T09:55:01.501Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T09:55:01.501Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T09:55:01.502Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:01.503Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:01.522Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:03.023Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T09:55:03.023Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:55:03.238Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T09:55:03.238Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T09:55:03.238Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T09:55:03.239Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:03.240Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:03.261Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:04.981Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T09:55:04.981Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T09:55:04.981Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T09:55:04.982Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:04.983Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:05.002Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:09.503Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T09:55:09.505Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:55:09.834Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T09:55:09.834Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:09.837Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:09.853Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:11.356Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T09:55:11.356Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:55:11.629Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T09:55:11.630Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:11.632Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:11.651Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:13.153Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:55:13.153Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T09:55:13.337Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T09:55:13.337Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T09:55:13.337Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T09:55:13.338Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:13.339Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:13.357Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:14.858Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:55:15.097Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T09:55:15.098Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T09:55:15.098Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:15.100Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:15.117Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:19.619Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T09:55:19.619Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T09:55:19.619Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T09:55:19.939Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T09:55:19.939Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T09:55:19.940Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T09:55:19.940Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:55:19.941Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:55:19.960Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:55:24.464Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T09:55:24.466Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T09:55:24.553Z] [BOT] 📂 Loaded 7851 existing routing entries
[2026-01-24T09:55:24.661Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T09:55:24.661Z] [BOT] New entries: 10
   Total entries: 7861
   Timestamp: 2026-01-24T09:55:24.623Z
[2026-01-24T09:55:24.662Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T09:55:24.662Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T09:55:24.662Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T09:55:24.662Z] [BOT] 1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T09:55:24.662Z] [BOT] [STATS] Channel stats saved
[2026-01-24T09:55:26.680Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2449) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*