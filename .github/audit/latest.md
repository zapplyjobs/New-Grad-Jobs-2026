# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T13:05:16.790Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T13:04:25.887Z] ========================================
[2025-11-26T13:04:25.889Z] Discord Bot Execution Log
[2025-11-26T13:04:25.889Z] Environment: GitHub Actions
[2025-11-26T13:04:25.889Z] Node Version: v20.19.5
[2025-11-26T13:04:25.889Z] ========================================
[2025-11-26T13:04:25.889Z] Environment Variables Check:
[2025-11-26T13:04:25.889Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T13:04:25.889Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T13:04:25.889Z] 
Multi-Channel Configuration:
[2025-11-26T13:04:25.889Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T13:04:25.889Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T13:04:25.890Z] 
Data Files Check:
[2025-11-26T13:04:25.890Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T13:04:25.892Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T13:04:25.892Z] 
========================================
[2025-11-26T13:04:25.892Z] Starting Enhanced Discord Bot...
[2025-11-26T13:04:25.892Z] ========================================
[2025-11-26T13:04:26.828Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T13:04:26.829Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T13:04:26.829Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T13:04:26.917Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T13:04:26.918Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:04:26.918Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:04:26.918Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T13:04:26.918Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T13:04:26.918Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T13:04:26.920Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T13:04:26.920Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T13:04:26.920Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:26.924Z] [BOT ERROR] (node:2360) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T13:04:27.130Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:28.819Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:04:28.819Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:04:30.322Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:30.323Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:31.183Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:04:31.184Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:32.838Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:04:32.838Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:04:34.340Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:34.341Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:34.818Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:36.502Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:04:38.006Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:38.006Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:38.222Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:04:38.222Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:39.956Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:04:41.459Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:41.459Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:41.629Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:43.366Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:04:44.869Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:44.869Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:45.015Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:46.690Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:04:48.237Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:48.237Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:48.379Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:04:48.379Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:04:49.882Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:49.882Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:50.158Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:51.947Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:04:53.450Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:53.451Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:53.688Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:04:55.192Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:55.192Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:55.470Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:04:57.236Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:04:58.739Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:04:58.739Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:04:58.899Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:05:00.561Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:05:02.064Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:05:02.064Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:05:02.250Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:05:02.250Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:05:03.753Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:05:03.753Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:05:03.958Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:05:05.898Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:05:07.402Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:05:07.402Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:05:07.654Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T13:05:07.655Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T13:05:09.430Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T13:05:10.933Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:05:13.933Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
[2025-11-26T13:05:13.933Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T13:05:13.972Z] [BOT] 📂 Loaded 254 existing routing entries
[2025-11-26T13:05:14.012Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
[2025-11-26T13:05:14.012Z] [BOT] Total entries: 268
   Timestamp: 2025-11-26T13:05:14.011Z
[2025-11-26T13:05:16.023Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2360) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*