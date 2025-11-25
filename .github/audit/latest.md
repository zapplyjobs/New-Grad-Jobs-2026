# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T03:36:30.516Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T03:36:16.309Z] ========================================
[2025-11-25T03:36:16.311Z] Discord Bot Execution Log
[2025-11-25T03:36:16.311Z] Environment: GitHub Actions
[2025-11-25T03:36:16.311Z] Node Version: v20.19.5
[2025-11-25T03:36:16.311Z] ========================================
[2025-11-25T03:36:16.311Z] Environment Variables Check:
[2025-11-25T03:36:16.311Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T03:36:16.311Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T03:36:16.311Z] 
Multi-Channel Configuration:
[2025-11-25T03:36:16.311Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T03:36:16.311Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T03:36:16.312Z] 
Data Files Check:
[2025-11-25T03:36:16.312Z] .github/data/new_jobs.json: ✅ Exists (2 items, 12613 bytes)
[2025-11-25T03:36:16.314Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327623 bytes)
[2025-11-25T03:36:16.314Z] 
========================================
[2025-11-25T03:36:16.314Z] Starting Enhanced Discord Bot...
[2025-11-25T03:36:16.314Z] ========================================
[2025-11-25T03:36:17.452Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T03:36:17.452Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-25T03:36:17.452Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T03:36:17.492Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 2
[2025-11-25T03:36:17.492Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-11-25T03:36:17.493Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T03:36:17.493Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-25T03:36:17.493Z] [BOT] 📍 [ROUTING] "Data Science Analyst" @ ORG_9d38443e of Chicago
[2025-11-25T03:36:17.494Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T03:36:17.498Z] [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T03:36:17.682Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst @ ORG_9d38443e of Chicago in #💻・tech-jobs
  ✅ Industry: Data Science Analyst @ ORG_9d38443e of Chicago
[2025-11-25T03:36:19.371Z] [BOT] ✅ Created forum post: 🏢 Data Science Analyst @ ORG_9d38443e of Chicago in #🌆・chicago
[2025-11-25T03:36:19.371Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-25T03:36:20.874Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T03:36:20.874Z] [BOT] 📍 [ROUTING] "Senior Analyst Artificial Intelligence Enterprise Engineer" @ ORG_2965600f Trust
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T03:36:21.081Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst Artificial Intelligence Enterprise Engineer @ ORG_2965600f Trust in #💻・tech-jobs
[2025-11-25T03:36:21.081Z] [BOT] ✅ Industry: Senior Analyst Artificial Intelligence Enterprise Engineer @ ORG_2965600f Trust
[2025-11-25T03:36:22.929Z] [BOT] ✅ Created forum post: 🏢 Senior Analyst Artificial Intelligence Enterprise Engineer @ ORG_2965600f Trust in #🌆・chicago
[2025-11-25T03:36:22.929Z] [BOT] ✅ Location: 🌆・chicago
[2025-11-25T03:36:24.432Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T03:36:27.433Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-25T03:36:27.433Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-25T03:36:27.472Z] [BOT] 📂 Loaded 17 existing routing entries
[2025-11-25T03:36:27.508Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 19
   Timestamp: 2025-11-25T03:36:27.507Z
[2025-11-25T03:36:29.518Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2391) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*