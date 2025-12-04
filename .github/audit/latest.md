# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T03:41:35.745Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 20
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T03:41:24.384Z] ========================================
[2025-12-04T03:41:24.386Z] Discord Bot Execution Log
[2025-12-04T03:41:24.386Z] Environment: GitHub Actions
[2025-12-04T03:41:24.386Z] Node Version: v20.19.6
[2025-12-04T03:41:24.386Z] ========================================
[2025-12-04T03:41:24.386Z] Environment Variables Check:
[2025-12-04T03:41:24.386Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T03:41:24.386Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.386Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T03:41:24.387Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T03:41:24.387Z] 
Multi-Channel Configuration:
[2025-12-04T03:41:24.387Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T03:41:24.387Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T03:41:24.387Z] 
Data Files Check:
[2025-12-04T03:41:24.389Z] .github/data/new_jobs.json: ✅ Exists (29 items, 170049 bytes)
[2025-12-04T03:41:24.390Z] .github/data/posted_jobs.json: ✅ Exists (3558 items, 239366 bytes)
[2025-12-04T03:41:24.390Z] 
========================================
[2025-12-04T03:41:24.390Z] Starting Enhanced Discord Bot...
[2025-12-04T03:41:24.390Z] ========================================
[2025-12-04T03:41:25.642Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T03:41:25.643Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T03:41:25.643Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T03:41:25.644Z] [BOT] 📦 Exporting 29 jobs to encrypted JSON...
[2025-12-04T03:41:25.729Z] [BOT] ✅ Export complete: Added 0, Skipped 29, Total 29
[2025-12-04T03:41:25.730Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:41:25.730Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:41:25.731Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:41:25.731Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:41:25.731Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:41:25.731Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:41:25.731Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:41:25.731Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:41:25.732Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T03:41:25.733Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T03:41:25.733Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): ROLE_414dfe4f at Leidos
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 9 new jobs (20 already posted)...
[2025-12-04T03:41:25.733Z] [BOT] 📋 After blacklist filter: 9 jobs (0 blacklisted)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T03:41:25.734Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T03:41:25.734Z] [BOT] ⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst at Huntington Bancshares, Columbus (already posting one with this combination)
⏭️ Skipping duplicate title+company+location: Technology Delivery Analyst - Elevate at Huntington Bancshares, Columbus (already posting one with this combination)
[2025-12-04T03:41:25.734Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
   (8 skipped as duplicate title+company+location combinations)
[2025-12-04T03:41:25.734Z] [BOT] ⏸️ Limiting to 50 jobs this run, 8 deferred for next run
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T03:41:25.737Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-04T03:41:25.737Z] [BOT] 📍 [ROUTING] "Technology Delivery Analyst - Elevate" @ ORG_81f16575ington Bancshares
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-04T03:41:25.742Z] [BOT ERROR] (node:2705) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T03:41:26.026Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #📁・JID_e938df7b
[2025-12-04T03:41:26.026Z] [BOT] ✅ Industry: Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares
[2025-12-04T03:41:27.924Z] [BOT] ✅ Created forum post: 🏢 Technology Delivery Analyst - Elevate @ ORG_81f16575ington Bancshares in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-04T03:41:29.424Z] [BOT] 💾 BEFORE SAVE: Database has 3559 jobs
[2025-12-04T03:41:29.430Z] [BOT] 💾 Saved 3559 posted jobs to database
[2025-12-04T03:41:29.430Z] [BOT] ✅ Verified: Database file contains 3559 jobs
[2025-12-04T03:41:32.431Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-04T03:41:32.432Z] [BOT] ✅ Loaded pending queue: 29 total (0 pending, 29 enriched, 0 posted)
[2025-12-04T03:41:32.434Z] [BOT] ✅ Saved pending queue: 29 total (0 pending, 26 enriched, 3 posted)
[2025-12-04T03:41:32.434Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-04T03:41:32.472Z] [BOT] 📂 Loaded 58 existing routing entries
[2025-12-04T03:41:32.510Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-04T03:41:32.510Z] [BOT] Total entries: 59
   Timestamp: 2025-12-04T03:41:32.509Z
[2025-12-04T03:41:34.520Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2705) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*