# Discord Bot Execution Audit
**Timestamp:** 2025-11-30T21:23:14.866Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-30T21:22:54.958Z] ========================================
[2025-11-30T21:22:54.959Z] Discord Bot Execution Log
[2025-11-30T21:22:54.960Z] Environment: GitHub Actions
[2025-11-30T21:22:54.960Z] Node Version: v20.19.5
[2025-11-30T21:22:54.960Z] ========================================
[2025-11-30T21:22:54.960Z] Environment Variables Check:
[2025-11-30T21:22:54.960Z] DISCORD_TOKEN: ✅ Set
[2025-11-30T21:22:54.960Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.960Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-30T21:22:54.960Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-30T21:22:54.960Z] 
Multi-Channel Configuration:
[2025-11-30T21:22:54.960Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.960Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-30T21:22:54.961Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-30T21:22:54.961Z] 
Data Files Check:
[2025-11-30T21:22:54.961Z] .github/data/new_jobs.json: ✅ Exists (3 items, 18369 bytes)
[2025-11-30T21:22:54.963Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330834 bytes)
[2025-11-30T21:22:54.963Z] 
========================================
[2025-11-30T21:22:54.964Z] Starting Enhanced Discord Bot...
[2025-11-30T21:22:54.964Z] ========================================
[2025-11-30T21:22:55.828Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-30T21:22:55.828Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-30T21:22:55.829Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-30T21:22:55.907Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-30T21:22:55.908Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-11-30T21:22:55.908Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-11-30T21:22:55.908Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-30T21:22:55.911Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-11-30T21:22:55.911Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full Time Analyst" @ ORG_e9591c52
[2025-11-30T21:22:55.911Z] [BOT] Category: MARKETING (matched: "growth")
[2025-11-30T21:22:55.911Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-11-30T21:22:55.916Z] [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-30T21:22:56.052Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #📣・marketing-jobs
[2025-11-30T21:22:56.052Z] [BOT] ✅ Industry: Technology - Application Development - Full Time Analyst @ ORG_e9591c52
[2025-11-30T21:22:57.840Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full Time Analyst @ ORG_e9591c52 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-30T21:22:59.340Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-30T21:22:59.341Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-30T21:22:59.346Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-30T21:22:59.346Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-30T21:23:02.347Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-30T21:23:02.347Z] [BOT] 📍 [ROUTING] "Software Engineer 1 - Thermal Camera" @ ORG_7f1f7a12
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-30T21:23:02.582Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #💻・tech-jobs
[2025-11-30T21:23:02.582Z] [BOT] ✅ Industry: Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12
[2025-11-30T21:23:04.292Z] [BOT] ✅ Created forum post: 🏢 Software Engineer 1 - Thermal Camera @ ORG_7f1f7a12 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-11-30T21:23:05.792Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-30T21:23:05.793Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-30T21:23:05.822Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-30T21:23:05.822Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Reference Data Analyst" @ ORG_e9591c52
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-30T21:23:05.986Z] [BOT] ✅ Created forum post: 🏢 Reference Data Analyst @ ORG_e9591c52 in #💻・tech-jobs
[2025-11-30T21:23:05.986Z] [BOT] ✅ Industry: Reference Data Analyst @ ORG_e9591c52
[2025-11-30T21:23:07.704Z] [BOT] ✅ Created forum post: 🏢 Reference Data Analyst @ ORG_e9591c52 in #🗽・new-york
[2025-11-30T21:23:07.704Z] [BOT] ✅ Location: 🗽・new-york
[2025-11-30T21:23:09.206Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-30T21:23:09.206Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-30T21:23:09.210Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-30T21:23:09.210Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-30T21:23:12.211Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-11-30T21:23:12.211Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-30T21:23:12.249Z] [BOT] 📂 Loaded 544 existing routing entries
[2025-11-30T21:23:12.288Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 547
   Timestamp: 2025-11-30T21:23:12.287Z
[2025-11-30T21:23:14.297Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2548) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*