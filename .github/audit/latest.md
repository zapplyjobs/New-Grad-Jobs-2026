# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T17:05:56.016Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T17:05:45.591Z] ========================================
[2025-12-01T17:05:45.593Z] Discord Bot Execution Log
[2025-12-01T17:05:45.593Z] Environment: GitHub Actions
[2025-12-01T17:05:45.593Z] Node Version: v20.19.5
[2025-12-01T17:05:45.593Z] ========================================
[2025-12-01T17:05:45.593Z] Environment Variables Check:
[2025-12-01T17:05:45.593Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T17:05:45.593Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.593Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T17:05:45.593Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T17:05:45.594Z] 
Multi-Channel Configuration:
[2025-12-01T17:05:45.594Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T17:05:45.594Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T17:05:45.594Z] 
Data Files Check:
[2025-12-01T17:05:45.595Z] .github/data/new_jobs.json: ✅ Exists (1 items, 1110 bytes)
[2025-12-01T17:05:45.596Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331603 bytes)
[2025-12-01T17:05:45.596Z] 
========================================
[2025-12-01T17:05:45.596Z] Starting Enhanced Discord Bot...
[2025-12-01T17:05:45.596Z] ========================================
[2025-12-01T17:05:46.623Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T17:05:46.624Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-01T17:05:46.624Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T17:05:46.698Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-01T17:05:46.699Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-01T17:05:46.699Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-12-01T17:05:46.699Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T17:05:46.700Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-01T17:05:46.700Z] [BOT] 📍 [ROUTING] "AI/ML Systems Engineer" @ ORG_04c08645ins
[2025-12-01T17:05:46.700Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T17:05:46.705Z] [BOT ERROR] (node:2210) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T17:05:47.067Z] [BOT] ✅ Created forum post: 🏢 AI/ML Systems Engineer @ ORG_04c08645ins in #💻・tech-jobs
  ✅ Industry: AI/ML Systems Engineer @ ORG_04c08645ins
[2025-12-01T17:05:48.749Z] [BOT] ✅ Created forum post: 🏢 AI/ML Systems Engineer @ ORG_04c08645ins in #💻・remote-usa
[2025-12-01T17:05:48.749Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-01T17:05:50.249Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T17:05:50.250Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T17:05:50.262Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T17:05:50.262Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T17:05:53.263Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T17:05:53.301Z] [BOT] 📂 Loaded 559 existing routing entries
[2025-12-01T17:05:53.340Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 560
   Timestamp: 2025-12-01T17:05:53.339Z
[2025-12-01T17:05:55.349Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2210) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*