# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T12:56:30.303Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T12:55:48.481Z] ========================================
[2026-01-22T12:55:48.483Z] Discord Bot Execution Log
[2026-01-22T12:55:48.483Z] Environment: GitHub Actions
[2026-01-22T12:55:48.483Z] Node Version: v20.19.6
[2026-01-22T12:55:48.484Z] ========================================
[2026-01-22T12:55:48.484Z] Environment Variables Check:
[2026-01-22T12:55:48.484Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T12:55:48.484Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.484Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T12:55:48.484Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T12:55:48.484Z] 
Multi-Channel Configuration:
[2026-01-22T12:55:48.484Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.484Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.484Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.484Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.484Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.485Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.485Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.485Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.485Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T12:55:48.485Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T12:55:48.485Z] 
Data Files Check:
[2026-01-22T12:55:48.486Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T12:55:48.499Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T12:55:48.499Z] 
========================================
[2026-01-22T12:55:48.499Z] Starting Enhanced Discord Bot...
[2026-01-22T12:55:48.499Z] ========================================
[2026-01-22T12:55:49.024Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T12:55:49.597Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T12:55:49.597Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T12:55:49.598Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T12:55:49.711Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[2026-01-22T12:55:49.713Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T12:55:49.717Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T12:55:49.717Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T12:55:49.717Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T12:55:49.718Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T12:55:49.718Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-22T12:55:49.718Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T12:55:49.721Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T12:55:49.722Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T12:55:49.722Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:55:49.739Z] [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T12:55:50.109Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T12:55:50.109Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T12:55:50.110Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T12:55:50.110Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:55:50.112Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:55:50.140Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:55:51.642Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:55:51.935Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T12:55:51.936Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T12:55:51.936Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T12:55:51.936Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:55:51.939Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:55:51.960Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:55:53.742Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T12:55:53.743Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T12:55:53.743Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:55:53.745Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:55:53.768Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:55:55.268Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T12:55:55.269Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T12:55:55.800Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T12:55:55.800Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T12:55:55.801Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T12:55:55.801Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:55:55.804Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:55:55.826Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:55:58.107Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T12:55:58.107Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T12:55:58.107Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T12:55:58.108Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:55:58.110Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:55:58.133Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T12:55:58.133Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T12:55:59.634Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T12:55:59.634Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:56:00.030Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T12:56:00.030Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T12:56:00.030Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T12:56:00.031Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:00.033Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:00.057Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:01.558Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T12:56:01.558Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T12:56:01.749Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T12:56:01.750Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T12:56:01.750Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:01.753Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:01.774Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:03.635Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T12:56:03.635Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T12:56:03.636Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:03.638Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:03.659Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:08.161Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T12:56:08.163Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:56:08.470Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T12:56:08.470Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T12:56:08.470Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:08.472Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:08.492Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T12:56:08.492Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:09.995Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:56:10.291Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T12:56:10.291Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T12:56:10.292Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T12:56:10.292Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:10.294Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:10.316Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T12:56:10.316Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:12.019Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T12:56:12.019Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T12:56:12.019Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T12:56:12.019Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:12.021Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:12.041Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
[2026-01-22T12:56:12.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:13.541Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T12:56:13.541Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T12:56:13.743Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T12:56:13.743Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T12:56:13.743Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T12:56:13.744Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:13.746Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:13.765Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:15.266Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T12:56:15.266Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T12:56:15.561Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T12:56:15.562Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T12:56:15.562Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:15.564Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:15.584Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:17.416Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T12:56:17.417Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T12:56:17.417Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:17.419Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:17.439Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:21.940Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T12:56:21.941Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T12:56:21.941Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T12:56:22.210Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T12:56:22.210Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T12:56:22.211Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T12:56:22.213Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T12:56:22.233Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T12:56:26.735Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T12:56:26.737Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T12:56:26.817Z] [BOT] 📂 Loaded 6561 existing routing entries
[2026-01-22T12:56:26.912Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T12:56:26.912Z] [BOT] Total entries: 6571
   Timestamp: 2026-01-22T12:56:26.881Z
[2026-01-22T12:56:26.913Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
[2026-01-22T12:56:26.913Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T12:56:26.913Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T12:56:26.914Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T12:56:26.914Z] [BOT] [STATS] Channel stats saved
[2026-01-22T12:56:28.931Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*