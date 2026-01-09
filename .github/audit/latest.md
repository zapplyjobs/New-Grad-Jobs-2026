# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T15:31:14.250Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T15:31:04.046Z] ========================================
[2026-01-09T15:31:04.047Z] Discord Bot Execution Log
[2026-01-09T15:31:04.048Z] Environment: GitHub Actions
[2026-01-09T15:31:04.048Z] Node Version: v20.19.6
[2026-01-09T15:31:04.048Z] ========================================
[2026-01-09T15:31:04.048Z] Environment Variables Check:
[2026-01-09T15:31:04.048Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T15:31:04.048Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.048Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T15:31:04.048Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T15:31:04.048Z] 
Multi-Channel Configuration:
[2026-01-09T15:31:04.048Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.048Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T15:31:04.049Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T15:31:04.049Z] 
Data Files Check:
[2026-01-09T15:31:04.050Z] .github/data/new_jobs.json: ✅ Exists (10 items, 108821 bytes)
[2026-01-09T15:31:04.056Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 773042 bytes)
[2026-01-09T15:31:04.056Z] 
========================================
[2026-01-09T15:31:04.056Z] Starting Enhanced Discord Bot...
[2026-01-09T15:31:04.056Z] ========================================
[2026-01-09T15:31:04.570Z] [BOT] ✅ Loaded V2 database: 1502 jobs
[2026-01-09T15:31:05.077Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T15:31:05.078Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T15:31:05.078Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T15:31:05.086Z] [BOT] ✅ Loaded pending queue: 222 total (202 pending, 20 enriched, 0 posted)
[2026-01-09T15:31:05.086Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Strategic Account Executive, Asset & Wealth Management at anthropic
[2026-01-09T15:31:05.087Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-09T15:31:05.088Z] [BOT] ⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-09T15:31:05.088Z] [BOT] ⏭️  Skipping duplicate: JID_27083d67 (posted within 7 days)
[2026-01-09T15:31:05.088Z] [BOT] ⏭️ Skipping already posted: GTM Strategy and Operations Senior Associate - Product Strategy at datadog
⏭️  Skipping duplicate: JID_9e59648a-level_r0113909-1 (posted within 7 days)
[2026-01-09T15:31:05.088Z] [BOT] ⏭️ Skipping already posted: ROLE_ce65518c at USAA
[2026-01-09T15:31:05.088Z] [BOT] ⏭️  Skipping duplicate: JID_7fb73b9e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
[2026-01-09T15:31:05.088Z] [BOT] ⏭️  Skipping duplicate: JID_ad7cef98-hire_r-2025-62511 (posted within 7 days)
⏭️ Skipping already posted: Associate Data Engineer - Direct College Hire at Southwest Airlines
⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62537 (posted within 7 days)
[2026-01-09T15:31:05.089Z] [BOT] ⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T15:31:05.089Z] [BOT] ⏭️  Skipping duplicate: JID_683b5e8e-hire_r-2025-62493 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer - Direct College Hire at Southwest Airlines
[2026-01-09T15:31:05.089Z] [BOT] ⏭️  Skipping duplicate: JID_66109d1a (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Huntington Ingalls Industries
⏭️  Skipping duplicate: JID_724af6fe (posted within 7 days)
⏭️ Skipping already posted: Engineer Software 1 at Huntington Ingalls Industries
[2026-01-09T15:31:05.089Z] [BOT] ⏭️  Skipping duplicate: JID_803b3e70 (posted within 7 days)
⏭️ Skipping already posted: Partner Marketing Lead, GSIs at anthropic
[2026-01-09T15:31:05.089Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
⏭️ Skipping already posted: Finance & Strategy, GTM at anthropic
[2026-01-09T15:31:05.089Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T15:31:05.090Z] [BOT] ⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
[2026-01-09T15:31:05.090Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T15:31:05.090Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
[2026-01-09T15:31:05.090Z] [BOT] ⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
📬 Found 1 new jobs (19 already posted)...
[2026-01-09T15:31:05.090Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T15:31:05.091Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T15:31:05.091Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T15:31:05.093Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-09T15:31:05.094Z] [BOT] 📍 [ROUTING] "Strategic Account Executive, Asset & Wealth Management" @ anthropic
[2026-01-09T15:31:05.095Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T15:31:05.100Z] [BOT ERROR] (node:2977) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T15:31:05.267Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Asset & Wealth Management @ anthropic in #💲・sales-jobs
[2026-01-09T15:31:05.267Z] [BOT] ✅ Industry: Strategic Account Executive, Asset & Wealth Management @ anthropic
[2026-01-09T15:31:06.941Z] [BOT] ✅ Created forum post: 🏢 Strategic Account Executive, Asset & Wealth Management @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-09T15:31:08.442Z] [BOT] 💾 Marked as posted: Strategic Account Executive, Asset & Wealth Management @ anthropic (instance #1)
[2026-01-09T15:31:08.443Z] [BOT] 💾 BEFORE ARCHIVING: 1503 jobs in database
[2026-01-09T15:31:08.444Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T15:31:08.449Z] [BOT] 📦 Archived 6 jobs to 2026-01.json (6 total in archive)
[2026-01-09T15:31:08.449Z] [BOT] ✅ Archiving complete: 6 archived, 1497 active
[2026-01-09T15:31:08.464Z] [BOT] 💾 Saved posted_jobs.json: 1497 active jobs
[2026-01-09T15:31:08.464Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-09T15:31:11.464Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T15:31:11.464Z] [BOT] ⏭️  Skipping duplicate: JID_7ec53afc (posted within 7 days)
[2026-01-09T15:31:11.472Z] [BOT] ✅ Loaded pending queue: 222 total (202 pending, 20 enriched, 0 posted)
[2026-01-09T15:31:11.487Z] [BOT] ✅ Saved pending queue: 222 total (202 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T15:31:11.487Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T15:31:11.538Z] [BOT] 📂 Loaded 2495 existing routing entries
[2026-01-09T15:31:11.597Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-09T15:31:11.597Z] [BOT] Total entries: 2496
   Timestamp: 2026-01-09T15:31:11.583Z
[2026-01-09T15:31:11.598Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T15:31:11.598Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-09T15:31:11.598Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-09T15:31:11.598Z] [BOT] [STATS] Channel stats saved
[2026-01-09T15:31:13.613Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2977) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*