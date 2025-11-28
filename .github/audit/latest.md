# Discord Bot Execution Audit
**Timestamp:** 2025-11-28T21:33:45.283Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 1
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-11-28T21:33:27.227Z] ========================================
[2025-11-28T21:33:27.229Z] Discord Bot Execution Log
[2025-11-28T21:33:27.229Z] Environment: GitHub Actions
[2025-11-28T21:33:27.229Z] Node Version: v20.19.5
[2025-11-28T21:33:27.229Z] ========================================
[2025-11-28T21:33:27.229Z] Environment Variables Check:
[2025-11-28T21:33:27.229Z] DISCORD_TOKEN: ✅ Set
[2025-11-28T21:33:27.230Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.230Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-11-28T21:33:27.230Z] DISCORD_GUILD_ID: ❌ Not set
[2025-11-28T21:33:27.230Z] 
Multi-Channel Configuration:
[2025-11-28T21:33:27.230Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.230Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.230Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.230Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.230Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.231Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.231Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.231Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.231Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-11-28T21:33:27.231Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-11-28T21:33:27.231Z] 
Data Files Check:
[2025-11-28T21:33:27.231Z] .github/data/new_jobs.json: ✅ Exists (3 items, 19940 bytes)
[2025-11-28T21:33:27.233Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 330085 bytes)
[2025-11-28T21:33:27.233Z] 
========================================
[2025-11-28T21:33:27.233Z] Starting Enhanced Discord Bot...
[2025-11-28T21:33:27.233Z] ========================================
[2025-11-28T21:33:28.585Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-11-28T21:33:28.586Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
📦 Exporting 3 jobs to encrypted JSON...
[2025-11-28T21:33:28.586Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-11-28T21:33:28.663Z] [BOT] ✅ Export complete: Added 0, Skipped 3, Total 3
[2025-11-28T21:33:28.664Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-11-28T21:33:28.664Z] [BOT] 📬 Found 2 new jobs (1 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-11-28T21:33:28.664Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-11-28T21:33:28.667Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-11-28T21:33:28.667Z] [BOT] 📍 [ROUTING] "Software Engineer" @ ORG_517e873f Insurance
[2025-11-28T21:33:28.667Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-11-28T21:33:28.672Z] [BOT ERROR] (node:2301) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-11-28T21:33:28.893Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_517e873f Insurance in #💻・tech-jobs
  ✅ Industry: Software Engineer @ ORG_517e873f Insurance
[2025-11-28T21:33:30.855Z] [BOT] ✅ Created forum post: 🏢 Software Engineer @ ORG_517e873f Insurance in #🗽・new-york
  ✅ Location: 🗽・new-york
[2025-11-28T21:33:32.356Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T21:33:32.356Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T21:33:32.361Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T21:33:32.362Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T21:33:35.363Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-11-28T21:33:35.363Z] [BOT] 📍 [ROUTING] "Postdoctoral Researcher Positions at Penn State Center for Exoplanets and Habitable Worlds" @ ORG_478e100e University
   Category: HR (matched: "hr")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-11-28T21:33:35.718Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher Positions at Penn State Center for Exoplanets and Habitable Worlds @ ORG_326e2403 in #📁・JID_e938df7b
[2025-11-28T21:33:35.718Z] [BOT] ✅ Industry: Postdoctoral Researcher Positions at Penn State Center for Exoplanets and Habitable Worlds @ ORG_478e100e University
[2025-11-28T21:33:37.570Z] [BOT] ✅ Created forum post: 🏢 Postdoctoral Researcher Positions at Penn State Center for Exoplanets and Habitable Worlds @ ORG_326e2403 in #💻・remote-usa
[2025-11-28T21:33:37.571Z] [BOT] ✅ Location: 💻・remote-usa
[2025-11-28T21:33:39.072Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-11-28T21:33:39.072Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-11-28T21:33:39.077Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-11-28T21:33:39.077Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-11-28T21:33:42.078Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-11-28T21:33:42.078Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-11-28T21:33:42.117Z] [BOT] 📂 Loaded 530 existing routing entries
[2025-11-28T21:33:42.157Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-11-28T21:33:42.158Z] [BOT] Total entries: 532
   Timestamp: 2025-11-28T21:33:42.156Z
[2025-11-28T21:33:44.167Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2301) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*