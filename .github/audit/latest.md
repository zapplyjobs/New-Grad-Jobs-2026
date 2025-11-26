# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T01:51:27.757Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T01:51:07.869Z] ========================================
[2025-11-26T01:51:07.870Z] Discord Bot Execution Log
[2025-11-26T01:51:07.870Z] Environment: GitHub Actions
[2025-11-26T01:51:07.870Z] Node Version: v20.19.5
[2025-11-26T01:51:07.870Z] ========================================
[2025-11-26T01:51:07.870Z] Environment Variables Check:
[2025-11-26T01:51:07.870Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T01:51:07.870Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.870Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T01:51:07.871Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T01:51:07.871Z] 
Multi-Channel Configuration:
[2025-11-26T01:51:07.871Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T01:51:07.871Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T01:51:07.871Z] 
Data Files Check:
[2025-11-26T01:51:07.871Z] .github/data/new_jobs.json: ✅ Exists (3 items, 18707 bytes)
[2025-11-26T01:51:07.873Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327886 bytes)
[2025-11-26T01:51:07.873Z] 
========================================
[2025-11-26T01:51:07.873Z] Starting Enhanced Discord Bot...
[2025-11-26T01:51:07.873Z] ========================================
[2025-11-26T01:51:08.860Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T01:51:08.861Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-26T01:51:08.861Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T01:51:08.936Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-26T01:51:08.937Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
📤 Posting 3 jobs...
[2025-11-26T01:51:08.937Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T01:51:08.939Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-26T01:51:08.939Z] [BOT] 📍 [ROUTING] "Systems Engineer" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T01:51:08.944Z] [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T01:51:09.131Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-11-26T01:51:09.132Z] [BOT] ✅ Industry: Systems Engineer @ ORG_f3f2248d Grumman
[2025-11-26T01:51:10.802Z] [BOT] ✅ Created forum post: 🏢 Systems Engineer @ ORG_f3f2248d Grumman in #☀️・sunnyvale
[2025-11-26T01:51:10.802Z] [BOT] ✅ Location: ☀️・sunnyvale
[2025-11-26T01:51:12.305Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T01:51:12.305Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T01:51:12.454Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T01:51:14.180Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-26T01:51:15.683Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T01:51:18.684Z] [BOT] 📌 Posting 1 jobs to #💲・sales-jobs
[2025-11-26T01:51:18.685Z] [BOT] 📍 [ROUTING] "Pubsec Project Admin" @ ORG_21db5199 International 
   Category: SALES (matched: "sales")
[2025-11-26T01:51:18.685Z] [BOT] Channel: 💲・sales-jobs (1391...3632)
[2025-11-26T01:51:18.851Z] [BOT] ✅ Created forum post: 🏢 Pubsec Project Admin @ ORG_21db5199 International  in #💲・sales-jobs
[2025-11-26T01:51:18.852Z] [BOT] ✅ Industry: Pubsec Project Admin @ ORG_21db5199 International
[2025-11-26T01:51:20.545Z] [BOT] ✅ Created forum post: 🏢 Pubsec Project Admin @ ORG_21db5199 International  in #💻・remote-usa
[2025-11-26T01:51:20.545Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-26T01:51:22.048Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T01:51:25.049Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-11-26T01:51:25.049Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T01:51:25.086Z] [BOT] 📂 Loaded 115 existing routing entries
[2025-11-26T01:51:25.122Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-11-26T01:51:25.122Z] [BOT] Total entries: 118
   Timestamp: 2025-11-26T01:51:25.122Z
[2025-11-26T01:51:27.132Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2519) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*