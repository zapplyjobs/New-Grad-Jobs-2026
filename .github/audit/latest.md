# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T20:26:06.121Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T20:25:55.674Z] ========================================
[2026-01-09T20:25:55.676Z] Discord Bot Execution Log
[2026-01-09T20:25:55.676Z] Environment: GitHub Actions
[2026-01-09T20:25:55.676Z] Node Version: v20.19.6
[2026-01-09T20:25:55.676Z] ========================================
[2026-01-09T20:25:55.676Z] Environment Variables Check:
[2026-01-09T20:25:55.676Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T20:25:55.676Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.676Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T20:25:55.676Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T20:25:55.677Z] 
Multi-Channel Configuration:
[2026-01-09T20:25:55.677Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T20:25:55.677Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T20:25:55.677Z] 
Data Files Check:
[2026-01-09T20:25:55.679Z] .github/data/new_jobs.json: ✅ Exists (10 items, 158867 bytes)
[2026-01-09T20:25:55.684Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 766458 bytes)
[2026-01-09T20:25:55.684Z] 
========================================
[2026-01-09T20:25:55.684Z] Starting Enhanced Discord Bot...
[2026-01-09T20:25:55.684Z] ========================================
[2026-01-09T20:25:56.204Z] [BOT] ✅ Loaded V2 database: 1495 jobs
[2026-01-09T20:25:56.645Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T20:25:56.646Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T20:25:56.646Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T20:25:56.657Z] [BOT] ✅ Loaded pending queue: 229 total (209 pending, 20 enriched, 0 posted)
[2026-01-09T20:25:56.657Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startup Partnerships  at anthropic
[2026-01-09T20:25:56.659Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
[2026-01-09T20:25:56.659Z] [BOT] ⏭️ Skipping already posted: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T20:25:56.659Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
[2026-01-09T20:25:56.659Z] [BOT] ⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
[2026-01-09T20:25:56.659Z] [BOT] ⏭️ Skipping already posted: ROLE_076e9ead at vercel
[2026-01-09T20:25:56.660Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T20:25:56.660Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T20:25:56.660Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T20:25:56.660Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T20:25:56.660Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T20:25:56.660Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-09T20:25:56.660Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-01-09T20:25:56.660Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-09T20:25:56.661Z] [BOT] ⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-09T20:25:56.661Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-09T20:25:56.661Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-09T20:25:56.661Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
[2026-01-09T20:25:56.661Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
[2026-01-09T20:25:56.661Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-01-09T20:25:56.661Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-09T20:25:56.661Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T20:25:56.661Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T20:25:56.662Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T20:25:56.662Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T20:25:56.662Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T20:25:56.664Z] [BOT] 📍 [ROUTING] "Startup Partnerships " @ anthropic
   Category: AI (matched: "artificial intelligence")
[2026-01-09T20:25:56.665Z] [BOT] Channel: 🤖・ai-jobs (1446...1106)
[2026-01-09T20:25:56.669Z] [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T20:25:56.926Z] [BOT] ✅ Created forum post: 🏢 Startup Partnerships  @ anthropic in #🤖・ai-jobs
[2026-01-09T20:25:56.926Z] [BOT] ✅ Industry: Startup Partnerships  @ anthropic
[2026-01-09T20:25:58.880Z] [BOT] ✅ Created forum post: 🏢 Startup Partnerships  @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T20:26:00.380Z] [BOT] 💾 Marked as posted: Startup Partnerships  @ anthropic (instance #1)
[2026-01-09T20:26:00.380Z] [BOT] 💾 BEFORE ARCHIVING: 1496 jobs in database
[2026-01-09T20:26:00.382Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-09T20:26:00.393Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
[2026-01-09T20:26:00.393Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T20:26:03.394Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T20:26:03.394Z] [BOT] ⏭️  Skipping duplicate: JID_89b9b14b (posted within 7 days)
[2026-01-09T20:26:03.403Z] [BOT] ✅ Loaded pending queue: 229 total (209 pending, 20 enriched, 0 posted)
[2026-01-09T20:26:03.418Z] [BOT] ✅ Saved pending queue: 229 total (209 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-09T20:26:03.470Z] [BOT] 📂 Loaded 2508 existing routing entries
[2026-01-09T20:26:03.526Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T20:26:03.527Z] [BOT] Total entries: 2509
   Timestamp: 2026-01-09T20:26:03.516Z
[2026-01-09T20:26:03.527Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T20:26:03.527Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T20:26:03.527Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-09T20:26:03.527Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-09T20:26:03.528Z] [BOT] [STATS] Channel stats saved
[2026-01-09T20:26:05.542Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2339) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*