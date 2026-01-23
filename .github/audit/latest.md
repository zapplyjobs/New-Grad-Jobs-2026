# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T14:48:18.473Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T14:47:42.846Z] ========================================
[2026-01-23T14:47:42.848Z] Discord Bot Execution Log
[2026-01-23T14:47:42.848Z] Environment: GitHub Actions
[2026-01-23T14:47:42.848Z] Node Version: v20.20.0
[2026-01-23T14:47:42.848Z] ========================================
[2026-01-23T14:47:42.848Z] Environment Variables Check:
[2026-01-23T14:47:42.848Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T14:47:42.848Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.848Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T14:47:42.849Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T14:47:42.849Z] 
Multi-Channel Configuration:
[2026-01-23T14:47:42.849Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T14:47:42.849Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T14:47:42.849Z] 
Data Files Check:
[2026-01-23T14:47:42.850Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T14:47:42.864Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1801716 bytes)
[2026-01-23T14:47:42.865Z] 
========================================
[2026-01-23T14:47:42.865Z] Starting Enhanced Discord Bot...
[2026-01-23T14:47:42.865Z] ========================================
[2026-01-23T14:47:43.332Z] [BOT] ✅ Loaded V2 database: 3087 jobs
[2026-01-23T14:47:44.063Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T14:47:44.063Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T14:47:44.064Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T14:47:44.217Z] [BOT] ✅ Loaded pending queue: 2766 total (2746 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T14:47:44.220Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T14:47:44.220Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T14:47:44.221Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T14:47:44.221Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T14:47:44.221Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T14:47:44.223Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T14:47:44.224Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T14:47:44.224Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:47:44.240Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T14:47:44.555Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T14:47:44.555Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T14:47:44.556Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T14:47:44.556Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:47:44.558Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:47:44.582Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:47:46.083Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T14:47:46.083Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T14:47:46.371Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T14:47:46.371Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T14:47:46.372Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T14:47:46.372Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:47:46.374Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:47:46.394Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:47:47.895Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T14:47:47.896Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T14:47:48.134Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T14:47:48.134Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T14:47:48.135Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T14:47:48.135Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:47:48.137Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:47:48.160Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:47:49.923Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T14:47:49.923Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T14:47:49.923Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T14:47:49.924Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:47:49.925Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:47:49.946Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:47:51.448Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:47:51.675Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T14:47:51.675Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T14:47:51.676Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T14:47:51.676Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:47:51.678Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:47:51.699Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:47:53.199Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T14:47:53.199Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:47:53.592Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T14:47:53.593Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T14:47:53.593Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:47:53.595Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:47:53.618Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:47:55.399Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T14:47:55.400Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T14:47:55.400Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T14:47:55.400Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:47:55.402Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:47:55.424Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:47:59.926Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T14:47:59.927Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T14:47:59.927Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:48:00.322Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T14:48:00.322Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T14:48:00.322Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T14:48:00.323Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:48:00.324Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:48:00.345Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:48:01.846Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T14:48:01.846Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:48:02.361Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T14:48:02.361Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T14:48:02.362Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T14:48:02.362Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:48:02.364Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:48:02.383Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:48:03.885Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T14:48:03.885Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T14:48:04.146Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T14:48:04.146Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T14:48:04.146Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T14:48:04.146Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:48:04.149Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:48:04.171Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:48:05.673Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T14:48:05.673Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T14:48:05.867Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T14:48:05.868Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T14:48:05.868Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:48:05.870Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:48:05.892Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:48:10.393Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T14:48:10.394Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T14:48:10.394Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T14:48:10.654Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T14:48:10.654Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T14:48:10.655Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:48:10.657Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:48:10.677Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:48:15.179Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T14:48:15.181Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T14:48:15.277Z] [BOT] 📂 Loaded 7261 existing routing entries
[2026-01-23T14:48:15.374Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T14:48:15.374Z] [BOT] Total entries: 7271
   Timestamp: 2026-01-23T14:48:15.342Z
[2026-01-23T14:48:15.375Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T14:48:15.375Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T14:48:15.375Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T14:48:15.375Z] [BOT] [STATS] Channel stats saved
[2026-01-23T14:48:17.391Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*