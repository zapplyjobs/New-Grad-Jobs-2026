# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T06:53:46.459Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T06:53:05.681Z] ========================================
[2026-01-22T06:53:05.683Z] Discord Bot Execution Log
[2026-01-22T06:53:05.683Z] Environment: GitHub Actions
[2026-01-22T06:53:05.683Z] Node Version: v20.19.6
[2026-01-22T06:53:05.683Z] ========================================
[2026-01-22T06:53:05.683Z] Environment Variables Check:
[2026-01-22T06:53:05.683Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T06:53:05.684Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T06:53:05.684Z] 
Multi-Channel Configuration:
[2026-01-22T06:53:05.684Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.684Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.685Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.685Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T06:53:05.685Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T06:53:05.685Z] 
Data Files Check:
[2026-01-22T06:53:05.686Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T06:53:05.700Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2073816 bytes)
[2026-01-22T06:53:05.700Z] 
========================================
[2026-01-22T06:53:05.700Z] Starting Enhanced Discord Bot...
[2026-01-22T06:53:05.700Z] ========================================
[2026-01-22T06:53:06.300Z] [BOT] ✅ Loaded V2 database: 3565 jobs
[2026-01-22T06:53:06.952Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T06:53:06.952Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T06:53:06.952Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T06:53:07.077Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T06:53:07.083Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T06:53:07.084Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T06:53:07.084Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T06:53:07.085Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T06:53:07.085Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T06:53:07.088Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T06:53:07.089Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T06:53:07.089Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:53:07.107Z] [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T06:53:07.522Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T06:53:07.523Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T06:53:07.524Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T06:53:07.524Z] [BOT] 💾 BEFORE ARCHIVING: 3565 jobs in database
[2026-01-22T06:53:07.527Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T06:53:07.534Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
✅ Archiving complete: 11 archived, 3554 active
[2026-01-22T06:53:07.560Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:09.062Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T06:53:09.063Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:53:09.265Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T06:53:09.266Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T06:53:09.266Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:09.269Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:09.291Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:11.010Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T06:53:11.010Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T06:53:11.010Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T06:53:11.011Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:11.013Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:11.038Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:12.540Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T06:53:12.541Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:53:12.828Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T06:53:12.828Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T06:53:12.828Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T06:53:12.829Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:12.831Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:12.856Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:14.658Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:53:14.658Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T06:53:14.658Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:14.661Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:14.682Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:16.184Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T06:53:16.185Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T06:53:16.581Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T06:53:16.581Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T06:53:16.582Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:16.584Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:16.611Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:18.113Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T06:53:18.113Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T06:53:18.300Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T06:53:18.300Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T06:53:18.301Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:18.303Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:18.327Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:20.081Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T06:53:20.082Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T06:53:20.082Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:20.084Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:20.108Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:24.611Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T06:53:24.612Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T06:53:24.612Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:53:24.889Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T06:53:24.890Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T06:53:24.891Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T06:53:24.891Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:24.893Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:24.915Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:26.416Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:53:26.585Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T06:53:26.586Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:53:26.586Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:26.588Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:26.610Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:28.403Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:53:28.404Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:53:28.404Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:28.406Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:28.428Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:29.929Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:53:29.929Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T06:53:30.182Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T06:53:30.183Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T06:53:30.183Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T06:53:30.183Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:30.185Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:30.207Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:31.708Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T06:53:31.900Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T06:53:31.900Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T06:53:31.900Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:31.903Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:31.925Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:33.641Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T06:53:33.641Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T06:53:33.641Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:33.644Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:33.666Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:38.168Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T06:53:38.168Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T06:53:38.418Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T06:53:38.418Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T06:53:38.419Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T06:53:38.421Z] [BOT] ✅ No jobs to archive (all 3554 jobs within 7-day window)
[2026-01-22T06:53:38.443Z] [BOT] 💾 Saved posted_jobs.json: 3554 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T06:53:42.945Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T06:53:42.947Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T06:53:43.029Z] [BOT] 📂 Loaded 6361 existing routing entries
[2026-01-22T06:53:43.125Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T06:53:43.125Z] [BOT] Total entries: 6371
   Timestamp: 2026-01-22T06:53:43.093Z
[2026-01-22T06:53:43.125Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T06:53:43.126Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T06:53:43.126Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T06:53:43.126Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T06:53:43.126Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T06:53:43.127Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T06:53:45.146Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2406) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*