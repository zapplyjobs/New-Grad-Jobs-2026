# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T11:22:00.452Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T11:21:08.826Z] ========================================
[2025-11-26T11:21:08.828Z] Discord Bot Execution Log
[2025-11-26T11:21:08.828Z] Environment: GitHub Actions
[2025-11-26T11:21:08.828Z] Node Version: v20.19.5
[2025-11-26T11:21:08.828Z] ========================================
[2025-11-26T11:21:08.828Z] Environment Variables Check:
[2025-11-26T11:21:08.828Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T11:21:08.828Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.828Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T11:21:08.828Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T11:21:08.828Z] 
Multi-Channel Configuration:
[2025-11-26T11:21:08.828Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.828Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.828Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.828Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.828Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.829Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.829Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.829Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.829Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T11:21:08.829Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T11:21:08.829Z] 
Data Files Check:
[2025-11-26T11:21:08.829Z] .github/data/new_jobs.json: ✅ Exists (17 items, 32381 bytes)
[2025-11-26T11:21:08.831Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328554 bytes)
[2025-11-26T11:21:08.831Z] 
========================================
[2025-11-26T11:21:08.831Z] Starting Enhanced Discord Bot...
[2025-11-26T11:21:08.831Z] ========================================
[2025-11-26T11:21:09.922Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T11:21:09.923Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 17 jobs to encrypted JSON...
[2025-11-26T11:21:09.923Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T11:21:10.005Z] [BOT] ✅ Export complete: Added 0, Skipped 17, Total 17
[2025-11-26T11:21:10.005Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T11:21:10.006Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T11:21:10.006Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 14 new jobs (3 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T11:21:10.007Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T11:21:10.008Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T11:21:10.008Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:10.012Z] [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T11:21:10.208Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:11.948Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:21:11.949Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:21:13.452Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:13.452Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:13.735Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:21:13.735Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:15.442Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:21:16.944Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:16.945Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:17.175Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:21:17.175Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:19.027Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:21:20.530Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:20.530Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:20.829Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:22.490Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:21:23.992Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:23.992Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:24.307Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:26.003Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:21:26.004Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:21:27.506Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:27.506Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:27.669Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:29.448Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:21:30.952Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:30.952Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:31.236Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:21:32.739Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:32.739Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:33.039Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:34.809Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:21:34.809Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:21:36.312Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:36.312Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:36.475Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:21:36.475Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:21:37.978Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:37.978Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:38.143Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:39.851Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:21:41.352Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:41.353Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:41.700Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:21:41.700Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:43.452Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:21:44.954Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:44.954Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:45.239Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:21:46.742Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:46.742Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:46.923Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:21:48.611Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:21:50.114Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:50.114Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:21:50.935Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T11:21:52.618Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T11:21:54.120Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:21:57.120Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T11:21:57.157Z] [BOT] 📂 Loaded 180 existing routing entries
[2025-11-26T11:21:57.193Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-11-26T11:21:57.193Z] [BOT] New entries: 14
   Total entries: 194
   Timestamp: 2025-11-26T11:21:57.192Z
[2025-11-26T11:21:59.199Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2303) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*