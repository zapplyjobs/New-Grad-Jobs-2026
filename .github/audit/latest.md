# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T03:27:58.458Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T03:27:23.990Z] ========================================
[2026-01-23T03:27:23.992Z] Discord Bot Execution Log
[2026-01-23T03:27:23.992Z] Environment: GitHub Actions
[2026-01-23T03:27:23.992Z] Node Version: v20.20.0
[2026-01-23T03:27:23.992Z] ========================================
[2026-01-23T03:27:23.992Z] Environment Variables Check:
[2026-01-23T03:27:23.992Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T03:27:23.992Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.992Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T03:27:23.993Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T03:27:23.993Z] 
Multi-Channel Configuration:
[2026-01-23T03:27:23.993Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T03:27:23.993Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T03:27:23.993Z] 
Data Files Check:
[2026-01-23T03:27:23.994Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T03:27:24.006Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1889865 bytes)
[2026-01-23T03:27:24.006Z] 
========================================
[2026-01-23T03:27:24.006Z] Starting Enhanced Discord Bot...
[2026-01-23T03:27:24.006Z] ========================================
[2026-01-23T03:27:24.530Z] [BOT] ✅ Loaded V2 database: 3241 jobs
[2026-01-23T03:27:25.237Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T03:27:25.237Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T03:27:25.237Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T03:27:25.352Z] [BOT] ✅ Loaded pending queue: 2783 total (2763 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T03:27:25.356Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T03:27:25.356Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T03:27:25.356Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T03:27:25.357Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T03:27:25.357Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T03:27:25.359Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T03:27:25.360Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T03:27:25.360Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T03:27:25.377Z] [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T03:27:25.561Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T03:27:25.561Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T03:27:25.562Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T03:27:25.562Z] [BOT] 💾 BEFORE ARCHIVING: 3241 jobs in database
[2026-01-23T03:27:25.564Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T03:27:25.570Z] [BOT] 📦 Archived 21 jobs to 2026-01.json (21 total in archive)
[2026-01-23T03:27:25.570Z] [BOT] ✅ Archiving complete: 21 archived, 3220 active
[2026-01-23T03:27:25.599Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
[2026-01-23T03:27:25.599Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:27.101Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T03:27:27.371Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T03:27:27.371Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T03:27:27.372Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T03:27:27.372Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:27.374Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:27.393Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:28.894Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T03:27:29.121Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T03:27:29.122Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T03:27:29.122Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:29.124Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:29.146Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
[2026-01-23T03:27:29.146Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:30.832Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T03:27:30.832Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T03:27:30.833Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:30.835Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:30.856Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:32.357Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T03:27:32.357Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T03:27:32.844Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T03:27:32.844Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T03:27:32.844Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:32.847Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:32.867Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
[2026-01-23T03:27:32.867Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:34.368Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T03:27:34.368Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T03:27:34.592Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T03:27:34.593Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T03:27:34.593Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:34.595Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:34.618Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:36.402Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T03:27:36.402Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T03:27:36.403Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T03:27:36.403Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:36.405Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:36.427Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:40.929Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T03:27:40.931Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T03:27:40.931Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T03:27:41.111Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T03:27:41.112Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T03:27:41.112Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:41.114Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:41.135Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:42.637Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T03:27:42.637Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T03:27:42.805Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T03:27:42.806Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T03:27:42.806Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:42.808Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:42.828Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:44.329Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T03:27:44.330Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T03:27:44.504Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T03:27:44.505Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T03:27:44.505Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:44.507Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:44.527Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:46.029Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T03:27:46.029Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T03:27:46.266Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T03:27:46.266Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T03:27:46.266Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:46.268Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:46.288Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:50.790Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T03:27:50.791Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T03:27:50.791Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T03:27:51.000Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T03:27:51.000Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T03:27:51.001Z] [BOT] 💾 BEFORE ARCHIVING: 3220 jobs in database
[2026-01-23T03:27:51.003Z] [BOT] ✅ No jobs to archive (all 3220 jobs within 7-day window)
[2026-01-23T03:27:51.022Z] [BOT] 💾 Saved posted_jobs.json: 3220 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T03:27:55.524Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T03:27:55.527Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T03:27:55.606Z] [BOT] 📂 Loaded 6961 existing routing entries
[2026-01-23T03:27:55.699Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6971
[2026-01-23T03:27:55.699Z] [BOT] Timestamp: 2026-01-23T03:27:55.669Z
[2026-01-23T03:27:55.700Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T03:27:55.700Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T03:27:55.700Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T03:27:55.700Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T03:27:55.701Z] [BOT] [STATS] Channel stats saved
[2026-01-23T03:27:57.717Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2453) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*