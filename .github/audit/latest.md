# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T11:47:40.907Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T11:46:48.150Z] ========================================
[2025-11-26T11:46:48.151Z] Discord Bot Execution Log
[2025-11-26T11:46:48.151Z] Environment: GitHub Actions
[2025-11-26T11:46:48.151Z] Node Version: v20.19.5
[2025-11-26T11:46:48.151Z] ========================================
[2025-11-26T11:46:48.151Z] Environment Variables Check:
[2025-11-26T11:46:48.152Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T11:46:48.152Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T11:46:48.152Z] 
Multi-Channel Configuration:
[2025-11-26T11:46:48.152Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T11:46:48.152Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T11:46:48.152Z] 
Data Files Check:
[2025-11-26T11:46:48.153Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T11:46:48.154Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328604 bytes)
[2025-11-26T11:46:48.155Z] 
========================================
[2025-11-26T11:46:48.155Z] Starting Enhanced Discord Bot...
[2025-11-26T11:46:48.155Z] ========================================
[2025-11-26T11:46:49.182Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T11:46:49.183Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T11:46:49.183Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T11:46:49.261Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T11:46:49.262Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T11:46:49.262Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T11:46:49.262Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T11:46:49.262Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T11:46:49.262Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T11:46:49.264Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T11:46:49.264Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T11:46:49.264Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:46:49.268Z] [BOT ERROR] (node:2297) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T11:46:49.497Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:46:51.293Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:46:51.293Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:46:52.796Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:46:52.796Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:46:53.109Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:46:53.109Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:46:54.822Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:46:56.325Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:46:56.325Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:46:56.537Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:46:56.537Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:46:58.236Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:46:59.739Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:46:59.739Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:46:59.913Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:47:01.735Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:47:03.239Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:03.239Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:03.572Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:47:03.572Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:47:05.311Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:47:05.311Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:47:06.815Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:06.815Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:07.095Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:47:08.968Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:47:10.471Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:10.471Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:10.657Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:47:12.160Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:12.160Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:12.351Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:47:14.087Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:47:15.590Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:15.590Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:15.799Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:47:17.301Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:17.301Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:17.527Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:47:17.527Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:47:19.283Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:47:20.786Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:20.786Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:20.988Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:47:22.818Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:47:24.321Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:24.321Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:24.623Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:47:26.126Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:26.126Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:26.294Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:47:28.031Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:47:29.534Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:29.534Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:47:31.711Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T11:47:33.392Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T11:47:34.895Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:47:37.896Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T11:47:37.934Z] [BOT] 📂 Loaded 211 existing routing entries
[2025-11-26T11:47:37.972Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
[2025-11-26T11:47:37.972Z] [BOT] Total entries: 225
   Timestamp: 2025-11-26T11:47:37.971Z
[2025-11-26T11:47:39.980Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2297) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*