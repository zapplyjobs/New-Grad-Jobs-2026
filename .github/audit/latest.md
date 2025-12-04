# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T01:11:29.715Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 10
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T01:11:18.405Z] ========================================
[2025-12-04T01:11:18.407Z] Discord Bot Execution Log
[2025-12-04T01:11:18.407Z] Environment: GitHub Actions
[2025-12-04T01:11:18.407Z] Node Version: v20.19.6
[2025-12-04T01:11:18.407Z] ========================================
[2025-12-04T01:11:18.407Z] Environment Variables Check:
[2025-12-04T01:11:18.407Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T01:11:18.407Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T01:11:18.408Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T01:11:18.408Z] 
Multi-Channel Configuration:
[2025-12-04T01:11:18.408Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T01:11:18.408Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T01:11:18.409Z] 
Data Files Check:
[2025-12-04T01:11:18.409Z] .github/data/new_jobs.json: ✅ Exists (14 items, 85734 bytes)
[2025-12-04T01:11:18.411Z] .github/data/posted_jobs.json: ✅ Exists (3545 items, 237966 bytes)
[2025-12-04T01:11:18.411Z] 
========================================
[2025-12-04T01:11:18.411Z] Starting Enhanced Discord Bot...
[2025-12-04T01:11:18.411Z] ========================================
[2025-12-04T01:11:19.667Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T01:11:19.668Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T01:11:19.670Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T01:11:19.670Z] [BOT] 📦 Exporting 14 jobs to encrypted JSON...
[2025-12-04T01:11:19.840Z] [BOT] ✅ Export complete: Added 0, Skipped 14, Total 14
[2025-12-04T01:11:19.841Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:11:19.841Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:11:19.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:11:19.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:11:19.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:11:19.842Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:11:19.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:11:19.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:11:19.843Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:11:19.843Z] [BOT] 📬 Found 4 new jobs (10 already posted)...
[2025-12-04T01:11:19.843Z] [BOT] 📋 After blacklist filter: 4 jobs (0 blacklisted)
[2025-12-04T01:11:19.843Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T01:11:19.844Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (3 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 3 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T01:11:19.847Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T01:11:19.847Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T01:11:19.852Z] [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T01:11:20.045Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-04T01:11:20.045Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-04T01:11:21.782Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-04T01:11:21.782Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-04T01:11:23.282Z] [BOT] 💾 BEFORE SAVE: Database has 3546 jobs
[2025-12-04T01:11:23.292Z] [BOT] 💾 Saved 3546 posted jobs to database
[2025-12-04T01:11:23.292Z] [BOT] ✅ Verified: Database file contains 3546 jobs
[2025-12-04T01:11:26.293Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-04T01:11:26.294Z] [BOT] ✅ Loaded pending queue: 14 total (0 pending, 14 enriched, 0 posted)
[2025-12-04T01:11:26.295Z] [BOT] ✅ Saved pending queue: 14 total (0 pending, 10 enriched, 4 posted)
📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T01:11:26.333Z] [BOT] 📂 Loaded 45 existing routing entries
[2025-12-04T01:11:26.370Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 46
   Timestamp: 2025-12-04T01:11:26.370Z
[2025-12-04T01:11:28.380Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2416) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*