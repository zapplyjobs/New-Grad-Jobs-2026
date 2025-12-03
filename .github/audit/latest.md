# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T00:14:42.262Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T00:14:31.783Z] ========================================
[2025-12-03T00:14:31.785Z] Discord Bot Execution Log
[2025-12-03T00:14:31.785Z] Environment: GitHub Actions
[2025-12-03T00:14:31.785Z] Node Version: v20.19.6
[2025-12-03T00:14:31.785Z] ========================================
[2025-12-03T00:14:31.785Z] Environment Variables Check:
[2025-12-03T00:14:31.785Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T00:14:31.785Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.785Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T00:14:31.785Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T00:14:31.785Z] 
Multi-Channel Configuration:
[2025-12-03T00:14:31.785Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T00:14:31.786Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T00:14:31.786Z] 
Data Files Check:
[2025-12-03T00:14:31.787Z] .github/data/new_jobs.json: ✅ Exists (5 items, 30528 bytes)
[2025-12-03T00:14:31.789Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333248 bytes)
[2025-12-03T00:14:31.789Z] 
========================================
[2025-12-03T00:14:31.789Z] Starting Enhanced Discord Bot...
[2025-12-03T00:14:31.789Z] ========================================
[2025-12-03T00:14:32.887Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T00:14:32.888Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 5 jobs to encrypted JSON...
[2025-12-03T00:14:32.888Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T00:14:32.966Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2025-12-03T00:14:32.966Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T00:14:32.967Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T00:14:32.967Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T00:14:32.967Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 1 new jobs (4 already posted)...
[2025-12-03T00:14:32.967Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-03T00:14:32.967Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-03T00:14:32.967Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T00:14:32.970Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T00:14:32.970Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
[2025-12-03T00:14:32.970Z] [BOT] Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T00:14:32.975Z] [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T00:14:33.124Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2025-12-03T00:14:33.124Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T00:14:35.033Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
[2025-12-03T00:14:35.033Z] [BOT] ✅ Location: 🤠・austin
[2025-12-03T00:14:36.533Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T00:14:36.534Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T00:14:36.540Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T00:14:36.540Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T00:14:39.541Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-03T00:14:39.579Z] [BOT] 📂 Loaded 637 existing routing entries
[2025-12-03T00:14:39.617Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-03T00:14:39.617Z] [BOT] Total entries: 638
   Timestamp: 2025-12-03T00:14:39.615Z
[2025-12-03T00:14:41.625Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2420) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*