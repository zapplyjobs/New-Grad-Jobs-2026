# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T22:06:22.851Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T22:06:11.565Z] ========================================
[2026-01-08T22:06:11.567Z] Discord Bot Execution Log
[2026-01-08T22:06:11.567Z] Environment: GitHub Actions
[2026-01-08T22:06:11.567Z] Node Version: v20.19.6
[2026-01-08T22:06:11.567Z] ========================================
[2026-01-08T22:06:11.567Z] Environment Variables Check:
[2026-01-08T22:06:11.567Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T22:06:11.567Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.567Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T22:06:11.568Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T22:06:11.568Z] 
Multi-Channel Configuration:
[2026-01-08T22:06:11.568Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T22:06:11.568Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T22:06:11.568Z] 
Data Files Check:
[2026-01-08T22:06:11.570Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141944 bytes)
[2026-01-08T22:06:11.575Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758033 bytes)
[2026-01-08T22:06:11.575Z] 
========================================
[2026-01-08T22:06:11.575Z] Starting Enhanced Discord Bot...
[2026-01-08T22:06:11.575Z] ========================================
[2026-01-08T22:06:12.091Z] [BOT] ✅ Loaded V2 database: 1475 jobs
[2026-01-08T22:06:12.773Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T22:06:12.774Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T22:06:12.774Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T22:06:12.783Z] [BOT] ✅ Loaded pending queue: 176 total (156 pending, 20 enriched, 0 posted)
[2026-01-08T22:06:12.783Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Backend Engineer - Personalization at spotify
[2026-01-08T22:06:12.784Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-08T22:06:12.785Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-08T22:06:12.785Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T22:06:12.785Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
[2026-01-08T22:06:12.785Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer, Applied AI at anthropic
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T22:06:12.786Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T22:06:12.787Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T22:06:12.787Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T22:06:12.787Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T22:06:12.787Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-08T22:06:12.787Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T22:06:12.787Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T22:06:12.787Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T22:06:12.788Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T22:06:12.788Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T22:06:12.790Z] [BOT] 📍 [ROUTING] "Backend Engineer - Personalization" @ spotify
[2026-01-08T22:06:12.790Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-08T22:06:12.808Z] [BOT ERROR] (node:2716) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T22:06:13.061Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer - Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Backend Engineer - Personalization @ spotify
[2026-01-08T22:06:14.832Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer - Personalization @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T22:06:16.332Z] [BOT] 💾 Marked as posted: Backend Engineer - Personalization @ spotify (instance #1)
[2026-01-08T22:06:16.333Z] [BOT] 💾 BEFORE ARCHIVING: 1476 jobs in database
[2026-01-08T22:06:16.334Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T22:06:16.339Z] [BOT] 📦 Archived 4 jobs to 2026-01.json (4 total in archive)
[2026-01-08T22:06:16.339Z] [BOT] ✅ Archiving complete: 4 archived, 1472 active
[2026-01-08T22:06:16.352Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
[2026-01-08T22:06:16.352Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T22:06:19.353Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T22:06:19.353Z] [BOT] ⏭️  Skipping duplicate: JID_d39fb01c (posted within 7 days)
[2026-01-08T22:06:19.360Z] [BOT] ✅ Loaded pending queue: 176 total (156 pending, 20 enriched, 0 posted)
[2026-01-08T22:06:19.375Z] [BOT] ✅ Saved pending queue: 176 total (156 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T22:06:19.375Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T22:06:19.424Z] [BOT] 📂 Loaded 2443 existing routing entries
[2026-01-08T22:06:19.479Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2444
   Timestamp: 2026-01-08T22:06:19.469Z
[2026-01-08T22:06:19.479Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
[2026-01-08T22:06:19.479Z] [BOT] Skipped: 19
[2026-01-08T22:06:19.480Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-08T22:06:19.480Z] [BOT] 2. #🗽・new-york: 1 posts
[2026-01-08T22:06:19.480Z] [BOT] [STATS] Channel stats saved
[2026-01-08T22:06:21.492Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2716) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*