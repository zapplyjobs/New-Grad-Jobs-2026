# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T00:38:55.076Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T00:38:33.736Z] ========================================
[2025-11-27T00:38:33.737Z] Discord Bot Execution Log
[2025-11-27T00:38:33.738Z] Environment: GitHub Actions
[2025-11-27T00:38:33.738Z] Node Version: v20.19.5
[2025-11-27T00:38:33.738Z] ========================================
[2025-11-27T00:38:33.738Z] Environment Variables Check:
[2025-11-27T00:38:33.738Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T00:38:33.738Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.738Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T00:38:33.738Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T00:38:33.738Z] 
Multi-Channel Configuration:
[2025-11-27T00:38:33.738Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.738Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T00:38:33.739Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T00:38:33.739Z] 
Data Files Check:
[2025-11-27T00:38:33.740Z] .github/data/new_jobs.json: ✅ Exists (7 items, 33758 bytes)
[2025-11-27T00:38:33.741Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328621 bytes)
[2025-11-27T00:38:33.742Z] 
========================================
[2025-11-27T00:38:33.742Z] Starting Enhanced Discord Bot...
[2025-11-27T00:38:33.742Z] ========================================
[2025-11-27T00:38:35.032Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T00:38:35.033Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 7 jobs to encrypted JSON...
[2025-11-27T00:38:35.033Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T00:38:35.113Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-11-27T00:38:35.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T00:38:35.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T00:38:35.114Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T00:38:35.115Z] [BOT] 📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T00:38:35.116Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-27T00:38:35.116Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-27T00:38:35.116Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:38:35.120Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T00:38:35.368Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T00:38:35.368Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T00:38:37.205Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T00:38:37.206Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T00:38:38.706Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:38:38.707Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:38:38.713Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:38:38.713Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T00:38:38.713Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:38:38.920Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T00:38:38.920Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T00:38:40.726Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T00:38:42.226Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:38:42.227Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:38:42.230Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:38:42.231Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:38:42.481Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T00:38:42.481Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T00:38:44.310Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T00:38:45.810Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:38:45.811Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:38:45.816Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:38:45.816Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
[2025-11-27T00:38:45.816Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T00:38:45.964Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-27T00:38:45.964Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-27T00:38:47.669Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-27T00:38:49.169Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T00:38:49.169Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T00:38:49.173Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T00:38:49.173Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T00:38:52.174Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
[2025-11-27T00:38:52.175Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-27T00:38:52.212Z] [BOT] 📂 Loaded 446 existing routing entries
[2025-11-27T00:38:52.250Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 450
   Timestamp: 2025-11-27T00:38:52.248Z
[2025-11-27T00:38:54.261Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*