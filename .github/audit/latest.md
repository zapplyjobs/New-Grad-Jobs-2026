# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T23:51:05.413Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T23:51:03.765Z] ========================================
[2026-01-07T23:51:03.766Z] Discord Bot Execution Log
[2026-01-07T23:51:03.767Z] Environment: GitHub Actions
[2026-01-07T23:51:03.767Z] Node Version: v20.19.6
[2026-01-07T23:51:03.767Z] ========================================
[2026-01-07T23:51:03.767Z] Environment Variables Check:
[2026-01-07T23:51:03.767Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T23:51:03.767Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.767Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T23:51:03.767Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T23:51:03.767Z] 
Multi-Channel Configuration:
[2026-01-07T23:51:03.767Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T23:51:03.768Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T23:51:03.768Z] 
Data Files Check:
[2026-01-07T23:51:03.769Z] .github/data/new_jobs.json: ✅ Exists (10 items, 138235 bytes)
[2026-01-07T23:51:03.775Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 736958 bytes)
[2026-01-07T23:51:03.775Z] 
========================================
[2026-01-07T23:51:03.775Z] Starting Enhanced Discord Bot...
[2026-01-07T23:51:03.775Z] ========================================
[2026-01-07T23:51:04.287Z] [BOT] ✅ Loaded V2 database: 1436 jobs
[2026-01-07T23:51:04.799Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T23:51:04.800Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T23:51:04.800Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T23:51:04.807Z] [BOT] ✅ Loaded pending queue: 110 total (90 pending, 20 enriched, 0 posted)
[2026-01-07T23:51:04.807Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-07T23:51:04.808Z] [BOT] [BOT] 🔍 Sample enriched job: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-07T23:51:04.808Z] [BOT] ⏭️  Skipping duplicate: JID_48e5e9bf (posted within 7 days)
[2026-01-07T23:51:04.808Z] [BOT] ⏭️ Skipping already posted: Sr. Field Marketing Manager (Federal / State) at verkada
[2026-01-07T23:51:04.809Z] [BOT] ⏭️  Skipping duplicate: JID_7d5ce5e4 (posted within 7 days)
⏭️ Skipping already posted: Senior Software Engineer in Test Prisma Access - AI Automation Engineer at Palo Alto Networks
[2026-01-07T23:51:04.809Z] [BOT] ⏭️  Skipping duplicate: JID_2179aa27 (posted within 7 days)
[2026-01-07T23:51:04.809Z] [BOT] ⏭️ Skipping already posted: Field Application Engineer – New College Graduate - Ncg at Sandisk
⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-07T23:51:04.809Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-07T23:51:04.809Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-07T23:51:04.810Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-07T23:51:04.810Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-07T23:51:04.810Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T23:51:04.810Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-07T23:51:04.810Z] [BOT] ⏭️  Skipping duplicate: JID_16d85b73 (posted within 7 days)
⏭️ Skipping already posted: Security GRC Specialist, Public Sector at anthropic
⏭️  Skipping duplicate: JID_bfdf3422 (posted within 7 days)
[2026-01-07T23:51:04.810Z] [BOT] ⏭️ Skipping already posted: ROLE_02666a39 at coinbase
⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
⏭️ Skipping already posted: ROLE_cb46b66c at vercel
[2026-01-07T23:51:04.810Z] [BOT] ⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
[2026-01-07T23:51:04.810Z] [BOT] ⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-07T23:51:04.811Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T23:51:04.811Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T23:51:04.822Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*