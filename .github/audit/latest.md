# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T21:45:52.120Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T21:45:11.066Z] ========================================
[2026-01-22T21:45:11.068Z] Discord Bot Execution Log
[2026-01-22T21:45:11.068Z] Environment: GitHub Actions
[2026-01-22T21:45:11.068Z] Node Version: v20.20.0
[2026-01-22T21:45:11.068Z] ========================================
[2026-01-22T21:45:11.068Z] Environment Variables Check:
[2026-01-22T21:45:11.068Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T21:45:11.068Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.068Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T21:45:11.069Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T21:45:11.069Z] 
Multi-Channel Configuration:
[2026-01-22T21:45:11.069Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T21:45:11.069Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T21:45:11.070Z] 
Data Files Check:
[2026-01-22T21:45:11.070Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T21:45:11.083Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1947667 bytes)
[2026-01-22T21:45:11.083Z] 
========================================
[2026-01-22T21:45:11.083Z] Starting Enhanced Discord Bot...
[2026-01-22T21:45:11.083Z] ========================================
[2026-01-22T21:45:11.600Z] [BOT] ✅ Loaded V2 database: 3344 jobs
[2026-01-22T21:45:12.812Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T21:45:12.813Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T21:45:12.813Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T21:45:12.925Z] [BOT] ✅ Loaded pending queue: 2782 total (2762 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T21:45:12.931Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T21:45:12.931Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T21:45:12.932Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T21:45:12.933Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T21:45:12.933Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T21:45:12.936Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T21:45:12.936Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T21:45:12.936Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:45:12.953Z] [BOT ERROR] (node:2575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T21:45:13.122Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T21:45:13.122Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T21:45:13.123Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T21:45:13.123Z] [BOT] 💾 BEFORE ARCHIVING: 3344 jobs in database
[2026-01-22T21:45:13.126Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T21:45:13.130Z] [BOT] 📦 Archived 9 jobs to 2026-01.json (9 total in archive)
[2026-01-22T21:45:13.131Z] [BOT] ✅ Archiving complete: 9 archived, 3335 active
[2026-01-22T21:45:13.154Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:14.658Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T21:45:14.658Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:45:14.987Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T21:45:14.987Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T21:45:14.988Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T21:45:14.988Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:14.990Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:15.010Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:16.672Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T21:45:16.673Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T21:45:16.673Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T21:45:16.673Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:16.676Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:16.697Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:18.200Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T21:45:18.200Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T21:45:18.459Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T21:45:18.459Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T21:45:18.460Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T21:45:18.460Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:18.462Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:18.484Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:20.206Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T21:45:20.207Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T21:45:20.207Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:20.209Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:20.231Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:21.732Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T21:45:21.732Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T21:45:22.015Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T21:45:22.016Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:22.018Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:22.042Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:23.544Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T21:45:23.544Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T21:45:23.760Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T21:45:23.760Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T21:45:23.761Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T21:45:23.761Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:23.763Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:23.785Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:25.495Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T21:45:25.495Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:25.497Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:25.519Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:30.021Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T21:45:30.022Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:45:30.378Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T21:45:30.379Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T21:45:30.379Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:30.381Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:30.401Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:31.904Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T21:45:31.904Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T21:45:32.121Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T21:45:32.121Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T21:45:32.122Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T21:45:32.122Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:32.123Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:32.143Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
[2026-01-22T21:45:32.143Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:34.117Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T21:45:34.117Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T21:45:34.117Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:45:34.118Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:34.119Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:34.139Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
[2026-01-22T21:45:34.139Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:35.640Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T21:45:35.640Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T21:45:35.864Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T21:45:35.865Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T21:45:35.865Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:35.867Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:35.886Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:37.387Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T21:45:37.387Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T21:45:37.594Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T21:45:37.594Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T21:45:37.595Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T21:45:37.595Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:37.597Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:37.616Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:39.333Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T21:45:39.333Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T21:45:39.333Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:39.335Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:39.354Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:43.855Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T21:45:43.856Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T21:45:43.856Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T21:45:44.159Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T21:45:44.159Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T21:45:44.159Z] [BOT] 💾 BEFORE ARCHIVING: 3335 jobs in database
[2026-01-22T21:45:44.161Z] [BOT] ✅ No jobs to archive (all 3335 jobs within 7-day window)
[2026-01-22T21:45:44.181Z] [BOT] 💾 Saved posted_jobs.json: 3335 active jobs
[2026-01-22T21:45:44.182Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T21:45:48.683Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T21:45:48.685Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T21:45:48.762Z] [BOT] 📂 Loaded 6821 existing routing entries
[2026-01-22T21:45:48.854Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6831
[2026-01-22T21:45:48.854Z] [BOT] Timestamp: 2026-01-22T21:45:48.824Z
[2026-01-22T21:45:48.854Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T21:45:48.855Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T21:45:48.855Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T21:45:48.855Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T21:45:48.855Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T21:45:48.855Z] [BOT] [STATS] Channel stats saved
[2026-01-22T21:45:50.873Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*