# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T15:32:00.770Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T15:31:20.599Z] ========================================
[2026-01-22T15:31:20.601Z] Discord Bot Execution Log
[2026-01-22T15:31:20.601Z] Environment: GitHub Actions
[2026-01-22T15:31:20.601Z] Node Version: v20.19.6
[2026-01-22T15:31:20.601Z] ========================================
[2026-01-22T15:31:20.601Z] Environment Variables Check:
[2026-01-22T15:31:20.601Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T15:31:20.602Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T15:31:20.602Z] 
Multi-Channel Configuration:
[2026-01-22T15:31:20.602Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T15:31:20.602Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T15:31:20.603Z] 
Data Files Check:
[2026-01-22T15:31:20.603Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T15:31:20.616Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2006317 bytes)
[2026-01-22T15:31:20.616Z] 
========================================
[2026-01-22T15:31:20.616Z] Starting Enhanced Discord Bot...
[2026-01-22T15:31:20.616Z] ========================================
[2026-01-22T15:31:21.132Z] [BOT] ✅ Loaded V2 database: 3448 jobs
[2026-01-22T15:31:21.663Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T15:31:21.663Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T15:31:21.663Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T15:31:21.785Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T15:31:21.789Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T15:31:21.790Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T15:31:21.790Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T15:31:21.791Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T15:31:21.791Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T15:31:21.794Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T15:31:21.794Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T15:31:21.795Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:31:21.811Z] [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T15:31:22.154Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T15:31:22.154Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T15:31:22.155Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T15:31:22.155Z] [BOT] 💾 BEFORE ARCHIVING: 3448 jobs in database
[2026-01-22T15:31:22.159Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T15:31:22.166Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-22T15:31:22.166Z] [BOT] ✅ Archiving complete: 4 archived, 3444 active
[2026-01-22T15:31:22.189Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
[2026-01-22T15:31:22.189Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:23.691Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T15:31:23.691Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:31:23.894Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T15:31:23.894Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T15:31:23.894Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T15:31:23.894Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:23.897Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:23.916Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:25.661Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T15:31:25.662Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T15:31:25.662Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:25.665Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:25.688Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:27.189Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-22T15:31:27.190Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T15:31:27.623Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T15:31:27.624Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T15:31:27.624Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T15:31:27.625Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:27.627Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:27.649Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:29.410Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T15:31:29.410Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:29.412Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:29.433Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:30.934Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-22T15:31:30.934Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T15:31:31.207Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T15:31:31.207Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T15:31:31.207Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:31.210Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:31.234Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:32.736Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T15:31:32.736Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:31:32.913Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T15:31:32.913Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T15:31:32.914Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T15:31:32.914Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:32.916Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:32.938Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:34.608Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T15:31:34.609Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T15:31:34.609Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:34.611Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:34.633Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:39.135Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T15:31:39.136Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:31:39.377Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T15:31:39.378Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T15:31:39.378Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:39.380Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:39.400Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:40.903Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T15:31:40.903Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T15:31:41.269Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T15:31:41.269Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T15:31:41.270Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T15:31:41.270Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:41.272Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:41.292Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
[2026-01-22T15:31:41.292Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:42.963Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T15:31:42.964Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T15:31:42.964Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:42.966Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:42.986Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:44.487Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:31:44.487Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T15:31:44.748Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T15:31:44.748Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T15:31:44.748Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:44.750Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:44.770Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:46.271Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:31:46.504Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T15:31:46.504Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T15:31:46.504Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:46.506Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:46.526Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:48.458Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T15:31:48.458Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T15:31:48.459Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T15:31:48.459Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:48.461Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:48.481Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:52.983Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T15:31:52.984Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T15:31:52.984Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T15:31:53.207Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T15:31:53.207Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T15:31:53.207Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T15:31:53.207Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:31:53.209Z] [BOT] ✅ No jobs to archive (all 3444 jobs within 7-day window)
[2026-01-22T15:31:53.230Z] [BOT] 💾 Saved posted_jobs.json: 3444 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:31:57.732Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T15:31:57.734Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T15:31:57.815Z] [BOT] 📂 Loaded 6621 existing routing entries
[2026-01-22T15:31:57.909Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T15:31:57.910Z] [BOT] Total entries: 6631
   Timestamp: 2026-01-22T15:31:57.878Z
[2026-01-22T15:31:57.910Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T15:31:57.910Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T15:31:57.911Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T15:31:57.911Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T15:31:57.911Z] [BOT] [STATS] Channel stats saved
[2026-01-22T15:31:59.928Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2408) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*