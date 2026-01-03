# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T13:41:22.934Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T13:40:58.394Z] ========================================
[2026-01-03T13:40:58.395Z] Discord Bot Execution Log
[2026-01-03T13:40:58.395Z] Environment: GitHub Actions
[2026-01-03T13:40:58.395Z] Node Version: v20.19.6
[2026-01-03T13:40:58.395Z] ========================================
[2026-01-03T13:40:58.396Z] Environment Variables Check:
[2026-01-03T13:40:58.396Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T13:40:58.396Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T13:40:58.396Z] 
Multi-Channel Configuration:
[2026-01-03T13:40:58.396Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T13:40:58.396Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T13:40:58.396Z] 
Data Files Check:
[2026-01-03T13:40:58.398Z] .github/data/new_jobs.json: ✅ Exists (10 items, 166806 bytes)
[2026-01-03T13:40:58.400Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 258365 bytes)
[2026-01-03T13:40:58.400Z] 
========================================
[2026-01-03T13:40:58.400Z] Starting Enhanced Discord Bot...
[2026-01-03T13:40:58.400Z] ========================================
[2026-01-03T13:40:58.848Z] [BOT] ✅ Loaded V2 database: 493 jobs
[2026-01-03T13:40:59.906Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T13:40:59.907Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T13:40:59.907Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T13:40:59.911Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T13:40:59.985Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T13:41:00.069Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T13:41:00.071Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T13:41:00.071Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T13:41:00.072Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T13:41:00.072Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
   (7 grouped as same job with different locations)
[2026-01-03T13:41:00.072Z] [BOT] 📍 2 jobs with multiple locations:
   - Staff Software Engineer - ML Observability @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
   - Strategic Account Executive @ datadog: new york, new york, usa, chicago, illinois, usa, remote
⏸️ Limiting to 10 jobs this run, 7 deferred for next run
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T13:41:00.074Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-03T13:41:00.075Z] [BOT] 📍 [ROUTING] "Staff Software Engineer - ML Observability" @ datadog
[2026-01-03T13:41:00.076Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-03T13:41:00.080Z] [BOT ERROR] (node:2452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T13:41:00.321Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - ML Observability @ datadog in #🤖・ai-jobs
[2026-01-03T13:41:00.322Z] [BOT] ✅ Industry: Staff Software Engineer - ML Observability @ datadog
[2026-01-03T13:41:02.025Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer - ML Observability @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:41:03.527Z] [BOT] 💾 Marked as posted: Staff Software Engineer - ML Observability @ datadog (instance #1)
[2026-01-03T13:41:03.527Z] [BOT] 💾 BEFORE ARCHIVING: 494 jobs in database
[2026-01-03T13:41:03.527Z] [BOT] ✅ No jobs to archive (all 494 jobs within 7-day window)
[2026-01-03T13:41:03.535Z] [BOT] 💾 Saved posted_jobs.json: 494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:03.535Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Query Experience @ datadog (instance #1)
[2026-01-03T13:41:03.535Z] [BOT] 💾 BEFORE ARCHIVING: 495 jobs in database
[2026-01-03T13:41:03.536Z] [BOT] ✅ No jobs to archive (all 495 jobs within 7-day window)
[2026-01-03T13:41:03.541Z] [BOT] 💾 Saved posted_jobs.json: 495 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:03.541Z] [BOT] 💾 Marked as posted: Staff Software Engineer - Workflow Engine @ datadog (instance #1)
💾 BEFORE ARCHIVING: 496 jobs in database
[2026-01-03T13:41:03.541Z] [BOT] ✅ No jobs to archive (all 496 jobs within 7-day window)
[2026-01-03T13:41:03.545Z] [BOT] 💾 Saved posted_jobs.json: 496 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:06.545Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-03T13:41:06.546Z] [BOT] 📍 [ROUTING] "Staff Statistics Engineer - Feature Flagging and Experimentation" @ datadog
[2026-01-03T13:41:06.546Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-03T13:41:06.804Z] [BOT] ✅ Created forum post: 🏢 Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog in #📈・JID_fb739488
[2026-01-03T13:41:06.804Z] [BOT] ✅ Industry: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog
[2026-01-03T13:41:08.510Z] [BOT] ✅ Created forum post: 🏢 Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog in #🗽・new-york
[2026-01-03T13:41:08.510Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-03T13:41:10.012Z] [BOT] 💾 Marked as posted: Staff Statistics Engineer - Feature Flagging and Experimentation @ datadog (instance #1)
💾 BEFORE ARCHIVING: 497 jobs in database
[2026-01-03T13:41:10.012Z] [BOT] ✅ No jobs to archive (all 497 jobs within 7-day window)
[2026-01-03T13:41:10.017Z] [BOT] 💾 Saved posted_jobs.json: 497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:13.017Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-03T13:41:13.019Z] [BOT] 📍 [ROUTING] "Strategic Account Executive" @ datadog
   Category: SALES (matched: "sales")
[2026-01-03T13:41:13.019Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T13:41:13.324Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #💲・sales-jobs
  ✅ Industry: Strategic Account Executive @ datadog
[2026-01-03T13:41:15.087Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-03T13:41:16.588Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 498 jobs in database
[2026-01-03T13:41:16.588Z] [BOT] ✅ No jobs to archive (all 498 jobs within 7-day window)
[2026-01-03T13:41:16.593Z] [BOT] 💾 Saved posted_jobs.json: 498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:16.593Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 499 jobs in database
[2026-01-03T13:41:16.594Z] [BOT] ✅ No jobs to archive (all 499 jobs within 7-day window)
[2026-01-03T13:41:16.597Z] [BOT] 💾 Saved posted_jobs.json: 499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:16.597Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 500 jobs in database
[2026-01-03T13:41:16.598Z] [BOT] ✅ No jobs to archive (all 500 jobs within 7-day window)
[2026-01-03T13:41:16.601Z] [BOT] 💾 Saved posted_jobs.json: 500 active jobs
[2026-01-03T13:41:16.601Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 501 jobs in database
[2026-01-03T13:41:16.602Z] [BOT] ✅ No jobs to archive (all 501 jobs within 7-day window)
[2026-01-03T13:41:16.605Z] [BOT] 💾 Saved posted_jobs.json: 501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:16.605Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 502 jobs in database
[2026-01-03T13:41:16.606Z] [BOT] ✅ No jobs to archive (all 502 jobs within 7-day window)
[2026-01-03T13:41:16.610Z] [BOT] 💾 Saved posted_jobs.json: 502 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:16.610Z] [BOT] 💾 Marked as posted: Strategic Account Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 503 jobs in database
[2026-01-03T13:41:16.610Z] [BOT] ✅ No jobs to archive (all 503 jobs within 7-day window)
[2026-01-03T13:41:16.615Z] [BOT] 💾 Saved posted_jobs.json: 503 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T13:41:19.615Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-03T13:41:19.615Z] [BOT] ⏭️  Skipping duplicate: JID_de59413d (posted within 7 days)
[2026-01-03T13:41:19.615Z] [BOT] ⏭️  Skipping duplicate: JID_bda667dc (posted within 7 days)
[2026-01-03T13:41:19.615Z] [BOT] ⏭️  Skipping duplicate: JID_64f241d9 (posted within 7 days)
[2026-01-03T13:41:19.695Z] [BOT] ✅ Loaded pending queue: 796 total (776 pending, 20 enriched, 0 posted)
[2026-01-03T13:41:19.781Z] [BOT] ✅ Saved pending queue: 796 total (776 pending, 17 enriched, 3 posted)
📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-03T13:41:19.829Z] [BOT] 📂 Loaded 1478 existing routing entries
[2026-01-03T13:41:19.873Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 1481
   Timestamp: 2026-01-03T13:41:19.868Z
[2026-01-03T13:41:19.874Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T13:41:19.874Z] [BOT] Total attempts: 6
   Successful: 6
   Failed: 0
   Skipped: 0
[2026-01-03T13:41:19.874Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-03T13:41:19.874Z] [BOT] Last cleanup: Never
   Total posts: 6
   Channels used: 4
   Top channels:
     1. #🗽・new-york: 3 posts
[2026-01-03T13:41:19.874Z] [BOT] 2. #🤖・ai-jobs: 1 posts
     3. #📈・JID_fb739488: 1 posts
     4. #💲・sales-jobs: 1 posts
[2026-01-03T13:41:19.874Z] [BOT] [STATS] Channel stats saved
[2026-01-03T13:41:21.889Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*