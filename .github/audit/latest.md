# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T13:20:59.046Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T13:20:24.278Z] ========================================
[2026-01-24T13:20:24.280Z] Discord Bot Execution Log
[2026-01-24T13:20:24.280Z] Environment: GitHub Actions
[2026-01-24T13:20:24.281Z] Node Version: v20.20.0
[2026-01-24T13:20:24.281Z] ========================================
[2026-01-24T13:20:24.281Z] Environment Variables Check:
[2026-01-24T13:20:24.281Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T13:20:24.281Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.281Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T13:20:24.281Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T13:20:24.281Z] 
Multi-Channel Configuration:
[2026-01-24T13:20:24.281Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.281Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T13:20:24.282Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T13:20:24.282Z] 
Data Files Check:
[2026-01-24T13:20:24.283Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T13:20:24.293Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1566596 bytes)
[2026-01-24T13:20:24.293Z] 
========================================
[2026-01-24T13:20:24.293Z] Starting Enhanced Discord Bot...
[2026-01-24T13:20:24.293Z] ========================================
[2026-01-24T13:20:24.862Z] [BOT] ✅ Loaded V2 database: 2660 jobs
[2026-01-24T13:20:25.564Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-24T13:20:25.565Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T13:20:25.565Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T13:20:25.685Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T13:20:25.688Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T13:20:25.689Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T13:20:25.689Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T13:20:25.690Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T13:20:25.690Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T13:20:25.692Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T13:20:25.692Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T13:20:25.693Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:20:25.711Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T13:20:25.976Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T13:20:25.977Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T13:20:25.978Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T13:20:25.978Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:25.980Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:26.003Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:27.504Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T13:20:27.505Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:20:27.758Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T13:20:27.758Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T13:20:27.759Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T13:20:27.759Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:27.761Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:27.779Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:29.279Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-24T13:20:29.280Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:20:29.452Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T13:20:29.452Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T13:20:29.453Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T13:20:29.453Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:29.455Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:29.475Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:31.149Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T13:20:31.150Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T13:20:31.150Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T13:20:31.150Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:31.152Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:31.171Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:32.672Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T13:20:32.672Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:20:33.018Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2026-01-24T13:20:33.018Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T13:20:33.018Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T13:20:33.019Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:33.020Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:33.040Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
[2026-01-24T13:20:33.040Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:34.542Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T13:20:34.542Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T13:20:34.704Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
[2026-01-24T13:20:34.704Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T13:20:34.705Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T13:20:34.705Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:34.707Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:34.728Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:36.472Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T13:20:36.472Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T13:20:36.473Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T13:20:36.473Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:36.474Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:36.493Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:40.995Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T13:20:40.996Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T13:20:41.255Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T13:20:41.256Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:41.258Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:41.277Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:42.779Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T13:20:42.779Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T13:20:43.040Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T13:20:43.040Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T13:20:43.040Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T13:20:43.041Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:43.043Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:43.061Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:44.563Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T13:20:44.563Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T13:20:44.708Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-24T13:20:44.708Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T13:20:44.709Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T13:20:44.709Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:44.711Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:44.729Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:46.230Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T13:20:46.230Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T13:20:46.660Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
[2026-01-24T13:20:46.660Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T13:20:46.661Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T13:20:46.661Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:46.663Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:46.683Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:51.185Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T13:20:51.186Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T13:20:51.186Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T13:20:51.428Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T13:20:51.428Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T13:20:51.428Z] [BOT] 💾 BEFORE ARCHIVING: 2660 jobs in database
[2026-01-24T13:20:51.430Z] [BOT] ✅ No jobs to archive (all 2660 jobs within 7-day window)
[2026-01-24T13:20:51.448Z] [BOT] 💾 Saved posted_jobs.json: 2660 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T13:20:55.949Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T13:20:55.951Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T13:20:56.044Z] [BOT] 📂 Loaded 7971 existing routing entries
[2026-01-24T13:20:56.158Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T13:20:56.158Z] [BOT] Total entries: 7981
   Timestamp: 2026-01-24T13:20:56.121Z
[2026-01-24T13:20:56.158Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T13:20:56.158Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T13:20:56.159Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T13:20:56.159Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T13:20:56.159Z] [BOT] [STATS] Channel stats saved
[2026-01-24T13:20:58.178Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*