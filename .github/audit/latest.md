# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T15:42:31.653Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T15:42:14.312Z] ========================================
[2026-01-08T15:42:14.314Z] Discord Bot Execution Log
[2026-01-08T15:42:14.314Z] Environment: GitHub Actions
[2026-01-08T15:42:14.314Z] Node Version: v20.19.6
[2026-01-08T15:42:14.314Z] ========================================
[2026-01-08T15:42:14.314Z] Environment Variables Check:
[2026-01-08T15:42:14.314Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T15:42:14.315Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T15:42:14.315Z] 
Multi-Channel Configuration:
[2026-01-08T15:42:14.315Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T15:42:14.315Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T15:42:14.315Z] 
Data Files Check:
[2026-01-08T15:42:14.317Z] .github/data/new_jobs.json: ✅ Exists (10 items, 163816 bytes)
[2026-01-08T15:42:14.322Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 753713 bytes)
[2026-01-08T15:42:14.322Z] 
========================================
[2026-01-08T15:42:14.322Z] Starting Enhanced Discord Bot...
[2026-01-08T15:42:14.322Z] ========================================
[2026-01-08T15:42:14.837Z] [BOT] ✅ Loaded V2 database: 1464 jobs
[2026-01-08T15:42:15.340Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T15:42:15.341Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T15:42:15.341Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T15:42:15.349Z] [BOT] ✅ Loaded pending queue: 153 total (133 pending, 20 enriched, 0 posted)
[2026-01-08T15:42:15.350Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Community Marketing Manager - Figma Weave (New York, United States)  at figma
[2026-01-08T15:42:15.351Z] [BOT] ⏭️  Skipping duplicate: JID_02f030c9 (posted within 7 days)
[2026-01-08T15:42:15.351Z] [BOT] ⏭️ Skipping already posted: Regional Manager, Sales Engineer - Key Accounts (East) at datadog
[2026-01-08T15:42:15.351Z] [BOT] ⏭️  Skipping duplicate: JID_71fea720 (posted within 7 days)
[2026-01-08T15:42:15.352Z] [BOT] ⏭️ Skipping already posted: Senior Security Engineer - Threat Detection Engineering at datadog
[2026-01-08T15:42:15.352Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-08T15:42:15.352Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
⏭️  Skipping duplicate: JID_ef4c3a29 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a7374bfe at datadog
[2026-01-08T15:42:15.352Z] [BOT] ⏭️  Skipping duplicate: JID_cfed6c1a (posted within 7 days)
⏭️ Skipping already posted: Senior Field Enablement Manager - Leadership Development at datadog
[2026-01-08T15:42:15.352Z] [BOT] ⏭️  Skipping duplicate: JID_122be8ed (posted within 7 days)
⏭️ Skipping already posted: ROLE_65e25961 at datadog
[2026-01-08T15:42:15.352Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-08T15:42:15.353Z] [BOT] ⏭️  Skipping duplicate: JID_c7ddbe0e (posted within 7 days)
⏭️ Skipping already posted: ROLE_884052b1 at datadog
[2026-01-08T15:42:15.353Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-08T15:42:15.353Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
⏭️ Skipping already posted: Customer Success Associate - Denver at datadog
⏭️  Skipping duplicate: JID_fcda0307 (posted within 7 days)
⏭️ Skipping already posted: Sales Development Representative (Denver) at datadog
[2026-01-08T15:42:15.354Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
[2026-01-08T15:42:15.354Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
[2026-01-08T15:42:15.354Z] [BOT] ⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
📬 Found 2 new jobs (18 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-08T15:42:15.357Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T15:42:15.358Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2026-01-08T15:42:15.359Z] [BOT] 📍 [ROUTING] "Community Marketing Manager - Figma Weave (New York, United States) " @ figma
[2026-01-08T15:42:15.359Z] [BOT] Category: MARKETING (matched: "marketing")
   Channel: 📣・marketing-jobs (1391...4570)
[2026-01-08T15:42:15.364Z] [BOT ERROR] (node:2894) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T15:42:15.806Z] [BOT] ✅ Created forum post: 🏢 Community Marketing Manager - Figma Weave (New York, United States)  @ figma in #📣・marketing-jobs
[2026-01-08T15:42:15.806Z] [BOT] ✅ Industry: Community Marketing Manager - Figma Weave (New York, United States)  @ figma
[2026-01-08T15:42:17.568Z] [BOT] ✅ Created forum post: 🏢 Community Marketing Manager - Figma Weave (New York, United States)  @ figma in #🗽・new-york
[2026-01-08T15:42:17.568Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-08T15:42:19.068Z] [BOT] 💾 Marked as posted: Community Marketing Manager - Figma Weave (New York, United States)  @ figma (instance #1)
[2026-01-08T15:42:19.069Z] [BOT] 💾 BEFORE ARCHIVING: 1465 jobs in database
[2026-01-08T15:42:19.070Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T15:42:19.075Z] [BOT] 📦 Archived 1 jobs to 2026-01.json (1 total in archive)
[2026-01-08T15:42:19.075Z] [BOT] ✅ Archiving complete: 1 archived, 1464 active
[2026-01-08T15:42:19.084Z] [BOT] 💾 Saved posted_jobs.json: 1464 active jobs
[2026-01-08T15:42:19.084Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T15:42:22.085Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-08T15:42:22.086Z] [BOT] 📍 [ROUTING] "Associate Software Developer" @ ORG_7dcce8d0ine
[2026-01-08T15:42:22.086Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T15:42:22.341Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #💻・tech-jobs
[2026-01-08T15:42:22.341Z] [BOT] ✅ Industry: Associate Software Developer @ ORG_7dcce8d0ine
[2026-01-08T15:42:24.164Z] [BOT] ✅ Created forum post: 🏢 Associate Software Developer @ ORG_7dcce8d0ine in #🌆・chicago
  ✅ Location: 🌆・chicago
[2026-01-08T15:42:25.666Z] [BOT] 💾 Marked as posted: Associate Software Developer @ ORG_7dcce8d0ine (instance #1)
[2026-01-08T15:42:25.666Z] [BOT] 💾 BEFORE ARCHIVING: 1465 jobs in database
[2026-01-08T15:42:25.667Z] [BOT] ✅ No jobs to archive (all 1465 jobs within 7-day window)
[2026-01-08T15:42:25.678Z] [BOT] 💾 Saved posted_jobs.json: 1465 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T15:42:28.678Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-08T15:42:28.678Z] [BOT] ⏭️  Skipping duplicate: JID_ce63ae83 (posted within 7 days)
[2026-01-08T15:42:28.678Z] [BOT] ⏭️  Skipping duplicate: JID_4d2f7d1f-uline_careers-JID_aeb89c5c-developer_r260376 (posted within 7 days)
[2026-01-08T15:42:28.684Z] [BOT] ✅ Loaded pending queue: 153 total (133 pending, 20 enriched, 0 posted)
[2026-01-08T15:42:28.694Z] [BOT] ✅ Saved pending queue: 153 total (133 pending, 18 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2026-01-08T15:42:28.694Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T15:42:28.752Z] [BOT] 📂 Loaded 2421 existing routing entries
[2026-01-08T15:42:28.810Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2026-01-08T15:42:28.810Z] [BOT] Total entries: 2423
   Timestamp: 2026-01-08T15:42:28.800Z
[2026-01-08T15:42:28.811Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T15:42:28.811Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-08T15:42:28.811Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 4
   Top channels:
[2026-01-08T15:42:28.811Z] [BOT] 1. #📣・marketing-jobs: 1 posts
     2. #🗽・new-york: 1 posts
     3. #💻・tech-jobs: 1 posts
     4. #🌆・chicago: 1 posts
[2026-01-08T15:42:28.811Z] [BOT] [STATS] Channel stats saved
[2026-01-08T15:42:30.824Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2894) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*