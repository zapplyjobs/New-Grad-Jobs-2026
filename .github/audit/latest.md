# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T15:58:59.536Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T15:58:25.468Z] ========================================
[2026-01-23T15:58:25.470Z] Discord Bot Execution Log
[2026-01-23T15:58:25.470Z] Environment: GitHub Actions
[2026-01-23T15:58:25.470Z] Node Version: v20.20.0
[2026-01-23T15:58:25.470Z] ========================================
[2026-01-23T15:58:25.470Z] Environment Variables Check:
[2026-01-23T15:58:25.471Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T15:58:25.471Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.471Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T15:58:25.471Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T15:58:25.471Z] 
Multi-Channel Configuration:
[2026-01-23T15:58:25.471Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.471Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.471Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.471Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.471Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.471Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.472Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.472Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.472Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T15:58:25.472Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T15:58:25.472Z] 
Data Files Check:
[2026-01-23T15:58:25.473Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T15:58:25.485Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1801716 bytes)
[2026-01-23T15:58:25.485Z] 
========================================
[2026-01-23T15:58:25.485Z] Starting Enhanced Discord Bot...
[2026-01-23T15:58:25.485Z] ========================================
[2026-01-23T15:58:26.011Z] [BOT] ✅ Loaded V2 database: 3087 jobs
[2026-01-23T15:58:26.537Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T15:58:26.537Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T15:58:26.537Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T15:58:26.660Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T15:58:26.664Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T15:58:26.664Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T15:58:26.664Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T15:58:26.665Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T15:58:26.665Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T15:58:26.667Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T15:58:26.668Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T15:58:26.668Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:58:26.684Z] [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T15:58:26.886Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T15:58:26.886Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T15:58:26.887Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T15:58:26.887Z] [BOT] 💾 BEFORE ARCHIVING: 3087 jobs in database
[2026-01-23T15:58:26.889Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T15:58:26.894Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-23T15:58:26.895Z] [BOT] ✅ Archiving complete: 2 archived, 3085 active
[2026-01-23T15:58:26.918Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:26.919Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:28.420Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T15:58:28.421Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T15:58:28.840Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T15:58:28.840Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T15:58:28.841Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:28.843Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:28.861Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:28.861Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:30.362Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T15:58:30.362Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:58:30.556Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T15:58:30.557Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T15:58:30.557Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:30.559Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:30.582Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:30.582Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:32.312Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T15:58:32.312Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T15:58:32.313Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T15:58:32.313Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:32.315Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:32.335Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:32.336Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:33.836Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T15:58:33.836Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:58:34.038Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T15:58:34.038Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T15:58:34.038Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T15:58:34.038Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:34.041Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:34.060Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:35.562Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T15:58:35.562Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T15:58:35.702Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T15:58:35.702Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T15:58:35.702Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:35.705Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:35.725Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:37.447Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T15:58:37.447Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T15:58:37.448Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:37.449Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:37.470Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:41.972Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T15:58:41.973Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T15:58:41.974Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:58:42.200Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T15:58:42.200Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T15:58:42.201Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T15:58:42.201Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:42.203Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:42.223Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:42.223Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:43.725Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-23T15:58:43.725Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:58:43.922Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T15:58:43.922Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T15:58:43.923Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T15:58:43.923Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:43.925Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:43.944Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:43.944Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:45.446Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T15:58:45.446Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T15:58:45.692Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T15:58:45.692Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T15:58:45.692Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T15:58:45.692Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:45.694Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:45.713Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:45.713Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:47.214Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T15:58:47.215Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T15:58:47.480Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T15:58:47.480Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T15:58:47.480Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:47.482Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:47.500Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
[2026-01-23T15:58:47.500Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:52.003Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T15:58:52.003Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T15:58:52.003Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T15:58:52.175Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T15:58:52.175Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T15:58:52.175Z] [BOT] 💾 BEFORE ARCHIVING: 3085 jobs in database
[2026-01-23T15:58:52.177Z] [BOT] ✅ No jobs to archive (all 3085 jobs within 7-day window)
[2026-01-23T15:58:52.195Z] [BOT] 💾 Saved posted_jobs.json: 3085 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T15:58:56.698Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T15:58:56.700Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T15:58:56.782Z] [BOT] 📂 Loaded 7291 existing routing entries
[2026-01-23T15:58:56.876Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7301
   Timestamp: 2026-01-23T15:58:56.844Z
[2026-01-23T15:58:56.877Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T15:58:56.877Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T15:58:56.878Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-23T15:58:56.878Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T15:58:56.878Z] [BOT] [STATS] Channel stats saved
[2026-01-23T15:58:58.896Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*