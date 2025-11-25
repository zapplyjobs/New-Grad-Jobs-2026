# Discord Bot Execution Audit
**Timestamp:** 2025-11-25T23:46:29.829Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-25T23:46:09.126Z] ========================================
[2025-11-25T23:46:09.128Z] Discord Bot Execution Log
[2025-11-25T23:46:09.128Z] Environment: GitHub Actions
[2025-11-25T23:46:09.128Z] Node Version: v20.19.5
[2025-11-25T23:46:09.128Z] ========================================
[2025-11-25T23:46:09.128Z] Environment Variables Check:
[2025-11-25T23:46:09.128Z] DISCORD_TOKEN: ✅ Set
[2025-11-25T23:46:09.128Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.128Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-25T23:46:09.128Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-25T23:46:09.128Z] 
Multi-Channel Configuration:
[2025-11-25T23:46:09.128Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.128Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.128Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.128Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.128Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.129Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.129Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.129Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.129Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-25T23:46:09.129Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-25T23:46:09.129Z] 
Data Files Check:
[2025-11-25T23:46:09.129Z] .github/data/new_jobs.json: ✅ Exists (3 items, 23493 bytes)
[2025-11-25T23:46:09.131Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 327754 bytes)
[2025-11-25T23:46:09.131Z] 
========================================
[2025-11-25T23:46:09.131Z] Starting Enhanced Discord Bot...
[2025-11-25T23:46:09.131Z] ========================================
[2025-11-25T23:46:10.144Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-25T23:46:10.145Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-25T23:46:10.145Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-25T23:46:10.222Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-25T23:46:10.223Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-11-25T23:46:10.223Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-25T23:46:10.226Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-25T23:46:10.226Z] [BOT] 📍 [ROUTING] "Data Scientist 1" @ ORG_f49eab72ine
[2025-11-25T23:46:10.226Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T23:46:10.230Z] [BOT ERROR] (node:2296) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-25T23:46:10.516Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_f49eab72ine in #💻・tech-jobs
[2025-11-25T23:46:10.517Z] [BOT] ✅ Industry: Data Scientist 1 @ ORG_f49eab72ine
[2025-11-25T23:46:12.224Z] [BOT] ✅ Created forum post: 🏢 Data Scientist 1 @ ORG_f49eab72ine in #🌧️・seattle
[2025-11-25T23:46:12.224Z] [BOT] ✅ Location: 🌧️・seattle
[2025-11-25T23:46:13.726Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T23:46:13.727Z] [BOT] 📍 [ROUTING] "Technical Implementation Engineer 1" @ ORG_dc9e34d5 Technology
   Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-25T23:46:13.967Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #💻・tech-jobs
[2025-11-25T23:46:13.967Z] [BOT] ✅ Industry: Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology
[2025-11-25T23:46:15.677Z] [BOT] ✅ Created forum post: 🏢 Technical Implementation Engineer 1 @ ORG_dc9e34d5 Technology in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-25T23:46:17.179Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T23:46:20.179Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-11-25T23:46:20.179Z] [BOT] 📍 [ROUTING] "Young Investigator - Flexolmo" @ ORG_b344d80e Allen Institute for AI
   Category: HEALTHCARE (matched: "healthcare")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-11-25T23:46:20.673Z] [BOT] ✅ Created forum post: 🏢 Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI in #🩺・healthcare-jobs
  ✅ Industry: Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI
[2025-11-25T23:46:22.423Z] [BOT] ✅ Created forum post: 🏢 Young Investigator - Flexolmo @ ORG_b344d80e Allen Institute for AI in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-25T23:46:23.925Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-25T23:46:26.925Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-25T23:46:26.962Z] [BOT] 📂 Loaded 102 existing routing entries
[2025-11-25T23:46:26.998Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 105
   Timestamp: 2025-11-25T23:46:26.997Z
[2025-11-25T23:46:29.006Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2296) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*