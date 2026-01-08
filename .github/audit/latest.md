# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T21:39:29.336Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T21:39:18.957Z] ========================================
[2026-01-08T21:39:18.959Z] Discord Bot Execution Log
[2026-01-08T21:39:18.959Z] Environment: GitHub Actions
[2026-01-08T21:39:18.959Z] Node Version: v20.19.6
[2026-01-08T21:39:18.959Z] ========================================
[2026-01-08T21:39:18.959Z] Environment Variables Check:
[2026-01-08T21:39:18.959Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T21:39:18.960Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.960Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T21:39:18.960Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T21:39:18.960Z] 
Multi-Channel Configuration:
[2026-01-08T21:39:18.960Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.960Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.960Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.960Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.960Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.960Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.961Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.961Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.961Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T21:39:18.961Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T21:39:18.961Z] 
Data Files Check:
[2026-01-08T21:39:18.962Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143144 bytes)
[2026-01-08T21:39:18.968Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758066 bytes)
[2026-01-08T21:39:18.968Z] 
========================================
[2026-01-08T21:39:18.968Z] Starting Enhanced Discord Bot...
[2026-01-08T21:39:18.968Z] ========================================
[2026-01-08T21:39:19.482Z] [BOT] ✅ Loaded V2 database: 1475 jobs
[2026-01-08T21:39:20.019Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T21:39:20.020Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T21:39:20.020Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T21:39:20.028Z] [BOT] ✅ Loaded pending queue: 175 total (155 pending, 20 enriched, 0 posted)
[2026-01-08T21:39:20.029Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-08T21:39:20.030Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-08T21:39:20.030Z] [BOT] ⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T21:39:20.030Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
[2026-01-08T21:39:20.030Z] [BOT] ⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-08T21:39:20.030Z] [BOT] ⏭️ Skipping already posted: Product Engineer, Applied AI at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T21:39:20.031Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T21:39:20.031Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T21:39:20.031Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T21:39:20.031Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T21:39:20.031Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T21:39:20.031Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-08T21:39:20.031Z] [BOT] ⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T21:39:20.031Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-08T21:39:20.031Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-08T21:39:20.032Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-08T21:39:20.032Z] [BOT] ⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-08T21:39:20.032Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
📬 Found 1 new jobs (19 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T21:39:20.032Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T21:39:20.032Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T21:39:20.032Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T21:39:20.035Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-08T21:39:20.036Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Boston (Spanish-speaking)" @ datadog
[2026-01-08T21:39:20.036Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-08T21:39:20.041Z] [BOT ERROR] (node:2742) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T21:39:20.186Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Spanish-speaking) @ datadog in #💲・sales-jobs
[2026-01-08T21:39:20.186Z] [BOT] ✅ Industry: Customer Success Associate - Boston (Spanish-speaking) @ datadog
[2026-01-08T21:39:22.078Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Boston (Spanish-speaking) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-08T21:39:23.580Z] [BOT] 💾 Marked as posted: Customer Success Associate - Boston (Spanish-speaking) @ datadog (instance #1)
[2026-01-08T21:39:23.580Z] [BOT] 💾 BEFORE ARCHIVING: 1476 jobs in database
[2026-01-08T21:39:23.581Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T21:39:23.586Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-08T21:39:23.586Z] [BOT] ✅ Archiving complete: 1 archived, 1475 active
[2026-01-08T21:39:23.597Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
[2026-01-08T21:39:23.597Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T21:39:26.597Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T21:39:26.598Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-08T21:39:26.604Z] [BOT] ✅ Loaded pending queue: 175 total (155 pending, 20 enriched, 0 posted)
[2026-01-08T21:39:26.617Z] [BOT] ✅ Saved pending queue: 175 total (155 pending, 19 enriched, 1 posted)
[2026-01-08T21:39:26.617Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T21:39:26.667Z] [BOT] 📂 Loaded 2442 existing routing entries
[2026-01-08T21:39:26.721Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-08T21:39:26.721Z] [BOT] Total entries: 2443
   Timestamp: 2026-01-08T21:39:26.710Z
[2026-01-08T21:39:26.721Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T21:39:26.722Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T21:39:26.722Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🚌・boston: 1 posts
[STATS] Channel stats saved
[2026-01-08T21:39:28.737Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2742) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*