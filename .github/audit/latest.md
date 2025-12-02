# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T02:35:31.168Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T02:35:20.863Z] ========================================
[2025-12-02T02:35:20.865Z] Discord Bot Execution Log
[2025-12-02T02:35:20.866Z] Environment: GitHub Actions
[2025-12-02T02:35:20.866Z] Node Version: v20.19.5
[2025-12-02T02:35:20.866Z] ========================================
[2025-12-02T02:35:20.866Z] Environment Variables Check:
[2025-12-02T02:35:20.866Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T02:35:20.866Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.866Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T02:35:20.866Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T02:35:20.866Z] 
Multi-Channel Configuration:
[2025-12-02T02:35:20.866Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.866Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T02:35:20.867Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T02:35:20.867Z] 
Data Files Check:
[2025-12-02T02:35:20.867Z] .github/data/new_jobs.json: ✅ Exists (1 items, 3113 bytes)
[2025-12-02T02:35:20.869Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332139 bytes)
[2025-12-02T02:35:20.869Z] 
========================================
[2025-12-02T02:35:20.869Z] Starting Enhanced Discord Bot...
[2025-12-02T02:35:20.869Z] ========================================
[2025-12-02T02:35:21.710Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T02:35:21.711Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T02:35:21.711Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T02:35:21.792Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T02:35:21.792Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T02:35:21.793Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-02T02:35:21.793Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T02:35:21.794Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T02:35:21.794Z] [BOT] 📍 [ROUTING] "Financial Data Analyst" @ ORG_f2f7eb07
[2025-12-02T02:35:21.794Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T02:35:21.799Z] [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T02:35:21.989Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_f2f7eb07 in #💻・tech-jobs
  ✅ Industry: Financial Data Analyst @ ORG_f2f7eb07
[2025-12-02T02:35:23.802Z] [BOT] ✅ Created forum post: 🏢 Financial Data Analyst @ ORG_f2f7eb07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T02:35:25.304Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T02:35:25.304Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T02:35:25.311Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T02:35:25.311Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T02:35:28.311Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T02:35:28.351Z] [BOT] 📂 Loaded 575 existing routing entries
[2025-12-02T02:35:28.392Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 576
[2025-12-02T02:35:28.392Z] [BOT] Timestamp: 2025-12-02T02:35:28.390Z
[2025-12-02T02:35:30.401Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2308) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*