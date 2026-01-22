# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T11:31:50.398Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T11:31:09.687Z] ========================================
[2026-01-22T11:31:09.689Z] Discord Bot Execution Log
[2026-01-22T11:31:09.689Z] Environment: GitHub Actions
[2026-01-22T11:31:09.689Z] Node Version: v20.19.6
[2026-01-22T11:31:09.689Z] ========================================
[2026-01-22T11:31:09.690Z] Environment Variables Check:
[2026-01-22T11:31:09.690Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T11:31:09.690Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.690Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T11:31:09.690Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T11:31:09.690Z] 
Multi-Channel Configuration:
[2026-01-22T11:31:09.690Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.690Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.690Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.690Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.690Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.691Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.691Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.691Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.691Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T11:31:09.691Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T11:31:09.691Z] 
Data Files Check:
[2026-01-22T11:31:09.692Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T11:31:09.705Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009238 bytes)
[2026-01-22T11:31:09.705Z] 
========================================
[2026-01-22T11:31:09.705Z] Starting Enhanced Discord Bot...
[2026-01-22T11:31:09.705Z] ========================================
[2026-01-22T11:31:10.231Z] [BOT] ✅ Loaded V2 database: 3454 jobs
[2026-01-22T11:31:10.841Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T11:31:10.841Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T11:31:10.841Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T11:31:10.956Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T11:31:10.960Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T11:31:10.961Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T11:31:10.961Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T11:31:10.962Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T11:31:10.962Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T11:31:10.965Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T11:31:10.966Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T11:31:10.966Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:31:10.983Z] [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T11:31:11.191Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T11:31:11.192Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T11:31:11.192Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:11.195Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:11.227Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T11:31:11.228Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:12.729Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:31:12.932Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T11:31:12.933Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T11:31:12.933Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:12.935Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:12.956Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:14.566Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:31:14.566Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T11:31:14.567Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:14.569Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:14.592Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:16.092Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:31:16.549Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T11:31:16.550Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T11:31:16.550Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:16.552Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:16.575Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:18.284Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:31:18.284Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T11:31:18.284Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:18.287Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:18.307Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:19.808Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T11:31:19.808Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:31:20.117Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T11:31:20.117Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T11:31:20.117Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:20.120Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:20.144Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:21.646Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T11:31:21.646Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:31:23.025Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T11:31:23.026Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T11:31:23.026Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T11:31:23.026Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:23.028Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:23.052Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:24.695Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:31:24.696Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T11:31:24.696Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:24.698Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:24.720Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:29.222Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T11:31:29.224Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:31:29.405Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T11:31:29.406Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T11:31:29.406Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:29.408Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:29.428Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:30.930Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:31:31.373Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T11:31:31.374Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:31:31.374Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:31.376Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:31.396Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:33.166Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:31:33.166Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:31:33.166Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:33.168Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:33.189Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:34.690Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:31:34.690Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T11:31:34.872Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T11:31:34.873Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T11:31:34.873Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:34.875Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:34.895Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:36.397Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:31:36.576Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T11:31:36.577Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:31:36.577Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:36.579Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:36.599Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:38.328Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:31:38.329Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:31:38.329Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:38.331Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:38.351Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:42.853Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T11:31:42.853Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T11:31:42.853Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T11:31:43.019Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T11:31:43.019Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T11:31:43.020Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T11:31:43.020Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:31:43.022Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:31:43.043Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:31:47.544Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T11:31:47.546Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T11:31:47.628Z] [BOT] 📂 Loaded 6511 existing routing entries
[2026-01-22T11:31:47.723Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T11:31:47.723Z] [BOT] Total entries: 6521
   Timestamp: 2026-01-22T11:31:47.692Z
[2026-01-22T11:31:47.723Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T11:31:47.723Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T11:31:47.724Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T11:31:47.724Z] [BOT] [STATS] Channel stats saved
[2026-01-22T11:31:49.742Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*