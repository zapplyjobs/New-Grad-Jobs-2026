# Discord Bot Execution Audit
**Timestamp:** 2026-01-12T21:40:48.228Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-12T21:39:47.391Z] ========================================
[2026-01-12T21:39:47.393Z] Discord Bot Execution Log
[2026-01-12T21:39:47.393Z] Environment: GitHub Actions
[2026-01-12T21:39:47.393Z] Node Version: v20.19.6
[2026-01-12T21:39:47.393Z] ========================================
[2026-01-12T21:39:47.393Z] Environment Variables Check:
[2026-01-12T21:39:47.393Z] DISCORD_TOKEN: ✅ Set
[2026-01-12T21:39:47.393Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-12T21:39:47.394Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-12T21:39:47.394Z] 
Multi-Channel Configuration:
[2026-01-12T21:39:47.394Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-12T21:39:47.394Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-12T21:39:47.394Z] 
Data Files Check:
[2026-01-12T21:39:47.396Z] .github/data/new_jobs.json: ✅ Exists (10 items, 176281 bytes)
[2026-01-12T21:39:47.398Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 286258 bytes)
[2026-01-12T21:39:47.398Z] 
========================================
[2026-01-12T21:39:47.398Z] Starting Enhanced Discord Bot...
[2026-01-12T21:39:47.398Z] ========================================
[2026-01-12T21:39:47.929Z] [BOT] ✅ Loaded V2 database: 525 jobs
[2026-01-12T21:39:48.596Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-12T21:39:48.597Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-12T21:39:48.597Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-12T21:39:48.717Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Security Engineer, Data Security at datadog
[2026-01-12T21:39:48.718Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-12T21:39:48.718Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-12T21:39:48.718Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-12T21:39:48.719Z] [BOT] 📋 After multi-location grouping: 15 unique jobs to post
[2026-01-12T21:39:48.719Z] [BOT] (5 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Senior Software Engineer  @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
   - Staff Software Engineer @ datadog: boston, massachusetts, usa; new york, new york, usa, new york, new york, usa
⏸️ Limiting to 10 jobs this run, 10 deferred for next run
[2026-01-12T21:39:48.719Z] [BOT] 📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-12T21:39:48.724Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-12T21:39:48.724Z] [BOT] 📍 [ROUTING] "Senior Security Engineer, Data Security" @ datadog
[2026-01-12T21:39:48.724Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-12T21:39:48.729Z] [BOT ERROR] (node:2436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-12T21:39:50.627Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer, Data Security @ datadog in #📈・JID_fb739488
  ✅ Industry: Senior Security Engineer, Data Security @ datadog
[2026-01-12T21:39:52.410Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer, Data Security @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:39:53.911Z] [BOT] 💾 Marked as posted: Senior Security Engineer, Data Security @ datadog (instance #1)
[2026-01-12T21:39:53.911Z] [BOT] 💾 BEFORE ARCHIVING: 526 jobs in database
[2026-01-12T21:39:53.912Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-12T21:39:53.917Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-12T21:39:53.918Z] [BOT] ✅ Archiving complete: 1 archived, 525 active
[2026-01-12T21:39:53.924Z] [BOT] 💾 Saved posted_jobs.json: 525 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:39:56.925Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-12T21:39:56.926Z] [BOT] 📍 [ROUTING] "Senior Software Engineer " @ datadog
   Category: TECH (matched: "software")
[2026-01-12T21:39:56.926Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T21:39:57.141Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer  @ datadog in #💻・tech-jobs
[2026-01-12T21:39:57.141Z] [BOT] ✅ Industry: Senior Software Engineer  @ datadog
[2026-01-12T21:39:58.927Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer  @ datadog in #🗽・new-york
[2026-01-12T21:39:58.927Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:40:00.429Z] [BOT] 💾 Marked as posted: Senior Software Engineer  @ datadog (instance #1)
[2026-01-12T21:40:00.429Z] [BOT] 💾 BEFORE ARCHIVING: 526 jobs in database
[2026-01-12T21:40:00.429Z] [BOT] ✅ No jobs to archive (all 526 jobs within 7-day window)
[2026-01-12T21:40:00.435Z] [BOT] 💾 Saved posted_jobs.json: 526 active jobs
[2026-01-12T21:40:00.435Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:00.435Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Distributed Systems @ datadog (instance #1)
💾 BEFORE ARCHIVING: 527 jobs in database
[2026-01-12T21:40:00.435Z] [BOT] ✅ No jobs to archive (all 527 jobs within 7-day window)
[2026-01-12T21:40:00.440Z] [BOT] 💾 Saved posted_jobs.json: 527 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:00.440Z] [BOT] 💾 Marked as posted: Senior Software Engineer - Frontend @ datadog (instance #1)
💾 BEFORE ARCHIVING: 528 jobs in database
[2026-01-12T21:40:00.441Z] [BOT] ✅ No jobs to archive (all 528 jobs within 7-day window)
[2026-01-12T21:40:00.445Z] [BOT] 💾 Saved posted_jobs.json: 528 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:00.446Z] [BOT] 📍 [ROUTING] "Senior Staff Engineer - Event Platform Storage" @ datadog
[2026-01-12T21:40:00.446Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T21:40:00.665Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Engineer - Event Platform Storage @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Staff Engineer - Event Platform Storage @ datadog
[2026-01-12T21:40:02.433Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Engineer - Event Platform Storage @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:40:03.933Z] [BOT] 💾 Marked as posted: Senior Staff Engineer - Event Platform Storage @ datadog (instance #1)
[2026-01-12T21:40:03.933Z] [BOT] 💾 BEFORE ARCHIVING: 529 jobs in database
[2026-01-12T21:40:03.933Z] [BOT] ✅ No jobs to archive (all 529 jobs within 7-day window)
[2026-01-12T21:40:03.938Z] [BOT] 💾 Saved posted_jobs.json: 529 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:03.938Z] [BOT] 📍 [ROUTING] "Senior Staff Software Engineer " @ datadog
[2026-01-12T21:40:03.938Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-12T21:40:04.294Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Software Engineer  @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Staff Software Engineer  @ datadog
[2026-01-12T21:40:06.091Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Software Engineer  @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:40:07.592Z] [BOT] 💾 Marked as posted: Senior Staff Software Engineer  @ datadog (instance #1)
💾 BEFORE ARCHIVING: 530 jobs in database
[2026-01-12T21:40:07.592Z] [BOT] ✅ No jobs to archive (all 530 jobs within 7-day window)
[2026-01-12T21:40:07.598Z] [BOT] 💾 Saved posted_jobs.json: 530 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:10.599Z] [BOT] 📌 Posting 3 jobs to #🤖・ai-jobs
[2026-01-12T21:40:10.599Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - AI Code Gen - Agent Engineer" @ datadog
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:40:10.928Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog
[2026-01-12T21:40:12.593Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:40:14.093Z] [BOT] 💾 Marked as posted: Senior Software Engineer - AI Code Gen - Agent Engineer @ datadog (instance #1)
[2026-01-12T21:40:14.094Z] [BOT] 💾 BEFORE ARCHIVING: 531 jobs in database
[2026-01-12T21:40:14.094Z] [BOT] ✅ No jobs to archive (all 531 jobs within 7-day window)
[2026-01-12T21:40:14.099Z] [BOT] 💾 Saved posted_jobs.json: 531 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:14.099Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - IDE AI Experiences - LLM Engineer" @ datadog
[2026-01-12T21:40:14.099Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:40:14.247Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog
[2026-01-12T21:40:16.309Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-12T21:40:17.810Z] [BOT] 💾 Marked as posted: Senior Software Engineer - IDE AI Experiences - LLM Engineer @ datadog (instance #1)
[2026-01-12T21:40:17.810Z] [BOT] 💾 BEFORE ARCHIVING: 532 jobs in database
[2026-01-12T21:40:17.810Z] [BOT] ✅ No jobs to archive (all 532 jobs within 7-day window)
[2026-01-12T21:40:17.816Z] [BOT] 💾 Saved posted_jobs.json: 532 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:17.816Z] [BOT] 📍 [ROUTING] "Senior Staff GenAI Engineer - Application Performance Monitoring (APM)" @ datadog
[2026-01-12T21:40:17.816Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-12T21:40:18.045Z] [BOT] ✅ Created forum post: 🏢 Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🤖・ai-jobs
  ✅ Industry: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog
[2026-01-12T21:40:19.723Z] [BOT] ✅ Created forum post: 🏢 Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog in #🗽・new-york
[2026-01-12T21:40:19.723Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-12T21:40:21.224Z] [BOT] 💾 Marked as posted: Senior Staff GenAI Engineer - Application Performance Monitoring (APM) @ datadog (instance #1)
[2026-01-12T21:40:21.224Z] [BOT] 💾 BEFORE ARCHIVING: 533 jobs in database
[2026-01-12T21:40:21.225Z] [BOT] ✅ No jobs to archive (all 533 jobs within 7-day window)
[2026-01-12T21:40:21.230Z] [BOT] 💾 Saved posted_jobs.json: 533 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:24.231Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-12T21:40:24.231Z] [BOT] 📍 [ROUTING] "Senior Tax Accountant - NYC" @ datadog
[2026-01-12T21:40:24.231Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-12T21:40:24.551Z] [BOT] ✅ Created forum post: 🏢 Senior Tax Accountant - NYC @ datadog in #💰・finance-jobs
  ✅ Industry: Senior Tax Accountant - NYC @ datadog
[2026-01-12T21:40:26.295Z] [BOT] ✅ Created forum post: 🏢 Senior Tax Accountant - NYC @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:40:27.797Z] [BOT] 💾 Marked as posted: Senior Tax Accountant - NYC @ datadog (instance #1)
[2026-01-12T21:40:27.797Z] [BOT] 💾 BEFORE ARCHIVING: 534 jobs in database
[2026-01-12T21:40:27.798Z] [BOT] ✅ No jobs to archive (all 534 jobs within 7-day window)
[2026-01-12T21:40:27.803Z] [BOT] 💾 Saved posted_jobs.json: 534 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:30.804Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-12T21:40:30.804Z] [BOT] 📍 [ROUTING] "Senior Technical Program Manager, Knowledge Systems" @ datadog
   Category: PROJECT-MANAGEMENT (matched: "project-management")
[2026-01-12T21:40:30.804Z] [BOT] Channel: 📊・JID_9910249a (1391...1276)
[2026-01-12T21:40:31.102Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Knowledge Systems @ datadog in #📊・JID_9910249a
  ✅ Industry: Senior Technical Program Manager, Knowledge Systems @ datadog
[2026-01-12T21:40:34.203Z] [BOT] ✅ Created forum post: 🏢 Senior Technical Program Manager, Knowledge Systems @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-12T21:40:35.704Z] [BOT] 💾 Marked as posted: Senior Technical Program Manager, Knowledge Systems @ datadog (instance #1)
[2026-01-12T21:40:35.704Z] [BOT] 💾 BEFORE ARCHIVING: 535 jobs in database
[2026-01-12T21:40:35.704Z] [BOT] ✅ No jobs to archive (all 535 jobs within 7-day window)
[2026-01-12T21:40:35.710Z] [BOT] 💾 Saved posted_jobs.json: 535 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:38.711Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-12T21:40:38.711Z] [BOT] 📍 [ROUTING] "Services Architect 3 - New York" @ datadog
[2026-01-12T21:40:38.711Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-12T21:40:38.895Z] [BOT] ✅ Created forum post: 🏢 Services Architect 3 - New York @ datadog in #💲・sales-jobs
  ✅ Industry: Services Architect 3 - New York @ datadog
[2026-01-12T21:40:40.607Z] [BOT] ✅ Created forum post: 🏢 Services Architect 3 - New York @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-12T21:40:42.108Z] [BOT] 💾 Marked as posted: Services Architect 3 - New York @ datadog (instance #1)
[2026-01-12T21:40:42.109Z] [BOT] 💾 BEFORE ARCHIVING: 536 jobs in database
[2026-01-12T21:40:42.109Z] [BOT] ✅ No jobs to archive (all 536 jobs within 7-day window)
[2026-01-12T21:40:42.114Z] [BOT] 💾 Saved posted_jobs.json: 536 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-12T21:40:45.115Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-12T21:40:45.115Z] [BOT] ⏭️  Skipping duplicate: JID_2fe4cc9c (posted within 7 days)
[2026-01-12T21:40:45.116Z] [BOT] ⏭️  Skipping duplicate: JID_c766dee9 (posted within 7 days)
⏭️  Skipping duplicate: JID_de2effe2 (posted within 7 days)
[2026-01-12T21:40:45.116Z] [BOT] ⏭️  Skipping duplicate: JID_412cb049 (posted within 7 days)
⏭️  Skipping duplicate: JID_58f775e0 (posted within 7 days)
[2026-01-12T21:40:45.116Z] [BOT] ⏭️  Skipping duplicate: JID_d17c3a22 (posted within 7 days)
[2026-01-12T21:40:45.116Z] [BOT] ⏭️  Skipping duplicate: JID_45aad627 (posted within 7 days)
⏭️  Skipping duplicate: JID_0f406816 (posted within 7 days)
⏭️  Skipping duplicate: JID_f63d02e6 (posted within 7 days)
[2026-01-12T21:40:45.116Z] [BOT] ⏭️  Skipping duplicate: JID_bedfae36 (posted within 7 days)
[2026-01-12T21:40:45.261Z] [BOT] ✅ Loaded pending queue: 2658 total (2638 pending, 20 enriched, 0 posted)
[2026-01-12T21:40:45.417Z] [BOT] ✅ Saved pending queue: 2658 total (2638 pending, 10 enriched, 10 posted)
📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-12T21:40:45.477Z] [BOT] 📂 Loaded 2702 existing routing entries
[2026-01-12T21:40:45.537Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
   Total entries: 2712
   Timestamp: 2026-01-12T21:40:45.528Z
[2026-01-12T21:40:45.538Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7a5d4f01.jsonl
   Total attempts: 20
[2026-01-12T21:40:45.538Z] [BOT] Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-12T21:40:45.538Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-12T21:40:45.538Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 9
   Top channels:
[2026-01-12T21:40:45.538Z] [BOT] 1. #🗽・new-york: 8 posts
     2. #💻・tech-jobs: 3 posts
     3. #🤖・ai-jobs: 3 posts
     4. #📈・JID_fb739488: 1 posts
     5. #🚌・boston: 1 posts
[2026-01-12T21:40:45.539Z] [BOT] [STATS] Channel stats saved
[2026-01-12T21:40:47.568Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2436) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*