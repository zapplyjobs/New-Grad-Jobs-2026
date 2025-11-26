# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T06:02:17.793Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T06:02:06.391Z] ========================================
[2025-11-26T06:02:06.392Z] Discord Bot Execution Log
[2025-11-26T06:02:06.392Z] Environment: GitHub Actions
[2025-11-26T06:02:06.392Z] Node Version: v20.19.5
[2025-11-26T06:02:06.392Z] ========================================
[2025-11-26T06:02:06.392Z] Environment Variables Check:
[2025-11-26T06:02:06.392Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T06:02:06.392Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.392Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T06:02:06.392Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T06:02:06.393Z] 
Multi-Channel Configuration:
[2025-11-26T06:02:06.393Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T06:02:06.393Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T06:02:06.393Z] 
Data Files Check:
[2025-11-26T06:02:06.393Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19802 bytes)
[2025-11-26T06:02:06.395Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328407 bytes)
[2025-11-26T06:02:06.395Z] 
========================================
[2025-11-26T06:02:06.395Z] Starting Enhanced Discord Bot...
[2025-11-26T06:02:06.395Z] ========================================
[2025-11-26T06:02:07.793Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T06:02:07.794Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-26T06:02:07.794Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T06:02:07.872Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-26T06:02:07.873Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T06:02:07.873Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T06:02:07.874Z] [BOT] 📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T06:02:07.875Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-26T06:02:07.875Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-26T06:02:07.875Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-11-26T06:02:07.875Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T06:02:07.880Z] [BOT ERROR] (node:2310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T06:02:08.146Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T06:02:08.146Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T06:02:09.854Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T06:02:11.363Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T06:02:14.365Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T06:02:14.402Z] [BOT] 📂 Loaded 141 existing routing entries
[2025-11-26T06:02:14.439Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 142
   Timestamp: 2025-11-26T06:02:14.438Z
[2025-11-26T06:02:16.448Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2310) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*