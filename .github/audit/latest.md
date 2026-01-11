# Discord Bot Execution Audit
**Timestamp:** 2026-01-11T12:07:22.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-11T12:07:20.520Z] ========================================
[2026-01-11T12:07:20.522Z] Discord Bot Execution Log
[2026-01-11T12:07:20.522Z] Environment: GitHub Actions
[2026-01-11T12:07:20.522Z] Node Version: v20.19.6
[2026-01-11T12:07:20.522Z] ========================================
[2026-01-11T12:07:20.522Z] Environment Variables Check:
[2026-01-11T12:07:20.522Z] DISCORD_TOKEN: ✅ Set
[2026-01-11T12:07:20.522Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.522Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-11T12:07:20.523Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-11T12:07:20.523Z] 
Multi-Channel Configuration:
[2026-01-11T12:07:20.523Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-11T12:07:20.523Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-11T12:07:20.523Z] 
Data Files Check:
[2026-01-11T12:07:20.524Z] .github/data/new_jobs.json: ✅ Exists (10 items, 114182 bytes)
[2026-01-11T12:07:20.527Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 378271 bytes)
[2026-01-11T12:07:20.527Z] 
========================================
[2026-01-11T12:07:20.527Z] Starting Enhanced Discord Bot...
[2026-01-11T12:07:20.527Z] ========================================
[2026-01-11T12:07:21.034Z] [BOT] ✅ Loaded V2 database: 691 jobs
[2026-01-11T12:07:21.837Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-11T12:07:21.837Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-11T12:07:21.838Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-11T12:07:21.849Z] [BOT] ✅ Loaded pending queue: 254 total (234 pending, 20 enriched, 0 posted)
[2026-01-11T12:07:21.850Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Microsoft
[2026-01-11T12:07:21.850Z] [BOT] ⏭️  Skipping duplicate: JID_3a61670d (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Microsoft
⏭️  Skipping duplicate: JID_23c26877 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - AI Video Agent at OpusClip
[2026-01-11T12:07:21.851Z] [BOT] ⏭️  Skipping duplicate: JID_29e75fe7 (posted within 7 days)
[2026-01-11T12:07:21.851Z] [BOT] ⏭️ Skipping already posted: Technical Program Manager, Claude Experiences at anthropic
[2026-01-11T12:07:21.851Z] [BOT] ⏭️  Skipping duplicate: JID_cdd1fa58 (posted within 7 days)
⏭️ Skipping already posted: Technical Program Manager, Launches at anthropic
⏭️  Skipping duplicate: JID_a44e73ca-6078923_13942107 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Accenture
[2026-01-11T12:07:21.851Z] [BOT] ⏭️  Skipping duplicate: JID_b52ff88b (posted within 7 days)
⏭️ Skipping already posted: Customer Success Manager, Digital Native Business at anthropic
⏭️  Skipping duplicate: JID_32370a09-allstate_careers-JID_0836cfe9-_r25322-1 (posted within 7 days)
[2026-01-11T12:07:21.851Z] [BOT] ⏭️ Skipping already posted: Product Engineer - Multiple Levels Available at Allstate Insurance Company
⏭️  Skipping duplicate: JID_bf667cd4 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
⏭️  Skipping duplicate: JID_3154d390 (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Enterprise SLED East) at verkada
[2026-01-11T12:07:21.851Z] [BOT] ⏭️  Skipping duplicate: JID_74f162ca-_r-48003-1 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 2 - Multiple Teams at The Travelers Companies
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_4bb8a75a (posted within 7 days)
⏭️ Skipping already posted: Full Stack Software Engineer - Starshield at SpaceX
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_98c6a169-erm_careers-JID_8d139cbf-scientist_r00028796-1 (posted within 7 days)
⏭️ Skipping already posted: Consulting Associate - Environmental Engineering - Geology / Scientist at ERM
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_b69ed3c9-cox_external_career_site_1-JID_0654be85-i_r202671420 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Cox
⏭️  Skipping duplicate: JID_fa4b2a4c-_r10228-1 (posted within 7 days)
⏭️ Skipping already posted: Analyst Geospatial - GIS at Invenergy
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_09f269c8 (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_73fc7f0e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist 2 for Published Clinical Evidence & Competitive Intelligence Insights at AbbVie
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_2ea70d65-mathematics_r138207 (posted within 7 days)
⏭️ Skipping already posted: Postdoctoral Research Associate - Mathematics at Northeastern University
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_e3eae60c (posted within 7 days)
⏭️ Skipping already posted: ROLE_9041ccc4 at NV5 Global
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_b26e7c99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a044eb04 at Westinghouse Electric Company
[2026-01-11T12:07:21.852Z] [BOT] ⏭️  Skipping duplicate: JID_777c5169 (posted within 7 days)
⏭️ Skipping already posted: ROLE_f7ffdd20 at Clay
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-11T12:07:21.863Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*