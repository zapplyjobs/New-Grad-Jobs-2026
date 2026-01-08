# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T17:11:23.699Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T17:11:12.921Z] ========================================
[2026-01-08T17:11:12.923Z] Discord Bot Execution Log
[2026-01-08T17:11:12.923Z] Environment: GitHub Actions
[2026-01-08T17:11:12.923Z] Node Version: v20.19.6
[2026-01-08T17:11:12.923Z] ========================================
[2026-01-08T17:11:12.923Z] Environment Variables Check:
[2026-01-08T17:11:12.923Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T17:11:12.923Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.923Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T17:11:12.924Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T17:11:12.924Z] 
Multi-Channel Configuration:
[2026-01-08T17:11:12.924Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T17:11:12.924Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T17:11:12.925Z] 
Data Files Check:
[2026-01-08T17:11:12.926Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140503 bytes)
[2026-01-08T17:11:12.931Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 755913 bytes)
[2026-01-08T17:11:12.932Z] 
========================================
[2026-01-08T17:11:12.932Z] Starting Enhanced Discord Bot...
[2026-01-08T17:11:12.932Z] ========================================
[2026-01-08T17:11:13.463Z] [BOT] ✅ Loaded V2 database: 1469 jobs
[2026-01-08T17:11:14.112Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T17:11:14.112Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T17:11:14.112Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T17:11:14.120Z] [BOT] ✅ Loaded pending queue: 157 total (137 pending, 20 enriched, 0 posted)
[2026-01-08T17:11:14.121Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: BizOps Lead, BD at brex
[2026-01-08T17:11:14.121Z] [BOT] ⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
[2026-01-08T17:11:14.121Z] [BOT] ⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T17:11:14.122Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
[2026-01-08T17:11:14.122Z] [BOT] ⏭️ Skipping already posted: BizOps Lead, BD at brex
⏭️  Skipping duplicate: JID_4c79ae31 (posted within 7 days)
[2026-01-08T17:11:14.122Z] [BOT] ⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T17:11:14.122Z] [BOT] ⏭️  Skipping duplicate: JID_b4d01207 (posted within 7 days)
⏭️ Skipping already posted:  BizOps Lead, BD at brex
[2026-01-08T17:11:14.123Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
[2026-01-08T17:11:14.123Z] [BOT] ⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T17:11:14.123Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T17:11:14.123Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T17:11:14.124Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T17:11:14.124Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-08T17:11:14.124Z] [BOT] ⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T17:11:14.124Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T17:11:14.124Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T17:11:14.124Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
[2026-01-08T17:11:14.124Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_aeb89c5c-developer_r260376 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4a3a3618 at Uline
[2026-01-08T17:11:14.124Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
[2026-01-08T17:11:14.125Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T17:11:14.125Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T17:11:14.125Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T17:11:14.125Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T17:11:14.125Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T17:11:14.127Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-08T17:11:14.128Z] [BOT] 📍 [ROUTING] "Specialist - Data Transfer - Integration & Quality" @ ORG_01d9a8c4
[2026-01-08T17:11:14.128Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T17:11:14.133Z] [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T17:11:14.316Z] [BOT] ✅ Created forum post: 🏢 Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 in #💻・tech-jobs
[2026-01-08T17:11:14.316Z] [BOT] ✅ Industry: Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4
[2026-01-08T17:11:16.212Z] [BOT] ✅ Created forum post: 🏢 Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-08T17:11:17.713Z] [BOT] 💾 Marked as posted: Specialist - Data Transfer - Integration & Quality @ ORG_01d9a8c4 (instance #1)
[2026-01-08T17:11:17.713Z] [BOT] 💾 BEFORE ARCHIVING: 1470 jobs in database
[2026-01-08T17:11:17.715Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T17:11:17.719Z] [BOT] 📦 Archived 2 jobs to 2026-01.json (2 total in archive)
[2026-01-08T17:11:17.720Z] [BOT] ✅ Archiving complete: 2 archived, 1468 active
[2026-01-08T17:11:17.731Z] [BOT] 💾 Saved posted_jobs.json: 1468 active jobs
[2026-01-08T17:11:17.731Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T17:11:20.732Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T17:11:20.732Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
[2026-01-08T17:11:20.737Z] [BOT] ✅ Loaded pending queue: 157 total (137 pending, 20 enriched, 0 posted)
[2026-01-08T17:11:20.746Z] [BOT] ✅ Saved pending queue: 157 total (137 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T17:11:20.799Z] [BOT] 📂 Loaded 2425 existing routing entries
[2026-01-08T17:11:20.858Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2426
[2026-01-08T17:11:20.859Z] [BOT] Timestamp: 2026-01-08T17:11:20.848Z
[2026-01-08T17:11:20.859Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T17:11:20.859Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-08T17:11:20.860Z] [BOT] 1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-08T17:11:20.860Z] [BOT] [STATS] Channel stats saved
[2026-01-08T17:11:22.871Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2614) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*