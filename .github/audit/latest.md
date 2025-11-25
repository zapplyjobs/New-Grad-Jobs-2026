# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T07:01:54.251Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T07:01:44.220Z] ========================================
[2025-11-25T07:01:44.221Z] Discord Bot Execution Log
[2025-11-25T07:01:44.221Z] Environment: GitHub Actions
[2025-11-25T07:01:44.221Z] Node Version: v20.19.5
[2025-11-25T07:01:44.221Z] ========================================
[2025-11-25T07:01:44.221Z] Environment Variables Check:
[2025-11-25T07:01:44.221Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T07:01:44.221Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.221Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T07:01:44.222Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T07:01:44.222Z] 
Multi-Channel Configuration:
[2025-11-25T07:01:44.222Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T07:01:44.222Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T07:01:44.222Z] 
Data Files Check:
[2025-11-25T07:01:44.222Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6458 bytes)
[2025-11-25T07:01:44.224Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327782 bytes)
[2025-11-25T07:01:44.224Z] 
========================================
[2025-11-25T07:01:44.224Z] Starting Enhanced Discord Bot...
[2025-11-25T07:01:44.224Z] ========================================
[2025-11-25T07:01:45.062Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T07:01:45.063Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T07:01:45.063Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T07:01:45.101Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-25T07:01:45.102Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-25T07:01:45.102Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T07:01:45.103Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T07:01:45.104Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-25T07:01:45.104Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T07:01:45.108Z] [BOT ERROR] (node:2289) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T07:01:45.274Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-25T07:01:45.274Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T07:01:46.958Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T07:01:48.461Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T07:01:51.462Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T07:01:51.500Z] [BOT] 📂 Loaded 32 existing routing entries
[2025-11-25T07:01:51.535Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 33
   Timestamp: 2025-11-25T07:01:51.535Z
[2025-11-25T07:01:53.543Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2289) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*