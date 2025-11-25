# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T04:38:40.701Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T04:38:26.808Z] ========================================
[2025-11-25T04:38:26.809Z] Discord Bot Execution Log
[2025-11-25T04:38:26.809Z] Environment: GitHub Actions
[2025-11-25T04:38:26.809Z] Node Version: v20.19.5
[2025-11-25T04:38:26.809Z] ========================================
[2025-11-25T04:38:26.809Z] Environment Variables Check:
[2025-11-25T04:38:26.809Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T04:38:26.809Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.809Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T04:38:26.809Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T04:38:26.809Z] 
Multi-Channel Configuration:
[2025-11-25T04:38:26.809Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T04:38:26.810Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T04:38:26.810Z] 
Data Files Check:
[2025-11-25T04:38:26.810Z] .github/data/new_jobs.json: ✅ Exists (2 items, 14607 bytes)
[2025-11-25T04:38:26.812Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327717 bytes)
[2025-11-25T04:38:26.812Z] 
========================================
[2025-11-25T04:38:26.812Z] Starting Enhanced Discord Bot...
[2025-11-25T04:38:26.812Z] ========================================
[2025-11-25T04:38:27.621Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T04:38:27.622Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-25T04:38:27.622Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T04:38:27.661Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 2
[2025-11-25T04:38:27.662Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-25T04:38:27.662Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T04:38:27.663Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-25T04:38:27.664Z] [BOT] 📍 [ROUTING] "Building Performance Engineering New Grad - St. Louis - MO" @ ORG_524ddbad
[2025-11-25T04:38:27.664Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T04:38:27.669Z] [BOT ERROR] (node:2284) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T04:38:28.053Z] [BOT] ✅ Created forum post: 🏢 Building Performance Engineering New Grad - St. Louis - MO @ ORG_524ddbad in #💻・tech-jobs
[2025-11-25T04:38:28.054Z] [BOT] ✅ Industry: Building Performance Engineering New Grad - St. Louis - MO @ ORG_524ddbad
[2025-11-25T04:38:29.760Z] [BOT] ✅ Created forum post: 🏢 Building Performance Engineering New Grad - St. Louis - MO @ ORG_524ddbad in #🌆・chicago
  ✅ Location: 🌆・chicago
[2025-11-25T04:38:31.263Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T04:38:31.263Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T04:38:31.654Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-25T04:38:31.655Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T04:38:33.371Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-25T04:38:33.371Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-25T04:38:34.874Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T04:38:37.875Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T04:38:37.914Z] [BOT] 📂 Loaded 21 existing routing entries
[2025-11-25T04:38:37.950Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 23
   Timestamp: 2025-11-25T04:38:37.949Z
[2025-11-25T04:38:39.960Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2284) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*