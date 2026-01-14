# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T19:42:50.864Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T19:41:55.296Z] ========================================
[2026-01-14T19:41:55.298Z] Discord Bot Execution Log
[2026-01-14T19:41:55.298Z] Environment: GitHub Actions
[2026-01-14T19:41:55.298Z] Node Version: v20.19.6
[2026-01-14T19:41:55.298Z] ========================================
[2026-01-14T19:41:55.298Z] Environment Variables Check:
[2026-01-14T19:41:55.298Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T19:41:55.298Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.298Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T19:41:55.298Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T19:41:55.298Z] 
Multi-Channel Configuration:
[2026-01-14T19:41:55.298Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T19:41:55.299Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T19:41:55.299Z] 
Data Files Check:
[2026-01-14T19:41:55.300Z] .github/data/new_jobs.json: ✅ Exists (10 items, 90034 bytes)
[2026-01-14T19:41:55.305Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 736721 bytes)
[2026-01-14T19:41:55.306Z] 
========================================
[2026-01-14T19:41:55.306Z] Starting Enhanced Discord Bot...
[2026-01-14T19:41:55.306Z] ========================================
[2026-01-14T19:41:55.857Z] [BOT] ✅ Loaded V2 database: 1382 jobs
[2026-01-14T19:41:57.428Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T19:41:57.429Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T19:41:57.429Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T19:41:57.543Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Graduate Research Scientist in Code Generation at ByteDance
[2026-01-14T19:41:57.546Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T19:41:57.546Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T19:41:57.547Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T19:41:57.547Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T19:41:57.547Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T19:41:57.553Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-14T19:41:57.553Z] [BOT] 📍 [ROUTING] "Graduate Research Scientist in Code Generation" @ ORG_08c9a13c
   Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:41:57.570Z] [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T19:41:57.853Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist in Code Generation @ ORG_08c9a13c in #🤖・ai-jobs
  ✅ Industry: Graduate Research Scientist in Code Generation @ ORG_08c9a13c
[2026-01-14T19:41:59.570Z] [BOT] ✅ Created forum post: 🏢 Graduate Research Scientist in Code Generation @ ORG_08c9a13c in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:42:01.071Z] [BOT] 💾 Marked as posted: Graduate Research Scientist in Code Generation @ ORG_08c9a13c (instance #1)
[2026-01-14T19:42:01.071Z] [BOT] 💾 BEFORE ARCHIVING: 1383 jobs in database
[2026-01-14T19:42:01.072Z] [BOT] ✅ No jobs to archive (all 1383 jobs within 7-day window)
[2026-01-14T19:42:01.082Z] [BOT] 💾 Saved posted_jobs.json: 1383 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:01.082Z] [BOT] 📍 [ROUTING] "Assistant Professor" @ ORG_f186449d University
[2026-01-14T19:42:01.082Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-14T19:42:01.593Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f186449d University in #🤖・ai-jobs
[2026-01-14T19:42:01.594Z] [BOT] ✅ Industry: Assistant Professor @ ORG_f186449d University
[2026-01-14T19:42:03.277Z] [BOT] ✅ Created forum post: 🏢 Assistant Professor @ ORG_f186449d University in #💻・remote-usa
[2026-01-14T19:42:03.277Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T19:42:04.777Z] [BOT] 💾 Marked as posted: Assistant Professor @ ORG_f186449d University (instance #1)
💾 BEFORE ARCHIVING: 1384 jobs in database
[2026-01-14T19:42:04.778Z] [BOT] ✅ No jobs to archive (all 1384 jobs within 7-day window)
[2026-01-14T19:42:04.787Z] [BOT] 💾 Saved posted_jobs.json: 1384 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:04.787Z] [BOT] 📍 [ROUTING] "Assistant or Associate Research Professor" @ ORG_478e100e University
[2026-01-14T19:42:04.787Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:42:05.007Z] [BOT] ✅ Created forum post: 🏢 Assistant or Associate Research Professor @ ORG_478e100e University in #🤖・ai-jobs
[2026-01-14T19:42:05.008Z] [BOT] ✅ Industry: Assistant or Associate Research Professor @ ORG_478e100e University
[2026-01-14T19:42:06.810Z] [BOT] ✅ Created forum post: 🏢 Assistant or Associate Research Professor @ ORG_478e100e University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-14T19:42:08.311Z] [BOT] 💾 Marked as posted: Assistant or Associate Research Professor @ ORG_478e100e University (instance #1)
[2026-01-14T19:42:08.311Z] [BOT] 💾 BEFORE ARCHIVING: 1385 jobs in database
[2026-01-14T19:42:08.312Z] [BOT] ✅ No jobs to archive (all 1385 jobs within 7-day window)
[2026-01-14T19:42:08.323Z] [BOT] 💾 Saved posted_jobs.json: 1385 active jobs
[2026-01-14T19:42:08.323Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:11.323Z] [BOT] 📌 Posting 5 jobs to #💻・tech-jobs
[2026-01-14T19:42:11.324Z] [BOT] 📍 [ROUTING] "Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD" @ ORG_988ceb7c Pharmaceuticals
   Category: TECH (matched: "data")
[2026-01-14T19:42:11.324Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:42:11.587Z] [BOT] ✅ Created forum post: 🏢 Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuti in #💻・tech-jobs
  ✅ Industry: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals
[2026-01-14T19:42:15.366Z] [BOT] ✅ Created forum post: 🏢 Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuti in #🗽・new-york
[2026-01-14T19:42:15.367Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-14T19:42:16.867Z] [BOT] 💾 Marked as posted: Process Development Engineer 3 - Data Enablement and Analytics - DEA/PMPD @ ORG_988ceb7c Pharmaceuticals (instance #1)
[2026-01-14T19:42:16.868Z] [BOT] 💾 BEFORE ARCHIVING: 1386 jobs in database
[2026-01-14T19:42:16.869Z] [BOT] ✅ No jobs to archive (all 1386 jobs within 7-day window)
[2026-01-14T19:42:16.879Z] [BOT] 💾 Saved posted_jobs.json: 1386 active jobs
[2026-01-14T19:42:16.879Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:16.880Z] [BOT] 📍 [ROUTING] "Mathematician" @ ORG_dbcd5e7b & Wonder
[2026-01-14T19:42:16.880Z] [BOT] Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:42:17.114Z] [BOT] ✅ Created forum post: 🏢 Mathematician @ ORG_dbcd5e7b & Wonder in #💻・tech-jobs
[2026-01-14T19:42:17.114Z] [BOT] ✅ Industry: Mathematician @ ORG_dbcd5e7b & Wonder
[2026-01-14T19:42:18.851Z] [BOT] ✅ Created forum post: 🏢 Mathematician @ ORG_dbcd5e7b & Wonder in #💻・remote-usa
[2026-01-14T19:42:18.852Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-14T19:42:20.352Z] [BOT] 💾 Marked as posted: Mathematician @ ORG_dbcd5e7b & Wonder (instance #1)
[2026-01-14T19:42:20.353Z] [BOT] 💾 BEFORE ARCHIVING: 1387 jobs in database
[2026-01-14T19:42:20.354Z] [BOT] ✅ No jobs to archive (all 1387 jobs within 7-day window)
[2026-01-14T19:42:20.364Z] [BOT] 💾 Saved posted_jobs.json: 1387 active jobs
[2026-01-14T19:42:20.364Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:20.364Z] [BOT] 📍 [ROUTING] "Postdoctoral Fellow" @ ORG_9d38443e of Texas - Austin
   Category: TECH (default)
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:42:20.551Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #💻・tech-jobs
[2026-01-14T19:42:20.551Z] [BOT] ✅ Industry: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin
[2026-01-14T19:42:22.406Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin in #🤠・austin
[2026-01-14T19:42:22.407Z] [BOT] ✅ Location: 🤠・austin
[2026-01-14T19:42:23.907Z] [BOT] 💾 Marked as posted: Postdoctoral Fellow @ ORG_9d38443e of Texas - Austin (instance #1)
[2026-01-14T19:42:23.908Z] [BOT] 💾 BEFORE ARCHIVING: 1388 jobs in database
[2026-01-14T19:42:23.909Z] [BOT] ✅ No jobs to archive (all 1388 jobs within 7-day window)
[2026-01-14T19:42:23.918Z] [BOT] 💾 Saved posted_jobs.json: 1388 active jobs
[2026-01-14T19:42:23.918Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:23.918Z] [BOT] 📍 [ROUTING] "Software Engineer, Business Technology " @ anthropic
[2026-01-14T19:42:23.918Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:42:24.099Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Business Technology  @ anthropic in #💻・tech-jobs
[2026-01-14T19:42:24.099Z] [BOT] ✅ Industry: Software Engineer, Business Technology  @ anthropic
[2026-01-14T19:42:25.974Z] [BOT] ✅ Created forum post: 🏢 Software Engineer, Business Technology  @ anthropic in #🌉・san-francisco
[2026-01-14T19:42:25.974Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:42:27.475Z] [BOT] 💾 Marked as posted: Software Engineer, Business Technology  @ anthropic (instance #1)
[2026-01-14T19:42:27.475Z] [BOT] 💾 BEFORE ARCHIVING: 1389 jobs in database
[2026-01-14T19:42:27.476Z] [BOT] ✅ No jobs to archive (all 1389 jobs within 7-day window)
[2026-01-14T19:42:27.486Z] [BOT] 💾 Saved posted_jobs.json: 1389 active jobs
[2026-01-14T19:42:27.486Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:27.486Z] [BOT] 📍 [ROUTING] "AI Platform Security Engineer" @ anthropic
[2026-01-14T19:42:27.487Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:42:28.041Z] [BOT] ✅ Created forum post: 🏢 AI Platform Security Engineer @ anthropic in #💻・tech-jobs
[2026-01-14T19:42:28.041Z] [BOT] ✅ Industry: AI Platform Security Engineer @ anthropic
[2026-01-14T19:42:29.809Z] [BOT] ✅ Created forum post: 🏢 AI Platform Security Engineer @ anthropic in #🌉・san-francisco
[2026-01-14T19:42:29.810Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:42:31.310Z] [BOT] 💾 Marked as posted: AI Platform Security Engineer @ anthropic (instance #1)
[2026-01-14T19:42:31.310Z] [BOT] 💾 BEFORE ARCHIVING: 1390 jobs in database
[2026-01-14T19:42:31.311Z] [BOT] ✅ No jobs to archive (all 1390 jobs within 7-day window)
[2026-01-14T19:42:31.320Z] [BOT] 💾 Saved posted_jobs.json: 1390 active jobs
[2026-01-14T19:42:31.320Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:34.321Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T19:42:34.322Z] [BOT] 📍 [ROUTING] "FTIR Field Scientist - Air Emissions" @ ORG_0ac6b9bc Environmental Group
[2026-01-14T19:42:34.322Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T19:42:34.664Z] [BOT] ✅ Created forum post: 🏢 FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group in #📣・marketing-jobs
[2026-01-14T19:42:34.665Z] [BOT] ✅ Industry: FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group
[2026-01-14T19:42:36.399Z] [BOT] ✅ Created forum post: 🏢 FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group in #🌆・chicago
[2026-01-14T19:42:36.399Z] [BOT] ✅ Location: 🌆・chicago
[2026-01-14T19:42:37.899Z] [BOT] 💾 Marked as posted: FTIR Field Scientist - Air Emissions @ ORG_0ac6b9bc Environmental Group (instance #1)
[2026-01-14T19:42:37.899Z] [BOT] 💾 BEFORE ARCHIVING: 1391 jobs in database
[2026-01-14T19:42:37.900Z] [BOT] ✅ No jobs to archive (all 1391 jobs within 7-day window)
[2026-01-14T19:42:37.911Z] [BOT] 💾 Saved posted_jobs.json: 1391 active jobs
[2026-01-14T19:42:37.911Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:40.911Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-14T19:42:40.912Z] [BOT] 📍 [ROUTING] "Capacity Engineer, Compute" @ anthropic
[2026-01-14T19:42:40.912Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-14T19:42:41.267Z] [BOT] ✅ Created forum post: 🏢 Capacity Engineer, Compute @ anthropic in #📈・JID_fb739488
  ✅ Industry: Capacity Engineer, Compute @ anthropic
[2026-01-14T19:42:43.037Z] [BOT] ✅ Created forum post: 🏢 Capacity Engineer, Compute @ anthropic in #🌉・san-francisco
[2026-01-14T19:42:43.037Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:42:44.539Z] [BOT] 💾 Marked as posted: Capacity Engineer, Compute @ anthropic (instance #1)
[2026-01-14T19:42:44.539Z] [BOT] 💾 BEFORE ARCHIVING: 1392 jobs in database
[2026-01-14T19:42:44.540Z] [BOT] ✅ No jobs to archive (all 1392 jobs within 7-day window)
[2026-01-14T19:42:44.550Z] [BOT] 💾 Saved posted_jobs.json: 1392 active jobs
[2026-01-14T19:42:44.550Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-14T19:42:47.551Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T19:42:47.552Z] [BOT] ⏭️  Skipping duplicate: JID_95ce1ea3-CH_a4f688c9-detail (posted within 7 days)
[2026-01-14T19:42:47.552Z] [BOT] ⏭️  Skipping duplicate: JID_d089d358-_r43767 (posted within 7 days)
[2026-01-14T19:42:47.552Z] [BOT] ⏭️  Skipping duplicate: JID_e824c1e0-mathematician_r320859 (posted within 7 days)
[2026-01-14T19:42:47.552Z] [BOT] ⏭️  Skipping duplicate: JID_8a21a0c2-_r7552 (posted within 7 days)
[2026-01-14T19:42:47.552Z] [BOT] ⏭️  Skipping duplicate: JID_efc4dd0b-professor_jr107320-1 (posted within 7 days)
[2026-01-14T19:42:47.552Z] [BOT] ⏭️  Skipping duplicate: JID_f063c34f-fellow_r_00030888 (posted within 7 days)
[2026-01-14T19:42:47.553Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_academic-JID_48d156cc-institute_req_0000073124-2 (posted within 7 days)
[2026-01-14T19:42:47.553Z] [BOT] ⏭️  Skipping duplicate: JID_d0f6433e (posted within 7 days)
[2026-01-14T19:42:47.553Z] [BOT] ⏭️  Skipping duplicate: JID_ec5b0019 (posted within 7 days)
[2026-01-14T19:42:47.553Z] [BOT] ⏭️  Skipping duplicate: JID_12cf4757 (posted within 7 days)
[2026-01-14T19:42:47.679Z] [BOT] ✅ Loaded pending queue: 2732 total (2712 pending, 20 enriched, 0 posted)
[2026-01-14T19:42:47.832Z] [BOT] ✅ Saved pending queue: 2732 total (2712 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
[2026-01-14T19:42:47.832Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-14T19:42:47.885Z] [BOT] 📂 Loaded 3515 existing routing entries
[2026-01-14T19:42:47.944Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T19:42:47.945Z] [BOT] Total entries: 3525
   Timestamp: 2026-01-14T19:42:47.930Z
[2026-01-14T19:42:47.945Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
[2026-01-14T19:42:47.945Z] [BOT] Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T19:42:47.945Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T19:42:47.946Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
     1. #💻・tech-jobs: 5 posts
     2. #🌉・san-francisco: 4 posts
[2026-01-14T19:42:47.946Z] [BOT] 3. #🤖・ai-jobs: 3 posts
     4. #💻・remote-usa: 3 posts
     5. #🗽・new-york: 1 posts
[2026-01-14T19:42:47.946Z] [BOT] [STATS] Channel stats saved
[2026-01-14T19:42:49.971Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2469) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*