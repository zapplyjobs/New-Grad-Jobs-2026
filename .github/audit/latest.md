# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T13:25:32.930Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T13:25:22.883Z] ========================================
[2025-11-25T13:25:22.884Z] Discord Bot Execution Log
[2025-11-25T13:25:22.884Z] Environment: GitHub Actions
[2025-11-25T13:25:22.884Z] Node Version: v20.19.5
[2025-11-25T13:25:22.884Z] ========================================
[2025-11-25T13:25:22.884Z] Environment Variables Check:
[2025-11-25T13:25:22.884Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T13:25:22.884Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.884Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T13:25:22.884Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T13:25:22.884Z] 
Multi-Channel Configuration:
[2025-11-25T13:25:22.884Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.884Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.884Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.885Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.885Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.885Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.885Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.885Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.885Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T13:25:22.885Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T13:25:22.885Z] 
Data Files Check:
[2025-11-25T13:25:22.885Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6458 bytes)
[2025-11-25T13:25:22.886Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327782 bytes)
[2025-11-25T13:25:22.886Z] 
========================================
[2025-11-25T13:25:22.886Z] Starting Enhanced Discord Bot...
[2025-11-25T13:25:22.887Z] ========================================
[2025-11-25T13:25:23.641Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T13:25:23.641Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T13:25:23.642Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T13:25:23.681Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-25T13:25:23.681Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-25T13:25:23.681Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T13:25:23.682Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T13:25:23.682Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-25T13:25:23.683Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T13:25:23.687Z] [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T13:25:23.820Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-25T13:25:23.820Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T13:25:25.558Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T13:25:27.061Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T13:25:30.062Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T13:25:30.101Z] [BOT] 📂 Loaded 56 existing routing entries
[2025-11-25T13:25:30.138Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-11-25T13:25:30.138Z] [BOT] Total entries: 57
   Timestamp: 2025-11-25T13:25:30.138Z
[2025-11-25T13:25:32.148Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*