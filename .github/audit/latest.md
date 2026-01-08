# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T15:27:01.618Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T15:26:50.019Z] ========================================
[2026-01-08T15:26:50.021Z] Discord Bot Execution Log
[2026-01-08T15:26:50.021Z] Environment: GitHub Actions
[2026-01-08T15:26:50.021Z] Node Version: v20.19.6
[2026-01-08T15:26:50.021Z] ========================================
[2026-01-08T15:26:50.021Z] Environment Variables Check:
[2026-01-08T15:26:50.021Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T15:26:50.021Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.021Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T15:26:50.021Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T15:26:50.022Z] 
Multi-Channel Configuration:
[2026-01-08T15:26:50.022Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T15:26:50.022Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T15:26:50.022Z] 
Data Files Check:
[2026-01-08T15:26:50.024Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157184 bytes)
[2026-01-08T15:26:50.029Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 752959 bytes)
[2026-01-08T15:26:50.029Z] 
========================================
[2026-01-08T15:26:50.029Z] Starting Enhanced Discord Bot...
[2026-01-08T15:26:50.029Z] ========================================
[2026-01-08T15:26:50.555Z] [BOT] ✅ Loaded V2 database: 1463 jobs
[2026-01-08T15:26:51.600Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T15:26:51.601Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T15:26:51.601Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T15:26:51.608Z] [BOT] ✅ Loaded pending queue: 152 total (132 pending, 20 enriched, 0 posted)
[2026-01-08T15:26:51.609Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Postdoctoral Research Associate - Computational Imaging and Data Science at Brookhaven Lab
[2026-01-08T15:26:51.610Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T15:26:51.610Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T15:26:51.610Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T15:26:51.610Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-08T15:26:51.611Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-08T15:26:51.611Z] [BOT] ⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T15:26:51.611Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T15:26:51.611Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T15:26:51.611Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T15:26:51.611Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T15:26:51.612Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T15:26:51.612Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
[2026-01-08T15:26:51.612Z] [BOT] ⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
[2026-01-08T15:26:51.612Z] [BOT] ⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
[2026-01-08T15:26:51.612Z] [BOT] ⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
[2026-01-08T15:26:51.612Z] [BOT] ⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
[2026-01-08T15:26:51.612Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
📬 Found 1 new jobs (19 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T15:26:51.612Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T15:26:51.613Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T15:26:51.613Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T15:26:51.613Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T15:26:51.615Z] [BOT] 📍 [ROUTING] "Postdoctoral Research Associate - Computational Imaging and Data Science" @ ORG_13e36faa Lab
   Category: AI (matched: "machine learning")
[2026-01-08T15:26:51.615Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-08T15:26:51.619Z] [BOT ERROR] (node:2964) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T15:26:51.862Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Computational Imaging and Data Science @ ORG_13e36faa Lab in #🤖・ai-jobs
  ✅ Industry: Postdoctoral Research Associate - Computational Imaging and Data Science @ ORG_13e36faa Lab
[2026-01-08T15:26:53.607Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Research Associate - Computational Imaging and Data Science @ ORG_13e36faa Lab in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T15:26:55.109Z] [BOT] 💾 Marked as posted: Postdoctoral Research Associate - Computational Imaging and Data Science @ ORG_13e36faa Lab (instance #1)
[2026-01-08T15:26:55.109Z] [BOT] 💾 BEFORE ARCHIVING: 1464 jobs in database
[2026-01-08T15:26:55.110Z] [BOT] ✅ No jobs to archive (all 1464 jobs within 7-day window)
[2026-01-08T15:26:55.126Z] [BOT] 💾 Saved posted_jobs.json: 1464 active jobs
[2026-01-08T15:26:55.126Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T15:26:58.127Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T15:26:58.127Z] [BOT] ⏭️  Skipping duplicate: JID_2098b214-_jr102004-1 (posted within 7 days)
[2026-01-08T15:26:58.133Z] [BOT] ✅ Loaded pending queue: 152 total (132 pending, 20 enriched, 0 posted)
[2026-01-08T15:26:58.143Z] [BOT] ✅ Saved pending queue: 152 total (132 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T15:26:58.143Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T15:26:58.195Z] [BOT] 📂 Loaded 2420 existing routing entries
[2026-01-08T15:26:58.256Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-08T15:26:58.256Z] [BOT] Total entries: 2421
   Timestamp: 2026-01-08T15:26:58.245Z
[2026-01-08T15:26:58.256Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 21
[2026-01-08T15:26:58.256Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T15:26:58.256Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-08T15:26:58.257Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-08T15:26:58.257Z] [BOT] [STATS] Channel stats saved
[2026-01-08T15:27:00.267Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2964) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*