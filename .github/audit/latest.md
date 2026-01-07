# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T22:52:24.659Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T22:52:22.623Z] ========================================
[2026-01-07T22:52:22.625Z] Discord Bot Execution Log
[2026-01-07T22:52:22.625Z] Environment: GitHub Actions
[2026-01-07T22:52:22.625Z] Node Version: v20.19.6
[2026-01-07T22:52:22.625Z] ========================================
[2026-01-07T22:52:22.625Z] Environment Variables Check:
[2026-01-07T22:52:22.625Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T22:52:22.625Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.625Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T22:52:22.625Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T22:52:22.626Z] 
Multi-Channel Configuration:
[2026-01-07T22:52:22.626Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T22:52:22.626Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T22:52:22.626Z] 
Data Files Check:
[2026-01-07T22:52:22.628Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163180 bytes)
[2026-01-07T22:52:22.633Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 736551 bytes)
[2026-01-07T22:52:22.633Z] 
========================================
[2026-01-07T22:52:22.633Z] Starting Enhanced Discord Bot...
[2026-01-07T22:52:22.633Z] ========================================
[2026-01-07T22:52:23.153Z] [BOT] ✅ Loaded V2 database: 1435 jobs
[2026-01-07T22:52:23.771Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T22:52:23.772Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T22:52:23.772Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T22:52:23.780Z] [BOT] ✅ Loaded pending queue: 108 total (88 pending, 20 enriched, 0 posted)
[2026-01-07T22:52:23.780Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Enterprise Sales Executive  at datadog
[2026-01-07T22:52:23.781Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-07T22:52:23.781Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-07T22:52:23.781Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-07T22:52:23.781Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-07T22:52:23.782Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_16d85b73 (posted within 7 days)
⏭️ Skipping already posted: Security GRC Specialist, Public Sector at anthropic
[2026-01-07T22:52:23.783Z] [BOT] ⏭️  Skipping duplicate: JID_bfdf3422 (posted within 7 days)
⏭️ Skipping already posted: ROLE_02666a39 at coinbase
⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
⏭️ Skipping already posted: ROLE_cb46b66c at vercel
⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-07T22:52:23.783Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-07T22:52:23.783Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T22:52:23.783Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T22:52:23.783Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
[2026-01-07T22:52:23.783Z] [BOT] ⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T22:52:23.783Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T22:52:23.795Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*