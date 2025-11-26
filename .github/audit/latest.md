# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T04:49:22.998Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T04:49:12.172Z] ========================================
[2025-11-26T04:49:12.174Z] Discord Bot Execution Log
[2025-11-26T04:49:12.174Z] Environment: GitHub Actions
[2025-11-26T04:49:12.174Z] Node Version: v20.19.5
[2025-11-26T04:49:12.174Z] ========================================
[2025-11-26T04:49:12.174Z] Environment Variables Check:
[2025-11-26T04:49:12.174Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T04:49:12.174Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T04:49:12.174Z] 
Multi-Channel Configuration:
[2025-11-26T04:49:12.174Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T04:49:12.174Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T04:49:12.175Z] 
Data Files Check:
[2025-11-26T04:49:12.175Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19802 bytes)
[2025-11-26T04:49:12.177Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328350 bytes)
[2025-11-26T04:49:12.177Z] 
========================================
[2025-11-26T04:49:12.177Z] Starting Enhanced Discord Bot...
[2025-11-26T04:49:12.177Z] ========================================
[2025-11-26T04:49:13.410Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T04:49:13.410Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-26T04:49:13.410Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T04:49:13.485Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-26T04:49:13.486Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T04:49:13.486Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T04:49:13.487Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-26T04:49:13.487Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-26T04:49:13.487Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-11-26T04:49:13.487Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T04:49:13.492Z] [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T04:49:13.672Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T04:49:13.672Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T04:49:15.350Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T04:49:16.853Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T04:49:19.853Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T04:49:19.889Z] [BOT] 📂 Loaded 135 existing routing entries
[2025-11-26T04:49:19.925Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 136
   Timestamp: 2025-11-26T04:49:19.924Z
[2025-11-26T04:49:21.933Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*