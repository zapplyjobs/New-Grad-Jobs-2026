# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T03:57:26.978Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T03:57:09.451Z] ========================================
[2026-01-06T03:57:09.453Z] Discord Bot Execution Log
[2026-01-06T03:57:09.453Z] Environment: GitHub Actions
[2026-01-06T03:57:09.453Z] Node Version: v20.19.6
[2026-01-06T03:57:09.453Z] ========================================
[2026-01-06T03:57:09.453Z] Environment Variables Check:
[2026-01-06T03:57:09.453Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T03:57:09.453Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.453Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T03:57:09.453Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T03:57:09.454Z] 
Multi-Channel Configuration:
[2026-01-06T03:57:09.454Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T03:57:09.454Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T03:57:09.454Z] 
Data Files Check:
[2026-01-06T03:57:09.455Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64299 bytes)
[2026-01-06T03:57:09.460Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 692978 bytes)
[2026-01-06T03:57:09.460Z] 
========================================
[2026-01-06T03:57:09.460Z] Starting Enhanced Discord Bot...
[2026-01-06T03:57:09.460Z] ========================================
[2026-01-06T03:57:09.976Z] [BOT] ✅ Loaded V2 database: 1357 jobs
[2026-01-06T03:57:10.597Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T03:57:10.597Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T03:57:10.598Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T03:57:10.601Z] [BOT] ✅ Loaded pending queue: 30 total (10 pending, 20 enriched, 0 posted)
[2026-01-06T03:57:10.601Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T03:57:10.603Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
[2026-01-06T03:57:10.603Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T03:57:10.603Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T03:57:10.604Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T03:57:10.604Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T03:57:10.604Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T03:57:10.604Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
[2026-01-06T03:57:10.604Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
[2026-01-06T03:57:10.605Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
[2026-01-06T03:57:10.605Z] [BOT] ⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
[2026-01-06T03:57:10.605Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
[2026-01-06T03:57:10.605Z] [BOT] ⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
[2026-01-06T03:57:10.605Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
⏭️ Skipping already posted: ROLE_002677b6 at Leidos
[2026-01-06T03:57:10.605Z] [BOT] ⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Q2
⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
⏭️ Skipping already posted: Web Developer 1 - UI for Arcgis Enterprise at Esri
[2026-01-06T03:57:10.605Z] [BOT] ⏭️  Skipping duplicate: JID_ddd5ae0d (posted within 7 days)
[2026-01-06T03:57:10.606Z] [BOT] ⏭️ Skipping already posted: Java Software Engineer 1 at Esri
⏭️  Skipping duplicate: JID_531fc6b5 (posted within 7 days)
[2026-01-06T03:57:10.606Z] [BOT] ⏭️ Skipping already posted: Developer 2 - Programming at Western Digital
📬 Found 2 new jobs (18 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-06T03:57:10.606Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-06T03:57:10.607Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-06T03:57:10.607Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T03:57:10.610Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T03:57:10.611Z] [BOT] 📍 [ROUTING] "Research Engineer – PhD New College Grad - Architecture" @ ORG_0890f456
[2026-01-06T03:57:10.611Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T03:57:10.615Z] [BOT ERROR] (node:3596) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T03:57:10.880Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 in #💻・tech-jobs
[2026-01-06T03:57:10.880Z] [BOT] ✅ Industry: Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456
[2026-01-06T03:57:12.586Z] [BOT] ✅ Created forum post: 🏢 Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 in #🤠・austin
[2026-01-06T03:57:12.586Z] [BOT] ✅ Location: 🤠・austin
[2026-01-06T03:57:14.088Z] [BOT] 💾 Marked as posted: Research Engineer – PhD New College Grad - Architecture @ ORG_0890f456 (instance #1)
[2026-01-06T03:57:14.088Z] [BOT] 💾 BEFORE ARCHIVING: 1358 jobs in database
[2026-01-06T03:57:14.089Z] [BOT] ✅ No jobs to archive (all 1358 jobs within 7-day window)
[2026-01-06T03:57:14.103Z] [BOT] 💾 Saved posted_jobs.json: 1358 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T03:57:17.104Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-06T03:57:17.105Z] [BOT] 📍 [ROUTING] "2026 Polymer Characterization and Thermal Analysis Research Associate" @ ORG_b344d80e Aerospace Corporation
[2026-01-06T03:57:17.105Z] [BOT] Category: MARKETING (matched: "growth")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-06T03:57:17.325Z] [BOT] ✅ Created forum post: 🏢 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation in #📣・marketing-jobs
[2026-01-06T03:57:17.325Z] [BOT] ✅ Industry: 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation
[2026-01-06T03:57:19.029Z] [BOT] ✅ Created forum post: 🏢 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation in #🦢・los-angeles
  ✅ Location: 🦢・los-angeles
[2026-01-06T03:57:20.531Z] [BOT] 💾 Marked as posted: 2026 Polymer Characterization and Thermal Analysis Research Associate @ ORG_b344d80e Aerospace Corporation (instance #1)
[2026-01-06T03:57:20.531Z] [BOT] 💾 BEFORE ARCHIVING: 1359 jobs in database
[2026-01-06T03:57:20.532Z] [BOT] ✅ No jobs to archive (all 1359 jobs within 7-day window)
[2026-01-06T03:57:20.542Z] [BOT] 💾 Saved posted_jobs.json: 1359 active jobs
[2026-01-06T03:57:20.542Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T03:57:23.543Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-06T03:57:23.544Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
[2026-01-06T03:57:23.544Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
[2026-01-06T03:57:23.545Z] [BOT] ✅ Loaded pending queue: 30 total (10 pending, 20 enriched, 0 posted)
[2026-01-06T03:57:23.547Z] [BOT] ✅ Saved pending queue: 30 total (10 pending, 18 enriched, 2 posted)
[2026-01-06T03:57:23.547Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T03:57:23.601Z] [BOT] 📂 Loaded 2279 existing routing entries
[2026-01-06T03:57:23.664Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-06T03:57:23.664Z] [BOT] Total entries: 2281
   Timestamp: 2026-01-06T03:57:23.648Z
[2026-01-06T03:57:23.664Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T03:57:23.664Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-06T03:57:23.665Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-06T03:57:23.665Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🤠・austin: 1 posts
     3. #📣・marketing-jobs: 1 posts
     4. #🦢・los-angeles: 1 posts
[2026-01-06T03:57:23.665Z] [BOT] [STATS] Channel stats saved
[2026-01-06T03:57:25.678Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3596) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*