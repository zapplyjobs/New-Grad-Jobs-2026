# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T15:01:28.342Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T15:00:52.960Z] ========================================
[2026-01-23T15:00:52.962Z] Discord Bot Execution Log
[2026-01-23T15:00:52.962Z] Environment: GitHub Actions
[2026-01-23T15:00:52.962Z] Node Version: v20.20.0
[2026-01-23T15:00:52.962Z] ========================================
[2026-01-23T15:00:52.962Z] Environment Variables Check:
[2026-01-23T15:00:52.962Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T15:00:52.962Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T15:00:52.962Z] 
Multi-Channel Configuration:
[2026-01-23T15:00:52.962Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.962Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.963Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.963Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T15:00:52.963Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T15:00:52.963Z] 
Data Files Check:
[2026-01-23T15:00:52.963Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T15:00:52.977Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1801716 bytes)
[2026-01-23T15:00:52.977Z] 
========================================
[2026-01-23T15:00:52.977Z] Starting Enhanced Discord Bot...
[2026-01-23T15:00:52.977Z] ========================================
[2026-01-23T15:00:53.452Z] [BOT] ✅ Loaded V2 database: 3087 jobs
[2026-01-23T15:00:54.360Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T15:00:54.361Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T15:00:54.361Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T15:00:54.519Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T15:00:54.522Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T15:00:54.523Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T15:00:54.523Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T15:00:54.524Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T15:00:54.524Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T15:00:54.525Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T15:00:54.526Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T15:00:54.526Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:00:54.543Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T15:00:54.736Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T15:00:54.736Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T15:00:54.737Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T15:00:54.737Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:00:54.739Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:00:54.765Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:00:56.267Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T15:00:56.268Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T15:00:56.539Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T15:00:56.539Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T15:00:56.539Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T15:00:56.539Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:00:56.541Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:00:56.561Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:00:58.063Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T15:00:58.063Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T15:00:58.339Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T15:00:58.340Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T15:00:58.340Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T15:00:58.340Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:00:58.342Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:00:58.365Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:00.200Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T15:01:00.200Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T15:01:00.200Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:00.202Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:00.223Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:01.724Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:01:01.986Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T15:01:01.987Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T15:01:01.987Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:01.989Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:02.011Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:03.512Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T15:01:03.513Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:01:03.755Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T15:01:03.755Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T15:01:03.756Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:03.758Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:03.781Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:05.519Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T15:01:05.520Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T15:01:05.520Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T15:01:05.520Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:05.522Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:05.543Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:10.045Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T15:01:10.046Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T15:01:10.046Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:01:10.444Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T15:01:10.445Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T15:01:10.445Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:10.447Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:10.468Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:11.971Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:01:12.178Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T15:01:12.179Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T15:01:12.179Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:12.181Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:12.202Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:13.704Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T15:01:13.909Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T15:01:13.910Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T15:01:13.910Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:13.912Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:13.935Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:15.437Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:01:15.754Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T15:01:15.755Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T15:01:15.755Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:15.757Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:15.778Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:20.280Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T15:01:20.280Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T15:01:20.281Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T15:01:20.527Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T15:01:20.528Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T15:01:20.528Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:01:20.530Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T15:01:20.550Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:01:25.052Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T15:01:25.054Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T15:01:25.145Z] [BOT] 📂 Loaded 7271 existing routing entries
[2026-01-23T15:01:25.238Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7281
[2026-01-23T15:01:25.239Z] [BOT] Timestamp: 2026-01-23T15:01:25.210Z
[2026-01-23T15:01:25.239Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
[2026-01-23T15:01:25.239Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T15:01:25.239Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
[2026-01-23T15:01:25.239Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-23T15:01:25.239Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-23T15:01:25.240Z] [BOT] [STATS] Channel stats saved
[2026-01-23T15:01:27.254Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*