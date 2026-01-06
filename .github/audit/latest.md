# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T02:41:52.915Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 16
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T02:41:24.670Z] ========================================
[2026-01-06T02:41:24.672Z] Discord Bot Execution Log
[2026-01-06T02:41:24.672Z] Environment: GitHub Actions
[2026-01-06T02:41:24.672Z] Node Version: v20.19.6
[2026-01-06T02:41:24.672Z] ========================================
[2026-01-06T02:41:24.672Z] Environment Variables Check:
[2026-01-06T02:41:24.672Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T02:41:24.672Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.672Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T02:41:24.672Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T02:41:24.672Z] 
Multi-Channel Configuration:
[2026-01-06T02:41:24.672Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T02:41:24.673Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T02:41:24.673Z] 
Data Files Check:
[2026-01-06T02:41:24.674Z] .github/data/new_jobs.json: ✅ Exists (10 items, 77973 bytes)
[2026-01-06T02:41:24.679Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 690567 bytes)
[2026-01-06T02:41:24.679Z] 
========================================
[2026-01-06T02:41:24.679Z] Starting Enhanced Discord Bot...
[2026-01-06T02:41:24.679Z] ========================================
[2026-01-06T02:41:25.201Z] [BOT] ✅ Loaded V2 database: 1352 jobs
[2026-01-06T02:41:25.958Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T02:41:25.958Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T02:41:25.958Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T02:41:25.959Z] [BOT] ✅ Loaded pending queue: 28 total (8 pending, 20 enriched, 0 posted)
[2026-01-06T02:41:25.960Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T02:41:25.960Z] [BOT] [BOT] 🔍 Sample enriched job: Content Designer, Music Mission at spotify
[2026-01-06T02:41:25.961Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
[2026-01-06T02:41:25.962Z] [BOT] ⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T02:41:25.962Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
[2026-01-06T02:41:25.962Z] [BOT] ⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T02:41:25.962Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
[2026-01-06T02:41:25.962Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
[2026-01-06T02:41:25.962Z] [BOT] ⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
[2026-01-06T02:41:25.963Z] [BOT] ⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
⏭️  Skipping duplicate: JID_0dc18936 (posted within 7 days)
⏭️ Skipping already posted: Alternative Data Management - Analyst at iCapital Network
[2026-01-06T02:41:25.963Z] [BOT] ⏭️  Skipping duplicate: JID_57a7d4bd-specialist_r-00172965 (posted within 7 days)
[2026-01-06T02:41:25.963Z] [BOT] ⏭️ Skipping already posted: ROLE_002677b6 at Leidos
⏭️  Skipping duplicate: JID_68fe2f2f-engineer_req-11951 (posted within 7 days)
[2026-01-06T02:41:25.963Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Q2
⏭️  Skipping duplicate: JID_cbe01bac (posted within 7 days)
[2026-01-06T02:41:25.963Z] [BOT] ⏭️ Skipping already posted: Web Developer 1 - UI for Arcgis Enterprise at Esri
⏭️  Skipping duplicate: JID_ddd5ae0d (posted within 7 days)
⏭️ Skipping already posted: Java Software Engineer 1 at Esri
[2026-01-06T02:41:25.963Z] [BOT] ⏭️  Skipping duplicate: JID_531fc6b5 (posted within 7 days)
[2026-01-06T02:41:25.963Z] [BOT] ⏭️ Skipping already posted: Developer 2 - Programming at Western Digital
[2026-01-06T02:41:25.963Z] [BOT] ⏭️  Skipping duplicate: JID_847c9fea (posted within 7 days)
⏭️ Skipping already posted: ROLE_9c662417 at Ramboll
[2026-01-06T02:41:25.964Z] [BOT] ⏭️  Skipping duplicate: JID_9b925359 (posted within 7 days)
⏭️ Skipping already posted: ROLE_ebcb7463 at Jellyvision
📬 Found 4 new jobs (16 already posted)...
[2026-01-06T02:41:25.964Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2026-01-06T02:41:25.964Z] [BOT] 📋 After data quality filter: 4 jobs (0 invalid)
📋 After multi-location grouping: 4 unique jobs to post
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T02:41:25.969Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-06T02:41:25.970Z] [BOT] 📍 [ROUTING] "Content Designer, Music Mission" @ spotify
[2026-01-06T02:41:25.970Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, dsMatch (using ai)
[2026-01-06T02:41:25.977Z] [BOT ERROR] (node:3531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T02:41:26.336Z] [BOT] ✅ Created forum post: 🏢 Content Designer, Music Mission @ spotify in #🤖・ai-jobs
[2026-01-06T02:41:26.336Z] [BOT] ✅ Industry: Content Designer, Music Mission @ spotify
[2026-01-06T02:41:28.040Z] [BOT] ✅ Created forum post: 🏢 Content Designer, Music Mission @ spotify in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-06T02:41:29.541Z] [BOT] 💾 Marked as posted: Content Designer, Music Mission @ spotify (instance #1)
[2026-01-06T02:41:29.541Z] [BOT] 💾 BEFORE ARCHIVING: 1353 jobs in database
[2026-01-06T02:41:29.542Z] [BOT] ✅ No jobs to archive (all 1353 jobs within 7-day window)
[2026-01-06T02:41:29.559Z] [BOT] 💾 Saved posted_jobs.json: 1353 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T02:41:32.560Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2026-01-06T02:41:32.560Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2026-01-06T02:41:32.560Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T02:41:32.772Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2026-01-06T02:41:32.773Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2026-01-06T02:41:34.542Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2026-01-06T02:41:36.043Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0bbe3cb1 (instance #1)
[2026-01-06T02:41:36.043Z] [BOT] 💾 BEFORE ARCHIVING: 1354 jobs in database
[2026-01-06T02:41:36.044Z] [BOT] ✅ No jobs to archive (all 1354 jobs within 7-day window)
[2026-01-06T02:41:36.054Z] [BOT] 💾 Saved posted_jobs.json: 1354 active jobs
[2026-01-06T02:41:36.054Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T02:41:36.056Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0baaf6f2 Express
[2026-01-06T02:41:36.056Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T02:41:36.270Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0baaf6f2 Express
[2026-01-06T02:41:37.988Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0baaf6f2 Express in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T02:41:39.489Z] [BOT] 💾 Marked as posted: Software Engineer 1 @ ORG_0baaf6f2 Express (instance #1)
[2026-01-06T02:41:39.489Z] [BOT] 💾 BEFORE ARCHIVING: 1355 jobs in database
[2026-01-06T02:41:39.490Z] [BOT] ✅ No jobs to archive (all 1355 jobs within 7-day window)
[2026-01-06T02:41:39.499Z] [BOT] 💾 Saved posted_jobs.json: 1355 active jobs
[2026-01-06T02:41:39.499Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T02:41:42.500Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-06T02:41:42.502Z] [BOT] 📍 [ROUTING] "Tax Director" @ brex
   Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-06T02:41:42.883Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #💲・sales-jobs
[2026-01-06T02:41:42.883Z] [BOT] ✅ Industry: Tax Director @ brex
[2026-01-06T02:41:44.944Z] [BOT] ✅ Created forum post: 🏢 Tax Director @ brex in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-06T02:41:46.445Z] [BOT] 💾 Marked as posted: Tax Director @ brex (instance #1)
[2026-01-06T02:41:46.445Z] [BOT] 💾 BEFORE ARCHIVING: 1356 jobs in database
[2026-01-06T02:41:46.446Z] [BOT] ✅ No jobs to archive (all 1356 jobs within 7-day window)
[2026-01-06T02:41:46.455Z] [BOT] 💾 Saved posted_jobs.json: 1356 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T02:41:49.455Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2026-01-06T02:41:49.456Z] [BOT] ⏭️  Skipping duplicate: JID_32fa9f33 (posted within 7 days)
[2026-01-06T02:41:49.456Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
[2026-01-06T02:41:49.456Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
[2026-01-06T02:41:49.456Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
[2026-01-06T02:41:49.458Z] [BOT] ✅ Loaded pending queue: 28 total (8 pending, 20 enriched, 0 posted)
[2026-01-06T02:41:49.459Z] [BOT] ✅ Saved pending queue: 28 total (8 pending, 16 enriched, 4 posted)
[2026-01-06T02:41:49.459Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T02:41:49.517Z] [BOT] 📂 Loaded 2274 existing routing entries
[2026-01-06T02:41:49.578Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2026-01-06T02:41:49.578Z] [BOT] Total entries: 2278
   Timestamp: 2026-01-06T02:41:49.565Z
[2026-01-06T02:41:49.579Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T02:41:49.579Z] [BOT] Total attempts: 24
   Successful: 8
   Failed: 0
   Skipped: 16
[2026-01-06T02:41:49.579Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-06T02:41:49.579Z] [BOT] Total posts: 8
   Channels used: 6
   Top channels:
     1. #🗽・new-york: 2 posts
[2026-01-06T02:41:49.579Z] [BOT] 2. #💻・tech-jobs: 2 posts
     3. #🤖・ai-jobs: 1 posts
     4. #🌄・mountain-view: 1 posts
     5. #💻・remote-usa: 1 posts
[2026-01-06T02:41:49.579Z] [BOT] [STATS] Channel stats saved
[2026-01-06T02:41:51.592Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3531) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*