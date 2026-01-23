# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T00:56:27.262Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T00:55:50.646Z] ========================================
[2026-01-23T00:55:50.648Z] Discord Bot Execution Log
[2026-01-23T00:55:50.648Z] Environment: GitHub Actions
[2026-01-23T00:55:50.648Z] Node Version: v20.19.6
[2026-01-23T00:55:50.648Z] ========================================
[2026-01-23T00:55:50.648Z] Environment Variables Check:
[2026-01-23T00:55:50.648Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T00:55:50.648Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T00:55:50.649Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T00:55:50.649Z] 
Multi-Channel Configuration:
[2026-01-23T00:55:50.649Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.649Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.650Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T00:55:50.650Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T00:55:50.650Z] 
Data Files Check:
[2026-01-23T00:55:50.650Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T00:55:50.663Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1901263 bytes)
[2026-01-23T00:55:50.663Z] 
========================================
[2026-01-23T00:55:50.663Z] Starting Enhanced Discord Bot...
[2026-01-23T00:55:50.663Z] ========================================
[2026-01-23T00:55:51.212Z] [BOT] ✅ Loaded V2 database: 3261 jobs
[2026-01-23T00:55:52.150Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T00:55:52.151Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T00:55:52.151Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T00:55:52.267Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T00:55:52.270Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T00:55:52.271Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T00:55:52.271Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T00:55:52.272Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T00:55:52.272Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T00:55:52.274Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T00:55:52.274Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T00:55:52.275Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:55:52.292Z] [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T00:55:52.568Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T00:55:52.568Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T00:55:52.569Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T00:55:52.569Z] [BOT] 💾 BEFORE ARCHIVING: 3261 jobs in database
[2026-01-23T00:55:52.571Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T00:55:52.576Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-23T00:55:52.577Z] [BOT] ✅ Archiving complete: 9 archived, 3252 active
[2026-01-23T00:55:52.598Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:55:54.099Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T00:55:54.099Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:55:54.325Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T00:55:54.325Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T00:55:54.326Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T00:55:54.326Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:55:54.328Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:55:54.348Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:55:55.849Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:55:56.115Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T00:55:56.115Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T00:55:56.116Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T00:55:56.116Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:55:56.118Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:55:56.140Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:55:57.950Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T00:55:57.951Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T00:55:57.951Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:55:57.953Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:55:57.975Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:55:59.474Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T00:55:59.475Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T00:56:00.745Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T00:56:00.745Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T00:56:00.746Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:00.748Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:00.771Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:02.273Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T00:56:02.273Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T00:56:02.516Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T00:56:02.517Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T00:56:02.517Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:02.520Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:02.545Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:04.224Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T00:56:04.224Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T00:56:04.225Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T00:56:04.225Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:04.227Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:04.249Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:08.750Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T00:56:08.752Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T00:56:08.752Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T00:56:08.984Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T00:56:08.985Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T00:56:08.985Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:08.987Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:09.008Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:10.511Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T00:56:10.511Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T00:56:10.741Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T00:56:10.742Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T00:56:10.742Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T00:56:10.742Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:10.744Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:10.763Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:12.266Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T00:56:12.266Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T00:56:12.498Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T00:56:12.499Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T00:56:12.499Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:12.501Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:12.521Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:14.022Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T00:56:14.022Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T00:56:14.218Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T00:56:14.219Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T00:56:14.219Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:14.221Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:14.241Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:18.744Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T00:56:18.744Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T00:56:18.744Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T00:56:19.233Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T00:56:19.233Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T00:56:19.233Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T00:56:19.235Z] [BOT] ✅ No jobs to archive (all 3252 jobs within 7-day window)
[2026-01-23T00:56:19.255Z] [BOT] 💾 Saved posted_jobs.json: 3252 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T00:56:23.758Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T00:56:23.760Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T00:56:23.842Z] [BOT] 📂 Loaded 6931 existing routing entries
[2026-01-23T00:56:23.936Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6941
[2026-01-23T00:56:23.937Z] [BOT] Timestamp: 2026-01-23T00:56:23.905Z
[2026-01-23T00:56:23.937Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T00:56:23.937Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T00:56:23.937Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
[2026-01-23T00:56:23.938Z] [BOT] Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T00:56:25.956Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2417) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*