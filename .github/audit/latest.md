# Discord Bot Execution Audit
**Timestamp:** 2026-01-22T15:50:38.399Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-22T15:49:56.833Z] ========================================
[2026-01-22T15:49:56.835Z] Discord Bot Execution Log
[2026-01-22T15:49:56.835Z] Environment: GitHub Actions
[2026-01-22T15:49:56.835Z] Node Version: v20.19.6
[2026-01-22T15:49:56.835Z] ========================================
[2026-01-22T15:49:56.835Z] Environment Variables Check:
[2026-01-22T15:49:56.835Z] DISCORD_TOKEN: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-22T15:49:56.836Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-22T15:49:56.836Z] 
Multi-Channel Configuration:
[2026-01-22T15:49:56.836Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.836Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.837Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-22T15:49:56.837Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-22T15:49:56.837Z] 
Data Files Check:
[2026-01-22T15:49:56.838Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66162 bytes)
[2026-01-22T15:49:56.851Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 2004349 bytes)
[2026-01-22T15:49:56.851Z] 
========================================
[2026-01-22T15:49:56.851Z] Starting Enhanced Discord Bot...
[2026-01-22T15:49:56.851Z] ========================================
[2026-01-22T15:49:57.378Z] [BOT] ✅ Loaded V2 database: 3444 jobs
[2026-01-22T15:49:58.390Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-22T15:49:58.391Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-22T15:49:58.391Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-22T15:49:58.505Z] [BOT] ✅ Loaded pending queue: 2781 total (2761 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Analyst – Data Integration at Strata Decision Technology
[2026-01-22T15:49:58.510Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-22T15:49:58.510Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-22T15:49:58.511Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-22T15:49:58.511Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-22T15:49:58.511Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-22T15:49:58.514Z] [BOT] 📌 Posting 5 jobs to #tech-jobs
[2026-01-22T15:49:58.515Z] [BOT] 📍 [ROUTING] "Analyst – Data Integration" @ ORG_86851bed Decision Technology
[2026-01-22T15:49:58.515Z] [BOT] Category: TECH (matched: "data")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:49:58.532Z] [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-22T15:49:58.796Z] [BOT] ✅ Posted message: Analyst – Data Integration @ ORG_86851bed Decision Technology in #tech-jobs
[2026-01-22T15:49:58.796Z] [BOT] ✅ Industry: Analyst – Data Integration @ ORG_86851bed Decision Technology
[2026-01-22T15:49:58.797Z] [BOT] 💾 Added channel posting: Analyst – Data Integration @ ORG_86851bed Decision Technology → category channel (1 total channels)
[2026-01-22T15:49:58.797Z] [BOT] 💾 BEFORE ARCHIVING: 3444 jobs in database
[2026-01-22T15:49:58.800Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-22T15:49:58.806Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-22T15:49:58.806Z] [BOT] ✅ Archiving complete: 1 archived, 3443 active
[2026-01-22T15:49:58.828Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:00.330Z] [BOT] 📍 [ROUTING] "Associate Software Engineer / Software Engineer" @ ORG_f3f2248d Grumman
[2026-01-22T15:50:00.330Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:50:00.641Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #tech-jobs
[2026-01-22T15:50:00.642Z] [BOT] ✅ Industry: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman
[2026-01-22T15:50:00.642Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → category channel (2 total channels)
[2026-01-22T15:50:00.642Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:00.645Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:00.665Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:02.466Z] [BOT] ✅ Posted message: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T15:50:02.466Z] [BOT] 💾 Added channel posting: Associate Software Engineer / Software Engineer @ ORG_f3f2248d Grumman → location channel (2 total channels)
[2026-01-22T15:50:02.466Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:02.469Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:02.493Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:03.994Z] [BOT] 📍 [ROUTING] "Java Developer - Associate" @ ORG_02281b3b Stanley
   Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:50:04.308Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #tech-jobs
[2026-01-22T15:50:04.308Z] [BOT] ✅ Industry: Java Developer - Associate @ ORG_02281b3b Stanley
[2026-01-22T15:50:04.309Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → category channel (2 total channels)
[2026-01-22T15:50:04.309Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:04.312Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:04.335Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:06.137Z] [BOT] ✅ Posted message: Java Developer - Associate @ ORG_02281b3b Stanley in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T15:50:06.138Z] [BOT] 💾 Added channel posting: Java Developer - Associate @ ORG_02281b3b Stanley → location channel (2 total channels)
[2026-01-22T15:50:06.138Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:06.140Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:06.160Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:07.662Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
[2026-01-22T15:50:07.662Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:50:07.809Z] [BOT] ✅ Posted message: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #tech-jobs
  ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2026-01-22T15:50:07.810Z] [BOT] 💾 Added channel posting: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 → category channel (1 total channels)
[2026-01-22T15:50:07.810Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:07.813Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:07.837Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:09.340Z] [BOT] 📍 [ROUTING] "Software Engineer – Early Career" @ ORG_07b9fafa
[2026-01-22T15:50:09.340Z] [BOT] Category: TECH (matched: "software")
   Channel: tech-jobs (1462...4987)
[2026-01-22T15:50:09.644Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #tech-jobs
[2026-01-22T15:50:09.644Z] [BOT] ✅ Industry: Software Engineer – Early Career @ ORG_07b9fafa
[2026-01-22T15:50:09.644Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → category channel (2 total channels)
[2026-01-22T15:50:09.644Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:09.648Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:09.675Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:11.463Z] [BOT] ✅ Posted message: Software Engineer – Early Career @ ORG_07b9fafa in #JID_98d4f0de
  ✅ Location: JID_98d4f0de
[2026-01-22T15:50:11.464Z] [BOT] 💾 Added channel posting: Software Engineer – Early Career @ ORG_07b9fafa → location channel (2 total channels)
[2026-01-22T15:50:11.464Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:11.466Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:11.488Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:15.990Z] [BOT] 📌 Posting 4 jobs to #ai-jobs
[2026-01-22T15:50:15.992Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate" @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T15:50:15.992Z] [BOT] Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:50:16.265Z] [BOT] ✅ Posted message: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi in #ai-jobs
[2026-01-22T15:50:16.265Z] [BOT] ✅ Industry: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi
[2026-01-22T15:50:16.266Z] [BOT] 💾 Added channel posting: Postdoctoral Research Associate @ ORG_4b95ce62 A&M University - Corpus Christi → category channel (1 total channels)
[2026-01-22T15:50:16.266Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:16.268Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:16.288Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:17.791Z] [BOT] 📍 [ROUTING] "Technology - Application Development" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:50:18.032Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development @ ORG_e9591c52
[2026-01-22T15:50:18.032Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T15:50:18.032Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:18.034Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:18.054Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:19.899Z] [BOT] ✅ Posted message: Technology - Application Development @ ORG_e9591c52 in #JID_ead674af
  ✅ Location: JID_ead674af
[2026-01-22T15:50:19.899Z] [BOT] 💾 Added channel posting: Technology - Application Development @ ORG_e9591c52 → location channel (2 total channels)
💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:19.901Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:19.921Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:21.423Z] [BOT] 📍 [ROUTING] "Developer Technology Engineer – New College Grad - Public Sector" @ ORG_0890f456
   Category: AI (matched: "machine learning")
   Channel: ai-jobs (1462...9217)
[2026-01-22T15:50:21.423Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-22T15:50:21.595Z] [BOT] ✅ Posted message: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 in #ai-jobs
  ✅ Industry: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456
[2026-01-22T15:50:21.596Z] [BOT] 💾 Added channel posting: Developer Technology Engineer – New College Grad - Public Sector @ ORG_0890f456 → category channel (1 total channels)
[2026-01-22T15:50:21.596Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:21.598Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:21.618Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:23.119Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
   Category: AI (matched: "AI/ML")
[2026-01-22T15:50:23.120Z] [BOT] Channel: ai-jobs (1462...9217)
[2026-01-22T15:50:24.605Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #ai-jobs
  ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2026-01-22T15:50:24.605Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → category channel (2 total channels)
[2026-01-22T15:50:24.605Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:24.607Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:24.629Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:26.319Z] [BOT] ✅ Posted message: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #JID_ead674af
[2026-01-22T15:50:26.319Z] [BOT] ✅ Location: JID_ead674af
[2026-01-22T15:50:26.320Z] [BOT] 💾 Added channel posting: Technology - Application Development - Full Time Analyst @ ORG_e9591c52 → location channel (2 total channels)
[2026-01-22T15:50:26.320Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:26.322Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:26.342Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:30.843Z] [BOT] 📌 Posting 1 jobs to #finance-jobs
[2026-01-22T15:50:30.843Z] [BOT] 📍 [ROUTING] "Manager, GTM Finance" @ figma
[2026-01-22T15:50:30.843Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: finance-jobs (1462...4023)
[2026-01-22T15:50:31.039Z] [BOT] ✅ Posted message: Manager, GTM Finance @ figma in #finance-jobs
[2026-01-22T15:50:31.040Z] [BOT] ✅ Industry: Manager, GTM Finance @ figma
[2026-01-22T15:50:31.040Z] [BOT] 💾 Added channel posting: Manager, GTM Finance @ figma → category channel (1 total channels)
[2026-01-22T15:50:31.040Z] [BOT] 💾 BEFORE ARCHIVING: 3443 jobs in database
[2026-01-22T15:50:31.042Z] [BOT] ✅ No jobs to archive (all 3443 jobs within 7-day window)
[2026-01-22T15:50:31.063Z] [BOT] 💾 Saved posted_jobs.json: 3443 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-22T15:50:35.565Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-22T15:50:35.567Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-22T15:50:35.648Z] [BOT] 📂 Loaded 6631 existing routing entries
[2026-01-22T15:50:35.743Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-22T15:50:35.743Z] [BOT] Total entries: 6641
   Timestamp: 2026-01-22T15:50:35.711Z
[2026-01-22T15:50:35.744Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_bbd0a263.jsonl
   Total attempts: 15
   Successful: 15
   Failed: 0
   Skipped: 0
[2026-01-22T15:50:35.744Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-22T15:50:35.745Z] [BOT] Last cleanup: Never
   Total posts: 15
   Channels used: 5
   Top channels:
     1. #tech-jobs: 5 posts
     2. #ai-jobs: 4 posts
     3. #JID_ead674af: 3 posts
     4. #JID_98d4f0de: 2 posts
     5. #finance-jobs: 1 posts
[STATS] Channel stats saved
[2026-01-22T15:50:37.762Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2380) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*