# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T10:13:26.110Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T10:12:51.001Z] ========================================
[2026-01-23T10:12:51.003Z] Discord Bot Execution Log
[2026-01-23T10:12:51.003Z] Environment: GitHub Actions
[2026-01-23T10:12:51.003Z] Node Version: v20.20.0
[2026-01-23T10:12:51.003Z] ========================================
[2026-01-23T10:12:51.003Z] Environment Variables Check:
[2026-01-23T10:12:51.003Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T10:12:51.003Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.003Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T10:12:51.003Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T10:12:51.003Z] 
Multi-Channel Configuration:
[2026-01-23T10:12:51.004Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T10:12:51.004Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T10:12:51.004Z] 
Data Files Check:
[2026-01-23T10:12:51.005Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T10:12:51.017Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1806037 bytes)
[2026-01-23T10:12:51.017Z] 
========================================
[2026-01-23T10:12:51.017Z] Starting Enhanced Discord Bot...
[2026-01-23T10:12:51.017Z] ========================================
[2026-01-23T10:12:51.553Z] [BOT] ✅ Loaded V2 database: 3095 jobs
[2026-01-23T10:12:52.277Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T10:12:52.278Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T10:12:52.278Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T10:12:52.412Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T10:12:52.417Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T10:12:52.418Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T10:12:52.419Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T10:12:52.419Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T10:12:52.421Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T10:12:52.421Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T10:12:52.422Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T10:12:52.439Z] [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T10:12:52.702Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T10:12:52.702Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T10:12:52.703Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T10:12:52.703Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:12:52.706Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:12:52.730Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:12:54.231Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T10:12:54.231Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T10:12:54.457Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T10:12:54.458Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T10:12:54.458Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:12:54.460Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:12:54.480Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:12:55.980Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T10:12:56.169Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T10:12:56.170Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T10:12:56.170Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:12:56.172Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:12:56.194Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:12:57.900Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T10:12:57.900Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T10:12:57.901Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T10:12:57.901Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:12:57.903Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:12:57.923Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:12:59.424Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T10:12:59.655Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T10:12:59.655Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T10:12:59.655Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:12:59.658Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:12:59.678Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:01.180Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T10:13:01.180Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T10:13:01.530Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T10:13:01.531Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T10:13:01.531Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:13:01.533Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:13:01.557Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:03.525Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T10:13:03.525Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T10:13:03.526Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T10:13:03.526Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:13:03.528Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:13:03.548Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:08.049Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T10:13:08.051Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T10:13:08.051Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T10:13:08.337Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T10:13:08.338Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T10:13:08.338Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T10:13:08.338Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:13:08.340Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:13:08.362Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:09.864Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T10:13:09.864Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T10:13:10.098Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T10:13:10.098Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T10:13:10.099Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T10:13:10.099Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:13:10.101Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:13:10.120Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:11.621Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T10:13:11.622Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T10:13:11.936Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T10:13:11.936Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T10:13:11.936Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:13:11.938Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:13:11.959Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:13.460Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T10:13:13.460Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T10:13:13.676Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T10:13:13.677Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T10:13:13.677Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T10:13:13.677Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:13:13.679Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:13:13.698Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:18.199Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T10:13:18.199Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T10:13:18.484Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T10:13:18.485Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T10:13:18.485Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T10:13:18.486Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T10:13:18.507Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T10:13:23.008Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T10:13:23.010Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T10:13:23.099Z] [BOT] 📂 Loaded 7151 existing routing entries
[2026-01-23T10:13:23.195Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T10:13:23.195Z] [BOT] Total entries: 7161
   Timestamp: 2026-01-23T10:13:23.162Z
[2026-01-23T10:13:23.195Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T10:13:23.196Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T10:13:23.196Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-23T10:13:23.196Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T10:13:23.196Z] [BOT] [STATS] Channel stats saved
[2026-01-23T10:13:25.213Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*