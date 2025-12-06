# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T14:35:50.160Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T14:35:38.549Z] ========================================
[2025-12-06T14:35:38.551Z] Discord Bot Execution Log
[2025-12-06T14:35:38.551Z] Environment: GitHub Actions
[2025-12-06T14:35:38.551Z] Node Version: v20.19.6
[2025-12-06T14:35:38.551Z] ========================================
[2025-12-06T14:35:38.551Z] Environment Variables Check:
[2025-12-06T14:35:38.551Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T14:35:38.551Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.551Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T14:35:38.552Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T14:35:38.552Z] 
Multi-Channel Configuration:
[2025-12-06T14:35:38.552Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T14:35:38.552Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T14:35:38.552Z] 
Data Files Check:
[2025-12-06T14:35:38.553Z] .github/data/new_jobs.json: ✅ Exists (2 items, 15435 bytes)
[2025-12-06T14:35:38.553Z] .github/data/posted_jobs.json: ✅ Exists (76 items, 7465 bytes)
[2025-12-06T14:35:38.553Z] 
========================================
[2025-12-06T14:35:38.553Z] Starting Enhanced Discord Bot...
[2025-12-06T14:35:38.553Z] ========================================
[2025-12-06T14:35:40.337Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T14:35:40.337Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-06T14:35:40.338Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T14:35:40.492Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 329
[2025-12-06T14:35:40.493Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-06T14:35:40.494Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (1 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 1 deferred for next run
📤 Posting 1 jobs...
[2025-12-06T14:35:40.494Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T14:35:40.495Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-06T14:35:40.495Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-06T14:35:40.495Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-06T14:35:40.499Z] [BOT ERROR] (node:2289) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T14:35:40.775Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2025-12-06T14:35:40.776Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-06T14:35:42.506Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-06T14:35:44.006Z] [BOT] 💾 BEFORE SAVE: Database has 77 jobs
[2025-12-06T14:35:44.021Z] [BOT] 💾 Saved 77 posted jobs to database
✅ Verified: Database file contains 77 jobs
[2025-12-06T14:35:47.020Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-06T14:35:47.021Z] [BOT] ✅ Loaded pending queue: 2 total (0 pending, 2 enriched, 0 posted)
[2025-12-06T14:35:47.021Z] [BOT] ✅ Saved pending queue: 2 total (0 pending, 0 enriched, 2 posted)
[2025-12-06T14:35:47.021Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-06T14:35:47.060Z] [BOT] 📂 Loaded 187 existing routing entries
[2025-12-06T14:35:47.097Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 188
   Timestamp: 2025-12-06T14:35:47.097Z
[2025-12-06T14:35:49.111Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2289) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*