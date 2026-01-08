# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T10:06:48.315Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-08T10:06:45.656Z] ========================================
[2026-01-08T10:06:45.658Z] Discord Bot Execution Log
[2026-01-08T10:06:45.658Z] Environment: GitHub Actions
[2026-01-08T10:06:45.658Z] Node Version: v20.19.6
[2026-01-08T10:06:45.658Z] ========================================
[2026-01-08T10:06:45.658Z] Environment Variables Check:
[2026-01-08T10:06:45.658Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T10:06:45.658Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T10:06:45.659Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T10:06:45.659Z] 
Multi-Channel Configuration:
[2026-01-08T10:06:45.659Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.659Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.660Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T10:06:45.660Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T10:06:45.660Z] 
Data Files Check:
[2026-01-08T10:06:45.661Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70837 bytes)
[2026-01-08T10:06:45.667Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 759019 bytes)
[2026-01-08T10:06:45.667Z] 
========================================
[2026-01-08T10:06:45.667Z] Starting Enhanced Discord Bot...
[2026-01-08T10:06:45.667Z] ========================================
[2026-01-08T10:06:46.219Z] [BOT] ✅ Loaded V2 database: 1472 jobs
[2026-01-08T10:06:47.373Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T10:06:47.373Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T10:06:47.374Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T10:06:47.383Z] [BOT] ✅ Loaded pending queue: 146 total (126 pending, 20 enriched, 0 posted)
[2026-01-08T10:06:47.384Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T10:06:47.384Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
[2026-01-08T10:06:47.384Z] [BOT] ⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T10:06:47.384Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
[2026-01-08T10:06:47.385Z] [BOT] ⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
[2026-01-08T10:06:47.385Z] [BOT] ⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
[2026-01-08T10:06:47.385Z] [BOT] ⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
[2026-01-08T10:06:47.385Z] [BOT] ⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
[2026-01-08T10:06:47.385Z] [BOT] ⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
[2026-01-08T10:06:47.385Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
[2026-01-08T10:06:47.386Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-08T10:06:47.386Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
[2026-01-08T10:06:47.386Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
[2026-01-08T10:06:47.386Z] [BOT] ⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
[2026-01-08T10:06:47.386Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
[2026-01-08T10:06:47.386Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
[2026-01-08T10:06:47.386Z] [BOT] ⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
[2026-01-08T10:06:47.387Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
[2026-01-08T10:06:47.387Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ed66d9b6-intelligence_jr2025489368 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Artificial Intelligence at The Boeing Company
[2026-01-08T10:06:47.387Z] [BOT] ⏭️  Skipping duplicate: JID_6730b1ec (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Yext
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-08T10:06:47.399Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*