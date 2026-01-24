# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T10:12:40.523Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T10:12:05.529Z] ========================================
[2026-01-24T10:12:05.531Z] Discord Bot Execution Log
[2026-01-24T10:12:05.531Z] Environment: GitHub Actions
[2026-01-24T10:12:05.531Z] Node Version: v20.20.0
[2026-01-24T10:12:05.531Z] ========================================
[2026-01-24T10:12:05.531Z] Environment Variables Check:
[2026-01-24T10:12:05.531Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T10:12:05.531Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.531Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T10:12:05.531Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T10:12:05.531Z] 
Multi-Channel Configuration:
[2026-01-24T10:12:05.532Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T10:12:05.532Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T10:12:05.532Z] 
Data Files Check:
[2026-01-24T10:12:05.533Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T10:12:05.544Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1567617 bytes)
[2026-01-24T10:12:05.544Z] 
========================================
[2026-01-24T10:12:05.544Z] Starting Enhanced Discord Bot...
[2026-01-24T10:12:05.544Z] ========================================
[2026-01-24T10:12:06.123Z] [BOT] ✅ Loaded V2 database: 2662 jobs
[2026-01-24T10:12:06.630Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T10:12:06.631Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T10:12:06.631Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T10:12:06.751Z] [BOT] ✅ Loaded pending queue: 2752 total (2732 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T10:12:06.755Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T10:12:06.755Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T10:12:06.755Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T10:12:06.756Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T10:12:06.756Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T10:12:06.756Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T10:12:06.758Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-24T10:12:06.759Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T10:12:06.759Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:12:06.777Z] [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T10:12:06.975Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #💻・tech-jobs
[2026-01-24T10:12:06.976Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T10:12:06.977Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T10:12:06.977Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:06.979Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:07.002Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:08.503Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-24T10:12:08.503Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:12:08.670Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2026-01-24T10:12:08.670Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T10:12:08.671Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T10:12:08.671Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:08.673Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:08.690Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:10.192Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T10:12:10.192Z] [BOT] Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:12:10.400Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #💻・tech-jobs
[2026-01-24T10:12:10.400Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T10:12:10.401Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T10:12:10.401Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:10.403Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:10.424Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:12.109Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #🗽・JID_98d4f0de
[2026-01-24T10:12:12.109Z] [BOT] ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T10:12:12.110Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T10:12:12.110Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:12.112Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:12.131Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:13.633Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:12:13.987Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T10:12:13.987Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:13.989Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:14.007Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:15.509Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T10:12:15.509Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1462...4987)
[2026-01-24T10:12:15.824Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T10:12:15.825Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T10:12:15.826Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:15.828Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:15.848Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:17.514Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #🗽・JID_98d4f0de
  ✅ Location: 🗽・JID_98d4f0de
[2026-01-24T10:12:17.515Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:17.517Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:17.536Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:22.039Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-24T10:12:22.040Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-24T10:12:22.040Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:12:22.297Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T10:12:22.298Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:22.300Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:22.318Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:23.820Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:12:24.332Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T10:12:24.333Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:24.335Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:24.354Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:25.855Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T10:12:25.855Z] [BOT] Channel: 🤖・ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T10:12:26.146Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #🤖・ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T10:12:26.147Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:26.149Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:26.167Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:27.669Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1462...9217)
[2026-01-24T10:12:28.178Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #🤖・ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T10:12:28.179Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T10:12:28.179Z] [BOT] 💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:28.181Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:28.198Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:32.701Z] [BOT] 📌 Posting 1 jobs to #📊・JID_fb739488
[2026-01-24T10:12:32.701Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T10:12:32.701Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📊・JID_fb739488 (1462...4531)
[2026-01-24T10:12:32.899Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #📊・JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T10:12:32.899Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2662 jobs in database
[2026-01-24T10:12:32.901Z] [BOT] ✅ No jobs to archive (all 2662 jobs within 7-day window)
[2026-01-24T10:12:32.919Z] [BOT] 💾 Saved posted_jobs.json: 2662 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T10:12:37.421Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T10:12:37.424Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T10:12:37.514Z] [BOT] 📂 Loaded 7861 existing routing entries
[2026-01-24T10:12:37.625Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-24T10:12:37.625Z] [BOT] Total entries: 7871
   Timestamp: 2026-01-24T10:12:37.586Z
[2026-01-24T10:12:37.625Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T10:12:37.626Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T10:12:37.626Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-24T10:12:37.626Z] [BOT] Total posts: 12
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🤖・ai-jobs: 4 posts
     3. #🗽・JID_98d4f0de: 2 posts
     4. #📊・JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-24T10:12:39.645Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2538) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*