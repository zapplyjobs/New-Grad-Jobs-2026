# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T09:43:10.742Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T09:42:34.550Z] ========================================
[2026-01-24T09:42:34.551Z] Discord Bot Execution Log
[2026-01-24T09:42:34.552Z] Environment: GitHub Actions
[2026-01-24T09:42:34.552Z] Node Version: v20.20.0
[2026-01-24T09:42:34.552Z] ========================================
[2026-01-24T09:42:34.552Z] Environment Variables Check:
[2026-01-24T09:42:34.552Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T09:42:34.552Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.552Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T09:42:34.552Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T09:42:34.552Z] 
Multi-Channel Configuration:
[2026-01-24T09:42:34.552Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T09:42:34.553Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T09:42:34.553Z] 
Data Files Check:
[2026-01-24T09:42:34.554Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T09:42:34.564Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T09:42:34.564Z] 
========================================
[2026-01-24T09:42:34.564Z] Starting Enhanced Discord Bot...
[2026-01-24T09:42:34.564Z] ========================================
[2026-01-24T09:42:35.095Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T09:42:35.736Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T09:42:35.736Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T09:42:35.736Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T09:42:35.853Z] [BOT] ✅ Loaded pending queue: 2751 total (2731 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T09:42:35.856Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T09:42:35.856Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T09:42:35.856Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T09:42:35.857Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T09:42:35.857Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T09:42:35.859Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T09:42:35.860Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T09:42:35.860Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:42:35.878Z] [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T09:42:36.069Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T09:42:36.069Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T09:42:36.070Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T09:42:36.071Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:36.073Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:36.098Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:37.600Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:42:39.179Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T09:42:39.180Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T09:42:39.180Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:39.182Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:39.199Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T09:42:39.199Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:40.700Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:42:40.947Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T09:42:40.948Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T09:42:40.948Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:40.950Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:40.972Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:42.682Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T09:42:42.682Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T09:42:42.683Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T09:42:42.683Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:42.685Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:42.704Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:44.205Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T09:42:44.206Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:42:44.441Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T09:42:44.442Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:44.444Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:44.464Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:45.967Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-24T09:42:45.967Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T09:42:46.191Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T09:42:46.192Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T09:42:46.192Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:46.194Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:46.215Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:47.930Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T09:42:47.930Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T09:42:47.930Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:47.932Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:47.951Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:52.453Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T09:42:52.454Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:42:52.670Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T09:42:52.670Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:52.672Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:52.690Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:54.192Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:42:54.434Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T09:42:54.434Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:54.436Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:54.454Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:55.956Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:42:55.956Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T09:42:56.239Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T09:42:56.240Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:56.242Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:56.259Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T09:42:57.760Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T09:42:57.992Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T09:42:57.993Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T09:42:57.993Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:42:57.994Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:42:58.012Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T09:42:58.012Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T09:43:02.514Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T09:43:02.515Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T09:43:02.515Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T09:43:02.761Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
[2026-01-24T09:43:02.762Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T09:43:02.762Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T09:43:02.762Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T09:43:02.764Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T09:43:02.782Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
[2026-01-24T09:43:02.782Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T09:43:07.283Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T09:43:07.286Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T09:43:07.371Z] [BOT] 📂 Loaded 7841 existing routing entries
[2026-01-24T09:43:07.478Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7851
[2026-01-24T09:43:07.478Z] [BOT] Timestamp: 2026-01-24T09:43:07.441Z
[2026-01-24T09:43:07.479Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T09:43:07.479Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T09:43:07.479Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T09:43:07.479Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
[2026-01-24T09:43:07.479Z] [BOT] 4. #📊・JID_fb739488: 1 posts
[2026-01-24T09:43:07.479Z] [BOT] [STATS] Channel stats saved
[2026-01-24T09:43:09.495Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2522) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*