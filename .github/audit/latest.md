# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T04:06:21.493Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T04:05:40.925Z] ========================================
[2026-01-22T04:05:40.927Z] Discord Bot Execution Log
[2026-01-22T04:05:40.927Z] Environment: GitHub Actions
[2026-01-22T04:05:40.927Z] Node Version: v20.19.6
[2026-01-22T04:05:40.927Z] ========================================
[2026-01-22T04:05:40.927Z] Environment Variables Check:
[2026-01-22T04:05:40.927Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T04:05:40.927Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T04:05:40.928Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T04:05:40.928Z] 
Multi-Channel Configuration:
[2026-01-22T04:05:40.928Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T04:05:40.928Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T04:05:40.929Z] 
Data Files Check:
[2026-01-22T04:05:40.929Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T04:05:40.943Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2123925 bytes)
[2026-01-22T04:05:40.943Z] 
========================================
[2026-01-22T04:05:40.943Z] Starting Enhanced Discord Bot...
[2026-01-22T04:05:40.943Z] ========================================
[2026-01-22T04:05:41.481Z] [BOT] ✅ Loaded V2 database: 3655 jobs
[2026-01-22T04:05:42.278Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T04:05:42.278Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T04:05:42.279Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T04:05:42.393Z] [BOT] ✅ Loaded pending queue: 2785 total (2765 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T04:05:42.397Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T04:05:42.397Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T04:05:42.397Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T04:05:42.398Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T04:05:42.398Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T04:05:42.401Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T04:05:42.402Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T04:05:42.402Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T04:05:42.419Z] [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T04:05:42.698Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T04:05:42.698Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T04:05:42.699Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T04:05:42.699Z] [BOT] 💾 BEFORE ARCHIVING: 3655 jobs in database
[2026-01-22T04:05:42.702Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T04:05:42.726Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
✅ Archiving complete: 10 archived, 3645 active
[2026-01-22T04:05:42.748Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:44.251Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T04:05:44.251Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T04:05:44.468Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T04:05:44.469Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T04:05:44.469Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:44.471Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:44.494Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:46.309Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T04:05:46.310Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T04:05:46.310Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:46.313Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:46.338Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:47.840Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T04:05:48.018Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T04:05:48.018Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T04:05:48.019Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T04:05:48.019Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:48.021Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:48.045Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:49.793Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T04:05:49.794Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T04:05:49.794Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:49.796Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:49.818Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:51.319Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T04:05:51.319Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T04:05:51.491Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T04:05:51.491Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T04:05:51.492Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T04:05:51.492Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:51.494Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:51.521Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:53.023Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T04:05:53.023Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T04:05:53.199Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T04:05:53.199Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T04:05:53.200Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T04:05:53.200Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:53.203Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:53.226Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:54.925Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T04:05:54.926Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T04:05:54.926Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T04:05:54.926Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:54.929Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:54.955Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:05:59.457Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T04:05:59.458Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T04:05:59.665Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T04:05:59.666Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T04:05:59.666Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:05:59.668Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:05:59.690Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:06:01.192Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T04:06:01.385Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T04:06:01.385Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T04:06:01.385Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T04:06:01.385Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:06:01.388Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:06:01.412Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:06:03.191Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T04:06:03.191Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T04:06:03.191Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:06:03.194Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:06:03.216Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:06:04.717Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T04:06:04.718Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T04:06:04.931Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T04:06:04.931Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T04:06:04.932Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T04:06:04.932Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:06:04.934Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:06:04.958Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:06:06.459Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T04:06:06.459Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T04:06:06.668Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T04:06:06.669Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T04:06:06.669Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T04:06:06.669Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:06:06.671Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:06:06.693Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:06:08.801Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T04:06:08.801Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T04:06:08.802Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T04:06:08.802Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:06:08.804Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:06:08.825Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:06:13.328Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T04:06:13.329Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T04:06:13.329Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T04:06:13.611Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T04:06:13.612Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T04:06:13.612Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T04:06:13.612Z] [BOT] 💾 BEFORE ARCHIVING: 3645 jobs in database
[2026-01-22T04:06:13.614Z] [BOT] ✅ No jobs to archive (all 3645 jobs within 7-day window)
[2026-01-22T04:06:13.636Z] [BOT] 💾 Saved posted_jobs.json: 3645 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T04:06:18.138Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T04:06:18.140Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T04:06:18.207Z] [BOT] 📂 Loaded 6281 existing routing entries
[2026-01-22T04:06:18.297Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T04:06:18.297Z] [BOT] Total entries: 6291
   Timestamp: 2026-01-22T04:06:18.263Z
[2026-01-22T04:06:18.298Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
[2026-01-22T04:06:18.298Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T04:06:18.298Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T04:06:18.298Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T04:06:18.298Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T04:06:18.298Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T04:06:18.299Z] [BOT] [STATS] Channel stats saved
[2026-01-22T04:06:20.318Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*