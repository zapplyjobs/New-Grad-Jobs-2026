# Discord Bot Execution Audit
**Timestamp:** 2025-12-06T00:40:10.753Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-06T00:39:59.661Z] ========================================
[2025-12-06T00:39:59.663Z] Discord Bot Execution Log
[2025-12-06T00:39:59.663Z] Environment: GitHub Actions
[2025-12-06T00:39:59.663Z] Node Version: v20.19.6
[2025-12-06T00:39:59.663Z] ========================================
[2025-12-06T00:39:59.663Z] Environment Variables Check:
[2025-12-06T00:39:59.663Z] DISCORD_TOKEN: ✅ Set
[2025-12-06T00:39:59.663Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.663Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-06T00:39:59.664Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-06T00:39:59.664Z] 
Multi-Channel Configuration:
[2025-12-06T00:39:59.664Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-06T00:39:59.664Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-06T00:39:59.665Z] 
Data Files Check:
[2025-12-06T00:39:59.665Z] .github/data/new_jobs.json: ✅ Exists (8 items, 113542 bytes)
[2025-12-06T00:39:59.666Z] .github/data/posted_jobs.json: ✅ Exists (57 items, 5564 bytes)
[2025-12-06T00:39:59.666Z] 
========================================
[2025-12-06T00:39:59.666Z] Starting Enhanced Discord Bot...
[2025-12-06T00:39:59.666Z] ========================================
[2025-12-06T00:40:01.199Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-06T00:40:01.200Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-06T00:40:01.200Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-06T00:40:01.200Z] [BOT] 📦 Exporting 8 jobs to encrypted JSON...
[2025-12-06T00:40:01.338Z] [BOT] ✅ Export complete: Added 0, Skipped 8, Total 311
[2025-12-06T00:40:01.340Z] [BOT] 📬 Found 8 new jobs (0 already posted)...
[2025-12-06T00:40:01.340Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-06T00:40:01.340Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-06T00:40:01.340Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-06T00:40:01.340Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-06T00:40:01.341Z] [BOT] (7 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 7 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-06T00:40:01.343Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-06T00:40:01.344Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
[2025-12-06T00:40:01.344Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-06T00:40:01.348Z] [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-06T00:40:01.595Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-06T00:40:01.595Z] [BOT] ✅ Industry: Technology Delivery Analyst @ ORG_81f16575ington Bancshares
[2025-12-06T00:40:03.275Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-06T00:40:03.275Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-06T00:40:04.775Z] [BOT] 💾 BEFORE SAVE: Database has 58 jobs
[2025-12-06T00:40:04.780Z] [BOT] 💾 Saved 58 posted jobs to database
✅ Verified: Database file contains 58 jobs
[2025-12-06T00:40:07.781Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-06T00:40:07.782Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2025-12-06T00:40:07.783Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 4 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-06T00:40:07.820Z] [BOT] 📂 Loaded 168 existing routing entries
[2025-12-06T00:40:07.855Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 169
   Timestamp: 2025-12-06T00:40:07.855Z
[2025-12-06T00:40:09.864Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2559) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*