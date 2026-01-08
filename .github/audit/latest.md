# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T17:44:05.565Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 14
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T17:43:48.963Z] ========================================
[2026-01-08T17:43:48.965Z] Discord Bot Execution Log
[2026-01-08T17:43:48.965Z] Environment: GitHub Actions
[2026-01-08T17:43:48.965Z] Node Version: v20.19.6
[2026-01-08T17:43:48.965Z] ========================================
[2026-01-08T17:43:48.965Z] Environment Variables Check:
[2026-01-08T17:43:48.965Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T17:43:48.965Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.965Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T17:43:48.965Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T17:43:48.966Z] 
Multi-Channel Configuration:
[2026-01-08T17:43:48.966Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T17:43:48.966Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T17:43:48.966Z] 
Data Files Check:
[2026-01-08T17:43:48.968Z] .github/data/new_jobs.json: ✅ Exists (10 items, 148284 bytes)
[2026-01-08T17:43:48.973Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 755498 bytes)
[2026-01-08T17:43:48.973Z] 
========================================
[2026-01-08T17:43:48.973Z] Starting Enhanced Discord Bot...
[2026-01-08T17:43:48.973Z] ========================================
[2026-01-08T17:43:49.518Z] [BOT] ✅ Loaded V2 database: 1468 jobs
[2026-01-08T17:43:49.960Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T17:43:49.961Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T17:43:49.961Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T17:43:49.967Z] [BOT] ✅ Loaded pending queue: 163 total (143 pending, 20 enriched, 0 posted)
[2026-01-08T17:43:49.967Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager, Customer Success at brex
[2026-01-08T17:43:49.969Z] [BOT] ⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
[2026-01-08T17:43:49.969Z] [BOT] ⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T17:43:49.969Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
⏭️  Skipping duplicate: JID_4c79ae31 (posted within 7 days)
[2026-01-08T17:43:49.970Z] [BOT] ⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T17:43:49.970Z] [BOT] ⏭️  Skipping duplicate: JID_b4d01207 (posted within 7 days)
⏭️ Skipping already posted:  BizOps Lead, BD at brex
[2026-01-08T17:43:49.970Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
⏭️ Skipping already posted: Specialist - Data Transfer - Integration & Quality at BNY
⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T17:43:49.970Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T17:43:49.970Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T17:43:49.970Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T17:43:49.970Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T17:43:49.971Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T17:43:49.971Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T17:43:49.971Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
📬 Found 6 new jobs (14 already posted)...
[2026-01-08T17:43:49.971Z] [BOT] 📋 After blacklist filter: 6 jobs (0 blacklisted)
[2026-01-08T17:43:49.971Z] [BOT] 📋 After data quality filter: 6 jobs (0 invalid)
[2026-01-08T17:43:49.972Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-08T17:43:49.972Z] [BOT] (4 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Manager, Customer Success @ brex: seattle, washington, united states, new york, new york, united states, salt lake city, utah, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 4 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T17:43:49.977Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-08T17:43:49.977Z] [BOT] 📍 [ROUTING] "Manager, Customer Success" @ brex
[2026-01-08T17:43:49.977Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-08T17:43:49.982Z] [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T17:43:50.140Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ brex in #💲・sales-jobs
  ✅ Industry: Manager, Customer Success @ brex
[2026-01-08T17:43:51.819Z] [BOT] ✅ Created forum post: 🏢 Manager, Customer Success @ brex in #🌧️・seattle
[2026-01-08T17:43:51.819Z] [BOT] ✅ Location: 🌧️・seattle
[2026-01-08T17:43:53.321Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-08T17:43:53.321Z] [BOT] 💾 BEFORE ARCHIVING: 1469 jobs in database
[2026-01-08T17:43:53.323Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T17:43:53.327Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-08T17:43:53.327Z] [BOT] ✅ Archiving complete: 2 archived, 1467 active
[2026-01-08T17:43:53.338Z] [BOT] 💾 Saved posted_jobs.json: 1467 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T17:43:53.338Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-08T17:43:53.338Z] [BOT] 💾 BEFORE ARCHIVING: 1468 jobs in database
[2026-01-08T17:43:53.339Z] [BOT] ✅ No jobs to archive (all 1468 jobs within 7-day window)
[2026-01-08T17:43:53.349Z] [BOT] 💾 Saved posted_jobs.json: 1468 active jobs
[2026-01-08T17:43:53.349Z] [BOT] ✅ Verified: Database file matches in-memory state
💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-08T17:43:53.349Z] [BOT] 💾 BEFORE ARCHIVING: 1469 jobs in database
[2026-01-08T17:43:53.350Z] [BOT] ✅ No jobs to archive (all 1469 jobs within 7-day window)
[2026-01-08T17:43:53.364Z] [BOT] 💾 Saved posted_jobs.json: 1469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T17:43:53.364Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
💾 BEFORE ARCHIVING: 1470 jobs in database
[2026-01-08T17:43:53.365Z] [BOT] ✅ No jobs to archive (all 1470 jobs within 7-day window)
[2026-01-08T17:43:53.375Z] [BOT] 💾 Saved posted_jobs.json: 1470 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T17:43:53.375Z] [BOT] 💾 Marked as posted: Manager, Customer Success @ brex (instance #1)
[2026-01-08T17:43:53.375Z] [BOT] 💾 BEFORE ARCHIVING: 1471 jobs in database
[2026-01-08T17:43:53.376Z] [BOT] ✅ No jobs to archive (all 1471 jobs within 7-day window)
[2026-01-08T17:43:53.386Z] [BOT] 💾 Saved posted_jobs.json: 1471 active jobs
[2026-01-08T17:43:53.386Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T17:43:56.387Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-08T17:43:56.388Z] [BOT] 📍 [ROUTING] "Finance Systems, Finance & Strategy Lead" @ anthropic
[2026-01-08T17:43:56.388Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-08T17:43:56.584Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Finance & Strategy Lead @ anthropic in #📣・marketing-jobs
[2026-01-08T17:43:56.585Z] [BOT] ✅ Industry: Finance Systems, Finance & Strategy Lead @ anthropic
[2026-01-08T17:43:58.299Z] [BOT] ✅ Created forum post: 🏢 Finance Systems, Finance & Strategy Lead @ anthropic in #🌉・san-francisco
[2026-01-08T17:43:58.300Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T17:43:59.801Z] [BOT] 💾 Marked as posted: Finance Systems, Finance & Strategy Lead @ anthropic (instance #1)
[2026-01-08T17:43:59.801Z] [BOT] 💾 BEFORE ARCHIVING: 1472 jobs in database
[2026-01-08T17:43:59.802Z] [BOT] ✅ No jobs to archive (all 1472 jobs within 7-day window)
[2026-01-08T17:43:59.812Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
[2026-01-08T17:43:59.812Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T17:44:02.814Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-08T17:44:02.814Z] [BOT] ⏭️  Skipping duplicate: JID_6e47819d (posted within 7 days)
[2026-01-08T17:44:02.814Z] [BOT] ⏭️  Skipping duplicate: JID_8a0f0600 (posted within 7 days)
[2026-01-08T17:44:02.820Z] [BOT] ✅ Loaded pending queue: 163 total (143 pending, 20 enriched, 0 posted)
[2026-01-08T17:44:02.832Z] [BOT] ✅ Saved pending queue: 163 total (143 pending, 18 enriched, 2 posted)
[2026-01-08T17:44:02.832Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T17:44:02.885Z] [BOT] 📂 Loaded 2426 existing routing entries
[2026-01-08T17:44:02.942Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-08T17:44:02.943Z] [BOT] Total entries: 2428
   Timestamp: 2026-01-08T17:44:02.931Z
[2026-01-08T17:44:02.949Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 18
   Successful: 4
   Failed: 0
   Skipped: 14
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🌧️・seattle: 1 posts
     3. #📣・marketing-jobs: 1 posts
     4. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-08T17:44:04.958Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*