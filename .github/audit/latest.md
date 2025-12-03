# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T05:05:07.768Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 16
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T05:04:50.611Z] ========================================
[2025-12-03T05:04:50.613Z] Discord Bot Execution Log
[2025-12-03T05:04:50.613Z] Environment: GitHub Actions
[2025-12-03T05:04:50.613Z] Node Version: v20.19.5
[2025-12-03T05:04:50.613Z] ========================================
[2025-12-03T05:04:50.613Z] Environment Variables Check:
[2025-12-03T05:04:50.613Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T05:04:50.613Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.613Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T05:04:50.613Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T05:04:50.613Z] 
Multi-Channel Configuration:
[2025-12-03T05:04:50.613Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T05:04:50.614Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T05:04:50.614Z] 
Data Files Check:
[2025-12-03T05:04:50.615Z] .github/data/new_jobs.json: ✅ Exists (18 items, 103128 bytes)
[2025-12-03T05:04:50.617Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333652 bytes)
[2025-12-03T05:04:50.617Z] 
========================================
[2025-12-03T05:04:50.617Z] Starting Enhanced Discord Bot...
[2025-12-03T05:04:50.617Z] ========================================
[2025-12-03T05:04:51.768Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T05:04:51.769Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T05:04:51.769Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T05:04:51.771Z] [BOT] 📦 Exporting 18 jobs to encrypted JSON...
[2025-12-03T05:04:51.850Z] [BOT] ✅ Export complete: Added 0, Skipped 18, Total 18
[2025-12-03T05:04:51.851Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:04:51.851Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:04:51.851Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:04:51.851Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:04:51.851Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:04:51.852Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:04:51.852Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T05:04:51.852Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T05:04:51.852Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T05:04:51.852Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T05:04:51.852Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 2 new jobs (16 already posted)...
[2025-12-03T05:04:51.852Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T05:04:51.853Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
[2025-12-03T05:04:51.853Z] [BOT] 📤 Posting 2 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T05:04:51.856Z] [BOT] 📌 Posting 1 jobs to #💻・tech-jobs
[2025-12-03T05:04:51.856Z] [BOT] 📍 [ROUTING] "IT Data Warehouse Specialist" @ ORG_969850e5 Therapies
   Category: TECH (matched: "data")
[2025-12-03T05:04:51.856Z] [BOT] Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T05:04:51.862Z] [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T05:04:52.024Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・tech-jobs
  ✅ Industry: IT Data Warehouse Specialist @ ORG_969850e5 Therapies
[2025-12-03T05:04:53.788Z] [BOT] ✅ Created forum post: 🏢 IT Data Warehouse Specialist @ ORG_969850e5 Therapies in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T05:04:55.290Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:04:55.290Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:04:55.295Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T05:04:55.296Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T05:04:58.296Z] [BOT] 📌 Posting 1 jobs to #📁・JID_e938df7b
[2025-12-03T05:04:58.296Z] [BOT] 📍 [ROUTING] "GIS Analyst 1" @ ORG_fc33f732 of Amarillo
   Category: HR (matched: "human resources")
   Channel: 📁・JID_e938df7b (1391...7674)
[2025-12-03T05:04:58.570Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #📁・JID_e938df7b
[2025-12-03T05:04:58.570Z] [BOT] ✅ Industry: GIS Analyst 1 @ ORG_fc33f732 of Amarillo
[2025-12-03T05:05:00.275Z] [BOT] ✅ Created forum post: 🏢 GIS Analyst 1 @ ORG_fc33f732 of Amarillo in #🤠・austin
  ✅ Location: 🤠・austin
[2025-12-03T05:05:01.776Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T05:05:01.777Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T05:05:01.783Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T05:05:01.783Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T05:05:04.783Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T05:05:04.785Z] [BOT] ✅ Loaded pending queue: 18 total (0 pending, 18 enriched, 0 posted)
[2025-12-03T05:05:04.786Z] [BOT] ✅ Saved pending queue: 18 total (0 pending, 16 enriched, 2 posted)
[2025-12-03T05:05:04.786Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T05:05:04.825Z] [BOT] 📂 Loaded 682 existing routing entries
[2025-12-03T05:05:04.865Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
[2025-12-03T05:05:04.865Z] [BOT] Total entries: 684
   Timestamp: 2025-12-03T05:05:04.862Z
[2025-12-03T05:05:06.877Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2485) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*