# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T11:37:48.972Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T11:37:38.685Z] ========================================
[2026-01-06T11:37:38.687Z] Discord Bot Execution Log
[2026-01-06T11:37:38.687Z] Environment: GitHub Actions
[2026-01-06T11:37:38.687Z] Node Version: v20.19.6
[2026-01-06T11:37:38.687Z] ========================================
[2026-01-06T11:37:38.687Z] Environment Variables Check:
[2026-01-06T11:37:38.687Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T11:37:38.687Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.687Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T11:37:38.687Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T11:37:38.687Z] 
Multi-Channel Configuration:
[2026-01-06T11:37:38.688Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T11:37:38.688Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T11:37:38.688Z] 
Data Files Check:
[2026-01-06T11:37:38.689Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56156 bytes)
[2026-01-06T11:37:38.695Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 697320 bytes)
[2026-01-06T11:37:38.695Z] 
========================================
[2026-01-06T11:37:38.695Z] Starting Enhanced Discord Bot...
[2026-01-06T11:37:38.695Z] ========================================
[2026-01-06T11:37:39.209Z] [BOT] ✅ Loaded V2 database: 1364 jobs
[2026-01-06T11:37:39.809Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T11:37:39.809Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T11:37:39.810Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T11:37:39.811Z] [BOT] ✅ Loaded pending queue: 37 total (17 pending, 20 enriched, 0 posted)
[2026-01-06T11:37:39.811Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist - Risk Data Mining - USDS at TikTok
[2026-01-06T11:37:39.812Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
[2026-01-06T11:37:39.812Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T11:37:39.812Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T11:37:39.813Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
[2026-01-06T11:37:39.813Z] [BOT] ⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T11:37:39.813Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
[2026-01-06T11:37:39.813Z] [BOT] ⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T11:37:39.813Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T11:37:39.813Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T11:37:39.813Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T11:37:39.813Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T11:37:39.813Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T11:37:39.814Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
[2026-01-06T11:37:39.814Z] [BOT] ⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-06T11:37:39.814Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
[2026-01-06T11:37:39.814Z] [BOT] ⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
[2026-01-06T11:37:39.814Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
[2026-01-06T11:37:39.814Z] [BOT] ⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
[2026-01-06T11:37:39.814Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
📬 Found 1 new jobs (19 already posted)...
[2026-01-06T11:37:39.815Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-06T11:37:39.815Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-06T11:37:39.815Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-06T11:37:39.815Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T11:37:39.816Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-06T11:37:39.817Z] [BOT] 📍 [ROUTING] "Data Scientist - Risk Data Mining - USDS" @ ORG_1bb6fcfb
   Category: DATA-SCIENCE (matched: "data science")
[2026-01-06T11:37:39.817Z] [BOT] Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-06T11:37:39.834Z] [BOT ERROR] (node:3512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T11:37:39.994Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Risk Data Mining - USDS @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-06T11:37:39.995Z] [BOT] ✅ Industry: Data Scientist - Risk Data Mining - USDS @ ORG_1bb6fcfb
[2026-01-06T11:37:41.772Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Risk Data Mining - USDS @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T11:37:43.272Z] [BOT] 💾 Marked as posted: Data Scientist - Risk Data Mining - USDS @ ORG_1bb6fcfb (instance #1)
[2026-01-06T11:37:43.273Z] [BOT] 💾 BEFORE ARCHIVING: 1365 jobs in database
[2026-01-06T11:37:43.274Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-06T11:37:43.279Z] [BOT] 📦 Archived 4 jobs to 2025-12.json (4 total in archive)
✅ Archiving complete: 4 archived, 1361 active
[2026-01-06T11:37:43.288Z] [BOT] 💾 Saved posted_jobs.json: 1361 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T11:37:46.289Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-06T11:37:46.289Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_45029f16 (posted within 7 days)
[2026-01-06T11:37:46.290Z] [BOT] ✅ Loaded pending queue: 37 total (17 pending, 20 enriched, 0 posted)
[2026-01-06T11:37:46.292Z] [BOT] ✅ Saved pending queue: 37 total (17 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-06T11:37:46.292Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-06T11:37:46.343Z] [BOT] 📂 Loaded 2286 existing routing entries
[2026-01-06T11:37:46.398Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2287
   Timestamp: 2026-01-06T11:37:46.387Z
[2026-01-06T11:37:46.398Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T11:37:46.399Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-06T11:37:46.399Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-06T11:37:46.399Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #📈・JID_fb739488: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-06T11:37:46.399Z] [BOT] [STATS] Channel stats saved
[2026-01-06T11:37:48.409Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3512) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*