# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T22:13:03.918Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T22:12:23.936Z] ========================================
[2026-01-21T22:12:23.937Z] Discord Bot Execution Log
[2026-01-21T22:12:23.938Z] Environment: GitHub Actions
[2026-01-21T22:12:23.938Z] Node Version: v20.19.6
[2026-01-21T22:12:23.938Z] ========================================
[2026-01-21T22:12:23.938Z] Environment Variables Check:
[2026-01-21T22:12:23.938Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T22:12:23.938Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.938Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T22:12:23.938Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T22:12:23.938Z] 
Multi-Channel Configuration:
[2026-01-21T22:12:23.938Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.938Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.938Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.938Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.939Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.939Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.939Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.939Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.939Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T22:12:23.939Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T22:12:23.939Z] 
Data Files Check:
[2026-01-21T22:12:23.940Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T22:12:23.955Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2199490 bytes)
[2026-01-21T22:12:23.955Z] 
========================================
[2026-01-21T22:12:23.955Z] Starting Enhanced Discord Bot...
[2026-01-21T22:12:23.955Z] ========================================
[2026-01-21T22:12:24.509Z] [BOT] ✅ Loaded V2 database: 3797 jobs
[2026-01-21T22:12:25.572Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T22:12:25.573Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T22:12:25.573Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T22:12:25.699Z] [BOT] ✅ Loaded pending queue: 2767 total (2747 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T22:12:25.705Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T22:12:25.706Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T22:12:25.706Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T22:12:25.707Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T22:12:25.707Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T22:12:25.710Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T22:12:25.711Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T22:12:25.711Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:12:25.729Z] [BOT ERROR] (node:2495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T22:12:25.941Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T22:12:25.942Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T22:12:25.942Z] [BOT] 💾 BEFORE ARCHIVING: 3797 jobs in database
[2026-01-21T22:12:25.945Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T22:12:25.951Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-21T22:12:25.951Z] [BOT] ✅ Archiving complete: 12 archived, 3785 active
[2026-01-21T22:12:25.986Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:27.488Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:12:27.720Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T22:12:27.721Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T22:12:27.721Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:27.724Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:27.750Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:29.428Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-21T22:12:29.429Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T22:12:29.429Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T22:12:29.430Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:29.433Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:29.461Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:30.962Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-21T22:12:30.963Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T22:12:31.165Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T22:12:31.166Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-21T22:12:31.166Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:31.169Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:31.196Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:32.902Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T22:12:32.903Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T22:12:32.903Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:32.905Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:32.929Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:34.430Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-21T22:12:34.431Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:12:34.606Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T22:12:34.607Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T22:12:34.607Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:34.609Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:34.638Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:36.140Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T22:12:36.317Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T22:12:36.318Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T22:12:36.318Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:36.321Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:36.347Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:38.293Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T22:12:38.294Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T22:12:38.294Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:38.297Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:38.326Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:42.828Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T22:12:42.830Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-21T22:12:43.008Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T22:12:43.009Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T22:12:43.009Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:43.011Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:43.035Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:44.536Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-21T22:12:44.537Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T22:12:44.711Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-21T22:12:44.711Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T22:12:44.712Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T22:12:44.712Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:44.714Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:44.739Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:46.390Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T22:12:46.390Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T22:12:46.391Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T22:12:46.391Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:46.393Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:46.417Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:47.918Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-21T22:12:47.918Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T22:12:48.082Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T22:12:48.083Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T22:12:48.083Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:48.086Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:48.115Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:49.616Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-21T22:12:49.616Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T22:12:49.874Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T22:12:49.875Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T22:12:49.875Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:49.877Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:49.902Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:51.612Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T22:12:51.613Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T22:12:51.613Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:51.616Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:51.644Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:12:56.146Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T22:12:56.146Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
[2026-01-21T22:12:56.147Z] [BOT] Channel: finance-jobs (1462...4023)
[2026-01-21T22:12:56.490Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T22:12:56.491Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T22:12:56.491Z] [BOT] 💾 BEFORE ARCHIVING: 3785 jobs in database
[2026-01-21T22:12:56.493Z] [BOT] ✅ No jobs to archive (all 3785 jobs within 7-day window)
[2026-01-21T22:12:56.519Z] [BOT] 💾 Saved posted_jobs.json: 3785 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T22:13:01.022Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T22:13:01.025Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T22:13:01.101Z] [BOT] 📂 Loaded 6151 existing routing entries
[2026-01-21T22:13:01.207Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-21T22:13:01.207Z] [BOT] New entries: 10
   Total entries: 6161
   Timestamp: 2026-01-21T22:13:01.163Z
[2026-01-21T22:13:01.207Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
[2026-01-21T22:13:01.208Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-21T22:13:01.208Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-21T22:13:01.208Z] [BOT] [STATS] Channel stats saved
[2026-01-21T22:13:03.230Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2495) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*