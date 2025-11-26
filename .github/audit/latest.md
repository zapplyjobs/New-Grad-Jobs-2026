# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T04:38:50.131Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T04:38:35.887Z] ========================================
[2025-11-26T04:38:35.888Z] Discord Bot Execution Log
[2025-11-26T04:38:35.888Z] Environment: GitHub Actions
[2025-11-26T04:38:35.888Z] Node Version: v20.19.5
[2025-11-26T04:38:35.888Z] ========================================
[2025-11-26T04:38:35.888Z] Environment Variables Check:
[2025-11-26T04:38:35.888Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T04:38:35.888Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.888Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T04:38:35.888Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T04:38:35.888Z] 
Multi-Channel Configuration:
[2025-11-26T04:38:35.888Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.888Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.888Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.888Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.888Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.889Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.889Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.889Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.889Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T04:38:35.889Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T04:38:35.889Z] 
Data Files Check:
[2025-11-26T04:38:35.889Z] .github/data/new_jobs.json: ✅ Exists (4 items, 20490 bytes)
[2025-11-26T04:38:35.891Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328383 bytes)
[2025-11-26T04:38:35.891Z] 
========================================
[2025-11-26T04:38:35.891Z] Starting Enhanced Discord Bot...
[2025-11-26T04:38:35.891Z] ========================================
[2025-11-26T04:38:37.503Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T04:38:37.503Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 4 jobs to encrypted JSON...
[2025-11-26T04:38:37.504Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T04:38:37.580Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 4
[2025-11-26T04:38:37.580Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T04:38:37.581Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 2 new jobs (2 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T04:38:37.582Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-26T04:38:37.582Z] [BOT] 📍 [ROUTING] "（General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd" @ ORG_1bb6fcfb
[2025-11-26T04:38:37.582Z] [BOT] Category: TECH (matched: "machine learning")
[2025-11-26T04:38:37.582Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T04:38:37.586Z] [BOT ERROR] (node:2362) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T04:38:37.772Z] [BOT] ✅ Created forum post: 🏢 （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb in #💻・tech-jobs
  ✅ Industry: （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb
[2025-11-26T04:38:39.414Z] [BOT] ✅ Created forum post: 🏢 （General Hire）Machine Learning Engineer Graduate - E-Commerce - 2026 Start','Phd @ ORG_1bb6fcfb in #🌉・san-francisco
[2025-11-26T04:38:39.414Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-26T04:38:40.917Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T04:38:40.918Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T04:38:41.084Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T04:38:41.084Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T04:38:42.769Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T04:38:42.769Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T04:38:44.272Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T04:38:47.273Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T04:38:47.309Z] [BOT] 📂 Loaded 133 existing routing entries
[2025-11-26T04:38:47.391Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-26T04:38:47.391Z] [BOT] Total entries: 135
   Timestamp: 2025-11-26T04:38:47.344Z
[2025-11-26T04:38:49.401Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2362) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*