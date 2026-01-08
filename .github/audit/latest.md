# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T08:06:57.750Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T08:06:46.572Z] ========================================
[2026-01-08T08:06:46.574Z] Discord Bot Execution Log
[2026-01-08T08:06:46.574Z] Environment: GitHub Actions
[2026-01-08T08:06:46.574Z] Node Version: v20.19.6
[2026-01-08T08:06:46.574Z] ========================================
[2026-01-08T08:06:46.574Z] Environment Variables Check:
[2026-01-08T08:06:46.574Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T08:06:46.574Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.574Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T08:06:46.574Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T08:06:46.574Z] 
Multi-Channel Configuration:
[2026-01-08T08:06:46.574Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T08:06:46.575Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T08:06:46.575Z] 
Data Files Check:
[2026-01-08T08:06:46.576Z] .github/data/new_jobs.json: ✅ Exists (10 items, 70837 bytes)
[2026-01-08T08:06:46.582Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 758534 bytes)
[2026-01-08T08:06:46.582Z] 
========================================
[2026-01-08T08:06:46.582Z] Starting Enhanced Discord Bot...
[2026-01-08T08:06:46.582Z] ========================================
[2026-01-08T08:06:47.107Z] [BOT] ✅ Loaded V2 database: 1471 jobs
[2026-01-08T08:06:47.705Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T08:06:47.706Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T08:06:47.706Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T08:06:47.714Z] [BOT] ✅ Loaded pending queue: 147 total (127 pending, 20 enriched, 0 posted)
[2026-01-08T08:06:47.714Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T08:06:47.715Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
[2026-01-08T08:06:47.715Z] [BOT] ⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
[2026-01-08T08:06:47.716Z] [BOT] ⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
[2026-01-08T08:06:47.716Z] [BOT] ⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
[2026-01-08T08:06:47.716Z] [BOT] ⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
[2026-01-08T08:06:47.716Z] [BOT] ⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
[2026-01-08T08:06:47.716Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
[2026-01-08T08:06:47.716Z] [BOT] ⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-08T08:06:47.717Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
[2026-01-08T08:06:47.717Z] [BOT] ⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
[2026-01-08T08:06:47.717Z] [BOT] ⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
[2026-01-08T08:06:47.717Z] [BOT] ⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-01-08T08:06:47.717Z] [BOT] ⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
[2026-01-08T08:06:47.717Z] [BOT] ⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
[2026-01-08T08:06:47.717Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
[2026-01-08T08:06:47.717Z] [BOT] ⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
[2026-01-08T08:06:47.717Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-08T08:06:47.718Z] [BOT] ⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ed66d9b6-intelligence_jr2025489368 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Artificial Intelligence at The Boeing Company
[2026-01-08T08:06:47.718Z] [BOT] ⏭️  Skipping duplicate: JID_6730b1ec (posted within 7 days)
⏭️ Skipping already posted: ROLE_6a50d101 at Yext
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T08:06:47.718Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T08:06:47.718Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T08:06:47.719Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T08:06:47.719Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T08:06:47.719Z] [BOT] 📌 Posting 1 jobs to #📈・JID_fb739488
[2026-01-08T08:06:47.721Z] [BOT] 📍 [ROUTING] "Data Scientist Graduate - Product Analytics" @ ORG_1bb6fcfb
[2026-01-08T08:06:47.721Z] [BOT] Category: DATA-SCIENCE (matched: "data science")
   Channel: 📈・JID_fb739488 (1446...2761)
   ⚠️  Multiple matches: dsMatch, techMatch (using data-science)
[2026-01-08T08:06:47.725Z] [BOT ERROR] (node:3452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T08:06:48.052Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb in #📈・JID_fb739488
[2026-01-08T08:06:48.052Z] [BOT] ✅ Industry: Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb
[2026-01-08T08:06:49.799Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-08T08:06:51.299Z] [BOT] 💾 Marked as posted: Data Scientist Graduate - Product Analytics @ ORG_1bb6fcfb (instance #1)
[2026-01-08T08:06:51.299Z] [BOT] 💾 BEFORE ARCHIVING: 1472 jobs in database
[2026-01-08T08:06:51.301Z] [BOT] ✅ No jobs to archive (all 1472 jobs within 7-day window)
[2026-01-08T08:06:51.315Z] [BOT] 💾 Saved posted_jobs.json: 1472 active jobs
[2026-01-08T08:06:51.315Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T08:06:54.316Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T08:06:54.316Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
[2026-01-08T08:06:54.322Z] [BOT] ✅ Loaded pending queue: 147 total (127 pending, 20 enriched, 0 posted)
[2026-01-08T08:06:54.331Z] [BOT] ✅ Saved pending queue: 147 total (127 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T08:06:54.331Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T08:06:54.383Z] [BOT] 📂 Loaded 2413 existing routing entries
[2026-01-08T08:06:54.440Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-08T08:06:54.440Z] [BOT] Total entries: 2414
   Timestamp: 2026-01-08T08:06:54.430Z
[2026-01-08T08:06:54.441Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T08:06:54.441Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T08:06:54.441Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T08:06:54.441Z] [BOT] Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-08T08:06:54.441Z] [BOT] 1. #📈・JID_fb739488: 1 posts
     2. #🌉・san-francisco: 1 posts
[2026-01-08T08:06:54.441Z] [BOT] [STATS] Channel stats saved
[2026-01-08T08:06:56.453Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*