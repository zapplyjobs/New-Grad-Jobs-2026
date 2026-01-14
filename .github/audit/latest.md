# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T22:27:40.373Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T22:26:49.568Z] ========================================
[2026-01-14T22:26:49.570Z] Discord Bot Execution Log
[2026-01-14T22:26:49.570Z] Environment: GitHub Actions
[2026-01-14T22:26:49.570Z] Node Version: v20.19.6
[2026-01-14T22:26:49.570Z] ========================================
[2026-01-14T22:26:49.570Z] Environment Variables Check:
[2026-01-14T22:26:49.570Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T22:26:49.571Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T22:26:49.571Z] 
Multi-Channel Configuration:
[2026-01-14T22:26:49.571Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T22:26:49.571Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T22:26:49.572Z] 
Data Files Check:
[2026-01-14T22:26:49.572Z] .github/data/new_jobs.json: ✅ Exists (10 items, 37540 bytes)
[2026-01-14T22:26:49.579Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 781266 bytes)
[2026-01-14T22:26:49.579Z] 
========================================
[2026-01-14T22:26:49.579Z] Starting Enhanced Discord Bot...
[2026-01-14T22:26:49.579Z] ========================================
[2026-01-14T22:26:50.108Z] [BOT] ✅ Loaded V2 database: 1466 jobs
[2026-01-14T22:26:50.584Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T22:26:50.584Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T22:26:50.584Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T22:26:50.707Z] [BOT] ✅ Loaded pending queue: 2730 total (2710 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Entry Configuration Management Engineering Technician at Amentum
[2026-01-14T22:26:50.709Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T22:26:50.709Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T22:26:50.710Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T22:26:50.710Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T22:26:50.711Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T22:26:50.716Z] [BOT] 📌 Posting 7 jobs to #💻・tech-jobs
[2026-01-14T22:26:50.716Z] [BOT] 📍 [ROUTING] "Entry Configuration Management Engineering Technician" @ ORG_f7a2cae4
[2026-01-14T22:26:50.716Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:26:50.733Z] [BOT ERROR] (node:2602) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T22:26:50.880Z] [BOT] ✅ Created forum post: 🏢 Entry Configuration Management Engineering Technician @ ORG_f7a2cae4 in #💻・tech-jobs
[2026-01-14T22:26:50.881Z] [BOT] ✅ Industry: Entry Configuration Management Engineering Technician @ ORG_f7a2cae4
[2026-01-14T22:26:52.626Z] [BOT] ✅ Created forum post: 🏢 Entry Configuration Management Engineering Technician @ ORG_f7a2cae4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T22:26:54.127Z] [BOT] 💾 Marked as posted: Entry Configuration Management Engineering Technician @ ORG_f7a2cae4 (instance #1)
[2026-01-14T22:26:54.127Z] [BOT] 💾 BEFORE ARCHIVING: 1467 jobs in database
[2026-01-14T22:26:54.129Z] [BOT] ✅ No jobs to archive (all 1467 jobs within 7-day window)
[2026-01-14T22:26:54.144Z] [BOT] 💾 Saved posted_jobs.json: 1467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:26:54.144Z] [BOT] 📍 [ROUTING] "Associate Software Support" @ DuCharme, McMillen & Associates
[2026-01-14T22:26:54.144Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:26:54.358Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support @ DuCharme, McMillen & Associates in #💻・tech-jobs
[2026-01-14T22:26:54.358Z] [BOT] ✅ Industry: Associate Software Support @ DuCharme, McMillen & Associates
[2026-01-14T22:26:56.174Z] [BOT] ✅ Created forum post: 🏢 Associate Software Support @ DuCharme, McMillen & Associates in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T22:26:57.674Z] [BOT] 💾 Marked as posted: Associate Software Support @ DuCharme, McMillen & Associates (instance #1)
[2026-01-14T22:26:57.674Z] [BOT] 💾 BEFORE ARCHIVING: 1468 jobs in database
[2026-01-14T22:26:57.675Z] [BOT] ✅ No jobs to archive (all 1468 jobs within 7-day window)
[2026-01-14T22:26:57.685Z] [BOT] 💾 Saved posted_jobs.json: 1468 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:26:57.686Z] [BOT] 📍 [ROUTING] "Product Engineer: System Performance Engineer" @ ORG_04c08645ins
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:26:57.833Z] [BOT] ✅ Created forum post: 🏢 Product Engineer: System Performance Engineer @ ORG_04c08645ins in #💻・tech-jobs
  ✅ Industry: Product Engineer: System Performance Engineer @ ORG_04c08645ins
[2026-01-14T22:26:59.487Z] [BOT] ✅ Created forum post: 🏢 Product Engineer: System Performance Engineer @ ORG_04c08645ins in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T22:27:00.988Z] [BOT] 💾 Marked as posted: Product Engineer: System Performance Engineer @ ORG_04c08645ins (instance #1)
[2026-01-14T22:27:00.988Z] [BOT] 💾 BEFORE ARCHIVING: 1469 jobs in database
[2026-01-14T22:27:00.989Z] [BOT] ✅ No jobs to archive (all 1469 jobs within 7-day window)
[2026-01-14T22:27:01.001Z] [BOT] 💾 Saved posted_jobs.json: 1469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:01.002Z] [BOT] 📍 [ROUTING] "Digital Tools Software Developer" @ ORG_04c08645ins
[2026-01-14T22:27:01.002Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:27:01.209Z] [BOT] ✅ Created forum post: 🏢 Digital Tools Software Developer @ ORG_04c08645ins in #💻・tech-jobs
  ✅ Industry: Digital Tools Software Developer @ ORG_04c08645ins
[2026-01-14T22:27:02.849Z] [BOT] ✅ Created forum post: 🏢 Digital Tools Software Developer @ ORG_04c08645ins in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T22:27:04.351Z] [BOT] 💾 Marked as posted: Digital Tools Software Developer @ ORG_04c08645ins (instance #1)
[2026-01-14T22:27:04.351Z] [BOT] 💾 BEFORE ARCHIVING: 1470 jobs in database
[2026-01-14T22:27:04.352Z] [BOT] ✅ No jobs to archive (all 1470 jobs within 7-day window)
[2026-01-14T22:27:04.363Z] [BOT] 💾 Saved posted_jobs.json: 1470 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:04.363Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Backend - New Grad" @ ORG_c2a520b8
   Category: TECH (matched: "software")
[2026-01-14T22:27:04.364Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:27:04.591Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - New Grad @ ORG_c2a520b8 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 - Backend - New Grad @ ORG_c2a520b8
[2026-01-14T22:27:06.283Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Backend - New Grad @ ORG_c2a520b8 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T22:27:07.783Z] [BOT] 💾 Marked as posted: Software Engineer 1 - Backend - New Grad @ ORG_c2a520b8 (instance #1)
[2026-01-14T22:27:07.784Z] [BOT] 💾 BEFORE ARCHIVING: 1471 jobs in database
[2026-01-14T22:27:07.785Z] [BOT] ✅ No jobs to archive (all 1471 jobs within 7-day window)
[2026-01-14T22:27:07.795Z] [BOT] 💾 Saved posted_jobs.json: 1471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:07.795Z] [BOT] 📍 [ROUTING] "Application Engineer - Drilling Solutions" @ ORG_dd730736
   Category: TECH (matched: "engineer/engineering")
[2026-01-14T22:27:07.795Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:27:07.939Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Drilling Solutions @ ORG_dd730736 in #💻・tech-jobs
  ✅ Industry: Application Engineer - Drilling Solutions @ ORG_dd730736
[2026-01-14T22:27:09.678Z] [BOT] ✅ Created forum post: 🏢 Application Engineer - Drilling Solutions @ ORG_dd730736 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T22:27:11.180Z] [BOT] 💾 Marked as posted: Application Engineer - Drilling Solutions @ ORG_dd730736 (instance #1)
[2026-01-14T22:27:11.180Z] [BOT] 💾 BEFORE ARCHIVING: 1472 jobs in database
[2026-01-14T22:27:11.181Z] [BOT] ✅ No jobs to archive (all 1472 jobs within 7-day window)
[2026-01-14T22:27:11.191Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:11.191Z] [BOT] 📍 [ROUTING] "Technical Associate" @ ORG_b1a04a15
   Category: TECH (default)
[2026-01-14T22:27:11.191Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T22:27:11.351Z] [BOT] ✅ Created forum post: 🏢 Technical Associate @ ORG_b1a04a15 in #💻・tech-jobs
  ✅ Industry: Technical Associate @ ORG_b1a04a15
[2026-01-14T22:27:12.991Z] [BOT] ✅ Created forum post: 🏢 Technical Associate @ ORG_b1a04a15 in #🤠・austin
  ✅ Location: 🤠・austin
[2026-01-14T22:27:14.491Z] [BOT] 💾 Marked as posted: Technical Associate @ ORG_b1a04a15 (instance #1)
💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-14T22:27:14.492Z] [BOT] ✅ No jobs to archive (all 1473 jobs within 7-day window)
[2026-01-14T22:27:14.502Z] [BOT] 💾 Saved posted_jobs.json: 1473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:17.503Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T22:27:17.503Z] [BOT] 📍 [ROUTING] "Marketing Science Analyst" @ ORG_a7dddf79 Partners
   Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T22:27:17.703Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst @ ORG_a7dddf79 Partners in #📣・marketing-jobs
  ✅ Industry: Marketing Science Analyst @ ORG_a7dddf79 Partners
[2026-01-14T22:27:19.598Z] [BOT] ✅ Created forum post: 🏢 Marketing Science Analyst @ ORG_a7dddf79 Partners in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-14T22:27:21.099Z] [BOT] 💾 Marked as posted: Marketing Science Analyst @ ORG_a7dddf79 Partners (instance #1)
[2026-01-14T22:27:21.099Z] [BOT] 💾 BEFORE ARCHIVING: 1474 jobs in database
[2026-01-14T22:27:21.100Z] [BOT] ✅ No jobs to archive (all 1474 jobs within 7-day window)
[2026-01-14T22:27:21.113Z] [BOT] 💾 Saved posted_jobs.json: 1474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:24.114Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T22:27:24.114Z] [BOT] 📍 [ROUTING] "Program Administrator - Community Centered Data Science" @ ORG_9d38443e of Chicago
[2026-01-14T22:27:24.114Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T22:27:24.313Z] [BOT] ✅ Created forum post: 🏢 Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago in #📈・JID_fb739488
  ✅ Industry: Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago
[2026-01-14T22:27:26.005Z] [BOT] ✅ Created forum post: 🏢 Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-14T22:27:27.506Z] [BOT] 💾 Marked as posted: Program Administrator - Community Centered Data Science @ ORG_9d38443e of Chicago (instance #1)
[2026-01-14T22:27:27.506Z] [BOT] 💾 BEFORE ARCHIVING: 1475 jobs in database
[2026-01-14T22:27:27.507Z] [BOT] ✅ No jobs to archive (all 1475 jobs within 7-day window)
[2026-01-14T22:27:27.519Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:30.520Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-14T22:27:30.520Z] [BOT] 📍 [ROUTING] "Software Engineer Backend/Platform Systems 1" @ ORG_aa669b28
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T22:27:30.521Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T22:27:30.824Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 in #🤖・ai-jobs
  ✅ Industry: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28
[2026-01-14T22:27:32.709Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-14T22:27:34.210Z] [BOT] 💾 Marked as posted: Software Engineer Backend/Platform Systems 1 @ ORG_aa669b28 (instance #1)
[2026-01-14T22:27:34.210Z] [BOT] 💾 BEFORE ARCHIVING: 1476 jobs in database
[2026-01-14T22:27:34.211Z] [BOT] ✅ No jobs to archive (all 1476 jobs within 7-day window)
[2026-01-14T22:27:34.226Z] [BOT] 💾 Saved posted_jobs.json: 1476 active jobs
[2026-01-14T22:27:34.229Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T22:27:37.227Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T22:27:37.227Z] [BOT] ⏭️  Skipping duplicate: JID_d65dab2e (posted within 7 days)
[2026-01-14T22:27:37.228Z] [BOT] ⏭️  Skipping duplicate: JID_048b3d97-support_req261 (posted within 7 days)
[2026-01-14T22:27:37.228Z] [BOT] ⏭️  Skipping duplicate: JID_353416e4-cx_1-job-2420763 (posted within 7 days)
[2026-01-14T22:27:37.228Z] [BOT] ⏭️  Skipping duplicate: JID_353416e4-cx_1-job-2422106 (posted within 7 days)
[2026-01-14T22:27:37.228Z] [BOT] ⏭️  Skipping duplicate: JID_a83dfa7e (posted within 7 days)
[2026-01-14T22:27:37.228Z] [BOT] ⏭️  Skipping duplicate: JID_322dc1e3-cx_4001-job-37785 (posted within 7 days)
[2026-01-14T22:27:37.228Z] [BOT] ⏭️  Skipping duplicate: JID_dea19e71 (posted within 7 days)
⏭️  Skipping duplicate: JID_6609d405-associate_119024 (posted within 7 days)
[2026-01-14T22:27:37.228Z] [BOT] ⏭️  Skipping duplicate: JID_e1745d04-science_jr32069 (posted within 7 days)
⏭️  Skipping duplicate: JID_e43f12d6 (posted within 7 days)
[2026-01-14T22:27:37.358Z] [BOT] ✅ Loaded pending queue: 2730 total (2710 pending, 20 enriched, 0 posted)
[2026-01-14T22:27:37.523Z] [BOT] ✅ Saved pending queue: 2730 total (2710 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T22:27:37.523Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T22:27:37.584Z] [BOT] 📂 Loaded 3605 existing routing entries
[2026-01-14T22:27:37.646Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 3615
[2026-01-14T22:27:37.647Z] [BOT] Timestamp: 2026-01-14T22:27:37.634Z
[2026-01-14T22:27:37.647Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
[2026-01-14T22:27:37.647Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T22:27:37.647Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T22:27:37.648Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 7 posts
     2. #💻・remote-usa: 5 posts
     3. #🗽・new-york: 2 posts
[2026-01-14T22:27:37.648Z] [BOT] 4. #🤠・austin: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-14T22:27:37.648Z] [BOT] [STATS] Channel stats saved
[2026-01-14T22:27:39.675Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2602) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*