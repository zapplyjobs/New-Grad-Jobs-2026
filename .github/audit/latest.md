# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T22:53:43.734Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T22:53:32.311Z] ========================================
[2026-01-08T22:53:32.312Z] Discord Bot Execution Log
[2026-01-08T22:53:32.313Z] Environment: GitHub Actions
[2026-01-08T22:53:32.313Z] Node Version: v20.19.6
[2026-01-08T22:53:32.313Z] ========================================
[2026-01-08T22:53:32.313Z] Environment Variables Check:
[2026-01-08T22:53:32.313Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T22:53:32.313Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.313Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T22:53:32.313Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T22:53:32.313Z] 
Multi-Channel Configuration:
[2026-01-08T22:53:32.313Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.313Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T22:53:32.314Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T22:53:32.314Z] 
Data Files Check:
[2026-01-08T22:53:32.315Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167323 bytes)
[2026-01-08T22:53:32.321Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 756884 bytes)
[2026-01-08T22:53:32.321Z] 
========================================
[2026-01-08T22:53:32.321Z] Starting Enhanced Discord Bot...
[2026-01-08T22:53:32.321Z] ========================================
[2026-01-08T22:53:32.838Z] [BOT] ✅ Loaded V2 database: 1474 jobs
[2026-01-08T22:53:33.529Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T22:53:33.530Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T22:53:33.530Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T22:53:33.539Z] [BOT] ✅ Loaded pending queue: 177 total (157 pending, 20 enriched, 0 posted)
[2026-01-08T22:53:33.539Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T22:53:33.541Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-08T22:53:33.541Z] [BOT] ⏭️ Skipping already posted: Product Engineer, Applied AI, Digital Natives Business at anthropic
[2026-01-08T22:53:33.541Z] [BOT] ⏭️  Skipping duplicate: JID_fa7d515d (posted within 7 days)
[2026-01-08T22:53:33.542Z] [BOT] ⏭️ Skipping already posted: ROLE_ebcb7463 at brex
⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
[2026-01-08T22:53:33.542Z] [BOT] ⏭️ Skipping already posted: ROLE_ebcb7463 at brex
[2026-01-08T22:53:33.542Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T22:53:33.542Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T22:53:33.542Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
[2026-01-08T22:53:33.542Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T22:53:33.543Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T22:53:33.543Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T22:53:33.543Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T22:53:33.543Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T22:53:33.543Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T22:53:33.543Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-08T22:53:33.543Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
📬 Found 2 new jobs (18 already posted)...
[2026-01-08T22:53:33.544Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-08T22:53:33.544Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T22:53:33.544Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T22:53:33.544Z] [BOT] (1 grouped as same job with different locations)
📍 1 jobs with multiple locations:
   - Manager, Mid-Market Sales (Client Account Executives) @ reddit: san francisco, new york
[2026-01-08T22:53:33.544Z] [BOT] ⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T22:53:33.545Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T22:53:33.548Z] [BOT] 📍 [ROUTING] "Manager, Mid-Market Sales (Client Account Executives)" @ reddit
[2026-01-08T22:53:33.548Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T22:53:33.553Z] [BOT ERROR] (node:2646) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T22:53:34.003Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales (Client Account Executives) @ reddit in #🤖・ai-jobs
[2026-01-08T22:53:34.003Z] [BOT] ✅ Industry: Manager, Mid-Market Sales (Client Account Executives) @ reddit
[2026-01-08T22:53:35.739Z] [BOT] ✅ Created forum post: 🏢 Manager, Mid-Market Sales (Client Account Executives) @ reddit in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-08T22:53:37.240Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales (Client Account Executives) @ reddit (instance #1)
[2026-01-08T22:53:37.241Z] [BOT] 💾 BEFORE ARCHIVING: 1475 jobs in database
[2026-01-08T22:53:37.242Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T22:53:37.247Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-08T22:53:37.247Z] [BOT] ✅ Archiving complete: 3 archived, 1472 active
[2026-01-08T22:53:37.258Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
[2026-01-08T22:53:37.258Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T22:53:37.258Z] [BOT] 💾 Marked as posted: Manager, Mid-Market Sales (Client Account Executives) @ reddit (instance #1)
💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T22:53:37.259Z] [BOT] ✅ No jobs to archive (all 1473 jobs within 7-day window)
[2026-01-08T22:53:37.268Z] [BOT] 💾 Saved posted_jobs.json: 1473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T22:53:40.269Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T22:53:40.270Z] [BOT] ⏭️  Skipping duplicate: JID_7d40f03b (posted within 7 days)
[2026-01-08T22:53:40.276Z] [BOT] ✅ Loaded pending queue: 177 total (157 pending, 20 enriched, 0 posted)
[2026-01-08T22:53:40.288Z] [BOT] ✅ Saved pending queue: 177 total (157 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T22:53:40.288Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T22:53:40.340Z] [BOT] 📂 Loaded 2445 existing routing entries
[2026-01-08T22:53:40.394Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2446
   Timestamp: 2026-01-08T22:53:40.383Z
[2026-01-08T22:53:40.395Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 20
   Successful: 2
   Failed: 0
   Skipped: 18
📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T22:53:40.395Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-08T22:53:40.395Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-08T22:53:40.395Z] [BOT] [STATS] Channel stats saved
[2026-01-08T22:53:42.410Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2646) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*