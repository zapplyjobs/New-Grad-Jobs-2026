# Discord Bot Execution Audit
**Timestamp:** 2025-11-26T23:32:55.892Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 3
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-26T23:32:41.815Z] ========================================
[2025-11-26T23:32:41.817Z] Discord Bot Execution Log
[2025-11-26T23:32:41.817Z] Environment: GitHub Actions
[2025-11-26T23:32:41.817Z] Node Version: v20.19.5
[2025-11-26T23:32:41.817Z] ========================================
[2025-11-26T23:32:41.817Z] Environment Variables Check:
[2025-11-26T23:32:41.817Z] DISCORD_TOKEN: ✅ Set
[2025-11-26T23:32:41.817Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.817Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-26T23:32:41.817Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-26T23:32:41.817Z] 
Multi-Channel Configuration:
[2025-11-26T23:32:41.817Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-26T23:32:41.818Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-26T23:32:41.818Z] 
Data Files Check:
[2025-11-26T23:32:41.819Z] .github/data/new_jobs.json: ✅ Exists (5 items, 30343 bytes)
[2025-11-26T23:32:41.821Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 328659 bytes)
[2025-11-26T23:32:41.821Z] 
========================================
[2025-11-26T23:32:41.821Z] Starting Enhanced Discord Bot...
[2025-11-26T23:32:41.821Z] ========================================
[2025-11-26T23:32:42.791Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-26T23:32:42.792Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 5 jobs to encrypted JSON...
[2025-11-26T23:32:42.792Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-26T23:32:42.872Z] [BOT] ✅ Export complete: Added 0, Skipped 5, Total 5
[2025-11-26T23:32:42.872Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
[2025-11-26T23:32:42.873Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at Intuit
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
📬 Found 2 new jobs (3 already posted)...
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-26T23:32:42.874Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-11-26T23:32:42.874Z] [BOT] 📍 [ROUTING] "Founding Engineer" @ ORG_83270310
[2025-11-26T23:32:42.874Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T23:32:42.879Z] [BOT ERROR] (node:2217) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-26T23:32:43.087Z] [BOT] ✅ Created forum post: 🏢 Founding Engineer @ ORG_83270310 in #💻・tech-jobs
[2025-11-26T23:32:43.088Z] [BOT] ✅ Industry: Founding Engineer @ ORG_83270310
[2025-11-26T23:32:44.786Z] [BOT] ✅ Created forum post: 🏢 Founding Engineer @ ORG_83270310 in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-11-26T23:32:46.287Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T23:32:46.288Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T23:32:46.292Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-26T23:32:46.292Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Software Engineer – Early Career" @ ORG_101c5054
   Category: TECH (matched: "software")
[2025-11-26T23:32:46.292Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-11-26T23:32:46.775Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_101c5054 in #💻・tech-jobs
  ✅ Industry: Software Engineer – Early Career @ ORG_101c5054
[2025-11-26T23:32:48.500Z] [BOT] ✅ Created forum post: 🏢 Software Engineer – Early Career @ ORG_101c5054 in #🌄・mountain-view
  ✅ Location: 🌄・mountain-view
[2025-11-26T23:32:50.001Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-26T23:32:50.002Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-26T23:32:50.005Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-11-26T23:32:50.005Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-26T23:32:53.006Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
✅ All posting operations complete, cleaning up...
[2025-11-26T23:32:53.045Z] [BOT] 📂 Loaded 438 existing routing entries
[2025-11-26T23:32:53.085Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-26T23:32:53.086Z] [BOT] Total entries: 440
   Timestamp: 2025-11-26T23:32:53.084Z
[2025-11-26T23:32:55.096Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2217) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*