# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T22:04:49.746Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 1
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-28T22:04:38.756Z] ========================================
[2025-11-28T22:04:38.758Z] Discord Bot Execution Log
[2025-11-28T22:04:38.758Z] Environment: GitHub Actions
[2025-11-28T22:04:38.758Z] Node Version: v20.19.5
[2025-11-28T22:04:38.758Z] ========================================
[2025-11-28T22:04:38.758Z] Environment Variables Check:
[2025-11-28T22:04:38.758Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T22:04:38.758Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.758Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T22:04:38.758Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T22:04:38.759Z] 
Multi-Channel Configuration:
[2025-11-28T22:04:38.759Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T22:04:38.759Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T22:04:38.759Z] 
Data Files Check:
[2025-11-28T22:04:38.760Z] .github/data/new_jobs.json: ✅ Exists (2 items, 7518 bytes)
[2025-11-28T22:04:38.762Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330248 bytes)
[2025-11-28T22:04:38.762Z] 
========================================
[2025-11-28T22:04:38.762Z] Starting Enhanced Discord Bot...
[2025-11-28T22:04:38.762Z] ========================================
[2025-11-28T22:04:39.821Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T22:04:39.822Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-28T22:04:39.822Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T22:04:39.899Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-11-28T22:04:39.899Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T22:04:39.900Z] [BOT] 📬 Found 1 new jobs (1 already posted)...
📋 After blacklist filter: 1 jobs (0 blacklisted)
[2025-11-28T22:04:39.900Z] [BOT] 📋 After title+company+location dedup: 1 unique jobs to post
📤 Posting 1 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-28T22:04:39.901Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-28T22:04:39.901Z] [BOT] 📍 [ROUTING] "Engineering Support Associate" @ ORG_e1de44d1ington County VA
[2025-11-28T22:04:39.901Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T22:04:39.906Z] [BOT ERROR] (node:2204) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T22:04:40.188Z] [BOT] ✅ Created forum post: 🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA in #💻・tech-jobs
[2025-11-28T22:04:40.189Z] [BOT] ✅ Industry: Engineering Support Associate @ ORG_e1de44d1ington County VA
[2025-11-28T22:04:41.897Z] [BOT] ✅ Created forum post: 🏢 Engineering Support Associate @ ORG_e1de44d1ington County VA in #💻・remote-usa
[2025-11-28T22:04:41.898Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-28T22:04:43.398Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T22:04:43.399Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T22:04:43.406Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-28T22:04:43.406Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T22:04:46.407Z] [BOT] 🎉 Posting complete! Successfully posted: 1, Failed: 0
[2025-11-28T22:04:46.407Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-28T22:04:46.446Z] [BOT] 📂 Loaded 532 existing routing entries
[2025-11-28T22:04:46.484Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 1
   Total entries: 533
[2025-11-28T22:04:46.484Z] [BOT] Timestamp: 2025-11-28T22:04:46.482Z
[2025-11-28T22:04:48.492Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2204) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*