# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T08:48:39.374Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T08:48:02.697Z] ========================================
[2026-01-24T08:48:02.699Z] Discord Bot Execution Log
[2026-01-24T08:48:02.699Z] Environment: GitHub Actions
[2026-01-24T08:48:02.699Z] Node Version: v20.20.0
[2026-01-24T08:48:02.699Z] ========================================
[2026-01-24T08:48:02.699Z] Environment Variables Check:
[2026-01-24T08:48:02.699Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T08:48:02.699Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.699Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T08:48:02.699Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T08:48:02.699Z] 
Multi-Channel Configuration:
[2026-01-24T08:48:02.700Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T08:48:02.700Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T08:48:02.700Z] 
Data Files Check:
[2026-01-24T08:48:02.701Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T08:48:02.711Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1581124 bytes)
[2026-01-24T08:48:02.711Z] 
========================================
[2026-01-24T08:48:02.711Z] Starting Enhanced Discord Bot...
[2026-01-24T08:48:02.711Z] ========================================
[2026-01-24T08:48:03.245Z] [BOT] ✅ Loaded V2 database: 2687 jobs
[2026-01-24T08:48:03.738Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T08:48:03.738Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T08:48:03.739Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T08:48:03.856Z] [BOT] ✅ Loaded pending queue: 2776 total (2756 pending, 20 enriched, 0 posted)
[2026-01-24T08:48:03.858Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T08:48:03.862Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T08:48:03.863Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T08:48:03.864Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T08:48:03.864Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T08:48:03.866Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T08:48:03.866Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T08:48:03.867Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:48:03.884Z] [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T08:48:04.067Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T08:48:04.068Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T08:48:04.069Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T08:48:04.069Z] [BOT] 💾 BEFORE ARCHIVING: 2687 jobs in database
[2026-01-24T08:48:04.071Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T08:48:04.077Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-24T08:48:04.077Z] [BOT] ✅ Archiving complete: 10 archived, 2677 active
[2026-01-24T08:48:04.097Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
[2026-01-24T08:48:04.097Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:05.599Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:48:05.783Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T08:48:05.783Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T08:48:05.784Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:05.785Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:05.801Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:07.303Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:48:07.614Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T08:48:07.615Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T08:48:07.615Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:07.617Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:07.637Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:09.332Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T08:48:09.333Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T08:48:09.333Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:09.335Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:09.354Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:10.855Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T08:48:10.856Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:48:11.275Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T08:48:11.276Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T08:48:11.276Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:11.278Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:11.296Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:12.797Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T08:48:12.797Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T08:48:13.068Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T08:48:13.069Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T08:48:13.069Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:13.071Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:13.092Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:14.791Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
[2026-01-24T08:48:14.791Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T08:48:14.792Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T08:48:14.792Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:14.794Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:14.813Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:19.315Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T08:48:19.316Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T08:48:19.316Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:48:20.925Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T08:48:20.926Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T08:48:20.926Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:20.928Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:20.946Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:22.448Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T08:48:22.448Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:48:22.796Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T08:48:22.797Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T08:48:22.797Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:22.799Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:22.820Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:24.322Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:48:24.322Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T08:48:24.559Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T08:48:24.560Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:24.561Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:24.580Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:26.082Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T08:48:26.520Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T08:48:26.521Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T08:48:26.521Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:26.523Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:26.540Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:31.043Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T08:48:31.043Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T08:48:31.043Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T08:48:31.426Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T08:48:31.426Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T08:48:31.427Z] [BOT] 💾 BEFORE ARCHIVING: 2677 jobs in database
[2026-01-24T08:48:31.428Z] [BOT] ✅ No jobs to archive (all 2677 jobs within 7-day window)
[2026-01-24T08:48:31.447Z] [BOT] 💾 Saved posted_jobs.json: 2677 active jobs
[2026-01-24T08:48:31.447Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T08:48:35.950Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T08:48:35.952Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T08:48:36.039Z] [BOT] 📂 Loaded 7801 existing routing entries
[2026-01-24T08:48:36.145Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T08:48:36.145Z] [BOT] Total entries: 7811
   Timestamp: 2026-01-24T08:48:36.108Z
[2026-01-24T08:48:36.145Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T08:48:36.145Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T08:48:36.146Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T08:48:36.146Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
[2026-01-24T08:48:36.146Z] [BOT] 3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[2026-01-24T08:48:36.146Z] [BOT] [STATS] Channel stats saved
[2026-01-24T08:48:38.163Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2544) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*