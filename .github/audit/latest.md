# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T20:53:29.864Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T20:53:18.774Z] ========================================
[2026-01-08T20:53:18.776Z] Discord Bot Execution Log
[2026-01-08T20:53:18.776Z] Environment: GitHub Actions
[2026-01-08T20:53:18.776Z] Node Version: v20.19.6
[2026-01-08T20:53:18.776Z] ========================================
[2026-01-08T20:53:18.777Z] Environment Variables Check:
[2026-01-08T20:53:18.777Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T20:53:18.777Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.777Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T20:53:18.777Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T20:53:18.777Z] 
Multi-Channel Configuration:
[2026-01-08T20:53:18.777Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.777Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.777Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.777Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.778Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.778Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.778Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.778Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.778Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T20:53:18.778Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T20:53:18.778Z] 
Data Files Check:
[2026-01-08T20:53:18.779Z] .github/data/new_jobs.json: ✅ Exists (10 items, 143075 bytes)
[2026-01-08T20:53:18.785Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 757583 bytes)
[2026-01-08T20:53:18.785Z] 
========================================
[2026-01-08T20:53:18.785Z] Starting Enhanced Discord Bot...
[2026-01-08T20:53:18.785Z] ========================================
[2026-01-08T20:53:19.301Z] [BOT] ✅ Loaded V2 database: 1474 jobs
[2026-01-08T20:53:19.993Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
🔍 DEBUG: GUILD_ID = "" (type: string)
[2026-01-08T20:53:19.993Z] [BOT] 🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T20:53:19.994Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T20:53:20.000Z] [BOT] ✅ Loaded pending queue: 174 total (154 pending, 20 enriched, 0 posted)
[2026-01-08T20:53:20.000Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Engineer, Applied AI at anthropic
[2026-01-08T20:53:20.001Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T20:53:20.002Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-08T20:53:20.002Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
[2026-01-08T20:53:20.002Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T20:53:20.002Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
[2026-01-08T20:53:20.002Z] [BOT] ⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
[2026-01-08T20:53:20.003Z] [BOT] ⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T20:53:20.003Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T20:53:20.003Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T20:53:20.003Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-08T20:53:20.003Z] [BOT] ⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T20:53:20.003Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T20:53:20.003Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T20:53:20.003Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-08T20:53:20.004Z] [BOT] ⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-08T20:53:20.004Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T20:53:20.004Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T20:53:20.004Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-08T20:53:20.004Z] [BOT] ⏭️  Skipping duplicate: JID_a7381fab-science_2024014 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant - Csd - School of Computer Science at Carnegie Mellon University
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T20:53:20.004Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T20:53:20.005Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T20:53:20.005Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T20:53:20.005Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T20:53:20.006Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T20:53:20.007Z] [BOT] 📍 [ROUTING] "Product Engineer, Applied AI" @ anthropic
[2026-01-08T20:53:20.007Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T20:53:20.008Z] [BOT] ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T20:53:20.012Z] [BOT ERROR] (node:2755) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T20:53:20.680Z] [BOT] ✅ Created forum post: 🏢 Product Engineer, Applied AI @ anthropic in #🤖・ai-jobs
[2026-01-08T20:53:20.680Z] [BOT] ✅ Industry: Product Engineer, Applied AI @ anthropic
[2026-01-08T20:53:22.392Z] [BOT] ✅ Created forum post: 🏢 Product Engineer, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-08T20:53:23.893Z] [BOT] 💾 Marked as posted: Product Engineer, Applied AI @ anthropic (instance #1)
[2026-01-08T20:53:23.893Z] [BOT] 💾 BEFORE ARCHIVING: 1475 jobs in database
[2026-01-08T20:53:23.894Z] [BOT] ✅ No jobs to archive (all 1475 jobs within 7-day window)
[2026-01-08T20:53:23.910Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T20:53:26.911Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T20:53:26.911Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-08T20:53:26.917Z] [BOT] ✅ Loaded pending queue: 174 total (154 pending, 20 enriched, 0 posted)
[2026-01-08T20:53:26.930Z] [BOT] ✅ Saved pending queue: 174 total (154 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T20:53:26.930Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T20:53:26.980Z] [BOT] 📂 Loaded 2440 existing routing entries
[2026-01-08T20:53:27.035Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2441
   Timestamp: 2026-01-08T20:53:27.024Z
[2026-01-08T20:53:27.036Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T20:53:27.036Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T20:53:27.036Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T20:53:27.036Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-08T20:53:27.036Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-08T20:53:27.037Z] [BOT] [STATS] Channel stats saved
[2026-01-08T20:53:29.051Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2755) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*