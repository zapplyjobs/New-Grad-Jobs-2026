# Discord Bot Execution Audit
**Timestamp:** 2025-12-07T04:26:16.212Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-07T04:26:04.069Z] ========================================
[2025-12-07T04:26:04.071Z] Discord Bot Execution Log
[2025-12-07T04:26:04.071Z] Environment: GitHub Actions
[2025-12-07T04:26:04.071Z] Node Version: v20.19.6
[2025-12-07T04:26:04.071Z] ========================================
[2025-12-07T04:26:04.071Z] Environment Variables Check:
[2025-12-07T04:26:04.071Z] DISCORD_TOKEN: ✅ Set
[2025-12-07T04:26:04.071Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.071Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-07T04:26:04.071Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-07T04:26:04.071Z] 
Multi-Channel Configuration:
[2025-12-07T04:26:04.071Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.071Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.071Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.071Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.071Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.071Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.072Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.072Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.072Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-07T04:26:04.072Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-07T04:26:04.072Z] 
Data Files Check:
[2025-12-07T04:26:04.072Z] .github/data/new_jobs.json: ✅ Exists (4 items, 30505 bytes)
[2025-12-07T04:26:04.072Z] .github/data/posted_jobs.json: ✅ Exists (45 items, 4457 bytes)
[2025-12-07T04:26:04.072Z] 
========================================
[2025-12-07T04:26:04.072Z] Starting Enhanced Discord Bot...
[2025-12-07T04:26:04.072Z] ========================================
[2025-12-07T04:26:05.917Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-07T04:26:05.918Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 4 jobs to encrypted JSON...
[2025-12-07T04:26:05.918Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-07T04:26:06.090Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 332
[2025-12-07T04:26:06.092Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-07T04:26:06.092Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
[2025-12-07T04:26:06.092Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (3 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 3 deferred for next run
📤 Posting 1 jobs...
[2025-12-07T04:26:06.092Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-07T04:26:06.093Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-07T04:26:06.094Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:26:06.098Z] [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-07T04:26:06.336Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-07T04:26:08.462Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-07T04:26:09.963Z] [BOT] 💾 BEFORE SAVE: Database has 46 jobs
[2025-12-07T04:26:09.973Z] [BOT] 💾 Saved 46 posted jobs to database
✅ Verified: Database file contains 46 jobs
[2025-12-07T04:26:12.973Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-07T04:26:12.974Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-07T04:26:12.975Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 2 enriched, 2 posted)
[2025-12-07T04:26:12.976Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-07T04:26:13.016Z] [BOT] 📂 Loaded 234 existing routing entries
[2025-12-07T04:26:13.058Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 235
   Timestamp: 2025-12-07T04:26:13.057Z
[2025-12-07T04:26:15.073Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*