# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T21:25:44.272Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T21:25:41.692Z] ========================================
[2026-01-07T21:25:41.694Z] Discord Bot Execution Log
[2026-01-07T21:25:41.694Z] Environment: GitHub Actions
[2026-01-07T21:25:41.694Z] Node Version: v20.19.6
[2026-01-07T21:25:41.694Z] ========================================
[2026-01-07T21:25:41.694Z] Environment Variables Check:
[2026-01-07T21:25:41.694Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T21:25:41.694Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.694Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T21:25:41.695Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T21:25:41.695Z] 
Multi-Channel Configuration:
[2026-01-07T21:25:41.695Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T21:25:41.695Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T21:25:41.696Z] 
Data Files Check:
[2026-01-07T21:25:41.697Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141511 bytes)
[2026-01-07T21:25:41.703Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 734530 bytes)
[2026-01-07T21:25:41.703Z] 
========================================
[2026-01-07T21:25:41.703Z] Starting Enhanced Discord Bot...
[2026-01-07T21:25:41.703Z] ========================================
[2026-01-07T21:25:42.245Z] [BOT] ✅ Loaded V2 database: 1431 jobs
[2026-01-07T21:25:42.895Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T21:25:42.896Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T21:25:42.896Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T21:25:42.903Z] [BOT] ✅ Loaded pending queue: 106 total (86 pending, 20 enriched, 0 posted)
[2026-01-07T21:25:42.903Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-07T21:25:42.904Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-07T21:25:42.904Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-07T21:25:42.904Z] [BOT] ⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
[2026-01-07T21:25:42.904Z] [BOT] ⏭️ Skipping already posted: ROLE_cb46b66c at vercel
⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
[2026-01-07T21:25:42.905Z] [BOT] ⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-07T21:25:42.905Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-07T21:25:42.905Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T21:25:42.905Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T21:25:42.905Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
[2026-01-07T21:25:42.905Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T21:25:42.906Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T21:25:42.906Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
[2026-01-07T21:25:42.906Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
[2026-01-07T21:25:42.906Z] [BOT] ⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T21:25:42.906Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T21:25:42.907Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T21:25:42.917Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*