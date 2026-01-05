# Discord Bot Execution Audit
**Timestamp:** 2026-01-05T21:38:10.520Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2026-01-05T21:37:59.167Z] ========================================
[2026-01-05T21:37:59.169Z] Discord Bot Execution Log
[2026-01-05T21:37:59.170Z] Environment: GitHub Actions
[2026-01-05T21:37:59.170Z] Node Version: v20.19.6
[2026-01-05T21:37:59.170Z] ========================================
[2026-01-05T21:37:59.170Z] Environment Variables Check:
[2026-01-05T21:37:59.170Z] DISCORD_TOKEN: ✅ Set
[2026-01-05T21:37:59.170Z] DISCORD_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.170Z] DISCORD_CLIENT_ID: ❌ Not set
[2026-01-05T21:37:59.170Z] DISCORD_GUILD_ID: ❌ Not set
[2026-01-05T21:37:59.170Z] 
Multi-Channel Configuration:
[2026-01-05T21:37:59.171Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2026-01-05T21:37:59.171Z] 
Multi-Channel Mode: ✅ ENABLED
[2026-01-05T21:37:59.171Z] 
Data Files Check:
[2026-01-05T21:37:59.172Z] .github/data/new_jobs.json: ✅ Exists (1 items, 16363 bytes)
[2026-01-05T21:37:59.177Z] .github/data/posted_jobs.json: ✅ Exists (4 items, 669928 bytes)
[2026-01-05T21:37:59.177Z] 
========================================
[2026-01-05T21:37:59.177Z] Starting Enhanced Discord Bot...
[2026-01-05T21:37:59.177Z] ========================================
[2026-01-05T21:37:59.729Z] [BOT] ✅ Loaded V2 database: 1316 jobs
[2026-01-05T21:38:00.693Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2026-01-05T21:38:00.693Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply.jobs (CH_20db82b8)
[2026-01-05T21:38:00.693Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2026-01-05T21:38:00.694Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[BOT] 📬 Found 1 enriched jobs ready to post from pending queue
[2026-01-05T21:38:00.694Z] [BOT] [BOT] 🔍 Sample enriched job: GTM Strategy Manager  at figma
[2026-01-05T21:38:00.695Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2026-01-05T21:38:00.695Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2026-01-05T21:38:00.695Z] [BOT] 📋 After data quality filter: 1 jobs (0 invalid)
[2026-01-05T21:38:00.696Z] [BOT] 📋 After multi-location grouping: 1 unique jobs to post
[2026-01-05T21:38:00.696Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2026-01-05T21:38:00.699Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2026-01-05T21:38:00.700Z] [BOT] 📍 [ROUTING] "GTM Strategy Manager " @ figma
[2026-01-05T21:38:00.700Z] [BOT] Category: SALES (matched: "sales")
   Channel: 💲・sales-jobs (1391...3632)
[2026-01-05T21:38:00.704Z] [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2026-01-05T21:38:00.885Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy Manager  @ figma in #💲・sales-jobs
[2026-01-05T21:38:00.885Z] [BOT] ✅ Industry: GTM Strategy Manager  @ figma
[2026-01-05T21:38:02.744Z] [BOT] ✅ Created forum post: 🏢 GTM Strategy Manager  @ figma in #🗽・new-york
[2026-01-05T21:38:02.744Z] [BOT] ✅ Location: 🗽・new-york
[2026-01-05T21:38:04.244Z] [BOT] 💾 Marked as posted: GTM Strategy Manager  @ figma (instance #1)
[2026-01-05T21:38:04.244Z] [BOT] 💾 BEFORE ARCHIVING: 1317 jobs in database
[2026-01-05T21:38:04.245Z] [BOT] ✅ No jobs to archive (all 1317 jobs within 7-day window)
[2026-01-05T21:38:04.259Z] [BOT] 💾 Saved posted_jobs.json: 1317 active jobs
✅ Verified: Database file matches in-memory state
[2026-01-05T21:38:07.259Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2026-01-05T21:38:07.259Z] [BOT] ⏭️  Skipping duplicate: JID_98c1a3c8 (posted within 7 days)
[2026-01-05T21:38:07.260Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2026-01-05T21:38:07.261Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2026-01-05T21:38:07.261Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2026-01-05T21:38:07.319Z] [BOT] 📂 Loaded 2227 existing routing entries
[2026-01-05T21:38:07.375Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 2228
   Timestamp: 2026-01-05T21:38:07.364Z
[2026-01-05T21:38:07.376Z] [BOT] 📝 Discord posting log saved: .github/logs/JID_e24e52af.jsonl
[2026-01-05T21:38:07.376Z] [BOT] Total attempts: 2
   Successful: 2
   Failed: 0
   Skipped: 0
[2026-01-05T21:38:07.376Z] [BOT] 📊 CHANNEL STATS SINCE LAST CLEANUP:
   Last cleanup: Never
[2026-01-05T21:38:07.376Z] [BOT] Total posts: 2
   Channels used: 2
   Top channels:
[2026-01-05T21:38:07.376Z] [BOT] 1. #💲・sales-jobs: 1 posts
     2. #🗽・new-york: 1 posts
[2026-01-05T21:38:07.376Z] [BOT] [STATS] Channel stats saved
[2026-01-05T21:38:09.389Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2363) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*