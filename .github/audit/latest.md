# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T12:32:47.412Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T12:32:12.721Z] ========================================
[2026-01-23T12:32:12.723Z] Discord Bot Execution Log
[2026-01-23T12:32:12.723Z] Environment: GitHub Actions
[2026-01-23T12:32:12.723Z] Node Version: v20.20.0
[2026-01-23T12:32:12.724Z] ========================================
[2026-01-23T12:32:12.724Z] Environment Variables Check:
[2026-01-23T12:32:12.724Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T12:32:12.724Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.724Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T12:32:12.724Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T12:32:12.724Z] 
Multi-Channel Configuration:
[2026-01-23T12:32:12.724Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.724Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.724Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.724Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.725Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.725Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.725Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.725Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.725Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T12:32:12.725Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T12:32:12.725Z] 
Data Files Check:
[2026-01-23T12:32:12.726Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T12:32:12.737Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1804955 bytes)
[2026-01-23T12:32:12.737Z] 
========================================
[2026-01-23T12:32:12.737Z] Starting Enhanced Discord Bot...
[2026-01-23T12:32:12.738Z] ========================================
[2026-01-23T12:32:13.295Z] [BOT] ✅ Loaded V2 database: 3093 jobs
[2026-01-23T12:32:13.964Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T12:32:13.964Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T12:32:13.965Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T12:32:14.081Z] [BOT] ✅ Loaded pending queue: 2764 total (2744 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T12:32:14.084Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T12:32:14.084Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T12:32:14.084Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T12:32:14.085Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T12:32:14.085Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T12:32:14.086Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T12:32:14.087Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T12:32:14.088Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T12:32:14.088Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:32:14.106Z] [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T12:32:14.321Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T12:32:14.322Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T12:32:14.323Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T12:32:14.323Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:14.326Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:14.368Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
[2026-01-23T12:32:14.368Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:15.871Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:32:16.193Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T12:32:16.193Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T12:32:16.194Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T12:32:16.194Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:16.196Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:16.215Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:17.716Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:32:17.884Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T12:32:17.885Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T12:32:17.885Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:17.887Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:17.910Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:19.706Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T12:32:19.706Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T12:32:19.706Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:19.708Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:19.730Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:21.231Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T12:32:21.402Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T12:32:21.402Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T12:32:21.403Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:21.405Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:21.426Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:22.927Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-23T12:32:22.927Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T12:32:23.105Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T12:32:23.105Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T12:32:23.106Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:23.108Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:23.130Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:24.945Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T12:32:24.946Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T12:32:24.946Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T12:32:24.946Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:24.948Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:24.968Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:29.470Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T12:32:29.471Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T12:32:29.471Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T12:32:29.768Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T12:32:29.768Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T12:32:29.769Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:29.771Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:29.792Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:31.294Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T12:32:31.465Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T12:32:31.466Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T12:32:31.466Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:31.468Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:31.487Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:32.990Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T12:32:32.990Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T12:32:33.126Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T12:32:33.127Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T12:32:33.127Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:33.128Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:33.148Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:34.648Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T12:32:34.820Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T12:32:34.820Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T12:32:34.820Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:34.822Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:34.842Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:39.345Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T12:32:39.345Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T12:32:39.345Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T12:32:39.783Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T12:32:39.783Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T12:32:39.783Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T12:32:39.783Z] [BOT] 💾 BEFORE ARCHIVING: 3093 jobs in database
[2026-01-23T12:32:39.785Z] [BOT] ✅ No jobs to archive (all 3093 jobs within 7-day window)
[2026-01-23T12:32:39.808Z] [BOT] 💾 Saved posted_jobs.json: 3093 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T12:32:44.309Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T12:32:44.312Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T12:32:44.391Z] [BOT] 📂 Loaded 7211 existing routing entries
[2026-01-23T12:32:44.487Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7221
[2026-01-23T12:32:44.487Z] [BOT] Timestamp: 2026-01-23T12:32:44.455Z
[2026-01-23T12:32:44.487Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T12:32:44.487Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T12:32:44.488Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T12:32:46.506Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2470) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*