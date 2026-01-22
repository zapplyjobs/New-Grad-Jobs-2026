# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T20:15:52.170Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T20:15:10.350Z] ========================================
[2026-01-22T20:15:10.352Z] Discord Bot Execution Log
[2026-01-22T20:15:10.352Z] Environment: GitHub Actions
[2026-01-22T20:15:10.352Z] Node Version: v20.19.6
[2026-01-22T20:15:10.352Z] ========================================
[2026-01-22T20:15:10.352Z] Environment Variables Check:
[2026-01-22T20:15:10.352Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T20:15:10.352Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.352Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T20:15:10.352Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T20:15:10.352Z] 
Multi-Channel Configuration:
[2026-01-22T20:15:10.353Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T20:15:10.353Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T20:15:10.353Z] 
Data Files Check:
[2026-01-22T20:15:10.354Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T20:15:10.367Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1970928 bytes)
[2026-01-22T20:15:10.367Z] 
========================================
[2026-01-22T20:15:10.367Z] Starting Enhanced Discord Bot...
[2026-01-22T20:15:10.367Z] ========================================
[2026-01-22T20:15:10.915Z] [BOT] ✅ Loaded V2 database: 3386 jobs
[2026-01-22T20:15:11.570Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T20:15:11.571Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T20:15:11.571Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T20:15:11.688Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T20:15:11.692Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T20:15:11.692Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T20:15:11.693Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T20:15:11.694Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T20:15:11.694Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T20:15:11.697Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T20:15:11.698Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T20:15:11.698Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:15:11.715Z] [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T20:15:12.083Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T20:15:12.083Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T20:15:12.084Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T20:15:12.084Z] [BOT] 💾 BEFORE ARCHIVING: 3386 jobs in database
[2026-01-22T20:15:12.088Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T20:15:12.093Z] [BOT] 📦 Archived 19 jobs to 2026-01.json (19 total in archive)
[2026-01-22T20:15:12.093Z] [BOT] ✅ Archiving complete: 19 archived, 3367 active
[2026-01-22T20:15:12.116Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:13.617Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:15:14.229Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T20:15:14.229Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T20:15:14.230Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T20:15:14.230Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:14.232Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:14.252Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:16.026Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T20:15:16.027Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T20:15:16.027Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:16.029Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:16.052Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:17.552Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:15:17.757Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T20:15:17.757Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T20:15:17.758Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T20:15:17.758Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:17.760Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:17.782Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:19.524Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T20:15:19.525Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T20:15:19.525Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:19.527Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:19.547Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:21.047Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T20:15:21.047Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T20:15:21.251Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T20:15:21.251Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T20:15:21.252Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:21.254Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:21.279Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:22.780Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T20:15:22.780Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T20:15:23.505Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T20:15:23.506Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T20:15:23.506Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:23.508Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:23.530Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:25.324Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T20:15:25.325Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T20:15:25.325Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:25.327Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:25.349Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:29.852Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T20:15:29.854Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T20:15:29.854Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T20:15:30.110Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T20:15:30.111Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T20:15:30.111Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:30.113Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:30.134Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:31.635Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T20:15:32.068Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T20:15:32.069Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T20:15:32.069Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:32.071Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:32.091Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
[2026-01-22T20:15:32.091Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:33.902Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T20:15:33.903Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T20:15:33.903Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:33.905Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:33.925Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:35.426Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T20:15:35.426Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T20:15:35.693Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T20:15:35.693Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T20:15:35.693Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:35.695Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:35.715Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:37.217Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T20:15:37.538Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T20:15:37.539Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T20:15:37.539Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:37.541Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:37.560Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:39.330Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T20:15:39.330Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T20:15:39.331Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T20:15:39.331Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:39.333Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:39.353Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:43.854Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T20:15:43.854Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T20:15:43.854Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T20:15:44.143Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T20:15:44.143Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T20:15:44.144Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:15:44.145Z] [BOT] ✅ No jobs to archive (all 3367 jobs within 7-day window)
[2026-01-22T20:15:44.166Z] [BOT] 💾 Saved posted_jobs.json: 3367 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:15:48.668Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T20:15:48.670Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T20:15:48.749Z] [BOT] 📂 Loaded 6771 existing routing entries
[2026-01-22T20:15:48.842Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T20:15:48.843Z] [BOT] Total entries: 6781
   Timestamp: 2026-01-22T20:15:48.812Z
[2026-01-22T20:15:48.843Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T20:15:48.843Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T20:15:48.844Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T20:15:48.844Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T20:15:48.844Z] [BOT] [STATS] Channel stats saved
[2026-01-22T20:15:50.863Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2487) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*