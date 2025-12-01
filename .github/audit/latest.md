# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T18:06:01.841Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T18:05:50.473Z] ========================================
[2025-12-01T18:05:50.475Z] Discord Bot Execution Log
[2025-12-01T18:05:50.475Z] Environment: GitHub Actions
[2025-12-01T18:05:50.475Z] Node Version: v20.19.5
[2025-12-01T18:05:50.476Z] ========================================
[2025-12-01T18:05:50.476Z] Environment Variables Check:
[2025-12-01T18:05:50.476Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T18:05:50.476Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.476Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T18:05:50.476Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T18:05:50.476Z] 
Multi-Channel Configuration:
[2025-12-01T18:05:50.476Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.476Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.476Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.476Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.477Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.477Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.477Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.477Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.477Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T18:05:50.477Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T18:05:50.477Z] 
Data Files Check:
[2025-12-01T18:05:50.477Z] .github/data/new_jobs.json: ✅ Exists (1 items, 9133 bytes)
[2025-12-01T18:05:50.479Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331646 bytes)
[2025-12-01T18:05:50.479Z] 
========================================
[2025-12-01T18:05:50.479Z] Starting Enhanced Discord Bot...
[2025-12-01T18:05:50.479Z] ========================================
[2025-12-01T18:05:51.708Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T18:05:51.708Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-01T18:05:51.709Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T18:05:51.785Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-01T18:05:51.785Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-01T18:05:51.786Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
[2025-12-01T18:05:51.786Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T18:05:51.787Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-01T18:05:51.787Z] [BOT] 📍 [ROUTING] "Systems Engineer 1" @ ORG_75f04b84
[2025-12-01T18:05:51.787Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-12-01T18:05:51.788Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T18:05:51.792Z] [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T18:05:52.404Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #💻・tech-jobs
  ✅ Industry: Systems Engineer 1 @ ORG_75f04b84
[2025-12-01T18:05:54.169Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer 1 @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-01T18:05:55.669Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T18:05:55.669Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T18:05:55.675Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T18:05:55.675Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T18:05:58.676Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T18:05:58.714Z] [BOT] 📂 Loaded 560 existing routing entries
[2025-12-01T18:05:58.752Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 561
   Timestamp: 2025-12-01T18:05:58.751Z
[2025-12-01T18:06:00.762Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*