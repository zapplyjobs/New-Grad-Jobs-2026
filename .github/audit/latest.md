# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T12:16:37.524Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T12:16:03.619Z] ========================================
[2026-01-23T12:16:03.621Z] Discord Bot Execution Log
[2026-01-23T12:16:03.621Z] Environment: GitHub Actions
[2026-01-23T12:16:03.621Z] Node Version: v20.20.0
[2026-01-23T12:16:03.621Z] ========================================
[2026-01-23T12:16:03.621Z] Environment Variables Check:
[2026-01-23T12:16:03.621Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T12:16:03.621Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.621Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T12:16:03.621Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T12:16:03.622Z] 
Multi-Channel Configuration:
[2026-01-23T12:16:03.622Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T12:16:03.622Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T12:16:03.622Z] 
Data Files Check:
[2026-01-23T12:16:03.623Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T12:16:03.635Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1804955 bytes)
[2026-01-23T12:16:03.635Z] 
========================================
[2026-01-23T12:16:03.635Z] Starting Enhanced Discord Bot...
[2026-01-23T12:16:03.635Z] ========================================
[2026-01-23T12:16:04.177Z] [BOT] ✅ Loaded V2 database: 3093 jobs
[2026-01-23T12:16:04.722Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T12:16:04.722Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T12:16:04.722Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T12:16:04.836Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T12:16:04.840Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T12:16:04.840Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T12:16:04.840Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T12:16:04.841Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T12:16:04.841Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T12:16:04.843Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T12:16:04.844Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T12:16:04.844Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:16:04.861Z] [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T12:16:05.006Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T12:16:05.007Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T12:16:05.007Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T12:16:05.007Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:05.010Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:05.045Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
[2026-01-23T12:16:05.045Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:06.547Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T12:16:06.548Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:16:06.707Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T12:16:06.707Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T12:16:06.708Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T12:16:06.708Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:06.710Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:06.728Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:08.229Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T12:16:08.230Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:16:08.405Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T12:16:08.406Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T12:16:08.406Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:08.408Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:08.430Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:10.075Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T12:16:10.076Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T12:16:10.076Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:10.078Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:10.099Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:11.599Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:16:11.738Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T12:16:11.739Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:11.742Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:11.763Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:13.264Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T12:16:13.265Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:16:13.492Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T12:16:13.493Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T12:16:13.493Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:13.495Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:13.518Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:15.244Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T12:16:15.244Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T12:16:15.244Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T12:16:15.244Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:15.247Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:15.269Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:19.773Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T12:16:19.774Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T12:16:19.981Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T12:16:19.981Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T12:16:19.982Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T12:16:19.982Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:19.984Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:20.004Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:21.506Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T12:16:21.506Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T12:16:21.681Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T12:16:21.682Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T12:16:21.682Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:21.684Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:21.706Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
[2026-01-23T12:16:21.706Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:23.208Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T12:16:23.208Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T12:16:23.469Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T12:16:23.469Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T12:16:23.469Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T12:16:23.469Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:23.471Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:23.491Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
[2026-01-23T12:16:23.491Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:24.992Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T12:16:24.992Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T12:16:25.337Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T12:16:25.337Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T12:16:25.338Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T12:16:25.338Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:25.339Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:25.358Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:29.860Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T12:16:29.860Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T12:16:29.860Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T12:16:30.145Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T12:16:30.145Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T12:16:30.145Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T12:16:30.145Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:16:30.147Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:16:30.166Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:16:34.668Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T12:16:34.670Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T12:16:34.750Z] [BOT] 📂 Loaded 7201 existing routing entries
[2026-01-23T12:16:34.845Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T12:16:34.845Z] [BOT] Total entries: 7211
   Timestamp: 2026-01-23T12:16:34.813Z
[2026-01-23T12:16:34.846Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T12:16:34.846Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T12:16:34.846Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T12:16:34.846Z] [BOT] [STATS] Channel stats saved
[2026-01-23T12:16:36.867Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2525) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*