# Discord Bot Execution Audit
**Timestamp:** 2026-01-23T08:31:57.623Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-23T08:31:21.610Z] ========================================
[2026-01-23T08:31:21.612Z] Discord Bot Execution Log
[2026-01-23T08:31:21.612Z] Environment: GitHub Actions
[2026-01-23T08:31:21.612Z] Node Version: v20.20.0
[2026-01-23T08:31:21.612Z] ========================================
[2026-01-23T08:31:21.613Z] Environment Variables Check:
[2026-01-23T08:31:21.613Z] DISCORD_TOKEN: ✅ Set
[2026-01-23T08:31:21.613Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.613Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-23T08:31:21.613Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-23T08:31:21.613Z] 
Multi-Channel Configuration:
[2026-01-23T08:31:21.613Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.613Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.613Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.613Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.613Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.614Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.614Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.614Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.614Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-23T08:31:21.614Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-23T08:31:21.614Z] 
Data Files Check:
[2026-01-23T08:31:21.615Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-23T08:31:21.626Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1825472 bytes)
[2026-01-23T08:31:21.626Z] 
========================================
[2026-01-23T08:31:21.626Z] Starting Enhanced Discord Bot...
[2026-01-23T08:31:21.626Z] ========================================
[2026-01-23T08:31:22.186Z] [BOT] ✅ Loaded V2 database: 3129 jobs
[2026-01-23T08:31:22.756Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-23T08:31:22.757Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-23T08:31:22.757Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-23T08:31:22.874Z] [BOT] ✅ Loaded pending queue: 2761 total (2741 pending, 20 enriched, 0 posted)
[2026-01-23T08:31:22.876Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-23T08:31:22.880Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-23T08:31:22.880Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-23T08:31:22.880Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-23T08:31:22.881Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-23T08:31:22.881Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-23T08:31:22.882Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-23T08:31:22.883Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-23T08:31:22.884Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-23T08:31:22.884Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-23T08:31:22.901Z] [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-23T08:31:23.144Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-23T08:31:23.144Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-23T08:31:23.145Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-23T08:31:23.145Z] [BOT] 💾 BEFORE ARCHIVING: 3129 jobs in database
[2026-01-23T08:31:23.148Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-23T08:31:23.153Z] [BOT] 📦 Archived 21 jobs to 2026-01.json (21 total in archive)
[2026-01-23T08:31:23.154Z] [BOT] ✅ Archiving complete: 21 archived, 3108 active
[2026-01-23T08:31:23.176Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:24.678Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-23T08:31:24.678Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T08:31:24.844Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-23T08:31:24.845Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-23T08:31:24.845Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:24.847Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:24.866Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:26.366Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-23T08:31:26.366Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T08:31:26.537Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-23T08:31:26.537Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-23T08:31:26.537Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-23T08:31:26.537Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:26.540Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:26.562Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:28.427Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-23T08:31:28.427Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T08:31:28.427Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-23T08:31:28.428Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:28.430Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:28.452Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:29.953Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
[2026-01-23T08:31:29.953Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-23T08:31:30.204Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-23T08:31:30.204Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-23T08:31:30.206Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:30.207Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:30.228Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:31.730Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-23T08:31:32.254Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-23T08:31:32.255Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-23T08:31:32.255Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:32.257Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:32.280Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:33.977Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-23T08:31:33.978Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-23T08:31:33.978Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-23T08:31:33.978Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:33.981Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:34.001Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:38.503Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-23T08:31:38.505Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T08:31:38.505Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-23T08:31:38.828Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-23T08:31:38.828Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-23T08:31:38.829Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-23T08:31:38.829Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:38.831Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:38.853Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:40.356Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T08:31:40.658Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-23T08:31:40.659Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T08:31:40.659Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:40.661Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:40.682Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:42.183Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-23T08:31:42.183Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-23T08:31:42.371Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-23T08:31:42.371Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-23T08:31:42.371Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-23T08:31:42.371Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:42.373Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:42.393Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:43.894Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-23T08:31:44.167Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-23T08:31:44.167Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-23T08:31:44.167Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:44.169Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:44.189Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:48.691Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-23T08:31:48.691Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-23T08:31:48.691Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-23T08:31:50.153Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-23T08:31:50.154Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-23T08:31:50.154Z] [BOT] 💾 BEFORE ARCHIVING: 3108 jobs in database
[2026-01-23T08:31:50.156Z] [BOT] ✅ No jobs to archive (all 3108 jobs within 7-day window)
[2026-01-23T08:31:50.175Z] [BOT] 💾 Saved posted_jobs.json: 3108 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-23T08:31:54.677Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-23T08:31:54.679Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-23T08:31:54.763Z] [BOT] 📂 Loaded 7091 existing routing entries
[2026-01-23T08:31:54.858Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-23T08:31:54.858Z] [BOT] New entries: 10
   Total entries: 7101
   Timestamp: 2026-01-23T08:31:54.826Z
[2026-01-23T08:31:54.859Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_19bb1fa8.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-23T08:31:54.859Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-23T08:31:54.859Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
[2026-01-23T08:31:54.860Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-23T08:31:54.860Z] [BOT] [STATS] Channel stats saved
[2026-01-23T08:31:56.878Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*