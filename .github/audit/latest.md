# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T10:31:19.375Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T10:30:39.365Z] ========================================
[2026-01-22T10:30:39.367Z] Discord Bot Execution Log
[2026-01-22T10:30:39.367Z] Environment: GitHub Actions
[2026-01-22T10:30:39.367Z] Node Version: v20.19.6
[2026-01-22T10:30:39.367Z] ========================================
[2026-01-22T10:30:39.367Z] Environment Variables Check:
[2026-01-22T10:30:39.367Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T10:30:39.367Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.367Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T10:30:39.368Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T10:30:39.368Z] 
Multi-Channel Configuration:
[2026-01-22T10:30:39.368Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T10:30:39.368Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T10:30:39.368Z] 
Data Files Check:
[2026-01-22T10:30:39.369Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T10:30:39.384Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009238 bytes)
[2026-01-22T10:30:39.384Z] 
========================================
[2026-01-22T10:30:39.384Z] Starting Enhanced Discord Bot...
[2026-01-22T10:30:39.384Z] ========================================
[2026-01-22T10:30:39.846Z] [BOT] ✅ Loaded V2 database: 3454 jobs
[2026-01-22T10:30:40.337Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T10:30:40.338Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T10:30:40.338Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T10:30:40.494Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T10:30:40.497Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T10:30:40.498Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T10:30:40.499Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T10:30:40.499Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T10:30:40.499Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T10:30:40.502Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T10:30:40.502Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
   Category: TECH (matched: "data")
[2026-01-22T10:30:40.503Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T10:30:40.519Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T10:30:40.744Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T10:30:40.744Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T10:30:40.745Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T10:30:40.745Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:40.748Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:40.777Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:42.278Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T10:30:42.278Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T10:30:42.678Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T10:30:42.678Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T10:30:42.679Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T10:30:42.679Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:42.681Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:42.703Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:44.365Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T10:30:44.365Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T10:30:44.366Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T10:30:44.366Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:44.368Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:44.391Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:45.892Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T10:30:45.892Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T10:30:46.061Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T10:30:46.061Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T10:30:46.061Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T10:30:46.062Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:46.064Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:46.087Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:47.792Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T10:30:47.792Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T10:30:47.792Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:47.794Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:47.815Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:49.317Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:30:49.511Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T10:30:49.512Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T10:30:49.512Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:49.514Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:49.539Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:51.040Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T10:30:51.040Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:30:51.376Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T10:30:51.376Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T10:30:51.377Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T10:30:51.377Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:51.379Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:51.401Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:53.474Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T10:30:53.475Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T10:30:53.475Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:53.477Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:53.499Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:58.001Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T10:30:58.002Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T10:30:58.002Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T10:30:58.229Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T10:30:58.230Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T10:30:58.230Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:58.232Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:58.253Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:30:59.755Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:30:59.904Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T10:30:59.905Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T10:30:59.905Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:30:59.907Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:30:59.927Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:31:01.580Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T10:31:01.580Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T10:31:01.580Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:31:01.582Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:31:01.602Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:31:03.104Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T10:31:03.377Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T10:31:03.377Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T10:31:03.377Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:31:03.379Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:31:03.399Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:31:04.901Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T10:31:04.901Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:31:05.143Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T10:31:05.143Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T10:31:05.143Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:31:05.145Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:31:05.166Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:31:06.914Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T10:31:06.914Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T10:31:06.914Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T10:31:06.914Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:31:06.916Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:31:06.937Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:31:11.439Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T10:31:11.439Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T10:31:11.439Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T10:31:11.885Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T10:31:11.886Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T10:31:11.886Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:31:11.888Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:31:11.909Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:31:16.412Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T10:31:16.413Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T10:31:16.502Z] [BOT] 📂 Loaded 6471 existing routing entries
[2026-01-22T10:31:16.593Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6481
[2026-01-22T10:31:16.593Z] [BOT] Timestamp: 2026-01-22T10:31:16.567Z
[2026-01-22T10:31:16.594Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
[2026-01-22T10:31:16.594Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T10:31:16.594Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-22T10:31:16.594Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
[2026-01-22T10:31:16.594Z] [BOT] 3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T10:31:16.595Z] [BOT] [STATS] Channel stats saved
[2026-01-22T10:31:18.607Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*