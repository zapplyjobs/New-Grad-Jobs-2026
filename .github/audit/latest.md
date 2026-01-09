# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T15:56:26.268Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T15:56:15.296Z] ========================================
[2026-01-09T15:56:15.298Z] Discord Bot Execution Log
[2026-01-09T15:56:15.298Z] Environment: GitHub Actions
[2026-01-09T15:56:15.298Z] Node Version: v20.19.6
[2026-01-09T15:56:15.298Z] ========================================
[2026-01-09T15:56:15.298Z] Environment Variables Check:
[2026-01-09T15:56:15.298Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T15:56:15.298Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.298Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T15:56:15.298Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T15:56:15.298Z] 
Multi-Channel Configuration:
[2026-01-09T15:56:15.299Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T15:56:15.299Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T15:56:15.299Z] 
Data Files Check:
[2026-01-09T15:56:15.300Z] .github/data/new_jobs.json: ✅ Exists (10 items, 109466 bytes)
[2026-01-09T15:56:15.306Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 768186 bytes)
[2026-01-09T15:56:15.306Z] 
========================================
[2026-01-09T15:56:15.306Z] Starting Enhanced Discord Bot...
[2026-01-09T15:56:15.306Z] ========================================
[2026-01-09T15:56:15.825Z] [BOT] ✅ Loaded V2 database: 1495 jobs
[2026-01-09T15:56:16.714Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T15:56:16.715Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T15:56:16.715Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T15:56:16.725Z] [BOT] ✅ Loaded pending queue: 223 total (203 pending, 20 enriched, 0 posted)
[2026-01-09T15:56:16.726Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate Operations Analyst at Broadridge
[2026-01-09T15:56:16.727Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-09T15:56:16.727Z] [BOT] ⏭️ Skipping already posted: Strategic Account Executive, Asset & Wealth Management at anthropic
[2026-01-09T15:56:16.727Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-09T15:56:16.728Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
[2026-01-09T15:56:16.728Z] [BOT] ⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T15:56:16.728Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T15:56:16.728Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T15:56:16.728Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T15:56:16.729Z] [BOT] ⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T15:56:16.729Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T15:56:16.729Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T15:56:16.729Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
[2026-01-09T15:56:16.729Z] [BOT] ⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
[2026-01-09T15:56:16.730Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T15:56:16.730Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
[2026-01-09T15:56:16.730Z] [BOT] ⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T15:56:16.730Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T15:56:16.730Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T15:56:16.731Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T15:56:16.731Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-09T15:56:16.733Z] [BOT] 📍 [ROUTING] "Associate Operations Analyst" @ ORG_bac0256c
[2026-01-09T15:56:16.733Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-09T15:56:16.738Z] [BOT ERROR] (node:3056) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T15:56:16.915Z] [BOT] ✅ Created forum post: 🏢 Associate Operations Analyst @ ORG_bac0256c in #🤖・ai-jobs
[2026-01-09T15:56:16.915Z] [BOT] ✅ Industry: Associate Operations Analyst @ ORG_bac0256c
[2026-01-09T15:56:18.670Z] [BOT] ✅ Created forum post: 🏢 Associate Operations Analyst @ ORG_bac0256c in #🗽・new-york
[2026-01-09T15:56:18.670Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-09T15:56:20.170Z] [BOT] 💾 Marked as posted: Associate Operations Analyst @ ORG_bac0256c (instance #1)
[2026-01-09T15:56:20.171Z] [BOT] 💾 BEFORE ARCHIVING: 1496 jobs in database
[2026-01-09T15:56:20.172Z] [BOT] ✅ No jobs to archive (all 1496 jobs within 7-day window)
[2026-01-09T15:56:20.186Z] [BOT] 💾 Saved posted_jobs.json: 1496 active jobs
[2026-01-09T15:56:20.186Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T15:56:23.187Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T15:56:23.187Z] [BOT] ⏭️  Skipping duplicate: JID_abdacdd5-_jr1078475 (posted within 7 days)
[2026-01-09T15:56:23.195Z] [BOT] ✅ Loaded pending queue: 223 total (203 pending, 20 enriched, 0 posted)
[2026-01-09T15:56:23.211Z] [BOT] ✅ Saved pending queue: 223 total (203 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T15:56:23.211Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T15:56:23.261Z] [BOT] 📂 Loaded 2497 existing routing entries
[2026-01-09T15:56:23.317Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2498
[2026-01-09T15:56:23.317Z] [BOT] Timestamp: 2026-01-09T15:56:23.306Z
[2026-01-09T15:56:23.317Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T15:56:23.318Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T15:56:23.318Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-09T15:56:23.318Z] [BOT] [STATS] Channel stats saved
[2026-01-09T15:56:25.333Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3056) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*