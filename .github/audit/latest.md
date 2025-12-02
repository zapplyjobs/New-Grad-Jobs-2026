# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T06:25:35.674Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T06:25:23.905Z] ========================================
[2025-12-02T06:25:23.906Z] Discord Bot Execution Log
[2025-12-02T06:25:23.906Z] Environment: GitHub Actions
[2025-12-02T06:25:23.907Z] Node Version: v20.19.5
[2025-12-02T06:25:23.907Z] ========================================
[2025-12-02T06:25:23.907Z] Environment Variables Check:
[2025-12-02T06:25:23.907Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T06:25:23.907Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.907Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T06:25:23.907Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T06:25:23.907Z] 
Multi-Channel Configuration:
[2025-12-02T06:25:23.907Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.907Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.907Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.908Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.908Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.908Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.908Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.908Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.908Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T06:25:23.908Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T06:25:23.908Z] 
Data Files Check:
[2025-12-02T06:25:23.908Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6155 bytes)
[2025-12-02T06:25:23.910Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332217 bytes)
[2025-12-02T06:25:23.910Z] 
========================================
[2025-12-02T06:25:23.910Z] Starting Enhanced Discord Bot...
[2025-12-02T06:25:23.911Z] ========================================
[2025-12-02T06:25:24.961Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T06:25:24.962Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T06:25:24.962Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T06:25:25.042Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T06:25:25.043Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T06:25:25.043Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-02T06:25:25.043Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T06:25:25.044Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T06:25:25.044Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T06:25:25.044Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T06:25:25.049Z] [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T06:25:25.880Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T06:25:27.782Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-02T06:25:27.782Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T06:25:29.284Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T06:25:29.284Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T06:25:29.291Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T06:25:29.292Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T06:25:32.293Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T06:25:32.332Z] [BOT] 📂 Loaded 587 existing routing entries
[2025-12-02T06:25:32.373Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T06:25:32.373Z] [BOT] Total entries: 588
   Timestamp: 2025-12-02T06:25:32.371Z
[2025-12-02T06:25:34.382Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2335) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*