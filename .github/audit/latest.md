# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T21:51:44.157Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T21:51:33.742Z] ========================================
[2026-01-07T21:51:33.744Z] Discord Bot Execution Log
[2026-01-07T21:51:33.744Z] Environment: GitHub Actions
[2026-01-07T21:51:33.744Z] Node Version: v20.19.6
[2026-01-07T21:51:33.744Z] ========================================
[2026-01-07T21:51:33.744Z] Environment Variables Check:
[2026-01-07T21:51:33.744Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T21:51:33.745Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T21:51:33.745Z] 
Multi-Channel Configuration:
[2026-01-07T21:51:33.745Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T21:51:33.745Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T21:51:33.746Z] 
Data Files Check:
[2026-01-07T21:51:33.747Z] .github/data/new_jobs.json: ✅ Exists (10 items, 147054 bytes)
[2026-01-07T21:51:33.752Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 735069 bytes)
[2026-01-07T21:51:33.752Z] 
========================================
[2026-01-07T21:51:33.752Z] Starting Enhanced Discord Bot...
[2026-01-07T21:51:33.752Z] ========================================
[2026-01-07T21:51:34.265Z] [BOT] ✅ Loaded V2 database: 1432 jobs
[2026-01-07T21:51:34.870Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T21:51:34.871Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T21:51:34.871Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T21:51:34.878Z] [BOT] ✅ Loaded pending queue: 107 total (87 pending, 20 enriched, 0 posted)
[2026-01-07T21:51:34.878Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-07T21:51:34.880Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-07T21:51:34.880Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-07T21:51:34.880Z] [BOT] ⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
[2026-01-07T21:51:34.880Z] [BOT] ⏭️ Skipping already posted: ROLE_cb46b66c at vercel
⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
[2026-01-07T21:51:34.880Z] [BOT] ⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-07T21:51:34.880Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-07T21:51:34.881Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T21:51:34.881Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T21:51:34.881Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T21:51:34.881Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
[2026-01-07T21:51:34.881Z] [BOT] ⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T21:51:34.881Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
[2026-01-07T21:51:34.881Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
[2026-01-07T21:51:34.881Z] [BOT] ⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
[2026-01-07T21:51:34.881Z] [BOT] ⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
[2026-01-07T21:51:34.881Z] [BOT] ⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
[2026-01-07T21:51:34.882Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T21:51:34.882Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T21:51:34.882Z] [BOT] 📬 Found 1 new jobs (19 already posted)...
[2026-01-07T21:51:34.882Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T21:51:34.882Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T21:51:34.883Z] [BOT] 📤 Posting 1 jobs...
[2026-01-07T21:51:34.883Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T21:51:34.885Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-07T21:51:34.887Z] [BOT] 📍 [ROUTING] "Senior Security Engineer - Threat Detection Engineering" @ datadog
[2026-01-07T21:51:34.887Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T21:51:34.892Z] [BOT ERROR] (node:2932) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T21:51:35.077Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer - Threat Detection Engineering @ datadog in #💻・tech-jobs
  ✅ Industry: Senior Security Engineer - Threat Detection Engineering @ datadog
[2026-01-07T21:51:36.859Z] [BOT] ✅ Created forum post: 🏢 Senior Security Engineer - Threat Detection Engineering @ datadog in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-07T21:51:38.361Z] [BOT] 💾 Marked as posted: Senior Security Engineer - Threat Detection Engineering @ datadog (instance #1)
[2026-01-07T21:51:38.361Z] [BOT] 💾 BEFORE ARCHIVING: 1433 jobs in database
[2026-01-07T21:51:38.362Z] [BOT] ✅ No jobs to archive (all 1433 jobs within 7-day window)
[2026-01-07T21:51:38.372Z] [BOT] 💾 Saved posted_jobs.json: 1433 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T21:51:41.373Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T21:51:41.374Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-07T21:51:41.378Z] [BOT] ✅ Loaded pending queue: 107 total (87 pending, 20 enriched, 0 posted)
[2026-01-07T21:51:41.386Z] [BOT] ✅ Saved pending queue: 107 total (87 pending, 19 enriched, 1 posted)
[2026-01-07T21:51:41.386Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T21:51:41.438Z] [BOT] 📂 Loaded 2369 existing routing entries
[2026-01-07T21:51:41.495Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-07T21:51:41.495Z] [BOT] Total entries: 2370
   Timestamp: 2026-01-07T21:51:41.485Z
[2026-01-07T21:51:41.495Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T21:51:41.495Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T21:51:41.496Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
[2026-01-07T21:51:41.496Z] [BOT] 2. #🗽・new-york: 1 posts
[2026-01-07T21:51:41.496Z] [BOT] [STATS] Channel stats saved
[2026-01-07T21:51:43.508Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2932) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*