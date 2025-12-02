# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T03:40:11.892Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 0
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T03:39:56.813Z] ========================================
[2025-12-02T03:39:56.815Z] Discord Bot Execution Log
[2025-12-02T03:39:56.815Z] Environment: GitHub Actions
[2025-12-02T03:39:56.815Z] Node Version: v20.19.5
[2025-12-02T03:39:56.815Z] ========================================
[2025-12-02T03:39:56.815Z] Environment Variables Check:
[2025-12-02T03:39:56.815Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T03:39:56.815Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.815Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T03:39:56.815Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T03:39:56.815Z] 
Multi-Channel Configuration:
[2025-12-02T03:39:56.816Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T03:39:56.816Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T03:39:56.816Z] 
Data Files Check:
[2025-12-02T03:39:56.817Z] .github/data/new_jobs.json: ✅ Exists (2 items, 11004 bytes)
[2025-12-02T03:39:56.819Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 332217 bytes)
[2025-12-02T03:39:56.819Z] 
========================================
[2025-12-02T03:39:56.819Z] Starting Enhanced Discord Bot...
[2025-12-02T03:39:56.819Z] ========================================
[2025-12-02T03:39:58.082Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T03:39:58.083Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 2 jobs to encrypted JSON...
[2025-12-02T03:39:58.083Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T03:39:58.157Z] [BOT] ✅ Export complete: Added 0, Skipped 2, Total 2
[2025-12-02T03:39:58.158Z] [BOT] 📬 Found 2 new jobs (0 already posted)...
[2025-12-02T03:39:58.158Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-02T03:39:58.159Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T03:39:58.159Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-02T03:39:58.159Z] [BOT] 📍 [ROUTING] "Software Engineer - Core Platform Test - Software Engineering" @ ORG_36b77757
[2025-12-02T03:39:58.160Z] [BOT] Category: TECH (matched: "software")
[2025-12-02T03:39:58.160Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T03:39:58.164Z] [BOT ERROR] (node:2299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T03:39:58.390Z] [BOT] ✅ Created forum post: 📱 Software Engineer - Core Platform Test - Software Engineering @ ORG_36b77757 in #💻・tech-jobs
[2025-12-02T03:39:58.391Z] [BOT] ✅ Industry: Software Engineer - Core Platform Test - Software Engineering @ ORG_36b77757
[2025-12-02T03:40:00.582Z] [BOT] ✅ Created forum post: 📱 Software Engineer - Core Platform Test - Software Engineering @ ORG_36b77757 in #🌉・san-francisco
[2025-12-02T03:40:00.583Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-02T03:40:02.083Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T03:40:02.083Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T03:40:02.094Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T03:40:02.094Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
   Category: TECH (matched: "data")
[2025-12-02T03:40:02.094Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T03:40:02.532Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
  ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-02T03:40:04.244Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-02T03:40:05.745Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T03:40:05.745Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T03:40:05.749Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T03:40:05.750Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T03:40:08.750Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-02T03:40:08.750Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T03:40:08.788Z] [BOT] 📂 Loaded 579 existing routing entries
[2025-12-02T03:40:08.827Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 581
[2025-12-02T03:40:08.827Z] [BOT] Timestamp: 2025-12-02T03:40:08.825Z
[2025-12-02T03:40:10.837Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2299) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*