# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T10:14:29.476Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T10:13:49.933Z] ========================================
[2026-01-22T10:13:49.934Z] Discord Bot Execution Log
[2026-01-22T10:13:49.935Z] Environment: GitHub Actions
[2026-01-22T10:13:49.935Z] Node Version: v20.19.6
[2026-01-22T10:13:49.935Z] ========================================
[2026-01-22T10:13:49.935Z] Environment Variables Check:
[2026-01-22T10:13:49.935Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T10:13:49.935Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.935Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T10:13:49.935Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T10:13:49.935Z] 
Multi-Channel Configuration:
[2026-01-22T10:13:49.935Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T10:13:49.936Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T10:13:49.936Z] 
Data Files Check:
[2026-01-22T10:13:49.937Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T10:13:49.950Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2009238 bytes)
[2026-01-22T10:13:49.950Z] 
========================================
[2026-01-22T10:13:49.950Z] Starting Enhanced Discord Bot...
[2026-01-22T10:13:49.950Z] ========================================
[2026-01-22T10:13:50.473Z] [BOT] ✅ Loaded V2 database: 3454 jobs
[2026-01-22T10:13:50.925Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T10:13:50.925Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T10:13:50.925Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T10:13:51.043Z] [BOT] ✅ Loaded pending queue: 2762 total (2742 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T10:13:51.047Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T10:13:51.048Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T10:13:51.048Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T10:13:51.049Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T10:13:51.049Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T10:13:51.052Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T10:13:51.053Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T10:13:51.053Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:13:51.070Z] [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T10:13:51.341Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T10:13:51.341Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T10:13:51.342Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T10:13:51.342Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:13:51.345Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:13:51.371Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:13:52.874Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T10:13:52.874Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T10:13:53.045Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T10:13:53.045Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T10:13:53.046Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T10:13:53.046Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:13:53.048Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:13:53.070Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:13:54.757Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T10:13:54.757Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T10:13:54.758Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:13:54.760Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:13:54.783Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:13:56.285Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:13:56.433Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T10:13:56.433Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T10:13:56.434Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T10:13:56.434Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:13:56.437Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:13:56.459Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T10:13:56.459Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T10:13:58.135Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T10:13:58.136Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T10:13:58.136Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:13:58.138Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:13:58.158Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:13:59.659Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T10:13:59.659Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T10:13:59.875Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T10:13:59.876Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T10:13:59.876Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:13:59.878Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:13:59.902Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:01.404Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T10:14:01.405Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T10:14:01.852Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T10:14:01.853Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T10:14:01.853Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:01.855Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:01.878Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:03.669Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T10:14:03.670Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T10:14:03.670Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:03.673Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:03.693Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:08.195Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T10:14:08.196Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T10:14:08.196Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:14:08.430Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T10:14:08.431Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T10:14:08.431Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:08.433Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:08.455Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:09.958Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:14:10.205Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T10:14:10.206Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T10:14:10.206Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:10.209Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:10.233Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:11.875Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T10:14:11.876Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T10:14:11.876Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:11.878Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:11.902Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:13.403Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T10:14:13.403Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T10:14:13.717Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T10:14:13.718Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T10:14:13.718Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:13.721Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:13.742Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:15.243Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T10:14:15.380Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T10:14:15.380Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T10:14:15.381Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T10:14:15.381Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:15.383Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:15.404Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:17.072Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T10:14:17.073Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T10:14:17.073Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:17.075Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:17.095Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T10:14:17.095Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:21.597Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T10:14:21.597Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T10:14:21.598Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T10:14:22.077Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T10:14:22.077Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T10:14:22.077Z] [BOT] 💾 BEFORE ARCHIVING: 3454 jobs in database
[2026-01-22T10:14:22.080Z] [BOT] ✅ No jobs to archive (all 3454 jobs within 7-day window)
[2026-01-22T10:14:22.100Z] [BOT] 💾 Saved posted_jobs.json: 3454 active jobs
[2026-01-22T10:14:22.100Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T10:14:26.602Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T10:14:26.604Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T10:14:26.686Z] [BOT] 📂 Loaded 6461 existing routing entries
[2026-01-22T10:14:26.781Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T10:14:26.781Z] [BOT] Total entries: 6471
   Timestamp: 2026-01-22T10:14:26.750Z
[2026-01-22T10:14:26.782Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T10:14:26.782Z] [BOT] Total attempts: 15
[2026-01-22T10:14:26.782Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T10:14:26.782Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T10:14:26.782Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T10:14:26.782Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T10:14:26.783Z] [BOT] [STATS] Channel stats saved
[2026-01-22T10:14:28.800Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2472) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*