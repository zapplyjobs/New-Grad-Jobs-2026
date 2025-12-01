# Discord Bot Execution Audit
**Timestamp:** 2025-12-01T16:42:43.160Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-01T16:42:22.977Z] ========================================
[2025-12-01T16:42:22.979Z] Discord Bot Execution Log
[2025-12-01T16:42:22.979Z] Environment: GitHub Actions
[2025-12-01T16:42:22.979Z] Node Version: v20.19.5
[2025-12-01T16:42:22.979Z] ========================================
[2025-12-01T16:42:22.979Z] Environment Variables Check:
[2025-12-01T16:42:22.979Z] DISCORD_TOKEN: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-01T16:42:22.980Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-01T16:42:22.980Z] 
Multi-Channel Configuration:
[2025-12-01T16:42:22.980Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.980Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-01T16:42:22.981Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-01T16:42:22.981Z] 
Data Files Check:
[2025-12-01T16:42:22.981Z] .github/data/new_jobs.json: ✅ Exists (3 items, 15302 bytes)
[2025-12-01T16:42:22.983Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 331515 bytes)
[2025-12-01T16:42:22.983Z] 
========================================
[2025-12-01T16:42:22.983Z] Starting Enhanced Discord Bot...
[2025-12-01T16:42:22.983Z] ========================================
[2025-12-01T16:42:23.899Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-01T16:42:23.900Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-12-01T16:42:23.900Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-01T16:42:23.976Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-12-01T16:42:23.977Z] [BOT] 📬 Found 3 new jobs (0 already posted)...
[2025-12-01T16:42:23.977Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-01T16:42:23.977Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-01T16:42:23.980Z] [BOT] 📌 Posting 1 jobs to #📣・marketing-jobs
[2025-12-01T16:42:23.980Z] [BOT] 📍 [ROUTING] "Technology - Application Development - Full-Time Analyst" @ ORG_e9591c52
[2025-12-01T16:42:23.980Z] [BOT] Category: MARKETING (matched: "growth")
[2025-12-01T16:42:23.980Z] [BOT] Channel: 📣・marketing-jobs (1391...4570)
[2025-12-01T16:42:23.985Z] [BOT ERROR] (node:2401) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-01T16:42:24.202Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full-Time Analyst @ ORG_e9591c52 in #📣・marketing-jobs
[2025-12-01T16:42:24.202Z] [BOT] ✅ Industry: Technology - Application Development - Full-Time Analyst @ ORG_e9591c52
[2025-12-01T16:42:25.892Z] [BOT] ✅ Created forum post: 🏢 Technology - Application Development - Full-Time Analyst @ ORG_e9591c52 in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-01T16:42:27.392Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T16:42:27.393Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T16:42:27.400Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-01T16:42:27.400Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T16:42:30.401Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-01T16:42:30.401Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_05d2f9ea Electric
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T16:42:30.677Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_05d2f9ea Electric in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_05d2f9ea Electric
[2025-12-01T16:42:32.517Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_05d2f9ea Electric in #🤠・austin
[2025-12-01T16:42:32.517Z] [BOT] ✅ Location: 🤠・austin
[2025-12-01T16:42:34.017Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T16:42:34.018Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T16:42:34.022Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T16:42:34.022Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T16:42:34.022Z] [BOT] 📍 [ROUTING] "Field Data Specialist" @ ORG_2b0ec7c6
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-01T16:42:34.193Z] [BOT] ✅ Created forum post: 🏢 Field Data Specialist @ ORG_2b0ec7c6 in #💻・tech-jobs
[2025-12-01T16:42:34.193Z] [BOT] ✅ Industry: Field Data Specialist @ ORG_2b0ec7c6
[2025-12-01T16:42:35.877Z] [BOT] ✅ Created forum post: 🏢 Field Data Specialist @ ORG_2b0ec7c6 in #🤠・austin
[2025-12-01T16:42:35.878Z] [BOT] ✅ Location: 🤠・austin
[2025-12-01T16:42:37.379Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-01T16:42:37.379Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-01T16:42:37.383Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-01T16:42:37.384Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-01T16:42:40.384Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-12-01T16:42:40.423Z] [BOT] 📂 Loaded 556 existing routing entries
[2025-12-01T16:42:40.463Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 559
   Timestamp: 2025-12-01T16:42:40.461Z
[2025-12-01T16:42:42.473Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2401) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*