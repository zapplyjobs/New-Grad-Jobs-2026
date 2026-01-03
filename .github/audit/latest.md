# Discord Bot Execution Audit
**Timestamp:** 2026-01-03T11:05:00.858Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 5
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-03T11:04:32.439Z] ========================================
[2026-01-03T11:04:32.440Z] Discord Bot Execution Log
[2026-01-03T11:04:32.441Z] Environment: GitHub Actions
[2026-01-03T11:04:32.441Z] Node Version: v20.19.6
[2026-01-03T11:04:32.441Z] ========================================
[2026-01-03T11:04:32.441Z] Environment Variables Check:
[2026-01-03T11:04:32.441Z] DISCORD_TOKEN: ✅ Set
[2026-01-03T11:04:32.441Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.441Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-03T11:04:32.441Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-03T11:04:32.441Z] 
Multi-Channel Configuration:
[2026-01-03T11:04:32.441Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-03T11:04:32.442Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-03T11:04:32.442Z] 
Data Files Check:
[2026-01-03T11:04:32.443Z] .github/data/new_jobs.json: ✅ Exists (10 items, 156907 bytes)
[2026-01-03T11:04:32.445Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 215609 bytes)
[2026-01-03T11:04:32.445Z] 
========================================
[2026-01-03T11:04:32.445Z] Starting Enhanced Discord Bot...
[2026-01-03T11:04:32.445Z] ========================================
[2026-01-03T11:04:32.980Z] [BOT] ✅ Loaded V2 database: 403 jobs
[2026-01-03T11:04:33.444Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-03T11:04:33.444Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-03T11:04:33.444Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-03T11:04:33.446Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2026-01-03T11:04:33.513Z] [BOT] 🧹 Cleaned up 10 jobs older than 7 days
[2026-01-03T11:04:33.607Z] [BOT] ✅ Export complete: Added 10, Skipped 0, Total 216
[2026-01-03T11:04:33.609Z] [BOT] 📬 Found 10 new jobs (0 already posted)...
[2026-01-03T11:04:33.609Z] [BOT] 📋 After blacklist filter: 10 jobs (0 blacklisted)
[2026-01-03T11:04:33.609Z] [BOT] 📋 After data quality filter: 10 jobs (0 invalid)
[2026-01-03T11:04:33.610Z] [BOT] 📋 After multi-location grouping: 5 unique jobs to post
[2026-01-03T11:04:33.610Z] [BOT] (5 grouped as same job with different locations)
📍 3 jobs with multiple locations:
   - Enterprise Sales Executive @ datadog: boston, massachusetts, usa, remote, washington, district of columbia, usa
   - Enterprise Sales Executive (FED) @ datadog: washington, district of columbia, usa, remote
   - Enterprise Security Sales Specialist @ datadog: chicago, illinois, usa; san francisco, california, usa, remote
⏸️ Limiting to 10 jobs this run, 5 deferred for next run
📤 Posting 5 jobs...
[2026-01-03T11:04:33.610Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-03T11:04:33.614Z] [BOT] 📌 Posting 3 jobs to #💲・sales-jobs
[2026-01-03T11:04:33.614Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive" @ datadog
[2026-01-03T11:04:33.615Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:04:33.619Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-03T11:04:33.797Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #💲・sales-jobs
[2026-01-03T11:04:33.798Z] [BOT] ✅ Industry: Enterprise Sales Executive @ datadog
[2026-01-03T11:04:35.439Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive @ datadog in #🚌・boston
[2026-01-03T11:04:35.439Z] [BOT] ✅ Location: 🚌・boston
[2026-01-03T11:04:36.940Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
[2026-01-03T11:04:36.940Z] [BOT] 💾 BEFORE ARCHIVING: 404 jobs in database
[2026-01-03T11:04:36.941Z] [BOT] ✅ No jobs to archive (all 404 jobs within 7-day window)
[2026-01-03T11:04:36.948Z] [BOT] 💾 Saved posted_jobs.json: 404 active jobs
[2026-01-03T11:04:36.949Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:36.949Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 405 jobs in database
[2026-01-03T11:04:36.949Z] [BOT] ✅ No jobs to archive (all 405 jobs within 7-day window)
[2026-01-03T11:04:36.953Z] [BOT] 💾 Saved posted_jobs.json: 405 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:36.953Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 406 jobs in database
[2026-01-03T11:04:36.954Z] [BOT] ✅ No jobs to archive (all 406 jobs within 7-day window)
[2026-01-03T11:04:36.958Z] [BOT] 💾 Saved posted_jobs.json: 406 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:36.958Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive @ datadog (instance #1)
💾 BEFORE ARCHIVING: 407 jobs in database
[2026-01-03T11:04:36.959Z] [BOT] ✅ No jobs to archive (all 407 jobs within 7-day window)
[2026-01-03T11:04:36.964Z] [BOT] 💾 Saved posted_jobs.json: 407 active jobs
[2026-01-03T11:04:36.964Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:36.965Z] [BOT] 📍 [ROUTING] "Enterprise Sales Executive (FED)" @ datadog
[2026-01-03T11:04:36.966Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:04:37.185Z] [BOT] ✅ Created forum post: 🏢 Enterprise Sales Executive (FED) @ datadog in #💲・sales-jobs
[2026-01-03T11:04:37.186Z] [BOT] ✅ Industry: Enterprise Sales Executive (FED) @ datadog
[2026-01-03T11:04:38.686Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive (FED) @ datadog (instance #1)
[2026-01-03T11:04:38.687Z] [BOT] 💾 BEFORE ARCHIVING: 408 jobs in database
[2026-01-03T11:04:38.687Z] [BOT] ✅ No jobs to archive (all 408 jobs within 7-day window)
[2026-01-03T11:04:38.690Z] [BOT] 💾 Saved posted_jobs.json: 408 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:38.690Z] [BOT] 💾 Marked as posted: Enterprise Sales Executive (FED) @ datadog (instance #1)
💾 BEFORE ARCHIVING: 409 jobs in database
[2026-01-03T11:04:38.691Z] [BOT] ✅ No jobs to archive (all 409 jobs within 7-day window)
[2026-01-03T11:04:38.694Z] [BOT] 💾 Saved posted_jobs.json: 409 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:38.695Z] [BOT] 📍 [ROUTING] "Field CISO" @ datadog
[2026-01-03T11:04:38.695Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-03T11:04:38.902Z] [BOT] ✅ Created forum post: 🏢 Field CISO @ datadog in #💲・sales-jobs
[2026-01-03T11:04:38.902Z] [BOT] ✅ Industry: Field CISO @ datadog
[2026-01-03T11:04:40.557Z] [BOT] ✅ Created forum post: 🏢 Field CISO @ datadog in #🌉・san-francisco
[2026-01-03T11:04:40.557Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-03T11:04:42.058Z] [BOT] 💾 Marked as posted: Field CISO @ datadog (instance #1)
[2026-01-03T11:04:42.058Z] [BOT] 💾 BEFORE ARCHIVING: 410 jobs in database
[2026-01-03T11:04:42.058Z] [BOT] ✅ No jobs to archive (all 410 jobs within 7-day window)
[2026-01-03T11:04:42.063Z] [BOT] 💾 Saved posted_jobs.json: 410 active jobs
[2026-01-03T11:04:42.063Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:45.064Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-03T11:04:45.065Z] [BOT] 📍 [ROUTING] "Enterprise Security Sales Specialist" @ datadog
   Category: TECH (matched: "security")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-03T11:04:45.221Z] [BOT] ✅ Created forum post: 🏢 Enterprise Security Sales Specialist @ datadog in #💻・tech-jobs
  ✅ Industry: Enterprise Security Sales Specialist @ datadog
[2026-01-03T11:04:46.967Z] [BOT] ✅ Created forum post: 🏢 Enterprise Security Sales Specialist @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T11:04:48.467Z] [BOT] 💾 Marked as posted: Enterprise Security Sales Specialist @ datadog (instance #1)
[2026-01-03T11:04:48.468Z] [BOT] 💾 BEFORE ARCHIVING: 411 jobs in database
[2026-01-03T11:04:48.468Z] [BOT] ✅ No jobs to archive (all 411 jobs within 7-day window)
[2026-01-03T11:04:48.471Z] [BOT] 💾 Saved posted_jobs.json: 411 active jobs
[2026-01-03T11:04:48.471Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Enterprise Security Sales Specialist @ datadog (instance #1)
💾 BEFORE ARCHIVING: 412 jobs in database
[2026-01-03T11:04:48.472Z] [BOT] ✅ No jobs to archive (all 412 jobs within 7-day window)
[2026-01-03T11:04:48.475Z] [BOT] 💾 Saved posted_jobs.json: 412 active jobs
[2026-01-03T11:04:48.475Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:51.475Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-03T11:04:51.477Z] [BOT] 📍 [ROUTING] "Executive Assistant - San Francisco" @ datadog
[2026-01-03T11:04:51.477Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-03T11:04:51.685Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant - San Francisco @ datadog in #📣・marketing-jobs
  ✅ Industry: Executive Assistant - San Francisco @ datadog
[2026-01-03T11:04:53.495Z] [BOT] ✅ Created forum post: 🏢 Executive Assistant - San Francisco @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-03T11:04:54.995Z] [BOT] 💾 Marked as posted: Executive Assistant - San Francisco @ datadog (instance #1)
[2026-01-03T11:04:54.995Z] [BOT] 💾 BEFORE ARCHIVING: 413 jobs in database
[2026-01-03T11:04:54.995Z] [BOT] ✅ No jobs to archive (all 413 jobs within 7-day window)
[2026-01-03T11:04:54.999Z] [BOT] 💾 Saved posted_jobs.json: 413 active jobs
[2026-01-03T11:04:54.999Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-03T11:04:58.000Z] [BOT] 🎉 Posting complete! Successfully posted: 5, Failed: 0
[2026-01-03T11:04:58.000Z] [BOT] ⏭️  Skipping duplicate: JID_4a5cf546 (posted within 7 days)
[2026-01-03T11:04:58.000Z] [BOT] ⏭️  Skipping duplicate: JID_f16f7e01 (posted within 7 days)
⏭️  Skipping duplicate: JID_29b543dd (posted within 7 days)
[2026-01-03T11:04:58.001Z] [BOT] ⏭️  Skipping duplicate: JID_84d2607c (posted within 7 days)
[2026-01-03T11:04:58.001Z] [BOT] ⏭️  Skipping duplicate: JID_7de3b3fa (posted within 7 days)
[2026-01-03T11:04:58.072Z] [BOT] ✅ Loaded pending queue: 885 total (865 pending, 20 enriched, 0 posted)
[2026-01-03T11:04:58.171Z] [BOT] ✅ Saved pending queue: 885 total (865 pending, 15 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2026-01-03T11:04:58.172Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-03T11:04:58.215Z] [BOT] 📂 Loaded 1403 existing routing entries
[2026-01-03T11:04:58.260Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 5
   Total entries: 1408
   Timestamp: 2026-01-03T11:04:58.254Z
[2026-01-03T11:04:58.261Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_2f95e3fe.jsonl
[2026-01-03T11:04:58.261Z] [BOT] Total attempts: 9
   Successful: 9
   Failed: 0
   Skipped: 0
[2026-01-03T11:04:58.261Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 9
   Channels used: 5
   Top channels:
[2026-01-03T11:04:58.261Z] [BOT] 1. #💲・sales-jobs: 3 posts
     2. #🌉・san-francisco: 3 posts
     3. #🚌・boston: 1 posts
     4. #💻・tech-jobs: 1 posts
     5. #📣・marketing-jobs: 1 posts
[2026-01-03T11:04:58.261Z] [BOT] [STATS] Channel stats saved
[2026-01-03T11:05:00.278Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*