# Discord Bot Execution Audit
**Timestamp:** 2026-01-09T05:14:44.659Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-09T05:14:33.527Z] ========================================
[2026-01-09T05:14:33.529Z] Discord Bot Execution Log
[2026-01-09T05:14:33.529Z] Environment: GitHub Actions
[2026-01-09T05:14:33.529Z] Node Version: v20.19.6
[2026-01-09T05:14:33.530Z] ========================================
[2026-01-09T05:14:33.530Z] Environment Variables Check:
[2026-01-09T05:14:33.530Z] DISCORD_TOKEN: ✅ Set
[2026-01-09T05:14:33.530Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.530Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-09T05:14:33.530Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-09T05:14:33.530Z] 
Multi-Channel Configuration:
[2026-01-09T05:14:33.530Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.530Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.530Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.530Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.531Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.531Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.531Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.531Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.531Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-09T05:14:33.531Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-09T05:14:33.531Z] 
Data Files Check:
[2026-01-09T05:14:33.532Z] .github/data/new_jobs.json: ✅ Exists (10 items, 97817 bytes)
[2026-01-09T05:14:33.538Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 772543 bytes)
[2026-01-09T05:14:33.538Z] 
========================================
[2026-01-09T05:14:33.538Z] Starting Enhanced Discord Bot...
[2026-01-09T05:14:33.538Z] ========================================
[2026-01-09T05:14:34.058Z] [BOT] ✅ Loaded V2 database: 1501 jobs
[2026-01-09T05:14:34.688Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-09T05:14:34.689Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-09T05:14:34.689Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-09T05:14:34.700Z] [BOT] ✅ Loaded pending queue: 211 total (191 pending, 20 enriched, 0 posted)
[2026-01-09T05:14:34.701Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Finance & Strategy, GTM at anthropic
[2026-01-09T05:14:34.702Z] [BOT] ⏭️  Skipping duplicate: JID_28b643d9 (posted within 7 days)
[2026-01-09T05:14:34.702Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
[2026-01-09T05:14:34.703Z] [BOT] ⏭️  Skipping duplicate: JID_de0c0f9f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Service Mesh at Intuit
⏭️  Skipping duplicate: JID_465ec054 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0e9ea282 at Pylon
⏭️  Skipping duplicate: JID_8248b78e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Identity Access Management at Zip
⏭️  Skipping duplicate: JID_645e0e9b (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
[2026-01-09T05:14:34.703Z] [BOT] ⏭️  Skipping duplicate: JID_855a654c (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Amazon
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_2525cc7d-associate_rq212586 (posted within 7 days)
⏭️ Skipping already posted: ROLE_1a650767 at General Dynamics Information Technology
⏭️  Skipping duplicate: JID_e7c049ab (posted within 7 days)
⏭️ Skipping already posted: Corporate Counsel, M&A at anthropic
[2026-01-09T05:14:34.703Z] [BOT] ⏭️  Skipping duplicate: JID_8d58a7c2-ft_r197676 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Advocate Health Care
[2026-01-09T05:14:34.704Z] [BOT] ⏭️  Skipping duplicate: JID_5280a14a-scientist_r2517664 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d69b468e at Applied Materials
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378366-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-09T05:14:34.704Z] [BOT] ⏭️  Skipping duplicate: JID_7b17b840-entry_j00173791 (posted within 7 days)
⏭️ Skipping already posted: Data Processing Specialist - Entry at Equifax
⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
⏭️  Skipping duplicate: JID_22bbcb93 (posted within 7 days)
⏭️ Skipping already posted: Manager, Account Executive - Enterprise Sales  at anthropic
[2026-01-09T05:14:34.704Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23270 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_be96d47c-preferred_rq212564-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_d1a2e1c0 at General Dynamics Information Technology
[2026-01-09T05:14:34.705Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ac961f8e-_jr2026490878-1 (posted within 7 days)
⏭️ Skipping already posted: Atmospheric Scientist – Associate or Mid-Level at The Boeing Company
⏭️  Skipping duplicate: JID_4bd2e4a1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9921d7a0 at Wing
⏭️  Skipping duplicate: JID_db56fd84-_r-48461 (posted within 7 days)
⏭️ Skipping already posted: Data Engineer 1 - Aws - Python at The Travelers Companies
[2026-01-09T05:14:34.705Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-09T05:14:34.705Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-09T05:14:34.705Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-09T05:14:34.706Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-09T05:14:34.709Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-09T05:14:34.710Z] [BOT] 📍 [ROUTING] "Finance & Strategy, GTM" @ anthropic
   Category: SALES (matched: "sales")
[2026-01-09T05:14:34.710Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-09T05:14:34.715Z] [BOT ERROR] (node:3271) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-09T05:14:34.961Z] [BOT] ✅ Created forum post: 🏢 Finance & Strategy, GTM @ anthropic in #💲・sales-jobs
  ✅ Industry: Finance & Strategy, GTM @ anthropic
[2026-01-09T05:14:36.689Z] [BOT] ✅ Created forum post: 🏢 Finance & Strategy, GTM @ anthropic in #🌉・san-francisco
[2026-01-09T05:14:36.689Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-09T05:14:38.191Z] [BOT] 💾 Marked as posted: Finance & Strategy, GTM @ anthropic (instance #1)
[2026-01-09T05:14:38.191Z] [BOT] 💾 BEFORE ARCHIVING: 1502 jobs in database
[2026-01-09T05:14:38.192Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-09T05:14:38.197Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-09T05:14:38.197Z] [BOT] ✅ Archiving complete: 1 archived, 1501 active
[2026-01-09T05:14:38.208Z] [BOT] 💾 Saved posted_jobs.json: 1501 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-09T05:14:41.209Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-09T05:14:41.210Z] [BOT] ⏭️  Skipping duplicate: JID_d3140e0b (posted within 7 days)
[2026-01-09T05:14:41.217Z] [BOT] ✅ Loaded pending queue: 211 total (191 pending, 20 enriched, 0 posted)
[2026-01-09T05:14:41.231Z] [BOT] ✅ Saved pending queue: 211 total (191 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-09T05:14:41.231Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-09T05:14:41.282Z] [BOT] 📂 Loaded 2482 existing routing entries
[2026-01-09T05:14:41.338Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2483
   Timestamp: 2026-01-09T05:14:41.328Z
[2026-01-09T05:14:41.339Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_15090bb5.jsonl
[2026-01-09T05:14:41.339Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-09T05:14:41.339Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-09T05:14:41.339Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-09T05:14:41.340Z] [BOT] [STATS] Channel stats saved
[2026-01-09T05:14:43.354Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3271) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*