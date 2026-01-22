# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T14:34:35.740Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T14:33:54.756Z] ========================================
[2026-01-22T14:33:54.758Z] Discord Bot Execution Log
[2026-01-22T14:33:54.758Z] Environment: GitHub Actions
[2026-01-22T14:33:54.758Z] Node Version: v20.19.6
[2026-01-22T14:33:54.758Z] ========================================
[2026-01-22T14:33:54.758Z] Environment Variables Check:
[2026-01-22T14:33:54.758Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T14:33:54.758Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.758Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T14:33:54.758Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T14:33:54.759Z] 
Multi-Channel Configuration:
[2026-01-22T14:33:54.759Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T14:33:54.759Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T14:33:54.759Z] 
Data Files Check:
[2026-01-22T14:33:54.760Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T14:33:54.774Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006790 bytes)
[2026-01-22T14:33:54.774Z] 
========================================
[2026-01-22T14:33:54.774Z] Starting Enhanced Discord Bot...
[2026-01-22T14:33:54.774Z] ========================================
[2026-01-22T14:33:55.362Z] [BOT] ✅ Loaded V2 database: 3449 jobs
[2026-01-22T14:33:55.951Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T14:33:55.952Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T14:33:55.952Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T14:33:56.075Z] [BOT] ✅ Loaded pending queue: 2779 total (2759 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T14:33:56.080Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T14:33:56.081Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T14:33:56.082Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T14:33:56.082Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T14:33:56.082Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T14:33:56.085Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T14:33:56.086Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T14:33:56.086Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T14:33:56.104Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T14:33:56.539Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T14:33:56.539Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T14:33:56.540Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T14:33:56.540Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:33:56.542Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:33:56.573Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:33:58.074Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T14:33:58.288Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T14:33:58.288Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T14:33:58.288Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T14:33:58.289Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:33:58.291Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:33:58.315Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:00.138Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T14:34:00.139Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T14:34:00.139Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:00.141Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:00.165Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:01.666Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T14:34:01.871Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T14:34:01.871Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T14:34:01.872Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:01.875Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:01.898Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:03.716Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T14:34:03.716Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T14:34:03.716Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:03.718Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:03.739Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:05.241Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T14:34:05.241Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T14:34:05.501Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T14:34:05.501Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T14:34:05.502Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T14:34:05.502Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:05.505Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:05.532Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:07.033Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T14:34:07.034Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T14:34:07.285Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T14:34:07.286Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T14:34:07.286Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:07.289Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:07.314Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:08.991Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T14:34:08.991Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T14:34:08.992Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T14:34:08.992Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:08.994Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:09.022Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:13.524Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T14:34:13.525Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T14:34:13.526Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T14:34:13.824Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T14:34:13.824Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T14:34:13.825Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T14:34:13.825Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:13.827Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:13.848Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:15.350Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T14:34:15.351Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T14:34:15.607Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T14:34:15.607Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T14:34:15.608Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T14:34:15.608Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:15.610Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:15.631Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:17.344Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T14:34:17.344Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T14:34:17.344Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:17.346Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:17.368Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:18.869Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T14:34:18.869Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T14:34:19.227Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T14:34:19.228Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T14:34:19.228Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T14:34:19.228Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:19.230Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:19.252Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:20.753Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T14:34:20.753Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T14:34:21.007Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-22T14:34:21.007Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T14:34:21.007Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T14:34:21.007Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:21.009Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:21.031Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:22.825Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T14:34:22.826Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T14:34:22.826Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:22.828Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:22.851Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:27.353Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T14:34:27.354Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T14:34:27.354Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T14:34:27.679Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T14:34:27.679Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T14:34:27.680Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T14:34:27.680Z] [BOT] 💾 BEFORE ARCHIVING: 3449 jobs in database
[2026-01-22T14:34:27.682Z] [BOT] ✅ No jobs to archive (all 3449 jobs within 7-day window)
[2026-01-22T14:34:27.704Z] [BOT] 💾 Saved posted_jobs.json: 3449 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T14:34:32.205Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T14:34:32.207Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T14:34:32.293Z] [BOT] 📂 Loaded 6591 existing routing entries
[2026-01-22T14:34:32.391Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T14:34:32.391Z] [BOT] Total entries: 6601
   Timestamp: 2026-01-22T14:34:32.359Z
[2026-01-22T14:34:32.392Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T14:34:32.392Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T14:34:32.392Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T14:34:32.392Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T14:34:32.392Z] [BOT] [STATS] Channel stats saved
[2026-01-22T14:34:34.411Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*