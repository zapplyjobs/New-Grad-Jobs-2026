# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T17:08:56.249Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T17:08:40.622Z] ========================================
[2026-01-06T17:08:40.624Z] Discord Bot Execution Log
[2026-01-06T17:08:40.624Z] Environment: GitHub Actions
[2026-01-06T17:08:40.624Z] Node Version: v20.19.6
[2026-01-06T17:08:40.624Z] ========================================
[2026-01-06T17:08:40.624Z] Environment Variables Check:
[2026-01-06T17:08:40.624Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T17:08:40.624Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T17:08:40.625Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T17:08:40.625Z] 
Multi-Channel Configuration:
[2026-01-06T17:08:40.625Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.625Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.626Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T17:08:40.626Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T17:08:40.626Z] 
Data Files Check:
[2026-01-06T17:08:40.627Z] .github/data/new_jobs.json: ✅ Exists (10 items, 129921 bytes)
[2026-01-06T17:08:40.633Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 699234 bytes)
[2026-01-06T17:08:40.633Z] 
========================================
[2026-01-06T17:08:40.633Z] Starting Enhanced Discord Bot...
[2026-01-06T17:08:40.633Z] ========================================
[2026-01-06T17:08:41.182Z] [BOT] ✅ Loaded V2 database: 1368 jobs
[2026-01-06T17:08:41.755Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T17:08:41.755Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T17:08:41.756Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T17:08:41.757Z] [BOT] ✅ Loaded pending queue: 47 total (27 pending, 20 enriched, 0 posted)
[2026-01-06T17:08:41.757Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[2026-01-06T17:08:41.757Z] [BOT] [BOT] 🔍 Sample enriched job: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T17:08:41.759Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
[2026-01-06T17:08:41.759Z] [BOT] ⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T17:08:41.759Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
[2026-01-06T17:08:41.759Z] [BOT] ⏭️  Skipping duplicate: JID_38c7271e (posted within 7 days)
[2026-01-06T17:08:41.760Z] [BOT] ⏭️ Skipping already posted: ROLE_2237147a at Shiftsmart
⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
[2026-01-06T17:08:41.760Z] [BOT] ⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T17:08:41.760Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T17:08:41.760Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T17:08:41.760Z] [BOT] ⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T17:08:41.760Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T17:08:41.760Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T17:08:41.760Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T17:08:41.761Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
[2026-01-06T17:08:41.761Z] [BOT] ⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T17:08:41.761Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T17:08:41.761Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
⏭️  Skipping duplicate: JID_ee6499c3 (posted within 7 days)
⏭️ Skipping already posted: ROLE_3b9cda67 at brex
[2026-01-06T17:08:41.761Z] [BOT] ⏭️  Skipping duplicate: JID_023865ec-biostatistics_jr91931 (posted within 7 days)
⏭️ Skipping already posted: Statistical Data Analyst - Institute for Informatics - Data Science & Biostatistics at Wash U
📬 Found 2 new jobs (18 already posted)...
[2026-01-06T17:08:41.761Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-06T17:08:41.761Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-06T17:08:41.762Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-06T17:08:41.762Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T17:08:41.765Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2026-01-06T17:08:41.765Z] [BOT] 📍 [ROUTING] "Federal Support Engineer 3 - Denver" @ datadog
[2026-01-06T17:08:41.766Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2026-01-06T17:08:41.770Z] [BOT ERROR] (node:2898) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T17:08:42.125Z] [BOT] ✅ Created forum post: 🏢 Federal Support Engineer 3 - Denver @ datadog in #💻・tech-jobs
  ✅ Industry: Federal Support Engineer 3 - Denver @ datadog
[2026-01-06T17:08:43.627Z] [BOT] 💾 Marked as posted: Federal Support Engineer 3 - Denver @ datadog (instance #1)
[2026-01-06T17:08:43.627Z] [BOT] 💾 BEFORE ARCHIVING: 1369 jobs in database
[2026-01-06T17:08:43.628Z] [BOT] ✅ No jobs to archive (all 1369 jobs within 7-day window)
[2026-01-06T17:08:43.642Z] [BOT] 💾 Saved posted_jobs.json: 1369 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T17:08:46.644Z] [BOT] 📌 Posting 1 jobs to #📊・JID_9910249a
[2026-01-06T17:08:46.644Z] [BOT] 📍 [ROUTING] "Protective Services Program Manager" @ anthropic
[2026-01-06T17:08:46.644Z] [BOT] Category: PROJECT-MANAGEMENT (matched: "project-management")
   Channel: 📊・JID_9910249a (1391...1276)
[2026-01-06T17:08:47.038Z] [BOT] ✅ Created forum post: 🏢 Protective Services Program Manager @ anthropic in #📊・JID_9910249a
[2026-01-06T17:08:47.038Z] [BOT] ✅ Industry: Protective Services Program Manager @ anthropic
[2026-01-06T17:08:48.816Z] [BOT] ✅ Created forum post: 🏢 Protective Services Program Manager @ anthropic in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2026-01-06T17:08:50.317Z] [BOT] 💾 Marked as posted: Protective Services Program Manager @ anthropic (instance #1)
[2026-01-06T17:08:50.317Z] [BOT] 💾 BEFORE ARCHIVING: 1370 jobs in database
[2026-01-06T17:08:50.319Z] [BOT] ✅ No jobs to archive (all 1370 jobs within 7-day window)
[2026-01-06T17:08:50.329Z] [BOT] 💾 Saved posted_jobs.json: 1370 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T17:08:53.330Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-06T17:08:53.330Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-06T17:08:53.331Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
[2026-01-06T17:08:53.332Z] [BOT] ✅ Loaded pending queue: 47 total (27 pending, 20 enriched, 0 posted)
[2026-01-06T17:08:53.336Z] [BOT] ✅ Saved pending queue: 47 total (27 pending, 18 enriched, 2 posted)
[2026-01-06T17:08:53.336Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T17:08:53.390Z] [BOT] 📂 Loaded 2294 existing routing entries
[2026-01-06T17:08:53.449Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2296
[2026-01-06T17:08:53.450Z] [BOT] Timestamp: 2026-01-06T17:08:53.439Z
[2026-01-06T17:08:53.450Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T17:08:53.450Z] [BOT] Total attempts: 21
   Successful: 3
   Failed: 0
   Skipped: 18
[2026-01-06T17:08:53.451Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-06T17:08:53.451Z] [BOT] Total posts: 3
   Channels used: 3
   Top channels:
     1. #💻・tech-jobs: 1 posts
     2. #📊・JID_9910249a: 1 posts
     3. #🌉・san-francisco: 1 posts
[2026-01-06T17:08:53.451Z] [BOT] [STATS] Channel stats saved
[2026-01-06T17:08:55.465Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2898) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*