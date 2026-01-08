# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T18:07:48.091Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T18:07:36.490Z] ========================================
[2026-01-08T18:07:36.492Z] Discord Bot Execution Log
[2026-01-08T18:07:36.492Z] Environment: GitHub Actions
[2026-01-08T18:07:36.492Z] Node Version: v20.19.6
[2026-01-08T18:07:36.492Z] ========================================
[2026-01-08T18:07:36.492Z] Environment Variables Check:
[2026-01-08T18:07:36.492Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T18:07:36.492Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.492Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T18:07:36.493Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T18:07:36.493Z] 
Multi-Channel Configuration:
[2026-01-08T18:07:36.493Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T18:07:36.493Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T18:07:36.494Z] 
Data Files Check:
[2026-01-08T18:07:36.495Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157989 bytes)
[2026-01-08T18:07:36.500Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 756902 bytes)
[2026-01-08T18:07:36.500Z] 
========================================
[2026-01-08T18:07:36.500Z] Starting Enhanced Discord Bot...
[2026-01-08T18:07:36.500Z] ========================================
[2026-01-08T18:07:37.018Z] [BOT] ✅ Loaded V2 database: 1472 jobs
[2026-01-08T18:07:38.014Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T18:07:38.014Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T18:07:38.015Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T18:07:38.022Z] [BOT] ✅ Loaded pending queue: 164 total (144 pending, 20 enriched, 0 posted)
[2026-01-08T18:07:38.022Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Marketing Lead, Agents at anthropic
[2026-01-08T18:07:38.024Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
[2026-01-08T18:07:38.024Z] [BOT] ⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-08T18:07:38.024Z] [BOT] ⏭️  Skipping duplicate: JID_6e47819d (posted within 7 days)
[2026-01-08T18:07:38.024Z] [BOT] ⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_b787de31 (posted within 7 days)
[2026-01-08T18:07:38.024Z] [BOT] ⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:07:38.025Z] [BOT] ⏭️  Skipping duplicate: JID_543d933c (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_9d3cd40a (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:07:38.025Z] [BOT] ⏭️  Skipping duplicate: JID_e7506224 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T18:07:38.025Z] [BOT] ⏭️  Skipping duplicate: JID_8a0f0600 (posted within 7 days)
⏭️ Skipping already posted: Finance Systems, Finance & Strategy Lead at anthropic
⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
[2026-01-08T18:07:38.025Z] [BOT] ⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:07:38.025Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:07:38.025Z] [BOT] ⏭️  Skipping duplicate: JID_4c79ae31 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T18:07:38.025Z] [BOT] ⏭️  Skipping duplicate: JID_b4d01207 (posted within 7 days)
⏭️ Skipping already posted:  BizOps Lead, BD at brex
[2026-01-08T18:07:38.025Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
⏭️ Skipping already posted: Specialist - Data Transfer - Integration & Quality at BNY
⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T18:07:38.026Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T18:07:38.026Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T18:07:38.026Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T18:07:38.026Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-08T18:07:38.026Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T18:07:38.026Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T18:07:38.027Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T18:07:38.027Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T18:07:38.030Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-08T18:07:38.031Z] [BOT] 📍 [ROUTING] "Product Marketing Lead, Agents" @ anthropic
[2026-01-08T18:07:38.031Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-08T18:07:38.036Z] [BOT ERROR] (node:2367) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T18:07:38.525Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Lead, Agents @ anthropic in #💲・sales-jobs
[2026-01-08T18:07:38.525Z] [BOT] ✅ Industry: Product Marketing Lead, Agents @ anthropic
[2026-01-08T18:07:40.289Z] [BOT] ✅ Created forum post: 🏢 Product Marketing Lead, Agents @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-08T18:07:41.789Z] [BOT] 💾 Marked as posted: Product Marketing Lead, Agents @ anthropic (instance #1)
[2026-01-08T18:07:41.789Z] [BOT] 💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T18:07:41.791Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T18:07:41.792Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-08T18:07:41.792Z] [BOT] ✅ Archiving complete: 2 archived, 1471 active
[2026-01-08T18:07:41.802Z] [BOT] 💾 Saved posted_jobs.json: 1471 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T18:07:44.803Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T18:07:44.803Z] [BOT] ⏭️  Skipping duplicate: JID_c15de4f7 (posted within 7 days)
[2026-01-08T18:07:44.809Z] [BOT] ✅ Loaded pending queue: 164 total (144 pending, 20 enriched, 0 posted)
[2026-01-08T18:07:44.817Z] [BOT] ✅ Saved pending queue: 164 total (144 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T18:07:44.873Z] [BOT] 📂 Loaded 2428 existing routing entries
[2026-01-08T18:07:44.925Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-08T18:07:44.926Z] [BOT] Total entries: 2429
   Timestamp: 2026-01-08T18:07:44.916Z
[2026-01-08T18:07:44.926Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T18:07:44.926Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T18:07:44.926Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T18:07:44.926Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-08T18:07:44.927Z] [BOT] [STATS] Channel stats saved
[2026-01-08T18:07:46.938Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2367) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*