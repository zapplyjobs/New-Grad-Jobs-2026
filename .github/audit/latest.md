# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T20:54:08.971Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T20:53:51.935Z] ========================================
[2026-01-07T20:53:51.937Z] Discord Bot Execution Log
[2026-01-07T20:53:51.937Z] Environment: GitHub Actions
[2026-01-07T20:53:51.937Z] Node Version: v20.19.6
[2026-01-07T20:53:51.937Z] ========================================
[2026-01-07T20:53:51.937Z] Environment Variables Check:
[2026-01-07T20:53:51.937Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T20:53:51.938Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T20:53:51.938Z] 
Multi-Channel Configuration:
[2026-01-07T20:53:51.938Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.938Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.939Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.939Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T20:53:51.939Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T20:53:51.939Z] 
Data Files Check:
[2026-01-07T20:53:51.940Z] .github/data/new_jobs.json: ✅ Exists (10 items, 141511 bytes)
[2026-01-07T20:53:51.946Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 733557 bytes)
[2026-01-07T20:53:51.946Z] 
========================================
[2026-01-07T20:53:51.946Z] Starting Enhanced Discord Bot...
[2026-01-07T20:53:51.946Z] ========================================
[2026-01-07T20:53:52.474Z] [BOT] ✅ Loaded V2 database: 1429 jobs
[2026-01-07T20:53:52.987Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T20:53:52.987Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T20:53:52.987Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T20:53:52.994Z] [BOT] ✅ Loaded pending queue: 105 total (85 pending, 20 enriched, 0 posted)
[2026-01-07T20:53:52.995Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-07T20:53:52.996Z] [BOT] ⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
[2026-01-07T20:53:52.996Z] [BOT] ⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-07T20:53:52.996Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
[2026-01-07T20:53:52.997Z] [BOT] ⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-07T20:53:52.997Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T20:53:52.997Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
[2026-01-07T20:53:52.997Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T20:53:52.997Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T20:53:52.997Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
[2026-01-07T20:53:52.997Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
[2026-01-07T20:53:52.997Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
[2026-01-07T20:53:52.998Z] [BOT] ⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
[2026-01-07T20:53:52.998Z] [BOT] ⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
[2026-01-07T20:53:52.998Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
[2026-01-07T20:53:52.998Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T20:53:52.998Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T20:53:52.998Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
[2026-01-07T20:53:52.998Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_cf9d4158-international_r260243-2 (posted within 7 days)
⏭️ Skipping already posted: Business Systems Analyst - International at Uline
📬 Found 2 new jobs (18 already posted)...
[2026-01-07T20:53:52.998Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-07T20:53:52.998Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-07T20:53:52.999Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-07T20:53:52.999Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T20:53:53.002Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-07T20:53:53.003Z] [BOT] 📍 [ROUTING] "Regional Manager, Sales Engineer - Key Accounts (East)" @ datadog
[2026-01-07T20:53:53.003Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-07T20:53:53.007Z] [BOT ERROR] (node:3024) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T20:53:53.144Z] [BOT] ✅ Created forum post: 🏢 Regional Manager, Sales Engineer - Key Accounts (East) @ datadog in #💲・sales-jobs
  ✅ Industry: Regional Manager, Sales Engineer - Key Accounts (East) @ datadog
[2026-01-07T20:53:55.085Z] [BOT] ✅ Created forum post: 🏢 Regional Manager, Sales Engineer - Key Accounts (East) @ datadog in #🗽・new-york
[2026-01-07T20:53:55.085Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-07T20:53:56.587Z] [BOT] 💾 Marked as posted: Regional Manager, Sales Engineer - Key Accounts (East) @ datadog (instance #1)
[2026-01-07T20:53:56.587Z] [BOT] 💾 BEFORE ARCHIVING: 1430 jobs in database
[2026-01-07T20:53:56.588Z] [BOT] ✅ No jobs to archive (all 1430 jobs within 7-day window)
[2026-01-07T20:53:56.598Z] [BOT] 💾 Saved posted_jobs.json: 1430 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T20:53:59.599Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-07T20:53:59.600Z] [BOT] 📍 [ROUTING] "Senior Solutions Engineer" @ vercel
   Category: TECH (matched: "engineer/engineering")
[2026-01-07T20:53:59.600Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-07T20:53:59.853Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Engineer @ vercel in #💻・tech-jobs
[2026-01-07T20:53:59.853Z] [BOT] ✅ Industry: Senior Solutions Engineer @ vercel
[2026-01-07T20:54:01.667Z] [BOT] ✅ Created forum post: 🏢 Senior Solutions Engineer @ vercel in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-07T20:54:03.168Z] [BOT] 💾 Marked as posted: Senior Solutions Engineer @ vercel (instance #1)
[2026-01-07T20:54:03.169Z] [BOT] 💾 BEFORE ARCHIVING: 1431 jobs in database
[2026-01-07T20:54:03.170Z] [BOT] ✅ No jobs to archive (all 1431 jobs within 7-day window)
[2026-01-07T20:54:03.180Z] [BOT] 💾 Saved posted_jobs.json: 1431 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T20:54:06.180Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-07T20:54:06.181Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-07T20:54:06.181Z] [BOT] ⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
[2026-01-07T20:54:06.185Z] [BOT] ✅ Loaded pending queue: 105 total (85 pending, 20 enriched, 0 posted)
[2026-01-07T20:54:06.194Z] [BOT] ✅ Saved pending queue: 105 total (85 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-07T20:54:06.194Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T20:54:06.254Z] [BOT] 📂 Loaded 2366 existing routing entries
[2026-01-07T20:54:06.311Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-07T20:54:06.312Z] [BOT] Total entries: 2368
   Timestamp: 2026-01-07T20:54:06.301Z
[2026-01-07T20:54:06.312Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-07T20:54:06.312Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T20:54:06.313Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
     1. #💲・sales-jobs: 1 posts
     2. #🗽・new-york: 1 posts
     3. #💻・tech-jobs: 1 posts
[2026-01-07T20:54:06.313Z] [BOT] 4. #🌉・san-francisco: 1 posts
[2026-01-07T20:54:06.313Z] [BOT] [STATS] Channel stats saved
[2026-01-07T20:54:08.326Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3024) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*