# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T21:38:58.032Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T21:38:45.953Z] ========================================
[2026-01-07T21:38:45.955Z] Discord Bot Execution Log
[2026-01-07T21:38:45.955Z] Environment: GitHub Actions
[2026-01-07T21:38:45.955Z] Node Version: v20.19.6
[2026-01-07T21:38:45.955Z] ========================================
[2026-01-07T21:38:45.955Z] Environment Variables Check:
[2026-01-07T21:38:45.955Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T21:38:45.955Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T21:38:45.956Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T21:38:45.956Z] 
Multi-Channel Configuration:
[2026-01-07T21:38:45.956Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.956Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T21:38:45.957Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T21:38:45.957Z] 
Data Files Check:
[2026-01-07T21:38:45.958Z] .github/data/new_jobs.json: ✅ Exists (10 items, 133253 bytes)
[2026-01-07T21:38:45.964Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 734530 bytes)
[2026-01-07T21:38:45.964Z] 
========================================
[2026-01-07T21:38:45.964Z] Starting Enhanced Discord Bot...
[2026-01-07T21:38:45.964Z] ========================================
[2026-01-07T21:38:46.513Z] [BOT] ✅ Loaded V2 database: 1431 jobs
[2026-01-07T21:38:48.618Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T21:38:48.619Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T21:38:48.619Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T21:38:48.623Z] [BOT] ✅ Loaded pending queue: 106 total (86 pending, 20 enriched, 0 posted)
[2026-01-07T21:38:48.623Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Backend Engineer II - Minesweeper - Personalization at spotify
[2026-01-07T21:38:48.625Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-07T21:38:48.625Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-07T21:38:48.625Z] [BOT] ⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
[2026-01-07T21:38:48.625Z] [BOT] ⏭️ Skipping already posted: ROLE_cb46b66c at vercel
⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
[2026-01-07T21:38:48.625Z] [BOT] ⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
[2026-01-07T21:38:48.626Z] [BOT] ⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-07T21:38:48.626Z] [BOT] ⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
[2026-01-07T21:38:48.626Z] [BOT] ⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T21:38:48.626Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
[2026-01-07T21:38:48.626Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T21:38:48.626Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T21:38:48.626Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
[2026-01-07T21:38:48.627Z] [BOT] ⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
⏭️ Skipping already posted: GIS Analyst 1 at McAdams
[2026-01-07T21:38:48.627Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
[2026-01-07T21:38:48.627Z] [BOT] ⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
[2026-01-07T21:38:48.627Z] [BOT] ⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
[2026-01-07T21:38:48.627Z] [BOT] ⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at RTX
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-07T21:38:48.627Z] [BOT] ⏭️  Skipping duplicate: JID_5580450a (posted within 7 days)
⏭️ Skipping already posted: Sr. Sales Operations and Strategy Analyst at samsara
[2026-01-07T21:38:48.627Z] [BOT] ⏭️  Skipping duplicate: JID_44d2fe30-automation_r25044896-1 (posted within 7 days)
⏭️ Skipping already posted: Product Analyst-Gen AI Automation at United Parcel Service (UPS)
📬 Found 1 new jobs (19 already posted)...
[2026-01-07T21:38:48.628Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-07T21:38:48.628Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-07T21:38:48.628Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T21:38:48.629Z] [BOT] 📌 Posting 1 jobs to #🤖・ai-jobs
[2026-01-07T21:38:48.631Z] [BOT] 📍 [ROUTING] "Backend Engineer II - Minesweeper - Personalization" @ spotify
[2026-01-07T21:38:48.631Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-07T21:38:48.636Z] [BOT ERROR] (node:3031) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T21:38:48.875Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer II - Minesweeper - Personalization @ spotify in #🤖・ai-jobs
  ✅ Industry: Backend Engineer II - Minesweeper - Personalization @ spotify
[2026-01-07T21:38:50.582Z] [BOT] ✅ Created forum post: 🏢 Backend Engineer II - Minesweeper - Personalization @ spotify in #🗽・new-york
[2026-01-07T21:38:50.583Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-07T21:38:52.084Z] [BOT] 💾 Marked as posted: Backend Engineer II - Minesweeper - Personalization @ spotify (instance #1)
[2026-01-07T21:38:52.085Z] [BOT] 💾 BEFORE ARCHIVING: 1432 jobs in database
[2026-01-07T21:38:52.086Z] [BOT] ✅ No jobs to archive (all 1432 jobs within 7-day window)
[2026-01-07T21:38:52.099Z] [BOT] 💾 Saved posted_jobs.json: 1432 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T21:38:55.100Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-07T21:38:55.101Z] [BOT] ⏭️  Skipping duplicate: JID_4ae3099a (posted within 7 days)
[2026-01-07T21:38:55.106Z] [BOT] ✅ Loaded pending queue: 106 total (86 pending, 20 enriched, 0 posted)
[2026-01-07T21:38:55.114Z] [BOT] ✅ Saved pending queue: 106 total (86 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-07T21:38:55.114Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-07T21:38:55.169Z] [BOT] 📂 Loaded 2368 existing routing entries
[2026-01-07T21:38:55.225Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2369
   Timestamp: 2026-01-07T21:38:55.215Z
[2026-01-07T21:38:55.229Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
   Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #🤖・ai-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-07T21:38:57.240Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3031) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*