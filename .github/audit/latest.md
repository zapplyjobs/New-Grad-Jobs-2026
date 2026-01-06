# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T15:06:51.025Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-06T15:06:48.845Z] ========================================
[2026-01-06T15:06:48.847Z] Discord Bot Execution Log
[2026-01-06T15:06:48.847Z] Environment: GitHub Actions
[2026-01-06T15:06:48.847Z] Node Version: v20.19.6
[2026-01-06T15:06:48.847Z] ========================================
[2026-01-06T15:06:48.847Z] Environment Variables Check:
[2026-01-06T15:06:48.847Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T15:06:48.847Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.847Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T15:06:48.848Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T15:06:48.848Z] 
Multi-Channel Configuration:
[2026-01-06T15:06:48.848Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T15:06:48.848Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T15:06:48.848Z] 
Data Files Check:
[2026-01-06T15:06:48.849Z] .github/data/new_jobs.json: ✅ Exists (10 items, 64614 bytes)
[2026-01-06T15:06:48.855Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 696239 bytes)
[2026-01-06T15:06:48.855Z] 
========================================
[2026-01-06T15:06:48.855Z] Starting Enhanced Discord Bot...
[2026-01-06T15:06:48.855Z] ========================================
[2026-01-06T15:06:49.404Z] [BOT] ✅ Loaded V2 database: 1362 jobs
[2026-01-06T15:06:50.067Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T15:06:50.068Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T15:06:50.068Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T15:06:50.069Z] [BOT] ✅ Loaded pending queue: 38 total (18 pending, 20 enriched, 0 posted)
[2026-01-06T15:06:50.069Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T15:06:50.069Z] [BOT] [BOT] 🔍 Sample enriched job: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T15:06:50.070Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
[2026-01-06T15:06:50.070Z] [BOT] ⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T15:06:50.070Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T15:06:50.070Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
[2026-01-06T15:06:50.071Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T15:06:50.071Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T15:06:50.071Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T15:06:50.071Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
[2026-01-06T15:06:50.071Z] [BOT] ⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T15:06:50.071Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T15:06:50.071Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T15:06:50.072Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T15:06:50.072Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T15:06:50.072Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T15:06:50.072Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
[2026-01-06T15:06:50.072Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
⏭️  Skipping duplicate: JID_e5aa2072-us_bank_careers-JID_3488340e-1_2026-0000098 (posted within 7 days)
[2026-01-06T15:06:50.072Z] [BOT] ⏭️ Skipping already posted: Quantitative Model Analyst 1 at U.S. Bank
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_10617304-industrial_r10218122 (posted within 7 days)
⏭️ Skipping already posted: Industrial Engineer / Principal Industrial Engineer at Northrop Grumman
[2026-01-06T15:06:50.072Z] [BOT] ⏭️  Skipping duplicate: JID_0593c4c3-analyst_req473450 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ea28857 at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_32370a09-sourcing_event-JID_aa868147-program_r22128-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4bf8ed4e at Allstate Insurance Company
[2026-01-06T15:06:50.073Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_394fc2b9-_jr2025488628-1 (posted within 7 days)
⏭️ Skipping already posted: Product Data Management Specialist - Entry or Associate Level at The Boeing Company
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-06T15:06:50.084Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*