# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T23:06:26.708Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T23:06:09.576Z] ========================================
[2026-01-08T23:06:09.578Z] Discord Bot Execution Log
[2026-01-08T23:06:09.578Z] Environment: GitHub Actions
[2026-01-08T23:06:09.578Z] Node Version: v20.19.6
[2026-01-08T23:06:09.578Z] ========================================
[2026-01-08T23:06:09.578Z] Environment Variables Check:
[2026-01-08T23:06:09.578Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T23:06:09.578Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.578Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T23:06:09.578Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T23:06:09.579Z] 
Multi-Channel Configuration:
[2026-01-08T23:06:09.579Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T23:06:09.579Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T23:06:09.579Z] 
Data Files Check:
[2026-01-08T23:06:09.581Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152471 bytes)
[2026-01-08T23:06:09.586Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 756223 bytes)
[2026-01-08T23:06:09.586Z] 
========================================
[2026-01-08T23:06:09.586Z] Starting Enhanced Discord Bot...
[2026-01-08T23:06:09.586Z] ========================================
[2026-01-08T23:06:10.116Z] [BOT] ✅ Loaded V2 database: 1473 jobs
[2026-01-08T23:06:10.628Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T23:06:10.629Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T23:06:10.629Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T23:06:10.636Z] [BOT] ✅ Loaded pending queue: 179 total (159 pending, 20 enriched, 0 posted)
[2026-01-08T23:06:10.636Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager, GTM Engineering  at brex
[2026-01-08T23:06:10.638Z] [BOT] ⏭️  Skipping duplicate: JID_7d40f03b (posted within 7 days)
[2026-01-08T23:06:10.638Z] [BOT] ⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:06:10.638Z] [BOT] ⏭️  Skipping duplicate: JID_5287f9fe (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:06:10.638Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-08T23:06:10.638Z] [BOT] ⏭️ Skipping already posted: Product Engineer, Applied AI, Digital Natives Business at anthropic
[2026-01-08T23:06:10.638Z] [BOT] ⏭️  Skipping duplicate: JID_fa7d515d (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at brex
⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at brex
[2026-01-08T23:06:10.639Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-08T23:06:10.639Z] [BOT] ⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T23:06:10.639Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T23:06:10.639Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-08T23:06:10.639Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
[2026-01-08T23:06:10.639Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T23:06:10.639Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T23:06:10.639Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T23:06:10.639Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
[2026-01-08T23:06:10.640Z] [BOT] ⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T23:06:10.640Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-08T23:06:10.640Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T23:06:10.640Z] [BOT] 📬 Found 2 new jobs (18 already posted)...
[2026-01-08T23:06:10.640Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-08T23:06:10.640Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T23:06:10.641Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-08T23:06:10.641Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T23:06:10.643Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-08T23:06:10.645Z] [BOT] 📍 [ROUTING] "Engineering Manager, GTM Engineering " @ brex
[2026-01-08T23:06:10.645Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T23:06:10.650Z] [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T23:06:10.879Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, GTM Engineering  @ brex in #💻・tech-jobs
[2026-01-08T23:06:10.879Z] [BOT] ✅ Industry: Engineering Manager, GTM Engineering  @ brex
[2026-01-08T23:06:12.750Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, GTM Engineering  @ brex in #🌉・san-francisco
[2026-01-08T23:06:12.750Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T23:06:14.251Z] [BOT] 💾 Marked as posted: Engineering Manager, GTM Engineering  @ brex (instance #1)
[2026-01-08T23:06:14.251Z] [BOT] 💾 BEFORE ARCHIVING: 1474 jobs in database
[2026-01-08T23:06:14.252Z] [BOT] ✅ No jobs to archive (all 1474 jobs within 7-day window)
[2026-01-08T23:06:14.267Z] [BOT] 💾 Saved posted_jobs.json: 1474 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T23:06:17.267Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-08T23:06:17.268Z] [BOT] 📍 [ROUTING] "Senior Software Engineer - SEO" @ discord
   Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
[2026-01-08T23:06:17.268Z] [BOT] ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-08T23:06:17.531Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - SEO @ discord in #📈・JID_fb739488
[2026-01-08T23:06:17.531Z] [BOT] ✅ Industry: Senior Software Engineer - SEO @ discord
[2026-01-08T23:06:19.257Z] [BOT] ✅ Created forum post: 🏢 Senior Software Engineer - SEO @ discord in #🌉・san-francisco
[2026-01-08T23:06:19.257Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-08T23:06:20.758Z] [BOT] 💾 Marked as posted: Senior Software Engineer - SEO @ discord (instance #1)
[2026-01-08T23:06:20.758Z] [BOT] 💾 BEFORE ARCHIVING: 1475 jobs in database
[2026-01-08T23:06:20.759Z] [BOT] ✅ No jobs to archive (all 1475 jobs within 7-day window)
[2026-01-08T23:06:20.770Z] [BOT] 💾 Saved posted_jobs.json: 1475 active jobs
[2026-01-08T23:06:20.770Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T23:06:23.771Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-08T23:06:23.771Z] [BOT] ⏭️  Skipping duplicate: JID_7107faa1 (posted within 7 days)
[2026-01-08T23:06:23.771Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
[2026-01-08T23:06:23.780Z] [BOT] ✅ Loaded pending queue: 179 total (159 pending, 20 enriched, 0 posted)
[2026-01-08T23:06:23.792Z] [BOT] ✅ Saved pending queue: 179 total (159 pending, 18 enriched, 2 posted)
[2026-01-08T23:06:23.792Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T23:06:23.846Z] [BOT] 📂 Loaded 2446 existing routing entries
[2026-01-08T23:06:23.910Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-08T23:06:23.910Z] [BOT] Total entries: 2448
   Timestamp: 2026-01-08T23:06:23.892Z
[2026-01-08T23:06:23.910Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T23:06:23.910Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-08T23:06:23.911Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-08T23:06:23.911Z] [BOT] 1. #🌉・san-francisco: 2 posts
     2. #💻・tech-jobs: 1 posts
     3. #📈・JID_fb739488: 1 posts
[2026-01-08T23:06:23.911Z] [BOT] [STATS] Channel stats saved
[2026-01-08T23:06:25.925Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2643) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*