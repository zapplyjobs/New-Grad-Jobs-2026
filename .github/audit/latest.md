# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T23:25:56.884Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 16
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T23:25:41.655Z] ========================================
[2026-01-08T23:25:41.657Z] Discord Bot Execution Log
[2026-01-08T23:25:41.657Z] Environment: GitHub Actions
[2026-01-08T23:25:41.657Z] Node Version: v20.19.6
[2026-01-08T23:25:41.657Z] ========================================
[2026-01-08T23:25:41.657Z] Environment Variables Check:
[2026-01-08T23:25:41.657Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T23:25:41.658Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.658Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T23:25:41.658Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T23:25:41.658Z] 
Multi-Channel Configuration:
[2026-01-08T23:25:41.658Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.658Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.658Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.658Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.658Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.658Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.659Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.659Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.659Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T23:25:41.659Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T23:25:41.659Z] 
Data Files Check:
[2026-01-08T23:25:41.660Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152342 bytes)
[2026-01-08T23:25:41.666Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 757172 bytes)
[2026-01-08T23:25:41.666Z] 
========================================
[2026-01-08T23:25:41.666Z] Starting Enhanced Discord Bot...
[2026-01-08T23:25:41.666Z] ========================================
[2026-01-08T23:25:42.178Z] [BOT] ✅ Loaded V2 database: 1475 jobs
[2026-01-08T23:25:42.964Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T23:25:42.964Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T23:25:42.964Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T23:25:42.974Z] [BOT] ✅ Loaded pending queue: 183 total (163 pending, 20 enriched, 0 posted)
[2026-01-08T23:25:42.974Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Engineering Manager, Salesforce at brex
[2026-01-08T23:25:42.976Z] [BOT] ⏭️  Skipping duplicate: JID_7107faa1 (posted within 7 days)
[2026-01-08T23:25:42.976Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, GTM Engineering  at brex
[2026-01-08T23:25:42.976Z] [BOT] ⏭️  Skipping duplicate: JID_e3295d17 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer - SEO at discord
[2026-01-08T23:25:42.977Z] [BOT] ⏭️  Skipping duplicate: JID_7d40f03b (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:25:42.977Z] [BOT] ⏭️  Skipping duplicate: JID_5287f9fe (posted within 7 days)
⏭️ Skipping already posted: Manager, Mid-Market Sales (Client Account Executives) at reddit
[2026-01-08T23:25:42.977Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer, Applied AI, Digital Natives Business at anthropic
⏭️  Skipping duplicate: JID_fa7d515d (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at brex
⏭️  Skipping duplicate: JID_0bd523c4 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at brex
[2026-01-08T23:25:42.977Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-08T23:25:42.977Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T23:25:42.977Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
[2026-01-08T23:25:42.978Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
[2026-01-08T23:25:42.978Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T23:25:42.978Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T23:25:42.978Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
[2026-01-08T23:25:42.978Z] [BOT] ⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
📬 Found 4 new jobs (16 already posted)...
[2026-01-08T23:25:42.978Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-08T23:25:42.978Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
[2026-01-08T23:25:42.979Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-08T23:25:42.979Z] [BOT] (2 grouped as same job with different locations)
📍 2 jobs with multiple locations:
   - Engineering Manager, Salesforce @ brex: new york, new york, united states, san francisco, california, united states
   - Engineering Manager, GTM Engineering  @ brex: seattle, washington, united states, new york, new york, united states
⏸️ Limiting to 10 jobs this run, 2 deferred for next run
📤 Posting 2 jobs...
[2026-01-08T23:25:42.979Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T23:25:42.981Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-08T23:25:42.982Z] [BOT] 📍 [ROUTING] "Engineering Manager, Salesforce" @ brex
[2026-01-08T23:25:42.983Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T23:25:42.987Z] [BOT ERROR] (node:2678) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T23:25:43.377Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Salesforce @ brex in #💻・tech-jobs
  ✅ Industry: Engineering Manager, Salesforce @ brex
[2026-01-08T23:25:45.269Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, Salesforce @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-08T23:25:46.769Z] [BOT] 💾 Marked as posted: Engineering Manager, Salesforce @ brex (instance #1)
[2026-01-08T23:25:46.770Z] [BOT] 💾 BEFORE ARCHIVING: 1476 jobs in database
[2026-01-08T23:25:46.771Z] [BOT] ✅ No jobs to archive (all 1476 jobs within 7-day window)
[2026-01-08T23:25:46.784Z] [BOT] 💾 Saved posted_jobs.json: 1476 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T23:25:46.785Z] [BOT] 💾 Marked as posted: Engineering Manager, Salesforce @ brex (instance #1)
💾 BEFORE ARCHIVING: 1477 jobs in database
[2026-01-08T23:25:46.786Z] [BOT] ✅ No jobs to archive (all 1477 jobs within 7-day window)
[2026-01-08T23:25:46.796Z] [BOT] 💾 Saved posted_jobs.json: 1477 active jobs
[2026-01-08T23:25:46.796Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T23:25:46.797Z] [BOT] 📍 [ROUTING] "Engineering Manager, GTM Engineering " @ brex
[2026-01-08T23:25:46.797Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T23:25:47.333Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, GTM Engineering  @ brex in #💻・tech-jobs
[2026-01-08T23:25:47.333Z] [BOT] ✅ Industry: Engineering Manager, GTM Engineering  @ brex
[2026-01-08T23:25:49.037Z] [BOT] ✅ Created forum post: 🏢 Engineering Manager, GTM Engineering  @ brex in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-08T23:25:50.538Z] [BOT] 💾 Marked as posted: Engineering Manager, GTM Engineering  @ brex (instance #1)
[2026-01-08T23:25:50.538Z] [BOT] 💾 BEFORE ARCHIVING: 1478 jobs in database
[2026-01-08T23:25:50.539Z] [BOT] ✅ No jobs to archive (all 1478 jobs within 7-day window)
[2026-01-08T23:25:50.550Z] [BOT] 💾 Saved posted_jobs.json: 1478 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T23:25:50.550Z] [BOT] 💾 Marked as posted: Engineering Manager, GTM Engineering  @ brex (instance #1)
💾 BEFORE ARCHIVING: 1479 jobs in database
[2026-01-08T23:25:50.551Z] [BOT] ✅ No jobs to archive (all 1479 jobs within 7-day window)
[2026-01-08T23:25:50.560Z] [BOT] 💾 Saved posted_jobs.json: 1479 active jobs
[2026-01-08T23:25:50.560Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T23:25:53.561Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-08T23:25:53.561Z] [BOT] ⏭️  Skipping duplicate: JID_bdba1f64 (posted within 7 days)
[2026-01-08T23:25:53.561Z] [BOT] ⏭️  Skipping duplicate: JID_19fd3815 (posted within 7 days)
[2026-01-08T23:25:53.569Z] [BOT] ✅ Loaded pending queue: 183 total (163 pending, 20 enriched, 0 posted)
[2026-01-08T23:25:53.581Z] [BOT] ✅ Saved pending queue: 183 total (163 pending, 18 enriched, 2 posted)
[2026-01-08T23:25:53.581Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-08T23:25:53.644Z] [BOT] 📂 Loaded 2448 existing routing entries
[2026-01-08T23:25:53.698Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-08T23:25:53.699Z] [BOT] Total entries: 2450
   Timestamp: 2026-01-08T23:25:53.687Z
[2026-01-08T23:25:53.699Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T23:25:53.699Z] [BOT] Total attempts: 20
   Successful: 4
   Failed: 0
   Skipped: 16
[2026-01-08T23:25:53.699Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T23:25:53.700Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
[2026-01-08T23:25:53.700Z] [BOT] 1. #💻・tech-jobs: 2 posts
     2. #🗽・new-york: 1 posts
     3. #🌧️・seattle: 1 posts
[2026-01-08T23:25:53.700Z] [BOT] [STATS] Channel stats saved
[2026-01-08T23:25:55.714Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2678) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*