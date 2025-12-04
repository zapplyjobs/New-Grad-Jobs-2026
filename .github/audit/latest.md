# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T04:01:28.173Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 23
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T04:01:17.760Z] ========================================
[2025-12-04T04:01:17.762Z] Discord Bot Execution Log
[2025-12-04T04:01:17.762Z] Environment: GitHub Actions
[2025-12-04T04:01:17.762Z] Node Version: v20.19.6
[2025-12-04T04:01:17.762Z] ========================================
[2025-12-04T04:01:17.762Z] Environment Variables Check:
[2025-12-04T04:01:17.762Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T04:01:17.762Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.762Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T04:01:17.762Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T04:01:17.763Z] 
Multi-Channel Configuration:
[2025-12-04T04:01:17.763Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T04:01:17.763Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T04:01:17.763Z] 
Data Files Check:
[2025-12-04T04:01:17.765Z] .github/data/new_jobs.json: ✅ Exists (31 items, 182494 bytes)
[2025-12-04T04:01:17.766Z] .github/data/posted_jobs.json: ✅ Exists (3559 items, 239478 bytes)
[2025-12-04T04:01:17.766Z] 
========================================
[2025-12-04T04:01:17.766Z] Starting Enhanced Discord Bot...
[2025-12-04T04:01:17.766Z] ========================================
[2025-12-04T04:01:19.029Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T04:01:19.030Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T04:01:19.030Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T04:01:19.031Z] [BOT] 📦 Exporting 31 jobs to encrypted JSON...
[2025-12-04T04:01:19.112Z] [BOT] ✅ Export complete: Added 0, Skipped 31, Total 31
[2025-12-04T04:01:19.113Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.113Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:01:19.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:01:19.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.115Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.115Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:01:19.115Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.115Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:01:19.115Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.115Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:01:19.116Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:01:19.116Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T04:01:19.116Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T04:01:19.116Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T04:01:19.117Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 8 new jobs (23 already posted)...
[2025-12-04T04:01:19.117Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T04:01:19.117Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T04:01:19.117Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (7 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 7 deferred for next run
[2025-12-04T04:01:19.117Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T04:01:19.120Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T04:01:19.120Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
[2025-12-04T04:01:19.120Z] [BOT] Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T04:01:19.125Z] [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T04:01:19.277Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
  ✅ Industry: Technology Delivery Analyst @ ORG_81f16575ington Bancshares
[2025-12-04T04:01:20.963Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-04T04:01:20.963Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-04T04:01:22.465Z] [BOT] 💾 BEFORE SAVE: Database has 3560 jobs
[2025-12-04T04:01:22.472Z] [BOT] 💾 Saved 3560 posted jobs to database
[2025-12-04T04:01:22.472Z] [BOT] ✅ Verified: Database file contains 3560 jobs
[2025-12-04T04:01:25.474Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-04T04:01:25.475Z] [BOT] ✅ Loaded pending queue: 31 total (0 pending, 31 enriched, 0 posted)
[2025-12-04T04:01:25.478Z] [BOT] ✅ Saved pending queue: 31 total (0 pending, 27 enriched, 4 posted)
[2025-12-04T04:01:25.478Z] [BOT] 📋 Updated queue: marked 4 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T04:01:25.515Z] [BOT] 📂 Loaded 59 existing routing entries
[2025-12-04T04:01:25.551Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-04T04:01:25.552Z] [BOT] Total entries: 60
   Timestamp: 2025-12-04T04:01:25.551Z
[2025-12-04T04:01:27.561Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2535) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*