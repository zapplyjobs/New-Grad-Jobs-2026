# Discord Bot Execution Audit
**Timestamp:** 2025-11-27T01:51:50.022Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 4
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-27T01:51:27.878Z] ========================================
[2025-11-27T01:51:27.880Z] Discord Bot Execution Log
[2025-11-27T01:51:27.880Z] Environment: GitHub Actions
[2025-11-27T01:51:27.880Z] Node Version: v20.19.5
[2025-11-27T01:51:27.880Z] ========================================
[2025-11-27T01:51:27.880Z] Environment Variables Check:
[2025-11-27T01:51:27.880Z] DISCORD_TOKEN: ✅ Set
[2025-11-27T01:51:27.880Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.880Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-27T01:51:27.881Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-27T01:51:27.881Z] 
Multi-Channel Configuration:
[2025-11-27T01:51:27.881Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-27T01:51:27.881Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-27T01:51:27.881Z] 
Data Files Check:
[2025-11-27T01:51:27.882Z] .github/data/new_jobs.json: ✅ Exists (7 items, 33758 bytes)
[2025-11-27T01:51:27.884Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328621 bytes)
[2025-11-27T01:51:27.884Z] 
========================================
[2025-11-27T01:51:27.884Z] Starting Enhanced Discord Bot...
[2025-11-27T01:51:27.884Z] ========================================
[2025-11-27T01:51:28.816Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-27T01:51:28.817Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 7 jobs to encrypted JSON...
[2025-11-27T01:51:28.817Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-27T01:51:28.893Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-11-27T01:51:28.893Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T01:51:28.894Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-27T01:51:28.894Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-27T01:51:28.894Z] [BOT] 📬 Found 4 new jobs (3 already posted)...
📤 Posting 4 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-27T01:51:28.895Z] [BOT] 📌 Posting 4 jobs to #💻・tech-jobs
[2025-11-27T01:51:28.896Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-27T01:51:28.896Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:51:28.900Z] [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-27T01:51:29.236Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T01:51:29.237Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T01:51:31.020Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T01:51:32.520Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:51:32.520Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:51:32.525Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T01:51:32.525Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:51:33.148Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
[2025-11-27T01:51:33.148Z] [BOT] ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T01:51:34.909Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-27T01:51:34.909Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-27T01:51:36.409Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:51:36.410Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:51:36.414Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T01:51:36.414Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-27T01:51:36.414Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:51:36.662Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-27T01:51:38.689Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-27T01:51:40.190Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:51:40.190Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:51:40.194Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-27T01:51:40.195Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T01:51:40.195Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-27T01:51:40.431Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-27T01:51:40.431Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-27T01:51:42.181Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-27T01:51:43.683Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-27T01:51:43.683Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-27T01:51:43.687Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-27T01:51:43.687Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-27T01:51:46.689Z] [BOT] 🎉 Posting complete! Successfully posted: 4, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-27T01:51:46.727Z] [BOT] 📂 Loaded 454 existing routing entries
[2025-11-27T01:51:46.766Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 4
   Total entries: 458
   Timestamp: 2025-11-27T01:51:46.765Z
[2025-11-27T01:51:48.772Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2307) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*