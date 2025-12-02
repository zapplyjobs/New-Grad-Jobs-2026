# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T01:10:56.894Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T01:10:46.803Z] ========================================
[2025-12-02T01:10:46.805Z] Discord Bot Execution Log
[2025-12-02T01:10:46.805Z] Environment: GitHub Actions
[2025-12-02T01:10:46.805Z] Node Version: v20.19.5
[2025-12-02T01:10:46.806Z] ========================================
[2025-12-02T01:10:46.806Z] Environment Variables Check:
[2025-12-02T01:10:46.806Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T01:10:46.806Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.806Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T01:10:46.806Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T01:10:46.806Z] 
Multi-Channel Configuration:
[2025-12-02T01:10:46.806Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.806Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.806Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.806Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.807Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.807Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.807Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.807Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.807Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T01:10:46.807Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T01:10:46.807Z] 
Data Files Check:
[2025-12-02T01:10:46.807Z] .github/data/new_jobs.json: ✅ Exists (1 items, 9306 bytes)
[2025-12-02T01:10:46.810Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332077 bytes)
[2025-12-02T01:10:46.810Z] 
========================================
[2025-12-02T01:10:46.810Z] Starting Enhanced Discord Bot...
[2025-12-02T01:10:46.810Z] ========================================
[2025-12-02T01:10:47.650Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T01:10:47.651Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T01:10:47.651Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T01:10:47.730Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T01:10:47.730Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T01:10:47.731Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T01:10:47.731Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T01:10:47.731Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T01:10:47.732Z] [BOT] 📍 [ROUTING] "Data Analysis and Simulation Professional 2" @ ORG_73614724
[2025-12-02T01:10:47.732Z] [BOT] Category: TECH (matched: "data")
[2025-12-02T01:10:47.732Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T01:10:47.737Z] [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T01:10:47.970Z] [BOT] ✅ Created forum post: 🏢 Data Analysis and Simulation Professional 2 @ ORG_73614724 in #💻・tech-jobs
[2025-12-02T01:10:47.971Z] [BOT] ✅ Industry: Data Analysis and Simulation Professional 2 @ ORG_73614724
[2025-12-02T01:10:49.690Z] [BOT] ✅ Created forum post: 🏢 Data Analysis and Simulation Professional 2 @ ORG_73614724 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T01:10:51.192Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T01:10:51.193Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T01:10:51.198Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T01:10:51.199Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T01:10:54.200Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-12-02T01:10:54.200Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T01:10:54.239Z] [BOT] 📂 Loaded 574 existing routing entries
[2025-12-02T01:10:54.279Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
[2025-12-02T01:10:54.279Z] [BOT] Total entries: 575
   Timestamp: 2025-12-02T01:10:54.277Z
[2025-12-02T01:10:56.288Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*