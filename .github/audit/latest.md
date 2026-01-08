# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T22:25:32.470Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T22:25:21.139Z] ========================================
[2026-01-08T22:25:21.140Z] Discord Bot Execution Log
[2026-01-08T22:25:21.140Z] Environment: GitHub Actions
[2026-01-08T22:25:21.140Z] Node Version: v20.19.6
[2026-01-08T22:25:21.140Z] ========================================
[2026-01-08T22:25:21.140Z] Environment Variables Check:
[2026-01-08T22:25:21.140Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T22:25:21.141Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T22:25:21.141Z] 
Multi-Channel Configuration:
[2026-01-08T22:25:21.141Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T22:25:21.141Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T22:25:21.141Z] 
Data Files Check:
[2026-01-08T22:25:21.143Z] .github/data/new_jobs.json: ✅ Exists (10 items, 155468 bytes)
[2026-01-08T22:25:21.149Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 756056 bytes)
[2026-01-08T22:25:21.149Z] 
========================================
[2026-01-08T22:25:21.149Z] Starting Enhanced Discord Bot...
[2026-01-08T22:25:21.149Z] ========================================
[2026-01-08T22:25:21.599Z] [BOT] ✅ Loaded V2 database: 1472 jobs
[2026-01-08T22:25:22.735Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T22:25:22.736Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T22:25:22.736Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T22:25:22.744Z] [BOT] ✅ Loaded pending queue: 178 total (158 pending, 20 enriched, 0 posted)
[2026-01-08T22:25:22.744Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer at brex
[2026-01-08T22:25:22.745Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-08T22:25:22.746Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-08T22:25:22.746Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T22:25:22.746Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
[2026-01-08T22:25:22.746Z] [BOT] ⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
[2026-01-08T22:25:22.746Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer, Applied AI at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T22:25:22.746Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T22:25:22.746Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T22:25:22.747Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T22:25:22.747Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T22:25:22.747Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T22:25:22.747Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T22:25:22.747Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T22:25:22.747Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T22:25:22.748Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T22:25:22.748Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
📬 Found 2 new jobs (18 already posted)...
[2026-01-08T22:25:22.748Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-08T22:25:22.748Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T22:25:22.748Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
   (1 grouped as same job with different locations)
[2026-01-08T22:25:22.748Z] [BOT] 📍 1 jobs with multiple locations:
   - Data Engineer @ brex: new york, new york, united states, san francisco, california, united states
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T22:25:22.749Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-08T22:25:22.750Z] [BOT] 📍 [ROUTING] "Data Engineer" @ brex
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-08T22:25:22.751Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-08T22:25:22.755Z] [BOT ERROR] (node:2664) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T22:25:22.940Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ brex in #📈・JID_fb739488
[2026-01-08T22:25:22.940Z] [BOT] ✅ Industry: Data Engineer @ brex
[2026-01-08T22:25:24.760Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ brex in #🗽・new-york
[2026-01-08T22:25:24.760Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-08T22:25:26.261Z] [BOT] 💾 Marked as posted: Data Engineer @ brex (instance #1)
[2026-01-08T22:25:26.261Z] [BOT] 💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T22:25:26.262Z] [BOT] ✅ No jobs to archive (all 1473 jobs within 7-day window)
[2026-01-08T22:25:26.274Z] [BOT] 💾 Saved posted_jobs.json: 1473 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T22:25:26.275Z] [BOT] 💾 Marked as posted: Data Engineer @ brex (instance #1)
[2026-01-08T22:25:26.275Z] [BOT] 💾 BEFORE ARCHIVING: 1474 jobs in database
[2026-01-08T22:25:26.276Z] [BOT] ✅ No jobs to archive (all 1474 jobs within 7-day window)
[2026-01-08T22:25:26.285Z] [BOT] 💾 Saved posted_jobs.json: 1474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T22:25:29.286Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T22:25:29.287Z] [BOT] ⏭️  Skipping duplicate: JID_fa7d515d (posted within 7 days)
[2026-01-08T22:25:29.294Z] [BOT] ✅ Loaded pending queue: 178 total (158 pending, 20 enriched, 0 posted)
[2026-01-08T22:25:29.302Z] [BOT] ✅ Saved pending queue: 178 total (158 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T22:25:29.355Z] [BOT] 📂 Loaded 2444 existing routing entries
[2026-01-08T22:25:29.411Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2445
[2026-01-08T22:25:29.411Z] [BOT] Timestamp: 2026-01-08T22:25:29.398Z
[2026-01-08T22:25:29.411Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 20
[2026-01-08T22:25:29.411Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 18
[2026-01-08T22:25:29.412Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-08T22:25:29.412Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-08T22:25:29.412Z] [BOT] [STATS] Channel stats saved
[2026-01-08T22:25:31.423Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2664) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*