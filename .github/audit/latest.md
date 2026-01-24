# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T14:44:14.968Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T14:43:40.293Z] ========================================
[2026-01-24T14:43:40.295Z] Discord Bot Execution Log
[2026-01-24T14:43:40.295Z] Environment: GitHub Actions
[2026-01-24T14:43:40.295Z] Node Version: v20.20.0
[2026-01-24T14:43:40.295Z] ========================================
[2026-01-24T14:43:40.295Z] Environment Variables Check:
[2026-01-24T14:43:40.295Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T14:43:40.295Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T14:43:40.296Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T14:43:40.296Z] 
Multi-Channel Configuration:
[2026-01-24T14:43:40.296Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.296Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.297Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T14:43:40.297Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T14:43:40.297Z] 
Data Files Check:
[2026-01-24T14:43:40.297Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T14:43:40.307Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1562993 bytes)
[2026-01-24T14:43:40.307Z] 
========================================
[2026-01-24T14:43:40.307Z] Starting Enhanced Discord Bot...
[2026-01-24T14:43:40.307Z] ========================================
[2026-01-24T14:43:40.844Z] [BOT] ✅ Loaded V2 database: 2653 jobs
[2026-01-24T14:43:41.271Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T14:43:41.272Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T14:43:41.272Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T14:43:41.386Z] [BOT] ✅ Loaded pending queue: 2776 total (2756 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T14:43:41.389Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T14:43:41.390Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T14:43:41.390Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T14:43:41.391Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T14:43:41.391Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T14:43:41.391Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T14:43:41.393Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T14:43:41.394Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T14:43:41.394Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:43:41.411Z] [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T14:43:41.584Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T14:43:41.585Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T14:43:41.585Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T14:43:41.586Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:41.588Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:41.610Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:43.111Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:43:43.279Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T14:43:43.280Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T14:43:43.280Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:43.281Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:43.298Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:43:43.299Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:44.799Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:43:45.001Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T14:43:45.001Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T14:43:45.002Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T14:43:45.002Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:45.003Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:45.022Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:46.810Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:43:46.811Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T14:43:46.811Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:46.812Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:46.831Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:48.333Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T14:43:48.333Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:43:48.556Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T14:43:48.557Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T14:43:48.557Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:48.559Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:48.576Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:50.078Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T14:43:50.078Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T14:43:50.385Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T14:43:50.385Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T14:43:50.386Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T14:43:50.386Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:50.388Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:50.412Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:43:50.412Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:52.128Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T14:43:52.128Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T14:43:52.129Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T14:43:52.129Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:52.131Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:52.149Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:43:52.149Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:56.652Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T14:43:56.653Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T14:43:56.653Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:43:57.015Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
[2026-01-24T14:43:57.015Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T14:43:57.016Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T14:43:57.016Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:57.017Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:57.036Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:43:57.036Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:43:58.538Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T14:43:58.539Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:43:58.803Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T14:43:58.804Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T14:43:58.804Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T14:43:58.804Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:43:58.806Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:43:58.824Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:44:00.326Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T14:44:00.326Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T14:44:00.972Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T14:44:00.973Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T14:44:00.973Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T14:44:00.973Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:44:00.975Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:44:00.992Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:44:02.493Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T14:44:02.739Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T14:44:02.739Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T14:44:02.739Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:44:02.741Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:44:02.758Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
[2026-01-24T14:44:02.758Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T14:44:07.260Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T14:44:07.261Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T14:44:07.261Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T14:44:07.505Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T14:44:07.506Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T14:44:07.506Z] [BOT] 💾 BEFORE ARCHIVING: 2653 jobs in database
[2026-01-24T14:44:07.508Z] [BOT] ✅ No jobs to archive (all 2653 jobs within 7-day window)
[2026-01-24T14:44:07.524Z] [BOT] 💾 Saved posted_jobs.json: 2653 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T14:44:12.026Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T14:44:12.028Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T14:44:12.116Z] [BOT] 📂 Loaded 8021 existing routing entries
[2026-01-24T14:44:12.227Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T14:44:12.228Z] [BOT] Total entries: 8031
   Timestamp: 2026-01-24T14:44:12.191Z
[2026-01-24T14:44:12.228Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T14:44:12.228Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T14:44:12.229Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T14:44:12.229Z] [BOT] [STATS] Channel stats saved
[2026-01-24T14:44:14.246Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2517) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*