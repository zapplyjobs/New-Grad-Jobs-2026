# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T10:43:48.733Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T10:43:38.624Z] ========================================
[2026-01-08T10:43:38.626Z] Discord Bot Execution Log
[2026-01-08T10:43:38.626Z] Environment: GitHub Actions
[2026-01-08T10:43:38.626Z] Node Version: v20.19.6
[2026-01-08T10:43:38.626Z] ========================================
[2026-01-08T10:43:38.626Z] Environment Variables Check:
[2026-01-08T10:43:38.626Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T10:43:38.626Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.626Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T10:43:38.626Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T10:43:38.627Z] 
Multi-Channel Configuration:
[2026-01-08T10:43:38.627Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T10:43:38.627Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T10:43:38.627Z] 
Data Files Check:
[2026-01-08T10:43:38.628Z] .github/data/new_jobs.json: ✅ Exists (10 items, 73558 bytes)
[2026-01-08T10:43:38.634Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 759019 bytes)
[2026-01-08T10:43:38.634Z] 
========================================
[2026-01-08T10:43:38.634Z] Starting Enhanced Discord Bot...
[2026-01-08T10:43:38.634Z] ========================================
[2026-01-08T10:43:39.149Z] [BOT] ✅ Loaded V2 database: 1472 jobs
[2026-01-08T10:43:39.589Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T10:43:39.589Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T10:43:39.590Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T10:43:39.598Z] [BOT] ✅ Loaded pending queue: 148 total (128 pending, 20 enriched, 0 posted)
[2026-01-08T10:43:39.598Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Software Engineer at Marigold
[2026-01-08T10:43:39.599Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
[2026-01-08T10:43:39.599Z] [BOT] ⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
[2026-01-08T10:43:39.599Z] [BOT] ⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
[2026-01-08T10:43:39.599Z] [BOT] ⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
[2026-01-08T10:43:39.600Z] [BOT] ⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
[2026-01-08T10:43:39.600Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
[2026-01-08T10:43:39.601Z] [BOT] ⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
[2026-01-08T10:43:39.601Z] [BOT] ⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
[2026-01-08T10:43:39.601Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-01-08T10:43:39.601Z] [BOT] ⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
[2026-01-08T10:43:39.601Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
[2026-01-08T10:43:39.601Z] [BOT] ⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
[2026-01-08T10:43:39.601Z] [BOT] ⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
[2026-01-08T10:43:39.601Z] [BOT] ⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-08T10:43:39.602Z] [BOT] ⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
[2026-01-08T10:43:39.602Z] [BOT] ⏭️  Skipping duplicate: JID_a573c606-external_careers-JID_ed66d9b6-intelligence_jr2025489368 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Artificial Intelligence at The Boeing Company
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T10:43:39.602Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-08T10:43:39.602Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T10:43:39.602Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T10:43:39.603Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T10:43:39.604Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-08T10:43:39.605Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_1e88e535
[2026-01-08T10:43:39.605Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-08T10:43:39.609Z] [BOT ERROR] (node:3601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T10:43:39.743Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1e88e535 in #💻・tech-jobs
[2026-01-08T10:43:39.743Z] [BOT] ✅ Industry: Software Engineer @ ORG_1e88e535
[2026-01-08T10:43:41.406Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_1e88e535 in #🗽・new-york
[2026-01-08T10:43:41.407Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-08T10:43:42.908Z] [BOT] 💾 Marked as posted: Software Engineer @ ORG_1e88e535 (instance #1)
[2026-01-08T10:43:42.908Z] [BOT] 💾 BEFORE ARCHIVING: 1473 jobs in database
[2026-01-08T10:43:42.910Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T10:43:42.914Z] [BOT] 📦 Archived 3 jobs to 2026-01.json (3 total in archive)
[2026-01-08T10:43:42.915Z] [BOT] ✅ Archiving complete: 3 archived, 1470 active
[2026-01-08T10:43:42.925Z] [BOT] 💾 Saved posted_jobs.json: 1470 active jobs
[2026-01-08T10:43:42.925Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-08T10:43:45.925Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T10:43:45.925Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
[2026-01-08T10:43:45.931Z] [BOT] ✅ Loaded pending queue: 148 total (128 pending, 20 enriched, 0 posted)
[2026-01-08T10:43:45.939Z] [BOT] ✅ Saved pending queue: 148 total (128 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T10:43:45.939Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T10:43:45.991Z] [BOT] 📂 Loaded 2414 existing routing entries
[2026-01-08T10:43:46.050Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2026-01-08T10:43:46.050Z] [BOT] Total entries: 2415
   Timestamp: 2026-01-08T10:43:46.040Z
[2026-01-08T10:43:46.051Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
[2026-01-08T10:43:46.051Z] [BOT] Total attempts: 21
   Successful: 2
   Failed: 0
   Skipped: 19
[2026-01-08T10:43:46.051Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[STATS] Channel stats saved
[2026-01-08T10:43:48.062Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3601) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*