# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T16:52:10.343Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T16:51:59.516Z] ========================================
[2025-11-25T16:51:59.517Z] Discord Bot Execution Log
[2025-11-25T16:51:59.517Z] Environment: GitHub Actions
[2025-11-25T16:51:59.517Z] Node Version: v20.19.5
[2025-11-25T16:51:59.517Z] ========================================
[2025-11-25T16:51:59.517Z] Environment Variables Check:
[2025-11-25T16:51:59.517Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T16:51:59.517Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.517Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T16:51:59.517Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T16:51:59.517Z] 
Multi-Channel Configuration:
[2025-11-25T16:51:59.517Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T16:51:59.518Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T16:51:59.518Z] 
Data Files Check:
[2025-11-25T16:51:59.518Z] .github/data/new_jobs.json: ✅ Exists (1 items, 6458 bytes)
[2025-11-25T16:51:59.519Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327754 bytes)
[2025-11-25T16:51:59.519Z] 
========================================
[2025-11-25T16:51:59.519Z] Starting Enhanced Discord Bot...
[2025-11-25T16:51:59.520Z] ========================================
[2025-11-25T16:52:00.650Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T16:52:00.650Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 1 jobs to encrypted JSON...
[2025-11-25T16:52:00.651Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T16:52:00.691Z] [BOT] ✅ Export complete: Added 1, Skipped 0, Total 1
[2025-11-25T16:52:00.691Z] [BOT] 📬 Found 1 new jobs (0 already posted)...
📤 Posting 1 jobs...
[2025-11-25T16:52:00.691Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T16:52:00.692Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-25T16:52:00.692Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-25T16:52:00.692Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T16:52:00.697Z] [BOT ERROR] (node:2288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T16:52:00.862Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T16:52:02.586Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T16:52:04.089Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T16:52:07.090Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-25T16:52:07.090Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-25T16:52:07.130Z] [BOT] 📂 Loaded 74 existing routing entries
[2025-11-25T16:52:07.171Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 75
   Timestamp: 2025-11-25T16:52:07.170Z
[2025-11-25T16:52:09.180Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2288) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*