# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T08:50:45.570Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T08:50:11.350Z] ========================================
[2026-01-23T08:50:11.352Z] Discord Bot Execution Log
[2026-01-23T08:50:11.352Z] Environment: GitHub Actions
[2026-01-23T08:50:11.352Z] Node Version: v20.20.0
[2026-01-23T08:50:11.352Z] ========================================
[2026-01-23T08:50:11.352Z] Environment Variables Check:
[2026-01-23T08:50:11.352Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T08:50:11.352Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.352Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T08:50:11.352Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T08:50:11.352Z] 
Multi-Channel Configuration:
[2026-01-23T08:50:11.352Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T08:50:11.353Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T08:50:11.353Z] 
Data Files Check:
[2026-01-23T08:50:11.354Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T08:50:11.365Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1813564 bytes)
[2026-01-23T08:50:11.365Z] 
========================================
[2026-01-23T08:50:11.365Z] Starting Enhanced Discord Bot...
[2026-01-23T08:50:11.365Z] ========================================
[2026-01-23T08:50:11.901Z] [BOT] ✅ Loaded V2 database: 3108 jobs
[2026-01-23T08:50:12.332Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T08:50:12.332Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T08:50:12.332Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T08:50:12.447Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T08:50:12.451Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T08:50:12.451Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T08:50:12.451Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T08:50:12.452Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T08:50:12.452Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T08:50:12.454Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T08:50:12.455Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T08:50:12.455Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T08:50:12.471Z] [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T08:50:12.710Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T08:50:12.710Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T08:50:12.710Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T08:50:12.711Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:50:12.713Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T08:50:12.715Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T08:50:12.716Z] [BOT] ✅ Archiving complete: 11 archived, 3097 active
[2026-01-23T08:50:12.735Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
[2026-01-23T08:50:12.735Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:14.237Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T08:50:14.237Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T08:50:14.550Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T08:50:14.551Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T08:50:14.551Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T08:50:14.551Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:14.553Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:14.572Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:16.073Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T08:50:16.073Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T08:50:16.348Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T08:50:16.348Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T08:50:16.348Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T08:50:16.348Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:16.350Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:16.373Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
[2026-01-23T08:50:16.373Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:18.298Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T08:50:18.298Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T08:50:18.298Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T08:50:18.298Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:18.300Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:18.321Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
[2026-01-23T08:50:18.321Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:19.822Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T08:50:19.822Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T08:50:19.975Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T08:50:19.975Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T08:50:19.976Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T08:50:19.976Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:19.978Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:19.999Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:21.501Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T08:50:21.501Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T08:50:21.679Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T08:50:21.680Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T08:50:21.680Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:21.682Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:21.704Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:23.453Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T08:50:23.453Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T08:50:23.453Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:23.455Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:23.477Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
[2026-01-23T08:50:23.477Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:27.978Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T08:50:27.980Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T08:50:28.148Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T08:50:28.148Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T08:50:28.149Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T08:50:28.149Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:28.151Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:28.170Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:29.672Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T08:50:29.911Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T08:50:29.911Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T08:50:29.911Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T08:50:29.911Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:29.914Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:29.932Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
[2026-01-23T08:50:29.932Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:31.434Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T08:50:31.434Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T08:50:31.585Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T08:50:31.585Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T08:50:31.585Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T08:50:31.586Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:31.588Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:31.607Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:33.110Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T08:50:33.110Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T08:50:33.280Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T08:50:33.281Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T08:50:33.281Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:33.283Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:33.306Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:37.807Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T08:50:37.808Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T08:50:37.808Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T08:50:38.100Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T08:50:38.101Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T08:50:38.101Z] [BOT] 💾 BEFORE ARCHIVING: 3097 jobs in database
[2026-01-23T08:50:38.103Z] [BOT] ✅ No jobs to archive (all 3097 jobs within 7-day window)
[2026-01-23T08:50:38.124Z] [BOT] 💾 Saved posted_jobs.json: 3097 active jobs
[2026-01-23T08:50:38.124Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T08:50:42.625Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T08:50:42.628Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T08:50:42.707Z] [BOT] 📂 Loaded 7101 existing routing entries
[2026-01-23T08:50:42.802Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7111
[2026-01-23T08:50:42.802Z] [BOT] Timestamp: 2026-01-23T08:50:42.770Z
[2026-01-23T08:50:42.802Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T08:50:42.802Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T08:50:42.803Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T08:50:44.821Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2461) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*