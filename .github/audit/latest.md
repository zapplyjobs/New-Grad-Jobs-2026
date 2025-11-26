# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T06:22:53.802Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T06:22:42.989Z] ========================================
[2025-11-26T06:22:42.990Z] Discord Bot Execution Log
[2025-11-26T06:22:42.990Z] Environment: GitHub Actions
[2025-11-26T06:22:42.990Z] Node Version: v20.19.5
[2025-11-26T06:22:42.990Z] ========================================
[2025-11-26T06:22:42.990Z] Environment Variables Check:
[2025-11-26T06:22:42.990Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T06:22:42.990Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.990Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T06:22:42.991Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T06:22:42.991Z] 
Multi-Channel Configuration:
[2025-11-26T06:22:42.991Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T06:22:42.991Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T06:22:42.991Z] 
Data Files Check:
[2025-11-26T06:22:42.991Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19802 bytes)
[2025-11-26T06:22:42.993Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328407 bytes)
[2025-11-26T06:22:42.993Z] 
========================================
[2025-11-26T06:22:42.993Z] Starting Enhanced Discord Bot...
[2025-11-26T06:22:42.993Z] ========================================
[2025-11-26T06:22:44.179Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T06:22:44.179Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-26T06:22:44.179Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T06:22:44.257Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-26T06:22:44.258Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T06:22:44.258Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
[2025-11-26T06:22:44.258Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T06:22:44.259Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-26T06:22:44.259Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-26T06:22:44.259Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-11-26T06:22:44.259Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T06:22:44.263Z] [BOT ERROR] (node:2311) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T06:22:44.445Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T06:22:44.445Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T06:22:46.116Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T06:22:46.116Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T06:22:47.617Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T06:22:50.617Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T06:22:50.654Z] [BOT] 📂 Loaded 142 existing routing entries
[2025-11-26T06:22:50.690Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 143
   Timestamp: 2025-11-26T06:22:50.689Z
[2025-11-26T06:22:52.696Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2311) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*