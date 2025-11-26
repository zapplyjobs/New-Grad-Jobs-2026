# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T11:03:29.378Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 19
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T11:02:20.054Z] ========================================
[2025-11-26T11:02:20.055Z] Discord Bot Execution Log
[2025-11-26T11:02:20.056Z] Environment: GitHub Actions
[2025-11-26T11:02:20.056Z] Node Version: v20.19.5
[2025-11-26T11:02:20.056Z] ========================================
[2025-11-26T11:02:20.056Z] Environment Variables Check:
[2025-11-26T11:02:20.056Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T11:02:20.056Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T11:02:20.056Z] 
Multi-Channel Configuration:
[2025-11-26T11:02:20.056Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T11:02:20.056Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T11:02:20.056Z] 
Data Files Check:
[2025-11-26T11:02:20.057Z] .github/data/new_jobs.json: ✅ Exists (22 items, 73635 bytes)
[2025-11-26T11:02:20.059Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328407 bytes)
[2025-11-26T11:02:20.059Z] 
========================================
[2025-11-26T11:02:20.059Z] Starting Enhanced Discord Bot...
[2025-11-26T11:02:20.059Z] ========================================
[2025-11-26T11:02:21.454Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T11:02:21.455Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 22 jobs to encrypted JSON...
[2025-11-26T11:02:21.455Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T11:02:21.535Z] [BOT] ✅ Export complete: Added 0, Skipped 22, Total 22
[2025-11-26T11:02:21.536Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T11:02:21.537Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T11:02:21.537Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 19 new jobs (3 already posted)...
📤 Posting 19 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T11:02:21.538Z] [BOT] 📌 Posting 19 jobs to #💻・tech-jobs
[2025-11-26T11:02:21.539Z] [BOT] 📍 [ROUTING] "AI Training Data Acquisition Analyst" @ ORG_a48be88b
[2025-11-26T11:02:21.539Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:21.544Z] [BOT ERROR] (node:2603) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T11:02:21.708Z] [BOT] ✅ Created forum post: 🏢 AI Training Data Acquisition Analyst @ ORG_a48be88b in #💻・tech-jobs
[2025-11-26T11:02:21.709Z] [BOT] ✅ Industry: AI Training Data Acquisition Analyst @ ORG_a48be88b
[2025-11-26T11:02:23.373Z] [BOT] ✅ Created forum post: 🏢 AI Training Data Acquisition Analyst @ ORG_a48be88b in #🌉・san-francisco
[2025-11-26T11:02:23.374Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-26T11:02:24.876Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:24.876Z] [BOT] 📍 [ROUTING] "Manufacturing Technology Engineer 1" @ ORG_3a7d2c6a Bottling
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:25.074Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Technology Engineer 1 @ ORG_3a7d2c6a Bottling in #💻・tech-jobs
  ✅ Industry: Manufacturing Technology Engineer 1 @ ORG_3a7d2c6a Bottling
[2025-11-26T11:02:26.769Z] [BOT] ✅ Created forum post: 🏢 Manufacturing Technology Engineer 1 @ ORG_3a7d2c6a Bottling in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-26T11:02:28.271Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:28.272Z] [BOT] 📍 [ROUTING] "Front End Software Engineer 1" @ ORG_3cbc87c7 Anomaly
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:28.429Z] [BOT] ✅ Created forum post: 🏢 Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly in #💻・tech-jobs
[2025-11-26T11:02:28.429Z] [BOT] ✅ Industry: Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly
[2025-11-26T11:02:30.130Z] [BOT] ✅ Created forum post: 🏢 Front End Software Engineer 1 @ ORG_3cbc87c7 Anomaly in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-26T11:02:31.633Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:31.633Z] [BOT] 📍 [ROUTING] "Part-Time Student - Data Analytics" @ ORG_a8cfcd74 Deere
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:31.826Z] [BOT] ✅ Created forum post: 🏢 Part-Time Student - Data Analytics @ ORG_a8cfcd74 Deere in #💻・tech-jobs
[2025-11-26T11:02:31.826Z] [BOT] ✅ Industry: Part-Time Student - Data Analytics @ ORG_a8cfcd74 Deere
[2025-11-26T11:02:33.691Z] [BOT] ✅ Created forum post: 🏢 Part-Time Student - Data Analytics @ ORG_a8cfcd74 Deere in #💻・remote-usa
[2025-11-26T11:02:33.692Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:02:35.195Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:35.195Z] [BOT] 📍 [ROUTING] "Associate Software Development Business Systems Analyst" @ ORG_1c74a0e2 Bank
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:35.589Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Business Systems Analyst @ ORG_1c74a0e2 Bank in #💻・tech-jobs
  ✅ Industry: Associate Software Development Business Systems Analyst @ ORG_1c74a0e2 Bank
[2025-11-26T11:02:37.300Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Business Systems Analyst @ ORG_1c74a0e2 Bank in #💻・remote-usa
[2025-11-26T11:02:37.300Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:02:38.803Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:38.804Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:39.147Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:02:39.148Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:02:40.833Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:02:42.337Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:42.337Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:42.644Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:02:42.644Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:02:44.541Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:02:44.541Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:02:46.044Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:46.045Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:46.259Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-26T11:02:46.260Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:02:48.308Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T11:02:48.308Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T11:02:49.810Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:49.810Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:50.029Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:02:51.693Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:02:53.196Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:53.196Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:53.785Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:02:55.553Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:02:57.056Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:02:57.057Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:02:57.203Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:02:58.881Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:03:00.385Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:00.385Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:00.581Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:03:02.085Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:02.086Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:02.291Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:03:03.960Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:03:05.464Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:05.464Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:05.656Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:03:07.159Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:07.160Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:07.416Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:03:09.259Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:03:10.762Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:10.762Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:11.027Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:03:12.825Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:03:14.328Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:14.328Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:14.614Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-26T11:03:16.117Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:16.117Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:16.454Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T11:03:18.124Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T11:03:19.628Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:19.628Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T11:03:20.174Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T11:03:21.962Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T11:03:23.465Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T11:03:26.466Z] [BOT] 🎉 Posting complete! Successfully posted: 19, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T11:03:26.504Z] [BOT] 📂 Loaded 161 existing routing entries
[2025-11-26T11:03:26.544Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 19
   Total entries: 180
   Timestamp: 2025-11-26T11:03:26.543Z
[2025-11-26T11:03:28.555Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2603) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*