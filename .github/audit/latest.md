# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T23:45:10.912Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T23:44:30.990Z] ========================================
[2026-01-21T23:44:30.992Z] Discord Bot Execution Log
[2026-01-21T23:44:30.992Z] Environment: GitHub Actions
[2026-01-21T23:44:30.992Z] Node Version: v20.19.6
[2026-01-21T23:44:30.992Z] ========================================
[2026-01-21T23:44:30.992Z] Environment Variables Check:
[2026-01-21T23:44:30.992Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T23:44:30.992Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.992Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T23:44:30.992Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T23:44:30.992Z] 
Multi-Channel Configuration:
[2026-01-21T23:44:30.993Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T23:44:30.993Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T23:44:30.993Z] 
Data Files Check:
[2026-01-21T23:44:30.994Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T23:44:31.009Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2166885 bytes)
[2026-01-21T23:44:31.009Z] 
========================================
[2026-01-21T23:44:31.009Z] Starting Enhanced Discord Bot...
[2026-01-21T23:44:31.009Z] ========================================
[2026-01-21T23:44:31.588Z] [BOT] ✅ Loaded V2 database: 3735 jobs
[2026-01-21T23:44:32.040Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T23:44:32.041Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T23:44:32.041Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T23:44:32.158Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T23:44:32.162Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T23:44:32.162Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T23:44:32.163Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T23:44:32.164Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T23:44:32.164Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T23:44:32.167Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T23:44:32.167Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T23:44:32.168Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:44:32.185Z] [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T23:44:32.571Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T23:44:32.571Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T23:44:32.572Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T23:44:32.572Z] [BOT] 💾 BEFORE ARCHIVING: 3735 jobs in database
[2026-01-21T23:44:32.576Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T23:44:32.581Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-21T23:44:32.581Z] [BOT] ✅ Archiving complete: 10 archived, 3725 active
[2026-01-21T23:44:32.605Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:34.107Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:44:34.563Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T23:44:34.563Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T23:44:34.563Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:34.566Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:34.590Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:36.316Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-21T23:44:36.316Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:44:36.317Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T23:44:36.317Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:36.320Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:36.345Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:37.844Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-21T23:44:37.845Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:44:38.139Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-21T23:44:38.139Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T23:44:38.140Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-21T23:44:38.141Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:38.143Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:38.168Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:39.866Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:44:39.867Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T23:44:39.867Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:39.869Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:39.891Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:41.392Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-21T23:44:41.392Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T23:44:41.602Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T23:44:41.602Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T23:44:41.602Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:41.605Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:41.631Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:43.132Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:44:43.313Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T23:44:43.313Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T23:44:43.314Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:43.316Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:43.339Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:45.000Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:44:45.001Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T23:44:45.001Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:45.004Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:45.030Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:49.532Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T23:44:49.534Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:44:49.825Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T23:44:49.826Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T23:44:49.826Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:49.829Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:49.851Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:51.354Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:44:51.534Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T23:44:51.535Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:44:51.535Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:51.537Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:51.562Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:53.334Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T23:44:53.334Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:44:53.335Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:44:53.335Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:53.337Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:53.360Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:54.861Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-21T23:44:54.861Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T23:44:55.053Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T23:44:55.054Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T23:44:55.054Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:55.056Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:55.081Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:56.582Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:44:56.807Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T23:44:56.807Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:44:56.808Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:56.810Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:56.831Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:44:58.621Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T23:44:58.622Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:44:58.622Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:44:58.624Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:44:58.646Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:45:03.147Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T23:45:03.147Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-21T23:45:03.147Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T23:45:03.360Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T23:45:03.360Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T23:45:03.361Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:45:03.363Z] [BOT] ✅ No jobs to archive (all 3725 jobs within 7-day window)
[2026-01-21T23:45:03.386Z] [BOT] 💾 Saved posted_jobs.json: 3725 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:45:07.889Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T23:45:07.891Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T23:45:07.958Z] [BOT] 📂 Loaded 6211 existing routing entries
[2026-01-21T23:45:08.048Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-21T23:45:08.048Z] [BOT] Total entries: 6221
   Timestamp: 2026-01-21T23:45:08.015Z
[2026-01-21T23:45:08.049Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T23:45:08.049Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T23:45:08.049Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-21T23:45:08.049Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-21T23:45:08.049Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-21T23:45:08.050Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-21T23:45:08.050Z] [BOT] [STATS] Channel stats saved
[2026-01-21T23:45:10.069Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*