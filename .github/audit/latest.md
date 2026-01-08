# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T16:07:36.648Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-08T16:07:32.834Z] ========================================
[2026-01-08T16:07:32.836Z] Discord Bot Execution Log
[2026-01-08T16:07:32.836Z] Environment: GitHub Actions
[2026-01-08T16:07:32.836Z] Node Version: v20.19.6
[2026-01-08T16:07:32.836Z] ========================================
[2026-01-08T16:07:32.836Z] Environment Variables Check:
[2026-01-08T16:07:32.836Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T16:07:32.836Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.836Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T16:07:32.836Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T16:07:32.837Z] 
Multi-Channel Configuration:
[2026-01-08T16:07:32.837Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T16:07:32.837Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T16:07:32.837Z] 
Data Files Check:
[2026-01-08T16:07:32.839Z] .github/data/new_jobs.json: ✅ Exists (10 items, 167291 bytes)
[2026-01-08T16:07:32.844Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 754135 bytes)
[2026-01-08T16:07:32.844Z] 
========================================
[2026-01-08T16:07:32.844Z] Starting Enhanced Discord Bot...
[2026-01-08T16:07:32.844Z] ========================================
[2026-01-08T16:07:33.373Z] [BOT] ✅ Loaded V2 database: 1465 jobs
[2026-01-08T16:07:35.318Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T16:07:35.318Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T16:07:35.318Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T16:07:35.326Z] [BOT] ✅ Loaded pending queue: 154 total (134 pending, 20 enriched, 0 posted)
[2026-01-08T16:07:35.327Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T16:07:35.327Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
[2026-01-08T16:07:35.327Z] [BOT] ⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T16:07:35.327Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T16:07:35.328Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T16:07:35.328Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T16:07:35.328Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T16:07:35.328Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T16:07:35.328Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T16:07:35.329Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T16:07:35.329Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T16:07:35.329Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
[2026-01-08T16:07:35.329Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T16:07:35.329Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_aeb89c5c-developer_r260376 (posted within 7 days)
[2026-01-08T16:07:35.329Z] [BOT] ⏭️ Skipping already posted: ROLE_4a3a3618 at Uline
⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
[2026-01-08T16:07:35.330Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
[2026-01-08T16:07:35.330Z] [BOT] ⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T16:07:35.330Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
[2026-01-08T16:07:35.330Z] [BOT] ⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
[2026-01-08T16:07:35.330Z] [BOT] ⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
[2026-01-08T16:07:35.330Z] [BOT] ⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-08T16:07:35.341Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*