# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T07:30:19.778Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T07:29:43.923Z] ========================================
[2026-01-24T07:29:43.925Z] Discord Bot Execution Log
[2026-01-24T07:29:43.925Z] Environment: GitHub Actions
[2026-01-24T07:29:43.925Z] Node Version: v20.20.0
[2026-01-24T07:29:43.925Z] ========================================
[2026-01-24T07:29:43.925Z] Environment Variables Check:
[2026-01-24T07:29:43.925Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T07:29:43.925Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.925Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T07:29:43.926Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T07:29:43.926Z] 
Multi-Channel Configuration:
[2026-01-24T07:29:43.926Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T07:29:43.926Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T07:29:43.927Z] 
Data Files Check:
[2026-01-24T07:29:43.927Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T07:29:43.938Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1615095 bytes)
[2026-01-24T07:29:43.938Z] 
========================================
[2026-01-24T07:29:43.938Z] Starting Enhanced Discord Bot...
[2026-01-24T07:29:43.938Z] ========================================
[2026-01-24T07:29:44.481Z] [BOT] ✅ Loaded V2 database: 2750 jobs
[2026-01-24T07:29:45.109Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T07:29:45.109Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T07:29:45.109Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T07:29:45.231Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T07:29:45.234Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T07:29:45.235Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T07:29:45.235Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T07:29:45.236Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T07:29:45.236Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T07:29:45.238Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T07:29:45.239Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T07:29:45.239Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:29:45.257Z] [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T07:29:45.650Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T07:29:45.651Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T07:29:45.651Z] [BOT] 💾 BEFORE ARCHIVING: 2750 jobs in database
[2026-01-24T07:29:45.653Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T07:29:45.659Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-24T07:29:45.659Z] [BOT] ✅ Archiving complete: 11 archived, 2739 active
[2026-01-24T07:29:45.679Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:29:47.181Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:29:47.338Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T07:29:47.340Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:29:47.341Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:29:47.359Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:29:48.859Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:29:49.029Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T07:29:49.030Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:29:49.032Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:29:49.053Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:29:50.777Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T07:29:50.779Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T07:29:50.779Z] [BOT] 💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:29:50.781Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:29:50.802Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:29:52.303Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:29:52.417Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T07:29:52.419Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T07:29:52.419Z] [BOT] 💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:29:52.420Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:29:52.442Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
[2026-01-24T07:29:52.442Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T07:29:53.944Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T07:29:53.944Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T07:29:54.267Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T07:29:54.268Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:29:54.270Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:29:54.291Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:29:55.938Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-24T07:29:55.939Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:29:55.941Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:29:55.963Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:30:00.464Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T07:30:00.465Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:30:00.644Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T07:30:00.645Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T07:30:00.645Z] [BOT] 💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:30:00.647Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:30:00.665Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:30:02.167Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T07:30:02.167Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T07:30:02.294Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T07:30:02.295Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T07:30:02.295Z] [BOT] 💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:30:02.297Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:30:02.317Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:30:03.818Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T07:30:03.818Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T07:30:04.205Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T07:30:04.206Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T07:30:04.206Z] [BOT] 💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:30:04.208Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:30:04.226Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:30:05.727Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T07:30:05.727Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T07:30:05.919Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T07:30:05.919Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:30:05.921Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:30:05.939Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:30:10.440Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T07:30:10.440Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T07:30:10.440Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T07:30:12.400Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T07:30:12.401Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2739 jobs in database
[2026-01-24T07:30:12.403Z] [BOT] ✅ No jobs to archive (all 2739 jobs within 7-day window)
[2026-01-24T07:30:12.424Z] [BOT] 💾 Saved posted_jobs.json: 2739 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T07:30:16.926Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T07:30:16.928Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T07:30:17.027Z] [BOT] 📂 Loaded 7761 existing routing entries
[2026-01-24T07:30:17.125Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T07:30:17.125Z] [BOT] Total entries: 7771
   Timestamp: 2026-01-24T07:30:17.085Z
[2026-01-24T07:30:17.126Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T07:30:17.126Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T07:30:17.126Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-24T07:30:17.126Z] [BOT] 3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T07:30:17.126Z] [BOT] [STATS] Channel stats saved
[2026-01-24T07:30:19.146Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2457) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*