# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T03:08:39.248Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T03:08:28.891Z] ========================================
[2025-11-25T03:08:28.892Z] Discord Bot Execution Log
[2025-11-25T03:08:28.892Z] Environment: GitHub Actions
[2025-11-25T03:08:28.892Z] Node Version: v20.19.5
[2025-11-25T03:08:28.892Z] ========================================
[2025-11-25T03:08:28.892Z] Environment Variables Check:
[2025-11-25T03:08:28.893Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T03:08:28.893Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T03:08:28.893Z] 
Multi-Channel Configuration:
[2025-11-25T03:08:28.893Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T03:08:28.893Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T03:08:28.893Z] 
Data Files Check:
[2025-11-25T03:08:28.894Z] .github/data/new_jobs.json: ✅ Exists (1 items, 23593 bytes)
[2025-11-25T03:08:28.896Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327657 bytes)
[2025-11-25T03:08:28.896Z] 
========================================
[2025-11-25T03:08:28.896Z] Starting Enhanced Discord Bot...
[2025-11-25T03:08:28.896Z] ========================================
[2025-11-25T03:08:29.731Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T03:08:29.732Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T03:08:29.732Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T03:08:29.772Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-25T03:08:29.773Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-25T03:08:29.773Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T03:08:29.774Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T03:08:29.774Z] [BOT] 📍 [ROUTING] "AI Data Specialist" @ ORG_f3ae3598
[2025-11-25T03:08:29.774Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T03:08:29.780Z] [BOT ERROR] (node:2309) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T03:08:30.028Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #💻・tech-jobs
[2025-11-25T03:08:30.029Z] [BOT] ✅ Industry: AI Data Specialist @ ORG_f3ae3598
[2025-11-25T03:08:31.742Z] [BOT] ✅ Created forum post: 🏢 AI Data Specialist @ ORG_f3ae3598 in #🗽・new-york
[2025-11-25T03:08:31.742Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-25T03:08:33.245Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T03:08:36.246Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-25T03:08:36.246Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-25T03:08:36.286Z] [BOT] 📂 Loaded 16 existing routing entries
[2025-11-25T03:08:36.323Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 17
[2025-11-25T03:08:36.323Z] [BOT] Timestamp: 2025-11-25T03:08:36.322Z
[2025-11-25T03:08:38.331Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2309) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*