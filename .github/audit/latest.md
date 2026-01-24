# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T05:16:41.520Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T05:16:06.145Z] ========================================
[2026-01-24T05:16:06.147Z] Discord Bot Execution Log
[2026-01-24T05:16:06.147Z] Environment: GitHub Actions
[2026-01-24T05:16:06.147Z] Node Version: v20.20.0
[2026-01-24T05:16:06.147Z] ========================================
[2026-01-24T05:16:06.147Z] Environment Variables Check:
[2026-01-24T05:16:06.147Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T05:16:06.148Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.148Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T05:16:06.148Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T05:16:06.148Z] 
Multi-Channel Configuration:
[2026-01-24T05:16:06.148Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.148Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.148Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.148Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.148Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.149Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.149Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.149Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.149Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T05:16:06.149Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T05:16:06.149Z] 
Data Files Check:
[2026-01-24T05:16:06.150Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T05:16:06.161Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1646549 bytes)
[2026-01-24T05:16:06.161Z] 
========================================
[2026-01-24T05:16:06.161Z] Starting Enhanced Discord Bot...
[2026-01-24T05:16:06.161Z] ========================================
[2026-01-24T05:16:06.722Z] [BOT] ✅ Loaded V2 database: 2811 jobs
[2026-01-24T05:16:07.281Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T05:16:07.281Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T05:16:07.281Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T05:16:07.399Z] [BOT] ✅ Loaded pending queue: 2796 total (2776 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T05:16:07.403Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T05:16:07.403Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T05:16:07.403Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T05:16:07.404Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T05:16:07.404Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T05:16:07.406Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T05:16:07.407Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T05:16:07.407Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:16:07.426Z] [BOT ERROR] (node:2560) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T05:16:09.002Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T05:16:09.003Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T05:16:09.004Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T05:16:09.004Z] [BOT] 💾 BEFORE ARCHIVING: 2811 jobs in database
[2026-01-24T05:16:09.006Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T05:16:09.011Z] [BOT] 📦 Archived 12 jobs to 2026-01.json (12 total in archive)
[2026-01-24T05:16:09.012Z] [BOT] ✅ Archiving complete: 12 archived, 2799 active
[2026-01-24T05:16:09.041Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
[2026-01-24T05:16:09.041Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:10.543Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:16:10.673Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
  ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T05:16:10.674Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:10.677Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:10.694Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:12.196Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:16:12.395Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T05:16:12.396Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-24T05:16:12.397Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:12.398Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:12.418Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:14.189Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T05:16:14.190Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T05:16:14.191Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T05:16:14.191Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:14.193Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:14.212Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:15.714Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T05:16:15.714Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:16:15.897Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-24T05:16:15.897Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T05:16:15.898Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T05:16:15.898Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:15.901Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:15.921Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:17.423Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T05:16:17.423Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T05:16:17.757Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T05:16:17.758Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:17.760Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:17.782Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:19.678Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T05:16:19.678Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T05:16:19.679Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:19.681Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:19.702Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:24.204Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T05:16:24.205Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:16:24.338Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T05:16:24.339Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:24.341Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:24.360Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:25.862Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T05:16:25.863Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T05:16:26.000Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T05:16:26.001Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:26.003Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:26.020Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:27.522Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:16:27.522Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T05:16:27.703Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T05:16:27.705Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T05:16:27.705Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:27.707Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:27.726Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:29.227Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T05:16:29.227Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T05:16:29.397Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T05:16:29.397Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T05:16:29.398Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T05:16:29.398Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:29.400Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:29.419Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:33.921Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T05:16:33.921Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-24T05:16:33.921Z] [BOT] Channel: JID_fb739488 (1462...4531)
[2026-01-24T05:16:34.164Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
  ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T05:16:34.164Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T05:16:34.164Z] [BOT] 💾 BEFORE ARCHIVING: 2799 jobs in database
[2026-01-24T05:16:34.166Z] [BOT] ✅ No jobs to archive (all 2799 jobs within 7-day window)
[2026-01-24T05:16:34.186Z] [BOT] 💾 Saved posted_jobs.json: 2799 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T05:16:38.689Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T05:16:38.692Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T05:16:38.766Z] [BOT] 📂 Loaded 7671 existing routing entries
[2026-01-24T05:16:38.875Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T05:16:38.876Z] [BOT] New entries: 10
   Total entries: 7681
   Timestamp: 2026-01-24T05:16:38.827Z
[2026-01-24T05:16:38.876Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
[2026-01-24T05:16:38.876Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T05:16:38.876Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T05:16:38.877Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
[2026-01-24T05:16:38.877Z] [BOT] 4. #JID_fb739488: 1 posts
[2026-01-24T05:16:38.877Z] [BOT] [STATS] Channel stats saved
[2026-01-24T05:16:40.898Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2560) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*