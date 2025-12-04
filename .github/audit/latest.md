# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T00:42:24.889Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T00:42:03.292Z] ========================================
[2025-12-04T00:42:03.294Z] Discord Bot Execution Log
[2025-12-04T00:42:03.294Z] Environment: GitHub Actions
[2025-12-04T00:42:03.294Z] Node Version: v20.19.6
[2025-12-04T00:42:03.294Z] ========================================
[2025-12-04T00:42:03.294Z] Environment Variables Check:
[2025-12-04T00:42:03.294Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T00:42:03.294Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.294Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T00:42:03.294Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T00:42:03.294Z] 
Multi-Channel Configuration:
[2025-12-04T00:42:03.295Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T00:42:03.295Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T00:42:03.295Z] 
Data Files Check:
[2025-12-04T00:42:03.296Z] .github/data/new_jobs.json: ✅ Exists (16 items, 93308 bytes)
[2025-12-04T00:42:03.298Z] .github/data/posted_jobs.json: ✅ Exists (3542 items, 237667 bytes)
[2025-12-04T00:42:03.298Z] 
========================================
[2025-12-04T00:42:03.298Z] Starting Enhanced Discord Bot...
[2025-12-04T00:42:03.298Z] ========================================
[2025-12-04T00:42:04.688Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T00:42:04.689Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T00:42:04.689Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T00:42:04.690Z] [BOT] 📦 Exporting 16 jobs to encrypted JSON...
[2025-12-04T00:42:04.774Z] [BOT] ✅ Export complete: Added 0, Skipped 16, Total 16
[2025-12-04T00:42:04.775Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T00:42:04.776Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T00:42:04.776Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T00:42:04.776Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T00:42:04.777Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T00:42:04.777Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T00:42:04.777Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T00:42:04.778Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T00:42:04.778Z] [BOT] 📬 Found 8 new jobs (8 already posted)...
[2025-12-04T00:42:04.778Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-04T00:42:04.778Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T00:42:04.778Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 3 unique jobs to post
   (5 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 5 deferred for next run
📤 Posting 3 jobs...
[2025-12-04T00:42:04.779Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T00:42:04.782Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T00:42:04.782Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst" @ ORG_81f16575ington Bancshares
[2025-12-04T00:42:04.782Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T00:42:04.787Z] [BOT ERROR] (node:2638) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T00:42:05.276Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst @ ORG_81f16575ington Bancshares
[2025-12-04T00:42:07.013Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-04T00:42:07.013Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-04T00:42:08.513Z] [BOT] 💾 BEFORE SAVE: Database has 3543 jobs
[2025-12-04T00:42:08.519Z] [BOT] 💾 Saved 3543 posted jobs to database
✅ Verified: Database file contains 3543 jobs
[2025-12-04T00:42:11.520Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-04T00:42:11.520Z] [BOT] 📍 [ROUTING] "Data Management Support 2" @ ORG_03272755inceton University
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T00:42:11.818Z] [BOT] ✅ Created forum post: 🏢 Data Management Support 2 @ ORG_03272755inceton University in #💻・tech-jobs
[2025-12-04T00:42:11.818Z] [BOT] ✅ Industry: Data Management Support 2 @ ORG_03272755inceton University
[2025-12-04T00:42:13.533Z] [BOT] ✅ Created forum post: 🏢 Data Management Support 2 @ ORG_03272755inceton University in #💻・remote-usa
[2025-12-04T00:42:13.533Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-04T00:42:15.034Z] [BOT] 💾 BEFORE SAVE: Database has 3544 jobs
[2025-12-04T00:42:15.037Z] [BOT] 💾 Saved 3544 posted jobs to database
[2025-12-04T00:42:15.038Z] [BOT] ✅ Verified: Database file contains 3544 jobs
📍 [ROUTING] "Sustainability Engineer" @ ORG_271c5356 Global
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T00:42:15.297Z] [BOT] ✅ Created forum post: 🏢 Sustainability Engineer @ ORG_271c5356 Global in #💻・tech-jobs
[2025-12-04T00:42:15.298Z] [BOT] ✅ Industry: Sustainability Engineer @ ORG_271c5356 Global
[2025-12-04T00:42:17.025Z] [BOT] ✅ Created forum post: 🏢 Sustainability Engineer @ ORG_271c5356 Global in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-04T00:42:18.525Z] [BOT] 💾 BEFORE SAVE: Database has 3545 jobs
[2025-12-04T00:42:18.529Z] [BOT] 💾 Saved 3545 posted jobs to database
[2025-12-04T00:42:18.529Z] [BOT] ✅ Verified: Database file contains 3545 jobs
[2025-12-04T00:42:21.529Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-04T00:42:21.530Z] [BOT] ✅ Loaded pending queue: 16 total (0 pending, 16 enriched, 0 posted)
[2025-12-04T00:42:21.531Z] [BOT] ✅ Saved pending queue: 16 total (0 pending, 11 enriched, 5 posted)
📋 Updated queue: marked 5 jobs as posted
[2025-12-04T00:42:21.532Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-04T00:42:21.571Z] [BOT] 📂 Loaded 42 existing routing entries
[2025-12-04T00:42:21.609Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 45
   Timestamp: 2025-12-04T00:42:21.608Z
[2025-12-04T00:42:23.619Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2638) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*