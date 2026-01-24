# Discord Bot Execution Audit
**Timestamp:** 2026-01-24T02:33:28.805Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-24T02:32:55.055Z] ========================================
[2026-01-24T02:32:55.057Z] Discord Bot Execution Log
[2026-01-24T02:32:55.057Z] Environment: GitHub Actions
[2026-01-24T02:32:55.057Z] Node Version: v20.20.0
[2026-01-24T02:32:55.057Z] ========================================
[2026-01-24T02:32:55.057Z] Environment Variables Check:
[2026-01-24T02:32:55.057Z] DISCORD_TOKEN: ✅ Set
[2026-01-24T02:32:55.057Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.057Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-24T02:32:55.057Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-24T02:32:55.058Z] 
Multi-Channel Configuration:
[2026-01-24T02:32:55.058Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-24T02:32:55.058Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-24T02:32:55.058Z] 
Data Files Check:
[2026-01-24T02:32:55.059Z] .github/data/new_jobs.json: ✅ Exists (10 items, 57058 bytes)
[2026-01-24T02:32:55.070Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1669989 bytes)
[2026-01-24T02:32:55.070Z] 
========================================
[2026-01-24T02:32:55.070Z] Starting Enhanced Discord Bot...
[2026-01-24T02:32:55.070Z] ========================================
[2026-01-24T02:32:55.588Z] [BOT] ✅ Loaded V2 database: 2854 jobs
[2026-01-24T02:32:56.015Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-24T02:32:56.016Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-24T02:32:56.016Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-24T02:32:56.134Z] [BOT] ✅ Loaded pending queue: 2792 total (2772 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-24T02:32:56.138Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-24T02:32:56.138Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-24T02:32:56.138Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-24T02:32:56.139Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-24T02:32:56.139Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
[2026-01-24T02:32:56.140Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-24T02:32:56.141Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-24T02:32:56.142Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-24T02:32:56.142Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-24T02:32:56.160Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-24T02:32:56.495Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-24T02:32:56.495Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-24T02:32:56.496Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-24T02:32:56.496Z] [BOT] 💾 BEFORE ARCHIVING: 2854 jobs in database
[2026-01-24T02:32:56.499Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-24T02:32:56.504Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-24T02:32:56.504Z] [BOT] ✅ Archiving complete: 2 archived, 2852 active
[2026-01-24T02:32:56.523Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T02:32:58.024Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2026-01-24T02:32:58.024Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T02:32:58.173Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-24T02:32:58.173Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-24T02:32:58.174Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-24T02:32:58.174Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:32:58.176Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:32:58.193Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T02:32:59.695Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-24T02:32:59.695Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-24T02:32:59.944Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-24T02:32:59.944Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-24T02:32:59.945Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:32:59.947Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:32:59.966Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:01.591Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
[2026-01-24T02:33:01.592Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T02:33:01.592Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-24T02:33:01.592Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:01.594Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:01.614Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:03.115Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-24T02:33:03.115Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T02:33:03.349Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-24T02:33:03.350Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-24T02:33:03.350Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:03.352Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:03.372Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-24T02:33:03.372Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:04.873Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-24T02:33:04.873Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-24T02:33:05.133Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-24T02:33:05.133Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:05.135Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:05.156Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-24T02:33:05.156Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:07.042Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-24T02:33:07.042Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-24T02:33:07.043Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-24T02:33:07.043Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:07.045Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:07.064Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-24T02:33:07.064Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:11.566Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-24T02:33:11.568Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T02:33:11.568Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-24T02:33:11.784Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-24T02:33:11.784Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-24T02:33:11.784Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:11.786Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:11.805Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:13.307Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-24T02:33:13.307Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-24T02:33:13.474Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-24T02:33:13.474Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-24T02:33:13.474Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:13.476Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:13.494Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-24T02:33:13.494Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:14.996Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-24T02:33:14.996Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-24T02:33:15.163Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
[2026-01-24T02:33:15.163Z] [BOT] ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-24T02:33:15.164Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-24T02:33:15.164Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:15.165Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:15.184Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-24T02:33:15.184Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:16.685Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2026-01-24T02:33:16.685Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-24T02:33:16.808Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
[2026-01-24T02:33:16.808Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-24T02:33:16.809Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:16.811Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:16.829Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-24T02:33:16.829Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:21.331Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2026-01-24T02:33:21.331Z] [BOT] 📍 [ROUTING] "Postdoctoral Scholar Research Associate" @ ORG_9d38443e of Southern California
[2026-01-24T02:33:21.331Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1462...4531)
[2026-01-24T02:33:21.488Z] [BOT] ✅ Posted message: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California in #JID_fb739488
[2026-01-24T02:33:21.488Z] [BOT] ✅ Industry: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California
[2026-01-24T02:33:21.488Z] [BOT] 💾 Added channel posting: Postdoctoral Scholar Research Associate @ ORG_9d38443e of Southern California → category channel (1 total channels)
[2026-01-24T02:33:21.488Z] [BOT] 💾 BEFORE ARCHIVING: 2852 jobs in database
[2026-01-24T02:33:21.490Z] [BOT] ✅ No jobs to archive (all 2852 jobs within 7-day window)
[2026-01-24T02:33:21.509Z] [BOT] 💾 Saved posted_jobs.json: 2852 active jobs
[2026-01-24T02:33:21.509Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-24T02:33:26.010Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-24T02:33:26.012Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-24T02:33:26.084Z] [BOT] 📂 Loaded 7601 existing routing entries
[2026-01-24T02:33:26.189Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2026-01-24T02:33:26.190Z] [BOT] New entries: 10
   Total entries: 7611
   Timestamp: 2026-01-24T02:33:26.143Z
[2026-01-24T02:33:26.190Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_90cea45d.jsonl
   Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2026-01-24T02:33:26.190Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-24T02:33:26.190Z] [BOT] Last cleanup: Never
   Total posts: 12
   Channels used: 4
   Top channels:
     1. #tech-jobs: 5 posts
[2026-01-24T02:33:26.190Z] [BOT] 2. #ai-jobs: 4 posts
     3. #JID_98d4f0de: 2 posts
     4. #JID_fb739488: 1 posts
[2026-01-24T02:33:26.191Z] [BOT] [STATS] Channel stats saved
[2026-01-24T02:33:28.210Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*