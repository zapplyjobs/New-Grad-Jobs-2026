# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T12:03:02.781Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 15
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T12:02:08.069Z] ========================================
[2025-11-26T12:02:08.070Z] Discord Bot Execution Log
[2025-11-26T12:02:08.070Z] Environment: GitHub Actions
[2025-11-26T12:02:08.070Z] Node Version: v20.19.5
[2025-11-26T12:02:08.070Z] ========================================
[2025-11-26T12:02:08.070Z] Environment Variables Check:
[2025-11-26T12:02:08.070Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T12:02:08.070Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.070Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T12:02:08.070Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T12:02:08.070Z] 
Multi-Channel Configuration:
[2025-11-26T12:02:08.071Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T12:02:08.071Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T12:02:08.071Z] 
Data Files Check:
[2025-11-26T12:02:08.071Z] .github/data/new_jobs.json: ✅ Exists (19 items, 51374 bytes)
[2025-11-26T12:02:08.073Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328604 bytes)
[2025-11-26T12:02:08.073Z] 
========================================
[2025-11-26T12:02:08.073Z] Starting Enhanced Discord Bot...
[2025-11-26T12:02:08.073Z] ========================================
[2025-11-26T12:02:08.990Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T12:02:08.991Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-11-26T12:02:08.991Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T12:02:08.991Z] [BOT] 📦 Exporting 19 jobs to encrypted JSON...
[2025-11-26T12:02:09.072Z] [BOT] ✅ Export complete: Added 0, Skipped 19, Total 19
[2025-11-26T12:02:09.073Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T12:02:09.073Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T12:02:09.073Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T12:02:09.074Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T12:02:09.074Z] [BOT] 📬 Found 15 new jobs (4 already posted)...
📤 Posting 15 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T12:02:09.075Z] [BOT] 📌 Posting 15 jobs to #💻・tech-jobs
[2025-11-26T12:02:09.075Z] [BOT] 📍 [ROUTING] "Software Systems Engineer" @ ORG_d51736fa
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:09.080Z] [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T12:02:09.615Z] [BOT] ✅ Created forum post: 🏢 Software Systems Engineer @ ORG_d51736fa in #💻・tech-jobs
  ✅ Industry: Software Systems Engineer @ ORG_d51736fa
[2025-11-26T12:02:11.672Z] [BOT] ✅ Created forum post: 🏢 Software Systems Engineer @ ORG_d51736fa in #💻・remote-usa
[2025-11-26T12:02:11.672Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T12:02:13.174Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:13.175Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:13.370Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:02:13.370Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:15.319Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:16.822Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:16.822Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:17.037Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:18.683Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:20.186Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:20.186Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:20.335Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:22.102Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:23.604Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:23.604Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:23.818Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:25.511Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:27.014Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:27.014Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:27.223Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:02:27.223Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:28.947Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:30.450Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:30.450Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:30.762Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:32.500Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:34.001Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:34.002Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:34.136Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T12:02:35.640Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:35.640Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:35.816Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T12:02:35.816Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:38.152Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:39.656Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:39.656Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:39.871Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T12:02:41.375Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:41.375Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:41.728Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:43.358Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:44.861Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:44.861Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:45.073Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:46.724Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:48.228Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:48.228Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:48.395Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T12:02:49.899Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:49.899Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:50.154Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T12:02:51.934Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T12:02:53.437Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:02:53.438Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T12:02:53.686Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T12:02:55.585Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T12:02:57.089Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T12:03:00.090Z] [BOT] 🎉 Posting complete! Successfully posted: 15, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T12:03:00.128Z] [BOT] 📂 Loaded 225 existing routing entries
[2025-11-26T12:03:00.165Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-11-26T12:03:00.165Z] [BOT] New entries: 15
   Total entries: 240
   Timestamp: 2025-11-26T12:03:00.164Z
[2025-11-26T12:03:02.175Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2435) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*