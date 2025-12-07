# Discord Bot Execution Audit
**Timestamp:** 2025-12-07T05:05:00.952Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-07T05:04:49.880Z] ========================================
[2025-12-07T05:04:49.882Z] Discord Bot Execution Log
[2025-12-07T05:04:49.882Z] Environment: GitHub Actions
[2025-12-07T05:04:49.882Z] Node Version: v20.19.6
[2025-12-07T05:04:49.882Z] ========================================
[2025-12-07T05:04:49.882Z] Environment Variables Check:
[2025-12-07T05:04:49.882Z] DISCORD_TOKEN: ✅ Set
[2025-12-07T05:04:49.882Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.882Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-07T05:04:49.882Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-07T05:04:49.882Z] 
Multi-Channel Configuration:
[2025-12-07T05:04:49.882Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.882Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.882Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.883Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.883Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.883Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.883Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.883Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.883Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-07T05:04:49.883Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-07T05:04:49.883Z] 
Data Files Check:
[2025-12-07T05:04:49.883Z] .github/data/new_jobs.json: ✅ Exists (1 items, 17779 bytes)
[2025-12-07T05:04:49.883Z] .github/data/posted_jobs.json: ✅ Exists (48 items, 4722 bytes)
[2025-12-07T05:04:49.883Z] 
========================================
[2025-12-07T05:04:49.883Z] Starting Enhanced Discord Bot...
[2025-12-07T05:04:49.884Z] ========================================
[2025-12-07T05:04:51.282Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-07T05:04:51.282Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-07T05:04:51.283Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-07T05:04:51.439Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 332
[2025-12-07T05:04:51.440Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-07T05:04:51.440Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-07T05:04:51.440Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-07T05:04:51.444Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-07T05:04:51.444Z] [BOT] 📍 [ROUTING] "Process Analyst 1" @ ORG_f62822f0
[2025-12-07T05:04:51.444Z] [BOT] Category: MARKETING (matched: "brand")
[2025-12-07T05:04:51.444Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-07T05:04:51.448Z] [BOT ERROR] (node:2392) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-07T05:04:51.720Z] [BOT] ✅ Created forum post: 🏢 Process Analyst 1 @ ORG_f62822f0 in #📣・marketing-jobs
  ✅ Industry: Process Analyst 1 @ ORG_f62822f0
[2025-12-07T05:04:53.377Z] [BOT] ✅ Created forum post: 🏢 Process Analyst 1 @ ORG_f62822f0 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-07T05:04:54.877Z] [BOT] 💾 BEFORE SAVE: Database has 49 jobs
[2025-12-07T05:04:54.881Z] [BOT] 💾 Saved 49 posted jobs to database
[2025-12-07T05:04:54.881Z] [BOT] ✅ Verified: Database file contains 49 jobs
[2025-12-07T05:04:57.882Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-07T05:04:57.883Z] [BOT] ✅ Loaded pending queue: 1 total (0 pending, 1 enriched, 0 posted)
[2025-12-07T05:04:57.883Z] [BOT] ✅ Saved pending queue: 1 total (0 pending, 0 enriched, 1 posted)
[2025-12-07T05:04:57.883Z] [BOT] 📋 Updated queue: marked 1 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-07T05:04:57.920Z] [BOT] 📂 Loaded 237 existing routing entries
[2025-12-07T05:04:57.956Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 238
   Timestamp: 2025-12-07T05:04:57.955Z
[2025-12-07T05:04:59.967Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2392) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*