# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T19:25:47.078Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T19:25:35.910Z] ========================================
[2026-01-08T19:25:35.912Z] Discord Bot Execution Log
[2026-01-08T19:25:35.912Z] Environment: GitHub Actions
[2026-01-08T19:25:35.912Z] Node Version: v20.19.6
[2026-01-08T19:25:35.912Z] ========================================
[2026-01-08T19:25:35.912Z] Environment Variables Check:
[2026-01-08T19:25:35.912Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T19:25:35.912Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.912Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T19:25:35.912Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T19:25:35.912Z] 
Multi-Channel Configuration:
[2026-01-08T19:25:35.913Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T19:25:35.913Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T19:25:35.913Z] 
Data Files Check:
[2026-01-08T19:25:35.915Z] .github/data/new_jobs.json: ✅ Exists (10 items, 174835 bytes)
[2026-01-08T19:25:35.920Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 755343 bytes)
[2026-01-08T19:25:35.920Z] 
========================================
[2026-01-08T19:25:35.920Z] Starting Enhanced Discord Bot...
[2026-01-08T19:25:35.920Z] ========================================
[2026-01-08T19:25:36.457Z] [BOT] ✅ Loaded V2 database: 1471 jobs
[2026-01-08T19:25:37.226Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T19:25:37.226Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T19:25:37.226Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T19:25:37.235Z] [BOT] ✅ Loaded pending queue: 170 total (150 pending, 20 enriched, 0 posted)
[2026-01-08T19:25:37.236Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager- UI, Claude Consumer Products at anthropic
[2026-01-08T19:25:37.236Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-08T19:25:37.236Z] [BOT] ⏭️ Skipping already posted: Engineering Manager- UI, Claude Consumer Products at anthropic
[2026-01-08T19:25:37.237Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T19:25:37.238Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T19:25:37.238Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T19:25:37.238Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-08T19:25:37.238Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T19:25:37.238Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T19:25:37.239Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T19:25:37.239Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T19:25:37.239Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
[2026-01-08T19:25:37.239Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-01-08T19:25:37.239Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-08T19:25:37.239Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
[2026-01-08T19:25:37.239Z] [BOT] ⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
⏭️  Skipping duplicate: JID_c4ab4833 (posted within 7 days)
[2026-01-08T19:25:37.239Z] [BOT] ⏭️ Skipping already posted: ROLE_2e7e0a29 at Capco
[2026-01-08T19:25:37.240Z] [BOT] ⏭️  Skipping duplicate: JID_d55d35a3 (posted within 7 days)
⏭️ Skipping already posted: Senior Data Scientist, Finance  at brex
⏭️  Skipping duplicate: JID_48157790 (posted within 7 days)
⏭️ Skipping already posted: Senior Data Scientist, Finance  at brex
[2026-01-08T19:25:37.240Z] [BOT] ⏭️  Skipping duplicate: JID_82b91f04 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer, Observability at airtable
[2026-01-08T19:25:37.240Z] [BOT] ⏭️  Skipping duplicate: JID_c15de4f7 (posted within 7 days)
⏭️ Skipping already posted: Product Marketing Lead, Agents at anthropic
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T19:25:37.240Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T19:25:37.241Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T19:25:37.241Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T19:25:37.242Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-08T19:25:37.244Z] [BOT] 📍 [ROUTING] "Engineering Manager, UI Platform" @ anthropic
[2026-01-08T19:25:37.244Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T19:25:37.248Z] [BOT ERROR] (node:2404) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T19:25:37.545Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, UI Platform @ anthropic in #💻・tech-jobs
[2026-01-08T19:25:37.545Z] [BOT] ✅ Industry: Engineering Manager, UI Platform @ anthropic
[2026-01-08T19:25:39.284Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, UI Platform @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-08T19:25:40.785Z] [BOT] 💾 Marked as posted: Engineering Manager, UI Platform @ anthropic (instance #1)
[2026-01-08T19:25:40.785Z] [BOT] 💾 BEFORE ARCHIVING: 1472 jobs in database
[2026-01-08T19:25:40.786Z] [BOT] ✅ No jobs to archive (all 1472 jobs within 7-day window)
[2026-01-08T19:25:40.797Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
[2026-01-08T19:25:40.797Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T19:25:43.798Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T19:25:43.798Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T19:25:43.805Z] [BOT] ✅ Loaded pending queue: 170 total (150 pending, 20 enriched, 0 posted)
[2026-01-08T19:25:43.817Z] [BOT] ✅ Saved pending queue: 170 total (150 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T19:25:43.818Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T19:25:43.869Z] [BOT] 📂 Loaded 2434 existing routing entries
[2026-01-08T19:25:43.925Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2435
   Timestamp: 2026-01-08T19:25:43.915Z
[2026-01-08T19:25:43.926Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T19:25:43.926Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T19:25:43.926Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
[2026-01-08T19:25:43.926Z] [BOT] Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-08T19:25:43.927Z] [BOT] [STATS] Channel stats saved
[2026-01-08T19:25:45.936Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2404) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*