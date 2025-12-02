# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T03:11:23.133Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T03:11:05.660Z] ========================================
[2025-12-02T03:11:05.662Z] Discord Bot Execution Log
[2025-12-02T03:11:05.662Z] Environment: GitHub Actions
[2025-12-02T03:11:05.662Z] Node Version: v20.19.5
[2025-12-02T03:11:05.662Z] ========================================
[2025-12-02T03:11:05.662Z] Environment Variables Check:
[2025-12-02T03:11:05.662Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T03:11:05.663Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T03:11:05.663Z] 
Multi-Channel Configuration:
[2025-12-02T03:11:05.663Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.663Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.664Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T03:11:05.664Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T03:11:05.664Z] 
Data Files Check:
[2025-12-02T03:11:05.664Z] .github/data/new_jobs.json: ✅ Exists (3 items, 16640 bytes)
[2025-12-02T03:11:05.666Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332205 bytes)
[2025-12-02T03:11:05.666Z] 
========================================
[2025-12-02T03:11:05.666Z] Starting Enhanced Discord Bot...
[2025-12-02T03:11:05.666Z] ========================================
[2025-12-02T03:11:06.716Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T03:11:06.717Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-12-02T03:11:06.718Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T03:11:06.793Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-12-02T03:11:06.794Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-02T03:11:06.794Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-02T03:11:06.794Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T03:11:06.795Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-02T03:11:06.795Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Data Warehouse" @ ORG_af20d304
[2025-12-02T03:11:06.796Z] [BOT] Category: TECH (matched: "software")
[2025-12-02T03:11:06.796Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T03:11:06.801Z] [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T03:11:06.989Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Data Warehouse @ ORG_af20d304 in #💻・tech-jobs
[2025-12-02T03:11:06.989Z] [BOT] ✅ Industry: Software Engineer 1 - Data Warehouse @ ORG_af20d304
[2025-12-02T03:11:08.648Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Data Warehouse @ ORG_af20d304 in #🌉・san-francisco
[2025-12-02T03:11:08.648Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T03:11:10.148Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T03:11:10.148Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T03:11:10.153Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T03:11:10.154Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T03:11:10.840Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-02T03:11:12.501Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T03:11:14.002Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T03:11:14.002Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T03:11:14.007Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T03:11:14.008Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Analyst" @ ORG_7f1f7a12
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T03:11:14.168Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_7f1f7a12 in #💻・tech-jobs
[2025-12-02T03:11:14.168Z] [BOT] ✅ Industry: Data Analyst @ ORG_7f1f7a12
[2025-12-02T03:11:15.855Z] [BOT] ✅ Created forum post: 🏢 Data Analyst @ ORG_7f1f7a12 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-02T03:11:17.355Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T03:11:17.356Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T03:11:17.361Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T03:11:17.361Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T03:11:20.361Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-02T03:11:20.401Z] [BOT] 📂 Loaded 576 existing routing entries
[2025-12-02T03:11:20.442Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 579
[2025-12-02T03:11:20.442Z] [BOT] Timestamp: 2025-12-02T03:11:20.440Z
[2025-12-02T03:11:22.452Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2298) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*