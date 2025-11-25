# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T14:01:51.675Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T14:01:36.637Z] ========================================
[2025-11-25T14:01:36.639Z] Discord Bot Execution Log
[2025-11-25T14:01:36.639Z] Environment: GitHub Actions
[2025-11-25T14:01:36.639Z] Node Version: v20.19.5
[2025-11-25T14:01:36.639Z] ========================================
[2025-11-25T14:01:36.639Z] Environment Variables Check:
[2025-11-25T14:01:36.639Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T14:01:36.639Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T14:01:36.639Z] 
Multi-Channel Configuration:
[2025-11-25T14:01:36.639Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T14:01:36.639Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T14:01:36.640Z] 
Data Files Check:
[2025-11-25T14:01:36.640Z] .github/data/new_jobs.json: ✅ Exists (2 items, 17270 bytes)
[2025-11-25T14:01:36.642Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327782 bytes)
[2025-11-25T14:01:36.642Z] 
========================================
[2025-11-25T14:01:36.642Z] Starting Enhanced Discord Bot...
[2025-11-25T14:01:36.642Z] ========================================
[2025-11-25T14:01:37.916Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T14:01:37.916Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-11-25T14:01:37.916Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T14:01:37.955Z] [BOT] ✅ Export complete: Added 2, Skipped 0, Total 2
[2025-11-25T14:01:37.956Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
📤 Posting 2 jobs...
[2025-11-25T14:01:37.956Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T14:01:37.957Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-25T14:01:37.957Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
[2025-11-25T14:01:37.958Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T14:01:37.962Z] [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T14:01:38.280Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
  ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T14:01:40.289Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T14:01:41.791Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T14:01:41.792Z] [BOT] 📍 [ROUTING] "AI Engineer" @ ORG_a06522bc Consulting Group
   Category: TECH (matched: "machine learning")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T14:01:42.037Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_a06522bc Consulting Group in #💻・tech-jobs
  ✅ Industry: AI Engineer @ ORG_a06522bc Consulting Group
[2025-11-25T14:01:43.904Z] [BOT] ✅ Created forum post: 🏢 AI Engineer @ ORG_a06522bc Consulting Group in #🌉・san-francisco
[2025-11-25T14:01:43.904Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-11-25T14:01:45.408Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T14:01:48.409Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-25T14:01:48.410Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-25T14:01:48.448Z] [BOT] 📂 Loaded 59 existing routing entries
[2025-11-25T14:01:48.484Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 61
   Timestamp: 2025-11-25T14:01:48.484Z
[2025-11-25T14:01:50.492Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2318) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*