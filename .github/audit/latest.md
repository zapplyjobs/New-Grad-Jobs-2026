# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T21:06:14.629Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-08T21:06:12.561Z] ========================================
[2026-01-08T21:06:12.563Z] Discord Bot Execution Log
[2026-01-08T21:06:12.563Z] Environment: GitHub Actions
[2026-01-08T21:06:12.563Z] Node Version: v20.19.6
[2026-01-08T21:06:12.563Z] ========================================
[2026-01-08T21:06:12.563Z] Environment Variables Check:
[2026-01-08T21:06:12.563Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T21:06:12.563Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.563Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T21:06:12.563Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T21:06:12.563Z] 
Multi-Channel Configuration:
[2026-01-08T21:06:12.563Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T21:06:12.564Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T21:06:12.564Z] 
Data Files Check:
[2026-01-08T21:06:12.565Z] .github/data/new_jobs.json: ✅ Exists (10 items, 142496 bytes)
[2026-01-08T21:06:12.571Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758051 bytes)
[2026-01-08T21:06:12.571Z] 
========================================
[2026-01-08T21:06:12.571Z] Starting Enhanced Discord Bot...
[2026-01-08T21:06:12.571Z] ========================================
[2026-01-08T21:06:13.095Z] [BOT] ✅ Loaded V2 database: 1475 jobs
[2026-01-08T21:06:13.734Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T21:06:13.735Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T21:06:13.735Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T21:06:13.744Z] [BOT] ✅ Loaded pending queue: 173 total (153 pending, 20 enriched, 0 posted)
[2026-01-08T21:06:13.744Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Product Engineer, Applied AI at anthropic
[2026-01-08T21:06:13.745Z] [BOT] ⏭️  Skipping duplicate: JID_3a542063 (posted within 7 days)
[2026-01-08T21:06:13.745Z] [BOT] ⏭️ Skipping already posted: Product Engineer, Applied AI at anthropic
[2026-01-08T21:06:13.745Z] [BOT] ⏭️  Skipping duplicate: JID_ed07b0ef (posted within 7 days)
[2026-01-08T21:06:13.745Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Platform at anthropic
⏭️  Skipping duplicate: JID_69b12995 (posted within 7 days)
[2026-01-08T21:06:13.745Z] [BOT] ⏭️ Skipping already posted: Engineering Manager, UI Claude Consumer Products at anthropic
[2026-01-08T21:06:13.746Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
⏭️ Skipping already posted: Senior Field Marketing Manager (Federal / State) at verkada
[2026-01-08T21:06:13.746Z] [BOT] ⏭️  Skipping duplicate: JID_25ce8f4c-i_r-48235 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BlueCross BlueShield of Tennessee
⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378333-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T21:06:13.746Z] [BOT] ⏭️  Skipping duplicate: JID_aefd9cd9-engineer_r-2378344-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2eb59940 at Walmart
[2026-01-08T21:06:13.746Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T21:06:13.746Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T21:06:13.746Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-08T21:06:13.746Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T21:06:13.747Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T21:06:13.747Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T21:06:13.747Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T21:06:13.747Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T21:06:13.747Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_74a89105 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (LATAM - Spanish Speaking) at datadog
[2026-01-08T21:06:13.747Z] [BOT] ⏭️  Skipping duplicate: JID_a7381fab-science_2024014 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant - Csd - School of Computer Science at Carnegie Mellon University
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-08T21:06:13.759Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*