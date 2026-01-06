# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T14:42:38.401Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T14:42:27.643Z] ========================================
[2026-01-06T14:42:27.645Z] Discord Bot Execution Log
[2026-01-06T14:42:27.645Z] Environment: GitHub Actions
[2026-01-06T14:42:27.645Z] Node Version: v20.19.6
[2026-01-06T14:42:27.645Z] ========================================
[2026-01-06T14:42:27.645Z] Environment Variables Check:
[2026-01-06T14:42:27.645Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T14:42:27.645Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.645Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T14:42:27.646Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T14:42:27.646Z] 
Multi-Channel Configuration:
[2026-01-06T14:42:27.646Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T14:42:27.646Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T14:42:27.647Z] 
Data Files Check:
[2026-01-06T14:42:27.647Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64614 bytes)
[2026-01-06T14:42:27.653Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 695733 bytes)
[2026-01-06T14:42:27.653Z] 
========================================
[2026-01-06T14:42:27.653Z] Starting Enhanced Discord Bot...
[2026-01-06T14:42:27.653Z] ========================================
[2026-01-06T14:42:28.174Z] [BOT] ✅ Loaded V2 database: 1361 jobs
[2026-01-06T14:42:28.852Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T14:42:28.853Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T14:42:28.853Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T14:42:28.854Z] [BOT] ✅ Loaded pending queue: 38 total (18 pending, 20 enriched, 0 posted)
[2026-01-06T14:42:28.854Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T14:42:28.855Z] [BOT] [BOT] 🔍 Sample enriched job: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T14:42:28.856Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-06T14:42:28.856Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T14:42:28.856Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T14:42:28.856Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
[2026-01-06T14:42:28.857Z] [BOT] ⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T14:42:28.857Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T14:42:28.857Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T14:42:28.857Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T14:42:28.857Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T14:42:28.857Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T14:42:28.857Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T14:42:28.858Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
[2026-01-06T14:42:28.858Z] [BOT] ⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-06T14:42:28.858Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
[2026-01-06T14:42:28.858Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
[2026-01-06T14:42:28.858Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
[2026-01-06T14:42:28.858Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T14:42:28.859Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T14:42:28.859Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T14:42:28.859Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T14:42:28.859Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T14:42:28.860Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T14:42:28.861Z] [BOT] 📍 [ROUTING] "Senior Staff Machine Learning Engineer - Home" @ spotify
[2026-01-06T14:42:28.861Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
[2026-01-06T14:42:28.861Z] [BOT] ⚠️  Multiple matches: aiMatch, dsMatch, techMatch (using ai)
[2026-01-06T14:42:28.866Z] [BOT ERROR] (node:3709) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T14:42:29.482Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer - Home @ spotify in #🤖・ai-jobs
[2026-01-06T14:42:29.482Z] [BOT] ✅ Industry: Senior Staff Machine Learning Engineer - Home @ spotify
[2026-01-06T14:42:31.154Z] [BOT] ✅ Created forum post: 🏢 Senior Staff Machine Learning Engineer - Home @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-06T14:42:32.655Z] [BOT] 💾 Marked as posted: Senior Staff Machine Learning Engineer - Home @ spotify (instance #1)
[2026-01-06T14:42:32.655Z] [BOT] 💾 BEFORE ARCHIVING: 1362 jobs in database
[2026-01-06T14:42:32.657Z] [BOT] ✅ No jobs to archive (all 1362 jobs within 7-day window)
[2026-01-06T14:42:32.672Z] [BOT] 💾 Saved posted_jobs.json: 1362 active jobs
[2026-01-06T14:42:32.672Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T14:42:35.673Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T14:42:35.673Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
[2026-01-06T14:42:35.675Z] [BOT] ✅ Loaded pending queue: 38 total (18 pending, 20 enriched, 0 posted)
[2026-01-06T14:42:35.677Z] [BOT] ✅ Saved pending queue: 38 total (18 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T14:42:35.728Z] [BOT] 📂 Loaded 2287 existing routing entries
[2026-01-06T14:42:35.787Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2288
   Timestamp: 2026-01-06T14:42:35.774Z
[2026-01-06T14:42:35.788Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T14:42:35.788Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T14:42:35.788Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T14:42:35.788Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-06T14:42:35.788Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-06T14:42:35.789Z] [BOT] [STATS] Channel stats saved
[2026-01-06T14:42:37.798Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3709) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*