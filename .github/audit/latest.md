# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T20:41:13.122Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T20:41:01.824Z] ========================================
[2026-01-09T20:41:01.825Z] Discord Bot Execution Log
[2026-01-09T20:41:01.825Z] Environment: GitHub Actions
[2026-01-09T20:41:01.826Z] Node Version: v20.19.6
[2026-01-09T20:41:01.826Z] ========================================
[2026-01-09T20:41:01.826Z] Environment Variables Check:
[2026-01-09T20:41:01.826Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T20:41:01.826Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.826Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T20:41:01.826Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T20:41:01.826Z] 
Multi-Channel Configuration:
[2026-01-09T20:41:01.826Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.826Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.826Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.826Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.827Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.827Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.827Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.827Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.827Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T20:41:01.827Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T20:41:01.827Z] 
Data Files Check:
[2026-01-09T20:41:01.828Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151538 bytes)
[2026-01-09T20:41:01.834Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 766919 bytes)
[2026-01-09T20:41:01.834Z] 
========================================
[2026-01-09T20:41:01.834Z] Starting Enhanced Discord Bot...
[2026-01-09T20:41:01.834Z] ========================================
[2026-01-09T20:41:02.354Z] [BOT] ✅ Loaded V2 database: 1496 jobs
[2026-01-09T20:41:03.243Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T20:41:03.243Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T20:41:03.243Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T20:41:03.251Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T20:41:03.251Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Software Engineer at duolingo
[2026-01-09T20:41:03.253Z] [BOT] ⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
[2026-01-09T20:41:03.253Z] [BOT] ⏭️ Skipping already posted: ROLE_4bbc4a01  at anthropic
[2026-01-09T20:41:03.253Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T20:41:03.253Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
[2026-01-09T20:41:03.253Z] [BOT] ⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-09T20:41:03.254Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
⏭️ Skipping already posted: ROLE_076e9ead at vercel
⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T20:41:03.254Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T20:41:03.254Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T20:41:03.254Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-09T20:41:03.254Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T20:41:03.254Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T20:41:03.254Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T20:41:03.255Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-09T20:41:03.255Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-09T20:41:03.255Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-09T20:41:03.255Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-09T20:41:03.255Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-09T20:41:03.255Z] [BOT] ⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
[2026-01-09T20:41:03.255Z] [BOT] ⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T20:41:03.255Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T20:41:03.256Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T20:41:03.256Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T20:41:03.256Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T20:41:03.258Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-09T20:41:03.259Z] [BOT] 📍 [ROUTING] "Senior Software Engineer" @ duolingo
[2026-01-09T20:41:03.259Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-09T20:41:03.264Z] [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T20:41:03.489Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ duolingo in #💻・tech-jobs
  ✅ Industry: Senior Software Engineer @ duolingo
[2026-01-09T20:41:05.257Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer @ duolingo in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-09T20:41:06.758Z] [BOT] 💾 Marked as posted: Senior Software Engineer @ duolingo (instance #1)
[2026-01-09T20:41:06.758Z] [BOT] 💾 BEFORE ARCHIVING: 1497 jobs in database
[2026-01-09T20:41:06.759Z] [BOT] ✅ No jobs to archive (all 1497 jobs within 7-day window)
[2026-01-09T20:41:06.774Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T20:41:09.774Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T20:41:09.774Z] [BOT] ⏭️  Skipping duplicate: JID_ce1f556b (posted within 7 days)
[2026-01-09T20:41:09.783Z] [BOT] ✅ Loaded pending queue: 230 total (210 pending, 20 enriched, 0 posted)
[2026-01-09T20:41:09.798Z] [BOT] ✅ Saved pending queue: 230 total (210 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T20:41:09.850Z] [BOT] 📂 Loaded 2509 existing routing entries
[2026-01-09T20:41:09.911Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T20:41:09.912Z] [BOT] Total entries: 2510
   Timestamp: 2026-01-09T20:41:09.896Z
[2026-01-09T20:41:09.912Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T20:41:09.912Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T20:41:09.913Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-09T20:41:09.913Z] [BOT] 2. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-09T20:41:11.929Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2383) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*