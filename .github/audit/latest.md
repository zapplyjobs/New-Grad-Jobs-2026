# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T21:51:57.482Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-08T21:51:54.945Z] ========================================
[2026-01-08T21:51:54.947Z] Discord Bot Execution Log
[2026-01-08T21:51:54.947Z] Environment: GitHub Actions
[2026-01-08T21:51:54.947Z] Node Version: v20.19.6
[2026-01-08T21:51:54.947Z] ========================================
[2026-01-08T21:51:54.947Z] Environment Variables Check:
[2026-01-08T21:51:54.947Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T21:51:54.947Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.947Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T21:51:54.947Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T21:51:54.947Z] 
Multi-Channel Configuration:
[2026-01-08T21:51:54.948Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T21:51:54.948Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T21:51:54.948Z] 
Data Files Check:
[2026-01-08T21:51:54.949Z] .github/data/new_jobs.json: ✅ Exists (10 items, 140166 bytes)
[2026-01-08T21:51:54.955Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758033 bytes)
[2026-01-08T21:51:54.955Z] 
========================================
[2026-01-08T21:51:54.955Z] Starting Enhanced Discord Bot...
[2026-01-08T21:51:54.955Z] ========================================
[2026-01-08T21:51:55.479Z] [BOT] ✅ Loaded V2 database: 1475 jobs
[2026-01-08T21:51:56.347Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T21:51:56.347Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T21:51:56.347Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T21:51:56.356Z] [BOT] ✅ Loaded pending queue: 176 total (156 pending, 20 enriched, 0 posted)
[2026-01-08T21:51:56.356Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-08T21:51:56.356Z] [BOT] [BOT] 🔍 Sample enriched job: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-08T21:51:56.357Z] [BOT] ⏭️  Skipping duplicate: JID_fdd2a894 (posted within 7 days)
[2026-01-08T21:51:56.357Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Boston (Spanish-speaking) at datadog
[2026-01-08T21:51:56.357Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_8cae02ce at anthropic
[2026-01-08T21:51:56.357Z] [BOT] ⏭️  Skipping duplicate: JID_b6886da8 (posted within 7 days)
[2026-01-08T21:51:56.358Z] [BOT] ⏭️ Skipping already posted: Data Operations, Product Partnerships at anthropic
⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
⏭️ Skipping already posted: Product Engineer, Applied AI at anthropic
[2026-01-08T21:51:56.358Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T21:51:56.358Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T21:51:56.358Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
[2026-01-08T21:51:56.358Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T21:51:56.358Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
[2026-01-08T21:51:56.359Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T21:51:56.359Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-08T21:51:56.359Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
[2026-01-08T21:51:56.359Z] [BOT] ⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-08T21:51:56.359Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T21:51:56.359Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T21:51:56.359Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T21:51:56.359Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T21:51:56.359Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
[2026-01-08T21:51:56.360Z] [BOT] ⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-08T21:51:56.371Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*