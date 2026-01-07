# Discord Bot Execution Audit
**Timestamp:** 2026-01-07T22:06:32.184Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-07T22:06:17.482Z] ========================================
[2026-01-07T22:06:17.484Z] Discord Bot Execution Log
[2026-01-07T22:06:17.484Z] Environment: GitHub Actions
[2026-01-07T22:06:17.484Z] Node Version: v20.19.6
[2026-01-07T22:06:17.484Z] ========================================
[2026-01-07T22:06:17.484Z] Environment Variables Check:
[2026-01-07T22:06:17.484Z] DISCORD_TOKEN: ✅ Set
[2026-01-07T22:06:17.484Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.484Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-07T22:06:17.485Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-07T22:06:17.485Z] 
Multi-Channel Configuration:
[2026-01-07T22:06:17.485Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-07T22:06:17.485Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-07T22:06:17.485Z] 
Data Files Check:
[2026-01-07T22:06:17.487Z] .github/data/new_jobs.json: ✅ Exists (10 items, 178996 bytes)
[2026-01-07T22:06:17.492Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 735563 bytes)
[2026-01-07T22:06:17.492Z] 
========================================
[2026-01-07T22:06:17.492Z] Starting Enhanced Discord Bot...
[2026-01-07T22:06:17.492Z] ========================================
[2026-01-07T22:06:18.015Z] [BOT] ✅ Loaded V2 database: 1433 jobs
[2026-01-07T22:06:18.568Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-07T22:06:18.568Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-07T22:06:18.569Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-07T22:06:18.573Z] [BOT] ✅ Loaded pending queue: 109 total (89 pending, 20 enriched, 0 posted)
[2026-01-07T22:06:18.573Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-07T22:06:18.574Z] [BOT] [BOT] 🔍 Sample enriched job: Security GRC Specialist, Public Sector at anthropic
[2026-01-07T22:06:18.575Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-07T22:06:18.575Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-07T22:06:18.575Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_b0371cb8 (posted within 7 days)
[2026-01-07T22:06:18.575Z] [BOT] ⏭️ Skipping already posted: ROLE_cb46b66c at vercel
[2026-01-07T22:06:18.576Z] [BOT] ⏭️  Skipping duplicate: JID_7ed7fe99 (posted within 7 days)
⏭️ Skipping already posted: ROLE_593bd0fe at anthropic
⏭️  Skipping duplicate: JID_8583c025 (posted within 7 days)
⏭️ Skipping already posted: Startups Solutions Architect, Applied AI at anthropic
[2026-01-07T22:06:18.576Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_2ba6f373 (posted within 7 days)
[2026-01-07T22:06:18.576Z] [BOT] ⏭️ Skipping already posted: Strategic Program Manager, Contingent Workforce at figma
⏭️  Skipping duplicate: JID_0eb0c59d-specialist_jr54578 (posted within 7 days)
[2026-01-07T22:06:18.576Z] [BOT] ⏭️ Skipping already posted: ROLE_80b579fc at Oklahoma State Government
[2026-01-07T22:06:18.576Z] [BOT] ⏭️  Skipping duplicate: JID_28954219-psu_staff-JID_6e944352-geosci_req_0000074720-1 (posted within 7 days)
⏭️ Skipping already posted: Research Assistant in Geomorphology-GEOSCI at PennState University
[2026-01-07T22:06:18.576Z] [BOT] ⏭️  Skipping duplicate: JID_ce2c0c1d-argonne_careers-JID_22383c0f-appointee_421600 (posted within 7 days)
⏭️ Skipping already posted: ROLE_5f95836b at Argonne National Laboratory
[2026-01-07T22:06:18.577Z] [BOT] ⏭️  Skipping duplicate: JID_94ff87a3 (posted within 7 days)
⏭️ Skipping already posted: Recruiter, G&A at anthropic
[2026-01-07T22:06:18.577Z] [BOT] ⏭️  Skipping duplicate: JID_ea793d1c-analyst_26_00211 (posted within 7 days)
[2026-01-07T22:06:18.577Z] [BOT] ⏭️ Skipping already posted: Entry-Level Data Analyst at Camping World
⏭️  Skipping duplicate: JID_39c8a27b (posted within 7 days)
[2026-01-07T22:06:18.577Z] [BOT] ⏭️ Skipping already posted: GIS Analyst 1 at McAdams
[2026-01-07T22:06:18.577Z] [BOT] ⏭️  Skipping duplicate: JID_8dea4844-cx_2-job-8485 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9dc5bf5b at EXL
[2026-01-07T22:06:18.577Z] [BOT] ⏭️  Skipping duplicate: JID_af67efb2 (posted within 7 days)
⏭️ Skipping already posted: ROLE_9f19dcea at NTT Data
⏭️  Skipping duplicate: JID_7d6bc021 (posted within 7 days)
[2026-01-07T22:06:18.577Z] [BOT] ⏭️ Skipping already posted: BPO-Application Support-Health at NTT Data
⏭️  Skipping duplicate: JID_6957dde4-rec_rtx_ext_gateway-JID_6f50204b-_01810300 (posted within 7 days)
[2026-01-07T22:06:18.577Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at RTX
⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
📬 Found 2 new jobs (18 already posted)...
[2026-01-07T22:06:18.577Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-07T22:06:18.578Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-07T22:06:18.578Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
📤 Posting 2 jobs...
[2026-01-07T22:06:18.578Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-07T22:06:18.579Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-07T22:06:18.581Z] [BOT] 📍 [ROUTING] "Security GRC Specialist, Public Sector" @ anthropic
[2026-01-07T22:06:18.581Z] [BOT] Category: AI (matched: "artificial intelligence")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-07T22:06:18.586Z] [BOT ERROR] (node:2832) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-07T22:06:18.868Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist, Public Sector @ anthropic in #🤖・ai-jobs
[2026-01-07T22:06:18.868Z] [BOT] ✅ Industry: Security GRC Specialist, Public Sector @ anthropic
[2026-01-07T22:06:20.640Z] [BOT] ✅ Created forum post: 🏢 Security GRC Specialist, Public Sector @ anthropic in #🌉・san-francisco
[2026-01-07T22:06:20.640Z] [BOT] ✅ Location: 🌉・san-francisco
[2026-01-07T22:06:22.142Z] [BOT] 💾 Marked as posted: Security GRC Specialist, Public Sector @ anthropic (instance #1)
[2026-01-07T22:06:22.142Z] [BOT] 💾 BEFORE ARCHIVING: 1434 jobs in database
[2026-01-07T22:06:22.143Z] [BOT] ✅ No jobs to archive (all 1434 jobs within 7-day window)
[2026-01-07T22:06:22.158Z] [BOT] 💾 Saved posted_jobs.json: 1434 active jobs
[2026-01-07T22:06:22.158Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-07T22:06:22.159Z] [BOT] 📍 [ROUTING] "Business Controller Intern" @ coinbase
[2026-01-07T22:06:22.160Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, nonTechMatch (using ai)
[2026-01-07T22:06:22.536Z] [BOT] ✅ Created forum post: 🏢 Business Controller Intern @ coinbase in #🤖・ai-jobs
  ✅ Industry: Business Controller Intern @ coinbase
[2026-01-07T22:06:24.238Z] [BOT] ✅ Created forum post: 🏢 Business Controller Intern @ coinbase in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-07T22:06:25.740Z] [BOT] 💾 Marked as posted: Business Controller Intern @ coinbase (instance #1)
[2026-01-07T22:06:25.740Z] [BOT] 💾 BEFORE ARCHIVING: 1435 jobs in database
[2026-01-07T22:06:25.741Z] [BOT] ✅ No jobs to archive (all 1435 jobs within 7-day window)
[2026-01-07T22:06:25.752Z] [BOT] 💾 Saved posted_jobs.json: 1435 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-07T22:06:28.752Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-07T22:06:28.752Z] [BOT] ⏭️  Skipping duplicate: JID_16d85b73 (posted within 7 days)
[2026-01-07T22:06:28.753Z] [BOT] ⏭️  Skipping duplicate: JID_bfdf3422 (posted within 7 days)
[2026-01-07T22:06:28.758Z] [BOT] ✅ Loaded pending queue: 109 total (89 pending, 20 enriched, 0 posted)
[2026-01-07T22:06:28.767Z] [BOT] ✅ Saved pending queue: 109 total (89 pending, 18 enriched, 2 posted)
[2026-01-07T22:06:28.767Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-07T22:06:28.829Z] [BOT] 📂 Loaded 2370 existing routing entries
[2026-01-07T22:06:28.884Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-07T22:06:28.884Z] [BOT] Total entries: 2372
   Timestamp: 2026-01-07T22:06:28.873Z
[2026-01-07T22:06:28.884Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_5959b366.jsonl
[2026-01-07T22:06:28.884Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-07T22:06:28.885Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-07T22:06:28.885Z] [BOT] Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #🌉・san-francisco: 1 posts
     3. #🗽・new-york: 1 posts
[2026-01-07T22:06:28.885Z] [BOT] [STATS] Channel stats saved
[2026-01-07T22:06:30.897Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2832) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*