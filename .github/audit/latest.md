# Discord Bot Execution Audit
**Timestamp:** 2025-12-04T01:53:39.760Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 12
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-04T01:53:26.234Z] ========================================
[2025-12-04T01:53:26.236Z] Discord Bot Execution Log
[2025-12-04T01:53:26.236Z] Environment: GitHub Actions
[2025-12-04T01:53:26.236Z] Node Version: v20.19.6
[2025-12-04T01:53:26.236Z] ========================================
[2025-12-04T01:53:26.236Z] Environment Variables Check:
[2025-12-04T01:53:26.236Z] DISCORD_TOKEN: ✅ Set
[2025-12-04T01:53:26.236Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.236Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-04T01:53:26.237Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-04T01:53:26.237Z] 
Multi-Channel Configuration:
[2025-12-04T01:53:26.237Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-04T01:53:26.237Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-04T01:53:26.237Z] 
Data Files Check:
[2025-12-04T01:53:26.238Z] .github/data/new_jobs.json: ✅ Exists (14 items, 89171 bytes)
[2025-12-04T01:53:26.240Z] .github/data/posted_jobs.json: ✅ Exists (3546 items, 238078 bytes)
[2025-12-04T01:53:26.240Z] 
========================================
[2025-12-04T01:53:26.240Z] Starting Enhanced Discord Bot...
[2025-12-04T01:53:26.240Z] ========================================
[2025-12-04T01:53:27.162Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-04T01:53:27.162Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-04T01:53:27.163Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-04T01:53:27.163Z] [BOT] 📦 Exporting 14 jobs to encrypted JSON...
[2025-12-04T01:53:27.242Z] [BOT] ✅ Export complete: Added 0, Skipped 14, Total 14
[2025-12-04T01:53:27.242Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:53:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:53:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:53:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:53:27.243Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:53:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:53:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:53:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:53:27.244Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-04T01:53:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-04T01:53:27.245Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
📬 Found 2 new jobs (12 already posted)...
[2025-12-04T01:53:27.245Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-04T01:53:27.246Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-04T01:53:27.246Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-04T01:53:27.246Z] [BOT] 📍 [ROUTING] "Software Engineer / Principal Software Engineer - Aht" @ ORG_f3f2248d Grumman
[2025-12-04T01:53:27.246Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T01:53:27.251Z] [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-04T01:53:27.491Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-04T01:53:27.491Z] [BOT] ✅ Industry: Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman
[2025-12-04T01:53:29.215Z] [BOT] ✅ Created forum post: 🏢 Software Engineer / Principal Software Engineer - Aht @ ORG_f3f2248d Grumman in #🌧️・seattle
[2025-12-04T01:53:29.215Z] [BOT] ✅ Location: 🌧️・seattle
[2025-12-04T01:53:30.715Z] [BOT] 💾 BEFORE SAVE: Database has 3547 jobs
[2025-12-04T01:53:30.721Z] [BOT] 💾 Saved 3547 posted jobs to database
[2025-12-04T01:53:30.722Z] [BOT] ✅ Verified: Database file contains 3547 jobs
[2025-12-04T01:53:30.722Z] [BOT] 📍 [ROUTING] "Software Engineer - Level 1 or 2" @ ORG_f3f2248d Grumman
   Category: TECH (matched: "software")
[2025-12-04T01:53:30.722Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-04T01:53:30.895Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・tech-jobs
[2025-12-04T01:53:30.895Z] [BOT] ✅ Industry: Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman
[2025-12-04T01:53:32.534Z] [BOT] ✅ Created forum post: 🏢 Software Engineer - Level 1 or 2 @ ORG_f3f2248d Grumman in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-04T01:53:34.035Z] [BOT] 💾 BEFORE SAVE: Database has 3548 jobs
[2025-12-04T01:53:34.038Z] [BOT] 💾 Saved 3548 posted jobs to database
✅ Verified: Database file contains 3548 jobs
[2025-12-04T01:53:37.039Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-04T01:53:37.040Z] [BOT] ✅ Loaded pending queue: 14 total (0 pending, 14 enriched, 0 posted)
[2025-12-04T01:53:37.042Z] [BOT] ✅ Saved pending queue: 14 total (0 pending, 12 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2025-12-04T01:53:37.042Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-04T01:53:37.079Z] [BOT] 📂 Loaded 46 existing routing entries
[2025-12-04T01:53:37.115Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-04T01:53:37.115Z] [BOT] Total entries: 48
   Timestamp: 2025-12-04T01:53:37.114Z
[2025-12-04T01:53:39.126Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2499) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*