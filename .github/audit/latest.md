# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T00:02:58.365Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T00:02:38.587Z] ========================================
[2025-11-27T00:02:38.589Z] Discord Bot Execution Log
[2025-11-27T00:02:38.589Z] Environment: GitHub Actions
[2025-11-27T00:02:38.589Z] Node Version: v20.19.5
[2025-11-27T00:02:38.589Z] ========================================
[2025-11-27T00:02:38.589Z] Environment Variables Check:
[2025-11-27T00:02:38.589Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T00:02:38.589Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T00:02:38.590Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T00:02:38.590Z] 
Multi-Channel Configuration:
[2025-11-27T00:02:38.590Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T00:02:38.590Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T00:02:38.591Z] 
Data Files Check:
[2025-11-27T00:02:38.591Z] .github/data/new_jobs.json: ✅ Exists (7 items, 34111 bytes)
[2025-11-27T00:02:38.593Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328657 bytes)
[2025-11-27T00:02:38.593Z] 
========================================
[2025-11-27T00:02:38.593Z] Starting Enhanced Discord Bot...
[2025-11-27T00:02:38.593Z] ========================================
[2025-11-27T00:02:39.652Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T00:02:39.653Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 7 jobs to encrypted JSON...
[2025-11-27T00:02:39.653Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T00:02:39.732Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-11-27T00:02:39.733Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T00:02:39.734Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T00:02:39.735Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-27T00:02:39.735Z] [BOT] 📍 [ROUTING] "2026 Ford Undergraduate Program - Tech & Data Automation" @ ORG_1aa4f3d6 Motor Company
[2025-11-27T00:02:39.735Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:02:39.739Z] [BOT ERROR] (node:2228) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T00:02:40.016Z] [BOT] ✅ Created forum post: 🏢 2026 Ford Undergraduate Program - Tech & Data Automation @ ORG_1aa4f3d6 Motor Company in #💻・tech-jobs
[2025-11-27T00:02:40.017Z] [BOT] ✅ Industry: 2026 Ford Undergraduate Program - Tech & Data Automation @ ORG_1aa4f3d6 Motor Company
[2025-11-27T00:02:41.518Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:02:41.519Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:02:41.523Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:02:41.523Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Analyst - GTM Strategy & Operations" @ ORG_8bd7b9fd
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:02:41.762Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - GTM Strategy & Operations @ ORG_8bd7b9fd in #💻・tech-jobs
  ✅ Industry: Data Analyst - GTM Strategy & Operations @ ORG_8bd7b9fd
[2025-11-27T00:02:43.455Z] [BOT] ✅ Created forum post: 🏢 Data Analyst - GTM Strategy & Operations @ ORG_8bd7b9fd in #🗽・new-york
[2025-11-27T00:02:43.455Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-27T00:02:44.956Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:02:44.957Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:02:44.960Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:02:44.960Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T00:02:44.960Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:02:45.283Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T00:02:47.040Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T00:02:48.541Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:02:48.542Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:02:48.546Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:02:48.546Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-27T00:02:48.546Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:02:48.808Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T00:02:50.518Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T00:02:52.019Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:02:52.020Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:02:52.024Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:02:52.024Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T00:02:55.025Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T00:02:55.063Z] [BOT] 📂 Loaded 442 existing routing entries
[2025-11-27T00:02:55.102Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2025-11-27T00:02:55.103Z] [BOT] Total entries: 446
   Timestamp: 2025-11-27T00:02:55.100Z
[2025-11-27T00:02:57.112Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2228) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*