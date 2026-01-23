# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T18:15:39.344Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T18:15:03.971Z] ========================================
[2026-01-23T18:15:03.973Z] Discord Bot Execution Log
[2026-01-23T18:15:03.973Z] Environment: GitHub Actions
[2026-01-23T18:15:03.974Z] Node Version: v20.20.0
[2026-01-23T18:15:03.974Z] ========================================
[2026-01-23T18:15:03.974Z] Environment Variables Check:
[2026-01-23T18:15:03.974Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T18:15:03.974Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.974Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T18:15:03.974Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T18:15:03.974Z] 
Multi-Channel Configuration:
[2026-01-23T18:15:03.974Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.974Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T18:15:03.975Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T18:15:03.975Z] 
Data Files Check:
[2026-01-23T18:15:03.976Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T18:15:03.989Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1792872 bytes)
[2026-01-23T18:15:03.989Z] 
========================================
[2026-01-23T18:15:03.989Z] Starting Enhanced Discord Bot...
[2026-01-23T18:15:03.989Z] ========================================
[2026-01-23T18:15:04.557Z] [BOT] ✅ Loaded V2 database: 3072 jobs
[2026-01-23T18:15:05.451Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T18:15:05.451Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T18:15:05.451Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T18:15:05.571Z] [BOT] ✅ Loaded pending queue: 2774 total (2754 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T18:15:05.575Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T18:15:05.575Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T18:15:05.575Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T18:15:05.576Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T18:15:05.577Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T18:15:05.579Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T18:15:05.579Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T18:15:05.579Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:15:05.596Z] [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T18:15:05.814Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T18:15:05.814Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T18:15:05.815Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T18:15:05.815Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:05.818Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:05.841Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:07.343Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T18:15:07.344Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:15:07.554Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T18:15:07.554Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T18:15:07.555Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T18:15:07.555Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:07.557Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:07.575Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:09.077Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T18:15:09.077Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:15:09.244Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T18:15:09.245Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T18:15:09.245Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T18:15:09.245Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:09.247Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:09.269Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:11.040Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T18:15:11.040Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T18:15:11.041Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:11.043Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:11.065Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:12.567Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T18:15:12.567Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T18:15:12.792Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T18:15:12.793Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T18:15:12.793Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:12.796Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:12.817Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:14.319Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T18:15:14.319Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T18:15:14.603Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T18:15:14.603Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T18:15:14.603Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:14.606Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:14.630Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:16.457Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T18:15:16.458Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T18:15:16.458Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:16.460Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:16.481Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:20.983Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T18:15:20.984Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:15:20.985Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:15:21.222Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T18:15:21.222Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T18:15:21.222Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T18:15:21.223Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:21.225Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:21.246Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:22.749Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:15:23.080Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T18:15:23.081Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:15:23.081Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:23.083Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:23.103Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:24.605Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:15:24.606Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T18:15:24.795Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T18:15:24.795Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T18:15:24.795Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:24.797Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:24.816Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:26.318Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T18:15:26.589Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T18:15:26.589Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T18:15:26.589Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T18:15:26.590Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:26.591Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:26.611Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:31.113Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T18:15:31.113Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T18:15:31.113Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T18:15:31.370Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T18:15:31.371Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T18:15:31.371Z] [BOT] 💾 BEFORE ARCHIVING: 3072 jobs in database
[2026-01-23T18:15:31.373Z] [BOT] ✅ No jobs to archive (all 3072 jobs within 7-day window)
[2026-01-23T18:15:31.391Z] [BOT] 💾 Saved posted_jobs.json: 3072 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T18:15:35.894Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T18:15:35.896Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T18:15:35.979Z] [BOT] 📂 Loaded 7381 existing routing entries
[2026-01-23T18:15:36.076Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T18:15:36.076Z] [BOT] Total entries: 7391
   Timestamp: 2026-01-23T18:15:36.042Z
[2026-01-23T18:15:36.077Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T18:15:36.077Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T18:15:36.077Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T18:15:36.077Z] [BOT] [STATS] Channel stats saved
[2026-01-23T18:15:38.095Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2528) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*