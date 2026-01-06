# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T01:57:09.884Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T01:56:51.335Z] ========================================
[2026-01-06T01:56:51.337Z] Discord Bot Execution Log
[2026-01-06T01:56:51.337Z] Environment: GitHub Actions
[2026-01-06T01:56:51.337Z] Node Version: v20.19.6
[2026-01-06T01:56:51.337Z] ========================================
[2026-01-06T01:56:51.337Z] Environment Variables Check:
[2026-01-06T01:56:51.337Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T01:56:51.337Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T01:56:51.338Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T01:56:51.338Z] 
Multi-Channel Configuration:
[2026-01-06T01:56:51.338Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.338Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T01:56:51.339Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T01:56:51.339Z] 
Data Files Check:
[2026-01-06T01:56:51.340Z] .github/data/new_jobs.json: ✅ Exists (10 items, 66006 bytes)
[2026-01-06T01:56:51.344Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 689475 bytes)
[2026-01-06T01:56:51.344Z] 
========================================
[2026-01-06T01:56:51.344Z] Starting Enhanced Discord Bot...
[2026-01-06T01:56:51.344Z] ========================================
[2026-01-06T01:56:51.859Z] [BOT] ✅ Loaded V2 database: 1350 jobs
[2026-01-06T01:56:52.402Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T01:56:52.403Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T01:56:52.403Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T01:56:52.404Z] [BOT] ✅ Loaded pending queue: 25 total (5 pending, 20 enriched, 0 posted)
[2026-01-06T01:56:52.404Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Engineer at Jellyvision
[2026-01-06T01:56:52.406Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
[2026-01-06T01:56:52.406Z] [BOT] ⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T01:56:52.406Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
[2026-01-06T01:56:52.406Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T01:56:52.406Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
[2026-01-06T01:56:52.407Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
[2026-01-06T01:56:52.407Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
[2026-01-06T01:56:52.407Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
[2026-01-06T01:56:52.407Z] [BOT] ⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
[2026-01-06T01:56:52.407Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
⏭️ Skipping already posted: ROLE_002677b6 at Leidos
[2026-01-06T01:56:52.407Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Q2
[2026-01-06T01:56:52.407Z] [BOT] ⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
⏭️ Skipping already posted: Web Developer 1 - UI for Arcgis Enterprise at Esri
[2026-01-06T01:56:52.408Z] [BOT] ⏭️  Skipping duplicate: JID_ddd5ae0d (posted within 7 days)
⏭️ Skipping already posted: Java Software Engineer 1 at Esri
⏭️  Skipping duplicate: JID_531fc6b5 (posted within 7 days)
⏭️ Skipping already posted: Developer 2 - Programming at Western Digital
[2026-01-06T01:56:52.408Z] [BOT] ⏭️  Skipping duplicate: JID_847c9fea (posted within 7 days)
⏭️ Skipping already posted: ROLE_9c662417 at Ramboll
⏭️  Skipping duplicate: JID_70c4903f-external_experienced-JID_35faf930-engineer_r160657 (posted within 7 days)
⏭️ Skipping already posted: 2026 University Graduate - Software Development Engineer at Adobe
[2026-01-06T01:56:52.408Z] [BOT] ⏭️  Skipping duplicate: JID_07a45ae8 (posted within 7 days)
⏭️ Skipping already posted: ROLE_0db1a897 at Major League Baseball
📬 Found 3 new jobs (17 already posted)...
[2026-01-06T01:56:52.408Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2026-01-06T01:56:52.408Z] [BOT] 📋 After data quality filter: 3 jobs (0 invalid)
[2026-01-06T01:56:52.409Z] [BOT] 📋 After multi-location grouping: 3 unique jobs to post
[2026-01-06T01:56:52.409Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T01:56:52.410Z] [BOT] 📌 Posting 2 jobs to #📈・JID_fb739488
[2026-01-06T01:56:52.411Z] [BOT] 📍 [ROUTING] "Data Engineer" @ ORG_563af4c1
[2026-01-06T01:56:52.411Z] [BOT] Category: DATA-SCIENCE (matched: "data engineering")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-06T01:56:52.415Z] [BOT ERROR] (node:3624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T01:56:52.662Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_563af4c1 in #📈・JID_fb739488
  ✅ Industry: Data Engineer @ ORG_563af4c1
[2026-01-06T01:56:54.382Z] [BOT] ✅ Created forum post: 🏢 Data Engineer @ ORG_563af4c1 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T01:56:55.882Z] [BOT] 💾 Marked as posted: Data Engineer @ ORG_563af4c1 (instance #1)
[2026-01-06T01:56:55.882Z] [BOT] 💾 BEFORE ARCHIVING: 1351 jobs in database
[2026-01-06T01:56:55.883Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-06T01:56:55.888Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-06T01:56:55.888Z] [BOT] ✅ Archiving complete: 1 archived, 1350 active
[2026-01-06T01:56:55.898Z] [BOT] 💾 Saved posted_jobs.json: 1350 active jobs
[2026-01-06T01:56:55.899Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:56:55.899Z] [BOT] 📍 [ROUTING] "Analyst Data Management" @ ORG_4aef9434ine
[2026-01-06T01:56:55.899Z] [BOT] Category: DATA-SCIENCE (matched: "data analytics")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-06T01:56:56.127Z] [BOT] ✅ Created forum post: 🏢 Analyst Data Management @ ORG_4aef9434ine in #📈・JID_fb739488
[2026-01-06T01:56:56.128Z] [BOT] ✅ Industry: Analyst Data Management @ ORG_4aef9434ine
[2026-01-06T01:56:57.629Z] [BOT] 💾 Marked as posted: Analyst Data Management @ ORG_4aef9434ine (instance #1)
[2026-01-06T01:56:57.629Z] [BOT] 💾 BEFORE ARCHIVING: 1351 jobs in database
[2026-01-06T01:56:57.630Z] [BOT] ✅ No jobs to archive (all 1351 jobs within 7-day window)
[2026-01-06T01:56:57.640Z] [BOT] 💾 Saved posted_jobs.json: 1351 active jobs
[2026-01-06T01:56:57.640Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:57:00.639Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T01:57:00.641Z] [BOT] 📍 [ROUTING] "Software Engineer Level 0" @ ORG_26f6f1be
[2026-01-06T01:57:00.641Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T01:57:00.846Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Level 0 @ ORG_26f6f1be in #💻・tech-jobs
  ✅ Industry: Software Engineer Level 0 @ ORG_26f6f1be
[2026-01-06T01:57:02.668Z] [BOT] ✅ Created forum post: 🏢 Software Engineer Level 0 @ ORG_26f6f1be in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T01:57:04.169Z] [BOT] 💾 Marked as posted: Software Engineer Level 0 @ ORG_26f6f1be (instance #1)
[2026-01-06T01:57:04.170Z] [BOT] 💾 BEFORE ARCHIVING: 1352 jobs in database
[2026-01-06T01:57:04.171Z] [BOT] ✅ No jobs to archive (all 1352 jobs within 7-day window)
[2026-01-06T01:57:04.180Z] [BOT] 💾 Saved posted_jobs.json: 1352 active jobs
[2026-01-06T01:57:04.180Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T01:57:07.181Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2026-01-06T01:57:07.182Z] [BOT] ⏭️  Skipping duplicate: JID_9b925359 (posted within 7 days)
[2026-01-06T01:57:07.182Z] [BOT] ⏭️  Skipping duplicate: JID_78a0c557-management_r2522417 (posted within 7 days)
[2026-01-06T01:57:07.182Z] [BOT] ⏭️  Skipping duplicate: JID_e8d56a94 (posted within 7 days)
[2026-01-06T01:57:07.183Z] [BOT] ✅ Loaded pending queue: 25 total (5 pending, 20 enriched, 0 posted)
[2026-01-06T01:57:07.185Z] [BOT] ✅ Saved pending queue: 25 total (5 pending, 17 enriched, 3 posted)
[2026-01-06T01:57:07.185Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T01:57:07.238Z] [BOT] 📂 Loaded 2271 existing routing entries
[2026-01-06T01:57:07.299Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 2274
[2026-01-06T01:57:07.300Z] [BOT] Timestamp: 2026-01-06T01:57:07.284Z
[2026-01-06T01:57:07.300Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
   Total attempts: 22
   Successful: 5
   Failed: 0
   Skipped: 17
[2026-01-06T01:57:07.300Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T01:57:07.301Z] [BOT] Last cleanup: Never
   Total posts: 5
   Channels used: 3
   Top channels:
[2026-01-06T01:57:07.301Z] [BOT] 1. #📈・JID_fb739488: 2 posts
     2. #💻・remote-usa: 2 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-06T01:57:07.301Z] [BOT] [STATS] Channel stats saved
[2026-01-06T01:57:09.314Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3624) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*