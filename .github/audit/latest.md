# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T04:25:36.589Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 26
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T04:25:26.169Z] ========================================
[2025-12-04T04:25:26.171Z] Discord Bot Execution Log
[2025-12-04T04:25:26.171Z] Environment: GitHub Actions
[2025-12-04T04:25:26.171Z] Node Version: v20.19.6
[2025-12-04T04:25:26.171Z] ========================================
[2025-12-04T04:25:26.171Z] Environment Variables Check:
[2025-12-04T04:25:26.171Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T04:25:26.172Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T04:25:26.172Z] 
Multi-Channel Configuration:
[2025-12-04T04:25:26.172Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.172Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T04:25:26.173Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T04:25:26.173Z] 
Data Files Check:
[2025-12-04T04:25:26.174Z] .github/data/new_jobs.json: ✅ Exists (31 items, 184840 bytes)
[2025-12-04T04:25:26.175Z] .github/data/posted_jobs.json: ✅ Exists (3560 items, 239581 bytes)
[2025-12-04T04:25:26.175Z] 
========================================
[2025-12-04T04:25:26.175Z] Starting Enhanced Discord Bot...
[2025-12-04T04:25:26.175Z] ========================================
[2025-12-04T04:25:27.153Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T04:25:27.154Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T04:25:27.154Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T04:25:27.155Z] [BOT] 📦 Exporting 31 jobs to encrypted JSON...
[2025-12-04T04:25:27.241Z] [BOT] ✅ Export complete: Added 0, Skipped 31, Total 31
[2025-12-04T04:25:27.242Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:25:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:25:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:25:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:25:27.246Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 5 new jobs (26 already posted)...
📋 After blacklist filter: 5 jobs (0 blacklisted)
[2025-12-04T04:25:27.246Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (4 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 4 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T04:25:27.249Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T04:25:27.249Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
[2025-12-04T04:25:27.249Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T04:25:27.253Z] [BOT ERROR] (node:2452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T04:25:27.405Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-04T04:25:29.426Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-04T04:25:30.927Z] [BOT] 💾 BEFORE SAVE: Database has 3561 jobs
[2025-12-04T04:25:30.933Z] [BOT] 💾 Saved 3561 posted jobs to database
✅ Verified: Database file contains 3561 jobs
[2025-12-04T04:25:33.935Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-04T04:25:33.936Z] [BOT] ✅ Loaded pending queue: 31 total (0 pending, 31 enriched, 0 posted)
[2025-12-04T04:25:33.938Z] [BOT] ✅ Saved pending queue: 31 total (0 pending, 26 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T04:25:33.975Z] [BOT] 📂 Loaded 60 existing routing entries
[2025-12-04T04:25:34.012Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 61
   Timestamp: 2025-12-04T04:25:34.011Z
[2025-12-04T04:25:36.021Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2452) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*