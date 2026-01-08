# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T16:59:53.345Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 16
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T16:59:42.308Z] ========================================
[2026-01-08T16:59:42.310Z] Discord Bot Execution Log
[2026-01-08T16:59:42.310Z] Environment: GitHub Actions
[2026-01-08T16:59:42.310Z] Node Version: v20.19.6
[2026-01-08T16:59:42.310Z] ========================================
[2026-01-08T16:59:42.310Z] Environment Variables Check:
[2026-01-08T16:59:42.310Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T16:59:42.311Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T16:59:42.311Z] 
Multi-Channel Configuration:
[2026-01-08T16:59:42.311Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.311Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T16:59:42.312Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T16:59:42.312Z] 
Data Files Check:
[2026-01-08T16:59:42.313Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157586 bytes)
[2026-01-08T16:59:42.318Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 754238 bytes)
[2026-01-08T16:59:42.318Z] 
========================================
[2026-01-08T16:59:42.318Z] Starting Enhanced Discord Bot...
[2026-01-08T16:59:42.318Z] ========================================
[2026-01-08T16:59:42.842Z] [BOT] ✅ Loaded V2 database: 1465 jobs
[2026-01-08T16:59:43.485Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T16:59:43.486Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T16:59:43.486Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T16:59:43.494Z] [BOT] ✅ Loaded pending queue: 156 total (136 pending, 20 enriched, 0 posted)
[2026-01-08T16:59:43.494Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-08T16:59:43.494Z] [BOT] [BOT] 🔍 Sample enriched job: BizOps Lead, BD at brex
[2026-01-08T16:59:43.496Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
[2026-01-08T16:59:43.496Z] [BOT] ⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T16:59:43.496Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T16:59:43.496Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T16:59:43.496Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T16:59:43.497Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-08T16:59:43.497Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T16:59:43.497Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-08T16:59:43.497Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T16:59:43.497Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T16:59:43.497Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
[2026-01-08T16:59:43.497Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T16:59:43.497Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_aeb89c5c-developer_r260376 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4a3a3618 at Uline
[2026-01-08T16:59:43.497Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
[2026-01-08T16:59:43.498Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T16:59:43.498Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
📬 Found 4 new jobs (16 already posted)...
[2026-01-08T16:59:43.498Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-08T16:59:43.498Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T16:59:43.498Z] [BOT] (3 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - BizOps Lead, BD @ brex: salt lake city, utah, united states, seattle, washington, united states, new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 3 deferred for next run
[2026-01-08T16:59:43.499Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T16:59:43.502Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-08T16:59:43.503Z] [BOT] 📍 [ROUTING] "BizOps Lead, BD" @ brex
[2026-01-08T16:59:43.503Z] [BOT] Category: SALES (matched: "business development")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-08T16:59:43.508Z] [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T16:59:43.929Z] [BOT] ✅ Created forum post: 🏢 BizOps Lead, BD @ brex in #💲・sales-jobs
  ✅ Industry: BizOps Lead, BD @ brex
[2026-01-08T16:59:45.682Z] [BOT] ✅ Created forum post: 🏢 BizOps Lead, BD @ brex in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T16:59:47.182Z] [BOT] 💾 Marked as posted: BizOps Lead, BD @ brex (instance #1)
[2026-01-08T16:59:47.182Z] [BOT] 💾 BEFORE ARCHIVING: 1466 jobs in database
[2026-01-08T16:59:47.183Z] [BOT] ✅ No jobs to archive (all 1466 jobs within 7-day window)
[2026-01-08T16:59:47.199Z] [BOT] 💾 Saved posted_jobs.json: 1466 active jobs
[2026-01-08T16:59:47.199Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T16:59:47.199Z] [BOT] 💾 Marked as posted: BizOps Lead, BD @ brex (instance #1)
[2026-01-08T16:59:47.199Z] [BOT] 💾 BEFORE ARCHIVING: 1467 jobs in database
[2026-01-08T16:59:47.201Z] [BOT] ✅ No jobs to archive (all 1467 jobs within 7-day window)
[2026-01-08T16:59:47.211Z] [BOT] 💾 Saved posted_jobs.json: 1467 active jobs
[2026-01-08T16:59:47.211Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T16:59:47.211Z] [BOT] 💾 Marked as posted: BizOps Lead, BD @ brex (instance #1)
💾 BEFORE ARCHIVING: 1468 jobs in database
[2026-01-08T16:59:47.212Z] [BOT] ✅ No jobs to archive (all 1468 jobs within 7-day window)
[2026-01-08T16:59:47.223Z] [BOT] 💾 Saved posted_jobs.json: 1468 active jobs
[2026-01-08T16:59:47.223Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T16:59:47.223Z] [BOT] 💾 Marked as posted:  BizOps Lead, BD @ brex (instance #1)
💾 BEFORE ARCHIVING: 1469 jobs in database
[2026-01-08T16:59:47.224Z] [BOT] ✅ No jobs to archive (all 1469 jobs within 7-day window)
[2026-01-08T16:59:47.236Z] [BOT] 💾 Saved posted_jobs.json: 1469 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T16:59:50.237Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T16:59:50.238Z] [BOT] ⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
[2026-01-08T16:59:50.242Z] [BOT] ✅ Loaded pending queue: 156 total (136 pending, 20 enriched, 0 posted)
[2026-01-08T16:59:50.249Z] [BOT] ✅ Saved pending queue: 156 total (136 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T16:59:50.249Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T16:59:50.301Z] [BOT] 📂 Loaded 2424 existing routing entries
[2026-01-08T16:59:50.358Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-08T16:59:50.358Z] [BOT] Total entries: 2425
   Timestamp: 2026-01-08T16:59:50.347Z
[2026-01-08T16:59:50.358Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T16:59:50.358Z] [BOT] Total attempts: 18
   Successful: 2
   Failed: 0
   Skipped: 16
[2026-01-08T16:59:50.358Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-08T16:59:50.359Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-08T16:59:50.359Z] [BOT] [STATS] Channel stats saved
[2026-01-08T16:59:52.369Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2615) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*