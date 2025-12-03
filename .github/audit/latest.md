# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T05:37:27.851Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 24
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T05:37:10.670Z] ========================================
[2025-12-03T05:37:10.672Z] Discord Bot Execution Log
[2025-12-03T05:37:10.672Z] Environment: GitHub Actions
[2025-12-03T05:37:10.672Z] Node Version: v20.19.5
[2025-12-03T05:37:10.672Z] ========================================
[2025-12-03T05:37:10.672Z] Environment Variables Check:
[2025-12-03T05:37:10.672Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T05:37:10.672Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.672Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T05:37:10.673Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T05:37:10.673Z] 
Multi-Channel Configuration:
[2025-12-03T05:37:10.673Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T05:37:10.673Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T05:37:10.673Z] 
Data Files Check:
[2025-12-03T05:37:10.675Z] .github/data/new_jobs.json: ✅ Exists (26 items, 149998 bytes)
[2025-12-03T05:37:10.677Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333652 bytes)
[2025-12-03T05:37:10.677Z] 
========================================
[2025-12-03T05:37:10.677Z] Starting Enhanced Discord Bot...
[2025-12-03T05:37:10.677Z] ========================================
[2025-12-03T05:37:11.844Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T05:37:11.845Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T05:37:11.845Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T05:37:11.846Z] [BOT] 📦 Exporting 26 jobs to encrypted JSON...
[2025-12-03T05:37:11.930Z] [BOT] ✅ Export complete: Added 0, Skipped 26, Total 26
[2025-12-03T05:37:11.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:37:11.931Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:37:11.932Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:37:11.932Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:37:11.932Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:37:11.932Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:37:11.932Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:37:11.932Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:37:11.933Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:37:11.933Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:37:11.933Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:37:11.933Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:37:11.933Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:37:11.933Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 2 new jobs (24 already posted)...
[2025-12-03T05:37:11.934Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T05:37:11.934Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-03T05:37:11.934Z] [BOT] 📤 Posting 2 jobs...
[2025-12-03T05:37:11.934Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T05:37:11.937Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-03T05:37:11.937Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
[2025-12-03T05:37:11.937Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T05:37:11.942Z] [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T05:37:12.095Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
[2025-12-03T05:37:12.095Z] [BOT] ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T05:37:13.886Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
[2025-12-03T05:37:13.886Z] [BOT] ✅ Location: 💻・remote-usa
[2025-12-03T05:37:15.388Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:37:15.388Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:37:15.394Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T05:37:15.394Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T05:37:18.395Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T05:37:18.395Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T05:37:18.704Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2025-12-03T05:37:18.704Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T05:37:20.371Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
[2025-12-03T05:37:20.372Z] [BOT] ✅ Location: 🤠・austin
[2025-12-03T05:37:21.872Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:37:21.872Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:37:21.877Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T05:37:21.877Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T05:37:24.878Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T05:37:24.879Z] [BOT] ✅ Loaded pending queue: 26 total (0 pending, 26 enriched, 0 posted)
[2025-12-03T05:37:24.881Z] [BOT] ✅ Saved pending queue: 26 total (0 pending, 24 enriched, 2 posted)
📋 Updated queue: marked 2 jobs as posted
[2025-12-03T05:37:24.881Z] [BOT] ✅ All posting operations complete, cleaning up...
[2025-12-03T05:37:24.921Z] [BOT] 📂 Loaded 686 existing routing entries
[2025-12-03T05:37:24.962Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-03T05:37:24.962Z] [BOT] Total entries: 688
   Timestamp: 2025-12-03T05:37:24.960Z
[2025-12-03T05:37:26.974Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2520) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*