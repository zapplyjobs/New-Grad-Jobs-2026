# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T23:46:39.256Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T23:46:22.712Z] ========================================
[2025-11-26T23:46:22.714Z] Discord Bot Execution Log
[2025-11-26T23:46:22.714Z] Environment: GitHub Actions
[2025-11-26T23:46:22.714Z] Node Version: v20.19.5
[2025-11-26T23:46:22.714Z] ========================================
[2025-11-26T23:46:22.714Z] Environment Variables Check:
[2025-11-26T23:46:22.714Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T23:46:22.714Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.714Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T23:46:22.714Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T23:46:22.714Z] 
Multi-Channel Configuration:
[2025-11-26T23:46:22.715Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T23:46:22.715Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T23:46:22.715Z] 
Data Files Check:
[2025-11-26T23:46:22.716Z] .github/data/new_jobs.json: ✅ Exists (5 items, 32370 bytes)
[2025-11-26T23:46:22.718Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328614 bytes)
[2025-11-26T23:46:22.718Z] 
========================================
[2025-11-26T23:46:22.718Z] Starting Enhanced Discord Bot...
[2025-11-26T23:46:22.718Z] ========================================
[2025-11-26T23:46:23.640Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T23:46:23.640Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 5 jobs to encrypted JSON...
[2025-11-26T23:46:23.641Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T23:46:23.721Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2025-11-26T23:46:23.722Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T23:46:23.722Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T23:46:23.722Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
📬 Found 2 new jobs (3 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T23:46:23.723Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-26T23:46:23.724Z] [BOT] 📍 [ROUTING] "Agentic AI Teacher - Agi Ds" @ ORG_49d2dc07
[2025-11-26T23:46:23.724Z] [BOT] Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T23:46:23.728Z] [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T23:46:23.928Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・tech-jobs
  ✅ Industry: Agentic AI Teacher - Agi Ds @ ORG_49d2dc07
[2025-11-26T23:46:26.222Z] [BOT] ✅ Created forum post: 📦 Agentic AI Teacher - Agi Ds @ ORG_49d2dc07 in #💻・remote-usa
[2025-11-26T23:46:26.222Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T23:46:27.723Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T23:46:27.723Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T23:46:27.729Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T23:46:27.729Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
[2025-11-26T23:46:27.729Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T23:46:28.113Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T23:46:28.113Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T23:46:31.803Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T23:46:33.304Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T23:46:33.305Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T23:46:33.309Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T23:46:33.310Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T23:46:36.310Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T23:46:36.349Z] [BOT] 📂 Loaded 440 existing routing entries
[2025-11-26T23:46:36.388Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 442
   Timestamp: 2025-11-26T23:46:36.387Z
[2025-11-26T23:46:38.400Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2302) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*