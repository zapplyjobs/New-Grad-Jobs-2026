# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T11:34:10.114Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 17
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T11:33:08.058Z] ========================================
[2025-11-26T11:33:08.059Z] Discord Bot Execution Log
[2025-11-26T11:33:08.059Z] Environment: GitHub Actions
[2025-11-26T11:33:08.059Z] Node Version: v20.19.5
[2025-11-26T11:33:08.059Z] ========================================
[2025-11-26T11:33:08.059Z] Environment Variables Check:
[2025-11-26T11:33:08.059Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T11:33:08.059Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.059Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T11:33:08.059Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T11:33:08.059Z] 
Multi-Channel Configuration:
[2025-11-26T11:33:08.059Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.059Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.059Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.060Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.060Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.060Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.060Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.060Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.060Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T11:33:08.060Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T11:33:08.060Z] 
Data Files Check:
[2025-11-26T11:33:08.060Z] .github/data/new_jobs.json: ✅ Exists (21 items, 59868 bytes)
[2025-11-26T11:33:08.062Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328554 bytes)
[2025-11-26T11:33:08.062Z] 
========================================
[2025-11-26T11:33:08.062Z] Starting Enhanced Discord Bot...
[2025-11-26T11:33:08.062Z] ========================================
[2025-11-26T11:33:09.138Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T11:33:09.139Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 21 jobs to encrypted JSON...
[2025-11-26T11:33:09.139Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T11:33:09.217Z] [BOT] ✅ Export complete: Added 0, Skipped 21, Total 21
[2025-11-26T11:33:09.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T11:33:09.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T11:33:09.218Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 17 new jobs (4 already posted)...
📤 Posting 17 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T11:33:09.220Z] [BOT] 📌 Posting 17 jobs to #💻・tech-jobs
[2025-11-26T11:33:09.220Z] [BOT] 📍 [ROUTING] "Systems Engineer – Entry Level" @ ORG_c910d474 Dynamics Mission Systems
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:09.224Z] [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T11:33:09.421Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・tech-jobs
[2025-11-26T11:33:09.422Z] [BOT] ✅ Industry: Systems Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems
[2025-11-26T11:33:11.314Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer – Entry Level @ ORG_c910d474 Dynamics Mission Systems in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:33:12.815Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:12.815Z] [BOT] 📍 [ROUTING] "Business Intelligence Engineer" @ Auto-Owners Insurance
   Category: TECH (matched: "analytics")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:13.097Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Engineer @ Auto-Owners Insurance in #💻・tech-jobs
[2025-11-26T11:33:13.097Z] [BOT] ✅ Industry: Business Intelligence Engineer @ Auto-Owners Insurance
[2025-11-26T11:33:14.817Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Engineer @ Auto-Owners Insurance in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:33:16.319Z] [BOT] 💾 Saved 5000 posted jobs to database
📍 [ROUTING] "Software Engineer" @ ORG_19887ac7
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:16.511Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_19887ac7 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_19887ac7
[2025-11-26T11:33:18.176Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_19887ac7 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T11:33:19.678Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:19.678Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:19.833Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:21.523Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:33:21.523Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:33:23.026Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:23.026Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:23.227Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:24.912Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:33:26.414Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:26.414Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:26.869Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:28.599Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:33:30.101Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:30.101Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:30.256Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:32.075Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:33:32.076Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:33:33.580Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:33.581Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:33.792Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:33:33.793Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:35.692Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:33:35.692Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:33:37.194Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:37.195Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:38.682Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:40.327Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:33:40.327Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:33:41.830Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:41.830Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:42.166Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:33:43.668Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:43.668Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:43.903Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:45.688Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:33:47.191Z] [BOT] 💾 Saved 5000 posted jobs to database
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:47.377Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:33:48.879Z] [BOT] 💾 Saved 5000 posted jobs to database
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:49.069Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:50.893Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:33:52.395Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:52.395Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:52.607Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:54.291Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:33:55.794Z] [BOT] 💾 Saved 5000 posted jobs to database
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:56.033Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:33:57.535Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:33:57.536Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:33:57.741Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:33:59.412Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:34:00.916Z] [BOT] 💾 Saved 5000 posted jobs to database
📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:34:01.072Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T11:34:02.787Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T11:34:04.290Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:34:07.291Z] [BOT] 🎉 Posting complete! Successfully posted: 17, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T11:34:07.330Z] [BOT] 📂 Loaded 194 existing routing entries
[2025-11-26T11:34:07.368Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 17
   Total entries: 211
   Timestamp: 2025-11-26T11:34:07.367Z
[2025-11-26T11:34:09.374Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2428) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*