# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T00:30:40.176Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T00:29:58.314Z] ========================================
[2026-01-22T00:29:58.316Z] Discord Bot Execution Log
[2026-01-22T00:29:58.316Z] Environment: GitHub Actions
[2026-01-22T00:29:58.316Z] Node Version: v20.19.6
[2026-01-22T00:29:58.316Z] ========================================
[2026-01-22T00:29:58.316Z] Environment Variables Check:
[2026-01-22T00:29:58.317Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T00:29:58.317Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.317Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T00:29:58.317Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T00:29:58.317Z] 
Multi-Channel Configuration:
[2026-01-22T00:29:58.317Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.317Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.317Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.317Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.317Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.318Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.318Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.318Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.318Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T00:29:58.318Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T00:29:58.318Z] 
Data Files Check:
[2026-01-22T00:29:58.319Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T00:29:58.342Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2156675 bytes)
[2026-01-22T00:29:58.342Z] 
========================================
[2026-01-22T00:29:58.342Z] Starting Enhanced Discord Bot...
[2026-01-22T00:29:58.342Z] ========================================
[2026-01-22T00:29:58.916Z] [BOT] ✅ Loaded V2 database: 3714 jobs
[2026-01-22T00:29:59.504Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T00:29:59.505Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T00:29:59.505Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T00:29:59.620Z] [BOT] ✅ Loaded pending queue: 2778 total (2758 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T00:29:59.624Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T00:29:59.624Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T00:29:59.625Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T00:29:59.626Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T00:29:59.626Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T00:29:59.629Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T00:29:59.629Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T00:29:59.630Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:29:59.646Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T00:29:59.873Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T00:29:59.873Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T00:29:59.874Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T00:29:59.874Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-22T00:29:59.877Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T00:29:59.882Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T00:29:59.882Z] [BOT] ✅ Archiving complete: 10 archived, 3704 active
[2026-01-22T00:29:59.905Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:01.407Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:30:01.750Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T00:30:01.751Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T00:30:01.751Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:01.753Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:01.775Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:03.653Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T00:30:03.653Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T00:30:03.654Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:03.656Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:03.681Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:05.183Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:30:05.429Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T00:30:05.430Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T00:30:05.430Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T00:30:05.430Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:05.433Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:05.457Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
[2026-01-22T00:30:05.457Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:07.165Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T00:30:07.166Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T00:30:07.166Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:07.168Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:07.189Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:08.690Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T00:30:08.690Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:30:09.065Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T00:30:09.065Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T00:30:09.066Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T00:30:09.066Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:09.068Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:09.093Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:10.595Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T00:30:10.595Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T00:30:10.823Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T00:30:10.823Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T00:30:10.824Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T00:30:10.824Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:10.826Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:10.849Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
[2026-01-22T00:30:10.849Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:12.624Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T00:30:12.624Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T00:30:12.624Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:12.627Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:12.653Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:17.155Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T00:30:17.156Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T00:30:17.509Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T00:30:17.510Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T00:30:17.510Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:17.512Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:17.534Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:19.037Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T00:30:19.532Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-22T00:30:19.533Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T00:30:19.533Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T00:30:19.533Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:19.536Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:19.560Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:21.254Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T00:30:21.255Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:21.257Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:21.279Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:22.780Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
[2026-01-22T00:30:22.780Z] [BOT] Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T00:30:23.075Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T00:30:23.076Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T00:30:23.076Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:23.078Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:23.103Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:24.605Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-22T00:30:24.605Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T00:30:24.780Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T00:30:24.780Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T00:30:24.780Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:24.782Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:24.804Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:26.534Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T00:30:26.534Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T00:30:26.535Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:26.537Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:26.558Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
[2026-01-22T00:30:26.558Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:31.060Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T00:30:31.061Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T00:30:31.061Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T00:30:31.438Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T00:30:31.438Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T00:30:31.439Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T00:30:31.439Z] [BOT] 💾 BEFORE ARCHIVING: 3704 jobs in database
[2026-01-22T00:30:31.441Z] [BOT] ✅ No jobs to archive (all 3704 jobs within 7-day window)
[2026-01-22T00:30:31.463Z] [BOT] 💾 Saved posted_jobs.json: 3704 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T00:30:35.965Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T00:30:35.967Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T00:30:36.032Z] [BOT] 📂 Loaded 6231 existing routing entries
[2026-01-22T00:30:36.121Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6241
[2026-01-22T00:30:36.121Z] [BOT] Timestamp: 2026-01-22T00:30:36.088Z
[2026-01-22T00:30:36.122Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T00:30:36.122Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-22T00:30:36.122Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T00:30:36.123Z] [BOT] 5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T00:30:38.141Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*