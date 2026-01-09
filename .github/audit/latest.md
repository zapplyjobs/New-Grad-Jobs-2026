# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T22:40:29.429Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T22:40:17.463Z] ========================================
[2026-01-09T22:40:17.465Z] Discord Bot Execution Log
[2026-01-09T22:40:17.465Z] Environment: GitHub Actions
[2026-01-09T22:40:17.465Z] Node Version: v20.19.6
[2026-01-09T22:40:17.465Z] ========================================
[2026-01-09T22:40:17.465Z] Environment Variables Check:
[2026-01-09T22:40:17.465Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T22:40:17.465Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T22:40:17.466Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T22:40:17.466Z] 
Multi-Channel Configuration:
[2026-01-09T22:40:17.466Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.466Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T22:40:17.467Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T22:40:17.467Z] 
Data Files Check:
[2026-01-09T22:40:17.468Z] .github/data/new_jobs.json: ✅ Exists (10 items, 150221 bytes)
[2026-01-09T22:40:17.473Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 767385 bytes)
[2026-01-09T22:40:17.473Z] 
========================================
[2026-01-09T22:40:17.473Z] Starting Enhanced Discord Bot...
[2026-01-09T22:40:17.473Z] ========================================
[2026-01-09T22:40:17.983Z] [BOT] ✅ Loaded V2 database: 1497 jobs
[2026-01-09T22:40:18.449Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T22:40:18.449Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T22:40:18.449Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T22:40:18.460Z] [BOT] ✅ Loaded pending queue: 227 total (207 pending, 20 enriched, 0 posted)
[2026-01-09T22:40:18.460Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-01-09T22:40:18.461Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
[2026-01-09T22:40:18.461Z] [BOT] ⏭️ Skipping already posted: Senior iOS Engineer, Application Stability & Performance at duolingo
[2026-01-09T22:40:18.462Z] [BOT] ⏭️  Skipping duplicate: JID_585dec62 (posted within 7 days)
[2026-01-09T22:40:18.462Z] [BOT] ⏭️ Skipping already posted: Research Engineer, Universes at anthropic
⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
[2026-01-09T22:40:18.463Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T22:40:18.463Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
⏭️ Skipping already posted: ROLE_076e9ead at vercel
⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-09T22:40:18.463Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T22:40:18.463Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T22:40:18.463Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T22:40:18.463Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-09T22:40:18.464Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T22:40:18.464Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T22:40:18.464Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T22:40:18.464Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T22:40:18.464Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-09T22:40:18.464Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-09T22:40:18.464Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-09T22:40:18.464Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
📬 Found 2 new jobs (18 already posted)...
[2026-01-09T22:40:18.464Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-09T22:40:18.464Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-09T22:40:18.465Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-09T22:40:18.465Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T22:40:18.468Z] [BOT] 📌 Posting 2 jobs to #💲・sales-jobs
[2026-01-09T22:40:18.469Z] [BOT] 📍 [ROUTING] "Channel Development Representative, West (Phoenix) " @ verkada
[2026-01-09T22:40:18.469Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T22:40:18.473Z] [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T22:40:18.685Z] [BOT] ✅ Created forum post: 🏢 Channel Development Representative, West (Phoenix)  @ verkada in #💲・sales-jobs
[2026-01-09T22:40:18.685Z] [BOT] ✅ Industry: Channel Development Representative, West (Phoenix)  @ verkada
[2026-01-09T22:40:20.187Z] [BOT] 💾 Marked as posted: Channel Development Representative, West (Phoenix)  @ verkada (instance #1)
[2026-01-09T22:40:20.187Z] [BOT] 💾 BEFORE ARCHIVING: 1498 jobs in database
[2026-01-09T22:40:20.188Z] [BOT] ✅ No jobs to archive (all 1498 jobs within 7-day window)
[2026-01-09T22:40:20.202Z] [BOT] 💾 Saved posted_jobs.json: 1498 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T22:40:20.202Z] [BOT] 📍 [ROUTING] "Senior Sales Engineer - Key Accounts (West)" @ datadog
[2026-01-09T22:40:20.202Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T22:40:20.329Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Key Accounts (West) @ datadog in #💲・sales-jobs
[2026-01-09T22:40:20.329Z] [BOT] ✅ Industry: Senior Sales Engineer - Key Accounts (West) @ datadog
[2026-01-09T22:40:22.140Z] [BOT] ✅ Created forum post: 🏢 Senior Sales Engineer - Key Accounts (West) @ datadog in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-09T22:40:23.640Z] [BOT] 💾 Marked as posted: Senior Sales Engineer - Key Accounts (West) @ datadog (instance #1)
[2026-01-09T22:40:23.640Z] [BOT] 💾 BEFORE ARCHIVING: 1499 jobs in database
[2026-01-09T22:40:23.642Z] [BOT] ✅ No jobs to archive (all 1499 jobs within 7-day window)
[2026-01-09T22:40:23.652Z] [BOT] 💾 Saved posted_jobs.json: 1499 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T22:40:26.653Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-09T22:40:26.654Z] [BOT] ⏭️  Skipping duplicate: JID_9a274ef8 (posted within 7 days)
[2026-01-09T22:40:26.654Z] [BOT] ⏭️  Skipping duplicate: JID_e8212de3 (posted within 7 days)
[2026-01-09T22:40:26.663Z] [BOT] ✅ Loaded pending queue: 227 total (207 pending, 20 enriched, 0 posted)
[2026-01-09T22:40:26.678Z] [BOT] ✅ Saved pending queue: 227 total (207 pending, 18 enriched, 2 posted)
[2026-01-09T22:40:26.679Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T22:40:26.730Z] [BOT] 📂 Loaded 2510 existing routing entries
[2026-01-09T22:40:26.793Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-09T22:40:26.793Z] [BOT] Total entries: 2512
   Timestamp: 2026-01-09T22:40:26.774Z
[2026-01-09T22:40:26.794Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T22:40:26.794Z] [BOT] Total attempts: 21
   Successful: 3
   Failed: 0
   Skipped: 18
[2026-01-09T22:40:26.794Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T22:40:26.794Z] [BOT] Last cleanup: Never
   Total posts: 3
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 2 posts
[2026-01-09T22:40:26.794Z] [BOT] 2. #💻・remote-usa: 1 posts
[2026-01-09T22:40:26.795Z] [BOT] [STATS] Channel stats saved
[2026-01-09T22:40:28.808Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*