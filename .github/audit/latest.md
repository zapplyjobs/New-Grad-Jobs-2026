# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T21:30:39.671Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T21:30:01.562Z] ========================================
[2026-01-23T21:30:01.564Z] Discord Bot Execution Log
[2026-01-23T21:30:01.564Z] Environment: GitHub Actions
[2026-01-23T21:30:01.564Z] Node Version: v20.20.0
[2026-01-23T21:30:01.564Z] ========================================
[2026-01-23T21:30:01.564Z] Environment Variables Check:
[2026-01-23T21:30:01.564Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T21:30:01.565Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T21:30:01.565Z] 
Multi-Channel Configuration:
[2026-01-23T21:30:01.565Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.565Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T21:30:01.566Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T21:30:01.566Z] 
Data Files Check:
[2026-01-23T21:30:01.566Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T21:30:01.580Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1738153 bytes)
[2026-01-23T21:30:01.580Z] 
========================================
[2026-01-23T21:30:01.580Z] Starting Enhanced Discord Bot...
[2026-01-23T21:30:01.580Z] ========================================
[2026-01-23T21:30:02.147Z] [BOT] ✅ Loaded V2 database: 2980 jobs
[2026-01-23T21:30:02.855Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T21:30:02.856Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T21:30:02.856Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T21:30:02.970Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T21:30:02.975Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T21:30:02.975Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T21:30:02.975Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T21:30:02.976Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T21:30:02.976Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-23T21:30:02.976Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T21:30:02.978Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T21:30:02.979Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T21:30:02.979Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:30:02.996Z] [BOT ERROR] (node:3036) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T21:30:03.836Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T21:30:03.837Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T21:30:03.838Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T21:30:03.838Z] [BOT] 💾 BEFORE ARCHIVING: 2980 jobs in database
[2026-01-23T21:30:03.840Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T21:30:03.841Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-23T21:30:03.841Z] [BOT] ✅ Archiving complete: 11 archived, 2969 active
[2026-01-23T21:30:03.859Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:05.361Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T21:30:05.361Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:30:05.615Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T21:30:05.615Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T21:30:05.616Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:05.617Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:05.635Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:07.136Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T21:30:07.136Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:30:07.416Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T21:30:07.417Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T21:30:07.417Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T21:30:07.417Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:07.419Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:07.440Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:09.168Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T21:30:09.168Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T21:30:09.169Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T21:30:09.169Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:09.171Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:09.190Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
[2026-01-23T21:30:09.190Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:10.690Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:30:10.823Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T21:30:10.824Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T21:30:10.824Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:10.826Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:10.845Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:12.347Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T21:30:12.347Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T21:30:12.587Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T21:30:12.587Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T21:30:12.588Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:12.590Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:12.611Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:16.358Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T21:30:16.358Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T21:30:16.359Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T21:30:16.359Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:16.361Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:16.381Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:20.883Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T21:30:20.885Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-23T21:30:20.885Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T21:30:21.042Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T21:30:21.043Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T21:30:21.043Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:21.045Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:21.064Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
[2026-01-23T21:30:21.064Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:22.566Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T21:30:22.566Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T21:30:22.703Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T21:30:22.704Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:30:22.704Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:22.706Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:22.723Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:24.225Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:30:24.225Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T21:30:25.919Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T21:30:25.920Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T21:30:25.920Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:25.922Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:25.940Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:27.441Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T21:30:27.603Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T21:30:27.604Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T21:30:27.604Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:27.606Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:27.625Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:32.127Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T21:30:32.127Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-23T21:30:32.127Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-23T21:30:32.322Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T21:30:32.322Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T21:30:32.323Z] [BOT] 💾 BEFORE ARCHIVING: 2969 jobs in database
[2026-01-23T21:30:32.324Z] [BOT] ✅ No jobs to archive (all 2969 jobs within 7-day window)
[2026-01-23T21:30:32.344Z] [BOT] 💾 Saved posted_jobs.json: 2969 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T21:30:36.846Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T21:30:36.848Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T21:30:36.922Z] [BOT] 📂 Loaded 7501 existing routing entries
[2026-01-23T21:30:37.028Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T21:30:37.028Z] [BOT] New entries: 10
   Total entries: 7511
   Timestamp: 2026-01-23T21:30:36.981Z
[2026-01-23T21:30:37.028Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T21:30:37.028Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T21:30:37.029Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-23T21:30:37.029Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-23T21:30:37.029Z] [BOT] [STATS] Channel stats saved
[2026-01-23T21:30:39.049Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3036) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*