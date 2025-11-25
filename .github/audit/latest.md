# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T02:30:51.356Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T02:30:40.622Z] ========================================
[2025-11-25T02:30:40.623Z] Discord Bot Execution Log
[2025-11-25T02:30:40.623Z] Environment: GitHub Actions
[2025-11-25T02:30:40.623Z] Node Version: v20.19.5
[2025-11-25T02:30:40.623Z] ========================================
[2025-11-25T02:30:40.623Z] Environment Variables Check:
[2025-11-25T02:30:40.624Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T02:30:40.624Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T02:30:40.624Z] 
Multi-Channel Configuration:
[2025-11-25T02:30:40.624Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T02:30:40.624Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T02:30:40.624Z] 
Data Files Check:
[2025-11-25T02:30:40.625Z] .github/data/new_jobs.json: ✅ Exists (1 items, 5162 bytes)
[2025-11-25T02:30:40.626Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327651 bytes)
[2025-11-25T02:30:40.626Z] 
========================================
[2025-11-25T02:30:40.626Z] Starting Enhanced Discord Bot...
[2025-11-25T02:30:40.626Z] ========================================
[2025-11-25T02:30:41.809Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T02:30:41.809Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T02:30:41.809Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T02:30:41.848Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-25T02:30:41.849Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
📤 Posting 1 jobs...
[2025-11-25T02:30:41.849Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T02:30:41.849Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T02:30:41.849Z] [BOT] 📍 [ROUTING] "Software Engineer 1" @ ORG_7b717950
   Category: TECH (matched: "software")
[2025-11-25T02:30:41.849Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T02:30:41.854Z] [BOT ERROR] (node:2217) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T02:30:42.083Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #💻・tech-jobs
  ✅ Industry: Software Engineer 1 @ ORG_7b717950
[2025-11-25T02:30:43.764Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 @ ORG_7b717950 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-25T02:30:45.267Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T02:30:48.268Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T02:30:48.306Z] [BOT] 📂 Loaded 15 existing routing entries
[2025-11-25T02:30:48.342Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 16
   Timestamp: 2025-11-25T02:30:48.341Z
[2025-11-25T02:30:50.351Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2217) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*