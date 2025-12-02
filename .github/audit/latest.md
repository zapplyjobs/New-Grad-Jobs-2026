# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T07:23:36.960Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T07:23:25.999Z] ========================================
[2025-12-02T07:23:26.001Z] Discord Bot Execution Log
[2025-12-02T07:23:26.001Z] Environment: GitHub Actions
[2025-12-02T07:23:26.001Z] Node Version: v20.19.5
[2025-12-02T07:23:26.001Z] ========================================
[2025-12-02T07:23:26.001Z] Environment Variables Check:
[2025-12-02T07:23:26.001Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T07:23:26.001Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.001Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T07:23:26.001Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T07:23:26.001Z] 
Multi-Channel Configuration:
[2025-12-02T07:23:26.001Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T07:23:26.002Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T07:23:26.002Z] 
Data Files Check:
[2025-12-02T07:23:26.002Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6155 bytes)
[2025-12-02T07:23:26.004Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332352 bytes)
[2025-12-02T07:23:26.004Z] 
========================================
[2025-12-02T07:23:26.004Z] Starting Enhanced Discord Bot...
[2025-12-02T07:23:26.004Z] ========================================
[2025-12-02T07:23:27.238Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T07:23:27.238Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-12-02T07:23:27.239Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T07:23:27.315Z] [BOT] ✅ Export complete: Added 0, Skipped 1, Total 1
[2025-12-02T07:23:27.315Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
[2025-12-02T07:23:27.316Z] [BOT] 📋 After blacklist filter: 1 jobs (0 blacklisted)
📋 After title+company+location dedup: 1 unique jobs to post
[2025-12-02T07:23:27.316Z] [BOT] 📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T07:23:27.316Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T07:23:27.317Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
[2025-12-02T07:23:27.317Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T07:23:27.321Z] [BOT ERROR] (node:2319) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T07:23:27.550Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-02T07:23:27.550Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T07:23:29.343Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-02T07:23:29.343Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T07:23:30.844Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T07:23:30.844Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T07:23:30.848Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T07:23:33.849Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T07:23:33.887Z] [BOT] 📂 Loaded 591 existing routing entries
[2025-12-02T07:23:33.924Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 592
[2025-12-02T07:23:33.925Z] [BOT] Timestamp: 2025-12-02T07:23:33.923Z
[2025-12-02T07:23:35.931Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2319) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*