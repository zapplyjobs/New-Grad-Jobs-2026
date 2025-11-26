# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T15:02:51.976Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T15:02:00.206Z] ========================================
[2025-11-26T15:02:00.207Z] Discord Bot Execution Log
[2025-11-26T15:02:00.207Z] Environment: GitHub Actions
[2025-11-26T15:02:00.207Z] Node Version: v20.19.5
[2025-11-26T15:02:00.207Z] ========================================
[2025-11-26T15:02:00.207Z] Environment Variables Check:
[2025-11-26T15:02:00.207Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T15:02:00.207Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.207Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T15:02:00.207Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T15:02:00.207Z] 
Multi-Channel Configuration:
[2025-11-26T15:02:00.207Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.207Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T15:02:00.208Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T15:02:00.208Z] 
Data Files Check:
[2025-11-26T15:02:00.208Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T15:02:00.210Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T15:02:00.210Z] 
========================================
[2025-11-26T15:02:00.210Z] Starting Enhanced Discord Bot...
[2025-11-26T15:02:00.210Z] ========================================
[2025-11-26T15:02:03.136Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T15:02:03.137Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T15:02:03.137Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T15:02:03.214Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T15:02:03.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T15:02:03.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T15:02:03.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T15:02:03.215Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T15:02:03.216Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T15:02:03.217Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T15:02:03.217Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T15:02:03.218Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:03.222Z] [BOT ERROR] (node:2304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T15:02:03.417Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:02:03.417Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:05.102Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T15:02:05.102Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T15:02:06.606Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:06.606Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:06.890Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:02:06.891Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:08.674Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T15:02:08.674Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T15:02:10.177Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:10.178Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:10.405Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:12.196Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:02:13.699Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:13.700Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:13.899Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:15.577Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T15:02:15.578Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T15:02:17.081Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:17.081Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:17.349Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:19.010Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:02:20.512Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:20.512Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:20.710Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:22.556Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:02:24.059Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:24.059Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:24.208Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:02:25.712Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:25.712Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:25.857Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:27.584Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:02:29.087Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:29.087Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:29.231Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:02:30.733Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:30.733Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:30.890Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:32.579Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:02:34.082Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:34.082Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:34.321Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:35.988Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:02:37.491Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:37.491Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:37.657Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:02:39.160Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:39.160Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:39.459Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:02:41.168Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:02:42.671Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:42.671Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:02:42.829Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T15:02:44.537Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T15:02:46.041Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:02:49.042Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T15:02:49.081Z] [BOT] 📂 Loaded 366 existing routing entries
[2025-11-26T15:02:49.119Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
   Total entries: 380
   Timestamp: 2025-11-26T15:02:49.118Z
[2025-11-26T15:02:51.129Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2304) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*