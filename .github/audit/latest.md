# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T13:26:31.618Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T13:25:47.637Z] ========================================
[2026-01-22T13:25:47.639Z] Discord Bot Execution Log
[2026-01-22T13:25:47.639Z] Environment: GitHub Actions
[2026-01-22T13:25:47.639Z] Node Version: v20.19.6
[2026-01-22T13:25:47.639Z] ========================================
[2026-01-22T13:25:47.639Z] Environment Variables Check:
[2026-01-22T13:25:47.639Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T13:25:47.639Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.639Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T13:25:47.640Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T13:25:47.640Z] 
Multi-Channel Configuration:
[2026-01-22T13:25:47.640Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T13:25:47.640Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T13:25:47.641Z] 
Data Files Check:
[2026-01-22T13:25:47.641Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T13:25:47.654Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T13:25:47.654Z] 
========================================
[2026-01-22T13:25:47.654Z] Starting Enhanced Discord Bot...
[2026-01-22T13:25:47.654Z] ========================================
[2026-01-22T13:25:48.206Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T13:25:48.934Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T13:25:48.935Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T13:25:48.935Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T13:25:49.051Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T13:25:49.055Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T13:25:49.055Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T13:25:49.055Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T13:25:49.056Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T13:25:49.057Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T13:25:49.059Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T13:25:49.060Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T13:25:49.060Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T13:25:49.078Z] [BOT ERROR] (node:2419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T13:25:49.390Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T13:25:49.390Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T13:25:49.391Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T13:25:49.391Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:25:49.393Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:25:49.423Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:25:50.925Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T13:25:50.925Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T13:25:51.090Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T13:25:51.091Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T13:25:51.091Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T13:25:51.091Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:25:51.094Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:25:51.115Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:25:54.644Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T13:25:54.644Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T13:25:54.645Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T13:25:54.645Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:25:54.648Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:25:54.671Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:25:56.173Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T13:25:56.173Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T13:25:56.367Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T13:25:56.367Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T13:25:56.368Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T13:25:56.368Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:25:56.371Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:25:56.394Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:25:58.128Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T13:25:58.129Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T13:25:58.129Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:25:58.131Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:25:58.156Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:25:59.658Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T13:25:59.658Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T13:25:59.873Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T13:25:59.874Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T13:25:59.874Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:25:59.876Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:25:59.899Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:01.402Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T13:26:01.402Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T13:26:01.734Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T13:26:01.735Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T13:26:01.735Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:01.737Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:01.760Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:03.525Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T13:26:03.526Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T13:26:03.526Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:03.529Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:03.550Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:08.052Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T13:26:08.053Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T13:26:08.267Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T13:26:08.268Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T13:26:08.268Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:08.270Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:08.296Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:09.799Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T13:26:09.799Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T13:26:11.467Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T13:26:11.467Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T13:26:11.467Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T13:26:11.468Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:11.470Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:11.493Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:13.169Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T13:26:13.169Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T13:26:13.170Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T13:26:13.170Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:13.172Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:13.193Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:14.695Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T13:26:14.695Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T13:26:15.104Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T13:26:15.104Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T13:26:15.104Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:15.106Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:15.127Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:16.628Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T13:26:16.829Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T13:26:16.830Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T13:26:16.830Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:16.832Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:16.853Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:18.722Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T13:26:18.722Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T13:26:18.723Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T13:26:18.723Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:18.725Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:18.745Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:23.247Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T13:26:23.247Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T13:26:23.517Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T13:26:23.518Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T13:26:23.518Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T13:26:23.520Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T13:26:23.542Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T13:26:28.044Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T13:26:28.046Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T13:26:28.130Z] [BOT] 📂 Loaded 6571 existing routing entries
[2026-01-22T13:26:28.228Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T13:26:28.228Z] [BOT] Total entries: 6581
   Timestamp: 2026-01-22T13:26:28.196Z
[2026-01-22T13:26:28.229Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T13:26:28.229Z] [BOT] [STATS] Channel stats saved
[2026-01-22T13:26:30.247Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2419) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*