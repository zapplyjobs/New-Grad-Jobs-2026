# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T14:39:12.608Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T14:39:01.137Z] ========================================
[2025-12-05T14:39:01.139Z] Discord Bot Execution Log
[2025-12-05T14:39:01.139Z] Environment: GitHub Actions
[2025-12-05T14:39:01.139Z] Node Version: v20.19.6
[2025-12-05T14:39:01.139Z] ========================================
[2025-12-05T14:39:01.139Z] Environment Variables Check:
[2025-12-05T14:39:01.139Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T14:39:01.139Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.139Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T14:39:01.140Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T14:39:01.140Z] 
Multi-Channel Configuration:
[2025-12-05T14:39:01.140Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.140Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T14:39:01.141Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T14:39:01.141Z] 
Data Files Check:
[2025-12-05T14:39:01.144Z] .github/data/new_jobs.json: ✅ Exists (28 items, 397595 bytes)
[2025-12-05T14:39:01.144Z] .github/data/posted_jobs.json: ✅ Exists (55 items, 5447 bytes)
[2025-12-05T14:39:01.144Z] 
========================================
[2025-12-05T14:39:01.144Z] Starting Enhanced Discord Bot...
[2025-12-05T14:39:01.145Z] ========================================
[2025-12-05T14:39:02.759Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T14:39:02.759Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T14:39:02.760Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T14:39:02.761Z] [BOT] 📦 Exporting 28 jobs to encrypted JSON...
[2025-12-05T14:39:02.902Z] [BOT] ✅ Export complete: Added 0, Skipped 28, Total 300
[2025-12-05T14:39:02.905Z] [BOT] 📬 Found 28 new jobs (0 already posted)...
[2025-12-05T14:39:02.905Z] [BOT] 📋 After blacklist filter: 28 jobs (0 blacklisted)
[2025-12-05T14:39:02.905Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:39:02.905Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:39:02.905Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:39:02.905Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:39:02.906Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:39:02.906Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:39:02.906Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (27 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 27 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T14:39:02.909Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T14:39:02.909Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
[2025-12-05T14:39:02.909Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T14:39:02.914Z] [BOT ERROR] (node:2667) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T14:39:03.163Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-05T14:39:03.163Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T14:39:04.887Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-05T14:39:04.888Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T14:39:06.388Z] [BOT] 💾 BEFORE SAVE: Database has 56 jobs
[2025-12-05T14:39:06.395Z] [BOT] 💾 Saved 56 posted jobs to database
✅ Verified: Database file contains 56 jobs
[2025-12-05T14:39:09.396Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-05T14:39:09.398Z] [BOT] ✅ Loaded pending queue: 28 total (0 pending, 28 enriched, 0 posted)
[2025-12-05T14:39:09.401Z] [BOT] ✅ Saved pending queue: 28 total (0 pending, 21 enriched, 7 posted)
📋 Updated queue: marked 7 jobs as posted
[2025-12-05T14:39:09.401Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-05T14:39:09.437Z] [BOT] 📂 Loaded 55 existing routing entries
[2025-12-05T14:39:09.473Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-05T14:39:09.474Z] [BOT] Total entries: 56
   Timestamp: 2025-12-05T14:39:09.473Z
[2025-12-05T14:39:11.489Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2667) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*