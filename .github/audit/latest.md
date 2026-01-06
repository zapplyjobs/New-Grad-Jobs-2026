# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T09:42:51.800Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T09:42:40.393Z] ========================================
[2026-01-06T09:42:40.395Z] Discord Bot Execution Log
[2026-01-06T09:42:40.395Z] Environment: GitHub Actions
[2026-01-06T09:42:40.395Z] Node Version: v20.19.6
[2026-01-06T09:42:40.395Z] ========================================
[2026-01-06T09:42:40.395Z] Environment Variables Check:
[2026-01-06T09:42:40.395Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T09:42:40.396Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T09:42:40.396Z] 
Multi-Channel Configuration:
[2026-01-06T09:42:40.396Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.396Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.397Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T09:42:40.397Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T09:42:40.397Z] 
Data Files Check:
[2026-01-06T09:42:40.398Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56071 bytes)
[2026-01-06T09:42:40.403Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 696418 bytes)
[2026-01-06T09:42:40.403Z] 
========================================
[2026-01-06T09:42:40.403Z] Starting Enhanced Discord Bot...
[2026-01-06T09:42:40.403Z] ========================================
[2026-01-06T09:42:40.950Z] [BOT] ✅ Loaded V2 database: 1362 jobs
[2026-01-06T09:42:41.800Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T09:42:41.800Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T09:42:41.801Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T09:42:41.802Z] [BOT] ✅ Loaded pending queue: 37 total (17 pending, 20 enriched, 0 posted)
[2026-01-06T09:42:41.802Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T09:42:41.802Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at Twitch
[2026-01-06T09:42:41.805Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
[2026-01-06T09:42:41.805Z] [BOT] ⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T09:42:41.805Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T09:42:41.805Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
[2026-01-06T09:42:41.805Z] [BOT] ⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T09:42:41.805Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T09:42:41.806Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T09:42:41.806Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T09:42:41.806Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T09:42:41.806Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T09:42:41.806Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T09:42:41.806Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T09:42:41.807Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
[2026-01-06T09:42:41.807Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
[2026-01-06T09:42:41.807Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
[2026-01-06T09:42:41.807Z] [BOT] ⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
📬 Found 2 new jobs (18 already posted)...
[2026-01-06T09:42:41.807Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-06T09:42:41.808Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T09:42:41.808Z] [BOT] (1 grouped as same job with different locations)
⏸️ Limiting to 10 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T09:42:41.809Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T09:42:41.810Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_a731a58c
[2026-01-06T09:42:41.811Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T09:42:41.816Z] [BOT ERROR] (node:3579) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T09:42:42.118Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_a731a58c in #💻・tech-jobs
[2026-01-06T09:42:42.118Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_a731a58c
[2026-01-06T09:42:43.818Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_a731a58c in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-06T09:42:45.319Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_a731a58c (instance #1)
[2026-01-06T09:42:45.320Z] [BOT] 💾 BEFORE ARCHIVING: 1363 jobs in database
[2026-01-06T09:42:45.321Z] [BOT] ✅ No jobs to archive (all 1363 jobs within 7-day window)
[2026-01-06T09:42:45.336Z] [BOT] 💾 Saved posted_jobs.json: 1363 active jobs
[2026-01-06T09:42:45.336Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T09:42:45.337Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_a731a58c (instance #1)
💾 BEFORE ARCHIVING: 1364 jobs in database
[2026-01-06T09:42:45.338Z] [BOT] ✅ No jobs to archive (all 1364 jobs within 7-day window)
[2026-01-06T09:42:45.348Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
[2026-01-06T09:42:45.348Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T09:42:48.350Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T09:42:48.350Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-06T09:42:48.351Z] [BOT] ✅ Loaded pending queue: 37 total (17 pending, 20 enriched, 0 posted)
[2026-01-06T09:42:48.353Z] [BOT] ✅ Saved pending queue: 37 total (17 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T09:42:48.406Z] [BOT] 📂 Loaded 2285 existing routing entries
[2026-01-06T09:42:48.463Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-06T09:42:48.463Z] [BOT] Total entries: 2286
   Timestamp: 2026-01-06T09:42:48.453Z
[2026-01-06T09:42:48.464Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 20
   Successful: 2
   Failed: 0
   Skipped: 18
[2026-01-06T09:42:48.464Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-06T09:42:48.464Z] [BOT] 2. #🌧️・seattle: 1 posts
[2026-01-06T09:42:48.464Z] [BOT] [STATS] Channel stats saved
[2026-01-06T09:42:50.474Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3579) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*