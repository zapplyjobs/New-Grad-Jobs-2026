# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T01:07:57.780Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T01:07:36.501Z] ========================================
[2025-11-27T01:07:36.503Z] Discord Bot Execution Log
[2025-11-27T01:07:36.503Z] Environment: GitHub Actions
[2025-11-27T01:07:36.503Z] Node Version: v20.19.5
[2025-11-27T01:07:36.503Z] ========================================
[2025-11-27T01:07:36.504Z] Environment Variables Check:
[2025-11-27T01:07:36.504Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T01:07:36.504Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.504Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T01:07:36.504Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T01:07:36.504Z] 
Multi-Channel Configuration:
[2025-11-27T01:07:36.504Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.504Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.504Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.504Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.504Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.505Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.505Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.505Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.505Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T01:07:36.505Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T01:07:36.505Z] 
Data Files Check:
[2025-11-27T01:07:36.505Z] .github/data/new_jobs.json: ✅ Exists (7 items, 27996 bytes)
[2025-11-27T01:07:36.507Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328664 bytes)
[2025-11-27T01:07:36.507Z] 
========================================
[2025-11-27T01:07:36.507Z] Starting Enhanced Discord Bot...
[2025-11-27T01:07:36.507Z] ========================================
[2025-11-27T01:07:37.495Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T01:07:37.496Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 7 jobs to encrypted JSON...
[2025-11-27T01:07:37.496Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T01:07:37.572Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-11-27T01:07:37.572Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T01:07:37.573Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T01:07:37.573Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T01:07:37.573Z] [BOT] 📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T01:07:37.574Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-27T01:07:37.574Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-27T01:07:37.574Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:07:37.578Z] [BOT ERROR] (node:2197) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T01:07:37.769Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T01:07:37.769Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T01:07:39.514Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T01:07:41.014Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:07:41.015Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:07:41.026Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T01:07:41.026Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T01:07:41.026Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:07:41.507Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T01:07:41.507Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T01:07:43.354Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T01:07:43.355Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T01:07:44.855Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:07:44.855Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:07:44.859Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T01:07:44.859Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:07:45.122Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T01:07:46.897Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T01:07:48.398Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:07:48.399Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:07:48.404Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T01:07:48.404Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
[2025-11-27T01:07:48.404Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:07:48.591Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T01:07:50.272Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T01:07:51.773Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:07:51.774Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:07:51.778Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T01:07:51.778Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T01:07:54.779Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-27T01:07:54.779Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-27T01:07:54.816Z] [BOT] 📂 Loaded 450 existing routing entries
[2025-11-27T01:07:54.854Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
[2025-11-27T01:07:54.854Z] [BOT] Total entries: 454
   Timestamp: 2025-11-27T01:07:54.853Z
[2025-11-27T01:07:56.865Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2197) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*