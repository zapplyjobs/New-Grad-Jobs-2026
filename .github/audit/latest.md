# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T19:52:10.674Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-08T19:52:08.132Z] ========================================
[2026-01-08T19:52:08.134Z] Discord Bot Execution Log
[2026-01-08T19:52:08.134Z] Environment: GitHub Actions
[2026-01-08T19:52:08.134Z] Node Version: v20.19.6
[2026-01-08T19:52:08.134Z] ========================================
[2026-01-08T19:52:08.134Z] Environment Variables Check:
[2026-01-08T19:52:08.134Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T19:52:08.134Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.134Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T19:52:08.135Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T19:52:08.135Z] 
Multi-Channel Configuration:
[2026-01-08T19:52:08.135Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T19:52:08.135Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T19:52:08.136Z] 
Data Files Check:
[2026-01-08T19:52:08.137Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139235 bytes)
[2026-01-08T19:52:08.144Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758819 bytes)
[2026-01-08T19:52:08.144Z] 
========================================
[2026-01-08T19:52:08.144Z] Starting Enhanced Discord Bot...
[2026-01-08T19:52:08.144Z] ========================================
[2026-01-08T19:52:08.676Z] [BOT] ✅ Loaded V2 database: 1476 jobs
[2026-01-08T19:52:09.326Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T19:52:09.326Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T19:52:09.327Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T19:52:09.335Z] [BOT] ✅ Loaded pending queue: 174 total (154 pending, 20 enriched, 0 posted)
[2026-01-08T19:52:09.335Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-08T19:52:09.336Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-08T19:52:09.336Z] [BOT] ⏭️ Skipping already posted: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-08T19:52:09.336Z] [BOT] ⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
[2026-01-08T19:52:09.336Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T19:52:09.337Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
[2026-01-08T19:52:09.337Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T19:52:09.337Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T19:52:09.337Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T19:52:09.337Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T19:52:09.337Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T19:52:09.338Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T19:52:09.338Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
[2026-01-08T19:52:09.338Z] [BOT] ⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T19:52:09.338Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T19:52:09.338Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T19:52:09.338Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T19:52:09.338Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T19:52:09.338Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
[2026-01-08T19:52:09.339Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
⏭️  Skipping duplicate: JID_a7381fab-science_2024014 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant - Csd - School of Computer Science at Carnegie Mellon University
⏭️  Skipping duplicate: JID_b76486ed-php_r5976 (posted within 7 days)
⏭️ Skipping already posted: Therapist-IOP/PHP at Rogers Behavioral Health
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-08T19:52:09.351Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*