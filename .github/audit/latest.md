# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T16:42:55.704Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T16:42:37.466Z] ========================================
[2025-12-02T16:42:37.468Z] Discord Bot Execution Log
[2025-12-02T16:42:37.468Z] Environment: GitHub Actions
[2025-12-02T16:42:37.468Z] Node Version: v20.19.5
[2025-12-02T16:42:37.468Z] ========================================
[2025-12-02T16:42:37.468Z] Environment Variables Check:
[2025-12-02T16:42:37.468Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T16:42:37.468Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T16:42:37.469Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T16:42:37.469Z] 
Multi-Channel Configuration:
[2025-12-02T16:42:37.469Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.469Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.470Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T16:42:37.470Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T16:42:37.470Z] 
Data Files Check:
[2025-12-02T16:42:37.470Z] .github/data/new_jobs.json: ✅ Exists (2 items, 7408 bytes)
[2025-12-02T16:42:37.472Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332809 bytes)
[2025-12-02T16:42:37.472Z] 
========================================
[2025-12-02T16:42:37.472Z] Starting Enhanced Discord Bot...
[2025-12-02T16:42:37.472Z] ========================================
[2025-12-02T16:42:39.083Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T16:42:39.084Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-02T16:42:39.084Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T16:42:39.161Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-02T16:42:39.162Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-02T16:42:39.162Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T16:42:39.165Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T16:42:39.165Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_dd730736
[2025-12-02T16:42:39.165Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T16:42:39.170Z] [BOT ERROR] (node:2209) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T16:42:39.411Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_dd730736 in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_dd730736
[2025-12-02T16:42:41.327Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_dd730736 in #🤠・austin
[2025-12-02T16:42:41.327Z] [BOT] ✅ Location: 🤠・austin
[2025-12-02T16:42:42.829Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T16:42:42.829Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T16:42:42.840Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T16:42:42.840Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T16:42:45.841Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-02T16:42:45.841Z] [BOT] 📍 [ROUTING] "Ion Exchange Development Technician" @ ORG_540647baing
   Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-02T16:42:46.197Z] [BOT] ✅ Created forum post: 🏢 Ion Exchange Development Technician @ ORG_540647baing in #🩺・healthcare-jobs
[2025-12-02T16:42:46.197Z] [BOT] ✅ Industry: Ion Exchange Development Technician @ ORG_540647baing
[2025-12-02T16:42:47.963Z] [BOT] ✅ Created forum post: 🏢 Ion Exchange Development Technician @ ORG_540647baing in #🗽・new-york
[2025-12-02T16:42:47.963Z] [BOT] ✅ Location: 🗽・new-york
[2025-12-02T16:42:49.464Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T16:42:49.465Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T16:42:49.469Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T16:42:49.469Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T16:42:52.470Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-02T16:42:52.471Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T16:42:52.508Z] [BOT] 📂 Loaded 602 existing routing entries
[2025-12-02T16:42:52.547Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-02T16:42:52.547Z] [BOT] Total entries: 604
   Timestamp: 2025-12-02T16:42:52.546Z
[2025-12-02T16:42:54.558Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2209) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*