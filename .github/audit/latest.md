# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T14:31:11.371Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T14:30:35.319Z] ========================================
[2026-01-23T14:30:35.321Z] Discord Bot Execution Log
[2026-01-23T14:30:35.321Z] Environment: GitHub Actions
[2026-01-23T14:30:35.321Z] Node Version: v20.20.0
[2026-01-23T14:30:35.321Z] ========================================
[2026-01-23T14:30:35.321Z] Environment Variables Check:
[2026-01-23T14:30:35.321Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T14:30:35.321Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.321Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T14:30:35.321Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T14:30:35.321Z] 
Multi-Channel Configuration:
[2026-01-23T14:30:35.321Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T14:30:35.322Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T14:30:35.322Z] 
Data Files Check:
[2026-01-23T14:30:35.323Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T14:30:35.334Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1802675 bytes)
[2026-01-23T14:30:35.334Z] 
========================================
[2026-01-23T14:30:35.334Z] Starting Enhanced Discord Bot...
[2026-01-23T14:30:35.335Z] ========================================
[2026-01-23T14:30:35.868Z] [BOT] ✅ Loaded V2 database: 3089 jobs
[2026-01-23T14:30:36.687Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T14:30:36.688Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T14:30:36.688Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T14:30:36.801Z] [BOT] ✅ Loaded pending queue: 2765 total (2745 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T14:30:36.805Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T14:30:36.805Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T14:30:36.805Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T14:30:36.806Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T14:30:36.806Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T14:30:36.808Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T14:30:36.809Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T14:30:36.809Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:30:36.825Z] [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T14:30:37.191Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T14:30:37.192Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T14:30:37.192Z] [BOT] 💾 BEFORE ARCHIVING: 3089 jobs in database
[2026-01-23T14:30:37.194Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T14:30:37.200Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-23T14:30:37.201Z] [BOT] ✅ Archiving complete: 2 archived, 3087 active
[2026-01-23T14:30:37.221Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:38.723Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:30:38.913Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T14:30:38.913Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T14:30:38.914Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T14:30:38.914Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:38.916Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:38.935Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:40.435Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:30:40.655Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T14:30:40.656Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T14:30:40.656Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:40.658Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:40.681Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:42.623Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T14:30:42.624Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T14:30:42.624Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:42.626Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:42.647Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:44.148Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:30:44.458Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T14:30:44.459Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T14:30:44.459Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:44.461Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:44.481Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:45.983Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T14:30:45.984Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T14:30:46.196Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T14:30:46.197Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T14:30:46.197Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:46.199Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:46.222Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:48.031Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T14:30:48.031Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T14:30:48.032Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T14:30:48.032Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:48.034Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:48.054Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:52.556Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T14:30:52.558Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T14:30:52.558Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:30:52.824Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T14:30:52.824Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T14:30:52.825Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T14:30:52.825Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:52.827Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:52.848Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:54.349Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T14:30:54.350Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:30:54.574Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T14:30:54.574Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T14:30:54.575Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T14:30:54.575Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:54.577Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:54.597Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:56.099Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:30:56.099Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T14:30:56.604Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T14:30:56.605Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T14:30:56.605Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:56.606Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:56.626Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:30:58.127Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-23T14:30:58.127Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T14:30:58.376Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T14:30:58.376Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T14:30:58.376Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T14:30:58.377Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:30:58.378Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:30:58.398Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:31:02.899Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T14:31:02.900Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T14:31:02.900Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T14:31:03.532Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-23T14:31:03.532Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T14:31:03.532Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T14:31:03.533Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T14:31:03.534Z] [BOT] ✅ No jobs to archive (all 3087 jobs within 7-day window)
[2026-01-23T14:31:03.553Z] [BOT] 💾 Saved posted_jobs.json: 3087 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T14:31:08.054Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T14:31:08.057Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T14:31:08.138Z] [BOT] 📂 Loaded 7251 existing routing entries
[2026-01-23T14:31:08.233Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-23T14:31:08.233Z] [BOT] Total entries: 7261
   Timestamp: 2026-01-23T14:31:08.201Z
📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T14:31:08.234Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T14:31:08.234Z] [BOT] Last cleanup: Never
[2026-01-23T14:31:08.234Z] [BOT] Total posts: 12
[2026-01-23T14:31:08.234Z] [BOT] Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-23T14:31:08.234Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-23T14:31:08.234Z] [BOT] [STATS] Channel stats saved
[2026-01-23T14:31:10.253Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*