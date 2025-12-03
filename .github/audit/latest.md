# Discord Bot Execution Audit
**Timestamp:** 2025-12-03T03:11:27.380Z
**Exit Code:** ✅ Success
## Metrics
- **Jobs Posted:** 3
- **Jobs Failed:** 0
- **Jobs Skipped:** 4
- **Database Saved:** ✅ Yes
## Sanitized Log Output
```
[2025-12-03T03:11:09.574Z] ========================================
[2025-12-03T03:11:09.576Z] Discord Bot Execution Log
[2025-12-03T03:11:09.576Z] Environment: GitHub Actions
[2025-12-03T03:11:09.576Z] Node Version: v20.19.5
[2025-12-03T03:11:09.576Z] ========================================
[2025-12-03T03:11:09.576Z] Environment Variables Check:
[2025-12-03T03:11:09.576Z] DISCORD_TOKEN: ✅ Set
[2025-12-03T03:11:09.576Z] DISCORD_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_CLIENT_ID: ❌ Not set
[2025-12-03T03:11:09.577Z] DISCORD_GUILD_ID: ❌ Not set
[2025-12-03T03:11:09.577Z] 
Multi-Channel Configuration:
[2025-12-03T03:11:09.577Z] DISCORD_TECH_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_SALES_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_MARKETING_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_FINANCE_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_HEALTHCARE_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_PRODUCT_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_SUPPLY_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.577Z] DISCORD_PM_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.578Z] DISCORD_HR_CHANNEL_ID: ✅ Set
[2025-12-03T03:11:09.578Z] 
Multi-Channel Mode: ✅ ENABLED
[2025-12-03T03:11:09.578Z] 
Data Files Check:
[2025-12-03T03:11:09.578Z] .github/data/new_jobs.json: ✅ Exists (7 items, 39571 bytes)
[2025-12-03T03:11:09.580Z] .github/data/posted_jobs.json: ✅ Exists (5000 items, 333271 bytes)
[2025-12-03T03:11:09.580Z] 
========================================
[2025-12-03T03:11:09.580Z] Starting Enhanced Discord Bot...
[2025-12-03T03:11:09.580Z] ========================================
[2025-12-03T03:11:10.696Z] [BOT] ✅ Enhanced Discord bot logged in as Zapply Jobs Bot#9522
[2025-12-03T03:11:10.697Z] [BOT] 🔍 DEBUG: GUILD_ID = "" (type: string)
🔍 DEBUG: Bot is member of 1 guilds
   - Zapply Career Hub (CH_20db82b8)
[2025-12-03T03:11:10.697Z] [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
[2025-12-03T03:11:10.698Z] [BOT] 📦 Exporting 7 jobs to encrypted JSON...
[2025-12-03T03:11:10.778Z] [BOT] ✅ Export complete: Added 0, Skipped 7, Total 7
[2025-12-03T03:11:10.779Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer 1 at McDonald's
[2025-12-03T03:11:10.779Z] [BOT] ⏭️ Skipping already posted (legacy ID): ROLE_2237147a at Citizen Health
[2025-12-03T03:11:10.780Z] [BOT] ⏭️ Skipping already posted (legacy ID): Software Engineer – New Grad - 2026 Start at Zip
[2025-12-03T03:11:10.780Z] [BOT] ⏭️ Skipping already posted (legacy ID): Full-Stack Developer - Junior at Booz Allen
📬 Found 3 new jobs (4 already posted)...
[2025-12-03T03:11:10.780Z] [BOT] 📋 After blacklist filter: 3 jobs (0 blacklisted)
[2025-12-03T03:11:10.780Z] [BOT] 📋 After title+company+location dedup: 3 unique jobs to post
[2025-12-03T03:11:10.780Z] [BOT] 📤 Posting 3 jobs...
🔀 Multi-channel mode enabled - routing jobs to appropriate forums
[2025-12-03T03:11:10.782Z] [BOT] 📌 Posting 3 jobs to #💻・tech-jobs
[2025-12-03T03:11:10.782Z] [BOT] 📍 [ROUTING] "Research Associate - Electrical and Computer Engineering" @ ORG_15a5b314 Mellon University
[2025-12-03T03:11:10.782Z] [BOT] Category: TECH (matched: "engineer/engineering")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:11:10.787Z] [BOT ERROR] (node:2602) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
[2025-12-03T03:11:11.037Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・tech-jobs
  ✅ Industry: Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University
[2025-12-03T03:11:12.831Z] [BOT] ✅ Created forum post: 🏢 Research Associate - Electrical and Computer Engineering @ ORG_15a5b314 Mellon University in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T03:11:14.331Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:11:14.331Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:11:14.337Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T03:11:14.337Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
📍 [ROUTING] "Business Intelligence Developer 1" @ ORG_d5eef8ad Space
[2025-12-03T03:11:14.338Z] [BOT] Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:11:14.575Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Space in #💻・tech-jobs
  ✅ Industry: Business Intelligence Developer 1 @ ORG_d5eef8ad Space
[2025-12-03T03:11:16.269Z] [BOT] ✅ Created forum post: 🏢 Business Intelligence Developer 1 @ ORG_d5eef8ad Space in #💻・remote-usa
  ✅ Location: 💻・remote-usa
[2025-12-03T03:11:17.769Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:11:17.770Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:11:17.773Z] [BOT] 💾 Saved 5000 posted jobs to database
[2025-12-03T03:11:17.773Z] [BOT] ✅ Verified: Database file contains 5000 jobs
📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T03:11:17.773Z] [BOT] 📍 [ROUTING] "Software Development Engineer" @ ORG_72fd3ae0
   Category: TECH (matched: "software")
   Channel: 💻・tech-jobs (1391...8819)
[2025-12-03T03:11:18.187Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #💻・tech-jobs
[2025-12-03T03:11:18.187Z] [BOT] ✅ Industry: Software Development Engineer @ ORG_72fd3ae0
[2025-12-03T03:11:19.995Z] [BOT] ✅ Created forum post: 🎨 Software Development Engineer @ ORG_72fd3ae0 in #🌉・san-francisco
[2025-12-03T03:11:19.996Z] [BOT] ✅ Location: 🌉・san-francisco
[2025-12-03T03:11:21.497Z] [BOT] 💾 BEFORE SAVE: Database has 5001 jobs
[2025-12-03T03:11:21.498Z] [BOT] 💾 Trimmed to 5000 jobs (capacity limit - kept most recent)
[2025-12-03T03:11:21.502Z] [BOT] 💾 Saved 5000 posted jobs to database
✅ Verified: Database file contains 5000 jobs
[2025-12-03T03:11:21.502Z] [BOT] 📊 Database path: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/data/posted_jobs.json
[2025-12-03T03:11:24.503Z] [BOT] 🎉 Posting complete! Successfully posted: 3, Failed: 0
[2025-12-03T03:11:24.504Z] [BOT] ✅ Loaded pending queue: 7 total (0 pending, 7 enriched, 0 posted)
[2025-12-03T03:11:24.505Z] [BOT] ✅ Saved pending queue: 7 total (0 pending, 4 enriched, 3 posted)
[2025-12-03T03:11:24.505Z] [BOT] 📋 Updated queue: marked 3 jobs as posted
✅ All posting operations complete, cleaning up...
[2025-12-03T03:11:24.544Z] [BOT] 📂 Loaded 656 existing routing entries
[2025-12-03T03:11:24.585Z] [BOT] 🔐 Encrypted routing log saved: /home/runner/work/New-Grad-Jobs-2026/New-Grad-Jobs-2026/.github/audit/routing-encrypted.json
   New entries: 3
[2025-12-03T03:11:24.585Z] [BOT] Total entries: 659
   Timestamp: 2025-12-03T03:11:24.583Z
[2025-12-03T03:11:26.596Z] 
========================================
```
## Errors Detected
- DISCORD_CLIENT_ID: ❌ Not set
- DISCORD_GUILD_ID: ❌ Not set
- [BOT ERROR] ⚠️ DISCORD_GUILD_ID not set
- [BOT ERROR] (node:2602) DeprecationWarning: The ready event has been renamed to clientReady to distinguish it from the gateway READY event and will only emit under that name in v15. Please use clientReady instead.
---
*Log sanitized for repository commit. Full logs available as GitHub Actions artifacts.*