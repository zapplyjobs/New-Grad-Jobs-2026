# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T23:34:21.972Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-28T23:34:10.885Z] ========================================
[2025-11-28T23:34:10.887Z] Discord Bot Execution Log
[2025-11-28T23:34:10.887Z] Environment: GitHub Actions
[2025-11-28T23:34:10.887Z] Node Version: v20.19.5
[2025-11-28T23:34:10.887Z] ========================================
[2025-11-28T23:34:10.887Z] Environment Variables Check:
[2025-11-28T23:34:10.887Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T23:34:10.887Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.887Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T23:34:10.887Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T23:34:10.887Z] 
Multi-Channel Configuration:
[2025-11-28T23:34:10.887Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T23:34:10.888Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T23:34:10.888Z] 
Data Files Check:
[2025-11-28T23:34:10.889Z] .github/data/new_jobs.json: ✅ Exists (2 items, 10791 bytes)
[2025-11-28T23:34:10.890Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330522 bytes)
[2025-11-28T23:34:10.891Z] 
========================================
[2025-11-28T23:34:10.891Z] Starting Enhanced Discord Bot...
[2025-11-28T23:34:10.891Z] ========================================
[2025-11-28T23:34:12.025Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T23:34:12.026Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-28T23:34:12.026Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T23:34:12.104Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-11-28T23:34:12.105Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T23:34:12.105Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-11-28T23:34:12.105Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-28T23:34:12.106Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-28T23:34:12.106Z] [BOT] 📍 [ROUTING] "Data Analyst 1" @ ORG_ca445e86 Pro Shops
[2025-11-28T23:34:12.106Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T23:34:12.111Z] [BOT ERROR] (node:2311) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T23:34:12.335Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_ca445e86 Pro Shops in #💻・tech-jobs
[2025-11-28T23:34:12.335Z] [BOT] ✅ Industry: Data Analyst 1 @ ORG_ca445e86 Pro Shops
[2025-11-28T23:34:14.134Z] [BOT] ✅ Created forum post: 🏢 Data Analyst 1 @ ORG_ca445e86 Pro Shops in #💻・remote-usa
[2025-11-28T23:34:14.134Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-28T23:34:15.635Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T23:34:15.635Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T23:34:15.641Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T23:34:15.641Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T23:34:18.642Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-28T23:34:18.681Z] [BOT] 📂 Loaded 537 existing routing entries
[2025-11-28T23:34:18.720Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-11-28T23:34:18.720Z] [BOT] Total entries: 538
   Timestamp: 2025-11-28T23:34:18.718Z
[2025-11-28T23:34:20.729Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2311) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*