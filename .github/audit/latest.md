# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T23:01:51.464Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T23:01:08.537Z] ========================================
[2026-01-21T23:01:08.539Z] Discord Bot Execution Log
[2026-01-21T23:01:08.539Z] Environment: GitHub Actions
[2026-01-21T23:01:08.539Z] Node Version: v20.19.6
[2026-01-21T23:01:08.539Z] ========================================
[2026-01-21T23:01:08.539Z] Environment Variables Check:
[2026-01-21T23:01:08.539Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T23:01:08.539Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.539Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T23:01:08.540Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T23:01:08.540Z] 
Multi-Channel Configuration:
[2026-01-21T23:01:08.540Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T23:01:08.540Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T23:01:08.540Z] 
Data Files Check:
[2026-01-21T23:01:08.541Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T23:01:08.555Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2181898 bytes)
[2026-01-21T23:01:08.555Z] 
========================================
[2026-01-21T23:01:08.555Z] Starting Enhanced Discord Bot...
[2026-01-21T23:01:08.555Z] ========================================
[2026-01-21T23:01:09.070Z] [BOT] ✅ Loaded V2 database: 3765 jobs
[2026-01-21T23:01:09.705Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T23:01:09.705Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T23:01:09.705Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T23:01:09.819Z] [BOT] ✅ Loaded pending queue: 2763 total (2743 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T23:01:09.823Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T23:01:09.824Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T23:01:09.824Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T23:01:09.825Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T23:01:09.825Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T23:01:09.828Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T23:01:09.829Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T23:01:09.829Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:01:09.846Z] [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T23:01:10.092Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T23:01:10.093Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T23:01:10.093Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T23:01:10.093Z] [BOT] 💾 BEFORE ARCHIVING: 3765 jobs in database
[2026-01-21T23:01:10.097Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T23:01:10.102Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T23:01:10.102Z] [BOT] ✅ Archiving complete: 10 archived, 3755 active
[2026-01-21T23:01:10.134Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
[2026-01-21T23:01:10.135Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:11.636Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-21T23:01:11.637Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T23:01:11.922Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-21T23:01:11.922Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T23:01:11.922Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T23:01:11.923Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:11.925Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:11.948Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
[2026-01-21T23:01:11.948Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:13.717Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-21T23:01:13.717Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:01:13.717Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T23:01:13.718Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:13.720Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:13.744Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:15.244Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-21T23:01:15.244Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:01:15.410Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T23:01:15.410Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T23:01:15.411Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-21T23:01:15.411Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:15.414Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:15.438Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:17.221Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:01:17.221Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T23:01:17.221Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:17.223Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:17.243Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:18.745Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-21T23:01:18.745Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:01:19.078Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-21T23:01:19.078Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T23:01:19.078Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T23:01:19.078Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:19.081Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:19.105Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:20.607Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-21T23:01:20.608Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:01:20.783Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-21T23:01:20.783Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T23:01:20.784Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T23:01:20.784Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:20.786Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:20.807Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
[2026-01-21T23:01:20.807Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:22.576Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:01:22.576Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T23:01:22.576Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:22.579Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:22.604Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:27.106Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T23:01:27.107Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:01:27.449Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T23:01:27.450Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T23:01:27.450Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:27.452Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:27.473Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:28.974Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-21T23:01:28.975Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:01:30.840Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-21T23:01:30.841Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T23:01:30.841Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:01:30.841Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:30.844Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:30.867Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:32.529Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T23:01:32.530Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:01:32.530Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:01:32.530Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:32.532Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:32.553Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:34.053Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-21T23:01:34.054Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T23:01:35.676Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-21T23:01:35.676Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T23:01:35.676Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T23:01:35.676Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:35.678Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:35.702Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:37.202Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-21T23:01:37.202Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T23:01:37.492Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T23:01:37.492Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:01:37.492Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:37.494Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:37.516Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
[2026-01-21T23:01:37.516Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:39.226Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T23:01:39.227Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:01:39.227Z] [BOT] 💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:39.229Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:39.251Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:43.753Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T23:01:43.753Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-21T23:01:43.753Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T23:01:44.030Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-21T23:01:44.030Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T23:01:44.031Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3755 jobs in database
[2026-01-21T23:01:44.033Z] [BOT] ✅ No jobs to archive (all 3755 jobs within 7-day window)
[2026-01-21T23:01:44.055Z] [BOT] 💾 Saved posted_jobs.json: 3755 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:01:48.558Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T23:01:48.559Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T23:01:48.623Z] [BOT] 📂 Loaded 6181 existing routing entries
[2026-01-21T23:01:48.705Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T23:01:48.705Z] [BOT] Total entries: 6191
   Timestamp: 2026-01-21T23:01:48.675Z
[2026-01-21T23:01:48.706Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T23:01:48.706Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T23:01:48.706Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-21T23:01:48.706Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-21T23:01:48.707Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-21T23:01:50.725Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2387) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*