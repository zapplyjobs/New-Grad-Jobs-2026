# Discord Bot Execution Audit
**Timestamp:** 2025-12-16T05:51:20.485Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 6
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-16T05:50:45.292Z] ========================================
[2025-12-16T05:50:45.293Z] Discord Bot Execution Log
[2025-12-16T05:50:45.293Z] Environment: GitHub Actions
[2025-12-16T05:50:45.293Z] Node Version: v20.19.6
[2025-12-16T05:50:45.293Z] ========================================
[2025-12-16T05:50:45.293Z] Environment Variables Check:
[2025-12-16T05:50:45.293Z] DISCORD_TOKEN: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-16T05:50:45.294Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-16T05:50:45.294Z] 
Multi-Channel Configuration:
[2025-12-16T05:50:45.294Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-16T05:50:45.294Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-16T05:50:45.294Z] 
Data Files Check:
[2025-12-16T05:50:45.295Z] .github/data/new_jobs.json: ✅ Exists (10 items, 51309 bytes)
[2025-12-16T05:50:45.296Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 179932 bytes)
[2025-12-16T05:50:45.296Z] 
========================================
[2025-12-16T05:50:45.296Z] Starting Enhanced Discord Bot...
[2025-12-16T05:50:45.296Z] ========================================
[2025-12-16T05:50:45.746Z] [BOT] ✅ Loaded V2 database: 285 jobs
[2025-12-16T05:50:46.471Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-16T05:50:46.471Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-16T05:50:46.471Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-16T05:50:46.472Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-16T05:50:46.531Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2025-12-16T05:50:46.594Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 199
[2025-12-16T05:50:46.595Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2025-12-16T05:50:46.596Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2025-12-16T05:50:46.596Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2025-12-16T05:50:46.596Z] [BOT] 📋 After multi-location grouping: 6 unique jobs to post
   (4 grouped as same job with different locations)
[2025-12-16T05:50:46.597Z] [BOT] ⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 6 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-16T05:50:46.598Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-16T05:50:46.599Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_1954b120
   Category: TECH (matched: "software")
[2025-12-16T05:50:46.599Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-16T05:50:46.618Z] [BOT ERROR] (node:3299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-16T05:50:47.604Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1954b120 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_1954b120
[2025-12-16T05:50:49.352Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1954b120 in #🌆・chicago
[2025-12-16T05:50:49.352Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-16T05:50:50.853Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_1954b120 (instance #1)
[2025-12-16T05:50:50.853Z] [BOT] 💾 BEFORE ARCHIVING: 286 jobs in database
[2025-12-16T05:50:50.854Z] [BOT] ✅ No jobs to archive (all 286 jobs within 7-day window)
[2025-12-16T05:50:50.859Z] [BOT] 💾 Saved posted_jobs.json: 286 active jobs
[2025-12-16T05:50:50.860Z] [BOT] ✅ Verified: Database file matches in-memory state
[2025-12-16T05:50:53.860Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2025-12-16T05:50:53.862Z] [BOT] 📍 [ROUTING] "Research Analyst - Research Analyst Program" @ ORG_93202df2 Monetary Fund
   Category: DATA-SCIENCE (matched: "data science")
[2025-12-16T05:50:53.862Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
[2025-12-16T05:50:54.119Z] [BOT] ✅ Created forum post: 🏢 Research Analyst - Research Analyst Program @ ORG_93202df2 Monetary Fund in #📈・JID_fb739488
  ✅ Industry: Research Analyst - Research Analyst Program @ ORG_93202df2 Monetary Fund
[2025-12-16T05:50:55.883Z] [BOT] ✅ Created forum post: 🏢 Research Analyst - Research Analyst Program @ ORG_93202df2 Monetary Fund in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:50:57.384Z] [BOT] 💾 Marked as posted: Research Analyst - Research Analyst Program @ ORG_93202df2 Monetary Fund (instance #1)
[2025-12-16T05:50:57.384Z] [BOT] 💾 BEFORE ARCHIVING: 287 jobs in database
[2025-12-16T05:50:57.384Z] [BOT] ✅ No jobs to archive (all 287 jobs within 7-day window)
[2025-12-16T05:50:57.387Z] [BOT] 💾 Saved posted_jobs.json: 287 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:51:00.389Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2025-12-16T05:51:00.389Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee" @ ORG_a867f63f National Laboratory
   Category: AI (matched: "machine learning")
[2025-12-16T05:51:00.389Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T05:51:00.607Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Appointee @ ORG_a867f63f National Laboratory
[2025-12-16T05:51:02.360Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee @ ORG_a867f63f National Laboratory in #🌆・chicago
[2025-12-16T05:51:02.360Z] [BOT] ✅ Location: 🌆・chicago
[2025-12-16T05:51:03.862Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-16T05:51:03.862Z] [BOT] 💾 BEFORE ARCHIVING: 288 jobs in database
[2025-12-16T05:51:03.862Z] [BOT] ✅ No jobs to archive (all 288 jobs within 7-day window)
[2025-12-16T05:51:03.865Z] [BOT] 💾 Saved posted_jobs.json: 288 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:51:03.865Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Carbon/Graphite Reuse @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-16T05:51:03.866Z] [BOT] 💾 BEFORE ARCHIVING: 289 jobs in database
[2025-12-16T05:51:03.866Z] [BOT] ✅ No jobs to archive (all 289 jobs within 7-day window)
[2025-12-16T05:51:03.869Z] [BOT] 💾 Saved posted_jobs.json: 289 active jobs
[2025-12-16T05:51:03.869Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Postdoctoral Appointee @ ORG_a867f63f National Laboratory (instance #1)
💾 BEFORE ARCHIVING: 290 jobs in database
[2025-12-16T05:51:03.869Z] [BOT] ✅ No jobs to archive (all 290 jobs within 7-day window)
[2025-12-16T05:51:03.872Z] [BOT] 💾 Saved posted_jobs.json: 290 active jobs
[2025-12-16T05:51:03.872Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Postdoctoral Appointee - Electron Microscopy for Microelectronics @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-16T05:51:03.872Z] [BOT] 💾 BEFORE ARCHIVING: 291 jobs in database
[2025-12-16T05:51:03.873Z] [BOT] ✅ No jobs to archive (all 291 jobs within 7-day window)
[2025-12-16T05:51:03.875Z] [BOT] 💾 Saved posted_jobs.json: 291 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:51:03.876Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - Medium Energy Physics @ ORG_a867f63f National Laboratory (instance #1)
💾 BEFORE ARCHIVING: 292 jobs in database
[2025-12-16T05:51:03.876Z] [BOT] ✅ No jobs to archive (all 292 jobs within 7-day window)
[2025-12-16T05:51:03.879Z] [BOT] 💾 Saved posted_jobs.json: 292 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:51:03.880Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials" @ ORG_a867f63f National Laboratory
[2025-12-16T05:51:03.880Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2025-12-16T05:51:04.158Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Lab in #🤖・ai-jobs
[2025-12-16T05:51:04.158Z] [BOT] ✅ Industry: Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Laboratory
[2025-12-16T05:51:05.909Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Lab in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T05:51:07.410Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee: Physics-Informed AI for Microelectronics Materials @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-16T05:51:07.410Z] [BOT] 💾 BEFORE ARCHIVING: 293 jobs in database
[2025-12-16T05:51:07.411Z] [BOT] ✅ No jobs to archive (all 293 jobs within 7-day window)
[2025-12-16T05:51:07.414Z] [BOT] 💾 Saved posted_jobs.json: 293 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:51:07.415Z] [BOT] 📍 [ROUTING] "Postdoctoral Appointee - AI for Coherent X-ray Imaging" @ ORG_a867f63f National Laboratory
   Category: AI (matched: "machine learning")
[2025-12-16T05:51:07.415Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2025-12-16T05:51:07.620Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory in #🤖・ai-jobs
[2025-12-16T05:51:07.620Z] [BOT] ✅ Industry: Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory
[2025-12-16T05:51:09.335Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-16T05:51:10.835Z] [BOT] 💾 Marked as posted: Postdoctoral Appointee - AI for Coherent X-ray Imaging @ ORG_a867f63f National Laboratory (instance #1)
[2025-12-16T05:51:10.835Z] [BOT] 💾 BEFORE ARCHIVING: 294 jobs in database
[2025-12-16T05:51:10.835Z] [BOT] ✅ No jobs to archive (all 294 jobs within 7-day window)
[2025-12-16T05:51:10.839Z] [BOT] 💾 Saved posted_jobs.json: 294 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:51:10.840Z] [BOT] 📍 [ROUTING] "Postdoctoral Associate" @ ORG_9d38443e of Maryland - College Park
[2025-12-16T05:51:10.840Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2025-12-16T05:51:11.128Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park
[2025-12-16T05:51:12.806Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-16T05:51:14.308Z] [BOT] 💾 Marked as posted: Postdoctoral Associate @ ORG_9d38443e of Maryland - College Park (instance #1)
[2025-12-16T05:51:14.308Z] [BOT] 💾 BEFORE ARCHIVING: 295 jobs in database
[2025-12-16T05:51:14.308Z] [BOT] ✅ No jobs to archive (all 295 jobs within 7-day window)
[2025-12-16T05:51:14.312Z] [BOT] 💾 Saved posted_jobs.json: 295 active jobs
✅ Verified: Database file matches in-memory state
[2025-12-16T05:51:17.312Z] [BOT] 🎉 Posting complete! Successfully posted: 6, Failed: 0
[2025-12-16T05:51:17.312Z] [BOT] ⏭️  Skipping duplicate: JID_a77af31a-engineer_315814-2 (posted within 7 days)
[2025-12-16T05:51:17.313Z] [BOT] ⏭️  Skipping duplicate: JID_4b3e801e-_25-r8530 (posted within 7 days)
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_08c7c02a-dynamics_421104 (posted within 7 days)
[2025-12-16T05:51:17.313Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_607bd7bd-materials_421205 (posted within 7 days)
[2025-12-16T05:51:17.313Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_c7b98a53-imaging_421292-1 (posted within 7 days)
[2025-12-16T05:51:17.313Z] [BOT] ⏭️  Skipping duplicate: JID_59bd0186-associate_jr100715 (posted within 7 days)
[2025-12-16T05:51:17.317Z] [BOT] ✅ Loaded pending queue: 593 total (573 pending, 20 enriched, 0 posted)
[2025-12-16T05:51:17.324Z] [BOT] ✅ Saved pending queue: 593 total (573 pending, 14 enriched, 6 posted)
📋 Updated queue: marked 6 jobs as posted
[2025-12-16T05:51:17.325Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-16T05:51:17.364Z] [BOT] 📂 Loaded 278 existing routing entries
[2025-12-16T05:51:17.401Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 6
   Total entries: 284
[2025-12-16T05:51:17.401Z] [BOT] Timestamp: 2025-12-16T05:51:17.400Z
[2025-12-16T05:51:17.401Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_c84b28cb.jsonl
[2025-12-16T05:51:17.401Z] [BOT] Total attempts: 12
   Successful: 12
   Failed: 0
   Skipped: 0
[2025-12-16T05:51:19.411Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*