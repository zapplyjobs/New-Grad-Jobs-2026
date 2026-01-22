# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T01:40:30.980Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T01:39:50.723Z] ========================================
[2026-01-22T01:39:50.725Z] Discord Bot Execution Log
[2026-01-22T01:39:50.725Z] Environment: GitHub Actions
[2026-01-22T01:39:50.725Z] Node Version: v20.19.6
[2026-01-22T01:39:50.725Z] ========================================
[2026-01-22T01:39:50.725Z] Environment Variables Check:
[2026-01-22T01:39:50.725Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T01:39:50.725Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.725Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T01:39:50.726Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T01:39:50.726Z] 
Multi-Channel Configuration:
[2026-01-22T01:39:50.726Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T01:39:50.726Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T01:39:50.727Z] 
Data Files Check:
[2026-01-22T01:39:50.727Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T01:39:50.742Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2146189 bytes)
[2026-01-22T01:39:50.742Z] 
========================================
[2026-01-22T01:39:50.742Z] Starting Enhanced Discord Bot...
[2026-01-22T01:39:50.742Z] ========================================
[2026-01-22T01:39:51.280Z] [BOT] ✅ Loaded V2 database: 3694 jobs
[2026-01-22T01:39:51.645Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T01:39:51.645Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T01:39:51.645Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T01:39:51.761Z] [BOT] ✅ Loaded pending queue: 2787 total (2767 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T01:39:51.766Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T01:39:51.766Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T01:39:51.767Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T01:39:51.767Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T01:39:51.768Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-22T01:39:51.768Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T01:39:51.771Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T01:39:51.771Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T01:39:51.771Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T01:39:51.788Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T01:39:52.010Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T01:39:52.010Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T01:39:52.011Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T01:39:52.011Z] [BOT] 💾 BEFORE ARCHIVING: 3694 jobs in database
[2026-01-22T01:39:52.014Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T01:39:52.019Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-22T01:39:52.019Z] [BOT] ✅ Archiving complete: 9 archived, 3685 active
[2026-01-22T01:39:52.045Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:39:53.547Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T01:39:53.547Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T01:39:53.775Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T01:39:53.776Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T01:39:53.776Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T01:39:53.776Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:39:53.778Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:39:53.804Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:39:55.584Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T01:39:55.584Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T01:39:55.584Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:39:55.587Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:39:55.612Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:39:57.114Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T01:39:57.466Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T01:39:57.467Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T01:39:57.467Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:39:57.470Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:39:57.493Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:39:59.136Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T01:39:59.136Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T01:39:59.136Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:39:59.138Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:39:59.159Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:00.660Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T01:40:00.660Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T01:40:00.897Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T01:40:00.898Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T01:40:00.898Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T01:40:00.898Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:00.901Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:00.927Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:02.429Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T01:40:02.429Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T01:40:03.289Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T01:40:03.290Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T01:40:03.290Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:03.292Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:03.316Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:05.195Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T01:40:05.196Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T01:40:05.196Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:05.198Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:05.225Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:09.726Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T01:40:09.727Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T01:40:09.727Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T01:40:09.997Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T01:40:09.997Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T01:40:09.998Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T01:40:09.998Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:10.001Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:10.023Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:11.526Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T01:40:11.526Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T01:40:11.737Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T01:40:11.737Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T01:40:11.738Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T01:40:11.738Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:11.740Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:11.780Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:13.597Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T01:40:13.598Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T01:40:13.598Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:13.600Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:13.624Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:15.126Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T01:40:15.126Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T01:40:15.327Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T01:40:15.328Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T01:40:15.328Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:15.330Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:15.356Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:16.858Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T01:40:17.116Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T01:40:17.117Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T01:40:17.117Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:17.119Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:17.142Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:18.902Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T01:40:18.903Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T01:40:18.903Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:18.905Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:18.929Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:23.431Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T01:40:23.431Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T01:40:23.431Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T01:40:23.625Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T01:40:23.626Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T01:40:23.626Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T01:40:23.628Z] [BOT] ✅ No jobs to archive (all 3685 jobs within 7-day window)
[2026-01-22T01:40:23.652Z] [BOT] 💾 Saved posted_jobs.json: 3685 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T01:40:28.154Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T01:40:28.156Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T01:40:28.224Z] [BOT] 📂 Loaded 6251 existing routing entries
[2026-01-22T01:40:28.323Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-22T01:40:28.323Z] [BOT] New entries: 10
   Total entries: 6261
   Timestamp: 2026-01-22T01:40:28.281Z
[2026-01-22T01:40:28.324Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T01:40:28.324Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T01:40:28.324Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T01:40:28.325Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T01:40:30.343Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*