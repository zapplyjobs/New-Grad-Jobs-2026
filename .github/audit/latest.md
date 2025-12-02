# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T11:05:11.370Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T11:04:52.853Z] ========================================
[2025-12-02T11:04:52.855Z] Discord Bot Execution Log
[2025-12-02T11:04:52.855Z] Environment: GitHub Actions
[2025-12-02T11:04:52.855Z] Node Version: v20.19.5
[2025-12-02T11:04:52.855Z] ========================================
[2025-12-02T11:04:52.855Z] Environment Variables Check:
[2025-12-02T11:04:52.855Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T11:04:52.855Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.855Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T11:04:52.856Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T11:04:52.856Z] 
Multi-Channel Configuration:
[2025-12-02T11:04:52.856Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T11:04:52.856Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T11:04:52.856Z] 
Data Files Check:
[2025-12-02T11:04:52.857Z] .github/data/new_jobs.json: ✅ Exists (3 items, 22280 bytes)
[2025-12-02T11:04:52.859Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332453 bytes)
[2025-12-02T11:04:52.859Z] 
========================================
[2025-12-02T11:04:52.859Z] Starting Enhanced Discord Bot...
[2025-12-02T11:04:52.859Z] ========================================
[2025-12-02T11:04:54.003Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T11:04:54.004Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-12-02T11:04:54.004Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T11:04:54.078Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-12-02T11:04:54.079Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-02T11:04:54.079Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-02T11:04:54.080Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T11:04:54.081Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-02T11:04:54.081Z] [BOT] 📍 [ROUTING] "AI Prompt Engineer Associate" @ ORG_c910d474 Dynamics Information Technology
[2025-12-02T11:04:54.081Z] [BOT] Category: TECH (matched: "machine learning")
[2025-12-02T11:04:54.081Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T11:04:54.086Z] [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T11:04:54.291Z] [BOT] ✅ Created forum post: 🏢 AI Prompt Engineer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・tech-jobs
[2025-12-02T11:04:54.291Z] [BOT] ✅ Industry: AI Prompt Engineer Associate @ ORG_c910d474 Dynamics Information Technology
[2025-12-02T11:04:56.197Z] [BOT] ✅ Created forum post: 🏢 AI Prompt Engineer Associate @ ORG_c910d474 Dynamics Information Technology in #💻・remote-usa
[2025-12-02T11:04:56.198Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-02T11:04:57.698Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T11:04:57.698Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T11:04:57.704Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T11:04:57.704Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed)" @ ORG_75f04b84
[2025-12-02T11:04:57.704Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T11:04:57.894Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed) @ ORG_75f04b84 in #💻・tech-jobs
[2025-12-02T11:04:57.894Z] [BOT] ✅ Industry: 2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed) @ ORG_75f04b84
[2025-12-02T11:04:59.701Z] [BOT] ✅ Created forum post: 🏢 2026 Full-time - Java Software Engineer I - Onsite (Onsite will be removed) @ ORG_75f04b84 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T11:05:01.202Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T11:05:01.203Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T11:05:01.207Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T11:05:01.208Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Associate Machine Learning Engineer" @ ORG_e5ca4df3 Group
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T11:05:01.701Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #💻・tech-jobs
  ✅ Industry: Associate Machine Learning Engineer @ ORG_e5ca4df3 Group
[2025-12-02T11:05:03.681Z] [BOT] ✅ Created forum post: 🏢 Associate Machine Learning Engineer @ ORG_e5ca4df3 Group in #☀️・sunnyvale
[2025-12-02T11:05:03.681Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-12-02T11:05:05.181Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T11:05:05.182Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T11:05:05.186Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T11:05:05.186Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T11:05:08.187Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T11:05:08.225Z] [BOT] 📂 Loaded 594 existing routing entries
[2025-12-02T11:05:08.264Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
[2025-12-02T11:05:08.264Z] [BOT] New entries: 3
   Total entries: 597
   Timestamp: 2025-12-02T11:05:08.262Z
[2025-12-02T11:05:10.274Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2558) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*