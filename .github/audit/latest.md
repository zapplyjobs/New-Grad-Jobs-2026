# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T20:06:10.002Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T20:05:59.884Z] ========================================
[2026-01-08T20:05:59.885Z] Discord Bot Execution Log
[2026-01-08T20:05:59.886Z] Environment: GitHub Actions
[2026-01-08T20:05:59.886Z] Node Version: v20.19.6
[2026-01-08T20:05:59.886Z] ========================================
[2026-01-08T20:05:59.886Z] Environment Variables Check:
[2026-01-08T20:05:59.886Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T20:05:59.886Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.886Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T20:05:59.886Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T20:05:59.886Z] 
Multi-Channel Configuration:
[2026-01-08T20:05:59.886Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T20:05:59.887Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T20:05:59.887Z] 
Data Files Check:
[2026-01-08T20:05:59.888Z] .github/data/new_jobs.json: ✅ Exists (10 items, 132647 bytes)
[2026-01-08T20:05:59.894Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758819 bytes)
[2026-01-08T20:05:59.894Z] 
========================================
[2026-01-08T20:05:59.894Z] Starting Enhanced Discord Bot...
[2026-01-08T20:05:59.894Z] ========================================
[2026-01-08T20:06:00.423Z] [BOT] ✅ Loaded V2 database: 1476 jobs
[2026-01-08T20:06:00.781Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T20:06:00.781Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T20:06:00.782Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T20:06:00.791Z] [BOT] ✅ Loaded pending queue: 173 total (153 pending, 20 enriched, 0 posted)
[2026-01-08T20:06:00.791Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Business Development Representative - Backstage at spotify
[2026-01-08T20:06:00.792Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-08T20:06:00.792Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T20:06:00.793Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-08T20:06:00.793Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T20:06:00.793Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T20:06:00.793Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T20:06:00.793Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T20:06:00.794Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T20:06:00.794Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T20:06:00.794Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T20:06:00.794Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T20:06:00.794Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T20:06:00.794Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-08T20:06:00.794Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T20:06:00.794Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-08T20:06:00.794Z] [BOT] ⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T20:06:00.795Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T20:06:00.795Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-08T20:06:00.795Z] [BOT] ⏭️  Skipping duplicate: JID_a7381fab-science_2024014 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant - Csd - School of Computer Science at Carnegie Mellon University
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T20:06:00.795Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T20:06:00.795Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T20:06:00.796Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T20:06:00.796Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T20:06:00.796Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T20:06:00.798Z] [BOT] 📍 [ROUTING] "Business Development Representative - Backstage" @ spotify
   Category: AI (matched: "artificial intelligence")
[2026-01-08T20:06:00.798Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T20:06:00.815Z] [BOT ERROR] (node:2840) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T20:06:01.121Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative - Backstage @ spotify in #🤖・ai-jobs
  ✅ Industry: Business Development Representative - Backstage @ spotify
[2026-01-08T20:06:02.770Z] [BOT] ✅ Created forum post: 🏢 Business Development Representative - Backstage @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T20:06:04.271Z] [BOT] 💾 Marked as posted: Business Development Representative - Backstage @ spotify (instance #1)
[2026-01-08T20:06:04.272Z] [BOT] 💾 BEFORE ARCHIVING: 1477 jobs in database
[2026-01-08T20:06:04.273Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T20:06:04.278Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-08T20:06:04.278Z] [BOT] ✅ Archiving complete: 3 archived, 1474 active
[2026-01-08T20:06:04.291Z] [BOT] 💾 Saved posted_jobs.json: 1474 active jobs
[2026-01-08T20:06:04.291Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T20:06:07.292Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T20:06:07.293Z] [BOT] ⏭️  Skipping duplicate: JID_1701addd (posted within 7 days)
[2026-01-08T20:06:07.299Z] [BOT] ✅ Loaded pending queue: 173 total (153 pending, 20 enriched, 0 posted)
[2026-01-08T20:06:07.312Z] [BOT] ✅ Saved pending queue: 173 total (153 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T20:06:07.312Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T20:06:07.365Z] [BOT] 📂 Loaded 2439 existing routing entries
[2026-01-08T20:06:07.419Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-08T20:06:07.420Z] [BOT] Total entries: 2440
   Timestamp: 2026-01-08T20:06:07.409Z
[2026-01-08T20:06:07.420Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T20:06:07.420Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-08T20:06:07.421Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-08T20:06:07.421Z] [BOT] [STATS] Channel stats saved
[2026-01-08T20:06:09.435Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2840) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*