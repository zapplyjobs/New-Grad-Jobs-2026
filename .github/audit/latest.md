# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T01:40:41.562Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T01:40:06.870Z] ========================================
[2026-01-23T01:40:06.872Z] Discord Bot Execution Log
[2026-01-23T01:40:06.872Z] Environment: GitHub Actions
[2026-01-23T01:40:06.872Z] Node Version: v20.20.0
[2026-01-23T01:40:06.872Z] ========================================
[2026-01-23T01:40:06.872Z] Environment Variables Check:
[2026-01-23T01:40:06.872Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T01:40:06.872Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.872Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T01:40:06.873Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T01:40:06.873Z] 
Multi-Channel Configuration:
[2026-01-23T01:40:06.873Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T01:40:06.873Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T01:40:06.873Z] 
Data Files Check:
[2026-01-23T01:40:06.874Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T01:40:06.888Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1896156 bytes)
[2026-01-23T01:40:06.888Z] 
========================================
[2026-01-23T01:40:06.888Z] Starting Enhanced Discord Bot...
[2026-01-23T01:40:06.889Z] ========================================
[2026-01-23T01:40:07.425Z] [BOT] ✅ Loaded V2 database: 3252 jobs
[2026-01-23T01:40:07.897Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T01:40:07.897Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T01:40:07.898Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T01:40:08.015Z] [BOT] ✅ Loaded pending queue: 2780 total (2760 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T01:40:08.018Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T01:40:08.019Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T01:40:08.019Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T01:40:08.020Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T01:40:08.020Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T01:40:08.022Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T01:40:08.023Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T01:40:08.023Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T01:40:08.040Z] [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T01:40:08.320Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T01:40:08.321Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T01:40:08.321Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T01:40:08.321Z] [BOT] 💾 BEFORE ARCHIVING: 3252 jobs in database
[2026-01-23T01:40:08.324Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T01:40:08.330Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-23T01:40:08.330Z] [BOT] ✅ Archiving complete: 1 archived, 3251 active
[2026-01-23T01:40:08.359Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
[2026-01-23T01:40:08.359Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:09.861Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T01:40:10.025Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T01:40:10.025Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T01:40:10.025Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T01:40:10.026Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:10.028Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:10.047Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
[2026-01-23T01:40:10.047Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:11.549Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T01:40:12.041Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T01:40:12.041Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T01:40:12.042Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T01:40:12.042Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:12.044Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:12.071Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
[2026-01-23T01:40:12.072Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:13.906Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T01:40:13.907Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T01:40:13.907Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:13.909Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:13.930Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:15.431Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T01:40:15.681Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T01:40:15.682Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T01:40:15.682Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:15.685Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:15.705Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:17.207Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T01:40:17.207Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T01:40:17.518Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T01:40:17.519Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T01:40:17.519Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:17.522Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:17.545Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:19.255Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T01:40:19.255Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T01:40:19.256Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T01:40:19.256Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:19.258Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:19.279Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:23.781Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T01:40:23.783Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T01:40:24.049Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T01:40:24.049Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T01:40:24.049Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:24.051Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:24.073Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:25.576Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T01:40:25.577Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T01:40:25.820Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T01:40:25.821Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T01:40:25.821Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T01:40:25.821Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:25.823Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:25.842Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:27.344Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T01:40:27.344Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T01:40:27.610Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T01:40:27.610Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T01:40:27.611Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T01:40:27.611Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:27.613Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:27.632Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:29.133Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T01:40:29.133Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T01:40:29.325Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T01:40:29.325Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T01:40:29.326Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T01:40:29.326Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:29.328Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:29.347Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:33.849Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T01:40:33.849Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T01:40:33.849Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T01:40:34.057Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T01:40:34.057Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T01:40:34.057Z] [BOT] 💾 BEFORE ARCHIVING: 3251 jobs in database
[2026-01-23T01:40:34.059Z] [BOT] ✅ No jobs to archive (all 3251 jobs within 7-day window)
[2026-01-23T01:40:34.079Z] [BOT] 💾 Saved posted_jobs.json: 3251 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T01:40:38.579Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T01:40:38.582Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T01:40:38.663Z] [BOT] 📂 Loaded 6941 existing routing entries
[2026-01-23T01:40:38.756Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T01:40:38.756Z] [BOT] Total entries: 6951
   Timestamp: 2026-01-23T01:40:38.726Z
[2026-01-23T01:40:38.757Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T01:40:38.757Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-23T01:40:38.757Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-23T01:40:38.757Z] [BOT] [STATS] Channel stats saved
[2026-01-23T01:40:40.776Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2539) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*