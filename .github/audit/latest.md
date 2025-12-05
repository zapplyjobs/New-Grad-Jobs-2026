# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T21:49:08.429Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T21:48:57.630Z] ========================================
[2025-12-05T21:48:57.632Z] Discord Bot Execution Log
[2025-12-05T21:48:57.632Z] Environment: GitHub Actions
[2025-12-05T21:48:57.632Z] Node Version: v20.19.6
[2025-12-05T21:48:57.632Z] ========================================
[2025-12-05T21:48:57.632Z] Environment Variables Check:
[2025-12-05T21:48:57.632Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T21:48:57.632Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.632Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T21:48:57.632Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T21:48:57.632Z] 
Multi-Channel Configuration:
[2025-12-05T21:48:57.633Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T21:48:57.633Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T21:48:57.633Z] 
Data Files Check:
[2025-12-05T21:48:57.634Z] .github/data/new_jobs.json: ✅ Exists (9 items, 127865 bytes)
[2025-12-05T21:48:57.635Z] .github/data/posted_jobs.json: ✅ Exists (51 items, 4984 bytes)
[2025-12-05T21:48:57.635Z] 
========================================
[2025-12-05T21:48:57.635Z] Starting Enhanced Discord Bot...
[2025-12-05T21:48:57.635Z] ========================================
[2025-12-05T21:48:58.815Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T21:48:58.816Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T21:48:58.816Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T21:48:58.816Z] [BOT] 📦 Exporting 9 jobs to encrypted JSON...
[2025-12-05T21:48:58.964Z] [BOT] ✅ Export complete: Added 0, Skipped 9, Total 302
[2025-12-05T21:48:58.965Z] [BOT] 📬 Found 9 new jobs (0 already posted)...
[2025-12-05T21:48:58.966Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
[2025-12-05T21:48:58.966Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:48:58.966Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:48:58.966Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T21:48:58.966Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (8 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 8 deferred for next run
📤 Posting 1 jobs...
[2025-12-05T21:48:58.966Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T21:48:58.969Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T21:48:58.970Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
[2025-12-05T21:48:58.970Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T21:48:58.974Z] [BOT ERROR] (node:2575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T21:48:59.156Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-05T21:48:59.156Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T21:49:00.873Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T21:49:02.374Z] [BOT] 💾 BEFORE SAVE: Database has 52 jobs
[2025-12-05T21:49:02.385Z] [BOT] 💾 Saved 52 posted jobs to database
[2025-12-05T21:49:02.385Z] [BOT] ✅ Verified: Database file contains 52 jobs
[2025-12-05T21:49:05.385Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-05T21:49:05.387Z] [BOT] ✅ Loaded pending queue: 9 total (0 pending, 9 enriched, 0 posted)
[2025-12-05T21:49:05.388Z] [BOT] ✅ Saved pending queue: 9 total (0 pending, 6 enriched, 3 posted)
[2025-12-05T21:49:05.388Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T21:49:05.426Z] [BOT] 📂 Loaded 108 existing routing entries
[2025-12-05T21:49:05.463Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 109
   Timestamp: 2025-12-05T21:49:05.463Z
[2025-12-05T21:49:07.480Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2575) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*