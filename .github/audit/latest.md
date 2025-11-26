# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T12:45:17.556Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T12:44:23.493Z] ========================================
[2025-11-26T12:44:23.494Z] Discord Bot Execution Log
[2025-11-26T12:44:23.494Z] Environment: GitHub Actions
[2025-11-26T12:44:23.494Z] Node Version: v20.19.5
[2025-11-26T12:44:23.494Z] ========================================
[2025-11-26T12:44:23.494Z] Environment Variables Check:
[2025-11-26T12:44:23.494Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T12:44:23.494Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.494Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T12:44:23.494Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T12:44:23.494Z] 
Multi-Channel Configuration:
[2025-11-26T12:44:23.494Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T12:44:23.495Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T12:44:23.495Z] 
Data Files Check:
[2025-11-26T12:44:23.495Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T12:44:23.497Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T12:44:23.497Z] 
========================================
[2025-11-26T12:44:23.497Z] Starting Enhanced Discord Bot...
[2025-11-26T12:44:23.497Z] ========================================
[2025-11-26T12:44:24.507Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T12:44:24.508Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T12:44:24.508Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T12:44:24.584Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T12:44:24.585Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T12:44:24.585Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T12:44:24.586Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T12:44:24.586Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T12:44:24.586Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T12:44:24.587Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T12:44:24.588Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T12:44:24.588Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:24.592Z] [BOT ERROR] (node:2301) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T12:44:24.829Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:24.829Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:26.514Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:44:26.514Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:44:28.016Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:28.016Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:28.185Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:28.185Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:29.867Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:44:31.408Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:31.408Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:31.683Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:33.424Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:44:34.927Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:34.927Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:35.191Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:35.191Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:36.866Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:44:36.866Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:44:38.368Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:38.368Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:38.594Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:38.594Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:40.355Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:44:40.355Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:44:41.858Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:41.858Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:42.051Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:42.052Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:43.739Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:44:43.739Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:44:45.242Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:45.242Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:45.557Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:45.557Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T12:44:47.060Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:47.061Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:47.342Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:47.342Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:49.082Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:44:49.082Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:44:50.585Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:50.585Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:50.798Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:50.798Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T12:44:52.301Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:52.301Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:52.484Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:52.484Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:54.169Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:44:54.169Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:44:55.673Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:55.673Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:44:56.137Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:44:56.137Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:44:57.858Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:44:57.858Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:44:59.362Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:44:59.362Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:45:01.556Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:45:01.556Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T12:45:03.060Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:45:03.060Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:45:03.494Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:45:03.494Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:45:05.426Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T12:45:05.426Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:45:06.929Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:45:06.930Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:45:07.778Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T12:45:07.778Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T12:45:09.555Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T12:45:09.556Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T12:45:11.060Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:45:14.060Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
[2025-11-26T12:45:14.061Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T12:45:14.097Z] [BOT] 📂 Loaded 240 existing routing entries
[2025-11-26T12:45:14.135Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-11-26T12:45:14.135Z] [BOT] New entries: 14
   Total entries: 254
   Timestamp: 2025-11-26T12:45:14.133Z
[2025-11-26T12:45:16.144Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2301) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*