# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T15:36:47.242Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T15:35:55.165Z] ========================================
[2025-11-26T15:35:55.166Z] Discord Bot Execution Log
[2025-11-26T15:35:55.167Z] Environment: GitHub Actions
[2025-11-26T15:35:55.167Z] Node Version: v20.19.5
[2025-11-26T15:35:55.167Z] ========================================
[2025-11-26T15:35:55.167Z] Environment Variables Check:
[2025-11-26T15:35:55.167Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T15:35:55.167Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T15:35:55.167Z] 
Multi-Channel Configuration:
[2025-11-26T15:35:55.167Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T15:35:55.167Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T15:35:55.167Z] 
Data Files Check:
[2025-11-26T15:35:55.168Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T15:35:55.170Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T15:35:55.170Z] 
========================================
[2025-11-26T15:35:55.170Z] Starting Enhanced Discord Bot...
[2025-11-26T15:35:55.170Z] ========================================
[2025-11-26T15:35:56.123Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T15:35:56.123Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T15:35:56.124Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T15:35:56.203Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T15:35:56.203Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T15:35:56.204Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T15:35:56.204Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T15:35:56.204Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T15:35:56.204Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T15:35:56.206Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T15:35:56.206Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T15:35:56.207Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:35:56.211Z] [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T15:35:56.417Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:35:56.417Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:35:58.145Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T15:35:58.145Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T15:35:59.647Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:35:59.648Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:35:59.844Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:35:59.844Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:01.759Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:03.262Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:03.262Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:03.542Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:05.304Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:06.807Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:06.807Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:07.546Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:09.242Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:10.745Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:10.745Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:10.920Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:12.713Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:14.216Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:14.217Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:14.636Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:16.433Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T15:36:16.433Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T15:36:17.937Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:17.937Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:18.118Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:36:19.622Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:19.622Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:19.821Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:21.659Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:23.165Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:23.165Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:23.587Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:36:23.587Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:36:25.091Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:25.091Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:25.336Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:27.196Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:28.700Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:28.700Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:28.972Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T15:36:28.973Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:30.913Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:32.417Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:32.417Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:32.832Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T15:36:34.335Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:34.336Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:34.633Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T15:36:36.343Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T15:36:37.846Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:37.846Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T15:36:38.102Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T15:36:39.841Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T15:36:41.344Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T15:36:44.344Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
[2025-11-26T15:36:44.345Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T15:36:44.383Z] [BOT] 📂 Loaded 394 existing routing entries
[2025-11-26T15:36:44.427Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
[2025-11-26T15:36:44.427Z] [BOT] Total entries: 408
   Timestamp: 2025-11-26T15:36:44.425Z
[2025-11-26T15:36:46.435Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2324) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*