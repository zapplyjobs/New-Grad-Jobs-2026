# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T04:19:41.494Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T04:19:31.244Z] ========================================
[2026-01-06T04:19:31.246Z] Discord Bot Execution Log
[2026-01-06T04:19:31.246Z] Environment: GitHub Actions
[2026-01-06T04:19:31.246Z] Node Version: v20.19.6
[2026-01-06T04:19:31.246Z] ========================================
[2026-01-06T04:19:31.246Z] Environment Variables Check:
[2026-01-06T04:19:31.246Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T04:19:31.247Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T04:19:31.247Z] 
Multi-Channel Configuration:
[2026-01-06T04:19:31.247Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.247Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.248Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T04:19:31.248Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T04:19:31.248Z] 
Data Files Check:
[2026-01-06T04:19:31.248Z] .github/data/new_jobs.json: ✅ Exists (10 items, 62427 bytes)
[2026-01-06T04:19:31.254Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 694586 bytes)
[2026-01-06T04:19:31.254Z] 
========================================
[2026-01-06T04:19:31.254Z] Starting Enhanced Discord Bot...
[2026-01-06T04:19:31.254Z] ========================================
[2026-01-06T04:19:31.780Z] [BOT] ✅ Loaded V2 database: 1359 jobs
[2026-01-06T04:19:32.280Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T04:19:32.280Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T04:19:32.281Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T04:19:32.284Z] [BOT] ✅ Loaded pending queue: 31 total (11 pending, 20 enriched, 0 posted)
[2026-01-06T04:19:32.285Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T04:19:32.286Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
[2026-01-06T04:19:32.286Z] [BOT] ⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T04:19:32.286Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
[2026-01-06T04:19:32.286Z] [BOT] ⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
[2026-01-06T04:19:32.287Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T04:19:32.287Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T04:19:32.287Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T04:19:32.287Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T04:19:32.287Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T04:19:32.287Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
[2026-01-06T04:19:32.288Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
[2026-01-06T04:19:32.288Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
[2026-01-06T04:19:32.288Z] [BOT] ⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
[2026-01-06T04:19:32.288Z] [BOT] ⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
[2026-01-06T04:19:32.288Z] [BOT] ⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
[2026-01-06T04:19:32.288Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
⏭️ Skipping already posted: ROLE_002677b6 at Leidos
[2026-01-06T04:19:32.288Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Q2
⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
⏭️ Skipping already posted: Web Developer 1 - UI for Arcgis Enterprise at Esri
[2026-01-06T04:19:32.288Z] [BOT] ⏭️  Skipping duplicate: JID_ddd5ae0d (posted within 7 days)
⏭️ Skipping already posted: Java Software Engineer 1 at Esri
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T04:19:32.288Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T04:19:32.289Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T04:19:32.289Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T04:19:32.289Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T04:19:32.290Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T04:19:32.292Z] [BOT] 📍 [ROUTING] "DL Algorithms Engineer – New College Graduate 2026 - Cosmos" @ ORG_0890f456
[2026-01-06T04:19:32.292Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T04:19:32.298Z] [BOT ERROR] (node:3702) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T04:19:32.501Z] [BOT] ✅ Created forum post: 🏢 DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456 in #🤖・ai-jobs
[2026-01-06T04:19:32.501Z] [BOT] ✅ Industry: DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456
[2026-01-06T04:19:34.295Z] [BOT] ✅ Created forum post: 🏢 DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456 in #🌉・san-francisco
[2026-01-06T04:19:34.295Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-06T04:19:35.796Z] [BOT] 💾 Marked as posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos @ ORG_0890f456 (instance #1)
[2026-01-06T04:19:35.796Z] [BOT] 💾 BEFORE ARCHIVING: 1360 jobs in database
[2026-01-06T04:19:35.797Z] [BOT] ✅ No jobs to archive (all 1360 jobs within 7-day window)
[2026-01-06T04:19:35.806Z] [BOT] 💾 Saved posted_jobs.json: 1360 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T04:19:38.808Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T04:19:38.808Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
[2026-01-06T04:19:38.809Z] [BOT] ✅ Loaded pending queue: 31 total (11 pending, 20 enriched, 0 posted)
[2026-01-06T04:19:38.811Z] [BOT] ✅ Saved pending queue: 31 total (11 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T04:19:38.864Z] [BOT] 📂 Loaded 2281 existing routing entries
[2026-01-06T04:19:38.920Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2282
   Timestamp: 2026-01-06T04:19:38.909Z
[2026-01-06T04:19:38.920Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T04:19:38.920Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T04:19:38.921Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T04:19:38.921Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
[2026-01-06T04:19:38.921Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-06T04:19:38.921Z] [BOT] [STATS] Channel stats saved
[2026-01-06T04:19:40.932Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3702) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*