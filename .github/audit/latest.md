# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T13:53:52.192Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 14
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T13:53:01.705Z] ========================================
[2025-11-26T13:53:01.706Z] Discord Bot Execution Log
[2025-11-26T13:53:01.706Z] Environment: GitHub Actions
[2025-11-26T13:53:01.706Z] Node Version: v20.19.5
[2025-11-26T13:53:01.706Z] ========================================
[2025-11-26T13:53:01.706Z] Environment Variables Check:
[2025-11-26T13:53:01.706Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T13:53:01.706Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T13:53:01.707Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T13:53:01.707Z] 
Multi-Channel Configuration:
[2025-11-26T13:53:01.707Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T13:53:01.707Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T13:53:01.707Z] 
Data Files Check:
[2025-11-26T13:53:01.708Z] .github/data/new_jobs.json: ✅ Exists (18 items, 46851 bytes)
[2025-11-26T13:53:01.709Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328624 bytes)
[2025-11-26T13:53:01.709Z] 
========================================
[2025-11-26T13:53:01.710Z] Starting Enhanced Discord Bot...
[2025-11-26T13:53:01.710Z] ========================================
[2025-11-26T13:53:02.797Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T13:53:02.798Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 18 jobs to encrypted JSON...
[2025-11-26T13:53:02.798Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T13:53:02.876Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-11-26T13:53:02.877Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:53:02.877Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T13:53:02.877Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T13:53:02.877Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-26T13:53:02.878Z] [BOT] 📬 Found 14 new jobs (4 already posted)...
📤 Posting 14 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T13:53:02.879Z] [BOT] 📌 Posting 14 jobs to #💻・tech-jobs
[2025-11-26T13:53:02.879Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T13:53:02.879Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:02.883Z] [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T13:53:03.094Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:04.846Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:06.349Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:06.349Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:06.598Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:08.225Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:09.728Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:09.728Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:10.183Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:53:10.183Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:11.912Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:13.415Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:13.415Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:13.634Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:53:13.634Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:15.328Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:53:15.328Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:53:16.830Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:16.830Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:17.003Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:53:17.003Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:18.659Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T13:53:18.659Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T13:53:20.160Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:20.160Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:20.347Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:53:20.347Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:21.971Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:23.473Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:23.474Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:23.737Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:53:23.737Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:53:25.241Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:25.241Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:25.416Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:53:25.416Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:27.374Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:28.877Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:28.877Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:29.169Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:53:30.671Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:30.672Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:30.897Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:32.873Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:34.376Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:34.376Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:34.642Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:36.328Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:37.831Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:37.831Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:38.036Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T13:53:38.036Z] [BOT] ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T13:53:39.540Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:39.540Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:39.678Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T13:53:41.523Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T13:53:43.026Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:43.026Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T13:53:43.241Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T13:53:44.874Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T13:53:46.377Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T13:53:49.378Z] [BOT] 🎉 Posting complete! Successfully posted: 14, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T13:53:49.415Z] [BOT] 📂 Loaded 296 existing routing entries
[2025-11-26T13:53:49.452Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 14
   Total entries: 310
   Timestamp: 2025-11-26T13:53:49.451Z
[2025-11-26T13:53:51.462Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2338) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*