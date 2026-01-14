# Discord Bot Execution Audit
**Timestamp:** 2026-01-14T19:52:22.770Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 10
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-14T19:51:29.229Z] ========================================
[2026-01-14T19:51:29.231Z] Discord Bot Execution Log
[2026-01-14T19:51:29.231Z] Environment: GitHub Actions
[2026-01-14T19:51:29.231Z] Node Version: v20.19.6
[2026-01-14T19:51:29.231Z] ========================================
[2026-01-14T19:51:29.231Z] Environment Variables Check:
[2026-01-14T19:51:29.231Z] DISCORD_TOKEN: ✅ Set
[2026-01-14T19:51:29.231Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.231Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-14T19:51:29.232Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-14T19:51:29.232Z] 
Multi-Channel Configuration:
[2026-01-14T19:51:29.232Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-14T19:51:29.232Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-14T19:51:29.233Z] 
Data Files Check:
[2026-01-14T19:51:29.234Z] .github/data/new_jobs.json: ✅ Exists (10 items, 182324 bytes)
[2026-01-14T19:51:29.240Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 742944 bytes)
[2026-01-14T19:51:29.240Z] 
========================================
[2026-01-14T19:51:29.240Z] Starting Enhanced Discord Bot...
[2026-01-14T19:51:29.240Z] ========================================
[2026-01-14T19:51:29.787Z] [BOT] ✅ Loaded V2 database: 1392 jobs
[2026-01-14T19:51:30.353Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-14T19:51:30.353Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply (CH_20db82b8)
[2026-01-14T19:51:30.354Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-14T19:51:30.469Z] [BOT] ✅ Loaded pending queue: 2730 total (2710 pending, 20 enriched, 0 posted)
[BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Commercial Legal Specialist, Technical AI Implementation at anthropic
[2026-01-14T19:51:30.472Z] [BOT] 📬 Found 20 new jobs (0 already posted)...
[2026-01-14T19:51:30.472Z] [BOT] 📋 After blacklist filter: 20 jobs (0 blacklisted)
[2026-01-14T19:51:30.472Z] [BOT] 📋 After data quality filter: 20 jobs (0 invalid)
[2026-01-14T19:51:30.473Z] [BOT] 📋 After multi-location grouping: 20 unique jobs to post
[2026-01-14T19:51:30.473Z] [BOT] ⏸️ Limiting to 10 jobs this run, 10 deferred for next run
📤 Posting 10 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-14T19:51:30.478Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-14T19:51:30.478Z] [BOT] 📍 [ROUTING] "Commercial Legal Specialist, Technical AI Implementation" @ anthropic
   Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-14T19:51:30.478Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-14T19:51:30.496Z] [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-14T19:51:30.679Z] [BOT] ✅ Created forum post: 🏢 Commercial Legal Specialist, Technical AI Implementation @ anthropic in #🤖・ai-jobs
[2026-01-14T19:51:30.679Z] [BOT] ✅ Industry: Commercial Legal Specialist, Technical AI Implementation @ anthropic
[2026-01-14T19:51:32.410Z] [BOT] ✅ Created forum post: 🏢 Commercial Legal Specialist, Technical AI Implementation @ anthropic in #🌉・san-francisco
[2026-01-14T19:51:32.410Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:51:33.912Z] [BOT] 💾 Marked as posted: Commercial Legal Specialist, Technical AI Implementation @ anthropic (instance #1)
[2026-01-14T19:51:33.912Z] [BOT] 💾 BEFORE ARCHIVING: 1393 jobs in database
[2026-01-14T19:51:33.914Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-14T19:51:33.916Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-14T19:51:33.917Z] [BOT] ✅ Archiving complete: 1 archived, 1392 active
[2026-01-14T19:51:33.926Z] [BOT] 💾 Saved posted_jobs.json: 1392 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:51:33.926Z] [BOT] 📍 [ROUTING] "Engineering Manager, Inference" @ anthropic
   Category: AI (matched: "machine learning")
[2026-01-14T19:51:33.926Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-14T19:51:34.467Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Inference @ anthropic in #🤖・ai-jobs
[2026-01-14T19:51:34.467Z] [BOT] ✅ Industry: Engineering Manager, Inference @ anthropic
[2026-01-14T19:51:36.246Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Inference @ anthropic in #🌉・san-francisco
[2026-01-14T19:51:36.246Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:51:37.747Z] [BOT] 💾 Marked as posted: Engineering Manager, Inference @ anthropic (instance #1)
💾 BEFORE ARCHIVING: 1393 jobs in database
[2026-01-14T19:51:37.748Z] [BOT] ✅ No jobs to archive (all 1393 jobs within 7-day window)
[2026-01-14T19:51:37.757Z] [BOT] 💾 Saved posted_jobs.json: 1393 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:51:40.757Z] [BOT] 📌 Posting 4 jobs to #💲・sales-jobs
[2026-01-14T19:51:40.757Z] [BOT] 📍 [ROUTING] "Contracts Manager" @ anthropic
[2026-01-14T19:51:40.758Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:51:41.368Z] [BOT] ✅ Created forum post: 🏢 Contracts Manager @ anthropic in #💲・sales-jobs
  ✅ Industry: Contracts Manager @ anthropic
[2026-01-14T19:51:43.029Z] [BOT] ✅ Created forum post: 🏢 Contracts Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:51:44.531Z] [BOT] 💾 Marked as posted: Contracts Manager @ anthropic (instance #1)
[2026-01-14T19:51:44.531Z] [BOT] 💾 BEFORE ARCHIVING: 1394 jobs in database
[2026-01-14T19:51:44.532Z] [BOT] ✅ No jobs to archive (all 1394 jobs within 7-day window)
[2026-01-14T19:51:44.544Z] [BOT] 💾 Saved posted_jobs.json: 1394 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:51:44.545Z] [BOT] 📍 [ROUTING] "Contracts Manager, Procurement" @ anthropic
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:51:44.733Z] [BOT] ✅ Created forum post: 🏢 Contracts Manager, Procurement @ anthropic in #💲・sales-jobs
[2026-01-14T19:51:44.734Z] [BOT] ✅ Industry: Contracts Manager, Procurement @ anthropic
[2026-01-14T19:51:46.519Z] [BOT] ✅ Created forum post: 🏢 Contracts Manager, Procurement @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:51:48.021Z] [BOT] 💾 Marked as posted: Contracts Manager, Procurement @ anthropic (instance #1)
[2026-01-14T19:51:48.021Z] [BOT] 💾 BEFORE ARCHIVING: 1395 jobs in database
[2026-01-14T19:51:48.022Z] [BOT] ✅ No jobs to archive (all 1395 jobs within 7-day window)
[2026-01-14T19:51:48.033Z] [BOT] 💾 Saved posted_jobs.json: 1395 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:51:48.033Z] [BOT] 📍 [ROUTING] "Director, Compute Infrastructure Procurement " @ anthropic
[2026-01-14T19:51:48.034Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:51:48.943Z] [BOT] ✅ Created forum post: 🏢 Director, Compute Infrastructure Procurement  @ anthropic in #💲・sales-jobs
[2026-01-14T19:51:48.943Z] [BOT] ✅ Industry: Director, Compute Infrastructure Procurement  @ anthropic
[2026-01-14T19:51:51.145Z] [BOT] ✅ Created forum post: 🏢 Director, Compute Infrastructure Procurement  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:51:52.647Z] [BOT] 💾 Marked as posted: Director, Compute Infrastructure Procurement  @ anthropic (instance #1)
[2026-01-14T19:51:52.647Z] [BOT] 💾 BEFORE ARCHIVING: 1396 jobs in database
[2026-01-14T19:51:52.648Z] [BOT] ✅ No jobs to archive (all 1396 jobs within 7-day window)
[2026-01-14T19:51:52.658Z] [BOT] 💾 Saved posted_jobs.json: 1396 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:51:52.659Z] [BOT] 📍 [ROUTING] "Director, Order Management & Billing" @ anthropic
[2026-01-14T19:51:52.659Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-14T19:51:52.931Z] [BOT] ✅ Created forum post: 🏢 Director, Order Management & Billing @ anthropic in #💲・sales-jobs
[2026-01-14T19:51:52.931Z] [BOT] ✅ Industry: Director, Order Management & Billing @ anthropic
[2026-01-14T19:51:54.666Z] [BOT] ✅ Created forum post: 🏢 Director, Order Management & Billing @ anthropic in #🌉・san-francisco
[2026-01-14T19:51:54.667Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:51:56.168Z] [BOT] 💾 Marked as posted: Director, Order Management & Billing @ anthropic (instance #1)
[2026-01-14T19:51:56.168Z] [BOT] 💾 BEFORE ARCHIVING: 1397 jobs in database
[2026-01-14T19:51:56.169Z] [BOT] ✅ No jobs to archive (all 1397 jobs within 7-day window)
[2026-01-14T19:51:56.180Z] [BOT] 💾 Saved posted_jobs.json: 1397 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:51:59.180Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-14T19:51:59.181Z] [BOT] 📍 [ROUTING] "Customer Marketing Manager" @ anthropic
   Category: MARKETING (matched: "marketing")
[2026-01-14T19:51:59.181Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2026-01-14T19:51:59.447Z] [BOT] ✅ Created forum post: 🏢 Customer Marketing Manager @ anthropic in #📣・marketing-jobs
  ✅ Industry: Customer Marketing Manager @ anthropic
[2026-01-14T19:52:01.285Z] [BOT] ✅ Created forum post: 🏢 Customer Marketing Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:52:02.786Z] [BOT] 💾 Marked as posted: Customer Marketing Manager @ anthropic (instance #1)
[2026-01-14T19:52:02.786Z] [BOT] 💾 BEFORE ARCHIVING: 1398 jobs in database
[2026-01-14T19:52:02.787Z] [BOT] ✅ No jobs to archive (all 1398 jobs within 7-day window)
[2026-01-14T19:52:02.797Z] [BOT] 💾 Saved posted_jobs.json: 1398 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:52:05.799Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2026-01-14T19:52:05.799Z] [BOT] 📍 [ROUTING] "Data Operations Manager" @ anthropic
[2026-01-14T19:52:05.799Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:52:06.003Z] [BOT] ✅ Created forum post: 🏢 Data Operations Manager @ anthropic in #💻・tech-jobs
  ✅ Industry: Data Operations Manager @ anthropic
[2026-01-14T19:52:07.782Z] [BOT] ✅ Created forum post: 🏢 Data Operations Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:52:09.283Z] [BOT] 💾 Marked as posted: Data Operations Manager @ anthropic (instance #1)
[2026-01-14T19:52:09.283Z] [BOT] 💾 BEFORE ARCHIVING: 1399 jobs in database
[2026-01-14T19:52:09.284Z] [BOT] ✅ No jobs to archive (all 1399 jobs within 7-day window)
[2026-01-14T19:52:09.295Z] [BOT] 💾 Saved posted_jobs.json: 1399 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:52:09.296Z] [BOT] 📍 [ROUTING] "Engineering Manager, Desktop" @ anthropic
[2026-01-14T19:52:09.296Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:52:09.557Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Desktop @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Desktop @ anthropic
[2026-01-14T19:52:11.265Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Desktop @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-14T19:52:12.766Z] [BOT] 💾 Marked as posted: Engineering Manager, Desktop @ anthropic (instance #1)
[2026-01-14T19:52:12.766Z] [BOT] 💾 BEFORE ARCHIVING: 1400 jobs in database
[2026-01-14T19:52:12.767Z] [BOT] ✅ No jobs to archive (all 1400 jobs within 7-day window)
[2026-01-14T19:52:12.778Z] [BOT] 💾 Saved posted_jobs.json: 1400 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:52:12.778Z] [BOT] 📍 [ROUTING] "Engineering Manager, Public Sector" @ anthropic
   Category: TECH (matched: "engineer/engineering")
[2026-01-14T19:52:12.779Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-14T19:52:13.041Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Public Sector @ anthropic in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Public Sector @ anthropic
[2026-01-14T19:52:14.918Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Public Sector @ anthropic in #🌉・san-francisco
[2026-01-14T19:52:14.918Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-14T19:52:16.420Z] [BOT] 💾 Marked as posted: Engineering Manager, Public Sector @ anthropic (instance #1)
[2026-01-14T19:52:16.420Z] [BOT] 💾 BEFORE ARCHIVING: 1401 jobs in database
[2026-01-14T19:52:16.421Z] [BOT] ✅ No jobs to archive (all 1401 jobs within 7-day window)
[2026-01-14T19:52:16.431Z] [BOT] 💾 Saved posted_jobs.json: 1401 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-14T19:52:19.432Z] [BOT] 🎉 Posting complete! Successfully posted: 10, Failed: 0
[2026-01-14T19:52:19.433Z] [BOT] ⏭️  Skipping duplicate: JID_87913698 (posted within 7 days)
[2026-01-14T19:52:19.433Z] [BOT] ⏭️  Skipping duplicate: JID_c71a7923 (posted within 7 days)
[2026-01-14T19:52:19.433Z] [BOT] ⏭️  Skipping duplicate: JID_d171bf8f (posted within 7 days)
⏭️  Skipping duplicate: JID_eb4bb172 (posted within 7 days)
[2026-01-14T19:52:19.434Z] [BOT] ⏭️  Skipping duplicate: JID_c5d6fff1 (posted within 7 days)
[2026-01-14T19:52:19.434Z] [BOT] ⏭️  Skipping duplicate: JID_8c0f5441 (posted within 7 days)
[2026-01-14T19:52:19.434Z] [BOT] ⏭️  Skipping duplicate: JID_51b3315a (posted within 7 days)
[2026-01-14T19:52:19.434Z] [BOT] ⏭️  Skipping duplicate: JID_8e32a49c (posted within 7 days)
[2026-01-14T19:52:19.434Z] [BOT] ⏭️  Skipping duplicate: JID_26b14c96 (posted within 7 days)
[2026-01-14T19:52:19.434Z] [BOT] ⏭️  Skipping duplicate: JID_95e2326e (posted within 7 days)
[2026-01-14T19:52:19.556Z] [BOT] ✅ Loaded pending queue: 2730 total (2710 pending, 20 enriched, 0 posted)
[2026-01-14T19:52:19.726Z] [BOT] ✅ Saved pending queue: 2730 total (2710 pending, 10 enriched, 10 posted)
[2026-01-14T19:52:19.726Z] [BOT] 📋 Updated queue: marked 10 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-14T19:52:19.783Z] [BOT] 📂 Loaded 3525 existing routing entries
[2026-01-14T19:52:19.844Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 10
[2026-01-14T19:52:19.844Z] [BOT] Total entries: 3535
   Timestamp: 2026-01-14T19:52:19.830Z
[2026-01-14T19:52:19.845Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_7b68d088.jsonl
   Total attempts: 20
   Successful: 20
   Failed: 0
   Skipped: 0
[2026-01-14T19:52:19.845Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-14T19:52:19.845Z] [BOT] Last cleanup: Never
   Total posts: 20
   Channels used: 5
   Top channels:
     1. #🌉・san-francisco: 10 posts
[2026-01-14T19:52:19.845Z] [BOT] 2. #💲・sales-jobs: 4 posts
     3. #💻・tech-jobs: 3 posts
     4. #🤖・ai-jobs: 2 posts
[2026-01-14T19:52:19.846Z] [BOT] 5. #📣・marketing-jobs: 1 posts
[2026-01-14T19:52:19.846Z] [BOT] [STATS] Channel stats saved
[2026-01-14T19:52:21.872Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*