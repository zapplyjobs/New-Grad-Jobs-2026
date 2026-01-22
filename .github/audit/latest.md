# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T03:30:14.447Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T03:29:34.686Z] ========================================
[2026-01-22T03:29:34.687Z] Discord Bot Execution Log
[2026-01-22T03:29:34.688Z] Environment: GitHub Actions
[2026-01-22T03:29:34.688Z] Node Version: v20.19.6
[2026-01-22T03:29:34.688Z] ========================================
[2026-01-22T03:29:34.688Z] Environment Variables Check:
[2026-01-22T03:29:34.688Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T03:29:34.688Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.688Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T03:29:34.688Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T03:29:34.688Z] 
Multi-Channel Configuration:
[2026-01-22T03:29:34.688Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T03:29:34.689Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T03:29:34.689Z] 
Data Files Check:
[2026-01-22T03:29:34.690Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T03:29:34.705Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2135737 bytes)
[2026-01-22T03:29:34.705Z] 
========================================
[2026-01-22T03:29:34.705Z] Starting Enhanced Discord Bot...
[2026-01-22T03:29:34.705Z] ========================================
[2026-01-22T03:29:35.249Z] [BOT] ✅ Loaded V2 database: 3675 jobs
[2026-01-22T03:29:35.755Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T03:29:35.755Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T03:29:35.755Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T03:29:35.872Z] [BOT] ✅ Loaded pending queue: 2794 total (2774 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T03:29:35.877Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T03:29:35.877Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T03:29:35.878Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T03:29:35.878Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T03:29:35.879Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T03:29:35.881Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T03:29:35.882Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T03:29:35.882Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T03:29:35.899Z] [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T03:29:36.314Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T03:29:36.314Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T03:29:36.315Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T03:29:36.316Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T03:29:36.319Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T03:29:36.324Z] [BOT] 📦 Archived 20 jobs to 2026-01.json (20 total in archive)
[2026-01-22T03:29:36.325Z] [BOT] ✅ Archiving complete: 20 archived, 3655 active
[2026-01-22T03:29:36.351Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:37.853Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T03:29:37.853Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T03:29:38.090Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T03:29:38.091Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T03:29:38.091Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:38.094Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:38.119Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:39.839Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T03:29:39.840Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T03:29:39.840Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:39.843Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:39.869Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:41.370Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T03:29:41.582Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T03:29:41.583Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T03:29:41.583Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:41.586Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:41.610Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:43.282Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T03:29:43.282Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T03:29:43.282Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:43.285Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:43.305Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:44.806Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T03:29:44.806Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T03:29:44.983Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T03:29:44.984Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T03:29:44.984Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T03:29:44.984Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:44.987Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:45.015Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:46.517Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T03:29:46.517Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T03:29:46.654Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T03:29:46.655Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T03:29:46.655Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:46.658Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:46.681Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:48.450Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T03:29:48.451Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T03:29:48.451Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:48.453Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:48.479Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:52.981Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T03:29:52.982Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T03:29:52.983Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T03:29:53.232Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T03:29:53.232Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T03:29:53.233Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T03:29:53.233Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:53.236Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:53.259Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:54.762Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T03:29:54.762Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T03:29:55.004Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T03:29:55.004Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T03:29:55.005Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T03:29:55.005Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:55.007Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:55.032Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:56.814Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T03:29:56.815Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T03:29:56.815Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:56.817Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:56.840Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:29:58.341Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T03:29:58.342Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T03:29:58.535Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T03:29:58.535Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T03:29:58.536Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:29:58.538Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:29:58.563Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:30:00.065Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T03:30:00.065Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T03:30:00.271Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T03:30:00.271Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T03:30:00.272Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:30:00.274Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:30:00.297Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:30:02.185Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T03:30:02.186Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T03:30:02.186Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T03:30:02.186Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:30:02.190Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:30:02.213Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:30:06.715Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T03:30:06.716Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T03:30:06.716Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T03:30:06.982Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T03:30:06.983Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T03:30:06.983Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T03:30:06.985Z] [BOT] ✅ No jobs to archive (all 3655 jobs within 7-day window)
[2026-01-22T03:30:07.009Z] [BOT] 💾 Saved posted_jobs.json: 3655 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T03:30:11.511Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T03:30:11.513Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T03:30:11.581Z] [BOT] 📂 Loaded 6271 existing routing entries
[2026-01-22T03:30:11.672Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T03:30:11.672Z] [BOT] Total entries: 6281
   Timestamp: 2026-01-22T03:30:11.639Z
[2026-01-22T03:30:11.673Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T03:30:11.673Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T03:30:11.674Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T03:30:11.674Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T03:30:11.674Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T03:30:11.674Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T03:30:11.674Z] [BOT] [STATS] Channel stats saved
[2026-01-22T03:30:13.695Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2386) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*