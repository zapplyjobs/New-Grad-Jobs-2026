# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T16:58:36.478Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-06T16:58:34.090Z] ========================================
[2026-01-06T16:58:34.092Z] Discord Bot Execution Log
[2026-01-06T16:58:34.092Z] Environment: GitHub Actions
[2026-01-06T16:58:34.092Z] Node Version: v20.19.6
[2026-01-06T16:58:34.092Z] ========================================
[2026-01-06T16:58:34.092Z] Environment Variables Check:
[2026-01-06T16:58:34.092Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T16:58:34.092Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.092Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T16:58:34.092Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T16:58:34.092Z] 
Multi-Channel Configuration:
[2026-01-06T16:58:34.093Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T16:58:34.093Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T16:58:34.093Z] 
Data Files Check:
[2026-01-06T16:58:34.094Z] .github/data/new_jobs.json: ✅ Exists (10 items, 115779 bytes)
[2026-01-06T16:58:34.100Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 699234 bytes)
[2026-01-06T16:58:34.100Z] 
========================================
[2026-01-06T16:58:34.100Z] Starting Enhanced Discord Bot...
[2026-01-06T16:58:34.100Z] ========================================
[2026-01-06T16:58:34.570Z] [BOT] ✅ Loaded V2 database: 1368 jobs
[2026-01-06T16:58:35.421Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T16:58:35.422Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T16:58:35.422Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T16:58:35.423Z] [BOT] ✅ Loaded pending queue: 44 total (24 pending, 20 enriched, 0 posted)
[2026-01-06T16:58:35.424Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Sales Executive  at datadog
[2026-01-06T16:58:35.424Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-06T16:58:35.424Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T16:58:35.425Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
[2026-01-06T16:58:35.425Z] [BOT] ⏭️  Skipping duplicate: JID_38c7271e (posted within 7 days)
⏭️ Skipping already posted: ROLE_2237147a at Shiftsmart
[2026-01-06T16:58:35.425Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T16:58:35.425Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T16:58:35.425Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
[2026-01-06T16:58:35.426Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T16:58:35.426Z] [BOT] ⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T16:58:35.427Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
[2026-01-06T16:58:35.427Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_d4dbf916-i_r202569460 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_63dfb498-associate_421596 (posted within 7 days)
⏭️ Skipping already posted: Predoctoral Appointee - Engineer Research Associate at Argonne National Laboratory
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-06T16:58:35.435Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*