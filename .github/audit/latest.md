# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T03:12:18.335Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 17
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T03:12:07.675Z] ========================================
[2025-12-04T03:12:07.677Z] Discord Bot Execution Log
[2025-12-04T03:12:07.677Z] Environment: GitHub Actions
[2025-12-04T03:12:07.678Z] Node Version: v20.19.6
[2025-12-04T03:12:07.678Z] ========================================
[2025-12-04T03:12:07.678Z] Environment Variables Check:
[2025-12-04T03:12:07.678Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T03:12:07.678Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.678Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T03:12:07.678Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T03:12:07.678Z] 
Multi-Channel Configuration:
[2025-12-04T03:12:07.678Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.678Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T03:12:07.679Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T03:12:07.679Z] 
Data Files Check:
[2025-12-04T03:12:07.680Z] .github/data/new_jobs.json: ✅ Exists (25 items, 147360 bytes)
[2025-12-04T03:12:07.682Z] .github/data/posted_jobs.json: ✅ Exists (3557 items, 239254 bytes)
[2025-12-04T03:12:07.682Z] 
========================================
[2025-12-04T03:12:07.682Z] Starting Enhanced Discord Bot...
[2025-12-04T03:12:07.682Z] ========================================
[2025-12-04T03:12:08.713Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T03:12:08.714Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T03:12:08.714Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T03:12:08.714Z] [BOT] 📦 Exporting 25 jobs to encrypted JSON...
[2025-12-04T03:12:08.799Z] [BOT] ✅ Export complete: Added 0, Skipped 25, Total 25
[2025-12-04T03:12:08.800Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:12:08.801Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:12:08.801Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:12:08.801Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:12:08.801Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:12:08.801Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:12:08.801Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:12:08.802Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:12:08.802Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:12:08.802Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:12:08.802Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:12:08.802Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:12:08.802Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
[2025-12-04T03:12:08.803Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:12:08.803Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 8 new jobs (17 already posted)...
[2025-12-04T03:12:08.803Z] [BOT] 📋 After blacklist filter: 8 jobs (0 blacklisted)
[2025-12-04T03:12:08.805Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
📋 After title+company+location dedup: 1 unique jobs to post
   (7 skipped as duplicate title+company+location combinations)
⏸️ Limiting to 50 jobs this run, 7 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T03:12:08.806Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T03:12:08.806Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
[2025-12-04T03:12:08.806Z] [BOT] Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T03:12:08.811Z] [BOT ERROR] (node:2862) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T03:12:09.324Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-04T03:12:09.325Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-04T03:12:11.097Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
[2025-12-04T03:12:11.098Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-04T03:12:12.598Z] [BOT] 💾 BEFORE SAVE: Database has 3558 jobs
[2025-12-04T03:12:12.605Z] [BOT] 💾 Saved 3558 posted jobs to database
[2025-12-04T03:12:12.605Z] [BOT] ✅ Verified: Database file contains 3558 jobs
[2025-12-04T03:12:15.606Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-04T03:12:15.607Z] [BOT] ✅ Loaded pending queue: 25 total (0 pending, 25 enriched, 0 posted)
[2025-12-04T03:12:15.609Z] [BOT] ✅ Saved pending queue: 25 total (0 pending, 23 enriched, 2 posted)
[2025-12-04T03:12:15.609Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T03:12:15.647Z] [BOT] 📂 Loaded 57 existing routing entries
[2025-12-04T03:12:15.683Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-04T03:12:15.683Z] [BOT] Total entries: 58
   Timestamp: 2025-12-04T03:12:15.683Z
[2025-12-04T03:12:17.695Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2862) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*