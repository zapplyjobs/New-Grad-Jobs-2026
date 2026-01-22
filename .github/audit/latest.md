# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T02:39:22.248Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T02:38:41.654Z] ========================================
[2026-01-22T02:38:41.656Z] Discord Bot Execution Log
[2026-01-22T02:38:41.656Z] Environment: GitHub Actions
[2026-01-22T02:38:41.656Z] Node Version: v20.19.6
[2026-01-22T02:38:41.656Z] ========================================
[2026-01-22T02:38:41.656Z] Environment Variables Check:
[2026-01-22T02:38:41.656Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T02:38:41.656Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.656Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T02:38:41.656Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T02:38:41.656Z] 
Multi-Channel Configuration:
[2026-01-22T02:38:41.657Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T02:38:41.657Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T02:38:41.657Z] 
Data Files Check:
[2026-01-22T02:38:41.658Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T02:38:41.672Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2141431 bytes)
[2026-01-22T02:38:41.672Z] 
========================================
[2026-01-22T02:38:41.672Z] Starting Enhanced Discord Bot...
[2026-01-22T02:38:41.672Z] ========================================
[2026-01-22T02:38:42.201Z] [BOT] ✅ Loaded V2 database: 3685 jobs
[2026-01-22T02:38:42.931Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T02:38:42.931Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T02:38:42.931Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T02:38:43.045Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T02:38:43.049Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T02:38:43.049Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T02:38:43.050Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T02:38:43.051Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T02:38:43.051Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T02:38:43.054Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T02:38:43.054Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T02:38:43.055Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T02:38:43.072Z] [BOT ERROR] (node:2429) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T02:38:43.448Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
  ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T02:38:43.449Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T02:38:43.449Z] [BOT] 💾 BEFORE ARCHIVING: 3685 jobs in database
[2026-01-22T02:38:43.452Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T02:38:43.454Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T02:38:43.454Z] [BOT] ✅ Archiving complete: 10 archived, 3675 active
[2026-01-22T02:38:43.478Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:38:44.979Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T02:38:44.980Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T02:38:45.169Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T02:38:45.169Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T02:38:45.169Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:38:45.172Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:38:45.196Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:38:46.896Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T02:38:46.896Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T02:38:46.897Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T02:38:46.897Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:38:46.900Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:38:46.924Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:38:48.425Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T02:38:48.646Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T02:38:48.646Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T02:38:48.647Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T02:38:48.647Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:38:48.649Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:38:48.674Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:38:50.363Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T02:38:50.363Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T02:38:50.363Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:38:50.365Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:38:50.388Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
[2026-01-22T02:38:50.388Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T02:38:51.889Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T02:38:51.889Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T02:38:52.336Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T02:38:52.337Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T02:38:52.337Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T02:38:52.337Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:38:52.340Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:38:52.366Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:38:53.868Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T02:38:53.868Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T02:38:54.048Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T02:38:54.048Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T02:38:54.048Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T02:38:54.048Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:38:54.051Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:38:54.075Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:38:55.818Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T02:38:55.818Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T02:38:55.818Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T02:38:55.819Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:38:55.821Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:38:55.847Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:00.349Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T02:39:00.350Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T02:39:00.730Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T02:39:00.731Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T02:39:00.731Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:39:00.733Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:39:00.756Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:02.259Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T02:39:02.259Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T02:39:02.477Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T02:39:02.477Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T02:39:02.478Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T02:39:02.478Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:39:02.480Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:39:02.505Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:04.205Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T02:39:04.206Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T02:39:04.206Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T02:39:04.206Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:39:04.208Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:39:04.233Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:05.734Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T02:39:05.734Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T02:39:06.005Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-22T02:39:06.005Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T02:39:06.006Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:39:06.008Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:39:06.033Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:07.535Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T02:39:07.740Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T02:39:07.740Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T02:39:07.740Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:39:07.743Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:39:07.765Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:09.771Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T02:39:09.772Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T02:39:09.772Z] [BOT] 💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:39:09.775Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:39:09.797Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:14.299Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T02:39:14.299Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T02:39:14.299Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T02:39:14.672Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T02:39:14.673Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3675 jobs in database
[2026-01-22T02:39:14.675Z] [BOT] ✅ No jobs to archive (all 3675 jobs within 7-day window)
[2026-01-22T02:39:14.698Z] [BOT] 💾 Saved posted_jobs.json: 3675 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T02:39:19.200Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T02:39:19.202Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T02:39:19.270Z] [BOT] 📂 Loaded 6261 existing routing entries
[2026-01-22T02:39:19.359Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T02:39:19.359Z] [BOT] Total entries: 6271
   Timestamp: 2026-01-22T02:39:19.326Z
[2026-01-22T02:39:19.360Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
[2026-01-22T02:39:19.360Z] [BOT] Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T02:39:19.360Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
[2026-01-22T02:39:19.360Z] [BOT] Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
[2026-01-22T02:39:19.360Z] [BOT] 4. #JID_98d4f0de: 2 posts
[2026-01-22T02:39:19.360Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T02:39:19.360Z] [BOT] [STATS] Channel stats saved
[2026-01-22T02:39:21.379Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2429) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*