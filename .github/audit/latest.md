# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T19:51:10.718Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T19:51:00.246Z] ========================================
[2026-01-07T19:51:00.248Z] Discord Bot Execution Log
[2026-01-07T19:51:00.248Z] Environment: GitHub Actions
[2026-01-07T19:51:00.248Z] Node Version: v20.19.6
[2026-01-07T19:51:00.248Z] ========================================
[2026-01-07T19:51:00.248Z] Environment Variables Check:
[2026-01-07T19:51:00.248Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T19:51:00.248Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.248Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T19:51:00.249Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T19:51:00.249Z] 
Multi-Channel Configuration:
[2026-01-07T19:51:00.249Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T19:51:00.249Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T19:51:00.249Z] 
Data Files Check:
[2026-01-07T19:51:00.251Z] .github/data/new_jobs.json: ✅ Exists (10 items, 94841 bytes)
[2026-01-07T19:51:00.256Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 733274 bytes)
[2026-01-07T19:51:00.256Z] 
========================================
[2026-01-07T19:51:00.256Z] Starting Enhanced Discord Bot...
[2026-01-07T19:51:00.256Z] ========================================
[2026-01-07T19:51:00.782Z] [BOT] ✅ Loaded V2 database: 1428 jobs
[2026-01-07T19:51:01.400Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T19:51:01.401Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T19:51:01.401Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T19:51:01.408Z] [BOT] ✅ Loaded pending queue: 103 total (83 pending, 20 enriched, 0 posted)
[2026-01-07T19:51:01.408Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Startups Solutions Architect, Applied AI at anthropic
[2026-01-07T19:51:01.409Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
[2026-01-07T19:51:01.409Z] [BOT] ⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-07T19:51:01.410Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T19:51:01.410Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
[2026-01-07T19:51:01.410Z] [BOT] ⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T19:51:01.410Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T19:51:01.410Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T19:51:01.411Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
⏭️  Skipping duplicate: JID_862b5997 (posted within 7 days)
⏭️ Skipping already posted: GM, Surfaces Personalization at spotify
[2026-01-07T19:51:01.412Z] [BOT] ⏭️  Skipping duplicate: JID_55434006 (posted within 7 days)
⏭️ Skipping already posted: Manager, Workplace Operations at samsara
[2026-01-07T19:51:01.412Z] [BOT] ⏭️  Skipping duplicate: JID_2ce63b5e (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder at Amazon
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T19:51:01.412Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T19:51:01.412Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T19:51:01.412Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T19:51:01.413Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-07T19:51:01.415Z] [BOT] 📍 [ROUTING] "Startups Solutions Architect, Applied AI" @ anthropic
[2026-01-07T19:51:01.415Z] [BOT] Category: AI (matched: "AI/ML")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-07T19:51:01.421Z] [BOT ERROR] (node:3104) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T19:51:01.606Z] [BOT] ✅ Created forum post: 🏢 Startups Solutions Architect, Applied AI @ anthropic in #🤖・ai-jobs
  ✅ Industry: Startups Solutions Architect, Applied AI @ anthropic
[2026-01-07T19:51:03.446Z] [BOT] ✅ Created forum post: 🏢 Startups Solutions Architect, Applied AI @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T19:51:04.946Z] [BOT] 💾 Marked as posted: Startups Solutions Architect, Applied AI @ anthropic (instance #1)
[2026-01-07T19:51:04.947Z] [BOT] 💾 BEFORE ARCHIVING: 1429 jobs in database
[2026-01-07T19:51:04.948Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-07T19:51:04.952Z] [BOT] 📦 Archived 1 jobs to 2025-12.json (1 total in archive)
[2026-01-07T19:51:04.953Z] [BOT] ✅ Archiving complete: 1 archived, 1428 active
[2026-01-07T19:51:04.963Z] [BOT] 💾 Saved posted_jobs.json: 1428 active jobs
[2026-01-07T19:51:04.963Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T19:51:07.963Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T19:51:07.963Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
[2026-01-07T19:51:07.967Z] [BOT] ✅ Loaded pending queue: 103 total (83 pending, 20 enriched, 0 posted)
[2026-01-07T19:51:07.974Z] [BOT] ✅ Saved pending queue: 103 total (83 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T19:51:07.975Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T19:51:08.025Z] [BOT] 📂 Loaded 2364 existing routing entries
[2026-01-07T19:51:08.083Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2365
[2026-01-07T19:51:08.083Z] [BOT] Timestamp: 2026-01-07T19:51:08.073Z
[2026-01-07T19:51:08.084Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 21
[2026-01-07T19:51:08.084Z] [BOT] Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-07T19:51:08.084Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-07T19:51:08.084Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-07T19:51:08.084Z] [BOT] 1. #🤖・ai-jobs: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-07T19:51:08.084Z] [BOT] [STATS] Channel stats saved
[2026-01-07T19:51:10.094Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3104) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*