# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T14:53:38.437Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T14:52:55.959Z] ========================================
[2026-01-22T14:52:55.961Z] Discord Bot Execution Log
[2026-01-22T14:52:55.961Z] Environment: GitHub Actions
[2026-01-22T14:52:55.961Z] Node Version: v20.19.6
[2026-01-22T14:52:55.961Z] ========================================
[2026-01-22T14:52:55.961Z] Environment Variables Check:
[2026-01-22T14:52:55.961Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T14:52:55.961Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.961Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T14:52:55.961Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T14:52:55.962Z] 
Multi-Channel Configuration:
[2026-01-22T14:52:55.962Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T14:52:55.962Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T14:52:55.962Z] 
Data Files Check:
[2026-01-22T14:52:55.963Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T14:52:55.977Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T14:52:55.977Z] 
========================================
[2026-01-22T14:52:55.977Z] Starting Enhanced Discord Bot...
[2026-01-22T14:52:55.977Z] ========================================
[2026-01-22T14:52:56.514Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T14:52:58.535Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T14:52:58.536Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T14:52:58.536Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T14:52:58.652Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T14:52:58.657Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T14:52:58.658Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T14:52:58.658Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T14:52:58.659Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T14:52:58.659Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T14:52:58.662Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T14:52:58.662Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T14:52:58.662Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T14:52:58.680Z] [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T14:52:59.032Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T14:52:59.032Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T14:52:59.033Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T14:52:59.033Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:52:59.036Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:52:59.063Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:00.564Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T14:53:00.565Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T14:53:00.941Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T14:53:00.942Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T14:53:00.942Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T14:53:00.942Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:00.945Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:00.966Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:02.780Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T14:53:02.780Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T14:53:02.781Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T14:53:02.781Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:02.783Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:02.807Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:04.308Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T14:53:04.308Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T14:53:04.543Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T14:53:04.544Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T14:53:04.544Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:04.547Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:04.571Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:06.348Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T14:53:06.348Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T14:53:06.348Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:06.350Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:06.372Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:07.873Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T14:53:07.873Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T14:53:08.136Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T14:53:08.137Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T14:53:08.137Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:08.139Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:08.165Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:09.667Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T14:53:09.667Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T14:53:09.873Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T14:53:09.873Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T14:53:09.873Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T14:53:09.874Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:09.876Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:09.898Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T14:53:09.899Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:11.687Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T14:53:11.687Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T14:53:11.687Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T14:53:11.687Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:11.689Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:11.712Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:16.214Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T14:53:16.216Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T14:53:16.216Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T14:53:16.470Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T14:53:16.470Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T14:53:16.471Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T14:53:16.471Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:16.473Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:16.494Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:17.996Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T14:53:18.449Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T14:53:18.449Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T14:53:18.449Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:18.451Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:18.472Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:20.381Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T14:53:20.381Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T14:53:20.382Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:20.384Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:20.405Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:21.906Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T14:53:21.906Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T14:53:22.091Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T14:53:22.092Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T14:53:22.092Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:22.094Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:22.114Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:23.615Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T14:53:23.891Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T14:53:23.891Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T14:53:23.891Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:23.894Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:23.914Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:25.644Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T14:53:25.644Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T14:53:25.644Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:25.646Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:25.669Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:30.171Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T14:53:30.171Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T14:53:30.171Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T14:53:30.367Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T14:53:30.367Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T14:53:30.367Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:53:30.369Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:53:30.390Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:53:34.892Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T14:53:34.893Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T14:53:34.976Z] [BOT] 📂 Loaded 6601 existing routing entries
[2026-01-22T14:53:35.071Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T14:53:35.072Z] [BOT] Total entries: 6611
   Timestamp: 2026-01-22T14:53:35.041Z
[2026-01-22T14:53:35.072Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T14:53:35.072Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T14:53:35.072Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T14:53:35.073Z] [BOT] [STATS] Channel stats saved
[2026-01-22T14:53:37.091Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*