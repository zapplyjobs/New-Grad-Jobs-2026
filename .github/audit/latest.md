# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T03:22:47.062Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T03:22:36.851Z] ========================================
[2026-01-06T03:22:36.853Z] Discord Bot Execution Log
[2026-01-06T03:22:36.853Z] Environment: GitHub Actions
[2026-01-06T03:22:36.853Z] Node Version: v20.19.6
[2026-01-06T03:22:36.853Z] ========================================
[2026-01-06T03:22:36.853Z] Environment Variables Check:
[2026-01-06T03:22:36.853Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T03:22:36.853Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.853Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T03:22:36.854Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T03:22:36.854Z] 
Multi-Channel Configuration:
[2026-01-06T03:22:36.854Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T03:22:36.854Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T03:22:36.855Z] 
Data Files Check:
[2026-01-06T03:22:36.855Z] .github/data/new_jobs.json: ✅ Exists (10 items, 71078 bytes)
[2026-01-06T03:22:36.860Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 692522 bytes)
[2026-01-06T03:22:36.860Z] 
========================================
[2026-01-06T03:22:36.860Z] Starting Enhanced Discord Bot...
[2026-01-06T03:22:36.860Z] ========================================
[2026-01-06T03:22:37.394Z] [BOT] ✅ Loaded V2 database: 1356 jobs
[2026-01-06T03:22:37.857Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T03:22:37.858Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T03:22:37.858Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T03:22:37.859Z] [BOT] ✅ Loaded pending queue: 29 total (9 pending, 20 enriched, 0 posted)
[2026-01-06T03:22:37.859Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T03:22:37.859Z] [BOT] [BOT] 🔍 Sample enriched job: Software Engineer 1 at American Express
[2026-01-06T03:22:37.860Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
[2026-01-06T03:22:37.861Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T03:22:37.861Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T03:22:37.861Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T03:22:37.862Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T03:22:37.862Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
[2026-01-06T03:22:37.862Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
[2026-01-06T03:22:37.862Z] [BOT] ⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
[2026-01-06T03:22:37.862Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
[2026-01-06T03:22:37.862Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
[2026-01-06T03:22:37.862Z] [BOT] ⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
[2026-01-06T03:22:37.862Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
⏭️ Skipping already posted: ROLE_002677b6 at Leidos
[2026-01-06T03:22:37.863Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Q2
[2026-01-06T03:22:37.863Z] [BOT] ⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
⏭️ Skipping already posted: Web Developer 1 - UI for Arcgis Enterprise at Esri
[2026-01-06T03:22:37.863Z] [BOT] ⏭️  Skipping duplicate: JID_ddd5ae0d (posted within 7 days)
⏭️ Skipping already posted: Java Software Engineer 1 at Esri
[2026-01-06T03:22:37.863Z] [BOT] ⏭️  Skipping duplicate: JID_531fc6b5 (posted within 7 days)
⏭️ Skipping already posted: Developer 2 - Programming at Western Digital
[2026-01-06T03:22:37.863Z] [BOT] ⏭️  Skipping duplicate: JID_847c9fea (posted within 7 days)
⏭️ Skipping already posted: ROLE_9c662417 at Ramboll
⏭️  Skipping duplicate: JID_9b925359 (posted within 7 days)
[2026-01-06T03:22:37.863Z] [BOT] ⏭️ Skipping already posted: ROLE_ebcb7463 at Jellyvision
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T03:22:37.863Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T03:22:37.863Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T03:22:37.864Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T03:22:37.864Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T03:22:37.865Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T03:22:37.866Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0baaf6f2 Express
[2026-01-06T03:22:37.866Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T03:22:37.870Z] [BOT ERROR] (node:3490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T03:22:38.105Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・tech-jobs
[2026-01-06T03:22:38.105Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0baaf6f2 Express
[2026-01-06T03:22:39.849Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・remote-usa
[2026-01-06T03:22:39.849Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-06T03:22:41.350Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0baaf6f2 Express (instance #1)
[2026-01-06T03:22:41.350Z] [BOT] 💾 BEFORE ARCHIVING: 1357 jobs in database
[2026-01-06T03:22:41.351Z] [BOT] ✅ No jobs to archive (all 1357 jobs within 7-day window)
[2026-01-06T03:22:41.367Z] [BOT] 💾 Saved posted_jobs.json: 1357 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T03:22:44.369Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T03:22:44.369Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
[2026-01-06T03:22:44.370Z] [BOT] ✅ Loaded pending queue: 29 total (9 pending, 20 enriched, 0 posted)
[2026-01-06T03:22:44.372Z] [BOT] ✅ Saved pending queue: 29 total (9 pending, 19 enriched, 1 posted)
[2026-01-06T03:22:44.372Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T03:22:44.425Z] [BOT] 📂 Loaded 2278 existing routing entries
[2026-01-06T03:22:44.481Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2279
   Timestamp: 2026-01-06T03:22:44.471Z
[2026-01-06T03:22:44.482Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T03:22:44.482Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-06T03:22:44.482Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-06T03:22:44.482Z] [BOT] 2. #💻・remote-usa: 1 posts
[2026-01-06T03:22:44.483Z] [BOT] [STATS] Channel stats saved
[2026-01-06T03:22:46.491Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3490) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*