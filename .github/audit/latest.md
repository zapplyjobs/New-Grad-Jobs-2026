# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T17:55:50.994Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-08T17:55:49.269Z] ========================================
[2026-01-08T17:55:49.271Z] Discord Bot Execution Log
[2026-01-08T17:55:49.271Z] Environment: GitHub Actions
[2026-01-08T17:55:49.271Z] Node Version: v20.19.6
[2026-01-08T17:55:49.271Z] ========================================
[2026-01-08T17:55:49.271Z] Environment Variables Check:
[2026-01-08T17:55:49.271Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T17:55:49.271Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.271Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T17:55:49.271Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T17:55:49.271Z] 
Multi-Channel Configuration:
[2026-01-08T17:55:49.271Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T17:55:49.272Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T17:55:49.272Z] 
Data Files Check:
[2026-01-08T17:55:49.273Z] .github/data/new_jobs.json: ✅ Exists (10 items, 152109 bytes)
[2026-01-08T17:55:49.279Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 756902 bytes)
[2026-01-08T17:55:49.279Z] 
========================================
[2026-01-08T17:55:49.279Z] Starting Enhanced Discord Bot...
[2026-01-08T17:55:49.279Z] ========================================
[2026-01-08T17:55:49.801Z] [BOT] ✅ Loaded V2 database: 1472 jobs
[2026-01-08T17:55:50.327Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T17:55:50.327Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T17:55:50.327Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T17:55:50.336Z] [BOT] ✅ Loaded pending queue: 163 total (143 pending, 20 enriched, 0 posted)
[2026-01-08T17:55:50.336Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startups Solutions Architect, Applied AI at anthropic
[2026-01-08T17:55:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
[2026-01-08T17:55:50.337Z] [BOT] ⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-08T17:55:50.337Z] [BOT] ⏭️  Skipping duplicate: JID_6e47819d (posted within 7 days)
[2026-01-08T17:55:50.337Z] [BOT] ⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_b787de31 (posted within 7 days)
[2026-01-08T17:55:50.338Z] [BOT] ⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_543d933c (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_9d3cd40a (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
[2026-01-08T17:55:50.338Z] [BOT] ⏭️  Skipping duplicate: JID_e7506224 (posted within 7 days)
⏭️ Skipping already posted: Manager, Customer Success at brex
⏭️  Skipping duplicate: JID_8a0f0600 (posted within 7 days)
⏭️ Skipping already posted: Finance Systems, Finance & Strategy Lead at anthropic
⏭️  Skipping duplicate: JID_8c1479dc (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T17:55:50.338Z] [BOT] ⏭️  Skipping duplicate: JID_3cc1a2d7 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
[2026-01-08T17:55:50.338Z] [BOT] ⏭️  Skipping duplicate: JID_4c79ae31 (posted within 7 days)
⏭️ Skipping already posted: BizOps Lead, BD at brex
⏭️  Skipping duplicate: JID_b4d01207 (posted within 7 days)
⏭️ Skipping already posted:  BizOps Lead, BD at brex
[2026-01-08T17:55:50.339Z] [BOT] ⏭️  Skipping duplicate: JID_a3f17800-cx_1001-job-72536 (posted within 7 days)
⏭️ Skipping already posted: Specialist - Data Transfer - Integration & Quality at BNY
⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T17:55:50.339Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T17:55:50.339Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T17:55:50.339Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T17:55:50.339Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T17:55:50.339Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T17:55:50.339Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T17:55:50.339Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-08T17:55:50.339Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-08T17:55:50.351Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*