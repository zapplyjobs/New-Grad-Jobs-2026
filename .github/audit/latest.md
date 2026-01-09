# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T20:06:22.827Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T20:06:10.841Z] ========================================
[2026-01-09T20:06:10.843Z] Discord Bot Execution Log
[2026-01-09T20:06:10.843Z] Environment: GitHub Actions
[2026-01-09T20:06:10.843Z] Node Version: v20.19.6
[2026-01-09T20:06:10.843Z] ========================================
[2026-01-09T20:06:10.843Z] Environment Variables Check:
[2026-01-09T20:06:10.843Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T20:06:10.843Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.843Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T20:06:10.844Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T20:06:10.844Z] 
Multi-Channel Configuration:
[2026-01-09T20:06:10.844Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T20:06:10.844Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T20:06:10.844Z] 
Data Files Check:
[2026-01-09T20:06:10.846Z] .github/data/new_jobs.json: ✅ Exists (10 items, 151890 bytes)
[2026-01-09T20:06:10.852Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 766573 bytes)
[2026-01-09T20:06:10.852Z] 
========================================
[2026-01-09T20:06:10.852Z] Starting Enhanced Discord Bot...
[2026-01-09T20:06:10.852Z] ========================================
[2026-01-09T20:06:11.384Z] [BOT] ✅ Loaded V2 database: 1495 jobs
[2026-01-09T20:06:12.007Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T20:06:12.008Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T20:06:12.008Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T20:06:12.018Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T20:06:12.019Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Success Manager, Digital Native Businesses  at anthropic
[2026-01-09T20:06:12.020Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
[2026-01-09T20:06:12.020Z] [BOT] ⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-09T20:06:12.020Z] [BOT] ⏭️  Skipping duplicate: JID_78f01a5a (posted within 7 days)
[2026-01-09T20:06:12.020Z] [BOT] ⏭️ Skipping already posted: ROLE_076e9ead at vercel
⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-09T20:06:12.021Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-09T20:06:12.021Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-09T20:06:12.021Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-09T20:06:12.021Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-09T20:06:12.021Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-09T20:06:12.021Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
[2026-01-09T20:06:12.022Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
[2026-01-09T20:06:12.022Z] [BOT] ⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-09T20:06:12.022Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-09T20:06:12.022Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-09T20:06:12.022Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-09T20:06:12.022Z] [BOT] ⏭️  Skipping duplicate: JID_305cb5c2 (posted within 7 days)
[2026-01-09T20:06:12.022Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Direct To Cell at SpaceX
⏭️  Skipping duplicate: JID_e942e20e (posted within 7 days)
⏭️ Skipping already posted: FP&A Manager,  GTM at vercel
[2026-01-09T20:06:12.022Z] [BOT] ⏭️  Skipping duplicate: JID_08a687ec (posted within 7 days)
⏭️ Skipping already posted:  Strategy and Messaging Communications Lead, Narrative at anthropic
[2026-01-09T20:06:12.022Z] [BOT] ⏭️  Skipping duplicate: JID_d964c21b (posted within 7 days)
⏭️ Skipping already posted: Meteorologist - NASA Ballon Program at Peraton
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T20:06:12.022Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-09T20:06:12.023Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T20:06:12.023Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T20:06:12.023Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T20:06:12.024Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T20:06:12.027Z] [BOT] 📍 [ROUTING] "Customer Success Manager, Digital Native Businesses " @ anthropic
[2026-01-09T20:06:12.027Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-09T20:06:12.032Z] [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T20:06:13.103Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Businesses  @ anthropic in #🤖・ai-jobs
  ✅ Industry: Customer Success Manager, Digital Native Businesses  @ anthropic
[2026-01-09T20:06:14.883Z] [BOT] ✅ Created forum post: 🏢 Customer Success Manager, Digital Native Businesses  @ anthropic in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-09T20:06:16.384Z] [BOT] 💾 Marked as posted: Customer Success Manager, Digital Native Businesses  @ anthropic (instance #1)
[2026-01-09T20:06:16.385Z] [BOT] 💾 BEFORE ARCHIVING: 1496 jobs in database
[2026-01-09T20:06:16.386Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T20:06:16.391Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T20:06:16.391Z] [BOT] ✅ Archiving complete: 1 archived, 1495 active
[2026-01-09T20:06:16.403Z] [BOT] 💾 Saved posted_jobs.json: 1495 active jobs
[2026-01-09T20:06:16.403Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T20:06:19.403Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T20:06:19.404Z] [BOT] ⏭️  Skipping duplicate: JID_0f96adef (posted within 7 days)
[2026-01-09T20:06:19.412Z] [BOT] ✅ Loaded pending queue: 228 total (208 pending, 20 enriched, 0 posted)
[2026-01-09T20:06:19.428Z] [BOT] ✅ Saved pending queue: 228 total (208 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T20:06:19.428Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T20:06:19.482Z] [BOT] 📂 Loaded 2507 existing routing entries
[2026-01-09T20:06:19.538Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2508
   Timestamp: 2026-01-09T20:06:19.527Z
[2026-01-09T20:06:19.539Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
[2026-01-09T20:06:19.539Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T20:06:19.539Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-09T20:06:19.539Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-09T20:06:19.539Z] [BOT] [STATS] Channel stats saved
[2026-01-09T20:06:21.551Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2336) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*