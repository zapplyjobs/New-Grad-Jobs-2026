# Discord Bot Execution Audit
**Timestamp:** 2025-12-05T22:05:06.164Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-05T22:04:55.133Z] ========================================
[2025-12-05T22:04:55.135Z] Discord Bot Execution Log
[2025-12-05T22:04:55.135Z] Environment: GitHub Actions
[2025-12-05T22:04:55.135Z] Node Version: v20.19.6
[2025-12-05T22:04:55.135Z] ========================================
[2025-12-05T22:04:55.135Z] Environment Variables Check:
[2025-12-05T22:04:55.135Z] DISCORD_TOKEN: ✅ Set
[2025-12-05T22:04:55.135Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.135Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-05T22:04:55.136Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-05T22:04:55.136Z] 
Multi-Channel Configuration:
[2025-12-05T22:04:55.136Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-05T22:04:55.136Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-05T22:04:55.136Z] 
Data Files Check:
[2025-12-05T22:04:55.137Z] .github/data/new_jobs.json: ✅ Exists (8 items, 113658 bytes)
[2025-12-05T22:04:55.138Z] .github/data/posted_jobs.json: ✅ Exists (52 items, 5096 bytes)
[2025-12-05T22:04:55.138Z] 
========================================
[2025-12-05T22:04:55.138Z] Starting Enhanced Discord Bot...
[2025-12-05T22:04:55.138Z] ========================================
[2025-12-05T22:04:56.440Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-05T22:04:56.441Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-05T22:04:56.441Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-05T22:04:56.442Z] [BOT] 📦 Exporting 8 jobs to encrypted JSON...
[2025-12-05T22:04:56.596Z] [BOT] ✅ Export complete: Added 0, Skipped 8, Total 302
[2025-12-05T22:04:56.597Z] [BOT] 📬 Found 8 new jobs (0 already posted)...
[2025-12-05T22:04:56.597Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-05T22:04:56.597Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T22:04:56.597Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-05T22:04:56.598Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (7 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 7 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-05T22:04:56.601Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-05T22:04:56.601Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-05T22:04:56.605Z] [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-05T22:04:56.809Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-05T22:04:58.544Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-05T22:05:00.045Z] [BOT] 💾 BEFORE SAVE: Database has 53 jobs
[2025-12-05T22:05:00.049Z] [BOT] 💾 Saved 53 posted jobs to database
✅ Verified: Database file contains 53 jobs
[2025-12-05T22:05:03.050Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-05T22:05:03.052Z] [BOT] ✅ Loaded pending queue: 8 total (0 pending, 8 enriched, 0 posted)
[2025-12-05T22:05:03.053Z] [BOT] ✅ Saved pending queue: 8 total (0 pending, 4 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
[2025-12-05T22:05:03.053Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-05T22:05:03.092Z] [BOT] 📂 Loaded 109 existing routing entries
[2025-12-05T22:05:03.130Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 110
   Timestamp: 2025-12-05T22:05:03.130Z
[2025-12-05T22:05:05.142Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2488) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*