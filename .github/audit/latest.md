# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T23:30:42.875Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T23:30:08.202Z] ========================================
[2026-01-23T23:30:08.204Z] Discord Bot Execution Log
[2026-01-23T23:30:08.204Z] Environment: GitHub Actions
[2026-01-23T23:30:08.204Z] Node Version: v20.20.0
[2026-01-23T23:30:08.204Z] ========================================
[2026-01-23T23:30:08.205Z] Environment Variables Check:
[2026-01-23T23:30:08.205Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T23:30:08.205Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.205Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T23:30:08.205Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T23:30:08.205Z] 
Multi-Channel Configuration:
[2026-01-23T23:30:08.205Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.205Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.205Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.206Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.206Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.206Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.206Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.206Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.206Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T23:30:08.206Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T23:30:08.206Z] 
Data Files Check:
[2026-01-23T23:30:08.207Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T23:30:08.219Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1705303 bytes)
[2026-01-23T23:30:08.219Z] 
========================================
[2026-01-23T23:30:08.219Z] Starting Enhanced Discord Bot...
[2026-01-23T23:30:08.219Z] ========================================
[2026-01-23T23:30:08.744Z] [BOT] ✅ Loaded V2 database: 2921 jobs
[2026-01-23T23:30:09.230Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T23:30:09.230Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T23:30:09.230Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T23:30:09.349Z] [BOT] ✅ Loaded pending queue: 2774 total (2754 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T23:30:09.353Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T23:30:09.353Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T23:30:09.353Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T23:30:09.354Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T23:30:09.354Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T23:30:09.354Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T23:30:09.356Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T23:30:09.357Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T23:30:09.357Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:30:09.375Z] [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T23:30:09.711Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T23:30:09.711Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T23:30:09.712Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T23:30:09.712Z] [BOT] 💾 BEFORE ARCHIVING: 2921 jobs in database
[2026-01-23T23:30:09.715Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T23:30:09.720Z] [BOT] 📦 Archived 40 jobs to 2026-01.json (40 total in archive)
[2026-01-23T23:30:09.720Z] [BOT] ✅ Archiving complete: 40 archived, 2881 active
[2026-01-23T23:30:09.746Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
[2026-01-23T23:30:09.746Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:11.248Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T23:30:11.248Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T23:30:11.538Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T23:30:11.538Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T23:30:11.539Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:11.541Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:11.559Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:13.060Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T23:30:13.060Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:30:13.280Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T23:30:13.280Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T23:30:13.281Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T23:30:13.281Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:13.283Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:13.304Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:15.103Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T23:30:15.103Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T23:30:15.103Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T23:30:15.104Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:15.106Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:15.125Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:16.626Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T23:30:16.626Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T23:30:16.954Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T23:30:16.955Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T23:30:16.955Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:16.957Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:16.978Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:18.480Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T23:30:18.480Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T23:30:18.819Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T23:30:18.819Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T23:30:18.819Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:18.822Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:18.843Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:20.521Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T23:30:20.522Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T23:30:20.522Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:20.525Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:20.545Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:25.047Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T23:30:25.049Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T23:30:25.268Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T23:30:25.268Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T23:30:25.268Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:25.270Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:25.289Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:26.792Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T23:30:26.792Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T23:30:26.938Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T23:30:26.938Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T23:30:26.939Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:26.941Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:26.959Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:28.461Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T23:30:28.461Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T23:30:28.799Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T23:30:28.800Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T23:30:28.800Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:28.802Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:28.822Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:30.322Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T23:30:30.323Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T23:30:30.516Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T23:30:30.516Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T23:30:30.516Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T23:30:30.516Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:30.518Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:30.538Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:35.040Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T23:30:35.040Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T23:30:35.041Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T23:30:35.355Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T23:30:35.355Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T23:30:35.355Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T23:30:35.355Z] [BOT] 💾 BEFORE ARCHIVING: 2881 jobs in database
[2026-01-23T23:30:35.357Z] [BOT] ✅ No jobs to archive (all 2881 jobs within 7-day window)
[2026-01-23T23:30:35.376Z] [BOT] 💾 Saved posted_jobs.json: 2881 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T23:30:39.878Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T23:30:39.880Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T23:30:39.955Z] [BOT] 📂 Loaded 7561 existing routing entries
[2026-01-23T23:30:40.060Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T23:30:40.061Z] [BOT] New entries: 10
   Total entries: 7571
   Timestamp: 2026-01-23T23:30:40.013Z
[2026-01-23T23:30:40.061Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T23:30:40.061Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T23:30:40.061Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T23:30:40.062Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-23T23:30:40.062Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T23:30:40.062Z] [BOT] [STATS] Channel stats saved
[2026-01-23T23:30:42.081Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*