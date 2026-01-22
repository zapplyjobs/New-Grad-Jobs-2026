# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T21:30:50.746Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T21:30:10.743Z] ========================================
[2026-01-22T21:30:10.745Z] Discord Bot Execution Log
[2026-01-22T21:30:10.745Z] Environment: GitHub Actions
[2026-01-22T21:30:10.745Z] Node Version: v20.19.6
[2026-01-22T21:30:10.745Z] ========================================
[2026-01-22T21:30:10.745Z] Environment Variables Check:
[2026-01-22T21:30:10.745Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T21:30:10.745Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.745Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T21:30:10.745Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T21:30:10.745Z] 
Multi-Channel Configuration:
[2026-01-22T21:30:10.746Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T21:30:10.746Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T21:30:10.746Z] 
Data Files Check:
[2026-01-22T21:30:10.747Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T21:30:10.760Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1947667 bytes)
[2026-01-22T21:30:10.760Z] 
========================================
[2026-01-22T21:30:10.760Z] Starting Enhanced Discord Bot...
[2026-01-22T21:30:10.760Z] ========================================
[2026-01-22T21:30:11.290Z] [BOT] ✅ Loaded V2 database: 3344 jobs
[2026-01-22T21:30:11.837Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T21:30:11.837Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T21:30:11.837Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T21:30:11.954Z] [BOT] ✅ Loaded pending queue: 2782 total (2762 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T21:30:11.958Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T21:30:11.959Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T21:30:11.959Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T21:30:11.960Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T21:30:11.960Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T21:30:11.965Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T21:30:11.965Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T21:30:11.965Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:30:11.987Z] [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T21:30:12.170Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T21:30:12.170Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T21:30:12.171Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T21:30:12.171Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:12.174Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:12.201Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
[2026-01-22T21:30:12.201Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:13.703Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:30:13.919Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T21:30:13.919Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T21:30:13.920Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T21:30:13.920Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:13.922Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:13.943Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:15.647Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T21:30:15.647Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T21:30:15.647Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T21:30:15.647Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:15.650Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:15.673Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:17.174Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:30:17.483Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T21:30:17.483Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T21:30:17.484Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T21:30:17.484Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:17.486Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:17.508Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:19.299Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T21:30:19.299Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T21:30:19.299Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:19.302Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:19.323Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:20.825Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T21:30:20.825Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:30:21.043Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T21:30:21.044Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T21:30:21.044Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T21:30:21.044Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:21.046Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:21.070Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:22.572Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T21:30:22.572Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:30:23.096Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T21:30:23.096Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T21:30:23.097Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T21:30:23.097Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:23.099Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:23.121Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:25.022Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T21:30:25.023Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T21:30:25.023Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:25.025Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:25.046Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:29.548Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T21:30:29.549Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:30:29.769Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T21:30:29.770Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T21:30:29.770Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:29.772Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:29.792Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:31.294Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:30:31.489Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T21:30:31.489Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T21:30:31.489Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:31.491Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:31.512Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:33.231Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T21:30:33.232Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:30:33.232Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:33.234Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:33.253Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:34.755Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T21:30:34.755Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T21:30:35.013Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T21:30:35.013Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T21:30:35.014Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:35.016Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:35.035Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:36.536Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T21:30:36.536Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T21:30:36.778Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T21:30:36.778Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T21:30:36.778Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:36.780Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:36.800Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:38.516Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T21:30:38.516Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T21:30:38.516Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:30:38.516Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:38.518Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:38.539Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:43.040Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T21:30:43.040Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T21:30:43.040Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T21:30:43.286Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T21:30:43.286Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T21:30:43.286Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T21:30:43.287Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:30:43.289Z] [BOT] ✅ No jobs to archive (all 3344 jobs within 7-day window)
[2026-01-22T21:30:43.309Z] [BOT] 💾 Saved posted_jobs.json: 3344 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:30:47.812Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T21:30:47.813Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T21:30:47.890Z] [BOT] 📂 Loaded 6811 existing routing entries
[2026-01-22T21:30:47.980Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T21:30:47.981Z] [BOT] Total entries: 6821
   Timestamp: 2026-01-22T21:30:47.951Z
[2026-01-22T21:30:47.981Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T21:30:47.981Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T21:30:47.981Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T21:30:47.982Z] [BOT] 4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T21:30:47.982Z] [BOT] [STATS] Channel stats saved
[2026-01-22T21:30:49.999Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2407) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*