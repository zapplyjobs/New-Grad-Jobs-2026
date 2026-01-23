# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T17:06:37.888Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T17:06:02.486Z] ========================================
[2026-01-23T17:06:02.487Z] Discord Bot Execution Log
[2026-01-23T17:06:02.487Z] Environment: GitHub Actions
[2026-01-23T17:06:02.487Z] Node Version: v20.20.0
[2026-01-23T17:06:02.487Z] ========================================
[2026-01-23T17:06:02.487Z] Environment Variables Check:
[2026-01-23T17:06:02.488Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T17:06:02.488Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T17:06:02.488Z] 
Multi-Channel Configuration:
[2026-01-23T17:06:02.488Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T17:06:02.488Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T17:06:02.489Z] 
Data Files Check:
[2026-01-23T17:06:02.489Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T17:06:02.502Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1799522 bytes)
[2026-01-23T17:06:02.502Z] 
========================================
[2026-01-23T17:06:02.502Z] Starting Enhanced Discord Bot...
[2026-01-23T17:06:02.502Z] ========================================
[2026-01-23T17:06:02.967Z] [BOT] ✅ Loaded V2 database: 3083 jobs
[2026-01-23T17:06:03.853Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T17:06:03.853Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T17:06:03.853Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T17:06:04.006Z] [BOT] ✅ Loaded pending queue: 2772 total (2752 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T17:06:04.009Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T17:06:04.010Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T17:06:04.010Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T17:06:04.010Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T17:06:04.011Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T17:06:04.012Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T17:06:04.013Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T17:06:04.013Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:06:04.029Z] [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T17:06:04.264Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T17:06:04.264Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T17:06:04.264Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T17:06:04.265Z] [BOT] 💾 BEFORE ARCHIVING: 3083 jobs in database
[2026-01-23T17:06:04.267Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T17:06:04.271Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-23T17:06:04.271Z] [BOT] ✅ Archiving complete: 2 archived, 3081 active
[2026-01-23T17:06:04.297Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:05.798Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T17:06:05.799Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T17:06:06.122Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-23T17:06:06.123Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T17:06:06.123Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T17:06:06.123Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:06.125Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:06.144Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:07.645Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T17:06:07.646Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T17:06:08.014Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T17:06:08.015Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T17:06:08.015Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:08.017Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:08.039Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:09.756Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T17:06:09.756Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T17:06:09.756Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T17:06:09.757Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:09.758Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:09.779Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:11.279Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:06:11.654Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T17:06:11.655Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-23T17:06:11.655Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:11.657Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:11.677Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:13.179Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-23T17:06:13.179Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T17:06:13.352Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-23T17:06:13.352Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T17:06:13.353Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T17:06:13.353Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:13.355Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:13.377Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:15.108Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T17:06:15.108Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T17:06:15.108Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T17:06:15.109Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:15.110Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:15.131Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:19.632Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T17:06:19.633Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T17:06:19.634Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T17:06:19.957Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T17:06:19.957Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T17:06:19.957Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T17:06:19.957Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:19.959Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:19.980Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:21.482Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T17:06:21.482Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T17:06:21.708Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-23T17:06:21.708Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T17:06:21.708Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T17:06:21.708Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:21.710Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:21.731Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:23.233Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-23T17:06:23.233Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T17:06:23.430Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T17:06:23.430Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T17:06:23.431Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T17:06:23.431Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:23.433Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:23.452Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:24.953Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-23T17:06:24.953Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-23T17:06:25.187Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-23T17:06:25.187Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T17:06:25.188Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T17:06:25.188Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:25.189Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:25.209Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:29.710Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T17:06:29.711Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T17:06:29.711Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T17:06:30.098Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T17:06:30.098Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T17:06:30.098Z] [BOT] 💾 BEFORE ARCHIVING: 3081 jobs in database
[2026-01-23T17:06:30.100Z] [BOT] ✅ No jobs to archive (all 3081 jobs within 7-day window)
[2026-01-23T17:06:30.121Z] [BOT] 💾 Saved posted_jobs.json: 3081 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T17:06:34.624Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T17:06:34.626Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T17:06:34.716Z] [BOT] 📂 Loaded 7331 existing routing entries
[2026-01-23T17:06:34.808Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 7341
   Timestamp: 2026-01-23T17:06:34.781Z
[2026-01-23T17:06:34.809Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
[2026-01-23T17:06:34.809Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T17:06:34.809Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
[2026-01-23T17:06:34.809Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T17:06:34.810Z] [BOT] [STATS] Channel stats saved
[2026-01-23T17:06:36.824Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2476) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*