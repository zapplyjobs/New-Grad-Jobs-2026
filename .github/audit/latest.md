# Discord Bot Execution Audit
**Timestamp:** 2025-12-07T04:42:35.830Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-07T04:42:18.163Z] ========================================
[2025-12-07T04:42:18.165Z] Discord Bot Execution Log
[2025-12-07T04:42:18.165Z] Environment: GitHub Actions
[2025-12-07T04:42:18.165Z] Node Version: v20.19.6
[2025-12-07T04:42:18.165Z] ========================================
[2025-12-07T04:42:18.165Z] Environment Variables Check:
[2025-12-07T04:42:18.165Z] DISCORD_TOKEN: ✅ Set
[2025-12-07T04:42:18.165Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.165Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-07T04:42:18.165Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-07T04:42:18.166Z] 
Multi-Channel Configuration:
[2025-12-07T04:42:18.166Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-07T04:42:18.166Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-07T04:42:18.166Z] 
Data Files Check:
[2025-12-07T04:42:18.167Z] .github/data/new_jobs.json: ✅ Exists (4 items, 41603 bytes)
[2025-12-07T04:42:18.167Z] .github/data/posted_jobs.json: ✅ Exists (46 items, 4534 bytes)
[2025-12-07T04:42:18.167Z] 
========================================
[2025-12-07T04:42:18.167Z] Starting Enhanced Discord Bot...
[2025-12-07T04:42:18.167Z] ========================================
[2025-12-07T04:42:19.521Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-07T04:42:19.522Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 4 jobs to encrypted JSON...
[2025-12-07T04:42:19.522Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-07T04:42:19.669Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 332
[2025-12-07T04:42:19.670Z] [BOT] 📬 Found 4 new jobs (0 already posted)...
[2025-12-07T04:42:19.671Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2025-12-07T04:42:19.671Z] [BOT] ⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Software Engineer 1 at Intuit, Mountain View (already posting one with this combination)
[2025-12-07T04:42:19.671Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
   (2 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 2 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-07T04:42:19.672Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-07T04:42:19.672Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_0bbe3cb1
[2025-12-07T04:42:19.673Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-07T04:42:19.677Z] [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-07T04:42:19.871Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #💻・tech-jobs
[2025-12-07T04:42:19.871Z] [BOT] ✅ Industry: Software Engineer 1 @ ORG_0bbe3cb1
[2025-12-07T04:42:21.581Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_0bbe3cb1 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-12-07T04:42:23.082Z] [BOT] 💾 BEFORE SAVE: Database has 47 jobs
[2025-12-07T04:42:23.089Z] [BOT] 💾 Saved 47 posted jobs to database
✅ Verified: Database file contains 47 jobs
[2025-12-07T04:42:26.091Z] [BOT] 📌 Posting 1 jobs to #JID_fb739488
[2025-12-07T04:42:26.091Z] [BOT] 📍 [ROUTING] "Business Intelligence & Analytics Senior Analyst" @ ORG_9d38443e of Chicago
   Category: DATA-SCIENCE (matched: "data science")
   Channel: JID_fb739488 (1446...2761)
[2025-12-07T04:42:26.292Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago in #JID_fb739488
[2025-12-07T04:42:26.292Z] [BOT] ✅ Industry: Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago
[2025-12-07T04:42:28.025Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence & Analytics Senior Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-12-07T04:42:29.525Z] [BOT] 💾 BEFORE SAVE: Database has 48 jobs
[2025-12-07T04:42:29.531Z] [BOT] 💾 Saved 48 posted jobs to database
[2025-12-07T04:42:29.531Z] [BOT] ✅ Verified: Database file contains 48 jobs
[2025-12-07T04:42:32.531Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-07T04:42:32.532Z] [BOT] ✅ Loaded pending queue: 4 total (0 pending, 4 enriched, 0 posted)
[2025-12-07T04:42:32.533Z] [BOT] ✅ Saved pending queue: 4 total (0 pending, 0 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-07T04:42:32.569Z] [BOT] 📂 Loaded 235 existing routing entries
[2025-12-07T04:42:32.606Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 237
[2025-12-07T04:42:32.606Z] [BOT] Timestamp: 2025-12-07T04:42:32.605Z
[2025-12-07T04:42:34.617Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2381) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*