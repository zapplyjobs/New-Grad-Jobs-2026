# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T16:06:45.941Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T16:06:35.426Z] ========================================
[2026-01-06T16:06:35.428Z] Discord Bot Execution Log
[2026-01-06T16:06:35.428Z] Environment: GitHub Actions
[2026-01-06T16:06:35.428Z] Node Version: v20.19.6
[2026-01-06T16:06:35.428Z] ========================================
[2026-01-06T16:06:35.428Z] Environment Variables Check:
[2026-01-06T16:06:35.428Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T16:06:35.428Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.428Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T16:06:35.428Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T16:06:35.429Z] 
Multi-Channel Configuration:
[2026-01-06T16:06:35.429Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T16:06:35.429Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T16:06:35.429Z] 
Data Files Check:
[2026-01-06T16:06:35.430Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94504 bytes)
[2026-01-06T16:06:35.435Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 696739 bytes)
[2026-01-06T16:06:35.435Z] 
========================================
[2026-01-06T16:06:35.435Z] Starting Enhanced Discord Bot...
[2026-01-06T16:06:35.435Z] ========================================
[2026-01-06T16:06:35.995Z] [BOT] ✅ Loaded V2 database: 1363 jobs
[2026-01-06T16:06:36.612Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T16:06:36.613Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T16:06:36.613Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T16:06:36.614Z] [BOT] ✅ Loaded pending queue: 40 total (20 pending, 20 enriched, 0 posted)
[2026-01-06T16:06:36.614Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Premier Support Engineer 2 at datadog
[2026-01-06T16:06:36.616Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
[2026-01-06T16:06:36.616Z] [BOT] ⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T16:06:36.616Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
[2026-01-06T16:06:36.616Z] [BOT] ⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-06T16:06:36.616Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T16:06:36.616Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T16:06:36.617Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T16:06:36.617Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
[2026-01-06T16:06:36.617Z] [BOT] ⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T16:06:36.617Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T16:06:36.617Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T16:06:36.617Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T16:06:36.618Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T16:06:36.618Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T16:06:36.618Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-06T16:06:36.618Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T16:06:36.618Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
[2026-01-06T16:06:36.618Z] [BOT] ⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T16:06:36.618Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T16:06:36.618Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T16:06:36.619Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T16:06:36.619Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T16:06:36.621Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T16:06:36.622Z] [BOT] 📍 [ROUTING] "Premier Support Engineer 2" @ datadog
[2026-01-06T16:06:36.622Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T16:06:36.627Z] [BOT ERROR] (node:3452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T16:06:36.854Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 @ datadog in #💻・tech-jobs
  ✅ Industry: Premier Support Engineer 2 @ datadog
[2026-01-06T16:06:38.645Z] [BOT] ✅ Created forum post: 🏢 Premier Support Engineer 2 @ datadog in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T16:06:40.147Z] [BOT] 💾 Marked as posted: Premier Support Engineer 2 @ datadog (instance #1)
[2026-01-06T16:06:40.147Z] [BOT] 💾 BEFORE ARCHIVING: 1364 jobs in database
[2026-01-06T16:06:40.148Z] [BOT] ✅ No jobs to archive (all 1364 jobs within 7-day window)
[2026-01-06T16:06:40.163Z] [BOT] 💾 Saved posted_jobs.json: 1364 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T16:06:43.163Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T16:06:43.164Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-06T16:06:43.165Z] [BOT] ✅ Loaded pending queue: 40 total (20 pending, 20 enriched, 0 posted)
[2026-01-06T16:06:43.168Z] [BOT] ✅ Saved pending queue: 40 total (20 pending, 19 enriched, 1 posted)
[2026-01-06T16:06:43.168Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T16:06:43.227Z] [BOT] 📂 Loaded 2289 existing routing entries
[2026-01-06T16:06:43.285Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2290
   Timestamp: 2026-01-06T16:06:43.274Z
[2026-01-06T16:06:43.286Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T16:06:43.286Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T16:06:43.287Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-06T16:06:43.287Z] [BOT] [STATS] Channel stats saved
[2026-01-06T16:06:45.299Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*