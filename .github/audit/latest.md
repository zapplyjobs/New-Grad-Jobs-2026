# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T13:04:57.006Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 8
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T13:04:18.125Z] ========================================
[2026-01-03T13:04:18.127Z] Discord Bot Execution Log
[2026-01-03T13:04:18.127Z] Environment: GitHub Actions
[2026-01-03T13:04:18.127Z] Node Version: v20.19.6
[2026-01-03T13:04:18.127Z] ========================================
[2026-01-03T13:04:18.127Z] Environment Variables Check:
[2026-01-03T13:04:18.127Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T13:04:18.127Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.127Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T13:04:18.128Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T13:04:18.128Z] 
Multi-Channel Configuration:
[2026-01-03T13:04:18.128Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T13:04:18.128Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T13:04:18.128Z] 
Data Files Check:
[2026-01-03T13:04:18.130Z] .github/data/new_jobs.json: ✅ Exists (10 items, 175807 bytes)
[2026-01-03T13:04:18.132Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 248831 bytes)
[2026-01-03T13:04:18.132Z] 
========================================
[2026-01-03T13:04:18.132Z] Starting Enhanced Discord Bot...
[2026-01-03T13:04:18.132Z] ========================================
[2026-01-03T13:04:18.649Z] [BOT] ✅ Loaded V2 database: 473 jobs
[2026-01-03T13:04:19.326Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T13:04:19.326Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T13:04:19.326Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T13:04:19.330Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T13:04:19.399Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T13:04:19.489Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T13:04:19.491Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T13:04:19.492Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T13:04:19.492Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T13:04:19.493Z] [BOT] 📋 After multi-location grouping: 8 unique jobs to post
[2026-01-03T13:04:19.493Z] [BOT] (2 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Senior Software Engineer  @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
[2026-01-03T13:04:19.493Z] [BOT] 📤 Posting 8 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T13:04:19.496Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2026-01-03T13:04:19.497Z] [BOT] 📍 [ROUTING] "Senior Security Engineer - Threat Detection Engineering" @ datadog
[2026-01-03T13:04:19.497Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T13:04:19.502Z] [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T13:04:20.531Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer - Threat Detection Engineering @ datadog in #💻・tech-jobs
[2026-01-03T13:04:20.532Z] [BOT] ✅ Industry: Senior Security Engineer - Threat Detection Engineering @ datadog
[2026-01-03T13:04:22.496Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer - Threat Detection Engineering @ datadog in #🗽・new-york
[2026-01-03T13:04:22.496Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T13:04:23.996Z] [BOT] 💾 Marked as posted: Senior Security Engineer - Threat Detection Engineering @ datadog (instance #1)
[2026-01-03T13:04:23.997Z] [BOT] 💾 BEFORE ARCHIVING: 474 jobs in database
[2026-01-03T13:04:23.997Z] [BOT] ✅ No jobs to archive (all 474 jobs within 7-day window)
[2026-01-03T13:04:24.005Z] [BOT] 💾 Saved posted_jobs.json: 474 active jobs
[2026-01-03T13:04:24.005Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:24.006Z] [BOT] 📍 [ROUTING] "Senior Software Engineer " @ datadog
[2026-01-03T13:04:24.007Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T13:04:24.188Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer  @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer  @ datadog
[2026-01-03T13:04:25.864Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer  @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:04:27.365Z] [BOT] 💾 Marked as posted: Senior Software Engineer  @ datadog (instance #1)
[2026-01-03T13:04:27.365Z] [BOT] 💾 BEFORE ARCHIVING: 475 jobs in database
[2026-01-03T13:04:27.366Z] [BOT] ✅ No jobs to archive (all 475 jobs within 7-day window)
[2026-01-03T13:04:27.370Z] [BOT] 💾 Saved posted_jobs.json: 475 active jobs
[2026-01-03T13:04:27.370Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:27.370Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Distributed Systems @ datadog (instance #1)
[2026-01-03T13:04:27.370Z] [BOT] 💾 BEFORE ARCHIVING: 476 jobs in database
[2026-01-03T13:04:27.370Z] [BOT] ✅ No jobs to archive (all 476 jobs within 7-day window)
[2026-01-03T13:04:27.374Z] [BOT] 💾 Saved posted_jobs.json: 476 active jobs
[2026-01-03T13:04:27.374Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Senior Software Engineer - Frontend @ datadog (instance #1)
💾 BEFORE ARCHIVING: 477 jobs in database
[2026-01-03T13:04:27.375Z] [BOT] ✅ No jobs to archive (all 477 jobs within 7-day window)
[2026-01-03T13:04:27.378Z] [BOT] 💾 Saved posted_jobs.json: 477 active jobs
[2026-01-03T13:04:27.378Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:27.379Z] [BOT] 📍 [ROUTING] "Senior Staff Engineer - Event Platform Storage" @ datadog
[2026-01-03T13:04:27.380Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T13:04:27.591Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Engineer - Event Platform Storage @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Staff Engineer - Event Platform Storage @ datadog
[2026-01-03T13:04:29.287Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Engineer - Event Platform Storage @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:04:30.788Z] [BOT] 💾 Marked as posted: Senior Staff Engineer - Event Platform Storage @ datadog (instance #1)
[2026-01-03T13:04:30.788Z] [BOT] 💾 BEFORE ARCHIVING: 478 jobs in database
[2026-01-03T13:04:30.788Z] [BOT] ✅ No jobs to archive (all 478 jobs within 7-day window)
[2026-01-03T13:04:30.792Z] [BOT] 💾 Saved posted_jobs.json: 478 active jobs
[2026-01-03T13:04:30.792Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:30.792Z] [BOT] 📍 [ROUTING] "Senior Staff Software Engineer " @ datadog
[2026-01-03T13:04:30.792Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T13:04:30.968Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Software Engineer  @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Staff Software Engineer  @ datadog
[2026-01-03T13:04:32.589Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Software Engineer  @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:04:34.090Z] [BOT] 💾 Marked as posted: Senior Staff Software Engineer  @ datadog (instance #1)
[2026-01-03T13:04:34.090Z] [BOT] 💾 BEFORE ARCHIVING: 479 jobs in database
✅ No jobs to archive (all 479 jobs within 7-day window)
[2026-01-03T13:04:34.093Z] [BOT] 💾 Saved posted_jobs.json: 479 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:37.095Z] [BOT] 📌 Posting 4 jobs to #🤖・ai-jobs
[2026-01-03T13:04:37.096Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - AI Code Gen - Agent Engineer" @ datadog
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T13:04:37.096Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T13:04:37.389Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog
[2026-01-03T13:04:39.226Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:04:40.728Z] [BOT] 💾 Marked as posted: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog (instance #1)
[2026-01-03T13:04:40.728Z] [BOT] 💾 BEFORE ARCHIVING: 480 jobs in database
[2026-01-03T13:04:40.728Z] [BOT] ✅ No jobs to archive (all 480 jobs within 7-day window)
[2026-01-03T13:04:40.732Z] [BOT] 💾 Saved posted_jobs.json: 480 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:40.733Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - IDE AI Experiences - LLM Engineer" @ datadog
[2026-01-03T13:04:40.733Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T13:04:40.927Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog
[2026-01-03T13:04:42.639Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog in #🚌・boston
[2026-01-03T13:04:42.639Z] [BOT] ✅ Location: 🚌・boston
[2026-01-03T13:04:44.141Z] [BOT] 💾 Marked as posted: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog (instance #1)
[2026-01-03T13:04:44.141Z] [BOT] 💾 BEFORE ARCHIVING: 481 jobs in database
[2026-01-03T13:04:44.141Z] [BOT] ✅ No jobs to archive (all 481 jobs within 7-day window)
[2026-01-03T13:04:44.146Z] [BOT] 💾 Saved posted_jobs.json: 481 active jobs
[2026-01-03T13:04:44.146Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:44.146Z] [BOT] 📍 [ROUTING] "Senior Sourcer, Tech Recruiting - NYC" @ datadog
[2026-01-03T13:04:44.147Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T13:04:44.294Z] [BOT] ✅ Created forum post: 🏢 Senior Sourcer, Tech Recruiting - NYC @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Sourcer, Tech Recruiting - NYC @ datadog
[2026-01-03T13:04:46.005Z] [BOT] ✅ Created forum post: 🏢 Senior Sourcer, Tech Recruiting - NYC @ datadog in #🗽・new-york
[2026-01-03T13:04:46.005Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T13:04:47.505Z] [BOT] 💾 Marked as posted: Senior Sourcer, Tech Recruiting - NYC @ datadog (instance #1)
[2026-01-03T13:04:47.505Z] [BOT] 💾 BEFORE ARCHIVING: 482 jobs in database
[2026-01-03T13:04:47.506Z] [BOT] ✅ No jobs to archive (all 482 jobs within 7-day window)
[2026-01-03T13:04:47.510Z] [BOT] 💾 Saved posted_jobs.json: 482 active jobs
[2026-01-03T13:04:47.510Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:47.510Z] [BOT] 📍 [ROUTING] "Senior Staff GenAI Engineer - Application Performance Monitoring (APM)" @ datadog
[2026-01-03T13:04:47.511Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-03T13:04:47.511Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T13:04:47.939Z] [BOT] ✅ Created forum post: 🏢 Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog
[2026-01-03T13:04:49.617Z] [BOT] ✅ Created forum post: 🏢 Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:04:51.117Z] [BOT] 💾 Marked as posted: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog (instance #1)
[2026-01-03T13:04:51.118Z] [BOT] 💾 BEFORE ARCHIVING: 483 jobs in database
[2026-01-03T13:04:51.118Z] [BOT] ✅ No jobs to archive (all 483 jobs within 7-day window)
[2026-01-03T13:04:51.122Z] [BOT] 💾 Saved posted_jobs.json: 483 active jobs
[2026-01-03T13:04:51.122Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T13:04:54.122Z] [BOT] 🎉 Posting complete! Successfully posted: 8, Failed: 0
[2026-01-03T13:04:54.123Z] [BOT] ⏭️  Skipping duplicate: JID_07726501 (posted within 7 days)
[2026-01-03T13:04:54.123Z] [BOT] ⏭️  Skipping duplicate: JID_c766dee9 (posted within 7 days)
[2026-01-03T13:04:54.123Z] [BOT] ⏭️  Skipping duplicate: JID_de2effe2 (posted within 7 days)
⏭️  Skipping duplicate: JID_412cb049 (posted within 7 days)
[2026-01-03T13:04:54.123Z] [BOT] ⏭️  Skipping duplicate: JID_b9c3a482 (posted within 7 days)
[2026-01-03T13:04:54.123Z] [BOT] ⏭️  Skipping duplicate: JID_58f775e0 (posted within 7 days)
[2026-01-03T13:04:54.123Z] [BOT] ⏭️  Skipping duplicate: JID_d17c3a22 (posted within 7 days)
[2026-01-03T13:04:54.123Z] [BOT] ⏭️  Skipping duplicate: JID_45aad627 (posted within 7 days)
[2026-01-03T13:04:54.189Z] [BOT] ✅ Loaded pending queue: 815 total (795 pending, 20 enriched, 0 posted)
[2026-01-03T13:04:54.281Z] [BOT] ✅ Saved pending queue: 815 total (795 pending, 12 enriched, 8 posted)
📋 Updated queue: marked 8 jobs as posted
[2026-01-03T13:04:54.281Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T13:04:54.325Z] [BOT] 📂 Loaded 1462 existing routing entries
[2026-01-03T13:04:54.371Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 8
[2026-01-03T13:04:54.372Z] [BOT] Total entries: 1470
   Timestamp: 2026-01-03T13:04:54.365Z
[2026-01-03T13:04:54.372Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
   Total attempts: 16
   Successful: 16
   Failed: 0
   Skipped: 0
[2026-01-03T13:04:54.372Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-03T13:04:54.372Z] [BOT] Total posts: 16
   Channels used: 4
   Top channels:
     1. #🗽・new-york: 7 posts
     2. #💻・tech-jobs: 4 posts
     3. #🤖・ai-jobs: 4 posts
[2026-01-03T13:04:54.372Z] [BOT] 4. #🚌・boston: 1 posts
[2026-01-03T13:04:54.373Z] [BOT] [STATS] Channel stats saved
[2026-01-03T13:04:56.388Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2372) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*