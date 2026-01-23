# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T05:48:40.043Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T05:48:04.705Z] ========================================
[2026-01-23T05:48:04.707Z] Discord Bot Execution Log
[2026-01-23T05:48:04.707Z] Environment: GitHub Actions
[2026-01-23T05:48:04.707Z] Node Version: v20.20.0
[2026-01-23T05:48:04.707Z] ========================================
[2026-01-23T05:48:04.707Z] Environment Variables Check:
[2026-01-23T05:48:04.707Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T05:48:04.707Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.707Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T05:48:04.708Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T05:48:04.708Z] 
Multi-Channel Configuration:
[2026-01-23T05:48:04.708Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T05:48:04.708Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T05:48:04.709Z] 
Data Files Check:
[2026-01-23T05:48:04.709Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T05:48:04.722Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1866392 bytes)
[2026-01-23T05:48:04.722Z] 
========================================
[2026-01-23T05:48:04.722Z] Starting Enhanced Discord Bot...
[2026-01-23T05:48:04.722Z] ========================================
[2026-01-23T05:48:05.273Z] [BOT] ✅ Loaded V2 database: 3199 jobs
[2026-01-23T05:48:06.251Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T05:48:06.251Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T05:48:06.252Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T05:48:06.366Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T05:48:06.370Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T05:48:06.370Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T05:48:06.370Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T05:48:06.371Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T05:48:06.371Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T05:48:06.373Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T05:48:06.374Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T05:48:06.374Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:48:06.390Z] [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T05:48:06.660Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T05:48:06.660Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T05:48:06.661Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T05:48:06.661Z] [BOT] 💾 BEFORE ARCHIVING: 3199 jobs in database
[2026-01-23T05:48:06.664Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T05:48:06.670Z] [BOT] 📦 Archived 13 jobs to 2026-01.json (13 total in archive)
[2026-01-23T05:48:06.670Z] [BOT] ✅ Archiving complete: 13 archived, 3186 active
[2026-01-23T05:48:06.693Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:08.195Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-23T05:48:08.195Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:48:08.427Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T05:48:08.427Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T05:48:08.427Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T05:48:08.428Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:08.429Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:08.448Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:09.949Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
[2026-01-23T05:48:09.949Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:48:10.200Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T05:48:10.201Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T05:48:10.201Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T05:48:10.201Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:10.203Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:10.226Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:11.920Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-23T05:48:11.921Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T05:48:11.921Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:11.923Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:11.944Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:13.444Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-23T05:48:13.445Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:48:13.732Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T05:48:13.732Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T05:48:13.734Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:13.735Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:13.756Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:15.258Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T05:48:15.258Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T05:48:15.536Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T05:48:15.536Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T05:48:15.536Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:15.539Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:15.562Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:17.285Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T05:48:17.285Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T05:48:17.285Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T05:48:17.285Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:17.288Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:17.308Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
[2026-01-23T05:48:17.308Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:21.810Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T05:48:21.811Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T05:48:22.069Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T05:48:22.070Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:22.072Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:22.094Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:23.596Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T05:48:23.596Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T05:48:23.978Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T05:48:23.979Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T05:48:23.979Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:23.981Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:24.001Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:25.503Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T05:48:25.503Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T05:48:25.725Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T05:48:25.725Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T05:48:25.726Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T05:48:25.726Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:25.728Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:25.747Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:27.249Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T05:48:27.249Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T05:48:27.450Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T05:48:27.450Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T05:48:27.451Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:27.452Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:27.472Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:31.973Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T05:48:31.974Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T05:48:31.974Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T05:48:32.214Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T05:48:32.215Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T05:48:32.215Z] [BOT] 💾 BEFORE ARCHIVING: 3186 jobs in database
[2026-01-23T05:48:32.217Z] [BOT] ✅ No jobs to archive (all 3186 jobs within 7-day window)
[2026-01-23T05:48:32.236Z] [BOT] 💾 Saved posted_jobs.json: 3186 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T05:48:36.737Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T05:48:36.739Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T05:48:36.822Z] [BOT] 📂 Loaded 7011 existing routing entries
[2026-01-23T05:48:36.914Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7021
[2026-01-23T05:48:36.915Z] [BOT] Timestamp: 2026-01-23T05:48:36.884Z
[2026-01-23T05:48:36.915Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T05:48:36.916Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[STATS] Channel stats saved
[2026-01-23T05:48:38.932Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2443) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*