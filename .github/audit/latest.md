# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T07:47:09.254Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T07:46:29.184Z] ========================================
[2026-01-22T07:46:29.186Z] Discord Bot Execution Log
[2026-01-22T07:46:29.186Z] Environment: GitHub Actions
[2026-01-22T07:46:29.187Z] Node Version: v20.19.6
[2026-01-22T07:46:29.187Z] ========================================
[2026-01-22T07:46:29.187Z] Environment Variables Check:
[2026-01-22T07:46:29.187Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T07:46:29.187Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.187Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T07:46:29.187Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T07:46:29.187Z] 
Multi-Channel Configuration:
[2026-01-22T07:46:29.187Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.187Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T07:46:29.188Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T07:46:29.188Z] 
Data Files Check:
[2026-01-22T07:46:29.189Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T07:46:29.202Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2046067 bytes)
[2026-01-22T07:46:29.202Z] 
========================================
[2026-01-22T07:46:29.202Z] Starting Enhanced Discord Bot...
[2026-01-22T07:46:29.202Z] ========================================
[2026-01-22T07:46:29.753Z] [BOT] ✅ Loaded V2 database: 3522 jobs
[2026-01-22T07:46:30.505Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T07:46:30.505Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T07:46:30.505Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T07:46:30.620Z] [BOT] ✅ Loaded pending queue: 2770 total (2750 pending, 20 enriched, 0 posted)
[2026-01-22T07:46:30.622Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T07:46:30.627Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T07:46:30.627Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T07:46:30.627Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T07:46:30.628Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T07:46:30.628Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-22T07:46:30.629Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T07:46:30.632Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T07:46:30.632Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T07:46:30.632Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:46:30.649Z] [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T07:46:30.863Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T07:46:30.864Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T07:46:30.865Z] [BOT] 💾 BEFORE ARCHIVING: 3522 jobs in database
[2026-01-22T07:46:30.867Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T07:46:30.873Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-22T07:46:30.873Z] [BOT] ✅ Archiving complete: 11 archived, 3511 active
[2026-01-22T07:46:30.904Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:32.407Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:46:32.663Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T07:46:32.663Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T07:46:32.664Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:32.667Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:32.688Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:34.431Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:46:34.432Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T07:46:34.432Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:34.435Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:34.459Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:35.961Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:46:36.254Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T07:46:36.255Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T07:46:36.255Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:36.257Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:36.281Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:37.978Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T07:46:37.979Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T07:46:37.979Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:37.981Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:38.002Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:39.502Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T07:46:39.503Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:46:39.789Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T07:46:39.790Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T07:46:39.790Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:39.792Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:39.818Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:41.321Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T07:46:41.532Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T07:46:41.533Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T07:46:41.533Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:41.535Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:41.558Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:43.293Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T07:46:43.294Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T07:46:43.294Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:43.296Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:43.320Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:47.822Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T07:46:47.823Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T07:46:47.823Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:46:48.054Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T07:46:48.054Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T07:46:48.055Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T07:46:48.055Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:48.057Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:48.078Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:49.580Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:46:49.920Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T07:46:49.921Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:46:49.921Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:49.923Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:49.944Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:51.610Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T07:46:51.610Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T07:46:51.610Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:46:51.610Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:51.613Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:51.634Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:53.135Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T07:46:53.135Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T07:46:53.335Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T07:46:53.335Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T07:46:53.336Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:53.338Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:53.359Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
[2026-01-22T07:46:53.359Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:54.861Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T07:46:55.042Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T07:46:55.042Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T07:46:55.042Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:55.045Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:55.066Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:46:56.742Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T07:46:56.742Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T07:46:56.742Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:46:56.745Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:46:56.765Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:47:01.268Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T07:47:01.269Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T07:47:01.269Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T07:47:01.495Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T07:47:01.495Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T07:47:01.495Z] [BOT] 💾 BEFORE ARCHIVING: 3511 jobs in database
[2026-01-22T07:47:01.498Z] [BOT] ✅ No jobs to archive (all 3511 jobs within 7-day window)
[2026-01-22T07:47:01.520Z] [BOT] 💾 Saved posted_jobs.json: 3511 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T07:47:06.022Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T07:47:06.024Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T07:47:06.104Z] [BOT] 📂 Loaded 6391 existing routing entries
[2026-01-22T07:47:06.198Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T07:47:06.198Z] [BOT] Total entries: 6401
   Timestamp: 2026-01-22T07:47:06.167Z
[2026-01-22T07:47:06.199Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T07:47:06.199Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-22T07:47:06.200Z] [BOT] [STATS] Channel stats saved
[2026-01-22T07:47:08.218Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2463) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*