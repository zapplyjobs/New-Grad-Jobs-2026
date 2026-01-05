# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T20:40:47.354Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T20:40:36.784Z] ========================================
[2026-01-05T20:40:36.786Z] Discord Bot Execution Log
[2026-01-05T20:40:36.786Z] Environment: GitHub Actions
[2026-01-05T20:40:36.786Z] Node Version: v20.19.6
[2026-01-05T20:40:36.786Z] ========================================
[2026-01-05T20:40:36.786Z] Environment Variables Check:
[2026-01-05T20:40:36.786Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T20:40:36.786Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.786Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T20:40:36.787Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T20:40:36.787Z] 
Multi-Channel Configuration:
[2026-01-05T20:40:36.787Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T20:40:36.787Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T20:40:36.787Z] 
Data Files Check:
[2026-01-05T20:40:36.788Z] .github/data/new_jobs.json: ✅ Exists (1 items, 16810 bytes)
[2026-01-05T20:40:36.793Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 668855 bytes)
[2026-01-05T20:40:36.793Z] 
========================================
[2026-01-05T20:40:36.793Z] Starting Enhanced Discord Bot...
[2026-01-05T20:40:36.793Z] ========================================
[2026-01-05T20:40:37.320Z] [BOT] ✅ Loaded V2 database: 1314 jobs
[2026-01-05T20:40:37.861Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T20:40:37.862Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T20:40:37.862Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T20:40:37.862Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T20:40:37.862Z] [BOT] [BOT] 📬 Found 1 enriched jobs ready to post from pending queue
[BOT] 🔍 Sample enriched job: Senior Manager, Enterprise Sales- Figma Weave (New York, United States) at figma
[2026-01-05T20:40:37.864Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-05T20:40:37.864Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-05T20:40:37.864Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T20:40:37.864Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T20:40:37.865Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T20:40:37.867Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T20:40:37.868Z] [BOT] 📍 [ROUTING] "Senior Manager, Enterprise Sales- Figma Weave (New York, United States)" @ figma
   Category: SALES (matched: "sales")
[2026-01-05T20:40:37.869Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T20:40:37.873Z] [BOT ERROR] (node:2422) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T20:40:38.224Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Enterprise Sales- Figma Weave (New York, United States) @ figma in #💲・sales-jobs
  ✅ Industry: Senior Manager, Enterprise Sales- Figma Weave (New York, United States) @ figma
[2026-01-05T20:40:39.935Z] [BOT] ✅ Created forum post: 🏢 Senior Manager, Enterprise Sales- Figma Weave (New York, United States) @ figma in #🗽・new-york
  ✅ Location: 🗽・new-york
[2026-01-05T20:40:41.436Z] [BOT] 💾 Marked as posted: Senior Manager, Enterprise Sales- Figma Weave (New York, United States) @ figma (instance #1)
[2026-01-05T20:40:41.437Z] [BOT] 💾 BEFORE ARCHIVING: 1315 jobs in database
[2026-01-05T20:40:41.438Z] [BOT] ✅ No jobs to archive (all 1315 jobs within 7-day window)
[2026-01-05T20:40:41.450Z] [BOT] 💾 Saved posted_jobs.json: 1315 active jobs
[2026-01-05T20:40:41.450Z] [BOT] ✅ Verified: Database file matches in-memory state
[2026-01-05T20:40:44.451Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T20:40:44.452Z] [BOT] ⏭️  Skipping duplicate: JID_744ef2b2 (posted within 7 days)
[2026-01-05T20:40:44.452Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T20:40:44.453Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T20:40:44.506Z] [BOT] 📂 Loaded 2225 existing routing entries
[2026-01-05T20:40:44.561Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2226
   Timestamp: 2026-01-05T20:40:44.550Z
[2026-01-05T20:40:44.561Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
   Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-05T20:40:44.562Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
   Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-05T20:40:44.562Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-05T20:40:44.562Z] [BOT] [STATS] Channel stats saved
[2026-01-05T20:40:46.571Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2422) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*