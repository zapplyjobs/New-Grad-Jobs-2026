# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T06:01:19.039Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T06:00:38.278Z] ========================================
[2026-01-22T06:00:38.280Z] Discord Bot Execution Log
[2026-01-22T06:00:38.280Z] Environment: GitHub Actions
[2026-01-22T06:00:38.280Z] Node Version: v20.19.6
[2026-01-22T06:00:38.280Z] ========================================
[2026-01-22T06:00:38.280Z] Environment Variables Check:
[2026-01-22T06:00:38.280Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T06:00:38.280Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.280Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T06:00:38.280Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T06:00:38.280Z] 
Multi-Channel Configuration:
[2026-01-22T06:00:38.280Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.280Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T06:00:38.281Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T06:00:38.281Z] 
Data Files Check:
[2026-01-22T06:00:38.282Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T06:00:38.297Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2085488 bytes)
[2026-01-22T06:00:38.297Z] 
========================================
[2026-01-22T06:00:38.297Z] Starting Enhanced Discord Bot...
[2026-01-22T06:00:38.297Z] ========================================
[2026-01-22T06:00:38.784Z] [BOT] ✅ Loaded V2 database: 3585 jobs
[2026-01-22T06:00:39.668Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T06:00:39.668Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T06:00:39.668Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T06:00:39.821Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T06:00:39.826Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T06:00:39.826Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T06:00:39.826Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T06:00:39.828Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T06:00:39.828Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T06:00:39.831Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T06:00:39.831Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T06:00:39.831Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:00:39.847Z] [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T06:00:40.143Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T06:00:40.144Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T06:00:40.144Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:40.147Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:40.172Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:41.674Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T06:00:41.674Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:00:41.908Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T06:00:41.908Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T06:00:41.909Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T06:00:41.909Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:41.912Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:41.935Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:43.706Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:00:43.706Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T06:00:43.706Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:43.709Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:43.732Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:45.234Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T06:00:45.234Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:00:45.594Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T06:00:45.595Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:45.597Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:45.621Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:47.326Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:00:47.327Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T06:00:47.327Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:47.329Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:47.351Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:48.852Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T06:00:48.852Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:00:49.060Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T06:00:49.061Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T06:00:49.061Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T06:00:49.061Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:49.064Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:49.089Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:50.589Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T06:00:50.590Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:00:50.931Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T06:00:50.931Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T06:00:50.931Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:50.934Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:50.957Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:52.631Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:00:52.632Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T06:00:52.632Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:52.634Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:52.658Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:57.160Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T06:00:57.161Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T06:00:57.162Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T06:00:57.412Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T06:00:57.412Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T06:00:57.412Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T06:00:57.413Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:57.415Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:57.436Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:00:58.938Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T06:00:58.939Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T06:00:59.209Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T06:00:59.209Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T06:00:59.209Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:00:59.209Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:00:59.211Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:00:59.233Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:01:00.916Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:01:00.917Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:01:00.917Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:01:00.919Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:01:00.940Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:01:02.442Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T06:01:02.443Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T06:01:02.839Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T06:01:02.840Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T06:01:02.840Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:01:02.842Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:01:02.863Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:01:04.365Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T06:01:04.365Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T06:01:04.582Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T06:01:04.582Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T06:01:04.583Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:01:04.583Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:01:04.585Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:01:04.607Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:01:06.322Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:01:06.322Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:01:06.322Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:01:06.324Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:01:06.346Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:01:10.848Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T06:01:10.848Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-22T06:01:10.849Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-22T06:01:11.252Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T06:01:11.252Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T06:01:11.252Z] [BOT] 💾 BEFORE ARCHIVING: 3585 jobs in database
[2026-01-22T06:01:11.254Z] [BOT] ✅ No jobs to archive (all 3585 jobs within 7-day window)
[2026-01-22T06:01:11.278Z] [BOT] 💾 Saved posted_jobs.json: 3585 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:01:15.780Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T06:01:15.782Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T06:01:15.869Z] [BOT] 📂 Loaded 6331 existing routing entries
[2026-01-22T06:01:15.959Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6341
[2026-01-22T06:01:15.959Z] [BOT] Timestamp: 2026-01-22T06:01:15.934Z
[2026-01-22T06:01:15.960Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T06:01:15.960Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T06:01:15.960Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T06:01:15.960Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T06:01:15.961Z] [BOT] [STATS] Channel stats saved
[2026-01-22T06:01:17.974Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*