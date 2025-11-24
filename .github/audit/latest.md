# Discord Bot Execution Audit
**Timestamp:** 2025-11-24T01:51:35.341Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-24T01:51:25.976Z] ========================================
[2025-11-24T01:51:25.977Z] Discord Bot Execution Log
[2025-11-24T01:51:25.977Z] Environment: GitHub Actions
[2025-11-24T01:51:25.977Z] Node Version: v20.19.5
[2025-11-24T01:51:25.977Z] ========================================
[2025-11-24T01:51:25.977Z] Environment Variables Check:
[2025-11-24T01:51:25.978Z] DISCORD_TOKEN: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-24T01:51:25.978Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-24T01:51:25.978Z] 
Multi-Channel Configuration:
[2025-11-24T01:51:25.978Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-24T01:51:25.978Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-24T01:51:25.978Z] 
Data Files Check:
[2025-11-24T01:51:25.979Z] .github/data/new_jobs.json: ✅ Exists (1 items, 704 bytes)
[2025-11-24T01:51:25.980Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327440 bytes)
[2025-11-24T01:51:25.980Z] 
========================================
[2025-11-24T01:51:25.980Z] Starting Enhanced Discord Bot...
[2025-11-24T01:51:25.980Z] ========================================
[2025-11-24T01:51:27.160Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-24T01:51:27.160Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-24T01:51:27.161Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-24T01:51:27.201Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-24T01:51:27.201Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-11-24T01:51:27.201Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-24T01:51:27.202Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-24T01:51:27.202Z] [BOT] 📍 [ROUTING] "Data Scientist Associate" @ ORG_569ec613 Morgan Chase
[2025-11-24T01:51:27.202Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-24T01:51:27.207Z] [BOT ERROR] (node:2202) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-24T01:51:27.517Z] [BOT] ✅ Created forum post: 🏢 Data Scientist Associate @ ORG_569ec613 Morgan Chase in #💻・tech-jobs
[2025-11-24T01:51:27.517Z] [BOT] ✅ Industry: Data Scientist Associate @ ORG_569ec613 Morgan Chase
[2025-11-24T01:51:29.020Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-24T01:51:32.021Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-24T01:51:32.021Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-24T01:51:32.059Z] [BOT] 📂 Loaded 2 existing routing entries
[2025-11-24T01:51:32.095Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 3
   Timestamp: 2025-11-24T01:51:32.095Z
[2025-11-24T01:51:34.106Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2202) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*