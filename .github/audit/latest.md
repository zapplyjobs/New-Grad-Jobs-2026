# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T04:30:51.294Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 2
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T04:30:36.898Z] ========================================
[2025-12-03T04:30:36.899Z] Discord Bot Execution Log
[2025-12-03T04:30:36.900Z] Environment: GitHub Actions
[2025-12-03T04:30:36.900Z] Node Version: v20.19.6
[2025-12-03T04:30:36.900Z] ========================================
[2025-12-03T04:30:36.900Z] Environment Variables Check:
[2025-12-03T04:30:36.900Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T04:30:36.900Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T04:30:36.900Z] 
Multi-Channel Configuration:
[2025-12-03T04:30:36.900Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.900Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.901Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T04:30:36.901Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T04:30:36.901Z] 
Data Files Check:
[2025-12-03T04:30:36.901Z] .github/data/new_jobs.json: ✅ Exists (6 items, 30255 bytes)
[2025-12-03T04:30:36.903Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333720 bytes)
[2025-12-03T04:30:36.903Z] 
========================================
[2025-12-03T04:30:36.903Z] Starting Enhanced Discord Bot...
[2025-12-03T04:30:36.903Z] ========================================
[2025-12-03T04:30:38.091Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T04:30:38.091Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T04:30:38.092Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T04:30:38.093Z] [BOT] 📦 Exporting 6 jobs to encrypted JSON...
[2025-12-03T04:30:38.173Z] [BOT] ✅ Export complete: Added 0, Skipped 6, Total 6
[2025-12-03T04:30:38.173Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T04:30:38.173Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T04:30:38.174Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T04:30:38.174Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
[2025-12-03T04:30:38.174Z] [BOT] 📬 Found 2 new jobs (4 already posted)...
[2025-12-03T04:30:38.174Z] [BOT] 📋 After blacklist filter: 2 jobs (0 blacklisted)
[2025-12-03T04:30:38.174Z] [BOT] 📋 After title+company+location dedup: 2 unique jobs to post
📤 Posting 2 jobs...
[2025-12-03T04:30:38.175Z] [BOT] 🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T04:30:38.175Z] [BOT] 📌 Posting 2 jobs to #💻・tech-jobs
[2025-12-03T04:30:38.176Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:30:38.180Z] [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T04:30:38.391Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
  ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T04:30:40.099Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T04:30:41.600Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:30:41.600Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:30:41.606Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T04:30:41.606Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Data Scientist - Algorithms Pricing - Optimization" @ ORG_571ce021
[2025-12-03T04:30:41.606Z] [BOT] Category: TECH (matched: "data")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T04:30:41.904Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #💻・tech-jobs
[2025-12-03T04:30:41.904Z] [BOT] ✅ Industry: Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021
[2025-12-03T04:30:43.710Z] [BOT] ✅ Created forum post: 🏢 Data Scientist - Algorithms Pricing - Optimization @ ORG_571ce021 in #🌉・san-francisco
  ✅ Location: 🌉・san-francisco
[2025-12-03T04:30:45.210Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T04:30:45.211Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T04:30:45.214Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T04:30:45.214Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T04:30:48.216Z] [BOT] 🎉 Posting complete! Successfully posted: 2, Failed: 0
[2025-12-03T04:30:48.216Z] [BOT] ✅ Loaded pending queue: 6 total (0 pending, 6 enriched, 0 posted)
[2025-12-03T04:30:48.217Z] [BOT] ✅ Saved pending queue: 6 total (0 pending, 4 enriched, 2 posted)
[2025-12-03T04:30:48.217Z] [BOT] 📋 Updated queue: marked 2 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T04:30:48.257Z] [BOT] 📂 Loaded 676 existing routing entries
[2025-12-03T04:30:48.295Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 2
   Total entries: 678
   Timestamp: 2025-12-03T04:30:48.294Z
[2025-12-03T04:30:50.304Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2437) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*