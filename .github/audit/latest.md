# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T23:51:28.738Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T23:51:16.130Z] ========================================
[2026-01-09T23:51:16.132Z] Discord Bot Execution Log
[2026-01-09T23:51:16.132Z] Environment: GitHub Actions
[2026-01-09T23:51:16.132Z] Node Version: v20.19.6
[2026-01-09T23:51:16.132Z] ========================================
[2026-01-09T23:51:16.132Z] Environment Variables Check:
[2026-01-09T23:51:16.132Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T23:51:16.132Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.132Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T23:51:16.133Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T23:51:16.133Z] 
Multi-Channel Configuration:
[2026-01-09T23:51:16.133Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T23:51:16.133Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T23:51:16.133Z] 
Data Files Check:
[2026-01-09T23:51:16.135Z] .github/data/new_jobs.json: ✅ Exists (10 items, 155046 bytes)
[2026-01-09T23:51:16.140Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768961 bytes)
[2026-01-09T23:51:16.140Z] 
========================================
[2026-01-09T23:51:16.140Z] Starting Enhanced Discord Bot...
[2026-01-09T23:51:16.140Z] ========================================
[2026-01-09T23:51:16.688Z] [BOT] ✅ Loaded V2 database: 1500 jobs
[2026-01-09T23:51:17.359Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T23:51:17.359Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T23:51:17.360Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T23:51:17.371Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T23:51:17.371Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-09T23:51:17.372Z] [BOT] ⏭️  Skipping duplicate: JID_e4f7b470 (posted within 7 days)
[2026-01-09T23:51:17.372Z] [BOT] ⏭️ Skipping already posted: ROLE_40d95d81 at anthropic
[2026-01-09T23:51:17.372Z] [BOT] ⏭️  Skipping duplicate: JID_44a3ab36-developer_r0068238 (posted within 7 days)
[2026-01-09T23:51:17.373Z] [BOT] ⏭️ Skipping already posted: ROLE_4fc63349 at Huntington Bancshares
⏭️  Skipping duplicate: JID_39398126 (posted within 7 days)
[2026-01-09T23:51:17.373Z] [BOT] ⏭️ Skipping already posted: Software Engineer, Cybersecurity Products at anthropic
[2026-01-09T23:51:17.373Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
⏭️ Skipping already posted: Senior iOS Engineer, Application Stability & Performance at duolingo
⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
⏭️ Skipping already posted: Channel Development Representative, West (Phoenix)  at verkada
[2026-01-09T23:51:17.373Z] [BOT] ⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
⏭️ Skipping already posted: Senior Sales Engineer - Key Accounts (West) at datadog
[2026-01-09T23:51:17.373Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer, Universes at anthropic
[2026-01-09T23:51:17.374Z] [BOT] ⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
[2026-01-09T23:51:17.374Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T23:51:17.374Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-09T23:51:17.374Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T23:51:17.374Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-09T23:51:17.374Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T23:51:17.374Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T23:51:17.374Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T23:51:17.375Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T23:51:17.375Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T23:51:17.375Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T23:51:17.375Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T23:51:17.375Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T23:51:17.375Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T23:51:17.376Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T23:51:17.376Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T23:51:17.378Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-09T23:51:17.379Z] [BOT] 📍 [ROUTING] "Senior Field Marketing Manager (Enterprise SLED East)" @ verkada
[2026-01-09T23:51:17.379Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-09T23:51:17.383Z] [BOT ERROR] (node:2433) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T23:51:17.622Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada in #📣・marketing-jobs
[2026-01-09T23:51:17.622Z] [BOT] ✅ Industry: Senior Field Marketing Manager (Enterprise SLED East) @ verkada
[2026-01-09T23:51:20.773Z] [BOT] ✅ Created forum post: 🏢 Senior Field Marketing Manager (Enterprise SLED East) @ verkada in #🗽・new-york
[2026-01-09T23:51:20.773Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-09T23:51:22.274Z] [BOT] 💾 Marked as posted: Senior Field Marketing Manager (Enterprise SLED East) @ verkada (instance #1)
[2026-01-09T23:51:22.274Z] [BOT] 💾 BEFORE ARCHIVING: 1501 jobs in database
[2026-01-09T23:51:22.275Z] [BOT] ✅ No jobs to archive (all 1501 jobs within 7-day window)
[2026-01-09T23:51:22.289Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
[2026-01-09T23:51:22.289Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T23:51:25.290Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T23:51:25.291Z] [BOT] ⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
[2026-01-09T23:51:25.301Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T23:51:25.319Z] [BOT] ✅ Saved pending queue: 228 total (208 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T23:51:25.372Z] [BOT] 📂 Loaded 2515 existing routing entries
[2026-01-09T23:51:25.435Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2516
   Timestamp: 2026-01-09T23:51:25.418Z
📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📣・marketing-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-09T23:51:27.447Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2433) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*