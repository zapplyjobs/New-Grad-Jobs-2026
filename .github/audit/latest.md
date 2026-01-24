# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T05:31:18.985Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T05:30:44.551Z] ========================================
[2026-01-24T05:30:44.553Z] Discord Bot Execution Log
[2026-01-24T05:30:44.553Z] Environment: GitHub Actions
[2026-01-24T05:30:44.553Z] Node Version: v20.20.0
[2026-01-24T05:30:44.553Z] ========================================
[2026-01-24T05:30:44.553Z] Environment Variables Check:
[2026-01-24T05:30:44.553Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T05:30:44.553Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.553Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T05:30:44.554Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T05:30:44.554Z] 
Multi-Channel Configuration:
[2026-01-24T05:30:44.554Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T05:30:44.554Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T05:30:44.554Z] 
Data Files Check:
[2026-01-24T05:30:44.555Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T05:30:44.566Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1640469 bytes)
[2026-01-24T05:30:44.566Z] 
========================================
[2026-01-24T05:30:44.566Z] Starting Enhanced Discord Bot...
[2026-01-24T05:30:44.566Z] ========================================
[2026-01-24T05:30:45.085Z] [BOT] ✅ Loaded V2 database: 2799 jobs
[2026-01-24T05:30:45.691Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T05:30:45.691Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T05:30:45.692Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T05:30:45.810Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[2026-01-24T05:30:45.810Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T05:30:45.815Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T05:30:45.815Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T05:30:45.816Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T05:30:45.817Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T05:30:45.817Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T05:30:45.819Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T05:30:45.820Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T05:30:45.820Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:30:45.839Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T05:30:46.069Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T05:30:46.069Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T05:30:46.070Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T05:30:46.070Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:30:46.073Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T05:30:46.077Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-24T05:30:46.078Z] [BOT] ✅ Archiving complete: 12 archived, 2787 active
[2026-01-24T05:30:46.097Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-24T05:30:46.097Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:30:47.598Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T05:30:47.598Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T05:30:47.803Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T05:30:47.803Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T05:30:47.804Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:30:47.806Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:30:47.823Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:30:49.324Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:30:49.586Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T05:30:49.587Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:30:49.589Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:30:49.609Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-24T05:30:49.609Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:30:51.253Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T05:30:51.253Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T05:30:51.254Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T05:30:51.254Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:30:51.257Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:30:51.280Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-24T05:30:51.280Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:30:52.781Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-24T05:30:52.781Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T05:30:53.050Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T05:30:53.051Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T05:30:53.051Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:30:53.053Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:30:53.073Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:30:54.574Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T05:30:54.574Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:30:54.733Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-24T05:30:54.733Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T05:30:54.734Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-24T05:30:54.734Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:30:54.736Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:30:54.757Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:30:56.619Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T05:30:56.619Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T05:30:56.620Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T05:30:56.620Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:30:56.622Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:30:56.642Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-24T05:30:56.642Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:31:01.143Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T05:31:01.145Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T05:31:01.145Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:31:01.446Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-24T05:31:01.447Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T05:31:01.447Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-24T05:31:01.447Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:31:01.449Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:31:01.467Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:31:02.969Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-24T05:31:02.970Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:31:03.193Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-24T05:31:03.194Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T05:31:03.194Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T05:31:03.194Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:31:03.196Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:31:03.214Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:31:04.715Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-24T05:31:04.716Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T05:31:04.963Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T05:31:04.964Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T05:31:04.964Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:31:04.966Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:31:04.985Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
[2026-01-24T05:31:04.985Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:31:06.486Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T05:31:06.486Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:31:06.677Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T05:31:06.677Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T05:31:06.678Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:31:06.679Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:31:06.697Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:31:11.198Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T05:31:11.199Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T05:31:11.199Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T05:31:11.447Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-24T05:31:11.448Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T05:31:11.448Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T05:31:11.448Z] [BOT] 💾 BEFORE ARCHIVING: 2787 jobs in database
[2026-01-24T05:31:11.450Z] [BOT] ✅ No jobs to archive (all 2787 jobs within 7-day window)
[2026-01-24T05:31:11.469Z] [BOT] 💾 Saved posted_jobs.json: 2787 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:31:15.971Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T05:31:15.973Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T05:31:16.047Z] [BOT] 📂 Loaded 7681 existing routing entries
[2026-01-24T05:31:16.151Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T05:31:16.151Z] [BOT] New entries: 10
   Total entries: 7691
   Timestamp: 2026-01-24T05:31:16.104Z
[2026-01-24T05:31:16.151Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T05:31:16.152Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T05:31:16.152Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-24T05:31:16.152Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T05:31:16.152Z] [BOT] [STATS] Channel stats saved
[2026-01-24T05:31:18.171Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*