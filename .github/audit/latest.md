# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T04:48:01.515Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T04:47:50.152Z] ========================================
[2026-01-06T04:47:50.154Z] Discord Bot Execution Log
[2026-01-06T04:47:50.154Z] Environment: GitHub Actions
[2026-01-06T04:47:50.154Z] Node Version: v20.19.6
[2026-01-06T04:47:50.154Z] ========================================
[2026-01-06T04:47:50.154Z] Environment Variables Check:
[2026-01-06T04:47:50.154Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T04:47:50.154Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.154Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T04:47:50.155Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T04:47:50.155Z] 
Multi-Channel Configuration:
[2026-01-06T04:47:50.155Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T04:47:50.155Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T04:47:50.155Z] 
Data Files Check:
[2026-01-06T04:47:50.156Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64247 bytes)
[2026-01-06T04:47:50.161Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 695394 bytes)
[2026-01-06T04:47:50.161Z] 
========================================
[2026-01-06T04:47:50.161Z] Starting Enhanced Discord Bot...
[2026-01-06T04:47:50.161Z] ========================================
[2026-01-06T04:47:50.677Z] [BOT] ✅ Loaded V2 database: 1360 jobs
[2026-01-06T04:47:51.677Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T04:47:51.678Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T04:47:51.678Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T04:47:51.679Z] [BOT] ✅ Loaded pending queue: 32 total (12 pending, 20 enriched, 0 posted)
[2026-01-06T04:47:51.679Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T04:47:51.679Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T04:47:51.680Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
[2026-01-06T04:47:51.680Z] [BOT] ⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T04:47:51.681Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T04:47:51.681Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
[2026-01-06T04:47:51.681Z] [BOT] ⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T04:47:51.681Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T04:47:51.681Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T04:47:51.681Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T04:47:51.682Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T04:47:51.682Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
[2026-01-06T04:47:51.682Z] [BOT] ⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T04:47:51.682Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-06T04:47:51.682Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T04:47:51.682Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
[2026-01-06T04:47:51.682Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
[2026-01-06T04:47:51.683Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
[2026-01-06T04:47:51.683Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
⏭️ Skipping already posted: ROLE_002677b6 at Leidos
⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Q2
[2026-01-06T04:47:51.683Z] [BOT] ⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
⏭️ Skipping already posted: Web Developer 1 - UI for Arcgis Enterprise at Esri
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T04:47:51.683Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T04:47:51.683Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T04:47:51.684Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T04:47:51.684Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T04:47:51.685Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T04:47:51.686Z] [BOT] 📍 [ROUTING] "Software Engineer - Cloud Growth" @ ORG_840fec76 Technologies
[2026-01-06T04:47:51.686Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T04:47:51.691Z] [BOT ERROR] (node:3870) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T04:47:52.032Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Cloud Growth @ ORG_840fec76 Technologies in #💻・tech-jobs
[2026-01-06T04:47:52.033Z] [BOT] ✅ Industry: Software Engineer - Cloud Growth @ ORG_840fec76 Technologies
[2026-01-06T04:47:53.825Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Cloud Growth @ ORG_840fec76 Technologies in #💻・remote-usa
[2026-01-06T04:47:53.825Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T04:47:55.326Z] [BOT] 💾 Marked as posted: Software Engineer - Cloud Growth @ ORG_840fec76 Technologies (instance #1)
[2026-01-06T04:47:55.326Z] [BOT] 💾 BEFORE ARCHIVING: 1361 jobs in database
[2026-01-06T04:47:55.327Z] [BOT] ✅ No jobs to archive (all 1361 jobs within 7-day window)
[2026-01-06T04:47:55.343Z] [BOT] 💾 Saved posted_jobs.json: 1361 active jobs
[2026-01-06T04:47:55.343Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T04:47:58.344Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T04:47:58.344Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
[2026-01-06T04:47:58.345Z] [BOT] ✅ Loaded pending queue: 32 total (12 pending, 20 enriched, 0 posted)
[2026-01-06T04:47:58.347Z] [BOT] ✅ Saved pending queue: 32 total (12 pending, 19 enriched, 1 posted)
[2026-01-06T04:47:58.347Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T04:47:58.399Z] [BOT] 📂 Loaded 2282 existing routing entries
[2026-01-06T04:47:58.458Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-06T04:47:58.458Z] [BOT] Total entries: 2283
   Timestamp: 2026-01-06T04:47:58.444Z
[2026-01-06T04:47:58.458Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T04:47:58.458Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T04:47:58.459Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T04:47:58.459Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-06T04:47:58.459Z] [BOT] 2. #💻・remote-usa: 1 posts
[2026-01-06T04:47:58.459Z] [BOT] [STATS] Channel stats saved
[2026-01-06T04:48:00.468Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3870) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*