# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T19:00:21.642Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T19:00:11.081Z] ========================================
[2026-01-07T19:00:11.083Z] Discord Bot Execution Log
[2026-01-07T19:00:11.083Z] Environment: GitHub Actions
[2026-01-07T19:00:11.083Z] Node Version: v20.19.6
[2026-01-07T19:00:11.083Z] ========================================
[2026-01-07T19:00:11.083Z] Environment Variables Check:
[2026-01-07T19:00:11.083Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T19:00:11.083Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.083Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T19:00:11.083Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T19:00:11.083Z] 
Multi-Channel Configuration:
[2026-01-07T19:00:11.084Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T19:00:11.084Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T19:00:11.084Z] 
Data Files Check:
[2026-01-07T19:00:11.085Z] .github/data/new_jobs.json: ✅ Exists (10 items, 63555 bytes)
[2026-01-07T19:00:11.091Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 732770 bytes)
[2026-01-07T19:00:11.091Z] 
========================================
[2026-01-07T19:00:11.091Z] Starting Enhanced Discord Bot...
[2026-01-07T19:00:11.091Z] ========================================
[2026-01-07T19:00:11.611Z] [BOT] ✅ Loaded V2 database: 1427 jobs
[2026-01-07T19:00:12.140Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T19:00:12.140Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T19:00:12.140Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T19:00:12.147Z] [BOT] ✅ Loaded pending queue: 101 total (81 pending, 20 enriched, 0 posted)
[2026-01-07T19:00:12.148Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T19:00:12.149Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
[2026-01-07T19:00:12.149Z] [BOT] ⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T19:00:12.149Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
[2026-01-07T19:00:12.149Z] [BOT] ⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
[2026-01-07T19:00:12.149Z] [BOT] ⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T19:00:12.150Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
[2026-01-07T19:00:12.150Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
[2026-01-07T19:00:12.150Z] [BOT] ⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
[2026-01-07T19:00:12.150Z] [BOT] ⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
[2026-01-07T19:00:12.150Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
[2026-01-07T19:00:12.150Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T19:00:12.151Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T19:00:12.151Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T19:00:12.151Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T19:00:12.151Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
[2026-01-07T19:00:12.151Z] [BOT] ⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T19:00:12.151Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
⏭️  Skipping duplicate: JID_87238842-chemist_2533379-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9ce7e10a at KLA Corporation
[2026-01-07T19:00:12.151Z] [BOT] ⏭️  Skipping duplicate: JID_3d2850bb (posted within 7 days)
⏭️ Skipping already posted: Senior Security Compliance Specialist (DoD) at cloudflare
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T19:00:12.151Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T19:00:12.151Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T19:00:12.152Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T19:00:12.152Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T19:00:12.155Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-07T19:00:12.156Z] [BOT] 📍 [ROUTING] "Strategic Program Manager, Contingent Workforce" @ figma
[2026-01-07T19:00:12.156Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-07T19:00:12.162Z] [BOT ERROR] (node:3323) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T19:00:12.319Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager, Contingent Workforce @ figma in #📊・JID_9910249a
  ✅ Industry: Strategic Program Manager, Contingent Workforce @ figma
[2026-01-07T19:00:14.244Z] [BOT] ✅ Created forum post: 🏢 Strategic Program Manager, Contingent Workforce @ figma in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T19:00:15.746Z] [BOT] 💾 Marked as posted: Strategic Program Manager, Contingent Workforce @ figma (instance #1)
[2026-01-07T19:00:15.746Z] [BOT] 💾 BEFORE ARCHIVING: 1428 jobs in database
[2026-01-07T19:00:15.748Z] [BOT] ✅ No jobs to archive (all 1428 jobs within 7-day window)
[2026-01-07T19:00:15.762Z] [BOT] 💾 Saved posted_jobs.json: 1428 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T19:00:18.763Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T19:00:18.763Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
[2026-01-07T19:00:18.768Z] [BOT] ✅ Loaded pending queue: 101 total (81 pending, 20 enriched, 0 posted)
[2026-01-07T19:00:18.775Z] [BOT] ✅ Saved pending queue: 101 total (81 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T19:00:18.829Z] [BOT] 📂 Loaded 2363 existing routing entries
[2026-01-07T19:00:18.889Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2364
[2026-01-07T19:00:18.890Z] [BOT] Timestamp: 2026-01-07T19:00:18.879Z
[2026-01-07T19:00:18.890Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T19:00:18.890Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T19:00:18.890Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #📊・JID_9910249a: 1 posts
[2026-01-07T19:00:18.891Z] [BOT] 2. #🌉・san-francisco: 1 posts
[2026-01-07T19:00:18.891Z] [BOT] [STATS] Channel stats saved
[2026-01-07T19:00:20.902Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3323) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*