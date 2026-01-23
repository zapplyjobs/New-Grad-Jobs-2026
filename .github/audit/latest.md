# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T11:12:49.341Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T11:12:15.318Z] ========================================
[2026-01-23T11:12:15.320Z] Discord Bot Execution Log
[2026-01-23T11:12:15.320Z] Environment: GitHub Actions
[2026-01-23T11:12:15.320Z] Node Version: v20.20.0
[2026-01-23T11:12:15.320Z] ========================================
[2026-01-23T11:12:15.320Z] Environment Variables Check:
[2026-01-23T11:12:15.320Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T11:12:15.321Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T11:12:15.321Z] 
Multi-Channel Configuration:
[2026-01-23T11:12:15.321Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.321Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.322Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.322Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T11:12:15.322Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T11:12:15.322Z] 
Data Files Check:
[2026-01-23T11:12:15.322Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T11:12:15.334Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1806037 bytes)
[2026-01-23T11:12:15.334Z] 
========================================
[2026-01-23T11:12:15.334Z] Starting Enhanced Discord Bot...
[2026-01-23T11:12:15.334Z] ========================================
[2026-01-23T11:12:15.882Z] [BOT] ✅ Loaded V2 database: 3095 jobs
[2026-01-23T11:12:16.350Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T11:12:16.351Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T11:12:16.351Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T11:12:16.464Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[2026-01-23T11:12:16.466Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T11:12:16.470Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T11:12:16.470Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T11:12:16.470Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T11:12:16.471Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T11:12:16.471Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T11:12:16.471Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T11:12:16.473Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T11:12:16.474Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T11:12:16.474Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:12:16.490Z] [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T11:12:16.706Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T11:12:16.706Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T11:12:16.707Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T11:12:16.707Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:16.709Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:16.735Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:12:16.736Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:18.238Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T11:12:18.238Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:12:18.768Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T11:12:18.769Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T11:12:18.769Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:18.771Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:18.790Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:20.291Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T11:12:20.292Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:12:20.511Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T11:12:20.512Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T11:12:20.512Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:20.514Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:20.538Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:22.475Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T11:12:22.476Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T11:12:22.476Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:22.478Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:22.498Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:24.000Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:12:24.126Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T11:12:24.126Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T11:12:24.126Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:24.129Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:24.149Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:12:24.149Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:25.652Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T11:12:25.652Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T11:12:25.773Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T11:12:25.774Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T11:12:25.774Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:25.776Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:25.798Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:27.454Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T11:12:27.454Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T11:12:27.455Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T11:12:27.455Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:27.457Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:27.477Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
[2026-01-23T11:12:27.477Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:31.979Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T11:12:31.981Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T11:12:31.981Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T11:12:32.163Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T11:12:32.164Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T11:12:32.164Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T11:12:32.164Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:32.166Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:32.188Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:33.689Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T11:12:33.690Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T11:12:33.842Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T11:12:33.842Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T11:12:33.842Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T11:12:33.843Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:33.845Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:33.864Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:35.365Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T11:12:35.365Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T11:12:35.602Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T11:12:35.603Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T11:12:35.603Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:35.605Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:35.624Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:37.125Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T11:12:37.125Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T11:12:37.266Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T11:12:37.266Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T11:12:37.266Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:37.268Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:37.287Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:41.788Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T11:12:41.788Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T11:12:41.789Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T11:12:41.983Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T11:12:41.983Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T11:12:41.984Z] [BOT] 💾 BEFORE ARCHIVING: 3095 jobs in database
[2026-01-23T11:12:41.985Z] [BOT] ✅ No jobs to archive (all 3095 jobs within 7-day window)
[2026-01-23T11:12:42.005Z] [BOT] 💾 Saved posted_jobs.json: 3095 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T11:12:46.508Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T11:12:46.510Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T11:12:46.590Z] [BOT] 📂 Loaded 7171 existing routing entries
[2026-01-23T11:12:46.684Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T11:12:46.684Z] [BOT] Total entries: 7181
   Timestamp: 2026-01-23T11:12:46.652Z
[2026-01-23T11:12:46.685Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
[2026-01-23T11:12:46.685Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T11:12:46.686Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T11:12:48.703Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2521) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*