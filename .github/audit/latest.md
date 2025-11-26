# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T13:43:00.832Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T13:42:10.734Z] ========================================
[2025-11-26T13:42:10.735Z] Discord Bot Execution Log
[2025-11-26T13:42:10.735Z] Environment: GitHub Actions
[2025-11-26T13:42:10.735Z] Node Version: v20.19.5
[2025-11-26T13:42:10.735Z] ========================================
[2025-11-26T13:42:10.735Z] Environment Variables Check:
[2025-11-26T13:42:10.735Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T13:42:10.735Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.735Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T13:42:10.735Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T13:42:10.735Z] 
Multi-Channel Configuration:
[2025-11-26T13:42:10.736Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T13:42:10.736Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T13:42:10.736Z] 
Data Files Check:
[2025-11-26T13:42:10.736Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T13:42:10.738Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T13:42:10.738Z] 
========================================
[2025-11-26T13:42:10.738Z] Starting Enhanced Discord Bot...
[2025-11-26T13:42:10.738Z] ========================================
[2025-11-26T13:42:11.472Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T13:42:11.473Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T13:42:11.473Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T13:42:11.551Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T13:42:11.551Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:42:11.552Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:42:11.552Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T13:42:11.552Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T13:42:11.552Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T13:42:11.553Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T13:42:11.554Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T13:42:11.554Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:11.558Z] [BOT ERROR] (node:2294) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T13:42:11.723Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:11.723Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:13.420Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:42:14.922Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:14.922Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:15.061Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:15.061Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:16.699Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:42:18.201Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:18.202Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:18.371Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:20.020Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:42:21.524Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:21.524Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:21.788Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:21.788Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:23.481Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:42:24.983Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:24.983Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:25.279Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:25.279Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:26.991Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:42:26.991Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:42:28.493Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:28.493Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:28.742Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:28.742Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:30.503Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:42:30.503Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:42:32.007Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:32.007Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:32.317Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:32.317Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:42:33.820Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:33.821Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:34.081Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:34.081Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:35.854Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:42:35.854Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:42:37.356Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:37.356Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:37.691Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:37.691Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:42:39.193Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:39.193Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:39.500Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:39.500Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:41.384Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:42:41.384Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:42:42.887Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:42.887Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:43.027Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:43.027Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:44.666Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:42:44.666Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:42:46.169Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:46.169Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:46.380Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:42:46.380Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:42:47.883Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:47.883Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:48.097Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:42:50.091Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:42:50.091Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:42:51.593Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:51.594Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:42:51.736Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T13:42:51.736Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T13:42:53.393Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T13:42:54.897Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:42:57.898Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
[2025-11-26T13:42:57.899Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T13:42:57.937Z] [BOT] 📂 Loaded 282 existing routing entries
[2025-11-26T13:42:57.975Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
[2025-11-26T13:42:57.976Z] [BOT] Total entries: 296
   Timestamp: 2025-11-26T13:42:57.974Z
[2025-11-26T13:42:59.985Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2294) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*