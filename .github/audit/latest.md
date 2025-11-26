# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T09:36:33.901Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T09:36:23.340Z] ========================================
[2025-11-26T09:36:23.341Z] Discord Bot Execution Log
[2025-11-26T09:36:23.341Z] Environment: GitHub Actions
[2025-11-26T09:36:23.341Z] Node Version: v20.19.5
[2025-11-26T09:36:23.341Z] ========================================
[2025-11-26T09:36:23.341Z] Environment Variables Check:
[2025-11-26T09:36:23.341Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T09:36:23.341Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.341Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T09:36:23.341Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T09:36:23.341Z] 
Multi-Channel Configuration:
[2025-11-26T09:36:23.341Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T09:36:23.342Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T09:36:23.342Z] 
Data Files Check:
[2025-11-26T09:36:23.342Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19802 bytes)
[2025-11-26T09:36:23.344Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328407 bytes)
[2025-11-26T09:36:23.344Z] 
========================================
[2025-11-26T09:36:23.344Z] Starting Enhanced Discord Bot...
[2025-11-26T09:36:23.344Z] ========================================
[2025-11-26T09:36:24.226Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T09:36:24.227Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-26T09:36:24.227Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T09:36:24.306Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-26T09:36:24.307Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T09:36:24.307Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T09:36:24.307Z] [BOT] 📬 Found 1 new jobs (2 already posted)...
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T09:36:24.308Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-26T09:36:24.308Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-26T09:36:24.309Z] [BOT] Category: TECH (matched: "engineer/engineering")
[2025-11-26T09:36:24.309Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T09:36:24.314Z] [BOT ERROR] (node:2316) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T09:36:24.542Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T09:36:24.543Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T09:36:26.541Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T09:36:26.542Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T09:36:28.043Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T09:36:31.044Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T09:36:31.082Z] [BOT] 📂 Loaded 155 existing routing entries
[2025-11-26T09:36:31.118Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 156
   Timestamp: 2025-11-26T09:36:31.118Z
[2025-11-26T09:36:33.127Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2316) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*