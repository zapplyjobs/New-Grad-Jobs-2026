# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T20:06:33.812Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T20:06:23.233Z] ========================================
[2026-01-07T20:06:23.235Z] Discord Bot Execution Log
[2026-01-07T20:06:23.235Z] Environment: GitHub Actions
[2026-01-07T20:06:23.235Z] Node Version: v20.19.6
[2026-01-07T20:06:23.235Z] ========================================
[2026-01-07T20:06:23.235Z] Environment Variables Check:
[2026-01-07T20:06:23.235Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T20:06:23.235Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T20:06:23.236Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T20:06:23.236Z] 
Multi-Channel Configuration:
[2026-01-07T20:06:23.236Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T20:06:23.236Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T20:06:23.237Z] 
Data Files Check:
[2026-01-07T20:06:23.237Z] .github/data/new_jobs.json: ✅ Exists (10 items, 107647 bytes)
[2026-01-07T20:06:23.243Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 733080 bytes)
[2026-01-07T20:06:23.243Z] 
========================================
[2026-01-07T20:06:23.243Z] Starting Enhanced Discord Bot...
[2026-01-07T20:06:23.243Z] ========================================
[2026-01-07T20:06:23.761Z] [BOT] ✅ Loaded V2 database: 1428 jobs
[2026-01-07T20:06:24.396Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T20:06:24.396Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T20:06:24.396Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T20:06:24.404Z] [BOT] ✅ Loaded pending queue: 104 total (84 pending, 20 enriched, 0 posted)
[2026-01-07T20:06:24.405Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Sales Development Representative - Summer 2026 Graduates (Boston) at datadog
[2026-01-07T20:06:24.406Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
[2026-01-07T20:06:24.406Z] [BOT] ⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-07T20:06:24.406Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-07T20:06:24.406Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
[2026-01-07T20:06:24.407Z] [BOT] ⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T20:06:24.407Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T20:06:24.407Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
[2026-01-07T20:06:24.407Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T20:06:24.407Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T20:06:24.408Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
[2026-01-07T20:06:24.408Z] [BOT] ⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
[2026-01-07T20:06:24.408Z] [BOT] ⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
[2026-01-07T20:06:24.408Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T20:06:24.408Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
[2026-01-07T20:06:24.409Z] [BOT] ⏭️ Skipping already posted: Business Systems Analyst - International at Uline
⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T20:06:24.409Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-07T20:06:24.409Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T20:06:24.410Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T20:06:24.410Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T20:06:24.412Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-07T20:06:24.413Z] [BOT] 📍 [ROUTING] "Sales Development Representative - Summer 2026 Graduates (Boston)" @ datadog
[2026-01-07T20:06:24.413Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-07T20:06:24.418Z] [BOT ERROR] (node:3188) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T20:06:24.677Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative - Summer 2026 Graduates (Boston) @ datadog in #💲・sales-jobs
[2026-01-07T20:06:24.677Z] [BOT] ✅ Industry: Sales Development Representative - Summer 2026 Graduates (Boston) @ datadog
[2026-01-07T20:06:26.400Z] [BOT] ✅ Created forum post: 🏢 Sales Development Representative - Summer 2026 Graduates (Boston) @ datadog in #🚌・boston
  ✅ Location: 🚌・boston
[2026-01-07T20:06:27.901Z] [BOT] 💾 Marked as posted: Sales Development Representative - Summer 2026 Graduates (Boston) @ datadog (instance #1)
[2026-01-07T20:06:27.901Z] [BOT] 💾 BEFORE ARCHIVING: 1429 jobs in database
[2026-01-07T20:06:27.902Z] [BOT] ✅ No jobs to archive (all 1429 jobs within 7-day window)
[2026-01-07T20:06:27.917Z] [BOT] 💾 Saved posted_jobs.json: 1429 active jobs
[2026-01-07T20:06:27.917Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T20:06:30.917Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T20:06:30.918Z] [BOT] ⏭️  Skipping duplicate: JID_fb42bc59 (posted within 7 days)
[2026-01-07T20:06:30.922Z] [BOT] ✅ Loaded pending queue: 104 total (84 pending, 20 enriched, 0 posted)
[2026-01-07T20:06:30.929Z] [BOT] ✅ Saved pending queue: 104 total (84 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T20:06:30.929Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T20:06:30.981Z] [BOT] 📂 Loaded 2365 existing routing entries
[2026-01-07T20:06:31.039Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-07T20:06:31.039Z] [BOT] Total entries: 2366
   Timestamp: 2026-01-07T20:06:31.029Z
[2026-01-07T20:06:31.039Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T20:06:31.039Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T20:06:31.040Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🚌・boston: 1 posts
[2026-01-07T20:06:31.040Z] [BOT] [STATS] Channel stats saved
[2026-01-07T20:06:33.051Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3188) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*