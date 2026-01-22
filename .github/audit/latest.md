# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T19:15:06.720Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T19:14:25.910Z] ========================================
[2026-01-22T19:14:25.912Z] Discord Bot Execution Log
[2026-01-22T19:14:25.912Z] Environment: GitHub Actions
[2026-01-22T19:14:25.912Z] Node Version: v20.19.6
[2026-01-22T19:14:25.912Z] ========================================
[2026-01-22T19:14:25.912Z] Environment Variables Check:
[2026-01-22T19:14:25.912Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T19:14:25.912Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.912Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T19:14:25.912Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T19:14:25.912Z] 
Multi-Channel Configuration:
[2026-01-22T19:14:25.912Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T19:14:25.913Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T19:14:25.913Z] 
Data Files Check:
[2026-01-22T19:14:25.914Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T19:14:25.927Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1985983 bytes)
[2026-01-22T19:14:25.927Z] 
========================================
[2026-01-22T19:14:25.927Z] Starting Enhanced Discord Bot...
[2026-01-22T19:14:25.927Z] ========================================
[2026-01-22T19:14:26.454Z] [BOT] ✅ Loaded V2 database: 3412 jobs
[2026-01-22T19:14:27.475Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T19:14:27.476Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T19:14:27.476Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T19:14:27.592Z] [BOT] ✅ Loaded pending queue: 2784 total (2764 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T19:14:27.596Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T19:14:27.596Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T19:14:27.597Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T19:14:27.598Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T19:14:27.598Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T19:14:27.601Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T19:14:27.601Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T19:14:27.601Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:14:27.618Z] [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T19:14:27.840Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T19:14:27.841Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T19:14:27.841Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T19:14:27.842Z] [BOT] 💾 BEFORE ARCHIVING: 3412 jobs in database
[2026-01-22T19:14:27.844Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T19:14:27.849Z] [BOT] 📦 Archived 5 jobs to 2026-01.json (5 total in archive)
[2026-01-22T19:14:27.849Z] [BOT] ✅ Archiving complete: 5 archived, 3407 active
[2026-01-22T19:14:27.876Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
[2026-01-22T19:14:27.876Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:29.377Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T19:14:29.377Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T19:14:29.532Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T19:14:29.532Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T19:14:29.532Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T19:14:29.533Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:29.535Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:29.554Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:31.353Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T19:14:31.354Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T19:14:31.354Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:31.356Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:31.379Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:32.879Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T19:14:32.879Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T19:14:33.091Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T19:14:33.092Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:33.094Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:33.116Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:34.854Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T19:14:34.855Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T19:14:34.855Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:34.857Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:34.876Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:36.378Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T19:14:36.378Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:14:36.553Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T19:14:36.554Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T19:14:36.554Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T19:14:36.554Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:36.557Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:36.580Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:38.082Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T19:14:38.082Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T19:14:38.694Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T19:14:38.694Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T19:14:38.695Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T19:14:38.695Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:38.697Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:38.719Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:40.425Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T19:14:40.425Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T19:14:40.426Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T19:14:40.426Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:40.428Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:40.450Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:44.951Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T19:14:44.953Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T19:14:44.953Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T19:14:45.180Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T19:14:45.180Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T19:14:45.181Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T19:14:45.181Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:45.183Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:45.203Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:46.706Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T19:14:46.706Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T19:14:46.899Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T19:14:46.899Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T19:14:46.899Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:46.901Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:46.921Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
[2026-01-22T19:14:46.921Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:48.764Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T19:14:48.765Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T19:14:48.765Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:48.767Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:48.786Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
[2026-01-22T19:14:48.786Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:50.287Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T19:14:50.287Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T19:14:50.459Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T19:14:50.459Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T19:14:50.460Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:50.462Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:50.481Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
[2026-01-22T19:14:50.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:51.982Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T19:14:51.983Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T19:14:52.196Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T19:14:52.196Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T19:14:52.196Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T19:14:52.196Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:52.198Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:52.218Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:54.035Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T19:14:54.035Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T19:14:54.036Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T19:14:54.036Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:54.038Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:54.057Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:14:58.559Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T19:14:58.559Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T19:14:58.559Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T19:14:58.860Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T19:14:58.860Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T19:14:58.861Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T19:14:58.861Z] [BOT] 💾 BEFORE ARCHIVING: 3407 jobs in database
[2026-01-22T19:14:58.863Z] [BOT] ✅ No jobs to archive (all 3407 jobs within 7-day window)
[2026-01-22T19:14:58.883Z] [BOT] 💾 Saved posted_jobs.json: 3407 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T19:15:03.387Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T19:15:03.388Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T19:15:03.468Z] [BOT] 📂 Loaded 6741 existing routing entries
[2026-01-22T19:15:03.562Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-22T19:15:03.563Z] [BOT] New entries: 10
   Total entries: 6751
   Timestamp: 2026-01-22T19:15:03.531Z
[2026-01-22T19:15:03.563Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T19:15:03.563Z] [BOT] Total attempts: 15
   Successful: 15
[2026-01-22T19:15:03.563Z] [BOT] Failed: 0
   Skipped: 0
[2026-01-22T19:15:03.564Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T19:15:03.564Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T19:15:03.564Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T19:15:03.564Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T19:15:03.564Z] [BOT] [STATS] Channel stats saved
[2026-01-22T19:15:05.581Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2475) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*