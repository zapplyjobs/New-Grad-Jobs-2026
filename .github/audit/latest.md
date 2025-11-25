# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T01:51:39.716Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T01:51:25.002Z] ========================================
[2025-11-25T01:51:25.003Z] Discord Bot Execution Log
[2025-11-25T01:51:25.003Z] Environment: GitHub Actions
[2025-11-25T01:51:25.003Z] Node Version: v20.19.5
[2025-11-25T01:51:25.003Z] ========================================
[2025-11-25T01:51:25.003Z] Environment Variables Check:
[2025-11-25T01:51:25.003Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T01:51:25.003Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T01:51:25.004Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T01:51:25.004Z] 
Multi-Channel Configuration:
[2025-11-25T01:51:25.004Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T01:51:25.004Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T01:51:25.004Z] 
Data Files Check:
[2025-11-25T01:51:25.004Z] .github/data/new_jobs.json: ✅ Exists (2 items, 11062 bytes)
[2025-11-25T01:51:25.006Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327687 bytes)
[2025-11-25T01:51:25.006Z] 
========================================
[2025-11-25T01:51:25.006Z] Starting Enhanced Discord Bot...
[2025-11-25T01:51:25.007Z] ========================================
[2025-11-25T01:51:26.275Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T01:51:26.275Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-25T01:51:26.275Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T01:51:26.314Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 2
[2025-11-25T01:51:26.314Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
📤 Posting 2 jobs...
[2025-11-25T01:51:26.315Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T01:51:26.315Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-25T01:51:26.315Z] [BOT] 📍 [ROUTING] "Software Engineer - Automation Tools and Infrastructure" @ ORG_5ff432e9
[2025-11-25T01:51:26.315Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T01:51:26.320Z] [BOT ERROR] (node:2334) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T01:51:26.570Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Automation Tools and Infrastructure @ ORG_5ff432e9 in #💻・tech-jobs
  ✅ Industry: Software Engineer - Automation Tools and Infrastructure @ ORG_5ff432e9
[2025-11-25T01:51:28.322Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Automation Tools and Infrastructure @ ORG_5ff432e9 in #🌉・san-francisco
[2025-11-25T01:51:28.322Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-25T01:51:29.824Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T01:51:29.824Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Python - Linux" @ ORG_cc7e1d22
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T01:51:30.137Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Python - Linux @ ORG_cc7e1d22 in #💻・tech-jobs
[2025-11-25T01:51:30.137Z] [BOT] ✅ Industry: Software Engineer 1 - Python - Linux @ ORG_cc7e1d22
[2025-11-25T01:51:31.885Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Python - Linux @ ORG_cc7e1d22 in #🌉・san-francisco
[2025-11-25T01:51:31.885Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-25T01:51:33.387Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T01:51:36.388Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T01:51:36.426Z] [BOT] 📂 Loaded 13 existing routing entries
[2025-11-25T01:51:36.461Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 15
[2025-11-25T01:51:36.462Z] [BOT] Timestamp: 2025-11-25T01:51:36.461Z
[2025-11-25T01:51:38.470Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2334) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*