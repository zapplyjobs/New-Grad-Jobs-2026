# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T04:44:37.928Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 8
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T04:44:20.585Z] ========================================
[2025-12-03T04:44:20.587Z] Discord Bot Execution Log
[2025-12-03T04:44:20.587Z] Environment: GitHub Actions
[2025-12-03T04:44:20.587Z] Node Version: v20.19.5
[2025-12-03T04:44:20.587Z] ========================================
[2025-12-03T04:44:20.587Z] Environment Variables Check:
[2025-12-03T04:44:20.587Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T04:44:20.587Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.587Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T04:44:20.587Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T04:44:20.587Z] 
Multi-Channel Configuration:
[2025-12-03T04:44:20.587Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.587Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.587Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.587Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.588Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.588Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.588Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.588Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.588Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T04:44:20.588Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T04:44:20.588Z] 
Data Files Check:
[2025-12-03T04:44:20.588Z] .github/data/new_jobs.json: ✅ Exists (10 items, 56258 bytes)
[2025-12-03T04:44:20.590Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333652 bytes)
[2025-12-03T04:44:20.590Z] 
========================================
[2025-12-03T04:44:20.590Z] Starting Enhanced Discord Bot...
[2025-12-03T04:44:20.590Z] ========================================
[2025-12-03T04:44:21.786Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T04:44:21.787Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T04:44:21.787Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T04:44:21.788Z] [BOT] 📦 Exporting 10 jobs to encrypted JSON...
[2025-12-03T04:44:21.873Z] [BOT] ✅ Export complete: Added 0, Skipped 10, Total 10
[2025-12-03T04:44:21.873Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T04:44:21.874Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T04:44:21.874Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T04:44:21.874Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T04:44:21.874Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T04:44:21.874Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T04:44:21.874Z] [BOT] 📬 Found 2 new jobs (8 already posted)...
📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T04:44:21.875Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T04:44:21.877Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-03T04:44:21.878Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:44:21.882Z] [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T04:44:22.188Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
[2025-12-03T04:44:22.189Z] [BOT] ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T04:44:23.876Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T04:44:25.377Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:44:25.377Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:44:25.381Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T04:44:25.382Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T04:44:28.382Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T04:44:28.382Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T04:44:28.658Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
  ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T04:44:30.312Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T04:44:31.813Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:44:31.814Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:44:31.817Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T04:44:31.817Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T04:44:34.817Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T04:44:34.818Z] [BOT] ✅ Loaded pending queue: 10 total (0 pending, 10 enriched, 0 posted)
[2025-12-03T04:44:34.818Z] [BOT] ✅ Saved pending queue: 10 total (0 pending, 8 enriched, 2 posted)
[2025-12-03T04:44:34.819Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T04:44:34.859Z] [BOT] 📂 Loaded 678 existing routing entries
[2025-12-03T04:44:34.900Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 680
   Timestamp: 2025-12-03T04:44:34.898Z
[2025-12-03T04:44:36.909Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2536) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*