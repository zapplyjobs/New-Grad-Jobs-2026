# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T13:27:28.940Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T13:26:34.575Z] ========================================
[2025-11-26T13:26:34.576Z] Discord Bot Execution Log
[2025-11-26T13:26:34.576Z] Environment: GitHub Actions
[2025-11-26T13:26:34.576Z] Node Version: v20.19.5
[2025-11-26T13:26:34.576Z] ========================================
[2025-11-26T13:26:34.576Z] Environment Variables Check:
[2025-11-26T13:26:34.576Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T13:26:34.576Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.576Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T13:26:34.576Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T13:26:34.576Z] 
Multi-Channel Configuration:
[2025-11-26T13:26:34.576Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.576Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.576Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.577Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.577Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.577Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.577Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.577Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.577Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T13:26:34.577Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T13:26:34.577Z] 
Data Files Check:
[2025-11-26T13:26:34.577Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T13:26:34.579Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T13:26:34.579Z] 
========================================
[2025-11-26T13:26:34.579Z] Starting Enhanced Discord Bot...
[2025-11-26T13:26:34.579Z] ========================================
[2025-11-26T13:26:35.606Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T13:26:35.606Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T13:26:35.607Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T13:26:35.684Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T13:26:35.685Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:26:35.685Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:26:35.685Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T13:26:35.685Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
[2025-11-26T13:26:35.685Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T13:26:35.687Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T13:26:35.687Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T13:26:35.687Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:35.691Z] [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T13:26:36.046Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:26:37.758Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:26:37.758Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:26:39.260Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:26:39.260Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:39.604Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:26:39.604Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:26:41.976Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:26:43.479Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:26:43.480Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:43.654Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:26:43.655Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:26:45.498Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:26:47.002Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:26:47.002Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:47.219Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:26:49.036Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:26:50.540Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:26:50.540Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:51.017Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:26:52.842Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:26:54.344Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:26:54.345Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:54.613Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:26:56.403Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:26:57.907Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:26:57.907Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:58.107Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:26:59.610Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:26:59.610Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:26:59.811Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:27:01.753Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:27:01.754Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:27:03.257Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:27:03.258Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:27:03.480Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:27:04.983Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:27:04.983Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:27:05.257Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:27:06.952Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:27:08.455Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:27:08.455Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:27:08.760Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:27:10.537Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:27:12.041Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:27:12.041Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:27:12.589Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:27:12.589Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:27:14.093Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:27:14.093Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:27:15.890Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:27:17.590Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:27:19.093Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:27:19.093Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:27:19.300Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T13:27:20.982Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T13:27:22.486Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:27:25.488Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T13:27:25.525Z] [BOT] 📂 Loaded 268 existing routing entries
[2025-11-26T13:27:25.563Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
   Total entries: 282
[2025-11-26T13:27:25.564Z] [BOT] Timestamp: 2025-11-26T13:27:25.562Z
[2025-11-26T13:27:27.573Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2305) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*