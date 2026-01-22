# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T07:31:33.703Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T07:30:52.569Z] ========================================
[2026-01-22T07:30:52.570Z] Discord Bot Execution Log
[2026-01-22T07:30:52.570Z] Environment: GitHub Actions
[2026-01-22T07:30:52.570Z] Node Version: v20.19.6
[2026-01-22T07:30:52.570Z] ========================================
[2026-01-22T07:30:52.571Z] Environment Variables Check:
[2026-01-22T07:30:52.571Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T07:30:52.571Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T07:30:52.571Z] 
Multi-Channel Configuration:
[2026-01-22T07:30:52.571Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.571Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.572Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T07:30:52.572Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T07:30:52.572Z] 
Data Files Check:
[2026-01-22T07:30:52.573Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T07:30:52.587Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2053179 bytes)
[2026-01-22T07:30:52.587Z] 
========================================
[2026-01-22T07:30:52.587Z] Starting Enhanced Discord Bot...
[2026-01-22T07:30:52.587Z] ========================================
[2026-01-22T07:30:53.127Z] [BOT] ✅ Loaded V2 database: 3532 jobs
[2026-01-22T07:30:53.950Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T07:30:53.950Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T07:30:53.951Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T07:30:54.128Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T07:30:54.134Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T07:30:54.134Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T07:30:54.135Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T07:30:54.135Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T07:30:54.136Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T07:30:54.139Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T07:30:54.140Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T07:30:54.141Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:30:54.160Z] [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T07:30:54.468Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T07:30:54.468Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T07:30:54.469Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T07:30:54.469Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:30:54.472Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T07:30:54.478Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T07:30:54.478Z] [BOT] ✅ Archiving complete: 10 archived, 3522 active
[2026-01-22T07:30:54.502Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:30:56.004Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T07:30:56.004Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T07:30:56.521Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T07:30:56.521Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T07:30:56.522Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T07:30:56.522Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:30:56.524Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:30:56.548Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:30:58.301Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:30:58.301Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T07:30:58.302Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:30:58.304Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:30:58.332Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:30:59.833Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:31:00.099Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T07:31:00.102Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:00.105Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:00.131Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:01.885Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T07:31:01.886Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T07:31:01.886Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:01.888Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:01.915Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:03.417Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:31:03.653Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T07:31:03.654Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T07:31:03.654Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:03.656Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:03.677Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:05.179Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:31:05.372Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T07:31:05.373Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T07:31:05.373Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:05.375Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:05.402Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:07.237Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T07:31:07.237Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T07:31:07.238Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:07.240Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:07.266Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:11.768Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T07:31:11.769Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T07:31:11.769Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:31:12.006Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T07:31:12.007Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T07:31:12.007Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:12.010Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:12.038Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:13.540Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T07:31:13.541Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:31:13.822Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T07:31:13.822Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T07:31:13.823Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:31:13.823Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:13.826Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:13.855Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:15.608Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:31:15.609Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:31:15.609Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:15.611Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:15.634Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:17.136Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T07:31:17.136Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T07:31:17.346Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T07:31:17.347Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T07:31:17.347Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:17.349Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:17.370Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:18.872Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T07:31:18.872Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T07:31:19.235Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T07:31:19.235Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T07:31:19.236Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:31:19.236Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:19.239Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:19.263Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:21.018Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:31:21.019Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:31:21.019Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:21.021Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:21.045Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:25.548Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T07:31:25.548Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T07:31:25.548Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T07:31:25.809Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T07:31:25.810Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T07:31:25.810Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:31:25.812Z] [BOT] ✅ No jobs to archive (all 3522 jobs within 7-day window)
[2026-01-22T07:31:25.838Z] [BOT] 💾 Saved posted_jobs.json: 3522 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:31:30.340Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T07:31:30.341Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T07:31:30.439Z] [BOT] 📂 Loaded 6381 existing routing entries
[2026-01-22T07:31:30.531Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6391
   Timestamp: 2026-01-22T07:31:30.505Z
[2026-01-22T07:31:30.532Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
[2026-01-22T07:31:30.532Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-22T07:31:30.532Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-22T07:31:30.532Z] [BOT] Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T07:31:30.532Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T07:31:30.532Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T07:31:30.533Z] [BOT] [STATS] Channel stats saved
[2026-01-22T07:31:32.551Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2402) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*