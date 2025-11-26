# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T05:01:57.134Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 2
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T05:01:45.361Z] ========================================
[2025-11-26T05:01:45.362Z] Discord Bot Execution Log
[2025-11-26T05:01:45.362Z] Environment: GitHub Actions
[2025-11-26T05:01:45.362Z] Node Version: v20.19.5
[2025-11-26T05:01:45.362Z] ========================================
[2025-11-26T05:01:45.362Z] Environment Variables Check:
[2025-11-26T05:01:45.362Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T05:01:45.362Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.362Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T05:01:45.362Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T05:01:45.362Z] 
Multi-Channel Configuration:
[2025-11-26T05:01:45.363Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T05:01:45.363Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T05:01:45.363Z] 
Data Files Check:
[2025-11-26T05:01:45.363Z] .github/data/new_jobs.json: ✅ Exists (4 items, 26537 bytes)
[2025-11-26T05:01:45.365Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328350 bytes)
[2025-11-26T05:01:45.365Z] 
========================================
[2025-11-26T05:01:45.365Z] Starting Enhanced Discord Bot...
[2025-11-26T05:01:45.365Z] ========================================
[2025-11-26T05:01:46.255Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T05:01:46.256Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 4 jobs to encrypted JSON...
[2025-11-26T05:01:46.257Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T05:01:46.335Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 4
[2025-11-26T05:01:46.336Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-11-26T05:01:46.336Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
📬 Found 2 new jobs (2 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T05:01:46.338Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-26T05:01:46.338Z] [BOT] 📍 [ROUTING] "Associate Software Development Engineer" @ ORG_6bda74c9 Health
[2025-11-26T05:01:46.338Z] [BOT] Category: TECH (matched: "software")
[2025-11-26T05:01:46.338Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T05:01:46.343Z] [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T05:01:46.667Z] [BOT] ✅ Created forum post: 🏢 Associate Software Development Engineer @ ORG_6bda74c9 Health in #💻・tech-jobs
[2025-11-26T05:01:46.667Z] [BOT] ✅ Industry: Associate Software Development Engineer @ ORG_6bda74c9 Health
[2025-11-26T05:01:48.170Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T05:01:48.170Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T05:01:48.301Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-26T05:01:48.301Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-26T05:01:49.961Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
[2025-11-26T05:01:49.961Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-26T05:01:51.464Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T05:01:54.465Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-26T05:01:54.465Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-26T05:01:54.503Z] [BOT] 📂 Loaded 136 existing routing entries
[2025-11-26T05:01:54.540Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-26T05:01:54.541Z] [BOT] Total entries: 138
   Timestamp: 2025-11-26T05:01:54.540Z
[2025-11-26T05:01:56.549Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2445) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*