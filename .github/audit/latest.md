# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T18:59:16.149Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T18:59:05.532Z] ========================================
[2026-01-09T18:59:05.534Z] Discord Bot Execution Log
[2026-01-09T18:59:05.534Z] Environment: GitHub Actions
[2026-01-09T18:59:05.534Z] Node Version: v20.19.6
[2026-01-09T18:59:05.534Z] ========================================
[2026-01-09T18:59:05.534Z] Environment Variables Check:
[2026-01-09T18:59:05.534Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T18:59:05.534Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.534Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T18:59:05.534Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T18:59:05.534Z] 
Multi-Channel Configuration:
[2026-01-09T18:59:05.534Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T18:59:05.535Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T18:59:05.535Z] 
Data Files Check:
[2026-01-09T18:59:05.536Z] .github/data/new_jobs.json: ✅ Exists (10 items, 149632 bytes)
[2026-01-09T18:59:05.542Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 767852 bytes)
[2026-01-09T18:59:05.542Z] 
========================================
[2026-01-09T18:59:05.542Z] Starting Enhanced Discord Bot...
[2026-01-09T18:59:05.542Z] ========================================
[2026-01-09T18:59:06.059Z] [BOT] ✅ Loaded V2 database: 1496 jobs
[2026-01-09T18:59:06.581Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T18:59:06.581Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T18:59:06.581Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T18:59:06.591Z] [BOT] ✅ Loaded pending queue: 229 total (209 pending, 20 enriched, 0 posted)
[2026-01-09T18:59:06.592Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Accountant at vercel
[2026-01-09T18:59:06.593Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-09T18:59:06.593Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T18:59:06.593Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-09T18:59:06.593Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-09T18:59:06.594Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-09T18:59:06.595Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
[2026-01-09T18:59:06.595Z] [BOT] ⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
[2026-01-09T18:59:06.595Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T18:59:06.595Z] [BOT] ⏭️  Skipping duplicate: JID_bab53bb3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f7570db at samsara
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T18:59:06.596Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T18:59:06.596Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T18:59:06.596Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T18:59:06.598Z] [BOT] 📌 Posting 1 jobs to #💰・finance-jobs
[2026-01-09T18:59:06.599Z] [BOT] 📍 [ROUTING] "Senior Accountant" @ vercel
[2026-01-09T18:59:06.599Z] [BOT] Category: FINANCE (matched: "finance")
   Channel: 💰・finance-jobs (1391...2941)
[2026-01-09T18:59:06.604Z] [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T18:59:06.922Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ vercel in #💰・finance-jobs
[2026-01-09T18:59:06.922Z] [BOT] ✅ Industry: Senior Accountant @ vercel
[2026-01-09T18:59:08.720Z] [BOT] ✅ Created forum post: 🏢 Senior Accountant @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T18:59:10.221Z] [BOT] 💾 Marked as posted: Senior Accountant @ vercel (instance #1)
[2026-01-09T18:59:10.221Z] [BOT] 💾 BEFORE ARCHIVING: 1497 jobs in database
[2026-01-09T18:59:10.223Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T18:59:10.228Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-09T18:59:10.228Z] [BOT] ✅ Archiving complete: 3 archived, 1494 active
[2026-01-09T18:59:10.240Z] [BOT] 💾 Saved posted_jobs.json: 1494 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T18:59:13.240Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T18:59:13.241Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
[2026-01-09T18:59:13.248Z] [BOT] ✅ Loaded pending queue: 229 total (209 pending, 20 enriched, 0 posted)
[2026-01-09T18:59:13.263Z] [BOT] ✅ Saved pending queue: 229 total (209 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T18:59:13.315Z] [BOT] 📂 Loaded 2505 existing routing entries
[2026-01-09T18:59:13.370Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2506
   Timestamp: 2026-01-09T18:59:13.360Z
[2026-01-09T18:59:13.370Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T18:59:13.371Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
[2026-01-09T18:59:13.371Z] [BOT] Channels used: 2
   Top channels:
     1. #💰・finance-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[STATS] Channel stats saved
[2026-01-09T18:59:15.384Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2342) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*