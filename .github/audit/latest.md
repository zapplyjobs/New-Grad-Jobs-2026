# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T22:23:25.261Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T22:23:14.462Z] ========================================
[2025-12-05T22:23:14.463Z] Discord Bot Execution Log
[2025-12-05T22:23:14.463Z] Environment: GitHub Actions
[2025-12-05T22:23:14.464Z] Node Version: v20.19.6
[2025-12-05T22:23:14.464Z] ========================================
[2025-12-05T22:23:14.464Z] Environment Variables Check:
[2025-12-05T22:23:14.464Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T22:23:14.464Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.464Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T22:23:14.464Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T22:23:14.464Z] 
Multi-Channel Configuration:
[2025-12-05T22:23:14.464Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.464Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T22:23:14.465Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T22:23:14.465Z] 
Data Files Check:
[2025-12-05T22:23:14.466Z] .github/data/new_jobs.json: ✅ Exists (5 items, 71037 bytes)
[2025-12-05T22:23:14.466Z] .github/data/posted_jobs.json: ✅ Exists (53 items, 5208 bytes)
[2025-12-05T22:23:14.466Z] 
========================================
[2025-12-05T22:23:14.466Z] Starting Enhanced Discord Bot...
[2025-12-05T22:23:14.466Z] ========================================
[2025-12-05T22:23:15.957Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T22:23:15.958Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 5 jobs to encrypted JSON...
[2025-12-05T22:23:15.958Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T22:23:16.100Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 302
[2025-12-05T22:23:16.101Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2025-12-05T22:23:16.101Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-05T22:23:16.101Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T22:23:16.101Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (4 skipped as duplicate title+company+location combinations)
[2025-12-05T22:23:16.102Z] [BOT] ⏸️ Limiting to 50 jobs this run, 4 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T22:23:16.104Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T22:23:16.105Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T22:23:16.109Z] [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T22:23:16.380Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-05T22:23:16.380Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T22:23:18.064Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-05T22:23:18.064Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T22:23:19.565Z] [BOT] 💾 BEFORE SAVE: Database has 54 jobs
[2025-12-05T22:23:19.569Z] [BOT] 💾 Saved 54 posted jobs to database
[2025-12-05T22:23:19.569Z] [BOT] ✅ Verified: Database file contains 54 jobs
[2025-12-05T22:23:22.570Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-05T22:23:22.571Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2025-12-05T22:23:22.572Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 0 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T22:23:22.609Z] [BOT] 📂 Loaded 110 existing routing entries
[2025-12-05T22:23:22.645Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 111
   Timestamp: 2025-12-05T22:23:22.644Z
[2025-12-05T22:23:24.660Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2388) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*