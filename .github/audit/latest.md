# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T18:52:45.003Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T18:52:05.467Z] ========================================
[2026-01-22T18:52:05.469Z] Discord Bot Execution Log
[2026-01-22T18:52:05.469Z] Environment: GitHub Actions
[2026-01-22T18:52:05.469Z] Node Version: v20.19.6
[2026-01-22T18:52:05.469Z] ========================================
[2026-01-22T18:52:05.469Z] Environment Variables Check:
[2026-01-22T18:52:05.469Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T18:52:05.469Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.469Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T18:52:05.469Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T18:52:05.469Z] 
Multi-Channel Configuration:
[2026-01-22T18:52:05.469Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.469Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T18:52:05.470Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T18:52:05.470Z] 
Data Files Check:
[2026-01-22T18:52:05.471Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T18:52:05.484Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1989675 bytes)
[2026-01-22T18:52:05.484Z] 
========================================
[2026-01-22T18:52:05.484Z] Starting Enhanced Discord Bot...
[2026-01-22T18:52:05.484Z] ========================================
[2026-01-22T18:52:06.061Z] [BOT] ✅ Loaded V2 database: 3418 jobs
[2026-01-22T18:52:06.595Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T18:52:06.595Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T18:52:06.595Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T18:52:06.708Z] [BOT] ✅ Loaded pending queue: 2782 total (2762 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T18:52:06.712Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T18:52:06.713Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T18:52:06.713Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T18:52:06.714Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T18:52:06.714Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T18:52:06.717Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T18:52:06.717Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T18:52:06.718Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:52:06.734Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T18:52:07.121Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T18:52:07.122Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T18:52:07.122Z] [BOT] 💾 BEFORE ARCHIVING: 3418 jobs in database
[2026-01-22T18:52:07.125Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T18:52:07.130Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-22T18:52:07.131Z] [BOT] ✅ Archiving complete: 6 archived, 3412 active
[2026-01-22T18:52:07.153Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
[2026-01-22T18:52:07.153Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:08.655Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T18:52:08.655Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:52:08.883Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T18:52:08.884Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T18:52:08.884Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:08.886Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:08.906Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:10.539Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T18:52:10.540Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T18:52:10.540Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T18:52:10.540Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:10.543Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:10.567Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:12.068Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:52:12.203Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T18:52:12.204Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T18:52:12.204Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:12.206Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:12.229Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:13.955Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-22T18:52:13.956Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T18:52:13.956Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T18:52:13.956Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:13.958Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:13.979Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:15.481Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T18:52:15.481Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:52:15.662Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T18:52:15.663Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T18:52:15.663Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:15.666Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:15.691Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:17.193Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T18:52:17.193Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T18:52:17.537Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T18:52:17.537Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T18:52:17.538Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T18:52:17.538Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:17.540Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:17.562Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:19.201Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T18:52:19.202Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T18:52:19.202Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:19.204Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:19.226Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:23.728Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T18:52:23.729Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T18:52:23.729Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T18:52:23.924Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T18:52:23.925Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T18:52:23.925Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:23.927Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:23.948Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:25.451Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T18:52:25.451Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T18:52:25.814Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T18:52:25.814Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T18:52:25.814Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T18:52:25.814Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:25.816Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:25.837Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:27.678Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T18:52:27.678Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T18:52:27.678Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T18:52:27.679Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:27.680Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:27.701Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:29.202Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T18:52:29.202Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T18:52:29.357Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T18:52:29.357Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T18:52:29.358Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T18:52:29.358Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:29.360Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:29.380Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:30.881Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T18:52:30.881Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T18:52:31.022Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T18:52:31.022Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T18:52:31.022Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T18:52:31.022Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:31.024Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:31.046Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:32.894Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T18:52:32.894Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T18:52:32.894Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T18:52:32.894Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:32.896Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:32.916Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:37.418Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T18:52:37.419Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T18:52:37.419Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T18:52:37.619Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T18:52:37.620Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T18:52:37.620Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T18:52:37.622Z] [BOT] ✅ No jobs to archive (all 3412 jobs within 7-day window)
[2026-01-22T18:52:37.643Z] [BOT] 💾 Saved posted_jobs.json: 3412 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T18:52:42.145Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T18:52:42.147Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T18:52:42.227Z] [BOT] 📂 Loaded 6731 existing routing entries
[2026-01-22T18:52:42.322Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T18:52:42.323Z] [BOT] Total entries: 6741
   Timestamp: 2026-01-22T18:52:42.291Z
[2026-01-22T18:52:42.323Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T18:52:42.323Z] [BOT] Total attempts: 15
   Successful: 15
[2026-01-22T18:52:42.323Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-22T18:52:42.324Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T18:52:42.324Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T18:52:42.324Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T18:52:42.324Z] [BOT] 4. #JID_98d4f0de: 2 posts
[2026-01-22T18:52:42.324Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T18:52:42.324Z] [BOT] [STATS] Channel stats saved
[2026-01-22T18:52:44.341Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*