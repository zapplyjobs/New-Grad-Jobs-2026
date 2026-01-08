# Discord Bot Execution Audit
**Timestamp:** 2026-01-08T14:12:54.016Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 19
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-08T14:12:45.276Z] ========================================
[2026-01-08T14:12:45.278Z] Discord Bot Execution Log
[2026-01-08T14:12:45.278Z] Environment: GitHub Actions
[2026-01-08T14:12:45.278Z] Node Version: v20.19.6
[2026-01-08T14:12:45.278Z] ========================================
[2026-01-08T14:12:45.278Z] Environment Variables Check:
[2026-01-08T14:12:45.278Z] DISCORD_TOKEN: ✅ Set
[2026-01-08T14:12:45.278Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.278Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-08T14:12:45.279Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-08T14:12:45.279Z] 
Multi-Channel Configuration:
[2026-01-08T14:12:45.279Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-08T14:12:45.279Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-08T14:12:45.279Z] 
Data Files Check:
[2026-01-08T14:12:45.280Z] .github/data/new_jobs.json: ✅ Exists (10 items, 80450 bytes)
[2026-01-08T14:12:45.286Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 759667 bytes)
[2026-01-08T14:12:45.286Z] 
========================================
[2026-01-08T14:12:45.286Z] Starting Enhanced Discord Bot...
[2026-01-08T14:12:45.286Z] ========================================
[2026-01-08T14:12:45.812Z] [BOT] ✅ Loaded V2 database: 1473 jobs
[2026-01-08T14:12:46.353Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-08T14:12:46.354Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-08T14:12:46.354Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-08T14:12:46.362Z] [BOT] ✅ Loaded pending queue: 153 total (133 pending, 20 enriched, 0 posted)
[2026-01-08T14:12:46.362Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Customer Success Associate - Denver at datadog
[2026-01-08T14:12:46.363Z] [BOT] ⏭️  Skipping duplicate: JID_01e0d84a-engineer_r2356 (posted within 7 days)
[2026-01-08T14:12:46.364Z] [BOT] ⏭️ Skipping already posted: ROLE_6a50d101 at Marigold
[2026-01-08T14:12:46.364Z] [BOT] ⏭️  Skipping duplicate: JID_6796d1d6-CH_a207b67e (posted within 7 days)
[2026-01-08T14:12:46.364Z] [BOT] ⏭️ Skipping already posted: Data Scientist Graduate - Product Analytics at TikTok
⏭️  Skipping duplicate: JID_0f879d42-analyst_req20170647-1 (posted within 7 days)
[2026-01-08T14:12:46.364Z] [BOT] ⏭️ Skipping already posted: ROLE_293d5dbd at University of Southern California
[2026-01-08T14:12:46.364Z] [BOT] ⏭️  Skipping duplicate: JID_eef78c7a (posted within 7 days)
⏭️ Skipping already posted: ROLE_6617ee94 at anthropic
⏭️  Skipping duplicate: JID_ef4d2400-i_1021666 (posted within 7 days)
[2026-01-08T14:12:46.364Z] [BOT] ⏭️ Skipping already posted: Research Data Analyst 1 at Children's Hospital of Philadelphia
⏭️  Skipping duplicate: JID_62d2699c-engineer_req329855-1 (posted within 7 days)
⏭️ Skipping already posted: ROLE_171a89ce at T-Mobile
[2026-01-08T14:12:46.365Z] [BOT] ⏭️  Skipping duplicate: JID_fce86b06 (posted within 7 days)
⏭️ Skipping already posted: ROLE_da6ab17d at Wyld
[2026-01-08T14:12:46.365Z] [BOT] ⏭️  Skipping duplicate: JID_049d09e3-pnw_req451478 (posted within 7 days)
⏭️ Skipping already posted: Research Analyst - Pnw at Jones Lang LaSalle (JLL)
[2026-01-08T14:12:46.365Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_54c2d808-_r10218502 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Level - Space Systems at Northrop Grumman
[2026-01-08T14:12:46.365Z] [BOT] ⏭️  Skipping duplicate: JID_1d09d870-sre_r-233208 (posted within 7 days)
[2026-01-08T14:12:46.365Z] [BOT] ⏭️ Skipping already posted: ROLE_06bb8f8e at Amgen
⏭️  Skipping duplicate: JID_1980d06d-external_careers-JID_ff8193b5-engineer_r50546 (posted within 7 days)
[2026-01-08T14:12:46.365Z] [BOT] ⏭️ Skipping already posted: C++ Software Engineer at Cadence Design Systems
⏭️  Skipping duplicate: JID_805eae31 (posted within 7 days)
⏭️ Skipping already posted: Early Career Talent - Data Engineer at Western Digital
[2026-01-08T14:12:46.365Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_9d76ad12-quality_r10218213 (posted within 7 days)
⏭️ Skipping already posted: Quality Engineer - Principal Quality Engineer at Northrop Grumman
[2026-01-08T14:12:46.365Z] [BOT] ⏭️  Skipping duplicate: JID_6a6f08a0 (posted within 7 days)
⏭️ Skipping already posted: ROLE_e06b3b02 at Accenture
[2026-01-08T14:12:46.366Z] [BOT] ⏭️  Skipping duplicate: JID_fb1c39ec (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 - Builder Frameworks at Twitch
[2026-01-08T14:12:46.366Z] [BOT] ⏭️  Skipping duplicate: JID_c08a3b17 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Integrations at Pinwheel
⏭️  Skipping duplicate: JID_8bbaf901 (posted within 7 days)
[2026-01-08T14:12:46.366Z] [BOT] ⏭️ Skipping already posted: ROLE_2ed4792d at Critical Mass
⏭️  Skipping duplicate: JID_e5b8737a-analyst_r23248 (posted within 7 days)
⏭️ Skipping already posted: ROLE_6beb8dc8 at Vantor
[2026-01-08T14:12:46.366Z] [BOT] ⏭️  Skipping duplicate: JID_3255e497-i_r-48234 (posted within 7 days)
⏭️ Skipping already posted: Associate Software Engineer 1 at BCBST
📬 Found 1 new jobs (19 already posted)...
[2026-01-08T14:12:46.366Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-08T14:12:46.367Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-08T14:12:46.367Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-08T14:12:46.370Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-08T14:12:46.371Z] [BOT] 📍 [ROUTING] "Customer Success Associate - Denver" @ datadog
[2026-01-08T14:12:46.371Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-08T14:12:46.376Z] [BOT ERROR] (node:3504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-08T14:12:46.560Z] [BOT] ✅ Created forum post: 🏢 Customer Success Associate - Denver @ datadog in #💲・sales-jobs
  ✅ Industry: Customer Success Associate - Denver @ datadog
[2026-01-08T14:12:48.064Z] [BOT] 💾 Marked as posted: Customer Success Associate - Denver @ datadog (instance #1)
[2026-01-08T14:12:48.064Z] [BOT] 💾 BEFORE ARCHIVING: 1474 jobs in database
[2026-01-08T14:12:48.066Z] [BOT] 📁 Created archive directory: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/archive
[2026-01-08T14:12:48.071Z] [BOT] 📦 Archived 11 jobs to 2026-01.json (11 total in archive)
[2026-01-08T14:12:48.071Z] [BOT] ✅ Archiving complete: 11 archived, 1463 active
[2026-01-08T14:12:48.080Z] [BOT] 💾 Saved posted_jobs.json: 1463 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-08T14:12:51.081Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-08T14:12:51.081Z] [BOT] ⏭️  Skipping duplicate: JID_8f4898d5 (posted within 7 days)
[2026-01-08T14:12:51.088Z] [BOT] ✅ Loaded pending queue: 153 total (133 pending, 20 enriched, 0 posted)
[2026-01-08T14:12:51.096Z] [BOT] ✅ Saved pending queue: 153 total (133 pending, 19 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
[2026-01-08T14:12:51.097Z] [BOT] ✅ All posting operations complete, cleaning up...
[2026-01-08T14:12:51.148Z] [BOT] 📂 Loaded 2419 existing routing entries
[2026-01-08T14:12:51.206Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2420
   Timestamp: 2026-01-08T14:12:51.196Z
[2026-01-08T14:12:51.207Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_9065d268.jsonl
   Total attempts: 20
   Successful: 1
   Failed: 0
   Skipped: 19
[2026-01-08T14:12:51.207Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
[2026-01-08T14:12:51.207Z] [BOT] Last cleanup: Never
   Total posts: 1
   Channels used: 1
   Top channels:
[2026-01-08T14:12:51.207Z] [BOT] 1. #💲・sales-jobs: 1 posts
[2026-01-08T14:12:51.208Z] [BOT] [STATS] Channel stats saved
[2026-01-08T14:12:53.224Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:3504) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*