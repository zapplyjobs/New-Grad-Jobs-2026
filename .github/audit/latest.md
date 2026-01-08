# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T16:27:21.276Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T16:27:10.671Z] ========================================
[2026-01-08T16:27:10.673Z] Discord Bot Execution Log
[2026-01-08T16:27:10.673Z] Environment: GitHub Actions
[2026-01-08T16:27:10.673Z] Node Version: v20.19.6
[2026-01-08T16:27:10.673Z] ========================================
[2026-01-08T16:27:10.673Z] Environment Variables Check:
[2026-01-08T16:27:10.673Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T16:27:10.674Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T16:27:10.674Z] 
Multi-Channel Configuration:
[2026-01-08T16:27:10.674Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T16:27:10.674Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T16:27:10.674Z] 
Data Files Check:
[2026-01-08T16:27:10.676Z] .github/data/new_jobs.json: ✅ Exists (10 items, 157559 bytes)
[2026-01-08T16:27:10.682Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 754135 bytes)
[2026-01-08T16:27:10.682Z] 
========================================
[2026-01-08T16:27:10.682Z] Starting Enhanced Discord Bot...
[2026-01-08T16:27:10.682Z] ========================================
[2026-01-08T16:27:11.217Z] [BOT] ✅ Loaded V2 database: 1465 jobs
[2026-01-08T16:27:11.709Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T16:27:11.709Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T16:27:11.709Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T16:27:11.717Z] [BOT] ✅ Loaded pending queue: 154 total (134 pending, 20 enriched, 0 posted)
[2026-01-08T16:27:11.718Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Java Developer at General Dynamics Information Technology
[2026-01-08T16:27:11.719Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
[2026-01-08T16:27:11.719Z] [BOT] ⏭️ Skipping already posted: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T16:27:11.719Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T16:27:11.719Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T16:27:11.719Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-08T16:27:11.720Z] [BOT] ⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T16:27:11.720Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
[2026-01-08T16:27:11.720Z] [BOT] ⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T16:27:11.720Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T16:27:11.720Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T16:27:11.720Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
[2026-01-08T16:27:11.720Z] [BOT] ⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T16:27:11.721Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_aeb89c5c-developer_r260376 (posted within 7 days)
⏭️ Skipping already posted: ROLE_4a3a3618 at Uline
[2026-01-08T16:27:11.721Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
[2026-01-08T16:27:11.721Z] [BOT] ⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T16:27:11.721Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
[2026-01-08T16:27:11.721Z] [BOT] ⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
[2026-01-08T16:27:11.721Z] [BOT] ⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T16:27:11.721Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T16:27:11.721Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T16:27:11.722Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T16:27:11.722Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T16:27:11.723Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-08T16:27:11.724Z] [BOT] 📍 [ROUTING] "Java Developer" @ ORG_c910d474 Dynamics Information Technology
   Category: TECH (matched: "software")
[2026-01-08T16:27:11.724Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T16:27:11.741Z] [BOT ERROR] (node:2951) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T16:27:12.013Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
  ✅ Industry: Java Developer @ ORG_c910d474 Dynamics Information Technology
[2026-01-08T16:27:13.959Z] [BOT] ✅ Created forum post: 🏢 Java Developer @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
[2026-01-08T16:27:13.959Z] [BOT] ✅ Location: 💻・remote-usa
[2026-01-08T16:27:15.460Z] [BOT] 💾 Marked as posted: Java Developer @ ORG_c910d474 Dynamics Information Technology (instance #1)
[2026-01-08T16:27:15.460Z] [BOT] 💾 BEFORE ARCHIVING: 1466 jobs in database
[2026-01-08T16:27:15.462Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T16:27:15.467Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-08T16:27:15.467Z] [BOT] ✅ Archiving complete: 1 archived, 1465 active
[2026-01-08T16:27:15.480Z] [BOT] 💾 Saved posted_jobs.json: 1465 active jobs
[2026-01-08T16:27:15.481Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T16:27:18.481Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T16:27:18.481Z] [BOT] ⏭️  Skipping duplicate: JID_4e873d38-external_career_site-JID_ee660e17-preferred_rq209446-1 (posted within 7 days)
[2026-01-08T16:27:18.487Z] [BOT] ✅ Loaded pending queue: 154 total (134 pending, 20 enriched, 0 posted)
[2026-01-08T16:27:18.496Z] [BOT] ✅ Saved pending queue: 154 total (134 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T16:27:18.496Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T16:27:18.549Z] [BOT] 📂 Loaded 2423 existing routing entries
[2026-01-08T16:27:18.607Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2424
[2026-01-08T16:27:18.608Z] [BOT] Timestamp: 2026-01-08T16:27:18.598Z
[2026-01-08T16:27:18.608Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T16:27:18.608Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T16:27:18.608Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-08T16:27:18.609Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #💻・remote-usa: 1 posts
[2026-01-08T16:27:18.609Z] [BOT] [STATS] Channel stats saved
[2026-01-08T16:27:20.622Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2951) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*