# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T14:37:18.697Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T14:37:05.319Z] ========================================
[2025-11-25T14:37:05.320Z] Discord Bot Execution Log
[2025-11-25T14:37:05.320Z] Environment: GitHub Actions
[2025-11-25T14:37:05.320Z] Node Version: v20.19.5
[2025-11-25T14:37:05.320Z] ========================================
[2025-11-25T14:37:05.320Z] Environment Variables Check:
[2025-11-25T14:37:05.320Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T14:37:05.320Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.320Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T14:37:05.321Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T14:37:05.321Z] 
Multi-Channel Configuration:
[2025-11-25T14:37:05.321Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T14:37:05.321Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T14:37:05.321Z] 
Data Files Check:
[2025-11-25T14:37:05.321Z] .github/data/new_jobs.json: ✅ Exists (2 items, 16025 bytes)
[2025-11-25T14:37:05.323Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327763 bytes)
[2025-11-25T14:37:05.323Z] 
========================================
[2025-11-25T14:37:05.324Z] Starting Enhanced Discord Bot...
[2025-11-25T14:37:05.324Z] ========================================
[2025-11-25T14:37:06.180Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T14:37:06.181Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-25T14:37:06.181Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T14:37:06.221Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 2
[2025-11-25T14:37:06.221Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
📤 Posting 2 jobs...
[2025-11-25T14:37:06.221Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T14:37:06.222Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-25T14:37:06.223Z] [BOT] 📍 [ROUTING] "Senior Specialist - People Analytics" @ ORG_28d3793c
[2025-11-25T14:37:06.223Z] [BOT] Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T14:37:06.227Z] [BOT ERROR] (node:2291) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T14:37:06.376Z] [BOT] ✅ Created forum post: 🏢 Senior Specialist - People Analytics @ ORG_28d3793c in #💻・tech-jobs
  ✅ Industry: Senior Specialist - People Analytics @ ORG_28d3793c
[2025-11-25T14:37:08.131Z] [BOT] ✅ Created forum post: 🏢 Senior Specialist - People Analytics @ ORG_28d3793c in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-25T14:37:09.635Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T14:37:09.635Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T14:37:09.805Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-25T14:37:09.806Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T14:37:11.440Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T14:37:12.944Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T14:37:15.945Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T14:37:15.985Z] [BOT] 📂 Loaded 62 existing routing entries
[2025-11-25T14:37:16.023Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 64
   Timestamp: 2025-11-25T14:37:16.022Z
[2025-11-25T14:37:18.033Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2291) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*