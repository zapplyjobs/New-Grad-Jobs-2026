# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T15:22:17.128Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T15:21:25.487Z] ========================================
[2025-11-26T15:21:25.488Z] Discord Bot Execution Log
[2025-11-26T15:21:25.488Z] Environment: GitHub Actions
[2025-11-26T15:21:25.488Z] Node Version: v20.19.5
[2025-11-26T15:21:25.488Z] ========================================
[2025-11-26T15:21:25.488Z] Environment Variables Check:
[2025-11-26T15:21:25.488Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T15:21:25.488Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.488Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T15:21:25.489Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T15:21:25.489Z] 
Multi-Channel Configuration:
[2025-11-26T15:21:25.489Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T15:21:25.489Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T15:21:25.489Z] 
Data Files Check:
[2025-11-26T15:21:25.490Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T15:21:25.491Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T15:21:25.492Z] 
========================================
[2025-11-26T15:21:25.492Z] Starting Enhanced Discord Bot...
[2025-11-26T15:21:25.492Z] ========================================
[2025-11-26T15:21:26.421Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T15:21:26.421Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T15:21:26.422Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T15:21:26.497Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T15:21:26.498Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T15:21:26.498Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T15:21:26.498Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T15:21:26.498Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T15:21:26.498Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T15:21:26.500Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T15:21:26.500Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-26T15:21:26.500Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:26.504Z] [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T15:21:26.636Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:28.280Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:21:29.783Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:29.784Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:29.906Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:21:29.906Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:31.717Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:21:33.220Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:33.220Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:33.381Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:35.166Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T15:21:35.166Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T15:21:36.670Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:36.670Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:37.013Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:21:37.013Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:38.681Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:21:40.184Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:40.185Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:40.520Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:42.248Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:21:43.751Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:43.751Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:44.134Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:21:44.134Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:45.829Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:21:47.333Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:47.333Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:48.412Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:21:49.914Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:49.914Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:50.136Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:51.845Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:21:53.349Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:53.349Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:53.920Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:21:55.423Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:55.423Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:55.538Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:21:57.332Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:21:58.834Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:21:58.834Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:21:59.014Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:22:00.961Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:22:02.465Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:22:02.465Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:22:02.925Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:22:04.428Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:22:04.428Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:22:04.588Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:22:06.464Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:22:07.968Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:22:07.968Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:22:08.208Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T15:22:09.848Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T15:22:11.351Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:22:14.352Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T15:22:14.389Z] [BOT] 📂 Loaded 380 existing routing entries
[2025-11-26T15:22:14.428Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
   Total entries: 394
   Timestamp: 2025-11-26T15:22:14.426Z
[2025-11-26T15:22:16.438Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2306) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*