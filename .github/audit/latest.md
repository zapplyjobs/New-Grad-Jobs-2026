# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T07:16:35.263Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T07:15:54.838Z] ========================================
[2026-01-22T07:15:54.840Z] Discord Bot Execution Log
[2026-01-22T07:15:54.840Z] Environment: GitHub Actions
[2026-01-22T07:15:54.840Z] Node Version: v20.19.6
[2026-01-22T07:15:54.840Z] ========================================
[2026-01-22T07:15:54.840Z] Environment Variables Check:
[2026-01-22T07:15:54.840Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T07:15:54.840Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.840Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T07:15:54.840Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T07:15:54.840Z] 
Multi-Channel Configuration:
[2026-01-22T07:15:54.841Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T07:15:54.841Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T07:15:54.841Z] 
Data Files Check:
[2026-01-22T07:15:54.842Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T07:15:54.855Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2068044 bytes)
[2026-01-22T07:15:54.855Z] 
========================================
[2026-01-22T07:15:54.855Z] Starting Enhanced Discord Bot...
[2026-01-22T07:15:54.855Z] ========================================
[2026-01-22T07:15:55.378Z] [BOT] ✅ Loaded V2 database: 3554 jobs
[2026-01-22T07:15:56.135Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T07:15:56.135Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T07:15:56.135Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T07:15:56.263Z] [BOT] ✅ Loaded pending queue: 2771 total (2751 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T07:15:56.266Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T07:15:56.267Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T07:15:56.267Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T07:15:56.268Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T07:15:56.268Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T07:15:56.271Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T07:15:56.272Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
   Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:15:56.291Z] [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T07:15:56.596Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T07:15:56.596Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T07:15:56.597Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T07:15:56.597Z] [BOT] 💾 BEFORE ARCHIVING: 3554 jobs in database
[2026-01-22T07:15:56.600Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T07:15:56.605Z] [BOT] 📦 Archived 22 jobs to 2026-01.json (22 total in archive)
[2026-01-22T07:15:56.605Z] [BOT] ✅ Archiving complete: 22 archived, 3532 active
[2026-01-22T07:15:56.628Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:15:58.130Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-22T07:15:58.130Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T07:15:58.421Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T07:15:58.422Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T07:15:58.422Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:15:58.425Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:15:58.445Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:00.281Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:16:00.282Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T07:16:00.282Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:00.284Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:00.308Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:01.809Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:16:02.025Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T07:16:02.026Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T07:16:02.026Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:02.028Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:02.051Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:03.736Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T07:16:03.737Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T07:16:03.737Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:03.739Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:03.759Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:05.260Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T07:16:05.260Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:16:05.459Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T07:16:05.459Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T07:16:05.460Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T07:16:05.460Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:05.462Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:05.487Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:06.988Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T07:16:06.989Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T07:16:07.240Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T07:16:07.241Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T07:16:07.241Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T07:16:07.241Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:07.244Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:07.267Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:09.016Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T07:16:09.017Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T07:16:09.017Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:09.019Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:09.042Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:13.544Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T07:16:13.545Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:16:13.784Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T07:16:13.785Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T07:16:13.785Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:13.787Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:13.807Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:15.309Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:16:15.538Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T07:16:15.539Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:16:15.539Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:15.541Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:15.562Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:17.340Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:16:17.341Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:16:17.341Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:17.343Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:17.363Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:18.865Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T07:16:18.865Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T07:16:19.061Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T07:16:19.062Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T07:16:19.062Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:19.064Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:19.084Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:20.585Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:16:20.757Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T07:16:20.757Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:16:20.757Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:20.759Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:20.780Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:22.462Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T07:16:22.462Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T07:16:22.462Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:16:22.462Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:22.464Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:22.485Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:26.986Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T07:16:26.987Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T07:16:26.987Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T07:16:27.305Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T07:16:27.305Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T07:16:27.306Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T07:16:27.306Z] [BOT] 💾 BEFORE ARCHIVING: 3532 jobs in database
[2026-01-22T07:16:27.308Z] [BOT] ✅ No jobs to archive (all 3532 jobs within 7-day window)
[2026-01-22T07:16:27.329Z] [BOT] 💾 Saved posted_jobs.json: 3532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:16:31.831Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T07:16:31.832Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T07:16:31.912Z] [BOT] 📂 Loaded 6371 existing routing entries
[2026-01-22T07:16:32.004Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T07:16:32.004Z] [BOT] Total entries: 6381
   Timestamp: 2026-01-22T07:16:31.975Z
[2026-01-22T07:16:32.005Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T07:16:32.005Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T07:16:32.005Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T07:16:32.006Z] [BOT] [STATS] Channel stats saved
[2026-01-22T07:16:34.024Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2376) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*