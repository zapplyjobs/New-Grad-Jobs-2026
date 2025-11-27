# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T04:49:07.079Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T04:48:55.396Z] ========================================
[2025-11-27T04:48:55.397Z] Discord Bot Execution Log
[2025-11-27T04:48:55.398Z] Environment: GitHub Actions
[2025-11-27T04:48:55.398Z] Node Version: v20.19.5
[2025-11-27T04:48:55.398Z] ========================================
[2025-11-27T04:48:55.398Z] Environment Variables Check:
[2025-11-27T04:48:55.398Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T04:48:55.398Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.398Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T04:48:55.398Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T04:48:55.398Z] 
Multi-Channel Configuration:
[2025-11-27T04:48:55.398Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.398Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T04:48:55.399Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T04:48:55.399Z] 
Data Files Check:
[2025-11-27T04:48:55.400Z] .github/data/new_jobs.json: ✅ Exists (15 items, 39024 bytes)
[2025-11-27T04:48:55.402Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 329525 bytes)
[2025-11-27T04:48:55.402Z] 
========================================
[2025-11-27T04:48:55.402Z] Starting Enhanced Discord Bot...
[2025-11-27T04:48:55.402Z] ========================================
[2025-11-27T04:48:56.200Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T04:48:56.201Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 15 jobs to encrypted JSON...
[2025-11-27T04:48:56.201Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T04:48:56.278Z] [BOT] ✅ Export complete: Added 0, Skipped 15, Total 15
[2025-11-27T04:48:56.279Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-27T04:48:56.279Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T04:48:56.279Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T04:48:56.280Z] [BOT] 📬 Found 11 new jobs (4 already posted)...
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T04:48:56.280Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
[2025-11-27T04:48:56.280Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
⏭️ Skipping duplicate title+company: Agentic AI Teacher at Amazon (already posting one with this title)
[2025-11-27T04:48:56.280Z] [BOT] ⏭️ Skipping duplicate title+company: Agentic AI Teacher - Agi Ds at Amazon (already posting one with this title)
📋 After title+company dedup: 2 unique jobs to post
   (9 skipped as duplicate titles)
⏸️ Limiting to 50 jobs this run, 9 deferred for next run
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T04:48:56.281Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-27T04:48:56.281Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:48:56.286Z] [BOT ERROR] (node:2205) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T04:48:56.420Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T04:48:58.074Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T04:48:59.575Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:48:59.575Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:48:59.704Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T04:48:59.704Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T04:48:59.904Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher @ ORG_49d2dc07
[2025-11-27T04:49:01.406Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T04:49:01.406Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T04:49:01.410Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T04:49:04.411Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-27T04:49:04.411Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-27T04:49:04.449Z] [BOT] 📂 Loaded 499 existing routing entries
[2025-11-27T04:49:04.487Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-27T04:49:04.488Z] [BOT] Total entries: 501
   Timestamp: 2025-11-27T04:49:04.486Z
[2025-11-27T04:49:06.496Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2205) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*