# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T11:17:20.229Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T11:16:39.517Z] ========================================
[2026-01-22T11:16:39.519Z] Discord Bot Execution Log
[2026-01-22T11:16:39.519Z] Environment: GitHub Actions
[2026-01-22T11:16:39.519Z] Node Version: v20.19.6
[2026-01-22T11:16:39.519Z] ========================================
[2026-01-22T11:16:39.519Z] Environment Variables Check:
[2026-01-22T11:16:39.519Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T11:16:39.520Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T11:16:39.520Z] 
Multi-Channel Configuration:
[2026-01-22T11:16:39.520Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.520Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.521Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T11:16:39.521Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T11:16:39.521Z] 
Data Files Check:
[2026-01-22T11:16:39.521Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T11:16:39.534Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009238 bytes)
[2026-01-22T11:16:39.534Z] 
========================================
[2026-01-22T11:16:39.535Z] Starting Enhanced Discord Bot...
[2026-01-22T11:16:39.535Z] ========================================
[2026-01-22T11:16:40.128Z] [BOT] ✅ Loaded V2 database: 3454 jobs
[2026-01-22T11:16:40.986Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T11:16:40.986Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T11:16:40.986Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T11:16:41.100Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T11:16:41.104Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T11:16:41.104Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T11:16:41.105Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T11:16:41.105Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T11:16:41.106Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T11:16:41.109Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T11:16:41.109Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T11:16:41.109Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:16:41.126Z] [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T11:16:41.322Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T11:16:41.323Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T11:16:41.323Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:41.325Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:41.353Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:42.854Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T11:16:42.855Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:16:43.047Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T11:16:43.047Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T11:16:43.047Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T11:16:43.048Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:43.050Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:43.071Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:44.822Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:16:44.823Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T11:16:44.823Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:44.825Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:44.848Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:46.350Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-22T11:16:46.350Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T11:16:46.517Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T11:16:46.517Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T11:16:46.518Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:46.520Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:46.543Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:48.351Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:16:48.352Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T11:16:48.352Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:48.354Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:48.376Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:49.877Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T11:16:49.878Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T11:16:50.051Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T11:16:50.052Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:50.054Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:50.078Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:51.581Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T11:16:51.581Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T11:16:51.860Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T11:16:51.861Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T11:16:51.861Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:51.863Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:51.886Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:53.642Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T11:16:53.643Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T11:16:53.643Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:53.645Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:53.667Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:58.169Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T11:16:58.170Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:16:58.422Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T11:16:58.423Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T11:16:58.423Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:16:58.425Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:16:58.445Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:16:59.948Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:17:00.198Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T11:17:00.198Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:17:00.199Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:17:00.201Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:17:00.221Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:17:01.982Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T11:17:01.982Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T11:17:01.982Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:17:01.983Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:17:01.984Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:17:02.004Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:17:03.507Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T11:17:03.507Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T11:17:03.711Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T11:17:03.711Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T11:17:03.711Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T11:17:03.711Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:17:03.713Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:17:03.733Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:17:05.234Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T11:17:05.234Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T11:17:05.627Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T11:17:05.628Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T11:17:05.628Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T11:17:05.628Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:17:05.630Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:17:05.650Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:17:07.554Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T11:17:07.554Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T11:17:07.554Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:17:07.556Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:17:07.576Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:17:12.078Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T11:17:12.078Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T11:17:12.079Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T11:17:12.336Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T11:17:12.336Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T11:17:12.337Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T11:17:12.337Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T11:17:12.339Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T11:17:12.359Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T11:17:16.861Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T11:17:16.863Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T11:17:16.946Z] [BOT] 📂 Loaded 6501 existing routing entries
[2026-01-22T11:17:17.039Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T11:17:17.039Z] [BOT] Total entries: 6511
   Timestamp: 2026-01-22T11:17:17.008Z
[2026-01-22T11:17:17.039Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T11:17:17.039Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
[2026-01-22T11:17:17.039Z] [BOT] Skipped: 0
[2026-01-22T11:17:17.040Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
[2026-01-22T11:17:17.040Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T11:17:17.040Z] [BOT] [STATS] Channel stats saved
[2026-01-22T11:17:19.057Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2497) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*