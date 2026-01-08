# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T21:25:42.848Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T21:25:31.711Z] ========================================
[2026-01-08T21:25:31.713Z] Discord Bot Execution Log
[2026-01-08T21:25:31.713Z] Environment: GitHub Actions
[2026-01-08T21:25:31.713Z] Node Version: v20.19.6
[2026-01-08T21:25:31.713Z] ========================================
[2026-01-08T21:25:31.713Z] Environment Variables Check:
[2026-01-08T21:25:31.713Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T21:25:31.713Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.713Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T21:25:31.713Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T21:25:31.714Z] 
Multi-Channel Configuration:
[2026-01-08T21:25:31.714Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T21:25:31.714Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T21:25:31.714Z] 
Data Files Check:
[2026-01-08T21:25:31.716Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140980 bytes)
[2026-01-08T21:25:31.721Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758051 bytes)
[2026-01-08T21:25:31.721Z] 
========================================
[2026-01-08T21:25:31.721Z] Starting Enhanced Discord Bot...
[2026-01-08T21:25:31.721Z] ========================================
[2026-01-08T21:25:32.235Z] [BOT] ✅ Loaded V2 database: 1475 jobs
[2026-01-08T21:25:33.023Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T21:25:33.023Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T21:25:33.023Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T21:25:33.032Z] [BOT] ✅ Loaded pending queue: 174 total (154 pending, 20 enriched, 0 posted)
[2026-01-08T21:25:33.033Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Head of Protective Services at anthropic
[2026-01-08T21:25:33.033Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-08T21:25:33.033Z] [BOT] ⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T21:25:33.034Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-08T21:25:33.035Z] [BOT] ⏭️ Skipping already posted: Product Engineer, Applied AI at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T21:25:33.035Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T21:25:33.035Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-08T21:25:33.035Z] [BOT] ⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T21:25:33.035Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
[2026-01-08T21:25:33.035Z] [BOT] ⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T21:25:33.036Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T21:25:33.037Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T21:25:33.037Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-08T21:25:33.037Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T21:25:33.037Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T21:25:33.038Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T21:25:33.038Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-08T21:25:33.039Z] [BOT] 📍 [ROUTING] "Data Operations, Product Partnerships" @ anthropic
[2026-01-08T21:25:33.039Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-08T21:25:33.040Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-08T21:25:33.044Z] [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T21:25:33.376Z] [BOT] ✅ Created forum post: 🏢 Data Operations, Product Partnerships @ anthropic in #🤖・ai-jobs
[2026-01-08T21:25:33.376Z] [BOT] ✅ Industry: Data Operations, Product Partnerships @ anthropic
[2026-01-08T21:25:35.047Z] [BOT] ✅ Created forum post: 🏢 Data Operations, Product Partnerships @ anthropic in #🌉・san-francisco
[2026-01-08T21:25:35.047Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T21:25:36.548Z] [BOT] 💾 Marked as posted: Data Operations, Product Partnerships @ anthropic (instance #1)
[2026-01-08T21:25:36.548Z] [BOT] 💾 BEFORE ARCHIVING: 1476 jobs in database
[2026-01-08T21:25:36.549Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T21:25:36.554Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-08T21:25:36.554Z] [BOT] ✅ Archiving complete: 1 archived, 1475 active
[2026-01-08T21:25:36.568Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
[2026-01-08T21:25:36.568Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T21:25:39.569Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T21:25:39.569Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
[2026-01-08T21:25:39.576Z] [BOT] ✅ Loaded pending queue: 174 total (154 pending, 20 enriched, 0 posted)
[2026-01-08T21:25:39.588Z] [BOT] ✅ Saved pending queue: 174 total (154 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T21:25:39.588Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T21:25:39.638Z] [BOT] 📂 Loaded 2441 existing routing entries
[2026-01-08T21:25:39.693Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2442
   Timestamp: 2026-01-08T21:25:39.683Z
[2026-01-08T21:25:39.694Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T21:25:39.694Z] [BOT] Total attempts: 21
   Successful: 2
[2026-01-08T21:25:39.694Z] [BOT] Failed: 0
   Skipped: 19
[2026-01-08T21:25:39.694Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-01-08T21:25:39.694Z] [BOT] Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-08T21:25:39.694Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-08T21:25:39.695Z] [BOT] [STATS] Channel stats saved
[2026-01-08T21:25:41.709Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2610) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*