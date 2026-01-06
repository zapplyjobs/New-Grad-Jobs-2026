# Discord Bot Execution Audit
**Timestamp:** 2026-01-06T17:26:05.619Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 18
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-06T17:25:51.633Z] ========================================
[2026-01-06T17:25:51.635Z] Discord Bot Execution Log
[2026-01-06T17:25:51.635Z] Environment: GitHub Actions
[2026-01-06T17:25:51.635Z] Node Version: v20.19.6
[2026-01-06T17:25:51.635Z] ========================================
[2026-01-06T17:25:51.635Z] Environment Variables Check:
[2026-01-06T17:25:51.635Z] DISCORD_TOKEN: ✅ Set
[2026-01-06T17:25:51.635Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.635Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-06T17:25:51.635Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-06T17:25:51.636Z] 
Multi-Channel Configuration:
[2026-01-06T17:25:51.636Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-06T17:25:51.636Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-06T17:25:51.636Z] 
Data Files Check:
[2026-01-06T17:25:51.637Z] .github/data/new_jobs.json: ✅ Exists (10 items, 139893 bytes)
[2026-01-06T17:25:51.642Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 700210 bytes)
[2026-01-06T17:25:51.642Z] 
========================================
[2026-01-06T17:25:51.642Z] Starting Enhanced Discord Bot...
[2026-01-06T17:25:51.643Z] ========================================
[2026-01-06T17:25:52.160Z] [BOT] ✅ Loaded V2 database: 1370 jobs
[2026-01-06T17:25:52.815Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-06T17:25:52.816Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-06T17:25:52.816Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-06T17:25:52.817Z] [BOT] ✅ Loaded pending queue: 48 total (28 pending, 20 enriched, 0 posted)
[2026-01-06T17:25:52.817Z] [BOT] [BOT] 📬 Found 20 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Associate AI Software Engineer - Aht at Northrop Grumman
[2026-01-06T17:25:52.819Z] [BOT] ⏭️  Skipping duplicate: JID_991a0636 (posted within 7 days)
[2026-01-06T17:25:52.819Z] [BOT] ⏭️ Skipping already posted: Federal Support Engineer 3 - Denver at datadog
[2026-01-06T17:25:52.819Z] [BOT] ⏭️  Skipping duplicate: JID_9ad8eece (posted within 7 days)
⏭️ Skipping already posted: ROLE_9a8632d3 at anthropic
[2026-01-06T17:25:52.819Z] [BOT] ⏭️  Skipping duplicate: JID_38408935 (posted within 7 days)
⏭️ Skipping already posted: ROLE_a6f7682e  at datadog
[2026-01-06T17:25:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_42b8d223 (posted within 7 days)
⏭️ Skipping already posted: AI Machine Learning Engineer 2 at Cisco
⏭️  Skipping duplicate: JID_38c7271e (posted within 7 days)
⏭️ Skipping already posted: ROLE_2237147a at Shiftsmart
[2026-01-06T17:25:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_7a52a213 (posted within 7 days)
⏭️ Skipping already posted: Premier Support Engineer 2 at datadog
⏭️  Skipping duplicate: JID_075c3f6f (posted within 7 days)
⏭️ Skipping already posted: Staff Software Engineer, Platform at anthropic
[2026-01-06T17:25:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_3e56c54c (posted within 7 days)
⏭️ Skipping already posted: Senior Staff Machine Learning Engineer - Home at spotify
[2026-01-06T17:25:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_939a7704 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Twitch
[2026-01-06T17:25:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_0455e001 (posted within 7 days)
[2026-01-06T17:25:52.820Z] [BOT] ⏭️ Skipping already posted: Software Engineer 1 at Twitch
⏭️  Skipping duplicate: JID_3847d9eb (posted within 7 days)
⏭️ Skipping already posted: Director of Trust & Safety Engineering at vercel
[2026-01-06T17:25:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_19cfc76f (posted within 7 days)
⏭️ Skipping already posted: Software Engineer - Cloud Growth at Temporal Technologies
[2026-01-06T17:25:52.820Z] [BOT] ⏭️  Skipping duplicate: JID_9e3993e2-2026_jr2010848-1 (posted within 7 days)
[2026-01-06T17:25:52.821Z] [BOT] ⏭️ Skipping already posted: DL Algorithms Engineer – New College Graduate 2026 - Cosmos at NVIDIA
[2026-01-06T17:25:52.821Z] [BOT] ⏭️  Skipping duplicate: JID_2a01d90d-2026_jr2008829 (posted within 7 days)
⏭️ Skipping already posted: Research Engineer – PhD New College Grad - Architecture at NVIDIA
[2026-01-06T17:25:52.821Z] [BOT] ⏭️  Skipping duplicate: JID_1a770488-associate_r014247 (posted within 7 days)
⏭️ Skipping already posted: 2026 Polymer Characterization and Thermal Analysis Research Associate at The Aerospace Corporation
⏭️  Skipping duplicate: JID_97f6c11d (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
[2026-01-06T17:25:52.821Z] [BOT] ⏭️  Skipping duplicate: JID_c5bbd236 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at Intuit
[2026-01-06T17:25:52.821Z] [BOT] ⏭️  Skipping duplicate: JID_41c2ce08 (posted within 7 days)
⏭️ Skipping already posted: Software Engineer 1 at American Express
📬 Found 2 new jobs (18 already posted)...
[2026-01-06T17:25:52.821Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2026-01-06T17:25:52.821Z] [BOT] 📋 After data quality filter: 2 jobs (0 invalid)
[2026-01-06T17:25:52.822Z] [BOT] 📋 After multi-location grouping: 2 unique jobs to post
[2026-01-06T17:25:52.822Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-06T17:25:52.822Z] [BOT] 📌 Posting 2 jobs to #🤖・ai-jobs
[2026-01-06T17:25:52.824Z] [BOT] 📍 [ROUTING] "Associate AI Software Engineer - Aht" @ ORG_f3f2248d Grumman
[2026-01-06T17:25:52.824Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T17:25:52.830Z] [BOT ERROR] (node:2894) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-06T17:25:53.022Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer - Aht @ ORG_f3f2248d Grumman in #🤖・ai-jobs
  ✅ Industry: Associate AI Software Engineer - Aht @ ORG_f3f2248d Grumman
[2026-01-06T17:25:54.666Z] [BOT] ✅ Created forum post: 🏢 Associate AI Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2026-01-06T17:25:56.168Z] [BOT] 💾 Marked as posted: Associate AI Software Engineer - Aht @ ORG_f3f2248d Grumman (instance #1)
[2026-01-06T17:25:56.168Z] [BOT] 💾 BEFORE ARCHIVING: 1371 jobs in database
[2026-01-06T17:25:56.170Z] [BOT] ✅ No jobs to archive (all 1371 jobs within 7-day window)
[2026-01-06T17:25:56.185Z] [BOT] 💾 Saved posted_jobs.json: 1371 active jobs
[2026-01-06T17:25:56.185Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-06T17:25:56.186Z] [BOT] 📍 [ROUTING] "Staff Software Engineer, Storage" @ reddit
[2026-01-06T17:25:56.186Z] [BOT] Category: AI (matched: "machine learning")
   Channel: 🤖・ai-jobs (1446...1106)
   ⚠️  Multiple matches: aiMatch, techMatch (using ai)
[2026-01-06T17:25:56.402Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Storage @ reddit in #🤖・ai-jobs
[2026-01-06T17:25:56.402Z] [BOT] ✅ Industry: Staff Software Engineer, Storage @ reddit
[2026-01-06T17:25:58.363Z] [BOT] ✅ Created forum post: 🏢 Staff Software Engineer, Storage @ reddit in #🌧️・seattle
  ✅ Location: 🌧️・seattle
[2026-01-06T17:25:59.864Z] [BOT] 💾 Marked as posted: Staff Software Engineer, Storage @ reddit (instance #1)
[2026-01-06T17:25:59.864Z] [BOT] 💾 BEFORE ARCHIVING: 1372 jobs in database
[2026-01-06T17:25:59.866Z] [BOT] ✅ No jobs to archive (all 1372 jobs within 7-day window)
[2026-01-06T17:25:59.875Z] [BOT] 💾 Saved posted_jobs.json: 1372 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-06T17:26:02.876Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2026-01-06T17:26:02.877Z] [BOT] ⏭️  Skipping duplicate: JID_e3128470-northrop_grumman_external_site-JID_1660dad3-_r10210287 (posted within 7 days)
[2026-01-06T17:26:02.877Z] [BOT] ⏭️  Skipping duplicate: JID_c3c61d5c (posted within 7 days)
[2026-01-06T17:26:02.879Z] [BOT] ✅ Loaded pending queue: 48 total (28 pending, 20 enriched, 0 posted)
[2026-01-06T17:26:02.883Z] [BOT] ✅ Saved pending queue: 48 total (28 pending, 18 enriched, 2 posted)
[2026-01-06T17:26:02.883Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-06T17:26:02.937Z] [BOT] 📂 Loaded 2296 existing routing entries
[2026-01-06T17:26:03.001Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 2298
[2026-01-06T17:26:03.001Z] [BOT] Timestamp: 2026-01-06T17:26:02.984Z
[2026-01-06T17:26:03.001Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_170b1fae.jsonl
[2026-01-06T17:26:03.002Z] [BOT] Total attempts: 22
   Successful: 4
   Failed: 0
   Skipped: 18
[2026-01-06T17:26:03.002Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 4
   Channels used: 3
   Top channels:
     1. #🤖・ai-jobs: 2 posts
     2. #💻・remote-usa: 1 posts
     3. #🌧️・seattle: 1 posts
[STATS] Channel stats saved
[2026-01-06T17:26:05.016Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2894) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*