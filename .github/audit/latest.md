# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T04:33:10.060Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T04:32:31.436Z] ========================================
[2026-01-24T04:32:31.438Z] Discord Bot Execution Log
[2026-01-24T04:32:31.438Z] Environment: GitHub Actions
[2026-01-24T04:32:31.438Z] Node Version: v20.20.0
[2026-01-24T04:32:31.438Z] ========================================
[2026-01-24T04:32:31.438Z] Environment Variables Check:
[2026-01-24T04:32:31.438Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T04:32:31.438Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.438Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T04:32:31.438Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T04:32:31.438Z] 
Multi-Channel Configuration:
[2026-01-24T04:32:31.438Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.438Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.438Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.439Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.439Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.439Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.439Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.439Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.439Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T04:32:31.439Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T04:32:31.439Z] 
Data Files Check:
[2026-01-24T04:32:31.440Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T04:32:31.451Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1654789 bytes)
[2026-01-24T04:32:31.452Z] 
========================================
[2026-01-24T04:32:31.452Z] Starting Enhanced Discord Bot...
[2026-01-24T04:32:31.452Z] ========================================
[2026-01-24T04:32:31.912Z] [BOT] ✅ Loaded V2 database: 2826 jobs
[2026-01-24T04:32:33.465Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T04:32:33.466Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T04:32:33.621Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T04:32:33.624Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T04:32:33.624Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T04:32:33.624Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T04:32:33.625Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T04:32:33.625Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-24T04:32:33.626Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T04:32:33.627Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T04:32:33.628Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T04:32:33.628Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T04:32:33.645Z] [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T04:32:33.895Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T04:32:33.896Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T04:32:33.896Z] [BOT] 💾 BEFORE ARCHIVING: 2826 jobs in database
[2026-01-24T04:32:33.899Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T04:32:33.902Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-24T04:32:33.903Z] [BOT] ✅ Archiving complete: 4 archived, 2822 active
[2026-01-24T04:32:33.923Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:35.425Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T04:32:35.425Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T04:32:35.662Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T04:32:35.662Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T04:32:35.663Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T04:32:35.663Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:35.665Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:35.684Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:37.185Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T04:32:37.185Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T04:32:37.436Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T04:32:37.436Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T04:32:37.437Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T04:32:37.437Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:37.438Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:37.459Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:39.177Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T04:32:39.178Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T04:32:39.179Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T04:32:39.179Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:39.180Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:39.200Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:40.701Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T04:32:40.701Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T04:32:41.059Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T04:32:41.060Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:41.062Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:41.083Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:42.585Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T04:32:42.585Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T04:32:42.802Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T04:32:42.802Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T04:32:42.803Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T04:32:42.803Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:42.805Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:42.826Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:44.659Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T04:32:44.659Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T04:32:44.660Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T04:32:44.660Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:44.662Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:44.682Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:49.184Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T04:32:49.186Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-24T04:32:49.186Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T04:32:49.973Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-24T04:32:49.973Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T04:32:49.974Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T04:32:49.974Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:49.975Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:49.994Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:51.496Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T04:32:51.496Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T04:32:51.953Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-24T04:32:51.953Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T04:32:51.954Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T04:32:51.954Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:51.956Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:51.975Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:53.478Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T04:32:54.175Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-24T04:32:54.176Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T04:32:54.177Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T04:32:54.177Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:54.179Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:54.197Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:32:55.699Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T04:32:55.699Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T04:32:55.980Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T04:32:55.980Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T04:32:55.981Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T04:32:55.981Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:32:55.982Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:32:56.001Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:33:00.504Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T04:33:00.504Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T04:33:02.234Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T04:33:02.235Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T04:33:02.235Z] [BOT] 💾 BEFORE ARCHIVING: 2822 jobs in database
[2026-01-24T04:33:02.237Z] [BOT] ✅ No jobs to archive (all 2822 jobs within 7-day window)
[2026-01-24T04:33:02.257Z] [BOT] 💾 Saved posted_jobs.json: 2822 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T04:33:06.759Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T04:33:06.761Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T04:33:06.857Z] [BOT] 📂 Loaded 7641 existing routing entries
[2026-01-24T04:33:06.945Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7651
[2026-01-24T04:33:06.946Z] [BOT] Timestamp: 2026-01-24T04:33:06.913Z
[2026-01-24T04:33:06.946Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
[2026-01-24T04:33:06.946Z] [BOT] Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T04:33:06.946Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T04:33:06.947Z] [BOT] [STATS] Channel stats saved
[2026-01-24T04:33:08.961Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2459) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*