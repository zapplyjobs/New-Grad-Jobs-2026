# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T08:39:31.427Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T08:39:21.387Z] ========================================
[2025-11-26T08:39:21.388Z] Discord Bot Execution Log
[2025-11-26T08:39:21.388Z] Environment: GitHub Actions
[2025-11-26T08:39:21.389Z] Node Version: v20.19.5
[2025-11-26T08:39:21.389Z] ========================================
[2025-11-26T08:39:21.389Z] Environment Variables Check:
[2025-11-26T08:39:21.389Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T08:39:21.389Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T08:39:21.389Z] 
Multi-Channel Configuration:
[2025-11-26T08:39:21.389Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T08:39:21.389Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T08:39:21.389Z] 
Data Files Check:
[2025-11-26T08:39:21.390Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19802 bytes)
[2025-11-26T08:39:21.392Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328407 bytes)
[2025-11-26T08:39:21.392Z] 
========================================
[2025-11-26T08:39:21.392Z] Starting Enhanced Discord Bot...
[2025-11-26T08:39:21.392Z] ========================================
[2025-11-26T08:39:22.236Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T08:39:22.237Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-26T08:39:22.237Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T08:39:22.315Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-26T08:39:22.316Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T08:39:22.316Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T08:39:22.317Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-26T08:39:22.317Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-26T08:39:22.317Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T08:39:22.322Z] [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T08:39:22.528Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T08:39:24.151Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T08:39:25.655Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T08:39:28.655Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T08:39:28.691Z] [BOT] 📂 Loaded 151 existing routing entries
[2025-11-26T08:39:28.728Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 152
   Timestamp: 2025-11-26T08:39:28.727Z
[2025-11-26T08:39:30.736Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2458) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*