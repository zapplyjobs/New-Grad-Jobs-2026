# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T01:10:20.142Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T01:10:08.891Z] ========================================
[2025-12-06T01:10:08.893Z] Discord Bot Execution Log
[2025-12-06T01:10:08.893Z] Environment: GitHub Actions
[2025-12-06T01:10:08.893Z] Node Version: v20.19.6
[2025-12-06T01:10:08.893Z] ========================================
[2025-12-06T01:10:08.893Z] Environment Variables Check:
[2025-12-06T01:10:08.893Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T01:10:08.893Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.893Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T01:10:08.893Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T01:10:08.894Z] 
Multi-Channel Configuration:
[2025-12-06T01:10:08.894Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T01:10:08.894Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T01:10:08.894Z] 
Data Files Check:
[2025-12-06T01:10:08.895Z] .github/data/new_jobs.json: ✅ Exists (5 items, 71037 bytes)
[2025-12-06T01:10:08.895Z] .github/data/posted_jobs.json: ✅ Exists (58 items, 5667 bytes)
[2025-12-06T01:10:08.895Z] 
========================================
[2025-12-06T01:10:08.895Z] Starting Enhanced Discord Bot...
[2025-12-06T01:10:08.895Z] ========================================
[2025-12-06T01:10:10.197Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T01:10:10.198Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-06T01:10:10.198Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T01:10:10.199Z] [BOT] 📦 Exporting 5 jobs to encrypted JSON...
[2025-12-06T01:10:10.345Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 311
[2025-12-06T01:10:10.346Z] [BOT] 📬 Found 5 new jobs (0 already posted)...
[2025-12-06T01:10:10.347Z] [BOT] 📋 After blacklist filter: 5 jobs (0 blacklisted)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (4 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 4 deferred for next run
[2025-12-06T01:10:10.347Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T01:10:10.351Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-06T01:10:10.351Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
[2025-12-06T01:10:10.351Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-06T01:10:10.355Z] [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T01:10:10.658Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-06T01:10:10.658Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-06T01:10:12.380Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-06T01:10:13.879Z] [BOT] 💾 BEFORE SAVE: Database has 59 jobs
[2025-12-06T01:10:13.883Z] [BOT] 💾 Saved 59 posted jobs to database
[2025-12-06T01:10:13.884Z] [BOT] ✅ Verified: Database file contains 59 jobs
[2025-12-06T01:10:16.885Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-06T01:10:16.886Z] [BOT] ✅ Loaded pending queue: 5 total (0 pending, 5 enriched, 0 posted)
[2025-12-06T01:10:16.887Z] [BOT] ✅ Saved pending queue: 5 total (0 pending, 0 enriched, 5 posted)
[2025-12-06T01:10:16.887Z] [BOT] 📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-06T01:10:16.924Z] [BOT] 📂 Loaded 169 existing routing entries
[2025-12-06T01:10:16.960Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 170
   Timestamp: 2025-12-06T01:10:16.960Z
[2025-12-06T01:10:18.970Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2455) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*