# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T20:32:04.515Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T20:31:22.138Z] ========================================
[2026-01-22T20:31:22.140Z] Discord Bot Execution Log
[2026-01-22T20:31:22.140Z] Environment: GitHub Actions
[2026-01-22T20:31:22.140Z] Node Version: v20.19.6
[2026-01-22T20:31:22.140Z] ========================================
[2026-01-22T20:31:22.140Z] Environment Variables Check:
[2026-01-22T20:31:22.140Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T20:31:22.140Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.140Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T20:31:22.140Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T20:31:22.140Z] 
Multi-Channel Configuration:
[2026-01-22T20:31:22.141Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T20:31:22.141Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T20:31:22.141Z] 
Data Files Check:
[2026-01-22T20:31:22.142Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T20:31:22.156Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 1960081 bytes)
[2026-01-22T20:31:22.156Z] 
========================================
[2026-01-22T20:31:22.156Z] Starting Enhanced Discord Bot...
[2026-01-22T20:31:22.156Z] ========================================
[2026-01-22T20:31:22.622Z] [BOT] ✅ Loaded V2 database: 3367 jobs
[2026-01-22T20:31:23.422Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T20:31:23.423Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T20:31:23.423Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T20:31:23.588Z] [BOT] ✅ Loaded pending queue: 2787 total (2767 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T20:31:23.593Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T20:31:23.593Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T20:31:23.594Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T20:31:23.594Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T20:31:23.595Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T20:31:23.597Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T20:31:23.598Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T20:31:23.598Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:31:23.614Z] [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T20:31:23.790Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T20:31:23.791Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T20:31:23.791Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T20:31:23.792Z] [BOT] 💾 BEFORE ARCHIVING: 3367 jobs in database
[2026-01-22T20:31:23.794Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T20:31:23.798Z] [BOT] 📦 Archived 10 jobs to 2026-01.json (10 total in archive)
[2026-01-22T20:31:23.798Z] [BOT] ✅ Archiving complete: 10 archived, 3357 active
[2026-01-22T20:31:23.822Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:25.324Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T20:31:25.324Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:31:25.899Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T20:31:25.900Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T20:31:25.900Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T20:31:25.900Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:25.903Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:25.923Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:27.753Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
[2026-01-22T20:31:27.753Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T20:31:27.753Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T20:31:27.753Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:27.756Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:27.778Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:29.280Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:31:29.540Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T20:31:29.540Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T20:31:29.541Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T20:31:29.541Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:29.543Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:29.564Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:31.277Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T20:31:31.277Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T20:31:31.277Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:31.279Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:31.300Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:32.801Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T20:31:32.801Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T20:31:33.252Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
[2026-01-22T20:31:33.252Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T20:31:33.252Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T20:31:33.253Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:33.255Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:33.279Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:34.780Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
   Category: TECH (matched: "software")
[2026-01-22T20:31:34.780Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-22T20:31:34.930Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T20:31:34.930Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T20:31:34.931Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T20:31:34.931Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:34.933Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:34.956Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:36.608Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
[2026-01-22T20:31:36.608Z] [BOT] ✅ Location: JID_98d4f0de
[2026-01-22T20:31:36.608Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T20:31:36.608Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:36.610Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:36.632Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:41.134Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T20:31:41.135Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-22T20:31:41.135Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T20:31:42.877Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
  ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T20:31:42.877Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T20:31:42.878Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:42.880Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:42.901Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:44.403Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-22T20:31:44.403Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T20:31:44.630Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T20:31:44.631Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T20:31:44.631Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:44.634Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:44.656Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:46.325Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T20:31:46.326Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T20:31:46.326Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:46.328Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:46.351Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:47.851Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-22T20:31:47.852Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T20:31:48.132Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T20:31:48.133Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T20:31:48.133Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:48.135Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:48.156Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:49.658Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T20:31:49.658Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T20:31:49.932Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T20:31:49.933Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:49.935Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:49.956Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:51.892Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T20:31:51.892Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T20:31:51.893Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:51.894Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:51.916Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:31:56.417Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T20:31:56.417Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T20:31:56.709Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T20:31:56.710Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T20:31:56.710Z] [BOT] 💾 BEFORE ARCHIVING: 3357 jobs in database
[2026-01-22T20:31:56.712Z] [BOT] ✅ No jobs to archive (all 3357 jobs within 7-day window)
[2026-01-22T20:31:56.734Z] [BOT] 💾 Saved posted_jobs.json: 3357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T20:32:01.237Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T20:32:01.238Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T20:32:01.326Z] [BOT] 📂 Loaded 6781 existing routing entries
[2026-01-22T20:32:01.415Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6791
[2026-01-22T20:32:01.415Z] [BOT] Timestamp: 2026-01-22T20:32:01.389Z
[2026-01-22T20:32:01.416Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
[2026-01-22T20:32:01.416Z] [BOT] Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T20:32:01.416Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T20:32:01.416Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
[2026-01-22T20:32:01.416Z] [BOT] 1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
[2026-01-22T20:32:01.417Z] [BOT] 5. #finance-jobs: 1 posts
[2026-01-22T20:32:01.417Z] [BOT] [STATS] Channel stats saved
[2026-01-22T20:32:03.430Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2409) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*