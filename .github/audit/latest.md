# Discord Bot Execution Audit
**Timestamp:** 2026-01-21T23:57:40.321Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-21T23:56:58.655Z] ========================================
[2026-01-21T23:56:58.657Z] Discord Bot Execution Log
[2026-01-21T23:56:58.657Z] Environment: GitHub Actions
[2026-01-21T23:56:58.657Z] Node Version: v20.19.6
[2026-01-21T23:56:58.657Z] ========================================
[2026-01-21T23:56:58.657Z] Environment Variables Check:
[2026-01-21T23:56:58.657Z] DISCORD_TOKEN: ✅ Set
[2026-01-21T23:56:58.657Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.657Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-21T23:56:58.657Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-21T23:56:58.657Z] 
Multi-Channel Configuration:
[2026-01-21T23:56:58.657Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-21T23:56:58.658Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-21T23:56:58.658Z] 
Data Files Check:
[2026-01-21T23:56:58.659Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-21T23:56:58.675Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2161999 bytes)
[2026-01-21T23:56:58.675Z] 
========================================
[2026-01-21T23:56:58.675Z] Starting Enhanced Discord Bot...
[2026-01-21T23:56:58.675Z] ========================================
[2026-01-21T23:56:59.206Z] [BOT] ✅ Loaded V2 database: 3725 jobs
[2026-01-21T23:56:59.842Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-21T23:56:59.842Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-21T23:56:59.842Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-21T23:56:59.993Z] [BOT] ✅ Loaded pending queue: 2768 total (2748 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-21T23:56:59.997Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-21T23:56:59.997Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-21T23:56:59.998Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-21T23:56:59.998Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-21T23:56:59.999Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-21T23:57:00.002Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-21T23:57:00.002Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-21T23:57:00.002Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:57:00.019Z] [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-21T23:57:00.350Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-21T23:57:00.350Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-21T23:57:00.351Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-21T23:57:00.351Z] [BOT] 💾 BEFORE ARCHIVING: 3725 jobs in database
[2026-01-21T23:57:00.354Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-21T23:57:00.357Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
✅ Archiving complete: 11 archived, 3714 active
[2026-01-21T23:57:00.388Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:01.890Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-21T23:57:01.890Z] [BOT] Category: TECH (matched: "software")
[2026-01-21T23:57:01.891Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T23:57:02.178Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-21T23:57:02.178Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-21T23:57:02.179Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-21T23:57:02.179Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:02.182Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:02.204Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:03.922Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-21T23:57:03.923Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-21T23:57:03.923Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:03.926Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:03.950Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:05.450Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
[2026-01-21T23:57:05.451Z] [BOT] Channel: tech-jobs (1462...4987)
[2026-01-21T23:57:05.630Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
  ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-21T23:57:05.631Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-21T23:57:05.631Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:05.633Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:05.658Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:07.329Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:57:07.330Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-21T23:57:07.330Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:07.332Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:07.354Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:08.855Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:57:09.017Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-21T23:57:09.017Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-21T23:57:09.017Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:09.020Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:09.046Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:10.547Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-21T23:57:10.547Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-21T23:57:12.828Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-21T23:57:12.828Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-21T23:57:12.828Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:12.831Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:12.854Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:14.520Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-21T23:57:14.521Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-21T23:57:14.521Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:14.524Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:14.550Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:19.051Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-21T23:57:19.052Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
   Category: AI (matched: "machine learning")
[2026-01-21T23:57:19.052Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-21T23:57:19.360Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-21T23:57:19.360Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-21T23:57:19.361Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-21T23:57:19.361Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:19.363Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:19.386Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:20.888Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
[2026-01-21T23:57:20.888Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:57:21.061Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
[2026-01-21T23:57:21.061Z] [BOT] ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-21T23:57:21.062Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:57:21.062Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:21.064Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:21.089Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:22.739Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T23:57:22.739Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:57:22.740Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:57:22.740Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:22.742Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:22.764Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:24.265Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
[2026-01-21T23:57:24.265Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-21T23:57:24.558Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-21T23:57:24.559Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-21T23:57:24.559Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:24.561Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:24.586Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:26.086Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-21T23:57:26.358Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-21T23:57:26.358Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-21T23:57:26.358Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:26.361Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:26.383Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:28.087Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-21T23:57:28.087Z] [BOT] ✅ Location: JID_ead674af
[2026-01-21T23:57:28.088Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-21T23:57:28.088Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:28.090Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:28.114Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:32.614Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-21T23:57:32.614Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
   Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-21T23:57:32.903Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
  ✅ Industry: Manager, GTM Finance @ figma
[2026-01-21T23:57:32.903Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-21T23:57:32.903Z] [BOT] 💾 BEFORE ARCHIVING: 3714 jobs in database
[2026-01-21T23:57:32.905Z] [BOT] ✅ No jobs to archive (all 3714 jobs within 7-day window)
[2026-01-21T23:57:32.929Z] [BOT] 💾 Saved posted_jobs.json: 3714 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-21T23:57:37.430Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-21T23:57:37.432Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-21T23:57:37.503Z] [BOT] 📂 Loaded 6221 existing routing entries
[2026-01-21T23:57:37.588Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 6231
   Timestamp: 2026-01-21T23:57:37.558Z
📝 Discord posting log saved: .github/logs/JID_c7c5e80c.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 15
   Channels used: 5
[2026-01-21T23:57:37.589Z] [BOT] Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[2026-01-21T23:57:37.589Z] [BOT] [STATS] Channel stats saved
[2026-01-21T23:57:39.604Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*