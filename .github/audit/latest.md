# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T14:38:08.730Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T14:37:15.818Z] ========================================
[2025-11-26T14:37:15.819Z] Discord Bot Execution Log
[2025-11-26T14:37:15.819Z] Environment: GitHub Actions
[2025-11-26T14:37:15.819Z] Node Version: v20.19.5
[2025-11-26T14:37:15.819Z] ========================================
[2025-11-26T14:37:15.819Z] Environment Variables Check:
[2025-11-26T14:37:15.819Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T14:37:15.820Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T14:37:15.820Z] 
Multi-Channel Configuration:
[2025-11-26T14:37:15.820Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T14:37:15.820Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T14:37:15.820Z] 
Data Files Check:
[2025-11-26T14:37:15.821Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T14:37:15.823Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T14:37:15.823Z] 
========================================
[2025-11-26T14:37:15.823Z] Starting Enhanced Discord Bot...
[2025-11-26T14:37:15.823Z] ========================================
[2025-11-26T14:37:17.185Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T14:37:17.185Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T14:37:17.186Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T14:37:17.262Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T14:37:17.263Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T14:37:17.263Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T14:37:17.263Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T14:37:17.263Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T14:37:17.264Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T14:37:17.265Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T14:37:17.265Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T14:37:17.265Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:17.269Z] [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T14:37:17.481Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:19.347Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T14:37:19.347Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T14:37:20.850Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:20.850Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:21.148Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T14:37:21.149Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:22.913Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:24.416Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:24.416Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:24.849Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:26.566Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:28.070Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:28.070Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:28.465Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:30.183Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:31.687Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:31.687Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:32.297Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:34.093Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:35.596Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:35.596Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:35.835Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:37.746Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:39.250Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:39.250Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:39.468Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:37:40.971Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:40.971Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:41.262Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:43.022Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:44.525Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:44.526Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:44.720Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:37:46.224Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:46.224Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:46.497Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:48.488Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:49.991Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:49.992Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:50.215Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:52.131Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:53.634Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:53.634Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:53.909Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T14:37:55.412Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:55.413Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:55.648Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T14:37:57.352Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T14:37:58.856Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:37:58.856Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T14:37:59.134Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T14:38:00.832Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T14:38:00.833Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T14:38:02.335Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T14:38:05.336Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
[2025-11-26T14:38:05.336Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T14:38:05.374Z] [BOT] 📂 Loaded 338 existing routing entries
[2025-11-26T14:38:05.411Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
[2025-11-26T14:38:05.411Z] [BOT] Total entries: 352
   Timestamp: 2025-11-26T14:38:05.410Z
[2025-11-26T14:38:07.419Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*