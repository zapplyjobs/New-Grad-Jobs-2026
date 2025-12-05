# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T14:50:48.737Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T14:50:37.876Z] ========================================
[2025-12-05T14:50:37.878Z] Discord Bot Execution Log
[2025-12-05T14:50:37.878Z] Environment: GitHub Actions
[2025-12-05T14:50:37.878Z] Node Version: v20.19.6
[2025-12-05T14:50:37.878Z] ========================================
[2025-12-05T14:50:37.878Z] Environment Variables Check:
[2025-12-05T14:50:37.878Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T14:50:37.879Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T14:50:37.879Z] 
Multi-Channel Configuration:
[2025-12-05T14:50:37.879Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.879Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.880Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T14:50:37.880Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T14:50:37.880Z] 
Data Files Check:
[2025-12-05T14:50:37.882Z] .github/data/new_jobs.json: ✅ Exists (24 items, 340738 bytes)
[2025-12-05T14:50:37.883Z] .github/data/posted_jobs.json: ✅ Exists (56 items, 5559 bytes)
[2025-12-05T14:50:37.883Z] 
========================================
[2025-12-05T14:50:37.883Z] Starting Enhanced Discord Bot...
[2025-12-05T14:50:37.883Z] ========================================
[2025-12-05T14:50:39.053Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T14:50:39.054Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T14:50:39.054Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T14:50:39.056Z] [BOT] 📦 Exporting 24 jobs to encrypted JSON...
[2025-12-05T14:50:39.199Z] [BOT] ✅ Export complete: Added 0, Skipped 24, Total 300
[2025-12-05T14:50:39.201Z] [BOT] 📬 Found 24 new jobs (0 already posted)...
[2025-12-05T14:50:39.201Z] [BOT] 📋 After blacklist filter: 24 jobs (0 blacklisted)
[2025-12-05T14:50:39.201Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:50:39.202Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:50:39.202Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:50:39.202Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:50:39.202Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T14:50:39.202Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (23 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 23 deferred for next run
[2025-12-05T14:50:39.202Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T14:50:39.205Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T14:50:39.205Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
[2025-12-05T14:50:39.205Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T14:50:39.210Z] [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T14:50:39.507Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-05T14:50:39.507Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T14:50:41.399Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-05T14:50:41.399Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-05T14:50:42.899Z] [BOT] 💾 BEFORE SAVE: Database has 57 jobs
[2025-12-05T14:50:42.905Z] [BOT] 💾 Saved 57 posted jobs to database
[2025-12-05T14:50:42.905Z] [BOT] ✅ Verified: Database file contains 57 jobs
[2025-12-05T14:50:45.905Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-05T14:50:45.906Z] [BOT] ✅ Loaded pending queue: 24 total (0 pending, 24 enriched, 0 posted)
[2025-12-05T14:50:45.909Z] [BOT] ✅ Saved pending queue: 24 total (0 pending, 16 enriched, 8 posted)
[2025-12-05T14:50:45.909Z] [BOT] 📋 Updated queue: marked 8 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-05T14:50:45.946Z] [BOT] 📂 Loaded 56 existing routing entries
[2025-12-05T14:50:45.982Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 57
[2025-12-05T14:50:45.983Z] [BOT] Timestamp: 2025-12-05T14:50:45.982Z
[2025-12-05T14:50:47.996Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2598) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*