# Discord Bot Execution Audit
**Timestamp:** 2025-12-02T19:35:27.993Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-02T19:35:03.546Z] ========================================
[2025-12-02T19:35:03.548Z] Discord Bot Execution Log
[2025-12-02T19:35:03.548Z] Environment: GitHub Actions
[2025-12-02T19:35:03.548Z] Node Version: v20.19.5
[2025-12-02T19:35:03.548Z] ========================================
[2025-12-02T19:35:03.548Z] Environment Variables Check:
[2025-12-02T19:35:03.548Z] DISCORD_TOKEN: ✅ Set
[2025-12-02T19:35:03.548Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.548Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-02T19:35:03.549Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-02T19:35:03.549Z] 
Multi-Channel Configuration:
[2025-12-02T19:35:03.549Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-02T19:35:03.549Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-02T19:35:03.549Z] 
Data Files Check:
[2025-12-02T19:35:03.550Z] .github/data/new_jobs.json: ✅ Exists (4 items, 24342 bytes)
[2025-12-02T19:35:03.551Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333092 bytes)
[2025-12-02T19:35:03.552Z] 
========================================
[2025-12-02T19:35:03.552Z] Starting Enhanced Discord Bot...
[2025-12-02T19:35:03.552Z] ========================================
[2025-12-02T19:35:04.536Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-02T19:35:04.537Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 4 jobs to encrypted JSON...
[2025-12-02T19:35:04.537Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-02T19:35:04.613Z] [BOT] ✅ Export complete: Added 0, Skipped 4, Total 4
[2025-12-02T19:35:04.614Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-02T19:35:04.614Z] [BOT] 📬 Found 3 new jobs (1 already posted)...
📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-02T19:35:04.615Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-02T19:35:04.618Z] [BOT] 📌 Posting 1 jobs to #🩺・healthcare-jobs
[2025-12-02T19:35:04.618Z] [BOT] 📍 [ROUTING] "Design Standard Tech" @ ORG_85937e82 Inc.
[2025-12-02T19:35:04.618Z] [BOT] Category: HEALTHCARE (matched: "medical")
   Channel: 🩺・healthcare-jobs (1391...4716)
[2025-12-02T19:35:04.623Z] [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-02T19:35:05.136Z] [BOT] ✅ Created forum post: 🏢 Design Standard Tech @ ORG_85937e82 Inc. in #🩺・healthcare-jobs
  ✅ Industry: Design Standard Tech @ ORG_85937e82 Inc.
[2025-12-02T19:35:07.038Z] [BOT] ✅ Created forum post: 🏢 Design Standard Tech @ ORG_85937e82 Inc. in #💻・remote-usa
[2025-12-02T19:35:07.039Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-02T19:35:08.539Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:35:08.539Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:35:08.545Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-02T19:35:08.545Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T19:35:11.546Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-02T19:35:11.547Z] [BOT] 📍 [ROUTING] "Associate Data Engineer" @ ORG_30df8d87 BIOLOGICS
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-02T19:35:11.801Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_30df8d87 BIOLOGICS in #💻・tech-jobs
  ✅ Industry: Associate Data Engineer @ ORG_30df8d87 BIOLOGICS
[2025-12-02T19:35:13.572Z] [BOT] ✅ Created forum post: 🏢 Associate Data Engineer @ ORG_30df8d87 BIOLOGICS in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-12-02T19:35:15.072Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:35:15.073Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:35:15.078Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T19:35:15.078Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T19:35:18.079Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-02T19:35:18.079Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-02T19:35:18.605Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-02T19:35:20.293Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-02T19:35:21.793Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-02T19:35:21.794Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-02T19:35:21.798Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-02T19:35:21.798Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-02T19:35:24.799Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-02T19:35:24.799Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-02T19:35:24.837Z] [BOT] 📂 Loaded 611 existing routing entries
[2025-12-02T19:35:24.876Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
   Total entries: 614
[2025-12-02T19:35:24.877Z] [BOT] Timestamp: 2025-12-02T19:35:24.875Z
[2025-12-02T19:35:26.885Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2561) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*