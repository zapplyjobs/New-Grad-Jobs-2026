# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T19:10:03.806Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 0
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ❌ No
## Sanitized Log Output
```
[2026-01-07T19:10:01.349Z] ========================================
[2026-01-07T19:10:01.351Z] Discord Bot Execution Log
[2026-01-07T19:10:01.351Z] Environment: GitHub Actions
[2026-01-07T19:10:01.351Z] Node Version: v20.19.6
[2026-01-07T19:10:01.351Z] ========================================
[2026-01-07T19:10:01.351Z] Environment Variables Check:
[2026-01-07T19:10:01.351Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T19:10:01.352Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T19:10:01.352Z] 
Multi-Channel Configuration:
[2026-01-07T19:10:01.352Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T19:10:01.352Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T19:10:01.352Z] 
Data Files Check:
[2026-01-07T19:10:01.353Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63555 bytes)
[2026-01-07T19:10:01.359Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 733274 bytes)
[2026-01-07T19:10:01.359Z] 
========================================
[2026-01-07T19:10:01.359Z] Starting Enhanced Discord Bot...
[2026-01-07T19:10:01.359Z] ========================================
[2026-01-07T19:10:01.814Z] [BOT] ✅ Loaded V2 database: 1428 jobs
[2026-01-07T19:10:02.723Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T19:10:02.723Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T19:10:02.723Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T19:10:02.731Z] [BOT] ✅ Loaded pending queue: 101 total (81 pending, 20 enriched, 0 posted)
[2026-01-07T19:10:02.731Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T19:10:02.732Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
[2026-01-07T19:10:02.732Z] [BOT] ⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T19:10:02.732Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
[2026-01-07T19:10:02.732Z] [BOT] ⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
[2026-01-07T19:10:02.732Z] [BOT] ⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
[2026-01-07T19:10:02.733Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
[2026-01-07T19:10:02.733Z] [BOT] ⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T19:10:02.733Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
[2026-01-07T19:10:02.733Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
[2026-01-07T19:10:02.733Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
[2026-01-07T19:10:02.733Z] [BOT] ⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
[2026-01-07T19:10:02.733Z] [BOT] ⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
[2026-01-07T19:10:02.734Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
[2026-01-07T19:10:02.734Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T19:10:02.734Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T19:10:02.734Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
[2026-01-07T19:10:02.734Z] [BOT] ⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T19:10:02.735Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T19:10:02.735Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
ℹ️ No new jobs to post - all jobs have been posted already
[2026-01-07T19:10:02.743Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*